"""New Minecraft/low-poly Ballerina. Static shape review before any animation."""
import bpy
import sys
import json
import math
from pathlib import Path
from mathutils import Vector,Matrix

WORKSPACE=Path(r'F:\UnityProjects\OBP_V04')
sys.path.insert(0,str(WORKSPACE/'ArtSource'/'Blender'))
from voxel_tools import Geometry,vertex_material,studio,aim
OUT=WORKSPACE/'ArtSource'/'BallerinaCappuccina'/'Voxel'
EXPORT=WORKSPACE/'Assets'/'01 RESOURCES'/'BallerinaCappuccina'
OUT.mkdir(parents=True,exist_ok=True);EXPORT.mkdir(parents=True,exist_ok=True)
scene=bpy.data.scenes.get('Ballerina_Voxel_Review')
if scene:
    for obj in list(scene.objects):bpy.data.objects.remove(obj,do_unlink=True)
else:scene=bpy.data.scenes.new('Ballerina_Voxel_Review')
bpy.context.window.scene=scene
collection=bpy.data.collections.new('Ballerina_Voxel_Editable');scene.collection.children.link(collection)
mat=vertex_material('Ballerina_Voxel_Palette')
parts=[]


def finish(g):
    if g.name.startswith(('01_','02_','03_','04_')):
        anchor=Vector((0,0,1.88))
        transform=Matrix.Rotation(math.radians(4),4,'X')
        # Keep the cup seated on the neck, with a taller, less wide silhouette.
        head_height=1.035
        proportion=Matrix.Diagonal(Vector((.93,1.0,head_height)))
        if g.name.startswith('04_'):
            # Preserve facial feature proportions independently of cup reshaping.
            # Reproject onto the changed bowl, retaining each layer's relief.
            adjusted=[]
            for vertex in g.vertices:
                p=Vector(vertex)
                relief=front_y(p.z,p.x)-p.y
                x=p.x/.93
                z=2.13+(p.z-2.13+.045)/head_height
                adjusted.append((x,front_y(z,x)-relief,z))
            g.vertices=adjusted
        g.vertices=[tuple(anchor+transform.to_3x3()@proportion@(Vector(v)-anchor)+Vector((0,.015,-.05))) for v in g.vertices]
    obj=g.object(collection,mat,repair_normals=True);parts.append(obj);return obj


def ring(width,depth,z,bevel=.12):
    w,d=width/2,depth/2;b=min(bevel,w*.65,d*.65)
    return [Vector(p) for p in [(-w+b,-d,z),(w-b,-d,z),(w,-d+b,z),(w,d-b,z),
            (w-b,d,z),(-w+b,d,z),(-w,d-b,z),(-w,-d+b,z)]]


def loft(g,sections,colors,top=True,bottom=True):
    rings=[ring(*section) for section in sections]
    for lower,upper in zip(rings,rings[1:]):
        for i in range(8):g.face([lower[i],lower[(i+1)%8],upper[(i+1)%8],upper[i]],colors[i%len(colors)])
    if bottom:g.face(list(reversed(rings[0])),colors[0])
    if top:g.face(rings[-1],colors[0])


cream='f3eee3';rim='fff8ed';skin='deb38c';pink='c68e78';deep='a96e60'
cup=Geometry('01_Coffee_Cup_Head')
# More even radial segments and a rounded bowl profile avoid the angular jaw
# and straight-sided bucket silhouette while keeping a lightweight mesh.
head_sections=[(.40,.37,1.88),(.52,.48,1.905),(.63,.58,1.95),
               (.73,.675,2.015),(.81,.75,2.10),(.865,.80,2.20),
               (.902,.835,2.31),(.919,.851,2.42),(.92,.86,2.54)]
HEAD_SIDES=24


def cup_ring(width,depth,z):
    return [Vector((width*.5*math.cos((i+.5)*math.tau/HEAD_SIDES),
                    depth*.5*math.sin((i+.5)*math.tau/HEAD_SIDES),z)) for i in range(HEAD_SIDES)]


head_rings=[cup_ring(*section) for section in head_sections]
for lower,upper in zip(head_rings,head_rings[1:]):
    for i in range(HEAD_SIDES):
        j=(i+1)%HEAD_SIDES
        cup.face([lower[i],lower[j],upper[j],upper[i]],cream)
cup.face(list(reversed(head_rings[0])),cream)
outer=cup_ring(.935,.875,2.56);outer_lower=cup_ring(.935,.875,2.536)
inner=cup_ring(.865,.805,2.56);inner_low=cup_ring(.855,.795,2.536)
for i in range(HEAD_SIDES):
    j=(i+1)%HEAD_SIDES
    cup.face([outer_lower[i],outer_lower[j],outer[j],outer[i]],rim)
    cup.face([outer[i],outer[j],inner[j],inner[i]],rim)
    cup.face([inner[i],inner[j],inner_low[j],inner_low[i]],'cdb68f')
finish(cup)

coffee=Geometry('02_Coffee_And_Pixel_Latte_Art')
coffee.face(cup_ring(.855,.795,2.538),'a06a3d')
coffee.face(cup_ring(.775,.715,2.540),'c28b52')
leaf=[(0,-.15),(-.018,-.05),(-.105,-.003),(-.133,.044),(-.12,.086),
      (-.076,.096),(-.032,.055),(0,.005),(.032,.055),(.076,.096),
      (.12,.086),(.133,.044),(.105,-.003),(.018,-.05)]
coffee.face([(x,y,2.544) for x,y in leaf],rim)
# A small central petal makes the source's latte rosetta legible from above.
coffee.face([(x,y,2.545) for x,y in [(0,-.015),(-.042,.052),(-.030,.127),(0,.158),(.030,.127),(.042,.052)]],'fffdf0')
finish(coffee)

handle=Geometry('03_Faceted_Curved_Cup_Handle')
handle_path=[(-.405,.035,2.43),(-.535,.035,2.47),(-.65,.035,2.42),
             (-.715,.035,2.32),(-.715,.035,2.20),(-.65,.035,2.10),
             (-.53,.035,2.06),(-.385,.035,2.105)]
handle_rings=[]
for i,p in enumerate(handle_path):
    p=Vector(p)
    direction=Vector(handle_path[min(i+1,len(handle_path)-1)])-Vector(handle_path[max(i-1,0)])
    normal=Vector((-direction.z,0,direction.x)).normalized()*.033
    depth=Vector((0,.0415,0))
    handle_rings.append([p+normal+depth,p-normal+depth,p-normal-depth,p+normal-depth])
for a,b in zip(handle_rings,handle_rings[1:]):
    for i in range(4):
        j=(i+1)%4
        handle.face([a[i],a[j],b[j],b[i]],cream)
handle.face(list(reversed(handle_rings[0])),cream)
handle.face(handle_rings[-1],cream)
finish(handle)


def front_y(z,x=0):
    for a,b in zip(head_sections,head_sections[1:]):
        if a[2]<=z<=b[2]:
            t=(z-a[2])/(b[2]-a[2]);width=a[0]*(1-t)+b[0]*t;depth=a[1]*(1-t)+b[1]*t
            points=sorted([p for p in cup_ring(width,depth,z) if p.y<0],key=lambda p:p.x)
            for left,right in zip(points,points[1:]):
                if left.x<=x<=right.x:
                    u=(x-left.x)/(right.x-left.x);return left.y*(1-u)+right.y*u
            return points[0].y if x<0 else points[-1].y
    return -.36


face=Geometry('04_Pixel_Face')


def pixel_face(x,z,w,h,color,offset=.006):
    # Follow the faceted bowl so features remain attached over its curved surface.
    x0,x1=(x-w/2)*.8,(x+w/2)*.8
    z0,z1=1.88+(z-h/2-1.88)*.92,1.88+(z+h/2-1.88)*.92
    strips=max(1,math.ceil((x1-x0)/.028))
    for i in range(strips):
        a=x0+(x1-x0)*i/strips;b=x0+(x1-x0)*(i+1)/strips
        face.face([(a,front_y(z0,a)-offset,z0),(b,front_y(z0,b)-offset,z0),
                   (b,front_y(z1,b)-offset,z1),(a,front_y(z1,a)-offset,z1)],color)


def face_patch(points,color,offset=.008):
    # Clip into narrow strips so faceted features follow the bowl rather than
    # cutting through it. Polygon outlines retain the reference's expression.
    points=[(x*.8,1.88+(z-1.88)*.92) for x,z in points]
    left=min(p[0] for p in points);right=max(p[0] for p in points)
    count=max(1,math.ceil((right-left)/.018))
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
        poly=clean
        area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(poly,poly[1:]+poly[:1])))
        if len(poly)>=3 and area>1e-12:
            face.face([(x,front_y(z,x)-offset,z) for x,z in poly],color)


def oval_patch(x,z,rx,rz,color,offset=.01,n=12):
    face_patch([(x+rx*math.cos(i*math.tau/n),z+rz*math.sin(i*math.tau/n)) for i in range(n)],color,offset)


for s in [-1,1]:
    x=s*.205
    def eye_shape(points,color,offset):
        face_patch([(x+s*u,2.22+v) for u,v in points],color,offset)
    # Wide almond-shaped eyes, warm brown round irises and heavy upper lids.
    eye_shape([(-.118,-.034),(-.083,.045),(-.026,.074),(.052,.065),(.111,.026),
               (.127,-.019),(.072,-.057),(-.020,-.061)],'a78273',.005)
    eye_shape([(-.110,-.029),(-.073,.035),(-.020,.058),(.045,.053),(.099,.020),
               (.111,-.018),(.061,-.048),(-.018,-.051)],'fff6e9',.009)
    oval_patch(x-s*.006,2.222,.060,.052,'684331',.012)
    oval_patch(x-s*.006,2.215,.049,.044,'b17b3f',.015)
    oval_patch(x-s*.008,2.228,.034,.035,'302827',.018)
    oval_patch(x-s*.030,2.255,.018,.017,'fffdf4',.021,8)
    oval_patch(x+s*.022,2.194,.009,.008,'f4d3a2',.021,8)
    eye_shape([(-.119,-.024),(-.086,.052),(-.027,.082),(.051,.073),(.108,.036),
               (.140,.048),(.120,.012),(.091,.015),(.043,.049),(-.023,.055),(-.073,.029)],'594039',.024)
    # Arched tapered brows, with the inner ends slightly raised.
    eye_shape([(-.112,.147),(-.093,.177),(-.031,.192),(.048,.183),(.109,.153),
               (.110,.134),(.043,.153),(-.029,.162),(-.090,.149)],'866049',.011)
    oval_patch(s*.292,2.115,.073,.040,'e4b6a5',.005)
    oval_patch(s*.292,2.118,.044,.024,'dfaa9e',.007)
# Broad upturned smile with coral lips, curved tooth line and dark opening.
face_patch([(-.151,2.075),(-.085,2.050),(0,2.047),(.085,2.050),(.151,2.075),
            (.114,2.016),(.060,1.983),(0,1.973),(-.060,1.983),(-.114,2.016)],'ad6655',.010)
face_patch([(-.139,2.066),(-.077,2.041),(0,2.037),(.077,2.041),(.139,2.066),
            (.103,2.020),(.050,1.993),(0,1.988),(-.050,1.993),(-.103,2.020)],'502f2c',.014)
face_patch([(-.126,2.059),(-.070,2.037),(0,2.033),(.070,2.037),(.126,2.059),
            (.089,2.032),(.045,2.021),(0,2.018),(-.045,2.021),(-.089,2.032)],'fff3df',.018)
face_patch([(-.111,2.015),(-.054,1.987),(0,1.978),(.054,1.987),(.111,2.015),
            (.070,1.981),(0,1.964),(-.070,1.981)],'d88676',.021)
# A shallow faceted nose replaces the projecting rectangular block.
nose_outline=[(-.024,2.162),(.024,2.162),(.031,2.119),(.046,2.098),
              (.021,2.086),(-.021,2.086),(-.046,2.098),(-.031,2.119)]
nose_tip=(0,2.108)
def nose_vertex(p,offset):
    x,z=p[0]*.8,1.88+(p[1]-1.88)*.92
    return (x,front_y(z,x)-offset,z)
for i,p in enumerate(nose_outline):
    q=nose_outline[(i+1)%len(nose_outline)]
    face.face([nose_vertex(p,.008),nose_vertex(q,.008),nose_vertex(nose_tip,.040)],
              ['eee1cb','eee1cb','dec7b4','c39a8c','bf9384','c9a797','e0ceba','eee1cb'][i])
finish(face)

body=Geometry('05_Bodice_And_Neck')


def bodice_ring(width,depth,z):
    points=ring(width,depth,z,.04)
    # An extra front-centre vertex defines a subtle fitted seam and real V neck.
    points=[points[0],Vector((0,-depth/2,z))]+points[1:]
    # Correct only the torso surface. Straps must not be flattened onto this plane.
    for p in points:
        if p.y>0 and p.z>1.40:
            t=max(0,min(1,(p.z-1.40)/.34))
            p.y=min(p.y,.102+.004*t)
    return points


bodice_rings=[bodice_ring(.29,.22,1.28),bodice_ring(.22,.205,1.41),
              bodice_ring(.30,.235,1.51),bodice_ring(.34,.285,1.61),
              bodice_ring(.34,.25,1.685)]
bodice_rings[-2][1]=Vector((0,-.134,1.56))
bodice_rings[-1][1]=Vector((0,-.137,1.59))
for lower,upper in zip(bodice_rings,bodice_rings[1:]):
    for i in range(9):
        j=(i+1)%9
        color=['c38b74','c38b74','bd836c','bd836c','c48b73','c08770','bd836c','bd836c','c08770'][i]
        body.face([lower[i],lower[j],upper[j],upper[i]],color)
body.face(list(reversed(bodice_rings[0])),'b47b66')
# Skin begins at the garment's neckline instead of overlapping beneath the back.
# Lower and flatten the clavicle shelf while retaining the neck's top position.
skin_rings=[bodice_rings[-1],bodice_ring(.29,.19,1.709),
            bodice_ring(.105,.12,1.735),bodice_ring(.105,.12,1.84)]
for lower,upper in zip(skin_rings,skin_rings[1:]):
    for i in range(9):
        j=(i+1)%9
        body.face([lower[i],lower[j],upper[j],upper[i]],skin)
body.face(skin_rings[-1],skin)
for s in [-1,1]:
    # Thin shoulder straps sit on the shoulders instead of protruding as blocks.
    body.beam((s*.130,-.125,1.685),(s*.143,0,1.712),.024,.019,'b57c66')
    body.beam((s*.143,0,1.712),(s*.125,.112,1.675),.024,.019,'b57c66')
    body.beam((s*.130,-.128,1.685),(0,-.140,1.590),.010,.010,'af7561')
finish(body)

skirt=Geometry('06_Stepped_Ballet_Tutu')
skirt_rings=[]
for rx,ry,z in [(.15,.12,1.31),(.31,.28,1.24),(.475,.43,1.10),(.46,.415,1.065)]:
    skirt_rings.append([Vector((rx*math.cos(i*math.tau/12),ry*math.sin(i*math.tau/12),z)) for i in range(12)])
pleats=['d69c84','c88d77','dfaa92','c38b76']
for upper,lower in zip(skirt_rings,skirt_rings[1:]):
    for i in range(12):
        j=(i+1)%12
        skirt.face([upper[i],upper[j],lower[j],lower[i]],pleats[i%4])
skirt.face(list(reversed(skirt_rings[-1])),'b27b66')
finish(skirt)

for s,label in [(-1,'L'),(1,'R')]:
    arm=Geometry('07_Arm_'+label)
    # Follow measured centre-line sections of the supplied original reference.
    # This keeps the almost-horizontal pose and avoids forward-bent forearms.
    arm_sections=[(.125,0,1.695,.090,.060),(.155,0,1.700,.100,.070),
                  (.195,-.001,1.719,.100,.090),(.24,-.002,1.740,.090,.093),
                  (.32,-.010,1.739,.068,.080),(.43,0,1.747,.082,.098),
                  (.52,-.001,1.751,.075,.087),(.62,-.018,1.751,.080,.064),
                  (.69,-.024,1.742,.075,.043),(.72,-.020,1.738,.080,.035)]
    arm_rings=[]
    ARM_SIDES=8
    for x,y,z,depth,height in arm_sections:
        # Rounded shoulder cross-sections avoid the pointed rectangular corners
        # exposed when the upper arms rotate down into the ballet stance.
        arm_rings.append([Vector((s*x,y+depth*.5*math.cos((i+.5)*math.tau/ARM_SIDES),
                                 z+height*.5*math.sin((i+.5)*math.tau/ARM_SIDES))) for i in range(ARM_SIDES)])
    for a,b in zip(arm_rings,arm_rings[1:]):
        for i in range(ARM_SIDES):
            j=(i+1)%ARM_SIDES
            arm.face([a[i],a[j],b[j],b[i]],skin)
    arm.face(list(reversed(arm_rings[0])),skin);arm.face(arm_rings[-1],skin)
    arm.box((s*.748,-.014,1.737),(.080,.080,.032),'e4bb94')
    for j in range(3):
        y=-.039+j*.025
        arm.beam((s*.782,y,1.737),(s*(.817-j*.006),y-.003,1.734),.016,.020,'e8c39d')
    arm.beam((s*.727,-.047,1.729),(s*.752,-.084,1.718),.024,.024,'e8c39d')
    finish(arm)
    leg=Geometry('08_Leg_'+label)
    # Continuous tapered sections follow the original leg's thigh/knee/calf profile.
    # Full upper thighs taper into distinct knees, then a softly rounded calf
    # narrows to the ankle. Avoid the old constant-width thigh and angular knee.
    leg_sections=[(.150,-.049,.14,.067,.080),(.150,-.047,.22,.075,.086),
                  (.148,-.044,.30,.092,.105),(.144,-.044,.38,.112,.126),
                  (.139,-.048,.45,.120,.139),(.132,-.055,.51,.113,.130),
                  (.124,-.064,.57,.102,.115),(.117,-.070,.63,.110,.120),
                  (.108,-.072,.72,.135,.145),(.105,-.064,.83,.160,.170),
                  (.104,-.050,.94,.177,.185),(.108,-.034,1.04,.180,.190),
                  (.110,-.025,1.10,.174,.180)]
    LEG_SIDES=12
    leg_rings=[]
    for x,y,z,width,depth in leg_sections:
        leg_rings.append([Vector((s*x+width*.5*math.cos((i+.5)*math.tau/LEG_SIDES),
                                 y+depth*.5*math.sin((i+.5)*math.tau/LEG_SIDES),z)) for i in range(LEG_SIDES)])
    for lower,upper in zip(leg_rings,leg_rings[1:]):
        for i in range(LEG_SIDES):
            j=(i+1)%LEG_SIDES
            leg.face([lower[i],lower[j],upper[j],upper[i]],skin)
    leg.face(list(reversed(leg_rings[0])),skin);leg.face(leg_rings[-1],skin)
    finish(leg)
    shoe=Geometry('09_Ballet_Shoe_'+label)
    # Low-cut ballet slippers: thin sole, open instep, bare ankle and satin ribbons.
    ballet='d7a39b';ribbon='e7bbb3'
    foot_sections=[(.148,.005,.006,.060,.072),(.150,-.047,0,.080,.078),
                   (.160,-.100,0,.070,.105),(.178,-.170,0,.052,.097),
                   (.190,-.210,.004,.031,.075)]
    foot_rings=[]
    for x,y,bottom,top,width in foot_sections:
        cx=s*x;w=width/2;bevel=min(.013,width*.2)
        foot_rings.append([Vector(p) for p in [(cx-w+bevel,y,bottom),(cx+w-bevel,y,bottom),
            (cx+w,y,bottom+.008),(cx+w,y,top-.01),(cx+w-bevel,y,top),
            (cx-w+bevel,y,top),(cx-w,y,top-.01),(cx-w,y,bottom+.008)]])
    for a,b in zip(foot_rings,foot_rings[1:]):
        for i in range(8):
            j=(i+1)%8
            shoe.face([a[i],a[j],b[j],b[i]],'b98e80' if i<2 else ballet)
    shoe.face(list(reversed(foot_rings[0])),ballet);shoe.face(foot_rings[-1],ballet)
    # Exposed skin inside the low opening connects smoothly to the lower leg.
    ankle_rings=[[v+Vector((s*.15,-.048,0)) for v in ring(w,d,z,.016)]
                 for w,d,z in [(.063,.075,.073),(.067,.080,.145)]]
    for lower,upper in zip(ankle_rings,ankle_rings[1:]):
        for i in range(8):
            j=(i+1)%8
            shoe.face([lower[i],lower[j],upper[j],upper[i]],skin)
    shoe.face([(s*.15-.023,-.008,.077),(s*.15+.023,-.008,.077),
               (s*.157+.032,-.079,.083),(s*.16,-.115,.077),
               (s*.157-.032,-.079,.083)],skin)

    def ankle_section(z):
        for a,b in zip(leg_sections,leg_sections[1:]):
            if a[2]<=z<=b[2]:
                t=(z-a[2])/(b[2]-a[2])
                return [a[k]*(1-t)+b[k]*t for k in [0,1,3,4]]
        return [.15,-.048,.067,.080]

    def ribbon_point(z,fraction,offset):
        cx,cy,width,depth=ankle_section(z)
        local_x=fraction*width/2+offset
        chamfer=min(.023,width*.4)
        front=cy-depth/2+max(0,abs(local_x)-(width/2-chamfer))
        return (s*cx+local_x,front-.0025,z)

    # Two thin bands cross on the front of each ankle, following its surface.
    for direction in [-1,1]:
        for i in range(6):
            a=i/6;b=(i+1)/6;za=.132+.112*a;zb=.132+.112*b
            fa=direction*(-.8+1.6*a);fb=direction*(-.8+1.6*b)
            shoe.face([ribbon_point(za,fa,-.006),ribbon_point(za,fa,.006),
                       ribbon_point(zb,fb,.006),ribbon_point(zb,fb,-.006)],ribbon)
    # A narrow wrap finishes the tie; it is not a closed boot cuff.
    wrap=[]
    for z in [.244,.260]:
        cx,cy,w,d=ankle_section(z)
        wrap.append([v+Vector((s*cx,cy,0)) for v in ring(w+.004,d+.004,z,.023)])
    for i in range(8):
        j=(i+1)%8;shoe.face([wrap[0][i],wrap[0][j],wrap[1][j],wrap[1][i]],ribbon)
    shoe.box((s*.15,-.101,.255),(.016,.010,.017),'f1cec5')
    finish(shoe)

studio_collection,camera=studio(scene,'Ballerina_Voxel',3.65)
for obj in studio_collection.objects:
    if obj.type=='MESH':obj.location.z=.03
scene.render.resolution_x=720;scene.render.resolution_y=840
camera.location=(3,-6,3.5);aim(camera,(0,0,1.27))
scene.render.filepath=str(OUT/'Ballerina_Voxel_ThreeQuarter.png');bpy.ops.render.render(write_still=True)
camera.location=(0,-7,3.0);aim(camera,(0,0,1.27))
scene.render.filepath=str(OUT/'Ballerina_Voxel_Front.png');bpy.ops.render.render(write_still=True)
scene.render.filepath=str(OUT/'Ballerina_Voxel_V9_Front.png');bpy.ops.render.render(write_still=True)
camera.location=(6,0,3.0);aim(camera,(0,0,1.27))
scene.render.filepath=str(OUT/'Ballerina_Voxel_Side.png');bpy.ops.render.render(write_still=True)
scene.render.filepath=str(OUT/'Ballerina_Voxel_V8_Side.png');bpy.ops.render.render(write_still=True)
camera.location=(3,6,3.0);aim(camera,(0,0,1.27))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V8_Back.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.45;camera.location=(2.5,-6,3.2);aim(camera,(0,-.10,2.13))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V21_Face_Raised.png');bpy.ops.render.render(write_still=True)
camera.location=(0,-6,2.18);aim(camera,(0,0,2.18))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V21_Face_Raised_Front.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=.83;camera.location=(1.8,-5,2.5);aim(camera,(0,-.06,1.59))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V4_Bodice.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.65;camera.location=(2.5,-6,3.2);aim(camera,(-.08,-.06,2.18))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V8_Head.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=2.05;camera.location=(0,-6,2.45);aim(camera,(0,0,1.73))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V9_Arms.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=1.50;camera.location=(0,-6,1.2);aim(camera,(0,-.03,.55))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V10_Legs.png');bpy.ops.render.render(write_still=True)
camera.location=(5,0,1.4);aim(camera,(0,-.05,.55))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V10_Legs_Side.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=.65;camera.location=(1,-3,1.4);aim(camera,(0,-.065,.145))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V11_Ballet_Shoes.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=.96;camera.location=(0,-5,2.1);aim(camera,(0,0,1.55))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V13_Clavicle_Front.png');bpy.ops.render.render(write_still=True)
camera.location=(1.8,5,2.4);aim(camera,(0,.04,1.55))
scene.render.filepath=str(OUT/'Ballerina_Voxel_V13_Clavicle_Back.png');bpy.ops.render.render(write_still=True)
camera.data.ortho_scale=3.65
camera.location=(3,-6,3.5);aim(camera,(0,0,1.27))

export_collection=bpy.data.collections.new('Ballerina_Voxel_Export');scene.collection.children.link(export_collection)
copies=[]
for source in parts:
    obj=source.copy();obj.data=source.data.copy();export_collection.objects.link(obj);copies.append(obj)
for obj in scene.objects:obj.select_set(False)
for obj in copies:obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0];bpy.ops.object.join()
combined=bpy.context.object;combined.name='Ballerina_Voxel_Model'
bpy.ops.export_scene.gltf(filepath=str(EXPORT/'Ballerina_Voxel.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=False,export_texcoords=False,export_yup=True)
bpy.ops.export_scene.fbx(filepath=str(EXPORT/'Ballerina_Voxel.fbx'),use_selection=True,object_types={'MESH'},axis_forward='-Z',axis_up='Y',bake_anim=False,path_mode='RELATIVE')
triangles=sum(len(p.vertices)-2 for p in combined.data.polygons)
export_collection.hide_render=True;export_collection.hide_viewport=True
for obj in studio_collection.objects:obj.hide_set(True)
for obj in scene.objects:obj.select_set(False)
parts[0].select_set(True);bpy.context.view_layer.objects.active=parts[0]
for area in bpy.context.screen.areas:
    if area.type=='VIEW_3D':
        area.spaces.active.shading.type='MATERIAL';area.spaces.active.region_3d.view_location=Vector((0,0,1.27))
        area.spaces.active.region_3d.view_distance=5.4;area.spaces.active.region_3d.view_rotation=camera.rotation_euler.to_quaternion()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Ballerina_Voxel_Review.blend'))
print(json.dumps({'triangles':triangles,'materials':len(combined.data.materials),'textures':0,'editable_parts':len(parts),'glb_bytes':(EXPORT/'Ballerina_Voxel.glb').stat().st_size,'status':'Static model awaiting approval; no animation yet'}))
