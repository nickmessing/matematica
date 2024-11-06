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
      {
        text: 'Algebră liniară',
        activeMatch: '^/algebra-liniara/',
        items: [
          {
            text: 'Spații vectoriale',
            link: '/algebra-liniara/spatii-vectoriale',
            activeMatch: '^/algebra-liniara/spatii-vectoriale',
          },
          {
            text: 'Matrice',
            link: '/algebra-liniara/matrice',
            activeMatch: '^/algebra-liniara/matrice',
          },
        ],
      },
      {
        text: 'Teoria Mulțimilor',
        activeMatch: '^/teoria-multimilor',
        items: [
          {
            text: 'Notiuni de bază',
            link: '/teoria-multimilor/notiuni-de-baza',
            activeMatch: '^/teoria-multimilor/notiuni-de-baza',
          },
        ],
      },
      {
        text: 'Analiză Matematică',
        activeMatch: '^/analiza',
        items: [
          {
            text: 'Șiruri',
            link: '/analiza/siruri',
            activeMatch: '^/analiza/siruri',
          },
        ],
      },
      {
        text: 'Geometrie',
        activeMatch: '^/geometrie',
        items: [
          {
            text: 'Spații afine',
            link: '/geometrie/afine',
            activeMatch: '^/geometrie/afine',
          },
        ],
      },
      {
        text: 'Simboluri',
        activeMatch: '^/simboluri',
        link: '/simboluri',
      },
    ],

    sidebar: {
      '/algebra-liniara/': [
        {
          text: 'Spații vectoriale',
          base: '/algebra-liniara/spatii-vectoriale/',
          link: '.',
          items: [
            {
              text: 'Definiții și exemple de spații vectoriale peste ℝ',
              link: 'definitii-exemple',
              items: [
                {
                  text: 'Spații vectoriale peste ℝ',
                  link: 'definitii-exemple/spatii-vectoriale-peste-r',
                },
                {
                  text: 'Teoreme ale spațiilor vectoriale peste ℝ',
                  link: 'definitii-exemple/teoreme-spatii-vectoriale-peste-r',
                },
                {
                  text: 'Definiții',
                  link: 'definitii-exemple/definitii',
                },
                {
                  text: 'Produs scalar',
                  link: 'definitii-exemple/produs-scalar',
                },
                {
                  text: 'Subspații vectoriale',
                  link: 'definitii-exemple/subspatii',
                },
              ],
            },
          ],
        },
        {
          text: 'Matrice',
          base: '/algebra-liniara/matrice/',
          link: '.',
          items: [
            {
              text: 'Definiții și exemple',
              link: 'definitii-exemple',
              items: [
                {
                  text: 'Matrice',
                  link: 'definitii-exemple/matrice',
                },
                {
                  text: 'Matrice de tranziție',
                  link: 'definitii-exemple/matrice-de-tranzitie',
                },
              ],
            },
          ],
        },
      ],
      '/teoria-multimilor/': [
        {
          text: 'Noțiuni de bază',
          base: '/teoria-multimilor/notiuni-de-baza/',
          link: '.',
          items: [
            {
              text: 'Definiții fundamentale',
              link: 'definitii-fundamentale',
              items: [
                {
                  text: 'Mulțime',
                  link: 'definitii-fundamentale/multime',
                },
                {
                  text: 'Funcție',
                  link: 'definitii-fundamentale/functie',
                },
                {
                  text: 'Relație binară',
                  link: 'definitii-fundamentale/relatie-binara',
                },
              ],
            },
          ],
        },
      ],
      '/analiza/': [
        {
          text: 'Șiruri',
          base: '/analiza/siruri/',
          link: '.',
          items: [
            {
              text: 'Definiții',
              link: 'definitii',
            },
            {
              text: 'Teoreme',
              link: 'teoreme',
            },
          ],
        },
      ],
      '/geometrie/': [
        {
          text: 'Spații afine',
          base: '/geometrie/afine/',
          link: '.',
          items: [
            {
              text: 'Definiții',
              link: 'definitii',
            },
            {
              text: 'Teoreme',
              link: 'teoreme',
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Caută',
            buttonAriaLabel: 'Caută',
          },
          modal: {
            displayDetails: 'Afișează detalii',
            resetButtonTitle: 'Resetează',
            backButtonTitle: 'Înapoi',
            noResultsText: 'Niciun rezultat găsit',
            footer: {
              selectText: 'Selectează',
              selectKeyAriaLabel: 'Selectează',
              navigateText: 'Navighează',
              navigateUpKeyAriaLabel: 'Navighează sus',
              navigateDownKeyAriaLabel: 'Navighează jos',
              closeText: 'Închide',
              closeKeyAriaLabel: 'Închide',
            },
          },
        },
      },
    },
    outline: {
      label: 'Cuprins',
    },
    notFound: {
      title: 'Pagina nu a fost găsită',
      quote: 'Nu toți cei care rătăcesc sunt pierduți.',
      linkLabel: 'Înapoi la pagină de start',
      linkText: 'Înapoi la pagină de start',
    },
    lightModeSwitchTitle: 'Comută la modul luminos',
    darkModeSwitchTitle: 'Comută la modul întunecat',
    darkModeSwitchLabel: 'Aparență',
    sidebarMenuLabel: 'Cuprins',
    returnToTopLabel: 'Înapoi sus',
    docFooter: {
      prev: 'Pagina anterioară',
      next: 'Pagina următoare',
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
