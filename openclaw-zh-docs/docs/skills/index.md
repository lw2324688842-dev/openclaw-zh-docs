---
sidebar_position: 1
---

# 技能系统

Skills 是 OpenClaw 的插件系统，让你可以轻松扩展助手功能。

## 什么是技能？

技能是预打包的功能模块，可以为 AI 助手添加特定的能力：

- 📊 数据处理和分析
- 🌐 API 集成
- 🎨 创意内容生成
- 🔍 搜索和检索
- 🤖 自动化任务

## 内置技能

OpenClaw 自带以下内置技能：

### 文件技能

```bash
# 使用文件技能
"读取当前目录的文件列表"
"帮我分析这个文件的内容"
```

### 网络技能

```bash
# 使用网络技能
"获取这个 URL 的内容"
"搜索关于 AI 的最新文章"
```

### 浏览器技能

```bash
# 使用浏览器技能
"打开这个网页并截图"
"填写这个表单并提交"
```

## ClawHub - 技能市场

[ClawHub](https://clawhub.com) 是 OpenClaw 的官方技能市场。

### 查找技能

```bash
# 搜索技能
clawhub search "天气"
clawhub search "数据分析"
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

### 管理技能

```bash
# 列出已安装技能
clawhub list

# 更新技能
clawhub update weather

# 更新所有技能
clawhub update --all

# 删除技能
clawhub remove weather
```

## 推荐技能

### 实用工具

- **weather** - 天气查询和预报
- **calculator** - 高级计算器
- **translator** - 多语言翻译
- **summarizer** - 文章和文档摘要
- **scheduler** - 日程管理和提醒

### 数据处理

- **csv-tools** - CSV 文件处理
- **excel-tools** - Excel 文件操作
- **json-tools** - JSON 数据处理
- **database** - 数据库操作

### 创意内容

- **writer** - 文案和内容生成
- **image-generator** - AI 图像生成
- **code-generator** - 代码生成
- **story-teller** - 故事创作

### 自动化

- **web-scraper** - 网页抓取
- **automation** - 任务自动化
- **notifier** - 通知和提醒
- **backup** - 自动备份

## 自定义技能

你可以创建自己的技能来满足特定需求。

### 技能结构

```
my-skill/
├── SKILL.md              # 技能说明
├── package.json          # 依赖配置
├── index.ts              # 主入口
└── src/                  # 源代码
    ├── tools.ts
    └── utils.ts
```

### SKILL.md 模板

```markdown
---
name: my-skill
version: 1.0.0
description: 我的自定义技能
---

# My Skill

技能描述...

## 使用方法

...

## 配置

...
```

### 简单技能示例

```typescript
// index.ts
import { Tool, ToolContext } from '@openclaw/sdk';

export const tools: Tool[] = [
  {
    name: 'hello',
    description: '向用户问好',
    execute: async (context: ToolContext, name: string) => {
      return `你好，${name}！`;
    }
  }
];
```

### 高级技能示例

```typescript
// index.ts
import {
  Tool,
  ToolContext,
  Skill,
  SkillConfig
} from '@openclaw/sdk';

export class MySkill implements Skill {
  name = 'my-skill';
  version = '1.0.0';

  async init(config: SkillConfig) {
    // 初始化逻辑
  }

  getTools(): Tool[] {
    return [
      {
        name: 'advanced-tool',
        description: '高级工具',
        parameters: {
          type: 'object',
          properties: {
            input: { type: 'string' }
          }
        },
        execute: async (context: ToolContext, params: any) => {
          // 执行逻辑
          return result;
        }
      }
    ];
  }
}
```

## 技能开发

### 开发环境

```bash
# 创建技能项目
mkdir my-skill
cd my-skill
npm init -y

# 安装依赖
npm install @openclaw/sdk
npm install --save-dev typescript @types/node
```

### 测试技能

```bash
# 本地测试
openclaw skill test ./my-skill

# 调试模式
openclaw skill test ./my-skill --debug
```

### 发布技能

```bash
# 发布到 ClawHub
clawhub publish ./my-skill \
  --slug my-skill \
  --name "My Skill" \
  --version 1.0.0 \
  --changelog "Initial release"
```

## 技能权限

为了安全，技能运行在受控环境中：

```yaml
skills:
  permissions:
    default: readonly
    allowNetwork: false
    allowFileAccess: true
    allowedPaths:
      - ~/workspace/**

  trustedSkills:
    - official-openclaw-*
    - my-company-*
```

## 技能最佳实践

### 1. 明确技能职责

每个技能应该专注于一个特定的功能领域。

### 2. 提供详细文档

完整的 SKILL.md 文档包括：
- 功能描述
- 使用示例
- 配置说明
- 限制和注意事项

### 3. 错误处理

```typescript
execute: async (context: ToolContext, params: any) => {
  try {
    // 主要逻辑
    return result;
  } catch (error) {
    context.logger.error('Error:', error);
    throw new Error('操作失败：' + error.message);
  }
}
```

### 4. 参数验证

```typescript
execute: async (context: ToolContext, params: any) => {
  if (!params.input) {
    throw new Error('缺少必需参数：input');
  }
  // 继续执行
}
```

### 5. 日志记录

```typescript
context.logger.info('开始执行');
context.logger.debug('参数:', params);
context.logger.warn('警告信息');
```

## 技能安全

### 安全审查

使用 [skill-vetter](https://clawhub.ai/JimLiuxinghai/skill-vetter) 进行安全审查：

```bash
# 审查技能
openclaw skill vet ./my-skill
```

### 常见安全问题

- ❌ 向未知 URL 发送数据
- ❌ 请求凭证或密钥
- ❌ 读取敏感文件
- ❌ 使用 eval() 执行外部代码
- ❌ 混淆或加密代码

## 下一步

- 💡 [实例教程](../examples/) - 技能使用实例
- 📖 [API 参考](../api/) - 开发 API 文档
- ⚙️ [配置指南](../configuration/) - 安全配置
