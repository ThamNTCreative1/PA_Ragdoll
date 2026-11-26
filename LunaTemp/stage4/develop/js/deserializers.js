var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointSpring' )
  var i343 = data
  i342.spring = i343[0]
  i342.damper = i343[1]
  i342.targetPosition = i343[2]
  return i342
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointMotor' )
  var i345 = data
  i344.m_TargetVelocity = i345[0]
  i344.m_Force = i345[1]
  i344.m_FreeSpin = i345[2]
  return i344
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointLimits' )
  var i347 = data
  i346.m_Min = i347[0]
  i346.m_Max = i347[1]
  i346.m_Bounciness = i347[2]
  i346.m_BounceMinVelocity = i347[3]
  i346.m_ContactDistance = i347[4]
  i346.minBounce = i347[5]
  i346.maxBounce = i347[6]
  return i346
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointDrive' )
  var i349 = data
  i348.m_PositionSpring = i349[0]
  i348.m_PositionDamper = i349[1]
  i348.m_MaximumForce = i349[2]
  i348.m_UseAcceleration = i349[3]
  return i348
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i351 = data
  i350.m_Spring = i351[0]
  i350.m_Damper = i351[1]
  return i350
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i353 = data
  i352.m_Limit = i353[0]
  i352.m_Bounciness = i353[1]
  i352.m_ContactDistance = i353[2]
  return i352
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i355 = data
  i354.m_ExtremumSlip = i355[0]
  i354.m_ExtremumValue = i355[1]
  i354.m_AsymptoteSlip = i355[2]
  i354.m_AsymptoteValue = i355[3]
  i354.m_Stiffness = i355[4]
  return i354
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i357 = data
  i356.m_LowerAngle = i357[0]
  i356.m_UpperAngle = i357[1]
  return i356
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i359 = data
  i358.m_MotorSpeed = i359[0]
  i358.m_MaximumMotorTorque = i359[1]
  return i358
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i361 = data
  i360.m_DampingRatio = i361[0]
  i360.m_Frequency = i361[1]
  i360.m_Angle = i361[2]
  return i360
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i363 = data
  i362.m_LowerTranslation = i363[0]
  i362.m_UpperTranslation = i363[1]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i364 = root || new pc.UnityMaterial()
  var i365 = data
  i364.name = i365[0]
  request.r(i365[1], i365[2], 0, i364, 'shader')
  i364.renderQueue = i365[3]
  i364.enableInstancing = !!i365[4]
  var i367 = i365[5]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i367[i + 0]) );
  }
  i364.floatParameters = i366
  var i369 = i365[6]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i369[i + 0]) );
  }
  i364.colorParameters = i368
  var i371 = i365[7]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i371[i + 0]) );
  }
  i364.vectorParameters = i370
  var i373 = i365[8]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i373[i + 0]) );
  }
  i364.textureParameters = i372
  var i375 = i365[9]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i375[i + 0]) );
  }
  i364.materialFlags = i374
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = new pc.Color(i383[1], i383[2], i383[3], i383[4])
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = new pc.Vec4( i387[1], i387[2], i387[3], i387[4] )
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i391 = data
  i390.name = i391[0]
  request.r(i391[1], i391[2], 0, i390, 'value')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i395 = data
  i394.name = i395[0]
  i394.enabled = !!i395[1]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i397 = data
  i396.name = i397[0]
  i396.width = i397[1]
  i396.height = i397[2]
  i396.mipmapCount = i397[3]
  i396.anisoLevel = i397[4]
  i396.filterMode = i397[5]
  i396.hdr = !!i397[6]
  i396.format = i397[7]
  i396.wrapMode = i397[8]
  i396.alphaIsTransparency = !!i397[9]
  i396.alphaSource = i397[10]
  i396.graphicsFormat = i397[11]
  i396.sRGBTexture = !!i397[12]
  i396.desiredColorSpace = i397[13]
  i396.wrapU = i397[14]
  i396.wrapV = i397[15]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i399 = data
  i398.position = new pc.Vec3( i399[0], i399[1], i399[2] )
  i398.scale = new pc.Vec3( i399[3], i399[4], i399[5] )
  i398.rotation = new pc.Quat(i399[6], i399[7], i399[8], i399[9])
  return i398
}

Deserializers["SspMan"] = function (request, data, root) {
  var i400 = root || request.c( 'SspMan' )
  var i401 = data
  var i403 = i401[0]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('SspMan+Part', i403[i + 0]) );
  }
  i400.parts = i402
  i400.footDepth = i401[1]
  i400.standForce = i401[2]
  i400.xDamping = i401[3]
  i400.breakable = !!i401[4]
  i400.breakSpeed = i401[5]
  i400.hitSpeed = i401[6]
  i400.jointsToDie = i401[7]
  i400.sortBase = i401[8]
  return i400
}

Deserializers["SspMan+Part"] = function (request, data, root) {
  var i406 = root || request.c( 'SspMan+Part' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'body')
  request.r(i407[2], i407[3], 0, i406, 'joint')
  request.r(i407[4], i407[5], 0, i406, 'col')
  request.r(i407[6], i407[7], 0, i406, 'sr')
  request.r(i407[8], i407[9], 0, i406, 'normal')
  request.r(i407[10], i407[11], 0, i406, 'zombie')
  i406.forcePoint = new pc.Vec2( i407[12], i407[13] )
  i406.sortOffset = i407[14]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i415 = data
  i414.bodyType = i415[0]
  request.r(i415[1], i415[2], 0, i414, 'material')
  i414.simulated = !!i415[3]
  i414.useAutoMass = !!i415[4]
  i414.mass = i415[5]
  i414.drag = i415[6]
  i414.angularDrag = i415[7]
  i414.gravityScale = i415[8]
  i414.collisionDetectionMode = i415[9]
  i414.sleepMode = i415[10]
  i414.constraints = i415[11]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i417 = data
  i416.usedByComposite = !!i417[0]
  i416.autoTiling = !!i417[1]
  i416.size = new pc.Vec2( i417[2], i417[3] )
  i416.edgeRadius = i417[4]
  i416.enabled = !!i417[5]
  i416.isTrigger = !!i417[6]
  i416.usedByEffector = !!i417[7]
  i416.density = i417[8]
  i416.offset = new pc.Vec2( i417[9], i417[10] )
  request.r(i417[11], i417[12], 0, i416, 'material')
  return i416
}

Deserializers["SspPartHit"] = function (request, data, root) {
  var i418 = root || request.c( 'SspPartHit' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'man')
  i418.index = i419[2]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i421 = data
  i420.name = i421[0]
  i420.tagId = i421[1]
  i420.enabled = !!i421[2]
  i420.isStatic = !!i421[3]
  i420.layer = i421[4]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i423 = data
  i422.useLimits = !!i423[0]
  i422.limits = request.d('UnityEngine.JointAngleLimits2D', i423[1], i422.limits)
  i422.useMotor = !!i423[2]
  i422.motor = request.d('UnityEngine.JointMotor2D', i423[3], i422.motor)
  i422.anchor = new pc.Vec2( i423[4], i423[5] )
  i422.connectedAnchor = new pc.Vec2( i423[6], i423[7] )
  i422.autoConfigureConnectedAnchor = !!i423[8]
  request.r(i423[9], i423[10], 0, i422, 'connectedBody')
  i422.breakForce = i423[11]
  i422.breakTorque = i423[12]
  i422.enableCollision = !!i423[13]
  i422.enabled = !!i423[14]
  return i422
}

Deserializers["FxSprite"] = function (request, data, root) {
  var i424 = root || request.c( 'FxSprite' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'sr')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i427 = data
  i426.name = i427[0]
  i426.index = i427[1]
  i426.startup = !!i427[2]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i429 = data
  i428.aspect = i429[0]
  i428.orthographic = !!i429[1]
  i428.orthographicSize = i429[2]
  i428.backgroundColor = new pc.Color(i429[3], i429[4], i429[5], i429[6])
  i428.nearClipPlane = i429[7]
  i428.farClipPlane = i429[8]
  i428.fieldOfView = i429[9]
  i428.depth = i429[10]
  i428.clearFlags = i429[11]
  i428.cullingMask = i429[12]
  i428.rect = i429[13]
  request.r(i429[14], i429[15], 0, i428, 'targetTexture')
  i428.usePhysicalProperties = !!i429[16]
  i428.focalLength = i429[17]
  i428.sensorSize = new pc.Vec2( i429[18], i429[19] )
  i428.lensShift = new pc.Vec2( i429[20], i429[21] )
  i428.gateFit = i429[22]
  i428.commandBufferCount = i429[23]
  i428.cameraType = i429[24]
  i428.enabled = !!i429[25]
  return i428
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i430 = root || request.c( 'LayoutController' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'cam')
  request.r(i431[2], i431[3], 0, i430, 'game')
  i430.size = i431[4]
  i430.startPosition = new pc.Vec2( i431[5], i431[6] )
  i430.followOffset = new pc.Vec2( i431[7], i431[8] )
  i430.followSpeed = i431[9]
  return i430
}

Deserializers["Snowfall"] = function (request, data, root) {
  var i432 = root || request.c( 'Snowfall' )
  var i433 = data
  var i435 = i433[0]
  var i434 = []
  for(var i = 0; i < i435.length; i += 2) {
  request.r(i435[i + 0], i435[i + 1], 2, i434, '')
  }
  i432.flakes = i434
  i432.area = UnityEngine.Rect.MinMaxRect(i433[1], i433[2], i433[3], i433[4])
  i432.fallSpeed = new pc.Vec2( i433[5], i433[6] )
  i432.sway = i433[7]
  return i432
}

Deserializers["Potion"] = function (request, data, root) {
  var i438 = root || request.c( 'Potion' )
  var i439 = data
  request.r(i439[0], i439[1], 0, i438, 'game')
  return i438
}

Deserializers["FollowHint"] = function (request, data, root) {
  var i440 = root || request.c( 'FollowHint' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'target')
  i440.offset = new pc.Vec3( i441[2], i441[3], i441[4] )
  i440.amplitude = i441[5]
  i440.duration = i441[6]
  return i440
}

Deserializers["Fx"] = function (request, data, root) {
  var i442 = root || request.c( 'Fx' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'bloodPrefab')
  request.r(i443[2], i443[3], 0, i442, 'splashPrefab')
  request.r(i443[4], i443[5], 0, i442, 'smokePrefab')
  request.r(i443[6], i443[7], 0, i442, 'pool')
  i442.bloodBreak = i443[8]
  i442.bloodHit = i443[9]
  i442.bloodSize = new pc.Vec2( i443[10], i443[11] )
  i442.bloodSpeed = new pc.Vec2( i443[12], i443[13] )
  i442.bloodInherit = i443[14]
  i442.bloodLife = i443[15]
  i442.gravity = i443[16]
  i442.bloodDark = new pc.Color(i443[17], i443[18], i443[19], i443[20])
  i442.bloodLight = new pc.Color(i443[21], i443[22], i443[23], i443[24])
  i442.splashCount = i443[25]
  i442.smokeCount = i443[26]
  return i442
}

Deserializers["GameAudio"] = function (request, data, root) {
  var i444 = root || request.c( 'GameAudio' )
  var i445 = data
  var i447 = i445[0]
  var i446 = []
  for(var i = 0; i < i447.length; i += 2) {
  request.r(i447[i + 0], i447[i + 1], 2, i446, '')
  }
  i444.voices = i446
  request.r(i445[1], i445[2], 0, i444, 'ui')
  request.r(i445[3], i445[4], 0, i444, 'hit')
  request.r(i445[5], i445[6], 0, i444, 'breakBone')
  request.r(i445[7], i445[8], 0, i444, 'death')
  request.r(i445[9], i445[10], 0, i444, 'potion')
  request.r(i445[11], i445[12], 0, i444, 'click')
  i444.hitCooldown = i445[13]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'clip')
  request.r(i451[2], i451[3], 0, i450, 'outputAudioMixerGroup')
  i450.playOnAwake = !!i451[4]
  i450.loop = !!i451[5]
  i450.time = i451[6]
  i450.volume = i451[7]
  i450.pitch = i451[8]
  i450.enabled = !!i451[9]
  return i450
}

Deserializers["GameController"] = function (request, data, root) {
  var i452 = root || request.c( 'GameController' )
  var i453 = data
  i452.OnTap = request.d('System.Action', i453[0], i452.OnTap)
  request.r(i453[1], i453[2], 0, i452, 'cam')
  request.r(i453[3], i453[4], 0, i452, 'world')
  request.r(i453[5], i453[6], 0, i452, 'playerSpawn')
  var i455 = i453[7]
  var i454 = []
  for(var i = 0; i < i455.length; i += 2) {
  request.r(i455[i + 0], i455[i + 1], 2, i454, '')
  }
  i452.monsterSpawns = i454
  var i457 = i453[8]
  var i456 = []
  for(var i = 0; i < i457.length; i += 2) {
  request.r(i457[i + 0], i457[i + 1], 2, i456, '')
  }
  i452.skinPrefabs = i456
  i452.monsterSkins = i453[9]
  request.r(i453[10], i453[11], 0, i452, 'potionBody')
  var i459 = i453[12]
  var i458 = []
  for(var i = 0; i < i459.length; i += 2) {
  request.r(i459[i + 0], i459[i + 1], 2, i458, '')
  }
  i452.looseOnZombie = i458
  request.r(i453[13], i453[14], 0, i452, 'fx')
  request.r(i453[15], i453[16], 0, i452, 'sfx')
  request.r(i453[17], i453[18], 0, i452, 'tut')
  request.r(i453[19], i453[20], 0, i452, 'potionHint')
  var i461 = i453[21]
  var i460 = []
  for(var i = 0; i < i461.length; i += 2) {
  request.r(i461[i + 0], i461[i + 1], 2, i460, '')
  }
  i452.monsterHints = i460
  request.r(i453[22], i453[23], 0, i452, 'tut2')
  request.r(i453[24], i453[25], 0, i452, 'endUI')
  i452.playerLayer = i453[26]
  i452.followMaxSpeed = i453[27]
  i452.dragBounds = UnityEngine.Rect.MinMaxRect(i453[28], i453[29], i453[30], i453[31])
  i452.endDelay = i453[32]
  return i452
}

Deserializers["System.Action"] = function (request, data, root) {
  var i462 = root || request.c( 'System.Action' )
  var i463 = data
  return i462
}

Deserializers["LunaController"] = function (request, data, root) {
  var i470 = root || request.c( 'LunaController' )
  var i471 = data
  i470.Player = i471[0]
  i470.Monster1 = i471[1]
  i470.Monster2 = i471[2]
  i470.Monster3 = i471[3]
  i470.LimitTimePlay = !!i471[4]
  i470.TimePlay = i471[5]
  i470.LimitClick = !!i471[6]
  i470.MaxClick = i471[7]
  request.r(i471[8], i471[9], 0, i470, 'BGM')
  request.r(i471[10], i471[11], 0, i470, 'BGTexture')
  i470.CustomWinter = !!i471[12]
  request.r(i471[13], i471[14], 0, i470, 'LogoTexture')
  i470.AppName = i471[15]
  request.r(i471[16], i471[17], 0, i470, 'game')
  request.r(i471[18], i471[19], 0, i470, 'sfx')
  request.r(i471[20], i471[21], 0, i470, 'musicSource')
  i470.musicVolume = i471[22]
  request.r(i471[23], i471[24], 0, i470, 'BGImage')
  request.r(i471[25], i471[26], 0, i470, 'mapTheme')
  request.r(i471[27], i471[28], 0, i470, 'logo')
  request.r(i471[29], i471[30], 0, i470, 'nameText')
  var i473 = i471[31]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 1, i472, '')
  }
  i470.CTA = i472
  request.r(i471[32], i471[33], 0, i470, 'endCard')
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i477 = data
  i476.pivot = new pc.Vec2( i477[0], i477[1] )
  i476.anchorMin = new pc.Vec2( i477[2], i477[3] )
  i476.anchorMax = new pc.Vec2( i477[4], i477[5] )
  i476.sizeDelta = new pc.Vec2( i477[6], i477[7] )
  i476.anchoredPosition3D = new pc.Vec3( i477[8], i477[9], i477[10] )
  i476.rotation = new pc.Quat(i477[11], i477[12], i477[13], i477[14])
  i476.scale = new pc.Vec3( i477[15], i477[16], i477[17] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i479 = data
  i478.planeDistance = i479[0]
  i478.referencePixelsPerUnit = i479[1]
  i478.isFallbackOverlay = !!i479[2]
  i478.renderMode = i479[3]
  i478.renderOrder = i479[4]
  i478.sortingLayerName = i479[5]
  i478.sortingOrder = i479[6]
  i478.scaleFactor = i479[7]
  request.r(i479[8], i479[9], 0, i478, 'worldCamera')
  i478.overrideSorting = !!i479[10]
  i478.pixelPerfect = !!i479[11]
  i478.targetDisplay = i479[12]
  i478.overridePixelPerfect = !!i479[13]
  i478.enabled = !!i479[14]
  return i478
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i481 = data
  i480.m_UiScaleMode = i481[0]
  i480.m_ReferencePixelsPerUnit = i481[1]
  i480.m_ScaleFactor = i481[2]
  i480.m_ReferenceResolution = new pc.Vec2( i481[3], i481[4] )
  i480.m_ScreenMatchMode = i481[5]
  i480.m_MatchWidthOrHeight = i481[6]
  i480.m_PhysicalUnit = i481[7]
  i480.m_FallbackScreenDPI = i481[8]
  i480.m_DefaultSpriteDPI = i481[9]
  i480.m_DynamicPixelsPerUnit = i481[10]
  i480.m_PresetInfoIsWorld = !!i481[11]
  return i480
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i483 = data
  i482.m_IgnoreReversedGraphics = !!i483[0]
  i482.m_BlockingObjects = i483[1]
  i482.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i483[2] )
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i485 = data
  i484.cullTransparentMesh = !!i485[0]
  return i484
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Image' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'm_Sprite')
  i486.m_Type = i487[2]
  i486.m_PreserveAspect = !!i487[3]
  i486.m_FillCenter = !!i487[4]
  i486.m_FillMethod = i487[5]
  i486.m_FillAmount = i487[6]
  i486.m_FillClockwise = !!i487[7]
  i486.m_FillOrigin = i487[8]
  i486.m_UseSpriteMesh = !!i487[9]
  i486.m_PixelsPerUnitMultiplier = i487[10]
  request.r(i487[11], i487[12], 0, i486, 'm_Material')
  i486.m_Maskable = !!i487[13]
  i486.m_Color = new pc.Color(i487[14], i487[15], i487[16], i487[17])
  i486.m_RaycastTarget = !!i487[18]
  i486.m_RaycastPadding = new pc.Vec4( i487[19], i487[20], i487[21], i487[22] )
  return i486
}

Deserializers["DragZone"] = function (request, data, root) {
  var i488 = root || request.c( 'DragZone' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'game')
  return i488
}

Deserializers["UiTween"] = function (request, data, root) {
  var i490 = root || request.c( 'UiTween' )
  var i491 = data
  i490.mode = i491[0]
  i490.duration = i491[1]
  i490.endScale = i491[2]
  i490.endPosition = new pc.Vec2( i491[3], i491[4] )
  i490.endColor = new pc.Color(i491[5], i491[6], i491[7], i491[8])
  request.r(i491[9], i491[10], 0, i490, 'rect')
  request.r(i491[11], i491[12], 0, i490, 'graphic')
  return i490
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.Text' )
  var i493 = data
  i492.m_FontData = request.d('UnityEngine.UI.FontData', i493[0], i492.m_FontData)
  i492.m_Text = i493[1]
  request.r(i493[2], i493[3], 0, i492, 'm_Material')
  i492.m_Maskable = !!i493[4]
  i492.m_Color = new pc.Color(i493[5], i493[6], i493[7], i493[8])
  i492.m_RaycastTarget = !!i493[9]
  i492.m_RaycastPadding = new pc.Vec4( i493[10], i493[11], i493[12], i493[13] )
  return i492
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.FontData' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_Font')
  i494.m_FontSize = i495[2]
  i494.m_FontStyle = i495[3]
  i494.m_BestFit = !!i495[4]
  i494.m_MinSize = i495[5]
  i494.m_MaxSize = i495[6]
  i494.m_Alignment = i495[7]
  i494.m_AlignByGeometry = !!i495[8]
  i494.m_RichText = !!i495[9]
  i494.m_HorizontalOverflow = i495[10]
  i494.m_VerticalOverflow = i495[11]
  i494.m_LineSpacing = i495[12]
  return i494
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Button' )
  var i497 = data
  i496.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i497[0], i496.m_OnClick)
  i496.m_Navigation = request.d('UnityEngine.UI.Navigation', i497[1], i496.m_Navigation)
  i496.m_Transition = i497[2]
  i496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i497[3], i496.m_Colors)
  i496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i497[4], i496.m_SpriteState)
  i496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i497[5], i496.m_AnimationTriggers)
  i496.m_Interactable = !!i497[6]
  request.r(i497[7], i497[8], 0, i496, 'm_TargetGraphic')
  return i496
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i499 = data
  i498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i499[0], i498.m_PersistentCalls)
  return i498
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i501 = data
  var i503 = i501[0]
  var i502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i503.length; i += 1) {
    i502.add(request.d('UnityEngine.Events.PersistentCall', i503[i + 0]));
  }
  i500.m_Calls = i502
  return i500
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Target')
  i506.m_TargetAssemblyTypeName = i507[2]
  i506.m_MethodName = i507[3]
  i506.m_Mode = i507[4]
  i506.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i507[5], i506.m_Arguments)
  i506.m_CallState = i507[6]
  return i506
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i509 = data
  i508.m_Mode = i509[0]
  i508.m_WrapAround = !!i509[1]
  request.r(i509[2], i509[3], 0, i508, 'm_SelectOnUp')
  request.r(i509[4], i509[5], 0, i508, 'm_SelectOnDown')
  request.r(i509[6], i509[7], 0, i508, 'm_SelectOnLeft')
  request.r(i509[8], i509[9], 0, i508, 'm_SelectOnRight')
  return i508
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i511 = data
  i510.m_NormalColor = new pc.Color(i511[0], i511[1], i511[2], i511[3])
  i510.m_HighlightedColor = new pc.Color(i511[4], i511[5], i511[6], i511[7])
  i510.m_PressedColor = new pc.Color(i511[8], i511[9], i511[10], i511[11])
  i510.m_SelectedColor = new pc.Color(i511[12], i511[13], i511[14], i511[15])
  i510.m_DisabledColor = new pc.Color(i511[16], i511[17], i511[18], i511[19])
  i510.m_ColorMultiplier = i511[20]
  i510.m_FadeDuration = i511[21]
  return i510
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'm_HighlightedSprite')
  request.r(i513[2], i513[3], 0, i512, 'm_PressedSprite')
  request.r(i513[4], i513[5], 0, i512, 'm_SelectedSprite')
  request.r(i513[6], i513[7], 0, i512, 'm_DisabledSprite')
  return i512
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i515 = data
  i514.m_NormalTrigger = i515[0]
  i514.m_HighlightedTrigger = i515[1]
  i514.m_PressedTrigger = i515[2]
  i514.m_SelectedTrigger = i515[3]
  i514.m_DisabledTrigger = i515[4]
  return i514
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'm_Texture')
  i516.m_UVRect = UnityEngine.Rect.MinMaxRect(i517[2], i517[3], i517[4], i517[5])
  request.r(i517[6], i517[7], 0, i516, 'm_Material')
  i516.m_Maskable = !!i517[8]
  i516.m_Color = new pc.Color(i517[9], i517[10], i517[11], i517[12])
  i516.m_RaycastTarget = !!i517[13]
  i516.m_RaycastPadding = new pc.Vec4( i517[14], i517[15], i517[16], i517[17] )
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

Deserializers["MapTheme"] = function (request, data, root) {
  var i522 = root || request.c( 'MapTheme' )
  var i523 = data
  var i525 = i523[0]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.normalObjects = i524
  var i527 = i523[1]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i522.winterObjects = i526
  var i529 = i523[2]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i522.normalRenderers = i528
  request.r(i523[3], i523[4], 0, i522, 'cam')
  i522.normalBackground = new pc.Color(i523[5], i523[6], i523[7], i523[8])
  i522.winterBackground = new pc.Color(i523[9], i523[10], i523[11], i523[12])
  return i522
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i535 = data
  i534.m_AspectMode = i535[0]
  i534.m_AspectRatio = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i537 = data
  i536.ambientIntensity = i537[0]
  i536.reflectionIntensity = i537[1]
  i536.ambientMode = i537[2]
  i536.ambientLight = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.ambientSkyColor = new pc.Color(i537[7], i537[8], i537[9], i537[10])
  i536.ambientGroundColor = new pc.Color(i537[11], i537[12], i537[13], i537[14])
  i536.ambientEquatorColor = new pc.Color(i537[15], i537[16], i537[17], i537[18])
  i536.fogColor = new pc.Color(i537[19], i537[20], i537[21], i537[22])
  i536.fogEndDistance = i537[23]
  i536.fogStartDistance = i537[24]
  i536.fogDensity = i537[25]
  i536.fog = !!i537[26]
  request.r(i537[27], i537[28], 0, i536, 'skybox')
  i536.fogMode = i537[29]
  var i539 = i537[30]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i539[i + 0]) );
  }
  i536.lightmaps = i538
  i536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i537[31], i536.lightProbes)
  i536.lightmapsMode = i537[32]
  i536.mixedBakeMode = i537[33]
  i536.environmentLightingMode = i537[34]
  i536.ambientProbe = new pc.SphericalHarmonicsL2(i537[35])
  request.r(i537[36], i537[37], 0, i536, 'customReflection')
  request.r(i537[38], i537[39], 0, i536, 'defaultReflection')
  i536.defaultReflectionMode = i537[40]
  i536.defaultReflectionResolution = i537[41]
  i536.sunLightObjectId = i537[42]
  i536.pixelLightCount = i537[43]
  i536.defaultReflectionHDR = !!i537[44]
  i536.hasLightDataAsset = !!i537[45]
  i536.hasManualGenerate = !!i537[46]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'lightmapColor')
  request.r(i543[2], i543[3], 0, i542, 'lightmapDirection')
  request.r(i543[4], i543[5], 0, i542, 'shadowMask')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i544 = root || new UnityEngine.LightProbes()
  var i545 = data
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i555[i + 0]));
  }
  i552.ShaderCompilationErrors = i554
  i552.name = i553[1]
  i552.guid = i553[2]
  var i557 = i553[3]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.shaderDefinedKeywords = i556
  var i559 = i553[4]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i559[i + 0]) );
  }
  i552.passes = i558
  var i561 = i553[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i561[i + 0]) );
  }
  i552.usePasses = i560
  var i563 = i553[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i563[i + 0]) );
  }
  i552.defaultParameterValues = i562
  request.r(i553[7], i553[8], 0, i552, 'unityFallbackShader')
  i552.readDepth = !!i553[9]
  i552.hasDepthOnlyPass = !!i553[10]
  i552.isCreatedByShaderGraph = !!i553[11]
  i552.disableBatching = !!i553[12]
  i552.compiled = !!i553[13]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i567 = data
  i566.shaderName = i567[0]
  i566.errorMessage = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i572 = root || new pc.UnityShaderPass()
  var i573 = data
  i572.id = i573[0]
  i572.subShaderIndex = i573[1]
  i572.name = i573[2]
  i572.passType = i573[3]
  i572.grabPassTextureName = i573[4]
  i572.usePass = !!i573[5]
  i572.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[6], i572.zTest)
  i572.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[7], i572.zWrite)
  i572.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[8], i572.culling)
  i572.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i573[9], i572.blending)
  i572.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i573[10], i572.alphaBlending)
  i572.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[11], i572.colorWriteMask)
  i572.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[12], i572.offsetUnits)
  i572.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[13], i572.offsetFactor)
  i572.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[14], i572.stencilRef)
  i572.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[15], i572.stencilReadMask)
  i572.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i573[16], i572.stencilWriteMask)
  i572.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[17], i572.stencilOp)
  i572.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[18], i572.stencilOpFront)
  i572.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i573[19], i572.stencilOpBack)
  var i575 = i573[20]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i575[i + 0]) );
  }
  i572.tags = i574
  var i577 = i573[21]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( i577[i + 0] );
  }
  i572.passDefinedKeywords = i576
  var i579 = i573[22]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i579[i + 0]) );
  }
  i572.passDefinedKeywordGroups = i578
  var i581 = i573[23]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i581[i + 0]) );
  }
  i572.variants = i580
  var i583 = i573[24]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i583[i + 0]) );
  }
  i572.excludedVariants = i582
  i572.hasDepthReader = !!i573[25]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i585 = data
  i584.val = i585[0]
  i584.name = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i587 = data
  i586.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[0], i586.src)
  i586.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[1], i586.dst)
  i586.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i587[2], i586.op)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i589 = data
  i588.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[0], i588.pass)
  i588.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[1], i588.fail)
  i588.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[2], i588.zFail)
  i588.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[3], i588.comp)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i593 = data
  i592.name = i593[0]
  i592.value = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i597 = data
  var i599 = i597[0]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i596.keywords = i598
  i596.hasDiscard = !!i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i603 = data
  i602.passId = i603[0]
  i602.subShaderIndex = i603[1]
  var i605 = i603[2]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( i605[i + 0] );
  }
  i602.keywords = i604
  i602.vertexProgram = i603[3]
  i602.fragmentProgram = i603[4]
  i602.exportedForWebGl2 = !!i603[5]
  i602.readDepth = !!i603[6]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'shader')
  i608.pass = i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i613 = data
  i612.name = i613[0]
  i612.type = i613[1]
  i612.value = new pc.Vec4( i613[2], i613[3], i613[4], i613[5] )
  i612.textureValue = i613[6]
  i612.shaderPropertyFlag = i613[7]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i615 = data
  i614.name = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'texture')
  i614.aabb = i615[3]
  i614.vertices = i615[4]
  i614.triangles = i615[5]
  i614.textureRect = UnityEngine.Rect.MinMaxRect(i615[6], i615[7], i615[8], i615[9])
  i614.packedRect = UnityEngine.Rect.MinMaxRect(i615[10], i615[11], i615[12], i615[13])
  i614.border = new pc.Vec4( i615[14], i615[15], i615[16], i615[17] )
  i614.transparency = i615[18]
  i614.bounds = i615[19]
  i614.pixelsPerUnit = i615[20]
  i614.textureWidth = i615[21]
  i614.textureHeight = i615[22]
  i614.nativeSize = new pc.Vec2( i615[23], i615[24] )
  i614.pivot = new pc.Vec2( i615[25], i615[26] )
  i614.textureRectOffset = new pc.Vec2( i615[27], i615[28] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i617 = data
  i616.name = i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i619 = data
  i618.name = i619[0]
  i618.ascent = i619[1]
  i618.originalLineHeight = i619[2]
  i618.fontSize = i619[3]
  var i621 = i619[4]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i621[i + 0]) );
  }
  i618.characterInfo = i620
  request.r(i619[5], i619[6], 0, i618, 'texture')
  i618.originalFontSize = i619[7]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i625 = data
  i624.index = i625[0]
  i624.advance = i625[1]
  i624.bearing = i625[2]
  i624.glyphWidth = i625[3]
  i624.glyphHeight = i625[4]
  i624.minX = i625[5]
  i624.maxX = i625[6]
  i624.minY = i625[7]
  i624.maxY = i625[8]
  i624.uvBottomLeftX = i625[9]
  i624.uvBottomLeftY = i625[10]
  i624.uvBottomRightX = i625[11]
  i624.uvBottomRightY = i625[12]
  i624.uvTopLeftX = i625[13]
  i624.uvTopLeftY = i625[14]
  i624.uvTopRightX = i625[15]
  i624.uvTopRightY = i625[16]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i627 = data
  var i629 = i627[0]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i629[i + 0]) );
  }
  i626.files = i628
  i626.componentToPrefabIds = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i633 = data
  i632.path = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'unityObject')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i635 = data
  var i637 = i635[0]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i637[i + 0]) );
  }
  i634.scriptsExecutionOrder = i636
  var i639 = i635[1]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i639[i + 0]) );
  }
  i634.sortingLayers = i638
  var i641 = i635[2]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i641[i + 0]) );
  }
  i634.cullingLayers = i640
  i634.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i635[3], i634.timeSettings)
  i634.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i635[4], i634.physicsSettings)
  i634.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i635[5], i634.physics2DSettings)
  i634.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i635[6], i634.qualitySettings)
  i634.enableRealtimeShadows = !!i635[7]
  i634.enableAutoInstancing = !!i635[8]
  i634.enableStaticBatching = !!i635[9]
  i634.enableDynamicBatching = !!i635[10]
  i634.usePreservativeDynamicBatching = !!i635[11]
  i634.lightmapEncodingQuality = i635[12]
  i634.desiredColorSpace = i635[13]
  var i643 = i635[14]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( i643[i + 0] );
  }
  i634.allTags = i642
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i647 = data
  i646.name = i647[0]
  i646.value = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i651 = data
  i650.id = i651[0]
  i650.name = i651[1]
  i650.value = i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i655 = data
  i654.id = i655[0]
  i654.name = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i657 = data
  i656.fixedDeltaTime = i657[0]
  i656.maximumDeltaTime = i657[1]
  i656.timeScale = i657[2]
  i656.maximumParticleTimestep = i657[3]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i659 = data
  i658.gravity = new pc.Vec3( i659[0], i659[1], i659[2] )
  i658.defaultSolverIterations = i659[3]
  i658.bounceThreshold = i659[4]
  i658.autoSyncTransforms = !!i659[5]
  i658.autoSimulation = !!i659[6]
  var i661 = i659[7]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i661[i + 0]) );
  }
  i658.collisionMatrix = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i665 = data
  i664.enabled = !!i665[0]
  i664.layerId = i665[1]
  i664.otherLayerId = i665[2]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'material')
  i666.gravity = new pc.Vec2( i667[2], i667[3] )
  i666.positionIterations = i667[4]
  i666.velocityIterations = i667[5]
  i666.velocityThreshold = i667[6]
  i666.maxLinearCorrection = i667[7]
  i666.maxAngularCorrection = i667[8]
  i666.maxTranslationSpeed = i667[9]
  i666.maxRotationSpeed = i667[10]
  i666.baumgarteScale = i667[11]
  i666.baumgarteTOIScale = i667[12]
  i666.timeToSleep = i667[13]
  i666.linearSleepTolerance = i667[14]
  i666.angularSleepTolerance = i667[15]
  i666.defaultContactOffset = i667[16]
  i666.autoSimulation = !!i667[17]
  i666.queriesHitTriggers = !!i667[18]
  i666.queriesStartInColliders = !!i667[19]
  i666.callbacksOnDisable = !!i667[20]
  i666.reuseCollisionCallbacks = !!i667[21]
  i666.autoSyncTransforms = !!i667[22]
  var i669 = i667[23]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i669[i + 0]) );
  }
  i666.collisionMatrix = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i673 = data
  i672.enabled = !!i673[0]
  i672.layerId = i673[1]
  i672.otherLayerId = i673[2]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i675 = data
  var i677 = i675[0]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i677[i + 0]) );
  }
  i674.qualityLevels = i676
  var i679 = i675[1]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i674.names = i678
  i674.shadows = i675[2]
  i674.anisotropicFiltering = i675[3]
  i674.antiAliasing = i675[4]
  i674.lodBias = i675[5]
  i674.shadowCascades = i675[6]
  i674.shadowDistance = i675[7]
  i674.shadowmaskMode = i675[8]
  i674.shadowProjection = i675[9]
  i674.shadowResolution = i675[10]
  i674.softParticles = !!i675[11]
  i674.softVegetation = !!i675[12]
  i674.activeColorSpace = i675[13]
  i674.desiredColorSpace = i675[14]
  i674.masterTextureLimit = i675[15]
  i674.maxQueuedFrames = i675[16]
  i674.particleRaycastBudget = i675[17]
  i674.pixelLightCount = i675[18]
  i674.realtimeReflectionProbes = !!i675[19]
  i674.shadowCascade2Split = i675[20]
  i674.shadowCascade4Split = new pc.Vec3( i675[21], i675[22], i675[23] )
  i674.streamingMipmapsActive = !!i675[24]
  i674.vSyncCount = i675[25]
  i674.asyncUploadBufferSize = i675[26]
  i674.asyncUploadTimeSlice = i675[27]
  i674.billboardsFaceCameraPosition = !!i675[28]
  i674.shadowNearPlaneOffset = i675[29]
  i674.streamingMipmapsMemoryBudget = i675[30]
  i674.maximumLODLevel = i675[31]
  i674.streamingMipmapsAddAllCameras = !!i675[32]
  i674.streamingMipmapsMaxLevelReduction = i675[33]
  i674.streamingMipmapsRenderersPerFrame = i675[34]
  i674.resolutionScalingFixedDPIFactor = i675[35]
  i674.streamingMipmapsMaxFileIORequests = i675[36]
  i674.currentQualityLevel = i675[37]
  return i674
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_ObjectArgument')
  i682.m_ObjectArgumentAssemblyTypeName = i683[2]
  i682.m_IntArgument = i683[3]
  i682.m_FloatArgument = i683[4]
  i682.m_StringArgument = i683[5]
  i682.m_BoolArgument = !!i683[6]
  return i682
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[12],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[4],"61":[4],"62":[4],"63":[4],"64":[4],"65":[4],"8":[4],"66":[4],"67":[4],"68":[4],"69":[4],"70":[4],"71":[4],"72":[12],"73":[74],"75":[76],"77":[76],"31":[30],"78":[6],"79":[12],"80":[81],"82":[30],"83":[35,30],"84":[74],"85":[35,30],"86":[30],"87":[30],"88":[74,30],"89":[30,35],"90":[91],"92":[91],"93":[91],"94":[30],"95":[30],"34":[31],"36":[35,30],"42":[30],"33":[31],"96":[30],"97":[30],"98":[30],"99":[30],"100":[30],"101":[30],"102":[30],"103":[30],"104":[30],"26":[35,30],"105":[30],"106":[30],"107":[30],"108":[30],"28":[35,30],"109":[30],"110":[40],"111":[40],"41":[40],"112":[40],"113":[12],"114":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","SspMan","UnityEngine.Rigidbody2D","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.HingeJoint2D","UnityEngine.Material","SspPartHit","FxSprite","UnityEngine.Camera","UnityEngine.AudioListener","LayoutController","GameController","Snowfall","Potion","FollowHint","Fx","GameAudio","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","UnityEngine.UI.RawImage","MapTheme","UnityEngine.UI.Text","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","DragZone","UiTween","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.UI.AspectRatioFitter","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_V10";

Deserializers.lunaInitializationTime = "11/26/2026 08:21:17";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SSP_V10_YenTTH";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "b40b1a120fb8e82458c4fb3d775da064";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1770";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3480";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_V10";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "16946df5-2185-433b-9362-e424a07f8ea8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

