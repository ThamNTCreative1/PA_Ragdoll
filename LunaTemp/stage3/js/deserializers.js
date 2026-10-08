var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.JointSpring' )
  var i2283 = data
  i2282.spring = i2283[0]
  i2282.damper = i2283[1]
  i2282.targetPosition = i2283[2]
  return i2282
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.JointMotor' )
  var i2285 = data
  i2284.m_TargetVelocity = i2285[0]
  i2284.m_Force = i2285[1]
  i2284.m_FreeSpin = i2285[2]
  return i2284
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.JointLimits' )
  var i2287 = data
  i2286.m_Min = i2287[0]
  i2286.m_Max = i2287[1]
  i2286.m_Bounciness = i2287[2]
  i2286.m_BounceMinVelocity = i2287[3]
  i2286.m_ContactDistance = i2287[4]
  i2286.minBounce = i2287[5]
  i2286.maxBounce = i2287[6]
  return i2286
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.JointDrive' )
  var i2289 = data
  i2288.m_PositionSpring = i2289[0]
  i2288.m_PositionDamper = i2289[1]
  i2288.m_MaximumForce = i2289[2]
  i2288.m_UseAcceleration = i2289[3]
  return i2288
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2291 = data
  i2290.m_Spring = i2291[0]
  i2290.m_Damper = i2291[1]
  return i2290
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2293 = data
  i2292.m_Limit = i2293[0]
  i2292.m_Bounciness = i2293[1]
  i2292.m_ContactDistance = i2293[2]
  return i2292
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2295 = data
  i2294.m_ExtremumSlip = i2295[0]
  i2294.m_ExtremumValue = i2295[1]
  i2294.m_AsymptoteSlip = i2295[2]
  i2294.m_AsymptoteValue = i2295[3]
  i2294.m_Stiffness = i2295[4]
  return i2294
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2297 = data
  i2296.m_LowerAngle = i2297[0]
  i2296.m_UpperAngle = i2297[1]
  return i2296
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2299 = data
  i2298.m_MotorSpeed = i2299[0]
  i2298.m_MaximumMotorTorque = i2299[1]
  return i2298
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2301 = data
  i2300.m_DampingRatio = i2301[0]
  i2300.m_Frequency = i2301[1]
  i2300.m_Angle = i2301[2]
  return i2300
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2303 = data
  i2302.m_LowerTranslation = i2303[0]
  i2302.m_UpperTranslation = i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2305 = data
  i2304.name = i2305[0]
  i2304.width = i2305[1]
  i2304.height = i2305[2]
  i2304.mipmapCount = i2305[3]
  i2304.anisoLevel = i2305[4]
  i2304.filterMode = i2305[5]
  i2304.hdr = !!i2305[6]
  i2304.format = i2305[7]
  i2304.wrapMode = i2305[8]
  i2304.alphaIsTransparency = !!i2305[9]
  i2304.alphaSource = i2305[10]
  i2304.graphicsFormat = i2305[11]
  i2304.sRGBTexture = !!i2305[12]
  i2304.desiredColorSpace = i2305[13]
  i2304.wrapU = i2305[14]
  i2304.wrapV = i2305[15]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2339 = data
  i2338.position = new pc.Vec3( i2339[0], i2339[1], i2339[2] )
  i2338.scale = new pc.Vec3( i2339[3], i2339[4], i2339[5] )
  i2338.rotation = new pc.Quat(i2339[6], i2339[7], i2339[8], i2339[9])
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2341 = data
  i2340.color = new pc.Color(i2341[0], i2341[1], i2341[2], i2341[3])
  request.r(i2341[4], i2341[5], 0, i2340, 'sprite')
  i2340.flipX = !!i2341[6]
  i2340.flipY = !!i2341[7]
  i2340.drawMode = i2341[8]
  i2340.size = new pc.Vec2( i2341[9], i2341[10] )
  i2340.tileMode = i2341[11]
  i2340.adaptiveModeThreshold = i2341[12]
  i2340.maskInteraction = i2341[13]
  i2340.spriteSortPoint = i2341[14]
  i2340.enabled = !!i2341[15]
  request.r(i2341[16], i2341[17], 0, i2340, 'sharedMaterial')
  var i2343 = i2341[18]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2340.sharedMaterials = i2342
  i2340.receiveShadows = !!i2341[19]
  i2340.shadowCastingMode = i2341[20]
  i2340.sortingLayerID = i2341[21]
  i2340.sortingOrder = i2341[22]
  i2340.lightmapIndex = i2341[23]
  i2340.lightmapSceneIndex = i2341[24]
  i2340.lightmapScaleOffset = new pc.Vec4( i2341[25], i2341[26], i2341[27], i2341[28] )
  i2340.lightProbeUsage = i2341[29]
  i2340.reflectionProbeUsage = i2341[30]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2347 = data
  i2346.bodyType = i2347[0]
  request.r(i2347[1], i2347[2], 0, i2346, 'material')
  i2346.simulated = !!i2347[3]
  i2346.useAutoMass = !!i2347[4]
  i2346.mass = i2347[5]
  i2346.drag = i2347[6]
  i2346.angularDrag = i2347[7]
  i2346.gravityScale = i2347[8]
  i2346.collisionDetectionMode = i2347[9]
  i2346.sleepMode = i2347[10]
  i2346.constraints = i2347[11]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2349 = data
  i2348.usedByComposite = !!i2349[0]
  i2348.autoTiling = !!i2349[1]
  i2348.size = new pc.Vec2( i2349[2], i2349[3] )
  i2348.edgeRadius = i2349[4]
  i2348.enabled = !!i2349[5]
  i2348.isTrigger = !!i2349[6]
  i2348.usedByEffector = !!i2349[7]
  i2348.density = i2349[8]
  i2348.offset = new pc.Vec2( i2349[9], i2349[10] )
  request.r(i2349[11], i2349[12], 0, i2348, 'material')
  return i2348
}

Deserializers["MelonAd.Bullet"] = function (request, data, root) {
  var i2350 = root || request.c( 'MelonAd.Bullet' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'rb')
  i2350.life = i2351[2]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2353 = data
  i2352.name = i2353[0]
  i2352.tagId = i2353[1]
  i2352.enabled = !!i2353[2]
  i2352.isStatic = !!i2353[3]
  i2352.layer = i2353[4]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2355 = data
  i2354.radius = i2355[0]
  i2354.enabled = !!i2355[1]
  i2354.isTrigger = !!i2355[2]
  i2354.usedByEffector = !!i2355[3]
  i2354.density = i2355[4]
  i2354.offset = new pc.Vec2( i2355[5], i2355[6] )
  request.r(i2355[7], i2355[8], 0, i2354, 'material')
  return i2354
}

Deserializers["MelonAd.FlameParticle"] = function (request, data, root) {
  var i2356 = root || request.c( 'MelonAd.FlameParticle' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'rb')
  request.r(i2357[2], i2357[3], 0, i2356, 'visual')
  request.r(i2357[4], i2357[5], 0, i2356, 'sr')
  i2356.life = i2357[6]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.index = i2359[1]
  i2358.startup = !!i2359[2]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2361 = data
  i2360.aspect = i2361[0]
  i2360.orthographic = !!i2361[1]
  i2360.orthographicSize = i2361[2]
  i2360.backgroundColor = new pc.Color(i2361[3], i2361[4], i2361[5], i2361[6])
  i2360.nearClipPlane = i2361[7]
  i2360.farClipPlane = i2361[8]
  i2360.fieldOfView = i2361[9]
  i2360.depth = i2361[10]
  i2360.clearFlags = i2361[11]
  i2360.cullingMask = i2361[12]
  i2360.rect = i2361[13]
  request.r(i2361[14], i2361[15], 0, i2360, 'targetTexture')
  i2360.usePhysicalProperties = !!i2361[16]
  i2360.focalLength = i2361[17]
  i2360.sensorSize = new pc.Vec2( i2361[18], i2361[19] )
  i2360.lensShift = new pc.Vec2( i2361[20], i2361[21] )
  i2360.gateFit = i2361[22]
  i2360.commandBufferCount = i2361[23]
  i2360.cameraType = i2361[24]
  i2360.enabled = !!i2361[25]
  return i2360
}

Deserializers["MelonAd.CameraFit"] = function (request, data, root) {
  var i2362 = root || request.c( 'MelonAd.CameraFit' )
  var i2363 = data
  i2362.designHeight = i2363[0]
  i2362.referenceResolution = new pc.Vec2( i2363[1], i2363[2] )
  return i2362
}

Deserializers["MelonAd.UIController"] = function (request, data, root) {
  var i2364 = root || request.c( 'MelonAd.UIController' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'hint')
  request.r(i2365[2], i2365[3], 0, i2364, 'head')
  request.r(i2365[4], i2365[5], 0, i2364, 'failRoot')
  request.r(i2365[6], i2365[7], 0, i2364, 'panel')
  request.r(i2365[8], i2365[9], 0, i2364, 'panelGroup')
  request.r(i2365[10], i2365[11], 0, i2364, 'button')
  request.r(i2365[12], i2365[13], 0, i2364, 'finger')
  request.r(i2365[14], i2365[15], 0, i2364, 'retryButton')
  i2364.slideDistance = i2365[16]
  i2364.slideDuration = i2365[17]
  i2364.pulseDuration = i2365[18]
  i2364.wiggleDuration = i2365[19]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2367 = data
  i2366.pivot = new pc.Vec2( i2367[0], i2367[1] )
  i2366.anchorMin = new pc.Vec2( i2367[2], i2367[3] )
  i2366.anchorMax = new pc.Vec2( i2367[4], i2367[5] )
  i2366.sizeDelta = new pc.Vec2( i2367[6], i2367[7] )
  i2366.anchoredPosition3D = new pc.Vec3( i2367[8], i2367[9], i2367[10] )
  i2366.rotation = new pc.Quat(i2367[11], i2367[12], i2367[13], i2367[14])
  i2366.scale = new pc.Vec3( i2367[15], i2367[16], i2367[17] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2369 = data
  i2368.planeDistance = i2369[0]
  i2368.referencePixelsPerUnit = i2369[1]
  i2368.isFallbackOverlay = !!i2369[2]
  i2368.renderMode = i2369[3]
  i2368.renderOrder = i2369[4]
  i2368.sortingLayerName = i2369[5]
  i2368.sortingOrder = i2369[6]
  i2368.scaleFactor = i2369[7]
  request.r(i2369[8], i2369[9], 0, i2368, 'worldCamera')
  i2368.overrideSorting = !!i2369[10]
  i2368.pixelPerfect = !!i2369[11]
  i2368.targetDisplay = i2369[12]
  i2368.overridePixelPerfect = !!i2369[13]
  i2368.enabled = !!i2369[14]
  return i2368
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2371 = data
  i2370.m_UiScaleMode = i2371[0]
  i2370.m_ReferencePixelsPerUnit = i2371[1]
  i2370.m_ScaleFactor = i2371[2]
  i2370.m_ReferenceResolution = new pc.Vec2( i2371[3], i2371[4] )
  i2370.m_ScreenMatchMode = i2371[5]
  i2370.m_MatchWidthOrHeight = i2371[6]
  i2370.m_PhysicalUnit = i2371[7]
  i2370.m_FallbackScreenDPI = i2371[8]
  i2370.m_DefaultSpriteDPI = i2371[9]
  i2370.m_DynamicPixelsPerUnit = i2371[10]
  i2370.m_PresetInfoIsWorld = !!i2371[11]
  return i2370
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2373 = data
  i2372.m_IgnoreReversedGraphics = !!i2373[0]
  i2372.m_BlockingObjects = i2373[1]
  i2372.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2373[2] )
  return i2372
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2375 = data
  i2374.m_AspectMode = i2375[0]
  i2374.m_AspectRatio = i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2377 = data
  i2376.cullTransparentMesh = !!i2377[0]
  return i2376
}

Deserializers["MelonAd.UICover"] = function (request, data, root) {
  var i2378 = root || request.c( 'MelonAd.UICover' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'target')
  return i2378
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_Texture')
  i2380.m_UVRect = UnityEngine.Rect.MinMaxRect(i2381[2], i2381[3], i2381[4], i2381[5])
  request.r(i2381[6], i2381[7], 0, i2380, 'm_Material')
  i2380.m_Maskable = !!i2381[8]
  i2380.m_Color = new pc.Color(i2381[9], i2381[10], i2381[11], i2381[12])
  i2380.m_RaycastTarget = !!i2381[13]
  i2380.m_RaycastPadding = new pc.Vec4( i2381[14], i2381[15], i2381[16], i2381[17] )
  return i2380
}

Deserializers["MelonAd.LevelRefs"] = function (request, data, root) {
  var i2382 = root || request.c( 'MelonAd.LevelRefs' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'man')
  request.r(i2383[2], i2383[3], 0, i2382, 'rifle')
  request.r(i2383[4], i2383[5], 0, i2382, 'flameThrower')
  request.r(i2383[6], i2383[7], 0, i2382, 'tutorPin')
  request.r(i2383[8], i2383[9], 0, i2382, 'dynamicRoot')
  return i2382
}

Deserializers["MelonAd.Pin"] = function (request, data, root) {
  var i2384 = root || request.c( 'MelonAd.Pin' )
  var i2385 = data
  i2384.evt = i2385[0]
  i2384.flyOffset = new pc.Vec2( i2385[1], i2385[2] )
  return i2384
}

Deserializers["MelonAd.ExitZone"] = function (request, data, root) {
  var i2386 = root || request.c( 'MelonAd.ExitZone' )
  var i2387 = data
  return i2386
}

Deserializers["MelonAd.Grabbable"] = function (request, data, root) {
  var i2388 = root || request.c( 'MelonAd.Grabbable' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'rb')
  request.r(i2389[2], i2389[3], 0, i2388, 'owner')
  return i2388
}

Deserializers["MelonAd.Spike"] = function (request, data, root) {
  var i2390 = root || request.c( 'MelonAd.Spike' )
  var i2391 = data
  return i2390
}

Deserializers["MelonAd.Acid"] = function (request, data, root) {
  var i2392 = root || request.c( 'MelonAd.Acid' )
  var i2393 = data
  return i2392
}

Deserializers["MelonAd.Rifle"] = function (request, data, root) {
  var i2394 = root || request.c( 'MelonAd.Rifle' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'bulletPrefab')
  request.r(i2395[2], i2395[3], 0, i2394, 'bulletRoot')
  request.r(i2395[4], i2395[5], 0, i2394, 'muzzle')
  i2394.poolSize = i2395[6]
  i2394.width = i2395[7]
  i2394.bulletSpeed = i2395[8]
  return i2394
}

Deserializers["MelonAd.FlameThrower"] = function (request, data, root) {
  var i2396 = root || request.c( 'MelonAd.FlameThrower' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'prefab')
  request.r(i2397[2], i2397[3], 0, i2396, 'particleRoot')
  i2396.poolSize = i2397[4]
  i2396.width = i2397[5]
  i2396.speed = i2397[6]
  return i2396
}

Deserializers["MelonAd.CharacterSelector"] = function (request, data, root) {
  var i2398 = root || request.c( 'MelonAd.CharacterSelector' )
  var i2399 = data
  i2398.index = i2399[0]
  var i2401 = i2399[1]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 2, i2400, '')
  }
  i2398.characters = i2400
  return i2398
}

Deserializers["MelonAd.Ragdoll"] = function (request, data, root) {
  var i2404 = root || request.c( 'MelonAd.Ragdoll' )
  var i2405 = data
  var i2407 = i2405[0]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.parts = i2406
  request.r(i2405[1], i2405[2], 0, i2404, 'head')
  request.r(i2405[3], i2405[4], 0, i2404, 'leftFoot')
  request.r(i2405[5], i2405[6], 0, i2404, 'rightFoot')
  request.r(i2405[7], i2405[8], 0, i2404, 'hole')
  i2404.holeDiameter = i2405[9]
  i2404.headLift = i2405[10]
  i2404.footPull = i2405[11]
  i2404.blockMask = UnityEngine.LayerMask.FromIntegerValue( i2405[12] )
  return i2404
}

Deserializers["MelonAd.RagdollPart"] = function (request, data, root) {
  var i2410 = root || request.c( 'MelonAd.RagdollPart' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'owner')
  request.r(i2411[2], i2411[3], 0, i2410, 'rb')
  request.r(i2411[4], i2411[5], 0, i2410, 'skin')
  request.r(i2411[6], i2411[7], 0, i2410, 'skeleton')
  request.r(i2411[8], i2411[9], 0, i2410, 'burnt')
  var i2413 = i2411[10]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2410.skinExtras = i2412
  var i2415 = i2411[11]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2410.burntExtras = i2414
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2419 = data
  i2418.useLimits = !!i2419[0]
  i2418.limits = request.d('UnityEngine.JointAngleLimits2D', i2419[1], i2418.limits)
  i2418.useMotor = !!i2419[2]
  i2418.motor = request.d('UnityEngine.JointMotor2D', i2419[3], i2418.motor)
  i2418.anchor = new pc.Vec2( i2419[4], i2419[5] )
  i2418.connectedAnchor = new pc.Vec2( i2419[6], i2419[7] )
  i2418.autoConfigureConnectedAnchor = !!i2419[8]
  request.r(i2419[9], i2419[10], 0, i2418, 'connectedBody')
  i2418.breakForce = i2419[11]
  i2418.breakTorque = i2419[12]
  i2418.enableCollision = !!i2419[13]
  i2418.enabled = !!i2419[14]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2421 = data
  i2420.frontSortingLayerID = i2421[0]
  i2420.frontSortingOrder = i2421[1]
  i2420.backSortingLayerID = i2421[2]
  i2420.backSortingOrder = i2421[3]
  i2420.alphaCutoff = i2421[4]
  request.r(i2421[5], i2421[6], 0, i2420, 'sprite')
  i2420.tileMode = i2421[7]
  i2420.isCustomRangeActive = !!i2421[8]
  i2420.spriteSortPoint = i2421[9]
  i2420.enabled = !!i2421[10]
  request.r(i2421[11], i2421[12], 0, i2420, 'sharedMaterial')
  var i2423 = i2421[13]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 2, i2422, '')
  }
  i2420.sharedMaterials = i2422
  i2420.receiveShadows = !!i2421[14]
  i2420.shadowCastingMode = i2421[15]
  i2420.sortingLayerID = i2421[16]
  i2420.sortingOrder = i2421[17]
  i2420.lightmapIndex = i2421[18]
  i2420.lightmapSceneIndex = i2421[19]
  i2420.lightmapScaleOffset = new pc.Vec4( i2421[20], i2421[21], i2421[22], i2421[23] )
  i2420.lightProbeUsage = i2421[24]
  i2420.reflectionProbeUsage = i2421[25]
  return i2420
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.Image' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'm_Sprite')
  i2424.m_Type = i2425[2]
  i2424.m_PreserveAspect = !!i2425[3]
  i2424.m_FillCenter = !!i2425[4]
  i2424.m_FillMethod = i2425[5]
  i2424.m_FillAmount = i2425[6]
  i2424.m_FillClockwise = !!i2425[7]
  i2424.m_FillOrigin = i2425[8]
  i2424.m_UseSpriteMesh = !!i2425[9]
  i2424.m_PixelsPerUnitMultiplier = i2425[10]
  request.r(i2425[11], i2425[12], 0, i2424, 'm_Material')
  i2424.m_Maskable = !!i2425[13]
  i2424.m_Color = new pc.Color(i2425[14], i2425[15], i2425[16], i2425[17])
  i2424.m_RaycastTarget = !!i2425[18]
  i2424.m_RaycastPadding = new pc.Vec4( i2425[19], i2425[20], i2425[21], i2425[22] )
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2427 = data
  i2426.m_Alpha = i2427[0]
  i2426.m_Interactable = !!i2427[1]
  i2426.m_BlocksRaycasts = !!i2427[2]
  i2426.m_IgnoreParentGroups = !!i2427[3]
  i2426.enabled = !!i2427[4]
  return i2426
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.Button' )
  var i2429 = data
  i2428.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2429[0], i2428.m_OnClick)
  i2428.m_Navigation = request.d('UnityEngine.UI.Navigation', i2429[1], i2428.m_Navigation)
  i2428.m_Transition = i2429[2]
  i2428.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2429[3], i2428.m_Colors)
  i2428.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2429[4], i2428.m_SpriteState)
  i2428.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2429[5], i2428.m_AnimationTriggers)
  i2428.m_Interactable = !!i2429[6]
  request.r(i2429[7], i2429[8], 0, i2428, 'm_TargetGraphic')
  return i2428
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2431 = data
  i2430.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2431[0], i2430.m_PersistentCalls)
  return i2430
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2433 = data
  var i2435 = i2433[0]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('UnityEngine.Events.PersistentCall', i2435[i + 0]));
  }
  i2432.m_Calls = i2434
  return i2432
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'm_Target')
  i2438.m_TargetAssemblyTypeName = i2439[2]
  i2438.m_MethodName = i2439[3]
  i2438.m_Mode = i2439[4]
  i2438.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2439[5], i2438.m_Arguments)
  i2438.m_CallState = i2439[6]
  return i2438
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2441 = data
  i2440.m_Mode = i2441[0]
  i2440.m_WrapAround = !!i2441[1]
  request.r(i2441[2], i2441[3], 0, i2440, 'm_SelectOnUp')
  request.r(i2441[4], i2441[5], 0, i2440, 'm_SelectOnDown')
  request.r(i2441[6], i2441[7], 0, i2440, 'm_SelectOnLeft')
  request.r(i2441[8], i2441[9], 0, i2440, 'm_SelectOnRight')
  return i2440
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2443 = data
  i2442.m_NormalColor = new pc.Color(i2443[0], i2443[1], i2443[2], i2443[3])
  i2442.m_HighlightedColor = new pc.Color(i2443[4], i2443[5], i2443[6], i2443[7])
  i2442.m_PressedColor = new pc.Color(i2443[8], i2443[9], i2443[10], i2443[11])
  i2442.m_SelectedColor = new pc.Color(i2443[12], i2443[13], i2443[14], i2443[15])
  i2442.m_DisabledColor = new pc.Color(i2443[16], i2443[17], i2443[18], i2443[19])
  i2442.m_ColorMultiplier = i2443[20]
  i2442.m_FadeDuration = i2443[21]
  return i2442
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'm_HighlightedSprite')
  request.r(i2445[2], i2445[3], 0, i2444, 'm_PressedSprite')
  request.r(i2445[4], i2445[5], 0, i2444, 'm_SelectedSprite')
  request.r(i2445[6], i2445[7], 0, i2444, 'm_DisabledSprite')
  return i2444
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2447 = data
  i2446.m_NormalTrigger = i2447[0]
  i2446.m_HighlightedTrigger = i2447[1]
  i2446.m_PressedTrigger = i2447[2]
  i2446.m_SelectedTrigger = i2447[3]
  i2446.m_DisabledTrigger = i2447[4]
  return i2446
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'm_FirstSelected')
  i2448.m_sendNavigationEvents = !!i2449[2]
  i2448.m_DragThreshold = i2449[3]
  return i2448
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2451 = data
  i2450.m_HorizontalAxis = i2451[0]
  i2450.m_VerticalAxis = i2451[1]
  i2450.m_SubmitButton = i2451[2]
  i2450.m_CancelButton = i2451[3]
  i2450.m_InputActionsPerSecond = i2451[4]
  i2450.m_RepeatDelay = i2451[5]
  i2450.m_ForceModuleActive = !!i2451[6]
  i2450.m_SendPointerHoverToParent = !!i2451[7]
  return i2450
}

Deserializers["MelonAd.GameConfig"] = function (request, data, root) {
  var i2452 = root || request.c( 'MelonAd.GameConfig' )
  var i2453 = data
  i2452.retries = i2453[0]
  i2452.failPopupDelay = i2453[1]
  i2452.rifleInterval = i2453[2]
  i2452.rifleBurstAfterPin = i2453[3]
  i2452.flameRate = i2453[4]
  i2452.pinTapRadius = i2453[5]
  i2452.showTutorial = !!i2453[6]
  i2452.iosLink = i2453[7]
  i2452.androidLink = i2453[8]
  return i2452
}

Deserializers["MelonAd.AudioManager"] = function (request, data, root) {
  var i2454 = root || request.c( 'MelonAd.AudioManager' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'music')
  request.r(i2455[2], i2455[3], 0, i2454, 'doc')
  request.r(i2455[4], i2455[5], 0, i2454, 'door')
  request.r(i2455[6], i2455[7], 0, i2454, 'fire')
  request.r(i2455[8], i2455[9], 0, i2454, 'flame')
  request.r(i2455[10], i2455[11], 0, i2454, 'hurt')
  request.r(i2455[12], i2455[13], 0, i2454, 'jar')
  request.r(i2455[14], i2455[15], 0, i2454, 'kis')
  request.r(i2455[16], i2455[17], 0, i2454, 'ohog')
  request.r(i2455[18], i2455[19], 0, i2454, 'complete')
  request.r(i2455[20], i2455[21], 0, i2454, 'fail')
  return i2454
}

Deserializers["MelonAd.FxManager"] = function (request, data, root) {
  var i2456 = root || request.c( 'MelonAd.FxManager' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'smoke')
  request.r(i2457[2], i2457[3], 0, i2456, 'flame')
  request.r(i2457[4], i2457[5], 0, i2456, 'blood')
  request.r(i2457[6], i2457[7], 0, i2456, 'spikeShard')
  request.r(i2457[8], i2457[9], 0, i2456, 'bulletShard')
  request.r(i2457[10], i2457[11], 0, i2456, 'bubble')
  i2456.prewarm = i2457[12]
  i2456.sortingOrder = i2457[13]
  return i2456
}

Deserializers["MelonAd.GameManager"] = function (request, data, root) {
  var i2458 = root || request.c( 'MelonAd.GameManager' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'level')
  request.r(i2459[2], i2459[3], 0, i2458, 'zoomRoot')
  request.r(i2459[4], i2459[5], 0, i2458, 'cam')
  request.r(i2459[6], i2459[7], 0, i2458, 'ui')
  request.r(i2459[8], i2459[9], 0, i2458, 'tapFinger')
  request.r(i2459[10], i2459[11], 0, i2458, 'dragFinger')
  request.r(i2459[12], i2459[13], 0, i2458, 'dragFingerSprite')
  i2458.pickMask = UnityEngine.LayerMask.FromIntegerValue( i2459[14] )
  i2458.winZoom = i2459[15]
  i2458.winFocus = new pc.Vec2( i2459[16], i2459[17] )
  i2458.winZoomDuration = i2459[18]
  i2458.dragFrequency = i2459[19]
  i2458.dragDamping = i2459[20]
  i2458.dragMaxForce = i2459[21]
  i2458.tapFingerOffset = new pc.Vec2( i2459[22], i2459[23] )
  return i2458
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2460 = root || request.c( 'LunaController' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'BGTexture')
  i2460.UseTime = !!i2461[2]
  i2460.TimePlay = i2461[3]
  i2460.Character = i2461[4]
  request.r(i2461[5], i2461[6], 0, i2460, 'characterSelector')
  request.r(i2461[7], i2461[8], 0, i2460, 'BGImage')
  var i2463 = i2461[9]
  var i2462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 1, i2462, '')
  }
  i2460.CTA = i2462
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2467 = data
  i2466.ambientIntensity = i2467[0]
  i2466.reflectionIntensity = i2467[1]
  i2466.ambientMode = i2467[2]
  i2466.ambientLight = new pc.Color(i2467[3], i2467[4], i2467[5], i2467[6])
  i2466.ambientSkyColor = new pc.Color(i2467[7], i2467[8], i2467[9], i2467[10])
  i2466.ambientGroundColor = new pc.Color(i2467[11], i2467[12], i2467[13], i2467[14])
  i2466.ambientEquatorColor = new pc.Color(i2467[15], i2467[16], i2467[17], i2467[18])
  i2466.fogColor = new pc.Color(i2467[19], i2467[20], i2467[21], i2467[22])
  i2466.fogEndDistance = i2467[23]
  i2466.fogStartDistance = i2467[24]
  i2466.fogDensity = i2467[25]
  i2466.fog = !!i2467[26]
  request.r(i2467[27], i2467[28], 0, i2466, 'skybox')
  i2466.fogMode = i2467[29]
  var i2469 = i2467[30]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2469[i + 0]) );
  }
  i2466.lightmaps = i2468
  i2466.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2467[31], i2466.lightProbes)
  i2466.lightmapsMode = i2467[32]
  i2466.mixedBakeMode = i2467[33]
  i2466.environmentLightingMode = i2467[34]
  i2466.ambientProbe = new pc.SphericalHarmonicsL2(i2467[35])
  request.r(i2467[36], i2467[37], 0, i2466, 'customReflection')
  request.r(i2467[38], i2467[39], 0, i2466, 'defaultReflection')
  i2466.defaultReflectionMode = i2467[40]
  i2466.defaultReflectionResolution = i2467[41]
  i2466.sunLightObjectId = i2467[42]
  i2466.pixelLightCount = i2467[43]
  i2466.defaultReflectionHDR = !!i2467[44]
  i2466.hasLightDataAsset = !!i2467[45]
  i2466.hasManualGenerate = !!i2467[46]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'lightmapColor')
  request.r(i2473[2], i2473[3], 0, i2472, 'lightmapDirection')
  request.r(i2473[4], i2473[5], 0, i2472, 'shadowMask')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2474 = root || new UnityEngine.LightProbes()
  var i2475 = data
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i2483 = data
  i2482.name = i2483[0]
  i2482.bounciness = i2483[1]
  i2482.friction = i2483[2]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2485 = data
  var i2487 = i2485[0]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2487[i + 0]));
  }
  i2484.ShaderCompilationErrors = i2486
  i2484.name = i2485[1]
  i2484.guid = i2485[2]
  var i2489 = i2485[3]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2484.shaderDefinedKeywords = i2488
  var i2491 = i2485[4]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2491[i + 0]) );
  }
  i2484.passes = i2490
  var i2493 = i2485[5]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2493[i + 0]) );
  }
  i2484.usePasses = i2492
  var i2495 = i2485[6]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2495[i + 0]) );
  }
  i2484.defaultParameterValues = i2494
  request.r(i2485[7], i2485[8], 0, i2484, 'unityFallbackShader')
  i2484.readDepth = !!i2485[9]
  i2484.hasDepthOnlyPass = !!i2485[10]
  i2484.isCreatedByShaderGraph = !!i2485[11]
  i2484.disableBatching = !!i2485[12]
  i2484.compiled = !!i2485[13]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2499 = data
  i2498.shaderName = i2499[0]
  i2498.errorMessage = i2499[1]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2504 = root || new pc.UnityShaderPass()
  var i2505 = data
  i2504.id = i2505[0]
  i2504.subShaderIndex = i2505[1]
  i2504.name = i2505[2]
  i2504.passType = i2505[3]
  i2504.grabPassTextureName = i2505[4]
  i2504.usePass = !!i2505[5]
  i2504.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[6], i2504.zTest)
  i2504.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[7], i2504.zWrite)
  i2504.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[8], i2504.culling)
  i2504.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2505[9], i2504.blending)
  i2504.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2505[10], i2504.alphaBlending)
  i2504.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[11], i2504.colorWriteMask)
  i2504.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[12], i2504.offsetUnits)
  i2504.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[13], i2504.offsetFactor)
  i2504.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[14], i2504.stencilRef)
  i2504.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[15], i2504.stencilReadMask)
  i2504.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2505[16], i2504.stencilWriteMask)
  i2504.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2505[17], i2504.stencilOp)
  i2504.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2505[18], i2504.stencilOpFront)
  i2504.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2505[19], i2504.stencilOpBack)
  var i2507 = i2505[20]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2507[i + 0]) );
  }
  i2504.tags = i2506
  var i2509 = i2505[21]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2504.passDefinedKeywords = i2508
  var i2511 = i2505[22]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2511[i + 0]) );
  }
  i2504.passDefinedKeywordGroups = i2510
  var i2513 = i2505[23]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2513[i + 0]) );
  }
  i2504.variants = i2512
  var i2515 = i2505[24]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2515[i + 0]) );
  }
  i2504.excludedVariants = i2514
  i2504.hasDepthReader = !!i2505[25]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2517 = data
  i2516.val = i2517[0]
  i2516.name = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2519 = data
  i2518.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2519[0], i2518.src)
  i2518.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2519[1], i2518.dst)
  i2518.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2519[2], i2518.op)
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2521 = data
  i2520.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2521[0], i2520.pass)
  i2520.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2521[1], i2520.fail)
  i2520.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2521[2], i2520.zFail)
  i2520.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2521[3], i2520.comp)
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2525 = data
  i2524.name = i2525[0]
  i2524.value = i2525[1]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2529 = data
  var i2531 = i2529[0]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2528.keywords = i2530
  i2528.hasDiscard = !!i2529[1]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2535 = data
  i2534.passId = i2535[0]
  i2534.subShaderIndex = i2535[1]
  var i2537 = i2535[2]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( i2537[i + 0] );
  }
  i2534.keywords = i2536
  i2534.vertexProgram = i2535[3]
  i2534.fragmentProgram = i2535[4]
  i2534.exportedForWebGl2 = !!i2535[5]
  i2534.readDepth = !!i2535[6]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'shader')
  i2540.pass = i2541[2]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.type = i2545[1]
  i2544.value = new pc.Vec4( i2545[2], i2545[3], i2545[4], i2545[5] )
  i2544.textureValue = i2545[6]
  i2544.shaderPropertyFlag = i2545[7]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2547 = data
  i2546.name = i2547[0]
  request.r(i2547[1], i2547[2], 0, i2546, 'texture')
  i2546.aabb = i2547[3]
  i2546.vertices = i2547[4]
  i2546.triangles = i2547[5]
  i2546.textureRect = UnityEngine.Rect.MinMaxRect(i2547[6], i2547[7], i2547[8], i2547[9])
  i2546.packedRect = UnityEngine.Rect.MinMaxRect(i2547[10], i2547[11], i2547[12], i2547[13])
  i2546.border = new pc.Vec4( i2547[14], i2547[15], i2547[16], i2547[17] )
  i2546.transparency = i2547[18]
  i2546.bounds = i2547[19]
  i2546.pixelsPerUnit = i2547[20]
  i2546.textureWidth = i2547[21]
  i2546.textureHeight = i2547[22]
  i2546.nativeSize = new pc.Vec2( i2547[23], i2547[24] )
  i2546.pivot = new pc.Vec2( i2547[25], i2547[26] )
  i2546.textureRectOffset = new pc.Vec2( i2547[27], i2547[28] )
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2549 = data
  i2548.name = i2549[0]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2553[i + 0]) );
  }
  i2550.files = i2552
  i2550.componentToPrefabIds = i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2557 = data
  i2556.path = i2557[0]
  request.r(i2557[1], i2557[2], 0, i2556, 'unityObject')
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2561[i + 0]) );
  }
  i2558.scriptsExecutionOrder = i2560
  var i2563 = i2559[1]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2563[i + 0]) );
  }
  i2558.sortingLayers = i2562
  var i2565 = i2559[2]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2565[i + 0]) );
  }
  i2558.cullingLayers = i2564
  i2558.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2559[3], i2558.timeSettings)
  i2558.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2559[4], i2558.physicsSettings)
  i2558.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2559[5], i2558.physics2DSettings)
  i2558.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2559[6], i2558.qualitySettings)
  i2558.enableRealtimeShadows = !!i2559[7]
  i2558.enableAutoInstancing = !!i2559[8]
  i2558.enableStaticBatching = !!i2559[9]
  i2558.enableDynamicBatching = !!i2559[10]
  i2558.usePreservativeDynamicBatching = !!i2559[11]
  i2558.lightmapEncodingQuality = i2559[12]
  i2558.desiredColorSpace = i2559[13]
  var i2567 = i2559[14]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( i2567[i + 0] );
  }
  i2558.allTags = i2566
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.value = i2571[1]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2575 = data
  i2574.id = i2575[0]
  i2574.name = i2575[1]
  i2574.value = i2575[2]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2579 = data
  i2578.id = i2579[0]
  i2578.name = i2579[1]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2581 = data
  i2580.fixedDeltaTime = i2581[0]
  i2580.maximumDeltaTime = i2581[1]
  i2580.timeScale = i2581[2]
  i2580.maximumParticleTimestep = i2581[3]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2583 = data
  i2582.gravity = new pc.Vec3( i2583[0], i2583[1], i2583[2] )
  i2582.defaultSolverIterations = i2583[3]
  i2582.bounceThreshold = i2583[4]
  i2582.autoSyncTransforms = !!i2583[5]
  i2582.autoSimulation = !!i2583[6]
  var i2585 = i2583[7]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2585[i + 0]) );
  }
  i2582.collisionMatrix = i2584
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2589 = data
  i2588.enabled = !!i2589[0]
  i2588.layerId = i2589[1]
  i2588.otherLayerId = i2589[2]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'material')
  i2590.gravity = new pc.Vec2( i2591[2], i2591[3] )
  i2590.positionIterations = i2591[4]
  i2590.velocityIterations = i2591[5]
  i2590.velocityThreshold = i2591[6]
  i2590.maxLinearCorrection = i2591[7]
  i2590.maxAngularCorrection = i2591[8]
  i2590.maxTranslationSpeed = i2591[9]
  i2590.maxRotationSpeed = i2591[10]
  i2590.baumgarteScale = i2591[11]
  i2590.baumgarteTOIScale = i2591[12]
  i2590.timeToSleep = i2591[13]
  i2590.linearSleepTolerance = i2591[14]
  i2590.angularSleepTolerance = i2591[15]
  i2590.defaultContactOffset = i2591[16]
  i2590.autoSimulation = !!i2591[17]
  i2590.queriesHitTriggers = !!i2591[18]
  i2590.queriesStartInColliders = !!i2591[19]
  i2590.callbacksOnDisable = !!i2591[20]
  i2590.reuseCollisionCallbacks = !!i2591[21]
  i2590.autoSyncTransforms = !!i2591[22]
  var i2593 = i2591[23]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2593[i + 0]) );
  }
  i2590.collisionMatrix = i2592
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2597 = data
  i2596.enabled = !!i2597[0]
  i2596.layerId = i2597[1]
  i2596.otherLayerId = i2597[2]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2599 = data
  var i2601 = i2599[0]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2601[i + 0]) );
  }
  i2598.qualityLevels = i2600
  var i2603 = i2599[1]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( i2603[i + 0] );
  }
  i2598.names = i2602
  i2598.shadows = i2599[2]
  i2598.anisotropicFiltering = i2599[3]
  i2598.antiAliasing = i2599[4]
  i2598.lodBias = i2599[5]
  i2598.shadowCascades = i2599[6]
  i2598.shadowDistance = i2599[7]
  i2598.shadowmaskMode = i2599[8]
  i2598.shadowProjection = i2599[9]
  i2598.shadowResolution = i2599[10]
  i2598.softParticles = !!i2599[11]
  i2598.softVegetation = !!i2599[12]
  i2598.activeColorSpace = i2599[13]
  i2598.desiredColorSpace = i2599[14]
  i2598.masterTextureLimit = i2599[15]
  i2598.maxQueuedFrames = i2599[16]
  i2598.particleRaycastBudget = i2599[17]
  i2598.pixelLightCount = i2599[18]
  i2598.realtimeReflectionProbes = !!i2599[19]
  i2598.shadowCascade2Split = i2599[20]
  i2598.shadowCascade4Split = new pc.Vec3( i2599[21], i2599[22], i2599[23] )
  i2598.streamingMipmapsActive = !!i2599[24]
  i2598.vSyncCount = i2599[25]
  i2598.asyncUploadBufferSize = i2599[26]
  i2598.asyncUploadTimeSlice = i2599[27]
  i2598.billboardsFaceCameraPosition = !!i2599[28]
  i2598.shadowNearPlaneOffset = i2599[29]
  i2598.streamingMipmapsMemoryBudget = i2599[30]
  i2598.maximumLODLevel = i2599[31]
  i2598.streamingMipmapsAddAllCameras = !!i2599[32]
  i2598.streamingMipmapsMaxLevelReduction = i2599[33]
  i2598.streamingMipmapsRenderersPerFrame = i2599[34]
  i2598.resolutionScalingFixedDPIFactor = i2599[35]
  i2598.streamingMipmapsMaxFileIORequests = i2599[36]
  i2598.currentQualityLevel = i2599[37]
  return i2598
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'm_ObjectArgument')
  i2606.m_ObjectArgumentAssemblyTypeName = i2607[2]
  i2606.m_IntArgument = i2607[3]
  i2606.m_FloatArgument = i2607[4]
  i2606.m_StringArgument = i2607[5]
  i2606.m_BoolArgument = !!i2607[6]
  return i2606
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[13],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[6],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"41":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[13],"81":[82],"83":[84],"85":[84],"21":[18],"15":[13],"86":[3],"87":[13],"88":[89],"90":[43],"91":[21],"92":[18],"93":[26,18],"94":[82],"95":[26,18],"96":[18],"97":[18],"98":[82,18],"99":[18,26],"100":[101],"102":[101],"103":[101],"104":[18],"105":[18],"24":[21],"42":[26,18],"25":[18],"23":[21],"106":[18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"28":[26,18],"115":[18],"116":[18],"117":[18],"118":[18],"119":[26,18],"120":[18],"121":[43],"122":[43],"44":[43],"123":[43],"124":[13],"125":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.MonoBehaviour","MelonAd.Bullet","UnityEngine.CircleCollider2D","MelonAd.FlameParticle","UnityEngine.Camera","UnityEngine.AudioListener","MelonAd.CameraFit","MelonAd.UIController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.CanvasRenderer","MelonAd.UICover","UnityEngine.UI.RawImage","MelonAd.LevelRefs","MelonAd.Ragdoll","MelonAd.Rifle","MelonAd.FlameThrower","MelonAd.Pin","MelonAd.ExitZone","MelonAd.Grabbable","MelonAd.Spike","MelonAd.Acid","MelonAd.CharacterSelector","MelonAd.RagdollPart","UnityEngine.SpriteMask","UnityEngine.HingeJoint2D","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","MelonAd.GameConfig","MelonAd.AudioManager","UnityEngine.AudioClip","MelonAd.FxManager","MelonAd.GameManager","LunaController","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "09/30/2026 04:31:40";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRP_V05_HoaiTT_DatDV";

Deserializers.lunaAppID = "42814";

Deserializers.projectId = "83336d6262c2dbe44ad1c159a3170903";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3552";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRP_V05";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d1f5705a-c3ab-4d5c-97fd-a7420828610c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

