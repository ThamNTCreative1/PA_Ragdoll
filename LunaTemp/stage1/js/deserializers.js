var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.JointSpring' )
  var i1321 = data
  i1320.spring = i1321[0]
  i1320.damper = i1321[1]
  i1320.targetPosition = i1321[2]
  return i1320
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.JointMotor' )
  var i1323 = data
  i1322.m_TargetVelocity = i1323[0]
  i1322.m_Force = i1323[1]
  i1322.m_FreeSpin = i1323[2]
  return i1322
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.JointLimits' )
  var i1325 = data
  i1324.m_Min = i1325[0]
  i1324.m_Max = i1325[1]
  i1324.m_Bounciness = i1325[2]
  i1324.m_BounceMinVelocity = i1325[3]
  i1324.m_ContactDistance = i1325[4]
  i1324.minBounce = i1325[5]
  i1324.maxBounce = i1325[6]
  return i1324
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.JointDrive' )
  var i1327 = data
  i1326.m_PositionSpring = i1327[0]
  i1326.m_PositionDamper = i1327[1]
  i1326.m_MaximumForce = i1327[2]
  i1326.m_UseAcceleration = i1327[3]
  return i1326
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1329 = data
  i1328.m_Spring = i1329[0]
  i1328.m_Damper = i1329[1]
  return i1328
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1331 = data
  i1330.m_Limit = i1331[0]
  i1330.m_Bounciness = i1331[1]
  i1330.m_ContactDistance = i1331[2]
  return i1330
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1333 = data
  i1332.m_ExtremumSlip = i1333[0]
  i1332.m_ExtremumValue = i1333[1]
  i1332.m_AsymptoteSlip = i1333[2]
  i1332.m_AsymptoteValue = i1333[3]
  i1332.m_Stiffness = i1333[4]
  return i1332
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1335 = data
  i1334.m_LowerAngle = i1335[0]
  i1334.m_UpperAngle = i1335[1]
  return i1334
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1337 = data
  i1336.m_MotorSpeed = i1337[0]
  i1336.m_MaximumMotorTorque = i1337[1]
  return i1336
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1339 = data
  i1338.m_DampingRatio = i1339[0]
  i1338.m_Frequency = i1339[1]
  i1338.m_Angle = i1339[2]
  return i1338
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1341 = data
  i1340.m_LowerTranslation = i1341[0]
  i1340.m_UpperTranslation = i1341[1]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.width = i1343[1]
  i1342.height = i1343[2]
  i1342.mipmapCount = i1343[3]
  i1342.anisoLevel = i1343[4]
  i1342.filterMode = i1343[5]
  i1342.hdr = !!i1343[6]
  i1342.format = i1343[7]
  i1342.wrapMode = i1343[8]
  i1342.alphaIsTransparency = !!i1343[9]
  i1342.alphaSource = i1343[10]
  i1342.graphicsFormat = i1343[11]
  i1342.sRGBTexture = !!i1343[12]
  i1342.desiredColorSpace = i1343[13]
  i1342.wrapU = i1343[14]
  i1342.wrapV = i1343[15]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1344 = root || new pc.UnityMaterial()
  var i1345 = data
  i1344.name = i1345[0]
  request.r(i1345[1], i1345[2], 0, i1344, 'shader')
  i1344.renderQueue = i1345[3]
  i1344.enableInstancing = !!i1345[4]
  var i1347 = i1345[5]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1347[i + 0]) );
  }
  i1344.floatParameters = i1346
  var i1349 = i1345[6]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1349[i + 0]) );
  }
  i1344.colorParameters = i1348
  var i1351 = i1345[7]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1351[i + 0]) );
  }
  i1344.vectorParameters = i1350
  var i1353 = i1345[8]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1353[i + 0]) );
  }
  i1344.textureParameters = i1352
  var i1355 = i1345[9]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1355[i + 0]) );
  }
  i1344.materialFlags = i1354
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.value = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.value = new pc.Color(i1363[1], i1363[2], i1363[3], i1363[4])
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.value = new pc.Vec4( i1367[1], i1367[2], i1367[3], i1367[4] )
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1371 = data
  i1370.name = i1371[0]
  request.r(i1371[1], i1371[2], 0, i1370, 'value')
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.enabled = !!i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1377 = data
  i1376.position = new pc.Vec3( i1377[0], i1377[1], i1377[2] )
  i1376.scale = new pc.Vec3( i1377[3], i1377[4], i1377[5] )
  i1376.rotation = new pc.Quat(i1377[6], i1377[7], i1377[8], i1377[9])
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1379 = data
  i1378.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1379[0], i1378.main)
  i1378.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1379[1], i1378.colorBySpeed)
  i1378.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1379[2], i1378.colorOverLifetime)
  i1378.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1379[3], i1378.emission)
  i1378.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1379[4], i1378.rotationBySpeed)
  i1378.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1379[5], i1378.rotationOverLifetime)
  i1378.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1379[6], i1378.shape)
  i1378.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1379[7], i1378.sizeBySpeed)
  i1378.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1379[8], i1378.sizeOverLifetime)
  i1378.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1379[9], i1378.textureSheetAnimation)
  i1378.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1379[10], i1378.velocityOverLifetime)
  i1378.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1379[11], i1378.noise)
  i1378.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1379[12], i1378.inheritVelocity)
  i1378.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1379[13], i1378.forceOverLifetime)
  i1378.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1379[14], i1378.limitVelocityOverLifetime)
  i1378.useAutoRandomSeed = !!i1379[15]
  i1378.randomSeed = i1379[16]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1380 = root || new pc.ParticleSystemMain()
  var i1381 = data
  i1380.duration = i1381[0]
  i1380.loop = !!i1381[1]
  i1380.prewarm = !!i1381[2]
  i1380.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[3], i1380.startDelay)
  i1380.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[4], i1380.startLifetime)
  i1380.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[5], i1380.startSpeed)
  i1380.startSize3D = !!i1381[6]
  i1380.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[7], i1380.startSizeX)
  i1380.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[8], i1380.startSizeY)
  i1380.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[9], i1380.startSizeZ)
  i1380.startRotation3D = !!i1381[10]
  i1380.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[11], i1380.startRotationX)
  i1380.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[12], i1380.startRotationY)
  i1380.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[13], i1380.startRotationZ)
  i1380.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1381[14], i1380.startColor)
  i1380.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1381[15], i1380.gravityModifier)
  i1380.simulationSpace = i1381[16]
  request.r(i1381[17], i1381[18], 0, i1380, 'customSimulationSpace')
  i1380.simulationSpeed = i1381[19]
  i1380.useUnscaledTime = !!i1381[20]
  i1380.scalingMode = i1381[21]
  i1380.playOnAwake = !!i1381[22]
  i1380.maxParticles = i1381[23]
  i1380.emitterVelocityMode = i1381[24]
  i1380.stopAction = i1381[25]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1382 = root || new pc.MinMaxCurve()
  var i1383 = data
  i1382.mode = i1383[0]
  i1382.curveMin = new pc.AnimationCurve( { keys_flow: i1383[1] } )
  i1382.curveMax = new pc.AnimationCurve( { keys_flow: i1383[2] } )
  i1382.curveMultiplier = i1383[3]
  i1382.constantMin = i1383[4]
  i1382.constantMax = i1383[5]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1384 = root || new pc.MinMaxGradient()
  var i1385 = data
  i1384.mode = i1385[0]
  i1384.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1385[1], i1384.gradientMin)
  i1384.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1385[2], i1384.gradientMax)
  i1384.colorMin = new pc.Color(i1385[3], i1385[4], i1385[5], i1385[6])
  i1384.colorMax = new pc.Color(i1385[7], i1385[8], i1385[9], i1385[10])
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1387 = data
  i1386.mode = i1387[0]
  var i1389 = i1387[1]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1389[i + 0]) );
  }
  i1386.colorKeys = i1388
  var i1391 = i1387[2]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1391[i + 0]) );
  }
  i1386.alphaKeys = i1390
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1392 = root || new pc.ParticleSystemColorBySpeed()
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1393[1], i1392.color)
  i1392.range = new pc.Vec2( i1393[2], i1393[3] )
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1397 = data
  i1396.color = new pc.Color(i1397[0], i1397[1], i1397[2], i1397[3])
  i1396.time = i1397[4]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1401 = data
  i1400.alpha = i1401[0]
  i1400.time = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1402 = root || new pc.ParticleSystemColorOverLifetime()
  var i1403 = data
  i1402.enabled = !!i1403[0]
  i1402.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1403[1], i1402.color)
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1404 = root || new pc.ParticleSystemEmitter()
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[1], i1404.rateOverTime)
  i1404.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[2], i1404.rateOverDistance)
  var i1407 = i1405[3]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1407[i + 0]) );
  }
  i1404.bursts = i1406
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1410 = root || new pc.ParticleSystemBurst()
  var i1411 = data
  i1410.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[0], i1410.count)
  i1410.cycleCount = i1411[1]
  i1410.minCount = i1411[2]
  i1410.maxCount = i1411[3]
  i1410.repeatInterval = i1411[4]
  i1410.time = i1411[5]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1412 = root || new pc.ParticleSystemRotationBySpeed()
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[1], i1412.x)
  i1412.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[2], i1412.y)
  i1412.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1413[3], i1412.z)
  i1412.separateAxes = !!i1413[4]
  i1412.range = new pc.Vec2( i1413[5], i1413[6] )
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1414 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[1], i1414.x)
  i1414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[2], i1414.y)
  i1414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1415[3], i1414.z)
  i1414.separateAxes = !!i1415[4]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1416 = root || new pc.ParticleSystemShape()
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.shapeType = i1417[1]
  i1416.randomDirectionAmount = i1417[2]
  i1416.sphericalDirectionAmount = i1417[3]
  i1416.randomPositionAmount = i1417[4]
  i1416.alignToDirection = !!i1417[5]
  i1416.radius = i1417[6]
  i1416.radiusMode = i1417[7]
  i1416.radiusSpread = i1417[8]
  i1416.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[9], i1416.radiusSpeed)
  i1416.radiusThickness = i1417[10]
  i1416.angle = i1417[11]
  i1416.length = i1417[12]
  i1416.boxThickness = new pc.Vec3( i1417[13], i1417[14], i1417[15] )
  i1416.meshShapeType = i1417[16]
  request.r(i1417[17], i1417[18], 0, i1416, 'mesh')
  request.r(i1417[19], i1417[20], 0, i1416, 'meshRenderer')
  request.r(i1417[21], i1417[22], 0, i1416, 'skinnedMeshRenderer')
  i1416.useMeshMaterialIndex = !!i1417[23]
  i1416.meshMaterialIndex = i1417[24]
  i1416.useMeshColors = !!i1417[25]
  i1416.normalOffset = i1417[26]
  i1416.arc = i1417[27]
  i1416.arcMode = i1417[28]
  i1416.arcSpread = i1417[29]
  i1416.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[30], i1416.arcSpeed)
  i1416.donutRadius = i1417[31]
  i1416.position = new pc.Vec3( i1417[32], i1417[33], i1417[34] )
  i1416.rotation = new pc.Vec3( i1417[35], i1417[36], i1417[37] )
  i1416.scale = new pc.Vec3( i1417[38], i1417[39], i1417[40] )
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1418 = root || new pc.ParticleSystemSizeBySpeed()
  var i1419 = data
  i1418.enabled = !!i1419[0]
  i1418.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1419[1], i1418.x)
  i1418.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1419[2], i1418.y)
  i1418.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1419[3], i1418.z)
  i1418.separateAxes = !!i1419[4]
  i1418.range = new pc.Vec2( i1419[5], i1419[6] )
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1420 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[1], i1420.x)
  i1420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[2], i1420.y)
  i1420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[3], i1420.z)
  i1420.separateAxes = !!i1421[4]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1422 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.mode = i1423[1]
  i1422.animation = i1423[2]
  i1422.numTilesX = i1423[3]
  i1422.numTilesY = i1423[4]
  i1422.useRandomRow = !!i1423[5]
  i1422.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[6], i1422.frameOverTime)
  i1422.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[7], i1422.startFrame)
  i1422.cycleCount = i1423[8]
  i1422.rowIndex = i1423[9]
  i1422.flipU = i1423[10]
  i1422.flipV = i1423[11]
  i1422.spriteCount = i1423[12]
  var i1425 = i1423[13]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 2) {
  request.r(i1425[i + 0], i1425[i + 1], 2, i1424, '')
  }
  i1422.sprites = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1428 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[1], i1428.x)
  i1428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[2], i1428.y)
  i1428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[3], i1428.z)
  i1428.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[4], i1428.radial)
  i1428.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[5], i1428.speedModifier)
  i1428.space = i1429[6]
  i1428.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[7], i1428.orbitalX)
  i1428.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[8], i1428.orbitalY)
  i1428.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[9], i1428.orbitalZ)
  i1428.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[10], i1428.orbitalOffsetX)
  i1428.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[11], i1428.orbitalOffsetY)
  i1428.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[12], i1428.orbitalOffsetZ)
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1430 = root || new pc.ParticleSystemNoise()
  var i1431 = data
  i1430.enabled = !!i1431[0]
  i1430.separateAxes = !!i1431[1]
  i1430.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[2], i1430.strengthX)
  i1430.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[3], i1430.strengthY)
  i1430.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[4], i1430.strengthZ)
  i1430.frequency = i1431[5]
  i1430.damping = !!i1431[6]
  i1430.octaveCount = i1431[7]
  i1430.octaveMultiplier = i1431[8]
  i1430.octaveScale = i1431[9]
  i1430.quality = i1431[10]
  i1430.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[11], i1430.scrollSpeed)
  i1430.scrollSpeedMultiplier = i1431[12]
  i1430.remapEnabled = !!i1431[13]
  i1430.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[14], i1430.remapX)
  i1430.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[15], i1430.remapY)
  i1430.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[16], i1430.remapZ)
  i1430.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[17], i1430.positionAmount)
  i1430.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[18], i1430.rotationAmount)
  i1430.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[19], i1430.sizeAmount)
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1432 = root || new pc.ParticleSystemInheritVelocity()
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.mode = i1433[1]
  i1432.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[2], i1432.curve)
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemForceOverLifetime()
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[1], i1434.x)
  i1434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[2], i1434.y)
  i1434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[3], i1434.z)
  i1434.space = i1435[4]
  i1434.randomized = !!i1435[5]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1436 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1437 = data
  i1436.enabled = !!i1437[0]
  i1436.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[1], i1436.limit)
  i1436.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[2], i1436.limitX)
  i1436.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[3], i1436.limitY)
  i1436.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[4], i1436.limitZ)
  i1436.dampen = i1437[5]
  i1436.separateAxes = !!i1437[6]
  i1436.space = i1437[7]
  i1436.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[8], i1436.drag)
  i1436.multiplyDragByParticleSize = !!i1437[9]
  i1436.multiplyDragByParticleVelocity = !!i1437[10]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'mesh')
  i1438.meshCount = i1439[2]
  i1438.activeVertexStreamsCount = i1439[3]
  i1438.alignment = i1439[4]
  i1438.renderMode = i1439[5]
  i1438.sortMode = i1439[6]
  i1438.lengthScale = i1439[7]
  i1438.velocityScale = i1439[8]
  i1438.cameraVelocityScale = i1439[9]
  i1438.normalDirection = i1439[10]
  i1438.sortingFudge = i1439[11]
  i1438.minParticleSize = i1439[12]
  i1438.maxParticleSize = i1439[13]
  i1438.pivot = new pc.Vec3( i1439[14], i1439[15], i1439[16] )
  request.r(i1439[17], i1439[18], 0, i1438, 'trailMaterial')
  i1438.applyActiveColorSpace = !!i1439[19]
  i1438.enabled = !!i1439[20]
  request.r(i1439[21], i1439[22], 0, i1438, 'sharedMaterial')
  var i1441 = i1439[23]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 2, i1440, '')
  }
  i1438.sharedMaterials = i1440
  i1438.receiveShadows = !!i1439[24]
  i1438.shadowCastingMode = i1439[25]
  i1438.sortingLayerID = i1439[26]
  i1438.sortingOrder = i1439[27]
  i1438.lightmapIndex = i1439[28]
  i1438.lightmapSceneIndex = i1439[29]
  i1438.lightmapScaleOffset = new pc.Vec4( i1439[30], i1439[31], i1439[32], i1439[33] )
  i1438.lightProbeUsage = i1439[34]
  i1438.reflectionProbeUsage = i1439[35]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.tagId = i1445[1]
  i1444.enabled = !!i1445[2]
  i1444.isStatic = !!i1445[3]
  i1444.layer = i1445[4]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.index = i1447[1]
  i1446.startup = !!i1447[2]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1449 = data
  i1448.aspect = i1449[0]
  i1448.orthographic = !!i1449[1]
  i1448.orthographicSize = i1449[2]
  i1448.backgroundColor = new pc.Color(i1449[3], i1449[4], i1449[5], i1449[6])
  i1448.nearClipPlane = i1449[7]
  i1448.farClipPlane = i1449[8]
  i1448.fieldOfView = i1449[9]
  i1448.depth = i1449[10]
  i1448.clearFlags = i1449[11]
  i1448.cullingMask = i1449[12]
  i1448.rect = i1449[13]
  request.r(i1449[14], i1449[15], 0, i1448, 'targetTexture')
  i1448.usePhysicalProperties = !!i1449[16]
  i1448.focalLength = i1449[17]
  i1448.sensorSize = new pc.Vec2( i1449[18], i1449[19] )
  i1448.lensShift = new pc.Vec2( i1449[20], i1449[21] )
  i1448.gateFit = i1449[22]
  i1448.commandBufferCount = i1449[23]
  i1448.cameraType = i1449[24]
  i1448.enabled = !!i1449[25]
  return i1448
}

Deserializers["CameraShake"] = function (request, data, root) {
  var i1450 = root || request.c( 'CameraShake' )
  var i1451 = data
  return i1450
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1453 = data
  request.r(i1453[0], i1453[1], 0, i1452, 'm_FirstSelected')
  i1452.m_sendNavigationEvents = !!i1453[2]
  i1452.m_DragThreshold = i1453[3]
  return i1452
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1455 = data
  i1454.m_HorizontalAxis = i1455[0]
  i1454.m_VerticalAxis = i1455[1]
  i1454.m_SubmitButton = i1455[2]
  i1454.m_CancelButton = i1455[3]
  i1454.m_InputActionsPerSecond = i1455[4]
  i1454.m_RepeatDelay = i1455[5]
  i1454.m_ForceModuleActive = !!i1455[6]
  i1454.m_SendPointerHoverToParent = !!i1455[7]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1457 = data
  i1456.pivot = new pc.Vec2( i1457[0], i1457[1] )
  i1456.anchorMin = new pc.Vec2( i1457[2], i1457[3] )
  i1456.anchorMax = new pc.Vec2( i1457[4], i1457[5] )
  i1456.sizeDelta = new pc.Vec2( i1457[6], i1457[7] )
  i1456.anchoredPosition3D = new pc.Vec3( i1457[8], i1457[9], i1457[10] )
  i1456.rotation = new pc.Quat(i1457[11], i1457[12], i1457[13], i1457[14])
  i1456.scale = new pc.Vec3( i1457[15], i1457[16], i1457[17] )
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1459 = data
  i1458.planeDistance = i1459[0]
  i1458.referencePixelsPerUnit = i1459[1]
  i1458.isFallbackOverlay = !!i1459[2]
  i1458.renderMode = i1459[3]
  i1458.renderOrder = i1459[4]
  i1458.sortingLayerName = i1459[5]
  i1458.sortingOrder = i1459[6]
  i1458.scaleFactor = i1459[7]
  request.r(i1459[8], i1459[9], 0, i1458, 'worldCamera')
  i1458.overrideSorting = !!i1459[10]
  i1458.pixelPerfect = !!i1459[11]
  i1458.targetDisplay = i1459[12]
  i1458.overridePixelPerfect = !!i1459[13]
  i1458.enabled = !!i1459[14]
  return i1458
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1461 = data
  i1460.m_UiScaleMode = i1461[0]
  i1460.m_ReferencePixelsPerUnit = i1461[1]
  i1460.m_ScaleFactor = i1461[2]
  i1460.m_ReferenceResolution = new pc.Vec2( i1461[3], i1461[4] )
  i1460.m_ScreenMatchMode = i1461[5]
  i1460.m_MatchWidthOrHeight = i1461[6]
  i1460.m_PhysicalUnit = i1461[7]
  i1460.m_FallbackScreenDPI = i1461[8]
  i1460.m_DefaultSpriteDPI = i1461[9]
  i1460.m_DynamicPixelsPerUnit = i1461[10]
  i1460.m_PresetInfoIsWorld = !!i1461[11]
  return i1460
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1463 = data
  i1462.m_IgnoreReversedGraphics = !!i1463[0]
  i1462.m_BlockingObjects = i1463[1]
  i1462.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1463[2] )
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1465 = data
  i1464.cullTransparentMesh = !!i1465[0]
  return i1464
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1467 = data
  request.r(i1467[0], i1467[1], 0, i1466, 'm_Texture')
  i1466.m_UVRect = UnityEngine.Rect.MinMaxRect(i1467[2], i1467[3], i1467[4], i1467[5])
  request.r(i1467[6], i1467[7], 0, i1466, 'm_Material')
  i1466.m_Maskable = !!i1467[8]
  i1466.m_Color = new pc.Color(i1467[9], i1467[10], i1467[11], i1467[12])
  i1466.m_RaycastTarget = !!i1467[13]
  i1466.m_RaycastPadding = new pc.Vec4( i1467[14], i1467[15], i1467[16], i1467[17] )
  return i1466
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1469 = data
  i1468.m_AspectMode = i1469[0]
  i1468.m_AspectRatio = i1469[1]
  return i1468
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.UI.Image' )
  var i1471 = data
  request.r(i1471[0], i1471[1], 0, i1470, 'm_Sprite')
  i1470.m_Type = i1471[2]
  i1470.m_PreserveAspect = !!i1471[3]
  i1470.m_FillCenter = !!i1471[4]
  i1470.m_FillMethod = i1471[5]
  i1470.m_FillAmount = i1471[6]
  i1470.m_FillClockwise = !!i1471[7]
  i1470.m_FillOrigin = i1471[8]
  i1470.m_UseSpriteMesh = !!i1471[9]
  i1470.m_PixelsPerUnitMultiplier = i1471[10]
  request.r(i1471[11], i1471[12], 0, i1470, 'm_Material')
  i1470.m_Maskable = !!i1471[13]
  i1470.m_Color = new pc.Color(i1471[14], i1471[15], i1471[16], i1471[17])
  i1470.m_RaycastTarget = !!i1471[18]
  i1470.m_RaycastPadding = new pc.Vec4( i1471[19], i1471[20], i1471[21], i1471[22] )
  return i1470
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.UI.Button' )
  var i1473 = data
  i1472.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1473[0], i1472.m_OnClick)
  i1472.m_Navigation = request.d('UnityEngine.UI.Navigation', i1473[1], i1472.m_Navigation)
  i1472.m_Transition = i1473[2]
  i1472.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1473[3], i1472.m_Colors)
  i1472.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1473[4], i1472.m_SpriteState)
  i1472.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1473[5], i1472.m_AnimationTriggers)
  i1472.m_Interactable = !!i1473[6]
  request.r(i1473[7], i1473[8], 0, i1472, 'm_TargetGraphic')
  return i1472
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1475 = data
  i1474.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1475[0], i1474.m_PersistentCalls)
  return i1474
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1477 = data
  var i1479 = i1477[0]
  var i1478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.add(request.d('UnityEngine.Events.PersistentCall', i1479[i + 0]));
  }
  i1476.m_Calls = i1478
  return i1476
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'm_Target')
  i1482.m_TargetAssemblyTypeName = i1483[2]
  i1482.m_MethodName = i1483[3]
  i1482.m_Mode = i1483[4]
  i1482.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1483[5], i1482.m_Arguments)
  i1482.m_CallState = i1483[6]
  return i1482
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1485 = data
  i1484.m_Mode = i1485[0]
  i1484.m_WrapAround = !!i1485[1]
  request.r(i1485[2], i1485[3], 0, i1484, 'm_SelectOnUp')
  request.r(i1485[4], i1485[5], 0, i1484, 'm_SelectOnDown')
  request.r(i1485[6], i1485[7], 0, i1484, 'm_SelectOnLeft')
  request.r(i1485[8], i1485[9], 0, i1484, 'm_SelectOnRight')
  return i1484
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1487 = data
  i1486.m_NormalColor = new pc.Color(i1487[0], i1487[1], i1487[2], i1487[3])
  i1486.m_HighlightedColor = new pc.Color(i1487[4], i1487[5], i1487[6], i1487[7])
  i1486.m_PressedColor = new pc.Color(i1487[8], i1487[9], i1487[10], i1487[11])
  i1486.m_SelectedColor = new pc.Color(i1487[12], i1487[13], i1487[14], i1487[15])
  i1486.m_DisabledColor = new pc.Color(i1487[16], i1487[17], i1487[18], i1487[19])
  i1486.m_ColorMultiplier = i1487[20]
  i1486.m_FadeDuration = i1487[21]
  return i1486
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'm_HighlightedSprite')
  request.r(i1489[2], i1489[3], 0, i1488, 'm_PressedSprite')
  request.r(i1489[4], i1489[5], 0, i1488, 'm_SelectedSprite')
  request.r(i1489[6], i1489[7], 0, i1488, 'm_DisabledSprite')
  return i1488
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1491 = data
  i1490.m_NormalTrigger = i1491[0]
  i1490.m_HighlightedTrigger = i1491[1]
  i1490.m_PressedTrigger = i1491[2]
  i1490.m_SelectedTrigger = i1491[3]
  i1490.m_DisabledTrigger = i1491[4]
  return i1490
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.Text' )
  var i1493 = data
  i1492.m_FontData = request.d('UnityEngine.UI.FontData', i1493[0], i1492.m_FontData)
  i1492.m_Text = i1493[1]
  request.r(i1493[2], i1493[3], 0, i1492, 'm_Material')
  i1492.m_Maskable = !!i1493[4]
  i1492.m_Color = new pc.Color(i1493[5], i1493[6], i1493[7], i1493[8])
  i1492.m_RaycastTarget = !!i1493[9]
  i1492.m_RaycastPadding = new pc.Vec4( i1493[10], i1493[11], i1493[12], i1493[13] )
  return i1492
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1495 = data
  request.r(i1495[0], i1495[1], 0, i1494, 'm_Font')
  i1494.m_FontSize = i1495[2]
  i1494.m_FontStyle = i1495[3]
  i1494.m_BestFit = !!i1495[4]
  i1494.m_MinSize = i1495[5]
  i1494.m_MaxSize = i1495[6]
  i1494.m_Alignment = i1495[7]
  i1494.m_AlignByGeometry = !!i1495[8]
  i1494.m_RichText = !!i1495[9]
  i1494.m_HorizontalOverflow = i1495[10]
  i1494.m_VerticalOverflow = i1495[11]
  i1494.m_LineSpacing = i1495[12]
  return i1494
}

Deserializers["TutController"] = function (request, data, root) {
  var i1496 = root || request.c( 'TutController' )
  var i1497 = data
  var i1499 = i1497[0]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1499.length; i += 2) {
    i1498.add(new pc.Vec2( i1499[i + 0], i1499[i + 1] ));
  }
  i1496.movePos = i1498
  i1496.moveTime = i1497[1]
  i1496.fromScale = i1497[2]
  i1496.toScale = i1497[3]
  i1496.scaleTime = i1497[4]
  return i1496
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1502 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1503 = data
  i1502.targetIsSelf = !!i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'targetGO')
  i1502.tweenTargetIsTargetGO = !!i1503[3]
  i1502.delay = i1503[4]
  i1502.duration = i1503[5]
  i1502.easeType = i1503[6]
  i1502.easeCurve = new pc.AnimationCurve( { keys_flow: i1503[7] } )
  i1502.loopType = i1503[8]
  i1502.loops = i1503[9]
  i1502.id = i1503[10]
  i1502.isRelative = !!i1503[11]
  i1502.isFrom = !!i1503[12]
  i1502.isIndependentUpdate = !!i1503[13]
  i1502.autoKill = !!i1503[14]
  i1502.autoGenerate = !!i1503[15]
  i1502.isActive = !!i1503[16]
  i1502.isValid = !!i1503[17]
  request.r(i1503[18], i1503[19], 0, i1502, 'target')
  i1502.animationType = i1503[20]
  i1502.targetType = i1503[21]
  i1502.forcedTargetType = i1503[22]
  i1502.autoPlay = !!i1503[23]
  i1502.useTargetAsV3 = !!i1503[24]
  i1502.endValueFloat = i1503[25]
  i1502.endValueV3 = new pc.Vec3( i1503[26], i1503[27], i1503[28] )
  i1502.endValueV2 = new pc.Vec2( i1503[29], i1503[30] )
  i1502.endValueColor = new pc.Color(i1503[31], i1503[32], i1503[33], i1503[34])
  i1502.endValueString = i1503[35]
  i1502.endValueRect = UnityEngine.Rect.MinMaxRect(i1503[36], i1503[37], i1503[38], i1503[39])
  request.r(i1503[40], i1503[41], 0, i1502, 'endValueTransform')
  i1502.optionalBool0 = !!i1503[42]
  i1502.optionalBool1 = !!i1503[43]
  i1502.optionalFloat0 = i1503[44]
  i1502.optionalInt0 = i1503[45]
  i1502.optionalRotationMode = i1503[46]
  i1502.optionalScrambleMode = i1503[47]
  i1502.optionalShakeRandomnessMode = i1503[48]
  i1502.optionalString = i1503[49]
  i1502.updateType = i1503[50]
  i1502.isSpeedBased = !!i1503[51]
  i1502.hasOnStart = !!i1503[52]
  i1502.hasOnPlay = !!i1503[53]
  i1502.hasOnUpdate = !!i1503[54]
  i1502.hasOnStepComplete = !!i1503[55]
  i1502.hasOnComplete = !!i1503[56]
  i1502.hasOnTweenCreated = !!i1503[57]
  i1502.hasOnRewind = !!i1503[58]
  i1502.onStart = request.d('UnityEngine.Events.UnityEvent', i1503[59], i1502.onStart)
  i1502.onPlay = request.d('UnityEngine.Events.UnityEvent', i1503[60], i1502.onPlay)
  i1502.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1503[61], i1502.onUpdate)
  i1502.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1503[62], i1502.onStepComplete)
  i1502.onComplete = request.d('UnityEngine.Events.UnityEvent', i1503[63], i1502.onComplete)
  i1502.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1503[64], i1502.onTweenCreated)
  i1502.onRewind = request.d('UnityEngine.Events.UnityEvent', i1503[65], i1502.onRewind)
  return i1502
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1505 = data
  i1504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1505[0], i1504.m_PersistentCalls)
  return i1504
}

Deserializers["FireTutorial"] = function (request, data, root) {
  var i1506 = root || request.c( 'FireTutorial' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'hand')
  request.r(i1507[2], i1507[3], 0, i1506, 'monsterRoot')
  request.r(i1507[4], i1507[5], 0, i1506, 'player')
  i1506.fingerOffset = new pc.Vec2( i1507[6], i1507[7] )
  i1506.swipeDistance = i1507[8]
  i1506.swipeSpeed = i1507[9]
  i1506.pulse = i1507[10]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1509 = data
  i1508.color = new pc.Color(i1509[0], i1509[1], i1509[2], i1509[3])
  request.r(i1509[4], i1509[5], 0, i1508, 'sprite')
  i1508.flipX = !!i1509[6]
  i1508.flipY = !!i1509[7]
  i1508.drawMode = i1509[8]
  i1508.size = new pc.Vec2( i1509[9], i1509[10] )
  i1508.tileMode = i1509[11]
  i1508.adaptiveModeThreshold = i1509[12]
  i1508.maskInteraction = i1509[13]
  i1508.spriteSortPoint = i1509[14]
  i1508.enabled = !!i1509[15]
  request.r(i1509[16], i1509[17], 0, i1508, 'sharedMaterial')
  var i1511 = i1509[18]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 2, i1510, '')
  }
  i1508.sharedMaterials = i1510
  i1508.receiveShadows = !!i1509[19]
  i1508.shadowCastingMode = i1509[20]
  i1508.sortingLayerID = i1509[21]
  i1508.sortingOrder = i1509[22]
  i1508.lightmapIndex = i1509[23]
  i1508.lightmapSceneIndex = i1509[24]
  i1508.lightmapScaleOffset = new pc.Vec4( i1509[25], i1509[26], i1509[27], i1509[28] )
  i1508.lightProbeUsage = i1509[29]
  i1508.reflectionProbeUsage = i1509[30]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1513 = data
  i1512.usedByComposite = !!i1513[0]
  i1512.autoTiling = !!i1513[1]
  i1512.size = new pc.Vec2( i1513[2], i1513[3] )
  i1512.edgeRadius = i1513[4]
  i1512.enabled = !!i1513[5]
  i1512.isTrigger = !!i1513[6]
  i1512.usedByEffector = !!i1513[7]
  i1512.density = i1513[8]
  i1512.offset = new pc.Vec2( i1513[9], i1513[10] )
  request.r(i1513[11], i1513[12], 0, i1512, 'material')
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1515 = data
  i1514.sortingLayerIndex = i1515[0]
  i1514.sortingOrder = i1515[1]
  i1514.sortingLayerName = i1515[2]
  i1514.enabled = !!i1515[3]
  return i1514
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1516 = root || request.c( 'PlayerController' )
  var i1517 = data
  var i1519 = i1517[0]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.add(request.d('Piece', i1519[i + 0]));
  }
  i1516.pieces = i1518
  request.r(i1517[1], i1517[2], 0, i1516, 'head')
  request.r(i1517[3], i1517[4], 0, i1516, 'deadSFX')
  i1516.maxForce = new pc.Vec2( i1517[5], i1517[6] )
  i1516.minForce = new pc.Vec2( i1517[7], i1517[8] )
  var i1521 = i1517[9]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.add(request.d('FightOption', i1521[i + 0]));
  }
  i1516.fightOptions = i1520
  request.r(i1517[10], i1517[11], 0, i1516, 'optionTut')
  request.r(i1517[12], i1517[13], 0, i1516, 'attackTut')
  i1516.fight = request.d('FightOption', i1517[14], i1516.fight)
  request.r(i1517[15], i1517[16], 0, i1516, 'clickSound')
  return i1516
}

Deserializers["Piece"] = function (request, data, root) {
  var i1524 = root || request.c( 'Piece' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'Joint')
  request.r(i1525[2], i1525[3], 0, i1524, 'Rb')
  return i1524
}

Deserializers["FightOption"] = function (request, data, root) {
  var i1528 = root || request.c( 'FightOption' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'Button')
  request.r(i1529[2], i1529[3], 0, i1528, 'Selected')
  request.r(i1529[4], i1529[5], 0, i1528, 'Controller')
  return i1528
}

Deserializers["PlayerHealth"] = function (request, data, root) {
  var i1530 = root || request.c( 'PlayerHealth' )
  var i1531 = data
  i1530.maxHP = i1531[0]
  i1530.currentHP = i1531[1]
  i1530.hitColor = new pc.Color(i1531[2], i1531[3], i1531[4], i1531[5])
  i1530.hitFlashTime = i1531[6]
  return i1530
}

Deserializers["PlayerZombie"] = function (request, data, root) {
  var i1532 = root || request.c( 'PlayerZombie' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('ZombiePart')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('ZombiePart', i1535[i + 0]));
  }
  i1532.parts = i1534
  request.r(i1533[1], i1533[2], 0, i1532, 'zombieSFX')
  i1532.loseDelay = i1533[3]
  return i1532
}

Deserializers["ZombiePart"] = function (request, data, root) {
  var i1538 = root || request.c( 'ZombiePart' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'Renderer')
  request.r(i1539[2], i1539[3], 0, i1538, 'Sprite')
  return i1538
}

Deserializers["PlayerBite"] = function (request, data, root) {
  var i1540 = root || request.c( 'PlayerBite' )
  var i1541 = data
  i1540.biteDamage = i1541[0]
  i1540.biteInterval = i1541[1]
  request.r(i1541[2], i1541[3], 0, i1540, 'biteSound')
  i1540.biteSoundInterval = i1541[4]
  return i1540
}

Deserializers["PlayerLaunch"] = function (request, data, root) {
  var i1542 = root || request.c( 'PlayerLaunch' )
  var i1543 = data
  i1542.groundMask = UnityEngine.LayerMask.FromIntegerValue( i1543[0] )
  i1542.minAirTime = i1543[1]
  i1542.maxLaunchX = i1543[2]
  i1542.recoverForceMul = i1543[3]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1545 = data
  i1544.bodyType = i1545[0]
  request.r(i1545[1], i1545[2], 0, i1544, 'material')
  i1544.simulated = !!i1545[3]
  i1544.useAutoMass = !!i1545[4]
  i1544.mass = i1545[5]
  i1544.drag = i1545[6]
  i1544.angularDrag = i1545[7]
  i1544.gravityScale = i1545[8]
  i1544.collisionDetectionMode = i1545[9]
  i1544.sleepMode = i1545[10]
  i1544.constraints = i1545[11]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1547 = data
  i1546.useLimits = !!i1547[0]
  i1546.limits = request.d('UnityEngine.JointAngleLimits2D', i1547[1], i1546.limits)
  i1546.useMotor = !!i1547[2]
  i1546.motor = request.d('UnityEngine.JointMotor2D', i1547[3], i1546.motor)
  i1546.anchor = new pc.Vec2( i1547[4], i1547[5] )
  i1546.connectedAnchor = new pc.Vec2( i1547[6], i1547[7] )
  i1546.autoConfigureConnectedAnchor = !!i1547[8]
  request.r(i1547[9], i1547[10], 0, i1546, 'connectedBody')
  i1546.breakForce = i1547[11]
  i1546.breakTorque = i1547[12]
  i1546.enableCollision = !!i1547[13]
  i1546.enabled = !!i1547[14]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1549 = data
  i1548.autoConfigureTarget = !!i1549[0]
  i1548.target = new pc.Vec2( i1549[1], i1549[2] )
  i1548.anchor = new pc.Vec2( i1549[3], i1549[4] )
  i1548.maxForce = i1549[5]
  i1548.dampingRatio = i1549[6]
  i1548.frequency = i1549[7]
  request.r(i1549[8], i1549[9], 0, i1548, 'connectedBody')
  i1548.breakForce = i1549[10]
  i1548.breakTorque = i1549[11]
  i1548.enableCollision = !!i1549[12]
  i1548.enabled = !!i1549[13]
  return i1548
}

Deserializers["SawWeapon"] = function (request, data, root) {
  var i1550 = root || request.c( 'SawWeapon' )
  var i1551 = data
  i1550.shake = i1551[0]
  i1550.raiseAngle = i1551[1]
  i1550.hitAngle = i1551[2]
  i1550.raiseTime = i1551[3]
  i1550.swingTime = i1551[4]
  i1550.followThroughTime = i1551[5]
  i1550.recoverTime = i1551[6]
  i1550.damage = i1551[7]
  i1550.knockback = !!i1551[8]
  i1550.knockX = new pc.Vec2( i1551[9], i1551[10] )
  i1550.knockY = new pc.Vec2( i1551[11], i1551[12] )
  i1550.knockSpin = i1551[13]
  request.r(i1551[14], i1551[15], 0, i1550, 'hitSound')
  i1550.maxBlood = i1551[16]
  i1550.restAngle = i1551[17]
  i1550.armGain = i1551[18]
  i1550.armMaxSpeed = i1551[19]
  i1550.armTorque = i1551[20]
  i1550.hitPadding = i1551[21]
  request.r(i1551[22], i1551[23], 0, i1550, 'bloodVFX')
  i1550.jointReferenceAngle = i1551[24]
  request.r(i1551[25], i1551[26], 0, i1550, 'attackSound')
  request.r(i1551[27], i1551[28], 0, i1550, 'spawnPrefab')
  request.r(i1551[29], i1551[30], 0, i1550, 'poolParent')
  return i1550
}

Deserializers["FlamethrowerWeapon"] = function (request, data, root) {
  var i1552 = root || request.c( 'FlamethrowerWeapon' )
  var i1553 = data
  i1552.holdAngle = i1553[0]
  request.r(i1553[1], i1553[2], 0, i1552, 'nozzle')
  var i1555 = i1553[3]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1552.frames = i1554
  i1552.frameRate = i1553[4]
  request.r(i1553[5], i1553[6], 0, i1552, 'emberSprite')
  request.r(i1553[7], i1553[8], 0, i1552, 'smokeSprite')
  i1552.minFireTime = i1553[9]
  i1552.aimTolerance = i1553[10]
  i1552.fireInterval = i1553[11]
  i1552.fireballsPerShot = i1553[12]
  i1552.soundInterval = i1553[13]
  i1552.fireballSpeed = i1553[14]
  i1552.fireballGravity = i1553[15]
  i1552.spread = i1553[16]
  i1552.fireballSize = i1553[17]
  i1552.fireballLife = i1553[18]
  i1552.hitRadius = i1553[19]
  i1552.groundY = i1553[20]
  i1552.groundFlameSize = i1553[21]
  i1552.groundFlameLife = i1553[22]
  i1552.sortingOrder = i1553[23]
  i1552.burnDamage = i1553[24]
  i1552.burnInterval = i1553[25]
  i1552.burnDuration = i1553[26]
  i1552.restAngle = i1553[27]
  i1552.armGain = i1553[28]
  i1552.armMaxSpeed = i1553[29]
  i1552.armTorque = i1553[30]
  i1552.hitPadding = i1553[31]
  request.r(i1553[32], i1553[33], 0, i1552, 'bloodVFX')
  i1552.jointReferenceAngle = i1553[34]
  request.r(i1553[35], i1553[36], 0, i1552, 'attackSound')
  request.r(i1553[37], i1553[38], 0, i1552, 'spawnPrefab')
  request.r(i1553[39], i1553[40], 0, i1552, 'poolParent')
  return i1552
}

Deserializers["BatWeapon"] = function (request, data, root) {
  var i1556 = root || request.c( 'BatWeapon' )
  var i1557 = data
  i1556.raiseAngle = i1557[0]
  i1556.hitAngle = i1557[1]
  i1556.raiseTime = i1557[2]
  i1556.swingTime = i1557[3]
  i1556.followThroughTime = i1557[4]
  i1556.recoverTime = i1557[5]
  i1556.damage = i1557[6]
  i1556.knockback = !!i1557[7]
  i1556.knockX = new pc.Vec2( i1557[8], i1557[9] )
  i1556.knockY = new pc.Vec2( i1557[10], i1557[11] )
  i1556.knockSpin = i1557[12]
  request.r(i1557[13], i1557[14], 0, i1556, 'hitSound')
  i1556.maxBlood = i1557[15]
  i1556.restAngle = i1557[16]
  i1556.armGain = i1557[17]
  i1556.armMaxSpeed = i1557[18]
  i1556.armTorque = i1557[19]
  i1556.hitPadding = i1557[20]
  request.r(i1557[21], i1557[22], 0, i1556, 'bloodVFX')
  i1556.jointReferenceAngle = i1557[23]
  request.r(i1557[24], i1557[25], 0, i1556, 'attackSound')
  request.r(i1557[26], i1557[27], 0, i1556, 'spawnPrefab')
  request.r(i1557[28], i1557[29], 0, i1556, 'poolParent')
  return i1556
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1558 = root || request.c( 'BalanceController' )
  var i1559 = data
  i1558.targetRotation = i1559[0]
  i1558.force = i1559[1]
  return i1558
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1560 = root || request.c( 'MonsterController' )
  var i1561 = data
  i1560.maxHP = i1561[0]
  i1560.currentHP = i1561[1]
  var i1563 = i1561[2]
  var i1562 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.add(request.d('Piece', i1563[i + 0]));
  }
  i1560.pieces = i1562
  request.r(i1561[3], i1561[4], 0, i1560, 'deadSFX')
  i1560.maxForce = new pc.Vec2( i1561[5], i1561[6] )
  i1560.minForce = new pc.Vec2( i1561[7], i1561[8] )
  request.r(i1561[9], i1561[10], 0, i1560, 'balance')
  i1560.isDead = !!i1561[11]
  i1560.speed = i1561[12]
  request.r(i1561[13], i1561[14], 0, i1560, 'body')
  request.r(i1561[15], i1561[16], 0, i1560, 'leftHand')
  request.r(i1561[17], i1561[18], 0, i1560, 'rightHand')
  request.r(i1561[19], i1561[20], 0, i1560, 'leftLeg')
  request.r(i1561[21], i1561[22], 0, i1560, 'rightLeg')
  i1560.groundMask = UnityEngine.LayerMask.FromIntegerValue( i1561[23] )
  i1560.minAirTime = i1561[24]
  return i1560
}

Deserializers["PowerController"] = function (request, data, root) {
  var i1564 = root || request.c( 'PowerController' )
  var i1565 = data
  var i1567 = i1565[0]
  var i1566 = new (System.Collections.Generic.List$1(Bridge.ns('PowerOption')))
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.add(request.d('PowerOption', i1567[i + 0]));
  }
  i1564.powers = i1566
  request.r(i1565[1], i1565[2], 0, i1564, 'clickSound')
  request.r(i1565[3], i1565[4], 0, i1564, 'optionTut')
  request.r(i1565[5], i1565[6], 0, i1564, 'actionTut')
  return i1564
}

Deserializers["PowerOption"] = function (request, data, root) {
  var i1570 = root || request.c( 'PowerOption' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'Button')
  request.r(i1571[2], i1571[3], 0, i1570, 'Selected')
  request.r(i1571[4], i1571[5], 0, i1570, 'Power')
  request.r(i1571[6], i1571[7], 0, i1570, 'Tutorial')
  return i1570
}

Deserializers["LightningPower"] = function (request, data, root) {
  var i1572 = root || request.c( 'LightningPower' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'strike')
  i1572.radius = i1573[2]
  i1572.damage = i1573[3]
  request.r(i1573[4], i1573[5], 0, i1572, 'useSound')
  i1572.cooldown = i1573[6]
  request.r(i1573[7], i1573[8], 0, i1572, 'container')
  return i1572
}

Deserializers["TornadoPower"] = function (request, data, root) {
  var i1574 = root || request.c( 'TornadoPower' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'funnelSprite')
  i1574.groundY = i1575[2]
  i1574.height = i1575[3]
  i1574.widthRatio = i1575[4]
  i1574.speed = i1575[5]
  i1574.liftSpeed = i1575[6]
  i1574.liftAccel = i1575[7]
  i1574.carryRatio = i1575[8]
  i1574.swirl = i1575[9]
  i1574.spin = i1575[10]
  request.r(i1575[11], i1575[12], 0, i1574, 'liftSound')
  i1574.liftSoundInterval = i1575[13]
  i1574.sortingOrder = i1575[14]
  request.r(i1575[15], i1575[16], 0, i1574, 'useSound')
  i1574.cooldown = i1575[17]
  request.r(i1575[18], i1575[19], 0, i1574, 'container')
  return i1574
}

Deserializers["FirePower"] = function (request, data, root) {
  var i1576 = root || request.c( 'FirePower' )
  var i1577 = data
  var i1579 = i1577[0]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.frames = i1578
  i1576.frameRate = i1577[1]
  i1576.spacing = i1577[2]
  i1576.igniteRadius = i1577[3]
  i1576.burnDamage = i1577[4]
  i1576.burnInterval = i1577[5]
  i1576.burnDuration = i1577[6]
  request.r(i1577[7], i1577[8], 0, i1576, 'emberSprite')
  request.r(i1577[9], i1577[10], 0, i1576, 'smokeSprite')
  i1576.secondsPerClick = i1577[11]
  request.r(i1577[12], i1577[13], 0, i1576, 'useSound')
  i1576.cooldown = i1577[14]
  request.r(i1577[15], i1577[16], 0, i1576, 'container')
  return i1576
}

Deserializers["StormPower"] = function (request, data, root) {
  var i1580 = root || request.c( 'StormPower' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'strike')
  request.r(i1581[2], i1581[3], 0, i1580, 'rain')
  request.r(i1581[4], i1581[5], 0, i1580, 'monsterRoot')
  i1580.duration = i1581[6]
  i1580.strikeInterval = new pc.Vec2( i1581[7], i1581[8] )
  i1580.radius = i1581[9]
  i1580.damage = i1581[10]
  i1580.darkAlpha = i1581[11]
  i1580.groundY = i1581[12]
  i1580.targetMonsterChance = i1581[13]
  request.r(i1581[14], i1581[15], 0, i1580, 'useSound')
  i1580.cooldown = i1581[16]
  request.r(i1581[17], i1581[18], 0, i1580, 'container')
  return i1580
}

Deserializers["GameController"] = function (request, data, root) {
  var i1582 = root || request.c( 'GameController' )
  var i1583 = data
  i1582.OnStart = request.d('System.Action', i1583[0], i1582.OnStart)
  i1582.OnClick = request.d('System.Action', i1583[1], i1582.OnClick)
  i1582.OnGameOver = request.d('System.Action', i1583[2], i1582.OnGameOver)
  i1582.OnGameComplete = request.d('System.Action', i1583[3], i1582.OnGameComplete)
  request.r(i1583[4], i1583[5], 0, i1582, 'startScene')
  request.r(i1583[6], i1583[7], 0, i1582, 'buttonFight')
  request.r(i1583[8], i1583[9], 0, i1582, 'buttonDefense')
  request.r(i1583[10], i1583[11], 0, i1582, 'clickSound')
  request.r(i1583[12], i1583[13], 0, i1582, 'fightOptions')
  request.r(i1583[14], i1583[15], 0, i1582, 'tut')
  request.r(i1583[16], i1583[17], 0, i1582, 'defenseOptions')
  request.r(i1583[18], i1583[19], 0, i1582, 'defense')
  request.r(i1583[20], i1583[21], 0, i1582, 'endScene')
  request.r(i1583[22], i1583[23], 0, i1582, 'completeScene')
  request.r(i1583[24], i1583[25], 0, i1582, 'gameOverScene')
  request.r(i1583[26], i1583[27], 0, i1582, 'player')
  i1582.numMonster = i1583[28]
  request.r(i1583[29], i1583[30], 0, i1582, 'world')
  return i1582
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1584 = root || request.c( 'System.Action' )
  var i1585 = data
  return i1584
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1586 = root || request.c( 'LayoutController' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'main')
  request.r(i1587[2], i1587[3], 0, i1586, 'fight')
  request.r(i1587[4], i1587[5], 0, i1586, 'defense')
  return i1586
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1588 = root || request.c( 'LunaController' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'BGTexture')
  i1588.UseTime = !!i1589[2]
  i1588.TimePlay = i1589[3]
  i1588.UseCountPlay = !!i1589[4]
  i1588.MaxCountPlay = i1589[5]
  request.r(i1589[6], i1589[7], 0, i1588, 'BGImage')
  var i1591 = i1589[8]
  var i1590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 1, i1590, '')
  }
  i1588.CTA = i1590
  i1588.count = i1589[9]
  request.r(i1589[10], i1589[11], 0, i1588, 'endCard')
  return i1588
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1594 = root || request.c( 'AudioController' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'BGM')
  request.r(i1595[2], i1595[3], 0, i1594, 'musicSource')
  request.r(i1595[4], i1595[5], 0, i1594, 'pool')
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'clip')
  request.r(i1597[2], i1597[3], 0, i1596, 'outputAudioMixerGroup')
  i1596.playOnAwake = !!i1597[4]
  i1596.loop = !!i1597[5]
  i1596.time = i1597[6]
  i1596.volume = i1597[7]
  i1596.pitch = i1597[8]
  i1596.enabled = !!i1597[9]
  return i1596
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1598 = root || request.c( 'VFXController' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'poolParent')
  return i1598
}

Deserializers["ScreenFx"] = function (request, data, root) {
  var i1600 = root || request.c( 'ScreenFx' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'dark')
  request.r(i1601[2], i1601[3], 0, i1600, 'flash')
  return i1600
}

Deserializers["LightningStrike"] = function (request, data, root) {
  var i1602 = root || request.c( 'LightningStrike' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'segmentSprite')
  i1602.coreColor = new pc.Color(i1603[2], i1603[3], i1603[4], i1603[5])
  i1602.glowColor = new pc.Color(i1603[6], i1603[7], i1603[8], i1603[9])
  i1602.coreWidth = i1603[10]
  i1602.glowWidth = i1603[11]
  i1602.mainSegments = i1603[12]
  i1602.branchSegments = i1603[13]
  i1602.branches = i1603[14]
  i1602.jitter = i1603[15]
  i1602.sortingOrder = i1603[16]
  i1602.flashStrength = i1603[17]
  i1602.groundY = i1603[18]
  request.r(i1603[19], i1603[20], 0, i1602, 'strikeSound')
  i1602.shakeDuration = i1603[21]
  i1602.shakeStrength = i1603[22]
  return i1602
}

Deserializers["RainEffect"] = function (request, data, root) {
  var i1604 = root || request.c( 'RainEffect' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'dropSprite')
  i1604.maxDrops = i1605[2]
  i1604.velocity = new pc.Vec2( i1605[3], i1605[4] )
  i1604.dropSize = new pc.Vec2( i1605[5], i1605[6] )
  i1604.color = new pc.Color(i1605[7], i1605[8], i1605[9], i1605[10])
  i1604.groundY = i1605[11]
  i1604.fadeIn = i1605[12]
  i1604.fadeOut = i1605[13]
  i1604.sortingOrder = i1605[14]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1607 = data
  i1606.ambientIntensity = i1607[0]
  i1606.reflectionIntensity = i1607[1]
  i1606.ambientMode = i1607[2]
  i1606.ambientLight = new pc.Color(i1607[3], i1607[4], i1607[5], i1607[6])
  i1606.ambientSkyColor = new pc.Color(i1607[7], i1607[8], i1607[9], i1607[10])
  i1606.ambientGroundColor = new pc.Color(i1607[11], i1607[12], i1607[13], i1607[14])
  i1606.ambientEquatorColor = new pc.Color(i1607[15], i1607[16], i1607[17], i1607[18])
  i1606.fogColor = new pc.Color(i1607[19], i1607[20], i1607[21], i1607[22])
  i1606.fogEndDistance = i1607[23]
  i1606.fogStartDistance = i1607[24]
  i1606.fogDensity = i1607[25]
  i1606.fog = !!i1607[26]
  request.r(i1607[27], i1607[28], 0, i1606, 'skybox')
  i1606.fogMode = i1607[29]
  var i1609 = i1607[30]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1609[i + 0]) );
  }
  i1606.lightmaps = i1608
  i1606.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1607[31], i1606.lightProbes)
  i1606.lightmapsMode = i1607[32]
  i1606.mixedBakeMode = i1607[33]
  i1606.environmentLightingMode = i1607[34]
  i1606.ambientProbe = new pc.SphericalHarmonicsL2(i1607[35])
  request.r(i1607[36], i1607[37], 0, i1606, 'customReflection')
  request.r(i1607[38], i1607[39], 0, i1606, 'defaultReflection')
  i1606.defaultReflectionMode = i1607[40]
  i1606.defaultReflectionResolution = i1607[41]
  i1606.sunLightObjectId = i1607[42]
  i1606.pixelLightCount = i1607[43]
  i1606.defaultReflectionHDR = !!i1607[44]
  i1606.hasLightDataAsset = !!i1607[45]
  i1606.hasManualGenerate = !!i1607[46]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'lightmapColor')
  request.r(i1613[2], i1613[3], 0, i1612, 'lightmapDirection')
  request.r(i1613[4], i1613[5], 0, i1612, 'shadowMask')
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1614 = root || new UnityEngine.LightProbes()
  var i1615 = data
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1623 = data
  var i1625 = i1623[0]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1625[i + 0]));
  }
  i1622.ShaderCompilationErrors = i1624
  i1622.name = i1623[1]
  i1622.guid = i1623[2]
  var i1627 = i1623[3]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( i1627[i + 0] );
  }
  i1622.shaderDefinedKeywords = i1626
  var i1629 = i1623[4]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1629[i + 0]) );
  }
  i1622.passes = i1628
  var i1631 = i1623[5]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1631[i + 0]) );
  }
  i1622.usePasses = i1630
  var i1633 = i1623[6]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1633[i + 0]) );
  }
  i1622.defaultParameterValues = i1632
  request.r(i1623[7], i1623[8], 0, i1622, 'unityFallbackShader')
  i1622.readDepth = !!i1623[9]
  i1622.hasDepthOnlyPass = !!i1623[10]
  i1622.isCreatedByShaderGraph = !!i1623[11]
  i1622.disableBatching = !!i1623[12]
  i1622.compiled = !!i1623[13]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1637 = data
  i1636.shaderName = i1637[0]
  i1636.errorMessage = i1637[1]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1642 = root || new pc.UnityShaderPass()
  var i1643 = data
  i1642.id = i1643[0]
  i1642.subShaderIndex = i1643[1]
  i1642.name = i1643[2]
  i1642.passType = i1643[3]
  i1642.grabPassTextureName = i1643[4]
  i1642.usePass = !!i1643[5]
  i1642.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[6], i1642.zTest)
  i1642.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[7], i1642.zWrite)
  i1642.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[8], i1642.culling)
  i1642.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1643[9], i1642.blending)
  i1642.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1643[10], i1642.alphaBlending)
  i1642.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[11], i1642.colorWriteMask)
  i1642.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[12], i1642.offsetUnits)
  i1642.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[13], i1642.offsetFactor)
  i1642.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[14], i1642.stencilRef)
  i1642.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[15], i1642.stencilReadMask)
  i1642.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[16], i1642.stencilWriteMask)
  i1642.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1643[17], i1642.stencilOp)
  i1642.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1643[18], i1642.stencilOpFront)
  i1642.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1643[19], i1642.stencilOpBack)
  var i1645 = i1643[20]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1645[i + 0]) );
  }
  i1642.tags = i1644
  var i1647 = i1643[21]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( i1647[i + 0] );
  }
  i1642.passDefinedKeywords = i1646
  var i1649 = i1643[22]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1649[i + 0]) );
  }
  i1642.passDefinedKeywordGroups = i1648
  var i1651 = i1643[23]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1651[i + 0]) );
  }
  i1642.variants = i1650
  var i1653 = i1643[24]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1653[i + 0]) );
  }
  i1642.excludedVariants = i1652
  i1642.hasDepthReader = !!i1643[25]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1655 = data
  i1654.val = i1655[0]
  i1654.name = i1655[1]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1657 = data
  i1656.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1657[0], i1656.src)
  i1656.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1657[1], i1656.dst)
  i1656.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1657[2], i1656.op)
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1659 = data
  i1658.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1659[0], i1658.pass)
  i1658.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1659[1], i1658.fail)
  i1658.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1659[2], i1658.zFail)
  i1658.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1659[3], i1658.comp)
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.value = i1663[1]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1666.keywords = i1668
  i1666.hasDiscard = !!i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1673 = data
  i1672.passId = i1673[0]
  i1672.subShaderIndex = i1673[1]
  var i1675 = i1673[2]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( i1675[i + 0] );
  }
  i1672.keywords = i1674
  i1672.vertexProgram = i1673[3]
  i1672.fragmentProgram = i1673[4]
  i1672.exportedForWebGl2 = !!i1673[5]
  i1672.readDepth = !!i1673[6]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'shader')
  i1678.pass = i1679[2]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.type = i1683[1]
  i1682.value = new pc.Vec4( i1683[2], i1683[3], i1683[4], i1683[5] )
  i1682.textureValue = i1683[6]
  i1682.shaderPropertyFlag = i1683[7]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1685 = data
  i1684.name = i1685[0]
  request.r(i1685[1], i1685[2], 0, i1684, 'texture')
  i1684.aabb = i1685[3]
  i1684.vertices = i1685[4]
  i1684.triangles = i1685[5]
  i1684.textureRect = UnityEngine.Rect.MinMaxRect(i1685[6], i1685[7], i1685[8], i1685[9])
  i1684.packedRect = UnityEngine.Rect.MinMaxRect(i1685[10], i1685[11], i1685[12], i1685[13])
  i1684.border = new pc.Vec4( i1685[14], i1685[15], i1685[16], i1685[17] )
  i1684.transparency = i1685[18]
  i1684.bounds = i1685[19]
  i1684.pixelsPerUnit = i1685[20]
  i1684.textureWidth = i1685[21]
  i1684.textureHeight = i1685[22]
  i1684.nativeSize = new pc.Vec2( i1685[23], i1685[24] )
  i1684.pivot = new pc.Vec2( i1685[25], i1685[26] )
  i1684.textureRectOffset = new pc.Vec2( i1685[27], i1685[28] )
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1687 = data
  i1686.name = i1687[0]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.ascent = i1689[1]
  i1688.originalLineHeight = i1689[2]
  i1688.fontSize = i1689[3]
  var i1691 = i1689[4]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1691[i + 0]) );
  }
  i1688.characterInfo = i1690
  request.r(i1689[5], i1689[6], 0, i1688, 'texture')
  i1688.originalFontSize = i1689[7]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1695 = data
  i1694.index = i1695[0]
  i1694.advance = i1695[1]
  i1694.bearing = i1695[2]
  i1694.glyphWidth = i1695[3]
  i1694.glyphHeight = i1695[4]
  i1694.minX = i1695[5]
  i1694.maxX = i1695[6]
  i1694.minY = i1695[7]
  i1694.maxY = i1695[8]
  i1694.uvBottomLeftX = i1695[9]
  i1694.uvBottomLeftY = i1695[10]
  i1694.uvBottomRightX = i1695[11]
  i1694.uvBottomRightY = i1695[12]
  i1694.uvTopLeftX = i1695[13]
  i1694.uvTopLeftY = i1695[14]
  i1694.uvTopRightX = i1695[15]
  i1694.uvTopRightY = i1695[16]
  return i1694
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1697 = data
  i1696.useSafeMode = !!i1697[0]
  i1696.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1697[1], i1696.safeModeOptions)
  i1696.timeScale = i1697[2]
  i1696.unscaledTimeScale = i1697[3]
  i1696.useSmoothDeltaTime = !!i1697[4]
  i1696.maxSmoothUnscaledTime = i1697[5]
  i1696.rewindCallbackMode = i1697[6]
  i1696.showUnityEditorReport = !!i1697[7]
  i1696.logBehaviour = i1697[8]
  i1696.drawGizmos = !!i1697[9]
  i1696.defaultRecyclable = !!i1697[10]
  i1696.defaultAutoPlay = i1697[11]
  i1696.defaultUpdateType = i1697[12]
  i1696.defaultTimeScaleIndependent = !!i1697[13]
  i1696.defaultEaseType = i1697[14]
  i1696.defaultEaseOvershootOrAmplitude = i1697[15]
  i1696.defaultEasePeriod = i1697[16]
  i1696.defaultAutoKill = !!i1697[17]
  i1696.defaultLoopType = i1697[18]
  i1696.debugMode = !!i1697[19]
  i1696.debugStoreTargetId = !!i1697[20]
  i1696.showPreviewPanel = !!i1697[21]
  i1696.storeSettingsLocation = i1697[22]
  i1696.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1697[23], i1696.modules)
  i1696.createASMDEF = !!i1697[24]
  i1696.showPlayingTweens = !!i1697[25]
  i1696.showPausedTweens = !!i1697[26]
  return i1696
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1698 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1699 = data
  i1698.logBehaviour = i1699[0]
  i1698.nestedTweenFailureBehaviour = i1699[1]
  return i1698
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1701 = data
  i1700.showPanel = !!i1701[0]
  i1700.audioEnabled = !!i1701[1]
  i1700.physicsEnabled = !!i1701[2]
  i1700.physics2DEnabled = !!i1701[3]
  i1700.spriteEnabled = !!i1701[4]
  i1700.uiEnabled = !!i1701[5]
  i1700.textMeshProEnabled = !!i1701[6]
  i1700.tk2DEnabled = !!i1701[7]
  i1700.deAudioEnabled = !!i1701[8]
  i1700.deUnityExtendedEnabled = !!i1701[9]
  i1700.epoOutlineEnabled = !!i1701[10]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1703 = data
  var i1705 = i1703[0]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1705[i + 0]) );
  }
  i1702.files = i1704
  i1702.componentToPrefabIds = i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1709 = data
  i1708.path = i1709[0]
  request.r(i1709[1], i1709[2], 0, i1708, 'unityObject')
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1711 = data
  var i1713 = i1711[0]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1713[i + 0]) );
  }
  i1710.scriptsExecutionOrder = i1712
  var i1715 = i1711[1]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1715[i + 0]) );
  }
  i1710.sortingLayers = i1714
  var i1717 = i1711[2]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1717[i + 0]) );
  }
  i1710.cullingLayers = i1716
  i1710.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1711[3], i1710.timeSettings)
  i1710.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1711[4], i1710.physicsSettings)
  i1710.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1711[5], i1710.physics2DSettings)
  i1710.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1711[6], i1710.qualitySettings)
  i1710.enableRealtimeShadows = !!i1711[7]
  i1710.enableAutoInstancing = !!i1711[8]
  i1710.enableStaticBatching = !!i1711[9]
  i1710.enableDynamicBatching = !!i1711[10]
  i1710.usePreservativeDynamicBatching = !!i1711[11]
  i1710.lightmapEncodingQuality = i1711[12]
  i1710.desiredColorSpace = i1711[13]
  var i1719 = i1711[14]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1710.allTags = i1718
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1723 = data
  i1722.name = i1723[0]
  i1722.value = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1727 = data
  i1726.id = i1727[0]
  i1726.name = i1727[1]
  i1726.value = i1727[2]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1731 = data
  i1730.id = i1731[0]
  i1730.name = i1731[1]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1733 = data
  i1732.fixedDeltaTime = i1733[0]
  i1732.maximumDeltaTime = i1733[1]
  i1732.timeScale = i1733[2]
  i1732.maximumParticleTimestep = i1733[3]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1735 = data
  i1734.gravity = new pc.Vec3( i1735[0], i1735[1], i1735[2] )
  i1734.defaultSolverIterations = i1735[3]
  i1734.bounceThreshold = i1735[4]
  i1734.autoSyncTransforms = !!i1735[5]
  i1734.autoSimulation = !!i1735[6]
  var i1737 = i1735[7]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1737[i + 0]) );
  }
  i1734.collisionMatrix = i1736
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1741 = data
  i1740.enabled = !!i1741[0]
  i1740.layerId = i1741[1]
  i1740.otherLayerId = i1741[2]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'material')
  i1742.gravity = new pc.Vec2( i1743[2], i1743[3] )
  i1742.positionIterations = i1743[4]
  i1742.velocityIterations = i1743[5]
  i1742.velocityThreshold = i1743[6]
  i1742.maxLinearCorrection = i1743[7]
  i1742.maxAngularCorrection = i1743[8]
  i1742.maxTranslationSpeed = i1743[9]
  i1742.maxRotationSpeed = i1743[10]
  i1742.baumgarteScale = i1743[11]
  i1742.baumgarteTOIScale = i1743[12]
  i1742.timeToSleep = i1743[13]
  i1742.linearSleepTolerance = i1743[14]
  i1742.angularSleepTolerance = i1743[15]
  i1742.defaultContactOffset = i1743[16]
  i1742.autoSimulation = !!i1743[17]
  i1742.queriesHitTriggers = !!i1743[18]
  i1742.queriesStartInColliders = !!i1743[19]
  i1742.callbacksOnDisable = !!i1743[20]
  i1742.reuseCollisionCallbacks = !!i1743[21]
  i1742.autoSyncTransforms = !!i1743[22]
  var i1745 = i1743[23]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1745[i + 0]) );
  }
  i1742.collisionMatrix = i1744
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.layerId = i1749[1]
  i1748.otherLayerId = i1749[2]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1753[i + 0]) );
  }
  i1750.qualityLevels = i1752
  var i1755 = i1751[1]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( i1755[i + 0] );
  }
  i1750.names = i1754
  i1750.shadows = i1751[2]
  i1750.anisotropicFiltering = i1751[3]
  i1750.antiAliasing = i1751[4]
  i1750.lodBias = i1751[5]
  i1750.shadowCascades = i1751[6]
  i1750.shadowDistance = i1751[7]
  i1750.shadowmaskMode = i1751[8]
  i1750.shadowProjection = i1751[9]
  i1750.shadowResolution = i1751[10]
  i1750.softParticles = !!i1751[11]
  i1750.softVegetation = !!i1751[12]
  i1750.activeColorSpace = i1751[13]
  i1750.desiredColorSpace = i1751[14]
  i1750.masterTextureLimit = i1751[15]
  i1750.maxQueuedFrames = i1751[16]
  i1750.particleRaycastBudget = i1751[17]
  i1750.pixelLightCount = i1751[18]
  i1750.realtimeReflectionProbes = !!i1751[19]
  i1750.shadowCascade2Split = i1751[20]
  i1750.shadowCascade4Split = new pc.Vec3( i1751[21], i1751[22], i1751[23] )
  i1750.streamingMipmapsActive = !!i1751[24]
  i1750.vSyncCount = i1751[25]
  i1750.asyncUploadBufferSize = i1751[26]
  i1750.asyncUploadTimeSlice = i1751[27]
  i1750.billboardsFaceCameraPosition = !!i1751[28]
  i1750.shadowNearPlaneOffset = i1751[29]
  i1750.streamingMipmapsMemoryBudget = i1751[30]
  i1750.maximumLODLevel = i1751[31]
  i1750.streamingMipmapsAddAllCameras = !!i1751[32]
  i1750.streamingMipmapsMaxLevelReduction = i1751[33]
  i1750.streamingMipmapsRenderersPerFrame = i1751[34]
  i1750.resolutionScalingFixedDPIFactor = i1751[35]
  i1750.streamingMipmapsMaxFileIORequests = i1751[36]
  i1750.currentQualityLevel = i1751[37]
  return i1750
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'm_ObjectArgument')
  i1758.m_ObjectArgumentAssemblyTypeName = i1759[2]
  i1758.m_IntArgument = i1759[3]
  i1758.m_FloatArgument = i1759[4]
  i1758.m_StringArgument = i1759[5]
  i1758.m_BoolArgument = !!i1759[6]
  return i1758
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[5],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[33],"79":[33],"80":[33],"81":[33],"82":[33],"83":[33],"32":[33],"84":[33],"85":[33],"34":[33],"86":[33],"87":[33],"88":[33],"89":[5],"90":[91],"92":[93],"94":[93],"13":[12],"42":[40],"40":[31],"43":[31],"95":[28],"96":[5],"97":[98],"99":[12],"100":[16,12],"101":[91],"102":[16,12],"103":[12],"104":[12],"105":[91,12],"106":[12,16],"107":[108],"109":[108],"110":[108],"111":[12],"112":[12],"15":[13],"20":[16,12],"19":[12],"14":[13],"113":[12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[12],"119":[12],"120":[12],"121":[12],"17":[16,12],"122":[12],"123":[12],"124":[12],"125":[12],"23":[16,12],"126":[12],"127":[10],"128":[10],"11":[10],"129":[10],"130":[5],"131":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraShake","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","FireTutorial","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","SawWeapon","FlamethrowerWeapon","BatWeapon","UnityEngine.GameObject","PlayerHealth","PlayerZombie","PlayerBite","PlayerLaunch","BalanceController","MonsterController","PowerController","LightningPower","TornadoPower","FirePower","StormPower","LightningStrike","RainEffect","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","ScreenFx","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "11/04/2026 07:07:47";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_PSF_V02_YenTTH";

Deserializers.lunaAppID = "43647";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1773";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4434";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "48087215-0af3-4077-97af-9d8c929b0f24";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

