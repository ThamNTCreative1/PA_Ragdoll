var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.JointSpring' )
  var i1477 = data
  i1476.spring = i1477[0]
  i1476.damper = i1477[1]
  i1476.targetPosition = i1477[2]
  return i1476
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.JointMotor' )
  var i1479 = data
  i1478.m_TargetVelocity = i1479[0]
  i1478.m_Force = i1479[1]
  i1478.m_FreeSpin = i1479[2]
  return i1478
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.JointLimits' )
  var i1481 = data
  i1480.m_Min = i1481[0]
  i1480.m_Max = i1481[1]
  i1480.m_Bounciness = i1481[2]
  i1480.m_BounceMinVelocity = i1481[3]
  i1480.m_ContactDistance = i1481[4]
  i1480.minBounce = i1481[5]
  i1480.maxBounce = i1481[6]
  return i1480
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.JointDrive' )
  var i1483 = data
  i1482.m_PositionSpring = i1483[0]
  i1482.m_PositionDamper = i1483[1]
  i1482.m_MaximumForce = i1483[2]
  i1482.m_UseAcceleration = i1483[3]
  return i1482
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1485 = data
  i1484.m_Spring = i1485[0]
  i1484.m_Damper = i1485[1]
  return i1484
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1487 = data
  i1486.m_Limit = i1487[0]
  i1486.m_Bounciness = i1487[1]
  i1486.m_ContactDistance = i1487[2]
  return i1486
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1489 = data
  i1488.m_ExtremumSlip = i1489[0]
  i1488.m_ExtremumValue = i1489[1]
  i1488.m_AsymptoteSlip = i1489[2]
  i1488.m_AsymptoteValue = i1489[3]
  i1488.m_Stiffness = i1489[4]
  return i1488
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1491 = data
  i1490.m_LowerAngle = i1491[0]
  i1490.m_UpperAngle = i1491[1]
  return i1490
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1493 = data
  i1492.m_MotorSpeed = i1493[0]
  i1492.m_MaximumMotorTorque = i1493[1]
  return i1492
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1495 = data
  i1494.m_DampingRatio = i1495[0]
  i1494.m_Frequency = i1495[1]
  i1494.m_Angle = i1495[2]
  return i1494
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1497 = data
  i1496.m_LowerTranslation = i1497[0]
  i1496.m_UpperTranslation = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.width = i1499[1]
  i1498.height = i1499[2]
  i1498.mipmapCount = i1499[3]
  i1498.anisoLevel = i1499[4]
  i1498.filterMode = i1499[5]
  i1498.hdr = !!i1499[6]
  i1498.format = i1499[7]
  i1498.wrapMode = i1499[8]
  i1498.alphaIsTransparency = !!i1499[9]
  i1498.alphaSource = i1499[10]
  i1498.graphicsFormat = i1499[11]
  i1498.sRGBTexture = !!i1499[12]
  i1498.desiredColorSpace = i1499[13]
  i1498.wrapU = i1499[14]
  i1498.wrapV = i1499[15]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1500 = root || new pc.UnityMaterial()
  var i1501 = data
  i1500.name = i1501[0]
  request.r(i1501[1], i1501[2], 0, i1500, 'shader')
  i1500.renderQueue = i1501[3]
  i1500.enableInstancing = !!i1501[4]
  var i1503 = i1501[5]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1503[i + 0]) );
  }
  i1500.floatParameters = i1502
  var i1505 = i1501[6]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1505[i + 0]) );
  }
  i1500.colorParameters = i1504
  var i1507 = i1501[7]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1507[i + 0]) );
  }
  i1500.vectorParameters = i1506
  var i1509 = i1501[8]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1509[i + 0]) );
  }
  i1500.textureParameters = i1508
  var i1511 = i1501[9]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1511[i + 0]) );
  }
  i1500.materialFlags = i1510
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.value = i1515[1]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.value = new pc.Color(i1519[1], i1519[2], i1519[3], i1519[4])
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1523 = data
  i1522.name = i1523[0]
  i1522.value = new pc.Vec4( i1523[1], i1523[2], i1523[3], i1523[4] )
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1527 = data
  i1526.name = i1527[0]
  request.r(i1527[1], i1527[2], 0, i1526, 'value')
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1531 = data
  i1530.name = i1531[0]
  i1530.enabled = !!i1531[1]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.index = i1533[1]
  i1532.startup = !!i1533[2]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1535 = data
  i1534.aspect = i1535[0]
  i1534.orthographic = !!i1535[1]
  i1534.orthographicSize = i1535[2]
  i1534.backgroundColor = new pc.Color(i1535[3], i1535[4], i1535[5], i1535[6])
  i1534.nearClipPlane = i1535[7]
  i1534.farClipPlane = i1535[8]
  i1534.fieldOfView = i1535[9]
  i1534.depth = i1535[10]
  i1534.clearFlags = i1535[11]
  i1534.cullingMask = i1535[12]
  i1534.rect = i1535[13]
  request.r(i1535[14], i1535[15], 0, i1534, 'targetTexture')
  i1534.usePhysicalProperties = !!i1535[16]
  i1534.focalLength = i1535[17]
  i1534.sensorSize = new pc.Vec2( i1535[18], i1535[19] )
  i1534.lensShift = new pc.Vec2( i1535[20], i1535[21] )
  i1534.gateFit = i1535[22]
  i1534.commandBufferCount = i1535[23]
  i1534.cameraType = i1535[24]
  i1534.enabled = !!i1535[25]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.tagId = i1537[1]
  i1536.enabled = !!i1537[2]
  i1536.isStatic = !!i1537[3]
  i1536.layer = i1537[4]
  return i1536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'm_FirstSelected')
  i1538.m_sendNavigationEvents = !!i1539[2]
  i1538.m_DragThreshold = i1539[3]
  return i1538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1541 = data
  i1540.m_HorizontalAxis = i1541[0]
  i1540.m_VerticalAxis = i1541[1]
  i1540.m_SubmitButton = i1541[2]
  i1540.m_CancelButton = i1541[3]
  i1540.m_InputActionsPerSecond = i1541[4]
  i1540.m_RepeatDelay = i1541[5]
  i1540.m_ForceModuleActive = !!i1541[6]
  i1540.m_SendPointerHoverToParent = !!i1541[7]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1543 = data
  i1542.pivot = new pc.Vec2( i1543[0], i1543[1] )
  i1542.anchorMin = new pc.Vec2( i1543[2], i1543[3] )
  i1542.anchorMax = new pc.Vec2( i1543[4], i1543[5] )
  i1542.sizeDelta = new pc.Vec2( i1543[6], i1543[7] )
  i1542.anchoredPosition3D = new pc.Vec3( i1543[8], i1543[9], i1543[10] )
  i1542.rotation = new pc.Quat(i1543[11], i1543[12], i1543[13], i1543[14])
  i1542.scale = new pc.Vec3( i1543[15], i1543[16], i1543[17] )
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1545 = data
  i1544.planeDistance = i1545[0]
  i1544.referencePixelsPerUnit = i1545[1]
  i1544.isFallbackOverlay = !!i1545[2]
  i1544.renderMode = i1545[3]
  i1544.renderOrder = i1545[4]
  i1544.sortingLayerName = i1545[5]
  i1544.sortingOrder = i1545[6]
  i1544.scaleFactor = i1545[7]
  request.r(i1545[8], i1545[9], 0, i1544, 'worldCamera')
  i1544.overrideSorting = !!i1545[10]
  i1544.pixelPerfect = !!i1545[11]
  i1544.targetDisplay = i1545[12]
  i1544.overridePixelPerfect = !!i1545[13]
  i1544.enabled = !!i1545[14]
  return i1544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1547 = data
  i1546.m_UiScaleMode = i1547[0]
  i1546.m_ReferencePixelsPerUnit = i1547[1]
  i1546.m_ScaleFactor = i1547[2]
  i1546.m_ReferenceResolution = new pc.Vec2( i1547[3], i1547[4] )
  i1546.m_ScreenMatchMode = i1547[5]
  i1546.m_MatchWidthOrHeight = i1547[6]
  i1546.m_PhysicalUnit = i1547[7]
  i1546.m_FallbackScreenDPI = i1547[8]
  i1546.m_DefaultSpriteDPI = i1547[9]
  i1546.m_DynamicPixelsPerUnit = i1547[10]
  i1546.m_PresetInfoIsWorld = !!i1547[11]
  return i1546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1549 = data
  i1548.m_IgnoreReversedGraphics = !!i1549[0]
  i1548.m_BlockingObjects = i1549[1]
  i1548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1549[2] )
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1551 = data
  i1550.cullTransparentMesh = !!i1551[0]
  return i1550
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'm_Texture')
  i1552.m_UVRect = UnityEngine.Rect.MinMaxRect(i1553[2], i1553[3], i1553[4], i1553[5])
  request.r(i1553[6], i1553[7], 0, i1552, 'm_Material')
  i1552.m_Maskable = !!i1553[8]
  i1552.m_Color = new pc.Color(i1553[9], i1553[10], i1553[11], i1553[12])
  i1552.m_RaycastTarget = !!i1553[13]
  i1552.m_RaycastPadding = new pc.Vec4( i1553[14], i1553[15], i1553[16], i1553[17] )
  return i1552
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1555 = data
  i1554.m_AspectMode = i1555[0]
  i1554.m_AspectRatio = i1555[1]
  return i1554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.UI.Image' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'm_Sprite')
  i1556.m_Type = i1557[2]
  i1556.m_PreserveAspect = !!i1557[3]
  i1556.m_FillCenter = !!i1557[4]
  i1556.m_FillMethod = i1557[5]
  i1556.m_FillAmount = i1557[6]
  i1556.m_FillClockwise = !!i1557[7]
  i1556.m_FillOrigin = i1557[8]
  i1556.m_UseSpriteMesh = !!i1557[9]
  i1556.m_PixelsPerUnitMultiplier = i1557[10]
  request.r(i1557[11], i1557[12], 0, i1556, 'm_Material')
  i1556.m_Maskable = !!i1557[13]
  i1556.m_Color = new pc.Color(i1557[14], i1557[15], i1557[16], i1557[17])
  i1556.m_RaycastTarget = !!i1557[18]
  i1556.m_RaycastPadding = new pc.Vec4( i1557[19], i1557[20], i1557[21], i1557[22] )
  return i1556
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1558 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1559 = data
  i1558.targetIsSelf = !!i1559[0]
  request.r(i1559[1], i1559[2], 0, i1558, 'targetGO')
  i1558.tweenTargetIsTargetGO = !!i1559[3]
  i1558.delay = i1559[4]
  i1558.duration = i1559[5]
  i1558.easeType = i1559[6]
  i1558.easeCurve = new pc.AnimationCurve( { keys_flow: i1559[7] } )
  i1558.loopType = i1559[8]
  i1558.loops = i1559[9]
  i1558.id = i1559[10]
  i1558.isRelative = !!i1559[11]
  i1558.isFrom = !!i1559[12]
  i1558.isIndependentUpdate = !!i1559[13]
  i1558.autoKill = !!i1559[14]
  i1558.autoGenerate = !!i1559[15]
  i1558.isActive = !!i1559[16]
  i1558.isValid = !!i1559[17]
  request.r(i1559[18], i1559[19], 0, i1558, 'target')
  i1558.animationType = i1559[20]
  i1558.targetType = i1559[21]
  i1558.forcedTargetType = i1559[22]
  i1558.autoPlay = !!i1559[23]
  i1558.useTargetAsV3 = !!i1559[24]
  i1558.endValueFloat = i1559[25]
  i1558.endValueV3 = new pc.Vec3( i1559[26], i1559[27], i1559[28] )
  i1558.endValueV2 = new pc.Vec2( i1559[29], i1559[30] )
  i1558.endValueColor = new pc.Color(i1559[31], i1559[32], i1559[33], i1559[34])
  i1558.endValueString = i1559[35]
  i1558.endValueRect = UnityEngine.Rect.MinMaxRect(i1559[36], i1559[37], i1559[38], i1559[39])
  request.r(i1559[40], i1559[41], 0, i1558, 'endValueTransform')
  i1558.optionalBool0 = !!i1559[42]
  i1558.optionalBool1 = !!i1559[43]
  i1558.optionalFloat0 = i1559[44]
  i1558.optionalInt0 = i1559[45]
  i1558.optionalRotationMode = i1559[46]
  i1558.optionalScrambleMode = i1559[47]
  i1558.optionalShakeRandomnessMode = i1559[48]
  i1558.optionalString = i1559[49]
  i1558.updateType = i1559[50]
  i1558.isSpeedBased = !!i1559[51]
  i1558.hasOnStart = !!i1559[52]
  i1558.hasOnPlay = !!i1559[53]
  i1558.hasOnUpdate = !!i1559[54]
  i1558.hasOnStepComplete = !!i1559[55]
  i1558.hasOnComplete = !!i1559[56]
  i1558.hasOnTweenCreated = !!i1559[57]
  i1558.hasOnRewind = !!i1559[58]
  i1558.onStart = request.d('UnityEngine.Events.UnityEvent', i1559[59], i1558.onStart)
  i1558.onPlay = request.d('UnityEngine.Events.UnityEvent', i1559[60], i1558.onPlay)
  i1558.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1559[61], i1558.onUpdate)
  i1558.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1559[62], i1558.onStepComplete)
  i1558.onComplete = request.d('UnityEngine.Events.UnityEvent', i1559[63], i1558.onComplete)
  i1558.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1559[64], i1558.onTweenCreated)
  i1558.onRewind = request.d('UnityEngine.Events.UnityEvent', i1559[65], i1558.onRewind)
  return i1558
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1561 = data
  i1560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1561[0], i1560.m_PersistentCalls)
  return i1560
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1563 = data
  var i1565 = i1563[0]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('UnityEngine.Events.PersistentCall', i1565[i + 0]));
  }
  i1562.m_Calls = i1564
  return i1562
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'm_Target')
  i1568.m_TargetAssemblyTypeName = i1569[2]
  i1568.m_MethodName = i1569[3]
  i1568.m_Mode = i1569[4]
  i1568.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1569[5], i1568.m_Arguments)
  i1568.m_CallState = i1569[6]
  return i1568
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1571 = data
  i1570.m_hasFontAssetChanged = !!i1571[0]
  request.r(i1571[1], i1571[2], 0, i1570, 'm_baseMaterial')
  i1570.m_maskOffset = new pc.Vec4( i1571[3], i1571[4], i1571[5], i1571[6] )
  i1570.m_text = i1571[7]
  i1570.m_isRightToLeft = !!i1571[8]
  request.r(i1571[9], i1571[10], 0, i1570, 'm_fontAsset')
  request.r(i1571[11], i1571[12], 0, i1570, 'm_sharedMaterial')
  var i1573 = i1571[13]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 2) {
  request.r(i1573[i + 0], i1573[i + 1], 2, i1572, '')
  }
  i1570.m_fontSharedMaterials = i1572
  request.r(i1571[14], i1571[15], 0, i1570, 'm_fontMaterial')
  var i1575 = i1571[16]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1570.m_fontMaterials = i1574
  i1570.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1571[17], i1571[18], i1571[19], i1571[20])
  i1570.m_fontColor = new pc.Color(i1571[21], i1571[22], i1571[23], i1571[24])
  i1570.m_enableVertexGradient = !!i1571[25]
  i1570.m_colorMode = i1571[26]
  i1570.m_fontColorGradient = request.d('TMPro.VertexGradient', i1571[27], i1570.m_fontColorGradient)
  request.r(i1571[28], i1571[29], 0, i1570, 'm_fontColorGradientPreset')
  request.r(i1571[30], i1571[31], 0, i1570, 'm_spriteAsset')
  i1570.m_tintAllSprites = !!i1571[32]
  request.r(i1571[33], i1571[34], 0, i1570, 'm_StyleSheet')
  i1570.m_TextStyleHashCode = i1571[35]
  i1570.m_overrideHtmlColors = !!i1571[36]
  i1570.m_faceColor = UnityEngine.Color32.ConstructColor(i1571[37], i1571[38], i1571[39], i1571[40])
  i1570.m_fontSize = i1571[41]
  i1570.m_fontSizeBase = i1571[42]
  i1570.m_fontWeight = i1571[43]
  i1570.m_enableAutoSizing = !!i1571[44]
  i1570.m_fontSizeMin = i1571[45]
  i1570.m_fontSizeMax = i1571[46]
  i1570.m_fontStyle = i1571[47]
  i1570.m_HorizontalAlignment = i1571[48]
  i1570.m_VerticalAlignment = i1571[49]
  i1570.m_textAlignment = i1571[50]
  i1570.m_characterSpacing = i1571[51]
  i1570.m_characterHorizontalScale = i1571[52]
  i1570.m_wordSpacing = i1571[53]
  i1570.m_lineSpacing = i1571[54]
  i1570.m_lineSpacingMax = i1571[55]
  i1570.m_paragraphSpacing = i1571[56]
  i1570.m_charWidthMaxAdj = i1571[57]
  i1570.m_TextWrappingMode = i1571[58]
  i1570.m_wordWrappingRatios = i1571[59]
  i1570.m_overflowMode = i1571[60]
  request.r(i1571[61], i1571[62], 0, i1570, 'm_linkedTextComponent')
  request.r(i1571[63], i1571[64], 0, i1570, 'parentLinkedComponent')
  i1570.m_enableKerning = !!i1571[65]
  var i1577 = i1571[66]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(i1577[i + 0]);
  }
  i1570.m_ActiveFontFeatures = i1576
  i1570.m_enableExtraPadding = !!i1571[67]
  i1570.checkPaddingRequired = !!i1571[68]
  i1570.m_isRichText = !!i1571[69]
  i1570.m_parseCtrlCharacters = !!i1571[70]
  i1570.m_isOrthographic = !!i1571[71]
  i1570.m_isCullingEnabled = !!i1571[72]
  i1570.m_horizontalMapping = i1571[73]
  i1570.m_verticalMapping = i1571[74]
  i1570.m_uvLineOffset = i1571[75]
  i1570.m_geometrySortingOrder = i1571[76]
  i1570.m_IsTextObjectScaleStatic = !!i1571[77]
  i1570.m_VertexBufferAutoSizeReduction = !!i1571[78]
  i1570.m_useMaxVisibleDescender = !!i1571[79]
  i1570.m_pageToDisplay = i1571[80]
  i1570.m_margin = new pc.Vec4( i1571[81], i1571[82], i1571[83], i1571[84] )
  i1570.m_isUsingLegacyAnimationComponent = !!i1571[85]
  i1570.m_isVolumetricText = !!i1571[86]
  request.r(i1571[87], i1571[88], 0, i1570, 'm_Material')
  i1570.m_EmojiFallbackSupport = !!i1571[89]
  i1570.m_Maskable = !!i1571[90]
  i1570.m_Color = new pc.Color(i1571[91], i1571[92], i1571[93], i1571[94])
  i1570.m_RaycastTarget = !!i1571[95]
  i1570.m_RaycastPadding = new pc.Vec4( i1571[96], i1571[97], i1571[98], i1571[99] )
  return i1570
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.VertexGradient' )
  var i1581 = data
  i1580.topLeft = new pc.Color(i1581[0], i1581[1], i1581[2], i1581[3])
  i1580.topRight = new pc.Color(i1581[4], i1581[5], i1581[6], i1581[7])
  i1580.bottomLeft = new pc.Color(i1581[8], i1581[9], i1581[10], i1581[11])
  i1580.bottomRight = new pc.Color(i1581[12], i1581[13], i1581[14], i1581[15])
  return i1580
}

Deserializers["Box"] = function (request, data, root) {
  var i1584 = root || request.c( 'Box' )
  var i1585 = data
  i1584.OnTap = request.d('UnityEngine.Events.UnityEvent', i1585[0], i1584.OnTap)
  i1584.OnUnBox = request.d('UnityEngine.Events.UnityEvent', i1585[1], i1584.OnUnBox)
  return i1584
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'm_ObjectArgument')
  i1586.m_ObjectArgumentAssemblyTypeName = i1587[2]
  i1586.m_IntArgument = i1587[3]
  i1586.m_FloatArgument = i1587[4]
  i1586.m_StringArgument = i1587[5]
  i1586.m_BoolArgument = !!i1587[6]
  return i1586
}

Deserializers["ChangeImage"] = function (request, data, root) {
  var i1588 = root || request.c( 'ChangeImage' )
  var i1589 = data
  var i1591 = i1589[0]
  var i1590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 1, i1590, '')
  }
  i1588.sprites = i1590
  request.r(i1589[1], i1589[2], 0, i1588, 'image')
  i1588.currentIndex = i1589[3]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1595 = data
  i1594.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1595[0], i1594.main)
  i1594.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1595[1], i1594.colorBySpeed)
  i1594.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1595[2], i1594.colorOverLifetime)
  i1594.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1595[3], i1594.emission)
  i1594.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1595[4], i1594.rotationBySpeed)
  i1594.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1595[5], i1594.rotationOverLifetime)
  i1594.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1595[6], i1594.shape)
  i1594.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1595[7], i1594.sizeBySpeed)
  i1594.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1595[8], i1594.sizeOverLifetime)
  i1594.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1595[9], i1594.textureSheetAnimation)
  i1594.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1595[10], i1594.velocityOverLifetime)
  i1594.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1595[11], i1594.noise)
  i1594.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1595[12], i1594.inheritVelocity)
  i1594.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1595[13], i1594.forceOverLifetime)
  i1594.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1595[14], i1594.limitVelocityOverLifetime)
  i1594.useAutoRandomSeed = !!i1595[15]
  i1594.randomSeed = i1595[16]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1596 = root || new pc.ParticleSystemMain()
  var i1597 = data
  i1596.duration = i1597[0]
  i1596.loop = !!i1597[1]
  i1596.prewarm = !!i1597[2]
  i1596.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[3], i1596.startDelay)
  i1596.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[4], i1596.startLifetime)
  i1596.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[5], i1596.startSpeed)
  i1596.startSize3D = !!i1597[6]
  i1596.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[7], i1596.startSizeX)
  i1596.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[8], i1596.startSizeY)
  i1596.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[9], i1596.startSizeZ)
  i1596.startRotation3D = !!i1597[10]
  i1596.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[11], i1596.startRotationX)
  i1596.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[12], i1596.startRotationY)
  i1596.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[13], i1596.startRotationZ)
  i1596.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1597[14], i1596.startColor)
  i1596.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[15], i1596.gravityModifier)
  i1596.simulationSpace = i1597[16]
  request.r(i1597[17], i1597[18], 0, i1596, 'customSimulationSpace')
  i1596.simulationSpeed = i1597[19]
  i1596.useUnscaledTime = !!i1597[20]
  i1596.scalingMode = i1597[21]
  i1596.playOnAwake = !!i1597[22]
  i1596.maxParticles = i1597[23]
  i1596.emitterVelocityMode = i1597[24]
  i1596.stopAction = i1597[25]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1598 = root || new pc.MinMaxCurve()
  var i1599 = data
  i1598.mode = i1599[0]
  i1598.curveMin = new pc.AnimationCurve( { keys_flow: i1599[1] } )
  i1598.curveMax = new pc.AnimationCurve( { keys_flow: i1599[2] } )
  i1598.curveMultiplier = i1599[3]
  i1598.constantMin = i1599[4]
  i1598.constantMax = i1599[5]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1600 = root || new pc.MinMaxGradient()
  var i1601 = data
  i1600.mode = i1601[0]
  i1600.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1601[1], i1600.gradientMin)
  i1600.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1601[2], i1600.gradientMax)
  i1600.colorMin = new pc.Color(i1601[3], i1601[4], i1601[5], i1601[6])
  i1600.colorMax = new pc.Color(i1601[7], i1601[8], i1601[9], i1601[10])
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1603 = data
  i1602.mode = i1603[0]
  var i1605 = i1603[1]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1605[i + 0]) );
  }
  i1602.colorKeys = i1604
  var i1607 = i1603[2]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1607[i + 0]) );
  }
  i1602.alphaKeys = i1606
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1608 = root || new pc.ParticleSystemColorBySpeed()
  var i1609 = data
  i1608.enabled = !!i1609[0]
  i1608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1609[1], i1608.color)
  i1608.range = new pc.Vec2( i1609[2], i1609[3] )
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1613 = data
  i1612.color = new pc.Color(i1613[0], i1613[1], i1613[2], i1613[3])
  i1612.time = i1613[4]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1617 = data
  i1616.alpha = i1617[0]
  i1616.time = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1618 = root || new pc.ParticleSystemColorOverLifetime()
  var i1619 = data
  i1618.enabled = !!i1619[0]
  i1618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1619[1], i1618.color)
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1620 = root || new pc.ParticleSystemEmitter()
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[1], i1620.rateOverTime)
  i1620.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[2], i1620.rateOverDistance)
  var i1623 = i1621[3]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1623[i + 0]) );
  }
  i1620.bursts = i1622
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1626 = root || new pc.ParticleSystemBurst()
  var i1627 = data
  i1626.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1627[0], i1626.count)
  i1626.cycleCount = i1627[1]
  i1626.minCount = i1627[2]
  i1626.maxCount = i1627[3]
  i1626.repeatInterval = i1627[4]
  i1626.time = i1627[5]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1628 = root || new pc.ParticleSystemRotationBySpeed()
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[1], i1628.x)
  i1628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[2], i1628.y)
  i1628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[3], i1628.z)
  i1628.separateAxes = !!i1629[4]
  i1628.range = new pc.Vec2( i1629[5], i1629[6] )
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1630 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[1], i1630.x)
  i1630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[2], i1630.y)
  i1630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[3], i1630.z)
  i1630.separateAxes = !!i1631[4]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1632 = root || new pc.ParticleSystemShape()
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.shapeType = i1633[1]
  i1632.randomDirectionAmount = i1633[2]
  i1632.sphericalDirectionAmount = i1633[3]
  i1632.randomPositionAmount = i1633[4]
  i1632.alignToDirection = !!i1633[5]
  i1632.radius = i1633[6]
  i1632.radiusMode = i1633[7]
  i1632.radiusSpread = i1633[8]
  i1632.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[9], i1632.radiusSpeed)
  i1632.radiusThickness = i1633[10]
  i1632.angle = i1633[11]
  i1632.length = i1633[12]
  i1632.boxThickness = new pc.Vec3( i1633[13], i1633[14], i1633[15] )
  i1632.meshShapeType = i1633[16]
  request.r(i1633[17], i1633[18], 0, i1632, 'mesh')
  request.r(i1633[19], i1633[20], 0, i1632, 'meshRenderer')
  request.r(i1633[21], i1633[22], 0, i1632, 'skinnedMeshRenderer')
  i1632.useMeshMaterialIndex = !!i1633[23]
  i1632.meshMaterialIndex = i1633[24]
  i1632.useMeshColors = !!i1633[25]
  i1632.normalOffset = i1633[26]
  i1632.arc = i1633[27]
  i1632.arcMode = i1633[28]
  i1632.arcSpread = i1633[29]
  i1632.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[30], i1632.arcSpeed)
  i1632.donutRadius = i1633[31]
  i1632.position = new pc.Vec3( i1633[32], i1633[33], i1633[34] )
  i1632.rotation = new pc.Vec3( i1633[35], i1633[36], i1633[37] )
  i1632.scale = new pc.Vec3( i1633[38], i1633[39], i1633[40] )
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1634 = root || new pc.ParticleSystemSizeBySpeed()
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[1], i1634.x)
  i1634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[2], i1634.y)
  i1634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[3], i1634.z)
  i1634.separateAxes = !!i1635[4]
  i1634.range = new pc.Vec2( i1635[5], i1635[6] )
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1636 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[1], i1636.x)
  i1636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[2], i1636.y)
  i1636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[3], i1636.z)
  i1636.separateAxes = !!i1637[4]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1638 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1639 = data
  i1638.enabled = !!i1639[0]
  i1638.mode = i1639[1]
  i1638.animation = i1639[2]
  i1638.numTilesX = i1639[3]
  i1638.numTilesY = i1639[4]
  i1638.useRandomRow = !!i1639[5]
  i1638.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[6], i1638.frameOverTime)
  i1638.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[7], i1638.startFrame)
  i1638.cycleCount = i1639[8]
  i1638.rowIndex = i1639[9]
  i1638.flipU = i1639[10]
  i1638.flipV = i1639[11]
  i1638.spriteCount = i1639[12]
  var i1641 = i1639[13]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.sprites = i1640
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1645 = data
  i1644.enabled = !!i1645[0]
  i1644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[1], i1644.x)
  i1644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[2], i1644.y)
  i1644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[3], i1644.z)
  i1644.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[4], i1644.radial)
  i1644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[5], i1644.speedModifier)
  i1644.space = i1645[6]
  i1644.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[7], i1644.orbitalX)
  i1644.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[8], i1644.orbitalY)
  i1644.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[9], i1644.orbitalZ)
  i1644.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[10], i1644.orbitalOffsetX)
  i1644.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[11], i1644.orbitalOffsetY)
  i1644.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[12], i1644.orbitalOffsetZ)
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1646 = root || new pc.ParticleSystemNoise()
  var i1647 = data
  i1646.enabled = !!i1647[0]
  i1646.separateAxes = !!i1647[1]
  i1646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[2], i1646.strengthX)
  i1646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[3], i1646.strengthY)
  i1646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[4], i1646.strengthZ)
  i1646.frequency = i1647[5]
  i1646.damping = !!i1647[6]
  i1646.octaveCount = i1647[7]
  i1646.octaveMultiplier = i1647[8]
  i1646.octaveScale = i1647[9]
  i1646.quality = i1647[10]
  i1646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[11], i1646.scrollSpeed)
  i1646.scrollSpeedMultiplier = i1647[12]
  i1646.remapEnabled = !!i1647[13]
  i1646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[14], i1646.remapX)
  i1646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[15], i1646.remapY)
  i1646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[16], i1646.remapZ)
  i1646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[17], i1646.positionAmount)
  i1646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[18], i1646.rotationAmount)
  i1646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[19], i1646.sizeAmount)
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1648 = root || new pc.ParticleSystemInheritVelocity()
  var i1649 = data
  i1648.enabled = !!i1649[0]
  i1648.mode = i1649[1]
  i1648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[2], i1648.curve)
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1650 = root || new pc.ParticleSystemForceOverLifetime()
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[1], i1650.x)
  i1650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[2], i1650.y)
  i1650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[3], i1650.z)
  i1650.space = i1651[4]
  i1650.randomized = !!i1651[5]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1653 = data
  i1652.enabled = !!i1653[0]
  i1652.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[1], i1652.limit)
  i1652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[2], i1652.limitX)
  i1652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[3], i1652.limitY)
  i1652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[4], i1652.limitZ)
  i1652.dampen = i1653[5]
  i1652.separateAxes = !!i1653[6]
  i1652.space = i1653[7]
  i1652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[8], i1652.drag)
  i1652.multiplyDragByParticleSize = !!i1653[9]
  i1652.multiplyDragByParticleVelocity = !!i1653[10]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'mesh')
  i1654.meshCount = i1655[2]
  i1654.activeVertexStreamsCount = i1655[3]
  i1654.alignment = i1655[4]
  i1654.renderMode = i1655[5]
  i1654.sortMode = i1655[6]
  i1654.lengthScale = i1655[7]
  i1654.velocityScale = i1655[8]
  i1654.cameraVelocityScale = i1655[9]
  i1654.normalDirection = i1655[10]
  i1654.sortingFudge = i1655[11]
  i1654.minParticleSize = i1655[12]
  i1654.maxParticleSize = i1655[13]
  i1654.pivot = new pc.Vec3( i1655[14], i1655[15], i1655[16] )
  request.r(i1655[17], i1655[18], 0, i1654, 'trailMaterial')
  i1654.applyActiveColorSpace = !!i1655[19]
  i1654.enabled = !!i1655[20]
  request.r(i1655[21], i1655[22], 0, i1654, 'sharedMaterial')
  var i1657 = i1655[23]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.sharedMaterials = i1656
  i1654.receiveShadows = !!i1655[24]
  i1654.shadowCastingMode = i1655[25]
  i1654.sortingLayerID = i1655[26]
  i1654.sortingOrder = i1655[27]
  i1654.lightmapIndex = i1655[28]
  i1654.lightmapSceneIndex = i1655[29]
  i1654.lightmapScaleOffset = new pc.Vec4( i1655[30], i1655[31], i1655[32], i1655[33] )
  i1654.lightProbeUsage = i1655[34]
  i1654.reflectionProbeUsage = i1655[35]
  return i1654
}

Deserializers["Hand"] = function (request, data, root) {
  var i1658 = root || request.c( 'Hand' )
  var i1659 = data
  i1658.OnTap = request.d('UnityEngine.Events.UnityEvent', i1659[0], i1658.OnTap)
  return i1658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Button' )
  var i1661 = data
  i1660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1661[0], i1660.m_OnClick)
  i1660.m_Navigation = request.d('UnityEngine.UI.Navigation', i1661[1], i1660.m_Navigation)
  i1660.m_Transition = i1661[2]
  i1660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1661[3], i1660.m_Colors)
  i1660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1661[4], i1660.m_SpriteState)
  i1660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1661[5], i1660.m_AnimationTriggers)
  i1660.m_Interactable = !!i1661[6]
  request.r(i1661[7], i1661[8], 0, i1660, 'm_TargetGraphic')
  return i1660
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1663 = data
  i1662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1663[0], i1662.m_PersistentCalls)
  return i1662
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1665 = data
  i1664.m_Mode = i1665[0]
  i1664.m_WrapAround = !!i1665[1]
  request.r(i1665[2], i1665[3], 0, i1664, 'm_SelectOnUp')
  request.r(i1665[4], i1665[5], 0, i1664, 'm_SelectOnDown')
  request.r(i1665[6], i1665[7], 0, i1664, 'm_SelectOnLeft')
  request.r(i1665[8], i1665[9], 0, i1664, 'm_SelectOnRight')
  return i1664
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1667 = data
  i1666.m_NormalColor = new pc.Color(i1667[0], i1667[1], i1667[2], i1667[3])
  i1666.m_HighlightedColor = new pc.Color(i1667[4], i1667[5], i1667[6], i1667[7])
  i1666.m_PressedColor = new pc.Color(i1667[8], i1667[9], i1667[10], i1667[11])
  i1666.m_SelectedColor = new pc.Color(i1667[12], i1667[13], i1667[14], i1667[15])
  i1666.m_DisabledColor = new pc.Color(i1667[16], i1667[17], i1667[18], i1667[19])
  i1666.m_ColorMultiplier = i1667[20]
  i1666.m_FadeDuration = i1667[21]
  return i1666
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1669 = data
  request.r(i1669[0], i1669[1], 0, i1668, 'm_HighlightedSprite')
  request.r(i1669[2], i1669[3], 0, i1668, 'm_PressedSprite')
  request.r(i1669[4], i1669[5], 0, i1668, 'm_SelectedSprite')
  request.r(i1669[6], i1669[7], 0, i1668, 'm_DisabledSprite')
  return i1668
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1671 = data
  i1670.m_NormalTrigger = i1671[0]
  i1670.m_HighlightedTrigger = i1671[1]
  i1670.m_PressedTrigger = i1671[2]
  i1670.m_SelectedTrigger = i1671[3]
  i1670.m_DisabledTrigger = i1671[4]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'clip')
  request.r(i1673[2], i1673[3], 0, i1672, 'outputAudioMixerGroup')
  i1672.playOnAwake = !!i1673[4]
  i1672.loop = !!i1673[5]
  i1672.time = i1673[6]
  i1672.volume = i1673[7]
  i1672.pitch = i1673[8]
  i1672.enabled = !!i1673[9]
  return i1672
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1674 = root || request.c( 'LunaController' )
  var i1675 = data
  i1674.LimitTimePlay = !!i1675[0]
  i1674.TimePlay = i1675[1]
  i1674.LimitCountPlay = !!i1675[2]
  i1674.CountPlay = i1675[3]
  request.r(i1675[4], i1675[5], 0, i1674, 'BGM')
  i1674.FooterColor = new pc.Color(i1675[6], i1675[7], i1675[8], i1675[9])
  request.r(i1675[10], i1675[11], 0, i1674, 'BG1Texture')
  i1674.Title1Text = i1675[12]
  i1674.Title1TextColor = new pc.Color(i1675[13], i1675[14], i1675[15], i1675[16])
  request.r(i1675[17], i1675[18], 0, i1674, 'BG2Texture')
  i1674.Title2Text = i1675[19]
  i1674.Title2TextColor = new pc.Color(i1675[20], i1675[21], i1675[22], i1675[23])
  request.r(i1675[24], i1675[25], 0, i1674, 'musicSource')
  request.r(i1675[26], i1675[27], 0, i1674, 'footer')
  request.r(i1675[28], i1675[29], 0, i1674, 'BG1')
  request.r(i1675[30], i1675[31], 0, i1674, 'title1')
  request.r(i1675[32], i1675[33], 0, i1674, 'BG2')
  request.r(i1675[34], i1675[35], 0, i1674, 'title2')
  request.r(i1675[36], i1675[37], 0, i1674, 'endCard')
  var i1677 = i1675[38]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 1, i1676, '')
  }
  i1674.CTA = i1676
  i1674.count = i1675[39]
  return i1674
}

Deserializers["GameController"] = function (request, data, root) {
  var i1680 = root || request.c( 'GameController' )
  var i1681 = data
  i1680.OnTap = request.d('UnityEngine.Events.UnityEvent', i1681[0], i1680.OnTap)
  i1680.TapDone = request.d('UnityEngine.Events.UnityEvent', i1681[1], i1680.TapDone)
  i1680.tapCount = i1681[2]
  return i1680
}

Deserializers["InputController"] = function (request, data, root) {
  var i1682 = root || request.c( 'InputController' )
  var i1683 = data
  i1682.timeCD = i1683[0]
  i1682.time = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1685 = data
  i1684.ambientIntensity = i1685[0]
  i1684.reflectionIntensity = i1685[1]
  i1684.ambientMode = i1685[2]
  i1684.ambientLight = new pc.Color(i1685[3], i1685[4], i1685[5], i1685[6])
  i1684.ambientSkyColor = new pc.Color(i1685[7], i1685[8], i1685[9], i1685[10])
  i1684.ambientGroundColor = new pc.Color(i1685[11], i1685[12], i1685[13], i1685[14])
  i1684.ambientEquatorColor = new pc.Color(i1685[15], i1685[16], i1685[17], i1685[18])
  i1684.fogColor = new pc.Color(i1685[19], i1685[20], i1685[21], i1685[22])
  i1684.fogEndDistance = i1685[23]
  i1684.fogStartDistance = i1685[24]
  i1684.fogDensity = i1685[25]
  i1684.fog = !!i1685[26]
  request.r(i1685[27], i1685[28], 0, i1684, 'skybox')
  i1684.fogMode = i1685[29]
  var i1687 = i1685[30]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1687[i + 0]) );
  }
  i1684.lightmaps = i1686
  i1684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1685[31], i1684.lightProbes)
  i1684.lightmapsMode = i1685[32]
  i1684.mixedBakeMode = i1685[33]
  i1684.environmentLightingMode = i1685[34]
  i1684.ambientProbe = new pc.SphericalHarmonicsL2(i1685[35])
  request.r(i1685[36], i1685[37], 0, i1684, 'customReflection')
  request.r(i1685[38], i1685[39], 0, i1684, 'defaultReflection')
  i1684.defaultReflectionMode = i1685[40]
  i1684.defaultReflectionResolution = i1685[41]
  i1684.sunLightObjectId = i1685[42]
  i1684.pixelLightCount = i1685[43]
  i1684.defaultReflectionHDR = !!i1685[44]
  i1684.hasLightDataAsset = !!i1685[45]
  i1684.hasManualGenerate = !!i1685[46]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'lightmapColor')
  request.r(i1691[2], i1691[3], 0, i1690, 'lightmapDirection')
  request.r(i1691[4], i1691[5], 0, i1690, 'shadowMask')
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1692 = root || new UnityEngine.LightProbes()
  var i1693 = data
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1701 = data
  var i1703 = i1701[0]
  var i1702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1703[i + 0]));
  }
  i1700.ShaderCompilationErrors = i1702
  i1700.name = i1701[1]
  i1700.guid = i1701[2]
  var i1705 = i1701[3]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( i1705[i + 0] );
  }
  i1700.shaderDefinedKeywords = i1704
  var i1707 = i1701[4]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1707[i + 0]) );
  }
  i1700.passes = i1706
  var i1709 = i1701[5]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1709[i + 0]) );
  }
  i1700.usePasses = i1708
  var i1711 = i1701[6]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1711[i + 0]) );
  }
  i1700.defaultParameterValues = i1710
  request.r(i1701[7], i1701[8], 0, i1700, 'unityFallbackShader')
  i1700.readDepth = !!i1701[9]
  i1700.hasDepthOnlyPass = !!i1701[10]
  i1700.isCreatedByShaderGraph = !!i1701[11]
  i1700.disableBatching = !!i1701[12]
  i1700.compiled = !!i1701[13]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1715 = data
  i1714.shaderName = i1715[0]
  i1714.errorMessage = i1715[1]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1720 = root || new pc.UnityShaderPass()
  var i1721 = data
  i1720.id = i1721[0]
  i1720.subShaderIndex = i1721[1]
  i1720.name = i1721[2]
  i1720.passType = i1721[3]
  i1720.grabPassTextureName = i1721[4]
  i1720.usePass = !!i1721[5]
  i1720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[6], i1720.zTest)
  i1720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[7], i1720.zWrite)
  i1720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[8], i1720.culling)
  i1720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1721[9], i1720.blending)
  i1720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1721[10], i1720.alphaBlending)
  i1720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[11], i1720.colorWriteMask)
  i1720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[12], i1720.offsetUnits)
  i1720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[13], i1720.offsetFactor)
  i1720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[14], i1720.stencilRef)
  i1720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[15], i1720.stencilReadMask)
  i1720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1721[16], i1720.stencilWriteMask)
  i1720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1721[17], i1720.stencilOp)
  i1720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1721[18], i1720.stencilOpFront)
  i1720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1721[19], i1720.stencilOpBack)
  var i1723 = i1721[20]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1723[i + 0]) );
  }
  i1720.tags = i1722
  var i1725 = i1721[21]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1720.passDefinedKeywords = i1724
  var i1727 = i1721[22]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1727[i + 0]) );
  }
  i1720.passDefinedKeywordGroups = i1726
  var i1729 = i1721[23]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1729[i + 0]) );
  }
  i1720.variants = i1728
  var i1731 = i1721[24]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1731[i + 0]) );
  }
  i1720.excludedVariants = i1730
  i1720.hasDepthReader = !!i1721[25]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1733 = data
  i1732.val = i1733[0]
  i1732.name = i1733[1]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1735 = data
  i1734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[0], i1734.src)
  i1734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[1], i1734.dst)
  i1734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[2], i1734.op)
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1737 = data
  i1736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[0], i1736.pass)
  i1736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[1], i1736.fail)
  i1736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[2], i1736.zFail)
  i1736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1737[3], i1736.comp)
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.value = i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1745 = data
  var i1747 = i1745[0]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1744.keywords = i1746
  i1744.hasDiscard = !!i1745[1]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1751 = data
  i1750.passId = i1751[0]
  i1750.subShaderIndex = i1751[1]
  var i1753 = i1751[2]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1750.keywords = i1752
  i1750.vertexProgram = i1751[3]
  i1750.fragmentProgram = i1751[4]
  i1750.exportedForWebGl2 = !!i1751[5]
  i1750.readDepth = !!i1751[6]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'shader')
  i1756.pass = i1757[2]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1761 = data
  i1760.name = i1761[0]
  i1760.type = i1761[1]
  i1760.value = new pc.Vec4( i1761[2], i1761[3], i1761[4], i1761[5] )
  i1760.textureValue = i1761[6]
  i1760.shaderPropertyFlag = i1761[7]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1763 = data
  i1762.name = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'texture')
  i1762.aabb = i1763[3]
  i1762.vertices = i1763[4]
  i1762.triangles = i1763[5]
  i1762.textureRect = UnityEngine.Rect.MinMaxRect(i1763[6], i1763[7], i1763[8], i1763[9])
  i1762.packedRect = UnityEngine.Rect.MinMaxRect(i1763[10], i1763[11], i1763[12], i1763[13])
  i1762.border = new pc.Vec4( i1763[14], i1763[15], i1763[16], i1763[17] )
  i1762.transparency = i1763[18]
  i1762.bounds = i1763[19]
  i1762.pixelsPerUnit = i1763[20]
  i1762.textureWidth = i1763[21]
  i1762.textureHeight = i1763[22]
  i1762.nativeSize = new pc.Vec2( i1763[23], i1763[24] )
  i1762.pivot = new pc.Vec2( i1763[25], i1763[26] )
  i1762.textureRectOffset = new pc.Vec2( i1763[27], i1763[28] )
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1765 = data
  i1764.name = i1765[0]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.bytes64 = i1767[1]
  i1766.data = i1767[2]
  return i1766
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1768 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1769 = data
  i1768.normalStyle = i1769[0]
  i1768.normalSpacingOffset = i1769[1]
  i1768.boldStyle = i1769[2]
  i1768.boldSpacing = i1769[3]
  i1768.italicStyle = i1769[4]
  i1768.tabSize = i1769[5]
  request.r(i1769[6], i1769[7], 0, i1768, 'atlas')
  i1768.m_SourceFontFileGUID = i1769[8]
  i1768.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1769[9], i1768.m_CreationSettings)
  request.r(i1769[10], i1769[11], 0, i1768, 'm_SourceFontFile')
  i1768.m_SourceFontFilePath = i1769[12]
  i1768.m_AtlasPopulationMode = i1769[13]
  i1768.InternalDynamicOS = !!i1769[14]
  var i1771 = i1769[15]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('UnityEngine.TextCore.Glyph', i1771[i + 0]));
  }
  i1768.m_GlyphTable = i1770
  var i1773 = i1769[16]
  var i1772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.add(request.d('TMPro.TMP_Character', i1773[i + 0]));
  }
  i1768.m_CharacterTable = i1772
  var i1775 = i1769[17]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 2) {
  request.r(i1775[i + 0], i1775[i + 1], 2, i1774, '')
  }
  i1768.m_AtlasTextures = i1774
  i1768.m_AtlasTextureIndex = i1769[18]
  i1768.m_IsMultiAtlasTexturesEnabled = !!i1769[19]
  i1768.m_GetFontFeatures = !!i1769[20]
  i1768.m_ClearDynamicDataOnBuild = !!i1769[21]
  i1768.m_AtlasWidth = i1769[22]
  i1768.m_AtlasHeight = i1769[23]
  i1768.m_AtlasPadding = i1769[24]
  i1768.m_AtlasRenderMode = i1769[25]
  var i1777 = i1769[26]
  var i1776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.add(request.d('UnityEngine.TextCore.GlyphRect', i1777[i + 0]));
  }
  i1768.m_UsedGlyphRects = i1776
  var i1779 = i1769[27]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('UnityEngine.TextCore.GlyphRect', i1779[i + 0]));
  }
  i1768.m_FreeGlyphRects = i1778
  i1768.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1769[28], i1768.m_FontFeatureTable)
  i1768.m_ShouldReimportFontFeatures = !!i1769[29]
  var i1781 = i1769[30]
  var i1780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1781.length; i += 2) {
  request.r(i1781[i + 0], i1781[i + 1], 1, i1780, '')
  }
  i1768.m_FallbackFontAssetTable = i1780
  var i1783 = i1769[31]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('TMPro.TMP_FontWeightPair', i1783[i + 0]) );
  }
  i1768.m_FontWeightTable = i1782
  var i1785 = i1769[32]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('TMPro.TMP_FontWeightPair', i1785[i + 0]) );
  }
  i1768.fontWeights = i1784
  i1768.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1769[33], i1768.m_fontInfo)
  var i1787 = i1769[34]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.add(request.d('TMPro.TMP_Glyph', i1787[i + 0]));
  }
  i1768.m_glyphInfoList = i1786
  i1768.m_KerningTable = request.d('TMPro.KerningTable', i1769[35], i1768.m_KerningTable)
  var i1789 = i1769[36]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 1, i1788, '')
  }
  i1768.fallbackFontAssets = i1788
  i1768.m_Version = i1769[37]
  i1768.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1769[38], i1768.m_FaceInfo)
  request.r(i1769[39], i1769[40], 0, i1768, 'm_Material')
  return i1768
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1791 = data
  i1790.sourceFontFileName = i1791[0]
  i1790.sourceFontFileGUID = i1791[1]
  i1790.faceIndex = i1791[2]
  i1790.pointSizeSamplingMode = i1791[3]
  i1790.pointSize = i1791[4]
  i1790.padding = i1791[5]
  i1790.paddingMode = i1791[6]
  i1790.packingMode = i1791[7]
  i1790.atlasWidth = i1791[8]
  i1790.atlasHeight = i1791[9]
  i1790.characterSetSelectionMode = i1791[10]
  i1790.characterSequence = i1791[11]
  i1790.referencedFontAssetGUID = i1791[12]
  i1790.referencedTextAssetGUID = i1791[13]
  i1790.fontStyle = i1791[14]
  i1790.fontStyleModifier = i1791[15]
  i1790.renderMode = i1791[16]
  i1790.includeFontFeatures = !!i1791[17]
  return i1790
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1795 = data
  i1794.m_Index = i1795[0]
  i1794.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1795[1], i1794.m_Metrics)
  i1794.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1795[2], i1794.m_GlyphRect)
  i1794.m_Scale = i1795[3]
  i1794.m_AtlasIndex = i1795[4]
  i1794.m_ClassDefinitionType = i1795[5]
  return i1794
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1797 = data
  i1796.m_Width = i1797[0]
  i1796.m_Height = i1797[1]
  i1796.m_HorizontalBearingX = i1797[2]
  i1796.m_HorizontalBearingY = i1797[3]
  i1796.m_HorizontalAdvance = i1797[4]
  return i1796
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1799 = data
  i1798.m_X = i1799[0]
  i1798.m_Y = i1799[1]
  i1798.m_Width = i1799[2]
  i1798.m_Height = i1799[3]
  return i1798
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.TMP_Character' )
  var i1803 = data
  i1802.m_ElementType = i1803[0]
  i1802.m_Unicode = i1803[1]
  i1802.m_GlyphIndex = i1803[2]
  i1802.m_Scale = i1803[3]
  return i1802
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.add(request.d('TMPro.MultipleSubstitutionRecord', i1811[i + 0]));
  }
  i1808.m_MultipleSubstitutionRecords = i1810
  var i1813 = i1809[1]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.add(request.d('TMPro.LigatureSubstitutionRecord', i1813[i + 0]));
  }
  i1808.m_LigatureSubstitutionRecords = i1812
  var i1815 = i1809[2]
  var i1814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1815[i + 0]));
  }
  i1808.m_GlyphPairAdjustmentRecords = i1814
  var i1817 = i1809[3]
  var i1816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1817[i + 0]));
  }
  i1808.m_MarkToBaseAdjustmentRecords = i1816
  var i1819 = i1809[4]
  var i1818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1819[i + 0]));
  }
  i1808.m_MarkToMarkAdjustmentRecords = i1818
  return i1808
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1823 = data
  i1822.m_TargetGlyphID = i1823[0]
  i1822.m_SubstituteGlyphIDs = i1823[1]
  return i1822
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1827 = data
  i1826.m_ComponentGlyphIDs = i1827[0]
  i1826.m_LigatureGlyphID = i1827[1]
  return i1826
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1831 = data
  i1830.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1831[0], i1830.m_FirstAdjustmentRecord)
  i1830.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1831[1], i1830.m_SecondAdjustmentRecord)
  i1830.m_FeatureLookupFlags = i1831[2]
  return i1830
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1834 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1835 = data
  i1834.m_BaseGlyphID = i1835[0]
  i1834.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1835[1], i1834.m_BaseGlyphAnchorPoint)
  i1834.m_MarkGlyphID = i1835[2]
  i1834.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1835[3], i1834.m_MarkPositionAdjustment)
  return i1834
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1839 = data
  i1838.m_BaseMarkGlyphID = i1839[0]
  i1838.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1839[1], i1838.m_BaseMarkGlyphAnchorPoint)
  i1838.m_CombiningMarkGlyphID = i1839[2]
  i1838.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1839[3], i1838.m_CombiningMarkPositionAdjustment)
  return i1838
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1844 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'regularTypeface')
  request.r(i1845[2], i1845[3], 0, i1844, 'italicTypeface')
  return i1844
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1847 = data
  i1846.Name = i1847[0]
  i1846.PointSize = i1847[1]
  i1846.Scale = i1847[2]
  i1846.CharacterCount = i1847[3]
  i1846.LineHeight = i1847[4]
  i1846.Baseline = i1847[5]
  i1846.Ascender = i1847[6]
  i1846.CapHeight = i1847[7]
  i1846.Descender = i1847[8]
  i1846.CenterLine = i1847[9]
  i1846.SuperscriptOffset = i1847[10]
  i1846.SubscriptOffset = i1847[11]
  i1846.SubSize = i1847[12]
  i1846.Underline = i1847[13]
  i1846.UnderlineThickness = i1847[14]
  i1846.strikethrough = i1847[15]
  i1846.strikethroughThickness = i1847[16]
  i1846.TabWidth = i1847[17]
  i1846.Padding = i1847[18]
  i1846.AtlasWidth = i1847[19]
  i1846.AtlasHeight = i1847[20]
  return i1846
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1851 = data
  i1850.id = i1851[0]
  i1850.x = i1851[1]
  i1850.y = i1851[2]
  i1850.width = i1851[3]
  i1850.height = i1851[4]
  i1850.xOffset = i1851[5]
  i1850.yOffset = i1851[6]
  i1850.xAdvance = i1851[7]
  i1850.scale = i1851[8]
  return i1850
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1852 = root || request.c( 'TMPro.KerningTable' )
  var i1853 = data
  var i1855 = i1853[0]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('TMPro.KerningPair', i1855[i + 0]));
  }
  i1852.kerningPairs = i1854
  return i1852
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1858 = root || request.c( 'TMPro.KerningPair' )
  var i1859 = data
  i1858.xOffset = i1859[0]
  i1858.m_FirstGlyph = i1859[1]
  i1858.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1859[2], i1858.m_FirstGlyphAdjustments)
  i1858.m_SecondGlyph = i1859[3]
  i1858.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1859[4], i1858.m_SecondGlyphAdjustments)
  i1858.m_IgnoreSpacingAdjustments = !!i1859[5]
  return i1858
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1861 = data
  i1860.m_FaceIndex = i1861[0]
  i1860.m_FamilyName = i1861[1]
  i1860.m_StyleName = i1861[2]
  i1860.m_PointSize = i1861[3]
  i1860.m_Scale = i1861[4]
  i1860.m_UnitsPerEM = i1861[5]
  i1860.m_LineHeight = i1861[6]
  i1860.m_AscentLine = i1861[7]
  i1860.m_CapLine = i1861[8]
  i1860.m_MeanLine = i1861[9]
  i1860.m_Baseline = i1861[10]
  i1860.m_DescentLine = i1861[11]
  i1860.m_SuperscriptOffset = i1861[12]
  i1860.m_SuperscriptSize = i1861[13]
  i1860.m_SubscriptOffset = i1861[14]
  i1860.m_SubscriptSize = i1861[15]
  i1860.m_UnderlineOffset = i1861[16]
  i1860.m_UnderlineThickness = i1861[17]
  i1860.m_StrikethroughOffset = i1861[18]
  i1860.m_StrikethroughThickness = i1861[19]
  i1860.m_TabWidth = i1861[20]
  return i1860
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1863 = data
  i1862.useSafeMode = !!i1863[0]
  i1862.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1863[1], i1862.safeModeOptions)
  i1862.timeScale = i1863[2]
  i1862.unscaledTimeScale = i1863[3]
  i1862.useSmoothDeltaTime = !!i1863[4]
  i1862.maxSmoothUnscaledTime = i1863[5]
  i1862.rewindCallbackMode = i1863[6]
  i1862.showUnityEditorReport = !!i1863[7]
  i1862.logBehaviour = i1863[8]
  i1862.drawGizmos = !!i1863[9]
  i1862.defaultRecyclable = !!i1863[10]
  i1862.defaultAutoPlay = i1863[11]
  i1862.defaultUpdateType = i1863[12]
  i1862.defaultTimeScaleIndependent = !!i1863[13]
  i1862.defaultEaseType = i1863[14]
  i1862.defaultEaseOvershootOrAmplitude = i1863[15]
  i1862.defaultEasePeriod = i1863[16]
  i1862.defaultAutoKill = !!i1863[17]
  i1862.defaultLoopType = i1863[18]
  i1862.debugMode = !!i1863[19]
  i1862.debugStoreTargetId = !!i1863[20]
  i1862.showPreviewPanel = !!i1863[21]
  i1862.storeSettingsLocation = i1863[22]
  i1862.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1863[23], i1862.modules)
  i1862.createASMDEF = !!i1863[24]
  i1862.showPlayingTweens = !!i1863[25]
  i1862.showPausedTweens = !!i1863[26]
  return i1862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1865 = data
  i1864.logBehaviour = i1865[0]
  i1864.nestedTweenFailureBehaviour = i1865[1]
  return i1864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1867 = data
  i1866.showPanel = !!i1867[0]
  i1866.audioEnabled = !!i1867[1]
  i1866.physicsEnabled = !!i1867[2]
  i1866.physics2DEnabled = !!i1867[3]
  i1866.spriteEnabled = !!i1867[4]
  i1866.uiEnabled = !!i1867[5]
  i1866.textMeshProEnabled = !!i1867[6]
  i1866.tk2DEnabled = !!i1867[7]
  i1866.deAudioEnabled = !!i1867[8]
  i1866.deUnityExtendedEnabled = !!i1867[9]
  i1866.epoOutlineEnabled = !!i1867[10]
  return i1866
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1868 = root || request.c( 'TMPro.TMP_Settings' )
  var i1869 = data
  i1868.assetVersion = i1869[0]
  i1868.m_TextWrappingMode = i1869[1]
  i1868.m_enableKerning = !!i1869[2]
  var i1871 = i1869[3]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(i1871[i + 0]);
  }
  i1868.m_ActiveFontFeatures = i1870
  i1868.m_enableExtraPadding = !!i1869[4]
  i1868.m_enableTintAllSprites = !!i1869[5]
  i1868.m_enableParseEscapeCharacters = !!i1869[6]
  i1868.m_EnableRaycastTarget = !!i1869[7]
  i1868.m_GetFontFeaturesAtRuntime = !!i1869[8]
  i1868.m_missingGlyphCharacter = i1869[9]
  i1868.m_ClearDynamicDataOnBuild = !!i1869[10]
  i1868.m_warningsDisabled = !!i1869[11]
  request.r(i1869[12], i1869[13], 0, i1868, 'm_defaultFontAsset')
  i1868.m_defaultFontAssetPath = i1869[14]
  i1868.m_defaultFontSize = i1869[15]
  i1868.m_defaultAutoSizeMinRatio = i1869[16]
  i1868.m_defaultAutoSizeMaxRatio = i1869[17]
  i1868.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1869[18], i1869[19] )
  i1868.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1869[20], i1869[21] )
  i1868.m_autoSizeTextContainer = !!i1869[22]
  i1868.m_IsTextObjectScaleStatic = !!i1869[23]
  var i1873 = i1869[24]
  var i1872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 1, i1872, '')
  }
  i1868.m_fallbackFontAssets = i1872
  i1868.m_matchMaterialPreset = !!i1869[25]
  i1868.m_HideSubTextObjects = !!i1869[26]
  request.r(i1869[27], i1869[28], 0, i1868, 'm_defaultSpriteAsset')
  i1868.m_defaultSpriteAssetPath = i1869[29]
  i1868.m_enableEmojiSupport = !!i1869[30]
  i1868.m_MissingCharacterSpriteUnicode = i1869[31]
  var i1875 = i1869[32]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1875.length; i += 2) {
  request.r(i1875[i + 0], i1875[i + 1], 1, i1874, '')
  }
  i1868.m_EmojiFallbackTextAssets = i1874
  i1868.m_defaultColorGradientPresetsPath = i1869[33]
  request.r(i1869[34], i1869[35], 0, i1868, 'm_defaultStyleSheet')
  i1868.m_StyleSheetsResourcePath = i1869[36]
  request.r(i1869[37], i1869[38], 0, i1868, 'm_leadingCharacters')
  request.r(i1869[39], i1869[40], 0, i1868, 'm_followingCharacters')
  i1868.m_UseModernHangulLineBreakingRules = !!i1869[41]
  return i1868
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1879 = data
  var i1881 = i1879[0]
  var i1880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.add(request.d('TMPro.TMP_Style', i1881[i + 0]));
  }
  i1878.m_StyleList = i1880
  return i1878
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1884 = root || request.c( 'TMPro.TMP_Style' )
  var i1885 = data
  i1884.m_Name = i1885[0]
  i1884.m_HashCode = i1885[1]
  i1884.m_OpeningDefinition = i1885[2]
  i1884.m_ClosingDefinition = i1885[3]
  i1884.m_OpeningTagArray = i1885[4]
  i1884.m_ClosingTagArray = i1885[5]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1887 = data
  var i1889 = i1887[0]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1889[i + 0]) );
  }
  i1886.files = i1888
  i1886.componentToPrefabIds = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1893 = data
  i1892.path = i1893[0]
  request.r(i1893[1], i1893[2], 0, i1892, 'unityObject')
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1895 = data
  var i1897 = i1895[0]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1897[i + 0]) );
  }
  i1894.scriptsExecutionOrder = i1896
  var i1899 = i1895[1]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1899[i + 0]) );
  }
  i1894.sortingLayers = i1898
  var i1901 = i1895[2]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1901[i + 0]) );
  }
  i1894.cullingLayers = i1900
  i1894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1895[3], i1894.timeSettings)
  i1894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1895[4], i1894.physicsSettings)
  i1894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1895[5], i1894.physics2DSettings)
  i1894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1895[6], i1894.qualitySettings)
  i1894.enableRealtimeShadows = !!i1895[7]
  i1894.enableAutoInstancing = !!i1895[8]
  i1894.enableStaticBatching = !!i1895[9]
  i1894.enableDynamicBatching = !!i1895[10]
  i1894.usePreservativeDynamicBatching = !!i1895[11]
  i1894.lightmapEncodingQuality = i1895[12]
  i1894.desiredColorSpace = i1895[13]
  var i1903 = i1895[14]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( i1903[i + 0] );
  }
  i1894.allTags = i1902
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.value = i1907[1]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1911 = data
  i1910.id = i1911[0]
  i1910.name = i1911[1]
  i1910.value = i1911[2]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1915 = data
  i1914.id = i1915[0]
  i1914.name = i1915[1]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1917 = data
  i1916.fixedDeltaTime = i1917[0]
  i1916.maximumDeltaTime = i1917[1]
  i1916.timeScale = i1917[2]
  i1916.maximumParticleTimestep = i1917[3]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1919 = data
  i1918.gravity = new pc.Vec3( i1919[0], i1919[1], i1919[2] )
  i1918.defaultSolverIterations = i1919[3]
  i1918.bounceThreshold = i1919[4]
  i1918.autoSyncTransforms = !!i1919[5]
  i1918.autoSimulation = !!i1919[6]
  var i1921 = i1919[7]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1921[i + 0]) );
  }
  i1918.collisionMatrix = i1920
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.layerId = i1925[1]
  i1924.otherLayerId = i1925[2]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'material')
  i1926.gravity = new pc.Vec2( i1927[2], i1927[3] )
  i1926.positionIterations = i1927[4]
  i1926.velocityIterations = i1927[5]
  i1926.velocityThreshold = i1927[6]
  i1926.maxLinearCorrection = i1927[7]
  i1926.maxAngularCorrection = i1927[8]
  i1926.maxTranslationSpeed = i1927[9]
  i1926.maxRotationSpeed = i1927[10]
  i1926.baumgarteScale = i1927[11]
  i1926.baumgarteTOIScale = i1927[12]
  i1926.timeToSleep = i1927[13]
  i1926.linearSleepTolerance = i1927[14]
  i1926.angularSleepTolerance = i1927[15]
  i1926.defaultContactOffset = i1927[16]
  i1926.autoSimulation = !!i1927[17]
  i1926.queriesHitTriggers = !!i1927[18]
  i1926.queriesStartInColliders = !!i1927[19]
  i1926.callbacksOnDisable = !!i1927[20]
  i1926.reuseCollisionCallbacks = !!i1927[21]
  i1926.autoSyncTransforms = !!i1927[22]
  var i1929 = i1927[23]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1929[i + 0]) );
  }
  i1926.collisionMatrix = i1928
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.layerId = i1933[1]
  i1932.otherLayerId = i1933[2]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1935 = data
  var i1937 = i1935[0]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1937[i + 0]) );
  }
  i1934.qualityLevels = i1936
  var i1939 = i1935[1]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( i1939[i + 0] );
  }
  i1934.names = i1938
  i1934.shadows = i1935[2]
  i1934.anisotropicFiltering = i1935[3]
  i1934.antiAliasing = i1935[4]
  i1934.lodBias = i1935[5]
  i1934.shadowCascades = i1935[6]
  i1934.shadowDistance = i1935[7]
  i1934.shadowmaskMode = i1935[8]
  i1934.shadowProjection = i1935[9]
  i1934.shadowResolution = i1935[10]
  i1934.softParticles = !!i1935[11]
  i1934.softVegetation = !!i1935[12]
  i1934.activeColorSpace = i1935[13]
  i1934.desiredColorSpace = i1935[14]
  i1934.masterTextureLimit = i1935[15]
  i1934.maxQueuedFrames = i1935[16]
  i1934.particleRaycastBudget = i1935[17]
  i1934.pixelLightCount = i1935[18]
  i1934.realtimeReflectionProbes = !!i1935[19]
  i1934.shadowCascade2Split = i1935[20]
  i1934.shadowCascade4Split = new pc.Vec3( i1935[21], i1935[22], i1935[23] )
  i1934.streamingMipmapsActive = !!i1935[24]
  i1934.vSyncCount = i1935[25]
  i1934.asyncUploadBufferSize = i1935[26]
  i1934.asyncUploadTimeSlice = i1935[27]
  i1934.billboardsFaceCameraPosition = !!i1935[28]
  i1934.shadowNearPlaneOffset = i1935[29]
  i1934.streamingMipmapsMemoryBudget = i1935[30]
  i1934.maximumLODLevel = i1935[31]
  i1934.streamingMipmapsAddAllCameras = !!i1935[32]
  i1934.streamingMipmapsMaxLevelReduction = i1935[33]
  i1934.streamingMipmapsRenderersPerFrame = i1935[34]
  i1934.resolutionScalingFixedDPIFactor = i1935[35]
  i1934.streamingMipmapsMaxFileIORequests = i1935[36]
  i1934.currentQualityLevel = i1935[37]
  return i1934
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1943 = data
  i1942.m_GlyphIndex = i1943[0]
  i1942.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1943[1], i1942.m_GlyphValueRecord)
  return i1942
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1945 = data
  i1944.m_XCoordinate = i1945[0]
  i1944.m_YCoordinate = i1945[1]
  return i1944
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1947 = data
  i1946.m_XPositionAdjustment = i1947[0]
  i1946.m_YPositionAdjustment = i1947[1]
  return i1946
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1949 = data
  i1948.xPlacement = i1949[0]
  i1948.yPlacement = i1949[1]
  i1948.xAdvance = i1949[2]
  i1948.yAdvance = i1949[3]
  return i1948
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1951 = data
  i1950.m_XPlacement = i1951[0]
  i1950.m_YPlacement = i1951[1]
  i1950.m_XAdvance = i1951[2]
  i1950.m_YAdvance = i1951[3]
  return i1950
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[2],"69":[70],"71":[72],"73":[72],"8":[7],"74":[75],"76":[2],"77":[78],"79":[7],"80":[11,7],"81":[70],"82":[11,7],"83":[7],"84":[7],"85":[70,7],"18":[7,11],"86":[87],"88":[87],"89":[87],"90":[7],"91":[7],"10":[8],"14":[11,7],"13":[7],"9":[8],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[7],"12":[11,7],"101":[7],"102":[7],"103":[7],"104":[7],"105":[11,7],"106":[7],"107":[5],"108":[5],"6":[5],"109":[5],"110":[2],"111":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","Box","UnityEngine.ParticleSystem","ChangeImage","UnityEngine.GameObject","UnityEngine.ParticleSystemRenderer","Hand","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","LunaController","GameController","InputController","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SPS_V05";

Deserializers.lunaInitializationTime = "10/19/2026 08:18:30";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SPS_V05_TrangHTT";

Deserializers.lunaAppID = "42944";

Deserializers.projectId = "82f829cd5d66cab43a8e7b5fd2199144";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SPS_V05";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "905d72d0-e318-4c0b-8f4b-17a6113e9d20";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

