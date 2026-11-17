var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointSpring' )
  var i1285 = data
  i1284.spring = i1285[0]
  i1284.damper = i1285[1]
  i1284.targetPosition = i1285[2]
  return i1284
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.JointMotor' )
  var i1287 = data
  i1286.m_TargetVelocity = i1287[0]
  i1286.m_Force = i1287[1]
  i1286.m_FreeSpin = i1287[2]
  return i1286
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.JointLimits' )
  var i1289 = data
  i1288.m_Min = i1289[0]
  i1288.m_Max = i1289[1]
  i1288.m_Bounciness = i1289[2]
  i1288.m_BounceMinVelocity = i1289[3]
  i1288.m_ContactDistance = i1289[4]
  i1288.minBounce = i1289[5]
  i1288.maxBounce = i1289[6]
  return i1288
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointDrive' )
  var i1291 = data
  i1290.m_PositionSpring = i1291[0]
  i1290.m_PositionDamper = i1291[1]
  i1290.m_MaximumForce = i1291[2]
  i1290.m_UseAcceleration = i1291[3]
  return i1290
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1293 = data
  i1292.m_Spring = i1293[0]
  i1292.m_Damper = i1293[1]
  return i1292
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1295 = data
  i1294.m_Limit = i1295[0]
  i1294.m_Bounciness = i1295[1]
  i1294.m_ContactDistance = i1295[2]
  return i1294
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1297 = data
  i1296.m_ExtremumSlip = i1297[0]
  i1296.m_ExtremumValue = i1297[1]
  i1296.m_AsymptoteSlip = i1297[2]
  i1296.m_AsymptoteValue = i1297[3]
  i1296.m_Stiffness = i1297[4]
  return i1296
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1299 = data
  i1298.m_LowerAngle = i1299[0]
  i1298.m_UpperAngle = i1299[1]
  return i1298
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1301 = data
  i1300.m_MotorSpeed = i1301[0]
  i1300.m_MaximumMotorTorque = i1301[1]
  return i1300
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1303 = data
  i1302.m_DampingRatio = i1303[0]
  i1302.m_Frequency = i1303[1]
  i1302.m_Angle = i1303[2]
  return i1302
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1305 = data
  i1304.m_LowerTranslation = i1305[0]
  i1304.m_UpperTranslation = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.width = i1307[1]
  i1306.height = i1307[2]
  i1306.mipmapCount = i1307[3]
  i1306.anisoLevel = i1307[4]
  i1306.filterMode = i1307[5]
  i1306.hdr = !!i1307[6]
  i1306.format = i1307[7]
  i1306.wrapMode = i1307[8]
  i1306.alphaIsTransparency = !!i1307[9]
  i1306.alphaSource = i1307[10]
  i1306.graphicsFormat = i1307[11]
  i1306.sRGBTexture = !!i1307[12]
  i1306.desiredColorSpace = i1307[13]
  i1306.wrapU = i1307[14]
  i1306.wrapV = i1307[15]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1308 = root || new pc.UnityMaterial()
  var i1309 = data
  i1308.name = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'shader')
  i1308.renderQueue = i1309[3]
  i1308.enableInstancing = !!i1309[4]
  var i1311 = i1309[5]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1311[i + 0]) );
  }
  i1308.floatParameters = i1310
  var i1313 = i1309[6]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1313[i + 0]) );
  }
  i1308.colorParameters = i1312
  var i1315 = i1309[7]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1315[i + 0]) );
  }
  i1308.vectorParameters = i1314
  var i1317 = i1309[8]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1317[i + 0]) );
  }
  i1308.textureParameters = i1316
  var i1319 = i1309[9]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1319[i + 0]) );
  }
  i1308.materialFlags = i1318
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.value = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = new pc.Color(i1327[1], i1327[2], i1327[3], i1327[4])
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Vec4( i1331[1], i1331[2], i1331[3], i1331[4] )
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'value')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.enabled = !!i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.index = i1341[1]
  i1340.startup = !!i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1343 = data
  i1342.aspect = i1343[0]
  i1342.orthographic = !!i1343[1]
  i1342.orthographicSize = i1343[2]
  i1342.backgroundColor = new pc.Color(i1343[3], i1343[4], i1343[5], i1343[6])
  i1342.nearClipPlane = i1343[7]
  i1342.farClipPlane = i1343[8]
  i1342.fieldOfView = i1343[9]
  i1342.depth = i1343[10]
  i1342.clearFlags = i1343[11]
  i1342.cullingMask = i1343[12]
  i1342.rect = i1343[13]
  request.r(i1343[14], i1343[15], 0, i1342, 'targetTexture')
  i1342.usePhysicalProperties = !!i1343[16]
  i1342.focalLength = i1343[17]
  i1342.sensorSize = new pc.Vec2( i1343[18], i1343[19] )
  i1342.lensShift = new pc.Vec2( i1343[20], i1343[21] )
  i1342.gateFit = i1343[22]
  i1342.commandBufferCount = i1343[23]
  i1342.cameraType = i1343[24]
  i1342.enabled = !!i1343[25]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.tagId = i1345[1]
  i1344.enabled = !!i1345[2]
  i1344.isStatic = !!i1345[3]
  i1344.layer = i1345[4]
  return i1344
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'm_FirstSelected')
  i1346.m_sendNavigationEvents = !!i1347[2]
  i1346.m_DragThreshold = i1347[3]
  return i1346
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1349 = data
  i1348.m_HorizontalAxis = i1349[0]
  i1348.m_VerticalAxis = i1349[1]
  i1348.m_SubmitButton = i1349[2]
  i1348.m_CancelButton = i1349[3]
  i1348.m_InputActionsPerSecond = i1349[4]
  i1348.m_RepeatDelay = i1349[5]
  i1348.m_ForceModuleActive = !!i1349[6]
  i1348.m_SendPointerHoverToParent = !!i1349[7]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1351 = data
  i1350.pivot = new pc.Vec2( i1351[0], i1351[1] )
  i1350.anchorMin = new pc.Vec2( i1351[2], i1351[3] )
  i1350.anchorMax = new pc.Vec2( i1351[4], i1351[5] )
  i1350.sizeDelta = new pc.Vec2( i1351[6], i1351[7] )
  i1350.anchoredPosition3D = new pc.Vec3( i1351[8], i1351[9], i1351[10] )
  i1350.rotation = new pc.Quat(i1351[11], i1351[12], i1351[13], i1351[14])
  i1350.scale = new pc.Vec3( i1351[15], i1351[16], i1351[17] )
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1353 = data
  i1352.planeDistance = i1353[0]
  i1352.referencePixelsPerUnit = i1353[1]
  i1352.isFallbackOverlay = !!i1353[2]
  i1352.renderMode = i1353[3]
  i1352.renderOrder = i1353[4]
  i1352.sortingLayerName = i1353[5]
  i1352.sortingOrder = i1353[6]
  i1352.scaleFactor = i1353[7]
  request.r(i1353[8], i1353[9], 0, i1352, 'worldCamera')
  i1352.overrideSorting = !!i1353[10]
  i1352.pixelPerfect = !!i1353[11]
  i1352.targetDisplay = i1353[12]
  i1352.overridePixelPerfect = !!i1353[13]
  i1352.enabled = !!i1353[14]
  return i1352
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1355 = data
  i1354.m_UiScaleMode = i1355[0]
  i1354.m_ReferencePixelsPerUnit = i1355[1]
  i1354.m_ScaleFactor = i1355[2]
  i1354.m_ReferenceResolution = new pc.Vec2( i1355[3], i1355[4] )
  i1354.m_ScreenMatchMode = i1355[5]
  i1354.m_MatchWidthOrHeight = i1355[6]
  i1354.m_PhysicalUnit = i1355[7]
  i1354.m_FallbackScreenDPI = i1355[8]
  i1354.m_DefaultSpriteDPI = i1355[9]
  i1354.m_DynamicPixelsPerUnit = i1355[10]
  i1354.m_PresetInfoIsWorld = !!i1355[11]
  return i1354
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1357 = data
  i1356.m_IgnoreReversedGraphics = !!i1357[0]
  i1356.m_BlockingObjects = i1357[1]
  i1356.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1357[2] )
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1359 = data
  i1358.cullTransparentMesh = !!i1359[0]
  return i1358
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'm_Texture')
  i1360.m_UVRect = UnityEngine.Rect.MinMaxRect(i1361[2], i1361[3], i1361[4], i1361[5])
  request.r(i1361[6], i1361[7], 0, i1360, 'm_Material')
  i1360.m_Maskable = !!i1361[8]
  i1360.m_Color = new pc.Color(i1361[9], i1361[10], i1361[11], i1361[12])
  i1360.m_RaycastTarget = !!i1361[13]
  i1360.m_RaycastPadding = new pc.Vec4( i1361[14], i1361[15], i1361[16], i1361[17] )
  return i1360
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.UI.Image' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'm_Sprite')
  i1362.m_Type = i1363[2]
  i1362.m_PreserveAspect = !!i1363[3]
  i1362.m_FillCenter = !!i1363[4]
  i1362.m_FillMethod = i1363[5]
  i1362.m_FillAmount = i1363[6]
  i1362.m_FillClockwise = !!i1363[7]
  i1362.m_FillOrigin = i1363[8]
  i1362.m_UseSpriteMesh = !!i1363[9]
  i1362.m_PixelsPerUnitMultiplier = i1363[10]
  request.r(i1363[11], i1363[12], 0, i1362, 'm_Material')
  i1362.m_Maskable = !!i1363[13]
  i1362.m_Color = new pc.Color(i1363[14], i1363[15], i1363[16], i1363[17])
  i1362.m_RaycastTarget = !!i1363[18]
  i1362.m_RaycastPadding = new pc.Vec4( i1363[19], i1363[20], i1363[21], i1363[22] )
  return i1362
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'm_Content')
  i1364.m_Horizontal = !!i1365[2]
  i1364.m_Vertical = !!i1365[3]
  i1364.m_MovementType = i1365[4]
  i1364.m_Elasticity = i1365[5]
  i1364.m_Inertia = !!i1365[6]
  i1364.m_DecelerationRate = i1365[7]
  i1364.m_ScrollSensitivity = i1365[8]
  request.r(i1365[9], i1365[10], 0, i1364, 'm_Viewport')
  request.r(i1365[11], i1365[12], 0, i1364, 'm_HorizontalScrollbar')
  request.r(i1365[13], i1365[14], 0, i1364, 'm_VerticalScrollbar')
  i1364.m_HorizontalScrollbarVisibility = i1365[15]
  i1364.m_VerticalScrollbarVisibility = i1365[16]
  i1364.m_HorizontalScrollbarSpacing = i1365[17]
  i1364.m_VerticalScrollbarSpacing = i1365[18]
  i1364.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1365[19], i1364.m_OnValueChanged)
  return i1364
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1367 = data
  i1366.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1367[0], i1366.m_PersistentCalls)
  return i1366
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('UnityEngine.Events.PersistentCall', i1371[i + 0]));
  }
  i1368.m_Calls = i1370
  return i1368
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'm_Target')
  i1374.m_TargetAssemblyTypeName = i1375[2]
  i1374.m_MethodName = i1375[3]
  i1374.m_Mode = i1375[4]
  i1374.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1375[5], i1374.m_Arguments)
  i1374.m_CallState = i1375[6]
  return i1374
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1377 = data
  i1376.m_hasFontAssetChanged = !!i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'm_baseMaterial')
  i1376.m_maskOffset = new pc.Vec4( i1377[3], i1377[4], i1377[5], i1377[6] )
  i1376.m_text = i1377[7]
  i1376.m_isRightToLeft = !!i1377[8]
  request.r(i1377[9], i1377[10], 0, i1376, 'm_fontAsset')
  request.r(i1377[11], i1377[12], 0, i1376, 'm_sharedMaterial')
  var i1379 = i1377[13]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 2, i1378, '')
  }
  i1376.m_fontSharedMaterials = i1378
  request.r(i1377[14], i1377[15], 0, i1376, 'm_fontMaterial')
  var i1381 = i1377[16]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 2) {
  request.r(i1381[i + 0], i1381[i + 1], 2, i1380, '')
  }
  i1376.m_fontMaterials = i1380
  i1376.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1377[17], i1377[18], i1377[19], i1377[20])
  i1376.m_fontColor = new pc.Color(i1377[21], i1377[22], i1377[23], i1377[24])
  i1376.m_enableVertexGradient = !!i1377[25]
  i1376.m_colorMode = i1377[26]
  i1376.m_fontColorGradient = request.d('TMPro.VertexGradient', i1377[27], i1376.m_fontColorGradient)
  request.r(i1377[28], i1377[29], 0, i1376, 'm_fontColorGradientPreset')
  request.r(i1377[30], i1377[31], 0, i1376, 'm_spriteAsset')
  i1376.m_tintAllSprites = !!i1377[32]
  request.r(i1377[33], i1377[34], 0, i1376, 'm_StyleSheet')
  i1376.m_TextStyleHashCode = i1377[35]
  i1376.m_overrideHtmlColors = !!i1377[36]
  i1376.m_faceColor = UnityEngine.Color32.ConstructColor(i1377[37], i1377[38], i1377[39], i1377[40])
  i1376.m_fontSize = i1377[41]
  i1376.m_fontSizeBase = i1377[42]
  i1376.m_fontWeight = i1377[43]
  i1376.m_enableAutoSizing = !!i1377[44]
  i1376.m_fontSizeMin = i1377[45]
  i1376.m_fontSizeMax = i1377[46]
  i1376.m_fontStyle = i1377[47]
  i1376.m_HorizontalAlignment = i1377[48]
  i1376.m_VerticalAlignment = i1377[49]
  i1376.m_textAlignment = i1377[50]
  i1376.m_characterSpacing = i1377[51]
  i1376.m_wordSpacing = i1377[52]
  i1376.m_lineSpacing = i1377[53]
  i1376.m_lineSpacingMax = i1377[54]
  i1376.m_paragraphSpacing = i1377[55]
  i1376.m_charWidthMaxAdj = i1377[56]
  i1376.m_TextWrappingMode = i1377[57]
  i1376.m_wordWrappingRatios = i1377[58]
  i1376.m_overflowMode = i1377[59]
  request.r(i1377[60], i1377[61], 0, i1376, 'm_linkedTextComponent')
  request.r(i1377[62], i1377[63], 0, i1376, 'parentLinkedComponent')
  i1376.m_enableKerning = !!i1377[64]
  var i1383 = i1377[65]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.add(i1383[i + 0]);
  }
  i1376.m_ActiveFontFeatures = i1382
  i1376.m_enableExtraPadding = !!i1377[66]
  i1376.checkPaddingRequired = !!i1377[67]
  i1376.m_isRichText = !!i1377[68]
  i1376.m_parseCtrlCharacters = !!i1377[69]
  i1376.m_isOrthographic = !!i1377[70]
  i1376.m_isCullingEnabled = !!i1377[71]
  i1376.m_horizontalMapping = i1377[72]
  i1376.m_verticalMapping = i1377[73]
  i1376.m_uvLineOffset = i1377[74]
  i1376.m_geometrySortingOrder = i1377[75]
  i1376.m_IsTextObjectScaleStatic = !!i1377[76]
  i1376.m_VertexBufferAutoSizeReduction = !!i1377[77]
  i1376.m_useMaxVisibleDescender = !!i1377[78]
  i1376.m_pageToDisplay = i1377[79]
  i1376.m_margin = new pc.Vec4( i1377[80], i1377[81], i1377[82], i1377[83] )
  i1376.m_isUsingLegacyAnimationComponent = !!i1377[84]
  i1376.m_isVolumetricText = !!i1377[85]
  request.r(i1377[86], i1377[87], 0, i1376, 'm_Material')
  i1376.m_EmojiFallbackSupport = !!i1377[88]
  i1376.m_Maskable = !!i1377[89]
  i1376.m_Color = new pc.Color(i1377[90], i1377[91], i1377[92], i1377[93])
  i1376.m_RaycastTarget = !!i1377[94]
  i1376.m_RaycastPadding = new pc.Vec4( i1377[95], i1377[96], i1377[97], i1377[98] )
  return i1376
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1386 = root || request.c( 'TMPro.VertexGradient' )
  var i1387 = data
  i1386.topLeft = new pc.Color(i1387[0], i1387[1], i1387[2], i1387[3])
  i1386.topRight = new pc.Color(i1387[4], i1387[5], i1387[6], i1387[7])
  i1386.bottomLeft = new pc.Color(i1387[8], i1387[9], i1387[10], i1387[11])
  i1386.bottomRight = new pc.Color(i1387[12], i1387[13], i1387[14], i1387[15])
  return i1386
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1391 = data
  i1390.m_ShowMaskGraphic = !!i1391[0]
  return i1390
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.Button' )
  var i1393 = data
  i1392.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1393[0], i1392.m_OnClick)
  i1392.m_Navigation = request.d('UnityEngine.UI.Navigation', i1393[1], i1392.m_Navigation)
  i1392.m_Transition = i1393[2]
  i1392.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1393[3], i1392.m_Colors)
  i1392.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1393[4], i1392.m_SpriteState)
  i1392.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1393[5], i1392.m_AnimationTriggers)
  i1392.m_Interactable = !!i1393[6]
  request.r(i1393[7], i1393[8], 0, i1392, 'm_TargetGraphic')
  return i1392
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1395 = data
  i1394.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1395[0], i1394.m_PersistentCalls)
  return i1394
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1397 = data
  i1396.m_Mode = i1397[0]
  i1396.m_WrapAround = !!i1397[1]
  request.r(i1397[2], i1397[3], 0, i1396, 'm_SelectOnUp')
  request.r(i1397[4], i1397[5], 0, i1396, 'm_SelectOnDown')
  request.r(i1397[6], i1397[7], 0, i1396, 'm_SelectOnLeft')
  request.r(i1397[8], i1397[9], 0, i1396, 'm_SelectOnRight')
  return i1396
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1399 = data
  i1398.m_NormalColor = new pc.Color(i1399[0], i1399[1], i1399[2], i1399[3])
  i1398.m_HighlightedColor = new pc.Color(i1399[4], i1399[5], i1399[6], i1399[7])
  i1398.m_PressedColor = new pc.Color(i1399[8], i1399[9], i1399[10], i1399[11])
  i1398.m_SelectedColor = new pc.Color(i1399[12], i1399[13], i1399[14], i1399[15])
  i1398.m_DisabledColor = new pc.Color(i1399[16], i1399[17], i1399[18], i1399[19])
  i1398.m_ColorMultiplier = i1399[20]
  i1398.m_FadeDuration = i1399[21]
  return i1398
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'm_HighlightedSprite')
  request.r(i1401[2], i1401[3], 0, i1400, 'm_PressedSprite')
  request.r(i1401[4], i1401[5], 0, i1400, 'm_SelectedSprite')
  request.r(i1401[6], i1401[7], 0, i1400, 'm_DisabledSprite')
  return i1400
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1403 = data
  i1402.m_NormalTrigger = i1403[0]
  i1402.m_HighlightedTrigger = i1403[1]
  i1402.m_PressedTrigger = i1403[2]
  i1402.m_SelectedTrigger = i1403[3]
  i1402.m_DisabledTrigger = i1403[4]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'clip')
  request.r(i1405[2], i1405[3], 0, i1404, 'outputAudioMixerGroup')
  i1404.playOnAwake = !!i1405[4]
  i1404.loop = !!i1405[5]
  i1404.time = i1405[6]
  i1404.volume = i1405[7]
  i1404.pitch = i1405[8]
  i1404.enabled = !!i1405[9]
  return i1404
}

Deserializers["MelonAd.WeaponInventoryPLA"] = function (request, data, root) {
  var i1406 = root || request.c( 'MelonAd.WeaponInventoryPLA' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'BGTexture')
  request.r(i1407[2], i1407[3], 0, i1406, 'BGM')
  i1406.EndTime = i1407[4]
  request.r(i1407[5], i1407[6], 0, i1406, 'scaler')
  request.r(i1407[7], i1407[8], 0, i1406, 'background')
  request.r(i1407[9], i1407[10], 0, i1406, 'inventoryPanel')
  request.r(i1407[11], i1407[12], 0, i1406, 'header')
  request.r(i1407[13], i1407[14], 0, i1406, 'headerTitle')
  request.r(i1407[15], i1407[16], 0, i1406, 'headerCount')
  request.r(i1407[17], i1407[18], 0, i1406, 'scroll')
  request.r(i1407[19], i1407[20], 0, i1406, 'viewport')
  request.r(i1407[21], i1407[22], 0, i1406, 'content')
  var i1409 = i1407[23]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1409.length; i += 2) {
  request.r(i1409[i + 0], i1409[i + 1], 1, i1408, '')
  }
  i1406.slots = i1408
  request.r(i1407[24], i1407[25], 0, i1406, 'ctaArea')
  request.r(i1407[26], i1407[27], 0, i1406, 'title')
  request.r(i1407[28], i1407[29], 0, i1406, 'startButton')
  request.r(i1407[30], i1407[31], 0, i1406, 'startLabel')
  request.r(i1407[32], i1407[33], 0, i1406, 'bgmSource')
  request.r(i1407[34], i1407[35], 0, i1406, 'safeRoot')
  i1406.minTopPortrait = i1407[36]
  i1406.minBottomPortrait = i1407[37]
  i1406.minSideLandscape = i1407[38]
  i1406.minBottomLandscape = i1407[39]
  i1406.targetCell = i1407[40]
  i1406.targetCellLandscape = i1407[41]
  i1406.gap = i1407[42]
  i1406.pad = i1407[43]
  i1406.nameHeight = i1407[44]
  i1406.minColumns = i1407[45]
  i1406.maxColumns = i1407[46]
  request.r(i1407[47], i1407[48], 0, i1406, 'hand')
  request.r(i1407[49], i1407[50], 0, i1406, 'handImage')
  i1406.handSwipeUp = !!i1407[51]
  i1406.hintDelay = i1407[52]
  i1406.idleRepeat = i1407[53]
  i1406.loopPause = i1407[54]
  i1406.hintDistance = i1407[55]
  var i1411 = i1407[56]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioSource')))
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 1, i1410, '')
  }
  i1406.sfxSources = i1410
  request.r(i1407[57], i1407[58], 0, i1406, 'clickSfx')
  request.r(i1407[59], i1407[60], 0, i1406, 'selectSfx')
  i1406.bgmVolume = i1407[61]
  i1406.sfxVolume = i1407[62]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1417 = data
  i1416.ambientIntensity = i1417[0]
  i1416.reflectionIntensity = i1417[1]
  i1416.ambientMode = i1417[2]
  i1416.ambientLight = new pc.Color(i1417[3], i1417[4], i1417[5], i1417[6])
  i1416.ambientSkyColor = new pc.Color(i1417[7], i1417[8], i1417[9], i1417[10])
  i1416.ambientGroundColor = new pc.Color(i1417[11], i1417[12], i1417[13], i1417[14])
  i1416.ambientEquatorColor = new pc.Color(i1417[15], i1417[16], i1417[17], i1417[18])
  i1416.fogColor = new pc.Color(i1417[19], i1417[20], i1417[21], i1417[22])
  i1416.fogEndDistance = i1417[23]
  i1416.fogStartDistance = i1417[24]
  i1416.fogDensity = i1417[25]
  i1416.fog = !!i1417[26]
  request.r(i1417[27], i1417[28], 0, i1416, 'skybox')
  i1416.fogMode = i1417[29]
  var i1419 = i1417[30]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1419[i + 0]) );
  }
  i1416.lightmaps = i1418
  i1416.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1417[31], i1416.lightProbes)
  i1416.lightmapsMode = i1417[32]
  i1416.mixedBakeMode = i1417[33]
  i1416.environmentLightingMode = i1417[34]
  i1416.ambientProbe = new pc.SphericalHarmonicsL2(i1417[35])
  request.r(i1417[36], i1417[37], 0, i1416, 'customReflection')
  request.r(i1417[38], i1417[39], 0, i1416, 'defaultReflection')
  i1416.defaultReflectionMode = i1417[40]
  i1416.defaultReflectionResolution = i1417[41]
  i1416.sunLightObjectId = i1417[42]
  i1416.pixelLightCount = i1417[43]
  i1416.defaultReflectionHDR = !!i1417[44]
  i1416.hasLightDataAsset = !!i1417[45]
  i1416.hasManualGenerate = !!i1417[46]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'lightmapColor')
  request.r(i1423[2], i1423[3], 0, i1422, 'lightmapDirection')
  request.r(i1423[4], i1423[5], 0, i1422, 'shadowMask')
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1424 = root || new UnityEngine.LightProbes()
  var i1425 = data
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1435[i + 0]));
  }
  i1432.ShaderCompilationErrors = i1434
  i1432.name = i1433[1]
  i1432.guid = i1433[2]
  var i1437 = i1433[3]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( i1437[i + 0] );
  }
  i1432.shaderDefinedKeywords = i1436
  var i1439 = i1433[4]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1439[i + 0]) );
  }
  i1432.passes = i1438
  var i1441 = i1433[5]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1441[i + 0]) );
  }
  i1432.usePasses = i1440
  var i1443 = i1433[6]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1443[i + 0]) );
  }
  i1432.defaultParameterValues = i1442
  request.r(i1433[7], i1433[8], 0, i1432, 'unityFallbackShader')
  i1432.readDepth = !!i1433[9]
  i1432.hasDepthOnlyPass = !!i1433[10]
  i1432.isCreatedByShaderGraph = !!i1433[11]
  i1432.disableBatching = !!i1433[12]
  i1432.compiled = !!i1433[13]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1447 = data
  i1446.shaderName = i1447[0]
  i1446.errorMessage = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1452 = root || new pc.UnityShaderPass()
  var i1453 = data
  i1452.id = i1453[0]
  i1452.subShaderIndex = i1453[1]
  i1452.name = i1453[2]
  i1452.passType = i1453[3]
  i1452.grabPassTextureName = i1453[4]
  i1452.usePass = !!i1453[5]
  i1452.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[6], i1452.zTest)
  i1452.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[7], i1452.zWrite)
  i1452.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[8], i1452.culling)
  i1452.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1453[9], i1452.blending)
  i1452.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1453[10], i1452.alphaBlending)
  i1452.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[11], i1452.colorWriteMask)
  i1452.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[12], i1452.offsetUnits)
  i1452.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[13], i1452.offsetFactor)
  i1452.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[14], i1452.stencilRef)
  i1452.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[15], i1452.stencilReadMask)
  i1452.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1453[16], i1452.stencilWriteMask)
  i1452.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1453[17], i1452.stencilOp)
  i1452.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1453[18], i1452.stencilOpFront)
  i1452.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1453[19], i1452.stencilOpBack)
  var i1455 = i1453[20]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1455[i + 0]) );
  }
  i1452.tags = i1454
  var i1457 = i1453[21]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( i1457[i + 0] );
  }
  i1452.passDefinedKeywords = i1456
  var i1459 = i1453[22]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1459[i + 0]) );
  }
  i1452.passDefinedKeywordGroups = i1458
  var i1461 = i1453[23]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1461[i + 0]) );
  }
  i1452.variants = i1460
  var i1463 = i1453[24]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1463[i + 0]) );
  }
  i1452.excludedVariants = i1462
  i1452.hasDepthReader = !!i1453[25]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1465 = data
  i1464.val = i1465[0]
  i1464.name = i1465[1]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1467 = data
  i1466.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[0], i1466.src)
  i1466.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[1], i1466.dst)
  i1466.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1467[2], i1466.op)
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1469 = data
  i1468.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1469[0], i1468.pass)
  i1468.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1469[1], i1468.fail)
  i1468.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1469[2], i1468.zFail)
  i1468.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1469[3], i1468.comp)
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.value = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1477 = data
  var i1479 = i1477[0]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1476.keywords = i1478
  i1476.hasDiscard = !!i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1483 = data
  i1482.passId = i1483[0]
  i1482.subShaderIndex = i1483[1]
  var i1485 = i1483[2]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( i1485[i + 0] );
  }
  i1482.keywords = i1484
  i1482.vertexProgram = i1483[3]
  i1482.fragmentProgram = i1483[4]
  i1482.exportedForWebGl2 = !!i1483[5]
  i1482.readDepth = !!i1483[6]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1489 = data
  request.r(i1489[0], i1489[1], 0, i1488, 'shader')
  i1488.pass = i1489[2]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.type = i1493[1]
  i1492.value = new pc.Vec4( i1493[2], i1493[3], i1493[4], i1493[5] )
  i1492.textureValue = i1493[6]
  i1492.shaderPropertyFlag = i1493[7]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1495 = data
  i1494.name = i1495[0]
  request.r(i1495[1], i1495[2], 0, i1494, 'texture')
  i1494.aabb = i1495[3]
  i1494.vertices = i1495[4]
  i1494.triangles = i1495[5]
  i1494.textureRect = UnityEngine.Rect.MinMaxRect(i1495[6], i1495[7], i1495[8], i1495[9])
  i1494.packedRect = UnityEngine.Rect.MinMaxRect(i1495[10], i1495[11], i1495[12], i1495[13])
  i1494.border = new pc.Vec4( i1495[14], i1495[15], i1495[16], i1495[17] )
  i1494.transparency = i1495[18]
  i1494.bounds = i1495[19]
  i1494.pixelsPerUnit = i1495[20]
  i1494.textureWidth = i1495[21]
  i1494.textureHeight = i1495[22]
  i1494.nativeSize = new pc.Vec2( i1495[23], i1495[24] )
  i1494.pivot = new pc.Vec2( i1495[25], i1495[26] )
  i1494.textureRectOffset = new pc.Vec2( i1495[27], i1495[28] )
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1497 = data
  i1496.name = i1497[0]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.ascent = i1499[1]
  i1498.originalLineHeight = i1499[2]
  i1498.fontSize = i1499[3]
  var i1501 = i1499[4]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1501[i + 0]) );
  }
  i1498.characterInfo = i1500
  request.r(i1499[5], i1499[6], 0, i1498, 'texture')
  i1498.originalFontSize = i1499[7]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1505 = data
  i1504.index = i1505[0]
  i1504.advance = i1505[1]
  i1504.bearing = i1505[2]
  i1504.glyphWidth = i1505[3]
  i1504.glyphHeight = i1505[4]
  i1504.minX = i1505[5]
  i1504.maxX = i1505[6]
  i1504.minY = i1505[7]
  i1504.maxY = i1505[8]
  i1504.uvBottomLeftX = i1505[9]
  i1504.uvBottomLeftY = i1505[10]
  i1504.uvBottomRightX = i1505[11]
  i1504.uvBottomRightY = i1505[12]
  i1504.uvTopLeftX = i1505[13]
  i1504.uvTopLeftY = i1505[14]
  i1504.uvTopRightX = i1505[15]
  i1504.uvTopRightY = i1505[16]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.bytes64 = i1507[1]
  i1506.data = i1507[2]
  return i1506
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1508 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1509 = data
  i1508.normalStyle = i1509[0]
  i1508.normalSpacingOffset = i1509[1]
  i1508.boldStyle = i1509[2]
  i1508.boldSpacing = i1509[3]
  i1508.italicStyle = i1509[4]
  i1508.tabSize = i1509[5]
  request.r(i1509[6], i1509[7], 0, i1508, 'atlas')
  i1508.m_SourceFontFileGUID = i1509[8]
  i1508.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1509[9], i1508.m_CreationSettings)
  request.r(i1509[10], i1509[11], 0, i1508, 'm_SourceFontFile')
  i1508.m_SourceFontFilePath = i1509[12]
  i1508.m_AtlasPopulationMode = i1509[13]
  i1508.InternalDynamicOS = !!i1509[14]
  var i1511 = i1509[15]
  var i1510 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.add(request.d('UnityEngine.TextCore.Glyph', i1511[i + 0]));
  }
  i1508.m_GlyphTable = i1510
  var i1513 = i1509[16]
  var i1512 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.add(request.d('TMPro.TMP_Character', i1513[i + 0]));
  }
  i1508.m_CharacterTable = i1512
  var i1515 = i1509[17]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 2) {
  request.r(i1515[i + 0], i1515[i + 1], 2, i1514, '')
  }
  i1508.m_AtlasTextures = i1514
  i1508.m_AtlasTextureIndex = i1509[18]
  i1508.m_IsMultiAtlasTexturesEnabled = !!i1509[19]
  i1508.m_GetFontFeatures = !!i1509[20]
  i1508.m_ClearDynamicDataOnBuild = !!i1509[21]
  i1508.m_AtlasWidth = i1509[22]
  i1508.m_AtlasHeight = i1509[23]
  i1508.m_AtlasPadding = i1509[24]
  i1508.m_AtlasRenderMode = i1509[25]
  var i1517 = i1509[26]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.add(request.d('UnityEngine.TextCore.GlyphRect', i1517[i + 0]));
  }
  i1508.m_UsedGlyphRects = i1516
  var i1519 = i1509[27]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.add(request.d('UnityEngine.TextCore.GlyphRect', i1519[i + 0]));
  }
  i1508.m_FreeGlyphRects = i1518
  i1508.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1509[28], i1508.m_FontFeatureTable)
  i1508.m_ShouldReimportFontFeatures = !!i1509[29]
  var i1521 = i1509[30]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 1, i1520, '')
  }
  i1508.m_FallbackFontAssetTable = i1520
  var i1523 = i1509[31]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('TMPro.TMP_FontWeightPair', i1523[i + 0]) );
  }
  i1508.m_FontWeightTable = i1522
  var i1525 = i1509[32]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('TMPro.TMP_FontWeightPair', i1525[i + 0]) );
  }
  i1508.fontWeights = i1524
  i1508.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1509[33], i1508.m_fontInfo)
  var i1527 = i1509[34]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('TMPro.TMP_Glyph', i1527[i + 0]));
  }
  i1508.m_glyphInfoList = i1526
  i1508.m_KerningTable = request.d('TMPro.KerningTable', i1509[35], i1508.m_KerningTable)
  var i1529 = i1509[36]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1508.fallbackFontAssets = i1528
  i1508.m_Version = i1509[37]
  i1508.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1509[38], i1508.m_FaceInfo)
  request.r(i1509[39], i1509[40], 0, i1508, 'm_Material')
  return i1508
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1531 = data
  i1530.sourceFontFileName = i1531[0]
  i1530.sourceFontFileGUID = i1531[1]
  i1530.faceIndex = i1531[2]
  i1530.pointSizeSamplingMode = i1531[3]
  i1530.pointSize = i1531[4]
  i1530.padding = i1531[5]
  i1530.paddingMode = i1531[6]
  i1530.packingMode = i1531[7]
  i1530.atlasWidth = i1531[8]
  i1530.atlasHeight = i1531[9]
  i1530.characterSetSelectionMode = i1531[10]
  i1530.characterSequence = i1531[11]
  i1530.referencedFontAssetGUID = i1531[12]
  i1530.referencedTextAssetGUID = i1531[13]
  i1530.fontStyle = i1531[14]
  i1530.fontStyleModifier = i1531[15]
  i1530.renderMode = i1531[16]
  i1530.includeFontFeatures = !!i1531[17]
  return i1530
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1535 = data
  i1534.m_Index = i1535[0]
  i1534.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1535[1], i1534.m_Metrics)
  i1534.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1535[2], i1534.m_GlyphRect)
  i1534.m_Scale = i1535[3]
  i1534.m_AtlasIndex = i1535[4]
  i1534.m_ClassDefinitionType = i1535[5]
  return i1534
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1536 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1537 = data
  i1536.m_Width = i1537[0]
  i1536.m_Height = i1537[1]
  i1536.m_HorizontalBearingX = i1537[2]
  i1536.m_HorizontalBearingY = i1537[3]
  i1536.m_HorizontalAdvance = i1537[4]
  return i1536
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1539 = data
  i1538.m_X = i1539[0]
  i1538.m_Y = i1539[1]
  i1538.m_Width = i1539[2]
  i1538.m_Height = i1539[3]
  return i1538
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1542 = root || request.c( 'TMPro.TMP_Character' )
  var i1543 = data
  i1542.m_ElementType = i1543[0]
  i1542.m_Unicode = i1543[1]
  i1542.m_GlyphIndex = i1543[2]
  i1542.m_Scale = i1543[3]
  return i1542
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1549 = data
  var i1551 = i1549[0]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.add(request.d('TMPro.MultipleSubstitutionRecord', i1551[i + 0]));
  }
  i1548.m_MultipleSubstitutionRecords = i1550
  var i1553 = i1549[1]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('TMPro.LigatureSubstitutionRecord', i1553[i + 0]));
  }
  i1548.m_LigatureSubstitutionRecords = i1552
  var i1555 = i1549[2]
  var i1554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1555[i + 0]));
  }
  i1548.m_GlyphPairAdjustmentRecords = i1554
  var i1557 = i1549[3]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1557[i + 0]));
  }
  i1548.m_MarkToBaseAdjustmentRecords = i1556
  var i1559 = i1549[4]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1559[i + 0]));
  }
  i1548.m_MarkToMarkAdjustmentRecords = i1558
  return i1548
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1562 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1563 = data
  i1562.m_TargetGlyphID = i1563[0]
  i1562.m_SubstituteGlyphIDs = i1563[1]
  return i1562
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1566 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1567 = data
  i1566.m_ComponentGlyphIDs = i1567[0]
  i1566.m_LigatureGlyphID = i1567[1]
  return i1566
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1571 = data
  i1570.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1571[0], i1570.m_FirstAdjustmentRecord)
  i1570.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1571[1], i1570.m_SecondAdjustmentRecord)
  i1570.m_FeatureLookupFlags = i1571[2]
  return i1570
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1575 = data
  i1574.m_BaseGlyphID = i1575[0]
  i1574.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1575[1], i1574.m_BaseGlyphAnchorPoint)
  i1574.m_MarkGlyphID = i1575[2]
  i1574.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1575[3], i1574.m_MarkPositionAdjustment)
  return i1574
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1578 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1579 = data
  i1578.m_BaseMarkGlyphID = i1579[0]
  i1578.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1579[1], i1578.m_BaseMarkGlyphAnchorPoint)
  i1578.m_CombiningMarkGlyphID = i1579[2]
  i1578.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1579[3], i1578.m_CombiningMarkPositionAdjustment)
  return i1578
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'regularTypeface')
  request.r(i1585[2], i1585[3], 0, i1584, 'italicTypeface')
  return i1584
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1586 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1587 = data
  i1586.Name = i1587[0]
  i1586.PointSize = i1587[1]
  i1586.Scale = i1587[2]
  i1586.CharacterCount = i1587[3]
  i1586.LineHeight = i1587[4]
  i1586.Baseline = i1587[5]
  i1586.Ascender = i1587[6]
  i1586.CapHeight = i1587[7]
  i1586.Descender = i1587[8]
  i1586.CenterLine = i1587[9]
  i1586.SuperscriptOffset = i1587[10]
  i1586.SubscriptOffset = i1587[11]
  i1586.SubSize = i1587[12]
  i1586.Underline = i1587[13]
  i1586.UnderlineThickness = i1587[14]
  i1586.strikethrough = i1587[15]
  i1586.strikethroughThickness = i1587[16]
  i1586.TabWidth = i1587[17]
  i1586.Padding = i1587[18]
  i1586.AtlasWidth = i1587[19]
  i1586.AtlasHeight = i1587[20]
  return i1586
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1590 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1591 = data
  i1590.id = i1591[0]
  i1590.x = i1591[1]
  i1590.y = i1591[2]
  i1590.width = i1591[3]
  i1590.height = i1591[4]
  i1590.xOffset = i1591[5]
  i1590.yOffset = i1591[6]
  i1590.xAdvance = i1591[7]
  i1590.scale = i1591[8]
  return i1590
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1592 = root || request.c( 'TMPro.KerningTable' )
  var i1593 = data
  var i1595 = i1593[0]
  var i1594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.add(request.d('TMPro.KerningPair', i1595[i + 0]));
  }
  i1592.kerningPairs = i1594
  return i1592
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.KerningPair' )
  var i1599 = data
  i1598.xOffset = i1599[0]
  i1598.m_FirstGlyph = i1599[1]
  i1598.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1599[2], i1598.m_FirstGlyphAdjustments)
  i1598.m_SecondGlyph = i1599[3]
  i1598.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1599[4], i1598.m_SecondGlyphAdjustments)
  i1598.m_IgnoreSpacingAdjustments = !!i1599[5]
  return i1598
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1601 = data
  i1600.m_FaceIndex = i1601[0]
  i1600.m_FamilyName = i1601[1]
  i1600.m_StyleName = i1601[2]
  i1600.m_PointSize = i1601[3]
  i1600.m_Scale = i1601[4]
  i1600.m_UnitsPerEM = i1601[5]
  i1600.m_LineHeight = i1601[6]
  i1600.m_AscentLine = i1601[7]
  i1600.m_CapLine = i1601[8]
  i1600.m_MeanLine = i1601[9]
  i1600.m_Baseline = i1601[10]
  i1600.m_DescentLine = i1601[11]
  i1600.m_SuperscriptOffset = i1601[12]
  i1600.m_SuperscriptSize = i1601[13]
  i1600.m_SubscriptOffset = i1601[14]
  i1600.m_SubscriptSize = i1601[15]
  i1600.m_UnderlineOffset = i1601[16]
  i1600.m_UnderlineThickness = i1601[17]
  i1600.m_StrikethroughOffset = i1601[18]
  i1600.m_StrikethroughThickness = i1601[19]
  i1600.m_TabWidth = i1601[20]
  return i1600
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_Settings' )
  var i1603 = data
  i1602.assetVersion = i1603[0]
  i1602.m_TextWrappingMode = i1603[1]
  i1602.m_enableKerning = !!i1603[2]
  var i1605 = i1603[3]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(i1605[i + 0]);
  }
  i1602.m_ActiveFontFeatures = i1604
  i1602.m_enableExtraPadding = !!i1603[4]
  i1602.m_enableTintAllSprites = !!i1603[5]
  i1602.m_enableParseEscapeCharacters = !!i1603[6]
  i1602.m_EnableRaycastTarget = !!i1603[7]
  i1602.m_GetFontFeaturesAtRuntime = !!i1603[8]
  i1602.m_missingGlyphCharacter = i1603[9]
  i1602.m_ClearDynamicDataOnBuild = !!i1603[10]
  i1602.m_warningsDisabled = !!i1603[11]
  request.r(i1603[12], i1603[13], 0, i1602, 'm_defaultFontAsset')
  i1602.m_defaultFontAssetPath = i1603[14]
  i1602.m_defaultFontSize = i1603[15]
  i1602.m_defaultAutoSizeMinRatio = i1603[16]
  i1602.m_defaultAutoSizeMaxRatio = i1603[17]
  i1602.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1603[18], i1603[19] )
  i1602.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1603[20], i1603[21] )
  i1602.m_autoSizeTextContainer = !!i1603[22]
  i1602.m_IsTextObjectScaleStatic = !!i1603[23]
  var i1607 = i1603[24]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 1, i1606, '')
  }
  i1602.m_fallbackFontAssets = i1606
  i1602.m_matchMaterialPreset = !!i1603[25]
  i1602.m_HideSubTextObjects = !!i1603[26]
  request.r(i1603[27], i1603[28], 0, i1602, 'm_defaultSpriteAsset')
  i1602.m_defaultSpriteAssetPath = i1603[29]
  i1602.m_enableEmojiSupport = !!i1603[30]
  i1602.m_MissingCharacterSpriteUnicode = i1603[31]
  var i1609 = i1603[32]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1602.m_EmojiFallbackTextAssets = i1608
  i1602.m_defaultColorGradientPresetsPath = i1603[33]
  request.r(i1603[34], i1603[35], 0, i1602, 'm_defaultStyleSheet')
  i1602.m_StyleSheetsResourcePath = i1603[36]
  request.r(i1603[37], i1603[38], 0, i1602, 'm_leadingCharacters')
  request.r(i1603[39], i1603[40], 0, i1602, 'm_followingCharacters')
  i1602.m_UseModernHangulLineBreakingRules = !!i1603[41]
  return i1602
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1613 = data
  i1612.m_GlyphIndex = i1613[0]
  i1612.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1613[1], i1612.m_GlyphValueRecord)
  return i1612
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1615 = data
  i1614.m_XPlacement = i1615[0]
  i1614.m_YPlacement = i1615[1]
  i1614.m_XAdvance = i1615[2]
  i1614.m_YAdvance = i1615[3]
  return i1614
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1616 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'spriteSheet')
  var i1619 = i1617[2]
  var i1618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.add(request.d('TMPro.TMP_Sprite', i1619[i + 0]));
  }
  i1616.spriteInfoList = i1618
  var i1621 = i1617[3]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1621.length; i += 2) {
  request.r(i1621[i + 0], i1621[i + 1], 1, i1620, '')
  }
  i1616.fallbackSpriteAssets = i1620
  var i1623 = i1617[4]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.add(request.d('TMPro.TMP_SpriteCharacter', i1623[i + 0]));
  }
  i1616.m_SpriteCharacterTable = i1622
  var i1625 = i1617[5]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('TMPro.TMP_SpriteGlyph', i1625[i + 0]));
  }
  i1616.m_GlyphTable = i1624
  i1616.m_Version = i1617[6]
  i1616.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1617[7], i1616.m_FaceInfo)
  request.r(i1617[8], i1617[9], 0, i1616, 'm_Material')
  return i1616
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1629 = data
  i1628.name = i1629[0]
  i1628.hashCode = i1629[1]
  i1628.unicode = i1629[2]
  i1628.pivot = new pc.Vec2( i1629[3], i1629[4] )
  request.r(i1629[5], i1629[6], 0, i1628, 'sprite')
  i1628.id = i1629[7]
  i1628.x = i1629[8]
  i1628.y = i1629[9]
  i1628.width = i1629[10]
  i1628.height = i1629[11]
  i1628.xOffset = i1629[12]
  i1628.yOffset = i1629[13]
  i1628.xAdvance = i1629[14]
  i1628.scale = i1629[15]
  return i1628
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1635 = data
  i1634.m_Name = i1635[0]
  i1634.m_ElementType = i1635[1]
  i1634.m_Unicode = i1635[2]
  i1634.m_GlyphIndex = i1635[3]
  i1634.m_Scale = i1635[4]
  return i1634
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'sprite')
  i1638.m_Index = i1639[2]
  i1638.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1639[3], i1638.m_Metrics)
  i1638.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1639[4], i1638.m_GlyphRect)
  i1638.m_Scale = i1639[5]
  i1638.m_AtlasIndex = i1639[6]
  i1638.m_ClassDefinitionType = i1639[7]
  return i1638
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1640 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1641 = data
  var i1643 = i1641[0]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('TMPro.TMP_Style', i1643[i + 0]));
  }
  i1640.m_StyleList = i1642
  return i1640
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_Style' )
  var i1647 = data
  i1646.m_Name = i1647[0]
  i1646.m_HashCode = i1647[1]
  i1646.m_OpeningDefinition = i1647[2]
  i1646.m_ClosingDefinition = i1647[3]
  i1646.m_OpeningTagArray = i1647[4]
  i1646.m_ClosingTagArray = i1647[5]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1651[i + 0]) );
  }
  i1648.files = i1650
  i1648.componentToPrefabIds = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1655 = data
  i1654.path = i1655[0]
  request.r(i1655[1], i1655[2], 0, i1654, 'unityObject')
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1659[i + 0]) );
  }
  i1656.scriptsExecutionOrder = i1658
  var i1661 = i1657[1]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1661[i + 0]) );
  }
  i1656.sortingLayers = i1660
  var i1663 = i1657[2]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1663[i + 0]) );
  }
  i1656.cullingLayers = i1662
  i1656.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1657[3], i1656.timeSettings)
  i1656.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1657[4], i1656.physicsSettings)
  i1656.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1657[5], i1656.physics2DSettings)
  i1656.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1657[6], i1656.qualitySettings)
  i1656.enableRealtimeShadows = !!i1657[7]
  i1656.enableAutoInstancing = !!i1657[8]
  i1656.enableStaticBatching = !!i1657[9]
  i1656.enableDynamicBatching = !!i1657[10]
  i1656.usePreservativeDynamicBatching = !!i1657[11]
  i1656.lightmapEncodingQuality = i1657[12]
  i1656.desiredColorSpace = i1657[13]
  var i1665 = i1657[14]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( i1665[i + 0] );
  }
  i1656.allTags = i1664
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.value = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1673 = data
  i1672.id = i1673[0]
  i1672.name = i1673[1]
  i1672.value = i1673[2]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1677 = data
  i1676.id = i1677[0]
  i1676.name = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1679 = data
  i1678.fixedDeltaTime = i1679[0]
  i1678.maximumDeltaTime = i1679[1]
  i1678.timeScale = i1679[2]
  i1678.maximumParticleTimestep = i1679[3]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1681 = data
  i1680.gravity = new pc.Vec3( i1681[0], i1681[1], i1681[2] )
  i1680.defaultSolverIterations = i1681[3]
  i1680.bounceThreshold = i1681[4]
  i1680.autoSyncTransforms = !!i1681[5]
  i1680.autoSimulation = !!i1681[6]
  var i1683 = i1681[7]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1683[i + 0]) );
  }
  i1680.collisionMatrix = i1682
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.layerId = i1687[1]
  i1686.otherLayerId = i1687[2]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'material')
  i1688.gravity = new pc.Vec2( i1689[2], i1689[3] )
  i1688.positionIterations = i1689[4]
  i1688.velocityIterations = i1689[5]
  i1688.velocityThreshold = i1689[6]
  i1688.maxLinearCorrection = i1689[7]
  i1688.maxAngularCorrection = i1689[8]
  i1688.maxTranslationSpeed = i1689[9]
  i1688.maxRotationSpeed = i1689[10]
  i1688.baumgarteScale = i1689[11]
  i1688.baumgarteTOIScale = i1689[12]
  i1688.timeToSleep = i1689[13]
  i1688.linearSleepTolerance = i1689[14]
  i1688.angularSleepTolerance = i1689[15]
  i1688.defaultContactOffset = i1689[16]
  i1688.autoSimulation = !!i1689[17]
  i1688.queriesHitTriggers = !!i1689[18]
  i1688.queriesStartInColliders = !!i1689[19]
  i1688.callbacksOnDisable = !!i1689[20]
  i1688.reuseCollisionCallbacks = !!i1689[21]
  i1688.autoSyncTransforms = !!i1689[22]
  var i1691 = i1689[23]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1691[i + 0]) );
  }
  i1688.collisionMatrix = i1690
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.layerId = i1695[1]
  i1694.otherLayerId = i1695[2]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1699[i + 0]) );
  }
  i1696.qualityLevels = i1698
  var i1701 = i1697[1]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1696.names = i1700
  i1696.shadows = i1697[2]
  i1696.anisotropicFiltering = i1697[3]
  i1696.antiAliasing = i1697[4]
  i1696.lodBias = i1697[5]
  i1696.shadowCascades = i1697[6]
  i1696.shadowDistance = i1697[7]
  i1696.shadowmaskMode = i1697[8]
  i1696.shadowProjection = i1697[9]
  i1696.shadowResolution = i1697[10]
  i1696.softParticles = !!i1697[11]
  i1696.softVegetation = !!i1697[12]
  i1696.activeColorSpace = i1697[13]
  i1696.desiredColorSpace = i1697[14]
  i1696.masterTextureLimit = i1697[15]
  i1696.maxQueuedFrames = i1697[16]
  i1696.particleRaycastBudget = i1697[17]
  i1696.pixelLightCount = i1697[18]
  i1696.realtimeReflectionProbes = !!i1697[19]
  i1696.shadowCascade2Split = i1697[20]
  i1696.shadowCascade4Split = new pc.Vec3( i1697[21], i1697[22], i1697[23] )
  i1696.streamingMipmapsActive = !!i1697[24]
  i1696.vSyncCount = i1697[25]
  i1696.asyncUploadBufferSize = i1697[26]
  i1696.asyncUploadTimeSlice = i1697[27]
  i1696.billboardsFaceCameraPosition = !!i1697[28]
  i1696.shadowNearPlaneOffset = i1697[29]
  i1696.streamingMipmapsMemoryBudget = i1697[30]
  i1696.maximumLODLevel = i1697[31]
  i1696.streamingMipmapsAddAllCameras = !!i1697[32]
  i1696.streamingMipmapsMaxLevelReduction = i1697[33]
  i1696.streamingMipmapsRenderersPerFrame = i1697[34]
  i1696.resolutionScalingFixedDPIFactor = i1697[35]
  i1696.streamingMipmapsMaxFileIORequests = i1697[36]
  i1696.currentQualityLevel = i1697[37]
  return i1696
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'm_ObjectArgument')
  i1704.m_ObjectArgumentAssemblyTypeName = i1705[2]
  i1704.m_IntArgument = i1705[3]
  i1704.m_FloatArgument = i1705[4]
  i1704.m_StringArgument = i1705[5]
  i1704.m_BoolArgument = !!i1705[6]
  return i1704
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1707 = data
  i1706.m_XCoordinate = i1707[0]
  i1706.m_YCoordinate = i1707[1]
  return i1706
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1709 = data
  i1708.m_XPositionAdjustment = i1709[0]
  i1708.m_YPositionAdjustment = i1709[1]
  return i1708
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1711 = data
  i1710.xPlacement = i1711[0]
  i1710.yPlacement = i1711[1]
  i1710.xAdvance = i1711[2]
  i1710.yAdvance = i1711[3]
  return i1710
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[2],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"8":[7],"67":[2],"68":[13],"69":[70],"71":[2],"72":[73],"74":[5],"75":[8],"76":[7],"77":[63,7],"16":[7,11],"78":[7],"79":[11,7],"80":[63],"81":[11,7],"82":[7],"83":[84],"85":[84],"86":[84],"87":[7],"88":[7],"10":[8],"13":[11,7],"89":[7],"9":[8],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"19":[7],"97":[7],"12":[11,7],"98":[7],"99":[7],"15":[7],"100":[7],"101":[11,7],"102":[7],"103":[5],"104":[5],"6":[5],"105":[5],"106":[2],"107":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.ScrollRect","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.UI.Mask","UnityEngine.UI.Button","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","MelonAd.WeaponInventoryPLA","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MelonAd.CameraFit","MelonAd.CtaOverlay","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "35.8";

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

Deserializers.buildID = "f1b45d5d-c357-4062-85fa-29f0c9c4093a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

