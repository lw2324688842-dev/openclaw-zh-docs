#!/bin/bash

# OpenClaw 中文教程网站 - 快速启动脚本

echo "🚀 OpenClaw 中文教程网站 - 快速启动"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

echo ""
echo "选择操作："
echo "1) 启动开发服务器"
echo "2) 构建生产版本"
echo "3) 预览生产版本"
echo "4) 清理缓存"
echo ""
read -p "请输入选项 (1-4): " choice

case $choice in
    1)
        echo "🎯 启动开发服务器..."
        npm start
        ;;
    2)
        echo "🏗️  构建生产版本..."
        npm run build
        echo "✅ 构建完成！文件位于 build/ 目录"
        ;;
    3)
        if [ ! -d "build" ]; then
            echo "❌ 错误：未找到 build/ 目录"
            echo "请先运行选项 2 构建生产版本"
            exit 1
        fi
        echo "👀 预览生产版本..."
        npm run serve
        ;;
    4)
        echo "🧹 清理缓存..."
        npm run clear
        echo "✅ 清理完成！"
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac
