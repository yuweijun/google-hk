#!/usr/bin/env node

var http = require("http");
var httpClient = require("request");
var url = require("url");

var server = http.createServer(function(request, response) {
    var google = "https://www.google.com.hk";
    var u = url.parse(request.url, true);
    var pathname = u.pathname;
    var headers = {
        "user-agent": request.headers["user-agent"]
    };

    if (/^\/url/.test(pathname)) {
        response.writeHead(302, {
            "location": u.query.q
        });
        response.end();
    } else {
        console.log(request.url);
        var options = {
            url: google + request.url,
            encoding: null,
            headers: headers
        };
        var handler = function(err, res, body) {
            if (err) {
                response.write("http client error: " + err.message);
            } else {
		response.writeHead(res.statusCode, res.headers);
                if (/html/i.test(request.headers.accept)) {
                    console.log(request.headers);
                    // response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
                }
                response.write(body);
            }
            response.end();
        }

        httpClient(options, handler);
    }
});

server.listen(8000);
console.log("google proxy server is listening");
