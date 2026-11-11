Shader "Custom/2D/SpriteWaterWaveRandom"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)

        [Header(Wave)]
        _WaveStrength ("Wave Strength", Range(0, 0.1)) = 0.012
        _WaveScale ("Wave Scale", Range(1, 30)) = 10
        _WaveSpeed ("Wave Speed", Range(0, 10)) = 1.5

        [Header(Randomness)]
        _Randomness ("Randomness", Range(0, 2)) = 0.7
        _VerticalStrength ("Vertical Strength", Range(0, 0.05)) = 0.003
    }

    SubShader
    {
        Tags
        {
            "Queue" = "Transparent"
            "IgnoreProjector" = "True"
            "RenderType" = "Transparent"
            "PreviewType" = "Plane"
            "CanUseSpriteAtlas" = "True"
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
                fixed4 color : COLOR;
                float randomSeed : TEXCOORD1;
            };

            sampler2D _MainTex;

            fixed4 _Color;

            float _WaveStrength;
            float _WaveScale;
            float _WaveSpeed;

            float _Randomness;
            float _VerticalStrength;

            // Pseudo random
            float hash(float n)
            {
                return frac(sin(n) * 43758.5453);
            }

            v2f vert(appdata v)
            {
                v2f o;

                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.color = v.color * _Color;

                // Tạo seed khác nhau dựa theo vị trí object
                float2 objectPos = float2(
                    unity_ObjectToWorld._m03,
                    unity_ObjectToWorld._m13
                );

                o.randomSeed =
                    hash(objectPos.x * 12.9898 +
                         objectPos.y * 78.233);

                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float2 uv = i.uv;

                float time = _Time.y * _WaveSpeed;

                float seed = i.randomSeed * 10.0;

                // ------------------------
                // Wave Layer 1
                // ------------------------

                float wave1 =
                    sin(
                        uv.y * _WaveScale +
                        time +
                        seed
                    );

                // ------------------------
                // Wave Layer 2
                // ------------------------

                float wave2 =
                    sin(
                        uv.y * (_WaveScale * 1.73) -
                        time * 1.31 +
                        uv.x * 2.3 +
                        seed * 2.1
                    );

                // ------------------------
                // Wave Layer 3
                // ------------------------

                float wave3 =
                    sin(
                        uv.y * (_WaveScale * 0.63) +
                        time * 0.57 -
                        uv.x * 4.7 +
                        seed * 3.7
                    );

                // ------------------------
                // Wave Layer 4
                // Sóng nhỏ tốc độ nhanh
                // ------------------------

                float wave4 =
                    sin(
                        uv.y * (_WaveScale * 2.31) -
                        time * 1.7 +
                        uv.x * 7.0 +
                        seed * 5.2
                    );

                // Trộn nhiều lớp
                float horizontalWave =
                    wave1 * 0.45 +
                    wave2 * 0.28 +
                    wave3 * 0.18 +
                    wave4 * 0.09;

                // Randomness làm tăng sự hỗn loạn
                horizontalWave *=
                    lerp(
                        0.7,
                        1.3,
                        sin(
                            uv.y * 7.37 +
                            time * 0.31 +
                            seed
                        ) * 0.5 + 0.5
                    );

                uv.x +=
                    horizontalWave *
                    _WaveStrength *
                    (1.0 + _Randomness * 0.4);


                // ========================
                // Vertical distortion
                // ========================

                float verticalWave =
                    sin(
                        uv.x * 9.73 +
                        time * 0.83 +
                        seed
                    );

                verticalWave +=
                    sin(
                        uv.x * 17.21 -
                        time * 0.46 +
                        uv.y * 3.4
                    ) * 0.4;

                uv.y +=
                    verticalWave *
                    _VerticalStrength *
                    _Randomness;


                fixed4 col =
                    tex2D(_MainTex, uv);

                col *= i.color;

                return col;
            }

            ENDCG
        }
    }

    FallBack "Sprites/Default"
}