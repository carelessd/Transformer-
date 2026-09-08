import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的极简博客",
  description: "纯粹的文字空间",
  cleanUrls: true,
  themeConfig: {
    logo: '',
    sidebar: false,
    outline: false,
    nav: [
      { text: '首页', link: '/' }
    ],
    docFooter: { prev: false, next: false }
  }
})
