Shader "Destructible 2D/Default" {
	Properties {
		[PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
		_Color ("Tint", Vector) = (1,1,1,1)
		[MaterialToggle] PixelSnap ("Pixel snap", Float) = 0
		[HideInInspector] _RendererColor ("RendererColor", Vector) = (1,1,1,1)
		[HideInInspector] _Flip ("Flip", Vector) = (1,1,1,1)
		[PerRendererData] _AlphaTex ("External Alpha", 2D) = "white" {}
		[PerRendererData] _EnableExternalAlpha ("Enable External Alpha", Float) = 0
		[PerRendererData] _D2dAlpha ("D2D Alpha", 2D) = "white" {}
		[PerRendererData] _D2dScale ("D2D Scale", Vector) = (1,1,0,0)
		[PerRendererData] _D2dOffset ("D2D Offset", Vector) = (0,0,0,0)
		[PerRendererData] _D2dSharpness ("D2D Sharpness", Float) = 1
		[Header(DESTRUCTIBLE 2D)] [Toggle(_D2D_COMBINE_RGB)] _D2dCombineRGB ("	Combine Destructible RGB", Float) = 0
		[Toggle(_D2D_KEEP_ALPHA)] _D2dKeepAlpha ("	Keep Original Sprite Alpha", Float) = 0
		[Toggle(_D2D_OUTLINE)] _D2dOutline ("	Outline", Float) = 0
		_D2dOutlineColor ("	Outline Color", Vector) = (0,0,0,1)
		_D2dOutlineMin ("	Outline Min", Float) = 0
		_D2dOutlineMax ("	Outline Max", Float) = 1
		_D2dOutlinePower ("	Outline Power", Float) = 10
	}
	//DummyShaderTextExporter
	SubShader{
		Tags { "RenderType"="Opaque" }
		LOD 200

		Pass
		{
			HLSLPROGRAM
			#pragma vertex vert
			#pragma fragment frag

			float4x4 unity_ObjectToWorld;
			float4x4 unity_MatrixVP;
			float4 _MainTex_ST;

			struct Vertex_Stage_Input
			{
				float4 pos : POSITION;
				float2 uv : TEXCOORD0;
			};

			struct Vertex_Stage_Output
			{
				float2 uv : TEXCOORD0;
				float4 pos : SV_POSITION;
			};

			Vertex_Stage_Output vert(Vertex_Stage_Input input)
			{
				Vertex_Stage_Output output;
				output.uv = (input.uv.xy * _MainTex_ST.xy) + _MainTex_ST.zw;
				output.pos = mul(unity_MatrixVP, mul(unity_ObjectToWorld, input.pos));
				return output;
			}

			Texture2D<float4> _MainTex;
			SamplerState sampler_MainTex;
			float4 _Color;

			struct Fragment_Stage_Input
			{
				float2 uv : TEXCOORD0;
			};

			float4 frag(Fragment_Stage_Input input) : SV_TARGET
			{
				return _MainTex.Sample(sampler_MainTex, input.uv.xy) * _Color;
			}

			ENDHLSL
		}
	}
}