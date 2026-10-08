var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.JointSpring' )
  var i1141 = data
  i1140.spring = i1141[0]
  i1140.damper = i1141[1]
  i1140.targetPosition = i1141[2]
  return i1140
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.JointMotor' )
  var i1143 = data
  i1142.m_TargetVelocity = i1143[0]
  i1142.m_Force = i1143[1]
  i1142.m_FreeSpin = i1143[2]
  return i1142
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.JointLimits' )
  var i1145 = data
  i1144.m_Min = i1145[0]
  i1144.m_Max = i1145[1]
  i1144.m_Bounciness = i1145[2]
  i1144.m_BounceMinVelocity = i1145[3]
  i1144.m_ContactDistance = i1145[4]
  i1144.minBounce = i1145[5]
  i1144.maxBounce = i1145[6]
  return i1144
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.JointDrive' )
  var i1147 = data
  i1146.m_PositionSpring = i1147[0]
  i1146.m_PositionDamper = i1147[1]
  i1146.m_MaximumForce = i1147[2]
  i1146.m_UseAcceleration = i1147[3]
  return i1146
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1149 = data
  i1148.m_Spring = i1149[0]
  i1148.m_Damper = i1149[1]
  return i1148
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1151 = data
  i1150.m_Limit = i1151[0]
  i1150.m_Bounciness = i1151[1]
  i1150.m_ContactDistance = i1151[2]
  return i1150
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1153 = data
  i1152.m_ExtremumSlip = i1153[0]
  i1152.m_ExtremumValue = i1153[1]
  i1152.m_AsymptoteSlip = i1153[2]
  i1152.m_AsymptoteValue = i1153[3]
  i1152.m_Stiffness = i1153[4]
  return i1152
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1155 = data
  i1154.m_LowerAngle = i1155[0]
  i1154.m_UpperAngle = i1155[1]
  return i1154
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1157 = data
  i1156.m_MotorSpeed = i1157[0]
  i1156.m_MaximumMotorTorque = i1157[1]
  return i1156
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1159 = data
  i1158.m_DampingRatio = i1159[0]
  i1158.m_Frequency = i1159[1]
  i1158.m_Angle = i1159[2]
  return i1158
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1161 = data
  i1160.m_LowerTranslation = i1161[0]
  i1160.m_UpperTranslation = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1162 = root || new pc.UnityMaterial()
  var i1163 = data
  i1162.name = i1163[0]
  request.r(i1163[1], i1163[2], 0, i1162, 'shader')
  i1162.renderQueue = i1163[3]
  i1162.enableInstancing = !!i1163[4]
  var i1165 = i1163[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1165[i + 0]) );
  }
  i1162.floatParameters = i1164
  var i1167 = i1163[6]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1167[i + 0]) );
  }
  i1162.colorParameters = i1166
  var i1169 = i1163[7]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1169[i + 0]) );
  }
  i1162.vectorParameters = i1168
  var i1171 = i1163[8]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1171[i + 0]) );
  }
  i1162.textureParameters = i1170
  var i1173 = i1163[9]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1173[i + 0]) );
  }
  i1162.materialFlags = i1172
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.value = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.value = new pc.Color(i1181[1], i1181[2], i1181[3], i1181[4])
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.value = new pc.Vec4( i1185[1], i1185[2], i1185[3], i1185[4] )
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1189 = data
  i1188.name = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'value')
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.enabled = !!i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.width = i1195[1]
  i1194.height = i1195[2]
  i1194.mipmapCount = i1195[3]
  i1194.anisoLevel = i1195[4]
  i1194.filterMode = i1195[5]
  i1194.hdr = !!i1195[6]
  i1194.format = i1195[7]
  i1194.wrapMode = i1195[8]
  i1194.alphaIsTransparency = !!i1195[9]
  i1194.alphaSource = i1195[10]
  i1194.graphicsFormat = i1195[11]
  i1194.sRGBTexture = !!i1195[12]
  i1194.desiredColorSpace = i1195[13]
  i1194.wrapU = i1195[14]
  i1194.wrapV = i1195[15]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1197 = data
  i1196.position = new pc.Vec3( i1197[0], i1197[1], i1197[2] )
  i1196.scale = new pc.Vec3( i1197[3], i1197[4], i1197[5] )
  i1196.rotation = new pc.Quat(i1197[6], i1197[7], i1197[8], i1197[9])
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1199 = data
  i1198.bodyType = i1199[0]
  request.r(i1199[1], i1199[2], 0, i1198, 'material')
  i1198.simulated = !!i1199[3]
  i1198.useAutoMass = !!i1199[4]
  i1198.mass = i1199[5]
  i1198.drag = i1199[6]
  i1198.angularDrag = i1199[7]
  i1198.gravityScale = i1199[8]
  i1198.collisionDetectionMode = i1199[9]
  i1198.sleepMode = i1199[10]
  i1198.constraints = i1199[11]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1201 = data
  i1200.sortingLayerIndex = i1201[0]
  i1200.sortingOrder = i1201[1]
  i1200.sortingLayerName = i1201[2]
  i1200.enabled = !!i1201[3]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1203 = data
  i1202.usedByComposite = !!i1203[0]
  i1202.autoTiling = !!i1203[1]
  i1202.size = new pc.Vec2( i1203[2], i1203[3] )
  i1202.edgeRadius = i1203[4]
  i1202.enabled = !!i1203[5]
  i1202.isTrigger = !!i1203[6]
  i1202.usedByEffector = !!i1203[7]
  i1202.density = i1203[8]
  i1202.offset = new pc.Vec2( i1203[9], i1203[10] )
  request.r(i1203[11], i1203[12], 0, i1202, 'material')
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1205 = data
  i1204.useLimits = !!i1205[0]
  i1204.limits = request.d('UnityEngine.JointAngleLimits2D', i1205[1], i1204.limits)
  i1204.useMotor = !!i1205[2]
  i1204.motor = request.d('UnityEngine.JointMotor2D', i1205[3], i1204.motor)
  i1204.anchor = new pc.Vec2( i1205[4], i1205[5] )
  i1204.connectedAnchor = new pc.Vec2( i1205[6], i1205[7] )
  i1204.autoConfigureConnectedAnchor = !!i1205[8]
  request.r(i1205[9], i1205[10], 0, i1204, 'connectedBody')
  i1204.breakForce = i1205[11]
  i1204.breakTorque = i1205[12]
  i1204.enableCollision = !!i1205[13]
  i1204.enabled = !!i1205[14]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1207 = data
  i1206.autoConfigureTarget = !!i1207[0]
  i1206.target = new pc.Vec2( i1207[1], i1207[2] )
  i1206.anchor = new pc.Vec2( i1207[3], i1207[4] )
  i1206.maxForce = i1207[5]
  i1206.dampingRatio = i1207[6]
  i1206.frequency = i1207[7]
  request.r(i1207[8], i1207[9], 0, i1206, 'connectedBody')
  i1206.breakForce = i1207[10]
  i1206.breakTorque = i1207[11]
  i1206.enableCollision = !!i1207[12]
  i1206.enabled = !!i1207[13]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1209 = data
  i1208.color = new pc.Color(i1209[0], i1209[1], i1209[2], i1209[3])
  request.r(i1209[4], i1209[5], 0, i1208, 'sprite')
  i1208.flipX = !!i1209[6]
  i1208.flipY = !!i1209[7]
  i1208.drawMode = i1209[8]
  i1208.size = new pc.Vec2( i1209[9], i1209[10] )
  i1208.tileMode = i1209[11]
  i1208.adaptiveModeThreshold = i1209[12]
  i1208.maskInteraction = i1209[13]
  i1208.spriteSortPoint = i1209[14]
  i1208.enabled = !!i1209[15]
  request.r(i1209[16], i1209[17], 0, i1208, 'sharedMaterial')
  var i1211 = i1209[18]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 2, i1210, '')
  }
  i1208.sharedMaterials = i1210
  i1208.receiveShadows = !!i1209[19]
  i1208.shadowCastingMode = i1209[20]
  i1208.sortingLayerID = i1209[21]
  i1208.sortingOrder = i1209[22]
  i1208.lightmapIndex = i1209[23]
  i1208.lightmapSceneIndex = i1209[24]
  i1208.lightmapScaleOffset = new pc.Vec4( i1209[25], i1209[26], i1209[27], i1209[28] )
  i1208.lightProbeUsage = i1209[29]
  i1208.reflectionProbeUsage = i1209[30]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.tagId = i1215[1]
  i1214.enabled = !!i1215[2]
  i1214.isStatic = !!i1215[3]
  i1214.layer = i1215[4]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1217 = data
  i1216.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1217[0], i1216.main)
  i1216.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1217[1], i1216.colorBySpeed)
  i1216.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1217[2], i1216.colorOverLifetime)
  i1216.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1217[3], i1216.emission)
  i1216.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1217[4], i1216.rotationBySpeed)
  i1216.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1217[5], i1216.rotationOverLifetime)
  i1216.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1217[6], i1216.shape)
  i1216.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1217[7], i1216.sizeBySpeed)
  i1216.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1217[8], i1216.sizeOverLifetime)
  i1216.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1217[9], i1216.textureSheetAnimation)
  i1216.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1217[10], i1216.velocityOverLifetime)
  i1216.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1217[11], i1216.noise)
  i1216.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1217[12], i1216.inheritVelocity)
  i1216.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1217[13], i1216.forceOverLifetime)
  i1216.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1217[14], i1216.limitVelocityOverLifetime)
  i1216.useAutoRandomSeed = !!i1217[15]
  i1216.randomSeed = i1217[16]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1218 = root || new pc.ParticleSystemMain()
  var i1219 = data
  i1218.duration = i1219[0]
  i1218.loop = !!i1219[1]
  i1218.prewarm = !!i1219[2]
  i1218.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[3], i1218.startDelay)
  i1218.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[4], i1218.startLifetime)
  i1218.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[5], i1218.startSpeed)
  i1218.startSize3D = !!i1219[6]
  i1218.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[7], i1218.startSizeX)
  i1218.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[8], i1218.startSizeY)
  i1218.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[9], i1218.startSizeZ)
  i1218.startRotation3D = !!i1219[10]
  i1218.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[11], i1218.startRotationX)
  i1218.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[12], i1218.startRotationY)
  i1218.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[13], i1218.startRotationZ)
  i1218.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1219[14], i1218.startColor)
  i1218.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1219[15], i1218.gravityModifier)
  i1218.simulationSpace = i1219[16]
  request.r(i1219[17], i1219[18], 0, i1218, 'customSimulationSpace')
  i1218.simulationSpeed = i1219[19]
  i1218.useUnscaledTime = !!i1219[20]
  i1218.scalingMode = i1219[21]
  i1218.playOnAwake = !!i1219[22]
  i1218.maxParticles = i1219[23]
  i1218.emitterVelocityMode = i1219[24]
  i1218.stopAction = i1219[25]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1220 = root || new pc.MinMaxCurve()
  var i1221 = data
  i1220.mode = i1221[0]
  i1220.curveMin = new pc.AnimationCurve( { keys_flow: i1221[1] } )
  i1220.curveMax = new pc.AnimationCurve( { keys_flow: i1221[2] } )
  i1220.curveMultiplier = i1221[3]
  i1220.constantMin = i1221[4]
  i1220.constantMax = i1221[5]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1222 = root || new pc.MinMaxGradient()
  var i1223 = data
  i1222.mode = i1223[0]
  i1222.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1223[1], i1222.gradientMin)
  i1222.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1223[2], i1222.gradientMax)
  i1222.colorMin = new pc.Color(i1223[3], i1223[4], i1223[5], i1223[6])
  i1222.colorMax = new pc.Color(i1223[7], i1223[8], i1223[9], i1223[10])
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1225 = data
  i1224.mode = i1225[0]
  var i1227 = i1225[1]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1227[i + 0]) );
  }
  i1224.colorKeys = i1226
  var i1229 = i1225[2]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1229[i + 0]) );
  }
  i1224.alphaKeys = i1228
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1230 = root || new pc.ParticleSystemColorBySpeed()
  var i1231 = data
  i1230.enabled = !!i1231[0]
  i1230.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1231[1], i1230.color)
  i1230.range = new pc.Vec2( i1231[2], i1231[3] )
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1235 = data
  i1234.color = new pc.Color(i1235[0], i1235[1], i1235[2], i1235[3])
  i1234.time = i1235[4]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1239 = data
  i1238.alpha = i1239[0]
  i1238.time = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1240 = root || new pc.ParticleSystemColorOverLifetime()
  var i1241 = data
  i1240.enabled = !!i1241[0]
  i1240.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1241[1], i1240.color)
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1242 = root || new pc.ParticleSystemEmitter()
  var i1243 = data
  i1242.enabled = !!i1243[0]
  i1242.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1243[1], i1242.rateOverTime)
  i1242.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1243[2], i1242.rateOverDistance)
  var i1245 = i1243[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1245[i + 0]) );
  }
  i1242.bursts = i1244
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1248 = root || new pc.ParticleSystemBurst()
  var i1249 = data
  i1248.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[0], i1248.count)
  i1248.cycleCount = i1249[1]
  i1248.minCount = i1249[2]
  i1248.maxCount = i1249[3]
  i1248.repeatInterval = i1249[4]
  i1248.time = i1249[5]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1250 = root || new pc.ParticleSystemRotationBySpeed()
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[1], i1250.x)
  i1250.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[2], i1250.y)
  i1250.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[3], i1250.z)
  i1250.separateAxes = !!i1251[4]
  i1250.range = new pc.Vec2( i1251[5], i1251[6] )
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1252 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1253 = data
  i1252.enabled = !!i1253[0]
  i1252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1253[1], i1252.x)
  i1252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1253[2], i1252.y)
  i1252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1253[3], i1252.z)
  i1252.separateAxes = !!i1253[4]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1254 = root || new pc.ParticleSystemShape()
  var i1255 = data
  i1254.enabled = !!i1255[0]
  i1254.shapeType = i1255[1]
  i1254.randomDirectionAmount = i1255[2]
  i1254.sphericalDirectionAmount = i1255[3]
  i1254.randomPositionAmount = i1255[4]
  i1254.alignToDirection = !!i1255[5]
  i1254.radius = i1255[6]
  i1254.radiusMode = i1255[7]
  i1254.radiusSpread = i1255[8]
  i1254.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1255[9], i1254.radiusSpeed)
  i1254.radiusThickness = i1255[10]
  i1254.angle = i1255[11]
  i1254.length = i1255[12]
  i1254.boxThickness = new pc.Vec3( i1255[13], i1255[14], i1255[15] )
  i1254.meshShapeType = i1255[16]
  request.r(i1255[17], i1255[18], 0, i1254, 'mesh')
  request.r(i1255[19], i1255[20], 0, i1254, 'meshRenderer')
  request.r(i1255[21], i1255[22], 0, i1254, 'skinnedMeshRenderer')
  i1254.useMeshMaterialIndex = !!i1255[23]
  i1254.meshMaterialIndex = i1255[24]
  i1254.useMeshColors = !!i1255[25]
  i1254.normalOffset = i1255[26]
  i1254.arc = i1255[27]
  i1254.arcMode = i1255[28]
  i1254.arcSpread = i1255[29]
  i1254.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1255[30], i1254.arcSpeed)
  i1254.donutRadius = i1255[31]
  i1254.position = new pc.Vec3( i1255[32], i1255[33], i1255[34] )
  i1254.rotation = new pc.Vec3( i1255[35], i1255[36], i1255[37] )
  i1254.scale = new pc.Vec3( i1255[38], i1255[39], i1255[40] )
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1256 = root || new pc.ParticleSystemSizeBySpeed()
  var i1257 = data
  i1256.enabled = !!i1257[0]
  i1256.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[1], i1256.x)
  i1256.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[2], i1256.y)
  i1256.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[3], i1256.z)
  i1256.separateAxes = !!i1257[4]
  i1256.range = new pc.Vec2( i1257[5], i1257[6] )
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1258 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1259[1], i1258.x)
  i1258.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1259[2], i1258.y)
  i1258.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1259[3], i1258.z)
  i1258.separateAxes = !!i1259[4]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1260 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1261 = data
  i1260.enabled = !!i1261[0]
  i1260.mode = i1261[1]
  i1260.animation = i1261[2]
  i1260.numTilesX = i1261[3]
  i1260.numTilesY = i1261[4]
  i1260.useRandomRow = !!i1261[5]
  i1260.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[6], i1260.frameOverTime)
  i1260.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[7], i1260.startFrame)
  i1260.cycleCount = i1261[8]
  i1260.rowIndex = i1261[9]
  i1260.flipU = i1261[10]
  i1260.flipV = i1261[11]
  i1260.spriteCount = i1261[12]
  var i1263 = i1261[13]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 2, i1262, '')
  }
  i1260.sprites = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1266 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[1], i1266.x)
  i1266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[2], i1266.y)
  i1266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[3], i1266.z)
  i1266.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[4], i1266.radial)
  i1266.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[5], i1266.speedModifier)
  i1266.space = i1267[6]
  i1266.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[7], i1266.orbitalX)
  i1266.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[8], i1266.orbitalY)
  i1266.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[9], i1266.orbitalZ)
  i1266.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[10], i1266.orbitalOffsetX)
  i1266.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[11], i1266.orbitalOffsetY)
  i1266.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1267[12], i1266.orbitalOffsetZ)
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1268 = root || new pc.ParticleSystemNoise()
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.separateAxes = !!i1269[1]
  i1268.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[2], i1268.strengthX)
  i1268.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[3], i1268.strengthY)
  i1268.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[4], i1268.strengthZ)
  i1268.frequency = i1269[5]
  i1268.damping = !!i1269[6]
  i1268.octaveCount = i1269[7]
  i1268.octaveMultiplier = i1269[8]
  i1268.octaveScale = i1269[9]
  i1268.quality = i1269[10]
  i1268.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[11], i1268.scrollSpeed)
  i1268.scrollSpeedMultiplier = i1269[12]
  i1268.remapEnabled = !!i1269[13]
  i1268.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[14], i1268.remapX)
  i1268.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[15], i1268.remapY)
  i1268.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[16], i1268.remapZ)
  i1268.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[17], i1268.positionAmount)
  i1268.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[18], i1268.rotationAmount)
  i1268.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1269[19], i1268.sizeAmount)
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1270 = root || new pc.ParticleSystemInheritVelocity()
  var i1271 = data
  i1270.enabled = !!i1271[0]
  i1270.mode = i1271[1]
  i1270.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1271[2], i1270.curve)
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1272 = root || new pc.ParticleSystemForceOverLifetime()
  var i1273 = data
  i1272.enabled = !!i1273[0]
  i1272.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1273[1], i1272.x)
  i1272.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1273[2], i1272.y)
  i1272.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1273[3], i1272.z)
  i1272.space = i1273[4]
  i1272.randomized = !!i1273[5]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1274 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1275 = data
  i1274.enabled = !!i1275[0]
  i1274.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1275[1], i1274.limit)
  i1274.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1275[2], i1274.limitX)
  i1274.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1275[3], i1274.limitY)
  i1274.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1275[4], i1274.limitZ)
  i1274.dampen = i1275[5]
  i1274.separateAxes = !!i1275[6]
  i1274.space = i1275[7]
  i1274.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1275[8], i1274.drag)
  i1274.multiplyDragByParticleSize = !!i1275[9]
  i1274.multiplyDragByParticleVelocity = !!i1275[10]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'mesh')
  i1276.meshCount = i1277[2]
  i1276.activeVertexStreamsCount = i1277[3]
  i1276.alignment = i1277[4]
  i1276.renderMode = i1277[5]
  i1276.sortMode = i1277[6]
  i1276.lengthScale = i1277[7]
  i1276.velocityScale = i1277[8]
  i1276.cameraVelocityScale = i1277[9]
  i1276.normalDirection = i1277[10]
  i1276.sortingFudge = i1277[11]
  i1276.minParticleSize = i1277[12]
  i1276.maxParticleSize = i1277[13]
  i1276.pivot = new pc.Vec3( i1277[14], i1277[15], i1277[16] )
  request.r(i1277[17], i1277[18], 0, i1276, 'trailMaterial')
  i1276.applyActiveColorSpace = !!i1277[19]
  i1276.enabled = !!i1277[20]
  request.r(i1277[21], i1277[22], 0, i1276, 'sharedMaterial')
  var i1279 = i1277[23]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 2, i1278, '')
  }
  i1276.sharedMaterials = i1278
  i1276.receiveShadows = !!i1277[24]
  i1276.shadowCastingMode = i1277[25]
  i1276.sortingLayerID = i1277[26]
  i1276.sortingOrder = i1277[27]
  i1276.lightmapIndex = i1277[28]
  i1276.lightmapSceneIndex = i1277[29]
  i1276.lightmapScaleOffset = new pc.Vec4( i1277[30], i1277[31], i1277[32], i1277[33] )
  i1276.lightProbeUsage = i1277[34]
  i1276.reflectionProbeUsage = i1277[35]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.index = i1281[1]
  i1280.startup = !!i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1283 = data
  i1282.aspect = i1283[0]
  i1282.orthographic = !!i1283[1]
  i1282.orthographicSize = i1283[2]
  i1282.backgroundColor = new pc.Color(i1283[3], i1283[4], i1283[5], i1283[6])
  i1282.nearClipPlane = i1283[7]
  i1282.farClipPlane = i1283[8]
  i1282.fieldOfView = i1283[9]
  i1282.depth = i1283[10]
  i1282.clearFlags = i1283[11]
  i1282.cullingMask = i1283[12]
  i1282.rect = i1283[13]
  request.r(i1283[14], i1283[15], 0, i1282, 'targetTexture')
  i1282.usePhysicalProperties = !!i1283[16]
  i1282.focalLength = i1283[17]
  i1282.sensorSize = new pc.Vec2( i1283[18], i1283[19] )
  i1282.lensShift = new pc.Vec2( i1283[20], i1283[21] )
  i1282.gateFit = i1283[22]
  i1282.commandBufferCount = i1283[23]
  i1282.cameraType = i1283[24]
  i1282.enabled = !!i1283[25]
  return i1282
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'm_FirstSelected')
  i1284.m_sendNavigationEvents = !!i1285[2]
  i1284.m_DragThreshold = i1285[3]
  return i1284
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1287 = data
  i1286.m_HorizontalAxis = i1287[0]
  i1286.m_VerticalAxis = i1287[1]
  i1286.m_SubmitButton = i1287[2]
  i1286.m_CancelButton = i1287[3]
  i1286.m_InputActionsPerSecond = i1287[4]
  i1286.m_RepeatDelay = i1287[5]
  i1286.m_ForceModuleActive = !!i1287[6]
  i1286.m_SendPointerHoverToParent = !!i1287[7]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1289 = data
  i1288.pivot = new pc.Vec2( i1289[0], i1289[1] )
  i1288.anchorMin = new pc.Vec2( i1289[2], i1289[3] )
  i1288.anchorMax = new pc.Vec2( i1289[4], i1289[5] )
  i1288.sizeDelta = new pc.Vec2( i1289[6], i1289[7] )
  i1288.anchoredPosition3D = new pc.Vec3( i1289[8], i1289[9], i1289[10] )
  i1288.rotation = new pc.Quat(i1289[11], i1289[12], i1289[13], i1289[14])
  i1288.scale = new pc.Vec3( i1289[15], i1289[16], i1289[17] )
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1291 = data
  i1290.planeDistance = i1291[0]
  i1290.referencePixelsPerUnit = i1291[1]
  i1290.isFallbackOverlay = !!i1291[2]
  i1290.renderMode = i1291[3]
  i1290.renderOrder = i1291[4]
  i1290.sortingLayerName = i1291[5]
  i1290.sortingOrder = i1291[6]
  i1290.scaleFactor = i1291[7]
  request.r(i1291[8], i1291[9], 0, i1290, 'worldCamera')
  i1290.overrideSorting = !!i1291[10]
  i1290.pixelPerfect = !!i1291[11]
  i1290.targetDisplay = i1291[12]
  i1290.overridePixelPerfect = !!i1291[13]
  i1290.enabled = !!i1291[14]
  return i1290
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1293 = data
  i1292.m_UiScaleMode = i1293[0]
  i1292.m_ReferencePixelsPerUnit = i1293[1]
  i1292.m_ScaleFactor = i1293[2]
  i1292.m_ReferenceResolution = new pc.Vec2( i1293[3], i1293[4] )
  i1292.m_ScreenMatchMode = i1293[5]
  i1292.m_MatchWidthOrHeight = i1293[6]
  i1292.m_PhysicalUnit = i1293[7]
  i1292.m_FallbackScreenDPI = i1293[8]
  i1292.m_DefaultSpriteDPI = i1293[9]
  i1292.m_DynamicPixelsPerUnit = i1293[10]
  i1292.m_PresetInfoIsWorld = !!i1293[11]
  return i1292
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1295 = data
  i1294.m_IgnoreReversedGraphics = !!i1295[0]
  i1294.m_BlockingObjects = i1295[1]
  i1294.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1295[2] )
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1297 = data
  i1296.cullTransparentMesh = !!i1297[0]
  return i1296
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1299 = data
  i1298.m_AspectMode = i1299[0]
  i1298.m_AspectRatio = i1299[1]
  return i1298
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'm_Texture')
  i1300.m_UVRect = UnityEngine.Rect.MinMaxRect(i1301[2], i1301[3], i1301[4], i1301[5])
  request.r(i1301[6], i1301[7], 0, i1300, 'm_Material')
  i1300.m_Maskable = !!i1301[8]
  i1300.m_Color = new pc.Color(i1301[9], i1301[10], i1301[11], i1301[12])
  i1300.m_RaycastTarget = !!i1301[13]
  i1300.m_RaycastPadding = new pc.Vec4( i1301[14], i1301[15], i1301[16], i1301[17] )
  return i1300
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1302 = root || request.c( 'MonsterController' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'joint')
  request.r(i1303[2], i1303[3], 0, i1302, 'rb')
  request.r(i1303[4], i1303[5], 0, i1302, 'deadSFX')
  i1302.force = new pc.Vec2( i1303[6], i1303[7] )
  return i1302
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1304 = root || request.c( 'BonkController' )
  var i1305 = data
  i1304.target = i1305[0]
  i1304.maxBonk = i1305[1]
  request.r(i1305[2], i1305[3], 0, i1304, 'hitSound')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1307 = data
  i1306.radius = i1307[0]
  i1306.enabled = !!i1307[1]
  i1306.isTrigger = !!i1307[2]
  i1306.usedByEffector = !!i1307[3]
  i1306.density = i1307[4]
  i1306.offset = new pc.Vec2( i1307[5], i1307[6] )
  request.r(i1307[7], i1307[8], 0, i1306, 'material')
  return i1306
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.Button' )
  var i1309 = data
  i1308.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1309[0], i1308.m_OnClick)
  i1308.m_Navigation = request.d('UnityEngine.UI.Navigation', i1309[1], i1308.m_Navigation)
  i1308.m_Transition = i1309[2]
  i1308.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1309[3], i1308.m_Colors)
  i1308.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1309[4], i1308.m_SpriteState)
  i1308.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1309[5], i1308.m_AnimationTriggers)
  i1308.m_Interactable = !!i1309[6]
  request.r(i1309[7], i1309[8], 0, i1308, 'm_TargetGraphic')
  return i1308
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1311 = data
  i1310.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1311[0], i1310.m_PersistentCalls)
  return i1310
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.Events.PersistentCall', i1315[i + 0]));
  }
  i1312.m_Calls = i1314
  return i1312
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'm_Target')
  i1318.m_TargetAssemblyTypeName = i1319[2]
  i1318.m_MethodName = i1319[3]
  i1318.m_Mode = i1319[4]
  i1318.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1319[5], i1318.m_Arguments)
  i1318.m_CallState = i1319[6]
  return i1318
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1321 = data
  i1320.m_Mode = i1321[0]
  i1320.m_WrapAround = !!i1321[1]
  request.r(i1321[2], i1321[3], 0, i1320, 'm_SelectOnUp')
  request.r(i1321[4], i1321[5], 0, i1320, 'm_SelectOnDown')
  request.r(i1321[6], i1321[7], 0, i1320, 'm_SelectOnLeft')
  request.r(i1321[8], i1321[9], 0, i1320, 'm_SelectOnRight')
  return i1320
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1323 = data
  i1322.m_NormalColor = new pc.Color(i1323[0], i1323[1], i1323[2], i1323[3])
  i1322.m_HighlightedColor = new pc.Color(i1323[4], i1323[5], i1323[6], i1323[7])
  i1322.m_PressedColor = new pc.Color(i1323[8], i1323[9], i1323[10], i1323[11])
  i1322.m_SelectedColor = new pc.Color(i1323[12], i1323[13], i1323[14], i1323[15])
  i1322.m_DisabledColor = new pc.Color(i1323[16], i1323[17], i1323[18], i1323[19])
  i1322.m_ColorMultiplier = i1323[20]
  i1322.m_FadeDuration = i1323[21]
  return i1322
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'm_HighlightedSprite')
  request.r(i1325[2], i1325[3], 0, i1324, 'm_PressedSprite')
  request.r(i1325[4], i1325[5], 0, i1324, 'm_SelectedSprite')
  request.r(i1325[6], i1325[7], 0, i1324, 'm_DisabledSprite')
  return i1324
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1327 = data
  i1326.m_NormalTrigger = i1327[0]
  i1326.m_HighlightedTrigger = i1327[1]
  i1326.m_PressedTrigger = i1327[2]
  i1326.m_SelectedTrigger = i1327[3]
  i1326.m_DisabledTrigger = i1327[4]
  return i1326
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.UI.Image' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'm_Sprite')
  i1328.m_Type = i1329[2]
  i1328.m_PreserveAspect = !!i1329[3]
  i1328.m_FillCenter = !!i1329[4]
  i1328.m_FillMethod = i1329[5]
  i1328.m_FillAmount = i1329[6]
  i1328.m_FillClockwise = !!i1329[7]
  i1328.m_FillOrigin = i1329[8]
  i1328.m_UseSpriteMesh = !!i1329[9]
  i1328.m_PixelsPerUnitMultiplier = i1329[10]
  request.r(i1329[11], i1329[12], 0, i1328, 'm_Material')
  i1328.m_Maskable = !!i1329[13]
  i1328.m_Color = new pc.Color(i1329[14], i1329[15], i1329[16], i1329[17])
  i1328.m_RaycastTarget = !!i1329[18]
  i1328.m_RaycastPadding = new pc.Vec4( i1329[19], i1329[20], i1329[21], i1329[22] )
  return i1328
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1331 = data
  i1330.targetIsSelf = !!i1331[0]
  request.r(i1331[1], i1331[2], 0, i1330, 'targetGO')
  i1330.tweenTargetIsTargetGO = !!i1331[3]
  i1330.delay = i1331[4]
  i1330.duration = i1331[5]
  i1330.easeType = i1331[6]
  i1330.easeCurve = new pc.AnimationCurve( { keys_flow: i1331[7] } )
  i1330.loopType = i1331[8]
  i1330.loops = i1331[9]
  i1330.id = i1331[10]
  i1330.isRelative = !!i1331[11]
  i1330.isFrom = !!i1331[12]
  i1330.isIndependentUpdate = !!i1331[13]
  i1330.autoKill = !!i1331[14]
  i1330.autoGenerate = !!i1331[15]
  i1330.isActive = !!i1331[16]
  i1330.isValid = !!i1331[17]
  request.r(i1331[18], i1331[19], 0, i1330, 'target')
  i1330.animationType = i1331[20]
  i1330.targetType = i1331[21]
  i1330.forcedTargetType = i1331[22]
  i1330.autoPlay = !!i1331[23]
  i1330.useTargetAsV3 = !!i1331[24]
  i1330.endValueFloat = i1331[25]
  i1330.endValueV3 = new pc.Vec3( i1331[26], i1331[27], i1331[28] )
  i1330.endValueV2 = new pc.Vec2( i1331[29], i1331[30] )
  i1330.endValueColor = new pc.Color(i1331[31], i1331[32], i1331[33], i1331[34])
  i1330.endValueString = i1331[35]
  i1330.endValueRect = UnityEngine.Rect.MinMaxRect(i1331[36], i1331[37], i1331[38], i1331[39])
  request.r(i1331[40], i1331[41], 0, i1330, 'endValueTransform')
  i1330.optionalBool0 = !!i1331[42]
  i1330.optionalBool1 = !!i1331[43]
  i1330.optionalFloat0 = i1331[44]
  i1330.optionalInt0 = i1331[45]
  i1330.optionalRotationMode = i1331[46]
  i1330.optionalScrambleMode = i1331[47]
  i1330.optionalShakeRandomnessMode = i1331[48]
  i1330.optionalString = i1331[49]
  i1330.updateType = i1331[50]
  i1330.isSpeedBased = !!i1331[51]
  i1330.hasOnStart = !!i1331[52]
  i1330.hasOnPlay = !!i1331[53]
  i1330.hasOnUpdate = !!i1331[54]
  i1330.hasOnStepComplete = !!i1331[55]
  i1330.hasOnComplete = !!i1331[56]
  i1330.hasOnTweenCreated = !!i1331[57]
  i1330.hasOnRewind = !!i1331[58]
  i1330.onStart = request.d('UnityEngine.Events.UnityEvent', i1331[59], i1330.onStart)
  i1330.onPlay = request.d('UnityEngine.Events.UnityEvent', i1331[60], i1330.onPlay)
  i1330.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1331[61], i1330.onUpdate)
  i1330.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1331[62], i1330.onStepComplete)
  i1330.onComplete = request.d('UnityEngine.Events.UnityEvent', i1331[63], i1330.onComplete)
  i1330.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1331[64], i1330.onTweenCreated)
  i1330.onRewind = request.d('UnityEngine.Events.UnityEvent', i1331[65], i1330.onRewind)
  return i1330
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1333 = data
  i1332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1333[0], i1332.m_PersistentCalls)
  return i1332
}

Deserializers["GameController"] = function (request, data, root) {
  var i1334 = root || request.c( 'GameController' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1334.monsters = i1336
  var i1339 = i1335[1]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1339.length; i += 3) {
    i1338.add(new pc.Vec3( i1339[i + 0], i1339[i + 1], i1339[i + 2] ));
  }
  i1334.cameraPos = i1338
  i1334.speedMove = i1335[2]
  request.r(i1335[3], i1335[4], 0, i1334, 'target')
  i1334.index = i1335[5]
  i1334.end = !!i1335[6]
  request.r(i1335[7], i1335[8], 0, i1334, 'mainCamera')
  request.r(i1335[9], i1335[10], 0, i1334, 'endUI')
  return i1334
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1344 = root || request.c( 'TargetController' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1344.listTarget = i1346
  request.r(i1345[1], i1345[2], 0, i1344, 'currentTarget')
  i1344.index = i1345[3]
  request.r(i1345[4], i1345[5], 0, i1344, 'tut')
  return i1344
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1350 = root || request.c( 'LunaController' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'BGTexture')
  i1350.UseTime = !!i1351[2]
  i1350.TimePlay = i1351[3]
  i1350.Character1 = i1351[4]
  i1350.Character2 = i1351[5]
  var i1353 = i1351[6]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1350.CharacterPrefabs = i1352
  i1350.characterFolder = i1351[7]
  request.r(i1351[8], i1351[9], 0, i1350, 'characterController')
  request.r(i1351[10], i1351[11], 0, i1350, 'BGImage')
  var i1355 = i1351[12]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1350.CTA = i1354
  return i1350
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1360 = root || request.c( 'AudioController' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'BGM')
  request.r(i1361[2], i1361[3], 0, i1360, 'musicSource')
  request.r(i1361[4], i1361[5], 0, i1360, 'pool')
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'clip')
  request.r(i1363[2], i1363[3], 0, i1362, 'outputAudioMixerGroup')
  i1362.playOnAwake = !!i1363[4]
  i1362.loop = !!i1363[5]
  i1362.time = i1363[6]
  i1362.volume = i1363[7]
  i1362.pitch = i1363[8]
  i1362.enabled = !!i1363[9]
  return i1362
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1364 = root || request.c( 'VFXController' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'bloodPrefab')
  request.r(i1365[2], i1365[3], 0, i1364, 'pool')
  return i1364
}

Deserializers["CharacterController"] = function (request, data, root) {
  var i1366 = root || request.c( 'CharacterController' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1369.length; i += 2) {
  request.r(i1369[i + 0], i1369[i + 1], 1, i1368, '')
  }
  i1366.character1Targets = i1368
  var i1371 = i1367[1]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 1, i1370, '')
  }
  i1366.character2Targets = i1370
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1375 = data
  i1374.ambientIntensity = i1375[0]
  i1374.reflectionIntensity = i1375[1]
  i1374.ambientMode = i1375[2]
  i1374.ambientLight = new pc.Color(i1375[3], i1375[4], i1375[5], i1375[6])
  i1374.ambientSkyColor = new pc.Color(i1375[7], i1375[8], i1375[9], i1375[10])
  i1374.ambientGroundColor = new pc.Color(i1375[11], i1375[12], i1375[13], i1375[14])
  i1374.ambientEquatorColor = new pc.Color(i1375[15], i1375[16], i1375[17], i1375[18])
  i1374.fogColor = new pc.Color(i1375[19], i1375[20], i1375[21], i1375[22])
  i1374.fogEndDistance = i1375[23]
  i1374.fogStartDistance = i1375[24]
  i1374.fogDensity = i1375[25]
  i1374.fog = !!i1375[26]
  request.r(i1375[27], i1375[28], 0, i1374, 'skybox')
  i1374.fogMode = i1375[29]
  var i1377 = i1375[30]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1377[i + 0]) );
  }
  i1374.lightmaps = i1376
  i1374.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1375[31], i1374.lightProbes)
  i1374.lightmapsMode = i1375[32]
  i1374.mixedBakeMode = i1375[33]
  i1374.environmentLightingMode = i1375[34]
  i1374.ambientProbe = new pc.SphericalHarmonicsL2(i1375[35])
  request.r(i1375[36], i1375[37], 0, i1374, 'customReflection')
  request.r(i1375[38], i1375[39], 0, i1374, 'defaultReflection')
  i1374.defaultReflectionMode = i1375[40]
  i1374.defaultReflectionResolution = i1375[41]
  i1374.sunLightObjectId = i1375[42]
  i1374.pixelLightCount = i1375[43]
  i1374.defaultReflectionHDR = !!i1375[44]
  i1374.hasLightDataAsset = !!i1375[45]
  i1374.hasManualGenerate = !!i1375[46]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'lightmapColor')
  request.r(i1381[2], i1381[3], 0, i1380, 'lightmapDirection')
  request.r(i1381[4], i1381[5], 0, i1380, 'shadowMask')
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1382 = root || new UnityEngine.LightProbes()
  var i1383 = data
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1393[i + 0]));
  }
  i1390.ShaderCompilationErrors = i1392
  i1390.name = i1391[1]
  i1390.guid = i1391[2]
  var i1395 = i1391[3]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( i1395[i + 0] );
  }
  i1390.shaderDefinedKeywords = i1394
  var i1397 = i1391[4]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1397[i + 0]) );
  }
  i1390.passes = i1396
  var i1399 = i1391[5]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1399[i + 0]) );
  }
  i1390.usePasses = i1398
  var i1401 = i1391[6]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1401[i + 0]) );
  }
  i1390.defaultParameterValues = i1400
  request.r(i1391[7], i1391[8], 0, i1390, 'unityFallbackShader')
  i1390.readDepth = !!i1391[9]
  i1390.hasDepthOnlyPass = !!i1391[10]
  i1390.isCreatedByShaderGraph = !!i1391[11]
  i1390.disableBatching = !!i1391[12]
  i1390.compiled = !!i1391[13]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1405 = data
  i1404.shaderName = i1405[0]
  i1404.errorMessage = i1405[1]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1410 = root || new pc.UnityShaderPass()
  var i1411 = data
  i1410.id = i1411[0]
  i1410.subShaderIndex = i1411[1]
  i1410.name = i1411[2]
  i1410.passType = i1411[3]
  i1410.grabPassTextureName = i1411[4]
  i1410.usePass = !!i1411[5]
  i1410.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[6], i1410.zTest)
  i1410.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[7], i1410.zWrite)
  i1410.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[8], i1410.culling)
  i1410.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1411[9], i1410.blending)
  i1410.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1411[10], i1410.alphaBlending)
  i1410.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[11], i1410.colorWriteMask)
  i1410.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[12], i1410.offsetUnits)
  i1410.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[13], i1410.offsetFactor)
  i1410.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[14], i1410.stencilRef)
  i1410.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[15], i1410.stencilReadMask)
  i1410.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1411[16], i1410.stencilWriteMask)
  i1410.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1411[17], i1410.stencilOp)
  i1410.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1411[18], i1410.stencilOpFront)
  i1410.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1411[19], i1410.stencilOpBack)
  var i1413 = i1411[20]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1413[i + 0]) );
  }
  i1410.tags = i1412
  var i1415 = i1411[21]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( i1415[i + 0] );
  }
  i1410.passDefinedKeywords = i1414
  var i1417 = i1411[22]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1417[i + 0]) );
  }
  i1410.passDefinedKeywordGroups = i1416
  var i1419 = i1411[23]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1419[i + 0]) );
  }
  i1410.variants = i1418
  var i1421 = i1411[24]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1421[i + 0]) );
  }
  i1410.excludedVariants = i1420
  i1410.hasDepthReader = !!i1411[25]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1423 = data
  i1422.val = i1423[0]
  i1422.name = i1423[1]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1425 = data
  i1424.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[0], i1424.src)
  i1424.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[1], i1424.dst)
  i1424.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1425[2], i1424.op)
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1427 = data
  i1426.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1427[0], i1426.pass)
  i1426.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1427[1], i1426.fail)
  i1426.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1427[2], i1426.zFail)
  i1426.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1427[3], i1426.comp)
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.value = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1435 = data
  var i1437 = i1435[0]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( i1437[i + 0] );
  }
  i1434.keywords = i1436
  i1434.hasDiscard = !!i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1441 = data
  i1440.passId = i1441[0]
  i1440.subShaderIndex = i1441[1]
  var i1443 = i1441[2]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( i1443[i + 0] );
  }
  i1440.keywords = i1442
  i1440.vertexProgram = i1441[3]
  i1440.fragmentProgram = i1441[4]
  i1440.exportedForWebGl2 = !!i1441[5]
  i1440.readDepth = !!i1441[6]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'shader')
  i1446.pass = i1447[2]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1451 = data
  i1450.name = i1451[0]
  i1450.type = i1451[1]
  i1450.value = new pc.Vec4( i1451[2], i1451[3], i1451[4], i1451[5] )
  i1450.textureValue = i1451[6]
  i1450.shaderPropertyFlag = i1451[7]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1453 = data
  i1452.name = i1453[0]
  request.r(i1453[1], i1453[2], 0, i1452, 'texture')
  i1452.aabb = i1453[3]
  i1452.vertices = i1453[4]
  i1452.triangles = i1453[5]
  i1452.textureRect = UnityEngine.Rect.MinMaxRect(i1453[6], i1453[7], i1453[8], i1453[9])
  i1452.packedRect = UnityEngine.Rect.MinMaxRect(i1453[10], i1453[11], i1453[12], i1453[13])
  i1452.border = new pc.Vec4( i1453[14], i1453[15], i1453[16], i1453[17] )
  i1452.transparency = i1453[18]
  i1452.bounds = i1453[19]
  i1452.pixelsPerUnit = i1453[20]
  i1452.textureWidth = i1453[21]
  i1452.textureHeight = i1453[22]
  i1452.nativeSize = new pc.Vec2( i1453[23], i1453[24] )
  i1452.pivot = new pc.Vec2( i1453[25], i1453[26] )
  i1452.textureRectOffset = new pc.Vec2( i1453[27], i1453[28] )
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1455 = data
  i1454.name = i1455[0]
  return i1454
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1457 = data
  i1456.useSafeMode = !!i1457[0]
  i1456.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1457[1], i1456.safeModeOptions)
  i1456.timeScale = i1457[2]
  i1456.unscaledTimeScale = i1457[3]
  i1456.useSmoothDeltaTime = !!i1457[4]
  i1456.maxSmoothUnscaledTime = i1457[5]
  i1456.rewindCallbackMode = i1457[6]
  i1456.showUnityEditorReport = !!i1457[7]
  i1456.logBehaviour = i1457[8]
  i1456.drawGizmos = !!i1457[9]
  i1456.defaultRecyclable = !!i1457[10]
  i1456.defaultAutoPlay = i1457[11]
  i1456.defaultUpdateType = i1457[12]
  i1456.defaultTimeScaleIndependent = !!i1457[13]
  i1456.defaultEaseType = i1457[14]
  i1456.defaultEaseOvershootOrAmplitude = i1457[15]
  i1456.defaultEasePeriod = i1457[16]
  i1456.defaultAutoKill = !!i1457[17]
  i1456.defaultLoopType = i1457[18]
  i1456.debugMode = !!i1457[19]
  i1456.debugStoreTargetId = !!i1457[20]
  i1456.showPreviewPanel = !!i1457[21]
  i1456.storeSettingsLocation = i1457[22]
  i1456.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1457[23], i1456.modules)
  i1456.createASMDEF = !!i1457[24]
  i1456.showPlayingTweens = !!i1457[25]
  i1456.showPausedTweens = !!i1457[26]
  return i1456
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1459 = data
  i1458.logBehaviour = i1459[0]
  i1458.nestedTweenFailureBehaviour = i1459[1]
  return i1458
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1460 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1461 = data
  i1460.showPanel = !!i1461[0]
  i1460.audioEnabled = !!i1461[1]
  i1460.physicsEnabled = !!i1461[2]
  i1460.physics2DEnabled = !!i1461[3]
  i1460.spriteEnabled = !!i1461[4]
  i1460.uiEnabled = !!i1461[5]
  i1460.textMeshProEnabled = !!i1461[6]
  i1460.tk2DEnabled = !!i1461[7]
  i1460.deAudioEnabled = !!i1461[8]
  i1460.deUnityExtendedEnabled = !!i1461[9]
  i1460.epoOutlineEnabled = !!i1461[10]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1463 = data
  var i1465 = i1463[0]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1465[i + 0]) );
  }
  i1462.files = i1464
  i1462.componentToPrefabIds = i1463[1]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1469 = data
  i1468.path = i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'unityObject')
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1473[i + 0]) );
  }
  i1470.scriptsExecutionOrder = i1472
  var i1475 = i1471[1]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1475[i + 0]) );
  }
  i1470.sortingLayers = i1474
  var i1477 = i1471[2]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1477[i + 0]) );
  }
  i1470.cullingLayers = i1476
  i1470.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1471[3], i1470.timeSettings)
  i1470.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1471[4], i1470.physicsSettings)
  i1470.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1471[5], i1470.physics2DSettings)
  i1470.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1471[6], i1470.qualitySettings)
  i1470.enableRealtimeShadows = !!i1471[7]
  i1470.enableAutoInstancing = !!i1471[8]
  i1470.enableStaticBatching = !!i1471[9]
  i1470.enableDynamicBatching = !!i1471[10]
  i1470.usePreservativeDynamicBatching = !!i1471[11]
  i1470.lightmapEncodingQuality = i1471[12]
  i1470.desiredColorSpace = i1471[13]
  var i1479 = i1471[14]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1470.allTags = i1478
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.value = i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1487 = data
  i1486.id = i1487[0]
  i1486.name = i1487[1]
  i1486.value = i1487[2]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1491 = data
  i1490.id = i1491[0]
  i1490.name = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1493 = data
  i1492.fixedDeltaTime = i1493[0]
  i1492.maximumDeltaTime = i1493[1]
  i1492.timeScale = i1493[2]
  i1492.maximumParticleTimestep = i1493[3]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1495 = data
  i1494.gravity = new pc.Vec3( i1495[0], i1495[1], i1495[2] )
  i1494.defaultSolverIterations = i1495[3]
  i1494.bounceThreshold = i1495[4]
  i1494.autoSyncTransforms = !!i1495[5]
  i1494.autoSimulation = !!i1495[6]
  var i1497 = i1495[7]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1497[i + 0]) );
  }
  i1494.collisionMatrix = i1496
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.layerId = i1501[1]
  i1500.otherLayerId = i1501[2]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'material')
  i1502.gravity = new pc.Vec2( i1503[2], i1503[3] )
  i1502.positionIterations = i1503[4]
  i1502.velocityIterations = i1503[5]
  i1502.velocityThreshold = i1503[6]
  i1502.maxLinearCorrection = i1503[7]
  i1502.maxAngularCorrection = i1503[8]
  i1502.maxTranslationSpeed = i1503[9]
  i1502.maxRotationSpeed = i1503[10]
  i1502.baumgarteScale = i1503[11]
  i1502.baumgarteTOIScale = i1503[12]
  i1502.timeToSleep = i1503[13]
  i1502.linearSleepTolerance = i1503[14]
  i1502.angularSleepTolerance = i1503[15]
  i1502.defaultContactOffset = i1503[16]
  i1502.autoSimulation = !!i1503[17]
  i1502.queriesHitTriggers = !!i1503[18]
  i1502.queriesStartInColliders = !!i1503[19]
  i1502.callbacksOnDisable = !!i1503[20]
  i1502.reuseCollisionCallbacks = !!i1503[21]
  i1502.autoSyncTransforms = !!i1503[22]
  var i1505 = i1503[23]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1505[i + 0]) );
  }
  i1502.collisionMatrix = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.layerId = i1509[1]
  i1508.otherLayerId = i1509[2]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1513[i + 0]) );
  }
  i1510.qualityLevels = i1512
  var i1515 = i1511[1]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1510.names = i1514
  i1510.shadows = i1511[2]
  i1510.anisotropicFiltering = i1511[3]
  i1510.antiAliasing = i1511[4]
  i1510.lodBias = i1511[5]
  i1510.shadowCascades = i1511[6]
  i1510.shadowDistance = i1511[7]
  i1510.shadowmaskMode = i1511[8]
  i1510.shadowProjection = i1511[9]
  i1510.shadowResolution = i1511[10]
  i1510.softParticles = !!i1511[11]
  i1510.softVegetation = !!i1511[12]
  i1510.activeColorSpace = i1511[13]
  i1510.desiredColorSpace = i1511[14]
  i1510.masterTextureLimit = i1511[15]
  i1510.maxQueuedFrames = i1511[16]
  i1510.particleRaycastBudget = i1511[17]
  i1510.pixelLightCount = i1511[18]
  i1510.realtimeReflectionProbes = !!i1511[19]
  i1510.shadowCascade2Split = i1511[20]
  i1510.shadowCascade4Split = new pc.Vec3( i1511[21], i1511[22], i1511[23] )
  i1510.streamingMipmapsActive = !!i1511[24]
  i1510.vSyncCount = i1511[25]
  i1510.asyncUploadBufferSize = i1511[26]
  i1510.asyncUploadTimeSlice = i1511[27]
  i1510.billboardsFaceCameraPosition = !!i1511[28]
  i1510.shadowNearPlaneOffset = i1511[29]
  i1510.streamingMipmapsMemoryBudget = i1511[30]
  i1510.maximumLODLevel = i1511[31]
  i1510.streamingMipmapsAddAllCameras = !!i1511[32]
  i1510.streamingMipmapsMaxLevelReduction = i1511[33]
  i1510.streamingMipmapsRenderersPerFrame = i1511[34]
  i1510.resolutionScalingFixedDPIFactor = i1511[35]
  i1510.streamingMipmapsMaxFileIORequests = i1511[36]
  i1510.currentQualityLevel = i1511[37]
  return i1510
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_ObjectArgument')
  i1518.m_ObjectArgumentAssemblyTypeName = i1519[2]
  i1518.m_IntArgument = i1519[3]
  i1518.m_FloatArgument = i1519[4]
  i1518.m_StringArgument = i1519[5]
  i1518.m_BoolArgument = !!i1519[6]
  return i1518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[12],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[2],"60":[2],"61":[2],"62":[2],"63":[2],"64":[2],"5":[2],"65":[2],"66":[2],"6":[2],"67":[2],"68":[2],"69":[2],"70":[12],"71":[72],"73":[74],"75":[74],"18":[17],"76":[7],"77":[12],"78":[79],"80":[17],"81":[21,17],"82":[72],"83":[21,17],"84":[17],"85":[17],"86":[72,17],"87":[17,21],"88":[89],"90":[89],"91":[89],"92":[17],"93":[17],"20":[18],"30":[21,17],"22":[17],"19":[18],"94":[17],"95":[17],"96":[17],"97":[17],"98":[17],"99":[17],"100":[17],"101":[17],"102":[17],"23":[21,17],"103":[17],"104":[17],"105":[17],"106":[17],"107":[21,17],"108":[17],"109":[15],"110":[15],"16":[15],"111":[15],"112":[12],"113":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.Rendering.SortingGroup","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.AudioClip","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","CharacterController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/29/2026 08:30:24";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PMP_V03_TrangHTT_DatDV";

Deserializers.lunaAppID = "42757";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1801";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4168";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "09f981eb-545c-47f4-8cd6-2c7987f0cf0a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

