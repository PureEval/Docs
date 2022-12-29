import mathjax3 from 'markdown-it-mathjax3'

const customElements = ['mjx-container']

export default {
  lang: 'en-US',
  title: 'PureEval',
  description: 'PureEval Documentation',

  lastUpdated: true,

  themeConfig: {

    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      {
        text: 'API Reference Documentation',
        activeMatch: `^/api/`,
        link: '/api/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PureEval/PureEval' }
    ],

    editLink: {
      pattern: 'https://github.com/PureEval/documentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'PureEval released under the GPL-3.0 License.',
      copyright: 'Copyright © 2022 PureEval'
    }
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
}

export const sidebar = {
  '/api/': [
    {
      text: 'Global API',
      items: [
        { text: '⭐Currying', link: '/api/currying' },
        { text: "⭐Transform", link: '/api/transform' },
        { text: "Logic", link: '/api/logic' },
        { text: "String", link: '/api/string' },
        { text: "⭐StateMachine", link: '/api/stateMachine' },
        { text: "Math", link: '/api/mathematics' }
      ]
    },
  ]
}