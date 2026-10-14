var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointSpring' )
  var i435 = data
  i434.spring = i435[0]
  i434.damper = i435[1]
  i434.targetPosition = i435[2]
  return i434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointMotor' )
  var i437 = data
  i436.m_TargetVelocity = i437[0]
  i436.m_Force = i437[1]
  i436.m_FreeSpin = i437[2]
  return i436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointLimits' )
  var i439 = data
  i438.m_Min = i439[0]
  i438.m_Max = i439[1]
  i438.m_Bounciness = i439[2]
  i438.m_BounceMinVelocity = i439[3]
  i438.m_ContactDistance = i439[4]
  i438.minBounce = i439[5]
  i438.maxBounce = i439[6]
  return i438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointDrive' )
  var i441 = data
  i440.m_PositionSpring = i441[0]
  i440.m_PositionDamper = i441[1]
  i440.m_MaximumForce = i441[2]
  i440.m_UseAcceleration = i441[3]
  return i440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i443 = data
  i442.m_Spring = i443[0]
  i442.m_Damper = i443[1]
  return i442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i445 = data
  i444.m_Limit = i445[0]
  i444.m_Bounciness = i445[1]
  i444.m_ContactDistance = i445[2]
  return i444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i447 = data
  i446.m_ExtremumSlip = i447[0]
  i446.m_ExtremumValue = i447[1]
  i446.m_AsymptoteSlip = i447[2]
  i446.m_AsymptoteValue = i447[3]
  i446.m_Stiffness = i447[4]
  return i446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i449 = data
  i448.m_LowerAngle = i449[0]
  i448.m_UpperAngle = i449[1]
  return i448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i451 = data
  i450.m_MotorSpeed = i451[0]
  i450.m_MaximumMotorTorque = i451[1]
  return i450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i453 = data
  i452.m_DampingRatio = i453[0]
  i452.m_Frequency = i453[1]
  i452.m_Angle = i453[2]
  return i452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i455 = data
  i454.m_LowerTranslation = i455[0]
  i454.m_UpperTranslation = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i457 = data
  i456.name = i457[0]
  i456.width = i457[1]
  i456.height = i457[2]
  i456.mipmapCount = i457[3]
  i456.anisoLevel = i457[4]
  i456.filterMode = i457[5]
  i456.hdr = !!i457[6]
  i456.format = i457[7]
  i456.wrapMode = i457[8]
  i456.alphaIsTransparency = !!i457[9]
  i456.alphaSource = i457[10]
  i456.graphicsFormat = i457[11]
  i456.sRGBTexture = !!i457[12]
  i456.desiredColorSpace = i457[13]
  i456.wrapU = i457[14]
  i456.wrapV = i457[15]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i458 = root || new pc.UnityMaterial()
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'shader')
  i458.renderQueue = i459[3]
  i458.enableInstancing = !!i459[4]
  var i461 = i459[5]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i461[i + 0]) );
  }
  i458.floatParameters = i460
  var i463 = i459[6]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i463[i + 0]) );
  }
  i458.colorParameters = i462
  var i465 = i459[7]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i465[i + 0]) );
  }
  i458.vectorParameters = i464
  var i467 = i459[8]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i467[i + 0]) );
  }
  i458.textureParameters = i466
  var i469 = i459[9]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i469[i + 0]) );
  }
  i458.materialFlags = i468
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = new pc.Color(i477[1], i477[2], i477[3], i477[4])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i481 = data
  i480.name = i481[0]
  i480.value = new pc.Vec4( i481[1], i481[2], i481[3], i481[4] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i485 = data
  i484.name = i485[0]
  request.r(i485[1], i485[2], 0, i484, 'value')
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i489 = data
  i488.name = i489[0]
  i488.enabled = !!i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i491 = data
  i490.position = new pc.Vec3( i491[0], i491[1], i491[2] )
  i490.scale = new pc.Vec3( i491[3], i491[4], i491[5] )
  i490.rotation = new pc.Quat(i491[6], i491[7], i491[8], i491[9])
  return i490
}

Deserializers["BulletController"] = function (request, data, root) {
  var i492 = root || request.c( 'BulletController' )
  var i493 = data
  i492.speed = i493[0]
  i492.damage = i493[1]
  i492.lifeTime = i493[2]
  request.r(i493[3], i493[4], 0, i492, 'hitMonsterSound')
  request.r(i493[5], i493[6], 0, i492, 'hitSound')
  i492.isHit = !!i493[7]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i495 = data
  i494.usedByComposite = !!i495[0]
  i494.autoTiling = !!i495[1]
  i494.size = new pc.Vec2( i495[2], i495[3] )
  i494.edgeRadius = i495[4]
  i494.enabled = !!i495[5]
  i494.isTrigger = !!i495[6]
  i494.usedByEffector = !!i495[7]
  i494.density = i495[8]
  i494.offset = new pc.Vec2( i495[9], i495[10] )
  request.r(i495[11], i495[12], 0, i494, 'material')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i497 = data
  i496.color = new pc.Color(i497[0], i497[1], i497[2], i497[3])
  request.r(i497[4], i497[5], 0, i496, 'sprite')
  i496.flipX = !!i497[6]
  i496.flipY = !!i497[7]
  i496.drawMode = i497[8]
  i496.size = new pc.Vec2( i497[9], i497[10] )
  i496.tileMode = i497[11]
  i496.adaptiveModeThreshold = i497[12]
  i496.maskInteraction = i497[13]
  i496.spriteSortPoint = i497[14]
  i496.enabled = !!i497[15]
  request.r(i497[16], i497[17], 0, i496, 'sharedMaterial')
  var i499 = i497[18]
  var i498 = []
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 2, i498, '')
  }
  i496.sharedMaterials = i498
  i496.receiveShadows = !!i497[19]
  i496.shadowCastingMode = i497[20]
  i496.sortingLayerID = i497[21]
  i496.sortingOrder = i497[22]
  i496.lightmapIndex = i497[23]
  i496.lightmapSceneIndex = i497[24]
  i496.lightmapScaleOffset = new pc.Vec4( i497[25], i497[26], i497[27], i497[28] )
  i496.lightProbeUsage = i497[29]
  i496.reflectionProbeUsage = i497[30]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i505 = data
  var i507 = i505[0]
  var i506 = []
  for(var i = 0; i < i507.length; i += 3) {
    i506.push( new pc.Vec3( i507[i + 0], i507[i + 1], i507[i + 2] ) );
  }
  i504.positions = i506
  i504.positionCount = i505[1]
  i504.time = i505[2]
  i504.startWidth = i505[3]
  i504.endWidth = i505[4]
  i504.widthMultiplier = i505[5]
  i504.autodestruct = !!i505[6]
  i504.emitting = !!i505[7]
  i504.numCornerVertices = i505[8]
  i504.numCapVertices = i505[9]
  i504.minVertexDistance = i505[10]
  i504.colorGradient = i505[11] ? new pc.ColorGradient(i505[11][0], i505[11][1], i505[11][2]) : null
  i504.startColor = new pc.Color(i505[12], i505[13], i505[14], i505[15])
  i504.endColor = new pc.Color(i505[16], i505[17], i505[18], i505[19])
  i504.generateLightingData = !!i505[20]
  i504.textureMode = i505[21]
  i504.alignment = i505[22]
  i504.widthCurve = new pc.AnimationCurve( { keys_flow: i505[23] } )
  i504.enabled = !!i505[24]
  request.r(i505[25], i505[26], 0, i504, 'sharedMaterial')
  var i509 = i505[27]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i504.sharedMaterials = i508
  i504.receiveShadows = !!i505[28]
  i504.shadowCastingMode = i505[29]
  i504.sortingLayerID = i505[30]
  i504.sortingOrder = i505[31]
  i504.lightmapIndex = i505[32]
  i504.lightmapSceneIndex = i505[33]
  i504.lightmapScaleOffset = new pc.Vec4( i505[34], i505[35], i505[36], i505[37] )
  i504.lightProbeUsage = i505[38]
  i504.reflectionProbeUsage = i505[39]
  return i504
}

Deserializers["TraiController"] = function (request, data, root) {
  var i512 = root || request.c( 'TraiController' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'trail')
  i512.baseWidth = i513[2]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i515 = data
  i514.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i515[0], i514.main)
  i514.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i515[1], i514.colorBySpeed)
  i514.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i515[2], i514.colorOverLifetime)
  i514.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i515[3], i514.emission)
  i514.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i515[4], i514.rotationBySpeed)
  i514.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i515[5], i514.rotationOverLifetime)
  i514.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i515[6], i514.shape)
  i514.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i515[7], i514.sizeBySpeed)
  i514.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i515[8], i514.sizeOverLifetime)
  i514.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i515[9], i514.textureSheetAnimation)
  i514.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i515[10], i514.velocityOverLifetime)
  i514.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i515[11], i514.noise)
  i514.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i515[12], i514.inheritVelocity)
  i514.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i515[13], i514.forceOverLifetime)
  i514.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i515[14], i514.limitVelocityOverLifetime)
  i514.useAutoRandomSeed = !!i515[15]
  i514.randomSeed = i515[16]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemMain()
  var i517 = data
  i516.duration = i517[0]
  i516.loop = !!i517[1]
  i516.prewarm = !!i517[2]
  i516.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[3], i516.startDelay)
  i516.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[4], i516.startLifetime)
  i516.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[5], i516.startSpeed)
  i516.startSize3D = !!i517[6]
  i516.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[7], i516.startSizeX)
  i516.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[8], i516.startSizeY)
  i516.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[9], i516.startSizeZ)
  i516.startRotation3D = !!i517[10]
  i516.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[11], i516.startRotationX)
  i516.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[12], i516.startRotationY)
  i516.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[13], i516.startRotationZ)
  i516.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i517[14], i516.startColor)
  i516.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[15], i516.gravityModifier)
  i516.simulationSpace = i517[16]
  request.r(i517[17], i517[18], 0, i516, 'customSimulationSpace')
  i516.simulationSpeed = i517[19]
  i516.useUnscaledTime = !!i517[20]
  i516.scalingMode = i517[21]
  i516.playOnAwake = !!i517[22]
  i516.maxParticles = i517[23]
  i516.emitterVelocityMode = i517[24]
  i516.stopAction = i517[25]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i518 = root || new pc.MinMaxCurve()
  var i519 = data
  i518.mode = i519[0]
  i518.curveMin = new pc.AnimationCurve( { keys_flow: i519[1] } )
  i518.curveMax = new pc.AnimationCurve( { keys_flow: i519[2] } )
  i518.curveMultiplier = i519[3]
  i518.constantMin = i519[4]
  i518.constantMax = i519[5]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i520 = root || new pc.MinMaxGradient()
  var i521 = data
  i520.mode = i521[0]
  i520.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i521[1], i520.gradientMin)
  i520.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i521[2], i520.gradientMax)
  i520.colorMin = new pc.Color(i521[3], i521[4], i521[5], i521[6])
  i520.colorMax = new pc.Color(i521[7], i521[8], i521[9], i521[10])
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i523 = data
  i522.mode = i523[0]
  var i525 = i523[1]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i525[i + 0]) );
  }
  i522.colorKeys = i524
  var i527 = i523[2]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i527[i + 0]) );
  }
  i522.alphaKeys = i526
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemColorBySpeed()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i529[1], i528.color)
  i528.range = new pc.Vec2( i529[2], i529[3] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i533 = data
  i532.color = new pc.Color(i533[0], i533[1], i533[2], i533[3])
  i532.time = i533[4]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i537 = data
  i536.alpha = i537[0]
  i536.time = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemColorOverLifetime()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i539[1], i538.color)
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemEmitter()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[1], i540.rateOverTime)
  i540.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.rateOverDistance)
  var i543 = i541[3]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i543[i + 0]) );
  }
  i540.bursts = i542
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemBurst()
  var i547 = data
  i546.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[0], i546.count)
  i546.cycleCount = i547[1]
  i546.minCount = i547[2]
  i546.maxCount = i547[3]
  i546.repeatInterval = i547[4]
  i546.time = i547[5]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemRotationBySpeed()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.x)
  i548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.y)
  i548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[3], i548.z)
  i548.separateAxes = !!i549[4]
  i548.range = new pc.Vec2( i549[5], i549[6] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemRotationOverLifetime()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[1], i550.x)
  i550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[2], i550.y)
  i550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[3], i550.z)
  i550.separateAxes = !!i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemShape()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.shapeType = i553[1]
  i552.randomDirectionAmount = i553[2]
  i552.sphericalDirectionAmount = i553[3]
  i552.randomPositionAmount = i553[4]
  i552.alignToDirection = !!i553[5]
  i552.radius = i553[6]
  i552.radiusMode = i553[7]
  i552.radiusSpread = i553[8]
  i552.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[9], i552.radiusSpeed)
  i552.radiusThickness = i553[10]
  i552.angle = i553[11]
  i552.length = i553[12]
  i552.boxThickness = new pc.Vec3( i553[13], i553[14], i553[15] )
  i552.meshShapeType = i553[16]
  request.r(i553[17], i553[18], 0, i552, 'mesh')
  request.r(i553[19], i553[20], 0, i552, 'meshRenderer')
  request.r(i553[21], i553[22], 0, i552, 'skinnedMeshRenderer')
  i552.useMeshMaterialIndex = !!i553[23]
  i552.meshMaterialIndex = i553[24]
  i552.useMeshColors = !!i553[25]
  i552.normalOffset = i553[26]
  i552.arc = i553[27]
  i552.arcMode = i553[28]
  i552.arcSpread = i553[29]
  i552.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[30], i552.arcSpeed)
  i552.donutRadius = i553[31]
  i552.position = new pc.Vec3( i553[32], i553[33], i553[34] )
  i552.rotation = new pc.Vec3( i553[35], i553[36], i553[37] )
  i552.scale = new pc.Vec3( i553[38], i553[39], i553[40] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemSizeBySpeed()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  i554.range = new pc.Vec2( i555[5], i555[6] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemSizeOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.mode = i559[1]
  i558.animation = i559[2]
  i558.numTilesX = i559[3]
  i558.numTilesY = i559[4]
  i558.useRandomRow = !!i559[5]
  i558.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[6], i558.frameOverTime)
  i558.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[7], i558.startFrame)
  i558.cycleCount = i559[8]
  i558.rowIndex = i559[9]
  i558.flipU = i559[10]
  i558.flipV = i559[11]
  i558.spriteCount = i559[12]
  var i561 = i559[13]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.sprites = i560
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[4], i564.radial)
  i564.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[5], i564.speedModifier)
  i564.space = i565[6]
  i564.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[7], i564.orbitalX)
  i564.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[8], i564.orbitalY)
  i564.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[9], i564.orbitalZ)
  i564.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[10], i564.orbitalOffsetX)
  i564.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[11], i564.orbitalOffsetY)
  i564.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[12], i564.orbitalOffsetZ)
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemNoise()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.separateAxes = !!i567[1]
  i566.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.strengthX)
  i566.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.strengthY)
  i566.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[4], i566.strengthZ)
  i566.frequency = i567[5]
  i566.damping = !!i567[6]
  i566.octaveCount = i567[7]
  i566.octaveMultiplier = i567[8]
  i566.octaveScale = i567[9]
  i566.quality = i567[10]
  i566.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[11], i566.scrollSpeed)
  i566.scrollSpeedMultiplier = i567[12]
  i566.remapEnabled = !!i567[13]
  i566.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[14], i566.remapX)
  i566.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[15], i566.remapY)
  i566.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[16], i566.remapZ)
  i566.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[17], i566.positionAmount)
  i566.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[18], i566.rotationAmount)
  i566.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[19], i566.sizeAmount)
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemInheritVelocity()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.mode = i569[1]
  i568.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.curve)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemForceOverLifetime()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.space = i571[4]
  i570.randomized = !!i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.limit)
  i572.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.limitX)
  i572.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.limitY)
  i572.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.limitZ)
  i572.dampen = i573[5]
  i572.separateAxes = !!i573[6]
  i572.space = i573[7]
  i572.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[8], i572.drag)
  i572.multiplyDragByParticleSize = !!i573[9]
  i572.multiplyDragByParticleVelocity = !!i573[10]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'mesh')
  i574.meshCount = i575[2]
  i574.activeVertexStreamsCount = i575[3]
  i574.alignment = i575[4]
  i574.renderMode = i575[5]
  i574.sortMode = i575[6]
  i574.lengthScale = i575[7]
  i574.velocityScale = i575[8]
  i574.cameraVelocityScale = i575[9]
  i574.normalDirection = i575[10]
  i574.sortingFudge = i575[11]
  i574.minParticleSize = i575[12]
  i574.maxParticleSize = i575[13]
  i574.pivot = new pc.Vec3( i575[14], i575[15], i575[16] )
  request.r(i575[17], i575[18], 0, i574, 'trailMaterial')
  i574.applyActiveColorSpace = !!i575[19]
  i574.enabled = !!i575[20]
  request.r(i575[21], i575[22], 0, i574, 'sharedMaterial')
  var i577 = i575[23]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.sharedMaterials = i576
  i574.receiveShadows = !!i575[24]
  i574.shadowCastingMode = i575[25]
  i574.sortingLayerID = i575[26]
  i574.sortingOrder = i575[27]
  i574.lightmapIndex = i575[28]
  i574.lightmapSceneIndex = i575[29]
  i574.lightmapScaleOffset = new pc.Vec4( i575[30], i575[31], i575[32], i575[33] )
  i574.lightProbeUsage = i575[34]
  i574.reflectionProbeUsage = i575[35]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i579 = data
  i578.name = i579[0]
  i578.index = i579[1]
  i578.startup = !!i579[2]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i581 = data
  i580.aspect = i581[0]
  i580.orthographic = !!i581[1]
  i580.orthographicSize = i581[2]
  i580.backgroundColor = new pc.Color(i581[3], i581[4], i581[5], i581[6])
  i580.nearClipPlane = i581[7]
  i580.farClipPlane = i581[8]
  i580.fieldOfView = i581[9]
  i580.depth = i581[10]
  i580.clearFlags = i581[11]
  i580.cullingMask = i581[12]
  i580.rect = i581[13]
  request.r(i581[14], i581[15], 0, i580, 'targetTexture')
  i580.usePhysicalProperties = !!i581[16]
  i580.focalLength = i581[17]
  i580.sensorSize = new pc.Vec2( i581[18], i581[19] )
  i580.lensShift = new pc.Vec2( i581[20], i581[21] )
  i580.gateFit = i581[22]
  i580.commandBufferCount = i581[23]
  i580.cameraType = i581[24]
  i580.enabled = !!i581[25]
  return i580
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_FirstSelected')
  i582.m_sendNavigationEvents = !!i583[2]
  i582.m_DragThreshold = i583[3]
  return i582
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i585 = data
  i584.m_HorizontalAxis = i585[0]
  i584.m_VerticalAxis = i585[1]
  i584.m_SubmitButton = i585[2]
  i584.m_CancelButton = i585[3]
  i584.m_InputActionsPerSecond = i585[4]
  i584.m_RepeatDelay = i585[5]
  i584.m_ForceModuleActive = !!i585[6]
  i584.m_SendPointerHoverToParent = !!i585[7]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i587 = data
  i586.pivot = new pc.Vec2( i587[0], i587[1] )
  i586.anchorMin = new pc.Vec2( i587[2], i587[3] )
  i586.anchorMax = new pc.Vec2( i587[4], i587[5] )
  i586.sizeDelta = new pc.Vec2( i587[6], i587[7] )
  i586.anchoredPosition3D = new pc.Vec3( i587[8], i587[9], i587[10] )
  i586.rotation = new pc.Quat(i587[11], i587[12], i587[13], i587[14])
  i586.scale = new pc.Vec3( i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i589 = data
  i588.planeDistance = i589[0]
  i588.referencePixelsPerUnit = i589[1]
  i588.isFallbackOverlay = !!i589[2]
  i588.renderMode = i589[3]
  i588.renderOrder = i589[4]
  i588.sortingLayerName = i589[5]
  i588.sortingOrder = i589[6]
  i588.scaleFactor = i589[7]
  request.r(i589[8], i589[9], 0, i588, 'worldCamera')
  i588.overrideSorting = !!i589[10]
  i588.pixelPerfect = !!i589[11]
  i588.targetDisplay = i589[12]
  i588.overridePixelPerfect = !!i589[13]
  i588.enabled = !!i589[14]
  return i588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i591 = data
  i590.m_UiScaleMode = i591[0]
  i590.m_ReferencePixelsPerUnit = i591[1]
  i590.m_ScaleFactor = i591[2]
  i590.m_ReferenceResolution = new pc.Vec2( i591[3], i591[4] )
  i590.m_ScreenMatchMode = i591[5]
  i590.m_MatchWidthOrHeight = i591[6]
  i590.m_PhysicalUnit = i591[7]
  i590.m_FallbackScreenDPI = i591[8]
  i590.m_DefaultSpriteDPI = i591[9]
  i590.m_DynamicPixelsPerUnit = i591[10]
  i590.m_PresetInfoIsWorld = !!i591[11]
  return i590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i593 = data
  i592.m_IgnoreReversedGraphics = !!i593[0]
  i592.m_BlockingObjects = i593[1]
  i592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i593[2] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i595 = data
  i594.cullTransparentMesh = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i597 = data
  i596.m_AspectMode = i597[0]
  i596.m_AspectRatio = i597[1]
  return i596
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_Texture')
  i598.m_UVRect = UnityEngine.Rect.MinMaxRect(i599[2], i599[3], i599[4], i599[5])
  request.r(i599[6], i599[7], 0, i598, 'm_Material')
  i598.m_Maskable = !!i599[8]
  i598.m_Color = new pc.Color(i599[9], i599[10], i599[11], i599[12])
  i598.m_RaycastTarget = !!i599[13]
  i598.m_RaycastPadding = new pc.Vec4( i599[14], i599[15], i599[16], i599[17] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i601 = data
  i600.sortingLayerIndex = i601[0]
  i600.sortingOrder = i601[1]
  i600.sortingLayerName = i601[2]
  i600.enabled = !!i601[3]
  return i600
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i602 = root || request.c( 'PlayerController' )
  var i603 = data
  i602.OnAttack = request.d('System.Action', i603[0], i602.OnAttack)
  i602.OnStopAttack = request.d('System.Action', i603[1], i602.OnStopAttack)
  var i605 = i603[2]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('Piece', i605[i + 0]));
  }
  i602.pieces = i604
  var i607 = i603[3]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('PlayerTrigger')))
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 1, i606, '')
  }
  i602.triggers = i606
  request.r(i603[4], i603[5], 0, i602, 'deadSFX')
  i602.maxForce = new pc.Vec2( i603[6], i603[7] )
  i602.minForce = new pc.Vec2( i603[8], i603[9] )
  i602.onAttack = !!i603[10]
  i602.isDead = !!i603[11]
  return i602
}

Deserializers["System.Action"] = function (request, data, root) {
  var i608 = root || request.c( 'System.Action' )
  var i609 = data
  return i608
}

Deserializers["Piece"] = function (request, data, root) {
  var i612 = root || request.c( 'Piece' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'Joint')
  request.r(i613[2], i613[3], 0, i612, 'Rb')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i617 = data
  i616.bodyType = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'material')
  i616.simulated = !!i617[3]
  i616.useAutoMass = !!i617[4]
  i616.mass = i617[5]
  i616.drag = i617[6]
  i616.angularDrag = i617[7]
  i616.gravityScale = i617[8]
  i616.collisionDetectionMode = i617[9]
  i616.sleepMode = i617[10]
  i616.constraints = i617[11]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i619 = data
  i618.useLimits = !!i619[0]
  i618.limits = request.d('UnityEngine.JointAngleLimits2D', i619[1], i618.limits)
  i618.useMotor = !!i619[2]
  i618.motor = request.d('UnityEngine.JointMotor2D', i619[3], i618.motor)
  i618.anchor = new pc.Vec2( i619[4], i619[5] )
  i618.connectedAnchor = new pc.Vec2( i619[6], i619[7] )
  i618.autoConfigureConnectedAnchor = !!i619[8]
  request.r(i619[9], i619[10], 0, i618, 'connectedBody')
  i618.breakForce = i619[11]
  i618.breakTorque = i619[12]
  i618.enableCollision = !!i619[13]
  i618.enabled = !!i619[14]
  return i618
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i620 = root || request.c( 'PlayerTrigger' )
  var i621 = data
  i620.OnContactZombie = request.d('System.Action', i621[0], i620.OnContactZombie)
  return i620
}

Deserializers["GunController"] = function (request, data, root) {
  var i622 = root || request.c( 'GunController' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'aim')
  request.r(i623[2], i623[3], 0, i622, 'bulletPrefab')
  request.r(i623[4], i623[5], 0, i622, 'VFX')
  request.r(i623[6], i623[7], 0, i622, 'SFX')
  i622.timeCD = i623[8]
  i622.onCD = !!i623[9]
  return i622
}

Deserializers["ActionPerTime"] = function (request, data, root) {
  var i624 = root || request.c( 'ActionPerTime' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'player')
  i624.action = request.d('UnityEngine.Events.UnityEvent', i625[2], i624.action)
  i624.isPause = !!i625[3]
  return i624
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i627 = data
  i626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i627[0], i626.m_PersistentCalls)
  return i626
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i629 = data
  var i631 = i629[0]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i631.length; i += 1) {
    i630.add(request.d('UnityEngine.Events.PersistentCall', i631[i + 0]));
  }
  i628.m_Calls = i630
  return i628
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Target')
  i634.m_TargetAssemblyTypeName = i635[2]
  i634.m_MethodName = i635[3]
  i634.m_Mode = i635[4]
  i634.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i635[5], i634.m_Arguments)
  i634.m_CallState = i635[6]
  return i634
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_ObjectArgument')
  i636.m_ObjectArgumentAssemblyTypeName = i637[2]
  i636.m_IntArgument = i637[3]
  i636.m_FloatArgument = i637[4]
  i636.m_StringArgument = i637[5]
  i636.m_BoolArgument = !!i637[6]
  return i636
}

Deserializers["ShootAnimation"] = function (request, data, root) {
  var i638 = root || request.c( 'ShootAnimation' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'player')
  request.r(i639[2], i639[3], 0, i638, 'left')
  request.r(i639[4], i639[5], 0, i638, 'right')
  i638.shootAngleLimitMax = i639[6]
  i638.shootAngleLimitMin = i639[7]
  i638.normalAngleLimitMax = i639[8]
  i638.normalAngleLimitMin = i639[9]
  i638.timePadding = i639[10]
  i638.timeDelay = i639[11]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'clip')
  request.r(i641[2], i641[3], 0, i640, 'outputAudioMixerGroup')
  i640.playOnAwake = !!i641[4]
  i640.loop = !!i641[5]
  i640.time = i641[6]
  i640.volume = i641[7]
  i640.pitch = i641[8]
  i640.enabled = !!i641[9]
  return i640
}

Deserializers["BonkController"] = function (request, data, root) {
  var i642 = root || request.c( 'BonkController' )
  var i643 = data
  i642.damage = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'hitSound')
  return i642
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i644 = root || request.c( 'BalanceController' )
  var i645 = data
  i644.targetRotation = i645[0]
  i644.force = i645[1]
  return i644
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i646 = root || request.c( 'MonsterController' )
  var i647 = data
  i646.maxHP = i647[0]
  i646.currentHP = i647[1]
  var i649 = i647[2]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Piece', i649[i + 0]));
  }
  i646.pieces = i648
  var i651 = i647[3]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPart')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i646.parts = i650
  request.r(i647[4], i647[5], 0, i646, 'bloodPrefab')
  request.r(i647[6], i647[7], 0, i646, 'deadSFX')
  i646.maxForce = new pc.Vec2( i647[8], i647[9] )
  i646.minForce = new pc.Vec2( i647[10], i647[11] )
  request.r(i647[12], i647[13], 0, i646, 'balance')
  i646.isDead = !!i647[14]
  i646.speedX = i647[15]
  i646.speedY = i647[16]
  request.r(i647[17], i647[18], 0, i646, 'body')
  request.r(i647[19], i647[20], 0, i646, 'leftHand')
  request.r(i647[21], i647[22], 0, i646, 'rightHand')
  request.r(i647[23], i647[24], 0, i646, 'leftLeg')
  request.r(i647[25], i647[26], 0, i646, 'rightLeg')
  request.r(i647[27], i647[28], 0, i646, 'jump')
  request.r(i647[29], i647[30], 0, i646, 'checkGround')
  return i646
}

Deserializers["BodyPart"] = function (request, data, root) {
  var i654 = root || request.c( 'BodyPart' )
  var i655 = data
  return i654
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i656 = root || request.c( 'CheckGround' )
  var i657 = data
  i656.onGround = !!i657[0]
  i656.layerMask = UnityEngine.LayerMask.FromIntegerValue( i657[1] )
  i656.distance = i657[2]
  return i656
}

Deserializers["JumpController"] = function (request, data, root) {
  var i658 = root || request.c( 'JumpController' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'body')
  i658.jumpForce = new pc.Vec2( i659[2], i659[3] )
  i658.timeCD = i659[4]
  i658.onCD = !!i659[5]
  return i658
}

Deserializers["Trigger"] = function (request, data, root) {
  var i660 = root || request.c( 'Trigger' )
  var i661 = data
  return i660
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button' )
  var i663 = data
  i662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i663[0], i662.m_OnClick)
  i662.m_Navigation = request.d('UnityEngine.UI.Navigation', i663[1], i662.m_Navigation)
  i662.m_Transition = i663[2]
  i662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i663[3], i662.m_Colors)
  i662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i663[4], i662.m_SpriteState)
  i662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i663[5], i662.m_AnimationTriggers)
  i662.m_Interactable = !!i663[6]
  request.r(i663[7], i663[8], 0, i662, 'm_TargetGraphic')
  return i662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i665 = data
  i664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i665[0], i664.m_PersistentCalls)
  return i664
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i667 = data
  i666.m_Mode = i667[0]
  i666.m_WrapAround = !!i667[1]
  request.r(i667[2], i667[3], 0, i666, 'm_SelectOnUp')
  request.r(i667[4], i667[5], 0, i666, 'm_SelectOnDown')
  request.r(i667[6], i667[7], 0, i666, 'm_SelectOnLeft')
  request.r(i667[8], i667[9], 0, i666, 'm_SelectOnRight')
  return i666
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i669 = data
  i668.m_NormalColor = new pc.Color(i669[0], i669[1], i669[2], i669[3])
  i668.m_HighlightedColor = new pc.Color(i669[4], i669[5], i669[6], i669[7])
  i668.m_PressedColor = new pc.Color(i669[8], i669[9], i669[10], i669[11])
  i668.m_SelectedColor = new pc.Color(i669[12], i669[13], i669[14], i669[15])
  i668.m_DisabledColor = new pc.Color(i669[16], i669[17], i669[18], i669[19])
  i668.m_ColorMultiplier = i669[20]
  i668.m_FadeDuration = i669[21]
  return i668
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_HighlightedSprite')
  request.r(i671[2], i671[3], 0, i670, 'm_PressedSprite')
  request.r(i671[4], i671[5], 0, i670, 'm_SelectedSprite')
  request.r(i671[6], i671[7], 0, i670, 'm_DisabledSprite')
  return i670
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i673 = data
  i672.m_NormalTrigger = i673[0]
  i672.m_HighlightedTrigger = i673[1]
  i672.m_PressedTrigger = i673[2]
  i672.m_SelectedTrigger = i673[3]
  i672.m_DisabledTrigger = i673[4]
  return i672
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Image' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_Sprite')
  i674.m_Type = i675[2]
  i674.m_PreserveAspect = !!i675[3]
  i674.m_FillCenter = !!i675[4]
  i674.m_FillMethod = i675[5]
  i674.m_FillAmount = i675[6]
  i674.m_FillClockwise = !!i675[7]
  i674.m_FillOrigin = i675[8]
  i674.m_UseSpriteMesh = !!i675[9]
  i674.m_PixelsPerUnitMultiplier = i675[10]
  request.r(i675[11], i675[12], 0, i674, 'm_Material')
  i674.m_Maskable = !!i675[13]
  i674.m_Color = new pc.Color(i675[14], i675[15], i675[16], i675[17])
  i674.m_RaycastTarget = !!i675[18]
  i674.m_RaycastPadding = new pc.Vec4( i675[19], i675[20], i675[21], i675[22] )
  return i674
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i676 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i677 = data
  i676.targetIsSelf = !!i677[0]
  request.r(i677[1], i677[2], 0, i676, 'targetGO')
  i676.tweenTargetIsTargetGO = !!i677[3]
  i676.delay = i677[4]
  i676.duration = i677[5]
  i676.easeType = i677[6]
  i676.easeCurve = new pc.AnimationCurve( { keys_flow: i677[7] } )
  i676.loopType = i677[8]
  i676.loops = i677[9]
  i676.id = i677[10]
  i676.isRelative = !!i677[11]
  i676.isFrom = !!i677[12]
  i676.isIndependentUpdate = !!i677[13]
  i676.autoKill = !!i677[14]
  i676.autoGenerate = !!i677[15]
  i676.isActive = !!i677[16]
  i676.isValid = !!i677[17]
  request.r(i677[18], i677[19], 0, i676, 'target')
  i676.animationType = i677[20]
  i676.targetType = i677[21]
  i676.forcedTargetType = i677[22]
  i676.autoPlay = !!i677[23]
  i676.useTargetAsV3 = !!i677[24]
  i676.endValueFloat = i677[25]
  i676.endValueV3 = new pc.Vec3( i677[26], i677[27], i677[28] )
  i676.endValueV2 = new pc.Vec2( i677[29], i677[30] )
  i676.endValueColor = new pc.Color(i677[31], i677[32], i677[33], i677[34])
  i676.endValueString = i677[35]
  i676.endValueRect = UnityEngine.Rect.MinMaxRect(i677[36], i677[37], i677[38], i677[39])
  request.r(i677[40], i677[41], 0, i676, 'endValueTransform')
  i676.optionalBool0 = !!i677[42]
  i676.optionalBool1 = !!i677[43]
  i676.optionalFloat0 = i677[44]
  i676.optionalInt0 = i677[45]
  i676.optionalRotationMode = i677[46]
  i676.optionalScrambleMode = i677[47]
  i676.optionalShakeRandomnessMode = i677[48]
  i676.optionalString = i677[49]
  i676.updateType = i677[50]
  i676.isSpeedBased = !!i677[51]
  i676.hasOnStart = !!i677[52]
  i676.hasOnPlay = !!i677[53]
  i676.hasOnUpdate = !!i677[54]
  i676.hasOnStepComplete = !!i677[55]
  i676.hasOnComplete = !!i677[56]
  i676.hasOnTweenCreated = !!i677[57]
  i676.hasOnRewind = !!i677[58]
  i676.onStart = request.d('UnityEngine.Events.UnityEvent', i677[59], i676.onStart)
  i676.onPlay = request.d('UnityEngine.Events.UnityEvent', i677[60], i676.onPlay)
  i676.onUpdate = request.d('UnityEngine.Events.UnityEvent', i677[61], i676.onUpdate)
  i676.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i677[62], i676.onStepComplete)
  i676.onComplete = request.d('UnityEngine.Events.UnityEvent', i677[63], i676.onComplete)
  i676.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i677[64], i676.onTweenCreated)
  i676.onRewind = request.d('UnityEngine.Events.UnityEvent', i677[65], i676.onRewind)
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

Deserializers["LayoutController"] = function (request, data, root) {
  var i682 = root || request.c( 'LayoutController' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'cam')
  var i685 = i683[2]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i682.tut = i684
  return i682
}

Deserializers["GameController"] = function (request, data, root) {
  var i688 = root || request.c( 'GameController' )
  var i689 = data
  i688.OnNotClear = request.d('System.Action', i689[0], i688.OnNotClear)
  i688.OnClear = request.d('System.Action', i689[1], i688.OnClear)
  i688.OnPause = request.d('System.Action', i689[2], i688.OnPause)
  i688.OnPlay = request.d('System.Action', i689[3], i688.OnPlay)
  var i691 = i689[4]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('Option', i691[i + 0]));
  }
  i688.options = i690
  var i693 = i689[5]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i688.levels = i692
  var i695 = i689[6]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i688.level2 = i694
  var i697 = i689[7]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i688.level3 = i696
  var i699 = i689[8]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i688.buttons = i698
  var i701 = i689[9]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 1, i700, '')
  }
  i688.tuts = i700
  request.r(i689[10], i689[11], 0, i688, 'startButton')
  request.r(i689[12], i689[13], 0, i688, 'clickSound')
  i688.numMonster = i689[14]
  i688.currentLevel = i689[15]
  request.r(i689[16], i689[17], 0, i688, 'winScene')
  request.r(i689[18], i689[19], 0, i688, 'failScene')
  return i688
}

Deserializers["Option"] = function (request, data, root) {
  var i704 = root || request.c( 'Option' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'Button')
  request.r(i705[2], i705[3], 0, i704, 'Item')
  return i704
}

Deserializers["LunaController"] = function (request, data, root) {
  var i708 = root || request.c( 'LunaController' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'BGTexture')
  i708.UseTime = !!i709[2]
  i708.TimePlay = i709[3]
  i708.StartSceneColor = new pc.Color(i709[4], i709[5], i709[6], i709[7])
  i708.WinSceneColor = new pc.Color(i709[8], i709[9], i709[10], i709[11])
  i708.FailSceneColor = new pc.Color(i709[12], i709[13], i709[14], i709[15])
  request.r(i709[16], i709[17], 0, i708, 'startScene')
  request.r(i709[18], i709[19], 0, i708, 'winScene')
  request.r(i709[20], i709[21], 0, i708, 'failScene')
  request.r(i709[22], i709[23], 0, i708, 'BGImage')
  var i711 = i709[24]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i708.CTA = i710
  request.r(i709[25], i709[26], 0, i708, 'endCard')
  return i708
}

Deserializers["AudioController"] = function (request, data, root) {
  var i714 = root || request.c( 'AudioController' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'BGM')
  request.r(i715[2], i715[3], 0, i714, 'musicSource')
  request.r(i715[4], i715[5], 0, i714, 'pool')
  return i714
}

Deserializers["PoolController"] = function (request, data, root) {
  var i716 = root || request.c( 'PoolController' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'world')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i719 = data
  i718.ambientIntensity = i719[0]
  i718.reflectionIntensity = i719[1]
  i718.ambientMode = i719[2]
  i718.ambientLight = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.ambientSkyColor = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  i718.ambientGroundColor = new pc.Color(i719[11], i719[12], i719[13], i719[14])
  i718.ambientEquatorColor = new pc.Color(i719[15], i719[16], i719[17], i719[18])
  i718.fogColor = new pc.Color(i719[19], i719[20], i719[21], i719[22])
  i718.fogEndDistance = i719[23]
  i718.fogStartDistance = i719[24]
  i718.fogDensity = i719[25]
  i718.fog = !!i719[26]
  request.r(i719[27], i719[28], 0, i718, 'skybox')
  i718.fogMode = i719[29]
  var i721 = i719[30]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i721[i + 0]) );
  }
  i718.lightmaps = i720
  i718.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i719[31], i718.lightProbes)
  i718.lightmapsMode = i719[32]
  i718.mixedBakeMode = i719[33]
  i718.environmentLightingMode = i719[34]
  i718.ambientProbe = new pc.SphericalHarmonicsL2(i719[35])
  request.r(i719[36], i719[37], 0, i718, 'customReflection')
  request.r(i719[38], i719[39], 0, i718, 'defaultReflection')
  i718.defaultReflectionMode = i719[40]
  i718.defaultReflectionResolution = i719[41]
  i718.sunLightObjectId = i719[42]
  i718.pixelLightCount = i719[43]
  i718.defaultReflectionHDR = !!i719[44]
  i718.hasLightDataAsset = !!i719[45]
  i718.hasManualGenerate = !!i719[46]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'lightmapColor')
  request.r(i725[2], i725[3], 0, i724, 'lightmapDirection')
  request.r(i725[4], i725[5], 0, i724, 'shadowMask')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i726 = root || new UnityEngine.LightProbes()
  var i727 = data
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i735[i + 0]));
  }
  i732.ShaderCompilationErrors = i734
  i732.name = i733[1]
  i732.guid = i733[2]
  var i737 = i733[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.shaderDefinedKeywords = i736
  var i739 = i733[4]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i739[i + 0]) );
  }
  i732.passes = i738
  var i741 = i733[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i741[i + 0]) );
  }
  i732.usePasses = i740
  var i743 = i733[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i743[i + 0]) );
  }
  i732.defaultParameterValues = i742
  request.r(i733[7], i733[8], 0, i732, 'unityFallbackShader')
  i732.readDepth = !!i733[9]
  i732.hasDepthOnlyPass = !!i733[10]
  i732.isCreatedByShaderGraph = !!i733[11]
  i732.disableBatching = !!i733[12]
  i732.compiled = !!i733[13]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i747 = data
  i746.shaderName = i747[0]
  i746.errorMessage = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i752 = root || new pc.UnityShaderPass()
  var i753 = data
  i752.id = i753[0]
  i752.subShaderIndex = i753[1]
  i752.name = i753[2]
  i752.passType = i753[3]
  i752.grabPassTextureName = i753[4]
  i752.usePass = !!i753[5]
  i752.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[6], i752.zTest)
  i752.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[7], i752.zWrite)
  i752.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[8], i752.culling)
  i752.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[9], i752.blending)
  i752.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[10], i752.alphaBlending)
  i752.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[11], i752.colorWriteMask)
  i752.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[12], i752.offsetUnits)
  i752.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[13], i752.offsetFactor)
  i752.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[14], i752.stencilRef)
  i752.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[15], i752.stencilReadMask)
  i752.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[16], i752.stencilWriteMask)
  i752.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[17], i752.stencilOp)
  i752.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[18], i752.stencilOpFront)
  i752.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[19], i752.stencilOpBack)
  var i755 = i753[20]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i755[i + 0]) );
  }
  i752.tags = i754
  var i757 = i753[21]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i752.passDefinedKeywords = i756
  var i759 = i753[22]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i759[i + 0]) );
  }
  i752.passDefinedKeywordGroups = i758
  var i761 = i753[23]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i761[i + 0]) );
  }
  i752.variants = i760
  var i763 = i753[24]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i763[i + 0]) );
  }
  i752.excludedVariants = i762
  i752.hasDepthReader = !!i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i765 = data
  i764.val = i765[0]
  i764.name = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i767 = data
  i766.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[0], i766.src)
  i766.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[1], i766.dst)
  i766.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[2], i766.op)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i769 = data
  i768.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[0], i768.pass)
  i768.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[1], i768.fail)
  i768.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[2], i768.zFail)
  i768.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[3], i768.comp)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.hasDiscard = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i783 = data
  i782.passId = i783[0]
  i782.subShaderIndex = i783[1]
  var i785 = i783[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i782.keywords = i784
  i782.vertexProgram = i783[3]
  i782.fragmentProgram = i783[4]
  i782.exportedForWebGl2 = !!i783[5]
  i782.readDepth = !!i783[6]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'shader')
  i788.pass = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i793 = data
  i792.name = i793[0]
  i792.type = i793[1]
  i792.value = new pc.Vec4( i793[2], i793[3], i793[4], i793[5] )
  i792.textureValue = i793[6]
  i792.shaderPropertyFlag = i793[7]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i795 = data
  i794.name = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'texture')
  i794.aabb = i795[3]
  i794.vertices = i795[4]
  i794.triangles = i795[5]
  i794.textureRect = UnityEngine.Rect.MinMaxRect(i795[6], i795[7], i795[8], i795[9])
  i794.packedRect = UnityEngine.Rect.MinMaxRect(i795[10], i795[11], i795[12], i795[13])
  i794.border = new pc.Vec4( i795[14], i795[15], i795[16], i795[17] )
  i794.transparency = i795[18]
  i794.bounds = i795[19]
  i794.pixelsPerUnit = i795[20]
  i794.textureWidth = i795[21]
  i794.textureHeight = i795[22]
  i794.nativeSize = new pc.Vec2( i795[23], i795[24] )
  i794.pivot = new pc.Vec2( i795[25], i795[26] )
  i794.textureRectOffset = new pc.Vec2( i795[27], i795[28] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i797 = data
  i796.name = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i799 = data
  i798.name = i799[0]
  i798.ascent = i799[1]
  i798.originalLineHeight = i799[2]
  i798.fontSize = i799[3]
  var i801 = i799[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i801[i + 0]) );
  }
  i798.characterInfo = i800
  request.r(i799[5], i799[6], 0, i798, 'texture')
  i798.originalFontSize = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i805 = data
  i804.index = i805[0]
  i804.advance = i805[1]
  i804.bearing = i805[2]
  i804.glyphWidth = i805[3]
  i804.glyphHeight = i805[4]
  i804.minX = i805[5]
  i804.maxX = i805[6]
  i804.minY = i805[7]
  i804.maxY = i805[8]
  i804.uvBottomLeftX = i805[9]
  i804.uvBottomLeftY = i805[10]
  i804.uvBottomRightX = i805[11]
  i804.uvBottomRightY = i805[12]
  i804.uvTopLeftX = i805[13]
  i804.uvTopLeftY = i805[14]
  i804.uvTopRightX = i805[15]
  i804.uvTopRightY = i805[16]
  return i804
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i807 = data
  i806.useSafeMode = !!i807[0]
  i806.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i807[1], i806.safeModeOptions)
  i806.timeScale = i807[2]
  i806.unscaledTimeScale = i807[3]
  i806.useSmoothDeltaTime = !!i807[4]
  i806.maxSmoothUnscaledTime = i807[5]
  i806.rewindCallbackMode = i807[6]
  i806.showUnityEditorReport = !!i807[7]
  i806.logBehaviour = i807[8]
  i806.drawGizmos = !!i807[9]
  i806.defaultRecyclable = !!i807[10]
  i806.defaultAutoPlay = i807[11]
  i806.defaultUpdateType = i807[12]
  i806.defaultTimeScaleIndependent = !!i807[13]
  i806.defaultEaseType = i807[14]
  i806.defaultEaseOvershootOrAmplitude = i807[15]
  i806.defaultEasePeriod = i807[16]
  i806.defaultAutoKill = !!i807[17]
  i806.defaultLoopType = i807[18]
  i806.debugMode = !!i807[19]
  i806.debugStoreTargetId = !!i807[20]
  i806.showPreviewPanel = !!i807[21]
  i806.storeSettingsLocation = i807[22]
  i806.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i807[23], i806.modules)
  i806.createASMDEF = !!i807[24]
  i806.showPlayingTweens = !!i807[25]
  i806.showPausedTweens = !!i807[26]
  return i806
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i809 = data
  i808.logBehaviour = i809[0]
  i808.nestedTweenFailureBehaviour = i809[1]
  return i808
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i811 = data
  i810.showPanel = !!i811[0]
  i810.audioEnabled = !!i811[1]
  i810.physicsEnabled = !!i811[2]
  i810.physics2DEnabled = !!i811[3]
  i810.spriteEnabled = !!i811[4]
  i810.uiEnabled = !!i811[5]
  i810.textMeshProEnabled = !!i811[6]
  i810.tk2DEnabled = !!i811[7]
  i810.deAudioEnabled = !!i811[8]
  i810.deUnityExtendedEnabled = !!i811[9]
  i810.epoOutlineEnabled = !!i811[10]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i815[i + 0]) );
  }
  i812.files = i814
  i812.componentToPrefabIds = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i819 = data
  i818.path = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'unityObject')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i823[i + 0]) );
  }
  i820.scriptsExecutionOrder = i822
  var i825 = i821[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i825[i + 0]) );
  }
  i820.sortingLayers = i824
  var i827 = i821[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i827[i + 0]) );
  }
  i820.cullingLayers = i826
  i820.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i821[3], i820.timeSettings)
  i820.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i821[4], i820.physicsSettings)
  i820.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i821[5], i820.physics2DSettings)
  i820.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i821[6], i820.qualitySettings)
  i820.enableRealtimeShadows = !!i821[7]
  i820.enableAutoInstancing = !!i821[8]
  i820.enableStaticBatching = !!i821[9]
  i820.enableDynamicBatching = !!i821[10]
  i820.usePreservativeDynamicBatching = !!i821[11]
  i820.lightmapEncodingQuality = i821[12]
  i820.desiredColorSpace = i821[13]
  var i829 = i821[14]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i820.allTags = i828
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  i836.value = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i841 = data
  i840.id = i841[0]
  i840.name = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i843 = data
  i842.fixedDeltaTime = i843[0]
  i842.maximumDeltaTime = i843[1]
  i842.timeScale = i843[2]
  i842.maximumParticleTimestep = i843[3]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i845 = data
  i844.gravity = new pc.Vec3( i845[0], i845[1], i845[2] )
  i844.defaultSolverIterations = i845[3]
  i844.bounceThreshold = i845[4]
  i844.autoSyncTransforms = !!i845[5]
  i844.autoSimulation = !!i845[6]
  var i847 = i845[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i847[i + 0]) );
  }
  i844.collisionMatrix = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i851 = data
  i850.enabled = !!i851[0]
  i850.layerId = i851[1]
  i850.otherLayerId = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'material')
  i852.gravity = new pc.Vec2( i853[2], i853[3] )
  i852.positionIterations = i853[4]
  i852.velocityIterations = i853[5]
  i852.velocityThreshold = i853[6]
  i852.maxLinearCorrection = i853[7]
  i852.maxAngularCorrection = i853[8]
  i852.maxTranslationSpeed = i853[9]
  i852.maxRotationSpeed = i853[10]
  i852.baumgarteScale = i853[11]
  i852.baumgarteTOIScale = i853[12]
  i852.timeToSleep = i853[13]
  i852.linearSleepTolerance = i853[14]
  i852.angularSleepTolerance = i853[15]
  i852.defaultContactOffset = i853[16]
  i852.autoSimulation = !!i853[17]
  i852.queriesHitTriggers = !!i853[18]
  i852.queriesStartInColliders = !!i853[19]
  i852.callbacksOnDisable = !!i853[20]
  i852.reuseCollisionCallbacks = !!i853[21]
  i852.autoSyncTransforms = !!i853[22]
  var i855 = i853[23]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i855[i + 0]) );
  }
  i852.collisionMatrix = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i859 = data
  i858.enabled = !!i859[0]
  i858.layerId = i859[1]
  i858.otherLayerId = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i861 = data
  var i863 = i861[0]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i863[i + 0]) );
  }
  i860.qualityLevels = i862
  var i865 = i861[1]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i860.names = i864
  i860.shadows = i861[2]
  i860.anisotropicFiltering = i861[3]
  i860.antiAliasing = i861[4]
  i860.lodBias = i861[5]
  i860.shadowCascades = i861[6]
  i860.shadowDistance = i861[7]
  i860.shadowmaskMode = i861[8]
  i860.shadowProjection = i861[9]
  i860.shadowResolution = i861[10]
  i860.softParticles = !!i861[11]
  i860.softVegetation = !!i861[12]
  i860.activeColorSpace = i861[13]
  i860.desiredColorSpace = i861[14]
  i860.masterTextureLimit = i861[15]
  i860.maxQueuedFrames = i861[16]
  i860.particleRaycastBudget = i861[17]
  i860.pixelLightCount = i861[18]
  i860.realtimeReflectionProbes = !!i861[19]
  i860.shadowCascade2Split = i861[20]
  i860.shadowCascade4Split = new pc.Vec3( i861[21], i861[22], i861[23] )
  i860.streamingMipmapsActive = !!i861[24]
  i860.vSyncCount = i861[25]
  i860.asyncUploadBufferSize = i861[26]
  i860.asyncUploadTimeSlice = i861[27]
  i860.billboardsFaceCameraPosition = !!i861[28]
  i860.shadowNearPlaneOffset = i861[29]
  i860.streamingMipmapsMemoryBudget = i861[30]
  i860.maximumLODLevel = i861[31]
  i860.streamingMipmapsAddAllCameras = !!i861[32]
  i860.streamingMipmapsMaxLevelReduction = i861[33]
  i860.streamingMipmapsRenderersPerFrame = i861[34]
  i860.resolutionScalingFixedDPIFactor = i861[35]
  i860.streamingMipmapsMaxFileIORequests = i861[36]
  i860.currentQualityLevel = i861[37]
  return i860
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[14],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[29],"72":[29],"73":[29],"74":[29],"75":[29],"76":[29],"28":[29],"77":[29],"78":[29],"79":[29],"80":[29],"81":[29],"82":[29],"83":[14],"84":[85],"86":[87],"88":[87],"20":[19],"89":[6],"90":[14],"91":[92],"93":[19],"94":[23,19],"95":[85],"96":[23,19],"97":[19],"98":[19],"99":[85,19],"100":[19,23],"101":[102],"103":[102],"104":[102],"105":[19],"106":[19],"22":[20],"44":[23,19],"24":[19],"21":[20],"107":[19],"108":[19],"109":[19],"110":[19],"111":[19],"112":[19],"113":[19],"114":[19],"115":[19],"25":[23,19],"116":[19],"117":[19],"118":[19],"119":[19],"46":[23,19],"120":[19],"121":[17],"122":[17],"18":[17],"123":[17],"124":[14],"125":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.TrailRenderer","TraiController","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","PlayerTrigger","GunController","UnityEngine.GameObject","UnityEngine.AudioSource","ActionPerTime","ShootAnimation","BonkController","BalanceController","MonsterController","BodyPart","CheckGround","JumpController","Trigger","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","LayoutController","GameController","LunaController","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/09/2026 09:47:55";

Deserializers.lunaDaysRunning = "2.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_CPGS_V02_NgocBTU";

Deserializers.lunaAppID = "42741";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1775";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4312";

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

Deserializers.buildID = "5507c5e8-6a4e-41dd-8efb-8f02d8783b28";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

