using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Editor-only test controls: WASD/arrows move, Space jumps, hold F to fire. The on-screen joystick takes over on device.
    public sealed class KeyboardInput : MonoBehaviour
    {
        public PlayerController player;
        public FreezeGun gun;

        private void Update()
        {
            if (!Application.isEditor || player == null) return;
            Vector2 move = new Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
            if (move.sqrMagnitude > 0.01f) player.SetMoveInput(move);
            else if (Input.GetKeyUp(KeyCode.W) || Input.GetKeyUp(KeyCode.A) || Input.GetKeyUp(KeyCode.S) || Input.GetKeyUp(KeyCode.D)
                  || Input.GetKeyUp(KeyCode.UpArrow) || Input.GetKeyUp(KeyCode.DownArrow) || Input.GetKeyUp(KeyCode.LeftArrow) || Input.GetKeyUp(KeyCode.RightArrow))
                player.SetMoveInput(Vector2.zero);
            if (Input.GetKeyDown(KeyCode.Space)) player.Jump();
            if (gun != null && (Input.GetKeyDown(KeyCode.F) || Input.GetKeyUp(KeyCode.F))) gun.SetTrigger(Input.GetKey(KeyCode.F));
        }
    }
}
