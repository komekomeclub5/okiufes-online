export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'okiufes',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/granim.js-2.0.0/dist/granim.min.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/bootstrap-grid.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: ['Montserrat:500,600,900', 'Noto+Sans+JP:500,600,900'] 
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
