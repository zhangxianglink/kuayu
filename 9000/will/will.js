function ajax(method,url){
    return new Promise((resolve,rejects) => {
        const httpRequest = new XMLHttpRequest();
        httpRequest.open(method,url);
        httpRequest.onreadystatechange = () => {
            if(httpRequest.status === 200 && httpRequest.readyState === 4){
                resolve(httpRequest.response);
            }else{
                rejects(httpRequest);
            }
    };
        httpRequest.send();
});
}

// cors 对方解决跨域问题
ajax('GET','http://qq.com:8999/user.json').then(response =>{
    console.log("请求user.json");
    console.log(response);
}).catch(e => {
    console.log(e);
});

// jsonp 利用js传递数据
function jsonp(url){
    return new Promise((resolve,rejects) => {
        // 1
        const random = "willRequest" + Math.random();
        // 1 , 2 等待数据进行回调
        window[random] = data => {
            resolve(data);
        }
        // 1
        const script = document.createElement('script');
        script.src = `${url}?callback=${random}`;
        // 3
        script.onload = () => {
            script.remove();
        };
        // 3
        script.onerror = () =>{
            rejects();
        };
        // 2 
        document.body.appendChild(script);
    });
}

jsonp('http://qq.com:8999/friend.js').then(data =>{
    console.log(data);
}).catch(e => {
    console.log('jsonp error' + e);
});