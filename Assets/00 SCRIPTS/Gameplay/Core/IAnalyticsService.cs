namespace Game.Core
{
    // One event parameter. The spec types several as Int, and a number logged as a string cannot be
    // aggregated in Firebase, so the type travels with the value rather than being inferred later.
    public struct AnalyticsParam
    {
        public string Name { get; }
        public string Value { get; }
        public bool IsNumber { get; }

        private AnalyticsParam(string name, string value, bool isNumber)
        {
            Name = name;
            Value = value ?? string.Empty;
            IsNumber = isNumber;
        }

        public static AnalyticsParam Text(string name, string value) => new AnalyticsParam(name, value, false);

        public static AnalyticsParam Number(string name, long value)
            => new AnalyticsParam(name, value.ToString(), true);
    }

    // Game-side view of analytics. The implementation lives in Assembly-CSharp because HAVIGAME
    // ships without an asmdef; this interface is the seam, exactly as IAdService is for ads.
    public interface IAnalyticsService
    {
        void LogEvent(string name);

        void LogEvent(string name, params AnalyticsParam[] parameters);

        // Attached to every subsequent event until changed.
        void SetUserProperty(string name, string value);
    }
}
