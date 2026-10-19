var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSpring' )
  var i477 = data
  i476.spring = i477[0]
  i476.damper = i477[1]
  i476.targetPosition = i477[2]
  return i476
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointMotor' )
  var i479 = data
  i478.m_TargetVelocity = i479[0]
  i478.m_Force = i479[1]
  i478.m_FreeSpin = i479[2]
  return i478
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointLimits' )
  var i481 = data
  i480.m_Min = i481[0]
  i480.m_Max = i481[1]
  i480.m_Bounciness = i481[2]
  i480.m_BounceMinVelocity = i481[3]
  i480.m_ContactDistance = i481[4]
  i480.minBounce = i481[5]
  i480.maxBounce = i481[6]
  return i480
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointDrive' )
  var i483 = data
  i482.m_PositionSpring = i483[0]
  i482.m_PositionDamper = i483[1]
  i482.m_MaximumForce = i483[2]
  i482.m_UseAcceleration = i483[3]
  return i482
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i485 = data
  i484.m_Spring = i485[0]
  i484.m_Damper = i485[1]
  return i484
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i487 = data
  i486.m_Limit = i487[0]
  i486.m_Bounciness = i487[1]
  i486.m_ContactDistance = i487[2]
  return i486
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i489 = data
  i488.m_ExtremumSlip = i489[0]
  i488.m_ExtremumValue = i489[1]
  i488.m_AsymptoteSlip = i489[2]
  i488.m_AsymptoteValue = i489[3]
  i488.m_Stiffness = i489[4]
  return i488
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i491 = data
  i490.m_LowerAngle = i491[0]
  i490.m_UpperAngle = i491[1]
  return i490
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i493 = data
  i492.m_MotorSpeed = i493[0]
  i492.m_MaximumMotorTorque = i493[1]
  return i492
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i495 = data
  i494.m_DampingRatio = i495[0]
  i494.m_Frequency = i495[1]
  i494.m_Angle = i495[2]
  return i494
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i497 = data
  i496.m_LowerTranslation = i497[0]
  i496.m_UpperTranslation = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i499 = data
  i498.name = i499[0]
  i498.width = i499[1]
  i498.height = i499[2]
  i498.mipmapCount = i499[3]
  i498.anisoLevel = i499[4]
  i498.filterMode = i499[5]
  i498.hdr = !!i499[6]
  i498.format = i499[7]
  i498.wrapMode = i499[8]
  i498.alphaIsTransparency = !!i499[9]
  i498.alphaSource = i499[10]
  i498.graphicsFormat = i499[11]
  i498.sRGBTexture = !!i499[12]
  i498.desiredColorSpace = i499[13]
  i498.wrapU = i499[14]
  i498.wrapV = i499[15]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i500 = root || new pc.UnityMaterial()
  var i501 = data
  i500.name = i501[0]
  request.r(i501[1], i501[2], 0, i500, 'shader')
  i500.renderQueue = i501[3]
  i500.enableInstancing = !!i501[4]
  var i503 = i501[5]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i503[i + 0]) );
  }
  i500.floatParameters = i502
  var i505 = i501[6]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i505[i + 0]) );
  }
  i500.colorParameters = i504
  var i507 = i501[7]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i507[i + 0]) );
  }
  i500.vectorParameters = i506
  var i509 = i501[8]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i509[i + 0]) );
  }
  i500.textureParameters = i508
  var i511 = i501[9]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i511[i + 0]) );
  }
  i500.materialFlags = i510
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Color(i519[1], i519[2], i519[3], i519[4])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = new pc.Vec4( i523[1], i523[2], i523[3], i523[4] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i527 = data
  i526.name = i527[0]
  request.r(i527[1], i527[2], 0, i526, 'value')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i531 = data
  i530.name = i531[0]
  i530.enabled = !!i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i533 = data
  i532.name = i533[0]
  i532.index = i533[1]
  i532.startup = !!i533[2]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i535 = data
  i534.aspect = i535[0]
  i534.orthographic = !!i535[1]
  i534.orthographicSize = i535[2]
  i534.backgroundColor = new pc.Color(i535[3], i535[4], i535[5], i535[6])
  i534.nearClipPlane = i535[7]
  i534.farClipPlane = i535[8]
  i534.fieldOfView = i535[9]
  i534.depth = i535[10]
  i534.clearFlags = i535[11]
  i534.cullingMask = i535[12]
  i534.rect = i535[13]
  request.r(i535[14], i535[15], 0, i534, 'targetTexture')
  i534.usePhysicalProperties = !!i535[16]
  i534.focalLength = i535[17]
  i534.sensorSize = new pc.Vec2( i535[18], i535[19] )
  i534.lensShift = new pc.Vec2( i535[20], i535[21] )
  i534.gateFit = i535[22]
  i534.commandBufferCount = i535[23]
  i534.cameraType = i535[24]
  i534.enabled = !!i535[25]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i537 = data
  i536.name = i537[0]
  i536.tagId = i537[1]
  i536.enabled = !!i537[2]
  i536.isStatic = !!i537[3]
  i536.layer = i537[4]
  return i536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_FirstSelected')
  i538.m_sendNavigationEvents = !!i539[2]
  i538.m_DragThreshold = i539[3]
  return i538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i541 = data
  i540.m_HorizontalAxis = i541[0]
  i540.m_VerticalAxis = i541[1]
  i540.m_SubmitButton = i541[2]
  i540.m_CancelButton = i541[3]
  i540.m_InputActionsPerSecond = i541[4]
  i540.m_RepeatDelay = i541[5]
  i540.m_ForceModuleActive = !!i541[6]
  i540.m_SendPointerHoverToParent = !!i541[7]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i543 = data
  i542.pivot = new pc.Vec2( i543[0], i543[1] )
  i542.anchorMin = new pc.Vec2( i543[2], i543[3] )
  i542.anchorMax = new pc.Vec2( i543[4], i543[5] )
  i542.sizeDelta = new pc.Vec2( i543[6], i543[7] )
  i542.anchoredPosition3D = new pc.Vec3( i543[8], i543[9], i543[10] )
  i542.rotation = new pc.Quat(i543[11], i543[12], i543[13], i543[14])
  i542.scale = new pc.Vec3( i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i545 = data
  i544.planeDistance = i545[0]
  i544.referencePixelsPerUnit = i545[1]
  i544.isFallbackOverlay = !!i545[2]
  i544.renderMode = i545[3]
  i544.renderOrder = i545[4]
  i544.sortingLayerName = i545[5]
  i544.sortingOrder = i545[6]
  i544.scaleFactor = i545[7]
  request.r(i545[8], i545[9], 0, i544, 'worldCamera')
  i544.overrideSorting = !!i545[10]
  i544.pixelPerfect = !!i545[11]
  i544.targetDisplay = i545[12]
  i544.overridePixelPerfect = !!i545[13]
  i544.enabled = !!i545[14]
  return i544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i547 = data
  i546.m_UiScaleMode = i547[0]
  i546.m_ReferencePixelsPerUnit = i547[1]
  i546.m_ScaleFactor = i547[2]
  i546.m_ReferenceResolution = new pc.Vec2( i547[3], i547[4] )
  i546.m_ScreenMatchMode = i547[5]
  i546.m_MatchWidthOrHeight = i547[6]
  i546.m_PhysicalUnit = i547[7]
  i546.m_FallbackScreenDPI = i547[8]
  i546.m_DefaultSpriteDPI = i547[9]
  i546.m_DynamicPixelsPerUnit = i547[10]
  i546.m_PresetInfoIsWorld = !!i547[11]
  return i546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i549 = data
  i548.m_IgnoreReversedGraphics = !!i549[0]
  i548.m_BlockingObjects = i549[1]
  i548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i549[2] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i551 = data
  i550.cullTransparentMesh = !!i551[0]
  return i550
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_Texture')
  i552.m_UVRect = UnityEngine.Rect.MinMaxRect(i553[2], i553[3], i553[4], i553[5])
  request.r(i553[6], i553[7], 0, i552, 'm_Material')
  i552.m_Maskable = !!i553[8]
  i552.m_Color = new pc.Color(i553[9], i553[10], i553[11], i553[12])
  i552.m_RaycastTarget = !!i553[13]
  i552.m_RaycastPadding = new pc.Vec4( i553[14], i553[15], i553[16], i553[17] )
  return i552
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i555 = data
  i554.m_AspectMode = i555[0]
  i554.m_AspectRatio = i555[1]
  return i554
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.Image' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_Sprite')
  i556.m_Type = i557[2]
  i556.m_PreserveAspect = !!i557[3]
  i556.m_FillCenter = !!i557[4]
  i556.m_FillMethod = i557[5]
  i556.m_FillAmount = i557[6]
  i556.m_FillClockwise = !!i557[7]
  i556.m_FillOrigin = i557[8]
  i556.m_UseSpriteMesh = !!i557[9]
  i556.m_PixelsPerUnitMultiplier = i557[10]
  request.r(i557[11], i557[12], 0, i556, 'm_Material')
  i556.m_Maskable = !!i557[13]
  i556.m_Color = new pc.Color(i557[14], i557[15], i557[16], i557[17])
  i556.m_RaycastTarget = !!i557[18]
  i556.m_RaycastPadding = new pc.Vec4( i557[19], i557[20], i557[21], i557[22] )
  return i556
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i558 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i559 = data
  i558.targetIsSelf = !!i559[0]
  request.r(i559[1], i559[2], 0, i558, 'targetGO')
  i558.tweenTargetIsTargetGO = !!i559[3]
  i558.delay = i559[4]
  i558.duration = i559[5]
  i558.easeType = i559[6]
  i558.easeCurve = new pc.AnimationCurve( { keys_flow: i559[7] } )
  i558.loopType = i559[8]
  i558.loops = i559[9]
  i558.id = i559[10]
  i558.isRelative = !!i559[11]
  i558.isFrom = !!i559[12]
  i558.isIndependentUpdate = !!i559[13]
  i558.autoKill = !!i559[14]
  i558.autoGenerate = !!i559[15]
  i558.isActive = !!i559[16]
  i558.isValid = !!i559[17]
  request.r(i559[18], i559[19], 0, i558, 'target')
  i558.animationType = i559[20]
  i558.targetType = i559[21]
  i558.forcedTargetType = i559[22]
  i558.autoPlay = !!i559[23]
  i558.useTargetAsV3 = !!i559[24]
  i558.endValueFloat = i559[25]
  i558.endValueV3 = new pc.Vec3( i559[26], i559[27], i559[28] )
  i558.endValueV2 = new pc.Vec2( i559[29], i559[30] )
  i558.endValueColor = new pc.Color(i559[31], i559[32], i559[33], i559[34])
  i558.endValueString = i559[35]
  i558.endValueRect = UnityEngine.Rect.MinMaxRect(i559[36], i559[37], i559[38], i559[39])
  request.r(i559[40], i559[41], 0, i558, 'endValueTransform')
  i558.optionalBool0 = !!i559[42]
  i558.optionalBool1 = !!i559[43]
  i558.optionalFloat0 = i559[44]
  i558.optionalInt0 = i559[45]
  i558.optionalRotationMode = i559[46]
  i558.optionalScrambleMode = i559[47]
  i558.optionalShakeRandomnessMode = i559[48]
  i558.optionalString = i559[49]
  i558.updateType = i559[50]
  i558.isSpeedBased = !!i559[51]
  i558.hasOnStart = !!i559[52]
  i558.hasOnPlay = !!i559[53]
  i558.hasOnUpdate = !!i559[54]
  i558.hasOnStepComplete = !!i559[55]
  i558.hasOnComplete = !!i559[56]
  i558.hasOnTweenCreated = !!i559[57]
  i558.hasOnRewind = !!i559[58]
  i558.onStart = request.d('UnityEngine.Events.UnityEvent', i559[59], i558.onStart)
  i558.onPlay = request.d('UnityEngine.Events.UnityEvent', i559[60], i558.onPlay)
  i558.onUpdate = request.d('UnityEngine.Events.UnityEvent', i559[61], i558.onUpdate)
  i558.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i559[62], i558.onStepComplete)
  i558.onComplete = request.d('UnityEngine.Events.UnityEvent', i559[63], i558.onComplete)
  i558.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i559[64], i558.onTweenCreated)
  i558.onRewind = request.d('UnityEngine.Events.UnityEvent', i559[65], i558.onRewind)
  return i558
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i561 = data
  i560.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i561[0], i560.m_PersistentCalls)
  return i560
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i563 = data
  var i565 = i563[0]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i565.length; i += 1) {
    i564.add(request.d('UnityEngine.Events.PersistentCall', i565[i + 0]));
  }
  i562.m_Calls = i564
  return i562
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_Target')
  i568.m_TargetAssemblyTypeName = i569[2]
  i568.m_MethodName = i569[3]
  i568.m_Mode = i569[4]
  i568.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i569[5], i568.m_Arguments)
  i568.m_CallState = i569[6]
  return i568
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i570 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i571 = data
  i570.m_hasFontAssetChanged = !!i571[0]
  request.r(i571[1], i571[2], 0, i570, 'm_baseMaterial')
  i570.m_maskOffset = new pc.Vec4( i571[3], i571[4], i571[5], i571[6] )
  i570.m_text = i571[7]
  i570.m_isRightToLeft = !!i571[8]
  request.r(i571[9], i571[10], 0, i570, 'm_fontAsset')
  request.r(i571[11], i571[12], 0, i570, 'm_sharedMaterial')
  var i573 = i571[13]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.m_fontSharedMaterials = i572
  request.r(i571[14], i571[15], 0, i570, 'm_fontMaterial')
  var i575 = i571[16]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i570.m_fontMaterials = i574
  i570.m_fontColor32 = UnityEngine.Color32.ConstructColor(i571[17], i571[18], i571[19], i571[20])
  i570.m_fontColor = new pc.Color(i571[21], i571[22], i571[23], i571[24])
  i570.m_enableVertexGradient = !!i571[25]
  i570.m_colorMode = i571[26]
  i570.m_fontColorGradient = request.d('TMPro.VertexGradient', i571[27], i570.m_fontColorGradient)
  request.r(i571[28], i571[29], 0, i570, 'm_fontColorGradientPreset')
  request.r(i571[30], i571[31], 0, i570, 'm_spriteAsset')
  i570.m_tintAllSprites = !!i571[32]
  request.r(i571[33], i571[34], 0, i570, 'm_StyleSheet')
  i570.m_TextStyleHashCode = i571[35]
  i570.m_overrideHtmlColors = !!i571[36]
  i570.m_faceColor = UnityEngine.Color32.ConstructColor(i571[37], i571[38], i571[39], i571[40])
  i570.m_fontSize = i571[41]
  i570.m_fontSizeBase = i571[42]
  i570.m_fontWeight = i571[43]
  i570.m_enableAutoSizing = !!i571[44]
  i570.m_fontSizeMin = i571[45]
  i570.m_fontSizeMax = i571[46]
  i570.m_fontStyle = i571[47]
  i570.m_HorizontalAlignment = i571[48]
  i570.m_VerticalAlignment = i571[49]
  i570.m_textAlignment = i571[50]
  i570.m_characterSpacing = i571[51]
  i570.m_characterHorizontalScale = i571[52]
  i570.m_wordSpacing = i571[53]
  i570.m_lineSpacing = i571[54]
  i570.m_lineSpacingMax = i571[55]
  i570.m_paragraphSpacing = i571[56]
  i570.m_charWidthMaxAdj = i571[57]
  i570.m_TextWrappingMode = i571[58]
  i570.m_wordWrappingRatios = i571[59]
  i570.m_overflowMode = i571[60]
  request.r(i571[61], i571[62], 0, i570, 'm_linkedTextComponent')
  request.r(i571[63], i571[64], 0, i570, 'parentLinkedComponent')
  i570.m_enableKerning = !!i571[65]
  var i577 = i571[66]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(i577[i + 0]);
  }
  i570.m_ActiveFontFeatures = i576
  i570.m_enableExtraPadding = !!i571[67]
  i570.checkPaddingRequired = !!i571[68]
  i570.m_isRichText = !!i571[69]
  i570.m_parseCtrlCharacters = !!i571[70]
  i570.m_isOrthographic = !!i571[71]
  i570.m_isCullingEnabled = !!i571[72]
  i570.m_horizontalMapping = i571[73]
  i570.m_verticalMapping = i571[74]
  i570.m_uvLineOffset = i571[75]
  i570.m_geometrySortingOrder = i571[76]
  i570.m_IsTextObjectScaleStatic = !!i571[77]
  i570.m_VertexBufferAutoSizeReduction = !!i571[78]
  i570.m_useMaxVisibleDescender = !!i571[79]
  i570.m_pageToDisplay = i571[80]
  i570.m_margin = new pc.Vec4( i571[81], i571[82], i571[83], i571[84] )
  i570.m_isUsingLegacyAnimationComponent = !!i571[85]
  i570.m_isVolumetricText = !!i571[86]
  request.r(i571[87], i571[88], 0, i570, 'm_Material')
  i570.m_EmojiFallbackSupport = !!i571[89]
  i570.m_Maskable = !!i571[90]
  i570.m_Color = new pc.Color(i571[91], i571[92], i571[93], i571[94])
  i570.m_RaycastTarget = !!i571[95]
  i570.m_RaycastPadding = new pc.Vec4( i571[96], i571[97], i571[98], i571[99] )
  return i570
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i580 = root || request.c( 'TMPro.VertexGradient' )
  var i581 = data
  i580.topLeft = new pc.Color(i581[0], i581[1], i581[2], i581[3])
  i580.topRight = new pc.Color(i581[4], i581[5], i581[6], i581[7])
  i580.bottomLeft = new pc.Color(i581[8], i581[9], i581[10], i581[11])
  i580.bottomRight = new pc.Color(i581[12], i581[13], i581[14], i581[15])
  return i580
}

Deserializers["Box"] = function (request, data, root) {
  var i584 = root || request.c( 'Box' )
  var i585 = data
  i584.OnTap = request.d('UnityEngine.Events.UnityEvent', i585[0], i584.OnTap)
  i584.OnUnBox = request.d('UnityEngine.Events.UnityEvent', i585[1], i584.OnUnBox)
  return i584
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_ObjectArgument')
  i586.m_ObjectArgumentAssemblyTypeName = i587[2]
  i586.m_IntArgument = i587[3]
  i586.m_FloatArgument = i587[4]
  i586.m_StringArgument = i587[5]
  i586.m_BoolArgument = !!i587[6]
  return i586
}

Deserializers["ChangeImage"] = function (request, data, root) {
  var i588 = root || request.c( 'ChangeImage' )
  var i589 = data
  var i591 = i589[0]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 1, i590, '')
  }
  i588.sprites = i590
  request.r(i589[1], i589[2], 0, i588, 'image')
  i588.currentIndex = i589[3]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i595 = data
  i594.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i595[0], i594.main)
  i594.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i595[1], i594.colorBySpeed)
  i594.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i595[2], i594.colorOverLifetime)
  i594.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i595[3], i594.emission)
  i594.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i595[4], i594.rotationBySpeed)
  i594.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i595[5], i594.rotationOverLifetime)
  i594.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i595[6], i594.shape)
  i594.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i595[7], i594.sizeBySpeed)
  i594.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i595[8], i594.sizeOverLifetime)
  i594.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i595[9], i594.textureSheetAnimation)
  i594.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i595[10], i594.velocityOverLifetime)
  i594.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i595[11], i594.noise)
  i594.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i595[12], i594.inheritVelocity)
  i594.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i595[13], i594.forceOverLifetime)
  i594.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i595[14], i594.limitVelocityOverLifetime)
  i594.useAutoRandomSeed = !!i595[15]
  i594.randomSeed = i595[16]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemMain()
  var i597 = data
  i596.duration = i597[0]
  i596.loop = !!i597[1]
  i596.prewarm = !!i597[2]
  i596.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.startDelay)
  i596.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[4], i596.startLifetime)
  i596.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[5], i596.startSpeed)
  i596.startSize3D = !!i597[6]
  i596.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.startSizeX)
  i596.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[8], i596.startSizeY)
  i596.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[9], i596.startSizeZ)
  i596.startRotation3D = !!i597[10]
  i596.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[11], i596.startRotationX)
  i596.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[12], i596.startRotationY)
  i596.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[13], i596.startRotationZ)
  i596.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i597[14], i596.startColor)
  i596.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[15], i596.gravityModifier)
  i596.simulationSpace = i597[16]
  request.r(i597[17], i597[18], 0, i596, 'customSimulationSpace')
  i596.simulationSpeed = i597[19]
  i596.useUnscaledTime = !!i597[20]
  i596.scalingMode = i597[21]
  i596.playOnAwake = !!i597[22]
  i596.maxParticles = i597[23]
  i596.emitterVelocityMode = i597[24]
  i596.stopAction = i597[25]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i598 = root || new pc.MinMaxCurve()
  var i599 = data
  i598.mode = i599[0]
  i598.curveMin = new pc.AnimationCurve( { keys_flow: i599[1] } )
  i598.curveMax = new pc.AnimationCurve( { keys_flow: i599[2] } )
  i598.curveMultiplier = i599[3]
  i598.constantMin = i599[4]
  i598.constantMax = i599[5]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i600 = root || new pc.MinMaxGradient()
  var i601 = data
  i600.mode = i601[0]
  i600.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i601[1], i600.gradientMin)
  i600.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i601[2], i600.gradientMax)
  i600.colorMin = new pc.Color(i601[3], i601[4], i601[5], i601[6])
  i600.colorMax = new pc.Color(i601[7], i601[8], i601[9], i601[10])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i603 = data
  i602.mode = i603[0]
  var i605 = i603[1]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i605[i + 0]) );
  }
  i602.colorKeys = i604
  var i607 = i603[2]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i607[i + 0]) );
  }
  i602.alphaKeys = i606
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemColorBySpeed()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i609[1], i608.color)
  i608.range = new pc.Vec2( i609[2], i609[3] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i613 = data
  i612.color = new pc.Color(i613[0], i613[1], i613[2], i613[3])
  i612.time = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i617 = data
  i616.alpha = i617[0]
  i616.time = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemColorOverLifetime()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[1], i618.color)
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemEmitter()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.rateOverTime)
  i620.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.rateOverDistance)
  var i623 = i621[3]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i623[i + 0]) );
  }
  i620.bursts = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemBurst()
  var i627 = data
  i626.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[0], i626.count)
  i626.cycleCount = i627[1]
  i626.minCount = i627[2]
  i626.maxCount = i627[3]
  i626.repeatInterval = i627[4]
  i626.time = i627[5]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemRotationBySpeed()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  i628.range = new pc.Vec2( i629[5], i629[6] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemRotationOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.separateAxes = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemShape()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.shapeType = i633[1]
  i632.randomDirectionAmount = i633[2]
  i632.sphericalDirectionAmount = i633[3]
  i632.randomPositionAmount = i633[4]
  i632.alignToDirection = !!i633[5]
  i632.radius = i633[6]
  i632.radiusMode = i633[7]
  i632.radiusSpread = i633[8]
  i632.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[9], i632.radiusSpeed)
  i632.radiusThickness = i633[10]
  i632.angle = i633[11]
  i632.length = i633[12]
  i632.boxThickness = new pc.Vec3( i633[13], i633[14], i633[15] )
  i632.meshShapeType = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'mesh')
  request.r(i633[19], i633[20], 0, i632, 'meshRenderer')
  request.r(i633[21], i633[22], 0, i632, 'skinnedMeshRenderer')
  i632.useMeshMaterialIndex = !!i633[23]
  i632.meshMaterialIndex = i633[24]
  i632.useMeshColors = !!i633[25]
  i632.normalOffset = i633[26]
  i632.arc = i633[27]
  i632.arcMode = i633[28]
  i632.arcSpread = i633[29]
  i632.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[30], i632.arcSpeed)
  i632.donutRadius = i633[31]
  i632.position = new pc.Vec3( i633[32], i633[33], i633[34] )
  i632.rotation = new pc.Vec3( i633[35], i633[36], i633[37] )
  i632.scale = new pc.Vec3( i633[38], i633[39], i633[40] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemSizeBySpeed()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  i634.range = new pc.Vec2( i635[5], i635[6] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemSizeOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.separateAxes = !!i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.mode = i639[1]
  i638.animation = i639[2]
  i638.numTilesX = i639[3]
  i638.numTilesY = i639[4]
  i638.useRandomRow = !!i639[5]
  i638.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[6], i638.frameOverTime)
  i638.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.startFrame)
  i638.cycleCount = i639[8]
  i638.rowIndex = i639[9]
  i638.flipU = i639[10]
  i638.flipV = i639[11]
  i638.spriteCount = i639[12]
  var i641 = i639[13]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.sprites = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[4], i644.radial)
  i644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[5], i644.speedModifier)
  i644.space = i645[6]
  i644.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[7], i644.orbitalX)
  i644.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[8], i644.orbitalY)
  i644.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[9], i644.orbitalZ)
  i644.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[10], i644.orbitalOffsetX)
  i644.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[11], i644.orbitalOffsetY)
  i644.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[12], i644.orbitalOffsetZ)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemNoise()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.separateAxes = !!i647[1]
  i646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.strengthX)
  i646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.strengthY)
  i646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[4], i646.strengthZ)
  i646.frequency = i647[5]
  i646.damping = !!i647[6]
  i646.octaveCount = i647[7]
  i646.octaveMultiplier = i647[8]
  i646.octaveScale = i647[9]
  i646.quality = i647[10]
  i646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[11], i646.scrollSpeed)
  i646.scrollSpeedMultiplier = i647[12]
  i646.remapEnabled = !!i647[13]
  i646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[14], i646.remapX)
  i646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[15], i646.remapY)
  i646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[16], i646.remapZ)
  i646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[17], i646.positionAmount)
  i646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[18], i646.rotationAmount)
  i646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[19], i646.sizeAmount)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemInheritVelocity()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.mode = i649[1]
  i648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.curve)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemForceOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.space = i651[4]
  i650.randomized = !!i651[5]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.limit)
  i652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.limitX)
  i652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.limitY)
  i652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[4], i652.limitZ)
  i652.dampen = i653[5]
  i652.separateAxes = !!i653[6]
  i652.space = i653[7]
  i652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[8], i652.drag)
  i652.multiplyDragByParticleSize = !!i653[9]
  i652.multiplyDragByParticleVelocity = !!i653[10]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'mesh')
  i654.meshCount = i655[2]
  i654.activeVertexStreamsCount = i655[3]
  i654.alignment = i655[4]
  i654.renderMode = i655[5]
  i654.sortMode = i655[6]
  i654.lengthScale = i655[7]
  i654.velocityScale = i655[8]
  i654.cameraVelocityScale = i655[9]
  i654.normalDirection = i655[10]
  i654.sortingFudge = i655[11]
  i654.minParticleSize = i655[12]
  i654.maxParticleSize = i655[13]
  i654.pivot = new pc.Vec3( i655[14], i655[15], i655[16] )
  request.r(i655[17], i655[18], 0, i654, 'trailMaterial')
  i654.applyActiveColorSpace = !!i655[19]
  i654.enabled = !!i655[20]
  request.r(i655[21], i655[22], 0, i654, 'sharedMaterial')
  var i657 = i655[23]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.sharedMaterials = i656
  i654.receiveShadows = !!i655[24]
  i654.shadowCastingMode = i655[25]
  i654.sortingLayerID = i655[26]
  i654.sortingOrder = i655[27]
  i654.lightmapIndex = i655[28]
  i654.lightmapSceneIndex = i655[29]
  i654.lightmapScaleOffset = new pc.Vec4( i655[30], i655[31], i655[32], i655[33] )
  i654.lightProbeUsage = i655[34]
  i654.reflectionProbeUsage = i655[35]
  return i654
}

Deserializers["Hand"] = function (request, data, root) {
  var i658 = root || request.c( 'Hand' )
  var i659 = data
  i658.OnTap = request.d('UnityEngine.Events.UnityEvent', i659[0], i658.OnTap)
  return i658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button' )
  var i661 = data
  i660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i661[0], i660.m_OnClick)
  i660.m_Navigation = request.d('UnityEngine.UI.Navigation', i661[1], i660.m_Navigation)
  i660.m_Transition = i661[2]
  i660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i661[3], i660.m_Colors)
  i660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i661[4], i660.m_SpriteState)
  i660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i661[5], i660.m_AnimationTriggers)
  i660.m_Interactable = !!i661[6]
  request.r(i661[7], i661[8], 0, i660, 'm_TargetGraphic')
  return i660
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i663 = data
  i662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i663[0], i662.m_PersistentCalls)
  return i662
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i665 = data
  i664.m_Mode = i665[0]
  i664.m_WrapAround = !!i665[1]
  request.r(i665[2], i665[3], 0, i664, 'm_SelectOnUp')
  request.r(i665[4], i665[5], 0, i664, 'm_SelectOnDown')
  request.r(i665[6], i665[7], 0, i664, 'm_SelectOnLeft')
  request.r(i665[8], i665[9], 0, i664, 'm_SelectOnRight')
  return i664
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i667 = data
  i666.m_NormalColor = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.m_HighlightedColor = new pc.Color(i667[4], i667[5], i667[6], i667[7])
  i666.m_PressedColor = new pc.Color(i667[8], i667[9], i667[10], i667[11])
  i666.m_SelectedColor = new pc.Color(i667[12], i667[13], i667[14], i667[15])
  i666.m_DisabledColor = new pc.Color(i667[16], i667[17], i667[18], i667[19])
  i666.m_ColorMultiplier = i667[20]
  i666.m_FadeDuration = i667[21]
  return i666
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_HighlightedSprite')
  request.r(i669[2], i669[3], 0, i668, 'm_PressedSprite')
  request.r(i669[4], i669[5], 0, i668, 'm_SelectedSprite')
  request.r(i669[6], i669[7], 0, i668, 'm_DisabledSprite')
  return i668
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i671 = data
  i670.m_NormalTrigger = i671[0]
  i670.m_HighlightedTrigger = i671[1]
  i670.m_PressedTrigger = i671[2]
  i670.m_SelectedTrigger = i671[3]
  i670.m_DisabledTrigger = i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'clip')
  request.r(i673[2], i673[3], 0, i672, 'outputAudioMixerGroup')
  i672.playOnAwake = !!i673[4]
  i672.loop = !!i673[5]
  i672.time = i673[6]
  i672.volume = i673[7]
  i672.pitch = i673[8]
  i672.enabled = !!i673[9]
  return i672
}

Deserializers["LunaController"] = function (request, data, root) {
  var i674 = root || request.c( 'LunaController' )
  var i675 = data
  i674.LimitTimePlay = !!i675[0]
  i674.TimePlay = i675[1]
  i674.LimitCountPlay = !!i675[2]
  i674.CountPlay = i675[3]
  request.r(i675[4], i675[5], 0, i674, 'BGM')
  i674.FooterColor = new pc.Color(i675[6], i675[7], i675[8], i675[9])
  request.r(i675[10], i675[11], 0, i674, 'BG1Texture')
  i674.Title1Text = i675[12]
  i674.Title1TextColor = new pc.Color(i675[13], i675[14], i675[15], i675[16])
  request.r(i675[17], i675[18], 0, i674, 'BG2Texture')
  i674.Title2Text = i675[19]
  i674.Title2TextColor = new pc.Color(i675[20], i675[21], i675[22], i675[23])
  request.r(i675[24], i675[25], 0, i674, 'musicSource')
  request.r(i675[26], i675[27], 0, i674, 'footer')
  request.r(i675[28], i675[29], 0, i674, 'BG1')
  request.r(i675[30], i675[31], 0, i674, 'title1')
  request.r(i675[32], i675[33], 0, i674, 'BG2')
  request.r(i675[34], i675[35], 0, i674, 'title2')
  request.r(i675[36], i675[37], 0, i674, 'endCard')
  var i677 = i675[38]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i674.CTA = i676
  i674.count = i675[39]
  return i674
}

Deserializers["GameController"] = function (request, data, root) {
  var i680 = root || request.c( 'GameController' )
  var i681 = data
  i680.OnTap = request.d('UnityEngine.Events.UnityEvent', i681[0], i680.OnTap)
  i680.TapDone = request.d('UnityEngine.Events.UnityEvent', i681[1], i680.TapDone)
  i680.tapCount = i681[2]
  return i680
}

Deserializers["InputController"] = function (request, data, root) {
  var i682 = root || request.c( 'InputController' )
  var i683 = data
  i682.timeCD = i683[0]
  i682.time = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i685 = data
  i684.ambientIntensity = i685[0]
  i684.reflectionIntensity = i685[1]
  i684.ambientMode = i685[2]
  i684.ambientLight = new pc.Color(i685[3], i685[4], i685[5], i685[6])
  i684.ambientSkyColor = new pc.Color(i685[7], i685[8], i685[9], i685[10])
  i684.ambientGroundColor = new pc.Color(i685[11], i685[12], i685[13], i685[14])
  i684.ambientEquatorColor = new pc.Color(i685[15], i685[16], i685[17], i685[18])
  i684.fogColor = new pc.Color(i685[19], i685[20], i685[21], i685[22])
  i684.fogEndDistance = i685[23]
  i684.fogStartDistance = i685[24]
  i684.fogDensity = i685[25]
  i684.fog = !!i685[26]
  request.r(i685[27], i685[28], 0, i684, 'skybox')
  i684.fogMode = i685[29]
  var i687 = i685[30]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i687[i + 0]) );
  }
  i684.lightmaps = i686
  i684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i685[31], i684.lightProbes)
  i684.lightmapsMode = i685[32]
  i684.mixedBakeMode = i685[33]
  i684.environmentLightingMode = i685[34]
  i684.ambientProbe = new pc.SphericalHarmonicsL2(i685[35])
  request.r(i685[36], i685[37], 0, i684, 'customReflection')
  request.r(i685[38], i685[39], 0, i684, 'defaultReflection')
  i684.defaultReflectionMode = i685[40]
  i684.defaultReflectionResolution = i685[41]
  i684.sunLightObjectId = i685[42]
  i684.pixelLightCount = i685[43]
  i684.defaultReflectionHDR = !!i685[44]
  i684.hasLightDataAsset = !!i685[45]
  i684.hasManualGenerate = !!i685[46]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'lightmapColor')
  request.r(i691[2], i691[3], 0, i690, 'lightmapDirection')
  request.r(i691[4], i691[5], 0, i690, 'shadowMask')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i692 = root || new UnityEngine.LightProbes()
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i703[i + 0]));
  }
  i700.ShaderCompilationErrors = i702
  i700.name = i701[1]
  i700.guid = i701[2]
  var i705 = i701[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.shaderDefinedKeywords = i704
  var i707 = i701[4]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i707[i + 0]) );
  }
  i700.passes = i706
  var i709 = i701[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i709[i + 0]) );
  }
  i700.usePasses = i708
  var i711 = i701[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i711[i + 0]) );
  }
  i700.defaultParameterValues = i710
  request.r(i701[7], i701[8], 0, i700, 'unityFallbackShader')
  i700.readDepth = !!i701[9]
  i700.hasDepthOnlyPass = !!i701[10]
  i700.isCreatedByShaderGraph = !!i701[11]
  i700.disableBatching = !!i701[12]
  i700.compiled = !!i701[13]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i715 = data
  i714.shaderName = i715[0]
  i714.errorMessage = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i720 = root || new pc.UnityShaderPass()
  var i721 = data
  i720.id = i721[0]
  i720.subShaderIndex = i721[1]
  i720.name = i721[2]
  i720.passType = i721[3]
  i720.grabPassTextureName = i721[4]
  i720.usePass = !!i721[5]
  i720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[6], i720.zTest)
  i720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[7], i720.zWrite)
  i720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[8], i720.culling)
  i720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[9], i720.blending)
  i720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[10], i720.alphaBlending)
  i720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[11], i720.colorWriteMask)
  i720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[12], i720.offsetUnits)
  i720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[13], i720.offsetFactor)
  i720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[14], i720.stencilRef)
  i720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[15], i720.stencilReadMask)
  i720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[16], i720.stencilWriteMask)
  i720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[17], i720.stencilOp)
  i720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[18], i720.stencilOpFront)
  i720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[19], i720.stencilOpBack)
  var i723 = i721[20]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i723[i + 0]) );
  }
  i720.tags = i722
  var i725 = i721[21]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.passDefinedKeywords = i724
  var i727 = i721[22]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i727[i + 0]) );
  }
  i720.passDefinedKeywordGroups = i726
  var i729 = i721[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i720.variants = i728
  var i731 = i721[24]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i731[i + 0]) );
  }
  i720.excludedVariants = i730
  i720.hasDepthReader = !!i721[25]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i733 = data
  i732.val = i733[0]
  i732.name = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i735 = data
  i734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.src)
  i734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.dst)
  i734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.op)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i737 = data
  i736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[0], i736.pass)
  i736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[1], i736.fail)
  i736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[2], i736.zFail)
  i736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[3], i736.comp)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.hasDiscard = !!i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i751 = data
  i750.passId = i751[0]
  i750.subShaderIndex = i751[1]
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.vertexProgram = i751[3]
  i750.fragmentProgram = i751[4]
  i750.exportedForWebGl2 = !!i751[5]
  i750.readDepth = !!i751[6]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'shader')
  i756.pass = i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i761 = data
  i760.name = i761[0]
  i760.type = i761[1]
  i760.value = new pc.Vec4( i761[2], i761[3], i761[4], i761[5] )
  i760.textureValue = i761[6]
  i760.shaderPropertyFlag = i761[7]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'texture')
  i762.aabb = i763[3]
  i762.vertices = i763[4]
  i762.triangles = i763[5]
  i762.textureRect = UnityEngine.Rect.MinMaxRect(i763[6], i763[7], i763[8], i763[9])
  i762.packedRect = UnityEngine.Rect.MinMaxRect(i763[10], i763[11], i763[12], i763[13])
  i762.border = new pc.Vec4( i763[14], i763[15], i763[16], i763[17] )
  i762.transparency = i763[18]
  i762.bounds = i763[19]
  i762.pixelsPerUnit = i763[20]
  i762.textureWidth = i763[21]
  i762.textureHeight = i763[22]
  i762.nativeSize = new pc.Vec2( i763[23], i763[24] )
  i762.pivot = new pc.Vec2( i763[25], i763[26] )
  i762.textureRectOffset = new pc.Vec2( i763[27], i763[28] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i765 = data
  i764.name = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i767 = data
  i766.name = i767[0]
  i766.bytes64 = i767[1]
  i766.data = i767[2]
  return i766
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i768 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i769 = data
  i768.normalStyle = i769[0]
  i768.normalSpacingOffset = i769[1]
  i768.boldStyle = i769[2]
  i768.boldSpacing = i769[3]
  i768.italicStyle = i769[4]
  i768.tabSize = i769[5]
  request.r(i769[6], i769[7], 0, i768, 'atlas')
  i768.m_SourceFontFileGUID = i769[8]
  i768.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i769[9], i768.m_CreationSettings)
  request.r(i769[10], i769[11], 0, i768, 'm_SourceFontFile')
  i768.m_SourceFontFilePath = i769[12]
  i768.m_AtlasPopulationMode = i769[13]
  i768.InternalDynamicOS = !!i769[14]
  var i771 = i769[15]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('UnityEngine.TextCore.Glyph', i771[i + 0]));
  }
  i768.m_GlyphTable = i770
  var i773 = i769[16]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('TMPro.TMP_Character', i773[i + 0]));
  }
  i768.m_CharacterTable = i772
  var i775 = i769[17]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i768.m_AtlasTextures = i774
  i768.m_AtlasTextureIndex = i769[18]
  i768.m_IsMultiAtlasTexturesEnabled = !!i769[19]
  i768.m_GetFontFeatures = !!i769[20]
  i768.m_ClearDynamicDataOnBuild = !!i769[21]
  i768.m_AtlasWidth = i769[22]
  i768.m_AtlasHeight = i769[23]
  i768.m_AtlasPadding = i769[24]
  i768.m_AtlasRenderMode = i769[25]
  var i777 = i769[26]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.TextCore.GlyphRect', i777[i + 0]));
  }
  i768.m_UsedGlyphRects = i776
  var i779 = i769[27]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.GlyphRect', i779[i + 0]));
  }
  i768.m_FreeGlyphRects = i778
  i768.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i769[28], i768.m_FontFeatureTable)
  i768.m_ShouldReimportFontFeatures = !!i769[29]
  var i781 = i769[30]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i768.m_FallbackFontAssetTable = i780
  var i783 = i769[31]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('TMPro.TMP_FontWeightPair', i783[i + 0]) );
  }
  i768.m_FontWeightTable = i782
  var i785 = i769[32]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('TMPro.TMP_FontWeightPair', i785[i + 0]) );
  }
  i768.fontWeights = i784
  i768.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i769[33], i768.m_fontInfo)
  var i787 = i769[34]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Glyph', i787[i + 0]));
  }
  i768.m_glyphInfoList = i786
  i768.m_KerningTable = request.d('TMPro.KerningTable', i769[35], i768.m_KerningTable)
  var i789 = i769[36]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i768.fallbackFontAssets = i788
  i768.m_Version = i769[37]
  i768.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i769[38], i768.m_FaceInfo)
  request.r(i769[39], i769[40], 0, i768, 'm_Material')
  return i768
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i791 = data
  i790.sourceFontFileName = i791[0]
  i790.sourceFontFileGUID = i791[1]
  i790.faceIndex = i791[2]
  i790.pointSizeSamplingMode = i791[3]
  i790.pointSize = i791[4]
  i790.padding = i791[5]
  i790.paddingMode = i791[6]
  i790.packingMode = i791[7]
  i790.atlasWidth = i791[8]
  i790.atlasHeight = i791[9]
  i790.characterSetSelectionMode = i791[10]
  i790.characterSequence = i791[11]
  i790.referencedFontAssetGUID = i791[12]
  i790.referencedTextAssetGUID = i791[13]
  i790.fontStyle = i791[14]
  i790.fontStyleModifier = i791[15]
  i790.renderMode = i791[16]
  i790.includeFontFeatures = !!i791[17]
  return i790
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i795 = data
  i794.m_Index = i795[0]
  i794.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i795[1], i794.m_Metrics)
  i794.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i795[2], i794.m_GlyphRect)
  i794.m_Scale = i795[3]
  i794.m_AtlasIndex = i795[4]
  i794.m_ClassDefinitionType = i795[5]
  return i794
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i797 = data
  i796.m_Width = i797[0]
  i796.m_Height = i797[1]
  i796.m_HorizontalBearingX = i797[2]
  i796.m_HorizontalBearingY = i797[3]
  i796.m_HorizontalAdvance = i797[4]
  return i796
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i799 = data
  i798.m_X = i799[0]
  i798.m_Y = i799[1]
  i798.m_Width = i799[2]
  i798.m_Height = i799[3]
  return i798
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_Character' )
  var i803 = data
  i802.m_ElementType = i803[0]
  i802.m_Unicode = i803[1]
  i802.m_GlyphIndex = i803[2]
  i802.m_Scale = i803[3]
  return i802
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i809 = data
  var i811 = i809[0]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.MultipleSubstitutionRecord', i811[i + 0]));
  }
  i808.m_MultipleSubstitutionRecords = i810
  var i813 = i809[1]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('TMPro.LigatureSubstitutionRecord', i813[i + 0]));
  }
  i808.m_LigatureSubstitutionRecords = i812
  var i815 = i809[2]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i815[i + 0]));
  }
  i808.m_GlyphPairAdjustmentRecords = i814
  var i817 = i809[3]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i817[i + 0]));
  }
  i808.m_MarkToBaseAdjustmentRecords = i816
  var i819 = i809[4]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i819[i + 0]));
  }
  i808.m_MarkToMarkAdjustmentRecords = i818
  return i808
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i823 = data
  i822.m_TargetGlyphID = i823[0]
  i822.m_SubstituteGlyphIDs = i823[1]
  return i822
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i827 = data
  i826.m_ComponentGlyphIDs = i827[0]
  i826.m_LigatureGlyphID = i827[1]
  return i826
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i831 = data
  i830.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i831[0], i830.m_FirstAdjustmentRecord)
  i830.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i831[1], i830.m_SecondAdjustmentRecord)
  i830.m_FeatureLookupFlags = i831[2]
  return i830
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i835 = data
  i834.m_BaseGlyphID = i835[0]
  i834.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i835[1], i834.m_BaseGlyphAnchorPoint)
  i834.m_MarkGlyphID = i835[2]
  i834.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i835[3], i834.m_MarkPositionAdjustment)
  return i834
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i839 = data
  i838.m_BaseMarkGlyphID = i839[0]
  i838.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i839[1], i838.m_BaseMarkGlyphAnchorPoint)
  i838.m_CombiningMarkGlyphID = i839[2]
  i838.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i839[3], i838.m_CombiningMarkPositionAdjustment)
  return i838
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'regularTypeface')
  request.r(i845[2], i845[3], 0, i844, 'italicTypeface')
  return i844
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i847 = data
  i846.Name = i847[0]
  i846.PointSize = i847[1]
  i846.Scale = i847[2]
  i846.CharacterCount = i847[3]
  i846.LineHeight = i847[4]
  i846.Baseline = i847[5]
  i846.Ascender = i847[6]
  i846.CapHeight = i847[7]
  i846.Descender = i847[8]
  i846.CenterLine = i847[9]
  i846.SuperscriptOffset = i847[10]
  i846.SubscriptOffset = i847[11]
  i846.SubSize = i847[12]
  i846.Underline = i847[13]
  i846.UnderlineThickness = i847[14]
  i846.strikethrough = i847[15]
  i846.strikethroughThickness = i847[16]
  i846.TabWidth = i847[17]
  i846.Padding = i847[18]
  i846.AtlasWidth = i847[19]
  i846.AtlasHeight = i847[20]
  return i846
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.TMP_Glyph' )
  var i851 = data
  i850.id = i851[0]
  i850.x = i851[1]
  i850.y = i851[2]
  i850.width = i851[3]
  i850.height = i851[4]
  i850.xOffset = i851[5]
  i850.yOffset = i851[6]
  i850.xAdvance = i851[7]
  i850.scale = i851[8]
  return i850
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.KerningTable' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.KerningPair', i855[i + 0]));
  }
  i852.kerningPairs = i854
  return i852
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.KerningPair' )
  var i859 = data
  i858.xOffset = i859[0]
  i858.m_FirstGlyph = i859[1]
  i858.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i859[2], i858.m_FirstGlyphAdjustments)
  i858.m_SecondGlyph = i859[3]
  i858.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i859[4], i858.m_SecondGlyphAdjustments)
  i858.m_IgnoreSpacingAdjustments = !!i859[5]
  return i858
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i861 = data
  i860.m_FaceIndex = i861[0]
  i860.m_FamilyName = i861[1]
  i860.m_StyleName = i861[2]
  i860.m_PointSize = i861[3]
  i860.m_Scale = i861[4]
  i860.m_UnitsPerEM = i861[5]
  i860.m_LineHeight = i861[6]
  i860.m_AscentLine = i861[7]
  i860.m_CapLine = i861[8]
  i860.m_MeanLine = i861[9]
  i860.m_Baseline = i861[10]
  i860.m_DescentLine = i861[11]
  i860.m_SuperscriptOffset = i861[12]
  i860.m_SuperscriptSize = i861[13]
  i860.m_SubscriptOffset = i861[14]
  i860.m_SubscriptSize = i861[15]
  i860.m_UnderlineOffset = i861[16]
  i860.m_UnderlineThickness = i861[17]
  i860.m_StrikethroughOffset = i861[18]
  i860.m_StrikethroughThickness = i861[19]
  i860.m_TabWidth = i861[20]
  return i860
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i863 = data
  i862.useSafeMode = !!i863[0]
  i862.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i863[1], i862.safeModeOptions)
  i862.timeScale = i863[2]
  i862.unscaledTimeScale = i863[3]
  i862.useSmoothDeltaTime = !!i863[4]
  i862.maxSmoothUnscaledTime = i863[5]
  i862.rewindCallbackMode = i863[6]
  i862.showUnityEditorReport = !!i863[7]
  i862.logBehaviour = i863[8]
  i862.drawGizmos = !!i863[9]
  i862.defaultRecyclable = !!i863[10]
  i862.defaultAutoPlay = i863[11]
  i862.defaultUpdateType = i863[12]
  i862.defaultTimeScaleIndependent = !!i863[13]
  i862.defaultEaseType = i863[14]
  i862.defaultEaseOvershootOrAmplitude = i863[15]
  i862.defaultEasePeriod = i863[16]
  i862.defaultAutoKill = !!i863[17]
  i862.defaultLoopType = i863[18]
  i862.debugMode = !!i863[19]
  i862.debugStoreTargetId = !!i863[20]
  i862.showPreviewPanel = !!i863[21]
  i862.storeSettingsLocation = i863[22]
  i862.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i863[23], i862.modules)
  i862.createASMDEF = !!i863[24]
  i862.showPlayingTweens = !!i863[25]
  i862.showPausedTweens = !!i863[26]
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i865 = data
  i864.logBehaviour = i865[0]
  i864.nestedTweenFailureBehaviour = i865[1]
  return i864
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i867 = data
  i866.showPanel = !!i867[0]
  i866.audioEnabled = !!i867[1]
  i866.physicsEnabled = !!i867[2]
  i866.physics2DEnabled = !!i867[3]
  i866.spriteEnabled = !!i867[4]
  i866.uiEnabled = !!i867[5]
  i866.textMeshProEnabled = !!i867[6]
  i866.tk2DEnabled = !!i867[7]
  i866.deAudioEnabled = !!i867[8]
  i866.deUnityExtendedEnabled = !!i867[9]
  i866.epoOutlineEnabled = !!i867[10]
  return i866
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_Settings' )
  var i869 = data
  i868.assetVersion = i869[0]
  i868.m_TextWrappingMode = i869[1]
  i868.m_enableKerning = !!i869[2]
  var i871 = i869[3]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(i871[i + 0]);
  }
  i868.m_ActiveFontFeatures = i870
  i868.m_enableExtraPadding = !!i869[4]
  i868.m_enableTintAllSprites = !!i869[5]
  i868.m_enableParseEscapeCharacters = !!i869[6]
  i868.m_EnableRaycastTarget = !!i869[7]
  i868.m_GetFontFeaturesAtRuntime = !!i869[8]
  i868.m_missingGlyphCharacter = i869[9]
  i868.m_ClearDynamicDataOnBuild = !!i869[10]
  i868.m_warningsDisabled = !!i869[11]
  request.r(i869[12], i869[13], 0, i868, 'm_defaultFontAsset')
  i868.m_defaultFontAssetPath = i869[14]
  i868.m_defaultFontSize = i869[15]
  i868.m_defaultAutoSizeMinRatio = i869[16]
  i868.m_defaultAutoSizeMaxRatio = i869[17]
  i868.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i869[18], i869[19] )
  i868.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i869[20], i869[21] )
  i868.m_autoSizeTextContainer = !!i869[22]
  i868.m_IsTextObjectScaleStatic = !!i869[23]
  var i873 = i869[24]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i868.m_fallbackFontAssets = i872
  i868.m_matchMaterialPreset = !!i869[25]
  i868.m_HideSubTextObjects = !!i869[26]
  request.r(i869[27], i869[28], 0, i868, 'm_defaultSpriteAsset')
  i868.m_defaultSpriteAssetPath = i869[29]
  i868.m_enableEmojiSupport = !!i869[30]
  i868.m_MissingCharacterSpriteUnicode = i869[31]
  var i875 = i869[32]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i868.m_EmojiFallbackTextAssets = i874
  i868.m_defaultColorGradientPresetsPath = i869[33]
  request.r(i869[34], i869[35], 0, i868, 'm_defaultStyleSheet')
  i868.m_StyleSheetsResourcePath = i869[36]
  request.r(i869[37], i869[38], 0, i868, 'm_leadingCharacters')
  request.r(i869[39], i869[40], 0, i868, 'm_followingCharacters')
  i868.m_UseModernHangulLineBreakingRules = !!i869[41]
  return i868
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i879 = data
  var i881 = i879[0]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Style', i881[i + 0]));
  }
  i878.m_StyleList = i880
  return i878
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_Style' )
  var i885 = data
  i884.m_Name = i885[0]
  i884.m_HashCode = i885[1]
  i884.m_OpeningDefinition = i885[2]
  i884.m_ClosingDefinition = i885[3]
  i884.m_OpeningTagArray = i885[4]
  i884.m_ClosingTagArray = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i889[i + 0]) );
  }
  i886.files = i888
  i886.componentToPrefabIds = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i893 = data
  i892.path = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'unityObject')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i897[i + 0]) );
  }
  i894.scriptsExecutionOrder = i896
  var i899 = i895[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i899[i + 0]) );
  }
  i894.sortingLayers = i898
  var i901 = i895[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i901[i + 0]) );
  }
  i894.cullingLayers = i900
  i894.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i895[3], i894.timeSettings)
  i894.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i895[4], i894.physicsSettings)
  i894.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i895[5], i894.physics2DSettings)
  i894.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[6], i894.qualitySettings)
  i894.enableRealtimeShadows = !!i895[7]
  i894.enableAutoInstancing = !!i895[8]
  i894.enableStaticBatching = !!i895[9]
  i894.enableDynamicBatching = !!i895[10]
  i894.usePreservativeDynamicBatching = !!i895[11]
  i894.lightmapEncodingQuality = i895[12]
  i894.desiredColorSpace = i895[13]
  var i903 = i895[14]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i894.allTags = i902
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i907 = data
  i906.name = i907[0]
  i906.value = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i911 = data
  i910.id = i911[0]
  i910.name = i911[1]
  i910.value = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i915 = data
  i914.id = i915[0]
  i914.name = i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i917 = data
  i916.fixedDeltaTime = i917[0]
  i916.maximumDeltaTime = i917[1]
  i916.timeScale = i917[2]
  i916.maximumParticleTimestep = i917[3]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i919 = data
  i918.gravity = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.defaultSolverIterations = i919[3]
  i918.bounceThreshold = i919[4]
  i918.autoSyncTransforms = !!i919[5]
  i918.autoSimulation = !!i919[6]
  var i921 = i919[7]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'material')
  i926.gravity = new pc.Vec2( i927[2], i927[3] )
  i926.positionIterations = i927[4]
  i926.velocityIterations = i927[5]
  i926.velocityThreshold = i927[6]
  i926.maxLinearCorrection = i927[7]
  i926.maxAngularCorrection = i927[8]
  i926.maxTranslationSpeed = i927[9]
  i926.maxRotationSpeed = i927[10]
  i926.baumgarteScale = i927[11]
  i926.baumgarteTOIScale = i927[12]
  i926.timeToSleep = i927[13]
  i926.linearSleepTolerance = i927[14]
  i926.angularSleepTolerance = i927[15]
  i926.defaultContactOffset = i927[16]
  i926.autoSimulation = !!i927[17]
  i926.queriesHitTriggers = !!i927[18]
  i926.queriesStartInColliders = !!i927[19]
  i926.callbacksOnDisable = !!i927[20]
  i926.reuseCollisionCallbacks = !!i927[21]
  i926.autoSyncTransforms = !!i927[22]
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i929[i + 0]) );
  }
  i926.collisionMatrix = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.layerId = i933[1]
  i932.otherLayerId = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i937[i + 0]) );
  }
  i934.qualityLevels = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.names = i938
  i934.shadows = i935[2]
  i934.anisotropicFiltering = i935[3]
  i934.antiAliasing = i935[4]
  i934.lodBias = i935[5]
  i934.shadowCascades = i935[6]
  i934.shadowDistance = i935[7]
  i934.shadowmaskMode = i935[8]
  i934.shadowProjection = i935[9]
  i934.shadowResolution = i935[10]
  i934.softParticles = !!i935[11]
  i934.softVegetation = !!i935[12]
  i934.activeColorSpace = i935[13]
  i934.desiredColorSpace = i935[14]
  i934.masterTextureLimit = i935[15]
  i934.maxQueuedFrames = i935[16]
  i934.particleRaycastBudget = i935[17]
  i934.pixelLightCount = i935[18]
  i934.realtimeReflectionProbes = !!i935[19]
  i934.shadowCascade2Split = i935[20]
  i934.shadowCascade4Split = new pc.Vec3( i935[21], i935[22], i935[23] )
  i934.streamingMipmapsActive = !!i935[24]
  i934.vSyncCount = i935[25]
  i934.asyncUploadBufferSize = i935[26]
  i934.asyncUploadTimeSlice = i935[27]
  i934.billboardsFaceCameraPosition = !!i935[28]
  i934.shadowNearPlaneOffset = i935[29]
  i934.streamingMipmapsMemoryBudget = i935[30]
  i934.maximumLODLevel = i935[31]
  i934.streamingMipmapsAddAllCameras = !!i935[32]
  i934.streamingMipmapsMaxLevelReduction = i935[33]
  i934.streamingMipmapsRenderersPerFrame = i935[34]
  i934.resolutionScalingFixedDPIFactor = i935[35]
  i934.streamingMipmapsMaxFileIORequests = i935[36]
  i934.currentQualityLevel = i935[37]
  return i934
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i943 = data
  i942.m_GlyphIndex = i943[0]
  i942.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i943[1], i942.m_GlyphValueRecord)
  return i942
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i945 = data
  i944.m_XCoordinate = i945[0]
  i944.m_YCoordinate = i945[1]
  return i944
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i947 = data
  i946.m_XPositionAdjustment = i947[0]
  i946.m_YPositionAdjustment = i947[1]
  return i946
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i949 = data
  i948.xPlacement = i949[0]
  i948.yPlacement = i949[1]
  i948.xAdvance = i949[2]
  i948.yAdvance = i949[3]
  return i948
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i951 = data
  i950.m_XPlacement = i951[0]
  i950.m_YPlacement = i951[1]
  i950.m_XAdvance = i951[2]
  i950.m_YAdvance = i951[3]
  return i950
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1768";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4242";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SPS_V05";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "de7098ba-61a4-43ff-a05c-93d269930505";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

