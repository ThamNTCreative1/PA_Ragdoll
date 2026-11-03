"""Tung Tung Sahur: static block-style wooden character for shape approval."""
import bpy,sys,math,json,bmesh,shutil
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim
OUT=ROOT/'ArtSource'/'TungTungSahur'/'Review'
EXPORT=ROOT/'Assets'/'01 RESOURCES'/'TungTungSahur'
OUT.mkdir(parents=True,exist_ok=True);EXPORT.mkdir(parents=True,exist_ok=True)
scene=bpy.data.scenes.get('TungSahur_Voxel_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Voxel_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('TungSahur_Editable');scene.collection.children.link(collection)
mat=vertex_material('TungSahur_Palette');parts=[]
wood='b88b63';light='cca17a';dark='996b48';endgrain='d8b38b'
def finish(g):
    o=g.object(collection,mat,repair_normals=True);parts.append(o);return o
def section(width,depth,z,bevel=.025,x=0,y=0):
    w=width/2;d=depth/2;b=min(bevel,w*.6,d*.6)
    return [Vector((x+a,y+c,z)) for a,c in [(-w+b,-d),(w-b,-d),(w,-d+b),
            (w,d-b),(w-b,d),(-w+b,d),(-w,d-b),(-w,-d+b)]]
def loft(g,rings,colour,top=None):
    for a,b in zip(rings,rings[1:]):
        for i in range(len(a)):
            j=(i+1)%len(a);g.face([a[i],a[j],b[j],b[i]],colour)
    g.face(list(reversed(rings[0])),colour);g.face(rings[-1],top or colour)

body=Geometry('20_Continuous_Wooden_Log')
loft(body,[section(.60,.44,1.00),section(.64,.46,1.10),
           section(.64,.46,2.43),section(.60,.44,2.50)],wood,endgrain)
# Long restrained bark/grain bands: no separate texture or material.
for i,x in enumerate([-.252,-.168,-.082,.012,.104,.208]):
    height=[1.25,1.37,1.30,1.39,1.27,1.33][i]
    width=[.035,.027,.046,.033,.025,.039][i]
    for side in [-1,1]:
        body.box((x,side*.231,1.755),(width,.004,height),light if i%2==0 else dark)
for side in [-1,1]:
    for i,y in enumerate([-.15,-.045,.07,.155]):
        body.box((side*.321,y,1.76),(.004,.025 if i%2 else .038,1.30),dark if i%2 else light)
for i,x in enumerate([-.22,-.10,.035,.17]):
    body.box((x,0,2.502),(.022,.35,.004),light if i%2 else dark)
# Short off-centre grain marks avoid a uniformly striped appearance.
for x,z in [(-.21,1.20),(.20,1.42),(-.08,1.34),(.11,2.39)]:
    body.box((x,-.234,z),(.023,.004,.10),dark)
finish(body)

eyes=Geometry('21_Large_Expressive_Eyes')
for side in [-1,1]:
    x=side*.156
    eyes.box((x,-.248,2.105),(.204,.040,.234),dark)
    eyes.box((x,-.273,2.104),(.173,.025,.190),'e9dec7')
    eyes.box((x-side*.012,-.291,2.098),(.086,.012,.153),'65503b')
    eyes.box((x-side*.012,-.299,2.103),(.052,.007,.125),'2d2924')
    eyes.box((x-side*.028,-.305,2.149),(.022,.004,.027),'fff9e9')
    # Heavy upper lids and separate lower cheek planes.
    eyes.box((x,-.302,2.203),(.188,.030,.040),'8a603f')
    eyes.box((x,-.283,1.987),(.215,.073,.057),light,Matrix.Rotation(math.radians(side*7),3,'Y'))
finish(eyes)

brows=Geometry('22_Heavy_Wooden_Eyebrows')
for side in [-1,1]:
    brows.box((side*.158,-.277,2.303),(.274,.104,.085),light,Matrix.Rotation(math.radians(side*7),3,'Y'))
    brows.box((side*.158,-.317,2.263),(.255,.022,.027),dark,Matrix.Rotation(math.radians(side*7),3,'Y'))
finish(brows)

nose=Geometry('23_Long_Faceted_Nose')
loft(nose,[section(.145,.11,1.906,.012,y=-.380),
           section(.092,.09,2.015,.010,y=-.339),
           section(.057,.05,2.197,.008,y=-.266)],light)
for side in [-1,1]:
    nose.box((side*.043,-.436,1.927),(.026,.006,.014),'62442d')
finish(nose)

mouth=Geometry('24_Small_Smiling_Mouth')
mouth.box((0,-.245,1.763),(.278,.025,.140),'a67850')
mouth.box((0,-.266,1.773),(.196,.018,.039),'3a2d22')
mouth.box((-.107,-.267,1.795),(.034,.018,.032),'3a2d22')
mouth.box((.107,-.267,1.795),(.034,.018,.032),'3a2d22')
mouth.box((0,-.268,1.727),(.164,.012,.025),light)
finish(mouth)

for side,label in [(-1,'L'),(1,'R')]:
    leg=Geometry('25_Leg_'+label)
    loft(leg,[section(.135,.145,.11,.014,x=side*.18),section(.135,.145,.48,.014,x=side*.18),
              section(.145,.155,.59,.018,x=side*.18),section(.135,.145,1.045,.014,x=side*.18)],wood)
    leg.box((side*.18,-.088,.55),(.156,.034,.11),light)
    leg.box((side*.151,-.075,.77),(.023,.007,.31),dark)
    leg.box((side*.201,-.075,.28),(.020,.007,.25),light)
    finish(leg)
    foot=Geometry('26_Block_Foot_'+label)
    loft(foot,[section(.226,.345,0,.018,x=side*.19,y=-.090),
               section(.226,.345,.085,.018,x=side*.19,y=-.090),
               section(.160,.210,.135,.012,x=side*.18,y=-.025)],wood)
    foot.box((side*.19,-.232,.088),(.168,.041,.008),light)
    foot.box((side*.19,-.10,.139),(.026,.12,.006),dark)
    finish(foot)

for side,label in [(-1,'L'),(1,'R')]:
    arm=Geometry('27_UpperArm_'+label)
    shoulder=Vector((side*.390,0,1.60));elbow=Vector((side*.395,-.018,1.17))
    arm.beam(shoulder,elbow,.116,.124,wood)
    arm.box(shoulder,(.150,.155,.145),light)
    finish(arm)
    forearm=Geometry('28_Forearm_'+label)
    wrist=Vector((side*.395,-.285,.88)) if side<0 else Vector((side*.402,-.045,.76))
    forearm.beam(elbow,wrist,.100,.107,wood)
    forearm.box(elbow,(.124,.132,.128),light)
    finish(forearm)
    hand=Geometry('29_Hand_'+label)
    hand.box(wrist,(.143,.143,.142),wood)
    if side<0:
        hand.box((wrist.x,-.364,wrist.z),(.105,.031,.116),light)
        hand.box((wrist.x+.083,wrist.y-.018,wrist.z-.012),(.041,.084,.073),light)
    else:
        for dx in [-.037,0,.037]:
            hand.box((wrist.x+dx,wrist.y-.010,wrist.z-.076),(.030,.105,.038),light)
    finish(hand)

bat=Geometry('30_Wooden_Bat')
# Bat extends forward from the closed hand, with a slim handle and broad barrel.
bat.beam((-.395,-.20,.88),(-.395,-.53,.875),.063,.063,'8e5d39')
bat.box((-.395,-.195,.88),(.090,.042,.090),dark)
bat.beam((-.395,-.51,.875),(-.395,-.65,.865),.10,.10,wood)
bat.beam((-.395,-.62,.865),(-.395,-1.12,.825),.148,.148,wood)
bat.box((-.395,-1.127,.825),(.143,.020,.143),endgrain)
bat.beam((-.426,-.66,.92),(-.426,-1.08,.885),.018,.009,light)
finish(bat)

studio_collection,camera=studio(scene,'TungSahur_Voxel',3.7)
for o in studio_collection.objects:
    if o.type=='MESH':o.location.z=.03
scene.render.resolution_x=630;scene.render.resolution_y=720
for label,location in [('ThreeQuarter',(3.5,-6,3)),('Front',(0,-6,2.8)),
                       ('Side',(6,0,2.8)),('Back',(3,6,3))]:
    camera.location=location;aim(camera,(0,-.15,1.25))
    scene.render.filepath=str(OUT/('TungSahur_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.45;camera.location=(1.5,-6,2.9);aim(camera,(0,-.23,2.10))
scene.render.filepath=str(OUT/'TungSahur_Face.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.7;camera.location=(3.5,-6,3);aim(camera,(0,-.15,1.25))
for o in scene.objects:o.select_set(False)
copies=[]
for source in parts:
    o=source.copy();o.data=source.data.copy();collection.objects.link(o);o.select_set(True);copies.append(o)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
combined=bpy.context.object;combined.name='TungSahur_Voxel_Model'
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Voxel.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Voxel.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False,path_mode='RELATIVE')
bm=bmesh.new();bm.from_mesh(combined.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
remaining=set(bm.faces);closed=0;inverted=0;opened=0
while remaining:
    f=remaining.pop();stack=[f];component=[f]
    while stack:
        a=stack.pop()
        for e in a.edges:
            for n in e.link_faces:
                if n in remaining:remaining.remove(n);stack.append(n);component.append(n)
    if all(len(e.link_faces)==2 for a in component for e in a.edges):
        closed+=1
        if sum(a.calc_area()*a.normal.dot(a.calc_center_median()) for a in component)<-1e-9:inverted+=1
    else:opened+=1
zero=sum(f.calc_area()<1e-12 for f in bm.faces)
bm.free();assert inverted==0 and opened==0 and zero==0
metrics={'triangles':sum(len(p.vertices)-2 for p in combined.data.polygons),'materials':len(combined.data.materials),'textures':0,'editable_parts':len(parts),'closed_components':closed,'inverted_components':inverted,'open_components':opened,'status':'Static shape review before idle'}
(OUT/'validation.json').write_text(json.dumps(metrics,indent=2))
shutil.copy2(OUT.parent/'Reference'/'license.txt',EXPORT/'license.txt')
combined.hide_render=True;combined.hide_set(True)
for o in studio_collection.objects:o.hide_set(True)
for o in scene.objects:o.select_set(False)
parts[0].select_set(True);bpy.context.view_layer.objects.active=parts[0]
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,-.15,1.25))
        area.spaces.active.region_3d.view_distance=5.3;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_Voxel_Review.blend'))
print(json.dumps(metrics))
