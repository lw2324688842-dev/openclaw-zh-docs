---
sidebar_position: 1
---

# Day 1: 快速入门

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 安装 OpenClaw
- ✅ 理解核心概念
- ✅ 运行第一个 AI 助手

## 🕐 预计时间：1-1.5 小时

---

## 1. 安装 OpenClaw

### 前置要求

确保你的系统已安装：
- **Node.js** 18.0 或更高版本
- **npm** 或 **yarn** 包管理器

检查 Node.js 版本：
```bash
node --version
```

### 全局安装

```bash
# 使用 npm
npm install -g openclaw

# 或使用 yarn
yarn global add openclaw
```

### 验证安装

```bash
openclaw --version
```

如果看到版本号，说明安装成功！

---

## 2. 理解核心概念

OpenClaw 是一个 AI 助手框架，核心组件包括：

### Gateway（网关）
- OpenClaw 的核心服务
- 协调所有组件工作
- 管理会话和任务

### Agent（智能体）
- 具体的 AI 助手实例
- 可以使用不同的 AI 模型
- 拥有独立的配置和记忆

### Memory（记忆）
- 帮助 AI 记住信息
- 短期记忆：当前会话
- 长期记忆：持久化存储

### Skills（技能）
- 预打包的功能模块
- 扩展助手能力
- 从 ClawHub 安装

### Tools（工具）
- 可调用的功能
- 文件操作、网络请求等
- 支持自定义开发

---

## 3. 初始化项目

### 创建工作目录

```bash
# 创建 OpenClaw 工作区
mkdir ~/openclaw-workspace
cd ~/openclaw-workspace
```

### 初始化配置

```bash
# 初始化 OpenClaw
openclaw init
```

这会创建基本的配置文件。

---

## 4. 配置 API 密钥

OpenClaw 需要访问 AI 模型 API。支持多种提供商：

### 使用环境变量

```bash
# OpenAI
export OPENAI_API_KEY="your-openai-api-key"

# Anthropic Claude
export ANTHROPIC_API_KEY="your-anthropic-api-key"

# Google Gemini
export GOOGLE_API_KEY="your-google-api-key"
```

### 永久保存（推荐）

创建或编辑 `~/.zshrc` 或 `~/.bashrc`：

```bash
echo 'export OPENAI_API_KEY="your-key"' >> ~/.zshrc
source ~/.zshrc
```

---

## 5. 启动网关

### 启动服务

```bash
# 启动 OpenClaw 网关
openclaw gateway start
```

### 检查状态

```bash
# 查看网关状态
openclaw gateway status
```

如果显示 "running"，说明网关已成功启动！

---

## 6. 配置第一个助手

创建配置文件 `~/openclaw-workspace/config.yml`：

```yaml
# 配置文件
model: gpt-4
provider: openai
temperature: 0.7

# 记忆系统
memory:
  enabled: true
  type: local

# 可用工具
tools:
  - file
  - web
```

---

## 7. 运行第一个助手

### 命令行对话

```bash
# 在新终端
openclaw chat
```

### 尝试对话

```
你：你好！
助手：你好！我是你的 AI 助手，有什么可以帮助你的？

你：介绍一下你自己
助手：我是基于 OpenClaw 框架的 AI 助手，可以帮你处理各种任务...
```

---

## 🎉 实战练习

### 练习 1：基本对话

```
任务：与助手进行 5 轮对话
1. 自我介绍
2. 询问当前时间
3. 让助手讲一个笑话
4. 询问天气
5. 说再见
```

### 练习 2：文件操作

```
任务：
1. 创建一个 test.txt 文件
2. 写入一些内容
3. 读取文件内容
4. 列出当前目录文件
```

### 练习 3：网络请求

```
任务：
1. 让助手获取一个网页内容
2. 总结网页信息
3. 搜索相关话题
```

---

## 📝 今日总结

### 你学会了：

1. ✅ 安装和配置 OpenClaw
2. ✅ 理解核心概念（Gateway、Agent、Memory、Skills、Tools）
3. ✅ 设置 AI 模型 API 密钥
4. ✅ 启动网关和助手
5. ✅ 基本对话和工具使用

### 下一步：

明天我们将学习：
- 📋 配置 AI 模型参数
- 🌐 设置消息通道（Telegram、Discord 等）
- ⚙️ 高级配置选项

---

## ❓ 常见问题

### Q: 安装失败怎么办？
A: 确保 Node.js 版本 >= 18，尝试使用 `sudo npm install -g openclaw`

### Q: API 密钥如何获取？
A: 访问提供商官网（OpenAI、Anthropic 等）申请 API 密钥

### Q: 网关启动失败？
A: 检查端口 3000 是否被占用：`lsof -i :3000`

### Q: 如何停止网关？
A: 运行 `openclaw gateway stop`

---

**恭喜完成 Day 1！** 🎊

休息一下，明天我们继续学习！

## 📚 延伸阅读

- [核心概念详解](../concepts/)
- [配置指南](../configuration/)
- [快速开始](../quick-start/)
