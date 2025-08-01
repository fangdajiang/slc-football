# SLC 上海胜利之光少儿社区足球队官方网站

这是SLC Shanghai Victory Light Youth Community Football Team的官方网站，使用Next.js 14构建，支持中文、英文和西班牙文三种语言。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **国际化**: next-intl
- **类型**: TypeScript
- **部署**: Vercel (推荐)

## 功能特点

- 🌐 **多语言支持**: 中文、英文、西班牙文
- 📱 **响应式设计**: 完美适配桌面、平板和手机
- ⚡ **性能优化**: 使用Next.js的SSR和图片优化
- 🎨 **现代UI**: 动画效果和交互体验
- 🔍 **SEO优化**: 元数据、sitemap和robots.txt
- 🌙 **暗色模式**: 支持系统主题切换

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 构建生产版本

```bash
npm run build
```

### 生产环境运行

```bash
npm start
```

## 项目结构

```
slc-football/
├── app/
│   ├── [locale]/        # 国际化路由
│   │   ├── layout.tsx   # 布局文件
│   │   └── page.tsx     # 主页
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 根页面（重定向）
├── components/          # React组件
│   ├── Navigation.tsx   # 导航栏
│   ├── Hero.tsx        # 英雄区域
│   ├── About.tsx       # 球队概况
│   ├── Origin.tsx      # 球队由来
│   ├── Future.tsx      # 未来展望
│   └── Footer.tsx      # 页脚
├── dictionaries/       # 多语言文件
│   ├── zh.json         # 中文
│   ├── en.json         # 英文
│   └── es.json         # 西班牙文
├── lib/                # 工具函数
│   ├── i18n.ts         # 国际化配置
│   └── metadata.ts     # SEO元数据
└── public/             # 静态资源
    └── images/         # 图片资源
```

## 部署

### Vercel部署（推荐）

1. 将代码推送到GitHub
2. 在[Vercel](https://vercel.com)导入项目
3. 自动构建和部署

### 其他平台部署

```bash
# 构建
npm run build

# 启动
npm start
```

## 环境变量

创建`.env.local`文件（如需要）：

```env
# 示例环境变量
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 开发指南

### 添加新页面

1. 在`app/[locale]/`目录创建新文件夹
2. 添加`page.tsx`文件
3. 在字典文件中添加翻译

### 修改翻译

编辑`dictionaries/`目录下对应的语言文件

### 添加组件

在`components/`目录创建新组件，使用`useTranslations`钩子获取翻译

## 性能优化建议

1. 使用Next.js的Image组件优化图片
2. 启用Turbopack加速开发
3. 使用动态导入减少首屏加载
4. 配置CDN加速静态资源

## 维护

- 定期更新依赖包
- 优化图片资源
- 监控网站性能
- 收集用户反馈

## 联系方式

- 邮箱: info@slc-football.com
- 地址: 上海三林晟初体育中心

---

© 2025 SLC 上海胜利之光少儿社区足球队. All rights reserved.