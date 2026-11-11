var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointSpring' )
  var i335 = data
  i334.spring = i335[0]
  i334.damper = i335[1]
  i334.targetPosition = i335[2]
  return i334
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointMotor' )
  var i337 = data
  i336.m_TargetVelocity = i337[0]
  i336.m_Force = i337[1]
  i336.m_FreeSpin = i337[2]
  return i336
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.JointLimits' )
  var i339 = data
  i338.m_Min = i339[0]
  i338.m_Max = i339[1]
  i338.m_Bounciness = i339[2]
  i338.m_BounceMinVelocity = i339[3]
  i338.m_ContactDistance = i339[4]
  i338.minBounce = i339[5]
  i338.maxBounce = i339[6]
  return i338
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointDrive' )
  var i341 = data
  i340.m_PositionSpring = i341[0]
  i340.m_PositionDamper = i341[1]
  i340.m_MaximumForce = i341[2]
  i340.m_UseAcceleration = i341[3]
  return i340
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i343 = data
  i342.m_Spring = i343[0]
  i342.m_Damper = i343[1]
  return i342
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i345 = data
  i344.m_Limit = i345[0]
  i344.m_Bounciness = i345[1]
  i344.m_ContactDistance = i345[2]
  return i344
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i347 = data
  i346.m_ExtremumSlip = i347[0]
  i346.m_ExtremumValue = i347[1]
  i346.m_AsymptoteSlip = i347[2]
  i346.m_AsymptoteValue = i347[3]
  i346.m_Stiffness = i347[4]
  return i346
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i349 = data
  i348.m_LowerAngle = i349[0]
  i348.m_UpperAngle = i349[1]
  return i348
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i351 = data
  i350.m_MotorSpeed = i351[0]
  i350.m_MaximumMotorTorque = i351[1]
  return i350
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i353 = data
  i352.m_DampingRatio = i353[0]
  i352.m_Frequency = i353[1]
  i352.m_Angle = i353[2]
  return i352
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i355 = data
  i354.m_LowerTranslation = i355[0]
  i354.m_UpperTranslation = i355[1]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i357 = data
  i356.name = i357[0]
  i356.width = i357[1]
  i356.height = i357[2]
  i356.mipmapCount = i357[3]
  i356.anisoLevel = i357[4]
  i356.filterMode = i357[5]
  i356.hdr = !!i357[6]
  i356.format = i357[7]
  i356.wrapMode = i357[8]
  i356.alphaIsTransparency = !!i357[9]
  i356.alphaSource = i357[10]
  i356.graphicsFormat = i357[11]
  i356.sRGBTexture = !!i357[12]
  i356.desiredColorSpace = i357[13]
  i356.wrapU = i357[14]
  i356.wrapV = i357[15]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i358 = root || new pc.UnityMaterial()
  var i359 = data
  i358.name = i359[0]
  request.r(i359[1], i359[2], 0, i358, 'shader')
  i358.renderQueue = i359[3]
  i358.enableInstancing = !!i359[4]
  var i361 = i359[5]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i361[i + 0]) );
  }
  i358.floatParameters = i360
  var i363 = i359[6]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i363[i + 0]) );
  }
  i358.colorParameters = i362
  var i365 = i359[7]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i365[i + 0]) );
  }
  i358.vectorParameters = i364
  var i367 = i359[8]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i367[i + 0]) );
  }
  i358.textureParameters = i366
  var i369 = i359[9]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i369[i + 0]) );
  }
  i358.materialFlags = i368
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i373 = data
  i372.name = i373[0]
  i372.value = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i377 = data
  i376.name = i377[0]
  i376.value = new pc.Color(i377[1], i377[2], i377[3], i377[4])
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i381 = data
  i380.name = i381[0]
  i380.value = new pc.Vec4( i381[1], i381[2], i381[3], i381[4] )
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i385 = data
  i384.name = i385[0]
  request.r(i385[1], i385[2], 0, i384, 'value')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i389 = data
  i388.name = i389[0]
  i388.enabled = !!i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i391 = data
  i390.position = new pc.Vec3( i391[0], i391[1], i391[2] )
  i390.scale = new pc.Vec3( i391[3], i391[4], i391[5] )
  i390.rotation = new pc.Quat(i391[6], i391[7], i391[8], i391[9])
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i393 = data
  i392.color = new pc.Color(i393[0], i393[1], i393[2], i393[3])
  request.r(i393[4], i393[5], 0, i392, 'sprite')
  i392.flipX = !!i393[6]
  i392.flipY = !!i393[7]
  i392.drawMode = i393[8]
  i392.size = new pc.Vec2( i393[9], i393[10] )
  i392.tileMode = i393[11]
  i392.adaptiveModeThreshold = i393[12]
  i392.maskInteraction = i393[13]
  i392.spriteSortPoint = i393[14]
  i392.enabled = !!i393[15]
  request.r(i393[16], i393[17], 0, i392, 'sharedMaterial')
  var i395 = i393[18]
  var i394 = []
  for(var i = 0; i < i395.length; i += 2) {
  request.r(i395[i + 0], i395[i + 1], 2, i394, '')
  }
  i392.sharedMaterials = i394
  i392.receiveShadows = !!i393[19]
  i392.shadowCastingMode = i393[20]
  i392.sortingLayerID = i393[21]
  i392.sortingOrder = i393[22]
  i392.lightmapIndex = i393[23]
  i392.lightmapSceneIndex = i393[24]
  i392.lightmapScaleOffset = new pc.Vec4( i393[25], i393[26], i393[27], i393[28] )
  i392.lightProbeUsage = i393[29]
  i392.reflectionProbeUsage = i393[30]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i399 = data
  i398.bodyType = i399[0]
  request.r(i399[1], i399[2], 0, i398, 'material')
  i398.simulated = !!i399[3]
  i398.useAutoMass = !!i399[4]
  i398.mass = i399[5]
  i398.drag = i399[6]
  i398.angularDrag = i399[7]
  i398.gravityScale = i399[8]
  i398.collisionDetectionMode = i399[9]
  i398.sleepMode = i399[10]
  i398.constraints = i399[11]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i401 = data
  i400.usedByComposite = !!i401[0]
  i400.autoTiling = !!i401[1]
  i400.size = new pc.Vec2( i401[2], i401[3] )
  i400.edgeRadius = i401[4]
  i400.enabled = !!i401[5]
  i400.isTrigger = !!i401[6]
  i400.usedByEffector = !!i401[7]
  i400.density = i401[8]
  i400.offset = new pc.Vec2( i401[9], i401[10] )
  request.r(i401[11], i401[12], 0, i400, 'material')
  return i400
}

Deserializers["MelonAd.Bullet"] = function (request, data, root) {
  var i402 = root || request.c( 'MelonAd.Bullet' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'rb')
  i402.life = i403[2]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i405 = data
  i404.name = i405[0]
  i404.tagId = i405[1]
  i404.enabled = !!i405[2]
  i404.isStatic = !!i405[3]
  i404.layer = i405[4]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i407 = data
  i406.radius = i407[0]
  i406.enabled = !!i407[1]
  i406.isTrigger = !!i407[2]
  i406.usedByEffector = !!i407[3]
  i406.density = i407[4]
  i406.offset = new pc.Vec2( i407[5], i407[6] )
  request.r(i407[7], i407[8], 0, i406, 'material')
  return i406
}

Deserializers["MelonAd.FlameParticle"] = function (request, data, root) {
  var i408 = root || request.c( 'MelonAd.FlameParticle' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'rb')
  request.r(i409[2], i409[3], 0, i408, 'visual')
  request.r(i409[4], i409[5], 0, i408, 'sr')
  i408.life = i409[6]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i411 = data
  i410.name = i411[0]
  i410.index = i411[1]
  i410.startup = !!i411[2]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i413 = data
  i412.aspect = i413[0]
  i412.orthographic = !!i413[1]
  i412.orthographicSize = i413[2]
  i412.backgroundColor = new pc.Color(i413[3], i413[4], i413[5], i413[6])
  i412.nearClipPlane = i413[7]
  i412.farClipPlane = i413[8]
  i412.fieldOfView = i413[9]
  i412.depth = i413[10]
  i412.clearFlags = i413[11]
  i412.cullingMask = i413[12]
  i412.rect = i413[13]
  request.r(i413[14], i413[15], 0, i412, 'targetTexture')
  i412.usePhysicalProperties = !!i413[16]
  i412.focalLength = i413[17]
  i412.sensorSize = new pc.Vec2( i413[18], i413[19] )
  i412.lensShift = new pc.Vec2( i413[20], i413[21] )
  i412.gateFit = i413[22]
  i412.commandBufferCount = i413[23]
  i412.cameraType = i413[24]
  i412.enabled = !!i413[25]
  return i412
}

Deserializers["MelonAd.CameraFit"] = function (request, data, root) {
  var i414 = root || request.c( 'MelonAd.CameraFit' )
  var i415 = data
  i414.designHeight = i415[0]
  i414.referenceResolution = new pc.Vec2( i415[1], i415[2] )
  return i414
}

Deserializers["MelonAd.UIController"] = function (request, data, root) {
  var i416 = root || request.c( 'MelonAd.UIController' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'hint')
  request.r(i417[2], i417[3], 0, i416, 'head')
  request.r(i417[4], i417[5], 0, i416, 'failRoot')
  request.r(i417[6], i417[7], 0, i416, 'panel')
  request.r(i417[8], i417[9], 0, i416, 'panelGroup')
  request.r(i417[10], i417[11], 0, i416, 'button')
  request.r(i417[12], i417[13], 0, i416, 'finger')
  request.r(i417[14], i417[15], 0, i416, 'retryButton')
  request.r(i417[16], i417[17], 0, i416, 'winRoot')
  request.r(i417[18], i417[19], 0, i416, 'winPanel')
  request.r(i417[20], i417[21], 0, i416, 'winPanelGroup')
  request.r(i417[22], i417[23], 0, i416, 'winButton')
  request.r(i417[24], i417[25], 0, i416, 'winFinger')
  request.r(i417[26], i417[27], 0, i416, 'nextButton')
  request.r(i417[28], i417[29], 0, i416, 'introRoot')
  request.r(i417[30], i417[31], 0, i416, 'introCard')
  request.r(i417[32], i417[33], 0, i416, 'introGroup')
  i416.introDuration = i417[34]
  i416.introFade = i417[35]
  i416.slideDistance = i417[36]
  i416.slideDuration = i417[37]
  i416.pulseDuration = i417[38]
  i416.wiggleDuration = i417[39]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i419 = data
  i418.pivot = new pc.Vec2( i419[0], i419[1] )
  i418.anchorMin = new pc.Vec2( i419[2], i419[3] )
  i418.anchorMax = new pc.Vec2( i419[4], i419[5] )
  i418.sizeDelta = new pc.Vec2( i419[6], i419[7] )
  i418.anchoredPosition3D = new pc.Vec3( i419[8], i419[9], i419[10] )
  i418.rotation = new pc.Quat(i419[11], i419[12], i419[13], i419[14])
  i418.scale = new pc.Vec3( i419[15], i419[16], i419[17] )
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i421 = data
  i420.planeDistance = i421[0]
  i420.referencePixelsPerUnit = i421[1]
  i420.isFallbackOverlay = !!i421[2]
  i420.renderMode = i421[3]
  i420.renderOrder = i421[4]
  i420.sortingLayerName = i421[5]
  i420.sortingOrder = i421[6]
  i420.scaleFactor = i421[7]
  request.r(i421[8], i421[9], 0, i420, 'worldCamera')
  i420.overrideSorting = !!i421[10]
  i420.pixelPerfect = !!i421[11]
  i420.targetDisplay = i421[12]
  i420.overridePixelPerfect = !!i421[13]
  i420.enabled = !!i421[14]
  return i420
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i423 = data
  i422.m_UiScaleMode = i423[0]
  i422.m_ReferencePixelsPerUnit = i423[1]
  i422.m_ScaleFactor = i423[2]
  i422.m_ReferenceResolution = new pc.Vec2( i423[3], i423[4] )
  i422.m_ScreenMatchMode = i423[5]
  i422.m_MatchWidthOrHeight = i423[6]
  i422.m_PhysicalUnit = i423[7]
  i422.m_FallbackScreenDPI = i423[8]
  i422.m_DefaultSpriteDPI = i423[9]
  i422.m_DynamicPixelsPerUnit = i423[10]
  i422.m_PresetInfoIsWorld = !!i423[11]
  return i422
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i425 = data
  i424.m_IgnoreReversedGraphics = !!i425[0]
  i424.m_BlockingObjects = i425[1]
  i424.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i425[2] )
  return i424
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i427 = data
  i426.m_AspectMode = i427[0]
  i426.m_AspectRatio = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i429 = data
  i428.cullTransparentMesh = !!i429[0]
  return i428
}

Deserializers["MelonAd.UICover"] = function (request, data, root) {
  var i430 = root || request.c( 'MelonAd.UICover' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'target')
  return i430
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'm_Texture')
  i432.m_UVRect = UnityEngine.Rect.MinMaxRect(i433[2], i433[3], i433[4], i433[5])
  request.r(i433[6], i433[7], 0, i432, 'm_Material')
  i432.m_Maskable = !!i433[8]
  i432.m_Color = new pc.Color(i433[9], i433[10], i433[11], i433[12])
  i432.m_RaycastTarget = !!i433[13]
  i432.m_RaycastPadding = new pc.Vec4( i433[14], i433[15], i433[16], i433[17] )
  return i432
}

Deserializers["MelonAd.LevelRefs"] = function (request, data, root) {
  var i434 = root || request.c( 'MelonAd.LevelRefs' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'man')
  request.r(i435[2], i435[3], 0, i434, 'rifle')
  request.r(i435[4], i435[5], 0, i434, 'flameThrower')
  request.r(i435[6], i435[7], 0, i434, 'tutorPin')
  request.r(i435[8], i435[9], 0, i434, 'dynamicRoot')
  return i434
}

Deserializers["MelonAd.Pin"] = function (request, data, root) {
  var i436 = root || request.c( 'MelonAd.Pin' )
  var i437 = data
  i436.evt = i437[0]
  i436.flyOffset = new pc.Vec2( i437[1], i437[2] )
  return i436
}

Deserializers["MelonAd.ExitZone"] = function (request, data, root) {
  var i438 = root || request.c( 'MelonAd.ExitZone' )
  var i439 = data
  return i438
}

Deserializers["MelonAd.Grabbable"] = function (request, data, root) {
  var i440 = root || request.c( 'MelonAd.Grabbable' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'rb')
  request.r(i441[2], i441[3], 0, i440, 'owner')
  return i440
}

Deserializers["MelonAd.Spike"] = function (request, data, root) {
  var i442 = root || request.c( 'MelonAd.Spike' )
  var i443 = data
  return i442
}

Deserializers["MelonAd.MonsterPit"] = function (request, data, root) {
  var i444 = root || request.c( 'MelonAd.MonsterPit' )
  var i445 = data
  var i447 = i445[0]
  var i446 = []
  for(var i = 0; i < i447.length; i += 2) {
  request.r(i447[i + 0], i447[i + 1], 2, i446, '')
  }
  i444.monsters = i446
  i444.eaters = i445[1]
  i444.idleSpeed = i445[2]
  i444.idleSway = i445[3]
  i444.armWave = i445[4]
  i444.breathe = i445[5]
  i444.reachTime = i445[6]
  i444.reachStretch = i445[7]
  i444.chewTime = i445[8]
  i444.settleTime = i445[9]
  i444.pullSpeed = i445[10]
  return i444
}

Deserializers["MelonAd.Rifle"] = function (request, data, root) {
  var i450 = root || request.c( 'MelonAd.Rifle' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'bulletPrefab')
  request.r(i451[2], i451[3], 0, i450, 'bulletRoot')
  request.r(i451[4], i451[5], 0, i450, 'muzzle')
  i450.poolSize = i451[6]
  i450.width = i451[7]
  i450.bulletSpeed = i451[8]
  return i450
}

Deserializers["MelonAd.FlameThrower"] = function (request, data, root) {
  var i452 = root || request.c( 'MelonAd.FlameThrower' )
  var i453 = data
  request.r(i453[0], i453[1], 0, i452, 'prefab')
  request.r(i453[2], i453[3], 0, i452, 'particleRoot')
  i452.poolSize = i453[4]
  i452.width = i453[5]
  i452.speed = i453[6]
  return i452
}

Deserializers["MelonAd.CharacterSelector"] = function (request, data, root) {
  var i454 = root || request.c( 'MelonAd.CharacterSelector' )
  var i455 = data
  i454.index = i455[0]
  var i457 = i455[1]
  var i456 = []
  for(var i = 0; i < i457.length; i += 2) {
  request.r(i457[i + 0], i457[i + 1], 2, i456, '')
  }
  i454.characters = i456
  return i454
}

Deserializers["MelonAd.Ragdoll"] = function (request, data, root) {
  var i460 = root || request.c( 'MelonAd.Ragdoll' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 2, i462, '')
  }
  i460.parts = i462
  request.r(i461[1], i461[2], 0, i460, 'head')
  request.r(i461[3], i461[4], 0, i460, 'leftFoot')
  request.r(i461[5], i461[6], 0, i460, 'rightFoot')
  request.r(i461[7], i461[8], 0, i460, 'hole')
  i460.holeDiameter = i461[9]
  i460.headLift = i461[10]
  i460.footPull = i461[11]
  i460.exitStayTime = i461[12]
  i460.blockMask = UnityEngine.LayerMask.FromIntegerValue( i461[13] )
  return i460
}

Deserializers["MelonAd.RagdollPart"] = function (request, data, root) {
  var i466 = root || request.c( 'MelonAd.RagdollPart' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'owner')
  request.r(i467[2], i467[3], 0, i466, 'rb')
  request.r(i467[4], i467[5], 0, i466, 'skin')
  request.r(i467[6], i467[7], 0, i466, 'skeleton')
  request.r(i467[8], i467[9], 0, i466, 'burnt')
  var i469 = i467[10]
  var i468 = []
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 2, i468, '')
  }
  i466.skinExtras = i468
  var i471 = i467[11]
  var i470 = []
  for(var i = 0; i < i471.length; i += 2) {
  request.r(i471[i + 0], i471[i + 1], 2, i470, '')
  }
  i466.burntExtras = i470
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i475 = data
  i474.useLimits = !!i475[0]
  i474.limits = request.d('UnityEngine.JointAngleLimits2D', i475[1], i474.limits)
  i474.useMotor = !!i475[2]
  i474.motor = request.d('UnityEngine.JointMotor2D', i475[3], i474.motor)
  i474.anchor = new pc.Vec2( i475[4], i475[5] )
  i474.connectedAnchor = new pc.Vec2( i475[6], i475[7] )
  i474.autoConfigureConnectedAnchor = !!i475[8]
  request.r(i475[9], i475[10], 0, i474, 'connectedBody')
  i474.breakForce = i475[11]
  i474.breakTorque = i475[12]
  i474.enableCollision = !!i475[13]
  i474.enabled = !!i475[14]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i477 = data
  i476.frontSortingLayerID = i477[0]
  i476.frontSortingOrder = i477[1]
  i476.backSortingLayerID = i477[2]
  i476.backSortingOrder = i477[3]
  i476.alphaCutoff = i477[4]
  request.r(i477[5], i477[6], 0, i476, 'sprite')
  i476.tileMode = i477[7]
  i476.isCustomRangeActive = !!i477[8]
  i476.spriteSortPoint = i477[9]
  i476.enabled = !!i477[10]
  request.r(i477[11], i477[12], 0, i476, 'sharedMaterial')
  var i479 = i477[13]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i476.sharedMaterials = i478
  i476.receiveShadows = !!i477[14]
  i476.shadowCastingMode = i477[15]
  i476.sortingLayerID = i477[16]
  i476.sortingOrder = i477[17]
  i476.lightmapIndex = i477[18]
  i476.lightmapSceneIndex = i477[19]
  i476.lightmapScaleOffset = new pc.Vec4( i477[20], i477[21], i477[22], i477[23] )
  i476.lightProbeUsage = i477[24]
  i476.reflectionProbeUsage = i477[25]
  return i476
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.UI.Image' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'm_Sprite')
  i480.m_Type = i481[2]
  i480.m_PreserveAspect = !!i481[3]
  i480.m_FillCenter = !!i481[4]
  i480.m_FillMethod = i481[5]
  i480.m_FillAmount = i481[6]
  i480.m_FillClockwise = !!i481[7]
  i480.m_FillOrigin = i481[8]
  i480.m_UseSpriteMesh = !!i481[9]
  i480.m_PixelsPerUnitMultiplier = i481[10]
  request.r(i481[11], i481[12], 0, i480, 'm_Material')
  i480.m_Maskable = !!i481[13]
  i480.m_Color = new pc.Color(i481[14], i481[15], i481[16], i481[17])
  i480.m_RaycastTarget = !!i481[18]
  i480.m_RaycastPadding = new pc.Vec4( i481[19], i481[20], i481[21], i481[22] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i483 = data
  i482.m_Alpha = i483[0]
  i482.m_Interactable = !!i483[1]
  i482.m_BlocksRaycasts = !!i483[2]
  i482.m_IgnoreParentGroups = !!i483[3]
  i482.enabled = !!i483[4]
  return i482
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.Button' )
  var i485 = data
  i484.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i485[0], i484.m_OnClick)
  i484.m_Navigation = request.d('UnityEngine.UI.Navigation', i485[1], i484.m_Navigation)
  i484.m_Transition = i485[2]
  i484.m_Colors = request.d('UnityEngine.UI.ColorBlock', i485[3], i484.m_Colors)
  i484.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i485[4], i484.m_SpriteState)
  i484.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i485[5], i484.m_AnimationTriggers)
  i484.m_Interactable = !!i485[6]
  request.r(i485[7], i485[8], 0, i484, 'm_TargetGraphic')
  return i484
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i487 = data
  i486.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i487[0], i486.m_PersistentCalls)
  return i486
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i489 = data
  var i491 = i489[0]
  var i490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i491.length; i += 1) {
    i490.add(request.d('UnityEngine.Events.PersistentCall', i491[i + 0]));
  }
  i488.m_Calls = i490
  return i488
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_Target')
  i494.m_TargetAssemblyTypeName = i495[2]
  i494.m_MethodName = i495[3]
  i494.m_Mode = i495[4]
  i494.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i495[5], i494.m_Arguments)
  i494.m_CallState = i495[6]
  return i494
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i497 = data
  i496.m_Mode = i497[0]
  i496.m_WrapAround = !!i497[1]
  request.r(i497[2], i497[3], 0, i496, 'm_SelectOnUp')
  request.r(i497[4], i497[5], 0, i496, 'm_SelectOnDown')
  request.r(i497[6], i497[7], 0, i496, 'm_SelectOnLeft')
  request.r(i497[8], i497[9], 0, i496, 'm_SelectOnRight')
  return i496
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i499 = data
  i498.m_NormalColor = new pc.Color(i499[0], i499[1], i499[2], i499[3])
  i498.m_HighlightedColor = new pc.Color(i499[4], i499[5], i499[6], i499[7])
  i498.m_PressedColor = new pc.Color(i499[8], i499[9], i499[10], i499[11])
  i498.m_SelectedColor = new pc.Color(i499[12], i499[13], i499[14], i499[15])
  i498.m_DisabledColor = new pc.Color(i499[16], i499[17], i499[18], i499[19])
  i498.m_ColorMultiplier = i499[20]
  i498.m_FadeDuration = i499[21]
  return i498
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'm_HighlightedSprite')
  request.r(i501[2], i501[3], 0, i500, 'm_PressedSprite')
  request.r(i501[4], i501[5], 0, i500, 'm_SelectedSprite')
  request.r(i501[6], i501[7], 0, i500, 'm_DisabledSprite')
  return i500
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i503 = data
  i502.m_NormalTrigger = i503[0]
  i502.m_HighlightedTrigger = i503[1]
  i502.m_PressedTrigger = i503[2]
  i502.m_SelectedTrigger = i503[3]
  i502.m_DisabledTrigger = i503[4]
  return i502
}

Deserializers["MelonAd.CtaOverlay"] = function (request, data, root) {
  var i504 = root || request.c( 'MelonAd.CtaOverlay' )
  var i505 = data
  return i504
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_FirstSelected')
  i506.m_sendNavigationEvents = !!i507[2]
  i506.m_DragThreshold = i507[3]
  return i506
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i509 = data
  i508.m_HorizontalAxis = i509[0]
  i508.m_VerticalAxis = i509[1]
  i508.m_SubmitButton = i509[2]
  i508.m_CancelButton = i509[3]
  i508.m_InputActionsPerSecond = i509[4]
  i508.m_RepeatDelay = i509[5]
  i508.m_ForceModuleActive = !!i509[6]
  i508.m_SendPointerHoverToParent = !!i509[7]
  return i508
}

Deserializers["MelonAd.GameConfig"] = function (request, data, root) {
  var i510 = root || request.c( 'MelonAd.GameConfig' )
  var i511 = data
  i510.retries = i511[0]
  i510.failPopupDelay = i511[1]
  i510.rifleInterval = i511[2]
  i510.rifleBurstAfterPin = i511[3]
  i510.flameRate = i511[4]
  i510.pinTapRadius = i511[5]
  i510.showTutorial = !!i511[6]
  i510.iosLink = i511[7]
  i510.androidLink = i511[8]
  return i510
}

Deserializers["MelonAd.AudioManager"] = function (request, data, root) {
  var i512 = root || request.c( 'MelonAd.AudioManager' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'music')
  request.r(i513[2], i513[3], 0, i512, 'doc')
  request.r(i513[4], i513[5], 0, i512, 'door')
  request.r(i513[6], i513[7], 0, i512, 'fire')
  request.r(i513[8], i513[9], 0, i512, 'flame')
  request.r(i513[10], i513[11], 0, i512, 'hurt')
  request.r(i513[12], i513[13], 0, i512, 'jar')
  request.r(i513[14], i513[15], 0, i512, 'kis')
  request.r(i513[16], i513[17], 0, i512, 'ohog')
  request.r(i513[18], i513[19], 0, i512, 'complete')
  request.r(i513[20], i513[21], 0, i512, 'fail')
  request.r(i513[22], i513[23], 0, i512, 'thunder')
  request.r(i513[24], i513[25], 0, i512, 'rain')
  i512.rainVolume = i513[26]
  return i512
}

Deserializers["MelonAd.FxManager"] = function (request, data, root) {
  var i514 = root || request.c( 'MelonAd.FxManager' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'smoke')
  request.r(i515[2], i515[3], 0, i514, 'flame')
  request.r(i515[4], i515[5], 0, i514, 'blood')
  request.r(i515[6], i515[7], 0, i514, 'spikeShard')
  request.r(i515[8], i515[9], 0, i514, 'bulletShard')
  request.r(i515[10], i515[11], 0, i514, 'bubble')
  i514.prewarm = i515[12]
  i514.sortingOrder = i515[13]
  return i514
}

Deserializers["MelonAd.GameManager"] = function (request, data, root) {
  var i516 = root || request.c( 'MelonAd.GameManager' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'level')
  request.r(i517[2], i517[3], 0, i516, 'zoomRoot')
  request.r(i517[4], i517[5], 0, i516, 'cam')
  request.r(i517[6], i517[7], 0, i516, 'ui')
  request.r(i517[8], i517[9], 0, i516, 'cta')
  request.r(i517[10], i517[11], 0, i516, 'tapFinger')
  request.r(i517[12], i517[13], 0, i516, 'dragFinger')
  request.r(i517[14], i517[15], 0, i516, 'dragFingerSprite')
  i516.pickMask = UnityEngine.LayerMask.FromIntegerValue( i517[16] )
  i516.winZoom = i517[17]
  i516.winFocus = new pc.Vec2( i517[18], i517[19] )
  i516.winZoomDuration = i517[20]
  i516.winPopupDelay = i517[21]
  i516.dragFrequency = i517[22]
  i516.dragDamping = i517[23]
  i516.dragMaxForce = i517[24]
  i516.tapFingerOffset = new pc.Vec2( i517[25], i517[26] )
  return i516
}

Deserializers["LunaController"] = function (request, data, root) {
  var i518 = root || request.c( 'LunaController' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'BGTexture')
  i518.UseTime = !!i519[2]
  i518.TimePlay = i519[3]
  i518.Character = i519[4]
  request.r(i519[5], i519[6], 0, i518, 'characterSelector')
  request.r(i519[7], i519[8], 0, i518, 'BGImage')
  var i521 = i519[9]
  var i520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 1, i520, '')
  }
  i518.CTA = i520
  return i518
}

Deserializers["MelonAd.StormFx"] = function (request, data, root) {
  var i524 = root || request.c( 'MelonAd.StormFx' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'cam')
  request.r(i525[2], i525[3], 0, i524, 'whiteSprite')
  request.r(i525[4], i525[5], 0, i524, 'flash')
  i524.playOnStart = !!i525[6]
  i524.maxDrops = i525[7]
  i524.rainVelocity = new pc.Vec2( i525[8], i525[9] )
  i524.dropSize = new pc.Vec2( i525[10], i525[11] )
  i524.rainColor = new pc.Color(i525[12], i525[13], i525[14], i525[15])
  i524.rainFadeIn = i525[16]
  i524.rainSortingOrder = i525[17]
  i524.strikeInterval = new pc.Vec2( i525[18], i525[19] )
  i524.extraFlashChance = i525[20]
  i524.coreColor = new pc.Color(i525[21], i525[22], i525[23], i525[24])
  i524.glowColor = new pc.Color(i525[25], i525[26], i525[27], i525[28])
  i524.coreWidth = i525[29]
  i524.glowWidth = i525[30]
  i524.mainSegments = i525[31]
  i524.branchSegments = i525[32]
  i524.branches = i525[33]
  i524.jitter = i525[34]
  i524.boltSortingOrder = i525[35]
  i524.flashStrength = i525[36]
  i524.groundRange = new pc.Vec2( i525[37], i525[38] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i527 = data
  i526.ambientIntensity = i527[0]
  i526.reflectionIntensity = i527[1]
  i526.ambientMode = i527[2]
  i526.ambientLight = new pc.Color(i527[3], i527[4], i527[5], i527[6])
  i526.ambientSkyColor = new pc.Color(i527[7], i527[8], i527[9], i527[10])
  i526.ambientGroundColor = new pc.Color(i527[11], i527[12], i527[13], i527[14])
  i526.ambientEquatorColor = new pc.Color(i527[15], i527[16], i527[17], i527[18])
  i526.fogColor = new pc.Color(i527[19], i527[20], i527[21], i527[22])
  i526.fogEndDistance = i527[23]
  i526.fogStartDistance = i527[24]
  i526.fogDensity = i527[25]
  i526.fog = !!i527[26]
  request.r(i527[27], i527[28], 0, i526, 'skybox')
  i526.fogMode = i527[29]
  var i529 = i527[30]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i529[i + 0]) );
  }
  i526.lightmaps = i528
  i526.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i527[31], i526.lightProbes)
  i526.lightmapsMode = i527[32]
  i526.mixedBakeMode = i527[33]
  i526.environmentLightingMode = i527[34]
  i526.ambientProbe = new pc.SphericalHarmonicsL2(i527[35])
  request.r(i527[36], i527[37], 0, i526, 'customReflection')
  request.r(i527[38], i527[39], 0, i526, 'defaultReflection')
  i526.defaultReflectionMode = i527[40]
  i526.defaultReflectionResolution = i527[41]
  i526.sunLightObjectId = i527[42]
  i526.pixelLightCount = i527[43]
  i526.defaultReflectionHDR = !!i527[44]
  i526.hasLightDataAsset = !!i527[45]
  i526.hasManualGenerate = !!i527[46]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'lightmapColor')
  request.r(i533[2], i533[3], 0, i532, 'lightmapDirection')
  request.r(i533[4], i533[5], 0, i532, 'shadowMask')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i534 = root || new UnityEngine.LightProbes()
  var i535 = data
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i543 = data
  i542.name = i543[0]
  i542.bounciness = i543[1]
  i542.friction = i543[2]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i545 = data
  var i547 = i545[0]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i547.length; i += 1) {
    i546.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i547[i + 0]));
  }
  i544.ShaderCompilationErrors = i546
  i544.name = i545[1]
  i544.guid = i545[2]
  var i549 = i545[3]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i544.shaderDefinedKeywords = i548
  var i551 = i545[4]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i551[i + 0]) );
  }
  i544.passes = i550
  var i553 = i545[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i553[i + 0]) );
  }
  i544.usePasses = i552
  var i555 = i545[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i555[i + 0]) );
  }
  i544.defaultParameterValues = i554
  request.r(i545[7], i545[8], 0, i544, 'unityFallbackShader')
  i544.readDepth = !!i545[9]
  i544.hasDepthOnlyPass = !!i545[10]
  i544.isCreatedByShaderGraph = !!i545[11]
  i544.disableBatching = !!i545[12]
  i544.compiled = !!i545[13]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i559 = data
  i558.shaderName = i559[0]
  i558.errorMessage = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i564 = root || new pc.UnityShaderPass()
  var i565 = data
  i564.id = i565[0]
  i564.subShaderIndex = i565[1]
  i564.name = i565[2]
  i564.passType = i565[3]
  i564.grabPassTextureName = i565[4]
  i564.usePass = !!i565[5]
  i564.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[6], i564.zTest)
  i564.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[7], i564.zWrite)
  i564.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[8], i564.culling)
  i564.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[9], i564.blending)
  i564.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i565[10], i564.alphaBlending)
  i564.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[11], i564.colorWriteMask)
  i564.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[12], i564.offsetUnits)
  i564.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[13], i564.offsetFactor)
  i564.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[14], i564.stencilRef)
  i564.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[15], i564.stencilReadMask)
  i564.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i565[16], i564.stencilWriteMask)
  i564.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[17], i564.stencilOp)
  i564.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[18], i564.stencilOpFront)
  i564.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i565[19], i564.stencilOpBack)
  var i567 = i565[20]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i567[i + 0]) );
  }
  i564.tags = i566
  var i569 = i565[21]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i564.passDefinedKeywords = i568
  var i571 = i565[22]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i571[i + 0]) );
  }
  i564.passDefinedKeywordGroups = i570
  var i573 = i565[23]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i573[i + 0]) );
  }
  i564.variants = i572
  var i575 = i565[24]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i575[i + 0]) );
  }
  i564.excludedVariants = i574
  i564.hasDepthReader = !!i565[25]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i577 = data
  i576.val = i577[0]
  i576.name = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i579 = data
  i578.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[0], i578.src)
  i578.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[1], i578.dst)
  i578.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[2], i578.op)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i581 = data
  i580.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[0], i580.pass)
  i580.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[1], i580.fail)
  i580.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[2], i580.zFail)
  i580.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i581[3], i580.comp)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i585 = data
  i584.name = i585[0]
  i584.value = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i589 = data
  var i591 = i589[0]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.keywords = i590
  i588.hasDiscard = !!i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i595 = data
  i594.passId = i595[0]
  i594.subShaderIndex = i595[1]
  var i597 = i595[2]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i594.keywords = i596
  i594.vertexProgram = i595[3]
  i594.fragmentProgram = i595[4]
  i594.exportedForWebGl2 = !!i595[5]
  i594.readDepth = !!i595[6]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'shader')
  i600.pass = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i605 = data
  i604.name = i605[0]
  i604.type = i605[1]
  i604.value = new pc.Vec4( i605[2], i605[3], i605[4], i605[5] )
  i604.textureValue = i605[6]
  i604.shaderPropertyFlag = i605[7]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'texture')
  i606.aabb = i607[3]
  i606.vertices = i607[4]
  i606.triangles = i607[5]
  i606.textureRect = UnityEngine.Rect.MinMaxRect(i607[6], i607[7], i607[8], i607[9])
  i606.packedRect = UnityEngine.Rect.MinMaxRect(i607[10], i607[11], i607[12], i607[13])
  i606.border = new pc.Vec4( i607[14], i607[15], i607[16], i607[17] )
  i606.transparency = i607[18]
  i606.bounds = i607[19]
  i606.pixelsPerUnit = i607[20]
  i606.textureWidth = i607[21]
  i606.textureHeight = i607[22]
  i606.nativeSize = new pc.Vec2( i607[23], i607[24] )
  i606.pivot = new pc.Vec2( i607[25], i607[26] )
  i606.textureRectOffset = new pc.Vec2( i607[27], i607[28] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i609 = data
  i608.name = i609[0]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i611 = data
  var i613 = i611[0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i613[i + 0]) );
  }
  i610.files = i612
  i610.componentToPrefabIds = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i617 = data
  i616.path = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'unityObject')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i621[i + 0]) );
  }
  i618.scriptsExecutionOrder = i620
  var i623 = i619[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i623[i + 0]) );
  }
  i618.sortingLayers = i622
  var i625 = i619[2]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i625[i + 0]) );
  }
  i618.cullingLayers = i624
  i618.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i619[3], i618.timeSettings)
  i618.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i619[4], i618.physicsSettings)
  i618.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i619[5], i618.physics2DSettings)
  i618.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i619[6], i618.qualitySettings)
  i618.enableRealtimeShadows = !!i619[7]
  i618.enableAutoInstancing = !!i619[8]
  i618.enableStaticBatching = !!i619[9]
  i618.enableDynamicBatching = !!i619[10]
  i618.usePreservativeDynamicBatching = !!i619[11]
  i618.lightmapEncodingQuality = i619[12]
  i618.desiredColorSpace = i619[13]
  var i627 = i619[14]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i618.allTags = i626
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i631 = data
  i630.name = i631[0]
  i630.value = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i635 = data
  i634.id = i635[0]
  i634.name = i635[1]
  i634.value = i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i639 = data
  i638.id = i639[0]
  i638.name = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i641 = data
  i640.fixedDeltaTime = i641[0]
  i640.maximumDeltaTime = i641[1]
  i640.timeScale = i641[2]
  i640.maximumParticleTimestep = i641[3]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i643 = data
  i642.gravity = new pc.Vec3( i643[0], i643[1], i643[2] )
  i642.defaultSolverIterations = i643[3]
  i642.bounceThreshold = i643[4]
  i642.autoSyncTransforms = !!i643[5]
  i642.autoSimulation = !!i643[6]
  var i645 = i643[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i645[i + 0]) );
  }
  i642.collisionMatrix = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.layerId = i649[1]
  i648.otherLayerId = i649[2]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'material')
  i650.gravity = new pc.Vec2( i651[2], i651[3] )
  i650.positionIterations = i651[4]
  i650.velocityIterations = i651[5]
  i650.velocityThreshold = i651[6]
  i650.maxLinearCorrection = i651[7]
  i650.maxAngularCorrection = i651[8]
  i650.maxTranslationSpeed = i651[9]
  i650.maxRotationSpeed = i651[10]
  i650.baumgarteScale = i651[11]
  i650.baumgarteTOIScale = i651[12]
  i650.timeToSleep = i651[13]
  i650.linearSleepTolerance = i651[14]
  i650.angularSleepTolerance = i651[15]
  i650.defaultContactOffset = i651[16]
  i650.autoSimulation = !!i651[17]
  i650.queriesHitTriggers = !!i651[18]
  i650.queriesStartInColliders = !!i651[19]
  i650.callbacksOnDisable = !!i651[20]
  i650.reuseCollisionCallbacks = !!i651[21]
  i650.autoSyncTransforms = !!i651[22]
  var i653 = i651[23]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i653[i + 0]) );
  }
  i650.collisionMatrix = i652
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i657 = data
  i656.enabled = !!i657[0]
  i656.layerId = i657[1]
  i656.otherLayerId = i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i659 = data
  var i661 = i659[0]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i661[i + 0]) );
  }
  i658.qualityLevels = i660
  var i663 = i659[1]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i658.names = i662
  i658.shadows = i659[2]
  i658.anisotropicFiltering = i659[3]
  i658.antiAliasing = i659[4]
  i658.lodBias = i659[5]
  i658.shadowCascades = i659[6]
  i658.shadowDistance = i659[7]
  i658.shadowmaskMode = i659[8]
  i658.shadowProjection = i659[9]
  i658.shadowResolution = i659[10]
  i658.softParticles = !!i659[11]
  i658.softVegetation = !!i659[12]
  i658.activeColorSpace = i659[13]
  i658.desiredColorSpace = i659[14]
  i658.masterTextureLimit = i659[15]
  i658.maxQueuedFrames = i659[16]
  i658.particleRaycastBudget = i659[17]
  i658.pixelLightCount = i659[18]
  i658.realtimeReflectionProbes = !!i659[19]
  i658.shadowCascade2Split = i659[20]
  i658.shadowCascade4Split = new pc.Vec3( i659[21], i659[22], i659[23] )
  i658.streamingMipmapsActive = !!i659[24]
  i658.vSyncCount = i659[25]
  i658.asyncUploadBufferSize = i659[26]
  i658.asyncUploadTimeSlice = i659[27]
  i658.billboardsFaceCameraPosition = !!i659[28]
  i658.shadowNearPlaneOffset = i659[29]
  i658.streamingMipmapsMemoryBudget = i659[30]
  i658.maximumLODLevel = i659[31]
  i658.streamingMipmapsAddAllCameras = !!i659[32]
  i658.streamingMipmapsMaxLevelReduction = i659[33]
  i658.streamingMipmapsRenderersPerFrame = i659[34]
  i658.resolutionScalingFixedDPIFactor = i659[35]
  i658.streamingMipmapsMaxFileIORequests = i659[36]
  i658.currentQualityLevel = i659[37]
  return i658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_ObjectArgument')
  i666.m_ObjectArgumentAssemblyTypeName = i667[2]
  i666.m_IntArgument = i667[3]
  i666.m_FloatArgument = i667[4]
  i666.m_StringArgument = i667[5]
  i666.m_BoolArgument = !!i667[6]
  return i666
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[13],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"75":[6],"41":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[6],"82":[13],"83":[84],"85":[86],"87":[86],"21":[18],"15":[13],"43":[42],"88":[3],"89":[13],"90":[91],"92":[44],"93":[21],"94":[18],"95":[84,18],"96":[18,26],"97":[18],"98":[26,18],"99":[84],"100":[26,18],"101":[18],"102":[103],"104":[103],"105":[103],"106":[18],"107":[18],"24":[21],"42":[26,18],"25":[18],"23":[21],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"115":[18],"116":[18],"28":[26,18],"117":[18],"118":[18],"119":[18],"120":[18],"121":[26,18],"122":[18],"123":[44],"124":[44],"45":[44],"125":[44],"126":[13],"127":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.MonoBehaviour","MelonAd.Bullet","UnityEngine.CircleCollider2D","MelonAd.FlameParticle","UnityEngine.Camera","UnityEngine.AudioListener","MelonAd.CameraFit","MelonAd.UIController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.CanvasRenderer","MelonAd.UICover","UnityEngine.UI.RawImage","MelonAd.LevelRefs","MelonAd.Ragdoll","MelonAd.Rifle","MelonAd.FlameThrower","MelonAd.Pin","MelonAd.ExitZone","MelonAd.Grabbable","MelonAd.Spike","MelonAd.MonsterPit","MelonAd.CharacterSelector","MelonAd.RagdollPart","UnityEngine.SpriteMask","UnityEngine.HingeJoint2D","UnityEngine.UI.Image","MelonAd.CtaOverlay","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","MelonAd.GameConfig","MelonAd.AudioManager","UnityEngine.AudioClip","MelonAd.FxManager","MelonAd.GameManager","LunaController","MelonAd.StormFx","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "29.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_HuyNQ_PSF_V03_YenTTH";

Deserializers.lunaAppID = "43647";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3539";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "28ec40c3-aa80-4fef-82b1-eb4f655e3390";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

