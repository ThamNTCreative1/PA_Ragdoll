var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSpring' )
  var i531 = data
  i530.spring = i531[0]
  i530.damper = i531[1]
  i530.targetPosition = i531[2]
  return i530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor' )
  var i533 = data
  i532.m_TargetVelocity = i533[0]
  i532.m_Force = i533[1]
  i532.m_FreeSpin = i533[2]
  return i532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointLimits' )
  var i535 = data
  i534.m_Min = i535[0]
  i534.m_Max = i535[1]
  i534.m_Bounciness = i535[2]
  i534.m_BounceMinVelocity = i535[3]
  i534.m_ContactDistance = i535[4]
  i534.minBounce = i535[5]
  i534.maxBounce = i535[6]
  return i534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointDrive' )
  var i537 = data
  i536.m_PositionSpring = i537[0]
  i536.m_PositionDamper = i537[1]
  i536.m_MaximumForce = i537[2]
  i536.m_UseAcceleration = i537[3]
  return i536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i539 = data
  i538.m_Spring = i539[0]
  i538.m_Damper = i539[1]
  return i538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i541 = data
  i540.m_Limit = i541[0]
  i540.m_Bounciness = i541[1]
  i540.m_ContactDistance = i541[2]
  return i540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i543 = data
  i542.m_ExtremumSlip = i543[0]
  i542.m_ExtremumValue = i543[1]
  i542.m_AsymptoteSlip = i543[2]
  i542.m_AsymptoteValue = i543[3]
  i542.m_Stiffness = i543[4]
  return i542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i545 = data
  i544.m_LowerAngle = i545[0]
  i544.m_UpperAngle = i545[1]
  return i544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i547 = data
  i546.m_MotorSpeed = i547[0]
  i546.m_MaximumMotorTorque = i547[1]
  return i546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i549 = data
  i548.m_DampingRatio = i549[0]
  i548.m_Frequency = i549[1]
  i548.m_Angle = i549[2]
  return i548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i551 = data
  i550.m_LowerTranslation = i551[0]
  i550.m_UpperTranslation = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i553 = data
  i552.name = i553[0]
  i552.width = i553[1]
  i552.height = i553[2]
  i552.mipmapCount = i553[3]
  i552.anisoLevel = i553[4]
  i552.filterMode = i553[5]
  i552.hdr = !!i553[6]
  i552.format = i553[7]
  i552.wrapMode = i553[8]
  i552.alphaIsTransparency = !!i553[9]
  i552.alphaSource = i553[10]
  i552.graphicsFormat = i553[11]
  i552.sRGBTexture = !!i553[12]
  i552.desiredColorSpace = i553[13]
  i552.wrapU = i553[14]
  i552.wrapV = i553[15]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i554 = root || new pc.UnityMaterial()
  var i555 = data
  i554.name = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'shader')
  i554.renderQueue = i555[3]
  i554.enableInstancing = !!i555[4]
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i557[i + 0]) );
  }
  i554.floatParameters = i556
  var i559 = i555[6]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i559[i + 0]) );
  }
  i554.colorParameters = i558
  var i561 = i555[7]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i561[i + 0]) );
  }
  i554.vectorParameters = i560
  var i563 = i555[8]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i563[i + 0]) );
  }
  i554.textureParameters = i562
  var i565 = i555[9]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i565[i + 0]) );
  }
  i554.materialFlags = i564
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Color(i573[1], i573[2], i573[3], i573[4])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = new pc.Vec4( i577[1], i577[2], i577[3], i577[4] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'value')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i585 = data
  i584.name = i585[0]
  i584.enabled = !!i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i587 = data
  i586.position = new pc.Vec3( i587[0], i587[1], i587[2] )
  i586.scale = new pc.Vec3( i587[3], i587[4], i587[5] )
  i586.rotation = new pc.Quat(i587[6], i587[7], i587[8], i587[9])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i589 = data
  i588.color = new pc.Color(i589[0], i589[1], i589[2], i589[3])
  request.r(i589[4], i589[5], 0, i588, 'sprite')
  i588.flipX = !!i589[6]
  i588.flipY = !!i589[7]
  i588.drawMode = i589[8]
  i588.size = new pc.Vec2( i589[9], i589[10] )
  i588.tileMode = i589[11]
  i588.adaptiveModeThreshold = i589[12]
  i588.maskInteraction = i589[13]
  i588.spriteSortPoint = i589[14]
  i588.enabled = !!i589[15]
  request.r(i589[16], i589[17], 0, i588, 'sharedMaterial')
  var i591 = i589[18]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.sharedMaterials = i590
  i588.receiveShadows = !!i589[19]
  i588.shadowCastingMode = i589[20]
  i588.sortingLayerID = i589[21]
  i588.sortingOrder = i589[22]
  i588.lightmapIndex = i589[23]
  i588.lightmapSceneIndex = i589[24]
  i588.lightmapScaleOffset = new pc.Vec4( i589[25], i589[26], i589[27], i589[28] )
  i588.lightProbeUsage = i589[29]
  i588.reflectionProbeUsage = i589[30]
  return i588
}

Deserializers["BlockController"] = function (request, data, root) {
  var i594 = root || request.c( 'BlockController' )
  var i595 = data
  i594.maxHP = i595[0]
  i594.currentHP = i595[1]
  i594.isBreak = !!i595[2]
  i594.numMonster = i595[3]
  request.r(i595[4], i595[5], 0, i594, 'hitSFX')
  request.r(i595[6], i595[7], 0, i594, 'breakVFX')
  request.r(i595[8], i595[9], 0, i594, 'breakSFX')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i597 = data
  i596.usedByComposite = !!i597[0]
  i596.autoTiling = !!i597[1]
  i596.size = new pc.Vec2( i597[2], i597[3] )
  i596.edgeRadius = i597[4]
  i596.enabled = !!i597[5]
  i596.isTrigger = !!i597[6]
  i596.usedByEffector = !!i597[7]
  i596.density = i597[8]
  i596.offset = new pc.Vec2( i597[9], i597[10] )
  request.r(i597[11], i597[12], 0, i596, 'material')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i599 = data
  i598.name = i599[0]
  i598.tagId = i599[1]
  i598.enabled = !!i599[2]
  i598.isStatic = !!i599[3]
  i598.layer = i599[4]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i601 = data
  i600.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i601[0], i600.main)
  i600.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i601[1], i600.colorBySpeed)
  i600.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i601[2], i600.colorOverLifetime)
  i600.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i601[3], i600.emission)
  i600.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i601[4], i600.rotationBySpeed)
  i600.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i601[5], i600.rotationOverLifetime)
  i600.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i601[6], i600.shape)
  i600.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i601[7], i600.sizeBySpeed)
  i600.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i601[8], i600.sizeOverLifetime)
  i600.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i601[9], i600.textureSheetAnimation)
  i600.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i601[10], i600.velocityOverLifetime)
  i600.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i601[11], i600.noise)
  i600.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i601[12], i600.inheritVelocity)
  i600.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i601[13], i600.forceOverLifetime)
  i600.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i601[14], i600.limitVelocityOverLifetime)
  i600.useAutoRandomSeed = !!i601[15]
  i600.randomSeed = i601[16]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemMain()
  var i603 = data
  i602.duration = i603[0]
  i602.loop = !!i603[1]
  i602.prewarm = !!i603[2]
  i602.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.startDelay)
  i602.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.startLifetime)
  i602.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[5], i602.startSpeed)
  i602.startSize3D = !!i603[6]
  i602.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[7], i602.startSizeX)
  i602.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.startSizeY)
  i602.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.startSizeZ)
  i602.startRotation3D = !!i603[10]
  i602.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.startRotationX)
  i602.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[12], i602.startRotationY)
  i602.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[13], i602.startRotationZ)
  i602.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i603[14], i602.startColor)
  i602.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[15], i602.gravityModifier)
  i602.simulationSpace = i603[16]
  request.r(i603[17], i603[18], 0, i602, 'customSimulationSpace')
  i602.simulationSpeed = i603[19]
  i602.useUnscaledTime = !!i603[20]
  i602.scalingMode = i603[21]
  i602.playOnAwake = !!i603[22]
  i602.maxParticles = i603[23]
  i602.emitterVelocityMode = i603[24]
  i602.stopAction = i603[25]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i604 = root || new pc.MinMaxCurve()
  var i605 = data
  i604.mode = i605[0]
  i604.curveMin = new pc.AnimationCurve( { keys_flow: i605[1] } )
  i604.curveMax = new pc.AnimationCurve( { keys_flow: i605[2] } )
  i604.curveMultiplier = i605[3]
  i604.constantMin = i605[4]
  i604.constantMax = i605[5]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i606 = root || new pc.MinMaxGradient()
  var i607 = data
  i606.mode = i607[0]
  i606.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i607[1], i606.gradientMin)
  i606.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i607[2], i606.gradientMax)
  i606.colorMin = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.colorMax = new pc.Color(i607[7], i607[8], i607[9], i607[10])
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i609 = data
  i608.mode = i609[0]
  var i611 = i609[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i611[i + 0]) );
  }
  i608.colorKeys = i610
  var i613 = i609[2]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i613[i + 0]) );
  }
  i608.alphaKeys = i612
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemColorBySpeed()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i615[1], i614.color)
  i614.range = new pc.Vec2( i615[2], i615[3] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i619 = data
  i618.color = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.time = i619[4]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i623 = data
  i622.alpha = i623[0]
  i622.time = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemColorOverLifetime()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[1], i624.color)
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemEmitter()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[1], i626.rateOverTime)
  i626.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.rateOverDistance)
  var i629 = i627[3]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i629[i + 0]) );
  }
  i626.bursts = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemBurst()
  var i633 = data
  i632.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[0], i632.count)
  i632.cycleCount = i633[1]
  i632.minCount = i633[2]
  i632.maxCount = i633[3]
  i632.repeatInterval = i633[4]
  i632.time = i633[5]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemRotationBySpeed()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  i634.range = new pc.Vec2( i635[5], i635[6] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemRotationOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.separateAxes = !!i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemShape()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.shapeType = i639[1]
  i638.randomDirectionAmount = i639[2]
  i638.sphericalDirectionAmount = i639[3]
  i638.randomPositionAmount = i639[4]
  i638.alignToDirection = !!i639[5]
  i638.radius = i639[6]
  i638.radiusMode = i639[7]
  i638.radiusSpread = i639[8]
  i638.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.radiusSpeed)
  i638.radiusThickness = i639[10]
  i638.angle = i639[11]
  i638.length = i639[12]
  i638.boxThickness = new pc.Vec3( i639[13], i639[14], i639[15] )
  i638.meshShapeType = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'mesh')
  request.r(i639[19], i639[20], 0, i638, 'meshRenderer')
  request.r(i639[21], i639[22], 0, i638, 'skinnedMeshRenderer')
  i638.useMeshMaterialIndex = !!i639[23]
  i638.meshMaterialIndex = i639[24]
  i638.useMeshColors = !!i639[25]
  i638.normalOffset = i639[26]
  i638.arc = i639[27]
  i638.arcMode = i639[28]
  i638.arcSpread = i639[29]
  i638.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[30], i638.arcSpeed)
  i638.donutRadius = i639[31]
  i638.position = new pc.Vec3( i639[32], i639[33], i639[34] )
  i638.rotation = new pc.Vec3( i639[35], i639[36], i639[37] )
  i638.scale = new pc.Vec3( i639[38], i639[39], i639[40] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemSizeBySpeed()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  i640.range = new pc.Vec2( i641[5], i641[6] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemSizeOverLifetime()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.separateAxes = !!i643[4]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.mode = i645[1]
  i644.animation = i645[2]
  i644.numTilesX = i645[3]
  i644.numTilesY = i645[4]
  i644.useRandomRow = !!i645[5]
  i644.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[6], i644.frameOverTime)
  i644.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[7], i644.startFrame)
  i644.cycleCount = i645[8]
  i644.rowIndex = i645[9]
  i644.flipU = i645[10]
  i644.flipV = i645[11]
  i644.spriteCount = i645[12]
  var i647 = i645[13]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.sprites = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[4], i650.radial)
  i650.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[5], i650.speedModifier)
  i650.space = i651[6]
  i650.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[7], i650.orbitalX)
  i650.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[8], i650.orbitalY)
  i650.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[9], i650.orbitalZ)
  i650.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[10], i650.orbitalOffsetX)
  i650.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[11], i650.orbitalOffsetY)
  i650.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[12], i650.orbitalOffsetZ)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemNoise()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.separateAxes = !!i653[1]
  i652.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.strengthX)
  i652.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.strengthY)
  i652.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[4], i652.strengthZ)
  i652.frequency = i653[5]
  i652.damping = !!i653[6]
  i652.octaveCount = i653[7]
  i652.octaveMultiplier = i653[8]
  i652.octaveScale = i653[9]
  i652.quality = i653[10]
  i652.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[11], i652.scrollSpeed)
  i652.scrollSpeedMultiplier = i653[12]
  i652.remapEnabled = !!i653[13]
  i652.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[14], i652.remapX)
  i652.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[15], i652.remapY)
  i652.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[16], i652.remapZ)
  i652.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[17], i652.positionAmount)
  i652.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[18], i652.rotationAmount)
  i652.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[19], i652.sizeAmount)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemInheritVelocity()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.mode = i655[1]
  i654.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.curve)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemForceOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.space = i657[4]
  i656.randomized = !!i657[5]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.limit)
  i658.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.limitX)
  i658.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.limitY)
  i658.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.limitZ)
  i658.dampen = i659[5]
  i658.separateAxes = !!i659[6]
  i658.space = i659[7]
  i658.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.drag)
  i658.multiplyDragByParticleSize = !!i659[9]
  i658.multiplyDragByParticleVelocity = !!i659[10]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'mesh')
  i660.meshCount = i661[2]
  i660.activeVertexStreamsCount = i661[3]
  i660.alignment = i661[4]
  i660.renderMode = i661[5]
  i660.sortMode = i661[6]
  i660.lengthScale = i661[7]
  i660.velocityScale = i661[8]
  i660.cameraVelocityScale = i661[9]
  i660.normalDirection = i661[10]
  i660.sortingFudge = i661[11]
  i660.minParticleSize = i661[12]
  i660.maxParticleSize = i661[13]
  i660.pivot = new pc.Vec3( i661[14], i661[15], i661[16] )
  request.r(i661[17], i661[18], 0, i660, 'trailMaterial')
  i660.applyActiveColorSpace = !!i661[19]
  i660.enabled = !!i661[20]
  request.r(i661[21], i661[22], 0, i660, 'sharedMaterial')
  var i663 = i661[23]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sharedMaterials = i662
  i660.receiveShadows = !!i661[24]
  i660.shadowCastingMode = i661[25]
  i660.sortingLayerID = i661[26]
  i660.sortingOrder = i661[27]
  i660.lightmapIndex = i661[28]
  i660.lightmapSceneIndex = i661[29]
  i660.lightmapScaleOffset = new pc.Vec4( i661[30], i661[31], i661[32], i661[33] )
  i660.lightProbeUsage = i661[34]
  i660.reflectionProbeUsage = i661[35]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i665 = data
  i664.name = i665[0]
  i664.halfPrecision = !!i665[1]
  i664.useSimplification = !!i665[2]
  i664.useUInt32IndexFormat = !!i665[3]
  i664.vertexCount = i665[4]
  i664.aabb = i665[5]
  var i667 = i665[6]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( !!i667[i + 0] );
  }
  i664.streams = i666
  i664.vertices = i665[7]
  var i669 = i665[8]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i669[i + 0]) );
  }
  i664.subMeshes = i668
  var i671 = i665[9]
  var i670 = []
  for(var i = 0; i < i671.length; i += 16) {
    i670.push( new pc.Mat4().setData(i671[i + 0], i671[i + 1], i671[i + 2], i671[i + 3],  i671[i + 4], i671[i + 5], i671[i + 6], i671[i + 7],  i671[i + 8], i671[i + 9], i671[i + 10], i671[i + 11],  i671[i + 12], i671[i + 13], i671[i + 14], i671[i + 15]) );
  }
  i664.bindposes = i670
  var i673 = i665[10]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i673[i + 0]) );
  }
  i664.blendShapes = i672
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i679 = data
  i678.triangles = i679[0]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i685 = data
  i684.name = i685[0]
  var i687 = i685[1]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i687[i + 0]) );
  }
  i684.frames = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i689 = data
  i688.radius = i689[0]
  i688.enabled = !!i689[1]
  i688.isTrigger = !!i689[2]
  i688.usedByEffector = !!i689[3]
  i688.density = i689[4]
  i688.offset = new pc.Vec2( i689[5], i689[6] )
  request.r(i689[7], i689[8], 0, i688, 'material')
  return i688
}

Deserializers["BulletController"] = function (request, data, root) {
  var i690 = root || request.c( 'BulletController' )
  var i691 = data
  i690.speed = i691[0]
  i690.damage = i691[1]
  request.r(i691[2], i691[3], 0, i690, 'hitMonsterSound')
  request.r(i691[4], i691[5], 0, i690, 'hitSound')
  i690.lifeTime = i691[6]
  i690.hit = !!i691[7]
  return i690
}

Deserializers["KunaiController"] = function (request, data, root) {
  var i692 = root || request.c( 'KunaiController' )
  var i693 = data
  i692.damage = i693[0]
  request.r(i693[1], i693[2], 0, i692, 'hitMonsterSound')
  request.r(i693[3], i693[4], 0, i692, 'hitSound')
  i692.lifeTime = i693[5]
  i692.rotateSpeed = i693[6]
  i692.moveSpeed = i693[7]
  i692.hit = !!i693[8]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i695 = data
  i694.bodyType = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'material')
  i694.simulated = !!i695[3]
  i694.useAutoMass = !!i695[4]
  i694.mass = i695[5]
  i694.drag = i695[6]
  i694.angularDrag = i695[7]
  i694.gravityScale = i695[8]
  i694.collisionDetectionMode = i695[9]
  i694.sleepMode = i695[10]
  i694.constraints = i695[11]
  return i694
}

Deserializers["BombController"] = function (request, data, root) {
  var i696 = root || request.c( 'BombController' )
  var i697 = data
  i696.damage = i697[0]
  i696.layer = UnityEngine.LayerMask.FromIntegerValue( i697[1] )
  request.r(i697[2], i697[3], 0, i696, 'startSound')
  request.r(i697[4], i697[5], 0, i696, 'actionSound')
  i696.delay = i697[6]
  request.r(i697[7], i697[8], 0, i696, 'anim')
  request.r(i697[9], i697[10], 0, i696, 'vfx1')
  request.r(i697[11], i697[12], 0, i696, 'vfx2')
  i696.scale = i697[13]
  i696.radius = i697[14]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'animatorController')
  request.r(i699[2], i699[3], 0, i698, 'avatar')
  i698.updateMode = i699[4]
  i698.hasTransformHierarchy = !!i699[5]
  i698.applyRootMotion = !!i699[6]
  var i701 = i699[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.humanBones = i700
  i698.enabled = !!i699[8]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i705 = data
  i704.name = i705[0]
  i704.index = i705[1]
  i704.startup = !!i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i707 = data
  i706.aspect = i707[0]
  i706.orthographic = !!i707[1]
  i706.orthographicSize = i707[2]
  i706.backgroundColor = new pc.Color(i707[3], i707[4], i707[5], i707[6])
  i706.nearClipPlane = i707[7]
  i706.farClipPlane = i707[8]
  i706.fieldOfView = i707[9]
  i706.depth = i707[10]
  i706.clearFlags = i707[11]
  i706.cullingMask = i707[12]
  i706.rect = i707[13]
  request.r(i707[14], i707[15], 0, i706, 'targetTexture')
  i706.usePhysicalProperties = !!i707[16]
  i706.focalLength = i707[17]
  i706.sensorSize = new pc.Vec2( i707[18], i707[19] )
  i706.lensShift = new pc.Vec2( i707[20], i707[21] )
  i706.gateFit = i707[22]
  i706.commandBufferCount = i707[23]
  i706.cameraType = i707[24]
  i706.enabled = !!i707[25]
  return i706
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'm_FirstSelected')
  i708.m_sendNavigationEvents = !!i709[2]
  i708.m_DragThreshold = i709[3]
  return i708
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i711 = data
  i710.m_HorizontalAxis = i711[0]
  i710.m_VerticalAxis = i711[1]
  i710.m_SubmitButton = i711[2]
  i710.m_CancelButton = i711[3]
  i710.m_InputActionsPerSecond = i711[4]
  i710.m_RepeatDelay = i711[5]
  i710.m_ForceModuleActive = !!i711[6]
  i710.m_SendPointerHoverToParent = !!i711[7]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i713 = data
  i712.pivot = new pc.Vec2( i713[0], i713[1] )
  i712.anchorMin = new pc.Vec2( i713[2], i713[3] )
  i712.anchorMax = new pc.Vec2( i713[4], i713[5] )
  i712.sizeDelta = new pc.Vec2( i713[6], i713[7] )
  i712.anchoredPosition3D = new pc.Vec3( i713[8], i713[9], i713[10] )
  i712.rotation = new pc.Quat(i713[11], i713[12], i713[13], i713[14])
  i712.scale = new pc.Vec3( i713[15], i713[16], i713[17] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i715 = data
  i714.planeDistance = i715[0]
  i714.referencePixelsPerUnit = i715[1]
  i714.isFallbackOverlay = !!i715[2]
  i714.renderMode = i715[3]
  i714.renderOrder = i715[4]
  i714.sortingLayerName = i715[5]
  i714.sortingOrder = i715[6]
  i714.scaleFactor = i715[7]
  request.r(i715[8], i715[9], 0, i714, 'worldCamera')
  i714.overrideSorting = !!i715[10]
  i714.pixelPerfect = !!i715[11]
  i714.targetDisplay = i715[12]
  i714.overridePixelPerfect = !!i715[13]
  i714.enabled = !!i715[14]
  return i714
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i717 = data
  i716.m_UiScaleMode = i717[0]
  i716.m_ReferencePixelsPerUnit = i717[1]
  i716.m_ScaleFactor = i717[2]
  i716.m_ReferenceResolution = new pc.Vec2( i717[3], i717[4] )
  i716.m_ScreenMatchMode = i717[5]
  i716.m_MatchWidthOrHeight = i717[6]
  i716.m_PhysicalUnit = i717[7]
  i716.m_FallbackScreenDPI = i717[8]
  i716.m_DefaultSpriteDPI = i717[9]
  i716.m_DynamicPixelsPerUnit = i717[10]
  i716.m_PresetInfoIsWorld = !!i717[11]
  return i716
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i719 = data
  i718.m_IgnoreReversedGraphics = !!i719[0]
  i718.m_BlockingObjects = i719[1]
  i718.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i719[2] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i721 = data
  i720.cullTransparentMesh = !!i721[0]
  return i720
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Texture')
  i722.m_UVRect = UnityEngine.Rect.MinMaxRect(i723[2], i723[3], i723[4], i723[5])
  request.r(i723[6], i723[7], 0, i722, 'm_Material')
  i722.m_Maskable = !!i723[8]
  i722.m_Color = new pc.Color(i723[9], i723[10], i723[11], i723[12])
  i722.m_RaycastTarget = !!i723[13]
  i722.m_RaycastPadding = new pc.Vec4( i723[14], i723[15], i723[16], i723[17] )
  return i722
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i725 = data
  i724.m_AspectMode = i725[0]
  i724.m_AspectRatio = i725[1]
  return i724
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Image' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Sprite')
  i726.m_Type = i727[2]
  i726.m_PreserveAspect = !!i727[3]
  i726.m_FillCenter = !!i727[4]
  i726.m_FillMethod = i727[5]
  i726.m_FillAmount = i727[6]
  i726.m_FillClockwise = !!i727[7]
  i726.m_FillOrigin = i727[8]
  i726.m_UseSpriteMesh = !!i727[9]
  i726.m_PixelsPerUnitMultiplier = i727[10]
  request.r(i727[11], i727[12], 0, i726, 'm_Material')
  i726.m_Maskable = !!i727[13]
  i726.m_Color = new pc.Color(i727[14], i727[15], i727[16], i727[17])
  i726.m_RaycastTarget = !!i727[18]
  i726.m_RaycastPadding = new pc.Vec4( i727[19], i727[20], i727[21], i727[22] )
  return i726
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Button' )
  var i729 = data
  i728.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i729[0], i728.m_OnClick)
  i728.m_Navigation = request.d('UnityEngine.UI.Navigation', i729[1], i728.m_Navigation)
  i728.m_Transition = i729[2]
  i728.m_Colors = request.d('UnityEngine.UI.ColorBlock', i729[3], i728.m_Colors)
  i728.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i729[4], i728.m_SpriteState)
  i728.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i729[5], i728.m_AnimationTriggers)
  i728.m_Interactable = !!i729[6]
  request.r(i729[7], i729[8], 0, i728, 'm_TargetGraphic')
  return i728
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i731 = data
  i730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i731[0], i730.m_PersistentCalls)
  return i730
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('UnityEngine.Events.PersistentCall', i735[i + 0]));
  }
  i732.m_Calls = i734
  return i732
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Target')
  i738.m_TargetAssemblyTypeName = i739[2]
  i738.m_MethodName = i739[3]
  i738.m_Mode = i739[4]
  i738.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i739[5], i738.m_Arguments)
  i738.m_CallState = i739[6]
  return i738
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i741 = data
  i740.m_Mode = i741[0]
  i740.m_WrapAround = !!i741[1]
  request.r(i741[2], i741[3], 0, i740, 'm_SelectOnUp')
  request.r(i741[4], i741[5], 0, i740, 'm_SelectOnDown')
  request.r(i741[6], i741[7], 0, i740, 'm_SelectOnLeft')
  request.r(i741[8], i741[9], 0, i740, 'm_SelectOnRight')
  return i740
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i743 = data
  i742.m_NormalColor = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  i742.m_HighlightedColor = new pc.Color(i743[4], i743[5], i743[6], i743[7])
  i742.m_PressedColor = new pc.Color(i743[8], i743[9], i743[10], i743[11])
  i742.m_SelectedColor = new pc.Color(i743[12], i743[13], i743[14], i743[15])
  i742.m_DisabledColor = new pc.Color(i743[16], i743[17], i743[18], i743[19])
  i742.m_ColorMultiplier = i743[20]
  i742.m_FadeDuration = i743[21]
  return i742
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_HighlightedSprite')
  request.r(i745[2], i745[3], 0, i744, 'm_PressedSprite')
  request.r(i745[4], i745[5], 0, i744, 'm_SelectedSprite')
  request.r(i745[6], i745[7], 0, i744, 'm_DisabledSprite')
  return i744
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i747 = data
  i746.m_NormalTrigger = i747[0]
  i746.m_HighlightedTrigger = i747[1]
  i746.m_PressedTrigger = i747[2]
  i746.m_SelectedTrigger = i747[3]
  i746.m_DisabledTrigger = i747[4]
  return i746
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Text' )
  var i749 = data
  i748.m_FontData = request.d('UnityEngine.UI.FontData', i749[0], i748.m_FontData)
  i748.m_Text = i749[1]
  request.r(i749[2], i749[3], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[4]
  i748.m_Color = new pc.Color(i749[5], i749[6], i749[7], i749[8])
  i748.m_RaycastTarget = !!i749[9]
  i748.m_RaycastPadding = new pc.Vec4( i749[10], i749[11], i749[12], i749[13] )
  return i748
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.FontData' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Font')
  i750.m_FontSize = i751[2]
  i750.m_FontStyle = i751[3]
  i750.m_BestFit = !!i751[4]
  i750.m_MinSize = i751[5]
  i750.m_MaxSize = i751[6]
  i750.m_Alignment = i751[7]
  i750.m_AlignByGeometry = !!i751[8]
  i750.m_RichText = !!i751[9]
  i750.m_HorizontalOverflow = i751[10]
  i750.m_VerticalOverflow = i751[11]
  i750.m_LineSpacing = i751[12]
  return i750
}

Deserializers["TutController"] = function (request, data, root) {
  var i752 = root || request.c( 'TutController' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i755.length; i += 2) {
    i754.add(new pc.Vec2( i755[i + 0], i755[i + 1] ));
  }
  i752.movePos = i754
  i752.moveTime = i753[1]
  i752.fromScale = i753[2]
  i752.toScale = i753[3]
  i752.scaleTime = i753[4]
  return i752
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i758 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i759 = data
  i758.targetIsSelf = !!i759[0]
  request.r(i759[1], i759[2], 0, i758, 'targetGO')
  i758.tweenTargetIsTargetGO = !!i759[3]
  i758.delay = i759[4]
  i758.duration = i759[5]
  i758.easeType = i759[6]
  i758.easeCurve = new pc.AnimationCurve( { keys_flow: i759[7] } )
  i758.loopType = i759[8]
  i758.loops = i759[9]
  i758.id = i759[10]
  i758.isRelative = !!i759[11]
  i758.isFrom = !!i759[12]
  i758.isIndependentUpdate = !!i759[13]
  i758.autoKill = !!i759[14]
  i758.autoGenerate = !!i759[15]
  i758.isActive = !!i759[16]
  i758.isValid = !!i759[17]
  request.r(i759[18], i759[19], 0, i758, 'target')
  i758.animationType = i759[20]
  i758.targetType = i759[21]
  i758.forcedTargetType = i759[22]
  i758.autoPlay = !!i759[23]
  i758.useTargetAsV3 = !!i759[24]
  i758.endValueFloat = i759[25]
  i758.endValueV3 = new pc.Vec3( i759[26], i759[27], i759[28] )
  i758.endValueV2 = new pc.Vec2( i759[29], i759[30] )
  i758.endValueColor = new pc.Color(i759[31], i759[32], i759[33], i759[34])
  i758.endValueString = i759[35]
  i758.endValueRect = UnityEngine.Rect.MinMaxRect(i759[36], i759[37], i759[38], i759[39])
  request.r(i759[40], i759[41], 0, i758, 'endValueTransform')
  i758.optionalBool0 = !!i759[42]
  i758.optionalBool1 = !!i759[43]
  i758.optionalFloat0 = i759[44]
  i758.optionalInt0 = i759[45]
  i758.optionalRotationMode = i759[46]
  i758.optionalScrambleMode = i759[47]
  i758.optionalShakeRandomnessMode = i759[48]
  i758.optionalString = i759[49]
  i758.updateType = i759[50]
  i758.isSpeedBased = !!i759[51]
  i758.hasOnStart = !!i759[52]
  i758.hasOnPlay = !!i759[53]
  i758.hasOnUpdate = !!i759[54]
  i758.hasOnStepComplete = !!i759[55]
  i758.hasOnComplete = !!i759[56]
  i758.hasOnTweenCreated = !!i759[57]
  i758.hasOnRewind = !!i759[58]
  i758.onStart = request.d('UnityEngine.Events.UnityEvent', i759[59], i758.onStart)
  i758.onPlay = request.d('UnityEngine.Events.UnityEvent', i759[60], i758.onPlay)
  i758.onUpdate = request.d('UnityEngine.Events.UnityEvent', i759[61], i758.onUpdate)
  i758.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i759[62], i758.onStepComplete)
  i758.onComplete = request.d('UnityEngine.Events.UnityEvent', i759[63], i758.onComplete)
  i758.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i759[64], i758.onTweenCreated)
  i758.onRewind = request.d('UnityEngine.Events.UnityEvent', i759[65], i758.onRewind)
  return i758
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i761 = data
  i760.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i761[0], i760.m_PersistentCalls)
  return i760
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i762 = root || request.c( 'DefenseController' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'world')
  i762.offset = new pc.Vec2( i763[2], i763[3] )
  i762.cellSize = i763[4]
  request.r(i763[5], i763[6], 0, i762, 'putSound')
  request.r(i763[7], i763[8], 0, i762, 'clickSound')
  var i765 = i763[9]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('BlockType')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('BlockType', i765[i + 0]));
  }
  i762.blockTypes = i764
  request.r(i763[10], i763[11], 0, i762, 'optionTut')
  request.r(i763[12], i763[13], 0, i762, 'buildTut')
  return i762
}

Deserializers["BlockType"] = function (request, data, root) {
  var i768 = root || request.c( 'BlockType' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'Button')
  request.r(i769[2], i769[3], 0, i768, 'Selected')
  request.r(i769[4], i769[5], 0, i768, 'Prefab')
  i768.blockSize = new pc.Vec2( i769[6], i769[7] )
  return i768
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i770 = root || request.c( 'PlayerController' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('Piece', i773[i + 0]));
  }
  i770.pieces = i772
  request.r(i771[1], i771[2], 0, i770, 'deadSFX')
  i770.maxForce = new pc.Vec2( i771[3], i771[4] )
  i770.minForce = new pc.Vec2( i771[5], i771[6] )
  var i775 = i771[7]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('FightOption', i775[i + 0]));
  }
  i770.fightOptions = i774
  request.r(i771[8], i771[9], 0, i770, 'optionTut')
  request.r(i771[10], i771[11], 0, i770, 'attackTut')
  i770.fight = request.d('FightOption', i771[12], i770.fight)
  request.r(i771[13], i771[14], 0, i770, 'clickSound')
  i770.idleSwayAngle = i771[15]
  i770.idleSwaySpeed = i771[16]
  return i770
}

Deserializers["Piece"] = function (request, data, root) {
  var i778 = root || request.c( 'Piece' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'Joint')
  request.r(i779[2], i779[3], 0, i778, 'Rb')
  return i778
}

Deserializers["FightOption"] = function (request, data, root) {
  var i782 = root || request.c( 'FightOption' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'Button')
  request.r(i783[2], i783[3], 0, i782, 'Selected')
  request.r(i783[4], i783[5], 0, i782, 'Controller')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'clip')
  request.r(i785[2], i785[3], 0, i784, 'outputAudioMixerGroup')
  i784.playOnAwake = !!i785[4]
  i784.loop = !!i785[5]
  i784.time = i785[6]
  i784.volume = i785[7]
  i784.pitch = i785[8]
  i784.enabled = !!i785[9]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i787 = data
  i786.useLimits = !!i787[0]
  i786.limits = request.d('UnityEngine.JointAngleLimits2D', i787[1], i786.limits)
  i786.useMotor = !!i787[2]
  i786.motor = request.d('UnityEngine.JointMotor2D', i787[3], i786.motor)
  i786.anchor = new pc.Vec2( i787[4], i787[5] )
  i786.connectedAnchor = new pc.Vec2( i787[6], i787[7] )
  i786.autoConfigureConnectedAnchor = !!i787[8]
  request.r(i787[9], i787[10], 0, i786, 'connectedBody')
  i786.breakForce = i787[11]
  i786.breakTorque = i787[12]
  i786.enableCollision = !!i787[13]
  i786.enabled = !!i787[14]
  return i786
}

Deserializers["ShootController"] = function (request, data, root) {
  var i788 = root || request.c( 'ShootController' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'currentMonster')
  request.r(i789[2], i789[3], 0, i788, 'left')
  request.r(i789[4], i789[5], 0, i788, 'right')
  i788.onCD = !!i789[6]
  i788.CD = i789[7]
  request.r(i789[8], i789[9], 0, i788, 'startPos')
  i788.holdAngle = i789[10]
  i788.equipRaiseDuration = i789[11]
  i788.attackLiftAngle = i789[12]
  i788.attackLiftDuration = i789[13]
  i788.attackReturnDuration = i789[14]
  request.r(i789[15], i789[16], 0, i788, 'attackSound')
  request.r(i789[17], i789[18], 0, i788, 'spawnPrefab')
  request.r(i789[19], i789[20], 0, i788, 'poolParent')
  return i788
}

Deserializers["DropController"] = function (request, data, root) {
  var i790 = root || request.c( 'DropController' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'attackSound')
  request.r(i791[2], i791[3], 0, i790, 'spawnPrefab')
  request.r(i791[4], i791[5], 0, i790, 'poolParent')
  return i790
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i792 = root || request.c( 'MonsterController' )
  var i793 = data
  i792.maxHP = i793[0]
  i792.currentHP = i793[1]
  var i795 = i793[2]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Piece', i795[i + 0]));
  }
  i792.pieces = i794
  request.r(i793[3], i793[4], 0, i792, 'deadSFX')
  i792.maxForce = new pc.Vec2( i793[5], i793[6] )
  i792.minForce = new pc.Vec2( i793[7], i793[8] )
  request.r(i793[9], i793[10], 0, i792, 'balance')
  i792.isDead = !!i793[11]
  i792.speed = i793[12]
  request.r(i793[13], i793[14], 0, i792, 'body')
  request.r(i793[15], i793[16], 0, i792, 'leftHand')
  request.r(i793[17], i793[18], 0, i792, 'rightHand')
  request.r(i793[19], i793[20], 0, i792, 'leftLeg')
  request.r(i793[21], i793[22], 0, i792, 'rightLeg')
  request.r(i793[23], i793[24], 0, i792, 'leftForearm')
  request.r(i793[25], i793[26], 0, i792, 'rightForearm')
  request.r(i793[27], i793[28], 0, i792, 'leftShin')
  request.r(i793[29], i793[30], 0, i792, 'rightShin')
  i792.bodySwayAngle = i793[31]
  i792.bodySwaySpeed = i793[32]
  i792.armForwardAngle = i793[33]
  i792.armSwayAngle = i793[34]
  i792.armSwaySpeed = i793[35]
  i792.armMotorStrength = i793[36]
  i792.armMaxSpeed = i793[37]
  i792.armTorque = i793[38]
  i792.legStrideAngle = i793[39]
  i792.kneeBaseAngle = i793[40]
  i792.kneeBendAngle = i793[41]
  i792.legMotorStrength = i793[42]
  i792.legMaxSpeed = i793[43]
  i792.legTorque = i793[44]
  return i792
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i796 = root || request.c( 'BalanceController' )
  var i797 = data
  i796.targetRotation = i797[0]
  i796.force = i797[1]
  return i796
}

Deserializers["GameController"] = function (request, data, root) {
  var i798 = root || request.c( 'GameController' )
  var i799 = data
  i798.OnStart = request.d('System.Action', i799[0], i798.OnStart)
  i798.OnClick = request.d('System.Action', i799[1], i798.OnClick)
  i798.OnGameOver = request.d('System.Action', i799[2], i798.OnGameOver)
  i798.OnGameComplete = request.d('System.Action', i799[3], i798.OnGameComplete)
  request.r(i799[4], i799[5], 0, i798, 'startScene')
  request.r(i799[6], i799[7], 0, i798, 'buttonFight')
  request.r(i799[8], i799[9], 0, i798, 'buttonDefense')
  request.r(i799[10], i799[11], 0, i798, 'clickSound')
  request.r(i799[12], i799[13], 0, i798, 'fightOptions')
  request.r(i799[14], i799[15], 0, i798, 'tut')
  request.r(i799[16], i799[17], 0, i798, 'defenseOptions')
  request.r(i799[18], i799[19], 0, i798, 'defense')
  request.r(i799[20], i799[21], 0, i798, 'endScene')
  request.r(i799[22], i799[23], 0, i798, 'completeScene')
  request.r(i799[24], i799[25], 0, i798, 'gameOverScene')
  request.r(i799[26], i799[27], 0, i798, 'player')
  i798.numMonster = i799[28]
  request.r(i799[29], i799[30], 0, i798, 'world')
  return i798
}

Deserializers["System.Action"] = function (request, data, root) {
  var i800 = root || request.c( 'System.Action' )
  var i801 = data
  return i800
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i802 = root || request.c( 'LayoutController' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'cam')
  request.r(i803[2], i803[3], 0, i802, 'fight')
  request.r(i803[4], i803[5], 0, i802, 'defense')
  return i802
}

Deserializers["LunaController"] = function (request, data, root) {
  var i804 = root || request.c( 'LunaController' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'BGTexture')
  i804.UseTime = !!i805[2]
  i804.TimePlay = i805[3]
  i804.UseCountPlay = !!i805[4]
  i804.MaxCountPlay = i805[5]
  request.r(i805[6], i805[7], 0, i804, 'BGImage')
  var i807 = i805[8]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 1, i806, '')
  }
  i804.CTA = i806
  i804.count = i805[9]
  request.r(i805[10], i805[11], 0, i804, 'endCard')
  return i804
}

Deserializers["AudioController"] = function (request, data, root) {
  var i810 = root || request.c( 'AudioController' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'BGM')
  request.r(i811[2], i811[3], 0, i810, 'musicSource')
  request.r(i811[4], i811[5], 0, i810, 'pool')
  return i810
}

Deserializers["VFXController"] = function (request, data, root) {
  var i812 = root || request.c( 'VFXController' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'poolParent')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i815 = data
  i814.ambientIntensity = i815[0]
  i814.reflectionIntensity = i815[1]
  i814.ambientMode = i815[2]
  i814.ambientLight = new pc.Color(i815[3], i815[4], i815[5], i815[6])
  i814.ambientSkyColor = new pc.Color(i815[7], i815[8], i815[9], i815[10])
  i814.ambientGroundColor = new pc.Color(i815[11], i815[12], i815[13], i815[14])
  i814.ambientEquatorColor = new pc.Color(i815[15], i815[16], i815[17], i815[18])
  i814.fogColor = new pc.Color(i815[19], i815[20], i815[21], i815[22])
  i814.fogEndDistance = i815[23]
  i814.fogStartDistance = i815[24]
  i814.fogDensity = i815[25]
  i814.fog = !!i815[26]
  request.r(i815[27], i815[28], 0, i814, 'skybox')
  i814.fogMode = i815[29]
  var i817 = i815[30]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i817[i + 0]) );
  }
  i814.lightmaps = i816
  i814.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i815[31], i814.lightProbes)
  i814.lightmapsMode = i815[32]
  i814.mixedBakeMode = i815[33]
  i814.environmentLightingMode = i815[34]
  i814.ambientProbe = new pc.SphericalHarmonicsL2(i815[35])
  request.r(i815[36], i815[37], 0, i814, 'customReflection')
  request.r(i815[38], i815[39], 0, i814, 'defaultReflection')
  i814.defaultReflectionMode = i815[40]
  i814.defaultReflectionResolution = i815[41]
  i814.sunLightObjectId = i815[42]
  i814.pixelLightCount = i815[43]
  i814.defaultReflectionHDR = !!i815[44]
  i814.hasLightDataAsset = !!i815[45]
  i814.hasManualGenerate = !!i815[46]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'lightmapColor')
  request.r(i821[2], i821[3], 0, i820, 'lightmapDirection')
  request.r(i821[4], i821[5], 0, i820, 'shadowMask')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i822 = root || new UnityEngine.LightProbes()
  var i823 = data
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i831 = data
  i830.name = i831[0]
  i830.bounciness = i831[1]
  i830.friction = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i835[i + 0]));
  }
  i832.ShaderCompilationErrors = i834
  i832.name = i833[1]
  i832.guid = i833[2]
  var i837 = i833[3]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.shaderDefinedKeywords = i836
  var i839 = i833[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i839[i + 0]) );
  }
  i832.passes = i838
  var i841 = i833[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i841[i + 0]) );
  }
  i832.usePasses = i840
  var i843 = i833[6]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i843[i + 0]) );
  }
  i832.defaultParameterValues = i842
  request.r(i833[7], i833[8], 0, i832, 'unityFallbackShader')
  i832.readDepth = !!i833[9]
  i832.hasDepthOnlyPass = !!i833[10]
  i832.isCreatedByShaderGraph = !!i833[11]
  i832.disableBatching = !!i833[12]
  i832.compiled = !!i833[13]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i847 = data
  i846.shaderName = i847[0]
  i846.errorMessage = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i852 = root || new pc.UnityShaderPass()
  var i853 = data
  i852.id = i853[0]
  i852.subShaderIndex = i853[1]
  i852.name = i853[2]
  i852.passType = i853[3]
  i852.grabPassTextureName = i853[4]
  i852.usePass = !!i853[5]
  i852.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[6], i852.zTest)
  i852.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[7], i852.zWrite)
  i852.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[8], i852.culling)
  i852.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[9], i852.blending)
  i852.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i853[10], i852.alphaBlending)
  i852.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[11], i852.colorWriteMask)
  i852.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[12], i852.offsetUnits)
  i852.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[13], i852.offsetFactor)
  i852.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[14], i852.stencilRef)
  i852.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[15], i852.stencilReadMask)
  i852.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[16], i852.stencilWriteMask)
  i852.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[17], i852.stencilOp)
  i852.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[18], i852.stencilOpFront)
  i852.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i853[19], i852.stencilOpBack)
  var i855 = i853[20]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i855[i + 0]) );
  }
  i852.tags = i854
  var i857 = i853[21]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i852.passDefinedKeywords = i856
  var i859 = i853[22]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i859[i + 0]) );
  }
  i852.passDefinedKeywordGroups = i858
  var i861 = i853[23]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i861[i + 0]) );
  }
  i852.variants = i860
  var i863 = i853[24]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i863[i + 0]) );
  }
  i852.excludedVariants = i862
  i852.hasDepthReader = !!i853[25]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i865 = data
  i864.val = i865[0]
  i864.name = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i867 = data
  i866.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[0], i866.src)
  i866.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[1], i866.dst)
  i866.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[2], i866.op)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i869 = data
  i868.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[0], i868.pass)
  i868.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[1], i868.fail)
  i868.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[2], i868.zFail)
  i868.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[3], i868.comp)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i873 = data
  i872.name = i873[0]
  i872.value = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i876.keywords = i878
  i876.hasDiscard = !!i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i883 = data
  i882.passId = i883[0]
  i882.subShaderIndex = i883[1]
  var i885 = i883[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i882.keywords = i884
  i882.vertexProgram = i883[3]
  i882.fragmentProgram = i883[4]
  i882.exportedForWebGl2 = !!i883[5]
  i882.readDepth = !!i883[6]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'shader')
  i888.pass = i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i893 = data
  i892.name = i893[0]
  i892.type = i893[1]
  i892.value = new pc.Vec4( i893[2], i893[3], i893[4], i893[5] )
  i892.textureValue = i893[6]
  i892.shaderPropertyFlag = i893[7]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i895 = data
  i894.name = i895[0]
  request.r(i895[1], i895[2], 0, i894, 'texture')
  i894.aabb = i895[3]
  i894.vertices = i895[4]
  i894.triangles = i895[5]
  i894.textureRect = UnityEngine.Rect.MinMaxRect(i895[6], i895[7], i895[8], i895[9])
  i894.packedRect = UnityEngine.Rect.MinMaxRect(i895[10], i895[11], i895[12], i895[13])
  i894.border = new pc.Vec4( i895[14], i895[15], i895[16], i895[17] )
  i894.transparency = i895[18]
  i894.bounds = i895[19]
  i894.pixelsPerUnit = i895[20]
  i894.textureWidth = i895[21]
  i894.textureHeight = i895[22]
  i894.nativeSize = new pc.Vec2( i895[23], i895[24] )
  i894.pivot = new pc.Vec2( i895[25], i895[26] )
  i894.textureRectOffset = new pc.Vec2( i895[27], i895[28] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i897 = data
  i896.name = i897[0]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i899 = data
  i898.name = i899[0]
  i898.wrapMode = i899[1]
  i898.isLooping = !!i899[2]
  i898.length = i899[3]
  var i901 = i899[4]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i901[i + 0]) );
  }
  i898.curves = i900
  var i903 = i899[5]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i903[i + 0]) );
  }
  i898.events = i902
  i898.halfPrecision = !!i899[6]
  i898._frameRate = i899[7]
  i898.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i899[8], i898.localBounds)
  i898.hasMuscleCurves = !!i899[9]
  var i905 = i899[10]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i898.clipMuscleConstant = i904
  i898.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i899[11], i898.clipBindingConstant)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i909 = data
  i908.path = i909[0]
  i908.hash = i909[1]
  i908.componentType = i909[2]
  i908.property = i909[3]
  i908.keys = i909[4]
  var i911 = i909[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i911[i + 0]) );
  }
  i908.objectReferenceKeys = i910
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i915 = data
  i914.time = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'value')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i919 = data
  i918.functionName = i919[0]
  i918.floatParameter = i919[1]
  i918.intParameter = i919[2]
  i918.stringParameter = i919[3]
  request.r(i919[4], i919[5], 0, i918, 'objectReferenceParameter')
  i918.time = i919[6]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i921 = data
  i920.center = new pc.Vec3( i921[0], i921[1], i921[2] )
  i920.extends = new pc.Vec3( i921[3], i921[4], i921[5] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i924.genericBindings = i926
  var i929 = i925[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i924.pptrCurveMapping = i928
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i931 = data
  i930.name = i931[0]
  i930.ascent = i931[1]
  i930.originalLineHeight = i931[2]
  i930.fontSize = i931[3]
  var i933 = i931[4]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i933[i + 0]) );
  }
  i930.characterInfo = i932
  request.r(i931[5], i931[6], 0, i930, 'texture')
  i930.originalFontSize = i931[7]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i937 = data
  i936.index = i937[0]
  i936.advance = i937[1]
  i936.bearing = i937[2]
  i936.glyphWidth = i937[3]
  i936.glyphHeight = i937[4]
  i936.minX = i937[5]
  i936.maxX = i937[6]
  i936.minY = i937[7]
  i936.maxY = i937[8]
  i936.uvBottomLeftX = i937[9]
  i936.uvBottomLeftY = i937[10]
  i936.uvBottomRightX = i937[11]
  i936.uvBottomRightY = i937[12]
  i936.uvTopLeftX = i937[13]
  i936.uvTopLeftY = i937[14]
  i936.uvTopRightX = i937[15]
  i936.uvTopRightY = i937[16]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i939 = data
  i938.name = i939[0]
  var i941 = i939[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i941[i + 0]) );
  }
  i938.layers = i940
  var i943 = i939[2]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i943[i + 0]) );
  }
  i938.parameters = i942
  i938.animationClips = i939[3]
  i938.avatarUnsupported = i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i947 = data
  i946.name = i947[0]
  i946.defaultWeight = i947[1]
  i946.blendingMode = i947[2]
  i946.avatarMask = i947[3]
  i946.syncedLayerIndex = i947[4]
  i946.syncedLayerAffectsTiming = !!i947[5]
  i946.syncedLayers = i947[6]
  i946.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i947[7], i946.stateMachine)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i949 = data
  i948.id = i949[0]
  i948.name = i949[1]
  i948.path = i949[2]
  var i951 = i949[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i951[i + 0]) );
  }
  i948.states = i950
  var i953 = i949[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i953[i + 0]) );
  }
  i948.machines = i952
  var i955 = i949[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i955[i + 0]) );
  }
  i948.entryStateTransitions = i954
  var i957 = i949[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i957[i + 0]) );
  }
  i948.exitStateTransitions = i956
  var i959 = i949[7]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i959[i + 0]) );
  }
  i948.anyStateTransitions = i958
  i948.defaultStateId = i949[8]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i963 = data
  i962.id = i963[0]
  i962.name = i963[1]
  i962.cycleOffset = i963[2]
  i962.cycleOffsetParameter = i963[3]
  i962.cycleOffsetParameterActive = !!i963[4]
  i962.mirror = !!i963[5]
  i962.mirrorParameter = i963[6]
  i962.mirrorParameterActive = !!i963[7]
  i962.motionId = i963[8]
  i962.nameHash = i963[9]
  i962.fullPathHash = i963[10]
  i962.speed = i963[11]
  i962.speedParameter = i963[12]
  i962.speedParameterActive = !!i963[13]
  i962.tag = i963[14]
  i962.tagHash = i963[15]
  i962.writeDefaultValues = !!i963[16]
  var i965 = i963[17]
  var i964 = []
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 2, i964, '')
  }
  i962.behaviours = i964
  var i967 = i963[18]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i967[i + 0]) );
  }
  i962.transitions = i966
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i973 = data
  i972.fullPath = i973[0]
  i972.canTransitionToSelf = !!i973[1]
  i972.duration = i973[2]
  i972.exitTime = i973[3]
  i972.hasExitTime = !!i973[4]
  i972.hasFixedDuration = !!i973[5]
  i972.interruptionSource = i973[6]
  i972.offset = i973[7]
  i972.orderedInterruption = !!i973[8]
  i972.destinationStateId = i973[9]
  i972.isExit = !!i973[10]
  i972.mute = !!i973[11]
  i972.solo = !!i973[12]
  var i975 = i973[13]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i975[i + 0]) );
  }
  i972.conditions = i974
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i979 = data
  i978.mode = i979[0]
  i978.parameter = i979[1]
  i978.threshold = i979[2]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i985 = data
  i984.destinationStateId = i985[0]
  i984.isExit = !!i985[1]
  i984.mute = !!i985[2]
  i984.solo = !!i985[3]
  var i987 = i985[4]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i987[i + 0]) );
  }
  i984.conditions = i986
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i991 = data
  i990.defaultBool = !!i991[0]
  i990.defaultFloat = i991[1]
  i990.defaultInt = i991[2]
  i990.name = i991[3]
  i990.nameHash = i991[4]
  i990.type = i991[5]
  return i990
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i993 = data
  i992.useSafeMode = !!i993[0]
  i992.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i993[1], i992.safeModeOptions)
  i992.timeScale = i993[2]
  i992.unscaledTimeScale = i993[3]
  i992.useSmoothDeltaTime = !!i993[4]
  i992.maxSmoothUnscaledTime = i993[5]
  i992.rewindCallbackMode = i993[6]
  i992.showUnityEditorReport = !!i993[7]
  i992.logBehaviour = i993[8]
  i992.drawGizmos = !!i993[9]
  i992.defaultRecyclable = !!i993[10]
  i992.defaultAutoPlay = i993[11]
  i992.defaultUpdateType = i993[12]
  i992.defaultTimeScaleIndependent = !!i993[13]
  i992.defaultEaseType = i993[14]
  i992.defaultEaseOvershootOrAmplitude = i993[15]
  i992.defaultEasePeriod = i993[16]
  i992.defaultAutoKill = !!i993[17]
  i992.defaultLoopType = i993[18]
  i992.debugMode = !!i993[19]
  i992.debugStoreTargetId = !!i993[20]
  i992.showPreviewPanel = !!i993[21]
  i992.storeSettingsLocation = i993[22]
  i992.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i993[23], i992.modules)
  i992.createASMDEF = !!i993[24]
  i992.showPlayingTweens = !!i993[25]
  i992.showPausedTweens = !!i993[26]
  return i992
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i994 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i995 = data
  i994.logBehaviour = i995[0]
  i994.nestedTweenFailureBehaviour = i995[1]
  return i994
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i997 = data
  i996.showPanel = !!i997[0]
  i996.audioEnabled = !!i997[1]
  i996.physicsEnabled = !!i997[2]
  i996.physics2DEnabled = !!i997[3]
  i996.spriteEnabled = !!i997[4]
  i996.uiEnabled = !!i997[5]
  i996.textMeshProEnabled = !!i997[6]
  i996.tk2DEnabled = !!i997[7]
  i996.deAudioEnabled = !!i997[8]
  i996.deUnityExtendedEnabled = !!i997[9]
  i996.epoOutlineEnabled = !!i997[10]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1001[i + 0]) );
  }
  i998.files = i1000
  i998.componentToPrefabIds = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1005 = data
  i1004.path = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'unityObject')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1009[i + 0]) );
  }
  i1006.scriptsExecutionOrder = i1008
  var i1011 = i1007[1]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1011[i + 0]) );
  }
  i1006.sortingLayers = i1010
  var i1013 = i1007[2]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1013[i + 0]) );
  }
  i1006.cullingLayers = i1012
  i1006.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1007[3], i1006.timeSettings)
  i1006.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1007[4], i1006.physicsSettings)
  i1006.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1007[5], i1006.physics2DSettings)
  i1006.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1007[6], i1006.qualitySettings)
  i1006.enableRealtimeShadows = !!i1007[7]
  i1006.enableAutoInstancing = !!i1007[8]
  i1006.enableStaticBatching = !!i1007[9]
  i1006.enableDynamicBatching = !!i1007[10]
  i1006.usePreservativeDynamicBatching = !!i1007[11]
  i1006.lightmapEncodingQuality = i1007[12]
  i1006.desiredColorSpace = i1007[13]
  var i1015 = i1007[14]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1006.allTags = i1014
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.value = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  i1022.value = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1029 = data
  i1028.fixedDeltaTime = i1029[0]
  i1028.maximumDeltaTime = i1029[1]
  i1028.timeScale = i1029[2]
  i1028.maximumParticleTimestep = i1029[3]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1031 = data
  i1030.gravity = new pc.Vec3( i1031[0], i1031[1], i1031[2] )
  i1030.defaultSolverIterations = i1031[3]
  i1030.bounceThreshold = i1031[4]
  i1030.autoSyncTransforms = !!i1031[5]
  i1030.autoSimulation = !!i1031[6]
  var i1033 = i1031[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1033[i + 0]) );
  }
  i1030.collisionMatrix = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.layerId = i1037[1]
  i1036.otherLayerId = i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'material')
  i1038.gravity = new pc.Vec2( i1039[2], i1039[3] )
  i1038.positionIterations = i1039[4]
  i1038.velocityIterations = i1039[5]
  i1038.velocityThreshold = i1039[6]
  i1038.maxLinearCorrection = i1039[7]
  i1038.maxAngularCorrection = i1039[8]
  i1038.maxTranslationSpeed = i1039[9]
  i1038.maxRotationSpeed = i1039[10]
  i1038.baumgarteScale = i1039[11]
  i1038.baumgarteTOIScale = i1039[12]
  i1038.timeToSleep = i1039[13]
  i1038.linearSleepTolerance = i1039[14]
  i1038.angularSleepTolerance = i1039[15]
  i1038.defaultContactOffset = i1039[16]
  i1038.autoSimulation = !!i1039[17]
  i1038.queriesHitTriggers = !!i1039[18]
  i1038.queriesStartInColliders = !!i1039[19]
  i1038.callbacksOnDisable = !!i1039[20]
  i1038.reuseCollisionCallbacks = !!i1039[21]
  i1038.autoSyncTransforms = !!i1039[22]
  var i1041 = i1039[23]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1049[i + 0]) );
  }
  i1046.qualityLevels = i1048
  var i1051 = i1047[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.names = i1050
  i1046.shadows = i1047[2]
  i1046.anisotropicFiltering = i1047[3]
  i1046.antiAliasing = i1047[4]
  i1046.lodBias = i1047[5]
  i1046.shadowCascades = i1047[6]
  i1046.shadowDistance = i1047[7]
  i1046.shadowmaskMode = i1047[8]
  i1046.shadowProjection = i1047[9]
  i1046.shadowResolution = i1047[10]
  i1046.softParticles = !!i1047[11]
  i1046.softVegetation = !!i1047[12]
  i1046.activeColorSpace = i1047[13]
  i1046.desiredColorSpace = i1047[14]
  i1046.masterTextureLimit = i1047[15]
  i1046.maxQueuedFrames = i1047[16]
  i1046.particleRaycastBudget = i1047[17]
  i1046.pixelLightCount = i1047[18]
  i1046.realtimeReflectionProbes = !!i1047[19]
  i1046.shadowCascade2Split = i1047[20]
  i1046.shadowCascade4Split = new pc.Vec3( i1047[21], i1047[22], i1047[23] )
  i1046.streamingMipmapsActive = !!i1047[24]
  i1046.vSyncCount = i1047[25]
  i1046.asyncUploadBufferSize = i1047[26]
  i1046.asyncUploadTimeSlice = i1047[27]
  i1046.billboardsFaceCameraPosition = !!i1047[28]
  i1046.shadowNearPlaneOffset = i1047[29]
  i1046.streamingMipmapsMemoryBudget = i1047[30]
  i1046.maximumLODLevel = i1047[31]
  i1046.streamingMipmapsAddAllCameras = !!i1047[32]
  i1046.streamingMipmapsMaxLevelReduction = i1047[33]
  i1046.streamingMipmapsRenderersPerFrame = i1047[34]
  i1046.resolutionScalingFixedDPIFactor = i1047[35]
  i1046.streamingMipmapsMaxFileIORequests = i1047[36]
  i1046.currentQualityLevel = i1047[37]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1057 = data
  i1056.weight = i1057[0]
  i1056.vertices = i1057[1]
  i1056.normals = i1057[2]
  i1056.tangents = i1057[3]
  return i1056
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'm_ObjectArgument')
  i1058.m_ObjectArgumentAssemblyTypeName = i1059[2]
  i1058.m_IntArgument = i1059[3]
  i1058.m_FloatArgument = i1059[4]
  i1058.m_StringArgument = i1059[5]
  i1058.m_BoolArgument = !!i1059[6]
  return i1058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[21],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[17],"72":[17],"73":[17],"74":[17],"75":[17],"76":[17],"41":[17],"77":[17],"78":[17],"79":[17],"80":[17],"81":[17],"82":[17],"83":[21],"84":[85],"86":[87],"88":[87],"27":[26],"89":[2],"90":[21],"91":[92],"93":[26],"94":[30,26],"95":[85],"96":[30,26],"97":[26],"98":[26],"99":[85,26],"100":[26,30],"101":[102],"103":[102],"104":[102],"105":[26],"106":[26],"29":[27],"33":[30,26],"32":[26],"28":[27],"107":[26],"108":[26],"109":[26],"110":[26],"111":[26],"112":[26],"113":[26],"114":[26],"115":[26],"31":[30,26],"116":[26],"117":[26],"118":[26],"119":[26],"35":[30,26],"120":[26],"121":[24],"122":[24],"25":[24],"123":[24],"124":[21],"125":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","BlockController","UnityEngine.AudioClip","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.CircleCollider2D","BulletController","KunaiController","UnityEngine.Rigidbody2D","BombController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","DefenseController","PlayerController","UnityEngine.HingeJoint2D","ShootController","DropController","UnityEngine.AudioSource","UnityEngine.PhysicsMaterial2D","MonsterController","BalanceController","GameController","LayoutController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/06/2026 09:58:06";

Deserializers.lunaDaysRunning = "82.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SRP_V09_HoaiTT";

Deserializers.lunaAppID = "42814";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1771";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4516";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "985fa456-e95d-4be9-b367-557e716365a5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

