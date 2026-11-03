"""Reduce original Eks.Art geometry, preserving silhouette, UVs and texture."""
import bpy,sys,json,bmesh
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import studio,aim
OUT=ROOT/'ArtSource/TungTungSahur/OriginalEksArt/LowPoly';OUT.mkdir(exist_ok=True)
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
reference=bpy.data.scenes['TungSahur_EksArt_Idle']
reference.frame_set(1)
source=reference.objects['TungSahur_Original_Mesh']
scene=bpy.data.scenes.get('TungSahur_Original_LowPoly_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Original_LowPoly_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('EksArt_LowPoly');scene.collection.children.link(collection)
obj=bpy.data.objects.new('TungSahur_Original_LowPoly',source.data.copy());collection.objects.link(obj)
obj.matrix_world=source.matrix_world.copy()
obj.select_set(True);bpy.context.view_layer.objects.active=obj
original_triangles=sum(len(p.vertices)-2 for p in obj.data.polygons)
# Weld geometric UV seams before reduction; UVs remain on face corners.
# Otherwise independently collapsed seam borders can create visible cracks.
bm=bmesh.new();bm.from_mesh(obj.data)
bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
source_boundary=sum(e.is_boundary for e in bm.edges)
source_nonmanifold=sum(not e.is_manifold and not e.is_boundary for e in bm.edges)
bm.to_mesh(obj.data);bm.free();obj.data.update()
# Increase collapse cost at the eyelids and pupils, using the rest of the
# character to meet the same total triangle budget.
protect=obj.vertex_groups.new(name='Facial_Detail')
for vertex in obj.data.vertices:
    p=vertex.co
    weight=0.0
    if p.y<-.12 and p.z>1.88:
        eye_distance=min(((p.x-x)/.13)**2+((p.z-2.075)/.14)**2 for x in [-.15,.15])
        weight=max(0,1-eye_distance)
    protect.add([vertex.index],1-.97*weight,'REPLACE')
decimate=obj.modifiers.new('Playable_Reduction','DECIMATE')
decimate.decimate_type='COLLAPSE';decimate.ratio=980/original_triangles;decimate.use_collapse_triangulate=True
decimate.vertex_group=protect.name;decimate.vertex_group_factor=1.0
bpy.ops.object.modifier_apply(modifier=decimate.name)
mesh=obj.data
# Preserve the authored smooth normals around the eyes and facial volumes.
for p in mesh.polygons:p.use_smooth=True
bm=bmesh.new();bm.from_mesh(mesh)
boundary=sum(e.is_boundary for e in bm.edges)
nonmanifold=sum(not e.is_manifold and not e.is_boundary for e in bm.edges)
zero=sum(f.calc_area()<1e-12 for f in bm.faces);bm.free()
assert zero==0,zero
assert sum(len(p.vertices)-2 for p in mesh.polygons)<1000,len(mesh.polygons)
assert boundary==0 and nonmanifold==0,(boundary,nonmanifold)
studio_collection,camera=studio(scene,'TungSahur_LowPoly',3.7)
scene.render.resolution_x=720;scene.render.resolution_y=840
for label,position in [('ThreeQuarter',(3.5,-6,2.8)),('Front',(0,-6,2.6)),('Back',(0,6,2.6)),('Side',(6,0,2.6))]:
    camera.location=position;aim(camera,(0,0,1.25))
    scene.render.filepath=str(OUT/('LowPoly_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.18;camera.location=(.7,-6,2.65);aim(camera,(0,-.18,2.04))
scene.render.filepath=str(OUT/'LowPoly_Face.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.7;camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
for o in scene.objects:o.select_set(False)
obj.select_set(True);bpy.context.view_layer.objects.active=obj
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Original_LowPoly.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False,path_mode='RELATIVE')
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Original_LowPoly.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False)
for o in studio_collection.objects:o.hide_set(True)
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.25));area.spaces.active.region_3d.view_distance=5.0;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Original_LowPoly.blend'))
report={'original_triangles':original_triangles,'lowpoly_triangles':sum(len(p.vertices)-2 for p in mesh.polygons),'vertices':len(mesh.vertices),'uv_layers':len(mesh.uv_layers),'materials':len(mesh.materials),'source_boundary_edges':source_boundary,'source_nonmanifold_edges':source_nonmanifold,'boundary_edges':boundary,'nonmanifold_edges':nonmanifold,'zero_area_faces':zero,'status':'static shape review, no idle yet'}
(OUT/'validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
