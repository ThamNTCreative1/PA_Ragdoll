var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSpring' )
  var i703 = data
  i702.spring = i703[0]
  i702.damper = i703[1]
  i702.targetPosition = i703[2]
  return i702
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointMotor' )
  var i705 = data
  i704.m_TargetVelocity = i705[0]
  i704.m_Force = i705[1]
  i704.m_FreeSpin = i705[2]
  return i704
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointLimits' )
  var i707 = data
  i706.m_Min = i707[0]
  i706.m_Max = i707[1]
  i706.m_Bounciness = i707[2]
  i706.m_BounceMinVelocity = i707[3]
  i706.m_ContactDistance = i707[4]
  i706.minBounce = i707[5]
  i706.maxBounce = i707[6]
  return i706
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointDrive' )
  var i709 = data
  i708.m_PositionSpring = i709[0]
  i708.m_PositionDamper = i709[1]
  i708.m_MaximumForce = i709[2]
  i708.m_UseAcceleration = i709[3]
  return i708
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i711 = data
  i710.m_Spring = i711[0]
  i710.m_Damper = i711[1]
  return i710
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i713 = data
  i712.m_Limit = i713[0]
  i712.m_Bounciness = i713[1]
  i712.m_ContactDistance = i713[2]
  return i712
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i715 = data
  i714.m_ExtremumSlip = i715[0]
  i714.m_ExtremumValue = i715[1]
  i714.m_AsymptoteSlip = i715[2]
  i714.m_AsymptoteValue = i715[3]
  i714.m_Stiffness = i715[4]
  return i714
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i717 = data
  i716.m_LowerAngle = i717[0]
  i716.m_UpperAngle = i717[1]
  return i716
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i719 = data
  i718.m_MotorSpeed = i719[0]
  i718.m_MaximumMotorTorque = i719[1]
  return i718
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i721 = data
  i720.m_DampingRatio = i721[0]
  i720.m_Frequency = i721[1]
  i720.m_Angle = i721[2]
  return i720
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i723 = data
  i722.m_LowerTranslation = i723[0]
  i722.m_UpperTranslation = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i725 = data
  i724.position = new pc.Vec3( i725[0], i725[1], i725[2] )
  i724.scale = new pc.Vec3( i725[3], i725[4], i725[5] )
  i724.rotation = new pc.Quat(i725[6], i725[7], i725[8], i725[9])
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterController"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterController' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.center = new pc.Vec3( i727[1], i727[2], i727[3] )
  i726.radius = i727[4]
  i726.height = i727[5]
  i726.minMoveDistance = i727[6]
  i726.skinWidth = i727[7]
  i726.enableOverlapRecovery = !!i727[8]
  return i726
}

Deserializers["OBP.FreezeBrainrot.PlayerController"] = function (request, data, root) {
  var i728 = root || request.c( 'OBP.FreezeBrainrot.PlayerController' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'animator')
  request.r(i729[2], i729[3], 0, i728, 'cameraTransform')
  i728.moveSpeed = i729[4]
  i728.turnSpeed = i729[5]
  i728.jumpVelocity = i729[6]
  i728.gravity = i729[7]
  i728.jumpBuffer = i729[8]
  return i728
}

Deserializers["OBP.FreezeBrainrot.FreezeGun"] = function (request, data, root) {
  var i730 = root || request.c( 'OBP.FreezeBrainrot.FreezeGun' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'player')
  request.r(i731[2], i731[3], 0, i730, 'animator')
  request.r(i731[4], i731[5], 0, i730, 'muzzle')
  request.r(i731[6], i731[7], 0, i730, 'beam')
  request.r(i731[8], i731[9], 0, i730, 'game')
  request.r(i731[10], i731[11], 0, i730, 'aimCamera')
  i730.aimAssistAngle = i731[12]
  i730.stickiness = i731[13]
  i730.range = i731[14]
  i730.nearRate = i731[15]
  i730.farRate = i731[16]
  i730.nearDistance = i731[17]
  i730.beamWidth = i731[18]
  request.r(i731[19], i731[20], 0, i730, 'gunModel')
  request.r(i731[21], i731[22], 0, i730, 'spine')
  i730.spineWeight = i731[23]
  i730.aimInSpeed = i731[24]
  i730.aimOutSpeed = i731[25]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'animatorController')
  request.r(i733[2], i733[3], 0, i732, 'avatar')
  i732.updateMode = i733[4]
  i732.hasTransformHierarchy = !!i733[5]
  i732.applyRootMotion = !!i733[6]
  var i735 = i733[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.humanBones = i734
  i732.enabled = !!i733[8]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'sharedMesh')
  var i741 = i739[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.bones = i740
  i738.updateWhenOffscreen = !!i739[3]
  i738.localBounds = i739[4]
  request.r(i739[5], i739[6], 0, i738, 'rootBone')
  var i743 = i739[7]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i743[i + 0]) );
  }
  i738.blendShapesWeights = i742
  i738.enabled = !!i739[8]
  request.r(i739[9], i739[10], 0, i738, 'sharedMaterial')
  var i745 = i739[11]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i738.sharedMaterials = i744
  i738.receiveShadows = !!i739[12]
  i738.shadowCastingMode = i739[13]
  i738.sortingLayerID = i739[14]
  i738.sortingOrder = i739[15]
  i738.lightmapIndex = i739[16]
  i738.lightmapSceneIndex = i739[17]
  i738.lightmapScaleOffset = new pc.Vec4( i739[18], i739[19], i739[20], i739[21] )
  i738.lightProbeUsage = i739[22]
  i738.reflectionProbeUsage = i739[23]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i749 = data
  i748.weight = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i753 = data
  i752.name = i753[0]
  i752.tagId = i753[1]
  i752.enabled = !!i753[2]
  i752.isStatic = !!i753[3]
  i752.layer = i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'sharedMesh')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'additionalVertexStreams')
  i756.enabled = !!i757[2]
  request.r(i757[3], i757[4], 0, i756, 'sharedMaterial')
  var i759 = i757[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sharedMaterials = i758
  i756.receiveShadows = !!i757[6]
  i756.shadowCastingMode = i757[7]
  i756.sortingLayerID = i757[8]
  i756.sortingOrder = i757[9]
  i756.lightmapIndex = i757[10]
  i756.lightmapSceneIndex = i757[11]
  i756.lightmapScaleOffset = new pc.Vec4( i757[12], i757[13], i757[14], i757[15] )
  i756.lightProbeUsage = i757[16]
  i756.reflectionProbeUsage = i757[17]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i760 = root || new pc.UnityMaterial()
  var i761 = data
  i760.name = i761[0]
  request.r(i761[1], i761[2], 0, i760, 'shader')
  i760.renderQueue = i761[3]
  i760.enableInstancing = !!i761[4]
  var i763 = i761[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i763[i + 0]) );
  }
  i760.floatParameters = i762
  var i765 = i761[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i765[i + 0]) );
  }
  i760.colorParameters = i764
  var i767 = i761[7]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i767[i + 0]) );
  }
  i760.vectorParameters = i766
  var i769 = i761[8]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i769[i + 0]) );
  }
  i760.textureParameters = i768
  var i771 = i761[9]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i771[i + 0]) );
  }
  i760.materialFlags = i770
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i779 = data
  i778.name = i779[0]
  i778.value = new pc.Color(i779[1], i779[2], i779[3], i779[4])
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i783 = data
  i782.name = i783[0]
  i782.value = new pc.Vec4( i783[1], i783[2], i783[3], i783[4] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'value')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i791 = data
  i790.name = i791[0]
  i790.enabled = !!i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i793 = data
  i792.name = i793[0]
  i792.width = i793[1]
  i792.height = i793[2]
  i792.mipmapCount = i793[3]
  i792.anisoLevel = i793[4]
  i792.filterMode = i793[5]
  i792.hdr = !!i793[6]
  i792.format = i793[7]
  i792.wrapMode = i793[8]
  i792.alphaIsTransparency = !!i793[9]
  i792.alphaSource = i793[10]
  i792.graphicsFormat = i793[11]
  i792.sRGBTexture = !!i793[12]
  i792.desiredColorSpace = i793[13]
  i792.wrapU = i793[14]
  i792.wrapV = i793[15]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i795 = data
  i794.name = i795[0]
  i794.halfPrecision = !!i795[1]
  i794.useSimplification = !!i795[2]
  i794.useUInt32IndexFormat = !!i795[3]
  i794.vertexCount = i795[4]
  i794.aabb = i795[5]
  var i797 = i795[6]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( !!i797[i + 0] );
  }
  i794.streams = i796
  i794.vertices = i795[7]
  var i799 = i795[8]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i799[i + 0]) );
  }
  i794.subMeshes = i798
  var i801 = i795[9]
  var i800 = []
  for(var i = 0; i < i801.length; i += 16) {
    i800.push( new pc.Mat4().setData(i801[i + 0], i801[i + 1], i801[i + 2], i801[i + 3],  i801[i + 4], i801[i + 5], i801[i + 6], i801[i + 7],  i801[i + 8], i801[i + 9], i801[i + 10], i801[i + 11],  i801[i + 12], i801[i + 13], i801[i + 14], i801[i + 15]) );
  }
  i794.bindposes = i800
  var i803 = i795[10]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i803[i + 0]) );
  }
  i794.blendShapes = i802
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i809 = data
  i808.triangles = i809[0]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i815 = data
  i814.name = i815[0]
  var i817 = i815[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i817[i + 0]) );
  }
  i814.frames = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i819 = data
  i818.name = i819[0]
  i818.atlasId = i819[1]
  i818.mipmapCount = i819[2]
  i818.hdr = !!i819[3]
  i818.size = i819[4]
  i818.anisoLevel = i819[5]
  i818.filterMode = i819[6]
  var i821 = i819[7]
  var i820 = []
  for(var i = 0; i < i821.length; i += 4) {
    i820.push( UnityEngine.Rect.MinMaxRect(i821[i + 0], i821[i + 1], i821[i + 2], i821[i + 3]) );
  }
  i818.rects = i820
  i818.wrapU = i819[8]
  i818.wrapV = i819[9]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i825 = data
  i824.name = i825[0]
  i824.index = i825[1]
  i824.startup = !!i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i827 = data
  i826.type = i827[0]
  i826.color = new pc.Color(i827[1], i827[2], i827[3], i827[4])
  i826.cullingMask = i827[5]
  i826.intensity = i827[6]
  i826.range = i827[7]
  i826.spotAngle = i827[8]
  i826.shadows = i827[9]
  i826.shadowNormalBias = i827[10]
  i826.shadowBias = i827[11]
  i826.shadowStrength = i827[12]
  i826.shadowResolution = i827[13]
  i826.lightmapBakeType = i827[14]
  i826.renderMode = i827[15]
  request.r(i827[16], i827[17], 0, i826, 'cookie')
  i826.cookieSize = i827[18]
  i826.shadowNearPlane = i827[19]
  i826.occlusionMaskChannel = i827[20]
  i826.isBaked = !!i827[21]
  i826.mixedLightingMode = i827[22]
  i826.enabled = !!i827[23]
  return i826
}

Deserializers["OBP.FreezeBrainrot.GameManager"] = function (request, data, root) {
  var i828 = root || request.c( 'OBP.FreezeBrainrot.GameManager' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'player')
  request.r(i829[2], i829[3], 0, i828, 'gun')
  request.r(i829[4], i829[5], 0, i828, 'wave')
  request.r(i829[6], i829[7], 0, i828, 'monstersRoot')
  request.r(i829[8], i829[9], 0, i828, 'spawnPoint')
  request.r(i829[10], i829[11], 0, i828, 'cameraController')
  request.r(i829[12], i829[13], 0, i828, 'shield')
  request.r(i829[14], i829[15], 0, i828, 'waveStartLine')
  i828.duration = i829[16]
  request.r(i829[17], i829[18], 0, i828, 'luna')
  i828.lieDownTime = i829[19]
  i828.maxPitFallTime = i829[20]
  i828.maxDownTime = i829[21]
  i828.fallY = i829[22]
  request.r(i829[23], i829[24], 0, i828, 'startPanel')
  request.r(i829[25], i829[26], 0, i828, 'hud')
  request.r(i829[27], i829[28], 0, i828, 'winPanel')
  request.r(i829[29], i829[30], 0, i828, 'failPanel')
  request.r(i829[31], i829[32], 0, i828, 'timerPanel')
  request.r(i829[33], i829[34], 0, i828, 'timerText')
  request.r(i829[35], i829[36], 0, i828, 'counterText')
  i828.onGameStart = request.d('UnityEngine.Events.UnityEvent', i829[37], i828.onGameStart)
  i828.onWin = request.d('UnityEngine.Events.UnityEvent', i829[38], i828.onWin)
  i828.onFail = request.d('UnityEngine.Events.UnityEvent', i829[39], i828.onFail)
  return i828
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('UnityEngine.Events.PersistentCall', i835[i + 0]));
  }
  i832.m_Calls = i834
  return i832
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Target')
  i838.m_TargetAssemblyTypeName = i839[2]
  i838.m_MethodName = i839[3]
  i838.m_Mode = i839[4]
  i838.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i839[5], i838.m_Arguments)
  i838.m_CallState = i839[6]
  return i838
}

Deserializers["OBP.FreezeBrainrot.KeyboardInput"] = function (request, data, root) {
  var i840 = root || request.c( 'OBP.FreezeBrainrot.KeyboardInput' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'player')
  request.r(i841[2], i841[3], 0, i840, 'gun')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'clip')
  request.r(i843[2], i843[3], 0, i842, 'outputAudioMixerGroup')
  i842.playOnAwake = !!i843[4]
  i842.loop = !!i843[5]
  i842.time = i843[6]
  i842.volume = i843[7]
  i842.pitch = i843[8]
  i842.enabled = !!i843[9]
  return i842
}

Deserializers["OBP.FreezeBrainrot.SoundManager"] = function (request, data, root) {
  var i844 = root || request.c( 'OBP.FreezeBrainrot.SoundManager' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'game')
  request.r(i845[2], i845[3], 0, i844, 'player')
  request.r(i845[4], i845[5], 0, i844, 'gun')
  request.r(i845[6], i845[7], 0, i844, 'jump')
  request.r(i845[8], i845[9], 0, i844, 'cash')
  request.r(i845[10], i845[11], 0, i844, 'freeze')
  request.r(i845[12], i845[13], 0, i844, 'ugh')
  request.r(i845[14], i845[15], 0, i844, 'wow')
  request.r(i845[16], i845[17], 0, i844, 'cry')
  request.r(i845[18], i845[19], 0, i844, 'sfx')
  request.r(i845[20], i845[21], 0, i844, 'freezeLoop')
  i844.freezeVolume = i845[22]
  i844.freezeFadeOut = i845[23]
  return i844
}

Deserializers["OBP.FreezeBrainrot.ShieldManager"] = function (request, data, root) {
  var i846 = root || request.c( 'OBP.FreezeBrainrot.ShieldManager' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'wave')
  request.r(i847[2], i847[3], 0, i846, 'player')
  request.r(i847[4], i847[5], 0, i846, 'helmet')
  request.r(i847[6], i847[7], 0, i846, 'helmetVisual')
  i846.bobHeight = i847[8]
  i846.spinSpeed = i847[9]
  request.r(i847[10], i847[11], 0, i846, 'bubble')
  request.r(i847[12], i847[13], 0, i846, 'bubbleRenderer')
  request.r(i847[14], i847[15], 0, i846, 'popEffect')
  i846.bubbleOffset = new pc.Vec3( i847[16], i847[17], i847[18] )
  i846.popTime = i847[19]
  i846.appearTime = i847[20]
  i846.spawnDistance = i847[21]
  i846.collectRadius = i847[22]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i849 = data
  i848.pivot = new pc.Vec2( i849[0], i849[1] )
  i848.anchorMin = new pc.Vec2( i849[2], i849[3] )
  i848.anchorMax = new pc.Vec2( i849[4], i849[5] )
  i848.sizeDelta = new pc.Vec2( i849[6], i849[7] )
  i848.anchoredPosition3D = new pc.Vec3( i849[8], i849[9], i849[10] )
  i848.rotation = new pc.Quat(i849[11], i849[12], i849[13], i849[14])
  i848.scale = new pc.Vec3( i849[15], i849[16], i849[17] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i851 = data
  i850.planeDistance = i851[0]
  i850.referencePixelsPerUnit = i851[1]
  i850.isFallbackOverlay = !!i851[2]
  i850.renderMode = i851[3]
  i850.renderOrder = i851[4]
  i850.sortingLayerName = i851[5]
  i850.sortingOrder = i851[6]
  i850.scaleFactor = i851[7]
  request.r(i851[8], i851[9], 0, i850, 'worldCamera')
  i850.overrideSorting = !!i851[10]
  i850.pixelPerfect = !!i851[11]
  i850.targetDisplay = i851[12]
  i850.overridePixelPerfect = !!i851[13]
  i850.enabled = !!i851[14]
  return i850
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i853 = data
  i852.m_UiScaleMode = i853[0]
  i852.m_ReferencePixelsPerUnit = i853[1]
  i852.m_ScaleFactor = i853[2]
  i852.m_ReferenceResolution = new pc.Vec2( i853[3], i853[4] )
  i852.m_ScreenMatchMode = i853[5]
  i852.m_MatchWidthOrHeight = i853[6]
  i852.m_PhysicalUnit = i853[7]
  i852.m_FallbackScreenDPI = i853[8]
  i852.m_DefaultSpriteDPI = i853[9]
  i852.m_DynamicPixelsPerUnit = i853[10]
  i852.m_PresetInfoIsWorld = !!i853[11]
  return i852
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i855 = data
  i854.m_IgnoreReversedGraphics = !!i855[0]
  i854.m_BlockingObjects = i855[1]
  i854.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i855[2] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i857 = data
  i856.cullTransparentMesh = !!i857[0]
  return i856
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Image' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_Sprite')
  i858.m_Type = i859[2]
  i858.m_PreserveAspect = !!i859[3]
  i858.m_FillCenter = !!i859[4]
  i858.m_FillMethod = i859[5]
  i858.m_FillAmount = i859[6]
  i858.m_FillClockwise = !!i859[7]
  i858.m_FillOrigin = i859[8]
  i858.m_UseSpriteMesh = !!i859[9]
  i858.m_PixelsPerUnitMultiplier = i859[10]
  request.r(i859[11], i859[12], 0, i858, 'm_Material')
  i858.m_Maskable = !!i859[13]
  i858.m_Color = new pc.Color(i859[14], i859[15], i859[16], i859[17])
  i858.m_RaycastTarget = !!i859[18]
  i858.m_RaycastPadding = new pc.Vec4( i859[19], i859[20], i859[21], i859[22] )
  return i858
}

Deserializers["OBP.FreezeBrainrot.CameraDragArea"] = function (request, data, root) {
  var i860 = root || request.c( 'OBP.FreezeBrainrot.CameraDragArea' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'cameraController')
  return i860
}

Deserializers["OBP.FreezeBrainrot.Crosshair"] = function (request, data, root) {
  var i862 = root || request.c( 'OBP.FreezeBrainrot.Crosshair' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'gun')
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.tinted = i864
  request.r(i863[3], i863[4], 0, i862, 'progressRing')
  request.r(i863[5], i863[6], 0, i862, 'rateText')
  i862.idleColor = new pc.Color(i863[7], i863[8], i863[9], i863[10])
  i862.lockedColor = new pc.Color(i863[11], i863[12], i863[13], i863[14])
  i862.lockedScale = i863[15]
  i862.kickScale = i863[16]
  i862.sharpness = i863[17]
  return i862
}

Deserializers["OBP.FreezeBrainrot.FloatingFreezeText"] = function (request, data, root) {
  var i868 = root || request.c( 'OBP.FreezeBrainrot.FloatingFreezeText' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'gun')
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.pool = i870
  i868.interval = i869[3]
  i868.lifetime = i869[4]
  i868.spawnRadius = i869[5]
  i868.riseDistance = i869[6]
  i868.color = new pc.Color(i869[7], i869[8], i869[9], i869[10])
  return i868
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i875 = data
  i874.m_hasFontAssetChanged = !!i875[0]
  request.r(i875[1], i875[2], 0, i874, 'm_baseMaterial')
  i874.m_maskOffset = new pc.Vec4( i875[3], i875[4], i875[5], i875[6] )
  i874.m_text = i875[7]
  i874.m_isRightToLeft = !!i875[8]
  request.r(i875[9], i875[10], 0, i874, 'm_fontAsset')
  request.r(i875[11], i875[12], 0, i874, 'm_sharedMaterial')
  var i877 = i875[13]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.m_fontSharedMaterials = i876
  request.r(i875[14], i875[15], 0, i874, 'm_fontMaterial')
  var i879 = i875[16]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i874.m_fontMaterials = i878
  i874.m_fontColor32 = UnityEngine.Color32.ConstructColor(i875[17], i875[18], i875[19], i875[20])
  i874.m_fontColor = new pc.Color(i875[21], i875[22], i875[23], i875[24])
  i874.m_enableVertexGradient = !!i875[25]
  i874.m_colorMode = i875[26]
  i874.m_fontColorGradient = request.d('TMPro.VertexGradient', i875[27], i874.m_fontColorGradient)
  request.r(i875[28], i875[29], 0, i874, 'm_fontColorGradientPreset')
  request.r(i875[30], i875[31], 0, i874, 'm_spriteAsset')
  i874.m_tintAllSprites = !!i875[32]
  request.r(i875[33], i875[34], 0, i874, 'm_StyleSheet')
  i874.m_TextStyleHashCode = i875[35]
  i874.m_overrideHtmlColors = !!i875[36]
  i874.m_faceColor = UnityEngine.Color32.ConstructColor(i875[37], i875[38], i875[39], i875[40])
  i874.m_fontSize = i875[41]
  i874.m_fontSizeBase = i875[42]
  i874.m_fontWeight = i875[43]
  i874.m_enableAutoSizing = !!i875[44]
  i874.m_fontSizeMin = i875[45]
  i874.m_fontSizeMax = i875[46]
  i874.m_fontStyle = i875[47]
  i874.m_HorizontalAlignment = i875[48]
  i874.m_VerticalAlignment = i875[49]
  i874.m_textAlignment = i875[50]
  i874.m_characterSpacing = i875[51]
  i874.m_characterHorizontalScale = i875[52]
  i874.m_wordSpacing = i875[53]
  i874.m_lineSpacing = i875[54]
  i874.m_lineSpacingMax = i875[55]
  i874.m_paragraphSpacing = i875[56]
  i874.m_charWidthMaxAdj = i875[57]
  i874.m_TextWrappingMode = i875[58]
  i874.m_wordWrappingRatios = i875[59]
  i874.m_overflowMode = i875[60]
  request.r(i875[61], i875[62], 0, i874, 'm_linkedTextComponent')
  request.r(i875[63], i875[64], 0, i874, 'parentLinkedComponent')
  i874.m_enableKerning = !!i875[65]
  var i881 = i875[66]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(i881[i + 0]);
  }
  i874.m_ActiveFontFeatures = i880
  i874.m_enableExtraPadding = !!i875[67]
  i874.checkPaddingRequired = !!i875[68]
  i874.m_isRichText = !!i875[69]
  i874.m_parseCtrlCharacters = !!i875[70]
  i874.m_isOrthographic = !!i875[71]
  i874.m_isCullingEnabled = !!i875[72]
  i874.m_horizontalMapping = i875[73]
  i874.m_verticalMapping = i875[74]
  i874.m_uvLineOffset = i875[75]
  i874.m_geometrySortingOrder = i875[76]
  i874.m_IsTextObjectScaleStatic = !!i875[77]
  i874.m_VertexBufferAutoSizeReduction = !!i875[78]
  i874.m_useMaxVisibleDescender = !!i875[79]
  i874.m_pageToDisplay = i875[80]
  i874.m_margin = new pc.Vec4( i875[81], i875[82], i875[83], i875[84] )
  i874.m_isUsingLegacyAnimationComponent = !!i875[85]
  i874.m_isVolumetricText = !!i875[86]
  request.r(i875[87], i875[88], 0, i874, 'm_Material')
  i874.m_EmojiFallbackSupport = !!i875[89]
  i874.m_Maskable = !!i875[90]
  i874.m_Color = new pc.Color(i875[91], i875[92], i875[93], i875[94])
  i874.m_RaycastTarget = !!i875[95]
  i874.m_RaycastPadding = new pc.Vec4( i875[96], i875[97], i875[98], i875[99] )
  return i874
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.VertexGradient' )
  var i883 = data
  i882.topLeft = new pc.Color(i883[0], i883[1], i883[2], i883[3])
  i882.topRight = new pc.Color(i883[4], i883[5], i883[6], i883[7])
  i882.bottomLeft = new pc.Color(i883[8], i883[9], i883[10], i883[11])
  i882.bottomRight = new pc.Color(i883[12], i883[13], i883[14], i883[15])
  return i882
}

Deserializers["OBP.FreezeBrainrot.MoneyPopup"] = function (request, data, root) {
  var i886 = root || request.c( 'OBP.FreezeBrainrot.MoneyPopup' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'gun')
  request.r(i887[2], i887[3], 0, i886, 'area')
  var i889 = i887[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.pool = i888
  i886.lifetime = i887[5]
  i886.riseDistance = i887[6]
  i886.headOffset = i887[7]
  i886.color = new pc.Color(i887[8], i887[9], i887[10], i887[11])
  return i886
}

Deserializers["OBP.FreezeBrainrot.VirtualJoystick"] = function (request, data, root) {
  var i890 = root || request.c( 'OBP.FreezeBrainrot.VirtualJoystick' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'player')
  request.r(i891[2], i891[3], 0, i890, 'baseRect')
  request.r(i891[4], i891[5], 0, i890, 'knob')
  i890.deadZone = i891[6]
  return i890
}

Deserializers["OBP.FreezeBrainrot.ActionButton"] = function (request, data, root) {
  var i892 = root || request.c( 'OBP.FreezeBrainrot.ActionButton' )
  var i893 = data
  i892.action = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'player')
  request.r(i893[3], i893[4], 0, i892, 'gun')
  i892.pressedScale = i893[5]
  return i892
}

Deserializers["OBP.FreezeBrainrot.TutorialController"] = function (request, data, root) {
  var i894 = root || request.c( 'OBP.FreezeBrainrot.TutorialController' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'game')
  request.r(i895[2], i895[3], 0, i894, 'player')
  request.r(i895[4], i895[5], 0, i894, 'gun')
  request.r(i895[6], i895[7], 0, i894, 'shield')
  request.r(i895[8], i895[9], 0, i894, 'moveHint')
  request.r(i895[10], i895[11], 0, i894, 'moveHintText')
  i894.closerText = i895[12]
  request.r(i895[13], i895[14], 0, i894, 'aimHint')
  request.r(i895[15], i895[16], 0, i894, 'jumpHint')
  request.r(i895[17], i895[18], 0, i894, 'viewHint')
  i894.viewSwipeAmount = i895[19]
  request.r(i895[20], i895[21], 0, i894, 'goToHint')
  request.r(i895[22], i895[23], 0, i894, 'pickupHint')
  i894.movedThreshold = i895[24]
  request.r(i895[25], i895[26], 0, i894, 'freezeHint')
  request.r(i895[27], i895[28], 0, i894, 'moveTarget')
  request.r(i895[29], i895[30], 0, i894, 'groundArrow')
  request.r(i895[31], i895[32], 0, i894, 'targetMarker')
  i894.aimHoldTime = i895[33]
  i894.lostAimGrace = i895[34]
  i894.aimSwipeAmount = i895[35]
  return i894
}

Deserializers["OBP.FreezeBrainrot.HandHintAnim"] = function (request, data, root) {
  var i896 = root || request.c( 'OBP.FreezeBrainrot.HandHintAnim' )
  var i897 = data
  i896.travel = new pc.Vec2( i897[0], i897[1] )
  i896.period = i897[2]
  i896.pressScale = i897[3]
  i896.pingPong = !!i897[4]
  return i896
}

Deserializers["OBP.FreezeBrainrot.UIPulse"] = function (request, data, root) {
  var i898 = root || request.c( 'OBP.FreezeBrainrot.UIPulse' )
  var i899 = data
  i898.amount = i899[0]
  i898.speed = i899[1]
  return i898
}

Deserializers["OBP.FreezeBrainrot.NoTargetHint"] = function (request, data, root) {
  var i900 = root || request.c( 'OBP.FreezeBrainrot.NoTargetHint' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'gun')
  request.r(i901[2], i901[3], 0, i900, 'text')
  i900.showTime = i901[4]
  i900.fadeTime = i901[5]
  request.r(i901[6], i901[7], 0, i900, 'collectedHint')
  return i900
}

Deserializers["OBP.FreezeBrainrot.CollectedHint"] = function (request, data, root) {
  var i902 = root || request.c( 'OBP.FreezeBrainrot.CollectedHint' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'gun')
  request.r(i903[2], i903[3], 0, i902, 'text')
  i902.fadeSpeed = i903[4]
  return i902
}

Deserializers["OBP.FreezeBrainrot.DamageFlash"] = function (request, data, root) {
  var i904 = root || request.c( 'OBP.FreezeBrainrot.DamageFlash' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'game')
  request.r(i905[2], i905[3], 0, i904, 'overlay')
  i904.peakAlpha = i905[4]
  i904.duration = i905[5]
  i904.pulses = i905[6]
  return i904
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.Button' )
  var i907 = data
  i906.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i907[0], i906.m_OnClick)
  i906.m_Navigation = request.d('UnityEngine.UI.Navigation', i907[1], i906.m_Navigation)
  i906.m_Transition = i907[2]
  i906.m_Colors = request.d('UnityEngine.UI.ColorBlock', i907[3], i906.m_Colors)
  i906.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i907[4], i906.m_SpriteState)
  i906.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i907[5], i906.m_AnimationTriggers)
  i906.m_Interactable = !!i907[6]
  request.r(i907[7], i907[8], 0, i906, 'm_TargetGraphic')
  return i906
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i909 = data
  i908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i909[0], i908.m_PersistentCalls)
  return i908
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i911 = data
  i910.m_Mode = i911[0]
  i910.m_WrapAround = !!i911[1]
  request.r(i911[2], i911[3], 0, i910, 'm_SelectOnUp')
  request.r(i911[4], i911[5], 0, i910, 'm_SelectOnDown')
  request.r(i911[6], i911[7], 0, i910, 'm_SelectOnLeft')
  request.r(i911[8], i911[9], 0, i910, 'm_SelectOnRight')
  return i910
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i913 = data
  i912.m_NormalColor = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.m_HighlightedColor = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.m_PressedColor = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.m_SelectedColor = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  i912.m_DisabledColor = new pc.Color(i913[16], i913[17], i913[18], i913[19])
  i912.m_ColorMultiplier = i913[20]
  i912.m_FadeDuration = i913[21]
  return i912
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_HighlightedSprite')
  request.r(i915[2], i915[3], 0, i914, 'm_PressedSprite')
  request.r(i915[4], i915[5], 0, i914, 'm_SelectedSprite')
  request.r(i915[6], i915[7], 0, i914, 'm_DisabledSprite')
  return i914
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i917 = data
  i916.m_NormalTrigger = i917[0]
  i916.m_HighlightedTrigger = i917[1]
  i916.m_PressedTrigger = i917[2]
  i916.m_SelectedTrigger = i917[3]
  i916.m_DisabledTrigger = i917[4]
  return i916
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i918 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i919 = data
  i918.targetIsSelf = !!i919[0]
  request.r(i919[1], i919[2], 0, i918, 'targetGO')
  i918.tweenTargetIsTargetGO = !!i919[3]
  i918.delay = i919[4]
  i918.duration = i919[5]
  i918.easeType = i919[6]
  i918.easeCurve = new pc.AnimationCurve( { keys_flow: i919[7] } )
  i918.loopType = i919[8]
  i918.loops = i919[9]
  i918.id = i919[10]
  i918.isRelative = !!i919[11]
  i918.isFrom = !!i919[12]
  i918.isIndependentUpdate = !!i919[13]
  i918.autoKill = !!i919[14]
  i918.autoGenerate = !!i919[15]
  i918.isActive = !!i919[16]
  i918.isValid = !!i919[17]
  request.r(i919[18], i919[19], 0, i918, 'target')
  i918.animationType = i919[20]
  i918.targetType = i919[21]
  i918.forcedTargetType = i919[22]
  i918.autoPlay = !!i919[23]
  i918.useTargetAsV3 = !!i919[24]
  i918.endValueFloat = i919[25]
  i918.endValueV3 = new pc.Vec3( i919[26], i919[27], i919[28] )
  i918.endValueV2 = new pc.Vec2( i919[29], i919[30] )
  i918.endValueColor = new pc.Color(i919[31], i919[32], i919[33], i919[34])
  i918.endValueString = i919[35]
  i918.endValueRect = UnityEngine.Rect.MinMaxRect(i919[36], i919[37], i919[38], i919[39])
  request.r(i919[40], i919[41], 0, i918, 'endValueTransform')
  i918.optionalBool0 = !!i919[42]
  i918.optionalBool1 = !!i919[43]
  i918.optionalFloat0 = i919[44]
  i918.optionalInt0 = i919[45]
  i918.optionalRotationMode = i919[46]
  i918.optionalScrambleMode = i919[47]
  i918.optionalShakeRandomnessMode = i919[48]
  i918.optionalString = i919[49]
  i918.updateType = i919[50]
  i918.isSpeedBased = !!i919[51]
  i918.hasOnStart = !!i919[52]
  i918.hasOnPlay = !!i919[53]
  i918.hasOnUpdate = !!i919[54]
  i918.hasOnStepComplete = !!i919[55]
  i918.hasOnComplete = !!i919[56]
  i918.hasOnTweenCreated = !!i919[57]
  i918.hasOnRewind = !!i919[58]
  i918.onStart = request.d('UnityEngine.Events.UnityEvent', i919[59], i918.onStart)
  i918.onPlay = request.d('UnityEngine.Events.UnityEvent', i919[60], i918.onPlay)
  i918.onUpdate = request.d('UnityEngine.Events.UnityEvent', i919[61], i918.onUpdate)
  i918.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i919[62], i918.onStepComplete)
  i918.onComplete = request.d('UnityEngine.Events.UnityEvent', i919[63], i918.onComplete)
  i918.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i919[64], i918.onTweenCreated)
  i918.onRewind = request.d('UnityEngine.Events.UnityEvent', i919[65], i918.onRewind)
  return i918
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_FirstSelected')
  i920.m_sendNavigationEvents = !!i921[2]
  i920.m_DragThreshold = i921[3]
  return i920
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i923 = data
  i922.m_HorizontalAxis = i923[0]
  i922.m_VerticalAxis = i923[1]
  i922.m_SubmitButton = i923[2]
  i922.m_CancelButton = i923[3]
  i922.m_InputActionsPerSecond = i923[4]
  i922.m_RepeatDelay = i923[5]
  i922.m_ForceModuleActive = !!i923[6]
  i922.m_SendPointerHoverToParent = !!i923[7]
  return i922
}

Deserializers["OBP.FreezeBrainrot.Billboard"] = function (request, data, root) {
  var i924 = root || request.c( 'OBP.FreezeBrainrot.Billboard' )
  var i925 = data
  return i924
}

Deserializers["OBP.FreezeBrainrot.CameraController"] = function (request, data, root) {
  var i926 = root || request.c( 'OBP.FreezeBrainrot.CameraController' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'followTarget')
  request.r(i927[2], i927[3], 0, i926, 'yawPivot')
  request.r(i927[4], i927[5], 0, i926, 'pitchPivot')
  request.r(i927[6], i927[7], 0, i926, 'cam')
  i926.followSharpness = i927[8]
  i926.snapDistance = i927[9]
  i926.landscapeOffset = new pc.Vec3( i927[10], i927[11], i927[12] )
  i926.portraitOffset = new pc.Vec3( i927[13], i927[14], i927[15] )
  i926.landscapeFov = i927[16]
  i926.portraitFov = i927[17]
  i926.yawSensitivity = i927[18]
  i926.pitchSensitivity = i927[19]
  i926.rotationSharpness = i927[20]
  i926.defaultYaw = i927[21]
  i926.defaultPitch = i927[22]
  i926.minYaw = i927[23]
  i926.maxYaw = i927[24]
  i926.minPitch = i927[25]
  i926.maxPitch = i927[26]
  i926.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i927[27] )
  i926.collisionPadding = i927[28]
  i926.minDistance = i927[29]
  i926.shakeDecay = i927[30]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i929 = data
  i928.aspect = i929[0]
  i928.orthographic = !!i929[1]
  i928.orthographicSize = i929[2]
  i928.backgroundColor = new pc.Color(i929[3], i929[4], i929[5], i929[6])
  i928.nearClipPlane = i929[7]
  i928.farClipPlane = i929[8]
  i928.fieldOfView = i929[9]
  i928.depth = i929[10]
  i928.clearFlags = i929[11]
  i928.cullingMask = i929[12]
  i928.rect = i929[13]
  request.r(i929[14], i929[15], 0, i928, 'targetTexture')
  i928.usePhysicalProperties = !!i929[16]
  i928.focalLength = i929[17]
  i928.sensorSize = new pc.Vec2( i929[18], i929[19] )
  i928.lensShift = new pc.Vec2( i929[20], i929[21] )
  i928.gateFit = i929[22]
  i928.commandBufferCount = i929[23]
  i928.cameraType = i929[24]
  i928.enabled = !!i929[25]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i931 = data
  i930.center = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.size = new pc.Vec3( i931[3], i931[4], i931[5] )
  i930.enabled = !!i931[6]
  i930.isTrigger = !!i931[7]
  request.r(i931[8], i931[9], 0, i930, 'material')
  return i930
}

Deserializers["OBP.FreezeBrainrot.FreezableMonster"] = function (request, data, root) {
  var i932 = root || request.c( 'OBP.FreezeBrainrot.FreezableMonster' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'animator')
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.renderers = i934
  var i937 = i933[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i932.normalMaterials = i936
  var i939 = i933[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i932.frozenMaterials = i938
  request.r(i933[5], i933[6], 0, i932, 'iceRenderer')
  request.r(i933[7], i933[8], 0, i932, 'aimPoint')
  i932.priceK = i933[9]
  i932.meltPerSecond = i933[10]
  i932.meltDelay = i933[11]
  i932.popTime = i933[12]
  return i932
}

Deserializers["OBP.FreezeBrainrot.WaveHazard"] = function (request, data, root) {
  var i942 = root || request.c( 'OBP.FreezeBrainrot.WaveHazard' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'startPoint')
  request.r(i943[2], i943[3], 0, i942, 'endPoint')
  i942.hiddenDepth = i943[4]
  i942.delayBefore = i943[5]
  i942.riseDuration = i943[6]
  i942.delayAfter = i943[7]
  i942.speed = i943[8]
  i942.pauseBetween = i943[9]
  i942.hitMinZ = i943[10]
  i942.hitMaxZ = i943[11]
  i942.hitHeight = i943[12]
  i942.playerRadius = i943[13]
  var i945 = i943[14]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.effects = i944
  i942.shakeRange = i943[15]
  i942.shakeStrength = new pc.Vec2( i943[16], i943[17] )
  i942.riseWarningLead = i943[18]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i949 = data
  i948.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i949[0], i948.main)
  i948.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i949[1], i948.colorBySpeed)
  i948.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i949[2], i948.colorOverLifetime)
  i948.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i949[3], i948.emission)
  i948.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i949[4], i948.rotationBySpeed)
  i948.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i949[5], i948.rotationOverLifetime)
  i948.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i949[6], i948.shape)
  i948.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i949[7], i948.sizeBySpeed)
  i948.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i949[8], i948.sizeOverLifetime)
  i948.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i949[9], i948.textureSheetAnimation)
  i948.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i949[10], i948.velocityOverLifetime)
  i948.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i949[11], i948.noise)
  i948.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i949[12], i948.inheritVelocity)
  i948.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i949[13], i948.forceOverLifetime)
  i948.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i949[14], i948.limitVelocityOverLifetime)
  i948.useAutoRandomSeed = !!i949[15]
  i948.randomSeed = i949[16]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemMain()
  var i951 = data
  i950.duration = i951[0]
  i950.loop = !!i951[1]
  i950.prewarm = !!i951[2]
  i950.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.startDelay)
  i950.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[4], i950.startLifetime)
  i950.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[5], i950.startSpeed)
  i950.startSize3D = !!i951[6]
  i950.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[7], i950.startSizeX)
  i950.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[8], i950.startSizeY)
  i950.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[9], i950.startSizeZ)
  i950.startRotation3D = !!i951[10]
  i950.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[11], i950.startRotationX)
  i950.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[12], i950.startRotationY)
  i950.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[13], i950.startRotationZ)
  i950.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i951[14], i950.startColor)
  i950.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[15], i950.gravityModifier)
  i950.simulationSpace = i951[16]
  request.r(i951[17], i951[18], 0, i950, 'customSimulationSpace')
  i950.simulationSpeed = i951[19]
  i950.useUnscaledTime = !!i951[20]
  i950.scalingMode = i951[21]
  i950.playOnAwake = !!i951[22]
  i950.maxParticles = i951[23]
  i950.emitterVelocityMode = i951[24]
  i950.stopAction = i951[25]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i952 = root || new pc.MinMaxCurve()
  var i953 = data
  i952.mode = i953[0]
  i952.curveMin = new pc.AnimationCurve( { keys_flow: i953[1] } )
  i952.curveMax = new pc.AnimationCurve( { keys_flow: i953[2] } )
  i952.curveMultiplier = i953[3]
  i952.constantMin = i953[4]
  i952.constantMax = i953[5]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i954 = root || new pc.MinMaxGradient()
  var i955 = data
  i954.mode = i955[0]
  i954.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i955[1], i954.gradientMin)
  i954.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i955[2], i954.gradientMax)
  i954.colorMin = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.colorMax = new pc.Color(i955[7], i955[8], i955[9], i955[10])
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i957 = data
  i956.mode = i957[0]
  var i959 = i957[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i959[i + 0]) );
  }
  i956.colorKeys = i958
  var i961 = i957[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i961[i + 0]) );
  }
  i956.alphaKeys = i960
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemColorBySpeed()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i963[1], i962.color)
  i962.range = new pc.Vec2( i963[2], i963[3] )
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i967 = data
  i966.color = new pc.Color(i967[0], i967[1], i967[2], i967[3])
  i966.time = i967[4]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i971 = data
  i970.alpha = i971[0]
  i970.time = i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemColorOverLifetime()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i973[1], i972.color)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemEmitter()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.rateOverTime)
  i974.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.rateOverDistance)
  var i977 = i975[3]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i977[i + 0]) );
  }
  i974.bursts = i976
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemBurst()
  var i981 = data
  i980.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[0], i980.count)
  i980.cycleCount = i981[1]
  i980.minCount = i981[2]
  i980.maxCount = i981[3]
  i980.repeatInterval = i981[4]
  i980.time = i981[5]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i982 = root || new pc.ParticleSystemRotationBySpeed()
  var i983 = data
  i982.enabled = !!i983[0]
  i982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[1], i982.x)
  i982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[2], i982.y)
  i982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i983[3], i982.z)
  i982.separateAxes = !!i983[4]
  i982.range = new pc.Vec2( i983[5], i983[6] )
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i984 = root || new pc.ParticleSystemRotationOverLifetime()
  var i985 = data
  i984.enabled = !!i985[0]
  i984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[1], i984.x)
  i984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[2], i984.y)
  i984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i985[3], i984.z)
  i984.separateAxes = !!i985[4]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i986 = root || new pc.ParticleSystemShape()
  var i987 = data
  i986.enabled = !!i987[0]
  i986.shapeType = i987[1]
  i986.randomDirectionAmount = i987[2]
  i986.sphericalDirectionAmount = i987[3]
  i986.randomPositionAmount = i987[4]
  i986.alignToDirection = !!i987[5]
  i986.radius = i987[6]
  i986.radiusMode = i987[7]
  i986.radiusSpread = i987[8]
  i986.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[9], i986.radiusSpeed)
  i986.radiusThickness = i987[10]
  i986.angle = i987[11]
  i986.length = i987[12]
  i986.boxThickness = new pc.Vec3( i987[13], i987[14], i987[15] )
  i986.meshShapeType = i987[16]
  request.r(i987[17], i987[18], 0, i986, 'mesh')
  request.r(i987[19], i987[20], 0, i986, 'meshRenderer')
  request.r(i987[21], i987[22], 0, i986, 'skinnedMeshRenderer')
  i986.useMeshMaterialIndex = !!i987[23]
  i986.meshMaterialIndex = i987[24]
  i986.useMeshColors = !!i987[25]
  i986.normalOffset = i987[26]
  i986.arc = i987[27]
  i986.arcMode = i987[28]
  i986.arcSpread = i987[29]
  i986.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i987[30], i986.arcSpeed)
  i986.donutRadius = i987[31]
  i986.position = new pc.Vec3( i987[32], i987[33], i987[34] )
  i986.rotation = new pc.Vec3( i987[35], i987[36], i987[37] )
  i986.scale = new pc.Vec3( i987[38], i987[39], i987[40] )
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemSizeBySpeed()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[1], i988.x)
  i988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[2], i988.y)
  i988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i989[3], i988.z)
  i988.separateAxes = !!i989[4]
  i988.range = new pc.Vec2( i989[5], i989[6] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemSizeOverLifetime()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[1], i990.x)
  i990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.y)
  i990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[3], i990.z)
  i990.separateAxes = !!i991[4]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i992 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i993 = data
  i992.enabled = !!i993[0]
  i992.mode = i993[1]
  i992.animation = i993[2]
  i992.numTilesX = i993[3]
  i992.numTilesY = i993[4]
  i992.useRandomRow = !!i993[5]
  i992.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[6], i992.frameOverTime)
  i992.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i993[7], i992.startFrame)
  i992.cycleCount = i993[8]
  i992.rowIndex = i993[9]
  i992.flipU = i993[10]
  i992.flipV = i993[11]
  i992.spriteCount = i993[12]
  var i995 = i993[13]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sprites = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i998 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i999 = data
  i998.enabled = !!i999[0]
  i998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[1], i998.x)
  i998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[2], i998.y)
  i998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[3], i998.z)
  i998.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[4], i998.radial)
  i998.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[5], i998.speedModifier)
  i998.space = i999[6]
  i998.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[7], i998.orbitalX)
  i998.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[8], i998.orbitalY)
  i998.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[9], i998.orbitalZ)
  i998.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[10], i998.orbitalOffsetX)
  i998.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[11], i998.orbitalOffsetY)
  i998.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[12], i998.orbitalOffsetZ)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1000 = root || new pc.ParticleSystemNoise()
  var i1001 = data
  i1000.enabled = !!i1001[0]
  i1000.separateAxes = !!i1001[1]
  i1000.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[2], i1000.strengthX)
  i1000.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[3], i1000.strengthY)
  i1000.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[4], i1000.strengthZ)
  i1000.frequency = i1001[5]
  i1000.damping = !!i1001[6]
  i1000.octaveCount = i1001[7]
  i1000.octaveMultiplier = i1001[8]
  i1000.octaveScale = i1001[9]
  i1000.quality = i1001[10]
  i1000.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[11], i1000.scrollSpeed)
  i1000.scrollSpeedMultiplier = i1001[12]
  i1000.remapEnabled = !!i1001[13]
  i1000.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[14], i1000.remapX)
  i1000.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[15], i1000.remapY)
  i1000.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[16], i1000.remapZ)
  i1000.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[17], i1000.positionAmount)
  i1000.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[18], i1000.rotationAmount)
  i1000.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[19], i1000.sizeAmount)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1002 = root || new pc.ParticleSystemInheritVelocity()
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.mode = i1003[1]
  i1002.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1003[2], i1002.curve)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1004 = root || new pc.ParticleSystemForceOverLifetime()
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[1], i1004.x)
  i1004.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[2], i1004.y)
  i1004.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[3], i1004.z)
  i1004.space = i1005[4]
  i1004.randomized = !!i1005[5]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1006 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[1], i1006.limit)
  i1006.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[2], i1006.limitX)
  i1006.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[3], i1006.limitY)
  i1006.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[4], i1006.limitZ)
  i1006.dampen = i1007[5]
  i1006.separateAxes = !!i1007[6]
  i1006.space = i1007[7]
  i1006.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[8], i1006.drag)
  i1006.multiplyDragByParticleSize = !!i1007[9]
  i1006.multiplyDragByParticleVelocity = !!i1007[10]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'mesh')
  i1008.meshCount = i1009[2]
  i1008.activeVertexStreamsCount = i1009[3]
  i1008.alignment = i1009[4]
  i1008.renderMode = i1009[5]
  i1008.sortMode = i1009[6]
  i1008.lengthScale = i1009[7]
  i1008.velocityScale = i1009[8]
  i1008.cameraVelocityScale = i1009[9]
  i1008.normalDirection = i1009[10]
  i1008.sortingFudge = i1009[11]
  i1008.minParticleSize = i1009[12]
  i1008.maxParticleSize = i1009[13]
  i1008.pivot = new pc.Vec3( i1009[14], i1009[15], i1009[16] )
  request.r(i1009[17], i1009[18], 0, i1008, 'trailMaterial')
  i1008.applyActiveColorSpace = !!i1009[19]
  i1008.enabled = !!i1009[20]
  request.r(i1009[21], i1009[22], 0, i1008, 'sharedMaterial')
  var i1011 = i1009[23]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sharedMaterials = i1010
  i1008.receiveShadows = !!i1009[24]
  i1008.shadowCastingMode = i1009[25]
  i1008.sortingLayerID = i1009[26]
  i1008.sortingOrder = i1009[27]
  i1008.lightmapIndex = i1009[28]
  i1008.lightmapSceneIndex = i1009[29]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[30], i1009[31], i1009[32], i1009[33] )
  i1008.lightProbeUsage = i1009[34]
  i1008.reflectionProbeUsage = i1009[35]
  return i1008
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1012 = root || request.c( 'LunaController' )
  var i1013 = data
  i1012.TimePlay = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'BGM')
  i1012.CameraOffsetLandscape = new pc.Vec3( i1013[3], i1013[4], i1013[5] )
  i1012.CameraOffsetPortrait = new pc.Vec3( i1013[6], i1013[7], i1013[8] )
  request.r(i1013[9], i1013[10], 0, i1012, 'musicSource')
  var i1015 = i1013[11]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 1, i1014, '')
  }
  i1012.CTA = i1014
  request.r(i1013[12], i1013[13], 0, i1012, 'cameraController')
  return i1012
}

Deserializers["OBP.FreezeBrainrot.GroundArrow"] = function (request, data, root) {
  var i1018 = root || request.c( 'OBP.FreezeBrainrot.GroundArrow' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'player')
  request.r(i1019[2], i1019[3], 0, i1018, 'target')
  i1018.pointStraight = !!i1019[4]
  i1018.straightDirection = new pc.Vec3( i1019[5], i1019[6], i1019[7] )
  i1018.offset = i1019[8]
  i1018.height = i1019[9]
  i1018.pulseSpeed = i1019[10]
  i1018.pulseAmount = i1019[11]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1021 = data
  i1020.ambientIntensity = i1021[0]
  i1020.reflectionIntensity = i1021[1]
  i1020.ambientMode = i1021[2]
  i1020.ambientLight = new pc.Color(i1021[3], i1021[4], i1021[5], i1021[6])
  i1020.ambientSkyColor = new pc.Color(i1021[7], i1021[8], i1021[9], i1021[10])
  i1020.ambientGroundColor = new pc.Color(i1021[11], i1021[12], i1021[13], i1021[14])
  i1020.ambientEquatorColor = new pc.Color(i1021[15], i1021[16], i1021[17], i1021[18])
  i1020.fogColor = new pc.Color(i1021[19], i1021[20], i1021[21], i1021[22])
  i1020.fogEndDistance = i1021[23]
  i1020.fogStartDistance = i1021[24]
  i1020.fogDensity = i1021[25]
  i1020.fog = !!i1021[26]
  request.r(i1021[27], i1021[28], 0, i1020, 'skybox')
  i1020.fogMode = i1021[29]
  var i1023 = i1021[30]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1023[i + 0]) );
  }
  i1020.lightmaps = i1022
  i1020.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1021[31], i1020.lightProbes)
  i1020.lightmapsMode = i1021[32]
  i1020.mixedBakeMode = i1021[33]
  i1020.environmentLightingMode = i1021[34]
  i1020.ambientProbe = new pc.SphericalHarmonicsL2(i1021[35])
  request.r(i1021[36], i1021[37], 0, i1020, 'customReflection')
  request.r(i1021[38], i1021[39], 0, i1020, 'defaultReflection')
  i1020.defaultReflectionMode = i1021[40]
  i1020.defaultReflectionResolution = i1021[41]
  i1020.sunLightObjectId = i1021[42]
  i1020.pixelLightCount = i1021[43]
  i1020.defaultReflectionHDR = !!i1021[44]
  i1020.hasLightDataAsset = !!i1021[45]
  i1020.hasManualGenerate = !!i1021[46]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'lightmapColor')
  request.r(i1027[2], i1027[3], 0, i1026, 'lightmapDirection')
  request.r(i1027[4], i1027[5], 0, i1026, 'shadowMask')
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1028 = root || new UnityEngine.LightProbes()
  var i1029 = data
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1039[i + 0]));
  }
  i1036.ShaderCompilationErrors = i1038
  i1036.name = i1037[1]
  i1036.guid = i1037[2]
  var i1041 = i1037[3]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1036.shaderDefinedKeywords = i1040
  var i1043 = i1037[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1043[i + 0]) );
  }
  i1036.passes = i1042
  var i1045 = i1037[5]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1045[i + 0]) );
  }
  i1036.usePasses = i1044
  var i1047 = i1037[6]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1047[i + 0]) );
  }
  i1036.defaultParameterValues = i1046
  request.r(i1037[7], i1037[8], 0, i1036, 'unityFallbackShader')
  i1036.readDepth = !!i1037[9]
  i1036.hasDepthOnlyPass = !!i1037[10]
  i1036.isCreatedByShaderGraph = !!i1037[11]
  i1036.disableBatching = !!i1037[12]
  i1036.compiled = !!i1037[13]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1051 = data
  i1050.shaderName = i1051[0]
  i1050.errorMessage = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1056 = root || new pc.UnityShaderPass()
  var i1057 = data
  i1056.id = i1057[0]
  i1056.subShaderIndex = i1057[1]
  i1056.name = i1057[2]
  i1056.passType = i1057[3]
  i1056.grabPassTextureName = i1057[4]
  i1056.usePass = !!i1057[5]
  i1056.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[6], i1056.zTest)
  i1056.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[7], i1056.zWrite)
  i1056.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[8], i1056.culling)
  i1056.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1057[9], i1056.blending)
  i1056.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1057[10], i1056.alphaBlending)
  i1056.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[11], i1056.colorWriteMask)
  i1056.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[12], i1056.offsetUnits)
  i1056.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[13], i1056.offsetFactor)
  i1056.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[14], i1056.stencilRef)
  i1056.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[15], i1056.stencilReadMask)
  i1056.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[16], i1056.stencilWriteMask)
  i1056.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[17], i1056.stencilOp)
  i1056.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[18], i1056.stencilOpFront)
  i1056.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1057[19], i1056.stencilOpBack)
  var i1059 = i1057[20]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1059[i + 0]) );
  }
  i1056.tags = i1058
  var i1061 = i1057[21]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.passDefinedKeywords = i1060
  var i1063 = i1057[22]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1063[i + 0]) );
  }
  i1056.passDefinedKeywordGroups = i1062
  var i1065 = i1057[23]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1065[i + 0]) );
  }
  i1056.variants = i1064
  var i1067 = i1057[24]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1067[i + 0]) );
  }
  i1056.excludedVariants = i1066
  i1056.hasDepthReader = !!i1057[25]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1069 = data
  i1068.val = i1069[0]
  i1068.name = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1071 = data
  i1070.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[0], i1070.src)
  i1070.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[1], i1070.dst)
  i1070.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[2], i1070.op)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1073 = data
  i1072.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[0], i1072.pass)
  i1072.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[1], i1072.fail)
  i1072.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[2], i1072.zFail)
  i1072.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[3], i1072.comp)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.value = i1077[1]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.keywords = i1082
  i1080.hasDiscard = !!i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1087 = data
  i1086.passId = i1087[0]
  i1086.subShaderIndex = i1087[1]
  var i1089 = i1087[2]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1086.keywords = i1088
  i1086.vertexProgram = i1087[3]
  i1086.fragmentProgram = i1087[4]
  i1086.exportedForWebGl2 = !!i1087[5]
  i1086.readDepth = !!i1087[6]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'shader')
  i1092.pass = i1093[2]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.type = i1097[1]
  i1096.value = new pc.Vec4( i1097[2], i1097[3], i1097[4], i1097[5] )
  i1096.textureValue = i1097[6]
  i1096.shaderPropertyFlag = i1097[7]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1099 = data
  i1098.name = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'texture')
  i1098.aabb = i1099[3]
  i1098.vertices = i1099[4]
  i1098.triangles = i1099[5]
  i1098.textureRect = UnityEngine.Rect.MinMaxRect(i1099[6], i1099[7], i1099[8], i1099[9])
  i1098.packedRect = UnityEngine.Rect.MinMaxRect(i1099[10], i1099[11], i1099[12], i1099[13])
  i1098.border = new pc.Vec4( i1099[14], i1099[15], i1099[16], i1099[17] )
  i1098.transparency = i1099[18]
  i1098.bounds = i1099[19]
  i1098.pixelsPerUnit = i1099[20]
  i1098.textureWidth = i1099[21]
  i1098.textureHeight = i1099[22]
  i1098.nativeSize = new pc.Vec2( i1099[23], i1099[24] )
  i1098.pivot = new pc.Vec2( i1099[25], i1099[26] )
  i1098.textureRectOffset = new pc.Vec2( i1099[27], i1099[28] )
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1101 = data
  i1100.name = i1101[0]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.wrapMode = i1103[1]
  i1102.isLooping = !!i1103[2]
  i1102.length = i1103[3]
  var i1105 = i1103[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1105[i + 0]) );
  }
  i1102.curves = i1104
  var i1107 = i1103[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1107[i + 0]) );
  }
  i1102.events = i1106
  i1102.halfPrecision = !!i1103[6]
  i1102._frameRate = i1103[7]
  i1102.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1103[8], i1102.localBounds)
  i1102.hasMuscleCurves = !!i1103[9]
  var i1109 = i1103[10]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1102.clipMuscleConstant = i1108
  i1102.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1103[11], i1102.clipBindingConstant)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1113 = data
  i1112.path = i1113[0]
  i1112.hash = i1113[1]
  i1112.componentType = i1113[2]
  i1112.property = i1113[3]
  i1112.keys = i1113[4]
  var i1115 = i1113[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1115[i + 0]) );
  }
  i1112.objectReferenceKeys = i1114
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1119 = data
  i1118.time = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'value')
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1123 = data
  i1122.functionName = i1123[0]
  i1122.floatParameter = i1123[1]
  i1122.intParameter = i1123[2]
  i1122.stringParameter = i1123[3]
  request.r(i1123[4], i1123[5], 0, i1122, 'objectReferenceParameter')
  i1122.time = i1123[6]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1125 = data
  i1124.center = new pc.Vec3( i1125[0], i1125[1], i1125[2] )
  i1124.extends = new pc.Vec3( i1125[3], i1125[4], i1125[5] )
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1128.genericBindings = i1130
  var i1133 = i1129[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1128.pptrCurveMapping = i1132
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1135 = data
  i1134.name = i1135[0]
  var i1137 = i1135[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1137[i + 0]) );
  }
  i1134.layers = i1136
  var i1139 = i1135[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1139[i + 0]) );
  }
  i1134.parameters = i1138
  i1134.animationClips = i1135[3]
  i1134.avatarUnsupported = i1135[4]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.defaultWeight = i1143[1]
  i1142.blendingMode = i1143[2]
  i1142.avatarMask = i1143[3]
  i1142.syncedLayerIndex = i1143[4]
  i1142.syncedLayerAffectsTiming = !!i1143[5]
  i1142.syncedLayers = i1143[6]
  i1142.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1143[7], i1142.stateMachine)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.path = i1145[2]
  var i1147 = i1145[3]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1147[i + 0]) );
  }
  i1144.states = i1146
  var i1149 = i1145[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1149[i + 0]) );
  }
  i1144.machines = i1148
  var i1151 = i1145[5]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1151[i + 0]) );
  }
  i1144.entryStateTransitions = i1150
  var i1153 = i1145[6]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1153[i + 0]) );
  }
  i1144.exitStateTransitions = i1152
  var i1155 = i1145[7]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1155[i + 0]) );
  }
  i1144.anyStateTransitions = i1154
  i1144.defaultStateId = i1145[8]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.name = i1159[1]
  i1158.cycleOffset = i1159[2]
  i1158.cycleOffsetParameter = i1159[3]
  i1158.cycleOffsetParameterActive = !!i1159[4]
  i1158.mirror = !!i1159[5]
  i1158.mirrorParameter = i1159[6]
  i1158.mirrorParameterActive = !!i1159[7]
  i1158.motionId = i1159[8]
  i1158.nameHash = i1159[9]
  i1158.fullPathHash = i1159[10]
  i1158.speed = i1159[11]
  i1158.speedParameter = i1159[12]
  i1158.speedParameterActive = !!i1159[13]
  i1158.tag = i1159[14]
  i1158.tagHash = i1159[15]
  i1158.writeDefaultValues = !!i1159[16]
  var i1161 = i1159[17]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 2, i1160, '')
  }
  i1158.behaviours = i1160
  var i1163 = i1159[18]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1163[i + 0]) );
  }
  i1158.transitions = i1162
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1169 = data
  i1168.fullPath = i1169[0]
  i1168.canTransitionToSelf = !!i1169[1]
  i1168.duration = i1169[2]
  i1168.exitTime = i1169[3]
  i1168.hasExitTime = !!i1169[4]
  i1168.hasFixedDuration = !!i1169[5]
  i1168.interruptionSource = i1169[6]
  i1168.offset = i1169[7]
  i1168.orderedInterruption = !!i1169[8]
  i1168.destinationStateId = i1169[9]
  i1168.isExit = !!i1169[10]
  i1168.mute = !!i1169[11]
  i1168.solo = !!i1169[12]
  var i1171 = i1169[13]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1171[i + 0]) );
  }
  i1168.conditions = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1175 = data
  i1174.mode = i1175[0]
  i1174.parameter = i1175[1]
  i1174.threshold = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1181 = data
  i1180.destinationStateId = i1181[0]
  i1180.isExit = !!i1181[1]
  i1180.mute = !!i1181[2]
  i1180.solo = !!i1181[3]
  var i1183 = i1181[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1183[i + 0]) );
  }
  i1180.conditions = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1187 = data
  i1186.defaultBool = !!i1187[0]
  i1186.defaultFloat = i1187[1]
  i1186.defaultInt = i1187[2]
  i1186.name = i1187[3]
  i1186.nameHash = i1187[4]
  i1186.type = i1187[5]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.bytes64 = i1189[1]
  i1188.data = i1189[2]
  return i1188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1191 = data
  i1190.normalStyle = i1191[0]
  i1190.normalSpacingOffset = i1191[1]
  i1190.boldStyle = i1191[2]
  i1190.boldSpacing = i1191[3]
  i1190.italicStyle = i1191[4]
  i1190.tabSize = i1191[5]
  request.r(i1191[6], i1191[7], 0, i1190, 'atlas')
  i1190.m_SourceFontFileGUID = i1191[8]
  i1190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1191[9], i1190.m_CreationSettings)
  request.r(i1191[10], i1191[11], 0, i1190, 'm_SourceFontFile')
  i1190.m_SourceFontFilePath = i1191[12]
  i1190.m_AtlasPopulationMode = i1191[13]
  i1190.InternalDynamicOS = !!i1191[14]
  var i1193 = i1191[15]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.Glyph', i1193[i + 0]));
  }
  i1190.m_GlyphTable = i1192
  var i1195 = i1191[16]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_Character', i1195[i + 0]));
  }
  i1190.m_CharacterTable = i1194
  var i1197 = i1191[17]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1190.m_AtlasTextures = i1196
  i1190.m_AtlasTextureIndex = i1191[18]
  i1190.m_IsMultiAtlasTexturesEnabled = !!i1191[19]
  i1190.m_GetFontFeatures = !!i1191[20]
  i1190.m_ClearDynamicDataOnBuild = !!i1191[21]
  i1190.m_AtlasWidth = i1191[22]
  i1190.m_AtlasHeight = i1191[23]
  i1190.m_AtlasPadding = i1191[24]
  i1190.m_AtlasRenderMode = i1191[25]
  var i1199 = i1191[26]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.GlyphRect', i1199[i + 0]));
  }
  i1190.m_UsedGlyphRects = i1198
  var i1201 = i1191[27]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('UnityEngine.TextCore.GlyphRect', i1201[i + 0]));
  }
  i1190.m_FreeGlyphRects = i1200
  i1190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1191[28], i1190.m_FontFeatureTable)
  i1190.m_ShouldReimportFontFeatures = !!i1191[29]
  var i1203 = i1191[30]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1190.m_FallbackFontAssetTable = i1202
  var i1205 = i1191[31]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('TMPro.TMP_FontWeightPair', i1205[i + 0]) );
  }
  i1190.m_FontWeightTable = i1204
  var i1207 = i1191[32]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('TMPro.TMP_FontWeightPair', i1207[i + 0]) );
  }
  i1190.fontWeights = i1206
  i1190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1191[33], i1190.m_fontInfo)
  var i1209 = i1191[34]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Glyph', i1209[i + 0]));
  }
  i1190.m_glyphInfoList = i1208
  i1190.m_KerningTable = request.d('TMPro.KerningTable', i1191[35], i1190.m_KerningTable)
  var i1211 = i1191[36]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1190.fallbackFontAssets = i1210
  i1190.m_Version = i1191[37]
  i1190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1191[38], i1190.m_FaceInfo)
  request.r(i1191[39], i1191[40], 0, i1190, 'm_Material')
  return i1190
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1213 = data
  i1212.sourceFontFileName = i1213[0]
  i1212.sourceFontFileGUID = i1213[1]
  i1212.faceIndex = i1213[2]
  i1212.pointSizeSamplingMode = i1213[3]
  i1212.pointSize = i1213[4]
  i1212.padding = i1213[5]
  i1212.paddingMode = i1213[6]
  i1212.packingMode = i1213[7]
  i1212.atlasWidth = i1213[8]
  i1212.atlasHeight = i1213[9]
  i1212.characterSetSelectionMode = i1213[10]
  i1212.characterSequence = i1213[11]
  i1212.referencedFontAssetGUID = i1213[12]
  i1212.referencedTextAssetGUID = i1213[13]
  i1212.fontStyle = i1213[14]
  i1212.fontStyleModifier = i1213[15]
  i1212.renderMode = i1213[16]
  i1212.includeFontFeatures = !!i1213[17]
  return i1212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1217 = data
  i1216.m_Index = i1217[0]
  i1216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1217[1], i1216.m_Metrics)
  i1216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1217[2], i1216.m_GlyphRect)
  i1216.m_Scale = i1217[3]
  i1216.m_AtlasIndex = i1217[4]
  i1216.m_ClassDefinitionType = i1217[5]
  return i1216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1219 = data
  i1218.m_Width = i1219[0]
  i1218.m_Height = i1219[1]
  i1218.m_HorizontalBearingX = i1219[2]
  i1218.m_HorizontalBearingY = i1219[3]
  i1218.m_HorizontalAdvance = i1219[4]
  return i1218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1221 = data
  i1220.m_X = i1221[0]
  i1220.m_Y = i1221[1]
  i1220.m_Width = i1221[2]
  i1220.m_Height = i1221[3]
  return i1220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Character' )
  var i1225 = data
  i1224.m_ElementType = i1225[0]
  i1224.m_Unicode = i1225[1]
  i1224.m_GlyphIndex = i1225[2]
  i1224.m_Scale = i1225[3]
  return i1224
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.MultipleSubstitutionRecord', i1233[i + 0]));
  }
  i1230.m_MultipleSubstitutionRecords = i1232
  var i1235 = i1231[1]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.LigatureSubstitutionRecord', i1235[i + 0]));
  }
  i1230.m_LigatureSubstitutionRecords = i1234
  var i1237 = i1231[2]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1237[i + 0]));
  }
  i1230.m_GlyphPairAdjustmentRecords = i1236
  var i1239 = i1231[3]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1239[i + 0]));
  }
  i1230.m_MarkToBaseAdjustmentRecords = i1238
  var i1241 = i1231[4]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1241[i + 0]));
  }
  i1230.m_MarkToMarkAdjustmentRecords = i1240
  return i1230
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1245 = data
  i1244.m_TargetGlyphID = i1245[0]
  i1244.m_SubstituteGlyphIDs = i1245[1]
  return i1244
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1249 = data
  i1248.m_ComponentGlyphIDs = i1249[0]
  i1248.m_LigatureGlyphID = i1249[1]
  return i1248
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1253 = data
  i1252.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1253[0], i1252.m_FirstAdjustmentRecord)
  i1252.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1253[1], i1252.m_SecondAdjustmentRecord)
  i1252.m_FeatureLookupFlags = i1253[2]
  return i1252
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1257 = data
  i1256.m_BaseGlyphID = i1257[0]
  i1256.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1257[1], i1256.m_BaseGlyphAnchorPoint)
  i1256.m_MarkGlyphID = i1257[2]
  i1256.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1257[3], i1256.m_MarkPositionAdjustment)
  return i1256
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1261 = data
  i1260.m_BaseMarkGlyphID = i1261[0]
  i1260.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1261[1], i1260.m_BaseMarkGlyphAnchorPoint)
  i1260.m_CombiningMarkGlyphID = i1261[2]
  i1260.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1261[3], i1260.m_CombiningMarkPositionAdjustment)
  return i1260
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'regularTypeface')
  request.r(i1267[2], i1267[3], 0, i1266, 'italicTypeface')
  return i1266
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1269 = data
  i1268.Name = i1269[0]
  i1268.PointSize = i1269[1]
  i1268.Scale = i1269[2]
  i1268.CharacterCount = i1269[3]
  i1268.LineHeight = i1269[4]
  i1268.Baseline = i1269[5]
  i1268.Ascender = i1269[6]
  i1268.CapHeight = i1269[7]
  i1268.Descender = i1269[8]
  i1268.CenterLine = i1269[9]
  i1268.SuperscriptOffset = i1269[10]
  i1268.SubscriptOffset = i1269[11]
  i1268.SubSize = i1269[12]
  i1268.Underline = i1269[13]
  i1268.UnderlineThickness = i1269[14]
  i1268.strikethrough = i1269[15]
  i1268.strikethroughThickness = i1269[16]
  i1268.TabWidth = i1269[17]
  i1268.Padding = i1269[18]
  i1268.AtlasWidth = i1269[19]
  i1268.AtlasHeight = i1269[20]
  return i1268
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1273 = data
  i1272.id = i1273[0]
  i1272.x = i1273[1]
  i1272.y = i1273[2]
  i1272.width = i1273[3]
  i1272.height = i1273[4]
  i1272.xOffset = i1273[5]
  i1272.yOffset = i1273[6]
  i1272.xAdvance = i1273[7]
  i1272.scale = i1273[8]
  return i1272
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.KerningTable' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.KerningPair', i1277[i + 0]));
  }
  i1274.kerningPairs = i1276
  return i1274
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.KerningPair' )
  var i1281 = data
  i1280.xOffset = i1281[0]
  i1280.m_FirstGlyph = i1281[1]
  i1280.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1281[2], i1280.m_FirstGlyphAdjustments)
  i1280.m_SecondGlyph = i1281[3]
  i1280.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1281[4], i1280.m_SecondGlyphAdjustments)
  i1280.m_IgnoreSpacingAdjustments = !!i1281[5]
  return i1280
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1283 = data
  i1282.m_FaceIndex = i1283[0]
  i1282.m_FamilyName = i1283[1]
  i1282.m_StyleName = i1283[2]
  i1282.m_PointSize = i1283[3]
  i1282.m_Scale = i1283[4]
  i1282.m_UnitsPerEM = i1283[5]
  i1282.m_LineHeight = i1283[6]
  i1282.m_AscentLine = i1283[7]
  i1282.m_CapLine = i1283[8]
  i1282.m_MeanLine = i1283[9]
  i1282.m_Baseline = i1283[10]
  i1282.m_DescentLine = i1283[11]
  i1282.m_SuperscriptOffset = i1283[12]
  i1282.m_SuperscriptSize = i1283[13]
  i1282.m_SubscriptOffset = i1283[14]
  i1282.m_SubscriptSize = i1283[15]
  i1282.m_UnderlineOffset = i1283[16]
  i1282.m_UnderlineThickness = i1283[17]
  i1282.m_StrikethroughOffset = i1283[18]
  i1282.m_StrikethroughThickness = i1283[19]
  i1282.m_TabWidth = i1283[20]
  return i1282
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1284 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1285 = data
  i1284.useSafeMode = !!i1285[0]
  i1284.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1285[1], i1284.safeModeOptions)
  i1284.timeScale = i1285[2]
  i1284.unscaledTimeScale = i1285[3]
  i1284.useSmoothDeltaTime = !!i1285[4]
  i1284.maxSmoothUnscaledTime = i1285[5]
  i1284.rewindCallbackMode = i1285[6]
  i1284.showUnityEditorReport = !!i1285[7]
  i1284.logBehaviour = i1285[8]
  i1284.drawGizmos = !!i1285[9]
  i1284.defaultRecyclable = !!i1285[10]
  i1284.defaultAutoPlay = i1285[11]
  i1284.defaultUpdateType = i1285[12]
  i1284.defaultTimeScaleIndependent = !!i1285[13]
  i1284.defaultEaseType = i1285[14]
  i1284.defaultEaseOvershootOrAmplitude = i1285[15]
  i1284.defaultEasePeriod = i1285[16]
  i1284.defaultAutoKill = !!i1285[17]
  i1284.defaultLoopType = i1285[18]
  i1284.debugMode = !!i1285[19]
  i1284.debugStoreTargetId = !!i1285[20]
  i1284.showPreviewPanel = !!i1285[21]
  i1284.storeSettingsLocation = i1285[22]
  i1284.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1285[23], i1284.modules)
  i1284.createASMDEF = !!i1285[24]
  i1284.showPlayingTweens = !!i1285[25]
  i1284.showPausedTweens = !!i1285[26]
  return i1284
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1287 = data
  i1286.logBehaviour = i1287[0]
  i1286.nestedTweenFailureBehaviour = i1287[1]
  return i1286
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1289 = data
  i1288.showPanel = !!i1289[0]
  i1288.audioEnabled = !!i1289[1]
  i1288.physicsEnabled = !!i1289[2]
  i1288.physics2DEnabled = !!i1289[3]
  i1288.spriteEnabled = !!i1289[4]
  i1288.uiEnabled = !!i1289[5]
  i1288.textMeshProEnabled = !!i1289[6]
  i1288.tk2DEnabled = !!i1289[7]
  i1288.deAudioEnabled = !!i1289[8]
  i1288.deUnityExtendedEnabled = !!i1289[9]
  i1288.epoOutlineEnabled = !!i1289[10]
  return i1288
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_Settings' )
  var i1291 = data
  i1290.assetVersion = i1291[0]
  i1290.m_TextWrappingMode = i1291[1]
  i1290.m_enableKerning = !!i1291[2]
  var i1293 = i1291[3]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(i1293[i + 0]);
  }
  i1290.m_ActiveFontFeatures = i1292
  i1290.m_enableExtraPadding = !!i1291[4]
  i1290.m_enableTintAllSprites = !!i1291[5]
  i1290.m_enableParseEscapeCharacters = !!i1291[6]
  i1290.m_EnableRaycastTarget = !!i1291[7]
  i1290.m_GetFontFeaturesAtRuntime = !!i1291[8]
  i1290.m_missingGlyphCharacter = i1291[9]
  i1290.m_ClearDynamicDataOnBuild = !!i1291[10]
  i1290.m_warningsDisabled = !!i1291[11]
  request.r(i1291[12], i1291[13], 0, i1290, 'm_defaultFontAsset')
  i1290.m_defaultFontAssetPath = i1291[14]
  i1290.m_defaultFontSize = i1291[15]
  i1290.m_defaultAutoSizeMinRatio = i1291[16]
  i1290.m_defaultAutoSizeMaxRatio = i1291[17]
  i1290.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1291[18], i1291[19] )
  i1290.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1291[20], i1291[21] )
  i1290.m_autoSizeTextContainer = !!i1291[22]
  i1290.m_IsTextObjectScaleStatic = !!i1291[23]
  var i1295 = i1291[24]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1290.m_fallbackFontAssets = i1294
  i1290.m_matchMaterialPreset = !!i1291[25]
  i1290.m_HideSubTextObjects = !!i1291[26]
  request.r(i1291[27], i1291[28], 0, i1290, 'm_defaultSpriteAsset')
  i1290.m_defaultSpriteAssetPath = i1291[29]
  i1290.m_enableEmojiSupport = !!i1291[30]
  i1290.m_MissingCharacterSpriteUnicode = i1291[31]
  var i1297 = i1291[32]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1290.m_EmojiFallbackTextAssets = i1296
  i1290.m_defaultColorGradientPresetsPath = i1291[33]
  request.r(i1291[34], i1291[35], 0, i1290, 'm_defaultStyleSheet')
  i1290.m_StyleSheetsResourcePath = i1291[36]
  request.r(i1291[37], i1291[38], 0, i1290, 'm_leadingCharacters')
  request.r(i1291[39], i1291[40], 0, i1290, 'm_followingCharacters')
  i1290.m_UseModernHangulLineBreakingRules = !!i1291[41]
  return i1290
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1301 = data
  request.r(i1301[0], i1301[1], 0, i1300, 'spriteSheet')
  var i1303 = i1301[2]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('TMPro.TMP_Sprite', i1303[i + 0]));
  }
  i1300.spriteInfoList = i1302
  var i1305 = i1301[3]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 1, i1304, '')
  }
  i1300.fallbackSpriteAssets = i1304
  var i1307 = i1301[4]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('TMPro.TMP_SpriteCharacter', i1307[i + 0]));
  }
  i1300.m_SpriteCharacterTable = i1306
  var i1309 = i1301[5]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_SpriteGlyph', i1309[i + 0]));
  }
  i1300.m_GlyphTable = i1308
  i1300.m_Version = i1301[6]
  i1300.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1301[7], i1300.m_FaceInfo)
  request.r(i1301[8], i1301[9], 0, i1300, 'm_Material')
  return i1300
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.hashCode = i1313[1]
  i1312.unicode = i1313[2]
  i1312.pivot = new pc.Vec2( i1313[3], i1313[4] )
  request.r(i1313[5], i1313[6], 0, i1312, 'sprite')
  i1312.id = i1313[7]
  i1312.x = i1313[8]
  i1312.y = i1313[9]
  i1312.width = i1313[10]
  i1312.height = i1313[11]
  i1312.xOffset = i1313[12]
  i1312.yOffset = i1313[13]
  i1312.xAdvance = i1313[14]
  i1312.scale = i1313[15]
  return i1312
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1319 = data
  i1318.m_Name = i1319[0]
  i1318.m_ElementType = i1319[1]
  i1318.m_Unicode = i1319[2]
  i1318.m_GlyphIndex = i1319[3]
  i1318.m_Scale = i1319[4]
  return i1318
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'sprite')
  i1322.m_Index = i1323[2]
  i1322.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1323[3], i1322.m_Metrics)
  i1322.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1323[4], i1322.m_GlyphRect)
  i1322.m_Scale = i1323[5]
  i1322.m_AtlasIndex = i1323[6]
  i1322.m_ClassDefinitionType = i1323[7]
  return i1322
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.TMP_Style', i1327[i + 0]));
  }
  i1324.m_StyleList = i1326
  return i1324
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_Style' )
  var i1331 = data
  i1330.m_Name = i1331[0]
  i1330.m_HashCode = i1331[1]
  i1330.m_OpeningDefinition = i1331[2]
  i1330.m_ClosingDefinition = i1331[3]
  i1330.m_OpeningTagArray = i1331[4]
  i1330.m_ClosingTagArray = i1331[5]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1335[i + 0]) );
  }
  i1332.files = i1334
  i1332.componentToPrefabIds = i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1339 = data
  i1338.path = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'unityObject')
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1343[i + 0]) );
  }
  i1340.scriptsExecutionOrder = i1342
  var i1345 = i1341[1]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1345[i + 0]) );
  }
  i1340.sortingLayers = i1344
  var i1347 = i1341[2]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1347[i + 0]) );
  }
  i1340.cullingLayers = i1346
  i1340.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1341[3], i1340.timeSettings)
  i1340.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1341[4], i1340.physicsSettings)
  i1340.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1341[5], i1340.physics2DSettings)
  i1340.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1341[6], i1340.qualitySettings)
  i1340.enableRealtimeShadows = !!i1341[7]
  i1340.enableAutoInstancing = !!i1341[8]
  i1340.enableStaticBatching = !!i1341[9]
  i1340.enableDynamicBatching = !!i1341[10]
  i1340.usePreservativeDynamicBatching = !!i1341[11]
  i1340.lightmapEncodingQuality = i1341[12]
  i1340.desiredColorSpace = i1341[13]
  var i1349 = i1341[14]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( i1349[i + 0] );
  }
  i1340.allTags = i1348
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.value = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1357 = data
  i1356.id = i1357[0]
  i1356.name = i1357[1]
  i1356.value = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1361 = data
  i1360.id = i1361[0]
  i1360.name = i1361[1]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1363 = data
  i1362.fixedDeltaTime = i1363[0]
  i1362.maximumDeltaTime = i1363[1]
  i1362.timeScale = i1363[2]
  i1362.maximumParticleTimestep = i1363[3]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1365 = data
  i1364.gravity = new pc.Vec3( i1365[0], i1365[1], i1365[2] )
  i1364.defaultSolverIterations = i1365[3]
  i1364.bounceThreshold = i1365[4]
  i1364.autoSyncTransforms = !!i1365[5]
  i1364.autoSimulation = !!i1365[6]
  var i1367 = i1365[7]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1367[i + 0]) );
  }
  i1364.collisionMatrix = i1366
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1371 = data
  i1370.enabled = !!i1371[0]
  i1370.layerId = i1371[1]
  i1370.otherLayerId = i1371[2]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'material')
  i1372.gravity = new pc.Vec2( i1373[2], i1373[3] )
  i1372.positionIterations = i1373[4]
  i1372.velocityIterations = i1373[5]
  i1372.velocityThreshold = i1373[6]
  i1372.maxLinearCorrection = i1373[7]
  i1372.maxAngularCorrection = i1373[8]
  i1372.maxTranslationSpeed = i1373[9]
  i1372.maxRotationSpeed = i1373[10]
  i1372.baumgarteScale = i1373[11]
  i1372.baumgarteTOIScale = i1373[12]
  i1372.timeToSleep = i1373[13]
  i1372.linearSleepTolerance = i1373[14]
  i1372.angularSleepTolerance = i1373[15]
  i1372.defaultContactOffset = i1373[16]
  i1372.autoSimulation = !!i1373[17]
  i1372.queriesHitTriggers = !!i1373[18]
  i1372.queriesStartInColliders = !!i1373[19]
  i1372.callbacksOnDisable = !!i1373[20]
  i1372.reuseCollisionCallbacks = !!i1373[21]
  i1372.autoSyncTransforms = !!i1373[22]
  var i1375 = i1373[23]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1375[i + 0]) );
  }
  i1372.collisionMatrix = i1374
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1379 = data
  i1378.enabled = !!i1379[0]
  i1378.layerId = i1379[1]
  i1378.otherLayerId = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1381 = data
  var i1383 = i1381[0]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1383[i + 0]) );
  }
  i1380.qualityLevels = i1382
  var i1385 = i1381[1]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1380.names = i1384
  i1380.shadows = i1381[2]
  i1380.anisotropicFiltering = i1381[3]
  i1380.antiAliasing = i1381[4]
  i1380.lodBias = i1381[5]
  i1380.shadowCascades = i1381[6]
  i1380.shadowDistance = i1381[7]
  i1380.shadowmaskMode = i1381[8]
  i1380.shadowProjection = i1381[9]
  i1380.shadowResolution = i1381[10]
  i1380.softParticles = !!i1381[11]
  i1380.softVegetation = !!i1381[12]
  i1380.activeColorSpace = i1381[13]
  i1380.desiredColorSpace = i1381[14]
  i1380.masterTextureLimit = i1381[15]
  i1380.maxQueuedFrames = i1381[16]
  i1380.particleRaycastBudget = i1381[17]
  i1380.pixelLightCount = i1381[18]
  i1380.realtimeReflectionProbes = !!i1381[19]
  i1380.shadowCascade2Split = i1381[20]
  i1380.shadowCascade4Split = new pc.Vec3( i1381[21], i1381[22], i1381[23] )
  i1380.streamingMipmapsActive = !!i1381[24]
  i1380.vSyncCount = i1381[25]
  i1380.asyncUploadBufferSize = i1381[26]
  i1380.asyncUploadTimeSlice = i1381[27]
  i1380.billboardsFaceCameraPosition = !!i1381[28]
  i1380.shadowNearPlaneOffset = i1381[29]
  i1380.streamingMipmapsMemoryBudget = i1381[30]
  i1380.maximumLODLevel = i1381[31]
  i1380.streamingMipmapsAddAllCameras = !!i1381[32]
  i1380.streamingMipmapsMaxLevelReduction = i1381[33]
  i1380.streamingMipmapsRenderersPerFrame = i1381[34]
  i1380.resolutionScalingFixedDPIFactor = i1381[35]
  i1380.streamingMipmapsMaxFileIORequests = i1381[36]
  i1380.currentQualityLevel = i1381[37]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1391 = data
  i1390.weight = i1391[0]
  i1390.vertices = i1391[1]
  i1390.normals = i1391[2]
  i1390.tangents = i1391[3]
  return i1390
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'm_ObjectArgument')
  i1392.m_ObjectArgumentAssemblyTypeName = i1393[2]
  i1392.m_IntArgument = i1393[3]
  i1392.m_FloatArgument = i1393[4]
  i1392.m_StringArgument = i1393[5]
  i1392.m_BoolArgument = !!i1393[6]
  return i1392
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1395 = data
  i1394.m_GlyphIndex = i1395[0]
  i1394.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1395[1], i1394.m_GlyphValueRecord)
  return i1394
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1397 = data
  i1396.m_XCoordinate = i1397[0]
  i1396.m_YCoordinate = i1397[1]
  return i1396
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1399 = data
  i1398.m_XPositionAdjustment = i1399[0]
  i1398.m_YPositionAdjustment = i1399[1]
  return i1398
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1401 = data
  i1400.xPlacement = i1401[0]
  i1400.yPlacement = i1401[1]
  i1400.xAdvance = i1401[2]
  i1400.yAdvance = i1401[3]
  return i1400
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1403 = data
  i1402.m_XPlacement = i1403[0]
  i1402.m_YPlacement = i1403[1]
  i1402.m_XAdvance = i1403[2]
  i1402.m_YAdvance = i1403[3]
  return i1402
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CharacterController":{"enabled":0,"center":1,"radius":4,"height":5,"minMoveDistance":6,"skinWidth":7,"enableOverlapRecovery":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[9],"73":[7],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[82],"90":[82],"91":[82],"92":[82],"93":[82],"94":[82],"95":[7],"96":[13],"97":[98],"99":[98],"29":[28],"3":[1],"44":[28],"100":[28],"101":[33,28],"102":[13],"103":[33,28],"104":[28],"105":[28],"106":[13,28],"22":[28,33],"107":[108],"109":[108],"110":[108],"111":[28],"112":[28],"32":[29],"34":[33,28],"113":[28],"31":[29],"114":[28],"115":[28],"116":[28],"117":[28],"118":[28],"119":[28],"120":[28],"121":[28],"122":[28],"123":[33,28],"124":[28],"125":[28],"126":[28],"127":[28],"128":[33,28],"129":[28],"130":[51],"131":[51],"52":[51],"132":[51],"133":[7],"134":[7]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CharacterController","UnityEngine.MonoBehaviour","OBP.FreezeBrainrot.PlayerController","UnityEngine.Animator","OBP.FreezeBrainrot.FreezeGun","OBP.FreezeBrainrot.GameManager","UnityEngine.Camera","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Light","OBP.FreezeBrainrot.WaveHazard","OBP.FreezeBrainrot.CameraController","OBP.FreezeBrainrot.ShieldManager","LunaController","UnityEngine.GameObject","TMPro.TextMeshProUGUI","OBP.FreezeBrainrot.KeyboardInput","UnityEngine.AudioSource","OBP.FreezeBrainrot.SoundManager","UnityEngine.AudioClip","UnityEngine.ParticleSystem","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","OBP.FreezeBrainrot.CameraDragArea","UnityEngine.Sprite","OBP.FreezeBrainrot.Crosshair","OBP.FreezeBrainrot.FloatingFreezeText","TMPro.TMP_FontAsset","OBP.FreezeBrainrot.MoneyPopup","OBP.FreezeBrainrot.VirtualJoystick","OBP.FreezeBrainrot.ActionButton","OBP.FreezeBrainrot.TutorialController","OBP.FreezeBrainrot.HandHintAnim","OBP.FreezeBrainrot.UIPulse","OBP.FreezeBrainrot.NoTargetHint","OBP.FreezeBrainrot.CollectedHint","OBP.FreezeBrainrot.DamageFlash","UnityEngine.UI.Button","DG.Tweening.DOTweenAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","OBP.FreezeBrainrot.Billboard","UnityEngine.AudioListener","UnityEngine.BoxCollider","OBP.FreezeBrainrot.FreezableMonster","UnityEngine.ParticleSystemRenderer","OBP.FreezeBrainrot.GroundArrow","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "OBP_V04";

Deserializers.lunaInitializationTime = "10/29/2026 10:17:19";

Deserializers.lunaDaysRunning = "4.7";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_OBP_V04_ThuLH";

Deserializers.lunaAppID = "43685";

Deserializers.projectId = "3c1cf68ae04b7ff46b0afe9fb106512c";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1713";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4874";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.OBP_V04";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "b7a6b734-5421-4e6b-9ce8-a17f493b498f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

