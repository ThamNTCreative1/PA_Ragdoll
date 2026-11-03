BRAINROT VOXEL - OBP_V04

Five newly constructed block-style models based on the character references:
Tralalero Tralala, Ballerina Cappuccina, Bombardiro Crocodilo,
Lirili Larila, and Tung Tung Sahur.

UNITY ASSETS
Assets/01 RESOURCES/BrainrotVoxel/Prefabs - ready-to-place prefabs
Assets/01 RESOURCES/BrainrotVoxel/Models - native Unity mesh assets
Assets/01 RESOURCES/BrainrotVoxel/Materials - shared normal/frozen materials
Assets/01 RESOURCES/BrainrotVoxel/Scenes/BrainrotVoxel_Showroom.unity

PORTABLE FILES
GLB/ - static glTF 2.0 binary models with vertex colours, normals and indices
Previews/ - actual Unity renders, including a lineup and frozen-state example
ModelStats.csv - measured triangle/vertex counts and uncompressed GLB sizes

MODEL CONVENTIONS
Unity: Y up, +Z forward, origin on the ground, dimensions in metres.
GLB export uses glTF coordinates (Z reflected from Unity).
One mesh, one submesh, one shared opaque material per normal character.
No texture maps, skeleton, Animator, or runtime mesh construction is required.
All geometry, colour placement and silhouettes were rebuilt from cuboids.
No source ZIP mesh data, textures or animation tracks were copied into these assets.

IDLE / FREEZE
The prefab's BrainrotVoxelActor provides a gentle whole-model sway/breathe idle.
It is a procedural idle, not a skeletal animation; the exported GLBs are static.
Call GetComponent<OBP.BrainrotVoxel.BrainrotVoxelActor>().SetFrozen(true)
to stop the idle, apply the shared ice material, and enable the frost frame.
SetFrozen(false) restores the normal appearance and idle.
Freeze/Thaw are also available in the component context menu.
The box collider is a coarse hit target; there is no combat or wave logic here.
Frozen state uses two opaque mesh renderers, avoiding a transparent ice shell.

EDIT / REBUILD
Assets/Editor/BrainrotVoxelBuilder.cs contains the editable dimensions/colours.
Tools > Brainrot Voxel > Build Five Models regenerates this asset set.
Tools > Brainrot Voxel > Render Preview Sheets regenerates PNG previews.
Rebuilding replaces this generator's named model/material/prefab assets.
Duplicate an asset first if making manual edits you want to retain.

PLAYABLE ADS
414-816 triangles per character in this revision, before optional frost geometry.
The five standalone GLBs total about 235 KiB, without textures.
Lirili has no arms and has one foreleg and one hindleg along the forward axis.
These are source asset metrics, not final playable build/download size.
The shader is a small built-in-pipeline vertex-colour shader for this project.
Validate the shader/export and final size in the actual playable SDK before release.
