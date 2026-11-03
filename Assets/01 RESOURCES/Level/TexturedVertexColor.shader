Shader "OBP/TexturedVertexColor"
{
    // Tiled texture tinted by vertex colour, with the same cheap baked lighting as OBP/VoxelPalette.
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _Boost ("Brightness", Float) = 1
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" "Queue"="Geometry" }
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata { float4 vertex : POSITION; float3 normal : NORMAL; fixed4 color : COLOR; float2 uv : TEXCOORD0; };
            struct v2f { float4 vertex : SV_POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; };
            sampler2D _MainTex;
            float4 _MainTex_ST;
            float _Boost;
            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                float3 n = normalize(UnityObjectToWorldNormal(v.normal));
                float lighting = 0.66 + 0.34 * saturate(dot(n, normalize(float3(-0.45, 0.8, 0.55))));
                // Texture is sampled already linear (sRGB import); only the vertex tint needs converting.
                fixed3 tint = v.color.rgb * lighting * _Boost;
                #ifndef UNITY_COLORSPACE_GAMMA
                    tint = GammaToLinearSpace(tint);
                #endif
                o.color = fixed4(tint, 1);
                return o;
            }
            fixed4 frag(v2f i) : SV_Target
            {
                return fixed4(tex2D(_MainTex, i.uv).rgb * i.color.rgb, 1);
            }
            ENDCG
        }
    }
    Fallback "Unlit/Texture"
}
