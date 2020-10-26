var fs = require('fs');
var url = require("url");

function index(req,res) {
    let html = fs.readFileSync('./qq/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
}

exports.index = index;


function qqjs(req,res) {
    let js = fs.readFileSync('./qq/qq.js');
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(js);
    res.end();
}

exports.qqjs = qqjs;

function getUser(req,res) {
    const json = fs.readFileSync('./qq/user.json');
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/json;charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "http://will.com:9000");
    res.write(json);
    res.end();
}

exports.getUser = getUser;

function friend(req,res){
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
    if(req.headers["referer"].indexOf("http://will.com:9000") === 0){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript;charset=utf-8");
        /* 返回数据处于js标签中，调用will.com中预定义好的 resolve(data) 进行处理
            window[random] = data => {
                resolve(data);
            }
        */
        const string = `window['{{xxx}}']({{data}}) `
        const data = fs.readFileSync("./qq/user.json").toString();
        const string2 = string.replace("{{data}}", data).replace('{{xxx}}', query.callback);
        res.write(string2);
        // res.write("console.log('xxxxxx')");
        res.end();
    }
}

exports.friend = friend;