import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Blog",
  description: "A minimalist blog",
  themeConfig: {
    siteTitle: "My Blog",
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: false,
    search: {
      provider: 'local'
    }
  }
})
