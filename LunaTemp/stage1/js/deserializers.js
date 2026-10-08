var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointSpring' )
  var i383 = data
  i382.spring = i383[0]
  i382.damper = i383[1]
  i382.targetPosition = i383[2]
  return i382
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointMotor' )
  var i385 = data
  i384.m_TargetVelocity = i385[0]
  i384.m_Force = i385[1]
  i384.m_FreeSpin = i385[2]
  return i384
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointLimits' )
  var i387 = data
  i386.m_Min = i387[0]
  i386.m_Max = i387[1]
  i386.m_Bounciness = i387[2]
  i386.m_BounceMinVelocity = i387[3]
  i386.m_ContactDistance = i387[4]
  i386.minBounce = i387[5]
  i386.maxBounce = i387[6]
  return i386
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointDrive' )
  var i389 = data
  i388.m_PositionSpring = i389[0]
  i388.m_PositionDamper = i389[1]
  i388.m_MaximumForce = i389[2]
  i388.m_UseAcceleration = i389[3]
  return i388
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i391 = data
  i390.m_Spring = i391[0]
  i390.m_Damper = i391[1]
  return i390
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i393 = data
  i392.m_Limit = i393[0]
  i392.m_Bounciness = i393[1]
  i392.m_ContactDistance = i393[2]
  return i392
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i395 = data
  i394.m_ExtremumSlip = i395[0]
  i394.m_ExtremumValue = i395[1]
  i394.m_AsymptoteSlip = i395[2]
  i394.m_AsymptoteValue = i395[3]
  i394.m_Stiffness = i395[4]
  return i394
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i397 = data
  i396.m_LowerAngle = i397[0]
  i396.m_UpperAngle = i397[1]
  return i396
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i399 = data
  i398.m_MotorSpeed = i399[0]
  i398.m_MaximumMotorTorque = i399[1]
  return i398
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i401 = data
  i400.m_DampingRatio = i401[0]
  i400.m_Frequency = i401[1]
  i400.m_Angle = i401[2]
  return i400
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i403 = data
  i402.m_LowerTranslation = i403[0]
  i402.m_UpperTranslation = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i404 = root || new pc.UnityMaterial()
  var i405 = data
  i404.name = i405[0]
  request.r(i405[1], i405[2], 0, i404, 'shader')
  i404.renderQueue = i405[3]
  i404.enableInstancing = !!i405[4]
  var i407 = i405[5]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i407[i + 0]) );
  }
  i404.floatParameters = i406
  var i409 = i405[6]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i409[i + 0]) );
  }
  i404.colorParameters = i408
  var i411 = i405[7]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i411[i + 0]) );
  }
  i404.vectorParameters = i410
  var i413 = i405[8]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i413[i + 0]) );
  }
  i404.textureParameters = i412
  var i415 = i405[9]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i415[i + 0]) );
  }
  i404.materialFlags = i414
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i419 = data
  i418.name = i419[0]
  i418.value = i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i423 = data
  i422.name = i423[0]
  i422.value = new pc.Color(i423[1], i423[2], i423[3], i423[4])
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i427 = data
  i426.name = i427[0]
  i426.value = new pc.Vec4( i427[1], i427[2], i427[3], i427[4] )
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i431 = data
  i430.name = i431[0]
  request.r(i431[1], i431[2], 0, i430, 'value')
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i435 = data
  i434.name = i435[0]
  i434.enabled = !!i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i437 = data
  i436.name = i437[0]
  i436.width = i437[1]
  i436.height = i437[2]
  i436.mipmapCount = i437[3]
  i436.anisoLevel = i437[4]
  i436.filterMode = i437[5]
  i436.hdr = !!i437[6]
  i436.format = i437[7]
  i436.wrapMode = i437[8]
  i436.alphaIsTransparency = !!i437[9]
  i436.alphaSource = i437[10]
  i436.graphicsFormat = i437[11]
  i436.sRGBTexture = !!i437[12]
  i436.desiredColorSpace = i437[13]
  i436.wrapU = i437[14]
  i436.wrapV = i437[15]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i439 = data
  i438.position = new pc.Vec3( i439[0], i439[1], i439[2] )
  i438.scale = new pc.Vec3( i439[3], i439[4], i439[5] )
  i438.rotation = new pc.Quat(i439[6], i439[7], i439[8], i439[9])
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i441 = data
  i440.bodyType = i441[0]
  request.r(i441[1], i441[2], 0, i440, 'material')
  i440.simulated = !!i441[3]
  i440.useAutoMass = !!i441[4]
  i440.mass = i441[5]
  i440.drag = i441[6]
  i440.angularDrag = i441[7]
  i440.gravityScale = i441[8]
  i440.collisionDetectionMode = i441[9]
  i440.sleepMode = i441[10]
  i440.constraints = i441[11]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i443 = data
  i442.sortingLayerIndex = i443[0]
  i442.sortingOrder = i443[1]
  i442.sortingLayerName = i443[2]
  i442.enabled = !!i443[3]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i445 = data
  i444.usedByComposite = !!i445[0]
  i444.autoTiling = !!i445[1]
  i444.size = new pc.Vec2( i445[2], i445[3] )
  i444.edgeRadius = i445[4]
  i444.enabled = !!i445[5]
  i444.isTrigger = !!i445[6]
  i444.usedByEffector = !!i445[7]
  i444.density = i445[8]
  i444.offset = new pc.Vec2( i445[9], i445[10] )
  request.r(i445[11], i445[12], 0, i444, 'material')
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i447 = data
  i446.useLimits = !!i447[0]
  i446.limits = request.d('UnityEngine.JointAngleLimits2D', i447[1], i446.limits)
  i446.useMotor = !!i447[2]
  i446.motor = request.d('UnityEngine.JointMotor2D', i447[3], i446.motor)
  i446.anchor = new pc.Vec2( i447[4], i447[5] )
  i446.connectedAnchor = new pc.Vec2( i447[6], i447[7] )
  i446.autoConfigureConnectedAnchor = !!i447[8]
  request.r(i447[9], i447[10], 0, i446, 'connectedBody')
  i446.breakForce = i447[11]
  i446.breakTorque = i447[12]
  i446.enableCollision = !!i447[13]
  i446.enabled = !!i447[14]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i449 = data
  i448.autoConfigureTarget = !!i449[0]
  i448.target = new pc.Vec2( i449[1], i449[2] )
  i448.anchor = new pc.Vec2( i449[3], i449[4] )
  i448.maxForce = i449[5]
  i448.dampingRatio = i449[6]
  i448.frequency = i449[7]
  request.r(i449[8], i449[9], 0, i448, 'connectedBody')
  i448.breakForce = i449[10]
  i448.breakTorque = i449[11]
  i448.enableCollision = !!i449[12]
  i448.enabled = !!i449[13]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i451 = data
  i450.color = new pc.Color(i451[0], i451[1], i451[2], i451[3])
  request.r(i451[4], i451[5], 0, i450, 'sprite')
  i450.flipX = !!i451[6]
  i450.flipY = !!i451[7]
  i450.drawMode = i451[8]
  i450.size = new pc.Vec2( i451[9], i451[10] )
  i450.tileMode = i451[11]
  i450.adaptiveModeThreshold = i451[12]
  i450.maskInteraction = i451[13]
  i450.spriteSortPoint = i451[14]
  i450.enabled = !!i451[15]
  request.r(i451[16], i451[17], 0, i450, 'sharedMaterial')
  var i453 = i451[18]
  var i452 = []
  for(var i = 0; i < i453.length; i += 2) {
  request.r(i453[i + 0], i453[i + 1], 2, i452, '')
  }
  i450.sharedMaterials = i452
  i450.receiveShadows = !!i451[19]
  i450.shadowCastingMode = i451[20]
  i450.sortingLayerID = i451[21]
  i450.sortingOrder = i451[22]
  i450.lightmapIndex = i451[23]
  i450.lightmapSceneIndex = i451[24]
  i450.lightmapScaleOffset = new pc.Vec4( i451[25], i451[26], i451[27], i451[28] )
  i450.lightProbeUsage = i451[29]
  i450.reflectionProbeUsage = i451[30]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i457 = data
  i456.name = i457[0]
  i456.tagId = i457[1]
  i456.enabled = !!i457[2]
  i456.isStatic = !!i457[3]
  i456.layer = i457[4]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i459 = data
  i458.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i459[0], i458.main)
  i458.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i459[1], i458.colorBySpeed)
  i458.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i459[2], i458.colorOverLifetime)
  i458.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i459[3], i458.emission)
  i458.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i459[4], i458.rotationBySpeed)
  i458.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i459[5], i458.rotationOverLifetime)
  i458.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i459[6], i458.shape)
  i458.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i459[7], i458.sizeBySpeed)
  i458.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i459[8], i458.sizeOverLifetime)
  i458.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i459[9], i458.textureSheetAnimation)
  i458.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i459[10], i458.velocityOverLifetime)
  i458.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i459[11], i458.noise)
  i458.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i459[12], i458.inheritVelocity)
  i458.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i459[13], i458.forceOverLifetime)
  i458.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i459[14], i458.limitVelocityOverLifetime)
  i458.useAutoRandomSeed = !!i459[15]
  i458.randomSeed = i459[16]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i460 = root || new pc.ParticleSystemMain()
  var i461 = data
  i460.duration = i461[0]
  i460.loop = !!i461[1]
  i460.prewarm = !!i461[2]
  i460.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[3], i460.startDelay)
  i460.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[4], i460.startLifetime)
  i460.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[5], i460.startSpeed)
  i460.startSize3D = !!i461[6]
  i460.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[7], i460.startSizeX)
  i460.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[8], i460.startSizeY)
  i460.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[9], i460.startSizeZ)
  i460.startRotation3D = !!i461[10]
  i460.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[11], i460.startRotationX)
  i460.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[12], i460.startRotationY)
  i460.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[13], i460.startRotationZ)
  i460.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i461[14], i460.startColor)
  i460.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i461[15], i460.gravityModifier)
  i460.simulationSpace = i461[16]
  request.r(i461[17], i461[18], 0, i460, 'customSimulationSpace')
  i460.simulationSpeed = i461[19]
  i460.useUnscaledTime = !!i461[20]
  i460.scalingMode = i461[21]
  i460.playOnAwake = !!i461[22]
  i460.maxParticles = i461[23]
  i460.emitterVelocityMode = i461[24]
  i460.stopAction = i461[25]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i462 = root || new pc.MinMaxCurve()
  var i463 = data
  i462.mode = i463[0]
  i462.curveMin = new pc.AnimationCurve( { keys_flow: i463[1] } )
  i462.curveMax = new pc.AnimationCurve( { keys_flow: i463[2] } )
  i462.curveMultiplier = i463[3]
  i462.constantMin = i463[4]
  i462.constantMax = i463[5]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i464 = root || new pc.MinMaxGradient()
  var i465 = data
  i464.mode = i465[0]
  i464.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i465[1], i464.gradientMin)
  i464.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i465[2], i464.gradientMax)
  i464.colorMin = new pc.Color(i465[3], i465[4], i465[5], i465[6])
  i464.colorMax = new pc.Color(i465[7], i465[8], i465[9], i465[10])
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i467 = data
  i466.mode = i467[0]
  var i469 = i467[1]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i469[i + 0]) );
  }
  i466.colorKeys = i468
  var i471 = i467[2]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i471[i + 0]) );
  }
  i466.alphaKeys = i470
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemColorBySpeed()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i473[1], i472.color)
  i472.range = new pc.Vec2( i473[2], i473[3] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i477 = data
  i476.color = new pc.Color(i477[0], i477[1], i477[2], i477[3])
  i476.time = i477[4]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i481 = data
  i480.alpha = i481[0]
  i480.time = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemColorOverLifetime()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i483[1], i482.color)
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemEmitter()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[1], i484.rateOverTime)
  i484.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[2], i484.rateOverDistance)
  var i487 = i485[3]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i487[i + 0]) );
  }
  i484.bursts = i486
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemBurst()
  var i491 = data
  i490.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[0], i490.count)
  i490.cycleCount = i491[1]
  i490.minCount = i491[2]
  i490.maxCount = i491[3]
  i490.repeatInterval = i491[4]
  i490.time = i491[5]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemRotationBySpeed()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[1], i492.x)
  i492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[2], i492.y)
  i492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[3], i492.z)
  i492.separateAxes = !!i493[4]
  i492.range = new pc.Vec2( i493[5], i493[6] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemRotationOverLifetime()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[1], i494.x)
  i494.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[2], i494.y)
  i494.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[3], i494.z)
  i494.separateAxes = !!i495[4]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemShape()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.shapeType = i497[1]
  i496.randomDirectionAmount = i497[2]
  i496.sphericalDirectionAmount = i497[3]
  i496.randomPositionAmount = i497[4]
  i496.alignToDirection = !!i497[5]
  i496.radius = i497[6]
  i496.radiusMode = i497[7]
  i496.radiusSpread = i497[8]
  i496.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[9], i496.radiusSpeed)
  i496.radiusThickness = i497[10]
  i496.angle = i497[11]
  i496.length = i497[12]
  i496.boxThickness = new pc.Vec3( i497[13], i497[14], i497[15] )
  i496.meshShapeType = i497[16]
  request.r(i497[17], i497[18], 0, i496, 'mesh')
  request.r(i497[19], i497[20], 0, i496, 'meshRenderer')
  request.r(i497[21], i497[22], 0, i496, 'skinnedMeshRenderer')
  i496.useMeshMaterialIndex = !!i497[23]
  i496.meshMaterialIndex = i497[24]
  i496.useMeshColors = !!i497[25]
  i496.normalOffset = i497[26]
  i496.arc = i497[27]
  i496.arcMode = i497[28]
  i496.arcSpread = i497[29]
  i496.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[30], i496.arcSpeed)
  i496.donutRadius = i497[31]
  i496.position = new pc.Vec3( i497[32], i497[33], i497[34] )
  i496.rotation = new pc.Vec3( i497[35], i497[36], i497[37] )
  i496.scale = new pc.Vec3( i497[38], i497[39], i497[40] )
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemSizeBySpeed()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[1], i498.x)
  i498.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[2], i498.y)
  i498.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[3], i498.z)
  i498.separateAxes = !!i499[4]
  i498.range = new pc.Vec2( i499[5], i499[6] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemSizeOverLifetime()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[1], i500.x)
  i500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[2], i500.y)
  i500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[3], i500.z)
  i500.separateAxes = !!i501[4]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.mode = i503[1]
  i502.animation = i503[2]
  i502.numTilesX = i503[3]
  i502.numTilesY = i503[4]
  i502.useRandomRow = !!i503[5]
  i502.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[6], i502.frameOverTime)
  i502.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[7], i502.startFrame)
  i502.cycleCount = i503[8]
  i502.rowIndex = i503[9]
  i502.flipU = i503[10]
  i502.flipV = i503[11]
  i502.spriteCount = i503[12]
  var i505 = i503[13]
  var i504 = []
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 2, i504, '')
  }
  i502.sprites = i504
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[1], i508.x)
  i508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[2], i508.y)
  i508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[3], i508.z)
  i508.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[4], i508.radial)
  i508.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[5], i508.speedModifier)
  i508.space = i509[6]
  i508.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[7], i508.orbitalX)
  i508.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[8], i508.orbitalY)
  i508.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[9], i508.orbitalZ)
  i508.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[10], i508.orbitalOffsetX)
  i508.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[11], i508.orbitalOffsetY)
  i508.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[12], i508.orbitalOffsetZ)
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemNoise()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.separateAxes = !!i511[1]
  i510.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[2], i510.strengthX)
  i510.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[3], i510.strengthY)
  i510.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[4], i510.strengthZ)
  i510.frequency = i511[5]
  i510.damping = !!i511[6]
  i510.octaveCount = i511[7]
  i510.octaveMultiplier = i511[8]
  i510.octaveScale = i511[9]
  i510.quality = i511[10]
  i510.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[11], i510.scrollSpeed)
  i510.scrollSpeedMultiplier = i511[12]
  i510.remapEnabled = !!i511[13]
  i510.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[14], i510.remapX)
  i510.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[15], i510.remapY)
  i510.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[16], i510.remapZ)
  i510.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[17], i510.positionAmount)
  i510.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[18], i510.rotationAmount)
  i510.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[19], i510.sizeAmount)
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemInheritVelocity()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.mode = i513[1]
  i512.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.curve)
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemForceOverLifetime()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.space = i515[4]
  i514.randomized = !!i515[5]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[1], i516.limit)
  i516.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[2], i516.limitX)
  i516.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[3], i516.limitY)
  i516.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[4], i516.limitZ)
  i516.dampen = i517[5]
  i516.separateAxes = !!i517[6]
  i516.space = i517[7]
  i516.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[8], i516.drag)
  i516.multiplyDragByParticleSize = !!i517[9]
  i516.multiplyDragByParticleVelocity = !!i517[10]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'mesh')
  i518.meshCount = i519[2]
  i518.activeVertexStreamsCount = i519[3]
  i518.alignment = i519[4]
  i518.renderMode = i519[5]
  i518.sortMode = i519[6]
  i518.lengthScale = i519[7]
  i518.velocityScale = i519[8]
  i518.cameraVelocityScale = i519[9]
  i518.normalDirection = i519[10]
  i518.sortingFudge = i519[11]
  i518.minParticleSize = i519[12]
  i518.maxParticleSize = i519[13]
  i518.pivot = new pc.Vec3( i519[14], i519[15], i519[16] )
  request.r(i519[17], i519[18], 0, i518, 'trailMaterial')
  i518.applyActiveColorSpace = !!i519[19]
  i518.enabled = !!i519[20]
  request.r(i519[21], i519[22], 0, i518, 'sharedMaterial')
  var i521 = i519[23]
  var i520 = []
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 2, i520, '')
  }
  i518.sharedMaterials = i520
  i518.receiveShadows = !!i519[24]
  i518.shadowCastingMode = i519[25]
  i518.sortingLayerID = i519[26]
  i518.sortingOrder = i519[27]
  i518.lightmapIndex = i519[28]
  i518.lightmapSceneIndex = i519[29]
  i518.lightmapScaleOffset = new pc.Vec4( i519[30], i519[31], i519[32], i519[33] )
  i518.lightProbeUsage = i519[34]
  i518.reflectionProbeUsage = i519[35]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i523 = data
  i522.name = i523[0]
  i522.index = i523[1]
  i522.startup = !!i523[2]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i525 = data
  i524.aspect = i525[0]
  i524.orthographic = !!i525[1]
  i524.orthographicSize = i525[2]
  i524.backgroundColor = new pc.Color(i525[3], i525[4], i525[5], i525[6])
  i524.nearClipPlane = i525[7]
  i524.farClipPlane = i525[8]
  i524.fieldOfView = i525[9]
  i524.depth = i525[10]
  i524.clearFlags = i525[11]
  i524.cullingMask = i525[12]
  i524.rect = i525[13]
  request.r(i525[14], i525[15], 0, i524, 'targetTexture')
  i524.usePhysicalProperties = !!i525[16]
  i524.focalLength = i525[17]
  i524.sensorSize = new pc.Vec2( i525[18], i525[19] )
  i524.lensShift = new pc.Vec2( i525[20], i525[21] )
  i524.gateFit = i525[22]
  i524.commandBufferCount = i525[23]
  i524.cameraType = i525[24]
  i524.enabled = !!i525[25]
  return i524
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_FirstSelected')
  i526.m_sendNavigationEvents = !!i527[2]
  i526.m_DragThreshold = i527[3]
  return i526
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i529 = data
  i528.m_HorizontalAxis = i529[0]
  i528.m_VerticalAxis = i529[1]
  i528.m_SubmitButton = i529[2]
  i528.m_CancelButton = i529[3]
  i528.m_InputActionsPerSecond = i529[4]
  i528.m_RepeatDelay = i529[5]
  i528.m_ForceModuleActive = !!i529[6]
  i528.m_SendPointerHoverToParent = !!i529[7]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i531 = data
  i530.pivot = new pc.Vec2( i531[0], i531[1] )
  i530.anchorMin = new pc.Vec2( i531[2], i531[3] )
  i530.anchorMax = new pc.Vec2( i531[4], i531[5] )
  i530.sizeDelta = new pc.Vec2( i531[6], i531[7] )
  i530.anchoredPosition3D = new pc.Vec3( i531[8], i531[9], i531[10] )
  i530.rotation = new pc.Quat(i531[11], i531[12], i531[13], i531[14])
  i530.scale = new pc.Vec3( i531[15], i531[16], i531[17] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i533 = data
  i532.planeDistance = i533[0]
  i532.referencePixelsPerUnit = i533[1]
  i532.isFallbackOverlay = !!i533[2]
  i532.renderMode = i533[3]
  i532.renderOrder = i533[4]
  i532.sortingLayerName = i533[5]
  i532.sortingOrder = i533[6]
  i532.scaleFactor = i533[7]
  request.r(i533[8], i533[9], 0, i532, 'worldCamera')
  i532.overrideSorting = !!i533[10]
  i532.pixelPerfect = !!i533[11]
  i532.targetDisplay = i533[12]
  i532.overridePixelPerfect = !!i533[13]
  i532.enabled = !!i533[14]
  return i532
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i535 = data
  i534.m_UiScaleMode = i535[0]
  i534.m_ReferencePixelsPerUnit = i535[1]
  i534.m_ScaleFactor = i535[2]
  i534.m_ReferenceResolution = new pc.Vec2( i535[3], i535[4] )
  i534.m_ScreenMatchMode = i535[5]
  i534.m_MatchWidthOrHeight = i535[6]
  i534.m_PhysicalUnit = i535[7]
  i534.m_FallbackScreenDPI = i535[8]
  i534.m_DefaultSpriteDPI = i535[9]
  i534.m_DynamicPixelsPerUnit = i535[10]
  i534.m_PresetInfoIsWorld = !!i535[11]
  return i534
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i537 = data
  i536.m_IgnoreReversedGraphics = !!i537[0]
  i536.m_BlockingObjects = i537[1]
  i536.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i537[2] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i539 = data
  i538.cullTransparentMesh = !!i539[0]
  return i538
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i541 = data
  i540.m_AspectMode = i541[0]
  i540.m_AspectRatio = i541[1]
  return i540
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'm_Texture')
  i542.m_UVRect = UnityEngine.Rect.MinMaxRect(i543[2], i543[3], i543[4], i543[5])
  request.r(i543[6], i543[7], 0, i542, 'm_Material')
  i542.m_Maskable = !!i543[8]
  i542.m_Color = new pc.Color(i543[9], i543[10], i543[11], i543[12])
  i542.m_RaycastTarget = !!i543[13]
  i542.m_RaycastPadding = new pc.Vec4( i543[14], i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i544 = root || request.c( 'MonsterController' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'joint')
  request.r(i545[2], i545[3], 0, i544, 'rb')
  request.r(i545[4], i545[5], 0, i544, 'deadSFX')
  i544.force = new pc.Vec2( i545[6], i545[7] )
  return i544
}

Deserializers["BonkController"] = function (request, data, root) {
  var i546 = root || request.c( 'BonkController' )
  var i547 = data
  i546.target = i547[0]
  i546.maxBonk = i547[1]
  request.r(i547[2], i547[3], 0, i546, 'hitSound')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i549 = data
  i548.radius = i549[0]
  i548.enabled = !!i549[1]
  i548.isTrigger = !!i549[2]
  i548.usedByEffector = !!i549[3]
  i548.density = i549[4]
  i548.offset = new pc.Vec2( i549[5], i549[6] )
  request.r(i549[7], i549[8], 0, i548, 'material')
  return i548
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Button' )
  var i551 = data
  i550.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i551[0], i550.m_OnClick)
  i550.m_Navigation = request.d('UnityEngine.UI.Navigation', i551[1], i550.m_Navigation)
  i550.m_Transition = i551[2]
  i550.m_Colors = request.d('UnityEngine.UI.ColorBlock', i551[3], i550.m_Colors)
  i550.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i551[4], i550.m_SpriteState)
  i550.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i551[5], i550.m_AnimationTriggers)
  i550.m_Interactable = !!i551[6]
  request.r(i551[7], i551[8], 0, i550, 'm_TargetGraphic')
  return i550
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i553 = data
  i552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i553[0], i552.m_PersistentCalls)
  return i552
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i555 = data
  var i557 = i555[0]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i557.length; i += 1) {
    i556.add(request.d('UnityEngine.Events.PersistentCall', i557[i + 0]));
  }
  i554.m_Calls = i556
  return i554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Target')
  i560.m_TargetAssemblyTypeName = i561[2]
  i560.m_MethodName = i561[3]
  i560.m_Mode = i561[4]
  i560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i561[5], i560.m_Arguments)
  i560.m_CallState = i561[6]
  return i560
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i563 = data
  i562.m_Mode = i563[0]
  i562.m_WrapAround = !!i563[1]
  request.r(i563[2], i563[3], 0, i562, 'm_SelectOnUp')
  request.r(i563[4], i563[5], 0, i562, 'm_SelectOnDown')
  request.r(i563[6], i563[7], 0, i562, 'm_SelectOnLeft')
  request.r(i563[8], i563[9], 0, i562, 'm_SelectOnRight')
  return i562
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i565 = data
  i564.m_NormalColor = new pc.Color(i565[0], i565[1], i565[2], i565[3])
  i564.m_HighlightedColor = new pc.Color(i565[4], i565[5], i565[6], i565[7])
  i564.m_PressedColor = new pc.Color(i565[8], i565[9], i565[10], i565[11])
  i564.m_SelectedColor = new pc.Color(i565[12], i565[13], i565[14], i565[15])
  i564.m_DisabledColor = new pc.Color(i565[16], i565[17], i565[18], i565[19])
  i564.m_ColorMultiplier = i565[20]
  i564.m_FadeDuration = i565[21]
  return i564
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_HighlightedSprite')
  request.r(i567[2], i567[3], 0, i566, 'm_PressedSprite')
  request.r(i567[4], i567[5], 0, i566, 'm_SelectedSprite')
  request.r(i567[6], i567[7], 0, i566, 'm_DisabledSprite')
  return i566
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i569 = data
  i568.m_NormalTrigger = i569[0]
  i568.m_HighlightedTrigger = i569[1]
  i568.m_PressedTrigger = i569[2]
  i568.m_SelectedTrigger = i569[3]
  i568.m_DisabledTrigger = i569[4]
  return i568
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Image' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'm_Sprite')
  i570.m_Type = i571[2]
  i570.m_PreserveAspect = !!i571[3]
  i570.m_FillCenter = !!i571[4]
  i570.m_FillMethod = i571[5]
  i570.m_FillAmount = i571[6]
  i570.m_FillClockwise = !!i571[7]
  i570.m_FillOrigin = i571[8]
  i570.m_UseSpriteMesh = !!i571[9]
  i570.m_PixelsPerUnitMultiplier = i571[10]
  request.r(i571[11], i571[12], 0, i570, 'm_Material')
  i570.m_Maskable = !!i571[13]
  i570.m_Color = new pc.Color(i571[14], i571[15], i571[16], i571[17])
  i570.m_RaycastTarget = !!i571[18]
  i570.m_RaycastPadding = new pc.Vec4( i571[19], i571[20], i571[21], i571[22] )
  return i570
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i572 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i573 = data
  i572.targetIsSelf = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'targetGO')
  i572.tweenTargetIsTargetGO = !!i573[3]
  i572.delay = i573[4]
  i572.duration = i573[5]
  i572.easeType = i573[6]
  i572.easeCurve = new pc.AnimationCurve( { keys_flow: i573[7] } )
  i572.loopType = i573[8]
  i572.loops = i573[9]
  i572.id = i573[10]
  i572.isRelative = !!i573[11]
  i572.isFrom = !!i573[12]
  i572.isIndependentUpdate = !!i573[13]
  i572.autoKill = !!i573[14]
  i572.autoGenerate = !!i573[15]
  i572.isActive = !!i573[16]
  i572.isValid = !!i573[17]
  request.r(i573[18], i573[19], 0, i572, 'target')
  i572.animationType = i573[20]
  i572.targetType = i573[21]
  i572.forcedTargetType = i573[22]
  i572.autoPlay = !!i573[23]
  i572.useTargetAsV3 = !!i573[24]
  i572.endValueFloat = i573[25]
  i572.endValueV3 = new pc.Vec3( i573[26], i573[27], i573[28] )
  i572.endValueV2 = new pc.Vec2( i573[29], i573[30] )
  i572.endValueColor = new pc.Color(i573[31], i573[32], i573[33], i573[34])
  i572.endValueString = i573[35]
  i572.endValueRect = UnityEngine.Rect.MinMaxRect(i573[36], i573[37], i573[38], i573[39])
  request.r(i573[40], i573[41], 0, i572, 'endValueTransform')
  i572.optionalBool0 = !!i573[42]
  i572.optionalBool1 = !!i573[43]
  i572.optionalFloat0 = i573[44]
  i572.optionalInt0 = i573[45]
  i572.optionalRotationMode = i573[46]
  i572.optionalScrambleMode = i573[47]
  i572.optionalShakeRandomnessMode = i573[48]
  i572.optionalString = i573[49]
  i572.updateType = i573[50]
  i572.isSpeedBased = !!i573[51]
  i572.hasOnStart = !!i573[52]
  i572.hasOnPlay = !!i573[53]
  i572.hasOnUpdate = !!i573[54]
  i572.hasOnStepComplete = !!i573[55]
  i572.hasOnComplete = !!i573[56]
  i572.hasOnTweenCreated = !!i573[57]
  i572.hasOnRewind = !!i573[58]
  i572.onStart = request.d('UnityEngine.Events.UnityEvent', i573[59], i572.onStart)
  i572.onPlay = request.d('UnityEngine.Events.UnityEvent', i573[60], i572.onPlay)
  i572.onUpdate = request.d('UnityEngine.Events.UnityEvent', i573[61], i572.onUpdate)
  i572.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i573[62], i572.onStepComplete)
  i572.onComplete = request.d('UnityEngine.Events.UnityEvent', i573[63], i572.onComplete)
  i572.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i573[64], i572.onTweenCreated)
  i572.onRewind = request.d('UnityEngine.Events.UnityEvent', i573[65], i572.onRewind)
  return i572
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i575 = data
  i574.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i575[0], i574.m_PersistentCalls)
  return i574
}

Deserializers["GameController"] = function (request, data, root) {
  var i576 = root || request.c( 'GameController' )
  var i577 = data
  var i579 = i577[0]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 1, i578, '')
  }
  i576.monsters = i578
  var i581 = i577[1]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i581.length; i += 3) {
    i580.add(new pc.Vec3( i581[i + 0], i581[i + 1], i581[i + 2] ));
  }
  i576.cameraPos = i580
  i576.speedMove = i577[2]
  request.r(i577[3], i577[4], 0, i576, 'target')
  i576.index = i577[5]
  i576.end = !!i577[6]
  request.r(i577[7], i577[8], 0, i576, 'mainCamera')
  request.r(i577[9], i577[10], 0, i576, 'endUI')
  var i583 = i577[11]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 1, i582, '')
  }
  i576.levels = i582
  return i576
}

Deserializers["TargetController"] = function (request, data, root) {
  var i590 = root || request.c( 'TargetController' )
  var i591 = data
  var i593 = i591[0]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.listTarget = i592
  request.r(i591[1], i591[2], 0, i590, 'currentTarget')
  i590.index = i591[3]
  request.r(i591[4], i591[5], 0, i590, 'tut')
  return i590
}

Deserializers["LunaController"] = function (request, data, root) {
  var i596 = root || request.c( 'LunaController' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'BGTexture')
  i596.UseTime = !!i597[2]
  i596.TimePlay = i597[3]
  i596.Character1 = i597[4]
  i596.Character2 = i597[5]
  var i599 = i597[6]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 1, i598, '')
  }
  i596.CharacterPrefabs = i598
  i596.characterFolder = i597[7]
  request.r(i597[8], i597[9], 0, i596, 'characterController')
  request.r(i597[10], i597[11], 0, i596, 'BGImage')
  var i601 = i597[12]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 1, i600, '')
  }
  i596.CTA = i600
  return i596
}

Deserializers["AudioController"] = function (request, data, root) {
  var i604 = root || request.c( 'AudioController' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'BGM')
  request.r(i605[2], i605[3], 0, i604, 'musicSource')
  request.r(i605[4], i605[5], 0, i604, 'pool')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'clip')
  request.r(i607[2], i607[3], 0, i606, 'outputAudioMixerGroup')
  i606.playOnAwake = !!i607[4]
  i606.loop = !!i607[5]
  i606.time = i607[6]
  i606.volume = i607[7]
  i606.pitch = i607[8]
  i606.enabled = !!i607[9]
  return i606
}

Deserializers["VFXController"] = function (request, data, root) {
  var i608 = root || request.c( 'VFXController' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'bloodPrefab')
  request.r(i609[2], i609[3], 0, i608, 'pool')
  return i608
}

Deserializers["CharacterController"] = function (request, data, root) {
  var i610 = root || request.c( 'CharacterController' )
  var i611 = data
  var i613 = i611[0]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 1, i612, '')
  }
  i610.character1Targets = i612
  var i615 = i611[1]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 1, i614, '')
  }
  i610.character2Targets = i614
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i619 = data
  i618.ambientIntensity = i619[0]
  i618.reflectionIntensity = i619[1]
  i618.ambientMode = i619[2]
  i618.ambientLight = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.ambientSkyColor = new pc.Color(i619[7], i619[8], i619[9], i619[10])
  i618.ambientGroundColor = new pc.Color(i619[11], i619[12], i619[13], i619[14])
  i618.ambientEquatorColor = new pc.Color(i619[15], i619[16], i619[17], i619[18])
  i618.fogColor = new pc.Color(i619[19], i619[20], i619[21], i619[22])
  i618.fogEndDistance = i619[23]
  i618.fogStartDistance = i619[24]
  i618.fogDensity = i619[25]
  i618.fog = !!i619[26]
  request.r(i619[27], i619[28], 0, i618, 'skybox')
  i618.fogMode = i619[29]
  var i621 = i619[30]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i621[i + 0]) );
  }
  i618.lightmaps = i620
  i618.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i619[31], i618.lightProbes)
  i618.lightmapsMode = i619[32]
  i618.mixedBakeMode = i619[33]
  i618.environmentLightingMode = i619[34]
  i618.ambientProbe = new pc.SphericalHarmonicsL2(i619[35])
  request.r(i619[36], i619[37], 0, i618, 'customReflection')
  request.r(i619[38], i619[39], 0, i618, 'defaultReflection')
  i618.defaultReflectionMode = i619[40]
  i618.defaultReflectionResolution = i619[41]
  i618.sunLightObjectId = i619[42]
  i618.pixelLightCount = i619[43]
  i618.defaultReflectionHDR = !!i619[44]
  i618.hasLightDataAsset = !!i619[45]
  i618.hasManualGenerate = !!i619[46]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'lightmapColor')
  request.r(i625[2], i625[3], 0, i624, 'lightmapDirection')
  request.r(i625[4], i625[5], 0, i624, 'shadowMask')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i626 = root || new UnityEngine.LightProbes()
  var i627 = data
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i635 = data
  var i637 = i635[0]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i637.length; i += 1) {
    i636.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i637[i + 0]));
  }
  i634.ShaderCompilationErrors = i636
  i634.name = i635[1]
  i634.guid = i635[2]
  var i639 = i635[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i634.shaderDefinedKeywords = i638
  var i641 = i635[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i641[i + 0]) );
  }
  i634.passes = i640
  var i643 = i635[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i643[i + 0]) );
  }
  i634.usePasses = i642
  var i645 = i635[6]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i645[i + 0]) );
  }
  i634.defaultParameterValues = i644
  request.r(i635[7], i635[8], 0, i634, 'unityFallbackShader')
  i634.readDepth = !!i635[9]
  i634.hasDepthOnlyPass = !!i635[10]
  i634.isCreatedByShaderGraph = !!i635[11]
  i634.disableBatching = !!i635[12]
  i634.compiled = !!i635[13]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i649 = data
  i648.shaderName = i649[0]
  i648.errorMessage = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i654 = root || new pc.UnityShaderPass()
  var i655 = data
  i654.id = i655[0]
  i654.subShaderIndex = i655[1]
  i654.name = i655[2]
  i654.passType = i655[3]
  i654.grabPassTextureName = i655[4]
  i654.usePass = !!i655[5]
  i654.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[6], i654.zTest)
  i654.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[7], i654.zWrite)
  i654.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[8], i654.culling)
  i654.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[9], i654.blending)
  i654.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[10], i654.alphaBlending)
  i654.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[11], i654.colorWriteMask)
  i654.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[12], i654.offsetUnits)
  i654.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[13], i654.offsetFactor)
  i654.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[14], i654.stencilRef)
  i654.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[15], i654.stencilReadMask)
  i654.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[16], i654.stencilWriteMask)
  i654.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[17], i654.stencilOp)
  i654.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[18], i654.stencilOpFront)
  i654.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[19], i654.stencilOpBack)
  var i657 = i655[20]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i657[i + 0]) );
  }
  i654.tags = i656
  var i659 = i655[21]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.passDefinedKeywords = i658
  var i661 = i655[22]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i661[i + 0]) );
  }
  i654.passDefinedKeywordGroups = i660
  var i663 = i655[23]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i663[i + 0]) );
  }
  i654.variants = i662
  var i665 = i655[24]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i665[i + 0]) );
  }
  i654.excludedVariants = i664
  i654.hasDepthReader = !!i655[25]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i667 = data
  i666.val = i667[0]
  i666.name = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i669 = data
  i668.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[0], i668.src)
  i668.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[1], i668.dst)
  i668.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[2], i668.op)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i671 = data
  i670.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[0], i670.pass)
  i670.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[1], i670.fail)
  i670.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[2], i670.zFail)
  i670.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i671[3], i670.comp)
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i675 = data
  i674.name = i675[0]
  i674.value = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i679 = data
  var i681 = i679[0]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i678.keywords = i680
  i678.hasDiscard = !!i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i685 = data
  i684.passId = i685[0]
  i684.subShaderIndex = i685[1]
  var i687 = i685[2]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( i687[i + 0] );
  }
  i684.keywords = i686
  i684.vertexProgram = i685[3]
  i684.fragmentProgram = i685[4]
  i684.exportedForWebGl2 = !!i685[5]
  i684.readDepth = !!i685[6]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'shader')
  i690.pass = i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i695 = data
  i694.name = i695[0]
  i694.type = i695[1]
  i694.value = new pc.Vec4( i695[2], i695[3], i695[4], i695[5] )
  i694.textureValue = i695[6]
  i694.shaderPropertyFlag = i695[7]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'texture')
  i696.aabb = i697[3]
  i696.vertices = i697[4]
  i696.triangles = i697[5]
  i696.textureRect = UnityEngine.Rect.MinMaxRect(i697[6], i697[7], i697[8], i697[9])
  i696.packedRect = UnityEngine.Rect.MinMaxRect(i697[10], i697[11], i697[12], i697[13])
  i696.border = new pc.Vec4( i697[14], i697[15], i697[16], i697[17] )
  i696.transparency = i697[18]
  i696.bounds = i697[19]
  i696.pixelsPerUnit = i697[20]
  i696.textureWidth = i697[21]
  i696.textureHeight = i697[22]
  i696.nativeSize = new pc.Vec2( i697[23], i697[24] )
  i696.pivot = new pc.Vec2( i697[25], i697[26] )
  i696.textureRectOffset = new pc.Vec2( i697[27], i697[28] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i699 = data
  i698.name = i699[0]
  return i698
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i701 = data
  i700.useSafeMode = !!i701[0]
  i700.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i701[1], i700.safeModeOptions)
  i700.timeScale = i701[2]
  i700.unscaledTimeScale = i701[3]
  i700.useSmoothDeltaTime = !!i701[4]
  i700.maxSmoothUnscaledTime = i701[5]
  i700.rewindCallbackMode = i701[6]
  i700.showUnityEditorReport = !!i701[7]
  i700.logBehaviour = i701[8]
  i700.drawGizmos = !!i701[9]
  i700.defaultRecyclable = !!i701[10]
  i700.defaultAutoPlay = i701[11]
  i700.defaultUpdateType = i701[12]
  i700.defaultTimeScaleIndependent = !!i701[13]
  i700.defaultEaseType = i701[14]
  i700.defaultEaseOvershootOrAmplitude = i701[15]
  i700.defaultEasePeriod = i701[16]
  i700.defaultAutoKill = !!i701[17]
  i700.defaultLoopType = i701[18]
  i700.debugMode = !!i701[19]
  i700.debugStoreTargetId = !!i701[20]
  i700.showPreviewPanel = !!i701[21]
  i700.storeSettingsLocation = i701[22]
  i700.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i701[23], i700.modules)
  i700.createASMDEF = !!i701[24]
  i700.showPlayingTweens = !!i701[25]
  i700.showPausedTweens = !!i701[26]
  return i700
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i702 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i703 = data
  i702.logBehaviour = i703[0]
  i702.nestedTweenFailureBehaviour = i703[1]
  return i702
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i704 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i705 = data
  i704.showPanel = !!i705[0]
  i704.audioEnabled = !!i705[1]
  i704.physicsEnabled = !!i705[2]
  i704.physics2DEnabled = !!i705[3]
  i704.spriteEnabled = !!i705[4]
  i704.uiEnabled = !!i705[5]
  i704.textMeshProEnabled = !!i705[6]
  i704.tk2DEnabled = !!i705[7]
  i704.deAudioEnabled = !!i705[8]
  i704.deUnityExtendedEnabled = !!i705[9]
  i704.epoOutlineEnabled = !!i705[10]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i709[i + 0]) );
  }
  i706.files = i708
  i706.componentToPrefabIds = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i713 = data
  i712.path = i713[0]
  request.r(i713[1], i713[2], 0, i712, 'unityObject')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i715 = data
  var i717 = i715[0]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i717[i + 0]) );
  }
  i714.scriptsExecutionOrder = i716
  var i719 = i715[1]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i719[i + 0]) );
  }
  i714.sortingLayers = i718
  var i721 = i715[2]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i721[i + 0]) );
  }
  i714.cullingLayers = i720
  i714.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i715[3], i714.timeSettings)
  i714.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i715[4], i714.physicsSettings)
  i714.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i715[5], i714.physics2DSettings)
  i714.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i715[6], i714.qualitySettings)
  i714.enableRealtimeShadows = !!i715[7]
  i714.enableAutoInstancing = !!i715[8]
  i714.enableStaticBatching = !!i715[9]
  i714.enableDynamicBatching = !!i715[10]
  i714.usePreservativeDynamicBatching = !!i715[11]
  i714.lightmapEncodingQuality = i715[12]
  i714.desiredColorSpace = i715[13]
  var i723 = i715[14]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i714.allTags = i722
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i727 = data
  i726.name = i727[0]
  i726.value = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i731 = data
  i730.id = i731[0]
  i730.name = i731[1]
  i730.value = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i735 = data
  i734.id = i735[0]
  i734.name = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i737 = data
  i736.fixedDeltaTime = i737[0]
  i736.maximumDeltaTime = i737[1]
  i736.timeScale = i737[2]
  i736.maximumParticleTimestep = i737[3]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i739 = data
  i738.gravity = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.defaultSolverIterations = i739[3]
  i738.bounceThreshold = i739[4]
  i738.autoSyncTransforms = !!i739[5]
  i738.autoSimulation = !!i739[6]
  var i741 = i739[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i741[i + 0]) );
  }
  i738.collisionMatrix = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.layerId = i745[1]
  i744.otherLayerId = i745[2]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'material')
  i746.gravity = new pc.Vec2( i747[2], i747[3] )
  i746.positionIterations = i747[4]
  i746.velocityIterations = i747[5]
  i746.velocityThreshold = i747[6]
  i746.maxLinearCorrection = i747[7]
  i746.maxAngularCorrection = i747[8]
  i746.maxTranslationSpeed = i747[9]
  i746.maxRotationSpeed = i747[10]
  i746.baumgarteScale = i747[11]
  i746.baumgarteTOIScale = i747[12]
  i746.timeToSleep = i747[13]
  i746.linearSleepTolerance = i747[14]
  i746.angularSleepTolerance = i747[15]
  i746.defaultContactOffset = i747[16]
  i746.autoSimulation = !!i747[17]
  i746.queriesHitTriggers = !!i747[18]
  i746.queriesStartInColliders = !!i747[19]
  i746.callbacksOnDisable = !!i747[20]
  i746.reuseCollisionCallbacks = !!i747[21]
  i746.autoSyncTransforms = !!i747[22]
  var i749 = i747[23]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i749[i + 0]) );
  }
  i746.collisionMatrix = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i753 = data
  i752.enabled = !!i753[0]
  i752.layerId = i753[1]
  i752.otherLayerId = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i755 = data
  var i757 = i755[0]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i757[i + 0]) );
  }
  i754.qualityLevels = i756
  var i759 = i755[1]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i754.names = i758
  i754.shadows = i755[2]
  i754.anisotropicFiltering = i755[3]
  i754.antiAliasing = i755[4]
  i754.lodBias = i755[5]
  i754.shadowCascades = i755[6]
  i754.shadowDistance = i755[7]
  i754.shadowmaskMode = i755[8]
  i754.shadowProjection = i755[9]
  i754.shadowResolution = i755[10]
  i754.softParticles = !!i755[11]
  i754.softVegetation = !!i755[12]
  i754.activeColorSpace = i755[13]
  i754.desiredColorSpace = i755[14]
  i754.masterTextureLimit = i755[15]
  i754.maxQueuedFrames = i755[16]
  i754.particleRaycastBudget = i755[17]
  i754.pixelLightCount = i755[18]
  i754.realtimeReflectionProbes = !!i755[19]
  i754.shadowCascade2Split = i755[20]
  i754.shadowCascade4Split = new pc.Vec3( i755[21], i755[22], i755[23] )
  i754.streamingMipmapsActive = !!i755[24]
  i754.vSyncCount = i755[25]
  i754.asyncUploadBufferSize = i755[26]
  i754.asyncUploadTimeSlice = i755[27]
  i754.billboardsFaceCameraPosition = !!i755[28]
  i754.shadowNearPlaneOffset = i755[29]
  i754.streamingMipmapsMemoryBudget = i755[30]
  i754.maximumLODLevel = i755[31]
  i754.streamingMipmapsAddAllCameras = !!i755[32]
  i754.streamingMipmapsMaxLevelReduction = i755[33]
  i754.streamingMipmapsRenderersPerFrame = i755[34]
  i754.resolutionScalingFixedDPIFactor = i755[35]
  i754.streamingMipmapsMaxFileIORequests = i755[36]
  i754.currentQualityLevel = i755[37]
  return i754
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[12],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[2],"60":[2],"61":[2],"62":[2],"63":[2],"64":[2],"5":[2],"65":[2],"66":[2],"6":[2],"67":[2],"68":[2],"69":[2],"70":[12],"71":[72],"73":[74],"75":[74],"18":[17],"76":[7],"77":[12],"78":[79],"80":[17],"81":[21,17],"82":[72],"83":[21,17],"84":[17],"85":[17],"86":[72,17],"87":[17,21],"88":[89],"90":[89],"91":[89],"92":[17],"93":[17],"20":[18],"30":[21,17],"22":[17],"19":[18],"94":[17],"95":[17],"96":[17],"97":[17],"98":[17],"99":[17],"100":[17],"101":[17],"102":[17],"23":[21,17],"103":[17],"104":[17],"105":[17],"106":[17],"107":[21,17],"108":[17],"109":[15],"110":[15],"16":[15],"111":[15],"112":[12],"113":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Rigidbody2D","UnityEngine.Rendering.SortingGroup","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.AudioClip","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","CharacterController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/29/2026 08:30:24";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRP_V04_HoaiTT_DatDV";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1815";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4190";

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

Deserializers.buildID = "c7a3686b-50e8-45d8-bbc2-b6cabe5899d8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

