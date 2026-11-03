Shader "OBP/LiriliVertexColor"
{
    Properties
    {
        _Color ("Tint", Color) = (1,1,1,1)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata { float4 vertex:POSITION; float3 normal:NORMAL; fixed4 color:COLOR; };
            struct v2f { float4 vertex:SV_POSITION; fixed4 color:COLOR; };
            fixed4 _Color;
            v2f vert(appdata v)
            {
                v2f o;
                o.vertex=UnityObjectToClipPos(v.vertex);
                float light=0.65+0.35*saturate(dot(normalize(UnityObjectToWorldNormal(v.normal)),normalize(float3(-0.45,0.8,0.55))));
                fixed3 rgb=v.color.rgb*_Color.rgb*light;
                #ifndef UNITY_COLORSPACE_GAMMA
                    rgb=GammaToLinearSpace(rgb);
                #endif
                o.color=fixed4(rgb,1);
                return o;
            }
            fixed4 frag(v2f i):SV_Target { return i.color; }
            ENDCG
        }
    }
    Fallback "Unlit/Color"
}
