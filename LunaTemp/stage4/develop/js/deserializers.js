var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.JointSpring' )
  var i979 = data
  i978.spring = i979[0]
  i978.damper = i979[1]
  i978.targetPosition = i979[2]
  return i978
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.JointMotor' )
  var i981 = data
  i980.m_TargetVelocity = i981[0]
  i980.m_Force = i981[1]
  i980.m_FreeSpin = i981[2]
  return i980
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.JointLimits' )
  var i983 = data
  i982.m_Min = i983[0]
  i982.m_Max = i983[1]
  i982.m_Bounciness = i983[2]
  i982.m_BounceMinVelocity = i983[3]
  i982.m_ContactDistance = i983[4]
  i982.minBounce = i983[5]
  i982.maxBounce = i983[6]
  return i982
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.JointDrive' )
  var i985 = data
  i984.m_PositionSpring = i985[0]
  i984.m_PositionDamper = i985[1]
  i984.m_MaximumForce = i985[2]
  i984.m_UseAcceleration = i985[3]
  return i984
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i987 = data
  i986.m_Spring = i987[0]
  i986.m_Damper = i987[1]
  return i986
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i989 = data
  i988.m_Limit = i989[0]
  i988.m_Bounciness = i989[1]
  i988.m_ContactDistance = i989[2]
  return i988
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i991 = data
  i990.m_ExtremumSlip = i991[0]
  i990.m_ExtremumValue = i991[1]
  i990.m_AsymptoteSlip = i991[2]
  i990.m_AsymptoteValue = i991[3]
  i990.m_Stiffness = i991[4]
  return i990
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i993 = data
  i992.m_LowerAngle = i993[0]
  i992.m_UpperAngle = i993[1]
  return i992
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i995 = data
  i994.m_MotorSpeed = i995[0]
  i994.m_MaximumMotorTorque = i995[1]
  return i994
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i997 = data
  i996.m_DampingRatio = i997[0]
  i996.m_Frequency = i997[1]
  i996.m_Angle = i997[2]
  return i996
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i999 = data
  i998.m_LowerTranslation = i999[0]
  i998.m_UpperTranslation = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.width = i1001[1]
  i1000.height = i1001[2]
  i1000.mipmapCount = i1001[3]
  i1000.anisoLevel = i1001[4]
  i1000.filterMode = i1001[5]
  i1000.hdr = !!i1001[6]
  i1000.format = i1001[7]
  i1000.wrapMode = i1001[8]
  i1000.alphaIsTransparency = !!i1001[9]
  i1000.alphaSource = i1001[10]
  i1000.graphicsFormat = i1001[11]
  i1000.sRGBTexture = !!i1001[12]
  i1000.desiredColorSpace = i1001[13]
  i1000.wrapU = i1001[14]
  i1000.wrapV = i1001[15]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1002 = root || new pc.UnityMaterial()
  var i1003 = data
  i1002.name = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'shader')
  i1002.renderQueue = i1003[3]
  i1002.enableInstancing = !!i1003[4]
  var i1005 = i1003[5]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1005[i + 0]) );
  }
  i1002.floatParameters = i1004
  var i1007 = i1003[6]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1007[i + 0]) );
  }
  i1002.colorParameters = i1006
  var i1009 = i1003[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1009[i + 0]) );
  }
  i1002.vectorParameters = i1008
  var i1011 = i1003[8]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1011[i + 0]) );
  }
  i1002.textureParameters = i1010
  var i1013 = i1003[9]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1013[i + 0]) );
  }
  i1002.materialFlags = i1012
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.value = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.value = new pc.Color(i1021[1], i1021[2], i1021[3], i1021[4])
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = new pc.Vec4( i1025[1], i1025[2], i1025[3], i1025[4] )
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1029 = data
  i1028.name = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'value')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.enabled = !!i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1035 = data
  i1034.position = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.scale = new pc.Vec3( i1035[3], i1035[4], i1035[5] )
  i1034.rotation = new pc.Quat(i1035[6], i1035[7], i1035[8], i1035[9])
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1037 = data
  i1036.color = new pc.Color(i1037[0], i1037[1], i1037[2], i1037[3])
  request.r(i1037[4], i1037[5], 0, i1036, 'sprite')
  i1036.flipX = !!i1037[6]
  i1036.flipY = !!i1037[7]
  i1036.drawMode = i1037[8]
  i1036.size = new pc.Vec2( i1037[9], i1037[10] )
  i1036.tileMode = i1037[11]
  i1036.adaptiveModeThreshold = i1037[12]
  i1036.maskInteraction = i1037[13]
  i1036.spriteSortPoint = i1037[14]
  i1036.enabled = !!i1037[15]
  request.r(i1037[16], i1037[17], 0, i1036, 'sharedMaterial')
  var i1039 = i1037[18]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.sharedMaterials = i1038
  i1036.receiveShadows = !!i1037[19]
  i1036.shadowCastingMode = i1037[20]
  i1036.sortingLayerID = i1037[21]
  i1036.sortingOrder = i1037[22]
  i1036.lightmapIndex = i1037[23]
  i1036.lightmapSceneIndex = i1037[24]
  i1036.lightmapScaleOffset = new pc.Vec4( i1037[25], i1037[26], i1037[27], i1037[28] )
  i1036.lightProbeUsage = i1037[29]
  i1036.reflectionProbeUsage = i1037[30]
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

Deserializers["MelonAd.Bullet"] = function (request, data, root) {
  var i1046 = root || request.c( 'MelonAd.Bullet' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'rb')
  i1046.life = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.tagId = i1049[1]
  i1048.enabled = !!i1049[2]
  i1048.isStatic = !!i1049[3]
  i1048.layer = i1049[4]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1051 = data
  i1050.radius = i1051[0]
  i1050.enabled = !!i1051[1]
  i1050.isTrigger = !!i1051[2]
  i1050.usedByEffector = !!i1051[3]
  i1050.density = i1051[4]
  i1050.offset = new pc.Vec2( i1051[5], i1051[6] )
  request.r(i1051[7], i1051[8], 0, i1050, 'material')
  return i1050
}

Deserializers["MelonAd.FlameParticle"] = function (request, data, root) {
  var i1052 = root || request.c( 'MelonAd.FlameParticle' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'rb')
  request.r(i1053[2], i1053[3], 0, i1052, 'visual')
  request.r(i1053[4], i1053[5], 0, i1052, 'sr')
  i1052.life = i1053[6]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.index = i1055[1]
  i1054.startup = !!i1055[2]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1057 = data
  i1056.aspect = i1057[0]
  i1056.orthographic = !!i1057[1]
  i1056.orthographicSize = i1057[2]
  i1056.backgroundColor = new pc.Color(i1057[3], i1057[4], i1057[5], i1057[6])
  i1056.nearClipPlane = i1057[7]
  i1056.farClipPlane = i1057[8]
  i1056.fieldOfView = i1057[9]
  i1056.depth = i1057[10]
  i1056.clearFlags = i1057[11]
  i1056.cullingMask = i1057[12]
  i1056.rect = i1057[13]
  request.r(i1057[14], i1057[15], 0, i1056, 'targetTexture')
  i1056.usePhysicalProperties = !!i1057[16]
  i1056.focalLength = i1057[17]
  i1056.sensorSize = new pc.Vec2( i1057[18], i1057[19] )
  i1056.lensShift = new pc.Vec2( i1057[20], i1057[21] )
  i1056.gateFit = i1057[22]
  i1056.commandBufferCount = i1057[23]
  i1056.cameraType = i1057[24]
  i1056.enabled = !!i1057[25]
  return i1056
}

Deserializers["MelonAd.CameraFit"] = function (request, data, root) {
  var i1058 = root || request.c( 'MelonAd.CameraFit' )
  var i1059 = data
  i1058.designHeight = i1059[0]
  i1058.referenceResolution = new pc.Vec2( i1059[1], i1059[2] )
  return i1058
}

Deserializers["MelonAd.UIController"] = function (request, data, root) {
  var i1060 = root || request.c( 'MelonAd.UIController' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'hint')
  request.r(i1061[2], i1061[3], 0, i1060, 'head')
  request.r(i1061[4], i1061[5], 0, i1060, 'failRoot')
  request.r(i1061[6], i1061[7], 0, i1060, 'panel')
  request.r(i1061[8], i1061[9], 0, i1060, 'panelGroup')
  request.r(i1061[10], i1061[11], 0, i1060, 'button')
  request.r(i1061[12], i1061[13], 0, i1060, 'finger')
  request.r(i1061[14], i1061[15], 0, i1060, 'retryButton')
  i1060.slideDistance = i1061[16]
  i1060.slideDuration = i1061[17]
  i1060.pulseDuration = i1061[18]
  i1060.wiggleDuration = i1061[19]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1063 = data
  i1062.pivot = new pc.Vec2( i1063[0], i1063[1] )
  i1062.anchorMin = new pc.Vec2( i1063[2], i1063[3] )
  i1062.anchorMax = new pc.Vec2( i1063[4], i1063[5] )
  i1062.sizeDelta = new pc.Vec2( i1063[6], i1063[7] )
  i1062.anchoredPosition3D = new pc.Vec3( i1063[8], i1063[9], i1063[10] )
  i1062.rotation = new pc.Quat(i1063[11], i1063[12], i1063[13], i1063[14])
  i1062.scale = new pc.Vec3( i1063[15], i1063[16], i1063[17] )
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1065 = data
  i1064.planeDistance = i1065[0]
  i1064.referencePixelsPerUnit = i1065[1]
  i1064.isFallbackOverlay = !!i1065[2]
  i1064.renderMode = i1065[3]
  i1064.renderOrder = i1065[4]
  i1064.sortingLayerName = i1065[5]
  i1064.sortingOrder = i1065[6]
  i1064.scaleFactor = i1065[7]
  request.r(i1065[8], i1065[9], 0, i1064, 'worldCamera')
  i1064.overrideSorting = !!i1065[10]
  i1064.pixelPerfect = !!i1065[11]
  i1064.targetDisplay = i1065[12]
  i1064.overridePixelPerfect = !!i1065[13]
  i1064.enabled = !!i1065[14]
  return i1064
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1067 = data
  i1066.m_UiScaleMode = i1067[0]
  i1066.m_ReferencePixelsPerUnit = i1067[1]
  i1066.m_ScaleFactor = i1067[2]
  i1066.m_ReferenceResolution = new pc.Vec2( i1067[3], i1067[4] )
  i1066.m_ScreenMatchMode = i1067[5]
  i1066.m_MatchWidthOrHeight = i1067[6]
  i1066.m_PhysicalUnit = i1067[7]
  i1066.m_FallbackScreenDPI = i1067[8]
  i1066.m_DefaultSpriteDPI = i1067[9]
  i1066.m_DynamicPixelsPerUnit = i1067[10]
  i1066.m_PresetInfoIsWorld = !!i1067[11]
  return i1066
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1069 = data
  i1068.m_IgnoreReversedGraphics = !!i1069[0]
  i1068.m_BlockingObjects = i1069[1]
  i1068.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1069[2] )
  return i1068
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1071 = data
  i1070.m_AspectMode = i1071[0]
  i1070.m_AspectRatio = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1073 = data
  i1072.cullTransparentMesh = !!i1073[0]
  return i1072
}

Deserializers["MelonAd.UICover"] = function (request, data, root) {
  var i1074 = root || request.c( 'MelonAd.UICover' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'target')
  return i1074
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_Texture')
  i1076.m_UVRect = UnityEngine.Rect.MinMaxRect(i1077[2], i1077[3], i1077[4], i1077[5])
  request.r(i1077[6], i1077[7], 0, i1076, 'm_Material')
  i1076.m_Maskable = !!i1077[8]
  i1076.m_Color = new pc.Color(i1077[9], i1077[10], i1077[11], i1077[12])
  i1076.m_RaycastTarget = !!i1077[13]
  i1076.m_RaycastPadding = new pc.Vec4( i1077[14], i1077[15], i1077[16], i1077[17] )
  return i1076
}

Deserializers["MelonAd.LevelRefs"] = function (request, data, root) {
  var i1078 = root || request.c( 'MelonAd.LevelRefs' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'man')
  request.r(i1079[2], i1079[3], 0, i1078, 'rifle')
  request.r(i1079[4], i1079[5], 0, i1078, 'flameThrower')
  request.r(i1079[6], i1079[7], 0, i1078, 'tutorPin')
  request.r(i1079[8], i1079[9], 0, i1078, 'dynamicRoot')
  return i1078
}

Deserializers["MelonAd.Pin"] = function (request, data, root) {
  var i1080 = root || request.c( 'MelonAd.Pin' )
  var i1081 = data
  i1080.evt = i1081[0]
  i1080.flyOffset = new pc.Vec2( i1081[1], i1081[2] )
  return i1080
}

Deserializers["MelonAd.ExitZone"] = function (request, data, root) {
  var i1082 = root || request.c( 'MelonAd.ExitZone' )
  var i1083 = data
  return i1082
}

Deserializers["MelonAd.Grabbable"] = function (request, data, root) {
  var i1084 = root || request.c( 'MelonAd.Grabbable' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'rb')
  request.r(i1085[2], i1085[3], 0, i1084, 'owner')
  return i1084
}

Deserializers["MelonAd.Spike"] = function (request, data, root) {
  var i1086 = root || request.c( 'MelonAd.Spike' )
  var i1087 = data
  return i1086
}

Deserializers["MelonAd.Acid"] = function (request, data, root) {
  var i1088 = root || request.c( 'MelonAd.Acid' )
  var i1089 = data
  return i1088
}

Deserializers["MelonAd.Rifle"] = function (request, data, root) {
  var i1090 = root || request.c( 'MelonAd.Rifle' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'bulletPrefab')
  request.r(i1091[2], i1091[3], 0, i1090, 'bulletRoot')
  request.r(i1091[4], i1091[5], 0, i1090, 'muzzle')
  i1090.poolSize = i1091[6]
  i1090.width = i1091[7]
  i1090.bulletSpeed = i1091[8]
  return i1090
}

Deserializers["MelonAd.FlameThrower"] = function (request, data, root) {
  var i1092 = root || request.c( 'MelonAd.FlameThrower' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'prefab')
  request.r(i1093[2], i1093[3], 0, i1092, 'particleRoot')
  i1092.poolSize = i1093[4]
  i1092.width = i1093[5]
  i1092.speed = i1093[6]
  return i1092
}

Deserializers["MelonAd.CharacterSelector"] = function (request, data, root) {
  var i1094 = root || request.c( 'MelonAd.CharacterSelector' )
  var i1095 = data
  i1094.index = i1095[0]
  var i1097 = i1095[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.characters = i1096
  return i1094
}

Deserializers["MelonAd.Ragdoll"] = function (request, data, root) {
  var i1100 = root || request.c( 'MelonAd.Ragdoll' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1100.parts = i1102
  request.r(i1101[1], i1101[2], 0, i1100, 'head')
  request.r(i1101[3], i1101[4], 0, i1100, 'leftFoot')
  request.r(i1101[5], i1101[6], 0, i1100, 'rightFoot')
  request.r(i1101[7], i1101[8], 0, i1100, 'hole')
  i1100.holeDiameter = i1101[9]
  i1100.headLift = i1101[10]
  i1100.footPull = i1101[11]
  return i1100
}

Deserializers["MelonAd.RagdollPart"] = function (request, data, root) {
  var i1106 = root || request.c( 'MelonAd.RagdollPart' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'owner')
  request.r(i1107[2], i1107[3], 0, i1106, 'rb')
  request.r(i1107[4], i1107[5], 0, i1106, 'skin')
  request.r(i1107[6], i1107[7], 0, i1106, 'skeleton')
  request.r(i1107[8], i1107[9], 0, i1106, 'burnt')
  var i1109 = i1107[10]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 2, i1108, '')
  }
  i1106.skinExtras = i1108
  var i1111 = i1107[11]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 2, i1110, '')
  }
  i1106.burntExtras = i1110
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1115 = data
  i1114.useLimits = !!i1115[0]
  i1114.limits = request.d('UnityEngine.JointAngleLimits2D', i1115[1], i1114.limits)
  i1114.useMotor = !!i1115[2]
  i1114.motor = request.d('UnityEngine.JointMotor2D', i1115[3], i1114.motor)
  i1114.anchor = new pc.Vec2( i1115[4], i1115[5] )
  i1114.connectedAnchor = new pc.Vec2( i1115[6], i1115[7] )
  i1114.autoConfigureConnectedAnchor = !!i1115[8]
  request.r(i1115[9], i1115[10], 0, i1114, 'connectedBody')
  i1114.breakForce = i1115[11]
  i1114.breakTorque = i1115[12]
  i1114.enableCollision = !!i1115[13]
  i1114.enabled = !!i1115[14]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1117 = data
  i1116.frontSortingLayerID = i1117[0]
  i1116.frontSortingOrder = i1117[1]
  i1116.backSortingLayerID = i1117[2]
  i1116.backSortingOrder = i1117[3]
  i1116.alphaCutoff = i1117[4]
  request.r(i1117[5], i1117[6], 0, i1116, 'sprite')
  i1116.tileMode = i1117[7]
  i1116.isCustomRangeActive = !!i1117[8]
  i1116.spriteSortPoint = i1117[9]
  i1116.enabled = !!i1117[10]
  request.r(i1117[11], i1117[12], 0, i1116, 'sharedMaterial')
  var i1119 = i1117[13]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1116.sharedMaterials = i1118
  i1116.receiveShadows = !!i1117[14]
  i1116.shadowCastingMode = i1117[15]
  i1116.sortingLayerID = i1117[16]
  i1116.sortingOrder = i1117[17]
  i1116.lightmapIndex = i1117[18]
  i1116.lightmapSceneIndex = i1117[19]
  i1116.lightmapScaleOffset = new pc.Vec4( i1117[20], i1117[21], i1117[22], i1117[23] )
  i1116.lightProbeUsage = i1117[24]
  i1116.reflectionProbeUsage = i1117[25]
  return i1116
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.UI.Image' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'm_Sprite')
  i1120.m_Type = i1121[2]
  i1120.m_PreserveAspect = !!i1121[3]
  i1120.m_FillCenter = !!i1121[4]
  i1120.m_FillMethod = i1121[5]
  i1120.m_FillAmount = i1121[6]
  i1120.m_FillClockwise = !!i1121[7]
  i1120.m_FillOrigin = i1121[8]
  i1120.m_UseSpriteMesh = !!i1121[9]
  i1120.m_PixelsPerUnitMultiplier = i1121[10]
  request.r(i1121[11], i1121[12], 0, i1120, 'm_Material')
  i1120.m_Maskable = !!i1121[13]
  i1120.m_Color = new pc.Color(i1121[14], i1121[15], i1121[16], i1121[17])
  i1120.m_RaycastTarget = !!i1121[18]
  i1120.m_RaycastPadding = new pc.Vec4( i1121[19], i1121[20], i1121[21], i1121[22] )
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1123 = data
  i1122.m_Alpha = i1123[0]
  i1122.m_Interactable = !!i1123[1]
  i1122.m_BlocksRaycasts = !!i1123[2]
  i1122.m_IgnoreParentGroups = !!i1123[3]
  i1122.enabled = !!i1123[4]
  return i1122
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.UI.Button' )
  var i1125 = data
  i1124.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1125[0], i1124.m_OnClick)
  i1124.m_Navigation = request.d('UnityEngine.UI.Navigation', i1125[1], i1124.m_Navigation)
  i1124.m_Transition = i1125[2]
  i1124.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1125[3], i1124.m_Colors)
  i1124.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1125[4], i1124.m_SpriteState)
  i1124.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1125[5], i1124.m_AnimationTriggers)
  i1124.m_Interactable = !!i1125[6]
  request.r(i1125[7], i1125[8], 0, i1124, 'm_TargetGraphic')
  return i1124
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1127 = data
  i1126.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1127[0], i1126.m_PersistentCalls)
  return i1126
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('UnityEngine.Events.PersistentCall', i1131[i + 0]));
  }
  i1128.m_Calls = i1130
  return i1128
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'm_Target')
  i1134.m_TargetAssemblyTypeName = i1135[2]
  i1134.m_MethodName = i1135[3]
  i1134.m_Mode = i1135[4]
  i1134.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1135[5], i1134.m_Arguments)
  i1134.m_CallState = i1135[6]
  return i1134
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1137 = data
  i1136.m_Mode = i1137[0]
  i1136.m_WrapAround = !!i1137[1]
  request.r(i1137[2], i1137[3], 0, i1136, 'm_SelectOnUp')
  request.r(i1137[4], i1137[5], 0, i1136, 'm_SelectOnDown')
  request.r(i1137[6], i1137[7], 0, i1136, 'm_SelectOnLeft')
  request.r(i1137[8], i1137[9], 0, i1136, 'm_SelectOnRight')
  return i1136
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1139 = data
  i1138.m_NormalColor = new pc.Color(i1139[0], i1139[1], i1139[2], i1139[3])
  i1138.m_HighlightedColor = new pc.Color(i1139[4], i1139[5], i1139[6], i1139[7])
  i1138.m_PressedColor = new pc.Color(i1139[8], i1139[9], i1139[10], i1139[11])
  i1138.m_SelectedColor = new pc.Color(i1139[12], i1139[13], i1139[14], i1139[15])
  i1138.m_DisabledColor = new pc.Color(i1139[16], i1139[17], i1139[18], i1139[19])
  i1138.m_ColorMultiplier = i1139[20]
  i1138.m_FadeDuration = i1139[21]
  return i1138
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'm_HighlightedSprite')
  request.r(i1141[2], i1141[3], 0, i1140, 'm_PressedSprite')
  request.r(i1141[4], i1141[5], 0, i1140, 'm_SelectedSprite')
  request.r(i1141[6], i1141[7], 0, i1140, 'm_DisabledSprite')
  return i1140
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1143 = data
  i1142.m_NormalTrigger = i1143[0]
  i1142.m_HighlightedTrigger = i1143[1]
  i1142.m_PressedTrigger = i1143[2]
  i1142.m_SelectedTrigger = i1143[3]
  i1142.m_DisabledTrigger = i1143[4]
  return i1142
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'm_FirstSelected')
  i1144.m_sendNavigationEvents = !!i1145[2]
  i1144.m_DragThreshold = i1145[3]
  return i1144
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1147 = data
  i1146.m_HorizontalAxis = i1147[0]
  i1146.m_VerticalAxis = i1147[1]
  i1146.m_SubmitButton = i1147[2]
  i1146.m_CancelButton = i1147[3]
  i1146.m_InputActionsPerSecond = i1147[4]
  i1146.m_RepeatDelay = i1147[5]
  i1146.m_ForceModuleActive = !!i1147[6]
  i1146.m_SendPointerHoverToParent = !!i1147[7]
  return i1146
}

Deserializers["MelonAd.GameConfig"] = function (request, data, root) {
  var i1148 = root || request.c( 'MelonAd.GameConfig' )
  var i1149 = data
  i1148.retries = i1149[0]
  i1148.failPopupDelay = i1149[1]
  i1148.rifleInterval = i1149[2]
  i1148.rifleBurstAfterPin = i1149[3]
  i1148.flameRate = i1149[4]
  i1148.pinTapRadius = i1149[5]
  i1148.showTutorial = !!i1149[6]
  i1148.iosLink = i1149[7]
  i1148.androidLink = i1149[8]
  return i1148
}

Deserializers["MelonAd.AudioManager"] = function (request, data, root) {
  var i1150 = root || request.c( 'MelonAd.AudioManager' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'music')
  request.r(i1151[2], i1151[3], 0, i1150, 'doc')
  request.r(i1151[4], i1151[5], 0, i1150, 'door')
  request.r(i1151[6], i1151[7], 0, i1150, 'fire')
  request.r(i1151[8], i1151[9], 0, i1150, 'flame')
  request.r(i1151[10], i1151[11], 0, i1150, 'hurt')
  request.r(i1151[12], i1151[13], 0, i1150, 'jar')
  request.r(i1151[14], i1151[15], 0, i1150, 'kis')
  request.r(i1151[16], i1151[17], 0, i1150, 'ohog')
  return i1150
}

Deserializers["MelonAd.FxManager"] = function (request, data, root) {
  var i1152 = root || request.c( 'MelonAd.FxManager' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'smoke')
  request.r(i1153[2], i1153[3], 0, i1152, 'flame')
  request.r(i1153[4], i1153[5], 0, i1152, 'blood')
  request.r(i1153[6], i1153[7], 0, i1152, 'spikeShard')
  request.r(i1153[8], i1153[9], 0, i1152, 'bulletShard')
  request.r(i1153[10], i1153[11], 0, i1152, 'bubble')
  i1152.prewarm = i1153[12]
  i1152.sortingOrder = i1153[13]
  return i1152
}

Deserializers["MelonAd.GameManager"] = function (request, data, root) {
  var i1154 = root || request.c( 'MelonAd.GameManager' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'level')
  request.r(i1155[2], i1155[3], 0, i1154, 'zoomRoot')
  request.r(i1155[4], i1155[5], 0, i1154, 'cam')
  request.r(i1155[6], i1155[7], 0, i1154, 'ui')
  request.r(i1155[8], i1155[9], 0, i1154, 'tapFinger')
  request.r(i1155[10], i1155[11], 0, i1154, 'dragFinger')
  request.r(i1155[12], i1155[13], 0, i1154, 'dragFingerSprite')
  i1154.pickMask = UnityEngine.LayerMask.FromIntegerValue( i1155[14] )
  i1154.winZoom = i1155[15]
  i1154.winFocus = new pc.Vec2( i1155[16], i1155[17] )
  i1154.winZoomDuration = i1155[18]
  i1154.dragFrequency = i1155[19]
  i1154.dragDamping = i1155[20]
  i1154.dragMaxForce = i1155[21]
  i1154.tapFingerOffset = new pc.Vec2( i1155[22], i1155[23] )
  return i1154
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1156 = root || request.c( 'LunaController' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'BGTexture')
  i1156.UseTime = !!i1157[2]
  i1156.TimePlay = i1157[3]
  i1156.Character = i1157[4]
  request.r(i1157[5], i1157[6], 0, i1156, 'characterSelector')
  request.r(i1157[7], i1157[8], 0, i1156, 'BGImage')
  var i1159 = i1157[9]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 1, i1158, '')
  }
  i1156.CTA = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1163 = data
  i1162.ambientIntensity = i1163[0]
  i1162.reflectionIntensity = i1163[1]
  i1162.ambientMode = i1163[2]
  i1162.ambientLight = new pc.Color(i1163[3], i1163[4], i1163[5], i1163[6])
  i1162.ambientSkyColor = new pc.Color(i1163[7], i1163[8], i1163[9], i1163[10])
  i1162.ambientGroundColor = new pc.Color(i1163[11], i1163[12], i1163[13], i1163[14])
  i1162.ambientEquatorColor = new pc.Color(i1163[15], i1163[16], i1163[17], i1163[18])
  i1162.fogColor = new pc.Color(i1163[19], i1163[20], i1163[21], i1163[22])
  i1162.fogEndDistance = i1163[23]
  i1162.fogStartDistance = i1163[24]
  i1162.fogDensity = i1163[25]
  i1162.fog = !!i1163[26]
  request.r(i1163[27], i1163[28], 0, i1162, 'skybox')
  i1162.fogMode = i1163[29]
  var i1165 = i1163[30]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1165[i + 0]) );
  }
  i1162.lightmaps = i1164
  i1162.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1163[31], i1162.lightProbes)
  i1162.lightmapsMode = i1163[32]
  i1162.mixedBakeMode = i1163[33]
  i1162.environmentLightingMode = i1163[34]
  i1162.ambientProbe = new pc.SphericalHarmonicsL2(i1163[35])
  request.r(i1163[36], i1163[37], 0, i1162, 'customReflection')
  request.r(i1163[38], i1163[39], 0, i1162, 'defaultReflection')
  i1162.defaultReflectionMode = i1163[40]
  i1162.defaultReflectionResolution = i1163[41]
  i1162.sunLightObjectId = i1163[42]
  i1162.pixelLightCount = i1163[43]
  i1162.defaultReflectionHDR = !!i1163[44]
  i1162.hasLightDataAsset = !!i1163[45]
  i1162.hasManualGenerate = !!i1163[46]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'lightmapColor')
  request.r(i1169[2], i1169[3], 0, i1168, 'lightmapDirection')
  request.r(i1169[4], i1169[5], 0, i1168, 'shadowMask')
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1170 = root || new UnityEngine.LightProbes()
  var i1171 = data
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.bounciness = i1179[1]
  i1178.friction = i1179[2]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1183[i + 0]));
  }
  i1180.ShaderCompilationErrors = i1182
  i1180.name = i1181[1]
  i1180.guid = i1181[2]
  var i1185 = i1181[3]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1180.shaderDefinedKeywords = i1184
  var i1187 = i1181[4]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1187[i + 0]) );
  }
  i1180.passes = i1186
  var i1189 = i1181[5]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1189[i + 0]) );
  }
  i1180.usePasses = i1188
  var i1191 = i1181[6]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1191[i + 0]) );
  }
  i1180.defaultParameterValues = i1190
  request.r(i1181[7], i1181[8], 0, i1180, 'unityFallbackShader')
  i1180.readDepth = !!i1181[9]
  i1180.hasDepthOnlyPass = !!i1181[10]
  i1180.isCreatedByShaderGraph = !!i1181[11]
  i1180.disableBatching = !!i1181[12]
  i1180.compiled = !!i1181[13]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1195 = data
  i1194.shaderName = i1195[0]
  i1194.errorMessage = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1200 = root || new pc.UnityShaderPass()
  var i1201 = data
  i1200.id = i1201[0]
  i1200.subShaderIndex = i1201[1]
  i1200.name = i1201[2]
  i1200.passType = i1201[3]
  i1200.grabPassTextureName = i1201[4]
  i1200.usePass = !!i1201[5]
  i1200.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[6], i1200.zTest)
  i1200.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[7], i1200.zWrite)
  i1200.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[8], i1200.culling)
  i1200.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1201[9], i1200.blending)
  i1200.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1201[10], i1200.alphaBlending)
  i1200.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[11], i1200.colorWriteMask)
  i1200.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[12], i1200.offsetUnits)
  i1200.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[13], i1200.offsetFactor)
  i1200.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[14], i1200.stencilRef)
  i1200.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[15], i1200.stencilReadMask)
  i1200.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1201[16], i1200.stencilWriteMask)
  i1200.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1201[17], i1200.stencilOp)
  i1200.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1201[18], i1200.stencilOpFront)
  i1200.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1201[19], i1200.stencilOpBack)
  var i1203 = i1201[20]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1203[i + 0]) );
  }
  i1200.tags = i1202
  var i1205 = i1201[21]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1200.passDefinedKeywords = i1204
  var i1207 = i1201[22]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1207[i + 0]) );
  }
  i1200.passDefinedKeywordGroups = i1206
  var i1209 = i1201[23]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1209[i + 0]) );
  }
  i1200.variants = i1208
  var i1211 = i1201[24]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1211[i + 0]) );
  }
  i1200.excludedVariants = i1210
  i1200.hasDepthReader = !!i1201[25]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1213 = data
  i1212.val = i1213[0]
  i1212.name = i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1215 = data
  i1214.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1215[0], i1214.src)
  i1214.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1215[1], i1214.dst)
  i1214.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1215[2], i1214.op)
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1217 = data
  i1216.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[0], i1216.pass)
  i1216.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[1], i1216.fail)
  i1216.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[2], i1216.zFail)
  i1216.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1217[3], i1216.comp)
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.value = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1224.keywords = i1226
  i1224.hasDiscard = !!i1225[1]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1231 = data
  i1230.passId = i1231[0]
  i1230.subShaderIndex = i1231[1]
  var i1233 = i1231[2]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( i1233[i + 0] );
  }
  i1230.keywords = i1232
  i1230.vertexProgram = i1231[3]
  i1230.fragmentProgram = i1231[4]
  i1230.exportedForWebGl2 = !!i1231[5]
  i1230.readDepth = !!i1231[6]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'shader')
  i1236.pass = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.type = i1241[1]
  i1240.value = new pc.Vec4( i1241[2], i1241[3], i1241[4], i1241[5] )
  i1240.textureValue = i1241[6]
  i1240.shaderPropertyFlag = i1241[7]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1243 = data
  i1242.name = i1243[0]
  request.r(i1243[1], i1243[2], 0, i1242, 'texture')
  i1242.aabb = i1243[3]
  i1242.vertices = i1243[4]
  i1242.triangles = i1243[5]
  i1242.textureRect = UnityEngine.Rect.MinMaxRect(i1243[6], i1243[7], i1243[8], i1243[9])
  i1242.packedRect = UnityEngine.Rect.MinMaxRect(i1243[10], i1243[11], i1243[12], i1243[13])
  i1242.border = new pc.Vec4( i1243[14], i1243[15], i1243[16], i1243[17] )
  i1242.transparency = i1243[18]
  i1242.bounds = i1243[19]
  i1242.pixelsPerUnit = i1243[20]
  i1242.textureWidth = i1243[21]
  i1242.textureHeight = i1243[22]
  i1242.nativeSize = new pc.Vec2( i1243[23], i1243[24] )
  i1242.pivot = new pc.Vec2( i1243[25], i1243[26] )
  i1242.textureRectOffset = new pc.Vec2( i1243[27], i1243[28] )
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1245 = data
  i1244.name = i1245[0]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1249[i + 0]) );
  }
  i1246.files = i1248
  i1246.componentToPrefabIds = i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1253 = data
  i1252.path = i1253[0]
  request.r(i1253[1], i1253[2], 0, i1252, 'unityObject')
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1257[i + 0]) );
  }
  i1254.scriptsExecutionOrder = i1256
  var i1259 = i1255[1]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1259[i + 0]) );
  }
  i1254.sortingLayers = i1258
  var i1261 = i1255[2]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1261[i + 0]) );
  }
  i1254.cullingLayers = i1260
  i1254.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1255[3], i1254.timeSettings)
  i1254.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1255[4], i1254.physicsSettings)
  i1254.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1255[5], i1254.physics2DSettings)
  i1254.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1255[6], i1254.qualitySettings)
  i1254.enableRealtimeShadows = !!i1255[7]
  i1254.enableAutoInstancing = !!i1255[8]
  i1254.enableStaticBatching = !!i1255[9]
  i1254.enableDynamicBatching = !!i1255[10]
  i1254.usePreservativeDynamicBatching = !!i1255[11]
  i1254.lightmapEncodingQuality = i1255[12]
  i1254.desiredColorSpace = i1255[13]
  var i1263 = i1255[14]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1254.allTags = i1262
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.value = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.name = i1271[1]
  i1270.value = i1271[2]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1275 = data
  i1274.id = i1275[0]
  i1274.name = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1277 = data
  i1276.fixedDeltaTime = i1277[0]
  i1276.maximumDeltaTime = i1277[1]
  i1276.timeScale = i1277[2]
  i1276.maximumParticleTimestep = i1277[3]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1279 = data
  i1278.gravity = new pc.Vec3( i1279[0], i1279[1], i1279[2] )
  i1278.defaultSolverIterations = i1279[3]
  i1278.bounceThreshold = i1279[4]
  i1278.autoSyncTransforms = !!i1279[5]
  i1278.autoSimulation = !!i1279[6]
  var i1281 = i1279[7]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'material')
  i1286.gravity = new pc.Vec2( i1287[2], i1287[3] )
  i1286.positionIterations = i1287[4]
  i1286.velocityIterations = i1287[5]
  i1286.velocityThreshold = i1287[6]
  i1286.maxLinearCorrection = i1287[7]
  i1286.maxAngularCorrection = i1287[8]
  i1286.maxTranslationSpeed = i1287[9]
  i1286.maxRotationSpeed = i1287[10]
  i1286.baumgarteScale = i1287[11]
  i1286.baumgarteTOIScale = i1287[12]
  i1286.timeToSleep = i1287[13]
  i1286.linearSleepTolerance = i1287[14]
  i1286.angularSleepTolerance = i1287[15]
  i1286.defaultContactOffset = i1287[16]
  i1286.autoSimulation = !!i1287[17]
  i1286.queriesHitTriggers = !!i1287[18]
  i1286.queriesStartInColliders = !!i1287[19]
  i1286.callbacksOnDisable = !!i1287[20]
  i1286.reuseCollisionCallbacks = !!i1287[21]
  i1286.autoSyncTransforms = !!i1287[22]
  var i1289 = i1287[23]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1289[i + 0]) );
  }
  i1286.collisionMatrix = i1288
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1293 = data
  i1292.enabled = !!i1293[0]
  i1292.layerId = i1293[1]
  i1292.otherLayerId = i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1297[i + 0]) );
  }
  i1294.qualityLevels = i1296
  var i1299 = i1295[1]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1294.names = i1298
  i1294.shadows = i1295[2]
  i1294.anisotropicFiltering = i1295[3]
  i1294.antiAliasing = i1295[4]
  i1294.lodBias = i1295[5]
  i1294.shadowCascades = i1295[6]
  i1294.shadowDistance = i1295[7]
  i1294.shadowmaskMode = i1295[8]
  i1294.shadowProjection = i1295[9]
  i1294.shadowResolution = i1295[10]
  i1294.softParticles = !!i1295[11]
  i1294.softVegetation = !!i1295[12]
  i1294.activeColorSpace = i1295[13]
  i1294.desiredColorSpace = i1295[14]
  i1294.masterTextureLimit = i1295[15]
  i1294.maxQueuedFrames = i1295[16]
  i1294.particleRaycastBudget = i1295[17]
  i1294.pixelLightCount = i1295[18]
  i1294.realtimeReflectionProbes = !!i1295[19]
  i1294.shadowCascade2Split = i1295[20]
  i1294.shadowCascade4Split = new pc.Vec3( i1295[21], i1295[22], i1295[23] )
  i1294.streamingMipmapsActive = !!i1295[24]
  i1294.vSyncCount = i1295[25]
  i1294.asyncUploadBufferSize = i1295[26]
  i1294.asyncUploadTimeSlice = i1295[27]
  i1294.billboardsFaceCameraPosition = !!i1295[28]
  i1294.shadowNearPlaneOffset = i1295[29]
  i1294.streamingMipmapsMemoryBudget = i1295[30]
  i1294.maximumLODLevel = i1295[31]
  i1294.streamingMipmapsAddAllCameras = !!i1295[32]
  i1294.streamingMipmapsMaxLevelReduction = i1295[33]
  i1294.streamingMipmapsRenderersPerFrame = i1295[34]
  i1294.resolutionScalingFixedDPIFactor = i1295[35]
  i1294.streamingMipmapsMaxFileIORequests = i1295[36]
  i1294.currentQualityLevel = i1295[37]
  return i1294
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'm_ObjectArgument')
  i1302.m_ObjectArgumentAssemblyTypeName = i1303[2]
  i1302.m_IntArgument = i1303[3]
  i1302.m_FloatArgument = i1303[4]
  i1302.m_StringArgument = i1303[5]
  i1302.m_BoolArgument = !!i1303[6]
  return i1302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[13],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"41":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[82],"83":[84],"85":[84],"21":[18],"15":[13],"86":[3],"87":[13],"88":[89],"90":[43],"91":[21],"92":[18],"93":[26,18],"94":[82],"95":[26,18],"96":[18],"97":[18],"98":[82,18],"99":[18,26],"100":[101],"102":[101],"103":[101],"104":[18],"105":[18],"24":[21],"42":[26,18],"25":[18],"23":[21],"106":[18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"28":[26,18],"115":[18],"116":[18],"117":[18],"118":[18],"119":[26,18],"120":[18],"121":[43],"122":[43],"44":[43],"123":[43],"124":[13],"125":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.MonoBehaviour","MelonAd.Bullet","UnityEngine.CircleCollider2D","MelonAd.FlameParticle","UnityEngine.Camera","UnityEngine.AudioListener","MelonAd.CameraFit","MelonAd.UIController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.CanvasRenderer","MelonAd.UICover","UnityEngine.UI.RawImage","MelonAd.LevelRefs","MelonAd.Ragdoll","MelonAd.Rifle","MelonAd.FlameThrower","MelonAd.Pin","MelonAd.ExitZone","MelonAd.Grabbable","MelonAd.Spike","MelonAd.Acid","MelonAd.CharacterSelector","MelonAd.RagdollPart","UnityEngine.SpriteMask","UnityEngine.HingeJoint2D","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","MelonAd.GameConfig","MelonAd.AudioManager","UnityEngine.AudioClip","MelonAd.FxManager","MelonAd.GameManager","LunaController","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "09/30/2026 04:31:40";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRP_V05";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "a61c0c19-eb6d-4e6f-adf3-6bdad553cca8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

