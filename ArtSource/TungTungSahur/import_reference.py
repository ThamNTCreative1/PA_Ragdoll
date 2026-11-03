"""Snapshot the supplied Tung reference into its own Blender scene."""
import bpy,sys,json
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import studio,aim
OUT=ROOT/'ArtSource'/'TungTungSahur'
scene=bpy.data.scenes.get('TungSahur_Reference')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Reference')
bpy.context.window.scene=scene;scene.frame_set(1)
bpy.ops.import_scene.gltf(filepath=str(OUT/'Reference'/'scene.gltf'))
bpy.context.view_layer.update();deps=bpy.context.evaluated_depsgraph_get()
snapshots=[]
for o in list(scene.objects):
    if o.type!='MESH':continue
    evaluated=o.evaluated_get(deps)
    mesh=bpy.data.meshes.new_from_object(evaluated,depsgraph=deps)
    mesh.transform(evaluated.matrix_world)
    snapshots.append((o.name,mesh))
for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
points=[v.co for _,mesh in snapshots for v in mesh.vertices]
low=Vector(tuple(min(v[i] for v in points) for i in range(3)))
high=Vector(tuple(max(v[i] for v in points) for i in range(3)))
scale=2.5/(high.z-low.z)
transform=Matrix.Scale(scale,4)@Matrix.Translation(Vector((-(high.x+low.x)/2,-(high.y+low.y)/2,-low.z)))
collection=bpy.data.collections.new('TungSahur_Reference_Mesh');scene.collection.children.link(collection)
for name,mesh in snapshots:
    mesh.transform(transform);obj=bpy.data.objects.new('Reference_'+name,mesh);collection.objects.link(obj)
studio_collection,camera=studio(scene,'TungSahur_Reference',3.9)
for o in studio_collection.objects:
    if o.type=='MESH':o.location.z=.03
scene.render.resolution_x=630;scene.render.resolution_y=720
for label,location in [('ThreeQuarter',(4,-6,3)),('Front',(0,-6,2.8)),('Back',(0,6,2.8))]:
    camera.location=location;aim(camera,(0,0,1.25))
    scene.render.filepath=str(OUT/('Reference_'+label+'.png'));bpy.ops.render.render(write_still=True)
print(json.dumps({'source_dimensions':list(high-low),'normalised_dimensions':list((high-low)*scale),'meshes':len(snapshots),'triangles':sum(len(p.vertices)-2 for _,mesh in snapshots for p in mesh.polygons)}))
