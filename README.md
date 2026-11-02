# Harlan 的博客

用 Astro 搭建的个人博客，记录日常和想法，支持 RSS 和本地后台编辑。

## 本地运行

首次使用先运行 `npm install`，之后双击 `start-blog.cmd`，或运行 `npm run start`。

- 首页：http://localhost:4321
- 后台：http://localhost:4321/admin/

运行时保持终端窗口开启。

## 修改内容

- `src/pages/index.astro`：首页
- `src/data/profile.json`：个人资料
- `src/styles/global.css`：样式
- `src/layouts/Layout.astro`：公共布局

文章和图片也可以在本地后台管理。

## 部署

设置环境变量 `SITE_URL` 为网站域名，运行 `npm run build`，将生成的 `dist` 目录部署到静态托管服务。更新内容后需要重新构建。

`npm run preview` 可预览构建结果。后台目前用于本地编辑，线上登录需另行配置。
