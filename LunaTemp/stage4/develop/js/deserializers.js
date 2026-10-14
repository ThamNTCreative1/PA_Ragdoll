var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.JointSpring' )
  var i1717 = data
  i1716.spring = i1717[0]
  i1716.damper = i1717[1]
  i1716.targetPosition = i1717[2]
  return i1716
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.JointMotor' )
  var i1719 = data
  i1718.m_TargetVelocity = i1719[0]
  i1718.m_Force = i1719[1]
  i1718.m_FreeSpin = i1719[2]
  return i1718
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.JointLimits' )
  var i1721 = data
  i1720.m_Min = i1721[0]
  i1720.m_Max = i1721[1]
  i1720.m_Bounciness = i1721[2]
  i1720.m_BounceMinVelocity = i1721[3]
  i1720.m_ContactDistance = i1721[4]
  i1720.minBounce = i1721[5]
  i1720.maxBounce = i1721[6]
  return i1720
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.JointDrive' )
  var i1723 = data
  i1722.m_PositionSpring = i1723[0]
  i1722.m_PositionDamper = i1723[1]
  i1722.m_MaximumForce = i1723[2]
  i1722.m_UseAcceleration = i1723[3]
  return i1722
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1725 = data
  i1724.m_Spring = i1725[0]
  i1724.m_Damper = i1725[1]
  return i1724
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1727 = data
  i1726.m_Limit = i1727[0]
  i1726.m_Bounciness = i1727[1]
  i1726.m_ContactDistance = i1727[2]
  return i1726
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1729 = data
  i1728.m_ExtremumSlip = i1729[0]
  i1728.m_ExtremumValue = i1729[1]
  i1728.m_AsymptoteSlip = i1729[2]
  i1728.m_AsymptoteValue = i1729[3]
  i1728.m_Stiffness = i1729[4]
  return i1728
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1731 = data
  i1730.m_LowerAngle = i1731[0]
  i1730.m_UpperAngle = i1731[1]
  return i1730
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1733 = data
  i1732.m_MotorSpeed = i1733[0]
  i1732.m_MaximumMotorTorque = i1733[1]
  return i1732
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1735 = data
  i1734.m_DampingRatio = i1735[0]
  i1734.m_Frequency = i1735[1]
  i1734.m_Angle = i1735[2]
  return i1734
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1737 = data
  i1736.m_LowerTranslation = i1737[0]
  i1736.m_UpperTranslation = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.width = i1739[1]
  i1738.height = i1739[2]
  i1738.mipmapCount = i1739[3]
  i1738.anisoLevel = i1739[4]
  i1738.filterMode = i1739[5]
  i1738.hdr = !!i1739[6]
  i1738.format = i1739[7]
  i1738.wrapMode = i1739[8]
  i1738.alphaIsTransparency = !!i1739[9]
  i1738.alphaSource = i1739[10]
  i1738.graphicsFormat = i1739[11]
  i1738.sRGBTexture = !!i1739[12]
  i1738.desiredColorSpace = i1739[13]
  i1738.wrapU = i1739[14]
  i1738.wrapV = i1739[15]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.halfPrecision = !!i1741[1]
  i1740.useSimplification = !!i1741[2]
  i1740.useUInt32IndexFormat = !!i1741[3]
  i1740.vertexCount = i1741[4]
  i1740.aabb = i1741[5]
  var i1743 = i1741[6]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( !!i1743[i + 0] );
  }
  i1740.streams = i1742
  i1740.vertices = i1741[7]
  var i1745 = i1741[8]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1745[i + 0]) );
  }
  i1740.subMeshes = i1744
  var i1747 = i1741[9]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 16) {
    i1746.push( new pc.Mat4().setData(i1747[i + 0], i1747[i + 1], i1747[i + 2], i1747[i + 3],  i1747[i + 4], i1747[i + 5], i1747[i + 6], i1747[i + 7],  i1747[i + 8], i1747[i + 9], i1747[i + 10], i1747[i + 11],  i1747[i + 12], i1747[i + 13], i1747[i + 14], i1747[i + 15]) );
  }
  i1740.bindposes = i1746
  var i1749 = i1741[10]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1749[i + 0]) );
  }
  i1740.blendShapes = i1748
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1755 = data
  i1754.triangles = i1755[0]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1761 = data
  i1760.name = i1761[0]
  var i1763 = i1761[1]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1763[i + 0]) );
  }
  i1760.frames = i1762
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1764 = root || new pc.UnityMaterial()
  var i1765 = data
  i1764.name = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'shader')
  i1764.renderQueue = i1765[3]
  i1764.enableInstancing = !!i1765[4]
  var i1767 = i1765[5]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1767[i + 0]) );
  }
  i1764.floatParameters = i1766
  var i1769 = i1765[6]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1769[i + 0]) );
  }
  i1764.colorParameters = i1768
  var i1771 = i1765[7]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1771[i + 0]) );
  }
  i1764.vectorParameters = i1770
  var i1773 = i1765[8]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1773[i + 0]) );
  }
  i1764.textureParameters = i1772
  var i1775 = i1765[9]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1775[i + 0]) );
  }
  i1764.materialFlags = i1774
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.value = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1783 = data
  i1782.name = i1783[0]
  i1782.value = new pc.Color(i1783[1], i1783[2], i1783[3], i1783[4])
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1787 = data
  i1786.name = i1787[0]
  i1786.value = new pc.Vec4( i1787[1], i1787[2], i1787[3], i1787[4] )
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1791 = data
  i1790.name = i1791[0]
  request.r(i1791[1], i1791[2], 0, i1790, 'value')
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.enabled = !!i1795[1]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1797 = data
  i1796.position = new pc.Vec3( i1797[0], i1797[1], i1797[2] )
  i1796.scale = new pc.Vec3( i1797[3], i1797[4], i1797[5] )
  i1796.rotation = new pc.Quat(i1797[6], i1797[7], i1797[8], i1797[9])
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1799 = data
  i1798.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1799[0], i1798.main)
  i1798.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1799[1], i1798.colorBySpeed)
  i1798.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1799[2], i1798.colorOverLifetime)
  i1798.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1799[3], i1798.emission)
  i1798.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1799[4], i1798.rotationBySpeed)
  i1798.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1799[5], i1798.rotationOverLifetime)
  i1798.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1799[6], i1798.shape)
  i1798.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1799[7], i1798.sizeBySpeed)
  i1798.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1799[8], i1798.sizeOverLifetime)
  i1798.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1799[9], i1798.textureSheetAnimation)
  i1798.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1799[10], i1798.velocityOverLifetime)
  i1798.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1799[11], i1798.noise)
  i1798.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1799[12], i1798.inheritVelocity)
  i1798.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1799[13], i1798.forceOverLifetime)
  i1798.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1799[14], i1798.limitVelocityOverLifetime)
  i1798.useAutoRandomSeed = !!i1799[15]
  i1798.randomSeed = i1799[16]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemMain()
  var i1801 = data
  i1800.duration = i1801[0]
  i1800.loop = !!i1801[1]
  i1800.prewarm = !!i1801[2]
  i1800.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.startDelay)
  i1800.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[4], i1800.startLifetime)
  i1800.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[5], i1800.startSpeed)
  i1800.startSize3D = !!i1801[6]
  i1800.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[7], i1800.startSizeX)
  i1800.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[8], i1800.startSizeY)
  i1800.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[9], i1800.startSizeZ)
  i1800.startRotation3D = !!i1801[10]
  i1800.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[11], i1800.startRotationX)
  i1800.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[12], i1800.startRotationY)
  i1800.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[13], i1800.startRotationZ)
  i1800.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1801[14], i1800.startColor)
  i1800.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[15], i1800.gravityModifier)
  i1800.simulationSpace = i1801[16]
  request.r(i1801[17], i1801[18], 0, i1800, 'customSimulationSpace')
  i1800.simulationSpeed = i1801[19]
  i1800.useUnscaledTime = !!i1801[20]
  i1800.scalingMode = i1801[21]
  i1800.playOnAwake = !!i1801[22]
  i1800.maxParticles = i1801[23]
  i1800.emitterVelocityMode = i1801[24]
  i1800.stopAction = i1801[25]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1802 = root || new pc.MinMaxCurve()
  var i1803 = data
  i1802.mode = i1803[0]
  i1802.curveMin = new pc.AnimationCurve( { keys_flow: i1803[1] } )
  i1802.curveMax = new pc.AnimationCurve( { keys_flow: i1803[2] } )
  i1802.curveMultiplier = i1803[3]
  i1802.constantMin = i1803[4]
  i1802.constantMax = i1803[5]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1804 = root || new pc.MinMaxGradient()
  var i1805 = data
  i1804.mode = i1805[0]
  i1804.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1805[1], i1804.gradientMin)
  i1804.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1805[2], i1804.gradientMax)
  i1804.colorMin = new pc.Color(i1805[3], i1805[4], i1805[5], i1805[6])
  i1804.colorMax = new pc.Color(i1805[7], i1805[8], i1805[9], i1805[10])
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1807 = data
  i1806.mode = i1807[0]
  var i1809 = i1807[1]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1809[i + 0]) );
  }
  i1806.colorKeys = i1808
  var i1811 = i1807[2]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1811[i + 0]) );
  }
  i1806.alphaKeys = i1810
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemColorBySpeed()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1813[1], i1812.color)
  i1812.range = new pc.Vec2( i1813[2], i1813[3] )
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1817 = data
  i1816.color = new pc.Color(i1817[0], i1817[1], i1817[2], i1817[3])
  i1816.time = i1817[4]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1821 = data
  i1820.alpha = i1821[0]
  i1820.time = i1821[1]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemColorOverLifetime()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1823[1], i1822.color)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemEmitter()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[1], i1824.rateOverTime)
  i1824.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[2], i1824.rateOverDistance)
  var i1827 = i1825[3]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1827[i + 0]) );
  }
  i1824.bursts = i1826
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1830 = root || new pc.ParticleSystemBurst()
  var i1831 = data
  i1830.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1831[0], i1830.count)
  i1830.cycleCount = i1831[1]
  i1830.minCount = i1831[2]
  i1830.maxCount = i1831[3]
  i1830.repeatInterval = i1831[4]
  i1830.time = i1831[5]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1832 = root || new pc.ParticleSystemRotationBySpeed()
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[1], i1832.x)
  i1832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[2], i1832.y)
  i1832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1833[3], i1832.z)
  i1832.separateAxes = !!i1833[4]
  i1832.range = new pc.Vec2( i1833[5], i1833[6] )
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1834 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1835 = data
  i1834.enabled = !!i1835[0]
  i1834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[1], i1834.x)
  i1834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[2], i1834.y)
  i1834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1835[3], i1834.z)
  i1834.separateAxes = !!i1835[4]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1836 = root || new pc.ParticleSystemShape()
  var i1837 = data
  i1836.enabled = !!i1837[0]
  i1836.shapeType = i1837[1]
  i1836.randomDirectionAmount = i1837[2]
  i1836.sphericalDirectionAmount = i1837[3]
  i1836.randomPositionAmount = i1837[4]
  i1836.alignToDirection = !!i1837[5]
  i1836.radius = i1837[6]
  i1836.radiusMode = i1837[7]
  i1836.radiusSpread = i1837[8]
  i1836.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[9], i1836.radiusSpeed)
  i1836.radiusThickness = i1837[10]
  i1836.angle = i1837[11]
  i1836.length = i1837[12]
  i1836.boxThickness = new pc.Vec3( i1837[13], i1837[14], i1837[15] )
  i1836.meshShapeType = i1837[16]
  request.r(i1837[17], i1837[18], 0, i1836, 'mesh')
  request.r(i1837[19], i1837[20], 0, i1836, 'meshRenderer')
  request.r(i1837[21], i1837[22], 0, i1836, 'skinnedMeshRenderer')
  i1836.useMeshMaterialIndex = !!i1837[23]
  i1836.meshMaterialIndex = i1837[24]
  i1836.useMeshColors = !!i1837[25]
  i1836.normalOffset = i1837[26]
  i1836.arc = i1837[27]
  i1836.arcMode = i1837[28]
  i1836.arcSpread = i1837[29]
  i1836.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1837[30], i1836.arcSpeed)
  i1836.donutRadius = i1837[31]
  i1836.position = new pc.Vec3( i1837[32], i1837[33], i1837[34] )
  i1836.rotation = new pc.Vec3( i1837[35], i1837[36], i1837[37] )
  i1836.scale = new pc.Vec3( i1837[38], i1837[39], i1837[40] )
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1838 = root || new pc.ParticleSystemSizeBySpeed()
  var i1839 = data
  i1838.enabled = !!i1839[0]
  i1838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[1], i1838.x)
  i1838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[2], i1838.y)
  i1838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1839[3], i1838.z)
  i1838.separateAxes = !!i1839[4]
  i1838.range = new pc.Vec2( i1839[5], i1839[6] )
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1840 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[1], i1840.x)
  i1840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[2], i1840.y)
  i1840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1841[3], i1840.z)
  i1840.separateAxes = !!i1841[4]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1842 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1843 = data
  i1842.enabled = !!i1843[0]
  i1842.mode = i1843[1]
  i1842.animation = i1843[2]
  i1842.numTilesX = i1843[3]
  i1842.numTilesY = i1843[4]
  i1842.useRandomRow = !!i1843[5]
  i1842.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[6], i1842.frameOverTime)
  i1842.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[7], i1842.startFrame)
  i1842.cycleCount = i1843[8]
  i1842.rowIndex = i1843[9]
  i1842.flipU = i1843[10]
  i1842.flipV = i1843[11]
  i1842.spriteCount = i1843[12]
  var i1845 = i1843[13]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 2, i1844, '')
  }
  i1842.sprites = i1844
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1848 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[1], i1848.x)
  i1848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[2], i1848.y)
  i1848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[3], i1848.z)
  i1848.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[4], i1848.radial)
  i1848.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[5], i1848.speedModifier)
  i1848.space = i1849[6]
  i1848.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[7], i1848.orbitalX)
  i1848.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[8], i1848.orbitalY)
  i1848.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[9], i1848.orbitalZ)
  i1848.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[10], i1848.orbitalOffsetX)
  i1848.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[11], i1848.orbitalOffsetY)
  i1848.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1849[12], i1848.orbitalOffsetZ)
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1850 = root || new pc.ParticleSystemNoise()
  var i1851 = data
  i1850.enabled = !!i1851[0]
  i1850.separateAxes = !!i1851[1]
  i1850.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[2], i1850.strengthX)
  i1850.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[3], i1850.strengthY)
  i1850.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[4], i1850.strengthZ)
  i1850.frequency = i1851[5]
  i1850.damping = !!i1851[6]
  i1850.octaveCount = i1851[7]
  i1850.octaveMultiplier = i1851[8]
  i1850.octaveScale = i1851[9]
  i1850.quality = i1851[10]
  i1850.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[11], i1850.scrollSpeed)
  i1850.scrollSpeedMultiplier = i1851[12]
  i1850.remapEnabled = !!i1851[13]
  i1850.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[14], i1850.remapX)
  i1850.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[15], i1850.remapY)
  i1850.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[16], i1850.remapZ)
  i1850.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[17], i1850.positionAmount)
  i1850.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[18], i1850.rotationAmount)
  i1850.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1851[19], i1850.sizeAmount)
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1852 = root || new pc.ParticleSystemInheritVelocity()
  var i1853 = data
  i1852.enabled = !!i1853[0]
  i1852.mode = i1853[1]
  i1852.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[2], i1852.curve)
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1854 = root || new pc.ParticleSystemForceOverLifetime()
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[1], i1854.x)
  i1854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[2], i1854.y)
  i1854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1855[3], i1854.z)
  i1854.space = i1855[4]
  i1854.randomized = !!i1855[5]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1856 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1857 = data
  i1856.enabled = !!i1857[0]
  i1856.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[1], i1856.limit)
  i1856.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[2], i1856.limitX)
  i1856.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[3], i1856.limitY)
  i1856.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[4], i1856.limitZ)
  i1856.dampen = i1857[5]
  i1856.separateAxes = !!i1857[6]
  i1856.space = i1857[7]
  i1856.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1857[8], i1856.drag)
  i1856.multiplyDragByParticleSize = !!i1857[9]
  i1856.multiplyDragByParticleVelocity = !!i1857[10]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'mesh')
  i1858.meshCount = i1859[2]
  i1858.activeVertexStreamsCount = i1859[3]
  i1858.alignment = i1859[4]
  i1858.renderMode = i1859[5]
  i1858.sortMode = i1859[6]
  i1858.lengthScale = i1859[7]
  i1858.velocityScale = i1859[8]
  i1858.cameraVelocityScale = i1859[9]
  i1858.normalDirection = i1859[10]
  i1858.sortingFudge = i1859[11]
  i1858.minParticleSize = i1859[12]
  i1858.maxParticleSize = i1859[13]
  i1858.pivot = new pc.Vec3( i1859[14], i1859[15], i1859[16] )
  request.r(i1859[17], i1859[18], 0, i1858, 'trailMaterial')
  i1858.applyActiveColorSpace = !!i1859[19]
  i1858.enabled = !!i1859[20]
  request.r(i1859[21], i1859[22], 0, i1858, 'sharedMaterial')
  var i1861 = i1859[23]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.sharedMaterials = i1860
  i1858.receiveShadows = !!i1859[24]
  i1858.shadowCastingMode = i1859[25]
  i1858.sortingLayerID = i1859[26]
  i1858.sortingOrder = i1859[27]
  i1858.lightmapIndex = i1859[28]
  i1858.lightmapSceneIndex = i1859[29]
  i1858.lightmapScaleOffset = new pc.Vec4( i1859[30], i1859[31], i1859[32], i1859[33] )
  i1858.lightProbeUsage = i1859[34]
  i1858.reflectionProbeUsage = i1859[35]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.tagId = i1865[1]
  i1864.enabled = !!i1865[2]
  i1864.isStatic = !!i1865[3]
  i1864.layer = i1865[4]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.atlasId = i1867[1]
  i1866.mipmapCount = i1867[2]
  i1866.hdr = !!i1867[3]
  i1866.size = i1867[4]
  i1866.anisoLevel = i1867[5]
  i1866.filterMode = i1867[6]
  var i1869 = i1867[7]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 4) {
    i1868.push( UnityEngine.Rect.MinMaxRect(i1869[i + 0], i1869[i + 1], i1869[i + 2], i1869[i + 3]) );
  }
  i1866.rects = i1868
  i1866.wrapU = i1867[8]
  i1866.wrapV = i1867[9]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.index = i1873[1]
  i1872.startup = !!i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1875 = data
  i1874.aspect = i1875[0]
  i1874.orthographic = !!i1875[1]
  i1874.orthographicSize = i1875[2]
  i1874.backgroundColor = new pc.Color(i1875[3], i1875[4], i1875[5], i1875[6])
  i1874.nearClipPlane = i1875[7]
  i1874.farClipPlane = i1875[8]
  i1874.fieldOfView = i1875[9]
  i1874.depth = i1875[10]
  i1874.clearFlags = i1875[11]
  i1874.cullingMask = i1875[12]
  i1874.rect = i1875[13]
  request.r(i1875[14], i1875[15], 0, i1874, 'targetTexture')
  i1874.usePhysicalProperties = !!i1875[16]
  i1874.focalLength = i1875[17]
  i1874.sensorSize = new pc.Vec2( i1875[18], i1875[19] )
  i1874.lensShift = new pc.Vec2( i1875[20], i1875[21] )
  i1874.gateFit = i1875[22]
  i1874.commandBufferCount = i1875[23]
  i1874.cameraType = i1875[24]
  i1874.enabled = !!i1875[25]
  return i1874
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1876 = root || request.c( 'CameraController' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'cam')
  var i1879 = i1877[2]
  var i1878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1879.length; i += 3) {
    i1878.add(new pc.Vec3( i1879[i + 0], i1879[i + 1], i1879[i + 2] ));
  }
  i1876.camSetupPosition = i1878
  i1876.index = i1877[3]
  i1876.panSpeed = i1877[4]
  i1876.minPosition = new pc.Vec2( i1877[5], i1877[6] )
  i1876.maxPosition = new pc.Vec2( i1877[7], i1877[8] )
  i1876.ignoreDragableObjects = !!i1877[9]
  i1876.minFieldOfView = i1877[10]
  i1876.maxFieldOfView = i1877[11]
  i1876.pinchZoomSpeed = i1877[12]
  i1876.mouseWheelZoomSpeed = i1877[13]
  return i1876
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'm_FirstSelected')
  i1882.m_sendNavigationEvents = !!i1883[2]
  i1882.m_DragThreshold = i1883[3]
  return i1882
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1885 = data
  i1884.m_HorizontalAxis = i1885[0]
  i1884.m_VerticalAxis = i1885[1]
  i1884.m_SubmitButton = i1885[2]
  i1884.m_CancelButton = i1885[3]
  i1884.m_InputActionsPerSecond = i1885[4]
  i1884.m_RepeatDelay = i1885[5]
  i1884.m_ForceModuleActive = !!i1885[6]
  i1884.m_SendPointerHoverToParent = !!i1885[7]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1887 = data
  i1886.type = i1887[0]
  i1886.color = new pc.Color(i1887[1], i1887[2], i1887[3], i1887[4])
  i1886.cullingMask = i1887[5]
  i1886.intensity = i1887[6]
  i1886.range = i1887[7]
  i1886.spotAngle = i1887[8]
  i1886.shadows = i1887[9]
  i1886.shadowNormalBias = i1887[10]
  i1886.shadowBias = i1887[11]
  i1886.shadowStrength = i1887[12]
  i1886.shadowResolution = i1887[13]
  i1886.lightmapBakeType = i1887[14]
  i1886.renderMode = i1887[15]
  request.r(i1887[16], i1887[17], 0, i1886, 'cookie')
  i1886.cookieSize = i1887[18]
  i1886.shadowNearPlane = i1887[19]
  i1886.occlusionMaskChannel = i1887[20]
  i1886.isBaked = !!i1887[21]
  i1886.mixedLightingMode = i1887[22]
  i1886.enabled = !!i1887[23]
  return i1886
}

Deserializers["GameController"] = function (request, data, root) {
  var i1888 = root || request.c( 'GameController' )
  var i1889 = data
  i1888.OnNextPhase = request.d('System.Action', i1889[0], i1888.OnNextPhase)
  i1888.currentPhase = i1889[1]
  var i1891 = i1889[2]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('Phase', i1891[i + 0]));
  }
  i1888.phases = i1890
  var i1893 = i1889[3]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 1, i1892, '')
  }
  i1888.nextButton = i1892
  request.r(i1889[4], i1889[5], 0, i1888, 'nextSound')
  var i1895 = i1889[6]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 1, i1894, '')
  }
  i1888.buttons = i1894
  return i1888
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1896 = root || request.c( 'System.Action' )
  var i1897 = data
  return i1896
}

Deserializers["Phase"] = function (request, data, root) {
  var i1900 = root || request.c( 'Phase' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'Game')
  request.r(i1901[2], i1901[3], 0, i1900, 'UI')
  return i1900
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1904 = root || request.c( 'LunaController' )
  var i1905 = data
  i1904.LimitTimePlay = !!i1905[0]
  i1904.TimePlay = i1905[1]
  i1904.LimitStagePlay = !!i1905[2]
  i1904.StagePlay = i1905[3]
  i1904.UseCustomBG = !!i1905[4]
  request.r(i1905[5], i1905[6], 0, i1904, 'BGTexture')
  request.r(i1905[7], i1905[8], 0, i1904, 'BGM')
  i1904.Phase1TextColor = new pc.Color(i1905[9], i1905[10], i1905[11], i1905[12])
  i1904.Phase2TextColor = new pc.Color(i1905[13], i1905[14], i1905[15], i1905[16])
  i1904.Phase3TextColor = new pc.Color(i1905[17], i1905[18], i1905[19], i1905[20])
  request.r(i1905[21], i1905[22], 0, i1904, 'phase1Text')
  request.r(i1905[23], i1905[24], 0, i1904, 'phase2Text')
  request.r(i1905[25], i1905[26], 0, i1904, 'phase3Text1')
  request.r(i1905[27], i1905[28], 0, i1904, 'phase3Text2')
  request.r(i1905[29], i1905[30], 0, i1904, 'BGImage')
  request.r(i1905[31], i1905[32], 0, i1904, 'musicSource')
  var i1907 = i1905[33]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 1, i1906, '')
  }
  i1904.CTA = i1906
  i1904.currentStage = i1905[34]
  return i1904
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1908 = root || request.c( 'AudioController' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'poolParent')
  i1908.startSize = i1909[2]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'clip')
  request.r(i1911[2], i1911[3], 0, i1910, 'outputAudioMixerGroup')
  i1910.playOnAwake = !!i1911[4]
  i1910.loop = !!i1911[5]
  i1910.time = i1911[6]
  i1910.volume = i1911[7]
  i1910.pitch = i1911[8]
  i1910.enabled = !!i1911[9]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1913 = data
  i1912.pivot = new pc.Vec2( i1913[0], i1913[1] )
  i1912.anchorMin = new pc.Vec2( i1913[2], i1913[3] )
  i1912.anchorMax = new pc.Vec2( i1913[4], i1913[5] )
  i1912.sizeDelta = new pc.Vec2( i1913[6], i1913[7] )
  i1912.anchoredPosition3D = new pc.Vec3( i1913[8], i1913[9], i1913[10] )
  i1912.rotation = new pc.Quat(i1913[11], i1913[12], i1913[13], i1913[14])
  i1912.scale = new pc.Vec3( i1913[15], i1913[16], i1913[17] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1915 = data
  i1914.planeDistance = i1915[0]
  i1914.referencePixelsPerUnit = i1915[1]
  i1914.isFallbackOverlay = !!i1915[2]
  i1914.renderMode = i1915[3]
  i1914.renderOrder = i1915[4]
  i1914.sortingLayerName = i1915[5]
  i1914.sortingOrder = i1915[6]
  i1914.scaleFactor = i1915[7]
  request.r(i1915[8], i1915[9], 0, i1914, 'worldCamera')
  i1914.overrideSorting = !!i1915[10]
  i1914.pixelPerfect = !!i1915[11]
  i1914.targetDisplay = i1915[12]
  i1914.overridePixelPerfect = !!i1915[13]
  i1914.enabled = !!i1915[14]
  return i1914
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1917 = data
  i1916.m_UiScaleMode = i1917[0]
  i1916.m_ReferencePixelsPerUnit = i1917[1]
  i1916.m_ScaleFactor = i1917[2]
  i1916.m_ReferenceResolution = new pc.Vec2( i1917[3], i1917[4] )
  i1916.m_ScreenMatchMode = i1917[5]
  i1916.m_MatchWidthOrHeight = i1917[6]
  i1916.m_PhysicalUnit = i1917[7]
  i1916.m_FallbackScreenDPI = i1917[8]
  i1916.m_DefaultSpriteDPI = i1917[9]
  i1916.m_DynamicPixelsPerUnit = i1917[10]
  i1916.m_PresetInfoIsWorld = !!i1917[11]
  return i1916
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1919 = data
  i1918.m_IgnoreReversedGraphics = !!i1919[0]
  i1918.m_BlockingObjects = i1919[1]
  i1918.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1919[2] )
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1921 = data
  i1920.cullTransparentMesh = !!i1921[0]
  return i1920
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.Text' )
  var i1923 = data
  i1922.m_FontData = request.d('UnityEngine.UI.FontData', i1923[0], i1922.m_FontData)
  i1922.m_Text = i1923[1]
  request.r(i1923[2], i1923[3], 0, i1922, 'm_Material')
  i1922.m_Maskable = !!i1923[4]
  i1922.m_Color = new pc.Color(i1923[5], i1923[6], i1923[7], i1923[8])
  i1922.m_RaycastTarget = !!i1923[9]
  i1922.m_RaycastPadding = new pc.Vec4( i1923[10], i1923[11], i1923[12], i1923[13] )
  return i1922
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_Font')
  i1924.m_FontSize = i1925[2]
  i1924.m_FontStyle = i1925[3]
  i1924.m_BestFit = !!i1925[4]
  i1924.m_MinSize = i1925[5]
  i1924.m_MaxSize = i1925[6]
  i1924.m_Alignment = i1925[7]
  i1924.m_AlignByGeometry = !!i1925[8]
  i1924.m_RichText = !!i1925[9]
  i1924.m_HorizontalOverflow = i1925[10]
  i1924.m_VerticalOverflow = i1925[11]
  i1924.m_LineSpacing = i1925[12]
  return i1924
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1926 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1927 = data
  i1926.targetIsSelf = !!i1927[0]
  request.r(i1927[1], i1927[2], 0, i1926, 'targetGO')
  i1926.tweenTargetIsTargetGO = !!i1927[3]
  i1926.delay = i1927[4]
  i1926.duration = i1927[5]
  i1926.easeType = i1927[6]
  i1926.easeCurve = new pc.AnimationCurve( { keys_flow: i1927[7] } )
  i1926.loopType = i1927[8]
  i1926.loops = i1927[9]
  i1926.id = i1927[10]
  i1926.isRelative = !!i1927[11]
  i1926.isFrom = !!i1927[12]
  i1926.isIndependentUpdate = !!i1927[13]
  i1926.autoKill = !!i1927[14]
  i1926.autoGenerate = !!i1927[15]
  i1926.isActive = !!i1927[16]
  i1926.isValid = !!i1927[17]
  request.r(i1927[18], i1927[19], 0, i1926, 'target')
  i1926.animationType = i1927[20]
  i1926.targetType = i1927[21]
  i1926.forcedTargetType = i1927[22]
  i1926.autoPlay = !!i1927[23]
  i1926.useTargetAsV3 = !!i1927[24]
  i1926.endValueFloat = i1927[25]
  i1926.endValueV3 = new pc.Vec3( i1927[26], i1927[27], i1927[28] )
  i1926.endValueV2 = new pc.Vec2( i1927[29], i1927[30] )
  i1926.endValueColor = new pc.Color(i1927[31], i1927[32], i1927[33], i1927[34])
  i1926.endValueString = i1927[35]
  i1926.endValueRect = UnityEngine.Rect.MinMaxRect(i1927[36], i1927[37], i1927[38], i1927[39])
  request.r(i1927[40], i1927[41], 0, i1926, 'endValueTransform')
  i1926.optionalBool0 = !!i1927[42]
  i1926.optionalBool1 = !!i1927[43]
  i1926.optionalFloat0 = i1927[44]
  i1926.optionalInt0 = i1927[45]
  i1926.optionalRotationMode = i1927[46]
  i1926.optionalScrambleMode = i1927[47]
  i1926.optionalShakeRandomnessMode = i1927[48]
  i1926.optionalString = i1927[49]
  i1926.updateType = i1927[50]
  i1926.isSpeedBased = !!i1927[51]
  i1926.hasOnStart = !!i1927[52]
  i1926.hasOnPlay = !!i1927[53]
  i1926.hasOnUpdate = !!i1927[54]
  i1926.hasOnStepComplete = !!i1927[55]
  i1926.hasOnComplete = !!i1927[56]
  i1926.hasOnTweenCreated = !!i1927[57]
  i1926.hasOnRewind = !!i1927[58]
  i1926.onStart = request.d('UnityEngine.Events.UnityEvent', i1927[59], i1926.onStart)
  i1926.onPlay = request.d('UnityEngine.Events.UnityEvent', i1927[60], i1926.onPlay)
  i1926.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1927[61], i1926.onUpdate)
  i1926.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1927[62], i1926.onStepComplete)
  i1926.onComplete = request.d('UnityEngine.Events.UnityEvent', i1927[63], i1926.onComplete)
  i1926.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1927[64], i1926.onTweenCreated)
  i1926.onRewind = request.d('UnityEngine.Events.UnityEvent', i1927[65], i1926.onRewind)
  return i1926
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1929 = data
  i1928.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1929[0], i1928.m_PersistentCalls)
  return i1928
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1930 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1931 = data
  var i1933 = i1931[0]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('UnityEngine.Events.PersistentCall', i1933[i + 0]));
  }
  i1930.m_Calls = i1932
  return i1930
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'm_Target')
  i1936.m_TargetAssemblyTypeName = i1937[2]
  i1936.m_MethodName = i1937[3]
  i1936.m_Mode = i1937[4]
  i1936.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1937[5], i1936.m_Arguments)
  i1936.m_CallState = i1937[6]
  return i1936
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.UI.Button' )
  var i1939 = data
  i1938.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1939[0], i1938.m_OnClick)
  i1938.m_Navigation = request.d('UnityEngine.UI.Navigation', i1939[1], i1938.m_Navigation)
  i1938.m_Transition = i1939[2]
  i1938.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1939[3], i1938.m_Colors)
  i1938.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1939[4], i1938.m_SpriteState)
  i1938.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1939[5], i1938.m_AnimationTriggers)
  i1938.m_Interactable = !!i1939[6]
  request.r(i1939[7], i1939[8], 0, i1938, 'm_TargetGraphic')
  return i1938
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1941 = data
  i1940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1941[0], i1940.m_PersistentCalls)
  return i1940
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1943 = data
  i1942.m_Mode = i1943[0]
  i1942.m_WrapAround = !!i1943[1]
  request.r(i1943[2], i1943[3], 0, i1942, 'm_SelectOnUp')
  request.r(i1943[4], i1943[5], 0, i1942, 'm_SelectOnDown')
  request.r(i1943[6], i1943[7], 0, i1942, 'm_SelectOnLeft')
  request.r(i1943[8], i1943[9], 0, i1942, 'm_SelectOnRight')
  return i1942
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1945 = data
  i1944.m_NormalColor = new pc.Color(i1945[0], i1945[1], i1945[2], i1945[3])
  i1944.m_HighlightedColor = new pc.Color(i1945[4], i1945[5], i1945[6], i1945[7])
  i1944.m_PressedColor = new pc.Color(i1945[8], i1945[9], i1945[10], i1945[11])
  i1944.m_SelectedColor = new pc.Color(i1945[12], i1945[13], i1945[14], i1945[15])
  i1944.m_DisabledColor = new pc.Color(i1945[16], i1945[17], i1945[18], i1945[19])
  i1944.m_ColorMultiplier = i1945[20]
  i1944.m_FadeDuration = i1945[21]
  return i1944
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'm_HighlightedSprite')
  request.r(i1947[2], i1947[3], 0, i1946, 'm_PressedSprite')
  request.r(i1947[4], i1947[5], 0, i1946, 'm_SelectedSprite')
  request.r(i1947[6], i1947[7], 0, i1946, 'm_DisabledSprite')
  return i1946
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1949 = data
  i1948.m_NormalTrigger = i1949[0]
  i1948.m_HighlightedTrigger = i1949[1]
  i1948.m_PressedTrigger = i1949[2]
  i1948.m_SelectedTrigger = i1949[3]
  i1948.m_DisabledTrigger = i1949[4]
  return i1948
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.UI.Image' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'm_Sprite')
  i1950.m_Type = i1951[2]
  i1950.m_PreserveAspect = !!i1951[3]
  i1950.m_FillCenter = !!i1951[4]
  i1950.m_FillMethod = i1951[5]
  i1950.m_FillAmount = i1951[6]
  i1950.m_FillClockwise = !!i1951[7]
  i1950.m_FillOrigin = i1951[8]
  i1950.m_UseSpriteMesh = !!i1951[9]
  i1950.m_PixelsPerUnitMultiplier = i1951[10]
  request.r(i1951[11], i1951[12], 0, i1950, 'm_Material')
  i1950.m_Maskable = !!i1951[13]
  i1950.m_Color = new pc.Color(i1951[14], i1951[15], i1951[16], i1951[17])
  i1950.m_RaycastTarget = !!i1951[18]
  i1950.m_RaycastPadding = new pc.Vec4( i1951[19], i1951[20], i1951[21], i1951[22] )
  return i1950
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'm_ObjectArgument')
  i1952.m_ObjectArgumentAssemblyTypeName = i1953[2]
  i1952.m_IntArgument = i1953[3]
  i1952.m_FloatArgument = i1953[4]
  i1952.m_StringArgument = i1953[5]
  i1952.m_BoolArgument = !!i1953[6]
  return i1952
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_Texture')
  i1954.m_UVRect = UnityEngine.Rect.MinMaxRect(i1955[2], i1955[3], i1955[4], i1955[5])
  request.r(i1955[6], i1955[7], 0, i1954, 'm_Material')
  i1954.m_Maskable = !!i1955[8]
  i1954.m_Color = new pc.Color(i1955[9], i1955[10], i1955[11], i1955[12])
  i1954.m_RaycastTarget = !!i1955[13]
  i1954.m_RaycastPadding = new pc.Vec4( i1955[14], i1955[15], i1955[16], i1955[17] )
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'sharedMesh')
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'additionalVertexStreams')
  i1958.enabled = !!i1959[2]
  request.r(i1959[3], i1959[4], 0, i1958, 'sharedMaterial')
  var i1961 = i1959[5]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 2, i1960, '')
  }
  i1958.sharedMaterials = i1960
  i1958.receiveShadows = !!i1959[6]
  i1958.shadowCastingMode = i1959[7]
  i1958.sortingLayerID = i1959[8]
  i1958.sortingOrder = i1959[9]
  i1958.lightmapIndex = i1959[10]
  i1958.lightmapSceneIndex = i1959[11]
  i1958.lightmapScaleOffset = new pc.Vec4( i1959[12], i1959[13], i1959[14], i1959[15] )
  i1958.lightProbeUsage = i1959[16]
  i1958.reflectionProbeUsage = i1959[17]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'sharedMesh')
  i1962.convex = !!i1963[2]
  i1962.enabled = !!i1963[3]
  i1962.isTrigger = !!i1963[4]
  request.r(i1963[5], i1963[6], 0, i1962, 'material')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1965 = data
  i1964.center = new pc.Vec3( i1965[0], i1965[1], i1965[2] )
  i1964.size = new pc.Vec3( i1965[3], i1965[4], i1965[5] )
  i1964.enabled = !!i1965[6]
  i1964.isTrigger = !!i1965[7]
  request.r(i1965[8], i1965[9], 0, i1964, 'material')
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1967 = data
  i1966.mass = i1967[0]
  i1966.drag = i1967[1]
  i1966.angularDrag = i1967[2]
  i1966.useGravity = !!i1967[3]
  i1966.isKinematic = !!i1967[4]
  i1966.constraints = i1967[5]
  i1966.maxAngularVelocity = i1967[6]
  i1966.collisionDetectionMode = i1967[7]
  i1966.interpolation = i1967[8]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i1969 = data
  i1968.angularXDrive = request.d('UnityEngine.JointDrive', i1969[0], i1968.angularXDrive)
  i1968.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1969[1], i1968.angularXLimitSpring)
  i1968.angularXMotion = i1969[2]
  i1968.angularYLimit = request.d('UnityEngine.SoftJointLimit', i1969[3], i1968.angularYLimit)
  i1968.angularYMotion = i1969[4]
  i1968.angularYZDrive = request.d('UnityEngine.JointDrive', i1969[5], i1968.angularYZDrive)
  i1968.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1969[6], i1968.angularYZLimitSpring)
  i1968.angularZLimit = request.d('UnityEngine.SoftJointLimit', i1969[7], i1968.angularZLimit)
  i1968.angularZMotion = i1969[8]
  i1968.configuredInWorldSpace = !!i1969[9]
  i1968.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i1969[10], i1968.highAngularXLimit)
  i1968.linearLimit = request.d('UnityEngine.SoftJointLimit', i1969[11], i1968.linearLimit)
  i1968.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1969[12], i1968.linearLimitSpring)
  i1968.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i1969[13], i1968.lowAngularXLimit)
  i1968.rotationDriveMode = i1969[14]
  i1968.secondaryAxis = new pc.Vec3( i1969[15], i1969[16], i1969[17] )
  i1968.slerpDrive = request.d('UnityEngine.JointDrive', i1969[18], i1968.slerpDrive)
  i1968.swapBodies = !!i1969[19]
  i1968.targetAngularVelocity = new pc.Vec3( i1969[20], i1969[21], i1969[22] )
  i1968.targetPosition = new pc.Vec3( i1969[23], i1969[24], i1969[25] )
  i1968.targetRotation = new pc.Quat(i1969[26], i1969[27], i1969[28], i1969[29])
  i1968.targetVelocity = new pc.Vec3( i1969[30], i1969[31], i1969[32] )
  i1968.xDrive = request.d('UnityEngine.JointDrive', i1969[33], i1968.xDrive)
  i1968.xMotion = i1969[34]
  i1968.yDrive = request.d('UnityEngine.JointDrive', i1969[35], i1968.yDrive)
  i1968.yMotion = i1969[36]
  i1968.zDrive = request.d('UnityEngine.JointDrive', i1969[37], i1968.zDrive)
  i1968.zMotion = i1969[38]
  request.r(i1969[39], i1969[40], 0, i1968, 'connectedBody')
  i1968.axis = new pc.Vec3( i1969[41], i1969[42], i1969[43] )
  i1968.anchor = new pc.Vec3( i1969[44], i1969[45], i1969[46] )
  i1968.connectedAnchor = new pc.Vec3( i1969[47], i1969[48], i1969[49] )
  i1968.autoConfigureConnectedAnchor = !!i1969[50]
  i1968.massScale = i1969[51]
  i1968.connectedMassScale = i1969[52]
  i1968.enableCollision = !!i1969[53]
  i1968.breakForce = i1969[54]
  i1968.breakTorque = i1969[55]
  return i1968
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i1970 = root || request.c( 'BodyPiece' )
  var i1971 = data
  i1970.notUseAnim = !!i1971[0]
  request.r(i1971[1], i1971[2], 0, i1970, 'colli')
  request.r(i1971[3], i1971[4], 0, i1970, 'skeleton')
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpringJoint"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpringJoint' )
  var i1973 = data
  i1972.spring = i1973[0]
  i1972.damper = i1973[1]
  i1972.minDistance = i1973[2]
  i1972.maxDistance = i1973[3]
  i1972.tolerance = i1973[4]
  request.r(i1973[5], i1973[6], 0, i1972, 'connectedBody')
  i1972.axis = new pc.Vec3( i1973[7], i1973[8], i1973[9] )
  i1972.anchor = new pc.Vec3( i1973[10], i1973[11], i1973[12] )
  i1972.connectedAnchor = new pc.Vec3( i1973[13], i1973[14], i1973[15] )
  i1972.autoConfigureConnectedAnchor = !!i1973[16]
  i1972.massScale = i1973[17]
  i1972.connectedMassScale = i1973[18]
  i1972.enableCollision = !!i1973[19]
  i1972.breakForce = i1973[20]
  i1972.breakTorque = i1973[21]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1975 = data
  i1974.center = new pc.Vec3( i1975[0], i1975[1], i1975[2] )
  i1974.radius = i1975[3]
  i1974.height = i1975[4]
  i1974.direction = i1975[5]
  i1974.enabled = !!i1975[6]
  i1974.isTrigger = !!i1975[7]
  request.r(i1975[8], i1975[9], 0, i1974, 'material')
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'connectedBody')
  i1976.axis = new pc.Vec3( i1977[2], i1977[3], i1977[4] )
  i1976.anchor = new pc.Vec3( i1977[5], i1977[6], i1977[7] )
  i1976.connectedAnchor = new pc.Vec3( i1977[8], i1977[9], i1977[10] )
  i1976.autoConfigureConnectedAnchor = !!i1977[11]
  i1976.massScale = i1977[12]
  i1976.connectedMassScale = i1977[13]
  i1976.enableCollision = !!i1977[14]
  i1976.breakForce = i1977[15]
  i1976.breakTorque = i1977[16]
  return i1976
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i1978 = root || request.c( 'TakeDamage' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'phase')
  var i1981 = i1979[2]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978.bodyPieces = i1980
  request.r(i1979[3], i1979[4], 0, i1978, 'root')
  i1978.HP = i1979[5]
  i1978.onCD = !!i1979[6]
  i1978.currentHP = i1979[7]
  i1978.isDead = !!i1979[8]
  request.r(i1979[9], i1979[10], 0, i1978, 'anim')
  request.r(i1979[11], i1979[12], 0, i1978, 'hitSound')
  request.r(i1979[13], i1979[14], 0, i1978, 'hitSound2')
  request.r(i1979[15], i1979[16], 0, i1978, 'deadSound')
  request.r(i1979[17], i1979[18], 0, i1978, 'bloodPrefab')
  i1978.notUseAnim = !!i1979[19]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'animatorController')
  request.r(i1985[2], i1985[3], 0, i1984, 'avatar')
  i1984.updateMode = i1985[4]
  i1984.hasTransformHierarchy = !!i1985[5]
  i1984.applyRootMotion = !!i1985[6]
  var i1987 = i1985[7]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 2, i1986, '')
  }
  i1984.humanBones = i1986
  i1984.enabled = !!i1985[8]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'sharedMesh')
  var i1993 = i1991[2]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 2, i1992, '')
  }
  i1990.bones = i1992
  i1990.updateWhenOffscreen = !!i1991[3]
  i1990.localBounds = i1991[4]
  request.r(i1991[5], i1991[6], 0, i1990, 'rootBone')
  var i1995 = i1991[7]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1995[i + 0]) );
  }
  i1990.blendShapesWeights = i1994
  i1990.enabled = !!i1991[8]
  request.r(i1991[9], i1991[10], 0, i1990, 'sharedMaterial')
  var i1997 = i1991[11]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 2, i1996, '')
  }
  i1990.sharedMaterials = i1996
  i1990.receiveShadows = !!i1991[12]
  i1990.shadowCastingMode = i1991[13]
  i1990.sortingLayerID = i1991[14]
  i1990.sortingOrder = i1991[15]
  i1990.lightmapIndex = i1991[16]
  i1990.lightmapSceneIndex = i1991[17]
  i1990.lightmapScaleOffset = new pc.Vec4( i1991[18], i1991[19], i1991[20], i1991[21] )
  i1990.lightProbeUsage = i1991[22]
  i1990.reflectionProbeUsage = i1991[23]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2001 = data
  i2000.weight = i2001[0]
  return i2000
}

Deserializers["Dragable"] = function (request, data, root) {
  var i2002 = root || request.c( 'Dragable' )
  var i2003 = data
  i2002.OnDrag = request.d('System.Action', i2003[0], i2002.OnDrag)
  i2002.OnEndDrag = request.d('System.Action', i2003[1], i2002.OnEndDrag)
  return i2002
}

Deserializers["BodyController"] = function (request, data, root) {
  var i2004 = root || request.c( 'BodyController' )
  var i2005 = data
  var i2007 = i2005[0]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i2004.bodyPieces = i2006
  var i2009 = i2005[1]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i2009.length; i += 2) {
  request.r(i2009[i + 0], i2009[i + 1], 1, i2008, '')
  }
  i2004.dragPieces = i2008
  request.r(i2005[2], i2005[3], 0, i2004, 'anim')
  return i2004
}

Deserializers["LavaController"] = function (request, data, root) {
  var i2012 = root || request.c( 'LavaController' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'sound')
  i2012.part = i2013[2]
  i2012.isDead = !!i2013[3]
  return i2012
}

Deserializers["LavaPartDisappear"] = function (request, data, root) {
  var i2014 = root || request.c( 'LavaPartDisappear' )
  var i2015 = data
  request.r(i2015[0], i2015[1], 0, i2014, 'boneToHide')
  request.r(i2015[2], i2015[3], 0, i2014, 'vfx')
  i2014.disappearDelay = i2015[4]
  i2014.shrinkDuration = i2015[5]
  request.r(i2015[6], i2015[7], 0, i2014, 'partCollider')
  i2014.disableCollider = !!i2015[8]
  request.r(i2015[9], i2015[10], 0, i2014, 'controller')
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2017 = data
  i2016.center = new pc.Vec3( i2017[0], i2017[1], i2017[2] )
  i2016.radius = i2017[3]
  i2016.enabled = !!i2017[4]
  i2016.isTrigger = !!i2017[5]
  request.r(i2017[6], i2017[7], 0, i2016, 'material')
  return i2016
}

Deserializers["DragController"] = function (request, data, root) {
  var i2018 = root || request.c( 'DragController' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'currentTarget')
  i2018.positionSpring = i2019[2]
  i2018.positionDamper = i2019[3]
  request.r(i2019[4], i2019[5], 0, i2018, 'tut1')
  request.r(i2019[6], i2019[7], 0, i2018, 'tut2')
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2021 = data
  i2020.ambientIntensity = i2021[0]
  i2020.reflectionIntensity = i2021[1]
  i2020.ambientMode = i2021[2]
  i2020.ambientLight = new pc.Color(i2021[3], i2021[4], i2021[5], i2021[6])
  i2020.ambientSkyColor = new pc.Color(i2021[7], i2021[8], i2021[9], i2021[10])
  i2020.ambientGroundColor = new pc.Color(i2021[11], i2021[12], i2021[13], i2021[14])
  i2020.ambientEquatorColor = new pc.Color(i2021[15], i2021[16], i2021[17], i2021[18])
  i2020.fogColor = new pc.Color(i2021[19], i2021[20], i2021[21], i2021[22])
  i2020.fogEndDistance = i2021[23]
  i2020.fogStartDistance = i2021[24]
  i2020.fogDensity = i2021[25]
  i2020.fog = !!i2021[26]
  request.r(i2021[27], i2021[28], 0, i2020, 'skybox')
  i2020.fogMode = i2021[29]
  var i2023 = i2021[30]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2023[i + 0]) );
  }
  i2020.lightmaps = i2022
  i2020.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2021[31], i2020.lightProbes)
  i2020.lightmapsMode = i2021[32]
  i2020.mixedBakeMode = i2021[33]
  i2020.environmentLightingMode = i2021[34]
  i2020.ambientProbe = new pc.SphericalHarmonicsL2(i2021[35])
  request.r(i2021[36], i2021[37], 0, i2020, 'customReflection')
  request.r(i2021[38], i2021[39], 0, i2020, 'defaultReflection')
  i2020.defaultReflectionMode = i2021[40]
  i2020.defaultReflectionResolution = i2021[41]
  i2020.sunLightObjectId = i2021[42]
  i2020.pixelLightCount = i2021[43]
  i2020.defaultReflectionHDR = !!i2021[44]
  i2020.hasLightDataAsset = !!i2021[45]
  i2020.hasManualGenerate = !!i2021[46]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'lightmapColor')
  request.r(i2027[2], i2027[3], 0, i2026, 'lightmapDirection')
  request.r(i2027[4], i2027[5], 0, i2026, 'shadowMask')
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2028 = root || new UnityEngine.LightProbes()
  var i2029 = data
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2037 = data
  var i2039 = i2037[0]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2039[i + 0]));
  }
  i2036.ShaderCompilationErrors = i2038
  i2036.name = i2037[1]
  i2036.guid = i2037[2]
  var i2041 = i2037[3]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( i2041[i + 0] );
  }
  i2036.shaderDefinedKeywords = i2040
  var i2043 = i2037[4]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2043[i + 0]) );
  }
  i2036.passes = i2042
  var i2045 = i2037[5]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2045[i + 0]) );
  }
  i2036.usePasses = i2044
  var i2047 = i2037[6]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2047[i + 0]) );
  }
  i2036.defaultParameterValues = i2046
  request.r(i2037[7], i2037[8], 0, i2036, 'unityFallbackShader')
  i2036.readDepth = !!i2037[9]
  i2036.hasDepthOnlyPass = !!i2037[10]
  i2036.isCreatedByShaderGraph = !!i2037[11]
  i2036.disableBatching = !!i2037[12]
  i2036.compiled = !!i2037[13]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2051 = data
  i2050.shaderName = i2051[0]
  i2050.errorMessage = i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2056 = root || new pc.UnityShaderPass()
  var i2057 = data
  i2056.id = i2057[0]
  i2056.subShaderIndex = i2057[1]
  i2056.name = i2057[2]
  i2056.passType = i2057[3]
  i2056.grabPassTextureName = i2057[4]
  i2056.usePass = !!i2057[5]
  i2056.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[6], i2056.zTest)
  i2056.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[7], i2056.zWrite)
  i2056.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[8], i2056.culling)
  i2056.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2057[9], i2056.blending)
  i2056.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2057[10], i2056.alphaBlending)
  i2056.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[11], i2056.colorWriteMask)
  i2056.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[12], i2056.offsetUnits)
  i2056.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[13], i2056.offsetFactor)
  i2056.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[14], i2056.stencilRef)
  i2056.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[15], i2056.stencilReadMask)
  i2056.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2057[16], i2056.stencilWriteMask)
  i2056.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2057[17], i2056.stencilOp)
  i2056.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2057[18], i2056.stencilOpFront)
  i2056.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2057[19], i2056.stencilOpBack)
  var i2059 = i2057[20]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2059[i + 0]) );
  }
  i2056.tags = i2058
  var i2061 = i2057[21]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2056.passDefinedKeywords = i2060
  var i2063 = i2057[22]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2063[i + 0]) );
  }
  i2056.passDefinedKeywordGroups = i2062
  var i2065 = i2057[23]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2065[i + 0]) );
  }
  i2056.variants = i2064
  var i2067 = i2057[24]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2067[i + 0]) );
  }
  i2056.excludedVariants = i2066
  i2056.hasDepthReader = !!i2057[25]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2069 = data
  i2068.val = i2069[0]
  i2068.name = i2069[1]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2071 = data
  i2070.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[0], i2070.src)
  i2070.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[1], i2070.dst)
  i2070.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[2], i2070.op)
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2073 = data
  i2072.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[0], i2072.pass)
  i2072.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[1], i2072.fail)
  i2072.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[2], i2072.zFail)
  i2072.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2073[3], i2072.comp)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2077 = data
  i2076.name = i2077[0]
  i2076.value = i2077[1]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2080.keywords = i2082
  i2080.hasDiscard = !!i2081[1]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2087 = data
  i2086.passId = i2087[0]
  i2086.subShaderIndex = i2087[1]
  var i2089 = i2087[2]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( i2089[i + 0] );
  }
  i2086.keywords = i2088
  i2086.vertexProgram = i2087[3]
  i2086.fragmentProgram = i2087[4]
  i2086.exportedForWebGl2 = !!i2087[5]
  i2086.readDepth = !!i2087[6]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'shader')
  i2092.pass = i2093[2]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.type = i2097[1]
  i2096.value = new pc.Vec4( i2097[2], i2097[3], i2097[4], i2097[5] )
  i2096.textureValue = i2097[6]
  i2096.shaderPropertyFlag = i2097[7]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2099 = data
  i2098.name = i2099[0]
  request.r(i2099[1], i2099[2], 0, i2098, 'texture')
  i2098.aabb = i2099[3]
  i2098.vertices = i2099[4]
  i2098.triangles = i2099[5]
  i2098.textureRect = UnityEngine.Rect.MinMaxRect(i2099[6], i2099[7], i2099[8], i2099[9])
  i2098.packedRect = UnityEngine.Rect.MinMaxRect(i2099[10], i2099[11], i2099[12], i2099[13])
  i2098.border = new pc.Vec4( i2099[14], i2099[15], i2099[16], i2099[17] )
  i2098.transparency = i2099[18]
  i2098.bounds = i2099[19]
  i2098.pixelsPerUnit = i2099[20]
  i2098.textureWidth = i2099[21]
  i2098.textureHeight = i2099[22]
  i2098.nativeSize = new pc.Vec2( i2099[23], i2099[24] )
  i2098.pivot = new pc.Vec2( i2099[25], i2099[26] )
  i2098.textureRectOffset = new pc.Vec2( i2099[27], i2099[28] )
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2101 = data
  i2100.name = i2101[0]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2103 = data
  i2102.name = i2103[0]
  i2102.wrapMode = i2103[1]
  i2102.isLooping = !!i2103[2]
  i2102.length = i2103[3]
  var i2105 = i2103[4]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2105[i + 0]) );
  }
  i2102.curves = i2104
  var i2107 = i2103[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2107[i + 0]) );
  }
  i2102.events = i2106
  i2102.halfPrecision = !!i2103[6]
  i2102._frameRate = i2103[7]
  i2102.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2103[8], i2102.localBounds)
  i2102.hasMuscleCurves = !!i2103[9]
  var i2109 = i2103[10]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( i2109[i + 0] );
  }
  i2102.clipMuscleConstant = i2108
  i2102.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2103[11], i2102.clipBindingConstant)
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2113 = data
  i2112.path = i2113[0]
  i2112.hash = i2113[1]
  i2112.componentType = i2113[2]
  i2112.property = i2113[3]
  i2112.keys = i2113[4]
  var i2115 = i2113[5]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2115[i + 0]) );
  }
  i2112.objectReferenceKeys = i2114
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2119 = data
  i2118.functionName = i2119[0]
  i2118.floatParameter = i2119[1]
  i2118.intParameter = i2119[2]
  i2118.stringParameter = i2119[3]
  request.r(i2119[4], i2119[5], 0, i2118, 'objectReferenceParameter')
  i2118.time = i2119[6]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2121 = data
  i2120.center = new pc.Vec3( i2121[0], i2121[1], i2121[2] )
  i2120.extends = new pc.Vec3( i2121[3], i2121[4], i2121[5] )
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2125 = data
  var i2127 = i2125[0]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( i2127[i + 0] );
  }
  i2124.genericBindings = i2126
  var i2129 = i2125[1]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( i2129[i + 0] );
  }
  i2124.pptrCurveMapping = i2128
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.ascent = i2131[1]
  i2130.originalLineHeight = i2131[2]
  i2130.fontSize = i2131[3]
  var i2133 = i2131[4]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2133[i + 0]) );
  }
  i2130.characterInfo = i2132
  request.r(i2131[5], i2131[6], 0, i2130, 'texture')
  i2130.originalFontSize = i2131[7]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2137 = data
  i2136.index = i2137[0]
  i2136.advance = i2137[1]
  i2136.bearing = i2137[2]
  i2136.glyphWidth = i2137[3]
  i2136.glyphHeight = i2137[4]
  i2136.minX = i2137[5]
  i2136.maxX = i2137[6]
  i2136.minY = i2137[7]
  i2136.maxY = i2137[8]
  i2136.uvBottomLeftX = i2137[9]
  i2136.uvBottomLeftY = i2137[10]
  i2136.uvBottomRightX = i2137[11]
  i2136.uvBottomRightY = i2137[12]
  i2136.uvTopLeftX = i2137[13]
  i2136.uvTopLeftY = i2137[14]
  i2136.uvTopRightX = i2137[15]
  i2136.uvTopRightY = i2137[16]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2139 = data
  i2138.name = i2139[0]
  var i2141 = i2139[1]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2141[i + 0]) );
  }
  i2138.layers = i2140
  var i2143 = i2139[2]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2143[i + 0]) );
  }
  i2138.parameters = i2142
  i2138.animationClips = i2139[3]
  i2138.avatarUnsupported = i2139[4]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.defaultWeight = i2147[1]
  i2146.blendingMode = i2147[2]
  i2146.avatarMask = i2147[3]
  i2146.syncedLayerIndex = i2147[4]
  i2146.syncedLayerAffectsTiming = !!i2147[5]
  i2146.syncedLayers = i2147[6]
  i2146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2147[7], i2146.stateMachine)
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2149 = data
  i2148.id = i2149[0]
  i2148.name = i2149[1]
  i2148.path = i2149[2]
  var i2151 = i2149[3]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2151[i + 0]) );
  }
  i2148.states = i2150
  var i2153 = i2149[4]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2153[i + 0]) );
  }
  i2148.machines = i2152
  var i2155 = i2149[5]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2155[i + 0]) );
  }
  i2148.entryStateTransitions = i2154
  var i2157 = i2149[6]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2157[i + 0]) );
  }
  i2148.exitStateTransitions = i2156
  var i2159 = i2149[7]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2159[i + 0]) );
  }
  i2148.anyStateTransitions = i2158
  i2148.defaultStateId = i2149[8]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2163 = data
  i2162.id = i2163[0]
  i2162.name = i2163[1]
  i2162.cycleOffset = i2163[2]
  i2162.cycleOffsetParameter = i2163[3]
  i2162.cycleOffsetParameterActive = !!i2163[4]
  i2162.mirror = !!i2163[5]
  i2162.mirrorParameter = i2163[6]
  i2162.mirrorParameterActive = !!i2163[7]
  i2162.motionId = i2163[8]
  i2162.nameHash = i2163[9]
  i2162.fullPathHash = i2163[10]
  i2162.speed = i2163[11]
  i2162.speedParameter = i2163[12]
  i2162.speedParameterActive = !!i2163[13]
  i2162.tag = i2163[14]
  i2162.tagHash = i2163[15]
  i2162.writeDefaultValues = !!i2163[16]
  var i2165 = i2163[17]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 2) {
  request.r(i2165[i + 0], i2165[i + 1], 2, i2164, '')
  }
  i2162.behaviours = i2164
  var i2167 = i2163[18]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2167[i + 0]) );
  }
  i2162.transitions = i2166
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2173 = data
  i2172.fullPath = i2173[0]
  i2172.canTransitionToSelf = !!i2173[1]
  i2172.duration = i2173[2]
  i2172.exitTime = i2173[3]
  i2172.hasExitTime = !!i2173[4]
  i2172.hasFixedDuration = !!i2173[5]
  i2172.interruptionSource = i2173[6]
  i2172.offset = i2173[7]
  i2172.orderedInterruption = !!i2173[8]
  i2172.destinationStateId = i2173[9]
  i2172.isExit = !!i2173[10]
  i2172.mute = !!i2173[11]
  i2172.solo = !!i2173[12]
  var i2175 = i2173[13]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2175[i + 0]) );
  }
  i2172.conditions = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2179 = data
  i2178.mode = i2179[0]
  i2178.parameter = i2179[1]
  i2178.threshold = i2179[2]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2185 = data
  i2184.destinationStateId = i2185[0]
  i2184.isExit = !!i2185[1]
  i2184.mute = !!i2185[2]
  i2184.solo = !!i2185[3]
  var i2187 = i2185[4]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2187[i + 0]) );
  }
  i2184.conditions = i2186
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2191 = data
  i2190.defaultBool = !!i2191[0]
  i2190.defaultFloat = i2191[1]
  i2190.defaultInt = i2191[2]
  i2190.name = i2191[3]
  i2190.nameHash = i2191[4]
  i2190.type = i2191[5]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2193 = data
  i2192.name = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, '_runtimeAnimatorController')
  var i2195 = i2193[3]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2192._originalAnimationClips = i2194
  var i2197 = i2193[4]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2192._overrideAnimationClips = i2196
  var i2199 = i2193[5]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2192._animationClips = i2198
  var i2201 = i2193[6]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('UnityEngine.AnimationClipPair', i2201[i + 0]) );
  }
  i2192._animationClipPairs = i2200
  return i2192
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'originalClip')
  request.r(i2207[2], i2207[3], 0, i2206, 'overrideClip')
  return i2206
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2208 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2209 = data
  i2208.useSafeMode = !!i2209[0]
  i2208.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2209[1], i2208.safeModeOptions)
  i2208.timeScale = i2209[2]
  i2208.unscaledTimeScale = i2209[3]
  i2208.useSmoothDeltaTime = !!i2209[4]
  i2208.maxSmoothUnscaledTime = i2209[5]
  i2208.rewindCallbackMode = i2209[6]
  i2208.showUnityEditorReport = !!i2209[7]
  i2208.logBehaviour = i2209[8]
  i2208.drawGizmos = !!i2209[9]
  i2208.defaultRecyclable = !!i2209[10]
  i2208.defaultAutoPlay = i2209[11]
  i2208.defaultUpdateType = i2209[12]
  i2208.defaultTimeScaleIndependent = !!i2209[13]
  i2208.defaultEaseType = i2209[14]
  i2208.defaultEaseOvershootOrAmplitude = i2209[15]
  i2208.defaultEasePeriod = i2209[16]
  i2208.defaultAutoKill = !!i2209[17]
  i2208.defaultLoopType = i2209[18]
  i2208.debugMode = !!i2209[19]
  i2208.debugStoreTargetId = !!i2209[20]
  i2208.showPreviewPanel = !!i2209[21]
  i2208.storeSettingsLocation = i2209[22]
  i2208.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2209[23], i2208.modules)
  i2208.createASMDEF = !!i2209[24]
  i2208.showPlayingTweens = !!i2209[25]
  i2208.showPausedTweens = !!i2209[26]
  return i2208
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2210 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2211 = data
  i2210.logBehaviour = i2211[0]
  i2210.nestedTweenFailureBehaviour = i2211[1]
  return i2210
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2212 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2213 = data
  i2212.showPanel = !!i2213[0]
  i2212.audioEnabled = !!i2213[1]
  i2212.physicsEnabled = !!i2213[2]
  i2212.physics2DEnabled = !!i2213[3]
  i2212.spriteEnabled = !!i2213[4]
  i2212.uiEnabled = !!i2213[5]
  i2212.textMeshProEnabled = !!i2213[6]
  i2212.tk2DEnabled = !!i2213[7]
  i2212.deAudioEnabled = !!i2213[8]
  i2212.deUnityExtendedEnabled = !!i2213[9]
  i2212.epoOutlineEnabled = !!i2213[10]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2215 = data
  var i2217 = i2215[0]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2217[i + 0]) );
  }
  i2214.files = i2216
  i2214.componentToPrefabIds = i2215[1]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2221 = data
  i2220.path = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'unityObject')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2223 = data
  var i2225 = i2223[0]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2225[i + 0]) );
  }
  i2222.scriptsExecutionOrder = i2224
  var i2227 = i2223[1]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2227[i + 0]) );
  }
  i2222.sortingLayers = i2226
  var i2229 = i2223[2]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2229[i + 0]) );
  }
  i2222.cullingLayers = i2228
  i2222.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2223[3], i2222.timeSettings)
  i2222.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2223[4], i2222.physicsSettings)
  i2222.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2223[5], i2222.physics2DSettings)
  i2222.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2223[6], i2222.qualitySettings)
  i2222.enableRealtimeShadows = !!i2223[7]
  i2222.enableAutoInstancing = !!i2223[8]
  i2222.enableStaticBatching = !!i2223[9]
  i2222.enableDynamicBatching = !!i2223[10]
  i2222.usePreservativeDynamicBatching = !!i2223[11]
  i2222.lightmapEncodingQuality = i2223[12]
  i2222.desiredColorSpace = i2223[13]
  var i2231 = i2223[14]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( i2231[i + 0] );
  }
  i2222.allTags = i2230
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.value = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2239 = data
  i2238.id = i2239[0]
  i2238.name = i2239[1]
  i2238.value = i2239[2]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2243 = data
  i2242.id = i2243[0]
  i2242.name = i2243[1]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2245 = data
  i2244.fixedDeltaTime = i2245[0]
  i2244.maximumDeltaTime = i2245[1]
  i2244.timeScale = i2245[2]
  i2244.maximumParticleTimestep = i2245[3]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2247 = data
  i2246.gravity = new pc.Vec3( i2247[0], i2247[1], i2247[2] )
  i2246.defaultSolverIterations = i2247[3]
  i2246.bounceThreshold = i2247[4]
  i2246.autoSyncTransforms = !!i2247[5]
  i2246.autoSimulation = !!i2247[6]
  var i2249 = i2247[7]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2249[i + 0]) );
  }
  i2246.collisionMatrix = i2248
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.layerId = i2253[1]
  i2252.otherLayerId = i2253[2]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'material')
  i2254.gravity = new pc.Vec2( i2255[2], i2255[3] )
  i2254.positionIterations = i2255[4]
  i2254.velocityIterations = i2255[5]
  i2254.velocityThreshold = i2255[6]
  i2254.maxLinearCorrection = i2255[7]
  i2254.maxAngularCorrection = i2255[8]
  i2254.maxTranslationSpeed = i2255[9]
  i2254.maxRotationSpeed = i2255[10]
  i2254.baumgarteScale = i2255[11]
  i2254.baumgarteTOIScale = i2255[12]
  i2254.timeToSleep = i2255[13]
  i2254.linearSleepTolerance = i2255[14]
  i2254.angularSleepTolerance = i2255[15]
  i2254.defaultContactOffset = i2255[16]
  i2254.autoSimulation = !!i2255[17]
  i2254.queriesHitTriggers = !!i2255[18]
  i2254.queriesStartInColliders = !!i2255[19]
  i2254.callbacksOnDisable = !!i2255[20]
  i2254.reuseCollisionCallbacks = !!i2255[21]
  i2254.autoSyncTransforms = !!i2255[22]
  var i2257 = i2255[23]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2257[i + 0]) );
  }
  i2254.collisionMatrix = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.layerId = i2261[1]
  i2260.otherLayerId = i2261[2]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2263 = data
  var i2265 = i2263[0]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2265[i + 0]) );
  }
  i2262.qualityLevels = i2264
  var i2267 = i2263[1]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( i2267[i + 0] );
  }
  i2262.names = i2266
  i2262.shadows = i2263[2]
  i2262.anisotropicFiltering = i2263[3]
  i2262.antiAliasing = i2263[4]
  i2262.lodBias = i2263[5]
  i2262.shadowCascades = i2263[6]
  i2262.shadowDistance = i2263[7]
  i2262.shadowmaskMode = i2263[8]
  i2262.shadowProjection = i2263[9]
  i2262.shadowResolution = i2263[10]
  i2262.softParticles = !!i2263[11]
  i2262.softVegetation = !!i2263[12]
  i2262.activeColorSpace = i2263[13]
  i2262.desiredColorSpace = i2263[14]
  i2262.masterTextureLimit = i2263[15]
  i2262.maxQueuedFrames = i2263[16]
  i2262.particleRaycastBudget = i2263[17]
  i2262.pixelLightCount = i2263[18]
  i2262.realtimeReflectionProbes = !!i2263[19]
  i2262.shadowCascade2Split = i2263[20]
  i2262.shadowCascade4Split = new pc.Vec3( i2263[21], i2263[22], i2263[23] )
  i2262.streamingMipmapsActive = !!i2263[24]
  i2262.vSyncCount = i2263[25]
  i2262.asyncUploadBufferSize = i2263[26]
  i2262.asyncUploadTimeSlice = i2263[27]
  i2262.billboardsFaceCameraPosition = !!i2263[28]
  i2262.shadowNearPlaneOffset = i2263[29]
  i2262.streamingMipmapsMemoryBudget = i2263[30]
  i2262.maximumLODLevel = i2263[31]
  i2262.streamingMipmapsAddAllCameras = !!i2263[32]
  i2262.streamingMipmapsMaxLevelReduction = i2263[33]
  i2262.streamingMipmapsRenderersPerFrame = i2263[34]
  i2262.resolutionScalingFixedDPIFactor = i2263[35]
  i2262.streamingMipmapsMaxFileIORequests = i2263[36]
  i2262.currentQualityLevel = i2263[37]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2271 = data
  i2270.name = i2271[0]
  var i2273 = i2271[1]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2273[i + 0]) );
  }
  i2270.tos = i2272
  var i2275 = i2271[2]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( i2275[i + 0] );
  }
  i2270.constant = i2274
  i2270.isValid = !!i2271[3]
  i2270.isHuman = !!i2271[4]
  i2270.hasRootMotion = !!i2271[5]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2279 = data
  i2278.hash = i2279[0]
  i2278.path = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2283 = data
  i2282.weight = i2283[0]
  i2282.vertices = i2283[1]
  i2282.normals = i2283[2]
  i2282.tangents = i2283[3]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2287 = data
  i2286.time = i2287[0]
  request.r(i2287[1], i2287[2], 0, i2286, 'value')
  return i2286
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

Deserializers.creativeName = "SRG_V04_YenTTH_TamNTM";

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

Deserializers.buildID = "1d612641-2957-4e8d-84c7-3329e528f7ff";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

