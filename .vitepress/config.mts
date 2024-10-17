import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ro-RO',
  title: 'Conspect la Matematică',
  description: 'Învățăm matematica împreună',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matematică Fundamentală', link: '/teorie', activeMatch: '^/$|^/teorie/' },
      { text: 'Algebră', link: '/algebra', activeMatch: '^/algebra/' },
      { text: 'Geometrie', link: '/geometrie', activeMatch: '^/geometrie/' },
      { text: 'Notații', link: '/symbols' },
    ],

    sidebar: {
      '/algebra/': [
        {
          text: 'Algebră Liniară',
          link: '/algebra/',
          items: [
            { text: 'Matricea unei Forme Pătratice', link: '/algebra/matricea-formei-patratice' },
            {
              text: 'Spații Vectoriale',
              link: '/algebra/spatii-vectoriale',
              items: [
                {
                  text: 'Peste ℝ',
                  link: '/algebra/spatii-vectoriale/real',
                },
                {
                  text: 'Spațiul Vectorial ℝⁿ',
                  link: '/algebra/spatii-vectoriale/real-n',
                },
                {
                  text: 'Operații și Proprietăți în Spații Vectoriale',
                  link: '/algebra/spatii-vectoriale/operatii',
                },
              ],
            },
          ],
        },
      ],
      '/geometrie/': {
        base: '/geometrie/',
        items: [
          {
            text: 'Geometrie Afină',
            items: [{ text: 'Spații Afine și Sisteme de Coordonate Afine', link: 'spatii-afine' }],
          },
        ],
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    search: {
      provider: 'local',
    },
  },
  head: [['link', { rel: 'stylesheet', href: 'https://esm.sh/v135/katex@0.16.11/dist/katex.min.css' }]],
  markdown: {
    config: md => {
      md.use(katex, {
        output: 'html',
      })
    },
  },
})
