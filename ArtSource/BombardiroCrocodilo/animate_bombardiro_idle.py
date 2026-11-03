"""Approved Bombardiro: four continuously spinning propellers and a gentle hover."""
import bpy,sys,math,json
from pathlib import Path
from mathutils import Vector
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import studio,aim
OUT=ROOT/'ArtSource'/'BombardiroCrocodilo'/'Idle'
EXPORT=ROOT/'Assets'/'01 RESOURCES'/'BombardiroCrocodilo'
OUT.mkdir(parents=True,exist_ok=True)
source_scene=bpy.data.scenes['Bombardiro_Voxel_Review']
sources=[o for o in source_scene.objects if o.type=='MESH' and o.name[:2].isdigit()]
assert len(sources)==14
scene=bpy.data.scenes.get('Bombardiro_Idle_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('Bombardiro_Idle_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Bombardiro_Idle_Character');scene.collection.children.link(collection)
data=bpy.data.armatures.new('Bombardiro_Skeleton')
rig=bpy.data.objects.new('Bombardiro_Idle_Rig',data);collection.objects.link(rig)
rig.show_in_front=True
spec=[('Root',(0,0,0),(0,0,.2),None),('Body',(0,0,.60),(0,0,.9),'Root')]
for side in [-1,1]:
    for index,x in enumerate([.66,1.30]):
        label=('L' if side<0 else 'R')+str(index+1)
        spec.append(('Propeller_'+label,(side*x,-.526,.525),(side*x,-.706,.525),'Body'))
bpy.context.view_layer.objects.active=rig;rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
for name,head,tail,parent in spec:
    bone=data.edit_bones.new(name);bone.head=head;bone.tail=tail
    if parent:bone.parent=data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
copies=[]
for source in sources:
    obj=source.copy();obj.data=source.data.copy();collection.objects.link(obj)
    obj.parent=None;obj.name=source.name+'_Idle'
    name='Propeller_'+source.name.rsplit('_',1)[1] if source.name.startswith('15_') else 'Body'
    group=obj.vertex_groups.new(name=name)
    group.add(list(range(len(obj.data.vertices))),1,'REPLACE')
    copies.append(obj)
for o in scene.objects:o.select_set(False)
for o in copies:o.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
mesh=bpy.context.object;mesh.name='Bombardiro_Idle_Mesh';mesh.parent=rig
modifier=mesh.modifiers.new('Bombardiro_Skin','ARMATURE');modifier.object=rig
scene.render.fps=30;scene.frame_start=1;scene.frame_end=121
for bone in rig.pose.bones:bone.rotation_mode='XYZ'
for frame in range(1,122):
    elapsed=(frame-1)/30
    bob=.04*math.sin(elapsed*math.tau/4)
    body=rig.pose.bones['Body']
    body.location=data.bones['Body'].matrix_local.to_3x3().inverted()@Vector((0,0,bob))
    body.keyframe_insert('location',frame=frame,group='Body')
    for name,_,_,_ in spec[2:]:
        sign=-1 if name.startswith('Propeller_L') else 1
        bone=rig.pose.bones[name]
        # Continuous unwrapped angles bake to <180-degree increments, preserving
        # the spin direction through FBX/glTF quaternion sampling and looping.
        bone.rotation_euler=(0,sign*elapsed*math.tau*2.5,0)
        bone.keyframe_insert('rotation_euler',frame=frame,group=name)
action=rig.animation_data.action;action.name='Bombardiro_Idle';action.use_fake_user=True
for layer in action.layers:
    for strip in layer.strips:
        for bag in strip.channelbags:
            for curve in bag.fcurves:
                for key in curve.keyframe_points:key.interpolation='LINEAR'
def positions(frame):
    scene.frame_set(frame);bpy.context.view_layer.update()
    evaluated=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());temp=evaluated.to_mesh()
    points=[evaluated.matrix_world@v.co for v in temp.vertices];evaluated.to_mesh_clear();return points
first=positions(1);last=positions(121)
seam=max((a-b).length for a,b in zip(first,last))
high=positions(31);low=positions(91)
body_group=mesh.vertex_groups['Body'].index
body_vertex=next(v.index for v in mesh.data.vertices if any(g.group==body_group for g in v.groups))
vertical_range=high[body_vertex].z-low[body_vertex].z
next_pose=positions(2);rotor_errors=[];rotor_motion=[]
for name,head,_,_ in spec[2:]:
    index=mesh.vertex_groups[name].index
    vertices=[v.index for v in mesh.data.vertices if any(g.group==index for g in v.groups)]
    moving_hub=Vector(head)+Vector((0,0,.04*math.sin(math.tau/120)))
    rotor_errors.append(max(abs((first[i]-Vector(head)).length-(next_pose[i]-moving_hub).length) for i in vertices))
    rotor_motion.append(max((first[i]-next_pose[i]).length for i in vertices))
assert seam<1e-5 and abs(vertical_range-.08)<1e-5
assert max(rotor_errors)<1e-5 and min(rotor_motion)>.05
scene.frame_set(1)
studio_collection,camera=studio(scene,'Bombardiro_Idle',4.55)
for o in studio_collection.objects:
    if o.type=='MESH':o.location.z=.03
scene.render.resolution_x=840;scene.render.resolution_y=630
camera.location=(4,-6,3.7);aim(camera,(0,0,.72))
for frame,label in [(1,'Start'),(31,'High'),(91,'Low')]:
    scene.frame_set(frame);scene.render.filepath=str(OUT/('Bombardiro_Idle_'+label+'.png'));bpy.ops.render.render(write_still=True)
scene.frame_set(1)
for o in scene.objects:o.select_set(False)
mesh.select_set(True);rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Bombardiro_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_nla_strips_merged_animation_name='Idle',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Bombardiro_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0,path_mode='RELATIVE')
for o in studio_collection.objects:o.hide_set(True)
rig.hide_set(True);bpy.context.view_layer.objects.active=mesh
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,.72))
        area.spaces.active.region_3d.view_distance=5.4;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Bombardiro_Idle.blend'))
metrics={'duration_seconds':4,'fps':30,'bones':len(data.bones),'triangles':sum(len(p.vertices)-2 for p in mesh.data.polygons),'materials':len(mesh.data.materials),'loop_seam_m':seam,'vertical_range_m':vertical_range,'rotor_speed_revolutions_per_second':2.5,'rotor_radius_error_m':max(rotor_errors),'minimum_rotor_vertex_motion_m':min(rotor_motion)}
(OUT/'validation.json').write_text(json.dumps(metrics,indent=2));print(json.dumps(metrics))
