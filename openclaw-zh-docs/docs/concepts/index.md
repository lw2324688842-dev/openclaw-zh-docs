---
sidebar_position: 1
---

# 核心概念

了解 OpenClaw 的核心概念，帮助你更好地使用和定制 AI 助手。

## 架构概览

OpenClaw 采用模块化架构，主要包含以下组件：

```
┌─────────────┐
│   Gateway   │ ← 网关服务（核心协调）
└──────┬──────┘
       │
       ├──────────────┐
       │              │
┌──────▼──────┐  ┌───▼────────┐
│   Agent     │  │   Skills    │ ← 技能插件系统
│  (AI 模型)  │  │  (功能扩展)  │
└──────┬──────┘  └─────────────┘
       │
       ├──────────────┐
       │              │
┌──────▼──────┐  ┌───▼────────┐
│   Memory    │  │  Channels   │ ← 多平台集成
│  (记忆系统)  │  │  (消息通道)  │
└──────┬──────┘  └─────────────┘
       │
┌──────▼──────┐
│   Tools     │ ← 工具库
│  (工具集合)  │
└─────────────┘
```

## Gateway（网关）

Gateway 是 OpenClaw 的核心服务，负责：

- **消息路由**：将用户消息路由到合适的 Agent
- **会话管理**：维护多个会话状态
- **任务调度**：执行定时任务和提醒
- **插件管理**：加载和管理技能插件

### 常用命令

```bash
# 启动网关
openclaw gateway start

# 停止网关
openclaw gateway stop

# 查看状态
openclaw gateway status

# 重启网关
openclaw gateway restart
```

## Agent（智能体）

Agent 是具体的 AI 助手实例，每个 Agent 可以：

- 使用不同的 AI 模型（GPT-4、Claude、Gemini 等）
- 拥有独立的记忆和配置
- 执行特定的任务和角色
- 通过不同的通道与用户交互

### Agent 类型

**Main Agent**：主助手，处理日常对话和任务

**Sub-Agent**：子助手，用于特定任务或隔离环境

**ACP Harness**：代码执行助手，专门用于编程任务

### 创建自定义 Agent

```yaml
# config.yml
agents:
  - name: 我的助手
    model: gpt-4
    role: 个人助理
    system: 你是一个专业的个人助理，帮我管理日常事务
```

## Memory（记忆系统）

记忆系统让 AI 助手能够记住和检索信息。

### 记忆类型

**短期记忆**：
- 当前会话的上下文
- 临时状态和变量
- 会被重置或过期

**长期记忆**：
- 持久化的知识和信息
- 用户偏好和历史
- 使用 MEMORY.md 存储

### 使用记忆

```markdown
# MEMORY.md
## 用户信息
- 姓名：张三
- 职业：程序员
- 偏好：简洁回答

## 重要决策
- 2024-01-01：决定使用 OpenClaw 作为主要 AI 工具
```

## Skills（技能系统）

Skills 是 OpenClaw 的插件系统，用于扩展助手功能。

### 技能类型

**内置技能**：
- `file`：文件操作
- `web`：网页获取
- `browser`：浏览器自动化
- `ssh`：远程命令执行

**社区技能**：
- 从 [ClawHub](https://clawhub.com) 安装
- 涵盖各种功能领域

**自定义技能**：
- 根据需求创建自己的技能
- 使用 TypeScript/JavaScript 开发

### 安装技能

```bash
# 使用 ClawHub 安装
clawhub install skill-name

# 查看已安装技能
clawhub list

# 更新技能
clawhub update skill-name
```

## Channels（消息通道）

Channels 定义了助手如何与用户交互。

### 支持的通道

- **Telegram**：即时消息
- **Discord**：社区和团队协作
- **微信**：中国用户常用
- **WhatsApp**：国际用户常用
- **Slack**：企业通讯
- **Signal**：加密通讯
- **WebChat**：网页聊天

### 配置通道

```yaml
channels:
  telegram:
    botToken: your-bot-token
    allowedUsers:
      - username1
      - username2
```

## Tools（工具库）

Tools 是助手可以调用的功能模块。

### 常用工具

**文件工具**：
- 读取/写入文件
- 目录操作
- 文件搜索

**网络工具**：
- HTTP 请求
- API 调用
- 网页抓取

**浏览器工具**：
- 自动化浏览器
- 页面截图
- 表单填写

**系统工具**：
- 命令执行
- 进程管理
- 系统监控

### 工具权限

为了安全，所有工具都有权限控制：

```yaml
tools:
  - file:
      allow: ["~/workspace/**"]
      deny: ["~/.ssh/**"]
  - exec:
      allow: ["ls", "git", "npm"]
      deny: ["rm -rf", "sudo"]
```

## Task Scheduling（任务调度）

OpenClaw 支持定时任务和提醒功能。

### Cron 表达式

```yaml
schedules:
  - name: 每日提醒
    cron: "0 9 * * *"
    message: "早上好！今天要完成什么任务？"
```

### 提醒

```bash
# 设置提醒
openclaw remind "30分钟后提醒我休息"

# 列出提醒
openclaw remind list
```

## 下一步

现在你已经了解了 OpenClaw 的核心概念，继续学习：

- ⚙️ [配置指南](../configuration/) - 详细配置说明
- 🔧 [技能系统](../skills/) - 使用和创建技能
- 💡 [实例教程](../examples/) - 实战案例
