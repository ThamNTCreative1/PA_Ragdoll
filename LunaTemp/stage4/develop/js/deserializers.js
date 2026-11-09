var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointSpring' )
  var i437 = data
  i436.spring = i437[0]
  i436.damper = i437[1]
  i436.targetPosition = i437[2]
  return i436
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointMotor' )
  var i439 = data
  i438.m_TargetVelocity = i439[0]
  i438.m_Force = i439[1]
  i438.m_FreeSpin = i439[2]
  return i438
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointLimits' )
  var i441 = data
  i440.m_Min = i441[0]
  i440.m_Max = i441[1]
  i440.m_Bounciness = i441[2]
  i440.m_BounceMinVelocity = i441[3]
  i440.m_ContactDistance = i441[4]
  i440.minBounce = i441[5]
  i440.maxBounce = i441[6]
  return i440
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointDrive' )
  var i443 = data
  i442.m_PositionSpring = i443[0]
  i442.m_PositionDamper = i443[1]
  i442.m_MaximumForce = i443[2]
  i442.m_UseAcceleration = i443[3]
  return i442
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i445 = data
  i444.m_Spring = i445[0]
  i444.m_Damper = i445[1]
  return i444
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i447 = data
  i446.m_Limit = i447[0]
  i446.m_Bounciness = i447[1]
  i446.m_ContactDistance = i447[2]
  return i446
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i449 = data
  i448.m_ExtremumSlip = i449[0]
  i448.m_ExtremumValue = i449[1]
  i448.m_AsymptoteSlip = i449[2]
  i448.m_AsymptoteValue = i449[3]
  i448.m_Stiffness = i449[4]
  return i448
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i451 = data
  i450.m_LowerAngle = i451[0]
  i450.m_UpperAngle = i451[1]
  return i450
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i453 = data
  i452.m_MotorSpeed = i453[0]
  i452.m_MaximumMotorTorque = i453[1]
  return i452
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i455 = data
  i454.m_DampingRatio = i455[0]
  i454.m_Frequency = i455[1]
  i454.m_Angle = i455[2]
  return i454
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i457 = data
  i456.m_LowerTranslation = i457[0]
  i456.m_UpperTranslation = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i458 = root || new pc.UnityMaterial()
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'shader')
  i458.renderQueue = i459[3]
  i458.enableInstancing = !!i459[4]
  var i461 = i459[5]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i461[i + 0]) );
  }
  i458.floatParameters = i460
  var i463 = i459[6]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i463[i + 0]) );
  }
  i458.colorParameters = i462
  var i465 = i459[7]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i465[i + 0]) );
  }
  i458.vectorParameters = i464
  var i467 = i459[8]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i467[i + 0]) );
  }
  i458.textureParameters = i466
  var i469 = i459[9]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i469[i + 0]) );
  }
  i458.materialFlags = i468
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i477 = data
  i476.name = i477[0]
  i476.value = new pc.Color(i477[1], i477[2], i477[3], i477[4])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i481 = data
  i480.name = i481[0]
  i480.value = new pc.Vec4( i481[1], i481[2], i481[3], i481[4] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i485 = data
  i484.name = i485[0]
  request.r(i485[1], i485[2], 0, i484, 'value')
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i489 = data
  i488.name = i489[0]
  i488.enabled = !!i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i491 = data
  i490.name = i491[0]
  i490.width = i491[1]
  i490.height = i491[2]
  i490.mipmapCount = i491[3]
  i490.anisoLevel = i491[4]
  i490.filterMode = i491[5]
  i490.hdr = !!i491[6]
  i490.format = i491[7]
  i490.wrapMode = i491[8]
  i490.alphaIsTransparency = !!i491[9]
  i490.alphaSource = i491[10]
  i490.graphicsFormat = i491[11]
  i490.sRGBTexture = !!i491[12]
  i490.desiredColorSpace = i491[13]
  i490.wrapU = i491[14]
  i490.wrapV = i491[15]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i493 = data
  i492.name = i493[0]
  i492.index = i493[1]
  i492.startup = !!i493[2]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i495 = data
  i494.aspect = i495[0]
  i494.orthographic = !!i495[1]
  i494.orthographicSize = i495[2]
  i494.backgroundColor = new pc.Color(i495[3], i495[4], i495[5], i495[6])
  i494.nearClipPlane = i495[7]
  i494.farClipPlane = i495[8]
  i494.fieldOfView = i495[9]
  i494.depth = i495[10]
  i494.clearFlags = i495[11]
  i494.cullingMask = i495[12]
  i494.rect = i495[13]
  request.r(i495[14], i495[15], 0, i494, 'targetTexture')
  i494.usePhysicalProperties = !!i495[16]
  i494.focalLength = i495[17]
  i494.sensorSize = new pc.Vec2( i495[18], i495[19] )
  i494.lensShift = new pc.Vec2( i495[20], i495[21] )
  i494.gateFit = i495[22]
  i494.commandBufferCount = i495[23]
  i494.cameraType = i495[24]
  i494.enabled = !!i495[25]
  return i494
}

Deserializers["ResponsiveLayout"] = function (request, data, root) {
  var i496 = root || request.c( 'ResponsiveLayout' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'cam')
  request.r(i497[2], i497[3], 0, i496, 'scaler')
  request.r(i497[4], i497[5], 0, i496, 'background')
  request.r(i497[6], i497[7], 0, i496, 'backgroundTexture')
  i496.halfWidth = i497[8]
  i496.worldBottom = i497[9]
  i496.worldTop = i497[10]
  i496.topReserve = i497[11]
  request.r(i497[12], i497[13], 0, i496, 'tapButton')
  i496.tapButtonPortrait = new pc.Vec2( i497[14], i497[15] )
  i496.tapButtonLandscape = new pc.Vec2( i497[16], i497[17] )
  request.r(i497[18], i497[19], 0, i496, 'hintText')
  i496.hintTopMargin = i497[20]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i499 = data
  i498.color = new pc.Color(i499[0], i499[1], i499[2], i499[3])
  request.r(i499[4], i499[5], 0, i498, 'sprite')
  i498.flipX = !!i499[6]
  i498.flipY = !!i499[7]
  i498.drawMode = i499[8]
  i498.size = new pc.Vec2( i499[9], i499[10] )
  i498.tileMode = i499[11]
  i498.adaptiveModeThreshold = i499[12]
  i498.maskInteraction = i499[13]
  i498.spriteSortPoint = i499[14]
  i498.enabled = !!i499[15]
  request.r(i499[16], i499[17], 0, i498, 'sharedMaterial')
  var i501 = i499[18]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i498.sharedMaterials = i500
  i498.receiveShadows = !!i499[19]
  i498.shadowCastingMode = i499[20]
  i498.sortingLayerID = i499[21]
  i498.sortingOrder = i499[22]
  i498.lightmapIndex = i499[23]
  i498.lightmapSceneIndex = i499[24]
  i498.lightmapScaleOffset = new pc.Vec4( i499[25], i499[26], i499[27], i499[28] )
  i498.lightProbeUsage = i499[29]
  i498.reflectionProbeUsage = i499[30]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i505 = data
  i504.name = i505[0]
  i504.tagId = i505[1]
  i504.enabled = !!i505[2]
  i504.isStatic = !!i505[3]
  i504.layer = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i507 = data
  i506.usedByComposite = !!i507[0]
  i506.autoTiling = !!i507[1]
  i506.size = new pc.Vec2( i507[2], i507[3] )
  i506.edgeRadius = i507[4]
  i506.enabled = !!i507[5]
  i506.isTrigger = !!i507[6]
  i506.usedByEffector = !!i507[7]
  i506.density = i507[8]
  i506.offset = new pc.Vec2( i507[9], i507[10] )
  request.r(i507[11], i507[12], 0, i506, 'material')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i509 = data
  i508.sortingLayerIndex = i509[0]
  i508.sortingOrder = i509[1]
  i508.sortingLayerName = i509[2]
  i508.enabled = !!i509[3]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i511 = data
  i510.bodyType = i511[0]
  request.r(i511[1], i511[2], 0, i510, 'material')
  i510.simulated = !!i511[3]
  i510.useAutoMass = !!i511[4]
  i510.mass = i511[5]
  i510.drag = i511[6]
  i510.angularDrag = i511[7]
  i510.gravityScale = i511[8]
  i510.collisionDetectionMode = i511[9]
  i510.sleepMode = i511[10]
  i510.constraints = i511[11]
  return i510
}

Deserializers["RagdollPose"] = function (request, data, root) {
  var i512 = root || request.c( 'RagdollPose' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'head')
  request.r(i513[2], i513[3], 0, i512, 'body')
  request.r(i513[4], i513[5], 0, i512, 'leftHand')
  request.r(i513[6], i513[7], 0, i512, 'rightHand')
  request.r(i513[8], i513[9], 0, i512, 'leftLeg')
  request.r(i513[10], i513[11], 0, i512, 'rightLeg')
  i512.shoulder = new pc.Vec2( i513[12], i513[13] )
  i512.neck = new pc.Vec2( i513[14], i513[15] )
  i512.hipLeft = new pc.Vec2( i513[16], i513[17] )
  i512.hipRight = new pc.Vec2( i513[18], i513[19] )
  i512.handTipLocal = i513[20]
  i512.leftArm = i513[21]
  i512.rightArm = i513[22]
  i512.leftLegAngle = i513[23]
  i512.rightLegAngle = i513[24]
  i512.headAngle = i513[25]
  i512.bob = i513[26]
  i512.feetOffset = i513[27]
  i512.height = i513[28]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i515 = data
  i514.useLimits = !!i515[0]
  i514.limits = request.d('UnityEngine.JointAngleLimits2D', i515[1], i514.limits)
  i514.useMotor = !!i515[2]
  i514.motor = request.d('UnityEngine.JointMotor2D', i515[3], i514.motor)
  i514.anchor = new pc.Vec2( i515[4], i515[5] )
  i514.connectedAnchor = new pc.Vec2( i515[6], i515[7] )
  i514.autoConfigureConnectedAnchor = !!i515[8]
  request.r(i515[9], i515[10], 0, i514, 'connectedBody')
  i514.breakForce = i515[11]
  i514.breakTorque = i515[12]
  i514.enableCollision = !!i515[13]
  i514.enabled = !!i515[14]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'clip')
  request.r(i517[2], i517[3], 0, i516, 'outputAudioMixerGroup')
  i516.playOnAwake = !!i517[4]
  i516.loop = !!i517[5]
  i516.time = i517[6]
  i516.volume = i517[7]
  i516.pitch = i517[8]
  i516.enabled = !!i517[9]
  return i516
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_FirstSelected')
  i518.m_sendNavigationEvents = !!i519[2]
  i518.m_DragThreshold = i519[3]
  return i518
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i521 = data
  i520.m_HorizontalAxis = i521[0]
  i520.m_VerticalAxis = i521[1]
  i520.m_SubmitButton = i521[2]
  i520.m_CancelButton = i521[3]
  i520.m_InputActionsPerSecond = i521[4]
  i520.m_RepeatDelay = i521[5]
  i520.m_ForceModuleActive = !!i521[6]
  i520.m_SendPointerHoverToParent = !!i521[7]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i523 = data
  i522.pivot = new pc.Vec2( i523[0], i523[1] )
  i522.anchorMin = new pc.Vec2( i523[2], i523[3] )
  i522.anchorMax = new pc.Vec2( i523[4], i523[5] )
  i522.sizeDelta = new pc.Vec2( i523[6], i523[7] )
  i522.anchoredPosition3D = new pc.Vec3( i523[8], i523[9], i523[10] )
  i522.rotation = new pc.Quat(i523[11], i523[12], i523[13], i523[14])
  i522.scale = new pc.Vec3( i523[15], i523[16], i523[17] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i525 = data
  i524.planeDistance = i525[0]
  i524.referencePixelsPerUnit = i525[1]
  i524.isFallbackOverlay = !!i525[2]
  i524.renderMode = i525[3]
  i524.renderOrder = i525[4]
  i524.sortingLayerName = i525[5]
  i524.sortingOrder = i525[6]
  i524.scaleFactor = i525[7]
  request.r(i525[8], i525[9], 0, i524, 'worldCamera')
  i524.overrideSorting = !!i525[10]
  i524.pixelPerfect = !!i525[11]
  i524.targetDisplay = i525[12]
  i524.overridePixelPerfect = !!i525[13]
  i524.enabled = !!i525[14]
  return i524
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i527 = data
  i526.m_UiScaleMode = i527[0]
  i526.m_ReferencePixelsPerUnit = i527[1]
  i526.m_ScaleFactor = i527[2]
  i526.m_ReferenceResolution = new pc.Vec2( i527[3], i527[4] )
  i526.m_ScreenMatchMode = i527[5]
  i526.m_MatchWidthOrHeight = i527[6]
  i526.m_PhysicalUnit = i527[7]
  i526.m_FallbackScreenDPI = i527[8]
  i526.m_DefaultSpriteDPI = i527[9]
  i526.m_DynamicPixelsPerUnit = i527[10]
  i526.m_PresetInfoIsWorld = !!i527[11]
  return i526
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i529 = data
  i528.m_IgnoreReversedGraphics = !!i529[0]
  i528.m_BlockingObjects = i529[1]
  i528.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i529[2] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i531 = data
  i530.cullTransparentMesh = !!i531[0]
  return i530
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i532 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i533 = data
  i532.m_hasFontAssetChanged = !!i533[0]
  request.r(i533[1], i533[2], 0, i532, 'm_baseMaterial')
  i532.m_maskOffset = new pc.Vec4( i533[3], i533[4], i533[5], i533[6] )
  i532.m_text = i533[7]
  i532.m_isRightToLeft = !!i533[8]
  request.r(i533[9], i533[10], 0, i532, 'm_fontAsset')
  request.r(i533[11], i533[12], 0, i532, 'm_sharedMaterial')
  var i535 = i533[13]
  var i534 = []
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 2, i534, '')
  }
  i532.m_fontSharedMaterials = i534
  request.r(i533[14], i533[15], 0, i532, 'm_fontMaterial')
  var i537 = i533[16]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i532.m_fontMaterials = i536
  i532.m_fontColor32 = UnityEngine.Color32.ConstructColor(i533[17], i533[18], i533[19], i533[20])
  i532.m_fontColor = new pc.Color(i533[21], i533[22], i533[23], i533[24])
  i532.m_enableVertexGradient = !!i533[25]
  i532.m_colorMode = i533[26]
  i532.m_fontColorGradient = request.d('TMPro.VertexGradient', i533[27], i532.m_fontColorGradient)
  request.r(i533[28], i533[29], 0, i532, 'm_fontColorGradientPreset')
  request.r(i533[30], i533[31], 0, i532, 'm_spriteAsset')
  i532.m_tintAllSprites = !!i533[32]
  request.r(i533[33], i533[34], 0, i532, 'm_StyleSheet')
  i532.m_TextStyleHashCode = i533[35]
  i532.m_overrideHtmlColors = !!i533[36]
  i532.m_faceColor = UnityEngine.Color32.ConstructColor(i533[37], i533[38], i533[39], i533[40])
  i532.m_fontSize = i533[41]
  i532.m_fontSizeBase = i533[42]
  i532.m_fontWeight = i533[43]
  i532.m_enableAutoSizing = !!i533[44]
  i532.m_fontSizeMin = i533[45]
  i532.m_fontSizeMax = i533[46]
  i532.m_fontStyle = i533[47]
  i532.m_HorizontalAlignment = i533[48]
  i532.m_VerticalAlignment = i533[49]
  i532.m_textAlignment = i533[50]
  i532.m_characterSpacing = i533[51]
  i532.m_wordSpacing = i533[52]
  i532.m_lineSpacing = i533[53]
  i532.m_lineSpacingMax = i533[54]
  i532.m_paragraphSpacing = i533[55]
  i532.m_charWidthMaxAdj = i533[56]
  i532.m_TextWrappingMode = i533[57]
  i532.m_wordWrappingRatios = i533[58]
  i532.m_overflowMode = i533[59]
  request.r(i533[60], i533[61], 0, i532, 'm_linkedTextComponent')
  request.r(i533[62], i533[63], 0, i532, 'parentLinkedComponent')
  i532.m_enableKerning = !!i533[64]
  var i539 = i533[65]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i539.length; i += 1) {
    i538.add(i539[i + 0]);
  }
  i532.m_ActiveFontFeatures = i538
  i532.m_enableExtraPadding = !!i533[66]
  i532.checkPaddingRequired = !!i533[67]
  i532.m_isRichText = !!i533[68]
  i532.m_parseCtrlCharacters = !!i533[69]
  i532.m_isOrthographic = !!i533[70]
  i532.m_isCullingEnabled = !!i533[71]
  i532.m_horizontalMapping = i533[72]
  i532.m_verticalMapping = i533[73]
  i532.m_uvLineOffset = i533[74]
  i532.m_geometrySortingOrder = i533[75]
  i532.m_IsTextObjectScaleStatic = !!i533[76]
  i532.m_VertexBufferAutoSizeReduction = !!i533[77]
  i532.m_useMaxVisibleDescender = !!i533[78]
  i532.m_pageToDisplay = i533[79]
  i532.m_margin = new pc.Vec4( i533[80], i533[81], i533[82], i533[83] )
  i532.m_isUsingLegacyAnimationComponent = !!i533[84]
  i532.m_isVolumetricText = !!i533[85]
  request.r(i533[86], i533[87], 0, i532, 'm_Material')
  i532.m_EmojiFallbackSupport = !!i533[88]
  i532.m_Maskable = !!i533[89]
  i532.m_Color = new pc.Color(i533[90], i533[91], i533[92], i533[93])
  i532.m_RaycastTarget = !!i533[94]
  i532.m_RaycastPadding = new pc.Vec4( i533[95], i533[96], i533[97], i533[98] )
  return i532
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i540 = root || request.c( 'TMPro.VertexGradient' )
  var i541 = data
  i540.topLeft = new pc.Color(i541[0], i541[1], i541[2], i541[3])
  i540.topRight = new pc.Color(i541[4], i541[5], i541[6], i541[7])
  i540.bottomLeft = new pc.Color(i541[8], i541[9], i541[10], i541[11])
  i540.bottomRight = new pc.Color(i541[12], i541[13], i541[14], i541[15])
  return i540
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Image' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_Sprite')
  i544.m_Type = i545[2]
  i544.m_PreserveAspect = !!i545[3]
  i544.m_FillCenter = !!i545[4]
  i544.m_FillMethod = i545[5]
  i544.m_FillAmount = i545[6]
  i544.m_FillClockwise = !!i545[7]
  i544.m_FillOrigin = i545[8]
  i544.m_UseSpriteMesh = !!i545[9]
  i544.m_PixelsPerUnitMultiplier = i545[10]
  request.r(i545[11], i545[12], 0, i544, 'm_Material')
  i544.m_Maskable = !!i545[13]
  i544.m_Color = new pc.Color(i545[14], i545[15], i545[16], i545[17])
  i544.m_RaycastTarget = !!i545[18]
  i544.m_RaycastPadding = new pc.Vec4( i545[19], i545[20], i545[21], i545[22] )
  return i544
}

Deserializers["TapButton"] = function (request, data, root) {
  var i546 = root || request.c( 'TapButton' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'game')
  request.r(i547[2], i547[3], 0, i546, 'visual')
  i546.pressScale = i547[4]
  return i546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Button' )
  var i549 = data
  i548.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i549[0], i548.m_OnClick)
  i548.m_Navigation = request.d('UnityEngine.UI.Navigation', i549[1], i548.m_Navigation)
  i548.m_Transition = i549[2]
  i548.m_Colors = request.d('UnityEngine.UI.ColorBlock', i549[3], i548.m_Colors)
  i548.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i549[4], i548.m_SpriteState)
  i548.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i549[5], i548.m_AnimationTriggers)
  i548.m_Interactable = !!i549[6]
  request.r(i549[7], i549[8], 0, i548, 'm_TargetGraphic')
  return i548
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i551 = data
  i550.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i551[0], i550.m_PersistentCalls)
  return i550
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('UnityEngine.Events.PersistentCall', i555[i + 0]));
  }
  i552.m_Calls = i554
  return i552
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Target')
  i558.m_TargetAssemblyTypeName = i559[2]
  i558.m_MethodName = i559[3]
  i558.m_Mode = i559[4]
  i558.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i559[5], i558.m_Arguments)
  i558.m_CallState = i559[6]
  return i558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i561 = data
  i560.m_Mode = i561[0]
  i560.m_WrapAround = !!i561[1]
  request.r(i561[2], i561[3], 0, i560, 'm_SelectOnUp')
  request.r(i561[4], i561[5], 0, i560, 'm_SelectOnDown')
  request.r(i561[6], i561[7], 0, i560, 'm_SelectOnLeft')
  request.r(i561[8], i561[9], 0, i560, 'm_SelectOnRight')
  return i560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i563 = data
  i562.m_NormalColor = new pc.Color(i563[0], i563[1], i563[2], i563[3])
  i562.m_HighlightedColor = new pc.Color(i563[4], i563[5], i563[6], i563[7])
  i562.m_PressedColor = new pc.Color(i563[8], i563[9], i563[10], i563[11])
  i562.m_SelectedColor = new pc.Color(i563[12], i563[13], i563[14], i563[15])
  i562.m_DisabledColor = new pc.Color(i563[16], i563[17], i563[18], i563[19])
  i562.m_ColorMultiplier = i563[20]
  i562.m_FadeDuration = i563[21]
  return i562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'm_HighlightedSprite')
  request.r(i565[2], i565[3], 0, i564, 'm_PressedSprite')
  request.r(i565[4], i565[5], 0, i564, 'm_SelectedSprite')
  request.r(i565[6], i565[7], 0, i564, 'm_DisabledSprite')
  return i564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i567 = data
  i566.m_NormalTrigger = i567[0]
  i566.m_HighlightedTrigger = i567[1]
  i566.m_PressedTrigger = i567[2]
  i566.m_SelectedTrigger = i567[3]
  i566.m_DisabledTrigger = i567[4]
  return i566
}

Deserializers["StairRaceGame"] = function (request, data, root) {
  var i568 = root || request.c( 'StairRaceGame' )
  var i569 = data
  i568.npcWinTime = i569[0]
  i568.tapPower = i569[1]
  i568.autoStartDelay = i569[2]
  i568.musicGrace = i569[3]
  i568.hintMessage = i569[4]
  i568.loseMessage = i569[5]
  i568.retryMessage = i569[6]
  request.r(i569[7], i569[8], 0, i568, 'remixClip')
  request.r(i569[9], i569[10], 0, i568, 'loseClip')
  request.r(i569[11], i569[12], 0, i568, 'fallClip')
  request.r(i569[13], i569[14], 0, i568, 'cryClip')
  request.r(i569[15], i569[16], 0, i568, 'zoey')
  request.r(i569[17], i569[18], 0, i568, 'mira')
  request.r(i569[19], i569[20], 0, i568, 'rumi')
  request.r(i569[21], i569[22], 0, i568, 'miraColumn')
  request.r(i569[23], i569[24], 0, i568, 'rumiColumn')
  i568.podiumTop = i569[25]
  i568.startTop = i569[26]
  i568.blockSize = i569[27]
  request.r(i569[28], i569[29], 0, i568, 'miraWeapon')
  request.r(i569[30], i569[31], 0, i568, 'rumiWeapon')
  request.r(i569[32], i569[33], 0, i568, 'layout')
  request.r(i569[34], i569[35], 0, i568, 'music')
  request.r(i569[36], i569[37], 0, i568, 'sfx')
  request.r(i569[38], i569[39], 0, i568, 'tapButton')
  request.r(i569[40], i569[41], 0, i568, 'tutorialHand')
  request.r(i569[42], i569[43], 0, i568, 'hintText')
  request.r(i569[44], i569[45], 0, i568, 'losePanel')
  request.r(i569[46], i569[47], 0, i568, 'loseContent')
  request.r(i569[48], i569[49], 0, i568, 'loseTitle')
  request.r(i569[50], i569[51], 0, i568, 'cryImage')
  request.r(i569[52], i569[53], 0, i568, 'retryButton')
  request.r(i569[54], i569[55], 0, i568, 'retryText')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i571 = data
  i570.ambientIntensity = i571[0]
  i570.reflectionIntensity = i571[1]
  i570.ambientMode = i571[2]
  i570.ambientLight = new pc.Color(i571[3], i571[4], i571[5], i571[6])
  i570.ambientSkyColor = new pc.Color(i571[7], i571[8], i571[9], i571[10])
  i570.ambientGroundColor = new pc.Color(i571[11], i571[12], i571[13], i571[14])
  i570.ambientEquatorColor = new pc.Color(i571[15], i571[16], i571[17], i571[18])
  i570.fogColor = new pc.Color(i571[19], i571[20], i571[21], i571[22])
  i570.fogEndDistance = i571[23]
  i570.fogStartDistance = i571[24]
  i570.fogDensity = i571[25]
  i570.fog = !!i571[26]
  request.r(i571[27], i571[28], 0, i570, 'skybox')
  i570.fogMode = i571[29]
  var i573 = i571[30]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i573[i + 0]) );
  }
  i570.lightmaps = i572
  i570.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i571[31], i570.lightProbes)
  i570.lightmapsMode = i571[32]
  i570.mixedBakeMode = i571[33]
  i570.environmentLightingMode = i571[34]
  i570.ambientProbe = new pc.SphericalHarmonicsL2(i571[35])
  request.r(i571[36], i571[37], 0, i570, 'customReflection')
  request.r(i571[38], i571[39], 0, i570, 'defaultReflection')
  i570.defaultReflectionMode = i571[40]
  i570.defaultReflectionResolution = i571[41]
  i570.sunLightObjectId = i571[42]
  i570.pixelLightCount = i571[43]
  i570.defaultReflectionHDR = !!i571[44]
  i570.hasLightDataAsset = !!i571[45]
  i570.hasManualGenerate = !!i571[46]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'lightmapColor')
  request.r(i577[2], i577[3], 0, i576, 'lightmapDirection')
  request.r(i577[4], i577[5], 0, i576, 'shadowMask')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i578 = root || new UnityEngine.LightProbes()
  var i579 = data
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i589.length; i += 1) {
    i588.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i589[i + 0]));
  }
  i586.ShaderCompilationErrors = i588
  i586.name = i587[1]
  i586.guid = i587[2]
  var i591 = i587[3]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i586.shaderDefinedKeywords = i590
  var i593 = i587[4]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i593[i + 0]) );
  }
  i586.passes = i592
  var i595 = i587[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i595[i + 0]) );
  }
  i586.usePasses = i594
  var i597 = i587[6]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i597[i + 0]) );
  }
  i586.defaultParameterValues = i596
  request.r(i587[7], i587[8], 0, i586, 'unityFallbackShader')
  i586.readDepth = !!i587[9]
  i586.hasDepthOnlyPass = !!i587[10]
  i586.isCreatedByShaderGraph = !!i587[11]
  i586.disableBatching = !!i587[12]
  i586.compiled = !!i587[13]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i601 = data
  i600.shaderName = i601[0]
  i600.errorMessage = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i606 = root || new pc.UnityShaderPass()
  var i607 = data
  i606.id = i607[0]
  i606.subShaderIndex = i607[1]
  i606.name = i607[2]
  i606.passType = i607[3]
  i606.grabPassTextureName = i607[4]
  i606.usePass = !!i607[5]
  i606.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[6], i606.zTest)
  i606.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[7], i606.zWrite)
  i606.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[8], i606.culling)
  i606.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i607[9], i606.blending)
  i606.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i607[10], i606.alphaBlending)
  i606.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[11], i606.colorWriteMask)
  i606.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[12], i606.offsetUnits)
  i606.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[13], i606.offsetFactor)
  i606.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[14], i606.stencilRef)
  i606.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[15], i606.stencilReadMask)
  i606.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[16], i606.stencilWriteMask)
  i606.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i607[17], i606.stencilOp)
  i606.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i607[18], i606.stencilOpFront)
  i606.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i607[19], i606.stencilOpBack)
  var i609 = i607[20]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i609[i + 0]) );
  }
  i606.tags = i608
  var i611 = i607[21]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( i611[i + 0] );
  }
  i606.passDefinedKeywords = i610
  var i613 = i607[22]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i613[i + 0]) );
  }
  i606.passDefinedKeywordGroups = i612
  var i615 = i607[23]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i615[i + 0]) );
  }
  i606.variants = i614
  var i617 = i607[24]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i617[i + 0]) );
  }
  i606.excludedVariants = i616
  i606.hasDepthReader = !!i607[25]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i619 = data
  i618.val = i619[0]
  i618.name = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i621 = data
  i620.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[0], i620.src)
  i620.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[1], i620.dst)
  i620.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i621[2], i620.op)
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i623 = data
  i622.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[0], i622.pass)
  i622.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[1], i622.fail)
  i622.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[2], i622.zFail)
  i622.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[3], i622.comp)
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i627 = data
  i626.name = i627[0]
  i626.value = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i631 = data
  var i633 = i631[0]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i630.keywords = i632
  i630.hasDiscard = !!i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i637 = data
  i636.passId = i637[0]
  i636.subShaderIndex = i637[1]
  var i639 = i637[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i636.keywords = i638
  i636.vertexProgram = i637[3]
  i636.fragmentProgram = i637[4]
  i636.exportedForWebGl2 = !!i637[5]
  i636.readDepth = !!i637[6]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'shader')
  i642.pass = i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i647 = data
  i646.name = i647[0]
  i646.type = i647[1]
  i646.value = new pc.Vec4( i647[2], i647[3], i647[4], i647[5] )
  i646.textureValue = i647[6]
  i646.shaderPropertyFlag = i647[7]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i649 = data
  i648.name = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'texture')
  i648.aabb = i649[3]
  i648.vertices = i649[4]
  i648.triangles = i649[5]
  i648.textureRect = UnityEngine.Rect.MinMaxRect(i649[6], i649[7], i649[8], i649[9])
  i648.packedRect = UnityEngine.Rect.MinMaxRect(i649[10], i649[11], i649[12], i649[13])
  i648.border = new pc.Vec4( i649[14], i649[15], i649[16], i649[17] )
  i648.transparency = i649[18]
  i648.bounds = i649[19]
  i648.pixelsPerUnit = i649[20]
  i648.textureWidth = i649[21]
  i648.textureHeight = i649[22]
  i648.nativeSize = new pc.Vec2( i649[23], i649[24] )
  i648.pivot = new pc.Vec2( i649[25], i649[26] )
  i648.textureRectOffset = new pc.Vec2( i649[27], i649[28] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i651 = data
  i650.name = i651[0]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i653 = data
  i652.name = i653[0]
  i652.ascent = i653[1]
  i652.originalLineHeight = i653[2]
  i652.fontSize = i653[3]
  var i655 = i653[4]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i655[i + 0]) );
  }
  i652.characterInfo = i654
  request.r(i653[5], i653[6], 0, i652, 'texture')
  i652.originalFontSize = i653[7]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i659 = data
  i658.index = i659[0]
  i658.advance = i659[1]
  i658.bearing = i659[2]
  i658.glyphWidth = i659[3]
  i658.glyphHeight = i659[4]
  i658.minX = i659[5]
  i658.maxX = i659[6]
  i658.minY = i659[7]
  i658.maxY = i659[8]
  i658.uvBottomLeftX = i659[9]
  i658.uvBottomLeftY = i659[10]
  i658.uvBottomRightX = i659[11]
  i658.uvBottomRightY = i659[12]
  i658.uvTopLeftX = i659[13]
  i658.uvTopLeftY = i659[14]
  i658.uvTopRightX = i659[15]
  i658.uvTopRightY = i659[16]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i661 = data
  i660.name = i661[0]
  i660.bytes64 = i661[1]
  i660.data = i661[2]
  return i660
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i662 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i663 = data
  i662.normalStyle = i663[0]
  i662.normalSpacingOffset = i663[1]
  i662.boldStyle = i663[2]
  i662.boldSpacing = i663[3]
  i662.italicStyle = i663[4]
  i662.tabSize = i663[5]
  request.r(i663[6], i663[7], 0, i662, 'atlas')
  i662.m_SourceFontFileGUID = i663[8]
  i662.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i663[9], i662.m_CreationSettings)
  request.r(i663[10], i663[11], 0, i662, 'm_SourceFontFile')
  i662.m_SourceFontFilePath = i663[12]
  i662.m_AtlasPopulationMode = i663[13]
  i662.InternalDynamicOS = !!i663[14]
  var i665 = i663[15]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.TextCore.Glyph', i665[i + 0]));
  }
  i662.m_GlyphTable = i664
  var i667 = i663[16]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('TMPro.TMP_Character', i667[i + 0]));
  }
  i662.m_CharacterTable = i666
  var i669 = i663[17]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i662.m_AtlasTextures = i668
  i662.m_AtlasTextureIndex = i663[18]
  i662.m_IsMultiAtlasTexturesEnabled = !!i663[19]
  i662.m_GetFontFeatures = !!i663[20]
  i662.m_ClearDynamicDataOnBuild = !!i663[21]
  i662.m_AtlasWidth = i663[22]
  i662.m_AtlasHeight = i663[23]
  i662.m_AtlasPadding = i663[24]
  i662.m_AtlasRenderMode = i663[25]
  var i671 = i663[26]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(request.d('UnityEngine.TextCore.GlyphRect', i671[i + 0]));
  }
  i662.m_UsedGlyphRects = i670
  var i673 = i663[27]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('UnityEngine.TextCore.GlyphRect', i673[i + 0]));
  }
  i662.m_FreeGlyphRects = i672
  i662.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i663[28], i662.m_FontFeatureTable)
  i662.m_ShouldReimportFontFeatures = !!i663[29]
  var i675 = i663[30]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 1, i674, '')
  }
  i662.m_FallbackFontAssetTable = i674
  var i677 = i663[31]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('TMPro.TMP_FontWeightPair', i677[i + 0]) );
  }
  i662.m_FontWeightTable = i676
  var i679 = i663[32]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('TMPro.TMP_FontWeightPair', i679[i + 0]) );
  }
  i662.fontWeights = i678
  i662.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i663[33], i662.m_fontInfo)
  var i681 = i663[34]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('TMPro.TMP_Glyph', i681[i + 0]));
  }
  i662.m_glyphInfoList = i680
  i662.m_KerningTable = request.d('TMPro.KerningTable', i663[35], i662.m_KerningTable)
  var i683 = i663[36]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i662.fallbackFontAssets = i682
  i662.m_Version = i663[37]
  i662.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i663[38], i662.m_FaceInfo)
  request.r(i663[39], i663[40], 0, i662, 'm_Material')
  return i662
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i685 = data
  i684.sourceFontFileName = i685[0]
  i684.sourceFontFileGUID = i685[1]
  i684.faceIndex = i685[2]
  i684.pointSizeSamplingMode = i685[3]
  i684.pointSize = i685[4]
  i684.padding = i685[5]
  i684.paddingMode = i685[6]
  i684.packingMode = i685[7]
  i684.atlasWidth = i685[8]
  i684.atlasHeight = i685[9]
  i684.characterSetSelectionMode = i685[10]
  i684.characterSequence = i685[11]
  i684.referencedFontAssetGUID = i685[12]
  i684.referencedTextAssetGUID = i685[13]
  i684.fontStyle = i685[14]
  i684.fontStyleModifier = i685[15]
  i684.renderMode = i685[16]
  i684.includeFontFeatures = !!i685[17]
  return i684
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i689 = data
  i688.m_Index = i689[0]
  i688.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i689[1], i688.m_Metrics)
  i688.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i689[2], i688.m_GlyphRect)
  i688.m_Scale = i689[3]
  i688.m_AtlasIndex = i689[4]
  i688.m_ClassDefinitionType = i689[5]
  return i688
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i691 = data
  i690.m_Width = i691[0]
  i690.m_Height = i691[1]
  i690.m_HorizontalBearingX = i691[2]
  i690.m_HorizontalBearingY = i691[3]
  i690.m_HorizontalAdvance = i691[4]
  return i690
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i693 = data
  i692.m_X = i693[0]
  i692.m_Y = i693[1]
  i692.m_Width = i693[2]
  i692.m_Height = i693[3]
  return i692
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.TMP_Character' )
  var i697 = data
  i696.m_ElementType = i697[0]
  i696.m_Unicode = i697[1]
  i696.m_GlyphIndex = i697[2]
  i696.m_Scale = i697[3]
  return i696
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i703 = data
  var i705 = i703[0]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i705.length; i += 1) {
    i704.add(request.d('TMPro.MultipleSubstitutionRecord', i705[i + 0]));
  }
  i702.m_MultipleSubstitutionRecords = i704
  var i707 = i703[1]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('TMPro.LigatureSubstitutionRecord', i707[i + 0]));
  }
  i702.m_LigatureSubstitutionRecords = i706
  var i709 = i703[2]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i709[i + 0]));
  }
  i702.m_GlyphPairAdjustmentRecords = i708
  var i711 = i703[3]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i711[i + 0]));
  }
  i702.m_MarkToBaseAdjustmentRecords = i710
  var i713 = i703[4]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i713[i + 0]));
  }
  i702.m_MarkToMarkAdjustmentRecords = i712
  return i702
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i716 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i717 = data
  i716.m_TargetGlyphID = i717[0]
  i716.m_SubstituteGlyphIDs = i717[1]
  return i716
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i721 = data
  i720.m_ComponentGlyphIDs = i721[0]
  i720.m_LigatureGlyphID = i721[1]
  return i720
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i725 = data
  i724.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i725[0], i724.m_FirstAdjustmentRecord)
  i724.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i725[1], i724.m_SecondAdjustmentRecord)
  i724.m_FeatureLookupFlags = i725[2]
  return i724
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i729 = data
  i728.m_BaseGlyphID = i729[0]
  i728.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i729[1], i728.m_BaseGlyphAnchorPoint)
  i728.m_MarkGlyphID = i729[2]
  i728.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i729[3], i728.m_MarkPositionAdjustment)
  return i728
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i733 = data
  i732.m_BaseMarkGlyphID = i733[0]
  i732.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i733[1], i732.m_BaseMarkGlyphAnchorPoint)
  i732.m_CombiningMarkGlyphID = i733[2]
  i732.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i733[3], i732.m_CombiningMarkPositionAdjustment)
  return i732
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'regularTypeface')
  request.r(i739[2], i739[3], 0, i738, 'italicTypeface')
  return i738
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i741 = data
  i740.Name = i741[0]
  i740.PointSize = i741[1]
  i740.Scale = i741[2]
  i740.CharacterCount = i741[3]
  i740.LineHeight = i741[4]
  i740.Baseline = i741[5]
  i740.Ascender = i741[6]
  i740.CapHeight = i741[7]
  i740.Descender = i741[8]
  i740.CenterLine = i741[9]
  i740.SuperscriptOffset = i741[10]
  i740.SubscriptOffset = i741[11]
  i740.SubSize = i741[12]
  i740.Underline = i741[13]
  i740.UnderlineThickness = i741[14]
  i740.strikethrough = i741[15]
  i740.strikethroughThickness = i741[16]
  i740.TabWidth = i741[17]
  i740.Padding = i741[18]
  i740.AtlasWidth = i741[19]
  i740.AtlasHeight = i741[20]
  return i740
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.TMP_Glyph' )
  var i745 = data
  i744.id = i745[0]
  i744.x = i745[1]
  i744.y = i745[2]
  i744.width = i745[3]
  i744.height = i745[4]
  i744.xOffset = i745[5]
  i744.yOffset = i745[6]
  i744.xAdvance = i745[7]
  i744.scale = i745[8]
  return i744
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.KerningTable' )
  var i747 = data
  var i749 = i747[0]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(request.d('TMPro.KerningPair', i749[i + 0]));
  }
  i746.kerningPairs = i748
  return i746
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.KerningPair' )
  var i753 = data
  i752.xOffset = i753[0]
  i752.m_FirstGlyph = i753[1]
  i752.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i753[2], i752.m_FirstGlyphAdjustments)
  i752.m_SecondGlyph = i753[3]
  i752.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i753[4], i752.m_SecondGlyphAdjustments)
  i752.m_IgnoreSpacingAdjustments = !!i753[5]
  return i752
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i755 = data
  i754.m_FaceIndex = i755[0]
  i754.m_FamilyName = i755[1]
  i754.m_StyleName = i755[2]
  i754.m_PointSize = i755[3]
  i754.m_Scale = i755[4]
  i754.m_UnitsPerEM = i755[5]
  i754.m_LineHeight = i755[6]
  i754.m_AscentLine = i755[7]
  i754.m_CapLine = i755[8]
  i754.m_MeanLine = i755[9]
  i754.m_Baseline = i755[10]
  i754.m_DescentLine = i755[11]
  i754.m_SuperscriptOffset = i755[12]
  i754.m_SuperscriptSize = i755[13]
  i754.m_SubscriptOffset = i755[14]
  i754.m_SubscriptSize = i755[15]
  i754.m_UnderlineOffset = i755[16]
  i754.m_UnderlineThickness = i755[17]
  i754.m_StrikethroughOffset = i755[18]
  i754.m_StrikethroughThickness = i755[19]
  i754.m_TabWidth = i755[20]
  return i754
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i757 = data
  i756.useSafeMode = !!i757[0]
  i756.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i757[1], i756.safeModeOptions)
  i756.timeScale = i757[2]
  i756.unscaledTimeScale = i757[3]
  i756.useSmoothDeltaTime = !!i757[4]
  i756.maxSmoothUnscaledTime = i757[5]
  i756.rewindCallbackMode = i757[6]
  i756.showUnityEditorReport = !!i757[7]
  i756.logBehaviour = i757[8]
  i756.drawGizmos = !!i757[9]
  i756.defaultRecyclable = !!i757[10]
  i756.defaultAutoPlay = i757[11]
  i756.defaultUpdateType = i757[12]
  i756.defaultTimeScaleIndependent = !!i757[13]
  i756.defaultEaseType = i757[14]
  i756.defaultEaseOvershootOrAmplitude = i757[15]
  i756.defaultEasePeriod = i757[16]
  i756.defaultAutoKill = !!i757[17]
  i756.defaultLoopType = i757[18]
  i756.debugMode = !!i757[19]
  i756.debugStoreTargetId = !!i757[20]
  i756.showPreviewPanel = !!i757[21]
  i756.storeSettingsLocation = i757[22]
  i756.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i757[23], i756.modules)
  i756.createASMDEF = !!i757[24]
  i756.showPlayingTweens = !!i757[25]
  i756.showPausedTweens = !!i757[26]
  return i756
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i759 = data
  i758.logBehaviour = i759[0]
  i758.nestedTweenFailureBehaviour = i759[1]
  return i758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i761 = data
  i760.showPanel = !!i761[0]
  i760.audioEnabled = !!i761[1]
  i760.physicsEnabled = !!i761[2]
  i760.physics2DEnabled = !!i761[3]
  i760.spriteEnabled = !!i761[4]
  i760.uiEnabled = !!i761[5]
  i760.textMeshProEnabled = !!i761[6]
  i760.tk2DEnabled = !!i761[7]
  i760.deAudioEnabled = !!i761[8]
  i760.deUnityExtendedEnabled = !!i761[9]
  i760.epoOutlineEnabled = !!i761[10]
  return i760
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_Settings' )
  var i763 = data
  i762.assetVersion = i763[0]
  i762.m_TextWrappingMode = i763[1]
  i762.m_enableKerning = !!i763[2]
  var i765 = i763[3]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(i765[i + 0]);
  }
  i762.m_ActiveFontFeatures = i764
  i762.m_enableExtraPadding = !!i763[4]
  i762.m_enableTintAllSprites = !!i763[5]
  i762.m_enableParseEscapeCharacters = !!i763[6]
  i762.m_EnableRaycastTarget = !!i763[7]
  i762.m_GetFontFeaturesAtRuntime = !!i763[8]
  i762.m_missingGlyphCharacter = i763[9]
  i762.m_ClearDynamicDataOnBuild = !!i763[10]
  i762.m_warningsDisabled = !!i763[11]
  request.r(i763[12], i763[13], 0, i762, 'm_defaultFontAsset')
  i762.m_defaultFontAssetPath = i763[14]
  i762.m_defaultFontSize = i763[15]
  i762.m_defaultAutoSizeMinRatio = i763[16]
  i762.m_defaultAutoSizeMaxRatio = i763[17]
  i762.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i763[18], i763[19] )
  i762.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i763[20], i763[21] )
  i762.m_autoSizeTextContainer = !!i763[22]
  i762.m_IsTextObjectScaleStatic = !!i763[23]
  var i767 = i763[24]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i762.m_fallbackFontAssets = i766
  i762.m_matchMaterialPreset = !!i763[25]
  i762.m_HideSubTextObjects = !!i763[26]
  request.r(i763[27], i763[28], 0, i762, 'm_defaultSpriteAsset')
  i762.m_defaultSpriteAssetPath = i763[29]
  i762.m_enableEmojiSupport = !!i763[30]
  i762.m_MissingCharacterSpriteUnicode = i763[31]
  var i769 = i763[32]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i762.m_EmojiFallbackTextAssets = i768
  i762.m_defaultColorGradientPresetsPath = i763[33]
  request.r(i763[34], i763[35], 0, i762, 'm_defaultStyleSheet')
  i762.m_StyleSheetsResourcePath = i763[36]
  request.r(i763[37], i763[38], 0, i762, 'm_leadingCharacters')
  request.r(i763[39], i763[40], 0, i762, 'm_followingCharacters')
  i762.m_UseModernHangulLineBreakingRules = !!i763[41]
  return i762
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i773 = data
  i772.m_GlyphIndex = i773[0]
  i772.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i773[1], i772.m_GlyphValueRecord)
  return i772
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i775 = data
  i774.m_XPlacement = i775[0]
  i774.m_YPlacement = i775[1]
  i774.m_XAdvance = i775[2]
  i774.m_YAdvance = i775[3]
  return i774
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'spriteSheet')
  var i779 = i777[2]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('TMPro.TMP_Sprite', i779[i + 0]));
  }
  i776.spriteInfoList = i778
  var i781 = i777[3]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 1, i780, '')
  }
  i776.fallbackSpriteAssets = i780
  var i783 = i777[4]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.TMP_SpriteCharacter', i783[i + 0]));
  }
  i776.m_SpriteCharacterTable = i782
  var i785 = i777[5]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('TMPro.TMP_SpriteGlyph', i785[i + 0]));
  }
  i776.m_GlyphTable = i784
  i776.m_Version = i777[6]
  i776.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i777[7], i776.m_FaceInfo)
  request.r(i777[8], i777[9], 0, i776, 'm_Material')
  return i776
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i788 = root || request.c( 'TMPro.TMP_Sprite' )
  var i789 = data
  i788.name = i789[0]
  i788.hashCode = i789[1]
  i788.unicode = i789[2]
  i788.pivot = new pc.Vec2( i789[3], i789[4] )
  request.r(i789[5], i789[6], 0, i788, 'sprite')
  i788.id = i789[7]
  i788.x = i789[8]
  i788.y = i789[9]
  i788.width = i789[10]
  i788.height = i789[11]
  i788.xOffset = i789[12]
  i788.yOffset = i789[13]
  i788.xAdvance = i789[14]
  i788.scale = i789[15]
  return i788
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i794 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i795 = data
  i794.m_Name = i795[0]
  i794.m_ElementType = i795[1]
  i794.m_Unicode = i795[2]
  i794.m_GlyphIndex = i795[3]
  i794.m_Scale = i795[4]
  return i794
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'sprite')
  i798.m_Index = i799[2]
  i798.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i799[3], i798.m_Metrics)
  i798.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i799[4], i798.m_GlyphRect)
  i798.m_Scale = i799[5]
  i798.m_AtlasIndex = i799[6]
  i798.m_ClassDefinitionType = i799[7]
  return i798
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.TMP_Style', i803[i + 0]));
  }
  i800.m_StyleList = i802
  return i800
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.TMP_Style' )
  var i807 = data
  i806.m_Name = i807[0]
  i806.m_HashCode = i807[1]
  i806.m_OpeningDefinition = i807[2]
  i806.m_ClosingDefinition = i807[3]
  i806.m_OpeningTagArray = i807[4]
  i806.m_ClosingTagArray = i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i811[i + 0]) );
  }
  i808.files = i810
  i808.componentToPrefabIds = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i815 = data
  i814.path = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'unityObject')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i819[i + 0]) );
  }
  i816.scriptsExecutionOrder = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i821[i + 0]) );
  }
  i816.sortingLayers = i820
  var i823 = i817[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i823[i + 0]) );
  }
  i816.cullingLayers = i822
  i816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i817[3], i816.timeSettings)
  i816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i817[4], i816.physicsSettings)
  i816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i817[5], i816.physics2DSettings)
  i816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i817[6], i816.qualitySettings)
  i816.enableRealtimeShadows = !!i817[7]
  i816.enableAutoInstancing = !!i817[8]
  i816.enableStaticBatching = !!i817[9]
  i816.enableDynamicBatching = !!i817[10]
  i816.usePreservativeDynamicBatching = !!i817[11]
  i816.lightmapEncodingQuality = i817[12]
  i816.desiredColorSpace = i817[13]
  var i825 = i817[14]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i816.allTags = i824
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i829 = data
  i828.name = i829[0]
  i828.value = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  i832.value = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i839 = data
  i838.fixedDeltaTime = i839[0]
  i838.maximumDeltaTime = i839[1]
  i838.timeScale = i839[2]
  i838.maximumParticleTimestep = i839[3]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i841 = data
  i840.gravity = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.defaultSolverIterations = i841[3]
  i840.bounceThreshold = i841[4]
  i840.autoSyncTransforms = !!i841[5]
  i840.autoSimulation = !!i841[6]
  var i843 = i841[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i843[i + 0]) );
  }
  i840.collisionMatrix = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.layerId = i847[1]
  i846.otherLayerId = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'material')
  i848.gravity = new pc.Vec2( i849[2], i849[3] )
  i848.positionIterations = i849[4]
  i848.velocityIterations = i849[5]
  i848.velocityThreshold = i849[6]
  i848.maxLinearCorrection = i849[7]
  i848.maxAngularCorrection = i849[8]
  i848.maxTranslationSpeed = i849[9]
  i848.maxRotationSpeed = i849[10]
  i848.baumgarteScale = i849[11]
  i848.baumgarteTOIScale = i849[12]
  i848.timeToSleep = i849[13]
  i848.linearSleepTolerance = i849[14]
  i848.angularSleepTolerance = i849[15]
  i848.defaultContactOffset = i849[16]
  i848.autoSimulation = !!i849[17]
  i848.queriesHitTriggers = !!i849[18]
  i848.queriesStartInColliders = !!i849[19]
  i848.callbacksOnDisable = !!i849[20]
  i848.reuseCollisionCallbacks = !!i849[21]
  i848.autoSyncTransforms = !!i849[22]
  var i851 = i849[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i851[i + 0]) );
  }
  i848.collisionMatrix = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.layerId = i855[1]
  i854.otherLayerId = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i859[i + 0]) );
  }
  i856.qualityLevels = i858
  var i861 = i857[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.names = i860
  i856.shadows = i857[2]
  i856.anisotropicFiltering = i857[3]
  i856.antiAliasing = i857[4]
  i856.lodBias = i857[5]
  i856.shadowCascades = i857[6]
  i856.shadowDistance = i857[7]
  i856.shadowmaskMode = i857[8]
  i856.shadowProjection = i857[9]
  i856.shadowResolution = i857[10]
  i856.softParticles = !!i857[11]
  i856.softVegetation = !!i857[12]
  i856.activeColorSpace = i857[13]
  i856.desiredColorSpace = i857[14]
  i856.masterTextureLimit = i857[15]
  i856.maxQueuedFrames = i857[16]
  i856.particleRaycastBudget = i857[17]
  i856.pixelLightCount = i857[18]
  i856.realtimeReflectionProbes = !!i857[19]
  i856.shadowCascade2Split = i857[20]
  i856.shadowCascade4Split = new pc.Vec3( i857[21], i857[22], i857[23] )
  i856.streamingMipmapsActive = !!i857[24]
  i856.vSyncCount = i857[25]
  i856.asyncUploadBufferSize = i857[26]
  i856.asyncUploadTimeSlice = i857[27]
  i856.billboardsFaceCameraPosition = !!i857[28]
  i856.shadowNearPlaneOffset = i857[29]
  i856.streamingMipmapsMemoryBudget = i857[30]
  i856.maximumLODLevel = i857[31]
  i856.streamingMipmapsAddAllCameras = !!i857[32]
  i856.streamingMipmapsMaxLevelReduction = i857[33]
  i856.streamingMipmapsRenderersPerFrame = i857[34]
  i856.resolutionScalingFixedDPIFactor = i857[35]
  i856.streamingMipmapsMaxFileIORequests = i857[36]
  i856.currentQualityLevel = i857[37]
  return i856
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_ObjectArgument')
  i864.m_ObjectArgumentAssemblyTypeName = i865[2]
  i864.m_IntArgument = i865[3]
  i864.m_FloatArgument = i865[4]
  i864.m_StringArgument = i865[5]
  i864.m_BoolArgument = !!i865[6]
  return i864
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i867 = data
  i866.m_XCoordinate = i867[0]
  i866.m_YCoordinate = i867[1]
  return i866
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i869 = data
  i868.m_XPositionAdjustment = i869[0]
  i868.m_YPositionAdjustment = i869[1]
  return i868
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i871 = data
  i870.xPlacement = i871[0]
  i870.yPlacement = i871[1]
  i870.xAdvance = i871[2]
  i870.yAdvance = i871[3]
  return i870
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[2],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[13],"56":[13],"57":[13],"58":[13],"59":[13],"60":[13],"15":[13],"61":[13],"62":[13],"63":[13],"64":[13],"65":[13],"66":[13],"67":[2],"68":[69],"70":[71],"72":[71],"21":[8],"73":[7],"74":[2],"75":[76],"77":[8],"78":[69,8],"24":[8,23],"79":[8],"80":[23,8],"81":[69],"82":[23,8],"83":[8],"84":[85],"86":[85],"87":[85],"88":[8],"89":[8],"22":[21],"26":[23,8],"90":[8],"6":[21],"91":[8],"92":[8],"93":[8],"94":[8],"95":[8],"96":[8],"97":[8],"98":[8],"99":[8],"100":[23,8],"101":[8],"102":[8],"103":[8],"104":[8],"105":[23,8],"106":[8],"107":[19],"108":[19],"20":[19],"109":[19],"110":[2],"111":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","ResponsiveLayout","UnityEngine.UI.CanvasScaler","UnityEngine.SpriteRenderer","UnityEngine.RectTransform","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","RagdollPose","UnityEngine.HingeJoint2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","TapButton","StairRaceGame","UnityEngine.UI.Button","UnityEngine.Transform","UnityEngine.GameObject","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "28.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_KSDH_V01_AnhPP";

Deserializers.lunaAppID = "43448";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1730";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4630";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "6245f3ce-7f33-4025-94a5-dcdb538a779e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

