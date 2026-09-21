var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.JointSpring' )
  var i3431 = data
  i3430.spring = i3431[0]
  i3430.damper = i3431[1]
  i3430.targetPosition = i3431[2]
  return i3430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3432 = root || request.c( 'UnityEngine.JointMotor' )
  var i3433 = data
  i3432.m_TargetVelocity = i3433[0]
  i3432.m_Force = i3433[1]
  i3432.m_FreeSpin = i3433[2]
  return i3432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3434 = root || request.c( 'UnityEngine.JointLimits' )
  var i3435 = data
  i3434.m_Min = i3435[0]
  i3434.m_Max = i3435[1]
  i3434.m_Bounciness = i3435[2]
  i3434.m_BounceMinVelocity = i3435[3]
  i3434.m_ContactDistance = i3435[4]
  i3434.minBounce = i3435[5]
  i3434.maxBounce = i3435[6]
  return i3434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3436 = root || request.c( 'UnityEngine.JointDrive' )
  var i3437 = data
  i3436.m_PositionSpring = i3437[0]
  i3436.m_PositionDamper = i3437[1]
  i3436.m_MaximumForce = i3437[2]
  i3436.m_UseAcceleration = i3437[3]
  return i3436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3439 = data
  i3438.m_Spring = i3439[0]
  i3438.m_Damper = i3439[1]
  return i3438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3441 = data
  i3440.m_Limit = i3441[0]
  i3440.m_Bounciness = i3441[1]
  i3440.m_ContactDistance = i3441[2]
  return i3440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3443 = data
  i3442.m_ExtremumSlip = i3443[0]
  i3442.m_ExtremumValue = i3443[1]
  i3442.m_AsymptoteSlip = i3443[2]
  i3442.m_AsymptoteValue = i3443[3]
  i3442.m_Stiffness = i3443[4]
  return i3442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3445 = data
  i3444.m_LowerAngle = i3445[0]
  i3444.m_UpperAngle = i3445[1]
  return i3444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3447 = data
  i3446.m_MotorSpeed = i3447[0]
  i3446.m_MaximumMotorTorque = i3447[1]
  return i3446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3449 = data
  i3448.m_DampingRatio = i3449[0]
  i3448.m_Frequency = i3449[1]
  i3448.m_Angle = i3449[2]
  return i3448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3451 = data
  i3450.m_LowerTranslation = i3451[0]
  i3450.m_UpperTranslation = i3451[1]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3452 = root || new pc.UnityMaterial()
  var i3453 = data
  i3452.name = i3453[0]
  request.r(i3453[1], i3453[2], 0, i3452, 'shader')
  i3452.renderQueue = i3453[3]
  i3452.enableInstancing = !!i3453[4]
  var i3455 = i3453[5]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3455[i + 0]) );
  }
  i3452.floatParameters = i3454
  var i3457 = i3453[6]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3457[i + 0]) );
  }
  i3452.colorParameters = i3456
  var i3459 = i3453[7]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3459[i + 0]) );
  }
  i3452.vectorParameters = i3458
  var i3461 = i3453[8]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3461[i + 0]) );
  }
  i3452.textureParameters = i3460
  var i3463 = i3453[9]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3463[i + 0]) );
  }
  i3452.materialFlags = i3462
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3467 = data
  i3466.name = i3467[0]
  i3466.value = i3467[1]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3471 = data
  i3470.name = i3471[0]
  i3470.value = new pc.Color(i3471[1], i3471[2], i3471[3], i3471[4])
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.value = new pc.Vec4( i3475[1], i3475[2], i3475[3], i3475[4] )
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3479 = data
  i3478.name = i3479[0]
  request.r(i3479[1], i3479[2], 0, i3478, 'value')
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.enabled = !!i3483[1]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3485 = data
  i3484.name = i3485[0]
  i3484.width = i3485[1]
  i3484.height = i3485[2]
  i3484.mipmapCount = i3485[3]
  i3484.anisoLevel = i3485[4]
  i3484.filterMode = i3485[5]
  i3484.hdr = !!i3485[6]
  i3484.format = i3485[7]
  i3484.wrapMode = i3485[8]
  i3484.alphaIsTransparency = !!i3485[9]
  i3484.alphaSource = i3485[10]
  i3484.graphicsFormat = i3485[11]
  i3484.sRGBTexture = !!i3485[12]
  i3484.desiredColorSpace = i3485[13]
  i3484.wrapU = i3485[14]
  i3484.wrapV = i3485[15]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3487 = data
  i3486.position = new pc.Vec3( i3487[0], i3487[1], i3487[2] )
  i3486.scale = new pc.Vec3( i3487[3], i3487[4], i3487[5] )
  i3486.rotation = new pc.Quat(i3487[6], i3487[7], i3487[8], i3487[9])
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3489 = data
  i3488.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3489[0], i3488.main)
  i3488.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3489[1], i3488.colorBySpeed)
  i3488.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3489[2], i3488.colorOverLifetime)
  i3488.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3489[3], i3488.emission)
  i3488.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3489[4], i3488.rotationBySpeed)
  i3488.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3489[5], i3488.rotationOverLifetime)
  i3488.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3489[6], i3488.shape)
  i3488.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3489[7], i3488.sizeBySpeed)
  i3488.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3489[8], i3488.sizeOverLifetime)
  i3488.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3489[9], i3488.textureSheetAnimation)
  i3488.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3489[10], i3488.velocityOverLifetime)
  i3488.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3489[11], i3488.noise)
  i3488.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3489[12], i3488.inheritVelocity)
  i3488.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3489[13], i3488.forceOverLifetime)
  i3488.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3489[14], i3488.limitVelocityOverLifetime)
  i3488.useAutoRandomSeed = !!i3489[15]
  i3488.randomSeed = i3489[16]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3490 = root || new pc.ParticleSystemMain()
  var i3491 = data
  i3490.duration = i3491[0]
  i3490.loop = !!i3491[1]
  i3490.prewarm = !!i3491[2]
  i3490.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[3], i3490.startDelay)
  i3490.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[4], i3490.startLifetime)
  i3490.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[5], i3490.startSpeed)
  i3490.startSize3D = !!i3491[6]
  i3490.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[7], i3490.startSizeX)
  i3490.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[8], i3490.startSizeY)
  i3490.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[9], i3490.startSizeZ)
  i3490.startRotation3D = !!i3491[10]
  i3490.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[11], i3490.startRotationX)
  i3490.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[12], i3490.startRotationY)
  i3490.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[13], i3490.startRotationZ)
  i3490.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3491[14], i3490.startColor)
  i3490.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3491[15], i3490.gravityModifier)
  i3490.simulationSpace = i3491[16]
  request.r(i3491[17], i3491[18], 0, i3490, 'customSimulationSpace')
  i3490.simulationSpeed = i3491[19]
  i3490.useUnscaledTime = !!i3491[20]
  i3490.scalingMode = i3491[21]
  i3490.playOnAwake = !!i3491[22]
  i3490.maxParticles = i3491[23]
  i3490.emitterVelocityMode = i3491[24]
  i3490.stopAction = i3491[25]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3492 = root || new pc.MinMaxCurve()
  var i3493 = data
  i3492.mode = i3493[0]
  i3492.curveMin = new pc.AnimationCurve( { keys_flow: i3493[1] } )
  i3492.curveMax = new pc.AnimationCurve( { keys_flow: i3493[2] } )
  i3492.curveMultiplier = i3493[3]
  i3492.constantMin = i3493[4]
  i3492.constantMax = i3493[5]
  return i3492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3494 = root || new pc.MinMaxGradient()
  var i3495 = data
  i3494.mode = i3495[0]
  i3494.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3495[1], i3494.gradientMin)
  i3494.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3495[2], i3494.gradientMax)
  i3494.colorMin = new pc.Color(i3495[3], i3495[4], i3495[5], i3495[6])
  i3494.colorMax = new pc.Color(i3495[7], i3495[8], i3495[9], i3495[10])
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3497 = data
  i3496.mode = i3497[0]
  var i3499 = i3497[1]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 1) {
    i3498.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3499[i + 0]) );
  }
  i3496.colorKeys = i3498
  var i3501 = i3497[2]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3501[i + 0]) );
  }
  i3496.alphaKeys = i3500
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3502 = root || new pc.ParticleSystemColorBySpeed()
  var i3503 = data
  i3502.enabled = !!i3503[0]
  i3502.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3503[1], i3502.color)
  i3502.range = new pc.Vec2( i3503[2], i3503[3] )
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3507 = data
  i3506.color = new pc.Color(i3507[0], i3507[1], i3507[2], i3507[3])
  i3506.time = i3507[4]
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3511 = data
  i3510.alpha = i3511[0]
  i3510.time = i3511[1]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3512 = root || new pc.ParticleSystemColorOverLifetime()
  var i3513 = data
  i3512.enabled = !!i3513[0]
  i3512.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3513[1], i3512.color)
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3514 = root || new pc.ParticleSystemEmitter()
  var i3515 = data
  i3514.enabled = !!i3515[0]
  i3514.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[1], i3514.rateOverTime)
  i3514.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[2], i3514.rateOverDistance)
  var i3517 = i3515[3]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3517[i + 0]) );
  }
  i3514.bursts = i3516
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3520 = root || new pc.ParticleSystemBurst()
  var i3521 = data
  i3520.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3521[0], i3520.count)
  i3520.cycleCount = i3521[1]
  i3520.minCount = i3521[2]
  i3520.maxCount = i3521[3]
  i3520.repeatInterval = i3521[4]
  i3520.time = i3521[5]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3522 = root || new pc.ParticleSystemRotationBySpeed()
  var i3523 = data
  i3522.enabled = !!i3523[0]
  i3522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[1], i3522.x)
  i3522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[2], i3522.y)
  i3522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3523[3], i3522.z)
  i3522.separateAxes = !!i3523[4]
  i3522.range = new pc.Vec2( i3523[5], i3523[6] )
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3524 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3525 = data
  i3524.enabled = !!i3525[0]
  i3524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[1], i3524.x)
  i3524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[2], i3524.y)
  i3524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3525[3], i3524.z)
  i3524.separateAxes = !!i3525[4]
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3526 = root || new pc.ParticleSystemShape()
  var i3527 = data
  i3526.enabled = !!i3527[0]
  i3526.shapeType = i3527[1]
  i3526.randomDirectionAmount = i3527[2]
  i3526.sphericalDirectionAmount = i3527[3]
  i3526.randomPositionAmount = i3527[4]
  i3526.alignToDirection = !!i3527[5]
  i3526.radius = i3527[6]
  i3526.radiusMode = i3527[7]
  i3526.radiusSpread = i3527[8]
  i3526.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3527[9], i3526.radiusSpeed)
  i3526.radiusThickness = i3527[10]
  i3526.angle = i3527[11]
  i3526.length = i3527[12]
  i3526.boxThickness = new pc.Vec3( i3527[13], i3527[14], i3527[15] )
  i3526.meshShapeType = i3527[16]
  request.r(i3527[17], i3527[18], 0, i3526, 'mesh')
  request.r(i3527[19], i3527[20], 0, i3526, 'meshRenderer')
  request.r(i3527[21], i3527[22], 0, i3526, 'skinnedMeshRenderer')
  i3526.useMeshMaterialIndex = !!i3527[23]
  i3526.meshMaterialIndex = i3527[24]
  i3526.useMeshColors = !!i3527[25]
  i3526.normalOffset = i3527[26]
  i3526.arc = i3527[27]
  i3526.arcMode = i3527[28]
  i3526.arcSpread = i3527[29]
  i3526.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3527[30], i3526.arcSpeed)
  i3526.donutRadius = i3527[31]
  i3526.position = new pc.Vec3( i3527[32], i3527[33], i3527[34] )
  i3526.rotation = new pc.Vec3( i3527[35], i3527[36], i3527[37] )
  i3526.scale = new pc.Vec3( i3527[38], i3527[39], i3527[40] )
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3528 = root || new pc.ParticleSystemSizeBySpeed()
  var i3529 = data
  i3528.enabled = !!i3529[0]
  i3528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[1], i3528.x)
  i3528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[2], i3528.y)
  i3528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3529[3], i3528.z)
  i3528.separateAxes = !!i3529[4]
  i3528.range = new pc.Vec2( i3529[5], i3529[6] )
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3530 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3531 = data
  i3530.enabled = !!i3531[0]
  i3530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[1], i3530.x)
  i3530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[2], i3530.y)
  i3530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3531[3], i3530.z)
  i3530.separateAxes = !!i3531[4]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3532 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3533 = data
  i3532.enabled = !!i3533[0]
  i3532.mode = i3533[1]
  i3532.animation = i3533[2]
  i3532.numTilesX = i3533[3]
  i3532.numTilesY = i3533[4]
  i3532.useRandomRow = !!i3533[5]
  i3532.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3533[6], i3532.frameOverTime)
  i3532.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3533[7], i3532.startFrame)
  i3532.cycleCount = i3533[8]
  i3532.rowIndex = i3533[9]
  i3532.flipU = i3533[10]
  i3532.flipV = i3533[11]
  i3532.spriteCount = i3533[12]
  var i3535 = i3533[13]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 2) {
  request.r(i3535[i + 0], i3535[i + 1], 2, i3534, '')
  }
  i3532.sprites = i3534
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3538 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3539 = data
  i3538.enabled = !!i3539[0]
  i3538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[1], i3538.x)
  i3538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[2], i3538.y)
  i3538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[3], i3538.z)
  i3538.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[4], i3538.radial)
  i3538.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[5], i3538.speedModifier)
  i3538.space = i3539[6]
  i3538.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[7], i3538.orbitalX)
  i3538.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[8], i3538.orbitalY)
  i3538.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[9], i3538.orbitalZ)
  i3538.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[10], i3538.orbitalOffsetX)
  i3538.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[11], i3538.orbitalOffsetY)
  i3538.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[12], i3538.orbitalOffsetZ)
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3540 = root || new pc.ParticleSystemNoise()
  var i3541 = data
  i3540.enabled = !!i3541[0]
  i3540.separateAxes = !!i3541[1]
  i3540.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[2], i3540.strengthX)
  i3540.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[3], i3540.strengthY)
  i3540.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[4], i3540.strengthZ)
  i3540.frequency = i3541[5]
  i3540.damping = !!i3541[6]
  i3540.octaveCount = i3541[7]
  i3540.octaveMultiplier = i3541[8]
  i3540.octaveScale = i3541[9]
  i3540.quality = i3541[10]
  i3540.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[11], i3540.scrollSpeed)
  i3540.scrollSpeedMultiplier = i3541[12]
  i3540.remapEnabled = !!i3541[13]
  i3540.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[14], i3540.remapX)
  i3540.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[15], i3540.remapY)
  i3540.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[16], i3540.remapZ)
  i3540.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[17], i3540.positionAmount)
  i3540.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[18], i3540.rotationAmount)
  i3540.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3541[19], i3540.sizeAmount)
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3542 = root || new pc.ParticleSystemInheritVelocity()
  var i3543 = data
  i3542.enabled = !!i3543[0]
  i3542.mode = i3543[1]
  i3542.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3543[2], i3542.curve)
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3544 = root || new pc.ParticleSystemForceOverLifetime()
  var i3545 = data
  i3544.enabled = !!i3545[0]
  i3544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[1], i3544.x)
  i3544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[2], i3544.y)
  i3544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[3], i3544.z)
  i3544.space = i3545[4]
  i3544.randomized = !!i3545[5]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3546 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3547 = data
  i3546.enabled = !!i3547[0]
  i3546.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[1], i3546.limit)
  i3546.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[2], i3546.limitX)
  i3546.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[3], i3546.limitY)
  i3546.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[4], i3546.limitZ)
  i3546.dampen = i3547[5]
  i3546.separateAxes = !!i3547[6]
  i3546.space = i3547[7]
  i3546.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[8], i3546.drag)
  i3546.multiplyDragByParticleSize = !!i3547[9]
  i3546.multiplyDragByParticleVelocity = !!i3547[10]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3549 = data
  request.r(i3549[0], i3549[1], 0, i3548, 'mesh')
  i3548.meshCount = i3549[2]
  i3548.activeVertexStreamsCount = i3549[3]
  i3548.alignment = i3549[4]
  i3548.renderMode = i3549[5]
  i3548.sortMode = i3549[6]
  i3548.lengthScale = i3549[7]
  i3548.velocityScale = i3549[8]
  i3548.cameraVelocityScale = i3549[9]
  i3548.normalDirection = i3549[10]
  i3548.sortingFudge = i3549[11]
  i3548.minParticleSize = i3549[12]
  i3548.maxParticleSize = i3549[13]
  i3548.pivot = new pc.Vec3( i3549[14], i3549[15], i3549[16] )
  request.r(i3549[17], i3549[18], 0, i3548, 'trailMaterial')
  i3548.applyActiveColorSpace = !!i3549[19]
  i3548.enabled = !!i3549[20]
  request.r(i3549[21], i3549[22], 0, i3548, 'sharedMaterial')
  var i3551 = i3549[23]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 2) {
  request.r(i3551[i + 0], i3551[i + 1], 2, i3550, '')
  }
  i3548.sharedMaterials = i3550
  i3548.receiveShadows = !!i3549[24]
  i3548.shadowCastingMode = i3549[25]
  i3548.sortingLayerID = i3549[26]
  i3548.sortingOrder = i3549[27]
  i3548.lightmapIndex = i3549[28]
  i3548.lightmapSceneIndex = i3549[29]
  i3548.lightmapScaleOffset = new pc.Vec4( i3549[30], i3549[31], i3549[32], i3549[33] )
  i3548.lightProbeUsage = i3549[34]
  i3548.reflectionProbeUsage = i3549[35]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3555 = data
  i3554.name = i3555[0]
  i3554.tagId = i3555[1]
  i3554.enabled = !!i3555[2]
  i3554.isStatic = !!i3555[3]
  i3554.layer = i3555[4]
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.index = i3557[1]
  i3556.startup = !!i3557[2]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3559 = data
  i3558.aspect = i3559[0]
  i3558.orthographic = !!i3559[1]
  i3558.orthographicSize = i3559[2]
  i3558.backgroundColor = new pc.Color(i3559[3], i3559[4], i3559[5], i3559[6])
  i3558.nearClipPlane = i3559[7]
  i3558.farClipPlane = i3559[8]
  i3558.fieldOfView = i3559[9]
  i3558.depth = i3559[10]
  i3558.clearFlags = i3559[11]
  i3558.cullingMask = i3559[12]
  i3558.rect = i3559[13]
  request.r(i3559[14], i3559[15], 0, i3558, 'targetTexture')
  i3558.usePhysicalProperties = !!i3559[16]
  i3558.focalLength = i3559[17]
  i3558.sensorSize = new pc.Vec2( i3559[18], i3559[19] )
  i3558.lensShift = new pc.Vec2( i3559[20], i3559[21] )
  i3558.gateFit = i3559[22]
  i3558.commandBufferCount = i3559[23]
  i3558.cameraType = i3559[24]
  i3558.enabled = !!i3559[25]
  return i3558
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3560 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3561 = data
  request.r(i3561[0], i3561[1], 0, i3560, 'm_FirstSelected')
  i3560.m_sendNavigationEvents = !!i3561[2]
  i3560.m_DragThreshold = i3561[3]
  return i3560
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3562 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3563 = data
  i3562.m_HorizontalAxis = i3563[0]
  i3562.m_VerticalAxis = i3563[1]
  i3562.m_SubmitButton = i3563[2]
  i3562.m_CancelButton = i3563[3]
  i3562.m_InputActionsPerSecond = i3563[4]
  i3562.m_RepeatDelay = i3563[5]
  i3562.m_ForceModuleActive = !!i3563[6]
  i3562.m_SendPointerHoverToParent = !!i3563[7]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3565 = data
  i3564.pivot = new pc.Vec2( i3565[0], i3565[1] )
  i3564.anchorMin = new pc.Vec2( i3565[2], i3565[3] )
  i3564.anchorMax = new pc.Vec2( i3565[4], i3565[5] )
  i3564.sizeDelta = new pc.Vec2( i3565[6], i3565[7] )
  i3564.anchoredPosition3D = new pc.Vec3( i3565[8], i3565[9], i3565[10] )
  i3564.rotation = new pc.Quat(i3565[11], i3565[12], i3565[13], i3565[14])
  i3564.scale = new pc.Vec3( i3565[15], i3565[16], i3565[17] )
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3567 = data
  i3566.planeDistance = i3567[0]
  i3566.referencePixelsPerUnit = i3567[1]
  i3566.isFallbackOverlay = !!i3567[2]
  i3566.renderMode = i3567[3]
  i3566.renderOrder = i3567[4]
  i3566.sortingLayerName = i3567[5]
  i3566.sortingOrder = i3567[6]
  i3566.scaleFactor = i3567[7]
  request.r(i3567[8], i3567[9], 0, i3566, 'worldCamera')
  i3566.overrideSorting = !!i3567[10]
  i3566.pixelPerfect = !!i3567[11]
  i3566.targetDisplay = i3567[12]
  i3566.overridePixelPerfect = !!i3567[13]
  i3566.enabled = !!i3567[14]
  return i3566
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3569 = data
  i3568.m_UiScaleMode = i3569[0]
  i3568.m_ReferencePixelsPerUnit = i3569[1]
  i3568.m_ScaleFactor = i3569[2]
  i3568.m_ReferenceResolution = new pc.Vec2( i3569[3], i3569[4] )
  i3568.m_ScreenMatchMode = i3569[5]
  i3568.m_MatchWidthOrHeight = i3569[6]
  i3568.m_PhysicalUnit = i3569[7]
  i3568.m_FallbackScreenDPI = i3569[8]
  i3568.m_DefaultSpriteDPI = i3569[9]
  i3568.m_DynamicPixelsPerUnit = i3569[10]
  i3568.m_PresetInfoIsWorld = !!i3569[11]
  return i3568
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3571 = data
  i3570.m_IgnoreReversedGraphics = !!i3571[0]
  i3570.m_BlockingObjects = i3571[1]
  i3570.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3571[2] )
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3573 = data
  i3572.cullTransparentMesh = !!i3573[0]
  return i3572
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3575 = data
  i3574.m_AspectMode = i3575[0]
  i3574.m_AspectRatio = i3575[1]
  return i3574
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i3576 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i3577 = data
  request.r(i3577[0], i3577[1], 0, i3576, 'm_Texture')
  i3576.m_UVRect = UnityEngine.Rect.MinMaxRect(i3577[2], i3577[3], i3577[4], i3577[5])
  request.r(i3577[6], i3577[7], 0, i3576, 'm_Material')
  i3576.m_Maskable = !!i3577[8]
  i3576.m_Color = new pc.Color(i3577[9], i3577[10], i3577[11], i3577[12])
  i3576.m_RaycastTarget = !!i3577[13]
  i3576.m_RaycastPadding = new pc.Vec4( i3577[14], i3577[15], i3577[16], i3577[17] )
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i3579 = data
  i3578.sortingLayerIndex = i3579[0]
  i3578.sortingOrder = i3579[1]
  i3578.sortingLayerName = i3579[2]
  i3578.enabled = !!i3579[3]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3581 = data
  i3580.bodyType = i3581[0]
  request.r(i3581[1], i3581[2], 0, i3580, 'material')
  i3580.simulated = !!i3581[3]
  i3580.useAutoMass = !!i3581[4]
  i3580.mass = i3581[5]
  i3580.drag = i3581[6]
  i3580.angularDrag = i3581[7]
  i3580.gravityScale = i3581[8]
  i3580.collisionDetectionMode = i3581[9]
  i3580.sleepMode = i3581[10]
  i3580.constraints = i3581[11]
  return i3580
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i3582 = root || request.c( 'MonsterController' )
  var i3583 = data
  var i3585 = i3583[0]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('BodySprite')))
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.add(request.d('BodySprite', i3585[i + 0]));
  }
  i3582.body = i3584
  request.r(i3583[1], i3583[2], 0, i3582, 'joint')
  request.r(i3583[3], i3583[4], 0, i3582, 'rb')
  request.r(i3583[5], i3583[6], 0, i3582, 'deadSFX')
  i3582.force = new pc.Vec2( i3583[7], i3583[8] )
  return i3582
}

Deserializers["BodySprite"] = function (request, data, root) {
  var i3588 = root || request.c( 'BodySprite' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'Renderer')
  request.r(i3589[2], i3589[3], 0, i3588, 'ZombieSprite')
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3591 = data
  i3590.color = new pc.Color(i3591[0], i3591[1], i3591[2], i3591[3])
  request.r(i3591[4], i3591[5], 0, i3590, 'sprite')
  i3590.flipX = !!i3591[6]
  i3590.flipY = !!i3591[7]
  i3590.drawMode = i3591[8]
  i3590.size = new pc.Vec2( i3591[9], i3591[10] )
  i3590.tileMode = i3591[11]
  i3590.adaptiveModeThreshold = i3591[12]
  i3590.maskInteraction = i3591[13]
  i3590.spriteSortPoint = i3591[14]
  i3590.enabled = !!i3591[15]
  request.r(i3591[16], i3591[17], 0, i3590, 'sharedMaterial')
  var i3593 = i3591[18]
  var i3592 = []
  for(var i = 0; i < i3593.length; i += 2) {
  request.r(i3593[i + 0], i3593[i + 1], 2, i3592, '')
  }
  i3590.sharedMaterials = i3592
  i3590.receiveShadows = !!i3591[19]
  i3590.shadowCastingMode = i3591[20]
  i3590.sortingLayerID = i3591[21]
  i3590.sortingOrder = i3591[22]
  i3590.lightmapIndex = i3591[23]
  i3590.lightmapSceneIndex = i3591[24]
  i3590.lightmapScaleOffset = new pc.Vec4( i3591[25], i3591[26], i3591[27], i3591[28] )
  i3590.lightProbeUsage = i3591[29]
  i3590.reflectionProbeUsage = i3591[30]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3595 = data
  i3594.usedByComposite = !!i3595[0]
  i3594.autoTiling = !!i3595[1]
  i3594.size = new pc.Vec2( i3595[2], i3595[3] )
  i3594.edgeRadius = i3595[4]
  i3594.enabled = !!i3595[5]
  i3594.isTrigger = !!i3595[6]
  i3594.usedByEffector = !!i3595[7]
  i3594.density = i3595[8]
  i3594.offset = new pc.Vec2( i3595[9], i3595[10] )
  request.r(i3595[11], i3595[12], 0, i3594, 'material')
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i3597 = data
  i3596.useLimits = !!i3597[0]
  i3596.limits = request.d('UnityEngine.JointAngleLimits2D', i3597[1], i3596.limits)
  i3596.useMotor = !!i3597[2]
  i3596.motor = request.d('UnityEngine.JointMotor2D', i3597[3], i3596.motor)
  i3596.anchor = new pc.Vec2( i3597[4], i3597[5] )
  i3596.connectedAnchor = new pc.Vec2( i3597[6], i3597[7] )
  i3596.autoConfigureConnectedAnchor = !!i3597[8]
  request.r(i3597[9], i3597[10], 0, i3596, 'connectedBody')
  i3596.breakForce = i3597[11]
  i3596.breakTorque = i3597[12]
  i3596.enableCollision = !!i3597[13]
  i3596.enabled = !!i3597[14]
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i3599 = data
  i3598.autoConfigureTarget = !!i3599[0]
  i3598.target = new pc.Vec2( i3599[1], i3599[2] )
  i3598.anchor = new pc.Vec2( i3599[3], i3599[4] )
  i3598.maxForce = i3599[5]
  i3598.dampingRatio = i3599[6]
  i3598.frequency = i3599[7]
  request.r(i3599[8], i3599[9], 0, i3598, 'connectedBody')
  i3598.breakForce = i3599[10]
  i3598.breakTorque = i3599[11]
  i3598.enableCollision = !!i3599[12]
  i3598.enabled = !!i3599[13]
  return i3598
}

Deserializers["BonkController"] = function (request, data, root) {
  var i3600 = root || request.c( 'BonkController' )
  var i3601 = data
  i3600.target = i3601[0]
  i3600.maxBonk = i3601[1]
  request.r(i3601[2], i3601[3], 0, i3600, 'hitSound')
  return i3600
}

Deserializers["ActiveOnActive"] = function (request, data, root) {
  var i3602 = root || request.c( 'ActiveOnActive' )
  var i3603 = data
  var i3605 = i3603[0]
  var i3604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3605.length; i += 2) {
  request.r(i3605[i + 0], i3605[i + 1], 1, i3604, '')
  }
  i3602.active = i3604
  return i3602
}

Deserializers["DropPiece"] = function (request, data, root) {
  var i3608 = root || request.c( 'DropPiece' )
  var i3609 = data
  request.r(i3609[0], i3609[1], 0, i3608, 'joint')
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3611 = data
  request.r(i3611[0], i3611[1], 0, i3610, 'animatorController')
  request.r(i3611[2], i3611[3], 0, i3610, 'avatar')
  i3610.updateMode = i3611[4]
  i3610.hasTransformHierarchy = !!i3611[5]
  i3610.applyRootMotion = !!i3611[6]
  var i3613 = i3611[7]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3610.humanBones = i3612
  i3610.enabled = !!i3611[8]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'clip')
  request.r(i3617[2], i3617[3], 0, i3616, 'outputAudioMixerGroup')
  i3616.playOnAwake = !!i3617[4]
  i3616.loop = !!i3617[5]
  i3616.time = i3617[6]
  i3616.volume = i3617[7]
  i3616.pitch = i3617[8]
  i3616.enabled = !!i3617[9]
  return i3616
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.UI.Button' )
  var i3619 = data
  i3618.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3619[0], i3618.m_OnClick)
  i3618.m_Navigation = request.d('UnityEngine.UI.Navigation', i3619[1], i3618.m_Navigation)
  i3618.m_Transition = i3619[2]
  i3618.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3619[3], i3618.m_Colors)
  i3618.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3619[4], i3618.m_SpriteState)
  i3618.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3619[5], i3618.m_AnimationTriggers)
  i3618.m_Interactable = !!i3619[6]
  request.r(i3619[7], i3619[8], 0, i3618, 'm_TargetGraphic')
  return i3618
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3621 = data
  i3620.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3621[0], i3620.m_PersistentCalls)
  return i3620
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3623 = data
  var i3625 = i3623[0]
  var i3624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3625.length; i += 1) {
    i3624.add(request.d('UnityEngine.Events.PersistentCall', i3625[i + 0]));
  }
  i3622.m_Calls = i3624
  return i3622
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3629 = data
  request.r(i3629[0], i3629[1], 0, i3628, 'm_Target')
  i3628.m_TargetAssemblyTypeName = i3629[2]
  i3628.m_MethodName = i3629[3]
  i3628.m_Mode = i3629[4]
  i3628.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3629[5], i3628.m_Arguments)
  i3628.m_CallState = i3629[6]
  return i3628
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3631 = data
  i3630.m_Mode = i3631[0]
  i3630.m_WrapAround = !!i3631[1]
  request.r(i3631[2], i3631[3], 0, i3630, 'm_SelectOnUp')
  request.r(i3631[4], i3631[5], 0, i3630, 'm_SelectOnDown')
  request.r(i3631[6], i3631[7], 0, i3630, 'm_SelectOnLeft')
  request.r(i3631[8], i3631[9], 0, i3630, 'm_SelectOnRight')
  return i3630
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3633 = data
  i3632.m_NormalColor = new pc.Color(i3633[0], i3633[1], i3633[2], i3633[3])
  i3632.m_HighlightedColor = new pc.Color(i3633[4], i3633[5], i3633[6], i3633[7])
  i3632.m_PressedColor = new pc.Color(i3633[8], i3633[9], i3633[10], i3633[11])
  i3632.m_SelectedColor = new pc.Color(i3633[12], i3633[13], i3633[14], i3633[15])
  i3632.m_DisabledColor = new pc.Color(i3633[16], i3633[17], i3633[18], i3633[19])
  i3632.m_ColorMultiplier = i3633[20]
  i3632.m_FadeDuration = i3633[21]
  return i3632
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3635 = data
  request.r(i3635[0], i3635[1], 0, i3634, 'm_HighlightedSprite')
  request.r(i3635[2], i3635[3], 0, i3634, 'm_PressedSprite')
  request.r(i3635[4], i3635[5], 0, i3634, 'm_SelectedSprite')
  request.r(i3635[6], i3635[7], 0, i3634, 'm_DisabledSprite')
  return i3634
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3636 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3637 = data
  i3636.m_NormalTrigger = i3637[0]
  i3636.m_HighlightedTrigger = i3637[1]
  i3636.m_PressedTrigger = i3637[2]
  i3636.m_SelectedTrigger = i3637[3]
  i3636.m_DisabledTrigger = i3637[4]
  return i3636
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.UI.Image' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'm_Sprite')
  i3638.m_Type = i3639[2]
  i3638.m_PreserveAspect = !!i3639[3]
  i3638.m_FillCenter = !!i3639[4]
  i3638.m_FillMethod = i3639[5]
  i3638.m_FillAmount = i3639[6]
  i3638.m_FillClockwise = !!i3639[7]
  i3638.m_FillOrigin = i3639[8]
  i3638.m_UseSpriteMesh = !!i3639[9]
  i3638.m_PixelsPerUnitMultiplier = i3639[10]
  request.r(i3639[11], i3639[12], 0, i3638, 'm_Material')
  i3638.m_Maskable = !!i3639[13]
  i3638.m_Color = new pc.Color(i3639[14], i3639[15], i3639[16], i3639[17])
  i3638.m_RaycastTarget = !!i3639[18]
  i3638.m_RaycastPadding = new pc.Vec4( i3639[19], i3639[20], i3639[21], i3639[22] )
  return i3638
}

Deserializers["ActiveOnClick"] = function (request, data, root) {
  var i3640 = root || request.c( 'ActiveOnClick' )
  var i3641 = data
  request.r(i3641[0], i3641[1], 0, i3640, 'button')
  request.r(i3641[2], i3641[3], 0, i3640, 'clickSound')
  var i3643 = i3641[4]
  var i3642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3643.length; i += 2) {
  request.r(i3643[i + 0], i3643[i + 1], 1, i3642, '')
  }
  i3640.active = i3642
  return i3640
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3644 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3645 = data
  i3644.targetIsSelf = !!i3645[0]
  request.r(i3645[1], i3645[2], 0, i3644, 'targetGO')
  i3644.tweenTargetIsTargetGO = !!i3645[3]
  i3644.delay = i3645[4]
  i3644.duration = i3645[5]
  i3644.easeType = i3645[6]
  i3644.easeCurve = new pc.AnimationCurve( { keys_flow: i3645[7] } )
  i3644.loopType = i3645[8]
  i3644.loops = i3645[9]
  i3644.id = i3645[10]
  i3644.isRelative = !!i3645[11]
  i3644.isFrom = !!i3645[12]
  i3644.isIndependentUpdate = !!i3645[13]
  i3644.autoKill = !!i3645[14]
  i3644.autoGenerate = !!i3645[15]
  i3644.isActive = !!i3645[16]
  i3644.isValid = !!i3645[17]
  request.r(i3645[18], i3645[19], 0, i3644, 'target')
  i3644.animationType = i3645[20]
  i3644.targetType = i3645[21]
  i3644.forcedTargetType = i3645[22]
  i3644.autoPlay = !!i3645[23]
  i3644.useTargetAsV3 = !!i3645[24]
  i3644.endValueFloat = i3645[25]
  i3644.endValueV3 = new pc.Vec3( i3645[26], i3645[27], i3645[28] )
  i3644.endValueV2 = new pc.Vec2( i3645[29], i3645[30] )
  i3644.endValueColor = new pc.Color(i3645[31], i3645[32], i3645[33], i3645[34])
  i3644.endValueString = i3645[35]
  i3644.endValueRect = UnityEngine.Rect.MinMaxRect(i3645[36], i3645[37], i3645[38], i3645[39])
  request.r(i3645[40], i3645[41], 0, i3644, 'endValueTransform')
  i3644.optionalBool0 = !!i3645[42]
  i3644.optionalBool1 = !!i3645[43]
  i3644.optionalFloat0 = i3645[44]
  i3644.optionalInt0 = i3645[45]
  i3644.optionalRotationMode = i3645[46]
  i3644.optionalScrambleMode = i3645[47]
  i3644.optionalShakeRandomnessMode = i3645[48]
  i3644.optionalString = i3645[49]
  i3644.updateType = i3645[50]
  i3644.isSpeedBased = !!i3645[51]
  i3644.hasOnStart = !!i3645[52]
  i3644.hasOnPlay = !!i3645[53]
  i3644.hasOnUpdate = !!i3645[54]
  i3644.hasOnStepComplete = !!i3645[55]
  i3644.hasOnComplete = !!i3645[56]
  i3644.hasOnTweenCreated = !!i3645[57]
  i3644.hasOnRewind = !!i3645[58]
  i3644.onStart = request.d('UnityEngine.Events.UnityEvent', i3645[59], i3644.onStart)
  i3644.onPlay = request.d('UnityEngine.Events.UnityEvent', i3645[60], i3644.onPlay)
  i3644.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3645[61], i3644.onUpdate)
  i3644.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3645[62], i3644.onStepComplete)
  i3644.onComplete = request.d('UnityEngine.Events.UnityEvent', i3645[63], i3644.onComplete)
  i3644.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3645[64], i3644.onTweenCreated)
  i3644.onRewind = request.d('UnityEngine.Events.UnityEvent', i3645[65], i3644.onRewind)
  return i3644
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3646 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3647 = data
  i3646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3647[0], i3646.m_PersistentCalls)
  return i3646
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3648 = root || request.c( 'UnityEngine.UI.Text' )
  var i3649 = data
  i3648.m_FontData = request.d('UnityEngine.UI.FontData', i3649[0], i3648.m_FontData)
  i3648.m_Text = i3649[1]
  request.r(i3649[2], i3649[3], 0, i3648, 'm_Material')
  i3648.m_Maskable = !!i3649[4]
  i3648.m_Color = new pc.Color(i3649[5], i3649[6], i3649[7], i3649[8])
  i3648.m_RaycastTarget = !!i3649[9]
  i3648.m_RaycastPadding = new pc.Vec4( i3649[10], i3649[11], i3649[12], i3649[13] )
  return i3648
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3650 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3651 = data
  request.r(i3651[0], i3651[1], 0, i3650, 'm_Font')
  i3650.m_FontSize = i3651[2]
  i3650.m_FontStyle = i3651[3]
  i3650.m_BestFit = !!i3651[4]
  i3650.m_MinSize = i3651[5]
  i3650.m_MaxSize = i3651[6]
  i3650.m_Alignment = i3651[7]
  i3650.m_AlignByGeometry = !!i3651[8]
  i3650.m_RichText = !!i3651[9]
  i3650.m_HorizontalOverflow = i3651[10]
  i3650.m_VerticalOverflow = i3651[11]
  i3650.m_LineSpacing = i3651[12]
  return i3650
}

Deserializers["GameController"] = function (request, data, root) {
  var i3652 = root || request.c( 'GameController' )
  var i3653 = data
  i3652.OnNextLevel = request.d('System.Action', i3653[0], i3652.OnNextLevel)
  var i3655 = i3653[1]
  var i3654 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i3655.length; i += 2) {
  request.r(i3655[i + 0], i3655[i + 1], 1, i3654, '')
  }
  i3652.monsters = i3654
  var i3657 = i3653[2]
  var i3656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3657.length; i += 2) {
  request.r(i3657[i + 0], i3657[i + 1], 1, i3656, '')
  }
  i3652.levels = i3656
  request.r(i3653[3], i3653[4], 0, i3652, 'target')
  i3652.index = i3653[5]
  i3652.end = !!i3653[6]
  request.r(i3653[7], i3653[8], 0, i3652, 'endUI')
  return i3652
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3658 = root || request.c( 'System.Action' )
  var i3659 = data
  return i3658
}

Deserializers["TargetController"] = function (request, data, root) {
  var i3662 = root || request.c( 'TargetController' )
  var i3663 = data
  var i3665 = i3663[0]
  var i3664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i3665.length; i += 2) {
  request.r(i3665[i + 0], i3665[i + 1], 1, i3664, '')
  }
  i3662.listTarget = i3664
  request.r(i3663[1], i3663[2], 0, i3662, 'currentTarget')
  i3662.index = i3663[3]
  request.r(i3663[4], i3663[5], 0, i3662, 'tut')
  request.r(i3663[6], i3663[7], 0, i3662, 'tut2')
  request.r(i3663[8], i3663[9], 0, i3662, 'tut3')
  return i3662
}

Deserializers["LunaController"] = function (request, data, root) {
  var i3668 = root || request.c( 'LunaController' )
  var i3669 = data
  request.r(i3669[0], i3669[1], 0, i3668, 'BGTexture')
  i3668.UseTime = !!i3669[2]
  i3668.TimePlay = i3669[3]
  i3668.NumberLevel = i3669[4]
  request.r(i3669[5], i3669[6], 0, i3668, 'BGImage')
  var i3671 = i3669[7]
  var i3670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3671.length; i += 2) {
  request.r(i3671[i + 0], i3671[i + 1], 1, i3670, '')
  }
  i3668.CTA = i3670
  request.r(i3669[8], i3669[9], 0, i3668, 'endCard')
  return i3668
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i3674 = root || request.c( 'LayoutController' )
  var i3675 = data
  request.r(i3675[0], i3675[1], 0, i3674, 'mainCamera')
  request.r(i3675[2], i3675[3], 0, i3674, 'optionButton')
  return i3674
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3676 = root || request.c( 'AudioController' )
  var i3677 = data
  request.r(i3677[0], i3677[1], 0, i3676, 'BGM')
  request.r(i3677[2], i3677[3], 0, i3676, 'musicSource')
  request.r(i3677[4], i3677[5], 0, i3676, 'pool')
  return i3676
}

Deserializers["VFXController"] = function (request, data, root) {
  var i3678 = root || request.c( 'VFXController' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'bloodPrefab')
  request.r(i3679[2], i3679[3], 0, i3678, 'pool')
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3681 = data
  i3680.ambientIntensity = i3681[0]
  i3680.reflectionIntensity = i3681[1]
  i3680.ambientMode = i3681[2]
  i3680.ambientLight = new pc.Color(i3681[3], i3681[4], i3681[5], i3681[6])
  i3680.ambientSkyColor = new pc.Color(i3681[7], i3681[8], i3681[9], i3681[10])
  i3680.ambientGroundColor = new pc.Color(i3681[11], i3681[12], i3681[13], i3681[14])
  i3680.ambientEquatorColor = new pc.Color(i3681[15], i3681[16], i3681[17], i3681[18])
  i3680.fogColor = new pc.Color(i3681[19], i3681[20], i3681[21], i3681[22])
  i3680.fogEndDistance = i3681[23]
  i3680.fogStartDistance = i3681[24]
  i3680.fogDensity = i3681[25]
  i3680.fog = !!i3681[26]
  request.r(i3681[27], i3681[28], 0, i3680, 'skybox')
  i3680.fogMode = i3681[29]
  var i3683 = i3681[30]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3683[i + 0]) );
  }
  i3680.lightmaps = i3682
  i3680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3681[31], i3680.lightProbes)
  i3680.lightmapsMode = i3681[32]
  i3680.mixedBakeMode = i3681[33]
  i3680.environmentLightingMode = i3681[34]
  i3680.ambientProbe = new pc.SphericalHarmonicsL2(i3681[35])
  request.r(i3681[36], i3681[37], 0, i3680, 'customReflection')
  request.r(i3681[38], i3681[39], 0, i3680, 'defaultReflection')
  i3680.defaultReflectionMode = i3681[40]
  i3680.defaultReflectionResolution = i3681[41]
  i3680.sunLightObjectId = i3681[42]
  i3680.pixelLightCount = i3681[43]
  i3680.defaultReflectionHDR = !!i3681[44]
  i3680.hasLightDataAsset = !!i3681[45]
  i3680.hasManualGenerate = !!i3681[46]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3687 = data
  request.r(i3687[0], i3687[1], 0, i3686, 'lightmapColor')
  request.r(i3687[2], i3687[3], 0, i3686, 'lightmapDirection')
  request.r(i3687[4], i3687[5], 0, i3686, 'shadowMask')
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3688 = root || new UnityEngine.LightProbes()
  var i3689 = data
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3697 = data
  var i3699 = i3697[0]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3699[i + 0]));
  }
  i3696.ShaderCompilationErrors = i3698
  i3696.name = i3697[1]
  i3696.guid = i3697[2]
  var i3701 = i3697[3]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( i3701[i + 0] );
  }
  i3696.shaderDefinedKeywords = i3700
  var i3703 = i3697[4]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3703[i + 0]) );
  }
  i3696.passes = i3702
  var i3705 = i3697[5]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3705[i + 0]) );
  }
  i3696.usePasses = i3704
  var i3707 = i3697[6]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3707[i + 0]) );
  }
  i3696.defaultParameterValues = i3706
  request.r(i3697[7], i3697[8], 0, i3696, 'unityFallbackShader')
  i3696.readDepth = !!i3697[9]
  i3696.hasDepthOnlyPass = !!i3697[10]
  i3696.isCreatedByShaderGraph = !!i3697[11]
  i3696.disableBatching = !!i3697[12]
  i3696.compiled = !!i3697[13]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3711 = data
  i3710.shaderName = i3711[0]
  i3710.errorMessage = i3711[1]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3716 = root || new pc.UnityShaderPass()
  var i3717 = data
  i3716.id = i3717[0]
  i3716.subShaderIndex = i3717[1]
  i3716.name = i3717[2]
  i3716.passType = i3717[3]
  i3716.grabPassTextureName = i3717[4]
  i3716.usePass = !!i3717[5]
  i3716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[6], i3716.zTest)
  i3716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[7], i3716.zWrite)
  i3716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[8], i3716.culling)
  i3716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3717[9], i3716.blending)
  i3716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3717[10], i3716.alphaBlending)
  i3716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[11], i3716.colorWriteMask)
  i3716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[12], i3716.offsetUnits)
  i3716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[13], i3716.offsetFactor)
  i3716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[14], i3716.stencilRef)
  i3716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[15], i3716.stencilReadMask)
  i3716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3717[16], i3716.stencilWriteMask)
  i3716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3717[17], i3716.stencilOp)
  i3716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3717[18], i3716.stencilOpFront)
  i3716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3717[19], i3716.stencilOpBack)
  var i3719 = i3717[20]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3719[i + 0]) );
  }
  i3716.tags = i3718
  var i3721 = i3717[21]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( i3721[i + 0] );
  }
  i3716.passDefinedKeywords = i3720
  var i3723 = i3717[22]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3723[i + 0]) );
  }
  i3716.passDefinedKeywordGroups = i3722
  var i3725 = i3717[23]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3725[i + 0]) );
  }
  i3716.variants = i3724
  var i3727 = i3717[24]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3727[i + 0]) );
  }
  i3716.excludedVariants = i3726
  i3716.hasDepthReader = !!i3717[25]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3729 = data
  i3728.val = i3729[0]
  i3728.name = i3729[1]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3731 = data
  i3730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[0], i3730.src)
  i3730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[1], i3730.dst)
  i3730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3731[2], i3730.op)
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3733 = data
  i3732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3733[0], i3732.pass)
  i3732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3733[1], i3732.fail)
  i3732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3733[2], i3732.zFail)
  i3732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3733[3], i3732.comp)
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3737 = data
  i3736.name = i3737[0]
  i3736.value = i3737[1]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3741 = data
  var i3743 = i3741[0]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( i3743[i + 0] );
  }
  i3740.keywords = i3742
  i3740.hasDiscard = !!i3741[1]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3747 = data
  i3746.passId = i3747[0]
  i3746.subShaderIndex = i3747[1]
  var i3749 = i3747[2]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( i3749[i + 0] );
  }
  i3746.keywords = i3748
  i3746.vertexProgram = i3747[3]
  i3746.fragmentProgram = i3747[4]
  i3746.exportedForWebGl2 = !!i3747[5]
  i3746.readDepth = !!i3747[6]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'shader')
  i3752.pass = i3753[2]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3757 = data
  i3756.name = i3757[0]
  i3756.type = i3757[1]
  i3756.value = new pc.Vec4( i3757[2], i3757[3], i3757[4], i3757[5] )
  i3756.textureValue = i3757[6]
  i3756.shaderPropertyFlag = i3757[7]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3759 = data
  i3758.name = i3759[0]
  request.r(i3759[1], i3759[2], 0, i3758, 'texture')
  i3758.aabb = i3759[3]
  i3758.vertices = i3759[4]
  i3758.triangles = i3759[5]
  i3758.textureRect = UnityEngine.Rect.MinMaxRect(i3759[6], i3759[7], i3759[8], i3759[9])
  i3758.packedRect = UnityEngine.Rect.MinMaxRect(i3759[10], i3759[11], i3759[12], i3759[13])
  i3758.border = new pc.Vec4( i3759[14], i3759[15], i3759[16], i3759[17] )
  i3758.transparency = i3759[18]
  i3758.bounds = i3759[19]
  i3758.pixelsPerUnit = i3759[20]
  i3758.textureWidth = i3759[21]
  i3758.textureHeight = i3759[22]
  i3758.nativeSize = new pc.Vec2( i3759[23], i3759[24] )
  i3758.pivot = new pc.Vec2( i3759[25], i3759[26] )
  i3758.textureRectOffset = new pc.Vec2( i3759[27], i3759[28] )
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3761 = data
  i3760.name = i3761[0]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3763 = data
  i3762.name = i3763[0]
  i3762.wrapMode = i3763[1]
  i3762.isLooping = !!i3763[2]
  i3762.length = i3763[3]
  var i3765 = i3763[4]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3765[i + 0]) );
  }
  i3762.curves = i3764
  var i3767 = i3763[5]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3767[i + 0]) );
  }
  i3762.events = i3766
  i3762.halfPrecision = !!i3763[6]
  i3762._frameRate = i3763[7]
  i3762.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3763[8], i3762.localBounds)
  i3762.hasMuscleCurves = !!i3763[9]
  var i3769 = i3763[10]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( i3769[i + 0] );
  }
  i3762.clipMuscleConstant = i3768
  i3762.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3763[11], i3762.clipBindingConstant)
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3773 = data
  i3772.path = i3773[0]
  i3772.hash = i3773[1]
  i3772.componentType = i3773[2]
  i3772.property = i3773[3]
  i3772.keys = i3773[4]
  var i3775 = i3773[5]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3775[i + 0]) );
  }
  i3772.objectReferenceKeys = i3774
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3779 = data
  i3778.time = i3779[0]
  request.r(i3779[1], i3779[2], 0, i3778, 'value')
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3783 = data
  i3782.functionName = i3783[0]
  i3782.floatParameter = i3783[1]
  i3782.intParameter = i3783[2]
  i3782.stringParameter = i3783[3]
  request.r(i3783[4], i3783[5], 0, i3782, 'objectReferenceParameter')
  i3782.time = i3783[6]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3785 = data
  i3784.center = new pc.Vec3( i3785[0], i3785[1], i3785[2] )
  i3784.extends = new pc.Vec3( i3785[3], i3785[4], i3785[5] )
  return i3784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3789 = data
  var i3791 = i3789[0]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( i3791[i + 0] );
  }
  i3788.genericBindings = i3790
  var i3793 = i3789[1]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( i3793[i + 0] );
  }
  i3788.pptrCurveMapping = i3792
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3795 = data
  i3794.name = i3795[0]
  i3794.ascent = i3795[1]
  i3794.originalLineHeight = i3795[2]
  i3794.fontSize = i3795[3]
  var i3797 = i3795[4]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 1) {
    i3796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3797[i + 0]) );
  }
  i3794.characterInfo = i3796
  request.r(i3795[5], i3795[6], 0, i3794, 'texture')
  i3794.originalFontSize = i3795[7]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3801 = data
  i3800.index = i3801[0]
  i3800.advance = i3801[1]
  i3800.bearing = i3801[2]
  i3800.glyphWidth = i3801[3]
  i3800.glyphHeight = i3801[4]
  i3800.minX = i3801[5]
  i3800.maxX = i3801[6]
  i3800.minY = i3801[7]
  i3800.maxY = i3801[8]
  i3800.uvBottomLeftX = i3801[9]
  i3800.uvBottomLeftY = i3801[10]
  i3800.uvBottomRightX = i3801[11]
  i3800.uvBottomRightY = i3801[12]
  i3800.uvTopLeftX = i3801[13]
  i3800.uvTopLeftY = i3801[14]
  i3800.uvTopRightX = i3801[15]
  i3800.uvTopRightY = i3801[16]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3803 = data
  i3802.name = i3803[0]
  var i3805 = i3803[1]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3805[i + 0]) );
  }
  i3802.layers = i3804
  var i3807 = i3803[2]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3807[i + 0]) );
  }
  i3802.parameters = i3806
  i3802.animationClips = i3803[3]
  i3802.avatarUnsupported = i3803[4]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3811 = data
  i3810.name = i3811[0]
  i3810.defaultWeight = i3811[1]
  i3810.blendingMode = i3811[2]
  i3810.avatarMask = i3811[3]
  i3810.syncedLayerIndex = i3811[4]
  i3810.syncedLayerAffectsTiming = !!i3811[5]
  i3810.syncedLayers = i3811[6]
  i3810.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3811[7], i3810.stateMachine)
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3813 = data
  i3812.id = i3813[0]
  i3812.name = i3813[1]
  i3812.path = i3813[2]
  var i3815 = i3813[3]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3815[i + 0]) );
  }
  i3812.states = i3814
  var i3817 = i3813[4]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3817[i + 0]) );
  }
  i3812.machines = i3816
  var i3819 = i3813[5]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3819[i + 0]) );
  }
  i3812.entryStateTransitions = i3818
  var i3821 = i3813[6]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3821[i + 0]) );
  }
  i3812.exitStateTransitions = i3820
  var i3823 = i3813[7]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3823[i + 0]) );
  }
  i3812.anyStateTransitions = i3822
  i3812.defaultStateId = i3813[8]
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3827 = data
  i3826.id = i3827[0]
  i3826.name = i3827[1]
  i3826.cycleOffset = i3827[2]
  i3826.cycleOffsetParameter = i3827[3]
  i3826.cycleOffsetParameterActive = !!i3827[4]
  i3826.mirror = !!i3827[5]
  i3826.mirrorParameter = i3827[6]
  i3826.mirrorParameterActive = !!i3827[7]
  i3826.motionId = i3827[8]
  i3826.nameHash = i3827[9]
  i3826.fullPathHash = i3827[10]
  i3826.speed = i3827[11]
  i3826.speedParameter = i3827[12]
  i3826.speedParameterActive = !!i3827[13]
  i3826.tag = i3827[14]
  i3826.tagHash = i3827[15]
  i3826.writeDefaultValues = !!i3827[16]
  var i3829 = i3827[17]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 2) {
  request.r(i3829[i + 0], i3829[i + 1], 2, i3828, '')
  }
  i3826.behaviours = i3828
  var i3831 = i3827[18]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3831[i + 0]) );
  }
  i3826.transitions = i3830
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3837 = data
  i3836.fullPath = i3837[0]
  i3836.canTransitionToSelf = !!i3837[1]
  i3836.duration = i3837[2]
  i3836.exitTime = i3837[3]
  i3836.hasExitTime = !!i3837[4]
  i3836.hasFixedDuration = !!i3837[5]
  i3836.interruptionSource = i3837[6]
  i3836.offset = i3837[7]
  i3836.orderedInterruption = !!i3837[8]
  i3836.destinationStateId = i3837[9]
  i3836.isExit = !!i3837[10]
  i3836.mute = !!i3837[11]
  i3836.solo = !!i3837[12]
  var i3839 = i3837[13]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 1) {
    i3838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3839[i + 0]) );
  }
  i3836.conditions = i3838
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3845 = data
  i3844.destinationStateId = i3845[0]
  i3844.isExit = !!i3845[1]
  i3844.mute = !!i3845[2]
  i3844.solo = !!i3845[3]
  var i3847 = i3845[4]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3847[i + 0]) );
  }
  i3844.conditions = i3846
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3851 = data
  i3850.defaultBool = !!i3851[0]
  i3850.defaultFloat = i3851[1]
  i3850.defaultInt = i3851[2]
  i3850.name = i3851[3]
  i3850.nameHash = i3851[4]
  i3850.type = i3851[5]
  return i3850
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3852 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3853 = data
  i3852.useSafeMode = !!i3853[0]
  i3852.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3853[1], i3852.safeModeOptions)
  i3852.timeScale = i3853[2]
  i3852.unscaledTimeScale = i3853[3]
  i3852.useSmoothDeltaTime = !!i3853[4]
  i3852.maxSmoothUnscaledTime = i3853[5]
  i3852.rewindCallbackMode = i3853[6]
  i3852.showUnityEditorReport = !!i3853[7]
  i3852.logBehaviour = i3853[8]
  i3852.drawGizmos = !!i3853[9]
  i3852.defaultRecyclable = !!i3853[10]
  i3852.defaultAutoPlay = i3853[11]
  i3852.defaultUpdateType = i3853[12]
  i3852.defaultTimeScaleIndependent = !!i3853[13]
  i3852.defaultEaseType = i3853[14]
  i3852.defaultEaseOvershootOrAmplitude = i3853[15]
  i3852.defaultEasePeriod = i3853[16]
  i3852.defaultAutoKill = !!i3853[17]
  i3852.defaultLoopType = i3853[18]
  i3852.debugMode = !!i3853[19]
  i3852.debugStoreTargetId = !!i3853[20]
  i3852.showPreviewPanel = !!i3853[21]
  i3852.storeSettingsLocation = i3853[22]
  i3852.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3853[23], i3852.modules)
  i3852.createASMDEF = !!i3853[24]
  i3852.showPlayingTweens = !!i3853[25]
  i3852.showPausedTweens = !!i3853[26]
  return i3852
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3855 = data
  i3854.logBehaviour = i3855[0]
  i3854.nestedTweenFailureBehaviour = i3855[1]
  return i3854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3857 = data
  i3856.showPanel = !!i3857[0]
  i3856.audioEnabled = !!i3857[1]
  i3856.physicsEnabled = !!i3857[2]
  i3856.physics2DEnabled = !!i3857[3]
  i3856.spriteEnabled = !!i3857[4]
  i3856.uiEnabled = !!i3857[5]
  i3856.textMeshProEnabled = !!i3857[6]
  i3856.tk2DEnabled = !!i3857[7]
  i3856.deAudioEnabled = !!i3857[8]
  i3856.deUnityExtendedEnabled = !!i3857[9]
  i3856.epoOutlineEnabled = !!i3857[10]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3859 = data
  var i3861 = i3859[0]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3861[i + 0]) );
  }
  i3858.files = i3860
  i3858.componentToPrefabIds = i3859[1]
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3865 = data
  i3864.path = i3865[0]
  request.r(i3865[1], i3865[2], 0, i3864, 'unityObject')
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3867 = data
  var i3869 = i3867[0]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3869[i + 0]) );
  }
  i3866.scriptsExecutionOrder = i3868
  var i3871 = i3867[1]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3871[i + 0]) );
  }
  i3866.sortingLayers = i3870
  var i3873 = i3867[2]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3873[i + 0]) );
  }
  i3866.cullingLayers = i3872
  i3866.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3867[3], i3866.timeSettings)
  i3866.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3867[4], i3866.physicsSettings)
  i3866.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3867[5], i3866.physics2DSettings)
  i3866.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3867[6], i3866.qualitySettings)
  i3866.enableRealtimeShadows = !!i3867[7]
  i3866.enableAutoInstancing = !!i3867[8]
  i3866.enableStaticBatching = !!i3867[9]
  i3866.enableDynamicBatching = !!i3867[10]
  i3866.usePreservativeDynamicBatching = !!i3867[11]
  i3866.lightmapEncodingQuality = i3867[12]
  i3866.desiredColorSpace = i3867[13]
  var i3875 = i3867[14]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( i3875[i + 0] );
  }
  i3866.allTags = i3874
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3879 = data
  i3878.name = i3879[0]
  i3878.value = i3879[1]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3883 = data
  i3882.id = i3883[0]
  i3882.name = i3883[1]
  i3882.value = i3883[2]
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3887 = data
  i3886.id = i3887[0]
  i3886.name = i3887[1]
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3889 = data
  i3888.fixedDeltaTime = i3889[0]
  i3888.maximumDeltaTime = i3889[1]
  i3888.timeScale = i3889[2]
  i3888.maximumParticleTimestep = i3889[3]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3891 = data
  i3890.gravity = new pc.Vec3( i3891[0], i3891[1], i3891[2] )
  i3890.defaultSolverIterations = i3891[3]
  i3890.bounceThreshold = i3891[4]
  i3890.autoSyncTransforms = !!i3891[5]
  i3890.autoSimulation = !!i3891[6]
  var i3893 = i3891[7]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3893[i + 0]) );
  }
  i3890.collisionMatrix = i3892
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3897 = data
  i3896.enabled = !!i3897[0]
  i3896.layerId = i3897[1]
  i3896.otherLayerId = i3897[2]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3899 = data
  request.r(i3899[0], i3899[1], 0, i3898, 'material')
  i3898.gravity = new pc.Vec2( i3899[2], i3899[3] )
  i3898.positionIterations = i3899[4]
  i3898.velocityIterations = i3899[5]
  i3898.velocityThreshold = i3899[6]
  i3898.maxLinearCorrection = i3899[7]
  i3898.maxAngularCorrection = i3899[8]
  i3898.maxTranslationSpeed = i3899[9]
  i3898.maxRotationSpeed = i3899[10]
  i3898.baumgarteScale = i3899[11]
  i3898.baumgarteTOIScale = i3899[12]
  i3898.timeToSleep = i3899[13]
  i3898.linearSleepTolerance = i3899[14]
  i3898.angularSleepTolerance = i3899[15]
  i3898.defaultContactOffset = i3899[16]
  i3898.autoSimulation = !!i3899[17]
  i3898.queriesHitTriggers = !!i3899[18]
  i3898.queriesStartInColliders = !!i3899[19]
  i3898.callbacksOnDisable = !!i3899[20]
  i3898.reuseCollisionCallbacks = !!i3899[21]
  i3898.autoSyncTransforms = !!i3899[22]
  var i3901 = i3899[23]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3901[i + 0]) );
  }
  i3898.collisionMatrix = i3900
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3905 = data
  i3904.enabled = !!i3905[0]
  i3904.layerId = i3905[1]
  i3904.otherLayerId = i3905[2]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3907 = data
  var i3909 = i3907[0]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3909[i + 0]) );
  }
  i3906.qualityLevels = i3908
  var i3911 = i3907[1]
  var i3910 = []
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.push( i3911[i + 0] );
  }
  i3906.names = i3910
  i3906.shadows = i3907[2]
  i3906.anisotropicFiltering = i3907[3]
  i3906.antiAliasing = i3907[4]
  i3906.lodBias = i3907[5]
  i3906.shadowCascades = i3907[6]
  i3906.shadowDistance = i3907[7]
  i3906.shadowmaskMode = i3907[8]
  i3906.shadowProjection = i3907[9]
  i3906.shadowResolution = i3907[10]
  i3906.softParticles = !!i3907[11]
  i3906.softVegetation = !!i3907[12]
  i3906.activeColorSpace = i3907[13]
  i3906.desiredColorSpace = i3907[14]
  i3906.masterTextureLimit = i3907[15]
  i3906.maxQueuedFrames = i3907[16]
  i3906.particleRaycastBudget = i3907[17]
  i3906.pixelLightCount = i3907[18]
  i3906.realtimeReflectionProbes = !!i3907[19]
  i3906.shadowCascade2Split = i3907[20]
  i3906.shadowCascade4Split = new pc.Vec3( i3907[21], i3907[22], i3907[23] )
  i3906.streamingMipmapsActive = !!i3907[24]
  i3906.vSyncCount = i3907[25]
  i3906.asyncUploadBufferSize = i3907[26]
  i3906.asyncUploadTimeSlice = i3907[27]
  i3906.billboardsFaceCameraPosition = !!i3907[28]
  i3906.shadowNearPlaneOffset = i3907[29]
  i3906.streamingMipmapsMemoryBudget = i3907[30]
  i3906.maximumLODLevel = i3907[31]
  i3906.streamingMipmapsAddAllCameras = !!i3907[32]
  i3906.streamingMipmapsMaxLevelReduction = i3907[33]
  i3906.streamingMipmapsRenderersPerFrame = i3907[34]
  i3906.resolutionScalingFixedDPIFactor = i3907[35]
  i3906.streamingMipmapsMaxFileIORequests = i3907[36]
  i3906.currentQualityLevel = i3907[37]
  return i3906
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3915 = data
  request.r(i3915[0], i3915[1], 0, i3914, 'm_ObjectArgument')
  i3914.m_ObjectArgumentAssemblyTypeName = i3915[2]
  i3914.m_IntArgument = i3915[3]
  i3914.m_FloatArgument = i3915[4]
  i3914.m_StringArgument = i3915[5]
  i3914.m_BoolArgument = !!i3915[6]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3919 = data
  i3918.mode = i3919[0]
  i3918.parameter = i3919[1]
  i3918.threshold = i3919[2]
  return i3918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[6],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[19],"66":[19],"67":[19],"68":[19],"69":[19],"70":[19],"27":[19],"71":[19],"72":[19],"24":[19],"73":[19],"74":[19],"75":[19],"76":[6],"77":[78],"79":[80],"81":[80],"12":[11],"82":[22],"83":[6],"84":[85],"86":[11],"87":[15,11],"88":[78],"89":[15,11],"90":[11],"91":[11],"92":[78,11],"93":[11,15],"94":[95],"96":[95],"97":[95],"98":[11],"99":[11],"14":[12],"36":[15,11],"16":[11],"13":[12],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[11],"17":[15,11],"109":[11],"110":[11],"111":[11],"112":[11],"39":[15,11],"113":[11],"114":[9],"115":[9],"10":[9],"116":[9],"117":[6],"118":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","BonkController","ActiveOnActive","UnityEngine.GameObject","DropPiece","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","ActiveOnClick","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","GameController","TargetController","LunaController","LayoutController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/21/2026 04:45:21";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "RSNM_V05_YenTTH_TamNTM";

Deserializers.lunaAppID = "42071";

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

Deserializers.buildID = "e0988515-61ff-4347-b81b-8ece6038dd02";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

