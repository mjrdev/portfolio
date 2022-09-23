export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  router: {
    base: '/portfolio/'
  },

  target: 'static',

  generate: {
    dir: 'dist'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfólio mjrDev',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name:"theme-color", content:"#ffffff" },
      { name:"msapplication-TileColor", content:"#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main_style', 
    '~assets/sass/theme',
    '~assets/sass/app-sizes',
    '~assets/sass/fonts',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scroll-reveal.js', mode: 'client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  build: {
    transpile: ['vue-scroll-reveal']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  server: {
    host: '0.0.0.0',
  }
}
