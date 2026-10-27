var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointSpring' )
  var i315 = data
  i314.spring = i315[0]
  i314.damper = i315[1]
  i314.targetPosition = i315[2]
  return i314
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointMotor' )
  var i317 = data
  i316.m_TargetVelocity = i317[0]
  i316.m_Force = i317[1]
  i316.m_FreeSpin = i317[2]
  return i316
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.JointLimits' )
  var i319 = data
  i318.m_Min = i319[0]
  i318.m_Max = i319[1]
  i318.m_Bounciness = i319[2]
  i318.m_BounceMinVelocity = i319[3]
  i318.m_ContactDistance = i319[4]
  i318.minBounce = i319[5]
  i318.maxBounce = i319[6]
  return i318
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.JointDrive' )
  var i321 = data
  i320.m_PositionSpring = i321[0]
  i320.m_PositionDamper = i321[1]
  i320.m_MaximumForce = i321[2]
  i320.m_UseAcceleration = i321[3]
  return i320
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i323 = data
  i322.m_Spring = i323[0]
  i322.m_Damper = i323[1]
  return i322
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i325 = data
  i324.m_Limit = i325[0]
  i324.m_Bounciness = i325[1]
  i324.m_ContactDistance = i325[2]
  return i324
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i327 = data
  i326.m_ExtremumSlip = i327[0]
  i326.m_ExtremumValue = i327[1]
  i326.m_AsymptoteSlip = i327[2]
  i326.m_AsymptoteValue = i327[3]
  i326.m_Stiffness = i327[4]
  return i326
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i329 = data
  i328.m_LowerAngle = i329[0]
  i328.m_UpperAngle = i329[1]
  return i328
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i331 = data
  i330.m_MotorSpeed = i331[0]
  i330.m_MaximumMotorTorque = i331[1]
  return i330
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i333 = data
  i332.m_DampingRatio = i333[0]
  i332.m_Frequency = i333[1]
  i332.m_Angle = i333[2]
  return i332
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i335 = data
  i334.m_LowerTranslation = i335[0]
  i334.m_UpperTranslation = i335[1]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i337 = data
  i336.name = i337[0]
  i336.width = i337[1]
  i336.height = i337[2]
  i336.mipmapCount = i337[3]
  i336.anisoLevel = i337[4]
  i336.filterMode = i337[5]
  i336.hdr = !!i337[6]
  i336.format = i337[7]
  i336.wrapMode = i337[8]
  i336.alphaIsTransparency = !!i337[9]
  i336.alphaSource = i337[10]
  i336.graphicsFormat = i337[11]
  i336.sRGBTexture = !!i337[12]
  i336.desiredColorSpace = i337[13]
  i336.wrapU = i337[14]
  i336.wrapV = i337[15]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i339 = data
  i338.position = new pc.Vec3( i339[0], i339[1], i339[2] )
  i338.scale = new pc.Vec3( i339[3], i339[4], i339[5] )
  i338.rotation = new pc.Quat(i339[6], i339[7], i339[8], i339[9])
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i341 = data
  i340.sortingLayerIndex = i341[0]
  i340.sortingOrder = i341[1]
  i340.sortingLayerName = i341[2]
  i340.enabled = !!i341[3]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i343 = data
  i342.bodyType = i343[0]
  request.r(i343[1], i343[2], 0, i342, 'material')
  i342.simulated = !!i343[3]
  i342.useAutoMass = !!i343[4]
  i342.mass = i343[5]
  i342.drag = i343[6]
  i342.angularDrag = i343[7]
  i342.gravityScale = i343[8]
  i342.collisionDetectionMode = i343[9]
  i342.sleepMode = i343[10]
  i342.constraints = i343[11]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i345 = data
  i344.color = new pc.Color(i345[0], i345[1], i345[2], i345[3])
  request.r(i345[4], i345[5], 0, i344, 'sprite')
  i344.flipX = !!i345[6]
  i344.flipY = !!i345[7]
  i344.drawMode = i345[8]
  i344.size = new pc.Vec2( i345[9], i345[10] )
  i344.tileMode = i345[11]
  i344.adaptiveModeThreshold = i345[12]
  i344.maskInteraction = i345[13]
  i344.spriteSortPoint = i345[14]
  i344.enabled = !!i345[15]
  request.r(i345[16], i345[17], 0, i344, 'sharedMaterial')
  var i347 = i345[18]
  var i346 = []
  for(var i = 0; i < i347.length; i += 2) {
  request.r(i347[i + 0], i347[i + 1], 2, i346, '')
  }
  i344.sharedMaterials = i346
  i344.receiveShadows = !!i345[19]
  i344.shadowCastingMode = i345[20]
  i344.sortingLayerID = i345[21]
  i344.sortingOrder = i345[22]
  i344.lightmapIndex = i345[23]
  i344.lightmapSceneIndex = i345[24]
  i344.lightmapScaleOffset = new pc.Vec4( i345[25], i345[26], i345[27], i345[28] )
  i344.lightProbeUsage = i345[29]
  i344.reflectionProbeUsage = i345[30]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i351 = data
  i350.usedByComposite = !!i351[0]
  i350.autoTiling = !!i351[1]
  i350.size = new pc.Vec2( i351[2], i351[3] )
  i350.edgeRadius = i351[4]
  i350.enabled = !!i351[5]
  i350.isTrigger = !!i351[6]
  i350.usedByEffector = !!i351[7]
  i350.density = i351[8]
  i350.offset = new pc.Vec2( i351[9], i351[10] )
  request.r(i351[11], i351[12], 0, i350, 'material')
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i353 = data
  i352.useLimits = !!i353[0]
  i352.limits = request.d('UnityEngine.JointAngleLimits2D', i353[1], i352.limits)
  i352.useMotor = !!i353[2]
  i352.motor = request.d('UnityEngine.JointMotor2D', i353[3], i352.motor)
  i352.anchor = new pc.Vec2( i353[4], i353[5] )
  i352.connectedAnchor = new pc.Vec2( i353[6], i353[7] )
  i352.autoConfigureConnectedAnchor = !!i353[8]
  request.r(i353[9], i353[10], 0, i352, 'connectedBody')
  i352.breakForce = i353[11]
  i352.breakTorque = i353[12]
  i352.enableCollision = !!i353[13]
  i352.enabled = !!i353[14]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i355 = data
  i354.name = i355[0]
  i354.tagId = i355[1]
  i354.enabled = !!i355[2]
  i354.isStatic = !!i355[3]
  i354.layer = i355[4]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i356 = root || new pc.UnityMaterial()
  var i357 = data
  i356.name = i357[0]
  request.r(i357[1], i357[2], 0, i356, 'shader')
  i356.renderQueue = i357[3]
  i356.enableInstancing = !!i357[4]
  var i359 = i357[5]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i359[i + 0]) );
  }
  i356.floatParameters = i358
  var i361 = i357[6]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i361[i + 0]) );
  }
  i356.colorParameters = i360
  var i363 = i357[7]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i363[i + 0]) );
  }
  i356.vectorParameters = i362
  var i365 = i357[8]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i365[i + 0]) );
  }
  i356.textureParameters = i364
  var i367 = i357[9]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i367[i + 0]) );
  }
  i356.materialFlags = i366
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i371 = data
  i370.name = i371[0]
  i370.value = i371[1]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i375 = data
  i374.name = i375[0]
  i374.value = new pc.Color(i375[1], i375[2], i375[3], i375[4])
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = new pc.Vec4( i379[1], i379[2], i379[3], i379[4] )
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i383 = data
  i382.name = i383[0]
  request.r(i383[1], i383[2], 0, i382, 'value')
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i387 = data
  i386.name = i387[0]
  i386.enabled = !!i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i389 = data
  i388.name = i389[0]
  i388.index = i389[1]
  i388.startup = !!i389[2]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i391 = data
  i390.aspect = i391[0]
  i390.orthographic = !!i391[1]
  i390.orthographicSize = i391[2]
  i390.backgroundColor = new pc.Color(i391[3], i391[4], i391[5], i391[6])
  i390.nearClipPlane = i391[7]
  i390.farClipPlane = i391[8]
  i390.fieldOfView = i391[9]
  i390.depth = i391[10]
  i390.clearFlags = i391[11]
  i390.cullingMask = i391[12]
  i390.rect = i391[13]
  request.r(i391[14], i391[15], 0, i390, 'targetTexture')
  i390.usePhysicalProperties = !!i391[16]
  i390.focalLength = i391[17]
  i390.sensorSize = new pc.Vec2( i391[18], i391[19] )
  i390.lensShift = new pc.Vec2( i391[20], i391[21] )
  i390.gateFit = i391[22]
  i390.commandBufferCount = i391[23]
  i390.cameraType = i391[24]
  i390.enabled = !!i391[25]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i393 = data
  i392.pivot = new pc.Vec2( i393[0], i393[1] )
  i392.anchorMin = new pc.Vec2( i393[2], i393[3] )
  i392.anchorMax = new pc.Vec2( i393[4], i393[5] )
  i392.sizeDelta = new pc.Vec2( i393[6], i393[7] )
  i392.anchoredPosition3D = new pc.Vec3( i393[8], i393[9], i393[10] )
  i392.rotation = new pc.Quat(i393[11], i393[12], i393[13], i393[14])
  i392.scale = new pc.Vec3( i393[15], i393[16], i393[17] )
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i395 = data
  i394.planeDistance = i395[0]
  i394.referencePixelsPerUnit = i395[1]
  i394.isFallbackOverlay = !!i395[2]
  i394.renderMode = i395[3]
  i394.renderOrder = i395[4]
  i394.sortingLayerName = i395[5]
  i394.sortingOrder = i395[6]
  i394.scaleFactor = i395[7]
  request.r(i395[8], i395[9], 0, i394, 'worldCamera')
  i394.overrideSorting = !!i395[10]
  i394.pixelPerfect = !!i395[11]
  i394.targetDisplay = i395[12]
  i394.overridePixelPerfect = !!i395[13]
  i394.enabled = !!i395[14]
  return i394
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i397 = data
  i396.m_UiScaleMode = i397[0]
  i396.m_ReferencePixelsPerUnit = i397[1]
  i396.m_ScaleFactor = i397[2]
  i396.m_ReferenceResolution = new pc.Vec2( i397[3], i397[4] )
  i396.m_ScreenMatchMode = i397[5]
  i396.m_MatchWidthOrHeight = i397[6]
  i396.m_PhysicalUnit = i397[7]
  i396.m_FallbackScreenDPI = i397[8]
  i396.m_DefaultSpriteDPI = i397[9]
  i396.m_DynamicPixelsPerUnit = i397[10]
  i396.m_PresetInfoIsWorld = !!i397[11]
  return i396
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i399 = data
  i398.m_IgnoreReversedGraphics = !!i399[0]
  i398.m_BlockingObjects = i399[1]
  i398.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i399[2] )
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i401 = data
  i400.cullTransparentMesh = !!i401[0]
  return i400
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'm_Texture')
  i402.m_UVRect = UnityEngine.Rect.MinMaxRect(i403[2], i403[3], i403[4], i403[5])
  request.r(i403[6], i403[7], 0, i402, 'm_Material')
  i402.m_Maskable = !!i403[8]
  i402.m_Color = new pc.Color(i403[9], i403[10], i403[11], i403[12])
  i402.m_RaycastTarget = !!i403[13]
  i402.m_RaycastPadding = new pc.Vec4( i403[14], i403[15], i403[16], i403[17] )
  return i402
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i405 = data
  i404.m_AspectMode = i405[0]
  i404.m_AspectRatio = i405[1]
  return i404
}

Deserializers["MelonSandboxGameplay"] = function (request, data, root) {
  var i406 = root || request.c( 'MelonSandboxGameplay' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'lunaController')
  request.r(i407[2], i407[3], 0, i406, 'spawnTutorial')
  var i409 = i407[4]
  var i408 = []
  for(var i = 0; i < i409.length; i += 2) {
  request.r(i409[i + 0], i409[i + 1], 2, i408, '')
  }
  i406.characterPrefabs = i408
  var i411 = i407[5]
  var i410 = []
  for(var i = 0; i < i411.length; i += 2) {
  request.r(i411[i + 0], i411[i + 1], 2, i410, '')
  }
  i406.enemyPrefabs = i410
  i406.enemyCount = i407[6]
  i406.enemySpawnInterval = i407[7]
  i406.enemyMoveSpeed = i407[8]
  i406.enemyDropHeight = i407[9]
  i406.enemyWalkDistance = i407[10]
  i406.enemySpawnXMin = i407[11]
  i406.enemySpawnXMax = i407[12]
  var i413 = i407[13]
  var i412 = []
  for(var i = 0; i < i413.length; i += 2) {
  request.r(i413[i + 0], i413[i + 1], 2, i412, '')
  }
  i406.worldToolSprites = i412
  var i415 = i407[14]
  var i414 = []
  for(var i = 0; i < i415.length; i += 2) {
  request.r(i415[i + 0], i415[i + 1], 2, i414, '')
  }
  i406.variantIcons = i414
  var i417 = i407[15]
  var i416 = []
  for(var i = 0; i < i417.length; i += 2) {
  request.r(i417[i + 0], i417[i + 1], 2, i416, '')
  }
  i406.tabs = i416
  var i419 = i407[16]
  var i418 = []
  for(var i = 0; i < i419.length; i += 2) {
  request.r(i419[i + 0], i419[i + 1], 2, i418, '')
  }
  i406.variants = i418
  i406.cameraTransitionDuration = i407[17]
  request.r(i407[18], i407[19], 0, i406, 'botUI')
  request.r(i407[20], i407[21], 0, i406, 'clickSound')
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'clip')
  request.r(i427[2], i427[3], 0, i426, 'outputAudioMixerGroup')
  i426.playOnAwake = !!i427[4]
  i426.loop = !!i427[5]
  i426.time = i427[6]
  i426.volume = i427[7]
  i426.pitch = i427[8]
  i426.enabled = !!i427[9]
  return i426
}

Deserializers["AudioController"] = function (request, data, root) {
  var i428 = root || request.c( 'AudioController' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'lunaController')
  request.r(i429[2], i429[3], 0, i428, 'musicSource')
  request.r(i429[4], i429[5], 0, i428, 'pool')
  return i428
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.Image' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_Sprite')
  i430.m_Type = i431[2]
  i430.m_PreserveAspect = !!i431[3]
  i430.m_FillCenter = !!i431[4]
  i430.m_FillMethod = i431[5]
  i430.m_FillAmount = i431[6]
  i430.m_FillClockwise = !!i431[7]
  i430.m_FillOrigin = i431[8]
  i430.m_UseSpriteMesh = !!i431[9]
  i430.m_PixelsPerUnitMultiplier = i431[10]
  request.r(i431[11], i431[12], 0, i430, 'm_Material')
  i430.m_Maskable = !!i431[13]
  i430.m_Color = new pc.Color(i431[14], i431[15], i431[16], i431[17])
  i430.m_RaycastTarget = !!i431[18]
  i430.m_RaycastPadding = new pc.Vec4( i431[19], i431[20], i431[21], i431[22] )
  return i430
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Button' )
  var i433 = data
  i432.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i433[0], i432.m_OnClick)
  i432.m_Navigation = request.d('UnityEngine.UI.Navigation', i433[1], i432.m_Navigation)
  i432.m_Transition = i433[2]
  i432.m_Colors = request.d('UnityEngine.UI.ColorBlock', i433[3], i432.m_Colors)
  i432.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i433[4], i432.m_SpriteState)
  i432.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i433[5], i432.m_AnimationTriggers)
  i432.m_Interactable = !!i433[6]
  request.r(i433[7], i433[8], 0, i432, 'm_TargetGraphic')
  return i432
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i435 = data
  i434.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i435[0], i434.m_PersistentCalls)
  return i434
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i437 = data
  var i439 = i437[0]
  var i438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i439.length; i += 1) {
    i438.add(request.d('UnityEngine.Events.PersistentCall', i439[i + 0]));
  }
  i436.m_Calls = i438
  return i436
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'm_Target')
  i442.m_TargetAssemblyTypeName = i443[2]
  i442.m_MethodName = i443[3]
  i442.m_Mode = i443[4]
  i442.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i443[5], i442.m_Arguments)
  i442.m_CallState = i443[6]
  return i442
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i445 = data
  i444.m_Mode = i445[0]
  i444.m_WrapAround = !!i445[1]
  request.r(i445[2], i445[3], 0, i444, 'm_SelectOnUp')
  request.r(i445[4], i445[5], 0, i444, 'm_SelectOnDown')
  request.r(i445[6], i445[7], 0, i444, 'm_SelectOnLeft')
  request.r(i445[8], i445[9], 0, i444, 'm_SelectOnRight')
  return i444
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i447 = data
  i446.m_NormalColor = new pc.Color(i447[0], i447[1], i447[2], i447[3])
  i446.m_HighlightedColor = new pc.Color(i447[4], i447[5], i447[6], i447[7])
  i446.m_PressedColor = new pc.Color(i447[8], i447[9], i447[10], i447[11])
  i446.m_SelectedColor = new pc.Color(i447[12], i447[13], i447[14], i447[15])
  i446.m_DisabledColor = new pc.Color(i447[16], i447[17], i447[18], i447[19])
  i446.m_ColorMultiplier = i447[20]
  i446.m_FadeDuration = i447[21]
  return i446
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'm_HighlightedSprite')
  request.r(i449[2], i449[3], 0, i448, 'm_PressedSprite')
  request.r(i449[4], i449[5], 0, i448, 'm_SelectedSprite')
  request.r(i449[6], i449[7], 0, i448, 'm_DisabledSprite')
  return i448
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i451 = data
  i450.m_NormalTrigger = i451[0]
  i450.m_HighlightedTrigger = i451[1]
  i450.m_PressedTrigger = i451[2]
  i450.m_SelectedTrigger = i451[3]
  i450.m_DisabledTrigger = i451[4]
  return i450
}

Deserializers["SandboxVariantButton"] = function (request, data, root) {
  var i452 = root || request.c( 'SandboxVariantButton' )
  var i453 = data
  return i452
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.Text' )
  var i455 = data
  i454.m_FontData = request.d('UnityEngine.UI.FontData', i455[0], i454.m_FontData)
  i454.m_Text = i455[1]
  request.r(i455[2], i455[3], 0, i454, 'm_Material')
  i454.m_Maskable = !!i455[4]
  i454.m_Color = new pc.Color(i455[5], i455[6], i455[7], i455[8])
  i454.m_RaycastTarget = !!i455[9]
  i454.m_RaycastPadding = new pc.Vec4( i455[10], i455[11], i455[12], i455[13] )
  return i454
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.FontData' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'm_Font')
  i456.m_FontSize = i457[2]
  i456.m_FontStyle = i457[3]
  i456.m_BestFit = !!i457[4]
  i456.m_MinSize = i457[5]
  i456.m_MaxSize = i457[6]
  i456.m_Alignment = i457[7]
  i456.m_AlignByGeometry = !!i457[8]
  i456.m_RichText = !!i457[9]
  i456.m_HorizontalOverflow = i457[10]
  i456.m_VerticalOverflow = i457[11]
  i456.m_LineSpacing = i457[12]
  return i456
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i459 = data
  i458.m_IgnoreLayout = !!i459[0]
  i458.m_MinWidth = i459[1]
  i458.m_MinHeight = i459[2]
  i458.m_PreferredWidth = i459[3]
  i458.m_PreferredHeight = i459[4]
  i458.m_FlexibleWidth = i459[5]
  i458.m_FlexibleHeight = i459[6]
  i458.m_LayoutPriority = i459[7]
  return i458
}

Deserializers["SpawnTutorial"] = function (request, data, root) {
  var i460 = root || request.c( 'SpawnTutorial' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'content')
  request.r(i461[2], i461[3], 0, i460, 'pointer')
  request.r(i461[4], i461[5], 0, i460, 'instruction')
  var i463 = i461[6]
  var i462 = []
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 2, i462, '')
  }
  i460.targets = i462
  var i465 = i461[7]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i460.characterNames = i464
  return i460
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.Outline' )
  var i469 = data
  i468.m_EffectColor = new pc.Color(i469[0], i469[1], i469[2], i469[3])
  i468.m_EffectDistance = new pc.Vec2( i469[4], i469[5] )
  i468.m_UseGraphicAlpha = !!i469[6]
  return i468
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_FirstSelected')
  i470.m_sendNavigationEvents = !!i471[2]
  i470.m_DragThreshold = i471[3]
  return i470
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i473 = data
  i472.m_HorizontalAxis = i473[0]
  i472.m_VerticalAxis = i473[1]
  i472.m_SubmitButton = i473[2]
  i472.m_CancelButton = i473[3]
  i472.m_InputActionsPerSecond = i473[4]
  i472.m_RepeatDelay = i473[5]
  i472.m_ForceModuleActive = !!i473[6]
  i472.m_SendPointerHoverToParent = !!i473[7]
  return i472
}

Deserializers["LunaController"] = function (request, data, root) {
  var i474 = root || request.c( 'LunaController' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'BGTexture')
  request.r(i475[2], i475[3], 0, i474, 'BG')
  request.r(i475[4], i475[5], 0, i474, 'bgm')
  i474.maxCharacters = i475[6]
  i474.limitTimePlay = !!i475[7]
  i474.timePlay = i475[8]
  request.r(i475[9], i475[10], 0, i474, 'endCard')
  request.r(i475[11], i475[12], 0, i474, 'fightButton')
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i477 = data
  i476.ambientIntensity = i477[0]
  i476.reflectionIntensity = i477[1]
  i476.ambientMode = i477[2]
  i476.ambientLight = new pc.Color(i477[3], i477[4], i477[5], i477[6])
  i476.ambientSkyColor = new pc.Color(i477[7], i477[8], i477[9], i477[10])
  i476.ambientGroundColor = new pc.Color(i477[11], i477[12], i477[13], i477[14])
  i476.ambientEquatorColor = new pc.Color(i477[15], i477[16], i477[17], i477[18])
  i476.fogColor = new pc.Color(i477[19], i477[20], i477[21], i477[22])
  i476.fogEndDistance = i477[23]
  i476.fogStartDistance = i477[24]
  i476.fogDensity = i477[25]
  i476.fog = !!i477[26]
  request.r(i477[27], i477[28], 0, i476, 'skybox')
  i476.fogMode = i477[29]
  var i479 = i477[30]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i479[i + 0]) );
  }
  i476.lightmaps = i478
  i476.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i477[31], i476.lightProbes)
  i476.lightmapsMode = i477[32]
  i476.mixedBakeMode = i477[33]
  i476.environmentLightingMode = i477[34]
  i476.ambientProbe = new pc.SphericalHarmonicsL2(i477[35])
  request.r(i477[36], i477[37], 0, i476, 'customReflection')
  request.r(i477[38], i477[39], 0, i476, 'defaultReflection')
  i476.defaultReflectionMode = i477[40]
  i476.defaultReflectionResolution = i477[41]
  i476.sunLightObjectId = i477[42]
  i476.pixelLightCount = i477[43]
  i476.defaultReflectionHDR = !!i477[44]
  i476.hasLightDataAsset = !!i477[45]
  i476.hasManualGenerate = !!i477[46]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'lightmapColor')
  request.r(i483[2], i483[3], 0, i482, 'lightmapDirection')
  request.r(i483[4], i483[5], 0, i482, 'shadowMask')
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i484 = root || new UnityEngine.LightProbes()
  var i485 = data
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i493 = data
  var i495 = i493[0]
  var i494 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i495.length; i += 1) {
    i494.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i495[i + 0]));
  }
  i492.ShaderCompilationErrors = i494
  i492.name = i493[1]
  i492.guid = i493[2]
  var i497 = i493[3]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( i497[i + 0] );
  }
  i492.shaderDefinedKeywords = i496
  var i499 = i493[4]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i499[i + 0]) );
  }
  i492.passes = i498
  var i501 = i493[5]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i501[i + 0]) );
  }
  i492.usePasses = i500
  var i503 = i493[6]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i503[i + 0]) );
  }
  i492.defaultParameterValues = i502
  request.r(i493[7], i493[8], 0, i492, 'unityFallbackShader')
  i492.readDepth = !!i493[9]
  i492.hasDepthOnlyPass = !!i493[10]
  i492.isCreatedByShaderGraph = !!i493[11]
  i492.disableBatching = !!i493[12]
  i492.compiled = !!i493[13]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i507 = data
  i506.shaderName = i507[0]
  i506.errorMessage = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i510 = root || new pc.UnityShaderPass()
  var i511 = data
  i510.id = i511[0]
  i510.subShaderIndex = i511[1]
  i510.name = i511[2]
  i510.passType = i511[3]
  i510.grabPassTextureName = i511[4]
  i510.usePass = !!i511[5]
  i510.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[6], i510.zTest)
  i510.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[7], i510.zWrite)
  i510.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[8], i510.culling)
  i510.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i511[9], i510.blending)
  i510.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i511[10], i510.alphaBlending)
  i510.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[11], i510.colorWriteMask)
  i510.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[12], i510.offsetUnits)
  i510.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[13], i510.offsetFactor)
  i510.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[14], i510.stencilRef)
  i510.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[15], i510.stencilReadMask)
  i510.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[16], i510.stencilWriteMask)
  i510.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i511[17], i510.stencilOp)
  i510.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i511[18], i510.stencilOpFront)
  i510.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i511[19], i510.stencilOpBack)
  var i513 = i511[20]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i513[i + 0]) );
  }
  i510.tags = i512
  var i515 = i511[21]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( i515[i + 0] );
  }
  i510.passDefinedKeywords = i514
  var i517 = i511[22]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i517[i + 0]) );
  }
  i510.passDefinedKeywordGroups = i516
  var i519 = i511[23]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i519[i + 0]) );
  }
  i510.variants = i518
  var i521 = i511[24]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i521[i + 0]) );
  }
  i510.excludedVariants = i520
  i510.hasDepthReader = !!i511[25]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i523 = data
  i522.val = i523[0]
  i522.name = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i525 = data
  i524.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i525[0], i524.src)
  i524.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i525[1], i524.dst)
  i524.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i525[2], i524.op)
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i527 = data
  i526.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i527[0], i526.pass)
  i526.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i527[1], i526.fail)
  i526.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i527[2], i526.zFail)
  i526.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i527[3], i526.comp)
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i531 = data
  i530.name = i531[0]
  i530.value = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i535 = data
  var i537 = i535[0]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i534.keywords = i536
  i534.hasDiscard = !!i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i541 = data
  i540.passId = i541[0]
  i540.subShaderIndex = i541[1]
  var i543 = i541[2]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( i543[i + 0] );
  }
  i540.keywords = i542
  i540.vertexProgram = i541[3]
  i540.fragmentProgram = i541[4]
  i540.exportedForWebGl2 = !!i541[5]
  i540.readDepth = !!i541[6]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'shader')
  i546.pass = i547[2]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i551 = data
  i550.name = i551[0]
  i550.type = i551[1]
  i550.value = new pc.Vec4( i551[2], i551[3], i551[4], i551[5] )
  i550.textureValue = i551[6]
  i550.shaderPropertyFlag = i551[7]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'texture')
  i552.aabb = i553[3]
  i552.vertices = i553[4]
  i552.triangles = i553[5]
  i552.textureRect = UnityEngine.Rect.MinMaxRect(i553[6], i553[7], i553[8], i553[9])
  i552.packedRect = UnityEngine.Rect.MinMaxRect(i553[10], i553[11], i553[12], i553[13])
  i552.border = new pc.Vec4( i553[14], i553[15], i553[16], i553[17] )
  i552.transparency = i553[18]
  i552.bounds = i553[19]
  i552.pixelsPerUnit = i553[20]
  i552.textureWidth = i553[21]
  i552.textureHeight = i553[22]
  i552.nativeSize = new pc.Vec2( i553[23], i553[24] )
  i552.pivot = new pc.Vec2( i553[25], i553[26] )
  i552.textureRectOffset = new pc.Vec2( i553[27], i553[28] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i555 = data
  i554.name = i555[0]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i557 = data
  i556.name = i557[0]
  i556.ascent = i557[1]
  i556.originalLineHeight = i557[2]
  i556.fontSize = i557[3]
  var i559 = i557[4]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i559[i + 0]) );
  }
  i556.characterInfo = i558
  request.r(i557[5], i557[6], 0, i556, 'texture')
  i556.originalFontSize = i557[7]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i563 = data
  i562.index = i563[0]
  i562.advance = i563[1]
  i562.bearing = i563[2]
  i562.glyphWidth = i563[3]
  i562.glyphHeight = i563[4]
  i562.minX = i563[5]
  i562.maxX = i563[6]
  i562.minY = i563[7]
  i562.maxY = i563[8]
  i562.uvBottomLeftX = i563[9]
  i562.uvBottomLeftY = i563[10]
  i562.uvBottomRightX = i563[11]
  i562.uvBottomRightY = i563[12]
  i562.uvTopLeftX = i563[13]
  i562.uvTopLeftY = i563[14]
  i562.uvTopRightX = i563[15]
  i562.uvTopRightY = i563[16]
  return i562
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i564 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i565 = data
  i564.useSafeMode = !!i565[0]
  i564.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i565[1], i564.safeModeOptions)
  i564.timeScale = i565[2]
  i564.unscaledTimeScale = i565[3]
  i564.useSmoothDeltaTime = !!i565[4]
  i564.maxSmoothUnscaledTime = i565[5]
  i564.rewindCallbackMode = i565[6]
  i564.showUnityEditorReport = !!i565[7]
  i564.logBehaviour = i565[8]
  i564.drawGizmos = !!i565[9]
  i564.defaultRecyclable = !!i565[10]
  i564.defaultAutoPlay = i565[11]
  i564.defaultUpdateType = i565[12]
  i564.defaultTimeScaleIndependent = !!i565[13]
  i564.defaultEaseType = i565[14]
  i564.defaultEaseOvershootOrAmplitude = i565[15]
  i564.defaultEasePeriod = i565[16]
  i564.defaultAutoKill = !!i565[17]
  i564.defaultLoopType = i565[18]
  i564.debugMode = !!i565[19]
  i564.debugStoreTargetId = !!i565[20]
  i564.showPreviewPanel = !!i565[21]
  i564.storeSettingsLocation = i565[22]
  i564.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i565[23], i564.modules)
  i564.createASMDEF = !!i565[24]
  i564.showPlayingTweens = !!i565[25]
  i564.showPausedTweens = !!i565[26]
  return i564
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i566 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i567 = data
  i566.logBehaviour = i567[0]
  i566.nestedTweenFailureBehaviour = i567[1]
  return i566
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i568 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i569 = data
  i568.showPanel = !!i569[0]
  i568.audioEnabled = !!i569[1]
  i568.physicsEnabled = !!i569[2]
  i568.physics2DEnabled = !!i569[3]
  i568.spriteEnabled = !!i569[4]
  i568.uiEnabled = !!i569[5]
  i568.textMeshProEnabled = !!i569[6]
  i568.tk2DEnabled = !!i569[7]
  i568.deAudioEnabled = !!i569[8]
  i568.deUnityExtendedEnabled = !!i569[9]
  i568.epoOutlineEnabled = !!i569[10]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i571 = data
  var i573 = i571[0]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i573[i + 0]) );
  }
  i570.files = i572
  i570.componentToPrefabIds = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i577 = data
  i576.path = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'unityObject')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i579 = data
  var i581 = i579[0]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i581[i + 0]) );
  }
  i578.scriptsExecutionOrder = i580
  var i583 = i579[1]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i583[i + 0]) );
  }
  i578.sortingLayers = i582
  var i585 = i579[2]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i585[i + 0]) );
  }
  i578.cullingLayers = i584
  i578.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i579[3], i578.timeSettings)
  i578.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i579[4], i578.physicsSettings)
  i578.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i579[5], i578.physics2DSettings)
  i578.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i579[6], i578.qualitySettings)
  i578.enableRealtimeShadows = !!i579[7]
  i578.enableAutoInstancing = !!i579[8]
  i578.enableStaticBatching = !!i579[9]
  i578.enableDynamicBatching = !!i579[10]
  i578.usePreservativeDynamicBatching = !!i579[11]
  i578.lightmapEncodingQuality = i579[12]
  i578.desiredColorSpace = i579[13]
  var i587 = i579[14]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( i587[i + 0] );
  }
  i578.allTags = i586
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i591 = data
  i590.name = i591[0]
  i590.value = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i595 = data
  i594.id = i595[0]
  i594.name = i595[1]
  i594.value = i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i599 = data
  i598.id = i599[0]
  i598.name = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i601 = data
  i600.fixedDeltaTime = i601[0]
  i600.maximumDeltaTime = i601[1]
  i600.timeScale = i601[2]
  i600.maximumParticleTimestep = i601[3]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i603 = data
  i602.gravity = new pc.Vec3( i603[0], i603[1], i603[2] )
  i602.defaultSolverIterations = i603[3]
  i602.bounceThreshold = i603[4]
  i602.autoSyncTransforms = !!i603[5]
  i602.autoSimulation = !!i603[6]
  var i605 = i603[7]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i605[i + 0]) );
  }
  i602.collisionMatrix = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i609 = data
  i608.enabled = !!i609[0]
  i608.layerId = i609[1]
  i608.otherLayerId = i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'material')
  i610.gravity = new pc.Vec2( i611[2], i611[3] )
  i610.positionIterations = i611[4]
  i610.velocityIterations = i611[5]
  i610.velocityThreshold = i611[6]
  i610.maxLinearCorrection = i611[7]
  i610.maxAngularCorrection = i611[8]
  i610.maxTranslationSpeed = i611[9]
  i610.maxRotationSpeed = i611[10]
  i610.baumgarteScale = i611[11]
  i610.baumgarteTOIScale = i611[12]
  i610.timeToSleep = i611[13]
  i610.linearSleepTolerance = i611[14]
  i610.angularSleepTolerance = i611[15]
  i610.defaultContactOffset = i611[16]
  i610.autoSimulation = !!i611[17]
  i610.queriesHitTriggers = !!i611[18]
  i610.queriesStartInColliders = !!i611[19]
  i610.callbacksOnDisable = !!i611[20]
  i610.reuseCollisionCallbacks = !!i611[21]
  i610.autoSyncTransforms = !!i611[22]
  var i613 = i611[23]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i613[i + 0]) );
  }
  i610.collisionMatrix = i612
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i617 = data
  i616.enabled = !!i617[0]
  i616.layerId = i617[1]
  i616.otherLayerId = i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i621[i + 0]) );
  }
  i618.qualityLevels = i620
  var i623 = i619[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i618.names = i622
  i618.shadows = i619[2]
  i618.anisotropicFiltering = i619[3]
  i618.antiAliasing = i619[4]
  i618.lodBias = i619[5]
  i618.shadowCascades = i619[6]
  i618.shadowDistance = i619[7]
  i618.shadowmaskMode = i619[8]
  i618.shadowProjection = i619[9]
  i618.shadowResolution = i619[10]
  i618.softParticles = !!i619[11]
  i618.softVegetation = !!i619[12]
  i618.activeColorSpace = i619[13]
  i618.desiredColorSpace = i619[14]
  i618.masterTextureLimit = i619[15]
  i618.maxQueuedFrames = i619[16]
  i618.particleRaycastBudget = i619[17]
  i618.pixelLightCount = i619[18]
  i618.realtimeReflectionProbes = !!i619[19]
  i618.shadowCascade2Split = i619[20]
  i618.shadowCascade4Split = new pc.Vec3( i619[21], i619[22], i619[23] )
  i618.streamingMipmapsActive = !!i619[24]
  i618.vSyncCount = i619[25]
  i618.asyncUploadBufferSize = i619[26]
  i618.asyncUploadTimeSlice = i619[27]
  i618.billboardsFaceCameraPosition = !!i619[28]
  i618.shadowNearPlaneOffset = i619[29]
  i618.streamingMipmapsMemoryBudget = i619[30]
  i618.maximumLODLevel = i619[31]
  i618.streamingMipmapsAddAllCameras = !!i619[32]
  i618.streamingMipmapsMaxLevelReduction = i619[33]
  i618.streamingMipmapsRenderersPerFrame = i619[34]
  i618.resolutionScalingFixedDPIFactor = i619[35]
  i618.streamingMipmapsMaxFileIORequests = i619[36]
  i618.currentQualityLevel = i619[37]
  return i618
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_ObjectArgument')
  i626.m_ObjectArgumentAssemblyTypeName = i627[2]
  i626.m_IntArgument = i627[3]
  i626.m_FloatArgument = i627[4]
  i626.m_StringArgument = i627[5]
  i626.m_BoolArgument = !!i627[6]
  return i626
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[9],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[2],"56":[2],"57":[2],"58":[2],"59":[2],"60":[2],"7":[2],"61":[2],"62":[2],"63":[2],"64":[2],"65":[2],"66":[2],"67":[9],"68":[69],"70":[71],"72":[71],"12":[11],"73":[3],"74":[9],"75":[76],"77":[11],"78":[16,11],"79":[69],"80":[16,11],"81":[11],"82":[11],"83":[69,11],"84":[11,16],"85":[86],"87":[86],"88":[86],"89":[11],"90":[11],"15":[12],"28":[16,11],"18":[11],"14":[12],"91":[11],"92":[11],"93":[11],"94":[11],"32":[11],"95":[11],"96":[11],"97":[11],"98":[11],"17":[16,11],"99":[11],"100":[11],"101":[11],"102":[11],"30":[16,11],"103":[11],"104":[34],"105":[34],"35":[34],"106":[34],"107":[9],"108":[9]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.MonoBehaviour","MelonSandboxGameplay","LunaController","SpawnTutorial","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","UnityEngine.AudioSource","AudioController","UnityEngine.UI.Image","SandboxVariantButton","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.LayoutElement","UnityEngine.UI.Outline","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/20/2026 09:30:25";

Deserializers.lunaDaysRunning = "3.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_FPS_V02_AnhPP";

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

Deserializers.buildID = "09f4661a-9193-485a-9ee8-3be1a1248c86";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

