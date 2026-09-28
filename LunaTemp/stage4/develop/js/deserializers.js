var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSpring' )
  var i533 = data
  i532.spring = i533[0]
  i532.damper = i533[1]
  i532.targetPosition = i533[2]
  return i532
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor' )
  var i535 = data
  i534.m_TargetVelocity = i535[0]
  i534.m_Force = i535[1]
  i534.m_FreeSpin = i535[2]
  return i534
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointLimits' )
  var i537 = data
  i536.m_Min = i537[0]
  i536.m_Max = i537[1]
  i536.m_Bounciness = i537[2]
  i536.m_BounceMinVelocity = i537[3]
  i536.m_ContactDistance = i537[4]
  i536.minBounce = i537[5]
  i536.maxBounce = i537[6]
  return i536
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointDrive' )
  var i539 = data
  i538.m_PositionSpring = i539[0]
  i538.m_PositionDamper = i539[1]
  i538.m_MaximumForce = i539[2]
  i538.m_UseAcceleration = i539[3]
  return i538
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i541 = data
  i540.m_Spring = i541[0]
  i540.m_Damper = i541[1]
  return i540
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i543 = data
  i542.m_Limit = i543[0]
  i542.m_Bounciness = i543[1]
  i542.m_ContactDistance = i543[2]
  return i542
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i545 = data
  i544.m_ExtremumSlip = i545[0]
  i544.m_ExtremumValue = i545[1]
  i544.m_AsymptoteSlip = i545[2]
  i544.m_AsymptoteValue = i545[3]
  i544.m_Stiffness = i545[4]
  return i544
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i547 = data
  i546.m_LowerAngle = i547[0]
  i546.m_UpperAngle = i547[1]
  return i546
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i549 = data
  i548.m_MotorSpeed = i549[0]
  i548.m_MaximumMotorTorque = i549[1]
  return i548
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i551 = data
  i550.m_DampingRatio = i551[0]
  i550.m_Frequency = i551[1]
  i550.m_Angle = i551[2]
  return i550
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i553 = data
  i552.m_LowerTranslation = i553[0]
  i552.m_UpperTranslation = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i555 = data
  i554.name = i555[0]
  i554.width = i555[1]
  i554.height = i555[2]
  i554.mipmapCount = i555[3]
  i554.anisoLevel = i555[4]
  i554.filterMode = i555[5]
  i554.hdr = !!i555[6]
  i554.format = i555[7]
  i554.wrapMode = i555[8]
  i554.alphaIsTransparency = !!i555[9]
  i554.alphaSource = i555[10]
  i554.graphicsFormat = i555[11]
  i554.sRGBTexture = !!i555[12]
  i554.desiredColorSpace = i555[13]
  i554.wrapU = i555[14]
  i554.wrapV = i555[15]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i556 = root || new pc.UnityMaterial()
  var i557 = data
  i556.name = i557[0]
  request.r(i557[1], i557[2], 0, i556, 'shader')
  i556.renderQueue = i557[3]
  i556.enableInstancing = !!i557[4]
  var i559 = i557[5]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i559[i + 0]) );
  }
  i556.floatParameters = i558
  var i561 = i557[6]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i561[i + 0]) );
  }
  i556.colorParameters = i560
  var i563 = i557[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i563[i + 0]) );
  }
  i556.vectorParameters = i562
  var i565 = i557[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i565[i + 0]) );
  }
  i556.textureParameters = i564
  var i567 = i557[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i567[i + 0]) );
  }
  i556.materialFlags = i566
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Color(i575[1], i575[2], i575[3], i575[4])
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = new pc.Vec4( i579[1], i579[2], i579[3], i579[4] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'value')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i587 = data
  i586.name = i587[0]
  i586.enabled = !!i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i589 = data
  i588.position = new pc.Vec3( i589[0], i589[1], i589[2] )
  i588.scale = new pc.Vec3( i589[3], i589[4], i589[5] )
  i588.rotation = new pc.Quat(i589[6], i589[7], i589[8], i589[9])
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i591 = data
  i590.color = new pc.Color(i591[0], i591[1], i591[2], i591[3])
  request.r(i591[4], i591[5], 0, i590, 'sprite')
  i590.flipX = !!i591[6]
  i590.flipY = !!i591[7]
  i590.drawMode = i591[8]
  i590.size = new pc.Vec2( i591[9], i591[10] )
  i590.tileMode = i591[11]
  i590.adaptiveModeThreshold = i591[12]
  i590.maskInteraction = i591[13]
  i590.spriteSortPoint = i591[14]
  i590.enabled = !!i591[15]
  request.r(i591[16], i591[17], 0, i590, 'sharedMaterial')
  var i593 = i591[18]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.sharedMaterials = i592
  i590.receiveShadows = !!i591[19]
  i590.shadowCastingMode = i591[20]
  i590.sortingLayerID = i591[21]
  i590.sortingOrder = i591[22]
  i590.lightmapIndex = i591[23]
  i590.lightmapSceneIndex = i591[24]
  i590.lightmapScaleOffset = new pc.Vec4( i591[25], i591[26], i591[27], i591[28] )
  i590.lightProbeUsage = i591[29]
  i590.reflectionProbeUsage = i591[30]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i597 = data
  i596.radius = i597[0]
  i596.enabled = !!i597[1]
  i596.isTrigger = !!i597[2]
  i596.usedByEffector = !!i597[3]
  i596.density = i597[4]
  i596.offset = new pc.Vec2( i597[5], i597[6] )
  request.r(i597[7], i597[8], 0, i596, 'material')
  return i596
}

Deserializers["BulletController"] = function (request, data, root) {
  var i598 = root || request.c( 'BulletController' )
  var i599 = data
  i598.speed = i599[0]
  i598.damage = i599[1]
  request.r(i599[2], i599[3], 0, i598, 'hitMonsterSound')
  request.r(i599[4], i599[5], 0, i598, 'hitSound')
  i598.lifeTime = i599[6]
  i598.hit = !!i599[7]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i601 = data
  i600.name = i601[0]
  i600.tagId = i601[1]
  i600.enabled = !!i601[2]
  i600.isStatic = !!i601[3]
  i600.layer = i601[4]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i603 = data
  i602.usedByComposite = !!i603[0]
  i602.autoTiling = !!i603[1]
  i602.size = new pc.Vec2( i603[2], i603[3] )
  i602.edgeRadius = i603[4]
  i602.enabled = !!i603[5]
  i602.isTrigger = !!i603[6]
  i602.usedByEffector = !!i603[7]
  i602.density = i603[8]
  i602.offset = new pc.Vec2( i603[9], i603[10] )
  request.r(i603[11], i603[12], 0, i602, 'material')
  return i602
}

Deserializers["KunaiController"] = function (request, data, root) {
  var i604 = root || request.c( 'KunaiController' )
  var i605 = data
  i604.damage = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'hitMonsterSound')
  request.r(i605[3], i605[4], 0, i604, 'hitSound')
  i604.lifeTime = i605[5]
  i604.rotateSpeed = i605[6]
  i604.moveSpeed = i605[7]
  i604.hit = !!i605[8]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i607 = data
  i606.bodyType = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'material')
  i606.simulated = !!i607[3]
  i606.useAutoMass = !!i607[4]
  i606.mass = i607[5]
  i606.drag = i607[6]
  i606.angularDrag = i607[7]
  i606.gravityScale = i607[8]
  i606.collisionDetectionMode = i607[9]
  i606.sleepMode = i607[10]
  i606.constraints = i607[11]
  return i606
}

Deserializers["BombController"] = function (request, data, root) {
  var i608 = root || request.c( 'BombController' )
  var i609 = data
  i608.damage = i609[0]
  i608.layer = UnityEngine.LayerMask.FromIntegerValue( i609[1] )
  request.r(i609[2], i609[3], 0, i608, 'startSound')
  request.r(i609[4], i609[5], 0, i608, 'actionSound')
  i608.delay = i609[6]
  request.r(i609[7], i609[8], 0, i608, 'anim')
  request.r(i609[9], i609[10], 0, i608, 'vfx1')
  request.r(i609[11], i609[12], 0, i608, 'vfx2')
  i608.scale = i609[13]
  i608.radius = i609[14]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'animatorController')
  request.r(i611[2], i611[3], 0, i610, 'avatar')
  i610.updateMode = i611[4]
  i610.hasTransformHierarchy = !!i611[5]
  i610.applyRootMotion = !!i611[6]
  var i613 = i611[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.humanBones = i612
  i610.enabled = !!i611[8]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i617 = data
  i616.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i617[0], i616.main)
  i616.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i617[1], i616.colorBySpeed)
  i616.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i617[2], i616.colorOverLifetime)
  i616.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i617[3], i616.emission)
  i616.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i617[4], i616.rotationBySpeed)
  i616.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i617[5], i616.rotationOverLifetime)
  i616.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i617[6], i616.shape)
  i616.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i617[7], i616.sizeBySpeed)
  i616.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i617[8], i616.sizeOverLifetime)
  i616.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i617[9], i616.textureSheetAnimation)
  i616.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i617[10], i616.velocityOverLifetime)
  i616.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i617[11], i616.noise)
  i616.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i617[12], i616.inheritVelocity)
  i616.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i617[13], i616.forceOverLifetime)
  i616.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i617[14], i616.limitVelocityOverLifetime)
  i616.useAutoRandomSeed = !!i617[15]
  i616.randomSeed = i617[16]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemMain()
  var i619 = data
  i618.duration = i619[0]
  i618.loop = !!i619[1]
  i618.prewarm = !!i619[2]
  i618.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[3], i618.startDelay)
  i618.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[4], i618.startLifetime)
  i618.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[5], i618.startSpeed)
  i618.startSize3D = !!i619[6]
  i618.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[7], i618.startSizeX)
  i618.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[8], i618.startSizeY)
  i618.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[9], i618.startSizeZ)
  i618.startRotation3D = !!i619[10]
  i618.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[11], i618.startRotationX)
  i618.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[12], i618.startRotationY)
  i618.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[13], i618.startRotationZ)
  i618.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[14], i618.startColor)
  i618.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[15], i618.gravityModifier)
  i618.simulationSpace = i619[16]
  request.r(i619[17], i619[18], 0, i618, 'customSimulationSpace')
  i618.simulationSpeed = i619[19]
  i618.useUnscaledTime = !!i619[20]
  i618.scalingMode = i619[21]
  i618.playOnAwake = !!i619[22]
  i618.maxParticles = i619[23]
  i618.emitterVelocityMode = i619[24]
  i618.stopAction = i619[25]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i620 = root || new pc.MinMaxCurve()
  var i621 = data
  i620.mode = i621[0]
  i620.curveMin = new pc.AnimationCurve( { keys_flow: i621[1] } )
  i620.curveMax = new pc.AnimationCurve( { keys_flow: i621[2] } )
  i620.curveMultiplier = i621[3]
  i620.constantMin = i621[4]
  i620.constantMax = i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i622 = root || new pc.MinMaxGradient()
  var i623 = data
  i622.mode = i623[0]
  i622.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i623[1], i622.gradientMin)
  i622.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i623[2], i622.gradientMax)
  i622.colorMin = new pc.Color(i623[3], i623[4], i623[5], i623[6])
  i622.colorMax = new pc.Color(i623[7], i623[8], i623[9], i623[10])
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i625 = data
  i624.mode = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i627[i + 0]) );
  }
  i624.colorKeys = i626
  var i629 = i625[2]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i629[i + 0]) );
  }
  i624.alphaKeys = i628
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemColorBySpeed()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i631[1], i630.color)
  i630.range = new pc.Vec2( i631[2], i631[3] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i635 = data
  i634.color = new pc.Color(i635[0], i635[1], i635[2], i635[3])
  i634.time = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i639 = data
  i638.alpha = i639[0]
  i638.time = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemColorOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i641[1], i640.color)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemEmitter()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.rateOverTime)
  i642.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.rateOverDistance)
  var i645 = i643[3]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i645[i + 0]) );
  }
  i642.bursts = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemBurst()
  var i649 = data
  i648.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[0], i648.count)
  i648.cycleCount = i649[1]
  i648.minCount = i649[2]
  i648.maxCount = i649[3]
  i648.repeatInterval = i649[4]
  i648.time = i649[5]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemRotationBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.separateAxes = !!i651[4]
  i650.range = new pc.Vec2( i651[5], i651[6] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemRotationOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.x)
  i652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.y)
  i652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.z)
  i652.separateAxes = !!i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemShape()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.shapeType = i655[1]
  i654.randomDirectionAmount = i655[2]
  i654.sphericalDirectionAmount = i655[3]
  i654.randomPositionAmount = i655[4]
  i654.alignToDirection = !!i655[5]
  i654.radius = i655[6]
  i654.radiusMode = i655[7]
  i654.radiusSpread = i655[8]
  i654.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[9], i654.radiusSpeed)
  i654.radiusThickness = i655[10]
  i654.angle = i655[11]
  i654.length = i655[12]
  i654.boxThickness = new pc.Vec3( i655[13], i655[14], i655[15] )
  i654.meshShapeType = i655[16]
  request.r(i655[17], i655[18], 0, i654, 'mesh')
  request.r(i655[19], i655[20], 0, i654, 'meshRenderer')
  request.r(i655[21], i655[22], 0, i654, 'skinnedMeshRenderer')
  i654.useMeshMaterialIndex = !!i655[23]
  i654.meshMaterialIndex = i655[24]
  i654.useMeshColors = !!i655[25]
  i654.normalOffset = i655[26]
  i654.arc = i655[27]
  i654.arcMode = i655[28]
  i654.arcSpread = i655[29]
  i654.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[30], i654.arcSpeed)
  i654.donutRadius = i655[31]
  i654.position = new pc.Vec3( i655[32], i655[33], i655[34] )
  i654.rotation = new pc.Vec3( i655[35], i655[36], i655[37] )
  i654.scale = new pc.Vec3( i655[38], i655[39], i655[40] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemSizeBySpeed()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.separateAxes = !!i657[4]
  i656.range = new pc.Vec2( i657[5], i657[6] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemSizeOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.mode = i661[1]
  i660.animation = i661[2]
  i660.numTilesX = i661[3]
  i660.numTilesY = i661[4]
  i660.useRandomRow = !!i661[5]
  i660.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[6], i660.frameOverTime)
  i660.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.startFrame)
  i660.cycleCount = i661[8]
  i660.rowIndex = i661[9]
  i660.flipU = i661[10]
  i660.flipV = i661[11]
  i660.spriteCount = i661[12]
  var i663 = i661[13]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sprites = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[4], i666.radial)
  i666.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[5], i666.speedModifier)
  i666.space = i667[6]
  i666.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[7], i666.orbitalX)
  i666.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[8], i666.orbitalY)
  i666.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[9], i666.orbitalZ)
  i666.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[10], i666.orbitalOffsetX)
  i666.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[11], i666.orbitalOffsetY)
  i666.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[12], i666.orbitalOffsetZ)
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemNoise()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.separateAxes = !!i669[1]
  i668.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.strengthX)
  i668.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.strengthY)
  i668.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[4], i668.strengthZ)
  i668.frequency = i669[5]
  i668.damping = !!i669[6]
  i668.octaveCount = i669[7]
  i668.octaveMultiplier = i669[8]
  i668.octaveScale = i669[9]
  i668.quality = i669[10]
  i668.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[11], i668.scrollSpeed)
  i668.scrollSpeedMultiplier = i669[12]
  i668.remapEnabled = !!i669[13]
  i668.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[14], i668.remapX)
  i668.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[15], i668.remapY)
  i668.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[16], i668.remapZ)
  i668.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[17], i668.positionAmount)
  i668.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[18], i668.rotationAmount)
  i668.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[19], i668.sizeAmount)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemInheritVelocity()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.mode = i671[1]
  i670.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.curve)
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemForceOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.space = i673[4]
  i672.randomized = !!i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.limit)
  i674.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.limitX)
  i674.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.limitY)
  i674.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[4], i674.limitZ)
  i674.dampen = i675[5]
  i674.separateAxes = !!i675[6]
  i674.space = i675[7]
  i674.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[8], i674.drag)
  i674.multiplyDragByParticleSize = !!i675[9]
  i674.multiplyDragByParticleVelocity = !!i675[10]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'mesh')
  i676.meshCount = i677[2]
  i676.activeVertexStreamsCount = i677[3]
  i676.alignment = i677[4]
  i676.renderMode = i677[5]
  i676.sortMode = i677[6]
  i676.lengthScale = i677[7]
  i676.velocityScale = i677[8]
  i676.cameraVelocityScale = i677[9]
  i676.normalDirection = i677[10]
  i676.sortingFudge = i677[11]
  i676.minParticleSize = i677[12]
  i676.maxParticleSize = i677[13]
  i676.pivot = new pc.Vec3( i677[14], i677[15], i677[16] )
  request.r(i677[17], i677[18], 0, i676, 'trailMaterial')
  i676.applyActiveColorSpace = !!i677[19]
  i676.enabled = !!i677[20]
  request.r(i677[21], i677[22], 0, i676, 'sharedMaterial')
  var i679 = i677[23]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sharedMaterials = i678
  i676.receiveShadows = !!i677[24]
  i676.shadowCastingMode = i677[25]
  i676.sortingLayerID = i677[26]
  i676.sortingOrder = i677[27]
  i676.lightmapIndex = i677[28]
  i676.lightmapSceneIndex = i677[29]
  i676.lightmapScaleOffset = new pc.Vec4( i677[30], i677[31], i677[32], i677[33] )
  i676.lightProbeUsage = i677[34]
  i676.reflectionProbeUsage = i677[35]
  return i676
}

Deserializers["BlockController"] = function (request, data, root) {
  var i680 = root || request.c( 'BlockController' )
  var i681 = data
  i680.maxHP = i681[0]
  i680.currentHP = i681[1]
  i680.isBreak = !!i681[2]
  i680.numMonster = i681[3]
  request.r(i681[4], i681[5], 0, i680, 'hitSFX')
  request.r(i681[6], i681[7], 0, i680, 'breakVFX')
  request.r(i681[8], i681[9], 0, i680, 'breakSFX')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i683 = data
  i682.name = i683[0]
  i682.halfPrecision = !!i683[1]
  i682.useSimplification = !!i683[2]
  i682.useUInt32IndexFormat = !!i683[3]
  i682.vertexCount = i683[4]
  i682.aabb = i683[5]
  var i685 = i683[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( !!i685[i + 0] );
  }
  i682.streams = i684
  i682.vertices = i683[7]
  var i687 = i683[8]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i687[i + 0]) );
  }
  i682.subMeshes = i686
  var i689 = i683[9]
  var i688 = []
  for(var i = 0; i < i689.length; i += 16) {
    i688.push( new pc.Mat4().setData(i689[i + 0], i689[i + 1], i689[i + 2], i689[i + 3],  i689[i + 4], i689[i + 5], i689[i + 6], i689[i + 7],  i689[i + 8], i689[i + 9], i689[i + 10], i689[i + 11],  i689[i + 12], i689[i + 13], i689[i + 14], i689[i + 15]) );
  }
  i682.bindposes = i688
  var i691 = i683[10]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i691[i + 0]) );
  }
  i682.blendShapes = i690
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i697 = data
  i696.triangles = i697[0]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i703 = data
  i702.name = i703[0]
  var i705 = i703[1]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i705[i + 0]) );
  }
  i702.frames = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i707 = data
  i706.name = i707[0]
  i706.index = i707[1]
  i706.startup = !!i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i709 = data
  i708.aspect = i709[0]
  i708.orthographic = !!i709[1]
  i708.orthographicSize = i709[2]
  i708.backgroundColor = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.nearClipPlane = i709[7]
  i708.farClipPlane = i709[8]
  i708.fieldOfView = i709[9]
  i708.depth = i709[10]
  i708.clearFlags = i709[11]
  i708.cullingMask = i709[12]
  i708.rect = i709[13]
  request.r(i709[14], i709[15], 0, i708, 'targetTexture')
  i708.usePhysicalProperties = !!i709[16]
  i708.focalLength = i709[17]
  i708.sensorSize = new pc.Vec2( i709[18], i709[19] )
  i708.lensShift = new pc.Vec2( i709[20], i709[21] )
  i708.gateFit = i709[22]
  i708.commandBufferCount = i709[23]
  i708.cameraType = i709[24]
  i708.enabled = !!i709[25]
  return i708
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_FirstSelected')
  i710.m_sendNavigationEvents = !!i711[2]
  i710.m_DragThreshold = i711[3]
  return i710
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i713 = data
  i712.m_HorizontalAxis = i713[0]
  i712.m_VerticalAxis = i713[1]
  i712.m_SubmitButton = i713[2]
  i712.m_CancelButton = i713[3]
  i712.m_InputActionsPerSecond = i713[4]
  i712.m_RepeatDelay = i713[5]
  i712.m_ForceModuleActive = !!i713[6]
  i712.m_SendPointerHoverToParent = !!i713[7]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i715 = data
  i714.pivot = new pc.Vec2( i715[0], i715[1] )
  i714.anchorMin = new pc.Vec2( i715[2], i715[3] )
  i714.anchorMax = new pc.Vec2( i715[4], i715[5] )
  i714.sizeDelta = new pc.Vec2( i715[6], i715[7] )
  i714.anchoredPosition3D = new pc.Vec3( i715[8], i715[9], i715[10] )
  i714.rotation = new pc.Quat(i715[11], i715[12], i715[13], i715[14])
  i714.scale = new pc.Vec3( i715[15], i715[16], i715[17] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i717 = data
  i716.planeDistance = i717[0]
  i716.referencePixelsPerUnit = i717[1]
  i716.isFallbackOverlay = !!i717[2]
  i716.renderMode = i717[3]
  i716.renderOrder = i717[4]
  i716.sortingLayerName = i717[5]
  i716.sortingOrder = i717[6]
  i716.scaleFactor = i717[7]
  request.r(i717[8], i717[9], 0, i716, 'worldCamera')
  i716.overrideSorting = !!i717[10]
  i716.pixelPerfect = !!i717[11]
  i716.targetDisplay = i717[12]
  i716.overridePixelPerfect = !!i717[13]
  i716.enabled = !!i717[14]
  return i716
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i719 = data
  i718.m_UiScaleMode = i719[0]
  i718.m_ReferencePixelsPerUnit = i719[1]
  i718.m_ScaleFactor = i719[2]
  i718.m_ReferenceResolution = new pc.Vec2( i719[3], i719[4] )
  i718.m_ScreenMatchMode = i719[5]
  i718.m_MatchWidthOrHeight = i719[6]
  i718.m_PhysicalUnit = i719[7]
  i718.m_FallbackScreenDPI = i719[8]
  i718.m_DefaultSpriteDPI = i719[9]
  i718.m_DynamicPixelsPerUnit = i719[10]
  i718.m_PresetInfoIsWorld = !!i719[11]
  return i718
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i721 = data
  i720.m_IgnoreReversedGraphics = !!i721[0]
  i720.m_BlockingObjects = i721[1]
  i720.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i721[2] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i723 = data
  i722.cullTransparentMesh = !!i723[0]
  return i722
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_Texture')
  i724.m_UVRect = UnityEngine.Rect.MinMaxRect(i725[2], i725[3], i725[4], i725[5])
  request.r(i725[6], i725[7], 0, i724, 'm_Material')
  i724.m_Maskable = !!i725[8]
  i724.m_Color = new pc.Color(i725[9], i725[10], i725[11], i725[12])
  i724.m_RaycastTarget = !!i725[13]
  i724.m_RaycastPadding = new pc.Vec4( i725[14], i725[15], i725[16], i725[17] )
  return i724
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i727 = data
  i726.m_AspectMode = i727[0]
  i726.m_AspectRatio = i727[1]
  return i726
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Image' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'm_Sprite')
  i728.m_Type = i729[2]
  i728.m_PreserveAspect = !!i729[3]
  i728.m_FillCenter = !!i729[4]
  i728.m_FillMethod = i729[5]
  i728.m_FillAmount = i729[6]
  i728.m_FillClockwise = !!i729[7]
  i728.m_FillOrigin = i729[8]
  i728.m_UseSpriteMesh = !!i729[9]
  i728.m_PixelsPerUnitMultiplier = i729[10]
  request.r(i729[11], i729[12], 0, i728, 'm_Material')
  i728.m_Maskable = !!i729[13]
  i728.m_Color = new pc.Color(i729[14], i729[15], i729[16], i729[17])
  i728.m_RaycastTarget = !!i729[18]
  i728.m_RaycastPadding = new pc.Vec4( i729[19], i729[20], i729[21], i729[22] )
  return i728
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Button' )
  var i731 = data
  i730.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i731[0], i730.m_OnClick)
  i730.m_Navigation = request.d('UnityEngine.UI.Navigation', i731[1], i730.m_Navigation)
  i730.m_Transition = i731[2]
  i730.m_Colors = request.d('UnityEngine.UI.ColorBlock', i731[3], i730.m_Colors)
  i730.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i731[4], i730.m_SpriteState)
  i730.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i731[5], i730.m_AnimationTriggers)
  i730.m_Interactable = !!i731[6]
  request.r(i731[7], i731[8], 0, i730, 'm_TargetGraphic')
  return i730
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i733 = data
  i732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i733[0], i732.m_PersistentCalls)
  return i732
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.Events.PersistentCall', i737[i + 0]));
  }
  i734.m_Calls = i736
  return i734
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Target')
  i740.m_TargetAssemblyTypeName = i741[2]
  i740.m_MethodName = i741[3]
  i740.m_Mode = i741[4]
  i740.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i741[5], i740.m_Arguments)
  i740.m_CallState = i741[6]
  return i740
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i743 = data
  i742.m_Mode = i743[0]
  i742.m_WrapAround = !!i743[1]
  request.r(i743[2], i743[3], 0, i742, 'm_SelectOnUp')
  request.r(i743[4], i743[5], 0, i742, 'm_SelectOnDown')
  request.r(i743[6], i743[7], 0, i742, 'm_SelectOnLeft')
  request.r(i743[8], i743[9], 0, i742, 'm_SelectOnRight')
  return i742
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i745 = data
  i744.m_NormalColor = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.m_HighlightedColor = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.m_PressedColor = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.m_SelectedColor = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  i744.m_DisabledColor = new pc.Color(i745[16], i745[17], i745[18], i745[19])
  i744.m_ColorMultiplier = i745[20]
  i744.m_FadeDuration = i745[21]
  return i744
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_HighlightedSprite')
  request.r(i747[2], i747[3], 0, i746, 'm_PressedSprite')
  request.r(i747[4], i747[5], 0, i746, 'm_SelectedSprite')
  request.r(i747[6], i747[7], 0, i746, 'm_DisabledSprite')
  return i746
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i749 = data
  i748.m_NormalTrigger = i749[0]
  i748.m_HighlightedTrigger = i749[1]
  i748.m_PressedTrigger = i749[2]
  i748.m_SelectedTrigger = i749[3]
  i748.m_DisabledTrigger = i749[4]
  return i748
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Text' )
  var i751 = data
  i750.m_FontData = request.d('UnityEngine.UI.FontData', i751[0], i750.m_FontData)
  i750.m_Text = i751[1]
  request.r(i751[2], i751[3], 0, i750, 'm_Material')
  i750.m_Maskable = !!i751[4]
  i750.m_Color = new pc.Color(i751[5], i751[6], i751[7], i751[8])
  i750.m_RaycastTarget = !!i751[9]
  i750.m_RaycastPadding = new pc.Vec4( i751[10], i751[11], i751[12], i751[13] )
  return i750
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.FontData' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Font')
  i752.m_FontSize = i753[2]
  i752.m_FontStyle = i753[3]
  i752.m_BestFit = !!i753[4]
  i752.m_MinSize = i753[5]
  i752.m_MaxSize = i753[6]
  i752.m_Alignment = i753[7]
  i752.m_AlignByGeometry = !!i753[8]
  i752.m_RichText = !!i753[9]
  i752.m_HorizontalOverflow = i753[10]
  i752.m_VerticalOverflow = i753[11]
  i752.m_LineSpacing = i753[12]
  return i752
}

Deserializers["TutController"] = function (request, data, root) {
  var i754 = root || request.c( 'TutController' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i757.length; i += 2) {
    i756.add(new pc.Vec2( i757[i + 0], i757[i + 1] ));
  }
  i754.movePos = i756
  i754.moveTime = i755[1]
  i754.fromScale = i755[2]
  i754.toScale = i755[3]
  i754.scaleTime = i755[4]
  return i754
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i760 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i761 = data
  i760.targetIsSelf = !!i761[0]
  request.r(i761[1], i761[2], 0, i760, 'targetGO')
  i760.tweenTargetIsTargetGO = !!i761[3]
  i760.delay = i761[4]
  i760.duration = i761[5]
  i760.easeType = i761[6]
  i760.easeCurve = new pc.AnimationCurve( { keys_flow: i761[7] } )
  i760.loopType = i761[8]
  i760.loops = i761[9]
  i760.id = i761[10]
  i760.isRelative = !!i761[11]
  i760.isFrom = !!i761[12]
  i760.isIndependentUpdate = !!i761[13]
  i760.autoKill = !!i761[14]
  i760.autoGenerate = !!i761[15]
  i760.isActive = !!i761[16]
  i760.isValid = !!i761[17]
  request.r(i761[18], i761[19], 0, i760, 'target')
  i760.animationType = i761[20]
  i760.targetType = i761[21]
  i760.forcedTargetType = i761[22]
  i760.autoPlay = !!i761[23]
  i760.useTargetAsV3 = !!i761[24]
  i760.endValueFloat = i761[25]
  i760.endValueV3 = new pc.Vec3( i761[26], i761[27], i761[28] )
  i760.endValueV2 = new pc.Vec2( i761[29], i761[30] )
  i760.endValueColor = new pc.Color(i761[31], i761[32], i761[33], i761[34])
  i760.endValueString = i761[35]
  i760.endValueRect = UnityEngine.Rect.MinMaxRect(i761[36], i761[37], i761[38], i761[39])
  request.r(i761[40], i761[41], 0, i760, 'endValueTransform')
  i760.optionalBool0 = !!i761[42]
  i760.optionalBool1 = !!i761[43]
  i760.optionalFloat0 = i761[44]
  i760.optionalInt0 = i761[45]
  i760.optionalRotationMode = i761[46]
  i760.optionalScrambleMode = i761[47]
  i760.optionalShakeRandomnessMode = i761[48]
  i760.optionalString = i761[49]
  i760.updateType = i761[50]
  i760.isSpeedBased = !!i761[51]
  i760.hasOnStart = !!i761[52]
  i760.hasOnPlay = !!i761[53]
  i760.hasOnUpdate = !!i761[54]
  i760.hasOnStepComplete = !!i761[55]
  i760.hasOnComplete = !!i761[56]
  i760.hasOnTweenCreated = !!i761[57]
  i760.hasOnRewind = !!i761[58]
  i760.onStart = request.d('UnityEngine.Events.UnityEvent', i761[59], i760.onStart)
  i760.onPlay = request.d('UnityEngine.Events.UnityEvent', i761[60], i760.onPlay)
  i760.onUpdate = request.d('UnityEngine.Events.UnityEvent', i761[61], i760.onUpdate)
  i760.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i761[62], i760.onStepComplete)
  i760.onComplete = request.d('UnityEngine.Events.UnityEvent', i761[63], i760.onComplete)
  i760.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i761[64], i760.onTweenCreated)
  i760.onRewind = request.d('UnityEngine.Events.UnityEvent', i761[65], i760.onRewind)
  return i760
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i763 = data
  i762.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i763[0], i762.m_PersistentCalls)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i765 = data
  i764.sortingLayerIndex = i765[0]
  i764.sortingOrder = i765[1]
  i764.sortingLayerName = i765[2]
  i764.enabled = !!i765[3]
  return i764
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i766 = root || request.c( 'PlayerController' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Piece', i769[i + 0]));
  }
  i766.pieces = i768
  request.r(i767[1], i767[2], 0, i766, 'head')
  request.r(i767[3], i767[4], 0, i766, 'deadSFX')
  i766.maxForce = new pc.Vec2( i767[5], i767[6] )
  i766.minForce = new pc.Vec2( i767[7], i767[8] )
  var i771 = i767[9]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('FightOption', i771[i + 0]));
  }
  i766.fightOptions = i770
  request.r(i767[10], i767[11], 0, i766, 'optionTut')
  request.r(i767[12], i767[13], 0, i766, 'attackTut')
  i766.fight = request.d('FightOption', i767[14], i766.fight)
  request.r(i767[15], i767[16], 0, i766, 'clickSound')
  return i766
}

Deserializers["Piece"] = function (request, data, root) {
  var i774 = root || request.c( 'Piece' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'Joint')
  request.r(i775[2], i775[3], 0, i774, 'Rb')
  return i774
}

Deserializers["FightOption"] = function (request, data, root) {
  var i778 = root || request.c( 'FightOption' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'Button')
  request.r(i779[2], i779[3], 0, i778, 'Selected')
  request.r(i779[4], i779[5], 0, i778, 'Controller')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i781 = data
  i780.useLimits = !!i781[0]
  i780.limits = request.d('UnityEngine.JointAngleLimits2D', i781[1], i780.limits)
  i780.useMotor = !!i781[2]
  i780.motor = request.d('UnityEngine.JointMotor2D', i781[3], i780.motor)
  i780.anchor = new pc.Vec2( i781[4], i781[5] )
  i780.connectedAnchor = new pc.Vec2( i781[6], i781[7] )
  i780.autoConfigureConnectedAnchor = !!i781[8]
  request.r(i781[9], i781[10], 0, i780, 'connectedBody')
  i780.breakForce = i781[11]
  i780.breakTorque = i781[12]
  i780.enableCollision = !!i781[13]
  i780.enabled = !!i781[14]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i783 = data
  i782.autoConfigureTarget = !!i783[0]
  i782.target = new pc.Vec2( i783[1], i783[2] )
  i782.anchor = new pc.Vec2( i783[3], i783[4] )
  i782.maxForce = i783[5]
  i782.dampingRatio = i783[6]
  i782.frequency = i783[7]
  request.r(i783[8], i783[9], 0, i782, 'connectedBody')
  i782.breakForce = i783[10]
  i782.breakTorque = i783[11]
  i782.enableCollision = !!i783[12]
  i782.enabled = !!i783[13]
  return i782
}

Deserializers["ShootController"] = function (request, data, root) {
  var i784 = root || request.c( 'ShootController' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'currentMonster')
  request.r(i785[2], i785[3], 0, i784, 'left')
  request.r(i785[4], i785[5], 0, i784, 'right')
  i784.timeMotor = i785[6]
  i784.onCD = !!i785[7]
  i784.CD = i785[8]
  request.r(i785[9], i785[10], 0, i784, 'startPos')
  request.r(i785[11], i785[12], 0, i784, 'attackSound')
  request.r(i785[13], i785[14], 0, i784, 'spawnPrefab')
  request.r(i785[15], i785[16], 0, i784, 'poolParent')
  return i784
}

Deserializers["DropController"] = function (request, data, root) {
  var i786 = root || request.c( 'DropController' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'attackSound')
  request.r(i787[2], i787[3], 0, i786, 'spawnPrefab')
  request.r(i787[4], i787[5], 0, i786, 'poolParent')
  return i786
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i788 = root || request.c( 'BalanceController' )
  var i789 = data
  i788.targetRotation = i789[0]
  i788.force = i789[1]
  return i788
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i790 = root || request.c( 'MonsterController' )
  var i791 = data
  i790.maxHP = i791[0]
  i790.currentHP = i791[1]
  var i793 = i791[2]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('Piece', i793[i + 0]));
  }
  i790.pieces = i792
  request.r(i791[3], i791[4], 0, i790, 'deadSFX')
  i790.maxForce = new pc.Vec2( i791[5], i791[6] )
  i790.minForce = new pc.Vec2( i791[7], i791[8] )
  request.r(i791[9], i791[10], 0, i790, 'balance')
  i790.isDead = !!i791[11]
  i790.speed = i791[12]
  request.r(i791[13], i791[14], 0, i790, 'body')
  request.r(i791[15], i791[16], 0, i790, 'leftHand')
  request.r(i791[17], i791[18], 0, i790, 'rightHand')
  request.r(i791[19], i791[20], 0, i790, 'leftLeg')
  request.r(i791[21], i791[22], 0, i790, 'rightLeg')
  return i790
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i794 = root || request.c( 'DefenseController' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'world')
  i794.offset = new pc.Vec2( i795[2], i795[3] )
  i794.cellSize = i795[4]
  request.r(i795[5], i795[6], 0, i794, 'putSound')
  request.r(i795[7], i795[8], 0, i794, 'clickSound')
  var i797 = i795[9]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('BlockType')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('BlockType', i797[i + 0]));
  }
  i794.blockTypes = i796
  request.r(i795[10], i795[11], 0, i794, 'optionTut')
  request.r(i795[12], i795[13], 0, i794, 'buildTut')
  return i794
}

Deserializers["BlockType"] = function (request, data, root) {
  var i800 = root || request.c( 'BlockType' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'Button')
  request.r(i801[2], i801[3], 0, i800, 'Selected')
  request.r(i801[4], i801[5], 0, i800, 'Prefab')
  i800.blockSize = new pc.Vec2( i801[6], i801[7] )
  return i800
}

Deserializers["GameController"] = function (request, data, root) {
  var i802 = root || request.c( 'GameController' )
  var i803 = data
  i802.OnStart = request.d('System.Action', i803[0], i802.OnStart)
  i802.OnClick = request.d('System.Action', i803[1], i802.OnClick)
  i802.OnGameOver = request.d('System.Action', i803[2], i802.OnGameOver)
  i802.OnGameComplete = request.d('System.Action', i803[3], i802.OnGameComplete)
  request.r(i803[4], i803[5], 0, i802, 'startScene')
  request.r(i803[6], i803[7], 0, i802, 'buttonFight')
  request.r(i803[8], i803[9], 0, i802, 'buttonDefense')
  request.r(i803[10], i803[11], 0, i802, 'clickSound')
  request.r(i803[12], i803[13], 0, i802, 'fightOptions')
  request.r(i803[14], i803[15], 0, i802, 'tut')
  request.r(i803[16], i803[17], 0, i802, 'defenseOptions')
  request.r(i803[18], i803[19], 0, i802, 'defense')
  request.r(i803[20], i803[21], 0, i802, 'endScene')
  request.r(i803[22], i803[23], 0, i802, 'completeScene')
  request.r(i803[24], i803[25], 0, i802, 'gameOverScene')
  request.r(i803[26], i803[27], 0, i802, 'player')
  i802.numMonster = i803[28]
  request.r(i803[29], i803[30], 0, i802, 'world')
  return i802
}

Deserializers["System.Action"] = function (request, data, root) {
  var i804 = root || request.c( 'System.Action' )
  var i805 = data
  return i804
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i806 = root || request.c( 'LayoutController' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'main')
  request.r(i807[2], i807[3], 0, i806, 'fight')
  request.r(i807[4], i807[5], 0, i806, 'defense')
  return i806
}

Deserializers["LunaController"] = function (request, data, root) {
  var i808 = root || request.c( 'LunaController' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'BGTexture')
  i808.UseTime = !!i809[2]
  i808.TimePlay = i809[3]
  i808.UseCountPlay = !!i809[4]
  i808.MaxCountPlay = i809[5]
  request.r(i809[6], i809[7], 0, i808, 'BGImage')
  var i811 = i809[8]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 1, i810, '')
  }
  i808.CTA = i810
  i808.count = i809[9]
  return i808
}

Deserializers["AudioController"] = function (request, data, root) {
  var i814 = root || request.c( 'AudioController' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'BGM')
  request.r(i815[2], i815[3], 0, i814, 'musicSource')
  request.r(i815[4], i815[5], 0, i814, 'pool')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'clip')
  request.r(i817[2], i817[3], 0, i816, 'outputAudioMixerGroup')
  i816.playOnAwake = !!i817[4]
  i816.loop = !!i817[5]
  i816.time = i817[6]
  i816.volume = i817[7]
  i816.pitch = i817[8]
  i816.enabled = !!i817[9]
  return i816
}

Deserializers["VFXController"] = function (request, data, root) {
  var i818 = root || request.c( 'VFXController' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'poolParent')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i821 = data
  i820.ambientIntensity = i821[0]
  i820.reflectionIntensity = i821[1]
  i820.ambientMode = i821[2]
  i820.ambientLight = new pc.Color(i821[3], i821[4], i821[5], i821[6])
  i820.ambientSkyColor = new pc.Color(i821[7], i821[8], i821[9], i821[10])
  i820.ambientGroundColor = new pc.Color(i821[11], i821[12], i821[13], i821[14])
  i820.ambientEquatorColor = new pc.Color(i821[15], i821[16], i821[17], i821[18])
  i820.fogColor = new pc.Color(i821[19], i821[20], i821[21], i821[22])
  i820.fogEndDistance = i821[23]
  i820.fogStartDistance = i821[24]
  i820.fogDensity = i821[25]
  i820.fog = !!i821[26]
  request.r(i821[27], i821[28], 0, i820, 'skybox')
  i820.fogMode = i821[29]
  var i823 = i821[30]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i823[i + 0]) );
  }
  i820.lightmaps = i822
  i820.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i821[31], i820.lightProbes)
  i820.lightmapsMode = i821[32]
  i820.mixedBakeMode = i821[33]
  i820.environmentLightingMode = i821[34]
  i820.ambientProbe = new pc.SphericalHarmonicsL2(i821[35])
  request.r(i821[36], i821[37], 0, i820, 'customReflection')
  request.r(i821[38], i821[39], 0, i820, 'defaultReflection')
  i820.defaultReflectionMode = i821[40]
  i820.defaultReflectionResolution = i821[41]
  i820.sunLightObjectId = i821[42]
  i820.pixelLightCount = i821[43]
  i820.defaultReflectionHDR = !!i821[44]
  i820.hasLightDataAsset = !!i821[45]
  i820.hasManualGenerate = !!i821[46]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'lightmapColor')
  request.r(i827[2], i827[3], 0, i826, 'lightmapDirection')
  request.r(i827[4], i827[5], 0, i826, 'shadowMask')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i828 = root || new UnityEngine.LightProbes()
  var i829 = data
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i837 = data
  var i839 = i837[0]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i839[i + 0]));
  }
  i836.ShaderCompilationErrors = i838
  i836.name = i837[1]
  i836.guid = i837[2]
  var i841 = i837[3]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i836.shaderDefinedKeywords = i840
  var i843 = i837[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i843[i + 0]) );
  }
  i836.passes = i842
  var i845 = i837[5]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i845[i + 0]) );
  }
  i836.usePasses = i844
  var i847 = i837[6]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i847[i + 0]) );
  }
  i836.defaultParameterValues = i846
  request.r(i837[7], i837[8], 0, i836, 'unityFallbackShader')
  i836.readDepth = !!i837[9]
  i836.hasDepthOnlyPass = !!i837[10]
  i836.isCreatedByShaderGraph = !!i837[11]
  i836.disableBatching = !!i837[12]
  i836.compiled = !!i837[13]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i851 = data
  i850.shaderName = i851[0]
  i850.errorMessage = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i856 = root || new pc.UnityShaderPass()
  var i857 = data
  i856.id = i857[0]
  i856.subShaderIndex = i857[1]
  i856.name = i857[2]
  i856.passType = i857[3]
  i856.grabPassTextureName = i857[4]
  i856.usePass = !!i857[5]
  i856.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[6], i856.zTest)
  i856.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[7], i856.zWrite)
  i856.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[8], i856.culling)
  i856.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[9], i856.blending)
  i856.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[10], i856.alphaBlending)
  i856.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[11], i856.colorWriteMask)
  i856.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[12], i856.offsetUnits)
  i856.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[13], i856.offsetFactor)
  i856.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[14], i856.stencilRef)
  i856.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[15], i856.stencilReadMask)
  i856.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[16], i856.stencilWriteMask)
  i856.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[17], i856.stencilOp)
  i856.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[18], i856.stencilOpFront)
  i856.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[19], i856.stencilOpBack)
  var i859 = i857[20]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i859[i + 0]) );
  }
  i856.tags = i858
  var i861 = i857[21]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.passDefinedKeywords = i860
  var i863 = i857[22]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i863[i + 0]) );
  }
  i856.passDefinedKeywordGroups = i862
  var i865 = i857[23]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i865[i + 0]) );
  }
  i856.variants = i864
  var i867 = i857[24]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i867[i + 0]) );
  }
  i856.excludedVariants = i866
  i856.hasDepthReader = !!i857[25]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i869 = data
  i868.val = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i871 = data
  i870.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[0], i870.src)
  i870.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[1], i870.dst)
  i870.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[2], i870.op)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i873 = data
  i872.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[0], i872.pass)
  i872.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[1], i872.fail)
  i872.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[2], i872.zFail)
  i872.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[3], i872.comp)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i877 = data
  i876.name = i877[0]
  i876.value = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i880.keywords = i882
  i880.hasDiscard = !!i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i887 = data
  i886.passId = i887[0]
  i886.subShaderIndex = i887[1]
  var i889 = i887[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i886.keywords = i888
  i886.vertexProgram = i887[3]
  i886.fragmentProgram = i887[4]
  i886.exportedForWebGl2 = !!i887[5]
  i886.readDepth = !!i887[6]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'shader')
  i892.pass = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i897 = data
  i896.name = i897[0]
  i896.type = i897[1]
  i896.value = new pc.Vec4( i897[2], i897[3], i897[4], i897[5] )
  i896.textureValue = i897[6]
  i896.shaderPropertyFlag = i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i899 = data
  i898.name = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'texture')
  i898.aabb = i899[3]
  i898.vertices = i899[4]
  i898.triangles = i899[5]
  i898.textureRect = UnityEngine.Rect.MinMaxRect(i899[6], i899[7], i899[8], i899[9])
  i898.packedRect = UnityEngine.Rect.MinMaxRect(i899[10], i899[11], i899[12], i899[13])
  i898.border = new pc.Vec4( i899[14], i899[15], i899[16], i899[17] )
  i898.transparency = i899[18]
  i898.bounds = i899[19]
  i898.pixelsPerUnit = i899[20]
  i898.textureWidth = i899[21]
  i898.textureHeight = i899[22]
  i898.nativeSize = new pc.Vec2( i899[23], i899[24] )
  i898.pivot = new pc.Vec2( i899[25], i899[26] )
  i898.textureRectOffset = new pc.Vec2( i899[27], i899[28] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i901 = data
  i900.name = i901[0]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i903 = data
  i902.name = i903[0]
  i902.wrapMode = i903[1]
  i902.isLooping = !!i903[2]
  i902.length = i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i905[i + 0]) );
  }
  i902.curves = i904
  var i907 = i903[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i907[i + 0]) );
  }
  i902.events = i906
  i902.halfPrecision = !!i903[6]
  i902._frameRate = i903[7]
  i902.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i903[8], i902.localBounds)
  i902.hasMuscleCurves = !!i903[9]
  var i909 = i903[10]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i902.clipMuscleConstant = i908
  i902.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i903[11], i902.clipBindingConstant)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i913 = data
  i912.path = i913[0]
  i912.hash = i913[1]
  i912.componentType = i913[2]
  i912.property = i913[3]
  i912.keys = i913[4]
  var i915 = i913[5]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i915[i + 0]) );
  }
  i912.objectReferenceKeys = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i919 = data
  i918.time = i919[0]
  request.r(i919[1], i919[2], 0, i918, 'value')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i923 = data
  i922.functionName = i923[0]
  i922.floatParameter = i923[1]
  i922.intParameter = i923[2]
  i922.stringParameter = i923[3]
  request.r(i923[4], i923[5], 0, i922, 'objectReferenceParameter')
  i922.time = i923[6]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i925 = data
  i924.center = new pc.Vec3( i925[0], i925[1], i925[2] )
  i924.extends = new pc.Vec3( i925[3], i925[4], i925[5] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i928.genericBindings = i930
  var i933 = i929[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( i933[i + 0] );
  }
  i928.pptrCurveMapping = i932
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i935 = data
  i934.name = i935[0]
  i934.ascent = i935[1]
  i934.originalLineHeight = i935[2]
  i934.fontSize = i935[3]
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i937[i + 0]) );
  }
  i934.characterInfo = i936
  request.r(i935[5], i935[6], 0, i934, 'texture')
  i934.originalFontSize = i935[7]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i941 = data
  i940.index = i941[0]
  i940.advance = i941[1]
  i940.bearing = i941[2]
  i940.glyphWidth = i941[3]
  i940.glyphHeight = i941[4]
  i940.minX = i941[5]
  i940.maxX = i941[6]
  i940.minY = i941[7]
  i940.maxY = i941[8]
  i940.uvBottomLeftX = i941[9]
  i940.uvBottomLeftY = i941[10]
  i940.uvBottomRightX = i941[11]
  i940.uvBottomRightY = i941[12]
  i940.uvTopLeftX = i941[13]
  i940.uvTopLeftY = i941[14]
  i940.uvTopRightX = i941[15]
  i940.uvTopRightY = i941[16]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i943 = data
  i942.name = i943[0]
  var i945 = i943[1]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i945[i + 0]) );
  }
  i942.layers = i944
  var i947 = i943[2]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i947[i + 0]) );
  }
  i942.parameters = i946
  i942.animationClips = i943[3]
  i942.avatarUnsupported = i943[4]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i951 = data
  i950.name = i951[0]
  i950.defaultWeight = i951[1]
  i950.blendingMode = i951[2]
  i950.avatarMask = i951[3]
  i950.syncedLayerIndex = i951[4]
  i950.syncedLayerAffectsTiming = !!i951[5]
  i950.syncedLayers = i951[6]
  i950.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i951[7], i950.stateMachine)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i953 = data
  i952.id = i953[0]
  i952.name = i953[1]
  i952.path = i953[2]
  var i955 = i953[3]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i955[i + 0]) );
  }
  i952.states = i954
  var i957 = i953[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i957[i + 0]) );
  }
  i952.machines = i956
  var i959 = i953[5]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i959[i + 0]) );
  }
  i952.entryStateTransitions = i958
  var i961 = i953[6]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i961[i + 0]) );
  }
  i952.exitStateTransitions = i960
  var i963 = i953[7]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i963[i + 0]) );
  }
  i952.anyStateTransitions = i962
  i952.defaultStateId = i953[8]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i967 = data
  i966.id = i967[0]
  i966.name = i967[1]
  i966.cycleOffset = i967[2]
  i966.cycleOffsetParameter = i967[3]
  i966.cycleOffsetParameterActive = !!i967[4]
  i966.mirror = !!i967[5]
  i966.mirrorParameter = i967[6]
  i966.mirrorParameterActive = !!i967[7]
  i966.motionId = i967[8]
  i966.nameHash = i967[9]
  i966.fullPathHash = i967[10]
  i966.speed = i967[11]
  i966.speedParameter = i967[12]
  i966.speedParameterActive = !!i967[13]
  i966.tag = i967[14]
  i966.tagHash = i967[15]
  i966.writeDefaultValues = !!i967[16]
  var i969 = i967[17]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.behaviours = i968
  var i971 = i967[18]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i971[i + 0]) );
  }
  i966.transitions = i970
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i977 = data
  i976.fullPath = i977[0]
  i976.canTransitionToSelf = !!i977[1]
  i976.duration = i977[2]
  i976.exitTime = i977[3]
  i976.hasExitTime = !!i977[4]
  i976.hasFixedDuration = !!i977[5]
  i976.interruptionSource = i977[6]
  i976.offset = i977[7]
  i976.orderedInterruption = !!i977[8]
  i976.destinationStateId = i977[9]
  i976.isExit = !!i977[10]
  i976.mute = !!i977[11]
  i976.solo = !!i977[12]
  var i979 = i977[13]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i979[i + 0]) );
  }
  i976.conditions = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i983 = data
  i982.mode = i983[0]
  i982.parameter = i983[1]
  i982.threshold = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i989 = data
  i988.destinationStateId = i989[0]
  i988.isExit = !!i989[1]
  i988.mute = !!i989[2]
  i988.solo = !!i989[3]
  var i991 = i989[4]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i991[i + 0]) );
  }
  i988.conditions = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i995 = data
  i994.defaultBool = !!i995[0]
  i994.defaultFloat = i995[1]
  i994.defaultInt = i995[2]
  i994.name = i995[3]
  i994.nameHash = i995[4]
  i994.type = i995[5]
  return i994
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i997 = data
  i996.useSafeMode = !!i997[0]
  i996.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i997[1], i996.safeModeOptions)
  i996.timeScale = i997[2]
  i996.unscaledTimeScale = i997[3]
  i996.useSmoothDeltaTime = !!i997[4]
  i996.maxSmoothUnscaledTime = i997[5]
  i996.rewindCallbackMode = i997[6]
  i996.showUnityEditorReport = !!i997[7]
  i996.logBehaviour = i997[8]
  i996.drawGizmos = !!i997[9]
  i996.defaultRecyclable = !!i997[10]
  i996.defaultAutoPlay = i997[11]
  i996.defaultUpdateType = i997[12]
  i996.defaultTimeScaleIndependent = !!i997[13]
  i996.defaultEaseType = i997[14]
  i996.defaultEaseOvershootOrAmplitude = i997[15]
  i996.defaultEasePeriod = i997[16]
  i996.defaultAutoKill = !!i997[17]
  i996.defaultLoopType = i997[18]
  i996.debugMode = !!i997[19]
  i996.debugStoreTargetId = !!i997[20]
  i996.showPreviewPanel = !!i997[21]
  i996.storeSettingsLocation = i997[22]
  i996.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i997[23], i996.modules)
  i996.createASMDEF = !!i997[24]
  i996.showPlayingTweens = !!i997[25]
  i996.showPausedTweens = !!i997[26]
  return i996
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i999 = data
  i998.logBehaviour = i999[0]
  i998.nestedTweenFailureBehaviour = i999[1]
  return i998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1001 = data
  i1000.showPanel = !!i1001[0]
  i1000.audioEnabled = !!i1001[1]
  i1000.physicsEnabled = !!i1001[2]
  i1000.physics2DEnabled = !!i1001[3]
  i1000.spriteEnabled = !!i1001[4]
  i1000.uiEnabled = !!i1001[5]
  i1000.textMeshProEnabled = !!i1001[6]
  i1000.tk2DEnabled = !!i1001[7]
  i1000.deAudioEnabled = !!i1001[8]
  i1000.deUnityExtendedEnabled = !!i1001[9]
  i1000.epoOutlineEnabled = !!i1001[10]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1005[i + 0]) );
  }
  i1002.files = i1004
  i1002.componentToPrefabIds = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1009 = data
  i1008.path = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'unityObject')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1013[i + 0]) );
  }
  i1010.scriptsExecutionOrder = i1012
  var i1015 = i1011[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1015[i + 0]) );
  }
  i1010.sortingLayers = i1014
  var i1017 = i1011[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1017[i + 0]) );
  }
  i1010.cullingLayers = i1016
  i1010.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1011[3], i1010.timeSettings)
  i1010.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1011[4], i1010.physicsSettings)
  i1010.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1011[5], i1010.physics2DSettings)
  i1010.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1011[6], i1010.qualitySettings)
  i1010.enableRealtimeShadows = !!i1011[7]
  i1010.enableAutoInstancing = !!i1011[8]
  i1010.enableStaticBatching = !!i1011[9]
  i1010.enableDynamicBatching = !!i1011[10]
  i1010.usePreservativeDynamicBatching = !!i1011[11]
  i1010.lightmapEncodingQuality = i1011[12]
  i1010.desiredColorSpace = i1011[13]
  var i1019 = i1011[14]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1010.allTags = i1018
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  i1026.value = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1033 = data
  i1032.fixedDeltaTime = i1033[0]
  i1032.maximumDeltaTime = i1033[1]
  i1032.timeScale = i1033[2]
  i1032.maximumParticleTimestep = i1033[3]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1035 = data
  i1034.gravity = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.defaultSolverIterations = i1035[3]
  i1034.bounceThreshold = i1035[4]
  i1034.autoSyncTransforms = !!i1035[5]
  i1034.autoSimulation = !!i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'material')
  i1042.gravity = new pc.Vec2( i1043[2], i1043[3] )
  i1042.positionIterations = i1043[4]
  i1042.velocityIterations = i1043[5]
  i1042.velocityThreshold = i1043[6]
  i1042.maxLinearCorrection = i1043[7]
  i1042.maxAngularCorrection = i1043[8]
  i1042.maxTranslationSpeed = i1043[9]
  i1042.maxRotationSpeed = i1043[10]
  i1042.baumgarteScale = i1043[11]
  i1042.baumgarteTOIScale = i1043[12]
  i1042.timeToSleep = i1043[13]
  i1042.linearSleepTolerance = i1043[14]
  i1042.angularSleepTolerance = i1043[15]
  i1042.defaultContactOffset = i1043[16]
  i1042.autoSimulation = !!i1043[17]
  i1042.queriesHitTriggers = !!i1043[18]
  i1042.queriesStartInColliders = !!i1043[19]
  i1042.callbacksOnDisable = !!i1043[20]
  i1042.reuseCollisionCallbacks = !!i1043[21]
  i1042.autoSyncTransforms = !!i1043[22]
  var i1045 = i1043[23]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1045[i + 0]) );
  }
  i1042.collisionMatrix = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.layerId = i1049[1]
  i1048.otherLayerId = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[i + 0]) );
  }
  i1050.qualityLevels = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.names = i1054
  i1050.shadows = i1051[2]
  i1050.anisotropicFiltering = i1051[3]
  i1050.antiAliasing = i1051[4]
  i1050.lodBias = i1051[5]
  i1050.shadowCascades = i1051[6]
  i1050.shadowDistance = i1051[7]
  i1050.shadowmaskMode = i1051[8]
  i1050.shadowProjection = i1051[9]
  i1050.shadowResolution = i1051[10]
  i1050.softParticles = !!i1051[11]
  i1050.softVegetation = !!i1051[12]
  i1050.activeColorSpace = i1051[13]
  i1050.desiredColorSpace = i1051[14]
  i1050.masterTextureLimit = i1051[15]
  i1050.maxQueuedFrames = i1051[16]
  i1050.particleRaycastBudget = i1051[17]
  i1050.pixelLightCount = i1051[18]
  i1050.realtimeReflectionProbes = !!i1051[19]
  i1050.shadowCascade2Split = i1051[20]
  i1050.shadowCascade4Split = new pc.Vec3( i1051[21], i1051[22], i1051[23] )
  i1050.streamingMipmapsActive = !!i1051[24]
  i1050.vSyncCount = i1051[25]
  i1050.asyncUploadBufferSize = i1051[26]
  i1050.asyncUploadTimeSlice = i1051[27]
  i1050.billboardsFaceCameraPosition = !!i1051[28]
  i1050.shadowNearPlaneOffset = i1051[29]
  i1050.streamingMipmapsMemoryBudget = i1051[30]
  i1050.maximumLODLevel = i1051[31]
  i1050.streamingMipmapsAddAllCameras = !!i1051[32]
  i1050.streamingMipmapsMaxLevelReduction = i1051[33]
  i1050.streamingMipmapsRenderersPerFrame = i1051[34]
  i1050.resolutionScalingFixedDPIFactor = i1051[35]
  i1050.streamingMipmapsMaxFileIORequests = i1051[36]
  i1050.currentQualityLevel = i1051[37]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1061 = data
  i1060.weight = i1061[0]
  i1060.vertices = i1061[1]
  i1060.normals = i1061[2]
  i1060.tangents = i1061[3]
  return i1060
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_ObjectArgument')
  i1062.m_ObjectArgumentAssemblyTypeName = i1063[2]
  i1062.m_IntArgument = i1063[3]
  i1062.m_FloatArgument = i1063[4]
  i1062.m_StringArgument = i1063[5]
  i1062.m_BoolArgument = !!i1063[6]
  return i1062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[20],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[11],"41":[11],"78":[11],"79":[11],"42":[11],"80":[11],"81":[11],"82":[11],"83":[20],"84":[85],"86":[87],"88":[87],"26":[25],"89":[2],"90":[20],"91":[92],"93":[25],"94":[29,25],"95":[85],"96":[29,25],"97":[25],"98":[25],"99":[85,25],"100":[25,29],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"28":[26],"33":[29,25],"32":[25],"27":[26],"107":[25],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"30":[29,25],"116":[25],"117":[25],"118":[25],"119":[25],"35":[29,25],"120":[25],"121":[23],"122":[23],"24":[23],"123":[23],"124":[20],"125":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","KunaiController","UnityEngine.Rigidbody2D","BombController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BlockController","UnityEngine.GameObject","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","DropController","BalanceController","MonsterController","DefenseController","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "09/28/2026 08:08:50";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V04_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1760";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4465";

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

Deserializers.buildID = "698937f5-b620-4fd9-bf5c-a4f5d5eff1d8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

