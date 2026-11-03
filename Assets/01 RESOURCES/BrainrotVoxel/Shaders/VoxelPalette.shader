Shader "OBP/VoxelPalette"
{
    Properties
    {
        _Tint ("Tint", Color) = (1,1,1,1)
        _Freeze ("Freeze", Range(0,1)) = 0
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
            struct appdata { float4 vertex : POSITION; float3 normal : NORMAL; fixed4 color : COLOR; };
            struct v2f { float4 vertex : SV_POSITION; fixed4 color : COLOR; };
            fixed4 _Tint;
            float _Freeze;
            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                float3 n = normalize(UnityObjectToWorldNormal(v.normal));
                float lighting = 0.66 + 0.34 * saturate(dot(n, normalize(float3(-0.45, 0.8, 0.55))));
                float luminance = dot(v.color.rgb, float3(0.299, 0.587, 0.114));
                fixed3 ice = lerp(fixed3(0.10,0.40,0.66), fixed3(0.73,0.97,1.0), luminance);
                fixed3 rgb = lerp(v.color.rgb, ice, _Freeze) * _Tint.rgb * lighting;
                #ifndef UNITY_COLORSPACE_GAMMA
                    rgb = GammaToLinearSpace(rgb);
                #endif
                o.color = fixed4(rgb, 1);
                return o;
            }
            fixed4 frag(v2f i) : SV_Target { return i.color; }
            ENDCG
        }
    }
    Fallback "Unlit/Color"
}
