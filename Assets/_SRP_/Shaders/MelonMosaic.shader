Shader "MelonSandbox/Mosaic"
{
    Properties
    {
        _MainTex ("Sprite", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        [HideInInspector] _OpaqueRegion ("Opaque full region", Float) = 0
        _CellSize ("Cell size", Float) = .42
        [HideInInspector] _SpriteUVX ("Sprite UV X", Vector) = (1,0,0,0)
        [HideInInspector] _SpriteUVY ("Sprite UV Y", Vector) = (0,1,0,0)
        [HideInInspector] _SpriteRowX ("World to sprite X", Vector) = (1,0,0,0)
        [HideInInspector] _SpriteRowY ("World to sprite Y", Vector) = (0,1,0,0)
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" }
        Cull Off Lighting Off ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata { float4 vertex : POSITION; };
            struct v2f { float4 pos : SV_POSITION; float3 world : TEXCOORD0; };
            sampler2D _MainTex;
            float4 _Color, _SpriteUVX, _SpriteUVY, _SpriteRowX, _SpriteRowY;
            float _CellSize, _OpaqueRegion;
            v2f vert(appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.world = mul(unity_ObjectToWorld, v.vertex).xyz;
                return o;
            }
            fixed4 frag(v2f i) : SV_Target
            {
                float2 cell = (floor(i.world.xy / _CellSize) + .5) * _CellSize;
                float4 sampleWorld = float4(cell, i.world.z, 1);
                float2 uv = float2(dot(_SpriteRowX, sampleWorld), dot(_SpriteRowY, sampleWorld));
                if (_OpaqueRegion < .5)
                    clip(min(min(uv.x, uv.y), min(1 - uv.x, 1 - uv.y)));
                else
                    uv = saturate(uv);
                float3 localUV = float3(uv, 1);
                float2 textureUV = float2(dot(_SpriteUVX.xyz, localUV), dot(_SpriteUVY.xyz, localUV));
                fixed4 color = tex2D(_MainTex, textureUV) * _Color;
                if (_OpaqueRegion < .5) clip(color.a - .15);
                else
                {
                    // Keep every cell opaque even where the source has alpha.
                    float variation = frac(sin(dot(floor(i.world.xy / _CellSize), float2(12.9898, 78.233))) * 43758.5453);
                    color.rgb = lerp(float3(.2, .28, .34), color.rgb, color.a)
                        * (.85 + variation * .3);
                }
                return fixed4(color.rgb, 1);
            }
            ENDCG
        }
    }
}

