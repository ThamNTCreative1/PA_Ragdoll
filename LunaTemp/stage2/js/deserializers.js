var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.JointSpring' )
  var i1471 = data
  i1470.spring = i1471[0]
  i1470.damper = i1471[1]
  i1470.targetPosition = i1471[2]
  return i1470
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointMotor' )
  var i1473 = data
  i1472.m_TargetVelocity = i1473[0]
  i1472.m_Force = i1473[1]
  i1472.m_FreeSpin = i1473[2]
  return i1472
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.JointLimits' )
  var i1475 = data
  i1474.m_Min = i1475[0]
  i1474.m_Max = i1475[1]
  i1474.m_Bounciness = i1475[2]
  i1474.m_BounceMinVelocity = i1475[3]
  i1474.m_ContactDistance = i1475[4]
  i1474.minBounce = i1475[5]
  i1474.maxBounce = i1475[6]
  return i1474
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.JointDrive' )
  var i1477 = data
  i1476.m_PositionSpring = i1477[0]
  i1476.m_PositionDamper = i1477[1]
  i1476.m_MaximumForce = i1477[2]
  i1476.m_UseAcceleration = i1477[3]
  return i1476
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1479 = data
  i1478.m_Spring = i1479[0]
  i1478.m_Damper = i1479[1]
  return i1478
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1481 = data
  i1480.m_Limit = i1481[0]
  i1480.m_Bounciness = i1481[1]
  i1480.m_ContactDistance = i1481[2]
  return i1480
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1483 = data
  i1482.m_ExtremumSlip = i1483[0]
  i1482.m_ExtremumValue = i1483[1]
  i1482.m_AsymptoteSlip = i1483[2]
  i1482.m_AsymptoteValue = i1483[3]
  i1482.m_Stiffness = i1483[4]
  return i1482
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1485 = data
  i1484.m_LowerAngle = i1485[0]
  i1484.m_UpperAngle = i1485[1]
  return i1484
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1487 = data
  i1486.m_MotorSpeed = i1487[0]
  i1486.m_MaximumMotorTorque = i1487[1]
  return i1486
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1489 = data
  i1488.m_DampingRatio = i1489[0]
  i1488.m_Frequency = i1489[1]
  i1488.m_Angle = i1489[2]
  return i1488
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1491 = data
  i1490.m_LowerTranslation = i1491[0]
  i1490.m_UpperTranslation = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1492 = root || new pc.UnityMaterial()
  var i1493 = data
  i1492.name = i1493[0]
  request.r(i1493[1], i1493[2], 0, i1492, 'shader')
  i1492.renderQueue = i1493[3]
  i1492.enableInstancing = !!i1493[4]
  var i1495 = i1493[5]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1495[i + 0]) );
  }
  i1492.floatParameters = i1494
  var i1497 = i1493[6]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1497[i + 0]) );
  }
  i1492.colorParameters = i1496
  var i1499 = i1493[7]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1499[i + 0]) );
  }
  i1492.vectorParameters = i1498
  var i1501 = i1493[8]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1501[i + 0]) );
  }
  i1492.textureParameters = i1500
  var i1503 = i1493[9]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1503[i + 0]) );
  }
  i1492.materialFlags = i1502
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.value = i1507[1]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.value = new pc.Color(i1511[1], i1511[2], i1511[3], i1511[4])
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.value = new pc.Vec4( i1515[1], i1515[2], i1515[3], i1515[4] )
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1519 = data
  i1518.name = i1519[0]
  request.r(i1519[1], i1519[2], 0, i1518, 'value')
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1523 = data
  i1522.name = i1523[0]
  i1522.enabled = !!i1523[1]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.width = i1525[1]
  i1524.height = i1525[2]
  i1524.mipmapCount = i1525[3]
  i1524.anisoLevel = i1525[4]
  i1524.filterMode = i1525[5]
  i1524.hdr = !!i1525[6]
  i1524.format = i1525[7]
  i1524.wrapMode = i1525[8]
  i1524.alphaIsTransparency = !!i1525[9]
  i1524.alphaSource = i1525[10]
  i1524.graphicsFormat = i1525[11]
  i1524.sRGBTexture = !!i1525[12]
  i1524.desiredColorSpace = i1525[13]
  i1524.wrapU = i1525[14]
  i1524.wrapV = i1525[15]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1527 = data
  i1526.position = new pc.Vec3( i1527[0], i1527[1], i1527[2] )
  i1526.scale = new pc.Vec3( i1527[3], i1527[4], i1527[5] )
  i1526.rotation = new pc.Quat(i1527[6], i1527[7], i1527[8], i1527[9])
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1529 = data
  i1528.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1529[0], i1528.main)
  i1528.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1529[1], i1528.colorBySpeed)
  i1528.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1529[2], i1528.colorOverLifetime)
  i1528.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1529[3], i1528.emission)
  i1528.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1529[4], i1528.rotationBySpeed)
  i1528.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1529[5], i1528.rotationOverLifetime)
  i1528.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1529[6], i1528.shape)
  i1528.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1529[7], i1528.sizeBySpeed)
  i1528.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1529[8], i1528.sizeOverLifetime)
  i1528.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1529[9], i1528.textureSheetAnimation)
  i1528.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1529[10], i1528.velocityOverLifetime)
  i1528.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1529[11], i1528.noise)
  i1528.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1529[12], i1528.inheritVelocity)
  i1528.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1529[13], i1528.forceOverLifetime)
  i1528.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1529[14], i1528.limitVelocityOverLifetime)
  i1528.useAutoRandomSeed = !!i1529[15]
  i1528.randomSeed = i1529[16]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1530 = root || new pc.ParticleSystemMain()
  var i1531 = data
  i1530.duration = i1531[0]
  i1530.loop = !!i1531[1]
  i1530.prewarm = !!i1531[2]
  i1530.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[3], i1530.startDelay)
  i1530.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[4], i1530.startLifetime)
  i1530.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[5], i1530.startSpeed)
  i1530.startSize3D = !!i1531[6]
  i1530.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[7], i1530.startSizeX)
  i1530.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[8], i1530.startSizeY)
  i1530.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[9], i1530.startSizeZ)
  i1530.startRotation3D = !!i1531[10]
  i1530.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[11], i1530.startRotationX)
  i1530.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[12], i1530.startRotationY)
  i1530.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[13], i1530.startRotationZ)
  i1530.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1531[14], i1530.startColor)
  i1530.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[15], i1530.gravityModifier)
  i1530.simulationSpace = i1531[16]
  request.r(i1531[17], i1531[18], 0, i1530, 'customSimulationSpace')
  i1530.simulationSpeed = i1531[19]
  i1530.useUnscaledTime = !!i1531[20]
  i1530.scalingMode = i1531[21]
  i1530.playOnAwake = !!i1531[22]
  i1530.maxParticles = i1531[23]
  i1530.emitterVelocityMode = i1531[24]
  i1530.stopAction = i1531[25]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1532 = root || new pc.MinMaxCurve()
  var i1533 = data
  i1532.mode = i1533[0]
  i1532.curveMin = new pc.AnimationCurve( { keys_flow: i1533[1] } )
  i1532.curveMax = new pc.AnimationCurve( { keys_flow: i1533[2] } )
  i1532.curveMultiplier = i1533[3]
  i1532.constantMin = i1533[4]
  i1532.constantMax = i1533[5]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1534 = root || new pc.MinMaxGradient()
  var i1535 = data
  i1534.mode = i1535[0]
  i1534.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1535[1], i1534.gradientMin)
  i1534.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1535[2], i1534.gradientMax)
  i1534.colorMin = new pc.Color(i1535[3], i1535[4], i1535[5], i1535[6])
  i1534.colorMax = new pc.Color(i1535[7], i1535[8], i1535[9], i1535[10])
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1537 = data
  i1536.mode = i1537[0]
  var i1539 = i1537[1]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1539[i + 0]) );
  }
  i1536.colorKeys = i1538
  var i1541 = i1537[2]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1541[i + 0]) );
  }
  i1536.alphaKeys = i1540
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1542 = root || new pc.ParticleSystemColorBySpeed()
  var i1543 = data
  i1542.enabled = !!i1543[0]
  i1542.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1543[1], i1542.color)
  i1542.range = new pc.Vec2( i1543[2], i1543[3] )
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1547 = data
  i1546.color = new pc.Color(i1547[0], i1547[1], i1547[2], i1547[3])
  i1546.time = i1547[4]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1551 = data
  i1550.alpha = i1551[0]
  i1550.time = i1551[1]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1552 = root || new pc.ParticleSystemColorOverLifetime()
  var i1553 = data
  i1552.enabled = !!i1553[0]
  i1552.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1553[1], i1552.color)
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1554 = root || new pc.ParticleSystemEmitter()
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[1], i1554.rateOverTime)
  i1554.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1555[2], i1554.rateOverDistance)
  var i1557 = i1555[3]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1557[i + 0]) );
  }
  i1554.bursts = i1556
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1560 = root || new pc.ParticleSystemBurst()
  var i1561 = data
  i1560.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1561[0], i1560.count)
  i1560.cycleCount = i1561[1]
  i1560.minCount = i1561[2]
  i1560.maxCount = i1561[3]
  i1560.repeatInterval = i1561[4]
  i1560.time = i1561[5]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1562 = root || new pc.ParticleSystemRotationBySpeed()
  var i1563 = data
  i1562.enabled = !!i1563[0]
  i1562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1563[1], i1562.x)
  i1562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1563[2], i1562.y)
  i1562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1563[3], i1562.z)
  i1562.separateAxes = !!i1563[4]
  i1562.range = new pc.Vec2( i1563[5], i1563[6] )
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1564 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[1], i1564.x)
  i1564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[2], i1564.y)
  i1564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1565[3], i1564.z)
  i1564.separateAxes = !!i1565[4]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1566 = root || new pc.ParticleSystemShape()
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.shapeType = i1567[1]
  i1566.randomDirectionAmount = i1567[2]
  i1566.sphericalDirectionAmount = i1567[3]
  i1566.randomPositionAmount = i1567[4]
  i1566.alignToDirection = !!i1567[5]
  i1566.radius = i1567[6]
  i1566.radiusMode = i1567[7]
  i1566.radiusSpread = i1567[8]
  i1566.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[9], i1566.radiusSpeed)
  i1566.radiusThickness = i1567[10]
  i1566.angle = i1567[11]
  i1566.length = i1567[12]
  i1566.boxThickness = new pc.Vec3( i1567[13], i1567[14], i1567[15] )
  i1566.meshShapeType = i1567[16]
  request.r(i1567[17], i1567[18], 0, i1566, 'mesh')
  request.r(i1567[19], i1567[20], 0, i1566, 'meshRenderer')
  request.r(i1567[21], i1567[22], 0, i1566, 'skinnedMeshRenderer')
  i1566.useMeshMaterialIndex = !!i1567[23]
  i1566.meshMaterialIndex = i1567[24]
  i1566.useMeshColors = !!i1567[25]
  i1566.normalOffset = i1567[26]
  i1566.arc = i1567[27]
  i1566.arcMode = i1567[28]
  i1566.arcSpread = i1567[29]
  i1566.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1567[30], i1566.arcSpeed)
  i1566.donutRadius = i1567[31]
  i1566.position = new pc.Vec3( i1567[32], i1567[33], i1567[34] )
  i1566.rotation = new pc.Vec3( i1567[35], i1567[36], i1567[37] )
  i1566.scale = new pc.Vec3( i1567[38], i1567[39], i1567[40] )
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemSizeBySpeed()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[1], i1568.x)
  i1568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[2], i1568.y)
  i1568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[3], i1568.z)
  i1568.separateAxes = !!i1569[4]
  i1568.range = new pc.Vec2( i1569[5], i1569[6] )
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[1], i1570.x)
  i1570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.y)
  i1570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[3], i1570.z)
  i1570.separateAxes = !!i1571[4]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.mode = i1573[1]
  i1572.animation = i1573[2]
  i1572.numTilesX = i1573[3]
  i1572.numTilesY = i1573[4]
  i1572.useRandomRow = !!i1573[5]
  i1572.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[6], i1572.frameOverTime)
  i1572.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[7], i1572.startFrame)
  i1572.cycleCount = i1573[8]
  i1572.rowIndex = i1573[9]
  i1572.flipU = i1573[10]
  i1572.flipV = i1573[11]
  i1572.spriteCount = i1573[12]
  var i1575 = i1573[13]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1572.sprites = i1574
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1578 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[1], i1578.x)
  i1578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[2], i1578.y)
  i1578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[3], i1578.z)
  i1578.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[4], i1578.radial)
  i1578.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[5], i1578.speedModifier)
  i1578.space = i1579[6]
  i1578.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[7], i1578.orbitalX)
  i1578.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[8], i1578.orbitalY)
  i1578.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[9], i1578.orbitalZ)
  i1578.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[10], i1578.orbitalOffsetX)
  i1578.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[11], i1578.orbitalOffsetY)
  i1578.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[12], i1578.orbitalOffsetZ)
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemNoise()
  var i1581 = data
  i1580.enabled = !!i1581[0]
  i1580.separateAxes = !!i1581[1]
  i1580.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[2], i1580.strengthX)
  i1580.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[3], i1580.strengthY)
  i1580.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[4], i1580.strengthZ)
  i1580.frequency = i1581[5]
  i1580.damping = !!i1581[6]
  i1580.octaveCount = i1581[7]
  i1580.octaveMultiplier = i1581[8]
  i1580.octaveScale = i1581[9]
  i1580.quality = i1581[10]
  i1580.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[11], i1580.scrollSpeed)
  i1580.scrollSpeedMultiplier = i1581[12]
  i1580.remapEnabled = !!i1581[13]
  i1580.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[14], i1580.remapX)
  i1580.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[15], i1580.remapY)
  i1580.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[16], i1580.remapZ)
  i1580.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[17], i1580.positionAmount)
  i1580.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[18], i1580.rotationAmount)
  i1580.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[19], i1580.sizeAmount)
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemInheritVelocity()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.mode = i1583[1]
  i1582.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[2], i1582.curve)
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemForceOverLifetime()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[1], i1584.x)
  i1584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.y)
  i1584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.z)
  i1584.space = i1585[4]
  i1584.randomized = !!i1585[5]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[1], i1586.limit)
  i1586.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[2], i1586.limitX)
  i1586.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[3], i1586.limitY)
  i1586.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[4], i1586.limitZ)
  i1586.dampen = i1587[5]
  i1586.separateAxes = !!i1587[6]
  i1586.space = i1587[7]
  i1586.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[8], i1586.drag)
  i1586.multiplyDragByParticleSize = !!i1587[9]
  i1586.multiplyDragByParticleVelocity = !!i1587[10]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'mesh')
  i1588.meshCount = i1589[2]
  i1588.activeVertexStreamsCount = i1589[3]
  i1588.alignment = i1589[4]
  i1588.renderMode = i1589[5]
  i1588.sortMode = i1589[6]
  i1588.lengthScale = i1589[7]
  i1588.velocityScale = i1589[8]
  i1588.cameraVelocityScale = i1589[9]
  i1588.normalDirection = i1589[10]
  i1588.sortingFudge = i1589[11]
  i1588.minParticleSize = i1589[12]
  i1588.maxParticleSize = i1589[13]
  i1588.pivot = new pc.Vec3( i1589[14], i1589[15], i1589[16] )
  request.r(i1589[17], i1589[18], 0, i1588, 'trailMaterial')
  i1588.applyActiveColorSpace = !!i1589[19]
  i1588.enabled = !!i1589[20]
  request.r(i1589[21], i1589[22], 0, i1588, 'sharedMaterial')
  var i1591 = i1589[23]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.sharedMaterials = i1590
  i1588.receiveShadows = !!i1589[24]
  i1588.shadowCastingMode = i1589[25]
  i1588.sortingLayerID = i1589[26]
  i1588.sortingOrder = i1589[27]
  i1588.lightmapIndex = i1589[28]
  i1588.lightmapSceneIndex = i1589[29]
  i1588.lightmapScaleOffset = new pc.Vec4( i1589[30], i1589[31], i1589[32], i1589[33] )
  i1588.lightProbeUsage = i1589[34]
  i1588.reflectionProbeUsage = i1589[35]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.tagId = i1595[1]
  i1594.enabled = !!i1595[2]
  i1594.isStatic = !!i1595[3]
  i1594.layer = i1595[4]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.index = i1597[1]
  i1596.startup = !!i1597[2]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1599 = data
  i1598.aspect = i1599[0]
  i1598.orthographic = !!i1599[1]
  i1598.orthographicSize = i1599[2]
  i1598.backgroundColor = new pc.Color(i1599[3], i1599[4], i1599[5], i1599[6])
  i1598.nearClipPlane = i1599[7]
  i1598.farClipPlane = i1599[8]
  i1598.fieldOfView = i1599[9]
  i1598.depth = i1599[10]
  i1598.clearFlags = i1599[11]
  i1598.cullingMask = i1599[12]
  i1598.rect = i1599[13]
  request.r(i1599[14], i1599[15], 0, i1598, 'targetTexture')
  i1598.usePhysicalProperties = !!i1599[16]
  i1598.focalLength = i1599[17]
  i1598.sensorSize = new pc.Vec2( i1599[18], i1599[19] )
  i1598.lensShift = new pc.Vec2( i1599[20], i1599[21] )
  i1598.gateFit = i1599[22]
  i1598.commandBufferCount = i1599[23]
  i1598.cameraType = i1599[24]
  i1598.enabled = !!i1599[25]
  return i1598
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'm_FirstSelected')
  i1600.m_sendNavigationEvents = !!i1601[2]
  i1600.m_DragThreshold = i1601[3]
  return i1600
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1603 = data
  i1602.m_HorizontalAxis = i1603[0]
  i1602.m_VerticalAxis = i1603[1]
  i1602.m_SubmitButton = i1603[2]
  i1602.m_CancelButton = i1603[3]
  i1602.m_InputActionsPerSecond = i1603[4]
  i1602.m_RepeatDelay = i1603[5]
  i1602.m_ForceModuleActive = !!i1603[6]
  i1602.m_SendPointerHoverToParent = !!i1603[7]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1605 = data
  i1604.pivot = new pc.Vec2( i1605[0], i1605[1] )
  i1604.anchorMin = new pc.Vec2( i1605[2], i1605[3] )
  i1604.anchorMax = new pc.Vec2( i1605[4], i1605[5] )
  i1604.sizeDelta = new pc.Vec2( i1605[6], i1605[7] )
  i1604.anchoredPosition3D = new pc.Vec3( i1605[8], i1605[9], i1605[10] )
  i1604.rotation = new pc.Quat(i1605[11], i1605[12], i1605[13], i1605[14])
  i1604.scale = new pc.Vec3( i1605[15], i1605[16], i1605[17] )
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1607 = data
  i1606.planeDistance = i1607[0]
  i1606.referencePixelsPerUnit = i1607[1]
  i1606.isFallbackOverlay = !!i1607[2]
  i1606.renderMode = i1607[3]
  i1606.renderOrder = i1607[4]
  i1606.sortingLayerName = i1607[5]
  i1606.sortingOrder = i1607[6]
  i1606.scaleFactor = i1607[7]
  request.r(i1607[8], i1607[9], 0, i1606, 'worldCamera')
  i1606.overrideSorting = !!i1607[10]
  i1606.pixelPerfect = !!i1607[11]
  i1606.targetDisplay = i1607[12]
  i1606.overridePixelPerfect = !!i1607[13]
  i1606.enabled = !!i1607[14]
  return i1606
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1609 = data
  i1608.m_UiScaleMode = i1609[0]
  i1608.m_ReferencePixelsPerUnit = i1609[1]
  i1608.m_ScaleFactor = i1609[2]
  i1608.m_ReferenceResolution = new pc.Vec2( i1609[3], i1609[4] )
  i1608.m_ScreenMatchMode = i1609[5]
  i1608.m_MatchWidthOrHeight = i1609[6]
  i1608.m_PhysicalUnit = i1609[7]
  i1608.m_FallbackScreenDPI = i1609[8]
  i1608.m_DefaultSpriteDPI = i1609[9]
  i1608.m_DynamicPixelsPerUnit = i1609[10]
  i1608.m_PresetInfoIsWorld = !!i1609[11]
  return i1608
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1611 = data
  i1610.m_IgnoreReversedGraphics = !!i1611[0]
  i1610.m_BlockingObjects = i1611[1]
  i1610.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1611[2] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1613 = data
  i1612.cullTransparentMesh = !!i1613[0]
  return i1612
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1615 = data
  i1614.m_AspectMode = i1615[0]
  i1614.m_AspectRatio = i1615[1]
  return i1614
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'm_Texture')
  i1616.m_UVRect = UnityEngine.Rect.MinMaxRect(i1617[2], i1617[3], i1617[4], i1617[5])
  request.r(i1617[6], i1617[7], 0, i1616, 'm_Material')
  i1616.m_Maskable = !!i1617[8]
  i1616.m_Color = new pc.Color(i1617[9], i1617[10], i1617[11], i1617[12])
  i1616.m_RaycastTarget = !!i1617[13]
  i1616.m_RaycastPadding = new pc.Vec4( i1617[14], i1617[15], i1617[16], i1617[17] )
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1619 = data
  i1618.sortingLayerIndex = i1619[0]
  i1618.sortingOrder = i1619[1]
  i1618.sortingLayerName = i1619[2]
  i1618.enabled = !!i1619[3]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1621 = data
  i1620.bodyType = i1621[0]
  request.r(i1621[1], i1621[2], 0, i1620, 'material')
  i1620.simulated = !!i1621[3]
  i1620.useAutoMass = !!i1621[4]
  i1620.mass = i1621[5]
  i1620.drag = i1621[6]
  i1620.angularDrag = i1621[7]
  i1620.gravityScale = i1621[8]
  i1620.collisionDetectionMode = i1621[9]
  i1620.sleepMode = i1621[10]
  i1620.constraints = i1621[11]
  return i1620
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1622 = root || request.c( 'MonsterController' )
  var i1623 = data
  var i1625 = i1623[0]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('BodySprite')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('BodySprite', i1625[i + 0]));
  }
  i1622.body = i1624
  request.r(i1623[1], i1623[2], 0, i1622, 'joint')
  request.r(i1623[3], i1623[4], 0, i1622, 'rb')
  request.r(i1623[5], i1623[6], 0, i1622, 'deadSFX')
  i1622.force = new pc.Vec2( i1623[7], i1623[8] )
  return i1622
}

Deserializers["BodySprite"] = function (request, data, root) {
  var i1628 = root || request.c( 'BodySprite' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'Renderer')
  request.r(i1629[2], i1629[3], 0, i1628, 'ZombieSprite')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1631 = data
  i1630.color = new pc.Color(i1631[0], i1631[1], i1631[2], i1631[3])
  request.r(i1631[4], i1631[5], 0, i1630, 'sprite')
  i1630.flipX = !!i1631[6]
  i1630.flipY = !!i1631[7]
  i1630.drawMode = i1631[8]
  i1630.size = new pc.Vec2( i1631[9], i1631[10] )
  i1630.tileMode = i1631[11]
  i1630.adaptiveModeThreshold = i1631[12]
  i1630.maskInteraction = i1631[13]
  i1630.spriteSortPoint = i1631[14]
  i1630.enabled = !!i1631[15]
  request.r(i1631[16], i1631[17], 0, i1630, 'sharedMaterial')
  var i1633 = i1631[18]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 2, i1632, '')
  }
  i1630.sharedMaterials = i1632
  i1630.receiveShadows = !!i1631[19]
  i1630.shadowCastingMode = i1631[20]
  i1630.sortingLayerID = i1631[21]
  i1630.sortingOrder = i1631[22]
  i1630.lightmapIndex = i1631[23]
  i1630.lightmapSceneIndex = i1631[24]
  i1630.lightmapScaleOffset = new pc.Vec4( i1631[25], i1631[26], i1631[27], i1631[28] )
  i1630.lightProbeUsage = i1631[29]
  i1630.reflectionProbeUsage = i1631[30]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1635 = data
  i1634.usedByComposite = !!i1635[0]
  i1634.autoTiling = !!i1635[1]
  i1634.size = new pc.Vec2( i1635[2], i1635[3] )
  i1634.edgeRadius = i1635[4]
  i1634.enabled = !!i1635[5]
  i1634.isTrigger = !!i1635[6]
  i1634.usedByEffector = !!i1635[7]
  i1634.density = i1635[8]
  i1634.offset = new pc.Vec2( i1635[9], i1635[10] )
  request.r(i1635[11], i1635[12], 0, i1634, 'material')
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1637 = data
  i1636.useLimits = !!i1637[0]
  i1636.limits = request.d('UnityEngine.JointAngleLimits2D', i1637[1], i1636.limits)
  i1636.useMotor = !!i1637[2]
  i1636.motor = request.d('UnityEngine.JointMotor2D', i1637[3], i1636.motor)
  i1636.anchor = new pc.Vec2( i1637[4], i1637[5] )
  i1636.connectedAnchor = new pc.Vec2( i1637[6], i1637[7] )
  i1636.autoConfigureConnectedAnchor = !!i1637[8]
  request.r(i1637[9], i1637[10], 0, i1636, 'connectedBody')
  i1636.breakForce = i1637[11]
  i1636.breakTorque = i1637[12]
  i1636.enableCollision = !!i1637[13]
  i1636.enabled = !!i1637[14]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1639 = data
  i1638.autoConfigureTarget = !!i1639[0]
  i1638.target = new pc.Vec2( i1639[1], i1639[2] )
  i1638.anchor = new pc.Vec2( i1639[3], i1639[4] )
  i1638.maxForce = i1639[5]
  i1638.dampingRatio = i1639[6]
  i1638.frequency = i1639[7]
  request.r(i1639[8], i1639[9], 0, i1638, 'connectedBody')
  i1638.breakForce = i1639[10]
  i1638.breakTorque = i1639[11]
  i1638.enableCollision = !!i1639[12]
  i1638.enabled = !!i1639[13]
  return i1638
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1640 = root || request.c( 'BonkController' )
  var i1641 = data
  i1640.target = i1641[0]
  i1640.maxBonk = i1641[1]
  request.r(i1641[2], i1641[3], 0, i1640, 'hitSound')
  return i1640
}

Deserializers["ActiveOnActive"] = function (request, data, root) {
  var i1642 = root || request.c( 'ActiveOnActive' )
  var i1643 = data
  var i1645 = i1643[0]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 1, i1644, '')
  }
  i1642.active = i1644
  return i1642
}

Deserializers["DropPiece"] = function (request, data, root) {
  var i1648 = root || request.c( 'DropPiece' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'joint')
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'animatorController')
  request.r(i1651[2], i1651[3], 0, i1650, 'avatar')
  i1650.updateMode = i1651[4]
  i1650.hasTransformHierarchy = !!i1651[5]
  i1650.applyRootMotion = !!i1651[6]
  var i1653 = i1651[7]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 2, i1652, '')
  }
  i1650.humanBones = i1652
  i1650.enabled = !!i1651[8]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'clip')
  request.r(i1657[2], i1657[3], 0, i1656, 'outputAudioMixerGroup')
  i1656.playOnAwake = !!i1657[4]
  i1656.loop = !!i1657[5]
  i1656.time = i1657[6]
  i1656.volume = i1657[7]
  i1656.pitch = i1657[8]
  i1656.enabled = !!i1657[9]
  return i1656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Button' )
  var i1659 = data
  i1658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1659[0], i1658.m_OnClick)
  i1658.m_Navigation = request.d('UnityEngine.UI.Navigation', i1659[1], i1658.m_Navigation)
  i1658.m_Transition = i1659[2]
  i1658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1659[3], i1658.m_Colors)
  i1658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1659[4], i1658.m_SpriteState)
  i1658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1659[5], i1658.m_AnimationTriggers)
  i1658.m_Interactable = !!i1659[6]
  request.r(i1659[7], i1659[8], 0, i1658, 'm_TargetGraphic')
  return i1658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1661 = data
  i1660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1661[0], i1660.m_PersistentCalls)
  return i1660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1663 = data
  var i1665 = i1663[0]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.add(request.d('UnityEngine.Events.PersistentCall', i1665[i + 0]));
  }
  i1662.m_Calls = i1664
  return i1662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1669 = data
  request.r(i1669[0], i1669[1], 0, i1668, 'm_Target')
  i1668.m_TargetAssemblyTypeName = i1669[2]
  i1668.m_MethodName = i1669[3]
  i1668.m_Mode = i1669[4]
  i1668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1669[5], i1668.m_Arguments)
  i1668.m_CallState = i1669[6]
  return i1668
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1671 = data
  i1670.m_Mode = i1671[0]
  i1670.m_WrapAround = !!i1671[1]
  request.r(i1671[2], i1671[3], 0, i1670, 'm_SelectOnUp')
  request.r(i1671[4], i1671[5], 0, i1670, 'm_SelectOnDown')
  request.r(i1671[6], i1671[7], 0, i1670, 'm_SelectOnLeft')
  request.r(i1671[8], i1671[9], 0, i1670, 'm_SelectOnRight')
  return i1670
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1673 = data
  i1672.m_NormalColor = new pc.Color(i1673[0], i1673[1], i1673[2], i1673[3])
  i1672.m_HighlightedColor = new pc.Color(i1673[4], i1673[5], i1673[6], i1673[7])
  i1672.m_PressedColor = new pc.Color(i1673[8], i1673[9], i1673[10], i1673[11])
  i1672.m_SelectedColor = new pc.Color(i1673[12], i1673[13], i1673[14], i1673[15])
  i1672.m_DisabledColor = new pc.Color(i1673[16], i1673[17], i1673[18], i1673[19])
  i1672.m_ColorMultiplier = i1673[20]
  i1672.m_FadeDuration = i1673[21]
  return i1672
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'm_HighlightedSprite')
  request.r(i1675[2], i1675[3], 0, i1674, 'm_PressedSprite')
  request.r(i1675[4], i1675[5], 0, i1674, 'm_SelectedSprite')
  request.r(i1675[6], i1675[7], 0, i1674, 'm_DisabledSprite')
  return i1674
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1677 = data
  i1676.m_NormalTrigger = i1677[0]
  i1676.m_HighlightedTrigger = i1677[1]
  i1676.m_PressedTrigger = i1677[2]
  i1676.m_SelectedTrigger = i1677[3]
  i1676.m_DisabledTrigger = i1677[4]
  return i1676
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.Image' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_Sprite')
  i1678.m_Type = i1679[2]
  i1678.m_PreserveAspect = !!i1679[3]
  i1678.m_FillCenter = !!i1679[4]
  i1678.m_FillMethod = i1679[5]
  i1678.m_FillAmount = i1679[6]
  i1678.m_FillClockwise = !!i1679[7]
  i1678.m_FillOrigin = i1679[8]
  i1678.m_UseSpriteMesh = !!i1679[9]
  i1678.m_PixelsPerUnitMultiplier = i1679[10]
  request.r(i1679[11], i1679[12], 0, i1678, 'm_Material')
  i1678.m_Maskable = !!i1679[13]
  i1678.m_Color = new pc.Color(i1679[14], i1679[15], i1679[16], i1679[17])
  i1678.m_RaycastTarget = !!i1679[18]
  i1678.m_RaycastPadding = new pc.Vec4( i1679[19], i1679[20], i1679[21], i1679[22] )
  return i1678
}

Deserializers["ActiveOnClick"] = function (request, data, root) {
  var i1680 = root || request.c( 'ActiveOnClick' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'button')
  request.r(i1681[2], i1681[3], 0, i1680, 'clickSound')
  var i1683 = i1681[4]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 1, i1682, '')
  }
  i1680.active = i1682
  return i1680
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1684 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1685 = data
  i1684.targetIsSelf = !!i1685[0]
  request.r(i1685[1], i1685[2], 0, i1684, 'targetGO')
  i1684.tweenTargetIsTargetGO = !!i1685[3]
  i1684.delay = i1685[4]
  i1684.duration = i1685[5]
  i1684.easeType = i1685[6]
  i1684.easeCurve = new pc.AnimationCurve( { keys_flow: i1685[7] } )
  i1684.loopType = i1685[8]
  i1684.loops = i1685[9]
  i1684.id = i1685[10]
  i1684.isRelative = !!i1685[11]
  i1684.isFrom = !!i1685[12]
  i1684.isIndependentUpdate = !!i1685[13]
  i1684.autoKill = !!i1685[14]
  i1684.autoGenerate = !!i1685[15]
  i1684.isActive = !!i1685[16]
  i1684.isValid = !!i1685[17]
  request.r(i1685[18], i1685[19], 0, i1684, 'target')
  i1684.animationType = i1685[20]
  i1684.targetType = i1685[21]
  i1684.forcedTargetType = i1685[22]
  i1684.autoPlay = !!i1685[23]
  i1684.useTargetAsV3 = !!i1685[24]
  i1684.endValueFloat = i1685[25]
  i1684.endValueV3 = new pc.Vec3( i1685[26], i1685[27], i1685[28] )
  i1684.endValueV2 = new pc.Vec2( i1685[29], i1685[30] )
  i1684.endValueColor = new pc.Color(i1685[31], i1685[32], i1685[33], i1685[34])
  i1684.endValueString = i1685[35]
  i1684.endValueRect = UnityEngine.Rect.MinMaxRect(i1685[36], i1685[37], i1685[38], i1685[39])
  request.r(i1685[40], i1685[41], 0, i1684, 'endValueTransform')
  i1684.optionalBool0 = !!i1685[42]
  i1684.optionalBool1 = !!i1685[43]
  i1684.optionalFloat0 = i1685[44]
  i1684.optionalInt0 = i1685[45]
  i1684.optionalRotationMode = i1685[46]
  i1684.optionalScrambleMode = i1685[47]
  i1684.optionalShakeRandomnessMode = i1685[48]
  i1684.optionalString = i1685[49]
  i1684.updateType = i1685[50]
  i1684.isSpeedBased = !!i1685[51]
  i1684.hasOnStart = !!i1685[52]
  i1684.hasOnPlay = !!i1685[53]
  i1684.hasOnUpdate = !!i1685[54]
  i1684.hasOnStepComplete = !!i1685[55]
  i1684.hasOnComplete = !!i1685[56]
  i1684.hasOnTweenCreated = !!i1685[57]
  i1684.hasOnRewind = !!i1685[58]
  i1684.onStart = request.d('UnityEngine.Events.UnityEvent', i1685[59], i1684.onStart)
  i1684.onPlay = request.d('UnityEngine.Events.UnityEvent', i1685[60], i1684.onPlay)
  i1684.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1685[61], i1684.onUpdate)
  i1684.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1685[62], i1684.onStepComplete)
  i1684.onComplete = request.d('UnityEngine.Events.UnityEvent', i1685[63], i1684.onComplete)
  i1684.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1685[64], i1684.onTweenCreated)
  i1684.onRewind = request.d('UnityEngine.Events.UnityEvent', i1685[65], i1684.onRewind)
  return i1684
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1687 = data
  i1686.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1687[0], i1686.m_PersistentCalls)
  return i1686
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.Text' )
  var i1689 = data
  i1688.m_FontData = request.d('UnityEngine.UI.FontData', i1689[0], i1688.m_FontData)
  i1688.m_Text = i1689[1]
  request.r(i1689[2], i1689[3], 0, i1688, 'm_Material')
  i1688.m_Maskable = !!i1689[4]
  i1688.m_Color = new pc.Color(i1689[5], i1689[6], i1689[7], i1689[8])
  i1688.m_RaycastTarget = !!i1689[9]
  i1688.m_RaycastPadding = new pc.Vec4( i1689[10], i1689[11], i1689[12], i1689[13] )
  return i1688
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'm_Font')
  i1690.m_FontSize = i1691[2]
  i1690.m_FontStyle = i1691[3]
  i1690.m_BestFit = !!i1691[4]
  i1690.m_MinSize = i1691[5]
  i1690.m_MaxSize = i1691[6]
  i1690.m_Alignment = i1691[7]
  i1690.m_AlignByGeometry = !!i1691[8]
  i1690.m_RichText = !!i1691[9]
  i1690.m_HorizontalOverflow = i1691[10]
  i1690.m_VerticalOverflow = i1691[11]
  i1690.m_LineSpacing = i1691[12]
  return i1690
}

Deserializers["GameController"] = function (request, data, root) {
  var i1692 = root || request.c( 'GameController' )
  var i1693 = data
  i1692.OnNextLevel = request.d('System.Action', i1693[0], i1692.OnNextLevel)
  var i1695 = i1693[1]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1695.length; i += 2) {
  request.r(i1695[i + 0], i1695[i + 1], 1, i1694, '')
  }
  i1692.monsters = i1694
  var i1697 = i1693[2]
  var i1696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 1, i1696, '')
  }
  i1692.levels = i1696
  request.r(i1693[3], i1693[4], 0, i1692, 'target')
  i1692.index = i1693[5]
  i1692.end = !!i1693[6]
  request.r(i1693[7], i1693[8], 0, i1692, 'endUI')
  return i1692
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1698 = root || request.c( 'System.Action' )
  var i1699 = data
  return i1698
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1702 = root || request.c( 'TargetController' )
  var i1703 = data
  var i1705 = i1703[0]
  var i1704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 1, i1704, '')
  }
  i1702.listTarget = i1704
  request.r(i1703[1], i1703[2], 0, i1702, 'currentTarget')
  i1702.index = i1703[3]
  request.r(i1703[4], i1703[5], 0, i1702, 'tut')
  request.r(i1703[6], i1703[7], 0, i1702, 'tut2')
  request.r(i1703[8], i1703[9], 0, i1702, 'tut3')
  return i1702
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1708 = root || request.c( 'LunaController' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'BGTexture')
  i1708.UseTime = !!i1709[2]
  i1708.TimePlay = i1709[3]
  i1708.NumberLevel = i1709[4]
  request.r(i1709[5], i1709[6], 0, i1708, 'BGImage')
  var i1711 = i1709[7]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 1, i1710, '')
  }
  i1708.CTA = i1710
  request.r(i1709[8], i1709[9], 0, i1708, 'endCard')
  return i1708
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1714 = root || request.c( 'LayoutController' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'mainCamera')
  request.r(i1715[2], i1715[3], 0, i1714, 'optionButton')
  return i1714
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1716 = root || request.c( 'AudioController' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'BGM')
  request.r(i1717[2], i1717[3], 0, i1716, 'musicSource')
  request.r(i1717[4], i1717[5], 0, i1716, 'pool')
  return i1716
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1718 = root || request.c( 'VFXController' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'bloodPrefab')
  request.r(i1719[2], i1719[3], 0, i1718, 'pool')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1721 = data
  i1720.ambientIntensity = i1721[0]
  i1720.reflectionIntensity = i1721[1]
  i1720.ambientMode = i1721[2]
  i1720.ambientLight = new pc.Color(i1721[3], i1721[4], i1721[5], i1721[6])
  i1720.ambientSkyColor = new pc.Color(i1721[7], i1721[8], i1721[9], i1721[10])
  i1720.ambientGroundColor = new pc.Color(i1721[11], i1721[12], i1721[13], i1721[14])
  i1720.ambientEquatorColor = new pc.Color(i1721[15], i1721[16], i1721[17], i1721[18])
  i1720.fogColor = new pc.Color(i1721[19], i1721[20], i1721[21], i1721[22])
  i1720.fogEndDistance = i1721[23]
  i1720.fogStartDistance = i1721[24]
  i1720.fogDensity = i1721[25]
  i1720.fog = !!i1721[26]
  request.r(i1721[27], i1721[28], 0, i1720, 'skybox')
  i1720.fogMode = i1721[29]
  var i1723 = i1721[30]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1723[i + 0]) );
  }
  i1720.lightmaps = i1722
  i1720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1721[31], i1720.lightProbes)
  i1720.lightmapsMode = i1721[32]
  i1720.mixedBakeMode = i1721[33]
  i1720.environmentLightingMode = i1721[34]
  i1720.ambientProbe = new pc.SphericalHarmonicsL2(i1721[35])
  request.r(i1721[36], i1721[37], 0, i1720, 'customReflection')
  request.r(i1721[38], i1721[39], 0, i1720, 'defaultReflection')
  i1720.defaultReflectionMode = i1721[40]
  i1720.defaultReflectionResolution = i1721[41]
  i1720.sunLightObjectId = i1721[42]
  i1720.pixelLightCount = i1721[43]
  i1720.defaultReflectionHDR = !!i1721[44]
  i1720.hasLightDataAsset = !!i1721[45]
  i1720.hasManualGenerate = !!i1721[46]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'lightmapColor')
  request.r(i1727[2], i1727[3], 0, i1726, 'lightmapDirection')
  request.r(i1727[4], i1727[5], 0, i1726, 'shadowMask')
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1728 = root || new UnityEngine.LightProbes()
  var i1729 = data
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1739[i + 0]));
  }
  i1736.ShaderCompilationErrors = i1738
  i1736.name = i1737[1]
  i1736.guid = i1737[2]
  var i1741 = i1737[3]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( i1741[i + 0] );
  }
  i1736.shaderDefinedKeywords = i1740
  var i1743 = i1737[4]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1743[i + 0]) );
  }
  i1736.passes = i1742
  var i1745 = i1737[5]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1745[i + 0]) );
  }
  i1736.usePasses = i1744
  var i1747 = i1737[6]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1747[i + 0]) );
  }
  i1736.defaultParameterValues = i1746
  request.r(i1737[7], i1737[8], 0, i1736, 'unityFallbackShader')
  i1736.readDepth = !!i1737[9]
  i1736.hasDepthOnlyPass = !!i1737[10]
  i1736.isCreatedByShaderGraph = !!i1737[11]
  i1736.disableBatching = !!i1737[12]
  i1736.compiled = !!i1737[13]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1751 = data
  i1750.shaderName = i1751[0]
  i1750.errorMessage = i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1756 = root || new pc.UnityShaderPass()
  var i1757 = data
  i1756.id = i1757[0]
  i1756.subShaderIndex = i1757[1]
  i1756.name = i1757[2]
  i1756.passType = i1757[3]
  i1756.grabPassTextureName = i1757[4]
  i1756.usePass = !!i1757[5]
  i1756.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[6], i1756.zTest)
  i1756.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[7], i1756.zWrite)
  i1756.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[8], i1756.culling)
  i1756.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1757[9], i1756.blending)
  i1756.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1757[10], i1756.alphaBlending)
  i1756.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[11], i1756.colorWriteMask)
  i1756.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[12], i1756.offsetUnits)
  i1756.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[13], i1756.offsetFactor)
  i1756.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[14], i1756.stencilRef)
  i1756.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[15], i1756.stencilReadMask)
  i1756.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[16], i1756.stencilWriteMask)
  i1756.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[17], i1756.stencilOp)
  i1756.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[18], i1756.stencilOpFront)
  i1756.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[19], i1756.stencilOpBack)
  var i1759 = i1757[20]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1759[i + 0]) );
  }
  i1756.tags = i1758
  var i1761 = i1757[21]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1756.passDefinedKeywords = i1760
  var i1763 = i1757[22]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1763[i + 0]) );
  }
  i1756.passDefinedKeywordGroups = i1762
  var i1765 = i1757[23]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1765[i + 0]) );
  }
  i1756.variants = i1764
  var i1767 = i1757[24]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1767[i + 0]) );
  }
  i1756.excludedVariants = i1766
  i1756.hasDepthReader = !!i1757[25]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1769 = data
  i1768.val = i1769[0]
  i1768.name = i1769[1]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1771 = data
  i1770.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[0], i1770.src)
  i1770.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[1], i1770.dst)
  i1770.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[2], i1770.op)
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1773 = data
  i1772.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[0], i1772.pass)
  i1772.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[1], i1772.fail)
  i1772.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[2], i1772.zFail)
  i1772.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[3], i1772.comp)
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.value = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( i1783[i + 0] );
  }
  i1780.keywords = i1782
  i1780.hasDiscard = !!i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1787 = data
  i1786.passId = i1787[0]
  i1786.subShaderIndex = i1787[1]
  var i1789 = i1787[2]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( i1789[i + 0] );
  }
  i1786.keywords = i1788
  i1786.vertexProgram = i1787[3]
  i1786.fragmentProgram = i1787[4]
  i1786.exportedForWebGl2 = !!i1787[5]
  i1786.readDepth = !!i1787[6]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'shader')
  i1792.pass = i1793[2]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1797 = data
  i1796.name = i1797[0]
  i1796.type = i1797[1]
  i1796.value = new pc.Vec4( i1797[2], i1797[3], i1797[4], i1797[5] )
  i1796.textureValue = i1797[6]
  i1796.shaderPropertyFlag = i1797[7]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1799 = data
  i1798.name = i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'texture')
  i1798.aabb = i1799[3]
  i1798.vertices = i1799[4]
  i1798.triangles = i1799[5]
  i1798.textureRect = UnityEngine.Rect.MinMaxRect(i1799[6], i1799[7], i1799[8], i1799[9])
  i1798.packedRect = UnityEngine.Rect.MinMaxRect(i1799[10], i1799[11], i1799[12], i1799[13])
  i1798.border = new pc.Vec4( i1799[14], i1799[15], i1799[16], i1799[17] )
  i1798.transparency = i1799[18]
  i1798.bounds = i1799[19]
  i1798.pixelsPerUnit = i1799[20]
  i1798.textureWidth = i1799[21]
  i1798.textureHeight = i1799[22]
  i1798.nativeSize = new pc.Vec2( i1799[23], i1799[24] )
  i1798.pivot = new pc.Vec2( i1799[25], i1799[26] )
  i1798.textureRectOffset = new pc.Vec2( i1799[27], i1799[28] )
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1801 = data
  i1800.name = i1801[0]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.wrapMode = i1803[1]
  i1802.isLooping = !!i1803[2]
  i1802.length = i1803[3]
  var i1805 = i1803[4]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1805[i + 0]) );
  }
  i1802.curves = i1804
  var i1807 = i1803[5]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1807[i + 0]) );
  }
  i1802.events = i1806
  i1802.halfPrecision = !!i1803[6]
  i1802._frameRate = i1803[7]
  i1802.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1803[8], i1802.localBounds)
  i1802.hasMuscleCurves = !!i1803[9]
  var i1809 = i1803[10]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1802.clipMuscleConstant = i1808
  i1802.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1803[11], i1802.clipBindingConstant)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1813 = data
  i1812.path = i1813[0]
  i1812.hash = i1813[1]
  i1812.componentType = i1813[2]
  i1812.property = i1813[3]
  i1812.keys = i1813[4]
  var i1815 = i1813[5]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1815[i + 0]) );
  }
  i1812.objectReferenceKeys = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1819 = data
  i1818.time = i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'value')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1823 = data
  i1822.functionName = i1823[0]
  i1822.floatParameter = i1823[1]
  i1822.intParameter = i1823[2]
  i1822.stringParameter = i1823[3]
  request.r(i1823[4], i1823[5], 0, i1822, 'objectReferenceParameter')
  i1822.time = i1823[6]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1825 = data
  i1824.center = new pc.Vec3( i1825[0], i1825[1], i1825[2] )
  i1824.extends = new pc.Vec3( i1825[3], i1825[4], i1825[5] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( i1831[i + 0] );
  }
  i1828.genericBindings = i1830
  var i1833 = i1829[1]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1828.pptrCurveMapping = i1832
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.ascent = i1835[1]
  i1834.originalLineHeight = i1835[2]
  i1834.fontSize = i1835[3]
  var i1837 = i1835[4]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1837[i + 0]) );
  }
  i1834.characterInfo = i1836
  request.r(i1835[5], i1835[6], 0, i1834, 'texture')
  i1834.originalFontSize = i1835[7]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1841 = data
  i1840.index = i1841[0]
  i1840.advance = i1841[1]
  i1840.bearing = i1841[2]
  i1840.glyphWidth = i1841[3]
  i1840.glyphHeight = i1841[4]
  i1840.minX = i1841[5]
  i1840.maxX = i1841[6]
  i1840.minY = i1841[7]
  i1840.maxY = i1841[8]
  i1840.uvBottomLeftX = i1841[9]
  i1840.uvBottomLeftY = i1841[10]
  i1840.uvBottomRightX = i1841[11]
  i1840.uvBottomRightY = i1841[12]
  i1840.uvTopLeftX = i1841[13]
  i1840.uvTopLeftY = i1841[14]
  i1840.uvTopRightX = i1841[15]
  i1840.uvTopRightY = i1841[16]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1843 = data
  i1842.name = i1843[0]
  var i1845 = i1843[1]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1845[i + 0]) );
  }
  i1842.layers = i1844
  var i1847 = i1843[2]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1847[i + 0]) );
  }
  i1842.parameters = i1846
  i1842.animationClips = i1843[3]
  i1842.avatarUnsupported = i1843[4]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.defaultWeight = i1851[1]
  i1850.blendingMode = i1851[2]
  i1850.avatarMask = i1851[3]
  i1850.syncedLayerIndex = i1851[4]
  i1850.syncedLayerAffectsTiming = !!i1851[5]
  i1850.syncedLayers = i1851[6]
  i1850.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1851[7], i1850.stateMachine)
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1853 = data
  i1852.id = i1853[0]
  i1852.name = i1853[1]
  i1852.path = i1853[2]
  var i1855 = i1853[3]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1855[i + 0]) );
  }
  i1852.states = i1854
  var i1857 = i1853[4]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1857[i + 0]) );
  }
  i1852.machines = i1856
  var i1859 = i1853[5]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1859[i + 0]) );
  }
  i1852.entryStateTransitions = i1858
  var i1861 = i1853[6]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1861[i + 0]) );
  }
  i1852.exitStateTransitions = i1860
  var i1863 = i1853[7]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1863[i + 0]) );
  }
  i1852.anyStateTransitions = i1862
  i1852.defaultStateId = i1853[8]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1867 = data
  i1866.id = i1867[0]
  i1866.name = i1867[1]
  i1866.cycleOffset = i1867[2]
  i1866.cycleOffsetParameter = i1867[3]
  i1866.cycleOffsetParameterActive = !!i1867[4]
  i1866.mirror = !!i1867[5]
  i1866.mirrorParameter = i1867[6]
  i1866.mirrorParameterActive = !!i1867[7]
  i1866.motionId = i1867[8]
  i1866.nameHash = i1867[9]
  i1866.fullPathHash = i1867[10]
  i1866.speed = i1867[11]
  i1866.speedParameter = i1867[12]
  i1866.speedParameterActive = !!i1867[13]
  i1866.tag = i1867[14]
  i1866.tagHash = i1867[15]
  i1866.writeDefaultValues = !!i1867[16]
  var i1869 = i1867[17]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.behaviours = i1868
  var i1871 = i1867[18]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1871[i + 0]) );
  }
  i1866.transitions = i1870
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1877 = data
  i1876.fullPath = i1877[0]
  i1876.canTransitionToSelf = !!i1877[1]
  i1876.duration = i1877[2]
  i1876.exitTime = i1877[3]
  i1876.hasExitTime = !!i1877[4]
  i1876.hasFixedDuration = !!i1877[5]
  i1876.interruptionSource = i1877[6]
  i1876.offset = i1877[7]
  i1876.orderedInterruption = !!i1877[8]
  i1876.destinationStateId = i1877[9]
  i1876.isExit = !!i1877[10]
  i1876.mute = !!i1877[11]
  i1876.solo = !!i1877[12]
  var i1879 = i1877[13]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1879[i + 0]) );
  }
  i1876.conditions = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1885 = data
  i1884.destinationStateId = i1885[0]
  i1884.isExit = !!i1885[1]
  i1884.mute = !!i1885[2]
  i1884.solo = !!i1885[3]
  var i1887 = i1885[4]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1887[i + 0]) );
  }
  i1884.conditions = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1891 = data
  i1890.defaultBool = !!i1891[0]
  i1890.defaultFloat = i1891[1]
  i1890.defaultInt = i1891[2]
  i1890.name = i1891[3]
  i1890.nameHash = i1891[4]
  i1890.type = i1891[5]
  return i1890
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1892 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1893 = data
  i1892.useSafeMode = !!i1893[0]
  i1892.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1893[1], i1892.safeModeOptions)
  i1892.timeScale = i1893[2]
  i1892.unscaledTimeScale = i1893[3]
  i1892.useSmoothDeltaTime = !!i1893[4]
  i1892.maxSmoothUnscaledTime = i1893[5]
  i1892.rewindCallbackMode = i1893[6]
  i1892.showUnityEditorReport = !!i1893[7]
  i1892.logBehaviour = i1893[8]
  i1892.drawGizmos = !!i1893[9]
  i1892.defaultRecyclable = !!i1893[10]
  i1892.defaultAutoPlay = i1893[11]
  i1892.defaultUpdateType = i1893[12]
  i1892.defaultTimeScaleIndependent = !!i1893[13]
  i1892.defaultEaseType = i1893[14]
  i1892.defaultEaseOvershootOrAmplitude = i1893[15]
  i1892.defaultEasePeriod = i1893[16]
  i1892.defaultAutoKill = !!i1893[17]
  i1892.defaultLoopType = i1893[18]
  i1892.debugMode = !!i1893[19]
  i1892.debugStoreTargetId = !!i1893[20]
  i1892.showPreviewPanel = !!i1893[21]
  i1892.storeSettingsLocation = i1893[22]
  i1892.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1893[23], i1892.modules)
  i1892.createASMDEF = !!i1893[24]
  i1892.showPlayingTweens = !!i1893[25]
  i1892.showPausedTweens = !!i1893[26]
  return i1892
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1895 = data
  i1894.logBehaviour = i1895[0]
  i1894.nestedTweenFailureBehaviour = i1895[1]
  return i1894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1897 = data
  i1896.showPanel = !!i1897[0]
  i1896.audioEnabled = !!i1897[1]
  i1896.physicsEnabled = !!i1897[2]
  i1896.physics2DEnabled = !!i1897[3]
  i1896.spriteEnabled = !!i1897[4]
  i1896.uiEnabled = !!i1897[5]
  i1896.textMeshProEnabled = !!i1897[6]
  i1896.tk2DEnabled = !!i1897[7]
  i1896.deAudioEnabled = !!i1897[8]
  i1896.deUnityExtendedEnabled = !!i1897[9]
  i1896.epoOutlineEnabled = !!i1897[10]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1901[i + 0]) );
  }
  i1898.files = i1900
  i1898.componentToPrefabIds = i1899[1]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1905 = data
  i1904.path = i1905[0]
  request.r(i1905[1], i1905[2], 0, i1904, 'unityObject')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1907 = data
  var i1909 = i1907[0]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1909[i + 0]) );
  }
  i1906.scriptsExecutionOrder = i1908
  var i1911 = i1907[1]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1911[i + 0]) );
  }
  i1906.sortingLayers = i1910
  var i1913 = i1907[2]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1913[i + 0]) );
  }
  i1906.cullingLayers = i1912
  i1906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1907[3], i1906.timeSettings)
  i1906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1907[4], i1906.physicsSettings)
  i1906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1907[5], i1906.physics2DSettings)
  i1906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1907[6], i1906.qualitySettings)
  i1906.enableRealtimeShadows = !!i1907[7]
  i1906.enableAutoInstancing = !!i1907[8]
  i1906.enableStaticBatching = !!i1907[9]
  i1906.enableDynamicBatching = !!i1907[10]
  i1906.usePreservativeDynamicBatching = !!i1907[11]
  i1906.lightmapEncodingQuality = i1907[12]
  i1906.desiredColorSpace = i1907[13]
  var i1915 = i1907[14]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1906.allTags = i1914
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1919 = data
  i1918.name = i1919[0]
  i1918.value = i1919[1]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1923 = data
  i1922.id = i1923[0]
  i1922.name = i1923[1]
  i1922.value = i1923[2]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1927 = data
  i1926.id = i1927[0]
  i1926.name = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1929 = data
  i1928.fixedDeltaTime = i1929[0]
  i1928.maximumDeltaTime = i1929[1]
  i1928.timeScale = i1929[2]
  i1928.maximumParticleTimestep = i1929[3]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1931 = data
  i1930.gravity = new pc.Vec3( i1931[0], i1931[1], i1931[2] )
  i1930.defaultSolverIterations = i1931[3]
  i1930.bounceThreshold = i1931[4]
  i1930.autoSyncTransforms = !!i1931[5]
  i1930.autoSimulation = !!i1931[6]
  var i1933 = i1931[7]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1933[i + 0]) );
  }
  i1930.collisionMatrix = i1932
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.layerId = i1937[1]
  i1936.otherLayerId = i1937[2]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'material')
  i1938.gravity = new pc.Vec2( i1939[2], i1939[3] )
  i1938.positionIterations = i1939[4]
  i1938.velocityIterations = i1939[5]
  i1938.velocityThreshold = i1939[6]
  i1938.maxLinearCorrection = i1939[7]
  i1938.maxAngularCorrection = i1939[8]
  i1938.maxTranslationSpeed = i1939[9]
  i1938.maxRotationSpeed = i1939[10]
  i1938.baumgarteScale = i1939[11]
  i1938.baumgarteTOIScale = i1939[12]
  i1938.timeToSleep = i1939[13]
  i1938.linearSleepTolerance = i1939[14]
  i1938.angularSleepTolerance = i1939[15]
  i1938.defaultContactOffset = i1939[16]
  i1938.autoSimulation = !!i1939[17]
  i1938.queriesHitTriggers = !!i1939[18]
  i1938.queriesStartInColliders = !!i1939[19]
  i1938.callbacksOnDisable = !!i1939[20]
  i1938.reuseCollisionCallbacks = !!i1939[21]
  i1938.autoSyncTransforms = !!i1939[22]
  var i1941 = i1939[23]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1941[i + 0]) );
  }
  i1938.collisionMatrix = i1940
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.layerId = i1945[1]
  i1944.otherLayerId = i1945[2]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1947 = data
  var i1949 = i1947[0]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1949[i + 0]) );
  }
  i1946.qualityLevels = i1948
  var i1951 = i1947[1]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( i1951[i + 0] );
  }
  i1946.names = i1950
  i1946.shadows = i1947[2]
  i1946.anisotropicFiltering = i1947[3]
  i1946.antiAliasing = i1947[4]
  i1946.lodBias = i1947[5]
  i1946.shadowCascades = i1947[6]
  i1946.shadowDistance = i1947[7]
  i1946.shadowmaskMode = i1947[8]
  i1946.shadowProjection = i1947[9]
  i1946.shadowResolution = i1947[10]
  i1946.softParticles = !!i1947[11]
  i1946.softVegetation = !!i1947[12]
  i1946.activeColorSpace = i1947[13]
  i1946.desiredColorSpace = i1947[14]
  i1946.masterTextureLimit = i1947[15]
  i1946.maxQueuedFrames = i1947[16]
  i1946.particleRaycastBudget = i1947[17]
  i1946.pixelLightCount = i1947[18]
  i1946.realtimeReflectionProbes = !!i1947[19]
  i1946.shadowCascade2Split = i1947[20]
  i1946.shadowCascade4Split = new pc.Vec3( i1947[21], i1947[22], i1947[23] )
  i1946.streamingMipmapsActive = !!i1947[24]
  i1946.vSyncCount = i1947[25]
  i1946.asyncUploadBufferSize = i1947[26]
  i1946.asyncUploadTimeSlice = i1947[27]
  i1946.billboardsFaceCameraPosition = !!i1947[28]
  i1946.shadowNearPlaneOffset = i1947[29]
  i1946.streamingMipmapsMemoryBudget = i1947[30]
  i1946.maximumLODLevel = i1947[31]
  i1946.streamingMipmapsAddAllCameras = !!i1947[32]
  i1946.streamingMipmapsMaxLevelReduction = i1947[33]
  i1946.streamingMipmapsRenderersPerFrame = i1947[34]
  i1946.resolutionScalingFixedDPIFactor = i1947[35]
  i1946.streamingMipmapsMaxFileIORequests = i1947[36]
  i1946.currentQualityLevel = i1947[37]
  return i1946
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_ObjectArgument')
  i1954.m_ObjectArgumentAssemblyTypeName = i1955[2]
  i1954.m_IntArgument = i1955[3]
  i1954.m_FloatArgument = i1955[4]
  i1954.m_StringArgument = i1955[5]
  i1954.m_BoolArgument = !!i1955[6]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1959 = data
  i1958.mode = i1959[0]
  i1958.parameter = i1959[1]
  i1958.threshold = i1959[2]
  return i1958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[6],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[19],"66":[19],"67":[19],"68":[19],"69":[19],"70":[19],"27":[19],"71":[19],"72":[19],"24":[19],"73":[19],"74":[19],"75":[19],"76":[6],"77":[78],"79":[80],"81":[80],"12":[11],"82":[22],"83":[6],"84":[85],"86":[11],"87":[15,11],"88":[78],"89":[15,11],"90":[11],"91":[11],"92":[78,11],"93":[11,15],"94":[95],"96":[95],"97":[95],"98":[11],"99":[11],"14":[12],"36":[15,11],"16":[11],"13":[12],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[11],"17":[15,11],"109":[11],"110":[11],"111":[11],"112":[11],"39":[15,11],"113":[11],"114":[9],"115":[9],"10":[9],"116":[9],"117":[6],"118":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","BonkController","ActiveOnActive","UnityEngine.GameObject","DropPiece","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","ActiveOnClick","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","GameController","TargetController","LunaController","LayoutController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/21/2026 04:45:21";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V07_YenTTH_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4386";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "5c25b261-3ee8-42e7-b716-d574f30058e0";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

