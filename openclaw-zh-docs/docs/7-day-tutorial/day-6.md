---
sidebar_position: 6
---

# Day 6: 实战案例

## 📋 学习目标

完成今天的学习后，你将能够：
- ✅ 实战电商数据分析
- ✅ 自动化内容生成
- ✅ 构建完整工作流

## 🕐 预计时间：2 小时

---

## 案例 1：电商数据分析

### 场景

你是一个电商运营，需要分析销售数据并生成报告。

### 数据准备

创建 `sales.csv` 文件：

```csv
date,product,price,quantity,category
2024-03-01,Product A,99.99,10,电子
2024-03-02,Product B,149.99,5,电子
2024-03-03,Product C,79.99,15,家居
2024-03-04,Product D,199.99,3,电子
2024-03-05,Product E,59.99,20,家居
```

### 分析任务

```
你：读取 sales.csv 文件，分析销售数据

助手：✓ 正在读取 sales.csv...
✓ 数据分析完成

销售分析报告
============

总体统计：
- 总销售额：¥5,399.55
- 订单数：53
- 平均客单价：¥101.88

分类统计：
1. 电子类：
   - 销售额：¥3,999.64
   - 占比：74.08%
   - 订单数：18

2. 家居类：
   - 销售额：¥1,399.91
   - 占比：25.92%
   - 订单数：35

热销产品：
1. Product E（家居）- ¥1,199.80（20件）
2. Product A（电子）- ¥999.90（10件）
3. Product C（家居）- ¥1,199.85（15件）

趋势分析：
- 电子类产品销售额占比高
- 家居类产品销量大但单价低
- 建议增加电子类产品推广
```

### 可视化报告

```
你：生成销售数据可视化图表

助手：✓ 正在生成图表...
✓ 已保存到 charts/sales-trend.png

图表说明：
- 销售趋势图
- 分类占比饼图
- 产品销量柱状图
```

---

## 案例 2：内容生成自动化

### 场景

你需要为电商产品批量生成营销文案。

### 产品数据

创建 `products.json`：

```json
[
  {
    "id": 1,
    "name": "智能手表",
    "price": 999,
    "features": ["心率监测", "GPS定位", "7天续航"],
    "target": "运动爱好者"
  },
  {
    "id": 2,
    "name": "无线耳机",
    "price": 399,
    "features": ["降噪", "30小时续航", "IPX5防水"],
    "target": "音乐爱好者"
  }
]
```

### 批量生成文案

```
你：读取 products.json，为每个产品生成营销文案

助手：✓ 正在读取产品数据...
✓ 正在生成营销文案...

产品 1：智能手表
--------------------
🎯 目标用户：运动爱好者

💰 价格：¥999

✨ 核心卖点：
- 实时心率监测，运动更安全
- 精准GPS定位，记录每一步
- 7天超长续航，告别电量焦虑

📝 营销文案：
为运动而生！智能手表带你突破极限。
实时监测心率，精准记录轨迹，7天续航无忧。
现在下单，享受运动新体验！🏃‍♂️

---

产品 2：无线耳机
--------------------
🎯 目标用户：音乐爱好者

💰 价格：¥399

✨ 核心卖点：
- 主动降噪，沉浸音质
- 30小时超长续航
- IPX5防水，运动无忧

📝 营销文案：
音乐无界，纯净如初！
主动降噪技术，让你沉浸在音乐世界。
30小时续航，IPX5防水，运动也能随心而动！🎧

✓ 所有文案已保存到 marketing-copy.md
```

### 多平台适配

```
你：为这些产品生成不同平台的文案

助手：✓ 正在生成多平台文案...

小红书风格：
[标题] 运动必备！智能手表测评
[正文] 最近入手了这款智能手表，太香了！
#运动 #智能手表 #好物推荐

微博风格：
【运动必备】智能手表实测，心率监测超准！
7天续航，运动党必备
#智能手表 #运动 #评测

朋友圈风格：
终于找到适合运动的智能手表了！
心率监测+GPS+7天续航，运动必备神器

✓ 已保存到 marketing-copy-social.md
```

---

## 案例 3：竞品价格监控

### 场景

监控竞品价格变化，自动提醒。

### 配置监控任务

创建 `tasks/price-monitor.yml`：

```yaml
name: 竞品价格监控
description: 监控竞品价格变化

schedule:
  cron: "*/30 * * * *"  # 每30分钟
  enabled: true

products:
  - name: 竞品A
    url: https://example.com/product/a
    targetPrice: 899
  - name: 竞品B
    url: https://example.com/product/b
    targetPrice: 459

actions:
  - condition: price < targetPrice
    action: send-alert
    message: "价格提醒：{{name}} 降至 {{price}}"
```

### 执行监控

```
你：启动竞品价格监控

助手：✓ 竞品价格监控已启动
✓ 每30分钟检查一次价格变化

当前价格：
- 竞品A：¥899（目标：¥899）✓
- 竞品B：¥459（目标：¥459）✓

有价格变化时会立即通知你！
```

---

## 案例 4：客户服务自动化

### 场景

自动回复常见问题，提升客服效率。

### 创建知识库

创建 `knowledge-base.md`：

```markdown
# 常见问题

## 物流问题

Q: 什么时候发货？
A: 正常情况下，下单后24小时内发货

Q: 发货后多久能收到？
A: 国内快递3-5天，偏远地区7-10天

Q: 如何查询物流？
A: 订单详情中可查看物流信息

## 售后问题

Q: 可以退换货吗？
A: 支持7天无理由退换货

Q: 退货运费谁承担？
A: 质量问题我们承担，个人原因客户承担

Q: 如何申请售后？
A: 订单详情中点击"申请售后"
```

### 配置自动回复

```yaml
autoReply:
  enabled: true
  knowledgeBase: knowledge-base.md
  confidenceThreshold: 0.8

  # 关键词匹配
  keywords:
    - pattern: "发货|快递|物流"
      category: "物流问题"

    - pattern: "退货|退款|售后"
      category: "售后问题"

  # 模板回复
  templates:
    greeting: "您好！我是智能客服，很高兴为您服务。"
    unknown: "抱歉，我不确定您的问题。请详细描述，或联系人工客服。"
    transfer: "正在为您转接人工客服..."
```

### 测试自动回复

```
用户：什么时候发货？
助手：您好！我是智能客服，很高兴为您服务。

关于发货时间的问题：
正常情况下，下单后24小时内发货。

还有其他问题吗？

用户：怎么退货？
助手：您好！我是智能客服，很高兴为您服务。

关于退换货的问题：
支持7天无理由退换货。

具体情况请告诉我，我会尽力帮助您。
```

---

## 案例 5：数据可视化仪表板

### 场景

创建电商数据可视化仪表板。

### 创建仪表板

创建 `dashboard.yml`：

```yaml
name: 电商数据仪表板
description: 实时监控电商数据

charts:
  - type: line
    title: 销售趋势
    data: sales-trend
    refresh: 1h

  - type: pie
    title: 分类占比
    data: category-share
    refresh: 6h

  - type: bar
    title: 热销产品
    data: top-products
    refresh: 1h

  - type: metric
    title: 今日销售额
    data: today-sales
    refresh: 5m

alerts:
  - condition: today-sales < 10000
    message: "今日销售额低于预期"
    level: warning

  - condition: top-products[0].quantity < 10
    message: "热销产品销量下降"
    level: critical
```

### 生成仪表板

```
你：生成电商数据仪表板

助手：✓ 正在生成仪表板...
✓ 已保存到 dashboard.html

仪表板已生成，包含：
- 📈 销售趋势图
- 🥧 分类占比饼图
- 📊 热销产品柱状图
- 💰 实时销售额指标

在浏览器中打开 dashboard.html 查看完整仪表板
```

---

## 🎉 综合项目

### 项目：电商运营助手

整合今天学习的所有功能，构建完整的电商运营助手。

#### 功能清单

1. ✅ 销售数据分析
2. ✅ 营销文案生成
3. ✅ 竞品价格监控
4. ✅ 客户服务自动化
5. ✅ 数据可视化仪表板

#### 配置文件

```yaml
name: 电商运营助手
model: gpt-4

# 记忆电商相关信息
memory:
  enabled: true
  longTerm:
    path: ~/workspace/ecommerce-memory.md

# 集成所有任务
schedules:
  - name: 每日销售分析
    cron: "0 9 * * *"
    task: analyze-sales

  - name: 竞品价格监控
    cron: "*/30 * * * *"
    task: monitor-prices

  - name: 自动回复客服
    enabled: true
    task: auto-reply-customer

# 集成所有技能
skills:
  - data-analyzer
  - content-generator
  - price-monitor
  - customer-service
  - dashboard
```

---

## 📝 今日总结

### 你完成了：

1. ✅ 电商数据分析实战
2. ✅ 批量内容生成自动化
3. ✅ 竞品价格监控系统
4. ✅ 客户服务自动化
5. ✅ 数据可视化仪表板
6. ✅ 综合项目实战

### 下一步：

明天我们将学习：
- 🛠️ 自定义技能开发
- 🔌 API 集成开发
- 🚀 部署和运维实战

---

## ❓ 常见问题

### Q: 如何处理大量数据？
A: 使用数据分片，分批处理，或者使用向量数据库

### Q: 自动化任务失败了怎么办？
A: 检查日志，确认网络连接，添加重试机制

### Q: 如何优化生成内容的质量？
A: 提供更详细的 prompt，使用 few-shot 学习，人工审核后使用

### Q: 实时监控有延迟怎么办？
A: 减少检查间隔，使用更高效的数据结构，优化算法

---

**恭喜完成 Day 6！** 🎊

你已经能够解决实际的电商运营问题了！

## 📚 延伸阅读

- [实例教程](../examples/)
- [技能系统](../skills/)
- [API 参考](../api/)
