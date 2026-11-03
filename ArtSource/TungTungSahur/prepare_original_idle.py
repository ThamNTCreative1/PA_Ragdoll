"""Preserve Eks.Art source geometry and UVs; add a gentle stationary idle."""
import bpy,bmesh,sys,math,json,shutil
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import studio,aim
SOURCE=ROOT/'ArtSource/TungTungSahur/OriginalEksArt'
OUT=SOURCE/'Idle';OUT.mkdir(exist_ok=True)
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
TEXTURES=EXPORT/'Textures';TEXTURES.mkdir(exist_ok=True)
scene=bpy.data.scenes.get('TungSahur_EksArt_Idle')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_EksArt_Idle')
bpy.context.window.scene=scene
bpy.ops.import_scene.gltf(filepath=str(SOURCE/'scene.gltf'))
bpy.context.view_layer.update()
source=next(o for o in scene.objects if o.type=='MESH')
mesh=source.data.copy();mesh.transform(source.matrix_world)
points=[v.co.copy() for v in mesh.vertices]
low=min(p.z for p in points);height=max(p.z for p in points)-low
scale=2.5/height
upper=[p for p in points if p.z>low+height*.65]
cx=(min(p.x for p in upper)+max(p.x for p in upper))*.5
cy=(min(p.y for p in upper)+max(p.y for p in upper))*.5
mesh.transform(Matrix.Scale(scale,4)@Matrix.Translation(Vector((-cx,-cy,-low))))
for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
collection=bpy.data.collections.new('EksArt_Original_Character');scene.collection.children.link(collection)
obj=bpy.data.objects.new('TungSahur_Original_Mesh',mesh);collection.objects.link(obj)
mat=mesh.materials[0];mat.name='TungSahur_Original_Texture'
for node in mat.node_tree.nodes:
    if node.type=='TEX_IMAGE' and node.image:
        dest=TEXTURES/Path(node.image.filepath).name
        shutil.copy2(SOURCE/'textures'/Path(node.image.filepath).name,dest)
        node.image.filepath=str(dest)
rigdata=bpy.data.armatures.new('TungSahur_Original_Skeleton')
rig=bpy.data.objects.new('TungSahur_Original_Rig',rigdata);collection.objects.link(rig)
bpy.context.view_layer.objects.active=rig;rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
root=rigdata.edit_bones.new('Root');root.head=(0,0,0);root.tail=(0,0,.25)
body=rigdata.edit_bones.new('Body');body.head=(0,0,.85);body.tail=(0,0,1.5);body.parent=root
bpy.ops.object.mode_set(mode='OBJECT')
vgroot=obj.vertex_groups.new(name='Root');vgbody=obj.vertex_groups.new(name='Body')
# Identify separate connected islands, including the bat, before assigning weights.
bm=bmesh.new();bm.from_mesh(mesh);bm.verts.ensure_lookup_table()
remaining=set(bm.verts);islands=[]
while remaining:
    seed=remaining.pop();stack=[seed];island=[seed]
    while stack:
        v=stack.pop()
        for edge in v.link_edges:
            n=edge.other_vert(v)
            if n in remaining:remaining.remove(n);stack.append(n);island.append(n)
    islands.append([v.index for v in island])
bm.free()
for indices in islands:
    vertices=[mesh.vertices[i].co for i in indices]
    centre=sum(vertices,Vector())/len(vertices)
    # Detached long object far from torso is carried rigidly with the hand.
    carried=abs(centre.x)>.33 and max(v.z for v in vertices)>.65 and min(v.z for v in vertices)<.3
    for i in indices:
        z=mesh.vertices[i].co.z
        t=max(0,min(1,(z-.24)/.70));w=1 if carried else t*t*(3-2*t)
        if w>0:vgbody.add([i],w,'REPLACE')
        if w<1:vgroot.add([i],1-w,'REPLACE')
modifier=obj.modifiers.new('Original_Idle','ARMATURE');modifier.object=rig;obj.parent=rig
scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
bone=rig.pose.bones['Body']
for frame in range(1,98):
    phase=(frame-1)/96*math.tau
    # Local Y follows bone up; only 1.2 cm of gentle breathing travel.
    bone.location=(0,.006*(1-math.cos(phase*2)),0)
    bone.keyframe_insert(data_path='location',frame=frame,group='Body')
rig.animation_data.action.name='TungSahur_Original_Idle'
scene.frame_set(1)
studio_collection,camera=studio(scene,'TungSahur_Original',3.7)
scene.render.resolution_x=630;scene.render.resolution_y=720
for label,position in [('Front',(0,-6,2.6)),('ThreeQuarter',(3.5,-6,2.8)),('Back',(0,6,2.6))]:
    camera.location=position;aim(camera,(0,0,1.25));scene.render.filepath=str(OUT/('Original_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
for o in scene.objects:o.select_set(False)
obj.select_set(True);rig.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Original_Idle.fbx'),use_selection=True,object_types={'MESH','ARMATURE'},axis_forward='-Z',axis_up='Y',add_leaf_bones=False,bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0,path_mode='RELATIVE')
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Original_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='ACTIVE_ACTIONS')
shutil.copy2(SOURCE/'license.txt',EXPORT/'EksArt_Original_License.txt')
for o in studio_collection.objects:o.hide_set(True)
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.25));area.spaces.active.region_3d.view_distance=5.0;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Original_Idle.blend'))
report={'triangles':sum(len(p.vertices)-2 for p in mesh.polygons),'vertices':len(mesh.vertices),'materials':len(mesh.materials),'uv_layers':len(mesh.uv_layers),'source_geometry_preserved':True,'duration_seconds':4,'bones':2,'islands':len(islands)}
(OUT/'validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
