var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.JointSpring' )
  var i321 = data
  i320.spring = i321[0]
  i320.damper = i321[1]
  i320.targetPosition = i321[2]
  return i320
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.JointMotor' )
  var i323 = data
  i322.m_TargetVelocity = i323[0]
  i322.m_Force = i323[1]
  i322.m_FreeSpin = i323[2]
  return i322
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.JointLimits' )
  var i325 = data
  i324.m_Min = i325[0]
  i324.m_Max = i325[1]
  i324.m_Bounciness = i325[2]
  i324.m_BounceMinVelocity = i325[3]
  i324.m_ContactDistance = i325[4]
  i324.minBounce = i325[5]
  i324.maxBounce = i325[6]
  return i324
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointDrive' )
  var i327 = data
  i326.m_PositionSpring = i327[0]
  i326.m_PositionDamper = i327[1]
  i326.m_MaximumForce = i327[2]
  i326.m_UseAcceleration = i327[3]
  return i326
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i329 = data
  i328.m_Spring = i329[0]
  i328.m_Damper = i329[1]
  return i328
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i331 = data
  i330.m_Limit = i331[0]
  i330.m_Bounciness = i331[1]
  i330.m_ContactDistance = i331[2]
  return i330
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i333 = data
  i332.m_ExtremumSlip = i333[0]
  i332.m_ExtremumValue = i333[1]
  i332.m_AsymptoteSlip = i333[2]
  i332.m_AsymptoteValue = i333[3]
  i332.m_Stiffness = i333[4]
  return i332
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i335 = data
  i334.m_LowerAngle = i335[0]
  i334.m_UpperAngle = i335[1]
  return i334
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i337 = data
  i336.m_MotorSpeed = i337[0]
  i336.m_MaximumMotorTorque = i337[1]
  return i336
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i339 = data
  i338.m_DampingRatio = i339[0]
  i338.m_Frequency = i339[1]
  i338.m_Angle = i339[2]
  return i338
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i341 = data
  i340.m_LowerTranslation = i341[0]
  i340.m_UpperTranslation = i341[1]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i342 = root || new pc.UnityMaterial()
  var i343 = data
  i342.name = i343[0]
  request.r(i343[1], i343[2], 0, i342, 'shader')
  i342.renderQueue = i343[3]
  i342.enableInstancing = !!i343[4]
  var i345 = i343[5]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i345[i + 0]) );
  }
  i342.floatParameters = i344
  var i347 = i343[6]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i347[i + 0]) );
  }
  i342.colorParameters = i346
  var i349 = i343[7]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i349[i + 0]) );
  }
  i342.vectorParameters = i348
  var i351 = i343[8]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i351[i + 0]) );
  }
  i342.textureParameters = i350
  var i353 = i343[9]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i353[i + 0]) );
  }
  i342.materialFlags = i352
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i357 = data
  i356.name = i357[0]
  i356.value = i357[1]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i361 = data
  i360.name = i361[0]
  i360.value = new pc.Color(i361[1], i361[2], i361[3], i361[4])
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i365 = data
  i364.name = i365[0]
  i364.value = new pc.Vec4( i365[1], i365[2], i365[3], i365[4] )
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i369 = data
  i368.name = i369[0]
  request.r(i369[1], i369[2], 0, i368, 'value')
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i373 = data
  i372.name = i373[0]
  i372.enabled = !!i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i375 = data
  i374.name = i375[0]
  i374.width = i375[1]
  i374.height = i375[2]
  i374.mipmapCount = i375[3]
  i374.anisoLevel = i375[4]
  i374.filterMode = i375[5]
  i374.hdr = !!i375[6]
  i374.format = i375[7]
  i374.wrapMode = i375[8]
  i374.alphaIsTransparency = !!i375[9]
  i374.alphaSource = i375[10]
  i374.graphicsFormat = i375[11]
  i374.sRGBTexture = !!i375[12]
  i374.desiredColorSpace = i375[13]
  i374.wrapU = i375[14]
  i374.wrapV = i375[15]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i377 = data
  i376.position = new pc.Vec3( i377[0], i377[1], i377[2] )
  i376.scale = new pc.Vec3( i377[3], i377[4], i377[5] )
  i376.rotation = new pc.Quat(i377[6], i377[7], i377[8], i377[9])
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i379 = data
  i378.color = new pc.Color(i379[0], i379[1], i379[2], i379[3])
  request.r(i379[4], i379[5], 0, i378, 'sprite')
  i378.flipX = !!i379[6]
  i378.flipY = !!i379[7]
  i378.drawMode = i379[8]
  i378.size = new pc.Vec2( i379[9], i379[10] )
  i378.tileMode = i379[11]
  i378.adaptiveModeThreshold = i379[12]
  i378.maskInteraction = i379[13]
  i378.spriteSortPoint = i379[14]
  i378.enabled = !!i379[15]
  request.r(i379[16], i379[17], 0, i378, 'sharedMaterial')
  var i381 = i379[18]
  var i380 = []
  for(var i = 0; i < i381.length; i += 2) {
  request.r(i381[i + 0], i381[i + 1], 2, i380, '')
  }
  i378.sharedMaterials = i380
  i378.receiveShadows = !!i379[19]
  i378.shadowCastingMode = i379[20]
  i378.sortingLayerID = i379[21]
  i378.sortingOrder = i379[22]
  i378.lightmapIndex = i379[23]
  i378.lightmapSceneIndex = i379[24]
  i378.lightmapScaleOffset = new pc.Vec4( i379[25], i379[26], i379[27], i379[28] )
  i378.lightProbeUsage = i379[29]
  i378.reflectionProbeUsage = i379[30]
  return i378
}

Deserializers["AcidGhost"] = function (request, data, root) {
  var i384 = root || request.c( 'AcidGhost' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'sr')
  i384.life = i385[2]
  i384.maxAlpha = i385[3]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i387 = data
  i386.name = i387[0]
  i386.tagId = i387[1]
  i386.enabled = !!i387[2]
  i386.isStatic = !!i387[3]
  i386.layer = i387[4]
  return i386
}

Deserializers["AcidHit"] = function (request, data, root) {
  var i388 = root || request.c( 'AcidHit' )
  var i389 = data
  request.r(i389[0], i389[1], 0, i388, 'dark')
  request.r(i389[2], i389[3], 0, i388, 'glow')
  i388.life = i389[4]
  return i388
}

Deserializers["AcidMan"] = function (request, data, root) {
  var i390 = root || request.c( 'AcidMan' )
  var i391 = data
  var i393 = i391[0]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('AcidMan+Part', i393[i + 0]) );
  }
  i390.parts = i392
  request.r(i391[1], i391[2], 0, i390, 'ghostSprite')
  i390.standForce = i391[3]
  i390.fallAfterTiles = i391[4]
  return i390
}

Deserializers["AcidMan+Part"] = function (request, data, root) {
  var i396 = root || request.c( 'AcidMan+Part' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'body')
  request.r(i397[2], i397[3], 0, i396, 'joint')
  request.r(i397[4], i397[5], 0, i396, 'col')
  var i399 = i397[6]
  var i398 = []
  for(var i = 0; i < i399.length; i += 2) {
  request.r(i399[i + 0], i399[i + 1], 2, i398, '')
  }
  i396.tiles = i398
  i396.forcePoint = new pc.Vec2( i397[7], i397[8] )
  i396.sortOffset = i397[9]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i403 = data
  i402.bodyType = i403[0]
  request.r(i403[1], i403[2], 0, i402, 'material')
  i402.simulated = !!i403[3]
  i402.useAutoMass = !!i403[4]
  i402.mass = i403[5]
  i402.drag = i403[6]
  i402.angularDrag = i403[7]
  i402.gravityScale = i403[8]
  i402.collisionDetectionMode = i403[9]
  i402.sleepMode = i403[10]
  i402.constraints = i403[11]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i405 = data
  i404.usedByComposite = !!i405[0]
  i404.autoTiling = !!i405[1]
  i404.size = new pc.Vec2( i405[2], i405[3] )
  i404.edgeRadius = i405[4]
  i404.enabled = !!i405[5]
  i404.isTrigger = !!i405[6]
  i404.usedByEffector = !!i405[7]
  i404.density = i405[8]
  i404.offset = new pc.Vec2( i405[9], i405[10] )
  request.r(i405[11], i405[12], 0, i404, 'material')
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i407 = data
  i406.useLimits = !!i407[0]
  i406.limits = request.d('UnityEngine.JointAngleLimits2D', i407[1], i406.limits)
  i406.useMotor = !!i407[2]
  i406.motor = request.d('UnityEngine.JointMotor2D', i407[3], i406.motor)
  i406.anchor = new pc.Vec2( i407[4], i407[5] )
  i406.connectedAnchor = new pc.Vec2( i407[6], i407[7] )
  i406.autoConfigureConnectedAnchor = !!i407[8]
  request.r(i407[9], i407[10], 0, i406, 'connectedBody')
  i406.breakForce = i407[11]
  i406.breakTorque = i407[12]
  i406.enableCollision = !!i407[13]
  i406.enabled = !!i407[14]
  return i406
}

Deserializers["AcidTank"] = function (request, data, root) {
  var i408 = root || request.c( 'AcidTank' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'body')
  var i411 = i409[2]
  var i410 = []
  for(var i = 0; i < i411.length; i += 2) {
  request.r(i411[i + 0], i411[i + 1], 2, i410, '')
  }
  i408.rust = i410
  i408.spriteBottom = i409[3]
  i408.rustScale = i409[4]
  i408.rustGrow = i409[5]
  i408.rustFall = i409[6]
  i408.rustFallSpeed = i409[7]
  i408.rustPerSecond = i409[8]
  i408.rustMaxVisible = i409[9]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i413 = data
  i412.name = i413[0]
  i412.index = i413[1]
  i412.startup = !!i413[2]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i415 = data
  i414.pivot = new pc.Vec2( i415[0], i415[1] )
  i414.anchorMin = new pc.Vec2( i415[2], i415[3] )
  i414.anchorMax = new pc.Vec2( i415[4], i415[5] )
  i414.sizeDelta = new pc.Vec2( i415[6], i415[7] )
  i414.anchoredPosition3D = new pc.Vec3( i415[8], i415[9], i415[10] )
  i414.rotation = new pc.Quat(i415[11], i415[12], i415[13], i415[14])
  i414.scale = new pc.Vec3( i415[15], i415[16], i415[17] )
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i417 = data
  i416.planeDistance = i417[0]
  i416.referencePixelsPerUnit = i417[1]
  i416.isFallbackOverlay = !!i417[2]
  i416.renderMode = i417[3]
  i416.renderOrder = i417[4]
  i416.sortingLayerName = i417[5]
  i416.sortingOrder = i417[6]
  i416.scaleFactor = i417[7]
  request.r(i417[8], i417[9], 0, i416, 'worldCamera')
  i416.overrideSorting = !!i417[10]
  i416.pixelPerfect = !!i417[11]
  i416.targetDisplay = i417[12]
  i416.overridePixelPerfect = !!i417[13]
  i416.enabled = !!i417[14]
  return i416
}

Deserializers["AcidCustomBG"] = function (request, data, root) {
  var i418 = root || request.c( 'AcidCustomBG' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'cam')
  request.r(i419[2], i419[3], 0, i418, 'image')
  request.r(i419[4], i419[5], 0, i418, 'rect')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i421 = data
  i420.cullTransparentMesh = !!i421[0]
  return i420
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'm_Texture')
  i422.m_UVRect = UnityEngine.Rect.MinMaxRect(i423[2], i423[3], i423[4], i423[5])
  request.r(i423[6], i423[7], 0, i422, 'm_Material')
  i422.m_Maskable = !!i423[8]
  i422.m_Color = new pc.Color(i423[9], i423[10], i423[11], i423[12])
  i422.m_RaycastTarget = !!i423[13]
  i422.m_RaycastPadding = new pc.Vec4( i423[14], i423[15], i423[16], i423[17] )
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i425 = data
  i424.aspect = i425[0]
  i424.orthographic = !!i425[1]
  i424.orthographicSize = i425[2]
  i424.backgroundColor = new pc.Color(i425[3], i425[4], i425[5], i425[6])
  i424.nearClipPlane = i425[7]
  i424.farClipPlane = i425[8]
  i424.fieldOfView = i425[9]
  i424.depth = i425[10]
  i424.clearFlags = i425[11]
  i424.cullingMask = i425[12]
  i424.rect = i425[13]
  request.r(i425[14], i425[15], 0, i424, 'targetTexture')
  i424.usePhysicalProperties = !!i425[16]
  i424.focalLength = i425[17]
  i424.sensorSize = new pc.Vec2( i425[18], i425[19] )
  i424.lensShift = new pc.Vec2( i425[20], i425[21] )
  i424.gateFit = i425[22]
  i424.commandBufferCount = i425[23]
  i424.cameraType = i425[24]
  i424.enabled = !!i425[25]
  return i424
}

Deserializers["AcidWave"] = function (request, data, root) {
  var i426 = root || request.c( 'AcidWave' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'rend')
  return i426
}

Deserializers["AcidStick"] = function (request, data, root) {
  var i428 = root || request.c( 'AcidStick' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'body')
  request.r(i429[2], i429[3], 0, i428, 'cam')
  i428.keepOut = i429[4]
  i428.fingerOffset = new pc.Vec2( i429[5], i429[6] )
  i428.follow = !!i429[7]
  i428.followMaxSpeed = i429[8]
  i428.followSpinKeep = i429[9]
  i428.frequency = i429[10]
  i428.dampingRatio = i429[11]
  i428.maxAccel = i429[12]
  i428.startSpin = i429[13]
  request.r(i429[14], i429[15], 0, i428, 'col')
  return i428
}

Deserializers["AcidFx"] = function (request, data, root) {
  var i430 = root || request.c( 'AcidFx' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'ghostPrefab')
  request.r(i431[2], i431[3], 0, i430, 'hitPrefab')
  request.r(i431[4], i431[5], 0, i430, 'root')
  i430.flingTime = i431[6]
  request.r(i431[7], i431[8], 0, i430, 'bloodPrefab')
  i430.bloodCount = i431[9]
  i430.bloodTime = i431[10]
  i430.bloodSize = new pc.Vec2( i431[11], i431[12] )
  i430.bloodSpeed = new pc.Vec2( i431[13], i431[14] )
  i430.bloodInherit = i431[15]
  i430.bloodDark = new pc.Color(i431[16], i431[17], i431[18], i431[19])
  i430.bloodLight = new pc.Color(i431[20], i431[21], i431[22], i431[23])
  i430.bloodOrder = i431[24]
  request.r(i431[25], i431[26], 0, i430, 'plusOnePrefab')
  i430.plusOneTime = i431[27]
  i430.plusOneRise = i431[28]
  request.r(i431[29], i431[30], 0, i430, 'game')
  return i430
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i433 = data
  i432.m_UiScaleMode = i433[0]
  i432.m_ReferencePixelsPerUnit = i433[1]
  i432.m_ScaleFactor = i433[2]
  i432.m_ReferenceResolution = new pc.Vec2( i433[3], i433[4] )
  i432.m_ScreenMatchMode = i433[5]
  i432.m_MatchWidthOrHeight = i433[6]
  i432.m_PhysicalUnit = i433[7]
  i432.m_FallbackScreenDPI = i433[8]
  i432.m_DefaultSpriteDPI = i433[9]
  i432.m_DynamicPixelsPerUnit = i433[10]
  i432.m_PresetInfoIsWorld = !!i433[11]
  return i432
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i435 = data
  i434.m_IgnoreReversedGraphics = !!i435[0]
  i434.m_BlockingObjects = i435[1]
  i434.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i435[2] )
  return i434
}

Deserializers["AcidKillCounter"] = function (request, data, root) {
  var i436 = root || request.c( 'AcidKillCounter' )
  var i437 = data
  i436.labelGap = i437[0]
  i436.digitSpacing = i437[1]
  i436.punchScale = i437[2]
  i436.punchTime = i437[3]
  request.r(i437[4], i437[5], 0, i436, 'root')
  request.r(i437[6], i437[7], 0, i436, 'label')
  var i439 = i437[8]
  var i438 = []
  for(var i = 0; i < i439.length; i += 2) {
  request.r(i439[i + 0], i439[i + 1], 2, i438, '')
  }
  i436.digits = i438
  var i441 = i437[9]
  var i440 = []
  for(var i = 0; i < i441.length; i += 2) {
  request.r(i441[i + 0], i441[i + 1], 2, i440, '')
  }
  i436.digitSprites = i440
  return i436
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.Image' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'm_Sprite')
  i446.m_Type = i447[2]
  i446.m_PreserveAspect = !!i447[3]
  i446.m_FillCenter = !!i447[4]
  i446.m_FillMethod = i447[5]
  i446.m_FillAmount = i447[6]
  i446.m_FillClockwise = !!i447[7]
  i446.m_FillOrigin = i447[8]
  i446.m_UseSpriteMesh = !!i447[9]
  i446.m_PixelsPerUnitMultiplier = i447[10]
  request.r(i447[11], i447[12], 0, i446, 'm_Material')
  i446.m_Maskable = !!i447[13]
  i446.m_Color = new pc.Color(i447[14], i447[15], i447[16], i447[17])
  i446.m_RaycastTarget = !!i447[18]
  i446.m_RaycastPadding = new pc.Vec4( i447[19], i447[20], i447[21], i447[22] )
  return i446
}

Deserializers["AcidIntro"] = function (request, data, root) {
  var i448 = root || request.c( 'AcidIntro' )
  var i449 = data
  i448.shakeX = i449[0]
  i448.shakeY = i449[1]
  i448.shakeAngle = i449[2]
  i448.shakeRate = i449[3]
  i448.pulseScale = i449[4]
  i448.pulsePeriod = i449[5]
  request.r(i449[6], i449[7], 0, i448, 'game')
  request.r(i449[8], i449[9], 0, i448, 'sfx')
  request.r(i449[10], i449[11], 0, i448, 'startButton')
  request.r(i449[12], i449[13], 0, i448, 'title')
  request.r(i449[14], i449[15], 0, i448, 'button')
  var i451 = i449[16]
  var i450 = []
  for(var i = 0; i < i451.length; i += 2) {
  request.r(i451[i + 0], i451[i + 1], 2, i450, '')
  }
  i448.showOnStart = i450
  return i448
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.Button' )
  var i455 = data
  i454.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i455[0], i454.m_OnClick)
  i454.m_Navigation = request.d('UnityEngine.UI.Navigation', i455[1], i454.m_Navigation)
  i454.m_Transition = i455[2]
  i454.m_Colors = request.d('UnityEngine.UI.ColorBlock', i455[3], i454.m_Colors)
  i454.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i455[4], i454.m_SpriteState)
  i454.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i455[5], i454.m_AnimationTriggers)
  i454.m_Interactable = !!i455[6]
  request.r(i455[7], i455[8], 0, i454, 'm_TargetGraphic')
  return i454
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i457 = data
  i456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i457[0], i456.m_PersistentCalls)
  return i456
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i459 = data
  var i461 = i459[0]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i461.length; i += 1) {
    i460.add(request.d('UnityEngine.Events.PersistentCall', i461[i + 0]));
  }
  i458.m_Calls = i460
  return i458
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'm_Target')
  i464.m_TargetAssemblyTypeName = i465[2]
  i464.m_MethodName = i465[3]
  i464.m_Mode = i465[4]
  i464.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i465[5], i464.m_Arguments)
  i464.m_CallState = i465[6]
  return i464
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i467 = data
  i466.m_Mode = i467[0]
  i466.m_WrapAround = !!i467[1]
  request.r(i467[2], i467[3], 0, i466, 'm_SelectOnUp')
  request.r(i467[4], i467[5], 0, i466, 'm_SelectOnDown')
  request.r(i467[6], i467[7], 0, i466, 'm_SelectOnLeft')
  request.r(i467[8], i467[9], 0, i466, 'm_SelectOnRight')
  return i466
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i469 = data
  i468.m_NormalColor = new pc.Color(i469[0], i469[1], i469[2], i469[3])
  i468.m_HighlightedColor = new pc.Color(i469[4], i469[5], i469[6], i469[7])
  i468.m_PressedColor = new pc.Color(i469[8], i469[9], i469[10], i469[11])
  i468.m_SelectedColor = new pc.Color(i469[12], i469[13], i469[14], i469[15])
  i468.m_DisabledColor = new pc.Color(i469[16], i469[17], i469[18], i469[19])
  i468.m_ColorMultiplier = i469[20]
  i468.m_FadeDuration = i469[21]
  return i468
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_HighlightedSprite')
  request.r(i471[2], i471[3], 0, i470, 'm_PressedSprite')
  request.r(i471[4], i471[5], 0, i470, 'm_SelectedSprite')
  request.r(i471[6], i471[7], 0, i470, 'm_DisabledSprite')
  return i470
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i473 = data
  i472.m_NormalTrigger = i473[0]
  i472.m_HighlightedTrigger = i473[1]
  i472.m_PressedTrigger = i473[2]
  i472.m_SelectedTrigger = i473[3]
  i472.m_DisabledTrigger = i473[4]
  return i472
}

Deserializers["AcidFailPanel"] = function (request, data, root) {
  var i474 = root || request.c( 'AcidFailPanel' )
  var i475 = data
  i474.designHeight = i475[0]
  i474.shadowAlpha = i475[1]
  i474.fadeTime = i475[2]
  i474.pulsePeriod = i475[3]
  i474.pulseScale = i475[4]
  request.r(i475[5], i475[6], 0, i474, 'shadow')
  request.r(i475[7], i475[8], 0, i474, 'finger')
  request.r(i475[9], i475[10], 0, i474, 'content')
  request.r(i475[11], i475[12], 0, i474, 'panelRect')
  return i474
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'm_FirstSelected')
  i476.m_sendNavigationEvents = !!i477[2]
  i476.m_DragThreshold = i477[3]
  return i476
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i479 = data
  i478.m_HorizontalAxis = i479[0]
  i478.m_VerticalAxis = i479[1]
  i478.m_SubmitButton = i479[2]
  i478.m_CancelButton = i479[3]
  i478.m_InputActionsPerSecond = i479[4]
  i478.m_RepeatDelay = i479[5]
  i478.m_ForceModuleActive = !!i479[6]
  i478.m_SendPointerHoverToParent = !!i479[7]
  return i478
}

Deserializers["AcidGame"] = function (request, data, root) {
  var i480 = root || request.c( 'AcidGame' )
  var i481 = data
  var i483 = i481[0]
  var i482 = []
  for(var i = 0; i < i483.length; i += 2) {
  request.r(i483[i + 0], i483[i + 1], 2, i482, '')
  }
  i480.manPrefabs = i482
  request.r(i481[1], i481[2], 0, i480, 'menRoot')
  request.r(i481[3], i481[4], 0, i480, 'stick')
  request.r(i481[5], i481[6], 0, i480, 'fx')
  request.r(i481[7], i481[8], 0, i480, 'plank')
  i480.acidTop = i481[9]
  i480.acidBottom = i481[10]
  i480.poolHalfWidth = i481[11]
  i480.poolCenterX = i481[12]
  i480.plankStartY = i481[13]
  i480.plankStep = i481[14]
  i480.plankMinY = i481[15]
  i480.plankSpeed = i481[16]
  i480.plankSpeedFinished = i481[17]
  i480.waveCount = i481[18]
  i480.wavePause = i481[19]
  i480.spawnY = i481[20]
  i480.spawnHalfWidth = i481[21]
  i480.maxAcidDeaths = i481[22]
  i480.failWhenPlankSunk = !!i481[23]
  request.r(i481[24], i481[25], 0, i480, 'hand')
  request.r(i481[26], i481[27], 0, i480, 'handRenderer')
  request.r(i481[28], i481[29], 0, i480, 'winPanel')
  request.r(i481[30], i481[31], 0, i480, 'failPanel')
  i480.resultDelay = i481[32]
  request.r(i481[33], i481[34], 0, i480, 'tankPrefab')
  i480.tankDropDelay = i481[35]
  i480.plankFinishY = i481[36]
  i480.tankEndDelay = i481[37]
  i480.tankTimeout = i481[38]
  i480.finaleManInterval = i481[39]
  i480.finaleManMax = i481[40]
  i480.plankHalfHeight = i481[41]
  i480.firstManSwordGap = i481[42]
  request.r(i481[43], i481[44], 0, i480, 'sfx')
  request.r(i481[45], i481[46], 0, i480, 'killCounter')
  return i480
}

Deserializers["AcidAudio"] = function (request, data, root) {
  var i486 = root || request.c( 'AcidAudio' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'sfx')
  request.r(i487[2], i487[3], 0, i486, 'acidLoop')
  request.r(i487[4], i487[5], 0, i486, 'hit')
  request.r(i487[6], i487[7], 0, i486, 'ghost')
  request.r(i487[8], i487[9], 0, i486, 'pop')
  request.r(i487[10], i487[11], 0, i486, 'click')
  i486.ghostDelay = i487[12]
  i486.acidFade = i487[13]
  var i489 = i487[14]
  var i488 = []
  for(var i = 0; i < i489.length; i += 2) {
  request.r(i489[i + 0], i489[i + 1], 2, i488, '')
  }
  i486.voices = i488
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'clip')
  request.r(i493[2], i493[3], 0, i492, 'outputAudioMixerGroup')
  i492.playOnAwake = !!i493[4]
  i492.loop = !!i493[5]
  i492.time = i493[6]
  i492.volume = i493[7]
  i492.pitch = i493[8]
  i492.enabled = !!i493[9]
  return i492
}

Deserializers["LunaController"] = function (request, data, root) {
  var i494 = root || request.c( 'LunaController' )
  var i495 = data
  i494.TimePlay = i495[0]
  i494.MaxAcidDeaths = i495[1]
  request.r(i495[2], i495[3], 0, i494, 'BGM')
  i494.UseCustomBG = !!i495[4]
  request.r(i495[5], i495[6], 0, i494, 'BGTexture')
  request.r(i495[7], i495[8], 0, i494, 'game')
  request.r(i495[9], i495[10], 0, i494, 'musicSource')
  request.r(i495[11], i495[12], 0, i494, 'sfx')
  request.r(i495[13], i495[14], 0, i494, 'customBG')
  i494.musicVolume = i495[15]
  var i497 = i495[16]
  var i496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i497.length; i += 2) {
  request.r(i497[i + 0], i497[i + 1], 1, i496, '')
  }
  i494.CTA = i496
  request.r(i495[17], i495[18], 0, i494, 'endUI')
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
  var i536 = root || new pc.UnityShaderPass()
  var i537 = data
  i536.id = i537[0]
  i536.subShaderIndex = i537[1]
  i536.name = i537[2]
  i536.passType = i537[3]
  i536.grabPassTextureName = i537[4]
  i536.usePass = !!i537[5]
  i536.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[6], i536.zTest)
  i536.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[7], i536.zWrite)
  i536.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[8], i536.culling)
  i536.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i537[9], i536.blending)
  i536.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i537[10], i536.alphaBlending)
  i536.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[11], i536.colorWriteMask)
  i536.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[12], i536.offsetUnits)
  i536.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[13], i536.offsetFactor)
  i536.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[14], i536.stencilRef)
  i536.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[15], i536.stencilReadMask)
  i536.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[16], i536.stencilWriteMask)
  i536.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i537[17], i536.stencilOp)
  i536.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i537[18], i536.stencilOpFront)
  i536.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i537[19], i536.stencilOpBack)
  var i539 = i537[20]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i539[i + 0]) );
  }
  i536.tags = i538
  var i541 = i537[21]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( i541[i + 0] );
  }
  i536.passDefinedKeywords = i540
  var i543 = i537[22]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i543[i + 0]) );
  }
  i536.passDefinedKeywordGroups = i542
  var i545 = i537[23]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i545[i + 0]) );
  }
  i536.variants = i544
  var i547 = i537[24]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i547[i + 0]) );
  }
  i536.excludedVariants = i546
  i536.hasDepthReader = !!i537[25]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i549 = data
  i548.val = i549[0]
  i548.name = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i551 = data
  i550.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[0], i550.src)
  i550.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[1], i550.dst)
  i550.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i551[2], i550.op)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i553 = data
  i552.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[0], i552.pass)
  i552.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[1], i552.fail)
  i552.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[2], i552.zFail)
  i552.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i553[3], i552.comp)
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i557 = data
  i556.name = i557[0]
  i556.value = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i561 = data
  var i563 = i561[0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( i563[i + 0] );
  }
  i560.keywords = i562
  i560.hasDiscard = !!i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i567 = data
  i566.passId = i567[0]
  i566.subShaderIndex = i567[1]
  var i569 = i567[2]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i566.keywords = i568
  i566.vertexProgram = i567[3]
  i566.fragmentProgram = i567[4]
  i566.exportedForWebGl2 = !!i567[5]
  i566.readDepth = !!i567[6]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'shader')
  i572.pass = i573[2]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i577 = data
  i576.name = i577[0]
  i576.type = i577[1]
  i576.value = new pc.Vec4( i577[2], i577[3], i577[4], i577[5] )
  i576.textureValue = i577[6]
  i576.shaderPropertyFlag = i577[7]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'texture')
  i578.aabb = i579[3]
  i578.vertices = i579[4]
  i578.triangles = i579[5]
  i578.textureRect = UnityEngine.Rect.MinMaxRect(i579[6], i579[7], i579[8], i579[9])
  i578.packedRect = UnityEngine.Rect.MinMaxRect(i579[10], i579[11], i579[12], i579[13])
  i578.border = new pc.Vec4( i579[14], i579[15], i579[16], i579[17] )
  i578.transparency = i579[18]
  i578.bounds = i579[19]
  i578.pixelsPerUnit = i579[20]
  i578.textureWidth = i579[21]
  i578.textureHeight = i579[22]
  i578.nativeSize = new pc.Vec2( i579[23], i579[24] )
  i578.pivot = new pc.Vec2( i579[25], i579[26] )
  i578.textureRectOffset = new pc.Vec2( i579[27], i579[28] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i581 = data
  i580.name = i581[0]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i583 = data
  var i585 = i583[0]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i585[i + 0]) );
  }
  i582.files = i584
  i582.componentToPrefabIds = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i589 = data
  i588.path = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'unityObject')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i591 = data
  var i593 = i591[0]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i593[i + 0]) );
  }
  i590.scriptsExecutionOrder = i592
  var i595 = i591[1]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i595[i + 0]) );
  }
  i590.sortingLayers = i594
  var i597 = i591[2]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i597[i + 0]) );
  }
  i590.cullingLayers = i596
  i590.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i591[3], i590.timeSettings)
  i590.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i591[4], i590.physicsSettings)
  i590.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i591[5], i590.physics2DSettings)
  i590.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i591[6], i590.qualitySettings)
  i590.enableRealtimeShadows = !!i591[7]
  i590.enableAutoInstancing = !!i591[8]
  i590.enableStaticBatching = !!i591[9]
  i590.enableDynamicBatching = !!i591[10]
  i590.usePreservativeDynamicBatching = !!i591[11]
  i590.lightmapEncodingQuality = i591[12]
  i590.desiredColorSpace = i591[13]
  var i599 = i591[14]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i590.allTags = i598
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i603 = data
  i602.name = i603[0]
  i602.value = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i607 = data
  i606.id = i607[0]
  i606.name = i607[1]
  i606.value = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i611 = data
  i610.id = i611[0]
  i610.name = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i613 = data
  i612.fixedDeltaTime = i613[0]
  i612.maximumDeltaTime = i613[1]
  i612.timeScale = i613[2]
  i612.maximumParticleTimestep = i613[3]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i615 = data
  i614.gravity = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.defaultSolverIterations = i615[3]
  i614.bounceThreshold = i615[4]
  i614.autoSyncTransforms = !!i615[5]
  i614.autoSimulation = !!i615[6]
  var i617 = i615[7]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i617[i + 0]) );
  }
  i614.collisionMatrix = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i621 = data
  i620.enabled = !!i621[0]
  i620.layerId = i621[1]
  i620.otherLayerId = i621[2]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'material')
  i622.gravity = new pc.Vec2( i623[2], i623[3] )
  i622.positionIterations = i623[4]
  i622.velocityIterations = i623[5]
  i622.velocityThreshold = i623[6]
  i622.maxLinearCorrection = i623[7]
  i622.maxAngularCorrection = i623[8]
  i622.maxTranslationSpeed = i623[9]
  i622.maxRotationSpeed = i623[10]
  i622.baumgarteScale = i623[11]
  i622.baumgarteTOIScale = i623[12]
  i622.timeToSleep = i623[13]
  i622.linearSleepTolerance = i623[14]
  i622.angularSleepTolerance = i623[15]
  i622.defaultContactOffset = i623[16]
  i622.autoSimulation = !!i623[17]
  i622.queriesHitTriggers = !!i623[18]
  i622.queriesStartInColliders = !!i623[19]
  i622.callbacksOnDisable = !!i623[20]
  i622.reuseCollisionCallbacks = !!i623[21]
  i622.autoSyncTransforms = !!i623[22]
  var i625 = i623[23]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i625[i + 0]) );
  }
  i622.collisionMatrix = i624
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i629 = data
  i628.enabled = !!i629[0]
  i628.layerId = i629[1]
  i628.otherLayerId = i629[2]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i631 = data
  var i633 = i631[0]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i633[i + 0]) );
  }
  i630.qualityLevels = i632
  var i635 = i631[1]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i630.names = i634
  i630.shadows = i631[2]
  i630.anisotropicFiltering = i631[3]
  i630.antiAliasing = i631[4]
  i630.lodBias = i631[5]
  i630.shadowCascades = i631[6]
  i630.shadowDistance = i631[7]
  i630.shadowmaskMode = i631[8]
  i630.shadowProjection = i631[9]
  i630.shadowResolution = i631[10]
  i630.softParticles = !!i631[11]
  i630.softVegetation = !!i631[12]
  i630.activeColorSpace = i631[13]
  i630.desiredColorSpace = i631[14]
  i630.masterTextureLimit = i631[15]
  i630.maxQueuedFrames = i631[16]
  i630.particleRaycastBudget = i631[17]
  i630.pixelLightCount = i631[18]
  i630.realtimeReflectionProbes = !!i631[19]
  i630.shadowCascade2Split = i631[20]
  i630.shadowCascade4Split = new pc.Vec3( i631[21], i631[22], i631[23] )
  i630.streamingMipmapsActive = !!i631[24]
  i630.vSyncCount = i631[25]
  i630.asyncUploadBufferSize = i631[26]
  i630.asyncUploadTimeSlice = i631[27]
  i630.billboardsFaceCameraPosition = !!i631[28]
  i630.shadowNearPlaneOffset = i631[29]
  i630.streamingMipmapsMemoryBudget = i631[30]
  i630.maximumLODLevel = i631[31]
  i630.streamingMipmapsAddAllCameras = !!i631[32]
  i630.streamingMipmapsMaxLevelReduction = i631[33]
  i630.streamingMipmapsRenderersPerFrame = i631[34]
  i630.resolutionScalingFixedDPIFactor = i631[35]
  i630.streamingMipmapsMaxFileIORequests = i631[36]
  i630.currentQualityLevel = i631[37]
  return i630
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_ObjectArgument')
  i638.m_ObjectArgumentAssemblyTypeName = i639[2]
  i638.m_IntArgument = i639[3]
  i638.m_FloatArgument = i639[4]
  i638.m_StringArgument = i639[5]
  i638.m_BoolArgument = !!i639[6]
  return i638
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[16],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[10],"58":[10],"59":[10],"60":[10],"61":[10],"62":[10],"12":[10],"63":[10],"64":[10],"65":[10],"66":[10],"67":[10],"68":[10],"69":[16],"70":[71],"72":[73],"74":[73],"15":[14],"22":[75],"76":[3],"77":[16],"78":[79],"80":[14],"81":[19,14],"82":[71],"83":[19,14],"84":[14],"85":[14],"86":[71,14],"87":[14,19],"88":[89],"90":[89],"91":[89],"92":[14],"93":[14],"27":[15],"29":[19,14],"94":[14],"26":[15],"95":[14],"96":[14],"97":[14],"98":[14],"99":[14],"100":[14],"101":[14],"102":[14],"103":[14],"18":[19,14],"104":[14],"105":[14],"106":[14],"107":[14],"108":[19,14],"109":[14],"110":[35],"111":[35],"36":[35],"112":[35],"113":[16],"114":[16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","AcidGhost","AcidHit","UnityEngine.Sprite","AcidMan","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","AcidTank","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","AcidCustomBG","UnityEngine.UI.RawImage","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.AudioListener","AcidWave","AcidStick","AcidFx","AcidGame","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","AcidKillCounter","UnityEngine.UI.Image","AcidIntro","AcidAudio","UnityEngine.UI.Button","UnityEngine.GameObject","AcidFailPanel","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Renderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_V09";

Deserializers.lunaInitializationTime = "11/11/2026 10:26:47";

Deserializers.lunaDaysRunning = "1.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SSP_V09_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "636fd864df946da448f963fd5664a5c4";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1789";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3456";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_V09";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "f4380a80-05f7-46e3-b889-e95838e97ea3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

