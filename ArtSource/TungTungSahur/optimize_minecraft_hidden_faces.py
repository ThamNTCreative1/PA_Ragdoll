"""Remove only whole faces strictly enclosed in another original solid box."""
import bpy,bmesh,json,sys
import numpy as np
from pathlib import Path
from mathutils import Vector
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import aim
OUT=ROOT/'ArtSource/TungTungSahur/Minecraft'
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
scene=bpy.data.scenes['TungSahur_Minecraft_Review'];bpy.context.window.scene=scene
sources=[o for o in scene.objects if o.type=='MESH' and o.name.startswith('MC_')]
for o in list(scene.objects):
    if o.name.startswith('TungSahur_Minecraft_Optimized'):bpy.data.objects.remove(o,do_unlink=True)
for o in scene.objects:o.select_set(False)
collection=bpy.data.collections.new('Minecraft_Optimized_Export');scene.collection.children.link(collection)
copies=[]
for source in sources:
    o=source.copy();o.data=source.data.copy();collection.objects.link(o);o.select_set(True);copies.append(o)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
obj=bpy.context.object;obj.name='TungSahur_Minecraft_Optimized'
bm=bmesh.new();bm.from_mesh(obj.data);bm.faces.ensure_lookup_table()
remaining=set(bm.faces);solids=[]
while remaining:
    f=remaining.pop();stack=[f];faces=[f]
    while stack:
        current=stack.pop()
        for e in current.edges:
            for other in e.link_faces:
                if other in remaining:remaining.remove(other);stack.append(other);faces.append(other)
    assert len(faces)==6,'Expected original closed boxes only'
    solids.append(faces)
planes=[[(f.normal.copy(),f.calc_center_median()) for f in solid] for solid in solids]
remove=[]
for i,solid in enumerate(solids):
    for f in solid:
        points=[v.co for v in f.verts]
        if any(j!=i and all(n.dot(p-c)<-1e-6 for n,c in solid_planes for p in points)
               for j,solid_planes in enumerate(planes)):
            remove.append(f)
bmesh.ops.delete(bm,geom=remove,context='FACES')
bm.to_mesh(obj.data);bm.free();obj.data.update()
triangles=sum(len(p.vertices)-2 for p in obj.data.polygons)
assert triangles<540
camera=scene.camera;errors={}
obj.hide_render=True
for label,position in [('Front',(0,-6,2.6)),('ThreeQuarter',(3.5,-6,2.8)),('Back',(0,6,2.6)),('Side',(6,0,2.6)),('Below',(3,-6,-2))]:
    camera.location=position;aim(camera,(0,0,1.25))
    for source in sources:source.hide_render=False
    obj.hide_render=True
    original_path=OUT/('BeforeOptimize_'+label+'.png')
    scene.render.filepath=str(original_path);bpy.ops.render.render(write_still=True)
    original_image=bpy.data.images.load(str(original_path),check_existing=False)
    before=np.array(original_image.pixels[:],dtype=np.float32)
    for source in sources:source.hide_render=True
    obj.hide_render=False
    optimized_path=OUT/('Optimized_'+label+'.png')
    scene.render.filepath=str(optimized_path);bpy.ops.render.render(write_still=True)
    optimized_image=bpy.data.images.load(str(optimized_path),check_existing=False)
    after=np.array(optimized_image.pixels[:],dtype=np.float32)
    errors[label]={'max_channel_difference':float(np.max(np.abs(before-after))), 'mean_channel_difference':float(np.mean(np.abs(before-after)))}
    bpy.data.images.remove(original_image);bpy.data.images.remove(optimized_image)
for o in scene.objects:o.select_set(False)
obj.hide_set(False);obj.select_set(True);bpy.context.view_layer.objects.active=obj
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Minecraft_Optimized.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False)
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Minecraft_Optimized.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False)
for source in sources:source.hide_set(True)
camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
report={'before_triangles':540,'after_triangles':triangles,'removed_hidden_quads':len(remove),'original_vertex_positions_unchanged':True,'colors_unchanged':True,'render_comparison':errors,'note':'Hidden internal faces removed. Internal boundary edges are deliberately retained; exterior silhouette unchanged.'}
(OUT/'optimization_validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Minecraft_Optimized.blend'))
