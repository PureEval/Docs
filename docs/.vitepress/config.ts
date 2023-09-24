import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

export const sidebar = {
    '/api/': [
        {
            text: 'Global API',
            items: [
                { text: '⭐Currying', link: '/api/currying' },
                { text: '⭐Transform', link: '/api/transform' },
                { text: 'Logic', link: '/api/logic' },
                { text: 'PlaceHolder', link: '/api/placeholder' },
                { text: 'String', link: '/api/string' },
                { text: '⭐StateMachine', link: '/api/stateMachine' },
                { text: 'Math', link: '/api/mathematics' },
                { text: 'Range', link: '/api/range' },
                { text: 'Bind', link: '/api/bind' },
                { text: '⭐Match', link: '/api/match' },
                { text: 'List', link: '/api/list' },
                { text: 'Object', link: '/api/object' },
                { text: '⭐Iterate', link: '/api/iterate' },
                { text: 'Filter', link: '/api/filter' },
                { text: '⭐Optics', link: '/api/optics' },
                { text: '⭐Maybe(Monad)', link: '/api/maybe' },
                { text: '⭐MaybeAsync', link: '/api/maybeAsync' },
                { text: '⭐Task', link: '/api/task' },
                { text: '⭐Either', link: '/api/either' },
                { text: '⭐IO(Monad)', link: '/api/io' },
                { text: '⭐IOAsync', link: '/api/ioasync' },
                { text: '⚠List(Cons)', link: '/api/listcons' },
                { text: '⚠Data', link: '/api/data' }
            ],
        },
    ],
};

export const cnSidebar = {
    '/cn/api/': [
        {
            text: '全局 API',
            items: [
                { text: '⭐Currying', link: '/cn/api/currying' },
                { text: '⭐Transform', link: '/cn/api/transform' },
                { text: 'Logic', link: '/cn/api/logic' },
                { text: 'PlaceHolder', link: '/cn/api/placeholder' },
                { text: 'String', link: '/cn/api/string' },
                { text: '⭐StateMachine', link: '/cn/api/stateMachine' },
                { text: 'Math', link: '/cn/api/mathematics' },
                { text: 'Range', link: '/cn/api/range' },
                { text: 'Bind', link: '/cn/api/bind' },
                { text: '⭐Match', link: '/cn/api/match' },
                { text: 'List', link: '/cn/api/list' },
                { text: 'Object', link: '/cn/api/object' },
                { text: '⭐Iterate', link: '/cn/api/iterate' },
                { text: 'Filter', link: '/cn/api/filter' },
                { text: '⭐Optics', link: '/cn/api/optics' },
                { text: '⭐Maybe(Monad)', link: '/cn/api/maybe' },
                { text: '⭐MaybeAsync', link: '/cn/api/maybeAsync' },
                { text: '⭐Task', link: '/cn/api/task' },
                { text: '⭐Either', link: '/cn/api/either' },
                { text: '⭐IO(Monad)', link: '/cn/api/io' },
                { text: '⭐IOAsync', link: '/cn/api/ioasync' },
                { text: '⚠List(Cons)', link: '/cn/api/listcons' },
                { text: '⚠Data', link: '/cn/api/data' }
            ],
        },
    ],
};


export default defineConfig({
    lang: 'en-US',
    title: 'PureEval',
    description: 'PureEval Documentation',

    lastUpdated: true,

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/PureEval/PureEval' },
        ],

        editLink: {
            pattern: 'https://github.com/PureEval/documentation/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },

        footer: {
            message: 'PureEval released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023 PureEval',
        },
    },

    locales: {
        cn: {
            label: '简体中文',
            lang: 'zh-CN',
            themeConfig: {
                sidebar: cnSidebar,

                logo: {
                    light: '/images/icons/logo-light.svg',
                    dark: '/images/icons/logo-dark.svg'
                },

                nav: [
                    { text: '指南 (英文)', link: '/guide/getting-started', activeMatch: '/guide/' },
                    {
                        text: 'API 参考文档',
                        activeMatch: `^/cn/api/`,
                        link: '/cn/api/',
                    },
                    {
                        text: 'Blog', link: '/blog/', activeMatch: '/blog'
                    }
                ],
            }
        },
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                sidebar,

                logo: {
                    light: '/images/icons/logo-light.svg',
                    dark: '/images/icons/logo-dark.svg'
                },

                nav: [
                    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
                    {
                        text: 'API Reference Documentation',
                        activeMatch: `^/api/`,
                        link: '/api/',
                    },
                    {
                        text: 'Blog', link: '/blog/', activeMatch: '/blog'
                    }
                ],
            }
        }
    },

    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
    },

    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
});
