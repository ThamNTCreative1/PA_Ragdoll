var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.JointSpring' )
  var i303 = data
  i302.spring = i303[0]
  i302.damper = i303[1]
  i302.targetPosition = i303[2]
  return i302
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.JointMotor' )
  var i305 = data
  i304.m_TargetVelocity = i305[0]
  i304.m_Force = i305[1]
  i304.m_FreeSpin = i305[2]
  return i304
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.JointLimits' )
  var i307 = data
  i306.m_Min = i307[0]
  i306.m_Max = i307[1]
  i306.m_Bounciness = i307[2]
  i306.m_BounceMinVelocity = i307[3]
  i306.m_ContactDistance = i307[4]
  i306.minBounce = i307[5]
  i306.maxBounce = i307[6]
  return i306
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.JointDrive' )
  var i309 = data
  i308.m_PositionSpring = i309[0]
  i308.m_PositionDamper = i309[1]
  i308.m_MaximumForce = i309[2]
  i308.m_UseAcceleration = i309[3]
  return i308
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i311 = data
  i310.m_Spring = i311[0]
  i310.m_Damper = i311[1]
  return i310
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i313 = data
  i312.m_Limit = i313[0]
  i312.m_Bounciness = i313[1]
  i312.m_ContactDistance = i313[2]
  return i312
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i315 = data
  i314.m_ExtremumSlip = i315[0]
  i314.m_ExtremumValue = i315[1]
  i314.m_AsymptoteSlip = i315[2]
  i314.m_AsymptoteValue = i315[3]
  i314.m_Stiffness = i315[4]
  return i314
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i317 = data
  i316.m_LowerAngle = i317[0]
  i316.m_UpperAngle = i317[1]
  return i316
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i319 = data
  i318.m_MotorSpeed = i319[0]
  i318.m_MaximumMotorTorque = i319[1]
  return i318
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i321 = data
  i320.m_DampingRatio = i321[0]
  i320.m_Frequency = i321[1]
  i320.m_Angle = i321[2]
  return i320
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i323 = data
  i322.m_LowerTranslation = i323[0]
  i322.m_UpperTranslation = i323[1]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i324 = root || new pc.UnityMaterial()
  var i325 = data
  i324.name = i325[0]
  request.r(i325[1], i325[2], 0, i324, 'shader')
  i324.renderQueue = i325[3]
  i324.enableInstancing = !!i325[4]
  var i327 = i325[5]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i327[i + 0]) );
  }
  i324.floatParameters = i326
  var i329 = i325[6]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i329[i + 0]) );
  }
  i324.colorParameters = i328
  var i331 = i325[7]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i331[i + 0]) );
  }
  i324.vectorParameters = i330
  var i333 = i325[8]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i333[i + 0]) );
  }
  i324.textureParameters = i332
  var i335 = i325[9]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i335[i + 0]) );
  }
  i324.materialFlags = i334
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i339 = data
  i338.name = i339[0]
  i338.value = i339[1]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i343 = data
  i342.name = i343[0]
  i342.value = new pc.Color(i343[1], i343[2], i343[3], i343[4])
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i347 = data
  i346.name = i347[0]
  i346.value = new pc.Vec4( i347[1], i347[2], i347[3], i347[4] )
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i351 = data
  i350.name = i351[0]
  request.r(i351[1], i351[2], 0, i350, 'value')
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i355 = data
  i354.name = i355[0]
  i354.enabled = !!i355[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i359 = data
  i358.name = i359[0]
  i358.index = i359[1]
  i358.startup = !!i359[2]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i361 = data
  i360.aspect = i361[0]
  i360.orthographic = !!i361[1]
  i360.orthographicSize = i361[2]
  i360.backgroundColor = new pc.Color(i361[3], i361[4], i361[5], i361[6])
  i360.nearClipPlane = i361[7]
  i360.farClipPlane = i361[8]
  i360.fieldOfView = i361[9]
  i360.depth = i361[10]
  i360.clearFlags = i361[11]
  i360.cullingMask = i361[12]
  i360.rect = i361[13]
  request.r(i361[14], i361[15], 0, i360, 'targetTexture')
  i360.usePhysicalProperties = !!i361[16]
  i360.focalLength = i361[17]
  i360.sensorSize = new pc.Vec2( i361[18], i361[19] )
  i360.lensShift = new pc.Vec2( i361[20], i361[21] )
  i360.gateFit = i361[22]
  i360.commandBufferCount = i361[23]
  i360.cameraType = i361[24]
  i360.enabled = !!i361[25]
  return i360
}

Deserializers["PlayableCameraController"] = function (request, data, root) {
  var i362 = root || request.c( 'PlayableCameraController' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, 'view')
  request.r(i363[2], i363[3], 0, i362, 'followTarget')
  i362.slingPosition = new pc.Vec3( i363[4], i363[5], i363[6] )
  i362.mapPosition = new pc.Vec3( i363[7], i363[8], i363[9] )
  i362.slingFrame = new pc.Vec2( i363[10], i363[11] )
  i362.mapFrame = new pc.Vec2( i363[12], i363[13] )
  i362.uiVerticalReserve = i363[14]
  i362.panDuration = i363[15]
  i362.aimRoomMin = new pc.Vec2( i363[16], i363[17] )
  i362.aimRoomMax = new pc.Vec2( i363[18], i363[19] )
  i362.aimFocusMargin = new pc.Vec2( i363[20], i363[21] )
  i362.aimFocus = new pc.Vec2( i363[22], i363[23] )
  i362.aimPosition = new pc.Vec3( i363[24], i363[25], i363[26] )
  i362.aimFrame = new pc.Vec2( i363[27], i363[28] )
  i362.aimZoomOutTime = i363[29]
  i362.aimZoomInTime = i363[30]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i365 = data
  i364.name = i365[0]
  i364.tagId = i365[1]
  i364.enabled = !!i365[2]
  i364.isStatic = !!i365[3]
  i364.layer = i365[4]
  return i364
}

Deserializers["LunaControllerFNAF"] = function (request, data, root) {
  var i366 = root || request.c( 'LunaControllerFNAF' )
  var i367 = data
  i366.version = i367[0]
  request.r(i367[1], i367[2], 0, i366, 'backgroundMusic')
  i366.musicEnabled = !!i367[3]
  i366.musicVolume = i367[4]
  i366.heroShot1 = i367[5]
  i366.heroShot2 = i367[6]
  i366.heroShot3 = i367[7]
  i366.heroShot4 = i367[8]
  request.r(i367[9], i367[10], 0, i366, 'flow')
  return i366
}

Deserializers["PlayableFlowController"] = function (request, data, root) {
  var i368 = root || request.c( 'PlayableFlowController' )
  var i369 = data
  i368.playableVersion = i369[0]
  i368.tapCount = i369[1]
  i368.phase = i369[2]
  var i371 = i369[3]
  var i370 = []
  for(var i = 0; i < i371.length; i += 2) {
  request.r(i371[i + 0], i371[i + 1], 2, i370, '')
  }
  i368.actors = i370
  request.r(i369[4], i369[5], 0, i368, 'cameraRig')
  request.r(i369[6], i369[7], 0, i368, 'leftBand')
  request.r(i369[8], i369[9], 0, i368, 'rightBand')
  var i373 = i369[10]
  var i372 = []
  for(var i = 0; i < i373.length; i += 2) {
  request.r(i373[i + 0], i373[i + 1], 2, i372, '')
  }
  i368.trajectoryDots = i372
  request.r(i369[11], i369[12], 0, i368, 'handGuide')
  request.r(i369[13], i369[14], 0, i368, 'handAlpha')
  request.r(i369[15], i369[16], 0, i368, 'prompt')
  request.r(i369[17], i369[18], 0, i368, 'actorLabel')
  request.r(i369[19], i369[20], 0, i368, 'versionLabel')
  request.r(i369[21], i369[22], 0, i368, 'audioSource')
  request.r(i369[23], i369[24], 0, i368, 'launchSound')
  request.r(i369[25], i369[26], 0, i368, 'impactSound')
  request.r(i369[27], i369[28], 0, i368, 'musicSource')
  request.r(i369[29], i369[30], 0, i368, 'bgm')
  request.r(i369[31], i369[32], 0, i368, 'grabSound')
  request.r(i369[33], i369[34], 0, i368, 'spawnSound')
  request.r(i369[35], i369[36], 0, i368, 'knockSound')
  request.r(i369[37], i369[38], 0, i368, 'ctaSound')
  var i375 = i369[39]
  var i374 = []
  for(var i = 0; i < i375.length; i += 2) {
  request.r(i375[i + 0], i375[i + 1], 2, i374, '')
  }
  i368.impactSounds = i374
  request.r(i369[40], i369[41], 0, i368, 'flySound')
  i368.flyVolume = i369[42]
  i368.spawnVolume = i369[43]
  i368.musicVolume = i369[44]
  i368.anchor = new pc.Vec2( i369[45], i369[46] )
  i368.leftBandTip = new pc.Vec3( i369[47], i369[48], i369[49] )
  i368.rightBandTip = new pc.Vec3( i369[50], i369[51], i369[52] )
  i368.grabRadius = i369[53]
  i368.maxPull = i369[54]
  i368.launchScale = i369[55]
  i368.introHold = i369[56]
  i368.resultHold = i369[57]
  i368.maxFlightTime = i369[58]
  i368.storeOpened = !!i369[59]
  i368.installCallCount = i369[60]
  request.r(i369[61], i369[62], 0, i368, 'heroSkins')
  i368.heroOrder = i369[63]
  i368.shotIndex = i369[64]
  i368.introText = i369[65]
  request.r(i369[66], i369[67], 0, i368, 'selectRoot')
  var i377 = i369[68]
  var i376 = []
  for(var i = 0; i < i377.length; i += 2) {
  request.r(i377[i + 0], i377[i + 1], 2, i376, '')
  }
  i368.selectButtons = i376
  var i379 = i369[69]
  var i378 = []
  for(var i = 0; i < i379.length; i += 2) {
  request.r(i379[i + 0], i379[i + 1], 2, i378, '')
  }
  i368.selectFrames = i378
  var i381 = i369[70]
  var i380 = []
  for(var i = 0; i < i381.length; i += 2) {
  request.r(i381[i + 0], i381[i + 1], 2, i380, '')
  }
  i368.selectPortraits = i380
  var i383 = i369[71]
  var i382 = []
  for(var i = 0; i < i383.length; i += 2) {
  request.r(i383[i + 0], i383[i + 1], 2, i382, '')
  }
  i368.selectNames = i382
  request.r(i369[72], i369[73], 0, i368, 'frameNormal')
  request.r(i369[74], i369[75], 0, i368, 'frameHighlight')
  i368.handTargetButton = i369[76]
  request.r(i369[77], i369[78], 0, i368, 'endCardRoot')
  request.r(i369[79], i369[80], 0, i368, 'endCardPortrait')
  request.r(i369[81], i369[82], 0, i368, 'endCardTitle')
  request.r(i369[83], i369[84], 0, i368, 'ctaButton')
  i368.hitReturnTime = i369[85]
  i368.minHitTime = i369[86]
  i368.dotSizeStart = i369[87]
  i368.dotSizeEnd = i369[88]
  i368.trajectoryTime = i369[89]
  i368.ignoreNearPull = i369[90]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'clip')
  request.r(i397[2], i397[3], 0, i396, 'outputAudioMixerGroup')
  i396.playOnAwake = !!i397[4]
  i396.loop = !!i397[5]
  i396.time = i397[6]
  i396.volume = i397[7]
  i396.pitch = i397[8]
  i396.enabled = !!i397[9]
  return i396
}

Deserializers["HeroSkins"] = function (request, data, root) {
  var i398 = root || request.c( 'HeroSkins' )
  var i399 = data
  var i401 = i399[0]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('HeroSkin', i401[i + 0]) );
  }
  i398.skins = i400
  i398.headPixel = i399[1]
  i398.limbPixel = new pc.Vec2( i399[2], i399[3] )
  i398.bodySize = new pc.Vec2( i399[4], i399[5] )
  i398.neckLocal = new pc.Vec2( i399[6], i399[7] )
  return i398
}

Deserializers["HeroSkin"] = function (request, data, root) {
  var i404 = root || request.c( 'HeroSkin' )
  var i405 = data
  i404.label = i405[0]
  request.r(i405[1], i405[2], 0, i404, 'head')
  request.r(i405[3], i405[4], 0, i404, 'body')
  request.r(i405[5], i405[6], 0, i404, 'handLeft')
  request.r(i405[7], i405[8], 0, i404, 'handRight')
  request.r(i405[9], i405[10], 0, i404, 'footLeft')
  request.r(i405[11], i405[12], 0, i404, 'footRight')
  request.r(i405[13], i405[14], 0, i404, 'portrait')
  i404.headPivot = new pc.Vec2( i405[15], i405[16] )
  i404.handLeftPivot = new pc.Vec2( i405[17], i405[18] )
  i404.handRightPivot = new pc.Vec2( i405[19], i405[20] )
  i404.footLeftPivot = new pc.Vec2( i405[21], i405[22] )
  i404.footRightPivot = new pc.Vec2( i405[23], i405[24] )
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i407 = data
  i406.type = i407[0]
  i406.color = new pc.Color(i407[1], i407[2], i407[3], i407[4])
  i406.cullingMask = i407[5]
  i406.intensity = i407[6]
  i406.range = i407[7]
  i406.spotAngle = i407[8]
  i406.shadows = i407[9]
  i406.shadowNormalBias = i407[10]
  i406.shadowBias = i407[11]
  i406.shadowStrength = i407[12]
  i406.shadowResolution = i407[13]
  i406.lightmapBakeType = i407[14]
  i406.renderMode = i407[15]
  request.r(i407[16], i407[17], 0, i406, 'cookie')
  i406.cookieSize = i407[18]
  i406.shadowNearPlane = i407[19]
  i406.occlusionMaskChannel = i407[20]
  i406.isBaked = !!i407[21]
  i406.mixedLightingMode = i407[22]
  i406.enabled = !!i407[23]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i409 = data
  i408.color = new pc.Color(i409[0], i409[1], i409[2], i409[3])
  request.r(i409[4], i409[5], 0, i408, 'sprite')
  i408.flipX = !!i409[6]
  i408.flipY = !!i409[7]
  i408.drawMode = i409[8]
  i408.size = new pc.Vec2( i409[9], i409[10] )
  i408.tileMode = i409[11]
  i408.adaptiveModeThreshold = i409[12]
  i408.maskInteraction = i409[13]
  i408.spriteSortPoint = i409[14]
  i408.enabled = !!i409[15]
  request.r(i409[16], i409[17], 0, i408, 'sharedMaterial')
  var i411 = i409[18]
  var i410 = []
  for(var i = 0; i < i411.length; i += 2) {
  request.r(i411[i + 0], i411[i + 1], 2, i410, '')
  }
  i408.sharedMaterials = i410
  i408.receiveShadows = !!i409[19]
  i408.shadowCastingMode = i409[20]
  i408.sortingLayerID = i409[21]
  i408.sortingOrder = i409[22]
  i408.lightmapIndex = i409[23]
  i408.lightmapSceneIndex = i409[24]
  i408.lightmapScaleOffset = new pc.Vec4( i409[25], i409[26], i409[27], i409[28] )
  i408.lightProbeUsage = i409[29]
  i408.reflectionProbeUsage = i409[30]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i415 = data
  i414.usedByComposite = !!i415[0]
  i414.autoTiling = !!i415[1]
  i414.size = new pc.Vec2( i415[2], i415[3] )
  i414.edgeRadius = i415[4]
  i414.enabled = !!i415[5]
  i414.isTrigger = !!i415[6]
  i414.usedByEffector = !!i415[7]
  i414.density = i415[8]
  i414.offset = new pc.Vec2( i415[9], i415[10] )
  request.r(i415[11], i415[12], 0, i414, 'material')
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i417 = data
  i416.bodyType = i417[0]
  request.r(i417[1], i417[2], 0, i416, 'material')
  i416.simulated = !!i417[3]
  i416.useAutoMass = !!i417[4]
  i416.mass = i417[5]
  i416.drag = i417[6]
  i416.angularDrag = i417[7]
  i416.gravityScale = i417[8]
  i416.collisionDetectionMode = i417[9]
  i416.sleepMode = i417[10]
  i416.constraints = i417[11]
  return i416
}

Deserializers["RagdollActor"] = function (request, data, root) {
  var i418 = root || request.c( 'RagdollActor' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'torso')
  var i421 = i419[2]
  var i420 = []
  for(var i = 0; i < i421.length; i += 2) {
  request.r(i421[i + 0], i421[i + 1], 2, i420, '')
  }
  i418.bodies = i420
  var i423 = i419[3]
  var i422 = []
  for(var i = 0; i < i423.length; i += 2) {
  request.r(i423[i + 0], i423[i + 1], 2, i422, '')
  }
  i418.renderers = i422
  i418.hasCollided = !!i419[4]
  i418.reactiveTarget = !!i419[5]
  i418.knockedDown = !!i419[6]
  return i418
}

Deserializers["RagdollImpact"] = function (request, data, root) {
  var i428 = root || request.c( 'RagdollImpact' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'actor')
  request.r(i429[2], i429[3], 0, i428, 'flow')
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i431 = data
  i430.useLimits = !!i431[0]
  i430.limits = request.d('UnityEngine.JointAngleLimits2D', i431[1], i430.limits)
  i430.useMotor = !!i431[2]
  i430.motor = request.d('UnityEngine.JointMotor2D', i431[3], i430.motor)
  i430.anchor = new pc.Vec2( i431[4], i431[5] )
  i430.connectedAnchor = new pc.Vec2( i431[6], i431[7] )
  i430.autoConfigureConnectedAnchor = !!i431[8]
  request.r(i431[9], i431[10], 0, i430, 'connectedBody')
  i430.breakForce = i431[11]
  i430.breakTorque = i431[12]
  i430.enableCollision = !!i431[13]
  i430.enabled = !!i431[14]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i433 = data
  i432.textureMode = i433[0]
  i432.alignment = i433[1]
  i432.widthCurve = new pc.AnimationCurve( { keys_flow: i433[2] } )
  i432.colorGradient = i433[3] ? new pc.ColorGradient(i433[3][0], i433[3][1], i433[3][2]) : null
  var i435 = i433[4]
  var i434 = []
  for(var i = 0; i < i435.length; i += 3) {
    i434.push( new pc.Vec3( i435[i + 0], i435[i + 1], i435[i + 2] ) );
  }
  i432.positions = i434
  i432.positionCount = i433[5]
  i432.widthMultiplier = i433[6]
  i432.startWidth = i433[7]
  i432.endWidth = i433[8]
  i432.numCornerVertices = i433[9]
  i432.numCapVertices = i433[10]
  i432.useWorldSpace = !!i433[11]
  i432.loop = !!i433[12]
  i432.startColor = new pc.Color(i433[13], i433[14], i433[15], i433[16])
  i432.endColor = new pc.Color(i433[17], i433[18], i433[19], i433[20])
  i432.generateLightingData = !!i433[21]
  i432.enabled = !!i433[22]
  request.r(i433[23], i433[24], 0, i432, 'sharedMaterial')
  var i437 = i433[25]
  var i436 = []
  for(var i = 0; i < i437.length; i += 2) {
  request.r(i437[i + 0], i437[i + 1], 2, i436, '')
  }
  i432.sharedMaterials = i436
  i432.receiveShadows = !!i433[26]
  i432.shadowCastingMode = i433[27]
  i432.sortingLayerID = i433[28]
  i432.sortingOrder = i433[29]
  i432.lightmapIndex = i433[30]
  i432.lightmapSceneIndex = i433[31]
  i432.lightmapScaleOffset = new pc.Vec4( i433[32], i433[33], i433[34], i433[35] )
  i432.lightProbeUsage = i433[36]
  i432.reflectionProbeUsage = i433[37]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i441 = data
  i440.pivot = new pc.Vec2( i441[0], i441[1] )
  i440.anchorMin = new pc.Vec2( i441[2], i441[3] )
  i440.anchorMax = new pc.Vec2( i441[4], i441[5] )
  i440.sizeDelta = new pc.Vec2( i441[6], i441[7] )
  i440.anchoredPosition3D = new pc.Vec3( i441[8], i441[9], i441[10] )
  i440.rotation = new pc.Quat(i441[11], i441[12], i441[13], i441[14])
  i440.scale = new pc.Vec3( i441[15], i441[16], i441[17] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i443 = data
  i442.planeDistance = i443[0]
  i442.referencePixelsPerUnit = i443[1]
  i442.isFallbackOverlay = !!i443[2]
  i442.renderMode = i443[3]
  i442.renderOrder = i443[4]
  i442.sortingLayerName = i443[5]
  i442.sortingOrder = i443[6]
  i442.scaleFactor = i443[7]
  request.r(i443[8], i443[9], 0, i442, 'worldCamera')
  i442.overrideSorting = !!i443[10]
  i442.pixelPerfect = !!i443[11]
  i442.targetDisplay = i443[12]
  i442.overridePixelPerfect = !!i443[13]
  i442.enabled = !!i443[14]
  return i442
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i445 = data
  i444.m_UiScaleMode = i445[0]
  i444.m_ReferencePixelsPerUnit = i445[1]
  i444.m_ScaleFactor = i445[2]
  i444.m_ReferenceResolution = new pc.Vec2( i445[3], i445[4] )
  i444.m_ScreenMatchMode = i445[5]
  i444.m_MatchWidthOrHeight = i445[6]
  i444.m_PhysicalUnit = i445[7]
  i444.m_FallbackScreenDPI = i445[8]
  i444.m_DefaultSpriteDPI = i445[9]
  i444.m_DynamicPixelsPerUnit = i445[10]
  i444.m_PresetInfoIsWorld = !!i445[11]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i447 = data
  i446.cullTransparentMesh = !!i447[0]
  return i446
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.UI.Text' )
  var i449 = data
  i448.m_FontData = request.d('UnityEngine.UI.FontData', i449[0], i448.m_FontData)
  i448.m_Text = i449[1]
  request.r(i449[2], i449[3], 0, i448, 'm_Material')
  i448.m_Maskable = !!i449[4]
  i448.m_Color = new pc.Color(i449[5], i449[6], i449[7], i449[8])
  i448.m_RaycastTarget = !!i449[9]
  i448.m_RaycastPadding = new pc.Vec4( i449[10], i449[11], i449[12], i449[13] )
  return i448
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.UI.FontData' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'm_Font')
  i450.m_FontSize = i451[2]
  i450.m_FontStyle = i451[3]
  i450.m_BestFit = !!i451[4]
  i450.m_MinSize = i451[5]
  i450.m_MaxSize = i451[6]
  i450.m_Alignment = i451[7]
  i450.m_AlignByGeometry = !!i451[8]
  i450.m_RichText = !!i451[9]
  i450.m_HorizontalOverflow = i451[10]
  i450.m_VerticalOverflow = i451[11]
  i450.m_LineSpacing = i451[12]
  return i450
}

Deserializers["TextOutline"] = function (request, data, root) {
  var i452 = root || request.c( 'TextOutline' )
  var i453 = data
  i452.outlineColor = new pc.Color(i453[0], i453[1], i453[2], i453[3])
  i452.thickness = i453[4]
  i452.shadowColor = new pc.Color(i453[5], i453[6], i453[7], i453[8])
  i452.shadowOffset = new pc.Vec2( i453[9], i453[10] )
  var i455 = i453[11]
  var i454 = []
  for(var i = 0; i < i455.length; i += 2) {
  request.r(i455[i + 0], i455[i + 1], 2, i454, '')
  }
  i452.copies = i454
  i452.baseAlpha = i453[12]
  return i452
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.UI.Image' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'm_Sprite')
  i456.m_Type = i457[2]
  i456.m_PreserveAspect = !!i457[3]
  i456.m_FillCenter = !!i457[4]
  i456.m_FillMethod = i457[5]
  i456.m_FillAmount = i457[6]
  i456.m_FillClockwise = !!i457[7]
  i456.m_FillOrigin = i457[8]
  i456.m_UseSpriteMesh = !!i457[9]
  i456.m_PixelsPerUnitMultiplier = i457[10]
  request.r(i457[11], i457[12], 0, i456, 'm_Material')
  i456.m_Maskable = !!i457[13]
  i456.m_Color = new pc.Color(i457[14], i457[15], i457[16], i457[17])
  i456.m_RaycastTarget = !!i457[18]
  i456.m_RaycastPadding = new pc.Vec4( i457[19], i457[20], i457[21], i457[22] )
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i459 = data
  i458.m_Alpha = i459[0]
  i458.m_Interactable = !!i459[1]
  i458.m_BlocksRaycasts = !!i459[2]
  i458.m_IgnoreParentGroups = !!i459[3]
  i458.enabled = !!i459[4]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i461 = data
  i460.ambientIntensity = i461[0]
  i460.reflectionIntensity = i461[1]
  i460.ambientMode = i461[2]
  i460.ambientLight = new pc.Color(i461[3], i461[4], i461[5], i461[6])
  i460.ambientSkyColor = new pc.Color(i461[7], i461[8], i461[9], i461[10])
  i460.ambientGroundColor = new pc.Color(i461[11], i461[12], i461[13], i461[14])
  i460.ambientEquatorColor = new pc.Color(i461[15], i461[16], i461[17], i461[18])
  i460.fogColor = new pc.Color(i461[19], i461[20], i461[21], i461[22])
  i460.fogEndDistance = i461[23]
  i460.fogStartDistance = i461[24]
  i460.fogDensity = i461[25]
  i460.fog = !!i461[26]
  request.r(i461[27], i461[28], 0, i460, 'skybox')
  i460.fogMode = i461[29]
  var i463 = i461[30]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i463[i + 0]) );
  }
  i460.lightmaps = i462
  i460.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i461[31], i460.lightProbes)
  i460.lightmapsMode = i461[32]
  i460.mixedBakeMode = i461[33]
  i460.environmentLightingMode = i461[34]
  i460.ambientProbe = new pc.SphericalHarmonicsL2(i461[35])
  request.r(i461[36], i461[37], 0, i460, 'customReflection')
  request.r(i461[38], i461[39], 0, i460, 'defaultReflection')
  i460.defaultReflectionMode = i461[40]
  i460.defaultReflectionResolution = i461[41]
  i460.sunLightObjectId = i461[42]
  i460.pixelLightCount = i461[43]
  i460.defaultReflectionHDR = !!i461[44]
  i460.hasLightDataAsset = !!i461[45]
  i460.hasManualGenerate = !!i461[46]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'lightmapColor')
  request.r(i467[2], i467[3], 0, i466, 'lightmapDirection')
  request.r(i467[4], i467[5], 0, i466, 'shadowMask')
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i468 = root || new UnityEngine.LightProbes()
  var i469 = data
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i475 = data
  var i477 = i475[0]
  var i476 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i477.length; i += 1) {
    i476.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i477[i + 0]));
  }
  i474.ShaderCompilationErrors = i476
  i474.name = i475[1]
  i474.guid = i475[2]
  var i479 = i475[3]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( i479[i + 0] );
  }
  i474.shaderDefinedKeywords = i478
  var i481 = i475[4]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i481[i + 0]) );
  }
  i474.passes = i480
  var i483 = i475[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i483[i + 0]) );
  }
  i474.usePasses = i482
  var i485 = i475[6]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i485[i + 0]) );
  }
  i474.defaultParameterValues = i484
  request.r(i475[7], i475[8], 0, i474, 'unityFallbackShader')
  i474.readDepth = !!i475[9]
  i474.hasDepthOnlyPass = !!i475[10]
  i474.isCreatedByShaderGraph = !!i475[11]
  i474.disableBatching = !!i475[12]
  i474.compiled = !!i475[13]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i489 = data
  i488.shaderName = i489[0]
  i488.errorMessage = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i494 = root || new pc.UnityShaderPass()
  var i495 = data
  i494.id = i495[0]
  i494.subShaderIndex = i495[1]
  i494.name = i495[2]
  i494.passType = i495[3]
  i494.grabPassTextureName = i495[4]
  i494.usePass = !!i495[5]
  i494.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[6], i494.zTest)
  i494.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[7], i494.zWrite)
  i494.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[8], i494.culling)
  i494.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i495[9], i494.blending)
  i494.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i495[10], i494.alphaBlending)
  i494.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[11], i494.colorWriteMask)
  i494.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[12], i494.offsetUnits)
  i494.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[13], i494.offsetFactor)
  i494.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[14], i494.stencilRef)
  i494.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[15], i494.stencilReadMask)
  i494.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[16], i494.stencilWriteMask)
  i494.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i495[17], i494.stencilOp)
  i494.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i495[18], i494.stencilOpFront)
  i494.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i495[19], i494.stencilOpBack)
  var i497 = i495[20]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i497[i + 0]) );
  }
  i494.tags = i496
  var i499 = i495[21]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( i499[i + 0] );
  }
  i494.passDefinedKeywords = i498
  var i501 = i495[22]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i501[i + 0]) );
  }
  i494.passDefinedKeywordGroups = i500
  var i503 = i495[23]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i503[i + 0]) );
  }
  i494.variants = i502
  var i505 = i495[24]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i505[i + 0]) );
  }
  i494.excludedVariants = i504
  i494.hasDepthReader = !!i495[25]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i507 = data
  i506.val = i507[0]
  i506.name = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i509 = data
  i508.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i509[0], i508.src)
  i508.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i509[1], i508.dst)
  i508.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i509[2], i508.op)
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i511 = data
  i510.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[0], i510.pass)
  i510.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[1], i510.fail)
  i510.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[2], i510.zFail)
  i510.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i511[3], i510.comp)
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i515 = data
  i514.name = i515[0]
  i514.value = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i519 = data
  var i521 = i519[0]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( i521[i + 0] );
  }
  i518.keywords = i520
  i518.hasDiscard = !!i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i525 = data
  i524.passId = i525[0]
  i524.subShaderIndex = i525[1]
  var i527 = i525[2]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( i527[i + 0] );
  }
  i524.keywords = i526
  i524.vertexProgram = i525[3]
  i524.fragmentProgram = i525[4]
  i524.exportedForWebGl2 = !!i525[5]
  i524.readDepth = !!i525[6]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'shader')
  i530.pass = i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i535 = data
  i534.name = i535[0]
  i534.type = i535[1]
  i534.value = new pc.Vec4( i535[2], i535[3], i535[4], i535[5] )
  i534.textureValue = i535[6]
  i534.shaderPropertyFlag = i535[7]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i537 = data
  i536.name = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'texture')
  i536.aabb = i537[3]
  i536.vertices = i537[4]
  i536.triangles = i537[5]
  i536.textureRect = UnityEngine.Rect.MinMaxRect(i537[6], i537[7], i537[8], i537[9])
  i536.packedRect = UnityEngine.Rect.MinMaxRect(i537[10], i537[11], i537[12], i537[13])
  i536.border = new pc.Vec4( i537[14], i537[15], i537[16], i537[17] )
  i536.transparency = i537[18]
  i536.bounds = i537[19]
  i536.pixelsPerUnit = i537[20]
  i536.textureWidth = i537[21]
  i536.textureHeight = i537[22]
  i536.nativeSize = new pc.Vec2( i537[23], i537[24] )
  i536.pivot = new pc.Vec2( i537[25], i537[26] )
  i536.textureRectOffset = new pc.Vec2( i537[27], i537[28] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i539 = data
  i538.name = i539[0]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i541 = data
  i540.name = i541[0]
  i540.ascent = i541[1]
  i540.originalLineHeight = i541[2]
  i540.fontSize = i541[3]
  var i543 = i541[4]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i543[i + 0]) );
  }
  i540.characterInfo = i542
  request.r(i541[5], i541[6], 0, i540, 'texture')
  i540.originalFontSize = i541[7]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i547 = data
  i546.index = i547[0]
  i546.advance = i547[1]
  i546.bearing = i547[2]
  i546.glyphWidth = i547[3]
  i546.glyphHeight = i547[4]
  i546.minX = i547[5]
  i546.maxX = i547[6]
  i546.minY = i547[7]
  i546.maxY = i547[8]
  i546.uvBottomLeftX = i547[9]
  i546.uvBottomLeftY = i547[10]
  i546.uvBottomRightX = i547[11]
  i546.uvBottomRightY = i547[12]
  i546.uvTopLeftX = i547[13]
  i546.uvTopLeftY = i547[14]
  i546.uvTopRightX = i547[15]
  i546.uvTopRightY = i547[16]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i549 = data
  var i551 = i549[0]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i551[i + 0]) );
  }
  i548.files = i550
  i548.componentToPrefabIds = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i555 = data
  i554.path = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'unityObject')
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i557 = data
  var i559 = i557[0]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i559[i + 0]) );
  }
  i556.scriptsExecutionOrder = i558
  var i561 = i557[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i561[i + 0]) );
  }
  i556.sortingLayers = i560
  var i563 = i557[2]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i563[i + 0]) );
  }
  i556.cullingLayers = i562
  i556.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i557[3], i556.timeSettings)
  i556.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i557[4], i556.physicsSettings)
  i556.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i557[5], i556.physics2DSettings)
  i556.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i557[6], i556.qualitySettings)
  i556.enableRealtimeShadows = !!i557[7]
  i556.enableAutoInstancing = !!i557[8]
  i556.enableStaticBatching = !!i557[9]
  i556.enableDynamicBatching = !!i557[10]
  i556.usePreservativeDynamicBatching = !!i557[11]
  i556.lightmapEncodingQuality = i557[12]
  i556.desiredColorSpace = i557[13]
  var i565 = i557[14]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( i565[i + 0] );
  }
  i556.allTags = i564
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i569 = data
  i568.name = i569[0]
  i568.value = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i573 = data
  i572.id = i573[0]
  i572.name = i573[1]
  i572.value = i573[2]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i577 = data
  i576.id = i577[0]
  i576.name = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i579 = data
  i578.fixedDeltaTime = i579[0]
  i578.maximumDeltaTime = i579[1]
  i578.timeScale = i579[2]
  i578.maximumParticleTimestep = i579[3]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i581 = data
  i580.gravity = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.defaultSolverIterations = i581[3]
  i580.bounceThreshold = i581[4]
  i580.autoSyncTransforms = !!i581[5]
  i580.autoSimulation = !!i581[6]
  var i583 = i581[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i583[i + 0]) );
  }
  i580.collisionMatrix = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.layerId = i587[1]
  i586.otherLayerId = i587[2]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'material')
  i588.gravity = new pc.Vec2( i589[2], i589[3] )
  i588.positionIterations = i589[4]
  i588.velocityIterations = i589[5]
  i588.velocityThreshold = i589[6]
  i588.maxLinearCorrection = i589[7]
  i588.maxAngularCorrection = i589[8]
  i588.maxTranslationSpeed = i589[9]
  i588.maxRotationSpeed = i589[10]
  i588.baumgarteScale = i589[11]
  i588.baumgarteTOIScale = i589[12]
  i588.timeToSleep = i589[13]
  i588.linearSleepTolerance = i589[14]
  i588.angularSleepTolerance = i589[15]
  i588.defaultContactOffset = i589[16]
  i588.autoSimulation = !!i589[17]
  i588.queriesHitTriggers = !!i589[18]
  i588.queriesStartInColliders = !!i589[19]
  i588.callbacksOnDisable = !!i589[20]
  i588.reuseCollisionCallbacks = !!i589[21]
  i588.autoSyncTransforms = !!i589[22]
  var i591 = i589[23]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i591[i + 0]) );
  }
  i588.collisionMatrix = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i595 = data
  i594.enabled = !!i595[0]
  i594.layerId = i595[1]
  i594.otherLayerId = i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i597 = data
  var i599 = i597[0]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i599[i + 0]) );
  }
  i596.qualityLevels = i598
  var i601 = i597[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i596.names = i600
  i596.shadows = i597[2]
  i596.anisotropicFiltering = i597[3]
  i596.antiAliasing = i597[4]
  i596.lodBias = i597[5]
  i596.shadowCascades = i597[6]
  i596.shadowDistance = i597[7]
  i596.shadowmaskMode = i597[8]
  i596.shadowProjection = i597[9]
  i596.shadowResolution = i597[10]
  i596.softParticles = !!i597[11]
  i596.softVegetation = !!i597[12]
  i596.activeColorSpace = i597[13]
  i596.desiredColorSpace = i597[14]
  i596.masterTextureLimit = i597[15]
  i596.maxQueuedFrames = i597[16]
  i596.particleRaycastBudget = i597[17]
  i596.pixelLightCount = i597[18]
  i596.realtimeReflectionProbes = !!i597[19]
  i596.shadowCascade2Split = i597[20]
  i596.shadowCascade4Split = new pc.Vec3( i597[21], i597[22], i597[23] )
  i596.streamingMipmapsActive = !!i597[24]
  i596.vSyncCount = i597[25]
  i596.asyncUploadBufferSize = i597[26]
  i596.asyncUploadTimeSlice = i597[27]
  i596.billboardsFaceCameraPosition = !!i597[28]
  i596.shadowNearPlaneOffset = i597[29]
  i596.streamingMipmapsMemoryBudget = i597[30]
  i596.maximumLODLevel = i597[31]
  i596.streamingMipmapsAddAllCameras = !!i597[32]
  i596.streamingMipmapsMaxLevelReduction = i597[33]
  i596.streamingMipmapsRenderersPerFrame = i597[34]
  i596.resolutionScalingFixedDPIFactor = i597[35]
  i596.streamingMipmapsMaxFileIORequests = i597[36]
  i596.currentQualityLevel = i597[37]
  return i596
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[1],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[23],"51":[23],"52":[23],"53":[23],"54":[23],"55":[23],"25":[23],"56":[23],"57":[23],"58":[23],"59":[23],"60":[23],"61":[23],"62":[1],"63":[64],"65":[66],"67":[66],"26":[11],"31":[13],"68":[20],"69":[1],"70":[71],"72":[11],"73":[29,11],"74":[64],"75":[29,11],"76":[11],"77":[11],"78":[64,11],"79":[11,29],"80":[81],"82":[81],"83":[81],"84":[85],"86":[11],"87":[11],"88":[26],"17":[29,11],"89":[11],"28":[26],"90":[11],"91":[11],"92":[11],"93":[11],"94":[11],"95":[11],"96":[11],"97":[11],"98":[11],"99":[29,11],"100":[11],"101":[11],"102":[11],"103":[11],"13":[29,11],"104":[11],"105":[106],"107":[106],"108":[106],"109":[106],"110":[1],"111":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayableCameraController","LunaControllerFNAF","UnityEngine.AudioClip","PlayableFlowController","RagdollActor","UnityEngine.LineRenderer","UnityEngine.Transform","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Text","UnityEngine.AudioSource","HeroSkins","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","RagdollImpact","UnityEngine.HingeJoint2D","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.Font","TextOutline","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "KSDH_V02";

Deserializers.lunaInitializationTime = "10/23/2026 03:17:14";

Deserializers.lunaDaysRunning = "4.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_DatDV_FPS_V03_AnhPP";

Deserializers.lunaAppID = "43490";

Deserializers.projectId = "10ad67313f4034357812315f3c407484";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1782";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3547";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.KSDH_V02";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1379ae38-5122-4e82-a281-2f09c13a646b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Unity","Services","Core","Editor","StatusInitializer","InitializeOnLoad"],["Ua2CoreInitializeCallback","Register"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

