using System;
using UnityEngine;

public class BodyPiece : MonoBehaviour
{
    [SerializeField] private Transform colli;
    [SerializeField] private Transform skeleton;
    public bool notUseAnim;

    private void Update()
    {
        Follow();
    }

    private void Follow()
    {
        if (!notUseAnim)
        {
            FollowSke();
        }
        else
        {
            FollowColli();
        }
    }
    private void FollowSke()
    {
        colli.SetPositionAndRotation(skeleton.position, skeleton.rotation);
    }
    private void FollowColli()
    {
        skeleton.SetPositionAndRotation(colli.position, colli.rotation);
    }
}