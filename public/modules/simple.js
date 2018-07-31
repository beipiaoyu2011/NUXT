const path = require('path');
module.exports = function SimpleModule(moduleOptions){
    console.log('Single Module', moduleOptions);
    console.log('================================');    
    
    let options = Object.assign({}, this.options, moduleOptions);

    this.addPlugin({
        src: path.resolve(__dirname, 'p.js'),
        options: this.options.dev
    });
    // console.log(this.options);

    this.nuxt.hook('module', moduleContainer=>{
        console.log(moduleContainer);        
    });
    
};