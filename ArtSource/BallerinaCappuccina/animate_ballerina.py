"""Original Ballerina model: relaxed arms and a planted, looping ballet idle."""
import bpy
import math
import sys
import json
import shutil
from pathlib import Path
from mathutils import Vector,Matrix,Quaternion

WORKSPACE=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(WORKSPACE/'ArtSource'/'Blender'))
from voxel_tools import studio,aim
OUT=WORKSPACE/'ArtSource'/'BallerinaCappuccina'
EXPORT=WORKSPACE/'Assets'/'01 RESOURCES'/'BallerinaCappuccina'
TEXTURES=EXPORT/'Textures'
OUT.mkdir(parents=True,exist_ok=True);TEXTURES.mkdir(parents=True,exist_ok=True)
source_scene=bpy.data.scenes['Ballerina_Reference']
bpy.context.window.scene=source_scene;bpy.context.view_layer.update()
sources=[o for o in source_scene.objects if o.type=='MESH' and o.name.startswith('Object_')]
scene=bpy.data.scenes.get('Ballerina_Idle_Review')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('Ballerina_Idle_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Ballerina_Character');scene.collection.children.link(collection)
controls=bpy.data.collections.new('Ballerina_IK_Controls');scene.collection.children.link(controls)
materials=[]
for i,source in enumerate(sources,1):
    original=source.data.materials[0]
    name=f'Ballerina_Original_{i:02d}'
    material=bpy.data.materials.get(name)
    if material is None:material=original.copy();material.name=name
    for node in material.node_tree.nodes:
        if node.type=='TEX_IMAGE' and node.image:
            destination=TEXTURES/f'Ballerina_{i:02d}_BaseColor.jpeg'
            source_file=OUT/'Reference'/'textures'/Path(bpy.path.abspath(node.image.filepath)).name
            if not source_file.exists():source_file=OUT/'Reference'/'textures'/node.image.name
            shutil.copy2(source_file,destination)
            node.image=bpy.data.images.load(str(destination),check_existing=True)
    materials.append(material)

data=bpy.data.armatures.new('Ballerina_Skeleton')
rig=bpy.data.objects.new('Ballerina_Rig',data);collection.objects.link(rig)
rig.show_in_front=True
rig['idle']='Relaxed ballet stance, gentle knee dip; feet fixed by IK'
spec=[('Root',(0,0,0),(0,0,.2),None),
      ('Pelvis',(0,-.05,1.10),(0,-.05,1.32),'Root'),
      ('Spine',(0,-.05,1.32),(0,-.035,1.77),'Pelvis'),
      ('Head',(0,-.035,1.77),(0,-.035,2.25),'Spine')]
for s,label in [(-1,'L'),(1,'R')]:
    spec.extend([
        ('UpperArm_'+label,(s*.20,-.025,1.73),(s*.48,-.025,1.75),'Spine'),
        ('Forearm_'+label,(s*.48,-.025,1.75),(s*.69,-.03,1.73),'UpperArm_'+label),
        ('Hand_'+label,(s*.69,-.03,1.73),(s*.81,-.04,1.72),'Forearm_'+label),
        ('Thigh_'+label,(s*.12,-.05,1.10),(s*.125,-.08,.56),'Pelvis'),
        ('Calf_'+label,(s*.125,-.08,.56),(s*.16,-.04,.13),'Thigh_'+label),
        ('Foot_'+label,(s*.16,-.04,.13),(s*.165,-.20,.03),'Root')
    ])
bpy.context.view_layer.objects.active=rig;rig.select_set(True);bpy.ops.object.mode_set(mode='EDIT')
for name,head,tail,parent in spec:
    bone=data.edit_bones.new(name);bone.head=head;bone.tail=tail
    if parent:bone.parent=data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')

for s,label in [(-1,'L'),(1,'R')]:
    target=bpy.data.objects.new('Ballerina_AnkleTarget_'+label,None);controls.objects.link(target)
    target.location=(s*.16,-.04,.13)
    pole=bpy.data.objects.new('Ballerina_KneePole_'+label,None);controls.objects.link(pole)
    pole.location=(s*.125,-1.0,.56)
    ik=rig.pose.bones['Calf_'+label].constraints.new('IK')
    ik.target=target;ik.pole_target=pole;ik.chain_count=2;ik.use_stretch=False
    expected=Vector((s*.125,-.08,.56))
    candidates=[]
    for angle in [0,math.pi/2,-math.pi/2,math.pi]:
        ik.pole_angle=angle;bpy.context.view_layer.update()
        candidates.append(((rig.pose.bones['Thigh_'+label].tail-expected).length,angle))
    ik.pole_angle=min(candidates)[1]


def blend(a,b,t):
    t=max(0,min(1,t))
    return {a:1-t,b:t}


copies=[];source_error=0
for i,source in enumerate(sources):
    obj=source.copy();obj.data=source.data.copy();collection.objects.link(obj)
    obj.parent=None;obj.matrix_world=Matrix.Identity(4)
    transform=source.matrix_world.copy();expected=[transform@v.co for v in source.data.vertices]
    obj.data.transform(transform);obj.data.update()
    source_error=max(source_error,max((p-v.co).length for p,v in zip(expected,obj.data.vertices)))
    obj.data.materials.clear();obj.data.materials.append(materials[i])
    for name,_,_,_ in spec:obj.vertex_groups.new(name=name)
    for v in obj.data.vertices:
        x,y,z=v.co;ax=abs(x);label='L' if x<0 else 'R'
        if z>=1.84:weights={'Head':1}
        elif z>=1.60 and ax>.20:
            if ax<.28:weights=blend('Spine','UpperArm_'+label,(ax-.20)/.08)
            elif ax<.44:weights={'UpperArm_'+label:1}
            elif ax<.52:weights=blend('UpperArm_'+label,'Forearm_'+label,(ax-.44)/.08)
            elif ax<.65:weights={'Forearm_'+label:1}
            elif ax<.73:weights=blend('Forearm_'+label,'Hand_'+label,(ax-.65)/.08)
            else:weights={'Hand_'+label:1}
        elif z>=1.76:weights=blend('Spine','Head',(z-1.76)/.08)
        elif z>=1.38:weights={'Spine':1}
        elif z>=1.27:weights=blend('Pelvis','Spine',(z-1.27)/.11)
        elif z>=1.03 or (z>.94 and (ax>.24 or abs(y+.05)>.19)):weights={'Pelvis':1}
        elif z<.18:weights={'Foot_'+label:1}
        elif z<.25:weights=blend('Foot_'+label,'Calf_'+label,(z-.18)/.07)
        elif z<.48:weights={'Calf_'+label:1}
        elif z<.66:weights=blend('Calf_'+label,'Thigh_'+label,(z-.48)/.18)
        elif z<.96:weights={'Thigh_'+label:1}
        else:weights=blend('Thigh_'+label,'Pelvis',(z-.96)/.07)
        for bone,w in weights.items():
            if w>1e-6:obj.vertex_groups[bone].add([v.index],w,'REPLACE')
    copies.append(obj)
for obj in scene.objects:obj.select_set(False)
for obj in copies:obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
mesh=bpy.context.object;mesh.name='Ballerina_Original_Mesh';mesh.parent=rig
modifier=mesh.modifiers.new('Ballerina_Skin','ARMATURE');modifier.object=rig
assert sum(len(p.vertices)-2 for p in mesh.data.polygons)==6426
assert source_error<1e-5 and len(mesh.data.uv_layers)>0

scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
for bone in rig.pose.bones:bone.rotation_mode='QUATERNION'


def world_axis(name,axis):
    return data.bones[name].matrix_local.to_3x3().inverted()@Vector(axis)


for frame in range(1,98):
    t=0 if frame==97 else (frame-1)*math.tau/96
    dip=.035*.5*(1-math.cos(2*t))
    pelvis=rig.pose.bones['Pelvis']
    pelvis.location=world_axis('Pelvis',(0,0,-dip))
    pelvis.keyframe_insert('location',frame=frame,group='Pelvis')
    spine=rig.pose.bones['Spine']
    spine.rotation_quaternion=Quaternion(world_axis('Spine',(1,0,0)),math.radians(.35*math.sin(2*t)))
    spine.keyframe_insert('rotation_quaternion',frame=frame,group='Spine')
    head=rig.pose.bones['Head']
    head.rotation_quaternion=Quaternion(world_axis('Head',(0,0,1)),math.radians(.6*math.sin(t)))
    head.keyframe_insert('rotation_quaternion',frame=frame,group='Head')
    for s,label in [(-1,'L'),(1,'R')]:
        for prefix,angle in [('UpperArm',35+2.0*math.sin(t)),('Forearm',15+1.5*math.sin(t)),('Hand',-8+1.0*math.sin(t))]:
            name=prefix+'_'+label
            q=Quaternion(world_axis(name,(0,1,0)),math.radians(s*angle))
            if prefix=='Forearm':q=q@Quaternion(world_axis(name,(0,0,1)),math.radians(-s*8))
            bone=rig.pose.bones[name];bone.rotation_quaternion=q
            bone.keyframe_insert('rotation_quaternion',frame=frame,group=name)
action=rig.animation_data.action;action.name='Ballerina_Idle';action.use_fake_user=True
for layer in action.layers:
    for strip in layer.strips:
        for bag in strip.channelbags:
            for curve in bag.fcurves:
                for key in curve.keyframe_points:key.interpolation='LINEAR'
                curve.modifiers.new('CYCLES')


def positions(frame):
    scene.frame_set(frame);bpy.context.view_layer.update()
    obj=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());temporary=obj.to_mesh()
    p=[obj.matrix_world@v.co for v in temporary.vertices];obj.to_mesh_clear();return p


start=positions(1);end=positions(97);crouch=positions(25)
seam=max((a-b).length for a,b in zip(start,end))
foot_groups={mesh.vertex_groups[n].index for n in ['Foot_L','Foot_R']}
fixed=[v.index for v in mesh.data.vertices if any(w.group in foot_groups and w.weight>.99999 for w in v.groups)]
foot_drift=max((start[i]-crouch[i]).length for i in fixed)
assert seam<1e-5 and foot_drift<1e-5

studio_collection,camera=studio(scene,'Ballerina_Idle',3.65)
for obj in studio_collection.objects:
    if obj.type=='MESH':obj.location.z=.03  # Floor surface at the soles' Z=0.
scene.render.resolution_x=720;scene.render.resolution_y=840
camera.location=(3,-6,3.2);aim(camera,(0,0,1.25))
scene.frame_set(1);scene.render.filepath=str(OUT/'Ballerina_Idle_Stand.png');bpy.ops.render.render(write_still=True)
scene.frame_set(25);scene.render.filepath=str(OUT/'Ballerina_Idle_Dip.png');bpy.ops.render.render(write_still=True)
camera.location=(6,0,2.9);aim(camera,(0,0,1.25))
scene.render.filepath=str(OUT/'Ballerina_Idle_Side.png');bpy.ops.render.render(write_still=True)
camera.location=(3,-6,3.2);aim(camera,(0,0,1.25));scene.frame_set(1)
for obj in scene.objects:obj.select_set(False)
rig.select_set(True);mesh.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Ballerina_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_nla_strips_merged_animation_name='Idle',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Ballerina_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0,path_mode='RELATIVE')
scene.frame_end=96
for obj in studio_collection.objects:obj.hide_set(True)
for obj in controls.objects:obj.hide_set(True)
rig.hide_set(True);bpy.context.view_layer.objects.active=mesh
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.25))
        area.spaces.active.region_3d.view_distance=5.3;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Ballerina_Idle.blend'))
print(json.dumps({'triangles':6426,'bones':len(data.bones),'materials':len(mesh.data.materials),'original_vertex_error_m':source_error,'loop_seam_m':seam,'foot_drift_m':foot_drift,'duration_seconds':4,'status':'Awaiting user approval'}))
