// Задание 1

// arr = [1, 2, 3, 4, 5];
// document.write(arr.join('_'));

// Задание 2

// Задание 3

// arr = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];
// console.log(arr.length);
// console.log(arr);

// arr.splice(4, 1);
// console.log(arr);

// if(arr.length % 2 == 0){
//     middle = arr.length / 2;
//     arr.splice(middle - 1 , 2);
// } else {
//     middle = Math.floor(arr.length / 2);
//     arr.splice(middle - 1, 3);
// }
// console.log(arr);

//-----------------------------

// Задание 1

// n = 15;
// m = 20;


// arr = new Array(m);

// for(i = 0; i < arr.length; i++){
//     arr[i] = new Array(m);
//     for(j = 0; j < arr[i].length; j++){
//         arr[i][j] = Math.floor(Math.random()*80 -42);
//         document.write(arr[i][j] + ' ');
//     }
//     document.write('<br />');
// }


// min = arr[0][0];
// imin = 0;
// jmin = 0;
// for(i = 0; i < n; i++){
//     for(j = 0; j < m; j++){
//         if( arr[i][j] < min){
//             min = arr[i][j];
//             imin = i;
//             jmin = j;
//         }
//     }
// }
// console.log('min is ' + min);

// buffer = arr[imin][jmin];
// arr[imin][jmin] = arr[0][0];
// arr[0][0] = buffer;

// Задание 2


arr = [];
arr.length = 10;

for(i = 0; i < arr.length; i++){
    arr[i]= Math.floor(Math.random()*10)
        document.write(arr[i] + ' ');
    }
    

min = arr[0];
for(i = 0; i < arr.length; i+=2){
    if(arr[i] < min){
        min = arr[i];
    }  
}
console.log('min is ' + min);

// Задание 3

sum = 0;
for(i = 0; i<ar.length; i++){
    sum+=arr[i];
}
av = sum / arr.length;





