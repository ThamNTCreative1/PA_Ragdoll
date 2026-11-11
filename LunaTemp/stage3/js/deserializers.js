var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.JointSpring' )
  var i1189 = data
  i1188.spring = i1189[0]
  i1188.damper = i1189[1]
  i1188.targetPosition = i1189[2]
  return i1188
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.JointMotor' )
  var i1191 = data
  i1190.m_TargetVelocity = i1191[0]
  i1190.m_Force = i1191[1]
  i1190.m_FreeSpin = i1191[2]
  return i1190
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.JointLimits' )
  var i1193 = data
  i1192.m_Min = i1193[0]
  i1192.m_Max = i1193[1]
  i1192.m_Bounciness = i1193[2]
  i1192.m_BounceMinVelocity = i1193[3]
  i1192.m_ContactDistance = i1193[4]
  i1192.minBounce = i1193[5]
  i1192.maxBounce = i1193[6]
  return i1192
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.JointDrive' )
  var i1195 = data
  i1194.m_PositionSpring = i1195[0]
  i1194.m_PositionDamper = i1195[1]
  i1194.m_MaximumForce = i1195[2]
  i1194.m_UseAcceleration = i1195[3]
  return i1194
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1197 = data
  i1196.m_Spring = i1197[0]
  i1196.m_Damper = i1197[1]
  return i1196
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1199 = data
  i1198.m_Limit = i1199[0]
  i1198.m_Bounciness = i1199[1]
  i1198.m_ContactDistance = i1199[2]
  return i1198
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1201 = data
  i1200.m_ExtremumSlip = i1201[0]
  i1200.m_ExtremumValue = i1201[1]
  i1200.m_AsymptoteSlip = i1201[2]
  i1200.m_AsymptoteValue = i1201[3]
  i1200.m_Stiffness = i1201[4]
  return i1200
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1203 = data
  i1202.m_LowerAngle = i1203[0]
  i1202.m_UpperAngle = i1203[1]
  return i1202
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1205 = data
  i1204.m_MotorSpeed = i1205[0]
  i1204.m_MaximumMotorTorque = i1205[1]
  return i1204
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1207 = data
  i1206.m_DampingRatio = i1207[0]
  i1206.m_Frequency = i1207[1]
  i1206.m_Angle = i1207[2]
  return i1206
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1209 = data
  i1208.m_LowerTranslation = i1209[0]
  i1208.m_UpperTranslation = i1209[1]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.width = i1211[1]
  i1210.height = i1211[2]
  i1210.mipmapCount = i1211[3]
  i1210.anisoLevel = i1211[4]
  i1210.filterMode = i1211[5]
  i1210.hdr = !!i1211[6]
  i1210.format = i1211[7]
  i1210.wrapMode = i1211[8]
  i1210.alphaIsTransparency = !!i1211[9]
  i1210.alphaSource = i1211[10]
  i1210.graphicsFormat = i1211[11]
  i1210.sRGBTexture = !!i1211[12]
  i1210.desiredColorSpace = i1211[13]
  i1210.wrapU = i1211[14]
  i1210.wrapV = i1211[15]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1212 = root || new pc.UnityMaterial()
  var i1213 = data
  i1212.name = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'shader')
  i1212.renderQueue = i1213[3]
  i1212.enableInstancing = !!i1213[4]
  var i1215 = i1213[5]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1215[i + 0]) );
  }
  i1212.floatParameters = i1214
  var i1217 = i1213[6]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1217[i + 0]) );
  }
  i1212.colorParameters = i1216
  var i1219 = i1213[7]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1219[i + 0]) );
  }
  i1212.vectorParameters = i1218
  var i1221 = i1213[8]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1221[i + 0]) );
  }
  i1212.textureParameters = i1220
  var i1223 = i1213[9]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1223[i + 0]) );
  }
  i1212.materialFlags = i1222
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.value = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.value = new pc.Color(i1231[1], i1231[2], i1231[3], i1231[4])
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1235 = data
  i1234.name = i1235[0]
  i1234.value = new pc.Vec4( i1235[1], i1235[2], i1235[3], i1235[4] )
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1239 = data
  i1238.name = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'value')
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.enabled = !!i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1245 = data
  i1244.position = new pc.Vec3( i1245[0], i1245[1], i1245[2] )
  i1244.scale = new pc.Vec3( i1245[3], i1245[4], i1245[5] )
  i1244.rotation = new pc.Quat(i1245[6], i1245[7], i1245[8], i1245[9])
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1247 = data
  i1246.color = new pc.Color(i1247[0], i1247[1], i1247[2], i1247[3])
  request.r(i1247[4], i1247[5], 0, i1246, 'sprite')
  i1246.flipX = !!i1247[6]
  i1246.flipY = !!i1247[7]
  i1246.drawMode = i1247[8]
  i1246.size = new pc.Vec2( i1247[9], i1247[10] )
  i1246.tileMode = i1247[11]
  i1246.adaptiveModeThreshold = i1247[12]
  i1246.maskInteraction = i1247[13]
  i1246.spriteSortPoint = i1247[14]
  i1246.enabled = !!i1247[15]
  request.r(i1247[16], i1247[17], 0, i1246, 'sharedMaterial')
  var i1249 = i1247[18]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1246.sharedMaterials = i1248
  i1246.receiveShadows = !!i1247[19]
  i1246.shadowCastingMode = i1247[20]
  i1246.sortingLayerID = i1247[21]
  i1246.sortingOrder = i1247[22]
  i1246.lightmapIndex = i1247[23]
  i1246.lightmapSceneIndex = i1247[24]
  i1246.lightmapScaleOffset = new pc.Vec4( i1247[25], i1247[26], i1247[27], i1247[28] )
  i1246.lightProbeUsage = i1247[29]
  i1246.reflectionProbeUsage = i1247[30]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1253 = data
  i1252.radius = i1253[0]
  i1252.enabled = !!i1253[1]
  i1252.isTrigger = !!i1253[2]
  i1252.usedByEffector = !!i1253[3]
  i1252.density = i1253[4]
  i1252.offset = new pc.Vec2( i1253[5], i1253[6] )
  request.r(i1253[7], i1253[8], 0, i1252, 'material')
  return i1252
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1254 = root || request.c( 'BulletController' )
  var i1255 = data
  i1254.speed = i1255[0]
  i1254.damage = i1255[1]
  request.r(i1255[2], i1255[3], 0, i1254, 'hitMonsterSound')
  request.r(i1255[4], i1255[5], 0, i1254, 'hitSound')
  i1254.lifeTime = i1255[6]
  i1254.hit = !!i1255[7]
  request.r(i1255[8], i1255[9], 0, i1254, 'bloodPrefab')
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.tagId = i1257[1]
  i1256.enabled = !!i1257[2]
  i1256.isStatic = !!i1257[3]
  i1256.layer = i1257[4]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1259 = data
  i1258.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1259[0], i1258.main)
  i1258.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1259[1], i1258.colorBySpeed)
  i1258.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1259[2], i1258.colorOverLifetime)
  i1258.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1259[3], i1258.emission)
  i1258.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1259[4], i1258.rotationBySpeed)
  i1258.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1259[5], i1258.rotationOverLifetime)
  i1258.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1259[6], i1258.shape)
  i1258.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1259[7], i1258.sizeBySpeed)
  i1258.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1259[8], i1258.sizeOverLifetime)
  i1258.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1259[9], i1258.textureSheetAnimation)
  i1258.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1259[10], i1258.velocityOverLifetime)
  i1258.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1259[11], i1258.noise)
  i1258.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1259[12], i1258.inheritVelocity)
  i1258.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1259[13], i1258.forceOverLifetime)
  i1258.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1259[14], i1258.limitVelocityOverLifetime)
  i1258.useAutoRandomSeed = !!i1259[15]
  i1258.randomSeed = i1259[16]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1260 = root || new pc.ParticleSystemMain()
  var i1261 = data
  i1260.duration = i1261[0]
  i1260.loop = !!i1261[1]
  i1260.prewarm = !!i1261[2]
  i1260.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[3], i1260.startDelay)
  i1260.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[4], i1260.startLifetime)
  i1260.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[5], i1260.startSpeed)
  i1260.startSize3D = !!i1261[6]
  i1260.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[7], i1260.startSizeX)
  i1260.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[8], i1260.startSizeY)
  i1260.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[9], i1260.startSizeZ)
  i1260.startRotation3D = !!i1261[10]
  i1260.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[11], i1260.startRotationX)
  i1260.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[12], i1260.startRotationY)
  i1260.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[13], i1260.startRotationZ)
  i1260.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1261[14], i1260.startColor)
  i1260.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1261[15], i1260.gravityModifier)
  i1260.simulationSpace = i1261[16]
  request.r(i1261[17], i1261[18], 0, i1260, 'customSimulationSpace')
  i1260.simulationSpeed = i1261[19]
  i1260.useUnscaledTime = !!i1261[20]
  i1260.scalingMode = i1261[21]
  i1260.playOnAwake = !!i1261[22]
  i1260.maxParticles = i1261[23]
  i1260.emitterVelocityMode = i1261[24]
  i1260.stopAction = i1261[25]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1262 = root || new pc.MinMaxCurve()
  var i1263 = data
  i1262.mode = i1263[0]
  i1262.curveMin = new pc.AnimationCurve( { keys_flow: i1263[1] } )
  i1262.curveMax = new pc.AnimationCurve( { keys_flow: i1263[2] } )
  i1262.curveMultiplier = i1263[3]
  i1262.constantMin = i1263[4]
  i1262.constantMax = i1263[5]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1264 = root || new pc.MinMaxGradient()
  var i1265 = data
  i1264.mode = i1265[0]
  i1264.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1265[1], i1264.gradientMin)
  i1264.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1265[2], i1264.gradientMax)
  i1264.colorMin = new pc.Color(i1265[3], i1265[4], i1265[5], i1265[6])
  i1264.colorMax = new pc.Color(i1265[7], i1265[8], i1265[9], i1265[10])
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1267 = data
  i1266.mode = i1267[0]
  var i1269 = i1267[1]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1269[i + 0]) );
  }
  i1266.colorKeys = i1268
  var i1271 = i1267[2]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1271[i + 0]) );
  }
  i1266.alphaKeys = i1270
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1272 = root || new pc.ParticleSystemColorBySpeed()
  var i1273 = data
  i1272.enabled = !!i1273[0]
  i1272.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1273[1], i1272.color)
  i1272.range = new pc.Vec2( i1273[2], i1273[3] )
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1277 = data
  i1276.color = new pc.Color(i1277[0], i1277[1], i1277[2], i1277[3])
  i1276.time = i1277[4]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1281 = data
  i1280.alpha = i1281[0]
  i1280.time = i1281[1]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1282 = root || new pc.ParticleSystemColorOverLifetime()
  var i1283 = data
  i1282.enabled = !!i1283[0]
  i1282.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1283[1], i1282.color)
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1284 = root || new pc.ParticleSystemEmitter()
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1285[1], i1284.rateOverTime)
  i1284.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1285[2], i1284.rateOverDistance)
  var i1287 = i1285[3]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1287[i + 0]) );
  }
  i1284.bursts = i1286
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1290 = root || new pc.ParticleSystemBurst()
  var i1291 = data
  i1290.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1291[0], i1290.count)
  i1290.cycleCount = i1291[1]
  i1290.minCount = i1291[2]
  i1290.maxCount = i1291[3]
  i1290.repeatInterval = i1291[4]
  i1290.time = i1291[5]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1292 = root || new pc.ParticleSystemRotationBySpeed()
  var i1293 = data
  i1292.enabled = !!i1293[0]
  i1292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1293[1], i1292.x)
  i1292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1293[2], i1292.y)
  i1292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1293[3], i1292.z)
  i1292.separateAxes = !!i1293[4]
  i1292.range = new pc.Vec2( i1293[5], i1293[6] )
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1294 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1295 = data
  i1294.enabled = !!i1295[0]
  i1294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[1], i1294.x)
  i1294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[2], i1294.y)
  i1294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1295[3], i1294.z)
  i1294.separateAxes = !!i1295[4]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1296 = root || new pc.ParticleSystemShape()
  var i1297 = data
  i1296.enabled = !!i1297[0]
  i1296.shapeType = i1297[1]
  i1296.randomDirectionAmount = i1297[2]
  i1296.sphericalDirectionAmount = i1297[3]
  i1296.randomPositionAmount = i1297[4]
  i1296.alignToDirection = !!i1297[5]
  i1296.radius = i1297[6]
  i1296.radiusMode = i1297[7]
  i1296.radiusSpread = i1297[8]
  i1296.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[9], i1296.radiusSpeed)
  i1296.radiusThickness = i1297[10]
  i1296.angle = i1297[11]
  i1296.length = i1297[12]
  i1296.boxThickness = new pc.Vec3( i1297[13], i1297[14], i1297[15] )
  i1296.meshShapeType = i1297[16]
  request.r(i1297[17], i1297[18], 0, i1296, 'mesh')
  request.r(i1297[19], i1297[20], 0, i1296, 'meshRenderer')
  request.r(i1297[21], i1297[22], 0, i1296, 'skinnedMeshRenderer')
  i1296.useMeshMaterialIndex = !!i1297[23]
  i1296.meshMaterialIndex = i1297[24]
  i1296.useMeshColors = !!i1297[25]
  i1296.normalOffset = i1297[26]
  i1296.arc = i1297[27]
  i1296.arcMode = i1297[28]
  i1296.arcSpread = i1297[29]
  i1296.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[30], i1296.arcSpeed)
  i1296.donutRadius = i1297[31]
  i1296.position = new pc.Vec3( i1297[32], i1297[33], i1297[34] )
  i1296.rotation = new pc.Vec3( i1297[35], i1297[36], i1297[37] )
  i1296.scale = new pc.Vec3( i1297[38], i1297[39], i1297[40] )
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1298 = root || new pc.ParticleSystemSizeBySpeed()
  var i1299 = data
  i1298.enabled = !!i1299[0]
  i1298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1299[1], i1298.x)
  i1298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1299[2], i1298.y)
  i1298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1299[3], i1298.z)
  i1298.separateAxes = !!i1299[4]
  i1298.range = new pc.Vec2( i1299[5], i1299[6] )
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1300 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1301 = data
  i1300.enabled = !!i1301[0]
  i1300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[1], i1300.x)
  i1300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[2], i1300.y)
  i1300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1301[3], i1300.z)
  i1300.separateAxes = !!i1301[4]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1302 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1303 = data
  i1302.enabled = !!i1303[0]
  i1302.mode = i1303[1]
  i1302.animation = i1303[2]
  i1302.numTilesX = i1303[3]
  i1302.numTilesY = i1303[4]
  i1302.useRandomRow = !!i1303[5]
  i1302.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[6], i1302.frameOverTime)
  i1302.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1303[7], i1302.startFrame)
  i1302.cycleCount = i1303[8]
  i1302.rowIndex = i1303[9]
  i1302.flipU = i1303[10]
  i1302.flipV = i1303[11]
  i1302.spriteCount = i1303[12]
  var i1305 = i1303[13]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 2, i1304, '')
  }
  i1302.sprites = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1308 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1309 = data
  i1308.enabled = !!i1309[0]
  i1308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[1], i1308.x)
  i1308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[2], i1308.y)
  i1308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[3], i1308.z)
  i1308.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[4], i1308.radial)
  i1308.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[5], i1308.speedModifier)
  i1308.space = i1309[6]
  i1308.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[7], i1308.orbitalX)
  i1308.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[8], i1308.orbitalY)
  i1308.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[9], i1308.orbitalZ)
  i1308.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[10], i1308.orbitalOffsetX)
  i1308.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[11], i1308.orbitalOffsetY)
  i1308.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1309[12], i1308.orbitalOffsetZ)
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1310 = root || new pc.ParticleSystemNoise()
  var i1311 = data
  i1310.enabled = !!i1311[0]
  i1310.separateAxes = !!i1311[1]
  i1310.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[2], i1310.strengthX)
  i1310.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[3], i1310.strengthY)
  i1310.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[4], i1310.strengthZ)
  i1310.frequency = i1311[5]
  i1310.damping = !!i1311[6]
  i1310.octaveCount = i1311[7]
  i1310.octaveMultiplier = i1311[8]
  i1310.octaveScale = i1311[9]
  i1310.quality = i1311[10]
  i1310.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[11], i1310.scrollSpeed)
  i1310.scrollSpeedMultiplier = i1311[12]
  i1310.remapEnabled = !!i1311[13]
  i1310.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[14], i1310.remapX)
  i1310.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[15], i1310.remapY)
  i1310.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[16], i1310.remapZ)
  i1310.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[17], i1310.positionAmount)
  i1310.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[18], i1310.rotationAmount)
  i1310.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1311[19], i1310.sizeAmount)
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1312 = root || new pc.ParticleSystemInheritVelocity()
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.mode = i1313[1]
  i1312.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1313[2], i1312.curve)
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1314 = root || new pc.ParticleSystemForceOverLifetime()
  var i1315 = data
  i1314.enabled = !!i1315[0]
  i1314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1315[1], i1314.x)
  i1314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1315[2], i1314.y)
  i1314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1315[3], i1314.z)
  i1314.space = i1315[4]
  i1314.randomized = !!i1315[5]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1316 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1317 = data
  i1316.enabled = !!i1317[0]
  i1316.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1317[1], i1316.limit)
  i1316.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1317[2], i1316.limitX)
  i1316.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1317[3], i1316.limitY)
  i1316.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1317[4], i1316.limitZ)
  i1316.dampen = i1317[5]
  i1316.separateAxes = !!i1317[6]
  i1316.space = i1317[7]
  i1316.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1317[8], i1316.drag)
  i1316.multiplyDragByParticleSize = !!i1317[9]
  i1316.multiplyDragByParticleVelocity = !!i1317[10]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'mesh')
  i1318.meshCount = i1319[2]
  i1318.activeVertexStreamsCount = i1319[3]
  i1318.alignment = i1319[4]
  i1318.renderMode = i1319[5]
  i1318.sortMode = i1319[6]
  i1318.lengthScale = i1319[7]
  i1318.velocityScale = i1319[8]
  i1318.cameraVelocityScale = i1319[9]
  i1318.normalDirection = i1319[10]
  i1318.sortingFudge = i1319[11]
  i1318.minParticleSize = i1319[12]
  i1318.maxParticleSize = i1319[13]
  i1318.pivot = new pc.Vec3( i1319[14], i1319[15], i1319[16] )
  request.r(i1319[17], i1319[18], 0, i1318, 'trailMaterial')
  i1318.applyActiveColorSpace = !!i1319[19]
  i1318.enabled = !!i1319[20]
  request.r(i1319[21], i1319[22], 0, i1318, 'sharedMaterial')
  var i1321 = i1319[23]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 2, i1320, '')
  }
  i1318.sharedMaterials = i1320
  i1318.receiveShadows = !!i1319[24]
  i1318.shadowCastingMode = i1319[25]
  i1318.sortingLayerID = i1319[26]
  i1318.sortingOrder = i1319[27]
  i1318.lightmapIndex = i1319[28]
  i1318.lightmapSceneIndex = i1319[29]
  i1318.lightmapScaleOffset = new pc.Vec4( i1319[30], i1319[31], i1319[32], i1319[33] )
  i1318.lightProbeUsage = i1319[34]
  i1318.reflectionProbeUsage = i1319[35]
  return i1318
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1322 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1323 = data
  i1322.targetIsSelf = !!i1323[0]
  request.r(i1323[1], i1323[2], 0, i1322, 'targetGO')
  i1322.tweenTargetIsTargetGO = !!i1323[3]
  i1322.delay = i1323[4]
  i1322.duration = i1323[5]
  i1322.easeType = i1323[6]
  i1322.easeCurve = new pc.AnimationCurve( { keys_flow: i1323[7] } )
  i1322.loopType = i1323[8]
  i1322.loops = i1323[9]
  i1322.id = i1323[10]
  i1322.isRelative = !!i1323[11]
  i1322.isFrom = !!i1323[12]
  i1322.isIndependentUpdate = !!i1323[13]
  i1322.autoKill = !!i1323[14]
  i1322.autoGenerate = !!i1323[15]
  i1322.isActive = !!i1323[16]
  i1322.isValid = !!i1323[17]
  request.r(i1323[18], i1323[19], 0, i1322, 'target')
  i1322.animationType = i1323[20]
  i1322.targetType = i1323[21]
  i1322.forcedTargetType = i1323[22]
  i1322.autoPlay = !!i1323[23]
  i1322.useTargetAsV3 = !!i1323[24]
  i1322.endValueFloat = i1323[25]
  i1322.endValueV3 = new pc.Vec3( i1323[26], i1323[27], i1323[28] )
  i1322.endValueV2 = new pc.Vec2( i1323[29], i1323[30] )
  i1322.endValueColor = new pc.Color(i1323[31], i1323[32], i1323[33], i1323[34])
  i1322.endValueString = i1323[35]
  i1322.endValueRect = UnityEngine.Rect.MinMaxRect(i1323[36], i1323[37], i1323[38], i1323[39])
  request.r(i1323[40], i1323[41], 0, i1322, 'endValueTransform')
  i1322.optionalBool0 = !!i1323[42]
  i1322.optionalBool1 = !!i1323[43]
  i1322.optionalFloat0 = i1323[44]
  i1322.optionalInt0 = i1323[45]
  i1322.optionalRotationMode = i1323[46]
  i1322.optionalScrambleMode = i1323[47]
  i1322.optionalShakeRandomnessMode = i1323[48]
  i1322.optionalString = i1323[49]
  i1322.updateType = i1323[50]
  i1322.isSpeedBased = !!i1323[51]
  i1322.hasOnStart = !!i1323[52]
  i1322.hasOnPlay = !!i1323[53]
  i1322.hasOnUpdate = !!i1323[54]
  i1322.hasOnStepComplete = !!i1323[55]
  i1322.hasOnComplete = !!i1323[56]
  i1322.hasOnTweenCreated = !!i1323[57]
  i1322.hasOnRewind = !!i1323[58]
  i1322.onStart = request.d('UnityEngine.Events.UnityEvent', i1323[59], i1322.onStart)
  i1322.onPlay = request.d('UnityEngine.Events.UnityEvent', i1323[60], i1322.onPlay)
  i1322.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1323[61], i1322.onUpdate)
  i1322.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1323[62], i1322.onStepComplete)
  i1322.onComplete = request.d('UnityEngine.Events.UnityEvent', i1323[63], i1322.onComplete)
  i1322.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1323[64], i1322.onTweenCreated)
  i1322.onRewind = request.d('UnityEngine.Events.UnityEvent', i1323[65], i1322.onRewind)
  return i1322
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1325 = data
  i1324.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1325[0], i1324.m_PersistentCalls)
  return i1324
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('UnityEngine.Events.PersistentCall', i1329[i + 0]));
  }
  i1326.m_Calls = i1328
  return i1326
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'm_Target')
  i1332.m_TargetAssemblyTypeName = i1333[2]
  i1332.m_MethodName = i1333[3]
  i1332.m_Mode = i1333[4]
  i1332.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1333[5], i1332.m_Arguments)
  i1332.m_CallState = i1333[6]
  return i1332
}

Deserializers["ResetPointEffect"] = function (request, data, root) {
  var i1334 = root || request.c( 'ResetPointEffect' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'render')
  request.r(i1335[2], i1335[3], 0, i1334, 'trans')
  request.r(i1335[4], i1335[5], 0, i1334, 'color')
  request.r(i1335[6], i1335[7], 0, i1334, 'move')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1337 = data
  i1336.sortingLayerIndex = i1337[0]
  i1336.sortingOrder = i1337[1]
  i1336.sortingLayerName = i1337[2]
  i1336.enabled = !!i1337[3]
  return i1336
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1338 = root || request.c( 'MonsterController' )
  var i1339 = data
  i1338.maxHP = i1339[0]
  i1338.currentHP = i1339[1]
  var i1341 = i1339[2]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('Piece', i1341[i + 0]));
  }
  i1338.pieces = i1340
  request.r(i1339[3], i1339[4], 0, i1338, 'deadSFX')
  i1338.maxForce = new pc.Vec2( i1339[5], i1339[6] )
  i1338.minForce = new pc.Vec2( i1339[7], i1339[8] )
  request.r(i1339[9], i1339[10], 0, i1338, 'balance')
  i1338.isDead = !!i1339[11]
  i1338.speed = i1339[12]
  request.r(i1339[13], i1339[14], 0, i1338, 'body')
  request.r(i1339[15], i1339[16], 0, i1338, 'leftHand')
  request.r(i1339[17], i1339[18], 0, i1338, 'rightHand')
  request.r(i1339[19], i1339[20], 0, i1338, 'leftLeg')
  request.r(i1339[21], i1339[22], 0, i1338, 'rightLeg')
  request.r(i1339[23], i1339[24], 0, i1338, 'jump')
  request.r(i1339[25], i1339[26], 0, i1338, 'checkGround')
  request.r(i1339[27], i1339[28], 0, i1338, 'pointPrefab')
  return i1338
}

Deserializers["Piece"] = function (request, data, root) {
  var i1344 = root || request.c( 'Piece' )
  var i1345 = data
  request.r(i1345[0], i1345[1], 0, i1344, 'Joint')
  request.r(i1345[2], i1345[3], 0, i1344, 'Rb')
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1347 = data
  i1346.bodyType = i1347[0]
  request.r(i1347[1], i1347[2], 0, i1346, 'material')
  i1346.simulated = !!i1347[3]
  i1346.useAutoMass = !!i1347[4]
  i1346.mass = i1347[5]
  i1346.drag = i1347[6]
  i1346.angularDrag = i1347[7]
  i1346.gravityScale = i1347[8]
  i1346.collisionDetectionMode = i1347[9]
  i1346.sleepMode = i1347[10]
  i1346.constraints = i1347[11]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1349 = data
  i1348.usedByComposite = !!i1349[0]
  i1348.autoTiling = !!i1349[1]
  i1348.size = new pc.Vec2( i1349[2], i1349[3] )
  i1348.edgeRadius = i1349[4]
  i1348.enabled = !!i1349[5]
  i1348.isTrigger = !!i1349[6]
  i1348.usedByEffector = !!i1349[7]
  i1348.density = i1349[8]
  i1348.offset = new pc.Vec2( i1349[9], i1349[10] )
  request.r(i1349[11], i1349[12], 0, i1348, 'material')
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1351 = data
  i1350.useLimits = !!i1351[0]
  i1350.limits = request.d('UnityEngine.JointAngleLimits2D', i1351[1], i1350.limits)
  i1350.useMotor = !!i1351[2]
  i1350.motor = request.d('UnityEngine.JointMotor2D', i1351[3], i1350.motor)
  i1350.anchor = new pc.Vec2( i1351[4], i1351[5] )
  i1350.connectedAnchor = new pc.Vec2( i1351[6], i1351[7] )
  i1350.autoConfigureConnectedAnchor = !!i1351[8]
  request.r(i1351[9], i1351[10], 0, i1350, 'connectedBody')
  i1350.breakForce = i1351[11]
  i1350.breakTorque = i1351[12]
  i1350.enableCollision = !!i1351[13]
  i1350.enabled = !!i1351[14]
  return i1350
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1352 = root || request.c( 'BalanceController' )
  var i1353 = data
  i1352.targetRotation = i1353[0]
  i1352.force = i1353[1]
  return i1352
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i1354 = root || request.c( 'CheckGround' )
  var i1355 = data
  i1354.onGround = !!i1355[0]
  i1354.layerMask = UnityEngine.LayerMask.FromIntegerValue( i1355[1] )
  i1354.distance = i1355[2]
  return i1354
}

Deserializers["JumpController"] = function (request, data, root) {
  var i1356 = root || request.c( 'JumpController' )
  var i1357 = data
  request.r(i1357[0], i1357[1], 0, i1356, 'body')
  i1356.jumpForce = new pc.Vec2( i1357[2], i1357[3] )
  i1356.timeCD = i1357[4]
  i1356.onCD = !!i1357[5]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.index = i1359[1]
  i1358.startup = !!i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1361 = data
  i1360.aspect = i1361[0]
  i1360.orthographic = !!i1361[1]
  i1360.orthographicSize = i1361[2]
  i1360.backgroundColor = new pc.Color(i1361[3], i1361[4], i1361[5], i1361[6])
  i1360.nearClipPlane = i1361[7]
  i1360.farClipPlane = i1361[8]
  i1360.fieldOfView = i1361[9]
  i1360.depth = i1361[10]
  i1360.clearFlags = i1361[11]
  i1360.cullingMask = i1361[12]
  i1360.rect = i1361[13]
  request.r(i1361[14], i1361[15], 0, i1360, 'targetTexture')
  i1360.usePhysicalProperties = !!i1361[16]
  i1360.focalLength = i1361[17]
  i1360.sensorSize = new pc.Vec2( i1361[18], i1361[19] )
  i1360.lensShift = new pc.Vec2( i1361[20], i1361[21] )
  i1360.gateFit = i1361[22]
  i1360.commandBufferCount = i1361[23]
  i1360.cameraType = i1361[24]
  i1360.enabled = !!i1361[25]
  return i1360
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'm_FirstSelected')
  i1362.m_sendNavigationEvents = !!i1363[2]
  i1362.m_DragThreshold = i1363[3]
  return i1362
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1365 = data
  i1364.m_HorizontalAxis = i1365[0]
  i1364.m_VerticalAxis = i1365[1]
  i1364.m_SubmitButton = i1365[2]
  i1364.m_CancelButton = i1365[3]
  i1364.m_InputActionsPerSecond = i1365[4]
  i1364.m_RepeatDelay = i1365[5]
  i1364.m_ForceModuleActive = !!i1365[6]
  i1364.m_SendPointerHoverToParent = !!i1365[7]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1367 = data
  i1366.pivot = new pc.Vec2( i1367[0], i1367[1] )
  i1366.anchorMin = new pc.Vec2( i1367[2], i1367[3] )
  i1366.anchorMax = new pc.Vec2( i1367[4], i1367[5] )
  i1366.sizeDelta = new pc.Vec2( i1367[6], i1367[7] )
  i1366.anchoredPosition3D = new pc.Vec3( i1367[8], i1367[9], i1367[10] )
  i1366.rotation = new pc.Quat(i1367[11], i1367[12], i1367[13], i1367[14])
  i1366.scale = new pc.Vec3( i1367[15], i1367[16], i1367[17] )
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1369 = data
  i1368.planeDistance = i1369[0]
  i1368.referencePixelsPerUnit = i1369[1]
  i1368.isFallbackOverlay = !!i1369[2]
  i1368.renderMode = i1369[3]
  i1368.renderOrder = i1369[4]
  i1368.sortingLayerName = i1369[5]
  i1368.sortingOrder = i1369[6]
  i1368.scaleFactor = i1369[7]
  request.r(i1369[8], i1369[9], 0, i1368, 'worldCamera')
  i1368.overrideSorting = !!i1369[10]
  i1368.pixelPerfect = !!i1369[11]
  i1368.targetDisplay = i1369[12]
  i1368.overridePixelPerfect = !!i1369[13]
  i1368.enabled = !!i1369[14]
  return i1368
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1371 = data
  i1370.m_UiScaleMode = i1371[0]
  i1370.m_ReferencePixelsPerUnit = i1371[1]
  i1370.m_ScaleFactor = i1371[2]
  i1370.m_ReferenceResolution = new pc.Vec2( i1371[3], i1371[4] )
  i1370.m_ScreenMatchMode = i1371[5]
  i1370.m_MatchWidthOrHeight = i1371[6]
  i1370.m_PhysicalUnit = i1371[7]
  i1370.m_FallbackScreenDPI = i1371[8]
  i1370.m_DefaultSpriteDPI = i1371[9]
  i1370.m_DynamicPixelsPerUnit = i1371[10]
  i1370.m_PresetInfoIsWorld = !!i1371[11]
  return i1370
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1373 = data
  i1372.m_IgnoreReversedGraphics = !!i1373[0]
  i1372.m_BlockingObjects = i1373[1]
  i1372.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1373[2] )
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1375 = data
  i1374.cullTransparentMesh = !!i1375[0]
  return i1374
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'm_Texture')
  i1376.m_UVRect = UnityEngine.Rect.MinMaxRect(i1377[2], i1377[3], i1377[4], i1377[5])
  request.r(i1377[6], i1377[7], 0, i1376, 'm_Material')
  i1376.m_Maskable = !!i1377[8]
  i1376.m_Color = new pc.Color(i1377[9], i1377[10], i1377[11], i1377[12])
  i1376.m_RaycastTarget = !!i1377[13]
  i1376.m_RaycastPadding = new pc.Vec4( i1377[14], i1377[15], i1377[16], i1377[17] )
  return i1376
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1379 = data
  i1378.m_AspectMode = i1379[0]
  i1378.m_AspectRatio = i1379[1]
  return i1378
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.UI.Text' )
  var i1381 = data
  i1380.m_FontData = request.d('UnityEngine.UI.FontData', i1381[0], i1380.m_FontData)
  i1380.m_Text = i1381[1]
  request.r(i1381[2], i1381[3], 0, i1380, 'm_Material')
  i1380.m_Maskable = !!i1381[4]
  i1380.m_Color = new pc.Color(i1381[5], i1381[6], i1381[7], i1381[8])
  i1380.m_RaycastTarget = !!i1381[9]
  i1380.m_RaycastPadding = new pc.Vec4( i1381[10], i1381[11], i1381[12], i1381[13] )
  return i1380
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'm_Font')
  i1382.m_FontSize = i1383[2]
  i1382.m_FontStyle = i1383[3]
  i1382.m_BestFit = !!i1383[4]
  i1382.m_MinSize = i1383[5]
  i1382.m_MaxSize = i1383[6]
  i1382.m_Alignment = i1383[7]
  i1382.m_AlignByGeometry = !!i1383[8]
  i1382.m_RichText = !!i1383[9]
  i1382.m_HorizontalOverflow = i1383[10]
  i1382.m_VerticalOverflow = i1383[11]
  i1382.m_LineSpacing = i1383[12]
  return i1382
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.UI.Image' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'm_Sprite')
  i1384.m_Type = i1385[2]
  i1384.m_PreserveAspect = !!i1385[3]
  i1384.m_FillCenter = !!i1385[4]
  i1384.m_FillMethod = i1385[5]
  i1384.m_FillAmount = i1385[6]
  i1384.m_FillClockwise = !!i1385[7]
  i1384.m_FillOrigin = i1385[8]
  i1384.m_UseSpriteMesh = !!i1385[9]
  i1384.m_PixelsPerUnitMultiplier = i1385[10]
  request.r(i1385[11], i1385[12], 0, i1384, 'm_Material')
  i1384.m_Maskable = !!i1385[13]
  i1384.m_Color = new pc.Color(i1385[14], i1385[15], i1385[16], i1385[17])
  i1384.m_RaycastTarget = !!i1385[18]
  i1384.m_RaycastPadding = new pc.Vec4( i1385[19], i1385[20], i1385[21], i1385[22] )
  return i1384
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.UI.Button' )
  var i1387 = data
  i1386.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1387[0], i1386.m_OnClick)
  i1386.m_Navigation = request.d('UnityEngine.UI.Navigation', i1387[1], i1386.m_Navigation)
  i1386.m_Transition = i1387[2]
  i1386.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1387[3], i1386.m_Colors)
  i1386.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1387[4], i1386.m_SpriteState)
  i1386.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1387[5], i1386.m_AnimationTriggers)
  i1386.m_Interactable = !!i1387[6]
  request.r(i1387[7], i1387[8], 0, i1386, 'm_TargetGraphic')
  return i1386
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1389 = data
  i1388.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1389[0], i1388.m_PersistentCalls)
  return i1388
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1391 = data
  i1390.m_Mode = i1391[0]
  i1390.m_WrapAround = !!i1391[1]
  request.r(i1391[2], i1391[3], 0, i1390, 'm_SelectOnUp')
  request.r(i1391[4], i1391[5], 0, i1390, 'm_SelectOnDown')
  request.r(i1391[6], i1391[7], 0, i1390, 'm_SelectOnLeft')
  request.r(i1391[8], i1391[9], 0, i1390, 'm_SelectOnRight')
  return i1390
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1393 = data
  i1392.m_NormalColor = new pc.Color(i1393[0], i1393[1], i1393[2], i1393[3])
  i1392.m_HighlightedColor = new pc.Color(i1393[4], i1393[5], i1393[6], i1393[7])
  i1392.m_PressedColor = new pc.Color(i1393[8], i1393[9], i1393[10], i1393[11])
  i1392.m_SelectedColor = new pc.Color(i1393[12], i1393[13], i1393[14], i1393[15])
  i1392.m_DisabledColor = new pc.Color(i1393[16], i1393[17], i1393[18], i1393[19])
  i1392.m_ColorMultiplier = i1393[20]
  i1392.m_FadeDuration = i1393[21]
  return i1392
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'm_HighlightedSprite')
  request.r(i1395[2], i1395[3], 0, i1394, 'm_PressedSprite')
  request.r(i1395[4], i1395[5], 0, i1394, 'm_SelectedSprite')
  request.r(i1395[6], i1395[7], 0, i1394, 'm_DisabledSprite')
  return i1394
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1397 = data
  i1396.m_NormalTrigger = i1397[0]
  i1396.m_HighlightedTrigger = i1397[1]
  i1396.m_PressedTrigger = i1397[2]
  i1396.m_SelectedTrigger = i1397[3]
  i1396.m_DisabledTrigger = i1397[4]
  return i1396
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1398 = root || request.c( 'PlayerController' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('Piece', i1401[i + 0]));
  }
  i1398.pieces = i1400
  request.r(i1399[1], i1399[2], 0, i1398, 'head')
  request.r(i1399[3], i1399[4], 0, i1398, 'deadSFX')
  i1398.maxForce = new pc.Vec2( i1399[5], i1399[6] )
  i1398.minForce = new pc.Vec2( i1399[7], i1399[8] )
  request.r(i1399[9], i1399[10], 0, i1398, 'optionTut')
  request.r(i1399[11], i1399[12], 0, i1398, 'attackTut')
  request.r(i1399[13], i1399[14], 0, i1398, 'fight')
  request.r(i1399[15], i1399[16], 0, i1398, 'clickSound')
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1403 = data
  i1402.autoConfigureTarget = !!i1403[0]
  i1402.target = new pc.Vec2( i1403[1], i1403[2] )
  i1402.anchor = new pc.Vec2( i1403[3], i1403[4] )
  i1402.maxForce = i1403[5]
  i1402.dampingRatio = i1403[6]
  i1402.frequency = i1403[7]
  request.r(i1403[8], i1403[9], 0, i1402, 'connectedBody')
  i1402.breakForce = i1403[10]
  i1402.breakTorque = i1403[11]
  i1402.enableCollision = !!i1403[12]
  i1402.enabled = !!i1403[13]
  return i1402
}

Deserializers["ShootController"] = function (request, data, root) {
  var i1404 = root || request.c( 'ShootController' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'currentMonster')
  request.r(i1405[2], i1405[3], 0, i1404, 'left')
  request.r(i1405[4], i1405[5], 0, i1404, 'right')
  i1404.timeMotor = i1405[6]
  i1404.onCD = !!i1405[7]
  i1404.CD = i1405[8]
  request.r(i1405[9], i1405[10], 0, i1404, 'startPos')
  request.r(i1405[11], i1405[12], 0, i1404, 'effect')
  request.r(i1405[13], i1405[14], 0, i1404, 'attackSound')
  request.r(i1405[15], i1405[16], 0, i1404, 'spawnPrefab')
  request.r(i1405[17], i1405[18], 0, i1404, 'poolParent')
  return i1404
}

Deserializers["GameController"] = function (request, data, root) {
  var i1406 = root || request.c( 'GameController' )
  var i1407 = data
  i1406.OnStart = request.d('System.Action', i1407[0], i1406.OnStart)
  i1406.OnClick = request.d('System.Action', i1407[1], i1406.OnClick)
  i1406.OnGameOver = request.d('System.Action', i1407[2], i1406.OnGameOver)
  request.r(i1407[3], i1407[4], 0, i1406, 'startScene')
  request.r(i1407[5], i1407[6], 0, i1406, 'clickSound')
  request.r(i1407[7], i1407[8], 0, i1406, 'startButton')
  request.r(i1407[9], i1407[10], 0, i1406, 'tut')
  request.r(i1407[11], i1407[12], 0, i1406, 'endScene')
  request.r(i1407[13], i1407[14], 0, i1406, 'player')
  request.r(i1407[15], i1407[16], 0, i1406, 'scoreText')
  i1406.score = i1407[17]
  return i1406
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1408 = root || request.c( 'System.Action' )
  var i1409 = data
  return i1408
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1410 = root || request.c( 'LayoutController' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'cam')
  return i1410
}

Deserializers["SpawnMonster"] = function (request, data, root) {
  var i1412 = root || request.c( 'SpawnMonster' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'world')
  request.r(i1413[2], i1413[3], 0, i1412, 'spawnPos')
  var i1415 = i1413[4]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 1, i1414, '')
  }
  i1412.monsterPrefabs = i1414
  i1412.maxtimeSpawn = i1413[5]
  i1412.mintimeSpawn = i1413[6]
  return i1412
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1418 = root || request.c( 'LunaController' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'BGTexture')
  i1418.UseTime = !!i1419[2]
  i1418.TimePlay = i1419[3]
  i1418.UseCountPlay = !!i1419[4]
  i1418.MaxCountPlay = i1419[5]
  i1418.ScoreTextColor = new pc.Color(i1419[6], i1419[7], i1419[8], i1419[9])
  i1418.MinTimeSpawn = i1419[10]
  i1418.MaxTimeSpawn = i1419[11]
  request.r(i1419[12], i1419[13], 0, i1418, 'BGImage')
  request.r(i1419[14], i1419[15], 0, i1418, 'scoreText')
  var i1421 = i1419[16]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1421.length; i += 2) {
  request.r(i1421[i + 0], i1421[i + 1], 1, i1420, '')
  }
  i1418.CTA = i1420
  i1418.count = i1419[17]
  request.r(i1419[18], i1419[19], 0, i1418, 'spawn')
  request.r(i1419[20], i1419[21], 0, i1418, 'endCard')
  return i1418
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1424 = root || request.c( 'AudioController' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'BGM')
  request.r(i1425[2], i1425[3], 0, i1424, 'musicSource')
  request.r(i1425[4], i1425[5], 0, i1424, 'pool')
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'clip')
  request.r(i1427[2], i1427[3], 0, i1426, 'outputAudioMixerGroup')
  i1426.playOnAwake = !!i1427[4]
  i1426.loop = !!i1427[5]
  i1426.time = i1427[6]
  i1426.volume = i1427[7]
  i1426.pitch = i1427[8]
  i1426.enabled = !!i1427[9]
  return i1426
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1428 = root || request.c( 'VFXController' )
  var i1429 = data
  request.r(i1429[0], i1429[1], 0, i1428, 'poolParent')
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1431 = data
  i1430.ambientIntensity = i1431[0]
  i1430.reflectionIntensity = i1431[1]
  i1430.ambientMode = i1431[2]
  i1430.ambientLight = new pc.Color(i1431[3], i1431[4], i1431[5], i1431[6])
  i1430.ambientSkyColor = new pc.Color(i1431[7], i1431[8], i1431[9], i1431[10])
  i1430.ambientGroundColor = new pc.Color(i1431[11], i1431[12], i1431[13], i1431[14])
  i1430.ambientEquatorColor = new pc.Color(i1431[15], i1431[16], i1431[17], i1431[18])
  i1430.fogColor = new pc.Color(i1431[19], i1431[20], i1431[21], i1431[22])
  i1430.fogEndDistance = i1431[23]
  i1430.fogStartDistance = i1431[24]
  i1430.fogDensity = i1431[25]
  i1430.fog = !!i1431[26]
  request.r(i1431[27], i1431[28], 0, i1430, 'skybox')
  i1430.fogMode = i1431[29]
  var i1433 = i1431[30]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1433[i + 0]) );
  }
  i1430.lightmaps = i1432
  i1430.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1431[31], i1430.lightProbes)
  i1430.lightmapsMode = i1431[32]
  i1430.mixedBakeMode = i1431[33]
  i1430.environmentLightingMode = i1431[34]
  i1430.ambientProbe = new pc.SphericalHarmonicsL2(i1431[35])
  request.r(i1431[36], i1431[37], 0, i1430, 'customReflection')
  request.r(i1431[38], i1431[39], 0, i1430, 'defaultReflection')
  i1430.defaultReflectionMode = i1431[40]
  i1430.defaultReflectionResolution = i1431[41]
  i1430.sunLightObjectId = i1431[42]
  i1430.pixelLightCount = i1431[43]
  i1430.defaultReflectionHDR = !!i1431[44]
  i1430.hasLightDataAsset = !!i1431[45]
  i1430.hasManualGenerate = !!i1431[46]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'lightmapColor')
  request.r(i1437[2], i1437[3], 0, i1436, 'lightmapDirection')
  request.r(i1437[4], i1437[5], 0, i1436, 'shadowMask')
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1438 = root || new UnityEngine.LightProbes()
  var i1439 = data
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1449[i + 0]));
  }
  i1446.ShaderCompilationErrors = i1448
  i1446.name = i1447[1]
  i1446.guid = i1447[2]
  var i1451 = i1447[3]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1446.shaderDefinedKeywords = i1450
  var i1453 = i1447[4]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1453[i + 0]) );
  }
  i1446.passes = i1452
  var i1455 = i1447[5]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1455[i + 0]) );
  }
  i1446.usePasses = i1454
  var i1457 = i1447[6]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1457[i + 0]) );
  }
  i1446.defaultParameterValues = i1456
  request.r(i1447[7], i1447[8], 0, i1446, 'unityFallbackShader')
  i1446.readDepth = !!i1447[9]
  i1446.hasDepthOnlyPass = !!i1447[10]
  i1446.isCreatedByShaderGraph = !!i1447[11]
  i1446.disableBatching = !!i1447[12]
  i1446.compiled = !!i1447[13]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1461 = data
  i1460.shaderName = i1461[0]
  i1460.errorMessage = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1466 = root || new pc.UnityShaderPass()
  var i1467 = data
  i1466.id = i1467[0]
  i1466.subShaderIndex = i1467[1]
  i1466.name = i1467[2]
  i1466.passType = i1467[3]
  i1466.grabPassTextureName = i1467[4]
  i1466.usePass = !!i1467[5]
  i1466.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[6], i1466.zTest)
  i1466.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[7], i1466.zWrite)
  i1466.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[8], i1466.culling)
  i1466.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1467[9], i1466.blending)
  i1466.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1467[10], i1466.alphaBlending)
  i1466.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[11], i1466.colorWriteMask)
  i1466.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[12], i1466.offsetUnits)
  i1466.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[13], i1466.offsetFactor)
  i1466.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[14], i1466.stencilRef)
  i1466.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[15], i1466.stencilReadMask)
  i1466.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[16], i1466.stencilWriteMask)
  i1466.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1467[17], i1466.stencilOp)
  i1466.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1467[18], i1466.stencilOpFront)
  i1466.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1467[19], i1466.stencilOpBack)
  var i1469 = i1467[20]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1469[i + 0]) );
  }
  i1466.tags = i1468
  var i1471 = i1467[21]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( i1471[i + 0] );
  }
  i1466.passDefinedKeywords = i1470
  var i1473 = i1467[22]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1473[i + 0]) );
  }
  i1466.passDefinedKeywordGroups = i1472
  var i1475 = i1467[23]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1475[i + 0]) );
  }
  i1466.variants = i1474
  var i1477 = i1467[24]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1477[i + 0]) );
  }
  i1466.excludedVariants = i1476
  i1466.hasDepthReader = !!i1467[25]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1479 = data
  i1478.val = i1479[0]
  i1478.name = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1481 = data
  i1480.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[0], i1480.src)
  i1480.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[1], i1480.dst)
  i1480.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[2], i1480.op)
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1483 = data
  i1482.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1483[0], i1482.pass)
  i1482.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1483[1], i1482.fail)
  i1482.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1483[2], i1482.zFail)
  i1482.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1483[3], i1482.comp)
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.value = i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1491 = data
  var i1493 = i1491[0]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1490.keywords = i1492
  i1490.hasDiscard = !!i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1497 = data
  i1496.passId = i1497[0]
  i1496.subShaderIndex = i1497[1]
  var i1499 = i1497[2]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1496.keywords = i1498
  i1496.vertexProgram = i1497[3]
  i1496.fragmentProgram = i1497[4]
  i1496.exportedForWebGl2 = !!i1497[5]
  i1496.readDepth = !!i1497[6]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'shader')
  i1502.pass = i1503[2]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.type = i1507[1]
  i1506.value = new pc.Vec4( i1507[2], i1507[3], i1507[4], i1507[5] )
  i1506.textureValue = i1507[6]
  i1506.shaderPropertyFlag = i1507[7]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1509 = data
  i1508.name = i1509[0]
  request.r(i1509[1], i1509[2], 0, i1508, 'texture')
  i1508.aabb = i1509[3]
  i1508.vertices = i1509[4]
  i1508.triangles = i1509[5]
  i1508.textureRect = UnityEngine.Rect.MinMaxRect(i1509[6], i1509[7], i1509[8], i1509[9])
  i1508.packedRect = UnityEngine.Rect.MinMaxRect(i1509[10], i1509[11], i1509[12], i1509[13])
  i1508.border = new pc.Vec4( i1509[14], i1509[15], i1509[16], i1509[17] )
  i1508.transparency = i1509[18]
  i1508.bounds = i1509[19]
  i1508.pixelsPerUnit = i1509[20]
  i1508.textureWidth = i1509[21]
  i1508.textureHeight = i1509[22]
  i1508.nativeSize = new pc.Vec2( i1509[23], i1509[24] )
  i1508.pivot = new pc.Vec2( i1509[25], i1509[26] )
  i1508.textureRectOffset = new pc.Vec2( i1509[27], i1509[28] )
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1511 = data
  i1510.name = i1511[0]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.ascent = i1513[1]
  i1512.originalLineHeight = i1513[2]
  i1512.fontSize = i1513[3]
  var i1515 = i1513[4]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1515[i + 0]) );
  }
  i1512.characterInfo = i1514
  request.r(i1513[5], i1513[6], 0, i1512, 'texture')
  i1512.originalFontSize = i1513[7]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1519 = data
  i1518.index = i1519[0]
  i1518.advance = i1519[1]
  i1518.bearing = i1519[2]
  i1518.glyphWidth = i1519[3]
  i1518.glyphHeight = i1519[4]
  i1518.minX = i1519[5]
  i1518.maxX = i1519[6]
  i1518.minY = i1519[7]
  i1518.maxY = i1519[8]
  i1518.uvBottomLeftX = i1519[9]
  i1518.uvBottomLeftY = i1519[10]
  i1518.uvBottomRightX = i1519[11]
  i1518.uvBottomRightY = i1519[12]
  i1518.uvTopLeftX = i1519[13]
  i1518.uvTopLeftY = i1519[14]
  i1518.uvTopRightX = i1519[15]
  i1518.uvTopRightY = i1519[16]
  return i1518
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1520 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1521 = data
  i1520.useSafeMode = !!i1521[0]
  i1520.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1521[1], i1520.safeModeOptions)
  i1520.timeScale = i1521[2]
  i1520.unscaledTimeScale = i1521[3]
  i1520.useSmoothDeltaTime = !!i1521[4]
  i1520.maxSmoothUnscaledTime = i1521[5]
  i1520.rewindCallbackMode = i1521[6]
  i1520.showUnityEditorReport = !!i1521[7]
  i1520.logBehaviour = i1521[8]
  i1520.drawGizmos = !!i1521[9]
  i1520.defaultRecyclable = !!i1521[10]
  i1520.defaultAutoPlay = i1521[11]
  i1520.defaultUpdateType = i1521[12]
  i1520.defaultTimeScaleIndependent = !!i1521[13]
  i1520.defaultEaseType = i1521[14]
  i1520.defaultEaseOvershootOrAmplitude = i1521[15]
  i1520.defaultEasePeriod = i1521[16]
  i1520.defaultAutoKill = !!i1521[17]
  i1520.defaultLoopType = i1521[18]
  i1520.debugMode = !!i1521[19]
  i1520.debugStoreTargetId = !!i1521[20]
  i1520.showPreviewPanel = !!i1521[21]
  i1520.storeSettingsLocation = i1521[22]
  i1520.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1521[23], i1520.modules)
  i1520.createASMDEF = !!i1521[24]
  i1520.showPlayingTweens = !!i1521[25]
  i1520.showPausedTweens = !!i1521[26]
  return i1520
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1522 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1523 = data
  i1522.logBehaviour = i1523[0]
  i1522.nestedTweenFailureBehaviour = i1523[1]
  return i1522
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1524 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1525 = data
  i1524.showPanel = !!i1525[0]
  i1524.audioEnabled = !!i1525[1]
  i1524.physicsEnabled = !!i1525[2]
  i1524.physics2DEnabled = !!i1525[3]
  i1524.spriteEnabled = !!i1525[4]
  i1524.uiEnabled = !!i1525[5]
  i1524.textMeshProEnabled = !!i1525[6]
  i1524.tk2DEnabled = !!i1525[7]
  i1524.deAudioEnabled = !!i1525[8]
  i1524.deUnityExtendedEnabled = !!i1525[9]
  i1524.epoOutlineEnabled = !!i1525[10]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1527 = data
  var i1529 = i1527[0]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1529[i + 0]) );
  }
  i1526.files = i1528
  i1526.componentToPrefabIds = i1527[1]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1533 = data
  i1532.path = i1533[0]
  request.r(i1533[1], i1533[2], 0, i1532, 'unityObject')
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1537[i + 0]) );
  }
  i1534.scriptsExecutionOrder = i1536
  var i1539 = i1535[1]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1539[i + 0]) );
  }
  i1534.sortingLayers = i1538
  var i1541 = i1535[2]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1541[i + 0]) );
  }
  i1534.cullingLayers = i1540
  i1534.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1535[3], i1534.timeSettings)
  i1534.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1535[4], i1534.physicsSettings)
  i1534.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1535[5], i1534.physics2DSettings)
  i1534.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1535[6], i1534.qualitySettings)
  i1534.enableRealtimeShadows = !!i1535[7]
  i1534.enableAutoInstancing = !!i1535[8]
  i1534.enableStaticBatching = !!i1535[9]
  i1534.enableDynamicBatching = !!i1535[10]
  i1534.usePreservativeDynamicBatching = !!i1535[11]
  i1534.lightmapEncodingQuality = i1535[12]
  i1534.desiredColorSpace = i1535[13]
  var i1543 = i1535[14]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( i1543[i + 0] );
  }
  i1534.allTags = i1542
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.value = i1547[1]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1551 = data
  i1550.id = i1551[0]
  i1550.name = i1551[1]
  i1550.value = i1551[2]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1555 = data
  i1554.id = i1555[0]
  i1554.name = i1555[1]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1557 = data
  i1556.fixedDeltaTime = i1557[0]
  i1556.maximumDeltaTime = i1557[1]
  i1556.timeScale = i1557[2]
  i1556.maximumParticleTimestep = i1557[3]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1559 = data
  i1558.gravity = new pc.Vec3( i1559[0], i1559[1], i1559[2] )
  i1558.defaultSolverIterations = i1559[3]
  i1558.bounceThreshold = i1559[4]
  i1558.autoSyncTransforms = !!i1559[5]
  i1558.autoSimulation = !!i1559[6]
  var i1561 = i1559[7]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1561[i + 0]) );
  }
  i1558.collisionMatrix = i1560
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.layerId = i1565[1]
  i1564.otherLayerId = i1565[2]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'material')
  i1566.gravity = new pc.Vec2( i1567[2], i1567[3] )
  i1566.positionIterations = i1567[4]
  i1566.velocityIterations = i1567[5]
  i1566.velocityThreshold = i1567[6]
  i1566.maxLinearCorrection = i1567[7]
  i1566.maxAngularCorrection = i1567[8]
  i1566.maxTranslationSpeed = i1567[9]
  i1566.maxRotationSpeed = i1567[10]
  i1566.baumgarteScale = i1567[11]
  i1566.baumgarteTOIScale = i1567[12]
  i1566.timeToSleep = i1567[13]
  i1566.linearSleepTolerance = i1567[14]
  i1566.angularSleepTolerance = i1567[15]
  i1566.defaultContactOffset = i1567[16]
  i1566.autoSimulation = !!i1567[17]
  i1566.queriesHitTriggers = !!i1567[18]
  i1566.queriesStartInColliders = !!i1567[19]
  i1566.callbacksOnDisable = !!i1567[20]
  i1566.reuseCollisionCallbacks = !!i1567[21]
  i1566.autoSyncTransforms = !!i1567[22]
  var i1569 = i1567[23]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1569[i + 0]) );
  }
  i1566.collisionMatrix = i1568
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.layerId = i1573[1]
  i1572.otherLayerId = i1573[2]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1575 = data
  var i1577 = i1575[0]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1577[i + 0]) );
  }
  i1574.qualityLevels = i1576
  var i1579 = i1575[1]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( i1579[i + 0] );
  }
  i1574.names = i1578
  i1574.shadows = i1575[2]
  i1574.anisotropicFiltering = i1575[3]
  i1574.antiAliasing = i1575[4]
  i1574.lodBias = i1575[5]
  i1574.shadowCascades = i1575[6]
  i1574.shadowDistance = i1575[7]
  i1574.shadowmaskMode = i1575[8]
  i1574.shadowProjection = i1575[9]
  i1574.shadowResolution = i1575[10]
  i1574.softParticles = !!i1575[11]
  i1574.softVegetation = !!i1575[12]
  i1574.activeColorSpace = i1575[13]
  i1574.desiredColorSpace = i1575[14]
  i1574.masterTextureLimit = i1575[15]
  i1574.maxQueuedFrames = i1575[16]
  i1574.particleRaycastBudget = i1575[17]
  i1574.pixelLightCount = i1575[18]
  i1574.realtimeReflectionProbes = !!i1575[19]
  i1574.shadowCascade2Split = i1575[20]
  i1574.shadowCascade4Split = new pc.Vec3( i1575[21], i1575[22], i1575[23] )
  i1574.streamingMipmapsActive = !!i1575[24]
  i1574.vSyncCount = i1575[25]
  i1574.asyncUploadBufferSize = i1575[26]
  i1574.asyncUploadTimeSlice = i1575[27]
  i1574.billboardsFaceCameraPosition = !!i1575[28]
  i1574.shadowNearPlaneOffset = i1575[29]
  i1574.streamingMipmapsMemoryBudget = i1575[30]
  i1574.maximumLODLevel = i1575[31]
  i1574.streamingMipmapsAddAllCameras = !!i1575[32]
  i1574.streamingMipmapsMaxLevelReduction = i1575[33]
  i1574.streamingMipmapsRenderersPerFrame = i1575[34]
  i1574.resolutionScalingFixedDPIFactor = i1575[35]
  i1574.streamingMipmapsMaxFileIORequests = i1575[36]
  i1574.currentQualityLevel = i1575[37]
  return i1574
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'm_ObjectArgument')
  i1582.m_ObjectArgumentAssemblyTypeName = i1583[2]
  i1582.m_IntArgument = i1583[3]
  i1582.m_FloatArgument = i1583[4]
  i1582.m_StringArgument = i1583[5]
  i1582.m_BoolArgument = !!i1583[6]
  return i1582
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[22],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[17],"68":[17],"69":[17],"70":[17],"71":[17],"72":[17],"16":[17],"73":[17],"74":[17],"40":[17],"75":[17],"76":[17],"77":[17],"78":[22],"79":[80],"81":[82],"83":[82],"28":[27],"84":[2],"85":[22],"86":[87],"88":[27],"89":[31,27],"90":[80],"91":[31,27],"92":[27],"93":[27],"94":[80,27],"95":[27,31],"96":[97],"98":[97],"99":[97],"100":[27],"101":[27],"30":[28],"37":[31,27],"34":[27],"29":[28],"102":[27],"103":[27],"104":[27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[27],"110":[27],"32":[31,27],"111":[27],"112":[27],"113":[27],"114":[27],"35":[31,27],"115":[27],"116":[25],"117":[25],"26":[25],"118":[25],"119":[22],"120":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","ResetPointEffect","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","CheckGround","UnityEngine.BoxCollider2D","JumpController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.UI.Button","PlayerController","UnityEngine.TargetJoint2D","ShootController","GameController","LayoutController","SpawnMonster","LunaController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "11/09/2026 08:24:39";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SPS_V08_TrangHTT";

Deserializers.lunaAppID = "42944";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1749";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4509";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "a3bfbc41-3cd0-4e8f-bb43-d4087a9482d7";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

