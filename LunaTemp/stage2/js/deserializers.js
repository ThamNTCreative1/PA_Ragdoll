var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2898 = root || request.c( 'UnityEngine.JointSpring' )
  var i2899 = data
  i2898.spring = i2899[0]
  i2898.damper = i2899[1]
  i2898.targetPosition = i2899[2]
  return i2898
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2900 = root || request.c( 'UnityEngine.JointMotor' )
  var i2901 = data
  i2900.m_TargetVelocity = i2901[0]
  i2900.m_Force = i2901[1]
  i2900.m_FreeSpin = i2901[2]
  return i2900
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.JointLimits' )
  var i2903 = data
  i2902.m_Min = i2903[0]
  i2902.m_Max = i2903[1]
  i2902.m_Bounciness = i2903[2]
  i2902.m_BounceMinVelocity = i2903[3]
  i2902.m_ContactDistance = i2903[4]
  i2902.minBounce = i2903[5]
  i2902.maxBounce = i2903[6]
  return i2902
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.JointDrive' )
  var i2905 = data
  i2904.m_PositionSpring = i2905[0]
  i2904.m_PositionDamper = i2905[1]
  i2904.m_MaximumForce = i2905[2]
  i2904.m_UseAcceleration = i2905[3]
  return i2904
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2906 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2907 = data
  i2906.m_Spring = i2907[0]
  i2906.m_Damper = i2907[1]
  return i2906
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2908 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2909 = data
  i2908.m_Limit = i2909[0]
  i2908.m_Bounciness = i2909[1]
  i2908.m_ContactDistance = i2909[2]
  return i2908
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2910 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2911 = data
  i2910.m_ExtremumSlip = i2911[0]
  i2910.m_ExtremumValue = i2911[1]
  i2910.m_AsymptoteSlip = i2911[2]
  i2910.m_AsymptoteValue = i2911[3]
  i2910.m_Stiffness = i2911[4]
  return i2910
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2912 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2913 = data
  i2912.m_LowerAngle = i2913[0]
  i2912.m_UpperAngle = i2913[1]
  return i2912
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2914 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2915 = data
  i2914.m_MotorSpeed = i2915[0]
  i2914.m_MaximumMotorTorque = i2915[1]
  return i2914
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2916 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2917 = data
  i2916.m_DampingRatio = i2917[0]
  i2916.m_Frequency = i2917[1]
  i2916.m_Angle = i2917[2]
  return i2916
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2918 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2919 = data
  i2918.m_LowerTranslation = i2919[0]
  i2918.m_UpperTranslation = i2919[1]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2921 = data
  i2920.name = i2921[0]
  i2920.width = i2921[1]
  i2920.height = i2921[2]
  i2920.mipmapCount = i2921[3]
  i2920.anisoLevel = i2921[4]
  i2920.filterMode = i2921[5]
  i2920.hdr = !!i2921[6]
  i2920.format = i2921[7]
  i2920.wrapMode = i2921[8]
  i2920.alphaIsTransparency = !!i2921[9]
  i2920.alphaSource = i2921[10]
  i2920.graphicsFormat = i2921[11]
  i2920.sRGBTexture = !!i2921[12]
  i2920.desiredColorSpace = i2921[13]
  i2920.wrapU = i2921[14]
  i2920.wrapV = i2921[15]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2923 = data
  i2922.name = i2923[0]
  i2922.halfPrecision = !!i2923[1]
  i2922.useSimplification = !!i2923[2]
  i2922.useUInt32IndexFormat = !!i2923[3]
  i2922.vertexCount = i2923[4]
  i2922.aabb = i2923[5]
  var i2925 = i2923[6]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( !!i2925[i + 0] );
  }
  i2922.streams = i2924
  i2922.vertices = i2923[7]
  var i2927 = i2923[8]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2927[i + 0]) );
  }
  i2922.subMeshes = i2926
  var i2929 = i2923[9]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 16) {
    i2928.push( new pc.Mat4().setData(i2929[i + 0], i2929[i + 1], i2929[i + 2], i2929[i + 3],  i2929[i + 4], i2929[i + 5], i2929[i + 6], i2929[i + 7],  i2929[i + 8], i2929[i + 9], i2929[i + 10], i2929[i + 11],  i2929[i + 12], i2929[i + 13], i2929[i + 14], i2929[i + 15]) );
  }
  i2922.bindposes = i2928
  var i2931 = i2923[10]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2931[i + 0]) );
  }
  i2922.blendShapes = i2930
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2937 = data
  i2936.triangles = i2937[0]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2943 = data
  i2942.name = i2943[0]
  var i2945 = i2943[1]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2945[i + 0]) );
  }
  i2942.frames = i2944
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2946 = root || new pc.UnityMaterial()
  var i2947 = data
  i2946.name = i2947[0]
  request.r(i2947[1], i2947[2], 0, i2946, 'shader')
  i2946.renderQueue = i2947[3]
  i2946.enableInstancing = !!i2947[4]
  var i2949 = i2947[5]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2949[i + 0]) );
  }
  i2946.floatParameters = i2948
  var i2951 = i2947[6]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2951[i + 0]) );
  }
  i2946.colorParameters = i2950
  var i2953 = i2947[7]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2953[i + 0]) );
  }
  i2946.vectorParameters = i2952
  var i2955 = i2947[8]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2955[i + 0]) );
  }
  i2946.textureParameters = i2954
  var i2957 = i2947[9]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2957[i + 0]) );
  }
  i2946.materialFlags = i2956
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2961 = data
  i2960.name = i2961[0]
  i2960.value = i2961[1]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2965 = data
  i2964.name = i2965[0]
  i2964.value = new pc.Color(i2965[1], i2965[2], i2965[3], i2965[4])
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2969 = data
  i2968.name = i2969[0]
  i2968.value = new pc.Vec4( i2969[1], i2969[2], i2969[3], i2969[4] )
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2973 = data
  i2972.name = i2973[0]
  request.r(i2973[1], i2973[2], 0, i2972, 'value')
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2977 = data
  i2976.name = i2977[0]
  i2976.enabled = !!i2977[1]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2979 = data
  i2978.position = new pc.Vec3( i2979[0], i2979[1], i2979[2] )
  i2978.scale = new pc.Vec3( i2979[3], i2979[4], i2979[5] )
  i2978.rotation = new pc.Quat(i2979[6], i2979[7], i2979[8], i2979[9])
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2981 = data
  i2980.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2981[0], i2980.main)
  i2980.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2981[1], i2980.colorBySpeed)
  i2980.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2981[2], i2980.colorOverLifetime)
  i2980.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2981[3], i2980.emission)
  i2980.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2981[4], i2980.rotationBySpeed)
  i2980.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2981[5], i2980.rotationOverLifetime)
  i2980.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2981[6], i2980.shape)
  i2980.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2981[7], i2980.sizeBySpeed)
  i2980.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2981[8], i2980.sizeOverLifetime)
  i2980.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2981[9], i2980.textureSheetAnimation)
  i2980.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2981[10], i2980.velocityOverLifetime)
  i2980.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2981[11], i2980.noise)
  i2980.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2981[12], i2980.inheritVelocity)
  i2980.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2981[13], i2980.forceOverLifetime)
  i2980.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2981[14], i2980.limitVelocityOverLifetime)
  i2980.useAutoRandomSeed = !!i2981[15]
  i2980.randomSeed = i2981[16]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2982 = root || new pc.ParticleSystemMain()
  var i2983 = data
  i2982.duration = i2983[0]
  i2982.loop = !!i2983[1]
  i2982.prewarm = !!i2983[2]
  i2982.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[3], i2982.startDelay)
  i2982.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[4], i2982.startLifetime)
  i2982.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[5], i2982.startSpeed)
  i2982.startSize3D = !!i2983[6]
  i2982.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[7], i2982.startSizeX)
  i2982.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[8], i2982.startSizeY)
  i2982.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[9], i2982.startSizeZ)
  i2982.startRotation3D = !!i2983[10]
  i2982.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[11], i2982.startRotationX)
  i2982.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[12], i2982.startRotationY)
  i2982.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[13], i2982.startRotationZ)
  i2982.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2983[14], i2982.startColor)
  i2982.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[15], i2982.gravityModifier)
  i2982.simulationSpace = i2983[16]
  request.r(i2983[17], i2983[18], 0, i2982, 'customSimulationSpace')
  i2982.simulationSpeed = i2983[19]
  i2982.useUnscaledTime = !!i2983[20]
  i2982.scalingMode = i2983[21]
  i2982.playOnAwake = !!i2983[22]
  i2982.maxParticles = i2983[23]
  i2982.emitterVelocityMode = i2983[24]
  i2982.stopAction = i2983[25]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2984 = root || new pc.MinMaxCurve()
  var i2985 = data
  i2984.mode = i2985[0]
  i2984.curveMin = new pc.AnimationCurve( { keys_flow: i2985[1] } )
  i2984.curveMax = new pc.AnimationCurve( { keys_flow: i2985[2] } )
  i2984.curveMultiplier = i2985[3]
  i2984.constantMin = i2985[4]
  i2984.constantMax = i2985[5]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2986 = root || new pc.MinMaxGradient()
  var i2987 = data
  i2986.mode = i2987[0]
  i2986.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2987[1], i2986.gradientMin)
  i2986.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2987[2], i2986.gradientMax)
  i2986.colorMin = new pc.Color(i2987[3], i2987[4], i2987[5], i2987[6])
  i2986.colorMax = new pc.Color(i2987[7], i2987[8], i2987[9], i2987[10])
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2989 = data
  i2988.mode = i2989[0]
  var i2991 = i2989[1]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2991[i + 0]) );
  }
  i2988.colorKeys = i2990
  var i2993 = i2989[2]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2993[i + 0]) );
  }
  i2988.alphaKeys = i2992
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2994 = root || new pc.ParticleSystemColorBySpeed()
  var i2995 = data
  i2994.enabled = !!i2995[0]
  i2994.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2995[1], i2994.color)
  i2994.range = new pc.Vec2( i2995[2], i2995[3] )
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2999 = data
  i2998.color = new pc.Color(i2999[0], i2999[1], i2999[2], i2999[3])
  i2998.time = i2999[4]
  return i2998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3003 = data
  i3002.alpha = i3003[0]
  i3002.time = i3003[1]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3004 = root || new pc.ParticleSystemColorOverLifetime()
  var i3005 = data
  i3004.enabled = !!i3005[0]
  i3004.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3005[1], i3004.color)
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3006 = root || new pc.ParticleSystemEmitter()
  var i3007 = data
  i3006.enabled = !!i3007[0]
  i3006.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3007[1], i3006.rateOverTime)
  i3006.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3007[2], i3006.rateOverDistance)
  var i3009 = i3007[3]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3009[i + 0]) );
  }
  i3006.bursts = i3008
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3012 = root || new pc.ParticleSystemBurst()
  var i3013 = data
  i3012.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3013[0], i3012.count)
  i3012.cycleCount = i3013[1]
  i3012.minCount = i3013[2]
  i3012.maxCount = i3013[3]
  i3012.repeatInterval = i3013[4]
  i3012.time = i3013[5]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3014 = root || new pc.ParticleSystemRotationBySpeed()
  var i3015 = data
  i3014.enabled = !!i3015[0]
  i3014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3015[1], i3014.x)
  i3014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3015[2], i3014.y)
  i3014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3015[3], i3014.z)
  i3014.separateAxes = !!i3015[4]
  i3014.range = new pc.Vec2( i3015[5], i3015[6] )
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3016 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3017 = data
  i3016.enabled = !!i3017[0]
  i3016.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3017[1], i3016.x)
  i3016.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3017[2], i3016.y)
  i3016.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3017[3], i3016.z)
  i3016.separateAxes = !!i3017[4]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3018 = root || new pc.ParticleSystemShape()
  var i3019 = data
  i3018.enabled = !!i3019[0]
  i3018.shapeType = i3019[1]
  i3018.randomDirectionAmount = i3019[2]
  i3018.sphericalDirectionAmount = i3019[3]
  i3018.randomPositionAmount = i3019[4]
  i3018.alignToDirection = !!i3019[5]
  i3018.radius = i3019[6]
  i3018.radiusMode = i3019[7]
  i3018.radiusSpread = i3019[8]
  i3018.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3019[9], i3018.radiusSpeed)
  i3018.radiusThickness = i3019[10]
  i3018.angle = i3019[11]
  i3018.length = i3019[12]
  i3018.boxThickness = new pc.Vec3( i3019[13], i3019[14], i3019[15] )
  i3018.meshShapeType = i3019[16]
  request.r(i3019[17], i3019[18], 0, i3018, 'mesh')
  request.r(i3019[19], i3019[20], 0, i3018, 'meshRenderer')
  request.r(i3019[21], i3019[22], 0, i3018, 'skinnedMeshRenderer')
  i3018.useMeshMaterialIndex = !!i3019[23]
  i3018.meshMaterialIndex = i3019[24]
  i3018.useMeshColors = !!i3019[25]
  i3018.normalOffset = i3019[26]
  i3018.arc = i3019[27]
  i3018.arcMode = i3019[28]
  i3018.arcSpread = i3019[29]
  i3018.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3019[30], i3018.arcSpeed)
  i3018.donutRadius = i3019[31]
  i3018.position = new pc.Vec3( i3019[32], i3019[33], i3019[34] )
  i3018.rotation = new pc.Vec3( i3019[35], i3019[36], i3019[37] )
  i3018.scale = new pc.Vec3( i3019[38], i3019[39], i3019[40] )
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3020 = root || new pc.ParticleSystemSizeBySpeed()
  var i3021 = data
  i3020.enabled = !!i3021[0]
  i3020.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[1], i3020.x)
  i3020.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[2], i3020.y)
  i3020.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[3], i3020.z)
  i3020.separateAxes = !!i3021[4]
  i3020.range = new pc.Vec2( i3021[5], i3021[6] )
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3022 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3023 = data
  i3022.enabled = !!i3023[0]
  i3022.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3023[1], i3022.x)
  i3022.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3023[2], i3022.y)
  i3022.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3023[3], i3022.z)
  i3022.separateAxes = !!i3023[4]
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3024 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3025 = data
  i3024.enabled = !!i3025[0]
  i3024.mode = i3025[1]
  i3024.animation = i3025[2]
  i3024.numTilesX = i3025[3]
  i3024.numTilesY = i3025[4]
  i3024.useRandomRow = !!i3025[5]
  i3024.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3025[6], i3024.frameOverTime)
  i3024.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3025[7], i3024.startFrame)
  i3024.cycleCount = i3025[8]
  i3024.rowIndex = i3025[9]
  i3024.flipU = i3025[10]
  i3024.flipV = i3025[11]
  i3024.spriteCount = i3025[12]
  var i3027 = i3025[13]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 2) {
  request.r(i3027[i + 0], i3027[i + 1], 2, i3026, '')
  }
  i3024.sprites = i3026
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3030 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3031 = data
  i3030.enabled = !!i3031[0]
  i3030.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[1], i3030.x)
  i3030.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[2], i3030.y)
  i3030.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[3], i3030.z)
  i3030.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[4], i3030.radial)
  i3030.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[5], i3030.speedModifier)
  i3030.space = i3031[6]
  i3030.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[7], i3030.orbitalX)
  i3030.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[8], i3030.orbitalY)
  i3030.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[9], i3030.orbitalZ)
  i3030.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[10], i3030.orbitalOffsetX)
  i3030.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[11], i3030.orbitalOffsetY)
  i3030.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3031[12], i3030.orbitalOffsetZ)
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3032 = root || new pc.ParticleSystemNoise()
  var i3033 = data
  i3032.enabled = !!i3033[0]
  i3032.separateAxes = !!i3033[1]
  i3032.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[2], i3032.strengthX)
  i3032.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[3], i3032.strengthY)
  i3032.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[4], i3032.strengthZ)
  i3032.frequency = i3033[5]
  i3032.damping = !!i3033[6]
  i3032.octaveCount = i3033[7]
  i3032.octaveMultiplier = i3033[8]
  i3032.octaveScale = i3033[9]
  i3032.quality = i3033[10]
  i3032.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[11], i3032.scrollSpeed)
  i3032.scrollSpeedMultiplier = i3033[12]
  i3032.remapEnabled = !!i3033[13]
  i3032.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[14], i3032.remapX)
  i3032.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[15], i3032.remapY)
  i3032.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[16], i3032.remapZ)
  i3032.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[17], i3032.positionAmount)
  i3032.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[18], i3032.rotationAmount)
  i3032.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3033[19], i3032.sizeAmount)
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3034 = root || new pc.ParticleSystemInheritVelocity()
  var i3035 = data
  i3034.enabled = !!i3035[0]
  i3034.mode = i3035[1]
  i3034.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3035[2], i3034.curve)
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3036 = root || new pc.ParticleSystemForceOverLifetime()
  var i3037 = data
  i3036.enabled = !!i3037[0]
  i3036.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3037[1], i3036.x)
  i3036.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3037[2], i3036.y)
  i3036.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3037[3], i3036.z)
  i3036.space = i3037[4]
  i3036.randomized = !!i3037[5]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3038 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3039 = data
  i3038.enabled = !!i3039[0]
  i3038.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3039[1], i3038.limit)
  i3038.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3039[2], i3038.limitX)
  i3038.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3039[3], i3038.limitY)
  i3038.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3039[4], i3038.limitZ)
  i3038.dampen = i3039[5]
  i3038.separateAxes = !!i3039[6]
  i3038.space = i3039[7]
  i3038.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3039[8], i3038.drag)
  i3038.multiplyDragByParticleSize = !!i3039[9]
  i3038.multiplyDragByParticleVelocity = !!i3039[10]
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3041 = data
  request.r(i3041[0], i3041[1], 0, i3040, 'mesh')
  i3040.meshCount = i3041[2]
  i3040.activeVertexStreamsCount = i3041[3]
  i3040.alignment = i3041[4]
  i3040.renderMode = i3041[5]
  i3040.sortMode = i3041[6]
  i3040.lengthScale = i3041[7]
  i3040.velocityScale = i3041[8]
  i3040.cameraVelocityScale = i3041[9]
  i3040.normalDirection = i3041[10]
  i3040.sortingFudge = i3041[11]
  i3040.minParticleSize = i3041[12]
  i3040.maxParticleSize = i3041[13]
  i3040.pivot = new pc.Vec3( i3041[14], i3041[15], i3041[16] )
  request.r(i3041[17], i3041[18], 0, i3040, 'trailMaterial')
  i3040.applyActiveColorSpace = !!i3041[19]
  i3040.enabled = !!i3041[20]
  request.r(i3041[21], i3041[22], 0, i3040, 'sharedMaterial')
  var i3043 = i3041[23]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 2) {
  request.r(i3043[i + 0], i3043[i + 1], 2, i3042, '')
  }
  i3040.sharedMaterials = i3042
  i3040.receiveShadows = !!i3041[24]
  i3040.shadowCastingMode = i3041[25]
  i3040.sortingLayerID = i3041[26]
  i3040.sortingOrder = i3041[27]
  i3040.lightmapIndex = i3041[28]
  i3040.lightmapSceneIndex = i3041[29]
  i3040.lightmapScaleOffset = new pc.Vec4( i3041[30], i3041[31], i3041[32], i3041[33] )
  i3040.lightProbeUsage = i3041[34]
  i3040.reflectionProbeUsage = i3041[35]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3047 = data
  i3046.name = i3047[0]
  i3046.tagId = i3047[1]
  i3046.enabled = !!i3047[2]
  i3046.isStatic = !!i3047[3]
  i3046.layer = i3047[4]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3049 = data
  i3048.name = i3049[0]
  i3048.atlasId = i3049[1]
  i3048.mipmapCount = i3049[2]
  i3048.hdr = !!i3049[3]
  i3048.size = i3049[4]
  i3048.anisoLevel = i3049[5]
  i3048.filterMode = i3049[6]
  var i3051 = i3049[7]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 4) {
    i3050.push( UnityEngine.Rect.MinMaxRect(i3051[i + 0], i3051[i + 1], i3051[i + 2], i3051[i + 3]) );
  }
  i3048.rects = i3050
  i3048.wrapU = i3049[8]
  i3048.wrapV = i3049[9]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3055 = data
  i3054.name = i3055[0]
  i3054.index = i3055[1]
  i3054.startup = !!i3055[2]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3057 = data
  i3056.aspect = i3057[0]
  i3056.orthographic = !!i3057[1]
  i3056.orthographicSize = i3057[2]
  i3056.backgroundColor = new pc.Color(i3057[3], i3057[4], i3057[5], i3057[6])
  i3056.nearClipPlane = i3057[7]
  i3056.farClipPlane = i3057[8]
  i3056.fieldOfView = i3057[9]
  i3056.depth = i3057[10]
  i3056.clearFlags = i3057[11]
  i3056.cullingMask = i3057[12]
  i3056.rect = i3057[13]
  request.r(i3057[14], i3057[15], 0, i3056, 'targetTexture')
  i3056.usePhysicalProperties = !!i3057[16]
  i3056.focalLength = i3057[17]
  i3056.sensorSize = new pc.Vec2( i3057[18], i3057[19] )
  i3056.lensShift = new pc.Vec2( i3057[20], i3057[21] )
  i3056.gateFit = i3057[22]
  i3056.commandBufferCount = i3057[23]
  i3056.cameraType = i3057[24]
  i3056.enabled = !!i3057[25]
  return i3056
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3058 = root || request.c( 'CameraController' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'cam')
  var i3061 = i3059[2]
  var i3060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3061.length; i += 3) {
    i3060.add(new pc.Vec3( i3061[i + 0], i3061[i + 1], i3061[i + 2] ));
  }
  i3058.camSetupPosition = i3060
  i3058.index = i3059[3]
  i3058.panSpeed = i3059[4]
  i3058.minPosition = new pc.Vec2( i3059[5], i3059[6] )
  i3058.maxPosition = new pc.Vec2( i3059[7], i3059[8] )
  i3058.ignoreDragableObjects = !!i3059[9]
  i3058.minFieldOfView = i3059[10]
  i3058.maxFieldOfView = i3059[11]
  i3058.pinchZoomSpeed = i3059[12]
  i3058.mouseWheelZoomSpeed = i3059[13]
  return i3058
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3065 = data
  request.r(i3065[0], i3065[1], 0, i3064, 'm_FirstSelected')
  i3064.m_sendNavigationEvents = !!i3065[2]
  i3064.m_DragThreshold = i3065[3]
  return i3064
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3066 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3067 = data
  i3066.m_HorizontalAxis = i3067[0]
  i3066.m_VerticalAxis = i3067[1]
  i3066.m_SubmitButton = i3067[2]
  i3066.m_CancelButton = i3067[3]
  i3066.m_InputActionsPerSecond = i3067[4]
  i3066.m_RepeatDelay = i3067[5]
  i3066.m_ForceModuleActive = !!i3067[6]
  i3066.m_SendPointerHoverToParent = !!i3067[7]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3069 = data
  i3068.type = i3069[0]
  i3068.color = new pc.Color(i3069[1], i3069[2], i3069[3], i3069[4])
  i3068.cullingMask = i3069[5]
  i3068.intensity = i3069[6]
  i3068.range = i3069[7]
  i3068.spotAngle = i3069[8]
  i3068.shadows = i3069[9]
  i3068.shadowNormalBias = i3069[10]
  i3068.shadowBias = i3069[11]
  i3068.shadowStrength = i3069[12]
  i3068.shadowResolution = i3069[13]
  i3068.lightmapBakeType = i3069[14]
  i3068.renderMode = i3069[15]
  request.r(i3069[16], i3069[17], 0, i3068, 'cookie')
  i3068.cookieSize = i3069[18]
  i3068.shadowNearPlane = i3069[19]
  i3068.occlusionMaskChannel = i3069[20]
  i3068.isBaked = !!i3069[21]
  i3068.mixedLightingMode = i3069[22]
  i3068.enabled = !!i3069[23]
  return i3068
}

Deserializers["GameController"] = function (request, data, root) {
  var i3070 = root || request.c( 'GameController' )
  var i3071 = data
  i3070.OnNextPhase = request.d('System.Action', i3071[0], i3070.OnNextPhase)
  i3070.currentPhase = i3071[1]
  var i3073 = i3071[2]
  var i3072 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.add(request.d('Phase', i3073[i + 0]));
  }
  i3070.phases = i3072
  var i3075 = i3071[3]
  var i3074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3075.length; i += 2) {
  request.r(i3075[i + 0], i3075[i + 1], 1, i3074, '')
  }
  i3070.nextButton = i3074
  request.r(i3071[4], i3071[5], 0, i3070, 'nextSound')
  var i3077 = i3071[6]
  var i3076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3077.length; i += 2) {
  request.r(i3077[i + 0], i3077[i + 1], 1, i3076, '')
  }
  i3070.buttons = i3076
  return i3070
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3078 = root || request.c( 'System.Action' )
  var i3079 = data
  return i3078
}

Deserializers["Phase"] = function (request, data, root) {
  var i3082 = root || request.c( 'Phase' )
  var i3083 = data
  request.r(i3083[0], i3083[1], 0, i3082, 'Game')
  request.r(i3083[2], i3083[3], 0, i3082, 'UI')
  return i3082
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3086 = root || request.c( 'LunaController' )
  var i3087 = data
  i3086.LimitTimePlay = !!i3087[0]
  i3086.TimePlay = i3087[1]
  i3086.LimitStagePlay = !!i3087[2]
  i3086.StagePlay = i3087[3]
  i3086.UseCustomBG = !!i3087[4]
  request.r(i3087[5], i3087[6], 0, i3086, 'BGTexture')
  request.r(i3087[7], i3087[8], 0, i3086, 'BGM')
  i3086.Phase1TextColor = new pc.Color(i3087[9], i3087[10], i3087[11], i3087[12])
  i3086.Phase2TextColor = new pc.Color(i3087[13], i3087[14], i3087[15], i3087[16])
  i3086.Phase3TextColor = new pc.Color(i3087[17], i3087[18], i3087[19], i3087[20])
  request.r(i3087[21], i3087[22], 0, i3086, 'phase1Text')
  request.r(i3087[23], i3087[24], 0, i3086, 'phase2Text')
  request.r(i3087[25], i3087[26], 0, i3086, 'phase3Text1')
  request.r(i3087[27], i3087[28], 0, i3086, 'phase3Text2')
  request.r(i3087[29], i3087[30], 0, i3086, 'BGImage')
  request.r(i3087[31], i3087[32], 0, i3086, 'musicSource')
  var i3089 = i3087[33]
  var i3088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3089.length; i += 2) {
  request.r(i3089[i + 0], i3089[i + 1], 1, i3088, '')
  }
  i3086.CTA = i3088
  i3086.currentStage = i3087[34]
  return i3086
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3090 = root || request.c( 'AudioController' )
  var i3091 = data
  request.r(i3091[0], i3091[1], 0, i3090, 'poolParent')
  i3090.startSize = i3091[2]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3093 = data
  request.r(i3093[0], i3093[1], 0, i3092, 'clip')
  request.r(i3093[2], i3093[3], 0, i3092, 'outputAudioMixerGroup')
  i3092.playOnAwake = !!i3093[4]
  i3092.loop = !!i3093[5]
  i3092.time = i3093[6]
  i3092.volume = i3093[7]
  i3092.pitch = i3093[8]
  i3092.enabled = !!i3093[9]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3095 = data
  i3094.pivot = new pc.Vec2( i3095[0], i3095[1] )
  i3094.anchorMin = new pc.Vec2( i3095[2], i3095[3] )
  i3094.anchorMax = new pc.Vec2( i3095[4], i3095[5] )
  i3094.sizeDelta = new pc.Vec2( i3095[6], i3095[7] )
  i3094.anchoredPosition3D = new pc.Vec3( i3095[8], i3095[9], i3095[10] )
  i3094.rotation = new pc.Quat(i3095[11], i3095[12], i3095[13], i3095[14])
  i3094.scale = new pc.Vec3( i3095[15], i3095[16], i3095[17] )
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3097 = data
  i3096.planeDistance = i3097[0]
  i3096.referencePixelsPerUnit = i3097[1]
  i3096.isFallbackOverlay = !!i3097[2]
  i3096.renderMode = i3097[3]
  i3096.renderOrder = i3097[4]
  i3096.sortingLayerName = i3097[5]
  i3096.sortingOrder = i3097[6]
  i3096.scaleFactor = i3097[7]
  request.r(i3097[8], i3097[9], 0, i3096, 'worldCamera')
  i3096.overrideSorting = !!i3097[10]
  i3096.pixelPerfect = !!i3097[11]
  i3096.targetDisplay = i3097[12]
  i3096.overridePixelPerfect = !!i3097[13]
  i3096.enabled = !!i3097[14]
  return i3096
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3098 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3099 = data
  i3098.m_UiScaleMode = i3099[0]
  i3098.m_ReferencePixelsPerUnit = i3099[1]
  i3098.m_ScaleFactor = i3099[2]
  i3098.m_ReferenceResolution = new pc.Vec2( i3099[3], i3099[4] )
  i3098.m_ScreenMatchMode = i3099[5]
  i3098.m_MatchWidthOrHeight = i3099[6]
  i3098.m_PhysicalUnit = i3099[7]
  i3098.m_FallbackScreenDPI = i3099[8]
  i3098.m_DefaultSpriteDPI = i3099[9]
  i3098.m_DynamicPixelsPerUnit = i3099[10]
  i3098.m_PresetInfoIsWorld = !!i3099[11]
  return i3098
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3101 = data
  i3100.m_IgnoreReversedGraphics = !!i3101[0]
  i3100.m_BlockingObjects = i3101[1]
  i3100.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3101[2] )
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3103 = data
  i3102.cullTransparentMesh = !!i3103[0]
  return i3102
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.UI.Text' )
  var i3105 = data
  i3104.m_FontData = request.d('UnityEngine.UI.FontData', i3105[0], i3104.m_FontData)
  i3104.m_Text = i3105[1]
  request.r(i3105[2], i3105[3], 0, i3104, 'm_Material')
  i3104.m_Maskable = !!i3105[4]
  i3104.m_Color = new pc.Color(i3105[5], i3105[6], i3105[7], i3105[8])
  i3104.m_RaycastTarget = !!i3105[9]
  i3104.m_RaycastPadding = new pc.Vec4( i3105[10], i3105[11], i3105[12], i3105[13] )
  return i3104
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3107 = data
  request.r(i3107[0], i3107[1], 0, i3106, 'm_Font')
  i3106.m_FontSize = i3107[2]
  i3106.m_FontStyle = i3107[3]
  i3106.m_BestFit = !!i3107[4]
  i3106.m_MinSize = i3107[5]
  i3106.m_MaxSize = i3107[6]
  i3106.m_Alignment = i3107[7]
  i3106.m_AlignByGeometry = !!i3107[8]
  i3106.m_RichText = !!i3107[9]
  i3106.m_HorizontalOverflow = i3107[10]
  i3106.m_VerticalOverflow = i3107[11]
  i3106.m_LineSpacing = i3107[12]
  return i3106
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3108 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3109 = data
  i3108.targetIsSelf = !!i3109[0]
  request.r(i3109[1], i3109[2], 0, i3108, 'targetGO')
  i3108.tweenTargetIsTargetGO = !!i3109[3]
  i3108.delay = i3109[4]
  i3108.duration = i3109[5]
  i3108.easeType = i3109[6]
  i3108.easeCurve = new pc.AnimationCurve( { keys_flow: i3109[7] } )
  i3108.loopType = i3109[8]
  i3108.loops = i3109[9]
  i3108.id = i3109[10]
  i3108.isRelative = !!i3109[11]
  i3108.isFrom = !!i3109[12]
  i3108.isIndependentUpdate = !!i3109[13]
  i3108.autoKill = !!i3109[14]
  i3108.autoGenerate = !!i3109[15]
  i3108.isActive = !!i3109[16]
  i3108.isValid = !!i3109[17]
  request.r(i3109[18], i3109[19], 0, i3108, 'target')
  i3108.animationType = i3109[20]
  i3108.targetType = i3109[21]
  i3108.forcedTargetType = i3109[22]
  i3108.autoPlay = !!i3109[23]
  i3108.useTargetAsV3 = !!i3109[24]
  i3108.endValueFloat = i3109[25]
  i3108.endValueV3 = new pc.Vec3( i3109[26], i3109[27], i3109[28] )
  i3108.endValueV2 = new pc.Vec2( i3109[29], i3109[30] )
  i3108.endValueColor = new pc.Color(i3109[31], i3109[32], i3109[33], i3109[34])
  i3108.endValueString = i3109[35]
  i3108.endValueRect = UnityEngine.Rect.MinMaxRect(i3109[36], i3109[37], i3109[38], i3109[39])
  request.r(i3109[40], i3109[41], 0, i3108, 'endValueTransform')
  i3108.optionalBool0 = !!i3109[42]
  i3108.optionalBool1 = !!i3109[43]
  i3108.optionalFloat0 = i3109[44]
  i3108.optionalInt0 = i3109[45]
  i3108.optionalRotationMode = i3109[46]
  i3108.optionalScrambleMode = i3109[47]
  i3108.optionalShakeRandomnessMode = i3109[48]
  i3108.optionalString = i3109[49]
  i3108.updateType = i3109[50]
  i3108.isSpeedBased = !!i3109[51]
  i3108.hasOnStart = !!i3109[52]
  i3108.hasOnPlay = !!i3109[53]
  i3108.hasOnUpdate = !!i3109[54]
  i3108.hasOnStepComplete = !!i3109[55]
  i3108.hasOnComplete = !!i3109[56]
  i3108.hasOnTweenCreated = !!i3109[57]
  i3108.hasOnRewind = !!i3109[58]
  i3108.onStart = request.d('UnityEngine.Events.UnityEvent', i3109[59], i3108.onStart)
  i3108.onPlay = request.d('UnityEngine.Events.UnityEvent', i3109[60], i3108.onPlay)
  i3108.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3109[61], i3108.onUpdate)
  i3108.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3109[62], i3108.onStepComplete)
  i3108.onComplete = request.d('UnityEngine.Events.UnityEvent', i3109[63], i3108.onComplete)
  i3108.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3109[64], i3108.onTweenCreated)
  i3108.onRewind = request.d('UnityEngine.Events.UnityEvent', i3109[65], i3108.onRewind)
  return i3108
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3111 = data
  i3110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3111[0], i3110.m_PersistentCalls)
  return i3110
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3113 = data
  var i3115 = i3113[0]
  var i3114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.add(request.d('UnityEngine.Events.PersistentCall', i3115[i + 0]));
  }
  i3112.m_Calls = i3114
  return i3112
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'm_Target')
  i3118.m_TargetAssemblyTypeName = i3119[2]
  i3118.m_MethodName = i3119[3]
  i3118.m_Mode = i3119[4]
  i3118.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3119[5], i3118.m_Arguments)
  i3118.m_CallState = i3119[6]
  return i3118
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.UI.Button' )
  var i3121 = data
  i3120.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3121[0], i3120.m_OnClick)
  i3120.m_Navigation = request.d('UnityEngine.UI.Navigation', i3121[1], i3120.m_Navigation)
  i3120.m_Transition = i3121[2]
  i3120.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3121[3], i3120.m_Colors)
  i3120.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3121[4], i3120.m_SpriteState)
  i3120.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3121[5], i3120.m_AnimationTriggers)
  i3120.m_Interactable = !!i3121[6]
  request.r(i3121[7], i3121[8], 0, i3120, 'm_TargetGraphic')
  return i3120
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3123 = data
  i3122.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3123[0], i3122.m_PersistentCalls)
  return i3122
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3125 = data
  i3124.m_Mode = i3125[0]
  i3124.m_WrapAround = !!i3125[1]
  request.r(i3125[2], i3125[3], 0, i3124, 'm_SelectOnUp')
  request.r(i3125[4], i3125[5], 0, i3124, 'm_SelectOnDown')
  request.r(i3125[6], i3125[7], 0, i3124, 'm_SelectOnLeft')
  request.r(i3125[8], i3125[9], 0, i3124, 'm_SelectOnRight')
  return i3124
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3127 = data
  i3126.m_NormalColor = new pc.Color(i3127[0], i3127[1], i3127[2], i3127[3])
  i3126.m_HighlightedColor = new pc.Color(i3127[4], i3127[5], i3127[6], i3127[7])
  i3126.m_PressedColor = new pc.Color(i3127[8], i3127[9], i3127[10], i3127[11])
  i3126.m_SelectedColor = new pc.Color(i3127[12], i3127[13], i3127[14], i3127[15])
  i3126.m_DisabledColor = new pc.Color(i3127[16], i3127[17], i3127[18], i3127[19])
  i3126.m_ColorMultiplier = i3127[20]
  i3126.m_FadeDuration = i3127[21]
  return i3126
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3129 = data
  request.r(i3129[0], i3129[1], 0, i3128, 'm_HighlightedSprite')
  request.r(i3129[2], i3129[3], 0, i3128, 'm_PressedSprite')
  request.r(i3129[4], i3129[5], 0, i3128, 'm_SelectedSprite')
  request.r(i3129[6], i3129[7], 0, i3128, 'm_DisabledSprite')
  return i3128
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3131 = data
  i3130.m_NormalTrigger = i3131[0]
  i3130.m_HighlightedTrigger = i3131[1]
  i3130.m_PressedTrigger = i3131[2]
  i3130.m_SelectedTrigger = i3131[3]
  i3130.m_DisabledTrigger = i3131[4]
  return i3130
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3132 = root || request.c( 'UnityEngine.UI.Image' )
  var i3133 = data
  request.r(i3133[0], i3133[1], 0, i3132, 'm_Sprite')
  i3132.m_Type = i3133[2]
  i3132.m_PreserveAspect = !!i3133[3]
  i3132.m_FillCenter = !!i3133[4]
  i3132.m_FillMethod = i3133[5]
  i3132.m_FillAmount = i3133[6]
  i3132.m_FillClockwise = !!i3133[7]
  i3132.m_FillOrigin = i3133[8]
  i3132.m_UseSpriteMesh = !!i3133[9]
  i3132.m_PixelsPerUnitMultiplier = i3133[10]
  request.r(i3133[11], i3133[12], 0, i3132, 'm_Material')
  i3132.m_Maskable = !!i3133[13]
  i3132.m_Color = new pc.Color(i3133[14], i3133[15], i3133[16], i3133[17])
  i3132.m_RaycastTarget = !!i3133[18]
  i3132.m_RaycastPadding = new pc.Vec4( i3133[19], i3133[20], i3133[21], i3133[22] )
  return i3132
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3134 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3135 = data
  request.r(i3135[0], i3135[1], 0, i3134, 'm_ObjectArgument')
  i3134.m_ObjectArgumentAssemblyTypeName = i3135[2]
  i3134.m_IntArgument = i3135[3]
  i3134.m_FloatArgument = i3135[4]
  i3134.m_StringArgument = i3135[5]
  i3134.m_BoolArgument = !!i3135[6]
  return i3134
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3136 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3137 = data
  request.r(i3137[0], i3137[1], 0, i3136, 'm_Texture')
  i3136.m_UVRect = UnityEngine.Rect.MinMaxRect(i3137[2], i3137[3], i3137[4], i3137[5])
  request.r(i3137[6], i3137[7], 0, i3136, 'm_Material')
  i3136.m_Maskable = !!i3137[8]
  i3136.m_Color = new pc.Color(i3137[9], i3137[10], i3137[11], i3137[12])
  i3136.m_RaycastTarget = !!i3137[13]
  i3136.m_RaycastPadding = new pc.Vec4( i3137[14], i3137[15], i3137[16], i3137[17] )
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3139 = data
  request.r(i3139[0], i3139[1], 0, i3138, 'sharedMesh')
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3141 = data
  request.r(i3141[0], i3141[1], 0, i3140, 'additionalVertexStreams')
  i3140.enabled = !!i3141[2]
  request.r(i3141[3], i3141[4], 0, i3140, 'sharedMaterial')
  var i3143 = i3141[5]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 2) {
  request.r(i3143[i + 0], i3143[i + 1], 2, i3142, '')
  }
  i3140.sharedMaterials = i3142
  i3140.receiveShadows = !!i3141[6]
  i3140.shadowCastingMode = i3141[7]
  i3140.sortingLayerID = i3141[8]
  i3140.sortingOrder = i3141[9]
  i3140.lightmapIndex = i3141[10]
  i3140.lightmapSceneIndex = i3141[11]
  i3140.lightmapScaleOffset = new pc.Vec4( i3141[12], i3141[13], i3141[14], i3141[15] )
  i3140.lightProbeUsage = i3141[16]
  i3140.reflectionProbeUsage = i3141[17]
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3145 = data
  request.r(i3145[0], i3145[1], 0, i3144, 'sharedMesh')
  i3144.convex = !!i3145[2]
  i3144.enabled = !!i3145[3]
  i3144.isTrigger = !!i3145[4]
  request.r(i3145[5], i3145[6], 0, i3144, 'material')
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3147 = data
  i3146.center = new pc.Vec3( i3147[0], i3147[1], i3147[2] )
  i3146.size = new pc.Vec3( i3147[3], i3147[4], i3147[5] )
  i3146.enabled = !!i3147[6]
  i3146.isTrigger = !!i3147[7]
  request.r(i3147[8], i3147[9], 0, i3146, 'material')
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3149 = data
  i3148.mass = i3149[0]
  i3148.drag = i3149[1]
  i3148.angularDrag = i3149[2]
  i3148.useGravity = !!i3149[3]
  i3148.isKinematic = !!i3149[4]
  i3148.constraints = i3149[5]
  i3148.maxAngularVelocity = i3149[6]
  i3148.collisionDetectionMode = i3149[7]
  i3148.interpolation = i3149[8]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i3150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i3151 = data
  i3150.angularXDrive = request.d('UnityEngine.JointDrive', i3151[0], i3150.angularXDrive)
  i3150.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3151[1], i3150.angularXLimitSpring)
  i3150.angularXMotion = i3151[2]
  i3150.angularYLimit = request.d('UnityEngine.SoftJointLimit', i3151[3], i3150.angularYLimit)
  i3150.angularYMotion = i3151[4]
  i3150.angularYZDrive = request.d('UnityEngine.JointDrive', i3151[5], i3150.angularYZDrive)
  i3150.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3151[6], i3150.angularYZLimitSpring)
  i3150.angularZLimit = request.d('UnityEngine.SoftJointLimit', i3151[7], i3150.angularZLimit)
  i3150.angularZMotion = i3151[8]
  i3150.configuredInWorldSpace = !!i3151[9]
  i3150.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i3151[10], i3150.highAngularXLimit)
  i3150.linearLimit = request.d('UnityEngine.SoftJointLimit', i3151[11], i3150.linearLimit)
  i3150.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3151[12], i3150.linearLimitSpring)
  i3150.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i3151[13], i3150.lowAngularXLimit)
  i3150.rotationDriveMode = i3151[14]
  i3150.secondaryAxis = new pc.Vec3( i3151[15], i3151[16], i3151[17] )
  i3150.slerpDrive = request.d('UnityEngine.JointDrive', i3151[18], i3150.slerpDrive)
  i3150.swapBodies = !!i3151[19]
  i3150.targetAngularVelocity = new pc.Vec3( i3151[20], i3151[21], i3151[22] )
  i3150.targetPosition = new pc.Vec3( i3151[23], i3151[24], i3151[25] )
  i3150.targetRotation = new pc.Quat(i3151[26], i3151[27], i3151[28], i3151[29])
  i3150.targetVelocity = new pc.Vec3( i3151[30], i3151[31], i3151[32] )
  i3150.xDrive = request.d('UnityEngine.JointDrive', i3151[33], i3150.xDrive)
  i3150.xMotion = i3151[34]
  i3150.yDrive = request.d('UnityEngine.JointDrive', i3151[35], i3150.yDrive)
  i3150.yMotion = i3151[36]
  i3150.zDrive = request.d('UnityEngine.JointDrive', i3151[37], i3150.zDrive)
  i3150.zMotion = i3151[38]
  request.r(i3151[39], i3151[40], 0, i3150, 'connectedBody')
  i3150.axis = new pc.Vec3( i3151[41], i3151[42], i3151[43] )
  i3150.anchor = new pc.Vec3( i3151[44], i3151[45], i3151[46] )
  i3150.connectedAnchor = new pc.Vec3( i3151[47], i3151[48], i3151[49] )
  i3150.autoConfigureConnectedAnchor = !!i3151[50]
  i3150.massScale = i3151[51]
  i3150.connectedMassScale = i3151[52]
  i3150.enableCollision = !!i3151[53]
  i3150.breakForce = i3151[54]
  i3150.breakTorque = i3151[55]
  return i3150
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i3152 = root || request.c( 'BodyPiece' )
  var i3153 = data
  i3152.notUseAnim = !!i3153[0]
  request.r(i3153[1], i3153[2], 0, i3152, 'colli')
  request.r(i3153[3], i3153[4], 0, i3152, 'skeleton')
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpringJoint"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpringJoint' )
  var i3155 = data
  i3154.spring = i3155[0]
  i3154.damper = i3155[1]
  i3154.minDistance = i3155[2]
  i3154.maxDistance = i3155[3]
  i3154.tolerance = i3155[4]
  request.r(i3155[5], i3155[6], 0, i3154, 'connectedBody')
  i3154.axis = new pc.Vec3( i3155[7], i3155[8], i3155[9] )
  i3154.anchor = new pc.Vec3( i3155[10], i3155[11], i3155[12] )
  i3154.connectedAnchor = new pc.Vec3( i3155[13], i3155[14], i3155[15] )
  i3154.autoConfigureConnectedAnchor = !!i3155[16]
  i3154.massScale = i3155[17]
  i3154.connectedMassScale = i3155[18]
  i3154.enableCollision = !!i3155[19]
  i3154.breakForce = i3155[20]
  i3154.breakTorque = i3155[21]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3157 = data
  i3156.center = new pc.Vec3( i3157[0], i3157[1], i3157[2] )
  i3156.radius = i3157[3]
  i3156.height = i3157[4]
  i3156.direction = i3157[5]
  i3156.enabled = !!i3157[6]
  i3156.isTrigger = !!i3157[7]
  request.r(i3157[8], i3157[9], 0, i3156, 'material')
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'connectedBody')
  i3158.axis = new pc.Vec3( i3159[2], i3159[3], i3159[4] )
  i3158.anchor = new pc.Vec3( i3159[5], i3159[6], i3159[7] )
  i3158.connectedAnchor = new pc.Vec3( i3159[8], i3159[9], i3159[10] )
  i3158.autoConfigureConnectedAnchor = !!i3159[11]
  i3158.massScale = i3159[12]
  i3158.connectedMassScale = i3159[13]
  i3158.enableCollision = !!i3159[14]
  i3158.breakForce = i3159[15]
  i3158.breakTorque = i3159[16]
  return i3158
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i3160 = root || request.c( 'TakeDamage' )
  var i3161 = data
  request.r(i3161[0], i3161[1], 0, i3160, 'phase')
  var i3163 = i3161[2]
  var i3162 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i3163.length; i += 2) {
  request.r(i3163[i + 0], i3163[i + 1], 1, i3162, '')
  }
  i3160.bodyPieces = i3162
  request.r(i3161[3], i3161[4], 0, i3160, 'root')
  i3160.HP = i3161[5]
  i3160.onCD = !!i3161[6]
  i3160.currentHP = i3161[7]
  i3160.isDead = !!i3161[8]
  request.r(i3161[9], i3161[10], 0, i3160, 'anim')
  request.r(i3161[11], i3161[12], 0, i3160, 'hitSound')
  request.r(i3161[13], i3161[14], 0, i3160, 'hitSound2')
  request.r(i3161[15], i3161[16], 0, i3160, 'deadSound')
  request.r(i3161[17], i3161[18], 0, i3160, 'bloodPrefab')
  i3160.notUseAnim = !!i3161[19]
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3167 = data
  request.r(i3167[0], i3167[1], 0, i3166, 'animatorController')
  request.r(i3167[2], i3167[3], 0, i3166, 'avatar')
  i3166.updateMode = i3167[4]
  i3166.hasTransformHierarchy = !!i3167[5]
  i3166.applyRootMotion = !!i3167[6]
  var i3169 = i3167[7]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 2) {
  request.r(i3169[i + 0], i3169[i + 1], 2, i3168, '')
  }
  i3166.humanBones = i3168
  i3166.enabled = !!i3167[8]
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3173 = data
  request.r(i3173[0], i3173[1], 0, i3172, 'sharedMesh')
  var i3175 = i3173[2]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 2) {
  request.r(i3175[i + 0], i3175[i + 1], 2, i3174, '')
  }
  i3172.bones = i3174
  i3172.updateWhenOffscreen = !!i3173[3]
  i3172.localBounds = i3173[4]
  request.r(i3173[5], i3173[6], 0, i3172, 'rootBone')
  var i3177 = i3173[7]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3177[i + 0]) );
  }
  i3172.blendShapesWeights = i3176
  i3172.enabled = !!i3173[8]
  request.r(i3173[9], i3173[10], 0, i3172, 'sharedMaterial')
  var i3179 = i3173[11]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 2) {
  request.r(i3179[i + 0], i3179[i + 1], 2, i3178, '')
  }
  i3172.sharedMaterials = i3178
  i3172.receiveShadows = !!i3173[12]
  i3172.shadowCastingMode = i3173[13]
  i3172.sortingLayerID = i3173[14]
  i3172.sortingOrder = i3173[15]
  i3172.lightmapIndex = i3173[16]
  i3172.lightmapSceneIndex = i3173[17]
  i3172.lightmapScaleOffset = new pc.Vec4( i3173[18], i3173[19], i3173[20], i3173[21] )
  i3172.lightProbeUsage = i3173[22]
  i3172.reflectionProbeUsage = i3173[23]
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3183 = data
  i3182.weight = i3183[0]
  return i3182
}

Deserializers["Dragable"] = function (request, data, root) {
  var i3184 = root || request.c( 'Dragable' )
  var i3185 = data
  i3184.OnDrag = request.d('System.Action', i3185[0], i3184.OnDrag)
  i3184.OnEndDrag = request.d('System.Action', i3185[1], i3184.OnEndDrag)
  return i3184
}

Deserializers["BodyController"] = function (request, data, root) {
  var i3186 = root || request.c( 'BodyController' )
  var i3187 = data
  var i3189 = i3187[0]
  var i3188 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i3189.length; i += 2) {
  request.r(i3189[i + 0], i3189[i + 1], 1, i3188, '')
  }
  i3186.bodyPieces = i3188
  var i3191 = i3187[1]
  var i3190 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i3191.length; i += 2) {
  request.r(i3191[i + 0], i3191[i + 1], 1, i3190, '')
  }
  i3186.dragPieces = i3190
  request.r(i3187[2], i3187[3], 0, i3186, 'anim')
  return i3186
}

Deserializers["LavaController"] = function (request, data, root) {
  var i3194 = root || request.c( 'LavaController' )
  var i3195 = data
  request.r(i3195[0], i3195[1], 0, i3194, 'sound')
  i3194.part = i3195[2]
  i3194.isDead = !!i3195[3]
  return i3194
}

Deserializers["LavaPartDisappear"] = function (request, data, root) {
  var i3196 = root || request.c( 'LavaPartDisappear' )
  var i3197 = data
  request.r(i3197[0], i3197[1], 0, i3196, 'boneToHide')
  request.r(i3197[2], i3197[3], 0, i3196, 'vfx')
  i3196.disappearDelay = i3197[4]
  i3196.shrinkDuration = i3197[5]
  request.r(i3197[6], i3197[7], 0, i3196, 'partCollider')
  i3196.disableCollider = !!i3197[8]
  request.r(i3197[9], i3197[10], 0, i3196, 'controller')
  return i3196
}

Deserializers["DragController"] = function (request, data, root) {
  var i3198 = root || request.c( 'DragController' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'currentTarget')
  i3198.positionSpring = i3199[2]
  i3198.positionDamper = i3199[3]
  request.r(i3199[4], i3199[5], 0, i3198, 'tut1')
  request.r(i3199[6], i3199[7], 0, i3198, 'tut2')
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3201 = data
  i3200.ambientIntensity = i3201[0]
  i3200.reflectionIntensity = i3201[1]
  i3200.ambientMode = i3201[2]
  i3200.ambientLight = new pc.Color(i3201[3], i3201[4], i3201[5], i3201[6])
  i3200.ambientSkyColor = new pc.Color(i3201[7], i3201[8], i3201[9], i3201[10])
  i3200.ambientGroundColor = new pc.Color(i3201[11], i3201[12], i3201[13], i3201[14])
  i3200.ambientEquatorColor = new pc.Color(i3201[15], i3201[16], i3201[17], i3201[18])
  i3200.fogColor = new pc.Color(i3201[19], i3201[20], i3201[21], i3201[22])
  i3200.fogEndDistance = i3201[23]
  i3200.fogStartDistance = i3201[24]
  i3200.fogDensity = i3201[25]
  i3200.fog = !!i3201[26]
  request.r(i3201[27], i3201[28], 0, i3200, 'skybox')
  i3200.fogMode = i3201[29]
  var i3203 = i3201[30]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3203[i + 0]) );
  }
  i3200.lightmaps = i3202
  i3200.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3201[31], i3200.lightProbes)
  i3200.lightmapsMode = i3201[32]
  i3200.mixedBakeMode = i3201[33]
  i3200.environmentLightingMode = i3201[34]
  i3200.ambientProbe = new pc.SphericalHarmonicsL2(i3201[35])
  request.r(i3201[36], i3201[37], 0, i3200, 'customReflection')
  request.r(i3201[38], i3201[39], 0, i3200, 'defaultReflection')
  i3200.defaultReflectionMode = i3201[40]
  i3200.defaultReflectionResolution = i3201[41]
  i3200.sunLightObjectId = i3201[42]
  i3200.pixelLightCount = i3201[43]
  i3200.defaultReflectionHDR = !!i3201[44]
  i3200.hasLightDataAsset = !!i3201[45]
  i3200.hasManualGenerate = !!i3201[46]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'lightmapColor')
  request.r(i3207[2], i3207[3], 0, i3206, 'lightmapDirection')
  request.r(i3207[4], i3207[5], 0, i3206, 'shadowMask')
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3208 = root || new UnityEngine.LightProbes()
  var i3209 = data
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3217 = data
  var i3219 = i3217[0]
  var i3218 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3219[i + 0]));
  }
  i3216.ShaderCompilationErrors = i3218
  i3216.name = i3217[1]
  i3216.guid = i3217[2]
  var i3221 = i3217[3]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( i3221[i + 0] );
  }
  i3216.shaderDefinedKeywords = i3220
  var i3223 = i3217[4]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3223[i + 0]) );
  }
  i3216.passes = i3222
  var i3225 = i3217[5]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3225[i + 0]) );
  }
  i3216.usePasses = i3224
  var i3227 = i3217[6]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3227[i + 0]) );
  }
  i3216.defaultParameterValues = i3226
  request.r(i3217[7], i3217[8], 0, i3216, 'unityFallbackShader')
  i3216.readDepth = !!i3217[9]
  i3216.hasDepthOnlyPass = !!i3217[10]
  i3216.isCreatedByShaderGraph = !!i3217[11]
  i3216.disableBatching = !!i3217[12]
  i3216.compiled = !!i3217[13]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3231 = data
  i3230.shaderName = i3231[0]
  i3230.errorMessage = i3231[1]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3236 = root || new pc.UnityShaderPass()
  var i3237 = data
  i3236.id = i3237[0]
  i3236.subShaderIndex = i3237[1]
  i3236.name = i3237[2]
  i3236.passType = i3237[3]
  i3236.grabPassTextureName = i3237[4]
  i3236.usePass = !!i3237[5]
  i3236.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[6], i3236.zTest)
  i3236.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[7], i3236.zWrite)
  i3236.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[8], i3236.culling)
  i3236.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3237[9], i3236.blending)
  i3236.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3237[10], i3236.alphaBlending)
  i3236.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[11], i3236.colorWriteMask)
  i3236.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[12], i3236.offsetUnits)
  i3236.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[13], i3236.offsetFactor)
  i3236.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[14], i3236.stencilRef)
  i3236.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[15], i3236.stencilReadMask)
  i3236.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[16], i3236.stencilWriteMask)
  i3236.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[17], i3236.stencilOp)
  i3236.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[18], i3236.stencilOpFront)
  i3236.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[19], i3236.stencilOpBack)
  var i3239 = i3237[20]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3239[i + 0]) );
  }
  i3236.tags = i3238
  var i3241 = i3237[21]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( i3241[i + 0] );
  }
  i3236.passDefinedKeywords = i3240
  var i3243 = i3237[22]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3243[i + 0]) );
  }
  i3236.passDefinedKeywordGroups = i3242
  var i3245 = i3237[23]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3245[i + 0]) );
  }
  i3236.variants = i3244
  var i3247 = i3237[24]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3247[i + 0]) );
  }
  i3236.excludedVariants = i3246
  i3236.hasDepthReader = !!i3237[25]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3249 = data
  i3248.val = i3249[0]
  i3248.name = i3249[1]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3251 = data
  i3250.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[0], i3250.src)
  i3250.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[1], i3250.dst)
  i3250.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[2], i3250.op)
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3253 = data
  i3252.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[0], i3252.pass)
  i3252.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[1], i3252.fail)
  i3252.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[2], i3252.zFail)
  i3252.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[3], i3252.comp)
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3257 = data
  i3256.name = i3257[0]
  i3256.value = i3257[1]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3261 = data
  var i3263 = i3261[0]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( i3263[i + 0] );
  }
  i3260.keywords = i3262
  i3260.hasDiscard = !!i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3267 = data
  i3266.passId = i3267[0]
  i3266.subShaderIndex = i3267[1]
  var i3269 = i3267[2]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( i3269[i + 0] );
  }
  i3266.keywords = i3268
  i3266.vertexProgram = i3267[3]
  i3266.fragmentProgram = i3267[4]
  i3266.exportedForWebGl2 = !!i3267[5]
  i3266.readDepth = !!i3267[6]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3273 = data
  request.r(i3273[0], i3273[1], 0, i3272, 'shader')
  i3272.pass = i3273[2]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.type = i3277[1]
  i3276.value = new pc.Vec4( i3277[2], i3277[3], i3277[4], i3277[5] )
  i3276.textureValue = i3277[6]
  i3276.shaderPropertyFlag = i3277[7]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3279 = data
  i3278.name = i3279[0]
  request.r(i3279[1], i3279[2], 0, i3278, 'texture')
  i3278.aabb = i3279[3]
  i3278.vertices = i3279[4]
  i3278.triangles = i3279[5]
  i3278.textureRect = UnityEngine.Rect.MinMaxRect(i3279[6], i3279[7], i3279[8], i3279[9])
  i3278.packedRect = UnityEngine.Rect.MinMaxRect(i3279[10], i3279[11], i3279[12], i3279[13])
  i3278.border = new pc.Vec4( i3279[14], i3279[15], i3279[16], i3279[17] )
  i3278.transparency = i3279[18]
  i3278.bounds = i3279[19]
  i3278.pixelsPerUnit = i3279[20]
  i3278.textureWidth = i3279[21]
  i3278.textureHeight = i3279[22]
  i3278.nativeSize = new pc.Vec2( i3279[23], i3279[24] )
  i3278.pivot = new pc.Vec2( i3279[25], i3279[26] )
  i3278.textureRectOffset = new pc.Vec2( i3279[27], i3279[28] )
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3281 = data
  i3280.name = i3281[0]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3283 = data
  i3282.name = i3283[0]
  i3282.wrapMode = i3283[1]
  i3282.isLooping = !!i3283[2]
  i3282.length = i3283[3]
  var i3285 = i3283[4]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3285[i + 0]) );
  }
  i3282.curves = i3284
  var i3287 = i3283[5]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3287[i + 0]) );
  }
  i3282.events = i3286
  i3282.halfPrecision = !!i3283[6]
  i3282._frameRate = i3283[7]
  i3282.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3283[8], i3282.localBounds)
  i3282.hasMuscleCurves = !!i3283[9]
  var i3289 = i3283[10]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( i3289[i + 0] );
  }
  i3282.clipMuscleConstant = i3288
  i3282.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3283[11], i3282.clipBindingConstant)
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3293 = data
  i3292.path = i3293[0]
  i3292.hash = i3293[1]
  i3292.componentType = i3293[2]
  i3292.property = i3293[3]
  i3292.keys = i3293[4]
  var i3295 = i3293[5]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3295[i + 0]) );
  }
  i3292.objectReferenceKeys = i3294
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3299 = data
  i3298.functionName = i3299[0]
  i3298.floatParameter = i3299[1]
  i3298.intParameter = i3299[2]
  i3298.stringParameter = i3299[3]
  request.r(i3299[4], i3299[5], 0, i3298, 'objectReferenceParameter')
  i3298.time = i3299[6]
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3301 = data
  i3300.center = new pc.Vec3( i3301[0], i3301[1], i3301[2] )
  i3300.extends = new pc.Vec3( i3301[3], i3301[4], i3301[5] )
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3305 = data
  var i3307 = i3305[0]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 1) {
    i3306.push( i3307[i + 0] );
  }
  i3304.genericBindings = i3306
  var i3309 = i3305[1]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( i3309[i + 0] );
  }
  i3304.pptrCurveMapping = i3308
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3313 = data
  i3312.time = i3313[0]
  request.r(i3313[1], i3313[2], 0, i3312, 'value')
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3315 = data
  i3314.name = i3315[0]
  i3314.ascent = i3315[1]
  i3314.originalLineHeight = i3315[2]
  i3314.fontSize = i3315[3]
  var i3317 = i3315[4]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3317[i + 0]) );
  }
  i3314.characterInfo = i3316
  request.r(i3315[5], i3315[6], 0, i3314, 'texture')
  i3314.originalFontSize = i3315[7]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3321 = data
  i3320.index = i3321[0]
  i3320.advance = i3321[1]
  i3320.bearing = i3321[2]
  i3320.glyphWidth = i3321[3]
  i3320.glyphHeight = i3321[4]
  i3320.minX = i3321[5]
  i3320.maxX = i3321[6]
  i3320.minY = i3321[7]
  i3320.maxY = i3321[8]
  i3320.uvBottomLeftX = i3321[9]
  i3320.uvBottomLeftY = i3321[10]
  i3320.uvBottomRightX = i3321[11]
  i3320.uvBottomRightY = i3321[12]
  i3320.uvTopLeftX = i3321[13]
  i3320.uvTopLeftY = i3321[14]
  i3320.uvTopRightX = i3321[15]
  i3320.uvTopRightY = i3321[16]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3323 = data
  i3322.name = i3323[0]
  var i3325 = i3323[1]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3325[i + 0]) );
  }
  i3322.layers = i3324
  var i3327 = i3323[2]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3327[i + 0]) );
  }
  i3322.parameters = i3326
  i3322.animationClips = i3323[3]
  i3322.avatarUnsupported = i3323[4]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3331 = data
  i3330.name = i3331[0]
  i3330.defaultWeight = i3331[1]
  i3330.blendingMode = i3331[2]
  i3330.avatarMask = i3331[3]
  i3330.syncedLayerIndex = i3331[4]
  i3330.syncedLayerAffectsTiming = !!i3331[5]
  i3330.syncedLayers = i3331[6]
  i3330.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3331[7], i3330.stateMachine)
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3333 = data
  i3332.id = i3333[0]
  i3332.name = i3333[1]
  i3332.path = i3333[2]
  var i3335 = i3333[3]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3335[i + 0]) );
  }
  i3332.states = i3334
  var i3337 = i3333[4]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3337[i + 0]) );
  }
  i3332.machines = i3336
  var i3339 = i3333[5]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3339[i + 0]) );
  }
  i3332.entryStateTransitions = i3338
  var i3341 = i3333[6]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3341[i + 0]) );
  }
  i3332.exitStateTransitions = i3340
  var i3343 = i3333[7]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3343[i + 0]) );
  }
  i3332.anyStateTransitions = i3342
  i3332.defaultStateId = i3333[8]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3347 = data
  i3346.id = i3347[0]
  i3346.name = i3347[1]
  i3346.cycleOffset = i3347[2]
  i3346.cycleOffsetParameter = i3347[3]
  i3346.cycleOffsetParameterActive = !!i3347[4]
  i3346.mirror = !!i3347[5]
  i3346.mirrorParameter = i3347[6]
  i3346.mirrorParameterActive = !!i3347[7]
  i3346.motionId = i3347[8]
  i3346.nameHash = i3347[9]
  i3346.fullPathHash = i3347[10]
  i3346.speed = i3347[11]
  i3346.speedParameter = i3347[12]
  i3346.speedParameterActive = !!i3347[13]
  i3346.tag = i3347[14]
  i3346.tagHash = i3347[15]
  i3346.writeDefaultValues = !!i3347[16]
  var i3349 = i3347[17]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 2) {
  request.r(i3349[i + 0], i3349[i + 1], 2, i3348, '')
  }
  i3346.behaviours = i3348
  var i3351 = i3347[18]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3351[i + 0]) );
  }
  i3346.transitions = i3350
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3357 = data
  i3356.fullPath = i3357[0]
  i3356.canTransitionToSelf = !!i3357[1]
  i3356.duration = i3357[2]
  i3356.exitTime = i3357[3]
  i3356.hasExitTime = !!i3357[4]
  i3356.hasFixedDuration = !!i3357[5]
  i3356.interruptionSource = i3357[6]
  i3356.offset = i3357[7]
  i3356.orderedInterruption = !!i3357[8]
  i3356.destinationStateId = i3357[9]
  i3356.isExit = !!i3357[10]
  i3356.mute = !!i3357[11]
  i3356.solo = !!i3357[12]
  var i3359 = i3357[13]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3359[i + 0]) );
  }
  i3356.conditions = i3358
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3363 = data
  i3362.mode = i3363[0]
  i3362.parameter = i3363[1]
  i3362.threshold = i3363[2]
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3369 = data
  i3368.destinationStateId = i3369[0]
  i3368.isExit = !!i3369[1]
  i3368.mute = !!i3369[2]
  i3368.solo = !!i3369[3]
  var i3371 = i3369[4]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3371[i + 0]) );
  }
  i3368.conditions = i3370
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3375 = data
  i3374.defaultBool = !!i3375[0]
  i3374.defaultFloat = i3375[1]
  i3374.defaultInt = i3375[2]
  i3374.name = i3375[3]
  i3374.nameHash = i3375[4]
  i3374.type = i3375[5]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i3377 = data
  i3376.name = i3377[0]
  request.r(i3377[1], i3377[2], 0, i3376, '_runtimeAnimatorController')
  var i3379 = i3377[3]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 2) {
  request.r(i3379[i + 0], i3379[i + 1], 2, i3378, '')
  }
  i3376._originalAnimationClips = i3378
  var i3381 = i3377[4]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 2) {
  request.r(i3381[i + 0], i3381[i + 1], 2, i3380, '')
  }
  i3376._overrideAnimationClips = i3380
  var i3383 = i3377[5]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 2) {
  request.r(i3383[i + 0], i3383[i + 1], 2, i3382, '')
  }
  i3376._animationClips = i3382
  var i3385 = i3377[6]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.push( request.d('UnityEngine.AnimationClipPair', i3385[i + 0]) );
  }
  i3376._animationClipPairs = i3384
  return i3376
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i3391 = data
  request.r(i3391[0], i3391[1], 0, i3390, 'originalClip')
  request.r(i3391[2], i3391[3], 0, i3390, 'overrideClip')
  return i3390
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3392 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3393 = data
  i3392.useSafeMode = !!i3393[0]
  i3392.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3393[1], i3392.safeModeOptions)
  i3392.timeScale = i3393[2]
  i3392.unscaledTimeScale = i3393[3]
  i3392.useSmoothDeltaTime = !!i3393[4]
  i3392.maxSmoothUnscaledTime = i3393[5]
  i3392.rewindCallbackMode = i3393[6]
  i3392.showUnityEditorReport = !!i3393[7]
  i3392.logBehaviour = i3393[8]
  i3392.drawGizmos = !!i3393[9]
  i3392.defaultRecyclable = !!i3393[10]
  i3392.defaultAutoPlay = i3393[11]
  i3392.defaultUpdateType = i3393[12]
  i3392.defaultTimeScaleIndependent = !!i3393[13]
  i3392.defaultEaseType = i3393[14]
  i3392.defaultEaseOvershootOrAmplitude = i3393[15]
  i3392.defaultEasePeriod = i3393[16]
  i3392.defaultAutoKill = !!i3393[17]
  i3392.defaultLoopType = i3393[18]
  i3392.debugMode = !!i3393[19]
  i3392.debugStoreTargetId = !!i3393[20]
  i3392.showPreviewPanel = !!i3393[21]
  i3392.storeSettingsLocation = i3393[22]
  i3392.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3393[23], i3392.modules)
  i3392.createASMDEF = !!i3393[24]
  i3392.showPlayingTweens = !!i3393[25]
  i3392.showPausedTweens = !!i3393[26]
  return i3392
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3394 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3395 = data
  i3394.logBehaviour = i3395[0]
  i3394.nestedTweenFailureBehaviour = i3395[1]
  return i3394
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3396 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3397 = data
  i3396.showPanel = !!i3397[0]
  i3396.audioEnabled = !!i3397[1]
  i3396.physicsEnabled = !!i3397[2]
  i3396.physics2DEnabled = !!i3397[3]
  i3396.spriteEnabled = !!i3397[4]
  i3396.uiEnabled = !!i3397[5]
  i3396.textMeshProEnabled = !!i3397[6]
  i3396.tk2DEnabled = !!i3397[7]
  i3396.deAudioEnabled = !!i3397[8]
  i3396.deUnityExtendedEnabled = !!i3397[9]
  i3396.epoOutlineEnabled = !!i3397[10]
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3399 = data
  var i3401 = i3399[0]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 1) {
    i3400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3401[i + 0]) );
  }
  i3398.files = i3400
  i3398.componentToPrefabIds = i3399[1]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3405 = data
  i3404.path = i3405[0]
  request.r(i3405[1], i3405[2], 0, i3404, 'unityObject')
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3407 = data
  var i3409 = i3407[0]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3409[i + 0]) );
  }
  i3406.scriptsExecutionOrder = i3408
  var i3411 = i3407[1]
  var i3410 = []
  for(var i = 0; i < i3411.length; i += 1) {
    i3410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3411[i + 0]) );
  }
  i3406.sortingLayers = i3410
  var i3413 = i3407[2]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3413[i + 0]) );
  }
  i3406.cullingLayers = i3412
  i3406.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3407[3], i3406.timeSettings)
  i3406.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3407[4], i3406.physicsSettings)
  i3406.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3407[5], i3406.physics2DSettings)
  i3406.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3407[6], i3406.qualitySettings)
  i3406.enableRealtimeShadows = !!i3407[7]
  i3406.enableAutoInstancing = !!i3407[8]
  i3406.enableStaticBatching = !!i3407[9]
  i3406.enableDynamicBatching = !!i3407[10]
  i3406.usePreservativeDynamicBatching = !!i3407[11]
  i3406.lightmapEncodingQuality = i3407[12]
  i3406.desiredColorSpace = i3407[13]
  var i3415 = i3407[14]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( i3415[i + 0] );
  }
  i3406.allTags = i3414
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3419 = data
  i3418.name = i3419[0]
  i3418.value = i3419[1]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3423 = data
  i3422.id = i3423[0]
  i3422.name = i3423[1]
  i3422.value = i3423[2]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3427 = data
  i3426.id = i3427[0]
  i3426.name = i3427[1]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3429 = data
  i3428.fixedDeltaTime = i3429[0]
  i3428.maximumDeltaTime = i3429[1]
  i3428.timeScale = i3429[2]
  i3428.maximumParticleTimestep = i3429[3]
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3431 = data
  i3430.gravity = new pc.Vec3( i3431[0], i3431[1], i3431[2] )
  i3430.defaultSolverIterations = i3431[3]
  i3430.bounceThreshold = i3431[4]
  i3430.autoSyncTransforms = !!i3431[5]
  i3430.autoSimulation = !!i3431[6]
  var i3433 = i3431[7]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3433[i + 0]) );
  }
  i3430.collisionMatrix = i3432
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3437 = data
  i3436.enabled = !!i3437[0]
  i3436.layerId = i3437[1]
  i3436.otherLayerId = i3437[2]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3439 = data
  request.r(i3439[0], i3439[1], 0, i3438, 'material')
  i3438.gravity = new pc.Vec2( i3439[2], i3439[3] )
  i3438.positionIterations = i3439[4]
  i3438.velocityIterations = i3439[5]
  i3438.velocityThreshold = i3439[6]
  i3438.maxLinearCorrection = i3439[7]
  i3438.maxAngularCorrection = i3439[8]
  i3438.maxTranslationSpeed = i3439[9]
  i3438.maxRotationSpeed = i3439[10]
  i3438.baumgarteScale = i3439[11]
  i3438.baumgarteTOIScale = i3439[12]
  i3438.timeToSleep = i3439[13]
  i3438.linearSleepTolerance = i3439[14]
  i3438.angularSleepTolerance = i3439[15]
  i3438.defaultContactOffset = i3439[16]
  i3438.autoSimulation = !!i3439[17]
  i3438.queriesHitTriggers = !!i3439[18]
  i3438.queriesStartInColliders = !!i3439[19]
  i3438.callbacksOnDisable = !!i3439[20]
  i3438.reuseCollisionCallbacks = !!i3439[21]
  i3438.autoSyncTransforms = !!i3439[22]
  var i3441 = i3439[23]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 1) {
    i3440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3441[i + 0]) );
  }
  i3438.collisionMatrix = i3440
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3445 = data
  i3444.enabled = !!i3445[0]
  i3444.layerId = i3445[1]
  i3444.otherLayerId = i3445[2]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3447 = data
  var i3449 = i3447[0]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 1) {
    i3448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3449[i + 0]) );
  }
  i3446.qualityLevels = i3448
  var i3451 = i3447[1]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( i3451[i + 0] );
  }
  i3446.names = i3450
  i3446.shadows = i3447[2]
  i3446.anisotropicFiltering = i3447[3]
  i3446.antiAliasing = i3447[4]
  i3446.lodBias = i3447[5]
  i3446.shadowCascades = i3447[6]
  i3446.shadowDistance = i3447[7]
  i3446.shadowmaskMode = i3447[8]
  i3446.shadowProjection = i3447[9]
  i3446.shadowResolution = i3447[10]
  i3446.softParticles = !!i3447[11]
  i3446.softVegetation = !!i3447[12]
  i3446.activeColorSpace = i3447[13]
  i3446.desiredColorSpace = i3447[14]
  i3446.masterTextureLimit = i3447[15]
  i3446.maxQueuedFrames = i3447[16]
  i3446.particleRaycastBudget = i3447[17]
  i3446.pixelLightCount = i3447[18]
  i3446.realtimeReflectionProbes = !!i3447[19]
  i3446.shadowCascade2Split = i3447[20]
  i3446.shadowCascade4Split = new pc.Vec3( i3447[21], i3447[22], i3447[23] )
  i3446.streamingMipmapsActive = !!i3447[24]
  i3446.vSyncCount = i3447[25]
  i3446.asyncUploadBufferSize = i3447[26]
  i3446.asyncUploadTimeSlice = i3447[27]
  i3446.billboardsFaceCameraPosition = !!i3447[28]
  i3446.shadowNearPlaneOffset = i3447[29]
  i3446.streamingMipmapsMemoryBudget = i3447[30]
  i3446.maximumLODLevel = i3447[31]
  i3446.streamingMipmapsAddAllCameras = !!i3447[32]
  i3446.streamingMipmapsMaxLevelReduction = i3447[33]
  i3446.streamingMipmapsRenderersPerFrame = i3447[34]
  i3446.resolutionScalingFixedDPIFactor = i3447[35]
  i3446.streamingMipmapsMaxFileIORequests = i3447[36]
  i3446.currentQualityLevel = i3447[37]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i3455 = data
  i3454.name = i3455[0]
  var i3457 = i3455[1]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i3457[i + 0]) );
  }
  i3454.tos = i3456
  var i3459 = i3455[2]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( i3459[i + 0] );
  }
  i3454.constant = i3458
  i3454.isValid = !!i3455[3]
  i3454.isHuman = !!i3455[4]
  i3454.hasRootMotion = !!i3455[5]
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i3463 = data
  i3462.hash = i3463[0]
  i3462.path = i3463[1]
  return i3462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3467 = data
  i3466.weight = i3467[0]
  i3466.vertices = i3467[1]
  i3466.normals = i3467[2]
  i3466.tangents = i3467[3]
  return i3466
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.SpringJoint":{"spring":0,"damper":1,"minDistance":2,"maxDistance":3,"tolerance":4,"connectedBody":5,"axis":7,"anchor":10,"connectedAnchor":13,"autoConfigureConnectedAnchor":16,"massScale":17,"connectedMassScale":18,"enableCollision":19,"breakForce":20,"breakTorque":21},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint":{"connectedBody":0,"axis":2,"anchor":5,"connectedAnchor":8,"autoConfigureConnectedAnchor":11,"massScale":12,"connectedMassScale":13,"enableCollision":14,"breakForce":15,"breakTorque":16},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[47],"65":[7],"66":[37],"38":[37],"67":[37],"42":[37],"68":[37],"40":[37],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[7],"84":[34],"85":[86],"87":[86],"25":[24],"88":[24],"89":[28,24],"90":[34],"91":[28,24],"92":[24],"93":[24],"94":[34,24],"95":[24,28],"96":[97],"98":[97],"99":[97],"100":[24],"101":[24],"27":[25],"31":[28,24],"102":[24],"26":[25],"103":[24],"104":[24],"105":[24],"106":[24],"107":[24],"108":[24],"109":[24],"110":[24],"111":[24],"21":[28,24],"112":[24],"113":[24],"114":[24],"115":[24],"20":[28,24],"116":[24],"117":[12],"118":[12],"13":[12],"119":[12],"120":[7],"121":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","GameController","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","LunaController","UnityEngine.UI.Text","UnityEngine.UI.RawImage","UnityEngine.AudioSource","AudioController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","BodyPiece","UnityEngine.SpringJoint","UnityEngine.CapsuleCollider","UnityEngine.FixedJoint","TakeDamage","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","Dragable","BodyController","LavaController","LavaPartDisappear","UnityEditor.Animations.AnimatorController","DragController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.HingeJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "09/28/2026 03:37:10";

Deserializers.lunaDaysRunning = "7.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRG_V04_YenTTH_TamNTM";

Deserializers.lunaAppID = "41207";

Deserializers.projectId = "2ee65b7bf37279a4a8c8b2625d5057f9";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1737";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4522";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRG_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "a2b50773-d87c-411f-ba64-1933fd9c4ba6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

