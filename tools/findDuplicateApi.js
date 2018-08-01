// --- 找出重复的 api
const fs = require('fs')

var data = fs.readFileSync('./public/plugins/src/dataService.js', 'utf-8')

var arr = data.match(/(get|post)\('([a-z\/\_]+)/g)

arr.sort()
arr.forEach((val, i, a) => {
    if(val == a[i - 1]){
        console.log(a[i - 1])
    }
})