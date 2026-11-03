"""Use the supplied original mesh/UV/texture and add only a stationary Idle rig."""
import bpy
import math
import sys
import json
import shutil
from pathlib import Path
from mathutils import Vector, Matrix

WORKSPACE=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(WORKSPACE/'ArtSource'/'Blender'))
from voxel_tools import studio,aim
OUT=WORKSPACE/'ArtSource'/'Tralalero'/'Original'
EXPORT=WORKSPACE/'Assets'/'01 RESOURCES'/'Tralalero'
TEXTURES=EXPORT/'Textures'
OUT.mkdir(parents=True,exist_ok=True);TEXTURES.mkdir(parents=True,exist_ok=True)
REFERENCE=bpy.data.scenes['Tralalero_Reference']
scene=bpy.data.scenes.get('Tralalero_Original_Idle')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('Tralalero_Original_Idle')
bpy.context.window.scene=REFERENCE;bpy.context.view_layer.update()
sources=sorted([o for o in REFERENCE.objects if o.type=='MESH'],key=lambda o:int(o.name.split('_')[1].split('.')[0]))
head=bpy.data.objects['Object_167'];tail=bpy.data.objects['Object_160']
head_center=sum((head.matrix_world@Vector(c) for c in head.bound_box),Vector())/8
tail_center=sum((tail.matrix_world@Vector(c) for c in tail.bound_box),Vector())/8
axis=tail_center-head_center
rotation=Matrix.Rotation(math.pi/2-math.atan2(axis.y,axis.x),4,'Z')
center=rotation@head_center
old_canonical=Matrix.Translation(Vector((-center.x,0,0)))@rotation
# The archive includes a ~20-degree presentation tilt. Derive the actual ground
# normal from all three soles and bake its inverse into mesh AND bind pose.
sole_sources=[REFERENCE.objects[name] for name in ['Object_54','Object_92','Object_137']]
sole_normals=[]
for sole in sole_sources:
    normal_matrix=sole.matrix_world.to_3x3().inverted().transposed()
    for polygon in sole.data.polygons:
        normal=(normal_matrix@polygon.normal).normalized()
        if normal.z<-.7:sole_normals.append(-normal)
ground_normal=sum(sole_normals,Vector()).normalized()
level=ground_normal.rotation_difference(Vector((0,0,1))).to_matrix().to_4x4()
leveled_axis=level.to_3x3()@axis
yaw=Matrix.Rotation(math.pi/2-math.atan2(leveled_axis.y,leveled_axis.x),4,'Z')
orientation=yaw@level
leveled_head=orientation@head_center
ground=min((orientation@source.matrix_world@v.co).z for source in sources for v in source.data.vertices)
canonical=Matrix.Translation(Vector((-leveled_head.x,0,-ground)))@orientation
bone_correction=canonical@old_canonical.inverted()
sole_heights=[min((canonical@sole.matrix_world@v.co).z for v in sole.data.vertices) for sole in sole_sources]
assert max(sole_heights)-min(sole_heights)<.002,'The soles are not level'
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Tralalero_Original_Character');scene.collection.children.link(collection)

texture=TEXTURES/'Tralalero_BaseColor.png'
shutil.copy2(WORKSPACE/'ArtSource'/'Tralalero'/'Reference'/'textures'/'material_0_baseColor.png',texture)
image=bpy.data.images.load(str(texture),check_existing=True)
material=bpy.data.materials.get('Tralalero_Original_Texture')
if material is None:
    material=sources[0].data.materials[0].copy();material.name='Tralalero_Original_Texture'
for node in material.node_tree.nodes:
    if node.type=='TEX_IMAGE' and node.image:
        node.image=image

data=bpy.data.armatures.new('Tralalero_Original_Skeleton')
rig=bpy.data.objects.new('Tralalero_Original_Rig',data);collection.objects.link(rig)
bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
spec=[('Root',(0,0,0),(0,0,.3),None),('Body',(0,0,1.10),(0,-.12,1.63),'Root'),
      ('Head',(0,-.38,1.60),(0,-1.0,1.80),'Body'),('Dorsal',(0,0,1.72),(0,-.10,2.1),'Body'),
      ('Tail',(0,1.19,1.05),(0,1.82,1.08),'Body'),
      ('Fin_L',(-.23,.61,1.1),(-.44,.85,.94),'Body'),('Fin_R',(.23,.61,1.1),(.44,.85,.94),'Body')]
for name,h,t,parent in spec:
    if name!='Root':h,t=bone_correction@Vector(h),bone_correction@Vector(t)
    bone=data.edit_bones.new(name);bone.head=h;bone.tail=t
    if parent:bone.parent=data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')

shoe_ids={39,42,45,48,51,54,57,77,80,83,86,89,92,95,122,125,128,131,134,137,140}
foreleg_ids={23,26,29,32,35,61,64,67,70,73}
backleg_ids={115,118}
head_ids={167,170,173,176,180,184,187,190}
dorsal_ids={16,19,105,108}
tail_ids={160,163}
leftfin_ids={111,153,156};rightfin_ids={102,147,150}
copies=[];original_positions=[];maximum_copy_error=0;original_uvs=[]
for source in sources:
    identity=int(source.name.split('_')[1].split('.')[0])
    transform=canonical@source.matrix_world
    obj=source.copy();obj.data=source.data.copy();collection.objects.link(obj)
    obj.parent=None;obj.matrix_world=Matrix.Identity(4)
    expected=[transform@v.co for v in source.data.vertices]
    obj.data.transform(transform);obj.data.update()
    maximum_copy_error=max(maximum_copy_error,max((v.co-p).length for v,p in zip(obj.data.vertices,expected)))
    original_positions.extend(expected)
    obj.data.materials.clear();obj.data.materials.append(material)
    for name,_,_,_ in spec:obj.vertex_groups.new(name=name)
    for vertex in obj.data.vertices:
        rest_z=(old_canonical@source.matrix_world@source.data.vertices[vertex.index].co).z
        if identity in shoe_ids:weights={'Root':1}
        elif identity in foreleg_ids:
            w=max(0,min(1,(rest_z-.80)/.65));weights={'Root':1-w,'Body':w}
        elif identity in backleg_ids:
            w=max(0,min(1,(rest_z-.48)/.65));weights={'Root':1-w,'Body':w}
        elif identity in head_ids:weights={'Head':1}
        elif identity in dorsal_ids:weights={'Dorsal':1}
        elif identity in tail_ids:weights={'Tail':1}
        elif identity in leftfin_ids:weights={'Fin_L':1}
        elif identity in rightfin_ids:weights={'Fin_R':1}
        else:weights={'Body':1}
        for bone,w in weights.items():
            if w>.000001:obj.vertex_groups[bone].add([vertex.index],w,'REPLACE')
    copies.append(obj)

for obj in scene.objects:obj.select_set(False)
for obj in copies:obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
mesh=bpy.context.object;mesh.name='Tralalero_Original_Mesh';mesh.parent=rig
modifier=mesh.modifiers.new('Idle_Skin','ARMATURE');modifier.object=rig
assert len(mesh.data.uv_layers)>0,'Original UVs were lost'
assert sum(len(p.vertices)-2 for p in mesh.data.polygons)==672,'Original topology changed'
assert maximum_copy_error<1e-5,'Source vertices changed'

scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
for bone in rig.pose.bones:bone.rotation_mode='XYZ'
for frame in range(1,98):
    t=0 if frame==97 else (frame-1)*math.tau/96
    # Two gentle two-second squats per four-second clip: stand, dip, stand.
    # Translate the body in WORLD Z; bone-local Y/Z depend on the rest orientation.
    dip=.08*.5*(1-math.cos(2*t))
    body=rig.pose.bones['Body'];body.rotation_euler=(0,0,0)
    body.location=data.bones['Body'].matrix_local.to_3x3().inverted()@Vector((0,0,-dip))
    body.scale=(1,1,1)
    body.keyframe_insert('location',frame=frame,group='Body')
    body.keyframe_insert('rotation_euler',frame=frame,group='Body');body.keyframe_insert('scale',frame=frame,group='Body')
    for name,amount in [('Head',.25),('Dorsal',.4),('Tail',.8),('Fin_L',.6),('Fin_R',-.6)]:
        bone=rig.pose.bones[name];bone.rotation_euler=(0,0,math.radians(amount*math.sin(2*t)))
        bone.keyframe_insert('rotation_euler',frame=frame,group=name)
action=rig.animation_data.action;action.name='Tralalero_Original_Idle';action.use_fake_user=True
for layer in action.layers:
    for strip in layer.strips:
        for bag in strip.channelbags:
            for curve in bag.fcurves:
                for point in curve.keyframe_points:point.interpolation='LINEAR'
                curve.modifiers.new('CYCLES')

def positions(frame):
    scene.frame_set(frame);bpy.context.view_layer.update()
    evaluated=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());temp=evaluated.to_mesh()
    points=[evaluated.matrix_world@v.co for v in temp.vertices];evaluated.to_mesh_clear();return points

start=positions(1);end=positions(97);mid=positions(25)
seam=max((a-b).length for a,b in zip(start,end))
root_id=mesh.vertex_groups['Root'].index
fixed=[v.index for v in mesh.data.vertices if any(w.group==root_id and w.weight>.99999 for w in v.groups)]
drift=max((start[i]-mid[i]).length for i in fixed)
rest_error=max((a-v.co).length for a,v in zip(start,mesh.data.vertices))
body_drop=start[0].z-mid[0].z
assert seam<1e-5 and drift<1e-6 and rest_error<1e-5
assert .075<body_drop<.085,'Squat must lower the body by eight centimetres'

studio_collection,camera=studio(scene,'Tralalero_Original',4.8)
camera.location=(4,-6,3.6);aim(camera,(0,.15,1.1))
scene.frame_set(1)
scene.render.filepath=str(OUT/'Tralalero_Original.png');bpy.ops.render.render(write_still=True)
camera.location=(7,0,3.0);aim(camera,(0,.15,1.1))
scene.render.filepath=str(OUT/'Tralalero_Original_Side.png');bpy.ops.render.render(write_still=True)
camera.location=(4,-6,3.6);aim(camera,(0,.15,1.1))
scene.frame_set(25);scene.render.filepath=str(OUT/'Idle_Pose_025.png');bpy.ops.render.render(write_still=True)
scene.frame_set(1)
for obj in scene.objects:obj.select_set(False)
rig.select_set(True);mesh.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Tralalero_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_nla_strips_merged_animation_name='Idle',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Tralalero_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0,path_mode='RELATIVE')
scene.frame_end=96
for obj in studio_collection.objects:obj.hide_set(True)
rig.hide_set(True);bpy.context.view_layer.objects.active=mesh
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.region_3d.view_location=Vector((0,.15,1.1));area.spaces.active.region_3d.view_distance=6.2
        area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion();area.spaces.active.shading.type='MATERIAL'
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Tralalero_Original_Idle.blend'))
print(json.dumps({'source_meshes':len(sources),'triangles':672,'materials':len(mesh.data.materials),'bones':len(data.bones),'source_vertex_error_m':maximum_copy_error,'rest_pose_error_m':rest_error,'loop_seam_m':seam,'shoe_drift_m':drift,'body_drop_m':body_drop,'uv_layers':len(mesh.data.uv_layers),'texture':str(texture),'duration_seconds':4,'removed_tilt_degrees':math.degrees(math.acos(ground_normal.z)),'sole_heights_m':sole_heights}))
