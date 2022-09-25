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
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Poppins:ital,wght@0,300;1,500&family=Raleway:wght@500;700;800;900&family=Work+Sans:wght@300;400;600&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/main', 
    '~assets/sass/theme',
    '~assets/sass/app-sizes',
    '~assets/sass/fonts',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
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
