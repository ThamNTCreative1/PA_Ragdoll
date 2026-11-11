var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSpring' )
  var i429 = data
  i428.spring = i429[0]
  i428.damper = i429[1]
  i428.targetPosition = i429[2]
  return i428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor' )
  var i431 = data
  i430.m_TargetVelocity = i431[0]
  i430.m_Force = i431[1]
  i430.m_FreeSpin = i431[2]
  return i430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointLimits' )
  var i433 = data
  i432.m_Min = i433[0]
  i432.m_Max = i433[1]
  i432.m_Bounciness = i433[2]
  i432.m_BounceMinVelocity = i433[3]
  i432.m_ContactDistance = i433[4]
  i432.minBounce = i433[5]
  i432.maxBounce = i433[6]
  return i432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointDrive' )
  var i435 = data
  i434.m_PositionSpring = i435[0]
  i434.m_PositionDamper = i435[1]
  i434.m_MaximumForce = i435[2]
  i434.m_UseAcceleration = i435[3]
  return i434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i437 = data
  i436.m_Spring = i437[0]
  i436.m_Damper = i437[1]
  return i436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i439 = data
  i438.m_Limit = i439[0]
  i438.m_Bounciness = i439[1]
  i438.m_ContactDistance = i439[2]
  return i438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i441 = data
  i440.m_ExtremumSlip = i441[0]
  i440.m_ExtremumValue = i441[1]
  i440.m_AsymptoteSlip = i441[2]
  i440.m_AsymptoteValue = i441[3]
  i440.m_Stiffness = i441[4]
  return i440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i443 = data
  i442.m_LowerAngle = i443[0]
  i442.m_UpperAngle = i443[1]
  return i442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i445 = data
  i444.m_MotorSpeed = i445[0]
  i444.m_MaximumMotorTorque = i445[1]
  return i444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i447 = data
  i446.m_DampingRatio = i447[0]
  i446.m_Frequency = i447[1]
  i446.m_Angle = i447[2]
  return i446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i449 = data
  i448.m_LowerTranslation = i449[0]
  i448.m_UpperTranslation = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i451 = data
  i450.name = i451[0]
  i450.width = i451[1]
  i450.height = i451[2]
  i450.mipmapCount = i451[3]
  i450.anisoLevel = i451[4]
  i450.filterMode = i451[5]
  i450.hdr = !!i451[6]
  i450.format = i451[7]
  i450.wrapMode = i451[8]
  i450.alphaIsTransparency = !!i451[9]
  i450.alphaSource = i451[10]
  i450.graphicsFormat = i451[11]
  i450.sRGBTexture = !!i451[12]
  i450.desiredColorSpace = i451[13]
  i450.wrapU = i451[14]
  i450.wrapV = i451[15]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i452 = root || new pc.UnityMaterial()
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'shader')
  i452.renderQueue = i453[3]
  i452.enableInstancing = !!i453[4]
  var i455 = i453[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i455[i + 0]) );
  }
  i452.floatParameters = i454
  var i457 = i453[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i457[i + 0]) );
  }
  i452.colorParameters = i456
  var i459 = i453[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i459[i + 0]) );
  }
  i452.vectorParameters = i458
  var i461 = i453[8]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i461[i + 0]) );
  }
  i452.textureParameters = i460
  var i463 = i453[9]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i463[i + 0]) );
  }
  i452.materialFlags = i462
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Color(i471[1], i471[2], i471[3], i471[4])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = new pc.Vec4( i475[1], i475[2], i475[3], i475[4] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'value')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i483 = data
  i482.name = i483[0]
  i482.enabled = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i485 = data
  i484.name = i485[0]
  i484.index = i485[1]
  i484.startup = !!i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i487 = data
  i486.aspect = i487[0]
  i486.orthographic = !!i487[1]
  i486.orthographicSize = i487[2]
  i486.backgroundColor = new pc.Color(i487[3], i487[4], i487[5], i487[6])
  i486.nearClipPlane = i487[7]
  i486.farClipPlane = i487[8]
  i486.fieldOfView = i487[9]
  i486.depth = i487[10]
  i486.clearFlags = i487[11]
  i486.cullingMask = i487[12]
  i486.rect = i487[13]
  request.r(i487[14], i487[15], 0, i486, 'targetTexture')
  i486.usePhysicalProperties = !!i487[16]
  i486.focalLength = i487[17]
  i486.sensorSize = new pc.Vec2( i487[18], i487[19] )
  i486.lensShift = new pc.Vec2( i487[20], i487[21] )
  i486.gateFit = i487[22]
  i486.commandBufferCount = i487[23]
  i486.cameraType = i487[24]
  i486.enabled = !!i487[25]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i489 = data
  i488.name = i489[0]
  i488.tagId = i489[1]
  i488.enabled = !!i489[2]
  i488.isStatic = !!i489[3]
  i488.layer = i489[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i495 = data
  i494.pivot = new pc.Vec2( i495[0], i495[1] )
  i494.anchorMin = new pc.Vec2( i495[2], i495[3] )
  i494.anchorMax = new pc.Vec2( i495[4], i495[5] )
  i494.sizeDelta = new pc.Vec2( i495[6], i495[7] )
  i494.anchoredPosition3D = new pc.Vec3( i495[8], i495[9], i495[10] )
  i494.rotation = new pc.Quat(i495[11], i495[12], i495[13], i495[14])
  i494.scale = new pc.Vec3( i495[15], i495[16], i495[17] )
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i497 = data
  i496.planeDistance = i497[0]
  i496.referencePixelsPerUnit = i497[1]
  i496.isFallbackOverlay = !!i497[2]
  i496.renderMode = i497[3]
  i496.renderOrder = i497[4]
  i496.sortingLayerName = i497[5]
  i496.sortingOrder = i497[6]
  i496.scaleFactor = i497[7]
  request.r(i497[8], i497[9], 0, i496, 'worldCamera')
  i496.overrideSorting = !!i497[10]
  i496.pixelPerfect = !!i497[11]
  i496.targetDisplay = i497[12]
  i496.overridePixelPerfect = !!i497[13]
  i496.enabled = !!i497[14]
  return i496
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i499 = data
  i498.m_UiScaleMode = i499[0]
  i498.m_ReferencePixelsPerUnit = i499[1]
  i498.m_ScaleFactor = i499[2]
  i498.m_ReferenceResolution = new pc.Vec2( i499[3], i499[4] )
  i498.m_ScreenMatchMode = i499[5]
  i498.m_MatchWidthOrHeight = i499[6]
  i498.m_PhysicalUnit = i499[7]
  i498.m_FallbackScreenDPI = i499[8]
  i498.m_DefaultSpriteDPI = i499[9]
  i498.m_DynamicPixelsPerUnit = i499[10]
  i498.m_PresetInfoIsWorld = !!i499[11]
  return i498
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i501 = data
  i500.m_IgnoreReversedGraphics = !!i501[0]
  i500.m_BlockingObjects = i501[1]
  i500.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i501[2] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i503 = data
  i502.cullTransparentMesh = !!i503[0]
  return i502
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'm_Texture')
  i504.m_UVRect = UnityEngine.Rect.MinMaxRect(i505[2], i505[3], i505[4], i505[5])
  request.r(i505[6], i505[7], 0, i504, 'm_Material')
  i504.m_Maskable = !!i505[8]
  i504.m_Color = new pc.Color(i505[9], i505[10], i505[11], i505[12])
  i504.m_RaycastTarget = !!i505[13]
  i504.m_RaycastPadding = new pc.Vec4( i505[14], i505[15], i505[16], i505[17] )
  return i504
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.Image' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Sprite')
  i506.m_Type = i507[2]
  i506.m_PreserveAspect = !!i507[3]
  i506.m_FillCenter = !!i507[4]
  i506.m_FillMethod = i507[5]
  i506.m_FillAmount = i507[6]
  i506.m_FillClockwise = !!i507[7]
  i506.m_FillOrigin = i507[8]
  i506.m_UseSpriteMesh = !!i507[9]
  i506.m_PixelsPerUnitMultiplier = i507[10]
  request.r(i507[11], i507[12], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[13]
  i506.m_Color = new pc.Color(i507[14], i507[15], i507[16], i507[17])
  i506.m_RaycastTarget = !!i507[18]
  i506.m_RaycastPadding = new pc.Vec4( i507[19], i507[20], i507[21], i507[22] )
  return i506
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Content')
  i508.m_Horizontal = !!i509[2]
  i508.m_Vertical = !!i509[3]
  i508.m_MovementType = i509[4]
  i508.m_Elasticity = i509[5]
  i508.m_Inertia = !!i509[6]
  i508.m_DecelerationRate = i509[7]
  i508.m_ScrollSensitivity = i509[8]
  request.r(i509[9], i509[10], 0, i508, 'm_Viewport')
  request.r(i509[11], i509[12], 0, i508, 'm_HorizontalScrollbar')
  request.r(i509[13], i509[14], 0, i508, 'm_VerticalScrollbar')
  i508.m_HorizontalScrollbarVisibility = i509[15]
  i508.m_VerticalScrollbarVisibility = i509[16]
  i508.m_HorizontalScrollbarSpacing = i509[17]
  i508.m_VerticalScrollbarSpacing = i509[18]
  i508.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i509[19], i508.m_OnValueChanged)
  return i508
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i511 = data
  i510.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i511[0], i510.m_PersistentCalls)
  return i510
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i513 = data
  var i515 = i513[0]
  var i514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i515.length; i += 1) {
    i514.add(request.d('UnityEngine.Events.PersistentCall', i515[i + 0]));
  }
  i512.m_Calls = i514
  return i512
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_Target')
  i518.m_TargetAssemblyTypeName = i519[2]
  i518.m_MethodName = i519[3]
  i518.m_Mode = i519[4]
  i518.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i519[5], i518.m_Arguments)
  i518.m_CallState = i519[6]
  return i518
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i520 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i521 = data
  i520.m_hasFontAssetChanged = !!i521[0]
  request.r(i521[1], i521[2], 0, i520, 'm_baseMaterial')
  i520.m_maskOffset = new pc.Vec4( i521[3], i521[4], i521[5], i521[6] )
  i520.m_text = i521[7]
  i520.m_isRightToLeft = !!i521[8]
  request.r(i521[9], i521[10], 0, i520, 'm_fontAsset')
  request.r(i521[11], i521[12], 0, i520, 'm_sharedMaterial')
  var i523 = i521[13]
  var i522 = []
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 2, i522, '')
  }
  i520.m_fontSharedMaterials = i522
  request.r(i521[14], i521[15], 0, i520, 'm_fontMaterial')
  var i525 = i521[16]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i520.m_fontMaterials = i524
  i520.m_fontColor32 = UnityEngine.Color32.ConstructColor(i521[17], i521[18], i521[19], i521[20])
  i520.m_fontColor = new pc.Color(i521[21], i521[22], i521[23], i521[24])
  i520.m_enableVertexGradient = !!i521[25]
  i520.m_colorMode = i521[26]
  i520.m_fontColorGradient = request.d('TMPro.VertexGradient', i521[27], i520.m_fontColorGradient)
  request.r(i521[28], i521[29], 0, i520, 'm_fontColorGradientPreset')
  request.r(i521[30], i521[31], 0, i520, 'm_spriteAsset')
  i520.m_tintAllSprites = !!i521[32]
  request.r(i521[33], i521[34], 0, i520, 'm_StyleSheet')
  i520.m_TextStyleHashCode = i521[35]
  i520.m_overrideHtmlColors = !!i521[36]
  i520.m_faceColor = UnityEngine.Color32.ConstructColor(i521[37], i521[38], i521[39], i521[40])
  i520.m_fontSize = i521[41]
  i520.m_fontSizeBase = i521[42]
  i520.m_fontWeight = i521[43]
  i520.m_enableAutoSizing = !!i521[44]
  i520.m_fontSizeMin = i521[45]
  i520.m_fontSizeMax = i521[46]
  i520.m_fontStyle = i521[47]
  i520.m_HorizontalAlignment = i521[48]
  i520.m_VerticalAlignment = i521[49]
  i520.m_textAlignment = i521[50]
  i520.m_characterSpacing = i521[51]
  i520.m_wordSpacing = i521[52]
  i520.m_lineSpacing = i521[53]
  i520.m_lineSpacingMax = i521[54]
  i520.m_paragraphSpacing = i521[55]
  i520.m_charWidthMaxAdj = i521[56]
  i520.m_TextWrappingMode = i521[57]
  i520.m_wordWrappingRatios = i521[58]
  i520.m_overflowMode = i521[59]
  request.r(i521[60], i521[61], 0, i520, 'm_linkedTextComponent')
  request.r(i521[62], i521[63], 0, i520, 'parentLinkedComponent')
  i520.m_enableKerning = !!i521[64]
  var i527 = i521[65]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(i527[i + 0]);
  }
  i520.m_ActiveFontFeatures = i526
  i520.m_enableExtraPadding = !!i521[66]
  i520.checkPaddingRequired = !!i521[67]
  i520.m_isRichText = !!i521[68]
  i520.m_parseCtrlCharacters = !!i521[69]
  i520.m_isOrthographic = !!i521[70]
  i520.m_isCullingEnabled = !!i521[71]
  i520.m_horizontalMapping = i521[72]
  i520.m_verticalMapping = i521[73]
  i520.m_uvLineOffset = i521[74]
  i520.m_geometrySortingOrder = i521[75]
  i520.m_IsTextObjectScaleStatic = !!i521[76]
  i520.m_VertexBufferAutoSizeReduction = !!i521[77]
  i520.m_useMaxVisibleDescender = !!i521[78]
  i520.m_pageToDisplay = i521[79]
  i520.m_margin = new pc.Vec4( i521[80], i521[81], i521[82], i521[83] )
  i520.m_isUsingLegacyAnimationComponent = !!i521[84]
  i520.m_isVolumetricText = !!i521[85]
  request.r(i521[86], i521[87], 0, i520, 'm_Material')
  i520.m_EmojiFallbackSupport = !!i521[88]
  i520.m_Maskable = !!i521[89]
  i520.m_Color = new pc.Color(i521[90], i521[91], i521[92], i521[93])
  i520.m_RaycastTarget = !!i521[94]
  i520.m_RaycastPadding = new pc.Vec4( i521[95], i521[96], i521[97], i521[98] )
  return i520
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i530 = root || request.c( 'TMPro.VertexGradient' )
  var i531 = data
  i530.topLeft = new pc.Color(i531[0], i531[1], i531[2], i531[3])
  i530.topRight = new pc.Color(i531[4], i531[5], i531[6], i531[7])
  i530.bottomLeft = new pc.Color(i531[8], i531[9], i531[10], i531[11])
  i530.bottomRight = new pc.Color(i531[12], i531[13], i531[14], i531[15])
  return i530
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.Mask' )
  var i535 = data
  i534.m_ShowMaskGraphic = !!i535[0]
  return i534
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Button' )
  var i537 = data
  i536.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i537[0], i536.m_OnClick)
  i536.m_Navigation = request.d('UnityEngine.UI.Navigation', i537[1], i536.m_Navigation)
  i536.m_Transition = i537[2]
  i536.m_Colors = request.d('UnityEngine.UI.ColorBlock', i537[3], i536.m_Colors)
  i536.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i537[4], i536.m_SpriteState)
  i536.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i537[5], i536.m_AnimationTriggers)
  i536.m_Interactable = !!i537[6]
  request.r(i537[7], i537[8], 0, i536, 'm_TargetGraphic')
  return i536
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i539 = data
  i538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i539[0], i538.m_PersistentCalls)
  return i538
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i541 = data
  i540.m_Mode = i541[0]
  i540.m_WrapAround = !!i541[1]
  request.r(i541[2], i541[3], 0, i540, 'm_SelectOnUp')
  request.r(i541[4], i541[5], 0, i540, 'm_SelectOnDown')
  request.r(i541[6], i541[7], 0, i540, 'm_SelectOnLeft')
  request.r(i541[8], i541[9], 0, i540, 'm_SelectOnRight')
  return i540
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i543 = data
  i542.m_NormalColor = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  i542.m_HighlightedColor = new pc.Color(i543[4], i543[5], i543[6], i543[7])
  i542.m_PressedColor = new pc.Color(i543[8], i543[9], i543[10], i543[11])
  i542.m_SelectedColor = new pc.Color(i543[12], i543[13], i543[14], i543[15])
  i542.m_DisabledColor = new pc.Color(i543[16], i543[17], i543[18], i543[19])
  i542.m_ColorMultiplier = i543[20]
  i542.m_FadeDuration = i543[21]
  return i542
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_HighlightedSprite')
  request.r(i545[2], i545[3], 0, i544, 'm_PressedSprite')
  request.r(i545[4], i545[5], 0, i544, 'm_SelectedSprite')
  request.r(i545[6], i545[7], 0, i544, 'm_DisabledSprite')
  return i544
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i547 = data
  i546.m_NormalTrigger = i547[0]
  i546.m_HighlightedTrigger = i547[1]
  i546.m_PressedTrigger = i547[2]
  i546.m_SelectedTrigger = i547[3]
  i546.m_DisabledTrigger = i547[4]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'clip')
  request.r(i549[2], i549[3], 0, i548, 'outputAudioMixerGroup')
  i548.playOnAwake = !!i549[4]
  i548.loop = !!i549[5]
  i548.time = i549[6]
  i548.volume = i549[7]
  i548.pitch = i549[8]
  i548.enabled = !!i549[9]
  return i548
}

Deserializers["MelonAd.WeaponInventoryPLA"] = function (request, data, root) {
  var i550 = root || request.c( 'MelonAd.WeaponInventoryPLA' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'BGTexture')
  request.r(i551[2], i551[3], 0, i550, 'BGM')
  i550.EndTime = i551[4]
  request.r(i551[5], i551[6], 0, i550, 'scaler')
  request.r(i551[7], i551[8], 0, i550, 'background')
  request.r(i551[9], i551[10], 0, i550, 'inventoryPanel')
  request.r(i551[11], i551[12], 0, i550, 'header')
  request.r(i551[13], i551[14], 0, i550, 'headerTitle')
  request.r(i551[15], i551[16], 0, i550, 'headerCount')
  request.r(i551[17], i551[18], 0, i550, 'scroll')
  request.r(i551[19], i551[20], 0, i550, 'viewport')
  request.r(i551[21], i551[22], 0, i550, 'content')
  var i553 = i551[23]
  var i552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 1, i552, '')
  }
  i550.slots = i552
  request.r(i551[24], i551[25], 0, i550, 'ctaArea')
  request.r(i551[26], i551[27], 0, i550, 'title')
  request.r(i551[28], i551[29], 0, i550, 'startButton')
  request.r(i551[30], i551[31], 0, i550, 'startLabel')
  request.r(i551[32], i551[33], 0, i550, 'bgmSource')
  request.r(i551[34], i551[35], 0, i550, 'safeRoot')
  i550.minTopPortrait = i551[36]
  i550.minBottomPortrait = i551[37]
  i550.minSideLandscape = i551[38]
  i550.minBottomLandscape = i551[39]
  i550.targetCell = i551[40]
  i550.targetCellLandscape = i551[41]
  i550.gap = i551[42]
  i550.pad = i551[43]
  i550.nameHeight = i551[44]
  i550.minColumns = i551[45]
  i550.maxColumns = i551[46]
  request.r(i551[47], i551[48], 0, i550, 'hand')
  request.r(i551[49], i551[50], 0, i550, 'handImage')
  i550.handSwipeUp = !!i551[51]
  i550.hintDelay = i551[52]
  i550.idleRepeat = i551[53]
  i550.loopPause = i551[54]
  i550.hintDistance = i551[55]
  var i555 = i551[56]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i555.length; i += 2) {
  request.r(i555[i + 0], i555[i + 1], 1, i554, '')
  }
  i550.sfxSources = i554
  request.r(i551[57], i551[58], 0, i550, 'clickSfx')
  request.r(i551[59], i551[60], 0, i550, 'selectSfx')
  i550.bgmVolume = i551[61]
  i550.sfxVolume = i551[62]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i561 = data
  i560.ambientIntensity = i561[0]
  i560.reflectionIntensity = i561[1]
  i560.ambientMode = i561[2]
  i560.ambientLight = new pc.Color(i561[3], i561[4], i561[5], i561[6])
  i560.ambientSkyColor = new pc.Color(i561[7], i561[8], i561[9], i561[10])
  i560.ambientGroundColor = new pc.Color(i561[11], i561[12], i561[13], i561[14])
  i560.ambientEquatorColor = new pc.Color(i561[15], i561[16], i561[17], i561[18])
  i560.fogColor = new pc.Color(i561[19], i561[20], i561[21], i561[22])
  i560.fogEndDistance = i561[23]
  i560.fogStartDistance = i561[24]
  i560.fogDensity = i561[25]
  i560.fog = !!i561[26]
  request.r(i561[27], i561[28], 0, i560, 'skybox')
  i560.fogMode = i561[29]
  var i563 = i561[30]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i563[i + 0]) );
  }
  i560.lightmaps = i562
  i560.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i561[31], i560.lightProbes)
  i560.lightmapsMode = i561[32]
  i560.mixedBakeMode = i561[33]
  i560.environmentLightingMode = i561[34]
  i560.ambientProbe = new pc.SphericalHarmonicsL2(i561[35])
  request.r(i561[36], i561[37], 0, i560, 'customReflection')
  request.r(i561[38], i561[39], 0, i560, 'defaultReflection')
  i560.defaultReflectionMode = i561[40]
  i560.defaultReflectionResolution = i561[41]
  i560.sunLightObjectId = i561[42]
  i560.pixelLightCount = i561[43]
  i560.defaultReflectionHDR = !!i561[44]
  i560.hasLightDataAsset = !!i561[45]
  i560.hasManualGenerate = !!i561[46]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'lightmapColor')
  request.r(i567[2], i567[3], 0, i566, 'lightmapDirection')
  request.r(i567[4], i567[5], 0, i566, 'shadowMask')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i568 = root || new UnityEngine.LightProbes()
  var i569 = data
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i577 = data
  var i579 = i577[0]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i579.length; i += 1) {
    i578.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i579[i + 0]));
  }
  i576.ShaderCompilationErrors = i578
  i576.name = i577[1]
  i576.guid = i577[2]
  var i581 = i577[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( i581[i + 0] );
  }
  i576.shaderDefinedKeywords = i580
  var i583 = i577[4]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i583[i + 0]) );
  }
  i576.passes = i582
  var i585 = i577[5]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i585[i + 0]) );
  }
  i576.usePasses = i584
  var i587 = i577[6]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i587[i + 0]) );
  }
  i576.defaultParameterValues = i586
  request.r(i577[7], i577[8], 0, i576, 'unityFallbackShader')
  i576.readDepth = !!i577[9]
  i576.hasDepthOnlyPass = !!i577[10]
  i576.isCreatedByShaderGraph = !!i577[11]
  i576.disableBatching = !!i577[12]
  i576.compiled = !!i577[13]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i591 = data
  i590.shaderName = i591[0]
  i590.errorMessage = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i596 = root || new pc.UnityShaderPass()
  var i597 = data
  i596.id = i597[0]
  i596.subShaderIndex = i597[1]
  i596.name = i597[2]
  i596.passType = i597[3]
  i596.grabPassTextureName = i597[4]
  i596.usePass = !!i597[5]
  i596.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[6], i596.zTest)
  i596.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[7], i596.zWrite)
  i596.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[8], i596.culling)
  i596.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i597[9], i596.blending)
  i596.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i597[10], i596.alphaBlending)
  i596.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[11], i596.colorWriteMask)
  i596.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[12], i596.offsetUnits)
  i596.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[13], i596.offsetFactor)
  i596.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[14], i596.stencilRef)
  i596.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[15], i596.stencilReadMask)
  i596.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i597[16], i596.stencilWriteMask)
  i596.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[17], i596.stencilOp)
  i596.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[18], i596.stencilOpFront)
  i596.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i597[19], i596.stencilOpBack)
  var i599 = i597[20]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i599[i + 0]) );
  }
  i596.tags = i598
  var i601 = i597[21]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i596.passDefinedKeywords = i600
  var i603 = i597[22]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i603[i + 0]) );
  }
  i596.passDefinedKeywordGroups = i602
  var i605 = i597[23]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i605[i + 0]) );
  }
  i596.variants = i604
  var i607 = i597[24]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i607[i + 0]) );
  }
  i596.excludedVariants = i606
  i596.hasDepthReader = !!i597[25]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i609 = data
  i608.val = i609[0]
  i608.name = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i611 = data
  i610.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[0], i610.src)
  i610.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[1], i610.dst)
  i610.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[2], i610.op)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i613 = data
  i612.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[0], i612.pass)
  i612.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[1], i612.fail)
  i612.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[2], i612.zFail)
  i612.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[3], i612.comp)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i620.keywords = i622
  i620.hasDiscard = !!i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i627 = data
  i626.passId = i627[0]
  i626.subShaderIndex = i627[1]
  var i629 = i627[2]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( i629[i + 0] );
  }
  i626.keywords = i628
  i626.vertexProgram = i627[3]
  i626.fragmentProgram = i627[4]
  i626.exportedForWebGl2 = !!i627[5]
  i626.readDepth = !!i627[6]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'shader')
  i632.pass = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i637 = data
  i636.name = i637[0]
  i636.type = i637[1]
  i636.value = new pc.Vec4( i637[2], i637[3], i637[4], i637[5] )
  i636.textureValue = i637[6]
  i636.shaderPropertyFlag = i637[7]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i639 = data
  i638.name = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'texture')
  i638.aabb = i639[3]
  i638.vertices = i639[4]
  i638.triangles = i639[5]
  i638.textureRect = UnityEngine.Rect.MinMaxRect(i639[6], i639[7], i639[8], i639[9])
  i638.packedRect = UnityEngine.Rect.MinMaxRect(i639[10], i639[11], i639[12], i639[13])
  i638.border = new pc.Vec4( i639[14], i639[15], i639[16], i639[17] )
  i638.transparency = i639[18]
  i638.bounds = i639[19]
  i638.pixelsPerUnit = i639[20]
  i638.textureWidth = i639[21]
  i638.textureHeight = i639[22]
  i638.nativeSize = new pc.Vec2( i639[23], i639[24] )
  i638.pivot = new pc.Vec2( i639[25], i639[26] )
  i638.textureRectOffset = new pc.Vec2( i639[27], i639[28] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i641 = data
  i640.name = i641[0]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i643 = data
  i642.name = i643[0]
  i642.ascent = i643[1]
  i642.originalLineHeight = i643[2]
  i642.fontSize = i643[3]
  var i645 = i643[4]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i645[i + 0]) );
  }
  i642.characterInfo = i644
  request.r(i643[5], i643[6], 0, i642, 'texture')
  i642.originalFontSize = i643[7]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i649 = data
  i648.index = i649[0]
  i648.advance = i649[1]
  i648.bearing = i649[2]
  i648.glyphWidth = i649[3]
  i648.glyphHeight = i649[4]
  i648.minX = i649[5]
  i648.maxX = i649[6]
  i648.minY = i649[7]
  i648.maxY = i649[8]
  i648.uvBottomLeftX = i649[9]
  i648.uvBottomLeftY = i649[10]
  i648.uvBottomRightX = i649[11]
  i648.uvBottomRightY = i649[12]
  i648.uvTopLeftX = i649[13]
  i648.uvTopLeftY = i649[14]
  i648.uvTopRightX = i649[15]
  i648.uvTopRightY = i649[16]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i651 = data
  i650.name = i651[0]
  i650.bytes64 = i651[1]
  i650.data = i651[2]
  return i650
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i652 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i653 = data
  i652.normalStyle = i653[0]
  i652.normalSpacingOffset = i653[1]
  i652.boldStyle = i653[2]
  i652.boldSpacing = i653[3]
  i652.italicStyle = i653[4]
  i652.tabSize = i653[5]
  request.r(i653[6], i653[7], 0, i652, 'atlas')
  i652.m_SourceFontFileGUID = i653[8]
  i652.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i653[9], i652.m_CreationSettings)
  request.r(i653[10], i653[11], 0, i652, 'm_SourceFontFile')
  i652.m_SourceFontFilePath = i653[12]
  i652.m_AtlasPopulationMode = i653[13]
  i652.InternalDynamicOS = !!i653[14]
  var i655 = i653[15]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('UnityEngine.TextCore.Glyph', i655[i + 0]));
  }
  i652.m_GlyphTable = i654
  var i657 = i653[16]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('TMPro.TMP_Character', i657[i + 0]));
  }
  i652.m_CharacterTable = i656
  var i659 = i653[17]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i652.m_AtlasTextures = i658
  i652.m_AtlasTextureIndex = i653[18]
  i652.m_IsMultiAtlasTexturesEnabled = !!i653[19]
  i652.m_GetFontFeatures = !!i653[20]
  i652.m_ClearDynamicDataOnBuild = !!i653[21]
  i652.m_AtlasWidth = i653[22]
  i652.m_AtlasHeight = i653[23]
  i652.m_AtlasPadding = i653[24]
  i652.m_AtlasRenderMode = i653[25]
  var i661 = i653[26]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('UnityEngine.TextCore.GlyphRect', i661[i + 0]));
  }
  i652.m_UsedGlyphRects = i660
  var i663 = i653[27]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('UnityEngine.TextCore.GlyphRect', i663[i + 0]));
  }
  i652.m_FreeGlyphRects = i662
  i652.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i653[28], i652.m_FontFeatureTable)
  i652.m_ShouldReimportFontFeatures = !!i653[29]
  var i665 = i653[30]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i652.m_FallbackFontAssetTable = i664
  var i667 = i653[31]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('TMPro.TMP_FontWeightPair', i667[i + 0]) );
  }
  i652.m_FontWeightTable = i666
  var i669 = i653[32]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('TMPro.TMP_FontWeightPair', i669[i + 0]) );
  }
  i652.fontWeights = i668
  i652.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i653[33], i652.m_fontInfo)
  var i671 = i653[34]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('TMPro.TMP_Glyph', i671[i + 0]));
  }
  i652.m_glyphInfoList = i670
  i652.m_KerningTable = request.d('TMPro.KerningTable', i653[35], i652.m_KerningTable)
  var i673 = i653[36]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 1, i672, '')
  }
  i652.fallbackFontAssets = i672
  i652.m_Version = i653[37]
  i652.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i653[38], i652.m_FaceInfo)
  request.r(i653[39], i653[40], 0, i652, 'm_Material')
  return i652
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i675 = data
  i674.sourceFontFileName = i675[0]
  i674.sourceFontFileGUID = i675[1]
  i674.faceIndex = i675[2]
  i674.pointSizeSamplingMode = i675[3]
  i674.pointSize = i675[4]
  i674.padding = i675[5]
  i674.paddingMode = i675[6]
  i674.packingMode = i675[7]
  i674.atlasWidth = i675[8]
  i674.atlasHeight = i675[9]
  i674.characterSetSelectionMode = i675[10]
  i674.characterSequence = i675[11]
  i674.referencedFontAssetGUID = i675[12]
  i674.referencedTextAssetGUID = i675[13]
  i674.fontStyle = i675[14]
  i674.fontStyleModifier = i675[15]
  i674.renderMode = i675[16]
  i674.includeFontFeatures = !!i675[17]
  return i674
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i679 = data
  i678.m_Index = i679[0]
  i678.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i679[1], i678.m_Metrics)
  i678.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i679[2], i678.m_GlyphRect)
  i678.m_Scale = i679[3]
  i678.m_AtlasIndex = i679[4]
  i678.m_ClassDefinitionType = i679[5]
  return i678
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i681 = data
  i680.m_Width = i681[0]
  i680.m_Height = i681[1]
  i680.m_HorizontalBearingX = i681[2]
  i680.m_HorizontalBearingY = i681[3]
  i680.m_HorizontalAdvance = i681[4]
  return i680
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i683 = data
  i682.m_X = i683[0]
  i682.m_Y = i683[1]
  i682.m_Width = i683[2]
  i682.m_Height = i683[3]
  return i682
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i686 = root || request.c( 'TMPro.TMP_Character' )
  var i687 = data
  i686.m_ElementType = i687[0]
  i686.m_Unicode = i687[1]
  i686.m_GlyphIndex = i687[2]
  i686.m_Scale = i687[3]
  return i686
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i692 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('TMPro.MultipleSubstitutionRecord', i695[i + 0]));
  }
  i692.m_MultipleSubstitutionRecords = i694
  var i697 = i693[1]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('TMPro.LigatureSubstitutionRecord', i697[i + 0]));
  }
  i692.m_LigatureSubstitutionRecords = i696
  var i699 = i693[2]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i699[i + 0]));
  }
  i692.m_GlyphPairAdjustmentRecords = i698
  var i701 = i693[3]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i701[i + 0]));
  }
  i692.m_MarkToBaseAdjustmentRecords = i700
  var i703 = i693[4]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i703[i + 0]));
  }
  i692.m_MarkToMarkAdjustmentRecords = i702
  return i692
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i707 = data
  i706.m_TargetGlyphID = i707[0]
  i706.m_SubstituteGlyphIDs = i707[1]
  return i706
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i711 = data
  i710.m_ComponentGlyphIDs = i711[0]
  i710.m_LigatureGlyphID = i711[1]
  return i710
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i715 = data
  i714.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i715[0], i714.m_FirstAdjustmentRecord)
  i714.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i715[1], i714.m_SecondAdjustmentRecord)
  i714.m_FeatureLookupFlags = i715[2]
  return i714
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i719 = data
  i718.m_BaseGlyphID = i719[0]
  i718.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i719[1], i718.m_BaseGlyphAnchorPoint)
  i718.m_MarkGlyphID = i719[2]
  i718.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i719[3], i718.m_MarkPositionAdjustment)
  return i718
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i723 = data
  i722.m_BaseMarkGlyphID = i723[0]
  i722.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i723[1], i722.m_BaseMarkGlyphAnchorPoint)
  i722.m_CombiningMarkGlyphID = i723[2]
  i722.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i723[3], i722.m_CombiningMarkPositionAdjustment)
  return i722
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'regularTypeface')
  request.r(i729[2], i729[3], 0, i728, 'italicTypeface')
  return i728
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i730 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i731 = data
  i730.Name = i731[0]
  i730.PointSize = i731[1]
  i730.Scale = i731[2]
  i730.CharacterCount = i731[3]
  i730.LineHeight = i731[4]
  i730.Baseline = i731[5]
  i730.Ascender = i731[6]
  i730.CapHeight = i731[7]
  i730.Descender = i731[8]
  i730.CenterLine = i731[9]
  i730.SuperscriptOffset = i731[10]
  i730.SubscriptOffset = i731[11]
  i730.SubSize = i731[12]
  i730.Underline = i731[13]
  i730.UnderlineThickness = i731[14]
  i730.strikethrough = i731[15]
  i730.strikethroughThickness = i731[16]
  i730.TabWidth = i731[17]
  i730.Padding = i731[18]
  i730.AtlasWidth = i731[19]
  i730.AtlasHeight = i731[20]
  return i730
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.TMP_Glyph' )
  var i735 = data
  i734.id = i735[0]
  i734.x = i735[1]
  i734.y = i735[2]
  i734.width = i735[3]
  i734.height = i735[4]
  i734.xOffset = i735[5]
  i734.yOffset = i735[6]
  i734.xAdvance = i735[7]
  i734.scale = i735[8]
  return i734
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i736 = root || request.c( 'TMPro.KerningTable' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('TMPro.KerningPair', i739[i + 0]));
  }
  i736.kerningPairs = i738
  return i736
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.KerningPair' )
  var i743 = data
  i742.xOffset = i743[0]
  i742.m_FirstGlyph = i743[1]
  i742.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i743[2], i742.m_FirstGlyphAdjustments)
  i742.m_SecondGlyph = i743[3]
  i742.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i743[4], i742.m_SecondGlyphAdjustments)
  i742.m_IgnoreSpacingAdjustments = !!i743[5]
  return i742
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i745 = data
  i744.m_FaceIndex = i745[0]
  i744.m_FamilyName = i745[1]
  i744.m_StyleName = i745[2]
  i744.m_PointSize = i745[3]
  i744.m_Scale = i745[4]
  i744.m_UnitsPerEM = i745[5]
  i744.m_LineHeight = i745[6]
  i744.m_AscentLine = i745[7]
  i744.m_CapLine = i745[8]
  i744.m_MeanLine = i745[9]
  i744.m_Baseline = i745[10]
  i744.m_DescentLine = i745[11]
  i744.m_SuperscriptOffset = i745[12]
  i744.m_SuperscriptSize = i745[13]
  i744.m_SubscriptOffset = i745[14]
  i744.m_SubscriptSize = i745[15]
  i744.m_UnderlineOffset = i745[16]
  i744.m_UnderlineThickness = i745[17]
  i744.m_StrikethroughOffset = i745[18]
  i744.m_StrikethroughThickness = i745[19]
  i744.m_TabWidth = i745[20]
  return i744
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.TMP_Settings' )
  var i747 = data
  i746.assetVersion = i747[0]
  i746.m_TextWrappingMode = i747[1]
  i746.m_enableKerning = !!i747[2]
  var i749 = i747[3]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(i749[i + 0]);
  }
  i746.m_ActiveFontFeatures = i748
  i746.m_enableExtraPadding = !!i747[4]
  i746.m_enableTintAllSprites = !!i747[5]
  i746.m_enableParseEscapeCharacters = !!i747[6]
  i746.m_EnableRaycastTarget = !!i747[7]
  i746.m_GetFontFeaturesAtRuntime = !!i747[8]
  i746.m_missingGlyphCharacter = i747[9]
  i746.m_ClearDynamicDataOnBuild = !!i747[10]
  i746.m_warningsDisabled = !!i747[11]
  request.r(i747[12], i747[13], 0, i746, 'm_defaultFontAsset')
  i746.m_defaultFontAssetPath = i747[14]
  i746.m_defaultFontSize = i747[15]
  i746.m_defaultAutoSizeMinRatio = i747[16]
  i746.m_defaultAutoSizeMaxRatio = i747[17]
  i746.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i747[18], i747[19] )
  i746.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i747[20], i747[21] )
  i746.m_autoSizeTextContainer = !!i747[22]
  i746.m_IsTextObjectScaleStatic = !!i747[23]
  var i751 = i747[24]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i746.m_fallbackFontAssets = i750
  i746.m_matchMaterialPreset = !!i747[25]
  i746.m_HideSubTextObjects = !!i747[26]
  request.r(i747[27], i747[28], 0, i746, 'm_defaultSpriteAsset')
  i746.m_defaultSpriteAssetPath = i747[29]
  i746.m_enableEmojiSupport = !!i747[30]
  i746.m_MissingCharacterSpriteUnicode = i747[31]
  var i753 = i747[32]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i746.m_EmojiFallbackTextAssets = i752
  i746.m_defaultColorGradientPresetsPath = i747[33]
  request.r(i747[34], i747[35], 0, i746, 'm_defaultStyleSheet')
  i746.m_StyleSheetsResourcePath = i747[36]
  request.r(i747[37], i747[38], 0, i746, 'm_leadingCharacters')
  request.r(i747[39], i747[40], 0, i746, 'm_followingCharacters')
  i746.m_UseModernHangulLineBreakingRules = !!i747[41]
  return i746
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i757 = data
  i756.m_GlyphIndex = i757[0]
  i756.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i757[1], i756.m_GlyphValueRecord)
  return i756
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i759 = data
  i758.m_XPlacement = i759[0]
  i758.m_YPlacement = i759[1]
  i758.m_XAdvance = i759[2]
  i758.m_YAdvance = i759[3]
  return i758
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i760 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'spriteSheet')
  var i763 = i761[2]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('TMPro.TMP_Sprite', i763[i + 0]));
  }
  i760.spriteInfoList = i762
  var i765 = i761[3]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i760.fallbackSpriteAssets = i764
  var i767 = i761[4]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('TMPro.TMP_SpriteCharacter', i767[i + 0]));
  }
  i760.m_SpriteCharacterTable = i766
  var i769 = i761[5]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_SpriteGlyph', i769[i + 0]));
  }
  i760.m_GlyphTable = i768
  i760.m_Version = i761[6]
  i760.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i761[7], i760.m_FaceInfo)
  request.r(i761[8], i761[9], 0, i760, 'm_Material')
  return i760
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_Sprite' )
  var i773 = data
  i772.name = i773[0]
  i772.hashCode = i773[1]
  i772.unicode = i773[2]
  i772.pivot = new pc.Vec2( i773[3], i773[4] )
  request.r(i773[5], i773[6], 0, i772, 'sprite')
  i772.id = i773[7]
  i772.x = i773[8]
  i772.y = i773[9]
  i772.width = i773[10]
  i772.height = i773[11]
  i772.xOffset = i773[12]
  i772.yOffset = i773[13]
  i772.xAdvance = i773[14]
  i772.scale = i773[15]
  return i772
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i779 = data
  i778.m_Name = i779[0]
  i778.m_ElementType = i779[1]
  i778.m_Unicode = i779[2]
  i778.m_GlyphIndex = i779[3]
  i778.m_Scale = i779[4]
  return i778
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'sprite')
  i782.m_Index = i783[2]
  i782.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i783[3], i782.m_Metrics)
  i782.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i783[4], i782.m_GlyphRect)
  i782.m_Scale = i783[5]
  i782.m_AtlasIndex = i783[6]
  i782.m_ClassDefinitionType = i783[7]
  return i782
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Style', i787[i + 0]));
  }
  i784.m_StyleList = i786
  return i784
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.TMP_Style' )
  var i791 = data
  i790.m_Name = i791[0]
  i790.m_HashCode = i791[1]
  i790.m_OpeningDefinition = i791[2]
  i790.m_ClosingDefinition = i791[3]
  i790.m_OpeningTagArray = i791[4]
  i790.m_ClosingTagArray = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i795[i + 0]) );
  }
  i792.files = i794
  i792.componentToPrefabIds = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i799 = data
  i798.path = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'unityObject')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i803[i + 0]) );
  }
  i800.scriptsExecutionOrder = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i805[i + 0]) );
  }
  i800.sortingLayers = i804
  var i807 = i801[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i807[i + 0]) );
  }
  i800.cullingLayers = i806
  i800.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i801[3], i800.timeSettings)
  i800.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i801[4], i800.physicsSettings)
  i800.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i801[5], i800.physics2DSettings)
  i800.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i801[6], i800.qualitySettings)
  i800.enableRealtimeShadows = !!i801[7]
  i800.enableAutoInstancing = !!i801[8]
  i800.enableStaticBatching = !!i801[9]
  i800.enableDynamicBatching = !!i801[10]
  i800.usePreservativeDynamicBatching = !!i801[11]
  i800.lightmapEncodingQuality = i801[12]
  i800.desiredColorSpace = i801[13]
  var i809 = i801[14]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i800.allTags = i808
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.value = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i823 = data
  i822.fixedDeltaTime = i823[0]
  i822.maximumDeltaTime = i823[1]
  i822.timeScale = i823[2]
  i822.maximumParticleTimestep = i823[3]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i825 = data
  i824.gravity = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.defaultSolverIterations = i825[3]
  i824.bounceThreshold = i825[4]
  i824.autoSyncTransforms = !!i825[5]
  i824.autoSimulation = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i827[i + 0]) );
  }
  i824.collisionMatrix = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i831 = data
  i830.enabled = !!i831[0]
  i830.layerId = i831[1]
  i830.otherLayerId = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'material')
  i832.gravity = new pc.Vec2( i833[2], i833[3] )
  i832.positionIterations = i833[4]
  i832.velocityIterations = i833[5]
  i832.velocityThreshold = i833[6]
  i832.maxLinearCorrection = i833[7]
  i832.maxAngularCorrection = i833[8]
  i832.maxTranslationSpeed = i833[9]
  i832.maxRotationSpeed = i833[10]
  i832.baumgarteScale = i833[11]
  i832.baumgarteTOIScale = i833[12]
  i832.timeToSleep = i833[13]
  i832.linearSleepTolerance = i833[14]
  i832.angularSleepTolerance = i833[15]
  i832.defaultContactOffset = i833[16]
  i832.autoSimulation = !!i833[17]
  i832.queriesHitTriggers = !!i833[18]
  i832.queriesStartInColliders = !!i833[19]
  i832.callbacksOnDisable = !!i833[20]
  i832.reuseCollisionCallbacks = !!i833[21]
  i832.autoSyncTransforms = !!i833[22]
  var i835 = i833[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i835[i + 0]) );
  }
  i832.collisionMatrix = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i839 = data
  i838.enabled = !!i839[0]
  i838.layerId = i839[1]
  i838.otherLayerId = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i843[i + 0]) );
  }
  i840.qualityLevels = i842
  var i845 = i841[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i840.names = i844
  i840.shadows = i841[2]
  i840.anisotropicFiltering = i841[3]
  i840.antiAliasing = i841[4]
  i840.lodBias = i841[5]
  i840.shadowCascades = i841[6]
  i840.shadowDistance = i841[7]
  i840.shadowmaskMode = i841[8]
  i840.shadowProjection = i841[9]
  i840.shadowResolution = i841[10]
  i840.softParticles = !!i841[11]
  i840.softVegetation = !!i841[12]
  i840.activeColorSpace = i841[13]
  i840.desiredColorSpace = i841[14]
  i840.masterTextureLimit = i841[15]
  i840.maxQueuedFrames = i841[16]
  i840.particleRaycastBudget = i841[17]
  i840.pixelLightCount = i841[18]
  i840.realtimeReflectionProbes = !!i841[19]
  i840.shadowCascade2Split = i841[20]
  i840.shadowCascade4Split = new pc.Vec3( i841[21], i841[22], i841[23] )
  i840.streamingMipmapsActive = !!i841[24]
  i840.vSyncCount = i841[25]
  i840.asyncUploadBufferSize = i841[26]
  i840.asyncUploadTimeSlice = i841[27]
  i840.billboardsFaceCameraPosition = !!i841[28]
  i840.shadowNearPlaneOffset = i841[29]
  i840.streamingMipmapsMemoryBudget = i841[30]
  i840.maximumLODLevel = i841[31]
  i840.streamingMipmapsAddAllCameras = !!i841[32]
  i840.streamingMipmapsMaxLevelReduction = i841[33]
  i840.streamingMipmapsRenderersPerFrame = i841[34]
  i840.resolutionScalingFixedDPIFactor = i841[35]
  i840.streamingMipmapsMaxFileIORequests = i841[36]
  i840.currentQualityLevel = i841[37]
  return i840
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'm_ObjectArgument')
  i848.m_ObjectArgumentAssemblyTypeName = i849[2]
  i848.m_IntArgument = i849[3]
  i848.m_FloatArgument = i849[4]
  i848.m_StringArgument = i849[5]
  i848.m_BoolArgument = !!i849[6]
  return i848
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i851 = data
  i850.m_XCoordinate = i851[0]
  i850.m_YCoordinate = i851[1]
  return i850
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i853 = data
  i852.m_XPositionAdjustment = i853[0]
  i852.m_YPositionAdjustment = i853[1]
  return i852
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i855 = data
  i854.xPlacement = i855[0]
  i854.yPlacement = i855[1]
  i854.xAdvance = i855[2]
  i854.yAdvance = i855[3]
  return i854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[2],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"8":[7],"67":[2],"68":[13],"69":[70],"71":[2],"72":[73],"74":[5],"75":[8],"76":[7],"77":[63,7],"16":[7,11],"78":[7],"79":[11,7],"80":[63],"81":[11,7],"82":[7],"83":[84],"85":[84],"86":[84],"87":[7],"88":[7],"10":[8],"13":[11,7],"89":[7],"9":[8],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"19":[7],"97":[7],"12":[11,7],"98":[7],"99":[7],"15":[7],"100":[7],"101":[11,7],"102":[7],"103":[5],"104":[5],"6":[5],"105":[5],"106":[2],"107":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.ScrollRect","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Mask","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","MelonAd.WeaponInventoryPLA","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MelonAd.CameraFit","MelonAd.CtaOverlay","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "29.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_PSF_V04_YenTTH";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1705";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3830";

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

Deserializers.buildID = "6385cad5-e4af-4484-b4b9-861331b310da";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

