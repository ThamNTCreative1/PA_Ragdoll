using UnityEngine;

namespace Game.UI
{
    // Tutorial hand for the weapon picker: glides to each card in turn, taps it, and moves on to the
    // next, looping. It follows the cards' live positions, so it stays on them as the panel moves.
    // The hand Image is built in the scene; put this on the picker panel (WeaponSelect).
    public class WeaponTutorialHand : MonoBehaviour
    {
        [Tooltip("Hand Image (pivot on the fingertip, raycast off). Drawn above the list.")]
        [SerializeField] private RectTransform hand;
        [Tooltip("Cards in the order the hand visits them")]
        [SerializeField] private RectTransform[] targets = new RectTransform[0];
        [Tooltip("Where on the card the fingertip lands, in card-local units (0,0 = card centre)")]
        [SerializeField] private Vector2 tapOffset = new Vector2(20f, -30f);

        [Header("Timing")]
        [SerializeField] private float moveTime = 0.45f;
        [SerializeField] private float tapTime = 0.3f;
        [SerializeField] private float holdTime = 0.35f;
        [Tooltip("Hand scale at the bottom of the tap")]
        [SerializeField] private float pressScale = 0.8f;

        private enum Phase { Move, Tap, Hold }

        private Phase _phase;
        private float _t;
        private int _index;
        private int _from;
        private Vector3 _baseScale;

        private void Awake()
        {
            if (hand != null) _baseScale = hand.localScale;
        }

        // Every time the picker shows (first open and after a reset) the tour starts again.
        private void OnEnable()
        {
            _index = 0;
            _from = 0;
            _phase = Phase.Hold;
            _t = holdTime; // straight into the first tap
            if (hand != null)
            {
                hand.gameObject.SetActive(targets.Length > 0);
                hand.localScale = _baseScale;
            }
        }

        private void LateUpdate()
        {
            if (hand == null || targets.Length == 0) return;
            float dt = Time.unscaledDeltaTime;
            _t += dt;

            switch (_phase)
            {
                case Phase.Move:
                {
                    float k = Mathf.Clamp01(_t / Mathf.Max(0.01f, moveTime));
                    k = k * k * (3f - 2f * k); // smoothstep
                    hand.position = Vector3.Lerp(TipOn(_from), TipOn(_index), k);
                    hand.localScale = _baseScale;
                    if (_t >= moveTime) Next(Phase.Tap);
                    break;
                }
                case Phase.Tap:
                {
                    hand.position = TipOn(_index);
                    float k = Mathf.Clamp01(_t / Mathf.Max(0.01f, tapTime));
                    float press = Mathf.Sin(k * Mathf.PI); // down and back up
                    hand.localScale = _baseScale * Mathf.Lerp(1f, pressScale, press);
                    if (_t >= tapTime) Next(Phase.Hold);
                    break;
                }
                case Phase.Hold:
                {
                    hand.position = TipOn(_index);
                    hand.localScale = _baseScale;
                    if (_t >= holdTime)
                    {
                        _from = _index;
                        _index = (_index + 1) % targets.Length;
                        Next(Phase.Move);
                    }
                    break;
                }
            }
        }

        private void Next(Phase phase)
        {
            _phase = phase;
            _t = 0f;
        }

        private Vector3 TipOn(int i)
        {
            var card = targets[i];
            return card == null ? hand.position : card.TransformPoint(card.rect.center + tapOffset);
        }
    }
}
