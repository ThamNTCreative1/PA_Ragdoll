"""Schedule a preview render after the bridge returns, avoiding a long RPC."""
import bpy


def render_original_preview():
    scene=bpy.data.scenes['Tralalero_Original_Idle']
    bpy.context.window.scene=scene
    scene['preview_status']='rendering'
    scene.frame_start=1;scene.frame_end=96;scene.frame_set(1)
    scene.render.resolution_x=630;scene.render.resolution_y=560
    scene.render.image_settings.media_type='VIDEO';scene.render.image_settings.file_format='FFMPEG'
    scene.render.ffmpeg.format='MPEG4';scene.render.ffmpeg.codec='H264'
    scene.render.ffmpeg.constant_rate_factor='HIGH';scene.render.ffmpeg.audio_codec='NONE'
    scene.render.filepath=r'F:\UnityProjects\OBP_V04\ArtSource\Tralalero\Original\Tralalero_Original_Idle.mp4'
    bpy.ops.render.render(animation=True)
    scene.frame_set(1)
    scene.render.image_settings.media_type='IMAGE';scene.render.image_settings.file_format='PNG'
    scene['preview_status']='ready'
    bpy.ops.wm.save_as_mainfile(filepath=r'F:\UnityProjects\OBP_V04\ArtSource\Tralalero\Original\Tralalero_Original_Idle.blend')
    return None


bpy.app.timers.register(render_original_preview,first_interval=.5)
print('Original idle preview scheduled.')
