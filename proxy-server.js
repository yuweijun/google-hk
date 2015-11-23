#! /usr/bin/env node

var http = require('http');
var url = require('url');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var port = 8080;

var proxyServer = http.createServer(function(req, res) {
    var u = url.parse(req.url, true);
    var target = u.pathname.replace('/', '');
	console.info(target);
    console.log(JSON.stringify(req.headers, true, 2));

    // Dynamic Proxying with custom logic
    if (target === 'forbidden') {
        return res.end('forbidden request.');
    }

    proxy.web(req, res, {
        target: 'http://localhost:' + target
    });
}).listen(port);

console.log("proxy server listen on " + port);
