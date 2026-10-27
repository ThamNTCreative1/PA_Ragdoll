var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.JointSpring' )
  var i2115 = data
  i2114.spring = i2115[0]
  i2114.damper = i2115[1]
  i2114.targetPosition = i2115[2]
  return i2114
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.JointMotor' )
  var i2117 = data
  i2116.m_TargetVelocity = i2117[0]
  i2116.m_Force = i2117[1]
  i2116.m_FreeSpin = i2117[2]
  return i2116
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.JointLimits' )
  var i2119 = data
  i2118.m_Min = i2119[0]
  i2118.m_Max = i2119[1]
  i2118.m_Bounciness = i2119[2]
  i2118.m_BounceMinVelocity = i2119[3]
  i2118.m_ContactDistance = i2119[4]
  i2118.minBounce = i2119[5]
  i2118.maxBounce = i2119[6]
  return i2118
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.JointDrive' )
  var i2121 = data
  i2120.m_PositionSpring = i2121[0]
  i2120.m_PositionDamper = i2121[1]
  i2120.m_MaximumForce = i2121[2]
  i2120.m_UseAcceleration = i2121[3]
  return i2120
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2123 = data
  i2122.m_Spring = i2123[0]
  i2122.m_Damper = i2123[1]
  return i2122
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2125 = data
  i2124.m_Limit = i2125[0]
  i2124.m_Bounciness = i2125[1]
  i2124.m_ContactDistance = i2125[2]
  return i2124
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2127 = data
  i2126.m_ExtremumSlip = i2127[0]
  i2126.m_ExtremumValue = i2127[1]
  i2126.m_AsymptoteSlip = i2127[2]
  i2126.m_AsymptoteValue = i2127[3]
  i2126.m_Stiffness = i2127[4]
  return i2126
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2129 = data
  i2128.m_LowerAngle = i2129[0]
  i2128.m_UpperAngle = i2129[1]
  return i2128
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2131 = data
  i2130.m_MotorSpeed = i2131[0]
  i2130.m_MaximumMotorTorque = i2131[1]
  return i2130
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2133 = data
  i2132.m_DampingRatio = i2133[0]
  i2132.m_Frequency = i2133[1]
  i2132.m_Angle = i2133[2]
  return i2132
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2135 = data
  i2134.m_LowerTranslation = i2135[0]
  i2134.m_UpperTranslation = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2136 = root || new pc.UnityMaterial()
  var i2137 = data
  i2136.name = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'shader')
  i2136.renderQueue = i2137[3]
  i2136.enableInstancing = !!i2137[4]
  var i2139 = i2137[5]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2139[i + 0]) );
  }
  i2136.floatParameters = i2138
  var i2141 = i2137[6]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2141[i + 0]) );
  }
  i2136.colorParameters = i2140
  var i2143 = i2137[7]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2143[i + 0]) );
  }
  i2136.vectorParameters = i2142
  var i2145 = i2137[8]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2145[i + 0]) );
  }
  i2136.textureParameters = i2144
  var i2147 = i2137[9]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2147[i + 0]) );
  }
  i2136.materialFlags = i2146
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.value = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2155 = data
  i2154.name = i2155[0]
  i2154.value = new pc.Color(i2155[1], i2155[2], i2155[3], i2155[4])
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.value = new pc.Vec4( i2159[1], i2159[2], i2159[3], i2159[4] )
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2163 = data
  i2162.name = i2163[0]
  request.r(i2163[1], i2163[2], 0, i2162, 'value')
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.enabled = !!i2167[1]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.width = i2169[1]
  i2168.height = i2169[2]
  i2168.mipmapCount = i2169[3]
  i2168.anisoLevel = i2169[4]
  i2168.filterMode = i2169[5]
  i2168.hdr = !!i2169[6]
  i2168.format = i2169[7]
  i2168.wrapMode = i2169[8]
  i2168.alphaIsTransparency = !!i2169[9]
  i2168.alphaSource = i2169[10]
  i2168.graphicsFormat = i2169[11]
  i2168.sRGBTexture = !!i2169[12]
  i2168.desiredColorSpace = i2169[13]
  i2168.wrapU = i2169[14]
  i2168.wrapV = i2169[15]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.index = i2171[1]
  i2170.startup = !!i2171[2]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2173 = data
  i2172.aspect = i2173[0]
  i2172.orthographic = !!i2173[1]
  i2172.orthographicSize = i2173[2]
  i2172.backgroundColor = new pc.Color(i2173[3], i2173[4], i2173[5], i2173[6])
  i2172.nearClipPlane = i2173[7]
  i2172.farClipPlane = i2173[8]
  i2172.fieldOfView = i2173[9]
  i2172.depth = i2173[10]
  i2172.clearFlags = i2173[11]
  i2172.cullingMask = i2173[12]
  i2172.rect = i2173[13]
  request.r(i2173[14], i2173[15], 0, i2172, 'targetTexture')
  i2172.usePhysicalProperties = !!i2173[16]
  i2172.focalLength = i2173[17]
  i2172.sensorSize = new pc.Vec2( i2173[18], i2173[19] )
  i2172.lensShift = new pc.Vec2( i2173[20], i2173[21] )
  i2172.gateFit = i2173[22]
  i2172.commandBufferCount = i2173[23]
  i2172.cameraType = i2173[24]
  i2172.enabled = !!i2173[25]
  return i2172
}

Deserializers["PlayableCameraController"] = function (request, data, root) {
  var i2174 = root || request.c( 'PlayableCameraController' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'view')
  request.r(i2175[2], i2175[3], 0, i2174, 'followTarget')
  i2174.slingPosition = new pc.Vec3( i2175[4], i2175[5], i2175[6] )
  i2174.mapPosition = new pc.Vec3( i2175[7], i2175[8], i2175[9] )
  i2174.slingFrame = new pc.Vec2( i2175[10], i2175[11] )
  i2174.mapFrame = new pc.Vec2( i2175[12], i2175[13] )
  i2174.uiVerticalReserve = i2175[14]
  i2174.panDuration = i2175[15]
  i2174.aimRoomMin = new pc.Vec2( i2175[16], i2175[17] )
  i2174.aimRoomMax = new pc.Vec2( i2175[18], i2175[19] )
  i2174.aimFocusMargin = new pc.Vec2( i2175[20], i2175[21] )
  i2174.aimFocus = new pc.Vec2( i2175[22], i2175[23] )
  i2174.aimPosition = new pc.Vec3( i2175[24], i2175[25], i2175[26] )
  i2174.aimFrame = new pc.Vec2( i2175[27], i2175[28] )
  i2174.aimZoomOutTime = i2175[29]
  i2174.aimZoomInTime = i2175[30]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.tagId = i2177[1]
  i2176.enabled = !!i2177[2]
  i2176.isStatic = !!i2177[3]
  i2176.layer = i2177[4]
  return i2176
}

Deserializers["LunaControllerFNAF"] = function (request, data, root) {
  var i2178 = root || request.c( 'LunaControllerFNAF' )
  var i2179 = data
  i2178.version = i2179[0]
  request.r(i2179[1], i2179[2], 0, i2178, 'backgroundMusic')
  i2178.musicEnabled = !!i2179[3]
  i2178.musicVolume = i2179[4]
  i2178.heroShot1 = i2179[5]
  i2178.heroShot2 = i2179[6]
  i2178.heroShot3 = i2179[7]
  i2178.heroShot4 = i2179[8]
  request.r(i2179[9], i2179[10], 0, i2178, 'flow')
  return i2178
}

Deserializers["PlayableFlowController"] = function (request, data, root) {
  var i2180 = root || request.c( 'PlayableFlowController' )
  var i2181 = data
  i2180.playableVersion = i2181[0]
  i2180.tapCount = i2181[1]
  i2180.phase = i2181[2]
  var i2183 = i2181[3]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2180.actors = i2182
  request.r(i2181[4], i2181[5], 0, i2180, 'cameraRig')
  request.r(i2181[6], i2181[7], 0, i2180, 'leftBand')
  request.r(i2181[8], i2181[9], 0, i2180, 'rightBand')
  var i2185 = i2181[10]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 2) {
  request.r(i2185[i + 0], i2185[i + 1], 2, i2184, '')
  }
  i2180.trajectoryDots = i2184
  request.r(i2181[11], i2181[12], 0, i2180, 'handGuide')
  request.r(i2181[13], i2181[14], 0, i2180, 'handAlpha')
  request.r(i2181[15], i2181[16], 0, i2180, 'prompt')
  request.r(i2181[17], i2181[18], 0, i2180, 'actorLabel')
  request.r(i2181[19], i2181[20], 0, i2180, 'versionLabel')
  request.r(i2181[21], i2181[22], 0, i2180, 'audioSource')
  request.r(i2181[23], i2181[24], 0, i2180, 'launchSound')
  request.r(i2181[25], i2181[26], 0, i2180, 'impactSound')
  request.r(i2181[27], i2181[28], 0, i2180, 'musicSource')
  request.r(i2181[29], i2181[30], 0, i2180, 'bgm')
  request.r(i2181[31], i2181[32], 0, i2180, 'grabSound')
  request.r(i2181[33], i2181[34], 0, i2180, 'spawnSound')
  request.r(i2181[35], i2181[36], 0, i2180, 'knockSound')
  request.r(i2181[37], i2181[38], 0, i2180, 'ctaSound')
  var i2187 = i2181[39]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2180.impactSounds = i2186
  request.r(i2181[40], i2181[41], 0, i2180, 'flySound')
  i2180.flyVolume = i2181[42]
  i2180.spawnVolume = i2181[43]
  i2180.musicVolume = i2181[44]
  i2180.anchor = new pc.Vec2( i2181[45], i2181[46] )
  i2180.leftBandTip = new pc.Vec3( i2181[47], i2181[48], i2181[49] )
  i2180.rightBandTip = new pc.Vec3( i2181[50], i2181[51], i2181[52] )
  i2180.grabRadius = i2181[53]
  i2180.maxPull = i2181[54]
  i2180.launchScale = i2181[55]
  i2180.introHold = i2181[56]
  i2180.resultHold = i2181[57]
  i2180.maxFlightTime = i2181[58]
  i2180.storeOpened = !!i2181[59]
  i2180.installCallCount = i2181[60]
  request.r(i2181[61], i2181[62], 0, i2180, 'heroSkins')
  i2180.heroOrder = i2181[63]
  i2180.shotIndex = i2181[64]
  i2180.introText = i2181[65]
  request.r(i2181[66], i2181[67], 0, i2180, 'selectRoot')
  var i2189 = i2181[68]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2180.selectButtons = i2188
  var i2191 = i2181[69]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2180.selectFrames = i2190
  var i2193 = i2181[70]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2180.selectPortraits = i2192
  var i2195 = i2181[71]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2180.selectNames = i2194
  request.r(i2181[72], i2181[73], 0, i2180, 'frameNormal')
  request.r(i2181[74], i2181[75], 0, i2180, 'frameHighlight')
  i2180.handTargetButton = i2181[76]
  request.r(i2181[77], i2181[78], 0, i2180, 'endCardRoot')
  request.r(i2181[79], i2181[80], 0, i2180, 'endCardPortrait')
  request.r(i2181[81], i2181[82], 0, i2180, 'endCardTitle')
  request.r(i2181[83], i2181[84], 0, i2180, 'ctaButton')
  i2180.hitReturnTime = i2181[85]
  i2180.minHitTime = i2181[86]
  i2180.dotSizeStart = i2181[87]
  i2180.dotSizeEnd = i2181[88]
  i2180.trajectoryTime = i2181[89]
  i2180.ignoreNearPull = i2181[90]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'clip')
  request.r(i2209[2], i2209[3], 0, i2208, 'outputAudioMixerGroup')
  i2208.playOnAwake = !!i2209[4]
  i2208.loop = !!i2209[5]
  i2208.time = i2209[6]
  i2208.volume = i2209[7]
  i2208.pitch = i2209[8]
  i2208.enabled = !!i2209[9]
  return i2208
}

Deserializers["HeroSkins"] = function (request, data, root) {
  var i2210 = root || request.c( 'HeroSkins' )
  var i2211 = data
  var i2213 = i2211[0]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('HeroSkin', i2213[i + 0]) );
  }
  i2210.skins = i2212
  i2210.headPixel = i2211[1]
  i2210.limbPixel = new pc.Vec2( i2211[2], i2211[3] )
  i2210.bodySize = new pc.Vec2( i2211[4], i2211[5] )
  i2210.neckLocal = new pc.Vec2( i2211[6], i2211[7] )
  return i2210
}

Deserializers["HeroSkin"] = function (request, data, root) {
  var i2216 = root || request.c( 'HeroSkin' )
  var i2217 = data
  i2216.label = i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'head')
  request.r(i2217[3], i2217[4], 0, i2216, 'body')
  request.r(i2217[5], i2217[6], 0, i2216, 'handLeft')
  request.r(i2217[7], i2217[8], 0, i2216, 'handRight')
  request.r(i2217[9], i2217[10], 0, i2216, 'footLeft')
  request.r(i2217[11], i2217[12], 0, i2216, 'footRight')
  request.r(i2217[13], i2217[14], 0, i2216, 'portrait')
  i2216.headPivot = new pc.Vec2( i2217[15], i2217[16] )
  i2216.handLeftPivot = new pc.Vec2( i2217[17], i2217[18] )
  i2216.handRightPivot = new pc.Vec2( i2217[19], i2217[20] )
  i2216.footLeftPivot = new pc.Vec2( i2217[21], i2217[22] )
  i2216.footRightPivot = new pc.Vec2( i2217[23], i2217[24] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2219 = data
  i2218.type = i2219[0]
  i2218.color = new pc.Color(i2219[1], i2219[2], i2219[3], i2219[4])
  i2218.cullingMask = i2219[5]
  i2218.intensity = i2219[6]
  i2218.range = i2219[7]
  i2218.spotAngle = i2219[8]
  i2218.shadows = i2219[9]
  i2218.shadowNormalBias = i2219[10]
  i2218.shadowBias = i2219[11]
  i2218.shadowStrength = i2219[12]
  i2218.shadowResolution = i2219[13]
  i2218.lightmapBakeType = i2219[14]
  i2218.renderMode = i2219[15]
  request.r(i2219[16], i2219[17], 0, i2218, 'cookie')
  i2218.cookieSize = i2219[18]
  i2218.shadowNearPlane = i2219[19]
  i2218.occlusionMaskChannel = i2219[20]
  i2218.isBaked = !!i2219[21]
  i2218.mixedLightingMode = i2219[22]
  i2218.enabled = !!i2219[23]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2221 = data
  i2220.color = new pc.Color(i2221[0], i2221[1], i2221[2], i2221[3])
  request.r(i2221[4], i2221[5], 0, i2220, 'sprite')
  i2220.flipX = !!i2221[6]
  i2220.flipY = !!i2221[7]
  i2220.drawMode = i2221[8]
  i2220.size = new pc.Vec2( i2221[9], i2221[10] )
  i2220.tileMode = i2221[11]
  i2220.adaptiveModeThreshold = i2221[12]
  i2220.maskInteraction = i2221[13]
  i2220.spriteSortPoint = i2221[14]
  i2220.enabled = !!i2221[15]
  request.r(i2221[16], i2221[17], 0, i2220, 'sharedMaterial')
  var i2223 = i2221[18]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 2, i2222, '')
  }
  i2220.sharedMaterials = i2222
  i2220.receiveShadows = !!i2221[19]
  i2220.shadowCastingMode = i2221[20]
  i2220.sortingLayerID = i2221[21]
  i2220.sortingOrder = i2221[22]
  i2220.lightmapIndex = i2221[23]
  i2220.lightmapSceneIndex = i2221[24]
  i2220.lightmapScaleOffset = new pc.Vec4( i2221[25], i2221[26], i2221[27], i2221[28] )
  i2220.lightProbeUsage = i2221[29]
  i2220.reflectionProbeUsage = i2221[30]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2227 = data
  i2226.usedByComposite = !!i2227[0]
  i2226.autoTiling = !!i2227[1]
  i2226.size = new pc.Vec2( i2227[2], i2227[3] )
  i2226.edgeRadius = i2227[4]
  i2226.enabled = !!i2227[5]
  i2226.isTrigger = !!i2227[6]
  i2226.usedByEffector = !!i2227[7]
  i2226.density = i2227[8]
  i2226.offset = new pc.Vec2( i2227[9], i2227[10] )
  request.r(i2227[11], i2227[12], 0, i2226, 'material')
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2229 = data
  i2228.bodyType = i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'material')
  i2228.simulated = !!i2229[3]
  i2228.useAutoMass = !!i2229[4]
  i2228.mass = i2229[5]
  i2228.drag = i2229[6]
  i2228.angularDrag = i2229[7]
  i2228.gravityScale = i2229[8]
  i2228.collisionDetectionMode = i2229[9]
  i2228.sleepMode = i2229[10]
  i2228.constraints = i2229[11]
  return i2228
}

Deserializers["RagdollActor"] = function (request, data, root) {
  var i2230 = root || request.c( 'RagdollActor' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'torso')
  var i2233 = i2231[2]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2230.bodies = i2232
  var i2235 = i2231[3]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2230.renderers = i2234
  i2230.hasCollided = !!i2231[4]
  i2230.reactiveTarget = !!i2231[5]
  i2230.knockedDown = !!i2231[6]
  return i2230
}

Deserializers["RagdollImpact"] = function (request, data, root) {
  var i2240 = root || request.c( 'RagdollImpact' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'actor')
  request.r(i2241[2], i2241[3], 0, i2240, 'flow')
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2243 = data
  i2242.useLimits = !!i2243[0]
  i2242.limits = request.d('UnityEngine.JointAngleLimits2D', i2243[1], i2242.limits)
  i2242.useMotor = !!i2243[2]
  i2242.motor = request.d('UnityEngine.JointMotor2D', i2243[3], i2242.motor)
  i2242.anchor = new pc.Vec2( i2243[4], i2243[5] )
  i2242.connectedAnchor = new pc.Vec2( i2243[6], i2243[7] )
  i2242.autoConfigureConnectedAnchor = !!i2243[8]
  request.r(i2243[9], i2243[10], 0, i2242, 'connectedBody')
  i2242.breakForce = i2243[11]
  i2242.breakTorque = i2243[12]
  i2242.enableCollision = !!i2243[13]
  i2242.enabled = !!i2243[14]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2245 = data
  i2244.textureMode = i2245[0]
  i2244.alignment = i2245[1]
  i2244.widthCurve = new pc.AnimationCurve( { keys_flow: i2245[2] } )
  i2244.colorGradient = i2245[3] ? new pc.ColorGradient(i2245[3][0], i2245[3][1], i2245[3][2]) : null
  var i2247 = i2245[4]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 3) {
    i2246.push( new pc.Vec3( i2247[i + 0], i2247[i + 1], i2247[i + 2] ) );
  }
  i2244.positions = i2246
  i2244.positionCount = i2245[5]
  i2244.widthMultiplier = i2245[6]
  i2244.startWidth = i2245[7]
  i2244.endWidth = i2245[8]
  i2244.numCornerVertices = i2245[9]
  i2244.numCapVertices = i2245[10]
  i2244.useWorldSpace = !!i2245[11]
  i2244.loop = !!i2245[12]
  i2244.startColor = new pc.Color(i2245[13], i2245[14], i2245[15], i2245[16])
  i2244.endColor = new pc.Color(i2245[17], i2245[18], i2245[19], i2245[20])
  i2244.generateLightingData = !!i2245[21]
  i2244.enabled = !!i2245[22]
  request.r(i2245[23], i2245[24], 0, i2244, 'sharedMaterial')
  var i2249 = i2245[25]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 2, i2248, '')
  }
  i2244.sharedMaterials = i2248
  i2244.receiveShadows = !!i2245[26]
  i2244.shadowCastingMode = i2245[27]
  i2244.sortingLayerID = i2245[28]
  i2244.sortingOrder = i2245[29]
  i2244.lightmapIndex = i2245[30]
  i2244.lightmapSceneIndex = i2245[31]
  i2244.lightmapScaleOffset = new pc.Vec4( i2245[32], i2245[33], i2245[34], i2245[35] )
  i2244.lightProbeUsage = i2245[36]
  i2244.reflectionProbeUsage = i2245[37]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2253 = data
  i2252.pivot = new pc.Vec2( i2253[0], i2253[1] )
  i2252.anchorMin = new pc.Vec2( i2253[2], i2253[3] )
  i2252.anchorMax = new pc.Vec2( i2253[4], i2253[5] )
  i2252.sizeDelta = new pc.Vec2( i2253[6], i2253[7] )
  i2252.anchoredPosition3D = new pc.Vec3( i2253[8], i2253[9], i2253[10] )
  i2252.rotation = new pc.Quat(i2253[11], i2253[12], i2253[13], i2253[14])
  i2252.scale = new pc.Vec3( i2253[15], i2253[16], i2253[17] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2255 = data
  i2254.planeDistance = i2255[0]
  i2254.referencePixelsPerUnit = i2255[1]
  i2254.isFallbackOverlay = !!i2255[2]
  i2254.renderMode = i2255[3]
  i2254.renderOrder = i2255[4]
  i2254.sortingLayerName = i2255[5]
  i2254.sortingOrder = i2255[6]
  i2254.scaleFactor = i2255[7]
  request.r(i2255[8], i2255[9], 0, i2254, 'worldCamera')
  i2254.overrideSorting = !!i2255[10]
  i2254.pixelPerfect = !!i2255[11]
  i2254.targetDisplay = i2255[12]
  i2254.overridePixelPerfect = !!i2255[13]
  i2254.enabled = !!i2255[14]
  return i2254
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2257 = data
  i2256.m_UiScaleMode = i2257[0]
  i2256.m_ReferencePixelsPerUnit = i2257[1]
  i2256.m_ScaleFactor = i2257[2]
  i2256.m_ReferenceResolution = new pc.Vec2( i2257[3], i2257[4] )
  i2256.m_ScreenMatchMode = i2257[5]
  i2256.m_MatchWidthOrHeight = i2257[6]
  i2256.m_PhysicalUnit = i2257[7]
  i2256.m_FallbackScreenDPI = i2257[8]
  i2256.m_DefaultSpriteDPI = i2257[9]
  i2256.m_DynamicPixelsPerUnit = i2257[10]
  i2256.m_PresetInfoIsWorld = !!i2257[11]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2259 = data
  i2258.cullTransparentMesh = !!i2259[0]
  return i2258
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.Text' )
  var i2261 = data
  i2260.m_FontData = request.d('UnityEngine.UI.FontData', i2261[0], i2260.m_FontData)
  i2260.m_Text = i2261[1]
  request.r(i2261[2], i2261[3], 0, i2260, 'm_Material')
  i2260.m_Maskable = !!i2261[4]
  i2260.m_Color = new pc.Color(i2261[5], i2261[6], i2261[7], i2261[8])
  i2260.m_RaycastTarget = !!i2261[9]
  i2260.m_RaycastPadding = new pc.Vec4( i2261[10], i2261[11], i2261[12], i2261[13] )
  return i2260
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'm_Font')
  i2262.m_FontSize = i2263[2]
  i2262.m_FontStyle = i2263[3]
  i2262.m_BestFit = !!i2263[4]
  i2262.m_MinSize = i2263[5]
  i2262.m_MaxSize = i2263[6]
  i2262.m_Alignment = i2263[7]
  i2262.m_AlignByGeometry = !!i2263[8]
  i2262.m_RichText = !!i2263[9]
  i2262.m_HorizontalOverflow = i2263[10]
  i2262.m_VerticalOverflow = i2263[11]
  i2262.m_LineSpacing = i2263[12]
  return i2262
}

Deserializers["TextOutline"] = function (request, data, root) {
  var i2264 = root || request.c( 'TextOutline' )
  var i2265 = data
  i2264.outlineColor = new pc.Color(i2265[0], i2265[1], i2265[2], i2265[3])
  i2264.thickness = i2265[4]
  i2264.shadowColor = new pc.Color(i2265[5], i2265[6], i2265[7], i2265[8])
  i2264.shadowOffset = new pc.Vec2( i2265[9], i2265[10] )
  var i2267 = i2265[11]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 2, i2266, '')
  }
  i2264.copies = i2266
  i2264.baseAlpha = i2265[12]
  return i2264
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.Image' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_Sprite')
  i2268.m_Type = i2269[2]
  i2268.m_PreserveAspect = !!i2269[3]
  i2268.m_FillCenter = !!i2269[4]
  i2268.m_FillMethod = i2269[5]
  i2268.m_FillAmount = i2269[6]
  i2268.m_FillClockwise = !!i2269[7]
  i2268.m_FillOrigin = i2269[8]
  i2268.m_UseSpriteMesh = !!i2269[9]
  i2268.m_PixelsPerUnitMultiplier = i2269[10]
  request.r(i2269[11], i2269[12], 0, i2268, 'm_Material')
  i2268.m_Maskable = !!i2269[13]
  i2268.m_Color = new pc.Color(i2269[14], i2269[15], i2269[16], i2269[17])
  i2268.m_RaycastTarget = !!i2269[18]
  i2268.m_RaycastPadding = new pc.Vec4( i2269[19], i2269[20], i2269[21], i2269[22] )
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2271 = data
  i2270.m_Alpha = i2271[0]
  i2270.m_Interactable = !!i2271[1]
  i2270.m_BlocksRaycasts = !!i2271[2]
  i2270.m_IgnoreParentGroups = !!i2271[3]
  i2270.enabled = !!i2271[4]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2273 = data
  i2272.ambientIntensity = i2273[0]
  i2272.reflectionIntensity = i2273[1]
  i2272.ambientMode = i2273[2]
  i2272.ambientLight = new pc.Color(i2273[3], i2273[4], i2273[5], i2273[6])
  i2272.ambientSkyColor = new pc.Color(i2273[7], i2273[8], i2273[9], i2273[10])
  i2272.ambientGroundColor = new pc.Color(i2273[11], i2273[12], i2273[13], i2273[14])
  i2272.ambientEquatorColor = new pc.Color(i2273[15], i2273[16], i2273[17], i2273[18])
  i2272.fogColor = new pc.Color(i2273[19], i2273[20], i2273[21], i2273[22])
  i2272.fogEndDistance = i2273[23]
  i2272.fogStartDistance = i2273[24]
  i2272.fogDensity = i2273[25]
  i2272.fog = !!i2273[26]
  request.r(i2273[27], i2273[28], 0, i2272, 'skybox')
  i2272.fogMode = i2273[29]
  var i2275 = i2273[30]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2275[i + 0]) );
  }
  i2272.lightmaps = i2274
  i2272.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2273[31], i2272.lightProbes)
  i2272.lightmapsMode = i2273[32]
  i2272.mixedBakeMode = i2273[33]
  i2272.environmentLightingMode = i2273[34]
  i2272.ambientProbe = new pc.SphericalHarmonicsL2(i2273[35])
  request.r(i2273[36], i2273[37], 0, i2272, 'customReflection')
  request.r(i2273[38], i2273[39], 0, i2272, 'defaultReflection')
  i2272.defaultReflectionMode = i2273[40]
  i2272.defaultReflectionResolution = i2273[41]
  i2272.sunLightObjectId = i2273[42]
  i2272.pixelLightCount = i2273[43]
  i2272.defaultReflectionHDR = !!i2273[44]
  i2272.hasLightDataAsset = !!i2273[45]
  i2272.hasManualGenerate = !!i2273[46]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'lightmapColor')
  request.r(i2279[2], i2279[3], 0, i2278, 'lightmapDirection')
  request.r(i2279[4], i2279[5], 0, i2278, 'shadowMask')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2280 = root || new UnityEngine.LightProbes()
  var i2281 = data
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2287 = data
  var i2289 = i2287[0]
  var i2288 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2289[i + 0]));
  }
  i2286.ShaderCompilationErrors = i2288
  i2286.name = i2287[1]
  i2286.guid = i2287[2]
  var i2291 = i2287[3]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( i2291[i + 0] );
  }
  i2286.shaderDefinedKeywords = i2290
  var i2293 = i2287[4]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2293[i + 0]) );
  }
  i2286.passes = i2292
  var i2295 = i2287[5]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2295[i + 0]) );
  }
  i2286.usePasses = i2294
  var i2297 = i2287[6]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2297[i + 0]) );
  }
  i2286.defaultParameterValues = i2296
  request.r(i2287[7], i2287[8], 0, i2286, 'unityFallbackShader')
  i2286.readDepth = !!i2287[9]
  i2286.hasDepthOnlyPass = !!i2287[10]
  i2286.isCreatedByShaderGraph = !!i2287[11]
  i2286.disableBatching = !!i2287[12]
  i2286.compiled = !!i2287[13]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2301 = data
  i2300.shaderName = i2301[0]
  i2300.errorMessage = i2301[1]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2306 = root || new pc.UnityShaderPass()
  var i2307 = data
  i2306.id = i2307[0]
  i2306.subShaderIndex = i2307[1]
  i2306.name = i2307[2]
  i2306.passType = i2307[3]
  i2306.grabPassTextureName = i2307[4]
  i2306.usePass = !!i2307[5]
  i2306.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[6], i2306.zTest)
  i2306.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[7], i2306.zWrite)
  i2306.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[8], i2306.culling)
  i2306.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2307[9], i2306.blending)
  i2306.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2307[10], i2306.alphaBlending)
  i2306.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[11], i2306.colorWriteMask)
  i2306.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[12], i2306.offsetUnits)
  i2306.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[13], i2306.offsetFactor)
  i2306.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[14], i2306.stencilRef)
  i2306.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[15], i2306.stencilReadMask)
  i2306.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2307[16], i2306.stencilWriteMask)
  i2306.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2307[17], i2306.stencilOp)
  i2306.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2307[18], i2306.stencilOpFront)
  i2306.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2307[19], i2306.stencilOpBack)
  var i2309 = i2307[20]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2309[i + 0]) );
  }
  i2306.tags = i2308
  var i2311 = i2307[21]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2306.passDefinedKeywords = i2310
  var i2313 = i2307[22]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2313[i + 0]) );
  }
  i2306.passDefinedKeywordGroups = i2312
  var i2315 = i2307[23]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2315[i + 0]) );
  }
  i2306.variants = i2314
  var i2317 = i2307[24]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2317[i + 0]) );
  }
  i2306.excludedVariants = i2316
  i2306.hasDepthReader = !!i2307[25]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2319 = data
  i2318.val = i2319[0]
  i2318.name = i2319[1]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2321 = data
  i2320.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[0], i2320.src)
  i2320.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[1], i2320.dst)
  i2320.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[2], i2320.op)
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2323 = data
  i2322.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[0], i2322.pass)
  i2322.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[1], i2322.fail)
  i2322.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[2], i2322.zFail)
  i2322.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2323[3], i2322.comp)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2327 = data
  i2326.name = i2327[0]
  i2326.value = i2327[1]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2331 = data
  var i2333 = i2331[0]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( i2333[i + 0] );
  }
  i2330.keywords = i2332
  i2330.hasDiscard = !!i2331[1]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2337 = data
  i2336.passId = i2337[0]
  i2336.subShaderIndex = i2337[1]
  var i2339 = i2337[2]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( i2339[i + 0] );
  }
  i2336.keywords = i2338
  i2336.vertexProgram = i2337[3]
  i2336.fragmentProgram = i2337[4]
  i2336.exportedForWebGl2 = !!i2337[5]
  i2336.readDepth = !!i2337[6]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'shader')
  i2342.pass = i2343[2]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2347 = data
  i2346.name = i2347[0]
  i2346.type = i2347[1]
  i2346.value = new pc.Vec4( i2347[2], i2347[3], i2347[4], i2347[5] )
  i2346.textureValue = i2347[6]
  i2346.shaderPropertyFlag = i2347[7]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2349 = data
  i2348.name = i2349[0]
  request.r(i2349[1], i2349[2], 0, i2348, 'texture')
  i2348.aabb = i2349[3]
  i2348.vertices = i2349[4]
  i2348.triangles = i2349[5]
  i2348.textureRect = UnityEngine.Rect.MinMaxRect(i2349[6], i2349[7], i2349[8], i2349[9])
  i2348.packedRect = UnityEngine.Rect.MinMaxRect(i2349[10], i2349[11], i2349[12], i2349[13])
  i2348.border = new pc.Vec4( i2349[14], i2349[15], i2349[16], i2349[17] )
  i2348.transparency = i2349[18]
  i2348.bounds = i2349[19]
  i2348.pixelsPerUnit = i2349[20]
  i2348.textureWidth = i2349[21]
  i2348.textureHeight = i2349[22]
  i2348.nativeSize = new pc.Vec2( i2349[23], i2349[24] )
  i2348.pivot = new pc.Vec2( i2349[25], i2349[26] )
  i2348.textureRectOffset = new pc.Vec2( i2349[27], i2349[28] )
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2351 = data
  i2350.name = i2351[0]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2353 = data
  i2352.name = i2353[0]
  i2352.ascent = i2353[1]
  i2352.originalLineHeight = i2353[2]
  i2352.fontSize = i2353[3]
  var i2355 = i2353[4]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2355[i + 0]) );
  }
  i2352.characterInfo = i2354
  request.r(i2353[5], i2353[6], 0, i2352, 'texture')
  i2352.originalFontSize = i2353[7]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2359 = data
  i2358.index = i2359[0]
  i2358.advance = i2359[1]
  i2358.bearing = i2359[2]
  i2358.glyphWidth = i2359[3]
  i2358.glyphHeight = i2359[4]
  i2358.minX = i2359[5]
  i2358.maxX = i2359[6]
  i2358.minY = i2359[7]
  i2358.maxY = i2359[8]
  i2358.uvBottomLeftX = i2359[9]
  i2358.uvBottomLeftY = i2359[10]
  i2358.uvBottomRightX = i2359[11]
  i2358.uvBottomRightY = i2359[12]
  i2358.uvTopLeftX = i2359[13]
  i2358.uvTopLeftY = i2359[14]
  i2358.uvTopRightX = i2359[15]
  i2358.uvTopRightY = i2359[16]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2361 = data
  var i2363 = i2361[0]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2363[i + 0]) );
  }
  i2360.files = i2362
  i2360.componentToPrefabIds = i2361[1]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2367 = data
  i2366.path = i2367[0]
  request.r(i2367[1], i2367[2], 0, i2366, 'unityObject')
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2371[i + 0]) );
  }
  i2368.scriptsExecutionOrder = i2370
  var i2373 = i2369[1]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2373[i + 0]) );
  }
  i2368.sortingLayers = i2372
  var i2375 = i2369[2]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2375[i + 0]) );
  }
  i2368.cullingLayers = i2374
  i2368.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2369[3], i2368.timeSettings)
  i2368.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2369[4], i2368.physicsSettings)
  i2368.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2369[5], i2368.physics2DSettings)
  i2368.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2369[6], i2368.qualitySettings)
  i2368.enableRealtimeShadows = !!i2369[7]
  i2368.enableAutoInstancing = !!i2369[8]
  i2368.enableStaticBatching = !!i2369[9]
  i2368.enableDynamicBatching = !!i2369[10]
  i2368.usePreservativeDynamicBatching = !!i2369[11]
  i2368.lightmapEncodingQuality = i2369[12]
  i2368.desiredColorSpace = i2369[13]
  var i2377 = i2369[14]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( i2377[i + 0] );
  }
  i2368.allTags = i2376
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2381 = data
  i2380.name = i2381[0]
  i2380.value = i2381[1]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2385 = data
  i2384.id = i2385[0]
  i2384.name = i2385[1]
  i2384.value = i2385[2]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2389 = data
  i2388.id = i2389[0]
  i2388.name = i2389[1]
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2391 = data
  i2390.fixedDeltaTime = i2391[0]
  i2390.maximumDeltaTime = i2391[1]
  i2390.timeScale = i2391[2]
  i2390.maximumParticleTimestep = i2391[3]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2393 = data
  i2392.gravity = new pc.Vec3( i2393[0], i2393[1], i2393[2] )
  i2392.defaultSolverIterations = i2393[3]
  i2392.bounceThreshold = i2393[4]
  i2392.autoSyncTransforms = !!i2393[5]
  i2392.autoSimulation = !!i2393[6]
  var i2395 = i2393[7]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2395[i + 0]) );
  }
  i2392.collisionMatrix = i2394
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2399 = data
  i2398.enabled = !!i2399[0]
  i2398.layerId = i2399[1]
  i2398.otherLayerId = i2399[2]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'material')
  i2400.gravity = new pc.Vec2( i2401[2], i2401[3] )
  i2400.positionIterations = i2401[4]
  i2400.velocityIterations = i2401[5]
  i2400.velocityThreshold = i2401[6]
  i2400.maxLinearCorrection = i2401[7]
  i2400.maxAngularCorrection = i2401[8]
  i2400.maxTranslationSpeed = i2401[9]
  i2400.maxRotationSpeed = i2401[10]
  i2400.baumgarteScale = i2401[11]
  i2400.baumgarteTOIScale = i2401[12]
  i2400.timeToSleep = i2401[13]
  i2400.linearSleepTolerance = i2401[14]
  i2400.angularSleepTolerance = i2401[15]
  i2400.defaultContactOffset = i2401[16]
  i2400.autoSimulation = !!i2401[17]
  i2400.queriesHitTriggers = !!i2401[18]
  i2400.queriesStartInColliders = !!i2401[19]
  i2400.callbacksOnDisable = !!i2401[20]
  i2400.reuseCollisionCallbacks = !!i2401[21]
  i2400.autoSyncTransforms = !!i2401[22]
  var i2403 = i2401[23]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2403[i + 0]) );
  }
  i2400.collisionMatrix = i2402
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.layerId = i2407[1]
  i2406.otherLayerId = i2407[2]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2409 = data
  var i2411 = i2409[0]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2411[i + 0]) );
  }
  i2408.qualityLevels = i2410
  var i2413 = i2409[1]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( i2413[i + 0] );
  }
  i2408.names = i2412
  i2408.shadows = i2409[2]
  i2408.anisotropicFiltering = i2409[3]
  i2408.antiAliasing = i2409[4]
  i2408.lodBias = i2409[5]
  i2408.shadowCascades = i2409[6]
  i2408.shadowDistance = i2409[7]
  i2408.shadowmaskMode = i2409[8]
  i2408.shadowProjection = i2409[9]
  i2408.shadowResolution = i2409[10]
  i2408.softParticles = !!i2409[11]
  i2408.softVegetation = !!i2409[12]
  i2408.activeColorSpace = i2409[13]
  i2408.desiredColorSpace = i2409[14]
  i2408.masterTextureLimit = i2409[15]
  i2408.maxQueuedFrames = i2409[16]
  i2408.particleRaycastBudget = i2409[17]
  i2408.pixelLightCount = i2409[18]
  i2408.realtimeReflectionProbes = !!i2409[19]
  i2408.shadowCascade2Split = i2409[20]
  i2408.shadowCascade4Split = new pc.Vec3( i2409[21], i2409[22], i2409[23] )
  i2408.streamingMipmapsActive = !!i2409[24]
  i2408.vSyncCount = i2409[25]
  i2408.asyncUploadBufferSize = i2409[26]
  i2408.asyncUploadTimeSlice = i2409[27]
  i2408.billboardsFaceCameraPosition = !!i2409[28]
  i2408.shadowNearPlaneOffset = i2409[29]
  i2408.streamingMipmapsMemoryBudget = i2409[30]
  i2408.maximumLODLevel = i2409[31]
  i2408.streamingMipmapsAddAllCameras = !!i2409[32]
  i2408.streamingMipmapsMaxLevelReduction = i2409[33]
  i2408.streamingMipmapsRenderersPerFrame = i2409[34]
  i2408.resolutionScalingFixedDPIFactor = i2409[35]
  i2408.streamingMipmapsMaxFileIORequests = i2409[36]
  i2408.currentQualityLevel = i2409[37]
  return i2408
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[1],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[23],"51":[23],"52":[23],"53":[23],"54":[23],"55":[23],"25":[23],"56":[23],"57":[23],"58":[23],"59":[23],"60":[23],"61":[23],"62":[1],"63":[64],"65":[66],"67":[66],"26":[11],"31":[13],"68":[20],"69":[1],"70":[71],"72":[11],"73":[29,11],"74":[64],"75":[29,11],"76":[11],"77":[11],"78":[64,11],"79":[11,29],"80":[81],"82":[81],"83":[81],"84":[85],"86":[11],"87":[11],"88":[26],"17":[29,11],"89":[11],"28":[26],"90":[11],"91":[11],"92":[11],"93":[11],"94":[11],"95":[11],"96":[11],"97":[11],"98":[11],"99":[29,11],"100":[11],"101":[11],"102":[11],"103":[11],"13":[29,11],"104":[11],"105":[106],"107":[106],"108":[106],"109":[106],"110":[1],"111":[1]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","PlayableCameraController","LunaControllerFNAF","UnityEngine.AudioClip","PlayableFlowController","RagdollActor","UnityEngine.LineRenderer","UnityEngine.Transform","UnityEngine.RectTransform","UnityEngine.CanvasGroup","UnityEngine.UI.Text","UnityEngine.AudioSource","HeroSkins","UnityEngine.GameObject","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","RagdollImpact","UnityEngine.HingeJoint2D","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.Font","TextOutline","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.Purchasing.IAPButton","UnityEngine.UI.Button","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "KSDH_V02";

Deserializers.lunaInitializationTime = "10/23/2026 03:17:14";

Deserializers.lunaDaysRunning = "4.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1786";

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

Deserializers.buildID = "ae71b472-4de3-4339-9540-6b72ca7aaeac";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Purchasing","CodelessIAPStoreListener","InitializeCodelessPurchasingOnLoad"],["Unity","Services","Core","Internal","UnityServicesInitializer","EnableServicesInitializationAsync"],["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","Purchasing","Registration","IapCoreInitializeCallback","Register"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["Unity","Services","Core","Registration","CorePackageInitializer","InitializeOnLoad"],["Unity","Services","Core","Internal","TaskAsyncOperation","SetScheduler"],["Unity","Services","Core","Environments","Client","Scheduler","EngineStateHelper","Init"],["Unity","Services","Core","Environments","Client","Scheduler","ThreadHelper","Init"],["Unity","Services","Core","Editor","StatusInitializer","InitializeOnLoad"],["Ua2CoreInitializeCallback","Register"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["Unity","Services","Core","Internal","UnityServicesInitializer","CreateStaticInstance"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["Unity","Services","Core","Environments","Client","Http","JsonHelpers","RegisterTypesForAOT"]],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","Services","Core","UnityThreadUtils","CaptureUnityThreadInfo"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

