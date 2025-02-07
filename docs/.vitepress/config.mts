import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base : '/LogOfTech',
  title: "LOT",
  
  description: "log of tech",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
    sidebar: {
      "/2025/": [
        {
          text: '2025',
          items: [
            { text: '1月大事记', link: '/2025/1' },
            { text: '2月大事记', link: '/2025/2' },
            { text: '3月大事记', link: '/2025/3' }
          ]
        }
      ],
      "homework": [
        {
          text: "语文作业",
          items: [
            { text: "大自然", link: "/homework/nature" },
            { text: "王阳明", link: "/homework/read" }
          ]
        }
      ]
    },
    // [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
      // {
      //   text: '2025',
      //   items: [
      //     { text: '1月大事记', link: '/2025/1' },
      //     { text: '2月大事记', link: '/2025/2' },
      //     { text: '3月大事记', link: '/2025/3' }
      //   ]
      // },
      // {
      //   text: '语文作业',
      //   items: [
      //     { text: '大自然', link: 'homework/nature'},
      //     { text: '王阳明', link: 'homework/read'}
      //   ]
      // }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
