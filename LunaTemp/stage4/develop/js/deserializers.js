var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointSpring' )
  var i431 = data
  i430.spring = i431[0]
  i430.damper = i431[1]
  i430.targetPosition = i431[2]
  return i430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointMotor' )
  var i433 = data
  i432.m_TargetVelocity = i433[0]
  i432.m_Force = i433[1]
  i432.m_FreeSpin = i433[2]
  return i432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointLimits' )
  var i435 = data
  i434.m_Min = i435[0]
  i434.m_Max = i435[1]
  i434.m_Bounciness = i435[2]
  i434.m_BounceMinVelocity = i435[3]
  i434.m_ContactDistance = i435[4]
  i434.minBounce = i435[5]
  i434.maxBounce = i435[6]
  return i434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointDrive' )
  var i437 = data
  i436.m_PositionSpring = i437[0]
  i436.m_PositionDamper = i437[1]
  i436.m_MaximumForce = i437[2]
  i436.m_UseAcceleration = i437[3]
  return i436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i439 = data
  i438.m_Spring = i439[0]
  i438.m_Damper = i439[1]
  return i438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i441 = data
  i440.m_Limit = i441[0]
  i440.m_Bounciness = i441[1]
  i440.m_ContactDistance = i441[2]
  return i440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i443 = data
  i442.m_ExtremumSlip = i443[0]
  i442.m_ExtremumValue = i443[1]
  i442.m_AsymptoteSlip = i443[2]
  i442.m_AsymptoteValue = i443[3]
  i442.m_Stiffness = i443[4]
  return i442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i445 = data
  i444.m_LowerAngle = i445[0]
  i444.m_UpperAngle = i445[1]
  return i444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i447 = data
  i446.m_MotorSpeed = i447[0]
  i446.m_MaximumMotorTorque = i447[1]
  return i446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i449 = data
  i448.m_DampingRatio = i449[0]
  i448.m_Frequency = i449[1]
  i448.m_Angle = i449[2]
  return i448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i451 = data
  i450.m_LowerTranslation = i451[0]
  i450.m_UpperTranslation = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i453 = data
  i452.name = i453[0]
  i452.width = i453[1]
  i452.height = i453[2]
  i452.mipmapCount = i453[3]
  i452.anisoLevel = i453[4]
  i452.filterMode = i453[5]
  i452.hdr = !!i453[6]
  i452.format = i453[7]
  i452.wrapMode = i453[8]
  i452.alphaIsTransparency = !!i453[9]
  i452.alphaSource = i453[10]
  i452.graphicsFormat = i453[11]
  i452.sRGBTexture = !!i453[12]
  i452.desiredColorSpace = i453[13]
  i452.wrapU = i453[14]
  i452.wrapV = i453[15]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i454 = root || new pc.UnityMaterial()
  var i455 = data
  i454.name = i455[0]
  request.r(i455[1], i455[2], 0, i454, 'shader')
  i454.renderQueue = i455[3]
  i454.enableInstancing = !!i455[4]
  var i457 = i455[5]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i457[i + 0]) );
  }
  i454.floatParameters = i456
  var i459 = i455[6]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i459[i + 0]) );
  }
  i454.colorParameters = i458
  var i461 = i455[7]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i461[i + 0]) );
  }
  i454.vectorParameters = i460
  var i463 = i455[8]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i463[i + 0]) );
  }
  i454.textureParameters = i462
  var i465 = i455[9]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i465[i + 0]) );
  }
  i454.materialFlags = i464
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Color(i473[1], i473[2], i473[3], i473[4])
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = new pc.Vec4( i477[1], i477[2], i477[3], i477[4] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'value')
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i485 = data
  i484.name = i485[0]
  i484.enabled = !!i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i487 = data
  i486.name = i487[0]
  i486.index = i487[1]
  i486.startup = !!i487[2]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i489 = data
  i488.aspect = i489[0]
  i488.orthographic = !!i489[1]
  i488.orthographicSize = i489[2]
  i488.backgroundColor = new pc.Color(i489[3], i489[4], i489[5], i489[6])
  i488.nearClipPlane = i489[7]
  i488.farClipPlane = i489[8]
  i488.fieldOfView = i489[9]
  i488.depth = i489[10]
  i488.clearFlags = i489[11]
  i488.cullingMask = i489[12]
  i488.rect = i489[13]
  request.r(i489[14], i489[15], 0, i488, 'targetTexture')
  i488.usePhysicalProperties = !!i489[16]
  i488.focalLength = i489[17]
  i488.sensorSize = new pc.Vec2( i489[18], i489[19] )
  i488.lensShift = new pc.Vec2( i489[20], i489[21] )
  i488.gateFit = i489[22]
  i488.commandBufferCount = i489[23]
  i488.cameraType = i489[24]
  i488.enabled = !!i489[25]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i491 = data
  i490.name = i491[0]
  i490.tagId = i491[1]
  i490.enabled = !!i491[2]
  i490.isStatic = !!i491[3]
  i490.layer = i491[4]
  return i490
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'm_FirstSelected')
  i492.m_sendNavigationEvents = !!i493[2]
  i492.m_DragThreshold = i493[3]
  return i492
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i495 = data
  i494.m_HorizontalAxis = i495[0]
  i494.m_VerticalAxis = i495[1]
  i494.m_SubmitButton = i495[2]
  i494.m_CancelButton = i495[3]
  i494.m_InputActionsPerSecond = i495[4]
  i494.m_RepeatDelay = i495[5]
  i494.m_ForceModuleActive = !!i495[6]
  i494.m_SendPointerHoverToParent = !!i495[7]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i497 = data
  i496.pivot = new pc.Vec2( i497[0], i497[1] )
  i496.anchorMin = new pc.Vec2( i497[2], i497[3] )
  i496.anchorMax = new pc.Vec2( i497[4], i497[5] )
  i496.sizeDelta = new pc.Vec2( i497[6], i497[7] )
  i496.anchoredPosition3D = new pc.Vec3( i497[8], i497[9], i497[10] )
  i496.rotation = new pc.Quat(i497[11], i497[12], i497[13], i497[14])
  i496.scale = new pc.Vec3( i497[15], i497[16], i497[17] )
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i499 = data
  i498.planeDistance = i499[0]
  i498.referencePixelsPerUnit = i499[1]
  i498.isFallbackOverlay = !!i499[2]
  i498.renderMode = i499[3]
  i498.renderOrder = i499[4]
  i498.sortingLayerName = i499[5]
  i498.sortingOrder = i499[6]
  i498.scaleFactor = i499[7]
  request.r(i499[8], i499[9], 0, i498, 'worldCamera')
  i498.overrideSorting = !!i499[10]
  i498.pixelPerfect = !!i499[11]
  i498.targetDisplay = i499[12]
  i498.overridePixelPerfect = !!i499[13]
  i498.enabled = !!i499[14]
  return i498
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i501 = data
  i500.m_UiScaleMode = i501[0]
  i500.m_ReferencePixelsPerUnit = i501[1]
  i500.m_ScaleFactor = i501[2]
  i500.m_ReferenceResolution = new pc.Vec2( i501[3], i501[4] )
  i500.m_ScreenMatchMode = i501[5]
  i500.m_MatchWidthOrHeight = i501[6]
  i500.m_PhysicalUnit = i501[7]
  i500.m_FallbackScreenDPI = i501[8]
  i500.m_DefaultSpriteDPI = i501[9]
  i500.m_DynamicPixelsPerUnit = i501[10]
  i500.m_PresetInfoIsWorld = !!i501[11]
  return i500
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i503 = data
  i502.m_IgnoreReversedGraphics = !!i503[0]
  i502.m_BlockingObjects = i503[1]
  i502.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i503[2] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i505 = data
  i504.cullTransparentMesh = !!i505[0]
  return i504
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Texture')
  i506.m_UVRect = UnityEngine.Rect.MinMaxRect(i507[2], i507[3], i507[4], i507[5])
  request.r(i507[6], i507[7], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[8]
  i506.m_Color = new pc.Color(i507[9], i507[10], i507[11], i507[12])
  i506.m_RaycastTarget = !!i507[13]
  i506.m_RaycastPadding = new pc.Vec4( i507[14], i507[15], i507[16], i507[17] )
  return i506
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Image' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Sprite')
  i508.m_Type = i509[2]
  i508.m_PreserveAspect = !!i509[3]
  i508.m_FillCenter = !!i509[4]
  i508.m_FillMethod = i509[5]
  i508.m_FillAmount = i509[6]
  i508.m_FillClockwise = !!i509[7]
  i508.m_FillOrigin = i509[8]
  i508.m_UseSpriteMesh = !!i509[9]
  i508.m_PixelsPerUnitMultiplier = i509[10]
  request.r(i509[11], i509[12], 0, i508, 'm_Material')
  i508.m_Maskable = !!i509[13]
  i508.m_Color = new pc.Color(i509[14], i509[15], i509[16], i509[17])
  i508.m_RaycastTarget = !!i509[18]
  i508.m_RaycastPadding = new pc.Vec4( i509[19], i509[20], i509[21], i509[22] )
  return i508
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_Content')
  i510.m_Horizontal = !!i511[2]
  i510.m_Vertical = !!i511[3]
  i510.m_MovementType = i511[4]
  i510.m_Elasticity = i511[5]
  i510.m_Inertia = !!i511[6]
  i510.m_DecelerationRate = i511[7]
  i510.m_ScrollSensitivity = i511[8]
  request.r(i511[9], i511[10], 0, i510, 'm_Viewport')
  request.r(i511[11], i511[12], 0, i510, 'm_HorizontalScrollbar')
  request.r(i511[13], i511[14], 0, i510, 'm_VerticalScrollbar')
  i510.m_HorizontalScrollbarVisibility = i511[15]
  i510.m_VerticalScrollbarVisibility = i511[16]
  i510.m_HorizontalScrollbarSpacing = i511[17]
  i510.m_VerticalScrollbarSpacing = i511[18]
  i510.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i511[19], i510.m_OnValueChanged)
  return i510
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i513 = data
  i512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i513[0], i512.m_PersistentCalls)
  return i512
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i515 = data
  var i517 = i515[0]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(request.d('UnityEngine.Events.PersistentCall', i517[i + 0]));
  }
  i514.m_Calls = i516
  return i514
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_Target')
  i520.m_TargetAssemblyTypeName = i521[2]
  i520.m_MethodName = i521[3]
  i520.m_Mode = i521[4]
  i520.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i521[5], i520.m_Arguments)
  i520.m_CallState = i521[6]
  return i520
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i522 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i523 = data
  i522.m_hasFontAssetChanged = !!i523[0]
  request.r(i523[1], i523[2], 0, i522, 'm_baseMaterial')
  i522.m_maskOffset = new pc.Vec4( i523[3], i523[4], i523[5], i523[6] )
  i522.m_text = i523[7]
  i522.m_isRightToLeft = !!i523[8]
  request.r(i523[9], i523[10], 0, i522, 'm_fontAsset')
  request.r(i523[11], i523[12], 0, i522, 'm_sharedMaterial')
  var i525 = i523[13]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.m_fontSharedMaterials = i524
  request.r(i523[14], i523[15], 0, i522, 'm_fontMaterial')
  var i527 = i523[16]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i522.m_fontMaterials = i526
  i522.m_fontColor32 = UnityEngine.Color32.ConstructColor(i523[17], i523[18], i523[19], i523[20])
  i522.m_fontColor = new pc.Color(i523[21], i523[22], i523[23], i523[24])
  i522.m_enableVertexGradient = !!i523[25]
  i522.m_colorMode = i523[26]
  i522.m_fontColorGradient = request.d('TMPro.VertexGradient', i523[27], i522.m_fontColorGradient)
  request.r(i523[28], i523[29], 0, i522, 'm_fontColorGradientPreset')
  request.r(i523[30], i523[31], 0, i522, 'm_spriteAsset')
  i522.m_tintAllSprites = !!i523[32]
  request.r(i523[33], i523[34], 0, i522, 'm_StyleSheet')
  i522.m_TextStyleHashCode = i523[35]
  i522.m_overrideHtmlColors = !!i523[36]
  i522.m_faceColor = UnityEngine.Color32.ConstructColor(i523[37], i523[38], i523[39], i523[40])
  i522.m_fontSize = i523[41]
  i522.m_fontSizeBase = i523[42]
  i522.m_fontWeight = i523[43]
  i522.m_enableAutoSizing = !!i523[44]
  i522.m_fontSizeMin = i523[45]
  i522.m_fontSizeMax = i523[46]
  i522.m_fontStyle = i523[47]
  i522.m_HorizontalAlignment = i523[48]
  i522.m_VerticalAlignment = i523[49]
  i522.m_textAlignment = i523[50]
  i522.m_characterSpacing = i523[51]
  i522.m_wordSpacing = i523[52]
  i522.m_lineSpacing = i523[53]
  i522.m_lineSpacingMax = i523[54]
  i522.m_paragraphSpacing = i523[55]
  i522.m_charWidthMaxAdj = i523[56]
  i522.m_TextWrappingMode = i523[57]
  i522.m_wordWrappingRatios = i523[58]
  i522.m_overflowMode = i523[59]
  request.r(i523[60], i523[61], 0, i522, 'm_linkedTextComponent')
  request.r(i523[62], i523[63], 0, i522, 'parentLinkedComponent')
  i522.m_enableKerning = !!i523[64]
  var i529 = i523[65]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i529.length; i += 1) {
    i528.add(i529[i + 0]);
  }
  i522.m_ActiveFontFeatures = i528
  i522.m_enableExtraPadding = !!i523[66]
  i522.checkPaddingRequired = !!i523[67]
  i522.m_isRichText = !!i523[68]
  i522.m_parseCtrlCharacters = !!i523[69]
  i522.m_isOrthographic = !!i523[70]
  i522.m_isCullingEnabled = !!i523[71]
  i522.m_horizontalMapping = i523[72]
  i522.m_verticalMapping = i523[73]
  i522.m_uvLineOffset = i523[74]
  i522.m_geometrySortingOrder = i523[75]
  i522.m_IsTextObjectScaleStatic = !!i523[76]
  i522.m_VertexBufferAutoSizeReduction = !!i523[77]
  i522.m_useMaxVisibleDescender = !!i523[78]
  i522.m_pageToDisplay = i523[79]
  i522.m_margin = new pc.Vec4( i523[80], i523[81], i523[82], i523[83] )
  i522.m_isUsingLegacyAnimationComponent = !!i523[84]
  i522.m_isVolumetricText = !!i523[85]
  request.r(i523[86], i523[87], 0, i522, 'm_Material')
  i522.m_EmojiFallbackSupport = !!i523[88]
  i522.m_Maskable = !!i523[89]
  i522.m_Color = new pc.Color(i523[90], i523[91], i523[92], i523[93])
  i522.m_RaycastTarget = !!i523[94]
  i522.m_RaycastPadding = new pc.Vec4( i523[95], i523[96], i523[97], i523[98] )
  return i522
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i532 = root || request.c( 'TMPro.VertexGradient' )
  var i533 = data
  i532.topLeft = new pc.Color(i533[0], i533[1], i533[2], i533[3])
  i532.topRight = new pc.Color(i533[4], i533[5], i533[6], i533[7])
  i532.bottomLeft = new pc.Color(i533[8], i533[9], i533[10], i533[11])
  i532.bottomRight = new pc.Color(i533[12], i533[13], i533[14], i533[15])
  return i532
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Mask' )
  var i537 = data
  i536.m_ShowMaskGraphic = !!i537[0]
  return i536
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.Button' )
  var i539 = data
  i538.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i539[0], i538.m_OnClick)
  i538.m_Navigation = request.d('UnityEngine.UI.Navigation', i539[1], i538.m_Navigation)
  i538.m_Transition = i539[2]
  i538.m_Colors = request.d('UnityEngine.UI.ColorBlock', i539[3], i538.m_Colors)
  i538.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i539[4], i538.m_SpriteState)
  i538.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i539[5], i538.m_AnimationTriggers)
  i538.m_Interactable = !!i539[6]
  request.r(i539[7], i539[8], 0, i538, 'm_TargetGraphic')
  return i538
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i541 = data
  i540.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i541[0], i540.m_PersistentCalls)
  return i540
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i543 = data
  i542.m_Mode = i543[0]
  i542.m_WrapAround = !!i543[1]
  request.r(i543[2], i543[3], 0, i542, 'm_SelectOnUp')
  request.r(i543[4], i543[5], 0, i542, 'm_SelectOnDown')
  request.r(i543[6], i543[7], 0, i542, 'm_SelectOnLeft')
  request.r(i543[8], i543[9], 0, i542, 'm_SelectOnRight')
  return i542
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i545 = data
  i544.m_NormalColor = new pc.Color(i545[0], i545[1], i545[2], i545[3])
  i544.m_HighlightedColor = new pc.Color(i545[4], i545[5], i545[6], i545[7])
  i544.m_PressedColor = new pc.Color(i545[8], i545[9], i545[10], i545[11])
  i544.m_SelectedColor = new pc.Color(i545[12], i545[13], i545[14], i545[15])
  i544.m_DisabledColor = new pc.Color(i545[16], i545[17], i545[18], i545[19])
  i544.m_ColorMultiplier = i545[20]
  i544.m_FadeDuration = i545[21]
  return i544
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_HighlightedSprite')
  request.r(i547[2], i547[3], 0, i546, 'm_PressedSprite')
  request.r(i547[4], i547[5], 0, i546, 'm_SelectedSprite')
  request.r(i547[6], i547[7], 0, i546, 'm_DisabledSprite')
  return i546
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i549 = data
  i548.m_NormalTrigger = i549[0]
  i548.m_HighlightedTrigger = i549[1]
  i548.m_PressedTrigger = i549[2]
  i548.m_SelectedTrigger = i549[3]
  i548.m_DisabledTrigger = i549[4]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i551 = data
  i550.m_Alpha = i551[0]
  i550.m_Interactable = !!i551[1]
  i550.m_BlocksRaycasts = !!i551[2]
  i550.m_IgnoreParentGroups = !!i551[3]
  i550.enabled = !!i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'clip')
  request.r(i553[2], i553[3], 0, i552, 'outputAudioMixerGroup')
  i552.playOnAwake = !!i553[4]
  i552.loop = !!i553[5]
  i552.time = i553[6]
  i552.volume = i553[7]
  i552.pitch = i553[8]
  i552.enabled = !!i553[9]
  return i552
}

Deserializers["MelonAd.WeaponInventoryPLA"] = function (request, data, root) {
  var i554 = root || request.c( 'MelonAd.WeaponInventoryPLA' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'BGTexture')
  request.r(i555[2], i555[3], 0, i554, 'BGM')
  i554.EndTime = i555[4]
  request.r(i555[5], i555[6], 0, i554, 'scaler')
  request.r(i555[7], i555[8], 0, i554, 'background')
  request.r(i555[9], i555[10], 0, i554, 'inventoryPanel')
  request.r(i555[11], i555[12], 0, i554, 'header')
  request.r(i555[13], i555[14], 0, i554, 'headerTitle')
  request.r(i555[15], i555[16], 0, i554, 'headerCount')
  request.r(i555[17], i555[18], 0, i554, 'scroll')
  request.r(i555[19], i555[20], 0, i554, 'viewport')
  request.r(i555[21], i555[22], 0, i554, 'content')
  var i557 = i555[23]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 1, i556, '')
  }
  i554.slots = i556
  request.r(i555[24], i555[25], 0, i554, 'ctaArea')
  request.r(i555[26], i555[27], 0, i554, 'title')
  request.r(i555[28], i555[29], 0, i554, 'startButton')
  request.r(i555[30], i555[31], 0, i554, 'startLabel')
  request.r(i555[32], i555[33], 0, i554, 'bgmSource')
  request.r(i555[34], i555[35], 0, i554, 'safeRoot')
  i554.minTopPortrait = i555[36]
  i554.minBottomPortrait = i555[37]
  i554.minSideLandscape = i555[38]
  i554.minBottomLandscape = i555[39]
  i554.targetCell = i555[40]
  i554.targetCellLandscape = i555[41]
  i554.gap = i555[42]
  i554.pad = i555[43]
  i554.nameHeight = i555[44]
  i554.minColumns = i555[45]
  i554.maxColumns = i555[46]
  request.r(i555[47], i555[48], 0, i554, 'hand')
  request.r(i555[49], i555[50], 0, i554, 'handImage')
  i554.handSwipeUp = !!i555[51]
  i554.hintDelay = i555[52]
  i554.idleRepeat = i555[53]
  i554.loopPause = i555[54]
  i554.hintDistance = i555[55]
  request.r(i555[56], i555[57], 0, i554, 'endcard')
  request.r(i555[58], i555[59], 0, i554, 'endcardGroup')
  request.r(i555[60], i555[61], 0, i554, 'endcardContent')
  request.r(i555[62], i555[63], 0, i554, 'endcardIcon')
  request.r(i555[64], i555[65], 0, i554, 'endcardPlay')
  var i559 = i555[66]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 1, i558, '')
  }
  i554.sfxSources = i558
  request.r(i555[67], i555[68], 0, i554, 'clickSfx')
  request.r(i555[69], i555[70], 0, i554, 'selectSfx')
  i554.bgmVolume = i555[71]
  i554.sfxVolume = i555[72]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i565 = data
  i564.ambientIntensity = i565[0]
  i564.reflectionIntensity = i565[1]
  i564.ambientMode = i565[2]
  i564.ambientLight = new pc.Color(i565[3], i565[4], i565[5], i565[6])
  i564.ambientSkyColor = new pc.Color(i565[7], i565[8], i565[9], i565[10])
  i564.ambientGroundColor = new pc.Color(i565[11], i565[12], i565[13], i565[14])
  i564.ambientEquatorColor = new pc.Color(i565[15], i565[16], i565[17], i565[18])
  i564.fogColor = new pc.Color(i565[19], i565[20], i565[21], i565[22])
  i564.fogEndDistance = i565[23]
  i564.fogStartDistance = i565[24]
  i564.fogDensity = i565[25]
  i564.fog = !!i565[26]
  request.r(i565[27], i565[28], 0, i564, 'skybox')
  i564.fogMode = i565[29]
  var i567 = i565[30]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i567[i + 0]) );
  }
  i564.lightmaps = i566
  i564.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i565[31], i564.lightProbes)
  i564.lightmapsMode = i565[32]
  i564.mixedBakeMode = i565[33]
  i564.environmentLightingMode = i565[34]
  i564.ambientProbe = new pc.SphericalHarmonicsL2(i565[35])
  request.r(i565[36], i565[37], 0, i564, 'customReflection')
  request.r(i565[38], i565[39], 0, i564, 'defaultReflection')
  i564.defaultReflectionMode = i565[40]
  i564.defaultReflectionResolution = i565[41]
  i564.sunLightObjectId = i565[42]
  i564.pixelLightCount = i565[43]
  i564.defaultReflectionHDR = !!i565[44]
  i564.hasLightDataAsset = !!i565[45]
  i564.hasManualGenerate = !!i565[46]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'lightmapColor')
  request.r(i571[2], i571[3], 0, i570, 'lightmapDirection')
  request.r(i571[4], i571[5], 0, i570, 'shadowMask')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i572 = root || new UnityEngine.LightProbes()
  var i573 = data
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i581 = data
  var i583 = i581[0]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i583[i + 0]));
  }
  i580.ShaderCompilationErrors = i582
  i580.name = i581[1]
  i580.guid = i581[2]
  var i585 = i581[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( i585[i + 0] );
  }
  i580.shaderDefinedKeywords = i584
  var i587 = i581[4]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i587[i + 0]) );
  }
  i580.passes = i586
  var i589 = i581[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i589[i + 0]) );
  }
  i580.usePasses = i588
  var i591 = i581[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i591[i + 0]) );
  }
  i580.defaultParameterValues = i590
  request.r(i581[7], i581[8], 0, i580, 'unityFallbackShader')
  i580.readDepth = !!i581[9]
  i580.hasDepthOnlyPass = !!i581[10]
  i580.isCreatedByShaderGraph = !!i581[11]
  i580.disableBatching = !!i581[12]
  i580.compiled = !!i581[13]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i595 = data
  i594.shaderName = i595[0]
  i594.errorMessage = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i600 = root || new pc.UnityShaderPass()
  var i601 = data
  i600.id = i601[0]
  i600.subShaderIndex = i601[1]
  i600.name = i601[2]
  i600.passType = i601[3]
  i600.grabPassTextureName = i601[4]
  i600.usePass = !!i601[5]
  i600.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[6], i600.zTest)
  i600.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[7], i600.zWrite)
  i600.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[8], i600.culling)
  i600.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i601[9], i600.blending)
  i600.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i601[10], i600.alphaBlending)
  i600.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[11], i600.colorWriteMask)
  i600.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[12], i600.offsetUnits)
  i600.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[13], i600.offsetFactor)
  i600.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[14], i600.stencilRef)
  i600.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[15], i600.stencilReadMask)
  i600.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[16], i600.stencilWriteMask)
  i600.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[17], i600.stencilOp)
  i600.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[18], i600.stencilOpFront)
  i600.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[19], i600.stencilOpBack)
  var i603 = i601[20]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i603[i + 0]) );
  }
  i600.tags = i602
  var i605 = i601[21]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( i605[i + 0] );
  }
  i600.passDefinedKeywords = i604
  var i607 = i601[22]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i607[i + 0]) );
  }
  i600.passDefinedKeywordGroups = i606
  var i609 = i601[23]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i609[i + 0]) );
  }
  i600.variants = i608
  var i611 = i601[24]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i611[i + 0]) );
  }
  i600.excludedVariants = i610
  i600.hasDepthReader = !!i601[25]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i613 = data
  i612.val = i613[0]
  i612.name = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i615 = data
  i614.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[0], i614.src)
  i614.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[1], i614.dst)
  i614.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[2], i614.op)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i617 = data
  i616.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[0], i616.pass)
  i616.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[1], i616.fail)
  i616.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[2], i616.zFail)
  i616.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[3], i616.comp)
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i621 = data
  i620.name = i621[0]
  i620.value = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i624.keywords = i626
  i624.hasDiscard = !!i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i631 = data
  i630.passId = i631[0]
  i630.subShaderIndex = i631[1]
  var i633 = i631[2]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i630.keywords = i632
  i630.vertexProgram = i631[3]
  i630.fragmentProgram = i631[4]
  i630.exportedForWebGl2 = !!i631[5]
  i630.readDepth = !!i631[6]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'shader')
  i636.pass = i637[2]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i641 = data
  i640.name = i641[0]
  i640.type = i641[1]
  i640.value = new pc.Vec4( i641[2], i641[3], i641[4], i641[5] )
  i640.textureValue = i641[6]
  i640.shaderPropertyFlag = i641[7]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'texture')
  i642.aabb = i643[3]
  i642.vertices = i643[4]
  i642.triangles = i643[5]
  i642.textureRect = UnityEngine.Rect.MinMaxRect(i643[6], i643[7], i643[8], i643[9])
  i642.packedRect = UnityEngine.Rect.MinMaxRect(i643[10], i643[11], i643[12], i643[13])
  i642.border = new pc.Vec4( i643[14], i643[15], i643[16], i643[17] )
  i642.transparency = i643[18]
  i642.bounds = i643[19]
  i642.pixelsPerUnit = i643[20]
  i642.textureWidth = i643[21]
  i642.textureHeight = i643[22]
  i642.nativeSize = new pc.Vec2( i643[23], i643[24] )
  i642.pivot = new pc.Vec2( i643[25], i643[26] )
  i642.textureRectOffset = new pc.Vec2( i643[27], i643[28] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i645 = data
  i644.name = i645[0]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i647 = data
  i646.name = i647[0]
  i646.ascent = i647[1]
  i646.originalLineHeight = i647[2]
  i646.fontSize = i647[3]
  var i649 = i647[4]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i649[i + 0]) );
  }
  i646.characterInfo = i648
  request.r(i647[5], i647[6], 0, i646, 'texture')
  i646.originalFontSize = i647[7]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i653 = data
  i652.index = i653[0]
  i652.advance = i653[1]
  i652.bearing = i653[2]
  i652.glyphWidth = i653[3]
  i652.glyphHeight = i653[4]
  i652.minX = i653[5]
  i652.maxX = i653[6]
  i652.minY = i653[7]
  i652.maxY = i653[8]
  i652.uvBottomLeftX = i653[9]
  i652.uvBottomLeftY = i653[10]
  i652.uvBottomRightX = i653[11]
  i652.uvBottomRightY = i653[12]
  i652.uvTopLeftX = i653[13]
  i652.uvTopLeftY = i653[14]
  i652.uvTopRightX = i653[15]
  i652.uvTopRightY = i653[16]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i655 = data
  i654.name = i655[0]
  i654.bytes64 = i655[1]
  i654.data = i655[2]
  return i654
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i657 = data
  i656.normalStyle = i657[0]
  i656.normalSpacingOffset = i657[1]
  i656.boldStyle = i657[2]
  i656.boldSpacing = i657[3]
  i656.italicStyle = i657[4]
  i656.tabSize = i657[5]
  request.r(i657[6], i657[7], 0, i656, 'atlas')
  i656.m_SourceFontFileGUID = i657[8]
  i656.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i657[9], i656.m_CreationSettings)
  request.r(i657[10], i657[11], 0, i656, 'm_SourceFontFile')
  i656.m_SourceFontFilePath = i657[12]
  i656.m_AtlasPopulationMode = i657[13]
  i656.InternalDynamicOS = !!i657[14]
  var i659 = i657[15]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('UnityEngine.TextCore.Glyph', i659[i + 0]));
  }
  i656.m_GlyphTable = i658
  var i661 = i657[16]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('TMPro.TMP_Character', i661[i + 0]));
  }
  i656.m_CharacterTable = i660
  var i663 = i657[17]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i656.m_AtlasTextures = i662
  i656.m_AtlasTextureIndex = i657[18]
  i656.m_IsMultiAtlasTexturesEnabled = !!i657[19]
  i656.m_GetFontFeatures = !!i657[20]
  i656.m_ClearDynamicDataOnBuild = !!i657[21]
  i656.m_AtlasWidth = i657[22]
  i656.m_AtlasHeight = i657[23]
  i656.m_AtlasPadding = i657[24]
  i656.m_AtlasRenderMode = i657[25]
  var i665 = i657[26]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.TextCore.GlyphRect', i665[i + 0]));
  }
  i656.m_UsedGlyphRects = i664
  var i667 = i657[27]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('UnityEngine.TextCore.GlyphRect', i667[i + 0]));
  }
  i656.m_FreeGlyphRects = i666
  i656.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i657[28], i656.m_FontFeatureTable)
  i656.m_ShouldReimportFontFeatures = !!i657[29]
  var i669 = i657[30]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i656.m_FallbackFontAssetTable = i668
  var i671 = i657[31]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('TMPro.TMP_FontWeightPair', i671[i + 0]) );
  }
  i656.m_FontWeightTable = i670
  var i673 = i657[32]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('TMPro.TMP_FontWeightPair', i673[i + 0]) );
  }
  i656.fontWeights = i672
  i656.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i657[33], i656.m_fontInfo)
  var i675 = i657[34]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i675.length; i += 1) {
    i674.add(request.d('TMPro.TMP_Glyph', i675[i + 0]));
  }
  i656.m_glyphInfoList = i674
  i656.m_KerningTable = request.d('TMPro.KerningTable', i657[35], i656.m_KerningTable)
  var i677 = i657[36]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i656.fallbackFontAssets = i676
  i656.m_Version = i657[37]
  i656.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i657[38], i656.m_FaceInfo)
  request.r(i657[39], i657[40], 0, i656, 'm_Material')
  return i656
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i679 = data
  i678.sourceFontFileName = i679[0]
  i678.sourceFontFileGUID = i679[1]
  i678.faceIndex = i679[2]
  i678.pointSizeSamplingMode = i679[3]
  i678.pointSize = i679[4]
  i678.padding = i679[5]
  i678.paddingMode = i679[6]
  i678.packingMode = i679[7]
  i678.atlasWidth = i679[8]
  i678.atlasHeight = i679[9]
  i678.characterSetSelectionMode = i679[10]
  i678.characterSequence = i679[11]
  i678.referencedFontAssetGUID = i679[12]
  i678.referencedTextAssetGUID = i679[13]
  i678.fontStyle = i679[14]
  i678.fontStyleModifier = i679[15]
  i678.renderMode = i679[16]
  i678.includeFontFeatures = !!i679[17]
  return i678
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i683 = data
  i682.m_Index = i683[0]
  i682.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i683[1], i682.m_Metrics)
  i682.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i683[2], i682.m_GlyphRect)
  i682.m_Scale = i683[3]
  i682.m_AtlasIndex = i683[4]
  i682.m_ClassDefinitionType = i683[5]
  return i682
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i685 = data
  i684.m_Width = i685[0]
  i684.m_Height = i685[1]
  i684.m_HorizontalBearingX = i685[2]
  i684.m_HorizontalBearingY = i685[3]
  i684.m_HorizontalAdvance = i685[4]
  return i684
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i687 = data
  i686.m_X = i687[0]
  i686.m_Y = i687[1]
  i686.m_Width = i687[2]
  i686.m_Height = i687[3]
  return i686
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i690 = root || request.c( 'TMPro.TMP_Character' )
  var i691 = data
  i690.m_ElementType = i691[0]
  i690.m_Unicode = i691[1]
  i690.m_GlyphIndex = i691[2]
  i690.m_Scale = i691[3]
  return i690
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('TMPro.MultipleSubstitutionRecord', i699[i + 0]));
  }
  i696.m_MultipleSubstitutionRecords = i698
  var i701 = i697[1]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('TMPro.LigatureSubstitutionRecord', i701[i + 0]));
  }
  i696.m_LigatureSubstitutionRecords = i700
  var i703 = i697[2]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i703[i + 0]));
  }
  i696.m_GlyphPairAdjustmentRecords = i702
  var i705 = i697[3]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i705.length; i += 1) {
    i704.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i705[i + 0]));
  }
  i696.m_MarkToBaseAdjustmentRecords = i704
  var i707 = i697[4]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i707[i + 0]));
  }
  i696.m_MarkToMarkAdjustmentRecords = i706
  return i696
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i711 = data
  i710.m_TargetGlyphID = i711[0]
  i710.m_SubstituteGlyphIDs = i711[1]
  return i710
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i714 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i715 = data
  i714.m_ComponentGlyphIDs = i715[0]
  i714.m_LigatureGlyphID = i715[1]
  return i714
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i719 = data
  i718.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i719[0], i718.m_FirstAdjustmentRecord)
  i718.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i719[1], i718.m_SecondAdjustmentRecord)
  i718.m_FeatureLookupFlags = i719[2]
  return i718
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i723 = data
  i722.m_BaseGlyphID = i723[0]
  i722.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i723[1], i722.m_BaseGlyphAnchorPoint)
  i722.m_MarkGlyphID = i723[2]
  i722.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i723[3], i722.m_MarkPositionAdjustment)
  return i722
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i727 = data
  i726.m_BaseMarkGlyphID = i727[0]
  i726.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i727[1], i726.m_BaseMarkGlyphAnchorPoint)
  i726.m_CombiningMarkGlyphID = i727[2]
  i726.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i727[3], i726.m_CombiningMarkPositionAdjustment)
  return i726
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'regularTypeface')
  request.r(i733[2], i733[3], 0, i732, 'italicTypeface')
  return i732
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i735 = data
  i734.Name = i735[0]
  i734.PointSize = i735[1]
  i734.Scale = i735[2]
  i734.CharacterCount = i735[3]
  i734.LineHeight = i735[4]
  i734.Baseline = i735[5]
  i734.Ascender = i735[6]
  i734.CapHeight = i735[7]
  i734.Descender = i735[8]
  i734.CenterLine = i735[9]
  i734.SuperscriptOffset = i735[10]
  i734.SubscriptOffset = i735[11]
  i734.SubSize = i735[12]
  i734.Underline = i735[13]
  i734.UnderlineThickness = i735[14]
  i734.strikethrough = i735[15]
  i734.strikethroughThickness = i735[16]
  i734.TabWidth = i735[17]
  i734.Padding = i735[18]
  i734.AtlasWidth = i735[19]
  i734.AtlasHeight = i735[20]
  return i734
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TMP_Glyph' )
  var i739 = data
  i738.id = i739[0]
  i738.x = i739[1]
  i738.y = i739[2]
  i738.width = i739[3]
  i738.height = i739[4]
  i738.xOffset = i739[5]
  i738.yOffset = i739[6]
  i738.xAdvance = i739[7]
  i738.scale = i739[8]
  return i738
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.KerningTable' )
  var i741 = data
  var i743 = i741[0]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('TMPro.KerningPair', i743[i + 0]));
  }
  i740.kerningPairs = i742
  return i740
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.KerningPair' )
  var i747 = data
  i746.xOffset = i747[0]
  i746.m_FirstGlyph = i747[1]
  i746.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i747[2], i746.m_FirstGlyphAdjustments)
  i746.m_SecondGlyph = i747[3]
  i746.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i747[4], i746.m_SecondGlyphAdjustments)
  i746.m_IgnoreSpacingAdjustments = !!i747[5]
  return i746
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i749 = data
  i748.m_FaceIndex = i749[0]
  i748.m_FamilyName = i749[1]
  i748.m_StyleName = i749[2]
  i748.m_PointSize = i749[3]
  i748.m_Scale = i749[4]
  i748.m_UnitsPerEM = i749[5]
  i748.m_LineHeight = i749[6]
  i748.m_AscentLine = i749[7]
  i748.m_CapLine = i749[8]
  i748.m_MeanLine = i749[9]
  i748.m_Baseline = i749[10]
  i748.m_DescentLine = i749[11]
  i748.m_SuperscriptOffset = i749[12]
  i748.m_SuperscriptSize = i749[13]
  i748.m_SubscriptOffset = i749[14]
  i748.m_SubscriptSize = i749[15]
  i748.m_UnderlineOffset = i749[16]
  i748.m_UnderlineThickness = i749[17]
  i748.m_StrikethroughOffset = i749[18]
  i748.m_StrikethroughThickness = i749[19]
  i748.m_TabWidth = i749[20]
  return i748
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.TMP_Settings' )
  var i751 = data
  i750.assetVersion = i751[0]
  i750.m_TextWrappingMode = i751[1]
  i750.m_enableKerning = !!i751[2]
  var i753 = i751[3]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(i753[i + 0]);
  }
  i750.m_ActiveFontFeatures = i752
  i750.m_enableExtraPadding = !!i751[4]
  i750.m_enableTintAllSprites = !!i751[5]
  i750.m_enableParseEscapeCharacters = !!i751[6]
  i750.m_EnableRaycastTarget = !!i751[7]
  i750.m_GetFontFeaturesAtRuntime = !!i751[8]
  i750.m_missingGlyphCharacter = i751[9]
  i750.m_ClearDynamicDataOnBuild = !!i751[10]
  i750.m_warningsDisabled = !!i751[11]
  request.r(i751[12], i751[13], 0, i750, 'm_defaultFontAsset')
  i750.m_defaultFontAssetPath = i751[14]
  i750.m_defaultFontSize = i751[15]
  i750.m_defaultAutoSizeMinRatio = i751[16]
  i750.m_defaultAutoSizeMaxRatio = i751[17]
  i750.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i751[18], i751[19] )
  i750.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i751[20], i751[21] )
  i750.m_autoSizeTextContainer = !!i751[22]
  i750.m_IsTextObjectScaleStatic = !!i751[23]
  var i755 = i751[24]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i750.m_fallbackFontAssets = i754
  i750.m_matchMaterialPreset = !!i751[25]
  i750.m_HideSubTextObjects = !!i751[26]
  request.r(i751[27], i751[28], 0, i750, 'm_defaultSpriteAsset')
  i750.m_defaultSpriteAssetPath = i751[29]
  i750.m_enableEmojiSupport = !!i751[30]
  i750.m_MissingCharacterSpriteUnicode = i751[31]
  var i757 = i751[32]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i750.m_EmojiFallbackTextAssets = i756
  i750.m_defaultColorGradientPresetsPath = i751[33]
  request.r(i751[34], i751[35], 0, i750, 'm_defaultStyleSheet')
  i750.m_StyleSheetsResourcePath = i751[36]
  request.r(i751[37], i751[38], 0, i750, 'm_leadingCharacters')
  request.r(i751[39], i751[40], 0, i750, 'm_followingCharacters')
  i750.m_UseModernHangulLineBreakingRules = !!i751[41]
  return i750
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i761 = data
  i760.m_GlyphIndex = i761[0]
  i760.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i761[1], i760.m_GlyphValueRecord)
  return i760
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i763 = data
  i762.m_XPlacement = i763[0]
  i762.m_YPlacement = i763[1]
  i762.m_XAdvance = i763[2]
  i762.m_YAdvance = i763[3]
  return i762
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i764 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'spriteSheet')
  var i767 = i765[2]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_Sprite', i767[i + 0]));
  }
  i764.spriteInfoList = i766
  var i769 = i765[3]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i764.fallbackSpriteAssets = i768
  var i771 = i765[4]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('TMPro.TMP_SpriteCharacter', i771[i + 0]));
  }
  i764.m_SpriteCharacterTable = i770
  var i773 = i765[5]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('TMPro.TMP_SpriteGlyph', i773[i + 0]));
  }
  i764.m_GlyphTable = i772
  i764.m_Version = i765[6]
  i764.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i765[7], i764.m_FaceInfo)
  request.r(i765[8], i765[9], 0, i764, 'm_Material')
  return i764
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_Sprite' )
  var i777 = data
  i776.name = i777[0]
  i776.hashCode = i777[1]
  i776.unicode = i777[2]
  i776.pivot = new pc.Vec2( i777[3], i777[4] )
  request.r(i777[5], i777[6], 0, i776, 'sprite')
  i776.id = i777[7]
  i776.x = i777[8]
  i776.y = i777[9]
  i776.width = i777[10]
  i776.height = i777[11]
  i776.xOffset = i777[12]
  i776.yOffset = i777[13]
  i776.xAdvance = i777[14]
  i776.scale = i777[15]
  return i776
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i783 = data
  i782.m_Name = i783[0]
  i782.m_ElementType = i783[1]
  i782.m_Unicode = i783[2]
  i782.m_GlyphIndex = i783[3]
  i782.m_Scale = i783[4]
  return i782
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'sprite')
  i786.m_Index = i787[2]
  i786.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i787[3], i786.m_Metrics)
  i786.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i787[4], i786.m_GlyphRect)
  i786.m_Scale = i787[5]
  i786.m_AtlasIndex = i787[6]
  i786.m_ClassDefinitionType = i787[7]
  return i786
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_Style', i791[i + 0]));
  }
  i788.m_StyleList = i790
  return i788
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_Style' )
  var i795 = data
  i794.m_Name = i795[0]
  i794.m_HashCode = i795[1]
  i794.m_OpeningDefinition = i795[2]
  i794.m_ClosingDefinition = i795[3]
  i794.m_OpeningTagArray = i795[4]
  i794.m_ClosingTagArray = i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i799[i + 0]) );
  }
  i796.files = i798
  i796.componentToPrefabIds = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i803 = data
  i802.path = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'unityObject')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i807[i + 0]) );
  }
  i804.scriptsExecutionOrder = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i809[i + 0]) );
  }
  i804.sortingLayers = i808
  var i811 = i805[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i811[i + 0]) );
  }
  i804.cullingLayers = i810
  i804.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i805[3], i804.timeSettings)
  i804.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i805[4], i804.physicsSettings)
  i804.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i805[5], i804.physics2DSettings)
  i804.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i805[6], i804.qualitySettings)
  i804.enableRealtimeShadows = !!i805[7]
  i804.enableAutoInstancing = !!i805[8]
  i804.enableStaticBatching = !!i805[9]
  i804.enableDynamicBatching = !!i805[10]
  i804.usePreservativeDynamicBatching = !!i805[11]
  i804.lightmapEncodingQuality = i805[12]
  i804.desiredColorSpace = i805[13]
  var i813 = i805[14]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i804.allTags = i812
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  i820.value = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i825 = data
  i824.id = i825[0]
  i824.name = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i827 = data
  i826.fixedDeltaTime = i827[0]
  i826.maximumDeltaTime = i827[1]
  i826.timeScale = i827[2]
  i826.maximumParticleTimestep = i827[3]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i829 = data
  i828.gravity = new pc.Vec3( i829[0], i829[1], i829[2] )
  i828.defaultSolverIterations = i829[3]
  i828.bounceThreshold = i829[4]
  i828.autoSyncTransforms = !!i829[5]
  i828.autoSimulation = !!i829[6]
  var i831 = i829[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i831[i + 0]) );
  }
  i828.collisionMatrix = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i835 = data
  i834.enabled = !!i835[0]
  i834.layerId = i835[1]
  i834.otherLayerId = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'material')
  i836.gravity = new pc.Vec2( i837[2], i837[3] )
  i836.positionIterations = i837[4]
  i836.velocityIterations = i837[5]
  i836.velocityThreshold = i837[6]
  i836.maxLinearCorrection = i837[7]
  i836.maxAngularCorrection = i837[8]
  i836.maxTranslationSpeed = i837[9]
  i836.maxRotationSpeed = i837[10]
  i836.baumgarteScale = i837[11]
  i836.baumgarteTOIScale = i837[12]
  i836.timeToSleep = i837[13]
  i836.linearSleepTolerance = i837[14]
  i836.angularSleepTolerance = i837[15]
  i836.defaultContactOffset = i837[16]
  i836.autoSimulation = !!i837[17]
  i836.queriesHitTriggers = !!i837[18]
  i836.queriesStartInColliders = !!i837[19]
  i836.callbacksOnDisable = !!i837[20]
  i836.reuseCollisionCallbacks = !!i837[21]
  i836.autoSyncTransforms = !!i837[22]
  var i839 = i837[23]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i839[i + 0]) );
  }
  i836.collisionMatrix = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i843 = data
  i842.enabled = !!i843[0]
  i842.layerId = i843[1]
  i842.otherLayerId = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i847[i + 0]) );
  }
  i844.qualityLevels = i846
  var i849 = i845[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i844.names = i848
  i844.shadows = i845[2]
  i844.anisotropicFiltering = i845[3]
  i844.antiAliasing = i845[4]
  i844.lodBias = i845[5]
  i844.shadowCascades = i845[6]
  i844.shadowDistance = i845[7]
  i844.shadowmaskMode = i845[8]
  i844.shadowProjection = i845[9]
  i844.shadowResolution = i845[10]
  i844.softParticles = !!i845[11]
  i844.softVegetation = !!i845[12]
  i844.activeColorSpace = i845[13]
  i844.desiredColorSpace = i845[14]
  i844.masterTextureLimit = i845[15]
  i844.maxQueuedFrames = i845[16]
  i844.particleRaycastBudget = i845[17]
  i844.pixelLightCount = i845[18]
  i844.realtimeReflectionProbes = !!i845[19]
  i844.shadowCascade2Split = i845[20]
  i844.shadowCascade4Split = new pc.Vec3( i845[21], i845[22], i845[23] )
  i844.streamingMipmapsActive = !!i845[24]
  i844.vSyncCount = i845[25]
  i844.asyncUploadBufferSize = i845[26]
  i844.asyncUploadTimeSlice = i845[27]
  i844.billboardsFaceCameraPosition = !!i845[28]
  i844.shadowNearPlaneOffset = i845[29]
  i844.streamingMipmapsMemoryBudget = i845[30]
  i844.maximumLODLevel = i845[31]
  i844.streamingMipmapsAddAllCameras = !!i845[32]
  i844.streamingMipmapsMaxLevelReduction = i845[33]
  i844.streamingMipmapsRenderersPerFrame = i845[34]
  i844.resolutionScalingFixedDPIFactor = i845[35]
  i844.streamingMipmapsMaxFileIORequests = i845[36]
  i844.currentQualityLevel = i845[37]
  return i844
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_ObjectArgument')
  i852.m_ObjectArgumentAssemblyTypeName = i853[2]
  i852.m_IntArgument = i853[3]
  i852.m_FloatArgument = i853[4]
  i852.m_StringArgument = i853[5]
  i852.m_BoolArgument = !!i853[6]
  return i852
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i855 = data
  i854.m_XCoordinate = i855[0]
  i854.m_YCoordinate = i855[1]
  return i854
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i857 = data
  i856.m_XPositionAdjustment = i857[0]
  i856.m_YPositionAdjustment = i857[1]
  return i856
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i859 = data
  i858.xPlacement = i859[0]
  i858.yPlacement = i859[1]
  i858.xAdvance = i859[2]
  i858.yAdvance = i859[3]
  return i858
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"8":[7],"68":[2],"69":[13],"70":[71],"72":[2],"73":[74],"75":[5],"76":[8],"77":[7],"78":[64,7],"16":[7,11],"79":[7],"80":[11,7],"81":[64],"82":[11,7],"83":[7],"84":[85],"86":[85],"87":[85],"88":[7],"89":[7],"10":[8],"13":[11,7],"90":[7],"9":[8],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"97":[7],"19":[7],"98":[7],"12":[11,7],"99":[7],"100":[7],"15":[7],"101":[7],"102":[11,7],"103":[7],"104":[5],"105":[5],"6":[5],"106":[5],"107":[2],"108":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.ScrollRect","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Mask","UnityEngine.UI.Button","UnityEngine.CanvasGroup","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","MelonAd.WeaponInventoryPLA","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MelonAd.CameraFit","MelonAd.CtaOverlay","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "38.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_SRP_V11_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1686";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3768";

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

Deserializers.buildID = "e36a101b-ff0a-4aa9-9b3c-5bad1c468246";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

