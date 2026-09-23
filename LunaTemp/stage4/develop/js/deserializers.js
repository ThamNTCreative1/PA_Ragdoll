var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointSpring' )
  var i555 = data
  i554.spring = i555[0]
  i554.damper = i555[1]
  i554.targetPosition = i555[2]
  return i554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointMotor' )
  var i557 = data
  i556.m_TargetVelocity = i557[0]
  i556.m_Force = i557[1]
  i556.m_FreeSpin = i557[2]
  return i556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointLimits' )
  var i559 = data
  i558.m_Min = i559[0]
  i558.m_Max = i559[1]
  i558.m_Bounciness = i559[2]
  i558.m_BounceMinVelocity = i559[3]
  i558.m_ContactDistance = i559[4]
  i558.minBounce = i559[5]
  i558.maxBounce = i559[6]
  return i558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointDrive' )
  var i561 = data
  i560.m_PositionSpring = i561[0]
  i560.m_PositionDamper = i561[1]
  i560.m_MaximumForce = i561[2]
  i560.m_UseAcceleration = i561[3]
  return i560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i563 = data
  i562.m_Spring = i563[0]
  i562.m_Damper = i563[1]
  return i562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i565 = data
  i564.m_Limit = i565[0]
  i564.m_Bounciness = i565[1]
  i564.m_ContactDistance = i565[2]
  return i564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i567 = data
  i566.m_ExtremumSlip = i567[0]
  i566.m_ExtremumValue = i567[1]
  i566.m_AsymptoteSlip = i567[2]
  i566.m_AsymptoteValue = i567[3]
  i566.m_Stiffness = i567[4]
  return i566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i569 = data
  i568.m_LowerAngle = i569[0]
  i568.m_UpperAngle = i569[1]
  return i568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i571 = data
  i570.m_MotorSpeed = i571[0]
  i570.m_MaximumMotorTorque = i571[1]
  return i570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i573 = data
  i572.m_DampingRatio = i573[0]
  i572.m_Frequency = i573[1]
  i572.m_Angle = i573[2]
  return i572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i575 = data
  i574.m_LowerTranslation = i575[0]
  i574.m_UpperTranslation = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i576 = root || new pc.UnityMaterial()
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'shader')
  i576.renderQueue = i577[3]
  i576.enableInstancing = !!i577[4]
  var i579 = i577[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i579[i + 0]) );
  }
  i576.floatParameters = i578
  var i581 = i577[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i581[i + 0]) );
  }
  i576.colorParameters = i580
  var i583 = i577[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i583[i + 0]) );
  }
  i576.vectorParameters = i582
  var i585 = i577[8]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i585[i + 0]) );
  }
  i576.textureParameters = i584
  var i587 = i577[9]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i587[i + 0]) );
  }
  i576.materialFlags = i586
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = new pc.Color(i595[1], i595[2], i595[3], i595[4])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = new pc.Vec4( i599[1], i599[2], i599[3], i599[4] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i603 = data
  i602.name = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'value')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i607 = data
  i606.name = i607[0]
  i606.enabled = !!i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i609 = data
  i608.name = i609[0]
  i608.width = i609[1]
  i608.height = i609[2]
  i608.mipmapCount = i609[3]
  i608.anisoLevel = i609[4]
  i608.filterMode = i609[5]
  i608.hdr = !!i609[6]
  i608.format = i609[7]
  i608.wrapMode = i609[8]
  i608.alphaIsTransparency = !!i609[9]
  i608.alphaSource = i609[10]
  i608.graphicsFormat = i609[11]
  i608.sRGBTexture = !!i609[12]
  i608.desiredColorSpace = i609[13]
  i608.wrapU = i609[14]
  i608.wrapV = i609[15]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i611 = data
  i610.position = new pc.Vec3( i611[0], i611[1], i611[2] )
  i610.scale = new pc.Vec3( i611[3], i611[4], i611[5] )
  i610.rotation = new pc.Quat(i611[6], i611[7], i611[8], i611[9])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i613 = data
  i612.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i613[0], i612.main)
  i612.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i613[1], i612.colorBySpeed)
  i612.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i613[2], i612.colorOverLifetime)
  i612.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i613[3], i612.emission)
  i612.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i613[4], i612.rotationBySpeed)
  i612.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i613[5], i612.rotationOverLifetime)
  i612.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i613[6], i612.shape)
  i612.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i613[7], i612.sizeBySpeed)
  i612.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i613[8], i612.sizeOverLifetime)
  i612.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i613[9], i612.textureSheetAnimation)
  i612.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i613[10], i612.velocityOverLifetime)
  i612.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i613[11], i612.noise)
  i612.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i613[12], i612.inheritVelocity)
  i612.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i613[13], i612.forceOverLifetime)
  i612.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i613[14], i612.limitVelocityOverLifetime)
  i612.useAutoRandomSeed = !!i613[15]
  i612.randomSeed = i613[16]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemMain()
  var i615 = data
  i614.duration = i615[0]
  i614.loop = !!i615[1]
  i614.prewarm = !!i615[2]
  i614.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[3], i614.startDelay)
  i614.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[4], i614.startLifetime)
  i614.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[5], i614.startSpeed)
  i614.startSize3D = !!i615[6]
  i614.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[7], i614.startSizeX)
  i614.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[8], i614.startSizeY)
  i614.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[9], i614.startSizeZ)
  i614.startRotation3D = !!i615[10]
  i614.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[11], i614.startRotationX)
  i614.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[12], i614.startRotationY)
  i614.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[13], i614.startRotationZ)
  i614.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i615[14], i614.startColor)
  i614.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[15], i614.gravityModifier)
  i614.simulationSpace = i615[16]
  request.r(i615[17], i615[18], 0, i614, 'customSimulationSpace')
  i614.simulationSpeed = i615[19]
  i614.useUnscaledTime = !!i615[20]
  i614.scalingMode = i615[21]
  i614.playOnAwake = !!i615[22]
  i614.maxParticles = i615[23]
  i614.emitterVelocityMode = i615[24]
  i614.stopAction = i615[25]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i616 = root || new pc.MinMaxCurve()
  var i617 = data
  i616.mode = i617[0]
  i616.curveMin = new pc.AnimationCurve( { keys_flow: i617[1] } )
  i616.curveMax = new pc.AnimationCurve( { keys_flow: i617[2] } )
  i616.curveMultiplier = i617[3]
  i616.constantMin = i617[4]
  i616.constantMax = i617[5]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i618 = root || new pc.MinMaxGradient()
  var i619 = data
  i618.mode = i619[0]
  i618.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i619[1], i618.gradientMin)
  i618.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i619[2], i618.gradientMax)
  i618.colorMin = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.colorMax = new pc.Color(i619[7], i619[8], i619[9], i619[10])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i621 = data
  i620.mode = i621[0]
  var i623 = i621[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i623[i + 0]) );
  }
  i620.colorKeys = i622
  var i625 = i621[2]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i625[i + 0]) );
  }
  i620.alphaKeys = i624
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemColorBySpeed()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i627[1], i626.color)
  i626.range = new pc.Vec2( i627[2], i627[3] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i631 = data
  i630.color = new pc.Color(i631[0], i631[1], i631[2], i631[3])
  i630.time = i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i635 = data
  i634.alpha = i635[0]
  i634.time = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemColorOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[1], i636.color)
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemEmitter()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.rateOverTime)
  i638.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.rateOverDistance)
  var i641 = i639[3]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i641[i + 0]) );
  }
  i638.bursts = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemBurst()
  var i645 = data
  i644.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[0], i644.count)
  i644.cycleCount = i645[1]
  i644.minCount = i645[2]
  i644.maxCount = i645[3]
  i644.repeatInterval = i645[4]
  i644.time = i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemRotationBySpeed()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.separateAxes = !!i647[4]
  i646.range = new pc.Vec2( i647[5], i647[6] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemRotationOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.x)
  i648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.y)
  i648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.z)
  i648.separateAxes = !!i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemShape()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.shapeType = i651[1]
  i650.randomDirectionAmount = i651[2]
  i650.sphericalDirectionAmount = i651[3]
  i650.randomPositionAmount = i651[4]
  i650.alignToDirection = !!i651[5]
  i650.radius = i651[6]
  i650.radiusMode = i651[7]
  i650.radiusSpread = i651[8]
  i650.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[9], i650.radiusSpeed)
  i650.radiusThickness = i651[10]
  i650.angle = i651[11]
  i650.length = i651[12]
  i650.boxThickness = new pc.Vec3( i651[13], i651[14], i651[15] )
  i650.meshShapeType = i651[16]
  request.r(i651[17], i651[18], 0, i650, 'mesh')
  request.r(i651[19], i651[20], 0, i650, 'meshRenderer')
  request.r(i651[21], i651[22], 0, i650, 'skinnedMeshRenderer')
  i650.useMeshMaterialIndex = !!i651[23]
  i650.meshMaterialIndex = i651[24]
  i650.useMeshColors = !!i651[25]
  i650.normalOffset = i651[26]
  i650.arc = i651[27]
  i650.arcMode = i651[28]
  i650.arcSpread = i651[29]
  i650.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[30], i650.arcSpeed)
  i650.donutRadius = i651[31]
  i650.position = new pc.Vec3( i651[32], i651[33], i651[34] )
  i650.rotation = new pc.Vec3( i651[35], i651[36], i651[37] )
  i650.scale = new pc.Vec3( i651[38], i651[39], i651[40] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemSizeBySpeed()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.x)
  i652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.y)
  i652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.z)
  i652.separateAxes = !!i653[4]
  i652.range = new pc.Vec2( i653[5], i653[6] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemSizeOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.x)
  i654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.y)
  i654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.z)
  i654.separateAxes = !!i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.mode = i657[1]
  i656.animation = i657[2]
  i656.numTilesX = i657[3]
  i656.numTilesY = i657[4]
  i656.useRandomRow = !!i657[5]
  i656.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[6], i656.frameOverTime)
  i656.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[7], i656.startFrame)
  i656.cycleCount = i657[8]
  i656.rowIndex = i657[9]
  i656.flipU = i657[10]
  i656.flipV = i657[11]
  i656.spriteCount = i657[12]
  var i659 = i657[13]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.sprites = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[4], i662.radial)
  i662.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[5], i662.speedModifier)
  i662.space = i663[6]
  i662.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[7], i662.orbitalX)
  i662.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[8], i662.orbitalY)
  i662.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[9], i662.orbitalZ)
  i662.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[10], i662.orbitalOffsetX)
  i662.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[11], i662.orbitalOffsetY)
  i662.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[12], i662.orbitalOffsetZ)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemNoise()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.separateAxes = !!i665[1]
  i664.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.strengthX)
  i664.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.strengthY)
  i664.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[4], i664.strengthZ)
  i664.frequency = i665[5]
  i664.damping = !!i665[6]
  i664.octaveCount = i665[7]
  i664.octaveMultiplier = i665[8]
  i664.octaveScale = i665[9]
  i664.quality = i665[10]
  i664.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[11], i664.scrollSpeed)
  i664.scrollSpeedMultiplier = i665[12]
  i664.remapEnabled = !!i665[13]
  i664.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[14], i664.remapX)
  i664.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[15], i664.remapY)
  i664.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[16], i664.remapZ)
  i664.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[17], i664.positionAmount)
  i664.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[18], i664.rotationAmount)
  i664.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[19], i664.sizeAmount)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemInheritVelocity()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.mode = i667[1]
  i666.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.curve)
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemForceOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.space = i669[4]
  i668.randomized = !!i669[5]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.limit)
  i670.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.limitX)
  i670.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.limitY)
  i670.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[4], i670.limitZ)
  i670.dampen = i671[5]
  i670.separateAxes = !!i671[6]
  i670.space = i671[7]
  i670.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[8], i670.drag)
  i670.multiplyDragByParticleSize = !!i671[9]
  i670.multiplyDragByParticleVelocity = !!i671[10]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'mesh')
  i672.meshCount = i673[2]
  i672.activeVertexStreamsCount = i673[3]
  i672.alignment = i673[4]
  i672.renderMode = i673[5]
  i672.sortMode = i673[6]
  i672.lengthScale = i673[7]
  i672.velocityScale = i673[8]
  i672.cameraVelocityScale = i673[9]
  i672.normalDirection = i673[10]
  i672.sortingFudge = i673[11]
  i672.minParticleSize = i673[12]
  i672.maxParticleSize = i673[13]
  i672.pivot = new pc.Vec3( i673[14], i673[15], i673[16] )
  request.r(i673[17], i673[18], 0, i672, 'trailMaterial')
  i672.applyActiveColorSpace = !!i673[19]
  i672.enabled = !!i673[20]
  request.r(i673[21], i673[22], 0, i672, 'sharedMaterial')
  var i675 = i673[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.sharedMaterials = i674
  i672.receiveShadows = !!i673[24]
  i672.shadowCastingMode = i673[25]
  i672.sortingLayerID = i673[26]
  i672.sortingOrder = i673[27]
  i672.lightmapIndex = i673[28]
  i672.lightmapSceneIndex = i673[29]
  i672.lightmapScaleOffset = new pc.Vec4( i673[30], i673[31], i673[32], i673[33] )
  i672.lightProbeUsage = i673[34]
  i672.reflectionProbeUsage = i673[35]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i679 = data
  i678.name = i679[0]
  i678.tagId = i679[1]
  i678.enabled = !!i679[2]
  i678.isStatic = !!i679[3]
  i678.layer = i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i681 = data
  i680.name = i681[0]
  i680.index = i681[1]
  i680.startup = !!i681[2]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i683 = data
  i682.aspect = i683[0]
  i682.orthographic = !!i683[1]
  i682.orthographicSize = i683[2]
  i682.backgroundColor = new pc.Color(i683[3], i683[4], i683[5], i683[6])
  i682.nearClipPlane = i683[7]
  i682.farClipPlane = i683[8]
  i682.fieldOfView = i683[9]
  i682.depth = i683[10]
  i682.clearFlags = i683[11]
  i682.cullingMask = i683[12]
  i682.rect = i683[13]
  request.r(i683[14], i683[15], 0, i682, 'targetTexture')
  i682.usePhysicalProperties = !!i683[16]
  i682.focalLength = i683[17]
  i682.sensorSize = new pc.Vec2( i683[18], i683[19] )
  i682.lensShift = new pc.Vec2( i683[20], i683[21] )
  i682.gateFit = i683[22]
  i682.commandBufferCount = i683[23]
  i682.cameraType = i683[24]
  i682.enabled = !!i683[25]
  return i682
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_FirstSelected')
  i684.m_sendNavigationEvents = !!i685[2]
  i684.m_DragThreshold = i685[3]
  return i684
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i687 = data
  i686.m_HorizontalAxis = i687[0]
  i686.m_VerticalAxis = i687[1]
  i686.m_SubmitButton = i687[2]
  i686.m_CancelButton = i687[3]
  i686.m_InputActionsPerSecond = i687[4]
  i686.m_RepeatDelay = i687[5]
  i686.m_ForceModuleActive = !!i687[6]
  i686.m_SendPointerHoverToParent = !!i687[7]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i689 = data
  i688.pivot = new pc.Vec2( i689[0], i689[1] )
  i688.anchorMin = new pc.Vec2( i689[2], i689[3] )
  i688.anchorMax = new pc.Vec2( i689[4], i689[5] )
  i688.sizeDelta = new pc.Vec2( i689[6], i689[7] )
  i688.anchoredPosition3D = new pc.Vec3( i689[8], i689[9], i689[10] )
  i688.rotation = new pc.Quat(i689[11], i689[12], i689[13], i689[14])
  i688.scale = new pc.Vec3( i689[15], i689[16], i689[17] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i691 = data
  i690.planeDistance = i691[0]
  i690.referencePixelsPerUnit = i691[1]
  i690.isFallbackOverlay = !!i691[2]
  i690.renderMode = i691[3]
  i690.renderOrder = i691[4]
  i690.sortingLayerName = i691[5]
  i690.sortingOrder = i691[6]
  i690.scaleFactor = i691[7]
  request.r(i691[8], i691[9], 0, i690, 'worldCamera')
  i690.overrideSorting = !!i691[10]
  i690.pixelPerfect = !!i691[11]
  i690.targetDisplay = i691[12]
  i690.overridePixelPerfect = !!i691[13]
  i690.enabled = !!i691[14]
  return i690
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i693 = data
  i692.m_UiScaleMode = i693[0]
  i692.m_ReferencePixelsPerUnit = i693[1]
  i692.m_ScaleFactor = i693[2]
  i692.m_ReferenceResolution = new pc.Vec2( i693[3], i693[4] )
  i692.m_ScreenMatchMode = i693[5]
  i692.m_MatchWidthOrHeight = i693[6]
  i692.m_PhysicalUnit = i693[7]
  i692.m_FallbackScreenDPI = i693[8]
  i692.m_DefaultSpriteDPI = i693[9]
  i692.m_DynamicPixelsPerUnit = i693[10]
  i692.m_PresetInfoIsWorld = !!i693[11]
  return i692
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i695 = data
  i694.m_IgnoreReversedGraphics = !!i695[0]
  i694.m_BlockingObjects = i695[1]
  i694.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i695[2] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i697 = data
  i696.cullTransparentMesh = !!i697[0]
  return i696
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i699 = data
  i698.m_AspectMode = i699[0]
  i698.m_AspectRatio = i699[1]
  return i698
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_Texture')
  i700.m_UVRect = UnityEngine.Rect.MinMaxRect(i701[2], i701[3], i701[4], i701[5])
  request.r(i701[6], i701[7], 0, i700, 'm_Material')
  i700.m_Maskable = !!i701[8]
  i700.m_Color = new pc.Color(i701[9], i701[10], i701[11], i701[12])
  i700.m_RaycastTarget = !!i701[13]
  i700.m_RaycastPadding = new pc.Vec4( i701[14], i701[15], i701[16], i701[17] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'animatorController')
  request.r(i703[2], i703[3], 0, i702, 'avatar')
  i702.updateMode = i703[4]
  i702.hasTransformHierarchy = !!i703[5]
  i702.applyRootMotion = !!i703[6]
  var i705 = i703[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.humanBones = i704
  i702.enabled = !!i703[8]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i709 = data
  i708.bodyType = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'material')
  i708.simulated = !!i709[3]
  i708.useAutoMass = !!i709[4]
  i708.mass = i709[5]
  i708.drag = i709[6]
  i708.angularDrag = i709[7]
  i708.gravityScale = i709[8]
  i708.collisionDetectionMode = i709[9]
  i708.sleepMode = i709[10]
  i708.constraints = i709[11]
  return i708
}

Deserializers["RagdollController"] = function (request, data, root) {
  var i710 = root || request.c( 'RagdollController' )
  var i711 = data
  i710.Piece = i711[0]
  i710.isDead = !!i711[1]
  var i713 = i711[2]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('BalanceController')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710.balances = i712
  request.r(i711[3], i711[4], 0, i710, 'head')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'clip')
  request.r(i717[2], i717[3], 0, i716, 'outputAudioMixerGroup')
  i716.playOnAwake = !!i717[4]
  i716.loop = !!i717[5]
  i716.time = i717[6]
  i716.volume = i717[7]
  i716.pitch = i717[8]
  i716.enabled = !!i717[9]
  return i716
}

Deserializers["AcidSound"] = function (request, data, root) {
  var i718 = root || request.c( 'AcidSound' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'audioSource')
  request.r(i719[2], i719[3], 0, i718, 'sizzleClip')
  i718.volume = i719[4]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i721 = data
  i720.usedByComposite = !!i721[0]
  i720.autoTiling = !!i721[1]
  i720.size = new pc.Vec2( i721[2], i721[3] )
  i720.edgeRadius = i721[4]
  i720.enabled = !!i721[5]
  i720.isTrigger = !!i721[6]
  i720.usedByEffector = !!i721[7]
  i720.density = i721[8]
  i720.offset = new pc.Vec2( i721[9], i721[10] )
  request.r(i721[11], i721[12], 0, i720, 'material')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i723 = data
  i722.useLimits = !!i723[0]
  i722.limits = request.d('UnityEngine.JointAngleLimits2D', i723[1], i722.limits)
  i722.useMotor = !!i723[2]
  i722.motor = request.d('UnityEngine.JointMotor2D', i723[3], i722.motor)
  i722.anchor = new pc.Vec2( i723[4], i723[5] )
  i722.connectedAnchor = new pc.Vec2( i723[6], i723[7] )
  i722.autoConfigureConnectedAnchor = !!i723[8]
  request.r(i723[9], i723[10], 0, i722, 'connectedBody')
  i722.breakForce = i723[11]
  i722.breakTorque = i723[12]
  i722.enableCollision = !!i723[13]
  i722.enabled = !!i723[14]
  return i722
}

Deserializers["PixelAcidDamage"] = function (request, data, root) {
  var i724 = root || request.c( 'PixelAcidDamage' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'controller')
  request.r(i725[2], i725[3], 0, i724, 'skinRenderer')
  i724.damagePerSecond = i725[4]
  i724.updateInterval = i725[5]
  i724.dissolveDelay = i725[6]
  request.r(i725[7], i725[8], 0, i724, 'acidSound')
  return i724
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i726 = root || request.c( 'BalanceController' )
  var i727 = data
  i726.targetRotation = i727[0]
  i726.force = i727[1]
  i726.useBalance = !!i727[2]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i731 = data
  i730.color = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  request.r(i731[4], i731[5], 0, i730, 'sprite')
  i730.flipX = !!i731[6]
  i730.flipY = !!i731[7]
  i730.drawMode = i731[8]
  i730.size = new pc.Vec2( i731[9], i731[10] )
  i730.tileMode = i731[11]
  i730.adaptiveModeThreshold = i731[12]
  i730.maskInteraction = i731[13]
  i730.spriteSortPoint = i731[14]
  i730.enabled = !!i731[15]
  request.r(i731[16], i731[17], 0, i730, 'sharedMaterial')
  var i733 = i731[18]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.sharedMaterials = i732
  i730.receiveShadows = !!i731[19]
  i730.shadowCastingMode = i731[20]
  i730.sortingLayerID = i731[21]
  i730.sortingOrder = i731[22]
  i730.lightmapIndex = i731[23]
  i730.lightmapSceneIndex = i731[24]
  i730.lightmapScaleOffset = new pc.Vec4( i731[25], i731[26], i731[27], i731[28] )
  i730.lightProbeUsage = i731[29]
  i730.reflectionProbeUsage = i731[30]
  return i730
}

Deserializers["DropArea"] = function (request, data, root) {
  var i734 = root || request.c( 'DropArea' )
  var i735 = data
  i734.piece = i735[0]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'additionalVertexStreams')
  i736.enabled = !!i737[2]
  request.r(i737[3], i737[4], 0, i736, 'sharedMaterial')
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[6]
  i736.shadowCastingMode = i737[7]
  i736.sortingLayerID = i737[8]
  i736.sortingOrder = i737[9]
  i736.lightmapIndex = i737[10]
  i736.lightmapSceneIndex = i737[11]
  i736.lightmapScaleOffset = new pc.Vec4( i737[12], i737[13], i737[14], i737[15] )
  i736.lightProbeUsage = i737[16]
  i736.reflectionProbeUsage = i737[17]
  return i736
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.TextMeshPro' )
  var i741 = data
  i740._SortingLayer = i741[0]
  i740._SortingLayerID = i741[1]
  i740._SortingOrder = i741[2]
  i740.m_hasFontAssetChanged = !!i741[3]
  request.r(i741[4], i741[5], 0, i740, 'm_renderer')
  i740.m_maskType = i741[6]
  i740.m_text = i741[7]
  i740.m_isRightToLeft = !!i741[8]
  request.r(i741[9], i741[10], 0, i740, 'm_fontAsset')
  request.r(i741[11], i741[12], 0, i740, 'm_sharedMaterial')
  var i743 = i741[13]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.m_fontSharedMaterials = i742
  request.r(i741[14], i741[15], 0, i740, 'm_fontMaterial')
  var i745 = i741[16]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.m_fontMaterials = i744
  i740.m_fontColor32 = UnityEngine.Color32.ConstructColor(i741[17], i741[18], i741[19], i741[20])
  i740.m_fontColor = new pc.Color(i741[21], i741[22], i741[23], i741[24])
  i740.m_enableVertexGradient = !!i741[25]
  i740.m_colorMode = i741[26]
  i740.m_fontColorGradient = request.d('TMPro.VertexGradient', i741[27], i740.m_fontColorGradient)
  request.r(i741[28], i741[29], 0, i740, 'm_fontColorGradientPreset')
  request.r(i741[30], i741[31], 0, i740, 'm_spriteAsset')
  i740.m_tintAllSprites = !!i741[32]
  request.r(i741[33], i741[34], 0, i740, 'm_StyleSheet')
  i740.m_TextStyleHashCode = i741[35]
  i740.m_overrideHtmlColors = !!i741[36]
  i740.m_faceColor = UnityEngine.Color32.ConstructColor(i741[37], i741[38], i741[39], i741[40])
  i740.m_fontSize = i741[41]
  i740.m_fontSizeBase = i741[42]
  i740.m_fontWeight = i741[43]
  i740.m_enableAutoSizing = !!i741[44]
  i740.m_fontSizeMin = i741[45]
  i740.m_fontSizeMax = i741[46]
  i740.m_fontStyle = i741[47]
  i740.m_HorizontalAlignment = i741[48]
  i740.m_VerticalAlignment = i741[49]
  i740.m_textAlignment = i741[50]
  i740.m_characterSpacing = i741[51]
  i740.m_characterHorizontalScale = i741[52]
  i740.m_wordSpacing = i741[53]
  i740.m_lineSpacing = i741[54]
  i740.m_lineSpacingMax = i741[55]
  i740.m_paragraphSpacing = i741[56]
  i740.m_charWidthMaxAdj = i741[57]
  i740.m_TextWrappingMode = i741[58]
  i740.m_wordWrappingRatios = i741[59]
  i740.m_overflowMode = i741[60]
  request.r(i741[61], i741[62], 0, i740, 'm_linkedTextComponent')
  request.r(i741[63], i741[64], 0, i740, 'parentLinkedComponent')
  i740.m_enableKerning = !!i741[65]
  var i747 = i741[66]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(i747[i + 0]);
  }
  i740.m_ActiveFontFeatures = i746
  i740.m_enableExtraPadding = !!i741[67]
  i740.checkPaddingRequired = !!i741[68]
  i740.m_isRichText = !!i741[69]
  i740.m_parseCtrlCharacters = !!i741[70]
  i740.m_isOrthographic = !!i741[71]
  i740.m_isCullingEnabled = !!i741[72]
  i740.m_horizontalMapping = i741[73]
  i740.m_verticalMapping = i741[74]
  i740.m_uvLineOffset = i741[75]
  i740.m_geometrySortingOrder = i741[76]
  i740.m_IsTextObjectScaleStatic = !!i741[77]
  i740.m_VertexBufferAutoSizeReduction = !!i741[78]
  i740.m_useMaxVisibleDescender = !!i741[79]
  i740.m_pageToDisplay = i741[80]
  i740.m_margin = new pc.Vec4( i741[81], i741[82], i741[83], i741[84] )
  i740.m_isUsingLegacyAnimationComponent = !!i741[85]
  i740.m_isVolumetricText = !!i741[86]
  request.r(i741[87], i741[88], 0, i740, 'm_Material')
  i740.m_EmojiFallbackSupport = !!i741[89]
  i740.m_Maskable = !!i741[90]
  i740.m_Color = new pc.Color(i741[91], i741[92], i741[93], i741[94])
  i740.m_RaycastTarget = !!i741[95]
  i740.m_RaycastPadding = new pc.Vec4( i741[96], i741[97], i741[98], i741[99] )
  return i740
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.VertexGradient' )
  var i749 = data
  i748.topLeft = new pc.Color(i749[0], i749[1], i749[2], i749[3])
  i748.topRight = new pc.Color(i749[4], i749[5], i749[6], i749[7])
  i748.bottomLeft = new pc.Color(i749[8], i749[9], i749[10], i749[11])
  i748.bottomRight = new pc.Color(i749[12], i749[13], i749[14], i749[15])
  return i748
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i753 = data
  i752.targetIsSelf = !!i753[0]
  request.r(i753[1], i753[2], 0, i752, 'targetGO')
  i752.tweenTargetIsTargetGO = !!i753[3]
  i752.delay = i753[4]
  i752.duration = i753[5]
  i752.easeType = i753[6]
  i752.easeCurve = new pc.AnimationCurve( { keys_flow: i753[7] } )
  i752.loopType = i753[8]
  i752.loops = i753[9]
  i752.id = i753[10]
  i752.isRelative = !!i753[11]
  i752.isFrom = !!i753[12]
  i752.isIndependentUpdate = !!i753[13]
  i752.autoKill = !!i753[14]
  i752.autoGenerate = !!i753[15]
  i752.isActive = !!i753[16]
  i752.isValid = !!i753[17]
  request.r(i753[18], i753[19], 0, i752, 'target')
  i752.animationType = i753[20]
  i752.targetType = i753[21]
  i752.forcedTargetType = i753[22]
  i752.autoPlay = !!i753[23]
  i752.useTargetAsV3 = !!i753[24]
  i752.endValueFloat = i753[25]
  i752.endValueV3 = new pc.Vec3( i753[26], i753[27], i753[28] )
  i752.endValueV2 = new pc.Vec2( i753[29], i753[30] )
  i752.endValueColor = new pc.Color(i753[31], i753[32], i753[33], i753[34])
  i752.endValueString = i753[35]
  i752.endValueRect = UnityEngine.Rect.MinMaxRect(i753[36], i753[37], i753[38], i753[39])
  request.r(i753[40], i753[41], 0, i752, 'endValueTransform')
  i752.optionalBool0 = !!i753[42]
  i752.optionalBool1 = !!i753[43]
  i752.optionalFloat0 = i753[44]
  i752.optionalInt0 = i753[45]
  i752.optionalRotationMode = i753[46]
  i752.optionalScrambleMode = i753[47]
  i752.optionalShakeRandomnessMode = i753[48]
  i752.optionalString = i753[49]
  i752.updateType = i753[50]
  i752.isSpeedBased = !!i753[51]
  i752.hasOnStart = !!i753[52]
  i752.hasOnPlay = !!i753[53]
  i752.hasOnUpdate = !!i753[54]
  i752.hasOnStepComplete = !!i753[55]
  i752.hasOnComplete = !!i753[56]
  i752.hasOnTweenCreated = !!i753[57]
  i752.hasOnRewind = !!i753[58]
  i752.onStart = request.d('UnityEngine.Events.UnityEvent', i753[59], i752.onStart)
  i752.onPlay = request.d('UnityEngine.Events.UnityEvent', i753[60], i752.onPlay)
  i752.onUpdate = request.d('UnityEngine.Events.UnityEvent', i753[61], i752.onUpdate)
  i752.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i753[62], i752.onStepComplete)
  i752.onComplete = request.d('UnityEngine.Events.UnityEvent', i753[63], i752.onComplete)
  i752.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i753[64], i752.onTweenCreated)
  i752.onRewind = request.d('UnityEngine.Events.UnityEvent', i753[65], i752.onRewind)
  return i752
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i755 = data
  i754.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i755[0], i754.m_PersistentCalls)
  return i754
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('UnityEngine.Events.PersistentCall', i759[i + 0]));
  }
  i756.m_Calls = i758
  return i756
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_Target')
  i762.m_TargetAssemblyTypeName = i763[2]
  i762.m_MethodName = i763[3]
  i762.m_Mode = i763[4]
  i762.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i763[5], i762.m_Arguments)
  i762.m_CallState = i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'sharedMesh')
  return i764
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Image' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Sprite')
  i766.m_Type = i767[2]
  i766.m_PreserveAspect = !!i767[3]
  i766.m_FillCenter = !!i767[4]
  i766.m_FillMethod = i767[5]
  i766.m_FillAmount = i767[6]
  i766.m_FillClockwise = !!i767[7]
  i766.m_FillOrigin = i767[8]
  i766.m_UseSpriteMesh = !!i767[9]
  i766.m_PixelsPerUnitMultiplier = i767[10]
  request.r(i767[11], i767[12], 0, i766, 'm_Material')
  i766.m_Maskable = !!i767[13]
  i766.m_Color = new pc.Color(i767[14], i767[15], i767[16], i767[17])
  i766.m_RaycastTarget = !!i767[18]
  i766.m_RaycastPadding = new pc.Vec4( i767[19], i767[20], i767[21], i767[22] )
  return i766
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Text' )
  var i769 = data
  i768.m_FontData = request.d('UnityEngine.UI.FontData', i769[0], i768.m_FontData)
  i768.m_Text = i769[1]
  request.r(i769[2], i769[3], 0, i768, 'm_Material')
  i768.m_Maskable = !!i769[4]
  i768.m_Color = new pc.Color(i769[5], i769[6], i769[7], i769[8])
  i768.m_RaycastTarget = !!i769[9]
  i768.m_RaycastPadding = new pc.Vec4( i769[10], i769[11], i769[12], i769[13] )
  return i768
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.FontData' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_Font')
  i770.m_FontSize = i771[2]
  i770.m_FontStyle = i771[3]
  i770.m_BestFit = !!i771[4]
  i770.m_MinSize = i771[5]
  i770.m_MaxSize = i771[6]
  i770.m_Alignment = i771[7]
  i770.m_AlignByGeometry = !!i771[8]
  i770.m_RichText = !!i771[9]
  i770.m_HorizontalOverflow = i771[10]
  i770.m_VerticalOverflow = i771[11]
  i770.m_LineSpacing = i771[12]
  return i770
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Button' )
  var i773 = data
  i772.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i773[0], i772.m_OnClick)
  i772.m_Navigation = request.d('UnityEngine.UI.Navigation', i773[1], i772.m_Navigation)
  i772.m_Transition = i773[2]
  i772.m_Colors = request.d('UnityEngine.UI.ColorBlock', i773[3], i772.m_Colors)
  i772.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i773[4], i772.m_SpriteState)
  i772.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i773[5], i772.m_AnimationTriggers)
  i772.m_Interactable = !!i773[6]
  request.r(i773[7], i773[8], 0, i772, 'm_TargetGraphic')
  return i772
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i775 = data
  i774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i775[0], i774.m_PersistentCalls)
  return i774
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i777 = data
  i776.m_Mode = i777[0]
  i776.m_WrapAround = !!i777[1]
  request.r(i777[2], i777[3], 0, i776, 'm_SelectOnUp')
  request.r(i777[4], i777[5], 0, i776, 'm_SelectOnDown')
  request.r(i777[6], i777[7], 0, i776, 'm_SelectOnLeft')
  request.r(i777[8], i777[9], 0, i776, 'm_SelectOnRight')
  return i776
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i779 = data
  i778.m_NormalColor = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.m_HighlightedColor = new pc.Color(i779[4], i779[5], i779[6], i779[7])
  i778.m_PressedColor = new pc.Color(i779[8], i779[9], i779[10], i779[11])
  i778.m_SelectedColor = new pc.Color(i779[12], i779[13], i779[14], i779[15])
  i778.m_DisabledColor = new pc.Color(i779[16], i779[17], i779[18], i779[19])
  i778.m_ColorMultiplier = i779[20]
  i778.m_FadeDuration = i779[21]
  return i778
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_HighlightedSprite')
  request.r(i781[2], i781[3], 0, i780, 'm_PressedSprite')
  request.r(i781[4], i781[5], 0, i780, 'm_SelectedSprite')
  request.r(i781[6], i781[7], 0, i780, 'm_DisabledSprite')
  return i780
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i783 = data
  i782.m_NormalTrigger = i783[0]
  i782.m_HighlightedTrigger = i783[1]
  i782.m_PressedTrigger = i783[2]
  i782.m_SelectedTrigger = i783[3]
  i782.m_DisabledTrigger = i783[4]
  return i782
}

Deserializers["GameController"] = function (request, data, root) {
  var i784 = root || request.c( 'GameController' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'endUI')
  return i784
}

Deserializers["TargetController"] = function (request, data, root) {
  var i786 = root || request.c( 'TargetController' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'currentTarget')
  request.r(i787[2], i787[3], 0, i786, 'tut')
  return i786
}

Deserializers["LunaController"] = function (request, data, root) {
  var i788 = root || request.c( 'LunaController' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'BGTexture')
  i788.LimitTimePlay = !!i789[2]
  i788.TimePlay = i789[3]
  i788.TypeCharacter = i789[4]
  var i791 = i789[5]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i788.characters = i790
  request.r(i789[6], i789[7], 0, i788, 'BGImage')
  var i793 = i789[8]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 1, i792, '')
  }
  i788.CTA = i792
  return i788
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i798 = root || request.c( 'LayoutController' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'mainCamera')
  return i798
}

Deserializers["AudioController"] = function (request, data, root) {
  var i800 = root || request.c( 'AudioController' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'BGM')
  request.r(i801[2], i801[3], 0, i800, 'musicSource')
  request.r(i801[4], i801[5], 0, i800, 'pool')
  return i800
}

Deserializers["VFXController"] = function (request, data, root) {
  var i802 = root || request.c( 'VFXController' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'bloodPrefab')
  request.r(i803[2], i803[3], 0, i802, 'pool')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i805 = data
  i804.ambientIntensity = i805[0]
  i804.reflectionIntensity = i805[1]
  i804.ambientMode = i805[2]
  i804.ambientLight = new pc.Color(i805[3], i805[4], i805[5], i805[6])
  i804.ambientSkyColor = new pc.Color(i805[7], i805[8], i805[9], i805[10])
  i804.ambientGroundColor = new pc.Color(i805[11], i805[12], i805[13], i805[14])
  i804.ambientEquatorColor = new pc.Color(i805[15], i805[16], i805[17], i805[18])
  i804.fogColor = new pc.Color(i805[19], i805[20], i805[21], i805[22])
  i804.fogEndDistance = i805[23]
  i804.fogStartDistance = i805[24]
  i804.fogDensity = i805[25]
  i804.fog = !!i805[26]
  request.r(i805[27], i805[28], 0, i804, 'skybox')
  i804.fogMode = i805[29]
  var i807 = i805[30]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i807[i + 0]) );
  }
  i804.lightmaps = i806
  i804.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i805[31], i804.lightProbes)
  i804.lightmapsMode = i805[32]
  i804.mixedBakeMode = i805[33]
  i804.environmentLightingMode = i805[34]
  i804.ambientProbe = new pc.SphericalHarmonicsL2(i805[35])
  request.r(i805[36], i805[37], 0, i804, 'customReflection')
  request.r(i805[38], i805[39], 0, i804, 'defaultReflection')
  i804.defaultReflectionMode = i805[40]
  i804.defaultReflectionResolution = i805[41]
  i804.sunLightObjectId = i805[42]
  i804.pixelLightCount = i805[43]
  i804.defaultReflectionHDR = !!i805[44]
  i804.hasLightDataAsset = !!i805[45]
  i804.hasManualGenerate = !!i805[46]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'lightmapColor')
  request.r(i811[2], i811[3], 0, i810, 'lightmapDirection')
  request.r(i811[4], i811[5], 0, i810, 'shadowMask')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i812 = root || new UnityEngine.LightProbes()
  var i813 = data
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i821 = data
  i820.name = i821[0]
  i820.bounciness = i821[1]
  i820.friction = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i825[i + 0]));
  }
  i822.ShaderCompilationErrors = i824
  i822.name = i823[1]
  i822.guid = i823[2]
  var i827 = i823[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i822.shaderDefinedKeywords = i826
  var i829 = i823[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i829[i + 0]) );
  }
  i822.passes = i828
  var i831 = i823[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i831[i + 0]) );
  }
  i822.usePasses = i830
  var i833 = i823[6]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i833[i + 0]) );
  }
  i822.defaultParameterValues = i832
  request.r(i823[7], i823[8], 0, i822, 'unityFallbackShader')
  i822.readDepth = !!i823[9]
  i822.hasDepthOnlyPass = !!i823[10]
  i822.isCreatedByShaderGraph = !!i823[11]
  i822.disableBatching = !!i823[12]
  i822.compiled = !!i823[13]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i837 = data
  i836.shaderName = i837[0]
  i836.errorMessage = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i842 = root || new pc.UnityShaderPass()
  var i843 = data
  i842.id = i843[0]
  i842.subShaderIndex = i843[1]
  i842.name = i843[2]
  i842.passType = i843[3]
  i842.grabPassTextureName = i843[4]
  i842.usePass = !!i843[5]
  i842.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[6], i842.zTest)
  i842.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[7], i842.zWrite)
  i842.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[8], i842.culling)
  i842.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i843[9], i842.blending)
  i842.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i843[10], i842.alphaBlending)
  i842.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[11], i842.colorWriteMask)
  i842.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[12], i842.offsetUnits)
  i842.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[13], i842.offsetFactor)
  i842.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[14], i842.stencilRef)
  i842.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[15], i842.stencilReadMask)
  i842.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i843[16], i842.stencilWriteMask)
  i842.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[17], i842.stencilOp)
  i842.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[18], i842.stencilOpFront)
  i842.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i843[19], i842.stencilOpBack)
  var i845 = i843[20]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i845[i + 0]) );
  }
  i842.tags = i844
  var i847 = i843[21]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i842.passDefinedKeywords = i846
  var i849 = i843[22]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i849[i + 0]) );
  }
  i842.passDefinedKeywordGroups = i848
  var i851 = i843[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i851[i + 0]) );
  }
  i842.variants = i850
  var i853 = i843[24]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i853[i + 0]) );
  }
  i842.excludedVariants = i852
  i842.hasDepthReader = !!i843[25]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i855 = data
  i854.val = i855[0]
  i854.name = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i857 = data
  i856.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[0], i856.src)
  i856.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[1], i856.dst)
  i856.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[2], i856.op)
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i859 = data
  i858.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[0], i858.pass)
  i858.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[1], i858.fail)
  i858.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[2], i858.zFail)
  i858.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[3], i858.comp)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i863 = data
  i862.name = i863[0]
  i862.value = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i866.keywords = i868
  i866.hasDiscard = !!i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i873 = data
  i872.passId = i873[0]
  i872.subShaderIndex = i873[1]
  var i875 = i873[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.keywords = i874
  i872.vertexProgram = i873[3]
  i872.fragmentProgram = i873[4]
  i872.exportedForWebGl2 = !!i873[5]
  i872.readDepth = !!i873[6]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'shader')
  i878.pass = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i883 = data
  i882.name = i883[0]
  i882.type = i883[1]
  i882.value = new pc.Vec4( i883[2], i883[3], i883[4], i883[5] )
  i882.textureValue = i883[6]
  i882.shaderPropertyFlag = i883[7]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i885 = data
  i884.name = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'texture')
  i884.aabb = i885[3]
  i884.vertices = i885[4]
  i884.triangles = i885[5]
  i884.textureRect = UnityEngine.Rect.MinMaxRect(i885[6], i885[7], i885[8], i885[9])
  i884.packedRect = UnityEngine.Rect.MinMaxRect(i885[10], i885[11], i885[12], i885[13])
  i884.border = new pc.Vec4( i885[14], i885[15], i885[16], i885[17] )
  i884.transparency = i885[18]
  i884.bounds = i885[19]
  i884.pixelsPerUnit = i885[20]
  i884.textureWidth = i885[21]
  i884.textureHeight = i885[22]
  i884.nativeSize = new pc.Vec2( i885[23], i885[24] )
  i884.pivot = new pc.Vec2( i885[25], i885[26] )
  i884.textureRectOffset = new pc.Vec2( i885[27], i885[28] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i887 = data
  i886.name = i887[0]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i889 = data
  i888.name = i889[0]
  i888.ascent = i889[1]
  i888.originalLineHeight = i889[2]
  i888.fontSize = i889[3]
  var i891 = i889[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i891[i + 0]) );
  }
  i888.characterInfo = i890
  request.r(i889[5], i889[6], 0, i888, 'texture')
  i888.originalFontSize = i889[7]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i895 = data
  i894.index = i895[0]
  i894.advance = i895[1]
  i894.bearing = i895[2]
  i894.glyphWidth = i895[3]
  i894.glyphHeight = i895[4]
  i894.minX = i895[5]
  i894.maxX = i895[6]
  i894.minY = i895[7]
  i894.maxY = i895[8]
  i894.uvBottomLeftX = i895[9]
  i894.uvBottomLeftY = i895[10]
  i894.uvBottomRightX = i895[11]
  i894.uvBottomRightY = i895[12]
  i894.uvTopLeftX = i895[13]
  i894.uvTopLeftY = i895[14]
  i894.uvTopRightX = i895[15]
  i894.uvTopRightY = i895[16]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i897 = data
  i896.name = i897[0]
  i896.bytes64 = i897[1]
  i896.data = i897[2]
  return i896
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i899 = data
  i898.normalStyle = i899[0]
  i898.normalSpacingOffset = i899[1]
  i898.boldStyle = i899[2]
  i898.boldSpacing = i899[3]
  i898.italicStyle = i899[4]
  i898.tabSize = i899[5]
  request.r(i899[6], i899[7], 0, i898, 'atlas')
  i898.m_SourceFontFileGUID = i899[8]
  i898.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i899[9], i898.m_CreationSettings)
  request.r(i899[10], i899[11], 0, i898, 'm_SourceFontFile')
  i898.m_SourceFontFilePath = i899[12]
  i898.m_AtlasPopulationMode = i899[13]
  i898.InternalDynamicOS = !!i899[14]
  var i901 = i899[15]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('UnityEngine.TextCore.Glyph', i901[i + 0]));
  }
  i898.m_GlyphTable = i900
  var i903 = i899[16]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Character', i903[i + 0]));
  }
  i898.m_CharacterTable = i902
  var i905 = i899[17]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i898.m_AtlasTextures = i904
  i898.m_AtlasTextureIndex = i899[18]
  i898.m_IsMultiAtlasTexturesEnabled = !!i899[19]
  i898.m_GetFontFeatures = !!i899[20]
  i898.m_ClearDynamicDataOnBuild = !!i899[21]
  i898.m_AtlasWidth = i899[22]
  i898.m_AtlasHeight = i899[23]
  i898.m_AtlasPadding = i899[24]
  i898.m_AtlasRenderMode = i899[25]
  var i907 = i899[26]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('UnityEngine.TextCore.GlyphRect', i907[i + 0]));
  }
  i898.m_UsedGlyphRects = i906
  var i909 = i899[27]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.TextCore.GlyphRect', i909[i + 0]));
  }
  i898.m_FreeGlyphRects = i908
  i898.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i899[28], i898.m_FontFeatureTable)
  i898.m_ShouldReimportFontFeatures = !!i899[29]
  var i911 = i899[30]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i898.m_FallbackFontAssetTable = i910
  var i913 = i899[31]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('TMPro.TMP_FontWeightPair', i913[i + 0]) );
  }
  i898.m_FontWeightTable = i912
  var i915 = i899[32]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('TMPro.TMP_FontWeightPair', i915[i + 0]) );
  }
  i898.fontWeights = i914
  i898.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i899[33], i898.m_fontInfo)
  var i917 = i899[34]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_Glyph', i917[i + 0]));
  }
  i898.m_glyphInfoList = i916
  i898.m_KerningTable = request.d('TMPro.KerningTable', i899[35], i898.m_KerningTable)
  var i919 = i899[36]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i898.fallbackFontAssets = i918
  i898.m_Version = i899[37]
  i898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i899[38], i898.m_FaceInfo)
  request.r(i899[39], i899[40], 0, i898, 'm_Material')
  return i898
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i921 = data
  i920.sourceFontFileName = i921[0]
  i920.sourceFontFileGUID = i921[1]
  i920.faceIndex = i921[2]
  i920.pointSizeSamplingMode = i921[3]
  i920.pointSize = i921[4]
  i920.padding = i921[5]
  i920.paddingMode = i921[6]
  i920.packingMode = i921[7]
  i920.atlasWidth = i921[8]
  i920.atlasHeight = i921[9]
  i920.characterSetSelectionMode = i921[10]
  i920.characterSequence = i921[11]
  i920.referencedFontAssetGUID = i921[12]
  i920.referencedTextAssetGUID = i921[13]
  i920.fontStyle = i921[14]
  i920.fontStyleModifier = i921[15]
  i920.renderMode = i921[16]
  i920.includeFontFeatures = !!i921[17]
  return i920
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i925 = data
  i924.m_Index = i925[0]
  i924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i925[1], i924.m_Metrics)
  i924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i925[2], i924.m_GlyphRect)
  i924.m_Scale = i925[3]
  i924.m_AtlasIndex = i925[4]
  i924.m_ClassDefinitionType = i925[5]
  return i924
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i927 = data
  i926.m_Width = i927[0]
  i926.m_Height = i927[1]
  i926.m_HorizontalBearingX = i927[2]
  i926.m_HorizontalBearingY = i927[3]
  i926.m_HorizontalAdvance = i927[4]
  return i926
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i929 = data
  i928.m_X = i929[0]
  i928.m_Y = i929[1]
  i928.m_Width = i929[2]
  i928.m_Height = i929[3]
  return i928
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_Character' )
  var i933 = data
  i932.m_ElementType = i933[0]
  i932.m_Unicode = i933[1]
  i932.m_GlyphIndex = i933[2]
  i932.m_Scale = i933[3]
  return i932
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.MultipleSubstitutionRecord', i941[i + 0]));
  }
  i938.m_MultipleSubstitutionRecords = i940
  var i943 = i939[1]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.LigatureSubstitutionRecord', i943[i + 0]));
  }
  i938.m_LigatureSubstitutionRecords = i942
  var i945 = i939[2]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i945[i + 0]));
  }
  i938.m_GlyphPairAdjustmentRecords = i944
  var i947 = i939[3]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i947[i + 0]));
  }
  i938.m_MarkToBaseAdjustmentRecords = i946
  var i949 = i939[4]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i949[i + 0]));
  }
  i938.m_MarkToMarkAdjustmentRecords = i948
  return i938
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i953 = data
  i952.m_TargetGlyphID = i953[0]
  i952.m_SubstituteGlyphIDs = i953[1]
  return i952
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i957 = data
  i956.m_ComponentGlyphIDs = i957[0]
  i956.m_LigatureGlyphID = i957[1]
  return i956
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i961 = data
  i960.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i961[0], i960.m_FirstAdjustmentRecord)
  i960.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i961[1], i960.m_SecondAdjustmentRecord)
  i960.m_FeatureLookupFlags = i961[2]
  return i960
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i965 = data
  i964.m_BaseGlyphID = i965[0]
  i964.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i965[1], i964.m_BaseGlyphAnchorPoint)
  i964.m_MarkGlyphID = i965[2]
  i964.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i965[3], i964.m_MarkPositionAdjustment)
  return i964
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i969 = data
  i968.m_BaseMarkGlyphID = i969[0]
  i968.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i969[1], i968.m_BaseMarkGlyphAnchorPoint)
  i968.m_CombiningMarkGlyphID = i969[2]
  i968.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i969[3], i968.m_CombiningMarkPositionAdjustment)
  return i968
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'regularTypeface')
  request.r(i975[2], i975[3], 0, i974, 'italicTypeface')
  return i974
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i977 = data
  i976.Name = i977[0]
  i976.PointSize = i977[1]
  i976.Scale = i977[2]
  i976.CharacterCount = i977[3]
  i976.LineHeight = i977[4]
  i976.Baseline = i977[5]
  i976.Ascender = i977[6]
  i976.CapHeight = i977[7]
  i976.Descender = i977[8]
  i976.CenterLine = i977[9]
  i976.SuperscriptOffset = i977[10]
  i976.SubscriptOffset = i977[11]
  i976.SubSize = i977[12]
  i976.Underline = i977[13]
  i976.UnderlineThickness = i977[14]
  i976.strikethrough = i977[15]
  i976.strikethroughThickness = i977[16]
  i976.TabWidth = i977[17]
  i976.Padding = i977[18]
  i976.AtlasWidth = i977[19]
  i976.AtlasHeight = i977[20]
  return i976
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_Glyph' )
  var i981 = data
  i980.id = i981[0]
  i980.x = i981[1]
  i980.y = i981[2]
  i980.width = i981[3]
  i980.height = i981[4]
  i980.xOffset = i981[5]
  i980.yOffset = i981[6]
  i980.xAdvance = i981[7]
  i980.scale = i981[8]
  return i980
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.KerningTable' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.KerningPair', i985[i + 0]));
  }
  i982.kerningPairs = i984
  return i982
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.KerningPair' )
  var i989 = data
  i988.xOffset = i989[0]
  i988.m_FirstGlyph = i989[1]
  i988.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i989[2], i988.m_FirstGlyphAdjustments)
  i988.m_SecondGlyph = i989[3]
  i988.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i989[4], i988.m_SecondGlyphAdjustments)
  i988.m_IgnoreSpacingAdjustments = !!i989[5]
  return i988
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i991 = data
  i990.m_FaceIndex = i991[0]
  i990.m_FamilyName = i991[1]
  i990.m_StyleName = i991[2]
  i990.m_PointSize = i991[3]
  i990.m_Scale = i991[4]
  i990.m_UnitsPerEM = i991[5]
  i990.m_LineHeight = i991[6]
  i990.m_AscentLine = i991[7]
  i990.m_CapLine = i991[8]
  i990.m_MeanLine = i991[9]
  i990.m_Baseline = i991[10]
  i990.m_DescentLine = i991[11]
  i990.m_SuperscriptOffset = i991[12]
  i990.m_SuperscriptSize = i991[13]
  i990.m_SubscriptOffset = i991[14]
  i990.m_SubscriptSize = i991[15]
  i990.m_UnderlineOffset = i991[16]
  i990.m_UnderlineThickness = i991[17]
  i990.m_StrikethroughOffset = i991[18]
  i990.m_StrikethroughThickness = i991[19]
  i990.m_TabWidth = i991[20]
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

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Settings' )
  var i999 = data
  i998.assetVersion = i999[0]
  i998.m_TextWrappingMode = i999[1]
  i998.m_enableKerning = !!i999[2]
  var i1001 = i999[3]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(i1001[i + 0]);
  }
  i998.m_ActiveFontFeatures = i1000
  i998.m_enableExtraPadding = !!i999[4]
  i998.m_enableTintAllSprites = !!i999[5]
  i998.m_enableParseEscapeCharacters = !!i999[6]
  i998.m_EnableRaycastTarget = !!i999[7]
  i998.m_GetFontFeaturesAtRuntime = !!i999[8]
  i998.m_missingGlyphCharacter = i999[9]
  i998.m_ClearDynamicDataOnBuild = !!i999[10]
  i998.m_warningsDisabled = !!i999[11]
  request.r(i999[12], i999[13], 0, i998, 'm_defaultFontAsset')
  i998.m_defaultFontAssetPath = i999[14]
  i998.m_defaultFontSize = i999[15]
  i998.m_defaultAutoSizeMinRatio = i999[16]
  i998.m_defaultAutoSizeMaxRatio = i999[17]
  i998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i999[18], i999[19] )
  i998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i999[20], i999[21] )
  i998.m_autoSizeTextContainer = !!i999[22]
  i998.m_IsTextObjectScaleStatic = !!i999[23]
  var i1003 = i999[24]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 1, i1002, '')
  }
  i998.m_fallbackFontAssets = i1002
  i998.m_matchMaterialPreset = !!i999[25]
  i998.m_HideSubTextObjects = !!i999[26]
  request.r(i999[27], i999[28], 0, i998, 'm_defaultSpriteAsset')
  i998.m_defaultSpriteAssetPath = i999[29]
  i998.m_enableEmojiSupport = !!i999[30]
  i998.m_MissingCharacterSpriteUnicode = i999[31]
  var i1005 = i999[32]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 1, i1004, '')
  }
  i998.m_EmojiFallbackTextAssets = i1004
  i998.m_defaultColorGradientPresetsPath = i999[33]
  request.r(i999[34], i999[35], 0, i998, 'm_defaultStyleSheet')
  i998.m_StyleSheetsResourcePath = i999[36]
  request.r(i999[37], i999[38], 0, i998, 'm_leadingCharacters')
  request.r(i999[39], i999[40], 0, i998, 'm_followingCharacters')
  i998.m_UseModernHangulLineBreakingRules = !!i999[41]
  return i998
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1009 = data
  i1008.m_GlyphIndex = i1009[0]
  i1008.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1009[1], i1008.m_GlyphValueRecord)
  return i1008
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1011 = data
  i1010.m_XPlacement = i1011[0]
  i1010.m_YPlacement = i1011[1]
  i1010.m_XAdvance = i1011[2]
  i1010.m_YAdvance = i1011[3]
  return i1010
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'spriteSheet')
  var i1015 = i1013[2]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.TMP_Sprite', i1015[i + 0]));
  }
  i1012.spriteInfoList = i1014
  var i1017 = i1013[3]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1012.fallbackSpriteAssets = i1016
  var i1019 = i1013[4]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('TMPro.TMP_SpriteCharacter', i1019[i + 0]));
  }
  i1012.m_SpriteCharacterTable = i1018
  var i1021 = i1013[5]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_SpriteGlyph', i1021[i + 0]));
  }
  i1012.m_GlyphTable = i1020
  i1012.m_Version = i1013[6]
  i1012.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1013[7], i1012.m_FaceInfo)
  request.r(i1013[8], i1013[9], 0, i1012, 'm_Material')
  return i1012
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.hashCode = i1025[1]
  i1024.unicode = i1025[2]
  i1024.pivot = new pc.Vec2( i1025[3], i1025[4] )
  request.r(i1025[5], i1025[6], 0, i1024, 'sprite')
  i1024.id = i1025[7]
  i1024.x = i1025[8]
  i1024.y = i1025[9]
  i1024.width = i1025[10]
  i1024.height = i1025[11]
  i1024.xOffset = i1025[12]
  i1024.yOffset = i1025[13]
  i1024.xAdvance = i1025[14]
  i1024.scale = i1025[15]
  return i1024
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1031 = data
  i1030.m_Name = i1031[0]
  i1030.m_ElementType = i1031[1]
  i1030.m_Unicode = i1031[2]
  i1030.m_GlyphIndex = i1031[3]
  i1030.m_Scale = i1031[4]
  return i1030
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'sprite')
  i1034.m_Index = i1035[2]
  i1034.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1035[3], i1034.m_Metrics)
  i1034.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1035[4], i1034.m_GlyphRect)
  i1034.m_Scale = i1035[5]
  i1034.m_AtlasIndex = i1035[6]
  i1034.m_ClassDefinitionType = i1035[7]
  return i1034
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('TMPro.TMP_Style', i1039[i + 0]));
  }
  i1036.m_StyleList = i1038
  return i1036
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_Style' )
  var i1043 = data
  i1042.m_Name = i1043[0]
  i1042.m_HashCode = i1043[1]
  i1042.m_OpeningDefinition = i1043[2]
  i1042.m_ClosingDefinition = i1043[3]
  i1042.m_OpeningTagArray = i1043[4]
  i1042.m_ClosingTagArray = i1043[5]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1047[i + 0]) );
  }
  i1044.files = i1046
  i1044.componentToPrefabIds = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1051 = data
  i1050.path = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'unityObject')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1055[i + 0]) );
  }
  i1052.scriptsExecutionOrder = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1057[i + 0]) );
  }
  i1052.sortingLayers = i1056
  var i1059 = i1053[2]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1059[i + 0]) );
  }
  i1052.cullingLayers = i1058
  i1052.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1053[3], i1052.timeSettings)
  i1052.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1053[4], i1052.physicsSettings)
  i1052.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1053[5], i1052.physics2DSettings)
  i1052.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[6], i1052.qualitySettings)
  i1052.enableRealtimeShadows = !!i1053[7]
  i1052.enableAutoInstancing = !!i1053[8]
  i1052.enableStaticBatching = !!i1053[9]
  i1052.enableDynamicBatching = !!i1053[10]
  i1052.usePreservativeDynamicBatching = !!i1053[11]
  i1052.lightmapEncodingQuality = i1053[12]
  i1052.desiredColorSpace = i1053[13]
  var i1061 = i1053[14]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1052.allTags = i1060
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.value = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  i1068.value = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1073 = data
  i1072.id = i1073[0]
  i1072.name = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1075 = data
  i1074.fixedDeltaTime = i1075[0]
  i1074.maximumDeltaTime = i1075[1]
  i1074.timeScale = i1075[2]
  i1074.maximumParticleTimestep = i1075[3]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1077 = data
  i1076.gravity = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.defaultSolverIterations = i1077[3]
  i1076.bounceThreshold = i1077[4]
  i1076.autoSyncTransforms = !!i1077[5]
  i1076.autoSimulation = !!i1077[6]
  var i1079 = i1077[7]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1079[i + 0]) );
  }
  i1076.collisionMatrix = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.layerId = i1083[1]
  i1082.otherLayerId = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'material')
  i1084.gravity = new pc.Vec2( i1085[2], i1085[3] )
  i1084.positionIterations = i1085[4]
  i1084.velocityIterations = i1085[5]
  i1084.velocityThreshold = i1085[6]
  i1084.maxLinearCorrection = i1085[7]
  i1084.maxAngularCorrection = i1085[8]
  i1084.maxTranslationSpeed = i1085[9]
  i1084.maxRotationSpeed = i1085[10]
  i1084.baumgarteScale = i1085[11]
  i1084.baumgarteTOIScale = i1085[12]
  i1084.timeToSleep = i1085[13]
  i1084.linearSleepTolerance = i1085[14]
  i1084.angularSleepTolerance = i1085[15]
  i1084.defaultContactOffset = i1085[16]
  i1084.autoSimulation = !!i1085[17]
  i1084.queriesHitTriggers = !!i1085[18]
  i1084.queriesStartInColliders = !!i1085[19]
  i1084.callbacksOnDisable = !!i1085[20]
  i1084.reuseCollisionCallbacks = !!i1085[21]
  i1084.autoSyncTransforms = !!i1085[22]
  var i1087 = i1085[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1087[i + 0]) );
  }
  i1084.collisionMatrix = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1091 = data
  i1090.enabled = !!i1091[0]
  i1090.layerId = i1091[1]
  i1090.otherLayerId = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1095[i + 0]) );
  }
  i1092.qualityLevels = i1094
  var i1097 = i1093[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1092.names = i1096
  i1092.shadows = i1093[2]
  i1092.anisotropicFiltering = i1093[3]
  i1092.antiAliasing = i1093[4]
  i1092.lodBias = i1093[5]
  i1092.shadowCascades = i1093[6]
  i1092.shadowDistance = i1093[7]
  i1092.shadowmaskMode = i1093[8]
  i1092.shadowProjection = i1093[9]
  i1092.shadowResolution = i1093[10]
  i1092.softParticles = !!i1093[11]
  i1092.softVegetation = !!i1093[12]
  i1092.activeColorSpace = i1093[13]
  i1092.desiredColorSpace = i1093[14]
  i1092.masterTextureLimit = i1093[15]
  i1092.maxQueuedFrames = i1093[16]
  i1092.particleRaycastBudget = i1093[17]
  i1092.pixelLightCount = i1093[18]
  i1092.realtimeReflectionProbes = !!i1093[19]
  i1092.shadowCascade2Split = i1093[20]
  i1092.shadowCascade4Split = new pc.Vec3( i1093[21], i1093[22], i1093[23] )
  i1092.streamingMipmapsActive = !!i1093[24]
  i1092.vSyncCount = i1093[25]
  i1092.asyncUploadBufferSize = i1093[26]
  i1092.asyncUploadTimeSlice = i1093[27]
  i1092.billboardsFaceCameraPosition = !!i1093[28]
  i1092.shadowNearPlaneOffset = i1093[29]
  i1092.streamingMipmapsMemoryBudget = i1093[30]
  i1092.maximumLODLevel = i1093[31]
  i1092.streamingMipmapsAddAllCameras = !!i1093[32]
  i1092.streamingMipmapsMaxLevelReduction = i1093[33]
  i1092.streamingMipmapsRenderersPerFrame = i1093[34]
  i1092.resolutionScalingFixedDPIFactor = i1093[35]
  i1092.streamingMipmapsMaxFileIORequests = i1093[36]
  i1092.currentQualityLevel = i1093[37]
  return i1092
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'm_ObjectArgument')
  i1100.m_ObjectArgumentAssemblyTypeName = i1101[2]
  i1100.m_IntArgument = i1101[3]
  i1100.m_FloatArgument = i1101[4]
  i1100.m_StringArgument = i1101[5]
  i1100.m_BoolArgument = !!i1101[6]
  return i1100
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1103 = data
  i1102.m_XCoordinate = i1103[0]
  i1102.m_YCoordinate = i1103[1]
  return i1102
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1105 = data
  i1104.m_XPositionAdjustment = i1105[0]
  i1104.m_YPositionAdjustment = i1105[1]
  return i1104
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1107 = data
  i1106.xPlacement = i1107[0]
  i1106.yPlacement = i1107[1]
  i1106.xAdvance = i1107[2]
  i1106.yAdvance = i1107[3]
  return i1106
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[6],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[19],"73":[19],"74":[19],"75":[19],"76":[19],"77":[19],"29":[19],"78":[19],"79":[19],"23":[19],"80":[19],"81":[19],"82":[19],"83":[6],"84":[34],"85":[86],"87":[86],"12":[11],"88":[31],"89":[6],"90":[91],"92":[11],"93":[15,11],"94":[34],"95":[15,11],"96":[11],"97":[11],"35":[34,11],"98":[11,15],"99":[100],"101":[100],"102":[100],"103":[11],"104":[11],"14":[12],"39":[15,11],"16":[11],"13":[12],"105":[11],"106":[11],"107":[11],"108":[11],"109":[11],"110":[11],"111":[11],"112":[11],"113":[11],"17":[15,11],"114":[11],"115":[11],"116":[11],"117":[11],"40":[15,11],"118":[11],"119":[9],"120":[9],"10":[9],"121":[9],"122":[6],"123":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Animator","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","RagdollController","BalanceController","UnityEngine.TargetJoint2D","UnityEngine.AudioSource","AcidSound","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.HingeJoint2D","PixelAcidDamage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","DropArea","UnityEngine.MeshRenderer","TMPro.TextMeshPro","TMPro.TMP_FontAsset","DG.Tweening.DOTweenAnimation","UnityEngine.MeshFilter","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","GameController","UnityEngine.GameObject","TargetController","LunaController","LayoutController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/21/2026 04:45:21";

Deserializers.lunaDaysRunning = "2.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "RSNM_V05_YenTTH_TamNTM";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1698";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4825";

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

Deserializers.buildID = "d9b05324-c652-403e-b0a3-c9d031b1cf17";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

