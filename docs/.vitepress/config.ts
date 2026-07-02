import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的知识库",
  description: "前端学习笔记 & 开发工具速查",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '工具', link: '/tools/' },
      { text: '踩坑', link: '/projects/' },
    ],

    sidebar: {
      '/frontend/': [
        {
          text: 'CSS',
          items: [
            { text: '总览', link: '/frontend/css/' },
            { text: 'Flex 布局', link: '/frontend/css/flex' },
            { text: 'Grid 布局', link: '/frontend/css/grid' },
          ]
        },
        {
          text: 'Vue',
          items: [
            { text: '总览', link: '/frontend/vue/' },
            { text: '组件通信', link: '/frontend/vue/components' },
            { text: '响应式原理', link: '/frontend/vue/reactivity' },
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: '总览', link: '/frontend/js/' },
          ]
        },
      ],

      '/tools/': [
        {
          text: 'Git',
          items: [
            { text: '总览', link: '/tools/git/' },
            { text: '基础命令', link: '/tools/git/basic' },
            { text: '分支操作', link: '/tools/git/branch' },
          ]
        },
        {
          text: '终端',
          items: [
            { text: '常用命令', link: '/tools/terminal/' },
          ]
        },
      ],

      '/projects/': [
        {
          text: '踩坑记录',
          items: [
            { text: '总览', link: '/projects/' },
            { text: 'VitePress 踩坑', link: '/projects/vitepress-pitfalls' },
            { text: '部署问题', link: '/projects/deployment' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
