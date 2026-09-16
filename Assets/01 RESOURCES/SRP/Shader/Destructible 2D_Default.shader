Shader "Custom/PixelAcidSkinRandom"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)

        _DamageMask ("Damage Mask", 2D) = "black" {}

        _BurnStart ("Burn Start", Range(0,1)) = 0.15
        _Randomness ("Randomness", Range(0,1)) = 0.65

        _BurnColor ("Burn Color", Color) = (0.3,1,0.05,1)

        _SpriteBoundsMin ("Sprite Bounds Min", Vector) = (0,0,0,0)
        _SpriteBoundsSize ("Sprite Bounds Size", Vector) = (1,1,0,0)

        _MaskSize ("Mask Size", Vector) = (27,26,0,0)
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            "PreviewType"="Plane"
            "CanUseSpriteAtlas"="True"
        }

        Cull Off
        Lighting Off
        ZWrite Off

        Blend SrcAlpha OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            sampler2D _MainTex;
            sampler2D _DamageMask;

            fixed4 _Color;
            fixed4 _BurnColor;

            float _BurnStart;
            float _Randomness;

            float4 _SpriteBoundsMin;
            float4 _SpriteBoundsSize;
            float4 _MaskSize;


            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
                fixed4 color : COLOR;
            };


            struct v2f
            {
                float4 vertex : SV_POSITION;
                float2 uv : TEXCOORD0;
                float2 localPos : TEXCOORD1;
                fixed4 color : COLOR;
            };


            float Hash21(float2 p)
            {
                p = frac(
                    p * float2(123.34, 456.21)
                );

                p += dot(
                    p,
                    p + 45.32
                );

                return frac(
                    p.x * p.y
                );
            }


            v2f vert(appdata v)
            {
                v2f o;

                o.vertex =
                    UnityObjectToClipPos(v.vertex);

                o.uv = v.uv;

                o.localPos =
                    v.vertex.xy;

                o.color =
                    v.color * _Color;

                return o;
            }


            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col =
                    tex2D(_MainTex, i.uv)
                    * i.color;

                clip(col.a - 0.001);


                //------------------------------------
                // Local -> Mask UV
                //------------------------------------

                float2 maskUV;

                maskUV.x =
                    (i.localPos.x - _SpriteBoundsMin.x)
                    /
                    max(
                        _SpriteBoundsSize.x,
                        0.0001
                    );

                maskUV.y =
                    (i.localPos.y - _SpriteBoundsMin.y)
                    /
                    max(
                        _SpriteBoundsSize.y,
                        0.0001
                    );

                maskUV =
                    saturate(maskUV);


                //------------------------------------
                // Damage
                //------------------------------------

                float damage =
                    tex2D(
                        _DamageMask,
                        maskUV
                    ).r;


                //------------------------------------
                // Lấy tọa độ pixel thật
                //------------------------------------

                float2 pixelCoord =
                    floor(
                        maskUV *
                        _MaskSize.xy
                    );


                //------------------------------------
                // Mỗi pixel có random riêng
                //------------------------------------

                float randomValue =
                    Hash21(pixelCoord);


                //------------------------------------
                // Threshold riêng của pixel
                //
                // randomness càng lớn
                // càng tan ngẫu nhiên
                //------------------------------------

                float destroyThreshold =
                    lerp(
                        0.35,
                        0.95,
                        randomValue
                    );


                destroyThreshold =
                    lerp(
                        0.55,
                        destroyThreshold,
                        _Randomness
                    );


                //------------------------------------
                // Pixel đã đủ damage -> mất
                //------------------------------------

                if (
                    damage >=
                    destroyThreshold
                )
                {
                    discard;
                }


                //------------------------------------
                // Pixel đang bị ăn
                //------------------------------------

                if (
                    damage >=
                    _BurnStart
                )
                {
                    float burnAmount =
                        saturate(
                            damage /
                            max(
                                destroyThreshold,
                                0.001
                            )
                        );

                    col.rgb =
                        lerp(
                            col.rgb,
                            _BurnColor.rgb,
                            burnAmount * 0.7
                        );
                }


                return col;
            }

            ENDCG
        }
    }
}