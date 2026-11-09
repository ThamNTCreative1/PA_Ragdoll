// Nhận damage từ power (lửa, sét, bão, lốc).
// useId = mã lượt dùng power gây ra damage (PowerController.UseId), để giáp tính theo lượt.
public interface IDamageable
{
    void TakeDamage(int amount, int useId);
}
