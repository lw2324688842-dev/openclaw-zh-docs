---
sidebar_position: 1
---

# 快速开始

欢迎来到 OpenClaw！本指南将帮助你在 5 分钟内启动并运行你的第一个 AI 助手。

## 安装 OpenClaw

### 前置要求

确保你的系统已安装：
- **Node.js** 18.0 或更高版本
- **npm** 或 **yarn** 包管理器
- **macOS / Linux / Windows** 系统

### 安装步骤

```bash
# 全局安装 OpenClaw
npm install -g openclaw

# 验证安装
openclaw --version
```

## 启动 OpenClaw

### 1. 初始化配置

```bash
# 创建工作目录
mkdir ~/openclaw-workspace
cd ~/openclaw-workspace

# 初始化 OpenClaw
openclaw init
```

### 2. 配置 API 密钥

OpenClaw 需要访问 AI 模型 API。支持多种提供商：

```bash
# 设置 OpenAI API 密钥
export OPENAI_API_KEY="your-api-key-here"

# 或使用 Anthropic
export ANTHROPIC_API_KEY="your-api-key-here"

# 或使用其他兼容提供商
export OPENCLAW_API_KEY="your-api-key-here"
```

### 3. 启动网关

```bash
# 启动 OpenClaw 网关服务
openclaw gateway start

# 检查状态
openclaw gateway status
```

## 配置你的助手

### 创建配置文件

在 `~/openclaw-workspace` 目录下创建 `config.yml`：

```yaml
model: gpt-4
provider: openai

memory:
  enabled: true
  type: local

tools:
  - file
  - web
  - browser

channels:
  - telegram
  - discord
```

### 启动助手

```bash
# 在新终端启动助手
openclaw agent start
```

## 第一次对话

现在你可以通过以下方式与助手对话：

### 1. 命令行对话

```bash
openclaw chat
```

### 2. 语音对话（如果已配置）

```bash
openclaw voice
```

### 3. 通过聊天平台

在配置的聊天平台（如 Telegram）中发送消息给你的机器人。

## 下一步

恭喜！你已经成功运行了第一个 AI 助手。接下来你可以：

- 📖 阅读 [核心概念](../concepts/) 了解 OpenClaw 的基本概念
- ⚙️ 查看 [配置指南](../configuration/) 定制你的助手
- 🔧 探索 [技能系统](../skills/) 扩展助手能力
- 💡 查看 [实例教程](../examples/) 学习实战案例

## 常见问题

### Q: 安装失败怎么办？
A: 确保你使用的是 Node.js 18+ 版本，并尝试使用 `sudo npm install -g openclaw`（需要管理员权限）。

### Q: 如何更换 AI 模型？
A: 修改配置文件中的 `model` 和 `provider` 字段，支持 GPT-4、Claude、Gemini 等多种模型。

### Q: 支持哪些聊天平台？
A: 目前支持 Telegram、Discord、微信、WhatsApp、Slack 等多个平台。

### Q: 数据存储在哪里？
A: 所有数据默认存储在 `~/openclaw-workspace` 目录下，包括记忆文件、配置和日志。

## 需要帮助？

- 📖 [完整文档](../home/)
- 💬 [Discord 社区](https://discord.gg/clawd)
- 🐛 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
