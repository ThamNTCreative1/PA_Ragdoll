"""Static Bombardiro review: block crocodile bomber, one vertex-colour material."""
import bpy,sys,math,json,shutil,bmesh
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim
OUT=ROOT/'ArtSource'/'BombardiroCrocodilo'/'Review'
EXPORT=ROOT/'Assets'/'01 RESOURCES'/'BombardiroCrocodilo'
OUT.mkdir(parents=True,exist_ok=True);EXPORT.mkdir(parents=True,exist_ok=True)
scene=bpy.data.scenes.get('Bombardiro_Voxel_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('Bombardiro_Voxel_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Bombardiro_Editable');scene.collection.children.link(collection)
mat=vertex_material('Bombardiro_Palette');parts=[]
green='66734a';light='83905b';dark='465335';belly='b4a476'
def finish(g):
    obj=g.object(collection,mat,repair_normals=True);parts.append(obj);return obj
def cross_y(width,height,y,z):
    w,h=width/2,height/2;b=min(.045,w*.35,h*.35)
    return [Vector((x,y,z+v)) for x,v in [(-w+b,-h),(w-b,-h),(w,-h+b),
            (w,h-b),(w-b,h),(-w+b,h),(-w,h-b),(-w,-h+b)]]
def fuselage(g,sections,colour):
    rings=[cross_y(*s) for s in sections]
    for a,b in zip(rings,rings[1:]):
        for i in range(8):
            j=(i+1)%8;g.face([a[i],a[j],b[j],b[i]],colour)
    g.face(list(reversed(rings[0])),colour);g.face(rings[-1],colour)
def slab(g,outline,low,high,colour):
    a=[Vector((x,y,low)) for x,y in outline];b=[Vector((x,y,high)) for x,y in outline]
    g.face(list(reversed(a)),colour);g.face(b,colour)
    for i in range(len(a)):
        j=(i+1)%len(a);g.face([a[i],a[j],b[j],b[i]],colour)

body=Geometry('10_Crocodile_Fuselage')
fuselage(body,[(.36,.30,-.68,.64),(.50,.43,-.35,.64),
               (.50,.43,.45,.64),(.40,.32,1.05,.67),(.20,.20,1.54,.72)],green)
body.box((0,.13,.426),(.35,1.18,.018),belly)
# Broad, restrained pixel camouflage instead of a texture map.
for x,y,w,d,c in [(-.13,-.30,.16,.18,light),(.105,-.08,.15,.25,dark),
                  (-.10,.20,.18,.16,dark),(.12,.42,.17,.22,light),
                  (-.09,.65,.16,.20,light),(0,.88,.18,.15,dark)]:
    top=.855 if y<.45 else .855-(y-.45)*.13
    body.box((x,y,top+.003),(w,d,.008),c)
for side in [-1,1]:
    for y,z,c in [(-.22,.61,dark),(.16,.73,light),(.40,.55,dark)]:
        body.box((side*.251,y,z),(.008,.22,.07),c)
finish(body)

head=Geometry('11_Long_Crocodile_Head')
head.box((0,-.80,.66),(.37,.37,.28),green)
head.box((0,-1.32,.658),(.30,.77,.19),green)
head.box((0,-1.67,.69),(.33,.14,.22),light)
head.box((0,-1.30,.455),(.30,.80,.12),belly)
head.box((0,-.86,.46),(.36,.32,.15),belly)
# Dark open mouth visible between the jaws.
head.box((0,-1.29,.532),(.265,.81,.034),'393c2b')
for side in [-1,1]:
    head.box((side*.145,-1.32,.565),(.012,.73,.020),dark)
    # Low eye brows and gold, forward-looking crocodile eyes on both sides.
    head.box((side*.137,-.84,.82),(.105,.20,.055),light)
    head.box((side*.193,-.872,.756),(.016,.126,.078),dark)
    head.box((side*.204,-.892,.761),(.009,.083,.047),'d7b94f')
    head.box((side*.211,-.908,.763),(.006,.018,.047),'252b24')
    head.box((side*.215,-.921,.778),(.004,.012,.012),'fff7d7')
    head.box((side*.084,-1.675,.807),(.062,.062,.018),dark)
    head.box((side*.084,-1.69,.818),(.025,.033,.006),'272d24')
for x,y,w,d,c in [(-.06,-1.10,.14,.15,light),(.065,-1.35,.12,.16,dark),
                  (-.06,-1.52,.10,.10,light)]:
    head.box((x,y,.756),(w,d,.008),c)
finish(head)

teeth=Geometry('12_Individual_White_Teeth')
for side in [-1,1]:
    for i in range(7):
        y=-.995-i*.103
        teeth.box((side*.147,y,.553),(.030,.034,.075),'f4ecd8')
        if i<6:teeth.box((side*.145,y-.05,.523),(.026,.029,.056),'e6dcc1')
finish(teeth)

wing=Geometry('13_Main_Wings')
for side in [-1,1]:
    slab(wing,[(side*.19,-.33),(side*1.72,-.26),(side*1.72,.18),(side*.19,.23)],.655,.75,green)
    for x,y,w,d,c in [(.42,-.12,.30,.19,light),(.81,.02,.27,.16,dark),
                      (1.14,-.14,.20,.17,light),(1.48,.05,.25,.16,dark)]:
        wing.box((side*x,y,.754),(w,d,.008),c)
    wing.box((side*1.68,-.04,.762),(.063,.32,.018),light)
finish(wing)

for side in [-1,1]:
    for index,x in enumerate([.66,1.30]):
        engine=Geometry('14_Engine_'+('L' if side<0 else 'R')+str(index+1))
        fuselage(engine,[(.28,.28,-.47,.525),(.32,.32,-.38,.525),
                         (.32,.32,.16,.525),(.25,.26,.24,.525)],green)
        # Translate the engine cross sections to their spanwise positions.
        engine.vertices=[(px+side*x,py,pz) for px,py,pz in engine.vertices]
        engine.box((side*x,-.481,.525),(.245,.024,.245),'394437')
        engine.box((side*x,-.498,.525),(.084,.020,.084),belly)
        engine.box((side*x,.245,.525),(.16,.014,.16),dark)
        engine.box((side*(x+.165),-.05,.53),(.008,.23,.12),dark)
        finish(engine)
        rotor=Geometry('15_Propeller_'+('L' if side<0 else 'R')+str(index+1))
        hub=Vector((side*x,-.526,.525))
        rotor.box(hub,(.075,.060,.075),'b6a16d')
        phase=(index*.7)+(0 if side<0 else .25)
        for i in range(3):
            angle=phase+i*math.tau/3
            direction=Vector((math.cos(angle),0,math.sin(angle)))
            rotor.beam(hub+direction*.035,hub+direction*.18,.036,.022,'30382e')
            rotor.beam(hub+direction*.15,hub+direction*.186,.038,.024,'dfbd54')
        finish(rotor)

tail=Geometry('16_Tail_And_Rudder')
for side in [-1,1]:
    slab(tail,[(side*.09,1.15),(side*.92,1.25),(side*.92,1.40),(side*.07,1.41)],.74,.80,green)
    tail.box((side*.72,1.32,.804),(.23,.10,.009),light)
# Stepped upright tail fin, matching the supplied bomber silhouette.
tail.profile([(1.06,.78),(1.50,.78),(1.65,1.23),(1.53,1.23),
              (1.34,1.02),(1.25,1.02)],.105,green)
tail.box((0,1.53,1.215),(.112,.14,.035),light)
finish(tail)

scutes=Geometry('17_Dorsal_Crocodile_Scales')
for y in [-.32,-.10,.12,.34,.56,.78,.98]:
    base=.857 if y<.45 else .857-(y-.45)*.13
    for x in [-.145,.145]:
        # Low stepped ridges read as crocodile scales at playable-ad scale.
        scutes.box((x,y,base+.024),(.050,.10,.045),light)
finish(scutes)

studio_collection,camera=studio(scene,'Bombardiro_Voxel',4.55)
for obj in studio_collection.objects:
    if obj.type=='MESH':obj.location.z=.03
scene.render.resolution_x=840;scene.render.resolution_y=630
for label,location,target in [
    ('ThreeQuarter',(4,-6,3.7),(0,0,.72)),('Side',(6,0,2.3),(0,0,.72)),
    ('Front',(0,-6,2.2),(0,0,.72)),('Back',(3,6,3.2),(0,0,.72))]:
    camera.location=location;aim(camera,target)
    scene.render.filepath=str(OUT/('Bombardiro_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.location=(4,-6,3.7);aim(camera,(0,0,.72))
for obj in scene.objects:obj.select_set(False)
copies=[]
for source in parts:
    obj=source.copy();obj.data=source.data.copy();collection.objects.link(obj);obj.select_set(True);copies.append(obj)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
combined=bpy.context.object;combined.name='Bombardiro_Voxel_Model'
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Bombardiro_Voxel.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Bombardiro_Voxel.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False,path_mode='RELATIVE')
bm=bmesh.new();bm.from_mesh(combined.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
assert not any(f.calc_area()<1e-12 for f in bm.faces)
remaining=set(bm.faces);inverted=0;closed=0
while remaining:
    face=remaining.pop();stack=[face];component=[face]
    while stack:
        f=stack.pop()
        for e in f.edges:
            for other in e.link_faces:
                if other in remaining:remaining.remove(other);stack.append(other);component.append(other)
    if all(len(e.link_faces)==2 for f in component for e in f.edges):
        closed+=1
        if sum(f.calc_area()*f.normal.dot(f.calc_center_median()) for f in component)<-1e-9:inverted+=1
bm.free();assert inverted==0
metrics={'triangles':sum(len(p.vertices)-2 for p in combined.data.polygons),'materials':len(combined.data.materials),'textures':0,'editable_parts':len(parts),'closed_components':closed,'inverted_components':inverted,'status':'Static review; wait for user approval before idle'}
(OUT/'validation.json').write_text(json.dumps(metrics,indent=2))
shutil.copy2(OUT.parent/'Reference'/'license.txt',EXPORT/'license.txt')
combined.hide_render=True;combined.hide_set(True)
for obj in studio_collection.objects:obj.hide_set(True)
for obj in scene.objects:obj.select_set(False)
parts[0].select_set(True);bpy.context.view_layer.objects.active=parts[0]
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,.72))
        area.spaces.active.region_3d.view_distance=5.4;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Bombardiro_Voxel_Review.blend'))
print(json.dumps(metrics))
