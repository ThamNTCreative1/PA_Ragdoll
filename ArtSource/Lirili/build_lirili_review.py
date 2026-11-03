"""Lirili review model. Run inside Blender through the project's Blender Bridge.
Coordinates: Z up, -Y forward. Geometry is authored independently of the ZIP mesh.
The imported ZIP is retained only in the separate Lirili_Reference scene.
"""
import bpy
import math
import json
import sys
from pathlib import Path
from mathutils import Vector, Quaternion
from mathutils.geometry import tessellate_polygon
sys.path.insert(0,r'F:\UnityProjects\OBP_V04\ArtSource\Blender')
from voxel_tools import Geometry as ExportGeometry

OUT = Path(r'F:\UnityProjects\OBP_V04\ArtSource\Lirili')
OUT.mkdir(parents=True, exist_ok=True)
SCENE_NAME = 'Lirili_Voxel_Review'
COLLECTION_NAME = 'Lirili_Rebuilt_Review'


def srgb(hex_color):
    rgb = [int(hex_color[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4 for c in rgb) + (1,)


def mix(a, b, t):
    return tuple(x * (1 - t) + y * t for x, y in zip(a, b))


def material():
    m = bpy.data.materials.get('Lirili_OnePalette') or bpy.data.materials.new('Lirili_OnePalette')
    m.use_nodes = True
    nodes = m.node_tree.nodes
    nodes.clear()
    output = nodes.new('ShaderNodeOutputMaterial')
    bsdf = nodes.new('ShaderNodeBsdfPrincipled')
    bsdf.inputs['Roughness'].default_value = .88
    bsdf.inputs['Metallic'].default_value = 0
    bsdf.inputs['Specular IOR Level'].default_value = .22
    color = nodes.new('ShaderNodeVertexColor')
    color.layer_name = 'Color'
    m.node_tree.links.new(color.outputs['Color'], bsdf.inputs['Base Color'])
    m.node_tree.links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])
    return m


class Geometry:
    def __init__(self, name):
        self.name, self.vertices, self.faces, self.colors = name, [], [], []

    def face(self, vertices, color):
        k = len(self.vertices)
        self.vertices.extend(tuple(v) for v in vertices)
        self.faces.append(tuple(range(k, k + len(vertices))))
        self.colors.extend([color(v) if callable(color) else srgb(color) for v in vertices])

    def box(self, center, size, color, rotation=None):
        c, s = Vector(center), Vector(size) * .5
        p = [Vector((x * s.x, y * s.y, z * s.z)) for x, y, z in
             [(-1,-1,-1),(1,-1,-1),(1,1,-1),(-1,1,-1),(-1,-1,1),(1,-1,1),(1,1,1),(-1,1,1)]]
        if rotation:
            p = [rotation @ v for v in p]
        p = [v + c for v in p]
        for f in [(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)]:
            self.face([p[i] for i in f], color)

    def beam(self, a, b, width, depth, color):
        a, b = Vector(a), Vector(b)
        rotation = (b - a).to_track_quat('Z', 'Y')
        self.box((a + b) / 2, (width, depth, (b - a).length), color, rotation)

    def silhouette(self, points, width, color):
        # Extrude a stepped side profile, including its concave arch.
        front = [Vector((-width / 2, y, z)) for y, z in points]
        back = [Vector((width / 2, y, z)) for y, z in points]
        for tri in tessellate_polygon([front]):
            vertices = [front[i] for i in tri] if isinstance(tri[0], int) else list(tri)
            self.face(list(reversed(vertices)), color)
        for tri in tessellate_polygon([back]):
            vertices = [back[i] for i in tri] if isinstance(tri[0], int) else list(tri)
            self.face(vertices, color)
        for i in range(len(points)):
            j = (i + 1) % len(points)
            self.face([front[i], back[i], back[j], front[j]], color)

    def object(self, collection, mat):
        return ExportGeometry.object(self,collection,mat,repair_normals=True)


scene = bpy.data.scenes.get(SCENE_NAME)
if scene:
    # Regenerate only the explicitly named review scene.
    for obj in list(scene.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
else:
    scene = bpy.data.scenes.new(SCENE_NAME)
bpy.context.window.scene = scene
collection = bpy.data.collections.get(COLLECTION_NAME)
if collection:
    bpy.data.collections.remove(collection)
collection = bpy.data.collections.new(COLLECTION_NAME)
scene.collection.children.link(collection)
mat = material()
root = bpy.data.objects.new('Lirili_Voxel_Root', None)
collection.objects.link(root)
root['anatomy'] = 'One foreleg, one hindleg, no arms'
root['status'] = 'Awaiting user approval'
parts = []


def finish(g):
    obj = g.object(collection, mat)
    obj.parent = root
    parts.append(obj)
    return obj


low_green, high_green = srgb('425f38'), srgb('8c9d49')


def cactus_color(v):
    return mix(low_green, high_green, max(0, min(1, (v[2] - .25) / 2.35)))


# Continuous body: thick foreleg at -Y, thick hindleg at +Y, arch between them.
body = Geometry('01_Cactus_Body_And_Two_Legs')
profile = [
    (-.82,.24),(-.82,1.88),(-.73,1.88),(-.73,2.35),(-.55,2.35),
    (-.55,2.52),(-.18,2.52),(-.18,2.62),(.53,2.62),(.53,2.54),
    (.83,2.54),(.83,2.36),(1.00,2.36),(1.00,1.22),(1.07,1.22),
    (1.07,.24),(.54,.24),(.54,1.26),(.43,1.26),(.43,1.43),
    (.03,1.43),(.03,1.28),(-.17,1.28),(-.17,.24)
]
body.silhouette(profile, .72, cactus_color)
finish(body)

# Shallow rib relief, not separate limbs. Narrow strokes preserve the cactus look.
ribs = Geometry('02_Cactus_Ribs')
for x in [-.28,-.14,0,.14,.28]:
    color = 'a5ad60' if abs(x) > .2 else '929d4d'
    ribs.box((x,-.828,1.11),(.029,.018,1.67),color)
    ribs.box((x,1.079,.73),(.027,.018,.91),'72854b')
    ribs.box((x,1.012,1.72),(.027,.018,1.10),'74864b')
    ribs.box((x,.175,2.628),(.028,.70,.016),'b1b361')
    ribs.box((x,.665,2.548),(.028,.29,.016),'a0aa57')
for side in [-1,1]:
    for y, z, height in [(-.71,1.14,1.57),(-.40,1.02,1.32),(.70,.83,1.12),(.91,1.34,1.82)]:
        ribs.box((side*.367,y,z),(.018,.030,height),'6e8045')
    # A few small pale needles; no cactus branches/arms.
    for y,z in [(-.62,.83),(-.65,1.45),(-.38,1.85),(.74,.65),(.82,1.73),(.34,2.34)]:
        ribs.box((side*.379,y,z),(.020,.027,.058),'c1bd86')
finish(ribs)

head = Geometry('03_Elephant_Head')
head.silhouette([(-1.15,1.93),(-1.15,2.25),(-1.06,2.25),(-1.06,2.43),(-.88,2.43),(-.88,2.49),(-.55,2.49),(-.55,2.34),(-.49,2.34),(-.49,1.98),(-.65,1.98),(-.65,1.88),(-.99,1.88),(-.99,1.93)],.62,'b1ae90')
head.box((0,-1.16,2.035),(.31,.24,.30),'aaa88b')
head.box((0,-.85,2.49),(.47,.38,.055),'c8bfa0')
finish(head)

ears = Geometry('04_Elephant_Ears')
for s in [-1,1]:
    # Warm, stepped elephant ears hang beside the head, not beside the body.
    ears.box((s*.47,-.66,2.15),(.36,.26,.61),'bfb294')
    ears.box((s*.47,-.66,2.47),(.26,.23,.09),'cabf9e')
    ears.box((s*.47,-.66,1.82),(.25,.24,.08),'a69a7d')
    ears.box((s*.47,-.802,2.15),(.245,.028,.48),'d2b697')
    ears.box((s*.58,-.822,2.12),(.035,.017,.40),'bda083')
    ears.box((s*.39,-.822,2.20),(.025,.017,.34),'e2c6a6')
finish(ears)

face = Geometry('05_Small_Eyes_And_Wrinkles')
for s in [-1,1]:
    # Small lateral eyes; avoid the generic oversized face from the previous pass.
    face.box((s*.273,-1.081,2.278),(.105,.018,.078),'918d73')
    face.box((s*.275,-1.094,2.273),(.064,.018,.052),'24291e')
    face.box((s*.265,-1.105,2.286),(.018,.009,.014),'e2d8b5')
for z,w in [(2.34,.25),(2.29,.29),(2.20,.24)]:
    face.box((0,-1.163,z),(w,.011,.014),'96977d')
finish(face)

trunk = Geometry('06_Long_Stepped_Trunk')
for center,size,color in [
    ((0,-1.235,1.91),(.25,.24,.30),'b3b093'),
    ((0,-1.295,1.68),(.22,.23,.25),'b8b598'),
    ((0,-1.345,1.47),(.20,.21,.23),'bfbda0'),
    ((0,-1.385,1.28),(.18,.20,.21),'c4c2a5'),
    ((0,-1.445,1.11),(.165,.22,.19),'c9c7ac'),
    ((0,-1.515,.965),(.15,.22,.16),'ceccb1'),
    ((0,-1.615,.865),(.145,.24,.13),'d2cfb2'),
    ((0,-1.735,.885),(.145,.14,.15),'c9c9a9'),
    ((0,-1.79,.973),(.145,.13,.12),'82954f')
]:
    trunk.box(center,size,color)
for z,y,w in [(1.85,-1.361,.23),(1.76,-1.418,.21),(1.64,-1.418,.20),(1.50,-1.455,.18),(1.37,-1.490,.17)]:
    trunk.box((0,y,z),(w,.012,.015),'92967b')
trunk.box((-.035,-1.859,.992),(.042,.012,.030),'47552d')
trunk.box((.035,-1.859,.992),(.042,.012,.030),'47552d')
finish(trunk)

tusks = Geometry('07_Small_Ivory_Tusks')
for s in [-1,1]:
    tusks.beam((s*.22,-1.075,1.99),(s*.265,-1.28,1.83),.055,.055,'e2dbb8')
    tusks.beam((s*.265,-1.28,1.83),(s*.29,-1.43,1.89),.038,.038,'efe7c6')
finish(tusks)

for name, center_y, length in [('Fore',-.79,1.69),('Hind',1.07,1.40)]:
    shoe = Geometry('08_' + name + '_Sandal')
    shoe.box((0,center_y,.065),(.88,length,.13),'765039')
    shoe.box((0,center_y-.035,.135),(.93,length-.07,.07),'ac7952')
    shoe.box((0,center_y-.045,.179),(.86,length-.12,.035),'c09464')
    # Fore and hind feet share the center line; they are not a left/right pair.
    shoe.box((0,center_y-.08,.223),(.68,length-.29,.065),'6e8043')
    for offset in [-.30,.18]:
        shoe.box((0,center_y+offset,.30),(.88,.19,.135),'bc9168')
        shoe.box((0,center_y+offset-.101,.30),(.79,.018,.085),'9c7351')
        for x in [-.31,-.16,0,.16,.31]:
            shoe.box((x,center_y+offset,.372),(.037,.028,.009),'d6b58a')
    shoe.box((-.453,center_y-.035,.14),(.015,length-.17,.016),'dfb181')
    shoe.box((.453,center_y-.035,.14),(.015,length-.17,.016),'dfb181')
    finish(shoe)

# A review studio in its own scene; existing user/default scenes are preserved.
studio = bpy.data.collections.new('Lirili_Review_Studio')
scene.collection.children.link(studio)
ground_mat = bpy.data.materials.new('Lirili_Studio_Ground')
ground_mat.diffuse_color = srgb('1b2835')
ground_mat.use_nodes = True
ground_mat.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value = srgb('1b2835')
ground_mat.node_tree.nodes.get('Principled BSDF').inputs['Roughness'].default_value = 1
g = Geometry('Review_Ground')
g.box((0,0,-.10),(200,200,.12),'1b2835')
floor = g.object(studio,ground_mat)
world = bpy.data.worlds.new('Lirili_Studio_World')
world.use_nodes = True
world.node_tree.nodes['Background'].inputs[0].default_value = (.23,.26,.31,1)
world.node_tree.nodes['Background'].inputs[1].default_value = .55
scene.world = world

def aim(obj, target):
    obj.rotation_euler = (Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()

for name,loc,power,size in [('Key',(-3,-4,6),450,5),('Fill',(4,-2,4),220,4),('Rim',(2,4,5),450,3)]:
    data = bpy.data.lights.new('Lirili_'+name,'AREA')
    data.energy, data.shape, data.size = power,'DISK',size
    obj = bpy.data.objects.new(data.name,data)
    studio.objects.link(obj)
    obj.location = loc
    aim(obj,(0,0,1.3))
camera_data = bpy.data.cameras.new('Lirili_Review_Camera')
camera = bpy.data.objects.new(camera_data.name,camera_data)
studio.objects.link(camera)
scene.camera = camera
camera_data.type = 'ORTHO'
camera_data.ortho_scale = 4.25
scene.render.engine = 'BLENDER_EEVEE'
scene.render.resolution_x, scene.render.resolution_y = 900,1000
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = 'PNG'
scene.view_settings.view_transform = 'Standard'
scene.view_settings.look = 'Medium High Contrast' if 'Medium High Contrast' in [i.name for i in scene.view_settings.bl_rna.properties['look'].enum_items] else 'None'
scene.view_settings.exposure = 0
scene.view_settings.gamma = 1
scene.render.film_transparent = False

# Store the editable Blender file and portable single-mesh export before rendering.
for obj in scene.objects:
    obj.select_set(False)
for obj in parts:
    obj.select_set(True)
bpy.context.view_layer.objects.active = parts[0]
bpy.context.view_layer.update()
triangles = sum(len(p.vertices)-2 for obj in parts for p in obj.data.polygons)

# Join duplicates only for export. The source objects remain individually editable.
copies=[]
for obj in parts:
    clone=obj.copy();clone.data=obj.data.copy();collection.objects.link(clone);clone.parent=None
    clone.matrix_world=obj.matrix_world.copy();copies.append(clone)
for obj in scene.objects:
    obj.select_set(False)
for obj in copies:
    obj.select_set(True)
bpy.context.view_layer.objects.active=copies[0]
bpy.ops.object.join()
export_obj=bpy.context.object
export_obj.name='Lirili_Voxel_Review_SingleMesh'
bpy.ops.export_scene.gltf(filepath=str(OUT/'Lirili_Voxel_Review.glb'),export_format='GLB',use_selection=True,use_active_scene=True,export_materials='EXPORT',export_animations=False,export_normals=True,export_texcoords=False,export_yup=True)
bpy.data.objects.remove(export_obj,do_unlink=True)

camera.location=(4.5,-7,3.9)
aim(camera,(0,0,1.32))
scene.render.filepath=str(OUT/'Lirili_ThreeQuarter.png')
bpy.ops.render.render(write_still=True)
camera.location=(7,0,2.7)
aim(camera,(0,0,1.32))
scene.render.filepath=str(OUT/'Lirili_Side.png')
bpy.ops.render.render(write_still=True)
camera.location=(0,-8,2.7)
aim(camera,(0,0,1.32))
scene.render.filepath=str(OUT/'Lirili_Front.png')
bpy.ops.render.render(write_still=True)
camera.location=(4.5,-7,3.9)
aim(camera,(0,0,1.32))
for obj in scene.objects:
    obj.select_set(False)
root.select_set(True)
bpy.context.view_layer.objects.active=root
for screen in bpy.data.screens:
    for area in screen.areas:
        if area.type=='VIEW_3D':
            space=area.spaces.active
            space.shading.type='MATERIAL'
            space.region_3d.view_distance=5.9
            space.region_3d.view_location=Vector((0,0,1.3))
            space.region_3d.view_rotation=camera.rotation_euler.to_quaternion()

# Pack the original reference textures so the saved file is self-contained.
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'Lirili_Voxel_Review.blend'))
metrics={'triangles':triangles,'editable_parts':len(parts),'export_meshes':1,'materials':1,'textures':0,'glb_bytes':(OUT/'Lirili_Voxel_Review.glb').stat().st_size,'approval_status':'Awaiting user approval'}
print(json.dumps(metrics))
