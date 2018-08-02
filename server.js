// let config = require('./nuxt.config');
// const app = require('express')();
// const { Nuxt, Builder } = require('nuxt');
// const port = process.env.PORT || 3000;


// const nuxt = new Nuxt(config);
// console.log(config);

// // app.use(nuxt);
// if (config.dev) {
//     new Builder(nuxt).build().catch(err => {
//         console.error(error);
//         process.exit(1);
//     })
// }

// // console.log(config);

// // app.listen(port, '0.0.0.0').then(()=>{
// //     nuxt.showOpen();
// // })

// const express = require('express')
// const request = require('request')
// const app = express()

// app.use('/', function (req, res) {
//     const url = 'https://nuxt-auth-routes.glitch.me' + req.url
//     req.pipe(request(url)).pipe(res.set('Access-Control-Allow-Origin', '*'))
// });

// app.listen(process.env.PORT || 3001);

// var express = require('express');
// var app = express();

// var cors = require('cors');
// var bodyParser = require('body-parser');

// //enables cors
// app.use(cors({
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));

// require('./router/index')(app);