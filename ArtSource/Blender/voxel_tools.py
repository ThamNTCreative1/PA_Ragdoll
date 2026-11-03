"""Shared small-mesh helpers for hand-authored Blender models. Z up, -Y forward."""
import bpy
import bmesh
from mathutils import Vector
from mathutils.geometry import tessellate_polygon


def srgb(value):
    channels = [int(value[i:i+2], 16)/255 for i in (0,2,4)]
    return tuple(c/12.92 if c <= .04045 else ((c+.055)/1.055)**2.4 for c in channels)+(1,)


class Geometry:
    def __init__(self, name):
        self.name, self.vertices, self.faces, self.colors = name, [], [], []

    def face(self, vertices, color):
        vertices = list(vertices)
        k = len(self.vertices)
        self.vertices.extend(tuple(v) for v in vertices)
        self.faces.append(tuple(range(k,k+len(vertices))))
        self.colors.extend([srgb(color)]*len(vertices))

    def box(self, center, size, color, rotation=None):
        c, s = Vector(center), Vector(size)*.5
        points = [Vector((x*s.x,y*s.y,z*s.z)) for x,y,z in
                  [(-1,-1,-1),(1,-1,-1),(1,1,-1),(-1,1,-1),(-1,-1,1),(1,-1,1),(1,1,1),(-1,1,1)]]
        if rotation:
            points = [rotation@v for v in points]
        points = [p+c for p in points]
        for face in [(0,3,2,1),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)]:
            self.face([points[i] for i in face],color)

    def beam(self, a, b, width, depth, color):
        a,b=Vector(a),Vector(b)
        self.box((a+b)/2,(width,depth,(b-a).length),color,(b-a).to_track_quat('Z','Y'))

    def profile(self, points, width, color):
        left=[Vector((-width/2,y,z)) for y,z in points]
        right=[Vector((width/2,y,z)) for y,z in points]
        for ring in [left,right]:
            for tri in tessellate_polygon([ring]):
                self.face([ring[i] for i in tri] if isinstance(tri[0],int) else tri,color)
        for i in range(len(points)):
            j=(i+1)%len(points)
            self.face([left[i],right[i],right[j],left[j]],color)

    def object(self, collection, material, repair_normals=False):
        mesh=bpy.data.meshes.new(self.name+'_Mesh')
        mesh.from_pydata(self.vertices,[],self.faces)
        mesh.update()
        if repair_normals:
            # Face corners retain palette boundaries while coincident vertices
            # are welded, so normal recalculation sees connected surfaces.
            colors=mesh.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='CORNER')
            for loop in mesh.loops:colors.data[loop.index].color=self.colors[loop.vertex_index]
            bm=bmesh.new();bm.from_mesh(mesh)
            bmesh.ops.remove_doubles(bm,verts=list(bm.verts),dist=1e-6)
            bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
            remaining=set(bm.faces)
            while remaining:
                first=remaining.pop();stack=[first];component=[first]
                while stack:
                    face=stack.pop()
                    for edge in face.edges:
                        for neighbour in edge.link_faces:
                            if neighbour in remaining:
                                remaining.remove(neighbour);stack.append(neighbour);component.append(neighbour)
                closed=all(len(edge.link_faces)==2 for face in component for edge in face.edges)
                if closed:
                    score=sum(face.calc_area()*face.normal.dot(face.calc_center_median()) for face in component)
                elif self.name.startswith('04_'):
                    score=sum(face.calc_area()*face.normal.dot(Vector((0,-.99756,-.06976))) for face in component)
                elif self.name.startswith('02_'):
                    score=sum(face.calc_area()*face.normal.z for face in component)
                else:
                    centre=sum((face.calc_center_median() for face in component),Vector())/len(component)
                    score=sum(face.calc_area()*face.normal.dot(face.calc_center_median()-centre) for face in component)
                if score<0:bmesh.ops.reverse_faces(bm,faces=component)
            bm.to_mesh(mesh);bm.free();mesh.update()
            mesh.materials.append(material)
            obj=bpy.data.objects.new(self.name,mesh);collection.objects.link(obj)
            return obj
        bm=bmesh.new();bm.from_mesh(mesh)
        bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
        bm.to_mesh(mesh);bm.free()
        colors=mesh.color_attributes.new(name='Color',type='FLOAT_COLOR',domain='POINT')
        for i,c in enumerate(self.colors):
            colors.data[i].color=c
        mesh.materials.append(material)
        obj=bpy.data.objects.new(self.name,mesh)
        collection.objects.link(obj)
        return obj


def vertex_material(name):
    mat=bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes=True
    nodes=mat.node_tree.nodes;nodes.clear()
    output=nodes.new('ShaderNodeOutputMaterial')
    surface=nodes.new('ShaderNodeBsdfPrincipled')
    surface.inputs['Roughness'].default_value=.85
    surface.inputs['Specular IOR Level'].default_value=.22
    colors=nodes.new('ShaderNodeVertexColor');colors.layer_name='Color'
    mat.node_tree.links.new(colors.outputs['Color'],surface.inputs['Base Color'])
    mat.node_tree.links.new(surface.outputs['BSDF'],output.inputs['Surface'])
    return mat


def aim(obj,target):
    obj.rotation_euler=(Vector(target)-obj.location).to_track_quat('-Z','Y').to_euler()


def studio(scene,prefix,scale=4.8):
    collection=bpy.data.collections.new(prefix+'_Studio');scene.collection.children.link(collection)
    mat=bpy.data.materials.new(prefix+'_GroundMaterial');mat.use_nodes=True
    mat.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value=srgb('1b2835')
    mat.node_tree.nodes['Principled BSDF'].inputs['Roughness'].default_value=1
    floor=Geometry(prefix+'_Ground');floor.box((0,0,-.09),(200,200,.12),'1b2835');floor.object(collection,mat)
    world=bpy.data.worlds.new(prefix+'_World');world.use_nodes=True
    world.node_tree.nodes['Background'].inputs[0].default_value=(.23,.26,.31,1)
    world.node_tree.nodes['Background'].inputs[1].default_value=.55;scene.world=world
    for suffix,loc,power,size in [('Key',(-3,-4,6),450,5),('Fill',(4,-2,4),220,4),('Rim',(2,4,5),450,3)]:
        data=bpy.data.lights.new(prefix+'_'+suffix,'AREA');data.energy=power;data.shape='DISK';data.size=size
        obj=bpy.data.objects.new(data.name,data);collection.objects.link(obj);obj.location=loc;aim(obj,(0,0,1.1))
    data=bpy.data.cameras.new(prefix+'_Camera');camera=bpy.data.objects.new(data.name,data)
    collection.objects.link(camera);scene.camera=camera;data.type='ORTHO';data.ortho_scale=scale
    camera.location=(4,-6,3.5);aim(camera,(0,0,1.1))
    scene.render.engine='BLENDER_EEVEE'
    scene.render.resolution_x=900;scene.render.resolution_y=800;scene.render.resolution_percentage=100
    scene.render.image_settings.file_format='PNG'
    scene.view_settings.view_transform='Standard'
    return collection,camera
