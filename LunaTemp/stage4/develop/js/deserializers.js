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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i343 = data
  i342.name = i343[0]
  i342.width = i343[1]
  i342.height = i343[2]
  i342.mipmapCount = i343[3]
  i342.anisoLevel = i343[4]
  i342.filterMode = i343[5]
  i342.hdr = !!i343[6]
  i342.format = i343[7]
  i342.wrapMode = i343[8]
  i342.alphaIsTransparency = !!i343[9]
  i342.alphaSource = i343[10]
  i342.graphicsFormat = i343[11]
  i342.sRGBTexture = !!i343[12]
  i342.desiredColorSpace = i343[13]
  i342.wrapU = i343[14]
  i342.wrapV = i343[15]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i344 = root || new pc.UnityMaterial()
  var i345 = data
  i344.name = i345[0]
  request.r(i345[1], i345[2], 0, i344, 'shader')
  i344.renderQueue = i345[3]
  i344.enableInstancing = !!i345[4]
  var i347 = i345[5]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i347[i + 0]) );
  }
  i344.floatParameters = i346
  var i349 = i345[6]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i349[i + 0]) );
  }
  i344.colorParameters = i348
  var i351 = i345[7]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i351[i + 0]) );
  }
  i344.vectorParameters = i350
  var i353 = i345[8]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i353[i + 0]) );
  }
  i344.textureParameters = i352
  var i355 = i345[9]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i355[i + 0]) );
  }
  i344.materialFlags = i354
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i359 = data
  i358.name = i359[0]
  i358.value = i359[1]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i363 = data
  i362.name = i363[0]
  i362.value = new pc.Color(i363[1], i363[2], i363[3], i363[4])
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i367 = data
  i366.name = i367[0]
  i366.value = new pc.Vec4( i367[1], i367[2], i367[3], i367[4] )
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i371 = data
  i370.name = i371[0]
  request.r(i371[1], i371[2], 0, i370, 'value')
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i375 = data
  i374.name = i375[0]
  i374.enabled = !!i375[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i385 = data
  i384.radius = i385[0]
  i384.enabled = !!i385[1]
  i384.isTrigger = !!i385[2]
  i384.usedByEffector = !!i385[3]
  i384.density = i385[4]
  i384.offset = new pc.Vec2( i385[5], i385[6] )
  request.r(i385[7], i385[8], 0, i384, 'material')
  return i384
}

Deserializers["BulletController"] = function (request, data, root) {
  var i386 = root || request.c( 'BulletController' )
  var i387 = data
  i386.speed = i387[0]
  i386.damage = i387[1]
  request.r(i387[2], i387[3], 0, i386, 'hitMonsterSound')
  request.r(i387[4], i387[5], 0, i386, 'hitSound')
  i386.lifeTime = i387[6]
  i386.hit = !!i387[7]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i389 = data
  i388.name = i389[0]
  i388.tagId = i389[1]
  i388.enabled = !!i389[2]
  i388.isStatic = !!i389[3]
  i388.layer = i389[4]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i391 = data
  i390.sortingLayerIndex = i391[0]
  i390.sortingOrder = i391[1]
  i390.sortingLayerName = i391[2]
  i390.enabled = !!i391[3]
  return i390
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i392 = root || request.c( 'MonsterController' )
  var i393 = data
  i392.maxHP = i393[0]
  i392.currentHP = i393[1]
  var i395 = i393[2]
  var i394 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i395.length; i += 1) {
    i394.add(request.d('Piece', i395[i + 0]));
  }
  i392.pieces = i394
  request.r(i393[3], i393[4], 0, i392, 'deadSFX')
  i392.maxForce = new pc.Vec2( i393[5], i393[6] )
  i392.minForce = new pc.Vec2( i393[7], i393[8] )
  request.r(i393[9], i393[10], 0, i392, 'balance')
  i392.isDead = !!i393[11]
  return i392
}

Deserializers["Piece"] = function (request, data, root) {
  var i398 = root || request.c( 'Piece' )
  var i399 = data
  request.r(i399[0], i399[1], 0, i398, 'Joint')
  request.r(i399[2], i399[3], 0, i398, 'Rb')
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i401 = data
  i400.bodyType = i401[0]
  request.r(i401[1], i401[2], 0, i400, 'material')
  i400.simulated = !!i401[3]
  i400.useAutoMass = !!i401[4]
  i400.mass = i401[5]
  i400.drag = i401[6]
  i400.angularDrag = i401[7]
  i400.gravityScale = i401[8]
  i400.collisionDetectionMode = i401[9]
  i400.sleepMode = i401[10]
  i400.constraints = i401[11]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i403 = data
  i402.usedByComposite = !!i403[0]
  i402.autoTiling = !!i403[1]
  i402.size = new pc.Vec2( i403[2], i403[3] )
  i402.edgeRadius = i403[4]
  i402.enabled = !!i403[5]
  i402.isTrigger = !!i403[6]
  i402.usedByEffector = !!i403[7]
  i402.density = i403[8]
  i402.offset = new pc.Vec2( i403[9], i403[10] )
  request.r(i403[11], i403[12], 0, i402, 'material')
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i405 = data
  i404.useLimits = !!i405[0]
  i404.limits = request.d('UnityEngine.JointAngleLimits2D', i405[1], i404.limits)
  i404.useMotor = !!i405[2]
  i404.motor = request.d('UnityEngine.JointMotor2D', i405[3], i404.motor)
  i404.anchor = new pc.Vec2( i405[4], i405[5] )
  i404.connectedAnchor = new pc.Vec2( i405[6], i405[7] )
  i404.autoConfigureConnectedAnchor = !!i405[8]
  request.r(i405[9], i405[10], 0, i404, 'connectedBody')
  i404.breakForce = i405[11]
  i404.breakTorque = i405[12]
  i404.enableCollision = !!i405[13]
  i404.enabled = !!i405[14]
  return i404
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i406 = root || request.c( 'BalanceController' )
  var i407 = data
  i406.targetRotation = i407[0]
  i406.force = i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i409 = data
  i408.name = i409[0]
  i408.index = i409[1]
  i408.startup = !!i409[2]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i411 = data
  i410.aspect = i411[0]
  i410.orthographic = !!i411[1]
  i410.orthographicSize = i411[2]
  i410.backgroundColor = new pc.Color(i411[3], i411[4], i411[5], i411[6])
  i410.nearClipPlane = i411[7]
  i410.farClipPlane = i411[8]
  i410.fieldOfView = i411[9]
  i410.depth = i411[10]
  i410.clearFlags = i411[11]
  i410.cullingMask = i411[12]
  i410.rect = i411[13]
  request.r(i411[14], i411[15], 0, i410, 'targetTexture')
  i410.usePhysicalProperties = !!i411[16]
  i410.focalLength = i411[17]
  i410.sensorSize = new pc.Vec2( i411[18], i411[19] )
  i410.lensShift = new pc.Vec2( i411[20], i411[21] )
  i410.gateFit = i411[22]
  i410.commandBufferCount = i411[23]
  i410.cameraType = i411[24]
  i410.enabled = !!i411[25]
  return i410
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'm_FirstSelected')
  i412.m_sendNavigationEvents = !!i413[2]
  i412.m_DragThreshold = i413[3]
  return i412
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i415 = data
  i414.m_HorizontalAxis = i415[0]
  i414.m_VerticalAxis = i415[1]
  i414.m_SubmitButton = i415[2]
  i414.m_CancelButton = i415[3]
  i414.m_InputActionsPerSecond = i415[4]
  i414.m_RepeatDelay = i415[5]
  i414.m_ForceModuleActive = !!i415[6]
  i414.m_SendPointerHoverToParent = !!i415[7]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i417 = data
  i416.pivot = new pc.Vec2( i417[0], i417[1] )
  i416.anchorMin = new pc.Vec2( i417[2], i417[3] )
  i416.anchorMax = new pc.Vec2( i417[4], i417[5] )
  i416.sizeDelta = new pc.Vec2( i417[6], i417[7] )
  i416.anchoredPosition3D = new pc.Vec3( i417[8], i417[9], i417[10] )
  i416.rotation = new pc.Quat(i417[11], i417[12], i417[13], i417[14])
  i416.scale = new pc.Vec3( i417[15], i417[16], i417[17] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i419 = data
  i418.planeDistance = i419[0]
  i418.referencePixelsPerUnit = i419[1]
  i418.isFallbackOverlay = !!i419[2]
  i418.renderMode = i419[3]
  i418.renderOrder = i419[4]
  i418.sortingLayerName = i419[5]
  i418.sortingOrder = i419[6]
  i418.scaleFactor = i419[7]
  request.r(i419[8], i419[9], 0, i418, 'worldCamera')
  i418.overrideSorting = !!i419[10]
  i418.pixelPerfect = !!i419[11]
  i418.targetDisplay = i419[12]
  i418.overridePixelPerfect = !!i419[13]
  i418.enabled = !!i419[14]
  return i418
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i421 = data
  i420.m_UiScaleMode = i421[0]
  i420.m_ReferencePixelsPerUnit = i421[1]
  i420.m_ScaleFactor = i421[2]
  i420.m_ReferenceResolution = new pc.Vec2( i421[3], i421[4] )
  i420.m_ScreenMatchMode = i421[5]
  i420.m_MatchWidthOrHeight = i421[6]
  i420.m_PhysicalUnit = i421[7]
  i420.m_FallbackScreenDPI = i421[8]
  i420.m_DefaultSpriteDPI = i421[9]
  i420.m_DynamicPixelsPerUnit = i421[10]
  i420.m_PresetInfoIsWorld = !!i421[11]
  return i420
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i423 = data
  i422.m_IgnoreReversedGraphics = !!i423[0]
  i422.m_BlockingObjects = i423[1]
  i422.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i423[2] )
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i425 = data
  i424.cullTransparentMesh = !!i425[0]
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

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i429 = data
  i428.m_AspectMode = i429[0]
  i428.m_AspectRatio = i429[1]
  return i428
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.UI.Button' )
  var i431 = data
  i430.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i431[0], i430.m_OnClick)
  i430.m_Navigation = request.d('UnityEngine.UI.Navigation', i431[1], i430.m_Navigation)
  i430.m_Transition = i431[2]
  i430.m_Colors = request.d('UnityEngine.UI.ColorBlock', i431[3], i430.m_Colors)
  i430.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i431[4], i430.m_SpriteState)
  i430.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i431[5], i430.m_AnimationTriggers)
  i430.m_Interactable = !!i431[6]
  request.r(i431[7], i431[8], 0, i430, 'm_TargetGraphic')
  return i430
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i433 = data
  i432.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i433[0], i432.m_PersistentCalls)
  return i432
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i435 = data
  var i437 = i435[0]
  var i436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i437.length; i += 1) {
    i436.add(request.d('UnityEngine.Events.PersistentCall', i437[i + 0]));
  }
  i434.m_Calls = i436
  return i434
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'm_Target')
  i440.m_TargetAssemblyTypeName = i441[2]
  i440.m_MethodName = i441[3]
  i440.m_Mode = i441[4]
  i440.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i441[5], i440.m_Arguments)
  i440.m_CallState = i441[6]
  return i440
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i443 = data
  i442.m_Mode = i443[0]
  i442.m_WrapAround = !!i443[1]
  request.r(i443[2], i443[3], 0, i442, 'm_SelectOnUp')
  request.r(i443[4], i443[5], 0, i442, 'm_SelectOnDown')
  request.r(i443[6], i443[7], 0, i442, 'm_SelectOnLeft')
  request.r(i443[8], i443[9], 0, i442, 'm_SelectOnRight')
  return i442
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i445 = data
  i444.m_NormalColor = new pc.Color(i445[0], i445[1], i445[2], i445[3])
  i444.m_HighlightedColor = new pc.Color(i445[4], i445[5], i445[6], i445[7])
  i444.m_PressedColor = new pc.Color(i445[8], i445[9], i445[10], i445[11])
  i444.m_SelectedColor = new pc.Color(i445[12], i445[13], i445[14], i445[15])
  i444.m_DisabledColor = new pc.Color(i445[16], i445[17], i445[18], i445[19])
  i444.m_ColorMultiplier = i445[20]
  i444.m_FadeDuration = i445[21]
  return i444
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'm_HighlightedSprite')
  request.r(i447[2], i447[3], 0, i446, 'm_PressedSprite')
  request.r(i447[4], i447[5], 0, i446, 'm_SelectedSprite')
  request.r(i447[6], i447[7], 0, i446, 'm_DisabledSprite')
  return i446
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i449 = data
  i448.m_NormalTrigger = i449[0]
  i448.m_HighlightedTrigger = i449[1]
  i448.m_PressedTrigger = i449[2]
  i448.m_SelectedTrigger = i449[3]
  i448.m_DisabledTrigger = i449[4]
  return i448
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.Image' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'm_Sprite')
  i450.m_Type = i451[2]
  i450.m_PreserveAspect = !!i451[3]
  i450.m_FillCenter = !!i451[4]
  i450.m_FillMethod = i451[5]
  i450.m_FillAmount = i451[6]
  i450.m_FillClockwise = !!i451[7]
  i450.m_FillOrigin = i451[8]
  i450.m_UseSpriteMesh = !!i451[9]
  i450.m_PixelsPerUnitMultiplier = i451[10]
  request.r(i451[11], i451[12], 0, i450, 'm_Material')
  i450.m_Maskable = !!i451[13]
  i450.m_Color = new pc.Color(i451[14], i451[15], i451[16], i451[17])
  i450.m_RaycastTarget = !!i451[18]
  i450.m_RaycastPadding = new pc.Vec4( i451[19], i451[20], i451[21], i451[22] )
  return i450
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.UI.Text' )
  var i453 = data
  i452.m_FontData = request.d('UnityEngine.UI.FontData', i453[0], i452.m_FontData)
  i452.m_Text = i453[1]
  request.r(i453[2], i453[3], 0, i452, 'm_Material')
  i452.m_Maskable = !!i453[4]
  i452.m_Color = new pc.Color(i453[5], i453[6], i453[7], i453[8])
  i452.m_RaycastTarget = !!i453[9]
  i452.m_RaycastPadding = new pc.Vec4( i453[10], i453[11], i453[12], i453[13] )
  return i452
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.UI.FontData' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'm_Font')
  i454.m_FontSize = i455[2]
  i454.m_FontStyle = i455[3]
  i454.m_BestFit = !!i455[4]
  i454.m_MinSize = i455[5]
  i454.m_MaxSize = i455[6]
  i454.m_Alignment = i455[7]
  i454.m_AlignByGeometry = !!i455[8]
  i454.m_RichText = !!i455[9]
  i454.m_HorizontalOverflow = i455[10]
  i454.m_VerticalOverflow = i455[11]
  i454.m_LineSpacing = i455[12]
  return i454
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i456 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i457 = data
  i456.targetIsSelf = !!i457[0]
  request.r(i457[1], i457[2], 0, i456, 'targetGO')
  i456.tweenTargetIsTargetGO = !!i457[3]
  i456.delay = i457[4]
  i456.duration = i457[5]
  i456.easeType = i457[6]
  i456.easeCurve = new pc.AnimationCurve( { keys_flow: i457[7] } )
  i456.loopType = i457[8]
  i456.loops = i457[9]
  i456.id = i457[10]
  i456.isRelative = !!i457[11]
  i456.isFrom = !!i457[12]
  i456.isIndependentUpdate = !!i457[13]
  i456.autoKill = !!i457[14]
  i456.autoGenerate = !!i457[15]
  i456.isActive = !!i457[16]
  i456.isValid = !!i457[17]
  request.r(i457[18], i457[19], 0, i456, 'target')
  i456.animationType = i457[20]
  i456.targetType = i457[21]
  i456.forcedTargetType = i457[22]
  i456.autoPlay = !!i457[23]
  i456.useTargetAsV3 = !!i457[24]
  i456.endValueFloat = i457[25]
  i456.endValueV3 = new pc.Vec3( i457[26], i457[27], i457[28] )
  i456.endValueV2 = new pc.Vec2( i457[29], i457[30] )
  i456.endValueColor = new pc.Color(i457[31], i457[32], i457[33], i457[34])
  i456.endValueString = i457[35]
  i456.endValueRect = UnityEngine.Rect.MinMaxRect(i457[36], i457[37], i457[38], i457[39])
  request.r(i457[40], i457[41], 0, i456, 'endValueTransform')
  i456.optionalBool0 = !!i457[42]
  i456.optionalBool1 = !!i457[43]
  i456.optionalFloat0 = i457[44]
  i456.optionalInt0 = i457[45]
  i456.optionalRotationMode = i457[46]
  i456.optionalScrambleMode = i457[47]
  i456.optionalShakeRandomnessMode = i457[48]
  i456.optionalString = i457[49]
  i456.updateType = i457[50]
  i456.isSpeedBased = !!i457[51]
  i456.hasOnStart = !!i457[52]
  i456.hasOnPlay = !!i457[53]
  i456.hasOnUpdate = !!i457[54]
  i456.hasOnStepComplete = !!i457[55]
  i456.hasOnComplete = !!i457[56]
  i456.hasOnTweenCreated = !!i457[57]
  i456.hasOnRewind = !!i457[58]
  i456.onStart = request.d('UnityEngine.Events.UnityEvent', i457[59], i456.onStart)
  i456.onPlay = request.d('UnityEngine.Events.UnityEvent', i457[60], i456.onPlay)
  i456.onUpdate = request.d('UnityEngine.Events.UnityEvent', i457[61], i456.onUpdate)
  i456.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i457[62], i456.onStepComplete)
  i456.onComplete = request.d('UnityEngine.Events.UnityEvent', i457[63], i456.onComplete)
  i456.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i457[64], i456.onTweenCreated)
  i456.onRewind = request.d('UnityEngine.Events.UnityEvent', i457[65], i456.onRewind)
  return i456
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i459 = data
  i458.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i459[0], i458.m_PersistentCalls)
  return i458
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i460 = root || request.c( 'PlayerController' )
  var i461 = data
  i460.ShootCD = i461[0]
  request.r(i461[1], i461[2], 0, i460, 'currentMonster')
  request.r(i461[3], i461[4], 0, i460, 'left')
  request.r(i461[5], i461[6], 0, i460, 'right')
  request.r(i461[7], i461[8], 0, i460, 'gun')
  request.r(i461[9], i461[10], 0, i460, 'bulletPrefab')
  i460.canShoot = !!i461[11]
  i460.onCD = !!i461[12]
  request.r(i461[13], i461[14], 0, i460, 'poolParent')
  request.r(i461[15], i461[16], 0, i460, 'shootSound')
  i460.timeMotor = i461[17]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i463 = data
  i462.autoConfigureTarget = !!i463[0]
  i462.target = new pc.Vec2( i463[1], i463[2] )
  i462.anchor = new pc.Vec2( i463[3], i463[4] )
  i462.maxForce = i463[5]
  i462.dampingRatio = i463[6]
  i462.frequency = i463[7]
  request.r(i463[8], i463[9], 0, i462, 'connectedBody')
  i462.breakForce = i463[10]
  i462.breakTorque = i463[11]
  i462.enableCollision = !!i463[12]
  i462.enabled = !!i463[13]
  return i462
}

Deserializers["GameController"] = function (request, data, root) {
  var i464 = root || request.c( 'GameController' )
  var i465 = data
  i464.OnAddMonster = request.d('System.Action', i465[0], i464.OnAddMonster)
  request.r(i465[1], i465[2], 0, i464, 'area')
  request.r(i465[3], i465[4], 0, i464, 'player')
  request.r(i465[5], i465[6], 0, i464, 'areaTut')
  request.r(i465[7], i465[8], 0, i464, 'tut')
  i464.numMonster = i465[9]
  var i467 = i465[10]
  var i466 = new (System.Collections.Generic.List$1(Bridge.ns('Monster')))
  for(var i = 0; i < i467.length; i += 1) {
    i466.add(request.d('Monster', i467[i + 0]));
  }
  i464.monsters = i466
  i464.currentMonster = request.d('Monster', i465[11], i464.currentMonster)
  request.r(i465[12], i465[13], 0, i464, 'world')
  request.r(i465[14], i465[15], 0, i464, 'clickSound')
  return i464
}

Deserializers["System.Action"] = function (request, data, root) {
  var i468 = root || request.c( 'System.Action' )
  var i469 = data
  return i468
}

Deserializers["Monster"] = function (request, data, root) {
  var i472 = root || request.c( 'Monster' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'Button')
  request.r(i473[2], i473[3], 0, i472, 'Selected')
  request.r(i473[4], i473[5], 0, i472, 'Prefab')
  return i472
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i474 = root || request.c( 'LayoutController' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'main')
  request.r(i475[2], i475[3], 0, i474, 'button')
  return i474
}

Deserializers["LunaController"] = function (request, data, root) {
  var i476 = root || request.c( 'LunaController' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'BGTexture')
  i476.UseTime = !!i477[2]
  i476.TimePlay = i477[3]
  i476.UseCountPlay = !!i477[4]
  i476.MaxCountPlay = i477[5]
  request.r(i477[6], i477[7], 0, i476, 'BGImage')
  var i479 = i477[8]
  var i478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 1, i478, '')
  }
  i476.CTA = i478
  i476.count = i477[9]
  return i476
}

Deserializers["AudioController"] = function (request, data, root) {
  var i482 = root || request.c( 'AudioController' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'BGM')
  request.r(i483[2], i483[3], 0, i482, 'musicSource')
  request.r(i483[4], i483[5], 0, i482, 'pool')
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'clip')
  request.r(i485[2], i485[3], 0, i484, 'outputAudioMixerGroup')
  i484.playOnAwake = !!i485[4]
  i484.loop = !!i485[5]
  i484.time = i485[6]
  i484.volume = i485[7]
  i484.pitch = i485[8]
  i484.enabled = !!i485[9]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i487 = data
  i486.ambientIntensity = i487[0]
  i486.reflectionIntensity = i487[1]
  i486.ambientMode = i487[2]
  i486.ambientLight = new pc.Color(i487[3], i487[4], i487[5], i487[6])
  i486.ambientSkyColor = new pc.Color(i487[7], i487[8], i487[9], i487[10])
  i486.ambientGroundColor = new pc.Color(i487[11], i487[12], i487[13], i487[14])
  i486.ambientEquatorColor = new pc.Color(i487[15], i487[16], i487[17], i487[18])
  i486.fogColor = new pc.Color(i487[19], i487[20], i487[21], i487[22])
  i486.fogEndDistance = i487[23]
  i486.fogStartDistance = i487[24]
  i486.fogDensity = i487[25]
  i486.fog = !!i487[26]
  request.r(i487[27], i487[28], 0, i486, 'skybox')
  i486.fogMode = i487[29]
  var i489 = i487[30]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i489[i + 0]) );
  }
  i486.lightmaps = i488
  i486.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i487[31], i486.lightProbes)
  i486.lightmapsMode = i487[32]
  i486.mixedBakeMode = i487[33]
  i486.environmentLightingMode = i487[34]
  i486.ambientProbe = new pc.SphericalHarmonicsL2(i487[35])
  request.r(i487[36], i487[37], 0, i486, 'customReflection')
  request.r(i487[38], i487[39], 0, i486, 'defaultReflection')
  i486.defaultReflectionMode = i487[40]
  i486.defaultReflectionResolution = i487[41]
  i486.sunLightObjectId = i487[42]
  i486.pixelLightCount = i487[43]
  i486.defaultReflectionHDR = !!i487[44]
  i486.hasLightDataAsset = !!i487[45]
  i486.hasManualGenerate = !!i487[46]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'lightmapColor')
  request.r(i493[2], i493[3], 0, i492, 'lightmapDirection')
  request.r(i493[4], i493[5], 0, i492, 'shadowMask')
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i494 = root || new UnityEngine.LightProbes()
  var i495 = data
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i503 = data
  var i505 = i503[0]
  var i504 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i505.length; i += 1) {
    i504.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i505[i + 0]));
  }
  i502.ShaderCompilationErrors = i504
  i502.name = i503[1]
  i502.guid = i503[2]
  var i507 = i503[3]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( i507[i + 0] );
  }
  i502.shaderDefinedKeywords = i506
  var i509 = i503[4]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i509[i + 0]) );
  }
  i502.passes = i508
  var i511 = i503[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i511[i + 0]) );
  }
  i502.usePasses = i510
  var i513 = i503[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i513[i + 0]) );
  }
  i502.defaultParameterValues = i512
  request.r(i503[7], i503[8], 0, i502, 'unityFallbackShader')
  i502.readDepth = !!i503[9]
  i502.hasDepthOnlyPass = !!i503[10]
  i502.isCreatedByShaderGraph = !!i503[11]
  i502.disableBatching = !!i503[12]
  i502.compiled = !!i503[13]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i517 = data
  i516.shaderName = i517[0]
  i516.errorMessage = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i522 = root || new pc.UnityShaderPass()
  var i523 = data
  i522.id = i523[0]
  i522.subShaderIndex = i523[1]
  i522.name = i523[2]
  i522.passType = i523[3]
  i522.grabPassTextureName = i523[4]
  i522.usePass = !!i523[5]
  i522.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[6], i522.zTest)
  i522.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[7], i522.zWrite)
  i522.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[8], i522.culling)
  i522.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i523[9], i522.blending)
  i522.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i523[10], i522.alphaBlending)
  i522.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[11], i522.colorWriteMask)
  i522.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[12], i522.offsetUnits)
  i522.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[13], i522.offsetFactor)
  i522.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[14], i522.stencilRef)
  i522.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[15], i522.stencilReadMask)
  i522.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i523[16], i522.stencilWriteMask)
  i522.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i523[17], i522.stencilOp)
  i522.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i523[18], i522.stencilOpFront)
  i522.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i523[19], i522.stencilOpBack)
  var i525 = i523[20]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i525[i + 0]) );
  }
  i522.tags = i524
  var i527 = i523[21]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( i527[i + 0] );
  }
  i522.passDefinedKeywords = i526
  var i529 = i523[22]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i529[i + 0]) );
  }
  i522.passDefinedKeywordGroups = i528
  var i531 = i523[23]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i531[i + 0]) );
  }
  i522.variants = i530
  var i533 = i523[24]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i533[i + 0]) );
  }
  i522.excludedVariants = i532
  i522.hasDepthReader = !!i523[25]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i535 = data
  i534.val = i535[0]
  i534.name = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i537 = data
  i536.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[0], i536.src)
  i536.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[1], i536.dst)
  i536.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i537[2], i536.op)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i539 = data
  i538.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[0], i538.pass)
  i538.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[1], i538.fail)
  i538.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[2], i538.zFail)
  i538.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i539[3], i538.comp)
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i543 = data
  i542.name = i543[0]
  i542.value = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i547 = data
  var i549 = i547[0]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i546.keywords = i548
  i546.hasDiscard = !!i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i553 = data
  i552.passId = i553[0]
  i552.subShaderIndex = i553[1]
  var i555 = i553[2]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( i555[i + 0] );
  }
  i552.keywords = i554
  i552.vertexProgram = i553[3]
  i552.fragmentProgram = i553[4]
  i552.exportedForWebGl2 = !!i553[5]
  i552.readDepth = !!i553[6]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'shader')
  i558.pass = i559[2]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i563 = data
  i562.name = i563[0]
  i562.type = i563[1]
  i562.value = new pc.Vec4( i563[2], i563[3], i563[4], i563[5] )
  i562.textureValue = i563[6]
  i562.shaderPropertyFlag = i563[7]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i565 = data
  i564.name = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'texture')
  i564.aabb = i565[3]
  i564.vertices = i565[4]
  i564.triangles = i565[5]
  i564.textureRect = UnityEngine.Rect.MinMaxRect(i565[6], i565[7], i565[8], i565[9])
  i564.packedRect = UnityEngine.Rect.MinMaxRect(i565[10], i565[11], i565[12], i565[13])
  i564.border = new pc.Vec4( i565[14], i565[15], i565[16], i565[17] )
  i564.transparency = i565[18]
  i564.bounds = i565[19]
  i564.pixelsPerUnit = i565[20]
  i564.textureWidth = i565[21]
  i564.textureHeight = i565[22]
  i564.nativeSize = new pc.Vec2( i565[23], i565[24] )
  i564.pivot = new pc.Vec2( i565[25], i565[26] )
  i564.textureRectOffset = new pc.Vec2( i565[27], i565[28] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i567 = data
  i566.name = i567[0]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i569 = data
  i568.name = i569[0]
  i568.ascent = i569[1]
  i568.originalLineHeight = i569[2]
  i568.fontSize = i569[3]
  var i571 = i569[4]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i571[i + 0]) );
  }
  i568.characterInfo = i570
  request.r(i569[5], i569[6], 0, i568, 'texture')
  i568.originalFontSize = i569[7]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i575 = data
  i574.index = i575[0]
  i574.advance = i575[1]
  i574.bearing = i575[2]
  i574.glyphWidth = i575[3]
  i574.glyphHeight = i575[4]
  i574.minX = i575[5]
  i574.maxX = i575[6]
  i574.minY = i575[7]
  i574.maxY = i575[8]
  i574.uvBottomLeftX = i575[9]
  i574.uvBottomLeftY = i575[10]
  i574.uvBottomRightX = i575[11]
  i574.uvBottomRightY = i575[12]
  i574.uvTopLeftX = i575[13]
  i574.uvTopLeftY = i575[14]
  i574.uvTopRightX = i575[15]
  i574.uvTopRightY = i575[16]
  return i574
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i576 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i577 = data
  i576.useSafeMode = !!i577[0]
  i576.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i577[1], i576.safeModeOptions)
  i576.timeScale = i577[2]
  i576.unscaledTimeScale = i577[3]
  i576.useSmoothDeltaTime = !!i577[4]
  i576.maxSmoothUnscaledTime = i577[5]
  i576.rewindCallbackMode = i577[6]
  i576.showUnityEditorReport = !!i577[7]
  i576.logBehaviour = i577[8]
  i576.drawGizmos = !!i577[9]
  i576.defaultRecyclable = !!i577[10]
  i576.defaultAutoPlay = i577[11]
  i576.defaultUpdateType = i577[12]
  i576.defaultTimeScaleIndependent = !!i577[13]
  i576.defaultEaseType = i577[14]
  i576.defaultEaseOvershootOrAmplitude = i577[15]
  i576.defaultEasePeriod = i577[16]
  i576.defaultAutoKill = !!i577[17]
  i576.defaultLoopType = i577[18]
  i576.debugMode = !!i577[19]
  i576.debugStoreTargetId = !!i577[20]
  i576.showPreviewPanel = !!i577[21]
  i576.storeSettingsLocation = i577[22]
  i576.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i577[23], i576.modules)
  i576.createASMDEF = !!i577[24]
  i576.showPlayingTweens = !!i577[25]
  i576.showPausedTweens = !!i577[26]
  return i576
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i578 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i579 = data
  i578.logBehaviour = i579[0]
  i578.nestedTweenFailureBehaviour = i579[1]
  return i578
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i580 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i581 = data
  i580.showPanel = !!i581[0]
  i580.audioEnabled = !!i581[1]
  i580.physicsEnabled = !!i581[2]
  i580.physics2DEnabled = !!i581[3]
  i580.spriteEnabled = !!i581[4]
  i580.uiEnabled = !!i581[5]
  i580.textMeshProEnabled = !!i581[6]
  i580.tk2DEnabled = !!i581[7]
  i580.deAudioEnabled = !!i581[8]
  i580.deUnityExtendedEnabled = !!i581[9]
  i580.epoOutlineEnabled = !!i581[10]
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[15],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[12],"11":[12],"65":[12],"66":[12],"35":[12],"67":[12],"68":[12],"69":[12],"70":[15],"71":[72],"73":[74],"75":[74],"21":[20],"76":[2],"77":[15],"78":[79],"80":[20],"81":[24,20],"82":[72],"83":[24,20],"84":[20],"85":[20],"86":[72,20],"87":[20,24],"88":[89],"90":[89],"91":[89],"92":[20],"93":[20],"23":[21],"29":[24,20],"27":[20],"22":[21],"94":[20],"95":[20],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"25":[24,20],"103":[20],"104":[20],"105":[20],"106":[20],"30":[24,20],"107":[20],"108":[18],"109":[18],"19":[18],"110":[18],"111":[15],"112":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","UnityEngine.BoxCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","PlayerController","UnityEngine.GameObject","UnityEngine.TargetJoint2D","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "09/28/2026 07:13:14";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V03_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4036";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c575100e-7663-45a5-bfad-852f8c24b65f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

