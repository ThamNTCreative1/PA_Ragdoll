var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.JointSpring' )
  var i1003 = data
  i1002.spring = i1003[0]
  i1002.damper = i1003[1]
  i1002.targetPosition = i1003[2]
  return i1002
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.JointMotor' )
  var i1005 = data
  i1004.m_TargetVelocity = i1005[0]
  i1004.m_Force = i1005[1]
  i1004.m_FreeSpin = i1005[2]
  return i1004
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.JointLimits' )
  var i1007 = data
  i1006.m_Min = i1007[0]
  i1006.m_Max = i1007[1]
  i1006.m_Bounciness = i1007[2]
  i1006.m_BounceMinVelocity = i1007[3]
  i1006.m_ContactDistance = i1007[4]
  i1006.minBounce = i1007[5]
  i1006.maxBounce = i1007[6]
  return i1006
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.JointDrive' )
  var i1009 = data
  i1008.m_PositionSpring = i1009[0]
  i1008.m_PositionDamper = i1009[1]
  i1008.m_MaximumForce = i1009[2]
  i1008.m_UseAcceleration = i1009[3]
  return i1008
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1011 = data
  i1010.m_Spring = i1011[0]
  i1010.m_Damper = i1011[1]
  return i1010
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1013 = data
  i1012.m_Limit = i1013[0]
  i1012.m_Bounciness = i1013[1]
  i1012.m_ContactDistance = i1013[2]
  return i1012
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1015 = data
  i1014.m_ExtremumSlip = i1015[0]
  i1014.m_ExtremumValue = i1015[1]
  i1014.m_AsymptoteSlip = i1015[2]
  i1014.m_AsymptoteValue = i1015[3]
  i1014.m_Stiffness = i1015[4]
  return i1014
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1017 = data
  i1016.m_LowerAngle = i1017[0]
  i1016.m_UpperAngle = i1017[1]
  return i1016
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1019 = data
  i1018.m_MotorSpeed = i1019[0]
  i1018.m_MaximumMotorTorque = i1019[1]
  return i1018
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1021 = data
  i1020.m_DampingRatio = i1021[0]
  i1020.m_Frequency = i1021[1]
  i1020.m_Angle = i1021[2]
  return i1020
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1023 = data
  i1022.m_LowerTranslation = i1023[0]
  i1022.m_UpperTranslation = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.width = i1025[1]
  i1024.height = i1025[2]
  i1024.mipmapCount = i1025[3]
  i1024.anisoLevel = i1025[4]
  i1024.filterMode = i1025[5]
  i1024.hdr = !!i1025[6]
  i1024.format = i1025[7]
  i1024.wrapMode = i1025[8]
  i1024.alphaIsTransparency = !!i1025[9]
  i1024.alphaSource = i1025[10]
  i1024.graphicsFormat = i1025[11]
  i1024.sRGBTexture = !!i1025[12]
  i1024.desiredColorSpace = i1025[13]
  i1024.wrapU = i1025[14]
  i1024.wrapV = i1025[15]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1026 = root || new pc.UnityMaterial()
  var i1027 = data
  i1026.name = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'shader')
  i1026.renderQueue = i1027[3]
  i1026.enableInstancing = !!i1027[4]
  var i1029 = i1027[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1029[i + 0]) );
  }
  i1026.floatParameters = i1028
  var i1031 = i1027[6]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1031[i + 0]) );
  }
  i1026.colorParameters = i1030
  var i1033 = i1027[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1033[i + 0]) );
  }
  i1026.vectorParameters = i1032
  var i1035 = i1027[8]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1035[i + 0]) );
  }
  i1026.textureParameters = i1034
  var i1037 = i1027[9]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1037[i + 0]) );
  }
  i1026.materialFlags = i1036
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.value = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.value = new pc.Color(i1045[1], i1045[2], i1045[3], i1045[4])
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.value = new pc.Vec4( i1049[1], i1049[2], i1049[3], i1049[4] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1053 = data
  i1052.name = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'value')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.enabled = !!i1057[1]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1059 = data
  i1058.position = new pc.Vec3( i1059[0], i1059[1], i1059[2] )
  i1058.scale = new pc.Vec3( i1059[3], i1059[4], i1059[5] )
  i1058.rotation = new pc.Quat(i1059[6], i1059[7], i1059[8], i1059[9])
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1061 = data
  i1060.color = new pc.Color(i1061[0], i1061[1], i1061[2], i1061[3])
  request.r(i1061[4], i1061[5], 0, i1060, 'sprite')
  i1060.flipX = !!i1061[6]
  i1060.flipY = !!i1061[7]
  i1060.drawMode = i1061[8]
  i1060.size = new pc.Vec2( i1061[9], i1061[10] )
  i1060.tileMode = i1061[11]
  i1060.adaptiveModeThreshold = i1061[12]
  i1060.maskInteraction = i1061[13]
  i1060.spriteSortPoint = i1061[14]
  i1060.enabled = !!i1061[15]
  request.r(i1061[16], i1061[17], 0, i1060, 'sharedMaterial')
  var i1063 = i1061[18]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 2, i1062, '')
  }
  i1060.sharedMaterials = i1062
  i1060.receiveShadows = !!i1061[19]
  i1060.shadowCastingMode = i1061[20]
  i1060.sortingLayerID = i1061[21]
  i1060.sortingOrder = i1061[22]
  i1060.lightmapIndex = i1061[23]
  i1060.lightmapSceneIndex = i1061[24]
  i1060.lightmapScaleOffset = new pc.Vec4( i1061[25], i1061[26], i1061[27], i1061[28] )
  i1060.lightProbeUsage = i1061[29]
  i1060.reflectionProbeUsage = i1061[30]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1067 = data
  i1066.bodyType = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'material')
  i1066.simulated = !!i1067[3]
  i1066.useAutoMass = !!i1067[4]
  i1066.mass = i1067[5]
  i1066.drag = i1067[6]
  i1066.angularDrag = i1067[7]
  i1066.gravityScale = i1067[8]
  i1066.collisionDetectionMode = i1067[9]
  i1066.sleepMode = i1067[10]
  i1066.constraints = i1067[11]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1069 = data
  i1068.usedByComposite = !!i1069[0]
  i1068.autoTiling = !!i1069[1]
  i1068.size = new pc.Vec2( i1069[2], i1069[3] )
  i1068.edgeRadius = i1069[4]
  i1068.enabled = !!i1069[5]
  i1068.isTrigger = !!i1069[6]
  i1068.usedByEffector = !!i1069[7]
  i1068.density = i1069[8]
  i1068.offset = new pc.Vec2( i1069[9], i1069[10] )
  request.r(i1069[11], i1069[12], 0, i1068, 'material')
  return i1068
}

Deserializers["MelonAd.Bullet"] = function (request, data, root) {
  var i1070 = root || request.c( 'MelonAd.Bullet' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'rb')
  i1070.life = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.tagId = i1073[1]
  i1072.enabled = !!i1073[2]
  i1072.isStatic = !!i1073[3]
  i1072.layer = i1073[4]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1075 = data
  i1074.radius = i1075[0]
  i1074.enabled = !!i1075[1]
  i1074.isTrigger = !!i1075[2]
  i1074.usedByEffector = !!i1075[3]
  i1074.density = i1075[4]
  i1074.offset = new pc.Vec2( i1075[5], i1075[6] )
  request.r(i1075[7], i1075[8], 0, i1074, 'material')
  return i1074
}

Deserializers["MelonAd.FlameParticle"] = function (request, data, root) {
  var i1076 = root || request.c( 'MelonAd.FlameParticle' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'rb')
  request.r(i1077[2], i1077[3], 0, i1076, 'visual')
  request.r(i1077[4], i1077[5], 0, i1076, 'sr')
  i1076.life = i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.index = i1079[1]
  i1078.startup = !!i1079[2]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1081 = data
  i1080.aspect = i1081[0]
  i1080.orthographic = !!i1081[1]
  i1080.orthographicSize = i1081[2]
  i1080.backgroundColor = new pc.Color(i1081[3], i1081[4], i1081[5], i1081[6])
  i1080.nearClipPlane = i1081[7]
  i1080.farClipPlane = i1081[8]
  i1080.fieldOfView = i1081[9]
  i1080.depth = i1081[10]
  i1080.clearFlags = i1081[11]
  i1080.cullingMask = i1081[12]
  i1080.rect = i1081[13]
  request.r(i1081[14], i1081[15], 0, i1080, 'targetTexture')
  i1080.usePhysicalProperties = !!i1081[16]
  i1080.focalLength = i1081[17]
  i1080.sensorSize = new pc.Vec2( i1081[18], i1081[19] )
  i1080.lensShift = new pc.Vec2( i1081[20], i1081[21] )
  i1080.gateFit = i1081[22]
  i1080.commandBufferCount = i1081[23]
  i1080.cameraType = i1081[24]
  i1080.enabled = !!i1081[25]
  return i1080
}

Deserializers["MelonAd.CameraFit"] = function (request, data, root) {
  var i1082 = root || request.c( 'MelonAd.CameraFit' )
  var i1083 = data
  i1082.designHeight = i1083[0]
  i1082.referenceResolution = new pc.Vec2( i1083[1], i1083[2] )
  return i1082
}

Deserializers["MelonAd.UIController"] = function (request, data, root) {
  var i1084 = root || request.c( 'MelonAd.UIController' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'hint')
  request.r(i1085[2], i1085[3], 0, i1084, 'head')
  request.r(i1085[4], i1085[5], 0, i1084, 'failRoot')
  request.r(i1085[6], i1085[7], 0, i1084, 'panel')
  request.r(i1085[8], i1085[9], 0, i1084, 'panelGroup')
  request.r(i1085[10], i1085[11], 0, i1084, 'button')
  request.r(i1085[12], i1085[13], 0, i1084, 'finger')
  request.r(i1085[14], i1085[15], 0, i1084, 'retryButton')
  request.r(i1085[16], i1085[17], 0, i1084, 'winRoot')
  request.r(i1085[18], i1085[19], 0, i1084, 'winPanel')
  request.r(i1085[20], i1085[21], 0, i1084, 'winPanelGroup')
  request.r(i1085[22], i1085[23], 0, i1084, 'winButton')
  request.r(i1085[24], i1085[25], 0, i1084, 'winFinger')
  request.r(i1085[26], i1085[27], 0, i1084, 'nextButton')
  request.r(i1085[28], i1085[29], 0, i1084, 'introRoot')
  request.r(i1085[30], i1085[31], 0, i1084, 'introCard')
  request.r(i1085[32], i1085[33], 0, i1084, 'introGroup')
  i1084.introDuration = i1085[34]
  i1084.introFade = i1085[35]
  i1084.slideDistance = i1085[36]
  i1084.slideDuration = i1085[37]
  i1084.pulseDuration = i1085[38]
  i1084.wiggleDuration = i1085[39]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1087 = data
  i1086.pivot = new pc.Vec2( i1087[0], i1087[1] )
  i1086.anchorMin = new pc.Vec2( i1087[2], i1087[3] )
  i1086.anchorMax = new pc.Vec2( i1087[4], i1087[5] )
  i1086.sizeDelta = new pc.Vec2( i1087[6], i1087[7] )
  i1086.anchoredPosition3D = new pc.Vec3( i1087[8], i1087[9], i1087[10] )
  i1086.rotation = new pc.Quat(i1087[11], i1087[12], i1087[13], i1087[14])
  i1086.scale = new pc.Vec3( i1087[15], i1087[16], i1087[17] )
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1089 = data
  i1088.planeDistance = i1089[0]
  i1088.referencePixelsPerUnit = i1089[1]
  i1088.isFallbackOverlay = !!i1089[2]
  i1088.renderMode = i1089[3]
  i1088.renderOrder = i1089[4]
  i1088.sortingLayerName = i1089[5]
  i1088.sortingOrder = i1089[6]
  i1088.scaleFactor = i1089[7]
  request.r(i1089[8], i1089[9], 0, i1088, 'worldCamera')
  i1088.overrideSorting = !!i1089[10]
  i1088.pixelPerfect = !!i1089[11]
  i1088.targetDisplay = i1089[12]
  i1088.overridePixelPerfect = !!i1089[13]
  i1088.enabled = !!i1089[14]
  return i1088
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1091 = data
  i1090.m_UiScaleMode = i1091[0]
  i1090.m_ReferencePixelsPerUnit = i1091[1]
  i1090.m_ScaleFactor = i1091[2]
  i1090.m_ReferenceResolution = new pc.Vec2( i1091[3], i1091[4] )
  i1090.m_ScreenMatchMode = i1091[5]
  i1090.m_MatchWidthOrHeight = i1091[6]
  i1090.m_PhysicalUnit = i1091[7]
  i1090.m_FallbackScreenDPI = i1091[8]
  i1090.m_DefaultSpriteDPI = i1091[9]
  i1090.m_DynamicPixelsPerUnit = i1091[10]
  i1090.m_PresetInfoIsWorld = !!i1091[11]
  return i1090
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1093 = data
  i1092.m_IgnoreReversedGraphics = !!i1093[0]
  i1092.m_BlockingObjects = i1093[1]
  i1092.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1093[2] )
  return i1092
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1095 = data
  i1094.m_AspectMode = i1095[0]
  i1094.m_AspectRatio = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1097 = data
  i1096.cullTransparentMesh = !!i1097[0]
  return i1096
}

Deserializers["MelonAd.UICover"] = function (request, data, root) {
  var i1098 = root || request.c( 'MelonAd.UICover' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'target')
  return i1098
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'm_Texture')
  i1100.m_UVRect = UnityEngine.Rect.MinMaxRect(i1101[2], i1101[3], i1101[4], i1101[5])
  request.r(i1101[6], i1101[7], 0, i1100, 'm_Material')
  i1100.m_Maskable = !!i1101[8]
  i1100.m_Color = new pc.Color(i1101[9], i1101[10], i1101[11], i1101[12])
  i1100.m_RaycastTarget = !!i1101[13]
  i1100.m_RaycastPadding = new pc.Vec4( i1101[14], i1101[15], i1101[16], i1101[17] )
  return i1100
}

Deserializers["MelonAd.LevelRefs"] = function (request, data, root) {
  var i1102 = root || request.c( 'MelonAd.LevelRefs' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'man')
  request.r(i1103[2], i1103[3], 0, i1102, 'rifle')
  request.r(i1103[4], i1103[5], 0, i1102, 'flameThrower')
  request.r(i1103[6], i1103[7], 0, i1102, 'tutorPin')
  request.r(i1103[8], i1103[9], 0, i1102, 'dynamicRoot')
  return i1102
}

Deserializers["MelonAd.Pin"] = function (request, data, root) {
  var i1104 = root || request.c( 'MelonAd.Pin' )
  var i1105 = data
  i1104.evt = i1105[0]
  i1104.flyOffset = new pc.Vec2( i1105[1], i1105[2] )
  return i1104
}

Deserializers["MelonAd.ExitZone"] = function (request, data, root) {
  var i1106 = root || request.c( 'MelonAd.ExitZone' )
  var i1107 = data
  return i1106
}

Deserializers["MelonAd.Grabbable"] = function (request, data, root) {
  var i1108 = root || request.c( 'MelonAd.Grabbable' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'rb')
  request.r(i1109[2], i1109[3], 0, i1108, 'owner')
  return i1108
}

Deserializers["MelonAd.Spike"] = function (request, data, root) {
  var i1110 = root || request.c( 'MelonAd.Spike' )
  var i1111 = data
  return i1110
}

Deserializers["MelonAd.MonsterPit"] = function (request, data, root) {
  var i1112 = root || request.c( 'MelonAd.MonsterPit' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 2) {
  request.r(i1115[i + 0], i1115[i + 1], 2, i1114, '')
  }
  i1112.monsters = i1114
  i1112.eaters = i1113[1]
  i1112.idleSpeed = i1113[2]
  i1112.idleSway = i1113[3]
  i1112.armWave = i1113[4]
  i1112.breathe = i1113[5]
  i1112.reachTime = i1113[6]
  i1112.reachStretch = i1113[7]
  i1112.chewTime = i1113[8]
  i1112.settleTime = i1113[9]
  i1112.pullSpeed = i1113[10]
  return i1112
}

Deserializers["MelonAd.Rifle"] = function (request, data, root) {
  var i1118 = root || request.c( 'MelonAd.Rifle' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'bulletPrefab')
  request.r(i1119[2], i1119[3], 0, i1118, 'bulletRoot')
  request.r(i1119[4], i1119[5], 0, i1118, 'muzzle')
  i1118.poolSize = i1119[6]
  i1118.width = i1119[7]
  i1118.bulletSpeed = i1119[8]
  return i1118
}

Deserializers["MelonAd.FlameThrower"] = function (request, data, root) {
  var i1120 = root || request.c( 'MelonAd.FlameThrower' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'prefab')
  request.r(i1121[2], i1121[3], 0, i1120, 'particleRoot')
  i1120.poolSize = i1121[4]
  i1120.width = i1121[5]
  i1120.speed = i1121[6]
  return i1120
}

Deserializers["MelonAd.CharacterSelector"] = function (request, data, root) {
  var i1122 = root || request.c( 'MelonAd.CharacterSelector' )
  var i1123 = data
  i1122.index = i1123[0]
  var i1125 = i1123[1]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.characters = i1124
  return i1122
}

Deserializers["MelonAd.Ragdoll"] = function (request, data, root) {
  var i1128 = root || request.c( 'MelonAd.Ragdoll' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1128.parts = i1130
  request.r(i1129[1], i1129[2], 0, i1128, 'head')
  request.r(i1129[3], i1129[4], 0, i1128, 'leftFoot')
  request.r(i1129[5], i1129[6], 0, i1128, 'rightFoot')
  request.r(i1129[7], i1129[8], 0, i1128, 'hole')
  i1128.holeDiameter = i1129[9]
  i1128.headLift = i1129[10]
  i1128.footPull = i1129[11]
  i1128.exitStayTime = i1129[12]
  i1128.blockMask = UnityEngine.LayerMask.FromIntegerValue( i1129[13] )
  return i1128
}

Deserializers["MelonAd.RagdollPart"] = function (request, data, root) {
  var i1134 = root || request.c( 'MelonAd.RagdollPart' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'owner')
  request.r(i1135[2], i1135[3], 0, i1134, 'rb')
  request.r(i1135[4], i1135[5], 0, i1134, 'skin')
  request.r(i1135[6], i1135[7], 0, i1134, 'skeleton')
  request.r(i1135[8], i1135[9], 0, i1134, 'burnt')
  var i1137 = i1135[10]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.skinExtras = i1136
  var i1139 = i1135[11]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1134.burntExtras = i1138
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1143 = data
  i1142.useLimits = !!i1143[0]
  i1142.limits = request.d('UnityEngine.JointAngleLimits2D', i1143[1], i1142.limits)
  i1142.useMotor = !!i1143[2]
  i1142.motor = request.d('UnityEngine.JointMotor2D', i1143[3], i1142.motor)
  i1142.anchor = new pc.Vec2( i1143[4], i1143[5] )
  i1142.connectedAnchor = new pc.Vec2( i1143[6], i1143[7] )
  i1142.autoConfigureConnectedAnchor = !!i1143[8]
  request.r(i1143[9], i1143[10], 0, i1142, 'connectedBody')
  i1142.breakForce = i1143[11]
  i1142.breakTorque = i1143[12]
  i1142.enableCollision = !!i1143[13]
  i1142.enabled = !!i1143[14]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1145 = data
  i1144.frontSortingLayerID = i1145[0]
  i1144.frontSortingOrder = i1145[1]
  i1144.backSortingLayerID = i1145[2]
  i1144.backSortingOrder = i1145[3]
  i1144.alphaCutoff = i1145[4]
  request.r(i1145[5], i1145[6], 0, i1144, 'sprite')
  i1144.tileMode = i1145[7]
  i1144.isCustomRangeActive = !!i1145[8]
  i1144.spriteSortPoint = i1145[9]
  i1144.enabled = !!i1145[10]
  request.r(i1145[11], i1145[12], 0, i1144, 'sharedMaterial')
  var i1147 = i1145[13]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1144.sharedMaterials = i1146
  i1144.receiveShadows = !!i1145[14]
  i1144.shadowCastingMode = i1145[15]
  i1144.sortingLayerID = i1145[16]
  i1144.sortingOrder = i1145[17]
  i1144.lightmapIndex = i1145[18]
  i1144.lightmapSceneIndex = i1145[19]
  i1144.lightmapScaleOffset = new pc.Vec4( i1145[20], i1145[21], i1145[22], i1145[23] )
  i1144.lightProbeUsage = i1145[24]
  i1144.reflectionProbeUsage = i1145[25]
  return i1144
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.Image' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_Sprite')
  i1148.m_Type = i1149[2]
  i1148.m_PreserveAspect = !!i1149[3]
  i1148.m_FillCenter = !!i1149[4]
  i1148.m_FillMethod = i1149[5]
  i1148.m_FillAmount = i1149[6]
  i1148.m_FillClockwise = !!i1149[7]
  i1148.m_FillOrigin = i1149[8]
  i1148.m_UseSpriteMesh = !!i1149[9]
  i1148.m_PixelsPerUnitMultiplier = i1149[10]
  request.r(i1149[11], i1149[12], 0, i1148, 'm_Material')
  i1148.m_Maskable = !!i1149[13]
  i1148.m_Color = new pc.Color(i1149[14], i1149[15], i1149[16], i1149[17])
  i1148.m_RaycastTarget = !!i1149[18]
  i1148.m_RaycastPadding = new pc.Vec4( i1149[19], i1149[20], i1149[21], i1149[22] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1151 = data
  i1150.m_Alpha = i1151[0]
  i1150.m_Interactable = !!i1151[1]
  i1150.m_BlocksRaycasts = !!i1151[2]
  i1150.m_IgnoreParentGroups = !!i1151[3]
  i1150.enabled = !!i1151[4]
  return i1150
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.Button' )
  var i1153 = data
  i1152.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1153[0], i1152.m_OnClick)
  i1152.m_Navigation = request.d('UnityEngine.UI.Navigation', i1153[1], i1152.m_Navigation)
  i1152.m_Transition = i1153[2]
  i1152.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1153[3], i1152.m_Colors)
  i1152.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1153[4], i1152.m_SpriteState)
  i1152.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1153[5], i1152.m_AnimationTriggers)
  i1152.m_Interactable = !!i1153[6]
  request.r(i1153[7], i1153[8], 0, i1152, 'm_TargetGraphic')
  return i1152
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1155 = data
  i1154.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1155[0], i1154.m_PersistentCalls)
  return i1154
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('UnityEngine.Events.PersistentCall', i1159[i + 0]));
  }
  i1156.m_Calls = i1158
  return i1156
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'm_Target')
  i1162.m_TargetAssemblyTypeName = i1163[2]
  i1162.m_MethodName = i1163[3]
  i1162.m_Mode = i1163[4]
  i1162.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1163[5], i1162.m_Arguments)
  i1162.m_CallState = i1163[6]
  return i1162
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1165 = data
  i1164.m_Mode = i1165[0]
  i1164.m_WrapAround = !!i1165[1]
  request.r(i1165[2], i1165[3], 0, i1164, 'm_SelectOnUp')
  request.r(i1165[4], i1165[5], 0, i1164, 'm_SelectOnDown')
  request.r(i1165[6], i1165[7], 0, i1164, 'm_SelectOnLeft')
  request.r(i1165[8], i1165[9], 0, i1164, 'm_SelectOnRight')
  return i1164
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1167 = data
  i1166.m_NormalColor = new pc.Color(i1167[0], i1167[1], i1167[2], i1167[3])
  i1166.m_HighlightedColor = new pc.Color(i1167[4], i1167[5], i1167[6], i1167[7])
  i1166.m_PressedColor = new pc.Color(i1167[8], i1167[9], i1167[10], i1167[11])
  i1166.m_SelectedColor = new pc.Color(i1167[12], i1167[13], i1167[14], i1167[15])
  i1166.m_DisabledColor = new pc.Color(i1167[16], i1167[17], i1167[18], i1167[19])
  i1166.m_ColorMultiplier = i1167[20]
  i1166.m_FadeDuration = i1167[21]
  return i1166
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'm_HighlightedSprite')
  request.r(i1169[2], i1169[3], 0, i1168, 'm_PressedSprite')
  request.r(i1169[4], i1169[5], 0, i1168, 'm_SelectedSprite')
  request.r(i1169[6], i1169[7], 0, i1168, 'm_DisabledSprite')
  return i1168
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1171 = data
  i1170.m_NormalTrigger = i1171[0]
  i1170.m_HighlightedTrigger = i1171[1]
  i1170.m_PressedTrigger = i1171[2]
  i1170.m_SelectedTrigger = i1171[3]
  i1170.m_DisabledTrigger = i1171[4]
  return i1170
}

Deserializers["MelonAd.CtaOverlay"] = function (request, data, root) {
  var i1172 = root || request.c( 'MelonAd.CtaOverlay' )
  var i1173 = data
  return i1172
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'm_FirstSelected')
  i1174.m_sendNavigationEvents = !!i1175[2]
  i1174.m_DragThreshold = i1175[3]
  return i1174
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1177 = data
  i1176.m_HorizontalAxis = i1177[0]
  i1176.m_VerticalAxis = i1177[1]
  i1176.m_SubmitButton = i1177[2]
  i1176.m_CancelButton = i1177[3]
  i1176.m_InputActionsPerSecond = i1177[4]
  i1176.m_RepeatDelay = i1177[5]
  i1176.m_ForceModuleActive = !!i1177[6]
  i1176.m_SendPointerHoverToParent = !!i1177[7]
  return i1176
}

Deserializers["MelonAd.GameConfig"] = function (request, data, root) {
  var i1178 = root || request.c( 'MelonAd.GameConfig' )
  var i1179 = data
  i1178.retries = i1179[0]
  i1178.failPopupDelay = i1179[1]
  i1178.rifleInterval = i1179[2]
  i1178.rifleBurstAfterPin = i1179[3]
  i1178.flameRate = i1179[4]
  i1178.pinTapRadius = i1179[5]
  i1178.showTutorial = !!i1179[6]
  i1178.iosLink = i1179[7]
  i1178.androidLink = i1179[8]
  return i1178
}

Deserializers["MelonAd.AudioManager"] = function (request, data, root) {
  var i1180 = root || request.c( 'MelonAd.AudioManager' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'music')
  request.r(i1181[2], i1181[3], 0, i1180, 'doc')
  request.r(i1181[4], i1181[5], 0, i1180, 'door')
  request.r(i1181[6], i1181[7], 0, i1180, 'fire')
  request.r(i1181[8], i1181[9], 0, i1180, 'flame')
  request.r(i1181[10], i1181[11], 0, i1180, 'hurt')
  request.r(i1181[12], i1181[13], 0, i1180, 'jar')
  request.r(i1181[14], i1181[15], 0, i1180, 'kis')
  request.r(i1181[16], i1181[17], 0, i1180, 'ohog')
  request.r(i1181[18], i1181[19], 0, i1180, 'complete')
  request.r(i1181[20], i1181[21], 0, i1180, 'fail')
  request.r(i1181[22], i1181[23], 0, i1180, 'thunder')
  request.r(i1181[24], i1181[25], 0, i1180, 'rain')
  i1180.rainVolume = i1181[26]
  return i1180
}

Deserializers["MelonAd.FxManager"] = function (request, data, root) {
  var i1182 = root || request.c( 'MelonAd.FxManager' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'smoke')
  request.r(i1183[2], i1183[3], 0, i1182, 'flame')
  request.r(i1183[4], i1183[5], 0, i1182, 'blood')
  request.r(i1183[6], i1183[7], 0, i1182, 'spikeShard')
  request.r(i1183[8], i1183[9], 0, i1182, 'bulletShard')
  request.r(i1183[10], i1183[11], 0, i1182, 'bubble')
  i1182.prewarm = i1183[12]
  i1182.sortingOrder = i1183[13]
  return i1182
}

Deserializers["MelonAd.GameManager"] = function (request, data, root) {
  var i1184 = root || request.c( 'MelonAd.GameManager' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'level')
  request.r(i1185[2], i1185[3], 0, i1184, 'zoomRoot')
  request.r(i1185[4], i1185[5], 0, i1184, 'cam')
  request.r(i1185[6], i1185[7], 0, i1184, 'ui')
  request.r(i1185[8], i1185[9], 0, i1184, 'cta')
  request.r(i1185[10], i1185[11], 0, i1184, 'tapFinger')
  request.r(i1185[12], i1185[13], 0, i1184, 'dragFinger')
  request.r(i1185[14], i1185[15], 0, i1184, 'dragFingerSprite')
  i1184.pickMask = UnityEngine.LayerMask.FromIntegerValue( i1185[16] )
  i1184.winZoom = i1185[17]
  i1184.winFocus = new pc.Vec2( i1185[18], i1185[19] )
  i1184.winZoomDuration = i1185[20]
  i1184.winPopupDelay = i1185[21]
  i1184.dragFrequency = i1185[22]
  i1184.dragDamping = i1185[23]
  i1184.dragMaxForce = i1185[24]
  i1184.tapFingerOffset = new pc.Vec2( i1185[25], i1185[26] )
  return i1184
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1186 = root || request.c( 'LunaController' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'BGTexture')
  i1186.UseTime = !!i1187[2]
  i1186.TimePlay = i1187[3]
  i1186.Character = i1187[4]
  request.r(i1187[5], i1187[6], 0, i1186, 'characterSelector')
  request.r(i1187[7], i1187[8], 0, i1186, 'BGImage')
  var i1189 = i1187[9]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1186.CTA = i1188
  return i1186
}

Deserializers["MelonAd.StormFx"] = function (request, data, root) {
  var i1192 = root || request.c( 'MelonAd.StormFx' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'cam')
  request.r(i1193[2], i1193[3], 0, i1192, 'whiteSprite')
  request.r(i1193[4], i1193[5], 0, i1192, 'flash')
  i1192.playOnStart = !!i1193[6]
  i1192.maxDrops = i1193[7]
  i1192.rainVelocity = new pc.Vec2( i1193[8], i1193[9] )
  i1192.dropSize = new pc.Vec2( i1193[10], i1193[11] )
  i1192.rainColor = new pc.Color(i1193[12], i1193[13], i1193[14], i1193[15])
  i1192.rainFadeIn = i1193[16]
  i1192.rainSortingOrder = i1193[17]
  i1192.strikeInterval = new pc.Vec2( i1193[18], i1193[19] )
  i1192.extraFlashChance = i1193[20]
  i1192.coreColor = new pc.Color(i1193[21], i1193[22], i1193[23], i1193[24])
  i1192.glowColor = new pc.Color(i1193[25], i1193[26], i1193[27], i1193[28])
  i1192.coreWidth = i1193[29]
  i1192.glowWidth = i1193[30]
  i1192.mainSegments = i1193[31]
  i1192.branchSegments = i1193[32]
  i1192.branches = i1193[33]
  i1192.jitter = i1193[34]
  i1192.boltSortingOrder = i1193[35]
  i1192.flashStrength = i1193[36]
  i1192.groundRange = new pc.Vec2( i1193[37], i1193[38] )
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1195 = data
  i1194.ambientIntensity = i1195[0]
  i1194.reflectionIntensity = i1195[1]
  i1194.ambientMode = i1195[2]
  i1194.ambientLight = new pc.Color(i1195[3], i1195[4], i1195[5], i1195[6])
  i1194.ambientSkyColor = new pc.Color(i1195[7], i1195[8], i1195[9], i1195[10])
  i1194.ambientGroundColor = new pc.Color(i1195[11], i1195[12], i1195[13], i1195[14])
  i1194.ambientEquatorColor = new pc.Color(i1195[15], i1195[16], i1195[17], i1195[18])
  i1194.fogColor = new pc.Color(i1195[19], i1195[20], i1195[21], i1195[22])
  i1194.fogEndDistance = i1195[23]
  i1194.fogStartDistance = i1195[24]
  i1194.fogDensity = i1195[25]
  i1194.fog = !!i1195[26]
  request.r(i1195[27], i1195[28], 0, i1194, 'skybox')
  i1194.fogMode = i1195[29]
  var i1197 = i1195[30]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1197[i + 0]) );
  }
  i1194.lightmaps = i1196
  i1194.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1195[31], i1194.lightProbes)
  i1194.lightmapsMode = i1195[32]
  i1194.mixedBakeMode = i1195[33]
  i1194.environmentLightingMode = i1195[34]
  i1194.ambientProbe = new pc.SphericalHarmonicsL2(i1195[35])
  request.r(i1195[36], i1195[37], 0, i1194, 'customReflection')
  request.r(i1195[38], i1195[39], 0, i1194, 'defaultReflection')
  i1194.defaultReflectionMode = i1195[40]
  i1194.defaultReflectionResolution = i1195[41]
  i1194.sunLightObjectId = i1195[42]
  i1194.pixelLightCount = i1195[43]
  i1194.defaultReflectionHDR = !!i1195[44]
  i1194.hasLightDataAsset = !!i1195[45]
  i1194.hasManualGenerate = !!i1195[46]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'lightmapColor')
  request.r(i1201[2], i1201[3], 0, i1200, 'lightmapDirection')
  request.r(i1201[4], i1201[5], 0, i1200, 'shadowMask')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1202 = root || new UnityEngine.LightProbes()
  var i1203 = data
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.bounciness = i1211[1]
  i1210.friction = i1211[2]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1215[i + 0]));
  }
  i1212.ShaderCompilationErrors = i1214
  i1212.name = i1213[1]
  i1212.guid = i1213[2]
  var i1217 = i1213[3]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( i1217[i + 0] );
  }
  i1212.shaderDefinedKeywords = i1216
  var i1219 = i1213[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1219[i + 0]) );
  }
  i1212.passes = i1218
  var i1221 = i1213[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1221[i + 0]) );
  }
  i1212.usePasses = i1220
  var i1223 = i1213[6]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1223[i + 0]) );
  }
  i1212.defaultParameterValues = i1222
  request.r(i1213[7], i1213[8], 0, i1212, 'unityFallbackShader')
  i1212.readDepth = !!i1213[9]
  i1212.hasDepthOnlyPass = !!i1213[10]
  i1212.isCreatedByShaderGraph = !!i1213[11]
  i1212.disableBatching = !!i1213[12]
  i1212.compiled = !!i1213[13]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1227 = data
  i1226.shaderName = i1227[0]
  i1226.errorMessage = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1232 = root || new pc.UnityShaderPass()
  var i1233 = data
  i1232.id = i1233[0]
  i1232.subShaderIndex = i1233[1]
  i1232.name = i1233[2]
  i1232.passType = i1233[3]
  i1232.grabPassTextureName = i1233[4]
  i1232.usePass = !!i1233[5]
  i1232.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[6], i1232.zTest)
  i1232.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[7], i1232.zWrite)
  i1232.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[8], i1232.culling)
  i1232.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1233[9], i1232.blending)
  i1232.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1233[10], i1232.alphaBlending)
  i1232.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[11], i1232.colorWriteMask)
  i1232.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[12], i1232.offsetUnits)
  i1232.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[13], i1232.offsetFactor)
  i1232.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[14], i1232.stencilRef)
  i1232.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[15], i1232.stencilReadMask)
  i1232.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[16], i1232.stencilWriteMask)
  i1232.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[17], i1232.stencilOp)
  i1232.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[18], i1232.stencilOpFront)
  i1232.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1233[19], i1232.stencilOpBack)
  var i1235 = i1233[20]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1235[i + 0]) );
  }
  i1232.tags = i1234
  var i1237 = i1233[21]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1232.passDefinedKeywords = i1236
  var i1239 = i1233[22]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1239[i + 0]) );
  }
  i1232.passDefinedKeywordGroups = i1238
  var i1241 = i1233[23]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1241[i + 0]) );
  }
  i1232.variants = i1240
  var i1243 = i1233[24]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1243[i + 0]) );
  }
  i1232.excludedVariants = i1242
  i1232.hasDepthReader = !!i1233[25]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1245 = data
  i1244.val = i1245[0]
  i1244.name = i1245[1]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1247 = data
  i1246.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[0], i1246.src)
  i1246.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[1], i1246.dst)
  i1246.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[2], i1246.op)
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1249 = data
  i1248.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[0], i1248.pass)
  i1248.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[1], i1248.fail)
  i1248.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[2], i1248.zFail)
  i1248.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1249[3], i1248.comp)
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1253 = data
  i1252.name = i1253[0]
  i1252.value = i1253[1]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1256.keywords = i1258
  i1256.hasDiscard = !!i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1263 = data
  i1262.passId = i1263[0]
  i1262.subShaderIndex = i1263[1]
  var i1265 = i1263[2]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1262.keywords = i1264
  i1262.vertexProgram = i1263[3]
  i1262.fragmentProgram = i1263[4]
  i1262.exportedForWebGl2 = !!i1263[5]
  i1262.readDepth = !!i1263[6]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'shader')
  i1268.pass = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.type = i1273[1]
  i1272.value = new pc.Vec4( i1273[2], i1273[3], i1273[4], i1273[5] )
  i1272.textureValue = i1273[6]
  i1272.shaderPropertyFlag = i1273[7]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1275 = data
  i1274.name = i1275[0]
  request.r(i1275[1], i1275[2], 0, i1274, 'texture')
  i1274.aabb = i1275[3]
  i1274.vertices = i1275[4]
  i1274.triangles = i1275[5]
  i1274.textureRect = UnityEngine.Rect.MinMaxRect(i1275[6], i1275[7], i1275[8], i1275[9])
  i1274.packedRect = UnityEngine.Rect.MinMaxRect(i1275[10], i1275[11], i1275[12], i1275[13])
  i1274.border = new pc.Vec4( i1275[14], i1275[15], i1275[16], i1275[17] )
  i1274.transparency = i1275[18]
  i1274.bounds = i1275[19]
  i1274.pixelsPerUnit = i1275[20]
  i1274.textureWidth = i1275[21]
  i1274.textureHeight = i1275[22]
  i1274.nativeSize = new pc.Vec2( i1275[23], i1275[24] )
  i1274.pivot = new pc.Vec2( i1275[25], i1275[26] )
  i1274.textureRectOffset = new pc.Vec2( i1275[27], i1275[28] )
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1277 = data
  i1276.name = i1277[0]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1281[i + 0]) );
  }
  i1278.files = i1280
  i1278.componentToPrefabIds = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1285 = data
  i1284.path = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'unityObject')
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1289[i + 0]) );
  }
  i1286.scriptsExecutionOrder = i1288
  var i1291 = i1287[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1291[i + 0]) );
  }
  i1286.sortingLayers = i1290
  var i1293 = i1287[2]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1293[i + 0]) );
  }
  i1286.cullingLayers = i1292
  i1286.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1287[3], i1286.timeSettings)
  i1286.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1287[4], i1286.physicsSettings)
  i1286.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1287[5], i1286.physics2DSettings)
  i1286.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1287[6], i1286.qualitySettings)
  i1286.enableRealtimeShadows = !!i1287[7]
  i1286.enableAutoInstancing = !!i1287[8]
  i1286.enableStaticBatching = !!i1287[9]
  i1286.enableDynamicBatching = !!i1287[10]
  i1286.usePreservativeDynamicBatching = !!i1287[11]
  i1286.lightmapEncodingQuality = i1287[12]
  i1286.desiredColorSpace = i1287[13]
  var i1295 = i1287[14]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( i1295[i + 0] );
  }
  i1286.allTags = i1294
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.value = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1303 = data
  i1302.id = i1303[0]
  i1302.name = i1303[1]
  i1302.value = i1303[2]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1307 = data
  i1306.id = i1307[0]
  i1306.name = i1307[1]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1309 = data
  i1308.fixedDeltaTime = i1309[0]
  i1308.maximumDeltaTime = i1309[1]
  i1308.timeScale = i1309[2]
  i1308.maximumParticleTimestep = i1309[3]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1311 = data
  i1310.gravity = new pc.Vec3( i1311[0], i1311[1], i1311[2] )
  i1310.defaultSolverIterations = i1311[3]
  i1310.bounceThreshold = i1311[4]
  i1310.autoSyncTransforms = !!i1311[5]
  i1310.autoSimulation = !!i1311[6]
  var i1313 = i1311[7]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1313[i + 0]) );
  }
  i1310.collisionMatrix = i1312
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1317 = data
  i1316.enabled = !!i1317[0]
  i1316.layerId = i1317[1]
  i1316.otherLayerId = i1317[2]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'material')
  i1318.gravity = new pc.Vec2( i1319[2], i1319[3] )
  i1318.positionIterations = i1319[4]
  i1318.velocityIterations = i1319[5]
  i1318.velocityThreshold = i1319[6]
  i1318.maxLinearCorrection = i1319[7]
  i1318.maxAngularCorrection = i1319[8]
  i1318.maxTranslationSpeed = i1319[9]
  i1318.maxRotationSpeed = i1319[10]
  i1318.baumgarteScale = i1319[11]
  i1318.baumgarteTOIScale = i1319[12]
  i1318.timeToSleep = i1319[13]
  i1318.linearSleepTolerance = i1319[14]
  i1318.angularSleepTolerance = i1319[15]
  i1318.defaultContactOffset = i1319[16]
  i1318.autoSimulation = !!i1319[17]
  i1318.queriesHitTriggers = !!i1319[18]
  i1318.queriesStartInColliders = !!i1319[19]
  i1318.callbacksOnDisable = !!i1319[20]
  i1318.reuseCollisionCallbacks = !!i1319[21]
  i1318.autoSyncTransforms = !!i1319[22]
  var i1321 = i1319[23]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1321[i + 0]) );
  }
  i1318.collisionMatrix = i1320
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1325 = data
  i1324.enabled = !!i1325[0]
  i1324.layerId = i1325[1]
  i1324.otherLayerId = i1325[2]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1329[i + 0]) );
  }
  i1326.qualityLevels = i1328
  var i1331 = i1327[1]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( i1331[i + 0] );
  }
  i1326.names = i1330
  i1326.shadows = i1327[2]
  i1326.anisotropicFiltering = i1327[3]
  i1326.antiAliasing = i1327[4]
  i1326.lodBias = i1327[5]
  i1326.shadowCascades = i1327[6]
  i1326.shadowDistance = i1327[7]
  i1326.shadowmaskMode = i1327[8]
  i1326.shadowProjection = i1327[9]
  i1326.shadowResolution = i1327[10]
  i1326.softParticles = !!i1327[11]
  i1326.softVegetation = !!i1327[12]
  i1326.activeColorSpace = i1327[13]
  i1326.desiredColorSpace = i1327[14]
  i1326.masterTextureLimit = i1327[15]
  i1326.maxQueuedFrames = i1327[16]
  i1326.particleRaycastBudget = i1327[17]
  i1326.pixelLightCount = i1327[18]
  i1326.realtimeReflectionProbes = !!i1327[19]
  i1326.shadowCascade2Split = i1327[20]
  i1326.shadowCascade4Split = new pc.Vec3( i1327[21], i1327[22], i1327[23] )
  i1326.streamingMipmapsActive = !!i1327[24]
  i1326.vSyncCount = i1327[25]
  i1326.asyncUploadBufferSize = i1327[26]
  i1326.asyncUploadTimeSlice = i1327[27]
  i1326.billboardsFaceCameraPosition = !!i1327[28]
  i1326.shadowNearPlaneOffset = i1327[29]
  i1326.streamingMipmapsMemoryBudget = i1327[30]
  i1326.maximumLODLevel = i1327[31]
  i1326.streamingMipmapsAddAllCameras = !!i1327[32]
  i1326.streamingMipmapsMaxLevelReduction = i1327[33]
  i1326.streamingMipmapsRenderersPerFrame = i1327[34]
  i1326.resolutionScalingFixedDPIFactor = i1327[35]
  i1326.streamingMipmapsMaxFileIORequests = i1327[36]
  i1326.currentQualityLevel = i1327[37]
  return i1326
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'm_ObjectArgument')
  i1334.m_ObjectArgumentAssemblyTypeName = i1335[2]
  i1334.m_IntArgument = i1335[3]
  i1334.m_FloatArgument = i1335[4]
  i1334.m_StringArgument = i1335[5]
  i1334.m_BoolArgument = !!i1335[6]
  return i1334
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[13],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"41":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[6],"82":[13],"83":[84],"85":[86],"87":[86],"21":[18],"15":[13],"43":[42],"88":[3],"89":[13],"90":[91],"92":[44],"93":[21],"94":[18],"95":[84,18],"96":[18,26],"97":[18],"98":[26,18],"99":[84],"100":[26,18],"101":[18],"102":[103],"104":[103],"105":[103],"106":[18],"107":[18],"24":[21],"42":[26,18],"25":[18],"23":[21],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"115":[18],"116":[18],"28":[26,18],"117":[18],"118":[18],"119":[18],"120":[18],"121":[26,18],"122":[18],"123":[44],"124":[44],"45":[44],"125":[44],"126":[13],"127":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.MonoBehaviour","MelonAd.Bullet","UnityEngine.CircleCollider2D","MelonAd.FlameParticle","UnityEngine.Camera","UnityEngine.AudioListener","MelonAd.CameraFit","MelonAd.UIController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.CanvasRenderer","MelonAd.UICover","UnityEngine.UI.RawImage","MelonAd.LevelRefs","MelonAd.Ragdoll","MelonAd.Rifle","MelonAd.FlameThrower","MelonAd.Pin","MelonAd.ExitZone","MelonAd.Grabbable","MelonAd.Spike","MelonAd.MonsterPit","MelonAd.CharacterSelector","MelonAd.RagdollPart","UnityEngine.SpriteMask","UnityEngine.HingeJoint2D","UnityEngine.UI.Image","MelonAd.CtaOverlay","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","MelonAd.GameConfig","MelonAd.AudioManager","UnityEngine.AudioClip","MelonAd.FxManager","MelonAd.GameManager","LunaController","MelonAd.StormFx","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "29.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_PSF_V03_YenTTH";

Deserializers.lunaAppID = "43647";

Deserializers.projectId = "83336d6262c2dbe44ad1c159a3170903";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3538";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a8b086b7-c918-4380-927e-58a3aaf43366";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

