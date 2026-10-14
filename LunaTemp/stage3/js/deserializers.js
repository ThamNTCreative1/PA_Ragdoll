var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointSpring' )
  var i573 = data
  i572.spring = i573[0]
  i572.damper = i573[1]
  i572.targetPosition = i573[2]
  return i572
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointMotor' )
  var i575 = data
  i574.m_TargetVelocity = i575[0]
  i574.m_Force = i575[1]
  i574.m_FreeSpin = i575[2]
  return i574
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointLimits' )
  var i577 = data
  i576.m_Min = i577[0]
  i576.m_Max = i577[1]
  i576.m_Bounciness = i577[2]
  i576.m_BounceMinVelocity = i577[3]
  i576.m_ContactDistance = i577[4]
  i576.minBounce = i577[5]
  i576.maxBounce = i577[6]
  return i576
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointDrive' )
  var i579 = data
  i578.m_PositionSpring = i579[0]
  i578.m_PositionDamper = i579[1]
  i578.m_MaximumForce = i579[2]
  i578.m_UseAcceleration = i579[3]
  return i578
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i581 = data
  i580.m_Spring = i581[0]
  i580.m_Damper = i581[1]
  return i580
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i583 = data
  i582.m_Limit = i583[0]
  i582.m_Bounciness = i583[1]
  i582.m_ContactDistance = i583[2]
  return i582
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i585 = data
  i584.m_ExtremumSlip = i585[0]
  i584.m_ExtremumValue = i585[1]
  i584.m_AsymptoteSlip = i585[2]
  i584.m_AsymptoteValue = i585[3]
  i584.m_Stiffness = i585[4]
  return i584
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i587 = data
  i586.m_LowerAngle = i587[0]
  i586.m_UpperAngle = i587[1]
  return i586
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i589 = data
  i588.m_MotorSpeed = i589[0]
  i588.m_MaximumMotorTorque = i589[1]
  return i588
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i591 = data
  i590.m_DampingRatio = i591[0]
  i590.m_Frequency = i591[1]
  i590.m_Angle = i591[2]
  return i590
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i593 = data
  i592.m_LowerTranslation = i593[0]
  i592.m_UpperTranslation = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  i594.graphicsFormat = i595[11]
  i594.sRGBTexture = !!i595[12]
  i594.desiredColorSpace = i595[13]
  i594.wrapU = i595[14]
  i594.wrapV = i595[15]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i597 = data
  i596.name = i597[0]
  i596.halfPrecision = !!i597[1]
  i596.useSimplification = !!i597[2]
  i596.useUInt32IndexFormat = !!i597[3]
  i596.vertexCount = i597[4]
  i596.aabb = i597[5]
  var i599 = i597[6]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( !!i599[i + 0] );
  }
  i596.streams = i598
  i596.vertices = i597[7]
  var i601 = i597[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i601[i + 0]) );
  }
  i596.subMeshes = i600
  var i603 = i597[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 16) {
    i602.push( new pc.Mat4().setData(i603[i + 0], i603[i + 1], i603[i + 2], i603[i + 3],  i603[i + 4], i603[i + 5], i603[i + 6], i603[i + 7],  i603[i + 8], i603[i + 9], i603[i + 10], i603[i + 11],  i603[i + 12], i603[i + 13], i603[i + 14], i603[i + 15]) );
  }
  i596.bindposes = i602
  var i605 = i597[10]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i605[i + 0]) );
  }
  i596.blendShapes = i604
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i611 = data
  i610.triangles = i611[0]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i617 = data
  i616.name = i617[0]
  var i619 = i617[1]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i619[i + 0]) );
  }
  i616.frames = i618
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i620 = root || new pc.UnityMaterial()
  var i621 = data
  i620.name = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'shader')
  i620.renderQueue = i621[3]
  i620.enableInstancing = !!i621[4]
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i623[i + 0]) );
  }
  i620.floatParameters = i622
  var i625 = i621[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i625[i + 0]) );
  }
  i620.colorParameters = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i627[i + 0]) );
  }
  i620.vectorParameters = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i629[i + 0]) );
  }
  i620.textureParameters = i628
  var i631 = i621[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i631[i + 0]) );
  }
  i620.materialFlags = i630
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Color(i639[1], i639[2], i639[3], i639[4])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Vec4( i643[1], i643[2], i643[3], i643[4] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'value')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i651 = data
  i650.name = i651[0]
  i650.enabled = !!i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i653 = data
  i652.position = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.scale = new pc.Vec3( i653[3], i653[4], i653[5] )
  i652.rotation = new pc.Quat(i653[6], i653[7], i653[8], i653[9])
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i655 = data
  i654.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i655[0], i654.main)
  i654.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i655[1], i654.colorBySpeed)
  i654.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i655[2], i654.colorOverLifetime)
  i654.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i655[3], i654.emission)
  i654.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i655[4], i654.rotationBySpeed)
  i654.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i655[5], i654.rotationOverLifetime)
  i654.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i655[6], i654.shape)
  i654.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i655[7], i654.sizeBySpeed)
  i654.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i655[8], i654.sizeOverLifetime)
  i654.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i655[9], i654.textureSheetAnimation)
  i654.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i655[10], i654.velocityOverLifetime)
  i654.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i655[11], i654.noise)
  i654.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i655[12], i654.inheritVelocity)
  i654.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i655[13], i654.forceOverLifetime)
  i654.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i655[14], i654.limitVelocityOverLifetime)
  i654.useAutoRandomSeed = !!i655[15]
  i654.randomSeed = i655[16]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemMain()
  var i657 = data
  i656.duration = i657[0]
  i656.loop = !!i657[1]
  i656.prewarm = !!i657[2]
  i656.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.startDelay)
  i656.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.startLifetime)
  i656.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[5], i656.startSpeed)
  i656.startSize3D = !!i657[6]
  i656.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[7], i656.startSizeX)
  i656.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[8], i656.startSizeY)
  i656.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[9], i656.startSizeZ)
  i656.startRotation3D = !!i657[10]
  i656.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[11], i656.startRotationX)
  i656.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[12], i656.startRotationY)
  i656.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[13], i656.startRotationZ)
  i656.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i657[14], i656.startColor)
  i656.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[15], i656.gravityModifier)
  i656.simulationSpace = i657[16]
  request.r(i657[17], i657[18], 0, i656, 'customSimulationSpace')
  i656.simulationSpeed = i657[19]
  i656.useUnscaledTime = !!i657[20]
  i656.scalingMode = i657[21]
  i656.playOnAwake = !!i657[22]
  i656.maxParticles = i657[23]
  i656.emitterVelocityMode = i657[24]
  i656.stopAction = i657[25]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i658 = root || new pc.MinMaxCurve()
  var i659 = data
  i658.mode = i659[0]
  i658.curveMin = new pc.AnimationCurve( { keys_flow: i659[1] } )
  i658.curveMax = new pc.AnimationCurve( { keys_flow: i659[2] } )
  i658.curveMultiplier = i659[3]
  i658.constantMin = i659[4]
  i658.constantMax = i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxGradient()
  var i661 = data
  i660.mode = i661[0]
  i660.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i661[1], i660.gradientMin)
  i660.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i661[2], i660.gradientMax)
  i660.colorMin = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.colorMax = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i663 = data
  i662.mode = i663[0]
  var i665 = i663[1]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i665[i + 0]) );
  }
  i662.colorKeys = i664
  var i667 = i663[2]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i667[i + 0]) );
  }
  i662.alphaKeys = i666
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemColorBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i669[1], i668.color)
  i668.range = new pc.Vec2( i669[2], i669[3] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i673 = data
  i672.color = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.time = i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i677 = data
  i676.alpha = i677[0]
  i676.time = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemColorOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i679[1], i678.color)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemEmitter()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.rateOverTime)
  i680.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.rateOverDistance)
  var i683 = i681[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i683[i + 0]) );
  }
  i680.bursts = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemBurst()
  var i687 = data
  i686.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[0], i686.count)
  i686.cycleCount = i687[1]
  i686.minCount = i687[2]
  i686.maxCount = i687[3]
  i686.repeatInterval = i687[4]
  i686.time = i687[5]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemRotationBySpeed()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.separateAxes = !!i689[4]
  i688.range = new pc.Vec2( i689[5], i689[6] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemShape()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.shapeType = i693[1]
  i692.randomDirectionAmount = i693[2]
  i692.sphericalDirectionAmount = i693[3]
  i692.randomPositionAmount = i693[4]
  i692.alignToDirection = !!i693[5]
  i692.radius = i693[6]
  i692.radiusMode = i693[7]
  i692.radiusSpread = i693[8]
  i692.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[9], i692.radiusSpeed)
  i692.radiusThickness = i693[10]
  i692.angle = i693[11]
  i692.length = i693[12]
  i692.boxThickness = new pc.Vec3( i693[13], i693[14], i693[15] )
  i692.meshShapeType = i693[16]
  request.r(i693[17], i693[18], 0, i692, 'mesh')
  request.r(i693[19], i693[20], 0, i692, 'meshRenderer')
  request.r(i693[21], i693[22], 0, i692, 'skinnedMeshRenderer')
  i692.useMeshMaterialIndex = !!i693[23]
  i692.meshMaterialIndex = i693[24]
  i692.useMeshColors = !!i693[25]
  i692.normalOffset = i693[26]
  i692.arc = i693[27]
  i692.arcMode = i693[28]
  i692.arcSpread = i693[29]
  i692.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[30], i692.arcSpeed)
  i692.donutRadius = i693[31]
  i692.position = new pc.Vec3( i693[32], i693[33], i693[34] )
  i692.rotation = new pc.Vec3( i693[35], i693[36], i693[37] )
  i692.scale = new pc.Vec3( i693[38], i693[39], i693[40] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemSizeBySpeed()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  i694.range = new pc.Vec2( i695[5], i695[6] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.mode = i699[1]
  i698.animation = i699[2]
  i698.numTilesX = i699[3]
  i698.numTilesY = i699[4]
  i698.useRandomRow = !!i699[5]
  i698.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[6], i698.frameOverTime)
  i698.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[7], i698.startFrame)
  i698.cycleCount = i699[8]
  i698.rowIndex = i699[9]
  i698.flipU = i699[10]
  i698.flipV = i699[11]
  i698.spriteCount = i699[12]
  var i701 = i699[13]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.sprites = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.x)
  i704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.y)
  i704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.z)
  i704.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.radial)
  i704.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[5], i704.speedModifier)
  i704.space = i705[6]
  i704.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[7], i704.orbitalX)
  i704.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[8], i704.orbitalY)
  i704.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.orbitalZ)
  i704.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[10], i704.orbitalOffsetX)
  i704.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.orbitalOffsetY)
  i704.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.orbitalOffsetZ)
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemNoise()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.separateAxes = !!i707[1]
  i706.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.strengthX)
  i706.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.strengthY)
  i706.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.strengthZ)
  i706.frequency = i707[5]
  i706.damping = !!i707[6]
  i706.octaveCount = i707[7]
  i706.octaveMultiplier = i707[8]
  i706.octaveScale = i707[9]
  i706.quality = i707[10]
  i706.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.scrollSpeed)
  i706.scrollSpeedMultiplier = i707[12]
  i706.remapEnabled = !!i707[13]
  i706.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[14], i706.remapX)
  i706.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[15], i706.remapY)
  i706.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[16], i706.remapZ)
  i706.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[17], i706.positionAmount)
  i706.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[18], i706.rotationAmount)
  i706.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[19], i706.sizeAmount)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemInheritVelocity()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.mode = i709[1]
  i708.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.curve)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemForceOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.z)
  i710.space = i711[4]
  i710.randomized = !!i711[5]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.limit)
  i712.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.limitX)
  i712.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.limitY)
  i712.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[4], i712.limitZ)
  i712.dampen = i713[5]
  i712.separateAxes = !!i713[6]
  i712.space = i713[7]
  i712.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.drag)
  i712.multiplyDragByParticleSize = !!i713[9]
  i712.multiplyDragByParticleVelocity = !!i713[10]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'mesh')
  i714.meshCount = i715[2]
  i714.activeVertexStreamsCount = i715[3]
  i714.alignment = i715[4]
  i714.renderMode = i715[5]
  i714.sortMode = i715[6]
  i714.lengthScale = i715[7]
  i714.velocityScale = i715[8]
  i714.cameraVelocityScale = i715[9]
  i714.normalDirection = i715[10]
  i714.sortingFudge = i715[11]
  i714.minParticleSize = i715[12]
  i714.maxParticleSize = i715[13]
  i714.pivot = new pc.Vec3( i715[14], i715[15], i715[16] )
  request.r(i715[17], i715[18], 0, i714, 'trailMaterial')
  i714.applyActiveColorSpace = !!i715[19]
  i714.enabled = !!i715[20]
  request.r(i715[21], i715[22], 0, i714, 'sharedMaterial')
  var i717 = i715[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.sharedMaterials = i716
  i714.receiveShadows = !!i715[24]
  i714.shadowCastingMode = i715[25]
  i714.sortingLayerID = i715[26]
  i714.sortingOrder = i715[27]
  i714.lightmapIndex = i715[28]
  i714.lightmapSceneIndex = i715[29]
  i714.lightmapScaleOffset = new pc.Vec4( i715[30], i715[31], i715[32], i715[33] )
  i714.lightProbeUsage = i715[34]
  i714.reflectionProbeUsage = i715[35]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i721 = data
  i720.name = i721[0]
  i720.tagId = i721[1]
  i720.enabled = !!i721[2]
  i720.isStatic = !!i721[3]
  i720.layer = i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i723 = data
  i722.name = i723[0]
  i722.atlasId = i723[1]
  i722.mipmapCount = i723[2]
  i722.hdr = !!i723[3]
  i722.size = i723[4]
  i722.anisoLevel = i723[5]
  i722.filterMode = i723[6]
  var i725 = i723[7]
  var i724 = []
  for(var i = 0; i < i725.length; i += 4) {
    i724.push( UnityEngine.Rect.MinMaxRect(i725[i + 0], i725[i + 1], i725[i + 2], i725[i + 3]) );
  }
  i722.rects = i724
  i722.wrapU = i723[8]
  i722.wrapV = i723[9]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i729 = data
  i728.name = i729[0]
  i728.index = i729[1]
  i728.startup = !!i729[2]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i731 = data
  i730.aspect = i731[0]
  i730.orthographic = !!i731[1]
  i730.orthographicSize = i731[2]
  i730.backgroundColor = new pc.Color(i731[3], i731[4], i731[5], i731[6])
  i730.nearClipPlane = i731[7]
  i730.farClipPlane = i731[8]
  i730.fieldOfView = i731[9]
  i730.depth = i731[10]
  i730.clearFlags = i731[11]
  i730.cullingMask = i731[12]
  i730.rect = i731[13]
  request.r(i731[14], i731[15], 0, i730, 'targetTexture')
  i730.usePhysicalProperties = !!i731[16]
  i730.focalLength = i731[17]
  i730.sensorSize = new pc.Vec2( i731[18], i731[19] )
  i730.lensShift = new pc.Vec2( i731[20], i731[21] )
  i730.gateFit = i731[22]
  i730.commandBufferCount = i731[23]
  i730.cameraType = i731[24]
  i730.enabled = !!i731[25]
  return i730
}

Deserializers["CameraController"] = function (request, data, root) {
  var i732 = root || request.c( 'CameraController' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'cam')
  var i735 = i733[2]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i735.length; i += 3) {
    i734.add(new pc.Vec3( i735[i + 0], i735[i + 1], i735[i + 2] ));
  }
  i732.camSetupPosition = i734
  i732.index = i733[3]
  i732.panSpeed = i733[4]
  i732.minPosition = new pc.Vec2( i733[5], i733[6] )
  i732.maxPosition = new pc.Vec2( i733[7], i733[8] )
  i732.ignoreDragableObjects = !!i733[9]
  i732.minFieldOfView = i733[10]
  i732.maxFieldOfView = i733[11]
  i732.pinchZoomSpeed = i733[12]
  i732.mouseWheelZoomSpeed = i733[13]
  return i732
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_FirstSelected')
  i738.m_sendNavigationEvents = !!i739[2]
  i738.m_DragThreshold = i739[3]
  return i738
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i741 = data
  i740.m_HorizontalAxis = i741[0]
  i740.m_VerticalAxis = i741[1]
  i740.m_SubmitButton = i741[2]
  i740.m_CancelButton = i741[3]
  i740.m_InputActionsPerSecond = i741[4]
  i740.m_RepeatDelay = i741[5]
  i740.m_ForceModuleActive = !!i741[6]
  i740.m_SendPointerHoverToParent = !!i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i743 = data
  i742.type = i743[0]
  i742.color = new pc.Color(i743[1], i743[2], i743[3], i743[4])
  i742.cullingMask = i743[5]
  i742.intensity = i743[6]
  i742.range = i743[7]
  i742.spotAngle = i743[8]
  i742.shadows = i743[9]
  i742.shadowNormalBias = i743[10]
  i742.shadowBias = i743[11]
  i742.shadowStrength = i743[12]
  i742.shadowResolution = i743[13]
  i742.lightmapBakeType = i743[14]
  i742.renderMode = i743[15]
  request.r(i743[16], i743[17], 0, i742, 'cookie')
  i742.cookieSize = i743[18]
  i742.shadowNearPlane = i743[19]
  i742.occlusionMaskChannel = i743[20]
  i742.isBaked = !!i743[21]
  i742.mixedLightingMode = i743[22]
  i742.enabled = !!i743[23]
  return i742
}

Deserializers["GameController"] = function (request, data, root) {
  var i744 = root || request.c( 'GameController' )
  var i745 = data
  i744.OnNextPhase = request.d('System.Action', i745[0], i744.OnNextPhase)
  i744.currentPhase = i745[1]
  var i747 = i745[2]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('Phase', i747[i + 0]));
  }
  i744.phases = i746
  var i749 = i745[3]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i744.nextButton = i748
  request.r(i745[4], i745[5], 0, i744, 'nextSound')
  var i751 = i745[6]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i744.buttons = i750
  return i744
}

Deserializers["System.Action"] = function (request, data, root) {
  var i752 = root || request.c( 'System.Action' )
  var i753 = data
  return i752
}

Deserializers["Phase"] = function (request, data, root) {
  var i756 = root || request.c( 'Phase' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'Game')
  request.r(i757[2], i757[3], 0, i756, 'UI')
  return i756
}

Deserializers["LunaController"] = function (request, data, root) {
  var i760 = root || request.c( 'LunaController' )
  var i761 = data
  i760.LimitTimePlay = !!i761[0]
  i760.TimePlay = i761[1]
  i760.LimitStagePlay = !!i761[2]
  i760.StagePlay = i761[3]
  i760.UseCustomBG = !!i761[4]
  request.r(i761[5], i761[6], 0, i760, 'BGTexture')
  request.r(i761[7], i761[8], 0, i760, 'BGM')
  i760.Phase1TextColor = new pc.Color(i761[9], i761[10], i761[11], i761[12])
  i760.Phase2TextColor = new pc.Color(i761[13], i761[14], i761[15], i761[16])
  i760.Phase3TextColor = new pc.Color(i761[17], i761[18], i761[19], i761[20])
  request.r(i761[21], i761[22], 0, i760, 'phase1Text')
  request.r(i761[23], i761[24], 0, i760, 'phase2Text')
  request.r(i761[25], i761[26], 0, i760, 'phase3Text1')
  request.r(i761[27], i761[28], 0, i760, 'phase3Text2')
  request.r(i761[29], i761[30], 0, i760, 'BGImage')
  request.r(i761[31], i761[32], 0, i760, 'musicSource')
  var i763 = i761[33]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.CTA = i762
  request.r(i761[34], i761[35], 0, i760, 'endCard')
  i760.currentStage = i761[36]
  return i760
}

Deserializers["AudioController"] = function (request, data, root) {
  var i764 = root || request.c( 'AudioController' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'poolParent')
  i764.startSize = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'clip')
  request.r(i767[2], i767[3], 0, i766, 'outputAudioMixerGroup')
  i766.playOnAwake = !!i767[4]
  i766.loop = !!i767[5]
  i766.time = i767[6]
  i766.volume = i767[7]
  i766.pitch = i767[8]
  i766.enabled = !!i767[9]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i769 = data
  i768.pivot = new pc.Vec2( i769[0], i769[1] )
  i768.anchorMin = new pc.Vec2( i769[2], i769[3] )
  i768.anchorMax = new pc.Vec2( i769[4], i769[5] )
  i768.sizeDelta = new pc.Vec2( i769[6], i769[7] )
  i768.anchoredPosition3D = new pc.Vec3( i769[8], i769[9], i769[10] )
  i768.rotation = new pc.Quat(i769[11], i769[12], i769[13], i769[14])
  i768.scale = new pc.Vec3( i769[15], i769[16], i769[17] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i771 = data
  i770.planeDistance = i771[0]
  i770.referencePixelsPerUnit = i771[1]
  i770.isFallbackOverlay = !!i771[2]
  i770.renderMode = i771[3]
  i770.renderOrder = i771[4]
  i770.sortingLayerName = i771[5]
  i770.sortingOrder = i771[6]
  i770.scaleFactor = i771[7]
  request.r(i771[8], i771[9], 0, i770, 'worldCamera')
  i770.overrideSorting = !!i771[10]
  i770.pixelPerfect = !!i771[11]
  i770.targetDisplay = i771[12]
  i770.overridePixelPerfect = !!i771[13]
  i770.enabled = !!i771[14]
  return i770
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i773 = data
  i772.m_UiScaleMode = i773[0]
  i772.m_ReferencePixelsPerUnit = i773[1]
  i772.m_ScaleFactor = i773[2]
  i772.m_ReferenceResolution = new pc.Vec2( i773[3], i773[4] )
  i772.m_ScreenMatchMode = i773[5]
  i772.m_MatchWidthOrHeight = i773[6]
  i772.m_PhysicalUnit = i773[7]
  i772.m_FallbackScreenDPI = i773[8]
  i772.m_DefaultSpriteDPI = i773[9]
  i772.m_DynamicPixelsPerUnit = i773[10]
  i772.m_PresetInfoIsWorld = !!i773[11]
  return i772
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i775 = data
  i774.m_IgnoreReversedGraphics = !!i775[0]
  i774.m_BlockingObjects = i775[1]
  i774.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i775[2] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i777 = data
  i776.cullTransparentMesh = !!i777[0]
  return i776
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Text' )
  var i779 = data
  i778.m_FontData = request.d('UnityEngine.UI.FontData', i779[0], i778.m_FontData)
  i778.m_Text = i779[1]
  request.r(i779[2], i779[3], 0, i778, 'm_Material')
  i778.m_Maskable = !!i779[4]
  i778.m_Color = new pc.Color(i779[5], i779[6], i779[7], i779[8])
  i778.m_RaycastTarget = !!i779[9]
  i778.m_RaycastPadding = new pc.Vec4( i779[10], i779[11], i779[12], i779[13] )
  return i778
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.FontData' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_Font')
  i780.m_FontSize = i781[2]
  i780.m_FontStyle = i781[3]
  i780.m_BestFit = !!i781[4]
  i780.m_MinSize = i781[5]
  i780.m_MaxSize = i781[6]
  i780.m_Alignment = i781[7]
  i780.m_AlignByGeometry = !!i781[8]
  i780.m_RichText = !!i781[9]
  i780.m_HorizontalOverflow = i781[10]
  i780.m_VerticalOverflow = i781[11]
  i780.m_LineSpacing = i781[12]
  return i780
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i782 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i783 = data
  i782.targetIsSelf = !!i783[0]
  request.r(i783[1], i783[2], 0, i782, 'targetGO')
  i782.tweenTargetIsTargetGO = !!i783[3]
  i782.delay = i783[4]
  i782.duration = i783[5]
  i782.easeType = i783[6]
  i782.easeCurve = new pc.AnimationCurve( { keys_flow: i783[7] } )
  i782.loopType = i783[8]
  i782.loops = i783[9]
  i782.id = i783[10]
  i782.isRelative = !!i783[11]
  i782.isFrom = !!i783[12]
  i782.isIndependentUpdate = !!i783[13]
  i782.autoKill = !!i783[14]
  i782.autoGenerate = !!i783[15]
  i782.isActive = !!i783[16]
  i782.isValid = !!i783[17]
  request.r(i783[18], i783[19], 0, i782, 'target')
  i782.animationType = i783[20]
  i782.targetType = i783[21]
  i782.forcedTargetType = i783[22]
  i782.autoPlay = !!i783[23]
  i782.useTargetAsV3 = !!i783[24]
  i782.endValueFloat = i783[25]
  i782.endValueV3 = new pc.Vec3( i783[26], i783[27], i783[28] )
  i782.endValueV2 = new pc.Vec2( i783[29], i783[30] )
  i782.endValueColor = new pc.Color(i783[31], i783[32], i783[33], i783[34])
  i782.endValueString = i783[35]
  i782.endValueRect = UnityEngine.Rect.MinMaxRect(i783[36], i783[37], i783[38], i783[39])
  request.r(i783[40], i783[41], 0, i782, 'endValueTransform')
  i782.optionalBool0 = !!i783[42]
  i782.optionalBool1 = !!i783[43]
  i782.optionalFloat0 = i783[44]
  i782.optionalInt0 = i783[45]
  i782.optionalRotationMode = i783[46]
  i782.optionalScrambleMode = i783[47]
  i782.optionalShakeRandomnessMode = i783[48]
  i782.optionalString = i783[49]
  i782.updateType = i783[50]
  i782.isSpeedBased = !!i783[51]
  i782.hasOnStart = !!i783[52]
  i782.hasOnPlay = !!i783[53]
  i782.hasOnUpdate = !!i783[54]
  i782.hasOnStepComplete = !!i783[55]
  i782.hasOnComplete = !!i783[56]
  i782.hasOnTweenCreated = !!i783[57]
  i782.hasOnRewind = !!i783[58]
  i782.onStart = request.d('UnityEngine.Events.UnityEvent', i783[59], i782.onStart)
  i782.onPlay = request.d('UnityEngine.Events.UnityEvent', i783[60], i782.onPlay)
  i782.onUpdate = request.d('UnityEngine.Events.UnityEvent', i783[61], i782.onUpdate)
  i782.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i783[62], i782.onStepComplete)
  i782.onComplete = request.d('UnityEngine.Events.UnityEvent', i783[63], i782.onComplete)
  i782.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i783[64], i782.onTweenCreated)
  i782.onRewind = request.d('UnityEngine.Events.UnityEvent', i783[65], i782.onRewind)
  return i782
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i785 = data
  i784.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i785[0], i784.m_PersistentCalls)
  return i784
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i787 = data
  var i789 = i787[0]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('UnityEngine.Events.PersistentCall', i789[i + 0]));
  }
  i786.m_Calls = i788
  return i786
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_Target')
  i792.m_TargetAssemblyTypeName = i793[2]
  i792.m_MethodName = i793[3]
  i792.m_Mode = i793[4]
  i792.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i793[5], i792.m_Arguments)
  i792.m_CallState = i793[6]
  return i792
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button' )
  var i795 = data
  i794.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i795[0], i794.m_OnClick)
  i794.m_Navigation = request.d('UnityEngine.UI.Navigation', i795[1], i794.m_Navigation)
  i794.m_Transition = i795[2]
  i794.m_Colors = request.d('UnityEngine.UI.ColorBlock', i795[3], i794.m_Colors)
  i794.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i795[4], i794.m_SpriteState)
  i794.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i795[5], i794.m_AnimationTriggers)
  i794.m_Interactable = !!i795[6]
  request.r(i795[7], i795[8], 0, i794, 'm_TargetGraphic')
  return i794
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i797 = data
  i796.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i797[0], i796.m_PersistentCalls)
  return i796
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i799 = data
  i798.m_Mode = i799[0]
  i798.m_WrapAround = !!i799[1]
  request.r(i799[2], i799[3], 0, i798, 'm_SelectOnUp')
  request.r(i799[4], i799[5], 0, i798, 'm_SelectOnDown')
  request.r(i799[6], i799[7], 0, i798, 'm_SelectOnLeft')
  request.r(i799[8], i799[9], 0, i798, 'm_SelectOnRight')
  return i798
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i801 = data
  i800.m_NormalColor = new pc.Color(i801[0], i801[1], i801[2], i801[3])
  i800.m_HighlightedColor = new pc.Color(i801[4], i801[5], i801[6], i801[7])
  i800.m_PressedColor = new pc.Color(i801[8], i801[9], i801[10], i801[11])
  i800.m_SelectedColor = new pc.Color(i801[12], i801[13], i801[14], i801[15])
  i800.m_DisabledColor = new pc.Color(i801[16], i801[17], i801[18], i801[19])
  i800.m_ColorMultiplier = i801[20]
  i800.m_FadeDuration = i801[21]
  return i800
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_HighlightedSprite')
  request.r(i803[2], i803[3], 0, i802, 'm_PressedSprite')
  request.r(i803[4], i803[5], 0, i802, 'm_SelectedSprite')
  request.r(i803[6], i803[7], 0, i802, 'm_DisabledSprite')
  return i802
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i805 = data
  i804.m_NormalTrigger = i805[0]
  i804.m_HighlightedTrigger = i805[1]
  i804.m_PressedTrigger = i805[2]
  i804.m_SelectedTrigger = i805[3]
  i804.m_DisabledTrigger = i805[4]
  return i804
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Image' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_Sprite')
  i806.m_Type = i807[2]
  i806.m_PreserveAspect = !!i807[3]
  i806.m_FillCenter = !!i807[4]
  i806.m_FillMethod = i807[5]
  i806.m_FillAmount = i807[6]
  i806.m_FillClockwise = !!i807[7]
  i806.m_FillOrigin = i807[8]
  i806.m_UseSpriteMesh = !!i807[9]
  i806.m_PixelsPerUnitMultiplier = i807[10]
  request.r(i807[11], i807[12], 0, i806, 'm_Material')
  i806.m_Maskable = !!i807[13]
  i806.m_Color = new pc.Color(i807[14], i807[15], i807[16], i807[17])
  i806.m_RaycastTarget = !!i807[18]
  i806.m_RaycastPadding = new pc.Vec4( i807[19], i807[20], i807[21], i807[22] )
  return i806
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_ObjectArgument')
  i808.m_ObjectArgumentAssemblyTypeName = i809[2]
  i808.m_IntArgument = i809[3]
  i808.m_FloatArgument = i809[4]
  i808.m_StringArgument = i809[5]
  i808.m_BoolArgument = !!i809[6]
  return i808
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Texture')
  i810.m_UVRect = UnityEngine.Rect.MinMaxRect(i811[2], i811[3], i811[4], i811[5])
  request.r(i811[6], i811[7], 0, i810, 'm_Material')
  i810.m_Maskable = !!i811[8]
  i810.m_Color = new pc.Color(i811[9], i811[10], i811[11], i811[12])
  i810.m_RaycastTarget = !!i811[13]
  i810.m_RaycastPadding = new pc.Vec4( i811[14], i811[15], i811[16], i811[17] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'sharedMesh')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'additionalVertexStreams')
  i814.enabled = !!i815[2]
  request.r(i815[3], i815[4], 0, i814, 'sharedMaterial')
  var i817 = i815[5]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[6]
  i814.shadowCastingMode = i815[7]
  i814.sortingLayerID = i815[8]
  i814.sortingOrder = i815[9]
  i814.lightmapIndex = i815[10]
  i814.lightmapSceneIndex = i815[11]
  i814.lightmapScaleOffset = new pc.Vec4( i815[12], i815[13], i815[14], i815[15] )
  i814.lightProbeUsage = i815[16]
  i814.reflectionProbeUsage = i815[17]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'sharedMesh')
  i818.convex = !!i819[2]
  i818.enabled = !!i819[3]
  i818.isTrigger = !!i819[4]
  request.r(i819[5], i819[6], 0, i818, 'material')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.size = new pc.Vec3( i821[3], i821[4], i821[5] )
  i820.enabled = !!i821[6]
  i820.isTrigger = !!i821[7]
  request.r(i821[8], i821[9], 0, i820, 'material')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i823 = data
  i822.mass = i823[0]
  i822.drag = i823[1]
  i822.angularDrag = i823[2]
  i822.useGravity = !!i823[3]
  i822.isKinematic = !!i823[4]
  i822.constraints = i823[5]
  i822.maxAngularVelocity = i823[6]
  i822.collisionDetectionMode = i823[7]
  i822.interpolation = i823[8]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i825 = data
  i824.angularXDrive = request.d('UnityEngine.JointDrive', i825[0], i824.angularXDrive)
  i824.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i825[1], i824.angularXLimitSpring)
  i824.angularXMotion = i825[2]
  i824.angularYLimit = request.d('UnityEngine.SoftJointLimit', i825[3], i824.angularYLimit)
  i824.angularYMotion = i825[4]
  i824.angularYZDrive = request.d('UnityEngine.JointDrive', i825[5], i824.angularYZDrive)
  i824.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i825[6], i824.angularYZLimitSpring)
  i824.angularZLimit = request.d('UnityEngine.SoftJointLimit', i825[7], i824.angularZLimit)
  i824.angularZMotion = i825[8]
  i824.configuredInWorldSpace = !!i825[9]
  i824.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i825[10], i824.highAngularXLimit)
  i824.linearLimit = request.d('UnityEngine.SoftJointLimit', i825[11], i824.linearLimit)
  i824.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i825[12], i824.linearLimitSpring)
  i824.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i825[13], i824.lowAngularXLimit)
  i824.rotationDriveMode = i825[14]
  i824.secondaryAxis = new pc.Vec3( i825[15], i825[16], i825[17] )
  i824.slerpDrive = request.d('UnityEngine.JointDrive', i825[18], i824.slerpDrive)
  i824.swapBodies = !!i825[19]
  i824.targetAngularVelocity = new pc.Vec3( i825[20], i825[21], i825[22] )
  i824.targetPosition = new pc.Vec3( i825[23], i825[24], i825[25] )
  i824.targetRotation = new pc.Quat(i825[26], i825[27], i825[28], i825[29])
  i824.targetVelocity = new pc.Vec3( i825[30], i825[31], i825[32] )
  i824.xDrive = request.d('UnityEngine.JointDrive', i825[33], i824.xDrive)
  i824.xMotion = i825[34]
  i824.yDrive = request.d('UnityEngine.JointDrive', i825[35], i824.yDrive)
  i824.yMotion = i825[36]
  i824.zDrive = request.d('UnityEngine.JointDrive', i825[37], i824.zDrive)
  i824.zMotion = i825[38]
  request.r(i825[39], i825[40], 0, i824, 'connectedBody')
  i824.axis = new pc.Vec3( i825[41], i825[42], i825[43] )
  i824.anchor = new pc.Vec3( i825[44], i825[45], i825[46] )
  i824.connectedAnchor = new pc.Vec3( i825[47], i825[48], i825[49] )
  i824.autoConfigureConnectedAnchor = !!i825[50]
  i824.massScale = i825[51]
  i824.connectedMassScale = i825[52]
  i824.enableCollision = !!i825[53]
  i824.breakForce = i825[54]
  i824.breakTorque = i825[55]
  return i824
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i826 = root || request.c( 'BodyPiece' )
  var i827 = data
  i826.notUseAnim = !!i827[0]
  request.r(i827[1], i827[2], 0, i826, 'colli')
  request.r(i827[3], i827[4], 0, i826, 'skeleton')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpringJoint"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpringJoint' )
  var i829 = data
  i828.spring = i829[0]
  i828.damper = i829[1]
  i828.minDistance = i829[2]
  i828.maxDistance = i829[3]
  i828.tolerance = i829[4]
  request.r(i829[5], i829[6], 0, i828, 'connectedBody')
  i828.axis = new pc.Vec3( i829[7], i829[8], i829[9] )
  i828.anchor = new pc.Vec3( i829[10], i829[11], i829[12] )
  i828.connectedAnchor = new pc.Vec3( i829[13], i829[14], i829[15] )
  i828.autoConfigureConnectedAnchor = !!i829[16]
  i828.massScale = i829[17]
  i828.connectedMassScale = i829[18]
  i828.enableCollision = !!i829[19]
  i828.breakForce = i829[20]
  i828.breakTorque = i829[21]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i831 = data
  i830.center = new pc.Vec3( i831[0], i831[1], i831[2] )
  i830.radius = i831[3]
  i830.height = i831[4]
  i830.direction = i831[5]
  i830.enabled = !!i831[6]
  i830.isTrigger = !!i831[7]
  request.r(i831[8], i831[9], 0, i830, 'material')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'connectedBody')
  i832.axis = new pc.Vec3( i833[2], i833[3], i833[4] )
  i832.anchor = new pc.Vec3( i833[5], i833[6], i833[7] )
  i832.connectedAnchor = new pc.Vec3( i833[8], i833[9], i833[10] )
  i832.autoConfigureConnectedAnchor = !!i833[11]
  i832.massScale = i833[12]
  i832.connectedMassScale = i833[13]
  i832.enableCollision = !!i833[14]
  i832.breakForce = i833[15]
  i832.breakTorque = i833[16]
  return i832
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i834 = root || request.c( 'TakeDamage' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'phase')
  var i837 = i835[2]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.bodyPieces = i836
  request.r(i835[3], i835[4], 0, i834, 'root')
  i834.HP = i835[5]
  i834.onCD = !!i835[6]
  i834.currentHP = i835[7]
  i834.isDead = !!i835[8]
  request.r(i835[9], i835[10], 0, i834, 'anim')
  request.r(i835[11], i835[12], 0, i834, 'hitSound')
  request.r(i835[13], i835[14], 0, i834, 'hitSound2')
  request.r(i835[15], i835[16], 0, i834, 'deadSound')
  request.r(i835[17], i835[18], 0, i834, 'bloodPrefab')
  i834.notUseAnim = !!i835[19]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'animatorController')
  request.r(i841[2], i841[3], 0, i840, 'avatar')
  i840.updateMode = i841[4]
  i840.hasTransformHierarchy = !!i841[5]
  i840.applyRootMotion = !!i841[6]
  var i843 = i841[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.humanBones = i842
  i840.enabled = !!i841[8]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'sharedMesh')
  var i849 = i847[2]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.bones = i848
  i846.updateWhenOffscreen = !!i847[3]
  i846.localBounds = i847[4]
  request.r(i847[5], i847[6], 0, i846, 'rootBone')
  var i851 = i847[7]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i851[i + 0]) );
  }
  i846.blendShapesWeights = i850
  i846.enabled = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'sharedMaterial')
  var i853 = i847[11]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i846.sharedMaterials = i852
  i846.receiveShadows = !!i847[12]
  i846.shadowCastingMode = i847[13]
  i846.sortingLayerID = i847[14]
  i846.sortingOrder = i847[15]
  i846.lightmapIndex = i847[16]
  i846.lightmapSceneIndex = i847[17]
  i846.lightmapScaleOffset = new pc.Vec4( i847[18], i847[19], i847[20], i847[21] )
  i846.lightProbeUsage = i847[22]
  i846.reflectionProbeUsage = i847[23]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i857 = data
  i856.weight = i857[0]
  return i856
}

Deserializers["Dragable"] = function (request, data, root) {
  var i858 = root || request.c( 'Dragable' )
  var i859 = data
  i858.OnDrag = request.d('System.Action', i859[0], i858.OnDrag)
  i858.OnEndDrag = request.d('System.Action', i859[1], i858.OnEndDrag)
  return i858
}

Deserializers["BodyController"] = function (request, data, root) {
  var i860 = root || request.c( 'BodyController' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 1, i862, '')
  }
  i860.bodyPieces = i862
  var i865 = i861[1]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i860.dragPieces = i864
  request.r(i861[2], i861[3], 0, i860, 'anim')
  return i860
}

Deserializers["LavaController"] = function (request, data, root) {
  var i868 = root || request.c( 'LavaController' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'sound')
  i868.part = i869[2]
  i868.isDead = !!i869[3]
  return i868
}

Deserializers["LavaPartDisappear"] = function (request, data, root) {
  var i870 = root || request.c( 'LavaPartDisappear' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'boneToHide')
  request.r(i871[2], i871[3], 0, i870, 'vfx')
  i870.disappearDelay = i871[4]
  i870.shrinkDuration = i871[5]
  request.r(i871[6], i871[7], 0, i870, 'partCollider')
  i870.disableCollider = !!i871[8]
  request.r(i871[9], i871[10], 0, i870, 'controller')
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i873 = data
  i872.center = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.radius = i873[3]
  i872.enabled = !!i873[4]
  i872.isTrigger = !!i873[5]
  request.r(i873[6], i873[7], 0, i872, 'material')
  return i872
}

Deserializers["DragController"] = function (request, data, root) {
  var i874 = root || request.c( 'DragController' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'currentTarget')
  i874.positionSpring = i875[2]
  i874.positionDamper = i875[3]
  request.r(i875[4], i875[5], 0, i874, 'tut1')
  request.r(i875[6], i875[7], 0, i874, 'tut2')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i877 = data
  i876.ambientIntensity = i877[0]
  i876.reflectionIntensity = i877[1]
  i876.ambientMode = i877[2]
  i876.ambientLight = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.ambientSkyColor = new pc.Color(i877[7], i877[8], i877[9], i877[10])
  i876.ambientGroundColor = new pc.Color(i877[11], i877[12], i877[13], i877[14])
  i876.ambientEquatorColor = new pc.Color(i877[15], i877[16], i877[17], i877[18])
  i876.fogColor = new pc.Color(i877[19], i877[20], i877[21], i877[22])
  i876.fogEndDistance = i877[23]
  i876.fogStartDistance = i877[24]
  i876.fogDensity = i877[25]
  i876.fog = !!i877[26]
  request.r(i877[27], i877[28], 0, i876, 'skybox')
  i876.fogMode = i877[29]
  var i879 = i877[30]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i879[i + 0]) );
  }
  i876.lightmaps = i878
  i876.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i877[31], i876.lightProbes)
  i876.lightmapsMode = i877[32]
  i876.mixedBakeMode = i877[33]
  i876.environmentLightingMode = i877[34]
  i876.ambientProbe = new pc.SphericalHarmonicsL2(i877[35])
  request.r(i877[36], i877[37], 0, i876, 'customReflection')
  request.r(i877[38], i877[39], 0, i876, 'defaultReflection')
  i876.defaultReflectionMode = i877[40]
  i876.defaultReflectionResolution = i877[41]
  i876.sunLightObjectId = i877[42]
  i876.pixelLightCount = i877[43]
  i876.defaultReflectionHDR = !!i877[44]
  i876.hasLightDataAsset = !!i877[45]
  i876.hasManualGenerate = !!i877[46]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'lightmapColor')
  request.r(i883[2], i883[3], 0, i882, 'lightmapDirection')
  request.r(i883[4], i883[5], 0, i882, 'shadowMask')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i884 = root || new UnityEngine.LightProbes()
  var i885 = data
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i895[i + 0]));
  }
  i892.ShaderCompilationErrors = i894
  i892.name = i893[1]
  i892.guid = i893[2]
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.shaderDefinedKeywords = i896
  var i899 = i893[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i892.passes = i898
  var i901 = i893[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i901[i + 0]) );
  }
  i892.usePasses = i900
  var i903 = i893[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i903[i + 0]) );
  }
  i892.defaultParameterValues = i902
  request.r(i893[7], i893[8], 0, i892, 'unityFallbackShader')
  i892.readDepth = !!i893[9]
  i892.hasDepthOnlyPass = !!i893[10]
  i892.isCreatedByShaderGraph = !!i893[11]
  i892.disableBatching = !!i893[12]
  i892.compiled = !!i893[13]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i907 = data
  i906.shaderName = i907[0]
  i906.errorMessage = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i912 = root || new pc.UnityShaderPass()
  var i913 = data
  i912.id = i913[0]
  i912.subShaderIndex = i913[1]
  i912.name = i913[2]
  i912.passType = i913[3]
  i912.grabPassTextureName = i913[4]
  i912.usePass = !!i913[5]
  i912.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[6], i912.zTest)
  i912.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[7], i912.zWrite)
  i912.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[8], i912.culling)
  i912.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[9], i912.blending)
  i912.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[10], i912.alphaBlending)
  i912.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[11], i912.colorWriteMask)
  i912.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[12], i912.offsetUnits)
  i912.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[13], i912.offsetFactor)
  i912.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[14], i912.stencilRef)
  i912.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[15], i912.stencilReadMask)
  i912.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[16], i912.stencilWriteMask)
  i912.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[17], i912.stencilOp)
  i912.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[18], i912.stencilOpFront)
  i912.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[19], i912.stencilOpBack)
  var i915 = i913[20]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i915[i + 0]) );
  }
  i912.tags = i914
  var i917 = i913[21]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.passDefinedKeywords = i916
  var i919 = i913[22]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i919[i + 0]) );
  }
  i912.passDefinedKeywordGroups = i918
  var i921 = i913[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i921[i + 0]) );
  }
  i912.variants = i920
  var i923 = i913[24]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i923[i + 0]) );
  }
  i912.excludedVariants = i922
  i912.hasDepthReader = !!i913[25]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i925 = data
  i924.val = i925[0]
  i924.name = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i927 = data
  i926.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[0], i926.src)
  i926.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[1], i926.dst)
  i926.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[2], i926.op)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i929 = data
  i928.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[0], i928.pass)
  i928.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[1], i928.fail)
  i928.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[2], i928.zFail)
  i928.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[3], i928.comp)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i933 = data
  i932.name = i933[0]
  i932.value = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.keywords = i938
  i936.hasDiscard = !!i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i943 = data
  i942.passId = i943[0]
  i942.subShaderIndex = i943[1]
  var i945 = i943[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.vertexProgram = i943[3]
  i942.fragmentProgram = i943[4]
  i942.exportedForWebGl2 = !!i943[5]
  i942.readDepth = !!i943[6]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'shader')
  i948.pass = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i953 = data
  i952.name = i953[0]
  i952.type = i953[1]
  i952.value = new pc.Vec4( i953[2], i953[3], i953[4], i953[5] )
  i952.textureValue = i953[6]
  i952.shaderPropertyFlag = i953[7]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i955 = data
  i954.name = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'texture')
  i954.aabb = i955[3]
  i954.vertices = i955[4]
  i954.triangles = i955[5]
  i954.textureRect = UnityEngine.Rect.MinMaxRect(i955[6], i955[7], i955[8], i955[9])
  i954.packedRect = UnityEngine.Rect.MinMaxRect(i955[10], i955[11], i955[12], i955[13])
  i954.border = new pc.Vec4( i955[14], i955[15], i955[16], i955[17] )
  i954.transparency = i955[18]
  i954.bounds = i955[19]
  i954.pixelsPerUnit = i955[20]
  i954.textureWidth = i955[21]
  i954.textureHeight = i955[22]
  i954.nativeSize = new pc.Vec2( i955[23], i955[24] )
  i954.pivot = new pc.Vec2( i955[25], i955[26] )
  i954.textureRectOffset = new pc.Vec2( i955[27], i955[28] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i957 = data
  i956.name = i957[0]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i959 = data
  i958.name = i959[0]
  i958.wrapMode = i959[1]
  i958.isLooping = !!i959[2]
  i958.length = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i961[i + 0]) );
  }
  i958.curves = i960
  var i963 = i959[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i963[i + 0]) );
  }
  i958.events = i962
  i958.halfPrecision = !!i959[6]
  i958._frameRate = i959[7]
  i958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i959[8], i958.localBounds)
  i958.hasMuscleCurves = !!i959[9]
  var i965 = i959[10]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i958.clipMuscleConstant = i964
  i958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i959[11], i958.clipBindingConstant)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i969 = data
  i968.path = i969[0]
  i968.hash = i969[1]
  i968.componentType = i969[2]
  i968.property = i969[3]
  i968.keys = i969[4]
  var i971 = i969[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i971[i + 0]) );
  }
  i968.objectReferenceKeys = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i975 = data
  i974.functionName = i975[0]
  i974.floatParameter = i975[1]
  i974.intParameter = i975[2]
  i974.stringParameter = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'objectReferenceParameter')
  i974.time = i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i977 = data
  i976.center = new pc.Vec3( i977[0], i977[1], i977[2] )
  i976.extends = new pc.Vec3( i977[3], i977[4], i977[5] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i980.genericBindings = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i980.pptrCurveMapping = i984
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i987 = data
  i986.name = i987[0]
  i986.ascent = i987[1]
  i986.originalLineHeight = i987[2]
  i986.fontSize = i987[3]
  var i989 = i987[4]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i989[i + 0]) );
  }
  i986.characterInfo = i988
  request.r(i987[5], i987[6], 0, i986, 'texture')
  i986.originalFontSize = i987[7]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i993 = data
  i992.index = i993[0]
  i992.advance = i993[1]
  i992.bearing = i993[2]
  i992.glyphWidth = i993[3]
  i992.glyphHeight = i993[4]
  i992.minX = i993[5]
  i992.maxX = i993[6]
  i992.minY = i993[7]
  i992.maxY = i993[8]
  i992.uvBottomLeftX = i993[9]
  i992.uvBottomLeftY = i993[10]
  i992.uvBottomRightX = i993[11]
  i992.uvBottomRightY = i993[12]
  i992.uvTopLeftX = i993[13]
  i992.uvTopLeftY = i993[14]
  i992.uvTopRightX = i993[15]
  i992.uvTopRightY = i993[16]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i995 = data
  i994.name = i995[0]
  var i997 = i995[1]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i997[i + 0]) );
  }
  i994.layers = i996
  var i999 = i995[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i999[i + 0]) );
  }
  i994.parameters = i998
  i994.animationClips = i995[3]
  i994.avatarUnsupported = i995[4]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.defaultWeight = i1003[1]
  i1002.blendingMode = i1003[2]
  i1002.avatarMask = i1003[3]
  i1002.syncedLayerIndex = i1003[4]
  i1002.syncedLayerAffectsTiming = !!i1003[5]
  i1002.syncedLayers = i1003[6]
  i1002.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1003[7], i1002.stateMachine)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1005 = data
  i1004.id = i1005[0]
  i1004.name = i1005[1]
  i1004.path = i1005[2]
  var i1007 = i1005[3]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1007[i + 0]) );
  }
  i1004.states = i1006
  var i1009 = i1005[4]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1009[i + 0]) );
  }
  i1004.machines = i1008
  var i1011 = i1005[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1011[i + 0]) );
  }
  i1004.entryStateTransitions = i1010
  var i1013 = i1005[6]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1013[i + 0]) );
  }
  i1004.exitStateTransitions = i1012
  var i1015 = i1005[7]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1015[i + 0]) );
  }
  i1004.anyStateTransitions = i1014
  i1004.defaultStateId = i1005[8]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  i1018.cycleOffset = i1019[2]
  i1018.cycleOffsetParameter = i1019[3]
  i1018.cycleOffsetParameterActive = !!i1019[4]
  i1018.mirror = !!i1019[5]
  i1018.mirrorParameter = i1019[6]
  i1018.mirrorParameterActive = !!i1019[7]
  i1018.motionId = i1019[8]
  i1018.nameHash = i1019[9]
  i1018.fullPathHash = i1019[10]
  i1018.speed = i1019[11]
  i1018.speedParameter = i1019[12]
  i1018.speedParameterActive = !!i1019[13]
  i1018.tag = i1019[14]
  i1018.tagHash = i1019[15]
  i1018.writeDefaultValues = !!i1019[16]
  var i1021 = i1019[17]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.behaviours = i1020
  var i1023 = i1019[18]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1023[i + 0]) );
  }
  i1018.transitions = i1022
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1029 = data
  i1028.fullPath = i1029[0]
  i1028.canTransitionToSelf = !!i1029[1]
  i1028.duration = i1029[2]
  i1028.exitTime = i1029[3]
  i1028.hasExitTime = !!i1029[4]
  i1028.hasFixedDuration = !!i1029[5]
  i1028.interruptionSource = i1029[6]
  i1028.offset = i1029[7]
  i1028.orderedInterruption = !!i1029[8]
  i1028.destinationStateId = i1029[9]
  i1028.isExit = !!i1029[10]
  i1028.mute = !!i1029[11]
  i1028.solo = !!i1029[12]
  var i1031 = i1029[13]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1031[i + 0]) );
  }
  i1028.conditions = i1030
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1035 = data
  i1034.mode = i1035[0]
  i1034.parameter = i1035[1]
  i1034.threshold = i1035[2]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1041 = data
  i1040.destinationStateId = i1041[0]
  i1040.isExit = !!i1041[1]
  i1040.mute = !!i1041[2]
  i1040.solo = !!i1041[3]
  var i1043 = i1041[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1043[i + 0]) );
  }
  i1040.conditions = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1047 = data
  i1046.defaultBool = !!i1047[0]
  i1046.defaultFloat = i1047[1]
  i1046.defaultInt = i1047[2]
  i1046.name = i1047[3]
  i1046.nameHash = i1047[4]
  i1046.type = i1047[5]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1049 = data
  i1048.name = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, '_runtimeAnimatorController')
  var i1051 = i1049[3]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048._originalAnimationClips = i1050
  var i1053 = i1049[4]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1048._overrideAnimationClips = i1052
  var i1055 = i1049[5]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1048._animationClips = i1054
  var i1057 = i1049[6]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('UnityEngine.AnimationClipPair', i1057[i + 0]) );
  }
  i1048._animationClipPairs = i1056
  return i1048
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'originalClip')
  request.r(i1063[2], i1063[3], 0, i1062, 'overrideClip')
  return i1062
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1065 = data
  i1064.useSafeMode = !!i1065[0]
  i1064.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1065[1], i1064.safeModeOptions)
  i1064.timeScale = i1065[2]
  i1064.unscaledTimeScale = i1065[3]
  i1064.useSmoothDeltaTime = !!i1065[4]
  i1064.maxSmoothUnscaledTime = i1065[5]
  i1064.rewindCallbackMode = i1065[6]
  i1064.showUnityEditorReport = !!i1065[7]
  i1064.logBehaviour = i1065[8]
  i1064.drawGizmos = !!i1065[9]
  i1064.defaultRecyclable = !!i1065[10]
  i1064.defaultAutoPlay = i1065[11]
  i1064.defaultUpdateType = i1065[12]
  i1064.defaultTimeScaleIndependent = !!i1065[13]
  i1064.defaultEaseType = i1065[14]
  i1064.defaultEaseOvershootOrAmplitude = i1065[15]
  i1064.defaultEasePeriod = i1065[16]
  i1064.defaultAutoKill = !!i1065[17]
  i1064.defaultLoopType = i1065[18]
  i1064.debugMode = !!i1065[19]
  i1064.debugStoreTargetId = !!i1065[20]
  i1064.showPreviewPanel = !!i1065[21]
  i1064.storeSettingsLocation = i1065[22]
  i1064.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1065[23], i1064.modules)
  i1064.createASMDEF = !!i1065[24]
  i1064.showPlayingTweens = !!i1065[25]
  i1064.showPausedTweens = !!i1065[26]
  return i1064
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1066 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1067 = data
  i1066.logBehaviour = i1067[0]
  i1066.nestedTweenFailureBehaviour = i1067[1]
  return i1066
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1068 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1069 = data
  i1068.showPanel = !!i1069[0]
  i1068.audioEnabled = !!i1069[1]
  i1068.physicsEnabled = !!i1069[2]
  i1068.physics2DEnabled = !!i1069[3]
  i1068.spriteEnabled = !!i1069[4]
  i1068.uiEnabled = !!i1069[5]
  i1068.textMeshProEnabled = !!i1069[6]
  i1068.tk2DEnabled = !!i1069[7]
  i1068.deAudioEnabled = !!i1069[8]
  i1068.deUnityExtendedEnabled = !!i1069[9]
  i1068.epoOutlineEnabled = !!i1069[10]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1073[i + 0]) );
  }
  i1070.files = i1072
  i1070.componentToPrefabIds = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1077 = data
  i1076.path = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'unityObject')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1081[i + 0]) );
  }
  i1078.scriptsExecutionOrder = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1083[i + 0]) );
  }
  i1078.sortingLayers = i1082
  var i1085 = i1079[2]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1085[i + 0]) );
  }
  i1078.cullingLayers = i1084
  i1078.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1079[3], i1078.timeSettings)
  i1078.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1079[4], i1078.physicsSettings)
  i1078.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1079[5], i1078.physics2DSettings)
  i1078.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1079[6], i1078.qualitySettings)
  i1078.enableRealtimeShadows = !!i1079[7]
  i1078.enableAutoInstancing = !!i1079[8]
  i1078.enableStaticBatching = !!i1079[9]
  i1078.enableDynamicBatching = !!i1079[10]
  i1078.usePreservativeDynamicBatching = !!i1079[11]
  i1078.lightmapEncodingQuality = i1079[12]
  i1078.desiredColorSpace = i1079[13]
  var i1087 = i1079[14]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1078.allTags = i1086
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.value = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.value = i1095[2]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1101 = data
  i1100.fixedDeltaTime = i1101[0]
  i1100.maximumDeltaTime = i1101[1]
  i1100.timeScale = i1101[2]
  i1100.maximumParticleTimestep = i1101[3]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1103 = data
  i1102.gravity = new pc.Vec3( i1103[0], i1103[1], i1103[2] )
  i1102.defaultSolverIterations = i1103[3]
  i1102.bounceThreshold = i1103[4]
  i1102.autoSyncTransforms = !!i1103[5]
  i1102.autoSimulation = !!i1103[6]
  var i1105 = i1103[7]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1105[i + 0]) );
  }
  i1102.collisionMatrix = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1109 = data
  i1108.enabled = !!i1109[0]
  i1108.layerId = i1109[1]
  i1108.otherLayerId = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'material')
  i1110.gravity = new pc.Vec2( i1111[2], i1111[3] )
  i1110.positionIterations = i1111[4]
  i1110.velocityIterations = i1111[5]
  i1110.velocityThreshold = i1111[6]
  i1110.maxLinearCorrection = i1111[7]
  i1110.maxAngularCorrection = i1111[8]
  i1110.maxTranslationSpeed = i1111[9]
  i1110.maxRotationSpeed = i1111[10]
  i1110.baumgarteScale = i1111[11]
  i1110.baumgarteTOIScale = i1111[12]
  i1110.timeToSleep = i1111[13]
  i1110.linearSleepTolerance = i1111[14]
  i1110.angularSleepTolerance = i1111[15]
  i1110.defaultContactOffset = i1111[16]
  i1110.autoSimulation = !!i1111[17]
  i1110.queriesHitTriggers = !!i1111[18]
  i1110.queriesStartInColliders = !!i1111[19]
  i1110.callbacksOnDisable = !!i1111[20]
  i1110.reuseCollisionCallbacks = !!i1111[21]
  i1110.autoSyncTransforms = !!i1111[22]
  var i1113 = i1111[23]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1121[i + 0]) );
  }
  i1118.qualityLevels = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.names = i1122
  i1118.shadows = i1119[2]
  i1118.anisotropicFiltering = i1119[3]
  i1118.antiAliasing = i1119[4]
  i1118.lodBias = i1119[5]
  i1118.shadowCascades = i1119[6]
  i1118.shadowDistance = i1119[7]
  i1118.shadowmaskMode = i1119[8]
  i1118.shadowProjection = i1119[9]
  i1118.shadowResolution = i1119[10]
  i1118.softParticles = !!i1119[11]
  i1118.softVegetation = !!i1119[12]
  i1118.activeColorSpace = i1119[13]
  i1118.desiredColorSpace = i1119[14]
  i1118.masterTextureLimit = i1119[15]
  i1118.maxQueuedFrames = i1119[16]
  i1118.particleRaycastBudget = i1119[17]
  i1118.pixelLightCount = i1119[18]
  i1118.realtimeReflectionProbes = !!i1119[19]
  i1118.shadowCascade2Split = i1119[20]
  i1118.shadowCascade4Split = new pc.Vec3( i1119[21], i1119[22], i1119[23] )
  i1118.streamingMipmapsActive = !!i1119[24]
  i1118.vSyncCount = i1119[25]
  i1118.asyncUploadBufferSize = i1119[26]
  i1118.asyncUploadTimeSlice = i1119[27]
  i1118.billboardsFaceCameraPosition = !!i1119[28]
  i1118.shadowNearPlaneOffset = i1119[29]
  i1118.streamingMipmapsMemoryBudget = i1119[30]
  i1118.maximumLODLevel = i1119[31]
  i1118.streamingMipmapsAddAllCameras = !!i1119[32]
  i1118.streamingMipmapsMaxLevelReduction = i1119[33]
  i1118.streamingMipmapsRenderersPerFrame = i1119[34]
  i1118.resolutionScalingFixedDPIFactor = i1119[35]
  i1118.streamingMipmapsMaxFileIORequests = i1119[36]
  i1118.currentQualityLevel = i1119[37]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1127 = data
  i1126.name = i1127[0]
  var i1129 = i1127[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1129[i + 0]) );
  }
  i1126.tos = i1128
  var i1131 = i1127[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.constant = i1130
  i1126.isValid = !!i1127[3]
  i1126.isHuman = !!i1127[4]
  i1126.hasRootMotion = !!i1127[5]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1135 = data
  i1134.hash = i1135[0]
  i1134.path = i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1139 = data
  i1138.weight = i1139[0]
  i1138.vertices = i1139[1]
  i1138.normals = i1139[2]
  i1138.tangents = i1139[3]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1143 = data
  i1142.time = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'value')
  return i1142
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.SpringJoint":{"spring":0,"damper":1,"minDistance":2,"maxDistance":3,"tolerance":4,"connectedBody":5,"axis":7,"anchor":10,"connectedAnchor":13,"autoConfigureConnectedAnchor":16,"massScale":17,"connectedMassScale":18,"enableCollision":19,"breakForce":20,"breakTorque":21},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint":{"connectedBody":0,"axis":2,"anchor":5,"connectedAnchor":8,"autoConfigureConnectedAnchor":11,"massScale":12,"connectedMassScale":13,"enableCollision":14,"breakForce":15,"breakTorque":16},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[47],"66":[7],"67":[37],"38":[37],"68":[37],"42":[37],"69":[37],"40":[37],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[71],"79":[71],"80":[71],"81":[71],"82":[71],"83":[71],"84":[7],"85":[34],"86":[87],"88":[87],"25":[24],"89":[24],"90":[28,24],"91":[34],"92":[28,24],"93":[24],"94":[24],"95":[34,24],"96":[24,28],"97":[98],"99":[98],"100":[98],"101":[24],"102":[24],"27":[25],"31":[28,24],"103":[24],"26":[25],"104":[24],"105":[24],"106":[24],"107":[24],"108":[24],"109":[24],"110":[24],"111":[24],"112":[24],"21":[28,24],"113":[24],"114":[24],"115":[24],"116":[24],"20":[28,24],"117":[24],"118":[12],"119":[12],"13":[12],"120":[12],"121":[7],"122":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","GameController","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","LunaController","UnityEngine.UI.Text","UnityEngine.UI.RawImage","UnityEngine.AudioSource","AudioController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","BodyPiece","UnityEngine.SpringJoint","UnityEngine.CapsuleCollider","UnityEngine.FixedJoint","TakeDamage","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","Dragable","BodyController","LavaController","LavaPartDisappear","UnityEngine.SphereCollider","DragController","UnityEngine.Cubemap","UnityEditor.Animations.AnimatorController","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.HingeJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "10/13/2026 07:32:56";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SRG_V05_YenTTH";

Deserializers.lunaAppID = "41207";

Deserializers.projectId = "2ee65b7bf37279a4a8c8b2625d5057f9";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1737";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4522";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "9dcd7c0a-1b72-4d74-a426-e137360b0c27";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

