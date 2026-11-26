// UI image with rounded corners and an inner stroke, drawn from a rounded-box SDF over the quad's UV.
// Works on Image / RawImage (UV rect 0..1). Set _Aspect = width / height of the RectTransform
// so corners stay circular on non-square rects.
Shader "Game/UI Rounded Stroke"
{
    Properties
    {
        [PerRendererData] _MainTex ("Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)

        _Radius ("Corner Radius (0-0.5)", Range(0, 0.5)) = 0.2
        _StrokeWidth ("Stroke Width", Range(0, 0.25)) = 0.04
        _StrokeColor ("Stroke Color", Color) = (1,1,1,1)
        _Softness ("Edge Softness", Range(0.0001, 0.02)) = 0.004
        _Aspect ("Aspect (W/H)", Float) = 1

        // UI mask support
        _StencilComp ("Stencil Comparison", Float) = 8
        _Stencil ("Stencil ID", Float) = 0
        _StencilOp ("Stencil Operation", Float) = 0
        _StencilWriteMask ("Stencil Write Mask", Float) = 255
        _StencilReadMask ("Stencil Read Mask", Float) = 255
        _ColorMask ("Color Mask", Float) = 15
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

        Stencil
        {
            Ref [_Stencil]
            Comp [_StencilComp]
            Pass [_StencilOp]
            ReadMask [_StencilReadMask]
            WriteMask [_StencilWriteMask]
        }

        Cull Off
        Lighting Off
        ZWrite Off
        ZTest [unity_GUIZTestMode]
        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        Pass
        {
        CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex   : POSITION;
                float4 color    : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex   : SV_POSITION;
                float4 color    : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            float4 _Color;
            float4 _StrokeColor;
            float _Radius;
            float _StrokeWidth;
            float _Softness;
            float _Aspect;

            v2f vert(appdata_t IN)
            {
                v2f OUT;
                OUT.vertex = UnityObjectToClipPos(IN.vertex);
                OUT.texcoord = TRANSFORM_TEX(IN.texcoord, _MainTex);
                OUT.color = IN.color * _Color;
                return OUT;
            }

            // Signed distance to a rounded box centred at the origin (negative inside).
            float sdRoundBox(float2 p, float2 halfSize, float r)
            {
                float2 q = abs(p) - halfSize + r;
                return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
            }

            float4 frag(v2f IN) : SV_Target
            {
                // Work in a space where the short side is 1, so radius/stroke are uniform on both axes.
                float2 scale = _Aspect >= 1.0 ? float2(_Aspect, 1.0) : float2(1.0, 1.0 / _Aspect);
                float2 p = (IN.texcoord - 0.5) * scale;
                float2 halfSize = 0.5 * scale;
                float r = min(_Radius, 0.5);

                float d = sdRoundBox(p, halfSize, r);

                // Outer shape mask and the inner (image) mask, both anti-aliased.
                float outer = 1.0 - smoothstep(-_Softness, 0.0, d);
                float inner = 1.0 - smoothstep(-_Softness, 0.0, d + _StrokeWidth);

                float4 tex = tex2D(_MainTex, IN.texcoord) * IN.color;

                // Inside: the image. Stroke band (between inner and outer edge): stroke colour.
                float4 stroke = _StrokeColor;
                stroke.a *= IN.color.a;
                float4 c = lerp(stroke, tex, inner);
                c.a *= outer;
                return c;
            }
        ENDCG
        }
    }

    Fallback "UI/Default"
}
