var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointSpring' )
  var i327 = data
  i326.spring = i327[0]
  i326.damper = i327[1]
  i326.targetPosition = i327[2]
  return i326
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointMotor' )
  var i329 = data
  i328.m_TargetVelocity = i329[0]
  i328.m_Force = i329[1]
  i328.m_FreeSpin = i329[2]
  return i328
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointLimits' )
  var i331 = data
  i330.m_Min = i331[0]
  i330.m_Max = i331[1]
  i330.m_Bounciness = i331[2]
  i330.m_BounceMinVelocity = i331[3]
  i330.m_ContactDistance = i331[4]
  i330.minBounce = i331[5]
  i330.maxBounce = i331[6]
  return i330
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointDrive' )
  var i333 = data
  i332.m_PositionSpring = i333[0]
  i332.m_PositionDamper = i333[1]
  i332.m_MaximumForce = i333[2]
  i332.m_UseAcceleration = i333[3]
  return i332
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i335 = data
  i334.m_Spring = i335[0]
  i334.m_Damper = i335[1]
  return i334
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i337 = data
  i336.m_Limit = i337[0]
  i336.m_Bounciness = i337[1]
  i336.m_ContactDistance = i337[2]
  return i336
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i339 = data
  i338.m_ExtremumSlip = i339[0]
  i338.m_ExtremumValue = i339[1]
  i338.m_AsymptoteSlip = i339[2]
  i338.m_AsymptoteValue = i339[3]
  i338.m_Stiffness = i339[4]
  return i338
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i341 = data
  i340.m_LowerAngle = i341[0]
  i340.m_UpperAngle = i341[1]
  return i340
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i343 = data
  i342.m_MotorSpeed = i343[0]
  i342.m_MaximumMotorTorque = i343[1]
  return i342
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i345 = data
  i344.m_DampingRatio = i345[0]
  i344.m_Frequency = i345[1]
  i344.m_Angle = i345[2]
  return i344
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i347 = data
  i346.m_LowerTranslation = i347[0]
  i346.m_UpperTranslation = i347[1]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i349 = data
  i348.name = i349[0]
  i348.width = i349[1]
  i348.height = i349[2]
  i348.mipmapCount = i349[3]
  i348.anisoLevel = i349[4]
  i348.filterMode = i349[5]
  i348.hdr = !!i349[6]
  i348.format = i349[7]
  i348.wrapMode = i349[8]
  i348.alphaIsTransparency = !!i349[9]
  i348.alphaSource = i349[10]
  i348.graphicsFormat = i349[11]
  i348.sRGBTexture = !!i349[12]
  i348.desiredColorSpace = i349[13]
  i348.wrapU = i349[14]
  i348.wrapV = i349[15]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i351 = data
  i350.position = new pc.Vec3( i351[0], i351[1], i351[2] )
  i350.scale = new pc.Vec3( i351[3], i351[4], i351[5] )
  i350.rotation = new pc.Quat(i351[6], i351[7], i351[8], i351[9])
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i353 = data
  i352.sortingLayerIndex = i353[0]
  i352.sortingOrder = i353[1]
  i352.sortingLayerName = i353[2]
  i352.enabled = !!i353[3]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i355 = data
  i354.bodyType = i355[0]
  request.r(i355[1], i355[2], 0, i354, 'material')
  i354.simulated = !!i355[3]
  i354.useAutoMass = !!i355[4]
  i354.mass = i355[5]
  i354.drag = i355[6]
  i354.angularDrag = i355[7]
  i354.gravityScale = i355[8]
  i354.collisionDetectionMode = i355[9]
  i354.sleepMode = i355[10]
  i354.constraints = i355[11]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i357 = data
  i356.color = new pc.Color(i357[0], i357[1], i357[2], i357[3])
  request.r(i357[4], i357[5], 0, i356, 'sprite')
  i356.flipX = !!i357[6]
  i356.flipY = !!i357[7]
  i356.drawMode = i357[8]
  i356.size = new pc.Vec2( i357[9], i357[10] )
  i356.tileMode = i357[11]
  i356.adaptiveModeThreshold = i357[12]
  i356.maskInteraction = i357[13]
  i356.spriteSortPoint = i357[14]
  i356.enabled = !!i357[15]
  request.r(i357[16], i357[17], 0, i356, 'sharedMaterial')
  var i359 = i357[18]
  var i358 = []
  for(var i = 0; i < i359.length; i += 2) {
  request.r(i359[i + 0], i359[i + 1], 2, i358, '')
  }
  i356.sharedMaterials = i358
  i356.receiveShadows = !!i357[19]
  i356.shadowCastingMode = i357[20]
  i356.sortingLayerID = i357[21]
  i356.sortingOrder = i357[22]
  i356.lightmapIndex = i357[23]
  i356.lightmapSceneIndex = i357[24]
  i356.lightmapScaleOffset = new pc.Vec4( i357[25], i357[26], i357[27], i357[28] )
  i356.lightProbeUsage = i357[29]
  i356.reflectionProbeUsage = i357[30]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i363 = data
  i362.usedByComposite = !!i363[0]
  i362.autoTiling = !!i363[1]
  i362.size = new pc.Vec2( i363[2], i363[3] )
  i362.edgeRadius = i363[4]
  i362.enabled = !!i363[5]
  i362.isTrigger = !!i363[6]
  i362.usedByEffector = !!i363[7]
  i362.density = i363[8]
  i362.offset = new pc.Vec2( i363[9], i363[10] )
  request.r(i363[11], i363[12], 0, i362, 'material')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i365 = data
  i364.useLimits = !!i365[0]
  i364.limits = request.d('UnityEngine.JointAngleLimits2D', i365[1], i364.limits)
  i364.useMotor = !!i365[2]
  i364.motor = request.d('UnityEngine.JointMotor2D', i365[3], i364.motor)
  i364.anchor = new pc.Vec2( i365[4], i365[5] )
  i364.connectedAnchor = new pc.Vec2( i365[6], i365[7] )
  i364.autoConfigureConnectedAnchor = !!i365[8]
  request.r(i365[9], i365[10], 0, i364, 'connectedBody')
  i364.breakForce = i365[11]
  i364.breakTorque = i365[12]
  i364.enableCollision = !!i365[13]
  i364.enabled = !!i365[14]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i367 = data
  i366.name = i367[0]
  i366.tagId = i367[1]
  i366.enabled = !!i367[2]
  i366.isStatic = !!i367[3]
  i366.layer = i367[4]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i368 = root || new pc.UnityMaterial()
  var i369 = data
  i368.name = i369[0]
  request.r(i369[1], i369[2], 0, i368, 'shader')
  i368.renderQueue = i369[3]
  i368.enableInstancing = !!i369[4]
  var i371 = i369[5]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i371[i + 0]) );
  }
  i368.floatParameters = i370
  var i373 = i369[6]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i373[i + 0]) );
  }
  i368.colorParameters = i372
  var i375 = i369[7]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i375[i + 0]) );
  }
  i368.vectorParameters = i374
  var i377 = i369[8]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i377[i + 0]) );
  }
  i368.textureParameters = i376
  var i379 = i369[9]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i379[i + 0]) );
  }
  i368.materialFlags = i378
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = i383[1]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = new pc.Color(i387[1], i387[2], i387[3], i387[4])
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i391 = data
  i390.name = i391[0]
  i390.value = new pc.Vec4( i391[1], i391[2], i391[3], i391[4] )
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i395 = data
  i394.name = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'value')
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i399 = data
  i398.name = i399[0]
  i398.enabled = !!i399[1]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i401 = data
  i400.name = i401[0]
  i400.index = i401[1]
  i400.startup = !!i401[2]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i403 = data
  i402.aspect = i403[0]
  i402.orthographic = !!i403[1]
  i402.orthographicSize = i403[2]
  i402.backgroundColor = new pc.Color(i403[3], i403[4], i403[5], i403[6])
  i402.nearClipPlane = i403[7]
  i402.farClipPlane = i403[8]
  i402.fieldOfView = i403[9]
  i402.depth = i403[10]
  i402.clearFlags = i403[11]
  i402.cullingMask = i403[12]
  i402.rect = i403[13]
  request.r(i403[14], i403[15], 0, i402, 'targetTexture')
  i402.usePhysicalProperties = !!i403[16]
  i402.focalLength = i403[17]
  i402.sensorSize = new pc.Vec2( i403[18], i403[19] )
  i402.lensShift = new pc.Vec2( i403[20], i403[21] )
  i402.gateFit = i403[22]
  i402.commandBufferCount = i403[23]
  i402.cameraType = i403[24]
  i402.enabled = !!i403[25]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i405 = data
  i404.pivot = new pc.Vec2( i405[0], i405[1] )
  i404.anchorMin = new pc.Vec2( i405[2], i405[3] )
  i404.anchorMax = new pc.Vec2( i405[4], i405[5] )
  i404.sizeDelta = new pc.Vec2( i405[6], i405[7] )
  i404.anchoredPosition3D = new pc.Vec3( i405[8], i405[9], i405[10] )
  i404.rotation = new pc.Quat(i405[11], i405[12], i405[13], i405[14])
  i404.scale = new pc.Vec3( i405[15], i405[16], i405[17] )
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i407 = data
  i406.planeDistance = i407[0]
  i406.referencePixelsPerUnit = i407[1]
  i406.isFallbackOverlay = !!i407[2]
  i406.renderMode = i407[3]
  i406.renderOrder = i407[4]
  i406.sortingLayerName = i407[5]
  i406.sortingOrder = i407[6]
  i406.scaleFactor = i407[7]
  request.r(i407[8], i407[9], 0, i406, 'worldCamera')
  i406.overrideSorting = !!i407[10]
  i406.pixelPerfect = !!i407[11]
  i406.targetDisplay = i407[12]
  i406.overridePixelPerfect = !!i407[13]
  i406.enabled = !!i407[14]
  return i406
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i409 = data
  i408.m_UiScaleMode = i409[0]
  i408.m_ReferencePixelsPerUnit = i409[1]
  i408.m_ScaleFactor = i409[2]
  i408.m_ReferenceResolution = new pc.Vec2( i409[3], i409[4] )
  i408.m_ScreenMatchMode = i409[5]
  i408.m_MatchWidthOrHeight = i409[6]
  i408.m_PhysicalUnit = i409[7]
  i408.m_FallbackScreenDPI = i409[8]
  i408.m_DefaultSpriteDPI = i409[9]
  i408.m_DynamicPixelsPerUnit = i409[10]
  i408.m_PresetInfoIsWorld = !!i409[11]
  return i408
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i411 = data
  i410.m_IgnoreReversedGraphics = !!i411[0]
  i410.m_BlockingObjects = i411[1]
  i410.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i411[2] )
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i413 = data
  i412.cullTransparentMesh = !!i413[0]
  return i412
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'm_Texture')
  i414.m_UVRect = UnityEngine.Rect.MinMaxRect(i415[2], i415[3], i415[4], i415[5])
  request.r(i415[6], i415[7], 0, i414, 'm_Material')
  i414.m_Maskable = !!i415[8]
  i414.m_Color = new pc.Color(i415[9], i415[10], i415[11], i415[12])
  i414.m_RaycastTarget = !!i415[13]
  i414.m_RaycastPadding = new pc.Vec4( i415[14], i415[15], i415[16], i415[17] )
  return i414
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i417 = data
  i416.m_AspectMode = i417[0]
  i416.m_AspectRatio = i417[1]
  return i416
}

Deserializers["MelonSandboxGameplay"] = function (request, data, root) {
  var i418 = root || request.c( 'MelonSandboxGameplay' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'lunaController')
  request.r(i419[2], i419[3], 0, i418, 'spawnTutorial')
  var i421 = i419[4]
  var i420 = []
  for(var i = 0; i < i421.length; i += 2) {
  request.r(i421[i + 0], i421[i + 1], 2, i420, '')
  }
  i418.characterPrefabs = i420
  var i423 = i419[5]
  var i422 = []
  for(var i = 0; i < i423.length; i += 2) {
  request.r(i423[i + 0], i423[i + 1], 2, i422, '')
  }
  i418.enemyPrefabs = i422
  i418.enemyCount = i419[6]
  i418.enemySpawnInterval = i419[7]
  i418.enemyMoveSpeed = i419[8]
  i418.enemyDropHeight = i419[9]
  request.r(i419[10], i419[11], 0, i418, 'deathSound')
  request.r(i419[12], i419[13], 0, i418, 'biteSound')
  request.r(i419[14], i419[15], 0, i418, 'failObject')
  i418.enemySpawnXMin = i419[16]
  i418.enemySpawnXMax = i419[17]
  var i425 = i419[18]
  var i424 = []
  for(var i = 0; i < i425.length; i += 2) {
  request.r(i425[i + 0], i425[i + 1], 2, i424, '')
  }
  i418.worldToolSprites = i424
  var i427 = i419[19]
  var i426 = []
  for(var i = 0; i < i427.length; i += 2) {
  request.r(i427[i + 0], i427[i + 1], 2, i426, '')
  }
  i418.variantIcons = i426
  var i429 = i419[20]
  var i428 = []
  for(var i = 0; i < i429.length; i += 2) {
  request.r(i429[i + 0], i429[i + 1], 2, i428, '')
  }
  i418.tabs = i428
  var i431 = i419[21]
  var i430 = []
  for(var i = 0; i < i431.length; i += 2) {
  request.r(i431[i + 0], i431[i + 1], 2, i430, '')
  }
  i418.variants = i430
  var i433 = i419[22]
  var i432 = []
  for(var i = 0; i < i433.length; i += 2) {
  request.r(i433[i + 0], i433[i + 1], 2, i432, '')
  }
  i418.weaponButtons = i432
  i418.cameraTransitionDuration = i419[23]
  request.r(i419[24], i419[25], 0, i418, 'botUI')
  request.r(i419[26], i419[27], 0, i418, 'clickSound')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'clip')
  request.r(i441[2], i441[3], 0, i440, 'outputAudioMixerGroup')
  i440.playOnAwake = !!i441[4]
  i440.loop = !!i441[5]
  i440.time = i441[6]
  i440.volume = i441[7]
  i440.pitch = i441[8]
  i440.enabled = !!i441[9]
  return i440
}

Deserializers["AudioController"] = function (request, data, root) {
  var i442 = root || request.c( 'AudioController' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'lunaController')
  request.r(i443[2], i443[3], 0, i442, 'musicSource')
  request.r(i443[4], i443[5], 0, i442, 'pool')
  return i442
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.Image' )
  var i445 = data
  request.r(i445[0], i445[1], 0, i444, 'm_Sprite')
  i444.m_Type = i445[2]
  i444.m_PreserveAspect = !!i445[3]
  i444.m_FillCenter = !!i445[4]
  i444.m_FillMethod = i445[5]
  i444.m_FillAmount = i445[6]
  i444.m_FillClockwise = !!i445[7]
  i444.m_FillOrigin = i445[8]
  i444.m_UseSpriteMesh = !!i445[9]
  i444.m_PixelsPerUnitMultiplier = i445[10]
  request.r(i445[11], i445[12], 0, i444, 'm_Material')
  i444.m_Maskable = !!i445[13]
  i444.m_Color = new pc.Color(i445[14], i445[15], i445[16], i445[17])
  i444.m_RaycastTarget = !!i445[18]
  i444.m_RaycastPadding = new pc.Vec4( i445[19], i445[20], i445[21], i445[22] )
  return i444
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.Button' )
  var i447 = data
  i446.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i447[0], i446.m_OnClick)
  i446.m_Navigation = request.d('UnityEngine.UI.Navigation', i447[1], i446.m_Navigation)
  i446.m_Transition = i447[2]
  i446.m_Colors = request.d('UnityEngine.UI.ColorBlock', i447[3], i446.m_Colors)
  i446.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i447[4], i446.m_SpriteState)
  i446.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i447[5], i446.m_AnimationTriggers)
  i446.m_Interactable = !!i447[6]
  request.r(i447[7], i447[8], 0, i446, 'm_TargetGraphic')
  return i446
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i449 = data
  i448.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i449[0], i448.m_PersistentCalls)
  return i448
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i451 = data
  var i453 = i451[0]
  var i452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i453.length; i += 1) {
    i452.add(request.d('UnityEngine.Events.PersistentCall', i453[i + 0]));
  }
  i450.m_Calls = i452
  return i450
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'm_Target')
  i456.m_TargetAssemblyTypeName = i457[2]
  i456.m_MethodName = i457[3]
  i456.m_Mode = i457[4]
  i456.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i457[5], i456.m_Arguments)
  i456.m_CallState = i457[6]
  return i456
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i459 = data
  i458.m_Mode = i459[0]
  i458.m_WrapAround = !!i459[1]
  request.r(i459[2], i459[3], 0, i458, 'm_SelectOnUp')
  request.r(i459[4], i459[5], 0, i458, 'm_SelectOnDown')
  request.r(i459[6], i459[7], 0, i458, 'm_SelectOnLeft')
  request.r(i459[8], i459[9], 0, i458, 'm_SelectOnRight')
  return i458
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i461 = data
  i460.m_NormalColor = new pc.Color(i461[0], i461[1], i461[2], i461[3])
  i460.m_HighlightedColor = new pc.Color(i461[4], i461[5], i461[6], i461[7])
  i460.m_PressedColor = new pc.Color(i461[8], i461[9], i461[10], i461[11])
  i460.m_SelectedColor = new pc.Color(i461[12], i461[13], i461[14], i461[15])
  i460.m_DisabledColor = new pc.Color(i461[16], i461[17], i461[18], i461[19])
  i460.m_ColorMultiplier = i461[20]
  i460.m_FadeDuration = i461[21]
  return i460
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i463 = data
  request.r(i463[0], i463[1], 0, i462, 'm_HighlightedSprite')
  request.r(i463[2], i463[3], 0, i462, 'm_PressedSprite')
  request.r(i463[4], i463[5], 0, i462, 'm_SelectedSprite')
  request.r(i463[6], i463[7], 0, i462, 'm_DisabledSprite')
  return i462
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i465 = data
  i464.m_NormalTrigger = i465[0]
  i464.m_HighlightedTrigger = i465[1]
  i464.m_PressedTrigger = i465[2]
  i464.m_SelectedTrigger = i465[3]
  i464.m_DisabledTrigger = i465[4]
  return i464
}

Deserializers["SandboxVariantButton"] = function (request, data, root) {
  var i466 = root || request.c( 'SandboxVariantButton' )
  var i467 = data
  return i466
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.Text' )
  var i469 = data
  i468.m_FontData = request.d('UnityEngine.UI.FontData', i469[0], i468.m_FontData)
  i468.m_Text = i469[1]
  request.r(i469[2], i469[3], 0, i468, 'm_Material')
  i468.m_Maskable = !!i469[4]
  i468.m_Color = new pc.Color(i469[5], i469[6], i469[7], i469[8])
  i468.m_RaycastTarget = !!i469[9]
  i468.m_RaycastPadding = new pc.Vec4( i469[10], i469[11], i469[12], i469[13] )
  return i468
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.FontData' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_Font')
  i470.m_FontSize = i471[2]
  i470.m_FontStyle = i471[3]
  i470.m_BestFit = !!i471[4]
  i470.m_MinSize = i471[5]
  i470.m_MaxSize = i471[6]
  i470.m_Alignment = i471[7]
  i470.m_AlignByGeometry = !!i471[8]
  i470.m_RichText = !!i471[9]
  i470.m_HorizontalOverflow = i471[10]
  i470.m_VerticalOverflow = i471[11]
  i470.m_LineSpacing = i471[12]
  return i470
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i473 = data
  i472.m_IgnoreLayout = !!i473[0]
  i472.m_MinWidth = i473[1]
  i472.m_MinHeight = i473[2]
  i472.m_PreferredWidth = i473[3]
  i472.m_PreferredHeight = i473[4]
  i472.m_FlexibleWidth = i473[5]
  i472.m_FlexibleHeight = i473[6]
  i472.m_LayoutPriority = i473[7]
  return i472
}

Deserializers["SpawnTutorial"] = function (request, data, root) {
  var i474 = root || request.c( 'SpawnTutorial' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'content')
  request.r(i475[2], i475[3], 0, i474, 'pointer')
  request.r(i475[4], i475[5], 0, i474, 'instruction')
  var i477 = i475[6]
  var i476 = []
  for(var i = 0; i < i477.length; i += 2) {
  request.r(i477[i + 0], i477[i + 1], 2, i476, '')
  }
  i474.targets = i476
  var i479 = i475[7]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i474.weaponTargets = i478
  var i481 = i475[8]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i474.characterNames = i480
  return i474
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.Outline' )
  var i485 = data
  i484.m_EffectColor = new pc.Color(i485[0], i485[1], i485[2], i485[3])
  i484.m_EffectDistance = new pc.Vec2( i485[4], i485[5] )
  i484.m_UseGraphicAlpha = !!i485[6]
  return i484
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i486 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i487 = data
  i486.targetIsSelf = !!i487[0]
  request.r(i487[1], i487[2], 0, i486, 'targetGO')
  i486.tweenTargetIsTargetGO = !!i487[3]
  i486.delay = i487[4]
  i486.duration = i487[5]
  i486.easeType = i487[6]
  i486.easeCurve = new pc.AnimationCurve( { keys_flow: i487[7] } )
  i486.loopType = i487[8]
  i486.loops = i487[9]
  i486.id = i487[10]
  i486.isRelative = !!i487[11]
  i486.isFrom = !!i487[12]
  i486.isIndependentUpdate = !!i487[13]
  i486.autoKill = !!i487[14]
  i486.autoGenerate = !!i487[15]
  i486.isActive = !!i487[16]
  i486.isValid = !!i487[17]
  request.r(i487[18], i487[19], 0, i486, 'target')
  i486.animationType = i487[20]
  i486.targetType = i487[21]
  i486.forcedTargetType = i487[22]
  i486.autoPlay = !!i487[23]
  i486.useTargetAsV3 = !!i487[24]
  i486.endValueFloat = i487[25]
  i486.endValueV3 = new pc.Vec3( i487[26], i487[27], i487[28] )
  i486.endValueV2 = new pc.Vec2( i487[29], i487[30] )
  i486.endValueColor = new pc.Color(i487[31], i487[32], i487[33], i487[34])
  i486.endValueString = i487[35]
  i486.endValueRect = UnityEngine.Rect.MinMaxRect(i487[36], i487[37], i487[38], i487[39])
  request.r(i487[40], i487[41], 0, i486, 'endValueTransform')
  i486.optionalBool0 = !!i487[42]
  i486.optionalBool1 = !!i487[43]
  i486.optionalFloat0 = i487[44]
  i486.optionalInt0 = i487[45]
  i486.optionalRotationMode = i487[46]
  i486.optionalScrambleMode = i487[47]
  i486.optionalShakeRandomnessMode = i487[48]
  i486.optionalString = i487[49]
  i486.updateType = i487[50]
  i486.isSpeedBased = !!i487[51]
  i486.hasOnStart = !!i487[52]
  i486.hasOnPlay = !!i487[53]
  i486.hasOnUpdate = !!i487[54]
  i486.hasOnStepComplete = !!i487[55]
  i486.hasOnComplete = !!i487[56]
  i486.hasOnTweenCreated = !!i487[57]
  i486.hasOnRewind = !!i487[58]
  i486.onStart = request.d('UnityEngine.Events.UnityEvent', i487[59], i486.onStart)
  i486.onPlay = request.d('UnityEngine.Events.UnityEvent', i487[60], i486.onPlay)
  i486.onUpdate = request.d('UnityEngine.Events.UnityEvent', i487[61], i486.onUpdate)
  i486.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i487[62], i486.onStepComplete)
  i486.onComplete = request.d('UnityEngine.Events.UnityEvent', i487[63], i486.onComplete)
  i486.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i487[64], i486.onTweenCreated)
  i486.onRewind = request.d('UnityEngine.Events.UnityEvent', i487[65], i486.onRewind)
  return i486
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i489 = data
  i488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i489[0], i488.m_PersistentCalls)
  return i488
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_FirstSelected')
  i490.m_sendNavigationEvents = !!i491[2]
  i490.m_DragThreshold = i491[3]
  return i490
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i493 = data
  i492.m_HorizontalAxis = i493[0]
  i492.m_VerticalAxis = i493[1]
  i492.m_SubmitButton = i493[2]
  i492.m_CancelButton = i493[3]
  i492.m_InputActionsPerSecond = i493[4]
  i492.m_RepeatDelay = i493[5]
  i492.m_ForceModuleActive = !!i493[6]
  i492.m_SendPointerHoverToParent = !!i493[7]
  return i492
}

Deserializers["LunaController"] = function (request, data, root) {
  var i494 = root || request.c( 'LunaController' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'BGTexture')
  request.r(i495[2], i495[3], 0, i494, 'BG')
  request.r(i495[4], i495[5], 0, i494, 'bgm')
  i494.maxCharacters = i495[6]
  i494.limitTimePlay = !!i495[7]
  i494.timePlay = i495[8]
  request.r(i495[9], i495[10], 0, i494, 'endCard')
  var i497 = i495[11]
  var i496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i497.length; i += 2) {
  request.r(i497[i + 0], i497[i + 1], 1, i496, '')
  }
  i494.CTA = i496
  request.r(i495[12], i495[13], 0, i494, 'fightButton')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i501 = data
  i500.ambientIntensity = i501[0]
  i500.reflectionIntensity = i501[1]
  i500.ambientMode = i501[2]
  i500.ambientLight = new pc.Color(i501[3], i501[4], i501[5], i501[6])
  i500.ambientSkyColor = new pc.Color(i501[7], i501[8], i501[9], i501[10])
  i500.ambientGroundColor = new pc.Color(i501[11], i501[12], i501[13], i501[14])
  i500.ambientEquatorColor = new pc.Color(i501[15], i501[16], i501[17], i501[18])
  i500.fogColor = new pc.Color(i501[19], i501[20], i501[21], i501[22])
  i500.fogEndDistance = i501[23]
  i500.fogStartDistance = i501[24]
  i500.fogDensity = i501[25]
  i500.fog = !!i501[26]
  request.r(i501[27], i501[28], 0, i500, 'skybox')
  i500.fogMode = i501[29]
  var i503 = i501[30]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i503[i + 0]) );
  }
  i500.lightmaps = i502
  i500.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i501[31], i500.lightProbes)
  i500.lightmapsMode = i501[32]
  i500.mixedBakeMode = i501[33]
  i500.environmentLightingMode = i501[34]
  i500.ambientProbe = new pc.SphericalHarmonicsL2(i501[35])
  request.r(i501[36], i501[37], 0, i500, 'customReflection')
  request.r(i501[38], i501[39], 0, i500, 'defaultReflection')
  i500.defaultReflectionMode = i501[40]
  i500.defaultReflectionResolution = i501[41]
  i500.sunLightObjectId = i501[42]
  i500.pixelLightCount = i501[43]
  i500.defaultReflectionHDR = !!i501[44]
  i500.hasLightDataAsset = !!i501[45]
  i500.hasManualGenerate = !!i501[46]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'lightmapColor')
  request.r(i507[2], i507[3], 0, i506, 'lightmapDirection')
  request.r(i507[4], i507[5], 0, i506, 'shadowMask')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i508 = root || new UnityEngine.LightProbes()
  var i509 = data
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i517 = data
  var i519 = i517[0]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i519.length; i += 1) {
    i518.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i519[i + 0]));
  }
  i516.ShaderCompilationErrors = i518
  i516.name = i517[1]
  i516.guid = i517[2]
  var i521 = i517[3]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( i521[i + 0] );
  }
  i516.shaderDefinedKeywords = i520
  var i523 = i517[4]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i523[i + 0]) );
  }
  i516.passes = i522
  var i525 = i517[5]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i525[i + 0]) );
  }
  i516.usePasses = i524
  var i527 = i517[6]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i527[i + 0]) );
  }
  i516.defaultParameterValues = i526
  request.r(i517[7], i517[8], 0, i516, 'unityFallbackShader')
  i516.readDepth = !!i517[9]
  i516.hasDepthOnlyPass = !!i517[10]
  i516.isCreatedByShaderGraph = !!i517[11]
  i516.disableBatching = !!i517[12]
  i516.compiled = !!i517[13]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i531 = data
  i530.shaderName = i531[0]
  i530.errorMessage = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i534 = root || new pc.UnityShaderPass()
  var i535 = data
  i534.id = i535[0]
  i534.subShaderIndex = i535[1]
  i534.name = i535[2]
  i534.passType = i535[3]
  i534.grabPassTextureName = i535[4]
  i534.usePass = !!i535[5]
  i534.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[6], i534.zTest)
  i534.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[7], i534.zWrite)
  i534.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[8], i534.culling)
  i534.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i535[9], i534.blending)
  i534.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i535[10], i534.alphaBlending)
  i534.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[11], i534.colorWriteMask)
  i534.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[12], i534.offsetUnits)
  i534.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[13], i534.offsetFactor)
  i534.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[14], i534.stencilRef)
  i534.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[15], i534.stencilReadMask)
  i534.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i535[16], i534.stencilWriteMask)
  i534.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[17], i534.stencilOp)
  i534.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[18], i534.stencilOpFront)
  i534.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i535[19], i534.stencilOpBack)
  var i537 = i535[20]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i537[i + 0]) );
  }
  i534.tags = i536
  var i539 = i535[21]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( i539[i + 0] );
  }
  i534.passDefinedKeywords = i538
  var i541 = i535[22]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i541[i + 0]) );
  }
  i534.passDefinedKeywordGroups = i540
  var i543 = i535[23]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i543[i + 0]) );
  }
  i534.variants = i542
  var i545 = i535[24]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i545[i + 0]) );
  }
  i534.excludedVariants = i544
  i534.hasDepthReader = !!i535[25]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i547 = data
  i546.val = i547[0]
  i546.name = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i549 = data
  i548.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[0], i548.src)
  i548.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[1], i548.dst)
  i548.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i549[2], i548.op)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i551 = data
  i550.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[0], i550.pass)
  i550.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[1], i550.fail)
  i550.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[2], i550.zFail)
  i550.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[3], i550.comp)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i559 = data
  var i561 = i559[0]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( i561[i + 0] );
  }
  i558.keywords = i560
  i558.hasDiscard = !!i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i565 = data
  i564.passId = i565[0]
  i564.subShaderIndex = i565[1]
  var i567 = i565[2]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i564.keywords = i566
  i564.vertexProgram = i565[3]
  i564.fragmentProgram = i565[4]
  i564.exportedForWebGl2 = !!i565[5]
  i564.readDepth = !!i565[6]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'shader')
  i570.pass = i571[2]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i575 = data
  i574.name = i575[0]
  i574.type = i575[1]
  i574.value = new pc.Vec4( i575[2], i575[3], i575[4], i575[5] )
  i574.textureValue = i575[6]
  i574.shaderPropertyFlag = i575[7]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'texture')
  i576.aabb = i577[3]
  i576.vertices = i577[4]
  i576.triangles = i577[5]
  i576.textureRect = UnityEngine.Rect.MinMaxRect(i577[6], i577[7], i577[8], i577[9])
  i576.packedRect = UnityEngine.Rect.MinMaxRect(i577[10], i577[11], i577[12], i577[13])
  i576.border = new pc.Vec4( i577[14], i577[15], i577[16], i577[17] )
  i576.transparency = i577[18]
  i576.bounds = i577[19]
  i576.pixelsPerUnit = i577[20]
  i576.textureWidth = i577[21]
  i576.textureHeight = i577[22]
  i576.nativeSize = new pc.Vec2( i577[23], i577[24] )
  i576.pivot = new pc.Vec2( i577[25], i577[26] )
  i576.textureRectOffset = new pc.Vec2( i577[27], i577[28] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i579 = data
  i578.name = i579[0]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i581 = data
  i580.name = i581[0]
  i580.ascent = i581[1]
  i580.originalLineHeight = i581[2]
  i580.fontSize = i581[3]
  var i583 = i581[4]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i583[i + 0]) );
  }
  i580.characterInfo = i582
  request.r(i581[5], i581[6], 0, i580, 'texture')
  i580.originalFontSize = i581[7]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i587 = data
  i586.index = i587[0]
  i586.advance = i587[1]
  i586.bearing = i587[2]
  i586.glyphWidth = i587[3]
  i586.glyphHeight = i587[4]
  i586.minX = i587[5]
  i586.maxX = i587[6]
  i586.minY = i587[7]
  i586.maxY = i587[8]
  i586.uvBottomLeftX = i587[9]
  i586.uvBottomLeftY = i587[10]
  i586.uvBottomRightX = i587[11]
  i586.uvBottomRightY = i587[12]
  i586.uvTopLeftX = i587[13]
  i586.uvTopLeftY = i587[14]
  i586.uvTopRightX = i587[15]
  i586.uvTopRightY = i587[16]
  return i586
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i589 = data
  i588.useSafeMode = !!i589[0]
  i588.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i589[1], i588.safeModeOptions)
  i588.timeScale = i589[2]
  i588.unscaledTimeScale = i589[3]
  i588.useSmoothDeltaTime = !!i589[4]
  i588.maxSmoothUnscaledTime = i589[5]
  i588.rewindCallbackMode = i589[6]
  i588.showUnityEditorReport = !!i589[7]
  i588.logBehaviour = i589[8]
  i588.drawGizmos = !!i589[9]
  i588.defaultRecyclable = !!i589[10]
  i588.defaultAutoPlay = i589[11]
  i588.defaultUpdateType = i589[12]
  i588.defaultTimeScaleIndependent = !!i589[13]
  i588.defaultEaseType = i589[14]
  i588.defaultEaseOvershootOrAmplitude = i589[15]
  i588.defaultEasePeriod = i589[16]
  i588.defaultAutoKill = !!i589[17]
  i588.defaultLoopType = i589[18]
  i588.debugMode = !!i589[19]
  i588.debugStoreTargetId = !!i589[20]
  i588.showPreviewPanel = !!i589[21]
  i588.storeSettingsLocation = i589[22]
  i588.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i589[23], i588.modules)
  i588.createASMDEF = !!i589[24]
  i588.showPlayingTweens = !!i589[25]
  i588.showPausedTweens = !!i589[26]
  return i588
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i591 = data
  i590.logBehaviour = i591[0]
  i590.nestedTweenFailureBehaviour = i591[1]
  return i590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i593 = data
  i592.showPanel = !!i593[0]
  i592.audioEnabled = !!i593[1]
  i592.physicsEnabled = !!i593[2]
  i592.physics2DEnabled = !!i593[3]
  i592.spriteEnabled = !!i593[4]
  i592.uiEnabled = !!i593[5]
  i592.textMeshProEnabled = !!i593[6]
  i592.tk2DEnabled = !!i593[7]
  i592.deAudioEnabled = !!i593[8]
  i592.deUnityExtendedEnabled = !!i593[9]
  i592.epoOutlineEnabled = !!i593[10]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i595 = data
  var i597 = i595[0]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i597[i + 0]) );
  }
  i594.files = i596
  i594.componentToPrefabIds = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i601 = data
  i600.path = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'unityObject')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i603 = data
  var i605 = i603[0]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i605[i + 0]) );
  }
  i602.scriptsExecutionOrder = i604
  var i607 = i603[1]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i607[i + 0]) );
  }
  i602.sortingLayers = i606
  var i609 = i603[2]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i609[i + 0]) );
  }
  i602.cullingLayers = i608
  i602.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i603[3], i602.timeSettings)
  i602.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i603[4], i602.physicsSettings)
  i602.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i603[5], i602.physics2DSettings)
  i602.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i603[6], i602.qualitySettings)
  i602.enableRealtimeShadows = !!i603[7]
  i602.enableAutoInstancing = !!i603[8]
  i602.enableStaticBatching = !!i603[9]
  i602.enableDynamicBatching = !!i603[10]
  i602.usePreservativeDynamicBatching = !!i603[11]
  i602.lightmapEncodingQuality = i603[12]
  i602.desiredColorSpace = i603[13]
  var i611 = i603[14]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( i611[i + 0] );
  }
  i602.allTags = i610
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i619 = data
  i618.id = i619[0]
  i618.name = i619[1]
  i618.value = i619[2]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i623 = data
  i622.id = i623[0]
  i622.name = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i625 = data
  i624.fixedDeltaTime = i625[0]
  i624.maximumDeltaTime = i625[1]
  i624.timeScale = i625[2]
  i624.maximumParticleTimestep = i625[3]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i627 = data
  i626.gravity = new pc.Vec3( i627[0], i627[1], i627[2] )
  i626.defaultSolverIterations = i627[3]
  i626.bounceThreshold = i627[4]
  i626.autoSyncTransforms = !!i627[5]
  i626.autoSimulation = !!i627[6]
  var i629 = i627[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i629[i + 0]) );
  }
  i626.collisionMatrix = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.layerId = i633[1]
  i632.otherLayerId = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'material')
  i634.gravity = new pc.Vec2( i635[2], i635[3] )
  i634.positionIterations = i635[4]
  i634.velocityIterations = i635[5]
  i634.velocityThreshold = i635[6]
  i634.maxLinearCorrection = i635[7]
  i634.maxAngularCorrection = i635[8]
  i634.maxTranslationSpeed = i635[9]
  i634.maxRotationSpeed = i635[10]
  i634.baumgarteScale = i635[11]
  i634.baumgarteTOIScale = i635[12]
  i634.timeToSleep = i635[13]
  i634.linearSleepTolerance = i635[14]
  i634.angularSleepTolerance = i635[15]
  i634.defaultContactOffset = i635[16]
  i634.autoSimulation = !!i635[17]
  i634.queriesHitTriggers = !!i635[18]
  i634.queriesStartInColliders = !!i635[19]
  i634.callbacksOnDisable = !!i635[20]
  i634.reuseCollisionCallbacks = !!i635[21]
  i634.autoSyncTransforms = !!i635[22]
  var i637 = i635[23]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i637[i + 0]) );
  }
  i634.collisionMatrix = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.layerId = i641[1]
  i640.otherLayerId = i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i643 = data
  var i645 = i643[0]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i645[i + 0]) );
  }
  i642.qualityLevels = i644
  var i647 = i643[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.names = i646
  i642.shadows = i643[2]
  i642.anisotropicFiltering = i643[3]
  i642.antiAliasing = i643[4]
  i642.lodBias = i643[5]
  i642.shadowCascades = i643[6]
  i642.shadowDistance = i643[7]
  i642.shadowmaskMode = i643[8]
  i642.shadowProjection = i643[9]
  i642.shadowResolution = i643[10]
  i642.softParticles = !!i643[11]
  i642.softVegetation = !!i643[12]
  i642.activeColorSpace = i643[13]
  i642.desiredColorSpace = i643[14]
  i642.masterTextureLimit = i643[15]
  i642.maxQueuedFrames = i643[16]
  i642.particleRaycastBudget = i643[17]
  i642.pixelLightCount = i643[18]
  i642.realtimeReflectionProbes = !!i643[19]
  i642.shadowCascade2Split = i643[20]
  i642.shadowCascade4Split = new pc.Vec3( i643[21], i643[22], i643[23] )
  i642.streamingMipmapsActive = !!i643[24]
  i642.vSyncCount = i643[25]
  i642.asyncUploadBufferSize = i643[26]
  i642.asyncUploadTimeSlice = i643[27]
  i642.billboardsFaceCameraPosition = !!i643[28]
  i642.shadowNearPlaneOffset = i643[29]
  i642.streamingMipmapsMemoryBudget = i643[30]
  i642.maximumLODLevel = i643[31]
  i642.streamingMipmapsAddAllCameras = !!i643[32]
  i642.streamingMipmapsMaxLevelReduction = i643[33]
  i642.streamingMipmapsRenderersPerFrame = i643[34]
  i642.resolutionScalingFixedDPIFactor = i643[35]
  i642.streamingMipmapsMaxFileIORequests = i643[36]
  i642.currentQualityLevel = i643[37]
  return i642
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_ObjectArgument')
  i650.m_ObjectArgumentAssemblyTypeName = i651[2]
  i650.m_IntArgument = i651[3]
  i650.m_FloatArgument = i651[4]
  i650.m_StringArgument = i651[5]
  i650.m_BoolArgument = !!i651[6]
  return i650
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[9],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[2],"57":[2],"58":[2],"59":[2],"60":[2],"61":[2],"7":[2],"62":[2],"63":[2],"64":[2],"65":[2],"66":[2],"67":[2],"68":[9],"69":[70],"71":[72],"73":[72],"12":[11],"74":[3],"75":[9],"76":[77],"78":[11],"79":[16,11],"80":[70],"81":[16,11],"82":[11],"83":[11],"84":[70,11],"85":[11,16],"86":[87],"88":[87],"89":[87],"90":[11],"91":[11],"15":[12],"28":[16,11],"18":[11],"14":[12],"92":[11],"93":[11],"94":[11],"95":[11],"32":[11],"96":[11],"97":[11],"98":[11],"99":[11],"17":[16,11],"100":[11],"101":[11],"102":[11],"103":[11],"30":[16,11],"104":[11],"105":[35],"106":[35],"36":[35],"107":[35],"108":[9],"109":[9]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.MonoBehaviour","MelonSandboxGameplay","LunaController","SpawnTutorial","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.AudioSource","AudioController","UnityEngine.UI.Image","SandboxVariantButton","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.LayoutElement","UnityEngine.UI.Outline","DG.Tweening.DOTweenAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/20/2026 09:30:25";

Deserializers.lunaDaysRunning = "5.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_FPS_V01_AnhPP";

Deserializers.lunaAppID = "43490";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1770";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4667";

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

Deserializers.buildID = "a3226551-62de-42c5-abc8-80470e37dc3e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

