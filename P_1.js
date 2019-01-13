
// Задание 1

A = [];
B = [];
A.length = 8;

// диапазон от 5 до 15

for (i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*5 + 11); 
    item = A[i];

    if (item != 1){
      for( j = 2; j * j < item; j++){
        if(item % j == 1){
          B.push(+item);
          document.write(item + "<br />");
        }
      }
    }
}

console.log(A);

min = A[0];
max = min;
for (i = 1; i < A.length; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
}
console.log('min number is ' + min);
console.log('max number is ' + max);


// Math.max.apply(null, A)
// console.log('max number is ' + Math.max.apply(null, A));
// Math.min.apply(null, A)
// console.log('min number is ' + Math.min.apply(null, A));

console.log(B);

min = B[0];
max = min;
for (i = 1; i < B.length; i++) {
    if (B[i] > max) max = B[i];
    if (B[i] < min) min = B[i];
}
console.log('min number is ' + min);
console.log('max number is ' + max);

// Math.max.apply(null, B)
// console.log('max number is ' + Math.max.apply(null, B));
// Math.min.apply(null, B)
// console.log('min number is ' + Math.min.apply(null, B));


    
// 1

// arr = [1, 3, 5, 6 ,8];

// function getArray(){
//   document.write(arr.join(''));
// }

// getArray();

// 2
// Написать функцию заполнения одномерного массива с указанием длины.
// Запрос за длину массива и диапазон произвести внутри функции



function createArray(){
  arr = [];
  m = +prompt('Ввести длину');
  min = +prompt('Ввести значение min');
  max = +prompt('Ввести значение max');

  for(i = 0; i < m; i++){
        arr[i] = Math.floor(Math.random()*(max - min) + min );
    }
    return arr;
}

newarr = createArray();
console.log(newarr);