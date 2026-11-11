using DG.Tweening;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Single owner of the camera view; _center moves freely and the shown position eases toward it with rubber-band resistance at the map edge.
    public class CameraController : MonoBehaviour
    {
        #region Fields
        [SerializeField] private Camera targetCamera;
        [SerializeField] private InteractionConfigSO config;

        [Header("Playable: fixed zoom")]
        [Tooltip("No scroll/pinch/slider zoom; the size is fitted per aspect so minView is always visible")]
        [SerializeField] private bool lockZoom = true;
        [Tooltip("World-space width x height that must always be on screen when zoom is locked")]
        [SerializeField] private Vector2 minView = new Vector2(9f, 5.12f);

        public bool ZoomLocked => lockZoom;

        // Smallest orthographic size that shows the whole minView at this aspect.
        private float LockedSize(float aspect)
            => Mathf.Max(minView.y * 0.5f, minView.x * 0.5f / Mathf.Max(0.01f, aspect));

        private IEventBus _events;
        private CameraZoomModel _zoom;
        private readonly CameraBoundsModel _bounds = new CameraBoundsModel();
        private Vector3 _initialPosition;
        private float _initialSize;
        private float _lastAspect;

        private Vector2 _center;
        private Vector2 _shownCenter; // last frame's eased view, before shake and clamping
        private float _targetSize;
        private bool _panning;
        private Vector2 _settleVelocity;
        private float _zoomVelocity;

        private Vector2 _shakeOffset;   // current frame's shake displacement, layered on the settled view
        private float _shakeAmplitude;
        private float _shakeDuration;
        private float _shakeRemaining;

        public Camera Camera => targetCamera;
        public bool IsReady => targetCamera != null && _zoom != null;

        #endregion

        #region Subscriptions
        // Subscribe in Awake, not Start: MapBootstrapLoader publishes MapSpawnedEvent from its own Start, and Start order isn't guaranteed.
        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _events.Subscribe<MapSpawnedEvent>(OnMapSpawned);
            _events.Subscribe<SliderValueChangedEvent>(OnSliderChanged);
            _events.Subscribe<ResetRequestedEvent>(OnResetRequested);
            _events.Subscribe<CameraShakeEvent>(OnCameraShake);
            if (targetCamera == null) targetCamera = Camera.main;
            if (targetCamera != null)
            {
                if (config != null)
                    _zoom = new CameraZoomModel(config.zoomMin, config.zoomMax, targetCamera.orthographicSize);
                _initialPosition = targetCamera.transform.position;
                _initialSize = targetCamera.orthographicSize;
                _center = targetCamera.transform.position;
                _shownCenter = _center;
                _targetSize = targetCamera.orthographicSize;
                _lastAspect = targetCamera.aspect;
            }
        }

        private void OnDestroy()
        {
            _events?.Unsubscribe<MapSpawnedEvent>(OnMapSpawned);
            _events?.Unsubscribe<SliderValueChangedEvent>(OnSliderChanged);
            _events?.Unsubscribe<ResetRequestedEvent>(OnResetRequested);
            _events?.Unsubscribe<CameraShakeEvent>(OnCameraShake);
            _shot?.Kill();
        #endregion

        #region Pan and zoom input
        }

        public void BeginPan() => _panning = true;

        // Releasing hands the logical center back to the map; LateUpdate eases the visible position to it.
        public void EndPan()
        {
            _panning = false;
            _center = ClampHard(_center);
        }

        public void PanBy(Vector2 worldDelta)
        {
            if (!IsReady || _scripted) return;
            PanTravel += worldDelta.magnitude;
            _center += worldDelta;
            _center = _panning ? LimitOverscroll(_center) : ClampHard(_center);
        }

        // While dragging, the logical centre may run past the map edge (the view rubber-bands), but only
        // so far: unbounded, a long overdrag left a dead zone where dragging back did nothing visible.
        private Vector2 LimitOverscroll(Vector2 center)
        {
            Vector2 hard = ClampHard(center);
            float maxY = 2f * config.panSlack * _targetSize;
            float maxX = maxY * targetCamera.aspect;
            return new Vector2(
                Mathf.Clamp(center.x, hard.x - maxX, hard.x + maxX),
                Mathf.Clamp(center.y, hard.y - maxY, hard.y + maxY));
        }

        // Anchored zoom computed analytically, since size eases over several frames and a measured pivot would drift.
        public void ZoomBySteps(int steps, Vector2 anchorWorld)
        {
            if (!IsReady || lockZoom) return;
            float previous = _targetSize;
            _targetSize = _zoom.ApplyScrollSteps(steps, config.zoomStepFactor);
            if (previous > 0f)
                _center = anchorWorld + (_center - anchorWorld) * (_targetSize / previous);
            if (!_panning) _center = ClampHard(_center);
            PublishZoom();
        }

        // Continuous version of ZoomBySteps for a pinch gesture.
        public void ZoomByMultiplier(float ratio, Vector2 anchorWorld)
        {
            if (!IsReady || lockZoom) return;
            float previous = _targetSize;
            _targetSize = _zoom.ApplyMultiplier(ratio);
            if (previous > 0f)
                _center = anchorWorld + (_center - anchorWorld) * (_targetSize / previous);
            if (!_panning) _center = ClampHard(_center);
            PublishZoom();
        }
        #endregion

        #region Scripted shots (playable intro)
        private bool _scripted;
        private Tween _shot;

        // Total distance the player has dragged the view, clamped or not (the intro's "you panned" check).
        public float PanTravel { get; private set; }
        public bool IsPanning => _panning;
        public bool IsScripted => _scripted;
        // True when the map is bigger than the gameplay view in either direction, i.e. there is somewhere to drag to.
        public bool CanPanView
        {
            get
            {
                if (!IsReady || !_bounds.HasBounds) return false;
                float h = _targetSize * 2f, w = h * targetCamera.aspect;
                return _bounds.MaxX - _bounds.MinX > w + 0.05f || _bounds.MaxY - _bounds.MinY > h + 0.05f;
            }
        }

        // The fixed gameplay size for the current screen.
        public float GameplaySize => _targetSize;

        // Takes the camera off the player and eases it to `center` at orthographic `size` (kept inside
        // the map). It stays there until ReleaseShot.
        public Tween PlayShot(Vector2 center, float size, float duration)
        {
            if (!IsReady) return null;
            _scripted = true;
            _panning = false;
            // Never wider than the map can fill, so the shot doesn't show past its edges.
            if (_bounds.HasBounds) size = Mathf.Min(size, _bounds.CoverOrthoSize(targetCamera.aspect));
            _shakeRemaining = 0f;
            var (x, y) = _bounds.HasBounds
                ? _bounds.ClampCenter(center.x, center.y, size, targetCamera.aspect)
                : (center.x, center.y);
            _shot?.Kill();
            var t = targetCamera.transform;
            _shot = DOTween.Sequence()
                .Join(targetCamera.DOOrthoSize(size, duration).SetEase(Ease.InOutSine))
                .Join(t.DOMove(new Vector3(x, y, t.position.z), duration).SetEase(Ease.InOutSine));
            return _shot;
        }

        // Eases back to the gameplay size, as close to the current view as the map allows, then hands
        // the camera back to the player.
        public Tween ReleaseShot(float duration) => ReleaseShot(duration, targetCamera.transform.position);

        // Same, but lands on `center` (kept inside the map at the gameplay size).
        public Tween ReleaseShot(float duration, Vector2 center)
        {
            if (!IsReady || !_scripted) return null;
            _center = ClampHard(center);
            var t = targetCamera.transform;
            _shot?.Kill();
            _shot = DOTween.Sequence()
                .Join(targetCamera.DOOrthoSize(_targetSize, duration).SetEase(Ease.InOutSine))
                .Join(t.DOMove(new Vector3(_center.x, _center.y, t.position.z), duration).SetEase(Ease.InOutSine))
                .OnComplete(() =>
                {
                    _scripted = false;
                    Snap();
                });
            return _shot;
        }
        #endregion

        #region Events

        // Slider zoom is absolute and centered — the thumb position IS the zoom, no anchor.
        private void OnSliderChanged(SliderValueChangedEvent e)
        {
            if (!IsReady || lockZoom) return;
            _targetSize = _zoom.ApplyNormalized(e.NormalizedValue);
            _center = ClampHard(_center);
        }

        // World reset restores the scene's starting view — or re-frames the map once one owns the camera.
        private void OnResetRequested(ResetRequestedEvent e)
        {
            if (!IsReady) return;
            if (_bounds.HasBounds)
            {
                FocusStartView();
                return;
            }
            _targetSize = _zoom.ResetTo(_initialSize);
            _center = _initialPosition;
            Snap();
            PublishZoom();
        }

        private void OnMapSpawned(MapSpawnedEvent e)
        {
            _bounds.Set(e.MinX, e.MinY, e.MaxX, e.MaxY);
            // Remembered, not just applied: reset has to return to the view the map authored, and
            // by then the event is long gone.
            _hasStartView = e.HasStartView;
            _startCenter = new Vector2(e.StartX, e.StartY);
            _startZoom = e.StartZoom;
            FocusStartView();
        }

        private bool _hasStartView;
        private Vector2 _startCenter;
        private float _startZoom;

        // The map's authored opening view, or the middle of it when the map authored none.
        private void FocusStartView()
        {
            if (_hasStartView) FocusOn(_startCenter, _startZoom);
            else FocusMapCenter();
        }

        // Keeps the strongest active shake instead of stacking.
        private void OnCameraShake(CameraShakeEvent e)
        {
            float current = _shakeDuration > 0f ? _shakeAmplitude * (_shakeRemaining / _shakeDuration) : 0f;
            if (e.Amplitude < current) return;
            _shakeAmplitude = e.Amplitude;
            _shakeDuration = Mathf.Max(0.0001f, e.Duration);
            _shakeRemaining = _shakeDuration;
        #endregion

        #region Shake
        }

        // Decaying random jitter, scaled by zoom so the shake reads the same on screen at any zoom.
        private Vector2 NextShakeOffset(float dt)
        {
            if (_shakeRemaining <= 0f) return Vector2.zero;
            _shakeRemaining -= dt;
            if (_shakeRemaining <= 0f) { _shakeRemaining = 0f; return Vector2.zero; }

            float falloff = _shakeRemaining / _shakeDuration;
            float mag = _shakeAmplitude * falloff * falloff;
            if (_initialSize > 0f) mag *= targetCamera.orthographicSize / _initialSize;
            return Random.insideUnitCircle * mag;
        }
        #endregion

        #region Framing and bounds

        // Arrives centered on the map at a mid zoom (focusZoomIn), snapped with no easing in.
        public void FocusMapCenter()
            => FocusOn(new Vector2(_bounds.CenterX, _bounds.CenterY), config.focusZoomIn);

        // `zoom01` runs fully-out (0) to closest-in (1), the same axis the slider uses — relative, so
        // it frames alike on a small map and a large one. The range is rebuilt for THIS map first,
        // then the centre is clamped to the resulting zoom, so an authored view outside the map
        // settles at the nearest legal one rather than showing the void.
        public void FocusOn(Vector2 center, float zoom01)
        {
            if (!IsReady || !_bounds.HasBounds) return;
            RebuildZoomRange();
            _targetSize = _zoom.ApplyNormalized(zoom01);
            _center = ClampHard(center);
            Snap();
            PublishZoom();
        }

        // Map's cover size is the zoom-out limit (derived per aspect); config.zoomMax still clamps as a ceiling on top.
        private void RebuildZoomRange()
        {
            if (lockZoom)
            {
                // Never larger than the map can fill, so the view never shows past its edges.
                float size = Mathf.Min(LockedSize(targetCamera.aspect), _bounds.CoverOrthoSize(targetCamera.aspect));
                _zoom = new CameraZoomModel(size, size, size);
                _lastAspect = targetCamera.aspect;
                return;
            }
            float cover = Mathf.Clamp(_bounds.CoverOrthoSize(targetCamera.aspect), config.zoomMin, config.zoomMax);
            _zoom = new CameraZoomModel(config.zoomMin, cover, _zoom != null ? _zoom.Size : cover);
            _lastAspect = targetCamera.aspect;
        #endregion

        #region Per-frame view
        }

        private void LateUpdate()
        {
            if (!IsReady || _scripted) return;

            // Aspect changes (device rotation, window resize) change what "whole map framed" means.
            if (_bounds.HasBounds && !Mathf.Approximately(targetCamera.aspect, _lastAspect))
            {
                RebuildZoomRange();
                _targetSize = _zoom.ResetTo(_targetSize);
                _center = ClampHard(_center);
                PublishZoom();
            }

            targetCamera.orthographicSize = config.zoomSmoothTime > 0f
                ? Mathf.SmoothDamp(targetCamera.orthographicSize, _targetSize,
                    ref _zoomVelocity, config.zoomSmoothTime)
                : _targetSize;

            // While dragging the view tracks the finger; released, it eases to the settled center. Tracked in
            // its own field, since the transform now carries both the shake and the clamp.
            Vector2 shown;
            if (_panning)
            {
                shown = _center;
                _settleVelocity = Vector2.zero;
            }
            else
            {
                shown = config.settleTime > 0f
                    ? Vector2.SmoothDamp(_shownCenter, _center, ref _settleVelocity, config.settleTime)
                    : _center;
            }
            _shownCenter = shown;

            // Bounded WITH the shake on it. The clamp used to run on the settled centre alone and the jitter
            // went on afterwards, so a big blast walked the view off the map and showed the void.
            _shakeOffset = NextShakeOffset(Time.deltaTime);
            Vector2 view = shown + _shakeOffset;
            view = _panning ? Elastic(view) : ClampHard(view);
            targetCamera.transform.position =
                new Vector3(view.x, view.y, targetCamera.transform.position.z);
        }

        // Drops the view exactly where it belongs with no easing, for focus/reset.
        private void Snap()
        {
            targetCamera.orthographicSize = _targetSize;
            targetCamera.transform.position =
                new Vector3(_center.x, _center.y, targetCamera.transform.position.z);
            _shownCenter = _center;
            _settleVelocity = Vector2.zero;
            _zoomVelocity = 0f;
            _shakeOffset = Vector2.zero;
            _shakeRemaining = 0f;
        }

        // Keeps the UI slider honest — without this it goes stale after focus/scroll zooms.
        private void PublishZoom() => _events?.Publish(new CameraZoomChangedEvent(_zoom.Normalized));

        private Vector2 ClampHard(Vector2 center)
        {
            var (x, y) = _bounds.ClampCenter(center.x, center.y, _targetSize, targetCamera.aspect);
            return new Vector2(x, y);
        }

        // Slack scales with the visible size, so the edge gives the same amount relative to what you see.
        private Vector2 Elastic(Vector2 center)
        {
            float slackY = config.panSlack * _targetSize;
            float slackX = slackY * targetCamera.aspect;
            var (x, y) = _bounds.ClampCenterElastic(
                center.x, center.y, _targetSize, targetCamera.aspect, slackX, slackY);
            return new Vector2(x, y);
        }
        #endregion
    }
}
