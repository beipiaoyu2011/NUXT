var bodyParser = require('body-parser');
var session = require('express-session');
const querystring = require('querystring')
const makeSign = require('./tools/signature');
module.exports = {
  dev: (process.env.NODE_ENV !== 'production'),
  baseUrl: process.env.BASE_URL || 'localhost://3000',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // ['~/modules/simple.js', { token: '123456' }],
    // '@gauseen/nuxt-proxy',
  ],
  proxy: [
    [
      '/api',
      {
        target: 'https://nuxt-auth-routes.glitch.me',
        pathRewrite: (path, req, res) => {
          if (req.method == "GET") {
            var pathname = req._parsedUrl.pathname.replace(/^\/api\//, '')
            var queryObj = querystring.parse(req._parsedUrl.query)
            // var d = makeSign(app_key, app_secret, req.method, pathname, queryObj).query;
            var d = makeSign('', '', req.method, pathname, queryObj).query;
            return '/' + pathname + '?' + querystring.stringify(d)
          }
          return path.replace('/api', '')
        },
        onProxyReq: (proxyReq, req, res) => {
          if (req.method == "POST" && req.body) {

            // Remove body-parser body object from the request
            var queryObj = req.body
            if (req.body) delete req.body;

            var pathname = req._parsedUrl.pathname.replace(/^\/api\//, '')
            var body = makeSign(app_key, app_secret, req.method, pathname, queryObj).query;

            body = Object.keys(body).map(function (key) {
              return encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
            }).join('&');

            // // Update header
            proxyReq.setHeader('content-type', 'application/x-www-form-urlencoded');
            proxyReq.setHeader('content-length', body.length || 0);

            // // Write out body changes to the proxyReq stream
            proxyReq.write(body);
            proxyReq.end();
          }
        }
      }
    ],

  ],
  // proxyTable: {
  //   '/api': { target: 'https://nuxt-auth-routes.glitch.me/', ws: false }
  // },
  /*
 ** Add server middleware
 ** Nuxt.js uses `connect` module as server
 ** So most of express middleware works with nuxt.js server middleware
 */
  // serverMiddleware: [
  //   // body-parser middleware
  //   bodyParser.json(),
  //   // session middleware
  //   session({
  //     secret: 'super-secret-key',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 60000 }
  //   }),
  //   // Api middleware
  //   // We add /api/login & /api/logout routes
  //   '~/api'
  // ],
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
      '/6',
      '/posts/1'
    ]
  },
  router: {
    middleware: 'authenticated'
  }



}
