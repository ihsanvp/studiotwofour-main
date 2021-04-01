import colors from 'vuetify/es5/util/colors'
// import 'node_modules/animate.css/animate.min.css'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Studiotwofour | Digital Creative Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'style',
        href: '/fonts/Museo_Sans/stylesheet.css',
        onload: 'this.rel = "stylesheet"',
      },
      {
        rel: 'prefetch',
        as: 'style',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
        onload: 'this.rel = "stylesheet"',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        charset: 'utf-8',
        src: '/js/anime.min.js',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/styles.css', 'aos/dist/aos.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/libraries.client.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://studiotwofour-cms.herokuapp.com',
      pathRewrite: { '^/api/': '' },
    },
  },

  pwa: {
    meta: {
      theme_color: '#320037',
      ogHost: 'studiotwofour.com',
      nativeUI: true,
      mobileApp: true,
      mobileAppIOS: true,
      name: 'Studio twofour',
    },
    manifest: {
      lang: 'en',
      theme_color: '#320037',
      name: 'Studio twofour',
      short_name: 'S24',
    },
    // workbox: {
    //   offlineAssets: [
    //     '@/assets/css/styles.css',
    //     '@/assets/logo.png',
    //     '@/assets/videos/teaser.mp4',

    //     '@/assets/img/about/Lab_rect.png',
    //     '@/assets/img/about/Lab2.png',
    //     '@/assets/img/about/Philo_BG.png',
    //     '@/assets/img/about/Philo2.png',
    //     '@/assets/img/about/Philotr.png',

    //     '@/assets/img/contact/Call.png',
    //     '@/assets/img/contact/Mail.png',
    //     '@/assets/img/contact/QA_slide.jpg',

    //     '@/assets/img/portfolio/1.png',
    //     '@/assets/img/portfolio/2.png',
    //     '@/assets/img/portfolio/3.png',
    //     '@/assets/img/portfolio/4.jpg',
    //     '@/assets/img/portfolio/5.jpg',
    //     '@/assets/img/portfolio/6.png',
    //     '@/assets/img/portfolio/7.png',
    //     '@/assets/img/portfolio/8.png',
    //     '@/assets/img/portfolio/9.jpg',

    //     '@/assets/img/services/card-icon-1.png',
    //     '@/assets/img/services/card-icon-2.png',
    //     '@/assets/img/services/card-icon-3.png',
    //     '@/assets/img/services/card-icon-4.png',
    //     '@/assets/img/services/card-icon-5.png',
    //     '@/assets/img/services/card-icon-6.png',

    //     '@/assets/img/slides/1.jpg',
    //     '@/assets/img/slides/2.jpg',
    //     '@/assets/img/slides/3.jpg',

    //     '@/assets/img/work/VR_3.png',
    //     '@/assets/img/work/VR_3D.png',
    //     '@/assets/img/work/VR_360.png',
    //     '@/assets/img/work/VR_BG.jpg',
    //   ],
    // },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  loadingIndicator: {
    name: '~static/loader.html',
  },

  loading: {
    color: '#ffd300',
    height: '5px',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
