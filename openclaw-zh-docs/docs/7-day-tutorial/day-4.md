---
sidebar_position: 4
---

# Day 4: 记忆和上下文

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 理解记忆系统
- ✅ 配置长期记忆
- ✅ 管理上下文

## 🕐 预计时间：1.5 小时

---

## 1. 记忆系统概述

### 记忆类型

#### 短期记忆
- 当前会话的上下文
- 临时状态和变量
- 会话结束即失效

#### 长期记忆
- 持久化的知识
- 用户偏好和历史
- 使用 MEMORY.md 存储

### 记忆架构

```
┌─────────────────────────────────┐
│       AI Assistant            │
└───────────┬─────────────────┘
            │
    ┌───────┴────────┐
    │                │
┌───▼────┐      ┌───▼─────┐
│ 短期   │      │ 长期    │
│ 记忆   │      │ 记忆    │
│ (会话) │      │(持久化) │
└────────┘      └─────────┘
```

---

## 2. 配置长期记忆

### 创建 MEMORY.md

在工作区创建 `MEMORY.md` 文件：

```markdown
# MEMORY.md - 长期记忆

## 用户信息

- 姓名：张三
- 职业：程序员
- 地点：北京
- 偏好：喜欢简洁的回答

## 重要偏好

- 回答要简洁明了
- 喜欢使用 Markdown 格式
- 不喜欢过长的解释
- 偏爱实际代码示例而非理论说明

## 工作项目

### 项目 A
- 技术栈：React + TypeScript
- 进度：60%
- 备注：需要优化性能

### 项目 B
- 技术栈：Python + Django
- 进度：30%
- 备注：数据库设计已完成

## 重要日期

- 2024-01-01：开始使用 OpenClaw
- 2024-02-15：完成第一个项目
- 2024-03-01：决定深入学习 AI

## 学习目标

- 掌握 AI 助手开发
- 提升编程效率
- 自动化日常工作流程
```

### 配置记忆系统

在 `config.yml` 中配置：

```yaml
memory:
  enabled: true
  type: local

  # 短期记忆配置
  shortTerm:
    maxSize: 1000        # 最大上下文长度
    ttl: 1h              # 过期时间
    compression: true     # 是否压缩

  # 长期记忆配置
  longTerm:
    enabled: true
    path: ~/openclaw-workspace/memory
    autoSave: true       # 自动保存
    saveInterval: 5m     # 保存间隔
```

---

## 3. 使用记忆功能

### 让 AI 记住信息

```
你：记住，我最喜欢的编程语言是 Python
助手：✓ 已记住：你最喜欢的编程语言是 Python
```

### 检索记忆

```
你：我最喜欢什么编程语言？
助手：根据记忆，你最喜欢的编程语言是 Python
```

### 自动更新 MEMORY.md

```yaml
# 配置自动更新
memory:
  longTerm:
    autoUpdate: true
    updateKeywords:
      - "记住"
      - "我的"
      - "我的偏好"
```

---

## 4. 上下文管理

### 会话上下文

```
你：帮我写一个 Python 函数计算斐波那契数列
助手：好的，这是一个斐波那契数列函数：

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

你：优化这个函数，使其更高效
助手：基于上面的函数，我来优化它：

def fibonacci_optimized(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for i in range(2, n+1):
        a, b = b, a + b
    return b
```

### 清除上下文

```
你：清除之前的对话上下文
助手：✓ 已清除对话上下文

你：你好
助手：你好！有什么可以帮助你的？
```

### 上下文限制

```yaml
# 配置上下文限制
conversation:
  maxTurns: 50          # 最大对话轮数
  maxTokens: 4000      # 最大令牌数
  summarizeThreshold: 3000  # 摘要阈值
```

---

## 5. 记忆高级用法

### 分类记忆

创建分类的记忆文件：

```markdown
# MEMORY.md

## @programming
- 我正在学习 Python
- 喜欢使用 VS Code
- 擅长算法和数据结构

## @personal
- 生日：1990-05-15
- 爱好：阅读、旅行、摄影
- 家人：父母、妻子、一个孩子

## @work
- 公司：ABC Tech
- 职位：后端工程师
- 项目：微服务架构重构
```

### 记忆检索

```yaml
# 配置记忆检索
memory:
  longTerm:
    search:
      enabled: true
      algorithm: semantic  # 语义搜索
      maxResults: 5
      threshold: 0.7
```

### 记忆导出和导入

```bash
# 导出记忆
openclaw memory export > memory-backup.json

# 导入记忆
openclaw memory import memory-backup.json
```

---

## 6. 上下文注入

### 系统提示词

在 `config.yml` 中设置：

```yaml
system: |
  你是一个专业的 AI 助手。

  记住以下重要信息：
  - 用户喜欢简洁的回答
  - 用户偏好 Python 语言
  - 用户正在学习 OpenClaw

  回答时要考虑这些信息。
```

### 会话前注入

```yaml
conversation:
  prePrompt: |
    请先检查用户的长期记忆，
    然后根据记忆信息回答问题。
```

### 会话后处理

```yaml
conversation:
  postPrompt: |
    如果用户提供了新的重要信息，
    请自动更新到长期记忆中。
```

---

## 🎉 实战练习

### 练习 1：创建个人记忆

```
任务：
1. 创建 MEMORY.md 文件
2. 添加个人信息、偏好、项目等
3. 测试 AI 是否能记住这些信息
```

### 练习 2：测试记忆检索

```
任务：
1. 让 AI 记住 5 条信息
2. 在不同会话中测试是否记住
3. 清除上下文后再次测试
```

### 练习 3：上下文管理

```
任务：
1. 进行多轮对话
2. 测试上下文是否保持
3. 清除上下文后测试
4. 优化上下文限制参数
```

---

## 📝 今日总结

### 你学会了：

1. ✅ 理解记忆系统的工作原理
2. ✅ 配置和使用长期记忆
3. ✅ 管理会话上下文
4. ✅ 高级记忆功能（分类、检索、注入）

### 下一步：

明天我们将学习：
- ⏰ 定时任务设置
- 📅 任务调度系统
- 🔔 提醒功能

---

## ❓ 常见问题

### Q: 记忆文件应该多大？
A: 建议 10-50KB，太大会影响检索效率

### Q: 如何删除记忆？
A: 编辑 MEMORY.md 文件删除对应内容，或使用 `openclaw memory clear`

### Q: 记忆会过期吗？
A: 短期记忆会过期（可配置 TTL），长期记忆永久保存

### Q: 如何保护隐私？
A: MEMORY.md 包含敏感信息，注意权限设置，不要提交到公开仓库

---

**恭喜完成 Day 4！** 🎊

你的 AI 助手现在拥有了记忆力！

## 📚 延伸阅读

- [核心概念](../concepts/)
- [配置指南](../configuration/)
- [实例教程](../examples/)
