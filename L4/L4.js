
// Задание 1

// arr = [];
// arr.length = +prompt();
// console.log(arr);

// for(i = 0; i < arr.length; i++){
//    arr[i] = Math.floor(Math.random()*66 - 20);
//    console.log(arr[i]);
//       if( (arr[i] > 9 && arr[i] < 100) || (arr[i] < - 9 && arr[i] > -100)){
//       document.write('<p>' + arr[i] + '</p>');
//       }
// }


// Задание 2

A = [];
B = [];
A.length = +prompt('A');
B.length = +prompt('B');
console.log(A);
console.log(B);

for ( i = 0; i < A.length; i++){
   A[i] = Math.floor(Math.random()*A.length);
   console.log(A[i]);
}

for ( i = 0; i < B.length; i++){
   B[i] = Math.floor(Math.random()*B.length);
   console.log(B[i]);
        if( A[i] == B[i]){
          document.write('<p>' + A[i] + '</p>');
          
      }
    
}

