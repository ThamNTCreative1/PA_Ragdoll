"""Low-poly reinterpretation of the user's Eks.Art reference, not the voxel ZIP."""
import bpy,sys,math,json,bmesh,shutil
from pathlib import Path
from mathutils import Vector
from mathutils.geometry import tessellate_polygon
ROOT=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(ROOT/'ArtSource'/'Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim
OUT=ROOT/'ArtSource'/'TungTungSahur'/'Review'
EXPORT=ROOT/'Assets'/'01 RESOURCES'/'TungTungSahur'
scene=bpy.data.scenes.get('TungSahur_Voxel_Review')
if scene:
    for o in list(scene.objects):bpy.data.objects.remove(o,do_unlink=True)
else:scene=bpy.data.scenes.new('TungSahur_Voxel_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('TungSahur_EksArt_Editable');scene.collection.children.link(collection)
mat=vertex_material('TungSahur_Palette');parts=[]
wood='98703f';light='ad824f';dark='76532f';grain='876139'
def finish(g):
    o=g.object(collection,mat,repair_normals=True)
    # Rounded facial volumes use smooth normals without subdivision or textures.
    if g.name.startswith(('41_','42_','44_','50_','51_')):
        for polygon in o.data.polygons:polygon.use_smooth=True
    parts.append(o);return o
def ring(cx,cy,z,width,depth,n=16):
    return [Vector((cx+width*.5*math.cos((i+.5)*math.tau/n),cy+depth*.5*math.sin((i+.5)*math.tau/n),z)) for i in range(n)]
def loft(g,rings,colour,top=None):
    for a,b in zip(rings,rings[1:]):
        for i in range(len(a)):
            j=(i+1)%len(a);g.face([a[i],a[j],b[j],b[i]],colour)
    g.face(list(reversed(rings[0])),colour);g.face(rings[-1],top or colour)
def ellipsoid(g,centre,radii,colour,n=10,latitudes=5):
    c=Vector(centre);rx,ry,rz=radii
    rings=[]
    for k in range(1,latitudes):
        latitude=-math.pi/2+k*math.pi/latitudes
        rings.append([c+Vector((rx*math.cos(latitude)*math.cos(i*math.tau/n),
                               ry*math.cos(latitude)*math.sin(i*math.tau/n),rz*math.sin(latitude))) for i in range(n)])
    for i in range(n):
        j=(i+1)%n;g.face([c+Vector((0,0,-rz)),rings[0][j],rings[0][i]],colour)
        g.face([rings[-1][i],rings[-1][j],c+Vector((0,0,rz))],colour)
    for a,b in zip(rings,rings[1:]):
        for i in range(n):
            j=(i+1)%n;g.face([a[i],a[j],b[j],b[i]],colour)
def tube(g,points,radius,depth,colour,n=6):
    rings=[]
    for i,p in enumerate(points):
        p=Vector(p)
        direction=Vector(points[min(i+1,len(points)-1)])-Vector(points[max(i-1,0)])
        normal=Vector((-direction.z,0,direction.x)).normalized()
        rings.append([p+normal*(radius*math.cos(j*math.tau/n))+Vector((0,depth*math.sin(j*math.tau/n),0)) for j in range(n)])
    loft(g,rings,colour)

body_sections=[(.86,.50,.44),(.88,.56,.49),(1.10,.575,.51),
               (1.58,.58,.51),(1.80,.605,.52),(1.96,.59,.51),
               (2.16,.58,.51),(2.40,.59,.515),(2.47,.57,.495),(2.50,.50,.435)]
def front_y(x,z):
    for a,b in zip(body_sections,body_sections[1:]):
        if a[0]<=z<=b[0]:
            t=(z-a[0])/(b[0]-a[0]);w=a[1]+(b[1]-a[1])*t;d=a[2]+(b[2]-a[2])*t
            points=sorted([p for p in ring(0,0,z,w,d) if p.y<0],key=lambda p:p.x)
            for l,r in zip(points,points[1:]):
                if l.x<=x<=r.x:return l.y+(r.y-l.y)*(x-l.x)/(r.x-l.x)
    return -.20

body=Geometry('40_Rounded_Wooden_Log')
loft(body,[ring(0,0,z,w,d) for z,w,d in body_sections],wood,'c7a16a')
for i in range(16):
    angle=(i+1)*math.tau/16
    normal=Vector((math.cos(angle),math.sin(angle),0))
    position=Vector((.29*.981*normal.x,.255*.981*normal.y,1.22))
    # Thin subdued grain follows the cylindrical surface; no raised block bands.
    rotation=normal.to_track_quat('Y','Z').to_matrix()
    body.box(position+normal*.002,(.003,.003,.62 if i%2 else .69),grain,rotation)
finish(body)

socket=Geometry('41_Rounded_Eye_Sockets_And_Cheeks')
for s in [-1,1]:
    ellipsoid(socket,(s*.150,-.216,2.085),(.127,.072,.151),dark,12,6)
    # One tapered crescent wraps the lower eyeball and blends into the face.
    # Its lowest point carries the volume; corners sink into the wooden head.
    # This replaces the separate spherical cheeks and thin tubular lower lids.
    bag_rings=[]
    for k in range(13):
        t=k/12;angle=math.pi+t*math.pi
        fullness=math.sin(math.pi*t)**.7
        x=s*.150+.111*math.cos(angle)
        z=2.078+.116*math.sin(angle)
        base_y=front_y(x,z)
        y=base_y+.016-.075*fullness
        radial=Vector((math.cos(angle),0,math.sin(angle)))
        centre=Vector((x,y,z))
        width=.006+.030*fullness
        depth=.008+.042*fullness
        bag_rings.append([centre+radial*(width*math.cos(j*math.tau/8))+
                          Vector((0,depth*math.sin(j*math.tau/8),0)) for j in range(8)])
    loft(socket,bag_rings,wood)
finish(socket)
eyes=Geometry('42_Round_Protruding_Eyes')
for s in [-1,1]:
    ellipsoid(eyes,(s*.150,-.253,2.083),(.091,.057,.100),'e8dfbf',12,6)
    ellipsoid(eyes,(s*.150,-.304,2.079),(.050,.014,.055),'776c4b',12,5)
    ellipsoid(eyes,(s*.150,-.316,2.080),(.030,.007,.036),'272925',10,4)
    ellipsoid(eyes,(s*.150-.012,-.322,2.102),(.011,.003,.012),'fff8e3',8,4)
finish(eyes)
brows=Geometry('43_Dark_Arched_Brows')
for s in [-1,1]:
    tube(brows,[(s*.044,-.242,2.240),(s*.085,-.249,2.273),(s*.145,-.243,2.288),
                (s*.210,-.224,2.267),(s*.250,-.201,2.227)],.033,.029,'39302a',8)
finish(brows)
nose=Geometry('44_Long_Nose_With_Rounded_Tip')
loft(nose,[ring(0,-.294,1.837,.110,.090,10),ring(0,-.317,1.882,.181,.158,10),
           ring(0,-.301,1.950,.124,.140,10),ring(0,-.266,2.055,.068,.092,10),
           ring(0,-.224,2.208,.060,.052,10)],wood)
ellipsoid(nose,(0,-.321,1.880),(.088,.077,.050),light,12,6)
finish(nose)

smile=Geometry('45_Curved_Carved_Smile')
def surface_patch(points,colour,offset=.012):
    left=min(p[0] for p in points);right=max(p[0] for p in points);count=math.ceil((right-left)/.022)
    boundaries={}
    for k in range(count):
        poly=points[:]
        for bound,sign in [(left+(right-left)*k/count,1),(left+(right-left)*(k+1)/count,-1)]:
            clipped=[]
            for a,b in zip(poly,poly[1:]+poly[:1]):
                ina=(a[0]-bound)*sign>=-1e-9;inb=(b[0]-bound)*sign>=-1e-9
                if ina:clipped.append(a)
                if ina!=inb:
                    t=(bound-a[0])/(b[0]-a[0]);clipped.append((bound,a[1]+t*(b[1]-a[1])))
            poly=clipped
            if not poly:break
        clean=[]
        for p in poly:
            if not clean or abs(p[0]-clean[-1][0])+abs(p[1]-clean[-1][1])>1e-9:clean.append(p)
        if len(clean)>1 and abs(clean[0][0]-clean[-1][0])+abs(clean[0][1]-clean[-1][1])<1e-9:clean.pop()
        if len(clean)<3:continue
        area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(clean,clean[1:]+clean[:1])))
        if area<1e-12:continue
        front=[Vector((x,front_y(x,z)-offset,z)) for x,z in clean]
        back=[p+Vector((0,.004,0)) for p in front]
        smile.face(front,colour);smile.face(list(reversed(back)),colour)
        for i in range(len(front)):
            j=(i+1)%len(front)
            a=tuple(round(c,8) for c in front[i]);b=tuple(round(c,8) for c in front[j])
            key=tuple(sorted([a,b]))
            if key in boundaries:boundaries[key][0]+=1
            else:boundaries[key]=[1,front[i],front[j],back[i],back[j]]
    for count,a,b,back_a,back_b in boundaries.values():
        if count==1:smile.face([a,b,back_b,back_a],colour)
surface_patch([(-.224,1.855),(-.170,1.798),(-.09,1.768),(0,1.761),(.09,1.768),
               (.170,1.798),(.224,1.855),(.191,1.769),(.10,1.715),(0,1.700),
               (-.10,1.715),(-.191,1.769)],'51351e')
lip_points=[(x,front_y(x,z)-.019,z) for x,z in [(-.224,1.842),(-.17,1.749),
             (-.09,1.700),(0,1.685),(.09,1.700),(.17,1.749),(.224,1.842)]]
tube(smile,lip_points,.021,.018,'ad824f',8)
finish(smile)

for s,label in [(-1,'L'),(1,'R')]:
    leg=Geometry('46_Anatomical_Leg_'+label)
    loft(leg,[ring(s*.155,.005,.12,.067,.085,8),ring(s*.155,.01,.23,.070,.088,8),
              ring(s*.159,.025,.36,.103,.110,8),ring(s*.162,.004,.47,.093,.102,8),
              ring(s*.166,-.005,.54,.106,.113,8),ring(s*.17,.005,.69,.142,.144,8),
              ring(s*.17,.01,.90,.156,.158,8)],wood)
    finish(leg)
    foot=Geometry('47_Bare_Foot_'+label)
    loft(foot,[ring(s*.16,-.066,0,.177,.266,8),ring(s*.16,-.066,.047,.191,.275,8),
               ring(s*.156,-.016,.125,.091,.139,8)],wood)
    for i in range(4):
        x=s*(.100+i*.039);y=-.211+(i*.012)
        loft(foot,[ring(x,y,.005,.037,.081-i*.007,8),ring(x,y,.035,.043,.088-i*.007,8),
                   ring(x,y+.012,.058,.032,.067-i*.006,8)],light if i==0 else wood)
    finish(foot)

for s,label in [(-1,'L'),(1,'R')]:
    arm=Geometry('48_UpperArm_'+label)
    loft(arm,[ring(s*.290,0,1.65,.115,.130,8),ring(s*.327,-.006,1.57,.122,.132,8),
              ring(s*.354,-.010,1.45,.108,.119,8),
              ring(s*.381,-.015,1.28,.078,.090,8)],wood)
    finish(arm)
    forearm=Geometry('49_Forearm_'+label)
    wrist=(s*.406,-.073,.93)
    loft(forearm,[ring(*[wrist[0],wrist[1],.90],.067,.079,8),
                 ring(s*.398,-.047,1.11,.084,.090,8),ring(s*.381,-.015,1.28,.078,.090,8)],light)
    finish(forearm)
    hand=Geometry('50_Hand_'+label)
    ellipsoid(hand,(s*.410,-.082,.862),(.067,.050,.087),wood,8,4)
    if s<0:
        tube(hand,[(-.43,-.104,.866),(-.45,-.124,.834),(-.425,-.148,.813),(-.395,-.141,.831)],.026,.024,wood)
        ellipsoid(hand,(-.37,-.103,.855),(.023,.036,.036),light,8,4)
    else:
        for i in range(3):
            x=s*.398+(i-1)*.026
            tube(hand,[(x,-.087,.837),(x+.010,-.102,.790),(x+.004,-.139,.768),
                       (x-.014,-.156,.795)],.012,.013,wood,4)
        tube(hand,[(.365,-.086,.878),(.350,-.113,.842),(.360,-.144,.825)],.019,.020,light,4)
    finish(hand)

bat=Geometry('51_Tapered_Downward_Bat')
start=Vector((-.408,-.101,.875));end=Vector((-.655,-.40,.055));direction=(end-start).normalized()
u=direction.cross(Vector((0,1,0))).normalized();v=direction.cross(u).normalized()
rings=[]
for t,radius in [(0,.037),(.045,.041),(.08,.026),(.25,.038),(.52,.069),(.83,.104),(.94,.108),(.985,.089),(1,.047)]:
    centre=start+(end-start)*t
    rings.append([centre+u*(radius*math.cos(i*math.tau/8))+v*(radius*math.sin(i*math.tau/8)) for i in range(8)])
loft(bat,rings,light)
finish(bat)

studio_collection,camera=studio(scene,'TungSahur_EksArt',3.65)
for o in studio_collection.objects:
    if o.type=='MESH':o.location.z=.03
scene.render.resolution_x=630;scene.render.resolution_y=720
for label,location in [('ThreeQuarter',(3.5,-6,3)),('Front',(0,-6,2.7)),
                       ('Side',(6,0,2.8)),('Back',(3,6,3))]:
    camera.location=location;aim(camera,(0,-.05,1.25))
    scene.render.filepath=str(OUT/('TungSahur_V3_'+label+'.png'));bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.32;camera.location=(1.5,-6,2.7);aim(camera,(0,-.23,2.08))
scene.render.filepath=str(OUT/'TungSahur_V3_Face.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.65;camera.location=(3.5,-6,3);aim(camera,(0,-.05,1.25))
for o in scene.objects:o.select_set(False)
copies=[]
for source in parts:
    o=source.copy();o.data=source.data.copy();collection.objects.link(o);o.select_set(True);copies.append(o)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
combined=bpy.context.object;combined.name='TungSahur_Voxel_Model'
# The upper arm and forearm share an exact elbow ring. Remove the two internal
# end caps when joining them, retaining a closed continuous outer arm surface.
clean=bmesh.new();clean.from_mesh(combined.data)
bmesh.ops.remove_doubles(clean,verts=list(clean.verts),dist=1e-6)
clean.verts.index_update();by_vertices={}
for face in clean.faces:
    key=tuple(sorted(v.index for v in face.verts));by_vertices.setdefault(key,[]).append(face)
internal=[]
for faces in by_vertices.values():
    if len(faces)==2 and faces[0].normal.dot(faces[1].normal)<-.9:internal.extend(faces)
# Welding can collapse duplicate caps into one internal face; its entire rim
# then has three incident faces, unlike an outer skin face.
internal.extend(face for face in clean.faces if all(len(edge.link_faces)>2 for edge in face.edges))
internal=list(set(internal))
if internal:bmesh.ops.delete(clean,geom=internal,context='FACES_ONLY')
bmesh.ops.recalc_face_normals(clean,faces=list(clean.faces))
clean.to_mesh(combined.data);clean.free();combined.data.update()
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'TungSahur_Voxel.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_animations=False,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'TungSahur_Voxel.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False,path_mode='RELATIVE')
bm=bmesh.new();bm.from_mesh(combined.data);bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
remaining=set(bm.faces);inverted=0;opened=0
while remaining:
    f=remaining.pop();stack=[f];component=[f]
    while stack:
        a=stack.pop()
        for e in a.edges:
            for n in e.link_faces:
                if n in remaining:remaining.remove(n);stack.append(n);component.append(n)
    if all(len(e.link_faces)==2 for a in component for e in a.edges):
        if sum(a.calc_area()*a.normal.dot(a.calc_center_median()) for a in component)<-1e-9:inverted+=1
    else:opened+=1
zero=sum(f.calc_area()<1e-12 for f in bm.faces)
bm.free();assert inverted==0 and opened==0 and zero==0,(inverted,opened,zero)
metrics={'triangles':sum(len(p.vertices)-2 for p in combined.data.polygons),'materials':len(combined.data.materials),'textures':0,'editable_parts':len(parts),'inverted_components':inverted,'open_components':opened,'status':'Eks.Art reference revision, awaiting shape approval'}
(OUT/'validation_v3.json').write_text(json.dumps(metrics,indent=2))
combined.hide_render=True;combined.hide_set(True)
for o in studio_collection.objects:o.hide_set(True)
for o in scene.objects:o.select_set(False)
parts[0].select_set(True);bpy.context.view_layer.objects.active=parts[0]
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,-.05,1.25))
        area.spaces.active.region_3d.view_distance=5.3;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'TungSahur_V3_Review.blend'))
print(json.dumps(metrics))
