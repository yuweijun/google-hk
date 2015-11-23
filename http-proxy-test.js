var request = require('request');

process.argv.forEach(function(value, index, array) {
    console.log(index + ': ' + value);
});

var url = process.argv.pop();
if (!/^http/i.test(url)) {
    url = 'http://www.4e00.com';
}

request({url: url, proxy: 'http://localhost:8080'}, function(err, response, body) {
    if (err) {
        console.log('request err: ' + err.message);
    } else if (response.statusCode == 200) {
        console.log(body.length);
    } else {
        console.log(JSON.stringify(response, null, 4));
    }
});

