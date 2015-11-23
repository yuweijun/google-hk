var http = require('http');

http.createServer(function(request, response) {
    var ip = request.connection.remoteAddress;;
    console.log(ip + ": " + request.method + " " + request.url);
    console.log(JSON.stringify(request.headers, null, 4));

    var proxy = http.request(request.url);
    proxy.on('response', function(res) {
        res.on('data', function(chunk) {
            response.write(chunk, 'binary');
        });
        res.on('error', function(err) {
            console.log('proxy error: ' + err.message);
            response.end();
        });
        res.on('end', function() {
            response.end();
        });
        response.writeHead(res.statusCode, res.headers);
    });

    request.on('data', function(chunk) {
        proxy.write(chunk, 'binary');
    });

    request.on('error', function(err) {
        console.log('request error' + err.message);
        proxy.end();
    });

    request.on('end', function() {
        proxy.end();
    });
}).listen(8080);
console.log("proxy server listen on 8080.");
