using System.Threading.Tasks;
using Game.Core;
using UnityEngine;

namespace Game.Services
{
    // Round-robin pool of AudioSources, reached only via the Sfx facade. Global mute is AudioListener.volume, not tracked here.
    public class AudioService : IAudioService, IGameService
    {
        private const int VoiceCount = 16;
        // See SfxThrottleModel: one copy of a clip per interval reads as one loud event.
        private const float MinRepeatInterval = 0.06f;

        // Viewport-based spatialization, not Unity's 3D audio — the listener sits on the camera so real distance attenuation wouldn't react.
        private const float MaxPan = 0.7f;        // full-left/right at the screen edge; never hard-panned
        // Half-screen units past the edge before a sound fades to silence.
        private const float OffscreenFadeExtent = 0.75f;

        private readonly SfxThrottleModel _throttle = new SfxThrottleModel(MinRepeatInterval);
        private GameObject _root;
        private AudioSource[] _voices;
        private AudioSource _uiVoice;
        private int _next;

        public Task InitializeAsync()
        {
            _root = new GameObject("[Audio]");
            Object.DontDestroyOnLoad(_root);

            _voices = new AudioSource[VoiceCount];
            for (int i = 0; i < VoiceCount; i++)
                _voices[i] = CreateVoice($"Voice{i}");
            _uiVoice = CreateVoice("VoiceUI");
            return Task.FromResult(true);
        }

        // 2D voices (spatialBlend left at its default 0; Luna warns on touching it) — falloff is handled manually in Play, not by Unity's 3D audio.
        private AudioSource CreateVoice(string name)
        {
            var go = new GameObject(name);
            go.transform.SetParent(_root.transform, false);
            var source = go.AddComponent<AudioSource>();
            source.playOnAwake = false;
            return source;
        }

        public void Play(AudioClip clip, [Bridge.Ref] Vector2 position, float volume = 1f, float pitchJitter = 0f, float pitch = 1f)
        {
            if (clip == null || _voices == null) return;
            // Unscaled time: sounds must dedupe correctly even if gameplay time is ever paused.
            if (!_throttle.TryPlay(clip.GetInstanceID(), Time.unscaledTime)) return;

            Spatialize(position, out _, out float attenuation); // no stereo pan: Luna's AudioSource lacks panStereo
            if (attenuation <= 0f) return; // too far off-screen to hear — don't burn a voice on it

            var voice = _voices[_next];
            _next = (_next + 1) % _voices.Length;

            voice.transform.position = position;
            voice.clip = clip;
            voice.volume = Mathf.Clamp01(volume) * attenuation;
            // Jitter scales WITH the base pitch, so a sped-up shot keeps proportional variation.
            voice.pitch = pitch * (pitchJitter > 0f ? 1f + Random.Range(-pitchJitter, pitchJitter) : 1f);
            voice.Play(); // restarts the voice if stolen mid-clip
        }

        // Pan/volume follow viewport position; zoom-aware for free since both are viewport units.
        private static void Spatialize([Bridge.Ref] Vector2 position, out float pan, out float attenuation)
        {
            pan = 0f;
            attenuation = 1f;
            var cam = Camera.main;
            if (cam == null) return;

            Vector2 camPos = cam.transform.position;
            float halfHeight = cam.orthographicSize;
            float halfWidth = halfHeight * cam.aspect;
            if (halfWidth < 0.0001f || halfHeight < 0.0001f) return;

            float dx = (position.x - camPos.x) / halfWidth;   // ±1 at the screen edge
            float dy = (position.y - camPos.y) / halfHeight;
            pan = Mathf.Clamp(dx, -1f, 1f) * MaxPan;

            float outside = Mathf.Max(Mathf.Abs(dx), Mathf.Abs(dy)) - 1f;
            if (outside > 0f) attenuation = Mathf.Clamp01(1f - outside / OffscreenFadeExtent);
        }

        // PlayOneShot: overlapping UI clicks layer instead of cutting each other off.
        public void PlayUI(AudioClip clip, float volume = 1f)
        {
            if (clip == null || _uiVoice == null) return;
            _uiVoice.PlayOneShot(clip, Mathf.Clamp01(volume));
        }

        public void Tick(float deltaTime) { }

        public void Shutdown()
        {
            if (_root != null) Object.Destroy(_root);
            _root = null;
            _voices = null;
            _uiVoice = null;
        }
    }
}
