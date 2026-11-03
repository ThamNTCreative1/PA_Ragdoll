"""Create a skinned, looping Idle clip for the Lirili review model in Blender.
Run after build_lirili_review.py, or from the saved review .blend.
"""
import bpy
import math
import json
import shutil
from pathlib import Path
from mathutils import Vector

OUT = Path(r'F:\UnityProjects\OBP_V04\ArtSource\Lirili\Idle')
OUT.mkdir(parents=True, exist_ok=True)
SOURCE = bpy.data.scenes['Lirili_Voxel_Review']
SCENE_NAME = 'Lirili_Idle_Review'
scene = bpy.data.scenes.get(SCENE_NAME)
if scene:
    for obj in list(scene.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
else:
    scene = bpy.data.scenes.new(SCENE_NAME)
bpy.context.window.scene = scene
scene.world = SOURCE.world
scene.render.engine = 'BLENDER_EEVEE'
scene.render.resolution_x = 630
scene.render.resolution_y = 700
scene.render.resolution_percentage = 100
scene.render.fps = 24
scene.frame_start = 1
scene.frame_end = 97  # Frames 1 and 97 are identical; exported clip is four seconds.
scene.view_settings.view_transform = 'Standard'
scene.view_settings.look = SOURCE.view_settings.look
scene.view_settings.exposure = SOURCE.view_settings.exposure
scene.render.image_settings.file_format = 'PNG'
if hasattr(scene, 'eevee') and hasattr(scene.eevee, 'taa_render_samples'):
    scene.eevee.taa_render_samples = 24

model_collection = bpy.data.collections.new('Lirili_Idle_Character')
scene.collection.children.link(model_collection)
studio = bpy.data.collections.new('Lirili_Idle_Studio')
scene.collection.children.link(studio)
for obj in SOURCE.objects:
    if obj.name == 'Review_Ground' or obj.type in {'LIGHT', 'CAMERA'}:
        copy = obj.copy()
        copy.data = obj.data.copy()
        studio.objects.link(copy)
        copy.hide_set(False)
        if obj == SOURCE.camera:
            scene.camera = copy
            copy.location = (4.5, -7, 3.9)
            copy.rotation_euler = (Vector((0,0,1.32))-copy.location).to_track_quat('-Z','Y').to_euler()

armature = bpy.data.armatures.new('Lirili_Idle_Skeleton')
rig = bpy.data.objects.new('Lirili_Idle_Rig', armature)
model_collection.objects.link(rig)
rig.show_in_front = True
rig['clip'] = 'Idle'
rig['loop_seconds'] = 4.0
rig['root_motion'] = False
rig['status'] = 'Lirili idle awaiting user review'
bpy.context.view_layer.objects.active = rig
rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')

spec = [
    ('Root',(0,0,0),(0,0,.30),None),
    ('Body',(0,0,.35),(0,0,2.30),'Root'),
    ('Head',(0,-.65,2.15),(0,-1.10,2.15),'Body'),
    ('Ear_L',(-.32,-.66,2.38),(-.58,-.66,1.89),'Head'),
    ('Ear_R',(.32,-.66,2.38),(.58,-.66,1.89),'Head'),
    ('Trunk_01',(0,-1.10,2.10),(0,-1.34,1.55),'Head'),
    ('Trunk_02',(0,-1.34,1.55),(0,-1.47,1.15),'Trunk_01'),
    ('Trunk_03',(0,-1.47,1.15),(0,-1.65,.90),'Trunk_02'),
    ('Trunk_Tip',(0,-1.65,.90),(0,-1.80,1.0),'Trunk_03'),
]
for name, head, tail, parent in spec:
    bone = armature.edit_bones.new(name)
    bone.head, bone.tail = head, tail
    if parent:
        bone.parent = armature.edit_bones[parent]
    bone.use_connect = False
bpy.ops.object.mode_set(mode='OBJECT')


def trunk_weights(z):
    knots = [('Trunk_Tip',.88),('Trunk_03',1.02),('Trunk_02',1.35),('Trunk_01',1.78),('Head',2.10)]
    if z <= knots[0][1]:
        return {knots[0][0]: 1}
    if z >= knots[-1][1]:
        return {knots[-1][0]: 1}
    for (a,za),(b,zb) in zip(knots,knots[1:]):
        if za <= z <= zb:
            w=(z-za)/(zb-za)
            return {a:1-w,b:w}


copies = []
shoe_indices = []
offset = 0
for source in sorted(bpy.data.collections['Lirili_Rebuilt_Review'].objects, key=lambda x:x.name):
    if source.type != 'MESH':
        continue
    obj = source.copy()
    obj.data = source.data.copy()
    model_collection.objects.link(obj)
    obj.parent = None
    obj.matrix_world = source.matrix_world.copy()
    obj.name = source.name + '_Skinned'
    for name, _, _, _ in spec:
        obj.vertex_groups.new(name=name)
    for vertex in obj.data.vertices:
        world = obj.matrix_world @ vertex.co
        if 'Sandal' in source.name:
            weights={'Root':1}
        elif source.name.startswith(('01_','02_')):
            # Pin the base; a very small upper-body breath/sway deforms the cactus.
            w=max(0,min(1,(world.z-.35)/2.0))
            weights={'Root':1-w,'Body':w}
        elif source.name.startswith('04_'):
            weights={'Ear_L' if world.x<0 else 'Ear_R':1}
        elif source.name.startswith('06_'):
            weights=trunk_weights(world.z)
        else:
            weights={'Head':1}
        for name,weight in weights.items():
            if weight>0.000001:
                obj.vertex_groups[name].add([vertex.index],weight,'REPLACE')
    copies.append(obj)

for obj in scene.objects:
    obj.select_set(False)
for obj in copies:
    obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0]
bpy.ops.object.join()
mesh=bpy.context.object
mesh.name='Lirili_Idle_SkinnedMesh'
mesh.parent=rig
modifier=mesh.modifiers.new('Lirili_Skin','ARMATURE')
modifier.object=rig
modifier.use_vertex_groups=True
modifier.use_deform_preserve_volume=False

# Only one material and skinned renderer. No object-transform animation tracks.
for bone in rig.pose.bones:
    bone.rotation_mode='XYZ'


def radians(x):
    return math.radians(x)


for frame in range(1,98):
    t=0 if frame==97 else (frame-1)*math.tau/96
    body=rig.pose.bones['Body']
    body.rotation_euler=(radians(.45*math.sin(t)),radians(.22*math.sin(t)),radians(.55*math.sin(t)))
    body.scale=(1,1+.004*(1-math.cos(t)),1)
    body.keyframe_insert(data_path='rotation_euler',frame=frame,group='Body')
    body.keyframe_insert(data_path='scale',frame=frame,group='Body')
    head=rig.pose.bones['Head']
    head.rotation_euler=(radians(.8*math.sin(t)),0,radians(.45*math.sin(t)))
    head.keyframe_insert(data_path='rotation_euler',frame=frame,group='Head')
    for name,sign in [('Ear_L',-1),('Ear_R',1)]:
        ear=rig.pose.bones[name]
        ear.rotation_euler=(radians(.65*math.sin(t)),0,radians(sign*(2.8*math.sin(t)+1.0*math.sin(2*t))))
        ear.keyframe_insert(data_path='rotation_euler',frame=frame,group=name)
    for i,name in enumerate(['Trunk_01','Trunk_02','Trunk_03','Trunk_Tip']):
        bone=rig.pose.bones[name]
        lag=.28*i
        # Subtract the phase offset so the initial pose matches the static model.
        sway=math.sin(t-lag)-math.sin(-lag)
        pitch=math.sin(t-.15*i)-math.sin(-.15*i)
        bone.rotation_euler=(radians((.8+i*.6)*pitch),0,radians((1.6+i*.6)*sway))
        bone.keyframe_insert(data_path='rotation_euler',frame=frame,group=name)

action=rig.animation_data.action
action.name='Idle'
action.use_fake_user=True
# Blender's action slots/layers API is used when available, with legacy fallback.
curves=[]
if hasattr(action,'layers'):
    for layer in action.layers:
        for strip in layer.strips:
            if hasattr(strip,'channelbags'):
                for bag in strip.channelbags:
                    curves.extend(bag.fcurves)
elif hasattr(action,'fcurves'):
    curves=list(action.fcurves)
for curve in curves:
    for key in curve.keyframe_points:
        key.interpolation='LINEAR'
    curve.modifiers.new('CYCLES')

# Validate the deformed positions, not merely the animation parameters.
def positions(frame):
    scene.frame_set(frame)
    bpy.context.view_layer.update()
    evaluated=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get())
    temp=evaluated.to_mesh()
    result=[evaluated.matrix_world@v.co for v in temp.vertices]
    evaluated.to_mesh_clear()
    return result

p0=positions(1)
pend=positions(97)
pmid=positions(25)
loop_error=max((a-b).length for a,b in zip(p0,pend))
root_index=mesh.vertex_groups['Root'].index
shoe_vertices=[v.index for v in mesh.data.vertices if any(g.group==root_index and g.weight>.99999 for g in v.groups)]
foot_drift=max((p0[i]-pmid[i]).length for i in shoe_vertices)
motion=max((a-b).length for a,b in zip(p0,pmid))
assert loop_error<1e-5, f'Loop seam: {loop_error}'
assert foot_drift<1e-6, f'Foot drift: {foot_drift}'
assert motion>.03, f'Animation too small: {motion}'
scene.frame_set(1)

for obj in scene.objects:
    obj.select_set(False)
rig.select_set(True)
mesh.select_set(True)
bpy.context.view_layer.objects.active=rig

bpy.ops.export_scene.gltf(filepath=str(OUT/'Lirili_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_nla_strips_merged_animation_name='Idle',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_normals=True,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(OUT/'Lirili_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,apply_unit_scale=True,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0,path_mode='AUTO')
export_folder=Path(r'F:\UnityProjects\OBP_V04\Assets\01 RESOURCES\Lirili')
for extension in ['fbx','glb']:
    shutil.copy2(OUT/('Lirili_Idle.'+extension),export_folder/('Lirili_Idle.'+extension))

for frame in [1,25,49,73]:
    scene.frame_set(frame)
    scene.render.filepath=str(OUT/f'Idle_Pose_{frame:03d}.png')
    bpy.ops.render.render(write_still=True)
scene.frame_set(1)
scene.timeline_markers.clear()
for name,frame in [('Idle start',1),('Sway left',25),('Breath',49),('Sway right',73),('Loop seam',97)]:
    scene.timeline_markers.new(name,frame=frame)
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.region_3d.view_location=Vector((0,0,1.3))
        area.spaces.active.region_3d.view_distance=5.9
        area.spaces.active.region_3d.view_rotation=scene.camera.rotation_euler.to_quaternion()
        area.spaces.active.shading.type='MATERIAL'
for obj in studio.objects:
    obj.hide_set(True)
rig.hide_set(True)
mesh.select_set(True)
bpy.context.view_layer.objects.active=mesh
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Lirili_Idle.blend'))
metrics={'clip':'Idle','duration_seconds':4.0,'fps':24,'bones':len(armature.bones),'triangles':sum(len(p.vertices)-2 for p in mesh.data.polygons),'materials':len(mesh.data.materials),'loop_vertex_error_m':loop_error,'fixed_foot_vertex_drift_m':foot_drift,'max_motion_m':motion,'glb_bytes':(OUT/'Lirili_Idle.glb').stat().st_size,'fbx_bytes':(OUT/'Lirili_Idle.fbx').stat().st_size}
print(json.dumps(metrics))
