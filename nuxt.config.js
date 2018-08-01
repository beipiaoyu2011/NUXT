module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  baseUrl: process.env.BASE_URL || 'localhost://3000',
  modules: [
    '@nuxtjs/axios',
    ['~/modules/simple.js', { token: '123456' }]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'First NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'y' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 24 },
      { id: 2, name: 'Michael Jordan', number: 23 },
      { id: 3, name: 'Stephen Curry', number: 30 },
      { id: 4, name: 'Lebron James', number: 23 },
      { id: 5, name: 'Kevin Durant', number: 35 },
      { id: 6, name: 'Kyrie Irving', number: 2 }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: {
  //   color: 'red',
  //   height: '6px'
  // },
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      // presets:['es2015','stage-0']
    }
  },
  srcDir: 'public',
  css: [
    'normalize.css',
    '@/less/index.css'
  ],
  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/vue-notifications.js', ssr: false }
  ],
  // mode:'spa',
  generate: {
    dir: 'cdn',
    fallback: 'error.html',
    routes: [
      '/1',
      '/2',
      '/3',
      '/4',
      '/5',
      '/6'
    ]
  },
  router: {
    middleware: 'authenticated'
  }



}
