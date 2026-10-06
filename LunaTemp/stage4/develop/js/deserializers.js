var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.JointSpring' )
  var i1759 = data
  i1758.spring = i1759[0]
  i1758.damper = i1759[1]
  i1758.targetPosition = i1759[2]
  return i1758
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.JointMotor' )
  var i1761 = data
  i1760.m_TargetVelocity = i1761[0]
  i1760.m_Force = i1761[1]
  i1760.m_FreeSpin = i1761[2]
  return i1760
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.JointLimits' )
  var i1763 = data
  i1762.m_Min = i1763[0]
  i1762.m_Max = i1763[1]
  i1762.m_Bounciness = i1763[2]
  i1762.m_BounceMinVelocity = i1763[3]
  i1762.m_ContactDistance = i1763[4]
  i1762.minBounce = i1763[5]
  i1762.maxBounce = i1763[6]
  return i1762
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.JointDrive' )
  var i1765 = data
  i1764.m_PositionSpring = i1765[0]
  i1764.m_PositionDamper = i1765[1]
  i1764.m_MaximumForce = i1765[2]
  i1764.m_UseAcceleration = i1765[3]
  return i1764
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1767 = data
  i1766.m_Spring = i1767[0]
  i1766.m_Damper = i1767[1]
  return i1766
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1769 = data
  i1768.m_Limit = i1769[0]
  i1768.m_Bounciness = i1769[1]
  i1768.m_ContactDistance = i1769[2]
  return i1768
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1771 = data
  i1770.m_ExtremumSlip = i1771[0]
  i1770.m_ExtremumValue = i1771[1]
  i1770.m_AsymptoteSlip = i1771[2]
  i1770.m_AsymptoteValue = i1771[3]
  i1770.m_Stiffness = i1771[4]
  return i1770
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1773 = data
  i1772.m_LowerAngle = i1773[0]
  i1772.m_UpperAngle = i1773[1]
  return i1772
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1775 = data
  i1774.m_MotorSpeed = i1775[0]
  i1774.m_MaximumMotorTorque = i1775[1]
  return i1774
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1777 = data
  i1776.m_DampingRatio = i1777[0]
  i1776.m_Frequency = i1777[1]
  i1776.m_Angle = i1777[2]
  return i1776
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1779 = data
  i1778.m_LowerTranslation = i1779[0]
  i1778.m_UpperTranslation = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.width = i1781[1]
  i1780.height = i1781[2]
  i1780.mipmapCount = i1781[3]
  i1780.anisoLevel = i1781[4]
  i1780.filterMode = i1781[5]
  i1780.hdr = !!i1781[6]
  i1780.format = i1781[7]
  i1780.wrapMode = i1781[8]
  i1780.alphaIsTransparency = !!i1781[9]
  i1780.alphaSource = i1781[10]
  i1780.graphicsFormat = i1781[11]
  i1780.sRGBTexture = !!i1781[12]
  i1780.desiredColorSpace = i1781[13]
  i1780.wrapU = i1781[14]
  i1780.wrapV = i1781[15]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1783 = data
  i1782.name = i1783[0]
  i1782.halfPrecision = !!i1783[1]
  i1782.useSimplification = !!i1783[2]
  i1782.useUInt32IndexFormat = !!i1783[3]
  i1782.vertexCount = i1783[4]
  i1782.aabb = i1783[5]
  var i1785 = i1783[6]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( !!i1785[i + 0] );
  }
  i1782.streams = i1784
  i1782.vertices = i1783[7]
  var i1787 = i1783[8]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1787[i + 0]) );
  }
  i1782.subMeshes = i1786
  var i1789 = i1783[9]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 16) {
    i1788.push( new pc.Mat4().setData(i1789[i + 0], i1789[i + 1], i1789[i + 2], i1789[i + 3],  i1789[i + 4], i1789[i + 5], i1789[i + 6], i1789[i + 7],  i1789[i + 8], i1789[i + 9], i1789[i + 10], i1789[i + 11],  i1789[i + 12], i1789[i + 13], i1789[i + 14], i1789[i + 15]) );
  }
  i1782.bindposes = i1788
  var i1791 = i1783[10]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1791[i + 0]) );
  }
  i1782.blendShapes = i1790
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1797 = data
  i1796.triangles = i1797[0]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1803 = data
  i1802.name = i1803[0]
  var i1805 = i1803[1]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1805[i + 0]) );
  }
  i1802.frames = i1804
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1806 = root || new pc.UnityMaterial()
  var i1807 = data
  i1806.name = i1807[0]
  request.r(i1807[1], i1807[2], 0, i1806, 'shader')
  i1806.renderQueue = i1807[3]
  i1806.enableInstancing = !!i1807[4]
  var i1809 = i1807[5]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1809[i + 0]) );
  }
  i1806.floatParameters = i1808
  var i1811 = i1807[6]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1811[i + 0]) );
  }
  i1806.colorParameters = i1810
  var i1813 = i1807[7]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1813[i + 0]) );
  }
  i1806.vectorParameters = i1812
  var i1815 = i1807[8]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1815[i + 0]) );
  }
  i1806.textureParameters = i1814
  var i1817 = i1807[9]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1817[i + 0]) );
  }
  i1806.materialFlags = i1816
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.value = i1821[1]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1825 = data
  i1824.name = i1825[0]
  i1824.value = new pc.Color(i1825[1], i1825[2], i1825[3], i1825[4])
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.value = new pc.Vec4( i1829[1], i1829[2], i1829[3], i1829[4] )
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1833 = data
  i1832.name = i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'value')
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.enabled = !!i1837[1]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1839 = data
  i1838.position = new pc.Vec3( i1839[0], i1839[1], i1839[2] )
  i1838.scale = new pc.Vec3( i1839[3], i1839[4], i1839[5] )
  i1838.rotation = new pc.Quat(i1839[6], i1839[7], i1839[8], i1839[9])
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1841 = data
  i1840.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1841[0], i1840.main)
  i1840.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1841[1], i1840.colorBySpeed)
  i1840.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1841[2], i1840.colorOverLifetime)
  i1840.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1841[3], i1840.emission)
  i1840.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1841[4], i1840.rotationBySpeed)
  i1840.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1841[5], i1840.rotationOverLifetime)
  i1840.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1841[6], i1840.shape)
  i1840.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1841[7], i1840.sizeBySpeed)
  i1840.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1841[8], i1840.sizeOverLifetime)
  i1840.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1841[9], i1840.textureSheetAnimation)
  i1840.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1841[10], i1840.velocityOverLifetime)
  i1840.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1841[11], i1840.noise)
  i1840.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1841[12], i1840.inheritVelocity)
  i1840.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1841[13], i1840.forceOverLifetime)
  i1840.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1841[14], i1840.limitVelocityOverLifetime)
  i1840.useAutoRandomSeed = !!i1841[15]
  i1840.randomSeed = i1841[16]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1842 = root || new pc.ParticleSystemMain()
  var i1843 = data
  i1842.duration = i1843[0]
  i1842.loop = !!i1843[1]
  i1842.prewarm = !!i1843[2]
  i1842.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[3], i1842.startDelay)
  i1842.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[4], i1842.startLifetime)
  i1842.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[5], i1842.startSpeed)
  i1842.startSize3D = !!i1843[6]
  i1842.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[7], i1842.startSizeX)
  i1842.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[8], i1842.startSizeY)
  i1842.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[9], i1842.startSizeZ)
  i1842.startRotation3D = !!i1843[10]
  i1842.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[11], i1842.startRotationX)
  i1842.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[12], i1842.startRotationY)
  i1842.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[13], i1842.startRotationZ)
  i1842.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1843[14], i1842.startColor)
  i1842.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1843[15], i1842.gravityModifier)
  i1842.simulationSpace = i1843[16]
  request.r(i1843[17], i1843[18], 0, i1842, 'customSimulationSpace')
  i1842.simulationSpeed = i1843[19]
  i1842.useUnscaledTime = !!i1843[20]
  i1842.scalingMode = i1843[21]
  i1842.playOnAwake = !!i1843[22]
  i1842.maxParticles = i1843[23]
  i1842.emitterVelocityMode = i1843[24]
  i1842.stopAction = i1843[25]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1844 = root || new pc.MinMaxCurve()
  var i1845 = data
  i1844.mode = i1845[0]
  i1844.curveMin = new pc.AnimationCurve( { keys_flow: i1845[1] } )
  i1844.curveMax = new pc.AnimationCurve( { keys_flow: i1845[2] } )
  i1844.curveMultiplier = i1845[3]
  i1844.constantMin = i1845[4]
  i1844.constantMax = i1845[5]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1846 = root || new pc.MinMaxGradient()
  var i1847 = data
  i1846.mode = i1847[0]
  i1846.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1847[1], i1846.gradientMin)
  i1846.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1847[2], i1846.gradientMax)
  i1846.colorMin = new pc.Color(i1847[3], i1847[4], i1847[5], i1847[6])
  i1846.colorMax = new pc.Color(i1847[7], i1847[8], i1847[9], i1847[10])
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1849 = data
  i1848.mode = i1849[0]
  var i1851 = i1849[1]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1851[i + 0]) );
  }
  i1848.colorKeys = i1850
  var i1853 = i1849[2]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1853[i + 0]) );
  }
  i1848.alphaKeys = i1852
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1854 = root || new pc.ParticleSystemColorBySpeed()
  var i1855 = data
  i1854.enabled = !!i1855[0]
  i1854.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1855[1], i1854.color)
  i1854.range = new pc.Vec2( i1855[2], i1855[3] )
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1859 = data
  i1858.color = new pc.Color(i1859[0], i1859[1], i1859[2], i1859[3])
  i1858.time = i1859[4]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1863 = data
  i1862.alpha = i1863[0]
  i1862.time = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1864 = root || new pc.ParticleSystemColorOverLifetime()
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1865[1], i1864.color)
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1866 = root || new pc.ParticleSystemEmitter()
  var i1867 = data
  i1866.enabled = !!i1867[0]
  i1866.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[1], i1866.rateOverTime)
  i1866.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1867[2], i1866.rateOverDistance)
  var i1869 = i1867[3]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1869[i + 0]) );
  }
  i1866.bursts = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1872 = root || new pc.ParticleSystemBurst()
  var i1873 = data
  i1872.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1873[0], i1872.count)
  i1872.cycleCount = i1873[1]
  i1872.minCount = i1873[2]
  i1872.maxCount = i1873[3]
  i1872.repeatInterval = i1873[4]
  i1872.time = i1873[5]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1874 = root || new pc.ParticleSystemRotationBySpeed()
  var i1875 = data
  i1874.enabled = !!i1875[0]
  i1874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[1], i1874.x)
  i1874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[2], i1874.y)
  i1874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1875[3], i1874.z)
  i1874.separateAxes = !!i1875[4]
  i1874.range = new pc.Vec2( i1875[5], i1875[6] )
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1876 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[1], i1876.x)
  i1876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[2], i1876.y)
  i1876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[3], i1876.z)
  i1876.separateAxes = !!i1877[4]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1878 = root || new pc.ParticleSystemShape()
  var i1879 = data
  i1878.enabled = !!i1879[0]
  i1878.shapeType = i1879[1]
  i1878.randomDirectionAmount = i1879[2]
  i1878.sphericalDirectionAmount = i1879[3]
  i1878.randomPositionAmount = i1879[4]
  i1878.alignToDirection = !!i1879[5]
  i1878.radius = i1879[6]
  i1878.radiusMode = i1879[7]
  i1878.radiusSpread = i1879[8]
  i1878.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[9], i1878.radiusSpeed)
  i1878.radiusThickness = i1879[10]
  i1878.angle = i1879[11]
  i1878.length = i1879[12]
  i1878.boxThickness = new pc.Vec3( i1879[13], i1879[14], i1879[15] )
  i1878.meshShapeType = i1879[16]
  request.r(i1879[17], i1879[18], 0, i1878, 'mesh')
  request.r(i1879[19], i1879[20], 0, i1878, 'meshRenderer')
  request.r(i1879[21], i1879[22], 0, i1878, 'skinnedMeshRenderer')
  i1878.useMeshMaterialIndex = !!i1879[23]
  i1878.meshMaterialIndex = i1879[24]
  i1878.useMeshColors = !!i1879[25]
  i1878.normalOffset = i1879[26]
  i1878.arc = i1879[27]
  i1878.arcMode = i1879[28]
  i1878.arcSpread = i1879[29]
  i1878.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1879[30], i1878.arcSpeed)
  i1878.donutRadius = i1879[31]
  i1878.position = new pc.Vec3( i1879[32], i1879[33], i1879[34] )
  i1878.rotation = new pc.Vec3( i1879[35], i1879[36], i1879[37] )
  i1878.scale = new pc.Vec3( i1879[38], i1879[39], i1879[40] )
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1880 = root || new pc.ParticleSystemSizeBySpeed()
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[1], i1880.x)
  i1880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[2], i1880.y)
  i1880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1881[3], i1880.z)
  i1880.separateAxes = !!i1881[4]
  i1880.range = new pc.Vec2( i1881[5], i1881[6] )
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1882 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1883 = data
  i1882.enabled = !!i1883[0]
  i1882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[1], i1882.x)
  i1882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[2], i1882.y)
  i1882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[3], i1882.z)
  i1882.separateAxes = !!i1883[4]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1884 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1885 = data
  i1884.enabled = !!i1885[0]
  i1884.mode = i1885[1]
  i1884.animation = i1885[2]
  i1884.numTilesX = i1885[3]
  i1884.numTilesY = i1885[4]
  i1884.useRandomRow = !!i1885[5]
  i1884.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1885[6], i1884.frameOverTime)
  i1884.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1885[7], i1884.startFrame)
  i1884.cycleCount = i1885[8]
  i1884.rowIndex = i1885[9]
  i1884.flipU = i1885[10]
  i1884.flipV = i1885[11]
  i1884.spriteCount = i1885[12]
  var i1887 = i1885[13]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.sprites = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1890 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1891 = data
  i1890.enabled = !!i1891[0]
  i1890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[1], i1890.x)
  i1890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[2], i1890.y)
  i1890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[3], i1890.z)
  i1890.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[4], i1890.radial)
  i1890.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[5], i1890.speedModifier)
  i1890.space = i1891[6]
  i1890.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[7], i1890.orbitalX)
  i1890.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[8], i1890.orbitalY)
  i1890.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[9], i1890.orbitalZ)
  i1890.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[10], i1890.orbitalOffsetX)
  i1890.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[11], i1890.orbitalOffsetY)
  i1890.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[12], i1890.orbitalOffsetZ)
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1892 = root || new pc.ParticleSystemNoise()
  var i1893 = data
  i1892.enabled = !!i1893[0]
  i1892.separateAxes = !!i1893[1]
  i1892.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[2], i1892.strengthX)
  i1892.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[3], i1892.strengthY)
  i1892.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[4], i1892.strengthZ)
  i1892.frequency = i1893[5]
  i1892.damping = !!i1893[6]
  i1892.octaveCount = i1893[7]
  i1892.octaveMultiplier = i1893[8]
  i1892.octaveScale = i1893[9]
  i1892.quality = i1893[10]
  i1892.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[11], i1892.scrollSpeed)
  i1892.scrollSpeedMultiplier = i1893[12]
  i1892.remapEnabled = !!i1893[13]
  i1892.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[14], i1892.remapX)
  i1892.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[15], i1892.remapY)
  i1892.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[16], i1892.remapZ)
  i1892.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[17], i1892.positionAmount)
  i1892.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[18], i1892.rotationAmount)
  i1892.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[19], i1892.sizeAmount)
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1894 = root || new pc.ParticleSystemInheritVelocity()
  var i1895 = data
  i1894.enabled = !!i1895[0]
  i1894.mode = i1895[1]
  i1894.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1895[2], i1894.curve)
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1896 = root || new pc.ParticleSystemForceOverLifetime()
  var i1897 = data
  i1896.enabled = !!i1897[0]
  i1896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1897[1], i1896.x)
  i1896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1897[2], i1896.y)
  i1896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1897[3], i1896.z)
  i1896.space = i1897[4]
  i1896.randomized = !!i1897[5]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1898 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1899 = data
  i1898.enabled = !!i1899[0]
  i1898.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[1], i1898.limit)
  i1898.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[2], i1898.limitX)
  i1898.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[3], i1898.limitY)
  i1898.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[4], i1898.limitZ)
  i1898.dampen = i1899[5]
  i1898.separateAxes = !!i1899[6]
  i1898.space = i1899[7]
  i1898.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1899[8], i1898.drag)
  i1898.multiplyDragByParticleSize = !!i1899[9]
  i1898.multiplyDragByParticleVelocity = !!i1899[10]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'mesh')
  i1900.meshCount = i1901[2]
  i1900.activeVertexStreamsCount = i1901[3]
  i1900.alignment = i1901[4]
  i1900.renderMode = i1901[5]
  i1900.sortMode = i1901[6]
  i1900.lengthScale = i1901[7]
  i1900.velocityScale = i1901[8]
  i1900.cameraVelocityScale = i1901[9]
  i1900.normalDirection = i1901[10]
  i1900.sortingFudge = i1901[11]
  i1900.minParticleSize = i1901[12]
  i1900.maxParticleSize = i1901[13]
  i1900.pivot = new pc.Vec3( i1901[14], i1901[15], i1901[16] )
  request.r(i1901[17], i1901[18], 0, i1900, 'trailMaterial')
  i1900.applyActiveColorSpace = !!i1901[19]
  i1900.enabled = !!i1901[20]
  request.r(i1901[21], i1901[22], 0, i1900, 'sharedMaterial')
  var i1903 = i1901[23]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 2) {
  request.r(i1903[i + 0], i1903[i + 1], 2, i1902, '')
  }
  i1900.sharedMaterials = i1902
  i1900.receiveShadows = !!i1901[24]
  i1900.shadowCastingMode = i1901[25]
  i1900.sortingLayerID = i1901[26]
  i1900.sortingOrder = i1901[27]
  i1900.lightmapIndex = i1901[28]
  i1900.lightmapSceneIndex = i1901[29]
  i1900.lightmapScaleOffset = new pc.Vec4( i1901[30], i1901[31], i1901[32], i1901[33] )
  i1900.lightProbeUsage = i1901[34]
  i1900.reflectionProbeUsage = i1901[35]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.tagId = i1907[1]
  i1906.enabled = !!i1907[2]
  i1906.isStatic = !!i1907[3]
  i1906.layer = i1907[4]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1909 = data
  i1908.name = i1909[0]
  i1908.atlasId = i1909[1]
  i1908.mipmapCount = i1909[2]
  i1908.hdr = !!i1909[3]
  i1908.size = i1909[4]
  i1908.anisoLevel = i1909[5]
  i1908.filterMode = i1909[6]
  var i1911 = i1909[7]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 4) {
    i1910.push( UnityEngine.Rect.MinMaxRect(i1911[i + 0], i1911[i + 1], i1911[i + 2], i1911[i + 3]) );
  }
  i1908.rects = i1910
  i1908.wrapU = i1909[8]
  i1908.wrapV = i1909[9]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1915 = data
  i1914.name = i1915[0]
  i1914.index = i1915[1]
  i1914.startup = !!i1915[2]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1917 = data
  i1916.aspect = i1917[0]
  i1916.orthographic = !!i1917[1]
  i1916.orthographicSize = i1917[2]
  i1916.backgroundColor = new pc.Color(i1917[3], i1917[4], i1917[5], i1917[6])
  i1916.nearClipPlane = i1917[7]
  i1916.farClipPlane = i1917[8]
  i1916.fieldOfView = i1917[9]
  i1916.depth = i1917[10]
  i1916.clearFlags = i1917[11]
  i1916.cullingMask = i1917[12]
  i1916.rect = i1917[13]
  request.r(i1917[14], i1917[15], 0, i1916, 'targetTexture')
  i1916.usePhysicalProperties = !!i1917[16]
  i1916.focalLength = i1917[17]
  i1916.sensorSize = new pc.Vec2( i1917[18], i1917[19] )
  i1916.lensShift = new pc.Vec2( i1917[20], i1917[21] )
  i1916.gateFit = i1917[22]
  i1916.commandBufferCount = i1917[23]
  i1916.cameraType = i1917[24]
  i1916.enabled = !!i1917[25]
  return i1916
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1918 = root || request.c( 'CameraController' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'cam')
  var i1921 = i1919[2]
  var i1920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1921.length; i += 3) {
    i1920.add(new pc.Vec3( i1921[i + 0], i1921[i + 1], i1921[i + 2] ));
  }
  i1918.camSetupPosition = i1920
  i1918.index = i1919[3]
  i1918.panSpeed = i1919[4]
  i1918.minPosition = new pc.Vec2( i1919[5], i1919[6] )
  i1918.maxPosition = new pc.Vec2( i1919[7], i1919[8] )
  i1918.ignoreDragableObjects = !!i1919[9]
  i1918.minFieldOfView = i1919[10]
  i1918.maxFieldOfView = i1919[11]
  i1918.pinchZoomSpeed = i1919[12]
  i1918.mouseWheelZoomSpeed = i1919[13]
  return i1918
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_FirstSelected')
  i1924.m_sendNavigationEvents = !!i1925[2]
  i1924.m_DragThreshold = i1925[3]
  return i1924
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1927 = data
  i1926.m_HorizontalAxis = i1927[0]
  i1926.m_VerticalAxis = i1927[1]
  i1926.m_SubmitButton = i1927[2]
  i1926.m_CancelButton = i1927[3]
  i1926.m_InputActionsPerSecond = i1927[4]
  i1926.m_RepeatDelay = i1927[5]
  i1926.m_ForceModuleActive = !!i1927[6]
  i1926.m_SendPointerHoverToParent = !!i1927[7]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1929 = data
  i1928.type = i1929[0]
  i1928.color = new pc.Color(i1929[1], i1929[2], i1929[3], i1929[4])
  i1928.cullingMask = i1929[5]
  i1928.intensity = i1929[6]
  i1928.range = i1929[7]
  i1928.spotAngle = i1929[8]
  i1928.shadows = i1929[9]
  i1928.shadowNormalBias = i1929[10]
  i1928.shadowBias = i1929[11]
  i1928.shadowStrength = i1929[12]
  i1928.shadowResolution = i1929[13]
  i1928.lightmapBakeType = i1929[14]
  i1928.renderMode = i1929[15]
  request.r(i1929[16], i1929[17], 0, i1928, 'cookie')
  i1928.cookieSize = i1929[18]
  i1928.shadowNearPlane = i1929[19]
  i1928.occlusionMaskChannel = i1929[20]
  i1928.isBaked = !!i1929[21]
  i1928.mixedLightingMode = i1929[22]
  i1928.enabled = !!i1929[23]
  return i1928
}

Deserializers["GameController"] = function (request, data, root) {
  var i1930 = root || request.c( 'GameController' )
  var i1931 = data
  i1930.OnNextPhase = request.d('System.Action', i1931[0], i1930.OnNextPhase)
  i1930.currentPhase = i1931[1]
  var i1933 = i1931[2]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('Phase', i1933[i + 0]));
  }
  i1930.phases = i1932
  var i1935 = i1931[3]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1935.length; i += 2) {
  request.r(i1935[i + 0], i1935[i + 1], 1, i1934, '')
  }
  i1930.nextButton = i1934
  request.r(i1931[4], i1931[5], 0, i1930, 'nextSound')
  var i1937 = i1931[6]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 1, i1936, '')
  }
  i1930.buttons = i1936
  return i1930
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1938 = root || request.c( 'System.Action' )
  var i1939 = data
  return i1938
}

Deserializers["Phase"] = function (request, data, root) {
  var i1942 = root || request.c( 'Phase' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'Game')
  request.r(i1943[2], i1943[3], 0, i1942, 'UI')
  return i1942
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1946 = root || request.c( 'LunaController' )
  var i1947 = data
  i1946.LimitTimePlay = !!i1947[0]
  i1946.TimePlay = i1947[1]
  i1946.LimitStagePlay = !!i1947[2]
  i1946.StagePlay = i1947[3]
  i1946.UseCustomBG = !!i1947[4]
  request.r(i1947[5], i1947[6], 0, i1946, 'BGTexture')
  request.r(i1947[7], i1947[8], 0, i1946, 'BGM')
  i1946.Phase1TextColor = new pc.Color(i1947[9], i1947[10], i1947[11], i1947[12])
  i1946.Phase2TextColor = new pc.Color(i1947[13], i1947[14], i1947[15], i1947[16])
  i1946.Phase3TextColor = new pc.Color(i1947[17], i1947[18], i1947[19], i1947[20])
  request.r(i1947[21], i1947[22], 0, i1946, 'phase1Text')
  request.r(i1947[23], i1947[24], 0, i1946, 'phase2Text')
  request.r(i1947[25], i1947[26], 0, i1946, 'phase3Text1')
  request.r(i1947[27], i1947[28], 0, i1946, 'phase3Text2')
  request.r(i1947[29], i1947[30], 0, i1946, 'BGImage')
  request.r(i1947[31], i1947[32], 0, i1946, 'musicSource')
  var i1949 = i1947[33]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 1, i1948, '')
  }
  i1946.CTA = i1948
  i1946.currentStage = i1947[34]
  return i1946
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1950 = root || request.c( 'AudioController' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'poolParent')
  i1950.startSize = i1951[2]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'clip')
  request.r(i1953[2], i1953[3], 0, i1952, 'outputAudioMixerGroup')
  i1952.playOnAwake = !!i1953[4]
  i1952.loop = !!i1953[5]
  i1952.time = i1953[6]
  i1952.volume = i1953[7]
  i1952.pitch = i1953[8]
  i1952.enabled = !!i1953[9]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1955 = data
  i1954.pivot = new pc.Vec2( i1955[0], i1955[1] )
  i1954.anchorMin = new pc.Vec2( i1955[2], i1955[3] )
  i1954.anchorMax = new pc.Vec2( i1955[4], i1955[5] )
  i1954.sizeDelta = new pc.Vec2( i1955[6], i1955[7] )
  i1954.anchoredPosition3D = new pc.Vec3( i1955[8], i1955[9], i1955[10] )
  i1954.rotation = new pc.Quat(i1955[11], i1955[12], i1955[13], i1955[14])
  i1954.scale = new pc.Vec3( i1955[15], i1955[16], i1955[17] )
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1957 = data
  i1956.planeDistance = i1957[0]
  i1956.referencePixelsPerUnit = i1957[1]
  i1956.isFallbackOverlay = !!i1957[2]
  i1956.renderMode = i1957[3]
  i1956.renderOrder = i1957[4]
  i1956.sortingLayerName = i1957[5]
  i1956.sortingOrder = i1957[6]
  i1956.scaleFactor = i1957[7]
  request.r(i1957[8], i1957[9], 0, i1956, 'worldCamera')
  i1956.overrideSorting = !!i1957[10]
  i1956.pixelPerfect = !!i1957[11]
  i1956.targetDisplay = i1957[12]
  i1956.overridePixelPerfect = !!i1957[13]
  i1956.enabled = !!i1957[14]
  return i1956
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1959 = data
  i1958.m_UiScaleMode = i1959[0]
  i1958.m_ReferencePixelsPerUnit = i1959[1]
  i1958.m_ScaleFactor = i1959[2]
  i1958.m_ReferenceResolution = new pc.Vec2( i1959[3], i1959[4] )
  i1958.m_ScreenMatchMode = i1959[5]
  i1958.m_MatchWidthOrHeight = i1959[6]
  i1958.m_PhysicalUnit = i1959[7]
  i1958.m_FallbackScreenDPI = i1959[8]
  i1958.m_DefaultSpriteDPI = i1959[9]
  i1958.m_DynamicPixelsPerUnit = i1959[10]
  i1958.m_PresetInfoIsWorld = !!i1959[11]
  return i1958
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1961 = data
  i1960.m_IgnoreReversedGraphics = !!i1961[0]
  i1960.m_BlockingObjects = i1961[1]
  i1960.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1961[2] )
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1963 = data
  i1962.cullTransparentMesh = !!i1963[0]
  return i1962
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.Text' )
  var i1965 = data
  i1964.m_FontData = request.d('UnityEngine.UI.FontData', i1965[0], i1964.m_FontData)
  i1964.m_Text = i1965[1]
  request.r(i1965[2], i1965[3], 0, i1964, 'm_Material')
  i1964.m_Maskable = !!i1965[4]
  i1964.m_Color = new pc.Color(i1965[5], i1965[6], i1965[7], i1965[8])
  i1964.m_RaycastTarget = !!i1965[9]
  i1964.m_RaycastPadding = new pc.Vec4( i1965[10], i1965[11], i1965[12], i1965[13] )
  return i1964
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'm_Font')
  i1966.m_FontSize = i1967[2]
  i1966.m_FontStyle = i1967[3]
  i1966.m_BestFit = !!i1967[4]
  i1966.m_MinSize = i1967[5]
  i1966.m_MaxSize = i1967[6]
  i1966.m_Alignment = i1967[7]
  i1966.m_AlignByGeometry = !!i1967[8]
  i1966.m_RichText = !!i1967[9]
  i1966.m_HorizontalOverflow = i1967[10]
  i1966.m_VerticalOverflow = i1967[11]
  i1966.m_LineSpacing = i1967[12]
  return i1966
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1968 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1969 = data
  i1968.targetIsSelf = !!i1969[0]
  request.r(i1969[1], i1969[2], 0, i1968, 'targetGO')
  i1968.tweenTargetIsTargetGO = !!i1969[3]
  i1968.delay = i1969[4]
  i1968.duration = i1969[5]
  i1968.easeType = i1969[6]
  i1968.easeCurve = new pc.AnimationCurve( { keys_flow: i1969[7] } )
  i1968.loopType = i1969[8]
  i1968.loops = i1969[9]
  i1968.id = i1969[10]
  i1968.isRelative = !!i1969[11]
  i1968.isFrom = !!i1969[12]
  i1968.isIndependentUpdate = !!i1969[13]
  i1968.autoKill = !!i1969[14]
  i1968.autoGenerate = !!i1969[15]
  i1968.isActive = !!i1969[16]
  i1968.isValid = !!i1969[17]
  request.r(i1969[18], i1969[19], 0, i1968, 'target')
  i1968.animationType = i1969[20]
  i1968.targetType = i1969[21]
  i1968.forcedTargetType = i1969[22]
  i1968.autoPlay = !!i1969[23]
  i1968.useTargetAsV3 = !!i1969[24]
  i1968.endValueFloat = i1969[25]
  i1968.endValueV3 = new pc.Vec3( i1969[26], i1969[27], i1969[28] )
  i1968.endValueV2 = new pc.Vec2( i1969[29], i1969[30] )
  i1968.endValueColor = new pc.Color(i1969[31], i1969[32], i1969[33], i1969[34])
  i1968.endValueString = i1969[35]
  i1968.endValueRect = UnityEngine.Rect.MinMaxRect(i1969[36], i1969[37], i1969[38], i1969[39])
  request.r(i1969[40], i1969[41], 0, i1968, 'endValueTransform')
  i1968.optionalBool0 = !!i1969[42]
  i1968.optionalBool1 = !!i1969[43]
  i1968.optionalFloat0 = i1969[44]
  i1968.optionalInt0 = i1969[45]
  i1968.optionalRotationMode = i1969[46]
  i1968.optionalScrambleMode = i1969[47]
  i1968.optionalShakeRandomnessMode = i1969[48]
  i1968.optionalString = i1969[49]
  i1968.updateType = i1969[50]
  i1968.isSpeedBased = !!i1969[51]
  i1968.hasOnStart = !!i1969[52]
  i1968.hasOnPlay = !!i1969[53]
  i1968.hasOnUpdate = !!i1969[54]
  i1968.hasOnStepComplete = !!i1969[55]
  i1968.hasOnComplete = !!i1969[56]
  i1968.hasOnTweenCreated = !!i1969[57]
  i1968.hasOnRewind = !!i1969[58]
  i1968.onStart = request.d('UnityEngine.Events.UnityEvent', i1969[59], i1968.onStart)
  i1968.onPlay = request.d('UnityEngine.Events.UnityEvent', i1969[60], i1968.onPlay)
  i1968.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1969[61], i1968.onUpdate)
  i1968.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1969[62], i1968.onStepComplete)
  i1968.onComplete = request.d('UnityEngine.Events.UnityEvent', i1969[63], i1968.onComplete)
  i1968.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1969[64], i1968.onTweenCreated)
  i1968.onRewind = request.d('UnityEngine.Events.UnityEvent', i1969[65], i1968.onRewind)
  return i1968
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1971 = data
  i1970.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1971[0], i1970.m_PersistentCalls)
  return i1970
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.add(request.d('UnityEngine.Events.PersistentCall', i1975[i + 0]));
  }
  i1972.m_Calls = i1974
  return i1972
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'm_Target')
  i1978.m_TargetAssemblyTypeName = i1979[2]
  i1978.m_MethodName = i1979[3]
  i1978.m_Mode = i1979[4]
  i1978.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1979[5], i1978.m_Arguments)
  i1978.m_CallState = i1979[6]
  return i1978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Button' )
  var i1981 = data
  i1980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1981[0], i1980.m_OnClick)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[1], i1980.m_Navigation)
  i1980.m_Transition = i1981[2]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[3], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[4], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[5], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[6]
  request.r(i1981[7], i1981[8], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1985 = data
  i1984.m_Mode = i1985[0]
  i1984.m_WrapAround = !!i1985[1]
  request.r(i1985[2], i1985[3], 0, i1984, 'm_SelectOnUp')
  request.r(i1985[4], i1985[5], 0, i1984, 'm_SelectOnDown')
  request.r(i1985[6], i1985[7], 0, i1984, 'm_SelectOnLeft')
  request.r(i1985[8], i1985[9], 0, i1984, 'm_SelectOnRight')
  return i1984
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1987 = data
  i1986.m_NormalColor = new pc.Color(i1987[0], i1987[1], i1987[2], i1987[3])
  i1986.m_HighlightedColor = new pc.Color(i1987[4], i1987[5], i1987[6], i1987[7])
  i1986.m_PressedColor = new pc.Color(i1987[8], i1987[9], i1987[10], i1987[11])
  i1986.m_SelectedColor = new pc.Color(i1987[12], i1987[13], i1987[14], i1987[15])
  i1986.m_DisabledColor = new pc.Color(i1987[16], i1987[17], i1987[18], i1987[19])
  i1986.m_ColorMultiplier = i1987[20]
  i1986.m_FadeDuration = i1987[21]
  return i1986
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1989 = data
  request.r(i1989[0], i1989[1], 0, i1988, 'm_HighlightedSprite')
  request.r(i1989[2], i1989[3], 0, i1988, 'm_PressedSprite')
  request.r(i1989[4], i1989[5], 0, i1988, 'm_SelectedSprite')
  request.r(i1989[6], i1989[7], 0, i1988, 'm_DisabledSprite')
  return i1988
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1991 = data
  i1990.m_NormalTrigger = i1991[0]
  i1990.m_HighlightedTrigger = i1991[1]
  i1990.m_PressedTrigger = i1991[2]
  i1990.m_SelectedTrigger = i1991[3]
  i1990.m_DisabledTrigger = i1991[4]
  return i1990
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.UI.Image' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_Sprite')
  i1992.m_Type = i1993[2]
  i1992.m_PreserveAspect = !!i1993[3]
  i1992.m_FillCenter = !!i1993[4]
  i1992.m_FillMethod = i1993[5]
  i1992.m_FillAmount = i1993[6]
  i1992.m_FillClockwise = !!i1993[7]
  i1992.m_FillOrigin = i1993[8]
  i1992.m_UseSpriteMesh = !!i1993[9]
  i1992.m_PixelsPerUnitMultiplier = i1993[10]
  request.r(i1993[11], i1993[12], 0, i1992, 'm_Material')
  i1992.m_Maskable = !!i1993[13]
  i1992.m_Color = new pc.Color(i1993[14], i1993[15], i1993[16], i1993[17])
  i1992.m_RaycastTarget = !!i1993[18]
  i1992.m_RaycastPadding = new pc.Vec4( i1993[19], i1993[20], i1993[21], i1993[22] )
  return i1992
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'm_ObjectArgument')
  i1994.m_ObjectArgumentAssemblyTypeName = i1995[2]
  i1994.m_IntArgument = i1995[3]
  i1994.m_FloatArgument = i1995[4]
  i1994.m_StringArgument = i1995[5]
  i1994.m_BoolArgument = !!i1995[6]
  return i1994
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'm_Texture')
  i1996.m_UVRect = UnityEngine.Rect.MinMaxRect(i1997[2], i1997[3], i1997[4], i1997[5])
  request.r(i1997[6], i1997[7], 0, i1996, 'm_Material')
  i1996.m_Maskable = !!i1997[8]
  i1996.m_Color = new pc.Color(i1997[9], i1997[10], i1997[11], i1997[12])
  i1996.m_RaycastTarget = !!i1997[13]
  i1996.m_RaycastPadding = new pc.Vec4( i1997[14], i1997[15], i1997[16], i1997[17] )
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'sharedMesh')
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'additionalVertexStreams')
  i2000.enabled = !!i2001[2]
  request.r(i2001[3], i2001[4], 0, i2000, 'sharedMaterial')
  var i2003 = i2001[5]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 2, i2002, '')
  }
  i2000.sharedMaterials = i2002
  i2000.receiveShadows = !!i2001[6]
  i2000.shadowCastingMode = i2001[7]
  i2000.sortingLayerID = i2001[8]
  i2000.sortingOrder = i2001[9]
  i2000.lightmapIndex = i2001[10]
  i2000.lightmapSceneIndex = i2001[11]
  i2000.lightmapScaleOffset = new pc.Vec4( i2001[12], i2001[13], i2001[14], i2001[15] )
  i2000.lightProbeUsage = i2001[16]
  i2000.reflectionProbeUsage = i2001[17]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'sharedMesh')
  i2004.convex = !!i2005[2]
  i2004.enabled = !!i2005[3]
  i2004.isTrigger = !!i2005[4]
  request.r(i2005[5], i2005[6], 0, i2004, 'material')
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2007 = data
  i2006.center = new pc.Vec3( i2007[0], i2007[1], i2007[2] )
  i2006.size = new pc.Vec3( i2007[3], i2007[4], i2007[5] )
  i2006.enabled = !!i2007[6]
  i2006.isTrigger = !!i2007[7]
  request.r(i2007[8], i2007[9], 0, i2006, 'material')
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2009 = data
  i2008.mass = i2009[0]
  i2008.drag = i2009[1]
  i2008.angularDrag = i2009[2]
  i2008.useGravity = !!i2009[3]
  i2008.isKinematic = !!i2009[4]
  i2008.constraints = i2009[5]
  i2008.maxAngularVelocity = i2009[6]
  i2008.collisionDetectionMode = i2009[7]
  i2008.interpolation = i2009[8]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i2011 = data
  i2010.angularXDrive = request.d('UnityEngine.JointDrive', i2011[0], i2010.angularXDrive)
  i2010.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2011[1], i2010.angularXLimitSpring)
  i2010.angularXMotion = i2011[2]
  i2010.angularYLimit = request.d('UnityEngine.SoftJointLimit', i2011[3], i2010.angularYLimit)
  i2010.angularYMotion = i2011[4]
  i2010.angularYZDrive = request.d('UnityEngine.JointDrive', i2011[5], i2010.angularYZDrive)
  i2010.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2011[6], i2010.angularYZLimitSpring)
  i2010.angularZLimit = request.d('UnityEngine.SoftJointLimit', i2011[7], i2010.angularZLimit)
  i2010.angularZMotion = i2011[8]
  i2010.configuredInWorldSpace = !!i2011[9]
  i2010.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i2011[10], i2010.highAngularXLimit)
  i2010.linearLimit = request.d('UnityEngine.SoftJointLimit', i2011[11], i2010.linearLimit)
  i2010.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2011[12], i2010.linearLimitSpring)
  i2010.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i2011[13], i2010.lowAngularXLimit)
  i2010.rotationDriveMode = i2011[14]
  i2010.secondaryAxis = new pc.Vec3( i2011[15], i2011[16], i2011[17] )
  i2010.slerpDrive = request.d('UnityEngine.JointDrive', i2011[18], i2010.slerpDrive)
  i2010.swapBodies = !!i2011[19]
  i2010.targetAngularVelocity = new pc.Vec3( i2011[20], i2011[21], i2011[22] )
  i2010.targetPosition = new pc.Vec3( i2011[23], i2011[24], i2011[25] )
  i2010.targetRotation = new pc.Quat(i2011[26], i2011[27], i2011[28], i2011[29])
  i2010.targetVelocity = new pc.Vec3( i2011[30], i2011[31], i2011[32] )
  i2010.xDrive = request.d('UnityEngine.JointDrive', i2011[33], i2010.xDrive)
  i2010.xMotion = i2011[34]
  i2010.yDrive = request.d('UnityEngine.JointDrive', i2011[35], i2010.yDrive)
  i2010.yMotion = i2011[36]
  i2010.zDrive = request.d('UnityEngine.JointDrive', i2011[37], i2010.zDrive)
  i2010.zMotion = i2011[38]
  request.r(i2011[39], i2011[40], 0, i2010, 'connectedBody')
  i2010.axis = new pc.Vec3( i2011[41], i2011[42], i2011[43] )
  i2010.anchor = new pc.Vec3( i2011[44], i2011[45], i2011[46] )
  i2010.connectedAnchor = new pc.Vec3( i2011[47], i2011[48], i2011[49] )
  i2010.autoConfigureConnectedAnchor = !!i2011[50]
  i2010.massScale = i2011[51]
  i2010.connectedMassScale = i2011[52]
  i2010.enableCollision = !!i2011[53]
  i2010.breakForce = i2011[54]
  i2010.breakTorque = i2011[55]
  return i2010
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i2012 = root || request.c( 'BodyPiece' )
  var i2013 = data
  i2012.notUseAnim = !!i2013[0]
  request.r(i2013[1], i2013[2], 0, i2012, 'colli')
  request.r(i2013[3], i2013[4], 0, i2012, 'skeleton')
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpringJoint"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpringJoint' )
  var i2015 = data
  i2014.spring = i2015[0]
  i2014.damper = i2015[1]
  i2014.minDistance = i2015[2]
  i2014.maxDistance = i2015[3]
  i2014.tolerance = i2015[4]
  request.r(i2015[5], i2015[6], 0, i2014, 'connectedBody')
  i2014.axis = new pc.Vec3( i2015[7], i2015[8], i2015[9] )
  i2014.anchor = new pc.Vec3( i2015[10], i2015[11], i2015[12] )
  i2014.connectedAnchor = new pc.Vec3( i2015[13], i2015[14], i2015[15] )
  i2014.autoConfigureConnectedAnchor = !!i2015[16]
  i2014.massScale = i2015[17]
  i2014.connectedMassScale = i2015[18]
  i2014.enableCollision = !!i2015[19]
  i2014.breakForce = i2015[20]
  i2014.breakTorque = i2015[21]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2017 = data
  i2016.center = new pc.Vec3( i2017[0], i2017[1], i2017[2] )
  i2016.radius = i2017[3]
  i2016.height = i2017[4]
  i2016.direction = i2017[5]
  i2016.enabled = !!i2017[6]
  i2016.isTrigger = !!i2017[7]
  request.r(i2017[8], i2017[9], 0, i2016, 'material')
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'connectedBody')
  i2018.axis = new pc.Vec3( i2019[2], i2019[3], i2019[4] )
  i2018.anchor = new pc.Vec3( i2019[5], i2019[6], i2019[7] )
  i2018.connectedAnchor = new pc.Vec3( i2019[8], i2019[9], i2019[10] )
  i2018.autoConfigureConnectedAnchor = !!i2019[11]
  i2018.massScale = i2019[12]
  i2018.connectedMassScale = i2019[13]
  i2018.enableCollision = !!i2019[14]
  i2018.breakForce = i2019[15]
  i2018.breakTorque = i2019[16]
  return i2018
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i2020 = root || request.c( 'TakeDamage' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'phase')
  var i2023 = i2021[2]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 1, i2022, '')
  }
  i2020.bodyPieces = i2022
  request.r(i2021[3], i2021[4], 0, i2020, 'root')
  i2020.HP = i2021[5]
  i2020.onCD = !!i2021[6]
  i2020.currentHP = i2021[7]
  i2020.isDead = !!i2021[8]
  request.r(i2021[9], i2021[10], 0, i2020, 'anim')
  request.r(i2021[11], i2021[12], 0, i2020, 'hitSound')
  request.r(i2021[13], i2021[14], 0, i2020, 'hitSound2')
  request.r(i2021[15], i2021[16], 0, i2020, 'deadSound')
  request.r(i2021[17], i2021[18], 0, i2020, 'bloodPrefab')
  i2020.notUseAnim = !!i2021[19]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'animatorController')
  request.r(i2027[2], i2027[3], 0, i2026, 'avatar')
  i2026.updateMode = i2027[4]
  i2026.hasTransformHierarchy = !!i2027[5]
  i2026.applyRootMotion = !!i2027[6]
  var i2029 = i2027[7]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 2) {
  request.r(i2029[i + 0], i2029[i + 1], 2, i2028, '')
  }
  i2026.humanBones = i2028
  i2026.enabled = !!i2027[8]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'sharedMesh')
  var i2035 = i2033[2]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.bones = i2034
  i2032.updateWhenOffscreen = !!i2033[3]
  i2032.localBounds = i2033[4]
  request.r(i2033[5], i2033[6], 0, i2032, 'rootBone')
  var i2037 = i2033[7]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2037[i + 0]) );
  }
  i2032.blendShapesWeights = i2036
  i2032.enabled = !!i2033[8]
  request.r(i2033[9], i2033[10], 0, i2032, 'sharedMaterial')
  var i2039 = i2033[11]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2032.sharedMaterials = i2038
  i2032.receiveShadows = !!i2033[12]
  i2032.shadowCastingMode = i2033[13]
  i2032.sortingLayerID = i2033[14]
  i2032.sortingOrder = i2033[15]
  i2032.lightmapIndex = i2033[16]
  i2032.lightmapSceneIndex = i2033[17]
  i2032.lightmapScaleOffset = new pc.Vec4( i2033[18], i2033[19], i2033[20], i2033[21] )
  i2032.lightProbeUsage = i2033[22]
  i2032.reflectionProbeUsage = i2033[23]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2043 = data
  i2042.weight = i2043[0]
  return i2042
}

Deserializers["Dragable"] = function (request, data, root) {
  var i2044 = root || request.c( 'Dragable' )
  var i2045 = data
  i2044.OnDrag = request.d('System.Action', i2045[0], i2044.OnDrag)
  i2044.OnEndDrag = request.d('System.Action', i2045[1], i2044.OnEndDrag)
  return i2044
}

Deserializers["BodyController"] = function (request, data, root) {
  var i2046 = root || request.c( 'BodyController' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 1, i2048, '')
  }
  i2046.bodyPieces = i2048
  var i2051 = i2047[1]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 1, i2050, '')
  }
  i2046.dragPieces = i2050
  request.r(i2047[2], i2047[3], 0, i2046, 'anim')
  return i2046
}

Deserializers["LavaController"] = function (request, data, root) {
  var i2054 = root || request.c( 'LavaController' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'sound')
  i2054.part = i2055[2]
  i2054.isDead = !!i2055[3]
  return i2054
}

Deserializers["LavaPartDisappear"] = function (request, data, root) {
  var i2056 = root || request.c( 'LavaPartDisappear' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'boneToHide')
  request.r(i2057[2], i2057[3], 0, i2056, 'vfx')
  i2056.disappearDelay = i2057[4]
  i2056.shrinkDuration = i2057[5]
  request.r(i2057[6], i2057[7], 0, i2056, 'partCollider')
  i2056.disableCollider = !!i2057[8]
  request.r(i2057[9], i2057[10], 0, i2056, 'controller')
  return i2056
}

Deserializers["DragController"] = function (request, data, root) {
  var i2058 = root || request.c( 'DragController' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'currentTarget')
  i2058.positionSpring = i2059[2]
  i2058.positionDamper = i2059[3]
  request.r(i2059[4], i2059[5], 0, i2058, 'tut1')
  request.r(i2059[6], i2059[7], 0, i2058, 'tut2')
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2061 = data
  i2060.ambientIntensity = i2061[0]
  i2060.reflectionIntensity = i2061[1]
  i2060.ambientMode = i2061[2]
  i2060.ambientLight = new pc.Color(i2061[3], i2061[4], i2061[5], i2061[6])
  i2060.ambientSkyColor = new pc.Color(i2061[7], i2061[8], i2061[9], i2061[10])
  i2060.ambientGroundColor = new pc.Color(i2061[11], i2061[12], i2061[13], i2061[14])
  i2060.ambientEquatorColor = new pc.Color(i2061[15], i2061[16], i2061[17], i2061[18])
  i2060.fogColor = new pc.Color(i2061[19], i2061[20], i2061[21], i2061[22])
  i2060.fogEndDistance = i2061[23]
  i2060.fogStartDistance = i2061[24]
  i2060.fogDensity = i2061[25]
  i2060.fog = !!i2061[26]
  request.r(i2061[27], i2061[28], 0, i2060, 'skybox')
  i2060.fogMode = i2061[29]
  var i2063 = i2061[30]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2063[i + 0]) );
  }
  i2060.lightmaps = i2062
  i2060.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2061[31], i2060.lightProbes)
  i2060.lightmapsMode = i2061[32]
  i2060.mixedBakeMode = i2061[33]
  i2060.environmentLightingMode = i2061[34]
  i2060.ambientProbe = new pc.SphericalHarmonicsL2(i2061[35])
  request.r(i2061[36], i2061[37], 0, i2060, 'customReflection')
  request.r(i2061[38], i2061[39], 0, i2060, 'defaultReflection')
  i2060.defaultReflectionMode = i2061[40]
  i2060.defaultReflectionResolution = i2061[41]
  i2060.sunLightObjectId = i2061[42]
  i2060.pixelLightCount = i2061[43]
  i2060.defaultReflectionHDR = !!i2061[44]
  i2060.hasLightDataAsset = !!i2061[45]
  i2060.hasManualGenerate = !!i2061[46]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'lightmapColor')
  request.r(i2067[2], i2067[3], 0, i2066, 'lightmapDirection')
  request.r(i2067[4], i2067[5], 0, i2066, 'shadowMask')
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2068 = root || new UnityEngine.LightProbes()
  var i2069 = data
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2077 = data
  var i2079 = i2077[0]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2079[i + 0]));
  }
  i2076.ShaderCompilationErrors = i2078
  i2076.name = i2077[1]
  i2076.guid = i2077[2]
  var i2081 = i2077[3]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( i2081[i + 0] );
  }
  i2076.shaderDefinedKeywords = i2080
  var i2083 = i2077[4]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2083[i + 0]) );
  }
  i2076.passes = i2082
  var i2085 = i2077[5]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2085[i + 0]) );
  }
  i2076.usePasses = i2084
  var i2087 = i2077[6]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2087[i + 0]) );
  }
  i2076.defaultParameterValues = i2086
  request.r(i2077[7], i2077[8], 0, i2076, 'unityFallbackShader')
  i2076.readDepth = !!i2077[9]
  i2076.hasDepthOnlyPass = !!i2077[10]
  i2076.isCreatedByShaderGraph = !!i2077[11]
  i2076.disableBatching = !!i2077[12]
  i2076.compiled = !!i2077[13]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2091 = data
  i2090.shaderName = i2091[0]
  i2090.errorMessage = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2096 = root || new pc.UnityShaderPass()
  var i2097 = data
  i2096.id = i2097[0]
  i2096.subShaderIndex = i2097[1]
  i2096.name = i2097[2]
  i2096.passType = i2097[3]
  i2096.grabPassTextureName = i2097[4]
  i2096.usePass = !!i2097[5]
  i2096.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[6], i2096.zTest)
  i2096.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[7], i2096.zWrite)
  i2096.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[8], i2096.culling)
  i2096.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2097[9], i2096.blending)
  i2096.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2097[10], i2096.alphaBlending)
  i2096.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[11], i2096.colorWriteMask)
  i2096.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[12], i2096.offsetUnits)
  i2096.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[13], i2096.offsetFactor)
  i2096.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[14], i2096.stencilRef)
  i2096.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[15], i2096.stencilReadMask)
  i2096.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2097[16], i2096.stencilWriteMask)
  i2096.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2097[17], i2096.stencilOp)
  i2096.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2097[18], i2096.stencilOpFront)
  i2096.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2097[19], i2096.stencilOpBack)
  var i2099 = i2097[20]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2099[i + 0]) );
  }
  i2096.tags = i2098
  var i2101 = i2097[21]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2096.passDefinedKeywords = i2100
  var i2103 = i2097[22]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2103[i + 0]) );
  }
  i2096.passDefinedKeywordGroups = i2102
  var i2105 = i2097[23]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2105[i + 0]) );
  }
  i2096.variants = i2104
  var i2107 = i2097[24]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2107[i + 0]) );
  }
  i2096.excludedVariants = i2106
  i2096.hasDepthReader = !!i2097[25]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2109 = data
  i2108.val = i2109[0]
  i2108.name = i2109[1]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2111 = data
  i2110.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[0], i2110.src)
  i2110.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[1], i2110.dst)
  i2110.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[2], i2110.op)
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2113 = data
  i2112.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[0], i2112.pass)
  i2112.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[1], i2112.fail)
  i2112.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[2], i2112.zFail)
  i2112.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[3], i2112.comp)
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2117 = data
  i2116.name = i2117[0]
  i2116.value = i2117[1]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2121 = data
  var i2123 = i2121[0]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( i2123[i + 0] );
  }
  i2120.keywords = i2122
  i2120.hasDiscard = !!i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2127 = data
  i2126.passId = i2127[0]
  i2126.subShaderIndex = i2127[1]
  var i2129 = i2127[2]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( i2129[i + 0] );
  }
  i2126.keywords = i2128
  i2126.vertexProgram = i2127[3]
  i2126.fragmentProgram = i2127[4]
  i2126.exportedForWebGl2 = !!i2127[5]
  i2126.readDepth = !!i2127[6]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'shader')
  i2132.pass = i2133[2]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.type = i2137[1]
  i2136.value = new pc.Vec4( i2137[2], i2137[3], i2137[4], i2137[5] )
  i2136.textureValue = i2137[6]
  i2136.shaderPropertyFlag = i2137[7]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2139 = data
  i2138.name = i2139[0]
  request.r(i2139[1], i2139[2], 0, i2138, 'texture')
  i2138.aabb = i2139[3]
  i2138.vertices = i2139[4]
  i2138.triangles = i2139[5]
  i2138.textureRect = UnityEngine.Rect.MinMaxRect(i2139[6], i2139[7], i2139[8], i2139[9])
  i2138.packedRect = UnityEngine.Rect.MinMaxRect(i2139[10], i2139[11], i2139[12], i2139[13])
  i2138.border = new pc.Vec4( i2139[14], i2139[15], i2139[16], i2139[17] )
  i2138.transparency = i2139[18]
  i2138.bounds = i2139[19]
  i2138.pixelsPerUnit = i2139[20]
  i2138.textureWidth = i2139[21]
  i2138.textureHeight = i2139[22]
  i2138.nativeSize = new pc.Vec2( i2139[23], i2139[24] )
  i2138.pivot = new pc.Vec2( i2139[25], i2139[26] )
  i2138.textureRectOffset = new pc.Vec2( i2139[27], i2139[28] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2141 = data
  i2140.name = i2141[0]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.wrapMode = i2143[1]
  i2142.isLooping = !!i2143[2]
  i2142.length = i2143[3]
  var i2145 = i2143[4]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2145[i + 0]) );
  }
  i2142.curves = i2144
  var i2147 = i2143[5]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2147[i + 0]) );
  }
  i2142.events = i2146
  i2142.halfPrecision = !!i2143[6]
  i2142._frameRate = i2143[7]
  i2142.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2143[8], i2142.localBounds)
  i2142.hasMuscleCurves = !!i2143[9]
  var i2149 = i2143[10]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2142.clipMuscleConstant = i2148
  i2142.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2143[11], i2142.clipBindingConstant)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2153 = data
  i2152.path = i2153[0]
  i2152.hash = i2153[1]
  i2152.componentType = i2153[2]
  i2152.property = i2153[3]
  i2152.keys = i2153[4]
  var i2155 = i2153[5]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2155[i + 0]) );
  }
  i2152.objectReferenceKeys = i2154
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2159 = data
  i2158.functionName = i2159[0]
  i2158.floatParameter = i2159[1]
  i2158.intParameter = i2159[2]
  i2158.stringParameter = i2159[3]
  request.r(i2159[4], i2159[5], 0, i2158, 'objectReferenceParameter')
  i2158.time = i2159[6]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2161 = data
  i2160.center = new pc.Vec3( i2161[0], i2161[1], i2161[2] )
  i2160.extends = new pc.Vec3( i2161[3], i2161[4], i2161[5] )
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2165 = data
  var i2167 = i2165[0]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( i2167[i + 0] );
  }
  i2164.genericBindings = i2166
  var i2169 = i2165[1]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( i2169[i + 0] );
  }
  i2164.pptrCurveMapping = i2168
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2173 = data
  i2172.time = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'value')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2175 = data
  i2174.name = i2175[0]
  i2174.ascent = i2175[1]
  i2174.originalLineHeight = i2175[2]
  i2174.fontSize = i2175[3]
  var i2177 = i2175[4]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2177[i + 0]) );
  }
  i2174.characterInfo = i2176
  request.r(i2175[5], i2175[6], 0, i2174, 'texture')
  i2174.originalFontSize = i2175[7]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2181 = data
  i2180.index = i2181[0]
  i2180.advance = i2181[1]
  i2180.bearing = i2181[2]
  i2180.glyphWidth = i2181[3]
  i2180.glyphHeight = i2181[4]
  i2180.minX = i2181[5]
  i2180.maxX = i2181[6]
  i2180.minY = i2181[7]
  i2180.maxY = i2181[8]
  i2180.uvBottomLeftX = i2181[9]
  i2180.uvBottomLeftY = i2181[10]
  i2180.uvBottomRightX = i2181[11]
  i2180.uvBottomRightY = i2181[12]
  i2180.uvTopLeftX = i2181[13]
  i2180.uvTopLeftY = i2181[14]
  i2180.uvTopRightX = i2181[15]
  i2180.uvTopRightY = i2181[16]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2183 = data
  i2182.name = i2183[0]
  var i2185 = i2183[1]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2185[i + 0]) );
  }
  i2182.layers = i2184
  var i2187 = i2183[2]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2187[i + 0]) );
  }
  i2182.parameters = i2186
  i2182.animationClips = i2183[3]
  i2182.avatarUnsupported = i2183[4]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.defaultWeight = i2191[1]
  i2190.blendingMode = i2191[2]
  i2190.avatarMask = i2191[3]
  i2190.syncedLayerIndex = i2191[4]
  i2190.syncedLayerAffectsTiming = !!i2191[5]
  i2190.syncedLayers = i2191[6]
  i2190.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2191[7], i2190.stateMachine)
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2193 = data
  i2192.id = i2193[0]
  i2192.name = i2193[1]
  i2192.path = i2193[2]
  var i2195 = i2193[3]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2195[i + 0]) );
  }
  i2192.states = i2194
  var i2197 = i2193[4]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2197[i + 0]) );
  }
  i2192.machines = i2196
  var i2199 = i2193[5]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2199[i + 0]) );
  }
  i2192.entryStateTransitions = i2198
  var i2201 = i2193[6]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2201[i + 0]) );
  }
  i2192.exitStateTransitions = i2200
  var i2203 = i2193[7]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2203[i + 0]) );
  }
  i2192.anyStateTransitions = i2202
  i2192.defaultStateId = i2193[8]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2207 = data
  i2206.id = i2207[0]
  i2206.name = i2207[1]
  i2206.cycleOffset = i2207[2]
  i2206.cycleOffsetParameter = i2207[3]
  i2206.cycleOffsetParameterActive = !!i2207[4]
  i2206.mirror = !!i2207[5]
  i2206.mirrorParameter = i2207[6]
  i2206.mirrorParameterActive = !!i2207[7]
  i2206.motionId = i2207[8]
  i2206.nameHash = i2207[9]
  i2206.fullPathHash = i2207[10]
  i2206.speed = i2207[11]
  i2206.speedParameter = i2207[12]
  i2206.speedParameterActive = !!i2207[13]
  i2206.tag = i2207[14]
  i2206.tagHash = i2207[15]
  i2206.writeDefaultValues = !!i2207[16]
  var i2209 = i2207[17]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2206.behaviours = i2208
  var i2211 = i2207[18]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2211[i + 0]) );
  }
  i2206.transitions = i2210
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2217 = data
  i2216.fullPath = i2217[0]
  i2216.canTransitionToSelf = !!i2217[1]
  i2216.duration = i2217[2]
  i2216.exitTime = i2217[3]
  i2216.hasExitTime = !!i2217[4]
  i2216.hasFixedDuration = !!i2217[5]
  i2216.interruptionSource = i2217[6]
  i2216.offset = i2217[7]
  i2216.orderedInterruption = !!i2217[8]
  i2216.destinationStateId = i2217[9]
  i2216.isExit = !!i2217[10]
  i2216.mute = !!i2217[11]
  i2216.solo = !!i2217[12]
  var i2219 = i2217[13]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2219[i + 0]) );
  }
  i2216.conditions = i2218
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2223 = data
  i2222.mode = i2223[0]
  i2222.parameter = i2223[1]
  i2222.threshold = i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2229 = data
  i2228.destinationStateId = i2229[0]
  i2228.isExit = !!i2229[1]
  i2228.mute = !!i2229[2]
  i2228.solo = !!i2229[3]
  var i2231 = i2229[4]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2231[i + 0]) );
  }
  i2228.conditions = i2230
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2235 = data
  i2234.defaultBool = !!i2235[0]
  i2234.defaultFloat = i2235[1]
  i2234.defaultInt = i2235[2]
  i2234.name = i2235[3]
  i2234.nameHash = i2235[4]
  i2234.type = i2235[5]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2237 = data
  i2236.name = i2237[0]
  request.r(i2237[1], i2237[2], 0, i2236, '_runtimeAnimatorController')
  var i2239 = i2237[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2236._originalAnimationClips = i2238
  var i2241 = i2237[4]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 2) {
  request.r(i2241[i + 0], i2241[i + 1], 2, i2240, '')
  }
  i2236._overrideAnimationClips = i2240
  var i2243 = i2237[5]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2236._animationClips = i2242
  var i2245 = i2237[6]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('UnityEngine.AnimationClipPair', i2245[i + 0]) );
  }
  i2236._animationClipPairs = i2244
  return i2236
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'originalClip')
  request.r(i2251[2], i2251[3], 0, i2250, 'overrideClip')
  return i2250
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2253 = data
  i2252.useSafeMode = !!i2253[0]
  i2252.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2253[1], i2252.safeModeOptions)
  i2252.timeScale = i2253[2]
  i2252.unscaledTimeScale = i2253[3]
  i2252.useSmoothDeltaTime = !!i2253[4]
  i2252.maxSmoothUnscaledTime = i2253[5]
  i2252.rewindCallbackMode = i2253[6]
  i2252.showUnityEditorReport = !!i2253[7]
  i2252.logBehaviour = i2253[8]
  i2252.drawGizmos = !!i2253[9]
  i2252.defaultRecyclable = !!i2253[10]
  i2252.defaultAutoPlay = i2253[11]
  i2252.defaultUpdateType = i2253[12]
  i2252.defaultTimeScaleIndependent = !!i2253[13]
  i2252.defaultEaseType = i2253[14]
  i2252.defaultEaseOvershootOrAmplitude = i2253[15]
  i2252.defaultEasePeriod = i2253[16]
  i2252.defaultAutoKill = !!i2253[17]
  i2252.defaultLoopType = i2253[18]
  i2252.debugMode = !!i2253[19]
  i2252.debugStoreTargetId = !!i2253[20]
  i2252.showPreviewPanel = !!i2253[21]
  i2252.storeSettingsLocation = i2253[22]
  i2252.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2253[23], i2252.modules)
  i2252.createASMDEF = !!i2253[24]
  i2252.showPlayingTweens = !!i2253[25]
  i2252.showPausedTweens = !!i2253[26]
  return i2252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2255 = data
  i2254.logBehaviour = i2255[0]
  i2254.nestedTweenFailureBehaviour = i2255[1]
  return i2254
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2256 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2257 = data
  i2256.showPanel = !!i2257[0]
  i2256.audioEnabled = !!i2257[1]
  i2256.physicsEnabled = !!i2257[2]
  i2256.physics2DEnabled = !!i2257[3]
  i2256.spriteEnabled = !!i2257[4]
  i2256.uiEnabled = !!i2257[5]
  i2256.textMeshProEnabled = !!i2257[6]
  i2256.tk2DEnabled = !!i2257[7]
  i2256.deAudioEnabled = !!i2257[8]
  i2256.deUnityExtendedEnabled = !!i2257[9]
  i2256.epoOutlineEnabled = !!i2257[10]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2261[i + 0]) );
  }
  i2258.files = i2260
  i2258.componentToPrefabIds = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2265 = data
  i2264.path = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'unityObject')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2267 = data
  var i2269 = i2267[0]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2269[i + 0]) );
  }
  i2266.scriptsExecutionOrder = i2268
  var i2271 = i2267[1]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2271[i + 0]) );
  }
  i2266.sortingLayers = i2270
  var i2273 = i2267[2]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2273[i + 0]) );
  }
  i2266.cullingLayers = i2272
  i2266.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2267[3], i2266.timeSettings)
  i2266.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2267[4], i2266.physicsSettings)
  i2266.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2267[5], i2266.physics2DSettings)
  i2266.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2267[6], i2266.qualitySettings)
  i2266.enableRealtimeShadows = !!i2267[7]
  i2266.enableAutoInstancing = !!i2267[8]
  i2266.enableStaticBatching = !!i2267[9]
  i2266.enableDynamicBatching = !!i2267[10]
  i2266.usePreservativeDynamicBatching = !!i2267[11]
  i2266.lightmapEncodingQuality = i2267[12]
  i2266.desiredColorSpace = i2267[13]
  var i2275 = i2267[14]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( i2275[i + 0] );
  }
  i2266.allTags = i2274
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2283 = data
  i2282.id = i2283[0]
  i2282.name = i2283[1]
  i2282.value = i2283[2]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2287 = data
  i2286.id = i2287[0]
  i2286.name = i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2289 = data
  i2288.fixedDeltaTime = i2289[0]
  i2288.maximumDeltaTime = i2289[1]
  i2288.timeScale = i2289[2]
  i2288.maximumParticleTimestep = i2289[3]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2291 = data
  i2290.gravity = new pc.Vec3( i2291[0], i2291[1], i2291[2] )
  i2290.defaultSolverIterations = i2291[3]
  i2290.bounceThreshold = i2291[4]
  i2290.autoSyncTransforms = !!i2291[5]
  i2290.autoSimulation = !!i2291[6]
  var i2293 = i2291[7]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2293[i + 0]) );
  }
  i2290.collisionMatrix = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.layerId = i2297[1]
  i2296.otherLayerId = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'material')
  i2298.gravity = new pc.Vec2( i2299[2], i2299[3] )
  i2298.positionIterations = i2299[4]
  i2298.velocityIterations = i2299[5]
  i2298.velocityThreshold = i2299[6]
  i2298.maxLinearCorrection = i2299[7]
  i2298.maxAngularCorrection = i2299[8]
  i2298.maxTranslationSpeed = i2299[9]
  i2298.maxRotationSpeed = i2299[10]
  i2298.baumgarteScale = i2299[11]
  i2298.baumgarteTOIScale = i2299[12]
  i2298.timeToSleep = i2299[13]
  i2298.linearSleepTolerance = i2299[14]
  i2298.angularSleepTolerance = i2299[15]
  i2298.defaultContactOffset = i2299[16]
  i2298.autoSimulation = !!i2299[17]
  i2298.queriesHitTriggers = !!i2299[18]
  i2298.queriesStartInColliders = !!i2299[19]
  i2298.callbacksOnDisable = !!i2299[20]
  i2298.reuseCollisionCallbacks = !!i2299[21]
  i2298.autoSyncTransforms = !!i2299[22]
  var i2301 = i2299[23]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2301[i + 0]) );
  }
  i2298.collisionMatrix = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.layerId = i2305[1]
  i2304.otherLayerId = i2305[2]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2309[i + 0]) );
  }
  i2306.qualityLevels = i2308
  var i2311 = i2307[1]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2306.names = i2310
  i2306.shadows = i2307[2]
  i2306.anisotropicFiltering = i2307[3]
  i2306.antiAliasing = i2307[4]
  i2306.lodBias = i2307[5]
  i2306.shadowCascades = i2307[6]
  i2306.shadowDistance = i2307[7]
  i2306.shadowmaskMode = i2307[8]
  i2306.shadowProjection = i2307[9]
  i2306.shadowResolution = i2307[10]
  i2306.softParticles = !!i2307[11]
  i2306.softVegetation = !!i2307[12]
  i2306.activeColorSpace = i2307[13]
  i2306.desiredColorSpace = i2307[14]
  i2306.masterTextureLimit = i2307[15]
  i2306.maxQueuedFrames = i2307[16]
  i2306.particleRaycastBudget = i2307[17]
  i2306.pixelLightCount = i2307[18]
  i2306.realtimeReflectionProbes = !!i2307[19]
  i2306.shadowCascade2Split = i2307[20]
  i2306.shadowCascade4Split = new pc.Vec3( i2307[21], i2307[22], i2307[23] )
  i2306.streamingMipmapsActive = !!i2307[24]
  i2306.vSyncCount = i2307[25]
  i2306.asyncUploadBufferSize = i2307[26]
  i2306.asyncUploadTimeSlice = i2307[27]
  i2306.billboardsFaceCameraPosition = !!i2307[28]
  i2306.shadowNearPlaneOffset = i2307[29]
  i2306.streamingMipmapsMemoryBudget = i2307[30]
  i2306.maximumLODLevel = i2307[31]
  i2306.streamingMipmapsAddAllCameras = !!i2307[32]
  i2306.streamingMipmapsMaxLevelReduction = i2307[33]
  i2306.streamingMipmapsRenderersPerFrame = i2307[34]
  i2306.resolutionScalingFixedDPIFactor = i2307[35]
  i2306.streamingMipmapsMaxFileIORequests = i2307[36]
  i2306.currentQualityLevel = i2307[37]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2315 = data
  i2314.name = i2315[0]
  var i2317 = i2315[1]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2317[i + 0]) );
  }
  i2314.tos = i2316
  var i2319 = i2315[2]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( i2319[i + 0] );
  }
  i2314.constant = i2318
  i2314.isValid = !!i2315[3]
  i2314.isHuman = !!i2315[4]
  i2314.hasRootMotion = !!i2315[5]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2323 = data
  i2322.hash = i2323[0]
  i2322.path = i2323[1]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2327 = data
  i2326.weight = i2327[0]
  i2326.vertices = i2327[1]
  i2326.normals = i2327[2]
  i2326.tangents = i2327[3]
  return i2326
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.SpringJoint":{"spring":0,"damper":1,"minDistance":2,"maxDistance":3,"tolerance":4,"connectedBody":5,"axis":7,"anchor":10,"connectedAnchor":13,"autoConfigureConnectedAnchor":16,"massScale":17,"connectedMassScale":18,"enableCollision":19,"breakForce":20,"breakTorque":21},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint":{"connectedBody":0,"axis":2,"anchor":5,"connectedAnchor":8,"autoConfigureConnectedAnchor":11,"massScale":12,"connectedMassScale":13,"enableCollision":14,"breakForce":15,"breakTorque":16},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[47],"65":[7],"66":[37],"38":[37],"67":[37],"42":[37],"68":[37],"40":[37],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[70],"78":[70],"79":[70],"80":[70],"81":[70],"82":[70],"83":[7],"84":[34],"85":[86],"87":[86],"25":[24],"88":[24],"89":[28,24],"90":[34],"91":[28,24],"92":[24],"93":[24],"94":[34,24],"95":[24,28],"96":[97],"98":[97],"99":[97],"100":[24],"101":[24],"27":[25],"31":[28,24],"102":[24],"26":[25],"103":[24],"104":[24],"105":[24],"106":[24],"107":[24],"108":[24],"109":[24],"110":[24],"111":[24],"21":[28,24],"112":[24],"113":[24],"114":[24],"115":[24],"20":[28,24],"116":[24],"117":[12],"118":[12],"13":[12],"119":[12],"120":[7],"121":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","GameController","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","LunaController","UnityEngine.UI.Text","UnityEngine.UI.RawImage","UnityEngine.AudioSource","AudioController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","BodyPiece","UnityEngine.SpringJoint","UnityEngine.CapsuleCollider","UnityEngine.FixedJoint","TakeDamage","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","Dragable","BodyController","LavaController","LavaPartDisappear","UnityEditor.Animations.AnimatorController","DragController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.HingeJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "09/28/2026 03:37:10";

Deserializers.lunaDaysRunning = "7.2";

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

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRG_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "fc9f3f89-33d6-4d59-aff3-6041c577ba85";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

