LIRILI LARILA - APPROVED MODEL + IDLE

FILES
Lirili_Idle.fbx            Model, skeleton and Idle animation for Unity.
Lirili_Idle.glb            Model, vertex colours, skeleton and Idle animation.
Lirili_Idle.blend          Editable Blender 5.2 source.
Lirili_Idle_Preview.mp4    Rendered animation preview.
LiriliVertexColor.shader   Built-in Unity shader for FBX vertex colours.

MODEL
1680 triangles; 1 skinned mesh; 1 material; 9 bones; no texture maps.
One foreleg and one hindleg, no arms.
Idle: 4 seconds at 24 fps, looping; sandals remain stationary.
No root motion. Clip includes body breathing, ear movement and trunk sway.
GLB animation is named Idle and runs from 0 to 4 seconds.

UNITY FBX SETUP
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
