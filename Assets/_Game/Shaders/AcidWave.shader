// Acid surface: replaces PIXI DisplacementFilter of the original.
// Noise texture (disp.png, Repeat) sampled in world space and scrolled over time.
// Luna/WebGL1 safe: target 2.0, alpha blend, no keywords.
Shader "Game/AcidWave"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _NoiseTex ("Noise (disp)", 2D) = "gray" {}
        _NoiseScale ("Noise World Size", Float) = 7.28
        _Speed ("Scroll Speed (units/s)", Float) = 0.66
        _Strength ("Distortion (UV)", Float) = 0.035
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "PreviewType"="Plane" }
        Cull Off
        Lighting Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0
            #include "UnityCG.cginc"

            struct appdata { float4 vertex : POSITION; float4 color : COLOR; float2 uv : TEXCOORD0; };
            struct v2f { float4 pos : SV_POSITION; fixed4 color : COLOR; float2 uv : TEXCOORD0; float2 nuv : TEXCOORD1; };

            sampler2D _MainTex;
            sampler2D _NoiseTex;
            float _NoiseScale;
            float _Speed;
            float _Strength;

            v2f vert (appdata v)
            {
                v2f o;
                o.pos = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                o.color = v.color;
                float2 wp = mul(unity_ObjectToWorld, v.vertex).xy;
                float s = _Time.y * _Speed;
                o.nuv = (wp + float2(s, -s)) / _NoiseScale;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed2 n = tex2D(_NoiseTex, i.nuv).rg - 0.5;
                float2 uv = i.uv + n * _Strength;
                return tex2D(_MainTex, uv) * i.color;
            }
            ENDCG
        }
    }
}
