var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.JointSpring' )
  var i1417 = data
  i1416.spring = i1417[0]
  i1416.damper = i1417[1]
  i1416.targetPosition = i1417[2]
  return i1416
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.JointMotor' )
  var i1419 = data
  i1418.m_TargetVelocity = i1419[0]
  i1418.m_Force = i1419[1]
  i1418.m_FreeSpin = i1419[2]
  return i1418
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.JointLimits' )
  var i1421 = data
  i1420.m_Min = i1421[0]
  i1420.m_Max = i1421[1]
  i1420.m_Bounciness = i1421[2]
  i1420.m_BounceMinVelocity = i1421[3]
  i1420.m_ContactDistance = i1421[4]
  i1420.minBounce = i1421[5]
  i1420.maxBounce = i1421[6]
  return i1420
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointDrive' )
  var i1423 = data
  i1422.m_PositionSpring = i1423[0]
  i1422.m_PositionDamper = i1423[1]
  i1422.m_MaximumForce = i1423[2]
  i1422.m_UseAcceleration = i1423[3]
  return i1422
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1425 = data
  i1424.m_Spring = i1425[0]
  i1424.m_Damper = i1425[1]
  return i1424
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1427 = data
  i1426.m_Limit = i1427[0]
  i1426.m_Bounciness = i1427[1]
  i1426.m_ContactDistance = i1427[2]
  return i1426
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1429 = data
  i1428.m_ExtremumSlip = i1429[0]
  i1428.m_ExtremumValue = i1429[1]
  i1428.m_AsymptoteSlip = i1429[2]
  i1428.m_AsymptoteValue = i1429[3]
  i1428.m_Stiffness = i1429[4]
  return i1428
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1431 = data
  i1430.m_LowerAngle = i1431[0]
  i1430.m_UpperAngle = i1431[1]
  return i1430
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1433 = data
  i1432.m_MotorSpeed = i1433[0]
  i1432.m_MaximumMotorTorque = i1433[1]
  return i1432
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1435 = data
  i1434.m_DampingRatio = i1435[0]
  i1434.m_Frequency = i1435[1]
  i1434.m_Angle = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1437 = data
  i1436.m_LowerTranslation = i1437[0]
  i1436.m_UpperTranslation = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1438 = root || new pc.UnityMaterial()
  var i1439 = data
  i1438.name = i1439[0]
  request.r(i1439[1], i1439[2], 0, i1438, 'shader')
  i1438.renderQueue = i1439[3]
  i1438.enableInstancing = !!i1439[4]
  var i1441 = i1439[5]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1441[i + 0]) );
  }
  i1438.floatParameters = i1440
  var i1443 = i1439[6]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1443[i + 0]) );
  }
  i1438.colorParameters = i1442
  var i1445 = i1439[7]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1445[i + 0]) );
  }
  i1438.vectorParameters = i1444
  var i1447 = i1439[8]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1447[i + 0]) );
  }
  i1438.textureParameters = i1446
  var i1449 = i1439[9]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1449[i + 0]) );
  }
  i1438.materialFlags = i1448
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1453 = data
  i1452.name = i1453[0]
  i1452.value = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = new pc.Color(i1457[1], i1457[2], i1457[3], i1457[4])
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = new pc.Vec4( i1461[1], i1461[2], i1461[3], i1461[4] )
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1465 = data
  i1464.name = i1465[0]
  request.r(i1465[1], i1465[2], 0, i1464, 'value')
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.enabled = !!i1469[1]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.width = i1471[1]
  i1470.height = i1471[2]
  i1470.mipmapCount = i1471[3]
  i1470.anisoLevel = i1471[4]
  i1470.filterMode = i1471[5]
  i1470.hdr = !!i1471[6]
  i1470.format = i1471[7]
  i1470.wrapMode = i1471[8]
  i1470.alphaIsTransparency = !!i1471[9]
  i1470.alphaSource = i1471[10]
  i1470.graphicsFormat = i1471[11]
  i1470.sRGBTexture = !!i1471[12]
  i1470.desiredColorSpace = i1471[13]
  i1470.wrapU = i1471[14]
  i1470.wrapV = i1471[15]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1473 = data
  i1472.position = new pc.Vec3( i1473[0], i1473[1], i1473[2] )
  i1472.scale = new pc.Vec3( i1473[3], i1473[4], i1473[5] )
  i1472.rotation = new pc.Quat(i1473[6], i1473[7], i1473[8], i1473[9])
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1475 = data
  i1474.color = new pc.Color(i1475[0], i1475[1], i1475[2], i1475[3])
  request.r(i1475[4], i1475[5], 0, i1474, 'sprite')
  i1474.flipX = !!i1475[6]
  i1474.flipY = !!i1475[7]
  i1474.drawMode = i1475[8]
  i1474.size = new pc.Vec2( i1475[9], i1475[10] )
  i1474.tileMode = i1475[11]
  i1474.adaptiveModeThreshold = i1475[12]
  i1474.maskInteraction = i1475[13]
  i1474.spriteSortPoint = i1475[14]
  i1474.enabled = !!i1475[15]
  request.r(i1475[16], i1475[17], 0, i1474, 'sharedMaterial')
  var i1477 = i1475[18]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 2) {
  request.r(i1477[i + 0], i1477[i + 1], 2, i1476, '')
  }
  i1474.sharedMaterials = i1476
  i1474.receiveShadows = !!i1475[19]
  i1474.shadowCastingMode = i1475[20]
  i1474.sortingLayerID = i1475[21]
  i1474.sortingOrder = i1475[22]
  i1474.lightmapIndex = i1475[23]
  i1474.lightmapSceneIndex = i1475[24]
  i1474.lightmapScaleOffset = new pc.Vec4( i1475[25], i1475[26], i1475[27], i1475[28] )
  i1474.lightProbeUsage = i1475[29]
  i1474.reflectionProbeUsage = i1475[30]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1481 = data
  i1480.bodyType = i1481[0]
  request.r(i1481[1], i1481[2], 0, i1480, 'material')
  i1480.simulated = !!i1481[3]
  i1480.useAutoMass = !!i1481[4]
  i1480.mass = i1481[5]
  i1480.drag = i1481[6]
  i1480.angularDrag = i1481[7]
  i1480.gravityScale = i1481[8]
  i1480.collisionDetectionMode = i1481[9]
  i1480.sleepMode = i1481[10]
  i1480.constraints = i1481[11]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.tagId = i1483[1]
  i1482.enabled = !!i1483[2]
  i1482.isStatic = !!i1483[3]
  i1482.layer = i1483[4]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1485 = data
  i1484.radius = i1485[0]
  i1484.enabled = !!i1485[1]
  i1484.isTrigger = !!i1485[2]
  i1484.usedByEffector = !!i1485[3]
  i1484.density = i1485[4]
  i1484.offset = new pc.Vec2( i1485[5], i1485[6] )
  request.r(i1485[7], i1485[8], 0, i1484, 'material')
  return i1484
}

Deserializers["BombController"] = function (request, data, root) {
  var i1486 = root || request.c( 'BombController' )
  var i1487 = data
  i1486.damage = i1487[0]
  i1486.layer = UnityEngine.LayerMask.FromIntegerValue( i1487[1] )
  request.r(i1487[2], i1487[3], 0, i1486, 'startSound')
  request.r(i1487[4], i1487[5], 0, i1486, 'actionSound')
  i1486.delay = i1487[6]
  request.r(i1487[7], i1487[8], 0, i1486, 'anim')
  request.r(i1487[9], i1487[10], 0, i1486, 'vfx1')
  request.r(i1487[11], i1487[12], 0, i1486, 'vfx2')
  i1486.scale = i1487[13]
  i1486.radius = i1487[14]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'animatorController')
  request.r(i1489[2], i1489[3], 0, i1488, 'avatar')
  i1488.updateMode = i1489[4]
  i1488.hasTransformHierarchy = !!i1489[5]
  i1488.applyRootMotion = !!i1489[6]
  var i1491 = i1489[7]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 2) {
  request.r(i1491[i + 0], i1491[i + 1], 2, i1490, '')
  }
  i1488.humanBones = i1490
  i1488.enabled = !!i1489[8]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1495 = data
  i1494.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1495[0], i1494.main)
  i1494.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1495[1], i1494.colorBySpeed)
  i1494.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1495[2], i1494.colorOverLifetime)
  i1494.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1495[3], i1494.emission)
  i1494.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1495[4], i1494.rotationBySpeed)
  i1494.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1495[5], i1494.rotationOverLifetime)
  i1494.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1495[6], i1494.shape)
  i1494.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1495[7], i1494.sizeBySpeed)
  i1494.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1495[8], i1494.sizeOverLifetime)
  i1494.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1495[9], i1494.textureSheetAnimation)
  i1494.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1495[10], i1494.velocityOverLifetime)
  i1494.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1495[11], i1494.noise)
  i1494.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1495[12], i1494.inheritVelocity)
  i1494.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1495[13], i1494.forceOverLifetime)
  i1494.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1495[14], i1494.limitVelocityOverLifetime)
  i1494.useAutoRandomSeed = !!i1495[15]
  i1494.randomSeed = i1495[16]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1496 = root || new pc.ParticleSystemMain()
  var i1497 = data
  i1496.duration = i1497[0]
  i1496.loop = !!i1497[1]
  i1496.prewarm = !!i1497[2]
  i1496.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[3], i1496.startDelay)
  i1496.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[4], i1496.startLifetime)
  i1496.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[5], i1496.startSpeed)
  i1496.startSize3D = !!i1497[6]
  i1496.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[7], i1496.startSizeX)
  i1496.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[8], i1496.startSizeY)
  i1496.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[9], i1496.startSizeZ)
  i1496.startRotation3D = !!i1497[10]
  i1496.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[11], i1496.startRotationX)
  i1496.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[12], i1496.startRotationY)
  i1496.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[13], i1496.startRotationZ)
  i1496.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1497[14], i1496.startColor)
  i1496.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[15], i1496.gravityModifier)
  i1496.simulationSpace = i1497[16]
  request.r(i1497[17], i1497[18], 0, i1496, 'customSimulationSpace')
  i1496.simulationSpeed = i1497[19]
  i1496.useUnscaledTime = !!i1497[20]
  i1496.scalingMode = i1497[21]
  i1496.playOnAwake = !!i1497[22]
  i1496.maxParticles = i1497[23]
  i1496.emitterVelocityMode = i1497[24]
  i1496.stopAction = i1497[25]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1498 = root || new pc.MinMaxCurve()
  var i1499 = data
  i1498.mode = i1499[0]
  i1498.curveMin = new pc.AnimationCurve( { keys_flow: i1499[1] } )
  i1498.curveMax = new pc.AnimationCurve( { keys_flow: i1499[2] } )
  i1498.curveMultiplier = i1499[3]
  i1498.constantMin = i1499[4]
  i1498.constantMax = i1499[5]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1500 = root || new pc.MinMaxGradient()
  var i1501 = data
  i1500.mode = i1501[0]
  i1500.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1501[1], i1500.gradientMin)
  i1500.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1501[2], i1500.gradientMax)
  i1500.colorMin = new pc.Color(i1501[3], i1501[4], i1501[5], i1501[6])
  i1500.colorMax = new pc.Color(i1501[7], i1501[8], i1501[9], i1501[10])
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1503 = data
  i1502.mode = i1503[0]
  var i1505 = i1503[1]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1505[i + 0]) );
  }
  i1502.colorKeys = i1504
  var i1507 = i1503[2]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1507[i + 0]) );
  }
  i1502.alphaKeys = i1506
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1508 = root || new pc.ParticleSystemColorBySpeed()
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1509[1], i1508.color)
  i1508.range = new pc.Vec2( i1509[2], i1509[3] )
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1513 = data
  i1512.color = new pc.Color(i1513[0], i1513[1], i1513[2], i1513[3])
  i1512.time = i1513[4]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1517 = data
  i1516.alpha = i1517[0]
  i1516.time = i1517[1]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1518 = root || new pc.ParticleSystemColorOverLifetime()
  var i1519 = data
  i1518.enabled = !!i1519[0]
  i1518.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1519[1], i1518.color)
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1520 = root || new pc.ParticleSystemEmitter()
  var i1521 = data
  i1520.enabled = !!i1521[0]
  i1520.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1521[1], i1520.rateOverTime)
  i1520.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1521[2], i1520.rateOverDistance)
  var i1523 = i1521[3]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1523[i + 0]) );
  }
  i1520.bursts = i1522
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1526 = root || new pc.ParticleSystemBurst()
  var i1527 = data
  i1526.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[0], i1526.count)
  i1526.cycleCount = i1527[1]
  i1526.minCount = i1527[2]
  i1526.maxCount = i1527[3]
  i1526.repeatInterval = i1527[4]
  i1526.time = i1527[5]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1528 = root || new pc.ParticleSystemRotationBySpeed()
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[1], i1528.x)
  i1528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[2], i1528.y)
  i1528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[3], i1528.z)
  i1528.separateAxes = !!i1529[4]
  i1528.range = new pc.Vec2( i1529[5], i1529[6] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1530 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1531 = data
  i1530.enabled = !!i1531[0]
  i1530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[1], i1530.x)
  i1530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[2], i1530.y)
  i1530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[3], i1530.z)
  i1530.separateAxes = !!i1531[4]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1532 = root || new pc.ParticleSystemShape()
  var i1533 = data
  i1532.enabled = !!i1533[0]
  i1532.shapeType = i1533[1]
  i1532.randomDirectionAmount = i1533[2]
  i1532.sphericalDirectionAmount = i1533[3]
  i1532.randomPositionAmount = i1533[4]
  i1532.alignToDirection = !!i1533[5]
  i1532.radius = i1533[6]
  i1532.radiusMode = i1533[7]
  i1532.radiusSpread = i1533[8]
  i1532.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[9], i1532.radiusSpeed)
  i1532.radiusThickness = i1533[10]
  i1532.angle = i1533[11]
  i1532.length = i1533[12]
  i1532.boxThickness = new pc.Vec3( i1533[13], i1533[14], i1533[15] )
  i1532.meshShapeType = i1533[16]
  request.r(i1533[17], i1533[18], 0, i1532, 'mesh')
  request.r(i1533[19], i1533[20], 0, i1532, 'meshRenderer')
  request.r(i1533[21], i1533[22], 0, i1532, 'skinnedMeshRenderer')
  i1532.useMeshMaterialIndex = !!i1533[23]
  i1532.meshMaterialIndex = i1533[24]
  i1532.useMeshColors = !!i1533[25]
  i1532.normalOffset = i1533[26]
  i1532.arc = i1533[27]
  i1532.arcMode = i1533[28]
  i1532.arcSpread = i1533[29]
  i1532.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[30], i1532.arcSpeed)
  i1532.donutRadius = i1533[31]
  i1532.position = new pc.Vec3( i1533[32], i1533[33], i1533[34] )
  i1532.rotation = new pc.Vec3( i1533[35], i1533[36], i1533[37] )
  i1532.scale = new pc.Vec3( i1533[38], i1533[39], i1533[40] )
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1534 = root || new pc.ParticleSystemSizeBySpeed()
  var i1535 = data
  i1534.enabled = !!i1535[0]
  i1534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[1], i1534.x)
  i1534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[2], i1534.y)
  i1534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1535[3], i1534.z)
  i1534.separateAxes = !!i1535[4]
  i1534.range = new pc.Vec2( i1535[5], i1535[6] )
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1536 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1537 = data
  i1536.enabled = !!i1537[0]
  i1536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1537[1], i1536.x)
  i1536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1537[2], i1536.y)
  i1536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1537[3], i1536.z)
  i1536.separateAxes = !!i1537[4]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1538 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1539 = data
  i1538.enabled = !!i1539[0]
  i1538.mode = i1539[1]
  i1538.animation = i1539[2]
  i1538.numTilesX = i1539[3]
  i1538.numTilesY = i1539[4]
  i1538.useRandomRow = !!i1539[5]
  i1538.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[6], i1538.frameOverTime)
  i1538.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[7], i1538.startFrame)
  i1538.cycleCount = i1539[8]
  i1538.rowIndex = i1539[9]
  i1538.flipU = i1539[10]
  i1538.flipV = i1539[11]
  i1538.spriteCount = i1539[12]
  var i1541 = i1539[13]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 2, i1540, '')
  }
  i1538.sprites = i1540
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1544 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1545 = data
  i1544.enabled = !!i1545[0]
  i1544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[1], i1544.x)
  i1544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[2], i1544.y)
  i1544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[3], i1544.z)
  i1544.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[4], i1544.radial)
  i1544.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[5], i1544.speedModifier)
  i1544.space = i1545[6]
  i1544.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[7], i1544.orbitalX)
  i1544.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[8], i1544.orbitalY)
  i1544.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[9], i1544.orbitalZ)
  i1544.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[10], i1544.orbitalOffsetX)
  i1544.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[11], i1544.orbitalOffsetY)
  i1544.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1545[12], i1544.orbitalOffsetZ)
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemNoise()
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.separateAxes = !!i1547[1]
  i1546.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[2], i1546.strengthX)
  i1546.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[3], i1546.strengthY)
  i1546.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[4], i1546.strengthZ)
  i1546.frequency = i1547[5]
  i1546.damping = !!i1547[6]
  i1546.octaveCount = i1547[7]
  i1546.octaveMultiplier = i1547[8]
  i1546.octaveScale = i1547[9]
  i1546.quality = i1547[10]
  i1546.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[11], i1546.scrollSpeed)
  i1546.scrollSpeedMultiplier = i1547[12]
  i1546.remapEnabled = !!i1547[13]
  i1546.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[14], i1546.remapX)
  i1546.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[15], i1546.remapY)
  i1546.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[16], i1546.remapZ)
  i1546.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[17], i1546.positionAmount)
  i1546.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[18], i1546.rotationAmount)
  i1546.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[19], i1546.sizeAmount)
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1548 = root || new pc.ParticleSystemInheritVelocity()
  var i1549 = data
  i1548.enabled = !!i1549[0]
  i1548.mode = i1549[1]
  i1548.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1549[2], i1548.curve)
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemForceOverLifetime()
  var i1551 = data
  i1550.enabled = !!i1551[0]
  i1550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[1], i1550.x)
  i1550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[2], i1550.y)
  i1550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[3], i1550.z)
  i1550.space = i1551[4]
  i1550.randomized = !!i1551[5]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1552 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1553 = data
  i1552.enabled = !!i1553[0]
  i1552.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[1], i1552.limit)
  i1552.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[2], i1552.limitX)
  i1552.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[3], i1552.limitY)
  i1552.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[4], i1552.limitZ)
  i1552.dampen = i1553[5]
  i1552.separateAxes = !!i1553[6]
  i1552.space = i1553[7]
  i1552.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1553[8], i1552.drag)
  i1552.multiplyDragByParticleSize = !!i1553[9]
  i1552.multiplyDragByParticleVelocity = !!i1553[10]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'mesh')
  i1554.meshCount = i1555[2]
  i1554.activeVertexStreamsCount = i1555[3]
  i1554.alignment = i1555[4]
  i1554.renderMode = i1555[5]
  i1554.sortMode = i1555[6]
  i1554.lengthScale = i1555[7]
  i1554.velocityScale = i1555[8]
  i1554.cameraVelocityScale = i1555[9]
  i1554.normalDirection = i1555[10]
  i1554.sortingFudge = i1555[11]
  i1554.minParticleSize = i1555[12]
  i1554.maxParticleSize = i1555[13]
  i1554.pivot = new pc.Vec3( i1555[14], i1555[15], i1555[16] )
  request.r(i1555[17], i1555[18], 0, i1554, 'trailMaterial')
  i1554.applyActiveColorSpace = !!i1555[19]
  i1554.enabled = !!i1555[20]
  request.r(i1555[21], i1555[22], 0, i1554, 'sharedMaterial')
  var i1557 = i1555[23]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 2) {
  request.r(i1557[i + 0], i1557[i + 1], 2, i1556, '')
  }
  i1554.sharedMaterials = i1556
  i1554.receiveShadows = !!i1555[24]
  i1554.shadowCastingMode = i1555[25]
  i1554.sortingLayerID = i1555[26]
  i1554.sortingOrder = i1555[27]
  i1554.lightmapIndex = i1555[28]
  i1554.lightmapSceneIndex = i1555[29]
  i1554.lightmapScaleOffset = new pc.Vec4( i1555[30], i1555[31], i1555[32], i1555[33] )
  i1554.lightProbeUsage = i1555[34]
  i1554.reflectionProbeUsage = i1555[35]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.index = i1559[1]
  i1558.startup = !!i1559[2]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1561 = data
  i1560.aspect = i1561[0]
  i1560.orthographic = !!i1561[1]
  i1560.orthographicSize = i1561[2]
  i1560.backgroundColor = new pc.Color(i1561[3], i1561[4], i1561[5], i1561[6])
  i1560.nearClipPlane = i1561[7]
  i1560.farClipPlane = i1561[8]
  i1560.fieldOfView = i1561[9]
  i1560.depth = i1561[10]
  i1560.clearFlags = i1561[11]
  i1560.cullingMask = i1561[12]
  i1560.rect = i1561[13]
  request.r(i1561[14], i1561[15], 0, i1560, 'targetTexture')
  i1560.usePhysicalProperties = !!i1561[16]
  i1560.focalLength = i1561[17]
  i1560.sensorSize = new pc.Vec2( i1561[18], i1561[19] )
  i1560.lensShift = new pc.Vec2( i1561[20], i1561[21] )
  i1560.gateFit = i1561[22]
  i1560.commandBufferCount = i1561[23]
  i1560.cameraType = i1561[24]
  i1560.enabled = !!i1561[25]
  return i1560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'm_FirstSelected')
  i1562.m_sendNavigationEvents = !!i1563[2]
  i1562.m_DragThreshold = i1563[3]
  return i1562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1565 = data
  i1564.m_HorizontalAxis = i1565[0]
  i1564.m_VerticalAxis = i1565[1]
  i1564.m_SubmitButton = i1565[2]
  i1564.m_CancelButton = i1565[3]
  i1564.m_InputActionsPerSecond = i1565[4]
  i1564.m_RepeatDelay = i1565[5]
  i1564.m_ForceModuleActive = !!i1565[6]
  i1564.m_SendPointerHoverToParent = !!i1565[7]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1567 = data
  i1566.pivot = new pc.Vec2( i1567[0], i1567[1] )
  i1566.anchorMin = new pc.Vec2( i1567[2], i1567[3] )
  i1566.anchorMax = new pc.Vec2( i1567[4], i1567[5] )
  i1566.sizeDelta = new pc.Vec2( i1567[6], i1567[7] )
  i1566.anchoredPosition3D = new pc.Vec3( i1567[8], i1567[9], i1567[10] )
  i1566.rotation = new pc.Quat(i1567[11], i1567[12], i1567[13], i1567[14])
  i1566.scale = new pc.Vec3( i1567[15], i1567[16], i1567[17] )
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1569 = data
  i1568.planeDistance = i1569[0]
  i1568.referencePixelsPerUnit = i1569[1]
  i1568.isFallbackOverlay = !!i1569[2]
  i1568.renderMode = i1569[3]
  i1568.renderOrder = i1569[4]
  i1568.sortingLayerName = i1569[5]
  i1568.sortingOrder = i1569[6]
  i1568.scaleFactor = i1569[7]
  request.r(i1569[8], i1569[9], 0, i1568, 'worldCamera')
  i1568.overrideSorting = !!i1569[10]
  i1568.pixelPerfect = !!i1569[11]
  i1568.targetDisplay = i1569[12]
  i1568.overridePixelPerfect = !!i1569[13]
  i1568.enabled = !!i1569[14]
  return i1568
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1571 = data
  i1570.m_UiScaleMode = i1571[0]
  i1570.m_ReferencePixelsPerUnit = i1571[1]
  i1570.m_ScaleFactor = i1571[2]
  i1570.m_ReferenceResolution = new pc.Vec2( i1571[3], i1571[4] )
  i1570.m_ScreenMatchMode = i1571[5]
  i1570.m_MatchWidthOrHeight = i1571[6]
  i1570.m_PhysicalUnit = i1571[7]
  i1570.m_FallbackScreenDPI = i1571[8]
  i1570.m_DefaultSpriteDPI = i1571[9]
  i1570.m_DynamicPixelsPerUnit = i1571[10]
  i1570.m_PresetInfoIsWorld = !!i1571[11]
  return i1570
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1573 = data
  i1572.m_IgnoreReversedGraphics = !!i1573[0]
  i1572.m_BlockingObjects = i1573[1]
  i1572.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1573[2] )
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1575 = data
  i1574.cullTransparentMesh = !!i1575[0]
  return i1574
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1577 = data
  i1576.m_AspectMode = i1577[0]
  i1576.m_AspectRatio = i1577[1]
  return i1576
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'm_Texture')
  i1578.m_UVRect = UnityEngine.Rect.MinMaxRect(i1579[2], i1579[3], i1579[4], i1579[5])
  request.r(i1579[6], i1579[7], 0, i1578, 'm_Material')
  i1578.m_Maskable = !!i1579[8]
  i1578.m_Color = new pc.Color(i1579[9], i1579[10], i1579[11], i1579[12])
  i1578.m_RaycastTarget = !!i1579[13]
  i1578.m_RaycastPadding = new pc.Vec4( i1579[14], i1579[15], i1579[16], i1579[17] )
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1581 = data
  i1580.usedByComposite = !!i1581[0]
  i1580.autoTiling = !!i1581[1]
  i1580.size = new pc.Vec2( i1581[2], i1581[3] )
  i1580.edgeRadius = i1581[4]
  i1580.enabled = !!i1581[5]
  i1580.isTrigger = !!i1581[6]
  i1580.usedByEffector = !!i1581[7]
  i1580.density = i1581[8]
  i1580.offset = new pc.Vec2( i1581[9], i1581[10] )
  request.r(i1581[11], i1581[12], 0, i1580, 'material')
  return i1580
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1582 = root || request.c( 'BalanceController' )
  var i1583 = data
  i1582.targetRotation = i1583[0]
  i1582.force = i1583[1]
  i1582.useBalance = !!i1583[2]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1585 = data
  i1584.useLimits = !!i1585[0]
  i1584.limits = request.d('UnityEngine.JointAngleLimits2D', i1585[1], i1584.limits)
  i1584.useMotor = !!i1585[2]
  i1584.motor = request.d('UnityEngine.JointMotor2D', i1585[3], i1584.motor)
  i1584.anchor = new pc.Vec2( i1585[4], i1585[5] )
  i1584.connectedAnchor = new pc.Vec2( i1585[6], i1585[7] )
  i1584.autoConfigureConnectedAnchor = !!i1585[8]
  request.r(i1585[9], i1585[10], 0, i1584, 'connectedBody')
  i1584.breakForce = i1585[11]
  i1584.breakTorque = i1585[12]
  i1584.enableCollision = !!i1585[13]
  i1584.enabled = !!i1585[14]
  return i1584
}

Deserializers["RagdollController"] = function (request, data, root) {
  var i1586 = root || request.c( 'RagdollController' )
  var i1587 = data
  i1586.Piece = i1587[0]
  i1586.isDead = !!i1587[1]
  var i1589 = i1587[2]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('BalanceController')))
  for(var i = 0; i < i1589.length; i += 2) {
  request.r(i1589[i + 0], i1589[i + 1], 1, i1588, '')
  }
  i1586.balances = i1588
  request.r(i1587[3], i1587[4], 0, i1586, 'ghost')
  request.r(i1587[5], i1587[6], 0, i1586, 'head')
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'clip')
  request.r(i1593[2], i1593[3], 0, i1592, 'outputAudioMixerGroup')
  i1592.playOnAwake = !!i1593[4]
  i1592.loop = !!i1593[5]
  i1592.time = i1593[6]
  i1592.volume = i1593[7]
  i1592.pitch = i1593[8]
  i1592.enabled = !!i1593[9]
  return i1592
}

Deserializers["AcidSound"] = function (request, data, root) {
  var i1594 = root || request.c( 'AcidSound' )
  var i1595 = data
  request.r(i1595[0], i1595[1], 0, i1594, 'audioSource')
  request.r(i1595[2], i1595[3], 0, i1594, 'sizzleClip')
  i1594.volume = i1595[4]
  return i1594
}

Deserializers["PixelAcidDamage"] = function (request, data, root) {
  var i1596 = root || request.c( 'PixelAcidDamage' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'controller')
  request.r(i1597[2], i1597[3], 0, i1596, 'skinRenderer')
  i1596.damagePerSecond = i1597[4]
  i1596.updateInterval = i1597[5]
  i1596.dissolveDelay = i1597[6]
  request.r(i1597[7], i1597[8], 0, i1596, 'acidSound')
  return i1596
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i1598 = root || request.c( 'CheckGround' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'controller')
  request.r(i1599[2], i1599[3], 0, i1598, 'platform')
  return i1598
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.UI.Image' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'm_Sprite')
  i1600.m_Type = i1601[2]
  i1600.m_PreserveAspect = !!i1601[3]
  i1600.m_FillCenter = !!i1601[4]
  i1600.m_FillMethod = i1601[5]
  i1600.m_FillAmount = i1601[6]
  i1600.m_FillClockwise = !!i1601[7]
  i1600.m_FillOrigin = i1601[8]
  i1600.m_UseSpriteMesh = !!i1601[9]
  i1600.m_PixelsPerUnitMultiplier = i1601[10]
  request.r(i1601[11], i1601[12], 0, i1600, 'm_Material')
  i1600.m_Maskable = !!i1601[13]
  i1600.m_Color = new pc.Color(i1601[14], i1601[15], i1601[16], i1601[17])
  i1600.m_RaycastTarget = !!i1601[18]
  i1600.m_RaycastPadding = new pc.Vec4( i1601[19], i1601[20], i1601[21], i1601[22] )
  return i1600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.UI.Button' )
  var i1603 = data
  i1602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1603[0], i1602.m_OnClick)
  i1602.m_Navigation = request.d('UnityEngine.UI.Navigation', i1603[1], i1602.m_Navigation)
  i1602.m_Transition = i1603[2]
  i1602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1603[3], i1602.m_Colors)
  i1602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1603[4], i1602.m_SpriteState)
  i1602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1603[5], i1602.m_AnimationTriggers)
  i1602.m_Interactable = !!i1603[6]
  request.r(i1603[7], i1603[8], 0, i1602, 'm_TargetGraphic')
  return i1602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1605 = data
  i1604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1605[0], i1604.m_PersistentCalls)
  return i1604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1607 = data
  var i1609 = i1607[0]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.add(request.d('UnityEngine.Events.PersistentCall', i1609[i + 0]));
  }
  i1606.m_Calls = i1608
  return i1606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'm_Target')
  i1612.m_TargetAssemblyTypeName = i1613[2]
  i1612.m_MethodName = i1613[3]
  i1612.m_Mode = i1613[4]
  i1612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1613[5], i1612.m_Arguments)
  i1612.m_CallState = i1613[6]
  return i1612
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1615 = data
  i1614.m_Mode = i1615[0]
  i1614.m_WrapAround = !!i1615[1]
  request.r(i1615[2], i1615[3], 0, i1614, 'm_SelectOnUp')
  request.r(i1615[4], i1615[5], 0, i1614, 'm_SelectOnDown')
  request.r(i1615[6], i1615[7], 0, i1614, 'm_SelectOnLeft')
  request.r(i1615[8], i1615[9], 0, i1614, 'm_SelectOnRight')
  return i1614
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1617 = data
  i1616.m_NormalColor = new pc.Color(i1617[0], i1617[1], i1617[2], i1617[3])
  i1616.m_HighlightedColor = new pc.Color(i1617[4], i1617[5], i1617[6], i1617[7])
  i1616.m_PressedColor = new pc.Color(i1617[8], i1617[9], i1617[10], i1617[11])
  i1616.m_SelectedColor = new pc.Color(i1617[12], i1617[13], i1617[14], i1617[15])
  i1616.m_DisabledColor = new pc.Color(i1617[16], i1617[17], i1617[18], i1617[19])
  i1616.m_ColorMultiplier = i1617[20]
  i1616.m_FadeDuration = i1617[21]
  return i1616
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_HighlightedSprite')
  request.r(i1619[2], i1619[3], 0, i1618, 'm_PressedSprite')
  request.r(i1619[4], i1619[5], 0, i1618, 'm_SelectedSprite')
  request.r(i1619[6], i1619[7], 0, i1618, 'm_DisabledSprite')
  return i1618
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1621 = data
  i1620.m_NormalTrigger = i1621[0]
  i1620.m_HighlightedTrigger = i1621[1]
  i1620.m_PressedTrigger = i1621[2]
  i1620.m_SelectedTrigger = i1621[3]
  i1620.m_DisabledTrigger = i1621[4]
  return i1620
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.Text' )
  var i1623 = data
  i1622.m_FontData = request.d('UnityEngine.UI.FontData', i1623[0], i1622.m_FontData)
  i1622.m_Text = i1623[1]
  request.r(i1623[2], i1623[3], 0, i1622, 'm_Material')
  i1622.m_Maskable = !!i1623[4]
  i1622.m_Color = new pc.Color(i1623[5], i1623[6], i1623[7], i1623[8])
  i1622.m_RaycastTarget = !!i1623[9]
  i1622.m_RaycastPadding = new pc.Vec4( i1623[10], i1623[11], i1623[12], i1623[13] )
  return i1622
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'm_Font')
  i1624.m_FontSize = i1625[2]
  i1624.m_FontStyle = i1625[3]
  i1624.m_BestFit = !!i1625[4]
  i1624.m_MinSize = i1625[5]
  i1624.m_MaxSize = i1625[6]
  i1624.m_Alignment = i1625[7]
  i1624.m_AlignByGeometry = !!i1625[8]
  i1624.m_RichText = !!i1625[9]
  i1624.m_HorizontalOverflow = i1625[10]
  i1624.m_VerticalOverflow = i1625[11]
  i1624.m_LineSpacing = i1625[12]
  return i1624
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1626 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1627 = data
  i1626.targetIsSelf = !!i1627[0]
  request.r(i1627[1], i1627[2], 0, i1626, 'targetGO')
  i1626.tweenTargetIsTargetGO = !!i1627[3]
  i1626.delay = i1627[4]
  i1626.duration = i1627[5]
  i1626.easeType = i1627[6]
  i1626.easeCurve = new pc.AnimationCurve( { keys_flow: i1627[7] } )
  i1626.loopType = i1627[8]
  i1626.loops = i1627[9]
  i1626.id = i1627[10]
  i1626.isRelative = !!i1627[11]
  i1626.isFrom = !!i1627[12]
  i1626.isIndependentUpdate = !!i1627[13]
  i1626.autoKill = !!i1627[14]
  i1626.autoGenerate = !!i1627[15]
  i1626.isActive = !!i1627[16]
  i1626.isValid = !!i1627[17]
  request.r(i1627[18], i1627[19], 0, i1626, 'target')
  i1626.animationType = i1627[20]
  i1626.targetType = i1627[21]
  i1626.forcedTargetType = i1627[22]
  i1626.autoPlay = !!i1627[23]
  i1626.useTargetAsV3 = !!i1627[24]
  i1626.endValueFloat = i1627[25]
  i1626.endValueV3 = new pc.Vec3( i1627[26], i1627[27], i1627[28] )
  i1626.endValueV2 = new pc.Vec2( i1627[29], i1627[30] )
  i1626.endValueColor = new pc.Color(i1627[31], i1627[32], i1627[33], i1627[34])
  i1626.endValueString = i1627[35]
  i1626.endValueRect = UnityEngine.Rect.MinMaxRect(i1627[36], i1627[37], i1627[38], i1627[39])
  request.r(i1627[40], i1627[41], 0, i1626, 'endValueTransform')
  i1626.optionalBool0 = !!i1627[42]
  i1626.optionalBool1 = !!i1627[43]
  i1626.optionalFloat0 = i1627[44]
  i1626.optionalInt0 = i1627[45]
  i1626.optionalRotationMode = i1627[46]
  i1626.optionalScrambleMode = i1627[47]
  i1626.optionalShakeRandomnessMode = i1627[48]
  i1626.optionalString = i1627[49]
  i1626.updateType = i1627[50]
  i1626.isSpeedBased = !!i1627[51]
  i1626.hasOnStart = !!i1627[52]
  i1626.hasOnPlay = !!i1627[53]
  i1626.hasOnUpdate = !!i1627[54]
  i1626.hasOnStepComplete = !!i1627[55]
  i1626.hasOnComplete = !!i1627[56]
  i1626.hasOnTweenCreated = !!i1627[57]
  i1626.hasOnRewind = !!i1627[58]
  i1626.onStart = request.d('UnityEngine.Events.UnityEvent', i1627[59], i1626.onStart)
  i1626.onPlay = request.d('UnityEngine.Events.UnityEvent', i1627[60], i1626.onPlay)
  i1626.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1627[61], i1626.onUpdate)
  i1626.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1627[62], i1626.onStepComplete)
  i1626.onComplete = request.d('UnityEngine.Events.UnityEvent', i1627[63], i1626.onComplete)
  i1626.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1627[64], i1626.onTweenCreated)
  i1626.onRewind = request.d('UnityEngine.Events.UnityEvent', i1627[65], i1626.onRewind)
  return i1626
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1629 = data
  i1628.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1629[0], i1628.m_PersistentCalls)
  return i1628
}

Deserializers["GameController"] = function (request, data, root) {
  var i1630 = root || request.c( 'GameController' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'startScece')
  request.r(i1631[2], i1631[3], 0, i1630, 'button')
  request.r(i1631[4], i1631[5], 0, i1630, 'clickSound')
  request.r(i1631[6], i1631[7], 0, i1630, 'dragButton')
  request.r(i1631[8], i1631[9], 0, i1630, 'dragButtonRound')
  request.r(i1631[10], i1631[11], 0, i1630, 'drag')
  request.r(i1631[12], i1631[13], 0, i1630, 'dropButton')
  request.r(i1631[14], i1631[15], 0, i1630, 'dropButtonRound')
  request.r(i1631[16], i1631[17], 0, i1630, 'drop')
  request.r(i1631[18], i1631[19], 0, i1630, 'tut2')
  request.r(i1631[20], i1631[21], 0, i1630, 'tut3')
  i1630.changePhase = !!i1631[22]
  i1630.numMonster = i1631[23]
  request.r(i1631[24], i1631[25], 0, i1630, 'failScene')
  request.r(i1631[26], i1631[27], 0, i1630, 'winScene')
  i1630.end = !!i1631[28]
  return i1630
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1632 = root || request.c( 'LunaController' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'BGTexture')
  request.r(i1633[2], i1633[3], 0, i1632, 'BGM')
  i1632.UseTime = !!i1633[4]
  i1632.TimePlay = i1633[5]
  request.r(i1633[6], i1633[7], 0, i1632, 'BGImage')
  var i1635 = i1633[8]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 1, i1634, '')
  }
  i1632.CTA = i1634
  return i1632
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1638 = root || request.c( 'LayoutController' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'game')
  request.r(i1639[2], i1639[3], 0, i1638, 'button')
  return i1638
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1640 = root || request.c( 'AudioController' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'musicSource')
  request.r(i1641[2], i1641[3], 0, i1640, 'pool')
  return i1640
}

Deserializers["DragController"] = function (request, data, root) {
  var i1642 = root || request.c( 'DragController' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'tut1')
  request.r(i1643[2], i1643[3], 0, i1642, 'tut2')
  request.r(i1643[4], i1643[5], 0, i1642, 'canvas')
  request.r(i1643[6], i1643[7], 0, i1642, 'icon')
  i1642.platformLayer = UnityEngine.LayerMask.FromIntegerValue( i1643[8] )
  i1642.detectRadius = i1643[9]
  i1642.forceMultiplier = i1643[10]
  i1642.maxForce = i1643[11]
  return i1642
}

Deserializers["DropController"] = function (request, data, root) {
  var i1644 = root || request.c( 'DropController' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'tut3')
  request.r(i1645[2], i1645[3], 0, i1644, 'tut4')
  request.r(i1645[4], i1645[5], 0, i1644, 'worldCamera')
  request.r(i1645[6], i1645[7], 0, i1644, 'bombPrefab')
  request.r(i1645[8], i1645[9], 0, i1644, 'bombParent')
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1647 = data
  i1646.ambientIntensity = i1647[0]
  i1646.reflectionIntensity = i1647[1]
  i1646.ambientMode = i1647[2]
  i1646.ambientLight = new pc.Color(i1647[3], i1647[4], i1647[5], i1647[6])
  i1646.ambientSkyColor = new pc.Color(i1647[7], i1647[8], i1647[9], i1647[10])
  i1646.ambientGroundColor = new pc.Color(i1647[11], i1647[12], i1647[13], i1647[14])
  i1646.ambientEquatorColor = new pc.Color(i1647[15], i1647[16], i1647[17], i1647[18])
  i1646.fogColor = new pc.Color(i1647[19], i1647[20], i1647[21], i1647[22])
  i1646.fogEndDistance = i1647[23]
  i1646.fogStartDistance = i1647[24]
  i1646.fogDensity = i1647[25]
  i1646.fog = !!i1647[26]
  request.r(i1647[27], i1647[28], 0, i1646, 'skybox')
  i1646.fogMode = i1647[29]
  var i1649 = i1647[30]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1649[i + 0]) );
  }
  i1646.lightmaps = i1648
  i1646.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1647[31], i1646.lightProbes)
  i1646.lightmapsMode = i1647[32]
  i1646.mixedBakeMode = i1647[33]
  i1646.environmentLightingMode = i1647[34]
  i1646.ambientProbe = new pc.SphericalHarmonicsL2(i1647[35])
  request.r(i1647[36], i1647[37], 0, i1646, 'customReflection')
  request.r(i1647[38], i1647[39], 0, i1646, 'defaultReflection')
  i1646.defaultReflectionMode = i1647[40]
  i1646.defaultReflectionResolution = i1647[41]
  i1646.sunLightObjectId = i1647[42]
  i1646.pixelLightCount = i1647[43]
  i1646.defaultReflectionHDR = !!i1647[44]
  i1646.hasLightDataAsset = !!i1647[45]
  i1646.hasManualGenerate = !!i1647[46]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'lightmapColor')
  request.r(i1653[2], i1653[3], 0, i1652, 'lightmapDirection')
  request.r(i1653[4], i1653[5], 0, i1652, 'shadowMask')
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1654 = root || new UnityEngine.LightProbes()
  var i1655 = data
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1663 = data
  i1662.name = i1663[0]
  i1662.bounciness = i1663[1]
  i1662.friction = i1663[2]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1667[i + 0]));
  }
  i1664.ShaderCompilationErrors = i1666
  i1664.name = i1665[1]
  i1664.guid = i1665[2]
  var i1669 = i1665[3]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1664.shaderDefinedKeywords = i1668
  var i1671 = i1665[4]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1671[i + 0]) );
  }
  i1664.passes = i1670
  var i1673 = i1665[5]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1673[i + 0]) );
  }
  i1664.usePasses = i1672
  var i1675 = i1665[6]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1675[i + 0]) );
  }
  i1664.defaultParameterValues = i1674
  request.r(i1665[7], i1665[8], 0, i1664, 'unityFallbackShader')
  i1664.readDepth = !!i1665[9]
  i1664.hasDepthOnlyPass = !!i1665[10]
  i1664.isCreatedByShaderGraph = !!i1665[11]
  i1664.disableBatching = !!i1665[12]
  i1664.compiled = !!i1665[13]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1679 = data
  i1678.shaderName = i1679[0]
  i1678.errorMessage = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1684 = root || new pc.UnityShaderPass()
  var i1685 = data
  i1684.id = i1685[0]
  i1684.subShaderIndex = i1685[1]
  i1684.name = i1685[2]
  i1684.passType = i1685[3]
  i1684.grabPassTextureName = i1685[4]
  i1684.usePass = !!i1685[5]
  i1684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[6], i1684.zTest)
  i1684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[7], i1684.zWrite)
  i1684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[8], i1684.culling)
  i1684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[9], i1684.blending)
  i1684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[10], i1684.alphaBlending)
  i1684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[11], i1684.colorWriteMask)
  i1684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[12], i1684.offsetUnits)
  i1684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[13], i1684.offsetFactor)
  i1684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[14], i1684.stencilRef)
  i1684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[15], i1684.stencilReadMask)
  i1684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[16], i1684.stencilWriteMask)
  i1684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[17], i1684.stencilOp)
  i1684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[18], i1684.stencilOpFront)
  i1684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[19], i1684.stencilOpBack)
  var i1687 = i1685[20]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1687[i + 0]) );
  }
  i1684.tags = i1686
  var i1689 = i1685[21]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.passDefinedKeywords = i1688
  var i1691 = i1685[22]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1691[i + 0]) );
  }
  i1684.passDefinedKeywordGroups = i1690
  var i1693 = i1685[23]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1693[i + 0]) );
  }
  i1684.variants = i1692
  var i1695 = i1685[24]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1695[i + 0]) );
  }
  i1684.excludedVariants = i1694
  i1684.hasDepthReader = !!i1685[25]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1697 = data
  i1696.val = i1697[0]
  i1696.name = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1699 = data
  i1698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[0], i1698.src)
  i1698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[1], i1698.dst)
  i1698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[2], i1698.op)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1701 = data
  i1700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[0], i1700.pass)
  i1700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[1], i1700.fail)
  i1700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[2], i1700.zFail)
  i1700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[3], i1700.comp)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.value = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1708.keywords = i1710
  i1708.hasDiscard = !!i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1715 = data
  i1714.passId = i1715[0]
  i1714.subShaderIndex = i1715[1]
  var i1717 = i1715[2]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( i1717[i + 0] );
  }
  i1714.keywords = i1716
  i1714.vertexProgram = i1715[3]
  i1714.fragmentProgram = i1715[4]
  i1714.exportedForWebGl2 = !!i1715[5]
  i1714.readDepth = !!i1715[6]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'shader')
  i1720.pass = i1721[2]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.type = i1725[1]
  i1724.value = new pc.Vec4( i1725[2], i1725[3], i1725[4], i1725[5] )
  i1724.textureValue = i1725[6]
  i1724.shaderPropertyFlag = i1725[7]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1727 = data
  i1726.name = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'texture')
  i1726.aabb = i1727[3]
  i1726.vertices = i1727[4]
  i1726.triangles = i1727[5]
  i1726.textureRect = UnityEngine.Rect.MinMaxRect(i1727[6], i1727[7], i1727[8], i1727[9])
  i1726.packedRect = UnityEngine.Rect.MinMaxRect(i1727[10], i1727[11], i1727[12], i1727[13])
  i1726.border = new pc.Vec4( i1727[14], i1727[15], i1727[16], i1727[17] )
  i1726.transparency = i1727[18]
  i1726.bounds = i1727[19]
  i1726.pixelsPerUnit = i1727[20]
  i1726.textureWidth = i1727[21]
  i1726.textureHeight = i1727[22]
  i1726.nativeSize = new pc.Vec2( i1727[23], i1727[24] )
  i1726.pivot = new pc.Vec2( i1727[25], i1727[26] )
  i1726.textureRectOffset = new pc.Vec2( i1727[27], i1727[28] )
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1729 = data
  i1728.name = i1729[0]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.wrapMode = i1731[1]
  i1730.isLooping = !!i1731[2]
  i1730.length = i1731[3]
  var i1733 = i1731[4]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1733[i + 0]) );
  }
  i1730.curves = i1732
  var i1735 = i1731[5]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1735[i + 0]) );
  }
  i1730.events = i1734
  i1730.halfPrecision = !!i1731[6]
  i1730._frameRate = i1731[7]
  i1730.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1731[8], i1730.localBounds)
  i1730.hasMuscleCurves = !!i1731[9]
  var i1737 = i1731[10]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( i1737[i + 0] );
  }
  i1730.clipMuscleConstant = i1736
  i1730.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1731[11], i1730.clipBindingConstant)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1741 = data
  i1740.path = i1741[0]
  i1740.hash = i1741[1]
  i1740.componentType = i1741[2]
  i1740.property = i1741[3]
  i1740.keys = i1741[4]
  var i1743 = i1741[5]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1743[i + 0]) );
  }
  i1740.objectReferenceKeys = i1742
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1747 = data
  i1746.time = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'value')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1751 = data
  i1750.functionName = i1751[0]
  i1750.floatParameter = i1751[1]
  i1750.intParameter = i1751[2]
  i1750.stringParameter = i1751[3]
  request.r(i1751[4], i1751[5], 0, i1750, 'objectReferenceParameter')
  i1750.time = i1751[6]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1753 = data
  i1752.center = new pc.Vec3( i1753[0], i1753[1], i1753[2] )
  i1752.extends = new pc.Vec3( i1753[3], i1753[4], i1753[5] )
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1756.genericBindings = i1758
  var i1761 = i1757[1]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1756.pptrCurveMapping = i1760
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.ascent = i1763[1]
  i1762.originalLineHeight = i1763[2]
  i1762.fontSize = i1763[3]
  var i1765 = i1763[4]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1765[i + 0]) );
  }
  i1762.characterInfo = i1764
  request.r(i1763[5], i1763[6], 0, i1762, 'texture')
  i1762.originalFontSize = i1763[7]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1769 = data
  i1768.index = i1769[0]
  i1768.advance = i1769[1]
  i1768.bearing = i1769[2]
  i1768.glyphWidth = i1769[3]
  i1768.glyphHeight = i1769[4]
  i1768.minX = i1769[5]
  i1768.maxX = i1769[6]
  i1768.minY = i1769[7]
  i1768.maxY = i1769[8]
  i1768.uvBottomLeftX = i1769[9]
  i1768.uvBottomLeftY = i1769[10]
  i1768.uvBottomRightX = i1769[11]
  i1768.uvBottomRightY = i1769[12]
  i1768.uvTopLeftX = i1769[13]
  i1768.uvTopLeftY = i1769[14]
  i1768.uvTopRightX = i1769[15]
  i1768.uvTopRightY = i1769[16]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1771 = data
  i1770.name = i1771[0]
  var i1773 = i1771[1]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1773[i + 0]) );
  }
  i1770.layers = i1772
  var i1775 = i1771[2]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1775[i + 0]) );
  }
  i1770.parameters = i1774
  i1770.animationClips = i1771[3]
  i1770.avatarUnsupported = i1771[4]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.defaultWeight = i1779[1]
  i1778.blendingMode = i1779[2]
  i1778.avatarMask = i1779[3]
  i1778.syncedLayerIndex = i1779[4]
  i1778.syncedLayerAffectsTiming = !!i1779[5]
  i1778.syncedLayers = i1779[6]
  i1778.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1779[7], i1778.stateMachine)
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1781 = data
  i1780.id = i1781[0]
  i1780.name = i1781[1]
  i1780.path = i1781[2]
  var i1783 = i1781[3]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1783[i + 0]) );
  }
  i1780.states = i1782
  var i1785 = i1781[4]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1785[i + 0]) );
  }
  i1780.machines = i1784
  var i1787 = i1781[5]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1787[i + 0]) );
  }
  i1780.entryStateTransitions = i1786
  var i1789 = i1781[6]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1789[i + 0]) );
  }
  i1780.exitStateTransitions = i1788
  var i1791 = i1781[7]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1791[i + 0]) );
  }
  i1780.anyStateTransitions = i1790
  i1780.defaultStateId = i1781[8]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1795 = data
  i1794.id = i1795[0]
  i1794.name = i1795[1]
  i1794.cycleOffset = i1795[2]
  i1794.cycleOffsetParameter = i1795[3]
  i1794.cycleOffsetParameterActive = !!i1795[4]
  i1794.mirror = !!i1795[5]
  i1794.mirrorParameter = i1795[6]
  i1794.mirrorParameterActive = !!i1795[7]
  i1794.motionId = i1795[8]
  i1794.nameHash = i1795[9]
  i1794.fullPathHash = i1795[10]
  i1794.speed = i1795[11]
  i1794.speedParameter = i1795[12]
  i1794.speedParameterActive = !!i1795[13]
  i1794.tag = i1795[14]
  i1794.tagHash = i1795[15]
  i1794.writeDefaultValues = !!i1795[16]
  var i1797 = i1795[17]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.behaviours = i1796
  var i1799 = i1795[18]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1799[i + 0]) );
  }
  i1794.transitions = i1798
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1805 = data
  i1804.fullPath = i1805[0]
  i1804.canTransitionToSelf = !!i1805[1]
  i1804.duration = i1805[2]
  i1804.exitTime = i1805[3]
  i1804.hasExitTime = !!i1805[4]
  i1804.hasFixedDuration = !!i1805[5]
  i1804.interruptionSource = i1805[6]
  i1804.offset = i1805[7]
  i1804.orderedInterruption = !!i1805[8]
  i1804.destinationStateId = i1805[9]
  i1804.isExit = !!i1805[10]
  i1804.mute = !!i1805[11]
  i1804.solo = !!i1805[12]
  var i1807 = i1805[13]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1807[i + 0]) );
  }
  i1804.conditions = i1806
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1811 = data
  i1810.mode = i1811[0]
  i1810.parameter = i1811[1]
  i1810.threshold = i1811[2]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1817 = data
  i1816.destinationStateId = i1817[0]
  i1816.isExit = !!i1817[1]
  i1816.mute = !!i1817[2]
  i1816.solo = !!i1817[3]
  var i1819 = i1817[4]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1819[i + 0]) );
  }
  i1816.conditions = i1818
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1823 = data
  i1822.defaultBool = !!i1823[0]
  i1822.defaultFloat = i1823[1]
  i1822.defaultInt = i1823[2]
  i1822.name = i1823[3]
  i1822.nameHash = i1823[4]
  i1822.type = i1823[5]
  return i1822
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1824 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1825 = data
  i1824.useSafeMode = !!i1825[0]
  i1824.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1825[1], i1824.safeModeOptions)
  i1824.timeScale = i1825[2]
  i1824.unscaledTimeScale = i1825[3]
  i1824.useSmoothDeltaTime = !!i1825[4]
  i1824.maxSmoothUnscaledTime = i1825[5]
  i1824.rewindCallbackMode = i1825[6]
  i1824.showUnityEditorReport = !!i1825[7]
  i1824.logBehaviour = i1825[8]
  i1824.drawGizmos = !!i1825[9]
  i1824.defaultRecyclable = !!i1825[10]
  i1824.defaultAutoPlay = i1825[11]
  i1824.defaultUpdateType = i1825[12]
  i1824.defaultTimeScaleIndependent = !!i1825[13]
  i1824.defaultEaseType = i1825[14]
  i1824.defaultEaseOvershootOrAmplitude = i1825[15]
  i1824.defaultEasePeriod = i1825[16]
  i1824.defaultAutoKill = !!i1825[17]
  i1824.defaultLoopType = i1825[18]
  i1824.debugMode = !!i1825[19]
  i1824.debugStoreTargetId = !!i1825[20]
  i1824.showPreviewPanel = !!i1825[21]
  i1824.storeSettingsLocation = i1825[22]
  i1824.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1825[23], i1824.modules)
  i1824.createASMDEF = !!i1825[24]
  i1824.showPlayingTweens = !!i1825[25]
  i1824.showPausedTweens = !!i1825[26]
  return i1824
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1827 = data
  i1826.logBehaviour = i1827[0]
  i1826.nestedTweenFailureBehaviour = i1827[1]
  return i1826
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1829 = data
  i1828.showPanel = !!i1829[0]
  i1828.audioEnabled = !!i1829[1]
  i1828.physicsEnabled = !!i1829[2]
  i1828.physics2DEnabled = !!i1829[3]
  i1828.spriteEnabled = !!i1829[4]
  i1828.uiEnabled = !!i1829[5]
  i1828.textMeshProEnabled = !!i1829[6]
  i1828.tk2DEnabled = !!i1829[7]
  i1828.deAudioEnabled = !!i1829[8]
  i1828.deUnityExtendedEnabled = !!i1829[9]
  i1828.epoOutlineEnabled = !!i1829[10]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1833[i + 0]) );
  }
  i1830.files = i1832
  i1830.componentToPrefabIds = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1837 = data
  i1836.path = i1837[0]
  request.r(i1837[1], i1837[2], 0, i1836, 'unityObject')
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1839 = data
  var i1841 = i1839[0]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1841[i + 0]) );
  }
  i1838.scriptsExecutionOrder = i1840
  var i1843 = i1839[1]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1843[i + 0]) );
  }
  i1838.sortingLayers = i1842
  var i1845 = i1839[2]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1845[i + 0]) );
  }
  i1838.cullingLayers = i1844
  i1838.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1839[3], i1838.timeSettings)
  i1838.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1839[4], i1838.physicsSettings)
  i1838.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1839[5], i1838.physics2DSettings)
  i1838.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1839[6], i1838.qualitySettings)
  i1838.enableRealtimeShadows = !!i1839[7]
  i1838.enableAutoInstancing = !!i1839[8]
  i1838.enableStaticBatching = !!i1839[9]
  i1838.enableDynamicBatching = !!i1839[10]
  i1838.usePreservativeDynamicBatching = !!i1839[11]
  i1838.lightmapEncodingQuality = i1839[12]
  i1838.desiredColorSpace = i1839[13]
  var i1847 = i1839[14]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1838.allTags = i1846
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.value = i1851[1]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1855 = data
  i1854.id = i1855[0]
  i1854.name = i1855[1]
  i1854.value = i1855[2]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1859 = data
  i1858.id = i1859[0]
  i1858.name = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1861 = data
  i1860.fixedDeltaTime = i1861[0]
  i1860.maximumDeltaTime = i1861[1]
  i1860.timeScale = i1861[2]
  i1860.maximumParticleTimestep = i1861[3]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1863 = data
  i1862.gravity = new pc.Vec3( i1863[0], i1863[1], i1863[2] )
  i1862.defaultSolverIterations = i1863[3]
  i1862.bounceThreshold = i1863[4]
  i1862.autoSyncTransforms = !!i1863[5]
  i1862.autoSimulation = !!i1863[6]
  var i1865 = i1863[7]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1865[i + 0]) );
  }
  i1862.collisionMatrix = i1864
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1869 = data
  i1868.enabled = !!i1869[0]
  i1868.layerId = i1869[1]
  i1868.otherLayerId = i1869[2]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'material')
  i1870.gravity = new pc.Vec2( i1871[2], i1871[3] )
  i1870.positionIterations = i1871[4]
  i1870.velocityIterations = i1871[5]
  i1870.velocityThreshold = i1871[6]
  i1870.maxLinearCorrection = i1871[7]
  i1870.maxAngularCorrection = i1871[8]
  i1870.maxTranslationSpeed = i1871[9]
  i1870.maxRotationSpeed = i1871[10]
  i1870.baumgarteScale = i1871[11]
  i1870.baumgarteTOIScale = i1871[12]
  i1870.timeToSleep = i1871[13]
  i1870.linearSleepTolerance = i1871[14]
  i1870.angularSleepTolerance = i1871[15]
  i1870.defaultContactOffset = i1871[16]
  i1870.autoSimulation = !!i1871[17]
  i1870.queriesHitTriggers = !!i1871[18]
  i1870.queriesStartInColliders = !!i1871[19]
  i1870.callbacksOnDisable = !!i1871[20]
  i1870.reuseCollisionCallbacks = !!i1871[21]
  i1870.autoSyncTransforms = !!i1871[22]
  var i1873 = i1871[23]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1873[i + 0]) );
  }
  i1870.collisionMatrix = i1872
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.layerId = i1877[1]
  i1876.otherLayerId = i1877[2]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1879 = data
  var i1881 = i1879[0]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1881[i + 0]) );
  }
  i1878.qualityLevels = i1880
  var i1883 = i1879[1]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( i1883[i + 0] );
  }
  i1878.names = i1882
  i1878.shadows = i1879[2]
  i1878.anisotropicFiltering = i1879[3]
  i1878.antiAliasing = i1879[4]
  i1878.lodBias = i1879[5]
  i1878.shadowCascades = i1879[6]
  i1878.shadowDistance = i1879[7]
  i1878.shadowmaskMode = i1879[8]
  i1878.shadowProjection = i1879[9]
  i1878.shadowResolution = i1879[10]
  i1878.softParticles = !!i1879[11]
  i1878.softVegetation = !!i1879[12]
  i1878.activeColorSpace = i1879[13]
  i1878.desiredColorSpace = i1879[14]
  i1878.masterTextureLimit = i1879[15]
  i1878.maxQueuedFrames = i1879[16]
  i1878.particleRaycastBudget = i1879[17]
  i1878.pixelLightCount = i1879[18]
  i1878.realtimeReflectionProbes = !!i1879[19]
  i1878.shadowCascade2Split = i1879[20]
  i1878.shadowCascade4Split = new pc.Vec3( i1879[21], i1879[22], i1879[23] )
  i1878.streamingMipmapsActive = !!i1879[24]
  i1878.vSyncCount = i1879[25]
  i1878.asyncUploadBufferSize = i1879[26]
  i1878.asyncUploadTimeSlice = i1879[27]
  i1878.billboardsFaceCameraPosition = !!i1879[28]
  i1878.shadowNearPlaneOffset = i1879[29]
  i1878.streamingMipmapsMemoryBudget = i1879[30]
  i1878.maximumLODLevel = i1879[31]
  i1878.streamingMipmapsAddAllCameras = !!i1879[32]
  i1878.streamingMipmapsMaxLevelReduction = i1879[33]
  i1878.streamingMipmapsRenderersPerFrame = i1879[34]
  i1878.resolutionScalingFixedDPIFactor = i1879[35]
  i1878.streamingMipmapsMaxFileIORequests = i1879[36]
  i1878.currentQualityLevel = i1879[37]
  return i1878
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'm_ObjectArgument')
  i1886.m_ObjectArgumentAssemblyTypeName = i1887[2]
  i1886.m_IntArgument = i1887[3]
  i1886.m_FloatArgument = i1887[4]
  i1886.m_StringArgument = i1887[5]
  i1886.m_BoolArgument = !!i1887[6]
  return i1886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[15],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[6],"67":[6],"68":[6],"69":[6],"70":[6],"71":[6],"29":[6],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[15],"79":[80],"81":[82],"83":[82],"21":[20],"84":[3],"85":[15],"86":[87],"88":[20],"89":[24,20],"90":[80],"91":[24,20],"92":[20],"93":[20],"94":[80,20],"95":[20,24],"96":[97],"98":[97],"99":[97],"100":[20],"101":[20],"23":[21],"37":[24,20],"25":[20],"22":[21],"102":[20],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"26":[24,20],"111":[20],"112":[20],"113":[20],"114":[20],"39":[24,20],"115":[20],"116":[18],"117":[18],"19":[18],"118":[18],"119":[15],"120":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BombController","UnityEngine.AudioClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.BoxCollider2D","BalanceController","UnityEngine.HingeJoint2D","RagdollController","UnityEngine.GameObject","UnityEngine.AudioSource","AcidSound","UnityEngine.PhysicsMaterial2D","PixelAcidDamage","CheckGround","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","GameController","LunaController","LayoutController","AudioController","DragController","DropController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/15/2026 09:41:36";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRP_V01_HoaiTT_TamNTM";

Deserializers.lunaAppID = "42814";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4538";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8eb8ef51-9446-4d5e-ad4d-64c20d04f8df";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

