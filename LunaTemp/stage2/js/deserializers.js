var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.JointSpring' )
  var i2245 = data
  i2244.spring = i2245[0]
  i2244.damper = i2245[1]
  i2244.targetPosition = i2245[2]
  return i2244
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.JointMotor' )
  var i2247 = data
  i2246.m_TargetVelocity = i2247[0]
  i2246.m_Force = i2247[1]
  i2246.m_FreeSpin = i2247[2]
  return i2246
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.JointLimits' )
  var i2249 = data
  i2248.m_Min = i2249[0]
  i2248.m_Max = i2249[1]
  i2248.m_Bounciness = i2249[2]
  i2248.m_BounceMinVelocity = i2249[3]
  i2248.m_ContactDistance = i2249[4]
  i2248.minBounce = i2249[5]
  i2248.maxBounce = i2249[6]
  return i2248
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.JointDrive' )
  var i2251 = data
  i2250.m_PositionSpring = i2251[0]
  i2250.m_PositionDamper = i2251[1]
  i2250.m_MaximumForce = i2251[2]
  i2250.m_UseAcceleration = i2251[3]
  return i2250
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2253 = data
  i2252.m_Spring = i2253[0]
  i2252.m_Damper = i2253[1]
  return i2252
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2255 = data
  i2254.m_Limit = i2255[0]
  i2254.m_Bounciness = i2255[1]
  i2254.m_ContactDistance = i2255[2]
  return i2254
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2257 = data
  i2256.m_ExtremumSlip = i2257[0]
  i2256.m_ExtremumValue = i2257[1]
  i2256.m_AsymptoteSlip = i2257[2]
  i2256.m_AsymptoteValue = i2257[3]
  i2256.m_Stiffness = i2257[4]
  return i2256
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2259 = data
  i2258.m_LowerAngle = i2259[0]
  i2258.m_UpperAngle = i2259[1]
  return i2258
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2261 = data
  i2260.m_MotorSpeed = i2261[0]
  i2260.m_MaximumMotorTorque = i2261[1]
  return i2260
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2263 = data
  i2262.m_DampingRatio = i2263[0]
  i2262.m_Frequency = i2263[1]
  i2262.m_Angle = i2263[2]
  return i2262
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2265 = data
  i2264.m_LowerTranslation = i2265[0]
  i2264.m_UpperTranslation = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2267 = data
  i2266.name = i2267[0]
  i2266.width = i2267[1]
  i2266.height = i2267[2]
  i2266.mipmapCount = i2267[3]
  i2266.anisoLevel = i2267[4]
  i2266.filterMode = i2267[5]
  i2266.hdr = !!i2267[6]
  i2266.format = i2267[7]
  i2266.wrapMode = i2267[8]
  i2266.alphaIsTransparency = !!i2267[9]
  i2266.alphaSource = i2267[10]
  i2266.graphicsFormat = i2267[11]
  i2266.sRGBTexture = !!i2267[12]
  i2266.desiredColorSpace = i2267[13]
  i2266.wrapU = i2267[14]
  i2266.wrapV = i2267[15]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2269 = data
  i2268.position = new pc.Vec3( i2269[0], i2269[1], i2269[2] )
  i2268.scale = new pc.Vec3( i2269[3], i2269[4], i2269[5] )
  i2268.rotation = new pc.Quat(i2269[6], i2269[7], i2269[8], i2269[9])
  return i2268
}

Deserializers["Game.Gameplay.RagdollBrain"] = function (request, data, root) {
  var i2270 = root || request.c( 'Game.Gameplay.RagdollBrain' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'torso')
  request.r(i2271[2], i2271[3], 0, i2270, 'head')
  request.r(i2271[4], i2271[5], 0, i2270, 'legL')
  request.r(i2271[6], i2271[7], 0, i2270, 'legR')
  request.r(i2271[8], i2271[9], 0, i2270, 'neck')
  request.r(i2271[10], i2271[11], 0, i2270, 'shoulderL')
  request.r(i2271[12], i2271[13], 0, i2270, 'shoulderR')
  request.r(i2271[14], i2271[15], 0, i2270, 'hipL')
  request.r(i2271[16], i2271[17], 0, i2270, 'hipR')
  i2270.standHeight = i2271[18]
  i2270.headRestHeight = i2271[19]
  request.r(i2271[20], i2271[21], 0, i2270, 'tuning')
  return i2270
}

Deserializers["Game.Gameplay.CreatureAgent"] = function (request, data, root) {
  var i2272 = root || request.c( 'Game.Gameplay.CreatureAgent' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'creature')
  request.r(i2273[2], i2273[3], 0, i2272, 'torsoBody')
  request.r(i2273[4], i2273[5], 0, i2272, 'torsoRenderer')
  request.r(i2273[6], i2273[7], 0, i2272, 'headRenderer')
  request.r(i2273[8], i2273[9], 0, i2272, 'leftArmRenderer')
  request.r(i2273[10], i2273[11], 0, i2272, 'rightArmRenderer')
  request.r(i2273[12], i2273[13], 0, i2272, 'leftLegRenderer')
  request.r(i2273[14], i2273[15], 0, i2272, 'rightLegRenderer')
  var i2275 = i2273[16]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.bodyColliders = i2274
  i2272.infectRadius = i2273[17]
  i2272.reachRadius = i2273[18]
  i2272.infectionTolerance = i2273[19]
  i2272.infectJumpVelocity = i2273[20]
  i2272.infectArmFlail = i2273[21]
  i2272.startleHopVelocity = i2273[22]
  i2272.startleLungeVelocity = i2273[23]
  i2272.recoilBodyShare = i2273[24]
  i2272.limbSeverDamage = i2273[25]
  i2272.limbHealthTransfer = i2273[26]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2279 = data
  i2278.color = new pc.Color(i2279[0], i2279[1], i2279[2], i2279[3])
  request.r(i2279[4], i2279[5], 0, i2278, 'sprite')
  i2278.flipX = !!i2279[6]
  i2278.flipY = !!i2279[7]
  i2278.drawMode = i2279[8]
  i2278.size = new pc.Vec2( i2279[9], i2279[10] )
  i2278.tileMode = i2279[11]
  i2278.adaptiveModeThreshold = i2279[12]
  i2278.maskInteraction = i2279[13]
  i2278.spriteSortPoint = i2279[14]
  i2278.enabled = !!i2279[15]
  request.r(i2279[16], i2279[17], 0, i2278, 'sharedMaterial')
  var i2281 = i2279[18]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2278.sharedMaterials = i2280
  i2278.receiveShadows = !!i2279[19]
  i2278.shadowCastingMode = i2279[20]
  i2278.sortingLayerID = i2279[21]
  i2278.sortingOrder = i2279[22]
  i2278.lightmapIndex = i2279[23]
  i2278.lightmapSceneIndex = i2279[24]
  i2278.lightmapScaleOffset = new pc.Vec4( i2279[25], i2279[26], i2279[27], i2279[28] )
  i2278.lightProbeUsage = i2279[29]
  i2278.reflectionProbeUsage = i2279[30]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2285 = data
  i2284.bodyType = i2285[0]
  request.r(i2285[1], i2285[2], 0, i2284, 'material')
  i2284.simulated = !!i2285[3]
  i2284.useAutoMass = !!i2285[4]
  i2284.mass = i2285[5]
  i2284.drag = i2285[6]
  i2284.angularDrag = i2285[7]
  i2284.gravityScale = i2285[8]
  i2284.collisionDetectionMode = i2285[9]
  i2284.sleepMode = i2285[10]
  i2284.constraints = i2285[11]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2287 = data
  i2286.usedByComposite = !!i2287[0]
  i2286.autoTiling = !!i2287[1]
  i2286.size = new pc.Vec2( i2287[2], i2287[3] )
  i2286.edgeRadius = i2287[4]
  i2286.enabled = !!i2287[5]
  i2286.isTrigger = !!i2287[6]
  i2286.usedByEffector = !!i2287[7]
  i2286.density = i2287[8]
  i2286.offset = new pc.Vec2( i2287[9], i2287[10] )
  request.r(i2287[11], i2287[12], 0, i2286, 'material')
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.tagId = i2289[1]
  i2288.enabled = !!i2289[2]
  i2288.isStatic = !!i2289[3]
  i2288.layer = i2289[4]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2291 = data
  i2290.useLimits = !!i2291[0]
  i2290.limits = request.d('UnityEngine.JointAngleLimits2D', i2291[1], i2290.limits)
  i2290.useMotor = !!i2291[2]
  i2290.motor = request.d('UnityEngine.JointMotor2D', i2291[3], i2290.motor)
  i2290.anchor = new pc.Vec2( i2291[4], i2291[5] )
  i2290.connectedAnchor = new pc.Vec2( i2291[6], i2291[7] )
  i2290.autoConfigureConnectedAnchor = !!i2291[8]
  request.r(i2291[9], i2291[10], 0, i2290, 'connectedBody')
  i2290.breakForce = i2291[11]
  i2290.breakTorque = i2291[12]
  i2290.enableCollision = !!i2291[13]
  i2290.enabled = !!i2291[14]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2293 = data
  i2292.usedByComposite = !!i2293[0]
  i2292.autoTiling = !!i2293[1]
  var i2295 = i2293[2]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
  var i2297 = i2295[i + 0]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
    i2296.push( new pc.Vec2( i2297[i + 0], i2297[i + 1] ) );
  }
    i2294.push( i2296 );
  }
  i2292.points = i2294
  i2292.enabled = !!i2293[3]
  i2292.isTrigger = !!i2293[4]
  i2292.usedByEffector = !!i2293[5]
  i2292.density = i2293[6]
  i2292.offset = new pc.Vec2( i2293[7], i2293[8] )
  request.r(i2293[9], i2293[10], 0, i2292, 'material')
  return i2292
}

Deserializers["Game.Gameplay.CreatureCollisionRelay"] = function (request, data, root) {
  var i2304 = root || request.c( 'Game.Gameplay.CreatureCollisionRelay' )
  var i2305 = data
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2306 = root || new pc.UnityMaterial()
  var i2307 = data
  i2306.name = i2307[0]
  request.r(i2307[1], i2307[2], 0, i2306, 'shader')
  i2306.renderQueue = i2307[3]
  i2306.enableInstancing = !!i2307[4]
  var i2309 = i2307[5]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2309[i + 0]) );
  }
  i2306.floatParameters = i2308
  var i2311 = i2307[6]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2311[i + 0]) );
  }
  i2306.colorParameters = i2310
  var i2313 = i2307[7]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2313[i + 0]) );
  }
  i2306.vectorParameters = i2312
  var i2315 = i2307[8]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2315[i + 0]) );
  }
  i2306.textureParameters = i2314
  var i2317 = i2307[9]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2317[i + 0]) );
  }
  i2306.materialFlags = i2316
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.value = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.value = new pc.Color(i2325[1], i2325[2], i2325[3], i2325[4])
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2329 = data
  i2328.name = i2329[0]
  i2328.value = new pc.Vec4( i2329[1], i2329[2], i2329[3], i2329[4] )
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2333 = data
  i2332.name = i2333[0]
  request.r(i2333[1], i2333[2], 0, i2332, 'value')
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.enabled = !!i2337[1]
  return i2336
}

Deserializers["Game.Gameplay.WeaponEntity"] = function (request, data, root) {
  var i2338 = root || request.c( 'Game.Gameplay.WeaponEntity' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'spriteRenderer')
  request.r(i2339[2], i2339[3], 0, i2338, 'box')
  request.r(i2339[4], i2339[5], 0, i2338, 'body')
  i2338.fireAlignDegrees = i2339[6]
  request.r(i2339[7], i2339[8], 0, i2338, 'projectilePrefab')
  return i2338
}

Deserializers["Game.Gameplay.ProjectileEntity"] = function (request, data, root) {
  var i2340 = root || request.c( 'Game.Gameplay.ProjectileEntity' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'body')
  request.r(i2341[2], i2341[3], 0, i2340, 'spriteRenderer')
  i2340.lifetime = i2341[4]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2343 = data
  i2342.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2343[0], i2342.main)
  i2342.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2343[1], i2342.colorBySpeed)
  i2342.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2343[2], i2342.colorOverLifetime)
  i2342.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2343[3], i2342.emission)
  i2342.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2343[4], i2342.rotationBySpeed)
  i2342.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2343[5], i2342.rotationOverLifetime)
  i2342.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2343[6], i2342.shape)
  i2342.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2343[7], i2342.sizeBySpeed)
  i2342.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2343[8], i2342.sizeOverLifetime)
  i2342.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2343[9], i2342.textureSheetAnimation)
  i2342.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2343[10], i2342.velocityOverLifetime)
  i2342.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2343[11], i2342.noise)
  i2342.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2343[12], i2342.inheritVelocity)
  i2342.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2343[13], i2342.forceOverLifetime)
  i2342.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2343[14], i2342.limitVelocityOverLifetime)
  i2342.useAutoRandomSeed = !!i2343[15]
  i2342.randomSeed = i2343[16]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2344 = root || new pc.ParticleSystemMain()
  var i2345 = data
  i2344.duration = i2345[0]
  i2344.loop = !!i2345[1]
  i2344.prewarm = !!i2345[2]
  i2344.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[3], i2344.startDelay)
  i2344.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[4], i2344.startLifetime)
  i2344.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[5], i2344.startSpeed)
  i2344.startSize3D = !!i2345[6]
  i2344.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[7], i2344.startSizeX)
  i2344.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[8], i2344.startSizeY)
  i2344.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[9], i2344.startSizeZ)
  i2344.startRotation3D = !!i2345[10]
  i2344.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[11], i2344.startRotationX)
  i2344.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[12], i2344.startRotationY)
  i2344.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[13], i2344.startRotationZ)
  i2344.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2345[14], i2344.startColor)
  i2344.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[15], i2344.gravityModifier)
  i2344.simulationSpace = i2345[16]
  request.r(i2345[17], i2345[18], 0, i2344, 'customSimulationSpace')
  i2344.simulationSpeed = i2345[19]
  i2344.useUnscaledTime = !!i2345[20]
  i2344.scalingMode = i2345[21]
  i2344.playOnAwake = !!i2345[22]
  i2344.maxParticles = i2345[23]
  i2344.emitterVelocityMode = i2345[24]
  i2344.stopAction = i2345[25]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2346 = root || new pc.MinMaxCurve()
  var i2347 = data
  i2346.mode = i2347[0]
  i2346.curveMin = new pc.AnimationCurve( { keys_flow: i2347[1] } )
  i2346.curveMax = new pc.AnimationCurve( { keys_flow: i2347[2] } )
  i2346.curveMultiplier = i2347[3]
  i2346.constantMin = i2347[4]
  i2346.constantMax = i2347[5]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2348 = root || new pc.MinMaxGradient()
  var i2349 = data
  i2348.mode = i2349[0]
  i2348.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2349[1], i2348.gradientMin)
  i2348.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2349[2], i2348.gradientMax)
  i2348.colorMin = new pc.Color(i2349[3], i2349[4], i2349[5], i2349[6])
  i2348.colorMax = new pc.Color(i2349[7], i2349[8], i2349[9], i2349[10])
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2351 = data
  i2350.mode = i2351[0]
  var i2353 = i2351[1]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2353[i + 0]) );
  }
  i2350.colorKeys = i2352
  var i2355 = i2351[2]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2355[i + 0]) );
  }
  i2350.alphaKeys = i2354
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2356 = root || new pc.ParticleSystemColorBySpeed()
  var i2357 = data
  i2356.enabled = !!i2357[0]
  i2356.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2357[1], i2356.color)
  i2356.range = new pc.Vec2( i2357[2], i2357[3] )
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2361 = data
  i2360.color = new pc.Color(i2361[0], i2361[1], i2361[2], i2361[3])
  i2360.time = i2361[4]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2365 = data
  i2364.alpha = i2365[0]
  i2364.time = i2365[1]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2366 = root || new pc.ParticleSystemColorOverLifetime()
  var i2367 = data
  i2366.enabled = !!i2367[0]
  i2366.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2367[1], i2366.color)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2368 = root || new pc.ParticleSystemEmitter()
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[1], i2368.rateOverTime)
  i2368.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2369[2], i2368.rateOverDistance)
  var i2371 = i2369[3]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2371[i + 0]) );
  }
  i2368.bursts = i2370
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemBurst()
  var i2375 = data
  i2374.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[0], i2374.count)
  i2374.cycleCount = i2375[1]
  i2374.minCount = i2375[2]
  i2374.maxCount = i2375[3]
  i2374.repeatInterval = i2375[4]
  i2374.time = i2375[5]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2376 = root || new pc.ParticleSystemRotationBySpeed()
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[1], i2376.x)
  i2376.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[2], i2376.y)
  i2376.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[3], i2376.z)
  i2376.separateAxes = !!i2377[4]
  i2376.range = new pc.Vec2( i2377[5], i2377[6] )
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2379 = data
  i2378.enabled = !!i2379[0]
  i2378.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[1], i2378.x)
  i2378.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[2], i2378.y)
  i2378.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[3], i2378.z)
  i2378.separateAxes = !!i2379[4]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemShape()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.shapeType = i2381[1]
  i2380.randomDirectionAmount = i2381[2]
  i2380.sphericalDirectionAmount = i2381[3]
  i2380.randomPositionAmount = i2381[4]
  i2380.alignToDirection = !!i2381[5]
  i2380.radius = i2381[6]
  i2380.radiusMode = i2381[7]
  i2380.radiusSpread = i2381[8]
  i2380.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[9], i2380.radiusSpeed)
  i2380.radiusThickness = i2381[10]
  i2380.angle = i2381[11]
  i2380.length = i2381[12]
  i2380.boxThickness = new pc.Vec3( i2381[13], i2381[14], i2381[15] )
  i2380.meshShapeType = i2381[16]
  request.r(i2381[17], i2381[18], 0, i2380, 'mesh')
  request.r(i2381[19], i2381[20], 0, i2380, 'meshRenderer')
  request.r(i2381[21], i2381[22], 0, i2380, 'skinnedMeshRenderer')
  i2380.useMeshMaterialIndex = !!i2381[23]
  i2380.meshMaterialIndex = i2381[24]
  i2380.useMeshColors = !!i2381[25]
  i2380.normalOffset = i2381[26]
  i2380.arc = i2381[27]
  i2380.arcMode = i2381[28]
  i2380.arcSpread = i2381[29]
  i2380.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[30], i2380.arcSpeed)
  i2380.donutRadius = i2381[31]
  i2380.position = new pc.Vec3( i2381[32], i2381[33], i2381[34] )
  i2380.rotation = new pc.Vec3( i2381[35], i2381[36], i2381[37] )
  i2380.scale = new pc.Vec3( i2381[38], i2381[39], i2381[40] )
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemSizeBySpeed()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[1], i2382.x)
  i2382.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[2], i2382.y)
  i2382.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[3], i2382.z)
  i2382.separateAxes = !!i2383[4]
  i2382.range = new pc.Vec2( i2383[5], i2383[6] )
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2384 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2385 = data
  i2384.enabled = !!i2385[0]
  i2384.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[1], i2384.x)
  i2384.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[2], i2384.y)
  i2384.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2385[3], i2384.z)
  i2384.separateAxes = !!i2385[4]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2386 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.mode = i2387[1]
  i2386.animation = i2387[2]
  i2386.numTilesX = i2387[3]
  i2386.numTilesY = i2387[4]
  i2386.useRandomRow = !!i2387[5]
  i2386.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[6], i2386.frameOverTime)
  i2386.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2387[7], i2386.startFrame)
  i2386.cycleCount = i2387[8]
  i2386.rowIndex = i2387[9]
  i2386.flipU = i2387[10]
  i2386.flipV = i2387[11]
  i2386.spriteCount = i2387[12]
  var i2389 = i2387[13]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 2, i2388, '')
  }
  i2386.sprites = i2388
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[1], i2392.x)
  i2392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.y)
  i2392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[3], i2392.z)
  i2392.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[4], i2392.radial)
  i2392.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[5], i2392.speedModifier)
  i2392.space = i2393[6]
  i2392.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[7], i2392.orbitalX)
  i2392.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[8], i2392.orbitalY)
  i2392.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[9], i2392.orbitalZ)
  i2392.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[10], i2392.orbitalOffsetX)
  i2392.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[11], i2392.orbitalOffsetY)
  i2392.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[12], i2392.orbitalOffsetZ)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemNoise()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.separateAxes = !!i2395[1]
  i2394.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.strengthX)
  i2394.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.strengthY)
  i2394.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[4], i2394.strengthZ)
  i2394.frequency = i2395[5]
  i2394.damping = !!i2395[6]
  i2394.octaveCount = i2395[7]
  i2394.octaveMultiplier = i2395[8]
  i2394.octaveScale = i2395[9]
  i2394.quality = i2395[10]
  i2394.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[11], i2394.scrollSpeed)
  i2394.scrollSpeedMultiplier = i2395[12]
  i2394.remapEnabled = !!i2395[13]
  i2394.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[14], i2394.remapX)
  i2394.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[15], i2394.remapY)
  i2394.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[16], i2394.remapZ)
  i2394.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[17], i2394.positionAmount)
  i2394.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[18], i2394.rotationAmount)
  i2394.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[19], i2394.sizeAmount)
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemInheritVelocity()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.mode = i2397[1]
  i2396.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.curve)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2398 = root || new pc.ParticleSystemForceOverLifetime()
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[1], i2398.x)
  i2398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[2], i2398.y)
  i2398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2399[3], i2398.z)
  i2398.space = i2399[4]
  i2398.randomized = !!i2399[5]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2401 = data
  i2400.enabled = !!i2401[0]
  i2400.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[1], i2400.limit)
  i2400.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[2], i2400.limitX)
  i2400.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[3], i2400.limitY)
  i2400.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[4], i2400.limitZ)
  i2400.dampen = i2401[5]
  i2400.separateAxes = !!i2401[6]
  i2400.space = i2401[7]
  i2400.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[8], i2400.drag)
  i2400.multiplyDragByParticleSize = !!i2401[9]
  i2400.multiplyDragByParticleVelocity = !!i2401[10]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'mesh')
  i2402.meshCount = i2403[2]
  i2402.activeVertexStreamsCount = i2403[3]
  i2402.alignment = i2403[4]
  i2402.renderMode = i2403[5]
  i2402.sortMode = i2403[6]
  i2402.lengthScale = i2403[7]
  i2402.velocityScale = i2403[8]
  i2402.cameraVelocityScale = i2403[9]
  i2402.normalDirection = i2403[10]
  i2402.sortingFudge = i2403[11]
  i2402.minParticleSize = i2403[12]
  i2402.maxParticleSize = i2403[13]
  i2402.pivot = new pc.Vec3( i2403[14], i2403[15], i2403[16] )
  request.r(i2403[17], i2403[18], 0, i2402, 'trailMaterial')
  i2402.applyActiveColorSpace = !!i2403[19]
  i2402.enabled = !!i2403[20]
  request.r(i2403[21], i2403[22], 0, i2402, 'sharedMaterial')
  var i2405 = i2403[23]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 2) {
  request.r(i2405[i + 0], i2405[i + 1], 2, i2404, '')
  }
  i2402.sharedMaterials = i2404
  i2402.receiveShadows = !!i2403[24]
  i2402.shadowCastingMode = i2403[25]
  i2402.sortingLayerID = i2403[26]
  i2402.sortingOrder = i2403[27]
  i2402.lightmapIndex = i2403[28]
  i2402.lightmapSceneIndex = i2403[29]
  i2402.lightmapScaleOffset = new pc.Vec4( i2403[30], i2403[31], i2403[32], i2403[33] )
  i2402.lightProbeUsage = i2403[34]
  i2402.reflectionProbeUsage = i2403[35]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.halfPrecision = !!i2407[1]
  i2406.useSimplification = !!i2407[2]
  i2406.useUInt32IndexFormat = !!i2407[3]
  i2406.vertexCount = i2407[4]
  i2406.aabb = i2407[5]
  var i2409 = i2407[6]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( !!i2409[i + 0] );
  }
  i2406.streams = i2408
  i2406.vertices = i2407[7]
  var i2411 = i2407[8]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2411[i + 0]) );
  }
  i2406.subMeshes = i2410
  var i2413 = i2407[9]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 16) {
    i2412.push( new pc.Mat4().setData(i2413[i + 0], i2413[i + 1], i2413[i + 2], i2413[i + 3],  i2413[i + 4], i2413[i + 5], i2413[i + 6], i2413[i + 7],  i2413[i + 8], i2413[i + 9], i2413[i + 10], i2413[i + 11],  i2413[i + 12], i2413[i + 13], i2413[i + 14], i2413[i + 15]) );
  }
  i2406.bindposes = i2412
  var i2415 = i2407[10]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2415[i + 0]) );
  }
  i2406.blendShapes = i2414
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2421 = data
  i2420.triangles = i2421[0]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2427 = data
  i2426.name = i2427[0]
  var i2429 = i2427[1]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2429[i + 0]) );
  }
  i2426.frames = i2428
  return i2426
}

Deserializers["Game.Gameplay.WearableEntity"] = function (request, data, root) {
  var i2430 = root || request.c( 'Game.Gameplay.WearableEntity' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'spriteRenderer')
  request.r(i2431[2], i2431[3], 0, i2430, 'box')
  request.r(i2431[4], i2431[5], 0, i2430, 'body')
  return i2430
}

Deserializers["Game.Gameplay.PropEntity"] = function (request, data, root) {
  var i2432 = root || request.c( 'Game.Gameplay.PropEntity' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'spriteRenderer')
  request.r(i2433[2], i2433[3], 0, i2432, 'box')
  return i2432
}

Deserializers["Game.Gameplay.ItemSpawnMotion"] = function (request, data, root) {
  var i2434 = root || request.c( 'Game.Gameplay.ItemSpawnMotion' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'body')
  i2434.sidewaysSpeed = new pc.Vec2( i2435[2], i2435[3] )
  i2434.upwardSpeed = new pc.Vec2( i2435[4], i2435[5] )
  i2434.maxSpin = i2435[6]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i2437 = data
  i2436.size = new pc.Vec2( i2437[0], i2437[1] )
  i2436.direction = i2437[2]
  i2436.enabled = !!i2437[3]
  i2436.isTrigger = !!i2437[4]
  i2436.usedByEffector = !!i2437[5]
  i2436.density = i2437[6]
  i2436.offset = new pc.Vec2( i2437[7], i2437[8] )
  request.r(i2437[9], i2437[10], 0, i2436, 'material')
  return i2436
}

Deserializers["Game.Gameplay.ExplosiveEntity"] = function (request, data, root) {
  var i2438 = root || request.c( 'Game.Gameplay.ExplosiveEntity' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'spriteRenderer')
  return i2438
}

Deserializers["Game.Gameplay.GrenadePinEjector"] = function (request, data, root) {
  var i2440 = root || request.c( 'Game.Gameplay.GrenadePinEjector' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'pinGameObject')
  i2440.ejectSpeed = new pc.Vec2( i2441[2], i2441[3] )
  i2440.maxSpin = i2441[4]
  i2440.fadeDelay = i2441[5]
  i2440.fadeDuration = i2441[6]
  return i2440
}

Deserializers["Game.Gameplay.TileEntity"] = function (request, data, root) {
  var i2442 = root || request.c( 'Game.Gameplay.TileEntity' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'spriteRenderer')
  request.r(i2443[2], i2443[3], 0, i2442, 'box')
  var i2445 = i2443[4]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.crackStages = i2444
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2447 = data
  i2446.pivot = new pc.Vec2( i2447[0], i2447[1] )
  i2446.anchorMin = new pc.Vec2( i2447[2], i2447[3] )
  i2446.anchorMax = new pc.Vec2( i2447[4], i2447[5] )
  i2446.sizeDelta = new pc.Vec2( i2447[6], i2447[7] )
  i2446.anchoredPosition3D = new pc.Vec3( i2447[8], i2447[9], i2447[10] )
  i2446.rotation = new pc.Quat(i2447[11], i2447[12], i2447[13], i2447[14])
  i2446.scale = new pc.Vec3( i2447[15], i2447[16], i2447[17] )
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2449 = data
  i2448.planeDistance = i2449[0]
  i2448.referencePixelsPerUnit = i2449[1]
  i2448.isFallbackOverlay = !!i2449[2]
  i2448.renderMode = i2449[3]
  i2448.renderOrder = i2449[4]
  i2448.sortingLayerName = i2449[5]
  i2448.sortingOrder = i2449[6]
  i2448.scaleFactor = i2449[7]
  request.r(i2449[8], i2449[9], 0, i2448, 'worldCamera')
  i2448.overrideSorting = !!i2449[10]
  i2448.pixelPerfect = !!i2449[11]
  i2448.targetDisplay = i2449[12]
  i2448.overridePixelPerfect = !!i2449[13]
  i2448.enabled = !!i2449[14]
  return i2448
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2451 = data
  i2450.m_UiScaleMode = i2451[0]
  i2450.m_ReferencePixelsPerUnit = i2451[1]
  i2450.m_ScaleFactor = i2451[2]
  i2450.m_ReferenceResolution = new pc.Vec2( i2451[3], i2451[4] )
  i2450.m_ScreenMatchMode = i2451[5]
  i2450.m_MatchWidthOrHeight = i2451[6]
  i2450.m_PhysicalUnit = i2451[7]
  i2450.m_FallbackScreenDPI = i2451[8]
  i2450.m_DefaultSpriteDPI = i2451[9]
  i2450.m_DynamicPixelsPerUnit = i2451[10]
  i2450.m_PresetInfoIsWorld = !!i2451[11]
  return i2450
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2453 = data
  i2452.m_IgnoreReversedGraphics = !!i2453[0]
  i2452.m_BlockingObjects = i2453[1]
  i2452.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2453[2] )
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2455 = data
  i2454.m_Alpha = i2455[0]
  i2454.m_Interactable = !!i2455[1]
  i2454.m_BlocksRaycasts = !!i2455[2]
  i2454.m_IgnoreParentGroups = !!i2455[3]
  i2454.enabled = !!i2455[4]
  return i2454
}

Deserializers["Game.UI.ItemUnlockPopup"] = function (request, data, root) {
  var i2456 = root || request.c( 'Game.UI.ItemUnlockPopup' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'group')
  request.r(i2457[2], i2457[3], 0, i2456, 'panel')
  request.r(i2457[4], i2457[5], 0, i2456, 'icon')
  request.r(i2457[6], i2457[7], 0, i2456, 'title')
  request.r(i2457[8], i2457[9], 0, i2456, 'body')
  request.r(i2457[10], i2457[11], 0, i2456, 'timeTaskIcon')
  request.r(i2457[12], i2457[13], 0, i2456, 'killTaskIcon')
  request.r(i2457[14], i2457[15], 0, i2456, 'normalCreatureIcon')
  request.r(i2457[16], i2457[17], 0, i2456, 'zombieCreatureIcon')
  request.r(i2457[18], i2457[19], 0, i2456, 'watchButton')
  request.r(i2457[20], i2457[21], 0, i2456, 'closeButton')
  request.r(i2457[22], i2457[23], 0, i2456, 'closeLabel')
  i2456.closeLabelWithWatch = i2457[24]
  i2456.closeLabelTaskOnly = i2457[25]
  request.r(i2457[26], i2457[27], 0, i2456, 'dimButton')
  i2456.fadeDuration = i2457[28]
  i2456.openFromScale = i2457[29]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2459 = data
  i2458.cullTransparentMesh = !!i2459[0]
  return i2458
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.UI.Image' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'm_Sprite')
  i2460.m_Type = i2461[2]
  i2460.m_PreserveAspect = !!i2461[3]
  i2460.m_FillCenter = !!i2461[4]
  i2460.m_FillMethod = i2461[5]
  i2460.m_FillAmount = i2461[6]
  i2460.m_FillClockwise = !!i2461[7]
  i2460.m_FillOrigin = i2461[8]
  i2460.m_UseSpriteMesh = !!i2461[9]
  i2460.m_PixelsPerUnitMultiplier = i2461[10]
  request.r(i2461[11], i2461[12], 0, i2460, 'm_Material')
  i2460.m_Maskable = !!i2461[13]
  i2460.m_Color = new pc.Color(i2461[14], i2461[15], i2461[16], i2461[17])
  i2460.m_RaycastTarget = !!i2461[18]
  i2460.m_RaycastPadding = new pc.Vec4( i2461[19], i2461[20], i2461[21], i2461[22] )
  return i2460
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.UI.Button' )
  var i2463 = data
  i2462.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2463[0], i2462.m_OnClick)
  i2462.m_Navigation = request.d('UnityEngine.UI.Navigation', i2463[1], i2462.m_Navigation)
  i2462.m_Transition = i2463[2]
  i2462.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2463[3], i2462.m_Colors)
  i2462.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2463[4], i2462.m_SpriteState)
  i2462.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2463[5], i2462.m_AnimationTriggers)
  i2462.m_Interactable = !!i2463[6]
  request.r(i2463[7], i2463[8], 0, i2462, 'm_TargetGraphic')
  return i2462
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2465 = data
  i2464.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2465[0], i2464.m_PersistentCalls)
  return i2464
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.add(request.d('UnityEngine.Events.PersistentCall', i2469[i + 0]));
  }
  i2466.m_Calls = i2468
  return i2466
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'm_Target')
  i2472.m_TargetAssemblyTypeName = i2473[2]
  i2472.m_MethodName = i2473[3]
  i2472.m_Mode = i2473[4]
  i2472.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2473[5], i2472.m_Arguments)
  i2472.m_CallState = i2473[6]
  return i2472
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2475 = data
  i2474.m_Mode = i2475[0]
  i2474.m_WrapAround = !!i2475[1]
  request.r(i2475[2], i2475[3], 0, i2474, 'm_SelectOnUp')
  request.r(i2475[4], i2475[5], 0, i2474, 'm_SelectOnDown')
  request.r(i2475[6], i2475[7], 0, i2474, 'm_SelectOnLeft')
  request.r(i2475[8], i2475[9], 0, i2474, 'm_SelectOnRight')
  return i2474
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2477 = data
  i2476.m_NormalColor = new pc.Color(i2477[0], i2477[1], i2477[2], i2477[3])
  i2476.m_HighlightedColor = new pc.Color(i2477[4], i2477[5], i2477[6], i2477[7])
  i2476.m_PressedColor = new pc.Color(i2477[8], i2477[9], i2477[10], i2477[11])
  i2476.m_SelectedColor = new pc.Color(i2477[12], i2477[13], i2477[14], i2477[15])
  i2476.m_DisabledColor = new pc.Color(i2477[16], i2477[17], i2477[18], i2477[19])
  i2476.m_ColorMultiplier = i2477[20]
  i2476.m_FadeDuration = i2477[21]
  return i2476
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'm_HighlightedSprite')
  request.r(i2479[2], i2479[3], 0, i2478, 'm_PressedSprite')
  request.r(i2479[4], i2479[5], 0, i2478, 'm_SelectedSprite')
  request.r(i2479[6], i2479[7], 0, i2478, 'm_DisabledSprite')
  return i2478
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2481 = data
  i2480.m_NormalTrigger = i2481[0]
  i2480.m_HighlightedTrigger = i2481[1]
  i2480.m_PressedTrigger = i2481[2]
  i2480.m_SelectedTrigger = i2481[3]
  i2480.m_DisabledTrigger = i2481[4]
  return i2480
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2483 = data
  i2482.m_hasFontAssetChanged = !!i2483[0]
  request.r(i2483[1], i2483[2], 0, i2482, 'm_baseMaterial')
  i2482.m_maskOffset = new pc.Vec4( i2483[3], i2483[4], i2483[5], i2483[6] )
  i2482.m_text = i2483[7]
  i2482.m_isRightToLeft = !!i2483[8]
  request.r(i2483[9], i2483[10], 0, i2482, 'm_fontAsset')
  request.r(i2483[11], i2483[12], 0, i2482, 'm_sharedMaterial')
  var i2485 = i2483[13]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2482.m_fontSharedMaterials = i2484
  request.r(i2483[14], i2483[15], 0, i2482, 'm_fontMaterial')
  var i2487 = i2483[16]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2482.m_fontMaterials = i2486
  i2482.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2483[17], i2483[18], i2483[19], i2483[20])
  i2482.m_fontColor = new pc.Color(i2483[21], i2483[22], i2483[23], i2483[24])
  i2482.m_enableVertexGradient = !!i2483[25]
  i2482.m_colorMode = i2483[26]
  i2482.m_fontColorGradient = request.d('TMPro.VertexGradient', i2483[27], i2482.m_fontColorGradient)
  request.r(i2483[28], i2483[29], 0, i2482, 'm_fontColorGradientPreset')
  request.r(i2483[30], i2483[31], 0, i2482, 'm_spriteAsset')
  i2482.m_tintAllSprites = !!i2483[32]
  request.r(i2483[33], i2483[34], 0, i2482, 'm_StyleSheet')
  i2482.m_TextStyleHashCode = i2483[35]
  i2482.m_overrideHtmlColors = !!i2483[36]
  i2482.m_faceColor = UnityEngine.Color32.ConstructColor(i2483[37], i2483[38], i2483[39], i2483[40])
  i2482.m_fontSize = i2483[41]
  i2482.m_fontSizeBase = i2483[42]
  i2482.m_fontWeight = i2483[43]
  i2482.m_enableAutoSizing = !!i2483[44]
  i2482.m_fontSizeMin = i2483[45]
  i2482.m_fontSizeMax = i2483[46]
  i2482.m_fontStyle = i2483[47]
  i2482.m_HorizontalAlignment = i2483[48]
  i2482.m_VerticalAlignment = i2483[49]
  i2482.m_textAlignment = i2483[50]
  i2482.m_characterSpacing = i2483[51]
  i2482.m_characterHorizontalScale = i2483[52]
  i2482.m_wordSpacing = i2483[53]
  i2482.m_lineSpacing = i2483[54]
  i2482.m_lineSpacingMax = i2483[55]
  i2482.m_paragraphSpacing = i2483[56]
  i2482.m_charWidthMaxAdj = i2483[57]
  i2482.m_TextWrappingMode = i2483[58]
  i2482.m_wordWrappingRatios = i2483[59]
  i2482.m_overflowMode = i2483[60]
  request.r(i2483[61], i2483[62], 0, i2482, 'm_linkedTextComponent')
  request.r(i2483[63], i2483[64], 0, i2482, 'parentLinkedComponent')
  i2482.m_enableKerning = !!i2483[65]
  var i2489 = i2483[66]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(i2489[i + 0]);
  }
  i2482.m_ActiveFontFeatures = i2488
  i2482.m_enableExtraPadding = !!i2483[67]
  i2482.checkPaddingRequired = !!i2483[68]
  i2482.m_isRichText = !!i2483[69]
  i2482.m_parseCtrlCharacters = !!i2483[70]
  i2482.m_isOrthographic = !!i2483[71]
  i2482.m_isCullingEnabled = !!i2483[72]
  i2482.m_horizontalMapping = i2483[73]
  i2482.m_verticalMapping = i2483[74]
  i2482.m_uvLineOffset = i2483[75]
  i2482.m_geometrySortingOrder = i2483[76]
  i2482.m_IsTextObjectScaleStatic = !!i2483[77]
  i2482.m_VertexBufferAutoSizeReduction = !!i2483[78]
  i2482.m_useMaxVisibleDescender = !!i2483[79]
  i2482.m_pageToDisplay = i2483[80]
  i2482.m_margin = new pc.Vec4( i2483[81], i2483[82], i2483[83], i2483[84] )
  i2482.m_isUsingLegacyAnimationComponent = !!i2483[85]
  i2482.m_isVolumetricText = !!i2483[86]
  request.r(i2483[87], i2483[88], 0, i2482, 'm_Material')
  i2482.m_EmojiFallbackSupport = !!i2483[89]
  i2482.m_Maskable = !!i2483[90]
  i2482.m_Color = new pc.Color(i2483[91], i2483[92], i2483[93], i2483[94])
  i2482.m_RaycastTarget = !!i2483[95]
  i2482.m_RaycastPadding = new pc.Vec4( i2483[96], i2483[97], i2483[98], i2483[99] )
  return i2482
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.VertexGradient' )
  var i2491 = data
  i2490.topLeft = new pc.Color(i2491[0], i2491[1], i2491[2], i2491[3])
  i2490.topRight = new pc.Color(i2491[4], i2491[5], i2491[6], i2491[7])
  i2490.bottomLeft = new pc.Color(i2491[8], i2491[9], i2491[10], i2491[11])
  i2490.bottomRight = new pc.Color(i2491[12], i2491[13], i2491[14], i2491[15])
  return i2490
}

Deserializers["Game.UI.UnlockToast"] = function (request, data, root) {
  var i2494 = root || request.c( 'Game.UI.UnlockToast' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'group')
  request.r(i2495[2], i2495[3], 0, i2494, 'panel')
  request.r(i2495[4], i2495[5], 0, i2494, 'icon')
  request.r(i2495[6], i2495[7], 0, i2494, 'title')
  request.r(i2495[8], i2495[9], 0, i2494, 'itemName')
  i2494.slideDuration = i2495[10]
  i2494.holdDuration = i2495[11]
  i2494.slideDistance = i2495[12]
  return i2494
}

Deserializers["Game.UI.CategoryTabBar"] = function (request, data, root) {
  var i2496 = root || request.c( 'Game.UI.CategoryTabBar' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'tabButtonPrefab')
  request.r(i2497[2], i2497[3], 0, i2496, 'container')
  return i2496
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'm_Content')
  i2498.m_Horizontal = !!i2499[2]
  i2498.m_Vertical = !!i2499[3]
  i2498.m_MovementType = i2499[4]
  i2498.m_Elasticity = i2499[5]
  i2498.m_Inertia = !!i2499[6]
  i2498.m_DecelerationRate = i2499[7]
  i2498.m_ScrollSensitivity = i2499[8]
  request.r(i2499[9], i2499[10], 0, i2498, 'm_Viewport')
  request.r(i2499[11], i2499[12], 0, i2498, 'm_HorizontalScrollbar')
  request.r(i2499[13], i2499[14], 0, i2498, 'm_VerticalScrollbar')
  i2498.m_HorizontalScrollbarVisibility = i2499[15]
  i2498.m_VerticalScrollbarVisibility = i2499[16]
  i2498.m_HorizontalScrollbarSpacing = i2499[17]
  i2498.m_VerticalScrollbarSpacing = i2499[18]
  i2498.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2499[19], i2498.m_OnValueChanged)
  return i2498
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2501 = data
  i2500.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2501[0], i2500.m_PersistentCalls)
  return i2500
}

Deserializers["Game.UI.NonDrawingGraphic"] = function (request, data, root) {
  var i2502 = root || request.c( 'Game.UI.NonDrawingGraphic' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'm_Material')
  i2502.m_Color = new pc.Color(i2503[2], i2503[3], i2503[4], i2503[5])
  i2502.m_RaycastTarget = !!i2503[6]
  i2502.m_RaycastPadding = new pc.Vec4( i2503[7], i2503[8], i2503[9], i2503[10] )
  return i2502
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i2505 = data
  i2504.m_Padding = new pc.Vec4( i2505[0], i2505[1], i2505[2], i2505[3] )
  i2504.m_Softness = new pc.Vec2( i2505[4], i2505[5] )
  return i2504
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2507 = data
  i2506.m_Spacing = i2507[0]
  i2506.m_ChildForceExpandWidth = !!i2507[1]
  i2506.m_ChildForceExpandHeight = !!i2507[2]
  i2506.m_ChildControlWidth = !!i2507[3]
  i2506.m_ChildControlHeight = !!i2507[4]
  i2506.m_ChildScaleWidth = !!i2507[5]
  i2506.m_ChildScaleHeight = !!i2507[6]
  i2506.m_ReverseArrangement = !!i2507[7]
  i2506.m_Padding = UnityEngine.RectOffset.FromPaddings(i2507[8], i2507[9], i2507[10], i2507[11])
  i2506.m_ChildAlignment = i2507[12]
  return i2506
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2509 = data
  i2508.m_IgnoreLayout = !!i2509[0]
  i2508.m_MinWidth = i2509[1]
  i2508.m_MinHeight = i2509[2]
  i2508.m_PreferredWidth = i2509[3]
  i2508.m_PreferredHeight = i2509[4]
  i2508.m_FlexibleWidth = i2509[5]
  i2508.m_FlexibleHeight = i2509[6]
  i2508.m_LayoutPriority = i2509[7]
  return i2508
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2511 = data
  i2510.m_HorizontalFit = i2511[0]
  i2510.m_VerticalFit = i2511[1]
  return i2510
}

Deserializers["Game.UI.PaletteGrid"] = function (request, data, root) {
  var i2512 = root || request.c( 'Game.UI.PaletteGrid' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'cardPrefab')
  request.r(i2513[2], i2513[3], 0, i2512, 'container')
  return i2512
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'm_Texture')
  i2514.m_UVRect = UnityEngine.Rect.MinMaxRect(i2515[2], i2515[3], i2515[4], i2515[5])
  request.r(i2515[6], i2515[7], 0, i2514, 'm_Material')
  i2514.m_Maskable = !!i2515[8]
  i2514.m_Color = new pc.Color(i2515[9], i2515[10], i2515[11], i2515[12])
  i2514.m_RaycastTarget = !!i2515[13]
  i2514.m_RaycastPadding = new pc.Vec4( i2515[14], i2515[15], i2515[16], i2515[17] )
  return i2514
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i2517 = data
  i2516.m_StartCorner = i2517[0]
  i2516.m_StartAxis = i2517[1]
  i2516.m_CellSize = new pc.Vec2( i2517[2], i2517[3] )
  i2516.m_Spacing = new pc.Vec2( i2517[4], i2517[5] )
  i2516.m_Constraint = i2517[6]
  i2516.m_ConstraintCount = i2517[7]
  i2516.m_Padding = UnityEngine.RectOffset.FromPaddings(i2517[8], i2517[9], i2517[10], i2517[11])
  i2516.m_ChildAlignment = i2517[12]
  return i2516
}

Deserializers["Game.UI.ToolStripPanel"] = function (request, data, root) {
  var i2518 = root || request.c( 'Game.UI.ToolStripPanel' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'collapseButton')
  request.r(i2519[2], i2519[3], 0, i2518, 'collapseIcon')
  request.r(i2519[4], i2519[5], 0, i2518, 'swapButton')
  request.r(i2519[6], i2519[7], 0, i2518, 'deleteButton')
  request.r(i2519[8], i2519[9], 0, i2518, 'linkButton')
  request.r(i2519[10], i2519[11], 0, i2518, 'resetButton')
  request.r(i2519[12], i2519[13], 0, i2518, 'panelToCollapse')
  i2518.collapseDuration = i2519[14]
  i2518.startCollapsed = !!i2519[15]
  i2518.slideDown = !!i2519[16]
  i2518.iconExpandedZ = i2519[17]
  i2518.iconCollapsedZ = i2519[18]
  request.r(i2519[19], i2519[20], 0, i2518, 'swapIcon')
  request.r(i2519[21], i2519[22], 0, i2518, 'swapFacingSprite')
  request.r(i2519[23], i2519[24], 0, i2518, 'swapToBackgroundSprite')
  request.r(i2519[25], i2519[26], 0, i2518, 'swapToSolidSprite')
  request.r(i2519[27], i2519[28], 0, i2518, 'resetIcon')
  i2518.resetSpinDuration = i2519[29]
  request.r(i2519[30], i2519[31], 0, i2518, 'bgReadySprite')
  request.r(i2519[32], i2519[33], 0, i2518, 'bgActiveSprite')
  request.r(i2519[34], i2519[35], 0, i2518, 'bgUnactiveSprite')
  return i2518
}

Deserializers["Game.UI.UIButtonBounce"] = function (request, data, root) {
  var i2520 = root || request.c( 'Game.UI.UIButtonBounce' )
  var i2521 = data
  i2520.pressedScale = i2521[0]
  i2520.pressDuration = i2521[1]
  i2520.releaseDuration = i2521[2]
  i2520.overshoot = i2521[3]
  return i2520
}

Deserializers["Game.UI.SafeAreaFitter"] = function (request, data, root) {
  var i2522 = root || request.c( 'Game.UI.SafeAreaFitter' )
  var i2523 = data
  i2522.reserveBannerSpace = !!i2523[0]
  return i2522
}

Deserializers["Game.UI.CornerMenuPanel"] = function (request, data, root) {
  var i2524 = root || request.c( 'Game.UI.CornerMenuPanel' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'revealedRowRoot')
  request.r(i2525[2], i2525[3], 0, i2524, 'toggleButton')
  request.r(i2525[4], i2525[5], 0, i2524, 'toggleIcon')
  request.r(i2525[6], i2525[7], 0, i2524, 'menuSprite')
  request.r(i2525[8], i2525[9], 0, i2524, 'closeSprite')
  request.r(i2525[10], i2525[11], 0, i2524, 'soundButton')
  request.r(i2525[12], i2525[13], 0, i2524, 'soundIcon')
  request.r(i2525[14], i2525[15], 0, i2524, 'soundOnSprite')
  request.r(i2525[16], i2525[17], 0, i2524, 'soundOffSprite')
  request.r(i2525[18], i2525[19], 0, i2524, 'waterButton')
  request.r(i2525[20], i2525[21], 0, i2524, 'bloodIcon')
  request.r(i2525[22], i2525[23], 0, i2524, 'bloodOnSprite')
  request.r(i2525[24], i2525[25], 0, i2524, 'bloodOffSprite')
  request.r(i2525[26], i2525[27], 0, i2524, 'locationButton')
  i2524.mapSelectionScreenKey = i2525[28]
  request.r(i2525[29], i2525[30], 0, i2524, 'mailButton')
  request.r(i2525[31], i2525[32], 0, i2524, 'mailInteractButton')
  i2524.mailScreenKey = i2525[33]
  i2524.mailSlideOffset = i2525[34]
  var i2527 = i2525[35]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2524.revealSequence = i2526
  i2524.staggerDelay = i2525[36]
  i2524.slideDuration = i2525[37]
  i2524.revealEase = i2525[38]
  i2524.collapseEase = i2525[39]
  return i2524
}

Deserializers["Game.UI.MailButton"] = function (request, data, root) {
  var i2530 = root || request.c( 'Game.UI.MailButton' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'unreadBadge')
  request.r(i2531[2], i2531[3], 0, i2530, 'icon')
  request.r(i2531[4], i2531[5], 0, i2530, 'idleSprite')
  request.r(i2531[6], i2531[7], 0, i2530, 'unreadSprite')
  request.r(i2531[8], i2531[9], 0, i2530, 'collectionPrefab')
  i2530.bobHeight = i2531[10]
  i2530.bobDuration = i2531[11]
  return i2530
}

Deserializers["Game.UI.SideSliderPanel"] = function (request, data, root) {
  var i2532 = root || request.c( 'Game.UI.SideSliderPanel' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'slider')
  i2532.idleDelay = i2533[2]
  i2532.fadeDuration = i2533[3]
  i2532.fadedAlpha = i2533[4]
  request.r(i2533[5], i2533[6], 0, i2532, 'handleIcon')
  i2532.bounceScale = i2533[7]
  i2532.bounceDuration = i2533[8]
  return i2532
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'm_FillRect')
  request.r(i2535[2], i2535[3], 0, i2534, 'm_HandleRect')
  i2534.m_Direction = i2535[4]
  i2534.m_MinValue = i2535[5]
  i2534.m_MaxValue = i2535[6]
  i2534.m_WholeNumbers = !!i2535[7]
  i2534.m_Value = i2535[8]
  i2534.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2535[9], i2534.m_OnValueChanged)
  i2534.m_Navigation = request.d('UnityEngine.UI.Navigation', i2535[10], i2534.m_Navigation)
  i2534.m_Transition = i2535[11]
  i2534.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2535[12], i2534.m_Colors)
  i2534.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2535[13], i2534.m_SpriteState)
  i2534.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2535[14], i2534.m_AnimationTriggers)
  i2534.m_Interactable = !!i2535[15]
  request.r(i2535[16], i2535[17], 0, i2534, 'm_TargetGraphic')
  return i2534
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2537 = data
  i2536.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2537[0], i2536.m_PersistentCalls)
  return i2536
}

Deserializers["Game.UI.WeaponSelectPanel"] = function (request, data, root) {
  var i2538 = root || request.c( 'Game.UI.WeaponSelectPanel' )
  var i2539 = data
  i2538.pickAction = i2539[0]
  request.r(i2539[1], i2539[2], 0, i2538, 'bootstrap')
  var i2541 = i2539[3]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Game.UI.WeaponSelectPanel+Option', i2541[i + 0]) );
  }
  i2538.options = i2540
  request.r(i2539[4], i2539[5], 0, i2538, 'prompt')
  request.r(i2539[6], i2539[7], 0, i2538, 'dropHint')
  request.r(i2539[8], i2539[9], 0, i2538, 'nextPanel')
  i2538.nextPanelDelay = i2539[10]
  i2538.showOnReset = !!i2539[11]
  i2538.hideDelay = i2539[12]
  i2538.hideDuration = i2539[13]
  i2538.hideEase = i2539[14]
  i2538.showDuration = i2539[15]
  i2538.showEase = i2539[16]
  i2538.hideMargin = i2539[17]
  return i2538
}

Deserializers["Game.UI.WeaponSelectPanel+Option"] = function (request, data, root) {
  var i2544 = root || request.c( 'Game.UI.WeaponSelectPanel+Option' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'button')
  request.r(i2545[2], i2545[3], 0, i2544, 'weapon')
  request.r(i2545[4], i2545[5], 0, i2544, 'selectedFrame')
  return i2544
}

Deserializers["Game.UI.WeaponTutorialHand"] = function (request, data, root) {
  var i2546 = root || request.c( 'Game.UI.WeaponTutorialHand' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'hand')
  var i2549 = i2547[2]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 2) {
  request.r(i2549[i + 0], i2549[i + 1], 2, i2548, '')
  }
  i2546.targets = i2548
  i2546.tapOffset = new pc.Vec2( i2547[3], i2547[4] )
  i2546.moveTime = i2547[5]
  i2546.tapTime = i2547[6]
  i2546.holdTime = i2547[7]
  i2546.pressScale = i2547[8]
  return i2546
}

Deserializers["Game.UI.CardRowFit"] = function (request, data, root) {
  var i2550 = root || request.c( 'Game.UI.CardRowFit' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'content')
  i2550.sideMargin = i2551[2]
  i2550.maxScale = i2551[3]
  i2550.baseHeight = i2551[4]
  return i2550
}

Deserializers["Game.UI.TapHintHand"] = function (request, data, root) {
  var i2552 = root || request.c( 'Game.UI.TapHintHand' )
  var i2553 = data
  i2552.pressScale = i2553[0]
  i2552.pressDip = i2553[1]
  i2552.pressTime = i2553[2]
  i2552.releaseTime = i2553[3]
  i2552.holdTime = i2553[4]
  return i2552
}

Deserializers["Game.UI.PlayableIntro"] = function (request, data, root) {
  var i2554 = root || request.c( 'Game.UI.PlayableIntro' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'bootstrap')
  request.r(i2555[2], i2555[3], 0, i2554, 'cameraController')
  request.r(i2555[4], i2555[5], 0, i2554, 'weaponPanel')
  request.r(i2555[6], i2555[7], 0, i2554, 'panHint')
  request.r(i2555[8], i2555[9], 0, i2554, 'panHand')
  i2554.swipeDistance = i2555[10]
  i2554.swipeTime = i2555[11]
  i2554.panDistance = i2555[12]
  i2554.noPanFallback = i2555[13]
  request.r(i2555[14], i2555[15], 0, i2554, 'nextButton')
  request.r(i2555[16], i2555[17], 0, i2554, 'zombieCaption')
  i2554.zombieCaptionFormat = i2555[18]
  i2554.zombieCaptionSingle = i2555[19]
  i2554.useCustomWarning = !!i2555[20]
  i2554.customWarning = i2555[21]
  i2554.zombieShotTime = i2555[22]
  i2554.zombieShotSize = i2555[23]
  i2554.zombieShotMargin = new pc.Vec2( i2555[24], i2555[25] )
  i2554.zombieHold = i2555[26]
  request.r(i2555[27], i2555[28], 0, i2554, 'title')
  request.r(i2555[29], i2555[30], 0, i2554, 'loseText')
  i2554.slamDelay = i2555[31]
  i2554.slamTime = i2555[32]
  i2554.slamFromScale = i2555[33]
  i2554.slamShake = i2555[34]
  i2554.playerShotTime = i2555[35]
  i2554.playerShotSize = i2555[36]
  i2554.playerShotOffset = new pc.Vec2( i2555[37], i2555[38] )
  request.r(i2555[39], i2555[40], 0, i2554, 'startButton')
  i2554.pulseScale = i2555[41]
  i2554.pulseTime = i2555[42]
  i2554.releaseTime = i2555[43]
  i2554.startCameraX = i2555[44]
  return i2554
}

Deserializers["Game.UI.GameResult"] = function (request, data, root) {
  var i2556 = root || request.c( 'Game.UI.GameResult' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'bootstrap')
  request.r(i2557[2], i2557[3], 0, i2556, 'intro')
  request.r(i2557[4], i2557[5], 0, i2556, 'specialPanel')
  request.r(i2557[6], i2557[7], 0, i2556, 'curePotion')
  request.r(i2557[8], i2557[9], 0, i2556, 'winScreen')
  request.r(i2557[10], i2557[11], 0, i2556, 'failScreen')
  request.r(i2557[12], i2557[13], 0, i2556, 'tryAgainButton')
  request.r(i2557[14], i2557[15], 0, i2556, 'restartLevelButton')
  i2556.skipIntroOnReplay = !!i2557[16]
  i2556.showDelay = i2557[17]
  i2556.checkInterval = i2557[18]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'clip')
  request.r(i2559[2], i2559[3], 0, i2558, 'outputAudioMixerGroup')
  i2558.playOnAwake = !!i2559[4]
  i2558.loop = !!i2559[5]
  i2558.time = i2559[6]
  i2558.volume = i2559[7]
  i2558.pitch = i2559[8]
  i2558.enabled = !!i2559[9]
  return i2558
}

Deserializers["Game.UI.ButtonPulse"] = function (request, data, root) {
  var i2560 = root || request.c( 'Game.UI.ButtonPulse' )
  var i2561 = data
  i2560.pulseScale = i2561[0]
  i2560.pulseTime = i2561[1]
  i2560.startDelay = i2561[2]
  return i2560
}

Deserializers["Game.UI.CategoryTabButton"] = function (request, data, root) {
  var i2562 = root || request.c( 'Game.UI.CategoryTabButton' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'icon')
  request.r(i2563[2], i2563[3], 0, i2562, 'selectedFrame')
  return i2562
}

Deserializers["Game.UI.PaletteItemCard"] = function (request, data, root) {
  var i2564 = root || request.c( 'Game.UI.PaletteItemCard' )
  var i2565 = data
  request.r(i2565[0], i2565[1], 0, i2564, 'icon')
  request.r(i2565[2], i2565[3], 0, i2564, 'selectedFrame')
  i2564.iconPadding = i2565[4]
  request.r(i2565[5], i2565[6], 0, i2564, 'lockedOverlaySprite')
  request.r(i2565[7], i2565[8], 0, i2564, 'adBadgeSprite')
  request.r(i2565[9], i2565[10], 0, i2564, 'taskBadgeSprite')
  i2564.badgeSize = new pc.Vec2( i2565[11], i2565[12] )
  i2564.badgeOffset = new pc.Vec2( i2565[13], i2565[14] )
  i2564.lockedIconTint = new pc.Color(i2565[15], i2565[16], i2565[17], i2565[18])
  return i2564
}

Deserializers["Game.UI.UnlockCollectionScreen"] = function (request, data, root) {
  var i2566 = root || request.c( 'Game.UI.UnlockCollectionScreen' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'group')
  request.r(i2567[2], i2567[3], 0, i2566, 'panel')
  request.r(i2567[4], i2567[5], 0, i2566, 'scrollRect')
  request.r(i2567[6], i2567[7], 0, i2566, 'content')
  request.r(i2567[8], i2567[9], 0, i2566, 'cardPrefab')
  request.r(i2567[10], i2567[11], 0, i2566, 'closeButton')
  request.r(i2567[12], i2567[13], 0, i2566, 'dimButton')
  i2566.rowSpacing = i2567[14]
  i2566.rowHeight = i2567[15]
  request.r(i2567[16], i2567[17], 0, i2566, 'arrowSprite')
  i2566.arrowSize = new pc.Vec2( i2567[18], i2567[19] )
  i2566.arrowActive = new pc.Color(i2567[20], i2567[21], i2567[22], i2567[23])
  i2566.arrowDim = new pc.Color(i2567[24], i2567[25], i2567[26], i2567[27])
  i2566.fadeDuration = i2567[28]
  i2566.openFromScale = i2567[29]
  return i2566
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2569 = data
  i2568.m_Spacing = i2569[0]
  i2568.m_ChildForceExpandWidth = !!i2569[1]
  i2568.m_ChildForceExpandHeight = !!i2569[2]
  i2568.m_ChildControlWidth = !!i2569[3]
  i2568.m_ChildControlHeight = !!i2569[4]
  i2568.m_ChildScaleWidth = !!i2569[5]
  i2568.m_ChildScaleHeight = !!i2569[6]
  i2568.m_ReverseArrangement = !!i2569[7]
  i2568.m_Padding = UnityEngine.RectOffset.FromPaddings(i2569[8], i2569[9], i2569[10], i2569[11])
  i2568.m_ChildAlignment = i2569[12]
  return i2568
}

Deserializers["Game.UI.UnlockCollectionCard"] = function (request, data, root) {
  var i2570 = root || request.c( 'Game.UI.UnlockCollectionCard' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'background')
  request.r(i2571[2], i2571[3], 0, i2570, 'icon')
  request.r(i2571[4], i2571[5], 0, i2570, 'itemName')
  request.r(i2571[6], i2571[7], 0, i2570, 'requirement')
  request.r(i2571[8], i2571[9], 0, i2570, 'progressLabel')
  request.r(i2571[10], i2571[11], 0, i2570, 'progressFill')
  request.r(i2571[12], i2571[13], 0, i2570, 'ownedMark')
  i2570.unlockedTint = new pc.Color(i2571[14], i2571[15], i2571[16], i2571[17])
  i2570.availableTint = new pc.Color(i2571[18], i2571[19], i2571[20], i2571[21])
  i2570.gatedTint = new pc.Color(i2571[22], i2571[23], i2571[24], i2571[25])
  i2570.unlockedBg = new pc.Color(i2571[26], i2571[27], i2571[28], i2571[29])
  i2570.availableBg = new pc.Color(i2571[30], i2571[31], i2571[32], i2571[33])
  i2570.gatedBg = new pc.Color(i2571[34], i2571[35], i2571[36], i2571[37])
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2573 = data
  i2572.name = i2573[0]
  i2572.index = i2573[1]
  i2572.startup = !!i2573[2]
  return i2572
}

Deserializers["Game.Gameplay.PlayableBootstrap"] = function (request, data, root) {
  var i2574 = root || request.c( 'Game.Gameplay.PlayableBootstrap' )
  var i2575 = data
  request.r(i2575[0], i2575[1], 0, i2574, 'gameConfig')
  i2574.detectDeviceTier = !!i2575[2]
  i2574.deviceTier = i2575[3]
  request.r(i2575[4], i2575[5], 0, i2574, 'unlockPopupPrefab')
  request.r(i2575[6], i2575[7], 0, i2574, 'unlockToastPrefab')
  i2574.mapBounds = UnityEngine.Rect.MinMaxRect(i2575[8], i2575[9], i2575[10], i2575[11])
  request.r(i2575[12], i2575[13], 0, i2574, 'tilesRoot')
  var i2577 = i2575[14]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 2, i2576, '')
  }
  i2574.spawnPoints = i2576
  request.r(i2575[15], i2575[16], 0, i2574, 'zombieItem')
  i2574.zombieCount = i2575[17]
  i2574.zombieSpawnX = new pc.Vec2( i2575[18], i2575[19] )
  i2574.zombieSpawnY = i2575[20]
  i2574.zombieMinGap = i2575[21]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2581 = data
  i2580.aspect = i2581[0]
  i2580.orthographic = !!i2581[1]
  i2580.orthographicSize = i2581[2]
  i2580.backgroundColor = new pc.Color(i2581[3], i2581[4], i2581[5], i2581[6])
  i2580.nearClipPlane = i2581[7]
  i2580.farClipPlane = i2581[8]
  i2580.fieldOfView = i2581[9]
  i2580.depth = i2581[10]
  i2580.clearFlags = i2581[11]
  i2580.cullingMask = i2581[12]
  i2580.rect = i2581[13]
  request.r(i2581[14], i2581[15], 0, i2580, 'targetTexture')
  i2580.usePhysicalProperties = !!i2581[16]
  i2580.focalLength = i2581[17]
  i2580.sensorSize = new pc.Vec2( i2581[18], i2581[19] )
  i2580.lensShift = new pc.Vec2( i2581[20], i2581[21] )
  i2580.gateFit = i2581[22]
  i2580.commandBufferCount = i2581[23]
  i2580.cameraType = i2581[24]
  i2580.enabled = !!i2581[25]
  return i2580
}

Deserializers["Game.Gameplay.CameraController"] = function (request, data, root) {
  var i2582 = root || request.c( 'Game.Gameplay.CameraController' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'targetCamera')
  request.r(i2583[2], i2583[3], 0, i2582, 'config')
  i2582.lockZoom = !!i2583[4]
  i2582.minView = new pc.Vec2( i2583[5], i2583[6] )
  return i2582
}

Deserializers["Game.Gameplay.ItemSpawnTool"] = function (request, data, root) {
  var i2584 = root || request.c( 'Game.Gameplay.ItemSpawnTool' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'targetCamera')
  i2584.spawnCooldown = i2585[2]
  return i2584
}

Deserializers["Game.Gameplay.LinkTool"] = function (request, data, root) {
  var i2586 = root || request.c( 'Game.Gameplay.LinkTool' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'targetCamera')
  request.r(i2587[2], i2587[3], 0, i2586, 'lineTexture')
  i2586.lineWidth = i2587[4]
  i2586.lineColour = new pc.Color(i2587[5], i2587[6], i2587[7], i2587[8])
  request.r(i2587[9], i2587[10], 0, i2586, 'nodeSprite')
  i2586.nodeScale = i2587[11]
  return i2586
}

Deserializers["Game.Gameplay.DragTool"] = function (request, data, root) {
  var i2588 = root || request.c( 'Game.Gameplay.DragTool' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'targetCamera')
  request.r(i2589[2], i2589[3], 0, i2588, 'config')
  request.r(i2589[4], i2589[5], 0, i2588, 'spawnTool')
  return i2588
}

Deserializers["Game.Gameplay.CameraPanZoom"] = function (request, data, root) {
  var i2590 = root || request.c( 'Game.Gameplay.CameraPanZoom' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'controller')
  request.r(i2591[2], i2591[3], 0, i2590, 'spawnTool')
  request.r(i2591[4], i2591[5], 0, i2590, 'dragTool')
  return i2590
}

Deserializers["Game.Gameplay.ItemSpawnPoint"] = function (request, data, root) {
  var i2592 = root || request.c( 'Game.Gameplay.ItemSpawnPoint' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'item')
  i2592.facing = i2593[2]
  i2592.isPlayer = !!i2593[3]
  i2592.dormant = !!i2593[4]
  return i2592
}

Deserializers["Game.Gameplay.MapTile"] = function (request, data, root) {
  var i2594 = root || request.c( 'Game.Gameplay.MapTile' )
  var i2595 = data
  request.r(i2595[0], i2595[1], 0, i2594, 'item')
  return i2594
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'm_FirstSelected')
  i2596.m_sendNavigationEvents = !!i2597[2]
  i2596.m_DragThreshold = i2597[3]
  return i2596
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2599 = data
  i2598.m_HorizontalAxis = i2599[0]
  i2598.m_VerticalAxis = i2599[1]
  i2598.m_SubmitButton = i2599[2]
  i2598.m_CancelButton = i2599[3]
  i2598.m_InputActionsPerSecond = i2599[4]
  i2598.m_RepeatDelay = i2599[5]
  i2598.m_ForceModuleActive = !!i2599[6]
  i2598.m_SendPointerHoverToParent = !!i2599[7]
  return i2598
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2600 = root || request.c( 'LunaController' )
  var i2601 = data
  i2600.UseTime = !!i2601[0]
  i2600.TimePlay = i2601[1]
  i2600.UseCustomBG = !!i2601[2]
  request.r(i2601[3], i2601[4], 0, i2600, 'BGTexture')
  i2600.UseCustomWarning = !!i2601[5]
  i2600.WarningText = i2601[6]
  i2600.ZombieCount = i2601[7]
  i2600.MaxRestart = i2601[8]
  i2600.EndPlay = !!i2601[9]
  i2600.WeaponCTA = !!i2601[10]
  i2600.SpecialCTA = !!i2601[11]
  i2600.LimitDrop = !!i2601[12]
  i2600.CountDrop = i2601[13]
  i2600.GrowZombie = !!i2601[14]
  request.r(i2601[15], i2601[16], 0, i2600, 'bootstrap')
  request.r(i2601[17], i2601[18], 0, i2600, 'intro')
  request.r(i2601[19], i2601[20], 0, i2600, 'customBG')
  var i2603 = i2601[21]
  var i2602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2603.length; i += 2) {
  request.r(i2603[i + 0], i2603[i + 1], 1, i2602, '')
  }
  i2600.CTA = i2602
  request.r(i2601[22], i2601[23], 0, i2600, 'endCard')
  return i2600
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2606 = root || request.c( 'AudioController' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'BGM')
  request.r(i2607[2], i2607[3], 0, i2606, 'musicSource')
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2609 = data
  i2608.ambientIntensity = i2609[0]
  i2608.reflectionIntensity = i2609[1]
  i2608.ambientMode = i2609[2]
  i2608.ambientLight = new pc.Color(i2609[3], i2609[4], i2609[5], i2609[6])
  i2608.ambientSkyColor = new pc.Color(i2609[7], i2609[8], i2609[9], i2609[10])
  i2608.ambientGroundColor = new pc.Color(i2609[11], i2609[12], i2609[13], i2609[14])
  i2608.ambientEquatorColor = new pc.Color(i2609[15], i2609[16], i2609[17], i2609[18])
  i2608.fogColor = new pc.Color(i2609[19], i2609[20], i2609[21], i2609[22])
  i2608.fogEndDistance = i2609[23]
  i2608.fogStartDistance = i2609[24]
  i2608.fogDensity = i2609[25]
  i2608.fog = !!i2609[26]
  request.r(i2609[27], i2609[28], 0, i2608, 'skybox')
  i2608.fogMode = i2609[29]
  var i2611 = i2609[30]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2611[i + 0]) );
  }
  i2608.lightmaps = i2610
  i2608.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2609[31], i2608.lightProbes)
  i2608.lightmapsMode = i2609[32]
  i2608.mixedBakeMode = i2609[33]
  i2608.environmentLightingMode = i2609[34]
  i2608.ambientProbe = new pc.SphericalHarmonicsL2(i2609[35])
  request.r(i2609[36], i2609[37], 0, i2608, 'customReflection')
  request.r(i2609[38], i2609[39], 0, i2608, 'defaultReflection')
  i2608.defaultReflectionMode = i2609[40]
  i2608.defaultReflectionResolution = i2609[41]
  i2608.sunLightObjectId = i2609[42]
  i2608.pixelLightCount = i2609[43]
  i2608.defaultReflectionHDR = !!i2609[44]
  i2608.hasLightDataAsset = !!i2609[45]
  i2608.hasManualGenerate = !!i2609[46]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2615 = data
  request.r(i2615[0], i2615[1], 0, i2614, 'lightmapColor')
  request.r(i2615[2], i2615[3], 0, i2614, 'lightmapDirection')
  request.r(i2615[4], i2615[5], 0, i2614, 'shadowMask')
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2616 = root || new UnityEngine.LightProbes()
  var i2617 = data
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2625 = data
  var i2627 = i2625[0]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2627[i + 0]));
  }
  i2624.ShaderCompilationErrors = i2626
  i2624.name = i2625[1]
  i2624.guid = i2625[2]
  var i2629 = i2625[3]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( i2629[i + 0] );
  }
  i2624.shaderDefinedKeywords = i2628
  var i2631 = i2625[4]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2631[i + 0]) );
  }
  i2624.passes = i2630
  var i2633 = i2625[5]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2633[i + 0]) );
  }
  i2624.usePasses = i2632
  var i2635 = i2625[6]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2635[i + 0]) );
  }
  i2624.defaultParameterValues = i2634
  request.r(i2625[7], i2625[8], 0, i2624, 'unityFallbackShader')
  i2624.readDepth = !!i2625[9]
  i2624.hasDepthOnlyPass = !!i2625[10]
  i2624.isCreatedByShaderGraph = !!i2625[11]
  i2624.disableBatching = !!i2625[12]
  i2624.compiled = !!i2625[13]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2639 = data
  i2638.shaderName = i2639[0]
  i2638.errorMessage = i2639[1]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2644 = root || new pc.UnityShaderPass()
  var i2645 = data
  i2644.id = i2645[0]
  i2644.subShaderIndex = i2645[1]
  i2644.name = i2645[2]
  i2644.passType = i2645[3]
  i2644.grabPassTextureName = i2645[4]
  i2644.usePass = !!i2645[5]
  i2644.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[6], i2644.zTest)
  i2644.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[7], i2644.zWrite)
  i2644.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[8], i2644.culling)
  i2644.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2645[9], i2644.blending)
  i2644.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2645[10], i2644.alphaBlending)
  i2644.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[11], i2644.colorWriteMask)
  i2644.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[12], i2644.offsetUnits)
  i2644.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[13], i2644.offsetFactor)
  i2644.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[14], i2644.stencilRef)
  i2644.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[15], i2644.stencilReadMask)
  i2644.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2645[16], i2644.stencilWriteMask)
  i2644.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2645[17], i2644.stencilOp)
  i2644.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2645[18], i2644.stencilOpFront)
  i2644.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2645[19], i2644.stencilOpBack)
  var i2647 = i2645[20]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2647[i + 0]) );
  }
  i2644.tags = i2646
  var i2649 = i2645[21]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2644.passDefinedKeywords = i2648
  var i2651 = i2645[22]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2651[i + 0]) );
  }
  i2644.passDefinedKeywordGroups = i2650
  var i2653 = i2645[23]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2653[i + 0]) );
  }
  i2644.variants = i2652
  var i2655 = i2645[24]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2655[i + 0]) );
  }
  i2644.excludedVariants = i2654
  i2644.hasDepthReader = !!i2645[25]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2657 = data
  i2656.val = i2657[0]
  i2656.name = i2657[1]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2659 = data
  i2658.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2659[0], i2658.src)
  i2658.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2659[1], i2658.dst)
  i2658.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2659[2], i2658.op)
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2661 = data
  i2660.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2661[0], i2660.pass)
  i2660.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2661[1], i2660.fail)
  i2660.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2661[2], i2660.zFail)
  i2660.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2661[3], i2660.comp)
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2665 = data
  i2664.name = i2665[0]
  i2664.value = i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2669 = data
  var i2671 = i2669[0]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( i2671[i + 0] );
  }
  i2668.keywords = i2670
  i2668.hasDiscard = !!i2669[1]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2675 = data
  i2674.passId = i2675[0]
  i2674.subShaderIndex = i2675[1]
  var i2677 = i2675[2]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( i2677[i + 0] );
  }
  i2674.keywords = i2676
  i2674.vertexProgram = i2675[3]
  i2674.fragmentProgram = i2675[4]
  i2674.exportedForWebGl2 = !!i2675[5]
  i2674.readDepth = !!i2675[6]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'shader')
  i2680.pass = i2681[2]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2685 = data
  i2684.name = i2685[0]
  i2684.type = i2685[1]
  i2684.value = new pc.Vec4( i2685[2], i2685[3], i2685[4], i2685[5] )
  i2684.textureValue = i2685[6]
  i2684.shaderPropertyFlag = i2685[7]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2687 = data
  i2686.name = i2687[0]
  request.r(i2687[1], i2687[2], 0, i2686, 'texture')
  i2686.aabb = i2687[3]
  i2686.vertices = i2687[4]
  i2686.triangles = i2687[5]
  i2686.textureRect = UnityEngine.Rect.MinMaxRect(i2687[6], i2687[7], i2687[8], i2687[9])
  i2686.packedRect = UnityEngine.Rect.MinMaxRect(i2687[10], i2687[11], i2687[12], i2687[13])
  i2686.border = new pc.Vec4( i2687[14], i2687[15], i2687[16], i2687[17] )
  i2686.transparency = i2687[18]
  i2686.bounds = i2687[19]
  i2686.pixelsPerUnit = i2687[20]
  i2686.textureWidth = i2687[21]
  i2686.textureHeight = i2687[22]
  i2686.nativeSize = new pc.Vec2( i2687[23], i2687[24] )
  i2686.pivot = new pc.Vec2( i2687[25], i2687[26] )
  i2686.textureRectOffset = new pc.Vec2( i2687[27], i2687[28] )
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2689 = data
  i2688.name = i2689[0]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2691 = data
  i2690.name = i2691[0]
  i2690.bytes64 = i2691[1]
  i2690.data = i2691[2]
  return i2690
}

Deserializers["Game.Data.GameConfigSO"] = function (request, data, root) {
  var i2692 = root || request.c( 'Game.Data.GameConfigSO' )
  var i2693 = data
  i2692.targetFrameRate = i2693[0]
  i2692.frameBudget = request.d('Game.Data.FrameBudgetConfig', i2693[1], i2692.frameBudget)
  i2692.lowTierMaxMemoryMB = i2693[2]
  i2692.highTierMinMemoryMB = i2693[3]
  i2692.highTierMinCores = i2693[4]
  var i2695 = i2693[5]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 2, i2694, '')
  }
  i2692.categories = i2694
  var i2697 = i2693[6]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 2) {
  request.r(i2697[i + 0], i2697[i + 1], 2, i2696, '')
  }
  i2692.indestructibleItems = i2696
  request.r(i2693[7], i2693[8], 0, i2692, 'banIcon')
  i2692.banHoldSeconds = i2693[9]
  i2692.banFadeSeconds = i2693[10]
  request.r(i2693[11], i2693[12], 0, i2692, 'backdropTile')
  request.r(i2693[13], i2693[14], 0, i2692, 'sfx')
  request.r(i2693[15], i2693[16], 0, i2692, 'spawnEffect')
  request.r(i2693[17], i2693[18], 0, i2692, 'bloodEffect')
  request.r(i2693[19], i2693[20], 0, i2692, 'spriteFlashMaterial')
  return i2692
}

Deserializers["Game.Data.FrameBudgetConfig"] = function (request, data, root) {
  var i2698 = root || request.c( 'Game.Data.FrameBudgetConfig' )
  var i2699 = data
  i2698.simMsPerFrame = i2699[0]
  i2698.tierScaleLow = i2699[1]
  i2698.tierScaleMid = i2699[2]
  i2698.tierScaleHigh = i2699[3]
  var i2701 = i2699[4]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Game.Data.FrameBudgetConfig+CategoryCap', i2701[i + 0]) );
  }
  i2698.categoryCaps = i2700
  return i2698
}

Deserializers["Game.Data.FrameBudgetConfig+CategoryCap"] = function (request, data, root) {
  var i2704 = root || request.c( 'Game.Data.FrameBudgetConfig+CategoryCap' )
  var i2705 = data
  i2704.category = i2705[0]
  i2704.capPerFrame = i2705[1]
  return i2704
}

Deserializers["Game.Data.UICategorySO"] = function (request, data, root) {
  var i2710 = root || request.c( 'Game.Data.UICategorySO' )
  var i2711 = data
  i2710.categoryId = i2711[0]
  i2710.displayName = i2711[1]
  request.r(i2711[2], i2711[3], 0, i2710, 'icon')
  i2710.sortOrder = i2711[4]
  i2710.fullBleedIcons = !!i2711[5]
  var i2713 = i2711[6]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Data.ItemSO')))
  for(var i = 0; i < i2713.length; i += 2) {
  request.r(i2713[i + 0], i2713[i + 1], 1, i2712, '')
  }
  i2710.items = i2712
  return i2710
}

Deserializers["Game.Data.ItemSO"] = function (request, data, root) {
  var i2716 = root || request.c( 'Game.Data.ItemSO' )
  var i2717 = data
  i2716.itemId = i2717[0]
  i2716.displayName = i2717[1]
  request.r(i2717[2], i2717[3], 0, i2716, 'icon')
  i2716.iconRotation = i2717[4]
  request.r(i2717[5], i2717[6], 0, i2716, 'prefab')
  i2716.type = i2717[7]
  i2716.creature = request.d('Game.Data.CreatureStats', i2717[8], i2716.creature)
  i2716.weapon = request.d('Game.Data.WeaponStats', i2717[9], i2716.weapon)
  i2716.tile = request.d('Game.Data.TileStats', i2717[10], i2716.tile)
  i2716.explosive = request.d('Game.Data.ExplosiveStats', i2717[11], i2716.explosive)
  i2716.prop = request.d('Game.Data.PropStats', i2717[12], i2716.prop)
  i2716.wearable = request.d('Game.Data.WearableStats', i2717[13], i2716.wearable)
  i2716.fragments = request.d('Game.Data.FragmentProfile', i2717[14], i2716.fragments)
  request.r(i2717[15], i2717[16], 0, i2716, 'category')
  i2716.unlock = request.d('Game.Data.ItemUnlock', i2717[17], i2716.unlock)
  return i2716
}

Deserializers["Game.Data.CreatureStats"] = function (request, data, root) {
  var i2718 = root || request.c( 'Game.Data.CreatureStats' )
  var i2719 = data
  i2718.type = i2719[0]
  i2718.maxHealth = i2719[1]
  i2718.infectable = !!i2719[2]
  request.r(i2719[3], i2719[4], 0, i2718, 'infectedForm')
  request.r(i2719[5], i2719[6], 0, i2718, 'curedForm')
  request.r(i2719[7], i2719[8], 0, i2718, 'torso')
  request.r(i2719[9], i2719[10], 0, i2718, 'head')
  request.r(i2719[11], i2719[12], 0, i2718, 'leftArm')
  request.r(i2719[13], i2719[14], 0, i2718, 'rightArm')
  request.r(i2719[15], i2719[16], 0, i2718, 'leftLeg')
  request.r(i2719[17], i2719[18], 0, i2718, 'rightLeg')
  request.r(i2719[19], i2719[20], 0, i2718, 'lodSprite')
  i2718.bloodColor = new pc.Color(i2719[21], i2719[22], i2719[23], i2719[24])
  i2718.behaviorKind = i2719[25]
  i2718.moveSpeed = i2719[26]
  i2718.detectionRadius = i2719[27]
  var i2721 = i2719[28]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 2) {
  request.r(i2721[i + 0], i2721[i + 1], 2, i2720, '')
  }
  i2718.hurtClips = i2720
  i2718.hurtVoiceChance = i2719[29]
  request.r(i2719[30], i2719[31], 0, i2718, 'deathClip')
  request.r(i2719[32], i2719[33], 0, i2718, 'infectedClip')
  var i2723 = i2719[34]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 2, i2722, '')
  }
  i2718.idleVoiceClips = i2722
  i2718.idleVoiceInterval = new pc.Vec2( i2719[35], i2719[36] )
  return i2718
}

Deserializers["Game.Data.WeaponStats"] = function (request, data, root) {
  var i2726 = root || request.c( 'Game.Data.WeaponStats' )
  var i2727 = data
  i2726.kind = i2727[0]
  i2726.pickupRadius = i2727[1]
  i2726.range = i2727[2]
  i2726.fireRate = i2727[3]
  i2726.damage = i2727[4]
  i2726.knockback = i2727[5]
  i2726.recoil = i2727[6]
  i2726.projectileSpeed = i2727[7]
  i2726.muzzleOffset = new pc.Vec2( i2727[8], i2727[9] )
  var i2729 = i2727[10]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Game.Data.WeaponEffect', i2729[i + 0]) );
  }
  i2726.fireEffects = i2728
  var i2731 = i2727[11]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Game.Data.WeaponHitEffect', i2731[i + 0]) );
  }
  i2726.hitEffects = i2730
  request.r(i2727[12], i2727[13], 0, i2726, 'projectileSprite')
  i2726.projectileScale = i2727[14]
  i2726.projectileRotation = i2727[15]
  i2726.hideOnShot = !!i2727[16]
  i2726.reappearLead = i2727[17]
  i2726.pelletCount = i2727[18]
  i2726.spreadDegrees = i2727[19]
  request.r(i2727[20], i2727[21], 0, i2726, 'launchedItem')
  i2726.launchAngle = i2727[22]
  i2726.launchGravity = i2727[23]
  i2726.windupAngle = i2727[24]
  i2726.followAngle = i2727[25]
  i2726.armSpeed = i2727[26]
  i2726.impactKick = i2727[27]
  i2726.grip = i2727[28]
  i2726.readyArmAngle = i2727[29]
  i2726.useReadyStance = !!i2727[30]
  i2726.supportArmOffset = i2727[31]
  i2726.gripPoint = new pc.Vec2( i2727[32], i2727[33] )
  i2726.gripRotation = i2727[34]
  i2726.scale = i2727[35]
  i2726.sortingLayer = i2727[36]
  i2726.sortingOrder = i2727[37]
  var i2733 = i2727[38]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 2) {
  request.r(i2733[i + 0], i2733[i + 1], 2, i2732, '')
  }
  i2726.attackClips = i2732
  i2726.attackVolume = i2727[39]
  i2726.attackPitch = i2727[40]
  i2726.fitFireRate = !!i2727[41]
  i2726.attackPitchJitter = i2727[42]
  var i2735 = i2727[43]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 2) {
  request.r(i2735[i + 0], i2735[i + 1], 2, i2734, '')
  }
  i2726.hitClips = i2734
  var i2737 = i2727[44]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 2, i2736, '')
  }
  i2726.pickupClips = i2736
  return i2726
}

Deserializers["Game.Data.WeaponEffect"] = function (request, data, root) {
  var i2740 = root || request.c( 'Game.Data.WeaponEffect' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'prefab')
  i2740.offset = new pc.Vec2( i2741[2], i2741[3] )
  i2740.rotation = i2741[4]
  i2740.scale = i2741[5]
  i2740.attached = !!i2741[6]
  return i2740
}

Deserializers["Game.Data.WeaponHitEffect"] = function (request, data, root) {
  var i2744 = root || request.c( 'Game.Data.WeaponHitEffect' )
  var i2745 = data
  request.r(i2745[0], i2745[1], 0, i2744, 'prefab')
  i2744.offset = new pc.Vec2( i2745[2], i2745[3] )
  i2744.rotation = i2745[4]
  i2744.scale = i2745[5]
  i2744.attached = !!i2745[6]
  return i2744
}

Deserializers["Game.Data.TileStats"] = function (request, data, root) {
  var i2746 = root || request.c( 'Game.Data.TileStats' )
  var i2747 = data
  i2746.isBackgroundTile = !!i2747[0]
  i2746.maxHealth = i2747[1]
  i2746.crackRecoverDelay = i2747[2]
  i2746.crackRecoverSeconds = i2747[3]
  request.r(i2747[4], i2747[5], 0, i2746, 'placeClip')
  request.r(i2747[6], i2747[7], 0, i2746, 'breakClip')
  return i2746
}

Deserializers["Game.Data.ExplosiveStats"] = function (request, data, root) {
  var i2748 = root || request.c( 'Game.Data.ExplosiveStats' )
  var i2749 = data
  i2748.kind = i2749[0]
  i2748.trigger = i2749[1]
  i2748.fuseSeconds = i2749[2]
  i2748.scale = i2749[3]
  i2748.bodyShape = i2749[4]
  i2748.noseAngle = i2749[5]
  i2748.radius = i2749[6]
  i2748.damage = i2749[7]
  i2748.force = i2749[8]
  i2748.blastArc = i2749[9]
  i2748.blastFacing = i2749[10]
  request.r(i2749[11], i2749[12], 0, i2748, 'detonateEffect')
  i2748.detonateEffectScale = i2749[13]
  i2748.screenShakeStrength = i2749[14]
  i2748.screenShakeDuration = i2749[15]
  i2748.thrust = i2749[16]
  i2748.maxSpeed = i2749[17]
  request.r(i2749[18], i2749[19], 0, i2748, 'trailEffect')
  i2748.trailOffset = i2749[20]
  i2748.trailScale = i2749[21]
  i2748.blinkColor = new pc.Color(i2749[22], i2749[23], i2749[24], i2749[25])
  i2748.blinkStartInterval = i2749[26]
  i2748.blinkEndInterval = i2749[27]
  request.r(i2749[28], i2749[29], 0, i2748, 'smokeEffect')
  i2748.smokeSeconds = i2749[30]
  i2748.smokeScale = i2749[31]
  i2748.armSeconds = i2749[32]
  i2748.settleSpeed = i2749[33]
  request.r(i2749[34], i2749[35], 0, i2748, 'armedSprite')
  i2748.triggerOffset = new pc.Vec2( i2749[36], i2749[37] )
  i2748.triggerSize = new pc.Vec2( i2749[38], i2749[39] )
  var i2751 = i2749[40]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 2) {
  request.r(i2751[i + 0], i2751[i + 1], 2, i2750, '')
  }
  i2748.detonateFrames = i2750
  i2748.detonateFrameRate = i2749[41]
  request.r(i2749[42], i2749[43], 0, i2748, 'armClip')
  request.r(i2749[44], i2749[45], 0, i2748, 'flightClip')
  var i2753 = i2749[46]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 2) {
  request.r(i2753[i + 0], i2753[i + 1], 2, i2752, '')
  }
  i2748.explodeClips = i2752
  i2748.explodeVolume = i2749[47]
  return i2748
}

Deserializers["Game.Data.PropStats"] = function (request, data, root) {
  var i2754 = root || request.c( 'Game.Data.PropStats' )
  var i2755 = data
  i2754.maxHealth = i2755[0]
  i2754.shardCount = i2755[1]
  i2754.breakOnContact = !!i2755[2]
  i2754.breakableBy = i2755[3]
  i2754.breakImpulse = i2755[4]
  i2754.burstRadius = i2755[5]
  var i2757 = i2755[6]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Game.Data.CreatureEffect', i2757[i + 0]) );
  }
  i2754.burstEffects = i2756
  request.r(i2755[7], i2755[8], 0, i2754, 'burstEffect')
  i2754.burstEffectScale = i2755[9]
  i2754.lureRadius = i2755[10]
  i2754.lureCreatures = i2755[11]
  i2754.lureVerb = i2755[12]
  i2754.lureOverridesTarget = !!i2755[13]
  i2754.kickRange = i2755[14]
  i2754.kickForce = i2755[15]
  i2754.kickLift = i2755[16]
  i2754.kickCooldown = i2755[17]
  i2754.kicksToBreak = i2755[18]
  request.r(i2755[19], i2755[20], 0, i2754, 'kickClip')
  i2754.eatSeconds = i2755[21]
  i2754.eatBitesPerSecond = i2755[22]
  request.r(i2755[23], i2755[24], 0, i2754, 'eatClip')
  var i2759 = i2755[25]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Game.Data.CreatureEffect', i2759[i + 0]) );
  }
  i2754.eatEffects = i2758
  request.r(i2755[26], i2755[27], 0, i2754, 'breakClip')
  return i2754
}

Deserializers["Game.Data.CreatureEffect"] = function (request, data, root) {
  var i2762 = root || request.c( 'Game.Data.CreatureEffect' )
  var i2763 = data
  i2762.kind = i2763[0]
  i2762.magnitude = i2763[1]
  i2762.duration = i2763[2]
  return i2762
}

Deserializers["Game.Data.WearableStats"] = function (request, data, root) {
  var i2764 = root || request.c( 'Game.Data.WearableStats' )
  var i2765 = data
  i2764.wearRadius = i2765[0]
  i2764.effects = request.d('Game.Data.WearableEffects', i2765[1], i2764.effects)
  i2764.wornOffset = new pc.Vec2( i2765[2], i2765[3] )
  i2764.wornScale = i2765[4]
  i2764.wornRotation = i2765[5]
  var i2767 = i2765[6]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Game.Data.WearablePose', i2767[i + 0]) );
  }
  i2764.poses = i2766
  return i2764
}

Deserializers["Game.Data.WearableEffects"] = function (request, data, root) {
  var i2768 = root || request.c( 'Game.Data.WearableEffects' )
  var i2769 = data
  i2768.speedMultiplier = i2769[0]
  i2768.scaleMultiplier = i2769[1]
  i2768.extraJumpBlocks = i2769[2]
  i2768.immuneToInfection = !!i2769[3]
  i2768.ignoredByZombies = !!i2769[4]
  i2768.allowsWeapons = !!i2769[5]
  return i2768
}

Deserializers["Game.Data.WearablePose"] = function (request, data, root) {
  var i2772 = root || request.c( 'Game.Data.WearablePose' )
  var i2773 = data
  request.r(i2773[0], i2773[1], 0, i2772, 'creature')
  i2772.offset = new pc.Vec2( i2773[2], i2773[3] )
  i2772.scale = i2773[4]
  i2772.rotation = i2773[5]
  return i2772
}

Deserializers["Game.Data.FragmentProfile"] = function (request, data, root) {
  var i2774 = root || request.c( 'Game.Data.FragmentProfile' )
  var i2775 = data
  i2774.enabled = !!i2775[0]
  i2774.launchMode = i2775[1]
  i2774.impactSpeed = i2775[2]
  i2774.impactFalloff = i2775[3]
  i2774.impactInfluence = i2775[4]
  i2774.spinJitter = i2775[5]
  i2774.speedVariance = i2775[6]
  i2774.angleVariance = i2775[7]
  i2774.gravityScale = i2775[8]
  i2774.shardMass = i2775[9]
  i2774.collide = !!i2775[10]
  i2774.preciseColliders = !!i2775[11]
  i2774.fadeDelay = i2775[12]
  i2774.fadeDuration = i2775[13]
  var i2777 = i2775[14]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Data.FragmentPiece')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('Game.Data.FragmentPiece', i2777[i + 0]));
  }
  i2774.pieces = i2776
  return i2774
}

Deserializers["Game.Data.FragmentPiece"] = function (request, data, root) {
  var i2780 = root || request.c( 'Game.Data.FragmentPiece' )
  var i2781 = data
  i2780.rect = UnityEngine.Rect.MinMaxRect(i2781[0], i2781[1], i2781[2], i2781[3])
  var i2783 = i2781[4]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i2783.length; i += 2) {
    i2782.add(new pc.Vec2( i2783[i + 0], i2783[i + 1] ));
  }
  i2780.shape = i2782
  i2780.launchAngle = i2781[5]
  i2780.launchSpeed = i2781[6]
  i2780.torque = i2781[7]
  i2780.scale = i2781[8]
  return i2780
}

Deserializers["Game.Data.ItemUnlock"] = function (request, data, root) {
  var i2784 = root || request.c( 'Game.Data.ItemUnlock' )
  var i2785 = data
  i2784.mode = i2785[0]
  request.r(i2785[1], i2785[2], 0, i2784, 'prerequisite')
  i2784.requirementText = i2785[3]
  i2784.task = request.d('Game.Data.TaskCondition', i2785[4], i2784.task)
  i2784.adsRequired = i2785[5]
  i2784.adPlacement = i2785[6]
  return i2784
}

Deserializers["Game.Data.TaskCondition"] = function (request, data, root) {
  var i2786 = root || request.c( 'Game.Data.TaskCondition' )
  var i2787 = data
  i2786.verb = i2787[0]
  i2786.subject = request.d('Game.Data.ItemFilter', i2787[1], i2786.subject)
  i2786.target = request.d('Game.Data.ItemFilter', i2787[2], i2786.target)
  i2786.requiredCount = i2787[3]
  return i2786
}

Deserializers["Game.Data.ItemFilter"] = function (request, data, root) {
  var i2788 = root || request.c( 'Game.Data.ItemFilter' )
  var i2789 = data
  i2788.mode = i2789[0]
  i2788.itemType = i2789[1]
  request.r(i2789[2], i2789[3], 0, i2788, 'category')
  request.r(i2789[4], i2789[5], 0, i2788, 'specificItem')
  i2788.creatureType = i2789[6]
  return i2788
}

Deserializers["Game.Data.RagdollTuningSO"] = function (request, data, root) {
  var i2790 = root || request.c( 'Game.Data.RagdollTuningSO' )
  var i2791 = data
  i2790.balanceForce = i2791[0]
  i2790.walkLean = i2791[1]
  i2790.airborneStiffness = i2791[2]
  i2790.knockdownImpulse = i2791[3]
  i2790.knockdownRecovery = i2791[4]
  i2790.impactHurtSpeed = i2791[5]
  i2790.impactDamagePerSpeed = i2791[6]
  i2790.impactDamageMax = i2791[7]
  i2790.impactDamageCarried = i2791[8]
  i2790.impactHurtInterval = i2791[9]
  i2790.knockbackScale = i2791[10]
  i2790.knockbackLift = i2791[11]
  i2790.knockbackMaxLift = i2791[12]
  i2790.knockbackRetain = i2791[13]
  i2790.clawKnockback = i2791[14]
  i2790.clawInterval = i2791[15]
  i2790.clawArmThrow = i2791[16]
  i2790.clawInfection = i2791[17]
  i2790.infectionDecay = i2791[18]
  i2790.headSpring = i2791[19]
  i2790.headDamp = i2791[20]
  i2790.neckStrength = i2791[21]
  i2790.hipStrength = i2791[22]
  i2790.muscleGain = i2791[23]
  i2790.muscleMaxSpeed = i2791[24]
  i2790.cadence = i2791[25]
  i2790.hipSwing = i2791[26]
  i2790.hipForwardSign = i2791[27]
  i2790.stepLift = i2791[28]
  i2790.assistGain = i2791[29]
  i2790.pushOffset = i2791[30]
  i2790.stanceFriction = i2791[31]
  i2790.swingFriction = i2791[32]
  i2790.armReachSpread = i2791[33]
  i2790.armReachStrength = i2791[34]
  i2790.reachSway = i2791[35]
  i2790.reachSwaySpeed = i2791[36]
  i2790.reachSettle = i2791[37]
  i2790.armAimCone = i2791[38]
  i2790.armCone = i2791[39]
  i2790.armSwingSpeed = i2791[40]
  i2790.armIdleTorque = i2791[41]
  return i2790
}

Deserializers["Game.Data.SfxLibrarySO"] = function (request, data, root) {
  var i2794 = root || request.c( 'Game.Data.SfxLibrarySO' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'uiClick')
  request.r(i2795[2], i2795[3], 0, i2794, 'error')
  request.r(i2795[4], i2795[5], 0, i2794, 'mailArrived')
  request.r(i2795[6], i2795[7], 0, i2794, 'unlockReveal')
  request.r(i2795[8], i2795[9], 0, i2794, 'itemSpawn')
  request.r(i2795[10], i2795[11], 0, i2794, 'itemDelete')
  request.r(i2795[12], i2795[13], 0, i2794, 'itemDrop')
  request.r(i2795[14], i2795[15], 0, i2794, 'tilePlace')
  request.r(i2795[16], i2795[17], 0, i2794, 'tileBreak')
  request.r(i2795[18], i2795[19], 0, i2794, 'propBreak')
  var i2797 = i2795[20]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 2, i2796, '')
  }
  i2794.weaponPickup = i2796
  var i2799 = i2795[21]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 2) {
  request.r(i2799[i + 0], i2799[i + 1], 2, i2798, '')
  }
  i2794.wearablePickup = i2798
  return i2794
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2800 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2801 = data
  i2800.normalStyle = i2801[0]
  i2800.normalSpacingOffset = i2801[1]
  i2800.boldStyle = i2801[2]
  i2800.boldSpacing = i2801[3]
  i2800.italicStyle = i2801[4]
  i2800.tabSize = i2801[5]
  request.r(i2801[6], i2801[7], 0, i2800, 'atlas')
  i2800.m_SourceFontFileGUID = i2801[8]
  i2800.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2801[9], i2800.m_CreationSettings)
  request.r(i2801[10], i2801[11], 0, i2800, 'm_SourceFontFile')
  i2800.m_SourceFontFilePath = i2801[12]
  i2800.m_AtlasPopulationMode = i2801[13]
  i2800.InternalDynamicOS = !!i2801[14]
  var i2803 = i2801[15]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('UnityEngine.TextCore.Glyph', i2803[i + 0]));
  }
  i2800.m_GlyphTable = i2802
  var i2805 = i2801[16]
  var i2804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.add(request.d('TMPro.TMP_Character', i2805[i + 0]));
  }
  i2800.m_CharacterTable = i2804
  var i2807 = i2801[17]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 2) {
  request.r(i2807[i + 0], i2807[i + 1], 2, i2806, '')
  }
  i2800.m_AtlasTextures = i2806
  i2800.m_AtlasTextureIndex = i2801[18]
  i2800.m_IsMultiAtlasTexturesEnabled = !!i2801[19]
  i2800.m_GetFontFeatures = !!i2801[20]
  i2800.m_ClearDynamicDataOnBuild = !!i2801[21]
  i2800.m_AtlasWidth = i2801[22]
  i2800.m_AtlasHeight = i2801[23]
  i2800.m_AtlasPadding = i2801[24]
  i2800.m_AtlasRenderMode = i2801[25]
  var i2809 = i2801[26]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('UnityEngine.TextCore.GlyphRect', i2809[i + 0]));
  }
  i2800.m_UsedGlyphRects = i2808
  var i2811 = i2801[27]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('UnityEngine.TextCore.GlyphRect', i2811[i + 0]));
  }
  i2800.m_FreeGlyphRects = i2810
  i2800.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2801[28], i2800.m_FontFeatureTable)
  i2800.m_ShouldReimportFontFeatures = !!i2801[29]
  var i2813 = i2801[30]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2813.length; i += 2) {
  request.r(i2813[i + 0], i2813[i + 1], 1, i2812, '')
  }
  i2800.m_FallbackFontAssetTable = i2812
  var i2815 = i2801[31]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('TMPro.TMP_FontWeightPair', i2815[i + 0]) );
  }
  i2800.m_FontWeightTable = i2814
  var i2817 = i2801[32]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('TMPro.TMP_FontWeightPair', i2817[i + 0]) );
  }
  i2800.fontWeights = i2816
  i2800.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2801[33], i2800.m_fontInfo)
  var i2819 = i2801[34]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.add(request.d('TMPro.TMP_Glyph', i2819[i + 0]));
  }
  i2800.m_glyphInfoList = i2818
  i2800.m_KerningTable = request.d('TMPro.KerningTable', i2801[35], i2800.m_KerningTable)
  var i2821 = i2801[36]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2821.length; i += 2) {
  request.r(i2821[i + 0], i2821[i + 1], 1, i2820, '')
  }
  i2800.fallbackFontAssets = i2820
  i2800.m_Version = i2801[37]
  i2800.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2801[38], i2800.m_FaceInfo)
  request.r(i2801[39], i2801[40], 0, i2800, 'm_Material')
  return i2800
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2823 = data
  i2822.sourceFontFileName = i2823[0]
  i2822.sourceFontFileGUID = i2823[1]
  i2822.faceIndex = i2823[2]
  i2822.pointSizeSamplingMode = i2823[3]
  i2822.pointSize = i2823[4]
  i2822.padding = i2823[5]
  i2822.paddingMode = i2823[6]
  i2822.packingMode = i2823[7]
  i2822.atlasWidth = i2823[8]
  i2822.atlasHeight = i2823[9]
  i2822.characterSetSelectionMode = i2823[10]
  i2822.characterSequence = i2823[11]
  i2822.referencedFontAssetGUID = i2823[12]
  i2822.referencedTextAssetGUID = i2823[13]
  i2822.fontStyle = i2823[14]
  i2822.fontStyleModifier = i2823[15]
  i2822.renderMode = i2823[16]
  i2822.includeFontFeatures = !!i2823[17]
  return i2822
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2827 = data
  i2826.m_Index = i2827[0]
  i2826.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2827[1], i2826.m_Metrics)
  i2826.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2827[2], i2826.m_GlyphRect)
  i2826.m_Scale = i2827[3]
  i2826.m_AtlasIndex = i2827[4]
  i2826.m_ClassDefinitionType = i2827[5]
  return i2826
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2829 = data
  i2828.m_Width = i2829[0]
  i2828.m_Height = i2829[1]
  i2828.m_HorizontalBearingX = i2829[2]
  i2828.m_HorizontalBearingY = i2829[3]
  i2828.m_HorizontalAdvance = i2829[4]
  return i2828
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2831 = data
  i2830.m_X = i2831[0]
  i2830.m_Y = i2831[1]
  i2830.m_Width = i2831[2]
  i2830.m_Height = i2831[3]
  return i2830
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2834 = root || request.c( 'TMPro.TMP_Character' )
  var i2835 = data
  i2834.m_ElementType = i2835[0]
  i2834.m_Unicode = i2835[1]
  i2834.m_GlyphIndex = i2835[2]
  i2834.m_Scale = i2835[3]
  return i2834
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2841 = data
  var i2843 = i2841[0]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.add(request.d('TMPro.MultipleSubstitutionRecord', i2843[i + 0]));
  }
  i2840.m_MultipleSubstitutionRecords = i2842
  var i2845 = i2841[1]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.add(request.d('TMPro.LigatureSubstitutionRecord', i2845[i + 0]));
  }
  i2840.m_LigatureSubstitutionRecords = i2844
  var i2847 = i2841[2]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2847[i + 0]));
  }
  i2840.m_GlyphPairAdjustmentRecords = i2846
  var i2849 = i2841[3]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2849[i + 0]));
  }
  i2840.m_MarkToBaseAdjustmentRecords = i2848
  var i2851 = i2841[4]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2851[i + 0]));
  }
  i2840.m_MarkToMarkAdjustmentRecords = i2850
  return i2840
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2854 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2855 = data
  i2854.m_TargetGlyphID = i2855[0]
  i2854.m_SubstituteGlyphIDs = i2855[1]
  return i2854
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2859 = data
  i2858.m_ComponentGlyphIDs = i2859[0]
  i2858.m_LigatureGlyphID = i2859[1]
  return i2858
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2863 = data
  i2862.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2863[0], i2862.m_FirstAdjustmentRecord)
  i2862.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2863[1], i2862.m_SecondAdjustmentRecord)
  i2862.m_FeatureLookupFlags = i2863[2]
  return i2862
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2867 = data
  i2866.m_BaseGlyphID = i2867[0]
  i2866.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2867[1], i2866.m_BaseGlyphAnchorPoint)
  i2866.m_MarkGlyphID = i2867[2]
  i2866.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2867[3], i2866.m_MarkPositionAdjustment)
  return i2866
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2871 = data
  i2870.m_BaseMarkGlyphID = i2871[0]
  i2870.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2871[1], i2870.m_BaseMarkGlyphAnchorPoint)
  i2870.m_CombiningMarkGlyphID = i2871[2]
  i2870.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2871[3], i2870.m_CombiningMarkPositionAdjustment)
  return i2870
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2877 = data
  request.r(i2877[0], i2877[1], 0, i2876, 'regularTypeface')
  request.r(i2877[2], i2877[3], 0, i2876, 'italicTypeface')
  return i2876
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2879 = data
  i2878.Name = i2879[0]
  i2878.PointSize = i2879[1]
  i2878.Scale = i2879[2]
  i2878.CharacterCount = i2879[3]
  i2878.LineHeight = i2879[4]
  i2878.Baseline = i2879[5]
  i2878.Ascender = i2879[6]
  i2878.CapHeight = i2879[7]
  i2878.Descender = i2879[8]
  i2878.CenterLine = i2879[9]
  i2878.SuperscriptOffset = i2879[10]
  i2878.SubscriptOffset = i2879[11]
  i2878.SubSize = i2879[12]
  i2878.Underline = i2879[13]
  i2878.UnderlineThickness = i2879[14]
  i2878.strikethrough = i2879[15]
  i2878.strikethroughThickness = i2879[16]
  i2878.TabWidth = i2879[17]
  i2878.Padding = i2879[18]
  i2878.AtlasWidth = i2879[19]
  i2878.AtlasHeight = i2879[20]
  return i2878
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2883 = data
  i2882.id = i2883[0]
  i2882.x = i2883[1]
  i2882.y = i2883[2]
  i2882.width = i2883[3]
  i2882.height = i2883[4]
  i2882.xOffset = i2883[5]
  i2882.yOffset = i2883[6]
  i2882.xAdvance = i2883[7]
  i2882.scale = i2883[8]
  return i2882
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.KerningTable' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('TMPro.KerningPair', i2887[i + 0]));
  }
  i2884.kerningPairs = i2886
  return i2884
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.KerningPair' )
  var i2891 = data
  i2890.xOffset = i2891[0]
  i2890.m_FirstGlyph = i2891[1]
  i2890.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2891[2], i2890.m_FirstGlyphAdjustments)
  i2890.m_SecondGlyph = i2891[3]
  i2890.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2891[4], i2890.m_SecondGlyphAdjustments)
  i2890.m_IgnoreSpacingAdjustments = !!i2891[5]
  return i2890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2893 = data
  i2892.m_FaceIndex = i2893[0]
  i2892.m_FamilyName = i2893[1]
  i2892.m_StyleName = i2893[2]
  i2892.m_PointSize = i2893[3]
  i2892.m_Scale = i2893[4]
  i2892.m_UnitsPerEM = i2893[5]
  i2892.m_LineHeight = i2893[6]
  i2892.m_AscentLine = i2893[7]
  i2892.m_CapLine = i2893[8]
  i2892.m_MeanLine = i2893[9]
  i2892.m_Baseline = i2893[10]
  i2892.m_DescentLine = i2893[11]
  i2892.m_SuperscriptOffset = i2893[12]
  i2892.m_SuperscriptSize = i2893[13]
  i2892.m_SubscriptOffset = i2893[14]
  i2892.m_SubscriptSize = i2893[15]
  i2892.m_UnderlineOffset = i2893[16]
  i2892.m_UnderlineThickness = i2893[17]
  i2892.m_StrikethroughOffset = i2893[18]
  i2892.m_StrikethroughThickness = i2893[19]
  i2892.m_TabWidth = i2893[20]
  return i2892
}

Deserializers["Game.Data.InteractionConfigSO"] = function (request, data, root) {
  var i2894 = root || request.c( 'Game.Data.InteractionConfigSO' )
  var i2895 = data
  i2894.dragMaxForce = i2895[0]
  i2894.zoomMin = i2895[1]
  i2894.zoomMax = i2895[2]
  i2894.zoomStepFactor = i2895[3]
  i2894.zoomSmoothTime = i2895[4]
  i2894.panSlack = i2895[5]
  i2894.settleTime = i2895[6]
  i2894.focusZoomIn = i2895[7]
  return i2894
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2897 = data
  i2896.useSafeMode = !!i2897[0]
  i2896.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2897[1], i2896.safeModeOptions)
  i2896.timeScale = i2897[2]
  i2896.unscaledTimeScale = i2897[3]
  i2896.useSmoothDeltaTime = !!i2897[4]
  i2896.maxSmoothUnscaledTime = i2897[5]
  i2896.rewindCallbackMode = i2897[6]
  i2896.showUnityEditorReport = !!i2897[7]
  i2896.logBehaviour = i2897[8]
  i2896.drawGizmos = !!i2897[9]
  i2896.defaultRecyclable = !!i2897[10]
  i2896.defaultAutoPlay = i2897[11]
  i2896.defaultUpdateType = i2897[12]
  i2896.defaultTimeScaleIndependent = !!i2897[13]
  i2896.defaultEaseType = i2897[14]
  i2896.defaultEaseOvershootOrAmplitude = i2897[15]
  i2896.defaultEasePeriod = i2897[16]
  i2896.defaultAutoKill = !!i2897[17]
  i2896.defaultLoopType = i2897[18]
  i2896.debugMode = !!i2897[19]
  i2896.debugStoreTargetId = !!i2897[20]
  i2896.showPreviewPanel = !!i2897[21]
  i2896.storeSettingsLocation = i2897[22]
  i2896.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2897[23], i2896.modules)
  i2896.createASMDEF = !!i2897[24]
  i2896.showPlayingTweens = !!i2897[25]
  i2896.showPausedTweens = !!i2897[26]
  return i2896
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2899 = data
  i2898.logBehaviour = i2899[0]
  i2898.nestedTweenFailureBehaviour = i2899[1]
  return i2898
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2900 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2901 = data
  i2900.showPanel = !!i2901[0]
  i2900.audioEnabled = !!i2901[1]
  i2900.physicsEnabled = !!i2901[2]
  i2900.physics2DEnabled = !!i2901[3]
  i2900.spriteEnabled = !!i2901[4]
  i2900.uiEnabled = !!i2901[5]
  i2900.textMeshProEnabled = !!i2901[6]
  i2900.tk2DEnabled = !!i2901[7]
  i2900.deAudioEnabled = !!i2901[8]
  i2900.deUnityExtendedEnabled = !!i2901[9]
  i2900.epoOutlineEnabled = !!i2901[10]
  return i2900
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2902 = root || request.c( 'TMPro.TMP_Settings' )
  var i2903 = data
  i2902.assetVersion = i2903[0]
  i2902.m_TextWrappingMode = i2903[1]
  i2902.m_enableKerning = !!i2903[2]
  var i2905 = i2903[3]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.add(i2905[i + 0]);
  }
  i2902.m_ActiveFontFeatures = i2904
  i2902.m_enableExtraPadding = !!i2903[4]
  i2902.m_enableTintAllSprites = !!i2903[5]
  i2902.m_enableParseEscapeCharacters = !!i2903[6]
  i2902.m_EnableRaycastTarget = !!i2903[7]
  i2902.m_GetFontFeaturesAtRuntime = !!i2903[8]
  i2902.m_missingGlyphCharacter = i2903[9]
  i2902.m_ClearDynamicDataOnBuild = !!i2903[10]
  i2902.m_warningsDisabled = !!i2903[11]
  request.r(i2903[12], i2903[13], 0, i2902, 'm_defaultFontAsset')
  i2902.m_defaultFontAssetPath = i2903[14]
  i2902.m_defaultFontSize = i2903[15]
  i2902.m_defaultAutoSizeMinRatio = i2903[16]
  i2902.m_defaultAutoSizeMaxRatio = i2903[17]
  i2902.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2903[18], i2903[19] )
  i2902.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2903[20], i2903[21] )
  i2902.m_autoSizeTextContainer = !!i2903[22]
  i2902.m_IsTextObjectScaleStatic = !!i2903[23]
  var i2907 = i2903[24]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2907.length; i += 2) {
  request.r(i2907[i + 0], i2907[i + 1], 1, i2906, '')
  }
  i2902.m_fallbackFontAssets = i2906
  i2902.m_matchMaterialPreset = !!i2903[25]
  i2902.m_HideSubTextObjects = !!i2903[26]
  request.r(i2903[27], i2903[28], 0, i2902, 'm_defaultSpriteAsset')
  i2902.m_defaultSpriteAssetPath = i2903[29]
  i2902.m_enableEmojiSupport = !!i2903[30]
  i2902.m_MissingCharacterSpriteUnicode = i2903[31]
  var i2909 = i2903[32]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2909.length; i += 2) {
  request.r(i2909[i + 0], i2909[i + 1], 1, i2908, '')
  }
  i2902.m_EmojiFallbackTextAssets = i2908
  i2902.m_defaultColorGradientPresetsPath = i2903[33]
  request.r(i2903[34], i2903[35], 0, i2902, 'm_defaultStyleSheet')
  i2902.m_StyleSheetsResourcePath = i2903[36]
  request.r(i2903[37], i2903[38], 0, i2902, 'm_leadingCharacters')
  request.r(i2903[39], i2903[40], 0, i2902, 'm_followingCharacters')
  i2902.m_UseModernHangulLineBreakingRules = !!i2903[41]
  return i2902
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2912 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2913 = data
  var i2915 = i2913[0]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.add(request.d('TMPro.TMP_Style', i2915[i + 0]));
  }
  i2912.m_StyleList = i2914
  return i2912
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2918 = root || request.c( 'TMPro.TMP_Style' )
  var i2919 = data
  i2918.m_Name = i2919[0]
  i2918.m_HashCode = i2919[1]
  i2918.m_OpeningDefinition = i2919[2]
  i2918.m_ClosingDefinition = i2919[3]
  i2918.m_OpeningTagArray = i2919[4]
  i2918.m_ClosingTagArray = i2919[5]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2921 = data
  var i2923 = i2921[0]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2923[i + 0]) );
  }
  i2920.files = i2922
  i2920.componentToPrefabIds = i2921[1]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2927 = data
  i2926.path = i2927[0]
  request.r(i2927[1], i2927[2], 0, i2926, 'unityObject')
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2929 = data
  var i2931 = i2929[0]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2931[i + 0]) );
  }
  i2928.scriptsExecutionOrder = i2930
  var i2933 = i2929[1]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2933[i + 0]) );
  }
  i2928.sortingLayers = i2932
  var i2935 = i2929[2]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2935[i + 0]) );
  }
  i2928.cullingLayers = i2934
  i2928.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2929[3], i2928.timeSettings)
  i2928.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2929[4], i2928.physicsSettings)
  i2928.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2929[5], i2928.physics2DSettings)
  i2928.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2929[6], i2928.qualitySettings)
  i2928.enableRealtimeShadows = !!i2929[7]
  i2928.enableAutoInstancing = !!i2929[8]
  i2928.enableStaticBatching = !!i2929[9]
  i2928.enableDynamicBatching = !!i2929[10]
  i2928.usePreservativeDynamicBatching = !!i2929[11]
  i2928.lightmapEncodingQuality = i2929[12]
  i2928.desiredColorSpace = i2929[13]
  var i2937 = i2929[14]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( i2937[i + 0] );
  }
  i2928.allTags = i2936
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2941 = data
  i2940.name = i2941[0]
  i2940.value = i2941[1]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2945 = data
  i2944.id = i2945[0]
  i2944.name = i2945[1]
  i2944.value = i2945[2]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2949 = data
  i2948.id = i2949[0]
  i2948.name = i2949[1]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2951 = data
  i2950.fixedDeltaTime = i2951[0]
  i2950.maximumDeltaTime = i2951[1]
  i2950.timeScale = i2951[2]
  i2950.maximumParticleTimestep = i2951[3]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2953 = data
  i2952.gravity = new pc.Vec3( i2953[0], i2953[1], i2953[2] )
  i2952.defaultSolverIterations = i2953[3]
  i2952.bounceThreshold = i2953[4]
  i2952.autoSyncTransforms = !!i2953[5]
  i2952.autoSimulation = !!i2953[6]
  var i2955 = i2953[7]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2955[i + 0]) );
  }
  i2952.collisionMatrix = i2954
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2959 = data
  i2958.enabled = !!i2959[0]
  i2958.layerId = i2959[1]
  i2958.otherLayerId = i2959[2]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2961 = data
  request.r(i2961[0], i2961[1], 0, i2960, 'material')
  i2960.gravity = new pc.Vec2( i2961[2], i2961[3] )
  i2960.positionIterations = i2961[4]
  i2960.velocityIterations = i2961[5]
  i2960.velocityThreshold = i2961[6]
  i2960.maxLinearCorrection = i2961[7]
  i2960.maxAngularCorrection = i2961[8]
  i2960.maxTranslationSpeed = i2961[9]
  i2960.maxRotationSpeed = i2961[10]
  i2960.baumgarteScale = i2961[11]
  i2960.baumgarteTOIScale = i2961[12]
  i2960.timeToSleep = i2961[13]
  i2960.linearSleepTolerance = i2961[14]
  i2960.angularSleepTolerance = i2961[15]
  i2960.defaultContactOffset = i2961[16]
  i2960.autoSimulation = !!i2961[17]
  i2960.queriesHitTriggers = !!i2961[18]
  i2960.queriesStartInColliders = !!i2961[19]
  i2960.callbacksOnDisable = !!i2961[20]
  i2960.reuseCollisionCallbacks = !!i2961[21]
  i2960.autoSyncTransforms = !!i2961[22]
  var i2963 = i2961[23]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2963[i + 0]) );
  }
  i2960.collisionMatrix = i2962
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2967 = data
  i2966.enabled = !!i2967[0]
  i2966.layerId = i2967[1]
  i2966.otherLayerId = i2967[2]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2969 = data
  var i2971 = i2969[0]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2971[i + 0]) );
  }
  i2968.qualityLevels = i2970
  var i2973 = i2969[1]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( i2973[i + 0] );
  }
  i2968.names = i2972
  i2968.shadows = i2969[2]
  i2968.anisotropicFiltering = i2969[3]
  i2968.antiAliasing = i2969[4]
  i2968.lodBias = i2969[5]
  i2968.shadowCascades = i2969[6]
  i2968.shadowDistance = i2969[7]
  i2968.shadowmaskMode = i2969[8]
  i2968.shadowProjection = i2969[9]
  i2968.shadowResolution = i2969[10]
  i2968.softParticles = !!i2969[11]
  i2968.softVegetation = !!i2969[12]
  i2968.activeColorSpace = i2969[13]
  i2968.desiredColorSpace = i2969[14]
  i2968.masterTextureLimit = i2969[15]
  i2968.maxQueuedFrames = i2969[16]
  i2968.particleRaycastBudget = i2969[17]
  i2968.pixelLightCount = i2969[18]
  i2968.realtimeReflectionProbes = !!i2969[19]
  i2968.shadowCascade2Split = i2969[20]
  i2968.shadowCascade4Split = new pc.Vec3( i2969[21], i2969[22], i2969[23] )
  i2968.streamingMipmapsActive = !!i2969[24]
  i2968.vSyncCount = i2969[25]
  i2968.asyncUploadBufferSize = i2969[26]
  i2968.asyncUploadTimeSlice = i2969[27]
  i2968.billboardsFaceCameraPosition = !!i2969[28]
  i2968.shadowNearPlaneOffset = i2969[29]
  i2968.streamingMipmapsMemoryBudget = i2969[30]
  i2968.maximumLODLevel = i2969[31]
  i2968.streamingMipmapsAddAllCameras = !!i2969[32]
  i2968.streamingMipmapsMaxLevelReduction = i2969[33]
  i2968.streamingMipmapsRenderersPerFrame = i2969[34]
  i2968.resolutionScalingFixedDPIFactor = i2969[35]
  i2968.streamingMipmapsMaxFileIORequests = i2969[36]
  i2968.currentQualityLevel = i2969[37]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2979 = data
  i2978.weight = i2979[0]
  i2978.vertices = i2979[1]
  i2978.normals = i2979[2]
  i2978.tangents = i2979[3]
  return i2978
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2980 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2981 = data
  request.r(i2981[0], i2981[1], 0, i2980, 'm_ObjectArgument')
  i2980.m_ObjectArgumentAssemblyTypeName = i2981[2]
  i2980.m_IntArgument = i2981[3]
  i2980.m_FloatArgument = i2981[4]
  i2980.m_StringArgument = i2981[5]
  i2980.m_BoolArgument = !!i2981[6]
  return i2980
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2983 = data
  i2982.m_GlyphIndex = i2983[0]
  i2982.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2983[1], i2982.m_GlyphValueRecord)
  return i2982
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2984 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2985 = data
  i2984.m_XCoordinate = i2985[0]
  i2984.m_YCoordinate = i2985[1]
  return i2984
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2986 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2987 = data
  i2986.m_XPositionAdjustment = i2987[0]
  i2986.m_YPositionAdjustment = i2987[1]
  return i2986
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2988 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2989 = data
  i2988.xPlacement = i2989[0]
  i2988.yPlacement = i2989[1]
  i2988.xAdvance = i2989[2]
  i2988.yAdvance = i2989[3]
  return i2988
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2991 = data
  i2990.m_XPlacement = i2991[0]
  i2990.m_YPlacement = i2991[1]
  i2990.m_XAdvance = i2991[2]
  i2990.m_YAdvance = i2991[3]
  return i2990
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

Deserializers.buildID = "1be697a7-393c-44bb-8765-cd3690dd20b0";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["Game","Core","GameBootSignal","Reset"],["Game","Core","BannerSpace","Reset"],["Game","Core","BannerSuppression","Reset"],["Game","Gameplay","PropLureRegistry","Reset"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

