import bpy,bmesh,json
from pathlib import Path
ROOT=Path(r'F:\UnityProjects\OBP_V04')
OUT=ROOT/'ArtSource/TungTungSahur/Minecraft/Idle'
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
source_scene=bpy.data.scenes['TungSahur_Minecraft_Idle']
report={}
for fmt in ['fbx','glb']:
    scene=bpy.data.scenes.new('Minecraft_Idle_ImportCheck_'+fmt);bpy.context.window.scene=scene
    path=str(EXPORT/('TungSahur_Minecraft_Idle.'+fmt))
    if fmt=='fbx':bpy.ops.import_scene.fbx(filepath=path)
    else:bpy.ops.import_scene.gltf(filepath=path)
    o=next(o for o in scene.objects if o.type=='MESH')
    assert sum(len(p.vertices)-2 for p in o.data.polygons)==540
    assert any(o.type=='ARMATURE' and o.animation_data and o.animation_data.action for o in scene.objects)
    rig=next(o for o in scene.objects if o.type=='ARMATURE')
    first,last=rig.animation_data.action.frame_range
    reference=None;foot_indices=[];drift=0;seam=0;arm_reference={};arm_max={'L':0,'R':0}
    for offset in [0,12,24,36,48,60,72,84,96]:
        frame=int(first+offset)
        scene.frame_set(frame);bpy.context.view_layer.update()
        e=o.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=e.to_mesh()
        positions=[e.matrix_world@v.co for v in mesh.vertices]
        if reference is None:
            reference=positions;foot_indices=[i for i,p in enumerate(positions) if p.z<.129 and abs(p.x)<.3]
        for label in ['L','R']:
            rotation=rig.pose.bones['Arm_'+label].matrix.to_quaternion()
            if offset==0:arm_reference[label]=rotation.copy()
            arm_max[label]=max(arm_max[label],arm_reference[label].rotation_difference(rotation).angle)
        drift=max(drift,max((positions[i]-reference[i]).length for i in foot_indices))
        if offset==96:seam=max((a-b).length for a,b in zip(positions,reference))
        bm=bmesh.new();bm.from_mesh(mesh)
        bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
        assert all(e.is_manifold for e in bm.edges),fmt
        bm.free();e.to_mesh_clear()
    assert drift<1e-5 and seam<1e-5,(fmt,drift,seam)
    assert all(value>.05 for value in arm_max.values()),arm_max
    report[fmt]={'triangles':540,'foot_drift':drift,'loop_seam':seam,'nonmanifold_edges':0,'arm_swing_radians':arm_max}
(OUT/'roundtrip_idle_validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
bpy.context.window.scene=source_scene
source_scene.frame_set(1)
source_scene.render.resolution_x=480;source_scene.render.resolution_y=560
source_scene.render.image_settings.media_type='VIDEO'
source_scene.render.image_settings.file_format='FFMPEG'
source_scene.render.ffmpeg.format='MPEG4';source_scene.render.ffmpeg.codec='H264'
source_scene.render.ffmpeg.constant_rate_factor='MEDIUM'
source_scene.render.filepath=str(OUT/'TungSahur_Minecraft_Idle_Preview.mp4')
source_scene.frame_end=96
bpy.ops.render.render(animation=True)
source_scene.frame_end=97;source_scene.frame_set(1)
source_scene.render.image_settings.media_type='IMAGE';source_scene.render.image_settings.file_format='PNG'
source_scene.render.filepath=str(OUT/'Idle_Stand.png')
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Minecraft_Idle.blend'))
