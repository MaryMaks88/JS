// #1

// function fillArray(n, m){
//     var arr = new Array(n);
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = new Array(n);
//         for(var j = 0; j < arr[i].length; j++){
//             arr[i][j] = Math.floor(Math.random()*10);
//             document.write(arr[i][j] + ' ');
//         }
//         document.write('<br />');
//     }
//     return arr;
// }

// newarr = fillArray(5, 5);
// console.log(newarr);

// #2

// m = 5
//
// A = new Array(m);
// B = new Array(m);
//
// for ( var i = 0; i < A.length; i++){
//     A[i] = new Array(m)
//     A[i] = Math.floor(Math.random()*10);
// } console.log(A);
//
// for ( var i = 0; i < B.length; i++){
//     B[i] = new Array(m)
//     B[i] = Math.floor(Math.random()*10);
// } console.log(B);

// function compareArray(f1, f2) {
//
//     var sum1 = 0;
//     for ( var i = 0; i < f1.length; i++){
//         sum1 += f1[i];
//     }
//
//     var sum2 = 0;
//     for ( var i = 0; i < f2.length; i++){
//         sum2 += f2[i];
//     }
//
//     if (sum1 > sum2){
//         res = sum1;
//     } else{
//         res = sum2;
//     }
//     return res;
// }
//
// result = compareArray( A, B );
// console.log('max sum is ' + result);

// #3

// function doMath( x, znak , y ){
//     var res = x + znak + y;
//         if( znak == '+'){
//             res = x + y;
//             console.log(res);
//         }
//         if( znak == '-'){
//             res = x - y;
//             console.log(res);
//         }
//         if( znak == '*'){
//             res = x * y;
//             console.log(res);
//         }
//         if( znak == '/'){
//             res = x / y;
//             console.log(res);
//         }
//         if( znak == '%'){
//             res = x % y;
//             console.log(res);
//         }     
//     return znak;
// }

// result = doMath( 2, '+', 2);
// console.log(result);

// #4

// a = 'hello world';

// function charDel (str, el1, el2){
//     var f1 = new RegExp(el1, 'g');
//     var newStr = str.replace(f1, '');
//     var f2 = new RegExp(el2, 'g');
//     var res = newStr.replace(f2, '');
//     return res;
// }

// result = charDel(a, 'l', 'd');

// console.log(result);

// #5

// a = [3, 8, 10, 11, 13, 14];

// function Even(arr){
//     var b = [];
//     for(var i = 0; i < arr.length; i++){
    
//         if (arr[i] % 2 == 0){
//             b.push(arr[i]);
//         }
//     }
//     return b;
// }

// res = Even(a);
// console.log(res);