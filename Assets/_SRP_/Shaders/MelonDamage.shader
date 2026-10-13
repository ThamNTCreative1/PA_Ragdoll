Shader "MelonSandbox/DamageSprite"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        [HideInInspector] _DamageRowX ("Damage X", Vector) = (1,0,0,0)
        [HideInInspector] _DamageRowY ("Damage Y", Vector) = (0,1,0,0)
        [HideInInspector] _Dissolve ("Dissolve", Vector) = (0,0,0,0)
        [HideInInspector] _Hole0 ("Hole 0", Vector) = (0,0,0,0)
        [HideInInspector] _Hole1 ("Hole 1", Vector) = (0,0,0,0)
        [HideInInspector] _Hole2 ("Hole 2", Vector) = (0,0,0,0)
        [HideInInspector] _Hole3 ("Hole 3", Vector) = (0,0,0,0)
        [HideInInspector] _Hole4 ("Hole 4", Vector) = (0,0,0,0)
        [HideInInspector] _Hole5 ("Hole 5", Vector) = (0,0,0,0)
        [HideInInspector] _Hole6 ("Hole 6", Vector) = (0,0,0,0)
        [HideInInspector] _Hole7 ("Hole 7", Vector) = (0,0,0,0)
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "CanUseSpriteAtlas"="True" }
        Cull Off Lighting Off ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 3.0
            #include "UnityCG.cginc"
            struct appdata { float4 vertex:POSITION; float2 uv:TEXCOORD0; fixed4 color:COLOR; };
            struct v2f { float4 pos:SV_POSITION; float2 uv:TEXCOORD0; float3 world:TEXCOORD1; fixed4 color:COLOR; };
            sampler2D _MainTex; fixed4 _Color;
            float4 _Hole0, _Hole1, _Hole2, _Hole3, _Hole4, _Hole5, _Hole6, _Hole7;
            float4 _Dissolve, _DamageRowX, _DamageRowY;
            v2f vert(appdata v) { v2f o; o.pos=UnityObjectToClipPos(v.vertex);o.uv=v.uv;o.world=mul(unity_ObjectToWorld,v.vertex).xyz;o.color=v.color*_Color;return o; }
            float Hole(float2 position, float4 hole)
            {
                float2 delta = abs(position - hole.xy);
                return hole.z > 0 && hole.w > 0 && delta.x < hole.z && delta.y < hole.w ? 1 : 0;
            }
            fixed4 frag(v2f i):SV_Target
            {
                float4 world = float4(i.world, 1);
                float2 position = float2(dot(_DamageRowX, world), dot(_DamageRowY, world));
                // Fixed uniforms avoid dynamic array indexing and per-pixel loops on WebGL.
                float cut = Hole(position, _Hole0) + Hole(position, _Hole1) + Hole(position, _Hole2) + Hole(position, _Hole3)
                    + Hole(position, _Hole4) + Hole(position, _Hole5) + Hole(position, _Hole6) + Hole(position, _Hole7);
                clip(.5 - cut);
                float edge = distance(i.world.xy, _Dissolve.xy) - _Dissolve.z;
                if (_Dissolve.z > 0 && edge < 0) discard;
                fixed4 color = tex2D(_MainTex,i.uv)*i.color;
                if (_Dissolve.z > 0 && _Dissolve.w > .5)
                    color.rgb *= lerp(float3(.12, .07, .04), float3(1,1,1), saturate(edge / .35));
                return color;
            }
            ENDCG
        }
    }
}
