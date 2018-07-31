var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var path = require('path');


function asyncFunction(i) {
    // return new Promise((resolve, reject) => {
    //     resolve(i);
    //     // reject(i);
    // });
    return Promise.resolve(i);
}

// asyncFunction().then(res => {
//     console.log(res);    
// }).catch(err =>{
//     console.log(err);    
// });

for (var promiseArr = [], i = 0; i < 12; i++) {
    promiseArr.push(asyncFunction(i));
}

Promise.all(promiseArr).then(res => {
    console.log(res);
}).catch(function onRejected(err) {
    console.error('error', err);
});

// function ajax(url) {
//     return function(){
//         var req = new XMLHttpRequest();
//         req.open('GET', url, true);
//         req.onload = ()=>{
//             Promise.resolve(req.responseText)
//         }
//         req.send();
//     }
// }

function getURL(url) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = () => {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = () => {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(res) {
    console.log('66666');
    console.log(res);
}).catch(function onRejected(err) {
    console.log('error');
    console.error(err);
});



console.log('====================');
console.log(__dirname, __filename);

var demo = require('./1');
console.log(demo);
console.log(module);


console.log('====================');