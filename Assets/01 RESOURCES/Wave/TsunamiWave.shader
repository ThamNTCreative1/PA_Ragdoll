Shader "OBP/TsunamiWave"
{
    // Breaking tsunami wall. Mesh comes from TsunamiBuilder:
    //   uv.x = metres across the wall, uv.y = 0..1 along the cross-section (front foot -> lip -> back foot),
    //   uv2.x = lip weight (1 on the curling lip), vertex y = height above the floor.
    // Vertex: uneven swell across the width and a wobbling lip. Fragment: navy-to-teal depth gradient,
    // water streaks running down the face, whitewater on the lip/crest and churning foam at the foot.
    Properties
    {
        _Foam ("Foam Noise (R)", 2D) = "white" {}
        _DeepColor ("Deep (foot)", Color) = (0.01, 0.08, 0.28, 1)
        _MidColor ("Mid", Color) = (0.03, 0.30, 0.62, 1)
        _CrestColor ("Crest (thin water)", Color) = (0.30, 0.78, 0.92, 1)
        _FoamColor ("Foam", Color) = (0.94, 0.98, 1, 1)
        _Height ("Wave Height", Float) = 15
        _FlowSpeed ("Flow Speed", Float) = 0.35
        _SwellAmp ("Swell Amount", Range(0,0.3)) = 0.09
        _LipWobble ("Lip Wobble (m)", Float) = 0.6
        _StreakAmount ("Face Streaks", Range(0,1)) = 0.55
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" "Queue"="Geometry" }
        Cull Off
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata { float4 vertex : POSITION; float3 normal : NORMAL; float2 uv : TEXCOORD0; float2 uv2 : TEXCOORD1; };
            struct v2f
            {
                float4 vertex : SV_POSITION;
                float2 uv : TEXCOORD0;
                float h : TEXCOORD1;
                float lip : TEXCOORD2;
                float3 normal : TEXCOORD3;
                float3 viewDir : TEXCOORD4;
            };
            sampler2D _Foam;
            fixed4 _DeepColor, _MidColor, _CrestColor, _FoamColor;
            float _Height, _FlowSpeed, _SwellAmp, _LipWobble, _StreakAmount;

            v2f vert(appdata v)
            {
                v2f o;
                float t = _Time.y;
                float x = v.vertex.x;
                float h01 = saturate(v.vertex.y / _Height);
                // Uneven height along the wall; the foot stays planted.
                float swell = 1 + _SwellAmp * (sin(x * 0.31 + t * 1.1) * 0.6 + sin(x * 0.83 - t * 1.7) * 0.4);
                v.vertex.y *= lerp(1, swell, h01);
                // The lip surges forward (-Z) and drops in ripples.
                float lip = v.uv2.x;
                v.vertex.z -= lip * _LipWobble * (0.5 + 0.5 * sin(x * 0.45 + t * 2.3));
                v.vertex.y -= lip * 0.35 * sin(x * 0.6 - t * 1.9);

                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.h = h01;
                o.lip = lip;
                o.normal = UnityObjectToWorldNormal(v.normal);
                o.viewDir = WorldSpaceViewDir(v.vertex);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float t = _Time.y;
                float3 n = normalize(i.normal);
                float3 vdir = normalize(i.viewDir);
                // Two-sided: face the normal toward the viewer for lighting.
                n *= sign(dot(n, vdir) + 1e-4);

                // Depth gradient: dark navy at the foot -> blue -> thin teal water near the crest.
                float h = i.h;
                fixed3 col = h < 0.55 ? lerp(_DeepColor.rgb, _MidColor.rgb, h / 0.55) : lerp(_MidColor.rgb, _CrestColor.rgb, (h - 0.55) / 0.45);
                col = lerp(col, _CrestColor.rgb, i.lip * 0.6);

                // Water sheets running down the face (uv.y grows from the foot upward, so scrolling +y flows down).
                // Noise is stretched vertically (high frequency across, low along the face) so it reads as falling sheets.
                float n1 = tex2D(_Foam, float2(i.uv.x * 0.55, i.uv.y * 1.2 + t * _FlowSpeed)).r;
                float n2 = tex2D(_Foam, float2(i.uv.x * 1.3 + 0.37, i.uv.y * 2.6 + t * _FlowSpeed * 1.7)).r;
                float n3 = tex2D(_Foam, float2(i.uv.x * 0.09 - t * 0.05, i.uv.y * 1.5 - t * 0.2)).r;
                // Rounder, finer noise for the churning whitewater.
                float n4 = tex2D(_Foam, float2(i.uv.x * 0.35 + t * 0.15, i.uv.y * 9.0 + t * 0.9)).r;
                float churn = n4 * 0.6 + n1 * 0.4;
                float streak = smoothstep(0.78, 0.95, n1 * 0.55 + n2 * 0.55) * _StreakAmount * smoothstep(0.1, 0.35, h);
                // Darker troughs between sheets give the face some body.
                col *= 0.85 + 0.3 * n3;

                // Lighting + fresnel rim.
                float3 L = normalize(float3(-0.45, 0.8, -0.55));
                float ndl = 0.62 + 0.38 * saturate(dot(n, L));
                float fres = pow(1 - saturate(dot(n, vdir)), 3);
                col = col * ndl + _CrestColor.rgb * fres * 0.45;

                // Whitewater on the lip/crest and at the foot, broken up by noise.
                float crest = saturate(i.lip * 1.6) + smoothstep(0.86, 0.98, h);
                float foot = smoothstep(0.14, 0.0, h);
                float foam = saturate(streak + (crest + foot) * smoothstep(0.32, 0.68, churn * 0.6 + n3 * 0.6));
                col = lerp(col, _FoamColor.rgb, foam);
                return fixed4(col, 1);
            }
            ENDCG
        }
    }
    Fallback "Unlit/Color"
}
