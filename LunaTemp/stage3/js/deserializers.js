var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.JointSpring' )
  var i961 = data
  i960.spring = i961[0]
  i960.damper = i961[1]
  i960.targetPosition = i961[2]
  return i960
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.JointMotor' )
  var i963 = data
  i962.m_TargetVelocity = i963[0]
  i962.m_Force = i963[1]
  i962.m_FreeSpin = i963[2]
  return i962
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.JointLimits' )
  var i965 = data
  i964.m_Min = i965[0]
  i964.m_Max = i965[1]
  i964.m_Bounciness = i965[2]
  i964.m_BounceMinVelocity = i965[3]
  i964.m_ContactDistance = i965[4]
  i964.minBounce = i965[5]
  i964.maxBounce = i965[6]
  return i964
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.JointDrive' )
  var i967 = data
  i966.m_PositionSpring = i967[0]
  i966.m_PositionDamper = i967[1]
  i966.m_MaximumForce = i967[2]
  i966.m_UseAcceleration = i967[3]
  return i966
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i969 = data
  i968.m_Spring = i969[0]
  i968.m_Damper = i969[1]
  return i968
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i971 = data
  i970.m_Limit = i971[0]
  i970.m_Bounciness = i971[1]
  i970.m_ContactDistance = i971[2]
  return i970
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i973 = data
  i972.m_ExtremumSlip = i973[0]
  i972.m_ExtremumValue = i973[1]
  i972.m_AsymptoteSlip = i973[2]
  i972.m_AsymptoteValue = i973[3]
  i972.m_Stiffness = i973[4]
  return i972
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i975 = data
  i974.m_LowerAngle = i975[0]
  i974.m_UpperAngle = i975[1]
  return i974
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i977 = data
  i976.m_MotorSpeed = i977[0]
  i976.m_MaximumMotorTorque = i977[1]
  return i976
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i979 = data
  i978.m_DampingRatio = i979[0]
  i978.m_Frequency = i979[1]
  i978.m_Angle = i979[2]
  return i978
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i981 = data
  i980.m_LowerTranslation = i981[0]
  i980.m_UpperTranslation = i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i982 = root || new pc.UnityMaterial()
  var i983 = data
  i982.name = i983[0]
  request.r(i983[1], i983[2], 0, i982, 'shader')
  i982.renderQueue = i983[3]
  i982.enableInstancing = !!i983[4]
  var i985 = i983[5]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i985[i + 0]) );
  }
  i982.floatParameters = i984
  var i987 = i983[6]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i987[i + 0]) );
  }
  i982.colorParameters = i986
  var i989 = i983[7]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i989[i + 0]) );
  }
  i982.vectorParameters = i988
  var i991 = i983[8]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i991[i + 0]) );
  }
  i982.textureParameters = i990
  var i993 = i983[9]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i993[i + 0]) );
  }
  i982.materialFlags = i992
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i997 = data
  i996.name = i997[0]
  i996.value = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.value = new pc.Color(i1001[1], i1001[2], i1001[3], i1001[4])
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.value = new pc.Vec4( i1005[1], i1005[2], i1005[3], i1005[4] )
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1009 = data
  i1008.name = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'value')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.enabled = !!i1013[1]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.width = i1015[1]
  i1014.height = i1015[2]
  i1014.mipmapCount = i1015[3]
  i1014.anisoLevel = i1015[4]
  i1014.filterMode = i1015[5]
  i1014.hdr = !!i1015[6]
  i1014.format = i1015[7]
  i1014.wrapMode = i1015[8]
  i1014.alphaIsTransparency = !!i1015[9]
  i1014.alphaSource = i1015[10]
  i1014.graphicsFormat = i1015[11]
  i1014.sRGBTexture = !!i1015[12]
  i1014.desiredColorSpace = i1015[13]
  i1014.wrapU = i1015[14]
  i1014.wrapV = i1015[15]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1017 = data
  i1016.position = new pc.Vec3( i1017[0], i1017[1], i1017[2] )
  i1016.scale = new pc.Vec3( i1017[3], i1017[4], i1017[5] )
  i1016.rotation = new pc.Quat(i1017[6], i1017[7], i1017[8], i1017[9])
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1019 = data
  i1018.color = new pc.Color(i1019[0], i1019[1], i1019[2], i1019[3])
  request.r(i1019[4], i1019[5], 0, i1018, 'sprite')
  i1018.flipX = !!i1019[6]
  i1018.flipY = !!i1019[7]
  i1018.drawMode = i1019[8]
  i1018.size = new pc.Vec2( i1019[9], i1019[10] )
  i1018.tileMode = i1019[11]
  i1018.adaptiveModeThreshold = i1019[12]
  i1018.maskInteraction = i1019[13]
  i1018.spriteSortPoint = i1019[14]
  i1018.enabled = !!i1019[15]
  request.r(i1019[16], i1019[17], 0, i1018, 'sharedMaterial')
  var i1021 = i1019[18]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.sharedMaterials = i1020
  i1018.receiveShadows = !!i1019[19]
  i1018.shadowCastingMode = i1019[20]
  i1018.sortingLayerID = i1019[21]
  i1018.sortingOrder = i1019[22]
  i1018.lightmapIndex = i1019[23]
  i1018.lightmapSceneIndex = i1019[24]
  i1018.lightmapScaleOffset = new pc.Vec4( i1019[25], i1019[26], i1019[27], i1019[28] )
  i1018.lightProbeUsage = i1019[29]
  i1018.reflectionProbeUsage = i1019[30]
  return i1018
}

Deserializers["AcidGhost"] = function (request, data, root) {
  var i1024 = root || request.c( 'AcidGhost' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sr')
  i1024.life = i1025[2]
  i1024.maxAlpha = i1025[3]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.tagId = i1027[1]
  i1026.enabled = !!i1027[2]
  i1026.isStatic = !!i1027[3]
  i1026.layer = i1027[4]
  return i1026
}

Deserializers["AcidHit"] = function (request, data, root) {
  var i1028 = root || request.c( 'AcidHit' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'dark')
  request.r(i1029[2], i1029[3], 0, i1028, 'glow')
  i1028.life = i1029[4]
  return i1028
}

Deserializers["AcidMan"] = function (request, data, root) {
  var i1030 = root || request.c( 'AcidMan' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('AcidMan+Part', i1033[i + 0]) );
  }
  i1030.parts = i1032
  request.r(i1031[1], i1031[2], 0, i1030, 'ghostSprite')
  i1030.standForce = i1031[3]
  i1030.fallAfterTiles = i1031[4]
  return i1030
}

Deserializers["AcidMan+Part"] = function (request, data, root) {
  var i1036 = root || request.c( 'AcidMan+Part' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'body')
  request.r(i1037[2], i1037[3], 0, i1036, 'joint')
  request.r(i1037[4], i1037[5], 0, i1036, 'col')
  var i1039 = i1037[6]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.tiles = i1038
  i1036.forcePoint = new pc.Vec2( i1037[7], i1037[8] )
  i1036.sortOffset = i1037[9]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1043 = data
  i1042.bodyType = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'material')
  i1042.simulated = !!i1043[3]
  i1042.useAutoMass = !!i1043[4]
  i1042.mass = i1043[5]
  i1042.drag = i1043[6]
  i1042.angularDrag = i1043[7]
  i1042.gravityScale = i1043[8]
  i1042.collisionDetectionMode = i1043[9]
  i1042.sleepMode = i1043[10]
  i1042.constraints = i1043[11]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1045 = data
  i1044.usedByComposite = !!i1045[0]
  i1044.autoTiling = !!i1045[1]
  i1044.size = new pc.Vec2( i1045[2], i1045[3] )
  i1044.edgeRadius = i1045[4]
  i1044.enabled = !!i1045[5]
  i1044.isTrigger = !!i1045[6]
  i1044.usedByEffector = !!i1045[7]
  i1044.density = i1045[8]
  i1044.offset = new pc.Vec2( i1045[9], i1045[10] )
  request.r(i1045[11], i1045[12], 0, i1044, 'material')
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1047 = data
  i1046.useLimits = !!i1047[0]
  i1046.limits = request.d('UnityEngine.JointAngleLimits2D', i1047[1], i1046.limits)
  i1046.useMotor = !!i1047[2]
  i1046.motor = request.d('UnityEngine.JointMotor2D', i1047[3], i1046.motor)
  i1046.anchor = new pc.Vec2( i1047[4], i1047[5] )
  i1046.connectedAnchor = new pc.Vec2( i1047[6], i1047[7] )
  i1046.autoConfigureConnectedAnchor = !!i1047[8]
  request.r(i1047[9], i1047[10], 0, i1046, 'connectedBody')
  i1046.breakForce = i1047[11]
  i1046.breakTorque = i1047[12]
  i1046.enableCollision = !!i1047[13]
  i1046.enabled = !!i1047[14]
  return i1046
}

Deserializers["AcidTank"] = function (request, data, root) {
  var i1048 = root || request.c( 'AcidTank' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'body')
  var i1051 = i1049[2]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048.rust = i1050
  i1048.spriteBottom = i1049[3]
  i1048.rustScale = i1049[4]
  i1048.rustGrow = i1049[5]
  i1048.rustFall = i1049[6]
  i1048.rustFallSpeed = i1049[7]
  i1048.rustPerSecond = i1049[8]
  i1048.rustMaxVisible = i1049[9]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.index = i1053[1]
  i1052.startup = !!i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1055 = data
  i1054.pivot = new pc.Vec2( i1055[0], i1055[1] )
  i1054.anchorMin = new pc.Vec2( i1055[2], i1055[3] )
  i1054.anchorMax = new pc.Vec2( i1055[4], i1055[5] )
  i1054.sizeDelta = new pc.Vec2( i1055[6], i1055[7] )
  i1054.anchoredPosition3D = new pc.Vec3( i1055[8], i1055[9], i1055[10] )
  i1054.rotation = new pc.Quat(i1055[11], i1055[12], i1055[13], i1055[14])
  i1054.scale = new pc.Vec3( i1055[15], i1055[16], i1055[17] )
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1057 = data
  i1056.planeDistance = i1057[0]
  i1056.referencePixelsPerUnit = i1057[1]
  i1056.isFallbackOverlay = !!i1057[2]
  i1056.renderMode = i1057[3]
  i1056.renderOrder = i1057[4]
  i1056.sortingLayerName = i1057[5]
  i1056.sortingOrder = i1057[6]
  i1056.scaleFactor = i1057[7]
  request.r(i1057[8], i1057[9], 0, i1056, 'worldCamera')
  i1056.overrideSorting = !!i1057[10]
  i1056.pixelPerfect = !!i1057[11]
  i1056.targetDisplay = i1057[12]
  i1056.overridePixelPerfect = !!i1057[13]
  i1056.enabled = !!i1057[14]
  return i1056
}

Deserializers["AcidCustomBG"] = function (request, data, root) {
  var i1058 = root || request.c( 'AcidCustomBG' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'cam')
  request.r(i1059[2], i1059[3], 0, i1058, 'image')
  request.r(i1059[4], i1059[5], 0, i1058, 'rect')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1061 = data
  i1060.cullTransparentMesh = !!i1061[0]
  return i1060
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_Texture')
  i1062.m_UVRect = UnityEngine.Rect.MinMaxRect(i1063[2], i1063[3], i1063[4], i1063[5])
  request.r(i1063[6], i1063[7], 0, i1062, 'm_Material')
  i1062.m_Maskable = !!i1063[8]
  i1062.m_Color = new pc.Color(i1063[9], i1063[10], i1063[11], i1063[12])
  i1062.m_RaycastTarget = !!i1063[13]
  i1062.m_RaycastPadding = new pc.Vec4( i1063[14], i1063[15], i1063[16], i1063[17] )
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1065 = data
  i1064.aspect = i1065[0]
  i1064.orthographic = !!i1065[1]
  i1064.orthographicSize = i1065[2]
  i1064.backgroundColor = new pc.Color(i1065[3], i1065[4], i1065[5], i1065[6])
  i1064.nearClipPlane = i1065[7]
  i1064.farClipPlane = i1065[8]
  i1064.fieldOfView = i1065[9]
  i1064.depth = i1065[10]
  i1064.clearFlags = i1065[11]
  i1064.cullingMask = i1065[12]
  i1064.rect = i1065[13]
  request.r(i1065[14], i1065[15], 0, i1064, 'targetTexture')
  i1064.usePhysicalProperties = !!i1065[16]
  i1064.focalLength = i1065[17]
  i1064.sensorSize = new pc.Vec2( i1065[18], i1065[19] )
  i1064.lensShift = new pc.Vec2( i1065[20], i1065[21] )
  i1064.gateFit = i1065[22]
  i1064.commandBufferCount = i1065[23]
  i1064.cameraType = i1065[24]
  i1064.enabled = !!i1065[25]
  return i1064
}

Deserializers["AcidWave"] = function (request, data, root) {
  var i1066 = root || request.c( 'AcidWave' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'rend')
  return i1066
}

Deserializers["AcidStick"] = function (request, data, root) {
  var i1068 = root || request.c( 'AcidStick' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'body')
  request.r(i1069[2], i1069[3], 0, i1068, 'cam')
  i1068.keepOut = i1069[4]
  i1068.fingerOffset = new pc.Vec2( i1069[5], i1069[6] )
  i1068.follow = !!i1069[7]
  i1068.followMaxSpeed = i1069[8]
  i1068.followSpinKeep = i1069[9]
  i1068.frequency = i1069[10]
  i1068.dampingRatio = i1069[11]
  i1068.maxAccel = i1069[12]
  i1068.startSpin = i1069[13]
  request.r(i1069[14], i1069[15], 0, i1068, 'col')
  return i1068
}

Deserializers["AcidFx"] = function (request, data, root) {
  var i1070 = root || request.c( 'AcidFx' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'ghostPrefab')
  request.r(i1071[2], i1071[3], 0, i1070, 'hitPrefab')
  request.r(i1071[4], i1071[5], 0, i1070, 'root')
  i1070.flingTime = i1071[6]
  request.r(i1071[7], i1071[8], 0, i1070, 'bloodPrefab')
  i1070.bloodCount = i1071[9]
  i1070.bloodTime = i1071[10]
  i1070.bloodSize = new pc.Vec2( i1071[11], i1071[12] )
  i1070.bloodSpeed = new pc.Vec2( i1071[13], i1071[14] )
  i1070.bloodInherit = i1071[15]
  i1070.bloodDark = new pc.Color(i1071[16], i1071[17], i1071[18], i1071[19])
  i1070.bloodLight = new pc.Color(i1071[20], i1071[21], i1071[22], i1071[23])
  i1070.bloodOrder = i1071[24]
  request.r(i1071[25], i1071[26], 0, i1070, 'plusOnePrefab')
  i1070.plusOneTime = i1071[27]
  i1070.plusOneRise = i1071[28]
  request.r(i1071[29], i1071[30], 0, i1070, 'game')
  return i1070
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1073 = data
  i1072.m_UiScaleMode = i1073[0]
  i1072.m_ReferencePixelsPerUnit = i1073[1]
  i1072.m_ScaleFactor = i1073[2]
  i1072.m_ReferenceResolution = new pc.Vec2( i1073[3], i1073[4] )
  i1072.m_ScreenMatchMode = i1073[5]
  i1072.m_MatchWidthOrHeight = i1073[6]
  i1072.m_PhysicalUnit = i1073[7]
  i1072.m_FallbackScreenDPI = i1073[8]
  i1072.m_DefaultSpriteDPI = i1073[9]
  i1072.m_DynamicPixelsPerUnit = i1073[10]
  i1072.m_PresetInfoIsWorld = !!i1073[11]
  return i1072
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1075 = data
  i1074.m_IgnoreReversedGraphics = !!i1075[0]
  i1074.m_BlockingObjects = i1075[1]
  i1074.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1075[2] )
  return i1074
}

Deserializers["AcidKillCounter"] = function (request, data, root) {
  var i1076 = root || request.c( 'AcidKillCounter' )
  var i1077 = data
  i1076.labelGap = i1077[0]
  i1076.digitSpacing = i1077[1]
  i1076.punchScale = i1077[2]
  i1076.punchTime = i1077[3]
  request.r(i1077[4], i1077[5], 0, i1076, 'root')
  request.r(i1077[6], i1077[7], 0, i1076, 'label')
  var i1079 = i1077[8]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.digits = i1078
  var i1081 = i1077[9]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1076.digitSprites = i1080
  return i1076
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.Image' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'm_Sprite')
  i1086.m_Type = i1087[2]
  i1086.m_PreserveAspect = !!i1087[3]
  i1086.m_FillCenter = !!i1087[4]
  i1086.m_FillMethod = i1087[5]
  i1086.m_FillAmount = i1087[6]
  i1086.m_FillClockwise = !!i1087[7]
  i1086.m_FillOrigin = i1087[8]
  i1086.m_UseSpriteMesh = !!i1087[9]
  i1086.m_PixelsPerUnitMultiplier = i1087[10]
  request.r(i1087[11], i1087[12], 0, i1086, 'm_Material')
  i1086.m_Maskable = !!i1087[13]
  i1086.m_Color = new pc.Color(i1087[14], i1087[15], i1087[16], i1087[17])
  i1086.m_RaycastTarget = !!i1087[18]
  i1086.m_RaycastPadding = new pc.Vec4( i1087[19], i1087[20], i1087[21], i1087[22] )
  return i1086
}

Deserializers["AcidIntro"] = function (request, data, root) {
  var i1088 = root || request.c( 'AcidIntro' )
  var i1089 = data
  i1088.shakeX = i1089[0]
  i1088.shakeY = i1089[1]
  i1088.shakeAngle = i1089[2]
  i1088.shakeRate = i1089[3]
  i1088.pulseScale = i1089[4]
  i1088.pulsePeriod = i1089[5]
  request.r(i1089[6], i1089[7], 0, i1088, 'game')
  request.r(i1089[8], i1089[9], 0, i1088, 'sfx')
  request.r(i1089[10], i1089[11], 0, i1088, 'startButton')
  request.r(i1089[12], i1089[13], 0, i1088, 'title')
  request.r(i1089[14], i1089[15], 0, i1088, 'button')
  var i1091 = i1089[16]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.showOnStart = i1090
  return i1088
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.UI.Button' )
  var i1095 = data
  i1094.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1095[0], i1094.m_OnClick)
  i1094.m_Navigation = request.d('UnityEngine.UI.Navigation', i1095[1], i1094.m_Navigation)
  i1094.m_Transition = i1095[2]
  i1094.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1095[3], i1094.m_Colors)
  i1094.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1095[4], i1094.m_SpriteState)
  i1094.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1095[5], i1094.m_AnimationTriggers)
  i1094.m_Interactable = !!i1095[6]
  request.r(i1095[7], i1095[8], 0, i1094, 'm_TargetGraphic')
  return i1094
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1097 = data
  i1096.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1097[0], i1096.m_PersistentCalls)
  return i1096
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('UnityEngine.Events.PersistentCall', i1101[i + 0]));
  }
  i1098.m_Calls = i1100
  return i1098
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'm_Target')
  i1104.m_TargetAssemblyTypeName = i1105[2]
  i1104.m_MethodName = i1105[3]
  i1104.m_Mode = i1105[4]
  i1104.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1105[5], i1104.m_Arguments)
  i1104.m_CallState = i1105[6]
  return i1104
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1107 = data
  i1106.m_Mode = i1107[0]
  i1106.m_WrapAround = !!i1107[1]
  request.r(i1107[2], i1107[3], 0, i1106, 'm_SelectOnUp')
  request.r(i1107[4], i1107[5], 0, i1106, 'm_SelectOnDown')
  request.r(i1107[6], i1107[7], 0, i1106, 'm_SelectOnLeft')
  request.r(i1107[8], i1107[9], 0, i1106, 'm_SelectOnRight')
  return i1106
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1109 = data
  i1108.m_NormalColor = new pc.Color(i1109[0], i1109[1], i1109[2], i1109[3])
  i1108.m_HighlightedColor = new pc.Color(i1109[4], i1109[5], i1109[6], i1109[7])
  i1108.m_PressedColor = new pc.Color(i1109[8], i1109[9], i1109[10], i1109[11])
  i1108.m_SelectedColor = new pc.Color(i1109[12], i1109[13], i1109[14], i1109[15])
  i1108.m_DisabledColor = new pc.Color(i1109[16], i1109[17], i1109[18], i1109[19])
  i1108.m_ColorMultiplier = i1109[20]
  i1108.m_FadeDuration = i1109[21]
  return i1108
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'm_HighlightedSprite')
  request.r(i1111[2], i1111[3], 0, i1110, 'm_PressedSprite')
  request.r(i1111[4], i1111[5], 0, i1110, 'm_SelectedSprite')
  request.r(i1111[6], i1111[7], 0, i1110, 'm_DisabledSprite')
  return i1110
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1113 = data
  i1112.m_NormalTrigger = i1113[0]
  i1112.m_HighlightedTrigger = i1113[1]
  i1112.m_PressedTrigger = i1113[2]
  i1112.m_SelectedTrigger = i1113[3]
  i1112.m_DisabledTrigger = i1113[4]
  return i1112
}

Deserializers["AcidFailPanel"] = function (request, data, root) {
  var i1114 = root || request.c( 'AcidFailPanel' )
  var i1115 = data
  i1114.designHeight = i1115[0]
  i1114.shadowAlpha = i1115[1]
  i1114.fadeTime = i1115[2]
  i1114.pulsePeriod = i1115[3]
  i1114.pulseScale = i1115[4]
  request.r(i1115[5], i1115[6], 0, i1114, 'shadow')
  request.r(i1115[7], i1115[8], 0, i1114, 'finger')
  request.r(i1115[9], i1115[10], 0, i1114, 'content')
  request.r(i1115[11], i1115[12], 0, i1114, 'panelRect')
  return i1114
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'm_FirstSelected')
  i1116.m_sendNavigationEvents = !!i1117[2]
  i1116.m_DragThreshold = i1117[3]
  return i1116
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1119 = data
  i1118.m_HorizontalAxis = i1119[0]
  i1118.m_VerticalAxis = i1119[1]
  i1118.m_SubmitButton = i1119[2]
  i1118.m_CancelButton = i1119[3]
  i1118.m_InputActionsPerSecond = i1119[4]
  i1118.m_RepeatDelay = i1119[5]
  i1118.m_ForceModuleActive = !!i1119[6]
  i1118.m_SendPointerHoverToParent = !!i1119[7]
  return i1118
}

Deserializers["AcidGame"] = function (request, data, root) {
  var i1120 = root || request.c( 'AcidGame' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.manPrefabs = i1122
  request.r(i1121[1], i1121[2], 0, i1120, 'menRoot')
  request.r(i1121[3], i1121[4], 0, i1120, 'stick')
  request.r(i1121[5], i1121[6], 0, i1120, 'fx')
  request.r(i1121[7], i1121[8], 0, i1120, 'plank')
  i1120.acidTop = i1121[9]
  i1120.acidBottom = i1121[10]
  i1120.poolHalfWidth = i1121[11]
  i1120.poolCenterX = i1121[12]
  i1120.plankStartY = i1121[13]
  i1120.plankStep = i1121[14]
  i1120.plankMinY = i1121[15]
  i1120.plankSpeed = i1121[16]
  i1120.plankSpeedFinished = i1121[17]
  i1120.waveCount = i1121[18]
  i1120.wavePause = i1121[19]
  i1120.spawnY = i1121[20]
  i1120.spawnHalfWidth = i1121[21]
  i1120.failWhenPlankSunk = !!i1121[22]
  request.r(i1121[23], i1121[24], 0, i1120, 'hand')
  request.r(i1121[25], i1121[26], 0, i1120, 'handRenderer')
  request.r(i1121[27], i1121[28], 0, i1120, 'winPanel')
  request.r(i1121[29], i1121[30], 0, i1120, 'failPanel')
  i1120.resultDelay = i1121[31]
  request.r(i1121[32], i1121[33], 0, i1120, 'tankPrefab')
  i1120.tankDropDelay = i1121[34]
  i1120.plankFinishY = i1121[35]
  i1120.tankEndDelay = i1121[36]
  i1120.tankTimeout = i1121[37]
  i1120.finaleManInterval = i1121[38]
  i1120.finaleManMax = i1121[39]
  i1120.plankHalfHeight = i1121[40]
  i1120.firstManSwordGap = i1121[41]
  request.r(i1121[42], i1121[43], 0, i1120, 'sfx')
  request.r(i1121[44], i1121[45], 0, i1120, 'killCounter')
  return i1120
}

Deserializers["AcidAudio"] = function (request, data, root) {
  var i1126 = root || request.c( 'AcidAudio' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'sfx')
  request.r(i1127[2], i1127[3], 0, i1126, 'acidLoop')
  request.r(i1127[4], i1127[5], 0, i1126, 'hit')
  request.r(i1127[6], i1127[7], 0, i1126, 'ghost')
  request.r(i1127[8], i1127[9], 0, i1126, 'pop')
  request.r(i1127[10], i1127[11], 0, i1126, 'click')
  i1126.ghostDelay = i1127[12]
  i1126.acidFade = i1127[13]
  var i1129 = i1127[14]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1126.voices = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'clip')
  request.r(i1133[2], i1133[3], 0, i1132, 'outputAudioMixerGroup')
  i1132.playOnAwake = !!i1133[4]
  i1132.loop = !!i1133[5]
  i1132.time = i1133[6]
  i1132.volume = i1133[7]
  i1132.pitch = i1133[8]
  i1132.enabled = !!i1133[9]
  return i1132
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1134 = root || request.c( 'LunaController' )
  var i1135 = data
  i1134.TimePlay = i1135[0]
  request.r(i1135[1], i1135[2], 0, i1134, 'BGM')
  i1134.UseCustomBG = !!i1135[3]
  request.r(i1135[4], i1135[5], 0, i1134, 'BGTexture')
  request.r(i1135[6], i1135[7], 0, i1134, 'game')
  request.r(i1135[8], i1135[9], 0, i1134, 'musicSource')
  request.r(i1135[10], i1135[11], 0, i1134, 'sfx')
  request.r(i1135[12], i1135[13], 0, i1134, 'customBG')
  i1134.musicVolume = i1135[14]
  var i1137 = i1135[15]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1134.CTA = i1136
  request.r(i1135[16], i1135[17], 0, i1134, 'endUI')
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1141 = data
  i1140.ambientIntensity = i1141[0]
  i1140.reflectionIntensity = i1141[1]
  i1140.ambientMode = i1141[2]
  i1140.ambientLight = new pc.Color(i1141[3], i1141[4], i1141[5], i1141[6])
  i1140.ambientSkyColor = new pc.Color(i1141[7], i1141[8], i1141[9], i1141[10])
  i1140.ambientGroundColor = new pc.Color(i1141[11], i1141[12], i1141[13], i1141[14])
  i1140.ambientEquatorColor = new pc.Color(i1141[15], i1141[16], i1141[17], i1141[18])
  i1140.fogColor = new pc.Color(i1141[19], i1141[20], i1141[21], i1141[22])
  i1140.fogEndDistance = i1141[23]
  i1140.fogStartDistance = i1141[24]
  i1140.fogDensity = i1141[25]
  i1140.fog = !!i1141[26]
  request.r(i1141[27], i1141[28], 0, i1140, 'skybox')
  i1140.fogMode = i1141[29]
  var i1143 = i1141[30]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1143[i + 0]) );
  }
  i1140.lightmaps = i1142
  i1140.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1141[31], i1140.lightProbes)
  i1140.lightmapsMode = i1141[32]
  i1140.mixedBakeMode = i1141[33]
  i1140.environmentLightingMode = i1141[34]
  i1140.ambientProbe = new pc.SphericalHarmonicsL2(i1141[35])
  request.r(i1141[36], i1141[37], 0, i1140, 'customReflection')
  request.r(i1141[38], i1141[39], 0, i1140, 'defaultReflection')
  i1140.defaultReflectionMode = i1141[40]
  i1140.defaultReflectionResolution = i1141[41]
  i1140.sunLightObjectId = i1141[42]
  i1140.pixelLightCount = i1141[43]
  i1140.defaultReflectionHDR = !!i1141[44]
  i1140.hasLightDataAsset = !!i1141[45]
  i1140.hasManualGenerate = !!i1141[46]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'lightmapColor')
  request.r(i1147[2], i1147[3], 0, i1146, 'lightmapDirection')
  request.r(i1147[4], i1147[5], 0, i1146, 'shadowMask')
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1148 = root || new UnityEngine.LightProbes()
  var i1149 = data
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1159[i + 0]));
  }
  i1156.ShaderCompilationErrors = i1158
  i1156.name = i1157[1]
  i1156.guid = i1157[2]
  var i1161 = i1157[3]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.shaderDefinedKeywords = i1160
  var i1163 = i1157[4]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1163[i + 0]) );
  }
  i1156.passes = i1162
  var i1165 = i1157[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1165[i + 0]) );
  }
  i1156.usePasses = i1164
  var i1167 = i1157[6]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1167[i + 0]) );
  }
  i1156.defaultParameterValues = i1166
  request.r(i1157[7], i1157[8], 0, i1156, 'unityFallbackShader')
  i1156.readDepth = !!i1157[9]
  i1156.hasDepthOnlyPass = !!i1157[10]
  i1156.isCreatedByShaderGraph = !!i1157[11]
  i1156.disableBatching = !!i1157[12]
  i1156.compiled = !!i1157[13]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1171 = data
  i1170.shaderName = i1171[0]
  i1170.errorMessage = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1176 = root || new pc.UnityShaderPass()
  var i1177 = data
  i1176.id = i1177[0]
  i1176.subShaderIndex = i1177[1]
  i1176.name = i1177[2]
  i1176.passType = i1177[3]
  i1176.grabPassTextureName = i1177[4]
  i1176.usePass = !!i1177[5]
  i1176.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[6], i1176.zTest)
  i1176.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[7], i1176.zWrite)
  i1176.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[8], i1176.culling)
  i1176.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1177[9], i1176.blending)
  i1176.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1177[10], i1176.alphaBlending)
  i1176.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[11], i1176.colorWriteMask)
  i1176.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[12], i1176.offsetUnits)
  i1176.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[13], i1176.offsetFactor)
  i1176.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[14], i1176.stencilRef)
  i1176.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[15], i1176.stencilReadMask)
  i1176.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[16], i1176.stencilWriteMask)
  i1176.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1177[17], i1176.stencilOp)
  i1176.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1177[18], i1176.stencilOpFront)
  i1176.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1177[19], i1176.stencilOpBack)
  var i1179 = i1177[20]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1179[i + 0]) );
  }
  i1176.tags = i1178
  var i1181 = i1177[21]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1176.passDefinedKeywords = i1180
  var i1183 = i1177[22]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1183[i + 0]) );
  }
  i1176.passDefinedKeywordGroups = i1182
  var i1185 = i1177[23]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1185[i + 0]) );
  }
  i1176.variants = i1184
  var i1187 = i1177[24]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1187[i + 0]) );
  }
  i1176.excludedVariants = i1186
  i1176.hasDepthReader = !!i1177[25]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1189 = data
  i1188.val = i1189[0]
  i1188.name = i1189[1]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1191 = data
  i1190.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[0], i1190.src)
  i1190.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[1], i1190.dst)
  i1190.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1191[2], i1190.op)
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1193 = data
  i1192.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1193[0], i1192.pass)
  i1192.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1193[1], i1192.fail)
  i1192.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1193[2], i1192.zFail)
  i1192.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1193[3], i1192.comp)
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.value = i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1201 = data
  var i1203 = i1201[0]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1200.keywords = i1202
  i1200.hasDiscard = !!i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1207 = data
  i1206.passId = i1207[0]
  i1206.subShaderIndex = i1207[1]
  var i1209 = i1207[2]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( i1209[i + 0] );
  }
  i1206.keywords = i1208
  i1206.vertexProgram = i1207[3]
  i1206.fragmentProgram = i1207[4]
  i1206.exportedForWebGl2 = !!i1207[5]
  i1206.readDepth = !!i1207[6]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'shader')
  i1212.pass = i1213[2]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.type = i1217[1]
  i1216.value = new pc.Vec4( i1217[2], i1217[3], i1217[4], i1217[5] )
  i1216.textureValue = i1217[6]
  i1216.shaderPropertyFlag = i1217[7]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1219 = data
  i1218.name = i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'texture')
  i1218.aabb = i1219[3]
  i1218.vertices = i1219[4]
  i1218.triangles = i1219[5]
  i1218.textureRect = UnityEngine.Rect.MinMaxRect(i1219[6], i1219[7], i1219[8], i1219[9])
  i1218.packedRect = UnityEngine.Rect.MinMaxRect(i1219[10], i1219[11], i1219[12], i1219[13])
  i1218.border = new pc.Vec4( i1219[14], i1219[15], i1219[16], i1219[17] )
  i1218.transparency = i1219[18]
  i1218.bounds = i1219[19]
  i1218.pixelsPerUnit = i1219[20]
  i1218.textureWidth = i1219[21]
  i1218.textureHeight = i1219[22]
  i1218.nativeSize = new pc.Vec2( i1219[23], i1219[24] )
  i1218.pivot = new pc.Vec2( i1219[25], i1219[26] )
  i1218.textureRectOffset = new pc.Vec2( i1219[27], i1219[28] )
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1221 = data
  i1220.name = i1221[0]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1225[i + 0]) );
  }
  i1222.files = i1224
  i1222.componentToPrefabIds = i1223[1]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1229 = data
  i1228.path = i1229[0]
  request.r(i1229[1], i1229[2], 0, i1228, 'unityObject')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1233[i + 0]) );
  }
  i1230.scriptsExecutionOrder = i1232
  var i1235 = i1231[1]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1235[i + 0]) );
  }
  i1230.sortingLayers = i1234
  var i1237 = i1231[2]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1237[i + 0]) );
  }
  i1230.cullingLayers = i1236
  i1230.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1231[3], i1230.timeSettings)
  i1230.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1231[4], i1230.physicsSettings)
  i1230.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1231[5], i1230.physics2DSettings)
  i1230.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1231[6], i1230.qualitySettings)
  i1230.enableRealtimeShadows = !!i1231[7]
  i1230.enableAutoInstancing = !!i1231[8]
  i1230.enableStaticBatching = !!i1231[9]
  i1230.enableDynamicBatching = !!i1231[10]
  i1230.usePreservativeDynamicBatching = !!i1231[11]
  i1230.lightmapEncodingQuality = i1231[12]
  i1230.desiredColorSpace = i1231[13]
  var i1239 = i1231[14]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( i1239[i + 0] );
  }
  i1230.allTags = i1238
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.value = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1247 = data
  i1246.id = i1247[0]
  i1246.name = i1247[1]
  i1246.value = i1247[2]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1251 = data
  i1250.id = i1251[0]
  i1250.name = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1253 = data
  i1252.fixedDeltaTime = i1253[0]
  i1252.maximumDeltaTime = i1253[1]
  i1252.timeScale = i1253[2]
  i1252.maximumParticleTimestep = i1253[3]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1255 = data
  i1254.gravity = new pc.Vec3( i1255[0], i1255[1], i1255[2] )
  i1254.defaultSolverIterations = i1255[3]
  i1254.bounceThreshold = i1255[4]
  i1254.autoSyncTransforms = !!i1255[5]
  i1254.autoSimulation = !!i1255[6]
  var i1257 = i1255[7]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1257[i + 0]) );
  }
  i1254.collisionMatrix = i1256
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1261 = data
  i1260.enabled = !!i1261[0]
  i1260.layerId = i1261[1]
  i1260.otherLayerId = i1261[2]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'material')
  i1262.gravity = new pc.Vec2( i1263[2], i1263[3] )
  i1262.positionIterations = i1263[4]
  i1262.velocityIterations = i1263[5]
  i1262.velocityThreshold = i1263[6]
  i1262.maxLinearCorrection = i1263[7]
  i1262.maxAngularCorrection = i1263[8]
  i1262.maxTranslationSpeed = i1263[9]
  i1262.maxRotationSpeed = i1263[10]
  i1262.baumgarteScale = i1263[11]
  i1262.baumgarteTOIScale = i1263[12]
  i1262.timeToSleep = i1263[13]
  i1262.linearSleepTolerance = i1263[14]
  i1262.angularSleepTolerance = i1263[15]
  i1262.defaultContactOffset = i1263[16]
  i1262.autoSimulation = !!i1263[17]
  i1262.queriesHitTriggers = !!i1263[18]
  i1262.queriesStartInColliders = !!i1263[19]
  i1262.callbacksOnDisable = !!i1263[20]
  i1262.reuseCollisionCallbacks = !!i1263[21]
  i1262.autoSyncTransforms = !!i1263[22]
  var i1265 = i1263[23]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1265[i + 0]) );
  }
  i1262.collisionMatrix = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.layerId = i1269[1]
  i1268.otherLayerId = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1273[i + 0]) );
  }
  i1270.qualityLevels = i1272
  var i1275 = i1271[1]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1270.names = i1274
  i1270.shadows = i1271[2]
  i1270.anisotropicFiltering = i1271[3]
  i1270.antiAliasing = i1271[4]
  i1270.lodBias = i1271[5]
  i1270.shadowCascades = i1271[6]
  i1270.shadowDistance = i1271[7]
  i1270.shadowmaskMode = i1271[8]
  i1270.shadowProjection = i1271[9]
  i1270.shadowResolution = i1271[10]
  i1270.softParticles = !!i1271[11]
  i1270.softVegetation = !!i1271[12]
  i1270.activeColorSpace = i1271[13]
  i1270.desiredColorSpace = i1271[14]
  i1270.masterTextureLimit = i1271[15]
  i1270.maxQueuedFrames = i1271[16]
  i1270.particleRaycastBudget = i1271[17]
  i1270.pixelLightCount = i1271[18]
  i1270.realtimeReflectionProbes = !!i1271[19]
  i1270.shadowCascade2Split = i1271[20]
  i1270.shadowCascade4Split = new pc.Vec3( i1271[21], i1271[22], i1271[23] )
  i1270.streamingMipmapsActive = !!i1271[24]
  i1270.vSyncCount = i1271[25]
  i1270.asyncUploadBufferSize = i1271[26]
  i1270.asyncUploadTimeSlice = i1271[27]
  i1270.billboardsFaceCameraPosition = !!i1271[28]
  i1270.shadowNearPlaneOffset = i1271[29]
  i1270.streamingMipmapsMemoryBudget = i1271[30]
  i1270.maximumLODLevel = i1271[31]
  i1270.streamingMipmapsAddAllCameras = !!i1271[32]
  i1270.streamingMipmapsMaxLevelReduction = i1271[33]
  i1270.streamingMipmapsRenderersPerFrame = i1271[34]
  i1270.resolutionScalingFixedDPIFactor = i1271[35]
  i1270.streamingMipmapsMaxFileIORequests = i1271[36]
  i1270.currentQualityLevel = i1271[37]
  return i1270
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'm_ObjectArgument')
  i1278.m_ObjectArgumentAssemblyTypeName = i1279[2]
  i1278.m_IntArgument = i1279[3]
  i1278.m_FloatArgument = i1279[4]
  i1278.m_StringArgument = i1279[5]
  i1278.m_BoolArgument = !!i1279[6]
  return i1278
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[16],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[10],"58":[10],"59":[10],"60":[10],"61":[10],"62":[10],"12":[10],"63":[10],"64":[10],"65":[10],"66":[10],"67":[10],"68":[10],"69":[16],"70":[71],"72":[73],"74":[73],"15":[14],"22":[75],"76":[3],"77":[16],"78":[79],"80":[14],"81":[19,14],"82":[71],"83":[19,14],"84":[14],"85":[14],"86":[71,14],"87":[14,19],"88":[89],"90":[89],"91":[89],"92":[14],"93":[14],"27":[15],"29":[19,14],"94":[14],"26":[15],"95":[14],"96":[14],"97":[14],"98":[14],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"18":[19,14],"104":[14],"105":[14],"106":[14],"107":[14],"108":[19,14],"109":[14],"110":[35],"111":[35],"36":[35],"112":[35],"113":[16],"114":[16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","AcidGhost","AcidHit","UnityEngine.Sprite","AcidMan","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","AcidTank","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","AcidCustomBG","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.AudioListener","AcidWave","AcidStick","AcidFx","AcidGame","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","AcidKillCounter","UnityEngine.UI.Image","AcidIntro","AcidAudio","UnityEngine.UI.Button","UnityEngine.GameObject","AcidFailPanel","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Renderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_V09";

Deserializers.lunaInitializationTime = "11/11/2026 10:26:47";

Deserializers.lunaDaysRunning = "1.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SSP_V09_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "636fd864df946da448f963fd5664a5c4";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3438";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_V09";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "880e43d3-3201-47d3-b5d8-24e932d62fdf";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

