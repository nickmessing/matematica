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
      {
        text: 'Rezolvări',
        link: '/rezolvari',
      },
    ],

    sidebar: {
      '/algebra/': {
        base: '/algebra/',
        items: [
          {
            text: 'Algebră Liniară',
            link: '/',
            items: [
              { text: 'Matricea unei Forme Pătratice', link: '/matricea-formei-patratice' },
              {
                text: 'Spații Vectoriale',
                link: '/spatii-vectoriale',
                items: [
                  {
                    text: 'Peste ℝ',
                    link: '/spatii-vectoriale/real',
                  },
                  {
                    text: 'Spațiul Vectorial ℝⁿ',
                    link: '/spatii-vectoriale/real-n',
                  },
                  {
                    text: 'Operații și Proprietăți în Spații Vectoriale',
                    link: '/spatii-vectoriale/operatii',
                  },
                ],
              },
              {
                text: 'Metoda Gauss',
                link: '/metoda-gauss',
              },
            ],
          },
        ],
      },
      '/geometrie/': {
        base: '/geometrie/',
        items: [
          {
            text: 'Geometrie Afină',
            items: [{ text: 'Spații Afine și Sisteme de Coordonate Afine', link: 'spatii-afine' }],
          },
        ],
      },
      '/teorie/': {
        base: '/teorie/',
        items: [
          {
            text: 'Matematică Fundamentală',
            link: '.',
            items: [
              { text: 'Logica Matematică', link: 'logica-matematica' },
              { text: 'Mulțimi', link: 'multime' },
              { text: 'Numere Reale', link: 'numere-reale' },
              { text: 'Relații și Funcții', link: 'relatii-si-functii' },
            ],
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
