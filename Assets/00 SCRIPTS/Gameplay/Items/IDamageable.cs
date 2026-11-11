using Game.Data;

namespace Game.Gameplay
{
    // Anything that can take damage; damage sources find victims through this interface.
    public interface IDamageable
    {
        void TakeDamage(float amount);

        // Damage with a known force source, so breakables shatter away from it.
        // No default body: Luna's compiler doesn't support default interface implementations.
        void TakeDamage(float amount, in FragmentImpact impact);
    }
}
