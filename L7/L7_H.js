// №1

// function centralE(m){
//     var newM = [];
//     var c = m.length;

//     if (c % 2 == 0) {
//         newM.push( m[c/2 - 1], m[c/2] );
//     } else {
//         newM.push( m[(c - 1)/2] );
//     }

//     return newM
// }

// console.log( centralE( [2,4,6,7,8,9,3] ) );

//-------------------------

// №2

// function doStuff(a, b, stuff) {
    
//     return func(a, b);
// }  

// var res1 = doStuff(2, 3, sum);
// var res2 = doStuff(2, 3, div);
// var res3 = doStuff(2, 3, mul);
// var res4 = doStuff(2, 3, power);

// function sum(x, y) {
//     return x + y;
// }

// function div(x, y) {
//     return x / y;
// }

// function mul(x, y) {
//     return x * y;
// }

// function power(x, y) {
//     return Math.pow( x, y );
// }

// console.log ('sum is ' + res1);
// console.log ('div is ' + res2);
// console.log ('mul is ' + res3);
// console.log ('power is ' + res4);


//-----------------------------


// function doStuff(x, y, stuff) {
    
//     console.log(stuff);

//     for( var key in stuff){
//         console.log(key, stuff[key](x, y));
//     }

// }  

// var stuff = {

//     sum: function sum(x, y) {
//             return x + y;},

//     Div: function div(x, y) {
//             return x / y;},

//     mul: function mul(x, y) {
//             return x * y;}
// }

// doStuff(2, 3, stuff);

//------------------------

var arr = [1, 2, 3, 4, 5];

arr.myPush = function(item){

    this[this.length] = item;

    return this.length;
}

console.log (arr.myPush(6));

console.log(arr);

arr.myPush(11, 12);
console.log(arr);