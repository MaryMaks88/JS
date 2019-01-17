// Lection -------------------

window.onload = function(){

    var input = document.querySelector('.input');
    var innerText = [];

    new Promise (function(resolve, reject){

        function enterText(event){

            if (event.keyCode == 13){
                innerText.push(input.value);
                input.value = '';
                input.disabled = true;    
            }
            setTimeout(() => {
                input.disabled = false;
            }, 2000);
        }

        document.addEventListener('keypress', enterText);

        setTimeout(() => { 
            if(innerText.length == 0){ reject(); }
            resolve();}, 10000)
        }
    )
        .then(
            () => {console.log(innerText);},
            () => {console.log('Array is empty');}
        )        
}

// Practice -------------------

// var prom1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         var number = Math.floor(Math.random()*100 + 0 );
//         resolve('#1: ' + number);
//     }, 1000);
// });

// var prom2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         var number = Math.floor(Math.random()*100 + 0 );
//         resolve('#2: ' + number);
//     }, 2000);
// });

// var prom3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         var number = Math.floor(Math.random()*100 + 0 );
//         resolve('#3: ' + number);
//     }, 3000);
// });

// function runAfter([func1, func2, func3]){
//     func1();
//     func2();
//     func3();
// }

// Promise
//     .all([prom1, prom2, prom3])
//         .then(function(params){
//             console.log(params);
//         })
//         .then(function(){
//             runAfter([
//                 () => {console.log('first one')},
//                 () => {console.log('second one')},
//                 () => {console.log('third one')}
//             ]    
//             );
//         })