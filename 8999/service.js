var http = require('http');
var url = require('url');

function start(route,handlers) {
    function onRequest(req,res){
        var pathname = url.parse(req.url).pathname;
        console.log(`---------------- 请求： ${pathname}`);
        route(pathname,handlers,req,res);
    }
    console.log(`http://qq.com:8999`);
    http.createServer(onRequest).listen(8999);
}

exports.start = start;