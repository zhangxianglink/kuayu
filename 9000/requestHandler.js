var fs = require('fs');

function index(req,res) {
    let html = fs.readFileSync('./will/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
}

exports.index = index;


function willjs(req,res) {
    let js = fs.readFileSync('./will/will.js');
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(js);
    res.end();
}

exports.will = willjs;


