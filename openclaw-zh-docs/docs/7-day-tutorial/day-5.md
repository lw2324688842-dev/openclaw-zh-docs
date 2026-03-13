---
sidebar_position: 5
---

# Day 5: 自动化和任务

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 设置定时任务
- ✅ 使用任务调度
- ✅ 配置提醒系统

## 🕐 预计时间：1.5-2 小时

---

## 1. 定时任务基础

### Cron 表达式

Cron 是用于设置定时任务的标准格式：

```
* * * * * *
│ │ │ │ │ │
│ │ │ │ │ └─ 星期几 (0-6, 0=周日)
│ │ │ │ └─── 月份 (1-12)
│ │ │ └───── 日期 (1-31)
│ │ └─────── 小时 (0-23)
│ └───────── 分钟 (0-59)
└─────────── 命令
```

### 常用 Cron 表达式

```cron
# 每分钟执行
* * * * *

# 每小时执行
0 * * * *

# 每天凌晨 3 点执行
0 3 * * *

# 每周一早上 9 点执行
0 9 * * 1

# 每 5 分钟执行
*/5 * * * *

# 每月 1 号执行
0 0 1 * *

# 工作日早上 9 点执行（周一到周五）
0 9 * * 1-5

# 每天早上 9 点和下午 6 点执行
0 9,18 * * *
```

---

## 2. 配置定时任务

### 基本任务配置

在 `config.yml` 中添加：

```yaml
schedules:
  # 每日任务
  - name: daily-report
    cron: "0 9 * * *"  # 每天早上 9 点
    agent: main
    message: "生成今日工作计划"
    enabled: true

  # 每周任务
  - name: weekly-review
    cron: "0 18 * * 5"  # 每周五下午 6 点
    agent: main
    message: "总结本周工作"
    enabled: true

  # 每月任务
  - name: monthly-backup
    cron: "0 2 1 * *"  # 每月 1 号凌晨 2 点
    agent: main
    message: "执行数据备份"
    enabled: true
```

### 带参数的任务

```yaml
schedules:
  - name: send-email
    cron: "0 9 * * 1-5"  # 工作日早上 9 点
    agent: main
    message: "给团队发送邮件"
    params:
      recipients:
        - alice@example.com
        - bob@example.com
      subject: "今日会议提醒"
      body: "今日上午 10 点有周会"
```

---

## 3. 提醒系统

### 设置提醒

```bash
# N 分钟后提醒
openclaw remind "30分钟后提醒我休息" --after 30m

# N 小时后提醒
openclaw remind "2小时后提醒我开会" --after 2h

# 特定时间提醒
openclaw remind "明天早上9点提醒我" --at "tomorrow 9:00"

# 周期性提醒
openclaw remind "每小时提醒我喝水" --interval 1h --repeat
```

### 列出提醒

```bash
# 列出所有提醒
openclaw remind list

# 列出活跃提醒
openclaw remind list --active
```

### 删除提醒

```bash
# 删除特定提醒
openclaw remind remove <reminder-id>

# 删除所有提醒
openclaw remind clear
```

### 提醒配置

```yaml
reminders:
  enabled: true
  persistence: true
  storagePath: ~/openclaw-workspace/reminders.json

  # 提醒方式
  channels:
    - telegram
    - discord

  # 默认提醒时长
  defaultDuration: 30m

  # 重复提醒
  allowRepeat: true
  maxRepeat: 10
```

---

## 4. 任务调度系统

### 创建任务队列

创建 `tasks/queue.yml`：

```yaml
name: 每日任务队列
description: 按顺序执行的任务

tasks:
  - name: 检查邮件
    task: check-email
    priority: high
    timeout: 5m

  - name: 获取新闻
    task: fetch-news
    priority: medium
    timeout: 3m

  - name: 生成日报
    task: generate-report
    priority: low
    timeout: 10m

  - name: 发送通知
    task: send-notification
    priority: high
    timeout: 2m
```

### 执行任务队列

```bash
# 执行队列
openclaw task run-queue tasks/queue.yml

# 执行特定优先级的任务
openclaw task run-queue tasks/queue.yml --priority high
```

### 任务依赖

```yaml
tasks:
  - name: 准备数据
    task: prepare-data
    id: prepare

  - name: 处理数据
    task: process-data
    depends_on:
      - prepare
    id: process

  - name: 生成报告
    task: generate-report
    depends_on:
      - process
```

---

## 5. 工作流自动化

### Webhook 集成

```yaml
webhooks:
  - name: github-integration
    url: /webhooks/github
    secret: ${GITHUB_SECRET}
    events:
      - push
      - pull_request

    actions:
      - event: push
        action: run-tests
      - event: pull_request
        action: code-review
```

### API 自动化

```yaml
api:
  enabled: true
  port: 3000
  routes:
    - path: /api/report
      method: POST
      action: generate-report

    - path: /api/backup
      method: POST
      action: backup-data
```

### 文件监控

```yaml
fileWatchers:
  - name: 监控文档变更
    path: ~/workspace/docs
    pattern: "*.md"
    events:
      - create
      - modify

    action: |
      当文档变更时：
      1. 自动备份
      2. 发送通知
      3. 更新搜索索引
```

---

## 6. 高级调度

### 任务并发控制

```yaml
schedules:
  concurrency:
    maxConcurrent: 3      # 最大并发任务数
    queueSize: 10         # 队列大小
    timeout: 3600s        # 任务超时
```

### 任务重试

```yaml
schedules:
  retry:
    enabled: true
    maxAttempts: 3       # 最大重试次数
    backoff: exponential  # 退避策略
    initialDelay: 1m      # 初始延迟
    maxDelay: 10m         # 最大延迟
```

### 任务监控

```yaml
monitoring:
  enabled: true
  metrics:
    - taskCount
    - successRate
    - averageDuration
    - errorRate

  alerts:
    - condition: errorRate > 0.1
      action: send-alert
      message: "任务错误率过高"
```

---

## 🎉 实战练习

### 练习 1：创建每日提醒

```
任务：
1. 设置每 30 分钟提醒喝水
2. 设置每天早上 9 点提醒工作
3. 设置每天下午 6 点提醒休息
```

### 练习 2：配置定时任务

```
任务：
1. 配置每天早上生成日报
2. 配置每周五总结工作
3. 配置每月 1 号备份数据
```

### 练习 3：创建工作流

```
任务：
1. 创建文件监控工作流
2. 配置文件变更自动通知
3. 测试工作流是否正常工作
```

---

## 📝 今日总结

### 你学会了：

1. ✅ 理解和使用 Cron 表达式
2. ✅ 配置定时任务
3. ✅ 使用提醒系统
4. ✅ 创建任务队列和工作流
5. ✅ 高级调度功能（并发、重试、监控）

### 下一步：

明天我们将学习：
- 📊 电商数据分析案例
- ✍️ 内容生成实战
- 🤖 工作流自动化案例

---

## ❓ 常见问题

### Q: Cron 表达式太难记怎么办？
A: 使用在线生成器：https://crontab-generator.org/

### Q: 任务执行失败怎么办？
A: 检查任务日志，确认网络和 API 连接，查看错误信息

### Q: 如何测试定时任务？
A: 使用 `--dry-run` 参数：`openclaw schedule run --dry-run`

### Q: 提醒会持久化吗？
A: 配置 `persistence: true` 后会保存，重启后仍然有效

---

**恭喜完成 Day 5！** 🎊

你的 AI 助手现在可以自动工作了！

## 📚 延伸阅读

- [实例教程](../examples/)
- [配置指南](../configuration/)
- [API 参考](../api/)
