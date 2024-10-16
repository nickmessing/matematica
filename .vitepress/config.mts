import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Conspect la Matematică',
  description: 'Învățăm matematica împreună',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Algebră', link: '/algebra' },
      { text: 'Geometrie', link: '/geometrie' },
    ],

    sidebar: {
      '/geometrie/': [
        {
          text: 'Geometrie Afină',
          items: [{ text: 'Geometrie Afină și Spații Afine', link: '/geometrie/spatii-afine' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    search: {
      provider: 'local',
    },
  },
  markdown: {
    config: md => {
      md.use(katex, {
        output: 'mathml',
      })
    },
  },
})
