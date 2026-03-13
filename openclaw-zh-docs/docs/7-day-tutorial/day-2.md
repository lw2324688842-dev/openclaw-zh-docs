---
sidebar_position: 2
---

# Day 2: 基础配置

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 配置 AI 模型参数
- ✅ 设置消息通道
- ✅ 高级对话配置

## 🕐 预计时间：1-1.5 小时

---

## 1. AI 模型配置

### 选择合适的模型

OpenClaw 支持多种 AI 模型：

#### GPT-4 系列
- **gpt-4** - 最强能力，适合复杂任务
- **gpt-4-turbo** - 快速响应，成本较低
- **gpt-3.5-turbo** - 最快，最便宜

#### Claude 系列
- **claude-3-opus** - 最强分析能力
- **claude-3-sonnet** - 平衡性能和成本
- **claude-3-haiku** - 最快响应

#### Google Gemini
- **gemini-pro** - Google 最新模型
- **gemini-pro-vision** - 支持图像

### 配置模型参数

编辑 `config.yml`：

```yaml
# 基础配置
model: gpt-4-turbo
provider: openai

# 温度参数（0-2）
temperature: 0.7

# 最大令牌数
maxTokens: 2000

# 系统提示词
system: |
  你是一个专业的 AI 助手，
  帮助用户解决各种问题。
  回答要简洁、准确、有帮助。
```

### 参数说明

**Temperature（温度）**
- **0.0-0.3**: 确定性高，适合技术问题
- **0.4-0.7**: 平衡，适合通用场景
- **0.8-1.0**: 创造性高，适合创意写作
- **1.0-2.0**: 非常随机，可能产生意想不到的结果

**Max Tokens**
- 控制响应的最大长度
- 建议：500-2000（根据任务调整）
- 过高会增加成本

---

## 2. 消息通道配置

### Telegram 配置

#### 1. 创建 Telegram Bot

1. 在 Telegram 中搜索 `@BotFather`
2. 发送 `/newbot` 命令
3. 按提示设置机器人名称
4. 复制获取的 API Token

#### 2. 配置 OpenClaw

在 `config.yml` 中添加：

```yaml
channels:
  telegram:
    botToken: ${TELEGRAM_BOT_TOKEN}
    allowedUsers:
      - your-username
    webhook:
      enabled: true
      url: https://your-domain.com/telegram/webhook
```

#### 3. 启动 Telegram 集成

```bash
# 设置环境变量
export TELEGRAM_BOT_TOKEN="your-token"

# 重启网关
openclaw gateway restart
```

#### 4. 测试

在 Telegram 中向你的 Bot 发送消息！

---

### Discord 配置

#### 1. 创建 Discord Application

1. 访问 https://discord.com/developers/applications
2. 点击 "New Application"
3. 设置应用名称
4. 获取 Application ID 和 Client ID

#### 2. 创建 Bot

1. 在应用设置中，点击 "Bot"
2. 点击 "Add Bot"
3. 获取 Bot Token

#### 3. 配置 OpenClaw

```yaml
channels:
  discord:
    botToken: ${DISCORD_BOT_TOKEN}
    clientId: ${DISCORD_CLIENT_ID}
    guildIds:
      - your-guild-id
```

#### 4. 邀请 Bot 到服务器

生成邀请链接：
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot
```

---

## 3. 高级配置

### 记忆系统配置

```yaml
memory:
  enabled: true
  type: local

  # 短期记忆
  shortTerm:
    maxSize: 1000
    ttl: 1h

  # 长期记忆
  longTerm:
    path: ~/openclaw-workspace/memory
    autoSave: true
```

### 工具权限配置

```yaml
tools:
  file:
    read: true
    write: true
    allowedPaths:
      - ~/workspace/**
    deniedPaths:
      - ~/.ssh/**
      - ~/.aws/**

  exec:
    allowedCommands:
      - ls
      - git
      - npm
    deniedCommands:
      - rm -rf
      - sudo
```

### 速率限制配置

```yaml
rateLimit:
  enabled: true
  window: 1m
  maxRequests: 60
```

---

## 4. 多 Agent 配置

创建多个专门的助手：

### 创建配置文件

在 `~/openclaw-workspace/` 创建多个配置：

#### agent-coder.yml
```yaml
name: Code Assistant
model: gpt-4
system: |
  你是一个编程专家，帮助用户编写和调试代码。
  回答要技术准确，提供代码示例。
tools:
  - file
  - web
  - exec
skills:
  - git
  - code-review
```

#### agent-writer.yml
```yaml
name: Content Writer
model: claude-3-opus
system: |
  你是一个专业的内容创作者，帮助用户撰写文案和文章。
  语言要生动有趣，有感染力。
temperature: 0.9
```

#### agent-assistant.yml
```yaml
name: Personal Assistant
model: gpt-4-turbo
system: |
  你是个人助理，帮助用户管理日常事务。
  回答要简洁高效。
memory:
  enabled: true
```

### 切换 Agent

```bash
# 列出所有 Agent
openclaw agent list

# 切换 Agent
openclaw agent switch coder

# 启动特定 Agent
openclaw agent start --config agent-coder.yml
```

---

## 🎉 实战练习

### 练习 1：配置 Telegram Bot

```
任务：
1. 创建 Telegram Bot
2. 配置 OpenClaw 集成
3. 在 Telegram 中测试对话
```

### 练习 2：调整模型参数

```
任务：
1. 使用不同温度值测试（0.2, 0.5, 0.8, 1.0）
2. 对比不同参数的回答差异
3. 找到最适合你需求的配置
```

### 练习 3：创建专用助手

```
任务：
1. 创建一个专门用于代码的助手
2. 创建一个专门用于写作的助手
3. 切换并测试不同助手
```

---

## 📝 今日总结

### 你学会了：

1. ✅ 配置不同 AI 模型
2. ✅ 调整模型参数（温度、令牌数等）
3. ✅ 设置 Telegram 和 Discord 通道
4. ✅ 高级配置（记忆、权限、速率限制）
5. ✅ 创建和管理多个 Agent

### 下一步：

明天我们将学习：
- 🔧 使用内置工具
- 📦 安装和管理技能
- 🛠️ 创建自动化任务

---

## ❓ 常见问题

### Q: 如何选择合适的模型？
A: GPT-4 最强但贵，GPT-3.5 最快最便宜。复杂任务用 GPT-4，简单任务用 GPT-3.5

### Q: Temperature 设置多少合适？
A: 通用场景 0.7，技术问题 0.3，创意写作 0.9

### Q: 如何添加更多用户？
A: 在 `allowedUsers` 中添加用户名，或设置为 `*` 允许所有用户

### Q: 多 Agent 如何共享数据？
A: 每个独立的 Agent 有独立的记忆，可通过 MEMORY.md 共享

---

**恭喜完成 Day 2！** 🎊

你已经配置好了强大的 AI 助手！

## 📚 延伸阅读

- [配置指南](../configuration/)
- [技能系统](../skills/)
- [API 参考](../api/)
