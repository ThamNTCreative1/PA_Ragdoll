namespace Game.UI
{
    // Pure toggle state for the gore/blood-splash filter, no MonoBehaviour — defaults on to match the reference game.
    public class BloodEffectModel
    {
        public bool IsEnabled { get; private set; } = true;

        public bool Toggle()
        {
            IsEnabled = !IsEnabled;
            return IsEnabled;
        }
    }
}
