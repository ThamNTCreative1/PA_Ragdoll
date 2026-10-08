var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointSpring' )
  var i2141 = data
  i2140.spring = i2141[0]
  i2140.damper = i2141[1]
  i2140.targetPosition = i2141[2]
  return i2140
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointMotor' )
  var i2143 = data
  i2142.m_TargetVelocity = i2143[0]
  i2142.m_Force = i2143[1]
  i2142.m_FreeSpin = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointLimits' )
  var i2145 = data
  i2144.m_Min = i2145[0]
  i2144.m_Max = i2145[1]
  i2144.m_Bounciness = i2145[2]
  i2144.m_BounceMinVelocity = i2145[3]
  i2144.m_ContactDistance = i2145[4]
  i2144.minBounce = i2145[5]
  i2144.maxBounce = i2145[6]
  return i2144
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.JointDrive' )
  var i2147 = data
  i2146.m_PositionSpring = i2147[0]
  i2146.m_PositionDamper = i2147[1]
  i2146.m_MaximumForce = i2147[2]
  i2146.m_UseAcceleration = i2147[3]
  return i2146
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2149 = data
  i2148.m_Spring = i2149[0]
  i2148.m_Damper = i2149[1]
  return i2148
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2151 = data
  i2150.m_Limit = i2151[0]
  i2150.m_Bounciness = i2151[1]
  i2150.m_ContactDistance = i2151[2]
  return i2150
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2153 = data
  i2152.m_ExtremumSlip = i2153[0]
  i2152.m_ExtremumValue = i2153[1]
  i2152.m_AsymptoteSlip = i2153[2]
  i2152.m_AsymptoteValue = i2153[3]
  i2152.m_Stiffness = i2153[4]
  return i2152
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2155 = data
  i2154.m_LowerAngle = i2155[0]
  i2154.m_UpperAngle = i2155[1]
  return i2154
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2157 = data
  i2156.m_MotorSpeed = i2157[0]
  i2156.m_MaximumMotorTorque = i2157[1]
  return i2156
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2159 = data
  i2158.m_DampingRatio = i2159[0]
  i2158.m_Frequency = i2159[1]
  i2158.m_Angle = i2159[2]
  return i2158
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2161 = data
  i2160.m_LowerTranslation = i2161[0]
  i2160.m_UpperTranslation = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.width = i2163[1]
  i2162.height = i2163[2]
  i2162.mipmapCount = i2163[3]
  i2162.anisoLevel = i2163[4]
  i2162.filterMode = i2163[5]
  i2162.hdr = !!i2163[6]
  i2162.format = i2163[7]
  i2162.wrapMode = i2163[8]
  i2162.alphaIsTransparency = !!i2163[9]
  i2162.alphaSource = i2163[10]
  i2162.graphicsFormat = i2163[11]
  i2162.sRGBTexture = !!i2163[12]
  i2162.desiredColorSpace = i2163[13]
  i2162.wrapU = i2163[14]
  i2162.wrapV = i2163[15]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2164 = root || new pc.UnityMaterial()
  var i2165 = data
  i2164.name = i2165[0]
  request.r(i2165[1], i2165[2], 0, i2164, 'shader')
  i2164.renderQueue = i2165[3]
  i2164.enableInstancing = !!i2165[4]
  var i2167 = i2165[5]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2167[i + 0]) );
  }
  i2164.floatParameters = i2166
  var i2169 = i2165[6]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2169[i + 0]) );
  }
  i2164.colorParameters = i2168
  var i2171 = i2165[7]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2171[i + 0]) );
  }
  i2164.vectorParameters = i2170
  var i2173 = i2165[8]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2173[i + 0]) );
  }
  i2164.textureParameters = i2172
  var i2175 = i2165[9]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2175[i + 0]) );
  }
  i2164.materialFlags = i2174
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.value = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.value = new pc.Color(i2183[1], i2183[2], i2183[3], i2183[4])
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2187 = data
  i2186.name = i2187[0]
  i2186.value = new pc.Vec4( i2187[1], i2187[2], i2187[3], i2187[4] )
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2191 = data
  i2190.name = i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'value')
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.enabled = !!i2195[1]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2197 = data
  i2196.position = new pc.Vec3( i2197[0], i2197[1], i2197[2] )
  i2196.scale = new pc.Vec3( i2197[3], i2197[4], i2197[5] )
  i2196.rotation = new pc.Quat(i2197[6], i2197[7], i2197[8], i2197[9])
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2199 = data
  i2198.color = new pc.Color(i2199[0], i2199[1], i2199[2], i2199[3])
  request.r(i2199[4], i2199[5], 0, i2198, 'sprite')
  i2198.flipX = !!i2199[6]
  i2198.flipY = !!i2199[7]
  i2198.drawMode = i2199[8]
  i2198.size = new pc.Vec2( i2199[9], i2199[10] )
  i2198.tileMode = i2199[11]
  i2198.adaptiveModeThreshold = i2199[12]
  i2198.maskInteraction = i2199[13]
  i2198.spriteSortPoint = i2199[14]
  i2198.enabled = !!i2199[15]
  request.r(i2199[16], i2199[17], 0, i2198, 'sharedMaterial')
  var i2201 = i2199[18]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2198.sharedMaterials = i2200
  i2198.receiveShadows = !!i2199[19]
  i2198.shadowCastingMode = i2199[20]
  i2198.sortingLayerID = i2199[21]
  i2198.sortingOrder = i2199[22]
  i2198.lightmapIndex = i2199[23]
  i2198.lightmapSceneIndex = i2199[24]
  i2198.lightmapScaleOffset = new pc.Vec4( i2199[25], i2199[26], i2199[27], i2199[28] )
  i2198.lightProbeUsage = i2199[29]
  i2198.reflectionProbeUsage = i2199[30]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2205 = data
  i2204.radius = i2205[0]
  i2204.enabled = !!i2205[1]
  i2204.isTrigger = !!i2205[2]
  i2204.usedByEffector = !!i2205[3]
  i2204.density = i2205[4]
  i2204.offset = new pc.Vec2( i2205[5], i2205[6] )
  request.r(i2205[7], i2205[8], 0, i2204, 'material')
  return i2204
}

Deserializers["BulletController"] = function (request, data, root) {
  var i2206 = root || request.c( 'BulletController' )
  var i2207 = data
  i2206.speed = i2207[0]
  i2206.damage = i2207[1]
  request.r(i2207[2], i2207[3], 0, i2206, 'hitMonsterSound')
  request.r(i2207[4], i2207[5], 0, i2206, 'hitSound')
  i2206.lifeTime = i2207[6]
  i2206.hit = !!i2207[7]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.tagId = i2209[1]
  i2208.enabled = !!i2209[2]
  i2208.isStatic = !!i2209[3]
  i2208.layer = i2209[4]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2211 = data
  i2210.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2211[0], i2210.main)
  i2210.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2211[1], i2210.colorBySpeed)
  i2210.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2211[2], i2210.colorOverLifetime)
  i2210.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2211[3], i2210.emission)
  i2210.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2211[4], i2210.rotationBySpeed)
  i2210.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2211[5], i2210.rotationOverLifetime)
  i2210.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2211[6], i2210.shape)
  i2210.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2211[7], i2210.sizeBySpeed)
  i2210.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2211[8], i2210.sizeOverLifetime)
  i2210.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2211[9], i2210.textureSheetAnimation)
  i2210.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2211[10], i2210.velocityOverLifetime)
  i2210.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2211[11], i2210.noise)
  i2210.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2211[12], i2210.inheritVelocity)
  i2210.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2211[13], i2210.forceOverLifetime)
  i2210.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2211[14], i2210.limitVelocityOverLifetime)
  i2210.useAutoRandomSeed = !!i2211[15]
  i2210.randomSeed = i2211[16]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemMain()
  var i2213 = data
  i2212.duration = i2213[0]
  i2212.loop = !!i2213[1]
  i2212.prewarm = !!i2213[2]
  i2212.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.startDelay)
  i2212.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[4], i2212.startLifetime)
  i2212.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[5], i2212.startSpeed)
  i2212.startSize3D = !!i2213[6]
  i2212.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[7], i2212.startSizeX)
  i2212.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[8], i2212.startSizeY)
  i2212.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[9], i2212.startSizeZ)
  i2212.startRotation3D = !!i2213[10]
  i2212.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[11], i2212.startRotationX)
  i2212.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[12], i2212.startRotationY)
  i2212.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[13], i2212.startRotationZ)
  i2212.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2213[14], i2212.startColor)
  i2212.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[15], i2212.gravityModifier)
  i2212.simulationSpace = i2213[16]
  request.r(i2213[17], i2213[18], 0, i2212, 'customSimulationSpace')
  i2212.simulationSpeed = i2213[19]
  i2212.useUnscaledTime = !!i2213[20]
  i2212.scalingMode = i2213[21]
  i2212.playOnAwake = !!i2213[22]
  i2212.maxParticles = i2213[23]
  i2212.emitterVelocityMode = i2213[24]
  i2212.stopAction = i2213[25]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2214 = root || new pc.MinMaxCurve()
  var i2215 = data
  i2214.mode = i2215[0]
  i2214.curveMin = new pc.AnimationCurve( { keys_flow: i2215[1] } )
  i2214.curveMax = new pc.AnimationCurve( { keys_flow: i2215[2] } )
  i2214.curveMultiplier = i2215[3]
  i2214.constantMin = i2215[4]
  i2214.constantMax = i2215[5]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2216 = root || new pc.MinMaxGradient()
  var i2217 = data
  i2216.mode = i2217[0]
  i2216.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2217[1], i2216.gradientMin)
  i2216.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2217[2], i2216.gradientMax)
  i2216.colorMin = new pc.Color(i2217[3], i2217[4], i2217[5], i2217[6])
  i2216.colorMax = new pc.Color(i2217[7], i2217[8], i2217[9], i2217[10])
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2219 = data
  i2218.mode = i2219[0]
  var i2221 = i2219[1]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2221[i + 0]) );
  }
  i2218.colorKeys = i2220
  var i2223 = i2219[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2223[i + 0]) );
  }
  i2218.alphaKeys = i2222
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemColorBySpeed()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2225[1], i2224.color)
  i2224.range = new pc.Vec2( i2225[2], i2225[3] )
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2229 = data
  i2228.color = new pc.Color(i2229[0], i2229[1], i2229[2], i2229[3])
  i2228.time = i2229[4]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2233 = data
  i2232.alpha = i2233[0]
  i2232.time = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemColorOverLifetime()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2235[1], i2234.color)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemEmitter()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[1], i2236.rateOverTime)
  i2236.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[2], i2236.rateOverDistance)
  var i2239 = i2237[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2239[i + 0]) );
  }
  i2236.bursts = i2238
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2242 = root || new pc.ParticleSystemBurst()
  var i2243 = data
  i2242.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[0], i2242.count)
  i2242.cycleCount = i2243[1]
  i2242.minCount = i2243[2]
  i2242.maxCount = i2243[3]
  i2242.repeatInterval = i2243[4]
  i2242.time = i2243[5]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemRotationBySpeed()
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[1], i2244.x)
  i2244.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[2], i2244.y)
  i2244.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[3], i2244.z)
  i2244.separateAxes = !!i2245[4]
  i2244.range = new pc.Vec2( i2245[5], i2245[6] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2246 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[1], i2246.x)
  i2246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[2], i2246.y)
  i2246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[3], i2246.z)
  i2246.separateAxes = !!i2247[4]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemShape()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.shapeType = i2249[1]
  i2248.randomDirectionAmount = i2249[2]
  i2248.sphericalDirectionAmount = i2249[3]
  i2248.randomPositionAmount = i2249[4]
  i2248.alignToDirection = !!i2249[5]
  i2248.radius = i2249[6]
  i2248.radiusMode = i2249[7]
  i2248.radiusSpread = i2249[8]
  i2248.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[9], i2248.radiusSpeed)
  i2248.radiusThickness = i2249[10]
  i2248.angle = i2249[11]
  i2248.length = i2249[12]
  i2248.boxThickness = new pc.Vec3( i2249[13], i2249[14], i2249[15] )
  i2248.meshShapeType = i2249[16]
  request.r(i2249[17], i2249[18], 0, i2248, 'mesh')
  request.r(i2249[19], i2249[20], 0, i2248, 'meshRenderer')
  request.r(i2249[21], i2249[22], 0, i2248, 'skinnedMeshRenderer')
  i2248.useMeshMaterialIndex = !!i2249[23]
  i2248.meshMaterialIndex = i2249[24]
  i2248.useMeshColors = !!i2249[25]
  i2248.normalOffset = i2249[26]
  i2248.arc = i2249[27]
  i2248.arcMode = i2249[28]
  i2248.arcSpread = i2249[29]
  i2248.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[30], i2248.arcSpeed)
  i2248.donutRadius = i2249[31]
  i2248.position = new pc.Vec3( i2249[32], i2249[33], i2249[34] )
  i2248.rotation = new pc.Vec3( i2249[35], i2249[36], i2249[37] )
  i2248.scale = new pc.Vec3( i2249[38], i2249[39], i2249[40] )
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemSizeBySpeed()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[1], i2250.x)
  i2250.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[2], i2250.y)
  i2250.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[3], i2250.z)
  i2250.separateAxes = !!i2251[4]
  i2250.range = new pc.Vec2( i2251[5], i2251[6] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[1], i2252.x)
  i2252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[2], i2252.y)
  i2252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.z)
  i2252.separateAxes = !!i2253[4]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.mode = i2255[1]
  i2254.animation = i2255[2]
  i2254.numTilesX = i2255[3]
  i2254.numTilesY = i2255[4]
  i2254.useRandomRow = !!i2255[5]
  i2254.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[6], i2254.frameOverTime)
  i2254.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[7], i2254.startFrame)
  i2254.cycleCount = i2255[8]
  i2254.rowIndex = i2255[9]
  i2254.flipU = i2255[10]
  i2254.flipV = i2255[11]
  i2254.spriteCount = i2255[12]
  var i2257 = i2255[13]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2254.sprites = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2260 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[1], i2260.x)
  i2260.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[2], i2260.y)
  i2260.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[3], i2260.z)
  i2260.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[4], i2260.radial)
  i2260.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[5], i2260.speedModifier)
  i2260.space = i2261[6]
  i2260.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[7], i2260.orbitalX)
  i2260.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[8], i2260.orbitalY)
  i2260.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[9], i2260.orbitalZ)
  i2260.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[10], i2260.orbitalOffsetX)
  i2260.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[11], i2260.orbitalOffsetY)
  i2260.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[12], i2260.orbitalOffsetZ)
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemNoise()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.separateAxes = !!i2263[1]
  i2262.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[2], i2262.strengthX)
  i2262.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[3], i2262.strengthY)
  i2262.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[4], i2262.strengthZ)
  i2262.frequency = i2263[5]
  i2262.damping = !!i2263[6]
  i2262.octaveCount = i2263[7]
  i2262.octaveMultiplier = i2263[8]
  i2262.octaveScale = i2263[9]
  i2262.quality = i2263[10]
  i2262.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[11], i2262.scrollSpeed)
  i2262.scrollSpeedMultiplier = i2263[12]
  i2262.remapEnabled = !!i2263[13]
  i2262.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[14], i2262.remapX)
  i2262.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[15], i2262.remapY)
  i2262.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[16], i2262.remapZ)
  i2262.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[17], i2262.positionAmount)
  i2262.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[18], i2262.rotationAmount)
  i2262.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[19], i2262.sizeAmount)
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemInheritVelocity()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.mode = i2265[1]
  i2264.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.curve)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemForceOverLifetime()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[1], i2266.x)
  i2266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.y)
  i2266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[3], i2266.z)
  i2266.space = i2267[4]
  i2266.randomized = !!i2267[5]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[1], i2268.limit)
  i2268.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[2], i2268.limitX)
  i2268.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[3], i2268.limitY)
  i2268.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[4], i2268.limitZ)
  i2268.dampen = i2269[5]
  i2268.separateAxes = !!i2269[6]
  i2268.space = i2269[7]
  i2268.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[8], i2268.drag)
  i2268.multiplyDragByParticleSize = !!i2269[9]
  i2268.multiplyDragByParticleVelocity = !!i2269[10]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'mesh')
  i2270.meshCount = i2271[2]
  i2270.activeVertexStreamsCount = i2271[3]
  i2270.alignment = i2271[4]
  i2270.renderMode = i2271[5]
  i2270.sortMode = i2271[6]
  i2270.lengthScale = i2271[7]
  i2270.velocityScale = i2271[8]
  i2270.cameraVelocityScale = i2271[9]
  i2270.normalDirection = i2271[10]
  i2270.sortingFudge = i2271[11]
  i2270.minParticleSize = i2271[12]
  i2270.maxParticleSize = i2271[13]
  i2270.pivot = new pc.Vec3( i2271[14], i2271[15], i2271[16] )
  request.r(i2271[17], i2271[18], 0, i2270, 'trailMaterial')
  i2270.applyActiveColorSpace = !!i2271[19]
  i2270.enabled = !!i2271[20]
  request.r(i2271[21], i2271[22], 0, i2270, 'sharedMaterial')
  var i2273 = i2271[23]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.sharedMaterials = i2272
  i2270.receiveShadows = !!i2271[24]
  i2270.shadowCastingMode = i2271[25]
  i2270.sortingLayerID = i2271[26]
  i2270.sortingOrder = i2271[27]
  i2270.lightmapIndex = i2271[28]
  i2270.lightmapSceneIndex = i2271[29]
  i2270.lightmapScaleOffset = new pc.Vec4( i2271[30], i2271[31], i2271[32], i2271[33] )
  i2270.lightProbeUsage = i2271[34]
  i2270.reflectionProbeUsage = i2271[35]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.index = i2275[1]
  i2274.startup = !!i2275[2]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2277 = data
  i2276.aspect = i2277[0]
  i2276.orthographic = !!i2277[1]
  i2276.orthographicSize = i2277[2]
  i2276.backgroundColor = new pc.Color(i2277[3], i2277[4], i2277[5], i2277[6])
  i2276.nearClipPlane = i2277[7]
  i2276.farClipPlane = i2277[8]
  i2276.fieldOfView = i2277[9]
  i2276.depth = i2277[10]
  i2276.clearFlags = i2277[11]
  i2276.cullingMask = i2277[12]
  i2276.rect = i2277[13]
  request.r(i2277[14], i2277[15], 0, i2276, 'targetTexture')
  i2276.usePhysicalProperties = !!i2277[16]
  i2276.focalLength = i2277[17]
  i2276.sensorSize = new pc.Vec2( i2277[18], i2277[19] )
  i2276.lensShift = new pc.Vec2( i2277[20], i2277[21] )
  i2276.gateFit = i2277[22]
  i2276.commandBufferCount = i2277[23]
  i2276.cameraType = i2277[24]
  i2276.enabled = !!i2277[25]
  return i2276
}

Deserializers["ShakeCamera"] = function (request, data, root) {
  var i2278 = root || request.c( 'ShakeCamera' )
  var i2279 = data
  i2278.defaultDuration = i2279[0]
  i2278.defaultStrength = i2279[1]
  i2278.frequency = i2279[2]
  return i2278
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'm_FirstSelected')
  i2280.m_sendNavigationEvents = !!i2281[2]
  i2280.m_DragThreshold = i2281[3]
  return i2280
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2283 = data
  i2282.m_HorizontalAxis = i2283[0]
  i2282.m_VerticalAxis = i2283[1]
  i2282.m_SubmitButton = i2283[2]
  i2282.m_CancelButton = i2283[3]
  i2282.m_InputActionsPerSecond = i2283[4]
  i2282.m_RepeatDelay = i2283[5]
  i2282.m_ForceModuleActive = !!i2283[6]
  i2282.m_SendPointerHoverToParent = !!i2283[7]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2285 = data
  i2284.pivot = new pc.Vec2( i2285[0], i2285[1] )
  i2284.anchorMin = new pc.Vec2( i2285[2], i2285[3] )
  i2284.anchorMax = new pc.Vec2( i2285[4], i2285[5] )
  i2284.sizeDelta = new pc.Vec2( i2285[6], i2285[7] )
  i2284.anchoredPosition3D = new pc.Vec3( i2285[8], i2285[9], i2285[10] )
  i2284.rotation = new pc.Quat(i2285[11], i2285[12], i2285[13], i2285[14])
  i2284.scale = new pc.Vec3( i2285[15], i2285[16], i2285[17] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2287 = data
  i2286.planeDistance = i2287[0]
  i2286.referencePixelsPerUnit = i2287[1]
  i2286.isFallbackOverlay = !!i2287[2]
  i2286.renderMode = i2287[3]
  i2286.renderOrder = i2287[4]
  i2286.sortingLayerName = i2287[5]
  i2286.sortingOrder = i2287[6]
  i2286.scaleFactor = i2287[7]
  request.r(i2287[8], i2287[9], 0, i2286, 'worldCamera')
  i2286.overrideSorting = !!i2287[10]
  i2286.pixelPerfect = !!i2287[11]
  i2286.targetDisplay = i2287[12]
  i2286.overridePixelPerfect = !!i2287[13]
  i2286.enabled = !!i2287[14]
  return i2286
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2289 = data
  i2288.m_UiScaleMode = i2289[0]
  i2288.m_ReferencePixelsPerUnit = i2289[1]
  i2288.m_ScaleFactor = i2289[2]
  i2288.m_ReferenceResolution = new pc.Vec2( i2289[3], i2289[4] )
  i2288.m_ScreenMatchMode = i2289[5]
  i2288.m_MatchWidthOrHeight = i2289[6]
  i2288.m_PhysicalUnit = i2289[7]
  i2288.m_FallbackScreenDPI = i2289[8]
  i2288.m_DefaultSpriteDPI = i2289[9]
  i2288.m_DynamicPixelsPerUnit = i2289[10]
  i2288.m_PresetInfoIsWorld = !!i2289[11]
  return i2288
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2291 = data
  i2290.m_IgnoreReversedGraphics = !!i2291[0]
  i2290.m_BlockingObjects = i2291[1]
  i2290.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2291[2] )
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2293 = data
  i2292.cullTransparentMesh = !!i2293[0]
  return i2292
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_Texture')
  i2294.m_UVRect = UnityEngine.Rect.MinMaxRect(i2295[2], i2295[3], i2295[4], i2295[5])
  request.r(i2295[6], i2295[7], 0, i2294, 'm_Material')
  i2294.m_Maskable = !!i2295[8]
  i2294.m_Color = new pc.Color(i2295[9], i2295[10], i2295[11], i2295[12])
  i2294.m_RaycastTarget = !!i2295[13]
  i2294.m_RaycastPadding = new pc.Vec4( i2295[14], i2295[15], i2295[16], i2295[17] )
  return i2294
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2297 = data
  i2296.m_AspectMode = i2297[0]
  i2296.m_AspectRatio = i2297[1]
  return i2296
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.Text' )
  var i2299 = data
  i2298.m_FontData = request.d('UnityEngine.UI.FontData', i2299[0], i2298.m_FontData)
  i2298.m_Text = i2299[1]
  request.r(i2299[2], i2299[3], 0, i2298, 'm_Material')
  i2298.m_Maskable = !!i2299[4]
  i2298.m_Color = new pc.Color(i2299[5], i2299[6], i2299[7], i2299[8])
  i2298.m_RaycastTarget = !!i2299[9]
  i2298.m_RaycastPadding = new pc.Vec4( i2299[10], i2299[11], i2299[12], i2299[13] )
  return i2298
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'm_Font')
  i2300.m_FontSize = i2301[2]
  i2300.m_FontStyle = i2301[3]
  i2300.m_BestFit = !!i2301[4]
  i2300.m_MinSize = i2301[5]
  i2300.m_MaxSize = i2301[6]
  i2300.m_Alignment = i2301[7]
  i2300.m_AlignByGeometry = !!i2301[8]
  i2300.m_RichText = !!i2301[9]
  i2300.m_HorizontalOverflow = i2301[10]
  i2300.m_VerticalOverflow = i2301[11]
  i2300.m_LineSpacing = i2301[12]
  return i2300
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2302 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2303 = data
  i2302.targetIsSelf = !!i2303[0]
  request.r(i2303[1], i2303[2], 0, i2302, 'targetGO')
  i2302.tweenTargetIsTargetGO = !!i2303[3]
  i2302.delay = i2303[4]
  i2302.duration = i2303[5]
  i2302.easeType = i2303[6]
  i2302.easeCurve = new pc.AnimationCurve( { keys_flow: i2303[7] } )
  i2302.loopType = i2303[8]
  i2302.loops = i2303[9]
  i2302.id = i2303[10]
  i2302.isRelative = !!i2303[11]
  i2302.isFrom = !!i2303[12]
  i2302.isIndependentUpdate = !!i2303[13]
  i2302.autoKill = !!i2303[14]
  i2302.autoGenerate = !!i2303[15]
  i2302.isActive = !!i2303[16]
  i2302.isValid = !!i2303[17]
  request.r(i2303[18], i2303[19], 0, i2302, 'target')
  i2302.animationType = i2303[20]
  i2302.targetType = i2303[21]
  i2302.forcedTargetType = i2303[22]
  i2302.autoPlay = !!i2303[23]
  i2302.useTargetAsV3 = !!i2303[24]
  i2302.endValueFloat = i2303[25]
  i2302.endValueV3 = new pc.Vec3( i2303[26], i2303[27], i2303[28] )
  i2302.endValueV2 = new pc.Vec2( i2303[29], i2303[30] )
  i2302.endValueColor = new pc.Color(i2303[31], i2303[32], i2303[33], i2303[34])
  i2302.endValueString = i2303[35]
  i2302.endValueRect = UnityEngine.Rect.MinMaxRect(i2303[36], i2303[37], i2303[38], i2303[39])
  request.r(i2303[40], i2303[41], 0, i2302, 'endValueTransform')
  i2302.optionalBool0 = !!i2303[42]
  i2302.optionalBool1 = !!i2303[43]
  i2302.optionalFloat0 = i2303[44]
  i2302.optionalInt0 = i2303[45]
  i2302.optionalRotationMode = i2303[46]
  i2302.optionalScrambleMode = i2303[47]
  i2302.optionalShakeRandomnessMode = i2303[48]
  i2302.optionalString = i2303[49]
  i2302.updateType = i2303[50]
  i2302.isSpeedBased = !!i2303[51]
  i2302.hasOnStart = !!i2303[52]
  i2302.hasOnPlay = !!i2303[53]
  i2302.hasOnUpdate = !!i2303[54]
  i2302.hasOnStepComplete = !!i2303[55]
  i2302.hasOnComplete = !!i2303[56]
  i2302.hasOnTweenCreated = !!i2303[57]
  i2302.hasOnRewind = !!i2303[58]
  i2302.onStart = request.d('UnityEngine.Events.UnityEvent', i2303[59], i2302.onStart)
  i2302.onPlay = request.d('UnityEngine.Events.UnityEvent', i2303[60], i2302.onPlay)
  i2302.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2303[61], i2302.onUpdate)
  i2302.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2303[62], i2302.onStepComplete)
  i2302.onComplete = request.d('UnityEngine.Events.UnityEvent', i2303[63], i2302.onComplete)
  i2302.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2303[64], i2302.onTweenCreated)
  i2302.onRewind = request.d('UnityEngine.Events.UnityEvent', i2303[65], i2302.onRewind)
  return i2302
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2305 = data
  i2304.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2305[0], i2304.m_PersistentCalls)
  return i2304
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.add(request.d('UnityEngine.Events.PersistentCall', i2309[i + 0]));
  }
  i2306.m_Calls = i2308
  return i2306
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'm_Target')
  i2312.m_TargetAssemblyTypeName = i2313[2]
  i2312.m_MethodName = i2313[3]
  i2312.m_Mode = i2313[4]
  i2312.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2313[5], i2312.m_Arguments)
  i2312.m_CallState = i2313[6]
  return i2312
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.Image' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'm_Sprite')
  i2314.m_Type = i2315[2]
  i2314.m_PreserveAspect = !!i2315[3]
  i2314.m_FillCenter = !!i2315[4]
  i2314.m_FillMethod = i2315[5]
  i2314.m_FillAmount = i2315[6]
  i2314.m_FillClockwise = !!i2315[7]
  i2314.m_FillOrigin = i2315[8]
  i2314.m_UseSpriteMesh = !!i2315[9]
  i2314.m_PixelsPerUnitMultiplier = i2315[10]
  request.r(i2315[11], i2315[12], 0, i2314, 'm_Material')
  i2314.m_Maskable = !!i2315[13]
  i2314.m_Color = new pc.Color(i2315[14], i2315[15], i2315[16], i2315[17])
  i2314.m_RaycastTarget = !!i2315[18]
  i2314.m_RaycastPadding = new pc.Vec4( i2315[19], i2315[20], i2315[21], i2315[22] )
  return i2314
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.Button' )
  var i2317 = data
  i2316.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2317[0], i2316.m_OnClick)
  i2316.m_Navigation = request.d('UnityEngine.UI.Navigation', i2317[1], i2316.m_Navigation)
  i2316.m_Transition = i2317[2]
  i2316.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2317[3], i2316.m_Colors)
  i2316.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2317[4], i2316.m_SpriteState)
  i2316.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2317[5], i2316.m_AnimationTriggers)
  i2316.m_Interactable = !!i2317[6]
  request.r(i2317[7], i2317[8], 0, i2316, 'm_TargetGraphic')
  return i2316
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2319 = data
  i2318.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2319[0], i2318.m_PersistentCalls)
  return i2318
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2321 = data
  i2320.m_Mode = i2321[0]
  i2320.m_WrapAround = !!i2321[1]
  request.r(i2321[2], i2321[3], 0, i2320, 'm_SelectOnUp')
  request.r(i2321[4], i2321[5], 0, i2320, 'm_SelectOnDown')
  request.r(i2321[6], i2321[7], 0, i2320, 'm_SelectOnLeft')
  request.r(i2321[8], i2321[9], 0, i2320, 'm_SelectOnRight')
  return i2320
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2323 = data
  i2322.m_NormalColor = new pc.Color(i2323[0], i2323[1], i2323[2], i2323[3])
  i2322.m_HighlightedColor = new pc.Color(i2323[4], i2323[5], i2323[6], i2323[7])
  i2322.m_PressedColor = new pc.Color(i2323[8], i2323[9], i2323[10], i2323[11])
  i2322.m_SelectedColor = new pc.Color(i2323[12], i2323[13], i2323[14], i2323[15])
  i2322.m_DisabledColor = new pc.Color(i2323[16], i2323[17], i2323[18], i2323[19])
  i2322.m_ColorMultiplier = i2323[20]
  i2322.m_FadeDuration = i2323[21]
  return i2322
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'm_HighlightedSprite')
  request.r(i2325[2], i2325[3], 0, i2324, 'm_PressedSprite')
  request.r(i2325[4], i2325[5], 0, i2324, 'm_SelectedSprite')
  request.r(i2325[6], i2325[7], 0, i2324, 'm_DisabledSprite')
  return i2324
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2327 = data
  i2326.m_NormalTrigger = i2327[0]
  i2326.m_HighlightedTrigger = i2327[1]
  i2326.m_PressedTrigger = i2327[2]
  i2326.m_SelectedTrigger = i2327[3]
  i2326.m_DisabledTrigger = i2327[4]
  return i2326
}

Deserializers["TutController"] = function (request, data, root) {
  var i2328 = root || request.c( 'TutController' )
  var i2329 = data
  var i2331 = i2329[0]
  var i2330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i2331.length; i += 2) {
    i2330.add(new pc.Vec2( i2331[i + 0], i2331[i + 1] ));
  }
  i2328.movePos = i2330
  i2328.moveTime = i2329[1]
  i2328.fromScale = i2329[2]
  i2328.toScale = i2329[3]
  i2328.scaleTime = i2329[4]
  i2328.delayTime = i2329[5]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'clip')
  request.r(i2335[2], i2335[3], 0, i2334, 'outputAudioMixerGroup')
  i2334.playOnAwake = !!i2335[4]
  i2334.loop = !!i2335[5]
  i2334.time = i2335[6]
  i2334.volume = i2335[7]
  i2334.pitch = i2335[8]
  i2334.enabled = !!i2335[9]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2337 = data
  i2336.usedByComposite = !!i2337[0]
  i2336.autoTiling = !!i2337[1]
  i2336.size = new pc.Vec2( i2337[2], i2337[3] )
  i2336.edgeRadius = i2337[4]
  i2336.enabled = !!i2337[5]
  i2336.isTrigger = !!i2337[6]
  i2336.usedByEffector = !!i2337[7]
  i2336.density = i2337[8]
  i2336.offset = new pc.Vec2( i2337[9], i2337[10] )
  request.r(i2337[11], i2337[12], 0, i2336, 'material')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2339 = data
  i2338.bodyType = i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'material')
  i2338.simulated = !!i2339[3]
  i2338.useAutoMass = !!i2339[4]
  i2338.mass = i2339[5]
  i2338.drag = i2339[6]
  i2338.angularDrag = i2339[7]
  i2338.gravityScale = i2339[8]
  i2338.collisionDetectionMode = i2339[9]
  i2338.sleepMode = i2339[10]
  i2338.constraints = i2339[11]
  return i2338
}

Deserializers["CountDownBomb"] = function (request, data, root) {
  var i2340 = root || request.c( 'CountDownBomb' )
  var i2341 = data
  i2340.delay = i2341[0]
  i2340.layer = UnityEngine.LayerMask.FromIntegerValue( i2341[1] )
  request.r(i2341[2], i2341[3], 0, i2340, 'avatar')
  request.r(i2341[4], i2341[5], 0, i2340, 'startSound')
  request.r(i2341[6], i2341[7], 0, i2340, 'actionSound')
  request.r(i2341[8], i2341[9], 0, i2340, 'boomVFX')
  i2340.shakeDuration = i2341[10]
  i2340.shakeStrength = i2341[11]
  i2340.timeDestroy = i2341[12]
  i2340.damage = i2341[13]
  i2340.radius = i2341[14]
  var i2343 = i2341[15]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(request.d('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2343[i + 0]));
  }
  i2340.actionEvents = i2342
  return i2340
}

Deserializers["UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]"] = function (request, data, root) {
  var i2346 = root || new (UnityEngine.Events.UnityEvent$2( Bridge.ns( 'System.Single' ),Bridge.ns( 'System.Single' ) ))
  var i2347 = data
  i2346.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2347[0], i2346.m_PersistentCalls)
  return i2346
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'm_ObjectArgument')
  i2348.m_ObjectArgumentAssemblyTypeName = i2349[2]
  i2348.m_IntArgument = i2349[3]
  i2348.m_FloatArgument = i2349[4]
  i2348.m_StringArgument = i2349[5]
  i2348.m_BoolArgument = !!i2349[6]
  return i2348
}

Deserializers["CollisionBomb"] = function (request, data, root) {
  var i2350 = root || request.c( 'CollisionBomb' )
  var i2351 = data
  i2350.layer = UnityEngine.LayerMask.FromIntegerValue( i2351[0] )
  request.r(i2351[1], i2351[2], 0, i2350, 'avatar')
  request.r(i2351[3], i2351[4], 0, i2350, 'startSound')
  request.r(i2351[5], i2351[6], 0, i2350, 'actionSound')
  request.r(i2351[7], i2351[8], 0, i2350, 'boomVFX')
  i2350.shakeDuration = i2351[9]
  i2350.shakeStrength = i2351[10]
  i2350.timeDestroy = i2351[11]
  i2350.damage = i2351[12]
  i2350.radius = i2351[13]
  var i2353 = i2351[14]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]')))
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.add(request.d('UnityEngine.Events.UnityEvent`2[[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Single, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]', i2353[i + 0]));
  }
  i2350.actionEvents = i2352
  return i2350
}

Deserializers["TriggerMonster"] = function (request, data, root) {
  var i2354 = root || request.c( 'TriggerMonster' )
  var i2355 = data
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2357 = data
  i2356.sortingLayerIndex = i2357[0]
  i2356.sortingOrder = i2357[1]
  i2356.sortingLayerName = i2357[2]
  i2356.enabled = !!i2357[3]
  return i2356
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2358 = root || request.c( 'PlayerController' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('Piece', i2361[i + 0]));
  }
  i2358.pieces = i2360
  request.r(i2359[1], i2359[2], 0, i2358, 'head')
  request.r(i2359[3], i2359[4], 0, i2358, 'deadSFX')
  i2358.maxForce = new pc.Vec2( i2359[5], i2359[6] )
  i2358.minForce = new pc.Vec2( i2359[7], i2359[8] )
  var i2363 = i2359[9]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(request.d('FightOption', i2363[i + 0]));
  }
  i2358.fightOptions = i2362
  i2358.fight = request.d('FightOption', i2359[10], i2358.fight)
  request.r(i2359[11], i2359[12], 0, i2358, 'clickSound')
  request.r(i2359[13], i2359[14], 0, i2358, 'deadVFX')
  var i2365 = i2359[15]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2365.length; i += 2) {
  request.r(i2365[i + 0], i2365[i + 1], 1, i2364, '')
  }
  i2358.renderers = i2364
  var i2367 = i2359[16]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 1, i2366, '')
  }
  i2358.sprites = i2366
  i2358.isZombie = !!i2359[17]
  return i2358
}

Deserializers["Piece"] = function (request, data, root) {
  var i2370 = root || request.c( 'Piece' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'Joint')
  request.r(i2371[2], i2371[3], 0, i2370, 'Rb')
  return i2370
}

Deserializers["FightOption"] = function (request, data, root) {
  var i2374 = root || request.c( 'FightOption' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'Button')
  request.r(i2375[2], i2375[3], 0, i2374, 'Controller')
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2381 = data
  i2380.useLimits = !!i2381[0]
  i2380.limits = request.d('UnityEngine.JointAngleLimits2D', i2381[1], i2380.limits)
  i2380.useMotor = !!i2381[2]
  i2380.motor = request.d('UnityEngine.JointMotor2D', i2381[3], i2380.motor)
  i2380.anchor = new pc.Vec2( i2381[4], i2381[5] )
  i2380.connectedAnchor = new pc.Vec2( i2381[6], i2381[7] )
  i2380.autoConfigureConnectedAnchor = !!i2381[8]
  request.r(i2381[9], i2381[10], 0, i2380, 'connectedBody')
  i2380.breakForce = i2381[11]
  i2380.breakTorque = i2381[12]
  i2380.enableCollision = !!i2381[13]
  i2380.enabled = !!i2381[14]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i2383 = data
  i2382.autoConfigureTarget = !!i2383[0]
  i2382.target = new pc.Vec2( i2383[1], i2383[2] )
  i2382.anchor = new pc.Vec2( i2383[3], i2383[4] )
  i2382.maxForce = i2383[5]
  i2382.dampingRatio = i2383[6]
  i2382.frequency = i2383[7]
  request.r(i2383[8], i2383[9], 0, i2382, 'connectedBody')
  i2382.breakForce = i2383[10]
  i2382.breakTorque = i2383[11]
  i2382.enableCollision = !!i2383[12]
  i2382.enabled = !!i2383[13]
  return i2382
}

Deserializers["ShootController"] = function (request, data, root) {
  var i2384 = root || request.c( 'ShootController' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'currentMonster')
  request.r(i2385[2], i2385[3], 0, i2384, 'left')
  request.r(i2385[4], i2385[5], 0, i2384, 'right')
  i2384.timeMotor = i2385[6]
  i2384.onCD = !!i2385[7]
  i2384.CD = i2385[8]
  request.r(i2385[9], i2385[10], 0, i2384, 'startPos')
  request.r(i2385[11], i2385[12], 0, i2384, 'attackSound')
  request.r(i2385[13], i2385[14], 0, i2384, 'spawnPrefab')
  request.r(i2385[15], i2385[16], 0, i2384, 'poolParent')
  return i2384
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i2386 = root || request.c( 'BalanceController' )
  var i2387 = data
  i2386.targetRotation = i2387[0]
  i2386.force = i2387[1]
  return i2386
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i2388 = root || request.c( 'MonsterController' )
  var i2389 = data
  i2388.maxHP = i2389[0]
  i2388.currentHP = i2389[1]
  var i2391 = i2389[2]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.add(request.d('Piece', i2391[i + 0]));
  }
  i2388.pieces = i2390
  request.r(i2389[3], i2389[4], 0, i2388, 'deadSFX')
  i2388.maxForce = new pc.Vec2( i2389[5], i2389[6] )
  i2388.minForce = new pc.Vec2( i2389[7], i2389[8] )
  request.r(i2389[9], i2389[10], 0, i2388, 'balance')
  i2388.isDead = !!i2389[11]
  request.r(i2389[12], i2389[13], 0, i2388, 'monsterMove')
  request.r(i2389[14], i2389[15], 0, i2388, 'monsterTarget')
  request.r(i2389[16], i2389[17], 0, i2388, 'monsterAnimation')
  request.r(i2389[18], i2389[19], 0, i2388, 'voice')
  return i2388
}

Deserializers["MonsterMove"] = function (request, data, root) {
  var i2392 = root || request.c( 'MonsterMove' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'body')
  i2392.speed = i2393[2]
  return i2392
}

Deserializers["MonsterAnimation"] = function (request, data, root) {
  var i2394 = root || request.c( 'MonsterAnimation' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'leftHand')
  request.r(i2395[2], i2395[3], 0, i2394, 'rightHand')
  request.r(i2395[4], i2395[5], 0, i2394, 'leftLeg')
  request.r(i2395[6], i2395[7], 0, i2394, 'rightLeg')
  return i2394
}

Deserializers["MonsterTarget"] = function (request, data, root) {
  var i2396 = root || request.c( 'MonsterTarget' )
  var i2397 = data
  i2396.targetLeft = !!i2397[0]
  return i2396
}

Deserializers["GameController"] = function (request, data, root) {
  var i2398 = root || request.c( 'GameController' )
  var i2399 = data
  i2398.Delay = i2399[0]
  i2398.OnPause = request.d('System.Action', i2399[1], i2398.OnPause)
  i2398.OnResume = request.d('System.Action', i2399[2], i2398.OnResume)
  i2398.OnGameOver = request.d('System.Action', i2399[3], i2398.OnGameOver)
  i2398.OnGameComplete = request.d('System.Action', i2399[4], i2398.OnGameComplete)
  request.r(i2399[5], i2399[6], 0, i2398, 'startScene')
  request.r(i2399[7], i2399[8], 0, i2398, 'header')
  request.r(i2399[9], i2399[10], 0, i2398, 'clickSound')
  request.r(i2399[11], i2399[12], 0, i2398, 'options')
  request.r(i2399[13], i2399[14], 0, i2398, 'bomb1Button')
  request.r(i2399[15], i2399[16], 0, i2398, 'bomb1')
  request.r(i2399[17], i2399[18], 0, i2398, 'bomb2Button')
  request.r(i2399[19], i2399[20], 0, i2398, 'bomb2')
  request.r(i2399[21], i2399[22], 0, i2398, 'bomb3Button')
  request.r(i2399[23], i2399[24], 0, i2398, 'bomb3')
  request.r(i2399[25], i2399[26], 0, i2398, 'bomb4Button')
  request.r(i2399[27], i2399[28], 0, i2398, 'bomb4')
  request.r(i2399[29], i2399[30], 0, i2398, 'tut')
  request.r(i2399[31], i2399[32], 0, i2398, 'endScene')
  request.r(i2399[33], i2399[34], 0, i2398, 'completeScene')
  request.r(i2399[35], i2399[36], 0, i2398, 'gameOverScene')
  request.r(i2399[37], i2399[38], 0, i2398, 'player')
  i2398.numMonster = i2399[39]
  request.r(i2399[40], i2399[41], 0, i2398, 'world')
  return i2398
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2400 = root || request.c( 'System.Action' )
  var i2401 = data
  return i2400
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2402 = root || request.c( 'LayoutController' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'main')
  return i2402
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2404 = root || request.c( 'LunaController' )
  var i2405 = data
  i2404.oneClick = !!i2405[0]
  i2404.UseTime = !!i2405[1]
  i2404.TimePlay = i2405[2]
  request.r(i2405[3], i2405[4], 0, i2404, 'BGTexture')
  i2404.HeaderText1 = i2405[5]
  i2404.ColorHeaderText1 = new pc.Color(i2405[6], i2405[7], i2405[8], i2405[9])
  i2404.HeaderText2 = i2405[10]
  i2404.ColorHeaderText2 = new pc.Color(i2405[11], i2405[12], i2405[13], i2405[14])
  request.r(i2405[15], i2405[16], 0, i2404, 'header1')
  request.r(i2405[17], i2405[18], 0, i2404, 'header2')
  request.r(i2405[19], i2405[20], 0, i2404, 'BGImage')
  var i2407 = i2405[21]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 1, i2406, '')
  }
  i2404.CTA = i2406
  var i2409 = i2405[22]
  var i2408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 1, i2408, '')
  }
  i2404.oneClickCTA = i2408
  return i2404
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2412 = root || request.c( 'AudioController' )
  var i2413 = data
  request.r(i2413[0], i2413[1], 0, i2412, 'BGM')
  request.r(i2413[2], i2413[3], 0, i2412, 'musicSource')
  request.r(i2413[4], i2413[5], 0, i2412, 'pool')
  return i2412
}

Deserializers["VFXController"] = function (request, data, root) {
  var i2414 = root || request.c( 'VFXController' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'poolParent')
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2417 = data
  i2416.ambientIntensity = i2417[0]
  i2416.reflectionIntensity = i2417[1]
  i2416.ambientMode = i2417[2]
  i2416.ambientLight = new pc.Color(i2417[3], i2417[4], i2417[5], i2417[6])
  i2416.ambientSkyColor = new pc.Color(i2417[7], i2417[8], i2417[9], i2417[10])
  i2416.ambientGroundColor = new pc.Color(i2417[11], i2417[12], i2417[13], i2417[14])
  i2416.ambientEquatorColor = new pc.Color(i2417[15], i2417[16], i2417[17], i2417[18])
  i2416.fogColor = new pc.Color(i2417[19], i2417[20], i2417[21], i2417[22])
  i2416.fogEndDistance = i2417[23]
  i2416.fogStartDistance = i2417[24]
  i2416.fogDensity = i2417[25]
  i2416.fog = !!i2417[26]
  request.r(i2417[27], i2417[28], 0, i2416, 'skybox')
  i2416.fogMode = i2417[29]
  var i2419 = i2417[30]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2419[i + 0]) );
  }
  i2416.lightmaps = i2418
  i2416.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2417[31], i2416.lightProbes)
  i2416.lightmapsMode = i2417[32]
  i2416.mixedBakeMode = i2417[33]
  i2416.environmentLightingMode = i2417[34]
  i2416.ambientProbe = new pc.SphericalHarmonicsL2(i2417[35])
  request.r(i2417[36], i2417[37], 0, i2416, 'customReflection')
  request.r(i2417[38], i2417[39], 0, i2416, 'defaultReflection')
  i2416.defaultReflectionMode = i2417[40]
  i2416.defaultReflectionResolution = i2417[41]
  i2416.sunLightObjectId = i2417[42]
  i2416.pixelLightCount = i2417[43]
  i2416.defaultReflectionHDR = !!i2417[44]
  i2416.hasLightDataAsset = !!i2417[45]
  i2416.hasManualGenerate = !!i2417[46]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'lightmapColor')
  request.r(i2423[2], i2423[3], 0, i2422, 'lightmapDirection')
  request.r(i2423[4], i2423[5], 0, i2422, 'shadowMask')
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2424 = root || new UnityEngine.LightProbes()
  var i2425 = data
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2433 = data
  var i2435 = i2433[0]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2435[i + 0]));
  }
  i2432.ShaderCompilationErrors = i2434
  i2432.name = i2433[1]
  i2432.guid = i2433[2]
  var i2437 = i2433[3]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( i2437[i + 0] );
  }
  i2432.shaderDefinedKeywords = i2436
  var i2439 = i2433[4]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2439[i + 0]) );
  }
  i2432.passes = i2438
  var i2441 = i2433[5]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2441[i + 0]) );
  }
  i2432.usePasses = i2440
  var i2443 = i2433[6]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2443[i + 0]) );
  }
  i2432.defaultParameterValues = i2442
  request.r(i2433[7], i2433[8], 0, i2432, 'unityFallbackShader')
  i2432.readDepth = !!i2433[9]
  i2432.hasDepthOnlyPass = !!i2433[10]
  i2432.isCreatedByShaderGraph = !!i2433[11]
  i2432.disableBatching = !!i2433[12]
  i2432.compiled = !!i2433[13]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2447 = data
  i2446.shaderName = i2447[0]
  i2446.errorMessage = i2447[1]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2452 = root || new pc.UnityShaderPass()
  var i2453 = data
  i2452.id = i2453[0]
  i2452.subShaderIndex = i2453[1]
  i2452.name = i2453[2]
  i2452.passType = i2453[3]
  i2452.grabPassTextureName = i2453[4]
  i2452.usePass = !!i2453[5]
  i2452.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[6], i2452.zTest)
  i2452.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[7], i2452.zWrite)
  i2452.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[8], i2452.culling)
  i2452.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2453[9], i2452.blending)
  i2452.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2453[10], i2452.alphaBlending)
  i2452.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[11], i2452.colorWriteMask)
  i2452.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[12], i2452.offsetUnits)
  i2452.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[13], i2452.offsetFactor)
  i2452.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[14], i2452.stencilRef)
  i2452.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[15], i2452.stencilReadMask)
  i2452.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2453[16], i2452.stencilWriteMask)
  i2452.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2453[17], i2452.stencilOp)
  i2452.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2453[18], i2452.stencilOpFront)
  i2452.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2453[19], i2452.stencilOpBack)
  var i2455 = i2453[20]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2455[i + 0]) );
  }
  i2452.tags = i2454
  var i2457 = i2453[21]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( i2457[i + 0] );
  }
  i2452.passDefinedKeywords = i2456
  var i2459 = i2453[22]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2459[i + 0]) );
  }
  i2452.passDefinedKeywordGroups = i2458
  var i2461 = i2453[23]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2461[i + 0]) );
  }
  i2452.variants = i2460
  var i2463 = i2453[24]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2463[i + 0]) );
  }
  i2452.excludedVariants = i2462
  i2452.hasDepthReader = !!i2453[25]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2465 = data
  i2464.val = i2465[0]
  i2464.name = i2465[1]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2467 = data
  i2466.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[0], i2466.src)
  i2466.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[1], i2466.dst)
  i2466.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2467[2], i2466.op)
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2469 = data
  i2468.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2469[0], i2468.pass)
  i2468.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2469[1], i2468.fail)
  i2468.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2469[2], i2468.zFail)
  i2468.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2469[3], i2468.comp)
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.value = i2473[1]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2477 = data
  var i2479 = i2477[0]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( i2479[i + 0] );
  }
  i2476.keywords = i2478
  i2476.hasDiscard = !!i2477[1]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2483 = data
  i2482.passId = i2483[0]
  i2482.subShaderIndex = i2483[1]
  var i2485 = i2483[2]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( i2485[i + 0] );
  }
  i2482.keywords = i2484
  i2482.vertexProgram = i2483[3]
  i2482.fragmentProgram = i2483[4]
  i2482.exportedForWebGl2 = !!i2483[5]
  i2482.readDepth = !!i2483[6]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'shader')
  i2488.pass = i2489[2]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2493 = data
  i2492.name = i2493[0]
  i2492.type = i2493[1]
  i2492.value = new pc.Vec4( i2493[2], i2493[3], i2493[4], i2493[5] )
  i2492.textureValue = i2493[6]
  i2492.shaderPropertyFlag = i2493[7]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2495 = data
  i2494.name = i2495[0]
  request.r(i2495[1], i2495[2], 0, i2494, 'texture')
  i2494.aabb = i2495[3]
  i2494.vertices = i2495[4]
  i2494.triangles = i2495[5]
  i2494.textureRect = UnityEngine.Rect.MinMaxRect(i2495[6], i2495[7], i2495[8], i2495[9])
  i2494.packedRect = UnityEngine.Rect.MinMaxRect(i2495[10], i2495[11], i2495[12], i2495[13])
  i2494.border = new pc.Vec4( i2495[14], i2495[15], i2495[16], i2495[17] )
  i2494.transparency = i2495[18]
  i2494.bounds = i2495[19]
  i2494.pixelsPerUnit = i2495[20]
  i2494.textureWidth = i2495[21]
  i2494.textureHeight = i2495[22]
  i2494.nativeSize = new pc.Vec2( i2495[23], i2495[24] )
  i2494.pivot = new pc.Vec2( i2495[25], i2495[26] )
  i2494.textureRectOffset = new pc.Vec2( i2495[27], i2495[28] )
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2497 = data
  i2496.name = i2497[0]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.ascent = i2499[1]
  i2498.originalLineHeight = i2499[2]
  i2498.fontSize = i2499[3]
  var i2501 = i2499[4]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2501[i + 0]) );
  }
  i2498.characterInfo = i2500
  request.r(i2499[5], i2499[6], 0, i2498, 'texture')
  i2498.originalFontSize = i2499[7]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2505 = data
  i2504.index = i2505[0]
  i2504.advance = i2505[1]
  i2504.bearing = i2505[2]
  i2504.glyphWidth = i2505[3]
  i2504.glyphHeight = i2505[4]
  i2504.minX = i2505[5]
  i2504.maxX = i2505[6]
  i2504.minY = i2505[7]
  i2504.maxY = i2505[8]
  i2504.uvBottomLeftX = i2505[9]
  i2504.uvBottomLeftY = i2505[10]
  i2504.uvBottomRightX = i2505[11]
  i2504.uvBottomRightY = i2505[12]
  i2504.uvTopLeftX = i2505[13]
  i2504.uvTopLeftY = i2505[14]
  i2504.uvTopRightX = i2505[15]
  i2504.uvTopRightY = i2505[16]
  return i2504
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2507 = data
  i2506.useSafeMode = !!i2507[0]
  i2506.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2507[1], i2506.safeModeOptions)
  i2506.timeScale = i2507[2]
  i2506.unscaledTimeScale = i2507[3]
  i2506.useSmoothDeltaTime = !!i2507[4]
  i2506.maxSmoothUnscaledTime = i2507[5]
  i2506.rewindCallbackMode = i2507[6]
  i2506.showUnityEditorReport = !!i2507[7]
  i2506.logBehaviour = i2507[8]
  i2506.drawGizmos = !!i2507[9]
  i2506.defaultRecyclable = !!i2507[10]
  i2506.defaultAutoPlay = i2507[11]
  i2506.defaultUpdateType = i2507[12]
  i2506.defaultTimeScaleIndependent = !!i2507[13]
  i2506.defaultEaseType = i2507[14]
  i2506.defaultEaseOvershootOrAmplitude = i2507[15]
  i2506.defaultEasePeriod = i2507[16]
  i2506.defaultAutoKill = !!i2507[17]
  i2506.defaultLoopType = i2507[18]
  i2506.debugMode = !!i2507[19]
  i2506.debugStoreTargetId = !!i2507[20]
  i2506.showPreviewPanel = !!i2507[21]
  i2506.storeSettingsLocation = i2507[22]
  i2506.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2507[23], i2506.modules)
  i2506.createASMDEF = !!i2507[24]
  i2506.showPlayingTweens = !!i2507[25]
  i2506.showPausedTweens = !!i2507[26]
  return i2506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2509 = data
  i2508.logBehaviour = i2509[0]
  i2508.nestedTweenFailureBehaviour = i2509[1]
  return i2508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2511 = data
  i2510.showPanel = !!i2511[0]
  i2510.audioEnabled = !!i2511[1]
  i2510.physicsEnabled = !!i2511[2]
  i2510.physics2DEnabled = !!i2511[3]
  i2510.spriteEnabled = !!i2511[4]
  i2510.uiEnabled = !!i2511[5]
  i2510.textMeshProEnabled = !!i2511[6]
  i2510.tk2DEnabled = !!i2511[7]
  i2510.deAudioEnabled = !!i2511[8]
  i2510.deUnityExtendedEnabled = !!i2511[9]
  i2510.epoOutlineEnabled = !!i2511[10]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2513 = data
  var i2515 = i2513[0]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2515[i + 0]) );
  }
  i2512.files = i2514
  i2512.componentToPrefabIds = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2519 = data
  i2518.path = i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'unityObject')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2523[i + 0]) );
  }
  i2520.scriptsExecutionOrder = i2522
  var i2525 = i2521[1]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2525[i + 0]) );
  }
  i2520.sortingLayers = i2524
  var i2527 = i2521[2]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2527[i + 0]) );
  }
  i2520.cullingLayers = i2526
  i2520.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2521[3], i2520.timeSettings)
  i2520.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2521[4], i2520.physicsSettings)
  i2520.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2521[5], i2520.physics2DSettings)
  i2520.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2521[6], i2520.qualitySettings)
  i2520.enableRealtimeShadows = !!i2521[7]
  i2520.enableAutoInstancing = !!i2521[8]
  i2520.enableStaticBatching = !!i2521[9]
  i2520.enableDynamicBatching = !!i2521[10]
  i2520.usePreservativeDynamicBatching = !!i2521[11]
  i2520.lightmapEncodingQuality = i2521[12]
  i2520.desiredColorSpace = i2521[13]
  var i2529 = i2521[14]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2520.allTags = i2528
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.value = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2537 = data
  i2536.id = i2537[0]
  i2536.name = i2537[1]
  i2536.value = i2537[2]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2541 = data
  i2540.id = i2541[0]
  i2540.name = i2541[1]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2543 = data
  i2542.fixedDeltaTime = i2543[0]
  i2542.maximumDeltaTime = i2543[1]
  i2542.timeScale = i2543[2]
  i2542.maximumParticleTimestep = i2543[3]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2545 = data
  i2544.gravity = new pc.Vec3( i2545[0], i2545[1], i2545[2] )
  i2544.defaultSolverIterations = i2545[3]
  i2544.bounceThreshold = i2545[4]
  i2544.autoSyncTransforms = !!i2545[5]
  i2544.autoSimulation = !!i2545[6]
  var i2547 = i2545[7]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2547[i + 0]) );
  }
  i2544.collisionMatrix = i2546
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.layerId = i2551[1]
  i2550.otherLayerId = i2551[2]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'material')
  i2552.gravity = new pc.Vec2( i2553[2], i2553[3] )
  i2552.positionIterations = i2553[4]
  i2552.velocityIterations = i2553[5]
  i2552.velocityThreshold = i2553[6]
  i2552.maxLinearCorrection = i2553[7]
  i2552.maxAngularCorrection = i2553[8]
  i2552.maxTranslationSpeed = i2553[9]
  i2552.maxRotationSpeed = i2553[10]
  i2552.baumgarteScale = i2553[11]
  i2552.baumgarteTOIScale = i2553[12]
  i2552.timeToSleep = i2553[13]
  i2552.linearSleepTolerance = i2553[14]
  i2552.angularSleepTolerance = i2553[15]
  i2552.defaultContactOffset = i2553[16]
  i2552.autoSimulation = !!i2553[17]
  i2552.queriesHitTriggers = !!i2553[18]
  i2552.queriesStartInColliders = !!i2553[19]
  i2552.callbacksOnDisable = !!i2553[20]
  i2552.reuseCollisionCallbacks = !!i2553[21]
  i2552.autoSyncTransforms = !!i2553[22]
  var i2555 = i2553[23]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2555[i + 0]) );
  }
  i2552.collisionMatrix = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.layerId = i2559[1]
  i2558.otherLayerId = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2563[i + 0]) );
  }
  i2560.qualityLevels = i2562
  var i2565 = i2561[1]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2560.names = i2564
  i2560.shadows = i2561[2]
  i2560.anisotropicFiltering = i2561[3]
  i2560.antiAliasing = i2561[4]
  i2560.lodBias = i2561[5]
  i2560.shadowCascades = i2561[6]
  i2560.shadowDistance = i2561[7]
  i2560.shadowmaskMode = i2561[8]
  i2560.shadowProjection = i2561[9]
  i2560.shadowResolution = i2561[10]
  i2560.softParticles = !!i2561[11]
  i2560.softVegetation = !!i2561[12]
  i2560.activeColorSpace = i2561[13]
  i2560.desiredColorSpace = i2561[14]
  i2560.masterTextureLimit = i2561[15]
  i2560.maxQueuedFrames = i2561[16]
  i2560.particleRaycastBudget = i2561[17]
  i2560.pixelLightCount = i2561[18]
  i2560.realtimeReflectionProbes = !!i2561[19]
  i2560.shadowCascade2Split = i2561[20]
  i2560.shadowCascade4Split = new pc.Vec3( i2561[21], i2561[22], i2561[23] )
  i2560.streamingMipmapsActive = !!i2561[24]
  i2560.vSyncCount = i2561[25]
  i2560.asyncUploadBufferSize = i2561[26]
  i2560.asyncUploadTimeSlice = i2561[27]
  i2560.billboardsFaceCameraPosition = !!i2561[28]
  i2560.shadowNearPlaneOffset = i2561[29]
  i2560.streamingMipmapsMemoryBudget = i2561[30]
  i2560.maximumLODLevel = i2561[31]
  i2560.streamingMipmapsAddAllCameras = !!i2561[32]
  i2560.streamingMipmapsMaxLevelReduction = i2561[33]
  i2560.streamingMipmapsRenderersPerFrame = i2561[34]
  i2560.resolutionScalingFixedDPIFactor = i2561[35]
  i2560.streamingMipmapsMaxFileIORequests = i2561[36]
  i2560.currentQualityLevel = i2561[37]
  return i2560
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[62],"63":[11],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[33],"72":[33],"73":[33],"74":[33],"75":[33],"76":[33],"40":[33],"77":[33],"78":[33],"41":[33],"79":[33],"80":[33],"81":[33],"82":[11],"83":[84],"85":[86],"87":[86],"18":[17],"88":[2],"89":[11],"90":[91],"92":[17],"93":[21,17],"94":[84],"95":[21,17],"96":[17],"97":[17],"98":[84,17],"99":[17,21],"100":[101],"102":[101],"103":[101],"104":[17],"105":[17],"20":[18],"28":[21,17],"24":[17],"19":[18],"106":[17],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"22":[21,17],"115":[17],"116":[17],"117":[17],"118":[17],"25":[21,17],"119":[17],"120":[15],"121":[15],"16":[15],"122":[15],"123":[11],"124":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","ShakeCamera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.UI.Button","TutController","UnityEngine.AudioSource","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","CountDownBomb","UnityEngine.GameObject","CollisionBomb","TriggerMonster","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","BalanceController","MonsterController","MonsterMove","MonsterTarget","MonsterAnimation","GameController","LayoutController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "09/28/2026 08:09:01";

Deserializers.lunaDaysRunning = "9.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SPS_V04_TrangHTT";

Deserializers.lunaAppID = "42944";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1753";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4457";

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

Deserializers.buildID = "458bfc5d-ac1b-4dca-99ae-7d00f7018057";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

