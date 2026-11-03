Shader "OBP/IceBlock"
{
    // Faceted translucent ice. Mesh (FreezeLevelBuilder.IceChunk): vertex colour R = facet brightness,
    // uv = crack-noise coordinates, uv2.y = height 0..1. `_Fill` grows the ice from the bottom up with a bright frost front.
    Properties
    {
        _Crack ("Crack Noise (R)", 2D) = "white" {}
        _IceColor ("Ice", Color) = (0.62, 0.88, 1, 0.34)
        _DeepColor ("Deep Ice", Color) = (0.16, 0.46, 0.82, 1)
        _RimColor ("Rim / Frost", Color) = (0.92, 0.98, 1, 1)
        _Fill ("Fill (0 = none, 1 = full)", Range(0, 1.05)) = 1.05
        _FillEdge ("Frost Front Width", Range(0.01, 0.3)) = 0.08
        _CrackScale ("Crack Scale", Float) = 1.6
    }
    CGINCLUDE
    #include "UnityCG.cginc"
    struct appdata { float4 vertex : POSITION; float3 normal : NORMAL; fixed4 color : COLOR; float2 uv : TEXCOORD0; float2 uv2 : TEXCOORD1; };
    struct v2f
    {
        float4 vertex : SV_POSITION;
        float2 uv : TEXCOORD0;
        float h : TEXCOORD1;
        float3 normal : TEXCOORD2;
        float3 viewDir : TEXCOORD3;
        fixed facet : TEXCOORD4;
    };
    sampler2D _Crack;
    fixed4 _IceColor, _DeepColor, _RimColor;
    float _Fill, _FillEdge, _CrackScale;

    v2f vert(appdata v)
    {
        v2f o;
        o.vertex = UnityObjectToClipPos(v.vertex);
        o.uv = v.uv * _CrackScale;
        o.h = v.uv2.y;
        o.normal = UnityObjectToWorldNormal(v.normal);
        o.viewDir = WorldSpaceViewDir(v.vertex);
        o.facet = v.color.r;
        return o;
    }

    fixed4 shade(v2f i, float side)
    {
        clip(_Fill - i.h);
        float3 n = normalize(i.normal) * side;
        float3 vdir = normalize(i.viewDir);
        float3 L = normalize(float3(-0.45, 0.8, -0.55));

        float rim = pow(1 - saturate(abs(dot(n, vdir))), 2.5);
        float spec = pow(saturate(dot(reflect(-L, n), vdir)), 28);
        float crackN = tex2D(_Crack, i.uv).r;
        float crack = smoothstep(0.86, 0.97, crackN) + 0.5 * smoothstep(0.9, 0.98, tex2D(_Crack, i.uv * 2.3 + 0.41).r);
        float frost = smoothstep(0.28, 0.0, i.h);
        // Frost front climbing with _Fill.
        float front = (_Fill < 1.0) ? smoothstep(_FillEdge, 0.0, _Fill - i.h) : 0.0;

        fixed3 col = lerp(_DeepColor.rgb, _IceColor.rgb, i.facet);
        col *= 0.75 + 0.25 * saturate(dot(n, L) * 0.5 + 0.5);
        col += _RimColor.rgb * (rim * 0.55 + spec * 0.9 + crack * 0.45 + frost * 0.35 + front * 0.9);
        float a = _IceColor.a + rim * 0.4 + spec * 0.5 + crack * 0.35 + frost * 0.3 + front * 0.6;
        return fixed4(col, saturate(a));
    }
    ENDCG

    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent" "IgnoreProjector"="True" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        // Inner faces first so the block reads as thick ice.
        Pass
        {
            Cull Front
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment fragBack
            fixed4 fragBack(v2f i) : SV_Target { fixed4 c = shade(i, -1); c.rgb *= 0.7; c.a *= 0.6; return c; }
            ENDCG
        }
        Pass
        {
            Cull Back
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment fragFront
            fixed4 fragFront(v2f i) : SV_Target { return shade(i, 1); }
            ENDCG
        }
    }
    Fallback "Unlit/Transparent"
}
