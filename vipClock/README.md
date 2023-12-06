# vipClock

大会员每日看视频 可以领取10经验领取

## 使用建议

可以每天调用一次，比如定时每天 23:58 调用一次，若当天看了视频就可以自动领取10经验

```bash
$ sudo apt install cron
$ crontab -e

# 58 23 * * * cd /your_project_path && node vipClock/main.js
```

## 参数说明

- mid: 你的UID
