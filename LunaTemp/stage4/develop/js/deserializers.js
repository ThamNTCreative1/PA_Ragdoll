var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.JointSpring' )
  var i1105 = data
  i1104.spring = i1105[0]
  i1104.damper = i1105[1]
  i1104.targetPosition = i1105[2]
  return i1104
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.JointMotor' )
  var i1107 = data
  i1106.m_TargetVelocity = i1107[0]
  i1106.m_Force = i1107[1]
  i1106.m_FreeSpin = i1107[2]
  return i1106
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.JointLimits' )
  var i1109 = data
  i1108.m_Min = i1109[0]
  i1108.m_Max = i1109[1]
  i1108.m_Bounciness = i1109[2]
  i1108.m_BounceMinVelocity = i1109[3]
  i1108.m_ContactDistance = i1109[4]
  i1108.minBounce = i1109[5]
  i1108.maxBounce = i1109[6]
  return i1108
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.JointDrive' )
  var i1111 = data
  i1110.m_PositionSpring = i1111[0]
  i1110.m_PositionDamper = i1111[1]
  i1110.m_MaximumForce = i1111[2]
  i1110.m_UseAcceleration = i1111[3]
  return i1110
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1113 = data
  i1112.m_Spring = i1113[0]
  i1112.m_Damper = i1113[1]
  return i1112
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1115 = data
  i1114.m_Limit = i1115[0]
  i1114.m_Bounciness = i1115[1]
  i1114.m_ContactDistance = i1115[2]
  return i1114
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1117 = data
  i1116.m_ExtremumSlip = i1117[0]
  i1116.m_ExtremumValue = i1117[1]
  i1116.m_AsymptoteSlip = i1117[2]
  i1116.m_AsymptoteValue = i1117[3]
  i1116.m_Stiffness = i1117[4]
  return i1116
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1119 = data
  i1118.m_LowerAngle = i1119[0]
  i1118.m_UpperAngle = i1119[1]
  return i1118
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1121 = data
  i1120.m_MotorSpeed = i1121[0]
  i1120.m_MaximumMotorTorque = i1121[1]
  return i1120
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1123 = data
  i1122.m_DampingRatio = i1123[0]
  i1122.m_Frequency = i1123[1]
  i1122.m_Angle = i1123[2]
  return i1122
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1125 = data
  i1124.m_LowerTranslation = i1125[0]
  i1124.m_UpperTranslation = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1126 = root || new pc.UnityMaterial()
  var i1127 = data
  i1126.name = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'shader')
  i1126.renderQueue = i1127[3]
  i1126.enableInstancing = !!i1127[4]
  var i1129 = i1127[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1129[i + 0]) );
  }
  i1126.floatParameters = i1128
  var i1131 = i1127[6]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1131[i + 0]) );
  }
  i1126.colorParameters = i1130
  var i1133 = i1127[7]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1133[i + 0]) );
  }
  i1126.vectorParameters = i1132
  var i1135 = i1127[8]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1135[i + 0]) );
  }
  i1126.textureParameters = i1134
  var i1137 = i1127[9]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1137[i + 0]) );
  }
  i1126.materialFlags = i1136
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.value = new pc.Color(i1145[1], i1145[2], i1145[3], i1145[4])
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.value = new pc.Vec4( i1149[1], i1149[2], i1149[3], i1149[4] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1153 = data
  i1152.name = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'value')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.enabled = !!i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.width = i1159[1]
  i1158.height = i1159[2]
  i1158.mipmapCount = i1159[3]
  i1158.anisoLevel = i1159[4]
  i1158.filterMode = i1159[5]
  i1158.hdr = !!i1159[6]
  i1158.format = i1159[7]
  i1158.wrapMode = i1159[8]
  i1158.alphaIsTransparency = !!i1159[9]
  i1158.alphaSource = i1159[10]
  i1158.graphicsFormat = i1159[11]
  i1158.sRGBTexture = !!i1159[12]
  i1158.desiredColorSpace = i1159[13]
  i1158.wrapU = i1159[14]
  i1158.wrapV = i1159[15]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1161 = data
  i1160.position = new pc.Vec3( i1161[0], i1161[1], i1161[2] )
  i1160.scale = new pc.Vec3( i1161[3], i1161[4], i1161[5] )
  i1160.rotation = new pc.Quat(i1161[6], i1161[7], i1161[8], i1161[9])
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1163 = data
  i1162.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1163[0], i1162.main)
  i1162.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1163[1], i1162.colorBySpeed)
  i1162.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1163[2], i1162.colorOverLifetime)
  i1162.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1163[3], i1162.emission)
  i1162.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1163[4], i1162.rotationBySpeed)
  i1162.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1163[5], i1162.rotationOverLifetime)
  i1162.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1163[6], i1162.shape)
  i1162.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1163[7], i1162.sizeBySpeed)
  i1162.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1163[8], i1162.sizeOverLifetime)
  i1162.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1163[9], i1162.textureSheetAnimation)
  i1162.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1163[10], i1162.velocityOverLifetime)
  i1162.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1163[11], i1162.noise)
  i1162.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1163[12], i1162.inheritVelocity)
  i1162.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1163[13], i1162.forceOverLifetime)
  i1162.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1163[14], i1162.limitVelocityOverLifetime)
  i1162.useAutoRandomSeed = !!i1163[15]
  i1162.randomSeed = i1163[16]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1164 = root || new pc.ParticleSystemMain()
  var i1165 = data
  i1164.duration = i1165[0]
  i1164.loop = !!i1165[1]
  i1164.prewarm = !!i1165[2]
  i1164.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[3], i1164.startDelay)
  i1164.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[4], i1164.startLifetime)
  i1164.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[5], i1164.startSpeed)
  i1164.startSize3D = !!i1165[6]
  i1164.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[7], i1164.startSizeX)
  i1164.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[8], i1164.startSizeY)
  i1164.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[9], i1164.startSizeZ)
  i1164.startRotation3D = !!i1165[10]
  i1164.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[11], i1164.startRotationX)
  i1164.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[12], i1164.startRotationY)
  i1164.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[13], i1164.startRotationZ)
  i1164.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1165[14], i1164.startColor)
  i1164.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1165[15], i1164.gravityModifier)
  i1164.simulationSpace = i1165[16]
  request.r(i1165[17], i1165[18], 0, i1164, 'customSimulationSpace')
  i1164.simulationSpeed = i1165[19]
  i1164.useUnscaledTime = !!i1165[20]
  i1164.scalingMode = i1165[21]
  i1164.playOnAwake = !!i1165[22]
  i1164.maxParticles = i1165[23]
  i1164.emitterVelocityMode = i1165[24]
  i1164.stopAction = i1165[25]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1166 = root || new pc.MinMaxCurve()
  var i1167 = data
  i1166.mode = i1167[0]
  i1166.curveMin = new pc.AnimationCurve( { keys_flow: i1167[1] } )
  i1166.curveMax = new pc.AnimationCurve( { keys_flow: i1167[2] } )
  i1166.curveMultiplier = i1167[3]
  i1166.constantMin = i1167[4]
  i1166.constantMax = i1167[5]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1168 = root || new pc.MinMaxGradient()
  var i1169 = data
  i1168.mode = i1169[0]
  i1168.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1169[1], i1168.gradientMin)
  i1168.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1169[2], i1168.gradientMax)
  i1168.colorMin = new pc.Color(i1169[3], i1169[4], i1169[5], i1169[6])
  i1168.colorMax = new pc.Color(i1169[7], i1169[8], i1169[9], i1169[10])
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1171 = data
  i1170.mode = i1171[0]
  var i1173 = i1171[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1173[i + 0]) );
  }
  i1170.colorKeys = i1172
  var i1175 = i1171[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1175[i + 0]) );
  }
  i1170.alphaKeys = i1174
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1176 = root || new pc.ParticleSystemColorBySpeed()
  var i1177 = data
  i1176.enabled = !!i1177[0]
  i1176.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1177[1], i1176.color)
  i1176.range = new pc.Vec2( i1177[2], i1177[3] )
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1181 = data
  i1180.color = new pc.Color(i1181[0], i1181[1], i1181[2], i1181[3])
  i1180.time = i1181[4]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1185 = data
  i1184.alpha = i1185[0]
  i1184.time = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1186 = root || new pc.ParticleSystemColorOverLifetime()
  var i1187 = data
  i1186.enabled = !!i1187[0]
  i1186.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1187[1], i1186.color)
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1188 = root || new pc.ParticleSystemEmitter()
  var i1189 = data
  i1188.enabled = !!i1189[0]
  i1188.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1189[1], i1188.rateOverTime)
  i1188.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1189[2], i1188.rateOverDistance)
  var i1191 = i1189[3]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1191[i + 0]) );
  }
  i1188.bursts = i1190
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1194 = root || new pc.ParticleSystemBurst()
  var i1195 = data
  i1194.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1195[0], i1194.count)
  i1194.cycleCount = i1195[1]
  i1194.minCount = i1195[2]
  i1194.maxCount = i1195[3]
  i1194.repeatInterval = i1195[4]
  i1194.time = i1195[5]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1196 = root || new pc.ParticleSystemRotationBySpeed()
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1197[1], i1196.x)
  i1196.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1197[2], i1196.y)
  i1196.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1197[3], i1196.z)
  i1196.separateAxes = !!i1197[4]
  i1196.range = new pc.Vec2( i1197[5], i1197[6] )
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1198 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1199 = data
  i1198.enabled = !!i1199[0]
  i1198.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1199[1], i1198.x)
  i1198.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1199[2], i1198.y)
  i1198.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1199[3], i1198.z)
  i1198.separateAxes = !!i1199[4]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1200 = root || new pc.ParticleSystemShape()
  var i1201 = data
  i1200.enabled = !!i1201[0]
  i1200.shapeType = i1201[1]
  i1200.randomDirectionAmount = i1201[2]
  i1200.sphericalDirectionAmount = i1201[3]
  i1200.randomPositionAmount = i1201[4]
  i1200.alignToDirection = !!i1201[5]
  i1200.radius = i1201[6]
  i1200.radiusMode = i1201[7]
  i1200.radiusSpread = i1201[8]
  i1200.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[9], i1200.radiusSpeed)
  i1200.radiusThickness = i1201[10]
  i1200.angle = i1201[11]
  i1200.length = i1201[12]
  i1200.boxThickness = new pc.Vec3( i1201[13], i1201[14], i1201[15] )
  i1200.meshShapeType = i1201[16]
  request.r(i1201[17], i1201[18], 0, i1200, 'mesh')
  request.r(i1201[19], i1201[20], 0, i1200, 'meshRenderer')
  request.r(i1201[21], i1201[22], 0, i1200, 'skinnedMeshRenderer')
  i1200.useMeshMaterialIndex = !!i1201[23]
  i1200.meshMaterialIndex = i1201[24]
  i1200.useMeshColors = !!i1201[25]
  i1200.normalOffset = i1201[26]
  i1200.arc = i1201[27]
  i1200.arcMode = i1201[28]
  i1200.arcSpread = i1201[29]
  i1200.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[30], i1200.arcSpeed)
  i1200.donutRadius = i1201[31]
  i1200.position = new pc.Vec3( i1201[32], i1201[33], i1201[34] )
  i1200.rotation = new pc.Vec3( i1201[35], i1201[36], i1201[37] )
  i1200.scale = new pc.Vec3( i1201[38], i1201[39], i1201[40] )
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1202 = root || new pc.ParticleSystemSizeBySpeed()
  var i1203 = data
  i1202.enabled = !!i1203[0]
  i1202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1203[1], i1202.x)
  i1202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1203[2], i1202.y)
  i1202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1203[3], i1202.z)
  i1202.separateAxes = !!i1203[4]
  i1202.range = new pc.Vec2( i1203[5], i1203[6] )
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1204 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1205 = data
  i1204.enabled = !!i1205[0]
  i1204.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1205[1], i1204.x)
  i1204.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1205[2], i1204.y)
  i1204.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1205[3], i1204.z)
  i1204.separateAxes = !!i1205[4]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1206 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1207 = data
  i1206.enabled = !!i1207[0]
  i1206.mode = i1207[1]
  i1206.animation = i1207[2]
  i1206.numTilesX = i1207[3]
  i1206.numTilesY = i1207[4]
  i1206.useRandomRow = !!i1207[5]
  i1206.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1207[6], i1206.frameOverTime)
  i1206.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1207[7], i1206.startFrame)
  i1206.cycleCount = i1207[8]
  i1206.rowIndex = i1207[9]
  i1206.flipU = i1207[10]
  i1206.flipV = i1207[11]
  i1206.spriteCount = i1207[12]
  var i1209 = i1207[13]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 2) {
  request.r(i1209[i + 0], i1209[i + 1], 2, i1208, '')
  }
  i1206.sprites = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1212 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1213 = data
  i1212.enabled = !!i1213[0]
  i1212.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[1], i1212.x)
  i1212.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[2], i1212.y)
  i1212.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[3], i1212.z)
  i1212.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[4], i1212.radial)
  i1212.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[5], i1212.speedModifier)
  i1212.space = i1213[6]
  i1212.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[7], i1212.orbitalX)
  i1212.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[8], i1212.orbitalY)
  i1212.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[9], i1212.orbitalZ)
  i1212.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[10], i1212.orbitalOffsetX)
  i1212.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[11], i1212.orbitalOffsetY)
  i1212.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1213[12], i1212.orbitalOffsetZ)
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1214 = root || new pc.ParticleSystemNoise()
  var i1215 = data
  i1214.enabled = !!i1215[0]
  i1214.separateAxes = !!i1215[1]
  i1214.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[2], i1214.strengthX)
  i1214.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[3], i1214.strengthY)
  i1214.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[4], i1214.strengthZ)
  i1214.frequency = i1215[5]
  i1214.damping = !!i1215[6]
  i1214.octaveCount = i1215[7]
  i1214.octaveMultiplier = i1215[8]
  i1214.octaveScale = i1215[9]
  i1214.quality = i1215[10]
  i1214.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[11], i1214.scrollSpeed)
  i1214.scrollSpeedMultiplier = i1215[12]
  i1214.remapEnabled = !!i1215[13]
  i1214.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[14], i1214.remapX)
  i1214.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[15], i1214.remapY)
  i1214.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[16], i1214.remapZ)
  i1214.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[17], i1214.positionAmount)
  i1214.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[18], i1214.rotationAmount)
  i1214.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1215[19], i1214.sizeAmount)
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1216 = root || new pc.ParticleSystemInheritVelocity()
  var i1217 = data
  i1216.enabled = !!i1217[0]
  i1216.mode = i1217[1]
  i1216.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1217[2], i1216.curve)
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1218 = root || new pc.ParticleSystemForceOverLifetime()
  var i1219 = data
  i1218.enabled = !!i1219[0]
  i1218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[1], i1218.x)
  i1218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[2], i1218.y)
  i1218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[3], i1218.z)
  i1218.space = i1219[4]
  i1218.randomized = !!i1219[5]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1220 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1221 = data
  i1220.enabled = !!i1221[0]
  i1220.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1221[1], i1220.limit)
  i1220.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1221[2], i1220.limitX)
  i1220.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1221[3], i1220.limitY)
  i1220.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1221[4], i1220.limitZ)
  i1220.dampen = i1221[5]
  i1220.separateAxes = !!i1221[6]
  i1220.space = i1221[7]
  i1220.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1221[8], i1220.drag)
  i1220.multiplyDragByParticleSize = !!i1221[9]
  i1220.multiplyDragByParticleVelocity = !!i1221[10]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'mesh')
  i1222.meshCount = i1223[2]
  i1222.activeVertexStreamsCount = i1223[3]
  i1222.alignment = i1223[4]
  i1222.renderMode = i1223[5]
  i1222.sortMode = i1223[6]
  i1222.lengthScale = i1223[7]
  i1222.velocityScale = i1223[8]
  i1222.cameraVelocityScale = i1223[9]
  i1222.normalDirection = i1223[10]
  i1222.sortingFudge = i1223[11]
  i1222.minParticleSize = i1223[12]
  i1222.maxParticleSize = i1223[13]
  i1222.pivot = new pc.Vec3( i1223[14], i1223[15], i1223[16] )
  request.r(i1223[17], i1223[18], 0, i1222, 'trailMaterial')
  i1222.applyActiveColorSpace = !!i1223[19]
  i1222.enabled = !!i1223[20]
  request.r(i1223[21], i1223[22], 0, i1222, 'sharedMaterial')
  var i1225 = i1223[23]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1222.sharedMaterials = i1224
  i1222.receiveShadows = !!i1223[24]
  i1222.shadowCastingMode = i1223[25]
  i1222.sortingLayerID = i1223[26]
  i1222.sortingOrder = i1223[27]
  i1222.lightmapIndex = i1223[28]
  i1222.lightmapSceneIndex = i1223[29]
  i1222.lightmapScaleOffset = new pc.Vec4( i1223[30], i1223[31], i1223[32], i1223[33] )
  i1222.lightProbeUsage = i1223[34]
  i1222.reflectionProbeUsage = i1223[35]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1229 = data
  i1228.name = i1229[0]
  i1228.tagId = i1229[1]
  i1228.enabled = !!i1229[2]
  i1228.isStatic = !!i1229[3]
  i1228.layer = i1229[4]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.index = i1231[1]
  i1230.startup = !!i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1233 = data
  i1232.aspect = i1233[0]
  i1232.orthographic = !!i1233[1]
  i1232.orthographicSize = i1233[2]
  i1232.backgroundColor = new pc.Color(i1233[3], i1233[4], i1233[5], i1233[6])
  i1232.nearClipPlane = i1233[7]
  i1232.farClipPlane = i1233[8]
  i1232.fieldOfView = i1233[9]
  i1232.depth = i1233[10]
  i1232.clearFlags = i1233[11]
  i1232.cullingMask = i1233[12]
  i1232.rect = i1233[13]
  request.r(i1233[14], i1233[15], 0, i1232, 'targetTexture')
  i1232.usePhysicalProperties = !!i1233[16]
  i1232.focalLength = i1233[17]
  i1232.sensorSize = new pc.Vec2( i1233[18], i1233[19] )
  i1232.lensShift = new pc.Vec2( i1233[20], i1233[21] )
  i1232.gateFit = i1233[22]
  i1232.commandBufferCount = i1233[23]
  i1232.cameraType = i1233[24]
  i1232.enabled = !!i1233[25]
  return i1232
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'm_FirstSelected')
  i1234.m_sendNavigationEvents = !!i1235[2]
  i1234.m_DragThreshold = i1235[3]
  return i1234
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1237 = data
  i1236.m_HorizontalAxis = i1237[0]
  i1236.m_VerticalAxis = i1237[1]
  i1236.m_SubmitButton = i1237[2]
  i1236.m_CancelButton = i1237[3]
  i1236.m_InputActionsPerSecond = i1237[4]
  i1236.m_RepeatDelay = i1237[5]
  i1236.m_ForceModuleActive = !!i1237[6]
  i1236.m_SendPointerHoverToParent = !!i1237[7]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1239 = data
  i1238.pivot = new pc.Vec2( i1239[0], i1239[1] )
  i1238.anchorMin = new pc.Vec2( i1239[2], i1239[3] )
  i1238.anchorMax = new pc.Vec2( i1239[4], i1239[5] )
  i1238.sizeDelta = new pc.Vec2( i1239[6], i1239[7] )
  i1238.anchoredPosition3D = new pc.Vec3( i1239[8], i1239[9], i1239[10] )
  i1238.rotation = new pc.Quat(i1239[11], i1239[12], i1239[13], i1239[14])
  i1238.scale = new pc.Vec3( i1239[15], i1239[16], i1239[17] )
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1241 = data
  i1240.planeDistance = i1241[0]
  i1240.referencePixelsPerUnit = i1241[1]
  i1240.isFallbackOverlay = !!i1241[2]
  i1240.renderMode = i1241[3]
  i1240.renderOrder = i1241[4]
  i1240.sortingLayerName = i1241[5]
  i1240.sortingOrder = i1241[6]
  i1240.scaleFactor = i1241[7]
  request.r(i1241[8], i1241[9], 0, i1240, 'worldCamera')
  i1240.overrideSorting = !!i1241[10]
  i1240.pixelPerfect = !!i1241[11]
  i1240.targetDisplay = i1241[12]
  i1240.overridePixelPerfect = !!i1241[13]
  i1240.enabled = !!i1241[14]
  return i1240
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1243 = data
  i1242.m_UiScaleMode = i1243[0]
  i1242.m_ReferencePixelsPerUnit = i1243[1]
  i1242.m_ScaleFactor = i1243[2]
  i1242.m_ReferenceResolution = new pc.Vec2( i1243[3], i1243[4] )
  i1242.m_ScreenMatchMode = i1243[5]
  i1242.m_MatchWidthOrHeight = i1243[6]
  i1242.m_PhysicalUnit = i1243[7]
  i1242.m_FallbackScreenDPI = i1243[8]
  i1242.m_DefaultSpriteDPI = i1243[9]
  i1242.m_DynamicPixelsPerUnit = i1243[10]
  i1242.m_PresetInfoIsWorld = !!i1243[11]
  return i1242
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1245 = data
  i1244.m_IgnoreReversedGraphics = !!i1245[0]
  i1244.m_BlockingObjects = i1245[1]
  i1244.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1245[2] )
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1247 = data
  i1246.cullTransparentMesh = !!i1247[0]
  return i1246
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1249 = data
  i1248.m_AspectMode = i1249[0]
  i1248.m_AspectRatio = i1249[1]
  return i1248
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'm_Texture')
  i1250.m_UVRect = UnityEngine.Rect.MinMaxRect(i1251[2], i1251[3], i1251[4], i1251[5])
  request.r(i1251[6], i1251[7], 0, i1250, 'm_Material')
  i1250.m_Maskable = !!i1251[8]
  i1250.m_Color = new pc.Color(i1251[9], i1251[10], i1251[11], i1251[12])
  i1250.m_RaycastTarget = !!i1251[13]
  i1250.m_RaycastPadding = new pc.Vec4( i1251[14], i1251[15], i1251[16], i1251[17] )
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1253 = data
  i1252.color = new pc.Color(i1253[0], i1253[1], i1253[2], i1253[3])
  request.r(i1253[4], i1253[5], 0, i1252, 'sprite')
  i1252.flipX = !!i1253[6]
  i1252.flipY = !!i1253[7]
  i1252.drawMode = i1253[8]
  i1252.size = new pc.Vec2( i1253[9], i1253[10] )
  i1252.tileMode = i1253[11]
  i1252.adaptiveModeThreshold = i1253[12]
  i1252.maskInteraction = i1253[13]
  i1252.spriteSortPoint = i1253[14]
  i1252.enabled = !!i1253[15]
  request.r(i1253[16], i1253[17], 0, i1252, 'sharedMaterial')
  var i1255 = i1253[18]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 2, i1254, '')
  }
  i1252.sharedMaterials = i1254
  i1252.receiveShadows = !!i1253[19]
  i1252.shadowCastingMode = i1253[20]
  i1252.sortingLayerID = i1253[21]
  i1252.sortingOrder = i1253[22]
  i1252.lightmapIndex = i1253[23]
  i1252.lightmapSceneIndex = i1253[24]
  i1252.lightmapScaleOffset = new pc.Vec4( i1253[25], i1253[26], i1253[27], i1253[28] )
  i1252.lightProbeUsage = i1253[29]
  i1252.reflectionProbeUsage = i1253[30]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1257 = data
  i1256.usedByComposite = !!i1257[0]
  i1256.autoTiling = !!i1257[1]
  i1256.size = new pc.Vec2( i1257[2], i1257[3] )
  i1256.edgeRadius = i1257[4]
  i1256.enabled = !!i1257[5]
  i1256.isTrigger = !!i1257[6]
  i1256.usedByEffector = !!i1257[7]
  i1256.density = i1257[8]
  i1256.offset = new pc.Vec2( i1257[9], i1257[10] )
  request.r(i1257[11], i1257[12], 0, i1256, 'material')
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1259 = data
  i1258.sortingLayerIndex = i1259[0]
  i1258.sortingOrder = i1259[1]
  i1258.sortingLayerName = i1259[2]
  i1258.enabled = !!i1259[3]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1261 = data
  i1260.bodyType = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'material')
  i1260.simulated = !!i1261[3]
  i1260.useAutoMass = !!i1261[4]
  i1260.mass = i1261[5]
  i1260.drag = i1261[6]
  i1260.angularDrag = i1261[7]
  i1260.gravityScale = i1261[8]
  i1260.collisionDetectionMode = i1261[9]
  i1260.sleepMode = i1261[10]
  i1260.constraints = i1261[11]
  return i1260
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1262 = root || request.c( 'MonsterController' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'joint')
  request.r(i1263[2], i1263[3], 0, i1262, 'rb')
  request.r(i1263[4], i1263[5], 0, i1262, 'deadSFX')
  i1262.force = new pc.Vec2( i1263[6], i1263[7] )
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1265 = data
  i1264.useLimits = !!i1265[0]
  i1264.limits = request.d('UnityEngine.JointAngleLimits2D', i1265[1], i1264.limits)
  i1264.useMotor = !!i1265[2]
  i1264.motor = request.d('UnityEngine.JointMotor2D', i1265[3], i1264.motor)
  i1264.anchor = new pc.Vec2( i1265[4], i1265[5] )
  i1264.connectedAnchor = new pc.Vec2( i1265[6], i1265[7] )
  i1264.autoConfigureConnectedAnchor = !!i1265[8]
  request.r(i1265[9], i1265[10], 0, i1264, 'connectedBody')
  i1264.breakForce = i1265[11]
  i1264.breakTorque = i1265[12]
  i1264.enableCollision = !!i1265[13]
  i1264.enabled = !!i1265[14]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1267 = data
  i1266.autoConfigureTarget = !!i1267[0]
  i1266.target = new pc.Vec2( i1267[1], i1267[2] )
  i1266.anchor = new pc.Vec2( i1267[3], i1267[4] )
  i1266.maxForce = i1267[5]
  i1266.dampingRatio = i1267[6]
  i1266.frequency = i1267[7]
  request.r(i1267[8], i1267[9], 0, i1266, 'connectedBody')
  i1266.breakForce = i1267[10]
  i1266.breakTorque = i1267[11]
  i1266.enableCollision = !!i1267[12]
  i1266.enabled = !!i1267[13]
  return i1266
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1268 = root || request.c( 'BonkController' )
  var i1269 = data
  i1268.target = i1269[0]
  i1268.maxBonk = i1269[1]
  request.r(i1269[2], i1269[3], 0, i1268, 'hitSound')
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1271 = data
  i1270.radius = i1271[0]
  i1270.enabled = !!i1271[1]
  i1270.isTrigger = !!i1271[2]
  i1270.usedByEffector = !!i1271[3]
  i1270.density = i1271[4]
  i1270.offset = new pc.Vec2( i1271[5], i1271[6] )
  request.r(i1271[7], i1271[8], 0, i1270, 'material')
  return i1270
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.UI.Button' )
  var i1273 = data
  i1272.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1273[0], i1272.m_OnClick)
  i1272.m_Navigation = request.d('UnityEngine.UI.Navigation', i1273[1], i1272.m_Navigation)
  i1272.m_Transition = i1273[2]
  i1272.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1273[3], i1272.m_Colors)
  i1272.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1273[4], i1272.m_SpriteState)
  i1272.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1273[5], i1272.m_AnimationTriggers)
  i1272.m_Interactable = !!i1273[6]
  request.r(i1273[7], i1273[8], 0, i1272, 'm_TargetGraphic')
  return i1272
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1275 = data
  i1274.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1275[0], i1274.m_PersistentCalls)
  return i1274
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('UnityEngine.Events.PersistentCall', i1279[i + 0]));
  }
  i1276.m_Calls = i1278
  return i1276
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'm_Target')
  i1282.m_TargetAssemblyTypeName = i1283[2]
  i1282.m_MethodName = i1283[3]
  i1282.m_Mode = i1283[4]
  i1282.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1283[5], i1282.m_Arguments)
  i1282.m_CallState = i1283[6]
  return i1282
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1285 = data
  i1284.m_Mode = i1285[0]
  i1284.m_WrapAround = !!i1285[1]
  request.r(i1285[2], i1285[3], 0, i1284, 'm_SelectOnUp')
  request.r(i1285[4], i1285[5], 0, i1284, 'm_SelectOnDown')
  request.r(i1285[6], i1285[7], 0, i1284, 'm_SelectOnLeft')
  request.r(i1285[8], i1285[9], 0, i1284, 'm_SelectOnRight')
  return i1284
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1287 = data
  i1286.m_NormalColor = new pc.Color(i1287[0], i1287[1], i1287[2], i1287[3])
  i1286.m_HighlightedColor = new pc.Color(i1287[4], i1287[5], i1287[6], i1287[7])
  i1286.m_PressedColor = new pc.Color(i1287[8], i1287[9], i1287[10], i1287[11])
  i1286.m_SelectedColor = new pc.Color(i1287[12], i1287[13], i1287[14], i1287[15])
  i1286.m_DisabledColor = new pc.Color(i1287[16], i1287[17], i1287[18], i1287[19])
  i1286.m_ColorMultiplier = i1287[20]
  i1286.m_FadeDuration = i1287[21]
  return i1286
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'm_HighlightedSprite')
  request.r(i1289[2], i1289[3], 0, i1288, 'm_PressedSprite')
  request.r(i1289[4], i1289[5], 0, i1288, 'm_SelectedSprite')
  request.r(i1289[6], i1289[7], 0, i1288, 'm_DisabledSprite')
  return i1288
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1291 = data
  i1290.m_NormalTrigger = i1291[0]
  i1290.m_HighlightedTrigger = i1291[1]
  i1290.m_PressedTrigger = i1291[2]
  i1290.m_SelectedTrigger = i1291[3]
  i1290.m_DisabledTrigger = i1291[4]
  return i1290
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.UI.Image' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'm_Sprite')
  i1292.m_Type = i1293[2]
  i1292.m_PreserveAspect = !!i1293[3]
  i1292.m_FillCenter = !!i1293[4]
  i1292.m_FillMethod = i1293[5]
  i1292.m_FillAmount = i1293[6]
  i1292.m_FillClockwise = !!i1293[7]
  i1292.m_FillOrigin = i1293[8]
  i1292.m_UseSpriteMesh = !!i1293[9]
  i1292.m_PixelsPerUnitMultiplier = i1293[10]
  request.r(i1293[11], i1293[12], 0, i1292, 'm_Material')
  i1292.m_Maskable = !!i1293[13]
  i1292.m_Color = new pc.Color(i1293[14], i1293[15], i1293[16], i1293[17])
  i1292.m_RaycastTarget = !!i1293[18]
  i1292.m_RaycastPadding = new pc.Vec4( i1293[19], i1293[20], i1293[21], i1293[22] )
  return i1292
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1294 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1295 = data
  i1294.targetIsSelf = !!i1295[0]
  request.r(i1295[1], i1295[2], 0, i1294, 'targetGO')
  i1294.tweenTargetIsTargetGO = !!i1295[3]
  i1294.delay = i1295[4]
  i1294.duration = i1295[5]
  i1294.easeType = i1295[6]
  i1294.easeCurve = new pc.AnimationCurve( { keys_flow: i1295[7] } )
  i1294.loopType = i1295[8]
  i1294.loops = i1295[9]
  i1294.id = i1295[10]
  i1294.isRelative = !!i1295[11]
  i1294.isFrom = !!i1295[12]
  i1294.isIndependentUpdate = !!i1295[13]
  i1294.autoKill = !!i1295[14]
  i1294.autoGenerate = !!i1295[15]
  i1294.isActive = !!i1295[16]
  i1294.isValid = !!i1295[17]
  request.r(i1295[18], i1295[19], 0, i1294, 'target')
  i1294.animationType = i1295[20]
  i1294.targetType = i1295[21]
  i1294.forcedTargetType = i1295[22]
  i1294.autoPlay = !!i1295[23]
  i1294.useTargetAsV3 = !!i1295[24]
  i1294.endValueFloat = i1295[25]
  i1294.endValueV3 = new pc.Vec3( i1295[26], i1295[27], i1295[28] )
  i1294.endValueV2 = new pc.Vec2( i1295[29], i1295[30] )
  i1294.endValueColor = new pc.Color(i1295[31], i1295[32], i1295[33], i1295[34])
  i1294.endValueString = i1295[35]
  i1294.endValueRect = UnityEngine.Rect.MinMaxRect(i1295[36], i1295[37], i1295[38], i1295[39])
  request.r(i1295[40], i1295[41], 0, i1294, 'endValueTransform')
  i1294.optionalBool0 = !!i1295[42]
  i1294.optionalBool1 = !!i1295[43]
  i1294.optionalFloat0 = i1295[44]
  i1294.optionalInt0 = i1295[45]
  i1294.optionalRotationMode = i1295[46]
  i1294.optionalScrambleMode = i1295[47]
  i1294.optionalShakeRandomnessMode = i1295[48]
  i1294.optionalString = i1295[49]
  i1294.updateType = i1295[50]
  i1294.isSpeedBased = !!i1295[51]
  i1294.hasOnStart = !!i1295[52]
  i1294.hasOnPlay = !!i1295[53]
  i1294.hasOnUpdate = !!i1295[54]
  i1294.hasOnStepComplete = !!i1295[55]
  i1294.hasOnComplete = !!i1295[56]
  i1294.hasOnTweenCreated = !!i1295[57]
  i1294.hasOnRewind = !!i1295[58]
  i1294.onStart = request.d('UnityEngine.Events.UnityEvent', i1295[59], i1294.onStart)
  i1294.onPlay = request.d('UnityEngine.Events.UnityEvent', i1295[60], i1294.onPlay)
  i1294.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1295[61], i1294.onUpdate)
  i1294.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1295[62], i1294.onStepComplete)
  i1294.onComplete = request.d('UnityEngine.Events.UnityEvent', i1295[63], i1294.onComplete)
  i1294.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1295[64], i1294.onTweenCreated)
  i1294.onRewind = request.d('UnityEngine.Events.UnityEvent', i1295[65], i1294.onRewind)
  return i1294
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1297 = data
  i1296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1297[0], i1296.m_PersistentCalls)
  return i1296
}

Deserializers["GameController"] = function (request, data, root) {
  var i1298 = root || request.c( 'GameController' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 1, i1300, '')
  }
  i1298.monsters = i1300
  var i1303 = i1299[1]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1303.length; i += 3) {
    i1302.add(new pc.Vec3( i1303[i + 0], i1303[i + 1], i1303[i + 2] ));
  }
  i1298.cameraPos = i1302
  i1298.speedMove = i1299[2]
  request.r(i1299[3], i1299[4], 0, i1298, 'target')
  i1298.index = i1299[5]
  i1298.end = !!i1299[6]
  request.r(i1299[7], i1299[8], 0, i1298, 'mainCamera')
  request.r(i1299[9], i1299[10], 0, i1298, 'endUI')
  return i1298
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1308 = root || request.c( 'TargetController' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1308.listTarget = i1310
  request.r(i1309[1], i1309[2], 0, i1308, 'currentTarget')
  i1308.index = i1309[3]
  request.r(i1309[4], i1309[5], 0, i1308, 'tut')
  return i1308
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1314 = root || request.c( 'LunaController' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'BGTexture')
  i1314.UseTime = !!i1315[2]
  i1314.TimePlay = i1315[3]
  request.r(i1315[4], i1315[5], 0, i1314, 'BGImage')
  var i1317 = i1315[6]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 1, i1316, '')
  }
  i1314.CTA = i1316
  return i1314
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1320 = root || request.c( 'AudioController' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'BGM')
  request.r(i1321[2], i1321[3], 0, i1320, 'musicSource')
  request.r(i1321[4], i1321[5], 0, i1320, 'pool')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'clip')
  request.r(i1323[2], i1323[3], 0, i1322, 'outputAudioMixerGroup')
  i1322.playOnAwake = !!i1323[4]
  i1322.loop = !!i1323[5]
  i1322.time = i1323[6]
  i1322.volume = i1323[7]
  i1322.pitch = i1323[8]
  i1322.enabled = !!i1323[9]
  return i1322
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1324 = root || request.c( 'VFXController' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'bloodPrefab')
  request.r(i1325[2], i1325[3], 0, i1324, 'pool')
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1327 = data
  i1326.ambientIntensity = i1327[0]
  i1326.reflectionIntensity = i1327[1]
  i1326.ambientMode = i1327[2]
  i1326.ambientLight = new pc.Color(i1327[3], i1327[4], i1327[5], i1327[6])
  i1326.ambientSkyColor = new pc.Color(i1327[7], i1327[8], i1327[9], i1327[10])
  i1326.ambientGroundColor = new pc.Color(i1327[11], i1327[12], i1327[13], i1327[14])
  i1326.ambientEquatorColor = new pc.Color(i1327[15], i1327[16], i1327[17], i1327[18])
  i1326.fogColor = new pc.Color(i1327[19], i1327[20], i1327[21], i1327[22])
  i1326.fogEndDistance = i1327[23]
  i1326.fogStartDistance = i1327[24]
  i1326.fogDensity = i1327[25]
  i1326.fog = !!i1327[26]
  request.r(i1327[27], i1327[28], 0, i1326, 'skybox')
  i1326.fogMode = i1327[29]
  var i1329 = i1327[30]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1329[i + 0]) );
  }
  i1326.lightmaps = i1328
  i1326.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1327[31], i1326.lightProbes)
  i1326.lightmapsMode = i1327[32]
  i1326.mixedBakeMode = i1327[33]
  i1326.environmentLightingMode = i1327[34]
  i1326.ambientProbe = new pc.SphericalHarmonicsL2(i1327[35])
  request.r(i1327[36], i1327[37], 0, i1326, 'customReflection')
  request.r(i1327[38], i1327[39], 0, i1326, 'defaultReflection')
  i1326.defaultReflectionMode = i1327[40]
  i1326.defaultReflectionResolution = i1327[41]
  i1326.sunLightObjectId = i1327[42]
  i1326.pixelLightCount = i1327[43]
  i1326.defaultReflectionHDR = !!i1327[44]
  i1326.hasLightDataAsset = !!i1327[45]
  i1326.hasManualGenerate = !!i1327[46]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'lightmapColor')
  request.r(i1333[2], i1333[3], 0, i1332, 'lightmapDirection')
  request.r(i1333[4], i1333[5], 0, i1332, 'shadowMask')
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1334 = root || new UnityEngine.LightProbes()
  var i1335 = data
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1343 = data
  var i1345 = i1343[0]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1345[i + 0]));
  }
  i1342.ShaderCompilationErrors = i1344
  i1342.name = i1343[1]
  i1342.guid = i1343[2]
  var i1347 = i1343[3]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( i1347[i + 0] );
  }
  i1342.shaderDefinedKeywords = i1346
  var i1349 = i1343[4]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1349[i + 0]) );
  }
  i1342.passes = i1348
  var i1351 = i1343[5]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1351[i + 0]) );
  }
  i1342.usePasses = i1350
  var i1353 = i1343[6]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1353[i + 0]) );
  }
  i1342.defaultParameterValues = i1352
  request.r(i1343[7], i1343[8], 0, i1342, 'unityFallbackShader')
  i1342.readDepth = !!i1343[9]
  i1342.hasDepthOnlyPass = !!i1343[10]
  i1342.isCreatedByShaderGraph = !!i1343[11]
  i1342.disableBatching = !!i1343[12]
  i1342.compiled = !!i1343[13]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1357 = data
  i1356.shaderName = i1357[0]
  i1356.errorMessage = i1357[1]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1362 = root || new pc.UnityShaderPass()
  var i1363 = data
  i1362.id = i1363[0]
  i1362.subShaderIndex = i1363[1]
  i1362.name = i1363[2]
  i1362.passType = i1363[3]
  i1362.grabPassTextureName = i1363[4]
  i1362.usePass = !!i1363[5]
  i1362.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[6], i1362.zTest)
  i1362.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[7], i1362.zWrite)
  i1362.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[8], i1362.culling)
  i1362.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1363[9], i1362.blending)
  i1362.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1363[10], i1362.alphaBlending)
  i1362.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[11], i1362.colorWriteMask)
  i1362.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[12], i1362.offsetUnits)
  i1362.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[13], i1362.offsetFactor)
  i1362.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[14], i1362.stencilRef)
  i1362.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[15], i1362.stencilReadMask)
  i1362.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1363[16], i1362.stencilWriteMask)
  i1362.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1363[17], i1362.stencilOp)
  i1362.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1363[18], i1362.stencilOpFront)
  i1362.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1363[19], i1362.stencilOpBack)
  var i1365 = i1363[20]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1365[i + 0]) );
  }
  i1362.tags = i1364
  var i1367 = i1363[21]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( i1367[i + 0] );
  }
  i1362.passDefinedKeywords = i1366
  var i1369 = i1363[22]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1369[i + 0]) );
  }
  i1362.passDefinedKeywordGroups = i1368
  var i1371 = i1363[23]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1371[i + 0]) );
  }
  i1362.variants = i1370
  var i1373 = i1363[24]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1373[i + 0]) );
  }
  i1362.excludedVariants = i1372
  i1362.hasDepthReader = !!i1363[25]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1375 = data
  i1374.val = i1375[0]
  i1374.name = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1377 = data
  i1376.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[0], i1376.src)
  i1376.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[1], i1376.dst)
  i1376.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1377[2], i1376.op)
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1379 = data
  i1378.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1379[0], i1378.pass)
  i1378.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1379[1], i1378.fail)
  i1378.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1379[2], i1378.zFail)
  i1378.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1379[3], i1378.comp)
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.value = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( i1389[i + 0] );
  }
  i1386.keywords = i1388
  i1386.hasDiscard = !!i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1393 = data
  i1392.passId = i1393[0]
  i1392.subShaderIndex = i1393[1]
  var i1395 = i1393[2]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( i1395[i + 0] );
  }
  i1392.keywords = i1394
  i1392.vertexProgram = i1393[3]
  i1392.fragmentProgram = i1393[4]
  i1392.exportedForWebGl2 = !!i1393[5]
  i1392.readDepth = !!i1393[6]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1399 = data
  request.r(i1399[0], i1399[1], 0, i1398, 'shader')
  i1398.pass = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.type = i1403[1]
  i1402.value = new pc.Vec4( i1403[2], i1403[3], i1403[4], i1403[5] )
  i1402.textureValue = i1403[6]
  i1402.shaderPropertyFlag = i1403[7]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1405 = data
  i1404.name = i1405[0]
  request.r(i1405[1], i1405[2], 0, i1404, 'texture')
  i1404.aabb = i1405[3]
  i1404.vertices = i1405[4]
  i1404.triangles = i1405[5]
  i1404.textureRect = UnityEngine.Rect.MinMaxRect(i1405[6], i1405[7], i1405[8], i1405[9])
  i1404.packedRect = UnityEngine.Rect.MinMaxRect(i1405[10], i1405[11], i1405[12], i1405[13])
  i1404.border = new pc.Vec4( i1405[14], i1405[15], i1405[16], i1405[17] )
  i1404.transparency = i1405[18]
  i1404.bounds = i1405[19]
  i1404.pixelsPerUnit = i1405[20]
  i1404.textureWidth = i1405[21]
  i1404.textureHeight = i1405[22]
  i1404.nativeSize = new pc.Vec2( i1405[23], i1405[24] )
  i1404.pivot = new pc.Vec2( i1405[25], i1405[26] )
  i1404.textureRectOffset = new pc.Vec2( i1405[27], i1405[28] )
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1407 = data
  i1406.name = i1407[0]
  return i1406
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1409 = data
  i1408.useSafeMode = !!i1409[0]
  i1408.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1409[1], i1408.safeModeOptions)
  i1408.timeScale = i1409[2]
  i1408.unscaledTimeScale = i1409[3]
  i1408.useSmoothDeltaTime = !!i1409[4]
  i1408.maxSmoothUnscaledTime = i1409[5]
  i1408.rewindCallbackMode = i1409[6]
  i1408.showUnityEditorReport = !!i1409[7]
  i1408.logBehaviour = i1409[8]
  i1408.drawGizmos = !!i1409[9]
  i1408.defaultRecyclable = !!i1409[10]
  i1408.defaultAutoPlay = i1409[11]
  i1408.defaultUpdateType = i1409[12]
  i1408.defaultTimeScaleIndependent = !!i1409[13]
  i1408.defaultEaseType = i1409[14]
  i1408.defaultEaseOvershootOrAmplitude = i1409[15]
  i1408.defaultEasePeriod = i1409[16]
  i1408.defaultAutoKill = !!i1409[17]
  i1408.defaultLoopType = i1409[18]
  i1408.debugMode = !!i1409[19]
  i1408.debugStoreTargetId = !!i1409[20]
  i1408.showPreviewPanel = !!i1409[21]
  i1408.storeSettingsLocation = i1409[22]
  i1408.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1409[23], i1408.modules)
  i1408.createASMDEF = !!i1409[24]
  i1408.showPlayingTweens = !!i1409[25]
  i1408.showPausedTweens = !!i1409[26]
  return i1408
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1411 = data
  i1410.logBehaviour = i1411[0]
  i1410.nestedTweenFailureBehaviour = i1411[1]
  return i1410
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1412 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1413 = data
  i1412.showPanel = !!i1413[0]
  i1412.audioEnabled = !!i1413[1]
  i1412.physicsEnabled = !!i1413[2]
  i1412.physics2DEnabled = !!i1413[3]
  i1412.spriteEnabled = !!i1413[4]
  i1412.uiEnabled = !!i1413[5]
  i1412.textMeshProEnabled = !!i1413[6]
  i1412.tk2DEnabled = !!i1413[7]
  i1412.deAudioEnabled = !!i1413[8]
  i1412.deUnityExtendedEnabled = !!i1413[9]
  i1412.epoOutlineEnabled = !!i1413[10]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1415 = data
  var i1417 = i1415[0]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1417[i + 0]) );
  }
  i1414.files = i1416
  i1414.componentToPrefabIds = i1415[1]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1421 = data
  i1420.path = i1421[0]
  request.r(i1421[1], i1421[2], 0, i1420, 'unityObject')
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1423 = data
  var i1425 = i1423[0]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1425[i + 0]) );
  }
  i1422.scriptsExecutionOrder = i1424
  var i1427 = i1423[1]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1427[i + 0]) );
  }
  i1422.sortingLayers = i1426
  var i1429 = i1423[2]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1429[i + 0]) );
  }
  i1422.cullingLayers = i1428
  i1422.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1423[3], i1422.timeSettings)
  i1422.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1423[4], i1422.physicsSettings)
  i1422.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1423[5], i1422.physics2DSettings)
  i1422.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1423[6], i1422.qualitySettings)
  i1422.enableRealtimeShadows = !!i1423[7]
  i1422.enableAutoInstancing = !!i1423[8]
  i1422.enableStaticBatching = !!i1423[9]
  i1422.enableDynamicBatching = !!i1423[10]
  i1422.usePreservativeDynamicBatching = !!i1423[11]
  i1422.lightmapEncodingQuality = i1423[12]
  i1422.desiredColorSpace = i1423[13]
  var i1431 = i1423[14]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( i1431[i + 0] );
  }
  i1422.allTags = i1430
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.value = i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1439 = data
  i1438.id = i1439[0]
  i1438.name = i1439[1]
  i1438.value = i1439[2]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1443 = data
  i1442.id = i1443[0]
  i1442.name = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1445 = data
  i1444.fixedDeltaTime = i1445[0]
  i1444.maximumDeltaTime = i1445[1]
  i1444.timeScale = i1445[2]
  i1444.maximumParticleTimestep = i1445[3]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1447 = data
  i1446.gravity = new pc.Vec3( i1447[0], i1447[1], i1447[2] )
  i1446.defaultSolverIterations = i1447[3]
  i1446.bounceThreshold = i1447[4]
  i1446.autoSyncTransforms = !!i1447[5]
  i1446.autoSimulation = !!i1447[6]
  var i1449 = i1447[7]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1449[i + 0]) );
  }
  i1446.collisionMatrix = i1448
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.layerId = i1453[1]
  i1452.otherLayerId = i1453[2]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, 'material')
  i1454.gravity = new pc.Vec2( i1455[2], i1455[3] )
  i1454.positionIterations = i1455[4]
  i1454.velocityIterations = i1455[5]
  i1454.velocityThreshold = i1455[6]
  i1454.maxLinearCorrection = i1455[7]
  i1454.maxAngularCorrection = i1455[8]
  i1454.maxTranslationSpeed = i1455[9]
  i1454.maxRotationSpeed = i1455[10]
  i1454.baumgarteScale = i1455[11]
  i1454.baumgarteTOIScale = i1455[12]
  i1454.timeToSleep = i1455[13]
  i1454.linearSleepTolerance = i1455[14]
  i1454.angularSleepTolerance = i1455[15]
  i1454.defaultContactOffset = i1455[16]
  i1454.autoSimulation = !!i1455[17]
  i1454.queriesHitTriggers = !!i1455[18]
  i1454.queriesStartInColliders = !!i1455[19]
  i1454.callbacksOnDisable = !!i1455[20]
  i1454.reuseCollisionCallbacks = !!i1455[21]
  i1454.autoSyncTransforms = !!i1455[22]
  var i1457 = i1455[23]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1457[i + 0]) );
  }
  i1454.collisionMatrix = i1456
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.layerId = i1461[1]
  i1460.otherLayerId = i1461[2]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1463 = data
  var i1465 = i1463[0]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1465[i + 0]) );
  }
  i1462.qualityLevels = i1464
  var i1467 = i1463[1]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1462.names = i1466
  i1462.shadows = i1463[2]
  i1462.anisotropicFiltering = i1463[3]
  i1462.antiAliasing = i1463[4]
  i1462.lodBias = i1463[5]
  i1462.shadowCascades = i1463[6]
  i1462.shadowDistance = i1463[7]
  i1462.shadowmaskMode = i1463[8]
  i1462.shadowProjection = i1463[9]
  i1462.shadowResolution = i1463[10]
  i1462.softParticles = !!i1463[11]
  i1462.softVegetation = !!i1463[12]
  i1462.activeColorSpace = i1463[13]
  i1462.desiredColorSpace = i1463[14]
  i1462.masterTextureLimit = i1463[15]
  i1462.maxQueuedFrames = i1463[16]
  i1462.particleRaycastBudget = i1463[17]
  i1462.pixelLightCount = i1463[18]
  i1462.realtimeReflectionProbes = !!i1463[19]
  i1462.shadowCascade2Split = i1463[20]
  i1462.shadowCascade4Split = new pc.Vec3( i1463[21], i1463[22], i1463[23] )
  i1462.streamingMipmapsActive = !!i1463[24]
  i1462.vSyncCount = i1463[25]
  i1462.asyncUploadBufferSize = i1463[26]
  i1462.asyncUploadTimeSlice = i1463[27]
  i1462.billboardsFaceCameraPosition = !!i1463[28]
  i1462.shadowNearPlaneOffset = i1463[29]
  i1462.streamingMipmapsMemoryBudget = i1463[30]
  i1462.maximumLODLevel = i1463[31]
  i1462.streamingMipmapsAddAllCameras = !!i1463[32]
  i1462.streamingMipmapsMaxLevelReduction = i1463[33]
  i1462.streamingMipmapsRenderersPerFrame = i1463[34]
  i1462.resolutionScalingFixedDPIFactor = i1463[35]
  i1462.streamingMipmapsMaxFileIORequests = i1463[36]
  i1462.currentQualityLevel = i1463[37]
  return i1462
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1471 = data
  request.r(i1471[0], i1471[1], 0, i1470, 'm_ObjectArgument')
  i1470.m_ObjectArgumentAssemblyTypeName = i1471[2]
  i1470.m_IntArgument = i1471[3]
  i1470.m_FloatArgument = i1471[4]
  i1470.m_StringArgument = i1471[5]
  i1470.m_BoolArgument = !!i1471[6]
  return i1470
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[5],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"26":[21],"64":[21],"65":[21],"24":[21],"66":[21],"67":[21],"68":[21],"69":[5],"70":[71],"72":[73],"74":[73],"11":[10],"75":[17],"76":[5],"77":[78],"79":[10],"80":[14,10],"81":[71],"82":[14,10],"83":[10],"84":[10],"85":[71,10],"86":[10,14],"87":[88],"89":[88],"90":[88],"91":[10],"92":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"93":[10],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"16":[14,10],"102":[10],"103":[10],"104":[10],"105":[10],"106":[14,10],"107":[10],"108":[8],"109":[8],"9":[8],"110":[8],"111":[5],"112":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/23/2026 09:03:27";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V02_YenTTH_TamNTM_";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "01d8b819bddb11e4ea7a644267642880";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

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

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "409bb97e-215f-479d-a98e-497ea168a262";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

