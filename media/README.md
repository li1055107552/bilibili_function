# media 媒体相关（音视频下载）

## 文件说明

```shell
│  httpget.js           // 一条路走到黑版本，注释放开直接运行即可
│  Impl.js              // 相关实现(下载、正则等等)
│  main.js              // 主程序(但未完善版本)
│  README.md
│  
└─xld-BiliBiliDown      // 暂时没用
```

## 用法

### httpget.js

1. 在终端输入 `node httpget.js` 运行，通过终端键盘输入BV号 进行下载音频(audio.mp4)和视频(video.mp4)
2. 利用 **ffmpeg** 将 音频(audio.mp4)和视频(video.mp4) 两者混流
3. 可以将代码后半部分放开 `return null` 注释掉即可，然后选择一条指令运行

注意：这里使用的是 `node-cmd` 来代替和模拟 `windows终端` 运行 `ffmpeg` 命令

### main.js

未完善版本，本意是想将 `httpget.js` 抽离出来，然后封装成一个模块，从而在别处直接调用 生成完整视频
