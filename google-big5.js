var request = require('request');
var iconv = require('iconv-lite');

request({
    encoding: null,
    url: 'https://www.google.com.hk/search?num=30&q=google'
}, function(err, response, body) {
    if (!err) {
        var html = iconv.decode(body, 'Big5');
        console.log(html);
    }
})
