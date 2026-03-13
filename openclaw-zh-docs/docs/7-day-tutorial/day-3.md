---
sidebar_position: 3
---

# Day 3: 工具和技能

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 使用内置工具
- ✅ 安装和管理技能
- ✅ 创建自动化任务

## 🕐 预计时间：1.5-2 小时

---

## 1. 内置工具使用

### 文件工具

#### 读取文件

```
你：读取 README.md 文件
助手：✓ 正在读取 README.md...

[文件内容...]
```

#### 写入文件

```
你：创建一个 test.txt 文件，写入 "Hello World"
助手：✓ 已创建 test.txt 文件
✓ 内容：Hello World
```

#### 文件操作

```yaml
# 配置文件工具
tools:
  file:
    read: true
    write: true
    delete: true
    allowedPaths:
      - ~/workspace/**
```

---

### 网络工具

#### 获取网页内容

```
你：获取 https://example.com 的内容
助手：✓ 正在获取网页...

[网页摘要...]
```

#### 搜索功能

```
你：搜索 "OpenClaw AI 助手" 的相关信息
助手：✓ 正在搜索...

[搜索结果...]
```

#### 网络请求

```yaml
# 配置网络工具
tools:
  web:
    enabled: true
    timeout: 30s
    userAgent: "OpenClaw/1.0"
```

---

### 浏览器工具

#### 自动化浏览器

```
你：打开 https://example.com 并截图
助手：✓ 正在打开网页...
✓ 已保存截图到 screenshot.png
```

#### 表单填写

```
你：访问登录页面并填写表单
助手：✓ 正在访问登录页面...
✓ 已填写表单
✓ 已提交
```

#### 浏览器配置

```yaml
# 配置浏览器工具
tools:
  browser:
    headless: true
    timeout: 30s
    screenshotPath: ~/workspace/screenshots
```

---

### 命令执行工具

#### 执行命令

```
你：列出当前目录的文件
助手：✓ 正在执行 ls -la...

[文件列表...]
```

#### Git 操作

```
你：查看 git 状态
助手：✓ 正在执行 git status...

[状态信息...]
```

#### 命令配置

```yaml
# 配置命令工具
tools:
  exec:
    shell: /bin/zsh
    timeout: 30s
    allowedCommands:
      - ls
      - git
      - npm
      - python
    deniedCommands:
      - rm -rf
      - sudo
```

---

## 2. ClawHub 技能市场

### 查找技能

```bash
# 搜索技能
clawhub search "天气"
clawhub search "数据分析"

# 列出已安装技能
clawhub list
```

### 安装技能

```bash
# 安装技能
clawhub install weather

# 安装特定版本
clawhub install weather --version 2.0.0

# 从 GitHub 安装
clawhub install git+https://github.com/user/skill
```

### 更新技能

```bash
# 更新单个技能
clawhub update weather

# 更新所有技能
clawhub update --all

# 强制更新
clawhub update --force
```

### 删除技能

```bash
# 删除技能
clawhub remove weather
```

---

## 3. 常用技能示例

### 天气技能

```bash
# 安装
clawhub install weather

# 使用
你：今天北京天气怎么样？
助手：✓ 正在查询天气...

北京今天：
- 温度：15-22°C
- 天气：多云
- 湿度：45%
- 风向：东南风 3级
```

### 翻译技能

```bash
# 安装
clawhub install translator

# 使用
你：把这段话翻译成英文：你好，世界
助手：✓ 正在翻译...

Translation: Hello, world
```

### 计算器技能

```bash
# 安装
clawhub install calculator

# 使用
你：计算 123 * 456
助手：✓ 正在计算...

Result: 56088
```

### 摘要技能

```bash
# 安装
clawhub install summarizer

# 使用
你：总结这篇文章的内容
助手：✓ 正在读取文章...
✓ 正在生成摘要...

摘要：
[文章摘要...]
```

---

## 4. 创建自动化任务

### 任务脚本

创建 `tasks/daily-report.yml`：

```yaml
name: 日报任务
description: 生成每日工作报告

steps:
  - name: 获取今日日期
    tool: exec
    command: date "+%Y-%m-%d"

  - name: 读取工作日志
    tool: file
    action: read
    path: ~/workspace/work-log.md

  - name: 生成日报
    tool: agent
    prompt: |
      基于以下工作日志生成今日工作报告：
      {{work_log}}

      包含：
      1. 完成的任务
      2. 遇到的问题
      3. 明日计划

  - name: 保存日报
    tool: file
    action: write
    path: ~/workspace/daily-report.md
```

### 运行任务

```bash
# 运行任务
openclaw task run tasks/daily-report.yml

# 调度任务
openclaw task schedule tasks/daily-report.yml --cron "0 18 * * *"
```

---

## 🎉 实战练习

### 练习 1：安装并使用技能

```
任务：
1. 安装 weather 技能
2. 查询当地天气
3. 安装 translator 技能
4. 翻译一段英文
```

### 练习 2：使用文件工具

```
任务：
1. 创建一个 notes.txt 文件
2. 写入 3 条笔记
3. 读取并显示内容
4. 创建备份文件
```

### 练习 3：创建自动化任务

```
任务：
1. 创建一个文件整理任务
2. 自动分类文件到不同目录
3. 生成整理报告
```

---

## 📝 今日总结

### 你学会了：

1. ✅ 使用文件、网络、浏览器等内置工具
2. ✅ 在 ClawHub 查找、安装、管理技能
3. ✅ 使用常用技能（天气、翻译、计算器等）
4. ✅ 创建和运行自动化任务

### 下一步：

明天我们将学习：
- 🧠 记忆系统的工作原理
- 💾 配置长期记忆
- 📝 上下文管理

---

## ❓ 常见问题

### Q: 技能安装失败怎么办？
A: 检查网络连接，确认技能名称正确，查看错误日志

### Q: 如何开发自己的技能？
A: 参考 Day 7 的内容，或查看技能开发文档

### Q: 工具权限如何设置？
A: 在 config.yml 中配置 `allowedCommands` 和 `deniedCommands`

### Q: 如何调试任务？
A: 使用 `--debug` 参数：`openclaw task run task.yml --debug`

---

**恭喜完成 Day 3！** 🎊

你现在拥有了丰富的工具和技能库！

## 📚 延伸阅读

- [技能系统](../skills/)
- [实例教程](../examples/)
- [API 参考](../api/)
