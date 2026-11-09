var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointSpring' )
  var i565 = data
  i564.spring = i565[0]
  i564.damper = i565[1]
  i564.targetPosition = i565[2]
  return i564
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointMotor' )
  var i567 = data
  i566.m_TargetVelocity = i567[0]
  i566.m_Force = i567[1]
  i566.m_FreeSpin = i567[2]
  return i566
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointLimits' )
  var i569 = data
  i568.m_Min = i569[0]
  i568.m_Max = i569[1]
  i568.m_Bounciness = i569[2]
  i568.m_BounceMinVelocity = i569[3]
  i568.m_ContactDistance = i569[4]
  i568.minBounce = i569[5]
  i568.maxBounce = i569[6]
  return i568
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointDrive' )
  var i571 = data
  i570.m_PositionSpring = i571[0]
  i570.m_PositionDamper = i571[1]
  i570.m_MaximumForce = i571[2]
  i570.m_UseAcceleration = i571[3]
  return i570
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i573 = data
  i572.m_Spring = i573[0]
  i572.m_Damper = i573[1]
  return i572
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i575 = data
  i574.m_Limit = i575[0]
  i574.m_Bounciness = i575[1]
  i574.m_ContactDistance = i575[2]
  return i574
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i577 = data
  i576.m_ExtremumSlip = i577[0]
  i576.m_ExtremumValue = i577[1]
  i576.m_AsymptoteSlip = i577[2]
  i576.m_AsymptoteValue = i577[3]
  i576.m_Stiffness = i577[4]
  return i576
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i579 = data
  i578.m_LowerAngle = i579[0]
  i578.m_UpperAngle = i579[1]
  return i578
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i581 = data
  i580.m_MotorSpeed = i581[0]
  i580.m_MaximumMotorTorque = i581[1]
  return i580
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i583 = data
  i582.m_DampingRatio = i583[0]
  i582.m_Frequency = i583[1]
  i582.m_Angle = i583[2]
  return i582
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i585 = data
  i584.m_LowerTranslation = i585[0]
  i584.m_UpperTranslation = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i586 = root || new pc.UnityMaterial()
  var i587 = data
  i586.name = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'shader')
  i586.renderQueue = i587[3]
  i586.enableInstancing = !!i587[4]
  var i589 = i587[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i589[i + 0]) );
  }
  i586.floatParameters = i588
  var i591 = i587[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i591[i + 0]) );
  }
  i586.colorParameters = i590
  var i593 = i587[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i593[i + 0]) );
  }
  i586.vectorParameters = i592
  var i595 = i587[8]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i595[i + 0]) );
  }
  i586.textureParameters = i594
  var i597 = i587[9]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i597[i + 0]) );
  }
  i586.materialFlags = i596
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = new pc.Color(i605[1], i605[2], i605[3], i605[4])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = new pc.Vec4( i609[1], i609[2], i609[3], i609[4] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i613 = data
  i612.name = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'value')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i617 = data
  i616.name = i617[0]
  i616.enabled = !!i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i619 = data
  i618.name = i619[0]
  i618.width = i619[1]
  i618.height = i619[2]
  i618.mipmapCount = i619[3]
  i618.anisoLevel = i619[4]
  i618.filterMode = i619[5]
  i618.hdr = !!i619[6]
  i618.format = i619[7]
  i618.wrapMode = i619[8]
  i618.alphaIsTransparency = !!i619[9]
  i618.alphaSource = i619[10]
  i618.graphicsFormat = i619[11]
  i618.sRGBTexture = !!i619[12]
  i618.desiredColorSpace = i619[13]
  i618.wrapU = i619[14]
  i618.wrapV = i619[15]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i623 = data
  i622.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i623[0], i622.main)
  i622.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i623[1], i622.colorBySpeed)
  i622.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i623[2], i622.colorOverLifetime)
  i622.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i623[3], i622.emission)
  i622.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i623[4], i622.rotationBySpeed)
  i622.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i623[5], i622.rotationOverLifetime)
  i622.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i623[6], i622.shape)
  i622.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i623[7], i622.sizeBySpeed)
  i622.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i623[8], i622.sizeOverLifetime)
  i622.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i623[9], i622.textureSheetAnimation)
  i622.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i623[10], i622.velocityOverLifetime)
  i622.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i623[11], i622.noise)
  i622.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i623[12], i622.inheritVelocity)
  i622.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i623[13], i622.forceOverLifetime)
  i622.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i623[14], i622.limitVelocityOverLifetime)
  i622.useAutoRandomSeed = !!i623[15]
  i622.randomSeed = i623[16]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemMain()
  var i625 = data
  i624.duration = i625[0]
  i624.loop = !!i625[1]
  i624.prewarm = !!i625[2]
  i624.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.startDelay)
  i624.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[4], i624.startLifetime)
  i624.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[5], i624.startSpeed)
  i624.startSize3D = !!i625[6]
  i624.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[7], i624.startSizeX)
  i624.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[8], i624.startSizeY)
  i624.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[9], i624.startSizeZ)
  i624.startRotation3D = !!i625[10]
  i624.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[11], i624.startRotationX)
  i624.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[12], i624.startRotationY)
  i624.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[13], i624.startRotationZ)
  i624.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[14], i624.startColor)
  i624.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[15], i624.gravityModifier)
  i624.simulationSpace = i625[16]
  request.r(i625[17], i625[18], 0, i624, 'customSimulationSpace')
  i624.simulationSpeed = i625[19]
  i624.useUnscaledTime = !!i625[20]
  i624.scalingMode = i625[21]
  i624.playOnAwake = !!i625[22]
  i624.maxParticles = i625[23]
  i624.emitterVelocityMode = i625[24]
  i624.stopAction = i625[25]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i626 = root || new pc.MinMaxCurve()
  var i627 = data
  i626.mode = i627[0]
  i626.curveMin = new pc.AnimationCurve( { keys_flow: i627[1] } )
  i626.curveMax = new pc.AnimationCurve( { keys_flow: i627[2] } )
  i626.curveMultiplier = i627[3]
  i626.constantMin = i627[4]
  i626.constantMax = i627[5]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i628 = root || new pc.MinMaxGradient()
  var i629 = data
  i628.mode = i629[0]
  i628.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[1], i628.gradientMin)
  i628.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i629[2], i628.gradientMax)
  i628.colorMin = new pc.Color(i629[3], i629[4], i629[5], i629[6])
  i628.colorMax = new pc.Color(i629[7], i629[8], i629[9], i629[10])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i631 = data
  i630.mode = i631[0]
  var i633 = i631[1]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i633[i + 0]) );
  }
  i630.colorKeys = i632
  var i635 = i631[2]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i635[i + 0]) );
  }
  i630.alphaKeys = i634
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemColorBySpeed()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[1], i636.color)
  i636.range = new pc.Vec2( i637[2], i637[3] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i641 = data
  i640.color = new pc.Color(i641[0], i641[1], i641[2], i641[3])
  i640.time = i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i645 = data
  i644.alpha = i645[0]
  i644.time = i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemEmitter()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.rateOverTime)
  i648.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.rateOverDistance)
  var i651 = i649[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i651[i + 0]) );
  }
  i648.bursts = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemBurst()
  var i655 = data
  i654.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[0], i654.count)
  i654.cycleCount = i655[1]
  i654.minCount = i655[2]
  i654.maxCount = i655[3]
  i654.repeatInterval = i655[4]
  i654.time = i655[5]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemRotationBySpeed()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.x)
  i656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.y)
  i656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.z)
  i656.separateAxes = !!i657[4]
  i656.range = new pc.Vec2( i657[5], i657[6] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemRotationOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.separateAxes = !!i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemShape()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.shapeType = i661[1]
  i660.randomDirectionAmount = i661[2]
  i660.sphericalDirectionAmount = i661[3]
  i660.randomPositionAmount = i661[4]
  i660.alignToDirection = !!i661[5]
  i660.radius = i661[6]
  i660.radiusMode = i661[7]
  i660.radiusSpread = i661[8]
  i660.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.radiusSpeed)
  i660.radiusThickness = i661[10]
  i660.angle = i661[11]
  i660.length = i661[12]
  i660.boxThickness = new pc.Vec3( i661[13], i661[14], i661[15] )
  i660.meshShapeType = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'mesh')
  request.r(i661[19], i661[20], 0, i660, 'meshRenderer')
  request.r(i661[21], i661[22], 0, i660, 'skinnedMeshRenderer')
  i660.useMeshMaterialIndex = !!i661[23]
  i660.meshMaterialIndex = i661[24]
  i660.useMeshColors = !!i661[25]
  i660.normalOffset = i661[26]
  i660.arc = i661[27]
  i660.arcMode = i661[28]
  i660.arcSpread = i661[29]
  i660.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[30], i660.arcSpeed)
  i660.donutRadius = i661[31]
  i660.position = new pc.Vec3( i661[32], i661[33], i661[34] )
  i660.rotation = new pc.Vec3( i661[35], i661[36], i661[37] )
  i660.scale = new pc.Vec3( i661[38], i661[39], i661[40] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemSizeBySpeed()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  i662.range = new pc.Vec2( i663[5], i663[6] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemSizeOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.mode = i667[1]
  i666.animation = i667[2]
  i666.numTilesX = i667[3]
  i666.numTilesY = i667[4]
  i666.useRandomRow = !!i667[5]
  i666.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[6], i666.frameOverTime)
  i666.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[7], i666.startFrame)
  i666.cycleCount = i667[8]
  i666.rowIndex = i667[9]
  i666.flipU = i667[10]
  i666.flipV = i667[11]
  i666.spriteCount = i667[12]
  var i669 = i667[13]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sprites = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[4], i672.radial)
  i672.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[5], i672.speedModifier)
  i672.space = i673[6]
  i672.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[7], i672.orbitalX)
  i672.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[8], i672.orbitalY)
  i672.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.orbitalZ)
  i672.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[10], i672.orbitalOffsetX)
  i672.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[11], i672.orbitalOffsetY)
  i672.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[12], i672.orbitalOffsetZ)
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemNoise()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.separateAxes = !!i675[1]
  i674.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.strengthX)
  i674.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.strengthY)
  i674.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[4], i674.strengthZ)
  i674.frequency = i675[5]
  i674.damping = !!i675[6]
  i674.octaveCount = i675[7]
  i674.octaveMultiplier = i675[8]
  i674.octaveScale = i675[9]
  i674.quality = i675[10]
  i674.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[11], i674.scrollSpeed)
  i674.scrollSpeedMultiplier = i675[12]
  i674.remapEnabled = !!i675[13]
  i674.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[14], i674.remapX)
  i674.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[15], i674.remapY)
  i674.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[16], i674.remapZ)
  i674.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[17], i674.positionAmount)
  i674.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[18], i674.rotationAmount)
  i674.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[19], i674.sizeAmount)
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemInheritVelocity()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.curve)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemForceOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.space = i679[4]
  i678.randomized = !!i679[5]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.limit)
  i680.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.limitX)
  i680.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.limitY)
  i680.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.limitZ)
  i680.dampen = i681[5]
  i680.separateAxes = !!i681[6]
  i680.space = i681[7]
  i680.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[8], i680.drag)
  i680.multiplyDragByParticleSize = !!i681[9]
  i680.multiplyDragByParticleVelocity = !!i681[10]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'mesh')
  i682.meshCount = i683[2]
  i682.activeVertexStreamsCount = i683[3]
  i682.alignment = i683[4]
  i682.renderMode = i683[5]
  i682.sortMode = i683[6]
  i682.lengthScale = i683[7]
  i682.velocityScale = i683[8]
  i682.cameraVelocityScale = i683[9]
  i682.normalDirection = i683[10]
  i682.sortingFudge = i683[11]
  i682.minParticleSize = i683[12]
  i682.maxParticleSize = i683[13]
  i682.pivot = new pc.Vec3( i683[14], i683[15], i683[16] )
  request.r(i683[17], i683[18], 0, i682, 'trailMaterial')
  i682.applyActiveColorSpace = !!i683[19]
  i682.enabled = !!i683[20]
  request.r(i683[21], i683[22], 0, i682, 'sharedMaterial')
  var i685 = i683[23]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.sharedMaterials = i684
  i682.receiveShadows = !!i683[24]
  i682.shadowCastingMode = i683[25]
  i682.sortingLayerID = i683[26]
  i682.sortingOrder = i683[27]
  i682.lightmapIndex = i683[28]
  i682.lightmapSceneIndex = i683[29]
  i682.lightmapScaleOffset = new pc.Vec4( i683[30], i683[31], i683[32], i683[33] )
  i682.lightProbeUsage = i683[34]
  i682.reflectionProbeUsage = i683[35]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i689 = data
  i688.name = i689[0]
  i688.tagId = i689[1]
  i688.enabled = !!i689[2]
  i688.isStatic = !!i689[3]
  i688.layer = i689[4]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i691 = data
  i690.name = i691[0]
  i690.index = i691[1]
  i690.startup = !!i691[2]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i693 = data
  i692.aspect = i693[0]
  i692.orthographic = !!i693[1]
  i692.orthographicSize = i693[2]
  i692.backgroundColor = new pc.Color(i693[3], i693[4], i693[5], i693[6])
  i692.nearClipPlane = i693[7]
  i692.farClipPlane = i693[8]
  i692.fieldOfView = i693[9]
  i692.depth = i693[10]
  i692.clearFlags = i693[11]
  i692.cullingMask = i693[12]
  i692.rect = i693[13]
  request.r(i693[14], i693[15], 0, i692, 'targetTexture')
  i692.usePhysicalProperties = !!i693[16]
  i692.focalLength = i693[17]
  i692.sensorSize = new pc.Vec2( i693[18], i693[19] )
  i692.lensShift = new pc.Vec2( i693[20], i693[21] )
  i692.gateFit = i693[22]
  i692.commandBufferCount = i693[23]
  i692.cameraType = i693[24]
  i692.enabled = !!i693[25]
  return i692
}

Deserializers["CameraShake"] = function (request, data, root) {
  var i694 = root || request.c( 'CameraShake' )
  var i695 = data
  return i694
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_FirstSelected')
  i696.m_sendNavigationEvents = !!i697[2]
  i696.m_DragThreshold = i697[3]
  return i696
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i699 = data
  i698.m_HorizontalAxis = i699[0]
  i698.m_VerticalAxis = i699[1]
  i698.m_SubmitButton = i699[2]
  i698.m_CancelButton = i699[3]
  i698.m_InputActionsPerSecond = i699[4]
  i698.m_RepeatDelay = i699[5]
  i698.m_ForceModuleActive = !!i699[6]
  i698.m_SendPointerHoverToParent = !!i699[7]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i701 = data
  i700.pivot = new pc.Vec2( i701[0], i701[1] )
  i700.anchorMin = new pc.Vec2( i701[2], i701[3] )
  i700.anchorMax = new pc.Vec2( i701[4], i701[5] )
  i700.sizeDelta = new pc.Vec2( i701[6], i701[7] )
  i700.anchoredPosition3D = new pc.Vec3( i701[8], i701[9], i701[10] )
  i700.rotation = new pc.Quat(i701[11], i701[12], i701[13], i701[14])
  i700.scale = new pc.Vec3( i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i703 = data
  i702.planeDistance = i703[0]
  i702.referencePixelsPerUnit = i703[1]
  i702.isFallbackOverlay = !!i703[2]
  i702.renderMode = i703[3]
  i702.renderOrder = i703[4]
  i702.sortingLayerName = i703[5]
  i702.sortingOrder = i703[6]
  i702.scaleFactor = i703[7]
  request.r(i703[8], i703[9], 0, i702, 'worldCamera')
  i702.overrideSorting = !!i703[10]
  i702.pixelPerfect = !!i703[11]
  i702.targetDisplay = i703[12]
  i702.overridePixelPerfect = !!i703[13]
  i702.enabled = !!i703[14]
  return i702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i705 = data
  i704.m_UiScaleMode = i705[0]
  i704.m_ReferencePixelsPerUnit = i705[1]
  i704.m_ScaleFactor = i705[2]
  i704.m_ReferenceResolution = new pc.Vec2( i705[3], i705[4] )
  i704.m_ScreenMatchMode = i705[5]
  i704.m_MatchWidthOrHeight = i705[6]
  i704.m_PhysicalUnit = i705[7]
  i704.m_FallbackScreenDPI = i705[8]
  i704.m_DefaultSpriteDPI = i705[9]
  i704.m_DynamicPixelsPerUnit = i705[10]
  i704.m_PresetInfoIsWorld = !!i705[11]
  return i704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i707 = data
  i706.m_IgnoreReversedGraphics = !!i707[0]
  i706.m_BlockingObjects = i707[1]
  i706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i707[2] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i709 = data
  i708.cullTransparentMesh = !!i709[0]
  return i708
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i711 = data
  i710.m_AspectMode = i711[0]
  i710.m_AspectRatio = i711[1]
  return i710
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Texture')
  i712.m_UVRect = UnityEngine.Rect.MinMaxRect(i713[2], i713[3], i713[4], i713[5])
  request.r(i713[6], i713[7], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[8]
  i712.m_Color = new pc.Color(i713[9], i713[10], i713[11], i713[12])
  i712.m_RaycastTarget = !!i713[13]
  i712.m_RaycastPadding = new pc.Vec4( i713[14], i713[15], i713[16], i713[17] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i715 = data
  i714.color = new pc.Color(i715[0], i715[1], i715[2], i715[3])
  request.r(i715[4], i715[5], 0, i714, 'sprite')
  i714.flipX = !!i715[6]
  i714.flipY = !!i715[7]
  i714.drawMode = i715[8]
  i714.size = new pc.Vec2( i715[9], i715[10] )
  i714.tileMode = i715[11]
  i714.adaptiveModeThreshold = i715[12]
  i714.maskInteraction = i715[13]
  i714.spriteSortPoint = i715[14]
  i714.enabled = !!i715[15]
  request.r(i715[16], i715[17], 0, i714, 'sharedMaterial')
  var i717 = i715[18]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.sharedMaterials = i716
  i714.receiveShadows = !!i715[19]
  i714.shadowCastingMode = i715[20]
  i714.sortingLayerID = i715[21]
  i714.sortingOrder = i715[22]
  i714.lightmapIndex = i715[23]
  i714.lightmapSceneIndex = i715[24]
  i714.lightmapScaleOffset = new pc.Vec4( i715[25], i715[26], i715[27], i715[28] )
  i714.lightProbeUsage = i715[29]
  i714.reflectionProbeUsage = i715[30]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i719 = data
  i718.usedByComposite = !!i719[0]
  i718.autoTiling = !!i719[1]
  i718.size = new pc.Vec2( i719[2], i719[3] )
  i718.edgeRadius = i719[4]
  i718.enabled = !!i719[5]
  i718.isTrigger = !!i719[6]
  i718.usedByEffector = !!i719[7]
  i718.density = i719[8]
  i718.offset = new pc.Vec2( i719[9], i719[10] )
  request.r(i719[11], i719[12], 0, i718, 'material')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i721 = data
  i720.sortingLayerIndex = i721[0]
  i720.sortingOrder = i721[1]
  i720.sortingLayerName = i721[2]
  i720.enabled = !!i721[3]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i723 = data
  i722.bodyType = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'material')
  i722.simulated = !!i723[3]
  i722.useAutoMass = !!i723[4]
  i722.mass = i723[5]
  i722.drag = i723[6]
  i722.angularDrag = i723[7]
  i722.gravityScale = i723[8]
  i722.collisionDetectionMode = i723[9]
  i722.sleepMode = i723[10]
  i722.constraints = i723[11]
  return i722
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i724 = root || request.c( 'MonsterController' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'joint')
  i724.anchorAtStart = !!i725[2]
  request.r(i725[3], i725[4], 0, i724, 'rb')
  request.r(i725[5], i725[6], 0, i724, 'deadSFX')
  i724.force = new pc.Vec2( i725[7], i725[8] )
  i724.maxHP = i725[9]
  i724.maxArmor = i725[10]
  i724.hp = i725[11]
  i724.armor = i725[12]
  request.r(i725[13], i725[14], 0, i724, 'bars')
  request.r(i725[15], i725[16], 0, i724, 'head')
  i724.barOffset = new pc.Vec3( i725[17], i725[18], i725[19] )
  request.r(i725[20], i725[21], 0, i724, 'hpFill')
  i724.dismemberSpeed = new pc.Vec2( i725[22], i725[23] )
  i724.dismemberSpin = i725[24]
  i724.hpSmoothTime = i725[25]
  i724.armorSmoothTime = i725[26]
  request.r(i725[27], i725[28], 0, i724, 'armorFill')
  request.r(i725[29], i725[30], 0, i724, 'armorBar')
  request.r(i725[31], i725[32], 0, i724, 'armorIcon')
  request.r(i725[33], i725[34], 0, i724, 'fxSprite')
  request.r(i725[35], i725[36], 0, i724, 'electricSprite')
  i724.fxScale = i725[37]
  request.r(i725[38], i725[39], 0, i724, 'armorBreakSFX')
  i724.lightningDrainTime = i725[40]
  i724.lightningDrainTick = i725[41]
  i724.smokeInterval = i725[42]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i727 = data
  i726.useLimits = !!i727[0]
  i726.limits = request.d('UnityEngine.JointAngleLimits2D', i727[1], i726.limits)
  i726.useMotor = !!i727[2]
  i726.motor = request.d('UnityEngine.JointMotor2D', i727[3], i726.motor)
  i726.anchor = new pc.Vec2( i727[4], i727[5] )
  i726.connectedAnchor = new pc.Vec2( i727[6], i727[7] )
  i726.autoConfigureConnectedAnchor = !!i727[8]
  request.r(i727[9], i727[10], 0, i726, 'connectedBody')
  i726.breakForce = i727[11]
  i726.breakTorque = i727[12]
  i726.enableCollision = !!i727[13]
  i726.enabled = !!i727[14]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i729 = data
  i728.autoConfigureTarget = !!i729[0]
  i728.target = new pc.Vec2( i729[1], i729[2] )
  i728.anchor = new pc.Vec2( i729[3], i729[4] )
  i728.maxForce = i729[5]
  i728.dampingRatio = i729[6]
  i728.frequency = i729[7]
  request.r(i729[8], i729[9], 0, i728, 'connectedBody')
  i728.breakForce = i729[10]
  i728.breakTorque = i729[11]
  i728.enableCollision = !!i729[12]
  i728.enabled = !!i729[13]
  return i728
}

Deserializers["BonkController"] = function (request, data, root) {
  var i730 = root || request.c( 'BonkController' )
  var i731 = data
  i730.target = i731[0]
  i730.damage = i731[1]
  request.r(i731[2], i731[3], 0, i730, 'hitSound')
  return i730
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Image' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Sprite')
  i732.m_Type = i733[2]
  i732.m_PreserveAspect = !!i733[3]
  i732.m_FillCenter = !!i733[4]
  i732.m_FillMethod = i733[5]
  i732.m_FillAmount = i733[6]
  i732.m_FillClockwise = !!i733[7]
  i732.m_FillOrigin = i733[8]
  i732.m_UseSpriteMesh = !!i733[9]
  i732.m_PixelsPerUnitMultiplier = i733[10]
  request.r(i733[11], i733[12], 0, i732, 'm_Material')
  i732.m_Maskable = !!i733[13]
  i732.m_Color = new pc.Color(i733[14], i733[15], i733[16], i733[17])
  i732.m_RaycastTarget = !!i733[18]
  i732.m_RaycastPadding = new pc.Vec4( i733[19], i733[20], i733[21], i733[22] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i735 = data
  i734.radius = i735[0]
  i734.enabled = !!i735[1]
  i734.isTrigger = !!i735[2]
  i734.usedByEffector = !!i735[3]
  i734.density = i735[4]
  i734.offset = new pc.Vec2( i735[5], i735[6] )
  request.r(i735[7], i735[8], 0, i734, 'material')
  return i734
}

Deserializers["ScreenFx"] = function (request, data, root) {
  var i736 = root || request.c( 'ScreenFx' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'dark')
  request.r(i737[2], i737[3], 0, i736, 'flash')
  return i736
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Button' )
  var i739 = data
  i738.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i739[0], i738.m_OnClick)
  i738.m_Navigation = request.d('UnityEngine.UI.Navigation', i739[1], i738.m_Navigation)
  i738.m_Transition = i739[2]
  i738.m_Colors = request.d('UnityEngine.UI.ColorBlock', i739[3], i738.m_Colors)
  i738.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i739[4], i738.m_SpriteState)
  i738.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i739[5], i738.m_AnimationTriggers)
  i738.m_Interactable = !!i739[6]
  request.r(i739[7], i739[8], 0, i738, 'm_TargetGraphic')
  return i738
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i741 = data
  i740.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i741[0], i740.m_PersistentCalls)
  return i740
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('UnityEngine.Events.PersistentCall', i745[i + 0]));
  }
  i742.m_Calls = i744
  return i742
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Target')
  i748.m_TargetAssemblyTypeName = i749[2]
  i748.m_MethodName = i749[3]
  i748.m_Mode = i749[4]
  i748.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i749[5], i748.m_Arguments)
  i748.m_CallState = i749[6]
  return i748
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i751 = data
  i750.m_Mode = i751[0]
  i750.m_WrapAround = !!i751[1]
  request.r(i751[2], i751[3], 0, i750, 'm_SelectOnUp')
  request.r(i751[4], i751[5], 0, i750, 'm_SelectOnDown')
  request.r(i751[6], i751[7], 0, i750, 'm_SelectOnLeft')
  request.r(i751[8], i751[9], 0, i750, 'm_SelectOnRight')
  return i750
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i753 = data
  i752.m_NormalColor = new pc.Color(i753[0], i753[1], i753[2], i753[3])
  i752.m_HighlightedColor = new pc.Color(i753[4], i753[5], i753[6], i753[7])
  i752.m_PressedColor = new pc.Color(i753[8], i753[9], i753[10], i753[11])
  i752.m_SelectedColor = new pc.Color(i753[12], i753[13], i753[14], i753[15])
  i752.m_DisabledColor = new pc.Color(i753[16], i753[17], i753[18], i753[19])
  i752.m_ColorMultiplier = i753[20]
  i752.m_FadeDuration = i753[21]
  return i752
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_HighlightedSprite')
  request.r(i755[2], i755[3], 0, i754, 'm_PressedSprite')
  request.r(i755[4], i755[5], 0, i754, 'm_SelectedSprite')
  request.r(i755[6], i755[7], 0, i754, 'm_DisabledSprite')
  return i754
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i757 = data
  i756.m_NormalTrigger = i757[0]
  i756.m_HighlightedTrigger = i757[1]
  i756.m_PressedTrigger = i757[2]
  i756.m_SelectedTrigger = i757[3]
  i756.m_DisabledTrigger = i757[4]
  return i756
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i759 = data
  i758.m_hasFontAssetChanged = !!i759[0]
  request.r(i759[1], i759[2], 0, i758, 'm_baseMaterial')
  i758.m_maskOffset = new pc.Vec4( i759[3], i759[4], i759[5], i759[6] )
  i758.m_text = i759[7]
  i758.m_isRightToLeft = !!i759[8]
  request.r(i759[9], i759[10], 0, i758, 'm_fontAsset')
  request.r(i759[11], i759[12], 0, i758, 'm_sharedMaterial')
  var i761 = i759[13]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.m_fontSharedMaterials = i760
  request.r(i759[14], i759[15], 0, i758, 'm_fontMaterial')
  var i763 = i759[16]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i758.m_fontMaterials = i762
  i758.m_fontColor32 = UnityEngine.Color32.ConstructColor(i759[17], i759[18], i759[19], i759[20])
  i758.m_fontColor = new pc.Color(i759[21], i759[22], i759[23], i759[24])
  i758.m_enableVertexGradient = !!i759[25]
  i758.m_colorMode = i759[26]
  i758.m_fontColorGradient = request.d('TMPro.VertexGradient', i759[27], i758.m_fontColorGradient)
  request.r(i759[28], i759[29], 0, i758, 'm_fontColorGradientPreset')
  request.r(i759[30], i759[31], 0, i758, 'm_spriteAsset')
  i758.m_tintAllSprites = !!i759[32]
  request.r(i759[33], i759[34], 0, i758, 'm_StyleSheet')
  i758.m_TextStyleHashCode = i759[35]
  i758.m_overrideHtmlColors = !!i759[36]
  i758.m_faceColor = UnityEngine.Color32.ConstructColor(i759[37], i759[38], i759[39], i759[40])
  i758.m_fontSize = i759[41]
  i758.m_fontSizeBase = i759[42]
  i758.m_fontWeight = i759[43]
  i758.m_enableAutoSizing = !!i759[44]
  i758.m_fontSizeMin = i759[45]
  i758.m_fontSizeMax = i759[46]
  i758.m_fontStyle = i759[47]
  i758.m_HorizontalAlignment = i759[48]
  i758.m_VerticalAlignment = i759[49]
  i758.m_textAlignment = i759[50]
  i758.m_characterSpacing = i759[51]
  i758.m_characterHorizontalScale = i759[52]
  i758.m_wordSpacing = i759[53]
  i758.m_lineSpacing = i759[54]
  i758.m_lineSpacingMax = i759[55]
  i758.m_paragraphSpacing = i759[56]
  i758.m_charWidthMaxAdj = i759[57]
  i758.m_TextWrappingMode = i759[58]
  i758.m_wordWrappingRatios = i759[59]
  i758.m_overflowMode = i759[60]
  request.r(i759[61], i759[62], 0, i758, 'm_linkedTextComponent')
  request.r(i759[63], i759[64], 0, i758, 'parentLinkedComponent')
  i758.m_enableKerning = !!i759[65]
  var i765 = i759[66]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(i765[i + 0]);
  }
  i758.m_ActiveFontFeatures = i764
  i758.m_enableExtraPadding = !!i759[67]
  i758.checkPaddingRequired = !!i759[68]
  i758.m_isRichText = !!i759[69]
  i758.m_parseCtrlCharacters = !!i759[70]
  i758.m_isOrthographic = !!i759[71]
  i758.m_isCullingEnabled = !!i759[72]
  i758.m_horizontalMapping = i759[73]
  i758.m_verticalMapping = i759[74]
  i758.m_uvLineOffset = i759[75]
  i758.m_geometrySortingOrder = i759[76]
  i758.m_IsTextObjectScaleStatic = !!i759[77]
  i758.m_VertexBufferAutoSizeReduction = !!i759[78]
  i758.m_useMaxVisibleDescender = !!i759[79]
  i758.m_pageToDisplay = i759[80]
  i758.m_margin = new pc.Vec4( i759[81], i759[82], i759[83], i759[84] )
  i758.m_isUsingLegacyAnimationComponent = !!i759[85]
  i758.m_isVolumetricText = !!i759[86]
  request.r(i759[87], i759[88], 0, i758, 'm_Material')
  i758.m_EmojiFallbackSupport = !!i759[89]
  i758.m_Maskable = !!i759[90]
  i758.m_Color = new pc.Color(i759[91], i759[92], i759[93], i759[94])
  i758.m_RaycastTarget = !!i759[95]
  i758.m_RaycastPadding = new pc.Vec4( i759[96], i759[97], i759[98], i759[99] )
  return i758
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.VertexGradient' )
  var i767 = data
  i766.topLeft = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.topRight = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.bottomLeft = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.bottomRight = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  return i766
}

Deserializers["CycleHand"] = function (request, data, root) {
  var i770 = root || request.c( 'CycleHand' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770.targets = i772
  i770.fingerOffset = new pc.Vec2( i771[1], i771[2] )
  i770.moveTime = i771[3]
  i770.stayTime = i771[4]
  i770.tapSpeed = i771[5]
  i770.pulse = i771[6]
  return i770
}

Deserializers["PowerTutorial"] = function (request, data, root) {
  var i776 = root || request.c( 'PowerTutorial' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'hand')
  i776.swipe = !!i777[2]
  i776.fingerOffset = new pc.Vec2( i777[3], i777[4] )
  i776.swipeDistance = i777[5]
  i776.speed = i777[6]
  i776.pulse = i777[7]
  return i776
}

Deserializers["SwipeHandTut"] = function (request, data, root) {
  var i778 = root || request.c( 'SwipeHandTut' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'hand')
  request.r(i779[2], i779[3], 0, i778, 'target')
  i778.fingerOffset = new pc.Vec2( i779[4], i779[5] )
  i778.pressTime = i779[6]
  i778.moveTime = i779[7]
  i778.stayTime = i779[8]
  i778.pressScale = i779[9]
  i778.fallbackDistance = i779[10]
  return i778
}

Deserializers["GameController"] = function (request, data, root) {
  var i780 = root || request.c( 'GameController' )
  var i781 = data
  i780.OnComplete = request.d('System.Action', i781[0], i780.OnComplete)
  var i783 = i781[1]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+Stage')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('GameController+Stage', i783[i + 0]));
  }
  i780.stages = i782
  i780.speedMove = i781[2]
  request.r(i781[3], i781[4], 0, i780, 'target')
  i780.index = i781[5]
  i780.end = !!i781[6]
  request.r(i781[7], i781[8], 0, i780, 'mainCamera')
  i780.armorUses = i781[9]
  i780.deadDelay = i781[10]
  request.r(i781[11], i781[12], 0, i780, 'keepText')
  return i780
}

Deserializers["System.Action"] = function (request, data, root) {
  var i784 = root || request.c( 'System.Action' )
  var i785 = data
  return i784
}

Deserializers["GameController+Stage"] = function (request, data, root) {
  var i788 = root || request.c( 'GameController+Stage' )
  var i789 = data
  i788.cameraPos = new pc.Vec3( i789[0], i789[1], i789[2] )
  var i791 = i789[3]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i788.monsters = i790
  request.r(i789[4], i789[5], 0, i788, 'ui')
  request.r(i789[6], i789[7], 0, i788, 'armorBrokenTut')
  i788.powerCount = i789[8]
  i788.powerUses = i789[9]
  i788.tutorial = !!i789[10]
  return i788
}

Deserializers["TargetController"] = function (request, data, root) {
  var i794 = root || request.c( 'TargetController' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 1, i796, '')
  }
  i794.listTarget = i796
  request.r(i795[1], i795[2], 0, i794, 'currentTarget')
  i794.index = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'tut')
  i794.grabRadius = i795[6]
  return i794
}

Deserializers["LunaController"] = function (request, data, root) {
  var i800 = root || request.c( 'LunaController' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'BGTexture')
  i800.UseTime = !!i801[2]
  i800.TimePlay = i801[3]
  i800.PowerStage1 = i801[4]
  i800.PowerStage2 = i801[5]
  i800.PowerUsesStage1 = i801[6]
  i800.PowerUsesStage2 = i801[7]
  i800.PowerDamage = i801[8]
  i800.MonsterHPStage1 = i801[9]
  i800.MonsterHPStage2 = i801[10]
  request.r(i801[11], i801[12], 0, i800, 'BGImage')
  var i803 = i801[13]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i800.CTA = i802
  request.r(i801[14], i801[15], 0, i800, 'endCard')
  return i800
}

Deserializers["AudioController"] = function (request, data, root) {
  var i806 = root || request.c( 'AudioController' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'BGM')
  request.r(i807[2], i807[3], 0, i806, 'musicSource')
  request.r(i807[4], i807[5], 0, i806, 'pool')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'clip')
  request.r(i809[2], i809[3], 0, i808, 'outputAudioMixerGroup')
  i808.playOnAwake = !!i809[4]
  i808.loop = !!i809[5]
  i808.time = i809[6]
  i808.volume = i809[7]
  i808.pitch = i809[8]
  i808.enabled = !!i809[9]
  return i808
}

Deserializers["VFXController"] = function (request, data, root) {
  var i810 = root || request.c( 'VFXController' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'bloodPrefab')
  request.r(i811[2], i811[3], 0, i810, 'pool')
  return i810
}

Deserializers["PowerController"] = function (request, data, root) {
  var i812 = root || request.c( 'PowerController' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('PowerOption')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('PowerOption', i815[i + 0]));
  }
  i812.powers = i814
  request.r(i813[1], i813[2], 0, i812, 'clickSound')
  request.r(i813[3], i813[4], 0, i812, 'choiceTut')
  request.r(i813[5], i813[6], 0, i812, 'offTut')
  request.r(i813[7], i813[8], 0, i812, 'offHand')
  request.r(i813[9], i813[10], 0, i812, 'bar')
  request.r(i813[11], i813[12], 0, i812, 'powerCountText')
  request.r(i813[13], i813[14], 0, i812, 'counterText')
  i812.limit = i813[15]
  i812.used = i813[16]
  return i812
}

Deserializers["PowerOption"] = function (request, data, root) {
  var i818 = root || request.c( 'PowerOption' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'Button')
  request.r(i819[2], i819[3], 0, i818, 'Selected')
  request.r(i819[4], i819[5], 0, i818, 'Power')
  request.r(i819[6], i819[7], 0, i818, 'Tutorial')
  return i818
}

Deserializers["LightningStrike"] = function (request, data, root) {
  var i820 = root || request.c( 'LightningStrike' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'segmentSprite')
  i820.coreColor = new pc.Color(i821[2], i821[3], i821[4], i821[5])
  i820.glowColor = new pc.Color(i821[6], i821[7], i821[8], i821[9])
  i820.coreWidth = i821[10]
  i820.glowWidth = i821[11]
  i820.mainSegments = i821[12]
  i820.branchSegments = i821[13]
  i820.branches = i821[14]
  i820.jitter = i821[15]
  i820.sortingOrder = i821[16]
  i820.flashStrength = i821[17]
  i820.groundY = i821[18]
  request.r(i821[19], i821[20], 0, i820, 'strikeSound')
  i820.shakeDuration = i821[21]
  i820.shakeStrength = i821[22]
  return i820
}

Deserializers["FirePower"] = function (request, data, root) {
  var i822 = root || request.c( 'FirePower' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.frames = i824
  i822.frameRate = i823[1]
  i822.igniteRadius = i823[2]
  i822.burnDamage = i823[3]
  i822.burnInterval = i823[4]
  i822.burnDuration = i823[5]
  request.r(i823[6], i823[7], 0, i822, 'emberSprite')
  request.r(i823[8], i823[9], 0, i822, 'smokeSprite')
  request.r(i823[10], i823[11], 0, i822, 'useSound')
  i822.cooldown = i823[12]
  request.r(i823[13], i823[14], 0, i822, 'container')
  i822.baseScale = i823[15]
  return i822
}

Deserializers["LightningPower"] = function (request, data, root) {
  var i826 = root || request.c( 'LightningPower' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'strike')
  i826.radius = i827[2]
  i826.damage = i827[3]
  i826.touchRadius = i827[4]
  request.r(i827[5], i827[6], 0, i826, 'useSound')
  i826.cooldown = i827[7]
  request.r(i827[8], i827[9], 0, i826, 'container')
  i826.baseScale = i827[10]
  return i826
}

Deserializers["RainEffect"] = function (request, data, root) {
  var i828 = root || request.c( 'RainEffect' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'dropSprite')
  i828.maxDrops = i829[2]
  i828.velocity = new pc.Vec2( i829[3], i829[4] )
  i828.dropSize = new pc.Vec2( i829[5], i829[6] )
  i828.color = new pc.Color(i829[7], i829[8], i829[9], i829[10])
  i828.groundY = i829[11]
  i828.fadeIn = i829[12]
  i828.fadeOut = i829[13]
  i828.sortingOrder = i829[14]
  return i828
}

Deserializers["StormPower"] = function (request, data, root) {
  var i830 = root || request.c( 'StormPower' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'strike')
  request.r(i831[2], i831[3], 0, i830, 'rain')
  i830.strikes = i831[4]
  i830.missMargin = i831[5]
  i830.groundY = i831[6]
  i830.strikeInterval = new pc.Vec2( i831[7], i831[8] )
  i830.radius = i831[9]
  i830.damage = i831[10]
  i830.darkAlpha = i831[11]
  request.r(i831[12], i831[13], 0, i830, 'useSound')
  i830.cooldown = i831[14]
  request.r(i831[15], i831[16], 0, i830, 'container')
  i830.baseScale = i831[17]
  return i830
}

Deserializers["TornadoPower"] = function (request, data, root) {
  var i832 = root || request.c( 'TornadoPower' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'funnelSprite')
  i832.groundY = i833[2]
  i832.height = i833[3]
  i832.widthRatio = i833[4]
  i832.patrolDistance = i833[5]
  i832.patrolSpeed = i833[6]
  i832.liftTime = i833[7]
  i832.liftSpeed = i833[8]
  i832.liftAccel = i833[9]
  i832.swirl = i833[10]
  i832.spin = i833[11]
  i832.landHeight = i833[12]
  i832.maxTossTime = i833[13]
  i832.fadeTime = i833[14]
  i832.armorFallTime = i833[15]
  i832.armorTick = i833[16]
  i832.damage = i833[17]
  request.r(i833[18], i833[19], 0, i832, 'liftSound')
  request.r(i833[20], i833[21], 0, i832, 'hitSound')
  i832.sortingOrder = i833[22]
  i832.touchRadius = i833[23]
  request.r(i833[24], i833[25], 0, i832, 'useSound')
  i832.cooldown = i833[26]
  request.r(i833[27], i833[28], 0, i832, 'container')
  i832.baseScale = i833[29]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i835 = data
  i834.ambientIntensity = i835[0]
  i834.reflectionIntensity = i835[1]
  i834.ambientMode = i835[2]
  i834.ambientLight = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.ambientSkyColor = new pc.Color(i835[7], i835[8], i835[9], i835[10])
  i834.ambientGroundColor = new pc.Color(i835[11], i835[12], i835[13], i835[14])
  i834.ambientEquatorColor = new pc.Color(i835[15], i835[16], i835[17], i835[18])
  i834.fogColor = new pc.Color(i835[19], i835[20], i835[21], i835[22])
  i834.fogEndDistance = i835[23]
  i834.fogStartDistance = i835[24]
  i834.fogDensity = i835[25]
  i834.fog = !!i835[26]
  request.r(i835[27], i835[28], 0, i834, 'skybox')
  i834.fogMode = i835[29]
  var i837 = i835[30]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i837[i + 0]) );
  }
  i834.lightmaps = i836
  i834.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i835[31], i834.lightProbes)
  i834.lightmapsMode = i835[32]
  i834.mixedBakeMode = i835[33]
  i834.environmentLightingMode = i835[34]
  i834.ambientProbe = new pc.SphericalHarmonicsL2(i835[35])
  request.r(i835[36], i835[37], 0, i834, 'customReflection')
  request.r(i835[38], i835[39], 0, i834, 'defaultReflection')
  i834.defaultReflectionMode = i835[40]
  i834.defaultReflectionResolution = i835[41]
  i834.sunLightObjectId = i835[42]
  i834.pixelLightCount = i835[43]
  i834.defaultReflectionHDR = !!i835[44]
  i834.hasLightDataAsset = !!i835[45]
  i834.hasManualGenerate = !!i835[46]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'lightmapColor')
  request.r(i841[2], i841[3], 0, i840, 'lightmapDirection')
  request.r(i841[4], i841[5], 0, i840, 'shadowMask')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i842 = root || new UnityEngine.LightProbes()
  var i843 = data
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i853[i + 0]));
  }
  i850.ShaderCompilationErrors = i852
  i850.name = i851[1]
  i850.guid = i851[2]
  var i855 = i851[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.shaderDefinedKeywords = i854
  var i857 = i851[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i857[i + 0]) );
  }
  i850.passes = i856
  var i859 = i851[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i859[i + 0]) );
  }
  i850.usePasses = i858
  var i861 = i851[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i861[i + 0]) );
  }
  i850.defaultParameterValues = i860
  request.r(i851[7], i851[8], 0, i850, 'unityFallbackShader')
  i850.readDepth = !!i851[9]
  i850.hasDepthOnlyPass = !!i851[10]
  i850.isCreatedByShaderGraph = !!i851[11]
  i850.disableBatching = !!i851[12]
  i850.compiled = !!i851[13]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i865 = data
  i864.shaderName = i865[0]
  i864.errorMessage = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i870 = root || new pc.UnityShaderPass()
  var i871 = data
  i870.id = i871[0]
  i870.subShaderIndex = i871[1]
  i870.name = i871[2]
  i870.passType = i871[3]
  i870.grabPassTextureName = i871[4]
  i870.usePass = !!i871[5]
  i870.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[6], i870.zTest)
  i870.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[7], i870.zWrite)
  i870.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[8], i870.culling)
  i870.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i871[9], i870.blending)
  i870.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i871[10], i870.alphaBlending)
  i870.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[11], i870.colorWriteMask)
  i870.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[12], i870.offsetUnits)
  i870.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[13], i870.offsetFactor)
  i870.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[14], i870.stencilRef)
  i870.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[15], i870.stencilReadMask)
  i870.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[16], i870.stencilWriteMask)
  i870.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i871[17], i870.stencilOp)
  i870.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i871[18], i870.stencilOpFront)
  i870.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i871[19], i870.stencilOpBack)
  var i873 = i871[20]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i873[i + 0]) );
  }
  i870.tags = i872
  var i875 = i871[21]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i870.passDefinedKeywords = i874
  var i877 = i871[22]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i877[i + 0]) );
  }
  i870.passDefinedKeywordGroups = i876
  var i879 = i871[23]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i879[i + 0]) );
  }
  i870.variants = i878
  var i881 = i871[24]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i881[i + 0]) );
  }
  i870.excludedVariants = i880
  i870.hasDepthReader = !!i871[25]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i883 = data
  i882.val = i883[0]
  i882.name = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i885 = data
  i884.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.src)
  i884.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.dst)
  i884.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.op)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i887 = data
  i886.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[0], i886.pass)
  i886.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[1], i886.fail)
  i886.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[2], i886.zFail)
  i886.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[3], i886.comp)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i891 = data
  i890.name = i891[0]
  i890.value = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i894.keywords = i896
  i894.hasDiscard = !!i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i901 = data
  i900.passId = i901[0]
  i900.subShaderIndex = i901[1]
  var i903 = i901[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i900.keywords = i902
  i900.vertexProgram = i901[3]
  i900.fragmentProgram = i901[4]
  i900.exportedForWebGl2 = !!i901[5]
  i900.readDepth = !!i901[6]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'shader')
  i906.pass = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i911 = data
  i910.name = i911[0]
  i910.type = i911[1]
  i910.value = new pc.Vec4( i911[2], i911[3], i911[4], i911[5] )
  i910.textureValue = i911[6]
  i910.shaderPropertyFlag = i911[7]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i913 = data
  i912.name = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'texture')
  i912.aabb = i913[3]
  i912.vertices = i913[4]
  i912.triangles = i913[5]
  i912.textureRect = UnityEngine.Rect.MinMaxRect(i913[6], i913[7], i913[8], i913[9])
  i912.packedRect = UnityEngine.Rect.MinMaxRect(i913[10], i913[11], i913[12], i913[13])
  i912.border = new pc.Vec4( i913[14], i913[15], i913[16], i913[17] )
  i912.transparency = i913[18]
  i912.bounds = i913[19]
  i912.pixelsPerUnit = i913[20]
  i912.textureWidth = i913[21]
  i912.textureHeight = i913[22]
  i912.nativeSize = new pc.Vec2( i913[23], i913[24] )
  i912.pivot = new pc.Vec2( i913[25], i913[26] )
  i912.textureRectOffset = new pc.Vec2( i913[27], i913[28] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i915 = data
  i914.name = i915[0]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i917 = data
  i916.name = i917[0]
  i916.bytes64 = i917[1]
  i916.data = i917[2]
  return i916
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i919 = data
  i918.normalStyle = i919[0]
  i918.normalSpacingOffset = i919[1]
  i918.boldStyle = i919[2]
  i918.boldSpacing = i919[3]
  i918.italicStyle = i919[4]
  i918.tabSize = i919[5]
  request.r(i919[6], i919[7], 0, i918, 'atlas')
  i918.m_SourceFontFileGUID = i919[8]
  i918.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i919[9], i918.m_CreationSettings)
  request.r(i919[10], i919[11], 0, i918, 'm_SourceFontFile')
  i918.m_SourceFontFilePath = i919[12]
  i918.m_AtlasPopulationMode = i919[13]
  i918.InternalDynamicOS = !!i919[14]
  var i921 = i919[15]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('UnityEngine.TextCore.Glyph', i921[i + 0]));
  }
  i918.m_GlyphTable = i920
  var i923 = i919[16]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.TMP_Character', i923[i + 0]));
  }
  i918.m_CharacterTable = i922
  var i925 = i919[17]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i918.m_AtlasTextures = i924
  i918.m_AtlasTextureIndex = i919[18]
  i918.m_IsMultiAtlasTexturesEnabled = !!i919[19]
  i918.m_GetFontFeatures = !!i919[20]
  i918.m_ClearDynamicDataOnBuild = !!i919[21]
  i918.m_AtlasWidth = i919[22]
  i918.m_AtlasHeight = i919[23]
  i918.m_AtlasPadding = i919[24]
  i918.m_AtlasRenderMode = i919[25]
  var i927 = i919[26]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('UnityEngine.TextCore.GlyphRect', i927[i + 0]));
  }
  i918.m_UsedGlyphRects = i926
  var i929 = i919[27]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.TextCore.GlyphRect', i929[i + 0]));
  }
  i918.m_FreeGlyphRects = i928
  i918.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i919[28], i918.m_FontFeatureTable)
  i918.m_ShouldReimportFontFeatures = !!i919[29]
  var i931 = i919[30]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i918.m_FallbackFontAssetTable = i930
  var i933 = i919[31]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('TMPro.TMP_FontWeightPair', i933[i + 0]) );
  }
  i918.m_FontWeightTable = i932
  var i935 = i919[32]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('TMPro.TMP_FontWeightPair', i935[i + 0]) );
  }
  i918.fontWeights = i934
  i918.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i919[33], i918.m_fontInfo)
  var i937 = i919[34]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.TMP_Glyph', i937[i + 0]));
  }
  i918.m_glyphInfoList = i936
  i918.m_KerningTable = request.d('TMPro.KerningTable', i919[35], i918.m_KerningTable)
  var i939 = i919[36]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i918.fallbackFontAssets = i938
  i918.m_Version = i919[37]
  i918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i919[38], i918.m_FaceInfo)
  request.r(i919[39], i919[40], 0, i918, 'm_Material')
  return i918
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i941 = data
  i940.sourceFontFileName = i941[0]
  i940.sourceFontFileGUID = i941[1]
  i940.faceIndex = i941[2]
  i940.pointSizeSamplingMode = i941[3]
  i940.pointSize = i941[4]
  i940.padding = i941[5]
  i940.paddingMode = i941[6]
  i940.packingMode = i941[7]
  i940.atlasWidth = i941[8]
  i940.atlasHeight = i941[9]
  i940.characterSetSelectionMode = i941[10]
  i940.characterSequence = i941[11]
  i940.referencedFontAssetGUID = i941[12]
  i940.referencedTextAssetGUID = i941[13]
  i940.fontStyle = i941[14]
  i940.fontStyleModifier = i941[15]
  i940.renderMode = i941[16]
  i940.includeFontFeatures = !!i941[17]
  return i940
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i945 = data
  i944.m_Index = i945[0]
  i944.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i945[1], i944.m_Metrics)
  i944.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i945[2], i944.m_GlyphRect)
  i944.m_Scale = i945[3]
  i944.m_AtlasIndex = i945[4]
  i944.m_ClassDefinitionType = i945[5]
  return i944
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i947 = data
  i946.m_Width = i947[0]
  i946.m_Height = i947[1]
  i946.m_HorizontalBearingX = i947[2]
  i946.m_HorizontalBearingY = i947[3]
  i946.m_HorizontalAdvance = i947[4]
  return i946
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i949 = data
  i948.m_X = i949[0]
  i948.m_Y = i949[1]
  i948.m_Width = i949[2]
  i948.m_Height = i949[3]
  return i948
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_Character' )
  var i953 = data
  i952.m_ElementType = i953[0]
  i952.m_Unicode = i953[1]
  i952.m_GlyphIndex = i953[2]
  i952.m_Scale = i953[3]
  return i952
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.MultipleSubstitutionRecord', i961[i + 0]));
  }
  i958.m_MultipleSubstitutionRecords = i960
  var i963 = i959[1]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('TMPro.LigatureSubstitutionRecord', i963[i + 0]));
  }
  i958.m_LigatureSubstitutionRecords = i962
  var i965 = i959[2]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i965[i + 0]));
  }
  i958.m_GlyphPairAdjustmentRecords = i964
  var i967 = i959[3]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i967[i + 0]));
  }
  i958.m_MarkToBaseAdjustmentRecords = i966
  var i969 = i959[4]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i969[i + 0]));
  }
  i958.m_MarkToMarkAdjustmentRecords = i968
  return i958
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i973 = data
  i972.m_TargetGlyphID = i973[0]
  i972.m_SubstituteGlyphIDs = i973[1]
  return i972
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i977 = data
  i976.m_ComponentGlyphIDs = i977[0]
  i976.m_LigatureGlyphID = i977[1]
  return i976
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i981 = data
  i980.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i981[0], i980.m_FirstAdjustmentRecord)
  i980.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i981[1], i980.m_SecondAdjustmentRecord)
  i980.m_FeatureLookupFlags = i981[2]
  return i980
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i985 = data
  i984.m_BaseGlyphID = i985[0]
  i984.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i985[1], i984.m_BaseGlyphAnchorPoint)
  i984.m_MarkGlyphID = i985[2]
  i984.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i985[3], i984.m_MarkPositionAdjustment)
  return i984
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i989 = data
  i988.m_BaseMarkGlyphID = i989[0]
  i988.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i989[1], i988.m_BaseMarkGlyphAnchorPoint)
  i988.m_CombiningMarkGlyphID = i989[2]
  i988.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i989[3], i988.m_CombiningMarkPositionAdjustment)
  return i988
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'regularTypeface')
  request.r(i995[2], i995[3], 0, i994, 'italicTypeface')
  return i994
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i997 = data
  i996.Name = i997[0]
  i996.PointSize = i997[1]
  i996.Scale = i997[2]
  i996.CharacterCount = i997[3]
  i996.LineHeight = i997[4]
  i996.Baseline = i997[5]
  i996.Ascender = i997[6]
  i996.CapHeight = i997[7]
  i996.Descender = i997[8]
  i996.CenterLine = i997[9]
  i996.SuperscriptOffset = i997[10]
  i996.SubscriptOffset = i997[11]
  i996.SubSize = i997[12]
  i996.Underline = i997[13]
  i996.UnderlineThickness = i997[14]
  i996.strikethrough = i997[15]
  i996.strikethroughThickness = i997[16]
  i996.TabWidth = i997[17]
  i996.Padding = i997[18]
  i996.AtlasWidth = i997[19]
  i996.AtlasHeight = i997[20]
  return i996
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.x = i1001[1]
  i1000.y = i1001[2]
  i1000.width = i1001[3]
  i1000.height = i1001[4]
  i1000.xOffset = i1001[5]
  i1000.yOffset = i1001[6]
  i1000.xAdvance = i1001[7]
  i1000.scale = i1001[8]
  return i1000
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.KerningTable' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.KerningPair', i1005[i + 0]));
  }
  i1002.kerningPairs = i1004
  return i1002
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.KerningPair' )
  var i1009 = data
  i1008.xOffset = i1009[0]
  i1008.m_FirstGlyph = i1009[1]
  i1008.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1009[2], i1008.m_FirstGlyphAdjustments)
  i1008.m_SecondGlyph = i1009[3]
  i1008.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1009[4], i1008.m_SecondGlyphAdjustments)
  i1008.m_IgnoreSpacingAdjustments = !!i1009[5]
  return i1008
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1011 = data
  i1010.m_FaceIndex = i1011[0]
  i1010.m_FamilyName = i1011[1]
  i1010.m_StyleName = i1011[2]
  i1010.m_PointSize = i1011[3]
  i1010.m_Scale = i1011[4]
  i1010.m_UnitsPerEM = i1011[5]
  i1010.m_LineHeight = i1011[6]
  i1010.m_AscentLine = i1011[7]
  i1010.m_CapLine = i1011[8]
  i1010.m_MeanLine = i1011[9]
  i1010.m_Baseline = i1011[10]
  i1010.m_DescentLine = i1011[11]
  i1010.m_SuperscriptOffset = i1011[12]
  i1010.m_SuperscriptSize = i1011[13]
  i1010.m_SubscriptOffset = i1011[14]
  i1010.m_SubscriptSize = i1011[15]
  i1010.m_UnderlineOffset = i1011[16]
  i1010.m_UnderlineThickness = i1011[17]
  i1010.m_StrikethroughOffset = i1011[18]
  i1010.m_StrikethroughThickness = i1011[19]
  i1010.m_TabWidth = i1011[20]
  return i1010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1013 = data
  i1012.useSafeMode = !!i1013[0]
  i1012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1013[1], i1012.safeModeOptions)
  i1012.timeScale = i1013[2]
  i1012.unscaledTimeScale = i1013[3]
  i1012.useSmoothDeltaTime = !!i1013[4]
  i1012.maxSmoothUnscaledTime = i1013[5]
  i1012.rewindCallbackMode = i1013[6]
  i1012.showUnityEditorReport = !!i1013[7]
  i1012.logBehaviour = i1013[8]
  i1012.drawGizmos = !!i1013[9]
  i1012.defaultRecyclable = !!i1013[10]
  i1012.defaultAutoPlay = i1013[11]
  i1012.defaultUpdateType = i1013[12]
  i1012.defaultTimeScaleIndependent = !!i1013[13]
  i1012.defaultEaseType = i1013[14]
  i1012.defaultEaseOvershootOrAmplitude = i1013[15]
  i1012.defaultEasePeriod = i1013[16]
  i1012.defaultAutoKill = !!i1013[17]
  i1012.defaultLoopType = i1013[18]
  i1012.debugMode = !!i1013[19]
  i1012.debugStoreTargetId = !!i1013[20]
  i1012.showPreviewPanel = !!i1013[21]
  i1012.storeSettingsLocation = i1013[22]
  i1012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1013[23], i1012.modules)
  i1012.createASMDEF = !!i1013[24]
  i1012.showPlayingTweens = !!i1013[25]
  i1012.showPausedTweens = !!i1013[26]
  return i1012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1015 = data
  i1014.logBehaviour = i1015[0]
  i1014.nestedTweenFailureBehaviour = i1015[1]
  return i1014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1017 = data
  i1016.showPanel = !!i1017[0]
  i1016.audioEnabled = !!i1017[1]
  i1016.physicsEnabled = !!i1017[2]
  i1016.physics2DEnabled = !!i1017[3]
  i1016.spriteEnabled = !!i1017[4]
  i1016.uiEnabled = !!i1017[5]
  i1016.textMeshProEnabled = !!i1017[6]
  i1016.tk2DEnabled = !!i1017[7]
  i1016.deAudioEnabled = !!i1017[8]
  i1016.deUnityExtendedEnabled = !!i1017[9]
  i1016.epoOutlineEnabled = !!i1017[10]
  return i1016
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_Settings' )
  var i1019 = data
  i1018.assetVersion = i1019[0]
  i1018.m_TextWrappingMode = i1019[1]
  i1018.m_enableKerning = !!i1019[2]
  var i1021 = i1019[3]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(i1021[i + 0]);
  }
  i1018.m_ActiveFontFeatures = i1020
  i1018.m_enableExtraPadding = !!i1019[4]
  i1018.m_enableTintAllSprites = !!i1019[5]
  i1018.m_enableParseEscapeCharacters = !!i1019[6]
  i1018.m_EnableRaycastTarget = !!i1019[7]
  i1018.m_GetFontFeaturesAtRuntime = !!i1019[8]
  i1018.m_missingGlyphCharacter = i1019[9]
  i1018.m_ClearDynamicDataOnBuild = !!i1019[10]
  i1018.m_warningsDisabled = !!i1019[11]
  request.r(i1019[12], i1019[13], 0, i1018, 'm_defaultFontAsset')
  i1018.m_defaultFontAssetPath = i1019[14]
  i1018.m_defaultFontSize = i1019[15]
  i1018.m_defaultAutoSizeMinRatio = i1019[16]
  i1018.m_defaultAutoSizeMaxRatio = i1019[17]
  i1018.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1019[18], i1019[19] )
  i1018.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1019[20], i1019[21] )
  i1018.m_autoSizeTextContainer = !!i1019[22]
  i1018.m_IsTextObjectScaleStatic = !!i1019[23]
  var i1023 = i1019[24]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.m_fallbackFontAssets = i1022
  i1018.m_matchMaterialPreset = !!i1019[25]
  i1018.m_HideSubTextObjects = !!i1019[26]
  request.r(i1019[27], i1019[28], 0, i1018, 'm_defaultSpriteAsset')
  i1018.m_defaultSpriteAssetPath = i1019[29]
  i1018.m_enableEmojiSupport = !!i1019[30]
  i1018.m_MissingCharacterSpriteUnicode = i1019[31]
  var i1025 = i1019[32]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1018.m_EmojiFallbackTextAssets = i1024
  i1018.m_defaultColorGradientPresetsPath = i1019[33]
  request.r(i1019[34], i1019[35], 0, i1018, 'm_defaultStyleSheet')
  i1018.m_StyleSheetsResourcePath = i1019[36]
  request.r(i1019[37], i1019[38], 0, i1018, 'm_leadingCharacters')
  request.r(i1019[39], i1019[40], 0, i1018, 'm_followingCharacters')
  i1018.m_UseModernHangulLineBreakingRules = !!i1019[41]
  return i1018
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1028 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'spriteSheet')
  var i1031 = i1029[2]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('TMPro.TMP_Sprite', i1031[i + 0]));
  }
  i1028.spriteInfoList = i1030
  var i1033 = i1029[3]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1028.fallbackSpriteAssets = i1032
  var i1035 = i1029[4]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_SpriteCharacter', i1035[i + 0]));
  }
  i1028.m_SpriteCharacterTable = i1034
  var i1037 = i1029[5]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(request.d('TMPro.TMP_SpriteGlyph', i1037[i + 0]));
  }
  i1028.m_GlyphTable = i1036
  i1028.m_Version = i1029[6]
  i1028.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1029[7], i1028.m_FaceInfo)
  request.r(i1029[8], i1029[9], 0, i1028, 'm_Material')
  return i1028
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.hashCode = i1041[1]
  i1040.unicode = i1041[2]
  i1040.pivot = new pc.Vec2( i1041[3], i1041[4] )
  request.r(i1041[5], i1041[6], 0, i1040, 'sprite')
  i1040.id = i1041[7]
  i1040.x = i1041[8]
  i1040.y = i1041[9]
  i1040.width = i1041[10]
  i1040.height = i1041[11]
  i1040.xOffset = i1041[12]
  i1040.yOffset = i1041[13]
  i1040.xAdvance = i1041[14]
  i1040.scale = i1041[15]
  return i1040
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1047 = data
  i1046.m_Name = i1047[0]
  i1046.m_ElementType = i1047[1]
  i1046.m_Unicode = i1047[2]
  i1046.m_GlyphIndex = i1047[3]
  i1046.m_Scale = i1047[4]
  return i1046
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'sprite')
  i1050.m_Index = i1051[2]
  i1050.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1051[3], i1050.m_Metrics)
  i1050.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1051[4], i1050.m_GlyphRect)
  i1050.m_Scale = i1051[5]
  i1050.m_AtlasIndex = i1051[6]
  i1050.m_ClassDefinitionType = i1051[7]
  return i1050
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.TMP_Style', i1055[i + 0]));
  }
  i1052.m_StyleList = i1054
  return i1052
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_Style' )
  var i1059 = data
  i1058.m_Name = i1059[0]
  i1058.m_HashCode = i1059[1]
  i1058.m_OpeningDefinition = i1059[2]
  i1058.m_ClosingDefinition = i1059[3]
  i1058.m_OpeningTagArray = i1059[4]
  i1058.m_ClosingTagArray = i1059[5]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1063[i + 0]) );
  }
  i1060.files = i1062
  i1060.componentToPrefabIds = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1067 = data
  i1066.path = i1067[0]
  request.r(i1067[1], i1067[2], 0, i1066, 'unityObject')
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1071[i + 0]) );
  }
  i1068.scriptsExecutionOrder = i1070
  var i1073 = i1069[1]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1073[i + 0]) );
  }
  i1068.sortingLayers = i1072
  var i1075 = i1069[2]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1075[i + 0]) );
  }
  i1068.cullingLayers = i1074
  i1068.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1069[3], i1068.timeSettings)
  i1068.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1069[4], i1068.physicsSettings)
  i1068.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1069[5], i1068.physics2DSettings)
  i1068.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1069[6], i1068.qualitySettings)
  i1068.enableRealtimeShadows = !!i1069[7]
  i1068.enableAutoInstancing = !!i1069[8]
  i1068.enableStaticBatching = !!i1069[9]
  i1068.enableDynamicBatching = !!i1069[10]
  i1068.usePreservativeDynamicBatching = !!i1069[11]
  i1068.lightmapEncodingQuality = i1069[12]
  i1068.desiredColorSpace = i1069[13]
  var i1077 = i1069[14]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1068.allTags = i1076
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.value = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.name = i1085[1]
  i1084.value = i1085[2]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1089 = data
  i1088.id = i1089[0]
  i1088.name = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1091 = data
  i1090.fixedDeltaTime = i1091[0]
  i1090.maximumDeltaTime = i1091[1]
  i1090.timeScale = i1091[2]
  i1090.maximumParticleTimestep = i1091[3]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1093 = data
  i1092.gravity = new pc.Vec3( i1093[0], i1093[1], i1093[2] )
  i1092.defaultSolverIterations = i1093[3]
  i1092.bounceThreshold = i1093[4]
  i1092.autoSyncTransforms = !!i1093[5]
  i1092.autoSimulation = !!i1093[6]
  var i1095 = i1093[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1095[i + 0]) );
  }
  i1092.collisionMatrix = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1099 = data
  i1098.enabled = !!i1099[0]
  i1098.layerId = i1099[1]
  i1098.otherLayerId = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'material')
  i1100.gravity = new pc.Vec2( i1101[2], i1101[3] )
  i1100.positionIterations = i1101[4]
  i1100.velocityIterations = i1101[5]
  i1100.velocityThreshold = i1101[6]
  i1100.maxLinearCorrection = i1101[7]
  i1100.maxAngularCorrection = i1101[8]
  i1100.maxTranslationSpeed = i1101[9]
  i1100.maxRotationSpeed = i1101[10]
  i1100.baumgarteScale = i1101[11]
  i1100.baumgarteTOIScale = i1101[12]
  i1100.timeToSleep = i1101[13]
  i1100.linearSleepTolerance = i1101[14]
  i1100.angularSleepTolerance = i1101[15]
  i1100.defaultContactOffset = i1101[16]
  i1100.autoSimulation = !!i1101[17]
  i1100.queriesHitTriggers = !!i1101[18]
  i1100.queriesStartInColliders = !!i1101[19]
  i1100.callbacksOnDisable = !!i1101[20]
  i1100.reuseCollisionCallbacks = !!i1101[21]
  i1100.autoSyncTransforms = !!i1101[22]
  var i1103 = i1101[23]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1103[i + 0]) );
  }
  i1100.collisionMatrix = i1102
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1107 = data
  i1106.enabled = !!i1107[0]
  i1106.layerId = i1107[1]
  i1106.otherLayerId = i1107[2]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1111[i + 0]) );
  }
  i1108.qualityLevels = i1110
  var i1113 = i1109[1]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1108.names = i1112
  i1108.shadows = i1109[2]
  i1108.anisotropicFiltering = i1109[3]
  i1108.antiAliasing = i1109[4]
  i1108.lodBias = i1109[5]
  i1108.shadowCascades = i1109[6]
  i1108.shadowDistance = i1109[7]
  i1108.shadowmaskMode = i1109[8]
  i1108.shadowProjection = i1109[9]
  i1108.shadowResolution = i1109[10]
  i1108.softParticles = !!i1109[11]
  i1108.softVegetation = !!i1109[12]
  i1108.activeColorSpace = i1109[13]
  i1108.desiredColorSpace = i1109[14]
  i1108.masterTextureLimit = i1109[15]
  i1108.maxQueuedFrames = i1109[16]
  i1108.particleRaycastBudget = i1109[17]
  i1108.pixelLightCount = i1109[18]
  i1108.realtimeReflectionProbes = !!i1109[19]
  i1108.shadowCascade2Split = i1109[20]
  i1108.shadowCascade4Split = new pc.Vec3( i1109[21], i1109[22], i1109[23] )
  i1108.streamingMipmapsActive = !!i1109[24]
  i1108.vSyncCount = i1109[25]
  i1108.asyncUploadBufferSize = i1109[26]
  i1108.asyncUploadTimeSlice = i1109[27]
  i1108.billboardsFaceCameraPosition = !!i1109[28]
  i1108.shadowNearPlaneOffset = i1109[29]
  i1108.streamingMipmapsMemoryBudget = i1109[30]
  i1108.maximumLODLevel = i1109[31]
  i1108.streamingMipmapsAddAllCameras = !!i1109[32]
  i1108.streamingMipmapsMaxLevelReduction = i1109[33]
  i1108.streamingMipmapsRenderersPerFrame = i1109[34]
  i1108.resolutionScalingFixedDPIFactor = i1109[35]
  i1108.streamingMipmapsMaxFileIORequests = i1109[36]
  i1108.currentQualityLevel = i1109[37]
  return i1108
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'm_ObjectArgument')
  i1116.m_ObjectArgumentAssemblyTypeName = i1117[2]
  i1116.m_IntArgument = i1117[3]
  i1116.m_FloatArgument = i1117[4]
  i1116.m_StringArgument = i1117[5]
  i1116.m_BoolArgument = !!i1117[6]
  return i1116
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1119 = data
  i1118.m_GlyphIndex = i1119[0]
  i1118.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1119[1], i1118.m_GlyphValueRecord)
  return i1118
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1121 = data
  i1120.m_XCoordinate = i1121[0]
  i1120.m_YCoordinate = i1121[1]
  return i1120
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1123 = data
  i1122.m_XPositionAdjustment = i1123[0]
  i1122.m_YPositionAdjustment = i1123[1]
  return i1122
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1124 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1125 = data
  i1124.xPlacement = i1125[0]
  i1124.yPlacement = i1125[1]
  i1124.xAdvance = i1125[2]
  i1124.yAdvance = i1125[3]
  return i1124
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1127 = data
  i1126.m_XPlacement = i1127[0]
  i1126.m_YPlacement = i1127[1]
  i1126.m_XAdvance = i1127[2]
  i1126.m_YAdvance = i1127[3]
  return i1126
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[6],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[24],"76":[24],"77":[24],"78":[24],"79":[24],"80":[24],"29":[24],"81":[24],"82":[24],"26":[24],"83":[24],"84":[24],"85":[24],"86":[6],"87":[88],"89":[90],"91":[90],"14":[13],"92":[20],"93":[6],"94":[95],"96":[13],"97":[17,13],"98":[88],"99":[17,13],"100":[13],"101":[13],"102":[88,13],"35":[13,17],"103":[104],"105":[104],"106":[104],"107":[13],"108":[13],"16":[14],"31":[17,13],"18":[13],"15":[14],"109":[13],"110":[13],"111":[13],"112":[13],"113":[13],"114":[13],"115":[13],"116":[13],"117":[13],"19":[17,13],"118":[13],"119":[13],"120":[13],"121":[13],"122":[17,13],"123":[13],"124":[11],"125":[11],"12":[11],"126":[11],"127":[6],"128":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraShake","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.GameObject","UnityEngine.HingeJoint2D","BonkController","UnityEngine.UI.Image","UnityEngine.CircleCollider2D","ScreenFx","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","CycleHand","PowerTutorial","SwipeHandTut","TargetController","GameController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","PowerController","LightningPower","TornadoPower","FirePower","StormPower","LightningStrike","RainEffect","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "11/05/2026 09:06:31";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_PSF_V01_YenTTH";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1746";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4531";

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

Deserializers.buildID = "15e977f3-be31-45ff-b62d-f9fe7b3da397";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

