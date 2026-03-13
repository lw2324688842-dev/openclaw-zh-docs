---
sidebar_position: 1
---

# 配置指南

详细说明如何配置 OpenClaw 以满足你的需求。

## 配置文件位置

配置文件默认位于：

- **主配置**：`~/openclaw-workspace/config.yml`
- **网关配置**：`~/.openclaw/gateway.yml`
- **Agent 配置**：`~/.openclaw/agents/*.yml`

## 基础配置

### 网关配置

```yaml
# ~/.openclaw/gateway.yml
port: 3000
host: localhost

log:
  level: info
  file: gateway.log

security:
  enableAuth: true
  secret: your-secret-key

cors:
  enabled: true
  origins: ["http://localhost:3000"]
```

### Agent 配置

```yaml
# ~/openclaw-workspace/config.yml
model: gpt-4
provider: openai
temperature: 0.7
maxTokens: 2000

memory:
  enabled: true
  type: local
  path: ~/openclaw-workspace/memory

tools:
  - file
  - web
  - browser
  - exec
```

## AI 模型配置

### OpenAI

```yaml
model: gpt-4
provider: openai
apiKey: ${OPENAI_API_KEY}
```

### Anthropic Claude

```yaml
model: claude-3-opus-20240229
provider: anthropic
apiKey: ${ANTHROPIC_API_KEY}
```

### Google Gemini

```yaml
model: gemini-pro
provider: google
apiKey: ${GOOGLE_API_KEY}
```

### 本地模型（Ollama）

```yaml
model: llama2
provider: ollama
baseUrl: http://localhost:11434
```

## 记忆系统配置

### 本地记忆

```yaml
memory:
  type: local
  path: ~/openclaw-workspace/memory

  shortTerm:
    maxSize: 1000
    ttl: 1h

  longTerm:
    path: MEMORY.md
    autoSave: true
```

### 向量数据库（高级）

```yaml
memory:
  type: vector
  provider: chromadb
  connectionString: http://localhost:8000

  embedding:
    model: text-embedding-ada-002
    provider: openai
```

## 工具配置

### 文件操作

```yaml
tools:
  - file:
      read: true
      write: true
      allowedPaths:
        - ~/workspace/**
      deniedPaths:
        - ~/.ssh/**
        - ~/.aws/**
```

### 命令执行

```yaml
tools:
  - exec:
      shell: /bin/zsh
      timeout: 30s
      allowedCommands:
        - ls
        - git
        - npm
      deniedCommands:
        - rm -rf
        - sudo
```

### 浏览器自动化

```yaml
tools:
  - browser:
      headless: true
      timeout: 30s
      screenshotPath: ~/workspace/screenshots
```

## 消息通道配置

### Telegram

```yaml
channels:
  - telegram:
      botToken: ${TELEGRAM_BOT_TOKEN}
      allowedUsers:
        - username1
        - username2
      webhook:
        enabled: true
        url: https://your-domain.com/telegram/webhook
```

### Discord

```yaml
channels:
  - discord:
      botToken: ${DISCORD_BOT_TOKEN}
      clientId: ${DISCORD_CLIENT_ID}
      guildIds:
        - your-guild-id
```

### 微信

```yaml
channels:
  - wechat:
      appId: ${WECHAT_APP_ID}
      appSecret: ${WECHAT_APP_SECRET}
      token: your-token
      encodingAESKey: your-key
```

## 技能系统配置

### ClawHub 配置

```yaml
skills:
  registry: https://clawhub.com
  installDir: ~/openclaw-workspace/skills
  autoUpdate: false
  updateInterval: 24h
```

### 技能权限

```yaml
skills:
  permissions:
    default: readonly
    trusted:
      - official-openclaw-*
    denylist:
      - suspicious-skill-*
```

## 任务调度配置

### Cron 任务

```yaml
schedules:
  - name: daily-report
    cron: "0 9 * * *"
    agent: main
    message: "早上好！今天的工作计划是什么？"

  - name: weekly-review
    cron: "0 18 * * 5"
    agent: main
    message: "本周工作回顾..."
```

### 提醒配置

```yaml
reminders:
  enabled: true
  persistence: true
  storagePath: ~/openclaw-workspace/reminders.json
```

## 安全配置

### API 密钥管理

```yaml
security:
  secrets:
    provider: env
    path: ~/.openclaw/secrets

  encryption:
    enabled: true
    algorithm: aes-256-gcm
    keyPath: ~/.openclaw/encryption.key
```

### 访问控制

```yaml
security:
  accessControl:
    mode: whitelist
    users:
      - id: user1
        role: admin
        permissions:
          - "*"

      - id: user2
        role: user
        permissions:
          - chat
          - read
```

### 审计日志

```yaml
security:
  audit:
    enabled: true
    level: detailed
    outputPath: ~/openclaw-workspace/audit.log
    include:
      - toolCalls
      - configChanges
      - userActions
```

## 性能配置

### 缓存配置

```yaml
cache:
  enabled: true
  type: memory
  maxSize: 1000
  ttl: 3600
```

### 速率限制

```yaml
rateLimit:
  enabled: true
  window: 1m
  maxRequests: 60
```

### 并发控制

```yaml
concurrency:
  maxAgents: 10
  maxSessions: 100
  queueSize: 50
```

## 监控配置

### 健康检查

```yaml
health:
  enabled: true
  endpoint: /health
  checks:
    - name: api
      url: https://api.openai.com
      interval: 30s
```

### 指标收集

```yaml
metrics:
  enabled: true
  provider: prometheus
  port: 9090

  collectors:
    - tokenUsage
    - responseTime
    - errorRate
```

## 高级配置

### 多 Agent 配置

```yaml
agents:
  - name: assistant
    model: gpt-4
    role: 通用助手

  - name: coder
    model: gpt-4
    role: 代码专家
    skills:
      - git
      - code-review

  - name: writer
    model: claude-3-opus
    role: 文案专家
    temperature: 0.9
```

### 子 Agent 配置

```yaml
subagents:
  enabled: true
  maxConcurrent: 5
  isolation:
    enabled: true
    workspace: ~/openclaw-workspace/subagents
```

## 环境变量

配置中可以使用环境变量：

```yaml
apiKey: ${OPENAI_API_KEY}
databaseUrl: ${DATABASE_URL:postgresql://localhost/mydb}
```

## 配置验证

启动时验证配置：

```bash
openclaw config validate
```

## 配置模板

使用模板快速开始：

```bash
# 生成配置模板
openclaw config init --template minimal

# 生成完整配置
openclaw config init --template full
```

## 下一步

- 🔧 [技能系统](../skills/) - 扩展助手能力
- 💡 [实例教程](../examples/) - 实战配置案例
