var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointSpring' )
  var i1237 = data
  i1236.spring = i1237[0]
  i1236.damper = i1237[1]
  i1236.targetPosition = i1237[2]
  return i1236
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.JointMotor' )
  var i1239 = data
  i1238.m_TargetVelocity = i1239[0]
  i1238.m_Force = i1239[1]
  i1238.m_FreeSpin = i1239[2]
  return i1238
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.JointLimits' )
  var i1241 = data
  i1240.m_Min = i1241[0]
  i1240.m_Max = i1241[1]
  i1240.m_Bounciness = i1241[2]
  i1240.m_BounceMinVelocity = i1241[3]
  i1240.m_ContactDistance = i1241[4]
  i1240.minBounce = i1241[5]
  i1240.maxBounce = i1241[6]
  return i1240
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.JointDrive' )
  var i1243 = data
  i1242.m_PositionSpring = i1243[0]
  i1242.m_PositionDamper = i1243[1]
  i1242.m_MaximumForce = i1243[2]
  i1242.m_UseAcceleration = i1243[3]
  return i1242
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1245 = data
  i1244.m_Spring = i1245[0]
  i1244.m_Damper = i1245[1]
  return i1244
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1247 = data
  i1246.m_Limit = i1247[0]
  i1246.m_Bounciness = i1247[1]
  i1246.m_ContactDistance = i1247[2]
  return i1246
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1249 = data
  i1248.m_ExtremumSlip = i1249[0]
  i1248.m_ExtremumValue = i1249[1]
  i1248.m_AsymptoteSlip = i1249[2]
  i1248.m_AsymptoteValue = i1249[3]
  i1248.m_Stiffness = i1249[4]
  return i1248
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1251 = data
  i1250.m_LowerAngle = i1251[0]
  i1250.m_UpperAngle = i1251[1]
  return i1250
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1253 = data
  i1252.m_MotorSpeed = i1253[0]
  i1252.m_MaximumMotorTorque = i1253[1]
  return i1252
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1255 = data
  i1254.m_DampingRatio = i1255[0]
  i1254.m_Frequency = i1255[1]
  i1254.m_Angle = i1255[2]
  return i1254
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1257 = data
  i1256.m_LowerTranslation = i1257[0]
  i1256.m_UpperTranslation = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1258 = root || new pc.UnityMaterial()
  var i1259 = data
  i1258.name = i1259[0]
  request.r(i1259[1], i1259[2], 0, i1258, 'shader')
  i1258.renderQueue = i1259[3]
  i1258.enableInstancing = !!i1259[4]
  var i1261 = i1259[5]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1261[i + 0]) );
  }
  i1258.floatParameters = i1260
  var i1263 = i1259[6]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1263[i + 0]) );
  }
  i1258.colorParameters = i1262
  var i1265 = i1259[7]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1265[i + 0]) );
  }
  i1258.vectorParameters = i1264
  var i1267 = i1259[8]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1267[i + 0]) );
  }
  i1258.textureParameters = i1266
  var i1269 = i1259[9]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1269[i + 0]) );
  }
  i1258.materialFlags = i1268
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1273 = data
  i1272.name = i1273[0]
  i1272.value = i1273[1]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1277 = data
  i1276.name = i1277[0]
  i1276.value = new pc.Color(i1277[1], i1277[2], i1277[3], i1277[4])
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.value = new pc.Vec4( i1281[1], i1281[2], i1281[3], i1281[4] )
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1285 = data
  i1284.name = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'value')
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1289 = data
  i1288.name = i1289[0]
  i1288.enabled = !!i1289[1]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.width = i1291[1]
  i1290.height = i1291[2]
  i1290.mipmapCount = i1291[3]
  i1290.anisoLevel = i1291[4]
  i1290.filterMode = i1291[5]
  i1290.hdr = !!i1291[6]
  i1290.format = i1291[7]
  i1290.wrapMode = i1291[8]
  i1290.alphaIsTransparency = !!i1291[9]
  i1290.alphaSource = i1291[10]
  i1290.graphicsFormat = i1291[11]
  i1290.sRGBTexture = !!i1291[12]
  i1290.desiredColorSpace = i1291[13]
  i1290.wrapU = i1291[14]
  i1290.wrapV = i1291[15]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1293 = data
  i1292.position = new pc.Vec3( i1293[0], i1293[1], i1293[2] )
  i1292.scale = new pc.Vec3( i1293[3], i1293[4], i1293[5] )
  i1292.rotation = new pc.Quat(i1293[6], i1293[7], i1293[8], i1293[9])
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1295 = data
  i1294.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1295[0], i1294.main)
  i1294.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1295[1], i1294.colorBySpeed)
  i1294.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1295[2], i1294.colorOverLifetime)
  i1294.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1295[3], i1294.emission)
  i1294.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1295[4], i1294.rotationBySpeed)
  i1294.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1295[5], i1294.rotationOverLifetime)
  i1294.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1295[6], i1294.shape)
  i1294.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1295[7], i1294.sizeBySpeed)
  i1294.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1295[8], i1294.sizeOverLifetime)
  i1294.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1295[9], i1294.textureSheetAnimation)
  i1294.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1295[10], i1294.velocityOverLifetime)
  i1294.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1295[11], i1294.noise)
  i1294.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1295[12], i1294.inheritVelocity)
  i1294.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1295[13], i1294.forceOverLifetime)
  i1294.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1295[14], i1294.limitVelocityOverLifetime)
  i1294.useAutoRandomSeed = !!i1295[15]
  i1294.randomSeed = i1295[16]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1296 = root || new pc.ParticleSystemMain()
  var i1297 = data
  i1296.duration = i1297[0]
  i1296.loop = !!i1297[1]
  i1296.prewarm = !!i1297[2]
  i1296.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[3], i1296.startDelay)
  i1296.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[4], i1296.startLifetime)
  i1296.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[5], i1296.startSpeed)
  i1296.startSize3D = !!i1297[6]
  i1296.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[7], i1296.startSizeX)
  i1296.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[8], i1296.startSizeY)
  i1296.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[9], i1296.startSizeZ)
  i1296.startRotation3D = !!i1297[10]
  i1296.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[11], i1296.startRotationX)
  i1296.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[12], i1296.startRotationY)
  i1296.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[13], i1296.startRotationZ)
  i1296.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1297[14], i1296.startColor)
  i1296.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1297[15], i1296.gravityModifier)
  i1296.simulationSpace = i1297[16]
  request.r(i1297[17], i1297[18], 0, i1296, 'customSimulationSpace')
  i1296.simulationSpeed = i1297[19]
  i1296.useUnscaledTime = !!i1297[20]
  i1296.scalingMode = i1297[21]
  i1296.playOnAwake = !!i1297[22]
  i1296.maxParticles = i1297[23]
  i1296.emitterVelocityMode = i1297[24]
  i1296.stopAction = i1297[25]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1298 = root || new pc.MinMaxCurve()
  var i1299 = data
  i1298.mode = i1299[0]
  i1298.curveMin = new pc.AnimationCurve( { keys_flow: i1299[1] } )
  i1298.curveMax = new pc.AnimationCurve( { keys_flow: i1299[2] } )
  i1298.curveMultiplier = i1299[3]
  i1298.constantMin = i1299[4]
  i1298.constantMax = i1299[5]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1300 = root || new pc.MinMaxGradient()
  var i1301 = data
  i1300.mode = i1301[0]
  i1300.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1301[1], i1300.gradientMin)
  i1300.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1301[2], i1300.gradientMax)
  i1300.colorMin = new pc.Color(i1301[3], i1301[4], i1301[5], i1301[6])
  i1300.colorMax = new pc.Color(i1301[7], i1301[8], i1301[9], i1301[10])
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1303 = data
  i1302.mode = i1303[0]
  var i1305 = i1303[1]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1305[i + 0]) );
  }
  i1302.colorKeys = i1304
  var i1307 = i1303[2]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1307[i + 0]) );
  }
  i1302.alphaKeys = i1306
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1308 = root || new pc.ParticleSystemColorBySpeed()
  var i1309 = data
  i1308.enabled = !!i1309[0]
  i1308.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1309[1], i1308.color)
  i1308.range = new pc.Vec2( i1309[2], i1309[3] )
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1313 = data
  i1312.color = new pc.Color(i1313[0], i1313[1], i1313[2], i1313[3])
  i1312.time = i1313[4]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1317 = data
  i1316.alpha = i1317[0]
  i1316.time = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1318 = root || new pc.ParticleSystemColorOverLifetime()
  var i1319 = data
  i1318.enabled = !!i1319[0]
  i1318.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1319[1], i1318.color)
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1320 = root || new pc.ParticleSystemEmitter()
  var i1321 = data
  i1320.enabled = !!i1321[0]
  i1320.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1321[1], i1320.rateOverTime)
  i1320.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1321[2], i1320.rateOverDistance)
  var i1323 = i1321[3]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1323[i + 0]) );
  }
  i1320.bursts = i1322
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1326 = root || new pc.ParticleSystemBurst()
  var i1327 = data
  i1326.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1327[0], i1326.count)
  i1326.cycleCount = i1327[1]
  i1326.minCount = i1327[2]
  i1326.maxCount = i1327[3]
  i1326.repeatInterval = i1327[4]
  i1326.time = i1327[5]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1328 = root || new pc.ParticleSystemRotationBySpeed()
  var i1329 = data
  i1328.enabled = !!i1329[0]
  i1328.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1329[1], i1328.x)
  i1328.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1329[2], i1328.y)
  i1328.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1329[3], i1328.z)
  i1328.separateAxes = !!i1329[4]
  i1328.range = new pc.Vec2( i1329[5], i1329[6] )
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1330 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1331 = data
  i1330.enabled = !!i1331[0]
  i1330.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1331[1], i1330.x)
  i1330.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1331[2], i1330.y)
  i1330.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1331[3], i1330.z)
  i1330.separateAxes = !!i1331[4]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1332 = root || new pc.ParticleSystemShape()
  var i1333 = data
  i1332.enabled = !!i1333[0]
  i1332.shapeType = i1333[1]
  i1332.randomDirectionAmount = i1333[2]
  i1332.sphericalDirectionAmount = i1333[3]
  i1332.randomPositionAmount = i1333[4]
  i1332.alignToDirection = !!i1333[5]
  i1332.radius = i1333[6]
  i1332.radiusMode = i1333[7]
  i1332.radiusSpread = i1333[8]
  i1332.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1333[9], i1332.radiusSpeed)
  i1332.radiusThickness = i1333[10]
  i1332.angle = i1333[11]
  i1332.length = i1333[12]
  i1332.boxThickness = new pc.Vec3( i1333[13], i1333[14], i1333[15] )
  i1332.meshShapeType = i1333[16]
  request.r(i1333[17], i1333[18], 0, i1332, 'mesh')
  request.r(i1333[19], i1333[20], 0, i1332, 'meshRenderer')
  request.r(i1333[21], i1333[22], 0, i1332, 'skinnedMeshRenderer')
  i1332.useMeshMaterialIndex = !!i1333[23]
  i1332.meshMaterialIndex = i1333[24]
  i1332.useMeshColors = !!i1333[25]
  i1332.normalOffset = i1333[26]
  i1332.arc = i1333[27]
  i1332.arcMode = i1333[28]
  i1332.arcSpread = i1333[29]
  i1332.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1333[30], i1332.arcSpeed)
  i1332.donutRadius = i1333[31]
  i1332.position = new pc.Vec3( i1333[32], i1333[33], i1333[34] )
  i1332.rotation = new pc.Vec3( i1333[35], i1333[36], i1333[37] )
  i1332.scale = new pc.Vec3( i1333[38], i1333[39], i1333[40] )
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1334 = root || new pc.ParticleSystemSizeBySpeed()
  var i1335 = data
  i1334.enabled = !!i1335[0]
  i1334.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1335[1], i1334.x)
  i1334.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1335[2], i1334.y)
  i1334.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1335[3], i1334.z)
  i1334.separateAxes = !!i1335[4]
  i1334.range = new pc.Vec2( i1335[5], i1335[6] )
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1336 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1337[1], i1336.x)
  i1336.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1337[2], i1336.y)
  i1336.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1337[3], i1336.z)
  i1336.separateAxes = !!i1337[4]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1338 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1339 = data
  i1338.enabled = !!i1339[0]
  i1338.mode = i1339[1]
  i1338.animation = i1339[2]
  i1338.numTilesX = i1339[3]
  i1338.numTilesY = i1339[4]
  i1338.useRandomRow = !!i1339[5]
  i1338.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1339[6], i1338.frameOverTime)
  i1338.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1339[7], i1338.startFrame)
  i1338.cycleCount = i1339[8]
  i1338.rowIndex = i1339[9]
  i1338.flipU = i1339[10]
  i1338.flipV = i1339[11]
  i1338.spriteCount = i1339[12]
  var i1341 = i1339[13]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 2, i1340, '')
  }
  i1338.sprites = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1344 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1345 = data
  i1344.enabled = !!i1345[0]
  i1344.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[1], i1344.x)
  i1344.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[2], i1344.y)
  i1344.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[3], i1344.z)
  i1344.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[4], i1344.radial)
  i1344.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[5], i1344.speedModifier)
  i1344.space = i1345[6]
  i1344.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[7], i1344.orbitalX)
  i1344.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[8], i1344.orbitalY)
  i1344.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[9], i1344.orbitalZ)
  i1344.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[10], i1344.orbitalOffsetX)
  i1344.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[11], i1344.orbitalOffsetY)
  i1344.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1345[12], i1344.orbitalOffsetZ)
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1346 = root || new pc.ParticleSystemNoise()
  var i1347 = data
  i1346.enabled = !!i1347[0]
  i1346.separateAxes = !!i1347[1]
  i1346.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[2], i1346.strengthX)
  i1346.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[3], i1346.strengthY)
  i1346.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[4], i1346.strengthZ)
  i1346.frequency = i1347[5]
  i1346.damping = !!i1347[6]
  i1346.octaveCount = i1347[7]
  i1346.octaveMultiplier = i1347[8]
  i1346.octaveScale = i1347[9]
  i1346.quality = i1347[10]
  i1346.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[11], i1346.scrollSpeed)
  i1346.scrollSpeedMultiplier = i1347[12]
  i1346.remapEnabled = !!i1347[13]
  i1346.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[14], i1346.remapX)
  i1346.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[15], i1346.remapY)
  i1346.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[16], i1346.remapZ)
  i1346.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[17], i1346.positionAmount)
  i1346.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[18], i1346.rotationAmount)
  i1346.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1347[19], i1346.sizeAmount)
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1348 = root || new pc.ParticleSystemInheritVelocity()
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.mode = i1349[1]
  i1348.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1349[2], i1348.curve)
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1350 = root || new pc.ParticleSystemForceOverLifetime()
  var i1351 = data
  i1350.enabled = !!i1351[0]
  i1350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1351[1], i1350.x)
  i1350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1351[2], i1350.y)
  i1350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1351[3], i1350.z)
  i1350.space = i1351[4]
  i1350.randomized = !!i1351[5]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1352 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1353 = data
  i1352.enabled = !!i1353[0]
  i1352.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1353[1], i1352.limit)
  i1352.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1353[2], i1352.limitX)
  i1352.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1353[3], i1352.limitY)
  i1352.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1353[4], i1352.limitZ)
  i1352.dampen = i1353[5]
  i1352.separateAxes = !!i1353[6]
  i1352.space = i1353[7]
  i1352.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1353[8], i1352.drag)
  i1352.multiplyDragByParticleSize = !!i1353[9]
  i1352.multiplyDragByParticleVelocity = !!i1353[10]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'mesh')
  i1354.meshCount = i1355[2]
  i1354.activeVertexStreamsCount = i1355[3]
  i1354.alignment = i1355[4]
  i1354.renderMode = i1355[5]
  i1354.sortMode = i1355[6]
  i1354.lengthScale = i1355[7]
  i1354.velocityScale = i1355[8]
  i1354.cameraVelocityScale = i1355[9]
  i1354.normalDirection = i1355[10]
  i1354.sortingFudge = i1355[11]
  i1354.minParticleSize = i1355[12]
  i1354.maxParticleSize = i1355[13]
  i1354.pivot = new pc.Vec3( i1355[14], i1355[15], i1355[16] )
  request.r(i1355[17], i1355[18], 0, i1354, 'trailMaterial')
  i1354.applyActiveColorSpace = !!i1355[19]
  i1354.enabled = !!i1355[20]
  request.r(i1355[21], i1355[22], 0, i1354, 'sharedMaterial')
  var i1357 = i1355[23]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 2, i1356, '')
  }
  i1354.sharedMaterials = i1356
  i1354.receiveShadows = !!i1355[24]
  i1354.shadowCastingMode = i1355[25]
  i1354.sortingLayerID = i1355[26]
  i1354.sortingOrder = i1355[27]
  i1354.lightmapIndex = i1355[28]
  i1354.lightmapSceneIndex = i1355[29]
  i1354.lightmapScaleOffset = new pc.Vec4( i1355[30], i1355[31], i1355[32], i1355[33] )
  i1354.lightProbeUsage = i1355[34]
  i1354.reflectionProbeUsage = i1355[35]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.tagId = i1361[1]
  i1360.enabled = !!i1361[2]
  i1360.isStatic = !!i1361[3]
  i1360.layer = i1361[4]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.index = i1363[1]
  i1362.startup = !!i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1365 = data
  i1364.aspect = i1365[0]
  i1364.orthographic = !!i1365[1]
  i1364.orthographicSize = i1365[2]
  i1364.backgroundColor = new pc.Color(i1365[3], i1365[4], i1365[5], i1365[6])
  i1364.nearClipPlane = i1365[7]
  i1364.farClipPlane = i1365[8]
  i1364.fieldOfView = i1365[9]
  i1364.depth = i1365[10]
  i1364.clearFlags = i1365[11]
  i1364.cullingMask = i1365[12]
  i1364.rect = i1365[13]
  request.r(i1365[14], i1365[15], 0, i1364, 'targetTexture')
  i1364.usePhysicalProperties = !!i1365[16]
  i1364.focalLength = i1365[17]
  i1364.sensorSize = new pc.Vec2( i1365[18], i1365[19] )
  i1364.lensShift = new pc.Vec2( i1365[20], i1365[21] )
  i1364.gateFit = i1365[22]
  i1364.commandBufferCount = i1365[23]
  i1364.cameraType = i1365[24]
  i1364.enabled = !!i1365[25]
  return i1364
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1367 = data
  request.r(i1367[0], i1367[1], 0, i1366, 'm_FirstSelected')
  i1366.m_sendNavigationEvents = !!i1367[2]
  i1366.m_DragThreshold = i1367[3]
  return i1366
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1369 = data
  i1368.m_HorizontalAxis = i1369[0]
  i1368.m_VerticalAxis = i1369[1]
  i1368.m_SubmitButton = i1369[2]
  i1368.m_CancelButton = i1369[3]
  i1368.m_InputActionsPerSecond = i1369[4]
  i1368.m_RepeatDelay = i1369[5]
  i1368.m_ForceModuleActive = !!i1369[6]
  i1368.m_SendPointerHoverToParent = !!i1369[7]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1371 = data
  i1370.pivot = new pc.Vec2( i1371[0], i1371[1] )
  i1370.anchorMin = new pc.Vec2( i1371[2], i1371[3] )
  i1370.anchorMax = new pc.Vec2( i1371[4], i1371[5] )
  i1370.sizeDelta = new pc.Vec2( i1371[6], i1371[7] )
  i1370.anchoredPosition3D = new pc.Vec3( i1371[8], i1371[9], i1371[10] )
  i1370.rotation = new pc.Quat(i1371[11], i1371[12], i1371[13], i1371[14])
  i1370.scale = new pc.Vec3( i1371[15], i1371[16], i1371[17] )
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1373 = data
  i1372.planeDistance = i1373[0]
  i1372.referencePixelsPerUnit = i1373[1]
  i1372.isFallbackOverlay = !!i1373[2]
  i1372.renderMode = i1373[3]
  i1372.renderOrder = i1373[4]
  i1372.sortingLayerName = i1373[5]
  i1372.sortingOrder = i1373[6]
  i1372.scaleFactor = i1373[7]
  request.r(i1373[8], i1373[9], 0, i1372, 'worldCamera')
  i1372.overrideSorting = !!i1373[10]
  i1372.pixelPerfect = !!i1373[11]
  i1372.targetDisplay = i1373[12]
  i1372.overridePixelPerfect = !!i1373[13]
  i1372.enabled = !!i1373[14]
  return i1372
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1375 = data
  i1374.m_UiScaleMode = i1375[0]
  i1374.m_ReferencePixelsPerUnit = i1375[1]
  i1374.m_ScaleFactor = i1375[2]
  i1374.m_ReferenceResolution = new pc.Vec2( i1375[3], i1375[4] )
  i1374.m_ScreenMatchMode = i1375[5]
  i1374.m_MatchWidthOrHeight = i1375[6]
  i1374.m_PhysicalUnit = i1375[7]
  i1374.m_FallbackScreenDPI = i1375[8]
  i1374.m_DefaultSpriteDPI = i1375[9]
  i1374.m_DynamicPixelsPerUnit = i1375[10]
  i1374.m_PresetInfoIsWorld = !!i1375[11]
  return i1374
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1377 = data
  i1376.m_IgnoreReversedGraphics = !!i1377[0]
  i1376.m_BlockingObjects = i1377[1]
  i1376.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1377[2] )
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1379 = data
  i1378.cullTransparentMesh = !!i1379[0]
  return i1378
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1381 = data
  i1380.m_AspectMode = i1381[0]
  i1380.m_AspectRatio = i1381[1]
  return i1380
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'm_Texture')
  i1382.m_UVRect = UnityEngine.Rect.MinMaxRect(i1383[2], i1383[3], i1383[4], i1383[5])
  request.r(i1383[6], i1383[7], 0, i1382, 'm_Material')
  i1382.m_Maskable = !!i1383[8]
  i1382.m_Color = new pc.Color(i1383[9], i1383[10], i1383[11], i1383[12])
  i1382.m_RaycastTarget = !!i1383[13]
  i1382.m_RaycastPadding = new pc.Vec4( i1383[14], i1383[15], i1383[16], i1383[17] )
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1385 = data
  i1384.color = new pc.Color(i1385[0], i1385[1], i1385[2], i1385[3])
  request.r(i1385[4], i1385[5], 0, i1384, 'sprite')
  i1384.flipX = !!i1385[6]
  i1384.flipY = !!i1385[7]
  i1384.drawMode = i1385[8]
  i1384.size = new pc.Vec2( i1385[9], i1385[10] )
  i1384.tileMode = i1385[11]
  i1384.adaptiveModeThreshold = i1385[12]
  i1384.maskInteraction = i1385[13]
  i1384.spriteSortPoint = i1385[14]
  i1384.enabled = !!i1385[15]
  request.r(i1385[16], i1385[17], 0, i1384, 'sharedMaterial')
  var i1387 = i1385[18]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 2) {
  request.r(i1387[i + 0], i1387[i + 1], 2, i1386, '')
  }
  i1384.sharedMaterials = i1386
  i1384.receiveShadows = !!i1385[19]
  i1384.shadowCastingMode = i1385[20]
  i1384.sortingLayerID = i1385[21]
  i1384.sortingOrder = i1385[22]
  i1384.lightmapIndex = i1385[23]
  i1384.lightmapSceneIndex = i1385[24]
  i1384.lightmapScaleOffset = new pc.Vec4( i1385[25], i1385[26], i1385[27], i1385[28] )
  i1384.lightProbeUsage = i1385[29]
  i1384.reflectionProbeUsage = i1385[30]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1389 = data
  i1388.usedByComposite = !!i1389[0]
  i1388.autoTiling = !!i1389[1]
  i1388.size = new pc.Vec2( i1389[2], i1389[3] )
  i1388.edgeRadius = i1389[4]
  i1388.enabled = !!i1389[5]
  i1388.isTrigger = !!i1389[6]
  i1388.usedByEffector = !!i1389[7]
  i1388.density = i1389[8]
  i1388.offset = new pc.Vec2( i1389[9], i1389[10] )
  request.r(i1389[11], i1389[12], 0, i1388, 'material')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1391 = data
  i1390.sortingLayerIndex = i1391[0]
  i1390.sortingOrder = i1391[1]
  i1390.sortingLayerName = i1391[2]
  i1390.enabled = !!i1391[3]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1393 = data
  i1392.bodyType = i1393[0]
  request.r(i1393[1], i1393[2], 0, i1392, 'material')
  i1392.simulated = !!i1393[3]
  i1392.useAutoMass = !!i1393[4]
  i1392.mass = i1393[5]
  i1392.drag = i1393[6]
  i1392.angularDrag = i1393[7]
  i1392.gravityScale = i1393[8]
  i1392.collisionDetectionMode = i1393[9]
  i1392.sleepMode = i1393[10]
  i1392.constraints = i1393[11]
  return i1392
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1394 = root || request.c( 'MonsterController' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'joint')
  request.r(i1395[2], i1395[3], 0, i1394, 'rb')
  request.r(i1395[4], i1395[5], 0, i1394, 'deadSFX')
  i1394.force = new pc.Vec2( i1395[6], i1395[7] )
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1397 = data
  i1396.useLimits = !!i1397[0]
  i1396.limits = request.d('UnityEngine.JointAngleLimits2D', i1397[1], i1396.limits)
  i1396.useMotor = !!i1397[2]
  i1396.motor = request.d('UnityEngine.JointMotor2D', i1397[3], i1396.motor)
  i1396.anchor = new pc.Vec2( i1397[4], i1397[5] )
  i1396.connectedAnchor = new pc.Vec2( i1397[6], i1397[7] )
  i1396.autoConfigureConnectedAnchor = !!i1397[8]
  request.r(i1397[9], i1397[10], 0, i1396, 'connectedBody')
  i1396.breakForce = i1397[11]
  i1396.breakTorque = i1397[12]
  i1396.enableCollision = !!i1397[13]
  i1396.enabled = !!i1397[14]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1399 = data
  i1398.autoConfigureTarget = !!i1399[0]
  i1398.target = new pc.Vec2( i1399[1], i1399[2] )
  i1398.anchor = new pc.Vec2( i1399[3], i1399[4] )
  i1398.maxForce = i1399[5]
  i1398.dampingRatio = i1399[6]
  i1398.frequency = i1399[7]
  request.r(i1399[8], i1399[9], 0, i1398, 'connectedBody')
  i1398.breakForce = i1399[10]
  i1398.breakTorque = i1399[11]
  i1398.enableCollision = !!i1399[12]
  i1398.enabled = !!i1399[13]
  return i1398
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1400 = root || request.c( 'BonkController' )
  var i1401 = data
  i1400.target = i1401[0]
  i1400.maxBonk = i1401[1]
  request.r(i1401[2], i1401[3], 0, i1400, 'hitSound')
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1403 = data
  i1402.edgeRadius = i1403[0]
  var i1405 = i1403[1]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 2) {
    i1404.push( new pc.Vec2( i1405[i + 0], i1405[i + 1] ) );
  }
  i1402.points = i1404
  i1402.useAdjacentStartPoint = !!i1403[2]
  i1402.adjacentStartPoint = new pc.Vec2( i1403[3], i1403[4] )
  i1402.useAdjacentEndPoint = !!i1403[5]
  i1402.adjacentEndPoint = new pc.Vec2( i1403[6], i1403[7] )
  i1402.enabled = !!i1403[8]
  i1402.isTrigger = !!i1403[9]
  i1402.usedByEffector = !!i1403[10]
  i1402.density = i1403[11]
  i1402.offset = new pc.Vec2( i1403[12], i1403[13] )
  request.r(i1403[14], i1403[15], 0, i1402, 'material')
  return i1402
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.UI.Text' )
  var i1409 = data
  i1408.m_FontData = request.d('UnityEngine.UI.FontData', i1409[0], i1408.m_FontData)
  i1408.m_Text = i1409[1]
  request.r(i1409[2], i1409[3], 0, i1408, 'm_Material')
  i1408.m_Maskable = !!i1409[4]
  i1408.m_Color = new pc.Color(i1409[5], i1409[6], i1409[7], i1409[8])
  i1408.m_RaycastTarget = !!i1409[9]
  i1408.m_RaycastPadding = new pc.Vec4( i1409[10], i1409[11], i1409[12], i1409[13] )
  return i1408
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'm_Font')
  i1410.m_FontSize = i1411[2]
  i1410.m_FontStyle = i1411[3]
  i1410.m_BestFit = !!i1411[4]
  i1410.m_MinSize = i1411[5]
  i1410.m_MaxSize = i1411[6]
  i1410.m_Alignment = i1411[7]
  i1410.m_AlignByGeometry = !!i1411[8]
  i1410.m_RichText = !!i1411[9]
  i1410.m_HorizontalOverflow = i1411[10]
  i1410.m_VerticalOverflow = i1411[11]
  i1410.m_LineSpacing = i1411[12]
  return i1410
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1412 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1413 = data
  i1412.targetIsSelf = !!i1413[0]
  request.r(i1413[1], i1413[2], 0, i1412, 'targetGO')
  i1412.tweenTargetIsTargetGO = !!i1413[3]
  i1412.delay = i1413[4]
  i1412.duration = i1413[5]
  i1412.easeType = i1413[6]
  i1412.easeCurve = new pc.AnimationCurve( { keys_flow: i1413[7] } )
  i1412.loopType = i1413[8]
  i1412.loops = i1413[9]
  i1412.id = i1413[10]
  i1412.isRelative = !!i1413[11]
  i1412.isFrom = !!i1413[12]
  i1412.isIndependentUpdate = !!i1413[13]
  i1412.autoKill = !!i1413[14]
  i1412.autoGenerate = !!i1413[15]
  i1412.isActive = !!i1413[16]
  i1412.isValid = !!i1413[17]
  request.r(i1413[18], i1413[19], 0, i1412, 'target')
  i1412.animationType = i1413[20]
  i1412.targetType = i1413[21]
  i1412.forcedTargetType = i1413[22]
  i1412.autoPlay = !!i1413[23]
  i1412.useTargetAsV3 = !!i1413[24]
  i1412.endValueFloat = i1413[25]
  i1412.endValueV3 = new pc.Vec3( i1413[26], i1413[27], i1413[28] )
  i1412.endValueV2 = new pc.Vec2( i1413[29], i1413[30] )
  i1412.endValueColor = new pc.Color(i1413[31], i1413[32], i1413[33], i1413[34])
  i1412.endValueString = i1413[35]
  i1412.endValueRect = UnityEngine.Rect.MinMaxRect(i1413[36], i1413[37], i1413[38], i1413[39])
  request.r(i1413[40], i1413[41], 0, i1412, 'endValueTransform')
  i1412.optionalBool0 = !!i1413[42]
  i1412.optionalBool1 = !!i1413[43]
  i1412.optionalFloat0 = i1413[44]
  i1412.optionalInt0 = i1413[45]
  i1412.optionalRotationMode = i1413[46]
  i1412.optionalScrambleMode = i1413[47]
  i1412.optionalShakeRandomnessMode = i1413[48]
  i1412.optionalString = i1413[49]
  i1412.updateType = i1413[50]
  i1412.isSpeedBased = !!i1413[51]
  i1412.hasOnStart = !!i1413[52]
  i1412.hasOnPlay = !!i1413[53]
  i1412.hasOnUpdate = !!i1413[54]
  i1412.hasOnStepComplete = !!i1413[55]
  i1412.hasOnComplete = !!i1413[56]
  i1412.hasOnTweenCreated = !!i1413[57]
  i1412.hasOnRewind = !!i1413[58]
  i1412.onStart = request.d('UnityEngine.Events.UnityEvent', i1413[59], i1412.onStart)
  i1412.onPlay = request.d('UnityEngine.Events.UnityEvent', i1413[60], i1412.onPlay)
  i1412.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1413[61], i1412.onUpdate)
  i1412.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1413[62], i1412.onStepComplete)
  i1412.onComplete = request.d('UnityEngine.Events.UnityEvent', i1413[63], i1412.onComplete)
  i1412.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1413[64], i1412.onTweenCreated)
  i1412.onRewind = request.d('UnityEngine.Events.UnityEvent', i1413[65], i1412.onRewind)
  return i1412
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1415 = data
  i1414.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1415[0], i1414.m_PersistentCalls)
  return i1414
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('UnityEngine.Events.PersistentCall', i1419[i + 0]));
  }
  i1416.m_Calls = i1418
  return i1416
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'm_Target')
  i1422.m_TargetAssemblyTypeName = i1423[2]
  i1422.m_MethodName = i1423[3]
  i1422.m_Mode = i1423[4]
  i1422.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1423[5], i1422.m_Arguments)
  i1422.m_CallState = i1423[6]
  return i1422
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.UI.Image' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'm_Sprite')
  i1424.m_Type = i1425[2]
  i1424.m_PreserveAspect = !!i1425[3]
  i1424.m_FillCenter = !!i1425[4]
  i1424.m_FillMethod = i1425[5]
  i1424.m_FillAmount = i1425[6]
  i1424.m_FillClockwise = !!i1425[7]
  i1424.m_FillOrigin = i1425[8]
  i1424.m_UseSpriteMesh = !!i1425[9]
  i1424.m_PixelsPerUnitMultiplier = i1425[10]
  request.r(i1425[11], i1425[12], 0, i1424, 'm_Material')
  i1424.m_Maskable = !!i1425[13]
  i1424.m_Color = new pc.Color(i1425[14], i1425[15], i1425[16], i1425[17])
  i1424.m_RaycastTarget = !!i1425[18]
  i1424.m_RaycastPadding = new pc.Vec4( i1425[19], i1425[20], i1425[21], i1425[22] )
  return i1424
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.UI.Button' )
  var i1427 = data
  i1426.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1427[0], i1426.m_OnClick)
  i1426.m_Navigation = request.d('UnityEngine.UI.Navigation', i1427[1], i1426.m_Navigation)
  i1426.m_Transition = i1427[2]
  i1426.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1427[3], i1426.m_Colors)
  i1426.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1427[4], i1426.m_SpriteState)
  i1426.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1427[5], i1426.m_AnimationTriggers)
  i1426.m_Interactable = !!i1427[6]
  request.r(i1427[7], i1427[8], 0, i1426, 'm_TargetGraphic')
  return i1426
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1429 = data
  i1428.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1429[0], i1428.m_PersistentCalls)
  return i1428
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1431 = data
  i1430.m_Mode = i1431[0]
  i1430.m_WrapAround = !!i1431[1]
  request.r(i1431[2], i1431[3], 0, i1430, 'm_SelectOnUp')
  request.r(i1431[4], i1431[5], 0, i1430, 'm_SelectOnDown')
  request.r(i1431[6], i1431[7], 0, i1430, 'm_SelectOnLeft')
  request.r(i1431[8], i1431[9], 0, i1430, 'm_SelectOnRight')
  return i1430
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1433 = data
  i1432.m_NormalColor = new pc.Color(i1433[0], i1433[1], i1433[2], i1433[3])
  i1432.m_HighlightedColor = new pc.Color(i1433[4], i1433[5], i1433[6], i1433[7])
  i1432.m_PressedColor = new pc.Color(i1433[8], i1433[9], i1433[10], i1433[11])
  i1432.m_SelectedColor = new pc.Color(i1433[12], i1433[13], i1433[14], i1433[15])
  i1432.m_DisabledColor = new pc.Color(i1433[16], i1433[17], i1433[18], i1433[19])
  i1432.m_ColorMultiplier = i1433[20]
  i1432.m_FadeDuration = i1433[21]
  return i1432
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'm_HighlightedSprite')
  request.r(i1435[2], i1435[3], 0, i1434, 'm_PressedSprite')
  request.r(i1435[4], i1435[5], 0, i1434, 'm_SelectedSprite')
  request.r(i1435[6], i1435[7], 0, i1434, 'm_DisabledSprite')
  return i1434
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1437 = data
  i1436.m_NormalTrigger = i1437[0]
  i1436.m_HighlightedTrigger = i1437[1]
  i1436.m_PressedTrigger = i1437[2]
  i1436.m_SelectedTrigger = i1437[3]
  i1436.m_DisabledTrigger = i1437[4]
  return i1436
}

Deserializers["GameController"] = function (request, data, root) {
  var i1438 = root || request.c( 'GameController' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 1, i1440, '')
  }
  i1438.stage1LeftCharacter = i1440
  var i1443 = i1439[1]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1443.length; i += 2) {
  request.r(i1443[i + 0], i1443[i + 1], 1, i1442, '')
  }
  i1438.stage1RightCharacter = i1442
  var i1445 = i1439[2]
  var i1444 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1445.length; i += 2) {
  request.r(i1445[i + 0], i1445[i + 1], 1, i1444, '')
  }
  i1438.stage2LeftCharacter = i1444
  var i1447 = i1439[3]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1447.length; i += 2) {
  request.r(i1447[i + 0], i1447[i + 1], 1, i1446, '')
  }
  i1438.stage2RightCharacter = i1446
  var i1449 = i1439[4]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 1, i1448, '')
  }
  i1438.stage3LeftCharacter = i1448
  var i1451 = i1439[5]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1451.length; i += 2) {
  request.r(i1451[i + 0], i1451[i + 1], 1, i1450, '')
  }
  i1438.stage3MidCharacter = i1450
  var i1453 = i1439[6]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1453.length; i += 2) {
  request.r(i1453[i + 0], i1453[i + 1], 1, i1452, '')
  }
  i1438.stage3RightCharacter = i1452
  var i1455 = i1439[7]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 1, i1454, '')
  }
  i1438.players1 = i1454
  var i1457 = i1439[8]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1457.length; i += 2) {
  request.r(i1457[i + 0], i1457[i + 1], 1, i1456, '')
  }
  i1438.players2 = i1456
  var i1459 = i1439[9]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1459.length; i += 2) {
  request.r(i1459[i + 0], i1459[i + 1], 1, i1458, '')
  }
  i1438.monsters = i1458
  var i1461 = i1439[10]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1461.length; i += 2) {
  request.r(i1461[i + 0], i1461[i + 1], 1, i1460, '')
  }
  i1438.monsters1 = i1460
  var i1463 = i1439[11]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1463.length; i += 2) {
  request.r(i1463[i + 0], i1463[i + 1], 1, i1462, '')
  }
  i1438.monsters2 = i1462
  request.r(i1439[12], i1439[13], 0, i1438, 'mainCamera')
  var i1465 = i1439[14]
  var i1464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1465.length; i += 3) {
    i1464.add(new pc.Vec3( i1465[i + 0], i1465[i + 1], i1465[i + 2] ));
  }
  i1438.cameraPos = i1464
  i1438.speedMove = i1439[15]
  request.r(i1439[16], i1439[17], 0, i1438, 'target')
  i1438.index = i1439[18]
  i1438.end = !!i1439[19]
  request.r(i1439[20], i1439[21], 0, i1438, 'endUI')
  return i1438
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1474 = root || request.c( 'TargetController' )
  var i1475 = data
  var i1477 = i1475[0]
  var i1476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1477.length; i += 2) {
  request.r(i1477[i + 0], i1477[i + 1], 1, i1476, '')
  }
  i1474.listTarget = i1476
  request.r(i1475[1], i1475[2], 0, i1474, 'currentTarget')
  i1474.index = i1475[3]
  request.r(i1475[4], i1475[5], 0, i1474, 'tut')
  return i1474
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1478 = root || request.c( 'LunaController' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'BGTexture')
  i1478.UseTime = !!i1479[2]
  i1478.TimePlay = i1479[3]
  i1478.TitleText = i1479[4]
  i1478.ColorTitleText = new pc.Color(i1479[5], i1479[6], i1479[7], i1479[8])
  i1478.Stage1Left = i1479[9]
  i1478.Stage1Right = i1479[10]
  i1478.Stage2Left = i1479[11]
  i1478.Stage2Right = i1479[12]
  i1478.Stage3Left = i1479[13]
  i1478.Stage3Mid = i1479[14]
  i1478.Stage3Right = i1479[15]
  i1478.Button1 = i1479[16]
  i1478.Button2 = i1479[17]
  i1478.Button3 = i1479[18]
  i1478.UseMap2 = !!i1479[19]
  request.r(i1479[20], i1479[21], 0, i1478, 'BGImage')
  request.r(i1479[22], i1479[23], 0, i1478, 'title')
  var i1481 = i1479[24]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1481.length; i += 2) {
  request.r(i1481[i + 0], i1481[i + 1], 1, i1480, '')
  }
  i1478.CTA = i1480
  request.r(i1479[25], i1479[26], 0, i1478, 'endCard')
  var i1483 = i1479[27]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 1, i1482, '')
  }
  i1478.buttonSprite = i1482
  request.r(i1479[28], i1479[29], 0, i1478, 'button1Image')
  request.r(i1479[30], i1479[31], 0, i1478, 'button2Image')
  request.r(i1479[32], i1479[33], 0, i1478, 'button3Image')
  request.r(i1479[34], i1479[35], 0, i1478, 'map2')
  return i1478
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1488 = root || request.c( 'AudioController' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'BGM')
  request.r(i1489[2], i1489[3], 0, i1488, 'musicSource')
  request.r(i1489[4], i1489[5], 0, i1488, 'pool')
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'clip')
  request.r(i1491[2], i1491[3], 0, i1490, 'outputAudioMixerGroup')
  i1490.playOnAwake = !!i1491[4]
  i1490.loop = !!i1491[5]
  i1490.time = i1491[6]
  i1490.volume = i1491[7]
  i1490.pitch = i1491[8]
  i1490.enabled = !!i1491[9]
  return i1490
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1492 = root || request.c( 'VFXController' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'bloodPrefab')
  request.r(i1493[2], i1493[3], 0, i1492, 'pool')
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1495 = data
  i1494.ambientIntensity = i1495[0]
  i1494.reflectionIntensity = i1495[1]
  i1494.ambientMode = i1495[2]
  i1494.ambientLight = new pc.Color(i1495[3], i1495[4], i1495[5], i1495[6])
  i1494.ambientSkyColor = new pc.Color(i1495[7], i1495[8], i1495[9], i1495[10])
  i1494.ambientGroundColor = new pc.Color(i1495[11], i1495[12], i1495[13], i1495[14])
  i1494.ambientEquatorColor = new pc.Color(i1495[15], i1495[16], i1495[17], i1495[18])
  i1494.fogColor = new pc.Color(i1495[19], i1495[20], i1495[21], i1495[22])
  i1494.fogEndDistance = i1495[23]
  i1494.fogStartDistance = i1495[24]
  i1494.fogDensity = i1495[25]
  i1494.fog = !!i1495[26]
  request.r(i1495[27], i1495[28], 0, i1494, 'skybox')
  i1494.fogMode = i1495[29]
  var i1497 = i1495[30]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1497[i + 0]) );
  }
  i1494.lightmaps = i1496
  i1494.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1495[31], i1494.lightProbes)
  i1494.lightmapsMode = i1495[32]
  i1494.mixedBakeMode = i1495[33]
  i1494.environmentLightingMode = i1495[34]
  i1494.ambientProbe = new pc.SphericalHarmonicsL2(i1495[35])
  request.r(i1495[36], i1495[37], 0, i1494, 'customReflection')
  request.r(i1495[38], i1495[39], 0, i1494, 'defaultReflection')
  i1494.defaultReflectionMode = i1495[40]
  i1494.defaultReflectionResolution = i1495[41]
  i1494.sunLightObjectId = i1495[42]
  i1494.pixelLightCount = i1495[43]
  i1494.defaultReflectionHDR = !!i1495[44]
  i1494.hasLightDataAsset = !!i1495[45]
  i1494.hasManualGenerate = !!i1495[46]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'lightmapColor')
  request.r(i1501[2], i1501[3], 0, i1500, 'lightmapDirection')
  request.r(i1501[4], i1501[5], 0, i1500, 'shadowMask')
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1502 = root || new UnityEngine.LightProbes()
  var i1503 = data
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1513[i + 0]));
  }
  i1510.ShaderCompilationErrors = i1512
  i1510.name = i1511[1]
  i1510.guid = i1511[2]
  var i1515 = i1511[3]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1510.shaderDefinedKeywords = i1514
  var i1517 = i1511[4]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1517[i + 0]) );
  }
  i1510.passes = i1516
  var i1519 = i1511[5]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1519[i + 0]) );
  }
  i1510.usePasses = i1518
  var i1521 = i1511[6]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1521[i + 0]) );
  }
  i1510.defaultParameterValues = i1520
  request.r(i1511[7], i1511[8], 0, i1510, 'unityFallbackShader')
  i1510.readDepth = !!i1511[9]
  i1510.hasDepthOnlyPass = !!i1511[10]
  i1510.isCreatedByShaderGraph = !!i1511[11]
  i1510.disableBatching = !!i1511[12]
  i1510.compiled = !!i1511[13]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1525 = data
  i1524.shaderName = i1525[0]
  i1524.errorMessage = i1525[1]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1530 = root || new pc.UnityShaderPass()
  var i1531 = data
  i1530.id = i1531[0]
  i1530.subShaderIndex = i1531[1]
  i1530.name = i1531[2]
  i1530.passType = i1531[3]
  i1530.grabPassTextureName = i1531[4]
  i1530.usePass = !!i1531[5]
  i1530.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[6], i1530.zTest)
  i1530.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[7], i1530.zWrite)
  i1530.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[8], i1530.culling)
  i1530.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1531[9], i1530.blending)
  i1530.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1531[10], i1530.alphaBlending)
  i1530.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[11], i1530.colorWriteMask)
  i1530.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[12], i1530.offsetUnits)
  i1530.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[13], i1530.offsetFactor)
  i1530.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[14], i1530.stencilRef)
  i1530.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[15], i1530.stencilReadMask)
  i1530.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[16], i1530.stencilWriteMask)
  i1530.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1531[17], i1530.stencilOp)
  i1530.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1531[18], i1530.stencilOpFront)
  i1530.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1531[19], i1530.stencilOpBack)
  var i1533 = i1531[20]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1533[i + 0]) );
  }
  i1530.tags = i1532
  var i1535 = i1531[21]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( i1535[i + 0] );
  }
  i1530.passDefinedKeywords = i1534
  var i1537 = i1531[22]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1537[i + 0]) );
  }
  i1530.passDefinedKeywordGroups = i1536
  var i1539 = i1531[23]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1539[i + 0]) );
  }
  i1530.variants = i1538
  var i1541 = i1531[24]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1541[i + 0]) );
  }
  i1530.excludedVariants = i1540
  i1530.hasDepthReader = !!i1531[25]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1543 = data
  i1542.val = i1543[0]
  i1542.name = i1543[1]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1545 = data
  i1544.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1545[0], i1544.src)
  i1544.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1545[1], i1544.dst)
  i1544.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1545[2], i1544.op)
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1547 = data
  i1546.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1547[0], i1546.pass)
  i1546.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1547[1], i1546.fail)
  i1546.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1547[2], i1546.zFail)
  i1546.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1547[3], i1546.comp)
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.value = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( i1557[i + 0] );
  }
  i1554.keywords = i1556
  i1554.hasDiscard = !!i1555[1]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1561 = data
  i1560.passId = i1561[0]
  i1560.subShaderIndex = i1561[1]
  var i1563 = i1561[2]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( i1563[i + 0] );
  }
  i1560.keywords = i1562
  i1560.vertexProgram = i1561[3]
  i1560.fragmentProgram = i1561[4]
  i1560.exportedForWebGl2 = !!i1561[5]
  i1560.readDepth = !!i1561[6]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'shader')
  i1566.pass = i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.type = i1571[1]
  i1570.value = new pc.Vec4( i1571[2], i1571[3], i1571[4], i1571[5] )
  i1570.textureValue = i1571[6]
  i1570.shaderPropertyFlag = i1571[7]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1573 = data
  i1572.name = i1573[0]
  request.r(i1573[1], i1573[2], 0, i1572, 'texture')
  i1572.aabb = i1573[3]
  i1572.vertices = i1573[4]
  i1572.triangles = i1573[5]
  i1572.textureRect = UnityEngine.Rect.MinMaxRect(i1573[6], i1573[7], i1573[8], i1573[9])
  i1572.packedRect = UnityEngine.Rect.MinMaxRect(i1573[10], i1573[11], i1573[12], i1573[13])
  i1572.border = new pc.Vec4( i1573[14], i1573[15], i1573[16], i1573[17] )
  i1572.transparency = i1573[18]
  i1572.bounds = i1573[19]
  i1572.pixelsPerUnit = i1573[20]
  i1572.textureWidth = i1573[21]
  i1572.textureHeight = i1573[22]
  i1572.nativeSize = new pc.Vec2( i1573[23], i1573[24] )
  i1572.pivot = new pc.Vec2( i1573[25], i1573[26] )
  i1572.textureRectOffset = new pc.Vec2( i1573[27], i1573[28] )
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1575 = data
  i1574.name = i1575[0]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.ascent = i1577[1]
  i1576.originalLineHeight = i1577[2]
  i1576.fontSize = i1577[3]
  var i1579 = i1577[4]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1579[i + 0]) );
  }
  i1576.characterInfo = i1578
  request.r(i1577[5], i1577[6], 0, i1576, 'texture')
  i1576.originalFontSize = i1577[7]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1583 = data
  i1582.index = i1583[0]
  i1582.advance = i1583[1]
  i1582.bearing = i1583[2]
  i1582.glyphWidth = i1583[3]
  i1582.glyphHeight = i1583[4]
  i1582.minX = i1583[5]
  i1582.maxX = i1583[6]
  i1582.minY = i1583[7]
  i1582.maxY = i1583[8]
  i1582.uvBottomLeftX = i1583[9]
  i1582.uvBottomLeftY = i1583[10]
  i1582.uvBottomRightX = i1583[11]
  i1582.uvBottomRightY = i1583[12]
  i1582.uvTopLeftX = i1583[13]
  i1582.uvTopLeftY = i1583[14]
  i1582.uvTopRightX = i1583[15]
  i1582.uvTopRightY = i1583[16]
  return i1582
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1584 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1585 = data
  i1584.useSafeMode = !!i1585[0]
  i1584.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1585[1], i1584.safeModeOptions)
  i1584.timeScale = i1585[2]
  i1584.unscaledTimeScale = i1585[3]
  i1584.useSmoothDeltaTime = !!i1585[4]
  i1584.maxSmoothUnscaledTime = i1585[5]
  i1584.rewindCallbackMode = i1585[6]
  i1584.showUnityEditorReport = !!i1585[7]
  i1584.logBehaviour = i1585[8]
  i1584.drawGizmos = !!i1585[9]
  i1584.defaultRecyclable = !!i1585[10]
  i1584.defaultAutoPlay = i1585[11]
  i1584.defaultUpdateType = i1585[12]
  i1584.defaultTimeScaleIndependent = !!i1585[13]
  i1584.defaultEaseType = i1585[14]
  i1584.defaultEaseOvershootOrAmplitude = i1585[15]
  i1584.defaultEasePeriod = i1585[16]
  i1584.defaultAutoKill = !!i1585[17]
  i1584.defaultLoopType = i1585[18]
  i1584.debugMode = !!i1585[19]
  i1584.debugStoreTargetId = !!i1585[20]
  i1584.showPreviewPanel = !!i1585[21]
  i1584.storeSettingsLocation = i1585[22]
  i1584.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1585[23], i1584.modules)
  i1584.createASMDEF = !!i1585[24]
  i1584.showPlayingTweens = !!i1585[25]
  i1584.showPausedTweens = !!i1585[26]
  return i1584
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1586 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1587 = data
  i1586.logBehaviour = i1587[0]
  i1586.nestedTweenFailureBehaviour = i1587[1]
  return i1586
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1589 = data
  i1588.showPanel = !!i1589[0]
  i1588.audioEnabled = !!i1589[1]
  i1588.physicsEnabled = !!i1589[2]
  i1588.physics2DEnabled = !!i1589[3]
  i1588.spriteEnabled = !!i1589[4]
  i1588.uiEnabled = !!i1589[5]
  i1588.textMeshProEnabled = !!i1589[6]
  i1588.tk2DEnabled = !!i1589[7]
  i1588.deAudioEnabled = !!i1589[8]
  i1588.deUnityExtendedEnabled = !!i1589[9]
  i1588.epoOutlineEnabled = !!i1589[10]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1593[i + 0]) );
  }
  i1590.files = i1592
  i1590.componentToPrefabIds = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1597 = data
  i1596.path = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'unityObject')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1601[i + 0]) );
  }
  i1598.scriptsExecutionOrder = i1600
  var i1603 = i1599[1]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1603[i + 0]) );
  }
  i1598.sortingLayers = i1602
  var i1605 = i1599[2]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1605[i + 0]) );
  }
  i1598.cullingLayers = i1604
  i1598.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1599[3], i1598.timeSettings)
  i1598.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1599[4], i1598.physicsSettings)
  i1598.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1599[5], i1598.physics2DSettings)
  i1598.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1599[6], i1598.qualitySettings)
  i1598.enableRealtimeShadows = !!i1599[7]
  i1598.enableAutoInstancing = !!i1599[8]
  i1598.enableStaticBatching = !!i1599[9]
  i1598.enableDynamicBatching = !!i1599[10]
  i1598.usePreservativeDynamicBatching = !!i1599[11]
  i1598.lightmapEncodingQuality = i1599[12]
  i1598.desiredColorSpace = i1599[13]
  var i1607 = i1599[14]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( i1607[i + 0] );
  }
  i1598.allTags = i1606
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.value = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1615 = data
  i1614.id = i1615[0]
  i1614.name = i1615[1]
  i1614.value = i1615[2]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1619 = data
  i1618.id = i1619[0]
  i1618.name = i1619[1]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1621 = data
  i1620.fixedDeltaTime = i1621[0]
  i1620.maximumDeltaTime = i1621[1]
  i1620.timeScale = i1621[2]
  i1620.maximumParticleTimestep = i1621[3]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1623 = data
  i1622.gravity = new pc.Vec3( i1623[0], i1623[1], i1623[2] )
  i1622.defaultSolverIterations = i1623[3]
  i1622.bounceThreshold = i1623[4]
  i1622.autoSyncTransforms = !!i1623[5]
  i1622.autoSimulation = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1625[i + 0]) );
  }
  i1622.collisionMatrix = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.layerId = i1629[1]
  i1628.otherLayerId = i1629[2]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'material')
  i1630.gravity = new pc.Vec2( i1631[2], i1631[3] )
  i1630.positionIterations = i1631[4]
  i1630.velocityIterations = i1631[5]
  i1630.velocityThreshold = i1631[6]
  i1630.maxLinearCorrection = i1631[7]
  i1630.maxAngularCorrection = i1631[8]
  i1630.maxTranslationSpeed = i1631[9]
  i1630.maxRotationSpeed = i1631[10]
  i1630.baumgarteScale = i1631[11]
  i1630.baumgarteTOIScale = i1631[12]
  i1630.timeToSleep = i1631[13]
  i1630.linearSleepTolerance = i1631[14]
  i1630.angularSleepTolerance = i1631[15]
  i1630.defaultContactOffset = i1631[16]
  i1630.autoSimulation = !!i1631[17]
  i1630.queriesHitTriggers = !!i1631[18]
  i1630.queriesStartInColliders = !!i1631[19]
  i1630.callbacksOnDisable = !!i1631[20]
  i1630.reuseCollisionCallbacks = !!i1631[21]
  i1630.autoSyncTransforms = !!i1631[22]
  var i1633 = i1631[23]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1633[i + 0]) );
  }
  i1630.collisionMatrix = i1632
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.layerId = i1637[1]
  i1636.otherLayerId = i1637[2]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1639 = data
  var i1641 = i1639[0]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1641[i + 0]) );
  }
  i1638.qualityLevels = i1640
  var i1643 = i1639[1]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( i1643[i + 0] );
  }
  i1638.names = i1642
  i1638.shadows = i1639[2]
  i1638.anisotropicFiltering = i1639[3]
  i1638.antiAliasing = i1639[4]
  i1638.lodBias = i1639[5]
  i1638.shadowCascades = i1639[6]
  i1638.shadowDistance = i1639[7]
  i1638.shadowmaskMode = i1639[8]
  i1638.shadowProjection = i1639[9]
  i1638.shadowResolution = i1639[10]
  i1638.softParticles = !!i1639[11]
  i1638.softVegetation = !!i1639[12]
  i1638.activeColorSpace = i1639[13]
  i1638.desiredColorSpace = i1639[14]
  i1638.masterTextureLimit = i1639[15]
  i1638.maxQueuedFrames = i1639[16]
  i1638.particleRaycastBudget = i1639[17]
  i1638.pixelLightCount = i1639[18]
  i1638.realtimeReflectionProbes = !!i1639[19]
  i1638.shadowCascade2Split = i1639[20]
  i1638.shadowCascade4Split = new pc.Vec3( i1639[21], i1639[22], i1639[23] )
  i1638.streamingMipmapsActive = !!i1639[24]
  i1638.vSyncCount = i1639[25]
  i1638.asyncUploadBufferSize = i1639[26]
  i1638.asyncUploadTimeSlice = i1639[27]
  i1638.billboardsFaceCameraPosition = !!i1639[28]
  i1638.shadowNearPlaneOffset = i1639[29]
  i1638.streamingMipmapsMemoryBudget = i1639[30]
  i1638.maximumLODLevel = i1639[31]
  i1638.streamingMipmapsAddAllCameras = !!i1639[32]
  i1638.streamingMipmapsMaxLevelReduction = i1639[33]
  i1638.streamingMipmapsRenderersPerFrame = i1639[34]
  i1638.resolutionScalingFixedDPIFactor = i1639[35]
  i1638.streamingMipmapsMaxFileIORequests = i1639[36]
  i1638.currentQualityLevel = i1639[37]
  return i1638
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'm_ObjectArgument')
  i1646.m_ObjectArgumentAssemblyTypeName = i1647[2]
  i1646.m_IntArgument = i1647[3]
  i1646.m_FloatArgument = i1647[4]
  i1646.m_StringArgument = i1647[5]
  i1646.m_BoolArgument = !!i1647[6]
  return i1646
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"edgeRadius":0,"points":1,"useAdjacentStartPoint":2,"adjacentStartPoint":3,"useAdjacentEndPoint":5,"adjacentEndPoint":6,"enabled":8,"isTrigger":9,"usedByEffector":10,"density":11,"offset":12,"material":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[5],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"65":[21],"26":[21],"66":[21],"67":[21],"24":[21],"68":[21],"69":[21],"70":[21],"71":[5],"72":[73],"74":[75],"76":[75],"11":[10],"77":[17],"78":[5],"79":[80],"81":[10],"82":[14,10],"83":[73],"84":[14,10],"85":[10],"86":[10],"87":[73,10],"88":[10,14],"89":[90],"91":[90],"92":[90],"93":[10],"94":[10],"13":[11],"32":[14,10],"15":[10],"12":[11],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"103":[10],"16":[14,10],"104":[10],"105":[10],"106":[10],"107":[10],"29":[14,10],"108":[10],"109":[8],"110":[8],"9":[8],"111":[8],"112":[5],"113":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.EdgeCollider2D","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.UI.Button","GameController","UnityEngine.GameObject","TargetController","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/20/2026 09:30:25";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_FPS_V02_AnhPP";

Deserializers.lunaAppID = "43490";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1795";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4177";

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

Deserializers.buildID = "19e528a2-ccf8-4d88-a34c-fa456c8f5a6f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

