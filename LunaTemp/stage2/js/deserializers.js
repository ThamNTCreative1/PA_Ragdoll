var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.JointSpring' )
  var i1841 = data
  i1840.spring = i1841[0]
  i1840.damper = i1841[1]
  i1840.targetPosition = i1841[2]
  return i1840
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.JointMotor' )
  var i1843 = data
  i1842.m_TargetVelocity = i1843[0]
  i1842.m_Force = i1843[1]
  i1842.m_FreeSpin = i1843[2]
  return i1842
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.JointLimits' )
  var i1845 = data
  i1844.m_Min = i1845[0]
  i1844.m_Max = i1845[1]
  i1844.m_Bounciness = i1845[2]
  i1844.m_BounceMinVelocity = i1845[3]
  i1844.m_ContactDistance = i1845[4]
  i1844.minBounce = i1845[5]
  i1844.maxBounce = i1845[6]
  return i1844
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.JointDrive' )
  var i1847 = data
  i1846.m_PositionSpring = i1847[0]
  i1846.m_PositionDamper = i1847[1]
  i1846.m_MaximumForce = i1847[2]
  i1846.m_UseAcceleration = i1847[3]
  return i1846
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1849 = data
  i1848.m_Spring = i1849[0]
  i1848.m_Damper = i1849[1]
  return i1848
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1851 = data
  i1850.m_Limit = i1851[0]
  i1850.m_Bounciness = i1851[1]
  i1850.m_ContactDistance = i1851[2]
  return i1850
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1853 = data
  i1852.m_ExtremumSlip = i1853[0]
  i1852.m_ExtremumValue = i1853[1]
  i1852.m_AsymptoteSlip = i1853[2]
  i1852.m_AsymptoteValue = i1853[3]
  i1852.m_Stiffness = i1853[4]
  return i1852
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1855 = data
  i1854.m_LowerAngle = i1855[0]
  i1854.m_UpperAngle = i1855[1]
  return i1854
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1857 = data
  i1856.m_MotorSpeed = i1857[0]
  i1856.m_MaximumMotorTorque = i1857[1]
  return i1856
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1859 = data
  i1858.m_DampingRatio = i1859[0]
  i1858.m_Frequency = i1859[1]
  i1858.m_Angle = i1859[2]
  return i1858
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1861 = data
  i1860.m_LowerTranslation = i1861[0]
  i1860.m_UpperTranslation = i1861[1]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1862 = root || new pc.UnityMaterial()
  var i1863 = data
  i1862.name = i1863[0]
  request.r(i1863[1], i1863[2], 0, i1862, 'shader')
  i1862.renderQueue = i1863[3]
  i1862.enableInstancing = !!i1863[4]
  var i1865 = i1863[5]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1865[i + 0]) );
  }
  i1862.floatParameters = i1864
  var i1867 = i1863[6]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1867[i + 0]) );
  }
  i1862.colorParameters = i1866
  var i1869 = i1863[7]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1869[i + 0]) );
  }
  i1862.vectorParameters = i1868
  var i1871 = i1863[8]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1871[i + 0]) );
  }
  i1862.textureParameters = i1870
  var i1873 = i1863[9]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1873[i + 0]) );
  }
  i1862.materialFlags = i1872
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.value = i1877[1]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1881 = data
  i1880.name = i1881[0]
  i1880.value = new pc.Color(i1881[1], i1881[2], i1881[3], i1881[4])
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.value = new pc.Vec4( i1885[1], i1885[2], i1885[3], i1885[4] )
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1889 = data
  i1888.name = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'value')
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.enabled = !!i1893[1]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.width = i1895[1]
  i1894.height = i1895[2]
  i1894.mipmapCount = i1895[3]
  i1894.anisoLevel = i1895[4]
  i1894.filterMode = i1895[5]
  i1894.hdr = !!i1895[6]
  i1894.format = i1895[7]
  i1894.wrapMode = i1895[8]
  i1894.alphaIsTransparency = !!i1895[9]
  i1894.alphaSource = i1895[10]
  i1894.graphicsFormat = i1895[11]
  i1894.sRGBTexture = !!i1895[12]
  i1894.desiredColorSpace = i1895[13]
  i1894.wrapU = i1895[14]
  i1894.wrapV = i1895[15]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1897 = data
  i1896.position = new pc.Vec3( i1897[0], i1897[1], i1897[2] )
  i1896.scale = new pc.Vec3( i1897[3], i1897[4], i1897[5] )
  i1896.rotation = new pc.Quat(i1897[6], i1897[7], i1897[8], i1897[9])
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1899 = data
  i1898.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1899[0], i1898.main)
  i1898.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1899[1], i1898.colorBySpeed)
  i1898.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1899[2], i1898.colorOverLifetime)
  i1898.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1899[3], i1898.emission)
  i1898.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1899[4], i1898.rotationBySpeed)
  i1898.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1899[5], i1898.rotationOverLifetime)
  i1898.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1899[6], i1898.shape)
  i1898.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1899[7], i1898.sizeBySpeed)
  i1898.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1899[8], i1898.sizeOverLifetime)
  i1898.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1899[9], i1898.textureSheetAnimation)
  i1898.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1899[10], i1898.velocityOverLifetime)
  i1898.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1899[11], i1898.noise)
  i1898.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1899[12], i1898.inheritVelocity)
  i1898.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1899[13], i1898.forceOverLifetime)
  i1898.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1899[14], i1898.limitVelocityOverLifetime)
  i1898.useAutoRandomSeed = !!i1899[15]
  i1898.randomSeed = i1899[16]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1900 = root || new pc.ParticleSystemMain()
  var i1901 = data
  i1900.duration = i1901[0]
  i1900.loop = !!i1901[1]
  i1900.prewarm = !!i1901[2]
  i1900.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[3], i1900.startDelay)
  i1900.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[4], i1900.startLifetime)
  i1900.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[5], i1900.startSpeed)
  i1900.startSize3D = !!i1901[6]
  i1900.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[7], i1900.startSizeX)
  i1900.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[8], i1900.startSizeY)
  i1900.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[9], i1900.startSizeZ)
  i1900.startRotation3D = !!i1901[10]
  i1900.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[11], i1900.startRotationX)
  i1900.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[12], i1900.startRotationY)
  i1900.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[13], i1900.startRotationZ)
  i1900.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1901[14], i1900.startColor)
  i1900.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[15], i1900.gravityModifier)
  i1900.simulationSpace = i1901[16]
  request.r(i1901[17], i1901[18], 0, i1900, 'customSimulationSpace')
  i1900.simulationSpeed = i1901[19]
  i1900.useUnscaledTime = !!i1901[20]
  i1900.scalingMode = i1901[21]
  i1900.playOnAwake = !!i1901[22]
  i1900.maxParticles = i1901[23]
  i1900.emitterVelocityMode = i1901[24]
  i1900.stopAction = i1901[25]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1902 = root || new pc.MinMaxCurve()
  var i1903 = data
  i1902.mode = i1903[0]
  i1902.curveMin = new pc.AnimationCurve( { keys_flow: i1903[1] } )
  i1902.curveMax = new pc.AnimationCurve( { keys_flow: i1903[2] } )
  i1902.curveMultiplier = i1903[3]
  i1902.constantMin = i1903[4]
  i1902.constantMax = i1903[5]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1904 = root || new pc.MinMaxGradient()
  var i1905 = data
  i1904.mode = i1905[0]
  i1904.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[1], i1904.gradientMin)
  i1904.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1905[2], i1904.gradientMax)
  i1904.colorMin = new pc.Color(i1905[3], i1905[4], i1905[5], i1905[6])
  i1904.colorMax = new pc.Color(i1905[7], i1905[8], i1905[9], i1905[10])
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1907 = data
  i1906.mode = i1907[0]
  var i1909 = i1907[1]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1909[i + 0]) );
  }
  i1906.colorKeys = i1908
  var i1911 = i1907[2]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1911[i + 0]) );
  }
  i1906.alphaKeys = i1910
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1912 = root || new pc.ParticleSystemColorBySpeed()
  var i1913 = data
  i1912.enabled = !!i1913[0]
  i1912.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1913[1], i1912.color)
  i1912.range = new pc.Vec2( i1913[2], i1913[3] )
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1917 = data
  i1916.color = new pc.Color(i1917[0], i1917[1], i1917[2], i1917[3])
  i1916.time = i1917[4]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1921 = data
  i1920.alpha = i1921[0]
  i1920.time = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemColorOverLifetime()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1923[1], i1922.color)
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1924 = root || new pc.ParticleSystemEmitter()
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[1], i1924.rateOverTime)
  i1924.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1925[2], i1924.rateOverDistance)
  var i1927 = i1925[3]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1927[i + 0]) );
  }
  i1924.bursts = i1926
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1930 = root || new pc.ParticleSystemBurst()
  var i1931 = data
  i1930.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1931[0], i1930.count)
  i1930.cycleCount = i1931[1]
  i1930.minCount = i1931[2]
  i1930.maxCount = i1931[3]
  i1930.repeatInterval = i1931[4]
  i1930.time = i1931[5]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemRotationBySpeed()
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[1], i1932.x)
  i1932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[2], i1932.y)
  i1932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[3], i1932.z)
  i1932.separateAxes = !!i1933[4]
  i1932.range = new pc.Vec2( i1933[5], i1933[6] )
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.x)
  i1934.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.y)
  i1934.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[3], i1934.z)
  i1934.separateAxes = !!i1935[4]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1936 = root || new pc.ParticleSystemShape()
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.shapeType = i1937[1]
  i1936.randomDirectionAmount = i1937[2]
  i1936.sphericalDirectionAmount = i1937[3]
  i1936.randomPositionAmount = i1937[4]
  i1936.alignToDirection = !!i1937[5]
  i1936.radius = i1937[6]
  i1936.radiusMode = i1937[7]
  i1936.radiusSpread = i1937[8]
  i1936.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[9], i1936.radiusSpeed)
  i1936.radiusThickness = i1937[10]
  i1936.angle = i1937[11]
  i1936.length = i1937[12]
  i1936.boxThickness = new pc.Vec3( i1937[13], i1937[14], i1937[15] )
  i1936.meshShapeType = i1937[16]
  request.r(i1937[17], i1937[18], 0, i1936, 'mesh')
  request.r(i1937[19], i1937[20], 0, i1936, 'meshRenderer')
  request.r(i1937[21], i1937[22], 0, i1936, 'skinnedMeshRenderer')
  i1936.useMeshMaterialIndex = !!i1937[23]
  i1936.meshMaterialIndex = i1937[24]
  i1936.useMeshColors = !!i1937[25]
  i1936.normalOffset = i1937[26]
  i1936.arc = i1937[27]
  i1936.arcMode = i1937[28]
  i1936.arcSpread = i1937[29]
  i1936.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1937[30], i1936.arcSpeed)
  i1936.donutRadius = i1937[31]
  i1936.position = new pc.Vec3( i1937[32], i1937[33], i1937[34] )
  i1936.rotation = new pc.Vec3( i1937[35], i1937[36], i1937[37] )
  i1936.scale = new pc.Vec3( i1937[38], i1937[39], i1937[40] )
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemSizeBySpeed()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[1], i1938.x)
  i1938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[2], i1938.y)
  i1938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1939[3], i1938.z)
  i1938.separateAxes = !!i1939[4]
  i1938.range = new pc.Vec2( i1939[5], i1939[6] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1941 = data
  i1940.enabled = !!i1941[0]
  i1940.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[1], i1940.x)
  i1940.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[2], i1940.y)
  i1940.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[3], i1940.z)
  i1940.separateAxes = !!i1941[4]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.mode = i1943[1]
  i1942.animation = i1943[2]
  i1942.numTilesX = i1943[3]
  i1942.numTilesY = i1943[4]
  i1942.useRandomRow = !!i1943[5]
  i1942.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[6], i1942.frameOverTime)
  i1942.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[7], i1942.startFrame)
  i1942.cycleCount = i1943[8]
  i1942.rowIndex = i1943[9]
  i1942.flipU = i1943[10]
  i1942.flipV = i1943[11]
  i1942.spriteCount = i1943[12]
  var i1945 = i1943[13]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1942.sprites = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[4], i1948.radial)
  i1948.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[5], i1948.speedModifier)
  i1948.space = i1949[6]
  i1948.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[7], i1948.orbitalX)
  i1948.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[8], i1948.orbitalY)
  i1948.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[9], i1948.orbitalZ)
  i1948.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[10], i1948.orbitalOffsetX)
  i1948.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[11], i1948.orbitalOffsetY)
  i1948.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[12], i1948.orbitalOffsetZ)
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemNoise()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.separateAxes = !!i1951[1]
  i1950.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.strengthX)
  i1950.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.strengthY)
  i1950.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.strengthZ)
  i1950.frequency = i1951[5]
  i1950.damping = !!i1951[6]
  i1950.octaveCount = i1951[7]
  i1950.octaveMultiplier = i1951[8]
  i1950.octaveScale = i1951[9]
  i1950.quality = i1951[10]
  i1950.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[11], i1950.scrollSpeed)
  i1950.scrollSpeedMultiplier = i1951[12]
  i1950.remapEnabled = !!i1951[13]
  i1950.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[14], i1950.remapX)
  i1950.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[15], i1950.remapY)
  i1950.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[16], i1950.remapZ)
  i1950.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[17], i1950.positionAmount)
  i1950.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[18], i1950.rotationAmount)
  i1950.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[19], i1950.sizeAmount)
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemInheritVelocity()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[2], i1952.curve)
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemForceOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[1], i1954.x)
  i1954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[2], i1954.y)
  i1954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1955[3], i1954.z)
  i1954.space = i1955[4]
  i1954.randomized = !!i1955[5]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.limit)
  i1956.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.limitX)
  i1956.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[3], i1956.limitY)
  i1956.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[4], i1956.limitZ)
  i1956.dampen = i1957[5]
  i1956.separateAxes = !!i1957[6]
  i1956.space = i1957[7]
  i1956.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[8], i1956.drag)
  i1956.multiplyDragByParticleSize = !!i1957[9]
  i1956.multiplyDragByParticleVelocity = !!i1957[10]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'mesh')
  i1958.meshCount = i1959[2]
  i1958.activeVertexStreamsCount = i1959[3]
  i1958.alignment = i1959[4]
  i1958.renderMode = i1959[5]
  i1958.sortMode = i1959[6]
  i1958.lengthScale = i1959[7]
  i1958.velocityScale = i1959[8]
  i1958.cameraVelocityScale = i1959[9]
  i1958.normalDirection = i1959[10]
  i1958.sortingFudge = i1959[11]
  i1958.minParticleSize = i1959[12]
  i1958.maxParticleSize = i1959[13]
  i1958.pivot = new pc.Vec3( i1959[14], i1959[15], i1959[16] )
  request.r(i1959[17], i1959[18], 0, i1958, 'trailMaterial')
  i1958.applyActiveColorSpace = !!i1959[19]
  i1958.enabled = !!i1959[20]
  request.r(i1959[21], i1959[22], 0, i1958, 'sharedMaterial')
  var i1961 = i1959[23]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 2, i1960, '')
  }
  i1958.sharedMaterials = i1960
  i1958.receiveShadows = !!i1959[24]
  i1958.shadowCastingMode = i1959[25]
  i1958.sortingLayerID = i1959[26]
  i1958.sortingOrder = i1959[27]
  i1958.lightmapIndex = i1959[28]
  i1958.lightmapSceneIndex = i1959[29]
  i1958.lightmapScaleOffset = new pc.Vec4( i1959[30], i1959[31], i1959[32], i1959[33] )
  i1958.lightProbeUsage = i1959[34]
  i1958.reflectionProbeUsage = i1959[35]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1965 = data
  i1964.name = i1965[0]
  i1964.tagId = i1965[1]
  i1964.enabled = !!i1965[2]
  i1964.isStatic = !!i1965[3]
  i1964.layer = i1965[4]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1967 = data
  i1966.name = i1967[0]
  i1966.index = i1967[1]
  i1966.startup = !!i1967[2]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1969 = data
  i1968.aspect = i1969[0]
  i1968.orthographic = !!i1969[1]
  i1968.orthographicSize = i1969[2]
  i1968.backgroundColor = new pc.Color(i1969[3], i1969[4], i1969[5], i1969[6])
  i1968.nearClipPlane = i1969[7]
  i1968.farClipPlane = i1969[8]
  i1968.fieldOfView = i1969[9]
  i1968.depth = i1969[10]
  i1968.clearFlags = i1969[11]
  i1968.cullingMask = i1969[12]
  i1968.rect = i1969[13]
  request.r(i1969[14], i1969[15], 0, i1968, 'targetTexture')
  i1968.usePhysicalProperties = !!i1969[16]
  i1968.focalLength = i1969[17]
  i1968.sensorSize = new pc.Vec2( i1969[18], i1969[19] )
  i1968.lensShift = new pc.Vec2( i1969[20], i1969[21] )
  i1968.gateFit = i1969[22]
  i1968.commandBufferCount = i1969[23]
  i1968.cameraType = i1969[24]
  i1968.enabled = !!i1969[25]
  return i1968
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'm_FirstSelected')
  i1970.m_sendNavigationEvents = !!i1971[2]
  i1970.m_DragThreshold = i1971[3]
  return i1970
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1973 = data
  i1972.m_HorizontalAxis = i1973[0]
  i1972.m_VerticalAxis = i1973[1]
  i1972.m_SubmitButton = i1973[2]
  i1972.m_CancelButton = i1973[3]
  i1972.m_InputActionsPerSecond = i1973[4]
  i1972.m_RepeatDelay = i1973[5]
  i1972.m_ForceModuleActive = !!i1973[6]
  i1972.m_SendPointerHoverToParent = !!i1973[7]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1975 = data
  i1974.pivot = new pc.Vec2( i1975[0], i1975[1] )
  i1974.anchorMin = new pc.Vec2( i1975[2], i1975[3] )
  i1974.anchorMax = new pc.Vec2( i1975[4], i1975[5] )
  i1974.sizeDelta = new pc.Vec2( i1975[6], i1975[7] )
  i1974.anchoredPosition3D = new pc.Vec3( i1975[8], i1975[9], i1975[10] )
  i1974.rotation = new pc.Quat(i1975[11], i1975[12], i1975[13], i1975[14])
  i1974.scale = new pc.Vec3( i1975[15], i1975[16], i1975[17] )
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1977 = data
  i1976.planeDistance = i1977[0]
  i1976.referencePixelsPerUnit = i1977[1]
  i1976.isFallbackOverlay = !!i1977[2]
  i1976.renderMode = i1977[3]
  i1976.renderOrder = i1977[4]
  i1976.sortingLayerName = i1977[5]
  i1976.sortingOrder = i1977[6]
  i1976.scaleFactor = i1977[7]
  request.r(i1977[8], i1977[9], 0, i1976, 'worldCamera')
  i1976.overrideSorting = !!i1977[10]
  i1976.pixelPerfect = !!i1977[11]
  i1976.targetDisplay = i1977[12]
  i1976.overridePixelPerfect = !!i1977[13]
  i1976.enabled = !!i1977[14]
  return i1976
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1979 = data
  i1978.m_UiScaleMode = i1979[0]
  i1978.m_ReferencePixelsPerUnit = i1979[1]
  i1978.m_ScaleFactor = i1979[2]
  i1978.m_ReferenceResolution = new pc.Vec2( i1979[3], i1979[4] )
  i1978.m_ScreenMatchMode = i1979[5]
  i1978.m_MatchWidthOrHeight = i1979[6]
  i1978.m_PhysicalUnit = i1979[7]
  i1978.m_FallbackScreenDPI = i1979[8]
  i1978.m_DefaultSpriteDPI = i1979[9]
  i1978.m_DynamicPixelsPerUnit = i1979[10]
  i1978.m_PresetInfoIsWorld = !!i1979[11]
  return i1978
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1981 = data
  i1980.m_IgnoreReversedGraphics = !!i1981[0]
  i1980.m_BlockingObjects = i1981[1]
  i1980.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1981[2] )
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1983 = data
  i1982.cullTransparentMesh = !!i1983[0]
  return i1982
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1985 = data
  i1984.m_AspectMode = i1985[0]
  i1984.m_AspectRatio = i1985[1]
  return i1984
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'm_Texture')
  i1986.m_UVRect = UnityEngine.Rect.MinMaxRect(i1987[2], i1987[3], i1987[4], i1987[5])
  request.r(i1987[6], i1987[7], 0, i1986, 'm_Material')
  i1986.m_Maskable = !!i1987[8]
  i1986.m_Color = new pc.Color(i1987[9], i1987[10], i1987[11], i1987[12])
  i1986.m_RaycastTarget = !!i1987[13]
  i1986.m_RaycastPadding = new pc.Vec4( i1987[14], i1987[15], i1987[16], i1987[17] )
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1989 = data
  i1988.color = new pc.Color(i1989[0], i1989[1], i1989[2], i1989[3])
  request.r(i1989[4], i1989[5], 0, i1988, 'sprite')
  i1988.flipX = !!i1989[6]
  i1988.flipY = !!i1989[7]
  i1988.drawMode = i1989[8]
  i1988.size = new pc.Vec2( i1989[9], i1989[10] )
  i1988.tileMode = i1989[11]
  i1988.adaptiveModeThreshold = i1989[12]
  i1988.maskInteraction = i1989[13]
  i1988.spriteSortPoint = i1989[14]
  i1988.enabled = !!i1989[15]
  request.r(i1989[16], i1989[17], 0, i1988, 'sharedMaterial')
  var i1991 = i1989[18]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 2, i1990, '')
  }
  i1988.sharedMaterials = i1990
  i1988.receiveShadows = !!i1989[19]
  i1988.shadowCastingMode = i1989[20]
  i1988.sortingLayerID = i1989[21]
  i1988.sortingOrder = i1989[22]
  i1988.lightmapIndex = i1989[23]
  i1988.lightmapSceneIndex = i1989[24]
  i1988.lightmapScaleOffset = new pc.Vec4( i1989[25], i1989[26], i1989[27], i1989[28] )
  i1988.lightProbeUsage = i1989[29]
  i1988.reflectionProbeUsage = i1989[30]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1993 = data
  i1992.usedByComposite = !!i1993[0]
  i1992.autoTiling = !!i1993[1]
  i1992.size = new pc.Vec2( i1993[2], i1993[3] )
  i1992.edgeRadius = i1993[4]
  i1992.enabled = !!i1993[5]
  i1992.isTrigger = !!i1993[6]
  i1992.usedByEffector = !!i1993[7]
  i1992.density = i1993[8]
  i1992.offset = new pc.Vec2( i1993[9], i1993[10] )
  request.r(i1993[11], i1993[12], 0, i1992, 'material')
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1995 = data
  i1994.sortingLayerIndex = i1995[0]
  i1994.sortingOrder = i1995[1]
  i1994.sortingLayerName = i1995[2]
  i1994.enabled = !!i1995[3]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1997 = data
  i1996.bodyType = i1997[0]
  request.r(i1997[1], i1997[2], 0, i1996, 'material')
  i1996.simulated = !!i1997[3]
  i1996.useAutoMass = !!i1997[4]
  i1996.mass = i1997[5]
  i1996.drag = i1997[6]
  i1996.angularDrag = i1997[7]
  i1996.gravityScale = i1997[8]
  i1996.collisionDetectionMode = i1997[9]
  i1996.sleepMode = i1997[10]
  i1996.constraints = i1997[11]
  return i1996
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1998 = root || request.c( 'MonsterController' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'joint')
  request.r(i1999[2], i1999[3], 0, i1998, 'rb')
  request.r(i1999[4], i1999[5], 0, i1998, 'deadSFX')
  i1998.force = new pc.Vec2( i1999[6], i1999[7] )
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2001 = data
  i2000.useLimits = !!i2001[0]
  i2000.limits = request.d('UnityEngine.JointAngleLimits2D', i2001[1], i2000.limits)
  i2000.useMotor = !!i2001[2]
  i2000.motor = request.d('UnityEngine.JointMotor2D', i2001[3], i2000.motor)
  i2000.anchor = new pc.Vec2( i2001[4], i2001[5] )
  i2000.connectedAnchor = new pc.Vec2( i2001[6], i2001[7] )
  i2000.autoConfigureConnectedAnchor = !!i2001[8]
  request.r(i2001[9], i2001[10], 0, i2000, 'connectedBody')
  i2000.breakForce = i2001[11]
  i2000.breakTorque = i2001[12]
  i2000.enableCollision = !!i2001[13]
  i2000.enabled = !!i2001[14]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i2003 = data
  i2002.autoConfigureTarget = !!i2003[0]
  i2002.target = new pc.Vec2( i2003[1], i2003[2] )
  i2002.anchor = new pc.Vec2( i2003[3], i2003[4] )
  i2002.maxForce = i2003[5]
  i2002.dampingRatio = i2003[6]
  i2002.frequency = i2003[7]
  request.r(i2003[8], i2003[9], 0, i2002, 'connectedBody')
  i2002.breakForce = i2003[10]
  i2002.breakTorque = i2003[11]
  i2002.enableCollision = !!i2003[12]
  i2002.enabled = !!i2003[13]
  return i2002
}

Deserializers["BonkController"] = function (request, data, root) {
  var i2004 = root || request.c( 'BonkController' )
  var i2005 = data
  i2004.target = i2005[0]
  i2004.maxBonk = i2005[1]
  request.r(i2005[2], i2005[3], 0, i2004, 'hitSound')
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2007 = data
  i2006.radius = i2007[0]
  i2006.enabled = !!i2007[1]
  i2006.isTrigger = !!i2007[2]
  i2006.usedByEffector = !!i2007[3]
  i2006.density = i2007[4]
  i2006.offset = new pc.Vec2( i2007[5], i2007[6] )
  request.r(i2007[7], i2007[8], 0, i2006, 'material')
  return i2006
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.UI.Button' )
  var i2009 = data
  i2008.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2009[0], i2008.m_OnClick)
  i2008.m_Navigation = request.d('UnityEngine.UI.Navigation', i2009[1], i2008.m_Navigation)
  i2008.m_Transition = i2009[2]
  i2008.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2009[3], i2008.m_Colors)
  i2008.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2009[4], i2008.m_SpriteState)
  i2008.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2009[5], i2008.m_AnimationTriggers)
  i2008.m_Interactable = !!i2009[6]
  request.r(i2009[7], i2009[8], 0, i2008, 'm_TargetGraphic')
  return i2008
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2011 = data
  i2010.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2011[0], i2010.m_PersistentCalls)
  return i2010
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.add(request.d('UnityEngine.Events.PersistentCall', i2015[i + 0]));
  }
  i2012.m_Calls = i2014
  return i2012
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'm_Target')
  i2018.m_TargetAssemblyTypeName = i2019[2]
  i2018.m_MethodName = i2019[3]
  i2018.m_Mode = i2019[4]
  i2018.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2019[5], i2018.m_Arguments)
  i2018.m_CallState = i2019[6]
  return i2018
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2021 = data
  i2020.m_Mode = i2021[0]
  i2020.m_WrapAround = !!i2021[1]
  request.r(i2021[2], i2021[3], 0, i2020, 'm_SelectOnUp')
  request.r(i2021[4], i2021[5], 0, i2020, 'm_SelectOnDown')
  request.r(i2021[6], i2021[7], 0, i2020, 'm_SelectOnLeft')
  request.r(i2021[8], i2021[9], 0, i2020, 'm_SelectOnRight')
  return i2020
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2023 = data
  i2022.m_NormalColor = new pc.Color(i2023[0], i2023[1], i2023[2], i2023[3])
  i2022.m_HighlightedColor = new pc.Color(i2023[4], i2023[5], i2023[6], i2023[7])
  i2022.m_PressedColor = new pc.Color(i2023[8], i2023[9], i2023[10], i2023[11])
  i2022.m_SelectedColor = new pc.Color(i2023[12], i2023[13], i2023[14], i2023[15])
  i2022.m_DisabledColor = new pc.Color(i2023[16], i2023[17], i2023[18], i2023[19])
  i2022.m_ColorMultiplier = i2023[20]
  i2022.m_FadeDuration = i2023[21]
  return i2022
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'm_HighlightedSprite')
  request.r(i2025[2], i2025[3], 0, i2024, 'm_PressedSprite')
  request.r(i2025[4], i2025[5], 0, i2024, 'm_SelectedSprite')
  request.r(i2025[6], i2025[7], 0, i2024, 'm_DisabledSprite')
  return i2024
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2027 = data
  i2026.m_NormalTrigger = i2027[0]
  i2026.m_HighlightedTrigger = i2027[1]
  i2026.m_PressedTrigger = i2027[2]
  i2026.m_SelectedTrigger = i2027[3]
  i2026.m_DisabledTrigger = i2027[4]
  return i2026
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.UI.Image' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'm_Sprite')
  i2028.m_Type = i2029[2]
  i2028.m_PreserveAspect = !!i2029[3]
  i2028.m_FillCenter = !!i2029[4]
  i2028.m_FillMethod = i2029[5]
  i2028.m_FillAmount = i2029[6]
  i2028.m_FillClockwise = !!i2029[7]
  i2028.m_FillOrigin = i2029[8]
  i2028.m_UseSpriteMesh = !!i2029[9]
  i2028.m_PixelsPerUnitMultiplier = i2029[10]
  request.r(i2029[11], i2029[12], 0, i2028, 'm_Material')
  i2028.m_Maskable = !!i2029[13]
  i2028.m_Color = new pc.Color(i2029[14], i2029[15], i2029[16], i2029[17])
  i2028.m_RaycastTarget = !!i2029[18]
  i2028.m_RaycastPadding = new pc.Vec4( i2029[19], i2029[20], i2029[21], i2029[22] )
  return i2028
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2030 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2031 = data
  i2030.targetIsSelf = !!i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, 'targetGO')
  i2030.tweenTargetIsTargetGO = !!i2031[3]
  i2030.delay = i2031[4]
  i2030.duration = i2031[5]
  i2030.easeType = i2031[6]
  i2030.easeCurve = new pc.AnimationCurve( { keys_flow: i2031[7] } )
  i2030.loopType = i2031[8]
  i2030.loops = i2031[9]
  i2030.id = i2031[10]
  i2030.isRelative = !!i2031[11]
  i2030.isFrom = !!i2031[12]
  i2030.isIndependentUpdate = !!i2031[13]
  i2030.autoKill = !!i2031[14]
  i2030.autoGenerate = !!i2031[15]
  i2030.isActive = !!i2031[16]
  i2030.isValid = !!i2031[17]
  request.r(i2031[18], i2031[19], 0, i2030, 'target')
  i2030.animationType = i2031[20]
  i2030.targetType = i2031[21]
  i2030.forcedTargetType = i2031[22]
  i2030.autoPlay = !!i2031[23]
  i2030.useTargetAsV3 = !!i2031[24]
  i2030.endValueFloat = i2031[25]
  i2030.endValueV3 = new pc.Vec3( i2031[26], i2031[27], i2031[28] )
  i2030.endValueV2 = new pc.Vec2( i2031[29], i2031[30] )
  i2030.endValueColor = new pc.Color(i2031[31], i2031[32], i2031[33], i2031[34])
  i2030.endValueString = i2031[35]
  i2030.endValueRect = UnityEngine.Rect.MinMaxRect(i2031[36], i2031[37], i2031[38], i2031[39])
  request.r(i2031[40], i2031[41], 0, i2030, 'endValueTransform')
  i2030.optionalBool0 = !!i2031[42]
  i2030.optionalBool1 = !!i2031[43]
  i2030.optionalFloat0 = i2031[44]
  i2030.optionalInt0 = i2031[45]
  i2030.optionalRotationMode = i2031[46]
  i2030.optionalScrambleMode = i2031[47]
  i2030.optionalShakeRandomnessMode = i2031[48]
  i2030.optionalString = i2031[49]
  i2030.updateType = i2031[50]
  i2030.isSpeedBased = !!i2031[51]
  i2030.hasOnStart = !!i2031[52]
  i2030.hasOnPlay = !!i2031[53]
  i2030.hasOnUpdate = !!i2031[54]
  i2030.hasOnStepComplete = !!i2031[55]
  i2030.hasOnComplete = !!i2031[56]
  i2030.hasOnTweenCreated = !!i2031[57]
  i2030.hasOnRewind = !!i2031[58]
  i2030.onStart = request.d('UnityEngine.Events.UnityEvent', i2031[59], i2030.onStart)
  i2030.onPlay = request.d('UnityEngine.Events.UnityEvent', i2031[60], i2030.onPlay)
  i2030.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2031[61], i2030.onUpdate)
  i2030.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2031[62], i2030.onStepComplete)
  i2030.onComplete = request.d('UnityEngine.Events.UnityEvent', i2031[63], i2030.onComplete)
  i2030.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2031[64], i2030.onTweenCreated)
  i2030.onRewind = request.d('UnityEngine.Events.UnityEvent', i2031[65], i2030.onRewind)
  return i2030
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2033 = data
  i2032.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2033[0], i2032.m_PersistentCalls)
  return i2032
}

Deserializers["GameController"] = function (request, data, root) {
  var i2034 = root || request.c( 'GameController' )
  var i2035 = data
  var i2037 = i2035[0]
  var i2036 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i2037.length; i += 2) {
  request.r(i2037[i + 0], i2037[i + 1], 1, i2036, '')
  }
  i2034.monsters = i2036
  var i2039 = i2035[1]
  var i2038 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2039.length; i += 3) {
    i2038.add(new pc.Vec3( i2039[i + 0], i2039[i + 1], i2039[i + 2] ));
  }
  i2034.cameraPos = i2038
  i2034.speedMove = i2035[2]
  request.r(i2035[3], i2035[4], 0, i2034, 'target')
  i2034.index = i2035[5]
  i2034.end = !!i2035[6]
  request.r(i2035[7], i2035[8], 0, i2034, 'mainCamera')
  request.r(i2035[9], i2035[10], 0, i2034, 'endUI')
  return i2034
}

Deserializers["TargetController"] = function (request, data, root) {
  var i2044 = root || request.c( 'TargetController' )
  var i2045 = data
  var i2047 = i2045[0]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 1, i2046, '')
  }
  i2044.listTarget = i2046
  request.r(i2045[1], i2045[2], 0, i2044, 'currentTarget')
  i2044.index = i2045[3]
  request.r(i2045[4], i2045[5], 0, i2044, 'tut')
  return i2044
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2050 = root || request.c( 'LunaController' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'BGTexture')
  i2050.UseTime = !!i2051[2]
  i2050.TimePlay = i2051[3]
  request.r(i2051[4], i2051[5], 0, i2050, 'BGImage')
  var i2053 = i2051[6]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 1, i2052, '')
  }
  i2050.CTA = i2052
  return i2050
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2056 = root || request.c( 'AudioController' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'BGM')
  request.r(i2057[2], i2057[3], 0, i2056, 'musicSource')
  request.r(i2057[4], i2057[5], 0, i2056, 'pool')
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2059 = data
  request.r(i2059[0], i2059[1], 0, i2058, 'clip')
  request.r(i2059[2], i2059[3], 0, i2058, 'outputAudioMixerGroup')
  i2058.playOnAwake = !!i2059[4]
  i2058.loop = !!i2059[5]
  i2058.time = i2059[6]
  i2058.volume = i2059[7]
  i2058.pitch = i2059[8]
  i2058.enabled = !!i2059[9]
  return i2058
}

Deserializers["VFXController"] = function (request, data, root) {
  var i2060 = root || request.c( 'VFXController' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'bloodPrefab')
  request.r(i2061[2], i2061[3], 0, i2060, 'pool')
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2063 = data
  i2062.ambientIntensity = i2063[0]
  i2062.reflectionIntensity = i2063[1]
  i2062.ambientMode = i2063[2]
  i2062.ambientLight = new pc.Color(i2063[3], i2063[4], i2063[5], i2063[6])
  i2062.ambientSkyColor = new pc.Color(i2063[7], i2063[8], i2063[9], i2063[10])
  i2062.ambientGroundColor = new pc.Color(i2063[11], i2063[12], i2063[13], i2063[14])
  i2062.ambientEquatorColor = new pc.Color(i2063[15], i2063[16], i2063[17], i2063[18])
  i2062.fogColor = new pc.Color(i2063[19], i2063[20], i2063[21], i2063[22])
  i2062.fogEndDistance = i2063[23]
  i2062.fogStartDistance = i2063[24]
  i2062.fogDensity = i2063[25]
  i2062.fog = !!i2063[26]
  request.r(i2063[27], i2063[28], 0, i2062, 'skybox')
  i2062.fogMode = i2063[29]
  var i2065 = i2063[30]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2065[i + 0]) );
  }
  i2062.lightmaps = i2064
  i2062.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2063[31], i2062.lightProbes)
  i2062.lightmapsMode = i2063[32]
  i2062.mixedBakeMode = i2063[33]
  i2062.environmentLightingMode = i2063[34]
  i2062.ambientProbe = new pc.SphericalHarmonicsL2(i2063[35])
  request.r(i2063[36], i2063[37], 0, i2062, 'customReflection')
  request.r(i2063[38], i2063[39], 0, i2062, 'defaultReflection')
  i2062.defaultReflectionMode = i2063[40]
  i2062.defaultReflectionResolution = i2063[41]
  i2062.sunLightObjectId = i2063[42]
  i2062.pixelLightCount = i2063[43]
  i2062.defaultReflectionHDR = !!i2063[44]
  i2062.hasLightDataAsset = !!i2063[45]
  i2062.hasManualGenerate = !!i2063[46]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'lightmapColor')
  request.r(i2069[2], i2069[3], 0, i2068, 'lightmapDirection')
  request.r(i2069[4], i2069[5], 0, i2068, 'shadowMask')
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2070 = root || new UnityEngine.LightProbes()
  var i2071 = data
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2081[i + 0]));
  }
  i2078.ShaderCompilationErrors = i2080
  i2078.name = i2079[1]
  i2078.guid = i2079[2]
  var i2083 = i2079[3]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2078.shaderDefinedKeywords = i2082
  var i2085 = i2079[4]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2085[i + 0]) );
  }
  i2078.passes = i2084
  var i2087 = i2079[5]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2087[i + 0]) );
  }
  i2078.usePasses = i2086
  var i2089 = i2079[6]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2089[i + 0]) );
  }
  i2078.defaultParameterValues = i2088
  request.r(i2079[7], i2079[8], 0, i2078, 'unityFallbackShader')
  i2078.readDepth = !!i2079[9]
  i2078.hasDepthOnlyPass = !!i2079[10]
  i2078.isCreatedByShaderGraph = !!i2079[11]
  i2078.disableBatching = !!i2079[12]
  i2078.compiled = !!i2079[13]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2093 = data
  i2092.shaderName = i2093[0]
  i2092.errorMessage = i2093[1]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2098 = root || new pc.UnityShaderPass()
  var i2099 = data
  i2098.id = i2099[0]
  i2098.subShaderIndex = i2099[1]
  i2098.name = i2099[2]
  i2098.passType = i2099[3]
  i2098.grabPassTextureName = i2099[4]
  i2098.usePass = !!i2099[5]
  i2098.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[6], i2098.zTest)
  i2098.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[7], i2098.zWrite)
  i2098.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[8], i2098.culling)
  i2098.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2099[9], i2098.blending)
  i2098.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2099[10], i2098.alphaBlending)
  i2098.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[11], i2098.colorWriteMask)
  i2098.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[12], i2098.offsetUnits)
  i2098.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[13], i2098.offsetFactor)
  i2098.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[14], i2098.stencilRef)
  i2098.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[15], i2098.stencilReadMask)
  i2098.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2099[16], i2098.stencilWriteMask)
  i2098.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2099[17], i2098.stencilOp)
  i2098.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2099[18], i2098.stencilOpFront)
  i2098.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2099[19], i2098.stencilOpBack)
  var i2101 = i2099[20]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2101[i + 0]) );
  }
  i2098.tags = i2100
  var i2103 = i2099[21]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2098.passDefinedKeywords = i2102
  var i2105 = i2099[22]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2105[i + 0]) );
  }
  i2098.passDefinedKeywordGroups = i2104
  var i2107 = i2099[23]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2107[i + 0]) );
  }
  i2098.variants = i2106
  var i2109 = i2099[24]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2109[i + 0]) );
  }
  i2098.excludedVariants = i2108
  i2098.hasDepthReader = !!i2099[25]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2111 = data
  i2110.val = i2111[0]
  i2110.name = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2113 = data
  i2112.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[0], i2112.src)
  i2112.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[1], i2112.dst)
  i2112.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2113[2], i2112.op)
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2115 = data
  i2114.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[0], i2114.pass)
  i2114.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[1], i2114.fail)
  i2114.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[2], i2114.zFail)
  i2114.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[3], i2114.comp)
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.value = i2119[1]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( i2125[i + 0] );
  }
  i2122.keywords = i2124
  i2122.hasDiscard = !!i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2129 = data
  i2128.passId = i2129[0]
  i2128.subShaderIndex = i2129[1]
  var i2131 = i2129[2]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2128.keywords = i2130
  i2128.vertexProgram = i2129[3]
  i2128.fragmentProgram = i2129[4]
  i2128.exportedForWebGl2 = !!i2129[5]
  i2128.readDepth = !!i2129[6]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'shader')
  i2134.pass = i2135[2]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.type = i2139[1]
  i2138.value = new pc.Vec4( i2139[2], i2139[3], i2139[4], i2139[5] )
  i2138.textureValue = i2139[6]
  i2138.shaderPropertyFlag = i2139[7]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2141 = data
  i2140.name = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'texture')
  i2140.aabb = i2141[3]
  i2140.vertices = i2141[4]
  i2140.triangles = i2141[5]
  i2140.textureRect = UnityEngine.Rect.MinMaxRect(i2141[6], i2141[7], i2141[8], i2141[9])
  i2140.packedRect = UnityEngine.Rect.MinMaxRect(i2141[10], i2141[11], i2141[12], i2141[13])
  i2140.border = new pc.Vec4( i2141[14], i2141[15], i2141[16], i2141[17] )
  i2140.transparency = i2141[18]
  i2140.bounds = i2141[19]
  i2140.pixelsPerUnit = i2141[20]
  i2140.textureWidth = i2141[21]
  i2140.textureHeight = i2141[22]
  i2140.nativeSize = new pc.Vec2( i2141[23], i2141[24] )
  i2140.pivot = new pc.Vec2( i2141[25], i2141[26] )
  i2140.textureRectOffset = new pc.Vec2( i2141[27], i2141[28] )
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2143 = data
  i2142.name = i2143[0]
  return i2142
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2144 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2145 = data
  i2144.useSafeMode = !!i2145[0]
  i2144.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2145[1], i2144.safeModeOptions)
  i2144.timeScale = i2145[2]
  i2144.unscaledTimeScale = i2145[3]
  i2144.useSmoothDeltaTime = !!i2145[4]
  i2144.maxSmoothUnscaledTime = i2145[5]
  i2144.rewindCallbackMode = i2145[6]
  i2144.showUnityEditorReport = !!i2145[7]
  i2144.logBehaviour = i2145[8]
  i2144.drawGizmos = !!i2145[9]
  i2144.defaultRecyclable = !!i2145[10]
  i2144.defaultAutoPlay = i2145[11]
  i2144.defaultUpdateType = i2145[12]
  i2144.defaultTimeScaleIndependent = !!i2145[13]
  i2144.defaultEaseType = i2145[14]
  i2144.defaultEaseOvershootOrAmplitude = i2145[15]
  i2144.defaultEasePeriod = i2145[16]
  i2144.defaultAutoKill = !!i2145[17]
  i2144.defaultLoopType = i2145[18]
  i2144.debugMode = !!i2145[19]
  i2144.debugStoreTargetId = !!i2145[20]
  i2144.showPreviewPanel = !!i2145[21]
  i2144.storeSettingsLocation = i2145[22]
  i2144.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2145[23], i2144.modules)
  i2144.createASMDEF = !!i2145[24]
  i2144.showPlayingTweens = !!i2145[25]
  i2144.showPausedTweens = !!i2145[26]
  return i2144
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2146 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2147 = data
  i2146.logBehaviour = i2147[0]
  i2146.nestedTweenFailureBehaviour = i2147[1]
  return i2146
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2148 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2149 = data
  i2148.showPanel = !!i2149[0]
  i2148.audioEnabled = !!i2149[1]
  i2148.physicsEnabled = !!i2149[2]
  i2148.physics2DEnabled = !!i2149[3]
  i2148.spriteEnabled = !!i2149[4]
  i2148.uiEnabled = !!i2149[5]
  i2148.textMeshProEnabled = !!i2149[6]
  i2148.tk2DEnabled = !!i2149[7]
  i2148.deAudioEnabled = !!i2149[8]
  i2148.deUnityExtendedEnabled = !!i2149[9]
  i2148.epoOutlineEnabled = !!i2149[10]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2153[i + 0]) );
  }
  i2150.files = i2152
  i2150.componentToPrefabIds = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2157 = data
  i2156.path = i2157[0]
  request.r(i2157[1], i2157[2], 0, i2156, 'unityObject')
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2159 = data
  var i2161 = i2159[0]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2161[i + 0]) );
  }
  i2158.scriptsExecutionOrder = i2160
  var i2163 = i2159[1]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2163[i + 0]) );
  }
  i2158.sortingLayers = i2162
  var i2165 = i2159[2]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2165[i + 0]) );
  }
  i2158.cullingLayers = i2164
  i2158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2159[3], i2158.timeSettings)
  i2158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2159[4], i2158.physicsSettings)
  i2158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2159[5], i2158.physics2DSettings)
  i2158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2159[6], i2158.qualitySettings)
  i2158.enableRealtimeShadows = !!i2159[7]
  i2158.enableAutoInstancing = !!i2159[8]
  i2158.enableStaticBatching = !!i2159[9]
  i2158.enableDynamicBatching = !!i2159[10]
  i2158.usePreservativeDynamicBatching = !!i2159[11]
  i2158.lightmapEncodingQuality = i2159[12]
  i2158.desiredColorSpace = i2159[13]
  var i2167 = i2159[14]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( i2167[i + 0] );
  }
  i2158.allTags = i2166
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.value = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2175 = data
  i2174.id = i2175[0]
  i2174.name = i2175[1]
  i2174.value = i2175[2]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2179 = data
  i2178.id = i2179[0]
  i2178.name = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2181 = data
  i2180.fixedDeltaTime = i2181[0]
  i2180.maximumDeltaTime = i2181[1]
  i2180.timeScale = i2181[2]
  i2180.maximumParticleTimestep = i2181[3]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2183 = data
  i2182.gravity = new pc.Vec3( i2183[0], i2183[1], i2183[2] )
  i2182.defaultSolverIterations = i2183[3]
  i2182.bounceThreshold = i2183[4]
  i2182.autoSyncTransforms = !!i2183[5]
  i2182.autoSimulation = !!i2183[6]
  var i2185 = i2183[7]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2185[i + 0]) );
  }
  i2182.collisionMatrix = i2184
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.layerId = i2189[1]
  i2188.otherLayerId = i2189[2]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'material')
  i2190.gravity = new pc.Vec2( i2191[2], i2191[3] )
  i2190.positionIterations = i2191[4]
  i2190.velocityIterations = i2191[5]
  i2190.velocityThreshold = i2191[6]
  i2190.maxLinearCorrection = i2191[7]
  i2190.maxAngularCorrection = i2191[8]
  i2190.maxTranslationSpeed = i2191[9]
  i2190.maxRotationSpeed = i2191[10]
  i2190.baumgarteScale = i2191[11]
  i2190.baumgarteTOIScale = i2191[12]
  i2190.timeToSleep = i2191[13]
  i2190.linearSleepTolerance = i2191[14]
  i2190.angularSleepTolerance = i2191[15]
  i2190.defaultContactOffset = i2191[16]
  i2190.autoSimulation = !!i2191[17]
  i2190.queriesHitTriggers = !!i2191[18]
  i2190.queriesStartInColliders = !!i2191[19]
  i2190.callbacksOnDisable = !!i2191[20]
  i2190.reuseCollisionCallbacks = !!i2191[21]
  i2190.autoSyncTransforms = !!i2191[22]
  var i2193 = i2191[23]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2193[i + 0]) );
  }
  i2190.collisionMatrix = i2192
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.layerId = i2197[1]
  i2196.otherLayerId = i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2201[i + 0]) );
  }
  i2198.qualityLevels = i2200
  var i2203 = i2199[1]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2198.names = i2202
  i2198.shadows = i2199[2]
  i2198.anisotropicFiltering = i2199[3]
  i2198.antiAliasing = i2199[4]
  i2198.lodBias = i2199[5]
  i2198.shadowCascades = i2199[6]
  i2198.shadowDistance = i2199[7]
  i2198.shadowmaskMode = i2199[8]
  i2198.shadowProjection = i2199[9]
  i2198.shadowResolution = i2199[10]
  i2198.softParticles = !!i2199[11]
  i2198.softVegetation = !!i2199[12]
  i2198.activeColorSpace = i2199[13]
  i2198.desiredColorSpace = i2199[14]
  i2198.masterTextureLimit = i2199[15]
  i2198.maxQueuedFrames = i2199[16]
  i2198.particleRaycastBudget = i2199[17]
  i2198.pixelLightCount = i2199[18]
  i2198.realtimeReflectionProbes = !!i2199[19]
  i2198.shadowCascade2Split = i2199[20]
  i2198.shadowCascade4Split = new pc.Vec3( i2199[21], i2199[22], i2199[23] )
  i2198.streamingMipmapsActive = !!i2199[24]
  i2198.vSyncCount = i2199[25]
  i2198.asyncUploadBufferSize = i2199[26]
  i2198.asyncUploadTimeSlice = i2199[27]
  i2198.billboardsFaceCameraPosition = !!i2199[28]
  i2198.shadowNearPlaneOffset = i2199[29]
  i2198.streamingMipmapsMemoryBudget = i2199[30]
  i2198.maximumLODLevel = i2199[31]
  i2198.streamingMipmapsAddAllCameras = !!i2199[32]
  i2198.streamingMipmapsMaxLevelReduction = i2199[33]
  i2198.streamingMipmapsRenderersPerFrame = i2199[34]
  i2198.resolutionScalingFixedDPIFactor = i2199[35]
  i2198.streamingMipmapsMaxFileIORequests = i2199[36]
  i2198.currentQualityLevel = i2199[37]
  return i2198
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'm_ObjectArgument')
  i2206.m_ObjectArgumentAssemblyTypeName = i2207[2]
  i2206.m_IntArgument = i2207[3]
  i2206.m_FloatArgument = i2207[4]
  i2206.m_StringArgument = i2207[5]
  i2206.m_BoolArgument = !!i2207[6]
  return i2206
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[5],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"26":[21],"64":[21],"65":[21],"24":[21],"66":[21],"67":[21],"68":[21],"69":[5],"70":[71],"72":[73],"74":[73],"11":[10],"75":[17],"76":[5],"77":[78],"79":[10],"80":[14,10],"81":[71],"82":[14,10],"83":[10],"84":[10],"85":[71,10],"86":[10,14],"87":[88],"89":[88],"90":[88],"91":[10],"92":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"93":[10],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"16":[14,10],"102":[10],"103":[10],"104":[10],"105":[10],"106":[14,10],"107":[10],"108":[8],"109":[8],"9":[8],"110":[8],"111":[5],"112":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/23/2026 09:03:27";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "CPGS_V01_NgocBTU_TamNTM";

Deserializers.lunaAppID = "42741";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1800";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4163";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "454bb077-c193-4ae6-ad49-442672d4351b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

