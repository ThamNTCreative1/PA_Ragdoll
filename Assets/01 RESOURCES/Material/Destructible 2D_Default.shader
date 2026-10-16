Shader "Custom/BuiltInSpriteDamageOverlay"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        [MaterialToggle] PixelSnap ("Pixel Snap", Float) = 0

        _DamageColor ("Damage Color", Color) = (1,0,0,1)
        _DamageStrength ("Damage Strength", Range(0,1)) = 0.75
        _SoftEdge ("Soft Edge", Range(0,1)) = 1
        [HideInInspector] _DamagePoint0 ("Damage Point 0", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint1 ("Damage Point 1", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint2 ("Damage Point 2", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint3 ("Damage Point 3", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint4 ("Damage Point 4", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint5 ("Damage Point 5", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint6 ("Damage Point 6", Vector) = (0,0,0,0)
        [HideInInspector] _DamagePoint7 ("Damage Point 7", Vector) = (0,0,0,0)

        [HideInInspector] _RendererColor ("Renderer Color", Color) = (1,1,1,1)
        [HideInInspector] _Flip ("Flip", Vector) = (1,1,1,1)
        [PerRendererData] _AlphaTex ("External Alpha", 2D) = "white" {}
        [PerRendererData] _EnableExternalAlpha ("Enable External Alpha", Float) = 0
    }

    SubShader
    {
        Tags
        {
            "Queue"="Transparent"
            "IgnoreProjector"="True"
            "RenderType"="Transparent"
            "PreviewType"="Plane"
            "CanUseSpriteAtlas"="True"
        }

        Cull Off
        Lighting Off
        ZWrite Off
        Blend One OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex SpriteDamageVert
            #pragma fragment SpriteDamageFrag
            #pragma multi_compile _ PIXELSNAP_ON
            #pragma multi_compile _ ETC1_EXTERNAL_ALPHA

            #include "UnityCG.cginc"
            #include "UnitySprites.cginc"

            fixed4 _DamageColor;
            float _DamageStrength;
            float _SoftEdge;

            // xy: impact position in world space.
            // zw: damage radius on the world X and Y axes.
            float4 _DamagePoint0;
            float4 _DamagePoint1;
            float4 _DamagePoint2;
            float4 _DamagePoint3;
            float4 _DamagePoint4;
            float4 _DamagePoint5;
            float4 _DamagePoint6;
            float4 _DamagePoint7;

            struct DamageV2F
            {
                float4 vertex : SV_POSITION;
                float2 texcoord : TEXCOORD0;
                float2 worldPos : TEXCOORD1;
                fixed4 color : COLOR;
            };

            DamageV2F SpriteDamageVert(appdata_t input)
            {
                DamageV2F output;

                input.vertex = UnityFlipSprite(input.vertex, _Flip);
                output.worldPos = mul(unity_ObjectToWorld, input.vertex).xy;
                output.vertex = UnityObjectToClipPos(input.vertex);
                output.texcoord = input.texcoord;
                output.color = input.color * _Color * _RendererColor;

                #ifdef PIXELSNAP_ON
                output.vertex = UnityPixelSnap(output.vertex);
                #endif

                return output;
            }

            fixed4 SampleBuiltInSpriteTexture(float2 uv)
            {
                fixed4 color = tex2D(_MainTex, uv);

                #if ETC1_EXTERNAL_ALPHA
                fixed4 alpha = tex2D(_AlphaTex, uv);
                color.a = lerp(color.a, alpha.r, _EnableExternalAlpha);
                #endif

                return color;
            }

            float GetDamageCircle(float2 worldPos, float4 hitData)
            {
                float active = step(0.0001, max(hitData.z, hitData.w));
                float2 radius = max(hitData.zw, float2(0.0001, 0.0001));
                float distanceToHit = length((worldPos - hitData.xy) / radius);
                float hardCircle = step(distanceToHit, 1.0);
                float softCircle = saturate(1.0 - distanceToHit);
                return lerp(hardCircle, softCircle, _SoftEdge) * active;
            }

            fixed4 SpriteDamageFrag(DamageV2F input) : SV_Target
            {
                fixed4 color = SampleBuiltInSpriteTexture(input.texcoord) * input.color;
                clip(color.a - 0.001);

                float damage = GetDamageCircle(input.worldPos, _DamagePoint0);
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint1));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint2));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint3));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint4));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint5));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint6));
                damage = max(damage, GetDamageCircle(input.worldPos, _DamagePoint7));

                // Tint using the original luminance. The sprite's outlines,
                // highlights, and shading remain visible in damaged regions.
                float luminance = dot(color.rgb, float3(0.299, 0.587, 0.114));
                float3 damagedColor = luminance * _DamageColor.rgb;
                color.rgb = lerp(color.rgb, damagedColor, damage * _DamageStrength);

                // Built-in sprite blending expects premultiplied RGB.
                color.rgb *= color.a;
                return color;
            }
            ENDCG
        }
    }

    Fallback "Sprites/Default"
}
