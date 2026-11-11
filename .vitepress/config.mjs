import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "turbo-note",
  description: "Person Note Base A VitePress Site",
  base: '/turbo-note/',
  head: [['link', { rel: 'icon', type:'image/png',href: '/turbo-note/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/documents/example/markdown-examples' },
      { text:'LangChain 🆕',
        items:[
          { text: '课件', link: '/documents/langchain/readme' },
          { text: 'notebook', link: '/documents/langchain/readme' },
          { text: '相关连接', link: 'https://www.bilibili.com/video/BV14rxM6qEnL/?spm_id_from=333.788.player.switch&vd_source=3957d227cf947d23ec3a1b38fd500870&p=5' }
        ]
      },
      {
        text: 'python虚拟环境', link :'documents/python-env/01-python虚拟环境介绍'
      }
    ],
    i18nRouting: true,
    logo: '/zhishizengchang.png',
    sidebar: {
       // 当用户位于 `example` 目录时，会显示此侧边栏
      '/documents/example/':[{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/documents/example/markdown-examples' },
          { text: 'Runtime API Examples', link: '/documents/example/api-examples' }
        ]
      }],

      '/documents/langchain/':[
        {
          text:'LangChain',
          items:[
            {text:'ReadMe',link:'/documents/langchain/readme'}
          ]
        }
        ,{
          text:'相关连接',
          items:[
            {text:'代码',link:'/documents/langchain/code'}
          ]
        }
      ],
      '/documents/python-env/':[
          {
            text:'python虚拟环境',
            items:[
              {text:'01-虚拟环境介绍',link:'/documents/python-env/01-python虚拟环境介绍'}
            ]
          }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search:{
      provider: 'local',
      options: {  
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '输入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    footer:{
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
