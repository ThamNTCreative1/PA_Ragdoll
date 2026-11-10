var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointSpring' )
  var i329 = data
  i328.spring = i329[0]
  i328.damper = i329[1]
  i328.targetPosition = i329[2]
  return i328
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointMotor' )
  var i331 = data
  i330.m_TargetVelocity = i331[0]
  i330.m_Force = i331[1]
  i330.m_FreeSpin = i331[2]
  return i330
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointLimits' )
  var i333 = data
  i332.m_Min = i333[0]
  i332.m_Max = i333[1]
  i332.m_Bounciness = i333[2]
  i332.m_BounceMinVelocity = i333[3]
  i332.m_ContactDistance = i333[4]
  i332.minBounce = i333[5]
  i332.maxBounce = i333[6]
  return i332
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointDrive' )
  var i335 = data
  i334.m_PositionSpring = i335[0]
  i334.m_PositionDamper = i335[1]
  i334.m_MaximumForce = i335[2]
  i334.m_UseAcceleration = i335[3]
  return i334
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i337 = data
  i336.m_Spring = i337[0]
  i336.m_Damper = i337[1]
  return i336
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i339 = data
  i338.m_Limit = i339[0]
  i338.m_Bounciness = i339[1]
  i338.m_ContactDistance = i339[2]
  return i338
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i341 = data
  i340.m_ExtremumSlip = i341[0]
  i340.m_ExtremumValue = i341[1]
  i340.m_AsymptoteSlip = i341[2]
  i340.m_AsymptoteValue = i341[3]
  i340.m_Stiffness = i341[4]
  return i340
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i343 = data
  i342.m_LowerAngle = i343[0]
  i342.m_UpperAngle = i343[1]
  return i342
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i345 = data
  i344.m_MotorSpeed = i345[0]
  i344.m_MaximumMotorTorque = i345[1]
  return i344
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i347 = data
  i346.m_DampingRatio = i347[0]
  i346.m_Frequency = i347[1]
  i346.m_Angle = i347[2]
  return i346
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i349 = data
  i348.m_LowerTranslation = i349[0]
  i348.m_UpperTranslation = i349[1]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i351 = data
  i350.name = i351[0]
  i350.width = i351[1]
  i350.height = i351[2]
  i350.mipmapCount = i351[3]
  i350.anisoLevel = i351[4]
  i350.filterMode = i351[5]
  i350.hdr = !!i351[6]
  i350.format = i351[7]
  i350.wrapMode = i351[8]
  i350.alphaIsTransparency = !!i351[9]
  i350.alphaSource = i351[10]
  i350.graphicsFormat = i351[11]
  i350.sRGBTexture = !!i351[12]
  i350.desiredColorSpace = i351[13]
  i350.wrapU = i351[14]
  i350.wrapV = i351[15]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i352 = root || new pc.UnityMaterial()
  var i353 = data
  i352.name = i353[0]
  request.r(i353[1], i353[2], 0, i352, 'shader')
  i352.renderQueue = i353[3]
  i352.enableInstancing = !!i353[4]
  var i355 = i353[5]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i355[i + 0]) );
  }
  i352.floatParameters = i354
  var i357 = i353[6]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i357[i + 0]) );
  }
  i352.colorParameters = i356
  var i359 = i353[7]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i359[i + 0]) );
  }
  i352.vectorParameters = i358
  var i361 = i353[8]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i361[i + 0]) );
  }
  i352.textureParameters = i360
  var i363 = i353[9]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i363[i + 0]) );
  }
  i352.materialFlags = i362
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i367 = data
  i366.name = i367[0]
  i366.value = i367[1]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i371 = data
  i370.name = i371[0]
  i370.value = new pc.Color(i371[1], i371[2], i371[3], i371[4])
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i375 = data
  i374.name = i375[0]
  i374.value = new pc.Vec4( i375[1], i375[2], i375[3], i375[4] )
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i379 = data
  i378.name = i379[0]
  request.r(i379[1], i379[2], 0, i378, 'value')
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i383 = data
  i382.name = i383[0]
  i382.enabled = !!i383[1]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i385 = data
  i384.position = new pc.Vec3( i385[0], i385[1], i385[2] )
  i384.scale = new pc.Vec3( i385[3], i385[4], i385[5] )
  i384.rotation = new pc.Quat(i385[6], i385[7], i385[8], i385[9])
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i387 = data
  i386.color = new pc.Color(i387[0], i387[1], i387[2], i387[3])
  request.r(i387[4], i387[5], 0, i386, 'sprite')
  i386.flipX = !!i387[6]
  i386.flipY = !!i387[7]
  i386.drawMode = i387[8]
  i386.size = new pc.Vec2( i387[9], i387[10] )
  i386.tileMode = i387[11]
  i386.adaptiveModeThreshold = i387[12]
  i386.maskInteraction = i387[13]
  i386.spriteSortPoint = i387[14]
  i386.enabled = !!i387[15]
  request.r(i387[16], i387[17], 0, i386, 'sharedMaterial')
  var i389 = i387[18]
  var i388 = []
  for(var i = 0; i < i389.length; i += 2) {
  request.r(i389[i + 0], i389[i + 1], 2, i388, '')
  }
  i386.sharedMaterials = i388
  i386.receiveShadows = !!i387[19]
  i386.shadowCastingMode = i387[20]
  i386.sortingLayerID = i387[21]
  i386.sortingOrder = i387[22]
  i386.lightmapIndex = i387[23]
  i386.lightmapSceneIndex = i387[24]
  i386.lightmapScaleOffset = new pc.Vec4( i387[25], i387[26], i387[27], i387[28] )
  i386.lightProbeUsage = i387[29]
  i386.reflectionProbeUsage = i387[30]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i393 = data
  i392.bodyType = i393[0]
  request.r(i393[1], i393[2], 0, i392, 'material')
  i392.simulated = !!i393[3]
  i392.useAutoMass = !!i393[4]
  i392.mass = i393[5]
  i392.drag = i393[6]
  i392.angularDrag = i393[7]
  i392.gravityScale = i393[8]
  i392.collisionDetectionMode = i393[9]
  i392.sleepMode = i393[10]
  i392.constraints = i393[11]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i395 = data
  i394.usedByComposite = !!i395[0]
  i394.autoTiling = !!i395[1]
  i394.size = new pc.Vec2( i395[2], i395[3] )
  i394.edgeRadius = i395[4]
  i394.enabled = !!i395[5]
  i394.isTrigger = !!i395[6]
  i394.usedByEffector = !!i395[7]
  i394.density = i395[8]
  i394.offset = new pc.Vec2( i395[9], i395[10] )
  request.r(i395[11], i395[12], 0, i394, 'material')
  return i394
}

Deserializers["MelonAd.Bullet"] = function (request, data, root) {
  var i396 = root || request.c( 'MelonAd.Bullet' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'rb')
  i396.life = i397[2]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i399 = data
  i398.name = i399[0]
  i398.tagId = i399[1]
  i398.enabled = !!i399[2]
  i398.isStatic = !!i399[3]
  i398.layer = i399[4]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i401 = data
  i400.radius = i401[0]
  i400.enabled = !!i401[1]
  i400.isTrigger = !!i401[2]
  i400.usedByEffector = !!i401[3]
  i400.density = i401[4]
  i400.offset = new pc.Vec2( i401[5], i401[6] )
  request.r(i401[7], i401[8], 0, i400, 'material')
  return i400
}

Deserializers["MelonAd.FlameParticle"] = function (request, data, root) {
  var i402 = root || request.c( 'MelonAd.FlameParticle' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'rb')
  request.r(i403[2], i403[3], 0, i402, 'visual')
  request.r(i403[4], i403[5], 0, i402, 'sr')
  i402.life = i403[6]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i405 = data
  i404.name = i405[0]
  i404.index = i405[1]
  i404.startup = !!i405[2]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i407 = data
  i406.aspect = i407[0]
  i406.orthographic = !!i407[1]
  i406.orthographicSize = i407[2]
  i406.backgroundColor = new pc.Color(i407[3], i407[4], i407[5], i407[6])
  i406.nearClipPlane = i407[7]
  i406.farClipPlane = i407[8]
  i406.fieldOfView = i407[9]
  i406.depth = i407[10]
  i406.clearFlags = i407[11]
  i406.cullingMask = i407[12]
  i406.rect = i407[13]
  request.r(i407[14], i407[15], 0, i406, 'targetTexture')
  i406.usePhysicalProperties = !!i407[16]
  i406.focalLength = i407[17]
  i406.sensorSize = new pc.Vec2( i407[18], i407[19] )
  i406.lensShift = new pc.Vec2( i407[20], i407[21] )
  i406.gateFit = i407[22]
  i406.commandBufferCount = i407[23]
  i406.cameraType = i407[24]
  i406.enabled = !!i407[25]
  return i406
}

Deserializers["MelonAd.CameraFit"] = function (request, data, root) {
  var i408 = root || request.c( 'MelonAd.CameraFit' )
  var i409 = data
  i408.designHeight = i409[0]
  i408.referenceResolution = new pc.Vec2( i409[1], i409[2] )
  return i408
}

Deserializers["MelonAd.UIController"] = function (request, data, root) {
  var i410 = root || request.c( 'MelonAd.UIController' )
  var i411 = data
  request.r(i411[0], i411[1], 0, i410, 'hint')
  request.r(i411[2], i411[3], 0, i410, 'head')
  request.r(i411[4], i411[5], 0, i410, 'failRoot')
  request.r(i411[6], i411[7], 0, i410, 'panel')
  request.r(i411[8], i411[9], 0, i410, 'panelGroup')
  request.r(i411[10], i411[11], 0, i410, 'button')
  request.r(i411[12], i411[13], 0, i410, 'finger')
  request.r(i411[14], i411[15], 0, i410, 'retryButton')
  request.r(i411[16], i411[17], 0, i410, 'winRoot')
  request.r(i411[18], i411[19], 0, i410, 'winPanel')
  request.r(i411[20], i411[21], 0, i410, 'winPanelGroup')
  request.r(i411[22], i411[23], 0, i410, 'winButton')
  request.r(i411[24], i411[25], 0, i410, 'winFinger')
  request.r(i411[26], i411[27], 0, i410, 'nextButton')
  i410.slideDistance = i411[28]
  i410.slideDuration = i411[29]
  i410.pulseDuration = i411[30]
  i410.wiggleDuration = i411[31]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i413 = data
  i412.pivot = new pc.Vec2( i413[0], i413[1] )
  i412.anchorMin = new pc.Vec2( i413[2], i413[3] )
  i412.anchorMax = new pc.Vec2( i413[4], i413[5] )
  i412.sizeDelta = new pc.Vec2( i413[6], i413[7] )
  i412.anchoredPosition3D = new pc.Vec3( i413[8], i413[9], i413[10] )
  i412.rotation = new pc.Quat(i413[11], i413[12], i413[13], i413[14])
  i412.scale = new pc.Vec3( i413[15], i413[16], i413[17] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i415 = data
  i414.planeDistance = i415[0]
  i414.referencePixelsPerUnit = i415[1]
  i414.isFallbackOverlay = !!i415[2]
  i414.renderMode = i415[3]
  i414.renderOrder = i415[4]
  i414.sortingLayerName = i415[5]
  i414.sortingOrder = i415[6]
  i414.scaleFactor = i415[7]
  request.r(i415[8], i415[9], 0, i414, 'worldCamera')
  i414.overrideSorting = !!i415[10]
  i414.pixelPerfect = !!i415[11]
  i414.targetDisplay = i415[12]
  i414.overridePixelPerfect = !!i415[13]
  i414.enabled = !!i415[14]
  return i414
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i417 = data
  i416.m_UiScaleMode = i417[0]
  i416.m_ReferencePixelsPerUnit = i417[1]
  i416.m_ScaleFactor = i417[2]
  i416.m_ReferenceResolution = new pc.Vec2( i417[3], i417[4] )
  i416.m_ScreenMatchMode = i417[5]
  i416.m_MatchWidthOrHeight = i417[6]
  i416.m_PhysicalUnit = i417[7]
  i416.m_FallbackScreenDPI = i417[8]
  i416.m_DefaultSpriteDPI = i417[9]
  i416.m_DynamicPixelsPerUnit = i417[10]
  i416.m_PresetInfoIsWorld = !!i417[11]
  return i416
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i419 = data
  i418.m_IgnoreReversedGraphics = !!i419[0]
  i418.m_BlockingObjects = i419[1]
  i418.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i419[2] )
  return i418
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i421 = data
  i420.m_AspectMode = i421[0]
  i420.m_AspectRatio = i421[1]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i423 = data
  i422.cullTransparentMesh = !!i423[0]
  return i422
}

Deserializers["MelonAd.UICover"] = function (request, data, root) {
  var i424 = root || request.c( 'MelonAd.UICover' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'target')
  return i424
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'm_Texture')
  i426.m_UVRect = UnityEngine.Rect.MinMaxRect(i427[2], i427[3], i427[4], i427[5])
  request.r(i427[6], i427[7], 0, i426, 'm_Material')
  i426.m_Maskable = !!i427[8]
  i426.m_Color = new pc.Color(i427[9], i427[10], i427[11], i427[12])
  i426.m_RaycastTarget = !!i427[13]
  i426.m_RaycastPadding = new pc.Vec4( i427[14], i427[15], i427[16], i427[17] )
  return i426
}

Deserializers["MelonAd.LevelRefs"] = function (request, data, root) {
  var i428 = root || request.c( 'MelonAd.LevelRefs' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'man')
  request.r(i429[2], i429[3], 0, i428, 'rifle')
  request.r(i429[4], i429[5], 0, i428, 'flameThrower')
  request.r(i429[6], i429[7], 0, i428, 'tutorPin')
  request.r(i429[8], i429[9], 0, i428, 'dynamicRoot')
  return i428
}

Deserializers["MelonAd.Pin"] = function (request, data, root) {
  var i430 = root || request.c( 'MelonAd.Pin' )
  var i431 = data
  i430.evt = i431[0]
  i430.flyOffset = new pc.Vec2( i431[1], i431[2] )
  return i430
}

Deserializers["MelonAd.ExitZone"] = function (request, data, root) {
  var i432 = root || request.c( 'MelonAd.ExitZone' )
  var i433 = data
  return i432
}

Deserializers["MelonAd.Grabbable"] = function (request, data, root) {
  var i434 = root || request.c( 'MelonAd.Grabbable' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'rb')
  request.r(i435[2], i435[3], 0, i434, 'owner')
  return i434
}

Deserializers["MelonAd.Spike"] = function (request, data, root) {
  var i436 = root || request.c( 'MelonAd.Spike' )
  var i437 = data
  return i436
}

Deserializers["MelonAd.Acid"] = function (request, data, root) {
  var i438 = root || request.c( 'MelonAd.Acid' )
  var i439 = data
  return i438
}

Deserializers["MelonAd.Rifle"] = function (request, data, root) {
  var i440 = root || request.c( 'MelonAd.Rifle' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'bulletPrefab')
  request.r(i441[2], i441[3], 0, i440, 'bulletRoot')
  request.r(i441[4], i441[5], 0, i440, 'muzzle')
  i440.poolSize = i441[6]
  i440.width = i441[7]
  i440.bulletSpeed = i441[8]
  return i440
}

Deserializers["MelonAd.FlameThrower"] = function (request, data, root) {
  var i442 = root || request.c( 'MelonAd.FlameThrower' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'prefab')
  request.r(i443[2], i443[3], 0, i442, 'particleRoot')
  i442.poolSize = i443[4]
  i442.width = i443[5]
  i442.speed = i443[6]
  return i442
}

Deserializers["MelonAd.CharacterSelector"] = function (request, data, root) {
  var i444 = root || request.c( 'MelonAd.CharacterSelector' )
  var i445 = data
  i444.index = i445[0]
  var i447 = i445[1]
  var i446 = []
  for(var i = 0; i < i447.length; i += 2) {
  request.r(i447[i + 0], i447[i + 1], 2, i446, '')
  }
  i444.characters = i446
  return i444
}

Deserializers["MelonAd.Ragdoll"] = function (request, data, root) {
  var i450 = root || request.c( 'MelonAd.Ragdoll' )
  var i451 = data
  var i453 = i451[0]
  var i452 = []
  for(var i = 0; i < i453.length; i += 2) {
  request.r(i453[i + 0], i453[i + 1], 2, i452, '')
  }
  i450.parts = i452
  request.r(i451[1], i451[2], 0, i450, 'head')
  request.r(i451[3], i451[4], 0, i450, 'leftFoot')
  request.r(i451[5], i451[6], 0, i450, 'rightFoot')
  request.r(i451[7], i451[8], 0, i450, 'hole')
  i450.holeDiameter = i451[9]
  i450.headLift = i451[10]
  i450.footPull = i451[11]
  i450.exitStayTime = i451[12]
  i450.blockMask = UnityEngine.LayerMask.FromIntegerValue( i451[13] )
  return i450
}

Deserializers["MelonAd.RagdollPart"] = function (request, data, root) {
  var i456 = root || request.c( 'MelonAd.RagdollPart' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'owner')
  request.r(i457[2], i457[3], 0, i456, 'rb')
  request.r(i457[4], i457[5], 0, i456, 'skin')
  request.r(i457[6], i457[7], 0, i456, 'skeleton')
  request.r(i457[8], i457[9], 0, i456, 'burnt')
  var i459 = i457[10]
  var i458 = []
  for(var i = 0; i < i459.length; i += 2) {
  request.r(i459[i + 0], i459[i + 1], 2, i458, '')
  }
  i456.skinExtras = i458
  var i461 = i457[11]
  var i460 = []
  for(var i = 0; i < i461.length; i += 2) {
  request.r(i461[i + 0], i461[i + 1], 2, i460, '')
  }
  i456.burntExtras = i460
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i465 = data
  i464.useLimits = !!i465[0]
  i464.limits = request.d('UnityEngine.JointAngleLimits2D', i465[1], i464.limits)
  i464.useMotor = !!i465[2]
  i464.motor = request.d('UnityEngine.JointMotor2D', i465[3], i464.motor)
  i464.anchor = new pc.Vec2( i465[4], i465[5] )
  i464.connectedAnchor = new pc.Vec2( i465[6], i465[7] )
  i464.autoConfigureConnectedAnchor = !!i465[8]
  request.r(i465[9], i465[10], 0, i464, 'connectedBody')
  i464.breakForce = i465[11]
  i464.breakTorque = i465[12]
  i464.enableCollision = !!i465[13]
  i464.enabled = !!i465[14]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i467 = data
  i466.frontSortingLayerID = i467[0]
  i466.frontSortingOrder = i467[1]
  i466.backSortingLayerID = i467[2]
  i466.backSortingOrder = i467[3]
  i466.alphaCutoff = i467[4]
  request.r(i467[5], i467[6], 0, i466, 'sprite')
  i466.tileMode = i467[7]
  i466.isCustomRangeActive = !!i467[8]
  i466.spriteSortPoint = i467[9]
  i466.enabled = !!i467[10]
  request.r(i467[11], i467[12], 0, i466, 'sharedMaterial')
  var i469 = i467[13]
  var i468 = []
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 2, i468, '')
  }
  i466.sharedMaterials = i468
  i466.receiveShadows = !!i467[14]
  i466.shadowCastingMode = i467[15]
  i466.sortingLayerID = i467[16]
  i466.sortingOrder = i467[17]
  i466.lightmapIndex = i467[18]
  i466.lightmapSceneIndex = i467[19]
  i466.lightmapScaleOffset = new pc.Vec4( i467[20], i467[21], i467[22], i467[23] )
  i466.lightProbeUsage = i467[24]
  i466.reflectionProbeUsage = i467[25]
  return i466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.Image' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_Sprite')
  i470.m_Type = i471[2]
  i470.m_PreserveAspect = !!i471[3]
  i470.m_FillCenter = !!i471[4]
  i470.m_FillMethod = i471[5]
  i470.m_FillAmount = i471[6]
  i470.m_FillClockwise = !!i471[7]
  i470.m_FillOrigin = i471[8]
  i470.m_UseSpriteMesh = !!i471[9]
  i470.m_PixelsPerUnitMultiplier = i471[10]
  request.r(i471[11], i471[12], 0, i470, 'm_Material')
  i470.m_Maskable = !!i471[13]
  i470.m_Color = new pc.Color(i471[14], i471[15], i471[16], i471[17])
  i470.m_RaycastTarget = !!i471[18]
  i470.m_RaycastPadding = new pc.Vec4( i471[19], i471[20], i471[21], i471[22] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i473 = data
  i472.m_Alpha = i473[0]
  i472.m_Interactable = !!i473[1]
  i472.m_BlocksRaycasts = !!i473[2]
  i472.m_IgnoreParentGroups = !!i473[3]
  i472.enabled = !!i473[4]
  return i472
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.Button' )
  var i475 = data
  i474.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i475[0], i474.m_OnClick)
  i474.m_Navigation = request.d('UnityEngine.UI.Navigation', i475[1], i474.m_Navigation)
  i474.m_Transition = i475[2]
  i474.m_Colors = request.d('UnityEngine.UI.ColorBlock', i475[3], i474.m_Colors)
  i474.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i475[4], i474.m_SpriteState)
  i474.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i475[5], i474.m_AnimationTriggers)
  i474.m_Interactable = !!i475[6]
  request.r(i475[7], i475[8], 0, i474, 'm_TargetGraphic')
  return i474
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i477 = data
  i476.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i477[0], i476.m_PersistentCalls)
  return i476
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i479 = data
  var i481 = i479[0]
  var i480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i481.length; i += 1) {
    i480.add(request.d('UnityEngine.Events.PersistentCall', i481[i + 0]));
  }
  i478.m_Calls = i480
  return i478
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Target')
  i484.m_TargetAssemblyTypeName = i485[2]
  i484.m_MethodName = i485[3]
  i484.m_Mode = i485[4]
  i484.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i485[5], i484.m_Arguments)
  i484.m_CallState = i485[6]
  return i484
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i487 = data
  i486.m_Mode = i487[0]
  i486.m_WrapAround = !!i487[1]
  request.r(i487[2], i487[3], 0, i486, 'm_SelectOnUp')
  request.r(i487[4], i487[5], 0, i486, 'm_SelectOnDown')
  request.r(i487[6], i487[7], 0, i486, 'm_SelectOnLeft')
  request.r(i487[8], i487[9], 0, i486, 'm_SelectOnRight')
  return i486
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i489 = data
  i488.m_NormalColor = new pc.Color(i489[0], i489[1], i489[2], i489[3])
  i488.m_HighlightedColor = new pc.Color(i489[4], i489[5], i489[6], i489[7])
  i488.m_PressedColor = new pc.Color(i489[8], i489[9], i489[10], i489[11])
  i488.m_SelectedColor = new pc.Color(i489[12], i489[13], i489[14], i489[15])
  i488.m_DisabledColor = new pc.Color(i489[16], i489[17], i489[18], i489[19])
  i488.m_ColorMultiplier = i489[20]
  i488.m_FadeDuration = i489[21]
  return i488
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_HighlightedSprite')
  request.r(i491[2], i491[3], 0, i490, 'm_PressedSprite')
  request.r(i491[4], i491[5], 0, i490, 'm_SelectedSprite')
  request.r(i491[6], i491[7], 0, i490, 'm_DisabledSprite')
  return i490
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i493 = data
  i492.m_NormalTrigger = i493[0]
  i492.m_HighlightedTrigger = i493[1]
  i492.m_PressedTrigger = i493[2]
  i492.m_SelectedTrigger = i493[3]
  i492.m_DisabledTrigger = i493[4]
  return i492
}

Deserializers["MelonAd.CtaOverlay"] = function (request, data, root) {
  var i494 = root || request.c( 'MelonAd.CtaOverlay' )
  var i495 = data
  return i494
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'm_FirstSelected')
  i496.m_sendNavigationEvents = !!i497[2]
  i496.m_DragThreshold = i497[3]
  return i496
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i499 = data
  i498.m_HorizontalAxis = i499[0]
  i498.m_VerticalAxis = i499[1]
  i498.m_SubmitButton = i499[2]
  i498.m_CancelButton = i499[3]
  i498.m_InputActionsPerSecond = i499[4]
  i498.m_RepeatDelay = i499[5]
  i498.m_ForceModuleActive = !!i499[6]
  i498.m_SendPointerHoverToParent = !!i499[7]
  return i498
}

Deserializers["MelonAd.GameConfig"] = function (request, data, root) {
  var i500 = root || request.c( 'MelonAd.GameConfig' )
  var i501 = data
  i500.retries = i501[0]
  i500.failPopupDelay = i501[1]
  i500.rifleInterval = i501[2]
  i500.rifleBurstAfterPin = i501[3]
  i500.flameRate = i501[4]
  i500.pinTapRadius = i501[5]
  i500.showTutorial = !!i501[6]
  i500.iosLink = i501[7]
  i500.androidLink = i501[8]
  return i500
}

Deserializers["MelonAd.AudioManager"] = function (request, data, root) {
  var i502 = root || request.c( 'MelonAd.AudioManager' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'music')
  request.r(i503[2], i503[3], 0, i502, 'doc')
  request.r(i503[4], i503[5], 0, i502, 'door')
  request.r(i503[6], i503[7], 0, i502, 'fire')
  request.r(i503[8], i503[9], 0, i502, 'flame')
  request.r(i503[10], i503[11], 0, i502, 'hurt')
  request.r(i503[12], i503[13], 0, i502, 'jar')
  request.r(i503[14], i503[15], 0, i502, 'kis')
  request.r(i503[16], i503[17], 0, i502, 'ohog')
  request.r(i503[18], i503[19], 0, i502, 'complete')
  request.r(i503[20], i503[21], 0, i502, 'fail')
  return i502
}

Deserializers["MelonAd.FxManager"] = function (request, data, root) {
  var i504 = root || request.c( 'MelonAd.FxManager' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'smoke')
  request.r(i505[2], i505[3], 0, i504, 'flame')
  request.r(i505[4], i505[5], 0, i504, 'blood')
  request.r(i505[6], i505[7], 0, i504, 'spikeShard')
  request.r(i505[8], i505[9], 0, i504, 'bulletShard')
  request.r(i505[10], i505[11], 0, i504, 'bubble')
  i504.prewarm = i505[12]
  i504.sortingOrder = i505[13]
  return i504
}

Deserializers["MelonAd.GameManager"] = function (request, data, root) {
  var i506 = root || request.c( 'MelonAd.GameManager' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'level')
  request.r(i507[2], i507[3], 0, i506, 'zoomRoot')
  request.r(i507[4], i507[5], 0, i506, 'cam')
  request.r(i507[6], i507[7], 0, i506, 'ui')
  request.r(i507[8], i507[9], 0, i506, 'cta')
  request.r(i507[10], i507[11], 0, i506, 'tapFinger')
  request.r(i507[12], i507[13], 0, i506, 'dragFinger')
  request.r(i507[14], i507[15], 0, i506, 'dragFingerSprite')
  i506.pickMask = UnityEngine.LayerMask.FromIntegerValue( i507[16] )
  i506.winZoom = i507[17]
  i506.winFocus = new pc.Vec2( i507[18], i507[19] )
  i506.winZoomDuration = i507[20]
  i506.winPopupDelay = i507[21]
  i506.dragFrequency = i507[22]
  i506.dragDamping = i507[23]
  i506.dragMaxForce = i507[24]
  i506.tapFingerOffset = new pc.Vec2( i507[25], i507[26] )
  return i506
}

Deserializers["LunaController"] = function (request, data, root) {
  var i508 = root || request.c( 'LunaController' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'BGTexture')
  i508.UseTime = !!i509[2]
  i508.TimePlay = i509[3]
  i508.Character = i509[4]
  request.r(i509[5], i509[6], 0, i508, 'characterSelector')
  request.r(i509[7], i509[8], 0, i508, 'BGImage')
  var i511 = i509[9]
  var i510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 1, i510, '')
  }
  i508.CTA = i510
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i515 = data
  i514.ambientIntensity = i515[0]
  i514.reflectionIntensity = i515[1]
  i514.ambientMode = i515[2]
  i514.ambientLight = new pc.Color(i515[3], i515[4], i515[5], i515[6])
  i514.ambientSkyColor = new pc.Color(i515[7], i515[8], i515[9], i515[10])
  i514.ambientGroundColor = new pc.Color(i515[11], i515[12], i515[13], i515[14])
  i514.ambientEquatorColor = new pc.Color(i515[15], i515[16], i515[17], i515[18])
  i514.fogColor = new pc.Color(i515[19], i515[20], i515[21], i515[22])
  i514.fogEndDistance = i515[23]
  i514.fogStartDistance = i515[24]
  i514.fogDensity = i515[25]
  i514.fog = !!i515[26]
  request.r(i515[27], i515[28], 0, i514, 'skybox')
  i514.fogMode = i515[29]
  var i517 = i515[30]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i517[i + 0]) );
  }
  i514.lightmaps = i516
  i514.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i515[31], i514.lightProbes)
  i514.lightmapsMode = i515[32]
  i514.mixedBakeMode = i515[33]
  i514.environmentLightingMode = i515[34]
  i514.ambientProbe = new pc.SphericalHarmonicsL2(i515[35])
  request.r(i515[36], i515[37], 0, i514, 'customReflection')
  request.r(i515[38], i515[39], 0, i514, 'defaultReflection')
  i514.defaultReflectionMode = i515[40]
  i514.defaultReflectionResolution = i515[41]
  i514.sunLightObjectId = i515[42]
  i514.pixelLightCount = i515[43]
  i514.defaultReflectionHDR = !!i515[44]
  i514.hasLightDataAsset = !!i515[45]
  i514.hasManualGenerate = !!i515[46]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'lightmapColor')
  request.r(i521[2], i521[3], 0, i520, 'lightmapDirection')
  request.r(i521[4], i521[5], 0, i520, 'shadowMask')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i522 = root || new UnityEngine.LightProbes()
  var i523 = data
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i531 = data
  i530.name = i531[0]
  i530.bounciness = i531[1]
  i530.friction = i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i533 = data
  var i535 = i533[0]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i535.length; i += 1) {
    i534.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i535[i + 0]));
  }
  i532.ShaderCompilationErrors = i534
  i532.name = i533[1]
  i532.guid = i533[2]
  var i537 = i533[3]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i532.shaderDefinedKeywords = i536
  var i539 = i533[4]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i539[i + 0]) );
  }
  i532.passes = i538
  var i541 = i533[5]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i541[i + 0]) );
  }
  i532.usePasses = i540
  var i543 = i533[6]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i543[i + 0]) );
  }
  i532.defaultParameterValues = i542
  request.r(i533[7], i533[8], 0, i532, 'unityFallbackShader')
  i532.readDepth = !!i533[9]
  i532.hasDepthOnlyPass = !!i533[10]
  i532.isCreatedByShaderGraph = !!i533[11]
  i532.disableBatching = !!i533[12]
  i532.compiled = !!i533[13]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i547 = data
  i546.shaderName = i547[0]
  i546.errorMessage = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i552 = root || new pc.UnityShaderPass()
  var i553 = data
  i552.id = i553[0]
  i552.subShaderIndex = i553[1]
  i552.name = i553[2]
  i552.passType = i553[3]
  i552.grabPassTextureName = i553[4]
  i552.usePass = !!i553[5]
  i552.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[6], i552.zTest)
  i552.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[7], i552.zWrite)
  i552.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[8], i552.culling)
  i552.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i553[9], i552.blending)
  i552.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i553[10], i552.alphaBlending)
  i552.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[11], i552.colorWriteMask)
  i552.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[12], i552.offsetUnits)
  i552.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[13], i552.offsetFactor)
  i552.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[14], i552.stencilRef)
  i552.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[15], i552.stencilReadMask)
  i552.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[16], i552.stencilWriteMask)
  i552.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i553[17], i552.stencilOp)
  i552.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i553[18], i552.stencilOpFront)
  i552.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i553[19], i552.stencilOpBack)
  var i555 = i553[20]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i555[i + 0]) );
  }
  i552.tags = i554
  var i557 = i553[21]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.passDefinedKeywords = i556
  var i559 = i553[22]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i559[i + 0]) );
  }
  i552.passDefinedKeywordGroups = i558
  var i561 = i553[23]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i561[i + 0]) );
  }
  i552.variants = i560
  var i563 = i553[24]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i563[i + 0]) );
  }
  i552.excludedVariants = i562
  i552.hasDepthReader = !!i553[25]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i565 = data
  i564.val = i565[0]
  i564.name = i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i567 = data
  i566.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[0], i566.src)
  i566.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[1], i566.dst)
  i566.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i567[2], i566.op)
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i569 = data
  i568.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[0], i568.pass)
  i568.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[1], i568.fail)
  i568.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[2], i568.zFail)
  i568.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i569[3], i568.comp)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i573 = data
  i572.name = i573[0]
  i572.value = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i577 = data
  var i579 = i577[0]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i576.keywords = i578
  i576.hasDiscard = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i583 = data
  i582.passId = i583[0]
  i582.subShaderIndex = i583[1]
  var i585 = i583[2]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( i585[i + 0] );
  }
  i582.keywords = i584
  i582.vertexProgram = i583[3]
  i582.fragmentProgram = i583[4]
  i582.exportedForWebGl2 = !!i583[5]
  i582.readDepth = !!i583[6]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'shader')
  i588.pass = i589[2]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i593 = data
  i592.name = i593[0]
  i592.type = i593[1]
  i592.value = new pc.Vec4( i593[2], i593[3], i593[4], i593[5] )
  i592.textureValue = i593[6]
  i592.shaderPropertyFlag = i593[7]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i595 = data
  i594.name = i595[0]
  request.r(i595[1], i595[2], 0, i594, 'texture')
  i594.aabb = i595[3]
  i594.vertices = i595[4]
  i594.triangles = i595[5]
  i594.textureRect = UnityEngine.Rect.MinMaxRect(i595[6], i595[7], i595[8], i595[9])
  i594.packedRect = UnityEngine.Rect.MinMaxRect(i595[10], i595[11], i595[12], i595[13])
  i594.border = new pc.Vec4( i595[14], i595[15], i595[16], i595[17] )
  i594.transparency = i595[18]
  i594.bounds = i595[19]
  i594.pixelsPerUnit = i595[20]
  i594.textureWidth = i595[21]
  i594.textureHeight = i595[22]
  i594.nativeSize = new pc.Vec2( i595[23], i595[24] )
  i594.pivot = new pc.Vec2( i595[25], i595[26] )
  i594.textureRectOffset = new pc.Vec2( i595[27], i595[28] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i597 = data
  i596.name = i597[0]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i599 = data
  var i601 = i599[0]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i601[i + 0]) );
  }
  i598.files = i600
  i598.componentToPrefabIds = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i605 = data
  i604.path = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'unityObject')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i607 = data
  var i609 = i607[0]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i609[i + 0]) );
  }
  i606.scriptsExecutionOrder = i608
  var i611 = i607[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i611[i + 0]) );
  }
  i606.sortingLayers = i610
  var i613 = i607[2]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i613[i + 0]) );
  }
  i606.cullingLayers = i612
  i606.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i607[3], i606.timeSettings)
  i606.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i607[4], i606.physicsSettings)
  i606.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i607[5], i606.physics2DSettings)
  i606.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i607[6], i606.qualitySettings)
  i606.enableRealtimeShadows = !!i607[7]
  i606.enableAutoInstancing = !!i607[8]
  i606.enableStaticBatching = !!i607[9]
  i606.enableDynamicBatching = !!i607[10]
  i606.usePreservativeDynamicBatching = !!i607[11]
  i606.lightmapEncodingQuality = i607[12]
  i606.desiredColorSpace = i607[13]
  var i615 = i607[14]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i606.allTags = i614
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i619 = data
  i618.name = i619[0]
  i618.value = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i623 = data
  i622.id = i623[0]
  i622.name = i623[1]
  i622.value = i623[2]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i627 = data
  i626.id = i627[0]
  i626.name = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i629 = data
  i628.fixedDeltaTime = i629[0]
  i628.maximumDeltaTime = i629[1]
  i628.timeScale = i629[2]
  i628.maximumParticleTimestep = i629[3]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i631 = data
  i630.gravity = new pc.Vec3( i631[0], i631[1], i631[2] )
  i630.defaultSolverIterations = i631[3]
  i630.bounceThreshold = i631[4]
  i630.autoSyncTransforms = !!i631[5]
  i630.autoSimulation = !!i631[6]
  var i633 = i631[7]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i633[i + 0]) );
  }
  i630.collisionMatrix = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.layerId = i637[1]
  i636.otherLayerId = i637[2]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'material')
  i638.gravity = new pc.Vec2( i639[2], i639[3] )
  i638.positionIterations = i639[4]
  i638.velocityIterations = i639[5]
  i638.velocityThreshold = i639[6]
  i638.maxLinearCorrection = i639[7]
  i638.maxAngularCorrection = i639[8]
  i638.maxTranslationSpeed = i639[9]
  i638.maxRotationSpeed = i639[10]
  i638.baumgarteScale = i639[11]
  i638.baumgarteTOIScale = i639[12]
  i638.timeToSleep = i639[13]
  i638.linearSleepTolerance = i639[14]
  i638.angularSleepTolerance = i639[15]
  i638.defaultContactOffset = i639[16]
  i638.autoSimulation = !!i639[17]
  i638.queriesHitTriggers = !!i639[18]
  i638.queriesStartInColliders = !!i639[19]
  i638.callbacksOnDisable = !!i639[20]
  i638.reuseCollisionCallbacks = !!i639[21]
  i638.autoSyncTransforms = !!i639[22]
  var i641 = i639[23]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i641[i + 0]) );
  }
  i638.collisionMatrix = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.layerId = i645[1]
  i644.otherLayerId = i645[2]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i647 = data
  var i649 = i647[0]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i649[i + 0]) );
  }
  i646.qualityLevels = i648
  var i651 = i647[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.names = i650
  i646.shadows = i647[2]
  i646.anisotropicFiltering = i647[3]
  i646.antiAliasing = i647[4]
  i646.lodBias = i647[5]
  i646.shadowCascades = i647[6]
  i646.shadowDistance = i647[7]
  i646.shadowmaskMode = i647[8]
  i646.shadowProjection = i647[9]
  i646.shadowResolution = i647[10]
  i646.softParticles = !!i647[11]
  i646.softVegetation = !!i647[12]
  i646.activeColorSpace = i647[13]
  i646.desiredColorSpace = i647[14]
  i646.masterTextureLimit = i647[15]
  i646.maxQueuedFrames = i647[16]
  i646.particleRaycastBudget = i647[17]
  i646.pixelLightCount = i647[18]
  i646.realtimeReflectionProbes = !!i647[19]
  i646.shadowCascade2Split = i647[20]
  i646.shadowCascade4Split = new pc.Vec3( i647[21], i647[22], i647[23] )
  i646.streamingMipmapsActive = !!i647[24]
  i646.vSyncCount = i647[25]
  i646.asyncUploadBufferSize = i647[26]
  i646.asyncUploadTimeSlice = i647[27]
  i646.billboardsFaceCameraPosition = !!i647[28]
  i646.shadowNearPlaneOffset = i647[29]
  i646.streamingMipmapsMemoryBudget = i647[30]
  i646.maximumLODLevel = i647[31]
  i646.streamingMipmapsAddAllCameras = !!i647[32]
  i646.streamingMipmapsMaxLevelReduction = i647[33]
  i646.streamingMipmapsRenderersPerFrame = i647[34]
  i646.resolutionScalingFixedDPIFactor = i647[35]
  i646.streamingMipmapsMaxFileIORequests = i647[36]
  i646.currentQualityLevel = i647[37]
  return i646
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_ObjectArgument')
  i654.m_ObjectArgumentAssemblyTypeName = i655[2]
  i654.m_IntArgument = i655[3]
  i654.m_FloatArgument = i655[4]
  i654.m_StringArgument = i655[5]
  i654.m_BoolArgument = !!i655[6]
  return i654
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[13],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[6],"70":[6],"71":[6],"72":[6],"73":[6],"74":[6],"41":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"81":[13],"82":[83],"84":[85],"86":[85],"21":[18],"15":[13],"43":[42],"87":[3],"88":[13],"89":[90],"91":[44],"92":[21],"93":[18],"94":[26,18],"95":[83],"96":[26,18],"97":[18],"98":[18],"99":[83,18],"100":[18,26],"101":[102],"103":[102],"104":[102],"105":[18],"106":[18],"24":[21],"42":[26,18],"25":[18],"23":[21],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"115":[18],"28":[26,18],"116":[18],"117":[18],"118":[18],"119":[18],"120":[26,18],"121":[18],"122":[44],"123":[44],"45":[44],"124":[44],"125":[13],"126":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.MonoBehaviour","MelonAd.Bullet","UnityEngine.CircleCollider2D","MelonAd.FlameParticle","UnityEngine.Camera","UnityEngine.AudioListener","MelonAd.CameraFit","MelonAd.UIController","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.CanvasRenderer","MelonAd.UICover","UnityEngine.UI.RawImage","MelonAd.LevelRefs","MelonAd.Ragdoll","MelonAd.Rifle","MelonAd.FlameThrower","MelonAd.Pin","MelonAd.ExitZone","MelonAd.Grabbable","MelonAd.Spike","MelonAd.Acid","MelonAd.CharacterSelector","MelonAd.RagdollPart","UnityEngine.SpriteMask","UnityEngine.HingeJoint2D","UnityEngine.UI.Image","MelonAd.CtaOverlay","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","MelonAd.GameConfig","MelonAd.AudioManager","UnityEngine.AudioClip","MelonAd.FxManager","MelonAd.GameManager","LunaController","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "09/30/2026 04:31:40";

Deserializers.lunaDaysRunning = "27.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_DatDV_SSP_V08_YenTTH";

Deserializers.lunaAppID = "40364";

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

Deserializers.buildID = "be68dd7c-e526-44fd-a3f5-e4e988d8057e";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"],["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

