module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  baseUrl: process.env.BASE_URL || 'localhost://3000',
  modules:[
    '@nuxtjs/axios',
    ['~/modules/simple.js', {token: '123456'}]
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
  plugins: ['~/plugins/axios.js'],
  // mode:'spa',
  generate: {
    dir: 'cdn',
    fallback: 'error.html',
    routes: [
      '/user/1',
      '/user/2'
    ]
  },
  router: {
    middleware: 'authenticated'
  }



}
