var request = require("request");

var headers = {
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"
};

var options = {
    url: "https://www.google.com.hk/search?num=30&safe=active&q=nodejs",
    headers: headers
};

var handler = function(err, res, body) {
    console.log(body);
}

request(options, handler);
