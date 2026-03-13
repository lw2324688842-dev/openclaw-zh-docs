---
sidebar_position: 1
---

# API 参考

OpenClaw 提供了丰富的 API 用于高级集成和自定义开发。

## CLI 命令

### Gateway 命令

```bash
# 启动网关
openclaw gateway start

# 停止网关
openclaw gateway stop

# 重启网关
openclaw gateway restart

# 查看状态
openclaw gateway status

# 查看日志
openclaw gateway logs

# 配置管理
openclaw gateway config get
openclaw gateway config set key=value
```

### Agent 命令

```bash
# 启动助手
openclaw agent start

# 停止助手
openclaw agent stop

# 列出助手
openclaw agent list

# 切换助手
openclaw agent switch [agent-name]

# 删除助手
openclaw agent remove [agent-name]
```

### 技能命令

```bash
# 列出技能
clawhub list

# 搜索技能
clawhub search [keyword]

# 安装技能
clawhub install [skill-name]

# 更新技能
clawhub update [skill-name]

# 删除技能
clawhub remove [skill-name]

# 发布技能
clawhub publish [path]
```

### 记忆命令

```bash
# 查看记忆
openclaw memory list

# 搜索记忆
openclaw memory search [query]

# 添加记忆
openclaw memory add [content]

# 删除记忆
openclaw memory remove [id]
```

### 任务命令

```bash
# 列出任务
openclaw task list

# 添加任务
openclaw task add [task]

# 删除任务
openclaw task remove [id]

# 设置提醒
openclaw remind [message] [time]
```

## REST API

### 基础信息

- **Base URL**: `http://localhost:3000/api/v1`
- **认证**: Bearer Token
- **Content-Type**: `application/json`

### 认证

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "username": "user",
  "password": "pass"
}

Response:
{
  "token": "jwt-token",
  "expiresIn": 3600
}
```

### Agent 操作

#### 创建 Agent

```http
POST /api/v1/agents
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "my-agent",
  "model": "gpt-4",
  "system": "You are a helpful assistant",
  "config": {}
}

Response:
{
  "id": "agent-id",
  "name": "my-agent",
  "status": "active"
}
```

#### 列出 Agent

```http
GET /api/v1/agents
Authorization: Bearer {token}

Response:
{
  "agents": [
    {
      "id": "agent-id",
      "name": "my-agent",
      "model": "gpt-4",
      "status": "active"
    }
  ]
}
```

#### 获取 Agent 详情

```http
GET /api/v1/agents/{agent-id}
Authorization: Bearer {token}

Response:
{
  "id": "agent-id",
  "name": "my-agent",
  "model": "gpt-4",
  "system": "You are a helpful assistant",
  "config": {},
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### 删除 Agent

```http
DELETE /api/v1/agents/{agent-id}
Authorization: Bearer {token}

Response:
{
  "message": "Agent deleted successfully"
}
```

### 对话操作

#### 发送消息

```http
POST /api/v1/agents/{agent-id}/chat
Authorization: Bearer {token}
Content-Type: application/json

{
  "message": "Hello, how are you?",
  "context": {},
  "options": {
    "stream": false
  }
}

Response:
{
  "id": "message-id",
  "message": "I'm doing well, thank you!",
  "model": "gpt-4",
  "tokens": {
    "prompt": 10,
    "completion": 20,
    "total": 30
  }
}
```

#### 获取对话历史

```http
GET /api/v1/agents/{agent-id}/history?limit=10&offset=0
Authorization: Bearer {token}

Response:
{
  "messages": [
    {
      "id": "msg-1",
      "role": "user",
      "content": "Hello",
      "timestamp": "2024-01-01T00:00:00Z"
    },
    {
      "id": "msg-2",
      "role": "assistant",
      "content": "Hi there!",
      "timestamp": "2024-01-01T00:00:01Z"
    }
  ],
  "total": 100,
  "limit": 10,
  "offset": 0
}
```

### 记忆操作

#### 添加记忆

```http
POST /api/v1/memory
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "User prefers concise answers",
  "type": "preference",
  "tags": ["user", "preference"]
}

Response:
{
  "id": "memory-id",
  "content": "User prefers concise answers",
  "type": "preference",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### 搜索记忆

```http
GET /api/v1/memory/search?q=preference&limit=10
Authorization: Bearer {token}

Response:
{
  "results": [
    {
      "id": "memory-id",
      "content": "User prefers concise answers",
      "type": "preference",
      "score": 0.95
    }
  ]
}
```

### 技能操作

#### 列出技能

```http
GET /api/v1/skills
Authorization: Bearer {token}

Response:
{
  "skills": [
    {
      "name": "weather",
      "version": "2.0.0",
      "status": "active"
    }
  ]
}
```

#### 安装技能

```http
POST /api/v1/skills/install
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "weather",
  "version": "2.0.0"
}

Response:
{
  "message": "Skill installed successfully"
}
```

### 任务调度

#### 创建定时任务

```http
POST /api/v1/schedules
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "daily-report",
  "cron": "0 9 * * *",
  "agentId": "agent-id",
  "message": "Generate daily report",
  "enabled": true
}

Response:
{
  "id": "schedule-id",
  "name": "daily-report",
  "cron": "0 9 * * *",
  "status": "active"
}
```

#### 列出定时任务

```http
GET /api/v1/schedules
Authorization: Bearer {token}

Response:
{
  "schedules": [
    {
      "id": "schedule-id",
      "name": "daily-report",
      "cron": "0 9 * * *",
      "enabled": true
    }
  ]
}
```

## WebSocket API

### 连接

```javascript
const ws = new WebSocket('ws://localhost:3000/api/v1/ws');

ws.onopen = () => {
  // 发送认证
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your-jwt-token'
  }));
};
```

### 消息格式

#### 客户端 → 服务器

```javascript
// 发送消息
ws.send(JSON.stringify({
  type: 'chat',
  agentId: 'agent-id',
  message: 'Hello',
  messageId: 'msg-123'
}));
```

#### 服务器 → 客户端

```javascript
// 接收消息
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case 'chat':
      console.log('AI 响应:', data.content);
      break;
    case 'error':
      console.error('错误:', data.error);
      break;
    case 'status':
      console.log('状态更新:', data.status);
      break;
  }
};
```

## TypeScript SDK

### 安装

```bash
npm install @openclaw/sdk
```

### 初始化

```typescript
import { OpenClaw } from '@openclaw/sdk';

const client = new OpenClaw({
  apiKey: 'your-api-key',
  baseUrl: 'http://localhost:3000'
});
```

### 创建 Agent

```typescript
const agent = await client.agents.create({
  name: 'my-agent',
  model: 'gpt-4',
  system: 'You are a helpful assistant'
});
```

### 发送消息

```typescript
const response = await agent.chat({
  message: 'Hello, how are you?',
  stream: false
});

console.log(response.content);
```

### 流式响应

```typescript
const stream = await agent.chat({
  message: 'Tell me a story',
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
```

### 使用工具

```typescript
const result = await agent.useTool('file', {
  action: 'read',
  path: '/path/to/file.txt'
});

console.log(result.content);
```

### 记忆操作

```typescript
// 添加记忆
await client.memory.add({
  content: 'User prefers concise answers',
  type: 'preference'
});

// 搜索记忆
const results = await client.memory.search('preference');
```

## Python SDK

### 安装

```bash
pip install openclaw-sdk
```

### 初始化

```python
from openclaw import OpenClaw

client = OpenClaw(
    api_key='your-api-key',
    base_url='http://localhost:3000'
)
```

### 创建 Agent

```python
agent = client.agents.create(
    name='my-agent',
    model='gpt-4',
    system='You are a helpful assistant'
)
```

### 发送消息

```python
response = agent.chat(
    message='Hello, how are you?',
    stream=False
)

print(response.content)
```

## 事件系统

### 事件类型

```typescript
// 连接事件
type EventType = 'connected' | 'disconnected' | 'error';

// 消息事件
type MessageEvent = 'message' | 'stream' | 'done';

// Agent 事件
type AgentEvent = 'created' | 'updated' | 'deleted' | 'status';

// 任务事件
type TaskEvent = 'started' | 'completed' | 'failed';
```

### 监听事件

```typescript
client.on('message', (data) => {
  console.log('收到消息:', data);
});

client.on('agent:created', (agent) => {
  console.log('Agent 创建:', agent);
});
```

## 错误处理

### 错误类型

```typescript
// API 错误
class ApiError extends Error {
  code: string;
  status: number;
}

// 认证错误
class AuthError extends ApiError {}

// 速率限制错误
class RateLimitError extends ApiError {}

// 验证错误
class ValidationError extends ApiError {}
```

### 错误处理示例

```typescript
try {
  const response = await agent.chat({
    message: 'Hello'
  });
} catch (error) {
  if (error instanceof AuthError) {
    console.error('认证失败:', error.message);
  } else if (error instanceof RateLimitError) {
    console.error('速率限制:', error.message);
  } else {
    console.error('未知错误:', error);
  }
}
```

## 配置选项

### 客户端配置

```typescript
interface ClientConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  maxRetries?: number;
  debug?: boolean;
}
```

### Agent 配置

```typescript
interface AgentConfig {
  name: string;
  model: string;
  system?: string;
  temperature?: number;
  maxTokens?: number;
  memory?: {
    enabled: boolean;
    type: 'local' | 'vector';
  };
  tools?: string[];
  skills?: string[];
}
```

## 速率限制

默认速率限制：

- **每分钟**: 60 请求
- **每小时**: 1000 请求
- **每天**: 10000 请求

超过限制会返回 `429 Too Many Requests` 响应。

## 版本控制

API 版本通过 URL 路径指定：

- `/api/v1/` - 当前稳定版本
- `/api/v2/` - 最新版本（可能有破坏性更改）

## 支持

- 📖 [完整文档](../home/)
- 💬 [Discord 社区](https://discord.gg/clawd)
- 🐛 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
