var fs = require('fs')
var list = fs.readdirSync('./.nuxt/dist')
var imgList = fs.readdirSync('./.nuxt/dist/img')
var version = new Date().getTime();
var data = `CACHE MANIFEST
#version `+version+`
CACHE:\n`

list.forEach(val=>{
    if(/\.js$/.test(val)){
        data+=val +'\n'
    }
})
imgList.forEach(val=>{
    if(/\.png$/.test(val)||/\.gif$/.test(val)){
        data+='img/'+val +'\n'
    }
})
data+=`
NETWORK:
*
FALLBACK:`

fs.writeFileSync('./.nuxt/dist/website.appcache', data)