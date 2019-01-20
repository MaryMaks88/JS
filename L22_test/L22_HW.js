
let result;

doAjax('POST', '/data.json', "HELLO")
    .then(resp => {
        result = JSON.parse(resp);
        console.log(result);
    })



function doAjax(method, path, body){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(this.readyState != 4 || this.status != 200) return;

            resolve(this.responseText);
        }
        xhr.open(method, path);
        xhr.send(body);
    })
}