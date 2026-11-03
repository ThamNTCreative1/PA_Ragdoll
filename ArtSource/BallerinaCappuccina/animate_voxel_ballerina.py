"""Rig the approved voxel Ballerina with a planted, looping idle."""
import bpy,math,sys,json
from pathlib import Path
from mathutils import Vector,Quaternion,Matrix

ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import studio,aim,Geometry
OUT=ROOT/'ArtSource'/'BallerinaCappuccina'/'Voxel'/'Idle'
EXPORT=ROOT/'Assets'/'01 RESOURCES'/'BallerinaCappuccina'
OUT.mkdir(parents=True,exist_ok=True)
source_scene=bpy.data.scenes['Ballerina_Voxel_Review']
sources=[o for o in source_scene.objects if o.type=='MESH' and o.name[:2].isdigit()]
assert len(sources)==12
scene=bpy.data.scenes.get('Ballerina_Voxel_Idle_Review')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('Ballerina_Voxel_Idle_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Ballerina_Voxel_Idle_Character');scene.collection.children.link(collection)
controls=bpy.data.collections.new('Ballerina_Voxel_Idle_Controls');scene.collection.children.link(controls)
data=bpy.data.armatures.new('Ballerina_Voxel_Skeleton')
rig=bpy.data.objects.new('Ballerina_Voxel_Idle_Rig',data);collection.objects.link(rig)
rig.show_in_front=True

POINTE_LIFT=.055

def ballet_stance(position,label,foot=False):
    p=Vector(position);s=-1 if label=='L' else 1
    # Keep the hips attached; bring the feet closer and stagger front/back.
    weight=max(0,min(1,(1.10-p.z)/.85))
    ankle_weight=max(0,min(1,(.50-p.z)/.23))
    p.z+=POINTE_LIFT*ankle_weight
    ankle=Vector((s*.15,-.048,0))
    p=ankle+Matrix.Rotation(math.radians(s*10*weight),3,'Z')@(p-ankle)
    p+=Vector((-s*.035*weight,s*.13*weight,0))
    return p

spec=[('Root',(0,0,0),(0,0,.2),None),
      ('Pelvis',(0,-.05,1.10),(0,-.05,1.32),'Root'),
      ('Spine',(0,-.05,1.32),(0,0,1.735),'Pelvis'),
      ('Head',(0,0,1.79),(0,0,2.30),'Spine')]
for s,label in [(-1,'L'),(1,'R')]:
    spec.extend([
        ('UpperArm_'+label,(s*.145,0,1.735),(s*.43,0,1.747),'Spine'),
        ('Forearm_'+label,(s*.43,0,1.747),(s*.69,-.024,1.742),'UpperArm_'+label),
        ('Hand_'+label,(s*.69,-.024,1.742),(s*.81,-.02,1.734),'Forearm_'+label),
        ('Thigh_'+label,(s*.11,-.025,1.10),(s*.13,-.08,.56),'Pelvis'),
        ('Calf_'+label,(s*.13,-.08,.56),(s*.15,-.048,.145),'Thigh_'+label),
        ('Foot_'+label,(s*.15,-.048,.145),(s*.15,-.048,-.03),'Root')])
spec=[(name,ballet_stance(head,name[-1]),ballet_stance(tail,name[-1],name.startswith('Foot_')),parent)
      if name.startswith(('Thigh_','Calf_','Foot_')) else (name,head,tail,parent)
      for name,head,tail,parent in spec]
rest={name:(Vector(head),Vector(tail)) for name,head,tail,_ in spec}
bpy.context.view_layer.objects.active=rig;rig.select_set(True)
bpy.ops.object.mode_set(mode='EDIT')
for name,head,tail,parent in spec:
    bone=data.edit_bones.new(name);bone.head=head;bone.tail=tail
    if parent:bone.parent=data.edit_bones[parent]
bpy.ops.object.mode_set(mode='OBJECT')
for s,label in [(-1,'L'),(1,'R')]:
    target=bpy.data.objects.new('Voxel_AnkleTarget_'+label,None);controls.objects.link(target)
    target.location=rest['Calf_'+label][1]
    pole=bpy.data.objects.new('Voxel_KneePole_'+label,None);controls.objects.link(pole)
    pole.location=rest['Thigh_'+label][1]+Vector((0,-1,0))
    ik=rig.pose.bones['Calf_'+label].constraints.new('IK')
    ik.target=target;ik.pole_target=pole;ik.chain_count=2;ik.use_stretch=False
    candidates=[]
    for angle in [0,math.pi/2,-math.pi/2,math.pi]:
        ik.pole_angle=angle;bpy.context.view_layer.update()
        candidates.append(((rig.pose.bones['Thigh_'+label].tail-rest['Thigh_'+label][1]).length,angle))
    ik.pole_angle=min(candidates)[1]

def blend(a,b,t):
    t=max(0,min(1,t));return {a:1-t,b:t}

def straight_pointe_shoe(source):
    s=-1 if source.name.endswith('_L') else 1
    g=Geometry(source.name+'_StraightPointe')
    def shoe_ring(z,width,depth,offset=0,opening=False):
        fullness=max(0,min(1,(.20-z)/.10))
        width*=1+.12*fullness
        depth*=1+.10*fullness
        # Broad, softly squared toe box and a shaped vamp replace the tapered peg.
        outline=[(-.32,-.5),(.32,-.5),(.5,-.32),(.5,.32),
                 (.32,.5),(-.32,.5),(-.5,.32),(-.5,-.32)]
        if z>=.20:
            bevel=min(.023,width*.325,depth*.325)
            a=.5-bevel/width;b=.5-bevel/depth
            outline=[(-a,-.5),(a,-.5),(.5,-b),(.5,b),
                     (a,.5),(-a,.5),(-.5,b),(-.5,-b)]
        points=[]
        heel_profile=[(0,0),(.045,0),(.090,.007),(.125,.022),
                      (.155,.016),(.18,.004),(.20,0)]
        heel=0
        for (za,ha),(zb,hb) in zip(heel_profile,heel_profile[1:]):
            if za<=z<=zb:
                heel=ha+(hb-ha)*(z-za)/(zb-za)
                break
        for x,y in outline:
            height=z
            if opening:
                # Low front opening exposes the instep; heel cup stays higher.
                height-=.035*max(0,-y*2)
            # A rounded rear heel cup sits below the narrower Achilles/ankle.
            rear=heel*max(0,y*2)
            points.append(Vector((s*.15+x*width,-.048+offset+y*depth+rear,height-POINTE_LIFT)))
        return points
    rings=[shoe_ring(0,.062,.047,-.006),shoe_ring(.012,.070,.053,-.006),
           shoe_ring(.045,.081,.062,-.005),shoe_ring(.090,.080,.072,0),
           shoe_ring(.125,.074,.079,.001),shoe_ring(.155,.069,.078,.002,True),
           shoe_ring(.18,.066,.074),shoe_ring(.20,.067,.080)]
    for row,(a,b) in enumerate(zip(rings,rings[1:])):
        for i in range(8):
            j=(i+1)%8
            color='deb38c' if row>=len(rings)-3 else ('bf9289' if row==0 else 'd7a39b')
            if row in (3,4) and i in (3,4,5):color='cc9992'
            g.face([a[i],a[j],b[j],b[i]],color)
    g.face(list(reversed(rings[0])),'b98e80')
    g.face(rings[-1],'deb38c')
    # Preserve the original crossed ankle ribbons above the slipper opening.
    for polygon in source.data.polygons:
        points=[source.data.vertices[i].co for i in polygon.vertices]
        if min(p.z for p in points)>=.13:
            g.face(points,'e7bbb3')
    return g.object(collection,source.data.materials[0],repair_normals=True)

copies=[]
for source in sources:
    if source.name.startswith('09_'):
        obj=straight_pointe_shoe(source)
    else:
        obj=source.copy();obj.data=source.data.copy();collection.objects.link(obj)
    obj.parent=None;obj.name=source.name+'_Idle'
    for name,_,_,_ in spec:obj.vertex_groups.new(name=name)
    for v in obj.data.vertices:
        x,y,z=v.co;ax=abs(x);label='L' if x<0 else 'R'
        if source.name.startswith(('01_','02_','03_','04_')):weights={'Head':1}
        elif source.name.startswith('05_'):
            weights=blend('Spine','Head',(z-1.76)/.07) if z>1.76 else blend('Pelvis','Spine',(z-1.28)/.12)
        elif source.name.startswith('06_'):weights={'Pelvis':1}
        elif source.name.startswith('07_'):
            if ax<.23:weights=blend('Spine','UpperArm_'+label,(ax-.135)/.095)
            elif ax<.39:weights={'UpperArm_'+label:1}
            elif ax<.47:weights=blend('UpperArm_'+label,'Forearm_'+label,(ax-.39)/.08)
            elif ax<.65:weights={'Forearm_'+label:1}
            elif ax<.72:weights=blend('Forearm_'+label,'Hand_'+label,(ax-.65)/.07)
            else:weights={'Hand_'+label:1}
        elif source.name.startswith('09_'):weights={'Foot_'+label:1}
        elif z<.27:weights={'Foot_'+label:1}
        elif z<.35:weights=blend('Foot_'+label,'Calf_'+label,(z-.27)/.08)
        elif z<.48:weights={'Calf_'+label:1}
        elif z<.65:weights=blend('Calf_'+label,'Thigh_'+label,(z-.48)/.17)
        elif z<1.0:weights={'Thigh_'+label:1}
        else:weights=blend('Thigh_'+label,'Pelvis',(z-1.0)/.10)
        for name,w in weights.items():
            if w>1e-6:obj.vertex_groups[name].add([v.index],w,'REPLACE')
        if source.name.startswith(('08_','09_')):
            v.co=ballet_stance(v.co,label,source.name.startswith('09_'))
    copies.append(obj)
for obj in scene.objects:obj.select_set(False)
for obj in copies:obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
mesh=bpy.context.object;mesh.name='Ballerina_Voxel_Idle_Mesh';mesh.parent=rig
modifier=mesh.modifiers.new('Ballerina_Voxel_Skin','ARMATURE');modifier.object=rig
scene.render.fps=24;scene.frame_start=1;scene.frame_end=97
for bone in rig.pose.bones:bone.rotation_mode='QUATERNION'
def axis(name,a):return data.bones[name].matrix_local.to_3x3().inverted()@Vector(a)
for frame in range(1,98):
    t=0 if frame==97 else (frame-1)*math.tau/96
    dip=.025*.5*(1-math.cos(2*t))
    bone=rig.pose.bones['Pelvis'];bone.location=axis('Pelvis',(0,0,-dip));bone.keyframe_insert('location',frame=frame)
    for name,a,angle in [('Spine',(1,0,0),.35*math.sin(2*t)),('Head',(0,0,1),.65*math.sin(t))]:
        bone=rig.pose.bones[name];bone.rotation_quaternion=Quaternion(axis(name,a),math.radians(angle));bone.keyframe_insert('rotation_quaternion',frame=frame)
    for s,label in [(-1,'L'),(1,'R')]:
        # Upper arms stay lowered; forearms bend upward and open to either side.
        for prefix,angle in [('UpperArm',60+.3*math.sin(t)),('Forearm',-30+.25*math.sin(t)),('Hand',5+.2*math.sin(t))]:
            name=prefix+'_'+label;bone=rig.pose.bones[name]
            q=Quaternion(axis(name,(0,1,0)),math.radians(s*angle))
            if prefix=='Forearm':q=q@Quaternion(axis(name,(0,0,1)),math.radians(-s*8))
            bone.rotation_quaternion=q;bone.keyframe_insert('rotation_quaternion',frame=frame)
action=rig.animation_data.action;action.name='Ballerina_Voxel_Idle';action.use_fake_user=True
for layer in action.layers:
    for strip in layer.strips:
        for bag in strip.channelbags:
            for curve in bag.fcurves:
                for key in curve.keyframe_points:key.interpolation='LINEAR'
                curve.modifiers.new('CYCLES')
def positions(frame):
    scene.frame_set(frame);bpy.context.view_layer.update()
    evaluated=mesh.evaluated_get(bpy.context.evaluated_depsgraph_get());temp=evaluated.to_mesh()
    result=[evaluated.matrix_world@v.co for v in temp.vertices];evaluated.to_mesh_clear();return result
start=positions(1);end=positions(97);dip=positions(25)
seam=max((a-b).length for a,b in zip(start,end))
groups={mesh.vertex_groups[n].index for n in ['Foot_L','Foot_R']}
fixed=[v.index for v in mesh.data.vertices if any(g.group in groups and g.weight>.99999 for g in v.groups)]
drift=max((start[i]-dip[i]).length for i in fixed)
motion=max((a-b).length for a,b in zip(start,dip))
assert seam<1e-5 and drift<1e-6 and motion>.02,(seam,drift,motion)
studio_collection,camera=studio(scene,'Ballerina_Voxel_Idle',3.65)
for obj in studio_collection.objects:
    if obj.type=='MESH':obj.location.z=.03
scene.render.resolution_x=630;scene.render.resolution_y=720
camera.location=(2.5,-6,3.2);aim(camera,(0,0,1.28))
for frame,label in [(1,'Stand'),(25,'Dip')]:
    scene.frame_set(frame);scene.render.filepath=str(OUT/('Idle_ShapedLegs_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.location=(0,-6,2.8);aim(camera,(0,0,1.28))
scene.frame_set(1);scene.render.filepath=str(OUT/'Idle_ShapedLegs_Front.png');bpy.ops.render.render(write_still=True)
camera.location=(5,-3,2.8);aim(camera,(0,0,1.28))
scene.render.filepath=str(OUT/'Idle_ShapedLegs_Side.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.4;camera.location=(0,-6,1.0);aim(camera,(0,0,.64))
scene.render.filepath=str(OUT/'Idle_ShapedLegs_Close.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=.75;camera.location=(3,-4,1.1);aim(camera,(0,0,.22))
scene.render.filepath=str(OUT/'Idle_DefinedHeel_Feet.png');bpy.ops.render.render(write_still=True)
camera.location=(3,4,1.0);aim(camera,(0,0,.22))
scene.render.filepath=str(OUT/'Idle_DefinedHeel_Back.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.0;camera.location=(0,-5,2.35);aim(camera,(0,0,1.63))
scene.render.filepath=str(OUT/'Idle_RoundedShoulders_Front.png');bpy.ops.render.render(write_still=True)
camera.location=(2,5,2.7);aim(camera,(0,.03,1.63))
scene.render.filepath=str(OUT/'Idle_RoundedShoulders_Back.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.65
camera.location=(2.5,-6,3.2);aim(camera,(0,0,1.28))
scene.frame_set(1)
for obj in scene.objects:obj.select_set(False)
rig.select_set(True);mesh.select_set(True);bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Ballerina_Voxel_Idle.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=True,export_animation_mode='ACTIVE_ACTIONS',export_nla_strips_merged_animation_name='Idle',export_frame_range=True,export_anim_slide_to_zero=True,export_force_sampling=True,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Ballerina_Voxel_Idle.fbx'),use_selection=True,object_types={'ARMATURE','MESH'},add_leaf_bones=False,axis_forward='-Z',axis_up='Y',bake_anim=True,bake_anim_use_all_actions=False,bake_anim_use_nla_strips=False,bake_anim_simplify_factor=0.0,path_mode='RELATIVE')
for obj in studio_collection.objects:obj.hide_set(True)
for obj in controls.objects:obj.hide_set(True)
rig.hide_set(True);bpy.context.view_layer.objects.active=mesh
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Ballerina_Voxel_Idle.blend'))
metrics={'duration_seconds':4,'bones':len(data.bones),'triangles':sum(len(p.vertices)-2 for p in mesh.data.polygons),'materials':len(mesh.data.materials),'loop_seam_m':seam,'foot_drift_m':drift,'motion_m':motion}
(OUT/'validation.json').write_text(json.dumps(metrics,indent=2))
print(json.dumps(metrics))
