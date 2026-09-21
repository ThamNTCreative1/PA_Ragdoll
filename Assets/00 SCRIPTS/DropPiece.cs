using System.Collections;
using UnityEngine;

public class DropPiece : MonoBehaviour
{
    [SerializeField] private HingeJoint2D joint;

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Trap"))
        {
            joint.enabled = false;
            StartCoroutine(ResetTag());
        }
    }
    private IEnumerator ResetTag()
    {
        yield return new WaitForSeconds(0.5f);
        joint.tag = "Untagged";
    }
}
