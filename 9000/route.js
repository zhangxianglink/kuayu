function route(pathname,handlers,req,res){
    if(typeof handlers[pathname] === 'function'){
        return handlers[pathname](req,res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("404 not found");
        res.end();
    }
}

exports.route = route;