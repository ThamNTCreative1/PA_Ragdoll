var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.JointSpring' )
  var i1309 = data
  i1308.spring = i1309[0]
  i1308.damper = i1309[1]
  i1308.targetPosition = i1309[2]
  return i1308
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointMotor' )
  var i1311 = data
  i1310.m_TargetVelocity = i1311[0]
  i1310.m_Force = i1311[1]
  i1310.m_FreeSpin = i1311[2]
  return i1310
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.JointLimits' )
  var i1313 = data
  i1312.m_Min = i1313[0]
  i1312.m_Max = i1313[1]
  i1312.m_Bounciness = i1313[2]
  i1312.m_BounceMinVelocity = i1313[3]
  i1312.m_ContactDistance = i1313[4]
  i1312.minBounce = i1313[5]
  i1312.maxBounce = i1313[6]
  return i1312
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointDrive' )
  var i1315 = data
  i1314.m_PositionSpring = i1315[0]
  i1314.m_PositionDamper = i1315[1]
  i1314.m_MaximumForce = i1315[2]
  i1314.m_UseAcceleration = i1315[3]
  return i1314
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1317 = data
  i1316.m_Spring = i1317[0]
  i1316.m_Damper = i1317[1]
  return i1316
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1319 = data
  i1318.m_Limit = i1319[0]
  i1318.m_Bounciness = i1319[1]
  i1318.m_ContactDistance = i1319[2]
  return i1318
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1321 = data
  i1320.m_ExtremumSlip = i1321[0]
  i1320.m_ExtremumValue = i1321[1]
  i1320.m_AsymptoteSlip = i1321[2]
  i1320.m_AsymptoteValue = i1321[3]
  i1320.m_Stiffness = i1321[4]
  return i1320
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1323 = data
  i1322.m_LowerAngle = i1323[0]
  i1322.m_UpperAngle = i1323[1]
  return i1322
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1325 = data
  i1324.m_MotorSpeed = i1325[0]
  i1324.m_MaximumMotorTorque = i1325[1]
  return i1324
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1327 = data
  i1326.m_DampingRatio = i1327[0]
  i1326.m_Frequency = i1327[1]
  i1326.m_Angle = i1327[2]
  return i1326
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1329 = data
  i1328.m_LowerTranslation = i1329[0]
  i1328.m_UpperTranslation = i1329[1]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1330 = root || new pc.UnityMaterial()
  var i1331 = data
  i1330.name = i1331[0]
  request.r(i1331[1], i1331[2], 0, i1330, 'shader')
  i1330.renderQueue = i1331[3]
  i1330.enableInstancing = !!i1331[4]
  var i1333 = i1331[5]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1333[i + 0]) );
  }
  i1330.floatParameters = i1332
  var i1335 = i1331[6]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1335[i + 0]) );
  }
  i1330.colorParameters = i1334
  var i1337 = i1331[7]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1337[i + 0]) );
  }
  i1330.vectorParameters = i1336
  var i1339 = i1331[8]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1339[i + 0]) );
  }
  i1330.textureParameters = i1338
  var i1341 = i1331[9]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1341[i + 0]) );
  }
  i1330.materialFlags = i1340
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.value = i1345[1]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.value = new pc.Color(i1349[1], i1349[2], i1349[3], i1349[4])
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.value = new pc.Vec4( i1353[1], i1353[2], i1353[3], i1353[4] )
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1357 = data
  i1356.name = i1357[0]
  request.r(i1357[1], i1357[2], 0, i1356, 'value')
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.enabled = !!i1361[1]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.width = i1363[1]
  i1362.height = i1363[2]
  i1362.mipmapCount = i1363[3]
  i1362.anisoLevel = i1363[4]
  i1362.filterMode = i1363[5]
  i1362.hdr = !!i1363[6]
  i1362.format = i1363[7]
  i1362.wrapMode = i1363[8]
  i1362.alphaIsTransparency = !!i1363[9]
  i1362.alphaSource = i1363[10]
  i1362.graphicsFormat = i1363[11]
  i1362.sRGBTexture = !!i1363[12]
  i1362.desiredColorSpace = i1363[13]
  i1362.wrapU = i1363[14]
  i1362.wrapV = i1363[15]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1365 = data
  i1364.name = i1365[0]
  i1364.index = i1365[1]
  i1364.startup = !!i1365[2]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1367 = data
  i1366.aspect = i1367[0]
  i1366.orthographic = !!i1367[1]
  i1366.orthographicSize = i1367[2]
  i1366.backgroundColor = new pc.Color(i1367[3], i1367[4], i1367[5], i1367[6])
  i1366.nearClipPlane = i1367[7]
  i1366.farClipPlane = i1367[8]
  i1366.fieldOfView = i1367[9]
  i1366.depth = i1367[10]
  i1366.clearFlags = i1367[11]
  i1366.cullingMask = i1367[12]
  i1366.rect = i1367[13]
  request.r(i1367[14], i1367[15], 0, i1366, 'targetTexture')
  i1366.usePhysicalProperties = !!i1367[16]
  i1366.focalLength = i1367[17]
  i1366.sensorSize = new pc.Vec2( i1367[18], i1367[19] )
  i1366.lensShift = new pc.Vec2( i1367[20], i1367[21] )
  i1366.gateFit = i1367[22]
  i1366.commandBufferCount = i1367[23]
  i1366.cameraType = i1367[24]
  i1366.enabled = !!i1367[25]
  return i1366
}

Deserializers["ResponsiveLayout"] = function (request, data, root) {
  var i1368 = root || request.c( 'ResponsiveLayout' )
  var i1369 = data
  request.r(i1369[0], i1369[1], 0, i1368, 'cam')
  request.r(i1369[2], i1369[3], 0, i1368, 'scaler')
  request.r(i1369[4], i1369[5], 0, i1368, 'background')
  request.r(i1369[6], i1369[7], 0, i1368, 'backgroundTexture')
  i1368.halfWidth = i1369[8]
  i1368.worldBottom = i1369[9]
  i1368.worldTop = i1369[10]
  i1368.topReserve = i1369[11]
  request.r(i1369[12], i1369[13], 0, i1368, 'tapButton')
  i1368.tapButtonPortrait = new pc.Vec2( i1369[14], i1369[15] )
  i1368.tapButtonLandscape = new pc.Vec2( i1369[16], i1369[17] )
  request.r(i1369[18], i1369[19], 0, i1368, 'hintText')
  i1368.hintTopMargin = i1369[20]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1371 = data
  i1370.color = new pc.Color(i1371[0], i1371[1], i1371[2], i1371[3])
  request.r(i1371[4], i1371[5], 0, i1370, 'sprite')
  i1370.flipX = !!i1371[6]
  i1370.flipY = !!i1371[7]
  i1370.drawMode = i1371[8]
  i1370.size = new pc.Vec2( i1371[9], i1371[10] )
  i1370.tileMode = i1371[11]
  i1370.adaptiveModeThreshold = i1371[12]
  i1370.maskInteraction = i1371[13]
  i1370.spriteSortPoint = i1371[14]
  i1370.enabled = !!i1371[15]
  request.r(i1371[16], i1371[17], 0, i1370, 'sharedMaterial')
  var i1373 = i1371[18]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 2) {
  request.r(i1373[i + 0], i1373[i + 1], 2, i1372, '')
  }
  i1370.sharedMaterials = i1372
  i1370.receiveShadows = !!i1371[19]
  i1370.shadowCastingMode = i1371[20]
  i1370.sortingLayerID = i1371[21]
  i1370.sortingOrder = i1371[22]
  i1370.lightmapIndex = i1371[23]
  i1370.lightmapSceneIndex = i1371[24]
  i1370.lightmapScaleOffset = new pc.Vec4( i1371[25], i1371[26], i1371[27], i1371[28] )
  i1370.lightProbeUsage = i1371[29]
  i1370.reflectionProbeUsage = i1371[30]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1377 = data
  i1376.name = i1377[0]
  i1376.tagId = i1377[1]
  i1376.enabled = !!i1377[2]
  i1376.isStatic = !!i1377[3]
  i1376.layer = i1377[4]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1379 = data
  i1378.usedByComposite = !!i1379[0]
  i1378.autoTiling = !!i1379[1]
  i1378.size = new pc.Vec2( i1379[2], i1379[3] )
  i1378.edgeRadius = i1379[4]
  i1378.enabled = !!i1379[5]
  i1378.isTrigger = !!i1379[6]
  i1378.usedByEffector = !!i1379[7]
  i1378.density = i1379[8]
  i1378.offset = new pc.Vec2( i1379[9], i1379[10] )
  request.r(i1379[11], i1379[12], 0, i1378, 'material')
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1381 = data
  i1380.sortingLayerIndex = i1381[0]
  i1380.sortingOrder = i1381[1]
  i1380.sortingLayerName = i1381[2]
  i1380.enabled = !!i1381[3]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1383 = data
  i1382.bodyType = i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'material')
  i1382.simulated = !!i1383[3]
  i1382.useAutoMass = !!i1383[4]
  i1382.mass = i1383[5]
  i1382.drag = i1383[6]
  i1382.angularDrag = i1383[7]
  i1382.gravityScale = i1383[8]
  i1382.collisionDetectionMode = i1383[9]
  i1382.sleepMode = i1383[10]
  i1382.constraints = i1383[11]
  return i1382
}

Deserializers["RagdollPose"] = function (request, data, root) {
  var i1384 = root || request.c( 'RagdollPose' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'head')
  request.r(i1385[2], i1385[3], 0, i1384, 'body')
  request.r(i1385[4], i1385[5], 0, i1384, 'leftHand')
  request.r(i1385[6], i1385[7], 0, i1384, 'rightHand')
  request.r(i1385[8], i1385[9], 0, i1384, 'leftLeg')
  request.r(i1385[10], i1385[11], 0, i1384, 'rightLeg')
  i1384.shoulder = new pc.Vec2( i1385[12], i1385[13] )
  i1384.neck = new pc.Vec2( i1385[14], i1385[15] )
  i1384.hipLeft = new pc.Vec2( i1385[16], i1385[17] )
  i1384.hipRight = new pc.Vec2( i1385[18], i1385[19] )
  i1384.handTipLocal = i1385[20]
  i1384.leftArm = i1385[21]
  i1384.rightArm = i1385[22]
  i1384.leftLegAngle = i1385[23]
  i1384.rightLegAngle = i1385[24]
  i1384.headAngle = i1385[25]
  i1384.bob = i1385[26]
  i1384.feetOffset = i1385[27]
  i1384.height = i1385[28]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1387 = data
  i1386.useLimits = !!i1387[0]
  i1386.limits = request.d('UnityEngine.JointAngleLimits2D', i1387[1], i1386.limits)
  i1386.useMotor = !!i1387[2]
  i1386.motor = request.d('UnityEngine.JointMotor2D', i1387[3], i1386.motor)
  i1386.anchor = new pc.Vec2( i1387[4], i1387[5] )
  i1386.connectedAnchor = new pc.Vec2( i1387[6], i1387[7] )
  i1386.autoConfigureConnectedAnchor = !!i1387[8]
  request.r(i1387[9], i1387[10], 0, i1386, 'connectedBody')
  i1386.breakForce = i1387[11]
  i1386.breakTorque = i1387[12]
  i1386.enableCollision = !!i1387[13]
  i1386.enabled = !!i1387[14]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1389 = data
  request.r(i1389[0], i1389[1], 0, i1388, 'clip')
  request.r(i1389[2], i1389[3], 0, i1388, 'outputAudioMixerGroup')
  i1388.playOnAwake = !!i1389[4]
  i1388.loop = !!i1389[5]
  i1388.time = i1389[6]
  i1388.volume = i1389[7]
  i1388.pitch = i1389[8]
  i1388.enabled = !!i1389[9]
  return i1388
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'm_FirstSelected')
  i1390.m_sendNavigationEvents = !!i1391[2]
  i1390.m_DragThreshold = i1391[3]
  return i1390
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1393 = data
  i1392.m_HorizontalAxis = i1393[0]
  i1392.m_VerticalAxis = i1393[1]
  i1392.m_SubmitButton = i1393[2]
  i1392.m_CancelButton = i1393[3]
  i1392.m_InputActionsPerSecond = i1393[4]
  i1392.m_RepeatDelay = i1393[5]
  i1392.m_ForceModuleActive = !!i1393[6]
  i1392.m_SendPointerHoverToParent = !!i1393[7]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1395 = data
  i1394.pivot = new pc.Vec2( i1395[0], i1395[1] )
  i1394.anchorMin = new pc.Vec2( i1395[2], i1395[3] )
  i1394.anchorMax = new pc.Vec2( i1395[4], i1395[5] )
  i1394.sizeDelta = new pc.Vec2( i1395[6], i1395[7] )
  i1394.anchoredPosition3D = new pc.Vec3( i1395[8], i1395[9], i1395[10] )
  i1394.rotation = new pc.Quat(i1395[11], i1395[12], i1395[13], i1395[14])
  i1394.scale = new pc.Vec3( i1395[15], i1395[16], i1395[17] )
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1397 = data
  i1396.planeDistance = i1397[0]
  i1396.referencePixelsPerUnit = i1397[1]
  i1396.isFallbackOverlay = !!i1397[2]
  i1396.renderMode = i1397[3]
  i1396.renderOrder = i1397[4]
  i1396.sortingLayerName = i1397[5]
  i1396.sortingOrder = i1397[6]
  i1396.scaleFactor = i1397[7]
  request.r(i1397[8], i1397[9], 0, i1396, 'worldCamera')
  i1396.overrideSorting = !!i1397[10]
  i1396.pixelPerfect = !!i1397[11]
  i1396.targetDisplay = i1397[12]
  i1396.overridePixelPerfect = !!i1397[13]
  i1396.enabled = !!i1397[14]
  return i1396
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1399 = data
  i1398.m_UiScaleMode = i1399[0]
  i1398.m_ReferencePixelsPerUnit = i1399[1]
  i1398.m_ScaleFactor = i1399[2]
  i1398.m_ReferenceResolution = new pc.Vec2( i1399[3], i1399[4] )
  i1398.m_ScreenMatchMode = i1399[5]
  i1398.m_MatchWidthOrHeight = i1399[6]
  i1398.m_PhysicalUnit = i1399[7]
  i1398.m_FallbackScreenDPI = i1399[8]
  i1398.m_DefaultSpriteDPI = i1399[9]
  i1398.m_DynamicPixelsPerUnit = i1399[10]
  i1398.m_PresetInfoIsWorld = !!i1399[11]
  return i1398
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1401 = data
  i1400.m_IgnoreReversedGraphics = !!i1401[0]
  i1400.m_BlockingObjects = i1401[1]
  i1400.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1401[2] )
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1403 = data
  i1402.cullTransparentMesh = !!i1403[0]
  return i1402
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1405 = data
  i1404.m_hasFontAssetChanged = !!i1405[0]
  request.r(i1405[1], i1405[2], 0, i1404, 'm_baseMaterial')
  i1404.m_maskOffset = new pc.Vec4( i1405[3], i1405[4], i1405[5], i1405[6] )
  i1404.m_text = i1405[7]
  i1404.m_isRightToLeft = !!i1405[8]
  request.r(i1405[9], i1405[10], 0, i1404, 'm_fontAsset')
  request.r(i1405[11], i1405[12], 0, i1404, 'm_sharedMaterial')
  var i1407 = i1405[13]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 2) {
  request.r(i1407[i + 0], i1407[i + 1], 2, i1406, '')
  }
  i1404.m_fontSharedMaterials = i1406
  request.r(i1405[14], i1405[15], 0, i1404, 'm_fontMaterial')
  var i1409 = i1405[16]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 2) {
  request.r(i1409[i + 0], i1409[i + 1], 2, i1408, '')
  }
  i1404.m_fontMaterials = i1408
  i1404.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1405[17], i1405[18], i1405[19], i1405[20])
  i1404.m_fontColor = new pc.Color(i1405[21], i1405[22], i1405[23], i1405[24])
  i1404.m_enableVertexGradient = !!i1405[25]
  i1404.m_colorMode = i1405[26]
  i1404.m_fontColorGradient = request.d('TMPro.VertexGradient', i1405[27], i1404.m_fontColorGradient)
  request.r(i1405[28], i1405[29], 0, i1404, 'm_fontColorGradientPreset')
  request.r(i1405[30], i1405[31], 0, i1404, 'm_spriteAsset')
  i1404.m_tintAllSprites = !!i1405[32]
  request.r(i1405[33], i1405[34], 0, i1404, 'm_StyleSheet')
  i1404.m_TextStyleHashCode = i1405[35]
  i1404.m_overrideHtmlColors = !!i1405[36]
  i1404.m_faceColor = UnityEngine.Color32.ConstructColor(i1405[37], i1405[38], i1405[39], i1405[40])
  i1404.m_fontSize = i1405[41]
  i1404.m_fontSizeBase = i1405[42]
  i1404.m_fontWeight = i1405[43]
  i1404.m_enableAutoSizing = !!i1405[44]
  i1404.m_fontSizeMin = i1405[45]
  i1404.m_fontSizeMax = i1405[46]
  i1404.m_fontStyle = i1405[47]
  i1404.m_HorizontalAlignment = i1405[48]
  i1404.m_VerticalAlignment = i1405[49]
  i1404.m_textAlignment = i1405[50]
  i1404.m_characterSpacing = i1405[51]
  i1404.m_wordSpacing = i1405[52]
  i1404.m_lineSpacing = i1405[53]
  i1404.m_lineSpacingMax = i1405[54]
  i1404.m_paragraphSpacing = i1405[55]
  i1404.m_charWidthMaxAdj = i1405[56]
  i1404.m_TextWrappingMode = i1405[57]
  i1404.m_wordWrappingRatios = i1405[58]
  i1404.m_overflowMode = i1405[59]
  request.r(i1405[60], i1405[61], 0, i1404, 'm_linkedTextComponent')
  request.r(i1405[62], i1405[63], 0, i1404, 'parentLinkedComponent')
  i1404.m_enableKerning = !!i1405[64]
  var i1411 = i1405[65]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(i1411[i + 0]);
  }
  i1404.m_ActiveFontFeatures = i1410
  i1404.m_enableExtraPadding = !!i1405[66]
  i1404.checkPaddingRequired = !!i1405[67]
  i1404.m_isRichText = !!i1405[68]
  i1404.m_parseCtrlCharacters = !!i1405[69]
  i1404.m_isOrthographic = !!i1405[70]
  i1404.m_isCullingEnabled = !!i1405[71]
  i1404.m_horizontalMapping = i1405[72]
  i1404.m_verticalMapping = i1405[73]
  i1404.m_uvLineOffset = i1405[74]
  i1404.m_geometrySortingOrder = i1405[75]
  i1404.m_IsTextObjectScaleStatic = !!i1405[76]
  i1404.m_VertexBufferAutoSizeReduction = !!i1405[77]
  i1404.m_useMaxVisibleDescender = !!i1405[78]
  i1404.m_pageToDisplay = i1405[79]
  i1404.m_margin = new pc.Vec4( i1405[80], i1405[81], i1405[82], i1405[83] )
  i1404.m_isUsingLegacyAnimationComponent = !!i1405[84]
  i1404.m_isVolumetricText = !!i1405[85]
  request.r(i1405[86], i1405[87], 0, i1404, 'm_Material')
  i1404.m_EmojiFallbackSupport = !!i1405[88]
  i1404.m_Maskable = !!i1405[89]
  i1404.m_Color = new pc.Color(i1405[90], i1405[91], i1405[92], i1405[93])
  i1404.m_RaycastTarget = !!i1405[94]
  i1404.m_RaycastPadding = new pc.Vec4( i1405[95], i1405[96], i1405[97], i1405[98] )
  return i1404
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.VertexGradient' )
  var i1413 = data
  i1412.topLeft = new pc.Color(i1413[0], i1413[1], i1413[2], i1413[3])
  i1412.topRight = new pc.Color(i1413[4], i1413[5], i1413[6], i1413[7])
  i1412.bottomLeft = new pc.Color(i1413[8], i1413[9], i1413[10], i1413[11])
  i1412.bottomRight = new pc.Color(i1413[12], i1413[13], i1413[14], i1413[15])
  return i1412
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1416 = root || request.c( 'UnityEngine.UI.Image' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'm_Sprite')
  i1416.m_Type = i1417[2]
  i1416.m_PreserveAspect = !!i1417[3]
  i1416.m_FillCenter = !!i1417[4]
  i1416.m_FillMethod = i1417[5]
  i1416.m_FillAmount = i1417[6]
  i1416.m_FillClockwise = !!i1417[7]
  i1416.m_FillOrigin = i1417[8]
  i1416.m_UseSpriteMesh = !!i1417[9]
  i1416.m_PixelsPerUnitMultiplier = i1417[10]
  request.r(i1417[11], i1417[12], 0, i1416, 'm_Material')
  i1416.m_Maskable = !!i1417[13]
  i1416.m_Color = new pc.Color(i1417[14], i1417[15], i1417[16], i1417[17])
  i1416.m_RaycastTarget = !!i1417[18]
  i1416.m_RaycastPadding = new pc.Vec4( i1417[19], i1417[20], i1417[21], i1417[22] )
  return i1416
}

Deserializers["TapButton"] = function (request, data, root) {
  var i1418 = root || request.c( 'TapButton' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'game')
  request.r(i1419[2], i1419[3], 0, i1418, 'visual')
  i1418.pressScale = i1419[4]
  return i1418
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.UI.Button' )
  var i1421 = data
  i1420.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1421[0], i1420.m_OnClick)
  i1420.m_Navigation = request.d('UnityEngine.UI.Navigation', i1421[1], i1420.m_Navigation)
  i1420.m_Transition = i1421[2]
  i1420.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1421[3], i1420.m_Colors)
  i1420.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1421[4], i1420.m_SpriteState)
  i1420.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1421[5], i1420.m_AnimationTriggers)
  i1420.m_Interactable = !!i1421[6]
  request.r(i1421[7], i1421[8], 0, i1420, 'm_TargetGraphic')
  return i1420
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1423 = data
  i1422.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1423[0], i1422.m_PersistentCalls)
  return i1422
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('UnityEngine.Events.PersistentCall', i1427[i + 0]));
  }
  i1424.m_Calls = i1426
  return i1424
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'm_Target')
  i1430.m_TargetAssemblyTypeName = i1431[2]
  i1430.m_MethodName = i1431[3]
  i1430.m_Mode = i1431[4]
  i1430.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1431[5], i1430.m_Arguments)
  i1430.m_CallState = i1431[6]
  return i1430
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1433 = data
  i1432.m_Mode = i1433[0]
  i1432.m_WrapAround = !!i1433[1]
  request.r(i1433[2], i1433[3], 0, i1432, 'm_SelectOnUp')
  request.r(i1433[4], i1433[5], 0, i1432, 'm_SelectOnDown')
  request.r(i1433[6], i1433[7], 0, i1432, 'm_SelectOnLeft')
  request.r(i1433[8], i1433[9], 0, i1432, 'm_SelectOnRight')
  return i1432
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1435 = data
  i1434.m_NormalColor = new pc.Color(i1435[0], i1435[1], i1435[2], i1435[3])
  i1434.m_HighlightedColor = new pc.Color(i1435[4], i1435[5], i1435[6], i1435[7])
  i1434.m_PressedColor = new pc.Color(i1435[8], i1435[9], i1435[10], i1435[11])
  i1434.m_SelectedColor = new pc.Color(i1435[12], i1435[13], i1435[14], i1435[15])
  i1434.m_DisabledColor = new pc.Color(i1435[16], i1435[17], i1435[18], i1435[19])
  i1434.m_ColorMultiplier = i1435[20]
  i1434.m_FadeDuration = i1435[21]
  return i1434
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'm_HighlightedSprite')
  request.r(i1437[2], i1437[3], 0, i1436, 'm_PressedSprite')
  request.r(i1437[4], i1437[5], 0, i1436, 'm_SelectedSprite')
  request.r(i1437[6], i1437[7], 0, i1436, 'm_DisabledSprite')
  return i1436
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1439 = data
  i1438.m_NormalTrigger = i1439[0]
  i1438.m_HighlightedTrigger = i1439[1]
  i1438.m_PressedTrigger = i1439[2]
  i1438.m_SelectedTrigger = i1439[3]
  i1438.m_DisabledTrigger = i1439[4]
  return i1438
}

Deserializers["StairRaceGame"] = function (request, data, root) {
  var i1440 = root || request.c( 'StairRaceGame' )
  var i1441 = data
  i1440.npcWinTime = i1441[0]
  i1440.tapPower = i1441[1]
  i1440.autoStartDelay = i1441[2]
  i1440.musicGrace = i1441[3]
  i1440.hintMessage = i1441[4]
  i1440.loseMessage = i1441[5]
  i1440.retryMessage = i1441[6]
  request.r(i1441[7], i1441[8], 0, i1440, 'remixClip')
  request.r(i1441[9], i1441[10], 0, i1440, 'loseClip')
  request.r(i1441[11], i1441[12], 0, i1440, 'fallClip')
  request.r(i1441[13], i1441[14], 0, i1440, 'cryClip')
  request.r(i1441[15], i1441[16], 0, i1440, 'zoey')
  request.r(i1441[17], i1441[18], 0, i1440, 'mira')
  request.r(i1441[19], i1441[20], 0, i1440, 'rumi')
  request.r(i1441[21], i1441[22], 0, i1440, 'miraColumn')
  request.r(i1441[23], i1441[24], 0, i1440, 'rumiColumn')
  i1440.podiumTop = i1441[25]
  i1440.startTop = i1441[26]
  i1440.blockSize = i1441[27]
  request.r(i1441[28], i1441[29], 0, i1440, 'miraWeapon')
  request.r(i1441[30], i1441[31], 0, i1440, 'rumiWeapon')
  request.r(i1441[32], i1441[33], 0, i1440, 'layout')
  request.r(i1441[34], i1441[35], 0, i1440, 'music')
  request.r(i1441[36], i1441[37], 0, i1440, 'sfx')
  request.r(i1441[38], i1441[39], 0, i1440, 'tapButton')
  request.r(i1441[40], i1441[41], 0, i1440, 'tutorialHand')
  request.r(i1441[42], i1441[43], 0, i1440, 'hintText')
  request.r(i1441[44], i1441[45], 0, i1440, 'losePanel')
  request.r(i1441[46], i1441[47], 0, i1440, 'loseContent')
  request.r(i1441[48], i1441[49], 0, i1440, 'loseTitle')
  request.r(i1441[50], i1441[51], 0, i1440, 'cryImage')
  request.r(i1441[52], i1441[53], 0, i1440, 'retryButton')
  request.r(i1441[54], i1441[55], 0, i1440, 'retryText')
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1443 = data
  i1442.ambientIntensity = i1443[0]
  i1442.reflectionIntensity = i1443[1]
  i1442.ambientMode = i1443[2]
  i1442.ambientLight = new pc.Color(i1443[3], i1443[4], i1443[5], i1443[6])
  i1442.ambientSkyColor = new pc.Color(i1443[7], i1443[8], i1443[9], i1443[10])
  i1442.ambientGroundColor = new pc.Color(i1443[11], i1443[12], i1443[13], i1443[14])
  i1442.ambientEquatorColor = new pc.Color(i1443[15], i1443[16], i1443[17], i1443[18])
  i1442.fogColor = new pc.Color(i1443[19], i1443[20], i1443[21], i1443[22])
  i1442.fogEndDistance = i1443[23]
  i1442.fogStartDistance = i1443[24]
  i1442.fogDensity = i1443[25]
  i1442.fog = !!i1443[26]
  request.r(i1443[27], i1443[28], 0, i1442, 'skybox')
  i1442.fogMode = i1443[29]
  var i1445 = i1443[30]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1445[i + 0]) );
  }
  i1442.lightmaps = i1444
  i1442.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1443[31], i1442.lightProbes)
  i1442.lightmapsMode = i1443[32]
  i1442.mixedBakeMode = i1443[33]
  i1442.environmentLightingMode = i1443[34]
  i1442.ambientProbe = new pc.SphericalHarmonicsL2(i1443[35])
  request.r(i1443[36], i1443[37], 0, i1442, 'customReflection')
  request.r(i1443[38], i1443[39], 0, i1442, 'defaultReflection')
  i1442.defaultReflectionMode = i1443[40]
  i1442.defaultReflectionResolution = i1443[41]
  i1442.sunLightObjectId = i1443[42]
  i1442.pixelLightCount = i1443[43]
  i1442.defaultReflectionHDR = !!i1443[44]
  i1442.hasLightDataAsset = !!i1443[45]
  i1442.hasManualGenerate = !!i1443[46]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1449 = data
  request.r(i1449[0], i1449[1], 0, i1448, 'lightmapColor')
  request.r(i1449[2], i1449[3], 0, i1448, 'lightmapDirection')
  request.r(i1449[4], i1449[5], 0, i1448, 'shadowMask')
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1450 = root || new UnityEngine.LightProbes()
  var i1451 = data
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1461[i + 0]));
  }
  i1458.ShaderCompilationErrors = i1460
  i1458.name = i1459[1]
  i1458.guid = i1459[2]
  var i1463 = i1459[3]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( i1463[i + 0] );
  }
  i1458.shaderDefinedKeywords = i1462
  var i1465 = i1459[4]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1465[i + 0]) );
  }
  i1458.passes = i1464
  var i1467 = i1459[5]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1467[i + 0]) );
  }
  i1458.usePasses = i1466
  var i1469 = i1459[6]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1469[i + 0]) );
  }
  i1458.defaultParameterValues = i1468
  request.r(i1459[7], i1459[8], 0, i1458, 'unityFallbackShader')
  i1458.readDepth = !!i1459[9]
  i1458.hasDepthOnlyPass = !!i1459[10]
  i1458.isCreatedByShaderGraph = !!i1459[11]
  i1458.disableBatching = !!i1459[12]
  i1458.compiled = !!i1459[13]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1473 = data
  i1472.shaderName = i1473[0]
  i1472.errorMessage = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1478 = root || new pc.UnityShaderPass()
  var i1479 = data
  i1478.id = i1479[0]
  i1478.subShaderIndex = i1479[1]
  i1478.name = i1479[2]
  i1478.passType = i1479[3]
  i1478.grabPassTextureName = i1479[4]
  i1478.usePass = !!i1479[5]
  i1478.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[6], i1478.zTest)
  i1478.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[7], i1478.zWrite)
  i1478.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[8], i1478.culling)
  i1478.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1479[9], i1478.blending)
  i1478.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1479[10], i1478.alphaBlending)
  i1478.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[11], i1478.colorWriteMask)
  i1478.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[12], i1478.offsetUnits)
  i1478.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[13], i1478.offsetFactor)
  i1478.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[14], i1478.stencilRef)
  i1478.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[15], i1478.stencilReadMask)
  i1478.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[16], i1478.stencilWriteMask)
  i1478.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1479[17], i1478.stencilOp)
  i1478.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1479[18], i1478.stencilOpFront)
  i1478.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1479[19], i1478.stencilOpBack)
  var i1481 = i1479[20]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1481[i + 0]) );
  }
  i1478.tags = i1480
  var i1483 = i1479[21]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( i1483[i + 0] );
  }
  i1478.passDefinedKeywords = i1482
  var i1485 = i1479[22]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1485[i + 0]) );
  }
  i1478.passDefinedKeywordGroups = i1484
  var i1487 = i1479[23]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1487[i + 0]) );
  }
  i1478.variants = i1486
  var i1489 = i1479[24]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1489[i + 0]) );
  }
  i1478.excludedVariants = i1488
  i1478.hasDepthReader = !!i1479[25]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1491 = data
  i1490.val = i1491[0]
  i1490.name = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1493 = data
  i1492.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[0], i1492.src)
  i1492.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[1], i1492.dst)
  i1492.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[2], i1492.op)
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1495 = data
  i1494.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1495[0], i1494.pass)
  i1494.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1495[1], i1494.fail)
  i1494.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1495[2], i1494.zFail)
  i1494.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1495[3], i1494.comp)
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.value = i1499[1]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( i1505[i + 0] );
  }
  i1502.keywords = i1504
  i1502.hasDiscard = !!i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1509 = data
  i1508.passId = i1509[0]
  i1508.subShaderIndex = i1509[1]
  var i1511 = i1509[2]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( i1511[i + 0] );
  }
  i1508.keywords = i1510
  i1508.vertexProgram = i1509[3]
  i1508.fragmentProgram = i1509[4]
  i1508.exportedForWebGl2 = !!i1509[5]
  i1508.readDepth = !!i1509[6]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'shader')
  i1514.pass = i1515[2]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1519 = data
  i1518.name = i1519[0]
  i1518.type = i1519[1]
  i1518.value = new pc.Vec4( i1519[2], i1519[3], i1519[4], i1519[5] )
  i1518.textureValue = i1519[6]
  i1518.shaderPropertyFlag = i1519[7]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1521 = data
  i1520.name = i1521[0]
  request.r(i1521[1], i1521[2], 0, i1520, 'texture')
  i1520.aabb = i1521[3]
  i1520.vertices = i1521[4]
  i1520.triangles = i1521[5]
  i1520.textureRect = UnityEngine.Rect.MinMaxRect(i1521[6], i1521[7], i1521[8], i1521[9])
  i1520.packedRect = UnityEngine.Rect.MinMaxRect(i1521[10], i1521[11], i1521[12], i1521[13])
  i1520.border = new pc.Vec4( i1521[14], i1521[15], i1521[16], i1521[17] )
  i1520.transparency = i1521[18]
  i1520.bounds = i1521[19]
  i1520.pixelsPerUnit = i1521[20]
  i1520.textureWidth = i1521[21]
  i1520.textureHeight = i1521[22]
  i1520.nativeSize = new pc.Vec2( i1521[23], i1521[24] )
  i1520.pivot = new pc.Vec2( i1521[25], i1521[26] )
  i1520.textureRectOffset = new pc.Vec2( i1521[27], i1521[28] )
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1523 = data
  i1522.name = i1523[0]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.ascent = i1525[1]
  i1524.originalLineHeight = i1525[2]
  i1524.fontSize = i1525[3]
  var i1527 = i1525[4]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1527[i + 0]) );
  }
  i1524.characterInfo = i1526
  request.r(i1525[5], i1525[6], 0, i1524, 'texture')
  i1524.originalFontSize = i1525[7]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1531 = data
  i1530.index = i1531[0]
  i1530.advance = i1531[1]
  i1530.bearing = i1531[2]
  i1530.glyphWidth = i1531[3]
  i1530.glyphHeight = i1531[4]
  i1530.minX = i1531[5]
  i1530.maxX = i1531[6]
  i1530.minY = i1531[7]
  i1530.maxY = i1531[8]
  i1530.uvBottomLeftX = i1531[9]
  i1530.uvBottomLeftY = i1531[10]
  i1530.uvBottomRightX = i1531[11]
  i1530.uvBottomRightY = i1531[12]
  i1530.uvTopLeftX = i1531[13]
  i1530.uvTopLeftY = i1531[14]
  i1530.uvTopRightX = i1531[15]
  i1530.uvTopRightY = i1531[16]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.bytes64 = i1533[1]
  i1532.data = i1533[2]
  return i1532
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1534 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1535 = data
  i1534.normalStyle = i1535[0]
  i1534.normalSpacingOffset = i1535[1]
  i1534.boldStyle = i1535[2]
  i1534.boldSpacing = i1535[3]
  i1534.italicStyle = i1535[4]
  i1534.tabSize = i1535[5]
  request.r(i1535[6], i1535[7], 0, i1534, 'atlas')
  i1534.m_SourceFontFileGUID = i1535[8]
  i1534.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1535[9], i1534.m_CreationSettings)
  request.r(i1535[10], i1535[11], 0, i1534, 'm_SourceFontFile')
  i1534.m_SourceFontFilePath = i1535[12]
  i1534.m_AtlasPopulationMode = i1535[13]
  i1534.InternalDynamicOS = !!i1535[14]
  var i1537 = i1535[15]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('UnityEngine.TextCore.Glyph', i1537[i + 0]));
  }
  i1534.m_GlyphTable = i1536
  var i1539 = i1535[16]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('TMPro.TMP_Character', i1539[i + 0]));
  }
  i1534.m_CharacterTable = i1538
  var i1541 = i1535[17]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 2, i1540, '')
  }
  i1534.m_AtlasTextures = i1540
  i1534.m_AtlasTextureIndex = i1535[18]
  i1534.m_IsMultiAtlasTexturesEnabled = !!i1535[19]
  i1534.m_GetFontFeatures = !!i1535[20]
  i1534.m_ClearDynamicDataOnBuild = !!i1535[21]
  i1534.m_AtlasWidth = i1535[22]
  i1534.m_AtlasHeight = i1535[23]
  i1534.m_AtlasPadding = i1535[24]
  i1534.m_AtlasRenderMode = i1535[25]
  var i1543 = i1535[26]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('UnityEngine.TextCore.GlyphRect', i1543[i + 0]));
  }
  i1534.m_UsedGlyphRects = i1542
  var i1545 = i1535[27]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.add(request.d('UnityEngine.TextCore.GlyphRect', i1545[i + 0]));
  }
  i1534.m_FreeGlyphRects = i1544
  i1534.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1535[28], i1534.m_FontFeatureTable)
  i1534.m_ShouldReimportFontFeatures = !!i1535[29]
  var i1547 = i1535[30]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 1, i1546, '')
  }
  i1534.m_FallbackFontAssetTable = i1546
  var i1549 = i1535[31]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('TMPro.TMP_FontWeightPair', i1549[i + 0]) );
  }
  i1534.m_FontWeightTable = i1548
  var i1551 = i1535[32]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('TMPro.TMP_FontWeightPair', i1551[i + 0]) );
  }
  i1534.fontWeights = i1550
  i1534.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1535[33], i1534.m_fontInfo)
  var i1553 = i1535[34]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('TMPro.TMP_Glyph', i1553[i + 0]));
  }
  i1534.m_glyphInfoList = i1552
  i1534.m_KerningTable = request.d('TMPro.KerningTable', i1535[35], i1534.m_KerningTable)
  var i1555 = i1535[36]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 1, i1554, '')
  }
  i1534.fallbackFontAssets = i1554
  i1534.m_Version = i1535[37]
  i1534.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1535[38], i1534.m_FaceInfo)
  request.r(i1535[39], i1535[40], 0, i1534, 'm_Material')
  return i1534
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1557 = data
  i1556.sourceFontFileName = i1557[0]
  i1556.sourceFontFileGUID = i1557[1]
  i1556.faceIndex = i1557[2]
  i1556.pointSizeSamplingMode = i1557[3]
  i1556.pointSize = i1557[4]
  i1556.padding = i1557[5]
  i1556.paddingMode = i1557[6]
  i1556.packingMode = i1557[7]
  i1556.atlasWidth = i1557[8]
  i1556.atlasHeight = i1557[9]
  i1556.characterSetSelectionMode = i1557[10]
  i1556.characterSequence = i1557[11]
  i1556.referencedFontAssetGUID = i1557[12]
  i1556.referencedTextAssetGUID = i1557[13]
  i1556.fontStyle = i1557[14]
  i1556.fontStyleModifier = i1557[15]
  i1556.renderMode = i1557[16]
  i1556.includeFontFeatures = !!i1557[17]
  return i1556
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1561 = data
  i1560.m_Index = i1561[0]
  i1560.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1561[1], i1560.m_Metrics)
  i1560.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1561[2], i1560.m_GlyphRect)
  i1560.m_Scale = i1561[3]
  i1560.m_AtlasIndex = i1561[4]
  i1560.m_ClassDefinitionType = i1561[5]
  return i1560
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1563 = data
  i1562.m_Width = i1563[0]
  i1562.m_Height = i1563[1]
  i1562.m_HorizontalBearingX = i1563[2]
  i1562.m_HorizontalBearingY = i1563[3]
  i1562.m_HorizontalAdvance = i1563[4]
  return i1562
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1565 = data
  i1564.m_X = i1565[0]
  i1564.m_Y = i1565[1]
  i1564.m_Width = i1565[2]
  i1564.m_Height = i1565[3]
  return i1564
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1568 = root || request.c( 'TMPro.TMP_Character' )
  var i1569 = data
  i1568.m_ElementType = i1569[0]
  i1568.m_Unicode = i1569[1]
  i1568.m_GlyphIndex = i1569[2]
  i1568.m_Scale = i1569[3]
  return i1568
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1575 = data
  var i1577 = i1575[0]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('TMPro.MultipleSubstitutionRecord', i1577[i + 0]));
  }
  i1574.m_MultipleSubstitutionRecords = i1576
  var i1579 = i1575[1]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('TMPro.LigatureSubstitutionRecord', i1579[i + 0]));
  }
  i1574.m_LigatureSubstitutionRecords = i1578
  var i1581 = i1575[2]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1581[i + 0]));
  }
  i1574.m_GlyphPairAdjustmentRecords = i1580
  var i1583 = i1575[3]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1583[i + 0]));
  }
  i1574.m_MarkToBaseAdjustmentRecords = i1582
  var i1585 = i1575[4]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1585[i + 0]));
  }
  i1574.m_MarkToMarkAdjustmentRecords = i1584
  return i1574
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1588 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1589 = data
  i1588.m_TargetGlyphID = i1589[0]
  i1588.m_SubstituteGlyphIDs = i1589[1]
  return i1588
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1592 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1593 = data
  i1592.m_ComponentGlyphIDs = i1593[0]
  i1592.m_LigatureGlyphID = i1593[1]
  return i1592
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1597 = data
  i1596.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1597[0], i1596.m_FirstAdjustmentRecord)
  i1596.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1597[1], i1596.m_SecondAdjustmentRecord)
  i1596.m_FeatureLookupFlags = i1597[2]
  return i1596
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1601 = data
  i1600.m_BaseGlyphID = i1601[0]
  i1600.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1601[1], i1600.m_BaseGlyphAnchorPoint)
  i1600.m_MarkGlyphID = i1601[2]
  i1600.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1601[3], i1600.m_MarkPositionAdjustment)
  return i1600
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1605 = data
  i1604.m_BaseMarkGlyphID = i1605[0]
  i1604.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1605[1], i1604.m_BaseMarkGlyphAnchorPoint)
  i1604.m_CombiningMarkGlyphID = i1605[2]
  i1604.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1605[3], i1604.m_CombiningMarkPositionAdjustment)
  return i1604
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1610 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'regularTypeface')
  request.r(i1611[2], i1611[3], 0, i1610, 'italicTypeface')
  return i1610
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1613 = data
  i1612.Name = i1613[0]
  i1612.PointSize = i1613[1]
  i1612.Scale = i1613[2]
  i1612.CharacterCount = i1613[3]
  i1612.LineHeight = i1613[4]
  i1612.Baseline = i1613[5]
  i1612.Ascender = i1613[6]
  i1612.CapHeight = i1613[7]
  i1612.Descender = i1613[8]
  i1612.CenterLine = i1613[9]
  i1612.SuperscriptOffset = i1613[10]
  i1612.SubscriptOffset = i1613[11]
  i1612.SubSize = i1613[12]
  i1612.Underline = i1613[13]
  i1612.UnderlineThickness = i1613[14]
  i1612.strikethrough = i1613[15]
  i1612.strikethroughThickness = i1613[16]
  i1612.TabWidth = i1613[17]
  i1612.Padding = i1613[18]
  i1612.AtlasWidth = i1613[19]
  i1612.AtlasHeight = i1613[20]
  return i1612
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1616 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1617 = data
  i1616.id = i1617[0]
  i1616.x = i1617[1]
  i1616.y = i1617[2]
  i1616.width = i1617[3]
  i1616.height = i1617[4]
  i1616.xOffset = i1617[5]
  i1616.yOffset = i1617[6]
  i1616.xAdvance = i1617[7]
  i1616.scale = i1617[8]
  return i1616
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1618 = root || request.c( 'TMPro.KerningTable' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.add(request.d('TMPro.KerningPair', i1621[i + 0]));
  }
  i1618.kerningPairs = i1620
  return i1618
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.KerningPair' )
  var i1625 = data
  i1624.xOffset = i1625[0]
  i1624.m_FirstGlyph = i1625[1]
  i1624.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1625[2], i1624.m_FirstGlyphAdjustments)
  i1624.m_SecondGlyph = i1625[3]
  i1624.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1625[4], i1624.m_SecondGlyphAdjustments)
  i1624.m_IgnoreSpacingAdjustments = !!i1625[5]
  return i1624
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1627 = data
  i1626.m_FaceIndex = i1627[0]
  i1626.m_FamilyName = i1627[1]
  i1626.m_StyleName = i1627[2]
  i1626.m_PointSize = i1627[3]
  i1626.m_Scale = i1627[4]
  i1626.m_UnitsPerEM = i1627[5]
  i1626.m_LineHeight = i1627[6]
  i1626.m_AscentLine = i1627[7]
  i1626.m_CapLine = i1627[8]
  i1626.m_MeanLine = i1627[9]
  i1626.m_Baseline = i1627[10]
  i1626.m_DescentLine = i1627[11]
  i1626.m_SuperscriptOffset = i1627[12]
  i1626.m_SuperscriptSize = i1627[13]
  i1626.m_SubscriptOffset = i1627[14]
  i1626.m_SubscriptSize = i1627[15]
  i1626.m_UnderlineOffset = i1627[16]
  i1626.m_UnderlineThickness = i1627[17]
  i1626.m_StrikethroughOffset = i1627[18]
  i1626.m_StrikethroughThickness = i1627[19]
  i1626.m_TabWidth = i1627[20]
  return i1626
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1628 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1629 = data
  i1628.useSafeMode = !!i1629[0]
  i1628.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1629[1], i1628.safeModeOptions)
  i1628.timeScale = i1629[2]
  i1628.unscaledTimeScale = i1629[3]
  i1628.useSmoothDeltaTime = !!i1629[4]
  i1628.maxSmoothUnscaledTime = i1629[5]
  i1628.rewindCallbackMode = i1629[6]
  i1628.showUnityEditorReport = !!i1629[7]
  i1628.logBehaviour = i1629[8]
  i1628.drawGizmos = !!i1629[9]
  i1628.defaultRecyclable = !!i1629[10]
  i1628.defaultAutoPlay = i1629[11]
  i1628.defaultUpdateType = i1629[12]
  i1628.defaultTimeScaleIndependent = !!i1629[13]
  i1628.defaultEaseType = i1629[14]
  i1628.defaultEaseOvershootOrAmplitude = i1629[15]
  i1628.defaultEasePeriod = i1629[16]
  i1628.defaultAutoKill = !!i1629[17]
  i1628.defaultLoopType = i1629[18]
  i1628.debugMode = !!i1629[19]
  i1628.debugStoreTargetId = !!i1629[20]
  i1628.showPreviewPanel = !!i1629[21]
  i1628.storeSettingsLocation = i1629[22]
  i1628.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1629[23], i1628.modules)
  i1628.createASMDEF = !!i1629[24]
  i1628.showPlayingTweens = !!i1629[25]
  i1628.showPausedTweens = !!i1629[26]
  return i1628
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1630 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1631 = data
  i1630.logBehaviour = i1631[0]
  i1630.nestedTweenFailureBehaviour = i1631[1]
  return i1630
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1632 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1633 = data
  i1632.showPanel = !!i1633[0]
  i1632.audioEnabled = !!i1633[1]
  i1632.physicsEnabled = !!i1633[2]
  i1632.physics2DEnabled = !!i1633[3]
  i1632.spriteEnabled = !!i1633[4]
  i1632.uiEnabled = !!i1633[5]
  i1632.textMeshProEnabled = !!i1633[6]
  i1632.tk2DEnabled = !!i1633[7]
  i1632.deAudioEnabled = !!i1633[8]
  i1632.deUnityExtendedEnabled = !!i1633[9]
  i1632.epoOutlineEnabled = !!i1633[10]
  return i1632
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_Settings' )
  var i1635 = data
  i1634.assetVersion = i1635[0]
  i1634.m_TextWrappingMode = i1635[1]
  i1634.m_enableKerning = !!i1635[2]
  var i1637 = i1635[3]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(i1637[i + 0]);
  }
  i1634.m_ActiveFontFeatures = i1636
  i1634.m_enableExtraPadding = !!i1635[4]
  i1634.m_enableTintAllSprites = !!i1635[5]
  i1634.m_enableParseEscapeCharacters = !!i1635[6]
  i1634.m_EnableRaycastTarget = !!i1635[7]
  i1634.m_GetFontFeaturesAtRuntime = !!i1635[8]
  i1634.m_missingGlyphCharacter = i1635[9]
  i1634.m_ClearDynamicDataOnBuild = !!i1635[10]
  i1634.m_warningsDisabled = !!i1635[11]
  request.r(i1635[12], i1635[13], 0, i1634, 'm_defaultFontAsset')
  i1634.m_defaultFontAssetPath = i1635[14]
  i1634.m_defaultFontSize = i1635[15]
  i1634.m_defaultAutoSizeMinRatio = i1635[16]
  i1634.m_defaultAutoSizeMaxRatio = i1635[17]
  i1634.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1635[18], i1635[19] )
  i1634.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1635[20], i1635[21] )
  i1634.m_autoSizeTextContainer = !!i1635[22]
  i1634.m_IsTextObjectScaleStatic = !!i1635[23]
  var i1639 = i1635[24]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 1, i1638, '')
  }
  i1634.m_fallbackFontAssets = i1638
  i1634.m_matchMaterialPreset = !!i1635[25]
  i1634.m_HideSubTextObjects = !!i1635[26]
  request.r(i1635[27], i1635[28], 0, i1634, 'm_defaultSpriteAsset')
  i1634.m_defaultSpriteAssetPath = i1635[29]
  i1634.m_enableEmojiSupport = !!i1635[30]
  i1634.m_MissingCharacterSpriteUnicode = i1635[31]
  var i1641 = i1635[32]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 1, i1640, '')
  }
  i1634.m_EmojiFallbackTextAssets = i1640
  i1634.m_defaultColorGradientPresetsPath = i1635[33]
  request.r(i1635[34], i1635[35], 0, i1634, 'm_defaultStyleSheet')
  i1634.m_StyleSheetsResourcePath = i1635[36]
  request.r(i1635[37], i1635[38], 0, i1634, 'm_leadingCharacters')
  request.r(i1635[39], i1635[40], 0, i1634, 'm_followingCharacters')
  i1634.m_UseModernHangulLineBreakingRules = !!i1635[41]
  return i1634
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1645 = data
  i1644.m_GlyphIndex = i1645[0]
  i1644.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1645[1], i1644.m_GlyphValueRecord)
  return i1644
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1647 = data
  i1646.m_XPlacement = i1647[0]
  i1646.m_YPlacement = i1647[1]
  i1646.m_XAdvance = i1647[2]
  i1646.m_YAdvance = i1647[3]
  return i1646
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'spriteSheet')
  var i1651 = i1649[2]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('TMPro.TMP_Sprite', i1651[i + 0]));
  }
  i1648.spriteInfoList = i1650
  var i1653 = i1649[3]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 1, i1652, '')
  }
  i1648.fallbackSpriteAssets = i1652
  var i1655 = i1649[4]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('TMPro.TMP_SpriteCharacter', i1655[i + 0]));
  }
  i1648.m_SpriteCharacterTable = i1654
  var i1657 = i1649[5]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.add(request.d('TMPro.TMP_SpriteGlyph', i1657[i + 0]));
  }
  i1648.m_GlyphTable = i1656
  i1648.m_Version = i1649[6]
  i1648.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1649[7], i1648.m_FaceInfo)
  request.r(i1649[8], i1649[9], 0, i1648, 'm_Material')
  return i1648
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1660 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.hashCode = i1661[1]
  i1660.unicode = i1661[2]
  i1660.pivot = new pc.Vec2( i1661[3], i1661[4] )
  request.r(i1661[5], i1661[6], 0, i1660, 'sprite')
  i1660.id = i1661[7]
  i1660.x = i1661[8]
  i1660.y = i1661[9]
  i1660.width = i1661[10]
  i1660.height = i1661[11]
  i1660.xOffset = i1661[12]
  i1660.yOffset = i1661[13]
  i1660.xAdvance = i1661[14]
  i1660.scale = i1661[15]
  return i1660
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1667 = data
  i1666.m_Name = i1667[0]
  i1666.m_ElementType = i1667[1]
  i1666.m_Unicode = i1667[2]
  i1666.m_GlyphIndex = i1667[3]
  i1666.m_Scale = i1667[4]
  return i1666
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1670 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'sprite')
  i1670.m_Index = i1671[2]
  i1670.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1671[3], i1670.m_Metrics)
  i1670.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1671[4], i1670.m_GlyphRect)
  i1670.m_Scale = i1671[5]
  i1670.m_AtlasIndex = i1671[6]
  i1670.m_ClassDefinitionType = i1671[7]
  return i1670
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1673 = data
  var i1675 = i1673[0]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('TMPro.TMP_Style', i1675[i + 0]));
  }
  i1672.m_StyleList = i1674
  return i1672
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1678 = root || request.c( 'TMPro.TMP_Style' )
  var i1679 = data
  i1678.m_Name = i1679[0]
  i1678.m_HashCode = i1679[1]
  i1678.m_OpeningDefinition = i1679[2]
  i1678.m_ClosingDefinition = i1679[3]
  i1678.m_OpeningTagArray = i1679[4]
  i1678.m_ClosingTagArray = i1679[5]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1681 = data
  var i1683 = i1681[0]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1683[i + 0]) );
  }
  i1680.files = i1682
  i1680.componentToPrefabIds = i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1687 = data
  i1686.path = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'unityObject')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1689 = data
  var i1691 = i1689[0]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1691[i + 0]) );
  }
  i1688.scriptsExecutionOrder = i1690
  var i1693 = i1689[1]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1693[i + 0]) );
  }
  i1688.sortingLayers = i1692
  var i1695 = i1689[2]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1695[i + 0]) );
  }
  i1688.cullingLayers = i1694
  i1688.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1689[3], i1688.timeSettings)
  i1688.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1689[4], i1688.physicsSettings)
  i1688.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1689[5], i1688.physics2DSettings)
  i1688.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1689[6], i1688.qualitySettings)
  i1688.enableRealtimeShadows = !!i1689[7]
  i1688.enableAutoInstancing = !!i1689[8]
  i1688.enableStaticBatching = !!i1689[9]
  i1688.enableDynamicBatching = !!i1689[10]
  i1688.usePreservativeDynamicBatching = !!i1689[11]
  i1688.lightmapEncodingQuality = i1689[12]
  i1688.desiredColorSpace = i1689[13]
  var i1697 = i1689[14]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( i1697[i + 0] );
  }
  i1688.allTags = i1696
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.value = i1701[1]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1705 = data
  i1704.id = i1705[0]
  i1704.name = i1705[1]
  i1704.value = i1705[2]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1709 = data
  i1708.id = i1709[0]
  i1708.name = i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1711 = data
  i1710.fixedDeltaTime = i1711[0]
  i1710.maximumDeltaTime = i1711[1]
  i1710.timeScale = i1711[2]
  i1710.maximumParticleTimestep = i1711[3]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1713 = data
  i1712.gravity = new pc.Vec3( i1713[0], i1713[1], i1713[2] )
  i1712.defaultSolverIterations = i1713[3]
  i1712.bounceThreshold = i1713[4]
  i1712.autoSyncTransforms = !!i1713[5]
  i1712.autoSimulation = !!i1713[6]
  var i1715 = i1713[7]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1715[i + 0]) );
  }
  i1712.collisionMatrix = i1714
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1719 = data
  i1718.enabled = !!i1719[0]
  i1718.layerId = i1719[1]
  i1718.otherLayerId = i1719[2]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'material')
  i1720.gravity = new pc.Vec2( i1721[2], i1721[3] )
  i1720.positionIterations = i1721[4]
  i1720.velocityIterations = i1721[5]
  i1720.velocityThreshold = i1721[6]
  i1720.maxLinearCorrection = i1721[7]
  i1720.maxAngularCorrection = i1721[8]
  i1720.maxTranslationSpeed = i1721[9]
  i1720.maxRotationSpeed = i1721[10]
  i1720.baumgarteScale = i1721[11]
  i1720.baumgarteTOIScale = i1721[12]
  i1720.timeToSleep = i1721[13]
  i1720.linearSleepTolerance = i1721[14]
  i1720.angularSleepTolerance = i1721[15]
  i1720.defaultContactOffset = i1721[16]
  i1720.autoSimulation = !!i1721[17]
  i1720.queriesHitTriggers = !!i1721[18]
  i1720.queriesStartInColliders = !!i1721[19]
  i1720.callbacksOnDisable = !!i1721[20]
  i1720.reuseCollisionCallbacks = !!i1721[21]
  i1720.autoSyncTransforms = !!i1721[22]
  var i1723 = i1721[23]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1723[i + 0]) );
  }
  i1720.collisionMatrix = i1722
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.layerId = i1727[1]
  i1726.otherLayerId = i1727[2]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1729 = data
  var i1731 = i1729[0]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1731[i + 0]) );
  }
  i1728.qualityLevels = i1730
  var i1733 = i1729[1]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( i1733[i + 0] );
  }
  i1728.names = i1732
  i1728.shadows = i1729[2]
  i1728.anisotropicFiltering = i1729[3]
  i1728.antiAliasing = i1729[4]
  i1728.lodBias = i1729[5]
  i1728.shadowCascades = i1729[6]
  i1728.shadowDistance = i1729[7]
  i1728.shadowmaskMode = i1729[8]
  i1728.shadowProjection = i1729[9]
  i1728.shadowResolution = i1729[10]
  i1728.softParticles = !!i1729[11]
  i1728.softVegetation = !!i1729[12]
  i1728.activeColorSpace = i1729[13]
  i1728.desiredColorSpace = i1729[14]
  i1728.masterTextureLimit = i1729[15]
  i1728.maxQueuedFrames = i1729[16]
  i1728.particleRaycastBudget = i1729[17]
  i1728.pixelLightCount = i1729[18]
  i1728.realtimeReflectionProbes = !!i1729[19]
  i1728.shadowCascade2Split = i1729[20]
  i1728.shadowCascade4Split = new pc.Vec3( i1729[21], i1729[22], i1729[23] )
  i1728.streamingMipmapsActive = !!i1729[24]
  i1728.vSyncCount = i1729[25]
  i1728.asyncUploadBufferSize = i1729[26]
  i1728.asyncUploadTimeSlice = i1729[27]
  i1728.billboardsFaceCameraPosition = !!i1729[28]
  i1728.shadowNearPlaneOffset = i1729[29]
  i1728.streamingMipmapsMemoryBudget = i1729[30]
  i1728.maximumLODLevel = i1729[31]
  i1728.streamingMipmapsAddAllCameras = !!i1729[32]
  i1728.streamingMipmapsMaxLevelReduction = i1729[33]
  i1728.streamingMipmapsRenderersPerFrame = i1729[34]
  i1728.resolutionScalingFixedDPIFactor = i1729[35]
  i1728.streamingMipmapsMaxFileIORequests = i1729[36]
  i1728.currentQualityLevel = i1729[37]
  return i1728
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'm_ObjectArgument')
  i1736.m_ObjectArgumentAssemblyTypeName = i1737[2]
  i1736.m_IntArgument = i1737[3]
  i1736.m_FloatArgument = i1737[4]
  i1736.m_StringArgument = i1737[5]
  i1736.m_BoolArgument = !!i1737[6]
  return i1736
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1739 = data
  i1738.m_XCoordinate = i1739[0]
  i1738.m_YCoordinate = i1739[1]
  return i1738
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1740 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1741 = data
  i1740.m_XPositionAdjustment = i1741[0]
  i1740.m_YPositionAdjustment = i1741[1]
  return i1740
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1743 = data
  i1742.xPlacement = i1743[0]
  i1742.yPlacement = i1743[1]
  i1742.xAdvance = i1743[2]
  i1742.yAdvance = i1743[3]
  return i1742
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

Deserializers.buildID = "80a8a3ad-8bfa-4350-9cc7-c17acf52fd25";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

