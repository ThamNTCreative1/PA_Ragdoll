var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointSpring' )
  var i413 = data
  i412.spring = i413[0]
  i412.damper = i413[1]
  i412.targetPosition = i413[2]
  return i412
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointMotor' )
  var i415 = data
  i414.m_TargetVelocity = i415[0]
  i414.m_Force = i415[1]
  i414.m_FreeSpin = i415[2]
  return i414
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointLimits' )
  var i417 = data
  i416.m_Min = i417[0]
  i416.m_Max = i417[1]
  i416.m_Bounciness = i417[2]
  i416.m_BounceMinVelocity = i417[3]
  i416.m_ContactDistance = i417[4]
  i416.minBounce = i417[5]
  i416.maxBounce = i417[6]
  return i416
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointDrive' )
  var i419 = data
  i418.m_PositionSpring = i419[0]
  i418.m_PositionDamper = i419[1]
  i418.m_MaximumForce = i419[2]
  i418.m_UseAcceleration = i419[3]
  return i418
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i421 = data
  i420.m_Spring = i421[0]
  i420.m_Damper = i421[1]
  return i420
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i423 = data
  i422.m_Limit = i423[0]
  i422.m_Bounciness = i423[1]
  i422.m_ContactDistance = i423[2]
  return i422
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i425 = data
  i424.m_ExtremumSlip = i425[0]
  i424.m_ExtremumValue = i425[1]
  i424.m_AsymptoteSlip = i425[2]
  i424.m_AsymptoteValue = i425[3]
  i424.m_Stiffness = i425[4]
  return i424
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i427 = data
  i426.m_LowerAngle = i427[0]
  i426.m_UpperAngle = i427[1]
  return i426
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i429 = data
  i428.m_MotorSpeed = i429[0]
  i428.m_MaximumMotorTorque = i429[1]
  return i428
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i431 = data
  i430.m_DampingRatio = i431[0]
  i430.m_Frequency = i431[1]
  i430.m_Angle = i431[2]
  return i430
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i433 = data
  i432.m_LowerTranslation = i433[0]
  i432.m_UpperTranslation = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i434 = root || new pc.UnityMaterial()
  var i435 = data
  i434.name = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'shader')
  i434.renderQueue = i435[3]
  i434.enableInstancing = !!i435[4]
  var i437 = i435[5]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i437[i + 0]) );
  }
  i434.floatParameters = i436
  var i439 = i435[6]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i439[i + 0]) );
  }
  i434.colorParameters = i438
  var i441 = i435[7]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i441[i + 0]) );
  }
  i434.vectorParameters = i440
  var i443 = i435[8]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i443[i + 0]) );
  }
  i434.textureParameters = i442
  var i445 = i435[9]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i445[i + 0]) );
  }
  i434.materialFlags = i444
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = new pc.Color(i453[1], i453[2], i453[3], i453[4])
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i457 = data
  i456.name = i457[0]
  i456.value = new pc.Vec4( i457[1], i457[2], i457[3], i457[4] )
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i461 = data
  i460.name = i461[0]
  request.r(i461[1], i461[2], 0, i460, 'value')
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i465 = data
  i464.name = i465[0]
  i464.enabled = !!i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i467 = data
  i466.name = i467[0]
  i466.width = i467[1]
  i466.height = i467[2]
  i466.mipmapCount = i467[3]
  i466.anisoLevel = i467[4]
  i466.filterMode = i467[5]
  i466.hdr = !!i467[6]
  i466.format = i467[7]
  i466.wrapMode = i467[8]
  i466.alphaIsTransparency = !!i467[9]
  i466.alphaSource = i467[10]
  i466.graphicsFormat = i467[11]
  i466.sRGBTexture = !!i467[12]
  i466.desiredColorSpace = i467[13]
  i466.wrapU = i467[14]
  i466.wrapV = i467[15]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i469 = data
  i468.position = new pc.Vec3( i469[0], i469[1], i469[2] )
  i468.scale = new pc.Vec3( i469[3], i469[4], i469[5] )
  i468.rotation = new pc.Quat(i469[6], i469[7], i469[8], i469[9])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i471 = data
  i470.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i471[0], i470.main)
  i470.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i471[1], i470.colorBySpeed)
  i470.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i471[2], i470.colorOverLifetime)
  i470.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i471[3], i470.emission)
  i470.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i471[4], i470.rotationBySpeed)
  i470.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i471[5], i470.rotationOverLifetime)
  i470.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i471[6], i470.shape)
  i470.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i471[7], i470.sizeBySpeed)
  i470.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i471[8], i470.sizeOverLifetime)
  i470.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i471[9], i470.textureSheetAnimation)
  i470.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i471[10], i470.velocityOverLifetime)
  i470.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i471[11], i470.noise)
  i470.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i471[12], i470.inheritVelocity)
  i470.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i471[13], i470.forceOverLifetime)
  i470.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i471[14], i470.limitVelocityOverLifetime)
  i470.useAutoRandomSeed = !!i471[15]
  i470.randomSeed = i471[16]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemMain()
  var i473 = data
  i472.duration = i473[0]
  i472.loop = !!i473[1]
  i472.prewarm = !!i473[2]
  i472.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.startDelay)
  i472.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[4], i472.startLifetime)
  i472.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[5], i472.startSpeed)
  i472.startSize3D = !!i473[6]
  i472.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[7], i472.startSizeX)
  i472.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[8], i472.startSizeY)
  i472.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[9], i472.startSizeZ)
  i472.startRotation3D = !!i473[10]
  i472.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[11], i472.startRotationX)
  i472.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[12], i472.startRotationY)
  i472.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[13], i472.startRotationZ)
  i472.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i473[14], i472.startColor)
  i472.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[15], i472.gravityModifier)
  i472.simulationSpace = i473[16]
  request.r(i473[17], i473[18], 0, i472, 'customSimulationSpace')
  i472.simulationSpeed = i473[19]
  i472.useUnscaledTime = !!i473[20]
  i472.scalingMode = i473[21]
  i472.playOnAwake = !!i473[22]
  i472.maxParticles = i473[23]
  i472.emitterVelocityMode = i473[24]
  i472.stopAction = i473[25]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i474 = root || new pc.MinMaxCurve()
  var i475 = data
  i474.mode = i475[0]
  i474.curveMin = new pc.AnimationCurve( { keys_flow: i475[1] } )
  i474.curveMax = new pc.AnimationCurve( { keys_flow: i475[2] } )
  i474.curveMultiplier = i475[3]
  i474.constantMin = i475[4]
  i474.constantMax = i475[5]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i476 = root || new pc.MinMaxGradient()
  var i477 = data
  i476.mode = i477[0]
  i476.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i477[1], i476.gradientMin)
  i476.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i477[2], i476.gradientMax)
  i476.colorMin = new pc.Color(i477[3], i477[4], i477[5], i477[6])
  i476.colorMax = new pc.Color(i477[7], i477[8], i477[9], i477[10])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i479 = data
  i478.mode = i479[0]
  var i481 = i479[1]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i481[i + 0]) );
  }
  i478.colorKeys = i480
  var i483 = i479[2]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i483[i + 0]) );
  }
  i478.alphaKeys = i482
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemColorBySpeed()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i485[1], i484.color)
  i484.range = new pc.Vec2( i485[2], i485[3] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i489 = data
  i488.color = new pc.Color(i489[0], i489[1], i489[2], i489[3])
  i488.time = i489[4]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i493 = data
  i492.alpha = i493[0]
  i492.time = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemColorOverLifetime()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i495[1], i494.color)
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemEmitter()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[1], i496.rateOverTime)
  i496.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[2], i496.rateOverDistance)
  var i499 = i497[3]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i499[i + 0]) );
  }
  i496.bursts = i498
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemBurst()
  var i503 = data
  i502.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[0], i502.count)
  i502.cycleCount = i503[1]
  i502.minCount = i503[2]
  i502.maxCount = i503[3]
  i502.repeatInterval = i503[4]
  i502.time = i503[5]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemRotationBySpeed()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.x)
  i504.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.y)
  i504.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.z)
  i504.separateAxes = !!i505[4]
  i504.range = new pc.Vec2( i505[5], i505[6] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemRotationOverLifetime()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[1], i506.x)
  i506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.y)
  i506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[3], i506.z)
  i506.separateAxes = !!i507[4]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemShape()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.shapeType = i509[1]
  i508.randomDirectionAmount = i509[2]
  i508.sphericalDirectionAmount = i509[3]
  i508.randomPositionAmount = i509[4]
  i508.alignToDirection = !!i509[5]
  i508.radius = i509[6]
  i508.radiusMode = i509[7]
  i508.radiusSpread = i509[8]
  i508.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[9], i508.radiusSpeed)
  i508.radiusThickness = i509[10]
  i508.angle = i509[11]
  i508.length = i509[12]
  i508.boxThickness = new pc.Vec3( i509[13], i509[14], i509[15] )
  i508.meshShapeType = i509[16]
  request.r(i509[17], i509[18], 0, i508, 'mesh')
  request.r(i509[19], i509[20], 0, i508, 'meshRenderer')
  request.r(i509[21], i509[22], 0, i508, 'skinnedMeshRenderer')
  i508.useMeshMaterialIndex = !!i509[23]
  i508.meshMaterialIndex = i509[24]
  i508.useMeshColors = !!i509[25]
  i508.normalOffset = i509[26]
  i508.arc = i509[27]
  i508.arcMode = i509[28]
  i508.arcSpread = i509[29]
  i508.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[30], i508.arcSpeed)
  i508.donutRadius = i509[31]
  i508.position = new pc.Vec3( i509[32], i509[33], i509[34] )
  i508.rotation = new pc.Vec3( i509[35], i509[36], i509[37] )
  i508.scale = new pc.Vec3( i509[38], i509[39], i509[40] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemSizeBySpeed()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[1], i510.x)
  i510.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[2], i510.y)
  i510.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[3], i510.z)
  i510.separateAxes = !!i511[4]
  i510.range = new pc.Vec2( i511[5], i511[6] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemSizeOverLifetime()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.x)
  i512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.y)
  i512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[3], i512.z)
  i512.separateAxes = !!i513[4]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.mode = i515[1]
  i514.animation = i515[2]
  i514.numTilesX = i515[3]
  i514.numTilesY = i515[4]
  i514.useRandomRow = !!i515[5]
  i514.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[6], i514.frameOverTime)
  i514.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[7], i514.startFrame)
  i514.cycleCount = i515[8]
  i514.rowIndex = i515[9]
  i514.flipU = i515[10]
  i514.flipV = i515[11]
  i514.spriteCount = i515[12]
  var i517 = i515[13]
  var i516 = []
  for(var i = 0; i < i517.length; i += 2) {
  request.r(i517[i + 0], i517[i + 1], 2, i516, '')
  }
  i514.sprites = i516
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[4], i520.radial)
  i520.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[5], i520.speedModifier)
  i520.space = i521[6]
  i520.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[7], i520.orbitalX)
  i520.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[8], i520.orbitalY)
  i520.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[9], i520.orbitalZ)
  i520.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[10], i520.orbitalOffsetX)
  i520.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[11], i520.orbitalOffsetY)
  i520.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[12], i520.orbitalOffsetZ)
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemNoise()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.separateAxes = !!i523[1]
  i522.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.strengthX)
  i522.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.strengthY)
  i522.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[4], i522.strengthZ)
  i522.frequency = i523[5]
  i522.damping = !!i523[6]
  i522.octaveCount = i523[7]
  i522.octaveMultiplier = i523[8]
  i522.octaveScale = i523[9]
  i522.quality = i523[10]
  i522.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[11], i522.scrollSpeed)
  i522.scrollSpeedMultiplier = i523[12]
  i522.remapEnabled = !!i523[13]
  i522.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[14], i522.remapX)
  i522.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[15], i522.remapY)
  i522.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[16], i522.remapZ)
  i522.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[17], i522.positionAmount)
  i522.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[18], i522.rotationAmount)
  i522.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[19], i522.sizeAmount)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemInheritVelocity()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.mode = i525[1]
  i524.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.curve)
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemForceOverLifetime()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[1], i526.x)
  i526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[2], i526.y)
  i526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.z)
  i526.space = i527[4]
  i526.randomized = !!i527[5]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.limit)
  i528.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.limitX)
  i528.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.limitY)
  i528.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[4], i528.limitZ)
  i528.dampen = i529[5]
  i528.separateAxes = !!i529[6]
  i528.space = i529[7]
  i528.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[8], i528.drag)
  i528.multiplyDragByParticleSize = !!i529[9]
  i528.multiplyDragByParticleVelocity = !!i529[10]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'mesh')
  i530.meshCount = i531[2]
  i530.activeVertexStreamsCount = i531[3]
  i530.alignment = i531[4]
  i530.renderMode = i531[5]
  i530.sortMode = i531[6]
  i530.lengthScale = i531[7]
  i530.velocityScale = i531[8]
  i530.cameraVelocityScale = i531[9]
  i530.normalDirection = i531[10]
  i530.sortingFudge = i531[11]
  i530.minParticleSize = i531[12]
  i530.maxParticleSize = i531[13]
  i530.pivot = new pc.Vec3( i531[14], i531[15], i531[16] )
  request.r(i531[17], i531[18], 0, i530, 'trailMaterial')
  i530.applyActiveColorSpace = !!i531[19]
  i530.enabled = !!i531[20]
  request.r(i531[21], i531[22], 0, i530, 'sharedMaterial')
  var i533 = i531[23]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sharedMaterials = i532
  i530.receiveShadows = !!i531[24]
  i530.shadowCastingMode = i531[25]
  i530.sortingLayerID = i531[26]
  i530.sortingOrder = i531[27]
  i530.lightmapIndex = i531[28]
  i530.lightmapSceneIndex = i531[29]
  i530.lightmapScaleOffset = new pc.Vec4( i531[30], i531[31], i531[32], i531[33] )
  i530.lightProbeUsage = i531[34]
  i530.reflectionProbeUsage = i531[35]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i537 = data
  i536.name = i537[0]
  i536.tagId = i537[1]
  i536.enabled = !!i537[2]
  i536.isStatic = !!i537[3]
  i536.layer = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i539 = data
  i538.name = i539[0]
  i538.index = i539[1]
  i538.startup = !!i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i541 = data
  i540.aspect = i541[0]
  i540.orthographic = !!i541[1]
  i540.orthographicSize = i541[2]
  i540.backgroundColor = new pc.Color(i541[3], i541[4], i541[5], i541[6])
  i540.nearClipPlane = i541[7]
  i540.farClipPlane = i541[8]
  i540.fieldOfView = i541[9]
  i540.depth = i541[10]
  i540.clearFlags = i541[11]
  i540.cullingMask = i541[12]
  i540.rect = i541[13]
  request.r(i541[14], i541[15], 0, i540, 'targetTexture')
  i540.usePhysicalProperties = !!i541[16]
  i540.focalLength = i541[17]
  i540.sensorSize = new pc.Vec2( i541[18], i541[19] )
  i540.lensShift = new pc.Vec2( i541[20], i541[21] )
  i540.gateFit = i541[22]
  i540.commandBufferCount = i541[23]
  i540.cameraType = i541[24]
  i540.enabled = !!i541[25]
  return i540
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_FirstSelected')
  i542.m_sendNavigationEvents = !!i543[2]
  i542.m_DragThreshold = i543[3]
  return i542
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i545 = data
  i544.m_HorizontalAxis = i545[0]
  i544.m_VerticalAxis = i545[1]
  i544.m_SubmitButton = i545[2]
  i544.m_CancelButton = i545[3]
  i544.m_InputActionsPerSecond = i545[4]
  i544.m_RepeatDelay = i545[5]
  i544.m_ForceModuleActive = !!i545[6]
  i544.m_SendPointerHoverToParent = !!i545[7]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i547 = data
  i546.pivot = new pc.Vec2( i547[0], i547[1] )
  i546.anchorMin = new pc.Vec2( i547[2], i547[3] )
  i546.anchorMax = new pc.Vec2( i547[4], i547[5] )
  i546.sizeDelta = new pc.Vec2( i547[6], i547[7] )
  i546.anchoredPosition3D = new pc.Vec3( i547[8], i547[9], i547[10] )
  i546.rotation = new pc.Quat(i547[11], i547[12], i547[13], i547[14])
  i546.scale = new pc.Vec3( i547[15], i547[16], i547[17] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i549 = data
  i548.planeDistance = i549[0]
  i548.referencePixelsPerUnit = i549[1]
  i548.isFallbackOverlay = !!i549[2]
  i548.renderMode = i549[3]
  i548.renderOrder = i549[4]
  i548.sortingLayerName = i549[5]
  i548.sortingOrder = i549[6]
  i548.scaleFactor = i549[7]
  request.r(i549[8], i549[9], 0, i548, 'worldCamera')
  i548.overrideSorting = !!i549[10]
  i548.pixelPerfect = !!i549[11]
  i548.targetDisplay = i549[12]
  i548.overridePixelPerfect = !!i549[13]
  i548.enabled = !!i549[14]
  return i548
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i551 = data
  i550.m_UiScaleMode = i551[0]
  i550.m_ReferencePixelsPerUnit = i551[1]
  i550.m_ScaleFactor = i551[2]
  i550.m_ReferenceResolution = new pc.Vec2( i551[3], i551[4] )
  i550.m_ScreenMatchMode = i551[5]
  i550.m_MatchWidthOrHeight = i551[6]
  i550.m_PhysicalUnit = i551[7]
  i550.m_FallbackScreenDPI = i551[8]
  i550.m_DefaultSpriteDPI = i551[9]
  i550.m_DynamicPixelsPerUnit = i551[10]
  i550.m_PresetInfoIsWorld = !!i551[11]
  return i550
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i553 = data
  i552.m_IgnoreReversedGraphics = !!i553[0]
  i552.m_BlockingObjects = i553[1]
  i552.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i553[2] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i555 = data
  i554.cullTransparentMesh = !!i555[0]
  return i554
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i557 = data
  i556.m_AspectMode = i557[0]
  i556.m_AspectRatio = i557[1]
  return i556
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Texture')
  i558.m_UVRect = UnityEngine.Rect.MinMaxRect(i559[2], i559[3], i559[4], i559[5])
  request.r(i559[6], i559[7], 0, i558, 'm_Material')
  i558.m_Maskable = !!i559[8]
  i558.m_Color = new pc.Color(i559[9], i559[10], i559[11], i559[12])
  i558.m_RaycastTarget = !!i559[13]
  i558.m_RaycastPadding = new pc.Vec4( i559[14], i559[15], i559[16], i559[17] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i561 = data
  i560.color = new pc.Color(i561[0], i561[1], i561[2], i561[3])
  request.r(i561[4], i561[5], 0, i560, 'sprite')
  i560.flipX = !!i561[6]
  i560.flipY = !!i561[7]
  i560.drawMode = i561[8]
  i560.size = new pc.Vec2( i561[9], i561[10] )
  i560.tileMode = i561[11]
  i560.adaptiveModeThreshold = i561[12]
  i560.maskInteraction = i561[13]
  i560.spriteSortPoint = i561[14]
  i560.enabled = !!i561[15]
  request.r(i561[16], i561[17], 0, i560, 'sharedMaterial')
  var i563 = i561[18]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.sharedMaterials = i562
  i560.receiveShadows = !!i561[19]
  i560.shadowCastingMode = i561[20]
  i560.sortingLayerID = i561[21]
  i560.sortingOrder = i561[22]
  i560.lightmapIndex = i561[23]
  i560.lightmapSceneIndex = i561[24]
  i560.lightmapScaleOffset = new pc.Vec4( i561[25], i561[26], i561[27], i561[28] )
  i560.lightProbeUsage = i561[29]
  i560.reflectionProbeUsage = i561[30]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i565 = data
  i564.usedByComposite = !!i565[0]
  i564.autoTiling = !!i565[1]
  i564.size = new pc.Vec2( i565[2], i565[3] )
  i564.edgeRadius = i565[4]
  i564.enabled = !!i565[5]
  i564.isTrigger = !!i565[6]
  i564.usedByEffector = !!i565[7]
  i564.density = i565[8]
  i564.offset = new pc.Vec2( i565[9], i565[10] )
  request.r(i565[11], i565[12], 0, i564, 'material')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i567 = data
  i566.sortingLayerIndex = i567[0]
  i566.sortingOrder = i567[1]
  i566.sortingLayerName = i567[2]
  i566.enabled = !!i567[3]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i569 = data
  i568.bodyType = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'material')
  i568.simulated = !!i569[3]
  i568.useAutoMass = !!i569[4]
  i568.mass = i569[5]
  i568.drag = i569[6]
  i568.angularDrag = i569[7]
  i568.gravityScale = i569[8]
  i568.collisionDetectionMode = i569[9]
  i568.sleepMode = i569[10]
  i568.constraints = i569[11]
  return i568
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i570 = root || request.c( 'MonsterController' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'joint')
  request.r(i571[2], i571[3], 0, i570, 'rb')
  request.r(i571[4], i571[5], 0, i570, 'deadSFX')
  i570.force = new pc.Vec2( i571[6], i571[7] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i573 = data
  i572.useLimits = !!i573[0]
  i572.limits = request.d('UnityEngine.JointAngleLimits2D', i573[1], i572.limits)
  i572.useMotor = !!i573[2]
  i572.motor = request.d('UnityEngine.JointMotor2D', i573[3], i572.motor)
  i572.anchor = new pc.Vec2( i573[4], i573[5] )
  i572.connectedAnchor = new pc.Vec2( i573[6], i573[7] )
  i572.autoConfigureConnectedAnchor = !!i573[8]
  request.r(i573[9], i573[10], 0, i572, 'connectedBody')
  i572.breakForce = i573[11]
  i572.breakTorque = i573[12]
  i572.enableCollision = !!i573[13]
  i572.enabled = !!i573[14]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i575 = data
  i574.autoConfigureTarget = !!i575[0]
  i574.target = new pc.Vec2( i575[1], i575[2] )
  i574.anchor = new pc.Vec2( i575[3], i575[4] )
  i574.maxForce = i575[5]
  i574.dampingRatio = i575[6]
  i574.frequency = i575[7]
  request.r(i575[8], i575[9], 0, i574, 'connectedBody')
  i574.breakForce = i575[10]
  i574.breakTorque = i575[11]
  i574.enableCollision = !!i575[12]
  i574.enabled = !!i575[13]
  return i574
}

Deserializers["BonkController"] = function (request, data, root) {
  var i576 = root || request.c( 'BonkController' )
  var i577 = data
  i576.target = i577[0]
  i576.maxBonk = i577[1]
  request.r(i577[2], i577[3], 0, i576, 'hitSound')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i579 = data
  i578.edgeRadius = i579[0]
  var i581 = i579[1]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
    i580.push( new pc.Vec2( i581[i + 0], i581[i + 1] ) );
  }
  i578.points = i580
  i578.useAdjacentStartPoint = !!i579[2]
  i578.adjacentStartPoint = new pc.Vec2( i579[3], i579[4] )
  i578.useAdjacentEndPoint = !!i579[5]
  i578.adjacentEndPoint = new pc.Vec2( i579[6], i579[7] )
  i578.enabled = !!i579[8]
  i578.isTrigger = !!i579[9]
  i578.usedByEffector = !!i579[10]
  i578.density = i579[11]
  i578.offset = new pc.Vec2( i579[12], i579[13] )
  request.r(i579[14], i579[15], 0, i578, 'material')
  return i578
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Text' )
  var i585 = data
  i584.m_FontData = request.d('UnityEngine.UI.FontData', i585[0], i584.m_FontData)
  i584.m_Text = i585[1]
  request.r(i585[2], i585[3], 0, i584, 'm_Material')
  i584.m_Maskable = !!i585[4]
  i584.m_Color = new pc.Color(i585[5], i585[6], i585[7], i585[8])
  i584.m_RaycastTarget = !!i585[9]
  i584.m_RaycastPadding = new pc.Vec4( i585[10], i585[11], i585[12], i585[13] )
  return i584
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.FontData' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_Font')
  i586.m_FontSize = i587[2]
  i586.m_FontStyle = i587[3]
  i586.m_BestFit = !!i587[4]
  i586.m_MinSize = i587[5]
  i586.m_MaxSize = i587[6]
  i586.m_Alignment = i587[7]
  i586.m_AlignByGeometry = !!i587[8]
  i586.m_RichText = !!i587[9]
  i586.m_HorizontalOverflow = i587[10]
  i586.m_VerticalOverflow = i587[11]
  i586.m_LineSpacing = i587[12]
  return i586
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i588 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i589 = data
  i588.targetIsSelf = !!i589[0]
  request.r(i589[1], i589[2], 0, i588, 'targetGO')
  i588.tweenTargetIsTargetGO = !!i589[3]
  i588.delay = i589[4]
  i588.duration = i589[5]
  i588.easeType = i589[6]
  i588.easeCurve = new pc.AnimationCurve( { keys_flow: i589[7] } )
  i588.loopType = i589[8]
  i588.loops = i589[9]
  i588.id = i589[10]
  i588.isRelative = !!i589[11]
  i588.isFrom = !!i589[12]
  i588.isIndependentUpdate = !!i589[13]
  i588.autoKill = !!i589[14]
  i588.autoGenerate = !!i589[15]
  i588.isActive = !!i589[16]
  i588.isValid = !!i589[17]
  request.r(i589[18], i589[19], 0, i588, 'target')
  i588.animationType = i589[20]
  i588.targetType = i589[21]
  i588.forcedTargetType = i589[22]
  i588.autoPlay = !!i589[23]
  i588.useTargetAsV3 = !!i589[24]
  i588.endValueFloat = i589[25]
  i588.endValueV3 = new pc.Vec3( i589[26], i589[27], i589[28] )
  i588.endValueV2 = new pc.Vec2( i589[29], i589[30] )
  i588.endValueColor = new pc.Color(i589[31], i589[32], i589[33], i589[34])
  i588.endValueString = i589[35]
  i588.endValueRect = UnityEngine.Rect.MinMaxRect(i589[36], i589[37], i589[38], i589[39])
  request.r(i589[40], i589[41], 0, i588, 'endValueTransform')
  i588.optionalBool0 = !!i589[42]
  i588.optionalBool1 = !!i589[43]
  i588.optionalFloat0 = i589[44]
  i588.optionalInt0 = i589[45]
  i588.optionalRotationMode = i589[46]
  i588.optionalScrambleMode = i589[47]
  i588.optionalShakeRandomnessMode = i589[48]
  i588.optionalString = i589[49]
  i588.updateType = i589[50]
  i588.isSpeedBased = !!i589[51]
  i588.hasOnStart = !!i589[52]
  i588.hasOnPlay = !!i589[53]
  i588.hasOnUpdate = !!i589[54]
  i588.hasOnStepComplete = !!i589[55]
  i588.hasOnComplete = !!i589[56]
  i588.hasOnTweenCreated = !!i589[57]
  i588.hasOnRewind = !!i589[58]
  i588.onStart = request.d('UnityEngine.Events.UnityEvent', i589[59], i588.onStart)
  i588.onPlay = request.d('UnityEngine.Events.UnityEvent', i589[60], i588.onPlay)
  i588.onUpdate = request.d('UnityEngine.Events.UnityEvent', i589[61], i588.onUpdate)
  i588.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i589[62], i588.onStepComplete)
  i588.onComplete = request.d('UnityEngine.Events.UnityEvent', i589[63], i588.onComplete)
  i588.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i589[64], i588.onTweenCreated)
  i588.onRewind = request.d('UnityEngine.Events.UnityEvent', i589[65], i588.onRewind)
  return i588
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i591 = data
  i590.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i591[0], i590.m_PersistentCalls)
  return i590
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i593 = data
  var i595 = i593[0]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i595.length; i += 1) {
    i594.add(request.d('UnityEngine.Events.PersistentCall', i595[i + 0]));
  }
  i592.m_Calls = i594
  return i592
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_Target')
  i598.m_TargetAssemblyTypeName = i599[2]
  i598.m_MethodName = i599[3]
  i598.m_Mode = i599[4]
  i598.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i599[5], i598.m_Arguments)
  i598.m_CallState = i599[6]
  return i598
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Image' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'm_Sprite')
  i600.m_Type = i601[2]
  i600.m_PreserveAspect = !!i601[3]
  i600.m_FillCenter = !!i601[4]
  i600.m_FillMethod = i601[5]
  i600.m_FillAmount = i601[6]
  i600.m_FillClockwise = !!i601[7]
  i600.m_FillOrigin = i601[8]
  i600.m_UseSpriteMesh = !!i601[9]
  i600.m_PixelsPerUnitMultiplier = i601[10]
  request.r(i601[11], i601[12], 0, i600, 'm_Material')
  i600.m_Maskable = !!i601[13]
  i600.m_Color = new pc.Color(i601[14], i601[15], i601[16], i601[17])
  i600.m_RaycastTarget = !!i601[18]
  i600.m_RaycastPadding = new pc.Vec4( i601[19], i601[20], i601[21], i601[22] )
  return i600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button' )
  var i603 = data
  i602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i603[0], i602.m_OnClick)
  i602.m_Navigation = request.d('UnityEngine.UI.Navigation', i603[1], i602.m_Navigation)
  i602.m_Transition = i603[2]
  i602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i603[3], i602.m_Colors)
  i602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i603[4], i602.m_SpriteState)
  i602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i603[5], i602.m_AnimationTriggers)
  i602.m_Interactable = !!i603[6]
  request.r(i603[7], i603[8], 0, i602, 'm_TargetGraphic')
  return i602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i607 = data
  i606.m_Mode = i607[0]
  i606.m_WrapAround = !!i607[1]
  request.r(i607[2], i607[3], 0, i606, 'm_SelectOnUp')
  request.r(i607[4], i607[5], 0, i606, 'm_SelectOnDown')
  request.r(i607[6], i607[7], 0, i606, 'm_SelectOnLeft')
  request.r(i607[8], i607[9], 0, i606, 'm_SelectOnRight')
  return i606
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i609 = data
  i608.m_NormalColor = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  i608.m_HighlightedColor = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.m_PressedColor = new pc.Color(i609[8], i609[9], i609[10], i609[11])
  i608.m_SelectedColor = new pc.Color(i609[12], i609[13], i609[14], i609[15])
  i608.m_DisabledColor = new pc.Color(i609[16], i609[17], i609[18], i609[19])
  i608.m_ColorMultiplier = i609[20]
  i608.m_FadeDuration = i609[21]
  return i608
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_HighlightedSprite')
  request.r(i611[2], i611[3], 0, i610, 'm_PressedSprite')
  request.r(i611[4], i611[5], 0, i610, 'm_SelectedSprite')
  request.r(i611[6], i611[7], 0, i610, 'm_DisabledSprite')
  return i610
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i613 = data
  i612.m_NormalTrigger = i613[0]
  i612.m_HighlightedTrigger = i613[1]
  i612.m_PressedTrigger = i613[2]
  i612.m_SelectedTrigger = i613[3]
  i612.m_DisabledTrigger = i613[4]
  return i612
}

Deserializers["GameController"] = function (request, data, root) {
  var i614 = root || request.c( 'GameController' )
  var i615 = data
  var i617 = i615[0]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i614.stage1LeftCharacter = i616
  var i619 = i615[1]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 1, i618, '')
  }
  i614.stage1RightCharacter = i618
  var i621 = i615[2]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 1, i620, '')
  }
  i614.stage2LeftCharacter = i620
  var i623 = i615[3]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i614.stage2RightCharacter = i622
  var i625 = i615[4]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 1, i624, '')
  }
  i614.stage3LeftCharacter = i624
  var i627 = i615[5]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i614.stage3MidCharacter = i626
  var i629 = i615[6]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 1, i628, '')
  }
  i614.stage3RightCharacter = i628
  var i631 = i615[7]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i614.players1 = i630
  var i633 = i615[8]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 1, i632, '')
  }
  i614.players2 = i632
  var i635 = i615[9]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i614.monsters = i634
  var i637 = i615[10]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i614.monsters1 = i636
  var i639 = i615[11]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 1, i638, '')
  }
  i614.monsters2 = i638
  request.r(i615[12], i615[13], 0, i614, 'mainCamera')
  var i641 = i615[14]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i641.length; i += 3) {
    i640.add(new pc.Vec3( i641[i + 0], i641[i + 1], i641[i + 2] ));
  }
  i614.cameraPos = i640
  i614.speedMove = i615[15]
  request.r(i615[16], i615[17], 0, i614, 'target')
  i614.index = i615[18]
  i614.end = !!i615[19]
  request.r(i615[20], i615[21], 0, i614, 'endUI')
  return i614
}

Deserializers["TargetController"] = function (request, data, root) {
  var i650 = root || request.c( 'TargetController' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.listTarget = i652
  request.r(i651[1], i651[2], 0, i650, 'currentTarget')
  i650.index = i651[3]
  request.r(i651[4], i651[5], 0, i650, 'tut')
  return i650
}

Deserializers["LunaController"] = function (request, data, root) {
  var i654 = root || request.c( 'LunaController' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'BGTexture')
  i654.UseTime = !!i655[2]
  i654.TimePlay = i655[3]
  i654.TitleText = i655[4]
  i654.ColorTitleText = new pc.Color(i655[5], i655[6], i655[7], i655[8])
  i654.Stage1Left = i655[9]
  i654.Stage1Right = i655[10]
  i654.Stage2Left = i655[11]
  i654.Stage2Right = i655[12]
  i654.Stage3Left = i655[13]
  i654.Stage3Mid = i655[14]
  i654.Stage3Right = i655[15]
  i654.Button1 = i655[16]
  i654.Button2 = i655[17]
  i654.Button3 = i655[18]
  i654.UseMap2 = !!i655[19]
  request.r(i655[20], i655[21], 0, i654, 'BGImage')
  request.r(i655[22], i655[23], 0, i654, 'title')
  var i657 = i655[24]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 1, i656, '')
  }
  i654.CTA = i656
  request.r(i655[25], i655[26], 0, i654, 'endCard')
  var i659 = i655[27]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 1, i658, '')
  }
  i654.buttonSprite = i658
  request.r(i655[28], i655[29], 0, i654, 'button1Image')
  request.r(i655[30], i655[31], 0, i654, 'button2Image')
  request.r(i655[32], i655[33], 0, i654, 'button3Image')
  request.r(i655[34], i655[35], 0, i654, 'map2')
  return i654
}

Deserializers["AudioController"] = function (request, data, root) {
  var i664 = root || request.c( 'AudioController' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'BGM')
  request.r(i665[2], i665[3], 0, i664, 'musicSource')
  request.r(i665[4], i665[5], 0, i664, 'pool')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'clip')
  request.r(i667[2], i667[3], 0, i666, 'outputAudioMixerGroup')
  i666.playOnAwake = !!i667[4]
  i666.loop = !!i667[5]
  i666.time = i667[6]
  i666.volume = i667[7]
  i666.pitch = i667[8]
  i666.enabled = !!i667[9]
  return i666
}

Deserializers["VFXController"] = function (request, data, root) {
  var i668 = root || request.c( 'VFXController' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'bloodPrefab')
  request.r(i669[2], i669[3], 0, i668, 'pool')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i671 = data
  i670.ambientIntensity = i671[0]
  i670.reflectionIntensity = i671[1]
  i670.ambientMode = i671[2]
  i670.ambientLight = new pc.Color(i671[3], i671[4], i671[5], i671[6])
  i670.ambientSkyColor = new pc.Color(i671[7], i671[8], i671[9], i671[10])
  i670.ambientGroundColor = new pc.Color(i671[11], i671[12], i671[13], i671[14])
  i670.ambientEquatorColor = new pc.Color(i671[15], i671[16], i671[17], i671[18])
  i670.fogColor = new pc.Color(i671[19], i671[20], i671[21], i671[22])
  i670.fogEndDistance = i671[23]
  i670.fogStartDistance = i671[24]
  i670.fogDensity = i671[25]
  i670.fog = !!i671[26]
  request.r(i671[27], i671[28], 0, i670, 'skybox')
  i670.fogMode = i671[29]
  var i673 = i671[30]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i673[i + 0]) );
  }
  i670.lightmaps = i672
  i670.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i671[31], i670.lightProbes)
  i670.lightmapsMode = i671[32]
  i670.mixedBakeMode = i671[33]
  i670.environmentLightingMode = i671[34]
  i670.ambientProbe = new pc.SphericalHarmonicsL2(i671[35])
  request.r(i671[36], i671[37], 0, i670, 'customReflection')
  request.r(i671[38], i671[39], 0, i670, 'defaultReflection')
  i670.defaultReflectionMode = i671[40]
  i670.defaultReflectionResolution = i671[41]
  i670.sunLightObjectId = i671[42]
  i670.pixelLightCount = i671[43]
  i670.defaultReflectionHDR = !!i671[44]
  i670.hasLightDataAsset = !!i671[45]
  i670.hasManualGenerate = !!i671[46]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'lightmapColor')
  request.r(i677[2], i677[3], 0, i676, 'lightmapDirection')
  request.r(i677[4], i677[5], 0, i676, 'shadowMask')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i678 = root || new UnityEngine.LightProbes()
  var i679 = data
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i689[i + 0]));
  }
  i686.ShaderCompilationErrors = i688
  i686.name = i687[1]
  i686.guid = i687[2]
  var i691 = i687[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( i691[i + 0] );
  }
  i686.shaderDefinedKeywords = i690
  var i693 = i687[4]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i693[i + 0]) );
  }
  i686.passes = i692
  var i695 = i687[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i695[i + 0]) );
  }
  i686.usePasses = i694
  var i697 = i687[6]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i697[i + 0]) );
  }
  i686.defaultParameterValues = i696
  request.r(i687[7], i687[8], 0, i686, 'unityFallbackShader')
  i686.readDepth = !!i687[9]
  i686.hasDepthOnlyPass = !!i687[10]
  i686.isCreatedByShaderGraph = !!i687[11]
  i686.disableBatching = !!i687[12]
  i686.compiled = !!i687[13]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i701 = data
  i700.shaderName = i701[0]
  i700.errorMessage = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i706 = root || new pc.UnityShaderPass()
  var i707 = data
  i706.id = i707[0]
  i706.subShaderIndex = i707[1]
  i706.name = i707[2]
  i706.passType = i707[3]
  i706.grabPassTextureName = i707[4]
  i706.usePass = !!i707[5]
  i706.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[6], i706.zTest)
  i706.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[7], i706.zWrite)
  i706.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[8], i706.culling)
  i706.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[9], i706.blending)
  i706.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i707[10], i706.alphaBlending)
  i706.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[11], i706.colorWriteMask)
  i706.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[12], i706.offsetUnits)
  i706.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[13], i706.offsetFactor)
  i706.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[14], i706.stencilRef)
  i706.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[15], i706.stencilReadMask)
  i706.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[16], i706.stencilWriteMask)
  i706.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[17], i706.stencilOp)
  i706.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[18], i706.stencilOpFront)
  i706.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i707[19], i706.stencilOpBack)
  var i709 = i707[20]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i709[i + 0]) );
  }
  i706.tags = i708
  var i711 = i707[21]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i706.passDefinedKeywords = i710
  var i713 = i707[22]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i713[i + 0]) );
  }
  i706.passDefinedKeywordGroups = i712
  var i715 = i707[23]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i715[i + 0]) );
  }
  i706.variants = i714
  var i717 = i707[24]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i717[i + 0]) );
  }
  i706.excludedVariants = i716
  i706.hasDepthReader = !!i707[25]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i719 = data
  i718.val = i719[0]
  i718.name = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i721 = data
  i720.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[0], i720.src)
  i720.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[1], i720.dst)
  i720.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[2], i720.op)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i723 = data
  i722.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[0], i722.pass)
  i722.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[1], i722.fail)
  i722.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[2], i722.zFail)
  i722.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[3], i722.comp)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i727 = data
  i726.name = i727[0]
  i726.value = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i730.keywords = i732
  i730.hasDiscard = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i737 = data
  i736.passId = i737[0]
  i736.subShaderIndex = i737[1]
  var i739 = i737[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.vertexProgram = i737[3]
  i736.fragmentProgram = i737[4]
  i736.exportedForWebGl2 = !!i737[5]
  i736.readDepth = !!i737[6]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'shader')
  i742.pass = i743[2]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i747 = data
  i746.name = i747[0]
  i746.type = i747[1]
  i746.value = new pc.Vec4( i747[2], i747[3], i747[4], i747[5] )
  i746.textureValue = i747[6]
  i746.shaderPropertyFlag = i747[7]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'texture')
  i748.aabb = i749[3]
  i748.vertices = i749[4]
  i748.triangles = i749[5]
  i748.textureRect = UnityEngine.Rect.MinMaxRect(i749[6], i749[7], i749[8], i749[9])
  i748.packedRect = UnityEngine.Rect.MinMaxRect(i749[10], i749[11], i749[12], i749[13])
  i748.border = new pc.Vec4( i749[14], i749[15], i749[16], i749[17] )
  i748.transparency = i749[18]
  i748.bounds = i749[19]
  i748.pixelsPerUnit = i749[20]
  i748.textureWidth = i749[21]
  i748.textureHeight = i749[22]
  i748.nativeSize = new pc.Vec2( i749[23], i749[24] )
  i748.pivot = new pc.Vec2( i749[25], i749[26] )
  i748.textureRectOffset = new pc.Vec2( i749[27], i749[28] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i751 = data
  i750.name = i751[0]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i753 = data
  i752.name = i753[0]
  i752.ascent = i753[1]
  i752.originalLineHeight = i753[2]
  i752.fontSize = i753[3]
  var i755 = i753[4]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i755[i + 0]) );
  }
  i752.characterInfo = i754
  request.r(i753[5], i753[6], 0, i752, 'texture')
  i752.originalFontSize = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i759 = data
  i758.index = i759[0]
  i758.advance = i759[1]
  i758.bearing = i759[2]
  i758.glyphWidth = i759[3]
  i758.glyphHeight = i759[4]
  i758.minX = i759[5]
  i758.maxX = i759[6]
  i758.minY = i759[7]
  i758.maxY = i759[8]
  i758.uvBottomLeftX = i759[9]
  i758.uvBottomLeftY = i759[10]
  i758.uvBottomRightX = i759[11]
  i758.uvBottomRightY = i759[12]
  i758.uvTopLeftX = i759[13]
  i758.uvTopLeftY = i759[14]
  i758.uvTopRightX = i759[15]
  i758.uvTopRightY = i759[16]
  return i758
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i761 = data
  i760.useSafeMode = !!i761[0]
  i760.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i761[1], i760.safeModeOptions)
  i760.timeScale = i761[2]
  i760.unscaledTimeScale = i761[3]
  i760.useSmoothDeltaTime = !!i761[4]
  i760.maxSmoothUnscaledTime = i761[5]
  i760.rewindCallbackMode = i761[6]
  i760.showUnityEditorReport = !!i761[7]
  i760.logBehaviour = i761[8]
  i760.drawGizmos = !!i761[9]
  i760.defaultRecyclable = !!i761[10]
  i760.defaultAutoPlay = i761[11]
  i760.defaultUpdateType = i761[12]
  i760.defaultTimeScaleIndependent = !!i761[13]
  i760.defaultEaseType = i761[14]
  i760.defaultEaseOvershootOrAmplitude = i761[15]
  i760.defaultEasePeriod = i761[16]
  i760.defaultAutoKill = !!i761[17]
  i760.defaultLoopType = i761[18]
  i760.debugMode = !!i761[19]
  i760.debugStoreTargetId = !!i761[20]
  i760.showPreviewPanel = !!i761[21]
  i760.storeSettingsLocation = i761[22]
  i760.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i761[23], i760.modules)
  i760.createASMDEF = !!i761[24]
  i760.showPlayingTweens = !!i761[25]
  i760.showPausedTweens = !!i761[26]
  return i760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i763 = data
  i762.logBehaviour = i763[0]
  i762.nestedTweenFailureBehaviour = i763[1]
  return i762
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i764 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i765 = data
  i764.showPanel = !!i765[0]
  i764.audioEnabled = !!i765[1]
  i764.physicsEnabled = !!i765[2]
  i764.physics2DEnabled = !!i765[3]
  i764.spriteEnabled = !!i765[4]
  i764.uiEnabled = !!i765[5]
  i764.textMeshProEnabled = !!i765[6]
  i764.tk2DEnabled = !!i765[7]
  i764.deAudioEnabled = !!i765[8]
  i764.deUnityExtendedEnabled = !!i765[9]
  i764.epoOutlineEnabled = !!i765[10]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i769[i + 0]) );
  }
  i766.files = i768
  i766.componentToPrefabIds = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i773 = data
  i772.path = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'unityObject')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i775 = data
  var i777 = i775[0]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i777[i + 0]) );
  }
  i774.scriptsExecutionOrder = i776
  var i779 = i775[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i779[i + 0]) );
  }
  i774.sortingLayers = i778
  var i781 = i775[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i781[i + 0]) );
  }
  i774.cullingLayers = i780
  i774.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i775[3], i774.timeSettings)
  i774.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i775[4], i774.physicsSettings)
  i774.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i775[5], i774.physics2DSettings)
  i774.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i775[6], i774.qualitySettings)
  i774.enableRealtimeShadows = !!i775[7]
  i774.enableAutoInstancing = !!i775[8]
  i774.enableStaticBatching = !!i775[9]
  i774.enableDynamicBatching = !!i775[10]
  i774.usePreservativeDynamicBatching = !!i775[11]
  i774.lightmapEncodingQuality = i775[12]
  i774.desiredColorSpace = i775[13]
  var i783 = i775[14]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i774.allTags = i782
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i787 = data
  i786.name = i787[0]
  i786.value = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i791 = data
  i790.id = i791[0]
  i790.name = i791[1]
  i790.value = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i795 = data
  i794.id = i795[0]
  i794.name = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i797 = data
  i796.fixedDeltaTime = i797[0]
  i796.maximumDeltaTime = i797[1]
  i796.timeScale = i797[2]
  i796.maximumParticleTimestep = i797[3]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i799 = data
  i798.gravity = new pc.Vec3( i799[0], i799[1], i799[2] )
  i798.defaultSolverIterations = i799[3]
  i798.bounceThreshold = i799[4]
  i798.autoSyncTransforms = !!i799[5]
  i798.autoSimulation = !!i799[6]
  var i801 = i799[7]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i801[i + 0]) );
  }
  i798.collisionMatrix = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.layerId = i805[1]
  i804.otherLayerId = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'material')
  i806.gravity = new pc.Vec2( i807[2], i807[3] )
  i806.positionIterations = i807[4]
  i806.velocityIterations = i807[5]
  i806.velocityThreshold = i807[6]
  i806.maxLinearCorrection = i807[7]
  i806.maxAngularCorrection = i807[8]
  i806.maxTranslationSpeed = i807[9]
  i806.maxRotationSpeed = i807[10]
  i806.baumgarteScale = i807[11]
  i806.baumgarteTOIScale = i807[12]
  i806.timeToSleep = i807[13]
  i806.linearSleepTolerance = i807[14]
  i806.angularSleepTolerance = i807[15]
  i806.defaultContactOffset = i807[16]
  i806.autoSimulation = !!i807[17]
  i806.queriesHitTriggers = !!i807[18]
  i806.queriesStartInColliders = !!i807[19]
  i806.callbacksOnDisable = !!i807[20]
  i806.reuseCollisionCallbacks = !!i807[21]
  i806.autoSyncTransforms = !!i807[22]
  var i809 = i807[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i809[i + 0]) );
  }
  i806.collisionMatrix = i808
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i813 = data
  i812.enabled = !!i813[0]
  i812.layerId = i813[1]
  i812.otherLayerId = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i817[i + 0]) );
  }
  i814.qualityLevels = i816
  var i819 = i815[1]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.names = i818
  i814.shadows = i815[2]
  i814.anisotropicFiltering = i815[3]
  i814.antiAliasing = i815[4]
  i814.lodBias = i815[5]
  i814.shadowCascades = i815[6]
  i814.shadowDistance = i815[7]
  i814.shadowmaskMode = i815[8]
  i814.shadowProjection = i815[9]
  i814.shadowResolution = i815[10]
  i814.softParticles = !!i815[11]
  i814.softVegetation = !!i815[12]
  i814.activeColorSpace = i815[13]
  i814.desiredColorSpace = i815[14]
  i814.masterTextureLimit = i815[15]
  i814.maxQueuedFrames = i815[16]
  i814.particleRaycastBudget = i815[17]
  i814.pixelLightCount = i815[18]
  i814.realtimeReflectionProbes = !!i815[19]
  i814.shadowCascade2Split = i815[20]
  i814.shadowCascade4Split = new pc.Vec3( i815[21], i815[22], i815[23] )
  i814.streamingMipmapsActive = !!i815[24]
  i814.vSyncCount = i815[25]
  i814.asyncUploadBufferSize = i815[26]
  i814.asyncUploadTimeSlice = i815[27]
  i814.billboardsFaceCameraPosition = !!i815[28]
  i814.shadowNearPlaneOffset = i815[29]
  i814.streamingMipmapsMemoryBudget = i815[30]
  i814.maximumLODLevel = i815[31]
  i814.streamingMipmapsAddAllCameras = !!i815[32]
  i814.streamingMipmapsMaxLevelReduction = i815[33]
  i814.streamingMipmapsRenderersPerFrame = i815[34]
  i814.resolutionScalingFixedDPIFactor = i815[35]
  i814.streamingMipmapsMaxFileIORequests = i815[36]
  i814.currentQualityLevel = i815[37]
  return i814
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_ObjectArgument')
  i822.m_ObjectArgumentAssemblyTypeName = i823[2]
  i822.m_IntArgument = i823[3]
  i822.m_FloatArgument = i823[4]
  i822.m_StringArgument = i823[5]
  i822.m_BoolArgument = !!i823[6]
  return i822
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

Deserializers.creativeName = "C1_2610_TamNTM_KSDH_V03_AnhPP";

Deserializers.lunaAppID = "43448";

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

Deserializers.buildID = "44f09e85-595c-4083-956d-5545ff4a51c3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

