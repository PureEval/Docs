export default {
  lang: 'en-US',
  title: 'PureEval',
  description: 'PureEval Documentation',

  base: '/documentation/',

  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'API Reference Documentation', link: '/api/reference', activeMatch: '/api/' }
    ],

    editLink: {
      pattern: 'https://github.com/PureEval/documentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'PureEval released under the GPL-3.0 License.',
      copyright: 'Copyright © 2022 PureEval'
    }
  }
}