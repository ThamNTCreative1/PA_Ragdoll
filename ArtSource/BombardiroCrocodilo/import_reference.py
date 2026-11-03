"""Import the supplied Bombardiro reference into an isolated Blender scene."""
import bpy,sys,json
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import studio,aim
OUT=ROOT/'ArtSource'/'BombardiroCrocodilo'
scene=bpy.data.scenes.get('Bombardiro_Reference')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('Bombardiro_Reference')
bpy.context.window.scene=scene
bpy.ops.import_scene.gltf(filepath=str(OUT/'Reference'/'scene.gltf'))
meshes=[o for o in scene.objects if o.type=='MESH']
bpy.context.view_layer.update()
points=[o.matrix_world@v.co for o in meshes for v in o.data.vertices]
low=Vector(tuple(min(p[i] for p in points) for i in range(3)))
high=Vector(tuple(max(p[i] for p in points) for i in range(3)))
scale=3.6/max(high-low)
offset=Vector((-(low.x+high.x)/2,-(low.y+high.y)/2,-low.z))
normalise=Matrix.Scale(scale,4)@Matrix.Translation(offset)
transforms={o:normalise@o.matrix_world for o in meshes}
for o in meshes:
    o.parent=None;o.data=o.data.copy();o.data.transform(transforms[o]);o.matrix_world=Matrix.Identity(4)
for o in list(scene.objects):
    if o.type!='MESH':bpy.data.objects.remove(o,do_unlink=True)
height=(high.z-low.z)*scale
collection,camera=studio(scene,'Bombardiro_Reference',4.7)
for o in collection.objects:
    if o.type=='MESH':o.location.z=.03
scene.render.resolution_x=840;scene.render.resolution_y=630
camera.location=(4,-6,3.8);aim(camera,(0,0,height*.5))
scene.render.filepath=str(OUT/'Reference_ThreeQuarter.png');bpy.ops.render.render(write_still=True)
camera.location=(6,0,3);aim(camera,(0,0,height*.5))
scene.render.filepath=str(OUT/'Reference_Side.png');bpy.ops.render.render(write_still=True)
camera.location=(0,-6,3);aim(camera,(0,0,height*.5))
scene.render.filepath=str(OUT/'Reference_Front.png');bpy.ops.render.render(write_still=True)
print(json.dumps({'raw_dimensions':list(high-low),'normalised_dimensions':list((high-low)*scale),'meshes':len(meshes),'triangles':sum(len(p.vertices)-2 for o in meshes for p in o.data.polygons)}))
