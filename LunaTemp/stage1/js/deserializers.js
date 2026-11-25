var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointSpring' )
  var i1291 = data
  i1290.spring = i1291[0]
  i1290.damper = i1291[1]
  i1290.targetPosition = i1291[2]
  return i1290
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointMotor' )
  var i1293 = data
  i1292.m_TargetVelocity = i1293[0]
  i1292.m_Force = i1293[1]
  i1292.m_FreeSpin = i1293[2]
  return i1292
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.JointLimits' )
  var i1295 = data
  i1294.m_Min = i1295[0]
  i1294.m_Max = i1295[1]
  i1294.m_Bounciness = i1295[2]
  i1294.m_BounceMinVelocity = i1295[3]
  i1294.m_ContactDistance = i1295[4]
  i1294.minBounce = i1295[5]
  i1294.maxBounce = i1295[6]
  return i1294
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointDrive' )
  var i1297 = data
  i1296.m_PositionSpring = i1297[0]
  i1296.m_PositionDamper = i1297[1]
  i1296.m_MaximumForce = i1297[2]
  i1296.m_UseAcceleration = i1297[3]
  return i1296
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1299 = data
  i1298.m_Spring = i1299[0]
  i1298.m_Damper = i1299[1]
  return i1298
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1301 = data
  i1300.m_Limit = i1301[0]
  i1300.m_Bounciness = i1301[1]
  i1300.m_ContactDistance = i1301[2]
  return i1300
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1303 = data
  i1302.m_ExtremumSlip = i1303[0]
  i1302.m_ExtremumValue = i1303[1]
  i1302.m_AsymptoteSlip = i1303[2]
  i1302.m_AsymptoteValue = i1303[3]
  i1302.m_Stiffness = i1303[4]
  return i1302
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1305 = data
  i1304.m_LowerAngle = i1305[0]
  i1304.m_UpperAngle = i1305[1]
  return i1304
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1307 = data
  i1306.m_MotorSpeed = i1307[0]
  i1306.m_MaximumMotorTorque = i1307[1]
  return i1306
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1309 = data
  i1308.m_DampingRatio = i1309[0]
  i1308.m_Frequency = i1309[1]
  i1308.m_Angle = i1309[2]
  return i1308
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1311 = data
  i1310.m_LowerTranslation = i1311[0]
  i1310.m_UpperTranslation = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.width = i1313[1]
  i1312.height = i1313[2]
  i1312.mipmapCount = i1313[3]
  i1312.anisoLevel = i1313[4]
  i1312.filterMode = i1313[5]
  i1312.hdr = !!i1313[6]
  i1312.format = i1313[7]
  i1312.wrapMode = i1313[8]
  i1312.alphaIsTransparency = !!i1313[9]
  i1312.alphaSource = i1313[10]
  i1312.graphicsFormat = i1313[11]
  i1312.sRGBTexture = !!i1313[12]
  i1312.desiredColorSpace = i1313[13]
  i1312.wrapU = i1313[14]
  i1312.wrapV = i1313[15]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1314 = root || new pc.UnityMaterial()
  var i1315 = data
  i1314.name = i1315[0]
  request.r(i1315[1], i1315[2], 0, i1314, 'shader')
  i1314.renderQueue = i1315[3]
  i1314.enableInstancing = !!i1315[4]
  var i1317 = i1315[5]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1317[i + 0]) );
  }
  i1314.floatParameters = i1316
  var i1319 = i1315[6]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1319[i + 0]) );
  }
  i1314.colorParameters = i1318
  var i1321 = i1315[7]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1321[i + 0]) );
  }
  i1314.vectorParameters = i1320
  var i1323 = i1315[8]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1323[i + 0]) );
  }
  i1314.textureParameters = i1322
  var i1325 = i1315[9]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1325[i + 0]) );
  }
  i1314.materialFlags = i1324
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1329 = data
  i1328.name = i1329[0]
  i1328.value = i1329[1]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.value = new pc.Color(i1333[1], i1333[2], i1333[3], i1333[4])
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.value = new pc.Vec4( i1337[1], i1337[2], i1337[3], i1337[4] )
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1341 = data
  i1340.name = i1341[0]
  request.r(i1341[1], i1341[2], 0, i1340, 'value')
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.enabled = !!i1345[1]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1347 = data
  i1346.name = i1347[0]
  i1346.index = i1347[1]
  i1346.startup = !!i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1349 = data
  i1348.aspect = i1349[0]
  i1348.orthographic = !!i1349[1]
  i1348.orthographicSize = i1349[2]
  i1348.backgroundColor = new pc.Color(i1349[3], i1349[4], i1349[5], i1349[6])
  i1348.nearClipPlane = i1349[7]
  i1348.farClipPlane = i1349[8]
  i1348.fieldOfView = i1349[9]
  i1348.depth = i1349[10]
  i1348.clearFlags = i1349[11]
  i1348.cullingMask = i1349[12]
  i1348.rect = i1349[13]
  request.r(i1349[14], i1349[15], 0, i1348, 'targetTexture')
  i1348.usePhysicalProperties = !!i1349[16]
  i1348.focalLength = i1349[17]
  i1348.sensorSize = new pc.Vec2( i1349[18], i1349[19] )
  i1348.lensShift = new pc.Vec2( i1349[20], i1349[21] )
  i1348.gateFit = i1349[22]
  i1348.commandBufferCount = i1349[23]
  i1348.cameraType = i1349[24]
  i1348.enabled = !!i1349[25]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.tagId = i1351[1]
  i1350.enabled = !!i1351[2]
  i1350.isStatic = !!i1351[3]
  i1350.layer = i1351[4]
  return i1350
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'm_FirstSelected')
  i1352.m_sendNavigationEvents = !!i1353[2]
  i1352.m_DragThreshold = i1353[3]
  return i1352
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1355 = data
  i1354.m_HorizontalAxis = i1355[0]
  i1354.m_VerticalAxis = i1355[1]
  i1354.m_SubmitButton = i1355[2]
  i1354.m_CancelButton = i1355[3]
  i1354.m_InputActionsPerSecond = i1355[4]
  i1354.m_RepeatDelay = i1355[5]
  i1354.m_ForceModuleActive = !!i1355[6]
  i1354.m_SendPointerHoverToParent = !!i1355[7]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1357 = data
  i1356.pivot = new pc.Vec2( i1357[0], i1357[1] )
  i1356.anchorMin = new pc.Vec2( i1357[2], i1357[3] )
  i1356.anchorMax = new pc.Vec2( i1357[4], i1357[5] )
  i1356.sizeDelta = new pc.Vec2( i1357[6], i1357[7] )
  i1356.anchoredPosition3D = new pc.Vec3( i1357[8], i1357[9], i1357[10] )
  i1356.rotation = new pc.Quat(i1357[11], i1357[12], i1357[13], i1357[14])
  i1356.scale = new pc.Vec3( i1357[15], i1357[16], i1357[17] )
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1359 = data
  i1358.planeDistance = i1359[0]
  i1358.referencePixelsPerUnit = i1359[1]
  i1358.isFallbackOverlay = !!i1359[2]
  i1358.renderMode = i1359[3]
  i1358.renderOrder = i1359[4]
  i1358.sortingLayerName = i1359[5]
  i1358.sortingOrder = i1359[6]
  i1358.scaleFactor = i1359[7]
  request.r(i1359[8], i1359[9], 0, i1358, 'worldCamera')
  i1358.overrideSorting = !!i1359[10]
  i1358.pixelPerfect = !!i1359[11]
  i1358.targetDisplay = i1359[12]
  i1358.overridePixelPerfect = !!i1359[13]
  i1358.enabled = !!i1359[14]
  return i1358
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1361 = data
  i1360.m_UiScaleMode = i1361[0]
  i1360.m_ReferencePixelsPerUnit = i1361[1]
  i1360.m_ScaleFactor = i1361[2]
  i1360.m_ReferenceResolution = new pc.Vec2( i1361[3], i1361[4] )
  i1360.m_ScreenMatchMode = i1361[5]
  i1360.m_MatchWidthOrHeight = i1361[6]
  i1360.m_PhysicalUnit = i1361[7]
  i1360.m_FallbackScreenDPI = i1361[8]
  i1360.m_DefaultSpriteDPI = i1361[9]
  i1360.m_DynamicPixelsPerUnit = i1361[10]
  i1360.m_PresetInfoIsWorld = !!i1361[11]
  return i1360
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1363 = data
  i1362.m_IgnoreReversedGraphics = !!i1363[0]
  i1362.m_BlockingObjects = i1363[1]
  i1362.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1363[2] )
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1365 = data
  i1364.cullTransparentMesh = !!i1365[0]
  return i1364
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1367 = data
  request.r(i1367[0], i1367[1], 0, i1366, 'm_Texture')
  i1366.m_UVRect = UnityEngine.Rect.MinMaxRect(i1367[2], i1367[3], i1367[4], i1367[5])
  request.r(i1367[6], i1367[7], 0, i1366, 'm_Material')
  i1366.m_Maskable = !!i1367[8]
  i1366.m_Color = new pc.Color(i1367[9], i1367[10], i1367[11], i1367[12])
  i1366.m_RaycastTarget = !!i1367[13]
  i1366.m_RaycastPadding = new pc.Vec4( i1367[14], i1367[15], i1367[16], i1367[17] )
  return i1366
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.UI.Image' )
  var i1369 = data
  request.r(i1369[0], i1369[1], 0, i1368, 'm_Sprite')
  i1368.m_Type = i1369[2]
  i1368.m_PreserveAspect = !!i1369[3]
  i1368.m_FillCenter = !!i1369[4]
  i1368.m_FillMethod = i1369[5]
  i1368.m_FillAmount = i1369[6]
  i1368.m_FillClockwise = !!i1369[7]
  i1368.m_FillOrigin = i1369[8]
  i1368.m_UseSpriteMesh = !!i1369[9]
  i1368.m_PixelsPerUnitMultiplier = i1369[10]
  request.r(i1369[11], i1369[12], 0, i1368, 'm_Material')
  i1368.m_Maskable = !!i1369[13]
  i1368.m_Color = new pc.Color(i1369[14], i1369[15], i1369[16], i1369[17])
  i1368.m_RaycastTarget = !!i1369[18]
  i1368.m_RaycastPadding = new pc.Vec4( i1369[19], i1369[20], i1369[21], i1369[22] )
  return i1368
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'm_Content')
  i1370.m_Horizontal = !!i1371[2]
  i1370.m_Vertical = !!i1371[3]
  i1370.m_MovementType = i1371[4]
  i1370.m_Elasticity = i1371[5]
  i1370.m_Inertia = !!i1371[6]
  i1370.m_DecelerationRate = i1371[7]
  i1370.m_ScrollSensitivity = i1371[8]
  request.r(i1371[9], i1371[10], 0, i1370, 'm_Viewport')
  request.r(i1371[11], i1371[12], 0, i1370, 'm_HorizontalScrollbar')
  request.r(i1371[13], i1371[14], 0, i1370, 'm_VerticalScrollbar')
  i1370.m_HorizontalScrollbarVisibility = i1371[15]
  i1370.m_VerticalScrollbarVisibility = i1371[16]
  i1370.m_HorizontalScrollbarSpacing = i1371[17]
  i1370.m_VerticalScrollbarSpacing = i1371[18]
  i1370.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1371[19], i1370.m_OnValueChanged)
  return i1370
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1373 = data
  i1372.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1373[0], i1372.m_PersistentCalls)
  return i1372
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('UnityEngine.Events.PersistentCall', i1377[i + 0]));
  }
  i1374.m_Calls = i1376
  return i1374
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'm_Target')
  i1380.m_TargetAssemblyTypeName = i1381[2]
  i1380.m_MethodName = i1381[3]
  i1380.m_Mode = i1381[4]
  i1380.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1381[5], i1380.m_Arguments)
  i1380.m_CallState = i1381[6]
  return i1380
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1382 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1383 = data
  i1382.m_hasFontAssetChanged = !!i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'm_baseMaterial')
  i1382.m_maskOffset = new pc.Vec4( i1383[3], i1383[4], i1383[5], i1383[6] )
  i1382.m_text = i1383[7]
  i1382.m_isRightToLeft = !!i1383[8]
  request.r(i1383[9], i1383[10], 0, i1382, 'm_fontAsset')
  request.r(i1383[11], i1383[12], 0, i1382, 'm_sharedMaterial')
  var i1385 = i1383[13]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 2, i1384, '')
  }
  i1382.m_fontSharedMaterials = i1384
  request.r(i1383[14], i1383[15], 0, i1382, 'm_fontMaterial')
  var i1387 = i1383[16]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 2) {
  request.r(i1387[i + 0], i1387[i + 1], 2, i1386, '')
  }
  i1382.m_fontMaterials = i1386
  i1382.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1383[17], i1383[18], i1383[19], i1383[20])
  i1382.m_fontColor = new pc.Color(i1383[21], i1383[22], i1383[23], i1383[24])
  i1382.m_enableVertexGradient = !!i1383[25]
  i1382.m_colorMode = i1383[26]
  i1382.m_fontColorGradient = request.d('TMPro.VertexGradient', i1383[27], i1382.m_fontColorGradient)
  request.r(i1383[28], i1383[29], 0, i1382, 'm_fontColorGradientPreset')
  request.r(i1383[30], i1383[31], 0, i1382, 'm_spriteAsset')
  i1382.m_tintAllSprites = !!i1383[32]
  request.r(i1383[33], i1383[34], 0, i1382, 'm_StyleSheet')
  i1382.m_TextStyleHashCode = i1383[35]
  i1382.m_overrideHtmlColors = !!i1383[36]
  i1382.m_faceColor = UnityEngine.Color32.ConstructColor(i1383[37], i1383[38], i1383[39], i1383[40])
  i1382.m_fontSize = i1383[41]
  i1382.m_fontSizeBase = i1383[42]
  i1382.m_fontWeight = i1383[43]
  i1382.m_enableAutoSizing = !!i1383[44]
  i1382.m_fontSizeMin = i1383[45]
  i1382.m_fontSizeMax = i1383[46]
  i1382.m_fontStyle = i1383[47]
  i1382.m_HorizontalAlignment = i1383[48]
  i1382.m_VerticalAlignment = i1383[49]
  i1382.m_textAlignment = i1383[50]
  i1382.m_characterSpacing = i1383[51]
  i1382.m_wordSpacing = i1383[52]
  i1382.m_lineSpacing = i1383[53]
  i1382.m_lineSpacingMax = i1383[54]
  i1382.m_paragraphSpacing = i1383[55]
  i1382.m_charWidthMaxAdj = i1383[56]
  i1382.m_TextWrappingMode = i1383[57]
  i1382.m_wordWrappingRatios = i1383[58]
  i1382.m_overflowMode = i1383[59]
  request.r(i1383[60], i1383[61], 0, i1382, 'm_linkedTextComponent')
  request.r(i1383[62], i1383[63], 0, i1382, 'parentLinkedComponent')
  i1382.m_enableKerning = !!i1383[64]
  var i1389 = i1383[65]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(i1389[i + 0]);
  }
  i1382.m_ActiveFontFeatures = i1388
  i1382.m_enableExtraPadding = !!i1383[66]
  i1382.checkPaddingRequired = !!i1383[67]
  i1382.m_isRichText = !!i1383[68]
  i1382.m_parseCtrlCharacters = !!i1383[69]
  i1382.m_isOrthographic = !!i1383[70]
  i1382.m_isCullingEnabled = !!i1383[71]
  i1382.m_horizontalMapping = i1383[72]
  i1382.m_verticalMapping = i1383[73]
  i1382.m_uvLineOffset = i1383[74]
  i1382.m_geometrySortingOrder = i1383[75]
  i1382.m_IsTextObjectScaleStatic = !!i1383[76]
  i1382.m_VertexBufferAutoSizeReduction = !!i1383[77]
  i1382.m_useMaxVisibleDescender = !!i1383[78]
  i1382.m_pageToDisplay = i1383[79]
  i1382.m_margin = new pc.Vec4( i1383[80], i1383[81], i1383[82], i1383[83] )
  i1382.m_isUsingLegacyAnimationComponent = !!i1383[84]
  i1382.m_isVolumetricText = !!i1383[85]
  request.r(i1383[86], i1383[87], 0, i1382, 'm_Material')
  i1382.m_EmojiFallbackSupport = !!i1383[88]
  i1382.m_Maskable = !!i1383[89]
  i1382.m_Color = new pc.Color(i1383[90], i1383[91], i1383[92], i1383[93])
  i1382.m_RaycastTarget = !!i1383[94]
  i1382.m_RaycastPadding = new pc.Vec4( i1383[95], i1383[96], i1383[97], i1383[98] )
  return i1382
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.VertexGradient' )
  var i1393 = data
  i1392.topLeft = new pc.Color(i1393[0], i1393[1], i1393[2], i1393[3])
  i1392.topRight = new pc.Color(i1393[4], i1393[5], i1393[6], i1393[7])
  i1392.bottomLeft = new pc.Color(i1393[8], i1393[9], i1393[10], i1393[11])
  i1392.bottomRight = new pc.Color(i1393[12], i1393[13], i1393[14], i1393[15])
  return i1392
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1397 = data
  i1396.m_ShowMaskGraphic = !!i1397[0]
  return i1396
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.Button' )
  var i1399 = data
  i1398.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1399[0], i1398.m_OnClick)
  i1398.m_Navigation = request.d('UnityEngine.UI.Navigation', i1399[1], i1398.m_Navigation)
  i1398.m_Transition = i1399[2]
  i1398.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1399[3], i1398.m_Colors)
  i1398.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1399[4], i1398.m_SpriteState)
  i1398.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1399[5], i1398.m_AnimationTriggers)
  i1398.m_Interactable = !!i1399[6]
  request.r(i1399[7], i1399[8], 0, i1398, 'm_TargetGraphic')
  return i1398
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1401 = data
  i1400.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1401[0], i1400.m_PersistentCalls)
  return i1400
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1403 = data
  i1402.m_Mode = i1403[0]
  i1402.m_WrapAround = !!i1403[1]
  request.r(i1403[2], i1403[3], 0, i1402, 'm_SelectOnUp')
  request.r(i1403[4], i1403[5], 0, i1402, 'm_SelectOnDown')
  request.r(i1403[6], i1403[7], 0, i1402, 'm_SelectOnLeft')
  request.r(i1403[8], i1403[9], 0, i1402, 'm_SelectOnRight')
  return i1402
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1405 = data
  i1404.m_NormalColor = new pc.Color(i1405[0], i1405[1], i1405[2], i1405[3])
  i1404.m_HighlightedColor = new pc.Color(i1405[4], i1405[5], i1405[6], i1405[7])
  i1404.m_PressedColor = new pc.Color(i1405[8], i1405[9], i1405[10], i1405[11])
  i1404.m_SelectedColor = new pc.Color(i1405[12], i1405[13], i1405[14], i1405[15])
  i1404.m_DisabledColor = new pc.Color(i1405[16], i1405[17], i1405[18], i1405[19])
  i1404.m_ColorMultiplier = i1405[20]
  i1404.m_FadeDuration = i1405[21]
  return i1404
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'm_HighlightedSprite')
  request.r(i1407[2], i1407[3], 0, i1406, 'm_PressedSprite')
  request.r(i1407[4], i1407[5], 0, i1406, 'm_SelectedSprite')
  request.r(i1407[6], i1407[7], 0, i1406, 'm_DisabledSprite')
  return i1406
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1409 = data
  i1408.m_NormalTrigger = i1409[0]
  i1408.m_HighlightedTrigger = i1409[1]
  i1408.m_PressedTrigger = i1409[2]
  i1408.m_SelectedTrigger = i1409[3]
  i1408.m_DisabledTrigger = i1409[4]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1411 = data
  i1410.m_Alpha = i1411[0]
  i1410.m_Interactable = !!i1411[1]
  i1410.m_BlocksRaycasts = !!i1411[2]
  i1410.m_IgnoreParentGroups = !!i1411[3]
  i1410.enabled = !!i1411[4]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'clip')
  request.r(i1413[2], i1413[3], 0, i1412, 'outputAudioMixerGroup')
  i1412.playOnAwake = !!i1413[4]
  i1412.loop = !!i1413[5]
  i1412.time = i1413[6]
  i1412.volume = i1413[7]
  i1412.pitch = i1413[8]
  i1412.enabled = !!i1413[9]
  return i1412
}

Deserializers["MelonAd.WeaponInventoryPLA"] = function (request, data, root) {
  var i1414 = root || request.c( 'MelonAd.WeaponInventoryPLA' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'BGTexture')
  request.r(i1415[2], i1415[3], 0, i1414, 'BGM')
  i1414.EndTime = i1415[4]
  request.r(i1415[5], i1415[6], 0, i1414, 'scaler')
  request.r(i1415[7], i1415[8], 0, i1414, 'background')
  request.r(i1415[9], i1415[10], 0, i1414, 'inventoryPanel')
  request.r(i1415[11], i1415[12], 0, i1414, 'header')
  request.r(i1415[13], i1415[14], 0, i1414, 'headerTitle')
  request.r(i1415[15], i1415[16], 0, i1414, 'headerCount')
  request.r(i1415[17], i1415[18], 0, i1414, 'scroll')
  request.r(i1415[19], i1415[20], 0, i1414, 'viewport')
  request.r(i1415[21], i1415[22], 0, i1414, 'content')
  var i1417 = i1415[23]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 1, i1416, '')
  }
  i1414.slots = i1416
  request.r(i1415[24], i1415[25], 0, i1414, 'ctaArea')
  request.r(i1415[26], i1415[27], 0, i1414, 'title')
  request.r(i1415[28], i1415[29], 0, i1414, 'startButton')
  request.r(i1415[30], i1415[31], 0, i1414, 'startLabel')
  request.r(i1415[32], i1415[33], 0, i1414, 'bgmSource')
  request.r(i1415[34], i1415[35], 0, i1414, 'safeRoot')
  i1414.minTopPortrait = i1415[36]
  i1414.minBottomPortrait = i1415[37]
  i1414.minSideLandscape = i1415[38]
  i1414.minBottomLandscape = i1415[39]
  i1414.targetCell = i1415[40]
  i1414.targetCellLandscape = i1415[41]
  i1414.gap = i1415[42]
  i1414.pad = i1415[43]
  i1414.nameHeight = i1415[44]
  i1414.minColumns = i1415[45]
  i1414.maxColumns = i1415[46]
  request.r(i1415[47], i1415[48], 0, i1414, 'hand')
  request.r(i1415[49], i1415[50], 0, i1414, 'handImage')
  i1414.handSwipeUp = !!i1415[51]
  i1414.hintDelay = i1415[52]
  i1414.idleRepeat = i1415[53]
  i1414.loopPause = i1415[54]
  i1414.hintDistance = i1415[55]
  request.r(i1415[56], i1415[57], 0, i1414, 'endcard')
  request.r(i1415[58], i1415[59], 0, i1414, 'endcardGroup')
  request.r(i1415[60], i1415[61], 0, i1414, 'endcardContent')
  request.r(i1415[62], i1415[63], 0, i1414, 'endcardIcon')
  request.r(i1415[64], i1415[65], 0, i1414, 'endcardPlay')
  var i1419 = i1415[66]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1419.length; i += 2) {
  request.r(i1419[i + 0], i1419[i + 1], 1, i1418, '')
  }
  i1414.sfxSources = i1418
  request.r(i1415[67], i1415[68], 0, i1414, 'clickSfx')
  request.r(i1415[69], i1415[70], 0, i1414, 'selectSfx')
  i1414.bgmVolume = i1415[71]
  i1414.sfxVolume = i1415[72]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1425 = data
  i1424.ambientIntensity = i1425[0]
  i1424.reflectionIntensity = i1425[1]
  i1424.ambientMode = i1425[2]
  i1424.ambientLight = new pc.Color(i1425[3], i1425[4], i1425[5], i1425[6])
  i1424.ambientSkyColor = new pc.Color(i1425[7], i1425[8], i1425[9], i1425[10])
  i1424.ambientGroundColor = new pc.Color(i1425[11], i1425[12], i1425[13], i1425[14])
  i1424.ambientEquatorColor = new pc.Color(i1425[15], i1425[16], i1425[17], i1425[18])
  i1424.fogColor = new pc.Color(i1425[19], i1425[20], i1425[21], i1425[22])
  i1424.fogEndDistance = i1425[23]
  i1424.fogStartDistance = i1425[24]
  i1424.fogDensity = i1425[25]
  i1424.fog = !!i1425[26]
  request.r(i1425[27], i1425[28], 0, i1424, 'skybox')
  i1424.fogMode = i1425[29]
  var i1427 = i1425[30]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1427[i + 0]) );
  }
  i1424.lightmaps = i1426
  i1424.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1425[31], i1424.lightProbes)
  i1424.lightmapsMode = i1425[32]
  i1424.mixedBakeMode = i1425[33]
  i1424.environmentLightingMode = i1425[34]
  i1424.ambientProbe = new pc.SphericalHarmonicsL2(i1425[35])
  request.r(i1425[36], i1425[37], 0, i1424, 'customReflection')
  request.r(i1425[38], i1425[39], 0, i1424, 'defaultReflection')
  i1424.defaultReflectionMode = i1425[40]
  i1424.defaultReflectionResolution = i1425[41]
  i1424.sunLightObjectId = i1425[42]
  i1424.pixelLightCount = i1425[43]
  i1424.defaultReflectionHDR = !!i1425[44]
  i1424.hasLightDataAsset = !!i1425[45]
  i1424.hasManualGenerate = !!i1425[46]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'lightmapColor')
  request.r(i1431[2], i1431[3], 0, i1430, 'lightmapDirection')
  request.r(i1431[4], i1431[5], 0, i1430, 'shadowMask')
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1432 = root || new UnityEngine.LightProbes()
  var i1433 = data
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1441 = data
  var i1443 = i1441[0]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1443[i + 0]));
  }
  i1440.ShaderCompilationErrors = i1442
  i1440.name = i1441[1]
  i1440.guid = i1441[2]
  var i1445 = i1441[3]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1440.shaderDefinedKeywords = i1444
  var i1447 = i1441[4]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1447[i + 0]) );
  }
  i1440.passes = i1446
  var i1449 = i1441[5]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1449[i + 0]) );
  }
  i1440.usePasses = i1448
  var i1451 = i1441[6]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1451[i + 0]) );
  }
  i1440.defaultParameterValues = i1450
  request.r(i1441[7], i1441[8], 0, i1440, 'unityFallbackShader')
  i1440.readDepth = !!i1441[9]
  i1440.hasDepthOnlyPass = !!i1441[10]
  i1440.isCreatedByShaderGraph = !!i1441[11]
  i1440.disableBatching = !!i1441[12]
  i1440.compiled = !!i1441[13]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1455 = data
  i1454.shaderName = i1455[0]
  i1454.errorMessage = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1460 = root || new pc.UnityShaderPass()
  var i1461 = data
  i1460.id = i1461[0]
  i1460.subShaderIndex = i1461[1]
  i1460.name = i1461[2]
  i1460.passType = i1461[3]
  i1460.grabPassTextureName = i1461[4]
  i1460.usePass = !!i1461[5]
  i1460.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[6], i1460.zTest)
  i1460.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[7], i1460.zWrite)
  i1460.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[8], i1460.culling)
  i1460.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1461[9], i1460.blending)
  i1460.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1461[10], i1460.alphaBlending)
  i1460.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[11], i1460.colorWriteMask)
  i1460.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[12], i1460.offsetUnits)
  i1460.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[13], i1460.offsetFactor)
  i1460.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[14], i1460.stencilRef)
  i1460.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[15], i1460.stencilReadMask)
  i1460.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[16], i1460.stencilWriteMask)
  i1460.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[17], i1460.stencilOp)
  i1460.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[18], i1460.stencilOpFront)
  i1460.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[19], i1460.stencilOpBack)
  var i1463 = i1461[20]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1463[i + 0]) );
  }
  i1460.tags = i1462
  var i1465 = i1461[21]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( i1465[i + 0] );
  }
  i1460.passDefinedKeywords = i1464
  var i1467 = i1461[22]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1467[i + 0]) );
  }
  i1460.passDefinedKeywordGroups = i1466
  var i1469 = i1461[23]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1469[i + 0]) );
  }
  i1460.variants = i1468
  var i1471 = i1461[24]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1471[i + 0]) );
  }
  i1460.excludedVariants = i1470
  i1460.hasDepthReader = !!i1461[25]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1473 = data
  i1472.val = i1473[0]
  i1472.name = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1475 = data
  i1474.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[0], i1474.src)
  i1474.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[1], i1474.dst)
  i1474.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[2], i1474.op)
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1477 = data
  i1476.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[0], i1476.pass)
  i1476.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[1], i1476.fail)
  i1476.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[2], i1476.zFail)
  i1476.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[3], i1476.comp)
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.value = i1481[1]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1485 = data
  var i1487 = i1485[0]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( i1487[i + 0] );
  }
  i1484.keywords = i1486
  i1484.hasDiscard = !!i1485[1]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1491 = data
  i1490.passId = i1491[0]
  i1490.subShaderIndex = i1491[1]
  var i1493 = i1491[2]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1490.keywords = i1492
  i1490.vertexProgram = i1491[3]
  i1490.fragmentProgram = i1491[4]
  i1490.exportedForWebGl2 = !!i1491[5]
  i1490.readDepth = !!i1491[6]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'shader')
  i1496.pass = i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1501 = data
  i1500.name = i1501[0]
  i1500.type = i1501[1]
  i1500.value = new pc.Vec4( i1501[2], i1501[3], i1501[4], i1501[5] )
  i1500.textureValue = i1501[6]
  i1500.shaderPropertyFlag = i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1503 = data
  i1502.name = i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'texture')
  i1502.aabb = i1503[3]
  i1502.vertices = i1503[4]
  i1502.triangles = i1503[5]
  i1502.textureRect = UnityEngine.Rect.MinMaxRect(i1503[6], i1503[7], i1503[8], i1503[9])
  i1502.packedRect = UnityEngine.Rect.MinMaxRect(i1503[10], i1503[11], i1503[12], i1503[13])
  i1502.border = new pc.Vec4( i1503[14], i1503[15], i1503[16], i1503[17] )
  i1502.transparency = i1503[18]
  i1502.bounds = i1503[19]
  i1502.pixelsPerUnit = i1503[20]
  i1502.textureWidth = i1503[21]
  i1502.textureHeight = i1503[22]
  i1502.nativeSize = new pc.Vec2( i1503[23], i1503[24] )
  i1502.pivot = new pc.Vec2( i1503[25], i1503[26] )
  i1502.textureRectOffset = new pc.Vec2( i1503[27], i1503[28] )
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1505 = data
  i1504.name = i1505[0]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.ascent = i1507[1]
  i1506.originalLineHeight = i1507[2]
  i1506.fontSize = i1507[3]
  var i1509 = i1507[4]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1509[i + 0]) );
  }
  i1506.characterInfo = i1508
  request.r(i1507[5], i1507[6], 0, i1506, 'texture')
  i1506.originalFontSize = i1507[7]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1513 = data
  i1512.index = i1513[0]
  i1512.advance = i1513[1]
  i1512.bearing = i1513[2]
  i1512.glyphWidth = i1513[3]
  i1512.glyphHeight = i1513[4]
  i1512.minX = i1513[5]
  i1512.maxX = i1513[6]
  i1512.minY = i1513[7]
  i1512.maxY = i1513[8]
  i1512.uvBottomLeftX = i1513[9]
  i1512.uvBottomLeftY = i1513[10]
  i1512.uvBottomRightX = i1513[11]
  i1512.uvBottomRightY = i1513[12]
  i1512.uvTopLeftX = i1513[13]
  i1512.uvTopLeftY = i1513[14]
  i1512.uvTopRightX = i1513[15]
  i1512.uvTopRightY = i1513[16]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.bytes64 = i1515[1]
  i1514.data = i1515[2]
  return i1514
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1517 = data
  i1516.normalStyle = i1517[0]
  i1516.normalSpacingOffset = i1517[1]
  i1516.boldStyle = i1517[2]
  i1516.boldSpacing = i1517[3]
  i1516.italicStyle = i1517[4]
  i1516.tabSize = i1517[5]
  request.r(i1517[6], i1517[7], 0, i1516, 'atlas')
  i1516.m_SourceFontFileGUID = i1517[8]
  i1516.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1517[9], i1516.m_CreationSettings)
  request.r(i1517[10], i1517[11], 0, i1516, 'm_SourceFontFile')
  i1516.m_SourceFontFilePath = i1517[12]
  i1516.m_AtlasPopulationMode = i1517[13]
  i1516.InternalDynamicOS = !!i1517[14]
  var i1519 = i1517[15]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.add(request.d('UnityEngine.TextCore.Glyph', i1519[i + 0]));
  }
  i1516.m_GlyphTable = i1518
  var i1521 = i1517[16]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.add(request.d('TMPro.TMP_Character', i1521[i + 0]));
  }
  i1516.m_CharacterTable = i1520
  var i1523 = i1517[17]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 2, i1522, '')
  }
  i1516.m_AtlasTextures = i1522
  i1516.m_AtlasTextureIndex = i1517[18]
  i1516.m_IsMultiAtlasTexturesEnabled = !!i1517[19]
  i1516.m_GetFontFeatures = !!i1517[20]
  i1516.m_ClearDynamicDataOnBuild = !!i1517[21]
  i1516.m_AtlasWidth = i1517[22]
  i1516.m_AtlasHeight = i1517[23]
  i1516.m_AtlasPadding = i1517[24]
  i1516.m_AtlasRenderMode = i1517[25]
  var i1525 = i1517[26]
  var i1524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.add(request.d('UnityEngine.TextCore.GlyphRect', i1525[i + 0]));
  }
  i1516.m_UsedGlyphRects = i1524
  var i1527 = i1517[27]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('UnityEngine.TextCore.GlyphRect', i1527[i + 0]));
  }
  i1516.m_FreeGlyphRects = i1526
  i1516.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1517[28], i1516.m_FontFeatureTable)
  i1516.m_ShouldReimportFontFeatures = !!i1517[29]
  var i1529 = i1517[30]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1516.m_FallbackFontAssetTable = i1528
  var i1531 = i1517[31]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('TMPro.TMP_FontWeightPair', i1531[i + 0]) );
  }
  i1516.m_FontWeightTable = i1530
  var i1533 = i1517[32]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('TMPro.TMP_FontWeightPair', i1533[i + 0]) );
  }
  i1516.fontWeights = i1532
  i1516.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1517[33], i1516.m_fontInfo)
  var i1535 = i1517[34]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('TMPro.TMP_Glyph', i1535[i + 0]));
  }
  i1516.m_glyphInfoList = i1534
  i1516.m_KerningTable = request.d('TMPro.KerningTable', i1517[35], i1516.m_KerningTable)
  var i1537 = i1517[36]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1537.length; i += 2) {
  request.r(i1537[i + 0], i1537[i + 1], 1, i1536, '')
  }
  i1516.fallbackFontAssets = i1536
  i1516.m_Version = i1517[37]
  i1516.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1517[38], i1516.m_FaceInfo)
  request.r(i1517[39], i1517[40], 0, i1516, 'm_Material')
  return i1516
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1538 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1539 = data
  i1538.sourceFontFileName = i1539[0]
  i1538.sourceFontFileGUID = i1539[1]
  i1538.faceIndex = i1539[2]
  i1538.pointSizeSamplingMode = i1539[3]
  i1538.pointSize = i1539[4]
  i1538.padding = i1539[5]
  i1538.paddingMode = i1539[6]
  i1538.packingMode = i1539[7]
  i1538.atlasWidth = i1539[8]
  i1538.atlasHeight = i1539[9]
  i1538.characterSetSelectionMode = i1539[10]
  i1538.characterSequence = i1539[11]
  i1538.referencedFontAssetGUID = i1539[12]
  i1538.referencedTextAssetGUID = i1539[13]
  i1538.fontStyle = i1539[14]
  i1538.fontStyleModifier = i1539[15]
  i1538.renderMode = i1539[16]
  i1538.includeFontFeatures = !!i1539[17]
  return i1538
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1543 = data
  i1542.m_Index = i1543[0]
  i1542.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1543[1], i1542.m_Metrics)
  i1542.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1543[2], i1542.m_GlyphRect)
  i1542.m_Scale = i1543[3]
  i1542.m_AtlasIndex = i1543[4]
  i1542.m_ClassDefinitionType = i1543[5]
  return i1542
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1545 = data
  i1544.m_Width = i1545[0]
  i1544.m_Height = i1545[1]
  i1544.m_HorizontalBearingX = i1545[2]
  i1544.m_HorizontalBearingY = i1545[3]
  i1544.m_HorizontalAdvance = i1545[4]
  return i1544
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1547 = data
  i1546.m_X = i1547[0]
  i1546.m_Y = i1547[1]
  i1546.m_Width = i1547[2]
  i1546.m_Height = i1547[3]
  return i1546
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1550 = root || request.c( 'TMPro.TMP_Character' )
  var i1551 = data
  i1550.m_ElementType = i1551[0]
  i1550.m_Unicode = i1551[1]
  i1550.m_GlyphIndex = i1551[2]
  i1550.m_Scale = i1551[3]
  return i1550
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1557 = data
  var i1559 = i1557[0]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.add(request.d('TMPro.MultipleSubstitutionRecord', i1559[i + 0]));
  }
  i1556.m_MultipleSubstitutionRecords = i1558
  var i1561 = i1557[1]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.add(request.d('TMPro.LigatureSubstitutionRecord', i1561[i + 0]));
  }
  i1556.m_LigatureSubstitutionRecords = i1560
  var i1563 = i1557[2]
  var i1562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1563[i + 0]));
  }
  i1556.m_GlyphPairAdjustmentRecords = i1562
  var i1565 = i1557[3]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1565[i + 0]));
  }
  i1556.m_MarkToBaseAdjustmentRecords = i1564
  var i1567 = i1557[4]
  var i1566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1567[i + 0]));
  }
  i1556.m_MarkToMarkAdjustmentRecords = i1566
  return i1556
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1571 = data
  i1570.m_TargetGlyphID = i1571[0]
  i1570.m_SubstituteGlyphIDs = i1571[1]
  return i1570
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1575 = data
  i1574.m_ComponentGlyphIDs = i1575[0]
  i1574.m_LigatureGlyphID = i1575[1]
  return i1574
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1579 = data
  i1578.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1579[0], i1578.m_FirstAdjustmentRecord)
  i1578.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1579[1], i1578.m_SecondAdjustmentRecord)
  i1578.m_FeatureLookupFlags = i1579[2]
  return i1578
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1582 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1583 = data
  i1582.m_BaseGlyphID = i1583[0]
  i1582.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1583[1], i1582.m_BaseGlyphAnchorPoint)
  i1582.m_MarkGlyphID = i1583[2]
  i1582.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1583[3], i1582.m_MarkPositionAdjustment)
  return i1582
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1586 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1587 = data
  i1586.m_BaseMarkGlyphID = i1587[0]
  i1586.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1587[1], i1586.m_BaseMarkGlyphAnchorPoint)
  i1586.m_CombiningMarkGlyphID = i1587[2]
  i1586.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1587[3], i1586.m_CombiningMarkPositionAdjustment)
  return i1586
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1592 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'regularTypeface')
  request.r(i1593[2], i1593[3], 0, i1592, 'italicTypeface')
  return i1592
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1595 = data
  i1594.Name = i1595[0]
  i1594.PointSize = i1595[1]
  i1594.Scale = i1595[2]
  i1594.CharacterCount = i1595[3]
  i1594.LineHeight = i1595[4]
  i1594.Baseline = i1595[5]
  i1594.Ascender = i1595[6]
  i1594.CapHeight = i1595[7]
  i1594.Descender = i1595[8]
  i1594.CenterLine = i1595[9]
  i1594.SuperscriptOffset = i1595[10]
  i1594.SubscriptOffset = i1595[11]
  i1594.SubSize = i1595[12]
  i1594.Underline = i1595[13]
  i1594.UnderlineThickness = i1595[14]
  i1594.strikethrough = i1595[15]
  i1594.strikethroughThickness = i1595[16]
  i1594.TabWidth = i1595[17]
  i1594.Padding = i1595[18]
  i1594.AtlasWidth = i1595[19]
  i1594.AtlasHeight = i1595[20]
  return i1594
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1599 = data
  i1598.id = i1599[0]
  i1598.x = i1599[1]
  i1598.y = i1599[2]
  i1598.width = i1599[3]
  i1598.height = i1599[4]
  i1598.xOffset = i1599[5]
  i1598.yOffset = i1599[6]
  i1598.xAdvance = i1599[7]
  i1598.scale = i1599[8]
  return i1598
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.KerningTable' )
  var i1601 = data
  var i1603 = i1601[0]
  var i1602 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.add(request.d('TMPro.KerningPair', i1603[i + 0]));
  }
  i1600.kerningPairs = i1602
  return i1600
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1606 = root || request.c( 'TMPro.KerningPair' )
  var i1607 = data
  i1606.xOffset = i1607[0]
  i1606.m_FirstGlyph = i1607[1]
  i1606.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1607[2], i1606.m_FirstGlyphAdjustments)
  i1606.m_SecondGlyph = i1607[3]
  i1606.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1607[4], i1606.m_SecondGlyphAdjustments)
  i1606.m_IgnoreSpacingAdjustments = !!i1607[5]
  return i1606
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1609 = data
  i1608.m_FaceIndex = i1609[0]
  i1608.m_FamilyName = i1609[1]
  i1608.m_StyleName = i1609[2]
  i1608.m_PointSize = i1609[3]
  i1608.m_Scale = i1609[4]
  i1608.m_UnitsPerEM = i1609[5]
  i1608.m_LineHeight = i1609[6]
  i1608.m_AscentLine = i1609[7]
  i1608.m_CapLine = i1609[8]
  i1608.m_MeanLine = i1609[9]
  i1608.m_Baseline = i1609[10]
  i1608.m_DescentLine = i1609[11]
  i1608.m_SuperscriptOffset = i1609[12]
  i1608.m_SuperscriptSize = i1609[13]
  i1608.m_SubscriptOffset = i1609[14]
  i1608.m_SubscriptSize = i1609[15]
  i1608.m_UnderlineOffset = i1609[16]
  i1608.m_UnderlineThickness = i1609[17]
  i1608.m_StrikethroughOffset = i1609[18]
  i1608.m_StrikethroughThickness = i1609[19]
  i1608.m_TabWidth = i1609[20]
  return i1608
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1610 = root || request.c( 'TMPro.TMP_Settings' )
  var i1611 = data
  i1610.assetVersion = i1611[0]
  i1610.m_TextWrappingMode = i1611[1]
  i1610.m_enableKerning = !!i1611[2]
  var i1613 = i1611[3]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(i1613[i + 0]);
  }
  i1610.m_ActiveFontFeatures = i1612
  i1610.m_enableExtraPadding = !!i1611[4]
  i1610.m_enableTintAllSprites = !!i1611[5]
  i1610.m_enableParseEscapeCharacters = !!i1611[6]
  i1610.m_EnableRaycastTarget = !!i1611[7]
  i1610.m_GetFontFeaturesAtRuntime = !!i1611[8]
  i1610.m_missingGlyphCharacter = i1611[9]
  i1610.m_ClearDynamicDataOnBuild = !!i1611[10]
  i1610.m_warningsDisabled = !!i1611[11]
  request.r(i1611[12], i1611[13], 0, i1610, 'm_defaultFontAsset')
  i1610.m_defaultFontAssetPath = i1611[14]
  i1610.m_defaultFontSize = i1611[15]
  i1610.m_defaultAutoSizeMinRatio = i1611[16]
  i1610.m_defaultAutoSizeMaxRatio = i1611[17]
  i1610.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1611[18], i1611[19] )
  i1610.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1611[20], i1611[21] )
  i1610.m_autoSizeTextContainer = !!i1611[22]
  i1610.m_IsTextObjectScaleStatic = !!i1611[23]
  var i1615 = i1611[24]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 1, i1614, '')
  }
  i1610.m_fallbackFontAssets = i1614
  i1610.m_matchMaterialPreset = !!i1611[25]
  i1610.m_HideSubTextObjects = !!i1611[26]
  request.r(i1611[27], i1611[28], 0, i1610, 'm_defaultSpriteAsset')
  i1610.m_defaultSpriteAssetPath = i1611[29]
  i1610.m_enableEmojiSupport = !!i1611[30]
  i1610.m_MissingCharacterSpriteUnicode = i1611[31]
  var i1617 = i1611[32]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 1, i1616, '')
  }
  i1610.m_EmojiFallbackTextAssets = i1616
  i1610.m_defaultColorGradientPresetsPath = i1611[33]
  request.r(i1611[34], i1611[35], 0, i1610, 'm_defaultStyleSheet')
  i1610.m_StyleSheetsResourcePath = i1611[36]
  request.r(i1611[37], i1611[38], 0, i1610, 'm_leadingCharacters')
  request.r(i1611[39], i1611[40], 0, i1610, 'm_followingCharacters')
  i1610.m_UseModernHangulLineBreakingRules = !!i1611[41]
  return i1610
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1621 = data
  i1620.m_GlyphIndex = i1621[0]
  i1620.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1621[1], i1620.m_GlyphValueRecord)
  return i1620
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1623 = data
  i1622.m_XPlacement = i1623[0]
  i1622.m_YPlacement = i1623[1]
  i1622.m_XAdvance = i1623[2]
  i1622.m_YAdvance = i1623[3]
  return i1622
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'spriteSheet')
  var i1627 = i1625[2]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('TMPro.TMP_Sprite', i1627[i + 0]));
  }
  i1624.spriteInfoList = i1626
  var i1629 = i1625[3]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 1, i1628, '')
  }
  i1624.fallbackSpriteAssets = i1628
  var i1631 = i1625[4]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('TMPro.TMP_SpriteCharacter', i1631[i + 0]));
  }
  i1624.m_SpriteCharacterTable = i1630
  var i1633 = i1625[5]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.add(request.d('TMPro.TMP_SpriteGlyph', i1633[i + 0]));
  }
  i1624.m_GlyphTable = i1632
  i1624.m_Version = i1625[6]
  i1624.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1625[7], i1624.m_FaceInfo)
  request.r(i1625[8], i1625[9], 0, i1624, 'm_Material')
  return i1624
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.hashCode = i1637[1]
  i1636.unicode = i1637[2]
  i1636.pivot = new pc.Vec2( i1637[3], i1637[4] )
  request.r(i1637[5], i1637[6], 0, i1636, 'sprite')
  i1636.id = i1637[7]
  i1636.x = i1637[8]
  i1636.y = i1637[9]
  i1636.width = i1637[10]
  i1636.height = i1637[11]
  i1636.xOffset = i1637[12]
  i1636.yOffset = i1637[13]
  i1636.xAdvance = i1637[14]
  i1636.scale = i1637[15]
  return i1636
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1643 = data
  i1642.m_Name = i1643[0]
  i1642.m_ElementType = i1643[1]
  i1642.m_Unicode = i1643[2]
  i1642.m_GlyphIndex = i1643[3]
  i1642.m_Scale = i1643[4]
  return i1642
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'sprite')
  i1646.m_Index = i1647[2]
  i1646.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1647[3], i1646.m_Metrics)
  i1646.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1647[4], i1646.m_GlyphRect)
  i1646.m_Scale = i1647[5]
  i1646.m_AtlasIndex = i1647[6]
  i1646.m_ClassDefinitionType = i1647[7]
  return i1646
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('TMPro.TMP_Style', i1651[i + 0]));
  }
  i1648.m_StyleList = i1650
  return i1648
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.TMP_Style' )
  var i1655 = data
  i1654.m_Name = i1655[0]
  i1654.m_HashCode = i1655[1]
  i1654.m_OpeningDefinition = i1655[2]
  i1654.m_ClosingDefinition = i1655[3]
  i1654.m_OpeningTagArray = i1655[4]
  i1654.m_ClosingTagArray = i1655[5]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1659[i + 0]) );
  }
  i1656.files = i1658
  i1656.componentToPrefabIds = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1663 = data
  i1662.path = i1663[0]
  request.r(i1663[1], i1663[2], 0, i1662, 'unityObject')
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1667[i + 0]) );
  }
  i1664.scriptsExecutionOrder = i1666
  var i1669 = i1665[1]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1669[i + 0]) );
  }
  i1664.sortingLayers = i1668
  var i1671 = i1665[2]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1671[i + 0]) );
  }
  i1664.cullingLayers = i1670
  i1664.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1665[3], i1664.timeSettings)
  i1664.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1665[4], i1664.physicsSettings)
  i1664.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1665[5], i1664.physics2DSettings)
  i1664.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1665[6], i1664.qualitySettings)
  i1664.enableRealtimeShadows = !!i1665[7]
  i1664.enableAutoInstancing = !!i1665[8]
  i1664.enableStaticBatching = !!i1665[9]
  i1664.enableDynamicBatching = !!i1665[10]
  i1664.usePreservativeDynamicBatching = !!i1665[11]
  i1664.lightmapEncodingQuality = i1665[12]
  i1664.desiredColorSpace = i1665[13]
  var i1673 = i1665[14]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( i1673[i + 0] );
  }
  i1664.allTags = i1672
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.value = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1681 = data
  i1680.id = i1681[0]
  i1680.name = i1681[1]
  i1680.value = i1681[2]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1685 = data
  i1684.id = i1685[0]
  i1684.name = i1685[1]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1687 = data
  i1686.fixedDeltaTime = i1687[0]
  i1686.maximumDeltaTime = i1687[1]
  i1686.timeScale = i1687[2]
  i1686.maximumParticleTimestep = i1687[3]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1689 = data
  i1688.gravity = new pc.Vec3( i1689[0], i1689[1], i1689[2] )
  i1688.defaultSolverIterations = i1689[3]
  i1688.bounceThreshold = i1689[4]
  i1688.autoSyncTransforms = !!i1689[5]
  i1688.autoSimulation = !!i1689[6]
  var i1691 = i1689[7]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1691[i + 0]) );
  }
  i1688.collisionMatrix = i1690
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.layerId = i1695[1]
  i1694.otherLayerId = i1695[2]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'material')
  i1696.gravity = new pc.Vec2( i1697[2], i1697[3] )
  i1696.positionIterations = i1697[4]
  i1696.velocityIterations = i1697[5]
  i1696.velocityThreshold = i1697[6]
  i1696.maxLinearCorrection = i1697[7]
  i1696.maxAngularCorrection = i1697[8]
  i1696.maxTranslationSpeed = i1697[9]
  i1696.maxRotationSpeed = i1697[10]
  i1696.baumgarteScale = i1697[11]
  i1696.baumgarteTOIScale = i1697[12]
  i1696.timeToSleep = i1697[13]
  i1696.linearSleepTolerance = i1697[14]
  i1696.angularSleepTolerance = i1697[15]
  i1696.defaultContactOffset = i1697[16]
  i1696.autoSimulation = !!i1697[17]
  i1696.queriesHitTriggers = !!i1697[18]
  i1696.queriesStartInColliders = !!i1697[19]
  i1696.callbacksOnDisable = !!i1697[20]
  i1696.reuseCollisionCallbacks = !!i1697[21]
  i1696.autoSyncTransforms = !!i1697[22]
  var i1699 = i1697[23]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1699[i + 0]) );
  }
  i1696.collisionMatrix = i1698
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1703 = data
  i1702.enabled = !!i1703[0]
  i1702.layerId = i1703[1]
  i1702.otherLayerId = i1703[2]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1707[i + 0]) );
  }
  i1704.qualityLevels = i1706
  var i1709 = i1705[1]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1704.names = i1708
  i1704.shadows = i1705[2]
  i1704.anisotropicFiltering = i1705[3]
  i1704.antiAliasing = i1705[4]
  i1704.lodBias = i1705[5]
  i1704.shadowCascades = i1705[6]
  i1704.shadowDistance = i1705[7]
  i1704.shadowmaskMode = i1705[8]
  i1704.shadowProjection = i1705[9]
  i1704.shadowResolution = i1705[10]
  i1704.softParticles = !!i1705[11]
  i1704.softVegetation = !!i1705[12]
  i1704.activeColorSpace = i1705[13]
  i1704.desiredColorSpace = i1705[14]
  i1704.masterTextureLimit = i1705[15]
  i1704.maxQueuedFrames = i1705[16]
  i1704.particleRaycastBudget = i1705[17]
  i1704.pixelLightCount = i1705[18]
  i1704.realtimeReflectionProbes = !!i1705[19]
  i1704.shadowCascade2Split = i1705[20]
  i1704.shadowCascade4Split = new pc.Vec3( i1705[21], i1705[22], i1705[23] )
  i1704.streamingMipmapsActive = !!i1705[24]
  i1704.vSyncCount = i1705[25]
  i1704.asyncUploadBufferSize = i1705[26]
  i1704.asyncUploadTimeSlice = i1705[27]
  i1704.billboardsFaceCameraPosition = !!i1705[28]
  i1704.shadowNearPlaneOffset = i1705[29]
  i1704.streamingMipmapsMemoryBudget = i1705[30]
  i1704.maximumLODLevel = i1705[31]
  i1704.streamingMipmapsAddAllCameras = !!i1705[32]
  i1704.streamingMipmapsMaxLevelReduction = i1705[33]
  i1704.streamingMipmapsRenderersPerFrame = i1705[34]
  i1704.resolutionScalingFixedDPIFactor = i1705[35]
  i1704.streamingMipmapsMaxFileIORequests = i1705[36]
  i1704.currentQualityLevel = i1705[37]
  return i1704
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'm_ObjectArgument')
  i1712.m_ObjectArgumentAssemblyTypeName = i1713[2]
  i1712.m_IntArgument = i1713[3]
  i1712.m_FloatArgument = i1713[4]
  i1712.m_StringArgument = i1713[5]
  i1712.m_BoolArgument = !!i1713[6]
  return i1712
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1714 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1715 = data
  i1714.m_XCoordinate = i1715[0]
  i1714.m_YCoordinate = i1715[1]
  return i1714
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1716 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1717 = data
  i1716.m_XPositionAdjustment = i1717[0]
  i1716.m_YPositionAdjustment = i1717[1]
  return i1716
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1718 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1719 = data
  i1718.xPlacement = i1719[0]
  i1718.yPlacement = i1719[1]
  i1718.xAdvance = i1719[2]
  i1718.yAdvance = i1719[3]
  return i1718
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3766";

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

Deserializers.buildID = "0ccac7a5-85f6-47f1-9381-36669e862b38";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

