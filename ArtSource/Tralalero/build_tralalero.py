"""Reference-led rebuild of Tralalero. Editable meshes and one skinned idle export."""
import bpy
import math
import random
import sys
import json
from pathlib import Path
from mathutils import Vector, Euler

WORKSPACE=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(WORKSPACE/'ArtSource'/'Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim

OUT=WORKSPACE/'ArtSource'/'Tralalero'
EXPORT=WORKSPACE/'Assets'/'01 RESOURCES'/'Tralalero'
OUT.mkdir(parents=True,exist_ok=True);EXPORT.mkdir(parents=True,exist_ok=True)
NAME='Tralalero_Review'
scene=bpy.data.scenes.get(NAME)
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new(NAME)
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Tralalero_Editable');scene.collection.children.link(collection)
mat=vertex_material('Tralalero_Palette')
parts=[]


def finish(geometry):
    obj=geometry.object(collection,mat);parts.append(obj);return obj


# Body sections: -Y snout to +Y tail, with a narrow nose and tapering rear body.
# Each section is (Y, half width, belly bottom, white/blue split, back top).
sections=[(-2.06,.105,1.40,1.47,1.61),(-1.58,.42,1.16,1.33,1.75),
          (-.95,.47,1.03,1.20,1.72),(-.20,.46,.97,1.15,1.61),
          (.45,.35,1.02,1.18,1.49),(.92,.22,1.08,1.22,1.37),(1.40,.12,1.13,1.22,1.29)]
body=Geometry('01_Shark_Body')
rings=[]
for y,w,bottom,split,top in sections:
    bevel=min(.10,w*.4)
    rings.append([Vector(p) for p in [(-w,y,split),(-w,y,top-bevel),(-w+bevel,y,top),
                 (w-bevel,y,top),(w,y,top-bevel),(w,y,split),(w*.78,y,bottom),(-w*.78,y,bottom)]])
colors=['607a9f','7e98b8','7594b8','6f8eaf','607a9f','dddcd2','e4e2d7','dddcd2']
for a,b in zip(rings,rings[1:]):
    for i,color in enumerate(colors):body.face([a[i],a[(i+1)%8],b[(i+1)%8],b[i]],color)
body.face(rings[0],'596d91');body.face(rings[-1],'637f9f')
finish(body)


def section_at(y):
    for a,b in zip(sections,sections[1:]):
        if a[0]<=y<=b[0]:
            t=(y-a[0])/(b[0]-a[0]);return tuple(a[i]*(1-t)+b[i]*t for i in range(1,5))
    return sections[0][1:] if y<sections[0][0] else sections[-1][1:]


# Pixel patches are geometry/vertex colours, sharing the single material.
pixels=Geometry('02_Blue_Pixel_Pattern')
rng=random.Random(194)
palette=['6d87aa','536c91','8199b5','6887ab','8da3bf']
for s in [-1,1]:
    for i in range(15):
        y0=-1.56+i*.185;y1=min(1.24,y0+rng.choice([.12,.19,.27]))
        w0,b0,z0,t0=section_at(y0);w1,b1,z1,t1=section_at(y1)
        low=rng.choice([.02,.24,.48]);high=min(.95,low+rng.choice([.18,.30,.40]))
        p=[(s*(w0+.003),y0,z0+(t0-.10-z0)*low),(s*(w1+.003),y1,z1+(t1-.10-z1)*low),
           (s*(w1+.003),y1,z1+(t1-.10-z1)*high),(s*(w0+.003),y0,z0+(t0-.10-z0)*high)]
        pixels.face(p,rng.choice(palette))
for i in range(9):
    y0=-1.48+i*.29;y1=min(1.25,y0+.18)
    w0,_,_,z0=section_at(y0);w1,_,_,z1=section_at(y1)
    x0=rng.uniform(-.17,.08);x1=x0+.13
    if max(abs(x0),abs(x1))<min(w0,w1)-.10:
        pixels.face([(x0,y0,z0+.003),(x1,y0,z0+.003),(x1,y1,z1+.003),(x0,y1,z1+.003)],rng.choice(palette))
finish(pixels)

face=Geometry('03_Eyes_Gills_Mouth')


def jaw_point(side,y,height,offset=.006):
    width,bottom,split,_=section_at(y)
    return (side*(width*(.78+.22*height)+offset),y,bottom+(split-bottom)*height)


def jaw_patch(side,y0,y1,h0,h1,color,offset=.006):
    face.face([jaw_point(side,y0,h0,offset),jaw_point(side,y1,h0,offset),
               jaw_point(side,y1,h1,offset),jaw_point(side,y0,h1,offset)],color)


for s in [-1,1]:
    w,_,_,_=section_at(-1.18)
    face.box((s*(w+.012),-1.18,1.49),(.024,.085,.091),'111c25')
    face.box((s*(w+.026),-1.204,1.517),(.009,.020,.019),'dbe2d9')
    for y in [-.62,-.43,-.24]:
        w,_,split,top=section_at(y)
        face.box((s*(w+.014),y,(split+top-.1)/2),(.023,.035,.25),'293f60',Euler((-.14,0,0)).to_quaternion())
    # Dark mouth makes both rows of small stepped white teeth readable.
    for y0,y1 in [(-1.88,-1.58),(-1.58,-.95),(-.95,-.75)]:
        jaw_patch(s,y0,y1,.08,1.0,'243044')
    for i in range(7):
        y=-1.79+i*.153
        jaw_patch(s,y-.047,y+.047,.65,1.0,'fff8df',.011)
        jaw_patch(s,y-.022,y+.022,.46,.65,'fff8df',.011)
        lower=y+.066
        jaw_patch(s,lower-.038,lower+.038,.08,.36,'ececda',.012)
        jaw_patch(s,lower-.018,lower+.018,.36,.51,'ececda',.012)
face.box((-.045,-2.067,1.55),(.025,.012,.022),'334c6c');face.box((.045,-2.067,1.55),(.025,.012,.022),'334c6c')
finish(face)

dorsal=Geometry('04_Dorsal_Fin')
dorsal.profile([(-.38,1.67),(-.20,1.89),(-.11,1.89),(-.11,2.06),(.01,2.06),
                (.01,2.27),(.25,2.27),(.25,2.10),(.39,2.10),(.39,1.88),(.57,1.88),(.57,1.54)],.13,'617fa4')
for s in [-1,1]:
    dorsal.face([(s*.068,-.04,2.04),(s*.068,.13,2.04),(s*.068,.13,2.22),(s*.068,.01,2.22)],'829bbb')
finish(dorsal)

tail=Geometry('05_Forked_Tail')
tail.profile([(1.28,1.14),(1.58,1.14),(1.91,.63),(2.10,.63),(2.10,.80),(1.83,1.24),
              (2.17,1.85),(2.05,2.00),(1.90,1.85),(1.55,1.35),(1.28,1.32)],.13,'627e9f')
tail.beam((0,1.76,1.21),(0,2.08,1.80),.141,.075,'e5e3d7')
tail.beam((0,1.67,1.13),(0,1.96,.69),.142,.075,'deddd4')
finish(tail)

for s,label in [(-1,'L'),(1,'R')]:
    fin=Geometry('06_Pelvic_Fin_'+label)
    fin.beam((s*.25,.69,1.18),(s*.43,.96,.94),.16,.25,'607b9f')
    fin.box((s*.43,.96,.94),(.17,.25,.07),'3f5b80')
    finish(fin)

for s,label in [(-1,'L'),(1,'R')]:
    leg=Geometry('07_Foreleg_'+label)
    leg.beam((s*.39,-.31,1.27),(s*.61,-.07,.65),.24,.40,'6485a9')
    leg.beam((s*.61,-.07,.73),(s*.62,.01,.31),.22,.27,'6a89aa')
    leg.box((s*.63,-.255,.79),(.22,.017,.22),'7c9bbb')
    finish(leg)
hind=Geometry('07_Hindleg')
hind.beam((0,.93,1.14),(0,1.07,.32),.22,.25,'8da3ba')
hind.box((0,.98,.87),(.23,.025,.19),'607c9e')
finish(hind)


def sneaker(x,y,label):
    g=Geometry('08_Sneaker_'+label)
    # Chunky blue low-tops, white soles, dark laces and reflective side pixels.
    g.box((x,y-.12,.065),(.47,1.02,.13),'dce3e1')
    g.box((x,y-.13,.135),(.46,1.00,.035),'9aadb8')
    g.box((x,y-.13,.215),(.44,.97,.14),'1767d2')
    g.box((x,y-.19,.294),(.40,.70,.05),'2686ef')
    g.box((x,y+.16,.31),(.40,.32,.21),'1c6ed6')
    g.box((x,y+.13,.415),(.30,.22,.025),'4b9cf4')
    g.box((x,y+.13,.429),(.22,.14,.015),'173553')
    g.box((x,y-.57,.22),(.38,.07,.11),'448fec')
    for i in range(4):
        g.box((x,y-.42+i*.115,.326),(.25,.037,.018),'254e89')
    for s in [-1,1]:
        g.box((x+s*.226,y-.34,.205),(.012,.23,.045),'3689e5')
        g.box((x+s*.227,y+.20,.215),(.013,.20,.065),'dce5e5')
        g.box((x+s*.228,y+.04,.195),(.014,.14,.045),'dce5e5')
        g.box((x+s*.229,y-.06,.225),(.014,.12,.065),'dce5e5')
        g.box((x+s*.230,y-.13,.245),(.014,.065,.060),'dce5e5')
    finish(g)


sneaker(-.62,.01,'L');sneaker(.62,.01,'R');sneaker(0,1.07,'Hind')
studio_collection,camera=studio(scene,'Tralalero',4.65)
camera.location=(4.2,-6,3.4);aim(camera,(0,.10,1.1))
scene.render.filepath=str(OUT/'Tralalero_ThreeQuarter.png');bpy.ops.render.render(write_still=True)
camera.location=(7,0,2.8);aim(camera,(0,.10,1.1))
scene.render.filepath=str(OUT/'Tralalero_Side.png');bpy.ops.render.render(write_still=True)
camera.location=(0,-8,2.8);aim(camera,(0,.10,1.1))
scene.render.filepath=str(OUT/'Tralalero_Front.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.92;camera.location=(3.8,-5.5,2.9);aim(camera,(0,-1.18,1.40))
scene.render.filepath=str(OUT/'Tralalero_Head_Detail.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=4.65
camera.location=(4.2,-6,3.4);aim(camera,(0,.10,1.1))

# Keep the editable parts in the source; join duplicates for a single skinned mesh.
animated=bpy.data.collections.new('Tralalero_Animated');scene.collection.children.link(animated)
data=bpy.data.armatures.new('Tralalero_Skeleton');rig=bpy.data.objects.new('Tralalero_Rig',data);animated.objects.link(rig)
for obj in scene.objects:obj.select_set(False)
rig.select_set(True);bpy.context.view_layer.objects.active=rig;bpy.ops.object.mode_set(mode='EDIT')
spec=[('Root',(0,0,0),(0,0,.3),None),('Body',(0,0,.65),(0,-.4,1.4),'Root'),
      ('Dorsal',(0,0,1.62),(0,.13,2.12),'Body'),('Tail',(0,1.28,1.22),(0,1.75,1.22),'Body'),
      ('Fin_L',(-.25,.69,1.18),(-.43,.96,.94),'Body'),('Fin_R',(.25,.69,1.18),(.43,.96,.94),'Body')]
for name,head,tail,parent in spec:
    bone=data.edit_bones.new(name);bone.head=head;bone.tail=tail
    if parent:bone.parent=data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
copies=[]
for source in parts:
    obj=source.copy();obj.data=source.data.copy();animated.objects.link(obj)
    for name,_,_,_ in spec:obj.vertex_groups.new(name=name)
    for vertex in obj.data.vertices:
        if source.name.startswith('08_'):weights={'Root':1}
        elif source.name.startswith('07_'):
            w=max(0,min(1,(vertex.co.z-.38)/.88));weights={'Root':1-w,'Body':w}
        elif source.name.startswith('04_'):weights={'Dorsal':1}
        elif source.name.startswith('05_'):weights={'Tail':1}
        elif source.name.startswith('06_'):weights={'Fin_L' if vertex.co.x<0 else 'Fin_R':1}
        else:weights={'Body':1}
        for bone,w in weights.items():
            if w>.000001:obj.vertex_groups[bone].add([vertex.index],w,'REPLACE')
    copies.append(obj)
for obj in scene.objects:obj.select_set(False)
for obj in copies:obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join();mesh=bpy.context.object
mesh.name='Tralalero_SkinnedMesh';mesh.parent=rig
mod=mesh.modifiers.new('Tralalero_Skin','ARMATURE');mod.object=rig
collection.hide_render=True;collection.hide_viewport=True
for bone in rig.pose.bones:bone.rotation_mode='XYZ'
scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
for frame in range(1,98):
    t=0 if frame==97 else (frame-1)*math.tau/96
    body=rig.pose.bones['Body'];body.rotation_euler=(math.radians(.6*math.sin(t)),0,math.radians(.5*math.sin(t)))
    body.scale=(1,1,1+.006*(1-math.cos(t)))
    body.keyframe_insert('rotation_euler',frame=frame,group='Body');body.keyframe_insert('scale',frame=frame,group='Body')
    for name,angle in [('Tail',3.6),('Dorsal',1.2),('Fin_L',1.6),('Fin_R',-1.6)]:
        bone=rig.pose.bones[name];bone.rotation_euler=(0,0,math.radians(angle*math.sin(t)))
        bone.keyframe_insert('rotation_euler',frame=frame,group=name)
action=rig.animation_data.action;action.name='Tralalero_Idle';action.use_fake_user=True
for layer in action.layers:
    for strip in layer.strips:
        for bag in strip.channelbags:
            for curve in bag.fcurves:
                for point in curve.keyframe_points:point.interpolation='LINEAR'
                curve.modifiers.new('CYCLES')


def positions(frame):
    scene.frame_set(frame);bpy.context.view_layer.update()
    obj=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());temp=obj.to_mesh()
    coords=[obj.matrix_world@v.co for v in temp.vertices];obj.to_mesh_clear();return coords


start=positions(1);end=positions(97);mid=positions(25)
seam=max((a-b).length for a,b in zip(start,end))
root_index=mesh.vertex_groups['Root'].index
fixed=[v.index for v in mesh.data.vertices if any(w.group==root_index and w.weight>.99999 for w in v.groups)]
drift=max((start[i]-mid[i]).length for i in fixed)
movement=max((a-b).length for a,b in zip(start,mid))
assert seam<1e-5 and drift<1e-6
scene.frame_set(1)
for obj in scene.objects:obj.select_set(False)
rig.select_set(True);mesh.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Tralalero_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Tralalero_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0)
scene.frame_end=96
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.region_3d.view_location=Vector((0,.1,1.1));area.spaces.active.region_3d.view_distance=6.2
        area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion();area.spaces.active.shading.type='MATERIAL'
for obj in studio_collection.objects:obj.hide_set(True)
rig.hide_set(True);bpy.context.view_layer.objects.active=mesh
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Tralalero_Review.blend'))
print(json.dumps({'triangles':sum(len(p.vertices)-2 for p in mesh.data.polygons),'bones':len(data.bones),'loop_seam_m':seam,'shoe_drift_m':drift,'max_motion_m':movement,'materials':len(mesh.data.materials),'export':str(EXPORT),'status':'Awaiting approval'}))
