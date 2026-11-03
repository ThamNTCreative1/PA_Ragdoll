"""Queue the idle video so Blender's bridge can return before rendering."""
import bpy
def render_bombardiro_preview():
    scene=bpy.data.scenes['Bombardiro_Idle_Review'];bpy.context.window.scene=scene
    scene.render.resolution_percentage=75;scene.frame_start=1;scene.frame_end=120
    scene.render.image_settings.media_type='VIDEO';scene.render.image_settings.file_format='FFMPEG'
    scene.render.ffmpeg.format='MPEG4';scene.render.ffmpeg.codec='H264'
    scene.render.ffmpeg.constant_rate_factor='MEDIUM'
    scene.render.filepath=r'F:\UnityProjects\OBP_V04\ArtSource\BombardiroCrocodilo\Idle\Bombardiro_Idle_Preview.mp4'
    bpy.ops.render.render(animation=True)
    scene.render.image_settings.media_type='IMAGE';scene.render.image_settings.file_format='PNG'
    scene.render.resolution_percentage=100;scene.frame_end=121;scene.frame_set(1)
    return None
bpy.app.timers.register(render_bombardiro_preview,first_interval=1)
print('Bombardiro idle preview queued')
