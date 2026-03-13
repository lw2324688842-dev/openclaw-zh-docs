# OpenClaw 中文入门教程网站

这是基于 Docusaurus 构建的 OpenClaw 中文入门教程网站。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

生成的文件在 `build/` 目录中。

### 预览生产版本

```bash
npm run serve
```

## 📁 项目结构

```
openclaw-zh-docs/
├── docs/                    # 文档内容
│   ├── quick-start/       # 快速开始
│   ├── concepts/          # 核心概念
│   ├── configuration/    # 配置指南
│   ├── skills/           # 技能系统
│   ├── examples/         # 实例教程
│   └── api/              # API 参考
├── blog/                  # 博客文章
├── src/                   # 源代码
│   └── css/              # 自定义样式
├── static/                # 静态资源
├── docusaurus.config.js   # Docusaurus 配置
├── sidebars.js           # 侧边栏配置
└── package.json          # 项目配置
```

## 📝 内容规划

### 已完成章节

- ✅ 首页（欢迎页）
- ✅ 快速开始
- ✅ 核心概念
- ✅ 配置指南
- ✅ 技能系统
- ✅ 实例教程
- ✅ API 参考

### 待添加内容

- ⏳ 博客文章
- ⏳ 常见问题（FAQ）
- ⏳ 最佳实践
- ⏳ 视频教程链接
- ⏳ 贡献指南

## 🎨 自定义

### 修改主题颜色

编辑 `src/css/custom.css`：

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-light: #33925d;
  /* ... */
}
```

### 添加 Logo

将 Logo 文件放在 `static/img/` 目录，并在 `docusaurus.config.js` 中配置：

```javascript
themeConfig: {
  navbar: {
    logo: {
      alt: 'OpenClaw Logo',
      src: 'img/logo.svg',
    },
  },
}
```

## 🌐 部署

### 部署到 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 部署到 GitHub Pages

```bash
# 构建网站
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 部署到 Netlify

将仓库连接到 Netlify，设置：
- **Build command**: `npm run build`
- **Publish directory**: `build`

## 🤝 贡献

欢迎贡献内容！

1. Fork 本仓库
2. 创建新分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

MIT License

## 📞 联系

- 项目主页: https://github.com/openclaw/openclaw-zh-docs
- 官方文档: https://docs.openclaw.ai
- Discord 社区: https://discord.gg/clawd

---

构建于 [Docusaurus](https://docusaurus.io) 🦖
