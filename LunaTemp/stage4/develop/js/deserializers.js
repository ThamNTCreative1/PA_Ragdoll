var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointSpring' )
  var i1285 = data
  i1284.spring = i1285[0]
  i1284.damper = i1285[1]
  i1284.targetPosition = i1285[2]
  return i1284
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.JointMotor' )
  var i1287 = data
  i1286.m_TargetVelocity = i1287[0]
  i1286.m_Force = i1287[1]
  i1286.m_FreeSpin = i1287[2]
  return i1286
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.JointLimits' )
  var i1289 = data
  i1288.m_Min = i1289[0]
  i1288.m_Max = i1289[1]
  i1288.m_Bounciness = i1289[2]
  i1288.m_BounceMinVelocity = i1289[3]
  i1288.m_ContactDistance = i1289[4]
  i1288.minBounce = i1289[5]
  i1288.maxBounce = i1289[6]
  return i1288
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointDrive' )
  var i1291 = data
  i1290.m_PositionSpring = i1291[0]
  i1290.m_PositionDamper = i1291[1]
  i1290.m_MaximumForce = i1291[2]
  i1290.m_UseAcceleration = i1291[3]
  return i1290
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1293 = data
  i1292.m_Spring = i1293[0]
  i1292.m_Damper = i1293[1]
  return i1292
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1295 = data
  i1294.m_Limit = i1295[0]
  i1294.m_Bounciness = i1295[1]
  i1294.m_ContactDistance = i1295[2]
  return i1294
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1297 = data
  i1296.m_ExtremumSlip = i1297[0]
  i1296.m_ExtremumValue = i1297[1]
  i1296.m_AsymptoteSlip = i1297[2]
  i1296.m_AsymptoteValue = i1297[3]
  i1296.m_Stiffness = i1297[4]
  return i1296
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1299 = data
  i1298.m_LowerAngle = i1299[0]
  i1298.m_UpperAngle = i1299[1]
  return i1298
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1301 = data
  i1300.m_MotorSpeed = i1301[0]
  i1300.m_MaximumMotorTorque = i1301[1]
  return i1300
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1303 = data
  i1302.m_DampingRatio = i1303[0]
  i1302.m_Frequency = i1303[1]
  i1302.m_Angle = i1303[2]
  return i1302
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1305 = data
  i1304.m_LowerTranslation = i1305[0]
  i1304.m_UpperTranslation = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.width = i1307[1]
  i1306.height = i1307[2]
  i1306.mipmapCount = i1307[3]
  i1306.anisoLevel = i1307[4]
  i1306.filterMode = i1307[5]
  i1306.hdr = !!i1307[6]
  i1306.format = i1307[7]
  i1306.wrapMode = i1307[8]
  i1306.alphaIsTransparency = !!i1307[9]
  i1306.alphaSource = i1307[10]
  i1306.graphicsFormat = i1307[11]
  i1306.sRGBTexture = !!i1307[12]
  i1306.desiredColorSpace = i1307[13]
  i1306.wrapU = i1307[14]
  i1306.wrapV = i1307[15]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1308 = root || new pc.UnityMaterial()
  var i1309 = data
  i1308.name = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'shader')
  i1308.renderQueue = i1309[3]
  i1308.enableInstancing = !!i1309[4]
  var i1311 = i1309[5]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1311[i + 0]) );
  }
  i1308.floatParameters = i1310
  var i1313 = i1309[6]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1313[i + 0]) );
  }
  i1308.colorParameters = i1312
  var i1315 = i1309[7]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1315[i + 0]) );
  }
  i1308.vectorParameters = i1314
  var i1317 = i1309[8]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1317[i + 0]) );
  }
  i1308.textureParameters = i1316
  var i1319 = i1309[9]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1319[i + 0]) );
  }
  i1308.materialFlags = i1318
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.value = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = new pc.Color(i1327[1], i1327[2], i1327[3], i1327[4])
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Vec4( i1331[1], i1331[2], i1331[3], i1331[4] )
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'value')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.enabled = !!i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1341 = data
  i1340.position = new pc.Vec3( i1341[0], i1341[1], i1341[2] )
  i1340.scale = new pc.Vec3( i1341[3], i1341[4], i1341[5] )
  i1340.rotation = new pc.Quat(i1341[6], i1341[7], i1341[8], i1341[9])
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1343 = data
  i1342.color = new pc.Color(i1343[0], i1343[1], i1343[2], i1343[3])
  request.r(i1343[4], i1343[5], 0, i1342, 'sprite')
  i1342.flipX = !!i1343[6]
  i1342.flipY = !!i1343[7]
  i1342.drawMode = i1343[8]
  i1342.size = new pc.Vec2( i1343[9], i1343[10] )
  i1342.tileMode = i1343[11]
  i1342.adaptiveModeThreshold = i1343[12]
  i1342.maskInteraction = i1343[13]
  i1342.spriteSortPoint = i1343[14]
  i1342.enabled = !!i1343[15]
  request.r(i1343[16], i1343[17], 0, i1342, 'sharedMaterial')
  var i1345 = i1343[18]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 2, i1344, '')
  }
  i1342.sharedMaterials = i1344
  i1342.receiveShadows = !!i1343[19]
  i1342.shadowCastingMode = i1343[20]
  i1342.sortingLayerID = i1343[21]
  i1342.sortingOrder = i1343[22]
  i1342.lightmapIndex = i1343[23]
  i1342.lightmapSceneIndex = i1343[24]
  i1342.lightmapScaleOffset = new pc.Vec4( i1343[25], i1343[26], i1343[27], i1343[28] )
  i1342.lightProbeUsage = i1343[29]
  i1342.reflectionProbeUsage = i1343[30]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1349 = data
  i1348.radius = i1349[0]
  i1348.enabled = !!i1349[1]
  i1348.isTrigger = !!i1349[2]
  i1348.usedByEffector = !!i1349[3]
  i1348.density = i1349[4]
  i1348.offset = new pc.Vec2( i1349[5], i1349[6] )
  request.r(i1349[7], i1349[8], 0, i1348, 'material')
  return i1348
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1350 = root || request.c( 'BulletController' )
  var i1351 = data
  i1350.speed = i1351[0]
  i1350.damage = i1351[1]
  request.r(i1351[2], i1351[3], 0, i1350, 'hitMonsterSound')
  request.r(i1351[4], i1351[5], 0, i1350, 'hitSound')
  i1350.lifeTime = i1351[6]
  i1350.hit = !!i1351[7]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.tagId = i1353[1]
  i1352.enabled = !!i1353[2]
  i1352.isStatic = !!i1353[3]
  i1352.layer = i1353[4]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1355 = data
  i1354.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1355[0], i1354.main)
  i1354.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1355[1], i1354.colorBySpeed)
  i1354.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1355[2], i1354.colorOverLifetime)
  i1354.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1355[3], i1354.emission)
  i1354.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1355[4], i1354.rotationBySpeed)
  i1354.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1355[5], i1354.rotationOverLifetime)
  i1354.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1355[6], i1354.shape)
  i1354.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1355[7], i1354.sizeBySpeed)
  i1354.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1355[8], i1354.sizeOverLifetime)
  i1354.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1355[9], i1354.textureSheetAnimation)
  i1354.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1355[10], i1354.velocityOverLifetime)
  i1354.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1355[11], i1354.noise)
  i1354.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1355[12], i1354.inheritVelocity)
  i1354.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1355[13], i1354.forceOverLifetime)
  i1354.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1355[14], i1354.limitVelocityOverLifetime)
  i1354.useAutoRandomSeed = !!i1355[15]
  i1354.randomSeed = i1355[16]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1356 = root || new pc.ParticleSystemMain()
  var i1357 = data
  i1356.duration = i1357[0]
  i1356.loop = !!i1357[1]
  i1356.prewarm = !!i1357[2]
  i1356.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[3], i1356.startDelay)
  i1356.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[4], i1356.startLifetime)
  i1356.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[5], i1356.startSpeed)
  i1356.startSize3D = !!i1357[6]
  i1356.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[7], i1356.startSizeX)
  i1356.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[8], i1356.startSizeY)
  i1356.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[9], i1356.startSizeZ)
  i1356.startRotation3D = !!i1357[10]
  i1356.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[11], i1356.startRotationX)
  i1356.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[12], i1356.startRotationY)
  i1356.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[13], i1356.startRotationZ)
  i1356.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1357[14], i1356.startColor)
  i1356.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1357[15], i1356.gravityModifier)
  i1356.simulationSpace = i1357[16]
  request.r(i1357[17], i1357[18], 0, i1356, 'customSimulationSpace')
  i1356.simulationSpeed = i1357[19]
  i1356.useUnscaledTime = !!i1357[20]
  i1356.scalingMode = i1357[21]
  i1356.playOnAwake = !!i1357[22]
  i1356.maxParticles = i1357[23]
  i1356.emitterVelocityMode = i1357[24]
  i1356.stopAction = i1357[25]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1358 = root || new pc.MinMaxCurve()
  var i1359 = data
  i1358.mode = i1359[0]
  i1358.curveMin = new pc.AnimationCurve( { keys_flow: i1359[1] } )
  i1358.curveMax = new pc.AnimationCurve( { keys_flow: i1359[2] } )
  i1358.curveMultiplier = i1359[3]
  i1358.constantMin = i1359[4]
  i1358.constantMax = i1359[5]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1360 = root || new pc.MinMaxGradient()
  var i1361 = data
  i1360.mode = i1361[0]
  i1360.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1361[1], i1360.gradientMin)
  i1360.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1361[2], i1360.gradientMax)
  i1360.colorMin = new pc.Color(i1361[3], i1361[4], i1361[5], i1361[6])
  i1360.colorMax = new pc.Color(i1361[7], i1361[8], i1361[9], i1361[10])
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1363 = data
  i1362.mode = i1363[0]
  var i1365 = i1363[1]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1365[i + 0]) );
  }
  i1362.colorKeys = i1364
  var i1367 = i1363[2]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1367[i + 0]) );
  }
  i1362.alphaKeys = i1366
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1368 = root || new pc.ParticleSystemColorBySpeed()
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1369[1], i1368.color)
  i1368.range = new pc.Vec2( i1369[2], i1369[3] )
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1373 = data
  i1372.color = new pc.Color(i1373[0], i1373[1], i1373[2], i1373[3])
  i1372.time = i1373[4]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1377 = data
  i1376.alpha = i1377[0]
  i1376.time = i1377[1]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1378 = root || new pc.ParticleSystemColorOverLifetime()
  var i1379 = data
  i1378.enabled = !!i1379[0]
  i1378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1379[1], i1378.color)
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1380 = root || new pc.ParticleSystemEmitter()
  var i1381 = data
  i1380.enabled = !!i1381[0]
  i1380.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[1], i1380.rateOverTime)
  i1380.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[2], i1380.rateOverDistance)
  var i1383 = i1381[3]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1383[i + 0]) );
  }
  i1380.bursts = i1382
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1386 = root || new pc.ParticleSystemBurst()
  var i1387 = data
  i1386.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1387[0], i1386.count)
  i1386.cycleCount = i1387[1]
  i1386.minCount = i1387[2]
  i1386.maxCount = i1387[3]
  i1386.repeatInterval = i1387[4]
  i1386.time = i1387[5]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1388 = root || new pc.ParticleSystemRotationBySpeed()
  var i1389 = data
  i1388.enabled = !!i1389[0]
  i1388.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1389[1], i1388.x)
  i1388.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1389[2], i1388.y)
  i1388.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1389[3], i1388.z)
  i1388.separateAxes = !!i1389[4]
  i1388.range = new pc.Vec2( i1389[5], i1389[6] )
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1390 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1391 = data
  i1390.enabled = !!i1391[0]
  i1390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[1], i1390.x)
  i1390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[2], i1390.y)
  i1390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1391[3], i1390.z)
  i1390.separateAxes = !!i1391[4]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1392 = root || new pc.ParticleSystemShape()
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.shapeType = i1393[1]
  i1392.randomDirectionAmount = i1393[2]
  i1392.sphericalDirectionAmount = i1393[3]
  i1392.randomPositionAmount = i1393[4]
  i1392.alignToDirection = !!i1393[5]
  i1392.radius = i1393[6]
  i1392.radiusMode = i1393[7]
  i1392.radiusSpread = i1393[8]
  i1392.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[9], i1392.radiusSpeed)
  i1392.radiusThickness = i1393[10]
  i1392.angle = i1393[11]
  i1392.length = i1393[12]
  i1392.boxThickness = new pc.Vec3( i1393[13], i1393[14], i1393[15] )
  i1392.meshShapeType = i1393[16]
  request.r(i1393[17], i1393[18], 0, i1392, 'mesh')
  request.r(i1393[19], i1393[20], 0, i1392, 'meshRenderer')
  request.r(i1393[21], i1393[22], 0, i1392, 'skinnedMeshRenderer')
  i1392.useMeshMaterialIndex = !!i1393[23]
  i1392.meshMaterialIndex = i1393[24]
  i1392.useMeshColors = !!i1393[25]
  i1392.normalOffset = i1393[26]
  i1392.arc = i1393[27]
  i1392.arcMode = i1393[28]
  i1392.arcSpread = i1393[29]
  i1392.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[30], i1392.arcSpeed)
  i1392.donutRadius = i1393[31]
  i1392.position = new pc.Vec3( i1393[32], i1393[33], i1393[34] )
  i1392.rotation = new pc.Vec3( i1393[35], i1393[36], i1393[37] )
  i1392.scale = new pc.Vec3( i1393[38], i1393[39], i1393[40] )
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1394 = root || new pc.ParticleSystemSizeBySpeed()
  var i1395 = data
  i1394.enabled = !!i1395[0]
  i1394.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1395[1], i1394.x)
  i1394.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1395[2], i1394.y)
  i1394.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1395[3], i1394.z)
  i1394.separateAxes = !!i1395[4]
  i1394.range = new pc.Vec2( i1395[5], i1395[6] )
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1396 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[1], i1396.x)
  i1396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[2], i1396.y)
  i1396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[3], i1396.z)
  i1396.separateAxes = !!i1397[4]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1398 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1399 = data
  i1398.enabled = !!i1399[0]
  i1398.mode = i1399[1]
  i1398.animation = i1399[2]
  i1398.numTilesX = i1399[3]
  i1398.numTilesY = i1399[4]
  i1398.useRandomRow = !!i1399[5]
  i1398.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[6], i1398.frameOverTime)
  i1398.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1399[7], i1398.startFrame)
  i1398.cycleCount = i1399[8]
  i1398.rowIndex = i1399[9]
  i1398.flipU = i1399[10]
  i1398.flipV = i1399[11]
  i1398.spriteCount = i1399[12]
  var i1401 = i1399[13]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 2) {
  request.r(i1401[i + 0], i1401[i + 1], 2, i1400, '')
  }
  i1398.sprites = i1400
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1404 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[1], i1404.x)
  i1404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[2], i1404.y)
  i1404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[3], i1404.z)
  i1404.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[4], i1404.radial)
  i1404.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[5], i1404.speedModifier)
  i1404.space = i1405[6]
  i1404.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[7], i1404.orbitalX)
  i1404.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[8], i1404.orbitalY)
  i1404.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[9], i1404.orbitalZ)
  i1404.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[10], i1404.orbitalOffsetX)
  i1404.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[11], i1404.orbitalOffsetY)
  i1404.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[12], i1404.orbitalOffsetZ)
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1406 = root || new pc.ParticleSystemNoise()
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.separateAxes = !!i1407[1]
  i1406.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[2], i1406.strengthX)
  i1406.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[3], i1406.strengthY)
  i1406.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[4], i1406.strengthZ)
  i1406.frequency = i1407[5]
  i1406.damping = !!i1407[6]
  i1406.octaveCount = i1407[7]
  i1406.octaveMultiplier = i1407[8]
  i1406.octaveScale = i1407[9]
  i1406.quality = i1407[10]
  i1406.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[11], i1406.scrollSpeed)
  i1406.scrollSpeedMultiplier = i1407[12]
  i1406.remapEnabled = !!i1407[13]
  i1406.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[14], i1406.remapX)
  i1406.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[15], i1406.remapY)
  i1406.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[16], i1406.remapZ)
  i1406.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[17], i1406.positionAmount)
  i1406.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[18], i1406.rotationAmount)
  i1406.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1407[19], i1406.sizeAmount)
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1408 = root || new pc.ParticleSystemInheritVelocity()
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.mode = i1409[1]
  i1408.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1409[2], i1408.curve)
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1410 = root || new pc.ParticleSystemForceOverLifetime()
  var i1411 = data
  i1410.enabled = !!i1411[0]
  i1410.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[1], i1410.x)
  i1410.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[2], i1410.y)
  i1410.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[3], i1410.z)
  i1410.space = i1411[4]
  i1410.randomized = !!i1411[5]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1412 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[1], i1412.limit)
  i1412.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[2], i1412.limitX)
  i1412.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[3], i1412.limitY)
  i1412.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[4], i1412.limitZ)
  i1412.dampen = i1413[5]
  i1412.separateAxes = !!i1413[6]
  i1412.space = i1413[7]
  i1412.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[8], i1412.drag)
  i1412.multiplyDragByParticleSize = !!i1413[9]
  i1412.multiplyDragByParticleVelocity = !!i1413[10]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'mesh')
  i1414.meshCount = i1415[2]
  i1414.activeVertexStreamsCount = i1415[3]
  i1414.alignment = i1415[4]
  i1414.renderMode = i1415[5]
  i1414.sortMode = i1415[6]
  i1414.lengthScale = i1415[7]
  i1414.velocityScale = i1415[8]
  i1414.cameraVelocityScale = i1415[9]
  i1414.normalDirection = i1415[10]
  i1414.sortingFudge = i1415[11]
  i1414.minParticleSize = i1415[12]
  i1414.maxParticleSize = i1415[13]
  i1414.pivot = new pc.Vec3( i1415[14], i1415[15], i1415[16] )
  request.r(i1415[17], i1415[18], 0, i1414, 'trailMaterial')
  i1414.applyActiveColorSpace = !!i1415[19]
  i1414.enabled = !!i1415[20]
  request.r(i1415[21], i1415[22], 0, i1414, 'sharedMaterial')
  var i1417 = i1415[23]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 2, i1416, '')
  }
  i1414.sharedMaterials = i1416
  i1414.receiveShadows = !!i1415[24]
  i1414.shadowCastingMode = i1415[25]
  i1414.sortingLayerID = i1415[26]
  i1414.sortingOrder = i1415[27]
  i1414.lightmapIndex = i1415[28]
  i1414.lightmapSceneIndex = i1415[29]
  i1414.lightmapScaleOffset = new pc.Vec4( i1415[30], i1415[31], i1415[32], i1415[33] )
  i1414.lightProbeUsage = i1415[34]
  i1414.reflectionProbeUsage = i1415[35]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.index = i1419[1]
  i1418.startup = !!i1419[2]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1421 = data
  i1420.aspect = i1421[0]
  i1420.orthographic = !!i1421[1]
  i1420.orthographicSize = i1421[2]
  i1420.backgroundColor = new pc.Color(i1421[3], i1421[4], i1421[5], i1421[6])
  i1420.nearClipPlane = i1421[7]
  i1420.farClipPlane = i1421[8]
  i1420.fieldOfView = i1421[9]
  i1420.depth = i1421[10]
  i1420.clearFlags = i1421[11]
  i1420.cullingMask = i1421[12]
  i1420.rect = i1421[13]
  request.r(i1421[14], i1421[15], 0, i1420, 'targetTexture')
  i1420.usePhysicalProperties = !!i1421[16]
  i1420.focalLength = i1421[17]
  i1420.sensorSize = new pc.Vec2( i1421[18], i1421[19] )
  i1420.lensShift = new pc.Vec2( i1421[20], i1421[21] )
  i1420.gateFit = i1421[22]
  i1420.commandBufferCount = i1421[23]
  i1420.cameraType = i1421[24]
  i1420.enabled = !!i1421[25]
  return i1420
}

Deserializers["ShakeCamera"] = function (request, data, root) {
  var i1422 = root || request.c( 'ShakeCamera' )
  var i1423 = data
  i1422.defaultDuration = i1423[0]
  i1422.defaultStrength = i1423[1]
  i1422.frequency = i1423[2]
  return i1422
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'm_FirstSelected')
  i1424.m_sendNavigationEvents = !!i1425[2]
  i1424.m_DragThreshold = i1425[3]
  return i1424
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1427 = data
  i1426.m_HorizontalAxis = i1427[0]
  i1426.m_VerticalAxis = i1427[1]
  i1426.m_SubmitButton = i1427[2]
  i1426.m_CancelButton = i1427[3]
  i1426.m_InputActionsPerSecond = i1427[4]
  i1426.m_RepeatDelay = i1427[5]
  i1426.m_ForceModuleActive = !!i1427[6]
  i1426.m_SendPointerHoverToParent = !!i1427[7]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1429 = data
  i1428.pivot = new pc.Vec2( i1429[0], i1429[1] )
  i1428.anchorMin = new pc.Vec2( i1429[2], i1429[3] )
  i1428.anchorMax = new pc.Vec2( i1429[4], i1429[5] )
  i1428.sizeDelta = new pc.Vec2( i1429[6], i1429[7] )
  i1428.anchoredPosition3D = new pc.Vec3( i1429[8], i1429[9], i1429[10] )
  i1428.rotation = new pc.Quat(i1429[11], i1429[12], i1429[13], i1429[14])
  i1428.scale = new pc.Vec3( i1429[15], i1429[16], i1429[17] )
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1431 = data
  i1430.planeDistance = i1431[0]
  i1430.referencePixelsPerUnit = i1431[1]
  i1430.isFallbackOverlay = !!i1431[2]
  i1430.renderMode = i1431[3]
  i1430.renderOrder = i1431[4]
  i1430.sortingLayerName = i1431[5]
  i1430.sortingOrder = i1431[6]
  i1430.scaleFactor = i1431[7]
  request.r(i1431[8], i1431[9], 0, i1430, 'worldCamera')
  i1430.overrideSorting = !!i1431[10]
  i1430.pixelPerfect = !!i1431[11]
  i1430.targetDisplay = i1431[12]
  i1430.overridePixelPerfect = !!i1431[13]
  i1430.enabled = !!i1431[14]
  return i1430
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1433 = data
  i1432.m_UiScaleMode = i1433[0]
  i1432.m_ReferencePixelsPerUnit = i1433[1]
  i1432.m_ScaleFactor = i1433[2]
  i1432.m_ReferenceResolution = new pc.Vec2( i1433[3], i1433[4] )
  i1432.m_ScreenMatchMode = i1433[5]
  i1432.m_MatchWidthOrHeight = i1433[6]
  i1432.m_PhysicalUnit = i1433[7]
  i1432.m_FallbackScreenDPI = i1433[8]
  i1432.m_DefaultSpriteDPI = i1433[9]
  i1432.m_DynamicPixelsPerUnit = i1433[10]
  i1432.m_PresetInfoIsWorld = !!i1433[11]
  return i1432
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1435 = data
  i1434.m_IgnoreReversedGraphics = !!i1435[0]
  i1434.m_BlockingObjects = i1435[1]
  i1434.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1435[2] )
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1437 = data
  i1436.cullTransparentMesh = !!i1437[0]
  return i1436
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'm_Texture')
  i1438.m_UVRect = UnityEngine.Rect.MinMaxRect(i1439[2], i1439[3], i1439[4], i1439[5])
  request.r(i1439[6], i1439[7], 0, i1438, 'm_Material')
  i1438.m_Maskable = !!i1439[8]
  i1438.m_Color = new pc.Color(i1439[9], i1439[10], i1439[11], i1439[12])
  i1438.m_RaycastTarget = !!i1439[13]
  i1438.m_RaycastPadding = new pc.Vec4( i1439[14], i1439[15], i1439[16], i1439[17] )
  return i1438
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1441 = data
  i1440.m_AspectMode = i1441[0]
  i1440.m_AspectRatio = i1441[1]
  return i1440
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.UI.Text' )
  var i1443 = data
  i1442.m_FontData = request.d('UnityEngine.UI.FontData', i1443[0], i1442.m_FontData)
  i1442.m_Text = i1443[1]
  request.r(i1443[2], i1443[3], 0, i1442, 'm_Material')
  i1442.m_Maskable = !!i1443[4]
  i1442.m_Color = new pc.Color(i1443[5], i1443[6], i1443[7], i1443[8])
  i1442.m_RaycastTarget = !!i1443[9]
  i1442.m_RaycastPadding = new pc.Vec4( i1443[10], i1443[11], i1443[12], i1443[13] )
  return i1442
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1445 = data
  request.r(i1445[0], i1445[1], 0, i1444, 'm_Font')
  i1444.m_FontSize = i1445[2]
  i1444.m_FontStyle = i1445[3]
  i1444.m_BestFit = !!i1445[4]
  i1444.m_MinSize = i1445[5]
  i1444.m_MaxSize = i1445[6]
  i1444.m_Alignment = i1445[7]
  i1444.m_AlignByGeometry = !!i1445[8]
  i1444.m_RichText = !!i1445[9]
  i1444.m_HorizontalOverflow = i1445[10]
  i1444.m_VerticalOverflow = i1445[11]
  i1444.m_LineSpacing = i1445[12]
  return i1444
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1446 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1447 = data
  i1446.targetIsSelf = !!i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'targetGO')
  i1446.tweenTargetIsTargetGO = !!i1447[3]
  i1446.delay = i1447[4]
  i1446.duration = i1447[5]
  i1446.easeType = i1447[6]
  i1446.easeCurve = new pc.AnimationCurve( { keys_flow: i1447[7] } )
  i1446.loopType = i1447[8]
  i1446.loops = i1447[9]
  i1446.id = i1447[10]
  i1446.isRelative = !!i1447[11]
  i1446.isFrom = !!i1447[12]
  i1446.isIndependentUpdate = !!i1447[13]
  i1446.autoKill = !!i1447[14]
  i1446.autoGenerate = !!i1447[15]
  i1446.isActive = !!i1447[16]
  i1446.isValid = !!i1447[17]
  request.r(i1447[18], i1447[19], 0, i1446, 'target')
  i1446.animationType = i1447[20]
  i1446.targetType = i1447[21]
  i1446.forcedTargetType = i1447[22]
  i1446.autoPlay = !!i1447[23]
  i1446.useTargetAsV3 = !!i1447[24]
  i1446.endValueFloat = i1447[25]
  i1446.endValueV3 = new pc.Vec3( i1447[26], i1447[27], i1447[28] )
  i1446.endValueV2 = new pc.Vec2( i1447[29], i1447[30] )
  i1446.endValueColor = new pc.Color(i1447[31], i1447[32], i1447[33], i1447[34])
  i1446.endValueString = i1447[35]
  i1446.endValueRect = UnityEngine.Rect.MinMaxRect(i1447[36], i1447[37], i1447[38], i1447[39])
  request.r(i1447[40], i1447[41], 0, i1446, 'endValueTransform')
  i1446.optionalBool0 = !!i1447[42]
  i1446.optionalBool1 = !!i1447[43]
  i1446.optionalFloat0 = i1447[44]
  i1446.optionalInt0 = i1447[45]
  i1446.optionalRotationMode = i1447[46]
  i1446.optionalScrambleMode = i1447[47]
  i1446.optionalShakeRandomnessMode = i1447[48]
  i1446.optionalString = i1447[49]
  i1446.updateType = i1447[50]
  i1446.isSpeedBased = !!i1447[51]
  i1446.hasOnStart = !!i1447[52]
  i1446.hasOnPlay = !!i1447[53]
  i1446.hasOnUpdate = !!i1447[54]
  i1446.hasOnStepComplete = !!i1447[55]
  i1446.hasOnComplete = !!i1447[56]
  i1446.hasOnTweenCreated = !!i1447[57]
  i1446.hasOnRewind = !!i1447[58]
  i1446.onStart = request.d('UnityEngine.Events.UnityEvent', i1447[59], i1446.onStart)
  i1446.onPlay = request.d('UnityEngine.Events.UnityEvent', i1447[60], i1446.onPlay)
  i1446.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1447[61], i1446.onUpdate)
  i1446.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1447[62], i1446.onStepComplete)
  i1446.onComplete = request.d('UnityEngine.Events.UnityEvent', i1447[63], i1446.onComplete)
  i1446.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1447[64], i1446.onTweenCreated)
  i1446.onRewind = request.d('UnityEngine.Events.UnityEvent', i1447[65], i1446.onRewind)
  return i1446
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1449 = data
  i1448.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1449[0], i1448.m_PersistentCalls)
  return i1448
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1451 = data
  var i1453 = i1451[0]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.add(request.d('UnityEngine.Events.PersistentCall', i1453[i + 0]));
  }
  i1450.m_Calls = i1452
  return i1450
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1457 = data
  request.r(i1457[0], i1457[1], 0, i1456, 'm_Target')
  i1456.m_TargetAssemblyTypeName = i1457[2]
  i1456.m_MethodName = i1457[3]
  i1456.m_Mode = i1457[4]
  i1456.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1457[5], i1456.m_Arguments)
  i1456.m_CallState = i1457[6]
  return i1456
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.UI.Image' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'm_Sprite')
  i1458.m_Type = i1459[2]
  i1458.m_PreserveAspect = !!i1459[3]
  i1458.m_FillCenter = !!i1459[4]
  i1458.m_FillMethod = i1459[5]
  i1458.m_FillAmount = i1459[6]
  i1458.m_FillClockwise = !!i1459[7]
  i1458.m_FillOrigin = i1459[8]
  i1458.m_UseSpriteMesh = !!i1459[9]
  i1458.m_PixelsPerUnitMultiplier = i1459[10]
  request.r(i1459[11], i1459[12], 0, i1458, 'm_Material')
  i1458.m_Maskable = !!i1459[13]
  i1458.m_Color = new pc.Color(i1459[14], i1459[15], i1459[16], i1459[17])
  i1458.m_RaycastTarget = !!i1459[18]
  i1458.m_RaycastPadding = new pc.Vec4( i1459[19], i1459[20], i1459[21], i1459[22] )
  return i1458
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.UI.Button' )
  var i1461 = data
  i1460.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1461[0], i1460.m_OnClick)
  i1460.m_Navigation = request.d('UnityEngine.UI.Navigation', i1461[1], i1460.m_Navigation)
  i1460.m_Transition = i1461[2]
  i1460.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1461[3], i1460.m_Colors)
  i1460.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1461[4], i1460.m_SpriteState)
  i1460.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1461[5], i1460.m_AnimationTriggers)
  i1460.m_Interactable = !!i1461[6]
  request.r(i1461[7], i1461[8], 0, i1460, 'm_TargetGraphic')
  return i1460
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1463 = data
  i1462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1463[0], i1462.m_PersistentCalls)
  return i1462
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1465 = data
  i1464.m_Mode = i1465[0]
  i1464.m_WrapAround = !!i1465[1]
  request.r(i1465[2], i1465[3], 0, i1464, 'm_SelectOnUp')
  request.r(i1465[4], i1465[5], 0, i1464, 'm_SelectOnDown')
  request.r(i1465[6], i1465[7], 0, i1464, 'm_SelectOnLeft')
  request.r(i1465[8], i1465[9], 0, i1464, 'm_SelectOnRight')
  return i1464
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1467 = data
  i1466.m_NormalColor = new pc.Color(i1467[0], i1467[1], i1467[2], i1467[3])
  i1466.m_HighlightedColor = new pc.Color(i1467[4], i1467[5], i1467[6], i1467[7])
  i1466.m_PressedColor = new pc.Color(i1467[8], i1467[9], i1467[10], i1467[11])
  i1466.m_SelectedColor = new pc.Color(i1467[12], i1467[13], i1467[14], i1467[15])
  i1466.m_DisabledColor = new pc.Color(i1467[16], i1467[17], i1467[18], i1467[19])
  i1466.m_ColorMultiplier = i1467[20]
  i1466.m_FadeDuration = i1467[21]
  return i1466
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1469 = data
  request.r(i1469[0], i1469[1], 0, i1468, 'm_HighlightedSprite')
  request.r(i1469[2], i1469[3], 0, i1468, 'm_PressedSprite')
  request.r(i1469[4], i1469[5], 0, i1468, 'm_SelectedSprite')
  request.r(i1469[6], i1469[7], 0, i1468, 'm_DisabledSprite')
  return i1468
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1471 = data
  i1470.m_NormalTrigger = i1471[0]
  i1470.m_HighlightedTrigger = i1471[1]
  i1470.m_PressedTrigger = i1471[2]
  i1470.m_SelectedTrigger = i1471[3]
  i1470.m_DisabledTrigger = i1471[4]
  return i1470
}

Deserializers["TutController"] = function (request, data, root) {
  var i1472 = root || request.c( 'TutController' )
  var i1473 = data
  var i1475 = i1473[0]
  var i1474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1475.length; i += 2) {
    i1474.add(new pc.Vec2( i1475[i + 0], i1475[i + 1] ));
  }
  i1472.movePos = i1474
  i1472.moveTime = i1473[1]
  i1472.fromScale = i1473[2]
  i1472.toScale = i1473[3]
  i1472.scaleTime = i1473[4]
  i1472.delayTime = i1473[5]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'clip')
  request.r(i1479[2], i1479[3], 0, i1478, 'outputAudioMixerGroup')
  i1478.playOnAwake = !!i1479[4]
  i1478.loop = !!i1479[5]
  i1478.time = i1479[6]
  i1478.volume = i1479[7]
  i1478.pitch = i1479[8]
  i1478.enabled = !!i1479[9]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1481 = data
  i1480.usedByComposite = !!i1481[0]
  i1480.autoTiling = !!i1481[1]
  i1480.size = new pc.Vec2( i1481[2], i1481[3] )
  i1480.edgeRadius = i1481[4]
  i1480.enabled = !!i1481[5]
  i1480.isTrigger = !!i1481[6]
  i1480.usedByEffector = !!i1481[7]
  i1480.density = i1481[8]
  i1480.offset = new pc.Vec2( i1481[9], i1481[10] )
  request.r(i1481[11], i1481[12], 0, i1480, 'material')
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1483 = data
  i1482.bodyType = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'material')
  i1482.simulated = !!i1483[3]
  i1482.useAutoMass = !!i1483[4]
  i1482.mass = i1483[5]
  i1482.drag = i1483[6]
  i1482.angularDrag = i1483[7]
  i1482.gravityScale = i1483[8]
  i1482.collisionDetectionMode = i1483[9]
  i1482.sleepMode = i1483[10]
  i1482.constraints = i1483[11]
  return i1482
}

Deserializers["CountDownBomb"] = function (request, data, root) {
  var i1484 = root || request.c( 'CountDownBomb' )
  var i1485 = data
  i1484.delay = i1485[0]
  i1484.layer = UnityEngine.LayerMask.FromIntegerValue( i1485[1] )
  request.r(i1485[2], i1485[3], 0, i1484, 'avatar')
  request.r(i1485[4], i1485[5], 0, i1484, 'startSound')
  request.r(i1485[6], i1485[7], 0, i1484, 'actionSound')
  request.r(i1485[8], i1485[9], 0, i1484, 'boomVFX')
  i1484.shakeDuration = i1485[10]
  i1484.shakeStrength = i1485[11]
  i1484.timeDestroy = i1485[12]
  i1484.damage = i1485[13]
  i1484.radius = i1485[14]
  var i1487 = i1485[15]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.add(request.d('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i1487[i + 0]));
  }
  i1484.actionEvents = i1486
  return i1484
}

Deserializers["UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i1490 = root || new (UnityEngine.Events.UnityEvent$2( Bridge.ns( 'System.Single' ),Bridge.ns( 'System.Single' ) ))
  var i1491 = data
  i1490.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1491[0], i1490.m_PersistentCalls)
  return i1490
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'm_ObjectArgument')
  i1492.m_ObjectArgumentAssemblyTypeName = i1493[2]
  i1492.m_IntArgument = i1493[3]
  i1492.m_FloatArgument = i1493[4]
  i1492.m_StringArgument = i1493[5]
  i1492.m_BoolArgument = !!i1493[6]
  return i1492
}

Deserializers["CollisionBomb"] = function (request, data, root) {
  var i1494 = root || request.c( 'CollisionBomb' )
  var i1495 = data
  i1494.layer = UnityEngine.LayerMask.FromIntegerValue( i1495[0] )
  request.r(i1495[1], i1495[2], 0, i1494, 'avatar')
  request.r(i1495[3], i1495[4], 0, i1494, 'startSound')
  request.r(i1495[5], i1495[6], 0, i1494, 'actionSound')
  request.r(i1495[7], i1495[8], 0, i1494, 'boomVFX')
  i1494.shakeDuration = i1495[9]
  i1494.shakeStrength = i1495[10]
  i1494.timeDestroy = i1495[11]
  i1494.damage = i1495[12]
  i1494.radius = i1495[13]
  var i1497 = i1495[14]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i1497[i + 0]));
  }
  i1494.actionEvents = i1496
  return i1494
}

Deserializers["TriggerMonster"] = function (request, data, root) {
  var i1498 = root || request.c( 'TriggerMonster' )
  var i1499 = data
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1501 = data
  i1500.sortingLayerIndex = i1501[0]
  i1500.sortingOrder = i1501[1]
  i1500.sortingLayerName = i1501[2]
  i1500.enabled = !!i1501[3]
  return i1500
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1502 = root || request.c( 'PlayerController' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('Piece', i1505[i + 0]));
  }
  i1502.pieces = i1504
  request.r(i1503[1], i1503[2], 0, i1502, 'head')
  request.r(i1503[3], i1503[4], 0, i1502, 'deadSFX')
  i1502.maxForce = new pc.Vec2( i1503[5], i1503[6] )
  i1502.minForce = new pc.Vec2( i1503[7], i1503[8] )
  var i1507 = i1503[9]
  var i1506 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.add(request.d('FightOption', i1507[i + 0]));
  }
  i1502.fightOptions = i1506
  i1502.fight = request.d('FightOption', i1503[10], i1502.fight)
  request.r(i1503[11], i1503[12], 0, i1502, 'clickSound')
  request.r(i1503[13], i1503[14], 0, i1502, 'deadVFX')
  var i1509 = i1503[15]
  var i1508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1509.length; i += 2) {
  request.r(i1509[i + 0], i1509[i + 1], 1, i1508, '')
  }
  i1502.renderers = i1508
  var i1511 = i1503[16]
  var i1510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 1, i1510, '')
  }
  i1502.sprites = i1510
  i1502.isZombie = !!i1503[17]
  return i1502
}

Deserializers["Piece"] = function (request, data, root) {
  var i1514 = root || request.c( 'Piece' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'Joint')
  request.r(i1515[2], i1515[3], 0, i1514, 'Rb')
  return i1514
}

Deserializers["FightOption"] = function (request, data, root) {
  var i1518 = root || request.c( 'FightOption' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'Button')
  request.r(i1519[2], i1519[3], 0, i1518, 'Controller')
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1525 = data
  i1524.useLimits = !!i1525[0]
  i1524.limits = request.d('UnityEngine.JointAngleLimits2D', i1525[1], i1524.limits)
  i1524.useMotor = !!i1525[2]
  i1524.motor = request.d('UnityEngine.JointMotor2D', i1525[3], i1524.motor)
  i1524.anchor = new pc.Vec2( i1525[4], i1525[5] )
  i1524.connectedAnchor = new pc.Vec2( i1525[6], i1525[7] )
  i1524.autoConfigureConnectedAnchor = !!i1525[8]
  request.r(i1525[9], i1525[10], 0, i1524, 'connectedBody')
  i1524.breakForce = i1525[11]
  i1524.breakTorque = i1525[12]
  i1524.enableCollision = !!i1525[13]
  i1524.enabled = !!i1525[14]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1527 = data
  i1526.autoConfigureTarget = !!i1527[0]
  i1526.target = new pc.Vec2( i1527[1], i1527[2] )
  i1526.anchor = new pc.Vec2( i1527[3], i1527[4] )
  i1526.maxForce = i1527[5]
  i1526.dampingRatio = i1527[6]
  i1526.frequency = i1527[7]
  request.r(i1527[8], i1527[9], 0, i1526, 'connectedBody')
  i1526.breakForce = i1527[10]
  i1526.breakTorque = i1527[11]
  i1526.enableCollision = !!i1527[12]
  i1526.enabled = !!i1527[13]
  return i1526
}

Deserializers["ShootController"] = function (request, data, root) {
  var i1528 = root || request.c( 'ShootController' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'currentMonster')
  request.r(i1529[2], i1529[3], 0, i1528, 'left')
  request.r(i1529[4], i1529[5], 0, i1528, 'right')
  i1528.timeMotor = i1529[6]
  i1528.onCD = !!i1529[7]
  i1528.CD = i1529[8]
  request.r(i1529[9], i1529[10], 0, i1528, 'startPos')
  request.r(i1529[11], i1529[12], 0, i1528, 'attackSound')
  request.r(i1529[13], i1529[14], 0, i1528, 'spawnPrefab')
  request.r(i1529[15], i1529[16], 0, i1528, 'poolParent')
  return i1528
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1530 = root || request.c( 'BalanceController' )
  var i1531 = data
  i1530.targetRotation = i1531[0]
  i1530.force = i1531[1]
  return i1530
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1532 = root || request.c( 'MonsterController' )
  var i1533 = data
  i1532.maxHP = i1533[0]
  i1532.currentHP = i1533[1]
  var i1535 = i1533[2]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('Piece', i1535[i + 0]));
  }
  i1532.pieces = i1534
  request.r(i1533[3], i1533[4], 0, i1532, 'deadSFX')
  i1532.maxForce = new pc.Vec2( i1533[5], i1533[6] )
  i1532.minForce = new pc.Vec2( i1533[7], i1533[8] )
  request.r(i1533[9], i1533[10], 0, i1532, 'balance')
  i1532.isDead = !!i1533[11]
  request.r(i1533[12], i1533[13], 0, i1532, 'monsterMove')
  request.r(i1533[14], i1533[15], 0, i1532, 'monsterTarget')
  request.r(i1533[16], i1533[17], 0, i1532, 'monsterAnimation')
  request.r(i1533[18], i1533[19], 0, i1532, 'voice')
  return i1532
}

Deserializers["MonsterMove"] = function (request, data, root) {
  var i1536 = root || request.c( 'MonsterMove' )
  var i1537 = data
  request.r(i1537[0], i1537[1], 0, i1536, 'body')
  i1536.speed = i1537[2]
  return i1536
}

Deserializers["MonsterAnimation"] = function (request, data, root) {
  var i1538 = root || request.c( 'MonsterAnimation' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'leftHand')
  request.r(i1539[2], i1539[3], 0, i1538, 'rightHand')
  request.r(i1539[4], i1539[5], 0, i1538, 'leftLeg')
  request.r(i1539[6], i1539[7], 0, i1538, 'rightLeg')
  return i1538
}

Deserializers["MonsterTarget"] = function (request, data, root) {
  var i1540 = root || request.c( 'MonsterTarget' )
  var i1541 = data
  i1540.targetLeft = !!i1541[0]
  return i1540
}

Deserializers["GameController"] = function (request, data, root) {
  var i1542 = root || request.c( 'GameController' )
  var i1543 = data
  i1542.Delay = i1543[0]
  i1542.OnPause = request.d('System.Action', i1543[1], i1542.OnPause)
  i1542.OnResume = request.d('System.Action', i1543[2], i1542.OnResume)
  i1542.OnGameOver = request.d('System.Action', i1543[3], i1542.OnGameOver)
  i1542.OnGameComplete = request.d('System.Action', i1543[4], i1542.OnGameComplete)
  request.r(i1543[5], i1543[6], 0, i1542, 'startScene')
  request.r(i1543[7], i1543[8], 0, i1542, 'header')
  request.r(i1543[9], i1543[10], 0, i1542, 'clickSound')
  request.r(i1543[11], i1543[12], 0, i1542, 'options')
  request.r(i1543[13], i1543[14], 0, i1542, 'bomb1Button')
  request.r(i1543[15], i1543[16], 0, i1542, 'bomb1')
  request.r(i1543[17], i1543[18], 0, i1542, 'bomb2Button')
  request.r(i1543[19], i1543[20], 0, i1542, 'bomb2')
  request.r(i1543[21], i1543[22], 0, i1542, 'bomb3Button')
  request.r(i1543[23], i1543[24], 0, i1542, 'bomb3')
  request.r(i1543[25], i1543[26], 0, i1542, 'bomb4Button')
  request.r(i1543[27], i1543[28], 0, i1542, 'bomb4')
  request.r(i1543[29], i1543[30], 0, i1542, 'tut')
  request.r(i1543[31], i1543[32], 0, i1542, 'endScene')
  request.r(i1543[33], i1543[34], 0, i1542, 'completeScene')
  request.r(i1543[35], i1543[36], 0, i1542, 'gameOverScene')
  request.r(i1543[37], i1543[38], 0, i1542, 'player')
  i1542.numMonster = i1543[39]
  request.r(i1543[40], i1543[41], 0, i1542, 'world')
  return i1542
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1544 = root || request.c( 'System.Action' )
  var i1545 = data
  return i1544
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1546 = root || request.c( 'LayoutController' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'main')
  return i1546
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1548 = root || request.c( 'LunaController' )
  var i1549 = data
  i1548.oneClick = !!i1549[0]
  i1548.UseTime = !!i1549[1]
  i1548.TimePlay = i1549[2]
  request.r(i1549[3], i1549[4], 0, i1548, 'BGTexture')
  i1548.HeaderText1 = i1549[5]
  i1548.ColorHeaderText1 = new pc.Color(i1549[6], i1549[7], i1549[8], i1549[9])
  i1548.HeaderText2 = i1549[10]
  i1548.ColorHeaderText2 = new pc.Color(i1549[11], i1549[12], i1549[13], i1549[14])
  request.r(i1549[15], i1549[16], 0, i1548, 'header1')
  request.r(i1549[17], i1549[18], 0, i1548, 'header2')
  request.r(i1549[19], i1549[20], 0, i1548, 'BGImage')
  var i1551 = i1549[21]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 1, i1550, '')
  }
  i1548.CTA = i1550
  var i1553 = i1549[22]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 1, i1552, '')
  }
  i1548.oneClickCTA = i1552
  return i1548
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1556 = root || request.c( 'AudioController' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'BGM')
  request.r(i1557[2], i1557[3], 0, i1556, 'musicSource')
  request.r(i1557[4], i1557[5], 0, i1556, 'pool')
  return i1556
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1558 = root || request.c( 'VFXController' )
  var i1559 = data
  request.r(i1559[0], i1559[1], 0, i1558, 'poolParent')
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1561 = data
  i1560.ambientIntensity = i1561[0]
  i1560.reflectionIntensity = i1561[1]
  i1560.ambientMode = i1561[2]
  i1560.ambientLight = new pc.Color(i1561[3], i1561[4], i1561[5], i1561[6])
  i1560.ambientSkyColor = new pc.Color(i1561[7], i1561[8], i1561[9], i1561[10])
  i1560.ambientGroundColor = new pc.Color(i1561[11], i1561[12], i1561[13], i1561[14])
  i1560.ambientEquatorColor = new pc.Color(i1561[15], i1561[16], i1561[17], i1561[18])
  i1560.fogColor = new pc.Color(i1561[19], i1561[20], i1561[21], i1561[22])
  i1560.fogEndDistance = i1561[23]
  i1560.fogStartDistance = i1561[24]
  i1560.fogDensity = i1561[25]
  i1560.fog = !!i1561[26]
  request.r(i1561[27], i1561[28], 0, i1560, 'skybox')
  i1560.fogMode = i1561[29]
  var i1563 = i1561[30]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1563[i + 0]) );
  }
  i1560.lightmaps = i1562
  i1560.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1561[31], i1560.lightProbes)
  i1560.lightmapsMode = i1561[32]
  i1560.mixedBakeMode = i1561[33]
  i1560.environmentLightingMode = i1561[34]
  i1560.ambientProbe = new pc.SphericalHarmonicsL2(i1561[35])
  request.r(i1561[36], i1561[37], 0, i1560, 'customReflection')
  request.r(i1561[38], i1561[39], 0, i1560, 'defaultReflection')
  i1560.defaultReflectionMode = i1561[40]
  i1560.defaultReflectionResolution = i1561[41]
  i1560.sunLightObjectId = i1561[42]
  i1560.pixelLightCount = i1561[43]
  i1560.defaultReflectionHDR = !!i1561[44]
  i1560.hasLightDataAsset = !!i1561[45]
  i1560.hasManualGenerate = !!i1561[46]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'lightmapColor')
  request.r(i1567[2], i1567[3], 0, i1566, 'lightmapDirection')
  request.r(i1567[4], i1567[5], 0, i1566, 'shadowMask')
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1568 = root || new UnityEngine.LightProbes()
  var i1569 = data
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1577 = data
  var i1579 = i1577[0]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1579[i + 0]));
  }
  i1576.ShaderCompilationErrors = i1578
  i1576.name = i1577[1]
  i1576.guid = i1577[2]
  var i1581 = i1577[3]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( i1581[i + 0] );
  }
  i1576.shaderDefinedKeywords = i1580
  var i1583 = i1577[4]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1583[i + 0]) );
  }
  i1576.passes = i1582
  var i1585 = i1577[5]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1585[i + 0]) );
  }
  i1576.usePasses = i1584
  var i1587 = i1577[6]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1587[i + 0]) );
  }
  i1576.defaultParameterValues = i1586
  request.r(i1577[7], i1577[8], 0, i1576, 'unityFallbackShader')
  i1576.readDepth = !!i1577[9]
  i1576.hasDepthOnlyPass = !!i1577[10]
  i1576.isCreatedByShaderGraph = !!i1577[11]
  i1576.disableBatching = !!i1577[12]
  i1576.compiled = !!i1577[13]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1591 = data
  i1590.shaderName = i1591[0]
  i1590.errorMessage = i1591[1]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1596 = root || new pc.UnityShaderPass()
  var i1597 = data
  i1596.id = i1597[0]
  i1596.subShaderIndex = i1597[1]
  i1596.name = i1597[2]
  i1596.passType = i1597[3]
  i1596.grabPassTextureName = i1597[4]
  i1596.usePass = !!i1597[5]
  i1596.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[6], i1596.zTest)
  i1596.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[7], i1596.zWrite)
  i1596.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[8], i1596.culling)
  i1596.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1597[9], i1596.blending)
  i1596.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1597[10], i1596.alphaBlending)
  i1596.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[11], i1596.colorWriteMask)
  i1596.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[12], i1596.offsetUnits)
  i1596.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[13], i1596.offsetFactor)
  i1596.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[14], i1596.stencilRef)
  i1596.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[15], i1596.stencilReadMask)
  i1596.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1597[16], i1596.stencilWriteMask)
  i1596.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[17], i1596.stencilOp)
  i1596.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[18], i1596.stencilOpFront)
  i1596.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1597[19], i1596.stencilOpBack)
  var i1599 = i1597[20]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1599[i + 0]) );
  }
  i1596.tags = i1598
  var i1601 = i1597[21]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( i1601[i + 0] );
  }
  i1596.passDefinedKeywords = i1600
  var i1603 = i1597[22]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1603[i + 0]) );
  }
  i1596.passDefinedKeywordGroups = i1602
  var i1605 = i1597[23]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1605[i + 0]) );
  }
  i1596.variants = i1604
  var i1607 = i1597[24]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1607[i + 0]) );
  }
  i1596.excludedVariants = i1606
  i1596.hasDepthReader = !!i1597[25]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1609 = data
  i1608.val = i1609[0]
  i1608.name = i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1611 = data
  i1610.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[0], i1610.src)
  i1610.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[1], i1610.dst)
  i1610.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1611[2], i1610.op)
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1613 = data
  i1612.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[0], i1612.pass)
  i1612.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[1], i1612.fail)
  i1612.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[2], i1612.zFail)
  i1612.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1613[3], i1612.comp)
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.value = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( i1623[i + 0] );
  }
  i1620.keywords = i1622
  i1620.hasDiscard = !!i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1627 = data
  i1626.passId = i1627[0]
  i1626.subShaderIndex = i1627[1]
  var i1629 = i1627[2]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( i1629[i + 0] );
  }
  i1626.keywords = i1628
  i1626.vertexProgram = i1627[3]
  i1626.fragmentProgram = i1627[4]
  i1626.exportedForWebGl2 = !!i1627[5]
  i1626.readDepth = !!i1627[6]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'shader')
  i1632.pass = i1633[2]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.type = i1637[1]
  i1636.value = new pc.Vec4( i1637[2], i1637[3], i1637[4], i1637[5] )
  i1636.textureValue = i1637[6]
  i1636.shaderPropertyFlag = i1637[7]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1639 = data
  i1638.name = i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'texture')
  i1638.aabb = i1639[3]
  i1638.vertices = i1639[4]
  i1638.triangles = i1639[5]
  i1638.textureRect = UnityEngine.Rect.MinMaxRect(i1639[6], i1639[7], i1639[8], i1639[9])
  i1638.packedRect = UnityEngine.Rect.MinMaxRect(i1639[10], i1639[11], i1639[12], i1639[13])
  i1638.border = new pc.Vec4( i1639[14], i1639[15], i1639[16], i1639[17] )
  i1638.transparency = i1639[18]
  i1638.bounds = i1639[19]
  i1638.pixelsPerUnit = i1639[20]
  i1638.textureWidth = i1639[21]
  i1638.textureHeight = i1639[22]
  i1638.nativeSize = new pc.Vec2( i1639[23], i1639[24] )
  i1638.pivot = new pc.Vec2( i1639[25], i1639[26] )
  i1638.textureRectOffset = new pc.Vec2( i1639[27], i1639[28] )
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1641 = data
  i1640.name = i1641[0]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.ascent = i1643[1]
  i1642.originalLineHeight = i1643[2]
  i1642.fontSize = i1643[3]
  var i1645 = i1643[4]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1645[i + 0]) );
  }
  i1642.characterInfo = i1644
  request.r(i1643[5], i1643[6], 0, i1642, 'texture')
  i1642.originalFontSize = i1643[7]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1649 = data
  i1648.index = i1649[0]
  i1648.advance = i1649[1]
  i1648.bearing = i1649[2]
  i1648.glyphWidth = i1649[3]
  i1648.glyphHeight = i1649[4]
  i1648.minX = i1649[5]
  i1648.maxX = i1649[6]
  i1648.minY = i1649[7]
  i1648.maxY = i1649[8]
  i1648.uvBottomLeftX = i1649[9]
  i1648.uvBottomLeftY = i1649[10]
  i1648.uvBottomRightX = i1649[11]
  i1648.uvBottomRightY = i1649[12]
  i1648.uvTopLeftX = i1649[13]
  i1648.uvTopLeftY = i1649[14]
  i1648.uvTopRightX = i1649[15]
  i1648.uvTopRightY = i1649[16]
  return i1648
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1650 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1651 = data
  i1650.useSafeMode = !!i1651[0]
  i1650.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1651[1], i1650.safeModeOptions)
  i1650.timeScale = i1651[2]
  i1650.unscaledTimeScale = i1651[3]
  i1650.useSmoothDeltaTime = !!i1651[4]
  i1650.maxSmoothUnscaledTime = i1651[5]
  i1650.rewindCallbackMode = i1651[6]
  i1650.showUnityEditorReport = !!i1651[7]
  i1650.logBehaviour = i1651[8]
  i1650.drawGizmos = !!i1651[9]
  i1650.defaultRecyclable = !!i1651[10]
  i1650.defaultAutoPlay = i1651[11]
  i1650.defaultUpdateType = i1651[12]
  i1650.defaultTimeScaleIndependent = !!i1651[13]
  i1650.defaultEaseType = i1651[14]
  i1650.defaultEaseOvershootOrAmplitude = i1651[15]
  i1650.defaultEasePeriod = i1651[16]
  i1650.defaultAutoKill = !!i1651[17]
  i1650.defaultLoopType = i1651[18]
  i1650.debugMode = !!i1651[19]
  i1650.debugStoreTargetId = !!i1651[20]
  i1650.showPreviewPanel = !!i1651[21]
  i1650.storeSettingsLocation = i1651[22]
  i1650.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1651[23], i1650.modules)
  i1650.createASMDEF = !!i1651[24]
  i1650.showPlayingTweens = !!i1651[25]
  i1650.showPausedTweens = !!i1651[26]
  return i1650
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1652 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1653 = data
  i1652.logBehaviour = i1653[0]
  i1652.nestedTweenFailureBehaviour = i1653[1]
  return i1652
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1654 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1655 = data
  i1654.showPanel = !!i1655[0]
  i1654.audioEnabled = !!i1655[1]
  i1654.physicsEnabled = !!i1655[2]
  i1654.physics2DEnabled = !!i1655[3]
  i1654.spriteEnabled = !!i1655[4]
  i1654.uiEnabled = !!i1655[5]
  i1654.textMeshProEnabled = !!i1655[6]
  i1654.tk2DEnabled = !!i1655[7]
  i1654.deAudioEnabled = !!i1655[8]
  i1654.deUnityExtendedEnabled = !!i1655[9]
  i1654.epoOutlineEnabled = !!i1655[10]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1659[i + 0]) );
  }
  i1656.files = i1658
  i1656.componentToPrefabIds = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1663 = data
  i1662.path = i1663[0]
  request.r(i1663[1], i1663[2], 0, i1662, 'unityObject')
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1667[i + 0]) );
  }
  i1664.scriptsExecutionOrder = i1666
  var i1669 = i1665[1]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1669[i + 0]) );
  }
  i1664.sortingLayers = i1668
  var i1671 = i1665[2]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1671[i + 0]) );
  }
  i1664.cullingLayers = i1670
  i1664.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1665[3], i1664.timeSettings)
  i1664.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1665[4], i1664.physicsSettings)
  i1664.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1665[5], i1664.physics2DSettings)
  i1664.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1665[6], i1664.qualitySettings)
  i1664.enableRealtimeShadows = !!i1665[7]
  i1664.enableAutoInstancing = !!i1665[8]
  i1664.enableStaticBatching = !!i1665[9]
  i1664.enableDynamicBatching = !!i1665[10]
  i1664.usePreservativeDynamicBatching = !!i1665[11]
  i1664.lightmapEncodingQuality = i1665[12]
  i1664.desiredColorSpace = i1665[13]
  var i1673 = i1665[14]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( i1673[i + 0] );
  }
  i1664.allTags = i1672
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.value = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1681 = data
  i1680.id = i1681[0]
  i1680.name = i1681[1]
  i1680.value = i1681[2]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1685 = data
  i1684.id = i1685[0]
  i1684.name = i1685[1]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1687 = data
  i1686.fixedDeltaTime = i1687[0]
  i1686.maximumDeltaTime = i1687[1]
  i1686.timeScale = i1687[2]
  i1686.maximumParticleTimestep = i1687[3]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1689 = data
  i1688.gravity = new pc.Vec3( i1689[0], i1689[1], i1689[2] )
  i1688.defaultSolverIterations = i1689[3]
  i1688.bounceThreshold = i1689[4]
  i1688.autoSyncTransforms = !!i1689[5]
  i1688.autoSimulation = !!i1689[6]
  var i1691 = i1689[7]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1691[i + 0]) );
  }
  i1688.collisionMatrix = i1690
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.layerId = i1695[1]
  i1694.otherLayerId = i1695[2]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'material')
  i1696.gravity = new pc.Vec2( i1697[2], i1697[3] )
  i1696.positionIterations = i1697[4]
  i1696.velocityIterations = i1697[5]
  i1696.velocityThreshold = i1697[6]
  i1696.maxLinearCorrection = i1697[7]
  i1696.maxAngularCorrection = i1697[8]
  i1696.maxTranslationSpeed = i1697[9]
  i1696.maxRotationSpeed = i1697[10]
  i1696.baumgarteScale = i1697[11]
  i1696.baumgarteTOIScale = i1697[12]
  i1696.timeToSleep = i1697[13]
  i1696.linearSleepTolerance = i1697[14]
  i1696.angularSleepTolerance = i1697[15]
  i1696.defaultContactOffset = i1697[16]
  i1696.autoSimulation = !!i1697[17]
  i1696.queriesHitTriggers = !!i1697[18]
  i1696.queriesStartInColliders = !!i1697[19]
  i1696.callbacksOnDisable = !!i1697[20]
  i1696.reuseCollisionCallbacks = !!i1697[21]
  i1696.autoSyncTransforms = !!i1697[22]
  var i1699 = i1697[23]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1699[i + 0]) );
  }
  i1696.collisionMatrix = i1698
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1703 = data
  i1702.enabled = !!i1703[0]
  i1702.layerId = i1703[1]
  i1702.otherLayerId = i1703[2]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1707[i + 0]) );
  }
  i1704.qualityLevels = i1706
  var i1709 = i1705[1]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1704.names = i1708
  i1704.shadows = i1705[2]
  i1704.anisotropicFiltering = i1705[3]
  i1704.antiAliasing = i1705[4]
  i1704.lodBias = i1705[5]
  i1704.shadowCascades = i1705[6]
  i1704.shadowDistance = i1705[7]
  i1704.shadowmaskMode = i1705[8]
  i1704.shadowProjection = i1705[9]
  i1704.shadowResolution = i1705[10]
  i1704.softParticles = !!i1705[11]
  i1704.softVegetation = !!i1705[12]
  i1704.activeColorSpace = i1705[13]
  i1704.desiredColorSpace = i1705[14]
  i1704.masterTextureLimit = i1705[15]
  i1704.maxQueuedFrames = i1705[16]
  i1704.particleRaycastBudget = i1705[17]
  i1704.pixelLightCount = i1705[18]
  i1704.realtimeReflectionProbes = !!i1705[19]
  i1704.shadowCascade2Split = i1705[20]
  i1704.shadowCascade4Split = new pc.Vec3( i1705[21], i1705[22], i1705[23] )
  i1704.streamingMipmapsActive = !!i1705[24]
  i1704.vSyncCount = i1705[25]
  i1704.asyncUploadBufferSize = i1705[26]
  i1704.asyncUploadTimeSlice = i1705[27]
  i1704.billboardsFaceCameraPosition = !!i1705[28]
  i1704.shadowNearPlaneOffset = i1705[29]
  i1704.streamingMipmapsMemoryBudget = i1705[30]
  i1704.maximumLODLevel = i1705[31]
  i1704.streamingMipmapsAddAllCameras = !!i1705[32]
  i1704.streamingMipmapsMaxLevelReduction = i1705[33]
  i1704.streamingMipmapsRenderersPerFrame = i1705[34]
  i1704.resolutionScalingFixedDPIFactor = i1705[35]
  i1704.streamingMipmapsMaxFileIORequests = i1705[36]
  i1704.currentQualityLevel = i1705[37]
  return i1704
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[11],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[33],"72":[33],"73":[33],"74":[33],"75":[33],"76":[33],"40":[33],"77":[33],"78":[33],"41":[33],"79":[33],"80":[33],"81":[33],"82":[11],"83":[84],"85":[86],"87":[86],"18":[17],"88":[2],"89":[11],"90":[91],"92":[17],"93":[21,17],"94":[84],"95":[21,17],"96":[17],"97":[17],"98":[84,17],"99":[17,21],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"20":[18],"28":[21,17],"24":[17],"19":[18],"106":[17],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"22":[21,17],"115":[17],"116":[17],"117":[17],"118":[17],"25":[21,17],"119":[17],"120":[15],"121":[15],"16":[15],"122":[15],"123":[11],"124":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","ShakeCamera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.UI.Button","TutController","UnityEngine.AudioSource","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","CountDownBomb","UnityEngine.GameObject","CollisionBomb","TriggerMonster","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","BalanceController","MonsterController","MonsterMove","MonsterTarget","MonsterAnimation","GameController","LayoutController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "09/28/2026 08:09:01";

Deserializers.lunaDaysRunning = "9.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SPS_V04_TrangHTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1755";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4460";

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

Deserializers.buildID = "a049b5f7-09d6-4397-8903-95146c60a147";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

