"""Block-built Minecraft interpretation of the supplied Eks.Art character."""
import bpy,sys,json,bmesh
from pathlib import Path
from mathutils import Vector
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource/Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim
OUT=ROOT/'ArtSource/TungTungSahur/Minecraft';OUT.mkdir(exist_ok=True)
EXPORT=ROOT/'Assets/01 RESOURCES/TungTungSahur'
scene=bpy.data.scenes.get('TungSahur_Minecraft_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Minecraft_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('TungSahur_Minecraft_Parts');scene.collection.children.link(collection)
mat=vertex_material('TungSahur_Minecraft_Palette');parts=[];boxes=0
wood='98703f';light='ae8350';dark='76532f';grain='876139'
def build(name,specs):
    global boxes
    g=Geometry(name)
    for center,size,color,*rotation in specs:
        g.box(center,size,color,rotation[0] if rotation else None);boxes+=1
    o=g.object(collection,mat,repair_normals=True)
    for p in o.data.polygons:p.use_smooth=False
    parts.append(o);return o
def beam_spec(a,b,width,depth,color):
    a,b=Vector(a),Vector(b)
    return ((a+b)*.5,(width,depth,(b-a).length),color,(b-a).to_track_quat('Z','Y'))
build('MC_Log_Body', [((0,0,1.68),(.58,.49,1.64),wood),
                      ((0,0,2.504),(.582,.492,.018),'c6a06b')])
# Small flat grain pixels on the lower trunk, avoiding the facial area.
build('MC_Wood_Grain', [((x,-.247,z),(.013,.006,length),grain)
                       for x,z,length in [(-.22,1.20,.48),(-.10,1.34,.31),(.03,1.08,.36),(.15,1.29,.50),(.24,1.02,.21)]])
for s,label in [(-1,'L'),(1,'R')]:
    build('MC_Eye_'+label,[((s*.15,-.259,2.085),(.219,.045,.247),dark),
                          ((s*.15,-.293,2.085),(.165,.039,.177),'e8dfbf'),
                          ((s*.15,-.316,2.077),(.089,.014,.100),'776c4b'),
                          ((s*.15,-.326,2.077),(.050,.012,.064),'272925'),
                          ((s*.15-.014,-.334,2.100),(.019,.006,.020),'fff8e3')])
    build('MC_Brow_'+label,[beam_spec((s*.045,-.270,2.254),(s*.14,-.270,2.287),.044,.037,'39302a'),
                            beam_spec((s*.14,-.270,2.287),(s*.25,-.270,2.251),.044,.037,'39302a')])
    build('MC_Lower_Eye_Bag_'+label,[((s*.16,-.271,1.953),(.211,.069,.058),light),
                                   ((s*.19,-.261,1.915),(.172,.052,.036),wood)])
    build('MC_UpperArm_'+label,[beam_spec((s*.307,0,1.65),(s*.355,-.015,1.27),.099,.111,wood)])
    build('MC_Forearm_'+label,[beam_spec((s*.355,-.015,1.28),(s*.397,-.065,.93),.077,.088,light)])
    build('MC_Hand_'+label,[((s*.400,-.075,.872),(.100,.100,.135),wood)])
    build('MC_Leg_'+label,[beam_spec((s*.158,0,.91),(s*.16,-.008,.12),.104,.117,wood)])
    build('MC_Foot_'+label,[((s*.16,-.074,.064),(.169,.271,.128),wood)])
build('MC_Nose',[((0,-.276,2.060),(.066,.084,.260),light),
                 ((0,-.321,1.912),(.127,.151,.096),light)])
# Five broad steps read as a smile in a pixel face, rather than a curved tube.
build('MC_Smile',[((0,-.252,1.721),(.211,.013,.029),'51351e'),
                  ((-.133,-.252,1.745),(.064,.013,.031),'51351e'),
                  ((.133,-.252,1.745),(.064,.013,.031),'51351e'),
                  ((-.181,-.252,1.780),(.033,.013,.051),'51351e'),
                  ((.181,-.252,1.780),(.033,.013,.051),'51351e')])
start=Vector((-.4,-.084,.87));end=Vector((-.65,-.40,.075));delta=end-start
build('MC_Bat',[beam_spec(start,start+delta*.38,.055,.059,light),
                beam_spec(start+delta*.36,start+delta*.70,.101,.105,light),
                beam_spec(start+delta*.68,end,.151,.155,light)])
studio_collection,camera=studio(scene,'TungSahur_Minecraft',3.7)
scene.render.resolution_x=720;scene.render.resolution_y=840
for label,position in [('ThreeQuarter',(3.5,-6,2.8)),('Front',(0,-6,2.6)),('Back',(0,6,2.6))]:
    camera.location=position;aim(camera,(0,0,1.25));scene.render.filepath=str(OUT/('Minecraft_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.22;camera.location=(.7,-6,2.65);aim(camera,(0,-.18,2.04))
scene.render.filepath=str(OUT/'Minecraft_Face.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.7;camera.location=(3.5,-6,2.8);aim(camera,(0,0,1.25))
for o in scene.objects:o.select_set(False)
copies=[]
for part in parts:
    o=part.copy();o.data=part.data.copy();collection.objects.link(o);o.select_set(True);copies.append(o)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
combined=bpy.context.object;combined.name='TungSahur_Minecraft'
bm=bmesh.new();bm.from_mesh(combined.data)
boundary=sum(e.is_boundary for e in bm.edges);nonmanifold=sum(not e.is_manifold for e in bm.edges)
zero=sum(f.calc_area()<1e-12 for f in bm.faces);bm.free()
triangles=sum(len(p.vertices)-2 for p in combined.data.polygons)
assert triangles<980 and boundary==nonmanifold==zero==0,(triangles,boundary,nonmanifold,zero)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Minecraft.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False)
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Minecraft.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False)
combined.hide_render=True;combined.hide_set(True)
for o in studio_collection.objects:o.hide_set(True)
for o in scene.objects:o.select_set(False)
parts[0].select_set(True);bpy.context.view_layer.objects.active=parts[0]
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.25));area.spaces.active.region_3d.view_distance=5.;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Minecraft.blend'))
report={'triangles':triangles,'boxes':boxes,'materials':1,'textures':0,'flat_shading':True,'boundary_edges':boundary,'nonmanifold_edges':nonmanifold,'zero_area_faces':zero,'status':'Minecraft shape review before idle'}
(OUT/'validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report))
