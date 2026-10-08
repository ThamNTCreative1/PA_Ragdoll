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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2922 = root || new pc.UnityMaterial()
  var i2923 = data
  i2922.name = i2923[0]
  request.r(i2923[1], i2923[2], 0, i2922, 'shader')
  i2922.renderQueue = i2923[3]
  i2922.enableInstancing = !!i2923[4]
  var i2925 = i2923[5]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2925[i + 0]) );
  }
  i2922.floatParameters = i2924
  var i2927 = i2923[6]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2927[i + 0]) );
  }
  i2922.colorParameters = i2926
  var i2929 = i2923[7]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2929[i + 0]) );
  }
  i2922.vectorParameters = i2928
  var i2931 = i2923[8]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2931[i + 0]) );
  }
  i2922.textureParameters = i2930
  var i2933 = i2923[9]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2933[i + 0]) );
  }
  i2922.materialFlags = i2932
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2937 = data
  i2936.name = i2937[0]
  i2936.value = i2937[1]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2941 = data
  i2940.name = i2941[0]
  i2940.value = new pc.Color(i2941[1], i2941[2], i2941[3], i2941[4])
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2945 = data
  i2944.name = i2945[0]
  i2944.value = new pc.Vec4( i2945[1], i2945[2], i2945[3], i2945[4] )
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2949 = data
  i2948.name = i2949[0]
  request.r(i2949[1], i2949[2], 0, i2948, 'value')
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2953 = data
  i2952.name = i2953[0]
  i2952.enabled = !!i2953[1]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2955 = data
  i2954.position = new pc.Vec3( i2955[0], i2955[1], i2955[2] )
  i2954.scale = new pc.Vec3( i2955[3], i2955[4], i2955[5] )
  i2954.rotation = new pc.Quat(i2955[6], i2955[7], i2955[8], i2955[9])
  return i2954
}

Deserializers["BulletController"] = function (request, data, root) {
  var i2956 = root || request.c( 'BulletController' )
  var i2957 = data
  i2956.speed = i2957[0]
  i2956.damage = i2957[1]
  i2956.lifeTime = i2957[2]
  request.r(i2957[3], i2957[4], 0, i2956, 'hitMonsterSound')
  request.r(i2957[5], i2957[6], 0, i2956, 'hitSound')
  i2956.isHit = !!i2957[7]
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2959 = data
  i2958.usedByComposite = !!i2959[0]
  i2958.autoTiling = !!i2959[1]
  i2958.size = new pc.Vec2( i2959[2], i2959[3] )
  i2958.edgeRadius = i2959[4]
  i2958.enabled = !!i2959[5]
  i2958.isTrigger = !!i2959[6]
  i2958.usedByEffector = !!i2959[7]
  i2958.density = i2959[8]
  i2958.offset = new pc.Vec2( i2959[9], i2959[10] )
  request.r(i2959[11], i2959[12], 0, i2958, 'material')
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2961 = data
  i2960.color = new pc.Color(i2961[0], i2961[1], i2961[2], i2961[3])
  request.r(i2961[4], i2961[5], 0, i2960, 'sprite')
  i2960.flipX = !!i2961[6]
  i2960.flipY = !!i2961[7]
  i2960.drawMode = i2961[8]
  i2960.size = new pc.Vec2( i2961[9], i2961[10] )
  i2960.tileMode = i2961[11]
  i2960.adaptiveModeThreshold = i2961[12]
  i2960.maskInteraction = i2961[13]
  i2960.spriteSortPoint = i2961[14]
  i2960.enabled = !!i2961[15]
  request.r(i2961[16], i2961[17], 0, i2960, 'sharedMaterial')
  var i2963 = i2961[18]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 2) {
  request.r(i2963[i + 0], i2963[i + 1], 2, i2962, '')
  }
  i2960.sharedMaterials = i2962
  i2960.receiveShadows = !!i2961[19]
  i2960.shadowCastingMode = i2961[20]
  i2960.sortingLayerID = i2961[21]
  i2960.sortingOrder = i2961[22]
  i2960.lightmapIndex = i2961[23]
  i2960.lightmapSceneIndex = i2961[24]
  i2960.lightmapScaleOffset = new pc.Vec4( i2961[25], i2961[26], i2961[27], i2961[28] )
  i2960.lightProbeUsage = i2961[29]
  i2960.reflectionProbeUsage = i2961[30]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2967 = data
  i2966.name = i2967[0]
  i2966.tagId = i2967[1]
  i2966.enabled = !!i2967[2]
  i2966.isStatic = !!i2967[3]
  i2966.layer = i2967[4]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2969 = data
  var i2971 = i2969[0]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 3) {
    i2970.push( new pc.Vec3( i2971[i + 0], i2971[i + 1], i2971[i + 2] ) );
  }
  i2968.positions = i2970
  i2968.positionCount = i2969[1]
  i2968.time = i2969[2]
  i2968.startWidth = i2969[3]
  i2968.endWidth = i2969[4]
  i2968.widthMultiplier = i2969[5]
  i2968.autodestruct = !!i2969[6]
  i2968.emitting = !!i2969[7]
  i2968.numCornerVertices = i2969[8]
  i2968.numCapVertices = i2969[9]
  i2968.minVertexDistance = i2969[10]
  i2968.colorGradient = i2969[11] ? new pc.ColorGradient(i2969[11][0], i2969[11][1], i2969[11][2]) : null
  i2968.startColor = new pc.Color(i2969[12], i2969[13], i2969[14], i2969[15])
  i2968.endColor = new pc.Color(i2969[16], i2969[17], i2969[18], i2969[19])
  i2968.generateLightingData = !!i2969[20]
  i2968.textureMode = i2969[21]
  i2968.alignment = i2969[22]
  i2968.widthCurve = new pc.AnimationCurve( { keys_flow: i2969[23] } )
  i2968.enabled = !!i2969[24]
  request.r(i2969[25], i2969[26], 0, i2968, 'sharedMaterial')
  var i2973 = i2969[27]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 2, i2972, '')
  }
  i2968.sharedMaterials = i2972
  i2968.receiveShadows = !!i2969[28]
  i2968.shadowCastingMode = i2969[29]
  i2968.sortingLayerID = i2969[30]
  i2968.sortingOrder = i2969[31]
  i2968.lightmapIndex = i2969[32]
  i2968.lightmapSceneIndex = i2969[33]
  i2968.lightmapScaleOffset = new pc.Vec4( i2969[34], i2969[35], i2969[36], i2969[37] )
  i2968.lightProbeUsage = i2969[38]
  i2968.reflectionProbeUsage = i2969[39]
  return i2968
}

Deserializers["TraiController"] = function (request, data, root) {
  var i2976 = root || request.c( 'TraiController' )
  var i2977 = data
  request.r(i2977[0], i2977[1], 0, i2976, 'trail')
  i2976.baseWidth = i2977[2]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2979 = data
  i2978.sortingLayerIndex = i2979[0]
  i2978.sortingOrder = i2979[1]
  i2978.sortingLayerName = i2979[2]
  i2978.enabled = !!i2979[3]
  return i2978
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2980 = root || request.c( 'PlayerController' )
  var i2981 = data
  var i2983 = i2981[0]
  var i2982 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.add(request.d('Piece', i2983[i + 0]));
  }
  i2980.pieces = i2982
  var i2985 = i2981[1]
  var i2984 = new (System.Collections.Generic.List$1(Bridge.ns('PlayerTrigger')))
  for(var i = 0; i < i2985.length; i += 2) {
  request.r(i2985[i + 0], i2985[i + 1], 1, i2984, '')
  }
  i2980.triggers = i2984
  request.r(i2981[2], i2981[3], 0, i2980, 'deadSFX')
  i2980.maxForce = new pc.Vec2( i2981[4], i2981[5] )
  i2980.minForce = new pc.Vec2( i2981[6], i2981[7] )
  request.r(i2981[8], i2981[9], 0, i2980, 'anim')
  request.r(i2981[10], i2981[11], 0, i2980, 'action')
  i2980.onAttack = !!i2981[12]
  i2980.isDead = !!i2981[13]
  return i2980
}

Deserializers["Piece"] = function (request, data, root) {
  var i2988 = root || request.c( 'Piece' )
  var i2989 = data
  request.r(i2989[0], i2989[1], 0, i2988, 'Joint')
  request.r(i2989[2], i2989[3], 0, i2988, 'Rb')
  return i2988
}

Deserializers["ShootAnimation"] = function (request, data, root) {
  var i2992 = root || request.c( 'ShootAnimation' )
  var i2993 = data
  request.r(i2993[0], i2993[1], 0, i2992, 'left')
  request.r(i2993[2], i2993[3], 0, i2992, 'right')
  i2992.shootAngleLimitMax = i2993[4]
  i2992.shootAngleLimitMin = i2993[5]
  i2992.normalAngleLimitMax = i2993[6]
  i2992.normalAngleLimitMin = i2993[7]
  i2992.timeMotor = i2993[8]
  return i2992
}

Deserializers["ActionPerTime"] = function (request, data, root) {
  var i2994 = root || request.c( 'ActionPerTime' )
  var i2995 = data
  i2994.action = request.d('UnityEngine.Events.UnityEvent', i2995[0], i2994.action)
  i2994.isPause = !!i2995[1]
  return i2994
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2997 = data
  i2996.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2997[0], i2996.m_PersistentCalls)
  return i2996
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2999 = data
  var i3001 = i2999[0]
  var i3000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.add(request.d('UnityEngine.Events.PersistentCall', i3001[i + 0]));
  }
  i2998.m_Calls = i3000
  return i2998
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3005 = data
  request.r(i3005[0], i3005[1], 0, i3004, 'm_Target')
  i3004.m_TargetAssemblyTypeName = i3005[2]
  i3004.m_MethodName = i3005[3]
  i3004.m_Mode = i3005[4]
  i3004.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3005[5], i3004.m_Arguments)
  i3004.m_CallState = i3005[6]
  return i3004
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3007 = data
  request.r(i3007[0], i3007[1], 0, i3006, 'm_ObjectArgument')
  i3006.m_ObjectArgumentAssemblyTypeName = i3007[2]
  i3006.m_IntArgument = i3007[3]
  i3006.m_FloatArgument = i3007[4]
  i3006.m_StringArgument = i3007[5]
  i3006.m_BoolArgument = !!i3007[6]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3009 = data
  i3008.bodyType = i3009[0]
  request.r(i3009[1], i3009[2], 0, i3008, 'material')
  i3008.simulated = !!i3009[3]
  i3008.useAutoMass = !!i3009[4]
  i3008.mass = i3009[5]
  i3008.drag = i3009[6]
  i3008.angularDrag = i3009[7]
  i3008.gravityScale = i3009[8]
  i3008.collisionDetectionMode = i3009[9]
  i3008.sleepMode = i3009[10]
  i3008.constraints = i3009[11]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i3011 = data
  i3010.useLimits = !!i3011[0]
  i3010.limits = request.d('UnityEngine.JointAngleLimits2D', i3011[1], i3010.limits)
  i3010.useMotor = !!i3011[2]
  i3010.motor = request.d('UnityEngine.JointMotor2D', i3011[3], i3010.motor)
  i3010.anchor = new pc.Vec2( i3011[4], i3011[5] )
  i3010.connectedAnchor = new pc.Vec2( i3011[6], i3011[7] )
  i3010.autoConfigureConnectedAnchor = !!i3011[8]
  request.r(i3011[9], i3011[10], 0, i3010, 'connectedBody')
  i3010.breakForce = i3011[11]
  i3010.breakTorque = i3011[12]
  i3010.enableCollision = !!i3011[13]
  i3010.enabled = !!i3011[14]
  return i3010
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i3012 = root || request.c( 'PlayerTrigger' )
  var i3013 = data
  i3012.OnContactZombie = request.d('System.Action', i3013[0], i3012.OnContactZombie)
  return i3012
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3014 = root || request.c( 'System.Action' )
  var i3015 = data
  return i3014
}

Deserializers["GunController"] = function (request, data, root) {
  var i3016 = root || request.c( 'GunController' )
  var i3017 = data
  request.r(i3017[0], i3017[1], 0, i3016, 'aim')
  request.r(i3017[2], i3017[3], 0, i3016, 'bulletPrefab')
  request.r(i3017[4], i3017[5], 0, i3016, 'VFX')
  request.r(i3017[6], i3017[7], 0, i3016, 'SFX')
  i3016.timeCD = i3017[8]
  i3016.onCD = !!i3017[9]
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3019 = data
  i3018.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3019[0], i3018.main)
  i3018.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3019[1], i3018.colorBySpeed)
  i3018.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3019[2], i3018.colorOverLifetime)
  i3018.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3019[3], i3018.emission)
  i3018.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3019[4], i3018.rotationBySpeed)
  i3018.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3019[5], i3018.rotationOverLifetime)
  i3018.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3019[6], i3018.shape)
  i3018.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3019[7], i3018.sizeBySpeed)
  i3018.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3019[8], i3018.sizeOverLifetime)
  i3018.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3019[9], i3018.textureSheetAnimation)
  i3018.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3019[10], i3018.velocityOverLifetime)
  i3018.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3019[11], i3018.noise)
  i3018.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3019[12], i3018.inheritVelocity)
  i3018.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3019[13], i3018.forceOverLifetime)
  i3018.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3019[14], i3018.limitVelocityOverLifetime)
  i3018.useAutoRandomSeed = !!i3019[15]
  i3018.randomSeed = i3019[16]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3020 = root || new pc.ParticleSystemMain()
  var i3021 = data
  i3020.duration = i3021[0]
  i3020.loop = !!i3021[1]
  i3020.prewarm = !!i3021[2]
  i3020.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[3], i3020.startDelay)
  i3020.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[4], i3020.startLifetime)
  i3020.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[5], i3020.startSpeed)
  i3020.startSize3D = !!i3021[6]
  i3020.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[7], i3020.startSizeX)
  i3020.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[8], i3020.startSizeY)
  i3020.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[9], i3020.startSizeZ)
  i3020.startRotation3D = !!i3021[10]
  i3020.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[11], i3020.startRotationX)
  i3020.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[12], i3020.startRotationY)
  i3020.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[13], i3020.startRotationZ)
  i3020.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3021[14], i3020.startColor)
  i3020.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3021[15], i3020.gravityModifier)
  i3020.simulationSpace = i3021[16]
  request.r(i3021[17], i3021[18], 0, i3020, 'customSimulationSpace')
  i3020.simulationSpeed = i3021[19]
  i3020.useUnscaledTime = !!i3021[20]
  i3020.scalingMode = i3021[21]
  i3020.playOnAwake = !!i3021[22]
  i3020.maxParticles = i3021[23]
  i3020.emitterVelocityMode = i3021[24]
  i3020.stopAction = i3021[25]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3022 = root || new pc.MinMaxCurve()
  var i3023 = data
  i3022.mode = i3023[0]
  i3022.curveMin = new pc.AnimationCurve( { keys_flow: i3023[1] } )
  i3022.curveMax = new pc.AnimationCurve( { keys_flow: i3023[2] } )
  i3022.curveMultiplier = i3023[3]
  i3022.constantMin = i3023[4]
  i3022.constantMax = i3023[5]
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3024 = root || new pc.MinMaxGradient()
  var i3025 = data
  i3024.mode = i3025[0]
  i3024.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3025[1], i3024.gradientMin)
  i3024.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3025[2], i3024.gradientMax)
  i3024.colorMin = new pc.Color(i3025[3], i3025[4], i3025[5], i3025[6])
  i3024.colorMax = new pc.Color(i3025[7], i3025[8], i3025[9], i3025[10])
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3027 = data
  i3026.mode = i3027[0]
  var i3029 = i3027[1]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3029[i + 0]) );
  }
  i3026.colorKeys = i3028
  var i3031 = i3027[2]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3031[i + 0]) );
  }
  i3026.alphaKeys = i3030
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3032 = root || new pc.ParticleSystemColorBySpeed()
  var i3033 = data
  i3032.enabled = !!i3033[0]
  i3032.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3033[1], i3032.color)
  i3032.range = new pc.Vec2( i3033[2], i3033[3] )
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3037 = data
  i3036.color = new pc.Color(i3037[0], i3037[1], i3037[2], i3037[3])
  i3036.time = i3037[4]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3041 = data
  i3040.alpha = i3041[0]
  i3040.time = i3041[1]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3042 = root || new pc.ParticleSystemColorOverLifetime()
  var i3043 = data
  i3042.enabled = !!i3043[0]
  i3042.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3043[1], i3042.color)
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3044 = root || new pc.ParticleSystemEmitter()
  var i3045 = data
  i3044.enabled = !!i3045[0]
  i3044.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[1], i3044.rateOverTime)
  i3044.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3045[2], i3044.rateOverDistance)
  var i3047 = i3045[3]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3047[i + 0]) );
  }
  i3044.bursts = i3046
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3050 = root || new pc.ParticleSystemBurst()
  var i3051 = data
  i3050.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3051[0], i3050.count)
  i3050.cycleCount = i3051[1]
  i3050.minCount = i3051[2]
  i3050.maxCount = i3051[3]
  i3050.repeatInterval = i3051[4]
  i3050.time = i3051[5]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3052 = root || new pc.ParticleSystemRotationBySpeed()
  var i3053 = data
  i3052.enabled = !!i3053[0]
  i3052.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3053[1], i3052.x)
  i3052.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3053[2], i3052.y)
  i3052.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3053[3], i3052.z)
  i3052.separateAxes = !!i3053[4]
  i3052.range = new pc.Vec2( i3053[5], i3053[6] )
  return i3052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3054 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3055 = data
  i3054.enabled = !!i3055[0]
  i3054.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3055[1], i3054.x)
  i3054.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3055[2], i3054.y)
  i3054.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3055[3], i3054.z)
  i3054.separateAxes = !!i3055[4]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3056 = root || new pc.ParticleSystemShape()
  var i3057 = data
  i3056.enabled = !!i3057[0]
  i3056.shapeType = i3057[1]
  i3056.randomDirectionAmount = i3057[2]
  i3056.sphericalDirectionAmount = i3057[3]
  i3056.randomPositionAmount = i3057[4]
  i3056.alignToDirection = !!i3057[5]
  i3056.radius = i3057[6]
  i3056.radiusMode = i3057[7]
  i3056.radiusSpread = i3057[8]
  i3056.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3057[9], i3056.radiusSpeed)
  i3056.radiusThickness = i3057[10]
  i3056.angle = i3057[11]
  i3056.length = i3057[12]
  i3056.boxThickness = new pc.Vec3( i3057[13], i3057[14], i3057[15] )
  i3056.meshShapeType = i3057[16]
  request.r(i3057[17], i3057[18], 0, i3056, 'mesh')
  request.r(i3057[19], i3057[20], 0, i3056, 'meshRenderer')
  request.r(i3057[21], i3057[22], 0, i3056, 'skinnedMeshRenderer')
  i3056.useMeshMaterialIndex = !!i3057[23]
  i3056.meshMaterialIndex = i3057[24]
  i3056.useMeshColors = !!i3057[25]
  i3056.normalOffset = i3057[26]
  i3056.arc = i3057[27]
  i3056.arcMode = i3057[28]
  i3056.arcSpread = i3057[29]
  i3056.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3057[30], i3056.arcSpeed)
  i3056.donutRadius = i3057[31]
  i3056.position = new pc.Vec3( i3057[32], i3057[33], i3057[34] )
  i3056.rotation = new pc.Vec3( i3057[35], i3057[36], i3057[37] )
  i3056.scale = new pc.Vec3( i3057[38], i3057[39], i3057[40] )
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3058 = root || new pc.ParticleSystemSizeBySpeed()
  var i3059 = data
  i3058.enabled = !!i3059[0]
  i3058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3059[1], i3058.x)
  i3058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3059[2], i3058.y)
  i3058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3059[3], i3058.z)
  i3058.separateAxes = !!i3059[4]
  i3058.range = new pc.Vec2( i3059[5], i3059[6] )
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3060 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3061 = data
  i3060.enabled = !!i3061[0]
  i3060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[1], i3060.x)
  i3060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[2], i3060.y)
  i3060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3061[3], i3060.z)
  i3060.separateAxes = !!i3061[4]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3062 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3063 = data
  i3062.enabled = !!i3063[0]
  i3062.mode = i3063[1]
  i3062.animation = i3063[2]
  i3062.numTilesX = i3063[3]
  i3062.numTilesY = i3063[4]
  i3062.useRandomRow = !!i3063[5]
  i3062.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3063[6], i3062.frameOverTime)
  i3062.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3063[7], i3062.startFrame)
  i3062.cycleCount = i3063[8]
  i3062.rowIndex = i3063[9]
  i3062.flipU = i3063[10]
  i3062.flipV = i3063[11]
  i3062.spriteCount = i3063[12]
  var i3065 = i3063[13]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 2, i3064, '')
  }
  i3062.sprites = i3064
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3068 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3069 = data
  i3068.enabled = !!i3069[0]
  i3068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[1], i3068.x)
  i3068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[2], i3068.y)
  i3068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[3], i3068.z)
  i3068.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[4], i3068.radial)
  i3068.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[5], i3068.speedModifier)
  i3068.space = i3069[6]
  i3068.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[7], i3068.orbitalX)
  i3068.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[8], i3068.orbitalY)
  i3068.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[9], i3068.orbitalZ)
  i3068.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[10], i3068.orbitalOffsetX)
  i3068.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[11], i3068.orbitalOffsetY)
  i3068.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3069[12], i3068.orbitalOffsetZ)
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3070 = root || new pc.ParticleSystemNoise()
  var i3071 = data
  i3070.enabled = !!i3071[0]
  i3070.separateAxes = !!i3071[1]
  i3070.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[2], i3070.strengthX)
  i3070.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[3], i3070.strengthY)
  i3070.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[4], i3070.strengthZ)
  i3070.frequency = i3071[5]
  i3070.damping = !!i3071[6]
  i3070.octaveCount = i3071[7]
  i3070.octaveMultiplier = i3071[8]
  i3070.octaveScale = i3071[9]
  i3070.quality = i3071[10]
  i3070.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[11], i3070.scrollSpeed)
  i3070.scrollSpeedMultiplier = i3071[12]
  i3070.remapEnabled = !!i3071[13]
  i3070.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[14], i3070.remapX)
  i3070.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[15], i3070.remapY)
  i3070.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[16], i3070.remapZ)
  i3070.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[17], i3070.positionAmount)
  i3070.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[18], i3070.rotationAmount)
  i3070.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3071[19], i3070.sizeAmount)
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3072 = root || new pc.ParticleSystemInheritVelocity()
  var i3073 = data
  i3072.enabled = !!i3073[0]
  i3072.mode = i3073[1]
  i3072.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3073[2], i3072.curve)
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3074 = root || new pc.ParticleSystemForceOverLifetime()
  var i3075 = data
  i3074.enabled = !!i3075[0]
  i3074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3075[1], i3074.x)
  i3074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3075[2], i3074.y)
  i3074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3075[3], i3074.z)
  i3074.space = i3075[4]
  i3074.randomized = !!i3075[5]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3076 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3077 = data
  i3076.enabled = !!i3077[0]
  i3076.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[1], i3076.limit)
  i3076.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[2], i3076.limitX)
  i3076.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[3], i3076.limitY)
  i3076.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[4], i3076.limitZ)
  i3076.dampen = i3077[5]
  i3076.separateAxes = !!i3077[6]
  i3076.space = i3077[7]
  i3076.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3077[8], i3076.drag)
  i3076.multiplyDragByParticleSize = !!i3077[9]
  i3076.multiplyDragByParticleVelocity = !!i3077[10]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'mesh')
  i3078.meshCount = i3079[2]
  i3078.activeVertexStreamsCount = i3079[3]
  i3078.alignment = i3079[4]
  i3078.renderMode = i3079[5]
  i3078.sortMode = i3079[6]
  i3078.lengthScale = i3079[7]
  i3078.velocityScale = i3079[8]
  i3078.cameraVelocityScale = i3079[9]
  i3078.normalDirection = i3079[10]
  i3078.sortingFudge = i3079[11]
  i3078.minParticleSize = i3079[12]
  i3078.maxParticleSize = i3079[13]
  i3078.pivot = new pc.Vec3( i3079[14], i3079[15], i3079[16] )
  request.r(i3079[17], i3079[18], 0, i3078, 'trailMaterial')
  i3078.applyActiveColorSpace = !!i3079[19]
  i3078.enabled = !!i3079[20]
  request.r(i3079[21], i3079[22], 0, i3078, 'sharedMaterial')
  var i3081 = i3079[23]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 2) {
  request.r(i3081[i + 0], i3081[i + 1], 2, i3080, '')
  }
  i3078.sharedMaterials = i3080
  i3078.receiveShadows = !!i3079[24]
  i3078.shadowCastingMode = i3079[25]
  i3078.sortingLayerID = i3079[26]
  i3078.sortingOrder = i3079[27]
  i3078.lightmapIndex = i3079[28]
  i3078.lightmapSceneIndex = i3079[29]
  i3078.lightmapScaleOffset = new pc.Vec4( i3079[30], i3079[31], i3079[32], i3079[33] )
  i3078.lightProbeUsage = i3079[34]
  i3078.reflectionProbeUsage = i3079[35]
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3083 = data
  request.r(i3083[0], i3083[1], 0, i3082, 'clip')
  request.r(i3083[2], i3083[3], 0, i3082, 'outputAudioMixerGroup')
  i3082.playOnAwake = !!i3083[4]
  i3082.loop = !!i3083[5]
  i3082.time = i3083[6]
  i3082.volume = i3083[7]
  i3082.pitch = i3083[8]
  i3082.enabled = !!i3083[9]
  return i3082
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i3084 = root || request.c( 'BalanceController' )
  var i3085 = data
  i3084.targetRotation = i3085[0]
  i3084.force = i3085[1]
  return i3084
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i3086 = root || request.c( 'MonsterController' )
  var i3087 = data
  i3086.maxHP = i3087[0]
  i3086.currentHP = i3087[1]
  var i3089 = i3087[2]
  var i3088 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.add(request.d('Piece', i3089[i + 0]));
  }
  i3086.pieces = i3088
  var i3091 = i3087[3]
  var i3090 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPart')))
  for(var i = 0; i < i3091.length; i += 2) {
  request.r(i3091[i + 0], i3091[i + 1], 1, i3090, '')
  }
  i3086.parts = i3090
  request.r(i3087[4], i3087[5], 0, i3086, 'bloodPrefab')
  request.r(i3087[6], i3087[7], 0, i3086, 'deadSFX')
  i3086.maxForce = new pc.Vec2( i3087[8], i3087[9] )
  i3086.minForce = new pc.Vec2( i3087[10], i3087[11] )
  request.r(i3087[12], i3087[13], 0, i3086, 'balance')
  i3086.isDead = !!i3087[14]
  i3086.speed = i3087[15]
  request.r(i3087[16], i3087[17], 0, i3086, 'body')
  request.r(i3087[18], i3087[19], 0, i3086, 'leftHand')
  request.r(i3087[20], i3087[21], 0, i3086, 'rightHand')
  request.r(i3087[22], i3087[23], 0, i3086, 'leftLeg')
  request.r(i3087[24], i3087[25], 0, i3086, 'rightLeg')
  request.r(i3087[26], i3087[27], 0, i3086, 'jump')
  request.r(i3087[28], i3087[29], 0, i3086, 'checkGround')
  return i3086
}

Deserializers["BodyPart"] = function (request, data, root) {
  var i3094 = root || request.c( 'BodyPart' )
  var i3095 = data
  return i3094
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i3096 = root || request.c( 'CheckGround' )
  var i3097 = data
  i3096.onGround = !!i3097[0]
  i3096.layerMask = UnityEngine.LayerMask.FromIntegerValue( i3097[1] )
  i3096.distance = i3097[2]
  return i3096
}

Deserializers["JumpController"] = function (request, data, root) {
  var i3098 = root || request.c( 'JumpController' )
  var i3099 = data
  request.r(i3099[0], i3099[1], 0, i3098, 'body')
  i3098.jumpForce = new pc.Vec2( i3099[2], i3099[3] )
  i3098.timeCD = i3099[4]
  i3098.onCD = !!i3099[5]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3101 = data
  i3100.name = i3101[0]
  i3100.index = i3101[1]
  i3100.startup = !!i3101[2]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3103 = data
  i3102.aspect = i3103[0]
  i3102.orthographic = !!i3103[1]
  i3102.orthographicSize = i3103[2]
  i3102.backgroundColor = new pc.Color(i3103[3], i3103[4], i3103[5], i3103[6])
  i3102.nearClipPlane = i3103[7]
  i3102.farClipPlane = i3103[8]
  i3102.fieldOfView = i3103[9]
  i3102.depth = i3103[10]
  i3102.clearFlags = i3103[11]
  i3102.cullingMask = i3103[12]
  i3102.rect = i3103[13]
  request.r(i3103[14], i3103[15], 0, i3102, 'targetTexture')
  i3102.usePhysicalProperties = !!i3103[16]
  i3102.focalLength = i3103[17]
  i3102.sensorSize = new pc.Vec2( i3103[18], i3103[19] )
  i3102.lensShift = new pc.Vec2( i3103[20], i3103[21] )
  i3102.gateFit = i3103[22]
  i3102.commandBufferCount = i3103[23]
  i3102.cameraType = i3103[24]
  i3102.enabled = !!i3103[25]
  return i3102
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3105 = data
  request.r(i3105[0], i3105[1], 0, i3104, 'm_FirstSelected')
  i3104.m_sendNavigationEvents = !!i3105[2]
  i3104.m_DragThreshold = i3105[3]
  return i3104
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3107 = data
  i3106.m_HorizontalAxis = i3107[0]
  i3106.m_VerticalAxis = i3107[1]
  i3106.m_SubmitButton = i3107[2]
  i3106.m_CancelButton = i3107[3]
  i3106.m_InputActionsPerSecond = i3107[4]
  i3106.m_RepeatDelay = i3107[5]
  i3106.m_ForceModuleActive = !!i3107[6]
  i3106.m_SendPointerHoverToParent = !!i3107[7]
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3109 = data
  i3108.pivot = new pc.Vec2( i3109[0], i3109[1] )
  i3108.anchorMin = new pc.Vec2( i3109[2], i3109[3] )
  i3108.anchorMax = new pc.Vec2( i3109[4], i3109[5] )
  i3108.sizeDelta = new pc.Vec2( i3109[6], i3109[7] )
  i3108.anchoredPosition3D = new pc.Vec3( i3109[8], i3109[9], i3109[10] )
  i3108.rotation = new pc.Quat(i3109[11], i3109[12], i3109[13], i3109[14])
  i3108.scale = new pc.Vec3( i3109[15], i3109[16], i3109[17] )
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3111 = data
  i3110.planeDistance = i3111[0]
  i3110.referencePixelsPerUnit = i3111[1]
  i3110.isFallbackOverlay = !!i3111[2]
  i3110.renderMode = i3111[3]
  i3110.renderOrder = i3111[4]
  i3110.sortingLayerName = i3111[5]
  i3110.sortingOrder = i3111[6]
  i3110.scaleFactor = i3111[7]
  request.r(i3111[8], i3111[9], 0, i3110, 'worldCamera')
  i3110.overrideSorting = !!i3111[10]
  i3110.pixelPerfect = !!i3111[11]
  i3110.targetDisplay = i3111[12]
  i3110.overridePixelPerfect = !!i3111[13]
  i3110.enabled = !!i3111[14]
  return i3110
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3113 = data
  i3112.m_UiScaleMode = i3113[0]
  i3112.m_ReferencePixelsPerUnit = i3113[1]
  i3112.m_ScaleFactor = i3113[2]
  i3112.m_ReferenceResolution = new pc.Vec2( i3113[3], i3113[4] )
  i3112.m_ScreenMatchMode = i3113[5]
  i3112.m_MatchWidthOrHeight = i3113[6]
  i3112.m_PhysicalUnit = i3113[7]
  i3112.m_FallbackScreenDPI = i3113[8]
  i3112.m_DefaultSpriteDPI = i3113[9]
  i3112.m_DynamicPixelsPerUnit = i3113[10]
  i3112.m_PresetInfoIsWorld = !!i3113[11]
  return i3112
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3115 = data
  i3114.m_IgnoreReversedGraphics = !!i3115[0]
  i3114.m_BlockingObjects = i3115[1]
  i3114.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3115[2] )
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3117 = data
  i3116.cullTransparentMesh = !!i3117[0]
  return i3116
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'm_Texture')
  i3118.m_UVRect = UnityEngine.Rect.MinMaxRect(i3119[2], i3119[3], i3119[4], i3119[5])
  request.r(i3119[6], i3119[7], 0, i3118, 'm_Material')
  i3118.m_Maskable = !!i3119[8]
  i3118.m_Color = new pc.Color(i3119[9], i3119[10], i3119[11], i3119[12])
  i3118.m_RaycastTarget = !!i3119[13]
  i3118.m_RaycastPadding = new pc.Vec4( i3119[14], i3119[15], i3119[16], i3119[17] )
  return i3118
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3121 = data
  i3120.m_AspectMode = i3121[0]
  i3120.m_AspectRatio = i3121[1]
  return i3120
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3122 = root || request.c( 'UnityEngine.UI.Button' )
  var i3123 = data
  i3122.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3123[0], i3122.m_OnClick)
  i3122.m_Navigation = request.d('UnityEngine.UI.Navigation', i3123[1], i3122.m_Navigation)
  i3122.m_Transition = i3123[2]
  i3122.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3123[3], i3122.m_Colors)
  i3122.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3123[4], i3122.m_SpriteState)
  i3122.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3123[5], i3122.m_AnimationTriggers)
  i3122.m_Interactable = !!i3123[6]
  request.r(i3123[7], i3123[8], 0, i3122, 'm_TargetGraphic')
  return i3122
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3125 = data
  i3124.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3125[0], i3124.m_PersistentCalls)
  return i3124
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3127 = data
  i3126.m_Mode = i3127[0]
  i3126.m_WrapAround = !!i3127[1]
  request.r(i3127[2], i3127[3], 0, i3126, 'm_SelectOnUp')
  request.r(i3127[4], i3127[5], 0, i3126, 'm_SelectOnDown')
  request.r(i3127[6], i3127[7], 0, i3126, 'm_SelectOnLeft')
  request.r(i3127[8], i3127[9], 0, i3126, 'm_SelectOnRight')
  return i3126
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3128 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3129 = data
  i3128.m_NormalColor = new pc.Color(i3129[0], i3129[1], i3129[2], i3129[3])
  i3128.m_HighlightedColor = new pc.Color(i3129[4], i3129[5], i3129[6], i3129[7])
  i3128.m_PressedColor = new pc.Color(i3129[8], i3129[9], i3129[10], i3129[11])
  i3128.m_SelectedColor = new pc.Color(i3129[12], i3129[13], i3129[14], i3129[15])
  i3128.m_DisabledColor = new pc.Color(i3129[16], i3129[17], i3129[18], i3129[19])
  i3128.m_ColorMultiplier = i3129[20]
  i3128.m_FadeDuration = i3129[21]
  return i3128
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3130 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'm_HighlightedSprite')
  request.r(i3131[2], i3131[3], 0, i3130, 'm_PressedSprite')
  request.r(i3131[4], i3131[5], 0, i3130, 'm_SelectedSprite')
  request.r(i3131[6], i3131[7], 0, i3130, 'm_DisabledSprite')
  return i3130
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3132 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3133 = data
  i3132.m_NormalTrigger = i3133[0]
  i3132.m_HighlightedTrigger = i3133[1]
  i3132.m_PressedTrigger = i3133[2]
  i3132.m_SelectedTrigger = i3133[3]
  i3132.m_DisabledTrigger = i3133[4]
  return i3132
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3134 = root || request.c( 'UnityEngine.UI.Image' )
  var i3135 = data
  request.r(i3135[0], i3135[1], 0, i3134, 'm_Sprite')
  i3134.m_Type = i3135[2]
  i3134.m_PreserveAspect = !!i3135[3]
  i3134.m_FillCenter = !!i3135[4]
  i3134.m_FillMethod = i3135[5]
  i3134.m_FillAmount = i3135[6]
  i3134.m_FillClockwise = !!i3135[7]
  i3134.m_FillOrigin = i3135[8]
  i3134.m_UseSpriteMesh = !!i3135[9]
  i3134.m_PixelsPerUnitMultiplier = i3135[10]
  request.r(i3135[11], i3135[12], 0, i3134, 'm_Material')
  i3134.m_Maskable = !!i3135[13]
  i3134.m_Color = new pc.Color(i3135[14], i3135[15], i3135[16], i3135[17])
  i3134.m_RaycastTarget = !!i3135[18]
  i3134.m_RaycastPadding = new pc.Vec4( i3135[19], i3135[20], i3135[21], i3135[22] )
  return i3134
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3136 = root || request.c( 'UnityEngine.UI.Text' )
  var i3137 = data
  i3136.m_FontData = request.d('UnityEngine.UI.FontData', i3137[0], i3136.m_FontData)
  i3136.m_Text = i3137[1]
  request.r(i3137[2], i3137[3], 0, i3136, 'm_Material')
  i3136.m_Maskable = !!i3137[4]
  i3136.m_Color = new pc.Color(i3137[5], i3137[6], i3137[7], i3137[8])
  i3136.m_RaycastTarget = !!i3137[9]
  i3136.m_RaycastPadding = new pc.Vec4( i3137[10], i3137[11], i3137[12], i3137[13] )
  return i3136
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3138 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3139 = data
  request.r(i3139[0], i3139[1], 0, i3138, 'm_Font')
  i3138.m_FontSize = i3139[2]
  i3138.m_FontStyle = i3139[3]
  i3138.m_BestFit = !!i3139[4]
  i3138.m_MinSize = i3139[5]
  i3138.m_MaxSize = i3139[6]
  i3138.m_Alignment = i3139[7]
  i3138.m_AlignByGeometry = !!i3139[8]
  i3138.m_RichText = !!i3139[9]
  i3138.m_HorizontalOverflow = i3139[10]
  i3138.m_VerticalOverflow = i3139[11]
  i3138.m_LineSpacing = i3139[12]
  return i3138
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3140 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3141 = data
  i3140.targetIsSelf = !!i3141[0]
  request.r(i3141[1], i3141[2], 0, i3140, 'targetGO')
  i3140.tweenTargetIsTargetGO = !!i3141[3]
  i3140.delay = i3141[4]
  i3140.duration = i3141[5]
  i3140.easeType = i3141[6]
  i3140.easeCurve = new pc.AnimationCurve( { keys_flow: i3141[7] } )
  i3140.loopType = i3141[8]
  i3140.loops = i3141[9]
  i3140.id = i3141[10]
  i3140.isRelative = !!i3141[11]
  i3140.isFrom = !!i3141[12]
  i3140.isIndependentUpdate = !!i3141[13]
  i3140.autoKill = !!i3141[14]
  i3140.autoGenerate = !!i3141[15]
  i3140.isActive = !!i3141[16]
  i3140.isValid = !!i3141[17]
  request.r(i3141[18], i3141[19], 0, i3140, 'target')
  i3140.animationType = i3141[20]
  i3140.targetType = i3141[21]
  i3140.forcedTargetType = i3141[22]
  i3140.autoPlay = !!i3141[23]
  i3140.useTargetAsV3 = !!i3141[24]
  i3140.endValueFloat = i3141[25]
  i3140.endValueV3 = new pc.Vec3( i3141[26], i3141[27], i3141[28] )
  i3140.endValueV2 = new pc.Vec2( i3141[29], i3141[30] )
  i3140.endValueColor = new pc.Color(i3141[31], i3141[32], i3141[33], i3141[34])
  i3140.endValueString = i3141[35]
  i3140.endValueRect = UnityEngine.Rect.MinMaxRect(i3141[36], i3141[37], i3141[38], i3141[39])
  request.r(i3141[40], i3141[41], 0, i3140, 'endValueTransform')
  i3140.optionalBool0 = !!i3141[42]
  i3140.optionalBool1 = !!i3141[43]
  i3140.optionalFloat0 = i3141[44]
  i3140.optionalInt0 = i3141[45]
  i3140.optionalRotationMode = i3141[46]
  i3140.optionalScrambleMode = i3141[47]
  i3140.optionalShakeRandomnessMode = i3141[48]
  i3140.optionalString = i3141[49]
  i3140.updateType = i3141[50]
  i3140.isSpeedBased = !!i3141[51]
  i3140.hasOnStart = !!i3141[52]
  i3140.hasOnPlay = !!i3141[53]
  i3140.hasOnUpdate = !!i3141[54]
  i3140.hasOnStepComplete = !!i3141[55]
  i3140.hasOnComplete = !!i3141[56]
  i3140.hasOnTweenCreated = !!i3141[57]
  i3140.hasOnRewind = !!i3141[58]
  i3140.onStart = request.d('UnityEngine.Events.UnityEvent', i3141[59], i3140.onStart)
  i3140.onPlay = request.d('UnityEngine.Events.UnityEvent', i3141[60], i3140.onPlay)
  i3140.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3141[61], i3140.onUpdate)
  i3140.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3141[62], i3140.onStepComplete)
  i3140.onComplete = request.d('UnityEngine.Events.UnityEvent', i3141[63], i3140.onComplete)
  i3140.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3141[64], i3140.onTweenCreated)
  i3140.onRewind = request.d('UnityEngine.Events.UnityEvent', i3141[65], i3140.onRewind)
  return i3140
}

Deserializers["GameController"] = function (request, data, root) {
  var i3142 = root || request.c( 'GameController' )
  var i3143 = data
  i3142.OnSpawn = request.d('System.Action', i3143[0], i3142.OnSpawn)
  i3142.OnNotClear = request.d('System.Action', i3143[1], i3142.OnNotClear)
  i3142.OnClear = request.d('System.Action', i3143[2], i3142.OnClear)
  request.r(i3143[3], i3143[4], 0, i3142, 'area')
  request.r(i3143[5], i3143[6], 0, i3142, 'areaTut')
  request.r(i3143[7], i3143[8], 0, i3142, 'startTut')
  request.r(i3143[9], i3143[10], 0, i3142, 'optionTut')
  i3142.numMonster = i3143[11]
  var i3145 = i3143[12]
  var i3144 = new (System.Collections.Generic.List$1(Bridge.ns('Spawn')))
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.add(request.d('Spawn', i3145[i + 0]));
  }
  i3142.spawns = i3144
  i3142.currentSpawn = request.d('Spawn', i3143[13], i3142.currentSpawn)
  request.r(i3143[14], i3143[15], 0, i3142, 'world')
  request.r(i3143[16], i3143[17], 0, i3142, 'clickSound')
  request.r(i3143[18], i3143[19], 0, i3142, 'dropSound')
  return i3142
}

Deserializers["Spawn"] = function (request, data, root) {
  var i3148 = root || request.c( 'Spawn' )
  var i3149 = data
  request.r(i3149[0], i3149[1], 0, i3148, 'Button')
  request.r(i3149[2], i3149[3], 0, i3148, 'Selected')
  request.r(i3149[4], i3149[5], 0, i3148, 'Prefab')
  return i3148
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i3150 = root || request.c( 'LayoutController' )
  var i3151 = data
  request.r(i3151[0], i3151[1], 0, i3150, 'main')
  request.r(i3151[2], i3151[3], 0, i3150, 'button')
  request.r(i3151[4], i3151[5], 0, i3150, 'buttonz')
  return i3150
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3152 = root || request.c( 'LunaController' )
  var i3153 = data
  request.r(i3153[0], i3153[1], 0, i3152, 'BGTexture')
  i3152.LimitTimePlay = !!i3153[2]
  i3152.TimePlay = i3153[3]
  i3152.LimitCountPlay = !!i3153[4]
  i3152.MaxCountPlay = i3153[5]
  i3152.NamePlantColor = new pc.Color(i3153[6], i3153[7], i3153[8], i3153[9])
  i3152.NameZombieColor = new pc.Color(i3153[10], i3153[11], i3153[12], i3153[13])
  request.r(i3153[14], i3153[15], 0, i3152, 'BGImage')
  var i3155 = i3153[16]
  var i3154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3155.length; i += 2) {
  request.r(i3155[i + 0], i3155[i + 1], 1, i3154, '')
  }
  i3152.CTA = i3154
  i3152.count = i3153[17]
  request.r(i3153[18], i3153[19], 0, i3152, 'plant1Name')
  request.r(i3153[20], i3153[21], 0, i3152, 'plant2Name')
  request.r(i3153[22], i3153[23], 0, i3152, 'zombie1Name')
  request.r(i3153[24], i3153[25], 0, i3152, 'zombie2Name')
  return i3152
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3158 = root || request.c( 'AudioController' )
  var i3159 = data
  request.r(i3159[0], i3159[1], 0, i3158, 'BGM')
  request.r(i3159[2], i3159[3], 0, i3158, 'musicSource')
  request.r(i3159[4], i3159[5], 0, i3158, 'pool')
  return i3158
}

Deserializers["PoolController"] = function (request, data, root) {
  var i3160 = root || request.c( 'PoolController' )
  var i3161 = data
  request.r(i3161[0], i3161[1], 0, i3160, 'world')
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3163 = data
  i3162.ambientIntensity = i3163[0]
  i3162.reflectionIntensity = i3163[1]
  i3162.ambientMode = i3163[2]
  i3162.ambientLight = new pc.Color(i3163[3], i3163[4], i3163[5], i3163[6])
  i3162.ambientSkyColor = new pc.Color(i3163[7], i3163[8], i3163[9], i3163[10])
  i3162.ambientGroundColor = new pc.Color(i3163[11], i3163[12], i3163[13], i3163[14])
  i3162.ambientEquatorColor = new pc.Color(i3163[15], i3163[16], i3163[17], i3163[18])
  i3162.fogColor = new pc.Color(i3163[19], i3163[20], i3163[21], i3163[22])
  i3162.fogEndDistance = i3163[23]
  i3162.fogStartDistance = i3163[24]
  i3162.fogDensity = i3163[25]
  i3162.fog = !!i3163[26]
  request.r(i3163[27], i3163[28], 0, i3162, 'skybox')
  i3162.fogMode = i3163[29]
  var i3165 = i3163[30]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3165[i + 0]) );
  }
  i3162.lightmaps = i3164
  i3162.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3163[31], i3162.lightProbes)
  i3162.lightmapsMode = i3163[32]
  i3162.mixedBakeMode = i3163[33]
  i3162.environmentLightingMode = i3163[34]
  i3162.ambientProbe = new pc.SphericalHarmonicsL2(i3163[35])
  request.r(i3163[36], i3163[37], 0, i3162, 'customReflection')
  request.r(i3163[38], i3163[39], 0, i3162, 'defaultReflection')
  i3162.defaultReflectionMode = i3163[40]
  i3162.defaultReflectionResolution = i3163[41]
  i3162.sunLightObjectId = i3163[42]
  i3162.pixelLightCount = i3163[43]
  i3162.defaultReflectionHDR = !!i3163[44]
  i3162.hasLightDataAsset = !!i3163[45]
  i3162.hasManualGenerate = !!i3163[46]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3169 = data
  request.r(i3169[0], i3169[1], 0, i3168, 'lightmapColor')
  request.r(i3169[2], i3169[3], 0, i3168, 'lightmapDirection')
  request.r(i3169[4], i3169[5], 0, i3168, 'shadowMask')
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3170 = root || new UnityEngine.LightProbes()
  var i3171 = data
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3177 = data
  var i3179 = i3177[0]
  var i3178 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3179.length; i += 1) {
    i3178.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3179[i + 0]));
  }
  i3176.ShaderCompilationErrors = i3178
  i3176.name = i3177[1]
  i3176.guid = i3177[2]
  var i3181 = i3177[3]
  var i3180 = []
  for(var i = 0; i < i3181.length; i += 1) {
    i3180.push( i3181[i + 0] );
  }
  i3176.shaderDefinedKeywords = i3180
  var i3183 = i3177[4]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3183[i + 0]) );
  }
  i3176.passes = i3182
  var i3185 = i3177[5]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3185[i + 0]) );
  }
  i3176.usePasses = i3184
  var i3187 = i3177[6]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3187[i + 0]) );
  }
  i3176.defaultParameterValues = i3186
  request.r(i3177[7], i3177[8], 0, i3176, 'unityFallbackShader')
  i3176.readDepth = !!i3177[9]
  i3176.hasDepthOnlyPass = !!i3177[10]
  i3176.isCreatedByShaderGraph = !!i3177[11]
  i3176.disableBatching = !!i3177[12]
  i3176.compiled = !!i3177[13]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3191 = data
  i3190.shaderName = i3191[0]
  i3190.errorMessage = i3191[1]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3196 = root || new pc.UnityShaderPass()
  var i3197 = data
  i3196.id = i3197[0]
  i3196.subShaderIndex = i3197[1]
  i3196.name = i3197[2]
  i3196.passType = i3197[3]
  i3196.grabPassTextureName = i3197[4]
  i3196.usePass = !!i3197[5]
  i3196.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[6], i3196.zTest)
  i3196.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[7], i3196.zWrite)
  i3196.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[8], i3196.culling)
  i3196.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3197[9], i3196.blending)
  i3196.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3197[10], i3196.alphaBlending)
  i3196.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[11], i3196.colorWriteMask)
  i3196.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[12], i3196.offsetUnits)
  i3196.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[13], i3196.offsetFactor)
  i3196.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[14], i3196.stencilRef)
  i3196.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[15], i3196.stencilReadMask)
  i3196.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3197[16], i3196.stencilWriteMask)
  i3196.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[17], i3196.stencilOp)
  i3196.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[18], i3196.stencilOpFront)
  i3196.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3197[19], i3196.stencilOpBack)
  var i3199 = i3197[20]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3199[i + 0]) );
  }
  i3196.tags = i3198
  var i3201 = i3197[21]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( i3201[i + 0] );
  }
  i3196.passDefinedKeywords = i3200
  var i3203 = i3197[22]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3203[i + 0]) );
  }
  i3196.passDefinedKeywordGroups = i3202
  var i3205 = i3197[23]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 1) {
    i3204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3205[i + 0]) );
  }
  i3196.variants = i3204
  var i3207 = i3197[24]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3207[i + 0]) );
  }
  i3196.excludedVariants = i3206
  i3196.hasDepthReader = !!i3197[25]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3209 = data
  i3208.val = i3209[0]
  i3208.name = i3209[1]
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3211 = data
  i3210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[0], i3210.src)
  i3210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[1], i3210.dst)
  i3210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3211[2], i3210.op)
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3213 = data
  i3212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[0], i3212.pass)
  i3212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[1], i3212.fail)
  i3212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[2], i3212.zFail)
  i3212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3213[3], i3212.comp)
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3217 = data
  i3216.name = i3217[0]
  i3216.value = i3217[1]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3221 = data
  var i3223 = i3221[0]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( i3223[i + 0] );
  }
  i3220.keywords = i3222
  i3220.hasDiscard = !!i3221[1]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3227 = data
  i3226.passId = i3227[0]
  i3226.subShaderIndex = i3227[1]
  var i3229 = i3227[2]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( i3229[i + 0] );
  }
  i3226.keywords = i3228
  i3226.vertexProgram = i3227[3]
  i3226.fragmentProgram = i3227[4]
  i3226.exportedForWebGl2 = !!i3227[5]
  i3226.readDepth = !!i3227[6]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3233 = data
  request.r(i3233[0], i3233[1], 0, i3232, 'shader')
  i3232.pass = i3233[2]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3237 = data
  i3236.name = i3237[0]
  i3236.type = i3237[1]
  i3236.value = new pc.Vec4( i3237[2], i3237[3], i3237[4], i3237[5] )
  i3236.textureValue = i3237[6]
  i3236.shaderPropertyFlag = i3237[7]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3239 = data
  i3238.name = i3239[0]
  request.r(i3239[1], i3239[2], 0, i3238, 'texture')
  i3238.aabb = i3239[3]
  i3238.vertices = i3239[4]
  i3238.triangles = i3239[5]
  i3238.textureRect = UnityEngine.Rect.MinMaxRect(i3239[6], i3239[7], i3239[8], i3239[9])
  i3238.packedRect = UnityEngine.Rect.MinMaxRect(i3239[10], i3239[11], i3239[12], i3239[13])
  i3238.border = new pc.Vec4( i3239[14], i3239[15], i3239[16], i3239[17] )
  i3238.transparency = i3239[18]
  i3238.bounds = i3239[19]
  i3238.pixelsPerUnit = i3239[20]
  i3238.textureWidth = i3239[21]
  i3238.textureHeight = i3239[22]
  i3238.nativeSize = new pc.Vec2( i3239[23], i3239[24] )
  i3238.pivot = new pc.Vec2( i3239[25], i3239[26] )
  i3238.textureRectOffset = new pc.Vec2( i3239[27], i3239[28] )
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3241 = data
  i3240.name = i3241[0]
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3243 = data
  i3242.name = i3243[0]
  i3242.ascent = i3243[1]
  i3242.originalLineHeight = i3243[2]
  i3242.fontSize = i3243[3]
  var i3245 = i3243[4]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3245[i + 0]) );
  }
  i3242.characterInfo = i3244
  request.r(i3243[5], i3243[6], 0, i3242, 'texture')
  i3242.originalFontSize = i3243[7]
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3249 = data
  i3248.index = i3249[0]
  i3248.advance = i3249[1]
  i3248.bearing = i3249[2]
  i3248.glyphWidth = i3249[3]
  i3248.glyphHeight = i3249[4]
  i3248.minX = i3249[5]
  i3248.maxX = i3249[6]
  i3248.minY = i3249[7]
  i3248.maxY = i3249[8]
  i3248.uvBottomLeftX = i3249[9]
  i3248.uvBottomLeftY = i3249[10]
  i3248.uvBottomRightX = i3249[11]
  i3248.uvBottomRightY = i3249[12]
  i3248.uvTopLeftX = i3249[13]
  i3248.uvTopLeftY = i3249[14]
  i3248.uvTopRightX = i3249[15]
  i3248.uvTopRightY = i3249[16]
  return i3248
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3251 = data
  i3250.useSafeMode = !!i3251[0]
  i3250.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3251[1], i3250.safeModeOptions)
  i3250.timeScale = i3251[2]
  i3250.unscaledTimeScale = i3251[3]
  i3250.useSmoothDeltaTime = !!i3251[4]
  i3250.maxSmoothUnscaledTime = i3251[5]
  i3250.rewindCallbackMode = i3251[6]
  i3250.showUnityEditorReport = !!i3251[7]
  i3250.logBehaviour = i3251[8]
  i3250.drawGizmos = !!i3251[9]
  i3250.defaultRecyclable = !!i3251[10]
  i3250.defaultAutoPlay = i3251[11]
  i3250.defaultUpdateType = i3251[12]
  i3250.defaultTimeScaleIndependent = !!i3251[13]
  i3250.defaultEaseType = i3251[14]
  i3250.defaultEaseOvershootOrAmplitude = i3251[15]
  i3250.defaultEasePeriod = i3251[16]
  i3250.defaultAutoKill = !!i3251[17]
  i3250.defaultLoopType = i3251[18]
  i3250.debugMode = !!i3251[19]
  i3250.debugStoreTargetId = !!i3251[20]
  i3250.showPreviewPanel = !!i3251[21]
  i3250.storeSettingsLocation = i3251[22]
  i3250.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3251[23], i3250.modules)
  i3250.createASMDEF = !!i3251[24]
  i3250.showPlayingTweens = !!i3251[25]
  i3250.showPausedTweens = !!i3251[26]
  return i3250
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3253 = data
  i3252.logBehaviour = i3253[0]
  i3252.nestedTweenFailureBehaviour = i3253[1]
  return i3252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3255 = data
  i3254.showPanel = !!i3255[0]
  i3254.audioEnabled = !!i3255[1]
  i3254.physicsEnabled = !!i3255[2]
  i3254.physics2DEnabled = !!i3255[3]
  i3254.spriteEnabled = !!i3255[4]
  i3254.uiEnabled = !!i3255[5]
  i3254.textMeshProEnabled = !!i3255[6]
  i3254.tk2DEnabled = !!i3255[7]
  i3254.deAudioEnabled = !!i3255[8]
  i3254.deUnityExtendedEnabled = !!i3255[9]
  i3254.epoOutlineEnabled = !!i3255[10]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3257 = data
  var i3259 = i3257[0]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3259[i + 0]) );
  }
  i3256.files = i3258
  i3256.componentToPrefabIds = i3257[1]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3263 = data
  i3262.path = i3263[0]
  request.r(i3263[1], i3263[2], 0, i3262, 'unityObject')
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3265 = data
  var i3267 = i3265[0]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3267[i + 0]) );
  }
  i3264.scriptsExecutionOrder = i3266
  var i3269 = i3265[1]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3269[i + 0]) );
  }
  i3264.sortingLayers = i3268
  var i3271 = i3265[2]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3271[i + 0]) );
  }
  i3264.cullingLayers = i3270
  i3264.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3265[3], i3264.timeSettings)
  i3264.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3265[4], i3264.physicsSettings)
  i3264.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3265[5], i3264.physics2DSettings)
  i3264.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3265[6], i3264.qualitySettings)
  i3264.enableRealtimeShadows = !!i3265[7]
  i3264.enableAutoInstancing = !!i3265[8]
  i3264.enableStaticBatching = !!i3265[9]
  i3264.enableDynamicBatching = !!i3265[10]
  i3264.usePreservativeDynamicBatching = !!i3265[11]
  i3264.lightmapEncodingQuality = i3265[12]
  i3264.desiredColorSpace = i3265[13]
  var i3273 = i3265[14]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( i3273[i + 0] );
  }
  i3264.allTags = i3272
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.value = i3277[1]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3281 = data
  i3280.id = i3281[0]
  i3280.name = i3281[1]
  i3280.value = i3281[2]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3285 = data
  i3284.id = i3285[0]
  i3284.name = i3285[1]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3287 = data
  i3286.fixedDeltaTime = i3287[0]
  i3286.maximumDeltaTime = i3287[1]
  i3286.timeScale = i3287[2]
  i3286.maximumParticleTimestep = i3287[3]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3289 = data
  i3288.gravity = new pc.Vec3( i3289[0], i3289[1], i3289[2] )
  i3288.defaultSolverIterations = i3289[3]
  i3288.bounceThreshold = i3289[4]
  i3288.autoSyncTransforms = !!i3289[5]
  i3288.autoSimulation = !!i3289[6]
  var i3291 = i3289[7]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3291[i + 0]) );
  }
  i3288.collisionMatrix = i3290
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3295 = data
  i3294.enabled = !!i3295[0]
  i3294.layerId = i3295[1]
  i3294.otherLayerId = i3295[2]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3297 = data
  request.r(i3297[0], i3297[1], 0, i3296, 'material')
  i3296.gravity = new pc.Vec2( i3297[2], i3297[3] )
  i3296.positionIterations = i3297[4]
  i3296.velocityIterations = i3297[5]
  i3296.velocityThreshold = i3297[6]
  i3296.maxLinearCorrection = i3297[7]
  i3296.maxAngularCorrection = i3297[8]
  i3296.maxTranslationSpeed = i3297[9]
  i3296.maxRotationSpeed = i3297[10]
  i3296.baumgarteScale = i3297[11]
  i3296.baumgarteTOIScale = i3297[12]
  i3296.timeToSleep = i3297[13]
  i3296.linearSleepTolerance = i3297[14]
  i3296.angularSleepTolerance = i3297[15]
  i3296.defaultContactOffset = i3297[16]
  i3296.autoSimulation = !!i3297[17]
  i3296.queriesHitTriggers = !!i3297[18]
  i3296.queriesStartInColliders = !!i3297[19]
  i3296.callbacksOnDisable = !!i3297[20]
  i3296.reuseCollisionCallbacks = !!i3297[21]
  i3296.autoSyncTransforms = !!i3297[22]
  var i3299 = i3297[23]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3299[i + 0]) );
  }
  i3296.collisionMatrix = i3298
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.layerId = i3303[1]
  i3302.otherLayerId = i3303[2]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3305 = data
  var i3307 = i3305[0]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 1) {
    i3306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3307[i + 0]) );
  }
  i3304.qualityLevels = i3306
  var i3309 = i3305[1]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( i3309[i + 0] );
  }
  i3304.names = i3308
  i3304.shadows = i3305[2]
  i3304.anisotropicFiltering = i3305[3]
  i3304.antiAliasing = i3305[4]
  i3304.lodBias = i3305[5]
  i3304.shadowCascades = i3305[6]
  i3304.shadowDistance = i3305[7]
  i3304.shadowmaskMode = i3305[8]
  i3304.shadowProjection = i3305[9]
  i3304.shadowResolution = i3305[10]
  i3304.softParticles = !!i3305[11]
  i3304.softVegetation = !!i3305[12]
  i3304.activeColorSpace = i3305[13]
  i3304.desiredColorSpace = i3305[14]
  i3304.masterTextureLimit = i3305[15]
  i3304.maxQueuedFrames = i3305[16]
  i3304.particleRaycastBudget = i3305[17]
  i3304.pixelLightCount = i3305[18]
  i3304.realtimeReflectionProbes = !!i3305[19]
  i3304.shadowCascade2Split = i3305[20]
  i3304.shadowCascade4Split = new pc.Vec3( i3305[21], i3305[22], i3305[23] )
  i3304.streamingMipmapsActive = !!i3305[24]
  i3304.vSyncCount = i3305[25]
  i3304.asyncUploadBufferSize = i3305[26]
  i3304.asyncUploadTimeSlice = i3305[27]
  i3304.billboardsFaceCameraPosition = !!i3305[28]
  i3304.shadowNearPlaneOffset = i3305[29]
  i3304.streamingMipmapsMemoryBudget = i3305[30]
  i3304.maximumLODLevel = i3305[31]
  i3304.streamingMipmapsAddAllCameras = !!i3305[32]
  i3304.streamingMipmapsMaxLevelReduction = i3305[33]
  i3304.streamingMipmapsRenderersPerFrame = i3305[34]
  i3304.resolutionScalingFixedDPIFactor = i3305[35]
  i3304.streamingMipmapsMaxFileIORequests = i3305[36]
  i3304.currentQualityLevel = i3305[37]
  return i3304
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[29],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[15],"70":[15],"71":[15],"72":[15],"73":[15],"74":[15],"14":[15],"75":[15],"76":[15],"77":[15],"78":[15],"79":[15],"80":[15],"81":[29],"82":[83],"84":[85],"86":[85],"35":[34],"87":[6],"88":[29],"89":[90],"91":[34],"92":[38,34],"93":[83],"94":[38,34],"95":[34],"96":[34],"97":[83,34],"98":[34,38],"99":[100],"101":[100],"102":[100],"103":[34],"104":[34],"37":[35],"42":[38,34],"40":[34],"36":[35],"105":[34],"106":[34],"107":[34],"108":[34],"109":[34],"110":[34],"111":[34],"112":[34],"113":[34],"39":[38,34],"114":[34],"115":[34],"116":[34],"117":[34],"43":[38,34],"118":[34],"119":[32],"120":[32],"33":[32],"121":[32],"122":[29],"123":[29]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.TrailRenderer","TraiController","UnityEngine.Texture2D","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","PlayerTrigger","ShootAnimation","ActionPerTime","GunController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.ParticleSystemRenderer","BalanceController","MonsterController","BodyPart","CheckGround","JumpController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","GameController","LayoutController","LunaController","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "10/08/2026 08:27:10";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_PMP_V06_TrangHTT";

Deserializers.lunaAppID = "42757";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1781";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4333";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "277dd162-f538-4550-95cb-f1a3e8030912";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

