var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSpring' )
  var i485 = data
  i484.spring = i485[0]
  i484.damper = i485[1]
  i484.targetPosition = i485[2]
  return i484
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor' )
  var i487 = data
  i486.m_TargetVelocity = i487[0]
  i486.m_Force = i487[1]
  i486.m_FreeSpin = i487[2]
  return i486
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointLimits' )
  var i489 = data
  i488.m_Min = i489[0]
  i488.m_Max = i489[1]
  i488.m_Bounciness = i489[2]
  i488.m_BounceMinVelocity = i489[3]
  i488.m_ContactDistance = i489[4]
  i488.minBounce = i489[5]
  i488.maxBounce = i489[6]
  return i488
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointDrive' )
  var i491 = data
  i490.m_PositionSpring = i491[0]
  i490.m_PositionDamper = i491[1]
  i490.m_MaximumForce = i491[2]
  i490.m_UseAcceleration = i491[3]
  return i490
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i493 = data
  i492.m_Spring = i493[0]
  i492.m_Damper = i493[1]
  return i492
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i495 = data
  i494.m_Limit = i495[0]
  i494.m_Bounciness = i495[1]
  i494.m_ContactDistance = i495[2]
  return i494
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i497 = data
  i496.m_ExtremumSlip = i497[0]
  i496.m_ExtremumValue = i497[1]
  i496.m_AsymptoteSlip = i497[2]
  i496.m_AsymptoteValue = i497[3]
  i496.m_Stiffness = i497[4]
  return i496
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i499 = data
  i498.m_LowerAngle = i499[0]
  i498.m_UpperAngle = i499[1]
  return i498
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i501 = data
  i500.m_MotorSpeed = i501[0]
  i500.m_MaximumMotorTorque = i501[1]
  return i500
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i503 = data
  i502.m_DampingRatio = i503[0]
  i502.m_Frequency = i503[1]
  i502.m_Angle = i503[2]
  return i502
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i505 = data
  i504.m_LowerTranslation = i505[0]
  i504.m_UpperTranslation = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i539 = data
  i538.name = i539[0]
  i538.width = i539[1]
  i538.height = i539[2]
  i538.mipmapCount = i539[3]
  i538.anisoLevel = i539[4]
  i538.filterMode = i539[5]
  i538.hdr = !!i539[6]
  i538.format = i539[7]
  i538.wrapMode = i539[8]
  i538.alphaIsTransparency = !!i539[9]
  i538.alphaSource = i539[10]
  i538.graphicsFormat = i539[11]
  i538.sRGBTexture = !!i539[12]
  i538.desiredColorSpace = i539[13]
  i538.wrapU = i539[14]
  i538.wrapV = i539[15]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i541 = data
  i540.position = new pc.Vec3( i541[0], i541[1], i541[2] )
  i540.scale = new pc.Vec3( i541[3], i541[4], i541[5] )
  i540.rotation = new pc.Quat(i541[6], i541[7], i541[8], i541[9])
  return i540
}

Deserializers["MelonSandbox.MelonRagdoll"] = function (request, data, root) {
  var i542 = root || request.c( 'MelonSandbox.MelonRagdoll' )
  var i543 = data
  i542.skinName = i543[0]
  i542.life = i543[1]
  i542.hits = i543[2]
  i542.dead = !!i543[3]
  i542.targetGroup = i543[4]
  i542.parade = !!i543[5]
  request.r(i543[6], i543[7], 0, i542, 'game')
  var i545 = i543[8]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonLimb')))
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 1, i544, '')
  }
  i542.limbs = i544
  var i547 = i543[9]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 1, i546, '')
  }
  i542.supports = i546
  return i542
}

Deserializers["MelonSandbox.MelonLimb"] = function (request, data, root) {
  var i552 = root || request.c( 'MelonSandbox.MelonLimb' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'owner')
  i552.partName = i553[2]
  request.r(i553[3], i553[4], 0, i552, 'body')
  request.r(i553[5], i553[6], 0, i552, 'skin')
  request.r(i553[7], i553[8], 0, i552, 'inner')
  i552.dimensions = new pc.Vec2( i553[9], i553[10] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i555 = data
  i554.bodyType = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'material')
  i554.simulated = !!i555[3]
  i554.useAutoMass = !!i555[4]
  i554.mass = i555[5]
  i554.drag = i555[6]
  i554.angularDrag = i555[7]
  i554.gravityScale = i555[8]
  i554.collisionDetectionMode = i555[9]
  i554.sleepMode = i555[10]
  i554.constraints = i555[11]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i557 = data
  i556.usedByComposite = !!i557[0]
  i556.autoTiling = !!i557[1]
  i556.size = new pc.Vec2( i557[2], i557[3] )
  i556.edgeRadius = i557[4]
  i556.enabled = !!i557[5]
  i556.isTrigger = !!i557[6]
  i556.usedByEffector = !!i557[7]
  i556.density = i557[8]
  i556.offset = new pc.Vec2( i557[9], i557[10] )
  request.r(i557[11], i557[12], 0, i556, 'material')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i559 = data
  i558.useLimits = !!i559[0]
  i558.limits = request.d('UnityEngine.JointAngleLimits2D', i559[1], i558.limits)
  i558.useMotor = !!i559[2]
  i558.motor = request.d('UnityEngine.JointMotor2D', i559[3], i558.motor)
  i558.anchor = new pc.Vec2( i559[4], i559[5] )
  i558.connectedAnchor = new pc.Vec2( i559[6], i559[7] )
  i558.autoConfigureConnectedAnchor = !!i559[8]
  request.r(i559[9], i559[10], 0, i558, 'connectedBody')
  i558.breakForce = i559[11]
  i558.breakTorque = i559[12]
  i558.enableCollision = !!i559[13]
  i558.enabled = !!i559[14]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i561 = data
  i560.color = new pc.Color(i561[0], i561[1], i561[2], i561[3])
  request.r(i561[4], i561[5], 0, i560, 'sprite')
  i560.flipX = !!i561[6]
  i560.flipY = !!i561[7]
  i560.drawMode = i561[8]
  i560.size = new pc.Vec2( i561[9], i561[10] )
  i560.tileMode = i561[11]
  i560.adaptiveModeThreshold = i561[12]
  i560.maskInteraction = i561[13]
  i560.spriteSortPoint = i561[14]
  i560.enabled = !!i561[15]
  request.r(i561[16], i561[17], 0, i560, 'sharedMaterial')
  var i563 = i561[18]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.sharedMaterials = i562
  i560.receiveShadows = !!i561[19]
  i560.shadowCastingMode = i561[20]
  i560.sortingLayerID = i561[21]
  i560.sortingOrder = i561[22]
  i560.lightmapIndex = i561[23]
  i560.lightmapSceneIndex = i561[24]
  i560.lightmapScaleOffset = new pc.Vec4( i561[25], i561[26], i561[27], i561[28] )
  i560.lightProbeUsage = i561[29]
  i560.reflectionProbeUsage = i561[30]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i567 = data
  i566.name = i567[0]
  i566.tagId = i567[1]
  i566.enabled = !!i567[2]
  i566.isStatic = !!i567[3]
  i566.layer = i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i569 = data
  i568.autoConfigureTarget = !!i569[0]
  i568.target = new pc.Vec2( i569[1], i569[2] )
  i568.anchor = new pc.Vec2( i569[3], i569[4] )
  i568.maxForce = i569[5]
  i568.dampingRatio = i569[6]
  i568.frequency = i569[7]
  request.r(i569[8], i569[9], 0, i568, 'connectedBody')
  i568.breakForce = i569[10]
  i568.breakTorque = i569[11]
  i568.enableCollision = !!i569[12]
  i568.enabled = !!i569[13]
  return i568
}

Deserializers["MelonSandbox.MelonTool"] = function (request, data, root) {
  var i570 = root || request.c( 'MelonSandbox.MelonTool' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'game')
  i570.kind = i571[2]
  request.r(i571[3], i571[4], 0, i570, 'body')
  request.r(i571[5], i571[6], 0, i570, 'intendedTarget')
  i570.held = !!i571[7]
  i570.used = !!i571[8]
  request.r(i571[9], i571[10], 0, i570, 'blade')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i573 = data
  i572.name = i573[0]
  i572.index = i573[1]
  i572.startup = !!i573[2]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i575 = data
  i574.aspect = i575[0]
  i574.orthographic = !!i575[1]
  i574.orthographicSize = i575[2]
  i574.backgroundColor = new pc.Color(i575[3], i575[4], i575[5], i575[6])
  i574.nearClipPlane = i575[7]
  i574.farClipPlane = i575[8]
  i574.fieldOfView = i575[9]
  i574.depth = i575[10]
  i574.clearFlags = i575[11]
  i574.cullingMask = i575[12]
  i574.rect = i575[13]
  request.r(i575[14], i575[15], 0, i574, 'targetTexture')
  i574.usePhysicalProperties = !!i575[16]
  i574.focalLength = i575[17]
  i574.sensorSize = new pc.Vec2( i575[18], i575[19] )
  i574.lensShift = new pc.Vec2( i575[20], i575[21] )
  i574.gateFit = i575[22]
  i574.commandBufferCount = i575[23]
  i574.cameraType = i575[24]
  i574.enabled = !!i575[25]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i577 = data
  i576.type = i577[0]
  i576.color = new pc.Color(i577[1], i577[2], i577[3], i577[4])
  i576.cullingMask = i577[5]
  i576.intensity = i577[6]
  i576.range = i577[7]
  i576.spotAngle = i577[8]
  i576.shadows = i577[9]
  i576.shadowNormalBias = i577[10]
  i576.shadowBias = i577[11]
  i576.shadowStrength = i577[12]
  i576.shadowResolution = i577[13]
  i576.lightmapBakeType = i577[14]
  i576.renderMode = i577[15]
  request.r(i577[16], i577[17], 0, i576, 'cookie')
  i576.cookieSize = i577[18]
  i576.shadowNearPlane = i577[19]
  i576.occlusionMaskChannel = i577[20]
  i576.isBaked = !!i577[21]
  i576.mixedLightingMode = i577[22]
  i576.enabled = !!i577[23]
  return i576
}

Deserializers["MelonSandbox.MelonGame"] = function (request, data, root) {
  var i578 = root || request.c( 'MelonSandbox.MelonGame' )
  var i579 = data
  i578.appLovin = !!i579[0]
  i578.muteSfxAndReplaceMusic = !!i579[1]
  i578.stageOneArmsDown = !!i579[2]
  i578.coverSprunkyOnHit = !!i579[3]
  i578.mosaicPadding = i579[4]
  request.r(i579[5], i579[6], 0, i578, 'assets')
  request.r(i579[7], i579[8], 0, i578, 'gameBanner')
  request.r(i579[9], i579[10], 0, i578, 'portraitBannerTitle')
  request.r(i579[11], i579[12], 0, i578, 'landscapeBannerTitle')
  i578.startingStage = i579[13]
  request.r(i579[14], i579[15], 0, i578, 'gameCamera')
  var i581 = i579[16]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonRagdoll')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i578.characters = i580
  var i583 = i579[17]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('MelonSandbox.MelonTool')))
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 1, i582, '')
  }
  i578.tools = i582
  request.r(i579[18], i579[19], 0, i578, 'world')
  request.r(i579[20], i579[21], 0, i578, 'hud')
  request.r(i579[22], i579[23], 0, i578, 'background')
  var i585 = i579[24]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i578.sceneStages = i584
  return i578
}

Deserializers["Playable.GameManager"] = function (request, data, root) {
  var i592 = root || request.c( 'Playable.GameManager' )
  var i593 = data
  i592._totalEvent = i593[0]
  i592._endTime = i593[1]
  request.r(i593[2], i593[3], 0, i592, '_backgroundMusic')
  request.r(i593[4], i593[5], 0, i592, '_backgroundTexture')
  request.r(i593[6], i593[7], 0, i592, '_btnBlock')
  request.r(i593[8], i593[9], 0, i592, '_background')
  return i592
}

Deserializers["MelonSandbox.MelonStage"] = function (request, data, root) {
  var i594 = root || request.c( 'MelonSandbox.MelonStage' )
  var i595 = data
  var i597 = i595[0]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.characters = i596
  var i599 = i595[1]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i594.tools = i598
  request.r(i595[2], i595[3], 0, i594, 'background')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'animatorController')
  request.r(i605[2], i605[3], 0, i604, 'avatar')
  i604.updateMode = i605[4]
  i604.hasTransformHierarchy = !!i605[5]
  i604.applyRootMotion = !!i605[6]
  var i607 = i605[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.humanBones = i606
  i604.enabled = !!i605[8]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i611 = data
  i610.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i611[0], i610.main)
  i610.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i611[1], i610.colorBySpeed)
  i610.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i611[2], i610.colorOverLifetime)
  i610.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i611[3], i610.emission)
  i610.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i611[4], i610.rotationBySpeed)
  i610.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i611[5], i610.rotationOverLifetime)
  i610.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i611[6], i610.shape)
  i610.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i611[7], i610.sizeBySpeed)
  i610.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i611[8], i610.sizeOverLifetime)
  i610.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i611[9], i610.textureSheetAnimation)
  i610.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i611[10], i610.velocityOverLifetime)
  i610.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i611[11], i610.noise)
  i610.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i611[12], i610.inheritVelocity)
  i610.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i611[13], i610.forceOverLifetime)
  i610.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i611[14], i610.limitVelocityOverLifetime)
  i610.useAutoRandomSeed = !!i611[15]
  i610.randomSeed = i611[16]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemMain()
  var i613 = data
  i612.duration = i613[0]
  i612.loop = !!i613[1]
  i612.prewarm = !!i613[2]
  i612.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[3], i612.startDelay)
  i612.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[4], i612.startLifetime)
  i612.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[5], i612.startSpeed)
  i612.startSize3D = !!i613[6]
  i612.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[7], i612.startSizeX)
  i612.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[8], i612.startSizeY)
  i612.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[9], i612.startSizeZ)
  i612.startRotation3D = !!i613[10]
  i612.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[11], i612.startRotationX)
  i612.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[12], i612.startRotationY)
  i612.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[13], i612.startRotationZ)
  i612.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i613[14], i612.startColor)
  i612.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[15], i612.gravityModifier)
  i612.simulationSpace = i613[16]
  request.r(i613[17], i613[18], 0, i612, 'customSimulationSpace')
  i612.simulationSpeed = i613[19]
  i612.useUnscaledTime = !!i613[20]
  i612.scalingMode = i613[21]
  i612.playOnAwake = !!i613[22]
  i612.maxParticles = i613[23]
  i612.emitterVelocityMode = i613[24]
  i612.stopAction = i613[25]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i614 = root || new pc.MinMaxCurve()
  var i615 = data
  i614.mode = i615[0]
  i614.curveMin = new pc.AnimationCurve( { keys_flow: i615[1] } )
  i614.curveMax = new pc.AnimationCurve( { keys_flow: i615[2] } )
  i614.curveMultiplier = i615[3]
  i614.constantMin = i615[4]
  i614.constantMax = i615[5]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i616 = root || new pc.MinMaxGradient()
  var i617 = data
  i616.mode = i617[0]
  i616.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i617[1], i616.gradientMin)
  i616.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i617[2], i616.gradientMax)
  i616.colorMin = new pc.Color(i617[3], i617[4], i617[5], i617[6])
  i616.colorMax = new pc.Color(i617[7], i617[8], i617[9], i617[10])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i619 = data
  i618.mode = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i621[i + 0]) );
  }
  i618.colorKeys = i620
  var i623 = i619[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i623[i + 0]) );
  }
  i618.alphaKeys = i622
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemColorBySpeed()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i625[1], i624.color)
  i624.range = new pc.Vec2( i625[2], i625[3] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i629 = data
  i628.color = new pc.Color(i629[0], i629[1], i629[2], i629[3])
  i628.time = i629[4]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i633 = data
  i632.alpha = i633[0]
  i632.time = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemColorOverLifetime()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i635[1], i634.color)
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemEmitter()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.rateOverTime)
  i636.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.rateOverDistance)
  var i639 = i637[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i639[i + 0]) );
  }
  i636.bursts = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemBurst()
  var i643 = data
  i642.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[0], i642.count)
  i642.cycleCount = i643[1]
  i642.minCount = i643[2]
  i642.maxCount = i643[3]
  i642.repeatInterval = i643[4]
  i642.time = i643[5]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemRotationBySpeed()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.separateAxes = !!i645[4]
  i644.range = new pc.Vec2( i645[5], i645[6] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemRotationOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.separateAxes = !!i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemShape()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.shapeType = i649[1]
  i648.randomDirectionAmount = i649[2]
  i648.sphericalDirectionAmount = i649[3]
  i648.randomPositionAmount = i649[4]
  i648.alignToDirection = !!i649[5]
  i648.radius = i649[6]
  i648.radiusMode = i649[7]
  i648.radiusSpread = i649[8]
  i648.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[9], i648.radiusSpeed)
  i648.radiusThickness = i649[10]
  i648.angle = i649[11]
  i648.length = i649[12]
  i648.boxThickness = new pc.Vec3( i649[13], i649[14], i649[15] )
  i648.meshShapeType = i649[16]
  request.r(i649[17], i649[18], 0, i648, 'mesh')
  request.r(i649[19], i649[20], 0, i648, 'meshRenderer')
  request.r(i649[21], i649[22], 0, i648, 'skinnedMeshRenderer')
  i648.useMeshMaterialIndex = !!i649[23]
  i648.meshMaterialIndex = i649[24]
  i648.useMeshColors = !!i649[25]
  i648.normalOffset = i649[26]
  i648.arc = i649[27]
  i648.arcMode = i649[28]
  i648.arcSpread = i649[29]
  i648.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[30], i648.arcSpeed)
  i648.donutRadius = i649[31]
  i648.position = new pc.Vec3( i649[32], i649[33], i649[34] )
  i648.rotation = new pc.Vec3( i649[35], i649[36], i649[37] )
  i648.scale = new pc.Vec3( i649[38], i649[39], i649[40] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemSizeBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.separateAxes = !!i651[4]
  i650.range = new pc.Vec2( i651[5], i651[6] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemSizeOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.x)
  i652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.y)
  i652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.z)
  i652.separateAxes = !!i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.mode = i655[1]
  i654.animation = i655[2]
  i654.numTilesX = i655[3]
  i654.numTilesY = i655[4]
  i654.useRandomRow = !!i655[5]
  i654.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[6], i654.frameOverTime)
  i654.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[7], i654.startFrame)
  i654.cycleCount = i655[8]
  i654.rowIndex = i655[9]
  i654.flipU = i655[10]
  i654.flipV = i655[11]
  i654.spriteCount = i655[12]
  var i657 = i655[13]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.sprites = i656
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.radial)
  i660.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[5], i660.speedModifier)
  i660.space = i661[6]
  i660.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.orbitalX)
  i660.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[8], i660.orbitalY)
  i660.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.orbitalZ)
  i660.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[10], i660.orbitalOffsetX)
  i660.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[11], i660.orbitalOffsetY)
  i660.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[12], i660.orbitalOffsetZ)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemNoise()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.separateAxes = !!i663[1]
  i662.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.strengthX)
  i662.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.strengthY)
  i662.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[4], i662.strengthZ)
  i662.frequency = i663[5]
  i662.damping = !!i663[6]
  i662.octaveCount = i663[7]
  i662.octaveMultiplier = i663[8]
  i662.octaveScale = i663[9]
  i662.quality = i663[10]
  i662.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[11], i662.scrollSpeed)
  i662.scrollSpeedMultiplier = i663[12]
  i662.remapEnabled = !!i663[13]
  i662.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[14], i662.remapX)
  i662.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[15], i662.remapY)
  i662.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[16], i662.remapZ)
  i662.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[17], i662.positionAmount)
  i662.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[18], i662.rotationAmount)
  i662.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[19], i662.sizeAmount)
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemInheritVelocity()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.mode = i665[1]
  i664.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.curve)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemForceOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.space = i667[4]
  i666.randomized = !!i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.limit)
  i668.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.limitX)
  i668.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.limitY)
  i668.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[4], i668.limitZ)
  i668.dampen = i669[5]
  i668.separateAxes = !!i669[6]
  i668.space = i669[7]
  i668.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[8], i668.drag)
  i668.multiplyDragByParticleSize = !!i669[9]
  i668.multiplyDragByParticleVelocity = !!i669[10]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'mesh')
  i670.meshCount = i671[2]
  i670.activeVertexStreamsCount = i671[3]
  i670.alignment = i671[4]
  i670.renderMode = i671[5]
  i670.sortMode = i671[6]
  i670.lengthScale = i671[7]
  i670.velocityScale = i671[8]
  i670.cameraVelocityScale = i671[9]
  i670.normalDirection = i671[10]
  i670.sortingFudge = i671[11]
  i670.minParticleSize = i671[12]
  i670.maxParticleSize = i671[13]
  i670.pivot = new pc.Vec3( i671[14], i671[15], i671[16] )
  request.r(i671[17], i671[18], 0, i670, 'trailMaterial')
  i670.applyActiveColorSpace = !!i671[19]
  i670.enabled = !!i671[20]
  request.r(i671[21], i671[22], 0, i670, 'sharedMaterial')
  var i673 = i671[23]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sharedMaterials = i672
  i670.receiveShadows = !!i671[24]
  i670.shadowCastingMode = i671[25]
  i670.sortingLayerID = i671[26]
  i670.sortingOrder = i671[27]
  i670.lightmapIndex = i671[28]
  i670.lightmapSceneIndex = i671[29]
  i670.lightmapScaleOffset = new pc.Vec4( i671[30], i671[31], i671[32], i671[33] )
  i670.lightProbeUsage = i671[34]
  i670.reflectionProbeUsage = i671[35]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i675 = data
  i674.pivot = new pc.Vec2( i675[0], i675[1] )
  i674.anchorMin = new pc.Vec2( i675[2], i675[3] )
  i674.anchorMax = new pc.Vec2( i675[4], i675[5] )
  i674.sizeDelta = new pc.Vec2( i675[6], i675[7] )
  i674.anchoredPosition3D = new pc.Vec3( i675[8], i675[9], i675[10] )
  i674.rotation = new pc.Quat(i675[11], i675[12], i675[13], i675[14])
  i674.scale = new pc.Vec3( i675[15], i675[16], i675[17] )
  return i674
}

Deserializers["MelonSandbox.MelonHud"] = function (request, data, root) {
  var i676 = root || request.c( 'MelonSandbox.MelonHud' )
  var i677 = data
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i679 = data
  i678.planeDistance = i679[0]
  i678.referencePixelsPerUnit = i679[1]
  i678.isFallbackOverlay = !!i679[2]
  i678.renderMode = i679[3]
  i678.renderOrder = i679[4]
  i678.sortingLayerName = i679[5]
  i678.sortingOrder = i679[6]
  i678.scaleFactor = i679[7]
  request.r(i679[8], i679[9], 0, i678, 'worldCamera')
  i678.overrideSorting = !!i679[10]
  i678.pixelPerfect = !!i679[11]
  i678.targetDisplay = i679[12]
  i678.overridePixelPerfect = !!i679[13]
  i678.enabled = !!i679[14]
  return i678
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i681 = data
  i680.m_UiScaleMode = i681[0]
  i680.m_ReferencePixelsPerUnit = i681[1]
  i680.m_ScaleFactor = i681[2]
  i680.m_ReferenceResolution = new pc.Vec2( i681[3], i681[4] )
  i680.m_ScreenMatchMode = i681[5]
  i680.m_MatchWidthOrHeight = i681[6]
  i680.m_PhysicalUnit = i681[7]
  i680.m_FallbackScreenDPI = i681[8]
  i680.m_DefaultSpriteDPI = i681[9]
  i680.m_DynamicPixelsPerUnit = i681[10]
  i680.m_PresetInfoIsWorld = !!i681[11]
  return i680
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i683 = data
  i682.m_IgnoreReversedGraphics = !!i683[0]
  i682.m_BlockingObjects = i683[1]
  i682.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i683[2] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i685 = data
  i684.cullTransparentMesh = !!i685[0]
  return i684
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Image' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_Sprite')
  i686.m_Type = i687[2]
  i686.m_PreserveAspect = !!i687[3]
  i686.m_FillCenter = !!i687[4]
  i686.m_FillMethod = i687[5]
  i686.m_FillAmount = i687[6]
  i686.m_FillClockwise = !!i687[7]
  i686.m_FillOrigin = i687[8]
  i686.m_UseSpriteMesh = !!i687[9]
  i686.m_PixelsPerUnitMultiplier = i687[10]
  request.r(i687[11], i687[12], 0, i686, 'm_Material')
  i686.m_Maskable = !!i687[13]
  i686.m_Color = new pc.Color(i687[14], i687[15], i687[16], i687[17])
  i686.m_RaycastTarget = !!i687[18]
  i686.m_RaycastPadding = new pc.Vec4( i687[19], i687[20], i687[21], i687[22] )
  return i686
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Button' )
  var i689 = data
  i688.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i689[0], i688.m_OnClick)
  i688.m_Navigation = request.d('UnityEngine.UI.Navigation', i689[1], i688.m_Navigation)
  i688.m_Transition = i689[2]
  i688.m_Colors = request.d('UnityEngine.UI.ColorBlock', i689[3], i688.m_Colors)
  i688.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i689[4], i688.m_SpriteState)
  i688.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i689[5], i688.m_AnimationTriggers)
  i688.m_Interactable = !!i689[6]
  request.r(i689[7], i689[8], 0, i688, 'm_TargetGraphic')
  return i688
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i691 = data
  i690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i691[0], i690.m_PersistentCalls)
  return i690
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('UnityEngine.Events.PersistentCall', i695[i + 0]));
  }
  i692.m_Calls = i694
  return i692
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Target')
  i698.m_TargetAssemblyTypeName = i699[2]
  i698.m_MethodName = i699[3]
  i698.m_Mode = i699[4]
  i698.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i699[5], i698.m_Arguments)
  i698.m_CallState = i699[6]
  return i698
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i701 = data
  i700.m_Mode = i701[0]
  i700.m_WrapAround = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'm_SelectOnUp')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectOnDown')
  request.r(i701[6], i701[7], 0, i700, 'm_SelectOnLeft')
  request.r(i701[8], i701[9], 0, i700, 'm_SelectOnRight')
  return i700
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i703 = data
  i702.m_NormalColor = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.m_HighlightedColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.m_PressedColor = new pc.Color(i703[8], i703[9], i703[10], i703[11])
  i702.m_SelectedColor = new pc.Color(i703[12], i703[13], i703[14], i703[15])
  i702.m_DisabledColor = new pc.Color(i703[16], i703[17], i703[18], i703[19])
  i702.m_ColorMultiplier = i703[20]
  i702.m_FadeDuration = i703[21]
  return i702
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_HighlightedSprite')
  request.r(i705[2], i705[3], 0, i704, 'm_PressedSprite')
  request.r(i705[4], i705[5], 0, i704, 'm_SelectedSprite')
  request.r(i705[6], i705[7], 0, i704, 'm_DisabledSprite')
  return i704
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i707 = data
  i706.m_NormalTrigger = i707[0]
  i706.m_HighlightedTrigger = i707[1]
  i706.m_PressedTrigger = i707[2]
  i706.m_SelectedTrigger = i707[3]
  i706.m_DisabledTrigger = i707[4]
  return i706
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Text' )
  var i709 = data
  i708.m_FontData = request.d('UnityEngine.UI.FontData', i709[0], i708.m_FontData)
  i708.m_Text = i709[1]
  request.r(i709[2], i709[3], 0, i708, 'm_Material')
  i708.m_Maskable = !!i709[4]
  i708.m_Color = new pc.Color(i709[5], i709[6], i709[7], i709[8])
  i708.m_RaycastTarget = !!i709[9]
  i708.m_RaycastPadding = new pc.Vec4( i709[10], i709[11], i709[12], i709[13] )
  return i708
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.FontData' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Font')
  i710.m_FontSize = i711[2]
  i710.m_FontStyle = i711[3]
  i710.m_BestFit = !!i711[4]
  i710.m_MinSize = i711[5]
  i710.m_MaxSize = i711[6]
  i710.m_Alignment = i711[7]
  i710.m_AlignByGeometry = !!i711[8]
  i710.m_RichText = !!i711[9]
  i710.m_HorizontalOverflow = i711[10]
  i710.m_VerticalOverflow = i711[11]
  i710.m_LineSpacing = i711[12]
  return i710
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_FirstSelected')
  i712.m_sendNavigationEvents = !!i713[2]
  i712.m_DragThreshold = i713[3]
  return i712
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i715 = data
  i714.m_HorizontalAxis = i715[0]
  i714.m_VerticalAxis = i715[1]
  i714.m_SubmitButton = i715[2]
  i714.m_CancelButton = i715[3]
  i714.m_InputActionsPerSecond = i715[4]
  i714.m_RepeatDelay = i715[5]
  i714.m_ForceModuleActive = !!i715[6]
  i714.m_SendPointerHoverToParent = !!i715[7]
  return i714
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_ObjectArgument')
  i716.m_ObjectArgumentAssemblyTypeName = i717[2]
  i716.m_IntArgument = i717[3]
  i716.m_FloatArgument = i717[4]
  i716.m_StringArgument = i717[5]
  i716.m_BoolArgument = !!i717[6]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i719 = data
  i718.ambientIntensity = i719[0]
  i718.reflectionIntensity = i719[1]
  i718.ambientMode = i719[2]
  i718.ambientLight = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.ambientSkyColor = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  i718.ambientGroundColor = new pc.Color(i719[11], i719[12], i719[13], i719[14])
  i718.ambientEquatorColor = new pc.Color(i719[15], i719[16], i719[17], i719[18])
  i718.fogColor = new pc.Color(i719[19], i719[20], i719[21], i719[22])
  i718.fogEndDistance = i719[23]
  i718.fogStartDistance = i719[24]
  i718.fogDensity = i719[25]
  i718.fog = !!i719[26]
  request.r(i719[27], i719[28], 0, i718, 'skybox')
  i718.fogMode = i719[29]
  var i721 = i719[30]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i721[i + 0]) );
  }
  i718.lightmaps = i720
  i718.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i719[31], i718.lightProbes)
  i718.lightmapsMode = i719[32]
  i718.mixedBakeMode = i719[33]
  i718.environmentLightingMode = i719[34]
  i718.ambientProbe = new pc.SphericalHarmonicsL2(i719[35])
  request.r(i719[36], i719[37], 0, i718, 'customReflection')
  request.r(i719[38], i719[39], 0, i718, 'defaultReflection')
  i718.defaultReflectionMode = i719[40]
  i718.defaultReflectionResolution = i719[41]
  i718.sunLightObjectId = i719[42]
  i718.pixelLightCount = i719[43]
  i718.defaultReflectionHDR = !!i719[44]
  i718.hasLightDataAsset = !!i719[45]
  i718.hasManualGenerate = !!i719[46]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'lightmapColor')
  request.r(i725[2], i725[3], 0, i724, 'lightmapDirection')
  request.r(i725[4], i725[5], 0, i724, 'shadowMask')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i726 = root || new UnityEngine.LightProbes()
  var i727 = data
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i735 = data
  i734.name = i735[0]
  i734.bounciness = i735[1]
  i734.friction = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i739[i + 0]));
  }
  i736.ShaderCompilationErrors = i738
  i736.name = i737[1]
  i736.guid = i737[2]
  var i741 = i737[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.shaderDefinedKeywords = i740
  var i743 = i737[4]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i743[i + 0]) );
  }
  i736.passes = i742
  var i745 = i737[5]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i745[i + 0]) );
  }
  i736.usePasses = i744
  var i747 = i737[6]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i747[i + 0]) );
  }
  i736.defaultParameterValues = i746
  request.r(i737[7], i737[8], 0, i736, 'unityFallbackShader')
  i736.readDepth = !!i737[9]
  i736.hasDepthOnlyPass = !!i737[10]
  i736.isCreatedByShaderGraph = !!i737[11]
  i736.disableBatching = !!i737[12]
  i736.compiled = !!i737[13]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i751 = data
  i750.shaderName = i751[0]
  i750.errorMessage = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i756 = root || new pc.UnityShaderPass()
  var i757 = data
  i756.id = i757[0]
  i756.subShaderIndex = i757[1]
  i756.name = i757[2]
  i756.passType = i757[3]
  i756.grabPassTextureName = i757[4]
  i756.usePass = !!i757[5]
  i756.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[6], i756.zTest)
  i756.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[7], i756.zWrite)
  i756.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[8], i756.culling)
  i756.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[9], i756.blending)
  i756.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[10], i756.alphaBlending)
  i756.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[11], i756.colorWriteMask)
  i756.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[12], i756.offsetUnits)
  i756.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[13], i756.offsetFactor)
  i756.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[14], i756.stencilRef)
  i756.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[15], i756.stencilReadMask)
  i756.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[16], i756.stencilWriteMask)
  i756.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[17], i756.stencilOp)
  i756.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[18], i756.stencilOpFront)
  i756.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[19], i756.stencilOpBack)
  var i759 = i757[20]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i759[i + 0]) );
  }
  i756.tags = i758
  var i761 = i757[21]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i756.passDefinedKeywords = i760
  var i763 = i757[22]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i763[i + 0]) );
  }
  i756.passDefinedKeywordGroups = i762
  var i765 = i757[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i765[i + 0]) );
  }
  i756.variants = i764
  var i767 = i757[24]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i767[i + 0]) );
  }
  i756.excludedVariants = i766
  i756.hasDepthReader = !!i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i769 = data
  i768.val = i769[0]
  i768.name = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i771 = data
  i770.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[0], i770.src)
  i770.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[1], i770.dst)
  i770.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[2], i770.op)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i773 = data
  i772.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[0], i772.pass)
  i772.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[1], i772.fail)
  i772.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[2], i772.zFail)
  i772.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[3], i772.comp)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i777 = data
  i776.name = i777[0]
  i776.value = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i780.keywords = i782
  i780.hasDiscard = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i787 = data
  i786.passId = i787[0]
  i786.subShaderIndex = i787[1]
  var i789 = i787[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i786.keywords = i788
  i786.vertexProgram = i787[3]
  i786.fragmentProgram = i787[4]
  i786.exportedForWebGl2 = !!i787[5]
  i786.readDepth = !!i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'shader')
  i792.pass = i793[2]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i797 = data
  i796.name = i797[0]
  i796.type = i797[1]
  i796.value = new pc.Vec4( i797[2], i797[3], i797[4], i797[5] )
  i796.textureValue = i797[6]
  i796.shaderPropertyFlag = i797[7]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i799 = data
  i798.name = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'texture')
  i798.aabb = i799[3]
  i798.vertices = i799[4]
  i798.triangles = i799[5]
  i798.textureRect = UnityEngine.Rect.MinMaxRect(i799[6], i799[7], i799[8], i799[9])
  i798.packedRect = UnityEngine.Rect.MinMaxRect(i799[10], i799[11], i799[12], i799[13])
  i798.border = new pc.Vec4( i799[14], i799[15], i799[16], i799[17] )
  i798.transparency = i799[18]
  i798.bounds = i799[19]
  i798.pixelsPerUnit = i799[20]
  i798.textureWidth = i799[21]
  i798.textureHeight = i799[22]
  i798.nativeSize = new pc.Vec2( i799[23], i799[24] )
  i798.pivot = new pc.Vec2( i799[25], i799[26] )
  i798.textureRectOffset = new pc.Vec2( i799[27], i799[28] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i801 = data
  i800.name = i801[0]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i803 = data
  i802.name = i803[0]
  i802.wrapMode = i803[1]
  i802.isLooping = !!i803[2]
  i802.length = i803[3]
  var i805 = i803[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i805[i + 0]) );
  }
  i802.curves = i804
  var i807 = i803[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i807[i + 0]) );
  }
  i802.events = i806
  i802.halfPrecision = !!i803[6]
  i802._frameRate = i803[7]
  i802.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i803[8], i802.localBounds)
  i802.hasMuscleCurves = !!i803[9]
  var i809 = i803[10]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i802.clipMuscleConstant = i808
  i802.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i803[11], i802.clipBindingConstant)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i813 = data
  i812.path = i813[0]
  i812.hash = i813[1]
  i812.componentType = i813[2]
  i812.property = i813[3]
  i812.keys = i813[4]
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i815[i + 0]) );
  }
  i812.objectReferenceKeys = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i819 = data
  i818.time = i819[0]
  request.r(i819[1], i819[2], 0, i818, 'value')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i823 = data
  i822.functionName = i823[0]
  i822.floatParameter = i823[1]
  i822.intParameter = i823[2]
  i822.stringParameter = i823[3]
  request.r(i823[4], i823[5], 0, i822, 'objectReferenceParameter')
  i822.time = i823[6]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i825 = data
  i824.center = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.extends = new pc.Vec3( i825[3], i825[4], i825[5] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( i831[i + 0] );
  }
  i828.genericBindings = i830
  var i833 = i829[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.pptrCurveMapping = i832
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i835 = data
  i834.name = i835[0]
  i834.ascent = i835[1]
  i834.originalLineHeight = i835[2]
  i834.fontSize = i835[3]
  var i837 = i835[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i837[i + 0]) );
  }
  i834.characterInfo = i836
  request.r(i835[5], i835[6], 0, i834, 'texture')
  i834.originalFontSize = i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i841 = data
  i840.index = i841[0]
  i840.advance = i841[1]
  i840.bearing = i841[2]
  i840.glyphWidth = i841[3]
  i840.glyphHeight = i841[4]
  i840.minX = i841[5]
  i840.maxX = i841[6]
  i840.minY = i841[7]
  i840.maxY = i841[8]
  i840.uvBottomLeftX = i841[9]
  i840.uvBottomLeftY = i841[10]
  i840.uvBottomRightX = i841[11]
  i840.uvBottomRightY = i841[12]
  i840.uvTopLeftX = i841[13]
  i840.uvTopLeftY = i841[14]
  i840.uvTopRightX = i841[15]
  i840.uvTopRightY = i841[16]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i843 = data
  i842.name = i843[0]
  var i845 = i843[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i845[i + 0]) );
  }
  i842.layers = i844
  var i847 = i843[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i847[i + 0]) );
  }
  i842.parameters = i846
  i842.animationClips = i843[3]
  i842.avatarUnsupported = i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i851 = data
  i850.name = i851[0]
  i850.defaultWeight = i851[1]
  i850.blendingMode = i851[2]
  i850.avatarMask = i851[3]
  i850.syncedLayerIndex = i851[4]
  i850.syncedLayerAffectsTiming = !!i851[5]
  i850.syncedLayers = i851[6]
  i850.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i851[7], i850.stateMachine)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i853 = data
  i852.id = i853[0]
  i852.name = i853[1]
  i852.path = i853[2]
  var i855 = i853[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i855[i + 0]) );
  }
  i852.states = i854
  var i857 = i853[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i857[i + 0]) );
  }
  i852.machines = i856
  var i859 = i853[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i859[i + 0]) );
  }
  i852.entryStateTransitions = i858
  var i861 = i853[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i861[i + 0]) );
  }
  i852.exitStateTransitions = i860
  var i863 = i853[7]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i863[i + 0]) );
  }
  i852.anyStateTransitions = i862
  i852.defaultStateId = i853[8]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i867 = data
  i866.id = i867[0]
  i866.name = i867[1]
  i866.cycleOffset = i867[2]
  i866.cycleOffsetParameter = i867[3]
  i866.cycleOffsetParameterActive = !!i867[4]
  i866.mirror = !!i867[5]
  i866.mirrorParameter = i867[6]
  i866.mirrorParameterActive = !!i867[7]
  i866.motionId = i867[8]
  i866.nameHash = i867[9]
  i866.fullPathHash = i867[10]
  i866.speed = i867[11]
  i866.speedParameter = i867[12]
  i866.speedParameterActive = !!i867[13]
  i866.tag = i867[14]
  i866.tagHash = i867[15]
  i866.writeDefaultValues = !!i867[16]
  var i869 = i867[17]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.behaviours = i868
  var i871 = i867[18]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i871[i + 0]) );
  }
  i866.transitions = i870
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i877 = data
  i876.fullPath = i877[0]
  i876.canTransitionToSelf = !!i877[1]
  i876.duration = i877[2]
  i876.exitTime = i877[3]
  i876.hasExitTime = !!i877[4]
  i876.hasFixedDuration = !!i877[5]
  i876.interruptionSource = i877[6]
  i876.offset = i877[7]
  i876.orderedInterruption = !!i877[8]
  i876.destinationStateId = i877[9]
  i876.isExit = !!i877[10]
  i876.mute = !!i877[11]
  i876.solo = !!i877[12]
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i879[i + 0]) );
  }
  i876.conditions = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i883 = data
  i882.mode = i883[0]
  i882.parameter = i883[1]
  i882.threshold = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i889 = data
  i888.destinationStateId = i889[0]
  i888.isExit = !!i889[1]
  i888.mute = !!i889[2]
  i888.solo = !!i889[3]
  var i891 = i889[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i891[i + 0]) );
  }
  i888.conditions = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i895 = data
  i894.defaultBool = !!i895[0]
  i894.defaultFloat = i895[1]
  i894.defaultInt = i895[2]
  i894.name = i895[3]
  i894.nameHash = i895[4]
  i894.type = i895[5]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i897 = data
  i896.name = i897[0]
  i896.bytes64 = i897[1]
  i896.data = i897[2]
  return i896
}

Deserializers["MelonSandbox.MelonAssets"] = function (request, data, root) {
  var i898 = root || request.c( 'MelonSandbox.MelonAssets' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i898.sprites = i900
  var i903 = i899[1]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i898.sounds = i902
  request.r(i899[2], i899[3], 0, i898, 'originalLayout')
  request.r(i899[4], i899[5], 0, i898, 'damageMaterial')
  request.r(i899[6], i899[7], 0, i898, 'mosaicMaterial')
  request.r(i899[8], i899[9], 0, i898, 'uiFont')
  var i905 = i899[10]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i898.characterPrefabs = i904
  var i907 = i899[11]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i898.toolPrefabs = i906
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i915[i + 0]) );
  }
  i912.files = i914
  i912.componentToPrefabIds = i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i919 = data
  i918.path = i919[0]
  request.r(i919[1], i919[2], 0, i918, 'unityObject')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i923[i + 0]) );
  }
  i920.scriptsExecutionOrder = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i925[i + 0]) );
  }
  i920.sortingLayers = i924
  var i927 = i921[2]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i927[i + 0]) );
  }
  i920.cullingLayers = i926
  i920.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i921[3], i920.timeSettings)
  i920.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i921[4], i920.physicsSettings)
  i920.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i921[5], i920.physics2DSettings)
  i920.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i921[6], i920.qualitySettings)
  i920.enableRealtimeShadows = !!i921[7]
  i920.enableAutoInstancing = !!i921[8]
  i920.enableStaticBatching = !!i921[9]
  i920.enableDynamicBatching = !!i921[10]
  i920.usePreservativeDynamicBatching = !!i921[11]
  i920.lightmapEncodingQuality = i921[12]
  i920.desiredColorSpace = i921[13]
  var i929 = i921[14]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i920.allTags = i928
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i933 = data
  i932.name = i933[0]
  i932.value = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i937 = data
  i936.id = i937[0]
  i936.name = i937[1]
  i936.value = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i941 = data
  i940.id = i941[0]
  i940.name = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i943 = data
  i942.fixedDeltaTime = i943[0]
  i942.maximumDeltaTime = i943[1]
  i942.timeScale = i943[2]
  i942.maximumParticleTimestep = i943[3]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i945 = data
  i944.gravity = new pc.Vec3( i945[0], i945[1], i945[2] )
  i944.defaultSolverIterations = i945[3]
  i944.bounceThreshold = i945[4]
  i944.autoSyncTransforms = !!i945[5]
  i944.autoSimulation = !!i945[6]
  var i947 = i945[7]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i947[i + 0]) );
  }
  i944.collisionMatrix = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i951 = data
  i950.enabled = !!i951[0]
  i950.layerId = i951[1]
  i950.otherLayerId = i951[2]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'material')
  i952.gravity = new pc.Vec2( i953[2], i953[3] )
  i952.positionIterations = i953[4]
  i952.velocityIterations = i953[5]
  i952.velocityThreshold = i953[6]
  i952.maxLinearCorrection = i953[7]
  i952.maxAngularCorrection = i953[8]
  i952.maxTranslationSpeed = i953[9]
  i952.maxRotationSpeed = i953[10]
  i952.baumgarteScale = i953[11]
  i952.baumgarteTOIScale = i953[12]
  i952.timeToSleep = i953[13]
  i952.linearSleepTolerance = i953[14]
  i952.angularSleepTolerance = i953[15]
  i952.defaultContactOffset = i953[16]
  i952.autoSimulation = !!i953[17]
  i952.queriesHitTriggers = !!i953[18]
  i952.queriesStartInColliders = !!i953[19]
  i952.callbacksOnDisable = !!i953[20]
  i952.reuseCollisionCallbacks = !!i953[21]
  i952.autoSyncTransforms = !!i953[22]
  var i955 = i953[23]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i955[i + 0]) );
  }
  i952.collisionMatrix = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i959 = data
  i958.enabled = !!i959[0]
  i958.layerId = i959[1]
  i958.otherLayerId = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i963[i + 0]) );
  }
  i960.qualityLevels = i962
  var i965 = i961[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.names = i964
  i960.shadows = i961[2]
  i960.anisotropicFiltering = i961[3]
  i960.antiAliasing = i961[4]
  i960.lodBias = i961[5]
  i960.shadowCascades = i961[6]
  i960.shadowDistance = i961[7]
  i960.shadowmaskMode = i961[8]
  i960.shadowProjection = i961[9]
  i960.shadowResolution = i961[10]
  i960.softParticles = !!i961[11]
  i960.softVegetation = !!i961[12]
  i960.activeColorSpace = i961[13]
  i960.desiredColorSpace = i961[14]
  i960.masterTextureLimit = i961[15]
  i960.maxQueuedFrames = i961[16]
  i960.particleRaycastBudget = i961[17]
  i960.pixelLightCount = i961[18]
  i960.realtimeReflectionProbes = !!i961[19]
  i960.shadowCascade2Split = i961[20]
  i960.shadowCascade4Split = new pc.Vec3( i961[21], i961[22], i961[23] )
  i960.streamingMipmapsActive = !!i961[24]
  i960.vSyncCount = i961[25]
  i960.asyncUploadBufferSize = i961[26]
  i960.asyncUploadTimeSlice = i961[27]
  i960.billboardsFaceCameraPosition = !!i961[28]
  i960.shadowNearPlaneOffset = i961[29]
  i960.streamingMipmapsMemoryBudget = i961[30]
  i960.maximumLODLevel = i961[31]
  i960.streamingMipmapsAddAllCameras = !!i961[32]
  i960.streamingMipmapsMaxLevelReduction = i961[33]
  i960.streamingMipmapsRenderersPerFrame = i961[34]
  i960.resolutionScalingFixedDPIFactor = i961[35]
  i960.streamingMipmapsMaxFileIORequests = i961[36]
  i960.currentQualityLevel = i961[37]
  return i960
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

Deserializers.lunaAppID = "39964";

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

Deserializers.buildID = "8eefb125-be70-4374-bf6f-28c94aa5c9ba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

