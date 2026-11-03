import bpy


def render_ballerina_preview():
    scene=bpy.data.scenes['Ballerina_Idle_Review']
    bpy.context.window.scene=scene;scene['preview_status']='rendering'
    for obj in scene.objects:
        if obj.name.startswith('Ballerina_Idle_Ground'):obj.location.z=.03
    scene.frame_start=1;scene.frame_end=96;scene.frame_set(1)
    scene.render.resolution_x=600;scene.render.resolution_y=700
    scene.render.image_settings.media_type='VIDEO';scene.render.image_settings.file_format='FFMPEG'
    scene.render.ffmpeg.format='MPEG4';scene.render.ffmpeg.codec='H264'
    scene.render.ffmpeg.constant_rate_factor='HIGH';scene.render.ffmpeg.audio_codec='NONE'
    scene.render.filepath=r'F:\UnityProjects\OBP_V04\ArtSource\BallerinaCappuccina\Ballerina_Idle_Preview.mp4'
    bpy.ops.render.render(animation=True)
    scene.frame_set(1);scene.render.image_settings.media_type='IMAGE';scene.render.image_settings.file_format='PNG'
    scene['preview_status']='ready'
    scene.render.resolution_x=720;scene.render.resolution_y=840
    scene.render.filepath=r'F:\UnityProjects\OBP_V04\ArtSource\BallerinaCappuccina\Ballerina_Idle_Stand.png'
    bpy.ops.render.render(write_still=True)
    scene.frame_set(25);scene.render.filepath=r'F:\UnityProjects\OBP_V04\ArtSource\BallerinaCappuccina\Ballerina_Idle_Dip.png'
    bpy.ops.render.render(write_still=True)
    scene.frame_set(1)
    bpy.ops.wm.save_as_mainfile(filepath=r'F:\UnityProjects\OBP_V04\ArtSource\BallerinaCappuccina\Ballerina_Idle.blend')
    return None


bpy.app.timers.register(render_ballerina_preview,first_interval=.5)
print('Ballerina preview scheduled.')
