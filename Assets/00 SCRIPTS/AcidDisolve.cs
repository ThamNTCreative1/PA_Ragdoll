using UnityEngine;

public class PixelAcidDamage : MonoBehaviour
{
    [SerializeField] private RagdollController controller;
    [Header("Skin")]
    [SerializeField]
    private SpriteRenderer skinRenderer;

    [Header("Acid Damage")]
    [SerializeField]
    private float damagePerSecond = 1.0f;

    [Header("Update")]
    [SerializeField]
    private float updateInterval = 0.04f;

    [Header("Delay")]
    [SerializeField]
    private float dissolveDelay = 0.35f;

    [Header("Acid Sound")]
    [SerializeField]
    private AcidSound acidSound;

    private bool wasDissolving;


    private Texture2D damageMask;
    private Color32[] damagePixels;
    private float[] contactTimers;

    private Material skinMaterial;

    private Sprite sprite;

    private int maskWidth;
    private int maskHeight;

    private Collider2D currentAcid;

    private float lastAcidContactTime;
    private float updateTimer;

    private int remainingPixels;
    private bool dissolveDone;

    private static readonly int DamageMaskID =
        Shader.PropertyToID("_DamageMask");

    private static readonly int BoundsMinID =
        Shader.PropertyToID("_SpriteBoundsMin");

    private static readonly int BoundsSizeID =
        Shader.PropertyToID("_SpriteBoundsSize");


    private void Awake()
    {
        if (acidSound == null)
        {
            acidSound =
                GetComponentInParent<AcidSound>();
        }

        //-----------------------------------
        // Tự tìm child Skin
        //-----------------------------------

        if (skinRenderer == null)
        {
            Transform skin =
                transform.Find("Skin");

            if (skin != null)
            {
                skinRenderer =
                    skin.GetComponent<SpriteRenderer>();
            }
        }


        if (skinRenderer == null)
        {
            Debug.LogError(
                name + " : Không tìm thấy Skin"
            );

            enabled = false;
            return;
        }


        sprite = skinRenderer.sprite;


        if (sprite == null)
        {
            Debug.LogError(
                name + " : Skin không có Sprite"
            );

            enabled = false;
            return;
        }


        //-----------------------------------
        // Lấy đúng resolution của sprite
        //-----------------------------------

        Rect rect = sprite.rect;

        maskWidth =
            Mathf.RoundToInt(rect.width);

        maskHeight =
            Mathf.RoundToInt(rect.height);


        // Debug.Log(
        //     name +
        //     " Damage Mask = " +
        //     maskWidth +
        //     " x " +
        //     maskHeight
        // );


        //-----------------------------------
        // Material riêng cho body part
        //-----------------------------------

        skinMaterial =
            new Material(
                skinRenderer.material
            );

        skinRenderer.material =
            skinMaterial;


        //-----------------------------------
        // Tạo damage mask đúng size sprite
        //-----------------------------------

        damageMask =
            new Texture2D(
                maskWidth,
                maskHeight,
                TextureFormat.RGBA32,
                false,
                true
            );


        damageMask.name =
            name + "_DamageMask";


        //-----------------------------------
        // Rất quan trọng với pixel-art
        //-----------------------------------

        damageMask.filterMode =
            FilterMode.Point;

        damageMask.wrapMode =
            TextureWrapMode.Clamp;


        damagePixels =
            new Color32[
                maskWidth *
                maskHeight
            ];

        remainingPixels = damagePixels.Length;
        dissolveDone = false;

        // Mỗi pixel có timer tiếp xúc acid riêng.
        contactTimers =
            new float[
                maskWidth *
                maskHeight
            ];


        //-----------------------------------
        // Ban đầu toàn bộ = 0 damage
        //-----------------------------------

        for (
            int i = 0;
            i < damagePixels.Length;
            i++
        )
        {
            damagePixels[i] =
                new Color32(
                    0,
                    0,
                    0,
                    255
                );
        }


        damageMask.SetPixels32(
            damagePixels
        );

        damageMask.Apply(
            false,
            false
        );


        //-----------------------------------
        // Gửi texture cho shader
        //-----------------------------------

        skinMaterial.SetTexture(
            DamageMaskID,
            damageMask
        );


        //-----------------------------------
        // Bounds local của sprite
        //-----------------------------------

        Bounds bounds =
            sprite.bounds;


        skinMaterial.SetVector(
            BoundsMinID,
            new Vector4(
                bounds.min.x,
                bounds.min.y,
                0,
                0
            )
        );


        skinMaterial.SetVector(
            BoundsSizeID,
            new Vector4(
                bounds.size.x,
                bounds.size.y,
                0,
                0
            )
        );
        controller.Piece++;
    }


    private void Update()
    {
        //-----------------------------------
        // Nếu không còn Stay trong acid
        //-----------------------------------

        if (
            Time.time -
            lastAcidContactTime >
            0.1f
        )
        {
            currentAcid = null;
        }


        if (currentAcid == null)
        {
            StopDissolveSound();
            return;
        }


        updateTimer +=
            Time.deltaTime;


        if (
            updateTimer <
            updateInterval
        )
            return;


        float delta =
            updateTimer;

        updateTimer = 0f;


        ApplyAcidDamage(delta);
    }


    private void ApplyAcidDamage(
        float deltaTime
    )
    {
        if (currentAcid == null)
            return;


        Bounds spriteBounds =
            sprite.bounds;


        bool changed =
            false;

        bool isDissolving =
            false;


        //-----------------------------------
        // Đi qua từng pixel thật của sprite
        //-----------------------------------

        for (
            int y = 0;
            y < maskHeight;
            y++
        )
        {
            for (
                int x = 0;
                x < maskWidth;
                x++
            )
            {
                int index =
                    y * maskWidth + x;


                //--------------------------------
                // Center của pixel trong UV
                //--------------------------------

                float u =
                    (x + 0.5f)
                    / maskWidth;

                float v =
                    (y + 0.5f)
                    / maskHeight;


                //--------------------------------
                // UV -> local sprite position
                //--------------------------------

                float localX =
                    Mathf.Lerp(
                        spriteBounds.min.x,
                        spriteBounds.max.x,
                        u
                    );

                float localY =
                    Mathf.Lerp(
                        spriteBounds.min.y,
                        spriteBounds.max.y,
                        v
                    );


                Vector3 localPoint =
                    new Vector3(
                        localX,
                        localY,
                        0
                    );


                //--------------------------------
                // Local -> World
                //--------------------------------

                Vector3 worldPoint =
                    skinRenderer
                    .transform
                    .TransformPoint(
                        localPoint
                    );


                //--------------------------------
                // Pixel này có nằm trong Acid?
                //--------------------------------

                bool insideAcid =
                    currentAcid.bounds.Contains(
                        worldPoint
                    );

                // Pixel rời acid trước khi đủ delay:
                // reset thời gian tiếp xúc của riêng pixel đó.
                if (!insideAcid)
                {
                    contactTimers[index] = 0f;
                    continue;
                }


                //--------------------------------
                // Bỏ qua pixel transparent
                //
                // tránh damage những vùng sprite
                // không có da
                //--------------------------------

                // if (
                //     !IsVisibleSpritePixel(
                //         x,
                //         y
                //     )
                // )
                // {
                //     continue;
                // }


                //--------------------------------
                // Delay riêng cho từng pixel
                //--------------------------------

                contactTimers[index] +=
                    deltaTime;

                if (
                    contactTimers[index] <
                    dissolveDelay
                )
                {
                    continue;
                }


                //--------------------------------
                // Damage hiện tại
                //--------------------------------

                float currentDamage =
                    damagePixels[index].r
                    / 255f;

                // Chỉ tính là đang tan khi pixel đã qua delay
                // và vẫn còn damage để tăng.
                if (currentDamage < 1f)
                {
                    isDissolving = true;
                }


                //--------------------------------
                // Tăng damage
                //--------------------------------

                float newDamage =
                    currentDamage
                    +
                    damagePerSecond
                    * deltaTime;


                newDamage =
                    Mathf.Clamp01(
                        newDamage
                    );


                byte value =
                    (byte)Mathf.RoundToInt(
                        newDamage * 255f
                    );


                if (value != damagePixels[index].r)
                {
                    byte oldValue = damagePixels[index].r;

                    damagePixels[index] =
                        new Color32(
                            value,
                            value,
                            value,
                            255
                        );

                    changed = true;

                    //-----------------------------------
                    // Pixel này vừa tan hoàn toàn
                    //-----------------------------------
                    if (oldValue < 255 && value == 255)
                    {
                        remainingPixels--;

                        //-----------------------------------
                        // Toàn bộ sprite đã tan hết
                        //-----------------------------------
                        if (remainingPixels <= 0 && !dissolveDone)
                        {
                            dissolveDone = true;

                            controller.DestroyPiece();
                        }
                    }
                }
            }
        }


        //-----------------------------------
        // Chỉ update texture khi có thay đổi
        //-----------------------------------

        if (changed)
        {
            damageMask.SetPixels32(
                damagePixels
            );

            damageMask.Apply(
                false,
                false
            );
        }

        //-----------------------------------
        // Báo trạng thái tan cho AcidSound dùng chung
        //-----------------------------------

        if (
            isDissolving &&
            !wasDissolving
        )
        {
            if (acidSound != null)
            {
                acidSound.StartDissolving();
            }

            wasDissolving = true;
        }
        else if (
            !isDissolving &&
            wasDissolving
        )
        {
            StopDissolveSound();
        }
    }

    private void OnTriggerEnter2D(
        Collider2D other
    )
    {
        if (
            !other.CompareTag(
                "Acid"
            )
        )
            return;


        currentAcid =
            other;

        lastAcidContactTime =
            Time.time;
    }


    private void OnTriggerStay2D(
        Collider2D other
    )
    {
        if (
            !other.CompareTag(
                "Acid"
            )
        )
            return;


        currentAcid =
            other;

        lastAcidContactTime =
            Time.time;
    }


    private void OnTriggerExit2D(
        Collider2D other
    )
    {
        if (
            other ==
            currentAcid
        )
        {
            currentAcid =
                null;

            StopDissolveSound();
        }
    }



    private void StopDissolveSound()
    {
        if (!wasDissolving)
            return;

        if (acidSound != null)
        {
            acidSound.StopDissolving();
        }

        wasDissolving = false;
    }


    private void OnDestroy()
    {
        StopDissolveSound();

        if (
            damageMask != null
        )
        {
            Destroy(
                damageMask
            );
        }


        if (
            skinMaterial != null
        )
        {
            Destroy(
                skinMaterial
            );
        }
    }
}