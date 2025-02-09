import { defineConfig } from 'vitepress'

export default defineConfig({
    base : '/LogOfTech',
    title: "LOT",
    description: "log of tech",
    themeConfig: {
        nav: [
            { text: '诗记', link: '/2025/1'},
            { text: '吐槽', link: '/talks/java'}
        ],
        sidebar: {
            "/2025/": [
                {
                    text: '2025',
                    collapsed: false,
                    items: [
                        { text: '1月大事记', link: '/2025/1' },
                        { text: '2月大事记', link: '/2025/2' },
                        { text: '3月大事记', link: '/2025/3' }
                    ]
                }
            ],
            "/homework/": [
                {
                    text: "语文作业",
                    collapsed: true,
                    items: [
                        { text: "大自然", link: "/homework/nature" },
                        { text: "王阳明", link: "/homework/read" }
                    ]
                }
            ],
            "/test/": [
                {
                    text: "111",
                    collapsed : true,
                    items: [
                        {
                            text: "222",
                            collapsed: true,
                            items: [
                                {
                                    text: "333",
                                    collapsed: true,
                                    items: [
                                        {
                                            text: "444",
                                            collapsed: true,
                                            items: [
                                                {
                                                    text: "555"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        search: {
            provider: 'local'
        },

        docFooter: {
			prev: '上一篇文章',
			next: '下一篇文章',
		},
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        outlineTitle: '目录',
        lastUpdatedText: '最后更新于',
        lastUpdated: true,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
    
        footer: {
			message: 'developed by euuen',
			copyright:
				'Copyright © 2025 euuen',
		},
    }
})
