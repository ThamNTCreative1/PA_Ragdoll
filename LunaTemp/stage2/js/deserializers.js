var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSpring' )
  var i1453 = data
  i1452.spring = i1453[0]
  i1452.damper = i1453[1]
  i1452.targetPosition = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointMotor' )
  var i1455 = data
  i1454.m_TargetVelocity = i1455[0]
  i1454.m_Force = i1455[1]
  i1454.m_FreeSpin = i1455[2]
  return i1454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.JointLimits' )
  var i1457 = data
  i1456.m_Min = i1457[0]
  i1456.m_Max = i1457[1]
  i1456.m_Bounciness = i1457[2]
  i1456.m_BounceMinVelocity = i1457[3]
  i1456.m_ContactDistance = i1457[4]
  i1456.minBounce = i1457[5]
  i1456.maxBounce = i1457[6]
  return i1456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointDrive' )
  var i1459 = data
  i1458.m_PositionSpring = i1459[0]
  i1458.m_PositionDamper = i1459[1]
  i1458.m_MaximumForce = i1459[2]
  i1458.m_UseAcceleration = i1459[3]
  return i1458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1461 = data
  i1460.m_Spring = i1461[0]
  i1460.m_Damper = i1461[1]
  return i1460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1463 = data
  i1462.m_Limit = i1463[0]
  i1462.m_Bounciness = i1463[1]
  i1462.m_ContactDistance = i1463[2]
  return i1462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1465 = data
  i1464.m_ExtremumSlip = i1465[0]
  i1464.m_ExtremumValue = i1465[1]
  i1464.m_AsymptoteSlip = i1465[2]
  i1464.m_AsymptoteValue = i1465[3]
  i1464.m_Stiffness = i1465[4]
  return i1464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1467 = data
  i1466.m_LowerAngle = i1467[0]
  i1466.m_UpperAngle = i1467[1]
  return i1466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1469 = data
  i1468.m_MotorSpeed = i1469[0]
  i1468.m_MaximumMotorTorque = i1469[1]
  return i1468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1471 = data
  i1470.m_DampingRatio = i1471[0]
  i1470.m_Frequency = i1471[1]
  i1470.m_Angle = i1471[2]
  return i1470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1473 = data
  i1472.m_LowerTranslation = i1473[0]
  i1472.m_UpperTranslation = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1474 = root || new pc.UnityMaterial()
  var i1475 = data
  i1474.name = i1475[0]
  request.r(i1475[1], i1475[2], 0, i1474, 'shader')
  i1474.renderQueue = i1475[3]
  i1474.enableInstancing = !!i1475[4]
  var i1477 = i1475[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1477[i + 0]) );
  }
  i1474.floatParameters = i1476
  var i1479 = i1475[6]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1479[i + 0]) );
  }
  i1474.colorParameters = i1478
  var i1481 = i1475[7]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1481[i + 0]) );
  }
  i1474.vectorParameters = i1480
  var i1483 = i1475[8]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1483[i + 0]) );
  }
  i1474.textureParameters = i1482
  var i1485 = i1475[9]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1485[i + 0]) );
  }
  i1474.materialFlags = i1484
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.value = i1489[1]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.value = new pc.Color(i1493[1], i1493[2], i1493[3], i1493[4])
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.value = new pc.Vec4( i1497[1], i1497[2], i1497[3], i1497[4] )
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1501 = data
  i1500.name = i1501[0]
  request.r(i1501[1], i1501[2], 0, i1500, 'value')
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.enabled = !!i1505[1]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.width = i1507[1]
  i1506.height = i1507[2]
  i1506.mipmapCount = i1507[3]
  i1506.anisoLevel = i1507[4]
  i1506.filterMode = i1507[5]
  i1506.hdr = !!i1507[6]
  i1506.format = i1507[7]
  i1506.wrapMode = i1507[8]
  i1506.alphaIsTransparency = !!i1507[9]
  i1506.alphaSource = i1507[10]
  i1506.graphicsFormat = i1507[11]
  i1506.sRGBTexture = !!i1507[12]
  i1506.desiredColorSpace = i1507[13]
  i1506.wrapU = i1507[14]
  i1506.wrapV = i1507[15]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1509 = data
  i1508.position = new pc.Vec3( i1509[0], i1509[1], i1509[2] )
  i1508.scale = new pc.Vec3( i1509[3], i1509[4], i1509[5] )
  i1508.rotation = new pc.Quat(i1509[6], i1509[7], i1509[8], i1509[9])
  return i1508
}

Deserializers["MelonSandbox.MelonRagdoll"] = function (request, data, root) {
  var i1510 = root || request.c( 'MelonSandbox.MelonRagdoll' )
  var i1511 = data
  i1510.skinName = i1511[0]
  i1510.life = i1511[1]
  i1510.hits = i1511[2]
  i1510.dead = !!i1511[3]
  i1510.targetGroup = i1511[4]
  i1510.parade = !!i1511[5]
  request.r(i1511[6], i1511[7], 0, i1510, 'game')
  var i1513 = i1511[8]
  var i1512 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonLimb')))
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 1, i1512, '')
  }
  i1510.limbs = i1512
  var i1515 = i1511[9]
  var i1514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1515.length; i += 2) {
  request.r(i1515[i + 0], i1515[i + 1], 1, i1514, '')
  }
  i1510.supports = i1514
  return i1510
}

Deserializers["MelonSandbox.MelonLimb"] = function (request, data, root) {
  var i1520 = root || request.c( 'MelonSandbox.MelonLimb' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'owner')
  i1520.partName = i1521[2]
  request.r(i1521[3], i1521[4], 0, i1520, 'body')
  request.r(i1521[5], i1521[6], 0, i1520, 'skin')
  request.r(i1521[7], i1521[8], 0, i1520, 'inner')
  i1520.dimensions = new pc.Vec2( i1521[9], i1521[10] )
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1523 = data
  i1522.bodyType = i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'material')
  i1522.simulated = !!i1523[3]
  i1522.useAutoMass = !!i1523[4]
  i1522.mass = i1523[5]
  i1522.drag = i1523[6]
  i1522.angularDrag = i1523[7]
  i1522.gravityScale = i1523[8]
  i1522.collisionDetectionMode = i1523[9]
  i1522.sleepMode = i1523[10]
  i1522.constraints = i1523[11]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1525 = data
  i1524.usedByComposite = !!i1525[0]
  i1524.autoTiling = !!i1525[1]
  i1524.size = new pc.Vec2( i1525[2], i1525[3] )
  i1524.edgeRadius = i1525[4]
  i1524.enabled = !!i1525[5]
  i1524.isTrigger = !!i1525[6]
  i1524.usedByEffector = !!i1525[7]
  i1524.density = i1525[8]
  i1524.offset = new pc.Vec2( i1525[9], i1525[10] )
  request.r(i1525[11], i1525[12], 0, i1524, 'material')
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1527 = data
  i1526.useLimits = !!i1527[0]
  i1526.limits = request.d('UnityEngine.JointAngleLimits2D', i1527[1], i1526.limits)
  i1526.useMotor = !!i1527[2]
  i1526.motor = request.d('UnityEngine.JointMotor2D', i1527[3], i1526.motor)
  i1526.anchor = new pc.Vec2( i1527[4], i1527[5] )
  i1526.connectedAnchor = new pc.Vec2( i1527[6], i1527[7] )
  i1526.autoConfigureConnectedAnchor = !!i1527[8]
  request.r(i1527[9], i1527[10], 0, i1526, 'connectedBody')
  i1526.breakForce = i1527[11]
  i1526.breakTorque = i1527[12]
  i1526.enableCollision = !!i1527[13]
  i1526.enabled = !!i1527[14]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1529 = data
  i1528.color = new pc.Color(i1529[0], i1529[1], i1529[2], i1529[3])
  request.r(i1529[4], i1529[5], 0, i1528, 'sprite')
  i1528.flipX = !!i1529[6]
  i1528.flipY = !!i1529[7]
  i1528.drawMode = i1529[8]
  i1528.size = new pc.Vec2( i1529[9], i1529[10] )
  i1528.tileMode = i1529[11]
  i1528.adaptiveModeThreshold = i1529[12]
  i1528.maskInteraction = i1529[13]
  i1528.spriteSortPoint = i1529[14]
  i1528.enabled = !!i1529[15]
  request.r(i1529[16], i1529[17], 0, i1528, 'sharedMaterial')
  var i1531 = i1529[18]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 2, i1530, '')
  }
  i1528.sharedMaterials = i1530
  i1528.receiveShadows = !!i1529[19]
  i1528.shadowCastingMode = i1529[20]
  i1528.sortingLayerID = i1529[21]
  i1528.sortingOrder = i1529[22]
  i1528.lightmapIndex = i1529[23]
  i1528.lightmapSceneIndex = i1529[24]
  i1528.lightmapScaleOffset = new pc.Vec4( i1529[25], i1529[26], i1529[27], i1529[28] )
  i1528.lightProbeUsage = i1529[29]
  i1528.reflectionProbeUsage = i1529[30]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.tagId = i1535[1]
  i1534.enabled = !!i1535[2]
  i1534.isStatic = !!i1535[3]
  i1534.layer = i1535[4]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1537 = data
  i1536.autoConfigureTarget = !!i1537[0]
  i1536.target = new pc.Vec2( i1537[1], i1537[2] )
  i1536.anchor = new pc.Vec2( i1537[3], i1537[4] )
  i1536.maxForce = i1537[5]
  i1536.dampingRatio = i1537[6]
  i1536.frequency = i1537[7]
  request.r(i1537[8], i1537[9], 0, i1536, 'connectedBody')
  i1536.breakForce = i1537[10]
  i1536.breakTorque = i1537[11]
  i1536.enableCollision = !!i1537[12]
  i1536.enabled = !!i1537[13]
  return i1536
}

Deserializers["MelonSandbox.MelonTool"] = function (request, data, root) {
  var i1538 = root || request.c( 'MelonSandbox.MelonTool' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'game')
  i1538.kind = i1539[2]
  request.r(i1539[3], i1539[4], 0, i1538, 'body')
  request.r(i1539[5], i1539[6], 0, i1538, 'intendedTarget')
  i1538.held = !!i1539[7]
  i1538.used = !!i1539[8]
  request.r(i1539[9], i1539[10], 0, i1538, 'blade')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.index = i1541[1]
  i1540.startup = !!i1541[2]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1543 = data
  i1542.aspect = i1543[0]
  i1542.orthographic = !!i1543[1]
  i1542.orthographicSize = i1543[2]
  i1542.backgroundColor = new pc.Color(i1543[3], i1543[4], i1543[5], i1543[6])
  i1542.nearClipPlane = i1543[7]
  i1542.farClipPlane = i1543[8]
  i1542.fieldOfView = i1543[9]
  i1542.depth = i1543[10]
  i1542.clearFlags = i1543[11]
  i1542.cullingMask = i1543[12]
  i1542.rect = i1543[13]
  request.r(i1543[14], i1543[15], 0, i1542, 'targetTexture')
  i1542.usePhysicalProperties = !!i1543[16]
  i1542.focalLength = i1543[17]
  i1542.sensorSize = new pc.Vec2( i1543[18], i1543[19] )
  i1542.lensShift = new pc.Vec2( i1543[20], i1543[21] )
  i1542.gateFit = i1543[22]
  i1542.commandBufferCount = i1543[23]
  i1542.cameraType = i1543[24]
  i1542.enabled = !!i1543[25]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1545 = data
  i1544.type = i1545[0]
  i1544.color = new pc.Color(i1545[1], i1545[2], i1545[3], i1545[4])
  i1544.cullingMask = i1545[5]
  i1544.intensity = i1545[6]
  i1544.range = i1545[7]
  i1544.spotAngle = i1545[8]
  i1544.shadows = i1545[9]
  i1544.shadowNormalBias = i1545[10]
  i1544.shadowBias = i1545[11]
  i1544.shadowStrength = i1545[12]
  i1544.shadowResolution = i1545[13]
  i1544.lightmapBakeType = i1545[14]
  i1544.renderMode = i1545[15]
  request.r(i1545[16], i1545[17], 0, i1544, 'cookie')
  i1544.cookieSize = i1545[18]
  i1544.shadowNearPlane = i1545[19]
  i1544.occlusionMaskChannel = i1545[20]
  i1544.isBaked = !!i1545[21]
  i1544.mixedLightingMode = i1545[22]
  i1544.enabled = !!i1545[23]
  return i1544
}

Deserializers["MelonSandbox.MelonGame"] = function (request, data, root) {
  var i1546 = root || request.c( 'MelonSandbox.MelonGame' )
  var i1547 = data
  i1546.appLovin = !!i1547[0]
  i1546.muteSfxAndReplaceMusic = !!i1547[1]
  i1546.stageOneArmsDown = !!i1547[2]
  i1546.coverSprunkyOnHit = !!i1547[3]
  i1546.mosaicPadding = i1547[4]
  request.r(i1547[5], i1547[6], 0, i1546, 'assets')
  request.r(i1547[7], i1547[8], 0, i1546, 'gameBanner')
  request.r(i1547[9], i1547[10], 0, i1546, 'portraitBannerTitle')
  request.r(i1547[11], i1547[12], 0, i1546, 'landscapeBannerTitle')
  i1546.startingStage = i1547[13]
  request.r(i1547[14], i1547[15], 0, i1546, 'gameCamera')
  var i1549 = i1547[16]
  var i1548 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonRagdoll')))
  for(var i = 0; i < i1549.length; i += 2) {
  request.r(i1549[i + 0], i1549[i + 1], 1, i1548, '')
  }
  i1546.characters = i1548
  var i1551 = i1547[17]
  var i1550 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonTool')))
  for(var i = 0; i < i1551.length; i += 2) {
  request.r(i1551[i + 0], i1551[i + 1], 1, i1550, '')
  }
  i1546.tools = i1550
  request.r(i1547[18], i1547[19], 0, i1546, 'world')
  request.r(i1547[20], i1547[21], 0, i1546, 'hud')
  request.r(i1547[22], i1547[23], 0, i1546, 'background')
  var i1553 = i1547[24]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 2, i1552, '')
  }
  i1546.sceneStages = i1552
  return i1546
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i1560 = root || request.c( 'Playable.GameManager' )
  var i1561 = data
  i1560._totalEvent = i1561[0]
  i1560._endTime = i1561[1]
  request.r(i1561[2], i1561[3], 0, i1560, '_backgroundMusic')
  request.r(i1561[4], i1561[5], 0, i1560, '_backgroundTexture')
  request.r(i1561[6], i1561[7], 0, i1560, '_btnBlock')
  request.r(i1561[8], i1561[9], 0, i1560, '_background')
  return i1560
}

Deserializers["MelonSandbox.MelonStage"] = function (request, data, root) {
  var i1562 = root || request.c( 'MelonSandbox.MelonStage' )
  var i1563 = data
  var i1565 = i1563[0]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 2) {
  request.r(i1565[i + 0], i1565[i + 1], 2, i1564, '')
  }
  i1562.characters = i1564
  var i1567 = i1563[1]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1562.tools = i1566
  request.r(i1563[2], i1563[3], 0, i1562, 'background')
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'animatorController')
  request.r(i1573[2], i1573[3], 0, i1572, 'avatar')
  i1572.updateMode = i1573[4]
  i1572.hasTransformHierarchy = !!i1573[5]
  i1572.applyRootMotion = !!i1573[6]
  var i1575 = i1573[7]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 2, i1574, '')
  }
  i1572.humanBones = i1574
  i1572.enabled = !!i1573[8]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1579 = data
  i1578.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1579[0], i1578.main)
  i1578.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1579[1], i1578.colorBySpeed)
  i1578.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1579[2], i1578.colorOverLifetime)
  i1578.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1579[3], i1578.emission)
  i1578.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1579[4], i1578.rotationBySpeed)
  i1578.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1579[5], i1578.rotationOverLifetime)
  i1578.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1579[6], i1578.shape)
  i1578.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1579[7], i1578.sizeBySpeed)
  i1578.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1579[8], i1578.sizeOverLifetime)
  i1578.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1579[9], i1578.textureSheetAnimation)
  i1578.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1579[10], i1578.velocityOverLifetime)
  i1578.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1579[11], i1578.noise)
  i1578.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1579[12], i1578.inheritVelocity)
  i1578.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1579[13], i1578.forceOverLifetime)
  i1578.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1579[14], i1578.limitVelocityOverLifetime)
  i1578.useAutoRandomSeed = !!i1579[15]
  i1578.randomSeed = i1579[16]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemMain()
  var i1581 = data
  i1580.duration = i1581[0]
  i1580.loop = !!i1581[1]
  i1580.prewarm = !!i1581[2]
  i1580.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[3], i1580.startDelay)
  i1580.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[4], i1580.startLifetime)
  i1580.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[5], i1580.startSpeed)
  i1580.startSize3D = !!i1581[6]
  i1580.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[7], i1580.startSizeX)
  i1580.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[8], i1580.startSizeY)
  i1580.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[9], i1580.startSizeZ)
  i1580.startRotation3D = !!i1581[10]
  i1580.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[11], i1580.startRotationX)
  i1580.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[12], i1580.startRotationY)
  i1580.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[13], i1580.startRotationZ)
  i1580.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1581[14], i1580.startColor)
  i1580.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[15], i1580.gravityModifier)
  i1580.simulationSpace = i1581[16]
  request.r(i1581[17], i1581[18], 0, i1580, 'customSimulationSpace')
  i1580.simulationSpeed = i1581[19]
  i1580.useUnscaledTime = !!i1581[20]
  i1580.scalingMode = i1581[21]
  i1580.playOnAwake = !!i1581[22]
  i1580.maxParticles = i1581[23]
  i1580.emitterVelocityMode = i1581[24]
  i1580.stopAction = i1581[25]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1582 = root || new pc.MinMaxCurve()
  var i1583 = data
  i1582.mode = i1583[0]
  i1582.curveMin = new pc.AnimationCurve( { keys_flow: i1583[1] } )
  i1582.curveMax = new pc.AnimationCurve( { keys_flow: i1583[2] } )
  i1582.curveMultiplier = i1583[3]
  i1582.constantMin = i1583[4]
  i1582.constantMax = i1583[5]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1584 = root || new pc.MinMaxGradient()
  var i1585 = data
  i1584.mode = i1585[0]
  i1584.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1585[1], i1584.gradientMin)
  i1584.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1585[2], i1584.gradientMax)
  i1584.colorMin = new pc.Color(i1585[3], i1585[4], i1585[5], i1585[6])
  i1584.colorMax = new pc.Color(i1585[7], i1585[8], i1585[9], i1585[10])
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1587 = data
  i1586.mode = i1587[0]
  var i1589 = i1587[1]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1589[i + 0]) );
  }
  i1586.colorKeys = i1588
  var i1591 = i1587[2]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1591[i + 0]) );
  }
  i1586.alphaKeys = i1590
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1592 = root || new pc.ParticleSystemColorBySpeed()
  var i1593 = data
  i1592.enabled = !!i1593[0]
  i1592.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1593[1], i1592.color)
  i1592.range = new pc.Vec2( i1593[2], i1593[3] )
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1597 = data
  i1596.color = new pc.Color(i1597[0], i1597[1], i1597[2], i1597[3])
  i1596.time = i1597[4]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1601 = data
  i1600.alpha = i1601[0]
  i1600.time = i1601[1]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1602 = root || new pc.ParticleSystemColorOverLifetime()
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1603[1], i1602.color)
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1604 = root || new pc.ParticleSystemEmitter()
  var i1605 = data
  i1604.enabled = !!i1605[0]
  i1604.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[1], i1604.rateOverTime)
  i1604.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[2], i1604.rateOverDistance)
  var i1607 = i1605[3]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1607[i + 0]) );
  }
  i1604.bursts = i1606
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1610 = root || new pc.ParticleSystemBurst()
  var i1611 = data
  i1610.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1611[0], i1610.count)
  i1610.cycleCount = i1611[1]
  i1610.minCount = i1611[2]
  i1610.maxCount = i1611[3]
  i1610.repeatInterval = i1611[4]
  i1610.time = i1611[5]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1612 = root || new pc.ParticleSystemRotationBySpeed()
  var i1613 = data
  i1612.enabled = !!i1613[0]
  i1612.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1613[1], i1612.x)
  i1612.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1613[2], i1612.y)
  i1612.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1613[3], i1612.z)
  i1612.separateAxes = !!i1613[4]
  i1612.range = new pc.Vec2( i1613[5], i1613[6] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1614 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1615 = data
  i1614.enabled = !!i1615[0]
  i1614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[1], i1614.x)
  i1614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[2], i1614.y)
  i1614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1615[3], i1614.z)
  i1614.separateAxes = !!i1615[4]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1616 = root || new pc.ParticleSystemShape()
  var i1617 = data
  i1616.enabled = !!i1617[0]
  i1616.shapeType = i1617[1]
  i1616.randomDirectionAmount = i1617[2]
  i1616.sphericalDirectionAmount = i1617[3]
  i1616.randomPositionAmount = i1617[4]
  i1616.alignToDirection = !!i1617[5]
  i1616.radius = i1617[6]
  i1616.radiusMode = i1617[7]
  i1616.radiusSpread = i1617[8]
  i1616.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1617[9], i1616.radiusSpeed)
  i1616.radiusThickness = i1617[10]
  i1616.angle = i1617[11]
  i1616.length = i1617[12]
  i1616.boxThickness = new pc.Vec3( i1617[13], i1617[14], i1617[15] )
  i1616.meshShapeType = i1617[16]
  request.r(i1617[17], i1617[18], 0, i1616, 'mesh')
  request.r(i1617[19], i1617[20], 0, i1616, 'meshRenderer')
  request.r(i1617[21], i1617[22], 0, i1616, 'skinnedMeshRenderer')
  i1616.useMeshMaterialIndex = !!i1617[23]
  i1616.meshMaterialIndex = i1617[24]
  i1616.useMeshColors = !!i1617[25]
  i1616.normalOffset = i1617[26]
  i1616.arc = i1617[27]
  i1616.arcMode = i1617[28]
  i1616.arcSpread = i1617[29]
  i1616.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1617[30], i1616.arcSpeed)
  i1616.donutRadius = i1617[31]
  i1616.position = new pc.Vec3( i1617[32], i1617[33], i1617[34] )
  i1616.rotation = new pc.Vec3( i1617[35], i1617[36], i1617[37] )
  i1616.scale = new pc.Vec3( i1617[38], i1617[39], i1617[40] )
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1618 = root || new pc.ParticleSystemSizeBySpeed()
  var i1619 = data
  i1618.enabled = !!i1619[0]
  i1618.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1619[1], i1618.x)
  i1618.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1619[2], i1618.y)
  i1618.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1619[3], i1618.z)
  i1618.separateAxes = !!i1619[4]
  i1618.range = new pc.Vec2( i1619[5], i1619[6] )
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1620 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[1], i1620.x)
  i1620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[2], i1620.y)
  i1620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[3], i1620.z)
  i1620.separateAxes = !!i1621[4]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1622 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1623 = data
  i1622.enabled = !!i1623[0]
  i1622.mode = i1623[1]
  i1622.animation = i1623[2]
  i1622.numTilesX = i1623[3]
  i1622.numTilesY = i1623[4]
  i1622.useRandomRow = !!i1623[5]
  i1622.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[6], i1622.frameOverTime)
  i1622.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1623[7], i1622.startFrame)
  i1622.cycleCount = i1623[8]
  i1622.rowIndex = i1623[9]
  i1622.flipU = i1623[10]
  i1622.flipV = i1623[11]
  i1622.spriteCount = i1623[12]
  var i1625 = i1623[13]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 2, i1624, '')
  }
  i1622.sprites = i1624
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1628 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[1], i1628.x)
  i1628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[2], i1628.y)
  i1628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[3], i1628.z)
  i1628.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[4], i1628.radial)
  i1628.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[5], i1628.speedModifier)
  i1628.space = i1629[6]
  i1628.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[7], i1628.orbitalX)
  i1628.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[8], i1628.orbitalY)
  i1628.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[9], i1628.orbitalZ)
  i1628.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[10], i1628.orbitalOffsetX)
  i1628.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[11], i1628.orbitalOffsetY)
  i1628.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[12], i1628.orbitalOffsetZ)
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1630 = root || new pc.ParticleSystemNoise()
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.separateAxes = !!i1631[1]
  i1630.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[2], i1630.strengthX)
  i1630.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[3], i1630.strengthY)
  i1630.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[4], i1630.strengthZ)
  i1630.frequency = i1631[5]
  i1630.damping = !!i1631[6]
  i1630.octaveCount = i1631[7]
  i1630.octaveMultiplier = i1631[8]
  i1630.octaveScale = i1631[9]
  i1630.quality = i1631[10]
  i1630.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[11], i1630.scrollSpeed)
  i1630.scrollSpeedMultiplier = i1631[12]
  i1630.remapEnabled = !!i1631[13]
  i1630.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[14], i1630.remapX)
  i1630.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[15], i1630.remapY)
  i1630.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[16], i1630.remapZ)
  i1630.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[17], i1630.positionAmount)
  i1630.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[18], i1630.rotationAmount)
  i1630.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[19], i1630.sizeAmount)
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1632 = root || new pc.ParticleSystemInheritVelocity()
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.mode = i1633[1]
  i1632.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[2], i1632.curve)
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1634 = root || new pc.ParticleSystemForceOverLifetime()
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[1], i1634.x)
  i1634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[2], i1634.y)
  i1634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[3], i1634.z)
  i1634.space = i1635[4]
  i1634.randomized = !!i1635[5]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1636 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[1], i1636.limit)
  i1636.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[2], i1636.limitX)
  i1636.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[3], i1636.limitY)
  i1636.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[4], i1636.limitZ)
  i1636.dampen = i1637[5]
  i1636.separateAxes = !!i1637[6]
  i1636.space = i1637[7]
  i1636.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[8], i1636.drag)
  i1636.multiplyDragByParticleSize = !!i1637[9]
  i1636.multiplyDragByParticleVelocity = !!i1637[10]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'mesh')
  i1638.meshCount = i1639[2]
  i1638.activeVertexStreamsCount = i1639[3]
  i1638.alignment = i1639[4]
  i1638.renderMode = i1639[5]
  i1638.sortMode = i1639[6]
  i1638.lengthScale = i1639[7]
  i1638.velocityScale = i1639[8]
  i1638.cameraVelocityScale = i1639[9]
  i1638.normalDirection = i1639[10]
  i1638.sortingFudge = i1639[11]
  i1638.minParticleSize = i1639[12]
  i1638.maxParticleSize = i1639[13]
  i1638.pivot = new pc.Vec3( i1639[14], i1639[15], i1639[16] )
  request.r(i1639[17], i1639[18], 0, i1638, 'trailMaterial')
  i1638.applyActiveColorSpace = !!i1639[19]
  i1638.enabled = !!i1639[20]
  request.r(i1639[21], i1639[22], 0, i1638, 'sharedMaterial')
  var i1641 = i1639[23]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.sharedMaterials = i1640
  i1638.receiveShadows = !!i1639[24]
  i1638.shadowCastingMode = i1639[25]
  i1638.sortingLayerID = i1639[26]
  i1638.sortingOrder = i1639[27]
  i1638.lightmapIndex = i1639[28]
  i1638.lightmapSceneIndex = i1639[29]
  i1638.lightmapScaleOffset = new pc.Vec4( i1639[30], i1639[31], i1639[32], i1639[33] )
  i1638.lightProbeUsage = i1639[34]
  i1638.reflectionProbeUsage = i1639[35]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1643 = data
  i1642.pivot = new pc.Vec2( i1643[0], i1643[1] )
  i1642.anchorMin = new pc.Vec2( i1643[2], i1643[3] )
  i1642.anchorMax = new pc.Vec2( i1643[4], i1643[5] )
  i1642.sizeDelta = new pc.Vec2( i1643[6], i1643[7] )
  i1642.anchoredPosition3D = new pc.Vec3( i1643[8], i1643[9], i1643[10] )
  i1642.rotation = new pc.Quat(i1643[11], i1643[12], i1643[13], i1643[14])
  i1642.scale = new pc.Vec3( i1643[15], i1643[16], i1643[17] )
  return i1642
}

Deserializers["MelonSandbox.MelonHud"] = function (request, data, root) {
  var i1644 = root || request.c( 'MelonSandbox.MelonHud' )
  var i1645 = data
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1647 = data
  i1646.planeDistance = i1647[0]
  i1646.referencePixelsPerUnit = i1647[1]
  i1646.isFallbackOverlay = !!i1647[2]
  i1646.renderMode = i1647[3]
  i1646.renderOrder = i1647[4]
  i1646.sortingLayerName = i1647[5]
  i1646.sortingOrder = i1647[6]
  i1646.scaleFactor = i1647[7]
  request.r(i1647[8], i1647[9], 0, i1646, 'worldCamera')
  i1646.overrideSorting = !!i1647[10]
  i1646.pixelPerfect = !!i1647[11]
  i1646.targetDisplay = i1647[12]
  i1646.overridePixelPerfect = !!i1647[13]
  i1646.enabled = !!i1647[14]
  return i1646
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1649 = data
  i1648.m_UiScaleMode = i1649[0]
  i1648.m_ReferencePixelsPerUnit = i1649[1]
  i1648.m_ScaleFactor = i1649[2]
  i1648.m_ReferenceResolution = new pc.Vec2( i1649[3], i1649[4] )
  i1648.m_ScreenMatchMode = i1649[5]
  i1648.m_MatchWidthOrHeight = i1649[6]
  i1648.m_PhysicalUnit = i1649[7]
  i1648.m_FallbackScreenDPI = i1649[8]
  i1648.m_DefaultSpriteDPI = i1649[9]
  i1648.m_DynamicPixelsPerUnit = i1649[10]
  i1648.m_PresetInfoIsWorld = !!i1649[11]
  return i1648
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1651 = data
  i1650.m_IgnoreReversedGraphics = !!i1651[0]
  i1650.m_BlockingObjects = i1651[1]
  i1650.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1651[2] )
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1653 = data
  i1652.cullTransparentMesh = !!i1653[0]
  return i1652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.Image' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_Sprite')
  i1654.m_Type = i1655[2]
  i1654.m_PreserveAspect = !!i1655[3]
  i1654.m_FillCenter = !!i1655[4]
  i1654.m_FillMethod = i1655[5]
  i1654.m_FillAmount = i1655[6]
  i1654.m_FillClockwise = !!i1655[7]
  i1654.m_FillOrigin = i1655[8]
  i1654.m_UseSpriteMesh = !!i1655[9]
  i1654.m_PixelsPerUnitMultiplier = i1655[10]
  request.r(i1655[11], i1655[12], 0, i1654, 'm_Material')
  i1654.m_Maskable = !!i1655[13]
  i1654.m_Color = new pc.Color(i1655[14], i1655[15], i1655[16], i1655[17])
  i1654.m_RaycastTarget = !!i1655[18]
  i1654.m_RaycastPadding = new pc.Vec4( i1655[19], i1655[20], i1655[21], i1655[22] )
  return i1654
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.Button' )
  var i1657 = data
  i1656.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1657[0], i1656.m_OnClick)
  i1656.m_Navigation = request.d('UnityEngine.UI.Navigation', i1657[1], i1656.m_Navigation)
  i1656.m_Transition = i1657[2]
  i1656.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1657[3], i1656.m_Colors)
  i1656.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1657[4], i1656.m_SpriteState)
  i1656.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1657[5], i1656.m_AnimationTriggers)
  i1656.m_Interactable = !!i1657[6]
  request.r(i1657[7], i1657[8], 0, i1656, 'm_TargetGraphic')
  return i1656
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1659 = data
  i1658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1659[0], i1658.m_PersistentCalls)
  return i1658
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1661 = data
  var i1663 = i1661[0]
  var i1662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.add(request.d('UnityEngine.Events.PersistentCall', i1663[i + 0]));
  }
  i1660.m_Calls = i1662
  return i1660
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'm_Target')
  i1666.m_TargetAssemblyTypeName = i1667[2]
  i1666.m_MethodName = i1667[3]
  i1666.m_Mode = i1667[4]
  i1666.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1667[5], i1666.m_Arguments)
  i1666.m_CallState = i1667[6]
  return i1666
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1669 = data
  i1668.m_Mode = i1669[0]
  i1668.m_WrapAround = !!i1669[1]
  request.r(i1669[2], i1669[3], 0, i1668, 'm_SelectOnUp')
  request.r(i1669[4], i1669[5], 0, i1668, 'm_SelectOnDown')
  request.r(i1669[6], i1669[7], 0, i1668, 'm_SelectOnLeft')
  request.r(i1669[8], i1669[9], 0, i1668, 'm_SelectOnRight')
  return i1668
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1671 = data
  i1670.m_NormalColor = new pc.Color(i1671[0], i1671[1], i1671[2], i1671[3])
  i1670.m_HighlightedColor = new pc.Color(i1671[4], i1671[5], i1671[6], i1671[7])
  i1670.m_PressedColor = new pc.Color(i1671[8], i1671[9], i1671[10], i1671[11])
  i1670.m_SelectedColor = new pc.Color(i1671[12], i1671[13], i1671[14], i1671[15])
  i1670.m_DisabledColor = new pc.Color(i1671[16], i1671[17], i1671[18], i1671[19])
  i1670.m_ColorMultiplier = i1671[20]
  i1670.m_FadeDuration = i1671[21]
  return i1670
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'm_HighlightedSprite')
  request.r(i1673[2], i1673[3], 0, i1672, 'm_PressedSprite')
  request.r(i1673[4], i1673[5], 0, i1672, 'm_SelectedSprite')
  request.r(i1673[6], i1673[7], 0, i1672, 'm_DisabledSprite')
  return i1672
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1675 = data
  i1674.m_NormalTrigger = i1675[0]
  i1674.m_HighlightedTrigger = i1675[1]
  i1674.m_PressedTrigger = i1675[2]
  i1674.m_SelectedTrigger = i1675[3]
  i1674.m_DisabledTrigger = i1675[4]
  return i1674
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.Text' )
  var i1677 = data
  i1676.m_FontData = request.d('UnityEngine.UI.FontData', i1677[0], i1676.m_FontData)
  i1676.m_Text = i1677[1]
  request.r(i1677[2], i1677[3], 0, i1676, 'm_Material')
  i1676.m_Maskable = !!i1677[4]
  i1676.m_Color = new pc.Color(i1677[5], i1677[6], i1677[7], i1677[8])
  i1676.m_RaycastTarget = !!i1677[9]
  i1676.m_RaycastPadding = new pc.Vec4( i1677[10], i1677[11], i1677[12], i1677[13] )
  return i1676
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_Font')
  i1678.m_FontSize = i1679[2]
  i1678.m_FontStyle = i1679[3]
  i1678.m_BestFit = !!i1679[4]
  i1678.m_MinSize = i1679[5]
  i1678.m_MaxSize = i1679[6]
  i1678.m_Alignment = i1679[7]
  i1678.m_AlignByGeometry = !!i1679[8]
  i1678.m_RichText = !!i1679[9]
  i1678.m_HorizontalOverflow = i1679[10]
  i1678.m_VerticalOverflow = i1679[11]
  i1678.m_LineSpacing = i1679[12]
  return i1678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'm_FirstSelected')
  i1680.m_sendNavigationEvents = !!i1681[2]
  i1680.m_DragThreshold = i1681[3]
  return i1680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1683 = data
  i1682.m_HorizontalAxis = i1683[0]
  i1682.m_VerticalAxis = i1683[1]
  i1682.m_SubmitButton = i1683[2]
  i1682.m_CancelButton = i1683[3]
  i1682.m_InputActionsPerSecond = i1683[4]
  i1682.m_RepeatDelay = i1683[5]
  i1682.m_ForceModuleActive = !!i1683[6]
  i1682.m_SendPointerHoverToParent = !!i1683[7]
  return i1682
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'm_ObjectArgument')
  i1684.m_ObjectArgumentAssemblyTypeName = i1685[2]
  i1684.m_IntArgument = i1685[3]
  i1684.m_FloatArgument = i1685[4]
  i1684.m_StringArgument = i1685[5]
  i1684.m_BoolArgument = !!i1685[6]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1687 = data
  i1686.ambientIntensity = i1687[0]
  i1686.reflectionIntensity = i1687[1]
  i1686.ambientMode = i1687[2]
  i1686.ambientLight = new pc.Color(i1687[3], i1687[4], i1687[5], i1687[6])
  i1686.ambientSkyColor = new pc.Color(i1687[7], i1687[8], i1687[9], i1687[10])
  i1686.ambientGroundColor = new pc.Color(i1687[11], i1687[12], i1687[13], i1687[14])
  i1686.ambientEquatorColor = new pc.Color(i1687[15], i1687[16], i1687[17], i1687[18])
  i1686.fogColor = new pc.Color(i1687[19], i1687[20], i1687[21], i1687[22])
  i1686.fogEndDistance = i1687[23]
  i1686.fogStartDistance = i1687[24]
  i1686.fogDensity = i1687[25]
  i1686.fog = !!i1687[26]
  request.r(i1687[27], i1687[28], 0, i1686, 'skybox')
  i1686.fogMode = i1687[29]
  var i1689 = i1687[30]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1689[i + 0]) );
  }
  i1686.lightmaps = i1688
  i1686.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1687[31], i1686.lightProbes)
  i1686.lightmapsMode = i1687[32]
  i1686.mixedBakeMode = i1687[33]
  i1686.environmentLightingMode = i1687[34]
  i1686.ambientProbe = new pc.SphericalHarmonicsL2(i1687[35])
  request.r(i1687[36], i1687[37], 0, i1686, 'customReflection')
  request.r(i1687[38], i1687[39], 0, i1686, 'defaultReflection')
  i1686.defaultReflectionMode = i1687[40]
  i1686.defaultReflectionResolution = i1687[41]
  i1686.sunLightObjectId = i1687[42]
  i1686.pixelLightCount = i1687[43]
  i1686.defaultReflectionHDR = !!i1687[44]
  i1686.hasLightDataAsset = !!i1687[45]
  i1686.hasManualGenerate = !!i1687[46]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'lightmapColor')
  request.r(i1693[2], i1693[3], 0, i1692, 'lightmapDirection')
  request.r(i1693[4], i1693[5], 0, i1692, 'shadowMask')
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1694 = root || new UnityEngine.LightProbes()
  var i1695 = data
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.bounciness = i1703[1]
  i1702.friction = i1703[2]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1707[i + 0]));
  }
  i1704.ShaderCompilationErrors = i1706
  i1704.name = i1705[1]
  i1704.guid = i1705[2]
  var i1709 = i1705[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1704.shaderDefinedKeywords = i1708
  var i1711 = i1705[4]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1711[i + 0]) );
  }
  i1704.passes = i1710
  var i1713 = i1705[5]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1713[i + 0]) );
  }
  i1704.usePasses = i1712
  var i1715 = i1705[6]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1715[i + 0]) );
  }
  i1704.defaultParameterValues = i1714
  request.r(i1705[7], i1705[8], 0, i1704, 'unityFallbackShader')
  i1704.readDepth = !!i1705[9]
  i1704.hasDepthOnlyPass = !!i1705[10]
  i1704.isCreatedByShaderGraph = !!i1705[11]
  i1704.disableBatching = !!i1705[12]
  i1704.compiled = !!i1705[13]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1719 = data
  i1718.shaderName = i1719[0]
  i1718.errorMessage = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1724 = root || new pc.UnityShaderPass()
  var i1725 = data
  i1724.id = i1725[0]
  i1724.subShaderIndex = i1725[1]
  i1724.name = i1725[2]
  i1724.passType = i1725[3]
  i1724.grabPassTextureName = i1725[4]
  i1724.usePass = !!i1725[5]
  i1724.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[6], i1724.zTest)
  i1724.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[7], i1724.zWrite)
  i1724.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[8], i1724.culling)
  i1724.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1725[9], i1724.blending)
  i1724.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1725[10], i1724.alphaBlending)
  i1724.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[11], i1724.colorWriteMask)
  i1724.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[12], i1724.offsetUnits)
  i1724.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[13], i1724.offsetFactor)
  i1724.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[14], i1724.stencilRef)
  i1724.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[15], i1724.stencilReadMask)
  i1724.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1725[16], i1724.stencilWriteMask)
  i1724.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1725[17], i1724.stencilOp)
  i1724.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1725[18], i1724.stencilOpFront)
  i1724.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1725[19], i1724.stencilOpBack)
  var i1727 = i1725[20]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1727[i + 0]) );
  }
  i1724.tags = i1726
  var i1729 = i1725[21]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( i1729[i + 0] );
  }
  i1724.passDefinedKeywords = i1728
  var i1731 = i1725[22]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1731[i + 0]) );
  }
  i1724.passDefinedKeywordGroups = i1730
  var i1733 = i1725[23]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1733[i + 0]) );
  }
  i1724.variants = i1732
  var i1735 = i1725[24]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1735[i + 0]) );
  }
  i1724.excludedVariants = i1734
  i1724.hasDepthReader = !!i1725[25]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1737 = data
  i1736.val = i1737[0]
  i1736.name = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1739 = data
  i1738.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[0], i1738.src)
  i1738.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[1], i1738.dst)
  i1738.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1739[2], i1738.op)
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1741 = data
  i1740.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[0], i1740.pass)
  i1740.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[1], i1740.fail)
  i1740.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[2], i1740.zFail)
  i1740.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[3], i1740.comp)
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.value = i1745[1]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1749 = data
  var i1751 = i1749[0]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( i1751[i + 0] );
  }
  i1748.keywords = i1750
  i1748.hasDiscard = !!i1749[1]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1755 = data
  i1754.passId = i1755[0]
  i1754.subShaderIndex = i1755[1]
  var i1757 = i1755[2]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1754.keywords = i1756
  i1754.vertexProgram = i1755[3]
  i1754.fragmentProgram = i1755[4]
  i1754.exportedForWebGl2 = !!i1755[5]
  i1754.readDepth = !!i1755[6]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'shader')
  i1760.pass = i1761[2]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.type = i1765[1]
  i1764.value = new pc.Vec4( i1765[2], i1765[3], i1765[4], i1765[5] )
  i1764.textureValue = i1765[6]
  i1764.shaderPropertyFlag = i1765[7]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1767 = data
  i1766.name = i1767[0]
  request.r(i1767[1], i1767[2], 0, i1766, 'texture')
  i1766.aabb = i1767[3]
  i1766.vertices = i1767[4]
  i1766.triangles = i1767[5]
  i1766.textureRect = UnityEngine.Rect.MinMaxRect(i1767[6], i1767[7], i1767[8], i1767[9])
  i1766.packedRect = UnityEngine.Rect.MinMaxRect(i1767[10], i1767[11], i1767[12], i1767[13])
  i1766.border = new pc.Vec4( i1767[14], i1767[15], i1767[16], i1767[17] )
  i1766.transparency = i1767[18]
  i1766.bounds = i1767[19]
  i1766.pixelsPerUnit = i1767[20]
  i1766.textureWidth = i1767[21]
  i1766.textureHeight = i1767[22]
  i1766.nativeSize = new pc.Vec2( i1767[23], i1767[24] )
  i1766.pivot = new pc.Vec2( i1767[25], i1767[26] )
  i1766.textureRectOffset = new pc.Vec2( i1767[27], i1767[28] )
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1769 = data
  i1768.name = i1769[0]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.wrapMode = i1771[1]
  i1770.isLooping = !!i1771[2]
  i1770.length = i1771[3]
  var i1773 = i1771[4]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1773[i + 0]) );
  }
  i1770.curves = i1772
  var i1775 = i1771[5]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1775[i + 0]) );
  }
  i1770.events = i1774
  i1770.halfPrecision = !!i1771[6]
  i1770._frameRate = i1771[7]
  i1770.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1771[8], i1770.localBounds)
  i1770.hasMuscleCurves = !!i1771[9]
  var i1777 = i1771[10]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( i1777[i + 0] );
  }
  i1770.clipMuscleConstant = i1776
  i1770.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1771[11], i1770.clipBindingConstant)
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1781 = data
  i1780.path = i1781[0]
  i1780.hash = i1781[1]
  i1780.componentType = i1781[2]
  i1780.property = i1781[3]
  i1780.keys = i1781[4]
  var i1783 = i1781[5]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1783[i + 0]) );
  }
  i1780.objectReferenceKeys = i1782
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1787 = data
  i1786.time = i1787[0]
  request.r(i1787[1], i1787[2], 0, i1786, 'value')
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1791 = data
  i1790.functionName = i1791[0]
  i1790.floatParameter = i1791[1]
  i1790.intParameter = i1791[2]
  i1790.stringParameter = i1791[3]
  request.r(i1791[4], i1791[5], 0, i1790, 'objectReferenceParameter')
  i1790.time = i1791[6]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1793 = data
  i1792.center = new pc.Vec3( i1793[0], i1793[1], i1793[2] )
  i1792.extends = new pc.Vec3( i1793[3], i1793[4], i1793[5] )
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( i1799[i + 0] );
  }
  i1796.genericBindings = i1798
  var i1801 = i1797[1]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( i1801[i + 0] );
  }
  i1796.pptrCurveMapping = i1800
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.ascent = i1803[1]
  i1802.originalLineHeight = i1803[2]
  i1802.fontSize = i1803[3]
  var i1805 = i1803[4]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1805[i + 0]) );
  }
  i1802.characterInfo = i1804
  request.r(i1803[5], i1803[6], 0, i1802, 'texture')
  i1802.originalFontSize = i1803[7]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1809 = data
  i1808.index = i1809[0]
  i1808.advance = i1809[1]
  i1808.bearing = i1809[2]
  i1808.glyphWidth = i1809[3]
  i1808.glyphHeight = i1809[4]
  i1808.minX = i1809[5]
  i1808.maxX = i1809[6]
  i1808.minY = i1809[7]
  i1808.maxY = i1809[8]
  i1808.uvBottomLeftX = i1809[9]
  i1808.uvBottomLeftY = i1809[10]
  i1808.uvBottomRightX = i1809[11]
  i1808.uvBottomRightY = i1809[12]
  i1808.uvTopLeftX = i1809[13]
  i1808.uvTopLeftY = i1809[14]
  i1808.uvTopRightX = i1809[15]
  i1808.uvTopRightY = i1809[16]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1811 = data
  i1810.name = i1811[0]
  var i1813 = i1811[1]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1813[i + 0]) );
  }
  i1810.layers = i1812
  var i1815 = i1811[2]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1815[i + 0]) );
  }
  i1810.parameters = i1814
  i1810.animationClips = i1811[3]
  i1810.avatarUnsupported = i1811[4]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.defaultWeight = i1819[1]
  i1818.blendingMode = i1819[2]
  i1818.avatarMask = i1819[3]
  i1818.syncedLayerIndex = i1819[4]
  i1818.syncedLayerAffectsTiming = !!i1819[5]
  i1818.syncedLayers = i1819[6]
  i1818.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1819[7], i1818.stateMachine)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1821 = data
  i1820.id = i1821[0]
  i1820.name = i1821[1]
  i1820.path = i1821[2]
  var i1823 = i1821[3]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1823[i + 0]) );
  }
  i1820.states = i1822
  var i1825 = i1821[4]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1825[i + 0]) );
  }
  i1820.machines = i1824
  var i1827 = i1821[5]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1827[i + 0]) );
  }
  i1820.entryStateTransitions = i1826
  var i1829 = i1821[6]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1829[i + 0]) );
  }
  i1820.exitStateTransitions = i1828
  var i1831 = i1821[7]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1831[i + 0]) );
  }
  i1820.anyStateTransitions = i1830
  i1820.defaultStateId = i1821[8]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1835 = data
  i1834.id = i1835[0]
  i1834.name = i1835[1]
  i1834.cycleOffset = i1835[2]
  i1834.cycleOffsetParameter = i1835[3]
  i1834.cycleOffsetParameterActive = !!i1835[4]
  i1834.mirror = !!i1835[5]
  i1834.mirrorParameter = i1835[6]
  i1834.mirrorParameterActive = !!i1835[7]
  i1834.motionId = i1835[8]
  i1834.nameHash = i1835[9]
  i1834.fullPathHash = i1835[10]
  i1834.speed = i1835[11]
  i1834.speedParameter = i1835[12]
  i1834.speedParameterActive = !!i1835[13]
  i1834.tag = i1835[14]
  i1834.tagHash = i1835[15]
  i1834.writeDefaultValues = !!i1835[16]
  var i1837 = i1835[17]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 2) {
  request.r(i1837[i + 0], i1837[i + 1], 2, i1836, '')
  }
  i1834.behaviours = i1836
  var i1839 = i1835[18]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1839[i + 0]) );
  }
  i1834.transitions = i1838
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1845 = data
  i1844.fullPath = i1845[0]
  i1844.canTransitionToSelf = !!i1845[1]
  i1844.duration = i1845[2]
  i1844.exitTime = i1845[3]
  i1844.hasExitTime = !!i1845[4]
  i1844.hasFixedDuration = !!i1845[5]
  i1844.interruptionSource = i1845[6]
  i1844.offset = i1845[7]
  i1844.orderedInterruption = !!i1845[8]
  i1844.destinationStateId = i1845[9]
  i1844.isExit = !!i1845[10]
  i1844.mute = !!i1845[11]
  i1844.solo = !!i1845[12]
  var i1847 = i1845[13]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1847[i + 0]) );
  }
  i1844.conditions = i1846
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1851 = data
  i1850.mode = i1851[0]
  i1850.parameter = i1851[1]
  i1850.threshold = i1851[2]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1857 = data
  i1856.destinationStateId = i1857[0]
  i1856.isExit = !!i1857[1]
  i1856.mute = !!i1857[2]
  i1856.solo = !!i1857[3]
  var i1859 = i1857[4]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1859[i + 0]) );
  }
  i1856.conditions = i1858
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1863 = data
  i1862.defaultBool = !!i1863[0]
  i1862.defaultFloat = i1863[1]
  i1862.defaultInt = i1863[2]
  i1862.name = i1863[3]
  i1862.nameHash = i1863[4]
  i1862.type = i1863[5]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.bytes64 = i1865[1]
  i1864.data = i1865[2]
  return i1864
}

Deserializers["MelonSandbox.MelonAssets"] = function (request, data, root) {
  var i1866 = root || request.c( 'MelonSandbox.MelonAssets' )
  var i1867 = data
  var i1869 = i1867[0]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.sprites = i1868
  var i1871 = i1867[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1866.sounds = i1870
  request.r(i1867[2], i1867[3], 0, i1866, 'originalLayout')
  request.r(i1867[4], i1867[5], 0, i1866, 'damageMaterial')
  request.r(i1867[6], i1867[7], 0, i1866, 'mosaicMaterial')
  request.r(i1867[8], i1867[9], 0, i1866, 'uiFont')
  var i1873 = i1867[10]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 2) {
  request.r(i1873[i + 0], i1873[i + 1], 2, i1872, '')
  }
  i1866.characterPrefabs = i1872
  var i1875 = i1867[11]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 2) {
  request.r(i1875[i + 0], i1875[i + 1], 2, i1874, '')
  }
  i1866.toolPrefabs = i1874
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1881 = data
  var i1883 = i1881[0]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1883[i + 0]) );
  }
  i1880.files = i1882
  i1880.componentToPrefabIds = i1881[1]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1887 = data
  i1886.path = i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'unityObject')
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1889 = data
  var i1891 = i1889[0]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1891[i + 0]) );
  }
  i1888.scriptsExecutionOrder = i1890
  var i1893 = i1889[1]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1893[i + 0]) );
  }
  i1888.sortingLayers = i1892
  var i1895 = i1889[2]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1895[i + 0]) );
  }
  i1888.cullingLayers = i1894
  i1888.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1889[3], i1888.timeSettings)
  i1888.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1889[4], i1888.physicsSettings)
  i1888.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1889[5], i1888.physics2DSettings)
  i1888.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1889[6], i1888.qualitySettings)
  i1888.enableRealtimeShadows = !!i1889[7]
  i1888.enableAutoInstancing = !!i1889[8]
  i1888.enableStaticBatching = !!i1889[9]
  i1888.enableDynamicBatching = !!i1889[10]
  i1888.usePreservativeDynamicBatching = !!i1889[11]
  i1888.lightmapEncodingQuality = i1889[12]
  i1888.desiredColorSpace = i1889[13]
  var i1897 = i1889[14]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( i1897[i + 0] );
  }
  i1888.allTags = i1896
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1901 = data
  i1900.name = i1901[0]
  i1900.value = i1901[1]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1905 = data
  i1904.id = i1905[0]
  i1904.name = i1905[1]
  i1904.value = i1905[2]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1909 = data
  i1908.id = i1909[0]
  i1908.name = i1909[1]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1911 = data
  i1910.fixedDeltaTime = i1911[0]
  i1910.maximumDeltaTime = i1911[1]
  i1910.timeScale = i1911[2]
  i1910.maximumParticleTimestep = i1911[3]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1913 = data
  i1912.gravity = new pc.Vec3( i1913[0], i1913[1], i1913[2] )
  i1912.defaultSolverIterations = i1913[3]
  i1912.bounceThreshold = i1913[4]
  i1912.autoSyncTransforms = !!i1913[5]
  i1912.autoSimulation = !!i1913[6]
  var i1915 = i1913[7]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1915[i + 0]) );
  }
  i1912.collisionMatrix = i1914
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.layerId = i1919[1]
  i1918.otherLayerId = i1919[2]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'material')
  i1920.gravity = new pc.Vec2( i1921[2], i1921[3] )
  i1920.positionIterations = i1921[4]
  i1920.velocityIterations = i1921[5]
  i1920.velocityThreshold = i1921[6]
  i1920.maxLinearCorrection = i1921[7]
  i1920.maxAngularCorrection = i1921[8]
  i1920.maxTranslationSpeed = i1921[9]
  i1920.maxRotationSpeed = i1921[10]
  i1920.baumgarteScale = i1921[11]
  i1920.baumgarteTOIScale = i1921[12]
  i1920.timeToSleep = i1921[13]
  i1920.linearSleepTolerance = i1921[14]
  i1920.angularSleepTolerance = i1921[15]
  i1920.defaultContactOffset = i1921[16]
  i1920.autoSimulation = !!i1921[17]
  i1920.queriesHitTriggers = !!i1921[18]
  i1920.queriesStartInColliders = !!i1921[19]
  i1920.callbacksOnDisable = !!i1921[20]
  i1920.reuseCollisionCallbacks = !!i1921[21]
  i1920.autoSyncTransforms = !!i1921[22]
  var i1923 = i1921[23]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1923[i + 0]) );
  }
  i1920.collisionMatrix = i1922
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1927 = data
  i1926.enabled = !!i1927[0]
  i1926.layerId = i1927[1]
  i1926.otherLayerId = i1927[2]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1929 = data
  var i1931 = i1929[0]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1931[i + 0]) );
  }
  i1928.qualityLevels = i1930
  var i1933 = i1929[1]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1928.names = i1932
  i1928.shadows = i1929[2]
  i1928.anisotropicFiltering = i1929[3]
  i1928.antiAliasing = i1929[4]
  i1928.lodBias = i1929[5]
  i1928.shadowCascades = i1929[6]
  i1928.shadowDistance = i1929[7]
  i1928.shadowmaskMode = i1929[8]
  i1928.shadowProjection = i1929[9]
  i1928.shadowResolution = i1929[10]
  i1928.softParticles = !!i1929[11]
  i1928.softVegetation = !!i1929[12]
  i1928.activeColorSpace = i1929[13]
  i1928.desiredColorSpace = i1929[14]
  i1928.masterTextureLimit = i1929[15]
  i1928.maxQueuedFrames = i1929[16]
  i1928.particleRaycastBudget = i1929[17]
  i1928.pixelLightCount = i1929[18]
  i1928.realtimeReflectionProbes = !!i1929[19]
  i1928.shadowCascade2Split = i1929[20]
  i1928.shadowCascade4Split = new pc.Vec3( i1929[21], i1929[22], i1929[23] )
  i1928.streamingMipmapsActive = !!i1929[24]
  i1928.vSyncCount = i1929[25]
  i1928.asyncUploadBufferSize = i1929[26]
  i1928.asyncUploadTimeSlice = i1929[27]
  i1928.billboardsFaceCameraPosition = !!i1929[28]
  i1928.shadowNearPlaneOffset = i1929[29]
  i1928.streamingMipmapsMemoryBudget = i1929[30]
  i1928.maximumLODLevel = i1929[31]
  i1928.streamingMipmapsAddAllCameras = !!i1929[32]
  i1928.streamingMipmapsMaxLevelReduction = i1929[33]
  i1928.streamingMipmapsRenderersPerFrame = i1929[34]
  i1928.resolutionScalingFixedDPIFactor = i1929[35]
  i1928.streamingMipmapsMaxFileIORequests = i1929[36]
  i1928.currentQualityLevel = i1929[37]
  return i1928
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[14],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[7],"60":[7],"61":[7],"62":[7],"63":[7],"64":[7],"10":[7],"65":[7],"66":[7],"6":[7],"67":[7],"68":[7],"69":[7],"70":[14],"71":[72],"73":[74],"75":[74],"30":[19],"76":[14],"77":[8],"78":[14],"79":[80],"81":[38],"82":[30],"83":[19],"84":[72,19],"85":[19,34],"86":[19],"87":[34,19],"88":[72],"89":[34,19],"90":[19],"91":[92],"93":[92],"94":[92],"95":[19],"96":[19],"33":[30],"35":[34,19],"97":[19],"32":[30],"98":[19],"99":[19],"100":[19],"101":[19],"102":[19],"103":[19],"104":[19],"105":[19],"106":[19],"107":[34,19],"108":[19],"109":[19],"110":[19],"111":[19],"36":[34,19],"112":[19],"113":[38],"114":[38],"39":[38],"115":[38],"116":[14],"117":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","MelonSandbox.MelonRagdoll","MelonSandbox.MelonLimb","UnityEngine.TargetJoint2D","UnityEngine.Rigidbody2D","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","UnityEngine.Sprite","UnityEngine.Material","MelonSandbox.MelonTool","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","MelonSandbox.MelonGame","MelonSandbox.MelonAssets","UnityEngine.RectTransform","MelonSandbox.MelonHud","MelonSandbox.MelonStage","Playable.GameManager","UnityEngine.AudioClip","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.PhysicsMaterial2D","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.TextAsset","UnityEngine.GameObject","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","MelonAd.CameraFit","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.60f1";

Deserializers.productName = "SRP_V05";

Deserializers.lunaInitializationTime = "10/12/2026 09:00:17";

Deserializers.lunaDaysRunning = "45.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_HuyNQ_RSNM_V08_YenTTH";

Deserializers.lunaAppID = "42071";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1661";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4318";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "77dc6589-4e1e-423c-8a5d-a60d68be4f8e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

