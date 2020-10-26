const xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.open('GET','./user.json');
xmlHttpRequest.onreadystatechange = () => {
    if(xmlHttpRequest.status === 200 && xmlHttpRequest.readyState === 4){
        console.log(xmlHttpRequest.response);
    }
}
xmlHttpRequest.send();
