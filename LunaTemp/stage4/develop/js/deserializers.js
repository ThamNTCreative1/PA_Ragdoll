var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSpring' )
  var i473 = data
  i472.spring = i473[0]
  i472.damper = i473[1]
  i472.targetPosition = i473[2]
  return i472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor' )
  var i475 = data
  i474.m_TargetVelocity = i475[0]
  i474.m_Force = i475[1]
  i474.m_FreeSpin = i475[2]
  return i474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointLimits' )
  var i477 = data
  i476.m_Min = i477[0]
  i476.m_Max = i477[1]
  i476.m_Bounciness = i477[2]
  i476.m_BounceMinVelocity = i477[3]
  i476.m_ContactDistance = i477[4]
  i476.minBounce = i477[5]
  i476.maxBounce = i477[6]
  return i476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointDrive' )
  var i479 = data
  i478.m_PositionSpring = i479[0]
  i478.m_PositionDamper = i479[1]
  i478.m_MaximumForce = i479[2]
  i478.m_UseAcceleration = i479[3]
  return i478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i481 = data
  i480.m_Spring = i481[0]
  i480.m_Damper = i481[1]
  return i480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i483 = data
  i482.m_Limit = i483[0]
  i482.m_Bounciness = i483[1]
  i482.m_ContactDistance = i483[2]
  return i482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i485 = data
  i484.m_ExtremumSlip = i485[0]
  i484.m_ExtremumValue = i485[1]
  i484.m_AsymptoteSlip = i485[2]
  i484.m_AsymptoteValue = i485[3]
  i484.m_Stiffness = i485[4]
  return i484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i487 = data
  i486.m_LowerAngle = i487[0]
  i486.m_UpperAngle = i487[1]
  return i486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i489 = data
  i488.m_MotorSpeed = i489[0]
  i488.m_MaximumMotorTorque = i489[1]
  return i488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i491 = data
  i490.m_DampingRatio = i491[0]
  i490.m_Frequency = i491[1]
  i490.m_Angle = i491[2]
  return i490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i493 = data
  i492.m_LowerTranslation = i493[0]
  i492.m_UpperTranslation = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i527 = data
  i526.name = i527[0]
  i526.width = i527[1]
  i526.height = i527[2]
  i526.mipmapCount = i527[3]
  i526.anisoLevel = i527[4]
  i526.filterMode = i527[5]
  i526.hdr = !!i527[6]
  i526.format = i527[7]
  i526.wrapMode = i527[8]
  i526.alphaIsTransparency = !!i527[9]
  i526.alphaSource = i527[10]
  i526.graphicsFormat = i527[11]
  i526.sRGBTexture = !!i527[12]
  i526.desiredColorSpace = i527[13]
  i526.wrapU = i527[14]
  i526.wrapV = i527[15]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i529 = data
  i528.position = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.scale = new pc.Vec3( i529[3], i529[4], i529[5] )
  i528.rotation = new pc.Quat(i529[6], i529[7], i529[8], i529[9])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i531 = data
  i530.color = new pc.Color(i531[0], i531[1], i531[2], i531[3])
  request.r(i531[4], i531[5], 0, i530, 'sprite')
  i530.flipX = !!i531[6]
  i530.flipY = !!i531[7]
  i530.drawMode = i531[8]
  i530.size = new pc.Vec2( i531[9], i531[10] )
  i530.tileMode = i531[11]
  i530.adaptiveModeThreshold = i531[12]
  i530.maskInteraction = i531[13]
  i530.spriteSortPoint = i531[14]
  i530.enabled = !!i531[15]
  request.r(i531[16], i531[17], 0, i530, 'sharedMaterial')
  var i533 = i531[18]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sharedMaterials = i532
  i530.receiveShadows = !!i531[19]
  i530.shadowCastingMode = i531[20]
  i530.sortingLayerID = i531[21]
  i530.sortingOrder = i531[22]
  i530.lightmapIndex = i531[23]
  i530.lightmapSceneIndex = i531[24]
  i530.lightmapScaleOffset = new pc.Vec4( i531[25], i531[26], i531[27], i531[28] )
  i530.lightProbeUsage = i531[29]
  i530.reflectionProbeUsage = i531[30]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i537 = data
  i536.bodyType = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'material')
  i536.simulated = !!i537[3]
  i536.useAutoMass = !!i537[4]
  i536.mass = i537[5]
  i536.drag = i537[6]
  i536.angularDrag = i537[7]
  i536.gravityScale = i537[8]
  i536.collisionDetectionMode = i537[9]
  i536.sleepMode = i537[10]
  i536.constraints = i537[11]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i539 = data
  i538.name = i539[0]
  i538.tagId = i539[1]
  i538.enabled = !!i539[2]
  i538.isStatic = !!i539[3]
  i538.layer = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i541 = data
  i540.radius = i541[0]
  i540.enabled = !!i541[1]
  i540.isTrigger = !!i541[2]
  i540.usedByEffector = !!i541[3]
  i540.density = i541[4]
  i540.offset = new pc.Vec2( i541[5], i541[6] )
  request.r(i541[7], i541[8], 0, i540, 'material')
  return i540
}

Deserializers["BombController"] = function (request, data, root) {
  var i542 = root || request.c( 'BombController' )
  var i543 = data
  i542.damage = i543[0]
  i542.layer = UnityEngine.LayerMask.FromIntegerValue( i543[1] )
  request.r(i543[2], i543[3], 0, i542, 'startSound')
  request.r(i543[4], i543[5], 0, i542, 'actionSound')
  i542.delay = i543[6]
  request.r(i543[7], i543[8], 0, i542, 'anim')
  request.r(i543[9], i543[10], 0, i542, 'vfx1')
  request.r(i543[11], i543[12], 0, i542, 'vfx2')
  i542.scale = i543[13]
  i542.radius = i543[14]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'animatorController')
  request.r(i545[2], i545[3], 0, i544, 'avatar')
  i544.updateMode = i545[4]
  i544.hasTransformHierarchy = !!i545[5]
  i544.applyRootMotion = !!i545[6]
  var i547 = i545[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 2, i546, '')
  }
  i544.humanBones = i546
  i544.enabled = !!i545[8]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i551 = data
  i550.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i551[0], i550.main)
  i550.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i551[1], i550.colorBySpeed)
  i550.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i551[2], i550.colorOverLifetime)
  i550.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i551[3], i550.emission)
  i550.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i551[4], i550.rotationBySpeed)
  i550.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i551[5], i550.rotationOverLifetime)
  i550.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i551[6], i550.shape)
  i550.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i551[7], i550.sizeBySpeed)
  i550.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i551[8], i550.sizeOverLifetime)
  i550.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i551[9], i550.textureSheetAnimation)
  i550.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i551[10], i550.velocityOverLifetime)
  i550.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i551[11], i550.noise)
  i550.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i551[12], i550.inheritVelocity)
  i550.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i551[13], i550.forceOverLifetime)
  i550.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i551[14], i550.limitVelocityOverLifetime)
  i550.useAutoRandomSeed = !!i551[15]
  i550.randomSeed = i551[16]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemMain()
  var i553 = data
  i552.duration = i553[0]
  i552.loop = !!i553[1]
  i552.prewarm = !!i553[2]
  i552.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.startDelay)
  i552.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[4], i552.startLifetime)
  i552.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[5], i552.startSpeed)
  i552.startSize3D = !!i553[6]
  i552.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[7], i552.startSizeX)
  i552.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[8], i552.startSizeY)
  i552.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[9], i552.startSizeZ)
  i552.startRotation3D = !!i553[10]
  i552.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[11], i552.startRotationX)
  i552.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[12], i552.startRotationY)
  i552.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[13], i552.startRotationZ)
  i552.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i553[14], i552.startColor)
  i552.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[15], i552.gravityModifier)
  i552.simulationSpace = i553[16]
  request.r(i553[17], i553[18], 0, i552, 'customSimulationSpace')
  i552.simulationSpeed = i553[19]
  i552.useUnscaledTime = !!i553[20]
  i552.scalingMode = i553[21]
  i552.playOnAwake = !!i553[22]
  i552.maxParticles = i553[23]
  i552.emitterVelocityMode = i553[24]
  i552.stopAction = i553[25]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i554 = root || new pc.MinMaxCurve()
  var i555 = data
  i554.mode = i555[0]
  i554.curveMin = new pc.AnimationCurve( { keys_flow: i555[1] } )
  i554.curveMax = new pc.AnimationCurve( { keys_flow: i555[2] } )
  i554.curveMultiplier = i555[3]
  i554.constantMin = i555[4]
  i554.constantMax = i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i556 = root || new pc.MinMaxGradient()
  var i557 = data
  i556.mode = i557[0]
  i556.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i557[1], i556.gradientMin)
  i556.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i557[2], i556.gradientMax)
  i556.colorMin = new pc.Color(i557[3], i557[4], i557[5], i557[6])
  i556.colorMax = new pc.Color(i557[7], i557[8], i557[9], i557[10])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i559 = data
  i558.mode = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i561[i + 0]) );
  }
  i558.colorKeys = i560
  var i563 = i559[2]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i563[i + 0]) );
  }
  i558.alphaKeys = i562
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemColorBySpeed()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i565[1], i564.color)
  i564.range = new pc.Vec2( i565[2], i565[3] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i569 = data
  i568.color = new pc.Color(i569[0], i569[1], i569[2], i569[3])
  i568.time = i569[4]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i573 = data
  i572.alpha = i573[0]
  i572.time = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemColorOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i575[1], i574.color)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemEmitter()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.rateOverTime)
  i576.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.rateOverDistance)
  var i579 = i577[3]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i579[i + 0]) );
  }
  i576.bursts = i578
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemBurst()
  var i583 = data
  i582.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[0], i582.count)
  i582.cycleCount = i583[1]
  i582.minCount = i583[2]
  i582.maxCount = i583[3]
  i582.repeatInterval = i583[4]
  i582.time = i583[5]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemRotationBySpeed()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.separateAxes = !!i585[4]
  i584.range = new pc.Vec2( i585[5], i585[6] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemRotationOverLifetime()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemShape()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.shapeType = i589[1]
  i588.randomDirectionAmount = i589[2]
  i588.sphericalDirectionAmount = i589[3]
  i588.randomPositionAmount = i589[4]
  i588.alignToDirection = !!i589[5]
  i588.radius = i589[6]
  i588.radiusMode = i589[7]
  i588.radiusSpread = i589[8]
  i588.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.radiusSpeed)
  i588.radiusThickness = i589[10]
  i588.angle = i589[11]
  i588.length = i589[12]
  i588.boxThickness = new pc.Vec3( i589[13], i589[14], i589[15] )
  i588.meshShapeType = i589[16]
  request.r(i589[17], i589[18], 0, i588, 'mesh')
  request.r(i589[19], i589[20], 0, i588, 'meshRenderer')
  request.r(i589[21], i589[22], 0, i588, 'skinnedMeshRenderer')
  i588.useMeshMaterialIndex = !!i589[23]
  i588.meshMaterialIndex = i589[24]
  i588.useMeshColors = !!i589[25]
  i588.normalOffset = i589[26]
  i588.arc = i589[27]
  i588.arcMode = i589[28]
  i588.arcSpread = i589[29]
  i588.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[30], i588.arcSpeed)
  i588.donutRadius = i589[31]
  i588.position = new pc.Vec3( i589[32], i589[33], i589[34] )
  i588.rotation = new pc.Vec3( i589[35], i589[36], i589[37] )
  i588.scale = new pc.Vec3( i589[38], i589[39], i589[40] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemSizeBySpeed()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.separateAxes = !!i591[4]
  i590.range = new pc.Vec2( i591[5], i591[6] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemSizeOverLifetime()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.mode = i595[1]
  i594.animation = i595[2]
  i594.numTilesX = i595[3]
  i594.numTilesY = i595[4]
  i594.useRandomRow = !!i595[5]
  i594.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[6], i594.frameOverTime)
  i594.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[7], i594.startFrame)
  i594.cycleCount = i595[8]
  i594.rowIndex = i595[9]
  i594.flipU = i595[10]
  i594.flipV = i595[11]
  i594.spriteCount = i595[12]
  var i597 = i595[13]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.sprites = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.radial)
  i600.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[5], i600.speedModifier)
  i600.space = i601[6]
  i600.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[7], i600.orbitalX)
  i600.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[8], i600.orbitalY)
  i600.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[9], i600.orbitalZ)
  i600.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[10], i600.orbitalOffsetX)
  i600.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.orbitalOffsetY)
  i600.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[12], i600.orbitalOffsetZ)
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemNoise()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.separateAxes = !!i603[1]
  i602.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.strengthX)
  i602.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.strengthY)
  i602.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.strengthZ)
  i602.frequency = i603[5]
  i602.damping = !!i603[6]
  i602.octaveCount = i603[7]
  i602.octaveMultiplier = i603[8]
  i602.octaveScale = i603[9]
  i602.quality = i603[10]
  i602.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.scrollSpeed)
  i602.scrollSpeedMultiplier = i603[12]
  i602.remapEnabled = !!i603[13]
  i602.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[14], i602.remapX)
  i602.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[15], i602.remapY)
  i602.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[16], i602.remapZ)
  i602.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[17], i602.positionAmount)
  i602.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[18], i602.rotationAmount)
  i602.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[19], i602.sizeAmount)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemInheritVelocity()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.mode = i605[1]
  i604.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.curve)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemForceOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.space = i607[4]
  i606.randomized = !!i607[5]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.limit)
  i608.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.limitX)
  i608.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.limitY)
  i608.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[4], i608.limitZ)
  i608.dampen = i609[5]
  i608.separateAxes = !!i609[6]
  i608.space = i609[7]
  i608.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[8], i608.drag)
  i608.multiplyDragByParticleSize = !!i609[9]
  i608.multiplyDragByParticleVelocity = !!i609[10]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'mesh')
  i610.meshCount = i611[2]
  i610.activeVertexStreamsCount = i611[3]
  i610.alignment = i611[4]
  i610.renderMode = i611[5]
  i610.sortMode = i611[6]
  i610.lengthScale = i611[7]
  i610.velocityScale = i611[8]
  i610.cameraVelocityScale = i611[9]
  i610.normalDirection = i611[10]
  i610.sortingFudge = i611[11]
  i610.minParticleSize = i611[12]
  i610.maxParticleSize = i611[13]
  i610.pivot = new pc.Vec3( i611[14], i611[15], i611[16] )
  request.r(i611[17], i611[18], 0, i610, 'trailMaterial')
  i610.applyActiveColorSpace = !!i611[19]
  i610.enabled = !!i611[20]
  request.r(i611[21], i611[22], 0, i610, 'sharedMaterial')
  var i613 = i611[23]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.sharedMaterials = i612
  i610.receiveShadows = !!i611[24]
  i610.shadowCastingMode = i611[25]
  i610.sortingLayerID = i611[26]
  i610.sortingOrder = i611[27]
  i610.lightmapIndex = i611[28]
  i610.lightmapSceneIndex = i611[29]
  i610.lightmapScaleOffset = new pc.Vec4( i611[30], i611[31], i611[32], i611[33] )
  i610.lightProbeUsage = i611[34]
  i610.reflectionProbeUsage = i611[35]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i615 = data
  i614.name = i615[0]
  i614.index = i615[1]
  i614.startup = !!i615[2]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i617 = data
  i616.aspect = i617[0]
  i616.orthographic = !!i617[1]
  i616.orthographicSize = i617[2]
  i616.backgroundColor = new pc.Color(i617[3], i617[4], i617[5], i617[6])
  i616.nearClipPlane = i617[7]
  i616.farClipPlane = i617[8]
  i616.fieldOfView = i617[9]
  i616.depth = i617[10]
  i616.clearFlags = i617[11]
  i616.cullingMask = i617[12]
  i616.rect = i617[13]
  request.r(i617[14], i617[15], 0, i616, 'targetTexture')
  i616.usePhysicalProperties = !!i617[16]
  i616.focalLength = i617[17]
  i616.sensorSize = new pc.Vec2( i617[18], i617[19] )
  i616.lensShift = new pc.Vec2( i617[20], i617[21] )
  i616.gateFit = i617[22]
  i616.commandBufferCount = i617[23]
  i616.cameraType = i617[24]
  i616.enabled = !!i617[25]
  return i616
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_FirstSelected')
  i618.m_sendNavigationEvents = !!i619[2]
  i618.m_DragThreshold = i619[3]
  return i618
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i621 = data
  i620.m_HorizontalAxis = i621[0]
  i620.m_VerticalAxis = i621[1]
  i620.m_SubmitButton = i621[2]
  i620.m_CancelButton = i621[3]
  i620.m_InputActionsPerSecond = i621[4]
  i620.m_RepeatDelay = i621[5]
  i620.m_ForceModuleActive = !!i621[6]
  i620.m_SendPointerHoverToParent = !!i621[7]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i623 = data
  i622.pivot = new pc.Vec2( i623[0], i623[1] )
  i622.anchorMin = new pc.Vec2( i623[2], i623[3] )
  i622.anchorMax = new pc.Vec2( i623[4], i623[5] )
  i622.sizeDelta = new pc.Vec2( i623[6], i623[7] )
  i622.anchoredPosition3D = new pc.Vec3( i623[8], i623[9], i623[10] )
  i622.rotation = new pc.Quat(i623[11], i623[12], i623[13], i623[14])
  i622.scale = new pc.Vec3( i623[15], i623[16], i623[17] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i625 = data
  i624.planeDistance = i625[0]
  i624.referencePixelsPerUnit = i625[1]
  i624.isFallbackOverlay = !!i625[2]
  i624.renderMode = i625[3]
  i624.renderOrder = i625[4]
  i624.sortingLayerName = i625[5]
  i624.sortingOrder = i625[6]
  i624.scaleFactor = i625[7]
  request.r(i625[8], i625[9], 0, i624, 'worldCamera')
  i624.overrideSorting = !!i625[10]
  i624.pixelPerfect = !!i625[11]
  i624.targetDisplay = i625[12]
  i624.overridePixelPerfect = !!i625[13]
  i624.enabled = !!i625[14]
  return i624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i627 = data
  i626.m_UiScaleMode = i627[0]
  i626.m_ReferencePixelsPerUnit = i627[1]
  i626.m_ScaleFactor = i627[2]
  i626.m_ReferenceResolution = new pc.Vec2( i627[3], i627[4] )
  i626.m_ScreenMatchMode = i627[5]
  i626.m_MatchWidthOrHeight = i627[6]
  i626.m_PhysicalUnit = i627[7]
  i626.m_FallbackScreenDPI = i627[8]
  i626.m_DefaultSpriteDPI = i627[9]
  i626.m_DynamicPixelsPerUnit = i627[10]
  i626.m_PresetInfoIsWorld = !!i627[11]
  return i626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i629 = data
  i628.m_IgnoreReversedGraphics = !!i629[0]
  i628.m_BlockingObjects = i629[1]
  i628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i629[2] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i633 = data
  i632.m_AspectMode = i633[0]
  i632.m_AspectRatio = i633[1]
  return i632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Texture')
  i634.m_UVRect = UnityEngine.Rect.MinMaxRect(i635[2], i635[3], i635[4], i635[5])
  request.r(i635[6], i635[7], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[8]
  i634.m_Color = new pc.Color(i635[9], i635[10], i635[11], i635[12])
  i634.m_RaycastTarget = !!i635[13]
  i634.m_RaycastPadding = new pc.Vec4( i635[14], i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i637 = data
  i636.usedByComposite = !!i637[0]
  i636.autoTiling = !!i637[1]
  i636.size = new pc.Vec2( i637[2], i637[3] )
  i636.edgeRadius = i637[4]
  i636.enabled = !!i637[5]
  i636.isTrigger = !!i637[6]
  i636.usedByEffector = !!i637[7]
  i636.density = i637[8]
  i636.offset = new pc.Vec2( i637[9], i637[10] )
  request.r(i637[11], i637[12], 0, i636, 'material')
  return i636
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i638 = root || request.c( 'BalanceController' )
  var i639 = data
  i638.targetRotation = i639[0]
  i638.force = i639[1]
  i638.useBalance = !!i639[2]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i641 = data
  i640.useLimits = !!i641[0]
  i640.limits = request.d('UnityEngine.JointAngleLimits2D', i641[1], i640.limits)
  i640.useMotor = !!i641[2]
  i640.motor = request.d('UnityEngine.JointMotor2D', i641[3], i640.motor)
  i640.anchor = new pc.Vec2( i641[4], i641[5] )
  i640.connectedAnchor = new pc.Vec2( i641[6], i641[7] )
  i640.autoConfigureConnectedAnchor = !!i641[8]
  request.r(i641[9], i641[10], 0, i640, 'connectedBody')
  i640.breakForce = i641[11]
  i640.breakTorque = i641[12]
  i640.enableCollision = !!i641[13]
  i640.enabled = !!i641[14]
  return i640
}

Deserializers["RagdollController"] = function (request, data, root) {
  var i642 = root || request.c( 'RagdollController' )
  var i643 = data
  i642.Piece = i643[0]
  i642.isDead = !!i643[1]
  var i645 = i643[2]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('BalanceController')))
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 1, i644, '')
  }
  i642.balances = i644
  request.r(i643[3], i643[4], 0, i642, 'ghost')
  request.r(i643[5], i643[6], 0, i642, 'head')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'clip')
  request.r(i649[2], i649[3], 0, i648, 'outputAudioMixerGroup')
  i648.playOnAwake = !!i649[4]
  i648.loop = !!i649[5]
  i648.time = i649[6]
  i648.volume = i649[7]
  i648.pitch = i649[8]
  i648.enabled = !!i649[9]
  return i648
}

Deserializers["AcidSound"] = function (request, data, root) {
  var i650 = root || request.c( 'AcidSound' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'audioSource')
  request.r(i651[2], i651[3], 0, i650, 'sizzleClip')
  i650.volume = i651[4]
  return i650
}

Deserializers["PixelAcidDamage"] = function (request, data, root) {
  var i652 = root || request.c( 'PixelAcidDamage' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'controller')
  request.r(i653[2], i653[3], 0, i652, 'skinRenderer')
  i652.damagePerSecond = i653[4]
  i652.updateInterval = i653[5]
  i652.dissolveDelay = i653[6]
  request.r(i653[7], i653[8], 0, i652, 'acidSound')
  return i652
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i654 = root || request.c( 'CheckGround' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'controller')
  request.r(i655[2], i655[3], 0, i654, 'platform')
  return i654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Image' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Sprite')
  i656.m_Type = i657[2]
  i656.m_PreserveAspect = !!i657[3]
  i656.m_FillCenter = !!i657[4]
  i656.m_FillMethod = i657[5]
  i656.m_FillAmount = i657[6]
  i656.m_FillClockwise = !!i657[7]
  i656.m_FillOrigin = i657[8]
  i656.m_UseSpriteMesh = !!i657[9]
  i656.m_PixelsPerUnitMultiplier = i657[10]
  request.r(i657[11], i657[12], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[13]
  i656.m_Color = new pc.Color(i657[14], i657[15], i657[16], i657[17])
  i656.m_RaycastTarget = !!i657[18]
  i656.m_RaycastPadding = new pc.Vec4( i657[19], i657[20], i657[21], i657[22] )
  return i656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button' )
  var i659 = data
  i658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i659[0], i658.m_OnClick)
  i658.m_Navigation = request.d('UnityEngine.UI.Navigation', i659[1], i658.m_Navigation)
  i658.m_Transition = i659[2]
  i658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i659[3], i658.m_Colors)
  i658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i659[4], i658.m_SpriteState)
  i658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i659[5], i658.m_AnimationTriggers)
  i658.m_Interactable = !!i659[6]
  request.r(i659[7], i659[8], 0, i658, 'm_TargetGraphic')
  return i658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.Events.PersistentCall', i665[i + 0]));
  }
  i662.m_Calls = i664
  return i662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_Target')
  i668.m_TargetAssemblyTypeName = i669[2]
  i668.m_MethodName = i669[3]
  i668.m_Mode = i669[4]
  i668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i669[5], i668.m_Arguments)
  i668.m_CallState = i669[6]
  return i668
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i671 = data
  i670.m_Mode = i671[0]
  i670.m_WrapAround = !!i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_SelectOnUp')
  request.r(i671[4], i671[5], 0, i670, 'm_SelectOnDown')
  request.r(i671[6], i671[7], 0, i670, 'm_SelectOnLeft')
  request.r(i671[8], i671[9], 0, i670, 'm_SelectOnRight')
  return i670
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i673 = data
  i672.m_NormalColor = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.m_HighlightedColor = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.m_PressedColor = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.m_SelectedColor = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  i672.m_DisabledColor = new pc.Color(i673[16], i673[17], i673[18], i673[19])
  i672.m_ColorMultiplier = i673[20]
  i672.m_FadeDuration = i673[21]
  return i672
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_HighlightedSprite')
  request.r(i675[2], i675[3], 0, i674, 'm_PressedSprite')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectedSprite')
  request.r(i675[6], i675[7], 0, i674, 'm_DisabledSprite')
  return i674
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i677 = data
  i676.m_NormalTrigger = i677[0]
  i676.m_HighlightedTrigger = i677[1]
  i676.m_PressedTrigger = i677[2]
  i676.m_SelectedTrigger = i677[3]
  i676.m_DisabledTrigger = i677[4]
  return i676
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Text' )
  var i679 = data
  i678.m_FontData = request.d('UnityEngine.UI.FontData', i679[0], i678.m_FontData)
  i678.m_Text = i679[1]
  request.r(i679[2], i679[3], 0, i678, 'm_Material')
  i678.m_Maskable = !!i679[4]
  i678.m_Color = new pc.Color(i679[5], i679[6], i679[7], i679[8])
  i678.m_RaycastTarget = !!i679[9]
  i678.m_RaycastPadding = new pc.Vec4( i679[10], i679[11], i679[12], i679[13] )
  return i678
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.FontData' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_Font')
  i680.m_FontSize = i681[2]
  i680.m_FontStyle = i681[3]
  i680.m_BestFit = !!i681[4]
  i680.m_MinSize = i681[5]
  i680.m_MaxSize = i681[6]
  i680.m_Alignment = i681[7]
  i680.m_AlignByGeometry = !!i681[8]
  i680.m_RichText = !!i681[9]
  i680.m_HorizontalOverflow = i681[10]
  i680.m_VerticalOverflow = i681[11]
  i680.m_LineSpacing = i681[12]
  return i680
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i682 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i683 = data
  i682.targetIsSelf = !!i683[0]
  request.r(i683[1], i683[2], 0, i682, 'targetGO')
  i682.tweenTargetIsTargetGO = !!i683[3]
  i682.delay = i683[4]
  i682.duration = i683[5]
  i682.easeType = i683[6]
  i682.easeCurve = new pc.AnimationCurve( { keys_flow: i683[7] } )
  i682.loopType = i683[8]
  i682.loops = i683[9]
  i682.id = i683[10]
  i682.isRelative = !!i683[11]
  i682.isFrom = !!i683[12]
  i682.isIndependentUpdate = !!i683[13]
  i682.autoKill = !!i683[14]
  i682.autoGenerate = !!i683[15]
  i682.isActive = !!i683[16]
  i682.isValid = !!i683[17]
  request.r(i683[18], i683[19], 0, i682, 'target')
  i682.animationType = i683[20]
  i682.targetType = i683[21]
  i682.forcedTargetType = i683[22]
  i682.autoPlay = !!i683[23]
  i682.useTargetAsV3 = !!i683[24]
  i682.endValueFloat = i683[25]
  i682.endValueV3 = new pc.Vec3( i683[26], i683[27], i683[28] )
  i682.endValueV2 = new pc.Vec2( i683[29], i683[30] )
  i682.endValueColor = new pc.Color(i683[31], i683[32], i683[33], i683[34])
  i682.endValueString = i683[35]
  i682.endValueRect = UnityEngine.Rect.MinMaxRect(i683[36], i683[37], i683[38], i683[39])
  request.r(i683[40], i683[41], 0, i682, 'endValueTransform')
  i682.optionalBool0 = !!i683[42]
  i682.optionalBool1 = !!i683[43]
  i682.optionalFloat0 = i683[44]
  i682.optionalInt0 = i683[45]
  i682.optionalRotationMode = i683[46]
  i682.optionalScrambleMode = i683[47]
  i682.optionalShakeRandomnessMode = i683[48]
  i682.optionalString = i683[49]
  i682.updateType = i683[50]
  i682.isSpeedBased = !!i683[51]
  i682.hasOnStart = !!i683[52]
  i682.hasOnPlay = !!i683[53]
  i682.hasOnUpdate = !!i683[54]
  i682.hasOnStepComplete = !!i683[55]
  i682.hasOnComplete = !!i683[56]
  i682.hasOnTweenCreated = !!i683[57]
  i682.hasOnRewind = !!i683[58]
  i682.onStart = request.d('UnityEngine.Events.UnityEvent', i683[59], i682.onStart)
  i682.onPlay = request.d('UnityEngine.Events.UnityEvent', i683[60], i682.onPlay)
  i682.onUpdate = request.d('UnityEngine.Events.UnityEvent', i683[61], i682.onUpdate)
  i682.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i683[62], i682.onStepComplete)
  i682.onComplete = request.d('UnityEngine.Events.UnityEvent', i683[63], i682.onComplete)
  i682.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i683[64], i682.onTweenCreated)
  i682.onRewind = request.d('UnityEngine.Events.UnityEvent', i683[65], i682.onRewind)
  return i682
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i685 = data
  i684.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i685[0], i684.m_PersistentCalls)
  return i684
}

Deserializers["GameController"] = function (request, data, root) {
  var i686 = root || request.c( 'GameController' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'startScece')
  request.r(i687[2], i687[3], 0, i686, 'button')
  request.r(i687[4], i687[5], 0, i686, 'clickSound')
  request.r(i687[6], i687[7], 0, i686, 'dragButton')
  request.r(i687[8], i687[9], 0, i686, 'dragButtonRound')
  request.r(i687[10], i687[11], 0, i686, 'drag')
  request.r(i687[12], i687[13], 0, i686, 'dropButton')
  request.r(i687[14], i687[15], 0, i686, 'dropButtonRound')
  request.r(i687[16], i687[17], 0, i686, 'drop')
  request.r(i687[18], i687[19], 0, i686, 'tut2')
  request.r(i687[20], i687[21], 0, i686, 'tut3')
  i686.changePhase = !!i687[22]
  i686.numMonster = i687[23]
  request.r(i687[24], i687[25], 0, i686, 'failScene')
  request.r(i687[26], i687[27], 0, i686, 'winScene')
  i686.end = !!i687[28]
  return i686
}

Deserializers["LunaController"] = function (request, data, root) {
  var i688 = root || request.c( 'LunaController' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'BGTexture')
  request.r(i689[2], i689[3], 0, i688, 'BGM')
  i688.UseTime = !!i689[4]
  i688.TimePlay = i689[5]
  request.r(i689[6], i689[7], 0, i688, 'BGImage')
  var i691 = i689[8]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i688.CTA = i690
  return i688
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i694 = root || request.c( 'LayoutController' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'game')
  request.r(i695[2], i695[3], 0, i694, 'button')
  return i694
}

Deserializers["AudioController"] = function (request, data, root) {
  var i696 = root || request.c( 'AudioController' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'musicSource')
  request.r(i697[2], i697[3], 0, i696, 'pool')
  return i696
}

Deserializers["DragController"] = function (request, data, root) {
  var i698 = root || request.c( 'DragController' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'tut1')
  request.r(i699[2], i699[3], 0, i698, 'tut2')
  request.r(i699[4], i699[5], 0, i698, 'canvas')
  request.r(i699[6], i699[7], 0, i698, 'icon')
  i698.platformLayer = UnityEngine.LayerMask.FromIntegerValue( i699[8] )
  i698.detectRadius = i699[9]
  i698.forceMultiplier = i699[10]
  i698.maxForce = i699[11]
  return i698
}

Deserializers["DropController"] = function (request, data, root) {
  var i700 = root || request.c( 'DropController' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'tut3')
  request.r(i701[2], i701[3], 0, i700, 'tut4')
  request.r(i701[4], i701[5], 0, i700, 'worldCamera')
  request.r(i701[6], i701[7], 0, i700, 'bombPrefab')
  request.r(i701[8], i701[9], 0, i700, 'bombParent')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i703 = data
  i702.ambientIntensity = i703[0]
  i702.reflectionIntensity = i703[1]
  i702.ambientMode = i703[2]
  i702.ambientLight = new pc.Color(i703[3], i703[4], i703[5], i703[6])
  i702.ambientSkyColor = new pc.Color(i703[7], i703[8], i703[9], i703[10])
  i702.ambientGroundColor = new pc.Color(i703[11], i703[12], i703[13], i703[14])
  i702.ambientEquatorColor = new pc.Color(i703[15], i703[16], i703[17], i703[18])
  i702.fogColor = new pc.Color(i703[19], i703[20], i703[21], i703[22])
  i702.fogEndDistance = i703[23]
  i702.fogStartDistance = i703[24]
  i702.fogDensity = i703[25]
  i702.fog = !!i703[26]
  request.r(i703[27], i703[28], 0, i702, 'skybox')
  i702.fogMode = i703[29]
  var i705 = i703[30]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i705[i + 0]) );
  }
  i702.lightmaps = i704
  i702.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i703[31], i702.lightProbes)
  i702.lightmapsMode = i703[32]
  i702.mixedBakeMode = i703[33]
  i702.environmentLightingMode = i703[34]
  i702.ambientProbe = new pc.SphericalHarmonicsL2(i703[35])
  request.r(i703[36], i703[37], 0, i702, 'customReflection')
  request.r(i703[38], i703[39], 0, i702, 'defaultReflection')
  i702.defaultReflectionMode = i703[40]
  i702.defaultReflectionResolution = i703[41]
  i702.sunLightObjectId = i703[42]
  i702.pixelLightCount = i703[43]
  i702.defaultReflectionHDR = !!i703[44]
  i702.hasLightDataAsset = !!i703[45]
  i702.hasManualGenerate = !!i703[46]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'lightmapColor')
  request.r(i709[2], i709[3], 0, i708, 'lightmapDirection')
  request.r(i709[4], i709[5], 0, i708, 'shadowMask')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i710 = root || new UnityEngine.LightProbes()
  var i711 = data
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i719 = data
  i718.name = i719[0]
  i718.bounciness = i719[1]
  i718.friction = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i723[i + 0]));
  }
  i720.ShaderCompilationErrors = i722
  i720.name = i721[1]
  i720.guid = i721[2]
  var i725 = i721[3]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.shaderDefinedKeywords = i724
  var i727 = i721[4]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i727[i + 0]) );
  }
  i720.passes = i726
  var i729 = i721[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i729[i + 0]) );
  }
  i720.usePasses = i728
  var i731 = i721[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i731[i + 0]) );
  }
  i720.defaultParameterValues = i730
  request.r(i721[7], i721[8], 0, i720, 'unityFallbackShader')
  i720.readDepth = !!i721[9]
  i720.hasDepthOnlyPass = !!i721[10]
  i720.isCreatedByShaderGraph = !!i721[11]
  i720.disableBatching = !!i721[12]
  i720.compiled = !!i721[13]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i735 = data
  i734.shaderName = i735[0]
  i734.errorMessage = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i740 = root || new pc.UnityShaderPass()
  var i741 = data
  i740.id = i741[0]
  i740.subShaderIndex = i741[1]
  i740.name = i741[2]
  i740.passType = i741[3]
  i740.grabPassTextureName = i741[4]
  i740.usePass = !!i741[5]
  i740.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[6], i740.zTest)
  i740.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[7], i740.zWrite)
  i740.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[8], i740.culling)
  i740.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i741[9], i740.blending)
  i740.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i741[10], i740.alphaBlending)
  i740.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[11], i740.colorWriteMask)
  i740.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[12], i740.offsetUnits)
  i740.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[13], i740.offsetFactor)
  i740.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[14], i740.stencilRef)
  i740.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[15], i740.stencilReadMask)
  i740.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[16], i740.stencilWriteMask)
  i740.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[17], i740.stencilOp)
  i740.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[18], i740.stencilOpFront)
  i740.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[19], i740.stencilOpBack)
  var i743 = i741[20]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i743[i + 0]) );
  }
  i740.tags = i742
  var i745 = i741[21]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i740.passDefinedKeywords = i744
  var i747 = i741[22]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i747[i + 0]) );
  }
  i740.passDefinedKeywordGroups = i746
  var i749 = i741[23]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i749[i + 0]) );
  }
  i740.variants = i748
  var i751 = i741[24]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i751[i + 0]) );
  }
  i740.excludedVariants = i750
  i740.hasDepthReader = !!i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i753 = data
  i752.val = i753[0]
  i752.name = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i755 = data
  i754.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[0], i754.src)
  i754.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[1], i754.dst)
  i754.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[2], i754.op)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i757 = data
  i756.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[0], i756.pass)
  i756.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[1], i756.fail)
  i756.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[2], i756.zFail)
  i756.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[3], i756.comp)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.keywords = i766
  i764.hasDiscard = !!i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i771 = data
  i770.passId = i771[0]
  i770.subShaderIndex = i771[1]
  var i773 = i771[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.vertexProgram = i771[3]
  i770.fragmentProgram = i771[4]
  i770.exportedForWebGl2 = !!i771[5]
  i770.readDepth = !!i771[6]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'shader')
  i776.pass = i777[2]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i781 = data
  i780.name = i781[0]
  i780.type = i781[1]
  i780.value = new pc.Vec4( i781[2], i781[3], i781[4], i781[5] )
  i780.textureValue = i781[6]
  i780.shaderPropertyFlag = i781[7]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i783 = data
  i782.name = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'texture')
  i782.aabb = i783[3]
  i782.vertices = i783[4]
  i782.triangles = i783[5]
  i782.textureRect = UnityEngine.Rect.MinMaxRect(i783[6], i783[7], i783[8], i783[9])
  i782.packedRect = UnityEngine.Rect.MinMaxRect(i783[10], i783[11], i783[12], i783[13])
  i782.border = new pc.Vec4( i783[14], i783[15], i783[16], i783[17] )
  i782.transparency = i783[18]
  i782.bounds = i783[19]
  i782.pixelsPerUnit = i783[20]
  i782.textureWidth = i783[21]
  i782.textureHeight = i783[22]
  i782.nativeSize = new pc.Vec2( i783[23], i783[24] )
  i782.pivot = new pc.Vec2( i783[25], i783[26] )
  i782.textureRectOffset = new pc.Vec2( i783[27], i783[28] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i785 = data
  i784.name = i785[0]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i787 = data
  i786.name = i787[0]
  i786.wrapMode = i787[1]
  i786.isLooping = !!i787[2]
  i786.length = i787[3]
  var i789 = i787[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i789[i + 0]) );
  }
  i786.curves = i788
  var i791 = i787[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i791[i + 0]) );
  }
  i786.events = i790
  i786.halfPrecision = !!i787[6]
  i786._frameRate = i787[7]
  i786.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i787[8], i786.localBounds)
  i786.hasMuscleCurves = !!i787[9]
  var i793 = i787[10]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i786.clipMuscleConstant = i792
  i786.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i787[11], i786.clipBindingConstant)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i797 = data
  i796.path = i797[0]
  i796.hash = i797[1]
  i796.componentType = i797[2]
  i796.property = i797[3]
  i796.keys = i797[4]
  var i799 = i797[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i799[i + 0]) );
  }
  i796.objectReferenceKeys = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i803 = data
  i802.time = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'value')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i807 = data
  i806.functionName = i807[0]
  i806.floatParameter = i807[1]
  i806.intParameter = i807[2]
  i806.stringParameter = i807[3]
  request.r(i807[4], i807[5], 0, i806, 'objectReferenceParameter')
  i806.time = i807[6]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i809 = data
  i808.center = new pc.Vec3( i809[0], i809[1], i809[2] )
  i808.extends = new pc.Vec3( i809[3], i809[4], i809[5] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i812.genericBindings = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.pptrCurveMapping = i816
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i819 = data
  i818.name = i819[0]
  i818.ascent = i819[1]
  i818.originalLineHeight = i819[2]
  i818.fontSize = i819[3]
  var i821 = i819[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i821[i + 0]) );
  }
  i818.characterInfo = i820
  request.r(i819[5], i819[6], 0, i818, 'texture')
  i818.originalFontSize = i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i825 = data
  i824.index = i825[0]
  i824.advance = i825[1]
  i824.bearing = i825[2]
  i824.glyphWidth = i825[3]
  i824.glyphHeight = i825[4]
  i824.minX = i825[5]
  i824.maxX = i825[6]
  i824.minY = i825[7]
  i824.maxY = i825[8]
  i824.uvBottomLeftX = i825[9]
  i824.uvBottomLeftY = i825[10]
  i824.uvBottomRightX = i825[11]
  i824.uvBottomRightY = i825[12]
  i824.uvTopLeftX = i825[13]
  i824.uvTopLeftY = i825[14]
  i824.uvTopRightX = i825[15]
  i824.uvTopRightY = i825[16]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i827 = data
  i826.name = i827[0]
  var i829 = i827[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i829[i + 0]) );
  }
  i826.layers = i828
  var i831 = i827[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i831[i + 0]) );
  }
  i826.parameters = i830
  i826.animationClips = i827[3]
  i826.avatarUnsupported = i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i835 = data
  i834.name = i835[0]
  i834.defaultWeight = i835[1]
  i834.blendingMode = i835[2]
  i834.avatarMask = i835[3]
  i834.syncedLayerIndex = i835[4]
  i834.syncedLayerAffectsTiming = !!i835[5]
  i834.syncedLayers = i835[6]
  i834.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i835[7], i834.stateMachine)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  i836.path = i837[2]
  var i839 = i837[3]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i839[i + 0]) );
  }
  i836.states = i838
  var i841 = i837[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i841[i + 0]) );
  }
  i836.machines = i840
  var i843 = i837[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i843[i + 0]) );
  }
  i836.entryStateTransitions = i842
  var i845 = i837[6]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i845[i + 0]) );
  }
  i836.exitStateTransitions = i844
  var i847 = i837[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i847[i + 0]) );
  }
  i836.anyStateTransitions = i846
  i836.defaultStateId = i837[8]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i851 = data
  i850.id = i851[0]
  i850.name = i851[1]
  i850.cycleOffset = i851[2]
  i850.cycleOffsetParameter = i851[3]
  i850.cycleOffsetParameterActive = !!i851[4]
  i850.mirror = !!i851[5]
  i850.mirrorParameter = i851[6]
  i850.mirrorParameterActive = !!i851[7]
  i850.motionId = i851[8]
  i850.nameHash = i851[9]
  i850.fullPathHash = i851[10]
  i850.speed = i851[11]
  i850.speedParameter = i851[12]
  i850.speedParameterActive = !!i851[13]
  i850.tag = i851[14]
  i850.tagHash = i851[15]
  i850.writeDefaultValues = !!i851[16]
  var i853 = i851[17]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.behaviours = i852
  var i855 = i851[18]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i855[i + 0]) );
  }
  i850.transitions = i854
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i861 = data
  i860.fullPath = i861[0]
  i860.canTransitionToSelf = !!i861[1]
  i860.duration = i861[2]
  i860.exitTime = i861[3]
  i860.hasExitTime = !!i861[4]
  i860.hasFixedDuration = !!i861[5]
  i860.interruptionSource = i861[6]
  i860.offset = i861[7]
  i860.orderedInterruption = !!i861[8]
  i860.destinationStateId = i861[9]
  i860.isExit = !!i861[10]
  i860.mute = !!i861[11]
  i860.solo = !!i861[12]
  var i863 = i861[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i863[i + 0]) );
  }
  i860.conditions = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i867 = data
  i866.mode = i867[0]
  i866.parameter = i867[1]
  i866.threshold = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i873 = data
  i872.destinationStateId = i873[0]
  i872.isExit = !!i873[1]
  i872.mute = !!i873[2]
  i872.solo = !!i873[3]
  var i875 = i873[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i875[i + 0]) );
  }
  i872.conditions = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i879 = data
  i878.defaultBool = !!i879[0]
  i878.defaultFloat = i879[1]
  i878.defaultInt = i879[2]
  i878.name = i879[3]
  i878.nameHash = i879[4]
  i878.type = i879[5]
  return i878
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i881 = data
  i880.useSafeMode = !!i881[0]
  i880.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i881[1], i880.safeModeOptions)
  i880.timeScale = i881[2]
  i880.unscaledTimeScale = i881[3]
  i880.useSmoothDeltaTime = !!i881[4]
  i880.maxSmoothUnscaledTime = i881[5]
  i880.rewindCallbackMode = i881[6]
  i880.showUnityEditorReport = !!i881[7]
  i880.logBehaviour = i881[8]
  i880.drawGizmos = !!i881[9]
  i880.defaultRecyclable = !!i881[10]
  i880.defaultAutoPlay = i881[11]
  i880.defaultUpdateType = i881[12]
  i880.defaultTimeScaleIndependent = !!i881[13]
  i880.defaultEaseType = i881[14]
  i880.defaultEaseOvershootOrAmplitude = i881[15]
  i880.defaultEasePeriod = i881[16]
  i880.defaultAutoKill = !!i881[17]
  i880.defaultLoopType = i881[18]
  i880.debugMode = !!i881[19]
  i880.debugStoreTargetId = !!i881[20]
  i880.showPreviewPanel = !!i881[21]
  i880.storeSettingsLocation = i881[22]
  i880.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i881[23], i880.modules)
  i880.createASMDEF = !!i881[24]
  i880.showPlayingTweens = !!i881[25]
  i880.showPausedTweens = !!i881[26]
  return i880
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i883 = data
  i882.logBehaviour = i883[0]
  i882.nestedTweenFailureBehaviour = i883[1]
  return i882
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i884 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i885 = data
  i884.showPanel = !!i885[0]
  i884.audioEnabled = !!i885[1]
  i884.physicsEnabled = !!i885[2]
  i884.physics2DEnabled = !!i885[3]
  i884.spriteEnabled = !!i885[4]
  i884.uiEnabled = !!i885[5]
  i884.textMeshProEnabled = !!i885[6]
  i884.tk2DEnabled = !!i885[7]
  i884.deAudioEnabled = !!i885[8]
  i884.deUnityExtendedEnabled = !!i885[9]
  i884.epoOutlineEnabled = !!i885[10]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i889[i + 0]) );
  }
  i886.files = i888
  i886.componentToPrefabIds = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i893 = data
  i892.path = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'unityObject')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i897[i + 0]) );
  }
  i894.scriptsExecutionOrder = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i899[i + 0]) );
  }
  i894.sortingLayers = i898
  var i901 = i895[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i901[i + 0]) );
  }
  i894.cullingLayers = i900
  i894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i895[3], i894.timeSettings)
  i894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i895[4], i894.physicsSettings)
  i894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i895[5], i894.physics2DSettings)
  i894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[6], i894.qualitySettings)
  i894.enableRealtimeShadows = !!i895[7]
  i894.enableAutoInstancing = !!i895[8]
  i894.enableStaticBatching = !!i895[9]
  i894.enableDynamicBatching = !!i895[10]
  i894.usePreservativeDynamicBatching = !!i895[11]
  i894.lightmapEncodingQuality = i895[12]
  i894.desiredColorSpace = i895[13]
  var i903 = i895[14]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i894.allTags = i902
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i907 = data
  i906.name = i907[0]
  i906.value = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  i910.value = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i915 = data
  i914.id = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i917 = data
  i916.fixedDeltaTime = i917[0]
  i916.maximumDeltaTime = i917[1]
  i916.timeScale = i917[2]
  i916.maximumParticleTimestep = i917[3]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i919 = data
  i918.gravity = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.defaultSolverIterations = i919[3]
  i918.bounceThreshold = i919[4]
  i918.autoSyncTransforms = !!i919[5]
  i918.autoSimulation = !!i919[6]
  var i921 = i919[7]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'material')
  i926.gravity = new pc.Vec2( i927[2], i927[3] )
  i926.positionIterations = i927[4]
  i926.velocityIterations = i927[5]
  i926.velocityThreshold = i927[6]
  i926.maxLinearCorrection = i927[7]
  i926.maxAngularCorrection = i927[8]
  i926.maxTranslationSpeed = i927[9]
  i926.maxRotationSpeed = i927[10]
  i926.baumgarteScale = i927[11]
  i926.baumgarteTOIScale = i927[12]
  i926.timeToSleep = i927[13]
  i926.linearSleepTolerance = i927[14]
  i926.angularSleepTolerance = i927[15]
  i926.defaultContactOffset = i927[16]
  i926.autoSimulation = !!i927[17]
  i926.queriesHitTriggers = !!i927[18]
  i926.queriesStartInColliders = !!i927[19]
  i926.callbacksOnDisable = !!i927[20]
  i926.reuseCollisionCallbacks = !!i927[21]
  i926.autoSyncTransforms = !!i927[22]
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i929[i + 0]) );
  }
  i926.collisionMatrix = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.layerId = i933[1]
  i932.otherLayerId = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i937[i + 0]) );
  }
  i934.qualityLevels = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.names = i938
  i934.shadows = i935[2]
  i934.anisotropicFiltering = i935[3]
  i934.antiAliasing = i935[4]
  i934.lodBias = i935[5]
  i934.shadowCascades = i935[6]
  i934.shadowDistance = i935[7]
  i934.shadowmaskMode = i935[8]
  i934.shadowProjection = i935[9]
  i934.shadowResolution = i935[10]
  i934.softParticles = !!i935[11]
  i934.softVegetation = !!i935[12]
  i934.activeColorSpace = i935[13]
  i934.desiredColorSpace = i935[14]
  i934.masterTextureLimit = i935[15]
  i934.maxQueuedFrames = i935[16]
  i934.particleRaycastBudget = i935[17]
  i934.pixelLightCount = i935[18]
  i934.realtimeReflectionProbes = !!i935[19]
  i934.shadowCascade2Split = i935[20]
  i934.shadowCascade4Split = new pc.Vec3( i935[21], i935[22], i935[23] )
  i934.streamingMipmapsActive = !!i935[24]
  i934.vSyncCount = i935[25]
  i934.asyncUploadBufferSize = i935[26]
  i934.asyncUploadTimeSlice = i935[27]
  i934.billboardsFaceCameraPosition = !!i935[28]
  i934.shadowNearPlaneOffset = i935[29]
  i934.streamingMipmapsMemoryBudget = i935[30]
  i934.maximumLODLevel = i935[31]
  i934.streamingMipmapsAddAllCameras = !!i935[32]
  i934.streamingMipmapsMaxLevelReduction = i935[33]
  i934.streamingMipmapsRenderersPerFrame = i935[34]
  i934.resolutionScalingFixedDPIFactor = i935[35]
  i934.streamingMipmapsMaxFileIORequests = i935[36]
  i934.currentQualityLevel = i935[37]
  return i934
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_ObjectArgument')
  i942.m_ObjectArgumentAssemblyTypeName = i943[2]
  i942.m_IntArgument = i943[3]
  i942.m_FloatArgument = i943[4]
  i942.m_StringArgument = i943[5]
  i942.m_BoolArgument = !!i943[6]
  return i942
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

Deserializers.creativeName = "SSP_V02_YenTTH_TamNTM_";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1748";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4552";

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

Deserializers.buildID = "773b88cc-0a72-4fd3-9c5d-f6686e9a6503";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

