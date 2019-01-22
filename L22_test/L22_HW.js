//-------------------
let data = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState != 4) return;
            resolve(this.responseText);
    }

    xhr.open('GET', '/data.json');

    xhr.send();

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
//             resolve(this.responseText);
//     }

//     xhr.open('GET', '/data1.json');

//     xhr.send();

// });

// let data2 = new Promise(function(resolve, reject){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//             resolve(this.responseText);
//     }

//     xhr.open('GET', '/data2.json');

//     xhr.send();
// });

// Promise
//     .all([data1, data2])
//     .then(function(params){
//         for(var i = 0; i < params.length; i++){
//             var newArr1 = JSON.parse(params[0])
//             var newArr2 = JSON.parse(params[1])
               
//         }   
//         console.log(newArr1.arr1, newArr2.arr2);
//         var res = newArr1.arr1.concat(newArr2.arr2);
//         console.log(res);
//                 });