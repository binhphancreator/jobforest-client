export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JobForest | Website việc freelance',
    htmlAttrs: {
      lang: 'vn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'JobForest | Website việc freelance' },
      { name: 'author', content: 'jobforest.me' },
      { property: 'og:site_name', content: 'jobforest.me' },
      { property: 'og:locale', content: 'vi' },
      { property: 'og:title', content: 'JobForest | Website việc freelance' },
      { property: 'og:url', content: 'http://jobforest.me' },
      { property: 'og:image', content: 'http://jobforest.me/jobforest.png' },
      { property: 'og:description',name:'description', content: 'Thuê freelancer lập trình, thiết kế, marketing, viết lách, dịch thuật, v.v. trên toàn Việt Nam với giá hợp lý, giúp tiết kiệm 50% chi phí cho doanh nghiệp.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'https://accounts.google.com/gsi/client',async:true,defer:true}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/v-particles.js',mode:'client'},
    {src:'~/plugins/v-notification.js',mode:'client'},
    {src:'~/plugins/v-calendar.js',mode:'client'},
    {src:'~/plugins/quill.js',mode:'client'},
    {src:'~/plugins/v-select.js',mode:'client'},
    {src:'~/plugins/v-validate.js',mode:'client'},
    {src:'~/plugins/laravel-echo.js',mode:'client'},
    {src:'~/plugins/login.js',mode:'client'},
    {src:'~/plugins/logout.js',mode:'client'},
    {src:'~/plugins/google-onetap.js',mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/moment',
  ],
  auth:{
    strategies:{
      'laravelSanctum':{
        provider:'laravel/sanctum',
        url:'http://backend.jobforest.me',
        endpoints:{
          login:{
            url: '/api/login',
            method:'POST',
          },
          logout:{
            url: '/api/logout',
            method:'POST',
          },
        }
      },
      google: {
        endpoints:{
          authorization: 'http://backend.jobforest.me/api/auth/google/redirect',
        }
      },
    },
  },

  axios:{
    baseURL: 'http://backend.jobforest.me',
    credentials: true,
  },

  pageTransition: {
    name: 'page-transition',
    mode: 'out-in'
  },

  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
