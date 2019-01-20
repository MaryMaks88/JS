// Lection 22 ------------------

var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {

//     if(this.readyState != 4) return;
//     console.log(this.responseText);
// };

var async = new Promise(function(resolve, reject){
    
})

xhr.open('GET', '/data.json');



xhr.send();

console.log(xhr);
var result = JSON.parse(xhr.responseText);
console.log(result);

