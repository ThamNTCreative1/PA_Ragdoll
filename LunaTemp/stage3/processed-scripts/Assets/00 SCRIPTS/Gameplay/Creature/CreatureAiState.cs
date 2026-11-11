namespace Game.Gameplay
{
    // Per-creature mutable AI state, owned by CreatureAgent and passed by ref into the stateless behavior strategies.
    public struct CreatureAiState
    {
        public float CurrentDirection;
        public float WanderTimer;

        // The target chosen this think, so the agent can veto it on a failed line-of-sight check.
        public bool HasTarget;
        public float TargetX;
        public float TargetY;
    }
}
