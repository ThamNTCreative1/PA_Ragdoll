namespace Game.UI
{
    // Pure toggle state, no MonoBehaviour — testable without a scene.
    public class SoundToggleModel
    {
        public bool IsEnabled { get; private set; } = true;

        public bool Toggle()
        {
            IsEnabled = !IsEnabled;
            return IsEnabled;
        }
    }
}
