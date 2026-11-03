"""Final closed-solid export and round-trip validation. No hidden-face draft."""
import bpy,bmesh,json,sys
from pathlib import Path
from mathutils import Vector
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import vertex_material,studio,aim
OUT=ROOT/'ArtSource/TungTungSahur/Minecraft/Final';OUT.mkdir(exist_ok=True)
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
source_scene=bpy.data.scenes['TungSahur_Minecraft_Review']
sources=[o for o in source_scene.objects if o.type=='MESH' and o.name.startswith('MC_')]
scene=bpy.data.scenes.get('TungSahur_Minecraft_Final')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Minecraft_Final')
bpy.context.window.scene=scene
copies=[]
for source in sources:
    o=source.copy();o.data=source.data.copy();scene.collection.objects.link(o)
    o.hide_render=False;o.hide_set(False);o.select_set(True);copies.append(o)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
model=bpy.context.object;model.name='TungSahur_Minecraft_Final'
def validate(mesh):
    bm=bmesh.new();bm.from_mesh(mesh)
    bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
    boundary=sum(e.is_boundary for e in bm.edges)
    nonmanifold=sum(not e.is_manifold for e in bm.edges)
    zero=sum(f.calc_area()<1e-12 for f in bm.faces)
    remaining=set(bm.faces);inverted=0;components=0
    while remaining:
        seed=remaining.pop();stack=[seed];faces=[seed]
        while stack:
            f=stack.pop()
            for edge in f.edges:
                for other in edge.link_faces:
                    if other in remaining:remaining.remove(other);stack.append(other);faces.append(other)
        volume=sum(f.calc_area()*f.normal.dot(f.calc_center_median()) for f in faces)/3
        if volume<0:inverted+=1
        components+=1
    bm.free()
    report={'triangles':sum(len(p.vertices)-2 for p in mesh.polygons),'closed_components':components,'boundary_edges':boundary,'nonmanifold_edges':nonmanifold,'zero_area_faces':zero,'inverted_components':inverted,'color_attributes':[a.name for a in mesh.color_attributes]}
    assert report['triangles']==540 and boundary==nonmanifold==zero==inverted==0,report
    assert len(mesh.color_attributes)>0,report
    return report
report={'export_mesh':validate(model.data)}
for p in model.data.polygons:p.use_smooth=False
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Minecraft_Final.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False)
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Minecraft_Final.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False)
# Validate both serialized deliverables by importing their actual saved files.
for fmt in ['fbx','glb']:
    check_scene=bpy.data.scenes.new('TungSahur_Final_Check_'+fmt);bpy.context.window.scene=check_scene
    path=str(EXPORT/('TungSahur_Minecraft_Final.'+fmt))
    if fmt=='fbx':bpy.ops.import_scene.fbx(filepath=path)
    else:bpy.ops.import_scene.gltf(filepath=path)
    imported=next(o for o in check_scene.objects if o.type=='MESH')
    report[fmt]=validate(imported.data)
    if fmt=='fbx':
        imported.data.materials.clear();check_material=vertex_material('Final_VertexColor_Check');check_material.use_backface_culling=True;imported.data.materials.append(check_material)
        bpy.context.view_layer.update()
        imported.data.transform(imported.matrix_world);imported.parent=None;imported.matrix_world.identity()
        check_studio,camera=studio(check_scene,'Final_FBX_Check',3.7)
        check_scene.render.resolution_x=630;check_scene.render.resolution_y=720
        for label,position in [('Front',(0,-6,2.6)),('Back',(0,6,2.6)),('Side',(6,0,2.6)),('Below',(3,-6,-2))]:
            for studio_object in check_studio.objects:
                if studio_object.type=='MESH':studio_object.hide_render=label=='Below'
            camera.location=position;aim(camera,(0,0,1.25));check_scene.render.filepath=str(OUT/('FBX_'+label+'.png'));bpy.ops.render.render(write_still=True)
bpy.context.window.scene=scene
studio_collection,camera=studio(scene,'Final_Minecraft',3.7)
scene.render.resolution_x=720;scene.render.resolution_y=840
camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
scene.render.filepath=str(OUT/'TungSahur_Final_Preview.png');bpy.ops.render.render(write_still=True)
for o in studio_collection.objects:o.hide_set(True)
for o in scene.objects:o.select_set(False)
model.select_set(True);bpy.context.view_layer.objects.active=model
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.25));area.spaces.active.region_3d.view_distance=5.;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Minecraft_Final.blend'))
(OUT/'final_validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
