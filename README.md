# 梦醒花开 - React 项目

“梦醒花开”是个人主页项目，基于 React + Vite 构建，旨在提供一个现代化、简洁、响应式的个人主页模板。页面设计带有文艺气息，意在呈现“梦醒花开”的诗意意境，同时方便展示个人信息、作品和联系渠道。

### 特点

- 轻量化，使用 Vite 构建，高速启动与热更新  
- 响应式布局，适配桌面和移动端  
- 可自定义标题、副标题、SEO 信息  
- 支持链接模块展示个人项目、博客或社交账号  
- 易于部署到任何静态文件服务器  

## 项目结构
```
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 应用样式
│   ├── main.jsx         # React 入口文件
│   ├── index.css        # 全局样式
│   └── config.js        # 配置文件
│   └── CHINA_PRC.png    # ICP图标
│   └── favicon.ico      # 网站图标
├── index.html           # HTML 模板
├── package.json         # 项目依赖
├── vite.config.js       # Vite 配置
└── README.md           # 项目说明
```

## 安装依赖

```bash
npm install
```

## 开发模式

启动开发服务器：

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

## 构建生产版本

构建静态资源：

```bash
npm run build
```

构建完成后，静态文件将输出到 `dist` 目录。

## 预览构建结果

预览构建后的静态文件：

```bash
npm run preview
```

## 配置说明

网站配置位于 `src/config.js`，可以修改以下内容：

- `title`: 网站标题
- `subtitle`: 副标题
- `keywords`: SEO 关键词
- `description`: 网站描述
- `icpLicense`: ICP备案号
- `links`: 链接模块


## 部署

构建完成后，将 `dist` 目录中的文件部署到任何静态文件服务器即可。