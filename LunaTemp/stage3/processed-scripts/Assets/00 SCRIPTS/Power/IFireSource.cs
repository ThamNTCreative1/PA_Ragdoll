using UnityEngine;

// Nguồn lửa cho Burning (power Lửa, súng phun lửa...): cung cấp frame hoạt ảnh lửa, sprite tàn lửa/khói và scale world.
public interface IFireSource
{
    Sprite[] Frames { get; }
    float FrameRate { get; }
    float WorldScale { get; }
    Sprite EmberSprite { get; }
    Sprite SmokeSprite { get; }
}
