var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointSpring' )
  var i749 = data
  i748.spring = i749[0]
  i748.damper = i749[1]
  i748.targetPosition = i749[2]
  return i748
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointMotor' )
  var i751 = data
  i750.m_TargetVelocity = i751[0]
  i750.m_Force = i751[1]
  i750.m_FreeSpin = i751[2]
  return i750
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointLimits' )
  var i753 = data
  i752.m_Min = i753[0]
  i752.m_Max = i753[1]
  i752.m_Bounciness = i753[2]
  i752.m_BounceMinVelocity = i753[3]
  i752.m_ContactDistance = i753[4]
  i752.minBounce = i753[5]
  i752.maxBounce = i753[6]
  return i752
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointDrive' )
  var i755 = data
  i754.m_PositionSpring = i755[0]
  i754.m_PositionDamper = i755[1]
  i754.m_MaximumForce = i755[2]
  i754.m_UseAcceleration = i755[3]
  return i754
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i757 = data
  i756.m_Spring = i757[0]
  i756.m_Damper = i757[1]
  return i756
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i759 = data
  i758.m_Limit = i759[0]
  i758.m_Bounciness = i759[1]
  i758.m_ContactDistance = i759[2]
  return i758
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i761 = data
  i760.m_ExtremumSlip = i761[0]
  i760.m_ExtremumValue = i761[1]
  i760.m_AsymptoteSlip = i761[2]
  i760.m_AsymptoteValue = i761[3]
  i760.m_Stiffness = i761[4]
  return i760
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i763 = data
  i762.m_LowerAngle = i763[0]
  i762.m_UpperAngle = i763[1]
  return i762
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i765 = data
  i764.m_MotorSpeed = i765[0]
  i764.m_MaximumMotorTorque = i765[1]
  return i764
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i767 = data
  i766.m_DampingRatio = i767[0]
  i766.m_Frequency = i767[1]
  i766.m_Angle = i767[2]
  return i766
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i769 = data
  i768.m_LowerTranslation = i769[0]
  i768.m_UpperTranslation = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i771 = data
  i770.name = i771[0]
  i770.width = i771[1]
  i770.height = i771[2]
  i770.mipmapCount = i771[3]
  i770.anisoLevel = i771[4]
  i770.filterMode = i771[5]
  i770.hdr = !!i771[6]
  i770.format = i771[7]
  i770.wrapMode = i771[8]
  i770.alphaIsTransparency = !!i771[9]
  i770.alphaSource = i771[10]
  i770.graphicsFormat = i771[11]
  i770.sRGBTexture = !!i771[12]
  i770.desiredColorSpace = i771[13]
  i770.wrapU = i771[14]
  i770.wrapV = i771[15]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i773 = data
  i772.position = new pc.Vec3( i773[0], i773[1], i773[2] )
  i772.scale = new pc.Vec3( i773[3], i773[4], i773[5] )
  i772.rotation = new pc.Quat(i773[6], i773[7], i773[8], i773[9])
  return i772
}

Deserializers["Game.Gameplay.RagdollBrain"] = function (request, data, root) {
  var i774 = root || request.c( 'Game.Gameplay.RagdollBrain' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'torso')
  request.r(i775[2], i775[3], 0, i774, 'head')
  request.r(i775[4], i775[5], 0, i774, 'legL')
  request.r(i775[6], i775[7], 0, i774, 'legR')
  request.r(i775[8], i775[9], 0, i774, 'neck')
  request.r(i775[10], i775[11], 0, i774, 'shoulderL')
  request.r(i775[12], i775[13], 0, i774, 'shoulderR')
  request.r(i775[14], i775[15], 0, i774, 'hipL')
  request.r(i775[16], i775[17], 0, i774, 'hipR')
  i774.standHeight = i775[18]
  i774.headRestHeight = i775[19]
  request.r(i775[20], i775[21], 0, i774, 'tuning')
  return i774
}

Deserializers["Game.Gameplay.CreatureAgent"] = function (request, data, root) {
  var i776 = root || request.c( 'Game.Gameplay.CreatureAgent' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'creature')
  request.r(i777[2], i777[3], 0, i776, 'torsoBody')
  request.r(i777[4], i777[5], 0, i776, 'torsoRenderer')
  request.r(i777[6], i777[7], 0, i776, 'headRenderer')
  request.r(i777[8], i777[9], 0, i776, 'leftArmRenderer')
  request.r(i777[10], i777[11], 0, i776, 'rightArmRenderer')
  request.r(i777[12], i777[13], 0, i776, 'leftLegRenderer')
  request.r(i777[14], i777[15], 0, i776, 'rightLegRenderer')
  var i779 = i777[16]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.bodyColliders = i778
  i776.infectRadius = i777[17]
  i776.reachRadius = i777[18]
  i776.infectionTolerance = i777[19]
  i776.infectJumpVelocity = i777[20]
  i776.infectArmFlail = i777[21]
  i776.startleHopVelocity = i777[22]
  i776.startleLungeVelocity = i777[23]
  i776.recoilBodyShare = i777[24]
  i776.limbSeverDamage = i777[25]
  i776.limbHealthTransfer = i777[26]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i783 = data
  i782.color = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  request.r(i783[4], i783[5], 0, i782, 'sprite')
  i782.flipX = !!i783[6]
  i782.flipY = !!i783[7]
  i782.drawMode = i783[8]
  i782.size = new pc.Vec2( i783[9], i783[10] )
  i782.tileMode = i783[11]
  i782.adaptiveModeThreshold = i783[12]
  i782.maskInteraction = i783[13]
  i782.spriteSortPoint = i783[14]
  i782.enabled = !!i783[15]
  request.r(i783[16], i783[17], 0, i782, 'sharedMaterial')
  var i785 = i783[18]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sharedMaterials = i784
  i782.receiveShadows = !!i783[19]
  i782.shadowCastingMode = i783[20]
  i782.sortingLayerID = i783[21]
  i782.sortingOrder = i783[22]
  i782.lightmapIndex = i783[23]
  i782.lightmapSceneIndex = i783[24]
  i782.lightmapScaleOffset = new pc.Vec4( i783[25], i783[26], i783[27], i783[28] )
  i782.lightProbeUsage = i783[29]
  i782.reflectionProbeUsage = i783[30]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i789 = data
  i788.bodyType = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'material')
  i788.simulated = !!i789[3]
  i788.useAutoMass = !!i789[4]
  i788.mass = i789[5]
  i788.drag = i789[6]
  i788.angularDrag = i789[7]
  i788.gravityScale = i789[8]
  i788.collisionDetectionMode = i789[9]
  i788.sleepMode = i789[10]
  i788.constraints = i789[11]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i791 = data
  i790.usedByComposite = !!i791[0]
  i790.autoTiling = !!i791[1]
  i790.size = new pc.Vec2( i791[2], i791[3] )
  i790.edgeRadius = i791[4]
  i790.enabled = !!i791[5]
  i790.isTrigger = !!i791[6]
  i790.usedByEffector = !!i791[7]
  i790.density = i791[8]
  i790.offset = new pc.Vec2( i791[9], i791[10] )
  request.r(i791[11], i791[12], 0, i790, 'material')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i793 = data
  i792.name = i793[0]
  i792.tagId = i793[1]
  i792.enabled = !!i793[2]
  i792.isStatic = !!i793[3]
  i792.layer = i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i795 = data
  i794.useLimits = !!i795[0]
  i794.limits = request.d('UnityEngine.JointAngleLimits2D', i795[1], i794.limits)
  i794.useMotor = !!i795[2]
  i794.motor = request.d('UnityEngine.JointMotor2D', i795[3], i794.motor)
  i794.anchor = new pc.Vec2( i795[4], i795[5] )
  i794.connectedAnchor = new pc.Vec2( i795[6], i795[7] )
  i794.autoConfigureConnectedAnchor = !!i795[8]
  request.r(i795[9], i795[10], 0, i794, 'connectedBody')
  i794.breakForce = i795[11]
  i794.breakTorque = i795[12]
  i794.enableCollision = !!i795[13]
  i794.enabled = !!i795[14]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i797 = data
  i796.usedByComposite = !!i797[0]
  i796.autoTiling = !!i797[1]
  var i799 = i797[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
  var i801 = i799[i + 0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
    i800.push( new pc.Vec2( i801[i + 0], i801[i + 1] ) );
  }
    i798.push( i800 );
  }
  i796.points = i798
  i796.enabled = !!i797[3]
  i796.isTrigger = !!i797[4]
  i796.usedByEffector = !!i797[5]
  i796.density = i797[6]
  i796.offset = new pc.Vec2( i797[7], i797[8] )
  request.r(i797[9], i797[10], 0, i796, 'material')
  return i796
}

Deserializers["Game.Gameplay.CreatureCollisionRelay"] = function (request, data, root) {
  var i808 = root || request.c( 'Game.Gameplay.CreatureCollisionRelay' )
  var i809 = data
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i810 = root || new pc.UnityMaterial()
  var i811 = data
  i810.name = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'shader')
  i810.renderQueue = i811[3]
  i810.enableInstancing = !!i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i813[i + 0]) );
  }
  i810.floatParameters = i812
  var i815 = i811[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i815[i + 0]) );
  }
  i810.colorParameters = i814
  var i817 = i811[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i817[i + 0]) );
  }
  i810.vectorParameters = i816
  var i819 = i811[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i819[i + 0]) );
  }
  i810.textureParameters = i818
  var i821 = i811[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i821[i + 0]) );
  }
  i810.materialFlags = i820
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Color(i829[1], i829[2], i829[3], i829[4])
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = new pc.Vec4( i833[1], i833[2], i833[3], i833[4] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'value')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i841 = data
  i840.name = i841[0]
  i840.enabled = !!i841[1]
  return i840
}

Deserializers["Game.Gameplay.WeaponEntity"] = function (request, data, root) {
  var i842 = root || request.c( 'Game.Gameplay.WeaponEntity' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'spriteRenderer')
  request.r(i843[2], i843[3], 0, i842, 'box')
  request.r(i843[4], i843[5], 0, i842, 'body')
  i842.fireAlignDegrees = i843[6]
  request.r(i843[7], i843[8], 0, i842, 'projectilePrefab')
  return i842
}

Deserializers["Game.Gameplay.ProjectileEntity"] = function (request, data, root) {
  var i844 = root || request.c( 'Game.Gameplay.ProjectileEntity' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'body')
  request.r(i845[2], i845[3], 0, i844, 'spriteRenderer')
  i844.lifetime = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i847 = data
  i846.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i847[0], i846.main)
  i846.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i847[1], i846.colorBySpeed)
  i846.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i847[2], i846.colorOverLifetime)
  i846.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i847[3], i846.emission)
  i846.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i847[4], i846.rotationBySpeed)
  i846.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i847[5], i846.rotationOverLifetime)
  i846.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i847[6], i846.shape)
  i846.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i847[7], i846.sizeBySpeed)
  i846.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i847[8], i846.sizeOverLifetime)
  i846.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i847[9], i846.textureSheetAnimation)
  i846.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i847[10], i846.velocityOverLifetime)
  i846.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i847[11], i846.noise)
  i846.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i847[12], i846.inheritVelocity)
  i846.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i847[13], i846.forceOverLifetime)
  i846.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i847[14], i846.limitVelocityOverLifetime)
  i846.useAutoRandomSeed = !!i847[15]
  i846.randomSeed = i847[16]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemMain()
  var i849 = data
  i848.duration = i849[0]
  i848.loop = !!i849[1]
  i848.prewarm = !!i849[2]
  i848.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.startDelay)
  i848.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[4], i848.startLifetime)
  i848.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[5], i848.startSpeed)
  i848.startSize3D = !!i849[6]
  i848.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[7], i848.startSizeX)
  i848.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[8], i848.startSizeY)
  i848.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[9], i848.startSizeZ)
  i848.startRotation3D = !!i849[10]
  i848.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[11], i848.startRotationX)
  i848.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[12], i848.startRotationY)
  i848.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[13], i848.startRotationZ)
  i848.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i849[14], i848.startColor)
  i848.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[15], i848.gravityModifier)
  i848.simulationSpace = i849[16]
  request.r(i849[17], i849[18], 0, i848, 'customSimulationSpace')
  i848.simulationSpeed = i849[19]
  i848.useUnscaledTime = !!i849[20]
  i848.scalingMode = i849[21]
  i848.playOnAwake = !!i849[22]
  i848.maxParticles = i849[23]
  i848.emitterVelocityMode = i849[24]
  i848.stopAction = i849[25]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i850 = root || new pc.MinMaxCurve()
  var i851 = data
  i850.mode = i851[0]
  i850.curveMin = new pc.AnimationCurve( { keys_flow: i851[1] } )
  i850.curveMax = new pc.AnimationCurve( { keys_flow: i851[2] } )
  i850.curveMultiplier = i851[3]
  i850.constantMin = i851[4]
  i850.constantMax = i851[5]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i852 = root || new pc.MinMaxGradient()
  var i853 = data
  i852.mode = i853[0]
  i852.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i853[1], i852.gradientMin)
  i852.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i853[2], i852.gradientMax)
  i852.colorMin = new pc.Color(i853[3], i853[4], i853[5], i853[6])
  i852.colorMax = new pc.Color(i853[7], i853[8], i853[9], i853[10])
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i855 = data
  i854.mode = i855[0]
  var i857 = i855[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i857[i + 0]) );
  }
  i854.colorKeys = i856
  var i859 = i855[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i859[i + 0]) );
  }
  i854.alphaKeys = i858
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemColorBySpeed()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i861[1], i860.color)
  i860.range = new pc.Vec2( i861[2], i861[3] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i865 = data
  i864.color = new pc.Color(i865[0], i865[1], i865[2], i865[3])
  i864.time = i865[4]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i869 = data
  i868.alpha = i869[0]
  i868.time = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorOverLifetime()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemEmitter()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[1], i872.rateOverTime)
  i872.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[2], i872.rateOverDistance)
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i875[i + 0]) );
  }
  i872.bursts = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemBurst()
  var i879 = data
  i878.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[0], i878.count)
  i878.cycleCount = i879[1]
  i878.minCount = i879[2]
  i878.maxCount = i879[3]
  i878.repeatInterval = i879[4]
  i878.time = i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemRotationBySpeed()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.separateAxes = !!i881[4]
  i880.range = new pc.Vec2( i881[5], i881[6] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemRotationOverLifetime()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.x)
  i882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.y)
  i882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.z)
  i882.separateAxes = !!i883[4]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemShape()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.shapeType = i885[1]
  i884.randomDirectionAmount = i885[2]
  i884.sphericalDirectionAmount = i885[3]
  i884.randomPositionAmount = i885[4]
  i884.alignToDirection = !!i885[5]
  i884.radius = i885[6]
  i884.radiusMode = i885[7]
  i884.radiusSpread = i885[8]
  i884.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[9], i884.radiusSpeed)
  i884.radiusThickness = i885[10]
  i884.angle = i885[11]
  i884.length = i885[12]
  i884.boxThickness = new pc.Vec3( i885[13], i885[14], i885[15] )
  i884.meshShapeType = i885[16]
  request.r(i885[17], i885[18], 0, i884, 'mesh')
  request.r(i885[19], i885[20], 0, i884, 'meshRenderer')
  request.r(i885[21], i885[22], 0, i884, 'skinnedMeshRenderer')
  i884.useMeshMaterialIndex = !!i885[23]
  i884.meshMaterialIndex = i885[24]
  i884.useMeshColors = !!i885[25]
  i884.normalOffset = i885[26]
  i884.arc = i885[27]
  i884.arcMode = i885[28]
  i884.arcSpread = i885[29]
  i884.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[30], i884.arcSpeed)
  i884.donutRadius = i885[31]
  i884.position = new pc.Vec3( i885[32], i885[33], i885[34] )
  i884.rotation = new pc.Vec3( i885[35], i885[36], i885[37] )
  i884.scale = new pc.Vec3( i885[38], i885[39], i885[40] )
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemSizeBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.x)
  i886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.y)
  i886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[3], i886.z)
  i886.separateAxes = !!i887[4]
  i886.range = new pc.Vec2( i887[5], i887[6] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemSizeOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.mode = i891[1]
  i890.animation = i891[2]
  i890.numTilesX = i891[3]
  i890.numTilesY = i891[4]
  i890.useRandomRow = !!i891[5]
  i890.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[6], i890.frameOverTime)
  i890.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[7], i890.startFrame)
  i890.cycleCount = i891[8]
  i890.rowIndex = i891[9]
  i890.flipU = i891[10]
  i890.flipV = i891[11]
  i890.spriteCount = i891[12]
  var i893 = i891[13]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.sprites = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[4], i896.radial)
  i896.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[5], i896.speedModifier)
  i896.space = i897[6]
  i896.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[7], i896.orbitalX)
  i896.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[8], i896.orbitalY)
  i896.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[9], i896.orbitalZ)
  i896.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[10], i896.orbitalOffsetX)
  i896.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[11], i896.orbitalOffsetY)
  i896.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[12], i896.orbitalOffsetZ)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemNoise()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.separateAxes = !!i899[1]
  i898.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.strengthX)
  i898.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.strengthY)
  i898.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.strengthZ)
  i898.frequency = i899[5]
  i898.damping = !!i899[6]
  i898.octaveCount = i899[7]
  i898.octaveMultiplier = i899[8]
  i898.octaveScale = i899[9]
  i898.quality = i899[10]
  i898.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.scrollSpeed)
  i898.scrollSpeedMultiplier = i899[12]
  i898.remapEnabled = !!i899[13]
  i898.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[14], i898.remapX)
  i898.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[15], i898.remapY)
  i898.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[16], i898.remapZ)
  i898.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[17], i898.positionAmount)
  i898.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[18], i898.rotationAmount)
  i898.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[19], i898.sizeAmount)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemInheritVelocity()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.mode = i901[1]
  i900.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.curve)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemForceOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.space = i903[4]
  i902.randomized = !!i903[5]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.limit)
  i904.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.limitX)
  i904.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.limitY)
  i904.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[4], i904.limitZ)
  i904.dampen = i905[5]
  i904.separateAxes = !!i905[6]
  i904.space = i905[7]
  i904.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[8], i904.drag)
  i904.multiplyDragByParticleSize = !!i905[9]
  i904.multiplyDragByParticleVelocity = !!i905[10]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'mesh')
  i906.meshCount = i907[2]
  i906.activeVertexStreamsCount = i907[3]
  i906.alignment = i907[4]
  i906.renderMode = i907[5]
  i906.sortMode = i907[6]
  i906.lengthScale = i907[7]
  i906.velocityScale = i907[8]
  i906.cameraVelocityScale = i907[9]
  i906.normalDirection = i907[10]
  i906.sortingFudge = i907[11]
  i906.minParticleSize = i907[12]
  i906.maxParticleSize = i907[13]
  i906.pivot = new pc.Vec3( i907[14], i907[15], i907[16] )
  request.r(i907[17], i907[18], 0, i906, 'trailMaterial')
  i906.applyActiveColorSpace = !!i907[19]
  i906.enabled = !!i907[20]
  request.r(i907[21], i907[22], 0, i906, 'sharedMaterial')
  var i909 = i907[23]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.sharedMaterials = i908
  i906.receiveShadows = !!i907[24]
  i906.shadowCastingMode = i907[25]
  i906.sortingLayerID = i907[26]
  i906.sortingOrder = i907[27]
  i906.lightmapIndex = i907[28]
  i906.lightmapSceneIndex = i907[29]
  i906.lightmapScaleOffset = new pc.Vec4( i907[30], i907[31], i907[32], i907[33] )
  i906.lightProbeUsage = i907[34]
  i906.reflectionProbeUsage = i907[35]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i911 = data
  i910.name = i911[0]
  i910.halfPrecision = !!i911[1]
  i910.useSimplification = !!i911[2]
  i910.useUInt32IndexFormat = !!i911[3]
  i910.vertexCount = i911[4]
  i910.aabb = i911[5]
  var i913 = i911[6]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( !!i913[i + 0] );
  }
  i910.streams = i912
  i910.vertices = i911[7]
  var i915 = i911[8]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i915[i + 0]) );
  }
  i910.subMeshes = i914
  var i917 = i911[9]
  var i916 = []
  for(var i = 0; i < i917.length; i += 16) {
    i916.push( new pc.Mat4().setData(i917[i + 0], i917[i + 1], i917[i + 2], i917[i + 3],  i917[i + 4], i917[i + 5], i917[i + 6], i917[i + 7],  i917[i + 8], i917[i + 9], i917[i + 10], i917[i + 11],  i917[i + 12], i917[i + 13], i917[i + 14], i917[i + 15]) );
  }
  i910.bindposes = i916
  var i919 = i911[10]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i919[i + 0]) );
  }
  i910.blendShapes = i918
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i925 = data
  i924.triangles = i925[0]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i931 = data
  i930.name = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i933[i + 0]) );
  }
  i930.frames = i932
  return i930
}

Deserializers["Game.Gameplay.WearableEntity"] = function (request, data, root) {
  var i934 = root || request.c( 'Game.Gameplay.WearableEntity' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'spriteRenderer')
  request.r(i935[2], i935[3], 0, i934, 'box')
  request.r(i935[4], i935[5], 0, i934, 'body')
  return i934
}

Deserializers["Game.Gameplay.PropEntity"] = function (request, data, root) {
  var i936 = root || request.c( 'Game.Gameplay.PropEntity' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'spriteRenderer')
  request.r(i937[2], i937[3], 0, i936, 'box')
  return i936
}

Deserializers["Game.Gameplay.ItemSpawnMotion"] = function (request, data, root) {
  var i938 = root || request.c( 'Game.Gameplay.ItemSpawnMotion' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'body')
  i938.sidewaysSpeed = new pc.Vec2( i939[2], i939[3] )
  i938.upwardSpeed = new pc.Vec2( i939[4], i939[5] )
  i938.maxSpin = i939[6]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i941 = data
  i940.size = new pc.Vec2( i941[0], i941[1] )
  i940.direction = i941[2]
  i940.enabled = !!i941[3]
  i940.isTrigger = !!i941[4]
  i940.usedByEffector = !!i941[5]
  i940.density = i941[6]
  i940.offset = new pc.Vec2( i941[7], i941[8] )
  request.r(i941[9], i941[10], 0, i940, 'material')
  return i940
}

Deserializers["Game.Gameplay.ExplosiveEntity"] = function (request, data, root) {
  var i942 = root || request.c( 'Game.Gameplay.ExplosiveEntity' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'spriteRenderer')
  return i942
}

Deserializers["Game.Gameplay.GrenadePinEjector"] = function (request, data, root) {
  var i944 = root || request.c( 'Game.Gameplay.GrenadePinEjector' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'pinGameObject')
  i944.ejectSpeed = new pc.Vec2( i945[2], i945[3] )
  i944.maxSpin = i945[4]
  i944.fadeDelay = i945[5]
  i944.fadeDuration = i945[6]
  return i944
}

Deserializers["Game.Gameplay.TileEntity"] = function (request, data, root) {
  var i946 = root || request.c( 'Game.Gameplay.TileEntity' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'spriteRenderer')
  request.r(i947[2], i947[3], 0, i946, 'box')
  var i949 = i947[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.crackStages = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i951 = data
  i950.pivot = new pc.Vec2( i951[0], i951[1] )
  i950.anchorMin = new pc.Vec2( i951[2], i951[3] )
  i950.anchorMax = new pc.Vec2( i951[4], i951[5] )
  i950.sizeDelta = new pc.Vec2( i951[6], i951[7] )
  i950.anchoredPosition3D = new pc.Vec3( i951[8], i951[9], i951[10] )
  i950.rotation = new pc.Quat(i951[11], i951[12], i951[13], i951[14])
  i950.scale = new pc.Vec3( i951[15], i951[16], i951[17] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i953 = data
  i952.planeDistance = i953[0]
  i952.referencePixelsPerUnit = i953[1]
  i952.isFallbackOverlay = !!i953[2]
  i952.renderMode = i953[3]
  i952.renderOrder = i953[4]
  i952.sortingLayerName = i953[5]
  i952.sortingOrder = i953[6]
  i952.scaleFactor = i953[7]
  request.r(i953[8], i953[9], 0, i952, 'worldCamera')
  i952.overrideSorting = !!i953[10]
  i952.pixelPerfect = !!i953[11]
  i952.targetDisplay = i953[12]
  i952.overridePixelPerfect = !!i953[13]
  i952.enabled = !!i953[14]
  return i952
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i955 = data
  i954.m_UiScaleMode = i955[0]
  i954.m_ReferencePixelsPerUnit = i955[1]
  i954.m_ScaleFactor = i955[2]
  i954.m_ReferenceResolution = new pc.Vec2( i955[3], i955[4] )
  i954.m_ScreenMatchMode = i955[5]
  i954.m_MatchWidthOrHeight = i955[6]
  i954.m_PhysicalUnit = i955[7]
  i954.m_FallbackScreenDPI = i955[8]
  i954.m_DefaultSpriteDPI = i955[9]
  i954.m_DynamicPixelsPerUnit = i955[10]
  i954.m_PresetInfoIsWorld = !!i955[11]
  return i954
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i957 = data
  i956.m_IgnoreReversedGraphics = !!i957[0]
  i956.m_BlockingObjects = i957[1]
  i956.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i957[2] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i959 = data
  i958.m_Alpha = i959[0]
  i958.m_Interactable = !!i959[1]
  i958.m_BlocksRaycasts = !!i959[2]
  i958.m_IgnoreParentGroups = !!i959[3]
  i958.enabled = !!i959[4]
  return i958
}

Deserializers["Game.UI.ItemUnlockPopup"] = function (request, data, root) {
  var i960 = root || request.c( 'Game.UI.ItemUnlockPopup' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'group')
  request.r(i961[2], i961[3], 0, i960, 'panel')
  request.r(i961[4], i961[5], 0, i960, 'icon')
  request.r(i961[6], i961[7], 0, i960, 'title')
  request.r(i961[8], i961[9], 0, i960, 'body')
  request.r(i961[10], i961[11], 0, i960, 'timeTaskIcon')
  request.r(i961[12], i961[13], 0, i960, 'killTaskIcon')
  request.r(i961[14], i961[15], 0, i960, 'normalCreatureIcon')
  request.r(i961[16], i961[17], 0, i960, 'zombieCreatureIcon')
  request.r(i961[18], i961[19], 0, i960, 'watchButton')
  request.r(i961[20], i961[21], 0, i960, 'closeButton')
  request.r(i961[22], i961[23], 0, i960, 'closeLabel')
  i960.closeLabelWithWatch = i961[24]
  i960.closeLabelTaskOnly = i961[25]
  request.r(i961[26], i961[27], 0, i960, 'dimButton')
  i960.fadeDuration = i961[28]
  i960.openFromScale = i961[29]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i963 = data
  i962.cullTransparentMesh = !!i963[0]
  return i962
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Image' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'm_Sprite')
  i964.m_Type = i965[2]
  i964.m_PreserveAspect = !!i965[3]
  i964.m_FillCenter = !!i965[4]
  i964.m_FillMethod = i965[5]
  i964.m_FillAmount = i965[6]
  i964.m_FillClockwise = !!i965[7]
  i964.m_FillOrigin = i965[8]
  i964.m_UseSpriteMesh = !!i965[9]
  i964.m_PixelsPerUnitMultiplier = i965[10]
  request.r(i965[11], i965[12], 0, i964, 'm_Material')
  i964.m_Maskable = !!i965[13]
  i964.m_Color = new pc.Color(i965[14], i965[15], i965[16], i965[17])
  i964.m_RaycastTarget = !!i965[18]
  i964.m_RaycastPadding = new pc.Vec4( i965[19], i965[20], i965[21], i965[22] )
  return i964
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.Button' )
  var i967 = data
  i966.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i967[0], i966.m_OnClick)
  i966.m_Navigation = request.d('UnityEngine.UI.Navigation', i967[1], i966.m_Navigation)
  i966.m_Transition = i967[2]
  i966.m_Colors = request.d('UnityEngine.UI.ColorBlock', i967[3], i966.m_Colors)
  i966.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i967[4], i966.m_SpriteState)
  i966.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i967[5], i966.m_AnimationTriggers)
  i966.m_Interactable = !!i967[6]
  request.r(i967[7], i967[8], 0, i966, 'm_TargetGraphic')
  return i966
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i969 = data
  i968.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i969[0], i968.m_PersistentCalls)
  return i968
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('UnityEngine.Events.PersistentCall', i973[i + 0]));
  }
  i970.m_Calls = i972
  return i970
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_Target')
  i976.m_TargetAssemblyTypeName = i977[2]
  i976.m_MethodName = i977[3]
  i976.m_Mode = i977[4]
  i976.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i977[5], i976.m_Arguments)
  i976.m_CallState = i977[6]
  return i976
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i979 = data
  i978.m_Mode = i979[0]
  i978.m_WrapAround = !!i979[1]
  request.r(i979[2], i979[3], 0, i978, 'm_SelectOnUp')
  request.r(i979[4], i979[5], 0, i978, 'm_SelectOnDown')
  request.r(i979[6], i979[7], 0, i978, 'm_SelectOnLeft')
  request.r(i979[8], i979[9], 0, i978, 'm_SelectOnRight')
  return i978
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i981 = data
  i980.m_NormalColor = new pc.Color(i981[0], i981[1], i981[2], i981[3])
  i980.m_HighlightedColor = new pc.Color(i981[4], i981[5], i981[6], i981[7])
  i980.m_PressedColor = new pc.Color(i981[8], i981[9], i981[10], i981[11])
  i980.m_SelectedColor = new pc.Color(i981[12], i981[13], i981[14], i981[15])
  i980.m_DisabledColor = new pc.Color(i981[16], i981[17], i981[18], i981[19])
  i980.m_ColorMultiplier = i981[20]
  i980.m_FadeDuration = i981[21]
  return i980
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'm_HighlightedSprite')
  request.r(i983[2], i983[3], 0, i982, 'm_PressedSprite')
  request.r(i983[4], i983[5], 0, i982, 'm_SelectedSprite')
  request.r(i983[6], i983[7], 0, i982, 'm_DisabledSprite')
  return i982
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i985 = data
  i984.m_NormalTrigger = i985[0]
  i984.m_HighlightedTrigger = i985[1]
  i984.m_PressedTrigger = i985[2]
  i984.m_SelectedTrigger = i985[3]
  i984.m_DisabledTrigger = i985[4]
  return i984
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i987 = data
  i986.m_hasFontAssetChanged = !!i987[0]
  request.r(i987[1], i987[2], 0, i986, 'm_baseMaterial')
  i986.m_maskOffset = new pc.Vec4( i987[3], i987[4], i987[5], i987[6] )
  i986.m_text = i987[7]
  i986.m_isRightToLeft = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'm_fontAsset')
  request.r(i987[11], i987[12], 0, i986, 'm_sharedMaterial')
  var i989 = i987[13]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.m_fontSharedMaterials = i988
  request.r(i987[14], i987[15], 0, i986, 'm_fontMaterial')
  var i991 = i987[16]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i986.m_fontMaterials = i990
  i986.m_fontColor32 = UnityEngine.Color32.ConstructColor(i987[17], i987[18], i987[19], i987[20])
  i986.m_fontColor = new pc.Color(i987[21], i987[22], i987[23], i987[24])
  i986.m_enableVertexGradient = !!i987[25]
  i986.m_colorMode = i987[26]
  i986.m_fontColorGradient = request.d('TMPro.VertexGradient', i987[27], i986.m_fontColorGradient)
  request.r(i987[28], i987[29], 0, i986, 'm_fontColorGradientPreset')
  request.r(i987[30], i987[31], 0, i986, 'm_spriteAsset')
  i986.m_tintAllSprites = !!i987[32]
  request.r(i987[33], i987[34], 0, i986, 'm_StyleSheet')
  i986.m_TextStyleHashCode = i987[35]
  i986.m_overrideHtmlColors = !!i987[36]
  i986.m_faceColor = UnityEngine.Color32.ConstructColor(i987[37], i987[38], i987[39], i987[40])
  i986.m_fontSize = i987[41]
  i986.m_fontSizeBase = i987[42]
  i986.m_fontWeight = i987[43]
  i986.m_enableAutoSizing = !!i987[44]
  i986.m_fontSizeMin = i987[45]
  i986.m_fontSizeMax = i987[46]
  i986.m_fontStyle = i987[47]
  i986.m_HorizontalAlignment = i987[48]
  i986.m_VerticalAlignment = i987[49]
  i986.m_textAlignment = i987[50]
  i986.m_characterSpacing = i987[51]
  i986.m_characterHorizontalScale = i987[52]
  i986.m_wordSpacing = i987[53]
  i986.m_lineSpacing = i987[54]
  i986.m_lineSpacingMax = i987[55]
  i986.m_paragraphSpacing = i987[56]
  i986.m_charWidthMaxAdj = i987[57]
  i986.m_TextWrappingMode = i987[58]
  i986.m_wordWrappingRatios = i987[59]
  i986.m_overflowMode = i987[60]
  request.r(i987[61], i987[62], 0, i986, 'm_linkedTextComponent')
  request.r(i987[63], i987[64], 0, i986, 'parentLinkedComponent')
  i986.m_enableKerning = !!i987[65]
  var i993 = i987[66]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(i993[i + 0]);
  }
  i986.m_ActiveFontFeatures = i992
  i986.m_enableExtraPadding = !!i987[67]
  i986.checkPaddingRequired = !!i987[68]
  i986.m_isRichText = !!i987[69]
  i986.m_parseCtrlCharacters = !!i987[70]
  i986.m_isOrthographic = !!i987[71]
  i986.m_isCullingEnabled = !!i987[72]
  i986.m_horizontalMapping = i987[73]
  i986.m_verticalMapping = i987[74]
  i986.m_uvLineOffset = i987[75]
  i986.m_geometrySortingOrder = i987[76]
  i986.m_IsTextObjectScaleStatic = !!i987[77]
  i986.m_VertexBufferAutoSizeReduction = !!i987[78]
  i986.m_useMaxVisibleDescender = !!i987[79]
  i986.m_pageToDisplay = i987[80]
  i986.m_margin = new pc.Vec4( i987[81], i987[82], i987[83], i987[84] )
  i986.m_isUsingLegacyAnimationComponent = !!i987[85]
  i986.m_isVolumetricText = !!i987[86]
  request.r(i987[87], i987[88], 0, i986, 'm_Material')
  i986.m_EmojiFallbackSupport = !!i987[89]
  i986.m_Maskable = !!i987[90]
  i986.m_Color = new pc.Color(i987[91], i987[92], i987[93], i987[94])
  i986.m_RaycastTarget = !!i987[95]
  i986.m_RaycastPadding = new pc.Vec4( i987[96], i987[97], i987[98], i987[99] )
  return i986
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.VertexGradient' )
  var i995 = data
  i994.topLeft = new pc.Color(i995[0], i995[1], i995[2], i995[3])
  i994.topRight = new pc.Color(i995[4], i995[5], i995[6], i995[7])
  i994.bottomLeft = new pc.Color(i995[8], i995[9], i995[10], i995[11])
  i994.bottomRight = new pc.Color(i995[12], i995[13], i995[14], i995[15])
  return i994
}

Deserializers["Game.UI.UnlockToast"] = function (request, data, root) {
  var i998 = root || request.c( 'Game.UI.UnlockToast' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'group')
  request.r(i999[2], i999[3], 0, i998, 'panel')
  request.r(i999[4], i999[5], 0, i998, 'icon')
  request.r(i999[6], i999[7], 0, i998, 'title')
  request.r(i999[8], i999[9], 0, i998, 'itemName')
  i998.slideDuration = i999[10]
  i998.holdDuration = i999[11]
  i998.slideDistance = i999[12]
  return i998
}

Deserializers["Game.UI.CategoryTabBar"] = function (request, data, root) {
  var i1000 = root || request.c( 'Game.UI.CategoryTabBar' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'tabButtonPrefab')
  request.r(i1001[2], i1001[3], 0, i1000, 'container')
  return i1000
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_Content')
  i1002.m_Horizontal = !!i1003[2]
  i1002.m_Vertical = !!i1003[3]
  i1002.m_MovementType = i1003[4]
  i1002.m_Elasticity = i1003[5]
  i1002.m_Inertia = !!i1003[6]
  i1002.m_DecelerationRate = i1003[7]
  i1002.m_ScrollSensitivity = i1003[8]
  request.r(i1003[9], i1003[10], 0, i1002, 'm_Viewport')
  request.r(i1003[11], i1003[12], 0, i1002, 'm_HorizontalScrollbar')
  request.r(i1003[13], i1003[14], 0, i1002, 'm_VerticalScrollbar')
  i1002.m_HorizontalScrollbarVisibility = i1003[15]
  i1002.m_VerticalScrollbarVisibility = i1003[16]
  i1002.m_HorizontalScrollbarSpacing = i1003[17]
  i1002.m_VerticalScrollbarSpacing = i1003[18]
  i1002.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1003[19], i1002.m_OnValueChanged)
  return i1002
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1005 = data
  i1004.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1005[0], i1004.m_PersistentCalls)
  return i1004
}

Deserializers["Game.UI.NonDrawingGraphic"] = function (request, data, root) {
  var i1006 = root || request.c( 'Game.UI.NonDrawingGraphic' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_Material')
  i1006.m_Color = new pc.Color(i1007[2], i1007[3], i1007[4], i1007[5])
  i1006.m_RaycastTarget = !!i1007[6]
  i1006.m_RaycastPadding = new pc.Vec4( i1007[7], i1007[8], i1007[9], i1007[10] )
  return i1006
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i1009 = data
  i1008.m_Padding = new pc.Vec4( i1009[0], i1009[1], i1009[2], i1009[3] )
  i1008.m_Softness = new pc.Vec2( i1009[4], i1009[5] )
  return i1008
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1011 = data
  i1010.m_Spacing = i1011[0]
  i1010.m_ChildForceExpandWidth = !!i1011[1]
  i1010.m_ChildForceExpandHeight = !!i1011[2]
  i1010.m_ChildControlWidth = !!i1011[3]
  i1010.m_ChildControlHeight = !!i1011[4]
  i1010.m_ChildScaleWidth = !!i1011[5]
  i1010.m_ChildScaleHeight = !!i1011[6]
  i1010.m_ReverseArrangement = !!i1011[7]
  i1010.m_Padding = UnityEngine.RectOffset.FromPaddings(i1011[8], i1011[9], i1011[10], i1011[11])
  i1010.m_ChildAlignment = i1011[12]
  return i1010
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1013 = data
  i1012.m_IgnoreLayout = !!i1013[0]
  i1012.m_MinWidth = i1013[1]
  i1012.m_MinHeight = i1013[2]
  i1012.m_PreferredWidth = i1013[3]
  i1012.m_PreferredHeight = i1013[4]
  i1012.m_FlexibleWidth = i1013[5]
  i1012.m_FlexibleHeight = i1013[6]
  i1012.m_LayoutPriority = i1013[7]
  return i1012
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1015 = data
  i1014.m_HorizontalFit = i1015[0]
  i1014.m_VerticalFit = i1015[1]
  return i1014
}

Deserializers["Game.UI.PaletteGrid"] = function (request, data, root) {
  var i1016 = root || request.c( 'Game.UI.PaletteGrid' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'cardPrefab')
  request.r(i1017[2], i1017[3], 0, i1016, 'container')
  return i1016
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_Texture')
  i1018.m_UVRect = UnityEngine.Rect.MinMaxRect(i1019[2], i1019[3], i1019[4], i1019[5])
  request.r(i1019[6], i1019[7], 0, i1018, 'm_Material')
  i1018.m_Maskable = !!i1019[8]
  i1018.m_Color = new pc.Color(i1019[9], i1019[10], i1019[11], i1019[12])
  i1018.m_RaycastTarget = !!i1019[13]
  i1018.m_RaycastPadding = new pc.Vec4( i1019[14], i1019[15], i1019[16], i1019[17] )
  return i1018
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i1021 = data
  i1020.m_StartCorner = i1021[0]
  i1020.m_StartAxis = i1021[1]
  i1020.m_CellSize = new pc.Vec2( i1021[2], i1021[3] )
  i1020.m_Spacing = new pc.Vec2( i1021[4], i1021[5] )
  i1020.m_Constraint = i1021[6]
  i1020.m_ConstraintCount = i1021[7]
  i1020.m_Padding = UnityEngine.RectOffset.FromPaddings(i1021[8], i1021[9], i1021[10], i1021[11])
  i1020.m_ChildAlignment = i1021[12]
  return i1020
}

Deserializers["Game.UI.ToolStripPanel"] = function (request, data, root) {
  var i1022 = root || request.c( 'Game.UI.ToolStripPanel' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'collapseButton')
  request.r(i1023[2], i1023[3], 0, i1022, 'collapseIcon')
  request.r(i1023[4], i1023[5], 0, i1022, 'swapButton')
  request.r(i1023[6], i1023[7], 0, i1022, 'deleteButton')
  request.r(i1023[8], i1023[9], 0, i1022, 'linkButton')
  request.r(i1023[10], i1023[11], 0, i1022, 'resetButton')
  request.r(i1023[12], i1023[13], 0, i1022, 'panelToCollapse')
  i1022.collapseDuration = i1023[14]
  i1022.startCollapsed = !!i1023[15]
  i1022.slideDown = !!i1023[16]
  i1022.iconExpandedZ = i1023[17]
  i1022.iconCollapsedZ = i1023[18]
  request.r(i1023[19], i1023[20], 0, i1022, 'swapIcon')
  request.r(i1023[21], i1023[22], 0, i1022, 'swapFacingSprite')
  request.r(i1023[23], i1023[24], 0, i1022, 'swapToBackgroundSprite')
  request.r(i1023[25], i1023[26], 0, i1022, 'swapToSolidSprite')
  request.r(i1023[27], i1023[28], 0, i1022, 'resetIcon')
  i1022.resetSpinDuration = i1023[29]
  request.r(i1023[30], i1023[31], 0, i1022, 'bgReadySprite')
  request.r(i1023[32], i1023[33], 0, i1022, 'bgActiveSprite')
  request.r(i1023[34], i1023[35], 0, i1022, 'bgUnactiveSprite')
  return i1022
}

Deserializers["Game.UI.UIButtonBounce"] = function (request, data, root) {
  var i1024 = root || request.c( 'Game.UI.UIButtonBounce' )
  var i1025 = data
  i1024.pressedScale = i1025[0]
  i1024.pressDuration = i1025[1]
  i1024.releaseDuration = i1025[2]
  i1024.overshoot = i1025[3]
  return i1024
}

Deserializers["Game.UI.SafeAreaFitter"] = function (request, data, root) {
  var i1026 = root || request.c( 'Game.UI.SafeAreaFitter' )
  var i1027 = data
  i1026.reserveBannerSpace = !!i1027[0]
  return i1026
}

Deserializers["Game.UI.CornerMenuPanel"] = function (request, data, root) {
  var i1028 = root || request.c( 'Game.UI.CornerMenuPanel' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'revealedRowRoot')
  request.r(i1029[2], i1029[3], 0, i1028, 'toggleButton')
  request.r(i1029[4], i1029[5], 0, i1028, 'toggleIcon')
  request.r(i1029[6], i1029[7], 0, i1028, 'menuSprite')
  request.r(i1029[8], i1029[9], 0, i1028, 'closeSprite')
  request.r(i1029[10], i1029[11], 0, i1028, 'soundButton')
  request.r(i1029[12], i1029[13], 0, i1028, 'soundIcon')
  request.r(i1029[14], i1029[15], 0, i1028, 'soundOnSprite')
  request.r(i1029[16], i1029[17], 0, i1028, 'soundOffSprite')
  request.r(i1029[18], i1029[19], 0, i1028, 'waterButton')
  request.r(i1029[20], i1029[21], 0, i1028, 'bloodIcon')
  request.r(i1029[22], i1029[23], 0, i1028, 'bloodOnSprite')
  request.r(i1029[24], i1029[25], 0, i1028, 'bloodOffSprite')
  request.r(i1029[26], i1029[27], 0, i1028, 'locationButton')
  i1028.mapSelectionScreenKey = i1029[28]
  request.r(i1029[29], i1029[30], 0, i1028, 'mailButton')
  request.r(i1029[31], i1029[32], 0, i1028, 'mailInteractButton')
  i1028.mailScreenKey = i1029[33]
  i1028.mailSlideOffset = i1029[34]
  var i1031 = i1029[35]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.revealSequence = i1030
  i1028.staggerDelay = i1029[36]
  i1028.slideDuration = i1029[37]
  i1028.revealEase = i1029[38]
  i1028.collapseEase = i1029[39]
  return i1028
}

Deserializers["Game.UI.MailButton"] = function (request, data, root) {
  var i1034 = root || request.c( 'Game.UI.MailButton' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'unreadBadge')
  request.r(i1035[2], i1035[3], 0, i1034, 'icon')
  request.r(i1035[4], i1035[5], 0, i1034, 'idleSprite')
  request.r(i1035[6], i1035[7], 0, i1034, 'unreadSprite')
  request.r(i1035[8], i1035[9], 0, i1034, 'collectionPrefab')
  i1034.bobHeight = i1035[10]
  i1034.bobDuration = i1035[11]
  return i1034
}

Deserializers["Game.UI.SideSliderPanel"] = function (request, data, root) {
  var i1036 = root || request.c( 'Game.UI.SideSliderPanel' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'slider')
  i1036.idleDelay = i1037[2]
  i1036.fadeDuration = i1037[3]
  i1036.fadedAlpha = i1037[4]
  request.r(i1037[5], i1037[6], 0, i1036, 'handleIcon')
  i1036.bounceScale = i1037[7]
  i1036.bounceDuration = i1037[8]
  return i1036
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_FillRect')
  request.r(i1039[2], i1039[3], 0, i1038, 'm_HandleRect')
  i1038.m_Direction = i1039[4]
  i1038.m_MinValue = i1039[5]
  i1038.m_MaxValue = i1039[6]
  i1038.m_WholeNumbers = !!i1039[7]
  i1038.m_Value = i1039[8]
  i1038.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1039[9], i1038.m_OnValueChanged)
  i1038.m_Navigation = request.d('UnityEngine.UI.Navigation', i1039[10], i1038.m_Navigation)
  i1038.m_Transition = i1039[11]
  i1038.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1039[12], i1038.m_Colors)
  i1038.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1039[13], i1038.m_SpriteState)
  i1038.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1039[14], i1038.m_AnimationTriggers)
  i1038.m_Interactable = !!i1039[15]
  request.r(i1039[16], i1039[17], 0, i1038, 'm_TargetGraphic')
  return i1038
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1041 = data
  i1040.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1041[0], i1040.m_PersistentCalls)
  return i1040
}

Deserializers["Game.UI.WeaponSelectPanel"] = function (request, data, root) {
  var i1042 = root || request.c( 'Game.UI.WeaponSelectPanel' )
  var i1043 = data
  i1042.pickAction = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'bootstrap')
  var i1045 = i1043[3]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Game.UI.WeaponSelectPanel+Option', i1045[i + 0]) );
  }
  i1042.options = i1044
  request.r(i1043[4], i1043[5], 0, i1042, 'prompt')
  request.r(i1043[6], i1043[7], 0, i1042, 'dropHint')
  request.r(i1043[8], i1043[9], 0, i1042, 'nextPanel')
  i1042.nextPanelDelay = i1043[10]
  i1042.showOnReset = !!i1043[11]
  i1042.hideDelay = i1043[12]
  i1042.hideDuration = i1043[13]
  i1042.hideEase = i1043[14]
  i1042.showDuration = i1043[15]
  i1042.showEase = i1043[16]
  i1042.hideMargin = i1043[17]
  return i1042
}

Deserializers["Game.UI.WeaponSelectPanel+Option"] = function (request, data, root) {
  var i1048 = root || request.c( 'Game.UI.WeaponSelectPanel+Option' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'button')
  request.r(i1049[2], i1049[3], 0, i1048, 'weapon')
  request.r(i1049[4], i1049[5], 0, i1048, 'selectedFrame')
  return i1048
}

Deserializers["Game.UI.WeaponTutorialHand"] = function (request, data, root) {
  var i1050 = root || request.c( 'Game.UI.WeaponTutorialHand' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'hand')
  var i1053 = i1051[2]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1050.targets = i1052
  i1050.tapOffset = new pc.Vec2( i1051[3], i1051[4] )
  i1050.moveTime = i1051[5]
  i1050.tapTime = i1051[6]
  i1050.holdTime = i1051[7]
  i1050.pressScale = i1051[8]
  return i1050
}

Deserializers["Game.UI.CardRowFit"] = function (request, data, root) {
  var i1054 = root || request.c( 'Game.UI.CardRowFit' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'content')
  i1054.sideMargin = i1055[2]
  i1054.maxScale = i1055[3]
  i1054.baseHeight = i1055[4]
  return i1054
}

Deserializers["Game.UI.TapHintHand"] = function (request, data, root) {
  var i1056 = root || request.c( 'Game.UI.TapHintHand' )
  var i1057 = data
  i1056.pressScale = i1057[0]
  i1056.pressDip = i1057[1]
  i1056.pressTime = i1057[2]
  i1056.releaseTime = i1057[3]
  i1056.holdTime = i1057[4]
  return i1056
}

Deserializers["Game.UI.PlayableIntro"] = function (request, data, root) {
  var i1058 = root || request.c( 'Game.UI.PlayableIntro' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'bootstrap')
  request.r(i1059[2], i1059[3], 0, i1058, 'cameraController')
  request.r(i1059[4], i1059[5], 0, i1058, 'weaponPanel')
  request.r(i1059[6], i1059[7], 0, i1058, 'panHint')
  request.r(i1059[8], i1059[9], 0, i1058, 'panHand')
  i1058.swipeDistance = i1059[10]
  i1058.swipeTime = i1059[11]
  i1058.panDistance = i1059[12]
  i1058.noPanFallback = i1059[13]
  request.r(i1059[14], i1059[15], 0, i1058, 'nextButton')
  request.r(i1059[16], i1059[17], 0, i1058, 'zombieCaption')
  i1058.zombieCaptionFormat = i1059[18]
  i1058.zombieCaptionSingle = i1059[19]
  i1058.useCustomWarning = !!i1059[20]
  i1058.customWarning = i1059[21]
  i1058.zombieShotTime = i1059[22]
  i1058.zombieShotSize = i1059[23]
  i1058.zombieShotMargin = new pc.Vec2( i1059[24], i1059[25] )
  i1058.zombieHold = i1059[26]
  request.r(i1059[27], i1059[28], 0, i1058, 'title')
  request.r(i1059[29], i1059[30], 0, i1058, 'loseText')
  i1058.slamDelay = i1059[31]
  i1058.slamTime = i1059[32]
  i1058.slamFromScale = i1059[33]
  i1058.slamShake = i1059[34]
  i1058.playerShotTime = i1059[35]
  i1058.playerShotSize = i1059[36]
  i1058.playerShotOffset = new pc.Vec2( i1059[37], i1059[38] )
  request.r(i1059[39], i1059[40], 0, i1058, 'startButton')
  i1058.pulseScale = i1059[41]
  i1058.pulseTime = i1059[42]
  i1058.releaseTime = i1059[43]
  i1058.startCameraX = i1059[44]
  return i1058
}

Deserializers["Game.UI.GameResult"] = function (request, data, root) {
  var i1060 = root || request.c( 'Game.UI.GameResult' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'bootstrap')
  request.r(i1061[2], i1061[3], 0, i1060, 'intro')
  request.r(i1061[4], i1061[5], 0, i1060, 'specialPanel')
  request.r(i1061[6], i1061[7], 0, i1060, 'curePotion')
  request.r(i1061[8], i1061[9], 0, i1060, 'winScreen')
  request.r(i1061[10], i1061[11], 0, i1060, 'failScreen')
  request.r(i1061[12], i1061[13], 0, i1060, 'tryAgainButton')
  request.r(i1061[14], i1061[15], 0, i1060, 'restartLevelButton')
  i1060.skipIntroOnReplay = !!i1061[16]
  i1060.showDelay = i1061[17]
  i1060.checkInterval = i1061[18]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'clip')
  request.r(i1063[2], i1063[3], 0, i1062, 'outputAudioMixerGroup')
  i1062.playOnAwake = !!i1063[4]
  i1062.loop = !!i1063[5]
  i1062.time = i1063[6]
  i1062.volume = i1063[7]
  i1062.pitch = i1063[8]
  i1062.enabled = !!i1063[9]
  return i1062
}

Deserializers["Game.UI.ButtonPulse"] = function (request, data, root) {
  var i1064 = root || request.c( 'Game.UI.ButtonPulse' )
  var i1065 = data
  i1064.pulseScale = i1065[0]
  i1064.pulseTime = i1065[1]
  i1064.startDelay = i1065[2]
  return i1064
}

Deserializers["Game.UI.CategoryTabButton"] = function (request, data, root) {
  var i1066 = root || request.c( 'Game.UI.CategoryTabButton' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'icon')
  request.r(i1067[2], i1067[3], 0, i1066, 'selectedFrame')
  return i1066
}

Deserializers["Game.UI.PaletteItemCard"] = function (request, data, root) {
  var i1068 = root || request.c( 'Game.UI.PaletteItemCard' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'icon')
  request.r(i1069[2], i1069[3], 0, i1068, 'selectedFrame')
  i1068.iconPadding = i1069[4]
  request.r(i1069[5], i1069[6], 0, i1068, 'lockedOverlaySprite')
  request.r(i1069[7], i1069[8], 0, i1068, 'adBadgeSprite')
  request.r(i1069[9], i1069[10], 0, i1068, 'taskBadgeSprite')
  i1068.badgeSize = new pc.Vec2( i1069[11], i1069[12] )
  i1068.badgeOffset = new pc.Vec2( i1069[13], i1069[14] )
  i1068.lockedIconTint = new pc.Color(i1069[15], i1069[16], i1069[17], i1069[18])
  return i1068
}

Deserializers["Game.UI.UnlockCollectionScreen"] = function (request, data, root) {
  var i1070 = root || request.c( 'Game.UI.UnlockCollectionScreen' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'group')
  request.r(i1071[2], i1071[3], 0, i1070, 'panel')
  request.r(i1071[4], i1071[5], 0, i1070, 'scrollRect')
  request.r(i1071[6], i1071[7], 0, i1070, 'content')
  request.r(i1071[8], i1071[9], 0, i1070, 'cardPrefab')
  request.r(i1071[10], i1071[11], 0, i1070, 'closeButton')
  request.r(i1071[12], i1071[13], 0, i1070, 'dimButton')
  i1070.rowSpacing = i1071[14]
  i1070.rowHeight = i1071[15]
  request.r(i1071[16], i1071[17], 0, i1070, 'arrowSprite')
  i1070.arrowSize = new pc.Vec2( i1071[18], i1071[19] )
  i1070.arrowActive = new pc.Color(i1071[20], i1071[21], i1071[22], i1071[23])
  i1070.arrowDim = new pc.Color(i1071[24], i1071[25], i1071[26], i1071[27])
  i1070.fadeDuration = i1071[28]
  i1070.openFromScale = i1071[29]
  return i1070
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1073 = data
  i1072.m_Spacing = i1073[0]
  i1072.m_ChildForceExpandWidth = !!i1073[1]
  i1072.m_ChildForceExpandHeight = !!i1073[2]
  i1072.m_ChildControlWidth = !!i1073[3]
  i1072.m_ChildControlHeight = !!i1073[4]
  i1072.m_ChildScaleWidth = !!i1073[5]
  i1072.m_ChildScaleHeight = !!i1073[6]
  i1072.m_ReverseArrangement = !!i1073[7]
  i1072.m_Padding = UnityEngine.RectOffset.FromPaddings(i1073[8], i1073[9], i1073[10], i1073[11])
  i1072.m_ChildAlignment = i1073[12]
  return i1072
}

Deserializers["Game.UI.UnlockCollectionCard"] = function (request, data, root) {
  var i1074 = root || request.c( 'Game.UI.UnlockCollectionCard' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'background')
  request.r(i1075[2], i1075[3], 0, i1074, 'icon')
  request.r(i1075[4], i1075[5], 0, i1074, 'itemName')
  request.r(i1075[6], i1075[7], 0, i1074, 'requirement')
  request.r(i1075[8], i1075[9], 0, i1074, 'progressLabel')
  request.r(i1075[10], i1075[11], 0, i1074, 'progressFill')
  request.r(i1075[12], i1075[13], 0, i1074, 'ownedMark')
  i1074.unlockedTint = new pc.Color(i1075[14], i1075[15], i1075[16], i1075[17])
  i1074.availableTint = new pc.Color(i1075[18], i1075[19], i1075[20], i1075[21])
  i1074.gatedTint = new pc.Color(i1075[22], i1075[23], i1075[24], i1075[25])
  i1074.unlockedBg = new pc.Color(i1075[26], i1075[27], i1075[28], i1075[29])
  i1074.availableBg = new pc.Color(i1075[30], i1075[31], i1075[32], i1075[33])
  i1074.gatedBg = new pc.Color(i1075[34], i1075[35], i1075[36], i1075[37])
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.index = i1077[1]
  i1076.startup = !!i1077[2]
  return i1076
}

Deserializers["Game.Gameplay.PlayableBootstrap"] = function (request, data, root) {
  var i1078 = root || request.c( 'Game.Gameplay.PlayableBootstrap' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'gameConfig')
  i1078.detectDeviceTier = !!i1079[2]
  i1078.deviceTier = i1079[3]
  request.r(i1079[4], i1079[5], 0, i1078, 'unlockPopupPrefab')
  request.r(i1079[6], i1079[7], 0, i1078, 'unlockToastPrefab')
  i1078.mapBounds = UnityEngine.Rect.MinMaxRect(i1079[8], i1079[9], i1079[10], i1079[11])
  request.r(i1079[12], i1079[13], 0, i1078, 'tilesRoot')
  var i1081 = i1079[14]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.spawnPoints = i1080
  request.r(i1079[15], i1079[16], 0, i1078, 'zombieItem')
  i1078.zombieCount = i1079[17]
  i1078.zombieSpawnX = new pc.Vec2( i1079[18], i1079[19] )
  i1078.zombieSpawnY = i1079[20]
  i1078.zombieMinGap = i1079[21]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1085 = data
  i1084.aspect = i1085[0]
  i1084.orthographic = !!i1085[1]
  i1084.orthographicSize = i1085[2]
  i1084.backgroundColor = new pc.Color(i1085[3], i1085[4], i1085[5], i1085[6])
  i1084.nearClipPlane = i1085[7]
  i1084.farClipPlane = i1085[8]
  i1084.fieldOfView = i1085[9]
  i1084.depth = i1085[10]
  i1084.clearFlags = i1085[11]
  i1084.cullingMask = i1085[12]
  i1084.rect = i1085[13]
  request.r(i1085[14], i1085[15], 0, i1084, 'targetTexture')
  i1084.usePhysicalProperties = !!i1085[16]
  i1084.focalLength = i1085[17]
  i1084.sensorSize = new pc.Vec2( i1085[18], i1085[19] )
  i1084.lensShift = new pc.Vec2( i1085[20], i1085[21] )
  i1084.gateFit = i1085[22]
  i1084.commandBufferCount = i1085[23]
  i1084.cameraType = i1085[24]
  i1084.enabled = !!i1085[25]
  return i1084
}

Deserializers["Game.Gameplay.CameraController"] = function (request, data, root) {
  var i1086 = root || request.c( 'Game.Gameplay.CameraController' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'targetCamera')
  request.r(i1087[2], i1087[3], 0, i1086, 'config')
  i1086.lockZoom = !!i1087[4]
  i1086.minView = new pc.Vec2( i1087[5], i1087[6] )
  return i1086
}

Deserializers["Game.Gameplay.ItemSpawnTool"] = function (request, data, root) {
  var i1088 = root || request.c( 'Game.Gameplay.ItemSpawnTool' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'targetCamera')
  i1088.spawnCooldown = i1089[2]
  return i1088
}

Deserializers["Game.Gameplay.LinkTool"] = function (request, data, root) {
  var i1090 = root || request.c( 'Game.Gameplay.LinkTool' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'targetCamera')
  request.r(i1091[2], i1091[3], 0, i1090, 'lineTexture')
  i1090.lineWidth = i1091[4]
  i1090.lineColour = new pc.Color(i1091[5], i1091[6], i1091[7], i1091[8])
  request.r(i1091[9], i1091[10], 0, i1090, 'nodeSprite')
  i1090.nodeScale = i1091[11]
  return i1090
}

Deserializers["Game.Gameplay.DragTool"] = function (request, data, root) {
  var i1092 = root || request.c( 'Game.Gameplay.DragTool' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'targetCamera')
  request.r(i1093[2], i1093[3], 0, i1092, 'config')
  request.r(i1093[4], i1093[5], 0, i1092, 'spawnTool')
  return i1092
}

Deserializers["Game.Gameplay.CameraPanZoom"] = function (request, data, root) {
  var i1094 = root || request.c( 'Game.Gameplay.CameraPanZoom' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'controller')
  request.r(i1095[2], i1095[3], 0, i1094, 'spawnTool')
  request.r(i1095[4], i1095[5], 0, i1094, 'dragTool')
  return i1094
}

Deserializers["Game.Gameplay.ItemSpawnPoint"] = function (request, data, root) {
  var i1096 = root || request.c( 'Game.Gameplay.ItemSpawnPoint' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'item')
  i1096.facing = i1097[2]
  i1096.isPlayer = !!i1097[3]
  i1096.dormant = !!i1097[4]
  return i1096
}

Deserializers["Game.Gameplay.MapTile"] = function (request, data, root) {
  var i1098 = root || request.c( 'Game.Gameplay.MapTile' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'item')
  return i1098
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'm_FirstSelected')
  i1100.m_sendNavigationEvents = !!i1101[2]
  i1100.m_DragThreshold = i1101[3]
  return i1100
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1103 = data
  i1102.m_HorizontalAxis = i1103[0]
  i1102.m_VerticalAxis = i1103[1]
  i1102.m_SubmitButton = i1103[2]
  i1102.m_CancelButton = i1103[3]
  i1102.m_InputActionsPerSecond = i1103[4]
  i1102.m_RepeatDelay = i1103[5]
  i1102.m_ForceModuleActive = !!i1103[6]
  i1102.m_SendPointerHoverToParent = !!i1103[7]
  return i1102
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1104 = root || request.c( 'LunaController' )
  var i1105 = data
  i1104.UseTime = !!i1105[0]
  i1104.TimePlay = i1105[1]
  i1104.UseCustomBG = !!i1105[2]
  request.r(i1105[3], i1105[4], 0, i1104, 'BGTexture')
  i1104.UseCustomWarning = !!i1105[5]
  i1104.WarningText = i1105[6]
  i1104.ZombieCount = i1105[7]
  i1104.MaxRestart = i1105[8]
  i1104.EndPlay = !!i1105[9]
  i1104.WeaponCTA = !!i1105[10]
  i1104.SpecialCTA = !!i1105[11]
  i1104.LimitDrop = !!i1105[12]
  i1104.CountDrop = i1105[13]
  i1104.GrowZombie = !!i1105[14]
  request.r(i1105[15], i1105[16], 0, i1104, 'bootstrap')
  request.r(i1105[17], i1105[18], 0, i1104, 'intro')
  request.r(i1105[19], i1105[20], 0, i1104, 'customBG')
  var i1107 = i1105[21]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 1, i1106, '')
  }
  i1104.CTA = i1106
  request.r(i1105[22], i1105[23], 0, i1104, 'endCard')
  return i1104
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1110 = root || request.c( 'AudioController' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'BGM')
  request.r(i1111[2], i1111[3], 0, i1110, 'musicSource')
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1113 = data
  i1112.ambientIntensity = i1113[0]
  i1112.reflectionIntensity = i1113[1]
  i1112.ambientMode = i1113[2]
  i1112.ambientLight = new pc.Color(i1113[3], i1113[4], i1113[5], i1113[6])
  i1112.ambientSkyColor = new pc.Color(i1113[7], i1113[8], i1113[9], i1113[10])
  i1112.ambientGroundColor = new pc.Color(i1113[11], i1113[12], i1113[13], i1113[14])
  i1112.ambientEquatorColor = new pc.Color(i1113[15], i1113[16], i1113[17], i1113[18])
  i1112.fogColor = new pc.Color(i1113[19], i1113[20], i1113[21], i1113[22])
  i1112.fogEndDistance = i1113[23]
  i1112.fogStartDistance = i1113[24]
  i1112.fogDensity = i1113[25]
  i1112.fog = !!i1113[26]
  request.r(i1113[27], i1113[28], 0, i1112, 'skybox')
  i1112.fogMode = i1113[29]
  var i1115 = i1113[30]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1115[i + 0]) );
  }
  i1112.lightmaps = i1114
  i1112.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1113[31], i1112.lightProbes)
  i1112.lightmapsMode = i1113[32]
  i1112.mixedBakeMode = i1113[33]
  i1112.environmentLightingMode = i1113[34]
  i1112.ambientProbe = new pc.SphericalHarmonicsL2(i1113[35])
  request.r(i1113[36], i1113[37], 0, i1112, 'customReflection')
  request.r(i1113[38], i1113[39], 0, i1112, 'defaultReflection')
  i1112.defaultReflectionMode = i1113[40]
  i1112.defaultReflectionResolution = i1113[41]
  i1112.sunLightObjectId = i1113[42]
  i1112.pixelLightCount = i1113[43]
  i1112.defaultReflectionHDR = !!i1113[44]
  i1112.hasLightDataAsset = !!i1113[45]
  i1112.hasManualGenerate = !!i1113[46]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'lightmapColor')
  request.r(i1119[2], i1119[3], 0, i1118, 'lightmapDirection')
  request.r(i1119[4], i1119[5], 0, i1118, 'shadowMask')
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1120 = root || new UnityEngine.LightProbes()
  var i1121 = data
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1131[i + 0]));
  }
  i1128.ShaderCompilationErrors = i1130
  i1128.name = i1129[1]
  i1128.guid = i1129[2]
  var i1133 = i1129[3]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1128.shaderDefinedKeywords = i1132
  var i1135 = i1129[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1135[i + 0]) );
  }
  i1128.passes = i1134
  var i1137 = i1129[5]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1137[i + 0]) );
  }
  i1128.usePasses = i1136
  var i1139 = i1129[6]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1139[i + 0]) );
  }
  i1128.defaultParameterValues = i1138
  request.r(i1129[7], i1129[8], 0, i1128, 'unityFallbackShader')
  i1128.readDepth = !!i1129[9]
  i1128.hasDepthOnlyPass = !!i1129[10]
  i1128.isCreatedByShaderGraph = !!i1129[11]
  i1128.disableBatching = !!i1129[12]
  i1128.compiled = !!i1129[13]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1143 = data
  i1142.shaderName = i1143[0]
  i1142.errorMessage = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1148 = root || new pc.UnityShaderPass()
  var i1149 = data
  i1148.id = i1149[0]
  i1148.subShaderIndex = i1149[1]
  i1148.name = i1149[2]
  i1148.passType = i1149[3]
  i1148.grabPassTextureName = i1149[4]
  i1148.usePass = !!i1149[5]
  i1148.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[6], i1148.zTest)
  i1148.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[7], i1148.zWrite)
  i1148.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[8], i1148.culling)
  i1148.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1149[9], i1148.blending)
  i1148.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1149[10], i1148.alphaBlending)
  i1148.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[11], i1148.colorWriteMask)
  i1148.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[12], i1148.offsetUnits)
  i1148.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[13], i1148.offsetFactor)
  i1148.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[14], i1148.stencilRef)
  i1148.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[15], i1148.stencilReadMask)
  i1148.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1149[16], i1148.stencilWriteMask)
  i1148.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1149[17], i1148.stencilOp)
  i1148.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1149[18], i1148.stencilOpFront)
  i1148.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1149[19], i1148.stencilOpBack)
  var i1151 = i1149[20]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1151[i + 0]) );
  }
  i1148.tags = i1150
  var i1153 = i1149[21]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1148.passDefinedKeywords = i1152
  var i1155 = i1149[22]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1155[i + 0]) );
  }
  i1148.passDefinedKeywordGroups = i1154
  var i1157 = i1149[23]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1157[i + 0]) );
  }
  i1148.variants = i1156
  var i1159 = i1149[24]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1159[i + 0]) );
  }
  i1148.excludedVariants = i1158
  i1148.hasDepthReader = !!i1149[25]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1161 = data
  i1160.val = i1161[0]
  i1160.name = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1163 = data
  i1162.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[0], i1162.src)
  i1162.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[1], i1162.dst)
  i1162.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[2], i1162.op)
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1165 = data
  i1164.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[0], i1164.pass)
  i1164.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[1], i1164.fail)
  i1164.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[2], i1164.zFail)
  i1164.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[3], i1164.comp)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.value = i1169[1]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1172.keywords = i1174
  i1172.hasDiscard = !!i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1179 = data
  i1178.passId = i1179[0]
  i1178.subShaderIndex = i1179[1]
  var i1181 = i1179[2]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1178.keywords = i1180
  i1178.vertexProgram = i1179[3]
  i1178.fragmentProgram = i1179[4]
  i1178.exportedForWebGl2 = !!i1179[5]
  i1178.readDepth = !!i1179[6]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'shader')
  i1184.pass = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.type = i1189[1]
  i1188.value = new pc.Vec4( i1189[2], i1189[3], i1189[4], i1189[5] )
  i1188.textureValue = i1189[6]
  i1188.shaderPropertyFlag = i1189[7]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1191 = data
  i1190.name = i1191[0]
  request.r(i1191[1], i1191[2], 0, i1190, 'texture')
  i1190.aabb = i1191[3]
  i1190.vertices = i1191[4]
  i1190.triangles = i1191[5]
  i1190.textureRect = UnityEngine.Rect.MinMaxRect(i1191[6], i1191[7], i1191[8], i1191[9])
  i1190.packedRect = UnityEngine.Rect.MinMaxRect(i1191[10], i1191[11], i1191[12], i1191[13])
  i1190.border = new pc.Vec4( i1191[14], i1191[15], i1191[16], i1191[17] )
  i1190.transparency = i1191[18]
  i1190.bounds = i1191[19]
  i1190.pixelsPerUnit = i1191[20]
  i1190.textureWidth = i1191[21]
  i1190.textureHeight = i1191[22]
  i1190.nativeSize = new pc.Vec2( i1191[23], i1191[24] )
  i1190.pivot = new pc.Vec2( i1191[25], i1191[26] )
  i1190.textureRectOffset = new pc.Vec2( i1191[27], i1191[28] )
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1193 = data
  i1192.name = i1193[0]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.bytes64 = i1195[1]
  i1194.data = i1195[2]
  return i1194
}

Deserializers["Game.Data.GameConfigSO"] = function (request, data, root) {
  var i1196 = root || request.c( 'Game.Data.GameConfigSO' )
  var i1197 = data
  i1196.targetFrameRate = i1197[0]
  i1196.frameBudget = request.d('Game.Data.FrameBudgetConfig', i1197[1], i1196.frameBudget)
  i1196.lowTierMaxMemoryMB = i1197[2]
  i1196.highTierMinMemoryMB = i1197[3]
  i1196.highTierMinCores = i1197[4]
  var i1199 = i1197[5]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1196.categories = i1198
  var i1201 = i1197[6]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 2, i1200, '')
  }
  i1196.indestructibleItems = i1200
  request.r(i1197[7], i1197[8], 0, i1196, 'banIcon')
  i1196.banHoldSeconds = i1197[9]
  i1196.banFadeSeconds = i1197[10]
  request.r(i1197[11], i1197[12], 0, i1196, 'backdropTile')
  request.r(i1197[13], i1197[14], 0, i1196, 'sfx')
  request.r(i1197[15], i1197[16], 0, i1196, 'spawnEffect')
  request.r(i1197[17], i1197[18], 0, i1196, 'bloodEffect')
  request.r(i1197[19], i1197[20], 0, i1196, 'spriteFlashMaterial')
  return i1196
}

Deserializers["Game.Data.FrameBudgetConfig"] = function (request, data, root) {
  var i1202 = root || request.c( 'Game.Data.FrameBudgetConfig' )
  var i1203 = data
  i1202.simMsPerFrame = i1203[0]
  i1202.tierScaleLow = i1203[1]
  i1202.tierScaleMid = i1203[2]
  i1202.tierScaleHigh = i1203[3]
  var i1205 = i1203[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Game.Data.FrameBudgetConfig+CategoryCap', i1205[i + 0]) );
  }
  i1202.categoryCaps = i1204
  return i1202
}

Deserializers["Game.Data.FrameBudgetConfig+CategoryCap"] = function (request, data, root) {
  var i1208 = root || request.c( 'Game.Data.FrameBudgetConfig+CategoryCap' )
  var i1209 = data
  i1208.category = i1209[0]
  i1208.capPerFrame = i1209[1]
  return i1208
}

Deserializers["Game.Data.UICategorySO"] = function (request, data, root) {
  var i1214 = root || request.c( 'Game.Data.UICategorySO' )
  var i1215 = data
  i1214.categoryId = i1215[0]
  i1214.displayName = i1215[1]
  request.r(i1215[2], i1215[3], 0, i1214, 'icon')
  i1214.sortOrder = i1215[4]
  i1214.fullBleedIcons = !!i1215[5]
  var i1217 = i1215[6]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Data.ItemSO')))
  for(var i = 0; i < i1217.length; i += 2) {
  request.r(i1217[i + 0], i1217[i + 1], 1, i1216, '')
  }
  i1214.items = i1216
  return i1214
}

Deserializers["Game.Data.ItemSO"] = function (request, data, root) {
  var i1220 = root || request.c( 'Game.Data.ItemSO' )
  var i1221 = data
  i1220.itemId = i1221[0]
  i1220.displayName = i1221[1]
  request.r(i1221[2], i1221[3], 0, i1220, 'icon')
  i1220.iconRotation = i1221[4]
  request.r(i1221[5], i1221[6], 0, i1220, 'prefab')
  i1220.type = i1221[7]
  i1220.creature = request.d('Game.Data.CreatureStats', i1221[8], i1220.creature)
  i1220.weapon = request.d('Game.Data.WeaponStats', i1221[9], i1220.weapon)
  i1220.tile = request.d('Game.Data.TileStats', i1221[10], i1220.tile)
  i1220.explosive = request.d('Game.Data.ExplosiveStats', i1221[11], i1220.explosive)
  i1220.prop = request.d('Game.Data.PropStats', i1221[12], i1220.prop)
  i1220.wearable = request.d('Game.Data.WearableStats', i1221[13], i1220.wearable)
  i1220.fragments = request.d('Game.Data.FragmentProfile', i1221[14], i1220.fragments)
  request.r(i1221[15], i1221[16], 0, i1220, 'category')
  i1220.unlock = request.d('Game.Data.ItemUnlock', i1221[17], i1220.unlock)
  return i1220
}

Deserializers["Game.Data.CreatureStats"] = function (request, data, root) {
  var i1222 = root || request.c( 'Game.Data.CreatureStats' )
  var i1223 = data
  i1222.type = i1223[0]
  i1222.maxHealth = i1223[1]
  i1222.infectable = !!i1223[2]
  request.r(i1223[3], i1223[4], 0, i1222, 'infectedForm')
  request.r(i1223[5], i1223[6], 0, i1222, 'curedForm')
  request.r(i1223[7], i1223[8], 0, i1222, 'torso')
  request.r(i1223[9], i1223[10], 0, i1222, 'head')
  request.r(i1223[11], i1223[12], 0, i1222, 'leftArm')
  request.r(i1223[13], i1223[14], 0, i1222, 'rightArm')
  request.r(i1223[15], i1223[16], 0, i1222, 'leftLeg')
  request.r(i1223[17], i1223[18], 0, i1222, 'rightLeg')
  request.r(i1223[19], i1223[20], 0, i1222, 'lodSprite')
  i1222.bloodColor = new pc.Color(i1223[21], i1223[22], i1223[23], i1223[24])
  i1222.behaviorKind = i1223[25]
  i1222.moveSpeed = i1223[26]
  i1222.detectionRadius = i1223[27]
  var i1225 = i1223[28]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 2) {
  request.r(i1225[i + 0], i1225[i + 1], 2, i1224, '')
  }
  i1222.hurtClips = i1224
  i1222.hurtVoiceChance = i1223[29]
  request.r(i1223[30], i1223[31], 0, i1222, 'deathClip')
  request.r(i1223[32], i1223[33], 0, i1222, 'infectedClip')
  var i1227 = i1223[34]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 2, i1226, '')
  }
  i1222.idleVoiceClips = i1226
  i1222.idleVoiceInterval = new pc.Vec2( i1223[35], i1223[36] )
  return i1222
}

Deserializers["Game.Data.WeaponStats"] = function (request, data, root) {
  var i1230 = root || request.c( 'Game.Data.WeaponStats' )
  var i1231 = data
  i1230.kind = i1231[0]
  i1230.pickupRadius = i1231[1]
  i1230.range = i1231[2]
  i1230.fireRate = i1231[3]
  i1230.damage = i1231[4]
  i1230.knockback = i1231[5]
  i1230.recoil = i1231[6]
  i1230.projectileSpeed = i1231[7]
  i1230.muzzleOffset = new pc.Vec2( i1231[8], i1231[9] )
  var i1233 = i1231[10]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Game.Data.WeaponEffect', i1233[i + 0]) );
  }
  i1230.fireEffects = i1232
  var i1235 = i1231[11]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Game.Data.WeaponHitEffect', i1235[i + 0]) );
  }
  i1230.hitEffects = i1234
  request.r(i1231[12], i1231[13], 0, i1230, 'projectileSprite')
  i1230.projectileScale = i1231[14]
  i1230.projectileRotation = i1231[15]
  i1230.hideOnShot = !!i1231[16]
  i1230.reappearLead = i1231[17]
  i1230.pelletCount = i1231[18]
  i1230.spreadDegrees = i1231[19]
  request.r(i1231[20], i1231[21], 0, i1230, 'launchedItem')
  i1230.launchAngle = i1231[22]
  i1230.launchGravity = i1231[23]
  i1230.windupAngle = i1231[24]
  i1230.followAngle = i1231[25]
  i1230.armSpeed = i1231[26]
  i1230.impactKick = i1231[27]
  i1230.grip = i1231[28]
  i1230.readyArmAngle = i1231[29]
  i1230.useReadyStance = !!i1231[30]
  i1230.supportArmOffset = i1231[31]
  i1230.gripPoint = new pc.Vec2( i1231[32], i1231[33] )
  i1230.gripRotation = i1231[34]
  i1230.scale = i1231[35]
  i1230.sortingLayer = i1231[36]
  i1230.sortingOrder = i1231[37]
  var i1237 = i1231[38]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 2, i1236, '')
  }
  i1230.attackClips = i1236
  i1230.attackVolume = i1231[39]
  i1230.attackPitch = i1231[40]
  i1230.fitFireRate = !!i1231[41]
  i1230.attackPitchJitter = i1231[42]
  var i1239 = i1231[43]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1230.hitClips = i1238
  var i1241 = i1231[44]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 2, i1240, '')
  }
  i1230.pickupClips = i1240
  return i1230
}

Deserializers["Game.Data.WeaponEffect"] = function (request, data, root) {
  var i1244 = root || request.c( 'Game.Data.WeaponEffect' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'prefab')
  i1244.offset = new pc.Vec2( i1245[2], i1245[3] )
  i1244.rotation = i1245[4]
  i1244.scale = i1245[5]
  i1244.attached = !!i1245[6]
  return i1244
}

Deserializers["Game.Data.WeaponHitEffect"] = function (request, data, root) {
  var i1248 = root || request.c( 'Game.Data.WeaponHitEffect' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'prefab')
  i1248.offset = new pc.Vec2( i1249[2], i1249[3] )
  i1248.rotation = i1249[4]
  i1248.scale = i1249[5]
  i1248.attached = !!i1249[6]
  return i1248
}

Deserializers["Game.Data.TileStats"] = function (request, data, root) {
  var i1250 = root || request.c( 'Game.Data.TileStats' )
  var i1251 = data
  i1250.isBackgroundTile = !!i1251[0]
  i1250.maxHealth = i1251[1]
  i1250.crackRecoverDelay = i1251[2]
  i1250.crackRecoverSeconds = i1251[3]
  request.r(i1251[4], i1251[5], 0, i1250, 'placeClip')
  request.r(i1251[6], i1251[7], 0, i1250, 'breakClip')
  return i1250
}

Deserializers["Game.Data.ExplosiveStats"] = function (request, data, root) {
  var i1252 = root || request.c( 'Game.Data.ExplosiveStats' )
  var i1253 = data
  i1252.kind = i1253[0]
  i1252.trigger = i1253[1]
  i1252.fuseSeconds = i1253[2]
  i1252.scale = i1253[3]
  i1252.bodyShape = i1253[4]
  i1252.noseAngle = i1253[5]
  i1252.radius = i1253[6]
  i1252.damage = i1253[7]
  i1252.force = i1253[8]
  i1252.blastArc = i1253[9]
  i1252.blastFacing = i1253[10]
  request.r(i1253[11], i1253[12], 0, i1252, 'detonateEffect')
  i1252.detonateEffectScale = i1253[13]
  i1252.screenShakeStrength = i1253[14]
  i1252.screenShakeDuration = i1253[15]
  i1252.thrust = i1253[16]
  i1252.maxSpeed = i1253[17]
  request.r(i1253[18], i1253[19], 0, i1252, 'trailEffect')
  i1252.trailOffset = i1253[20]
  i1252.trailScale = i1253[21]
  i1252.blinkColor = new pc.Color(i1253[22], i1253[23], i1253[24], i1253[25])
  i1252.blinkStartInterval = i1253[26]
  i1252.blinkEndInterval = i1253[27]
  request.r(i1253[28], i1253[29], 0, i1252, 'smokeEffect')
  i1252.smokeSeconds = i1253[30]
  i1252.smokeScale = i1253[31]
  i1252.armSeconds = i1253[32]
  i1252.settleSpeed = i1253[33]
  request.r(i1253[34], i1253[35], 0, i1252, 'armedSprite')
  i1252.triggerOffset = new pc.Vec2( i1253[36], i1253[37] )
  i1252.triggerSize = new pc.Vec2( i1253[38], i1253[39] )
  var i1255 = i1253[40]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 2, i1254, '')
  }
  i1252.detonateFrames = i1254
  i1252.detonateFrameRate = i1253[41]
  request.r(i1253[42], i1253[43], 0, i1252, 'armClip')
  request.r(i1253[44], i1253[45], 0, i1252, 'flightClip')
  var i1257 = i1253[46]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 2, i1256, '')
  }
  i1252.explodeClips = i1256
  i1252.explodeVolume = i1253[47]
  return i1252
}

Deserializers["Game.Data.PropStats"] = function (request, data, root) {
  var i1258 = root || request.c( 'Game.Data.PropStats' )
  var i1259 = data
  i1258.maxHealth = i1259[0]
  i1258.shardCount = i1259[1]
  i1258.breakOnContact = !!i1259[2]
  i1258.breakableBy = i1259[3]
  i1258.breakImpulse = i1259[4]
  i1258.burstRadius = i1259[5]
  var i1261 = i1259[6]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Game.Data.CreatureEffect', i1261[i + 0]) );
  }
  i1258.burstEffects = i1260
  request.r(i1259[7], i1259[8], 0, i1258, 'burstEffect')
  i1258.burstEffectScale = i1259[9]
  i1258.lureRadius = i1259[10]
  i1258.lureCreatures = i1259[11]
  i1258.lureVerb = i1259[12]
  i1258.lureOverridesTarget = !!i1259[13]
  i1258.kickRange = i1259[14]
  i1258.kickForce = i1259[15]
  i1258.kickLift = i1259[16]
  i1258.kickCooldown = i1259[17]
  i1258.kicksToBreak = i1259[18]
  request.r(i1259[19], i1259[20], 0, i1258, 'kickClip')
  i1258.eatSeconds = i1259[21]
  i1258.eatBitesPerSecond = i1259[22]
  request.r(i1259[23], i1259[24], 0, i1258, 'eatClip')
  var i1263 = i1259[25]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Game.Data.CreatureEffect', i1263[i + 0]) );
  }
  i1258.eatEffects = i1262
  request.r(i1259[26], i1259[27], 0, i1258, 'breakClip')
  return i1258
}

Deserializers["Game.Data.CreatureEffect"] = function (request, data, root) {
  var i1266 = root || request.c( 'Game.Data.CreatureEffect' )
  var i1267 = data
  i1266.kind = i1267[0]
  i1266.magnitude = i1267[1]
  i1266.duration = i1267[2]
  return i1266
}

Deserializers["Game.Data.WearableStats"] = function (request, data, root) {
  var i1268 = root || request.c( 'Game.Data.WearableStats' )
  var i1269 = data
  i1268.wearRadius = i1269[0]
  i1268.effects = request.d('Game.Data.WearableEffects', i1269[1], i1268.effects)
  i1268.wornOffset = new pc.Vec2( i1269[2], i1269[3] )
  i1268.wornScale = i1269[4]
  i1268.wornRotation = i1269[5]
  var i1271 = i1269[6]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Game.Data.WearablePose', i1271[i + 0]) );
  }
  i1268.poses = i1270
  return i1268
}

Deserializers["Game.Data.WearableEffects"] = function (request, data, root) {
  var i1272 = root || request.c( 'Game.Data.WearableEffects' )
  var i1273 = data
  i1272.speedMultiplier = i1273[0]
  i1272.scaleMultiplier = i1273[1]
  i1272.extraJumpBlocks = i1273[2]
  i1272.immuneToInfection = !!i1273[3]
  i1272.ignoredByZombies = !!i1273[4]
  i1272.allowsWeapons = !!i1273[5]
  return i1272
}

Deserializers["Game.Data.WearablePose"] = function (request, data, root) {
  var i1276 = root || request.c( 'Game.Data.WearablePose' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'creature')
  i1276.offset = new pc.Vec2( i1277[2], i1277[3] )
  i1276.scale = i1277[4]
  i1276.rotation = i1277[5]
  return i1276
}

Deserializers["Game.Data.FragmentProfile"] = function (request, data, root) {
  var i1278 = root || request.c( 'Game.Data.FragmentProfile' )
  var i1279 = data
  i1278.enabled = !!i1279[0]
  i1278.launchMode = i1279[1]
  i1278.impactSpeed = i1279[2]
  i1278.impactFalloff = i1279[3]
  i1278.impactInfluence = i1279[4]
  i1278.spinJitter = i1279[5]
  i1278.speedVariance = i1279[6]
  i1278.angleVariance = i1279[7]
  i1278.gravityScale = i1279[8]
  i1278.shardMass = i1279[9]
  i1278.collide = !!i1279[10]
  i1278.preciseColliders = !!i1279[11]
  i1278.fadeDelay = i1279[12]
  i1278.fadeDuration = i1279[13]
  var i1281 = i1279[14]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Data.FragmentPiece')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('Game.Data.FragmentPiece', i1281[i + 0]));
  }
  i1278.pieces = i1280
  return i1278
}

Deserializers["Game.Data.FragmentPiece"] = function (request, data, root) {
  var i1284 = root || request.c( 'Game.Data.FragmentPiece' )
  var i1285 = data
  i1284.rect = UnityEngine.Rect.MinMaxRect(i1285[0], i1285[1], i1285[2], i1285[3])
  var i1287 = i1285[4]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1287.length; i += 2) {
    i1286.add(new pc.Vec2( i1287[i + 0], i1287[i + 1] ));
  }
  i1284.shape = i1286
  i1284.launchAngle = i1285[5]
  i1284.launchSpeed = i1285[6]
  i1284.torque = i1285[7]
  i1284.scale = i1285[8]
  return i1284
}

Deserializers["Game.Data.ItemUnlock"] = function (request, data, root) {
  var i1288 = root || request.c( 'Game.Data.ItemUnlock' )
  var i1289 = data
  i1288.mode = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'prerequisite')
  i1288.requirementText = i1289[3]
  i1288.task = request.d('Game.Data.TaskCondition', i1289[4], i1288.task)
  i1288.adsRequired = i1289[5]
  i1288.adPlacement = i1289[6]
  return i1288
}

Deserializers["Game.Data.TaskCondition"] = function (request, data, root) {
  var i1290 = root || request.c( 'Game.Data.TaskCondition' )
  var i1291 = data
  i1290.verb = i1291[0]
  i1290.subject = request.d('Game.Data.ItemFilter', i1291[1], i1290.subject)
  i1290.target = request.d('Game.Data.ItemFilter', i1291[2], i1290.target)
  i1290.requiredCount = i1291[3]
  return i1290
}

Deserializers["Game.Data.ItemFilter"] = function (request, data, root) {
  var i1292 = root || request.c( 'Game.Data.ItemFilter' )
  var i1293 = data
  i1292.mode = i1293[0]
  i1292.itemType = i1293[1]
  request.r(i1293[2], i1293[3], 0, i1292, 'category')
  request.r(i1293[4], i1293[5], 0, i1292, 'specificItem')
  i1292.creatureType = i1293[6]
  return i1292
}

Deserializers["Game.Data.RagdollTuningSO"] = function (request, data, root) {
  var i1294 = root || request.c( 'Game.Data.RagdollTuningSO' )
  var i1295 = data
  i1294.balanceForce = i1295[0]
  i1294.walkLean = i1295[1]
  i1294.airborneStiffness = i1295[2]
  i1294.knockdownImpulse = i1295[3]
  i1294.knockdownRecovery = i1295[4]
  i1294.impactHurtSpeed = i1295[5]
  i1294.impactDamagePerSpeed = i1295[6]
  i1294.impactDamageMax = i1295[7]
  i1294.impactDamageCarried = i1295[8]
  i1294.impactHurtInterval = i1295[9]
  i1294.knockbackScale = i1295[10]
  i1294.knockbackLift = i1295[11]
  i1294.knockbackMaxLift = i1295[12]
  i1294.knockbackRetain = i1295[13]
  i1294.clawKnockback = i1295[14]
  i1294.clawInterval = i1295[15]
  i1294.clawArmThrow = i1295[16]
  i1294.clawInfection = i1295[17]
  i1294.infectionDecay = i1295[18]
  i1294.headSpring = i1295[19]
  i1294.headDamp = i1295[20]
  i1294.neckStrength = i1295[21]
  i1294.hipStrength = i1295[22]
  i1294.muscleGain = i1295[23]
  i1294.muscleMaxSpeed = i1295[24]
  i1294.cadence = i1295[25]
  i1294.hipSwing = i1295[26]
  i1294.hipForwardSign = i1295[27]
  i1294.stepLift = i1295[28]
  i1294.assistGain = i1295[29]
  i1294.pushOffset = i1295[30]
  i1294.stanceFriction = i1295[31]
  i1294.swingFriction = i1295[32]
  i1294.armReachSpread = i1295[33]
  i1294.armReachStrength = i1295[34]
  i1294.reachSway = i1295[35]
  i1294.reachSwaySpeed = i1295[36]
  i1294.reachSettle = i1295[37]
  i1294.armAimCone = i1295[38]
  i1294.armCone = i1295[39]
  i1294.armSwingSpeed = i1295[40]
  i1294.armIdleTorque = i1295[41]
  return i1294
}

Deserializers["Game.Data.SfxLibrarySO"] = function (request, data, root) {
  var i1298 = root || request.c( 'Game.Data.SfxLibrarySO' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'uiClick')
  request.r(i1299[2], i1299[3], 0, i1298, 'error')
  request.r(i1299[4], i1299[5], 0, i1298, 'mailArrived')
  request.r(i1299[6], i1299[7], 0, i1298, 'unlockReveal')
  request.r(i1299[8], i1299[9], 0, i1298, 'itemSpawn')
  request.r(i1299[10], i1299[11], 0, i1298, 'itemDelete')
  request.r(i1299[12], i1299[13], 0, i1298, 'itemDrop')
  request.r(i1299[14], i1299[15], 0, i1298, 'tilePlace')
  request.r(i1299[16], i1299[17], 0, i1298, 'tileBreak')
  request.r(i1299[18], i1299[19], 0, i1298, 'propBreak')
  var i1301 = i1299[20]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 2, i1300, '')
  }
  i1298.weaponPickup = i1300
  var i1303 = i1299[21]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 2, i1302, '')
  }
  i1298.wearablePickup = i1302
  return i1298
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1305 = data
  i1304.normalStyle = i1305[0]
  i1304.normalSpacingOffset = i1305[1]
  i1304.boldStyle = i1305[2]
  i1304.boldSpacing = i1305[3]
  i1304.italicStyle = i1305[4]
  i1304.tabSize = i1305[5]
  request.r(i1305[6], i1305[7], 0, i1304, 'atlas')
  i1304.m_SourceFontFileGUID = i1305[8]
  i1304.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1305[9], i1304.m_CreationSettings)
  request.r(i1305[10], i1305[11], 0, i1304, 'm_SourceFontFile')
  i1304.m_SourceFontFilePath = i1305[12]
  i1304.m_AtlasPopulationMode = i1305[13]
  i1304.InternalDynamicOS = !!i1305[14]
  var i1307 = i1305[15]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('UnityEngine.TextCore.Glyph', i1307[i + 0]));
  }
  i1304.m_GlyphTable = i1306
  var i1309 = i1305[16]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Character', i1309[i + 0]));
  }
  i1304.m_CharacterTable = i1308
  var i1311 = i1305[17]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1304.m_AtlasTextures = i1310
  i1304.m_AtlasTextureIndex = i1305[18]
  i1304.m_IsMultiAtlasTexturesEnabled = !!i1305[19]
  i1304.m_GetFontFeatures = !!i1305[20]
  i1304.m_ClearDynamicDataOnBuild = !!i1305[21]
  i1304.m_AtlasWidth = i1305[22]
  i1304.m_AtlasHeight = i1305[23]
  i1304.m_AtlasPadding = i1305[24]
  i1304.m_AtlasRenderMode = i1305[25]
  var i1313 = i1305[26]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('UnityEngine.TextCore.GlyphRect', i1313[i + 0]));
  }
  i1304.m_UsedGlyphRects = i1312
  var i1315 = i1305[27]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.TextCore.GlyphRect', i1315[i + 0]));
  }
  i1304.m_FreeGlyphRects = i1314
  i1304.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1305[28], i1304.m_FontFeatureTable)
  i1304.m_ShouldReimportFontFeatures = !!i1305[29]
  var i1317 = i1305[30]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1317.length; i += 2) {
  request.r(i1317[i + 0], i1317[i + 1], 1, i1316, '')
  }
  i1304.m_FallbackFontAssetTable = i1316
  var i1319 = i1305[31]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('TMPro.TMP_FontWeightPair', i1319[i + 0]) );
  }
  i1304.m_FontWeightTable = i1318
  var i1321 = i1305[32]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('TMPro.TMP_FontWeightPair', i1321[i + 0]) );
  }
  i1304.fontWeights = i1320
  i1304.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1305[33], i1304.m_fontInfo)
  var i1323 = i1305[34]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_Glyph', i1323[i + 0]));
  }
  i1304.m_glyphInfoList = i1322
  i1304.m_KerningTable = request.d('TMPro.KerningTable', i1305[35], i1304.m_KerningTable)
  var i1325 = i1305[36]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1304.fallbackFontAssets = i1324
  i1304.m_Version = i1305[37]
  i1304.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1305[38], i1304.m_FaceInfo)
  request.r(i1305[39], i1305[40], 0, i1304, 'm_Material')
  return i1304
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1327 = data
  i1326.sourceFontFileName = i1327[0]
  i1326.sourceFontFileGUID = i1327[1]
  i1326.faceIndex = i1327[2]
  i1326.pointSizeSamplingMode = i1327[3]
  i1326.pointSize = i1327[4]
  i1326.padding = i1327[5]
  i1326.paddingMode = i1327[6]
  i1326.packingMode = i1327[7]
  i1326.atlasWidth = i1327[8]
  i1326.atlasHeight = i1327[9]
  i1326.characterSetSelectionMode = i1327[10]
  i1326.characterSequence = i1327[11]
  i1326.referencedFontAssetGUID = i1327[12]
  i1326.referencedTextAssetGUID = i1327[13]
  i1326.fontStyle = i1327[14]
  i1326.fontStyleModifier = i1327[15]
  i1326.renderMode = i1327[16]
  i1326.includeFontFeatures = !!i1327[17]
  return i1326
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1331 = data
  i1330.m_Index = i1331[0]
  i1330.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1331[1], i1330.m_Metrics)
  i1330.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1331[2], i1330.m_GlyphRect)
  i1330.m_Scale = i1331[3]
  i1330.m_AtlasIndex = i1331[4]
  i1330.m_ClassDefinitionType = i1331[5]
  return i1330
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1333 = data
  i1332.m_Width = i1333[0]
  i1332.m_Height = i1333[1]
  i1332.m_HorizontalBearingX = i1333[2]
  i1332.m_HorizontalBearingY = i1333[3]
  i1332.m_HorizontalAdvance = i1333[4]
  return i1332
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1335 = data
  i1334.m_X = i1335[0]
  i1334.m_Y = i1335[1]
  i1334.m_Width = i1335[2]
  i1334.m_Height = i1335[3]
  return i1334
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_Character' )
  var i1339 = data
  i1338.m_ElementType = i1339[0]
  i1338.m_Unicode = i1339[1]
  i1338.m_GlyphIndex = i1339[2]
  i1338.m_Scale = i1339[3]
  return i1338
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.MultipleSubstitutionRecord', i1347[i + 0]));
  }
  i1344.m_MultipleSubstitutionRecords = i1346
  var i1349 = i1345[1]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.LigatureSubstitutionRecord', i1349[i + 0]));
  }
  i1344.m_LigatureSubstitutionRecords = i1348
  var i1351 = i1345[2]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1351[i + 0]));
  }
  i1344.m_GlyphPairAdjustmentRecords = i1350
  var i1353 = i1345[3]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1353[i + 0]));
  }
  i1344.m_MarkToBaseAdjustmentRecords = i1352
  var i1355 = i1345[4]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1355[i + 0]));
  }
  i1344.m_MarkToMarkAdjustmentRecords = i1354
  return i1344
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1359 = data
  i1358.m_TargetGlyphID = i1359[0]
  i1358.m_SubstituteGlyphIDs = i1359[1]
  return i1358
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1363 = data
  i1362.m_ComponentGlyphIDs = i1363[0]
  i1362.m_LigatureGlyphID = i1363[1]
  return i1362
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1367 = data
  i1366.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1367[0], i1366.m_FirstAdjustmentRecord)
  i1366.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1367[1], i1366.m_SecondAdjustmentRecord)
  i1366.m_FeatureLookupFlags = i1367[2]
  return i1366
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1371 = data
  i1370.m_BaseGlyphID = i1371[0]
  i1370.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1371[1], i1370.m_BaseGlyphAnchorPoint)
  i1370.m_MarkGlyphID = i1371[2]
  i1370.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1371[3], i1370.m_MarkPositionAdjustment)
  return i1370
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1375 = data
  i1374.m_BaseMarkGlyphID = i1375[0]
  i1374.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1375[1], i1374.m_BaseMarkGlyphAnchorPoint)
  i1374.m_CombiningMarkGlyphID = i1375[2]
  i1374.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1375[3], i1374.m_CombiningMarkPositionAdjustment)
  return i1374
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'regularTypeface')
  request.r(i1381[2], i1381[3], 0, i1380, 'italicTypeface')
  return i1380
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1383 = data
  i1382.Name = i1383[0]
  i1382.PointSize = i1383[1]
  i1382.Scale = i1383[2]
  i1382.CharacterCount = i1383[3]
  i1382.LineHeight = i1383[4]
  i1382.Baseline = i1383[5]
  i1382.Ascender = i1383[6]
  i1382.CapHeight = i1383[7]
  i1382.Descender = i1383[8]
  i1382.CenterLine = i1383[9]
  i1382.SuperscriptOffset = i1383[10]
  i1382.SubscriptOffset = i1383[11]
  i1382.SubSize = i1383[12]
  i1382.Underline = i1383[13]
  i1382.UnderlineThickness = i1383[14]
  i1382.strikethrough = i1383[15]
  i1382.strikethroughThickness = i1383[16]
  i1382.TabWidth = i1383[17]
  i1382.Padding = i1383[18]
  i1382.AtlasWidth = i1383[19]
  i1382.AtlasHeight = i1383[20]
  return i1382
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1386 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1387 = data
  i1386.id = i1387[0]
  i1386.x = i1387[1]
  i1386.y = i1387[2]
  i1386.width = i1387[3]
  i1386.height = i1387[4]
  i1386.xOffset = i1387[5]
  i1386.yOffset = i1387[6]
  i1386.xAdvance = i1387[7]
  i1386.scale = i1387[8]
  return i1386
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.KerningTable' )
  var i1389 = data
  var i1391 = i1389[0]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.add(request.d('TMPro.KerningPair', i1391[i + 0]));
  }
  i1388.kerningPairs = i1390
  return i1388
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.KerningPair' )
  var i1395 = data
  i1394.xOffset = i1395[0]
  i1394.m_FirstGlyph = i1395[1]
  i1394.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1395[2], i1394.m_FirstGlyphAdjustments)
  i1394.m_SecondGlyph = i1395[3]
  i1394.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1395[4], i1394.m_SecondGlyphAdjustments)
  i1394.m_IgnoreSpacingAdjustments = !!i1395[5]
  return i1394
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1397 = data
  i1396.m_FaceIndex = i1397[0]
  i1396.m_FamilyName = i1397[1]
  i1396.m_StyleName = i1397[2]
  i1396.m_PointSize = i1397[3]
  i1396.m_Scale = i1397[4]
  i1396.m_UnitsPerEM = i1397[5]
  i1396.m_LineHeight = i1397[6]
  i1396.m_AscentLine = i1397[7]
  i1396.m_CapLine = i1397[8]
  i1396.m_MeanLine = i1397[9]
  i1396.m_Baseline = i1397[10]
  i1396.m_DescentLine = i1397[11]
  i1396.m_SuperscriptOffset = i1397[12]
  i1396.m_SuperscriptSize = i1397[13]
  i1396.m_SubscriptOffset = i1397[14]
  i1396.m_SubscriptSize = i1397[15]
  i1396.m_UnderlineOffset = i1397[16]
  i1396.m_UnderlineThickness = i1397[17]
  i1396.m_StrikethroughOffset = i1397[18]
  i1396.m_StrikethroughThickness = i1397[19]
  i1396.m_TabWidth = i1397[20]
  return i1396
}

Deserializers["Game.Data.InteractionConfigSO"] = function (request, data, root) {
  var i1398 = root || request.c( 'Game.Data.InteractionConfigSO' )
  var i1399 = data
  i1398.dragMaxForce = i1399[0]
  i1398.zoomMin = i1399[1]
  i1398.zoomMax = i1399[2]
  i1398.zoomStepFactor = i1399[3]
  i1398.zoomSmoothTime = i1399[4]
  i1398.panSlack = i1399[5]
  i1398.settleTime = i1399[6]
  i1398.focusZoomIn = i1399[7]
  return i1398
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1401 = data
  i1400.useSafeMode = !!i1401[0]
  i1400.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1401[1], i1400.safeModeOptions)
  i1400.timeScale = i1401[2]
  i1400.unscaledTimeScale = i1401[3]
  i1400.useSmoothDeltaTime = !!i1401[4]
  i1400.maxSmoothUnscaledTime = i1401[5]
  i1400.rewindCallbackMode = i1401[6]
  i1400.showUnityEditorReport = !!i1401[7]
  i1400.logBehaviour = i1401[8]
  i1400.drawGizmos = !!i1401[9]
  i1400.defaultRecyclable = !!i1401[10]
  i1400.defaultAutoPlay = i1401[11]
  i1400.defaultUpdateType = i1401[12]
  i1400.defaultTimeScaleIndependent = !!i1401[13]
  i1400.defaultEaseType = i1401[14]
  i1400.defaultEaseOvershootOrAmplitude = i1401[15]
  i1400.defaultEasePeriod = i1401[16]
  i1400.defaultAutoKill = !!i1401[17]
  i1400.defaultLoopType = i1401[18]
  i1400.debugMode = !!i1401[19]
  i1400.debugStoreTargetId = !!i1401[20]
  i1400.showPreviewPanel = !!i1401[21]
  i1400.storeSettingsLocation = i1401[22]
  i1400.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1401[23], i1400.modules)
  i1400.createASMDEF = !!i1401[24]
  i1400.showPlayingTweens = !!i1401[25]
  i1400.showPausedTweens = !!i1401[26]
  return i1400
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1402 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1403 = data
  i1402.logBehaviour = i1403[0]
  i1402.nestedTweenFailureBehaviour = i1403[1]
  return i1402
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1404 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1405 = data
  i1404.showPanel = !!i1405[0]
  i1404.audioEnabled = !!i1405[1]
  i1404.physicsEnabled = !!i1405[2]
  i1404.physics2DEnabled = !!i1405[3]
  i1404.spriteEnabled = !!i1405[4]
  i1404.uiEnabled = !!i1405[5]
  i1404.textMeshProEnabled = !!i1405[6]
  i1404.tk2DEnabled = !!i1405[7]
  i1404.deAudioEnabled = !!i1405[8]
  i1404.deUnityExtendedEnabled = !!i1405[9]
  i1404.epoOutlineEnabled = !!i1405[10]
  return i1404
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_Settings' )
  var i1407 = data
  i1406.assetVersion = i1407[0]
  i1406.m_TextWrappingMode = i1407[1]
  i1406.m_enableKerning = !!i1407[2]
  var i1409 = i1407[3]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(i1409[i + 0]);
  }
  i1406.m_ActiveFontFeatures = i1408
  i1406.m_enableExtraPadding = !!i1407[4]
  i1406.m_enableTintAllSprites = !!i1407[5]
  i1406.m_enableParseEscapeCharacters = !!i1407[6]
  i1406.m_EnableRaycastTarget = !!i1407[7]
  i1406.m_GetFontFeaturesAtRuntime = !!i1407[8]
  i1406.m_missingGlyphCharacter = i1407[9]
  i1406.m_ClearDynamicDataOnBuild = !!i1407[10]
  i1406.m_warningsDisabled = !!i1407[11]
  request.r(i1407[12], i1407[13], 0, i1406, 'm_defaultFontAsset')
  i1406.m_defaultFontAssetPath = i1407[14]
  i1406.m_defaultFontSize = i1407[15]
  i1406.m_defaultAutoSizeMinRatio = i1407[16]
  i1406.m_defaultAutoSizeMaxRatio = i1407[17]
  i1406.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1407[18], i1407[19] )
  i1406.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1407[20], i1407[21] )
  i1406.m_autoSizeTextContainer = !!i1407[22]
  i1406.m_IsTextObjectScaleStatic = !!i1407[23]
  var i1411 = i1407[24]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.m_fallbackFontAssets = i1410
  i1406.m_matchMaterialPreset = !!i1407[25]
  i1406.m_HideSubTextObjects = !!i1407[26]
  request.r(i1407[27], i1407[28], 0, i1406, 'm_defaultSpriteAsset')
  i1406.m_defaultSpriteAssetPath = i1407[29]
  i1406.m_enableEmojiSupport = !!i1407[30]
  i1406.m_MissingCharacterSpriteUnicode = i1407[31]
  var i1413 = i1407[32]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 1, i1412, '')
  }
  i1406.m_EmojiFallbackTextAssets = i1412
  i1406.m_defaultColorGradientPresetsPath = i1407[33]
  request.r(i1407[34], i1407[35], 0, i1406, 'm_defaultStyleSheet')
  i1406.m_StyleSheetsResourcePath = i1407[36]
  request.r(i1407[37], i1407[38], 0, i1406, 'm_leadingCharacters')
  request.r(i1407[39], i1407[40], 0, i1406, 'm_followingCharacters')
  i1406.m_UseModernHangulLineBreakingRules = !!i1407[41]
  return i1406
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('TMPro.TMP_Style', i1419[i + 0]));
  }
  i1416.m_StyleList = i1418
  return i1416
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1422 = root || request.c( 'TMPro.TMP_Style' )
  var i1423 = data
  i1422.m_Name = i1423[0]
  i1422.m_HashCode = i1423[1]
  i1422.m_OpeningDefinition = i1423[2]
  i1422.m_ClosingDefinition = i1423[3]
  i1422.m_OpeningTagArray = i1423[4]
  i1422.m_ClosingTagArray = i1423[5]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1427[i + 0]) );
  }
  i1424.files = i1426
  i1424.componentToPrefabIds = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1431 = data
  i1430.path = i1431[0]
  request.r(i1431[1], i1431[2], 0, i1430, 'unityObject')
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1435[i + 0]) );
  }
  i1432.scriptsExecutionOrder = i1434
  var i1437 = i1433[1]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1437[i + 0]) );
  }
  i1432.sortingLayers = i1436
  var i1439 = i1433[2]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1439[i + 0]) );
  }
  i1432.cullingLayers = i1438
  i1432.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1433[3], i1432.timeSettings)
  i1432.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1433[4], i1432.physicsSettings)
  i1432.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1433[5], i1432.physics2DSettings)
  i1432.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[6], i1432.qualitySettings)
  i1432.enableRealtimeShadows = !!i1433[7]
  i1432.enableAutoInstancing = !!i1433[8]
  i1432.enableStaticBatching = !!i1433[9]
  i1432.enableDynamicBatching = !!i1433[10]
  i1432.usePreservativeDynamicBatching = !!i1433[11]
  i1432.lightmapEncodingQuality = i1433[12]
  i1432.desiredColorSpace = i1433[13]
  var i1441 = i1433[14]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( i1441[i + 0] );
  }
  i1432.allTags = i1440
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.value = i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1449 = data
  i1448.id = i1449[0]
  i1448.name = i1449[1]
  i1448.value = i1449[2]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1453 = data
  i1452.id = i1453[0]
  i1452.name = i1453[1]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1455 = data
  i1454.fixedDeltaTime = i1455[0]
  i1454.maximumDeltaTime = i1455[1]
  i1454.timeScale = i1455[2]
  i1454.maximumParticleTimestep = i1455[3]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1457 = data
  i1456.gravity = new pc.Vec3( i1457[0], i1457[1], i1457[2] )
  i1456.defaultSolverIterations = i1457[3]
  i1456.bounceThreshold = i1457[4]
  i1456.autoSyncTransforms = !!i1457[5]
  i1456.autoSimulation = !!i1457[6]
  var i1459 = i1457[7]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1459[i + 0]) );
  }
  i1456.collisionMatrix = i1458
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1463 = data
  i1462.enabled = !!i1463[0]
  i1462.layerId = i1463[1]
  i1462.otherLayerId = i1463[2]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1465 = data
  request.r(i1465[0], i1465[1], 0, i1464, 'material')
  i1464.gravity = new pc.Vec2( i1465[2], i1465[3] )
  i1464.positionIterations = i1465[4]
  i1464.velocityIterations = i1465[5]
  i1464.velocityThreshold = i1465[6]
  i1464.maxLinearCorrection = i1465[7]
  i1464.maxAngularCorrection = i1465[8]
  i1464.maxTranslationSpeed = i1465[9]
  i1464.maxRotationSpeed = i1465[10]
  i1464.baumgarteScale = i1465[11]
  i1464.baumgarteTOIScale = i1465[12]
  i1464.timeToSleep = i1465[13]
  i1464.linearSleepTolerance = i1465[14]
  i1464.angularSleepTolerance = i1465[15]
  i1464.defaultContactOffset = i1465[16]
  i1464.autoSimulation = !!i1465[17]
  i1464.queriesHitTriggers = !!i1465[18]
  i1464.queriesStartInColliders = !!i1465[19]
  i1464.callbacksOnDisable = !!i1465[20]
  i1464.reuseCollisionCallbacks = !!i1465[21]
  i1464.autoSyncTransforms = !!i1465[22]
  var i1467 = i1465[23]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1467[i + 0]) );
  }
  i1464.collisionMatrix = i1466
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1471 = data
  i1470.enabled = !!i1471[0]
  i1470.layerId = i1471[1]
  i1470.otherLayerId = i1471[2]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1473 = data
  var i1475 = i1473[0]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1475[i + 0]) );
  }
  i1472.qualityLevels = i1474
  var i1477 = i1473[1]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( i1477[i + 0] );
  }
  i1472.names = i1476
  i1472.shadows = i1473[2]
  i1472.anisotropicFiltering = i1473[3]
  i1472.antiAliasing = i1473[4]
  i1472.lodBias = i1473[5]
  i1472.shadowCascades = i1473[6]
  i1472.shadowDistance = i1473[7]
  i1472.shadowmaskMode = i1473[8]
  i1472.shadowProjection = i1473[9]
  i1472.shadowResolution = i1473[10]
  i1472.softParticles = !!i1473[11]
  i1472.softVegetation = !!i1473[12]
  i1472.activeColorSpace = i1473[13]
  i1472.desiredColorSpace = i1473[14]
  i1472.masterTextureLimit = i1473[15]
  i1472.maxQueuedFrames = i1473[16]
  i1472.particleRaycastBudget = i1473[17]
  i1472.pixelLightCount = i1473[18]
  i1472.realtimeReflectionProbes = !!i1473[19]
  i1472.shadowCascade2Split = i1473[20]
  i1472.shadowCascade4Split = new pc.Vec3( i1473[21], i1473[22], i1473[23] )
  i1472.streamingMipmapsActive = !!i1473[24]
  i1472.vSyncCount = i1473[25]
  i1472.asyncUploadBufferSize = i1473[26]
  i1472.asyncUploadTimeSlice = i1473[27]
  i1472.billboardsFaceCameraPosition = !!i1473[28]
  i1472.shadowNearPlaneOffset = i1473[29]
  i1472.streamingMipmapsMemoryBudget = i1473[30]
  i1472.maximumLODLevel = i1473[31]
  i1472.streamingMipmapsAddAllCameras = !!i1473[32]
  i1472.streamingMipmapsMaxLevelReduction = i1473[33]
  i1472.streamingMipmapsRenderersPerFrame = i1473[34]
  i1472.resolutionScalingFixedDPIFactor = i1473[35]
  i1472.streamingMipmapsMaxFileIORequests = i1473[36]
  i1472.currentQualityLevel = i1473[37]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1483 = data
  i1482.weight = i1483[0]
  i1482.vertices = i1483[1]
  i1482.normals = i1483[2]
  i1482.tangents = i1483[3]
  return i1482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'm_ObjectArgument')
  i1484.m_ObjectArgumentAssemblyTypeName = i1485[2]
  i1484.m_IntArgument = i1485[3]
  i1484.m_FloatArgument = i1485[4]
  i1484.m_StringArgument = i1485[5]
  i1484.m_BoolArgument = !!i1485[6]
  return i1484
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1487 = data
  i1486.m_GlyphIndex = i1487[0]
  i1486.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1487[1], i1486.m_GlyphValueRecord)
  return i1486
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1489 = data
  i1488.m_XCoordinate = i1489[0]
  i1488.m_YCoordinate = i1489[1]
  return i1488
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1491 = data
  i1490.m_XPositionAdjustment = i1491[0]
  i1490.m_YPositionAdjustment = i1491[1]
  return i1490
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1493 = data
  i1492.xPlacement = i1493[0]
  i1492.yPlacement = i1493[1]
  i1492.xAdvance = i1493[2]
  i1492.yAdvance = i1493[3]
  return i1492
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1495 = data
  i1494.m_XPlacement = i1495[0]
  i1494.m_YPlacement = i1495[1]
  i1494.m_XAdvance = i1495[2]
  i1494.m_YAdvance = i1495[3]
  return i1494
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[103],"104":[77],"105":[106],"107":[106],"108":[106],"109":[106],"110":[106],"111":[106],"112":[3],"113":[3],"114":[3],"115":[3],"116":[3],"117":[3],"4":[3],"118":[3],"119":[3],"120":[3],"121":[3],"122":[3],"123":[3],"124":[77],"125":[126],"127":[128],"129":[128],"29":[28],"71":[37],"130":[28],"55":[37],"43":[28],"72":[37],"131":[33],"53":[28],"57":[33],"52":[37],"132":[33],"15":[3],"133":[7],"134":[7],"135":[77],"136":[137],"138":[28],"139":[38,28],"140":[126],"141":[38,28],"142":[28],"143":[28],"144":[126,28],"36":[28,38],"145":[146],"147":[146],"148":[146],"149":[28],"150":[28],"32":[29],"35":[38,28],"151":[28],"31":[29],"47":[28],"50":[28],"45":[28],"152":[28],"46":[28],"153":[28],"74":[28],"154":[28],"155":[28],"49":[38,28],"44":[28],"42":[28],"156":[28],"58":[28],"157":[38,28],"158":[28],"159":[85],"160":[85],"86":[85],"161":[85],"162":[77],"163":[77]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Game.Gameplay.RagdollBrain","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","Game.Data.RagdollTuningSO","Game.Gameplay.CreatureAgent","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.Sprite","UnityEngine.Material","Game.Gameplay.CreatureCollisionRelay","UnityEngine.Shader","Game.Gameplay.WeaponEntity","Game.Gameplay.ProjectileEntity","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Mesh","Game.Gameplay.WearableEntity","Game.Gameplay.PropEntity","Game.Gameplay.ItemSpawnMotion","UnityEngine.CapsuleCollider2D","Game.Gameplay.ExplosiveEntity","Game.Gameplay.GrenadePinEjector","UnityEngine.GameObject","Game.Gameplay.TileEntity","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","Game.UI.ItemUnlockPopup","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","Game.UI.UnlockToast","Game.UI.CategoryTabBar","UnityEngine.UI.ScrollRect","Game.UI.NonDrawingGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.ContentSizeFitter","Game.UI.PaletteGrid","UnityEngine.UI.RawImage","UnityEngine.UI.GridLayoutGroup","Game.UI.ToolStripPanel","Game.UI.UIButtonBounce","Game.UI.SafeAreaFitter","Game.UI.CornerMenuPanel","Game.UI.MailButton","Game.UI.UnlockCollectionScreen","Game.UI.SideSliderPanel","UnityEngine.UI.Slider","Game.UI.WeaponSelectPanel","Game.Gameplay.PlayableBootstrap","Game.Data.ItemSO","Game.UI.WeaponTutorialHand","Game.UI.CardRowFit","Game.UI.TapHintHand","Game.UI.PlayableIntro","Game.Gameplay.CameraController","Game.UI.GameResult","UnityEngine.AudioSource","UnityEngine.AudioClip","Game.UI.ButtonPulse","Game.UI.CategoryTabButton","Game.UI.PaletteItemCard","Game.UI.UnlockCollectionCard","UnityEngine.UI.VerticalLayoutGroup","Game.Data.GameConfigSO","Game.Gameplay.ItemSpawnPoint","UnityEngine.Camera","UnityEngine.AudioListener","Game.Data.InteractionConfigSO","Game.Gameplay.ItemSpawnTool","Game.Gameplay.LinkTool","Game.Gameplay.DragTool","Game.Gameplay.CameraPanZoom","Game.Gameplay.MapTile","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","LunaController","AudioController","Game.Data.UICategorySO","Game.Data.SfxLibrarySO","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Game.UI.FullBleedRect","Game.UI.PlaceholderScreen","Game.UI.UIScreen","Game.Gameplay.PlaceholderSprite","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.Scrollbar","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "RSNM_V06";

Deserializers.lunaInitializationTime = "11/09/2026 07:42:39";

Deserializers.lunaDaysRunning = "2.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_RSNM_V06_YenTTH";

Deserializers.lunaAppID = "42071";

Deserializers.projectId = "01f452236d8ec9944b4213699af7e98e";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1693";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5267";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.RSNM_V06";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "653974fb-9217-4d47-94d9-543d3fe2cec4";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Game","Core","GameBootSignal","Reset"],["Game","Core","BannerSpace","Reset"],["Game","Core","BannerSuppression","Reset"],["Game","Gameplay","PropLureRegistry","Reset"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

