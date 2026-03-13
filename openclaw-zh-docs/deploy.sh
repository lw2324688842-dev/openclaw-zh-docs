#!/bin/bash

# OpenClaw 中文教程网站 - 部署脚本

echo "🚀 OpenClaw 中文教程网站 - 部署"
echo ""

# 检查 Git
if ! command -v git &> /dev/null; then
    echo "❌ 错误：未找到 Git"
    exit 1
fi

# 检查是否在 Git 仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误：不是 Git 仓库"
    echo "请先初始化 Git 仓库: git init"
    exit 1
fi

# 构建
echo "🏗️  构建生产版本..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建完成！"
echo ""

# 部署选项
echo "选择部署目标："
echo "1) GitHub Pages"
echo "2) Vercel"
echo "3) Netlify"
echo "4) 仅构建（手动部署）"
echo ""
read -p "请输入选项 (1-4): " choice

case $choice in
    1)
        echo "🌐 部署到 GitHub Pages..."
        npm run deploy
        ;;
    2)
        echo "🌐 部署到 Vercel..."
        if command -v vercel &> /dev/null; then
            vercel
        else
            echo "❌ 未找到 Vercel CLI"
            echo "请安装: npm i -g vercel"
            exit 1
        fi
        ;;
    3)
        echo "🌐 部署到 Netlify..."
        echo "请在 Netlify 控制台连接此仓库"
        echo "或使用 Netlify CLI:"
        echo "  npm install -g netlify-cli"
        echo "  netlify deploy --prod"
        ;;
    4)
        echo "✅ 仅构建完成！"
        echo "build/ 目录包含生产文件"
        echo "你可以手动部署到任何静态网站托管服务"
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac
