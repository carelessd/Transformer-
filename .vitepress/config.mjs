import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Test",
  description: "Writing",
  cleanUrls: true,
  themeConfig: {
    sidebar: false,
    outline: false,
    // 开启右侧或底部的简洁导航
    nav: [
      { text: '首页', link: '/' }
    ],
    docFooter: { prev: false, next: false }
  }
})
