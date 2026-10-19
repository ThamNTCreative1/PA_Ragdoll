var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointSpring' )
  var i369 = data
  i368.spring = i369[0]
  i368.damper = i369[1]
  i368.targetPosition = i369[2]
  return i368
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointMotor' )
  var i371 = data
  i370.m_TargetVelocity = i371[0]
  i370.m_Force = i371[1]
  i370.m_FreeSpin = i371[2]
  return i370
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointLimits' )
  var i373 = data
  i372.m_Min = i373[0]
  i372.m_Max = i373[1]
  i372.m_Bounciness = i373[2]
  i372.m_BounceMinVelocity = i373[3]
  i372.m_ContactDistance = i373[4]
  i372.minBounce = i373[5]
  i372.maxBounce = i373[6]
  return i372
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointDrive' )
  var i375 = data
  i374.m_PositionSpring = i375[0]
  i374.m_PositionDamper = i375[1]
  i374.m_MaximumForce = i375[2]
  i374.m_UseAcceleration = i375[3]
  return i374
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i377 = data
  i376.m_Spring = i377[0]
  i376.m_Damper = i377[1]
  return i376
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i379 = data
  i378.m_Limit = i379[0]
  i378.m_Bounciness = i379[1]
  i378.m_ContactDistance = i379[2]
  return i378
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i381 = data
  i380.m_ExtremumSlip = i381[0]
  i380.m_ExtremumValue = i381[1]
  i380.m_AsymptoteSlip = i381[2]
  i380.m_AsymptoteValue = i381[3]
  i380.m_Stiffness = i381[4]
  return i380
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i383 = data
  i382.m_LowerAngle = i383[0]
  i382.m_UpperAngle = i383[1]
  return i382
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i385 = data
  i384.m_MotorSpeed = i385[0]
  i384.m_MaximumMotorTorque = i385[1]
  return i384
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i387 = data
  i386.m_DampingRatio = i387[0]
  i386.m_Frequency = i387[1]
  i386.m_Angle = i387[2]
  return i386
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i389 = data
  i388.m_LowerTranslation = i389[0]
  i388.m_UpperTranslation = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i390 = root || new pc.UnityMaterial()
  var i391 = data
  i390.name = i391[0]
  request.r(i391[1], i391[2], 0, i390, 'shader')
  i390.renderQueue = i391[3]
  i390.enableInstancing = !!i391[4]
  var i393 = i391[5]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i393[i + 0]) );
  }
  i390.floatParameters = i392
  var i395 = i391[6]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i395[i + 0]) );
  }
  i390.colorParameters = i394
  var i397 = i391[7]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i397[i + 0]) );
  }
  i390.vectorParameters = i396
  var i399 = i391[8]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i399[i + 0]) );
  }
  i390.textureParameters = i398
  var i401 = i391[9]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i401[i + 0]) );
  }
  i390.materialFlags = i400
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i405 = data
  i404.name = i405[0]
  i404.value = i405[1]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = new pc.Color(i409[1], i409[2], i409[3], i409[4])
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = new pc.Vec4( i413[1], i413[2], i413[3], i413[4] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i417 = data
  i416.name = i417[0]
  request.r(i417[1], i417[2], 0, i416, 'value')
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i421 = data
  i420.name = i421[0]
  i420.enabled = !!i421[1]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i423 = data
  i422.name = i423[0]
  i422.width = i423[1]
  i422.height = i423[2]
  i422.mipmapCount = i423[3]
  i422.anisoLevel = i423[4]
  i422.filterMode = i423[5]
  i422.hdr = !!i423[6]
  i422.format = i423[7]
  i422.wrapMode = i423[8]
  i422.alphaIsTransparency = !!i423[9]
  i422.alphaSource = i423[10]
  i422.graphicsFormat = i423[11]
  i422.sRGBTexture = !!i423[12]
  i422.desiredColorSpace = i423[13]
  i422.wrapU = i423[14]
  i422.wrapV = i423[15]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i425 = data
  i424.position = new pc.Vec3( i425[0], i425[1], i425[2] )
  i424.scale = new pc.Vec3( i425[3], i425[4], i425[5] )
  i424.rotation = new pc.Quat(i425[6], i425[7], i425[8], i425[9])
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i427 = data
  i426.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i427[0], i426.main)
  i426.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i427[1], i426.colorBySpeed)
  i426.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i427[2], i426.colorOverLifetime)
  i426.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i427[3], i426.emission)
  i426.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i427[4], i426.rotationBySpeed)
  i426.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i427[5], i426.rotationOverLifetime)
  i426.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i427[6], i426.shape)
  i426.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i427[7], i426.sizeBySpeed)
  i426.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i427[8], i426.sizeOverLifetime)
  i426.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i427[9], i426.textureSheetAnimation)
  i426.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i427[10], i426.velocityOverLifetime)
  i426.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i427[11], i426.noise)
  i426.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i427[12], i426.inheritVelocity)
  i426.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i427[13], i426.forceOverLifetime)
  i426.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i427[14], i426.limitVelocityOverLifetime)
  i426.useAutoRandomSeed = !!i427[15]
  i426.randomSeed = i427[16]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i428 = root || new pc.ParticleSystemMain()
  var i429 = data
  i428.duration = i429[0]
  i428.loop = !!i429[1]
  i428.prewarm = !!i429[2]
  i428.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[3], i428.startDelay)
  i428.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[4], i428.startLifetime)
  i428.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[5], i428.startSpeed)
  i428.startSize3D = !!i429[6]
  i428.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[7], i428.startSizeX)
  i428.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[8], i428.startSizeY)
  i428.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[9], i428.startSizeZ)
  i428.startRotation3D = !!i429[10]
  i428.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[11], i428.startRotationX)
  i428.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[12], i428.startRotationY)
  i428.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[13], i428.startRotationZ)
  i428.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i429[14], i428.startColor)
  i428.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i429[15], i428.gravityModifier)
  i428.simulationSpace = i429[16]
  request.r(i429[17], i429[18], 0, i428, 'customSimulationSpace')
  i428.simulationSpeed = i429[19]
  i428.useUnscaledTime = !!i429[20]
  i428.scalingMode = i429[21]
  i428.playOnAwake = !!i429[22]
  i428.maxParticles = i429[23]
  i428.emitterVelocityMode = i429[24]
  i428.stopAction = i429[25]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i430 = root || new pc.MinMaxCurve()
  var i431 = data
  i430.mode = i431[0]
  i430.curveMin = new pc.AnimationCurve( { keys_flow: i431[1] } )
  i430.curveMax = new pc.AnimationCurve( { keys_flow: i431[2] } )
  i430.curveMultiplier = i431[3]
  i430.constantMin = i431[4]
  i430.constantMax = i431[5]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i432 = root || new pc.MinMaxGradient()
  var i433 = data
  i432.mode = i433[0]
  i432.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i433[1], i432.gradientMin)
  i432.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i433[2], i432.gradientMax)
  i432.colorMin = new pc.Color(i433[3], i433[4], i433[5], i433[6])
  i432.colorMax = new pc.Color(i433[7], i433[8], i433[9], i433[10])
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i435 = data
  i434.mode = i435[0]
  var i437 = i435[1]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i437[i + 0]) );
  }
  i434.colorKeys = i436
  var i439 = i435[2]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i439[i + 0]) );
  }
  i434.alphaKeys = i438
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i440 = root || new pc.ParticleSystemColorBySpeed()
  var i441 = data
  i440.enabled = !!i441[0]
  i440.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i441[1], i440.color)
  i440.range = new pc.Vec2( i441[2], i441[3] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i445 = data
  i444.color = new pc.Color(i445[0], i445[1], i445[2], i445[3])
  i444.time = i445[4]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i449 = data
  i448.alpha = i449[0]
  i448.time = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i450 = root || new pc.ParticleSystemColorOverLifetime()
  var i451 = data
  i450.enabled = !!i451[0]
  i450.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i451[1], i450.color)
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i452 = root || new pc.ParticleSystemEmitter()
  var i453 = data
  i452.enabled = !!i453[0]
  i452.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i453[1], i452.rateOverTime)
  i452.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i453[2], i452.rateOverDistance)
  var i455 = i453[3]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i455[i + 0]) );
  }
  i452.bursts = i454
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i458 = root || new pc.ParticleSystemBurst()
  var i459 = data
  i458.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i459[0], i458.count)
  i458.cycleCount = i459[1]
  i458.minCount = i459[2]
  i458.maxCount = i459[3]
  i458.repeatInterval = i459[4]
  i458.time = i459[5]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i460 = root || new pc.ParticleSystemRotationBySpeed()
  var i461 = data
  i460.enabled = !!i461[0]
  i460.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[1], i460.x)
  i460.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[2], i460.y)
  i460.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[3], i460.z)
  i460.separateAxes = !!i461[4]
  i460.range = new pc.Vec2( i461[5], i461[6] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i462 = root || new pc.ParticleSystemRotationOverLifetime()
  var i463 = data
  i462.enabled = !!i463[0]
  i462.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[1], i462.x)
  i462.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[2], i462.y)
  i462.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[3], i462.z)
  i462.separateAxes = !!i463[4]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemShape()
  var i465 = data
  i464.enabled = !!i465[0]
  i464.shapeType = i465[1]
  i464.randomDirectionAmount = i465[2]
  i464.sphericalDirectionAmount = i465[3]
  i464.randomPositionAmount = i465[4]
  i464.alignToDirection = !!i465[5]
  i464.radius = i465[6]
  i464.radiusMode = i465[7]
  i464.radiusSpread = i465[8]
  i464.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[9], i464.radiusSpeed)
  i464.radiusThickness = i465[10]
  i464.angle = i465[11]
  i464.length = i465[12]
  i464.boxThickness = new pc.Vec3( i465[13], i465[14], i465[15] )
  i464.meshShapeType = i465[16]
  request.r(i465[17], i465[18], 0, i464, 'mesh')
  request.r(i465[19], i465[20], 0, i464, 'meshRenderer')
  request.r(i465[21], i465[22], 0, i464, 'skinnedMeshRenderer')
  i464.useMeshMaterialIndex = !!i465[23]
  i464.meshMaterialIndex = i465[24]
  i464.useMeshColors = !!i465[25]
  i464.normalOffset = i465[26]
  i464.arc = i465[27]
  i464.arcMode = i465[28]
  i464.arcSpread = i465[29]
  i464.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[30], i464.arcSpeed)
  i464.donutRadius = i465[31]
  i464.position = new pc.Vec3( i465[32], i465[33], i465[34] )
  i464.rotation = new pc.Vec3( i465[35], i465[36], i465[37] )
  i464.scale = new pc.Vec3( i465[38], i465[39], i465[40] )
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemSizeBySpeed()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[1], i466.x)
  i466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[2], i466.y)
  i466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.z)
  i466.separateAxes = !!i467[4]
  i466.range = new pc.Vec2( i467[5], i467[6] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemSizeOverLifetime()
  var i469 = data
  i468.enabled = !!i469[0]
  i468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[1], i468.x)
  i468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[2], i468.y)
  i468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[3], i468.z)
  i468.separateAxes = !!i469[4]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.mode = i471[1]
  i470.animation = i471[2]
  i470.numTilesX = i471[3]
  i470.numTilesY = i471[4]
  i470.useRandomRow = !!i471[5]
  i470.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[6], i470.frameOverTime)
  i470.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[7], i470.startFrame)
  i470.cycleCount = i471[8]
  i470.rowIndex = i471[9]
  i470.flipU = i471[10]
  i470.flipV = i471[11]
  i470.spriteCount = i471[12]
  var i473 = i471[13]
  var i472 = []
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 2, i472, '')
  }
  i470.sprites = i472
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[1], i476.x)
  i476.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[2], i476.y)
  i476.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[3], i476.z)
  i476.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[4], i476.radial)
  i476.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[5], i476.speedModifier)
  i476.space = i477[6]
  i476.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[7], i476.orbitalX)
  i476.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[8], i476.orbitalY)
  i476.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[9], i476.orbitalZ)
  i476.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[10], i476.orbitalOffsetX)
  i476.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[11], i476.orbitalOffsetY)
  i476.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[12], i476.orbitalOffsetZ)
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemNoise()
  var i479 = data
  i478.enabled = !!i479[0]
  i478.separateAxes = !!i479[1]
  i478.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[2], i478.strengthX)
  i478.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[3], i478.strengthY)
  i478.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[4], i478.strengthZ)
  i478.frequency = i479[5]
  i478.damping = !!i479[6]
  i478.octaveCount = i479[7]
  i478.octaveMultiplier = i479[8]
  i478.octaveScale = i479[9]
  i478.quality = i479[10]
  i478.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[11], i478.scrollSpeed)
  i478.scrollSpeedMultiplier = i479[12]
  i478.remapEnabled = !!i479[13]
  i478.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[14], i478.remapX)
  i478.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[15], i478.remapY)
  i478.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[16], i478.remapZ)
  i478.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[17], i478.positionAmount)
  i478.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[18], i478.rotationAmount)
  i478.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[19], i478.sizeAmount)
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemInheritVelocity()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.mode = i481[1]
  i480.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[2], i480.curve)
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemForceOverLifetime()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[1], i482.x)
  i482.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[2], i482.y)
  i482.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.z)
  i482.space = i483[4]
  i482.randomized = !!i483[5]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[1], i484.limit)
  i484.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[2], i484.limitX)
  i484.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[3], i484.limitY)
  i484.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[4], i484.limitZ)
  i484.dampen = i485[5]
  i484.separateAxes = !!i485[6]
  i484.space = i485[7]
  i484.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[8], i484.drag)
  i484.multiplyDragByParticleSize = !!i485[9]
  i484.multiplyDragByParticleVelocity = !!i485[10]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'mesh')
  i486.meshCount = i487[2]
  i486.activeVertexStreamsCount = i487[3]
  i486.alignment = i487[4]
  i486.renderMode = i487[5]
  i486.sortMode = i487[6]
  i486.lengthScale = i487[7]
  i486.velocityScale = i487[8]
  i486.cameraVelocityScale = i487[9]
  i486.normalDirection = i487[10]
  i486.sortingFudge = i487[11]
  i486.minParticleSize = i487[12]
  i486.maxParticleSize = i487[13]
  i486.pivot = new pc.Vec3( i487[14], i487[15], i487[16] )
  request.r(i487[17], i487[18], 0, i486, 'trailMaterial')
  i486.applyActiveColorSpace = !!i487[19]
  i486.enabled = !!i487[20]
  request.r(i487[21], i487[22], 0, i486, 'sharedMaterial')
  var i489 = i487[23]
  var i488 = []
  for(var i = 0; i < i489.length; i += 2) {
  request.r(i489[i + 0], i489[i + 1], 2, i488, '')
  }
  i486.sharedMaterials = i488
  i486.receiveShadows = !!i487[24]
  i486.shadowCastingMode = i487[25]
  i486.sortingLayerID = i487[26]
  i486.sortingOrder = i487[27]
  i486.lightmapIndex = i487[28]
  i486.lightmapSceneIndex = i487[29]
  i486.lightmapScaleOffset = new pc.Vec4( i487[30], i487[31], i487[32], i487[33] )
  i486.lightProbeUsage = i487[34]
  i486.reflectionProbeUsage = i487[35]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i493 = data
  i492.name = i493[0]
  i492.tagId = i493[1]
  i492.enabled = !!i493[2]
  i492.isStatic = !!i493[3]
  i492.layer = i493[4]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i495 = data
  i494.name = i495[0]
  i494.index = i495[1]
  i494.startup = !!i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i497 = data
  i496.aspect = i497[0]
  i496.orthographic = !!i497[1]
  i496.orthographicSize = i497[2]
  i496.backgroundColor = new pc.Color(i497[3], i497[4], i497[5], i497[6])
  i496.nearClipPlane = i497[7]
  i496.farClipPlane = i497[8]
  i496.fieldOfView = i497[9]
  i496.depth = i497[10]
  i496.clearFlags = i497[11]
  i496.cullingMask = i497[12]
  i496.rect = i497[13]
  request.r(i497[14], i497[15], 0, i496, 'targetTexture')
  i496.usePhysicalProperties = !!i497[16]
  i496.focalLength = i497[17]
  i496.sensorSize = new pc.Vec2( i497[18], i497[19] )
  i496.lensShift = new pc.Vec2( i497[20], i497[21] )
  i496.gateFit = i497[22]
  i496.commandBufferCount = i497[23]
  i496.cameraType = i497[24]
  i496.enabled = !!i497[25]
  return i496
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'm_FirstSelected')
  i498.m_sendNavigationEvents = !!i499[2]
  i498.m_DragThreshold = i499[3]
  return i498
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i501 = data
  i500.m_HorizontalAxis = i501[0]
  i500.m_VerticalAxis = i501[1]
  i500.m_SubmitButton = i501[2]
  i500.m_CancelButton = i501[3]
  i500.m_InputActionsPerSecond = i501[4]
  i500.m_RepeatDelay = i501[5]
  i500.m_ForceModuleActive = !!i501[6]
  i500.m_SendPointerHoverToParent = !!i501[7]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i503 = data
  i502.pivot = new pc.Vec2( i503[0], i503[1] )
  i502.anchorMin = new pc.Vec2( i503[2], i503[3] )
  i502.anchorMax = new pc.Vec2( i503[4], i503[5] )
  i502.sizeDelta = new pc.Vec2( i503[6], i503[7] )
  i502.anchoredPosition3D = new pc.Vec3( i503[8], i503[9], i503[10] )
  i502.rotation = new pc.Quat(i503[11], i503[12], i503[13], i503[14])
  i502.scale = new pc.Vec3( i503[15], i503[16], i503[17] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i505 = data
  i504.planeDistance = i505[0]
  i504.referencePixelsPerUnit = i505[1]
  i504.isFallbackOverlay = !!i505[2]
  i504.renderMode = i505[3]
  i504.renderOrder = i505[4]
  i504.sortingLayerName = i505[5]
  i504.sortingOrder = i505[6]
  i504.scaleFactor = i505[7]
  request.r(i505[8], i505[9], 0, i504, 'worldCamera')
  i504.overrideSorting = !!i505[10]
  i504.pixelPerfect = !!i505[11]
  i504.targetDisplay = i505[12]
  i504.overridePixelPerfect = !!i505[13]
  i504.enabled = !!i505[14]
  return i504
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i507 = data
  i506.m_UiScaleMode = i507[0]
  i506.m_ReferencePixelsPerUnit = i507[1]
  i506.m_ScaleFactor = i507[2]
  i506.m_ReferenceResolution = new pc.Vec2( i507[3], i507[4] )
  i506.m_ScreenMatchMode = i507[5]
  i506.m_MatchWidthOrHeight = i507[6]
  i506.m_PhysicalUnit = i507[7]
  i506.m_FallbackScreenDPI = i507[8]
  i506.m_DefaultSpriteDPI = i507[9]
  i506.m_DynamicPixelsPerUnit = i507[10]
  i506.m_PresetInfoIsWorld = !!i507[11]
  return i506
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i509 = data
  i508.m_IgnoreReversedGraphics = !!i509[0]
  i508.m_BlockingObjects = i509[1]
  i508.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i509[2] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i511 = data
  i510.cullTransparentMesh = !!i511[0]
  return i510
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i513 = data
  i512.m_AspectMode = i513[0]
  i512.m_AspectRatio = i513[1]
  return i512
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_Texture')
  i514.m_UVRect = UnityEngine.Rect.MinMaxRect(i515[2], i515[3], i515[4], i515[5])
  request.r(i515[6], i515[7], 0, i514, 'm_Material')
  i514.m_Maskable = !!i515[8]
  i514.m_Color = new pc.Color(i515[9], i515[10], i515[11], i515[12])
  i514.m_RaycastTarget = !!i515[13]
  i514.m_RaycastPadding = new pc.Vec4( i515[14], i515[15], i515[16], i515[17] )
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i517 = data
  i516.color = new pc.Color(i517[0], i517[1], i517[2], i517[3])
  request.r(i517[4], i517[5], 0, i516, 'sprite')
  i516.flipX = !!i517[6]
  i516.flipY = !!i517[7]
  i516.drawMode = i517[8]
  i516.size = new pc.Vec2( i517[9], i517[10] )
  i516.tileMode = i517[11]
  i516.adaptiveModeThreshold = i517[12]
  i516.maskInteraction = i517[13]
  i516.spriteSortPoint = i517[14]
  i516.enabled = !!i517[15]
  request.r(i517[16], i517[17], 0, i516, 'sharedMaterial')
  var i519 = i517[18]
  var i518 = []
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 2, i518, '')
  }
  i516.sharedMaterials = i518
  i516.receiveShadows = !!i517[19]
  i516.shadowCastingMode = i517[20]
  i516.sortingLayerID = i517[21]
  i516.sortingOrder = i517[22]
  i516.lightmapIndex = i517[23]
  i516.lightmapSceneIndex = i517[24]
  i516.lightmapScaleOffset = new pc.Vec4( i517[25], i517[26], i517[27], i517[28] )
  i516.lightProbeUsage = i517[29]
  i516.reflectionProbeUsage = i517[30]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i521 = data
  i520.usedByComposite = !!i521[0]
  i520.autoTiling = !!i521[1]
  i520.size = new pc.Vec2( i521[2], i521[3] )
  i520.edgeRadius = i521[4]
  i520.enabled = !!i521[5]
  i520.isTrigger = !!i521[6]
  i520.usedByEffector = !!i521[7]
  i520.density = i521[8]
  i520.offset = new pc.Vec2( i521[9], i521[10] )
  request.r(i521[11], i521[12], 0, i520, 'material')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i523 = data
  i522.sortingLayerIndex = i523[0]
  i522.sortingOrder = i523[1]
  i522.sortingLayerName = i523[2]
  i522.enabled = !!i523[3]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i525 = data
  i524.bodyType = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'material')
  i524.simulated = !!i525[3]
  i524.useAutoMass = !!i525[4]
  i524.mass = i525[5]
  i524.drag = i525[6]
  i524.angularDrag = i525[7]
  i524.gravityScale = i525[8]
  i524.collisionDetectionMode = i525[9]
  i524.sleepMode = i525[10]
  i524.constraints = i525[11]
  return i524
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i526 = root || request.c( 'MonsterController' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'joint')
  request.r(i527[2], i527[3], 0, i526, 'rb')
  request.r(i527[4], i527[5], 0, i526, 'deadSFX')
  i526.force = new pc.Vec2( i527[6], i527[7] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i529 = data
  i528.useLimits = !!i529[0]
  i528.limits = request.d('UnityEngine.JointAngleLimits2D', i529[1], i528.limits)
  i528.useMotor = !!i529[2]
  i528.motor = request.d('UnityEngine.JointMotor2D', i529[3], i528.motor)
  i528.anchor = new pc.Vec2( i529[4], i529[5] )
  i528.connectedAnchor = new pc.Vec2( i529[6], i529[7] )
  i528.autoConfigureConnectedAnchor = !!i529[8]
  request.r(i529[9], i529[10], 0, i528, 'connectedBody')
  i528.breakForce = i529[11]
  i528.breakTorque = i529[12]
  i528.enableCollision = !!i529[13]
  i528.enabled = !!i529[14]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i531 = data
  i530.autoConfigureTarget = !!i531[0]
  i530.target = new pc.Vec2( i531[1], i531[2] )
  i530.anchor = new pc.Vec2( i531[3], i531[4] )
  i530.maxForce = i531[5]
  i530.dampingRatio = i531[6]
  i530.frequency = i531[7]
  request.r(i531[8], i531[9], 0, i530, 'connectedBody')
  i530.breakForce = i531[10]
  i530.breakTorque = i531[11]
  i530.enableCollision = !!i531[12]
  i530.enabled = !!i531[13]
  return i530
}

Deserializers["BonkController"] = function (request, data, root) {
  var i532 = root || request.c( 'BonkController' )
  var i533 = data
  i532.target = i533[0]
  i532.maxBonk = i533[1]
  request.r(i533[2], i533[3], 0, i532, 'hitSound')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i535 = data
  i534.radius = i535[0]
  i534.enabled = !!i535[1]
  i534.isTrigger = !!i535[2]
  i534.usedByEffector = !!i535[3]
  i534.density = i535[4]
  i534.offset = new pc.Vec2( i535[5], i535[6] )
  request.r(i535[7], i535[8], 0, i534, 'material')
  return i534
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Button' )
  var i537 = data
  i536.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i537[0], i536.m_OnClick)
  i536.m_Navigation = request.d('UnityEngine.UI.Navigation', i537[1], i536.m_Navigation)
  i536.m_Transition = i537[2]
  i536.m_Colors = request.d('UnityEngine.UI.ColorBlock', i537[3], i536.m_Colors)
  i536.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i537[4], i536.m_SpriteState)
  i536.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i537[5], i536.m_AnimationTriggers)
  i536.m_Interactable = !!i537[6]
  request.r(i537[7], i537[8], 0, i536, 'm_TargetGraphic')
  return i536
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i539 = data
  i538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i539[0], i538.m_PersistentCalls)
  return i538
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i541 = data
  var i543 = i541[0]
  var i542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i543.length; i += 1) {
    i542.add(request.d('UnityEngine.Events.PersistentCall', i543[i + 0]));
  }
  i540.m_Calls = i542
  return i540
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_Target')
  i546.m_TargetAssemblyTypeName = i547[2]
  i546.m_MethodName = i547[3]
  i546.m_Mode = i547[4]
  i546.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i547[5], i546.m_Arguments)
  i546.m_CallState = i547[6]
  return i546
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i549 = data
  i548.m_Mode = i549[0]
  i548.m_WrapAround = !!i549[1]
  request.r(i549[2], i549[3], 0, i548, 'm_SelectOnUp')
  request.r(i549[4], i549[5], 0, i548, 'm_SelectOnDown')
  request.r(i549[6], i549[7], 0, i548, 'm_SelectOnLeft')
  request.r(i549[8], i549[9], 0, i548, 'm_SelectOnRight')
  return i548
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i551 = data
  i550.m_NormalColor = new pc.Color(i551[0], i551[1], i551[2], i551[3])
  i550.m_HighlightedColor = new pc.Color(i551[4], i551[5], i551[6], i551[7])
  i550.m_PressedColor = new pc.Color(i551[8], i551[9], i551[10], i551[11])
  i550.m_SelectedColor = new pc.Color(i551[12], i551[13], i551[14], i551[15])
  i550.m_DisabledColor = new pc.Color(i551[16], i551[17], i551[18], i551[19])
  i550.m_ColorMultiplier = i551[20]
  i550.m_FadeDuration = i551[21]
  return i550
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_HighlightedSprite')
  request.r(i553[2], i553[3], 0, i552, 'm_PressedSprite')
  request.r(i553[4], i553[5], 0, i552, 'm_SelectedSprite')
  request.r(i553[6], i553[7], 0, i552, 'm_DisabledSprite')
  return i552
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i555 = data
  i554.m_NormalTrigger = i555[0]
  i554.m_HighlightedTrigger = i555[1]
  i554.m_PressedTrigger = i555[2]
  i554.m_SelectedTrigger = i555[3]
  i554.m_DisabledTrigger = i555[4]
  return i554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.Image' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_Sprite')
  i556.m_Type = i557[2]
  i556.m_PreserveAspect = !!i557[3]
  i556.m_FillCenter = !!i557[4]
  i556.m_FillMethod = i557[5]
  i556.m_FillAmount = i557[6]
  i556.m_FillClockwise = !!i557[7]
  i556.m_FillOrigin = i557[8]
  i556.m_UseSpriteMesh = !!i557[9]
  i556.m_PixelsPerUnitMultiplier = i557[10]
  request.r(i557[11], i557[12], 0, i556, 'm_Material')
  i556.m_Maskable = !!i557[13]
  i556.m_Color = new pc.Color(i557[14], i557[15], i557[16], i557[17])
  i556.m_RaycastTarget = !!i557[18]
  i556.m_RaycastPadding = new pc.Vec4( i557[19], i557[20], i557[21], i557[22] )
  return i556
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i558 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i559 = data
  i558.targetIsSelf = !!i559[0]
  request.r(i559[1], i559[2], 0, i558, 'targetGO')
  i558.tweenTargetIsTargetGO = !!i559[3]
  i558.delay = i559[4]
  i558.duration = i559[5]
  i558.easeType = i559[6]
  i558.easeCurve = new pc.AnimationCurve( { keys_flow: i559[7] } )
  i558.loopType = i559[8]
  i558.loops = i559[9]
  i558.id = i559[10]
  i558.isRelative = !!i559[11]
  i558.isFrom = !!i559[12]
  i558.isIndependentUpdate = !!i559[13]
  i558.autoKill = !!i559[14]
  i558.autoGenerate = !!i559[15]
  i558.isActive = !!i559[16]
  i558.isValid = !!i559[17]
  request.r(i559[18], i559[19], 0, i558, 'target')
  i558.animationType = i559[20]
  i558.targetType = i559[21]
  i558.forcedTargetType = i559[22]
  i558.autoPlay = !!i559[23]
  i558.useTargetAsV3 = !!i559[24]
  i558.endValueFloat = i559[25]
  i558.endValueV3 = new pc.Vec3( i559[26], i559[27], i559[28] )
  i558.endValueV2 = new pc.Vec2( i559[29], i559[30] )
  i558.endValueColor = new pc.Color(i559[31], i559[32], i559[33], i559[34])
  i558.endValueString = i559[35]
  i558.endValueRect = UnityEngine.Rect.MinMaxRect(i559[36], i559[37], i559[38], i559[39])
  request.r(i559[40], i559[41], 0, i558, 'endValueTransform')
  i558.optionalBool0 = !!i559[42]
  i558.optionalBool1 = !!i559[43]
  i558.optionalFloat0 = i559[44]
  i558.optionalInt0 = i559[45]
  i558.optionalRotationMode = i559[46]
  i558.optionalScrambleMode = i559[47]
  i558.optionalShakeRandomnessMode = i559[48]
  i558.optionalString = i559[49]
  i558.updateType = i559[50]
  i558.isSpeedBased = !!i559[51]
  i558.hasOnStart = !!i559[52]
  i558.hasOnPlay = !!i559[53]
  i558.hasOnUpdate = !!i559[54]
  i558.hasOnStepComplete = !!i559[55]
  i558.hasOnComplete = !!i559[56]
  i558.hasOnTweenCreated = !!i559[57]
  i558.hasOnRewind = !!i559[58]
  i558.onStart = request.d('UnityEngine.Events.UnityEvent', i559[59], i558.onStart)
  i558.onPlay = request.d('UnityEngine.Events.UnityEvent', i559[60], i558.onPlay)
  i558.onUpdate = request.d('UnityEngine.Events.UnityEvent', i559[61], i558.onUpdate)
  i558.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i559[62], i558.onStepComplete)
  i558.onComplete = request.d('UnityEngine.Events.UnityEvent', i559[63], i558.onComplete)
  i558.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i559[64], i558.onTweenCreated)
  i558.onRewind = request.d('UnityEngine.Events.UnityEvent', i559[65], i558.onRewind)
  return i558
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i561 = data
  i560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i561[0], i560.m_PersistentCalls)
  return i560
}

Deserializers["GameController"] = function (request, data, root) {
  var i562 = root || request.c( 'GameController' )
  var i563 = data
  var i565 = i563[0]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 1, i564, '')
  }
  i562.monsters = i564
  var i567 = i563[1]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i567.length; i += 3) {
    i566.add(new pc.Vec3( i567[i + 0], i567[i + 1], i567[i + 2] ));
  }
  i562.cameraPos = i566
  i562.speedMove = i563[2]
  request.r(i563[3], i563[4], 0, i562, 'target')
  i562.index = i563[5]
  i562.end = !!i563[6]
  request.r(i563[7], i563[8], 0, i562, 'mainCamera')
  request.r(i563[9], i563[10], 0, i562, 'endUI')
  return i562
}

Deserializers["TargetController"] = function (request, data, root) {
  var i572 = root || request.c( 'TargetController' )
  var i573 = data
  var i575 = i573[0]
  var i574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 1, i574, '')
  }
  i572.listTarget = i574
  request.r(i573[1], i573[2], 0, i572, 'currentTarget')
  i572.index = i573[3]
  request.r(i573[4], i573[5], 0, i572, 'tut')
  return i572
}

Deserializers["LunaController"] = function (request, data, root) {
  var i578 = root || request.c( 'LunaController' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'BGTexture')
  i578.UseTime = !!i579[2]
  i578.TimePlay = i579[3]
  request.r(i579[4], i579[5], 0, i578, 'BGImage')
  var i581 = i579[6]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i578.CTA = i580
  request.r(i579[7], i579[8], 0, i578, 'endCard')
  return i578
}

Deserializers["AudioController"] = function (request, data, root) {
  var i584 = root || request.c( 'AudioController' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'BGM')
  request.r(i585[2], i585[3], 0, i584, 'musicSource')
  request.r(i585[4], i585[5], 0, i584, 'pool')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'clip')
  request.r(i587[2], i587[3], 0, i586, 'outputAudioMixerGroup')
  i586.playOnAwake = !!i587[4]
  i586.loop = !!i587[5]
  i586.time = i587[6]
  i586.volume = i587[7]
  i586.pitch = i587[8]
  i586.enabled = !!i587[9]
  return i586
}

Deserializers["VFXController"] = function (request, data, root) {
  var i588 = root || request.c( 'VFXController' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'bloodPrefab')
  request.r(i589[2], i589[3], 0, i588, 'pool')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i591 = data
  i590.ambientIntensity = i591[0]
  i590.reflectionIntensity = i591[1]
  i590.ambientMode = i591[2]
  i590.ambientLight = new pc.Color(i591[3], i591[4], i591[5], i591[6])
  i590.ambientSkyColor = new pc.Color(i591[7], i591[8], i591[9], i591[10])
  i590.ambientGroundColor = new pc.Color(i591[11], i591[12], i591[13], i591[14])
  i590.ambientEquatorColor = new pc.Color(i591[15], i591[16], i591[17], i591[18])
  i590.fogColor = new pc.Color(i591[19], i591[20], i591[21], i591[22])
  i590.fogEndDistance = i591[23]
  i590.fogStartDistance = i591[24]
  i590.fogDensity = i591[25]
  i590.fog = !!i591[26]
  request.r(i591[27], i591[28], 0, i590, 'skybox')
  i590.fogMode = i591[29]
  var i593 = i591[30]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i593[i + 0]) );
  }
  i590.lightmaps = i592
  i590.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i591[31], i590.lightProbes)
  i590.lightmapsMode = i591[32]
  i590.mixedBakeMode = i591[33]
  i590.environmentLightingMode = i591[34]
  i590.ambientProbe = new pc.SphericalHarmonicsL2(i591[35])
  request.r(i591[36], i591[37], 0, i590, 'customReflection')
  request.r(i591[38], i591[39], 0, i590, 'defaultReflection')
  i590.defaultReflectionMode = i591[40]
  i590.defaultReflectionResolution = i591[41]
  i590.sunLightObjectId = i591[42]
  i590.pixelLightCount = i591[43]
  i590.defaultReflectionHDR = !!i591[44]
  i590.hasLightDataAsset = !!i591[45]
  i590.hasManualGenerate = !!i591[46]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'lightmapColor')
  request.r(i597[2], i597[3], 0, i596, 'lightmapDirection')
  request.r(i597[4], i597[5], 0, i596, 'shadowMask')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i598 = root || new UnityEngine.LightProbes()
  var i599 = data
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i609[i + 0]));
  }
  i606.ShaderCompilationErrors = i608
  i606.name = i607[1]
  i606.guid = i607[2]
  var i611 = i607[3]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( i611[i + 0] );
  }
  i606.shaderDefinedKeywords = i610
  var i613 = i607[4]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i613[i + 0]) );
  }
  i606.passes = i612
  var i615 = i607[5]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i615[i + 0]) );
  }
  i606.usePasses = i614
  var i617 = i607[6]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i617[i + 0]) );
  }
  i606.defaultParameterValues = i616
  request.r(i607[7], i607[8], 0, i606, 'unityFallbackShader')
  i606.readDepth = !!i607[9]
  i606.hasDepthOnlyPass = !!i607[10]
  i606.isCreatedByShaderGraph = !!i607[11]
  i606.disableBatching = !!i607[12]
  i606.compiled = !!i607[13]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i621 = data
  i620.shaderName = i621[0]
  i620.errorMessage = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i626 = root || new pc.UnityShaderPass()
  var i627 = data
  i626.id = i627[0]
  i626.subShaderIndex = i627[1]
  i626.name = i627[2]
  i626.passType = i627[3]
  i626.grabPassTextureName = i627[4]
  i626.usePass = !!i627[5]
  i626.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[6], i626.zTest)
  i626.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[7], i626.zWrite)
  i626.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[8], i626.culling)
  i626.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i627[9], i626.blending)
  i626.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i627[10], i626.alphaBlending)
  i626.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[11], i626.colorWriteMask)
  i626.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[12], i626.offsetUnits)
  i626.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[13], i626.offsetFactor)
  i626.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[14], i626.stencilRef)
  i626.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[15], i626.stencilReadMask)
  i626.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i627[16], i626.stencilWriteMask)
  i626.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i627[17], i626.stencilOp)
  i626.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i627[18], i626.stencilOpFront)
  i626.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i627[19], i626.stencilOpBack)
  var i629 = i627[20]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i629[i + 0]) );
  }
  i626.tags = i628
  var i631 = i627[21]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( i631[i + 0] );
  }
  i626.passDefinedKeywords = i630
  var i633 = i627[22]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i633[i + 0]) );
  }
  i626.passDefinedKeywordGroups = i632
  var i635 = i627[23]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i635[i + 0]) );
  }
  i626.variants = i634
  var i637 = i627[24]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i637[i + 0]) );
  }
  i626.excludedVariants = i636
  i626.hasDepthReader = !!i627[25]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i639 = data
  i638.val = i639[0]
  i638.name = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i641 = data
  i640.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i641[0], i640.src)
  i640.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i641[1], i640.dst)
  i640.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i641[2], i640.op)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i643 = data
  i642.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[0], i642.pass)
  i642.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[1], i642.fail)
  i642.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[2], i642.zFail)
  i642.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[3], i642.comp)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i647 = data
  i646.name = i647[0]
  i646.value = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i651 = data
  var i653 = i651[0]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i650.keywords = i652
  i650.hasDiscard = !!i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i657 = data
  i656.passId = i657[0]
  i656.subShaderIndex = i657[1]
  var i659 = i657[2]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i656.keywords = i658
  i656.vertexProgram = i657[3]
  i656.fragmentProgram = i657[4]
  i656.exportedForWebGl2 = !!i657[5]
  i656.readDepth = !!i657[6]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'shader')
  i662.pass = i663[2]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i667 = data
  i666.name = i667[0]
  i666.type = i667[1]
  i666.value = new pc.Vec4( i667[2], i667[3], i667[4], i667[5] )
  i666.textureValue = i667[6]
  i666.shaderPropertyFlag = i667[7]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i669 = data
  i668.name = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'texture')
  i668.aabb = i669[3]
  i668.vertices = i669[4]
  i668.triangles = i669[5]
  i668.textureRect = UnityEngine.Rect.MinMaxRect(i669[6], i669[7], i669[8], i669[9])
  i668.packedRect = UnityEngine.Rect.MinMaxRect(i669[10], i669[11], i669[12], i669[13])
  i668.border = new pc.Vec4( i669[14], i669[15], i669[16], i669[17] )
  i668.transparency = i669[18]
  i668.bounds = i669[19]
  i668.pixelsPerUnit = i669[20]
  i668.textureWidth = i669[21]
  i668.textureHeight = i669[22]
  i668.nativeSize = new pc.Vec2( i669[23], i669[24] )
  i668.pivot = new pc.Vec2( i669[25], i669[26] )
  i668.textureRectOffset = new pc.Vec2( i669[27], i669[28] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i671 = data
  i670.name = i671[0]
  return i670
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i672 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i673 = data
  i672.useSafeMode = !!i673[0]
  i672.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i673[1], i672.safeModeOptions)
  i672.timeScale = i673[2]
  i672.unscaledTimeScale = i673[3]
  i672.useSmoothDeltaTime = !!i673[4]
  i672.maxSmoothUnscaledTime = i673[5]
  i672.rewindCallbackMode = i673[6]
  i672.showUnityEditorReport = !!i673[7]
  i672.logBehaviour = i673[8]
  i672.drawGizmos = !!i673[9]
  i672.defaultRecyclable = !!i673[10]
  i672.defaultAutoPlay = i673[11]
  i672.defaultUpdateType = i673[12]
  i672.defaultTimeScaleIndependent = !!i673[13]
  i672.defaultEaseType = i673[14]
  i672.defaultEaseOvershootOrAmplitude = i673[15]
  i672.defaultEasePeriod = i673[16]
  i672.defaultAutoKill = !!i673[17]
  i672.defaultLoopType = i673[18]
  i672.debugMode = !!i673[19]
  i672.debugStoreTargetId = !!i673[20]
  i672.showPreviewPanel = !!i673[21]
  i672.storeSettingsLocation = i673[22]
  i672.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i673[23], i672.modules)
  i672.createASMDEF = !!i673[24]
  i672.showPlayingTweens = !!i673[25]
  i672.showPausedTweens = !!i673[26]
  return i672
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i674 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i675 = data
  i674.logBehaviour = i675[0]
  i674.nestedTweenFailureBehaviour = i675[1]
  return i674
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i676 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i677 = data
  i676.showPanel = !!i677[0]
  i676.audioEnabled = !!i677[1]
  i676.physicsEnabled = !!i677[2]
  i676.physics2DEnabled = !!i677[3]
  i676.spriteEnabled = !!i677[4]
  i676.uiEnabled = !!i677[5]
  i676.textMeshProEnabled = !!i677[6]
  i676.tk2DEnabled = !!i677[7]
  i676.deAudioEnabled = !!i677[8]
  i676.deUnityExtendedEnabled = !!i677[9]
  i676.epoOutlineEnabled = !!i677[10]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i679 = data
  var i681 = i679[0]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i681[i + 0]) );
  }
  i678.files = i680
  i678.componentToPrefabIds = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i685 = data
  i684.path = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'unityObject')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i689[i + 0]) );
  }
  i686.scriptsExecutionOrder = i688
  var i691 = i687[1]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i691[i + 0]) );
  }
  i686.sortingLayers = i690
  var i693 = i687[2]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i693[i + 0]) );
  }
  i686.cullingLayers = i692
  i686.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i687[3], i686.timeSettings)
  i686.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i687[4], i686.physicsSettings)
  i686.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i687[5], i686.physics2DSettings)
  i686.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i687[6], i686.qualitySettings)
  i686.enableRealtimeShadows = !!i687[7]
  i686.enableAutoInstancing = !!i687[8]
  i686.enableStaticBatching = !!i687[9]
  i686.enableDynamicBatching = !!i687[10]
  i686.usePreservativeDynamicBatching = !!i687[11]
  i686.lightmapEncodingQuality = i687[12]
  i686.desiredColorSpace = i687[13]
  var i695 = i687[14]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i686.allTags = i694
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i699 = data
  i698.name = i699[0]
  i698.value = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i703 = data
  i702.id = i703[0]
  i702.name = i703[1]
  i702.value = i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i707 = data
  i706.id = i707[0]
  i706.name = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i709 = data
  i708.fixedDeltaTime = i709[0]
  i708.maximumDeltaTime = i709[1]
  i708.timeScale = i709[2]
  i708.maximumParticleTimestep = i709[3]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i711 = data
  i710.gravity = new pc.Vec3( i711[0], i711[1], i711[2] )
  i710.defaultSolverIterations = i711[3]
  i710.bounceThreshold = i711[4]
  i710.autoSyncTransforms = !!i711[5]
  i710.autoSimulation = !!i711[6]
  var i713 = i711[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i713[i + 0]) );
  }
  i710.collisionMatrix = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i717 = data
  i716.enabled = !!i717[0]
  i716.layerId = i717[1]
  i716.otherLayerId = i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'material')
  i718.gravity = new pc.Vec2( i719[2], i719[3] )
  i718.positionIterations = i719[4]
  i718.velocityIterations = i719[5]
  i718.velocityThreshold = i719[6]
  i718.maxLinearCorrection = i719[7]
  i718.maxAngularCorrection = i719[8]
  i718.maxTranslationSpeed = i719[9]
  i718.maxRotationSpeed = i719[10]
  i718.baumgarteScale = i719[11]
  i718.baumgarteTOIScale = i719[12]
  i718.timeToSleep = i719[13]
  i718.linearSleepTolerance = i719[14]
  i718.angularSleepTolerance = i719[15]
  i718.defaultContactOffset = i719[16]
  i718.autoSimulation = !!i719[17]
  i718.queriesHitTriggers = !!i719[18]
  i718.queriesStartInColliders = !!i719[19]
  i718.callbacksOnDisable = !!i719[20]
  i718.reuseCollisionCallbacks = !!i719[21]
  i718.autoSyncTransforms = !!i719[22]
  var i721 = i719[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i721[i + 0]) );
  }
  i718.collisionMatrix = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.layerId = i725[1]
  i724.otherLayerId = i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i727 = data
  var i729 = i727[0]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i729[i + 0]) );
  }
  i726.qualityLevels = i728
  var i731 = i727[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.names = i730
  i726.shadows = i727[2]
  i726.anisotropicFiltering = i727[3]
  i726.antiAliasing = i727[4]
  i726.lodBias = i727[5]
  i726.shadowCascades = i727[6]
  i726.shadowDistance = i727[7]
  i726.shadowmaskMode = i727[8]
  i726.shadowProjection = i727[9]
  i726.shadowResolution = i727[10]
  i726.softParticles = !!i727[11]
  i726.softVegetation = !!i727[12]
  i726.activeColorSpace = i727[13]
  i726.desiredColorSpace = i727[14]
  i726.masterTextureLimit = i727[15]
  i726.maxQueuedFrames = i727[16]
  i726.particleRaycastBudget = i727[17]
  i726.pixelLightCount = i727[18]
  i726.realtimeReflectionProbes = !!i727[19]
  i726.shadowCascade2Split = i727[20]
  i726.shadowCascade4Split = new pc.Vec3( i727[21], i727[22], i727[23] )
  i726.streamingMipmapsActive = !!i727[24]
  i726.vSyncCount = i727[25]
  i726.asyncUploadBufferSize = i727[26]
  i726.asyncUploadTimeSlice = i727[27]
  i726.billboardsFaceCameraPosition = !!i727[28]
  i726.shadowNearPlaneOffset = i727[29]
  i726.streamingMipmapsMemoryBudget = i727[30]
  i726.maximumLODLevel = i727[31]
  i726.streamingMipmapsAddAllCameras = !!i727[32]
  i726.streamingMipmapsMaxLevelReduction = i727[33]
  i726.streamingMipmapsRenderersPerFrame = i727[34]
  i726.resolutionScalingFixedDPIFactor = i727[35]
  i726.streamingMipmapsMaxFileIORequests = i727[36]
  i726.currentQualityLevel = i727[37]
  return i726
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_ObjectArgument')
  i734.m_ObjectArgumentAssemblyTypeName = i735[2]
  i734.m_IntArgument = i735[3]
  i734.m_FloatArgument = i735[4]
  i734.m_StringArgument = i735[5]
  i734.m_BoolArgument = !!i735[6]
  return i734
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[5],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"26":[21],"64":[21],"65":[21],"24":[21],"66":[21],"67":[21],"68":[21],"69":[5],"70":[71],"72":[73],"74":[73],"11":[10],"75":[17],"76":[5],"77":[78],"79":[10],"80":[14,10],"81":[71],"82":[14,10],"83":[10],"84":[10],"85":[71,10],"86":[10,14],"87":[88],"89":[88],"90":[88],"91":[10],"92":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"93":[10],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"16":[14,10],"102":[10],"103":[10],"104":[10],"105":[10],"106":[14,10],"107":[10],"108":[8],"109":[8],"9":[8],"110":[8],"111":[5],"112":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/19/2026 04:50:16";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_KSBP_V02_NgocBTU";

Deserializers.lunaAppID = "43487";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1800";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4163";

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

Deserializers.buildID = "3c50505d-3328-425a-bc0c-0f29e5380214";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

