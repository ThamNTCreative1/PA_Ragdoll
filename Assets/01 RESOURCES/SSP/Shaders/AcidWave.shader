// Acid surface like the reference ad (PixiJS DisplacementFilter): the sprite is pushed around by a scrolling noise
// texture and its top edge is cut into moving waves. No keywords (Luna). _T is fed by AcidWave.cs.
Shader "SSP/AcidWave"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite", 2D) = "white" {}
        _DispTex ("Displacement noise", 2D) = "gray" {}
        _DispTiling ("Noise tiling (x, y)", Vector) = (1.2, 0.5, 0, 0)
        _DispScroll ("Noise scroll per second (x, y)", Vector) = (0.06, 0.06, 0, 0)
        _DispStrength ("Displacement (uv)", Float) = 0.03
        _WaveAmp ("Surface wave height (uv)", Float) = 0.04
        _WaveFreq ("Waves across the pool", Float) = 3
        _WaveSpeed ("Wave speed", Float) = 1
        _Phase ("Time offset", Float) = 0
        _T ("Time (set by script)", Float) = 0
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "PreviewType"="Plane" "CanUseSpriteAtlas"="True" }
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

            struct appdata { float4 vertex : POSITION; float4 color : COLOR; float2 uv : TEXCOORD0; };
            struct v2f { float4 pos : SV_POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; };

            sampler2D _MainTex;
            sampler2D _DispTex;
            float4 _DispTiling;
            float4 _DispScroll;
            float _DispStrength;
            float _WaveAmp;
            float _WaveFreq;
            float _WaveSpeed;
            float _Phase;
            float _T;

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.color = v.color;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float t = _T + _Phase;
                float2 nuv = i.uv * _DispTiling.xy + _DispScroll.xy * t;
                float dx = tex2D(_DispTex, nuv).r - 0.5;
                float dy = tex2D(_DispTex, nuv + float2(0.37, 0.61)).r - 0.5;

                float a1 = sin((i.uv.x * _WaveFreq + t * _WaveSpeed * 0.35) * 6.2832);
                float a2 = sin((i.uv.x * _WaveFreq * 2.3 - t * _WaveSpeed * 0.55) * 6.2832 + 1.7);
                float wave = _WaveAmp * (0.6 * (0.5 + 0.5 * a1) + 0.4 * (0.5 + 0.5 * a2));
                float top = 1.0 - wave;

                float2 uv = float2(i.uv.x, i.uv.y / top) + float2(dx, dy) * _DispStrength;
                uv = clamp(uv, 0.002, 0.998);
                fixed4 c = tex2D(_MainTex, uv) * i.color;
                c.a *= step(i.uv.y, top);
                return c;
            }
            ENDCG
        }
    }
}
