var axios = require('axios');
var cheerio = require('cheerio');
// var fs = require('fs');
var fetchUrl = 'https://www.sjtxt.la/book/73017/';
var all_url = [];
var all_titles = [];
var fetchData = require('./fetchData');
var LIST_FILE_NAME = '';//章节 list
var OUTPUT_FILE_NAME = '';// 输出文件
var CONTENT_ID = '';//子页面 dom id

var argv = process.argv[2];// baijie  mingdian
console.log('=============start write ', argv, ' text==============');
console.log('准备写入：', process.argv[2], '.txt');

if (argv == 'baijie') {
    fetchUrl = 'https://www.sjtxt.la/book/73017/';
    CONTENT_ID = '#content1';
} else if (argv == 'mingdian') {
    fetchUrl = 'http://www.dingdian.me/50424/';
    CONTENT_ID = '#content';
}
LIST_FILE_NAME = argv + '_list.txt';
OUTPUT_FILE_NAME = argv + '.txt';
if (!fetchUrl) return;
axios.get(fetchUrl).then(res => {
    var $ = cheerio.load(res.data);
    var $list = null;
    if (argv == 'baijie') {
        $list = $('#info').eq(2).find('li a');
    } else if (argv == 'mingdian') {
        $list = $('#list').find('a');
    }
    $list.each(function (n) {
        var href = '';
        var name = $(this).text();
        if (argv == 'baijie') {
            href = fetchUrl + $(this).attr('href');
        } else if (argv == 'mingdian') {
            href = fetchUrl + $(this).attr('href').split('/')[2];
        }
        all_url.push(href);
        all_titles.push(name);
    });
    // console.log(fetchUrl, all_url);
    // return;
    fetchData({
        URLS: all_url,
        TITLES: all_titles,
        LIST_FILE_NAME: LIST_FILE_NAME,
        OUTPUT_FILE_NAME: OUTPUT_FILE_NAME,
        CONTENT_ID: CONTENT_ID
    });
});


// var fetchData = function (url) {
//     var writeStream = fs.createWriteStream('list.txt');
//     for (var i = 0; i < url.length; i++) {
//         writeStream.write(i + ' ' + url[i] + '\n');
//     }
//     writeStream.end();
//     var arr = [];
//     function getData(i) {
//         return new Promise(resolve => {
//             var _url = url[i];
//             axios.get(_url).then(res => {
//                 var $ = cheerio.load(res.data);
//                 arr[i] = '============' + i + '=========================' + $('#content1').text();
//                 resolve();
//             });
//         });
//     }
//     for (var promiseArr = [], i = 0; i < url.length; i++) {
//         promiseArr.push(getData(i));
//     }
//     Promise.all(promiseArr).then(function () {
//         var writeStream = fs.createWriteStream('baijie.txt');
//         for (var i = 0; i < arr.length; i++) {
//             writeStream.write(i + ' ' + arr[i] + '\n');
//         }
//         writeStream.on('data', () => {
//             console.log('写入开始');
//         });
//         writeStream.on('finish', () => {
//             console.log('写入结束');
//         });
//         writeStream.end();
//     });
// };

