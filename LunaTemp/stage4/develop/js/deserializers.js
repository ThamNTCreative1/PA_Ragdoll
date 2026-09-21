var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.JointSpring' )
  var i1615 = data
  i1614.spring = i1615[0]
  i1614.damper = i1615[1]
  i1614.targetPosition = i1615[2]
  return i1614
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.JointMotor' )
  var i1617 = data
  i1616.m_TargetVelocity = i1617[0]
  i1616.m_Force = i1617[1]
  i1616.m_FreeSpin = i1617[2]
  return i1616
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.JointLimits' )
  var i1619 = data
  i1618.m_Min = i1619[0]
  i1618.m_Max = i1619[1]
  i1618.m_Bounciness = i1619[2]
  i1618.m_BounceMinVelocity = i1619[3]
  i1618.m_ContactDistance = i1619[4]
  i1618.minBounce = i1619[5]
  i1618.maxBounce = i1619[6]
  return i1618
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.JointDrive' )
  var i1621 = data
  i1620.m_PositionSpring = i1621[0]
  i1620.m_PositionDamper = i1621[1]
  i1620.m_MaximumForce = i1621[2]
  i1620.m_UseAcceleration = i1621[3]
  return i1620
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1623 = data
  i1622.m_Spring = i1623[0]
  i1622.m_Damper = i1623[1]
  return i1622
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1625 = data
  i1624.m_Limit = i1625[0]
  i1624.m_Bounciness = i1625[1]
  i1624.m_ContactDistance = i1625[2]
  return i1624
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1627 = data
  i1626.m_ExtremumSlip = i1627[0]
  i1626.m_ExtremumValue = i1627[1]
  i1626.m_AsymptoteSlip = i1627[2]
  i1626.m_AsymptoteValue = i1627[3]
  i1626.m_Stiffness = i1627[4]
  return i1626
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1629 = data
  i1628.m_LowerAngle = i1629[0]
  i1628.m_UpperAngle = i1629[1]
  return i1628
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1631 = data
  i1630.m_MotorSpeed = i1631[0]
  i1630.m_MaximumMotorTorque = i1631[1]
  return i1630
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1633 = data
  i1632.m_DampingRatio = i1633[0]
  i1632.m_Frequency = i1633[1]
  i1632.m_Angle = i1633[2]
  return i1632
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1635 = data
  i1634.m_LowerTranslation = i1635[0]
  i1634.m_UpperTranslation = i1635[1]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1636 = root || new pc.UnityMaterial()
  var i1637 = data
  i1636.name = i1637[0]
  request.r(i1637[1], i1637[2], 0, i1636, 'shader')
  i1636.renderQueue = i1637[3]
  i1636.enableInstancing = !!i1637[4]
  var i1639 = i1637[5]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1639[i + 0]) );
  }
  i1636.floatParameters = i1638
  var i1641 = i1637[6]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1641[i + 0]) );
  }
  i1636.colorParameters = i1640
  var i1643 = i1637[7]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1643[i + 0]) );
  }
  i1636.vectorParameters = i1642
  var i1645 = i1637[8]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1645[i + 0]) );
  }
  i1636.textureParameters = i1644
  var i1647 = i1637[9]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1647[i + 0]) );
  }
  i1636.materialFlags = i1646
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.value = i1651[1]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1655 = data
  i1654.name = i1655[0]
  i1654.value = new pc.Color(i1655[1], i1655[2], i1655[3], i1655[4])
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1659 = data
  i1658.name = i1659[0]
  i1658.value = new pc.Vec4( i1659[1], i1659[2], i1659[3], i1659[4] )
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1663 = data
  i1662.name = i1663[0]
  request.r(i1663[1], i1663[2], 0, i1662, 'value')
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.enabled = !!i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.width = i1669[1]
  i1668.height = i1669[2]
  i1668.mipmapCount = i1669[3]
  i1668.anisoLevel = i1669[4]
  i1668.filterMode = i1669[5]
  i1668.hdr = !!i1669[6]
  i1668.format = i1669[7]
  i1668.wrapMode = i1669[8]
  i1668.alphaIsTransparency = !!i1669[9]
  i1668.alphaSource = i1669[10]
  i1668.graphicsFormat = i1669[11]
  i1668.sRGBTexture = !!i1669[12]
  i1668.desiredColorSpace = i1669[13]
  i1668.wrapU = i1669[14]
  i1668.wrapV = i1669[15]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1671 = data
  i1670.position = new pc.Vec3( i1671[0], i1671[1], i1671[2] )
  i1670.scale = new pc.Vec3( i1671[3], i1671[4], i1671[5] )
  i1670.rotation = new pc.Quat(i1671[6], i1671[7], i1671[8], i1671[9])
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1673 = data
  i1672.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1673[0], i1672.main)
  i1672.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1673[1], i1672.colorBySpeed)
  i1672.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1673[2], i1672.colorOverLifetime)
  i1672.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1673[3], i1672.emission)
  i1672.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1673[4], i1672.rotationBySpeed)
  i1672.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1673[5], i1672.rotationOverLifetime)
  i1672.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1673[6], i1672.shape)
  i1672.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1673[7], i1672.sizeBySpeed)
  i1672.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1673[8], i1672.sizeOverLifetime)
  i1672.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1673[9], i1672.textureSheetAnimation)
  i1672.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1673[10], i1672.velocityOverLifetime)
  i1672.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1673[11], i1672.noise)
  i1672.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1673[12], i1672.inheritVelocity)
  i1672.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1673[13], i1672.forceOverLifetime)
  i1672.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1673[14], i1672.limitVelocityOverLifetime)
  i1672.useAutoRandomSeed = !!i1673[15]
  i1672.randomSeed = i1673[16]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1674 = root || new pc.ParticleSystemMain()
  var i1675 = data
  i1674.duration = i1675[0]
  i1674.loop = !!i1675[1]
  i1674.prewarm = !!i1675[2]
  i1674.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[3], i1674.startDelay)
  i1674.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[4], i1674.startLifetime)
  i1674.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[5], i1674.startSpeed)
  i1674.startSize3D = !!i1675[6]
  i1674.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[7], i1674.startSizeX)
  i1674.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[8], i1674.startSizeY)
  i1674.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[9], i1674.startSizeZ)
  i1674.startRotation3D = !!i1675[10]
  i1674.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[11], i1674.startRotationX)
  i1674.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[12], i1674.startRotationY)
  i1674.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[13], i1674.startRotationZ)
  i1674.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1675[14], i1674.startColor)
  i1674.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1675[15], i1674.gravityModifier)
  i1674.simulationSpace = i1675[16]
  request.r(i1675[17], i1675[18], 0, i1674, 'customSimulationSpace')
  i1674.simulationSpeed = i1675[19]
  i1674.useUnscaledTime = !!i1675[20]
  i1674.scalingMode = i1675[21]
  i1674.playOnAwake = !!i1675[22]
  i1674.maxParticles = i1675[23]
  i1674.emitterVelocityMode = i1675[24]
  i1674.stopAction = i1675[25]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1676 = root || new pc.MinMaxCurve()
  var i1677 = data
  i1676.mode = i1677[0]
  i1676.curveMin = new pc.AnimationCurve( { keys_flow: i1677[1] } )
  i1676.curveMax = new pc.AnimationCurve( { keys_flow: i1677[2] } )
  i1676.curveMultiplier = i1677[3]
  i1676.constantMin = i1677[4]
  i1676.constantMax = i1677[5]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1678 = root || new pc.MinMaxGradient()
  var i1679 = data
  i1678.mode = i1679[0]
  i1678.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1679[1], i1678.gradientMin)
  i1678.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1679[2], i1678.gradientMax)
  i1678.colorMin = new pc.Color(i1679[3], i1679[4], i1679[5], i1679[6])
  i1678.colorMax = new pc.Color(i1679[7], i1679[8], i1679[9], i1679[10])
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1681 = data
  i1680.mode = i1681[0]
  var i1683 = i1681[1]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1683[i + 0]) );
  }
  i1680.colorKeys = i1682
  var i1685 = i1681[2]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1685[i + 0]) );
  }
  i1680.alphaKeys = i1684
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1686 = root || new pc.ParticleSystemColorBySpeed()
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1687[1], i1686.color)
  i1686.range = new pc.Vec2( i1687[2], i1687[3] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1691 = data
  i1690.color = new pc.Color(i1691[0], i1691[1], i1691[2], i1691[3])
  i1690.time = i1691[4]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1695 = data
  i1694.alpha = i1695[0]
  i1694.time = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1696 = root || new pc.ParticleSystemColorOverLifetime()
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1697[1], i1696.color)
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1698 = root || new pc.ParticleSystemEmitter()
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[1], i1698.rateOverTime)
  i1698.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[2], i1698.rateOverDistance)
  var i1701 = i1699[3]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1701[i + 0]) );
  }
  i1698.bursts = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemBurst()
  var i1705 = data
  i1704.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[0], i1704.count)
  i1704.cycleCount = i1705[1]
  i1704.minCount = i1705[2]
  i1704.maxCount = i1705[3]
  i1704.repeatInterval = i1705[4]
  i1704.time = i1705[5]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemRotationBySpeed()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[1], i1706.x)
  i1706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[2], i1706.y)
  i1706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[3], i1706.z)
  i1706.separateAxes = !!i1707[4]
  i1706.range = new pc.Vec2( i1707[5], i1707[6] )
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1708 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1709 = data
  i1708.enabled = !!i1709[0]
  i1708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[1], i1708.x)
  i1708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[2], i1708.y)
  i1708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1709[3], i1708.z)
  i1708.separateAxes = !!i1709[4]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1710 = root || new pc.ParticleSystemShape()
  var i1711 = data
  i1710.enabled = !!i1711[0]
  i1710.shapeType = i1711[1]
  i1710.randomDirectionAmount = i1711[2]
  i1710.sphericalDirectionAmount = i1711[3]
  i1710.randomPositionAmount = i1711[4]
  i1710.alignToDirection = !!i1711[5]
  i1710.radius = i1711[6]
  i1710.radiusMode = i1711[7]
  i1710.radiusSpread = i1711[8]
  i1710.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[9], i1710.radiusSpeed)
  i1710.radiusThickness = i1711[10]
  i1710.angle = i1711[11]
  i1710.length = i1711[12]
  i1710.boxThickness = new pc.Vec3( i1711[13], i1711[14], i1711[15] )
  i1710.meshShapeType = i1711[16]
  request.r(i1711[17], i1711[18], 0, i1710, 'mesh')
  request.r(i1711[19], i1711[20], 0, i1710, 'meshRenderer')
  request.r(i1711[21], i1711[22], 0, i1710, 'skinnedMeshRenderer')
  i1710.useMeshMaterialIndex = !!i1711[23]
  i1710.meshMaterialIndex = i1711[24]
  i1710.useMeshColors = !!i1711[25]
  i1710.normalOffset = i1711[26]
  i1710.arc = i1711[27]
  i1710.arcMode = i1711[28]
  i1710.arcSpread = i1711[29]
  i1710.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1711[30], i1710.arcSpeed)
  i1710.donutRadius = i1711[31]
  i1710.position = new pc.Vec3( i1711[32], i1711[33], i1711[34] )
  i1710.rotation = new pc.Vec3( i1711[35], i1711[36], i1711[37] )
  i1710.scale = new pc.Vec3( i1711[38], i1711[39], i1711[40] )
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1712 = root || new pc.ParticleSystemSizeBySpeed()
  var i1713 = data
  i1712.enabled = !!i1713[0]
  i1712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[1], i1712.x)
  i1712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[2], i1712.y)
  i1712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[3], i1712.z)
  i1712.separateAxes = !!i1713[4]
  i1712.range = new pc.Vec2( i1713[5], i1713[6] )
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1714 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[1], i1714.x)
  i1714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[2], i1714.y)
  i1714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[3], i1714.z)
  i1714.separateAxes = !!i1715[4]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.mode = i1717[1]
  i1716.animation = i1717[2]
  i1716.numTilesX = i1717[3]
  i1716.numTilesY = i1717[4]
  i1716.useRandomRow = !!i1717[5]
  i1716.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[6], i1716.frameOverTime)
  i1716.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[7], i1716.startFrame)
  i1716.cycleCount = i1717[8]
  i1716.rowIndex = i1717[9]
  i1716.flipU = i1717[10]
  i1716.flipV = i1717[11]
  i1716.spriteCount = i1717[12]
  var i1719 = i1717[13]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.sprites = i1718
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1722 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[1], i1722.x)
  i1722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[2], i1722.y)
  i1722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[3], i1722.z)
  i1722.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[4], i1722.radial)
  i1722.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[5], i1722.speedModifier)
  i1722.space = i1723[6]
  i1722.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[7], i1722.orbitalX)
  i1722.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[8], i1722.orbitalY)
  i1722.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[9], i1722.orbitalZ)
  i1722.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[10], i1722.orbitalOffsetX)
  i1722.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[11], i1722.orbitalOffsetY)
  i1722.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[12], i1722.orbitalOffsetZ)
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemNoise()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.separateAxes = !!i1725[1]
  i1724.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[2], i1724.strengthX)
  i1724.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[3], i1724.strengthY)
  i1724.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[4], i1724.strengthZ)
  i1724.frequency = i1725[5]
  i1724.damping = !!i1725[6]
  i1724.octaveCount = i1725[7]
  i1724.octaveMultiplier = i1725[8]
  i1724.octaveScale = i1725[9]
  i1724.quality = i1725[10]
  i1724.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[11], i1724.scrollSpeed)
  i1724.scrollSpeedMultiplier = i1725[12]
  i1724.remapEnabled = !!i1725[13]
  i1724.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[14], i1724.remapX)
  i1724.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[15], i1724.remapY)
  i1724.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[16], i1724.remapZ)
  i1724.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[17], i1724.positionAmount)
  i1724.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[18], i1724.rotationAmount)
  i1724.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[19], i1724.sizeAmount)
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1726 = root || new pc.ParticleSystemInheritVelocity()
  var i1727 = data
  i1726.enabled = !!i1727[0]
  i1726.mode = i1727[1]
  i1726.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1727[2], i1726.curve)
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1728 = root || new pc.ParticleSystemForceOverLifetime()
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[1], i1728.x)
  i1728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[2], i1728.y)
  i1728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1729[3], i1728.z)
  i1728.space = i1729[4]
  i1728.randomized = !!i1729[5]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1730 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[1], i1730.limit)
  i1730.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[2], i1730.limitX)
  i1730.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[3], i1730.limitY)
  i1730.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[4], i1730.limitZ)
  i1730.dampen = i1731[5]
  i1730.separateAxes = !!i1731[6]
  i1730.space = i1731[7]
  i1730.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[8], i1730.drag)
  i1730.multiplyDragByParticleSize = !!i1731[9]
  i1730.multiplyDragByParticleVelocity = !!i1731[10]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'mesh')
  i1732.meshCount = i1733[2]
  i1732.activeVertexStreamsCount = i1733[3]
  i1732.alignment = i1733[4]
  i1732.renderMode = i1733[5]
  i1732.sortMode = i1733[6]
  i1732.lengthScale = i1733[7]
  i1732.velocityScale = i1733[8]
  i1732.cameraVelocityScale = i1733[9]
  i1732.normalDirection = i1733[10]
  i1732.sortingFudge = i1733[11]
  i1732.minParticleSize = i1733[12]
  i1732.maxParticleSize = i1733[13]
  i1732.pivot = new pc.Vec3( i1733[14], i1733[15], i1733[16] )
  request.r(i1733[17], i1733[18], 0, i1732, 'trailMaterial')
  i1732.applyActiveColorSpace = !!i1733[19]
  i1732.enabled = !!i1733[20]
  request.r(i1733[21], i1733[22], 0, i1732, 'sharedMaterial')
  var i1735 = i1733[23]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1732.sharedMaterials = i1734
  i1732.receiveShadows = !!i1733[24]
  i1732.shadowCastingMode = i1733[25]
  i1732.sortingLayerID = i1733[26]
  i1732.sortingOrder = i1733[27]
  i1732.lightmapIndex = i1733[28]
  i1732.lightmapSceneIndex = i1733[29]
  i1732.lightmapScaleOffset = new pc.Vec4( i1733[30], i1733[31], i1733[32], i1733[33] )
  i1732.lightProbeUsage = i1733[34]
  i1732.reflectionProbeUsage = i1733[35]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.tagId = i1739[1]
  i1738.enabled = !!i1739[2]
  i1738.isStatic = !!i1739[3]
  i1738.layer = i1739[4]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.index = i1741[1]
  i1740.startup = !!i1741[2]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1743 = data
  i1742.aspect = i1743[0]
  i1742.orthographic = !!i1743[1]
  i1742.orthographicSize = i1743[2]
  i1742.backgroundColor = new pc.Color(i1743[3], i1743[4], i1743[5], i1743[6])
  i1742.nearClipPlane = i1743[7]
  i1742.farClipPlane = i1743[8]
  i1742.fieldOfView = i1743[9]
  i1742.depth = i1743[10]
  i1742.clearFlags = i1743[11]
  i1742.cullingMask = i1743[12]
  i1742.rect = i1743[13]
  request.r(i1743[14], i1743[15], 0, i1742, 'targetTexture')
  i1742.usePhysicalProperties = !!i1743[16]
  i1742.focalLength = i1743[17]
  i1742.sensorSize = new pc.Vec2( i1743[18], i1743[19] )
  i1742.lensShift = new pc.Vec2( i1743[20], i1743[21] )
  i1742.gateFit = i1743[22]
  i1742.commandBufferCount = i1743[23]
  i1742.cameraType = i1743[24]
  i1742.enabled = !!i1743[25]
  return i1742
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'm_FirstSelected')
  i1744.m_sendNavigationEvents = !!i1745[2]
  i1744.m_DragThreshold = i1745[3]
  return i1744
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1747 = data
  i1746.m_HorizontalAxis = i1747[0]
  i1746.m_VerticalAxis = i1747[1]
  i1746.m_SubmitButton = i1747[2]
  i1746.m_CancelButton = i1747[3]
  i1746.m_InputActionsPerSecond = i1747[4]
  i1746.m_RepeatDelay = i1747[5]
  i1746.m_ForceModuleActive = !!i1747[6]
  i1746.m_SendPointerHoverToParent = !!i1747[7]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1749 = data
  i1748.pivot = new pc.Vec2( i1749[0], i1749[1] )
  i1748.anchorMin = new pc.Vec2( i1749[2], i1749[3] )
  i1748.anchorMax = new pc.Vec2( i1749[4], i1749[5] )
  i1748.sizeDelta = new pc.Vec2( i1749[6], i1749[7] )
  i1748.anchoredPosition3D = new pc.Vec3( i1749[8], i1749[9], i1749[10] )
  i1748.rotation = new pc.Quat(i1749[11], i1749[12], i1749[13], i1749[14])
  i1748.scale = new pc.Vec3( i1749[15], i1749[16], i1749[17] )
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1751 = data
  i1750.planeDistance = i1751[0]
  i1750.referencePixelsPerUnit = i1751[1]
  i1750.isFallbackOverlay = !!i1751[2]
  i1750.renderMode = i1751[3]
  i1750.renderOrder = i1751[4]
  i1750.sortingLayerName = i1751[5]
  i1750.sortingOrder = i1751[6]
  i1750.scaleFactor = i1751[7]
  request.r(i1751[8], i1751[9], 0, i1750, 'worldCamera')
  i1750.overrideSorting = !!i1751[10]
  i1750.pixelPerfect = !!i1751[11]
  i1750.targetDisplay = i1751[12]
  i1750.overridePixelPerfect = !!i1751[13]
  i1750.enabled = !!i1751[14]
  return i1750
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1753 = data
  i1752.m_UiScaleMode = i1753[0]
  i1752.m_ReferencePixelsPerUnit = i1753[1]
  i1752.m_ScaleFactor = i1753[2]
  i1752.m_ReferenceResolution = new pc.Vec2( i1753[3], i1753[4] )
  i1752.m_ScreenMatchMode = i1753[5]
  i1752.m_MatchWidthOrHeight = i1753[6]
  i1752.m_PhysicalUnit = i1753[7]
  i1752.m_FallbackScreenDPI = i1753[8]
  i1752.m_DefaultSpriteDPI = i1753[9]
  i1752.m_DynamicPixelsPerUnit = i1753[10]
  i1752.m_PresetInfoIsWorld = !!i1753[11]
  return i1752
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1755 = data
  i1754.m_IgnoreReversedGraphics = !!i1755[0]
  i1754.m_BlockingObjects = i1755[1]
  i1754.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1755[2] )
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1757 = data
  i1756.cullTransparentMesh = !!i1757[0]
  return i1756
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1759 = data
  i1758.m_AspectMode = i1759[0]
  i1758.m_AspectRatio = i1759[1]
  return i1758
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'm_Texture')
  i1760.m_UVRect = UnityEngine.Rect.MinMaxRect(i1761[2], i1761[3], i1761[4], i1761[5])
  request.r(i1761[6], i1761[7], 0, i1760, 'm_Material')
  i1760.m_Maskable = !!i1761[8]
  i1760.m_Color = new pc.Color(i1761[9], i1761[10], i1761[11], i1761[12])
  i1760.m_RaycastTarget = !!i1761[13]
  i1760.m_RaycastPadding = new pc.Vec4( i1761[14], i1761[15], i1761[16], i1761[17] )
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1763 = data
  i1762.sortingLayerIndex = i1763[0]
  i1762.sortingOrder = i1763[1]
  i1762.sortingLayerName = i1763[2]
  i1762.enabled = !!i1763[3]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1765 = data
  i1764.bodyType = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'material')
  i1764.simulated = !!i1765[3]
  i1764.useAutoMass = !!i1765[4]
  i1764.mass = i1765[5]
  i1764.drag = i1765[6]
  i1764.angularDrag = i1765[7]
  i1764.gravityScale = i1765[8]
  i1764.collisionDetectionMode = i1765[9]
  i1764.sleepMode = i1765[10]
  i1764.constraints = i1765[11]
  return i1764
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1766 = root || request.c( 'MonsterController' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('BodySprite')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('BodySprite', i1769[i + 0]));
  }
  i1766.body = i1768
  request.r(i1767[1], i1767[2], 0, i1766, 'joint')
  request.r(i1767[3], i1767[4], 0, i1766, 'rb')
  request.r(i1767[5], i1767[6], 0, i1766, 'deadSFX')
  i1766.force = new pc.Vec2( i1767[7], i1767[8] )
  return i1766
}

Deserializers["BodySprite"] = function (request, data, root) {
  var i1772 = root || request.c( 'BodySprite' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'Renderer')
  request.r(i1773[2], i1773[3], 0, i1772, 'ZombieSprite')
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1775 = data
  i1774.color = new pc.Color(i1775[0], i1775[1], i1775[2], i1775[3])
  request.r(i1775[4], i1775[5], 0, i1774, 'sprite')
  i1774.flipX = !!i1775[6]
  i1774.flipY = !!i1775[7]
  i1774.drawMode = i1775[8]
  i1774.size = new pc.Vec2( i1775[9], i1775[10] )
  i1774.tileMode = i1775[11]
  i1774.adaptiveModeThreshold = i1775[12]
  i1774.maskInteraction = i1775[13]
  i1774.spriteSortPoint = i1775[14]
  i1774.enabled = !!i1775[15]
  request.r(i1775[16], i1775[17], 0, i1774, 'sharedMaterial')
  var i1777 = i1775[18]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1774.sharedMaterials = i1776
  i1774.receiveShadows = !!i1775[19]
  i1774.shadowCastingMode = i1775[20]
  i1774.sortingLayerID = i1775[21]
  i1774.sortingOrder = i1775[22]
  i1774.lightmapIndex = i1775[23]
  i1774.lightmapSceneIndex = i1775[24]
  i1774.lightmapScaleOffset = new pc.Vec4( i1775[25], i1775[26], i1775[27], i1775[28] )
  i1774.lightProbeUsage = i1775[29]
  i1774.reflectionProbeUsage = i1775[30]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1779 = data
  i1778.usedByComposite = !!i1779[0]
  i1778.autoTiling = !!i1779[1]
  i1778.size = new pc.Vec2( i1779[2], i1779[3] )
  i1778.edgeRadius = i1779[4]
  i1778.enabled = !!i1779[5]
  i1778.isTrigger = !!i1779[6]
  i1778.usedByEffector = !!i1779[7]
  i1778.density = i1779[8]
  i1778.offset = new pc.Vec2( i1779[9], i1779[10] )
  request.r(i1779[11], i1779[12], 0, i1778, 'material')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1781 = data
  i1780.useLimits = !!i1781[0]
  i1780.limits = request.d('UnityEngine.JointAngleLimits2D', i1781[1], i1780.limits)
  i1780.useMotor = !!i1781[2]
  i1780.motor = request.d('UnityEngine.JointMotor2D', i1781[3], i1780.motor)
  i1780.anchor = new pc.Vec2( i1781[4], i1781[5] )
  i1780.connectedAnchor = new pc.Vec2( i1781[6], i1781[7] )
  i1780.autoConfigureConnectedAnchor = !!i1781[8]
  request.r(i1781[9], i1781[10], 0, i1780, 'connectedBody')
  i1780.breakForce = i1781[11]
  i1780.breakTorque = i1781[12]
  i1780.enableCollision = !!i1781[13]
  i1780.enabled = !!i1781[14]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1783 = data
  i1782.autoConfigureTarget = !!i1783[0]
  i1782.target = new pc.Vec2( i1783[1], i1783[2] )
  i1782.anchor = new pc.Vec2( i1783[3], i1783[4] )
  i1782.maxForce = i1783[5]
  i1782.dampingRatio = i1783[6]
  i1782.frequency = i1783[7]
  request.r(i1783[8], i1783[9], 0, i1782, 'connectedBody')
  i1782.breakForce = i1783[10]
  i1782.breakTorque = i1783[11]
  i1782.enableCollision = !!i1783[12]
  i1782.enabled = !!i1783[13]
  return i1782
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1784 = root || request.c( 'BonkController' )
  var i1785 = data
  i1784.target = i1785[0]
  i1784.maxBonk = i1785[1]
  request.r(i1785[2], i1785[3], 0, i1784, 'hitSound')
  return i1784
}

Deserializers["ActiveOnActive"] = function (request, data, root) {
  var i1786 = root || request.c( 'ActiveOnActive' )
  var i1787 = data
  var i1789 = i1787[0]
  var i1788 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1789.length; i += 2) {
  request.r(i1789[i + 0], i1789[i + 1], 1, i1788, '')
  }
  i1786.active = i1788
  return i1786
}

Deserializers["DropPiece"] = function (request, data, root) {
  var i1792 = root || request.c( 'DropPiece' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'joint')
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'animatorController')
  request.r(i1795[2], i1795[3], 0, i1794, 'avatar')
  i1794.updateMode = i1795[4]
  i1794.hasTransformHierarchy = !!i1795[5]
  i1794.applyRootMotion = !!i1795[6]
  var i1797 = i1795[7]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 2, i1796, '')
  }
  i1794.humanBones = i1796
  i1794.enabled = !!i1795[8]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'clip')
  request.r(i1801[2], i1801[3], 0, i1800, 'outputAudioMixerGroup')
  i1800.playOnAwake = !!i1801[4]
  i1800.loop = !!i1801[5]
  i1800.time = i1801[6]
  i1800.volume = i1801[7]
  i1800.pitch = i1801[8]
  i1800.enabled = !!i1801[9]
  return i1800
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.UI.Button' )
  var i1803 = data
  i1802.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1803[0], i1802.m_OnClick)
  i1802.m_Navigation = request.d('UnityEngine.UI.Navigation', i1803[1], i1802.m_Navigation)
  i1802.m_Transition = i1803[2]
  i1802.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1803[3], i1802.m_Colors)
  i1802.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1803[4], i1802.m_SpriteState)
  i1802.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1803[5], i1802.m_AnimationTriggers)
  i1802.m_Interactable = !!i1803[6]
  request.r(i1803[7], i1803[8], 0, i1802, 'm_TargetGraphic')
  return i1802
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1805 = data
  i1804.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1805[0], i1804.m_PersistentCalls)
  return i1804
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.add(request.d('UnityEngine.Events.PersistentCall', i1809[i + 0]));
  }
  i1806.m_Calls = i1808
  return i1806
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'm_Target')
  i1812.m_TargetAssemblyTypeName = i1813[2]
  i1812.m_MethodName = i1813[3]
  i1812.m_Mode = i1813[4]
  i1812.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1813[5], i1812.m_Arguments)
  i1812.m_CallState = i1813[6]
  return i1812
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1815 = data
  i1814.m_Mode = i1815[0]
  i1814.m_WrapAround = !!i1815[1]
  request.r(i1815[2], i1815[3], 0, i1814, 'm_SelectOnUp')
  request.r(i1815[4], i1815[5], 0, i1814, 'm_SelectOnDown')
  request.r(i1815[6], i1815[7], 0, i1814, 'm_SelectOnLeft')
  request.r(i1815[8], i1815[9], 0, i1814, 'm_SelectOnRight')
  return i1814
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1817 = data
  i1816.m_NormalColor = new pc.Color(i1817[0], i1817[1], i1817[2], i1817[3])
  i1816.m_HighlightedColor = new pc.Color(i1817[4], i1817[5], i1817[6], i1817[7])
  i1816.m_PressedColor = new pc.Color(i1817[8], i1817[9], i1817[10], i1817[11])
  i1816.m_SelectedColor = new pc.Color(i1817[12], i1817[13], i1817[14], i1817[15])
  i1816.m_DisabledColor = new pc.Color(i1817[16], i1817[17], i1817[18], i1817[19])
  i1816.m_ColorMultiplier = i1817[20]
  i1816.m_FadeDuration = i1817[21]
  return i1816
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'm_HighlightedSprite')
  request.r(i1819[2], i1819[3], 0, i1818, 'm_PressedSprite')
  request.r(i1819[4], i1819[5], 0, i1818, 'm_SelectedSprite')
  request.r(i1819[6], i1819[7], 0, i1818, 'm_DisabledSprite')
  return i1818
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1821 = data
  i1820.m_NormalTrigger = i1821[0]
  i1820.m_HighlightedTrigger = i1821[1]
  i1820.m_PressedTrigger = i1821[2]
  i1820.m_SelectedTrigger = i1821[3]
  i1820.m_DisabledTrigger = i1821[4]
  return i1820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.UI.Image' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'm_Sprite')
  i1822.m_Type = i1823[2]
  i1822.m_PreserveAspect = !!i1823[3]
  i1822.m_FillCenter = !!i1823[4]
  i1822.m_FillMethod = i1823[5]
  i1822.m_FillAmount = i1823[6]
  i1822.m_FillClockwise = !!i1823[7]
  i1822.m_FillOrigin = i1823[8]
  i1822.m_UseSpriteMesh = !!i1823[9]
  i1822.m_PixelsPerUnitMultiplier = i1823[10]
  request.r(i1823[11], i1823[12], 0, i1822, 'm_Material')
  i1822.m_Maskable = !!i1823[13]
  i1822.m_Color = new pc.Color(i1823[14], i1823[15], i1823[16], i1823[17])
  i1822.m_RaycastTarget = !!i1823[18]
  i1822.m_RaycastPadding = new pc.Vec4( i1823[19], i1823[20], i1823[21], i1823[22] )
  return i1822
}

Deserializers["ActiveOnClick"] = function (request, data, root) {
  var i1824 = root || request.c( 'ActiveOnClick' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'button')
  request.r(i1825[2], i1825[3], 0, i1824, 'clickSound')
  var i1827 = i1825[4]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 1, i1826, '')
  }
  i1824.active = i1826
  return i1824
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1828 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1829 = data
  i1828.targetIsSelf = !!i1829[0]
  request.r(i1829[1], i1829[2], 0, i1828, 'targetGO')
  i1828.tweenTargetIsTargetGO = !!i1829[3]
  i1828.delay = i1829[4]
  i1828.duration = i1829[5]
  i1828.easeType = i1829[6]
  i1828.easeCurve = new pc.AnimationCurve( { keys_flow: i1829[7] } )
  i1828.loopType = i1829[8]
  i1828.loops = i1829[9]
  i1828.id = i1829[10]
  i1828.isRelative = !!i1829[11]
  i1828.isFrom = !!i1829[12]
  i1828.isIndependentUpdate = !!i1829[13]
  i1828.autoKill = !!i1829[14]
  i1828.autoGenerate = !!i1829[15]
  i1828.isActive = !!i1829[16]
  i1828.isValid = !!i1829[17]
  request.r(i1829[18], i1829[19], 0, i1828, 'target')
  i1828.animationType = i1829[20]
  i1828.targetType = i1829[21]
  i1828.forcedTargetType = i1829[22]
  i1828.autoPlay = !!i1829[23]
  i1828.useTargetAsV3 = !!i1829[24]
  i1828.endValueFloat = i1829[25]
  i1828.endValueV3 = new pc.Vec3( i1829[26], i1829[27], i1829[28] )
  i1828.endValueV2 = new pc.Vec2( i1829[29], i1829[30] )
  i1828.endValueColor = new pc.Color(i1829[31], i1829[32], i1829[33], i1829[34])
  i1828.endValueString = i1829[35]
  i1828.endValueRect = UnityEngine.Rect.MinMaxRect(i1829[36], i1829[37], i1829[38], i1829[39])
  request.r(i1829[40], i1829[41], 0, i1828, 'endValueTransform')
  i1828.optionalBool0 = !!i1829[42]
  i1828.optionalBool1 = !!i1829[43]
  i1828.optionalFloat0 = i1829[44]
  i1828.optionalInt0 = i1829[45]
  i1828.optionalRotationMode = i1829[46]
  i1828.optionalScrambleMode = i1829[47]
  i1828.optionalShakeRandomnessMode = i1829[48]
  i1828.optionalString = i1829[49]
  i1828.updateType = i1829[50]
  i1828.isSpeedBased = !!i1829[51]
  i1828.hasOnStart = !!i1829[52]
  i1828.hasOnPlay = !!i1829[53]
  i1828.hasOnUpdate = !!i1829[54]
  i1828.hasOnStepComplete = !!i1829[55]
  i1828.hasOnComplete = !!i1829[56]
  i1828.hasOnTweenCreated = !!i1829[57]
  i1828.hasOnRewind = !!i1829[58]
  i1828.onStart = request.d('UnityEngine.Events.UnityEvent', i1829[59], i1828.onStart)
  i1828.onPlay = request.d('UnityEngine.Events.UnityEvent', i1829[60], i1828.onPlay)
  i1828.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1829[61], i1828.onUpdate)
  i1828.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1829[62], i1828.onStepComplete)
  i1828.onComplete = request.d('UnityEngine.Events.UnityEvent', i1829[63], i1828.onComplete)
  i1828.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1829[64], i1828.onTweenCreated)
  i1828.onRewind = request.d('UnityEngine.Events.UnityEvent', i1829[65], i1828.onRewind)
  return i1828
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1831 = data
  i1830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1831[0], i1830.m_PersistentCalls)
  return i1830
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.UI.Text' )
  var i1833 = data
  i1832.m_FontData = request.d('UnityEngine.UI.FontData', i1833[0], i1832.m_FontData)
  i1832.m_Text = i1833[1]
  request.r(i1833[2], i1833[3], 0, i1832, 'm_Material')
  i1832.m_Maskable = !!i1833[4]
  i1832.m_Color = new pc.Color(i1833[5], i1833[6], i1833[7], i1833[8])
  i1832.m_RaycastTarget = !!i1833[9]
  i1832.m_RaycastPadding = new pc.Vec4( i1833[10], i1833[11], i1833[12], i1833[13] )
  return i1832
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'm_Font')
  i1834.m_FontSize = i1835[2]
  i1834.m_FontStyle = i1835[3]
  i1834.m_BestFit = !!i1835[4]
  i1834.m_MinSize = i1835[5]
  i1834.m_MaxSize = i1835[6]
  i1834.m_Alignment = i1835[7]
  i1834.m_AlignByGeometry = !!i1835[8]
  i1834.m_RichText = !!i1835[9]
  i1834.m_HorizontalOverflow = i1835[10]
  i1834.m_VerticalOverflow = i1835[11]
  i1834.m_LineSpacing = i1835[12]
  return i1834
}

Deserializers["GameController"] = function (request, data, root) {
  var i1836 = root || request.c( 'GameController' )
  var i1837 = data
  i1836.OnNextLevel = request.d('System.Action', i1837[0], i1836.OnNextLevel)
  var i1839 = i1837[1]
  var i1838 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 1, i1838, '')
  }
  i1836.monsters = i1838
  var i1841 = i1837[2]
  var i1840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 1, i1840, '')
  }
  i1836.levels = i1840
  request.r(i1837[3], i1837[4], 0, i1836, 'target')
  i1836.index = i1837[5]
  i1836.end = !!i1837[6]
  request.r(i1837[7], i1837[8], 0, i1836, 'endUI')
  return i1836
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1842 = root || request.c( 'System.Action' )
  var i1843 = data
  return i1842
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1846 = root || request.c( 'TargetController' )
  var i1847 = data
  var i1849 = i1847[0]
  var i1848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 1, i1848, '')
  }
  i1846.listTarget = i1848
  request.r(i1847[1], i1847[2], 0, i1846, 'currentTarget')
  i1846.index = i1847[3]
  request.r(i1847[4], i1847[5], 0, i1846, 'tut')
  request.r(i1847[6], i1847[7], 0, i1846, 'tut2')
  request.r(i1847[8], i1847[9], 0, i1846, 'tut3')
  return i1846
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1852 = root || request.c( 'LunaController' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'BGTexture')
  i1852.UseTime = !!i1853[2]
  i1852.TimePlay = i1853[3]
  i1852.NumberLevel = i1853[4]
  request.r(i1853[5], i1853[6], 0, i1852, 'BGImage')
  var i1855 = i1853[7]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1855.length; i += 2) {
  request.r(i1855[i + 0], i1855[i + 1], 1, i1854, '')
  }
  i1852.CTA = i1854
  request.r(i1853[8], i1853[9], 0, i1852, 'endCard')
  return i1852
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1858 = root || request.c( 'LayoutController' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'mainCamera')
  request.r(i1859[2], i1859[3], 0, i1858, 'optionButton')
  return i1858
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1860 = root || request.c( 'AudioController' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'BGM')
  request.r(i1861[2], i1861[3], 0, i1860, 'musicSource')
  request.r(i1861[4], i1861[5], 0, i1860, 'pool')
  return i1860
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1862 = root || request.c( 'VFXController' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'bloodPrefab')
  request.r(i1863[2], i1863[3], 0, i1862, 'pool')
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1865 = data
  i1864.ambientIntensity = i1865[0]
  i1864.reflectionIntensity = i1865[1]
  i1864.ambientMode = i1865[2]
  i1864.ambientLight = new pc.Color(i1865[3], i1865[4], i1865[5], i1865[6])
  i1864.ambientSkyColor = new pc.Color(i1865[7], i1865[8], i1865[9], i1865[10])
  i1864.ambientGroundColor = new pc.Color(i1865[11], i1865[12], i1865[13], i1865[14])
  i1864.ambientEquatorColor = new pc.Color(i1865[15], i1865[16], i1865[17], i1865[18])
  i1864.fogColor = new pc.Color(i1865[19], i1865[20], i1865[21], i1865[22])
  i1864.fogEndDistance = i1865[23]
  i1864.fogStartDistance = i1865[24]
  i1864.fogDensity = i1865[25]
  i1864.fog = !!i1865[26]
  request.r(i1865[27], i1865[28], 0, i1864, 'skybox')
  i1864.fogMode = i1865[29]
  var i1867 = i1865[30]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1867[i + 0]) );
  }
  i1864.lightmaps = i1866
  i1864.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1865[31], i1864.lightProbes)
  i1864.lightmapsMode = i1865[32]
  i1864.mixedBakeMode = i1865[33]
  i1864.environmentLightingMode = i1865[34]
  i1864.ambientProbe = new pc.SphericalHarmonicsL2(i1865[35])
  request.r(i1865[36], i1865[37], 0, i1864, 'customReflection')
  request.r(i1865[38], i1865[39], 0, i1864, 'defaultReflection')
  i1864.defaultReflectionMode = i1865[40]
  i1864.defaultReflectionResolution = i1865[41]
  i1864.sunLightObjectId = i1865[42]
  i1864.pixelLightCount = i1865[43]
  i1864.defaultReflectionHDR = !!i1865[44]
  i1864.hasLightDataAsset = !!i1865[45]
  i1864.hasManualGenerate = !!i1865[46]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'lightmapColor')
  request.r(i1871[2], i1871[3], 0, i1870, 'lightmapDirection')
  request.r(i1871[4], i1871[5], 0, i1870, 'shadowMask')
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1872 = root || new UnityEngine.LightProbes()
  var i1873 = data
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1881 = data
  var i1883 = i1881[0]
  var i1882 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1883[i + 0]));
  }
  i1880.ShaderCompilationErrors = i1882
  i1880.name = i1881[1]
  i1880.guid = i1881[2]
  var i1885 = i1881[3]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( i1885[i + 0] );
  }
  i1880.shaderDefinedKeywords = i1884
  var i1887 = i1881[4]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1887[i + 0]) );
  }
  i1880.passes = i1886
  var i1889 = i1881[5]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1889[i + 0]) );
  }
  i1880.usePasses = i1888
  var i1891 = i1881[6]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1891[i + 0]) );
  }
  i1880.defaultParameterValues = i1890
  request.r(i1881[7], i1881[8], 0, i1880, 'unityFallbackShader')
  i1880.readDepth = !!i1881[9]
  i1880.hasDepthOnlyPass = !!i1881[10]
  i1880.isCreatedByShaderGraph = !!i1881[11]
  i1880.disableBatching = !!i1881[12]
  i1880.compiled = !!i1881[13]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1895 = data
  i1894.shaderName = i1895[0]
  i1894.errorMessage = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1900 = root || new pc.UnityShaderPass()
  var i1901 = data
  i1900.id = i1901[0]
  i1900.subShaderIndex = i1901[1]
  i1900.name = i1901[2]
  i1900.passType = i1901[3]
  i1900.grabPassTextureName = i1901[4]
  i1900.usePass = !!i1901[5]
  i1900.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[6], i1900.zTest)
  i1900.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[7], i1900.zWrite)
  i1900.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[8], i1900.culling)
  i1900.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1901[9], i1900.blending)
  i1900.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1901[10], i1900.alphaBlending)
  i1900.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[11], i1900.colorWriteMask)
  i1900.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[12], i1900.offsetUnits)
  i1900.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[13], i1900.offsetFactor)
  i1900.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[14], i1900.stencilRef)
  i1900.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[15], i1900.stencilReadMask)
  i1900.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[16], i1900.stencilWriteMask)
  i1900.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[17], i1900.stencilOp)
  i1900.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[18], i1900.stencilOpFront)
  i1900.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[19], i1900.stencilOpBack)
  var i1903 = i1901[20]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1903[i + 0]) );
  }
  i1900.tags = i1902
  var i1905 = i1901[21]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( i1905[i + 0] );
  }
  i1900.passDefinedKeywords = i1904
  var i1907 = i1901[22]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1907[i + 0]) );
  }
  i1900.passDefinedKeywordGroups = i1906
  var i1909 = i1901[23]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1909[i + 0]) );
  }
  i1900.variants = i1908
  var i1911 = i1901[24]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1911[i + 0]) );
  }
  i1900.excludedVariants = i1910
  i1900.hasDepthReader = !!i1901[25]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1913 = data
  i1912.val = i1913[0]
  i1912.name = i1913[1]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1915 = data
  i1914.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[0], i1914.src)
  i1914.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[1], i1914.dst)
  i1914.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[2], i1914.op)
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1917 = data
  i1916.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[0], i1916.pass)
  i1916.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[1], i1916.fail)
  i1916.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[2], i1916.zFail)
  i1916.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[3], i1916.comp)
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.value = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1924.keywords = i1926
  i1924.hasDiscard = !!i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1931 = data
  i1930.passId = i1931[0]
  i1930.subShaderIndex = i1931[1]
  var i1933 = i1931[2]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1930.keywords = i1932
  i1930.vertexProgram = i1931[3]
  i1930.fragmentProgram = i1931[4]
  i1930.exportedForWebGl2 = !!i1931[5]
  i1930.readDepth = !!i1931[6]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'shader')
  i1936.pass = i1937[2]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.type = i1941[1]
  i1940.value = new pc.Vec4( i1941[2], i1941[3], i1941[4], i1941[5] )
  i1940.textureValue = i1941[6]
  i1940.shaderPropertyFlag = i1941[7]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1943 = data
  i1942.name = i1943[0]
  request.r(i1943[1], i1943[2], 0, i1942, 'texture')
  i1942.aabb = i1943[3]
  i1942.vertices = i1943[4]
  i1942.triangles = i1943[5]
  i1942.textureRect = UnityEngine.Rect.MinMaxRect(i1943[6], i1943[7], i1943[8], i1943[9])
  i1942.packedRect = UnityEngine.Rect.MinMaxRect(i1943[10], i1943[11], i1943[12], i1943[13])
  i1942.border = new pc.Vec4( i1943[14], i1943[15], i1943[16], i1943[17] )
  i1942.transparency = i1943[18]
  i1942.bounds = i1943[19]
  i1942.pixelsPerUnit = i1943[20]
  i1942.textureWidth = i1943[21]
  i1942.textureHeight = i1943[22]
  i1942.nativeSize = new pc.Vec2( i1943[23], i1943[24] )
  i1942.pivot = new pc.Vec2( i1943[25], i1943[26] )
  i1942.textureRectOffset = new pc.Vec2( i1943[27], i1943[28] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1945 = data
  i1944.name = i1945[0]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.wrapMode = i1947[1]
  i1946.isLooping = !!i1947[2]
  i1946.length = i1947[3]
  var i1949 = i1947[4]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1949[i + 0]) );
  }
  i1946.curves = i1948
  var i1951 = i1947[5]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1951[i + 0]) );
  }
  i1946.events = i1950
  i1946.halfPrecision = !!i1947[6]
  i1946._frameRate = i1947[7]
  i1946.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1947[8], i1946.localBounds)
  i1946.hasMuscleCurves = !!i1947[9]
  var i1953 = i1947[10]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( i1953[i + 0] );
  }
  i1946.clipMuscleConstant = i1952
  i1946.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1947[11], i1946.clipBindingConstant)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1957 = data
  i1956.path = i1957[0]
  i1956.hash = i1957[1]
  i1956.componentType = i1957[2]
  i1956.property = i1957[3]
  i1956.keys = i1957[4]
  var i1959 = i1957[5]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1959[i + 0]) );
  }
  i1956.objectReferenceKeys = i1958
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1963 = data
  i1962.time = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'value')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1967 = data
  i1966.functionName = i1967[0]
  i1966.floatParameter = i1967[1]
  i1966.intParameter = i1967[2]
  i1966.stringParameter = i1967[3]
  request.r(i1967[4], i1967[5], 0, i1966, 'objectReferenceParameter')
  i1966.time = i1967[6]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1969 = data
  i1968.center = new pc.Vec3( i1969[0], i1969[1], i1969[2] )
  i1968.extends = new pc.Vec3( i1969[3], i1969[4], i1969[5] )
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( i1975[i + 0] );
  }
  i1972.genericBindings = i1974
  var i1977 = i1973[1]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.pptrCurveMapping = i1976
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.ascent = i1979[1]
  i1978.originalLineHeight = i1979[2]
  i1978.fontSize = i1979[3]
  var i1981 = i1979[4]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1981[i + 0]) );
  }
  i1978.characterInfo = i1980
  request.r(i1979[5], i1979[6], 0, i1978, 'texture')
  i1978.originalFontSize = i1979[7]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1985 = data
  i1984.index = i1985[0]
  i1984.advance = i1985[1]
  i1984.bearing = i1985[2]
  i1984.glyphWidth = i1985[3]
  i1984.glyphHeight = i1985[4]
  i1984.minX = i1985[5]
  i1984.maxX = i1985[6]
  i1984.minY = i1985[7]
  i1984.maxY = i1985[8]
  i1984.uvBottomLeftX = i1985[9]
  i1984.uvBottomLeftY = i1985[10]
  i1984.uvBottomRightX = i1985[11]
  i1984.uvBottomRightY = i1985[12]
  i1984.uvTopLeftX = i1985[13]
  i1984.uvTopLeftY = i1985[14]
  i1984.uvTopRightX = i1985[15]
  i1984.uvTopRightY = i1985[16]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1987 = data
  i1986.name = i1987[0]
  var i1989 = i1987[1]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1989[i + 0]) );
  }
  i1986.layers = i1988
  var i1991 = i1987[2]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1991[i + 0]) );
  }
  i1986.parameters = i1990
  i1986.animationClips = i1987[3]
  i1986.avatarUnsupported = i1987[4]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.defaultWeight = i1995[1]
  i1994.blendingMode = i1995[2]
  i1994.avatarMask = i1995[3]
  i1994.syncedLayerIndex = i1995[4]
  i1994.syncedLayerAffectsTiming = !!i1995[5]
  i1994.syncedLayers = i1995[6]
  i1994.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1995[7], i1994.stateMachine)
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1997 = data
  i1996.id = i1997[0]
  i1996.name = i1997[1]
  i1996.path = i1997[2]
  var i1999 = i1997[3]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1999[i + 0]) );
  }
  i1996.states = i1998
  var i2001 = i1997[4]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2001[i + 0]) );
  }
  i1996.machines = i2000
  var i2003 = i1997[5]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2003[i + 0]) );
  }
  i1996.entryStateTransitions = i2002
  var i2005 = i1997[6]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2005[i + 0]) );
  }
  i1996.exitStateTransitions = i2004
  var i2007 = i1997[7]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2007[i + 0]) );
  }
  i1996.anyStateTransitions = i2006
  i1996.defaultStateId = i1997[8]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2011 = data
  i2010.id = i2011[0]
  i2010.name = i2011[1]
  i2010.cycleOffset = i2011[2]
  i2010.cycleOffsetParameter = i2011[3]
  i2010.cycleOffsetParameterActive = !!i2011[4]
  i2010.mirror = !!i2011[5]
  i2010.mirrorParameter = i2011[6]
  i2010.mirrorParameterActive = !!i2011[7]
  i2010.motionId = i2011[8]
  i2010.nameHash = i2011[9]
  i2010.fullPathHash = i2011[10]
  i2010.speed = i2011[11]
  i2010.speedParameter = i2011[12]
  i2010.speedParameterActive = !!i2011[13]
  i2010.tag = i2011[14]
  i2010.tagHash = i2011[15]
  i2010.writeDefaultValues = !!i2011[16]
  var i2013 = i2011[17]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i2010.behaviours = i2012
  var i2015 = i2011[18]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2015[i + 0]) );
  }
  i2010.transitions = i2014
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2021 = data
  i2020.fullPath = i2021[0]
  i2020.canTransitionToSelf = !!i2021[1]
  i2020.duration = i2021[2]
  i2020.exitTime = i2021[3]
  i2020.hasExitTime = !!i2021[4]
  i2020.hasFixedDuration = !!i2021[5]
  i2020.interruptionSource = i2021[6]
  i2020.offset = i2021[7]
  i2020.orderedInterruption = !!i2021[8]
  i2020.destinationStateId = i2021[9]
  i2020.isExit = !!i2021[10]
  i2020.mute = !!i2021[11]
  i2020.solo = !!i2021[12]
  var i2023 = i2021[13]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2023[i + 0]) );
  }
  i2020.conditions = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2029 = data
  i2028.destinationStateId = i2029[0]
  i2028.isExit = !!i2029[1]
  i2028.mute = !!i2029[2]
  i2028.solo = !!i2029[3]
  var i2031 = i2029[4]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2031[i + 0]) );
  }
  i2028.conditions = i2030
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2035 = data
  i2034.defaultBool = !!i2035[0]
  i2034.defaultFloat = i2035[1]
  i2034.defaultInt = i2035[2]
  i2034.name = i2035[3]
  i2034.nameHash = i2035[4]
  i2034.type = i2035[5]
  return i2034
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2037 = data
  i2036.useSafeMode = !!i2037[0]
  i2036.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2037[1], i2036.safeModeOptions)
  i2036.timeScale = i2037[2]
  i2036.unscaledTimeScale = i2037[3]
  i2036.useSmoothDeltaTime = !!i2037[4]
  i2036.maxSmoothUnscaledTime = i2037[5]
  i2036.rewindCallbackMode = i2037[6]
  i2036.showUnityEditorReport = !!i2037[7]
  i2036.logBehaviour = i2037[8]
  i2036.drawGizmos = !!i2037[9]
  i2036.defaultRecyclable = !!i2037[10]
  i2036.defaultAutoPlay = i2037[11]
  i2036.defaultUpdateType = i2037[12]
  i2036.defaultTimeScaleIndependent = !!i2037[13]
  i2036.defaultEaseType = i2037[14]
  i2036.defaultEaseOvershootOrAmplitude = i2037[15]
  i2036.defaultEasePeriod = i2037[16]
  i2036.defaultAutoKill = !!i2037[17]
  i2036.defaultLoopType = i2037[18]
  i2036.debugMode = !!i2037[19]
  i2036.debugStoreTargetId = !!i2037[20]
  i2036.showPreviewPanel = !!i2037[21]
  i2036.storeSettingsLocation = i2037[22]
  i2036.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2037[23], i2036.modules)
  i2036.createASMDEF = !!i2037[24]
  i2036.showPlayingTweens = !!i2037[25]
  i2036.showPausedTweens = !!i2037[26]
  return i2036
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2039 = data
  i2038.logBehaviour = i2039[0]
  i2038.nestedTweenFailureBehaviour = i2039[1]
  return i2038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2041 = data
  i2040.showPanel = !!i2041[0]
  i2040.audioEnabled = !!i2041[1]
  i2040.physicsEnabled = !!i2041[2]
  i2040.physics2DEnabled = !!i2041[3]
  i2040.spriteEnabled = !!i2041[4]
  i2040.uiEnabled = !!i2041[5]
  i2040.textMeshProEnabled = !!i2041[6]
  i2040.tk2DEnabled = !!i2041[7]
  i2040.deAudioEnabled = !!i2041[8]
  i2040.deUnityExtendedEnabled = !!i2041[9]
  i2040.epoOutlineEnabled = !!i2041[10]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2045[i + 0]) );
  }
  i2042.files = i2044
  i2042.componentToPrefabIds = i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2049 = data
  i2048.path = i2049[0]
  request.r(i2049[1], i2049[2], 0, i2048, 'unityObject')
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2053[i + 0]) );
  }
  i2050.scriptsExecutionOrder = i2052
  var i2055 = i2051[1]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2055[i + 0]) );
  }
  i2050.sortingLayers = i2054
  var i2057 = i2051[2]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2057[i + 0]) );
  }
  i2050.cullingLayers = i2056
  i2050.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2051[3], i2050.timeSettings)
  i2050.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2051[4], i2050.physicsSettings)
  i2050.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2051[5], i2050.physics2DSettings)
  i2050.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2051[6], i2050.qualitySettings)
  i2050.enableRealtimeShadows = !!i2051[7]
  i2050.enableAutoInstancing = !!i2051[8]
  i2050.enableStaticBatching = !!i2051[9]
  i2050.enableDynamicBatching = !!i2051[10]
  i2050.usePreservativeDynamicBatching = !!i2051[11]
  i2050.lightmapEncodingQuality = i2051[12]
  i2050.desiredColorSpace = i2051[13]
  var i2059 = i2051[14]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2050.allTags = i2058
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.value = i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2067 = data
  i2066.id = i2067[0]
  i2066.name = i2067[1]
  i2066.value = i2067[2]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2071 = data
  i2070.id = i2071[0]
  i2070.name = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2073 = data
  i2072.fixedDeltaTime = i2073[0]
  i2072.maximumDeltaTime = i2073[1]
  i2072.timeScale = i2073[2]
  i2072.maximumParticleTimestep = i2073[3]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2075 = data
  i2074.gravity = new pc.Vec3( i2075[0], i2075[1], i2075[2] )
  i2074.defaultSolverIterations = i2075[3]
  i2074.bounceThreshold = i2075[4]
  i2074.autoSyncTransforms = !!i2075[5]
  i2074.autoSimulation = !!i2075[6]
  var i2077 = i2075[7]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2077[i + 0]) );
  }
  i2074.collisionMatrix = i2076
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.layerId = i2081[1]
  i2080.otherLayerId = i2081[2]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'material')
  i2082.gravity = new pc.Vec2( i2083[2], i2083[3] )
  i2082.positionIterations = i2083[4]
  i2082.velocityIterations = i2083[5]
  i2082.velocityThreshold = i2083[6]
  i2082.maxLinearCorrection = i2083[7]
  i2082.maxAngularCorrection = i2083[8]
  i2082.maxTranslationSpeed = i2083[9]
  i2082.maxRotationSpeed = i2083[10]
  i2082.baumgarteScale = i2083[11]
  i2082.baumgarteTOIScale = i2083[12]
  i2082.timeToSleep = i2083[13]
  i2082.linearSleepTolerance = i2083[14]
  i2082.angularSleepTolerance = i2083[15]
  i2082.defaultContactOffset = i2083[16]
  i2082.autoSimulation = !!i2083[17]
  i2082.queriesHitTriggers = !!i2083[18]
  i2082.queriesStartInColliders = !!i2083[19]
  i2082.callbacksOnDisable = !!i2083[20]
  i2082.reuseCollisionCallbacks = !!i2083[21]
  i2082.autoSyncTransforms = !!i2083[22]
  var i2085 = i2083[23]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2085[i + 0]) );
  }
  i2082.collisionMatrix = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.layerId = i2089[1]
  i2088.otherLayerId = i2089[2]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2093[i + 0]) );
  }
  i2090.qualityLevels = i2092
  var i2095 = i2091[1]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( i2095[i + 0] );
  }
  i2090.names = i2094
  i2090.shadows = i2091[2]
  i2090.anisotropicFiltering = i2091[3]
  i2090.antiAliasing = i2091[4]
  i2090.lodBias = i2091[5]
  i2090.shadowCascades = i2091[6]
  i2090.shadowDistance = i2091[7]
  i2090.shadowmaskMode = i2091[8]
  i2090.shadowProjection = i2091[9]
  i2090.shadowResolution = i2091[10]
  i2090.softParticles = !!i2091[11]
  i2090.softVegetation = !!i2091[12]
  i2090.activeColorSpace = i2091[13]
  i2090.desiredColorSpace = i2091[14]
  i2090.masterTextureLimit = i2091[15]
  i2090.maxQueuedFrames = i2091[16]
  i2090.particleRaycastBudget = i2091[17]
  i2090.pixelLightCount = i2091[18]
  i2090.realtimeReflectionProbes = !!i2091[19]
  i2090.shadowCascade2Split = i2091[20]
  i2090.shadowCascade4Split = new pc.Vec3( i2091[21], i2091[22], i2091[23] )
  i2090.streamingMipmapsActive = !!i2091[24]
  i2090.vSyncCount = i2091[25]
  i2090.asyncUploadBufferSize = i2091[26]
  i2090.asyncUploadTimeSlice = i2091[27]
  i2090.billboardsFaceCameraPosition = !!i2091[28]
  i2090.shadowNearPlaneOffset = i2091[29]
  i2090.streamingMipmapsMemoryBudget = i2091[30]
  i2090.maximumLODLevel = i2091[31]
  i2090.streamingMipmapsAddAllCameras = !!i2091[32]
  i2090.streamingMipmapsMaxLevelReduction = i2091[33]
  i2090.streamingMipmapsRenderersPerFrame = i2091[34]
  i2090.resolutionScalingFixedDPIFactor = i2091[35]
  i2090.streamingMipmapsMaxFileIORequests = i2091[36]
  i2090.currentQualityLevel = i2091[37]
  return i2090
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'm_ObjectArgument')
  i2098.m_ObjectArgumentAssemblyTypeName = i2099[2]
  i2098.m_IntArgument = i2099[3]
  i2098.m_FloatArgument = i2099[4]
  i2098.m_StringArgument = i2099[5]
  i2098.m_BoolArgument = !!i2099[6]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2103 = data
  i2102.mode = i2103[0]
  i2102.parameter = i2103[1]
  i2102.threshold = i2103[2]
  return i2102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[6],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[19],"66":[19],"67":[19],"68":[19],"69":[19],"70":[19],"27":[19],"71":[19],"72":[19],"24":[19],"73":[19],"74":[19],"75":[19],"76":[6],"77":[78],"79":[80],"81":[80],"12":[11],"82":[22],"83":[6],"84":[85],"86":[11],"87":[15,11],"88":[78],"89":[15,11],"90":[11],"91":[11],"92":[78,11],"93":[11,15],"94":[95],"96":[95],"97":[95],"98":[11],"99":[11],"14":[12],"36":[15,11],"16":[11],"13":[12],"100":[11],"101":[11],"102":[11],"103":[11],"104":[11],"105":[11],"106":[11],"107":[11],"108":[11],"17":[15,11],"109":[11],"110":[11],"111":[11],"112":[11],"39":[15,11],"113":[11],"114":[9],"115":[9],"10":[9],"116":[9],"117":[6],"118":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.HingeJoint2D","BonkController","ActiveOnActive","UnityEngine.GameObject","DropPiece","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","ActiveOnClick","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","GameController","TargetController","LunaController","LayoutController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "09/21/2026 04:45:21";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V07_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4386";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "ecdf2490-8389-478d-989d-3bfa992f2e3a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

