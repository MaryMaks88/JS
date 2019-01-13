// №3

function inArray(word, arr){
 
    for (var i = 0; i < arr.length; i++) {
        
       if(arr[i].includes([word])){
           return true
       }
        
    }
    return false
}

console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));

// №2

// a = 'var_text_hello';

// function charDel (str, el1, el2){
    
//     var f1 = new RegExp(el1, 'g');
//     var newStr = str.replace(f1, '');

//     var f2 = new RegExp(el2, 'g');
//     var res = newStr.replace(f2, 'TextHello');

//     return res;
// }

// result = charDel(a, '_', 'texthello');

// console.log(result);


