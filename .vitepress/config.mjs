import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  title: "Carelessly", // 网页标签页上显示的名字
  description: "Thoughts, Reflections, and reading.",
  themeConfig: {
    siteTitle: false, // 彻底隐藏页面左上角的标题
    nav: [],          // 彻底清空右上角的菜单按钮
    sidebar: false,   // 隐藏侧边栏
    outline: false    // 隐藏右侧的 On this page 目录
  }
})
