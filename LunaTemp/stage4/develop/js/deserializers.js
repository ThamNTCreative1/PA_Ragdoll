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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i983 = data
  i982.name = i983[0]
  i982.width = i983[1]
  i982.height = i983[2]
  i982.mipmapCount = i983[3]
  i982.anisoLevel = i983[4]
  i982.filterMode = i983[5]
  i982.hdr = !!i983[6]
  i982.format = i983[7]
  i982.wrapMode = i983[8]
  i982.alphaIsTransparency = !!i983[9]
  i982.alphaSource = i983[10]
  i982.graphicsFormat = i983[11]
  i982.sRGBTexture = !!i983[12]
  i982.desiredColorSpace = i983[13]
  i982.wrapU = i983[14]
  i982.wrapV = i983[15]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i984 = root || new pc.UnityMaterial()
  var i985 = data
  i984.name = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'shader')
  i984.renderQueue = i985[3]
  i984.enableInstancing = !!i985[4]
  var i987 = i985[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i987[i + 0]) );
  }
  i984.floatParameters = i986
  var i989 = i985[6]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i989[i + 0]) );
  }
  i984.colorParameters = i988
  var i991 = i985[7]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i991[i + 0]) );
  }
  i984.vectorParameters = i990
  var i993 = i985[8]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i993[i + 0]) );
  }
  i984.textureParameters = i992
  var i995 = i985[9]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i995[i + 0]) );
  }
  i984.materialFlags = i994
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = new pc.Color(i1003[1], i1003[2], i1003[3], i1003[4])
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = new pc.Vec4( i1007[1], i1007[2], i1007[3], i1007[4] )
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1011 = data
  i1010.name = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'value')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.enabled = !!i1015[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1025 = data
  i1024.radius = i1025[0]
  i1024.enabled = !!i1025[1]
  i1024.isTrigger = !!i1025[2]
  i1024.usedByEffector = !!i1025[3]
  i1024.density = i1025[4]
  i1024.offset = new pc.Vec2( i1025[5], i1025[6] )
  request.r(i1025[7], i1025[8], 0, i1024, 'material')
  return i1024
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1026 = root || request.c( 'BulletController' )
  var i1027 = data
  i1026.speed = i1027[0]
  i1026.damage = i1027[1]
  request.r(i1027[2], i1027[3], 0, i1026, 'hitMonsterSound')
  request.r(i1027[4], i1027[5], 0, i1026, 'hitSound')
  i1026.lifeTime = i1027[6]
  i1026.hit = !!i1027[7]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.tagId = i1029[1]
  i1028.enabled = !!i1029[2]
  i1028.isStatic = !!i1029[3]
  i1028.layer = i1029[4]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1031 = data
  i1030.sortingLayerIndex = i1031[0]
  i1030.sortingOrder = i1031[1]
  i1030.sortingLayerName = i1031[2]
  i1030.enabled = !!i1031[3]
  return i1030
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1032 = root || request.c( 'MonsterController' )
  var i1033 = data
  i1032.maxHP = i1033[0]
  i1032.currentHP = i1033[1]
  var i1035 = i1033[2]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('Piece', i1035[i + 0]));
  }
  i1032.pieces = i1034
  request.r(i1033[3], i1033[4], 0, i1032, 'deadSFX')
  i1032.maxForce = new pc.Vec2( i1033[5], i1033[6] )
  i1032.minForce = new pc.Vec2( i1033[7], i1033[8] )
  request.r(i1033[9], i1033[10], 0, i1032, 'balance')
  i1032.isDead = !!i1033[11]
  return i1032
}

Deserializers["Piece"] = function (request, data, root) {
  var i1038 = root || request.c( 'Piece' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'Joint')
  request.r(i1039[2], i1039[3], 0, i1038, 'Rb')
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1041 = data
  i1040.bodyType = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'material')
  i1040.simulated = !!i1041[3]
  i1040.useAutoMass = !!i1041[4]
  i1040.mass = i1041[5]
  i1040.drag = i1041[6]
  i1040.angularDrag = i1041[7]
  i1040.gravityScale = i1041[8]
  i1040.collisionDetectionMode = i1041[9]
  i1040.sleepMode = i1041[10]
  i1040.constraints = i1041[11]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1043 = data
  i1042.usedByComposite = !!i1043[0]
  i1042.autoTiling = !!i1043[1]
  i1042.size = new pc.Vec2( i1043[2], i1043[3] )
  i1042.edgeRadius = i1043[4]
  i1042.enabled = !!i1043[5]
  i1042.isTrigger = !!i1043[6]
  i1042.usedByEffector = !!i1043[7]
  i1042.density = i1043[8]
  i1042.offset = new pc.Vec2( i1043[9], i1043[10] )
  request.r(i1043[11], i1043[12], 0, i1042, 'material')
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1045 = data
  i1044.useLimits = !!i1045[0]
  i1044.limits = request.d('UnityEngine.JointAngleLimits2D', i1045[1], i1044.limits)
  i1044.useMotor = !!i1045[2]
  i1044.motor = request.d('UnityEngine.JointMotor2D', i1045[3], i1044.motor)
  i1044.anchor = new pc.Vec2( i1045[4], i1045[5] )
  i1044.connectedAnchor = new pc.Vec2( i1045[6], i1045[7] )
  i1044.autoConfigureConnectedAnchor = !!i1045[8]
  request.r(i1045[9], i1045[10], 0, i1044, 'connectedBody')
  i1044.breakForce = i1045[11]
  i1044.breakTorque = i1045[12]
  i1044.enableCollision = !!i1045[13]
  i1044.enabled = !!i1045[14]
  return i1044
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1046 = root || request.c( 'BalanceController' )
  var i1047 = data
  i1046.targetRotation = i1047[0]
  i1046.force = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.index = i1049[1]
  i1048.startup = !!i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1051 = data
  i1050.aspect = i1051[0]
  i1050.orthographic = !!i1051[1]
  i1050.orthographicSize = i1051[2]
  i1050.backgroundColor = new pc.Color(i1051[3], i1051[4], i1051[5], i1051[6])
  i1050.nearClipPlane = i1051[7]
  i1050.farClipPlane = i1051[8]
  i1050.fieldOfView = i1051[9]
  i1050.depth = i1051[10]
  i1050.clearFlags = i1051[11]
  i1050.cullingMask = i1051[12]
  i1050.rect = i1051[13]
  request.r(i1051[14], i1051[15], 0, i1050, 'targetTexture')
  i1050.usePhysicalProperties = !!i1051[16]
  i1050.focalLength = i1051[17]
  i1050.sensorSize = new pc.Vec2( i1051[18], i1051[19] )
  i1050.lensShift = new pc.Vec2( i1051[20], i1051[21] )
  i1050.gateFit = i1051[22]
  i1050.commandBufferCount = i1051[23]
  i1050.cameraType = i1051[24]
  i1050.enabled = !!i1051[25]
  return i1050
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'm_FirstSelected')
  i1052.m_sendNavigationEvents = !!i1053[2]
  i1052.m_DragThreshold = i1053[3]
  return i1052
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1055 = data
  i1054.m_HorizontalAxis = i1055[0]
  i1054.m_VerticalAxis = i1055[1]
  i1054.m_SubmitButton = i1055[2]
  i1054.m_CancelButton = i1055[3]
  i1054.m_InputActionsPerSecond = i1055[4]
  i1054.m_RepeatDelay = i1055[5]
  i1054.m_ForceModuleActive = !!i1055[6]
  i1054.m_SendPointerHoverToParent = !!i1055[7]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1057 = data
  i1056.pivot = new pc.Vec2( i1057[0], i1057[1] )
  i1056.anchorMin = new pc.Vec2( i1057[2], i1057[3] )
  i1056.anchorMax = new pc.Vec2( i1057[4], i1057[5] )
  i1056.sizeDelta = new pc.Vec2( i1057[6], i1057[7] )
  i1056.anchoredPosition3D = new pc.Vec3( i1057[8], i1057[9], i1057[10] )
  i1056.rotation = new pc.Quat(i1057[11], i1057[12], i1057[13], i1057[14])
  i1056.scale = new pc.Vec3( i1057[15], i1057[16], i1057[17] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1059 = data
  i1058.planeDistance = i1059[0]
  i1058.referencePixelsPerUnit = i1059[1]
  i1058.isFallbackOverlay = !!i1059[2]
  i1058.renderMode = i1059[3]
  i1058.renderOrder = i1059[4]
  i1058.sortingLayerName = i1059[5]
  i1058.sortingOrder = i1059[6]
  i1058.scaleFactor = i1059[7]
  request.r(i1059[8], i1059[9], 0, i1058, 'worldCamera')
  i1058.overrideSorting = !!i1059[10]
  i1058.pixelPerfect = !!i1059[11]
  i1058.targetDisplay = i1059[12]
  i1058.overridePixelPerfect = !!i1059[13]
  i1058.enabled = !!i1059[14]
  return i1058
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1061 = data
  i1060.m_UiScaleMode = i1061[0]
  i1060.m_ReferencePixelsPerUnit = i1061[1]
  i1060.m_ScaleFactor = i1061[2]
  i1060.m_ReferenceResolution = new pc.Vec2( i1061[3], i1061[4] )
  i1060.m_ScreenMatchMode = i1061[5]
  i1060.m_MatchWidthOrHeight = i1061[6]
  i1060.m_PhysicalUnit = i1061[7]
  i1060.m_FallbackScreenDPI = i1061[8]
  i1060.m_DefaultSpriteDPI = i1061[9]
  i1060.m_DynamicPixelsPerUnit = i1061[10]
  i1060.m_PresetInfoIsWorld = !!i1061[11]
  return i1060
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1063 = data
  i1062.m_IgnoreReversedGraphics = !!i1063[0]
  i1062.m_BlockingObjects = i1063[1]
  i1062.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1063[2] )
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1065 = data
  i1064.cullTransparentMesh = !!i1065[0]
  return i1064
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_Texture')
  i1066.m_UVRect = UnityEngine.Rect.MinMaxRect(i1067[2], i1067[3], i1067[4], i1067[5])
  request.r(i1067[6], i1067[7], 0, i1066, 'm_Material')
  i1066.m_Maskable = !!i1067[8]
  i1066.m_Color = new pc.Color(i1067[9], i1067[10], i1067[11], i1067[12])
  i1066.m_RaycastTarget = !!i1067[13]
  i1066.m_RaycastPadding = new pc.Vec4( i1067[14], i1067[15], i1067[16], i1067[17] )
  return i1066
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1069 = data
  i1068.m_AspectMode = i1069[0]
  i1068.m_AspectRatio = i1069[1]
  return i1068
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.Button' )
  var i1071 = data
  i1070.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1071[0], i1070.m_OnClick)
  i1070.m_Navigation = request.d('UnityEngine.UI.Navigation', i1071[1], i1070.m_Navigation)
  i1070.m_Transition = i1071[2]
  i1070.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1071[3], i1070.m_Colors)
  i1070.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1071[4], i1070.m_SpriteState)
  i1070.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1071[5], i1070.m_AnimationTriggers)
  i1070.m_Interactable = !!i1071[6]
  request.r(i1071[7], i1071[8], 0, i1070, 'm_TargetGraphic')
  return i1070
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1073 = data
  i1072.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1073[0], i1072.m_PersistentCalls)
  return i1072
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('UnityEngine.Events.PersistentCall', i1077[i + 0]));
  }
  i1074.m_Calls = i1076
  return i1074
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'm_Target')
  i1080.m_TargetAssemblyTypeName = i1081[2]
  i1080.m_MethodName = i1081[3]
  i1080.m_Mode = i1081[4]
  i1080.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1081[5], i1080.m_Arguments)
  i1080.m_CallState = i1081[6]
  return i1080
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1083 = data
  i1082.m_Mode = i1083[0]
  i1082.m_WrapAround = !!i1083[1]
  request.r(i1083[2], i1083[3], 0, i1082, 'm_SelectOnUp')
  request.r(i1083[4], i1083[5], 0, i1082, 'm_SelectOnDown')
  request.r(i1083[6], i1083[7], 0, i1082, 'm_SelectOnLeft')
  request.r(i1083[8], i1083[9], 0, i1082, 'm_SelectOnRight')
  return i1082
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1085 = data
  i1084.m_NormalColor = new pc.Color(i1085[0], i1085[1], i1085[2], i1085[3])
  i1084.m_HighlightedColor = new pc.Color(i1085[4], i1085[5], i1085[6], i1085[7])
  i1084.m_PressedColor = new pc.Color(i1085[8], i1085[9], i1085[10], i1085[11])
  i1084.m_SelectedColor = new pc.Color(i1085[12], i1085[13], i1085[14], i1085[15])
  i1084.m_DisabledColor = new pc.Color(i1085[16], i1085[17], i1085[18], i1085[19])
  i1084.m_ColorMultiplier = i1085[20]
  i1084.m_FadeDuration = i1085[21]
  return i1084
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'm_HighlightedSprite')
  request.r(i1087[2], i1087[3], 0, i1086, 'm_PressedSprite')
  request.r(i1087[4], i1087[5], 0, i1086, 'm_SelectedSprite')
  request.r(i1087[6], i1087[7], 0, i1086, 'm_DisabledSprite')
  return i1086
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1089 = data
  i1088.m_NormalTrigger = i1089[0]
  i1088.m_HighlightedTrigger = i1089[1]
  i1088.m_PressedTrigger = i1089[2]
  i1088.m_SelectedTrigger = i1089[3]
  i1088.m_DisabledTrigger = i1089[4]
  return i1088
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.UI.Image' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'm_Sprite')
  i1090.m_Type = i1091[2]
  i1090.m_PreserveAspect = !!i1091[3]
  i1090.m_FillCenter = !!i1091[4]
  i1090.m_FillMethod = i1091[5]
  i1090.m_FillAmount = i1091[6]
  i1090.m_FillClockwise = !!i1091[7]
  i1090.m_FillOrigin = i1091[8]
  i1090.m_UseSpriteMesh = !!i1091[9]
  i1090.m_PixelsPerUnitMultiplier = i1091[10]
  request.r(i1091[11], i1091[12], 0, i1090, 'm_Material')
  i1090.m_Maskable = !!i1091[13]
  i1090.m_Color = new pc.Color(i1091[14], i1091[15], i1091[16], i1091[17])
  i1090.m_RaycastTarget = !!i1091[18]
  i1090.m_RaycastPadding = new pc.Vec4( i1091[19], i1091[20], i1091[21], i1091[22] )
  return i1090
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.UI.Text' )
  var i1093 = data
  i1092.m_FontData = request.d('UnityEngine.UI.FontData', i1093[0], i1092.m_FontData)
  i1092.m_Text = i1093[1]
  request.r(i1093[2], i1093[3], 0, i1092, 'm_Material')
  i1092.m_Maskable = !!i1093[4]
  i1092.m_Color = new pc.Color(i1093[5], i1093[6], i1093[7], i1093[8])
  i1092.m_RaycastTarget = !!i1093[9]
  i1092.m_RaycastPadding = new pc.Vec4( i1093[10], i1093[11], i1093[12], i1093[13] )
  return i1092
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'm_Font')
  i1094.m_FontSize = i1095[2]
  i1094.m_FontStyle = i1095[3]
  i1094.m_BestFit = !!i1095[4]
  i1094.m_MinSize = i1095[5]
  i1094.m_MaxSize = i1095[6]
  i1094.m_Alignment = i1095[7]
  i1094.m_AlignByGeometry = !!i1095[8]
  i1094.m_RichText = !!i1095[9]
  i1094.m_HorizontalOverflow = i1095[10]
  i1094.m_VerticalOverflow = i1095[11]
  i1094.m_LineSpacing = i1095[12]
  return i1094
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1096 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1097 = data
  i1096.targetIsSelf = !!i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'targetGO')
  i1096.tweenTargetIsTargetGO = !!i1097[3]
  i1096.delay = i1097[4]
  i1096.duration = i1097[5]
  i1096.easeType = i1097[6]
  i1096.easeCurve = new pc.AnimationCurve( { keys_flow: i1097[7] } )
  i1096.loopType = i1097[8]
  i1096.loops = i1097[9]
  i1096.id = i1097[10]
  i1096.isRelative = !!i1097[11]
  i1096.isFrom = !!i1097[12]
  i1096.isIndependentUpdate = !!i1097[13]
  i1096.autoKill = !!i1097[14]
  i1096.autoGenerate = !!i1097[15]
  i1096.isActive = !!i1097[16]
  i1096.isValid = !!i1097[17]
  request.r(i1097[18], i1097[19], 0, i1096, 'target')
  i1096.animationType = i1097[20]
  i1096.targetType = i1097[21]
  i1096.forcedTargetType = i1097[22]
  i1096.autoPlay = !!i1097[23]
  i1096.useTargetAsV3 = !!i1097[24]
  i1096.endValueFloat = i1097[25]
  i1096.endValueV3 = new pc.Vec3( i1097[26], i1097[27], i1097[28] )
  i1096.endValueV2 = new pc.Vec2( i1097[29], i1097[30] )
  i1096.endValueColor = new pc.Color(i1097[31], i1097[32], i1097[33], i1097[34])
  i1096.endValueString = i1097[35]
  i1096.endValueRect = UnityEngine.Rect.MinMaxRect(i1097[36], i1097[37], i1097[38], i1097[39])
  request.r(i1097[40], i1097[41], 0, i1096, 'endValueTransform')
  i1096.optionalBool0 = !!i1097[42]
  i1096.optionalBool1 = !!i1097[43]
  i1096.optionalFloat0 = i1097[44]
  i1096.optionalInt0 = i1097[45]
  i1096.optionalRotationMode = i1097[46]
  i1096.optionalScrambleMode = i1097[47]
  i1096.optionalShakeRandomnessMode = i1097[48]
  i1096.optionalString = i1097[49]
  i1096.updateType = i1097[50]
  i1096.isSpeedBased = !!i1097[51]
  i1096.hasOnStart = !!i1097[52]
  i1096.hasOnPlay = !!i1097[53]
  i1096.hasOnUpdate = !!i1097[54]
  i1096.hasOnStepComplete = !!i1097[55]
  i1096.hasOnComplete = !!i1097[56]
  i1096.hasOnTweenCreated = !!i1097[57]
  i1096.hasOnRewind = !!i1097[58]
  i1096.onStart = request.d('UnityEngine.Events.UnityEvent', i1097[59], i1096.onStart)
  i1096.onPlay = request.d('UnityEngine.Events.UnityEvent', i1097[60], i1096.onPlay)
  i1096.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1097[61], i1096.onUpdate)
  i1096.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1097[62], i1096.onStepComplete)
  i1096.onComplete = request.d('UnityEngine.Events.UnityEvent', i1097[63], i1096.onComplete)
  i1096.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1097[64], i1096.onTweenCreated)
  i1096.onRewind = request.d('UnityEngine.Events.UnityEvent', i1097[65], i1096.onRewind)
  return i1096
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1099 = data
  i1098.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1099[0], i1098.m_PersistentCalls)
  return i1098
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1100 = root || request.c( 'PlayerController' )
  var i1101 = data
  i1100.ShootCD = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, 'currentMonster')
  request.r(i1101[3], i1101[4], 0, i1100, 'left')
  request.r(i1101[5], i1101[6], 0, i1100, 'right')
  request.r(i1101[7], i1101[8], 0, i1100, 'gun')
  request.r(i1101[9], i1101[10], 0, i1100, 'bulletPrefab')
  i1100.canShoot = !!i1101[11]
  i1100.onCD = !!i1101[12]
  request.r(i1101[13], i1101[14], 0, i1100, 'poolParent')
  request.r(i1101[15], i1101[16], 0, i1100, 'shootSound')
  i1100.timeMotor = i1101[17]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1103 = data
  i1102.autoConfigureTarget = !!i1103[0]
  i1102.target = new pc.Vec2( i1103[1], i1103[2] )
  i1102.anchor = new pc.Vec2( i1103[3], i1103[4] )
  i1102.maxForce = i1103[5]
  i1102.dampingRatio = i1103[6]
  i1102.frequency = i1103[7]
  request.r(i1103[8], i1103[9], 0, i1102, 'connectedBody')
  i1102.breakForce = i1103[10]
  i1102.breakTorque = i1103[11]
  i1102.enableCollision = !!i1103[12]
  i1102.enabled = !!i1103[13]
  return i1102
}

Deserializers["GameController"] = function (request, data, root) {
  var i1104 = root || request.c( 'GameController' )
  var i1105 = data
  i1104.OnAddMonster = request.d('System.Action', i1105[0], i1104.OnAddMonster)
  request.r(i1105[1], i1105[2], 0, i1104, 'area')
  request.r(i1105[3], i1105[4], 0, i1104, 'player')
  request.r(i1105[5], i1105[6], 0, i1104, 'areaTut')
  request.r(i1105[7], i1105[8], 0, i1104, 'tut')
  i1104.numMonster = i1105[9]
  var i1107 = i1105[10]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('Monster')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('Monster', i1107[i + 0]));
  }
  i1104.monsters = i1106
  i1104.currentMonster = request.d('Monster', i1105[11], i1104.currentMonster)
  request.r(i1105[12], i1105[13], 0, i1104, 'world')
  request.r(i1105[14], i1105[15], 0, i1104, 'clickSound')
  return i1104
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1108 = root || request.c( 'System.Action' )
  var i1109 = data
  return i1108
}

Deserializers["Monster"] = function (request, data, root) {
  var i1112 = root || request.c( 'Monster' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'Button')
  request.r(i1113[2], i1113[3], 0, i1112, 'Selected')
  request.r(i1113[4], i1113[5], 0, i1112, 'Prefab')
  return i1112
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1114 = root || request.c( 'LayoutController' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'main')
  request.r(i1115[2], i1115[3], 0, i1114, 'button')
  return i1114
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1116 = root || request.c( 'LunaController' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'BGTexture')
  i1116.UseTime = !!i1117[2]
  i1116.TimePlay = i1117[3]
  i1116.UseCountPlay = !!i1117[4]
  i1116.MaxCountPlay = i1117[5]
  request.r(i1117[6], i1117[7], 0, i1116, 'BGImage')
  var i1119 = i1117[8]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1116.CTA = i1118
  i1116.count = i1117[9]
  return i1116
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1122 = root || request.c( 'AudioController' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'BGM')
  request.r(i1123[2], i1123[3], 0, i1122, 'musicSource')
  request.r(i1123[4], i1123[5], 0, i1122, 'pool')
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'clip')
  request.r(i1125[2], i1125[3], 0, i1124, 'outputAudioMixerGroup')
  i1124.playOnAwake = !!i1125[4]
  i1124.loop = !!i1125[5]
  i1124.time = i1125[6]
  i1124.volume = i1125[7]
  i1124.pitch = i1125[8]
  i1124.enabled = !!i1125[9]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1127 = data
  i1126.ambientIntensity = i1127[0]
  i1126.reflectionIntensity = i1127[1]
  i1126.ambientMode = i1127[2]
  i1126.ambientLight = new pc.Color(i1127[3], i1127[4], i1127[5], i1127[6])
  i1126.ambientSkyColor = new pc.Color(i1127[7], i1127[8], i1127[9], i1127[10])
  i1126.ambientGroundColor = new pc.Color(i1127[11], i1127[12], i1127[13], i1127[14])
  i1126.ambientEquatorColor = new pc.Color(i1127[15], i1127[16], i1127[17], i1127[18])
  i1126.fogColor = new pc.Color(i1127[19], i1127[20], i1127[21], i1127[22])
  i1126.fogEndDistance = i1127[23]
  i1126.fogStartDistance = i1127[24]
  i1126.fogDensity = i1127[25]
  i1126.fog = !!i1127[26]
  request.r(i1127[27], i1127[28], 0, i1126, 'skybox')
  i1126.fogMode = i1127[29]
  var i1129 = i1127[30]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1129[i + 0]) );
  }
  i1126.lightmaps = i1128
  i1126.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1127[31], i1126.lightProbes)
  i1126.lightmapsMode = i1127[32]
  i1126.mixedBakeMode = i1127[33]
  i1126.environmentLightingMode = i1127[34]
  i1126.ambientProbe = new pc.SphericalHarmonicsL2(i1127[35])
  request.r(i1127[36], i1127[37], 0, i1126, 'customReflection')
  request.r(i1127[38], i1127[39], 0, i1126, 'defaultReflection')
  i1126.defaultReflectionMode = i1127[40]
  i1126.defaultReflectionResolution = i1127[41]
  i1126.sunLightObjectId = i1127[42]
  i1126.pixelLightCount = i1127[43]
  i1126.defaultReflectionHDR = !!i1127[44]
  i1126.hasLightDataAsset = !!i1127[45]
  i1126.hasManualGenerate = !!i1127[46]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'lightmapColor')
  request.r(i1133[2], i1133[3], 0, i1132, 'lightmapDirection')
  request.r(i1133[4], i1133[5], 0, i1132, 'shadowMask')
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1134 = root || new UnityEngine.LightProbes()
  var i1135 = data
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1145[i + 0]));
  }
  i1142.ShaderCompilationErrors = i1144
  i1142.name = i1143[1]
  i1142.guid = i1143[2]
  var i1147 = i1143[3]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1142.shaderDefinedKeywords = i1146
  var i1149 = i1143[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1149[i + 0]) );
  }
  i1142.passes = i1148
  var i1151 = i1143[5]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1151[i + 0]) );
  }
  i1142.usePasses = i1150
  var i1153 = i1143[6]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1153[i + 0]) );
  }
  i1142.defaultParameterValues = i1152
  request.r(i1143[7], i1143[8], 0, i1142, 'unityFallbackShader')
  i1142.readDepth = !!i1143[9]
  i1142.hasDepthOnlyPass = !!i1143[10]
  i1142.isCreatedByShaderGraph = !!i1143[11]
  i1142.disableBatching = !!i1143[12]
  i1142.compiled = !!i1143[13]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1157 = data
  i1156.shaderName = i1157[0]
  i1156.errorMessage = i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1162 = root || new pc.UnityShaderPass()
  var i1163 = data
  i1162.id = i1163[0]
  i1162.subShaderIndex = i1163[1]
  i1162.name = i1163[2]
  i1162.passType = i1163[3]
  i1162.grabPassTextureName = i1163[4]
  i1162.usePass = !!i1163[5]
  i1162.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[6], i1162.zTest)
  i1162.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[7], i1162.zWrite)
  i1162.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[8], i1162.culling)
  i1162.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1163[9], i1162.blending)
  i1162.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1163[10], i1162.alphaBlending)
  i1162.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[11], i1162.colorWriteMask)
  i1162.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[12], i1162.offsetUnits)
  i1162.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[13], i1162.offsetFactor)
  i1162.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[14], i1162.stencilRef)
  i1162.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[15], i1162.stencilReadMask)
  i1162.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[16], i1162.stencilWriteMask)
  i1162.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[17], i1162.stencilOp)
  i1162.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[18], i1162.stencilOpFront)
  i1162.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1163[19], i1162.stencilOpBack)
  var i1165 = i1163[20]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1165[i + 0]) );
  }
  i1162.tags = i1164
  var i1167 = i1163[21]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1162.passDefinedKeywords = i1166
  var i1169 = i1163[22]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1169[i + 0]) );
  }
  i1162.passDefinedKeywordGroups = i1168
  var i1171 = i1163[23]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1171[i + 0]) );
  }
  i1162.variants = i1170
  var i1173 = i1163[24]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1173[i + 0]) );
  }
  i1162.excludedVariants = i1172
  i1162.hasDepthReader = !!i1163[25]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1175 = data
  i1174.val = i1175[0]
  i1174.name = i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1177 = data
  i1176.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[0], i1176.src)
  i1176.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[1], i1176.dst)
  i1176.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[2], i1176.op)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1179 = data
  i1178.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[0], i1178.pass)
  i1178.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[1], i1178.fail)
  i1178.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[2], i1178.zFail)
  i1178.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1179[3], i1178.comp)
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.value = i1183[1]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1186.keywords = i1188
  i1186.hasDiscard = !!i1187[1]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1193 = data
  i1192.passId = i1193[0]
  i1192.subShaderIndex = i1193[1]
  var i1195 = i1193[2]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1192.keywords = i1194
  i1192.vertexProgram = i1193[3]
  i1192.fragmentProgram = i1193[4]
  i1192.exportedForWebGl2 = !!i1193[5]
  i1192.readDepth = !!i1193[6]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'shader')
  i1198.pass = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.type = i1203[1]
  i1202.value = new pc.Vec4( i1203[2], i1203[3], i1203[4], i1203[5] )
  i1202.textureValue = i1203[6]
  i1202.shaderPropertyFlag = i1203[7]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1205 = data
  i1204.name = i1205[0]
  request.r(i1205[1], i1205[2], 0, i1204, 'texture')
  i1204.aabb = i1205[3]
  i1204.vertices = i1205[4]
  i1204.triangles = i1205[5]
  i1204.textureRect = UnityEngine.Rect.MinMaxRect(i1205[6], i1205[7], i1205[8], i1205[9])
  i1204.packedRect = UnityEngine.Rect.MinMaxRect(i1205[10], i1205[11], i1205[12], i1205[13])
  i1204.border = new pc.Vec4( i1205[14], i1205[15], i1205[16], i1205[17] )
  i1204.transparency = i1205[18]
  i1204.bounds = i1205[19]
  i1204.pixelsPerUnit = i1205[20]
  i1204.textureWidth = i1205[21]
  i1204.textureHeight = i1205[22]
  i1204.nativeSize = new pc.Vec2( i1205[23], i1205[24] )
  i1204.pivot = new pc.Vec2( i1205[25], i1205[26] )
  i1204.textureRectOffset = new pc.Vec2( i1205[27], i1205[28] )
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1207 = data
  i1206.name = i1207[0]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.ascent = i1209[1]
  i1208.originalLineHeight = i1209[2]
  i1208.fontSize = i1209[3]
  var i1211 = i1209[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1211[i + 0]) );
  }
  i1208.characterInfo = i1210
  request.r(i1209[5], i1209[6], 0, i1208, 'texture')
  i1208.originalFontSize = i1209[7]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1215 = data
  i1214.index = i1215[0]
  i1214.advance = i1215[1]
  i1214.bearing = i1215[2]
  i1214.glyphWidth = i1215[3]
  i1214.glyphHeight = i1215[4]
  i1214.minX = i1215[5]
  i1214.maxX = i1215[6]
  i1214.minY = i1215[7]
  i1214.maxY = i1215[8]
  i1214.uvBottomLeftX = i1215[9]
  i1214.uvBottomLeftY = i1215[10]
  i1214.uvBottomRightX = i1215[11]
  i1214.uvBottomRightY = i1215[12]
  i1214.uvTopLeftX = i1215[13]
  i1214.uvTopLeftY = i1215[14]
  i1214.uvTopRightX = i1215[15]
  i1214.uvTopRightY = i1215[16]
  return i1214
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1216 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1217 = data
  i1216.useSafeMode = !!i1217[0]
  i1216.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1217[1], i1216.safeModeOptions)
  i1216.timeScale = i1217[2]
  i1216.unscaledTimeScale = i1217[3]
  i1216.useSmoothDeltaTime = !!i1217[4]
  i1216.maxSmoothUnscaledTime = i1217[5]
  i1216.rewindCallbackMode = i1217[6]
  i1216.showUnityEditorReport = !!i1217[7]
  i1216.logBehaviour = i1217[8]
  i1216.drawGizmos = !!i1217[9]
  i1216.defaultRecyclable = !!i1217[10]
  i1216.defaultAutoPlay = i1217[11]
  i1216.defaultUpdateType = i1217[12]
  i1216.defaultTimeScaleIndependent = !!i1217[13]
  i1216.defaultEaseType = i1217[14]
  i1216.defaultEaseOvershootOrAmplitude = i1217[15]
  i1216.defaultEasePeriod = i1217[16]
  i1216.defaultAutoKill = !!i1217[17]
  i1216.defaultLoopType = i1217[18]
  i1216.debugMode = !!i1217[19]
  i1216.debugStoreTargetId = !!i1217[20]
  i1216.showPreviewPanel = !!i1217[21]
  i1216.storeSettingsLocation = i1217[22]
  i1216.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1217[23], i1216.modules)
  i1216.createASMDEF = !!i1217[24]
  i1216.showPlayingTweens = !!i1217[25]
  i1216.showPausedTweens = !!i1217[26]
  return i1216
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1219 = data
  i1218.logBehaviour = i1219[0]
  i1218.nestedTweenFailureBehaviour = i1219[1]
  return i1218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1221 = data
  i1220.showPanel = !!i1221[0]
  i1220.audioEnabled = !!i1221[1]
  i1220.physicsEnabled = !!i1221[2]
  i1220.physics2DEnabled = !!i1221[3]
  i1220.spriteEnabled = !!i1221[4]
  i1220.uiEnabled = !!i1221[5]
  i1220.textMeshProEnabled = !!i1221[6]
  i1220.tk2DEnabled = !!i1221[7]
  i1220.deAudioEnabled = !!i1221[8]
  i1220.deUnityExtendedEnabled = !!i1221[9]
  i1220.epoOutlineEnabled = !!i1221[10]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[15],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[12],"11":[12],"65":[12],"66":[12],"35":[12],"67":[12],"68":[12],"69":[12],"70":[15],"71":[72],"73":[74],"75":[74],"21":[20],"76":[2],"77":[15],"78":[79],"80":[20],"81":[24,20],"82":[72],"83":[24,20],"84":[20],"85":[20],"86":[72,20],"87":[20,24],"88":[89],"90":[89],"91":[89],"92":[20],"93":[20],"23":[21],"29":[24,20],"27":[20],"22":[21],"94":[20],"95":[20],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"25":[24,20],"103":[20],"104":[20],"105":[20],"106":[20],"30":[24,20],"107":[20],"108":[18],"109":[18],"19":[18],"110":[18],"111":[15],"112":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","UnityEngine.BoxCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","PlayerController","UnityEngine.GameObject","UnityEngine.TargetJoint2D","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.76f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "06/25/2026 07:40:14";

Deserializers.lunaDaysRunning = "4.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V03_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4036";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "4fcfb5cf-b540-4f13-b158-f3f8a5695d09";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

