var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.JointSpring' )
  var i1693 = data
  i1692.spring = i1693[0]
  i1692.damper = i1693[1]
  i1692.targetPosition = i1693[2]
  return i1692
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.JointMotor' )
  var i1695 = data
  i1694.m_TargetVelocity = i1695[0]
  i1694.m_Force = i1695[1]
  i1694.m_FreeSpin = i1695[2]
  return i1694
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.JointLimits' )
  var i1697 = data
  i1696.m_Min = i1697[0]
  i1696.m_Max = i1697[1]
  i1696.m_Bounciness = i1697[2]
  i1696.m_BounceMinVelocity = i1697[3]
  i1696.m_ContactDistance = i1697[4]
  i1696.minBounce = i1697[5]
  i1696.maxBounce = i1697[6]
  return i1696
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointDrive' )
  var i1699 = data
  i1698.m_PositionSpring = i1699[0]
  i1698.m_PositionDamper = i1699[1]
  i1698.m_MaximumForce = i1699[2]
  i1698.m_UseAcceleration = i1699[3]
  return i1698
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1701 = data
  i1700.m_Spring = i1701[0]
  i1700.m_Damper = i1701[1]
  return i1700
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1703 = data
  i1702.m_Limit = i1703[0]
  i1702.m_Bounciness = i1703[1]
  i1702.m_ContactDistance = i1703[2]
  return i1702
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1705 = data
  i1704.m_ExtremumSlip = i1705[0]
  i1704.m_ExtremumValue = i1705[1]
  i1704.m_AsymptoteSlip = i1705[2]
  i1704.m_AsymptoteValue = i1705[3]
  i1704.m_Stiffness = i1705[4]
  return i1704
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1707 = data
  i1706.m_LowerAngle = i1707[0]
  i1706.m_UpperAngle = i1707[1]
  return i1706
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1709 = data
  i1708.m_MotorSpeed = i1709[0]
  i1708.m_MaximumMotorTorque = i1709[1]
  return i1708
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1711 = data
  i1710.m_DampingRatio = i1711[0]
  i1710.m_Frequency = i1711[1]
  i1710.m_Angle = i1711[2]
  return i1710
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1713 = data
  i1712.m_LowerTranslation = i1713[0]
  i1712.m_UpperTranslation = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1714 = root || new pc.UnityMaterial()
  var i1715 = data
  i1714.name = i1715[0]
  request.r(i1715[1], i1715[2], 0, i1714, 'shader')
  i1714.renderQueue = i1715[3]
  i1714.enableInstancing = !!i1715[4]
  var i1717 = i1715[5]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1717[i + 0]) );
  }
  i1714.floatParameters = i1716
  var i1719 = i1715[6]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1719[i + 0]) );
  }
  i1714.colorParameters = i1718
  var i1721 = i1715[7]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1721[i + 0]) );
  }
  i1714.vectorParameters = i1720
  var i1723 = i1715[8]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1723[i + 0]) );
  }
  i1714.textureParameters = i1722
  var i1725 = i1715[9]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1725[i + 0]) );
  }
  i1714.materialFlags = i1724
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1729 = data
  i1728.name = i1729[0]
  i1728.value = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.value = new pc.Color(i1733[1], i1733[2], i1733[3], i1733[4])
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = new pc.Vec4( i1737[1], i1737[2], i1737[3], i1737[4] )
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1741 = data
  i1740.name = i1741[0]
  request.r(i1741[1], i1741[2], 0, i1740, 'value')
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.enabled = !!i1745[1]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.width = i1747[1]
  i1746.height = i1747[2]
  i1746.mipmapCount = i1747[3]
  i1746.anisoLevel = i1747[4]
  i1746.filterMode = i1747[5]
  i1746.hdr = !!i1747[6]
  i1746.format = i1747[7]
  i1746.wrapMode = i1747[8]
  i1746.alphaIsTransparency = !!i1747[9]
  i1746.alphaSource = i1747[10]
  i1746.graphicsFormat = i1747[11]
  i1746.sRGBTexture = !!i1747[12]
  i1746.desiredColorSpace = i1747[13]
  i1746.wrapU = i1747[14]
  i1746.wrapV = i1747[15]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1749 = data
  i1748.position = new pc.Vec3( i1749[0], i1749[1], i1749[2] )
  i1748.scale = new pc.Vec3( i1749[3], i1749[4], i1749[5] )
  i1748.rotation = new pc.Quat(i1749[6], i1749[7], i1749[8], i1749[9])
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1751 = data
  i1750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1751[0], i1750.main)
  i1750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1751[1], i1750.colorBySpeed)
  i1750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1751[2], i1750.colorOverLifetime)
  i1750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1751[3], i1750.emission)
  i1750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1751[4], i1750.rotationBySpeed)
  i1750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1751[5], i1750.rotationOverLifetime)
  i1750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1751[6], i1750.shape)
  i1750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1751[7], i1750.sizeBySpeed)
  i1750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1751[8], i1750.sizeOverLifetime)
  i1750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1751[9], i1750.textureSheetAnimation)
  i1750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1751[10], i1750.velocityOverLifetime)
  i1750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1751[11], i1750.noise)
  i1750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1751[12], i1750.inheritVelocity)
  i1750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1751[13], i1750.forceOverLifetime)
  i1750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1751[14], i1750.limitVelocityOverLifetime)
  i1750.useAutoRandomSeed = !!i1751[15]
  i1750.randomSeed = i1751[16]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemMain()
  var i1753 = data
  i1752.duration = i1753[0]
  i1752.loop = !!i1753[1]
  i1752.prewarm = !!i1753[2]
  i1752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[3], i1752.startDelay)
  i1752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[4], i1752.startLifetime)
  i1752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[5], i1752.startSpeed)
  i1752.startSize3D = !!i1753[6]
  i1752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[7], i1752.startSizeX)
  i1752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[8], i1752.startSizeY)
  i1752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[9], i1752.startSizeZ)
  i1752.startRotation3D = !!i1753[10]
  i1752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[11], i1752.startRotationX)
  i1752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[12], i1752.startRotationY)
  i1752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[13], i1752.startRotationZ)
  i1752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1753[14], i1752.startColor)
  i1752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[15], i1752.gravityModifier)
  i1752.simulationSpace = i1753[16]
  request.r(i1753[17], i1753[18], 0, i1752, 'customSimulationSpace')
  i1752.simulationSpeed = i1753[19]
  i1752.useUnscaledTime = !!i1753[20]
  i1752.scalingMode = i1753[21]
  i1752.playOnAwake = !!i1753[22]
  i1752.maxParticles = i1753[23]
  i1752.emitterVelocityMode = i1753[24]
  i1752.stopAction = i1753[25]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1754 = root || new pc.MinMaxCurve()
  var i1755 = data
  i1754.mode = i1755[0]
  i1754.curveMin = new pc.AnimationCurve( { keys_flow: i1755[1] } )
  i1754.curveMax = new pc.AnimationCurve( { keys_flow: i1755[2] } )
  i1754.curveMultiplier = i1755[3]
  i1754.constantMin = i1755[4]
  i1754.constantMax = i1755[5]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1756 = root || new pc.MinMaxGradient()
  var i1757 = data
  i1756.mode = i1757[0]
  i1756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1757[1], i1756.gradientMin)
  i1756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1757[2], i1756.gradientMax)
  i1756.colorMin = new pc.Color(i1757[3], i1757[4], i1757[5], i1757[6])
  i1756.colorMax = new pc.Color(i1757[7], i1757[8], i1757[9], i1757[10])
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1759 = data
  i1758.mode = i1759[0]
  var i1761 = i1759[1]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1761[i + 0]) );
  }
  i1758.colorKeys = i1760
  var i1763 = i1759[2]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1763[i + 0]) );
  }
  i1758.alphaKeys = i1762
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemColorBySpeed()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1765[1], i1764.color)
  i1764.range = new pc.Vec2( i1765[2], i1765[3] )
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1769 = data
  i1768.color = new pc.Color(i1769[0], i1769[1], i1769[2], i1769[3])
  i1768.time = i1769[4]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1773 = data
  i1772.alpha = i1773[0]
  i1772.time = i1773[1]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemColorOverLifetime()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1775[1], i1774.color)
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemEmitter()
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[1], i1776.rateOverTime)
  i1776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[2], i1776.rateOverDistance)
  var i1779 = i1777[3]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1779[i + 0]) );
  }
  i1776.bursts = i1778
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemBurst()
  var i1783 = data
  i1782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[0], i1782.count)
  i1782.cycleCount = i1783[1]
  i1782.minCount = i1783[2]
  i1782.maxCount = i1783[3]
  i1782.repeatInterval = i1783[4]
  i1782.time = i1783[5]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemRotationBySpeed()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.x)
  i1784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.y)
  i1784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.z)
  i1784.separateAxes = !!i1785[4]
  i1784.range = new pc.Vec2( i1785[5], i1785[6] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[1], i1786.x)
  i1786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[2], i1786.y)
  i1786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[3], i1786.z)
  i1786.separateAxes = !!i1787[4]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemShape()
  var i1789 = data
  i1788.enabled = !!i1789[0]
  i1788.shapeType = i1789[1]
  i1788.randomDirectionAmount = i1789[2]
  i1788.sphericalDirectionAmount = i1789[3]
  i1788.randomPositionAmount = i1789[4]
  i1788.alignToDirection = !!i1789[5]
  i1788.radius = i1789[6]
  i1788.radiusMode = i1789[7]
  i1788.radiusSpread = i1789[8]
  i1788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[9], i1788.radiusSpeed)
  i1788.radiusThickness = i1789[10]
  i1788.angle = i1789[11]
  i1788.length = i1789[12]
  i1788.boxThickness = new pc.Vec3( i1789[13], i1789[14], i1789[15] )
  i1788.meshShapeType = i1789[16]
  request.r(i1789[17], i1789[18], 0, i1788, 'mesh')
  request.r(i1789[19], i1789[20], 0, i1788, 'meshRenderer')
  request.r(i1789[21], i1789[22], 0, i1788, 'skinnedMeshRenderer')
  i1788.useMeshMaterialIndex = !!i1789[23]
  i1788.meshMaterialIndex = i1789[24]
  i1788.useMeshColors = !!i1789[25]
  i1788.normalOffset = i1789[26]
  i1788.arc = i1789[27]
  i1788.arcMode = i1789[28]
  i1788.arcSpread = i1789[29]
  i1788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[30], i1788.arcSpeed)
  i1788.donutRadius = i1789[31]
  i1788.position = new pc.Vec3( i1789[32], i1789[33], i1789[34] )
  i1788.rotation = new pc.Vec3( i1789[35], i1789[36], i1789[37] )
  i1788.scale = new pc.Vec3( i1789[38], i1789[39], i1789[40] )
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemSizeBySpeed()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[1], i1790.x)
  i1790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[2], i1790.y)
  i1790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[3], i1790.z)
  i1790.separateAxes = !!i1791[4]
  i1790.range = new pc.Vec2( i1791[5], i1791[6] )
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[1], i1792.x)
  i1792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[2], i1792.y)
  i1792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[3], i1792.z)
  i1792.separateAxes = !!i1793[4]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.mode = i1795[1]
  i1794.animation = i1795[2]
  i1794.numTilesX = i1795[3]
  i1794.numTilesY = i1795[4]
  i1794.useRandomRow = !!i1795[5]
  i1794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[6], i1794.frameOverTime)
  i1794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[7], i1794.startFrame)
  i1794.cycleCount = i1795[8]
  i1794.rowIndex = i1795[9]
  i1794.flipU = i1795[10]
  i1794.flipV = i1795[11]
  i1794.spriteCount = i1795[12]
  var i1797 = i1795[13]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.sprites = i1796
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[1], i1800.x)
  i1800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.y)
  i1800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.z)
  i1800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[4], i1800.radial)
  i1800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[5], i1800.speedModifier)
  i1800.space = i1801[6]
  i1800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[7], i1800.orbitalX)
  i1800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[8], i1800.orbitalY)
  i1800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[9], i1800.orbitalZ)
  i1800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[10], i1800.orbitalOffsetX)
  i1800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[11], i1800.orbitalOffsetY)
  i1800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[12], i1800.orbitalOffsetZ)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemNoise()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.separateAxes = !!i1803[1]
  i1802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.strengthX)
  i1802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.strengthY)
  i1802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[4], i1802.strengthZ)
  i1802.frequency = i1803[5]
  i1802.damping = !!i1803[6]
  i1802.octaveCount = i1803[7]
  i1802.octaveMultiplier = i1803[8]
  i1802.octaveScale = i1803[9]
  i1802.quality = i1803[10]
  i1802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[11], i1802.scrollSpeed)
  i1802.scrollSpeedMultiplier = i1803[12]
  i1802.remapEnabled = !!i1803[13]
  i1802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[14], i1802.remapX)
  i1802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[15], i1802.remapY)
  i1802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[16], i1802.remapZ)
  i1802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[17], i1802.positionAmount)
  i1802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[18], i1802.rotationAmount)
  i1802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[19], i1802.sizeAmount)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemInheritVelocity()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.mode = i1805[1]
  i1804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[2], i1804.curve)
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemForceOverLifetime()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[1], i1806.x)
  i1806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[2], i1806.y)
  i1806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[3], i1806.z)
  i1806.space = i1807[4]
  i1806.randomized = !!i1807[5]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[1], i1808.limit)
  i1808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[2], i1808.limitX)
  i1808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[3], i1808.limitY)
  i1808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[4], i1808.limitZ)
  i1808.dampen = i1809[5]
  i1808.separateAxes = !!i1809[6]
  i1808.space = i1809[7]
  i1808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[8], i1808.drag)
  i1808.multiplyDragByParticleSize = !!i1809[9]
  i1808.multiplyDragByParticleVelocity = !!i1809[10]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'mesh')
  i1810.meshCount = i1811[2]
  i1810.activeVertexStreamsCount = i1811[3]
  i1810.alignment = i1811[4]
  i1810.renderMode = i1811[5]
  i1810.sortMode = i1811[6]
  i1810.lengthScale = i1811[7]
  i1810.velocityScale = i1811[8]
  i1810.cameraVelocityScale = i1811[9]
  i1810.normalDirection = i1811[10]
  i1810.sortingFudge = i1811[11]
  i1810.minParticleSize = i1811[12]
  i1810.maxParticleSize = i1811[13]
  i1810.pivot = new pc.Vec3( i1811[14], i1811[15], i1811[16] )
  request.r(i1811[17], i1811[18], 0, i1810, 'trailMaterial')
  i1810.applyActiveColorSpace = !!i1811[19]
  i1810.enabled = !!i1811[20]
  request.r(i1811[21], i1811[22], 0, i1810, 'sharedMaterial')
  var i1813 = i1811[23]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 2, i1812, '')
  }
  i1810.sharedMaterials = i1812
  i1810.receiveShadows = !!i1811[24]
  i1810.shadowCastingMode = i1811[25]
  i1810.sortingLayerID = i1811[26]
  i1810.sortingOrder = i1811[27]
  i1810.lightmapIndex = i1811[28]
  i1810.lightmapSceneIndex = i1811[29]
  i1810.lightmapScaleOffset = new pc.Vec4( i1811[30], i1811[31], i1811[32], i1811[33] )
  i1810.lightProbeUsage = i1811[34]
  i1810.reflectionProbeUsage = i1811[35]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.tagId = i1817[1]
  i1816.enabled = !!i1817[2]
  i1816.isStatic = !!i1817[3]
  i1816.layer = i1817[4]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.index = i1819[1]
  i1818.startup = !!i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1821 = data
  i1820.aspect = i1821[0]
  i1820.orthographic = !!i1821[1]
  i1820.orthographicSize = i1821[2]
  i1820.backgroundColor = new pc.Color(i1821[3], i1821[4], i1821[5], i1821[6])
  i1820.nearClipPlane = i1821[7]
  i1820.farClipPlane = i1821[8]
  i1820.fieldOfView = i1821[9]
  i1820.depth = i1821[10]
  i1820.clearFlags = i1821[11]
  i1820.cullingMask = i1821[12]
  i1820.rect = i1821[13]
  request.r(i1821[14], i1821[15], 0, i1820, 'targetTexture')
  i1820.usePhysicalProperties = !!i1821[16]
  i1820.focalLength = i1821[17]
  i1820.sensorSize = new pc.Vec2( i1821[18], i1821[19] )
  i1820.lensShift = new pc.Vec2( i1821[20], i1821[21] )
  i1820.gateFit = i1821[22]
  i1820.commandBufferCount = i1821[23]
  i1820.cameraType = i1821[24]
  i1820.enabled = !!i1821[25]
  return i1820
}

Deserializers["CameraShake"] = function (request, data, root) {
  var i1822 = root || request.c( 'CameraShake' )
  var i1823 = data
  return i1822
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'm_FirstSelected')
  i1824.m_sendNavigationEvents = !!i1825[2]
  i1824.m_DragThreshold = i1825[3]
  return i1824
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1827 = data
  i1826.m_HorizontalAxis = i1827[0]
  i1826.m_VerticalAxis = i1827[1]
  i1826.m_SubmitButton = i1827[2]
  i1826.m_CancelButton = i1827[3]
  i1826.m_InputActionsPerSecond = i1827[4]
  i1826.m_RepeatDelay = i1827[5]
  i1826.m_ForceModuleActive = !!i1827[6]
  i1826.m_SendPointerHoverToParent = !!i1827[7]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1829 = data
  i1828.pivot = new pc.Vec2( i1829[0], i1829[1] )
  i1828.anchorMin = new pc.Vec2( i1829[2], i1829[3] )
  i1828.anchorMax = new pc.Vec2( i1829[4], i1829[5] )
  i1828.sizeDelta = new pc.Vec2( i1829[6], i1829[7] )
  i1828.anchoredPosition3D = new pc.Vec3( i1829[8], i1829[9], i1829[10] )
  i1828.rotation = new pc.Quat(i1829[11], i1829[12], i1829[13], i1829[14])
  i1828.scale = new pc.Vec3( i1829[15], i1829[16], i1829[17] )
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1831 = data
  i1830.planeDistance = i1831[0]
  i1830.referencePixelsPerUnit = i1831[1]
  i1830.isFallbackOverlay = !!i1831[2]
  i1830.renderMode = i1831[3]
  i1830.renderOrder = i1831[4]
  i1830.sortingLayerName = i1831[5]
  i1830.sortingOrder = i1831[6]
  i1830.scaleFactor = i1831[7]
  request.r(i1831[8], i1831[9], 0, i1830, 'worldCamera')
  i1830.overrideSorting = !!i1831[10]
  i1830.pixelPerfect = !!i1831[11]
  i1830.targetDisplay = i1831[12]
  i1830.overridePixelPerfect = !!i1831[13]
  i1830.enabled = !!i1831[14]
  return i1830
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1833 = data
  i1832.m_UiScaleMode = i1833[0]
  i1832.m_ReferencePixelsPerUnit = i1833[1]
  i1832.m_ScaleFactor = i1833[2]
  i1832.m_ReferenceResolution = new pc.Vec2( i1833[3], i1833[4] )
  i1832.m_ScreenMatchMode = i1833[5]
  i1832.m_MatchWidthOrHeight = i1833[6]
  i1832.m_PhysicalUnit = i1833[7]
  i1832.m_FallbackScreenDPI = i1833[8]
  i1832.m_DefaultSpriteDPI = i1833[9]
  i1832.m_DynamicPixelsPerUnit = i1833[10]
  i1832.m_PresetInfoIsWorld = !!i1833[11]
  return i1832
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1835 = data
  i1834.m_IgnoreReversedGraphics = !!i1835[0]
  i1834.m_BlockingObjects = i1835[1]
  i1834.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1835[2] )
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1837 = data
  i1836.cullTransparentMesh = !!i1837[0]
  return i1836
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1839 = data
  i1838.m_AspectMode = i1839[0]
  i1838.m_AspectRatio = i1839[1]
  return i1838
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1841 = data
  request.r(i1841[0], i1841[1], 0, i1840, 'm_Texture')
  i1840.m_UVRect = UnityEngine.Rect.MinMaxRect(i1841[2], i1841[3], i1841[4], i1841[5])
  request.r(i1841[6], i1841[7], 0, i1840, 'm_Material')
  i1840.m_Maskable = !!i1841[8]
  i1840.m_Color = new pc.Color(i1841[9], i1841[10], i1841[11], i1841[12])
  i1840.m_RaycastTarget = !!i1841[13]
  i1840.m_RaycastPadding = new pc.Vec4( i1841[14], i1841[15], i1841[16], i1841[17] )
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1843 = data
  i1842.color = new pc.Color(i1843[0], i1843[1], i1843[2], i1843[3])
  request.r(i1843[4], i1843[5], 0, i1842, 'sprite')
  i1842.flipX = !!i1843[6]
  i1842.flipY = !!i1843[7]
  i1842.drawMode = i1843[8]
  i1842.size = new pc.Vec2( i1843[9], i1843[10] )
  i1842.tileMode = i1843[11]
  i1842.adaptiveModeThreshold = i1843[12]
  i1842.maskInteraction = i1843[13]
  i1842.spriteSortPoint = i1843[14]
  i1842.enabled = !!i1843[15]
  request.r(i1843[16], i1843[17], 0, i1842, 'sharedMaterial')
  var i1845 = i1843[18]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 2, i1844, '')
  }
  i1842.sharedMaterials = i1844
  i1842.receiveShadows = !!i1843[19]
  i1842.shadowCastingMode = i1843[20]
  i1842.sortingLayerID = i1843[21]
  i1842.sortingOrder = i1843[22]
  i1842.lightmapIndex = i1843[23]
  i1842.lightmapSceneIndex = i1843[24]
  i1842.lightmapScaleOffset = new pc.Vec4( i1843[25], i1843[26], i1843[27], i1843[28] )
  i1842.lightProbeUsage = i1843[29]
  i1842.reflectionProbeUsage = i1843[30]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1847 = data
  i1846.usedByComposite = !!i1847[0]
  i1846.autoTiling = !!i1847[1]
  i1846.size = new pc.Vec2( i1847[2], i1847[3] )
  i1846.edgeRadius = i1847[4]
  i1846.enabled = !!i1847[5]
  i1846.isTrigger = !!i1847[6]
  i1846.usedByEffector = !!i1847[7]
  i1846.density = i1847[8]
  i1846.offset = new pc.Vec2( i1847[9], i1847[10] )
  request.r(i1847[11], i1847[12], 0, i1846, 'material')
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1849 = data
  i1848.sortingLayerIndex = i1849[0]
  i1848.sortingOrder = i1849[1]
  i1848.sortingLayerName = i1849[2]
  i1848.enabled = !!i1849[3]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1851 = data
  i1850.bodyType = i1851[0]
  request.r(i1851[1], i1851[2], 0, i1850, 'material')
  i1850.simulated = !!i1851[3]
  i1850.useAutoMass = !!i1851[4]
  i1850.mass = i1851[5]
  i1850.drag = i1851[6]
  i1850.angularDrag = i1851[7]
  i1850.gravityScale = i1851[8]
  i1850.collisionDetectionMode = i1851[9]
  i1850.sleepMode = i1851[10]
  i1850.constraints = i1851[11]
  return i1850
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1852 = root || request.c( 'MonsterController' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'joint')
  i1852.anchorAtStart = !!i1853[2]
  request.r(i1853[3], i1853[4], 0, i1852, 'rb')
  request.r(i1853[5], i1853[6], 0, i1852, 'deadSFX')
  i1852.force = new pc.Vec2( i1853[7], i1853[8] )
  i1852.maxHP = i1853[9]
  i1852.maxArmor = i1853[10]
  i1852.hp = i1853[11]
  i1852.armor = i1853[12]
  request.r(i1853[13], i1853[14], 0, i1852, 'bars')
  request.r(i1853[15], i1853[16], 0, i1852, 'head')
  i1852.barOffset = new pc.Vec3( i1853[17], i1853[18], i1853[19] )
  request.r(i1853[20], i1853[21], 0, i1852, 'hpFill')
  i1852.dismemberSpeed = new pc.Vec2( i1853[22], i1853[23] )
  i1852.dismemberSpin = i1853[24]
  i1852.hpSmoothTime = i1853[25]
  i1852.armorSmoothTime = i1853[26]
  request.r(i1853[27], i1853[28], 0, i1852, 'armorFill')
  request.r(i1853[29], i1853[30], 0, i1852, 'armorBar')
  request.r(i1853[31], i1853[32], 0, i1852, 'armorIcon')
  request.r(i1853[33], i1853[34], 0, i1852, 'fxSprite')
  request.r(i1853[35], i1853[36], 0, i1852, 'electricSprite')
  i1852.fxScale = i1853[37]
  request.r(i1853[38], i1853[39], 0, i1852, 'armorBreakSFX')
  i1852.lightningDrainTime = i1853[40]
  i1852.lightningDrainTick = i1853[41]
  i1852.smokeInterval = i1853[42]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1855 = data
  i1854.useLimits = !!i1855[0]
  i1854.limits = request.d('UnityEngine.JointAngleLimits2D', i1855[1], i1854.limits)
  i1854.useMotor = !!i1855[2]
  i1854.motor = request.d('UnityEngine.JointMotor2D', i1855[3], i1854.motor)
  i1854.anchor = new pc.Vec2( i1855[4], i1855[5] )
  i1854.connectedAnchor = new pc.Vec2( i1855[6], i1855[7] )
  i1854.autoConfigureConnectedAnchor = !!i1855[8]
  request.r(i1855[9], i1855[10], 0, i1854, 'connectedBody')
  i1854.breakForce = i1855[11]
  i1854.breakTorque = i1855[12]
  i1854.enableCollision = !!i1855[13]
  i1854.enabled = !!i1855[14]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1857 = data
  i1856.autoConfigureTarget = !!i1857[0]
  i1856.target = new pc.Vec2( i1857[1], i1857[2] )
  i1856.anchor = new pc.Vec2( i1857[3], i1857[4] )
  i1856.maxForce = i1857[5]
  i1856.dampingRatio = i1857[6]
  i1856.frequency = i1857[7]
  request.r(i1857[8], i1857[9], 0, i1856, 'connectedBody')
  i1856.breakForce = i1857[10]
  i1856.breakTorque = i1857[11]
  i1856.enableCollision = !!i1857[12]
  i1856.enabled = !!i1857[13]
  return i1856
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1858 = root || request.c( 'BonkController' )
  var i1859 = data
  i1858.target = i1859[0]
  i1858.damage = i1859[1]
  request.r(i1859[2], i1859[3], 0, i1858, 'hitSound')
  return i1858
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.Image' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'm_Sprite')
  i1860.m_Type = i1861[2]
  i1860.m_PreserveAspect = !!i1861[3]
  i1860.m_FillCenter = !!i1861[4]
  i1860.m_FillMethod = i1861[5]
  i1860.m_FillAmount = i1861[6]
  i1860.m_FillClockwise = !!i1861[7]
  i1860.m_FillOrigin = i1861[8]
  i1860.m_UseSpriteMesh = !!i1861[9]
  i1860.m_PixelsPerUnitMultiplier = i1861[10]
  request.r(i1861[11], i1861[12], 0, i1860, 'm_Material')
  i1860.m_Maskable = !!i1861[13]
  i1860.m_Color = new pc.Color(i1861[14], i1861[15], i1861[16], i1861[17])
  i1860.m_RaycastTarget = !!i1861[18]
  i1860.m_RaycastPadding = new pc.Vec4( i1861[19], i1861[20], i1861[21], i1861[22] )
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1863 = data
  i1862.radius = i1863[0]
  i1862.enabled = !!i1863[1]
  i1862.isTrigger = !!i1863[2]
  i1862.usedByEffector = !!i1863[3]
  i1862.density = i1863[4]
  i1862.offset = new pc.Vec2( i1863[5], i1863[6] )
  request.r(i1863[7], i1863[8], 0, i1862, 'material')
  return i1862
}

Deserializers["ScreenFx"] = function (request, data, root) {
  var i1864 = root || request.c( 'ScreenFx' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'dark')
  request.r(i1865[2], i1865[3], 0, i1864, 'flash')
  return i1864
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.UI.Button' )
  var i1867 = data
  i1866.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1867[0], i1866.m_OnClick)
  i1866.m_Navigation = request.d('UnityEngine.UI.Navigation', i1867[1], i1866.m_Navigation)
  i1866.m_Transition = i1867[2]
  i1866.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1867[3], i1866.m_Colors)
  i1866.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1867[4], i1866.m_SpriteState)
  i1866.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1867[5], i1866.m_AnimationTriggers)
  i1866.m_Interactable = !!i1867[6]
  request.r(i1867[7], i1867[8], 0, i1866, 'm_TargetGraphic')
  return i1866
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1869 = data
  i1868.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1869[0], i1868.m_PersistentCalls)
  return i1868
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1871 = data
  var i1873 = i1871[0]
  var i1872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.add(request.d('UnityEngine.Events.PersistentCall', i1873[i + 0]));
  }
  i1870.m_Calls = i1872
  return i1870
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_Target')
  i1876.m_TargetAssemblyTypeName = i1877[2]
  i1876.m_MethodName = i1877[3]
  i1876.m_Mode = i1877[4]
  i1876.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1877[5], i1876.m_Arguments)
  i1876.m_CallState = i1877[6]
  return i1876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1879 = data
  i1878.m_Mode = i1879[0]
  i1878.m_WrapAround = !!i1879[1]
  request.r(i1879[2], i1879[3], 0, i1878, 'm_SelectOnUp')
  request.r(i1879[4], i1879[5], 0, i1878, 'm_SelectOnDown')
  request.r(i1879[6], i1879[7], 0, i1878, 'm_SelectOnLeft')
  request.r(i1879[8], i1879[9], 0, i1878, 'm_SelectOnRight')
  return i1878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1881 = data
  i1880.m_NormalColor = new pc.Color(i1881[0], i1881[1], i1881[2], i1881[3])
  i1880.m_HighlightedColor = new pc.Color(i1881[4], i1881[5], i1881[6], i1881[7])
  i1880.m_PressedColor = new pc.Color(i1881[8], i1881[9], i1881[10], i1881[11])
  i1880.m_SelectedColor = new pc.Color(i1881[12], i1881[13], i1881[14], i1881[15])
  i1880.m_DisabledColor = new pc.Color(i1881[16], i1881[17], i1881[18], i1881[19])
  i1880.m_ColorMultiplier = i1881[20]
  i1880.m_FadeDuration = i1881[21]
  return i1880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'm_HighlightedSprite')
  request.r(i1883[2], i1883[3], 0, i1882, 'm_PressedSprite')
  request.r(i1883[4], i1883[5], 0, i1882, 'm_SelectedSprite')
  request.r(i1883[6], i1883[7], 0, i1882, 'm_DisabledSprite')
  return i1882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1885 = data
  i1884.m_NormalTrigger = i1885[0]
  i1884.m_HighlightedTrigger = i1885[1]
  i1884.m_PressedTrigger = i1885[2]
  i1884.m_SelectedTrigger = i1885[3]
  i1884.m_DisabledTrigger = i1885[4]
  return i1884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1887 = data
  i1886.m_hasFontAssetChanged = !!i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'm_baseMaterial')
  i1886.m_maskOffset = new pc.Vec4( i1887[3], i1887[4], i1887[5], i1887[6] )
  i1886.m_text = i1887[7]
  i1886.m_isRightToLeft = !!i1887[8]
  request.r(i1887[9], i1887[10], 0, i1886, 'm_fontAsset')
  request.r(i1887[11], i1887[12], 0, i1886, 'm_sharedMaterial')
  var i1889 = i1887[13]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1886.m_fontSharedMaterials = i1888
  request.r(i1887[14], i1887[15], 0, i1886, 'm_fontMaterial')
  var i1891 = i1887[16]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 2, i1890, '')
  }
  i1886.m_fontMaterials = i1890
  i1886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1887[17], i1887[18], i1887[19], i1887[20])
  i1886.m_fontColor = new pc.Color(i1887[21], i1887[22], i1887[23], i1887[24])
  i1886.m_enableVertexGradient = !!i1887[25]
  i1886.m_colorMode = i1887[26]
  i1886.m_fontColorGradient = request.d('TMPro.VertexGradient', i1887[27], i1886.m_fontColorGradient)
  request.r(i1887[28], i1887[29], 0, i1886, 'm_fontColorGradientPreset')
  request.r(i1887[30], i1887[31], 0, i1886, 'm_spriteAsset')
  i1886.m_tintAllSprites = !!i1887[32]
  request.r(i1887[33], i1887[34], 0, i1886, 'm_StyleSheet')
  i1886.m_TextStyleHashCode = i1887[35]
  i1886.m_overrideHtmlColors = !!i1887[36]
  i1886.m_faceColor = UnityEngine.Color32.ConstructColor(i1887[37], i1887[38], i1887[39], i1887[40])
  i1886.m_fontSize = i1887[41]
  i1886.m_fontSizeBase = i1887[42]
  i1886.m_fontWeight = i1887[43]
  i1886.m_enableAutoSizing = !!i1887[44]
  i1886.m_fontSizeMin = i1887[45]
  i1886.m_fontSizeMax = i1887[46]
  i1886.m_fontStyle = i1887[47]
  i1886.m_HorizontalAlignment = i1887[48]
  i1886.m_VerticalAlignment = i1887[49]
  i1886.m_textAlignment = i1887[50]
  i1886.m_characterSpacing = i1887[51]
  i1886.m_characterHorizontalScale = i1887[52]
  i1886.m_wordSpacing = i1887[53]
  i1886.m_lineSpacing = i1887[54]
  i1886.m_lineSpacingMax = i1887[55]
  i1886.m_paragraphSpacing = i1887[56]
  i1886.m_charWidthMaxAdj = i1887[57]
  i1886.m_TextWrappingMode = i1887[58]
  i1886.m_wordWrappingRatios = i1887[59]
  i1886.m_overflowMode = i1887[60]
  request.r(i1887[61], i1887[62], 0, i1886, 'm_linkedTextComponent')
  request.r(i1887[63], i1887[64], 0, i1886, 'parentLinkedComponent')
  i1886.m_enableKerning = !!i1887[65]
  var i1893 = i1887[66]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(i1893[i + 0]);
  }
  i1886.m_ActiveFontFeatures = i1892
  i1886.m_enableExtraPadding = !!i1887[67]
  i1886.checkPaddingRequired = !!i1887[68]
  i1886.m_isRichText = !!i1887[69]
  i1886.m_parseCtrlCharacters = !!i1887[70]
  i1886.m_isOrthographic = !!i1887[71]
  i1886.m_isCullingEnabled = !!i1887[72]
  i1886.m_horizontalMapping = i1887[73]
  i1886.m_verticalMapping = i1887[74]
  i1886.m_uvLineOffset = i1887[75]
  i1886.m_geometrySortingOrder = i1887[76]
  i1886.m_IsTextObjectScaleStatic = !!i1887[77]
  i1886.m_VertexBufferAutoSizeReduction = !!i1887[78]
  i1886.m_useMaxVisibleDescender = !!i1887[79]
  i1886.m_pageToDisplay = i1887[80]
  i1886.m_margin = new pc.Vec4( i1887[81], i1887[82], i1887[83], i1887[84] )
  i1886.m_isUsingLegacyAnimationComponent = !!i1887[85]
  i1886.m_isVolumetricText = !!i1887[86]
  request.r(i1887[87], i1887[88], 0, i1886, 'm_Material')
  i1886.m_EmojiFallbackSupport = !!i1887[89]
  i1886.m_Maskable = !!i1887[90]
  i1886.m_Color = new pc.Color(i1887[91], i1887[92], i1887[93], i1887[94])
  i1886.m_RaycastTarget = !!i1887[95]
  i1886.m_RaycastPadding = new pc.Vec4( i1887[96], i1887[97], i1887[98], i1887[99] )
  return i1886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1894 = root || request.c( 'TMPro.VertexGradient' )
  var i1895 = data
  i1894.topLeft = new pc.Color(i1895[0], i1895[1], i1895[2], i1895[3])
  i1894.topRight = new pc.Color(i1895[4], i1895[5], i1895[6], i1895[7])
  i1894.bottomLeft = new pc.Color(i1895[8], i1895[9], i1895[10], i1895[11])
  i1894.bottomRight = new pc.Color(i1895[12], i1895[13], i1895[14], i1895[15])
  return i1894
}

Deserializers["CycleHand"] = function (request, data, root) {
  var i1898 = root || request.c( 'CycleHand' )
  var i1899 = data
  var i1901 = i1899[0]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 1, i1900, '')
  }
  i1898.targets = i1900
  i1898.fingerOffset = new pc.Vec2( i1899[1], i1899[2] )
  i1898.moveTime = i1899[3]
  i1898.stayTime = i1899[4]
  i1898.tapSpeed = i1899[5]
  i1898.pulse = i1899[6]
  return i1898
}

Deserializers["PowerTutorial"] = function (request, data, root) {
  var i1904 = root || request.c( 'PowerTutorial' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'hand')
  i1904.swipe = !!i1905[2]
  i1904.fingerOffset = new pc.Vec2( i1905[3], i1905[4] )
  i1904.swipeDistance = i1905[5]
  i1904.speed = i1905[6]
  i1904.pulse = i1905[7]
  return i1904
}

Deserializers["SwipeHandTut"] = function (request, data, root) {
  var i1906 = root || request.c( 'SwipeHandTut' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'hand')
  request.r(i1907[2], i1907[3], 0, i1906, 'target')
  i1906.fingerOffset = new pc.Vec2( i1907[4], i1907[5] )
  i1906.pressTime = i1907[6]
  i1906.moveTime = i1907[7]
  i1906.stayTime = i1907[8]
  i1906.pressScale = i1907[9]
  i1906.fallbackDistance = i1907[10]
  return i1906
}

Deserializers["GameController"] = function (request, data, root) {
  var i1908 = root || request.c( 'GameController' )
  var i1909 = data
  i1908.OnComplete = request.d('System.Action', i1909[0], i1908.OnComplete)
  var i1911 = i1909[1]
  var i1910 = new (System.Collections.Generic.List$1(Bridge.ns('GameController+Stage')))
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.add(request.d('GameController+Stage', i1911[i + 0]));
  }
  i1908.stages = i1910
  i1908.speedMove = i1909[2]
  request.r(i1909[3], i1909[4], 0, i1908, 'target')
  i1908.index = i1909[5]
  i1908.end = !!i1909[6]
  request.r(i1909[7], i1909[8], 0, i1908, 'mainCamera')
  i1908.armorUses = i1909[9]
  i1908.deadDelay = i1909[10]
  request.r(i1909[11], i1909[12], 0, i1908, 'keepText')
  return i1908
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1912 = root || request.c( 'System.Action' )
  var i1913 = data
  return i1912
}

Deserializers["GameController+Stage"] = function (request, data, root) {
  var i1916 = root || request.c( 'GameController+Stage' )
  var i1917 = data
  i1916.cameraPos = new pc.Vec3( i1917[0], i1917[1], i1917[2] )
  var i1919 = i1917[3]
  var i1918 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 1, i1918, '')
  }
  i1916.monsters = i1918
  request.r(i1917[4], i1917[5], 0, i1916, 'ui')
  request.r(i1917[6], i1917[7], 0, i1916, 'armorBrokenTut')
  i1916.powerCount = i1917[8]
  i1916.powerUses = i1917[9]
  i1916.tutorial = !!i1917[10]
  return i1916
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1922 = root || request.c( 'TargetController' )
  var i1923 = data
  var i1925 = i1923[0]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1925.length; i += 2) {
  request.r(i1925[i + 0], i1925[i + 1], 1, i1924, '')
  }
  i1922.listTarget = i1924
  request.r(i1923[1], i1923[2], 0, i1922, 'currentTarget')
  i1922.index = i1923[3]
  request.r(i1923[4], i1923[5], 0, i1922, 'tut')
  i1922.grabRadius = i1923[6]
  return i1922
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1928 = root || request.c( 'LunaController' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'BGTexture')
  i1928.UseTime = !!i1929[2]
  i1928.TimePlay = i1929[3]
  i1928.PowerStage1 = i1929[4]
  i1928.PowerStage2 = i1929[5]
  i1928.PowerUsesStage1 = i1929[6]
  i1928.PowerUsesStage2 = i1929[7]
  i1928.PowerDamage = i1929[8]
  i1928.MonsterHPStage1 = i1929[9]
  i1928.MonsterHPStage2 = i1929[10]
  request.r(i1929[11], i1929[12], 0, i1928, 'BGImage')
  var i1931 = i1929[13]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 1, i1930, '')
  }
  i1928.CTA = i1930
  request.r(i1929[14], i1929[15], 0, i1928, 'endCard')
  return i1928
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1934 = root || request.c( 'AudioController' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'BGM')
  request.r(i1935[2], i1935[3], 0, i1934, 'musicSource')
  request.r(i1935[4], i1935[5], 0, i1934, 'pool')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'clip')
  request.r(i1937[2], i1937[3], 0, i1936, 'outputAudioMixerGroup')
  i1936.playOnAwake = !!i1937[4]
  i1936.loop = !!i1937[5]
  i1936.time = i1937[6]
  i1936.volume = i1937[7]
  i1936.pitch = i1937[8]
  i1936.enabled = !!i1937[9]
  return i1936
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1938 = root || request.c( 'VFXController' )
  var i1939 = data
  request.r(i1939[0], i1939[1], 0, i1938, 'bloodPrefab')
  request.r(i1939[2], i1939[3], 0, i1938, 'pool')
  return i1938
}

Deserializers["PowerController"] = function (request, data, root) {
  var i1940 = root || request.c( 'PowerController' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('PowerOption')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('PowerOption', i1943[i + 0]));
  }
  i1940.powers = i1942
  request.r(i1941[1], i1941[2], 0, i1940, 'clickSound')
  request.r(i1941[3], i1941[4], 0, i1940, 'choiceTut')
  request.r(i1941[5], i1941[6], 0, i1940, 'offTut')
  request.r(i1941[7], i1941[8], 0, i1940, 'offHand')
  request.r(i1941[9], i1941[10], 0, i1940, 'bar')
  request.r(i1941[11], i1941[12], 0, i1940, 'powerCountText')
  request.r(i1941[13], i1941[14], 0, i1940, 'counterText')
  i1940.limit = i1941[15]
  i1940.used = i1941[16]
  return i1940
}

Deserializers["PowerOption"] = function (request, data, root) {
  var i1946 = root || request.c( 'PowerOption' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'Button')
  request.r(i1947[2], i1947[3], 0, i1946, 'Selected')
  request.r(i1947[4], i1947[5], 0, i1946, 'Power')
  request.r(i1947[6], i1947[7], 0, i1946, 'Tutorial')
  return i1946
}

Deserializers["LightningStrike"] = function (request, data, root) {
  var i1948 = root || request.c( 'LightningStrike' )
  var i1949 = data
  request.r(i1949[0], i1949[1], 0, i1948, 'segmentSprite')
  i1948.coreColor = new pc.Color(i1949[2], i1949[3], i1949[4], i1949[5])
  i1948.glowColor = new pc.Color(i1949[6], i1949[7], i1949[8], i1949[9])
  i1948.coreWidth = i1949[10]
  i1948.glowWidth = i1949[11]
  i1948.mainSegments = i1949[12]
  i1948.branchSegments = i1949[13]
  i1948.branches = i1949[14]
  i1948.jitter = i1949[15]
  i1948.sortingOrder = i1949[16]
  i1948.flashStrength = i1949[17]
  i1948.groundY = i1949[18]
  request.r(i1949[19], i1949[20], 0, i1948, 'strikeSound')
  i1948.shakeDuration = i1949[21]
  i1948.shakeStrength = i1949[22]
  return i1948
}

Deserializers["FirePower"] = function (request, data, root) {
  var i1950 = root || request.c( 'FirePower' )
  var i1951 = data
  var i1953 = i1951[0]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 2) {
  request.r(i1953[i + 0], i1953[i + 1], 2, i1952, '')
  }
  i1950.frames = i1952
  i1950.frameRate = i1951[1]
  i1950.igniteRadius = i1951[2]
  i1950.burnDamage = i1951[3]
  i1950.burnInterval = i1951[4]
  i1950.burnDuration = i1951[5]
  request.r(i1951[6], i1951[7], 0, i1950, 'emberSprite')
  request.r(i1951[8], i1951[9], 0, i1950, 'smokeSprite')
  request.r(i1951[10], i1951[11], 0, i1950, 'useSound')
  i1950.cooldown = i1951[12]
  request.r(i1951[13], i1951[14], 0, i1950, 'container')
  i1950.baseScale = i1951[15]
  return i1950
}

Deserializers["LightningPower"] = function (request, data, root) {
  var i1954 = root || request.c( 'LightningPower' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'strike')
  i1954.radius = i1955[2]
  i1954.damage = i1955[3]
  i1954.touchRadius = i1955[4]
  request.r(i1955[5], i1955[6], 0, i1954, 'useSound')
  i1954.cooldown = i1955[7]
  request.r(i1955[8], i1955[9], 0, i1954, 'container')
  i1954.baseScale = i1955[10]
  return i1954
}

Deserializers["RainEffect"] = function (request, data, root) {
  var i1956 = root || request.c( 'RainEffect' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'dropSprite')
  i1956.maxDrops = i1957[2]
  i1956.velocity = new pc.Vec2( i1957[3], i1957[4] )
  i1956.dropSize = new pc.Vec2( i1957[5], i1957[6] )
  i1956.color = new pc.Color(i1957[7], i1957[8], i1957[9], i1957[10])
  i1956.groundY = i1957[11]
  i1956.fadeIn = i1957[12]
  i1956.fadeOut = i1957[13]
  i1956.sortingOrder = i1957[14]
  return i1956
}

Deserializers["StormPower"] = function (request, data, root) {
  var i1958 = root || request.c( 'StormPower' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'strike')
  request.r(i1959[2], i1959[3], 0, i1958, 'rain')
  i1958.strikes = i1959[4]
  i1958.missMargin = i1959[5]
  i1958.groundY = i1959[6]
  i1958.strikeInterval = new pc.Vec2( i1959[7], i1959[8] )
  i1958.radius = i1959[9]
  i1958.damage = i1959[10]
  i1958.darkAlpha = i1959[11]
  request.r(i1959[12], i1959[13], 0, i1958, 'useSound')
  i1958.cooldown = i1959[14]
  request.r(i1959[15], i1959[16], 0, i1958, 'container')
  i1958.baseScale = i1959[17]
  return i1958
}

Deserializers["TornadoPower"] = function (request, data, root) {
  var i1960 = root || request.c( 'TornadoPower' )
  var i1961 = data
  request.r(i1961[0], i1961[1], 0, i1960, 'funnelSprite')
  i1960.groundY = i1961[2]
  i1960.height = i1961[3]
  i1960.widthRatio = i1961[4]
  i1960.patrolDistance = i1961[5]
  i1960.patrolSpeed = i1961[6]
  i1960.liftTime = i1961[7]
  i1960.liftSpeed = i1961[8]
  i1960.liftAccel = i1961[9]
  i1960.swirl = i1961[10]
  i1960.spin = i1961[11]
  i1960.landHeight = i1961[12]
  i1960.maxTossTime = i1961[13]
  i1960.fadeTime = i1961[14]
  i1960.armorFallTime = i1961[15]
  i1960.armorTick = i1961[16]
  i1960.damage = i1961[17]
  request.r(i1961[18], i1961[19], 0, i1960, 'liftSound')
  request.r(i1961[20], i1961[21], 0, i1960, 'hitSound')
  i1960.sortingOrder = i1961[22]
  i1960.touchRadius = i1961[23]
  request.r(i1961[24], i1961[25], 0, i1960, 'useSound')
  i1960.cooldown = i1961[26]
  request.r(i1961[27], i1961[28], 0, i1960, 'container')
  i1960.baseScale = i1961[29]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1963 = data
  i1962.ambientIntensity = i1963[0]
  i1962.reflectionIntensity = i1963[1]
  i1962.ambientMode = i1963[2]
  i1962.ambientLight = new pc.Color(i1963[3], i1963[4], i1963[5], i1963[6])
  i1962.ambientSkyColor = new pc.Color(i1963[7], i1963[8], i1963[9], i1963[10])
  i1962.ambientGroundColor = new pc.Color(i1963[11], i1963[12], i1963[13], i1963[14])
  i1962.ambientEquatorColor = new pc.Color(i1963[15], i1963[16], i1963[17], i1963[18])
  i1962.fogColor = new pc.Color(i1963[19], i1963[20], i1963[21], i1963[22])
  i1962.fogEndDistance = i1963[23]
  i1962.fogStartDistance = i1963[24]
  i1962.fogDensity = i1963[25]
  i1962.fog = !!i1963[26]
  request.r(i1963[27], i1963[28], 0, i1962, 'skybox')
  i1962.fogMode = i1963[29]
  var i1965 = i1963[30]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1965[i + 0]) );
  }
  i1962.lightmaps = i1964
  i1962.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1963[31], i1962.lightProbes)
  i1962.lightmapsMode = i1963[32]
  i1962.mixedBakeMode = i1963[33]
  i1962.environmentLightingMode = i1963[34]
  i1962.ambientProbe = new pc.SphericalHarmonicsL2(i1963[35])
  request.r(i1963[36], i1963[37], 0, i1962, 'customReflection')
  request.r(i1963[38], i1963[39], 0, i1962, 'defaultReflection')
  i1962.defaultReflectionMode = i1963[40]
  i1962.defaultReflectionResolution = i1963[41]
  i1962.sunLightObjectId = i1963[42]
  i1962.pixelLightCount = i1963[43]
  i1962.defaultReflectionHDR = !!i1963[44]
  i1962.hasLightDataAsset = !!i1963[45]
  i1962.hasManualGenerate = !!i1963[46]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'lightmapColor')
  request.r(i1969[2], i1969[3], 0, i1968, 'lightmapDirection')
  request.r(i1969[4], i1969[5], 0, i1968, 'shadowMask')
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1970 = root || new UnityEngine.LightProbes()
  var i1971 = data
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1981[i + 0]));
  }
  i1978.ShaderCompilationErrors = i1980
  i1978.name = i1979[1]
  i1978.guid = i1979[2]
  var i1983 = i1979[3]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( i1983[i + 0] );
  }
  i1978.shaderDefinedKeywords = i1982
  var i1985 = i1979[4]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1985[i + 0]) );
  }
  i1978.passes = i1984
  var i1987 = i1979[5]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1987[i + 0]) );
  }
  i1978.usePasses = i1986
  var i1989 = i1979[6]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1989[i + 0]) );
  }
  i1978.defaultParameterValues = i1988
  request.r(i1979[7], i1979[8], 0, i1978, 'unityFallbackShader')
  i1978.readDepth = !!i1979[9]
  i1978.hasDepthOnlyPass = !!i1979[10]
  i1978.isCreatedByShaderGraph = !!i1979[11]
  i1978.disableBatching = !!i1979[12]
  i1978.compiled = !!i1979[13]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1993 = data
  i1992.shaderName = i1993[0]
  i1992.errorMessage = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1998 = root || new pc.UnityShaderPass()
  var i1999 = data
  i1998.id = i1999[0]
  i1998.subShaderIndex = i1999[1]
  i1998.name = i1999[2]
  i1998.passType = i1999[3]
  i1998.grabPassTextureName = i1999[4]
  i1998.usePass = !!i1999[5]
  i1998.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[6], i1998.zTest)
  i1998.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[7], i1998.zWrite)
  i1998.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[8], i1998.culling)
  i1998.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1999[9], i1998.blending)
  i1998.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1999[10], i1998.alphaBlending)
  i1998.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[11], i1998.colorWriteMask)
  i1998.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[12], i1998.offsetUnits)
  i1998.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[13], i1998.offsetFactor)
  i1998.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[14], i1998.stencilRef)
  i1998.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[15], i1998.stencilReadMask)
  i1998.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[16], i1998.stencilWriteMask)
  i1998.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1999[17], i1998.stencilOp)
  i1998.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1999[18], i1998.stencilOpFront)
  i1998.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1999[19], i1998.stencilOpBack)
  var i2001 = i1999[20]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2001[i + 0]) );
  }
  i1998.tags = i2000
  var i2003 = i1999[21]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( i2003[i + 0] );
  }
  i1998.passDefinedKeywords = i2002
  var i2005 = i1999[22]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2005[i + 0]) );
  }
  i1998.passDefinedKeywordGroups = i2004
  var i2007 = i1999[23]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2007[i + 0]) );
  }
  i1998.variants = i2006
  var i2009 = i1999[24]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2009[i + 0]) );
  }
  i1998.excludedVariants = i2008
  i1998.hasDepthReader = !!i1999[25]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2011 = data
  i2010.val = i2011[0]
  i2010.name = i2011[1]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2013 = data
  i2012.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[0], i2012.src)
  i2012.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[1], i2012.dst)
  i2012.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2013[2], i2012.op)
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2015 = data
  i2014.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2015[0], i2014.pass)
  i2014.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2015[1], i2014.fail)
  i2014.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2015[2], i2014.zFail)
  i2014.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2015[3], i2014.comp)
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.value = i2019[1]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( i2025[i + 0] );
  }
  i2022.keywords = i2024
  i2022.hasDiscard = !!i2023[1]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2029 = data
  i2028.passId = i2029[0]
  i2028.subShaderIndex = i2029[1]
  var i2031 = i2029[2]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( i2031[i + 0] );
  }
  i2028.keywords = i2030
  i2028.vertexProgram = i2029[3]
  i2028.fragmentProgram = i2029[4]
  i2028.exportedForWebGl2 = !!i2029[5]
  i2028.readDepth = !!i2029[6]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'shader')
  i2034.pass = i2035[2]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.type = i2039[1]
  i2038.value = new pc.Vec4( i2039[2], i2039[3], i2039[4], i2039[5] )
  i2038.textureValue = i2039[6]
  i2038.shaderPropertyFlag = i2039[7]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2041 = data
  i2040.name = i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'texture')
  i2040.aabb = i2041[3]
  i2040.vertices = i2041[4]
  i2040.triangles = i2041[5]
  i2040.textureRect = UnityEngine.Rect.MinMaxRect(i2041[6], i2041[7], i2041[8], i2041[9])
  i2040.packedRect = UnityEngine.Rect.MinMaxRect(i2041[10], i2041[11], i2041[12], i2041[13])
  i2040.border = new pc.Vec4( i2041[14], i2041[15], i2041[16], i2041[17] )
  i2040.transparency = i2041[18]
  i2040.bounds = i2041[19]
  i2040.pixelsPerUnit = i2041[20]
  i2040.textureWidth = i2041[21]
  i2040.textureHeight = i2041[22]
  i2040.nativeSize = new pc.Vec2( i2041[23], i2041[24] )
  i2040.pivot = new pc.Vec2( i2041[25], i2041[26] )
  i2040.textureRectOffset = new pc.Vec2( i2041[27], i2041[28] )
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2043 = data
  i2042.name = i2043[0]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2045 = data
  i2044.name = i2045[0]
  i2044.bytes64 = i2045[1]
  i2044.data = i2045[2]
  return i2044
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2047 = data
  i2046.normalStyle = i2047[0]
  i2046.normalSpacingOffset = i2047[1]
  i2046.boldStyle = i2047[2]
  i2046.boldSpacing = i2047[3]
  i2046.italicStyle = i2047[4]
  i2046.tabSize = i2047[5]
  request.r(i2047[6], i2047[7], 0, i2046, 'atlas')
  i2046.m_SourceFontFileGUID = i2047[8]
  i2046.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2047[9], i2046.m_CreationSettings)
  request.r(i2047[10], i2047[11], 0, i2046, 'm_SourceFontFile')
  i2046.m_SourceFontFilePath = i2047[12]
  i2046.m_AtlasPopulationMode = i2047[13]
  i2046.InternalDynamicOS = !!i2047[14]
  var i2049 = i2047[15]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.add(request.d('UnityEngine.TextCore.Glyph', i2049[i + 0]));
  }
  i2046.m_GlyphTable = i2048
  var i2051 = i2047[16]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.add(request.d('TMPro.TMP_Character', i2051[i + 0]));
  }
  i2046.m_CharacterTable = i2050
  var i2053 = i2047[17]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 2, i2052, '')
  }
  i2046.m_AtlasTextures = i2052
  i2046.m_AtlasTextureIndex = i2047[18]
  i2046.m_IsMultiAtlasTexturesEnabled = !!i2047[19]
  i2046.m_GetFontFeatures = !!i2047[20]
  i2046.m_ClearDynamicDataOnBuild = !!i2047[21]
  i2046.m_AtlasWidth = i2047[22]
  i2046.m_AtlasHeight = i2047[23]
  i2046.m_AtlasPadding = i2047[24]
  i2046.m_AtlasRenderMode = i2047[25]
  var i2055 = i2047[26]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.add(request.d('UnityEngine.TextCore.GlyphRect', i2055[i + 0]));
  }
  i2046.m_UsedGlyphRects = i2054
  var i2057 = i2047[27]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.add(request.d('UnityEngine.TextCore.GlyphRect', i2057[i + 0]));
  }
  i2046.m_FreeGlyphRects = i2056
  i2046.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2047[28], i2046.m_FontFeatureTable)
  i2046.m_ShouldReimportFontFeatures = !!i2047[29]
  var i2059 = i2047[30]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 1, i2058, '')
  }
  i2046.m_FallbackFontAssetTable = i2058
  var i2061 = i2047[31]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('TMPro.TMP_FontWeightPair', i2061[i + 0]) );
  }
  i2046.m_FontWeightTable = i2060
  var i2063 = i2047[32]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('TMPro.TMP_FontWeightPair', i2063[i + 0]) );
  }
  i2046.fontWeights = i2062
  i2046.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2047[33], i2046.m_fontInfo)
  var i2065 = i2047[34]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.add(request.d('TMPro.TMP_Glyph', i2065[i + 0]));
  }
  i2046.m_glyphInfoList = i2064
  i2046.m_KerningTable = request.d('TMPro.KerningTable', i2047[35], i2046.m_KerningTable)
  var i2067 = i2047[36]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 1, i2066, '')
  }
  i2046.fallbackFontAssets = i2066
  i2046.m_Version = i2047[37]
  i2046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2047[38], i2046.m_FaceInfo)
  request.r(i2047[39], i2047[40], 0, i2046, 'm_Material')
  return i2046
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2068 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2069 = data
  i2068.sourceFontFileName = i2069[0]
  i2068.sourceFontFileGUID = i2069[1]
  i2068.faceIndex = i2069[2]
  i2068.pointSizeSamplingMode = i2069[3]
  i2068.pointSize = i2069[4]
  i2068.padding = i2069[5]
  i2068.paddingMode = i2069[6]
  i2068.packingMode = i2069[7]
  i2068.atlasWidth = i2069[8]
  i2068.atlasHeight = i2069[9]
  i2068.characterSetSelectionMode = i2069[10]
  i2068.characterSequence = i2069[11]
  i2068.referencedFontAssetGUID = i2069[12]
  i2068.referencedTextAssetGUID = i2069[13]
  i2068.fontStyle = i2069[14]
  i2068.fontStyleModifier = i2069[15]
  i2068.renderMode = i2069[16]
  i2068.includeFontFeatures = !!i2069[17]
  return i2068
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2073 = data
  i2072.m_Index = i2073[0]
  i2072.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2073[1], i2072.m_Metrics)
  i2072.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2073[2], i2072.m_GlyphRect)
  i2072.m_Scale = i2073[3]
  i2072.m_AtlasIndex = i2073[4]
  i2072.m_ClassDefinitionType = i2073[5]
  return i2072
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2075 = data
  i2074.m_Width = i2075[0]
  i2074.m_Height = i2075[1]
  i2074.m_HorizontalBearingX = i2075[2]
  i2074.m_HorizontalBearingY = i2075[3]
  i2074.m_HorizontalAdvance = i2075[4]
  return i2074
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2077 = data
  i2076.m_X = i2077[0]
  i2076.m_Y = i2077[1]
  i2076.m_Width = i2077[2]
  i2076.m_Height = i2077[3]
  return i2076
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2080 = root || request.c( 'TMPro.TMP_Character' )
  var i2081 = data
  i2080.m_ElementType = i2081[0]
  i2080.m_Unicode = i2081[1]
  i2080.m_GlyphIndex = i2081[2]
  i2080.m_Scale = i2081[3]
  return i2080
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2087 = data
  var i2089 = i2087[0]
  var i2088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.add(request.d('TMPro.MultipleSubstitutionRecord', i2089[i + 0]));
  }
  i2086.m_MultipleSubstitutionRecords = i2088
  var i2091 = i2087[1]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(request.d('TMPro.LigatureSubstitutionRecord', i2091[i + 0]));
  }
  i2086.m_LigatureSubstitutionRecords = i2090
  var i2093 = i2087[2]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2093[i + 0]));
  }
  i2086.m_GlyphPairAdjustmentRecords = i2092
  var i2095 = i2087[3]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2095[i + 0]));
  }
  i2086.m_MarkToBaseAdjustmentRecords = i2094
  var i2097 = i2087[4]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2097[i + 0]));
  }
  i2086.m_MarkToMarkAdjustmentRecords = i2096
  return i2086
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2100 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2101 = data
  i2100.m_TargetGlyphID = i2101[0]
  i2100.m_SubstituteGlyphIDs = i2101[1]
  return i2100
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2104 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2105 = data
  i2104.m_ComponentGlyphIDs = i2105[0]
  i2104.m_LigatureGlyphID = i2105[1]
  return i2104
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2109 = data
  i2108.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2109[0], i2108.m_FirstAdjustmentRecord)
  i2108.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2109[1], i2108.m_SecondAdjustmentRecord)
  i2108.m_FeatureLookupFlags = i2109[2]
  return i2108
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2112 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2113 = data
  i2112.m_BaseGlyphID = i2113[0]
  i2112.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2113[1], i2112.m_BaseGlyphAnchorPoint)
  i2112.m_MarkGlyphID = i2113[2]
  i2112.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2113[3], i2112.m_MarkPositionAdjustment)
  return i2112
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2117 = data
  i2116.m_BaseMarkGlyphID = i2117[0]
  i2116.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2117[1], i2116.m_BaseMarkGlyphAnchorPoint)
  i2116.m_CombiningMarkGlyphID = i2117[2]
  i2116.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2117[3], i2116.m_CombiningMarkPositionAdjustment)
  return i2116
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'regularTypeface')
  request.r(i2123[2], i2123[3], 0, i2122, 'italicTypeface')
  return i2122
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2124 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2125 = data
  i2124.Name = i2125[0]
  i2124.PointSize = i2125[1]
  i2124.Scale = i2125[2]
  i2124.CharacterCount = i2125[3]
  i2124.LineHeight = i2125[4]
  i2124.Baseline = i2125[5]
  i2124.Ascender = i2125[6]
  i2124.CapHeight = i2125[7]
  i2124.Descender = i2125[8]
  i2124.CenterLine = i2125[9]
  i2124.SuperscriptOffset = i2125[10]
  i2124.SubscriptOffset = i2125[11]
  i2124.SubSize = i2125[12]
  i2124.Underline = i2125[13]
  i2124.UnderlineThickness = i2125[14]
  i2124.strikethrough = i2125[15]
  i2124.strikethroughThickness = i2125[16]
  i2124.TabWidth = i2125[17]
  i2124.Padding = i2125[18]
  i2124.AtlasWidth = i2125[19]
  i2124.AtlasHeight = i2125[20]
  return i2124
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2129 = data
  i2128.id = i2129[0]
  i2128.x = i2129[1]
  i2128.y = i2129[2]
  i2128.width = i2129[3]
  i2128.height = i2129[4]
  i2128.xOffset = i2129[5]
  i2128.yOffset = i2129[6]
  i2128.xAdvance = i2129[7]
  i2128.scale = i2129[8]
  return i2128
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.KerningTable' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('TMPro.KerningPair', i2133[i + 0]));
  }
  i2130.kerningPairs = i2132
  return i2130
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2136 = root || request.c( 'TMPro.KerningPair' )
  var i2137 = data
  i2136.xOffset = i2137[0]
  i2136.m_FirstGlyph = i2137[1]
  i2136.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2137[2], i2136.m_FirstGlyphAdjustments)
  i2136.m_SecondGlyph = i2137[3]
  i2136.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2137[4], i2136.m_SecondGlyphAdjustments)
  i2136.m_IgnoreSpacingAdjustments = !!i2137[5]
  return i2136
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2139 = data
  i2138.m_FaceIndex = i2139[0]
  i2138.m_FamilyName = i2139[1]
  i2138.m_StyleName = i2139[2]
  i2138.m_PointSize = i2139[3]
  i2138.m_Scale = i2139[4]
  i2138.m_UnitsPerEM = i2139[5]
  i2138.m_LineHeight = i2139[6]
  i2138.m_AscentLine = i2139[7]
  i2138.m_CapLine = i2139[8]
  i2138.m_MeanLine = i2139[9]
  i2138.m_Baseline = i2139[10]
  i2138.m_DescentLine = i2139[11]
  i2138.m_SuperscriptOffset = i2139[12]
  i2138.m_SuperscriptSize = i2139[13]
  i2138.m_SubscriptOffset = i2139[14]
  i2138.m_SubscriptSize = i2139[15]
  i2138.m_UnderlineOffset = i2139[16]
  i2138.m_UnderlineThickness = i2139[17]
  i2138.m_StrikethroughOffset = i2139[18]
  i2138.m_StrikethroughThickness = i2139[19]
  i2138.m_TabWidth = i2139[20]
  return i2138
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2140 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2141 = data
  i2140.useSafeMode = !!i2141[0]
  i2140.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2141[1], i2140.safeModeOptions)
  i2140.timeScale = i2141[2]
  i2140.unscaledTimeScale = i2141[3]
  i2140.useSmoothDeltaTime = !!i2141[4]
  i2140.maxSmoothUnscaledTime = i2141[5]
  i2140.rewindCallbackMode = i2141[6]
  i2140.showUnityEditorReport = !!i2141[7]
  i2140.logBehaviour = i2141[8]
  i2140.drawGizmos = !!i2141[9]
  i2140.defaultRecyclable = !!i2141[10]
  i2140.defaultAutoPlay = i2141[11]
  i2140.defaultUpdateType = i2141[12]
  i2140.defaultTimeScaleIndependent = !!i2141[13]
  i2140.defaultEaseType = i2141[14]
  i2140.defaultEaseOvershootOrAmplitude = i2141[15]
  i2140.defaultEasePeriod = i2141[16]
  i2140.defaultAutoKill = !!i2141[17]
  i2140.defaultLoopType = i2141[18]
  i2140.debugMode = !!i2141[19]
  i2140.debugStoreTargetId = !!i2141[20]
  i2140.showPreviewPanel = !!i2141[21]
  i2140.storeSettingsLocation = i2141[22]
  i2140.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2141[23], i2140.modules)
  i2140.createASMDEF = !!i2141[24]
  i2140.showPlayingTweens = !!i2141[25]
  i2140.showPausedTweens = !!i2141[26]
  return i2140
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2142 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2143 = data
  i2142.logBehaviour = i2143[0]
  i2142.nestedTweenFailureBehaviour = i2143[1]
  return i2142
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2144 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2145 = data
  i2144.showPanel = !!i2145[0]
  i2144.audioEnabled = !!i2145[1]
  i2144.physicsEnabled = !!i2145[2]
  i2144.physics2DEnabled = !!i2145[3]
  i2144.spriteEnabled = !!i2145[4]
  i2144.uiEnabled = !!i2145[5]
  i2144.textMeshProEnabled = !!i2145[6]
  i2144.tk2DEnabled = !!i2145[7]
  i2144.deAudioEnabled = !!i2145[8]
  i2144.deUnityExtendedEnabled = !!i2145[9]
  i2144.epoOutlineEnabled = !!i2145[10]
  return i2144
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2146 = root || request.c( 'TMPro.TMP_Settings' )
  var i2147 = data
  i2146.assetVersion = i2147[0]
  i2146.m_TextWrappingMode = i2147[1]
  i2146.m_enableKerning = !!i2147[2]
  var i2149 = i2147[3]
  var i2148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.add(i2149[i + 0]);
  }
  i2146.m_ActiveFontFeatures = i2148
  i2146.m_enableExtraPadding = !!i2147[4]
  i2146.m_enableTintAllSprites = !!i2147[5]
  i2146.m_enableParseEscapeCharacters = !!i2147[6]
  i2146.m_EnableRaycastTarget = !!i2147[7]
  i2146.m_GetFontFeaturesAtRuntime = !!i2147[8]
  i2146.m_missingGlyphCharacter = i2147[9]
  i2146.m_ClearDynamicDataOnBuild = !!i2147[10]
  i2146.m_warningsDisabled = !!i2147[11]
  request.r(i2147[12], i2147[13], 0, i2146, 'm_defaultFontAsset')
  i2146.m_defaultFontAssetPath = i2147[14]
  i2146.m_defaultFontSize = i2147[15]
  i2146.m_defaultAutoSizeMinRatio = i2147[16]
  i2146.m_defaultAutoSizeMaxRatio = i2147[17]
  i2146.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2147[18], i2147[19] )
  i2146.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2147[20], i2147[21] )
  i2146.m_autoSizeTextContainer = !!i2147[22]
  i2146.m_IsTextObjectScaleStatic = !!i2147[23]
  var i2151 = i2147[24]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 1, i2150, '')
  }
  i2146.m_fallbackFontAssets = i2150
  i2146.m_matchMaterialPreset = !!i2147[25]
  i2146.m_HideSubTextObjects = !!i2147[26]
  request.r(i2147[27], i2147[28], 0, i2146, 'm_defaultSpriteAsset')
  i2146.m_defaultSpriteAssetPath = i2147[29]
  i2146.m_enableEmojiSupport = !!i2147[30]
  i2146.m_MissingCharacterSpriteUnicode = i2147[31]
  var i2153 = i2147[32]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 1, i2152, '')
  }
  i2146.m_EmojiFallbackTextAssets = i2152
  i2146.m_defaultColorGradientPresetsPath = i2147[33]
  request.r(i2147[34], i2147[35], 0, i2146, 'm_defaultStyleSheet')
  i2146.m_StyleSheetsResourcePath = i2147[36]
  request.r(i2147[37], i2147[38], 0, i2146, 'm_leadingCharacters')
  request.r(i2147[39], i2147[40], 0, i2146, 'm_followingCharacters')
  i2146.m_UseModernHangulLineBreakingRules = !!i2147[41]
  return i2146
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2156 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'spriteSheet')
  var i2159 = i2157[2]
  var i2158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.add(request.d('TMPro.TMP_Sprite', i2159[i + 0]));
  }
  i2156.spriteInfoList = i2158
  var i2161 = i2157[3]
  var i2160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 1, i2160, '')
  }
  i2156.fallbackSpriteAssets = i2160
  var i2163 = i2157[4]
  var i2162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.add(request.d('TMPro.TMP_SpriteCharacter', i2163[i + 0]));
  }
  i2156.m_SpriteCharacterTable = i2162
  var i2165 = i2157[5]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.add(request.d('TMPro.TMP_SpriteGlyph', i2165[i + 0]));
  }
  i2156.m_GlyphTable = i2164
  i2156.m_Version = i2157[6]
  i2156.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2157[7], i2156.m_FaceInfo)
  request.r(i2157[8], i2157[9], 0, i2156, 'm_Material')
  return i2156
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2168 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.hashCode = i2169[1]
  i2168.unicode = i2169[2]
  i2168.pivot = new pc.Vec2( i2169[3], i2169[4] )
  request.r(i2169[5], i2169[6], 0, i2168, 'sprite')
  i2168.id = i2169[7]
  i2168.x = i2169[8]
  i2168.y = i2169[9]
  i2168.width = i2169[10]
  i2168.height = i2169[11]
  i2168.xOffset = i2169[12]
  i2168.yOffset = i2169[13]
  i2168.xAdvance = i2169[14]
  i2168.scale = i2169[15]
  return i2168
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2174 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2175 = data
  i2174.m_Name = i2175[0]
  i2174.m_ElementType = i2175[1]
  i2174.m_Unicode = i2175[2]
  i2174.m_GlyphIndex = i2175[3]
  i2174.m_Scale = i2175[4]
  return i2174
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2178 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'sprite')
  i2178.m_Index = i2179[2]
  i2178.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2179[3], i2178.m_Metrics)
  i2178.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2179[4], i2178.m_GlyphRect)
  i2178.m_Scale = i2179[5]
  i2178.m_AtlasIndex = i2179[6]
  i2178.m_ClassDefinitionType = i2179[7]
  return i2178
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2180 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('TMPro.TMP_Style', i2183[i + 0]));
  }
  i2180.m_StyleList = i2182
  return i2180
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2186 = root || request.c( 'TMPro.TMP_Style' )
  var i2187 = data
  i2186.m_Name = i2187[0]
  i2186.m_HashCode = i2187[1]
  i2186.m_OpeningDefinition = i2187[2]
  i2186.m_ClosingDefinition = i2187[3]
  i2186.m_OpeningTagArray = i2187[4]
  i2186.m_ClosingTagArray = i2187[5]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2191[i + 0]) );
  }
  i2188.files = i2190
  i2188.componentToPrefabIds = i2189[1]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2195 = data
  i2194.path = i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'unityObject')
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2197 = data
  var i2199 = i2197[0]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2199[i + 0]) );
  }
  i2196.scriptsExecutionOrder = i2198
  var i2201 = i2197[1]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2201[i + 0]) );
  }
  i2196.sortingLayers = i2200
  var i2203 = i2197[2]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2203[i + 0]) );
  }
  i2196.cullingLayers = i2202
  i2196.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2197[3], i2196.timeSettings)
  i2196.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2197[4], i2196.physicsSettings)
  i2196.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2197[5], i2196.physics2DSettings)
  i2196.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2197[6], i2196.qualitySettings)
  i2196.enableRealtimeShadows = !!i2197[7]
  i2196.enableAutoInstancing = !!i2197[8]
  i2196.enableStaticBatching = !!i2197[9]
  i2196.enableDynamicBatching = !!i2197[10]
  i2196.usePreservativeDynamicBatching = !!i2197[11]
  i2196.lightmapEncodingQuality = i2197[12]
  i2196.desiredColorSpace = i2197[13]
  var i2205 = i2197[14]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( i2205[i + 0] );
  }
  i2196.allTags = i2204
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.value = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2213 = data
  i2212.id = i2213[0]
  i2212.name = i2213[1]
  i2212.value = i2213[2]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2217 = data
  i2216.id = i2217[0]
  i2216.name = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2219 = data
  i2218.fixedDeltaTime = i2219[0]
  i2218.maximumDeltaTime = i2219[1]
  i2218.timeScale = i2219[2]
  i2218.maximumParticleTimestep = i2219[3]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2221 = data
  i2220.gravity = new pc.Vec3( i2221[0], i2221[1], i2221[2] )
  i2220.defaultSolverIterations = i2221[3]
  i2220.bounceThreshold = i2221[4]
  i2220.autoSyncTransforms = !!i2221[5]
  i2220.autoSimulation = !!i2221[6]
  var i2223 = i2221[7]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2223[i + 0]) );
  }
  i2220.collisionMatrix = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.layerId = i2227[1]
  i2226.otherLayerId = i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'material')
  i2228.gravity = new pc.Vec2( i2229[2], i2229[3] )
  i2228.positionIterations = i2229[4]
  i2228.velocityIterations = i2229[5]
  i2228.velocityThreshold = i2229[6]
  i2228.maxLinearCorrection = i2229[7]
  i2228.maxAngularCorrection = i2229[8]
  i2228.maxTranslationSpeed = i2229[9]
  i2228.maxRotationSpeed = i2229[10]
  i2228.baumgarteScale = i2229[11]
  i2228.baumgarteTOIScale = i2229[12]
  i2228.timeToSleep = i2229[13]
  i2228.linearSleepTolerance = i2229[14]
  i2228.angularSleepTolerance = i2229[15]
  i2228.defaultContactOffset = i2229[16]
  i2228.autoSimulation = !!i2229[17]
  i2228.queriesHitTriggers = !!i2229[18]
  i2228.queriesStartInColliders = !!i2229[19]
  i2228.callbacksOnDisable = !!i2229[20]
  i2228.reuseCollisionCallbacks = !!i2229[21]
  i2228.autoSyncTransforms = !!i2229[22]
  var i2231 = i2229[23]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2231[i + 0]) );
  }
  i2228.collisionMatrix = i2230
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.layerId = i2235[1]
  i2234.otherLayerId = i2235[2]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2237 = data
  var i2239 = i2237[0]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2239[i + 0]) );
  }
  i2236.qualityLevels = i2238
  var i2241 = i2237[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( i2241[i + 0] );
  }
  i2236.names = i2240
  i2236.shadows = i2237[2]
  i2236.anisotropicFiltering = i2237[3]
  i2236.antiAliasing = i2237[4]
  i2236.lodBias = i2237[5]
  i2236.shadowCascades = i2237[6]
  i2236.shadowDistance = i2237[7]
  i2236.shadowmaskMode = i2237[8]
  i2236.shadowProjection = i2237[9]
  i2236.shadowResolution = i2237[10]
  i2236.softParticles = !!i2237[11]
  i2236.softVegetation = !!i2237[12]
  i2236.activeColorSpace = i2237[13]
  i2236.desiredColorSpace = i2237[14]
  i2236.masterTextureLimit = i2237[15]
  i2236.maxQueuedFrames = i2237[16]
  i2236.particleRaycastBudget = i2237[17]
  i2236.pixelLightCount = i2237[18]
  i2236.realtimeReflectionProbes = !!i2237[19]
  i2236.shadowCascade2Split = i2237[20]
  i2236.shadowCascade4Split = new pc.Vec3( i2237[21], i2237[22], i2237[23] )
  i2236.streamingMipmapsActive = !!i2237[24]
  i2236.vSyncCount = i2237[25]
  i2236.asyncUploadBufferSize = i2237[26]
  i2236.asyncUploadTimeSlice = i2237[27]
  i2236.billboardsFaceCameraPosition = !!i2237[28]
  i2236.shadowNearPlaneOffset = i2237[29]
  i2236.streamingMipmapsMemoryBudget = i2237[30]
  i2236.maximumLODLevel = i2237[31]
  i2236.streamingMipmapsAddAllCameras = !!i2237[32]
  i2236.streamingMipmapsMaxLevelReduction = i2237[33]
  i2236.streamingMipmapsRenderersPerFrame = i2237[34]
  i2236.resolutionScalingFixedDPIFactor = i2237[35]
  i2236.streamingMipmapsMaxFileIORequests = i2237[36]
  i2236.currentQualityLevel = i2237[37]
  return i2236
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'm_ObjectArgument')
  i2244.m_ObjectArgumentAssemblyTypeName = i2245[2]
  i2244.m_IntArgument = i2245[3]
  i2244.m_FloatArgument = i2245[4]
  i2244.m_StringArgument = i2245[5]
  i2244.m_BoolArgument = !!i2245[6]
  return i2244
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2247 = data
  i2246.m_GlyphIndex = i2247[0]
  i2246.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2247[1], i2246.m_GlyphValueRecord)
  return i2246
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2248 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2249 = data
  i2248.m_XCoordinate = i2249[0]
  i2248.m_YCoordinate = i2249[1]
  return i2248
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2250 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2251 = data
  i2250.m_XPositionAdjustment = i2251[0]
  i2250.m_YPositionAdjustment = i2251[1]
  return i2250
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2252 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2253 = data
  i2252.xPlacement = i2253[0]
  i2252.yPlacement = i2253[1]
  i2252.xAdvance = i2253[2]
  i2252.yAdvance = i2253[3]
  return i2252
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2255 = data
  i2254.m_XPlacement = i2255[0]
  i2254.m_YPlacement = i2255[1]
  i2254.m_XAdvance = i2255[2]
  i2254.m_YAdvance = i2255[3]
  return i2254
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

Deserializers.lunaAppID = "43647";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1745";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4526";

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

Deserializers.buildID = "adecf5f5-755f-4502-b282-cf0c1b3a05b3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

