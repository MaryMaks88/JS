

// function newm(){
//     var newArr =[];
//     for( var i = 0; i < arguments.length; i++ ){
    
//     newArr = newArr.concat(arguments[i]);
//     }
//     return newArr
// }

// console.log(newm([1,2,2], [3,6,3], [3,7,9]));

//------------------

function factory(a){
    var i = 0;

   return function step(){
        return a[i++];
    }
}

var step = factory([2, 8, 9, 2, 4]);


console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

//--------------------------


