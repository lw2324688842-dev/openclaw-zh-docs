---
sidebar_position: 7
---

# Day 7: 进阶开发

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 开发自定义技能
- ✅ 集成外部 API
- ✅ 部署和维护

## 🕐 预计时间：2 小时

---

## 1. 自定义技能开发

### 技能结构

创建 `my-skill/` 目录：

```
my-skill/
├── SKILL.md              # 技能说明
├── package.json          # 依赖配置
├── index.ts              # 主入口
├── tsconfig.json         # TypeScript 配置
└── src/                  # 源代码
    ├── tools.ts
    └── utils.ts
```

### 初始化项目

```bash
# 创建项目目录
mkdir my-skill
cd my-skill

# 初始化 npm 项目
npm init -y

# 安装依赖
npm install @openclaw/sdk
npm install --save-dev typescript @types/node
```

### package.json

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "我的自定义技能",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "test": "node dist/index.js"
  },
  "keywords": ["openclaw", "skill"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "@openclaw/sdk": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
```

### SKILL.md

```markdown
---
name: my-skill
version: 1.0.0
description: 我的自定义技能
---

# My Skill

这是一个自定义的 OpenClaw 技能。

## 功能

- 功能1：描述
- 功能2：描述

## 使用方法

直接调用技能功能即可。

## 配置

无特殊配置要求。

## 依赖

- @openclaw/sdk >= 1.0.0

## 作者

Your Name

## 许可证

MIT
```

### index.ts

```typescript
import {
  Tool,
  ToolContext,
  Skill,
  SkillConfig
} from '@openclaw/sdk';

export class MySkill implements Skill {
  name = 'my-skill';
  version = '1.0.0';
  description = '我的自定义技能';

  async init(config: SkillConfig) {
    console.log('My Skill 初始化完成');
  }

  getTools(): Tool[] {
    return [
      {
        name: 'hello',
        description: '向用户问好',
        parameters: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: '用户名'
            }
          },
          required: ['name']
        },
        execute: async (context: ToolContext, params: any) => {
          const { name } = params;
          context.logger.info(`向 ${name} 问好`);
          return `你好，${name}！欢迎使用 OpenClaw！`;
        }
      },
      {
        name: 'calculate',
        description: '计算两个数字的和',
        parameters: {
          type: 'object',
          properties: {
            a: {
              type: 'number',
              description: '第一个数字'
            },
            b: {
              type: 'number',
              description: '第二个数字'
            }
          },
          required: ['a', 'b']
        },
        execute: async (context: ToolContext, params: any) => {
          const { a, b } = params;
          const result = a + b;
          context.logger.info(`计算 ${a} + ${b} = ${result}`);
          return {
            expression: `${a} + ${b}`,
            result: result
          };
        }
      }
    ];
  }
}

export default MySkill;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

### 编译技能

```bash
# 编译 TypeScript
npm run build

# 测试技能
npm test
```

---

## 2. API 集成

### REST API 集成

```typescript
import axios from 'axios';

export class APITool {
  name = 'api-request';
  description = '发送 HTTP 请求';

  async execute(context: ToolContext, params: any) {
    const { url, method = 'GET', data } = params;

    try {
      const response = await axios({
        url,
        method,
        data,
        timeout: 10000
      });

      context.logger.info(`API 请求成功: ${method} ${url}`);

      return {
        status: response.status,
        data: response.data
      };
    } catch (error) {
      context.logger.error(`API 请求失败: ${error.message}`);
      throw new Error(`API 请求失败: ${error.message}`);
    }
  }
}
```

### 数据库集成

```typescript
import { Pool } from 'pg';

export class DatabaseTool {
  private pool: Pool;

  constructor(connectionString: string) {
    this.pool = new Pool({ connectionString });
  }

  async execute(context: ToolContext, params: any) {
    const { query, values } = params;

    try {
      const client = await this.pool.connect();
      const result = await client.query(query, values);
      client.release();

      context.logger.info(`数据库查询成功: ${query}`);

      return {
        rows: result.rows,
        rowCount: result.rowCount
      };
    } catch (error) {
      context.logger.error(`数据库查询失败: ${error.message}`);
      throw new Error(`数据库查询失败: ${error.message}`);
    }
  }

  async close() {
    await this.pool.end();
  }
}
```

### 第三方服务集成

```typescript
// 天气 API 集成
export class WeatherTool {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  async getWeather(context: ToolContext, city: string) {
    try {
      const url = `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=zh_cn`;

      const response = await fetch(url);
      const data = await response.json();

      context.logger.info(`获取天气信息成功: ${city}`);

      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity
      };
    } catch (error) {
      context.logger.error(`获取天气失败: ${error.message}`);
      throw new Error(`获取天气失败: ${error.message}`);
    }
  }
}
```

---

## 3. 测试和调试

### 单元测试

创建 `tests/` 目录：

```typescript
// tests/index.test.ts
import { ToolContext } from '@openclaw/sdk';
import MySkill from '../index';

describe('MySkill', () => {
  let skill: MySkill;
  let mockContext: ToolContext;

  beforeEach(() => {
    skill = new MySkill();
    mockContext = {
      logger: {
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn()
      }
    } as any;
  });

  test('应该正确问候用户', async () => {
    const tool = skill.getTools()[0];
    const result = await tool.execute(mockContext, { name: '张三' });

    expect(result).toBe('你好，张三！欢迎使用 OpenClaw！');
  });

  test('应该正确计算两个数字的和', async () => {
    const tool = skill.getTools()[1];
    const result = await tool.execute(mockContext, { a: 5, b: 3 });

    expect(result).toEqual({
      expression: '5 + 3',
      result: 8
    });
  });
});
```

### 调试工具

```typescript
export class DebugTool {
  async execute(context: ToolContext, params: any) {
    // 输出调试信息
    context.logger.debug('参数:', JSON.stringify(params));

    // 输出当前状态
    context.logger.info('当前时间:', new Date().toISOString());

    // 模拟长时间操作
    await new Promise(resolve => setTimeout(resolve, 1000));

    context.logger.info('操作完成');
    return { success: true };
  }
}
```

---

## 4. 部署

### 发布到 ClawHub

```bash
# 编译技能
npm run build

# 发布到 ClawHub
clawhub publish ./my-skill \
  --slug my-skill \
  --name "My Skill" \
  --version 1.0.0 \
  --changelog "Initial release"

# 或指定仓库
clawhub publish ./my-skill \
  --slug my-skill \
  --name "My Skill" \
  --version 1.0.0 \
  --changelog "Initial release" \
  --repository https://github.com/username/my-skill
```

### 本地安装

```bash
# 从本地目录安装
clawhub install ./my-skill

# 从 Git 仓库安装
clawhub install git+https://github.com/username/my-skill.git

# 从 npm 包安装
npm install -g my-skill
```

### NPM 发布

```bash
# 登录 npm
npm login

# 发布包
npm publish

# 发布特定版本
npm publish --tag beta
```

---

## 5. 部署 OpenClaw 网站

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 生产环境部署
vercel --prod
```

### GitHub Pages 部署

```bash
# 构建网站
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### Netlify 部署

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod --dir=build
```

### Docker 部署

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

构建和运行：

```bash
# 构建镜像
docker build -t openclaw-docs .

# 运行容器
docker run -p 3000:3000 openclaw-docs
```

---

## 6. 监控和维护

### 日志监控

```typescript
export class LogMonitor {
  private logs: Array<{ timestamp: Date; level: string; message: string }> = [];

  log(level: string, message: string) {
    const log = {
      timestamp: new Date(),
      level,
      message
    };

    this.logs.push(log);

    // 保持最近 1000 条日志
    if (this.logs.length > 1000) {
      this.logs.shift();
    }
  }

  getRecentLogs(count: number = 10) {
    return this.logs.slice(-count);
  }

  getErrorLogs() {
    return this.logs.filter(log => log.level === 'error');
  }
}
```

### 性能监控

```typescript
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  record(operation: string, duration: number) {
    if (!this.metrics.has(operation)) {
      this.metrics.set(operation, []);
    }

    const values = this.metrics.get(operation)!;
    values.push(duration);

    // 保留最近 100 个数据点
    if (values.length > 100) {
      values.shift();
    }
  }

  getAverage(operation: string) {
    const values = this.metrics.get(operation);
    if (!values || values.length === 0) {
      return 0;
    }

    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  }

  getReport() {
    const report: Record<string, number> = {};

    for (const [operation, values] of this.metrics.entries()) {
      report[operation] = this.getAverage(operation);
    }

    return report;
  }
}
```

### 自动化更新

```yaml
# config.yml
autoUpdate:
  enabled: true
  schedule: "0 2 * * *"  # 每天凌晨 2 点

  dependencies:
    - npm
    - openclaw

  skills:
    autoUpdate: true
    schedule: "0 3 * * 6"  # 每周六凌晨 3 点

  notifications:
    enabled: true
    channels:
      - telegram
      - email
```

---

## 🎉 综合项目

### 项目：电商智能助手

整合所有学到的内容，构建一个完整的电商智能助手。

#### 功能清单

1. ✅ 销售数据分析
2. ✅ 营销文案生成
3. ✅ 竞品价格监控
4. ✅ 客户服务自动化
5. ✅ 数据可视化
6. ✅ 自定义技能
7. ✅ 外部 API 集成
8. ✅ 监控和维护

#### 项目结构

```
ecommerce-assistant/
├── src/
│   ├── skills/
│   │   ├── sales-analyzer/
│   │   ├── content-generator/
│   │   └── customer-service/
│   ├── integrations/
│   │   ├── api-client.ts
│   │   ├── database.ts
│   │   └── webhooks.ts
│   └── utils/
│       ├── logger.ts
│       ├── monitor.ts
│       └── helpers.ts
├── tests/
├── config/
│   ├── openclaw.yml
│   ├── skills.yml
│   └── integrations.yml
├── docs/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📝 今日总结

### 你完成了：

1. ✅ 创建自定义技能
2. ✅ 集成外部 API
3. ✅ 测试和调试
4. ✅ 部署技能和网站
5. ✅ 监控和维护
6. ✅ 综合项目实战

### 恭喜！

你已经完成了 OpenClaw 七天入门教程！

现在你能够：
- 🎯 独立使用 OpenClaw
- 🛠️ 开发自定义技能
- 🔌 集成外部 API
- 🚀 部署和维护系统
- 💡 解决实际问题

### 继续学习

- 📚 [完整文档](../home/)
- 💬 [Discord 社区](https://discord.gg/clawd)
- 🐛 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
- 🛍️ [ClawHub 技能市场](https://clawhub.com)

---

## ❓ 常见问题

### Q: 如何分享我的技能？
A: 发布到 ClawHub 或 GitHub，在社区分享

### Q: 遇到问题怎么办？
A: 查看文档、Discord 社区、GitHub Issues

### Q: 如何贡献代码？
A: Fork 仓库，提交 Pull Request

### Q: 部署出错了怎么办？
A: 检查日志，确认网络连接，查看错误信息

---

**恭喜完成七天教程！** 🎊🎉

你现在是 OpenClaw 专家了！

**继续探索，创造无限可能！** 🚀✨

## 📚 延伸阅读

- [完整文档](../home/)
- [技能系统](../skills/)
- [API 参考](../api/)
- [实例教程](../examples/)
