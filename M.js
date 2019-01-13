// В одномерном массиве произвести такую замену: 1 элемент поменять с 2 3 элемент 
//поменять с 4 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5



// arr = [ 2, 4, 6, 7, 4, 3, 9, 1, 5];
// console.log(arr);

// for(i = 0; i < arr.length; i+=2){
//     change = arr[i];
//     arr[i] = arr[0];
//     arr[0] = change;
    
// }
// console.log(arr);



//В двумерном массиве A размером n на m. Заполнить случайными числами.

//  *Найти ряд, где сумма элементов наименьшая
//  *Найти ряд, где сумма элементов найбольшая
//  *Поменять ряды местами (1 и 2 пункт)

n = 5;
m = 5;
arr = new Array(n)
for(i = 0; i < arr.length; i++){
    arr[i] = new Array(m);
}
console.log(arr);

for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
        arr[i][j] = Math.floor(Math.random()*10);
        document.write(arr[i][j] + ' ');
    }
    document.write('<br />');
}

sum = 0;
for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
    console.log(sum);
}






