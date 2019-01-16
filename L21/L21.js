console.log('L21');

// var testPr = new Promise((resolve, reject) => {
//     console.log('1');

//     var randomVar = Math.floor(Math.random()*10 - 5 );
//     setTimeout(() => {
//         if (randomVar >= 0) { resolve() } 
//         reject();
//     }, 1000);
// })

//     .then(
//         () => {console.log('2')}, 
//         () => {console.log('3')}
//         )
//     .then(
//         () => {console.log('4') 
//                return Promise.reject();
//             },
//         () => {console.log('5')},
//         )
//     .then(
//         () => {console.log('6')},
//         () => {console.log('7')},
//         )

//------------------------------------------