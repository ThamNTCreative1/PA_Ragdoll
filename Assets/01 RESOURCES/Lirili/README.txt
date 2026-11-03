LIRILI LARILA - APPROVED MODEL + IDLE
Normals corrected and re-exported on 2026-10-29. Coincident vertices are welded
before normal recalculation; per-corner colours retain all palette boundaries.
130 closed components checked: zero inverted components, zero zero-area faces.
Corrected FBX checked from four Unity views with backface culling enabled.

FILES
Lirili_Idle.prefab         Ready to use, material and looping Idle assigned.
Lirili_Idle.controller     Automatically plays the Idle animation.
Lirili_Idle.mat            Vertex-colour material for the corrected FBX.
Lirili_Idle.fbx            Model, skeleton and Idle animation for Unity.
Lirili_Idle.glb            Model, vertex colours, skeleton and Idle animation.
Blender source: ArtSource/Lirili/Idle/Lirili_Idle.blend
Unity verification: ArtSource/Lirili/Idle/Unity_ExportFixed_ThreeQuarter.png
LiriliVertexColor.shader   Built-in Unity shader for FBX vertex colours.

MODEL
1680 triangles; 1 skinned mesh; 1 material; 9 bones; no texture maps.
One foreleg and one hindleg, no arms.
Idle: 4 seconds at 24 fps, looping; sandals remain stationary.
No root motion. Clip includes body breathing, ear movement and trunk sway.
GLB animation is named Idle and runs from 0 to 4 seconds.

UNITY FBX SETUP
Drag Lirili_Idle.prefab into the scene to use the configured character.
For manual setup with the raw FBX:
1. Copy the FBX and shader into Assets.
2. FBX Inspector > Rig: Animation Type = Generic; Apply.
3. Animation: enable Import Animation and Loop Time for the idle clip.
4. Create a material with shader OBP/LiriliVertexColor; assign it to the mesh.
   The model's colours are stored in its vertices, not in image textures.
5. Play the clip using an Animator; disable Apply Root Motion.

BLENDER
Open Lirili_Idle.blend, scene Lirili_Idle_Review, and press Space to play.
Playback: frames 1-96. Frame 97 is the identical endpoint used for export.
The original reference and static review scenes are retained in the source file.

REFERENCE CREDIT
Visual reference supplied by the project owner:
"LIRILI LARILA" by gahgabrieldias
https://sketchfab.com/3d-models/lirili-larila-78fa6c2316e9480fa9dab2e2f4b16ae6
Source archive license: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/
The block geometry and idle rig/animation were rebuilt for this project.
