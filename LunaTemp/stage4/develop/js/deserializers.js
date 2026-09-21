var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSpring' )
  var i491 = data
  i490.spring = i491[0]
  i490.damper = i491[1]
  i490.targetPosition = i491[2]
  return i490
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointMotor' )
  var i493 = data
  i492.m_TargetVelocity = i493[0]
  i492.m_Force = i493[1]
  i492.m_FreeSpin = i493[2]
  return i492
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointLimits' )
  var i495 = data
  i494.m_Min = i495[0]
  i494.m_Max = i495[1]
  i494.m_Bounciness = i495[2]
  i494.m_BounceMinVelocity = i495[3]
  i494.m_ContactDistance = i495[4]
  i494.minBounce = i495[5]
  i494.maxBounce = i495[6]
  return i494
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointDrive' )
  var i497 = data
  i496.m_PositionSpring = i497[0]
  i496.m_PositionDamper = i497[1]
  i496.m_MaximumForce = i497[2]
  i496.m_UseAcceleration = i497[3]
  return i496
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i499 = data
  i498.m_Spring = i499[0]
  i498.m_Damper = i499[1]
  return i498
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i501 = data
  i500.m_Limit = i501[0]
  i500.m_Bounciness = i501[1]
  i500.m_ContactDistance = i501[2]
  return i500
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i503 = data
  i502.m_ExtremumSlip = i503[0]
  i502.m_ExtremumValue = i503[1]
  i502.m_AsymptoteSlip = i503[2]
  i502.m_AsymptoteValue = i503[3]
  i502.m_Stiffness = i503[4]
  return i502
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i505 = data
  i504.m_LowerAngle = i505[0]
  i504.m_UpperAngle = i505[1]
  return i504
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i507 = data
  i506.m_MotorSpeed = i507[0]
  i506.m_MaximumMotorTorque = i507[1]
  return i506
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i509 = data
  i508.m_DampingRatio = i509[0]
  i508.m_Frequency = i509[1]
  i508.m_Angle = i509[2]
  return i508
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i511 = data
  i510.m_LowerTranslation = i511[0]
  i510.m_UpperTranslation = i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i512 = root || new pc.UnityMaterial()
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'shader')
  i512.renderQueue = i513[3]
  i512.enableInstancing = !!i513[4]
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i515[i + 0]) );
  }
  i512.floatParameters = i514
  var i517 = i513[6]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i517[i + 0]) );
  }
  i512.colorParameters = i516
  var i519 = i513[7]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i519[i + 0]) );
  }
  i512.vectorParameters = i518
  var i521 = i513[8]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i521[i + 0]) );
  }
  i512.textureParameters = i520
  var i523 = i513[9]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i523[i + 0]) );
  }
  i512.materialFlags = i522
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Color(i531[1], i531[2], i531[3], i531[4])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = new pc.Vec4( i535[1], i535[2], i535[3], i535[4] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i539 = data
  i538.name = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'value')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i543 = data
  i542.name = i543[0]
  i542.enabled = !!i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i545 = data
  i544.name = i545[0]
  i544.width = i545[1]
  i544.height = i545[2]
  i544.mipmapCount = i545[3]
  i544.anisoLevel = i545[4]
  i544.filterMode = i545[5]
  i544.hdr = !!i545[6]
  i544.format = i545[7]
  i544.wrapMode = i545[8]
  i544.alphaIsTransparency = !!i545[9]
  i544.alphaSource = i545[10]
  i544.graphicsFormat = i545[11]
  i544.sRGBTexture = !!i545[12]
  i544.desiredColorSpace = i545[13]
  i544.wrapU = i545[14]
  i544.wrapV = i545[15]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i547 = data
  i546.position = new pc.Vec3( i547[0], i547[1], i547[2] )
  i546.scale = new pc.Vec3( i547[3], i547[4], i547[5] )
  i546.rotation = new pc.Quat(i547[6], i547[7], i547[8], i547[9])
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i549 = data
  i548.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i549[0], i548.main)
  i548.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i549[1], i548.colorBySpeed)
  i548.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i549[2], i548.colorOverLifetime)
  i548.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i549[3], i548.emission)
  i548.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i549[4], i548.rotationBySpeed)
  i548.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i549[5], i548.rotationOverLifetime)
  i548.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i549[6], i548.shape)
  i548.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i549[7], i548.sizeBySpeed)
  i548.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i549[8], i548.sizeOverLifetime)
  i548.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i549[9], i548.textureSheetAnimation)
  i548.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i549[10], i548.velocityOverLifetime)
  i548.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i549[11], i548.noise)
  i548.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i549[12], i548.inheritVelocity)
  i548.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i549[13], i548.forceOverLifetime)
  i548.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i549[14], i548.limitVelocityOverLifetime)
  i548.useAutoRandomSeed = !!i549[15]
  i548.randomSeed = i549[16]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemMain()
  var i551 = data
  i550.duration = i551[0]
  i550.loop = !!i551[1]
  i550.prewarm = !!i551[2]
  i550.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[3], i550.startDelay)
  i550.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[4], i550.startLifetime)
  i550.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[5], i550.startSpeed)
  i550.startSize3D = !!i551[6]
  i550.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[7], i550.startSizeX)
  i550.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[8], i550.startSizeY)
  i550.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[9], i550.startSizeZ)
  i550.startRotation3D = !!i551[10]
  i550.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[11], i550.startRotationX)
  i550.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[12], i550.startRotationY)
  i550.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[13], i550.startRotationZ)
  i550.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i551[14], i550.startColor)
  i550.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[15], i550.gravityModifier)
  i550.simulationSpace = i551[16]
  request.r(i551[17], i551[18], 0, i550, 'customSimulationSpace')
  i550.simulationSpeed = i551[19]
  i550.useUnscaledTime = !!i551[20]
  i550.scalingMode = i551[21]
  i550.playOnAwake = !!i551[22]
  i550.maxParticles = i551[23]
  i550.emitterVelocityMode = i551[24]
  i550.stopAction = i551[25]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i552 = root || new pc.MinMaxCurve()
  var i553 = data
  i552.mode = i553[0]
  i552.curveMin = new pc.AnimationCurve( { keys_flow: i553[1] } )
  i552.curveMax = new pc.AnimationCurve( { keys_flow: i553[2] } )
  i552.curveMultiplier = i553[3]
  i552.constantMin = i553[4]
  i552.constantMax = i553[5]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i554 = root || new pc.MinMaxGradient()
  var i555 = data
  i554.mode = i555[0]
  i554.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i555[1], i554.gradientMin)
  i554.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i555[2], i554.gradientMax)
  i554.colorMin = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.colorMax = new pc.Color(i555[7], i555[8], i555[9], i555[10])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i557 = data
  i556.mode = i557[0]
  var i559 = i557[1]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i559[i + 0]) );
  }
  i556.colorKeys = i558
  var i561 = i557[2]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i561[i + 0]) );
  }
  i556.alphaKeys = i560
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemColorBySpeed()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[1], i562.color)
  i562.range = new pc.Vec2( i563[2], i563[3] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i567 = data
  i566.color = new pc.Color(i567[0], i567[1], i567[2], i567[3])
  i566.time = i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i571 = data
  i570.alpha = i571[0]
  i570.time = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemColorOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i573[1], i572.color)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemEmitter()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.rateOverTime)
  i574.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.rateOverDistance)
  var i577 = i575[3]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i577[i + 0]) );
  }
  i574.bursts = i576
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemBurst()
  var i581 = data
  i580.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[0], i580.count)
  i580.cycleCount = i581[1]
  i580.minCount = i581[2]
  i580.maxCount = i581[3]
  i580.repeatInterval = i581[4]
  i580.time = i581[5]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemRotationBySpeed()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.x)
  i582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.y)
  i582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.z)
  i582.separateAxes = !!i583[4]
  i582.range = new pc.Vec2( i583[5], i583[6] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemRotationOverLifetime()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.separateAxes = !!i585[4]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemShape()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.shapeType = i587[1]
  i586.randomDirectionAmount = i587[2]
  i586.sphericalDirectionAmount = i587[3]
  i586.randomPositionAmount = i587[4]
  i586.alignToDirection = !!i587[5]
  i586.radius = i587[6]
  i586.radiusMode = i587[7]
  i586.radiusSpread = i587[8]
  i586.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[9], i586.radiusSpeed)
  i586.radiusThickness = i587[10]
  i586.angle = i587[11]
  i586.length = i587[12]
  i586.boxThickness = new pc.Vec3( i587[13], i587[14], i587[15] )
  i586.meshShapeType = i587[16]
  request.r(i587[17], i587[18], 0, i586, 'mesh')
  request.r(i587[19], i587[20], 0, i586, 'meshRenderer')
  request.r(i587[21], i587[22], 0, i586, 'skinnedMeshRenderer')
  i586.useMeshMaterialIndex = !!i587[23]
  i586.meshMaterialIndex = i587[24]
  i586.useMeshColors = !!i587[25]
  i586.normalOffset = i587[26]
  i586.arc = i587[27]
  i586.arcMode = i587[28]
  i586.arcSpread = i587[29]
  i586.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[30], i586.arcSpeed)
  i586.donutRadius = i587[31]
  i586.position = new pc.Vec3( i587[32], i587[33], i587[34] )
  i586.rotation = new pc.Vec3( i587[35], i587[36], i587[37] )
  i586.scale = new pc.Vec3( i587[38], i587[39], i587[40] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemSizeBySpeed()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.separateAxes = !!i589[4]
  i588.range = new pc.Vec2( i589[5], i589[6] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemSizeOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.separateAxes = !!i591[4]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.mode = i593[1]
  i592.animation = i593[2]
  i592.numTilesX = i593[3]
  i592.numTilesY = i593[4]
  i592.useRandomRow = !!i593[5]
  i592.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[6], i592.frameOverTime)
  i592.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[7], i592.startFrame)
  i592.cycleCount = i593[8]
  i592.rowIndex = i593[9]
  i592.flipU = i593[10]
  i592.flipV = i593[11]
  i592.spriteCount = i593[12]
  var i595 = i593[13]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sprites = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.x)
  i598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.y)
  i598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[3], i598.z)
  i598.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[4], i598.radial)
  i598.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[5], i598.speedModifier)
  i598.space = i599[6]
  i598.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[7], i598.orbitalX)
  i598.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[8], i598.orbitalY)
  i598.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[9], i598.orbitalZ)
  i598.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[10], i598.orbitalOffsetX)
  i598.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[11], i598.orbitalOffsetY)
  i598.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[12], i598.orbitalOffsetZ)
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemNoise()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.separateAxes = !!i601[1]
  i600.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.strengthX)
  i600.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.strengthY)
  i600.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.strengthZ)
  i600.frequency = i601[5]
  i600.damping = !!i601[6]
  i600.octaveCount = i601[7]
  i600.octaveMultiplier = i601[8]
  i600.octaveScale = i601[9]
  i600.quality = i601[10]
  i600.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.scrollSpeed)
  i600.scrollSpeedMultiplier = i601[12]
  i600.remapEnabled = !!i601[13]
  i600.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[14], i600.remapX)
  i600.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[15], i600.remapY)
  i600.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[16], i600.remapZ)
  i600.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[17], i600.positionAmount)
  i600.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[18], i600.rotationAmount)
  i600.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[19], i600.sizeAmount)
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemInheritVelocity()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.mode = i603[1]
  i602.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.curve)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemForceOverLifetime()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[1], i604.x)
  i604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.y)
  i604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.z)
  i604.space = i605[4]
  i604.randomized = !!i605[5]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.limit)
  i606.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.limitX)
  i606.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.limitY)
  i606.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[4], i606.limitZ)
  i606.dampen = i607[5]
  i606.separateAxes = !!i607[6]
  i606.space = i607[7]
  i606.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[8], i606.drag)
  i606.multiplyDragByParticleSize = !!i607[9]
  i606.multiplyDragByParticleVelocity = !!i607[10]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'mesh')
  i608.meshCount = i609[2]
  i608.activeVertexStreamsCount = i609[3]
  i608.alignment = i609[4]
  i608.renderMode = i609[5]
  i608.sortMode = i609[6]
  i608.lengthScale = i609[7]
  i608.velocityScale = i609[8]
  i608.cameraVelocityScale = i609[9]
  i608.normalDirection = i609[10]
  i608.sortingFudge = i609[11]
  i608.minParticleSize = i609[12]
  i608.maxParticleSize = i609[13]
  i608.pivot = new pc.Vec3( i609[14], i609[15], i609[16] )
  request.r(i609[17], i609[18], 0, i608, 'trailMaterial')
  i608.applyActiveColorSpace = !!i609[19]
  i608.enabled = !!i609[20]
  request.r(i609[21], i609[22], 0, i608, 'sharedMaterial')
  var i611 = i609[23]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.sharedMaterials = i610
  i608.receiveShadows = !!i609[24]
  i608.shadowCastingMode = i609[25]
  i608.sortingLayerID = i609[26]
  i608.sortingOrder = i609[27]
  i608.lightmapIndex = i609[28]
  i608.lightmapSceneIndex = i609[29]
  i608.lightmapScaleOffset = new pc.Vec4( i609[30], i609[31], i609[32], i609[33] )
  i608.lightProbeUsage = i609[34]
  i608.reflectionProbeUsage = i609[35]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i615 = data
  i614.name = i615[0]
  i614.tagId = i615[1]
  i614.enabled = !!i615[2]
  i614.isStatic = !!i615[3]
  i614.layer = i615[4]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i617 = data
  i616.name = i617[0]
  i616.index = i617[1]
  i616.startup = !!i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i619 = data
  i618.aspect = i619[0]
  i618.orthographic = !!i619[1]
  i618.orthographicSize = i619[2]
  i618.backgroundColor = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.nearClipPlane = i619[7]
  i618.farClipPlane = i619[8]
  i618.fieldOfView = i619[9]
  i618.depth = i619[10]
  i618.clearFlags = i619[11]
  i618.cullingMask = i619[12]
  i618.rect = i619[13]
  request.r(i619[14], i619[15], 0, i618, 'targetTexture')
  i618.usePhysicalProperties = !!i619[16]
  i618.focalLength = i619[17]
  i618.sensorSize = new pc.Vec2( i619[18], i619[19] )
  i618.lensShift = new pc.Vec2( i619[20], i619[21] )
  i618.gateFit = i619[22]
  i618.commandBufferCount = i619[23]
  i618.cameraType = i619[24]
  i618.enabled = !!i619[25]
  return i618
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_FirstSelected')
  i620.m_sendNavigationEvents = !!i621[2]
  i620.m_DragThreshold = i621[3]
  return i620
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i623 = data
  i622.m_HorizontalAxis = i623[0]
  i622.m_VerticalAxis = i623[1]
  i622.m_SubmitButton = i623[2]
  i622.m_CancelButton = i623[3]
  i622.m_InputActionsPerSecond = i623[4]
  i622.m_RepeatDelay = i623[5]
  i622.m_ForceModuleActive = !!i623[6]
  i622.m_SendPointerHoverToParent = !!i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i625 = data
  i624.pivot = new pc.Vec2( i625[0], i625[1] )
  i624.anchorMin = new pc.Vec2( i625[2], i625[3] )
  i624.anchorMax = new pc.Vec2( i625[4], i625[5] )
  i624.sizeDelta = new pc.Vec2( i625[6], i625[7] )
  i624.anchoredPosition3D = new pc.Vec3( i625[8], i625[9], i625[10] )
  i624.rotation = new pc.Quat(i625[11], i625[12], i625[13], i625[14])
  i624.scale = new pc.Vec3( i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i627 = data
  i626.planeDistance = i627[0]
  i626.referencePixelsPerUnit = i627[1]
  i626.isFallbackOverlay = !!i627[2]
  i626.renderMode = i627[3]
  i626.renderOrder = i627[4]
  i626.sortingLayerName = i627[5]
  i626.sortingOrder = i627[6]
  i626.scaleFactor = i627[7]
  request.r(i627[8], i627[9], 0, i626, 'worldCamera')
  i626.overrideSorting = !!i627[10]
  i626.pixelPerfect = !!i627[11]
  i626.targetDisplay = i627[12]
  i626.overridePixelPerfect = !!i627[13]
  i626.enabled = !!i627[14]
  return i626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i629 = data
  i628.m_UiScaleMode = i629[0]
  i628.m_ReferencePixelsPerUnit = i629[1]
  i628.m_ScaleFactor = i629[2]
  i628.m_ReferenceResolution = new pc.Vec2( i629[3], i629[4] )
  i628.m_ScreenMatchMode = i629[5]
  i628.m_MatchWidthOrHeight = i629[6]
  i628.m_PhysicalUnit = i629[7]
  i628.m_FallbackScreenDPI = i629[8]
  i628.m_DefaultSpriteDPI = i629[9]
  i628.m_DynamicPixelsPerUnit = i629[10]
  i628.m_PresetInfoIsWorld = !!i629[11]
  return i628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i631 = data
  i630.m_IgnoreReversedGraphics = !!i631[0]
  i630.m_BlockingObjects = i631[1]
  i630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i631[2] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i633 = data
  i632.cullTransparentMesh = !!i633[0]
  return i632
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i635 = data
  i634.m_AspectMode = i635[0]
  i634.m_AspectRatio = i635[1]
  return i634
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_Texture')
  i636.m_UVRect = UnityEngine.Rect.MinMaxRect(i637[2], i637[3], i637[4], i637[5])
  request.r(i637[6], i637[7], 0, i636, 'm_Material')
  i636.m_Maskable = !!i637[8]
  i636.m_Color = new pc.Color(i637[9], i637[10], i637[11], i637[12])
  i636.m_RaycastTarget = !!i637[13]
  i636.m_RaycastPadding = new pc.Vec4( i637[14], i637[15], i637[16], i637[17] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i639 = data
  i638.sortingLayerIndex = i639[0]
  i638.sortingOrder = i639[1]
  i638.sortingLayerName = i639[2]
  i638.enabled = !!i639[3]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i641 = data
  i640.bodyType = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'material')
  i640.simulated = !!i641[3]
  i640.useAutoMass = !!i641[4]
  i640.mass = i641[5]
  i640.drag = i641[6]
  i640.angularDrag = i641[7]
  i640.gravityScale = i641[8]
  i640.collisionDetectionMode = i641[9]
  i640.sleepMode = i641[10]
  i640.constraints = i641[11]
  return i640
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i642 = root || request.c( 'MonsterController' )
  var i643 = data
  var i645 = i643[0]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('BodySprite')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('BodySprite', i645[i + 0]));
  }
  i642.body = i644
  request.r(i643[1], i643[2], 0, i642, 'joint')
  request.r(i643[3], i643[4], 0, i642, 'rb')
  request.r(i643[5], i643[6], 0, i642, 'deadSFX')
  i642.force = new pc.Vec2( i643[7], i643[8] )
  return i642
}

Deserializers["BodySprite"] = function (request, data, root) {
  var i648 = root || request.c( 'BodySprite' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'Renderer')
  request.r(i649[2], i649[3], 0, i648, 'ZombieSprite')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i651 = data
  i650.color = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  request.r(i651[4], i651[5], 0, i650, 'sprite')
  i650.flipX = !!i651[6]
  i650.flipY = !!i651[7]
  i650.drawMode = i651[8]
  i650.size = new pc.Vec2( i651[9], i651[10] )
  i650.tileMode = i651[11]
  i650.adaptiveModeThreshold = i651[12]
  i650.maskInteraction = i651[13]
  i650.spriteSortPoint = i651[14]
  i650.enabled = !!i651[15]
  request.r(i651[16], i651[17], 0, i650, 'sharedMaterial')
  var i653 = i651[18]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.sharedMaterials = i652
  i650.receiveShadows = !!i651[19]
  i650.shadowCastingMode = i651[20]
  i650.sortingLayerID = i651[21]
  i650.sortingOrder = i651[22]
  i650.lightmapIndex = i651[23]
  i650.lightmapSceneIndex = i651[24]
  i650.lightmapScaleOffset = new pc.Vec4( i651[25], i651[26], i651[27], i651[28] )
  i650.lightProbeUsage = i651[29]
  i650.reflectionProbeUsage = i651[30]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i655 = data
  i654.usedByComposite = !!i655[0]
  i654.autoTiling = !!i655[1]
  i654.size = new pc.Vec2( i655[2], i655[3] )
  i654.edgeRadius = i655[4]
  i654.enabled = !!i655[5]
  i654.isTrigger = !!i655[6]
  i654.usedByEffector = !!i655[7]
  i654.density = i655[8]
  i654.offset = new pc.Vec2( i655[9], i655[10] )
  request.r(i655[11], i655[12], 0, i654, 'material')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i657 = data
  i656.useLimits = !!i657[0]
  i656.limits = request.d('UnityEngine.JointAngleLimits2D', i657[1], i656.limits)
  i656.useMotor = !!i657[2]
  i656.motor = request.d('UnityEngine.JointMotor2D', i657[3], i656.motor)
  i656.anchor = new pc.Vec2( i657[4], i657[5] )
  i656.connectedAnchor = new pc.Vec2( i657[6], i657[7] )
  i656.autoConfigureConnectedAnchor = !!i657[8]
  request.r(i657[9], i657[10], 0, i656, 'connectedBody')
  i656.breakForce = i657[11]
  i656.breakTorque = i657[12]
  i656.enableCollision = !!i657[13]
  i656.enabled = !!i657[14]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i659 = data
  i658.autoConfigureTarget = !!i659[0]
  i658.target = new pc.Vec2( i659[1], i659[2] )
  i658.anchor = new pc.Vec2( i659[3], i659[4] )
  i658.maxForce = i659[5]
  i658.dampingRatio = i659[6]
  i658.frequency = i659[7]
  request.r(i659[8], i659[9], 0, i658, 'connectedBody')
  i658.breakForce = i659[10]
  i658.breakTorque = i659[11]
  i658.enableCollision = !!i659[12]
  i658.enabled = !!i659[13]
  return i658
}

Deserializers["BonkController"] = function (request, data, root) {
  var i660 = root || request.c( 'BonkController' )
  var i661 = data
  i660.target = i661[0]
  i660.maxBonk = i661[1]
  request.r(i661[2], i661[3], 0, i660, 'hitSound')
  return i660
}

Deserializers["ActiveOnActive"] = function (request, data, root) {
  var i662 = root || request.c( 'ActiveOnActive' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.active = i664
  return i662
}

Deserializers["DropPiece"] = function (request, data, root) {
  var i668 = root || request.c( 'DropPiece' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'joint')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'animatorController')
  request.r(i671[2], i671[3], 0, i670, 'avatar')
  i670.updateMode = i671[4]
  i670.hasTransformHierarchy = !!i671[5]
  i670.applyRootMotion = !!i671[6]
  var i673 = i671[7]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.humanBones = i672
  i670.enabled = !!i671[8]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'clip')
  request.r(i677[2], i677[3], 0, i676, 'outputAudioMixerGroup')
  i676.playOnAwake = !!i677[4]
  i676.loop = !!i677[5]
  i676.time = i677[6]
  i676.volume = i677[7]
  i676.pitch = i677[8]
  i676.enabled = !!i677[9]
  return i676
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Button' )
  var i679 = data
  i678.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i679[0], i678.m_OnClick)
  i678.m_Navigation = request.d('UnityEngine.UI.Navigation', i679[1], i678.m_Navigation)
  i678.m_Transition = i679[2]
  i678.m_Colors = request.d('UnityEngine.UI.ColorBlock', i679[3], i678.m_Colors)
  i678.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i679[4], i678.m_SpriteState)
  i678.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i679[5], i678.m_AnimationTriggers)
  i678.m_Interactable = !!i679[6]
  request.r(i679[7], i679[8], 0, i678, 'm_TargetGraphic')
  return i678
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i681 = data
  i680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i681[0], i680.m_PersistentCalls)
  return i680
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.Events.PersistentCall', i685[i + 0]));
  }
  i682.m_Calls = i684
  return i682
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Target')
  i688.m_TargetAssemblyTypeName = i689[2]
  i688.m_MethodName = i689[3]
  i688.m_Mode = i689[4]
  i688.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i689[5], i688.m_Arguments)
  i688.m_CallState = i689[6]
  return i688
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i691 = data
  i690.m_Mode = i691[0]
  i690.m_WrapAround = !!i691[1]
  request.r(i691[2], i691[3], 0, i690, 'm_SelectOnUp')
  request.r(i691[4], i691[5], 0, i690, 'm_SelectOnDown')
  request.r(i691[6], i691[7], 0, i690, 'm_SelectOnLeft')
  request.r(i691[8], i691[9], 0, i690, 'm_SelectOnRight')
  return i690
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i693 = data
  i692.m_NormalColor = new pc.Color(i693[0], i693[1], i693[2], i693[3])
  i692.m_HighlightedColor = new pc.Color(i693[4], i693[5], i693[6], i693[7])
  i692.m_PressedColor = new pc.Color(i693[8], i693[9], i693[10], i693[11])
  i692.m_SelectedColor = new pc.Color(i693[12], i693[13], i693[14], i693[15])
  i692.m_DisabledColor = new pc.Color(i693[16], i693[17], i693[18], i693[19])
  i692.m_ColorMultiplier = i693[20]
  i692.m_FadeDuration = i693[21]
  return i692
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_HighlightedSprite')
  request.r(i695[2], i695[3], 0, i694, 'm_PressedSprite')
  request.r(i695[4], i695[5], 0, i694, 'm_SelectedSprite')
  request.r(i695[6], i695[7], 0, i694, 'm_DisabledSprite')
  return i694
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i697 = data
  i696.m_NormalTrigger = i697[0]
  i696.m_HighlightedTrigger = i697[1]
  i696.m_PressedTrigger = i697[2]
  i696.m_SelectedTrigger = i697[3]
  i696.m_DisabledTrigger = i697[4]
  return i696
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.Image' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Sprite')
  i698.m_Type = i699[2]
  i698.m_PreserveAspect = !!i699[3]
  i698.m_FillCenter = !!i699[4]
  i698.m_FillMethod = i699[5]
  i698.m_FillAmount = i699[6]
  i698.m_FillClockwise = !!i699[7]
  i698.m_FillOrigin = i699[8]
  i698.m_UseSpriteMesh = !!i699[9]
  i698.m_PixelsPerUnitMultiplier = i699[10]
  request.r(i699[11], i699[12], 0, i698, 'm_Material')
  i698.m_Maskable = !!i699[13]
  i698.m_Color = new pc.Color(i699[14], i699[15], i699[16], i699[17])
  i698.m_RaycastTarget = !!i699[18]
  i698.m_RaycastPadding = new pc.Vec4( i699[19], i699[20], i699[21], i699[22] )
  return i698
}

Deserializers["ActiveOnClick"] = function (request, data, root) {
  var i700 = root || request.c( 'ActiveOnClick' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'button')
  request.r(i701[2], i701[3], 0, i700, 'clickSound')
  var i703 = i701[4]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 1, i702, '')
  }
  i700.active = i702
  return i700
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i704 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i705 = data
  i704.targetIsSelf = !!i705[0]
  request.r(i705[1], i705[2], 0, i704, 'targetGO')
  i704.tweenTargetIsTargetGO = !!i705[3]
  i704.delay = i705[4]
  i704.duration = i705[5]
  i704.easeType = i705[6]
  i704.easeCurve = new pc.AnimationCurve( { keys_flow: i705[7] } )
  i704.loopType = i705[8]
  i704.loops = i705[9]
  i704.id = i705[10]
  i704.isRelative = !!i705[11]
  i704.isFrom = !!i705[12]
  i704.isIndependentUpdate = !!i705[13]
  i704.autoKill = !!i705[14]
  i704.autoGenerate = !!i705[15]
  i704.isActive = !!i705[16]
  i704.isValid = !!i705[17]
  request.r(i705[18], i705[19], 0, i704, 'target')
  i704.animationType = i705[20]
  i704.targetType = i705[21]
  i704.forcedTargetType = i705[22]
  i704.autoPlay = !!i705[23]
  i704.useTargetAsV3 = !!i705[24]
  i704.endValueFloat = i705[25]
  i704.endValueV3 = new pc.Vec3( i705[26], i705[27], i705[28] )
  i704.endValueV2 = new pc.Vec2( i705[29], i705[30] )
  i704.endValueColor = new pc.Color(i705[31], i705[32], i705[33], i705[34])
  i704.endValueString = i705[35]
  i704.endValueRect = UnityEngine.Rect.MinMaxRect(i705[36], i705[37], i705[38], i705[39])
  request.r(i705[40], i705[41], 0, i704, 'endValueTransform')
  i704.optionalBool0 = !!i705[42]
  i704.optionalBool1 = !!i705[43]
  i704.optionalFloat0 = i705[44]
  i704.optionalInt0 = i705[45]
  i704.optionalRotationMode = i705[46]
  i704.optionalScrambleMode = i705[47]
  i704.optionalShakeRandomnessMode = i705[48]
  i704.optionalString = i705[49]
  i704.updateType = i705[50]
  i704.isSpeedBased = !!i705[51]
  i704.hasOnStart = !!i705[52]
  i704.hasOnPlay = !!i705[53]
  i704.hasOnUpdate = !!i705[54]
  i704.hasOnStepComplete = !!i705[55]
  i704.hasOnComplete = !!i705[56]
  i704.hasOnTweenCreated = !!i705[57]
  i704.hasOnRewind = !!i705[58]
  i704.onStart = request.d('UnityEngine.Events.UnityEvent', i705[59], i704.onStart)
  i704.onPlay = request.d('UnityEngine.Events.UnityEvent', i705[60], i704.onPlay)
  i704.onUpdate = request.d('UnityEngine.Events.UnityEvent', i705[61], i704.onUpdate)
  i704.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i705[62], i704.onStepComplete)
  i704.onComplete = request.d('UnityEngine.Events.UnityEvent', i705[63], i704.onComplete)
  i704.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i705[64], i704.onTweenCreated)
  i704.onRewind = request.d('UnityEngine.Events.UnityEvent', i705[65], i704.onRewind)
  return i704
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i707 = data
  i706.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i707[0], i706.m_PersistentCalls)
  return i706
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Text' )
  var i709 = data
  i708.m_FontData = request.d('UnityEngine.UI.FontData', i709[0], i708.m_FontData)
  i708.m_Text = i709[1]
  request.r(i709[2], i709[3], 0, i708, 'm_Material')
  i708.m_Maskable = !!i709[4]
  i708.m_Color = new pc.Color(i709[5], i709[6], i709[7], i709[8])
  i708.m_RaycastTarget = !!i709[9]
  i708.m_RaycastPadding = new pc.Vec4( i709[10], i709[11], i709[12], i709[13] )
  return i708
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.FontData' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Font')
  i710.m_FontSize = i711[2]
  i710.m_FontStyle = i711[3]
  i710.m_BestFit = !!i711[4]
  i710.m_MinSize = i711[5]
  i710.m_MaxSize = i711[6]
  i710.m_Alignment = i711[7]
  i710.m_AlignByGeometry = !!i711[8]
  i710.m_RichText = !!i711[9]
  i710.m_HorizontalOverflow = i711[10]
  i710.m_VerticalOverflow = i711[11]
  i710.m_LineSpacing = i711[12]
  return i710
}

Deserializers["GameController"] = function (request, data, root) {
  var i712 = root || request.c( 'GameController' )
  var i713 = data
  i712.OnNextLevel = request.d('System.Action', i713[0], i712.OnNextLevel)
  var i715 = i713[1]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 1, i714, '')
  }
  i712.monsters = i714
  var i717 = i713[2]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i712.levels = i716
  request.r(i713[3], i713[4], 0, i712, 'target')
  i712.index = i713[5]
  i712.end = !!i713[6]
  request.r(i713[7], i713[8], 0, i712, 'endUI')
  return i712
}

Deserializers["System.Action"] = function (request, data, root) {
  var i718 = root || request.c( 'System.Action' )
  var i719 = data
  return i718
}

Deserializers["TargetController"] = function (request, data, root) {
  var i722 = root || request.c( 'TargetController' )
  var i723 = data
  var i725 = i723[0]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i722.listTarget = i724
  request.r(i723[1], i723[2], 0, i722, 'currentTarget')
  i722.index = i723[3]
  request.r(i723[4], i723[5], 0, i722, 'tut')
  request.r(i723[6], i723[7], 0, i722, 'tut2')
  request.r(i723[8], i723[9], 0, i722, 'tut3')
  return i722
}

Deserializers["LunaController"] = function (request, data, root) {
  var i728 = root || request.c( 'LunaController' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'BGTexture')
  i728.UseTime = !!i729[2]
  i728.TimePlay = i729[3]
  i728.NumberLevel = i729[4]
  request.r(i729[5], i729[6], 0, i728, 'BGImage')
  var i731 = i729[7]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i728.CTA = i730
  request.r(i729[8], i729[9], 0, i728, 'endCard')
  return i728
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i734 = root || request.c( 'LayoutController' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'mainCamera')
  request.r(i735[2], i735[3], 0, i734, 'optionButton')
  return i734
}

Deserializers["AudioController"] = function (request, data, root) {
  var i736 = root || request.c( 'AudioController' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'BGM')
  request.r(i737[2], i737[3], 0, i736, 'musicSource')
  request.r(i737[4], i737[5], 0, i736, 'pool')
  return i736
}

Deserializers["VFXController"] = function (request, data, root) {
  var i738 = root || request.c( 'VFXController' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'bloodPrefab')
  request.r(i739[2], i739[3], 0, i738, 'pool')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i741 = data
  i740.ambientIntensity = i741[0]
  i740.reflectionIntensity = i741[1]
  i740.ambientMode = i741[2]
  i740.ambientLight = new pc.Color(i741[3], i741[4], i741[5], i741[6])
  i740.ambientSkyColor = new pc.Color(i741[7], i741[8], i741[9], i741[10])
  i740.ambientGroundColor = new pc.Color(i741[11], i741[12], i741[13], i741[14])
  i740.ambientEquatorColor = new pc.Color(i741[15], i741[16], i741[17], i741[18])
  i740.fogColor = new pc.Color(i741[19], i741[20], i741[21], i741[22])
  i740.fogEndDistance = i741[23]
  i740.fogStartDistance = i741[24]
  i740.fogDensity = i741[25]
  i740.fog = !!i741[26]
  request.r(i741[27], i741[28], 0, i740, 'skybox')
  i740.fogMode = i741[29]
  var i743 = i741[30]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i743[i + 0]) );
  }
  i740.lightmaps = i742
  i740.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i741[31], i740.lightProbes)
  i740.lightmapsMode = i741[32]
  i740.mixedBakeMode = i741[33]
  i740.environmentLightingMode = i741[34]
  i740.ambientProbe = new pc.SphericalHarmonicsL2(i741[35])
  request.r(i741[36], i741[37], 0, i740, 'customReflection')
  request.r(i741[38], i741[39], 0, i740, 'defaultReflection')
  i740.defaultReflectionMode = i741[40]
  i740.defaultReflectionResolution = i741[41]
  i740.sunLightObjectId = i741[42]
  i740.pixelLightCount = i741[43]
  i740.defaultReflectionHDR = !!i741[44]
  i740.hasLightDataAsset = !!i741[45]
  i740.hasManualGenerate = !!i741[46]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'lightmapColor')
  request.r(i747[2], i747[3], 0, i746, 'lightmapDirection')
  request.r(i747[4], i747[5], 0, i746, 'shadowMask')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i748 = root || new UnityEngine.LightProbes()
  var i749 = data
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i759[i + 0]));
  }
  i756.ShaderCompilationErrors = i758
  i756.name = i757[1]
  i756.guid = i757[2]
  var i761 = i757[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i756.shaderDefinedKeywords = i760
  var i763 = i757[4]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i763[i + 0]) );
  }
  i756.passes = i762
  var i765 = i757[5]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i765[i + 0]) );
  }
  i756.usePasses = i764
  var i767 = i757[6]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i767[i + 0]) );
  }
  i756.defaultParameterValues = i766
  request.r(i757[7], i757[8], 0, i756, 'unityFallbackShader')
  i756.readDepth = !!i757[9]
  i756.hasDepthOnlyPass = !!i757[10]
  i756.isCreatedByShaderGraph = !!i757[11]
  i756.disableBatching = !!i757[12]
  i756.compiled = !!i757[13]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i771 = data
  i770.shaderName = i771[0]
  i770.errorMessage = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i776 = root || new pc.UnityShaderPass()
  var i777 = data
  i776.id = i777[0]
  i776.subShaderIndex = i777[1]
  i776.name = i777[2]
  i776.passType = i777[3]
  i776.grabPassTextureName = i777[4]
  i776.usePass = !!i777[5]
  i776.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[6], i776.zTest)
  i776.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[7], i776.zWrite)
  i776.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[8], i776.culling)
  i776.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i777[9], i776.blending)
  i776.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i777[10], i776.alphaBlending)
  i776.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[11], i776.colorWriteMask)
  i776.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[12], i776.offsetUnits)
  i776.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[13], i776.offsetFactor)
  i776.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[14], i776.stencilRef)
  i776.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[15], i776.stencilReadMask)
  i776.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[16], i776.stencilWriteMask)
  i776.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[17], i776.stencilOp)
  i776.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[18], i776.stencilOpFront)
  i776.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i777[19], i776.stencilOpBack)
  var i779 = i777[20]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i779[i + 0]) );
  }
  i776.tags = i778
  var i781 = i777[21]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.passDefinedKeywords = i780
  var i783 = i777[22]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i783[i + 0]) );
  }
  i776.passDefinedKeywordGroups = i782
  var i785 = i777[23]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i785[i + 0]) );
  }
  i776.variants = i784
  var i787 = i777[24]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i787[i + 0]) );
  }
  i776.excludedVariants = i786
  i776.hasDepthReader = !!i777[25]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i789 = data
  i788.val = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i791 = data
  i790.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[0], i790.src)
  i790.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[1], i790.dst)
  i790.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[2], i790.op)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i793 = data
  i792.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[0], i792.pass)
  i792.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[1], i792.fail)
  i792.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[2], i792.zFail)
  i792.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[3], i792.comp)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i797 = data
  i796.name = i797[0]
  i796.value = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.keywords = i802
  i800.hasDiscard = !!i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i807 = data
  i806.passId = i807[0]
  i806.subShaderIndex = i807[1]
  var i809 = i807[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i806.keywords = i808
  i806.vertexProgram = i807[3]
  i806.fragmentProgram = i807[4]
  i806.exportedForWebGl2 = !!i807[5]
  i806.readDepth = !!i807[6]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'shader')
  i812.pass = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i817 = data
  i816.name = i817[0]
  i816.type = i817[1]
  i816.value = new pc.Vec4( i817[2], i817[3], i817[4], i817[5] )
  i816.textureValue = i817[6]
  i816.shaderPropertyFlag = i817[7]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i819 = data
  i818.name = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'texture')
  i818.aabb = i819[3]
  i818.vertices = i819[4]
  i818.triangles = i819[5]
  i818.textureRect = UnityEngine.Rect.MinMaxRect(i819[6], i819[7], i819[8], i819[9])
  i818.packedRect = UnityEngine.Rect.MinMaxRect(i819[10], i819[11], i819[12], i819[13])
  i818.border = new pc.Vec4( i819[14], i819[15], i819[16], i819[17] )
  i818.transparency = i819[18]
  i818.bounds = i819[19]
  i818.pixelsPerUnit = i819[20]
  i818.textureWidth = i819[21]
  i818.textureHeight = i819[22]
  i818.nativeSize = new pc.Vec2( i819[23], i819[24] )
  i818.pivot = new pc.Vec2( i819[25], i819[26] )
  i818.textureRectOffset = new pc.Vec2( i819[27], i819[28] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i821 = data
  i820.name = i821[0]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i823 = data
  i822.name = i823[0]
  i822.wrapMode = i823[1]
  i822.isLooping = !!i823[2]
  i822.length = i823[3]
  var i825 = i823[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i825[i + 0]) );
  }
  i822.curves = i824
  var i827 = i823[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i827[i + 0]) );
  }
  i822.events = i826
  i822.halfPrecision = !!i823[6]
  i822._frameRate = i823[7]
  i822.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i823[8], i822.localBounds)
  i822.hasMuscleCurves = !!i823[9]
  var i829 = i823[10]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i822.clipMuscleConstant = i828
  i822.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i823[11], i822.clipBindingConstant)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i833 = data
  i832.path = i833[0]
  i832.hash = i833[1]
  i832.componentType = i833[2]
  i832.property = i833[3]
  i832.keys = i833[4]
  var i835 = i833[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i835[i + 0]) );
  }
  i832.objectReferenceKeys = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i839 = data
  i838.time = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'value')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i843 = data
  i842.functionName = i843[0]
  i842.floatParameter = i843[1]
  i842.intParameter = i843[2]
  i842.stringParameter = i843[3]
  request.r(i843[4], i843[5], 0, i842, 'objectReferenceParameter')
  i842.time = i843[6]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i845 = data
  i844.center = new pc.Vec3( i845[0], i845[1], i845[2] )
  i844.extends = new pc.Vec3( i845[3], i845[4], i845[5] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i848.genericBindings = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.pptrCurveMapping = i852
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i855 = data
  i854.name = i855[0]
  i854.ascent = i855[1]
  i854.originalLineHeight = i855[2]
  i854.fontSize = i855[3]
  var i857 = i855[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i857[i + 0]) );
  }
  i854.characterInfo = i856
  request.r(i855[5], i855[6], 0, i854, 'texture')
  i854.originalFontSize = i855[7]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i861 = data
  i860.index = i861[0]
  i860.advance = i861[1]
  i860.bearing = i861[2]
  i860.glyphWidth = i861[3]
  i860.glyphHeight = i861[4]
  i860.minX = i861[5]
  i860.maxX = i861[6]
  i860.minY = i861[7]
  i860.maxY = i861[8]
  i860.uvBottomLeftX = i861[9]
  i860.uvBottomLeftY = i861[10]
  i860.uvBottomRightX = i861[11]
  i860.uvBottomRightY = i861[12]
  i860.uvTopLeftX = i861[13]
  i860.uvTopLeftY = i861[14]
  i860.uvTopRightX = i861[15]
  i860.uvTopRightY = i861[16]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i863 = data
  i862.name = i863[0]
  var i865 = i863[1]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i865[i + 0]) );
  }
  i862.layers = i864
  var i867 = i863[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i867[i + 0]) );
  }
  i862.parameters = i866
  i862.animationClips = i863[3]
  i862.avatarUnsupported = i863[4]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i871 = data
  i870.name = i871[0]
  i870.defaultWeight = i871[1]
  i870.blendingMode = i871[2]
  i870.avatarMask = i871[3]
  i870.syncedLayerIndex = i871[4]
  i870.syncedLayerAffectsTiming = !!i871[5]
  i870.syncedLayers = i871[6]
  i870.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i871[7], i870.stateMachine)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  i872.path = i873[2]
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i875[i + 0]) );
  }
  i872.states = i874
  var i877 = i873[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i877[i + 0]) );
  }
  i872.machines = i876
  var i879 = i873[5]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i879[i + 0]) );
  }
  i872.entryStateTransitions = i878
  var i881 = i873[6]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i881[i + 0]) );
  }
  i872.exitStateTransitions = i880
  var i883 = i873[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i883[i + 0]) );
  }
  i872.anyStateTransitions = i882
  i872.defaultStateId = i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i887 = data
  i886.id = i887[0]
  i886.name = i887[1]
  i886.cycleOffset = i887[2]
  i886.cycleOffsetParameter = i887[3]
  i886.cycleOffsetParameterActive = !!i887[4]
  i886.mirror = !!i887[5]
  i886.mirrorParameter = i887[6]
  i886.mirrorParameterActive = !!i887[7]
  i886.motionId = i887[8]
  i886.nameHash = i887[9]
  i886.fullPathHash = i887[10]
  i886.speed = i887[11]
  i886.speedParameter = i887[12]
  i886.speedParameterActive = !!i887[13]
  i886.tag = i887[14]
  i886.tagHash = i887[15]
  i886.writeDefaultValues = !!i887[16]
  var i889 = i887[17]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.behaviours = i888
  var i891 = i887[18]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i891[i + 0]) );
  }
  i886.transitions = i890
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i897 = data
  i896.fullPath = i897[0]
  i896.canTransitionToSelf = !!i897[1]
  i896.duration = i897[2]
  i896.exitTime = i897[3]
  i896.hasExitTime = !!i897[4]
  i896.hasFixedDuration = !!i897[5]
  i896.interruptionSource = i897[6]
  i896.offset = i897[7]
  i896.orderedInterruption = !!i897[8]
  i896.destinationStateId = i897[9]
  i896.isExit = !!i897[10]
  i896.mute = !!i897[11]
  i896.solo = !!i897[12]
  var i899 = i897[13]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i899[i + 0]) );
  }
  i896.conditions = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i905 = data
  i904.destinationStateId = i905[0]
  i904.isExit = !!i905[1]
  i904.mute = !!i905[2]
  i904.solo = !!i905[3]
  var i907 = i905[4]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i907[i + 0]) );
  }
  i904.conditions = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i911 = data
  i910.defaultBool = !!i911[0]
  i910.defaultFloat = i911[1]
  i910.defaultInt = i911[2]
  i910.name = i911[3]
  i910.nameHash = i911[4]
  i910.type = i911[5]
  return i910
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i913 = data
  i912.useSafeMode = !!i913[0]
  i912.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i913[1], i912.safeModeOptions)
  i912.timeScale = i913[2]
  i912.unscaledTimeScale = i913[3]
  i912.useSmoothDeltaTime = !!i913[4]
  i912.maxSmoothUnscaledTime = i913[5]
  i912.rewindCallbackMode = i913[6]
  i912.showUnityEditorReport = !!i913[7]
  i912.logBehaviour = i913[8]
  i912.drawGizmos = !!i913[9]
  i912.defaultRecyclable = !!i913[10]
  i912.defaultAutoPlay = i913[11]
  i912.defaultUpdateType = i913[12]
  i912.defaultTimeScaleIndependent = !!i913[13]
  i912.defaultEaseType = i913[14]
  i912.defaultEaseOvershootOrAmplitude = i913[15]
  i912.defaultEasePeriod = i913[16]
  i912.defaultAutoKill = !!i913[17]
  i912.defaultLoopType = i913[18]
  i912.debugMode = !!i913[19]
  i912.debugStoreTargetId = !!i913[20]
  i912.showPreviewPanel = !!i913[21]
  i912.storeSettingsLocation = i913[22]
  i912.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i913[23], i912.modules)
  i912.createASMDEF = !!i913[24]
  i912.showPlayingTweens = !!i913[25]
  i912.showPausedTweens = !!i913[26]
  return i912
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i915 = data
  i914.logBehaviour = i915[0]
  i914.nestedTweenFailureBehaviour = i915[1]
  return i914
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i916 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i917 = data
  i916.showPanel = !!i917[0]
  i916.audioEnabled = !!i917[1]
  i916.physicsEnabled = !!i917[2]
  i916.physics2DEnabled = !!i917[3]
  i916.spriteEnabled = !!i917[4]
  i916.uiEnabled = !!i917[5]
  i916.textMeshProEnabled = !!i917[6]
  i916.tk2DEnabled = !!i917[7]
  i916.deAudioEnabled = !!i917[8]
  i916.deUnityExtendedEnabled = !!i917[9]
  i916.epoOutlineEnabled = !!i917[10]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i921[i + 0]) );
  }
  i918.files = i920
  i918.componentToPrefabIds = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i925 = data
  i924.path = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'unityObject')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i929[i + 0]) );
  }
  i926.scriptsExecutionOrder = i928
  var i931 = i927[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i931[i + 0]) );
  }
  i926.sortingLayers = i930
  var i933 = i927[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i933[i + 0]) );
  }
  i926.cullingLayers = i932
  i926.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i927[3], i926.timeSettings)
  i926.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i927[4], i926.physicsSettings)
  i926.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i927[5], i926.physics2DSettings)
  i926.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i927[6], i926.qualitySettings)
  i926.enableRealtimeShadows = !!i927[7]
  i926.enableAutoInstancing = !!i927[8]
  i926.enableStaticBatching = !!i927[9]
  i926.enableDynamicBatching = !!i927[10]
  i926.usePreservativeDynamicBatching = !!i927[11]
  i926.lightmapEncodingQuality = i927[12]
  i926.desiredColorSpace = i927[13]
  var i935 = i927[14]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i926.allTags = i934
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i939 = data
  i938.name = i939[0]
  i938.value = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  i942.value = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i949 = data
  i948.fixedDeltaTime = i949[0]
  i948.maximumDeltaTime = i949[1]
  i948.timeScale = i949[2]
  i948.maximumParticleTimestep = i949[3]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i951 = data
  i950.gravity = new pc.Vec3( i951[0], i951[1], i951[2] )
  i950.defaultSolverIterations = i951[3]
  i950.bounceThreshold = i951[4]
  i950.autoSyncTransforms = !!i951[5]
  i950.autoSimulation = !!i951[6]
  var i953 = i951[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'material')
  i958.gravity = new pc.Vec2( i959[2], i959[3] )
  i958.positionIterations = i959[4]
  i958.velocityIterations = i959[5]
  i958.velocityThreshold = i959[6]
  i958.maxLinearCorrection = i959[7]
  i958.maxAngularCorrection = i959[8]
  i958.maxTranslationSpeed = i959[9]
  i958.maxRotationSpeed = i959[10]
  i958.baumgarteScale = i959[11]
  i958.baumgarteTOIScale = i959[12]
  i958.timeToSleep = i959[13]
  i958.linearSleepTolerance = i959[14]
  i958.angularSleepTolerance = i959[15]
  i958.defaultContactOffset = i959[16]
  i958.autoSimulation = !!i959[17]
  i958.queriesHitTriggers = !!i959[18]
  i958.queriesStartInColliders = !!i959[19]
  i958.callbacksOnDisable = !!i959[20]
  i958.reuseCollisionCallbacks = !!i959[21]
  i958.autoSyncTransforms = !!i959[22]
  var i961 = i959[23]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i961[i + 0]) );
  }
  i958.collisionMatrix = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i965 = data
  i964.enabled = !!i965[0]
  i964.layerId = i965[1]
  i964.otherLayerId = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i967 = data
  var i969 = i967[0]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i969[i + 0]) );
  }
  i966.qualityLevels = i968
  var i971 = i967[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.names = i970
  i966.shadows = i967[2]
  i966.anisotropicFiltering = i967[3]
  i966.antiAliasing = i967[4]
  i966.lodBias = i967[5]
  i966.shadowCascades = i967[6]
  i966.shadowDistance = i967[7]
  i966.shadowmaskMode = i967[8]
  i966.shadowProjection = i967[9]
  i966.shadowResolution = i967[10]
  i966.softParticles = !!i967[11]
  i966.softVegetation = !!i967[12]
  i966.activeColorSpace = i967[13]
  i966.desiredColorSpace = i967[14]
  i966.masterTextureLimit = i967[15]
  i966.maxQueuedFrames = i967[16]
  i966.particleRaycastBudget = i967[17]
  i966.pixelLightCount = i967[18]
  i966.realtimeReflectionProbes = !!i967[19]
  i966.shadowCascade2Split = i967[20]
  i966.shadowCascade4Split = new pc.Vec3( i967[21], i967[22], i967[23] )
  i966.streamingMipmapsActive = !!i967[24]
  i966.vSyncCount = i967[25]
  i966.asyncUploadBufferSize = i967[26]
  i966.asyncUploadTimeSlice = i967[27]
  i966.billboardsFaceCameraPosition = !!i967[28]
  i966.shadowNearPlaneOffset = i967[29]
  i966.streamingMipmapsMemoryBudget = i967[30]
  i966.maximumLODLevel = i967[31]
  i966.streamingMipmapsAddAllCameras = !!i967[32]
  i966.streamingMipmapsMaxLevelReduction = i967[33]
  i966.streamingMipmapsRenderersPerFrame = i967[34]
  i966.resolutionScalingFixedDPIFactor = i967[35]
  i966.streamingMipmapsMaxFileIORequests = i967[36]
  i966.currentQualityLevel = i967[37]
  return i966
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_ObjectArgument')
  i974.m_ObjectArgumentAssemblyTypeName = i975[2]
  i974.m_IntArgument = i975[3]
  i974.m_FloatArgument = i975[4]
  i974.m_StringArgument = i975[5]
  i974.m_BoolArgument = !!i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i979 = data
  i978.mode = i979[0]
  i978.parameter = i979[1]
  i978.threshold = i979[2]
  return i978
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1778";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4373";

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

Deserializers.buildID = "c49cabc8-458b-4141-b62f-a27ad1ee3c64";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

