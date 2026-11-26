var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.JointSpring' )
  var i1027 = data
  i1026.spring = i1027[0]
  i1026.damper = i1027[1]
  i1026.targetPosition = i1027[2]
  return i1026
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.JointMotor' )
  var i1029 = data
  i1028.m_TargetVelocity = i1029[0]
  i1028.m_Force = i1029[1]
  i1028.m_FreeSpin = i1029[2]
  return i1028
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.JointLimits' )
  var i1031 = data
  i1030.m_Min = i1031[0]
  i1030.m_Max = i1031[1]
  i1030.m_Bounciness = i1031[2]
  i1030.m_BounceMinVelocity = i1031[3]
  i1030.m_ContactDistance = i1031[4]
  i1030.minBounce = i1031[5]
  i1030.maxBounce = i1031[6]
  return i1030
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.JointDrive' )
  var i1033 = data
  i1032.m_PositionSpring = i1033[0]
  i1032.m_PositionDamper = i1033[1]
  i1032.m_MaximumForce = i1033[2]
  i1032.m_UseAcceleration = i1033[3]
  return i1032
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1035 = data
  i1034.m_Spring = i1035[0]
  i1034.m_Damper = i1035[1]
  return i1034
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1037 = data
  i1036.m_Limit = i1037[0]
  i1036.m_Bounciness = i1037[1]
  i1036.m_ContactDistance = i1037[2]
  return i1036
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1039 = data
  i1038.m_ExtremumSlip = i1039[0]
  i1038.m_ExtremumValue = i1039[1]
  i1038.m_AsymptoteSlip = i1039[2]
  i1038.m_AsymptoteValue = i1039[3]
  i1038.m_Stiffness = i1039[4]
  return i1038
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1041 = data
  i1040.m_LowerAngle = i1041[0]
  i1040.m_UpperAngle = i1041[1]
  return i1040
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1043 = data
  i1042.m_MotorSpeed = i1043[0]
  i1042.m_MaximumMotorTorque = i1043[1]
  return i1042
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1045 = data
  i1044.m_DampingRatio = i1045[0]
  i1044.m_Frequency = i1045[1]
  i1044.m_Angle = i1045[2]
  return i1044
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1047 = data
  i1046.m_LowerTranslation = i1047[0]
  i1046.m_UpperTranslation = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1048 = root || new pc.UnityMaterial()
  var i1049 = data
  i1048.name = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'shader')
  i1048.renderQueue = i1049[3]
  i1048.enableInstancing = !!i1049[4]
  var i1051 = i1049[5]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1051[i + 0]) );
  }
  i1048.floatParameters = i1050
  var i1053 = i1049[6]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1053[i + 0]) );
  }
  i1048.colorParameters = i1052
  var i1055 = i1049[7]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1055[i + 0]) );
  }
  i1048.vectorParameters = i1054
  var i1057 = i1049[8]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1057[i + 0]) );
  }
  i1048.textureParameters = i1056
  var i1059 = i1049[9]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1059[i + 0]) );
  }
  i1048.materialFlags = i1058
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.value = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = new pc.Color(i1067[1], i1067[2], i1067[3], i1067[4])
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = new pc.Vec4( i1071[1], i1071[2], i1071[3], i1071[4] )
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1075 = data
  i1074.name = i1075[0]
  request.r(i1075[1], i1075[2], 0, i1074, 'value')
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.enabled = !!i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.width = i1081[1]
  i1080.height = i1081[2]
  i1080.mipmapCount = i1081[3]
  i1080.anisoLevel = i1081[4]
  i1080.filterMode = i1081[5]
  i1080.hdr = !!i1081[6]
  i1080.format = i1081[7]
  i1080.wrapMode = i1081[8]
  i1080.alphaIsTransparency = !!i1081[9]
  i1080.alphaSource = i1081[10]
  i1080.graphicsFormat = i1081[11]
  i1080.sRGBTexture = !!i1081[12]
  i1080.desiredColorSpace = i1081[13]
  i1080.wrapU = i1081[14]
  i1080.wrapV = i1081[15]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1083 = data
  i1082.position = new pc.Vec3( i1083[0], i1083[1], i1083[2] )
  i1082.scale = new pc.Vec3( i1083[3], i1083[4], i1083[5] )
  i1082.rotation = new pc.Quat(i1083[6], i1083[7], i1083[8], i1083[9])
  return i1082
}

Deserializers["SspMan"] = function (request, data, root) {
  var i1084 = root || request.c( 'SspMan' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('SspMan+Part', i1087[i + 0]) );
  }
  i1084.parts = i1086
  i1084.footDepth = i1085[1]
  i1084.standForce = i1085[2]
  i1084.xDamping = i1085[3]
  i1084.breakable = !!i1085[4]
  i1084.breakSpeed = i1085[5]
  i1084.hitSpeed = i1085[6]
  i1084.jointsToDie = i1085[7]
  i1084.sortBase = i1085[8]
  return i1084
}

Deserializers["SspMan+Part"] = function (request, data, root) {
  var i1090 = root || request.c( 'SspMan+Part' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'body')
  request.r(i1091[2], i1091[3], 0, i1090, 'joint')
  request.r(i1091[4], i1091[5], 0, i1090, 'col')
  request.r(i1091[6], i1091[7], 0, i1090, 'sr')
  request.r(i1091[8], i1091[9], 0, i1090, 'normal')
  request.r(i1091[10], i1091[11], 0, i1090, 'zombie')
  i1090.forcePoint = new pc.Vec2( i1091[12], i1091[13] )
  i1090.sortOffset = i1091[14]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1093 = data
  i1092.color = new pc.Color(i1093[0], i1093[1], i1093[2], i1093[3])
  request.r(i1093[4], i1093[5], 0, i1092, 'sprite')
  i1092.flipX = !!i1093[6]
  i1092.flipY = !!i1093[7]
  i1092.drawMode = i1093[8]
  i1092.size = new pc.Vec2( i1093[9], i1093[10] )
  i1092.tileMode = i1093[11]
  i1092.adaptiveModeThreshold = i1093[12]
  i1092.maskInteraction = i1093[13]
  i1092.spriteSortPoint = i1093[14]
  i1092.enabled = !!i1093[15]
  request.r(i1093[16], i1093[17], 0, i1092, 'sharedMaterial')
  var i1095 = i1093[18]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.sharedMaterials = i1094
  i1092.receiveShadows = !!i1093[19]
  i1092.shadowCastingMode = i1093[20]
  i1092.sortingLayerID = i1093[21]
  i1092.sortingOrder = i1093[22]
  i1092.lightmapIndex = i1093[23]
  i1092.lightmapSceneIndex = i1093[24]
  i1092.lightmapScaleOffset = new pc.Vec4( i1093[25], i1093[26], i1093[27], i1093[28] )
  i1092.lightProbeUsage = i1093[29]
  i1092.reflectionProbeUsage = i1093[30]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1099 = data
  i1098.bodyType = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'material')
  i1098.simulated = !!i1099[3]
  i1098.useAutoMass = !!i1099[4]
  i1098.mass = i1099[5]
  i1098.drag = i1099[6]
  i1098.angularDrag = i1099[7]
  i1098.gravityScale = i1099[8]
  i1098.collisionDetectionMode = i1099[9]
  i1098.sleepMode = i1099[10]
  i1098.constraints = i1099[11]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1101 = data
  i1100.usedByComposite = !!i1101[0]
  i1100.autoTiling = !!i1101[1]
  i1100.size = new pc.Vec2( i1101[2], i1101[3] )
  i1100.edgeRadius = i1101[4]
  i1100.enabled = !!i1101[5]
  i1100.isTrigger = !!i1101[6]
  i1100.usedByEffector = !!i1101[7]
  i1100.density = i1101[8]
  i1100.offset = new pc.Vec2( i1101[9], i1101[10] )
  request.r(i1101[11], i1101[12], 0, i1100, 'material')
  return i1100
}

Deserializers["SspPartHit"] = function (request, data, root) {
  var i1102 = root || request.c( 'SspPartHit' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'man')
  i1102.index = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.tagId = i1105[1]
  i1104.enabled = !!i1105[2]
  i1104.isStatic = !!i1105[3]
  i1104.layer = i1105[4]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1107 = data
  i1106.useLimits = !!i1107[0]
  i1106.limits = request.d('UnityEngine.JointAngleLimits2D', i1107[1], i1106.limits)
  i1106.useMotor = !!i1107[2]
  i1106.motor = request.d('UnityEngine.JointMotor2D', i1107[3], i1106.motor)
  i1106.anchor = new pc.Vec2( i1107[4], i1107[5] )
  i1106.connectedAnchor = new pc.Vec2( i1107[6], i1107[7] )
  i1106.autoConfigureConnectedAnchor = !!i1107[8]
  request.r(i1107[9], i1107[10], 0, i1106, 'connectedBody')
  i1106.breakForce = i1107[11]
  i1106.breakTorque = i1107[12]
  i1106.enableCollision = !!i1107[13]
  i1106.enabled = !!i1107[14]
  return i1106
}

Deserializers["FxSprite"] = function (request, data, root) {
  var i1108 = root || request.c( 'FxSprite' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'sr')
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.index = i1111[1]
  i1110.startup = !!i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1113 = data
  i1112.aspect = i1113[0]
  i1112.orthographic = !!i1113[1]
  i1112.orthographicSize = i1113[2]
  i1112.backgroundColor = new pc.Color(i1113[3], i1113[4], i1113[5], i1113[6])
  i1112.nearClipPlane = i1113[7]
  i1112.farClipPlane = i1113[8]
  i1112.fieldOfView = i1113[9]
  i1112.depth = i1113[10]
  i1112.clearFlags = i1113[11]
  i1112.cullingMask = i1113[12]
  i1112.rect = i1113[13]
  request.r(i1113[14], i1113[15], 0, i1112, 'targetTexture')
  i1112.usePhysicalProperties = !!i1113[16]
  i1112.focalLength = i1113[17]
  i1112.sensorSize = new pc.Vec2( i1113[18], i1113[19] )
  i1112.lensShift = new pc.Vec2( i1113[20], i1113[21] )
  i1112.gateFit = i1113[22]
  i1112.commandBufferCount = i1113[23]
  i1112.cameraType = i1113[24]
  i1112.enabled = !!i1113[25]
  return i1112
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1114 = root || request.c( 'LayoutController' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'cam')
  request.r(i1115[2], i1115[3], 0, i1114, 'game')
  i1114.size = i1115[4]
  i1114.startPosition = new pc.Vec2( i1115[5], i1115[6] )
  i1114.followOffset = new pc.Vec2( i1115[7], i1115[8] )
  i1114.followSpeed = i1115[9]
  return i1114
}

Deserializers["Snowfall"] = function (request, data, root) {
  var i1116 = root || request.c( 'Snowfall' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1116.flakes = i1118
  i1116.area = UnityEngine.Rect.MinMaxRect(i1117[1], i1117[2], i1117[3], i1117[4])
  i1116.fallSpeed = new pc.Vec2( i1117[5], i1117[6] )
  i1116.sway = i1117[7]
  return i1116
}

Deserializers["Potion"] = function (request, data, root) {
  var i1122 = root || request.c( 'Potion' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'game')
  return i1122
}

Deserializers["FollowHint"] = function (request, data, root) {
  var i1124 = root || request.c( 'FollowHint' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'target')
  i1124.offset = new pc.Vec3( i1125[2], i1125[3], i1125[4] )
  i1124.amplitude = i1125[5]
  i1124.duration = i1125[6]
  return i1124
}

Deserializers["Fx"] = function (request, data, root) {
  var i1126 = root || request.c( 'Fx' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'bloodPrefab')
  request.r(i1127[2], i1127[3], 0, i1126, 'splashPrefab')
  request.r(i1127[4], i1127[5], 0, i1126, 'smokePrefab')
  request.r(i1127[6], i1127[7], 0, i1126, 'pool')
  i1126.bloodBreak = i1127[8]
  i1126.bloodHit = i1127[9]
  i1126.bloodSize = new pc.Vec2( i1127[10], i1127[11] )
  i1126.bloodSpeed = new pc.Vec2( i1127[12], i1127[13] )
  i1126.bloodInherit = i1127[14]
  i1126.bloodLife = i1127[15]
  i1126.gravity = i1127[16]
  i1126.bloodDark = new pc.Color(i1127[17], i1127[18], i1127[19], i1127[20])
  i1126.bloodLight = new pc.Color(i1127[21], i1127[22], i1127[23], i1127[24])
  i1126.splashCount = i1127[25]
  i1126.smokeCount = i1127[26]
  return i1126
}

Deserializers["GameAudio"] = function (request, data, root) {
  var i1128 = root || request.c( 'GameAudio' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1128.voices = i1130
  request.r(i1129[1], i1129[2], 0, i1128, 'ui')
  request.r(i1129[3], i1129[4], 0, i1128, 'hit')
  request.r(i1129[5], i1129[6], 0, i1128, 'breakBone')
  request.r(i1129[7], i1129[8], 0, i1128, 'death')
  request.r(i1129[9], i1129[10], 0, i1128, 'potion')
  request.r(i1129[11], i1129[12], 0, i1128, 'click')
  i1128.hitCooldown = i1129[13]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'clip')
  request.r(i1135[2], i1135[3], 0, i1134, 'outputAudioMixerGroup')
  i1134.playOnAwake = !!i1135[4]
  i1134.loop = !!i1135[5]
  i1134.time = i1135[6]
  i1134.volume = i1135[7]
  i1134.pitch = i1135[8]
  i1134.enabled = !!i1135[9]
  return i1134
}

Deserializers["GameController"] = function (request, data, root) {
  var i1136 = root || request.c( 'GameController' )
  var i1137 = data
  i1136.OnTap = request.d('System.Action', i1137[0], i1136.OnTap)
  request.r(i1137[1], i1137[2], 0, i1136, 'cam')
  request.r(i1137[3], i1137[4], 0, i1136, 'world')
  request.r(i1137[5], i1137[6], 0, i1136, 'playerSpawn')
  var i1139 = i1137[7]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1136.monsterSpawns = i1138
  var i1141 = i1137[8]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1136.skinPrefabs = i1140
  i1136.monsterSkins = i1137[9]
  request.r(i1137[10], i1137[11], 0, i1136, 'potionBody')
  var i1143 = i1137[12]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 2, i1142, '')
  }
  i1136.looseOnZombie = i1142
  request.r(i1137[13], i1137[14], 0, i1136, 'fx')
  request.r(i1137[15], i1137[16], 0, i1136, 'sfx')
  request.r(i1137[17], i1137[18], 0, i1136, 'tut')
  request.r(i1137[19], i1137[20], 0, i1136, 'potionHint')
  var i1145 = i1137[21]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 2, i1144, '')
  }
  i1136.monsterHints = i1144
  request.r(i1137[22], i1137[23], 0, i1136, 'tut2')
  request.r(i1137[24], i1137[25], 0, i1136, 'endUI')
  i1136.playerLayer = i1137[26]
  i1136.followMaxSpeed = i1137[27]
  i1136.dragBounds = UnityEngine.Rect.MinMaxRect(i1137[28], i1137[29], i1137[30], i1137[31])
  i1136.endDelay = i1137[32]
  return i1136
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1146 = root || request.c( 'System.Action' )
  var i1147 = data
  return i1146
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1154 = root || request.c( 'LunaController' )
  var i1155 = data
  i1154.Player = i1155[0]
  i1154.Monster1 = i1155[1]
  i1154.Monster2 = i1155[2]
  i1154.Monster3 = i1155[3]
  i1154.LimitTimePlay = !!i1155[4]
  i1154.TimePlay = i1155[5]
  i1154.LimitClick = !!i1155[6]
  i1154.MaxClick = i1155[7]
  request.r(i1155[8], i1155[9], 0, i1154, 'BGM')
  request.r(i1155[10], i1155[11], 0, i1154, 'BGTexture')
  i1154.CustomWinter = !!i1155[12]
  request.r(i1155[13], i1155[14], 0, i1154, 'LogoTexture')
  i1154.AppName = i1155[15]
  request.r(i1155[16], i1155[17], 0, i1154, 'game')
  request.r(i1155[18], i1155[19], 0, i1154, 'sfx')
  request.r(i1155[20], i1155[21], 0, i1154, 'musicSource')
  i1154.musicVolume = i1155[22]
  request.r(i1155[23], i1155[24], 0, i1154, 'BGImage')
  request.r(i1155[25], i1155[26], 0, i1154, 'mapTheme')
  request.r(i1155[27], i1155[28], 0, i1154, 'logo')
  request.r(i1155[29], i1155[30], 0, i1154, 'nameText')
  var i1157 = i1155[31]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 1, i1156, '')
  }
  i1154.CTA = i1156
  request.r(i1155[32], i1155[33], 0, i1154, 'endCard')
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1161 = data
  i1160.pivot = new pc.Vec2( i1161[0], i1161[1] )
  i1160.anchorMin = new pc.Vec2( i1161[2], i1161[3] )
  i1160.anchorMax = new pc.Vec2( i1161[4], i1161[5] )
  i1160.sizeDelta = new pc.Vec2( i1161[6], i1161[7] )
  i1160.anchoredPosition3D = new pc.Vec3( i1161[8], i1161[9], i1161[10] )
  i1160.rotation = new pc.Quat(i1161[11], i1161[12], i1161[13], i1161[14])
  i1160.scale = new pc.Vec3( i1161[15], i1161[16], i1161[17] )
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1163 = data
  i1162.planeDistance = i1163[0]
  i1162.referencePixelsPerUnit = i1163[1]
  i1162.isFallbackOverlay = !!i1163[2]
  i1162.renderMode = i1163[3]
  i1162.renderOrder = i1163[4]
  i1162.sortingLayerName = i1163[5]
  i1162.sortingOrder = i1163[6]
  i1162.scaleFactor = i1163[7]
  request.r(i1163[8], i1163[9], 0, i1162, 'worldCamera')
  i1162.overrideSorting = !!i1163[10]
  i1162.pixelPerfect = !!i1163[11]
  i1162.targetDisplay = i1163[12]
  i1162.overridePixelPerfect = !!i1163[13]
  i1162.enabled = !!i1163[14]
  return i1162
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1165 = data
  i1164.m_UiScaleMode = i1165[0]
  i1164.m_ReferencePixelsPerUnit = i1165[1]
  i1164.m_ScaleFactor = i1165[2]
  i1164.m_ReferenceResolution = new pc.Vec2( i1165[3], i1165[4] )
  i1164.m_ScreenMatchMode = i1165[5]
  i1164.m_MatchWidthOrHeight = i1165[6]
  i1164.m_PhysicalUnit = i1165[7]
  i1164.m_FallbackScreenDPI = i1165[8]
  i1164.m_DefaultSpriteDPI = i1165[9]
  i1164.m_DynamicPixelsPerUnit = i1165[10]
  i1164.m_PresetInfoIsWorld = !!i1165[11]
  return i1164
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1167 = data
  i1166.m_IgnoreReversedGraphics = !!i1167[0]
  i1166.m_BlockingObjects = i1167[1]
  i1166.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1167[2] )
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1169 = data
  i1168.cullTransparentMesh = !!i1169[0]
  return i1168
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.Image' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'm_Sprite')
  i1170.m_Type = i1171[2]
  i1170.m_PreserveAspect = !!i1171[3]
  i1170.m_FillCenter = !!i1171[4]
  i1170.m_FillMethod = i1171[5]
  i1170.m_FillAmount = i1171[6]
  i1170.m_FillClockwise = !!i1171[7]
  i1170.m_FillOrigin = i1171[8]
  i1170.m_UseSpriteMesh = !!i1171[9]
  i1170.m_PixelsPerUnitMultiplier = i1171[10]
  request.r(i1171[11], i1171[12], 0, i1170, 'm_Material')
  i1170.m_Maskable = !!i1171[13]
  i1170.m_Color = new pc.Color(i1171[14], i1171[15], i1171[16], i1171[17])
  i1170.m_RaycastTarget = !!i1171[18]
  i1170.m_RaycastPadding = new pc.Vec4( i1171[19], i1171[20], i1171[21], i1171[22] )
  return i1170
}

Deserializers["DragZone"] = function (request, data, root) {
  var i1172 = root || request.c( 'DragZone' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'game')
  return i1172
}

Deserializers["UiTween"] = function (request, data, root) {
  var i1174 = root || request.c( 'UiTween' )
  var i1175 = data
  i1174.mode = i1175[0]
  i1174.duration = i1175[1]
  i1174.endScale = i1175[2]
  i1174.endPosition = new pc.Vec2( i1175[3], i1175[4] )
  i1174.endColor = new pc.Color(i1175[5], i1175[6], i1175[7], i1175[8])
  request.r(i1175[9], i1175[10], 0, i1174, 'rect')
  request.r(i1175[11], i1175[12], 0, i1174, 'graphic')
  return i1174
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.UI.Text' )
  var i1177 = data
  i1176.m_FontData = request.d('UnityEngine.UI.FontData', i1177[0], i1176.m_FontData)
  i1176.m_Text = i1177[1]
  request.r(i1177[2], i1177[3], 0, i1176, 'm_Material')
  i1176.m_Maskable = !!i1177[4]
  i1176.m_Color = new pc.Color(i1177[5], i1177[6], i1177[7], i1177[8])
  i1176.m_RaycastTarget = !!i1177[9]
  i1176.m_RaycastPadding = new pc.Vec4( i1177[10], i1177[11], i1177[12], i1177[13] )
  return i1176
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'm_Font')
  i1178.m_FontSize = i1179[2]
  i1178.m_FontStyle = i1179[3]
  i1178.m_BestFit = !!i1179[4]
  i1178.m_MinSize = i1179[5]
  i1178.m_MaxSize = i1179[6]
  i1178.m_Alignment = i1179[7]
  i1178.m_AlignByGeometry = !!i1179[8]
  i1178.m_RichText = !!i1179[9]
  i1178.m_HorizontalOverflow = i1179[10]
  i1178.m_VerticalOverflow = i1179[11]
  i1178.m_LineSpacing = i1179[12]
  return i1178
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.Button' )
  var i1181 = data
  i1180.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1181[0], i1180.m_OnClick)
  i1180.m_Navigation = request.d('UnityEngine.UI.Navigation', i1181[1], i1180.m_Navigation)
  i1180.m_Transition = i1181[2]
  i1180.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1181[3], i1180.m_Colors)
  i1180.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1181[4], i1180.m_SpriteState)
  i1180.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1181[5], i1180.m_AnimationTriggers)
  i1180.m_Interactable = !!i1181[6]
  request.r(i1181[7], i1181[8], 0, i1180, 'm_TargetGraphic')
  return i1180
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1183 = data
  i1182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1183[0], i1182.m_PersistentCalls)
  return i1182
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('UnityEngine.Events.PersistentCall', i1187[i + 0]));
  }
  i1184.m_Calls = i1186
  return i1184
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'm_Target')
  i1190.m_TargetAssemblyTypeName = i1191[2]
  i1190.m_MethodName = i1191[3]
  i1190.m_Mode = i1191[4]
  i1190.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1191[5], i1190.m_Arguments)
  i1190.m_CallState = i1191[6]
  return i1190
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1193 = data
  i1192.m_Mode = i1193[0]
  i1192.m_WrapAround = !!i1193[1]
  request.r(i1193[2], i1193[3], 0, i1192, 'm_SelectOnUp')
  request.r(i1193[4], i1193[5], 0, i1192, 'm_SelectOnDown')
  request.r(i1193[6], i1193[7], 0, i1192, 'm_SelectOnLeft')
  request.r(i1193[8], i1193[9], 0, i1192, 'm_SelectOnRight')
  return i1192
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1195 = data
  i1194.m_NormalColor = new pc.Color(i1195[0], i1195[1], i1195[2], i1195[3])
  i1194.m_HighlightedColor = new pc.Color(i1195[4], i1195[5], i1195[6], i1195[7])
  i1194.m_PressedColor = new pc.Color(i1195[8], i1195[9], i1195[10], i1195[11])
  i1194.m_SelectedColor = new pc.Color(i1195[12], i1195[13], i1195[14], i1195[15])
  i1194.m_DisabledColor = new pc.Color(i1195[16], i1195[17], i1195[18], i1195[19])
  i1194.m_ColorMultiplier = i1195[20]
  i1194.m_FadeDuration = i1195[21]
  return i1194
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'm_HighlightedSprite')
  request.r(i1197[2], i1197[3], 0, i1196, 'm_PressedSprite')
  request.r(i1197[4], i1197[5], 0, i1196, 'm_SelectedSprite')
  request.r(i1197[6], i1197[7], 0, i1196, 'm_DisabledSprite')
  return i1196
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1199 = data
  i1198.m_NormalTrigger = i1199[0]
  i1198.m_HighlightedTrigger = i1199[1]
  i1198.m_PressedTrigger = i1199[2]
  i1198.m_SelectedTrigger = i1199[3]
  i1198.m_DisabledTrigger = i1199[4]
  return i1198
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'm_Texture')
  i1200.m_UVRect = UnityEngine.Rect.MinMaxRect(i1201[2], i1201[3], i1201[4], i1201[5])
  request.r(i1201[6], i1201[7], 0, i1200, 'm_Material')
  i1200.m_Maskable = !!i1201[8]
  i1200.m_Color = new pc.Color(i1201[9], i1201[10], i1201[11], i1201[12])
  i1200.m_RaycastTarget = !!i1201[13]
  i1200.m_RaycastPadding = new pc.Vec4( i1201[14], i1201[15], i1201[16], i1201[17] )
  return i1200
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'm_FirstSelected')
  i1202.m_sendNavigationEvents = !!i1203[2]
  i1202.m_DragThreshold = i1203[3]
  return i1202
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1205 = data
  i1204.m_HorizontalAxis = i1205[0]
  i1204.m_VerticalAxis = i1205[1]
  i1204.m_SubmitButton = i1205[2]
  i1204.m_CancelButton = i1205[3]
  i1204.m_InputActionsPerSecond = i1205[4]
  i1204.m_RepeatDelay = i1205[5]
  i1204.m_ForceModuleActive = !!i1205[6]
  i1204.m_SendPointerHoverToParent = !!i1205[7]
  return i1204
}

Deserializers["MapTheme"] = function (request, data, root) {
  var i1206 = root || request.c( 'MapTheme' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 2, i1208, '')
  }
  i1206.normalObjects = i1208
  var i1211 = i1207[1]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 2, i1210, '')
  }
  i1206.winterObjects = i1210
  var i1213 = i1207[2]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 2, i1212, '')
  }
  i1206.normalRenderers = i1212
  request.r(i1207[3], i1207[4], 0, i1206, 'cam')
  i1206.normalBackground = new pc.Color(i1207[5], i1207[6], i1207[7], i1207[8])
  i1206.winterBackground = new pc.Color(i1207[9], i1207[10], i1207[11], i1207[12])
  return i1206
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1219 = data
  i1218.m_AspectMode = i1219[0]
  i1218.m_AspectRatio = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1221 = data
  i1220.ambientIntensity = i1221[0]
  i1220.reflectionIntensity = i1221[1]
  i1220.ambientMode = i1221[2]
  i1220.ambientLight = new pc.Color(i1221[3], i1221[4], i1221[5], i1221[6])
  i1220.ambientSkyColor = new pc.Color(i1221[7], i1221[8], i1221[9], i1221[10])
  i1220.ambientGroundColor = new pc.Color(i1221[11], i1221[12], i1221[13], i1221[14])
  i1220.ambientEquatorColor = new pc.Color(i1221[15], i1221[16], i1221[17], i1221[18])
  i1220.fogColor = new pc.Color(i1221[19], i1221[20], i1221[21], i1221[22])
  i1220.fogEndDistance = i1221[23]
  i1220.fogStartDistance = i1221[24]
  i1220.fogDensity = i1221[25]
  i1220.fog = !!i1221[26]
  request.r(i1221[27], i1221[28], 0, i1220, 'skybox')
  i1220.fogMode = i1221[29]
  var i1223 = i1221[30]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1223[i + 0]) );
  }
  i1220.lightmaps = i1222
  i1220.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1221[31], i1220.lightProbes)
  i1220.lightmapsMode = i1221[32]
  i1220.mixedBakeMode = i1221[33]
  i1220.environmentLightingMode = i1221[34]
  i1220.ambientProbe = new pc.SphericalHarmonicsL2(i1221[35])
  request.r(i1221[36], i1221[37], 0, i1220, 'customReflection')
  request.r(i1221[38], i1221[39], 0, i1220, 'defaultReflection')
  i1220.defaultReflectionMode = i1221[40]
  i1220.defaultReflectionResolution = i1221[41]
  i1220.sunLightObjectId = i1221[42]
  i1220.pixelLightCount = i1221[43]
  i1220.defaultReflectionHDR = !!i1221[44]
  i1220.hasLightDataAsset = !!i1221[45]
  i1220.hasManualGenerate = !!i1221[46]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'lightmapColor')
  request.r(i1227[2], i1227[3], 0, i1226, 'lightmapDirection')
  request.r(i1227[4], i1227[5], 0, i1226, 'shadowMask')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1228 = root || new UnityEngine.LightProbes()
  var i1229 = data
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1239[i + 0]));
  }
  i1236.ShaderCompilationErrors = i1238
  i1236.name = i1237[1]
  i1236.guid = i1237[2]
  var i1241 = i1237[3]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( i1241[i + 0] );
  }
  i1236.shaderDefinedKeywords = i1240
  var i1243 = i1237[4]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1243[i + 0]) );
  }
  i1236.passes = i1242
  var i1245 = i1237[5]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1245[i + 0]) );
  }
  i1236.usePasses = i1244
  var i1247 = i1237[6]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1247[i + 0]) );
  }
  i1236.defaultParameterValues = i1246
  request.r(i1237[7], i1237[8], 0, i1236, 'unityFallbackShader')
  i1236.readDepth = !!i1237[9]
  i1236.hasDepthOnlyPass = !!i1237[10]
  i1236.isCreatedByShaderGraph = !!i1237[11]
  i1236.disableBatching = !!i1237[12]
  i1236.compiled = !!i1237[13]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1251 = data
  i1250.shaderName = i1251[0]
  i1250.errorMessage = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1256 = root || new pc.UnityShaderPass()
  var i1257 = data
  i1256.id = i1257[0]
  i1256.subShaderIndex = i1257[1]
  i1256.name = i1257[2]
  i1256.passType = i1257[3]
  i1256.grabPassTextureName = i1257[4]
  i1256.usePass = !!i1257[5]
  i1256.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[6], i1256.zTest)
  i1256.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[7], i1256.zWrite)
  i1256.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[8], i1256.culling)
  i1256.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1257[9], i1256.blending)
  i1256.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1257[10], i1256.alphaBlending)
  i1256.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[11], i1256.colorWriteMask)
  i1256.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[12], i1256.offsetUnits)
  i1256.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[13], i1256.offsetFactor)
  i1256.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[14], i1256.stencilRef)
  i1256.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[15], i1256.stencilReadMask)
  i1256.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[16], i1256.stencilWriteMask)
  i1256.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[17], i1256.stencilOp)
  i1256.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[18], i1256.stencilOpFront)
  i1256.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[19], i1256.stencilOpBack)
  var i1259 = i1257[20]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1259[i + 0]) );
  }
  i1256.tags = i1258
  var i1261 = i1257[21]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( i1261[i + 0] );
  }
  i1256.passDefinedKeywords = i1260
  var i1263 = i1257[22]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1263[i + 0]) );
  }
  i1256.passDefinedKeywordGroups = i1262
  var i1265 = i1257[23]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1265[i + 0]) );
  }
  i1256.variants = i1264
  var i1267 = i1257[24]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1267[i + 0]) );
  }
  i1256.excludedVariants = i1266
  i1256.hasDepthReader = !!i1257[25]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1269 = data
  i1268.val = i1269[0]
  i1268.name = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1271 = data
  i1270.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[0], i1270.src)
  i1270.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[1], i1270.dst)
  i1270.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[2], i1270.op)
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1273 = data
  i1272.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[0], i1272.pass)
  i1272.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[1], i1272.fail)
  i1272.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[2], i1272.zFail)
  i1272.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[3], i1272.comp)
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1277 = data
  i1276.name = i1277[0]
  i1276.value = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1280.keywords = i1282
  i1280.hasDiscard = !!i1281[1]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1287 = data
  i1286.passId = i1287[0]
  i1286.subShaderIndex = i1287[1]
  var i1289 = i1287[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1286.keywords = i1288
  i1286.vertexProgram = i1287[3]
  i1286.fragmentProgram = i1287[4]
  i1286.exportedForWebGl2 = !!i1287[5]
  i1286.readDepth = !!i1287[6]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'shader')
  i1292.pass = i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.type = i1297[1]
  i1296.value = new pc.Vec4( i1297[2], i1297[3], i1297[4], i1297[5] )
  i1296.textureValue = i1297[6]
  i1296.shaderPropertyFlag = i1297[7]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1299 = data
  i1298.name = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'texture')
  i1298.aabb = i1299[3]
  i1298.vertices = i1299[4]
  i1298.triangles = i1299[5]
  i1298.textureRect = UnityEngine.Rect.MinMaxRect(i1299[6], i1299[7], i1299[8], i1299[9])
  i1298.packedRect = UnityEngine.Rect.MinMaxRect(i1299[10], i1299[11], i1299[12], i1299[13])
  i1298.border = new pc.Vec4( i1299[14], i1299[15], i1299[16], i1299[17] )
  i1298.transparency = i1299[18]
  i1298.bounds = i1299[19]
  i1298.pixelsPerUnit = i1299[20]
  i1298.textureWidth = i1299[21]
  i1298.textureHeight = i1299[22]
  i1298.nativeSize = new pc.Vec2( i1299[23], i1299[24] )
  i1298.pivot = new pc.Vec2( i1299[25], i1299[26] )
  i1298.textureRectOffset = new pc.Vec2( i1299[27], i1299[28] )
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1301 = data
  i1300.name = i1301[0]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.ascent = i1303[1]
  i1302.originalLineHeight = i1303[2]
  i1302.fontSize = i1303[3]
  var i1305 = i1303[4]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1305[i + 0]) );
  }
  i1302.characterInfo = i1304
  request.r(i1303[5], i1303[6], 0, i1302, 'texture')
  i1302.originalFontSize = i1303[7]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1309 = data
  i1308.index = i1309[0]
  i1308.advance = i1309[1]
  i1308.bearing = i1309[2]
  i1308.glyphWidth = i1309[3]
  i1308.glyphHeight = i1309[4]
  i1308.minX = i1309[5]
  i1308.maxX = i1309[6]
  i1308.minY = i1309[7]
  i1308.maxY = i1309[8]
  i1308.uvBottomLeftX = i1309[9]
  i1308.uvBottomLeftY = i1309[10]
  i1308.uvBottomRightX = i1309[11]
  i1308.uvBottomRightY = i1309[12]
  i1308.uvTopLeftX = i1309[13]
  i1308.uvTopLeftY = i1309[14]
  i1308.uvTopRightX = i1309[15]
  i1308.uvTopRightY = i1309[16]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1313[i + 0]) );
  }
  i1310.files = i1312
  i1310.componentToPrefabIds = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1317 = data
  i1316.path = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'unityObject')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1321[i + 0]) );
  }
  i1318.scriptsExecutionOrder = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1323[i + 0]) );
  }
  i1318.sortingLayers = i1322
  var i1325 = i1319[2]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1325[i + 0]) );
  }
  i1318.cullingLayers = i1324
  i1318.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1319[3], i1318.timeSettings)
  i1318.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1319[4], i1318.physicsSettings)
  i1318.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1319[5], i1318.physics2DSettings)
  i1318.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1319[6], i1318.qualitySettings)
  i1318.enableRealtimeShadows = !!i1319[7]
  i1318.enableAutoInstancing = !!i1319[8]
  i1318.enableStaticBatching = !!i1319[9]
  i1318.enableDynamicBatching = !!i1319[10]
  i1318.usePreservativeDynamicBatching = !!i1319[11]
  i1318.lightmapEncodingQuality = i1319[12]
  i1318.desiredColorSpace = i1319[13]
  var i1327 = i1319[14]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1318.allTags = i1326
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1335 = data
  i1334.id = i1335[0]
  i1334.name = i1335[1]
  i1334.value = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.name = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1341 = data
  i1340.fixedDeltaTime = i1341[0]
  i1340.maximumDeltaTime = i1341[1]
  i1340.timeScale = i1341[2]
  i1340.maximumParticleTimestep = i1341[3]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1343 = data
  i1342.gravity = new pc.Vec3( i1343[0], i1343[1], i1343[2] )
  i1342.defaultSolverIterations = i1343[3]
  i1342.bounceThreshold = i1343[4]
  i1342.autoSyncTransforms = !!i1343[5]
  i1342.autoSimulation = !!i1343[6]
  var i1345 = i1343[7]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1345[i + 0]) );
  }
  i1342.collisionMatrix = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.layerId = i1349[1]
  i1348.otherLayerId = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'material')
  i1350.gravity = new pc.Vec2( i1351[2], i1351[3] )
  i1350.positionIterations = i1351[4]
  i1350.velocityIterations = i1351[5]
  i1350.velocityThreshold = i1351[6]
  i1350.maxLinearCorrection = i1351[7]
  i1350.maxAngularCorrection = i1351[8]
  i1350.maxTranslationSpeed = i1351[9]
  i1350.maxRotationSpeed = i1351[10]
  i1350.baumgarteScale = i1351[11]
  i1350.baumgarteTOIScale = i1351[12]
  i1350.timeToSleep = i1351[13]
  i1350.linearSleepTolerance = i1351[14]
  i1350.angularSleepTolerance = i1351[15]
  i1350.defaultContactOffset = i1351[16]
  i1350.autoSimulation = !!i1351[17]
  i1350.queriesHitTriggers = !!i1351[18]
  i1350.queriesStartInColliders = !!i1351[19]
  i1350.callbacksOnDisable = !!i1351[20]
  i1350.reuseCollisionCallbacks = !!i1351[21]
  i1350.autoSyncTransforms = !!i1351[22]
  var i1353 = i1351[23]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1353[i + 0]) );
  }
  i1350.collisionMatrix = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1357 = data
  i1356.enabled = !!i1357[0]
  i1356.layerId = i1357[1]
  i1356.otherLayerId = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1359 = data
  var i1361 = i1359[0]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1361[i + 0]) );
  }
  i1358.qualityLevels = i1360
  var i1363 = i1359[1]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1358.names = i1362
  i1358.shadows = i1359[2]
  i1358.anisotropicFiltering = i1359[3]
  i1358.antiAliasing = i1359[4]
  i1358.lodBias = i1359[5]
  i1358.shadowCascades = i1359[6]
  i1358.shadowDistance = i1359[7]
  i1358.shadowmaskMode = i1359[8]
  i1358.shadowProjection = i1359[9]
  i1358.shadowResolution = i1359[10]
  i1358.softParticles = !!i1359[11]
  i1358.softVegetation = !!i1359[12]
  i1358.activeColorSpace = i1359[13]
  i1358.desiredColorSpace = i1359[14]
  i1358.masterTextureLimit = i1359[15]
  i1358.maxQueuedFrames = i1359[16]
  i1358.particleRaycastBudget = i1359[17]
  i1358.pixelLightCount = i1359[18]
  i1358.realtimeReflectionProbes = !!i1359[19]
  i1358.shadowCascade2Split = i1359[20]
  i1358.shadowCascade4Split = new pc.Vec3( i1359[21], i1359[22], i1359[23] )
  i1358.streamingMipmapsActive = !!i1359[24]
  i1358.vSyncCount = i1359[25]
  i1358.asyncUploadBufferSize = i1359[26]
  i1358.asyncUploadTimeSlice = i1359[27]
  i1358.billboardsFaceCameraPosition = !!i1359[28]
  i1358.shadowNearPlaneOffset = i1359[29]
  i1358.streamingMipmapsMemoryBudget = i1359[30]
  i1358.maximumLODLevel = i1359[31]
  i1358.streamingMipmapsAddAllCameras = !!i1359[32]
  i1358.streamingMipmapsMaxLevelReduction = i1359[33]
  i1358.streamingMipmapsRenderersPerFrame = i1359[34]
  i1358.resolutionScalingFixedDPIFactor = i1359[35]
  i1358.streamingMipmapsMaxFileIORequests = i1359[36]
  i1358.currentQualityLevel = i1359[37]
  return i1358
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1367 = data
  request.r(i1367[0], i1367[1], 0, i1366, 'm_ObjectArgument')
  i1366.m_ObjectArgumentAssemblyTypeName = i1367[2]
  i1366.m_IntArgument = i1367[3]
  i1366.m_FloatArgument = i1367[4]
  i1366.m_StringArgument = i1367[5]
  i1366.m_BoolArgument = !!i1367[6]
  return i1366
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[12],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[4],"61":[4],"62":[4],"63":[4],"64":[4],"65":[4],"8":[4],"66":[4],"67":[4],"68":[4],"69":[4],"70":[4],"71":[4],"72":[12],"73":[74],"75":[76],"77":[76],"31":[30],"78":[6],"79":[12],"80":[81],"82":[30],"83":[35,30],"84":[74],"85":[35,30],"86":[30],"87":[30],"88":[74,30],"89":[30,35],"90":[91],"92":[91],"93":[91],"94":[30],"95":[30],"34":[31],"36":[35,30],"42":[30],"33":[31],"96":[30],"97":[30],"98":[30],"99":[30],"100":[30],"101":[30],"102":[30],"103":[30],"104":[30],"26":[35,30],"105":[30],"106":[30],"107":[30],"108":[30],"28":[35,30],"109":[30],"110":[40],"111":[40],"41":[40],"112":[40],"113":[12],"114":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","SspMan","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.HingeJoint2D","UnityEngine.Material","SspPartHit","FxSprite","UnityEngine.Camera","UnityEngine.AudioListener","LayoutController","GameController","Snowfall","Potion","FollowHint","Fx","GameAudio","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","UnityEngine.UI.RawImage","MapTheme","UnityEngine.UI.Text","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","DragZone","UiTween","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.UI.AspectRatioFitter","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_V10";

Deserializers.lunaInitializationTime = "11/26/2026 08:21:17";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SSP_V10_YenTTH";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "b40b1a120fb8e82458c4fb3d775da064";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1770";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3480";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_V10";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "255401de-0058-485d-ba95-4726439767e6";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

