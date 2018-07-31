let config = require('./nuxt.config');
const app = require('express')();
const { Nuxt, Builder } = require('nuxt');
const port = process.env.PORT || 3000;


const nuxt = new Nuxt(config);
console.log(config);

// app.use(nuxt);
if (config.dev) {
    new Builder(nuxt).build().catch(err => {
        console.error(error);
        process.exit(1);
    })
}

// console.log(config);

// app.listen(port, '0.0.0.0').then(()=>{
//     nuxt.showOpen();
// })

