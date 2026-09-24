var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointSpring' )
  var i379 = data
  i378.spring = i379[0]
  i378.damper = i379[1]
  i378.targetPosition = i379[2]
  return i378
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointMotor' )
  var i381 = data
  i380.m_TargetVelocity = i381[0]
  i380.m_Force = i381[1]
  i380.m_FreeSpin = i381[2]
  return i380
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointLimits' )
  var i383 = data
  i382.m_Min = i383[0]
  i382.m_Max = i383[1]
  i382.m_Bounciness = i383[2]
  i382.m_BounceMinVelocity = i383[3]
  i382.m_ContactDistance = i383[4]
  i382.minBounce = i383[5]
  i382.maxBounce = i383[6]
  return i382
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointDrive' )
  var i385 = data
  i384.m_PositionSpring = i385[0]
  i384.m_PositionDamper = i385[1]
  i384.m_MaximumForce = i385[2]
  i384.m_UseAcceleration = i385[3]
  return i384
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i387 = data
  i386.m_Spring = i387[0]
  i386.m_Damper = i387[1]
  return i386
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i389 = data
  i388.m_Limit = i389[0]
  i388.m_Bounciness = i389[1]
  i388.m_ContactDistance = i389[2]
  return i388
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i391 = data
  i390.m_ExtremumSlip = i391[0]
  i390.m_ExtremumValue = i391[1]
  i390.m_AsymptoteSlip = i391[2]
  i390.m_AsymptoteValue = i391[3]
  i390.m_Stiffness = i391[4]
  return i390
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i393 = data
  i392.m_LowerAngle = i393[0]
  i392.m_UpperAngle = i393[1]
  return i392
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i395 = data
  i394.m_MotorSpeed = i395[0]
  i394.m_MaximumMotorTorque = i395[1]
  return i394
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i397 = data
  i396.m_DampingRatio = i397[0]
  i396.m_Frequency = i397[1]
  i396.m_Angle = i397[2]
  return i396
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i399 = data
  i398.m_LowerTranslation = i399[0]
  i398.m_UpperTranslation = i399[1]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i400 = root || new pc.UnityMaterial()
  var i401 = data
  i400.name = i401[0]
  request.r(i401[1], i401[2], 0, i400, 'shader')
  i400.renderQueue = i401[3]
  i400.enableInstancing = !!i401[4]
  var i403 = i401[5]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i403[i + 0]) );
  }
  i400.floatParameters = i402
  var i405 = i401[6]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i405[i + 0]) );
  }
  i400.colorParameters = i404
  var i407 = i401[7]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i407[i + 0]) );
  }
  i400.vectorParameters = i406
  var i409 = i401[8]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i409[i + 0]) );
  }
  i400.textureParameters = i408
  var i411 = i401[9]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i411[i + 0]) );
  }
  i400.materialFlags = i410
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i415 = data
  i414.name = i415[0]
  i414.value = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i419 = data
  i418.name = i419[0]
  i418.value = new pc.Color(i419[1], i419[2], i419[3], i419[4])
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i423 = data
  i422.name = i423[0]
  i422.value = new pc.Vec4( i423[1], i423[2], i423[3], i423[4] )
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i427 = data
  i426.name = i427[0]
  request.r(i427[1], i427[2], 0, i426, 'value')
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i431 = data
  i430.name = i431[0]
  i430.enabled = !!i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i433 = data
  i432.name = i433[0]
  i432.width = i433[1]
  i432.height = i433[2]
  i432.mipmapCount = i433[3]
  i432.anisoLevel = i433[4]
  i432.filterMode = i433[5]
  i432.hdr = !!i433[6]
  i432.format = i433[7]
  i432.wrapMode = i433[8]
  i432.alphaIsTransparency = !!i433[9]
  i432.alphaSource = i433[10]
  i432.graphicsFormat = i433[11]
  i432.sRGBTexture = !!i433[12]
  i432.desiredColorSpace = i433[13]
  i432.wrapU = i433[14]
  i432.wrapV = i433[15]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i435 = data
  i434.position = new pc.Vec3( i435[0], i435[1], i435[2] )
  i434.scale = new pc.Vec3( i435[3], i435[4], i435[5] )
  i434.rotation = new pc.Quat(i435[6], i435[7], i435[8], i435[9])
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i437 = data
  i436.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i437[0], i436.main)
  i436.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i437[1], i436.colorBySpeed)
  i436.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i437[2], i436.colorOverLifetime)
  i436.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i437[3], i436.emission)
  i436.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i437[4], i436.rotationBySpeed)
  i436.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i437[5], i436.rotationOverLifetime)
  i436.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i437[6], i436.shape)
  i436.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i437[7], i436.sizeBySpeed)
  i436.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i437[8], i436.sizeOverLifetime)
  i436.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i437[9], i436.textureSheetAnimation)
  i436.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i437[10], i436.velocityOverLifetime)
  i436.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i437[11], i436.noise)
  i436.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i437[12], i436.inheritVelocity)
  i436.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i437[13], i436.forceOverLifetime)
  i436.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i437[14], i436.limitVelocityOverLifetime)
  i436.useAutoRandomSeed = !!i437[15]
  i436.randomSeed = i437[16]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i438 = root || new pc.ParticleSystemMain()
  var i439 = data
  i438.duration = i439[0]
  i438.loop = !!i439[1]
  i438.prewarm = !!i439[2]
  i438.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[3], i438.startDelay)
  i438.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[4], i438.startLifetime)
  i438.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[5], i438.startSpeed)
  i438.startSize3D = !!i439[6]
  i438.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[7], i438.startSizeX)
  i438.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[8], i438.startSizeY)
  i438.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[9], i438.startSizeZ)
  i438.startRotation3D = !!i439[10]
  i438.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[11], i438.startRotationX)
  i438.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[12], i438.startRotationY)
  i438.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[13], i438.startRotationZ)
  i438.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i439[14], i438.startColor)
  i438.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i439[15], i438.gravityModifier)
  i438.simulationSpace = i439[16]
  request.r(i439[17], i439[18], 0, i438, 'customSimulationSpace')
  i438.simulationSpeed = i439[19]
  i438.useUnscaledTime = !!i439[20]
  i438.scalingMode = i439[21]
  i438.playOnAwake = !!i439[22]
  i438.maxParticles = i439[23]
  i438.emitterVelocityMode = i439[24]
  i438.stopAction = i439[25]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i440 = root || new pc.MinMaxCurve()
  var i441 = data
  i440.mode = i441[0]
  i440.curveMin = new pc.AnimationCurve( { keys_flow: i441[1] } )
  i440.curveMax = new pc.AnimationCurve( { keys_flow: i441[2] } )
  i440.curveMultiplier = i441[3]
  i440.constantMin = i441[4]
  i440.constantMax = i441[5]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i442 = root || new pc.MinMaxGradient()
  var i443 = data
  i442.mode = i443[0]
  i442.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i443[1], i442.gradientMin)
  i442.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i443[2], i442.gradientMax)
  i442.colorMin = new pc.Color(i443[3], i443[4], i443[5], i443[6])
  i442.colorMax = new pc.Color(i443[7], i443[8], i443[9], i443[10])
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i445 = data
  i444.mode = i445[0]
  var i447 = i445[1]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i447[i + 0]) );
  }
  i444.colorKeys = i446
  var i449 = i445[2]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i449[i + 0]) );
  }
  i444.alphaKeys = i448
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i450 = root || new pc.ParticleSystemColorBySpeed()
  var i451 = data
  i450.enabled = !!i451[0]
  i450.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i451[1], i450.color)
  i450.range = new pc.Vec2( i451[2], i451[3] )
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i455 = data
  i454.color = new pc.Color(i455[0], i455[1], i455[2], i455[3])
  i454.time = i455[4]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i459 = data
  i458.alpha = i459[0]
  i458.time = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i460 = root || new pc.ParticleSystemColorOverLifetime()
  var i461 = data
  i460.enabled = !!i461[0]
  i460.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i461[1], i460.color)
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i462 = root || new pc.ParticleSystemEmitter()
  var i463 = data
  i462.enabled = !!i463[0]
  i462.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[1], i462.rateOverTime)
  i462.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[2], i462.rateOverDistance)
  var i465 = i463[3]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i465[i + 0]) );
  }
  i462.bursts = i464
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemBurst()
  var i469 = data
  i468.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[0], i468.count)
  i468.cycleCount = i469[1]
  i468.minCount = i469[2]
  i468.maxCount = i469[3]
  i468.repeatInterval = i469[4]
  i468.time = i469[5]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemRotationBySpeed()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[1], i470.x)
  i470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[2], i470.y)
  i470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[3], i470.z)
  i470.separateAxes = !!i471[4]
  i470.range = new pc.Vec2( i471[5], i471[6] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemRotationOverLifetime()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.x)
  i472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.y)
  i472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.z)
  i472.separateAxes = !!i473[4]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemShape()
  var i475 = data
  i474.enabled = !!i475[0]
  i474.shapeType = i475[1]
  i474.randomDirectionAmount = i475[2]
  i474.sphericalDirectionAmount = i475[3]
  i474.randomPositionAmount = i475[4]
  i474.alignToDirection = !!i475[5]
  i474.radius = i475[6]
  i474.radiusMode = i475[7]
  i474.radiusSpread = i475[8]
  i474.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[9], i474.radiusSpeed)
  i474.radiusThickness = i475[10]
  i474.angle = i475[11]
  i474.length = i475[12]
  i474.boxThickness = new pc.Vec3( i475[13], i475[14], i475[15] )
  i474.meshShapeType = i475[16]
  request.r(i475[17], i475[18], 0, i474, 'mesh')
  request.r(i475[19], i475[20], 0, i474, 'meshRenderer')
  request.r(i475[21], i475[22], 0, i474, 'skinnedMeshRenderer')
  i474.useMeshMaterialIndex = !!i475[23]
  i474.meshMaterialIndex = i475[24]
  i474.useMeshColors = !!i475[25]
  i474.normalOffset = i475[26]
  i474.arc = i475[27]
  i474.arcMode = i475[28]
  i474.arcSpread = i475[29]
  i474.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[30], i474.arcSpeed)
  i474.donutRadius = i475[31]
  i474.position = new pc.Vec3( i475[32], i475[33], i475[34] )
  i474.rotation = new pc.Vec3( i475[35], i475[36], i475[37] )
  i474.scale = new pc.Vec3( i475[38], i475[39], i475[40] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemSizeBySpeed()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[1], i476.x)
  i476.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[2], i476.y)
  i476.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[3], i476.z)
  i476.separateAxes = !!i477[4]
  i476.range = new pc.Vec2( i477[5], i477[6] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemSizeOverLifetime()
  var i479 = data
  i478.enabled = !!i479[0]
  i478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[1], i478.x)
  i478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[2], i478.y)
  i478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[3], i478.z)
  i478.separateAxes = !!i479[4]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.mode = i481[1]
  i480.animation = i481[2]
  i480.numTilesX = i481[3]
  i480.numTilesY = i481[4]
  i480.useRandomRow = !!i481[5]
  i480.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[6], i480.frameOverTime)
  i480.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[7], i480.startFrame)
  i480.cycleCount = i481[8]
  i480.rowIndex = i481[9]
  i480.flipU = i481[10]
  i480.flipV = i481[11]
  i480.spriteCount = i481[12]
  var i483 = i481[13]
  var i482 = []
  for(var i = 0; i < i483.length; i += 2) {
  request.r(i483[i + 0], i483[i + 1], 2, i482, '')
  }
  i480.sprites = i482
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[1], i486.x)
  i486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.y)
  i486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[3], i486.z)
  i486.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[4], i486.radial)
  i486.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[5], i486.speedModifier)
  i486.space = i487[6]
  i486.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[7], i486.orbitalX)
  i486.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[8], i486.orbitalY)
  i486.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[9], i486.orbitalZ)
  i486.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[10], i486.orbitalOffsetX)
  i486.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[11], i486.orbitalOffsetY)
  i486.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[12], i486.orbitalOffsetZ)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemNoise()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.separateAxes = !!i489[1]
  i488.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.strengthX)
  i488.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.strengthY)
  i488.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[4], i488.strengthZ)
  i488.frequency = i489[5]
  i488.damping = !!i489[6]
  i488.octaveCount = i489[7]
  i488.octaveMultiplier = i489[8]
  i488.octaveScale = i489[9]
  i488.quality = i489[10]
  i488.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[11], i488.scrollSpeed)
  i488.scrollSpeedMultiplier = i489[12]
  i488.remapEnabled = !!i489[13]
  i488.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[14], i488.remapX)
  i488.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[15], i488.remapY)
  i488.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[16], i488.remapZ)
  i488.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[17], i488.positionAmount)
  i488.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[18], i488.rotationAmount)
  i488.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[19], i488.sizeAmount)
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemInheritVelocity()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.mode = i491[1]
  i490.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[2], i490.curve)
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemForceOverLifetime()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[1], i492.x)
  i492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[2], i492.y)
  i492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[3], i492.z)
  i492.space = i493[4]
  i492.randomized = !!i493[5]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[1], i494.limit)
  i494.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[2], i494.limitX)
  i494.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[3], i494.limitY)
  i494.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[4], i494.limitZ)
  i494.dampen = i495[5]
  i494.separateAxes = !!i495[6]
  i494.space = i495[7]
  i494.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[8], i494.drag)
  i494.multiplyDragByParticleSize = !!i495[9]
  i494.multiplyDragByParticleVelocity = !!i495[10]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'mesh')
  i496.meshCount = i497[2]
  i496.activeVertexStreamsCount = i497[3]
  i496.alignment = i497[4]
  i496.renderMode = i497[5]
  i496.sortMode = i497[6]
  i496.lengthScale = i497[7]
  i496.velocityScale = i497[8]
  i496.cameraVelocityScale = i497[9]
  i496.normalDirection = i497[10]
  i496.sortingFudge = i497[11]
  i496.minParticleSize = i497[12]
  i496.maxParticleSize = i497[13]
  i496.pivot = new pc.Vec3( i497[14], i497[15], i497[16] )
  request.r(i497[17], i497[18], 0, i496, 'trailMaterial')
  i496.applyActiveColorSpace = !!i497[19]
  i496.enabled = !!i497[20]
  request.r(i497[21], i497[22], 0, i496, 'sharedMaterial')
  var i499 = i497[23]
  var i498 = []
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 2, i498, '')
  }
  i496.sharedMaterials = i498
  i496.receiveShadows = !!i497[24]
  i496.shadowCastingMode = i497[25]
  i496.sortingLayerID = i497[26]
  i496.sortingOrder = i497[27]
  i496.lightmapIndex = i497[28]
  i496.lightmapSceneIndex = i497[29]
  i496.lightmapScaleOffset = new pc.Vec4( i497[30], i497[31], i497[32], i497[33] )
  i496.lightProbeUsage = i497[34]
  i496.reflectionProbeUsage = i497[35]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i503 = data
  i502.name = i503[0]
  i502.tagId = i503[1]
  i502.enabled = !!i503[2]
  i502.isStatic = !!i503[3]
  i502.layer = i503[4]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i505 = data
  i504.name = i505[0]
  i504.index = i505[1]
  i504.startup = !!i505[2]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i507 = data
  i506.aspect = i507[0]
  i506.orthographic = !!i507[1]
  i506.orthographicSize = i507[2]
  i506.backgroundColor = new pc.Color(i507[3], i507[4], i507[5], i507[6])
  i506.nearClipPlane = i507[7]
  i506.farClipPlane = i507[8]
  i506.fieldOfView = i507[9]
  i506.depth = i507[10]
  i506.clearFlags = i507[11]
  i506.cullingMask = i507[12]
  i506.rect = i507[13]
  request.r(i507[14], i507[15], 0, i506, 'targetTexture')
  i506.usePhysicalProperties = !!i507[16]
  i506.focalLength = i507[17]
  i506.sensorSize = new pc.Vec2( i507[18], i507[19] )
  i506.lensShift = new pc.Vec2( i507[20], i507[21] )
  i506.gateFit = i507[22]
  i506.commandBufferCount = i507[23]
  i506.cameraType = i507[24]
  i506.enabled = !!i507[25]
  return i506
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_FirstSelected')
  i508.m_sendNavigationEvents = !!i509[2]
  i508.m_DragThreshold = i509[3]
  return i508
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i511 = data
  i510.m_HorizontalAxis = i511[0]
  i510.m_VerticalAxis = i511[1]
  i510.m_SubmitButton = i511[2]
  i510.m_CancelButton = i511[3]
  i510.m_InputActionsPerSecond = i511[4]
  i510.m_RepeatDelay = i511[5]
  i510.m_ForceModuleActive = !!i511[6]
  i510.m_SendPointerHoverToParent = !!i511[7]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i513 = data
  i512.pivot = new pc.Vec2( i513[0], i513[1] )
  i512.anchorMin = new pc.Vec2( i513[2], i513[3] )
  i512.anchorMax = new pc.Vec2( i513[4], i513[5] )
  i512.sizeDelta = new pc.Vec2( i513[6], i513[7] )
  i512.anchoredPosition3D = new pc.Vec3( i513[8], i513[9], i513[10] )
  i512.rotation = new pc.Quat(i513[11], i513[12], i513[13], i513[14])
  i512.scale = new pc.Vec3( i513[15], i513[16], i513[17] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i515 = data
  i514.planeDistance = i515[0]
  i514.referencePixelsPerUnit = i515[1]
  i514.isFallbackOverlay = !!i515[2]
  i514.renderMode = i515[3]
  i514.renderOrder = i515[4]
  i514.sortingLayerName = i515[5]
  i514.sortingOrder = i515[6]
  i514.scaleFactor = i515[7]
  request.r(i515[8], i515[9], 0, i514, 'worldCamera')
  i514.overrideSorting = !!i515[10]
  i514.pixelPerfect = !!i515[11]
  i514.targetDisplay = i515[12]
  i514.overridePixelPerfect = !!i515[13]
  i514.enabled = !!i515[14]
  return i514
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i517 = data
  i516.m_UiScaleMode = i517[0]
  i516.m_ReferencePixelsPerUnit = i517[1]
  i516.m_ScaleFactor = i517[2]
  i516.m_ReferenceResolution = new pc.Vec2( i517[3], i517[4] )
  i516.m_ScreenMatchMode = i517[5]
  i516.m_MatchWidthOrHeight = i517[6]
  i516.m_PhysicalUnit = i517[7]
  i516.m_FallbackScreenDPI = i517[8]
  i516.m_DefaultSpriteDPI = i517[9]
  i516.m_DynamicPixelsPerUnit = i517[10]
  i516.m_PresetInfoIsWorld = !!i517[11]
  return i516
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i519 = data
  i518.m_IgnoreReversedGraphics = !!i519[0]
  i518.m_BlockingObjects = i519[1]
  i518.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i519[2] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i521 = data
  i520.cullTransparentMesh = !!i521[0]
  return i520
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i523 = data
  i522.m_AspectMode = i523[0]
  i522.m_AspectRatio = i523[1]
  return i522
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'm_Texture')
  i524.m_UVRect = UnityEngine.Rect.MinMaxRect(i525[2], i525[3], i525[4], i525[5])
  request.r(i525[6], i525[7], 0, i524, 'm_Material')
  i524.m_Maskable = !!i525[8]
  i524.m_Color = new pc.Color(i525[9], i525[10], i525[11], i525[12])
  i524.m_RaycastTarget = !!i525[13]
  i524.m_RaycastPadding = new pc.Vec4( i525[14], i525[15], i525[16], i525[17] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'animatorController')
  request.r(i527[2], i527[3], 0, i526, 'avatar')
  i526.updateMode = i527[4]
  i526.hasTransformHierarchy = !!i527[5]
  i526.applyRootMotion = !!i527[6]
  var i529 = i527[7]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i526.humanBones = i528
  i526.enabled = !!i527[8]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i533 = data
  i532.bodyType = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'material')
  i532.simulated = !!i533[3]
  i532.useAutoMass = !!i533[4]
  i532.mass = i533[5]
  i532.drag = i533[6]
  i532.angularDrag = i533[7]
  i532.gravityScale = i533[8]
  i532.collisionDetectionMode = i533[9]
  i532.sleepMode = i533[10]
  i532.constraints = i533[11]
  return i532
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i534 = root || request.c( 'MonsterController' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'leg')
  request.r(i535[2], i535[3], 0, i534, 'hip')
  request.r(i535[4], i535[5], 0, i534, 'body')
  request.r(i535[6], i535[7], 0, i534, 'head')
  request.r(i535[8], i535[9], 0, i534, 'arm')
  request.r(i535[10], i535[11], 0, i534, 'rb')
  request.r(i535[12], i535[13], 0, i534, 'deadSFX')
  i534.force = new pc.Vec2( i535[14], i535[15] )
  i534.HP = i535[16]
  i534.isDead = !!i535[17]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'clip')
  request.r(i537[2], i537[3], 0, i536, 'outputAudioMixerGroup')
  i536.playOnAwake = !!i537[4]
  i536.loop = !!i537[5]
  i536.time = i537[6]
  i536.volume = i537[7]
  i536.pitch = i537[8]
  i536.enabled = !!i537[9]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i539 = data
  i538.usedByComposite = !!i539[0]
  i538.autoTiling = !!i539[1]
  i538.size = new pc.Vec2( i539[2], i539[3] )
  i538.edgeRadius = i539[4]
  i538.enabled = !!i539[5]
  i538.isTrigger = !!i539[6]
  i538.usedByEffector = !!i539[7]
  i538.density = i539[8]
  i538.offset = new pc.Vec2( i539[9], i539[10] )
  request.r(i539[11], i539[12], 0, i538, 'material')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i541 = data
  i540.useLimits = !!i541[0]
  i540.limits = request.d('UnityEngine.JointAngleLimits2D', i541[1], i540.limits)
  i540.useMotor = !!i541[2]
  i540.motor = request.d('UnityEngine.JointMotor2D', i541[3], i540.motor)
  i540.anchor = new pc.Vec2( i541[4], i541[5] )
  i540.connectedAnchor = new pc.Vec2( i541[6], i541[7] )
  i540.autoConfigureConnectedAnchor = !!i541[8]
  request.r(i541[9], i541[10], 0, i540, 'connectedBody')
  i540.breakForce = i541[11]
  i540.breakTorque = i541[12]
  i540.enableCollision = !!i541[13]
  i540.enabled = !!i541[14]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i543 = data
  i542.color = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  request.r(i543[4], i543[5], 0, i542, 'sprite')
  i542.flipX = !!i543[6]
  i542.flipY = !!i543[7]
  i542.drawMode = i543[8]
  i542.size = new pc.Vec2( i543[9], i543[10] )
  i542.tileMode = i543[11]
  i542.adaptiveModeThreshold = i543[12]
  i542.maskInteraction = i543[13]
  i542.spriteSortPoint = i543[14]
  i542.enabled = !!i543[15]
  request.r(i543[16], i543[17], 0, i542, 'sharedMaterial')
  var i545 = i543[18]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.sharedMaterials = i544
  i542.receiveShadows = !!i543[19]
  i542.shadowCastingMode = i543[20]
  i542.sortingLayerID = i543[21]
  i542.sortingOrder = i543[22]
  i542.lightmapIndex = i543[23]
  i542.lightmapSceneIndex = i543[24]
  i542.lightmapScaleOffset = new pc.Vec4( i543[25], i543[26], i543[27], i543[28] )
  i542.lightProbeUsage = i543[29]
  i542.reflectionProbeUsage = i543[30]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i547 = data
  i546.autoConfigureTarget = !!i547[0]
  i546.target = new pc.Vec2( i547[1], i547[2] )
  i546.anchor = new pc.Vec2( i547[3], i547[4] )
  i546.maxForce = i547[5]
  i546.dampingRatio = i547[6]
  i546.frequency = i547[7]
  request.r(i547[8], i547[9], 0, i546, 'connectedBody')
  i546.breakForce = i547[10]
  i546.breakTorque = i547[11]
  i546.enableCollision = !!i547[12]
  i546.enabled = !!i547[13]
  return i546
}

Deserializers["BonkController"] = function (request, data, root) {
  var i548 = root || request.c( 'BonkController' )
  var i549 = data
  i548.target = i549[0]
  request.r(i549[1], i549[2], 0, i548, 'hitSound')
  return i548
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Image' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_Sprite')
  i550.m_Type = i551[2]
  i550.m_PreserveAspect = !!i551[3]
  i550.m_FillCenter = !!i551[4]
  i550.m_FillMethod = i551[5]
  i550.m_FillAmount = i551[6]
  i550.m_FillClockwise = !!i551[7]
  i550.m_FillOrigin = i551[8]
  i550.m_UseSpriteMesh = !!i551[9]
  i550.m_PixelsPerUnitMultiplier = i551[10]
  request.r(i551[11], i551[12], 0, i550, 'm_Material')
  i550.m_Maskable = !!i551[13]
  i550.m_Color = new pc.Color(i551[14], i551[15], i551[16], i551[17])
  i550.m_RaycastTarget = !!i551[18]
  i550.m_RaycastPadding = new pc.Vec4( i551[19], i551[20], i551[21], i551[22] )
  return i550
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i552 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i553 = data
  i552.targetIsSelf = !!i553[0]
  request.r(i553[1], i553[2], 0, i552, 'targetGO')
  i552.tweenTargetIsTargetGO = !!i553[3]
  i552.delay = i553[4]
  i552.duration = i553[5]
  i552.easeType = i553[6]
  i552.easeCurve = new pc.AnimationCurve( { keys_flow: i553[7] } )
  i552.loopType = i553[8]
  i552.loops = i553[9]
  i552.id = i553[10]
  i552.isRelative = !!i553[11]
  i552.isFrom = !!i553[12]
  i552.isIndependentUpdate = !!i553[13]
  i552.autoKill = !!i553[14]
  i552.autoGenerate = !!i553[15]
  i552.isActive = !!i553[16]
  i552.isValid = !!i553[17]
  request.r(i553[18], i553[19], 0, i552, 'target')
  i552.animationType = i553[20]
  i552.targetType = i553[21]
  i552.forcedTargetType = i553[22]
  i552.autoPlay = !!i553[23]
  i552.useTargetAsV3 = !!i553[24]
  i552.endValueFloat = i553[25]
  i552.endValueV3 = new pc.Vec3( i553[26], i553[27], i553[28] )
  i552.endValueV2 = new pc.Vec2( i553[29], i553[30] )
  i552.endValueColor = new pc.Color(i553[31], i553[32], i553[33], i553[34])
  i552.endValueString = i553[35]
  i552.endValueRect = UnityEngine.Rect.MinMaxRect(i553[36], i553[37], i553[38], i553[39])
  request.r(i553[40], i553[41], 0, i552, 'endValueTransform')
  i552.optionalBool0 = !!i553[42]
  i552.optionalBool1 = !!i553[43]
  i552.optionalFloat0 = i553[44]
  i552.optionalInt0 = i553[45]
  i552.optionalRotationMode = i553[46]
  i552.optionalScrambleMode = i553[47]
  i552.optionalShakeRandomnessMode = i553[48]
  i552.optionalString = i553[49]
  i552.updateType = i553[50]
  i552.isSpeedBased = !!i553[51]
  i552.hasOnStart = !!i553[52]
  i552.hasOnPlay = !!i553[53]
  i552.hasOnUpdate = !!i553[54]
  i552.hasOnStepComplete = !!i553[55]
  i552.hasOnComplete = !!i553[56]
  i552.hasOnTweenCreated = !!i553[57]
  i552.hasOnRewind = !!i553[58]
  i552.onStart = request.d('UnityEngine.Events.UnityEvent', i553[59], i552.onStart)
  i552.onPlay = request.d('UnityEngine.Events.UnityEvent', i553[60], i552.onPlay)
  i552.onUpdate = request.d('UnityEngine.Events.UnityEvent', i553[61], i552.onUpdate)
  i552.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i553[62], i552.onStepComplete)
  i552.onComplete = request.d('UnityEngine.Events.UnityEvent', i553[63], i552.onComplete)
  i552.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i553[64], i552.onTweenCreated)
  i552.onRewind = request.d('UnityEngine.Events.UnityEvent', i553[65], i552.onRewind)
  return i552
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i555 = data
  i554.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i555[0], i554.m_PersistentCalls)
  return i554
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i557 = data
  var i559 = i557[0]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i559.length; i += 1) {
    i558.add(request.d('UnityEngine.Events.PersistentCall', i559[i + 0]));
  }
  i556.m_Calls = i558
  return i556
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_Target')
  i562.m_TargetAssemblyTypeName = i563[2]
  i562.m_MethodName = i563[3]
  i562.m_Mode = i563[4]
  i562.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i563[5], i562.m_Arguments)
  i562.m_CallState = i563[6]
  return i562
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.Text' )
  var i565 = data
  i564.m_FontData = request.d('UnityEngine.UI.FontData', i565[0], i564.m_FontData)
  i564.m_Text = i565[1]
  request.r(i565[2], i565[3], 0, i564, 'm_Material')
  i564.m_Maskable = !!i565[4]
  i564.m_Color = new pc.Color(i565[5], i565[6], i565[7], i565[8])
  i564.m_RaycastTarget = !!i565[9]
  i564.m_RaycastPadding = new pc.Vec4( i565[10], i565[11], i565[12], i565[13] )
  return i564
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.FontData' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Font')
  i566.m_FontSize = i567[2]
  i566.m_FontStyle = i567[3]
  i566.m_BestFit = !!i567[4]
  i566.m_MinSize = i567[5]
  i566.m_MaxSize = i567[6]
  i566.m_Alignment = i567[7]
  i566.m_AlignByGeometry = !!i567[8]
  i566.m_RichText = !!i567[9]
  i566.m_HorizontalOverflow = i567[10]
  i566.m_VerticalOverflow = i567[11]
  i566.m_LineSpacing = i567[12]
  return i566
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.Button' )
  var i569 = data
  i568.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i569[0], i568.m_OnClick)
  i568.m_Navigation = request.d('UnityEngine.UI.Navigation', i569[1], i568.m_Navigation)
  i568.m_Transition = i569[2]
  i568.m_Colors = request.d('UnityEngine.UI.ColorBlock', i569[3], i568.m_Colors)
  i568.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i569[4], i568.m_SpriteState)
  i568.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i569[5], i568.m_AnimationTriggers)
  i568.m_Interactable = !!i569[6]
  request.r(i569[7], i569[8], 0, i568, 'm_TargetGraphic')
  return i568
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i571 = data
  i570.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i571[0], i570.m_PersistentCalls)
  return i570
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i573 = data
  i572.m_Mode = i573[0]
  i572.m_WrapAround = !!i573[1]
  request.r(i573[2], i573[3], 0, i572, 'm_SelectOnUp')
  request.r(i573[4], i573[5], 0, i572, 'm_SelectOnDown')
  request.r(i573[6], i573[7], 0, i572, 'm_SelectOnLeft')
  request.r(i573[8], i573[9], 0, i572, 'm_SelectOnRight')
  return i572
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i575 = data
  i574.m_NormalColor = new pc.Color(i575[0], i575[1], i575[2], i575[3])
  i574.m_HighlightedColor = new pc.Color(i575[4], i575[5], i575[6], i575[7])
  i574.m_PressedColor = new pc.Color(i575[8], i575[9], i575[10], i575[11])
  i574.m_SelectedColor = new pc.Color(i575[12], i575[13], i575[14], i575[15])
  i574.m_DisabledColor = new pc.Color(i575[16], i575[17], i575[18], i575[19])
  i574.m_ColorMultiplier = i575[20]
  i574.m_FadeDuration = i575[21]
  return i574
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_HighlightedSprite')
  request.r(i577[2], i577[3], 0, i576, 'm_PressedSprite')
  request.r(i577[4], i577[5], 0, i576, 'm_SelectedSprite')
  request.r(i577[6], i577[7], 0, i576, 'm_DisabledSprite')
  return i576
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i579 = data
  i578.m_NormalTrigger = i579[0]
  i578.m_HighlightedTrigger = i579[1]
  i578.m_PressedTrigger = i579[2]
  i578.m_SelectedTrigger = i579[3]
  i578.m_DisabledTrigger = i579[4]
  return i578
}

Deserializers["GameController"] = function (request, data, root) {
  var i580 = root || request.c( 'GameController' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'monster')
  request.r(i581[2], i581[3], 0, i580, 'target')
  request.r(i581[4], i581[5], 0, i580, 'endUI')
  return i580
}

Deserializers["TargetController"] = function (request, data, root) {
  var i582 = root || request.c( 'TargetController' )
  var i583 = data
  var i585 = i583[0]
  var i584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 1, i584, '')
  }
  i582.listTarget = i584
  request.r(i583[1], i583[2], 0, i582, 'currentTarget')
  i582.index = i583[3]
  request.r(i583[4], i583[5], 0, i582, 'tut')
  return i582
}

Deserializers["LunaController"] = function (request, data, root) {
  var i588 = root || request.c( 'LunaController' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'BGTexture')
  i588.UseTime = !!i589[2]
  i588.TimePlay = i589[3]
  request.r(i589[4], i589[5], 0, i588, 'BGImage')
  var i591 = i589[6]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 1, i590, '')
  }
  i588.CTA = i590
  return i588
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i594 = root || request.c( 'LayoutController' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'mainCamera')
  return i594
}

Deserializers["AudioController"] = function (request, data, root) {
  var i596 = root || request.c( 'AudioController' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'BGM')
  request.r(i597[2], i597[3], 0, i596, 'musicSource')
  request.r(i597[4], i597[5], 0, i596, 'pool')
  return i596
}

Deserializers["VFXController"] = function (request, data, root) {
  var i598 = root || request.c( 'VFXController' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'bloodPrefab')
  request.r(i599[2], i599[3], 0, i598, 'pool')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i601 = data
  i600.ambientIntensity = i601[0]
  i600.reflectionIntensity = i601[1]
  i600.ambientMode = i601[2]
  i600.ambientLight = new pc.Color(i601[3], i601[4], i601[5], i601[6])
  i600.ambientSkyColor = new pc.Color(i601[7], i601[8], i601[9], i601[10])
  i600.ambientGroundColor = new pc.Color(i601[11], i601[12], i601[13], i601[14])
  i600.ambientEquatorColor = new pc.Color(i601[15], i601[16], i601[17], i601[18])
  i600.fogColor = new pc.Color(i601[19], i601[20], i601[21], i601[22])
  i600.fogEndDistance = i601[23]
  i600.fogStartDistance = i601[24]
  i600.fogDensity = i601[25]
  i600.fog = !!i601[26]
  request.r(i601[27], i601[28], 0, i600, 'skybox')
  i600.fogMode = i601[29]
  var i603 = i601[30]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i603[i + 0]) );
  }
  i600.lightmaps = i602
  i600.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i601[31], i600.lightProbes)
  i600.lightmapsMode = i601[32]
  i600.mixedBakeMode = i601[33]
  i600.environmentLightingMode = i601[34]
  i600.ambientProbe = new pc.SphericalHarmonicsL2(i601[35])
  request.r(i601[36], i601[37], 0, i600, 'customReflection')
  request.r(i601[38], i601[39], 0, i600, 'defaultReflection')
  i600.defaultReflectionMode = i601[40]
  i600.defaultReflectionResolution = i601[41]
  i600.sunLightObjectId = i601[42]
  i600.pixelLightCount = i601[43]
  i600.defaultReflectionHDR = !!i601[44]
  i600.hasLightDataAsset = !!i601[45]
  i600.hasManualGenerate = !!i601[46]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'lightmapColor')
  request.r(i607[2], i607[3], 0, i606, 'lightmapDirection')
  request.r(i607[4], i607[5], 0, i606, 'shadowMask')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i608 = root || new UnityEngine.LightProbes()
  var i609 = data
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i617 = data
  i616.name = i617[0]
  i616.bounciness = i617[1]
  i616.friction = i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i619 = data
  var i621 = i619[0]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i621.length; i += 1) {
    i620.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i621[i + 0]));
  }
  i618.ShaderCompilationErrors = i620
  i618.name = i619[1]
  i618.guid = i619[2]
  var i623 = i619[3]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i618.shaderDefinedKeywords = i622
  var i625 = i619[4]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i625[i + 0]) );
  }
  i618.passes = i624
  var i627 = i619[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i627[i + 0]) );
  }
  i618.usePasses = i626
  var i629 = i619[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i629[i + 0]) );
  }
  i618.defaultParameterValues = i628
  request.r(i619[7], i619[8], 0, i618, 'unityFallbackShader')
  i618.readDepth = !!i619[9]
  i618.hasDepthOnlyPass = !!i619[10]
  i618.isCreatedByShaderGraph = !!i619[11]
  i618.disableBatching = !!i619[12]
  i618.compiled = !!i619[13]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i633 = data
  i632.shaderName = i633[0]
  i632.errorMessage = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i638 = root || new pc.UnityShaderPass()
  var i639 = data
  i638.id = i639[0]
  i638.subShaderIndex = i639[1]
  i638.name = i639[2]
  i638.passType = i639[3]
  i638.grabPassTextureName = i639[4]
  i638.usePass = !!i639[5]
  i638.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[6], i638.zTest)
  i638.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[7], i638.zWrite)
  i638.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[8], i638.culling)
  i638.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[9], i638.blending)
  i638.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i639[10], i638.alphaBlending)
  i638.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[11], i638.colorWriteMask)
  i638.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[12], i638.offsetUnits)
  i638.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[13], i638.offsetFactor)
  i638.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[14], i638.stencilRef)
  i638.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[15], i638.stencilReadMask)
  i638.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i639[16], i638.stencilWriteMask)
  i638.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[17], i638.stencilOp)
  i638.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[18], i638.stencilOpFront)
  i638.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i639[19], i638.stencilOpBack)
  var i641 = i639[20]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i641[i + 0]) );
  }
  i638.tags = i640
  var i643 = i639[21]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i638.passDefinedKeywords = i642
  var i645 = i639[22]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i645[i + 0]) );
  }
  i638.passDefinedKeywordGroups = i644
  var i647 = i639[23]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i647[i + 0]) );
  }
  i638.variants = i646
  var i649 = i639[24]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i649[i + 0]) );
  }
  i638.excludedVariants = i648
  i638.hasDepthReader = !!i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i651 = data
  i650.val = i651[0]
  i650.name = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i653 = data
  i652.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[0], i652.src)
  i652.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[1], i652.dst)
  i652.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i653[2], i652.op)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i655 = data
  i654.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[0], i654.pass)
  i654.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[1], i654.fail)
  i654.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[2], i654.zFail)
  i654.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[3], i654.comp)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i659 = data
  i658.name = i659[0]
  i658.value = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i662.keywords = i664
  i662.hasDiscard = !!i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i669 = data
  i668.passId = i669[0]
  i668.subShaderIndex = i669[1]
  var i671 = i669[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.keywords = i670
  i668.vertexProgram = i669[3]
  i668.fragmentProgram = i669[4]
  i668.exportedForWebGl2 = !!i669[5]
  i668.readDepth = !!i669[6]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'shader')
  i674.pass = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i679 = data
  i678.name = i679[0]
  i678.type = i679[1]
  i678.value = new pc.Vec4( i679[2], i679[3], i679[4], i679[5] )
  i678.textureValue = i679[6]
  i678.shaderPropertyFlag = i679[7]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i681 = data
  i680.name = i681[0]
  request.r(i681[1], i681[2], 0, i680, 'texture')
  i680.aabb = i681[3]
  i680.vertices = i681[4]
  i680.triangles = i681[5]
  i680.textureRect = UnityEngine.Rect.MinMaxRect(i681[6], i681[7], i681[8], i681[9])
  i680.packedRect = UnityEngine.Rect.MinMaxRect(i681[10], i681[11], i681[12], i681[13])
  i680.border = new pc.Vec4( i681[14], i681[15], i681[16], i681[17] )
  i680.transparency = i681[18]
  i680.bounds = i681[19]
  i680.pixelsPerUnit = i681[20]
  i680.textureWidth = i681[21]
  i680.textureHeight = i681[22]
  i680.nativeSize = new pc.Vec2( i681[23], i681[24] )
  i680.pivot = new pc.Vec2( i681[25], i681[26] )
  i680.textureRectOffset = new pc.Vec2( i681[27], i681[28] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i683 = data
  i682.name = i683[0]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i685 = data
  i684.name = i685[0]
  i684.ascent = i685[1]
  i684.originalLineHeight = i685[2]
  i684.fontSize = i685[3]
  var i687 = i685[4]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i687[i + 0]) );
  }
  i684.characterInfo = i686
  request.r(i685[5], i685[6], 0, i684, 'texture')
  i684.originalFontSize = i685[7]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i691 = data
  i690.index = i691[0]
  i690.advance = i691[1]
  i690.bearing = i691[2]
  i690.glyphWidth = i691[3]
  i690.glyphHeight = i691[4]
  i690.minX = i691[5]
  i690.maxX = i691[6]
  i690.minY = i691[7]
  i690.maxY = i691[8]
  i690.uvBottomLeftX = i691[9]
  i690.uvBottomLeftY = i691[10]
  i690.uvBottomRightX = i691[11]
  i690.uvBottomRightY = i691[12]
  i690.uvTopLeftX = i691[13]
  i690.uvTopLeftY = i691[14]
  i690.uvTopRightX = i691[15]
  i690.uvTopRightY = i691[16]
  return i690
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i692 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i693 = data
  i692.useSafeMode = !!i693[0]
  i692.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i693[1], i692.safeModeOptions)
  i692.timeScale = i693[2]
  i692.unscaledTimeScale = i693[3]
  i692.useSmoothDeltaTime = !!i693[4]
  i692.maxSmoothUnscaledTime = i693[5]
  i692.rewindCallbackMode = i693[6]
  i692.showUnityEditorReport = !!i693[7]
  i692.logBehaviour = i693[8]
  i692.drawGizmos = !!i693[9]
  i692.defaultRecyclable = !!i693[10]
  i692.defaultAutoPlay = i693[11]
  i692.defaultUpdateType = i693[12]
  i692.defaultTimeScaleIndependent = !!i693[13]
  i692.defaultEaseType = i693[14]
  i692.defaultEaseOvershootOrAmplitude = i693[15]
  i692.defaultEasePeriod = i693[16]
  i692.defaultAutoKill = !!i693[17]
  i692.defaultLoopType = i693[18]
  i692.debugMode = !!i693[19]
  i692.debugStoreTargetId = !!i693[20]
  i692.showPreviewPanel = !!i693[21]
  i692.storeSettingsLocation = i693[22]
  i692.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i693[23], i692.modules)
  i692.createASMDEF = !!i693[24]
  i692.showPlayingTweens = !!i693[25]
  i692.showPausedTweens = !!i693[26]
  return i692
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i694 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i695 = data
  i694.logBehaviour = i695[0]
  i694.nestedTweenFailureBehaviour = i695[1]
  return i694
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i696 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i697 = data
  i696.showPanel = !!i697[0]
  i696.audioEnabled = !!i697[1]
  i696.physicsEnabled = !!i697[2]
  i696.physics2DEnabled = !!i697[3]
  i696.spriteEnabled = !!i697[4]
  i696.uiEnabled = !!i697[5]
  i696.textMeshProEnabled = !!i697[6]
  i696.tk2DEnabled = !!i697[7]
  i696.deAudioEnabled = !!i697[8]
  i696.deUnityExtendedEnabled = !!i697[9]
  i696.epoOutlineEnabled = !!i697[10]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i701[i + 0]) );
  }
  i698.files = i700
  i698.componentToPrefabIds = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i705 = data
  i704.path = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'unityObject')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i709[i + 0]) );
  }
  i706.scriptsExecutionOrder = i708
  var i711 = i707[1]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i711[i + 0]) );
  }
  i706.sortingLayers = i710
  var i713 = i707[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i713[i + 0]) );
  }
  i706.cullingLayers = i712
  i706.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i707[3], i706.timeSettings)
  i706.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i707[4], i706.physicsSettings)
  i706.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i707[5], i706.physics2DSettings)
  i706.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i707[6], i706.qualitySettings)
  i706.enableRealtimeShadows = !!i707[7]
  i706.enableAutoInstancing = !!i707[8]
  i706.enableStaticBatching = !!i707[9]
  i706.enableDynamicBatching = !!i707[10]
  i706.usePreservativeDynamicBatching = !!i707[11]
  i706.lightmapEncodingQuality = i707[12]
  i706.desiredColorSpace = i707[13]
  var i715 = i707[14]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( i715[i + 0] );
  }
  i706.allTags = i714
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i719 = data
  i718.name = i719[0]
  i718.value = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i723 = data
  i722.id = i723[0]
  i722.name = i723[1]
  i722.value = i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i727 = data
  i726.id = i727[0]
  i726.name = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i729 = data
  i728.fixedDeltaTime = i729[0]
  i728.maximumDeltaTime = i729[1]
  i728.timeScale = i729[2]
  i728.maximumParticleTimestep = i729[3]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i731 = data
  i730.gravity = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.defaultSolverIterations = i731[3]
  i730.bounceThreshold = i731[4]
  i730.autoSyncTransforms = !!i731[5]
  i730.autoSimulation = !!i731[6]
  var i733 = i731[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i733[i + 0]) );
  }
  i730.collisionMatrix = i732
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.layerId = i737[1]
  i736.otherLayerId = i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'material')
  i738.gravity = new pc.Vec2( i739[2], i739[3] )
  i738.positionIterations = i739[4]
  i738.velocityIterations = i739[5]
  i738.velocityThreshold = i739[6]
  i738.maxLinearCorrection = i739[7]
  i738.maxAngularCorrection = i739[8]
  i738.maxTranslationSpeed = i739[9]
  i738.maxRotationSpeed = i739[10]
  i738.baumgarteScale = i739[11]
  i738.baumgarteTOIScale = i739[12]
  i738.timeToSleep = i739[13]
  i738.linearSleepTolerance = i739[14]
  i738.angularSleepTolerance = i739[15]
  i738.defaultContactOffset = i739[16]
  i738.autoSimulation = !!i739[17]
  i738.queriesHitTriggers = !!i739[18]
  i738.queriesStartInColliders = !!i739[19]
  i738.callbacksOnDisable = !!i739[20]
  i738.reuseCollisionCallbacks = !!i739[21]
  i738.autoSyncTransforms = !!i739[22]
  var i741 = i739[23]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i741[i + 0]) );
  }
  i738.collisionMatrix = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.layerId = i745[1]
  i744.otherLayerId = i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i747 = data
  var i749 = i747[0]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i749[i + 0]) );
  }
  i746.qualityLevels = i748
  var i751 = i747[1]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.names = i750
  i746.shadows = i747[2]
  i746.anisotropicFiltering = i747[3]
  i746.antiAliasing = i747[4]
  i746.lodBias = i747[5]
  i746.shadowCascades = i747[6]
  i746.shadowDistance = i747[7]
  i746.shadowmaskMode = i747[8]
  i746.shadowProjection = i747[9]
  i746.shadowResolution = i747[10]
  i746.softParticles = !!i747[11]
  i746.softVegetation = !!i747[12]
  i746.activeColorSpace = i747[13]
  i746.desiredColorSpace = i747[14]
  i746.masterTextureLimit = i747[15]
  i746.maxQueuedFrames = i747[16]
  i746.particleRaycastBudget = i747[17]
  i746.pixelLightCount = i747[18]
  i746.realtimeReflectionProbes = !!i747[19]
  i746.shadowCascade2Split = i747[20]
  i746.shadowCascade4Split = new pc.Vec3( i747[21], i747[22], i747[23] )
  i746.streamingMipmapsActive = !!i747[24]
  i746.vSyncCount = i747[25]
  i746.asyncUploadBufferSize = i747[26]
  i746.asyncUploadTimeSlice = i747[27]
  i746.billboardsFaceCameraPosition = !!i747[28]
  i746.shadowNearPlaneOffset = i747[29]
  i746.streamingMipmapsMemoryBudget = i747[30]
  i746.maximumLODLevel = i747[31]
  i746.streamingMipmapsAddAllCameras = !!i747[32]
  i746.streamingMipmapsMaxLevelReduction = i747[33]
  i746.streamingMipmapsRenderersPerFrame = i747[34]
  i746.resolutionScalingFixedDPIFactor = i747[35]
  i746.streamingMipmapsMaxFileIORequests = i747[36]
  i746.currentQualityLevel = i747[37]
  return i746
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_ObjectArgument')
  i754.m_ObjectArgumentAssemblyTypeName = i755[2]
  i754.m_IntArgument = i755[3]
  i754.m_FloatArgument = i755[4]
  i754.m_StringArgument = i755[5]
  i754.m_BoolArgument = !!i755[6]
  return i754
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[6],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[19],"62":[19],"63":[19],"64":[19],"65":[19],"66":[19],"22":[19],"67":[19],"68":[19],"29":[19],"69":[19],"70":[19],"71":[19],"72":[6],"73":[74],"75":[76],"77":[76],"12":[11],"78":[27],"79":[6],"80":[81],"82":[11],"83":[15,11],"84":[74],"85":[15,11],"86":[11],"87":[11],"88":[74,11],"89":[11,15],"90":[91],"92":[91],"93":[91],"94":[11],"95":[11],"14":[12],"31":[15,11],"16":[11],"13":[12],"96":[11],"97":[11],"98":[11],"99":[11],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"17":[15,11],"105":[11],"106":[11],"107":[11],"108":[11],"33":[15,11],"109":[11],"110":[9],"111":[9],"10":[9],"112":[9],"113":[6],"114":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Animator","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.TargetJoint2D","BonkController","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","GameController","TargetController","UnityEngine.GameObject","LunaController","LayoutController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/23/2026 10:58:07";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRP_V03_HoaiTT_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1761";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4531";

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

Deserializers.buildID = "76368a12-9f04-4f06-b90e-e0b738fda913";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

