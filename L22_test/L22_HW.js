//-------------------
let data = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState != 4) return;
            resolve(this.responseText);
    }

    xhr.open('GET', '/data.json');

    

});
data
    .then(resp => {
        result = JSON.parse(resp);
        
            if(isNaN(result.age)){
                console.log('error age') 
                
            } else{
                console.log(result.age)
            };
            
            if (/\d/.test(result.name)) {
            console.log('error name')
                
            } else {
            console.log(result.name)
            };
        }      
    )
    .then(result =>{
        xhr.send('POST', '/registration', result);
    })


// let result;

// doAjax('POST', '/data.json', "HELLO")
//     .then(resp => {
//         result = JSON.parse(resp);
//         if(isNaN(result.age)){
//             console.log('error age')
//         } else{
//             console.log(result.age)
//         };
        
//         if (/\d/.test(result.name)) {
//         console.log('error name')
//         } else {
//         console.log(result.name)
//         };
//         console.log(result);
//     })

// function doAjax(method, path, body){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function(){
//             if(this.readyState != 4 || this.status != 200) return;

//             resolve(this.responseText);
//         }
//         xhr.open(method, path);
//         xhr.send(body);
//     })
// }

//------------------------

// let data1 = new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//         resolve(JSON.parse(this.responseText));
//     }

//     xhr.open('GET', '/data1.json');

//     xhr.send();

// });

// let data2 = new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//         resolve(JSON.parse(this.responseText));
//     }

//     xhr.open('GET', '/data2.json');

//     xhr.send();
// });

// Promise
//     .all([data1, data2])
//     .then(function(params){
//         console.log(params);
//         var res = params[0].concat(params[1]);
//         console.log(res);
//         });