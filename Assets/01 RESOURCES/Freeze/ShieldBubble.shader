Shader "OBP/ShieldBubble"
{
    // Soap-bubble shield: clear centre, bright rim, shifting rainbow sheen.
    Properties
    {
        _RimColor ("Rim", Color) = (0.55, 0.9, 1, 1)
        _Alpha ("Alpha", Range(0,1)) = 1
        _RimPower ("Rim Power", Range(0.5, 6)) = 2.2
        _SheenSpeed ("Sheen Speed", Float) = 0.6
    }
    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent+10" "IgnoreProjector"="True" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Back
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata { float4 vertex : POSITION; float3 normal : NORMAL; };
            struct v2f { float4 vertex : SV_POSITION; float3 normal : TEXCOORD0; float3 viewDir : TEXCOORD1; float3 local : TEXCOORD2; };
            fixed4 _RimColor;
            float _Alpha, _RimPower, _SheenSpeed;
            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.normal = UnityObjectToWorldNormal(v.normal);
                o.viewDir = WorldSpaceViewDir(v.vertex);
                o.local = v.vertex.xyz;
                return o;
            }
            fixed4 frag(v2f i) : SV_Target
            {
                float3 n = normalize(i.normal), vdir = normalize(i.viewDir);
                float rim = pow(1 - saturate(dot(n, vdir)), _RimPower);
                float band = i.local.y * 3 + i.local.x * 2 + _Time.y * _SheenSpeed;
                fixed3 sheen = 0.5 + 0.5 * cos(6.2831 * (band + float3(0, 0.33, 0.67)));
                float3 L = normalize(float3(-0.45, 0.8, -0.55));
                float spec = pow(saturate(dot(reflect(-L, n), vdir)), 40);
                fixed3 col = lerp(_RimColor.rgb, sheen, 0.35) + spec;
                float a = saturate(0.08 + rim * 0.85 + spec) * _Alpha;
                return fixed4(col, a);
            }
            ENDCG
        }
    }
    Fallback "Unlit/Transparent"
}
