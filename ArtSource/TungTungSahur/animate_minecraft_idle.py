"""Add stationary idle to the approved closed 540-triangle Minecraft model."""
import bpy,bmesh,math,json,sys
from pathlib import Path
from mathutils import Vector
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import studio,aim
OUT=ROOT/'ArtSource/TungTungSahur/Minecraft/Idle';OUT.mkdir(exist_ok=True)
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
source=bpy.data.scenes['TungSahur_Minecraft_Final'].objects['TungSahur_Minecraft_Final']
scene=bpy.data.scenes.get('TungSahur_Minecraft_Idle')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Minecraft_Idle')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Minecraft_Idle_Character');scene.collection.children.link(collection)
obj=bpy.data.objects.new('TungSahur_Minecraft_Idle_Mesh',source.data.copy());collection.objects.link(obj)
obj.matrix_world=source.matrix_world.copy()
data=bpy.data.armatures.new('TungSahur_Minecraft_Skeleton')
rig=bpy.data.objects.new('TungSahur_Minecraft_Rig',data);collection.objects.link(rig)
rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.object.mode_set(mode='EDIT')
root=data.edit_bones.new('Root');root.head=(0,0,0);root.tail=(0,0,.25)
body=data.edit_bones.new('Body');body.head=(0,0,.86);body.tail=(0,0,1.7);body.parent=root
for s,label in [(-1,'L'),(1,'R')]:
    arm=data.edit_bones.new('Arm_'+label);arm.head=(s*.307,0,1.65);arm.tail=(s*.397,-.065,.93);arm.parent=body
bpy.ops.object.mode_set(mode='OBJECT')
vgroot=obj.vertex_groups.new(name='Root');vgbody=obj.vertex_groups.new(name='Body')
vgarms={label:obj.vertex_groups.new(name='Arm_'+label) for label in ['L','R']}
bm=bmesh.new();bm.from_mesh(obj.data);bm.verts.ensure_lookup_table()
remaining=set(bm.verts);feet=[];leg_count=0;arm_components={'L':0,'R':0}
while remaining:
    v=remaining.pop();component=[v];stack=[v]
    while stack:
        v=stack.pop()
        for e in v.link_edges:
            n=e.other_vert(v)
            if n in remaining:remaining.remove(n);component.append(n);stack.append(n)
    high=max(v.co.z for v in component);low=min(v.co.z for v in component)
    cx=sum(v.co.x for v in component)/len(component)
    foot=high<.14
    leg=high<.96 and low<.15 and abs(cx)<.25 and not foot
    arm=abs(cx)>.30 and high<1.75
    if arm:
        label='L' if cx<0 else 'R'
        arm_components[label]+=1
        vgarms[label].add([v.index for v in component],1,'REPLACE')
        continue
    if leg:leg_count+=1
    for v in component:
        weight=0 if foot else max(0,min(1,(v.co.z-.128)/(.86-.128))) if leg else 1
        if foot:feet.append(v.index)
        if weight>0:vgbody.add([v.index],weight,'REPLACE')
        if weight<1:vgroot.add([v.index],1-weight,'REPLACE')
bm.free();assert leg_count==2 and len(feet)==16,(leg_count,len(feet))
assert arm_components=={'L':6,'R':3},arm_components
modifier=obj.modifiers.new('Idle_Armature','ARMATURE');modifier.object=rig;obj.parent=rig
scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
bone=rig.pose.bones['Body']
for frame in range(1,98):
    phase=(frame-1)/48*math.tau
    bone.location=(0,-.009*(1-math.cos(phase)),0)
    bone.keyframe_insert(data_path='location',frame=frame,group='Body')
    for s,label in [(-1,'L'),(1,'R')]:
        arm=rig.pose.bones['Arm_'+label];arm.rotation_mode='XYZ'
        arm.rotation_euler=(s*math.radians(3)*math.sin(phase),0,0)
        arm.keyframe_insert(data_path='rotation_euler',frame=frame,group='Arm_'+label)
rig.animation_data.action.name='TungSahur_Minecraft_Idle'
reference=None;seam=0;drift=0;open_edges=0;inverted=0
for frame in [1,13,25,37,49,73,97]:
    scene.frame_set(frame);bpy.context.view_layer.update()
    evaluated=obj.evaluated_get(bpy.context.evaluated_depsgraph_get());mesh=evaluated.to_mesh()
    positions=[v.co.copy() for v in mesh.vertices]
    if reference is None:reference=positions
    drift=max(drift,max((positions[i]-reference[i]).length for i in feet))
    if frame==97:seam=max((a-b).length for a,b in zip(positions,reference))
    bm=bmesh.new();bm.from_mesh(mesh)
    open_edges=max(open_edges,sum(not e.is_manifold for e in bm.edges))
    rest=set(bm.faces)
    while rest:
        first=rest.pop();faces=[first];stack=[first]
        while stack:
            f=stack.pop()
            for e in f.edges:
                for other in e.link_faces:
                    if other in rest:rest.remove(other);faces.append(other);stack.append(other)
        if sum(f.calc_area()*f.normal.dot(f.calc_center_median()) for f in faces)<=0:inverted+=1
    bm.free();evaluated.to_mesh_clear()
assert drift<1e-6 and seam<1e-6 and open_edges==inverted==0,(drift,seam,open_edges,inverted)
scene.frame_set(1)
for o in scene.objects:o.select_set(False)
obj.select_set(True);rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Minecraft_Idle.fbx'),use_selection=True,object_types={'MESH','ARMATURE'},axis_forward='-Z',axis_up='Y',add_leaf_bones=False,bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0)
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Minecraft_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_texcoords=False)
studio_collection,camera=studio(scene,'Minecraft_Idle',3.7)
camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
scene.render.resolution_x=540;scene.render.resolution_y=630
for frame,label in [(1,'Stand'),(25,'Dip')]:
    scene.frame_set(frame);scene.render.filepath=str(OUT/('Idle_'+label+'.png'));bpy.ops.render.render(write_still=True)
scene.frame_set(1)
for o in studio_collection.objects:o.hide_set(True)
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Minecraft_Idle.blend'))
report={'triangles':sum(len(p.vertices)-2 for p in obj.data.polygons),'bones':4,'duration_seconds':4,'dip_meters':.018,'arm_swing_degrees':3,'bat_rigidly_attached_to':'Arm_L','feet_max_drift':drift,'loop_seam_max':seam,'nonmanifold_edges_during_idle':open_edges,'inverted_components_during_idle':inverted,'materials':1,'textures':0}
(OUT/'idle_validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
