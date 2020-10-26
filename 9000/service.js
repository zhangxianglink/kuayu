var http = require('http');
var url = require('url');

function start(route,handlers) {
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;
        console.log(`---------------- 请求： ${pathname}`);
        route(pathname,handlers,req,res);
    }
    console.log(`http://will.com:9000`);
    http.createServer(onRequest).listen(9000);
}

exports.start = start;