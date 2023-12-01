
`$ ffmpeg -hwaccels`

cuda
dxva2
qsv
d3d11va
opencl
vulkan


`$ ffmpeg -codecs | sls nvenc`

DEV.LS h264                 H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 
(decoders: h264 h264_qsv libopenh264 h264_cuvid) 
(encoders: libx264 libx264rgb libopenh264 h264_amf h264_mf h264_nvenc h264_qsv )

DEV.L. hevc                 H.265 / HEVC (High Efficiency Video Coding) 
(decoders: hevc hevc_qsv **hevc_cuvid** ) 
(encoders: libx265 hevc_amf hevc_mf **hevc_nvenc** hevc_qsv libkvazaar )

`$ ffmpeg -decoders | sls hevc`

VFS..D hevc                 HEVC (High Efficiency Video Coding)
V....D hevc_qsv             HEVC video (Intel Quick Sync Video acceleration) (codec hevc)
**V..... hevc_cuvid           Nvidia CUVID HEVC decoder (codec hevc)**


`$ ffmpeg -encoders | sls hevc`

V....D libx265              libx265 H.265 / HEVC (codec hevc)
V....D hevc_amf             AMD AMF HEVC encoder (codec hevc)
V....D hevc_mf              HEVC via MediaFoundation (codec hevc)
V....D **hevc_nvenc**           NVIDIA NVENC hevc encoder (codec hevc)
V..... hevc_qsv             HEVC (Intel Quick Sync Video acceleration) (codec hevc)
V....D libkvazaar           libkvazaar H.265 / HEVC (codec hevc)


`ffmpeg -codecs | sls avc`

DEV.LS h264                 H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 
(decoders: h264 h264_qsv libopenh264 **h264_cuvid**) 
(encoders: libx264 libx264rgb libopenh264 h264_amf h264_mf **h264_nvenc** h264_qsv )

D.AIL. avc                  On2 Audio for Video Codec 
(decoders: on2avc )


-hide_banner