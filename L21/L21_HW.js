//-------------------

window.onload = function(){

    var input = document.querySelector('.input');
    var innerText = [];

    var inputTimeout = new Promise (function(resolve, reject){

        function enterText(event){

            // setTimeout(input.disabled = false, 1000);
            
            if (event.keyCode == 13){
                innerText.push(input.value);
                input.value = ''; 
                // input.disabled = true;
            }
  
        }

        document.addEventListener('keypress', enterText)

        setTimeout(() => { 
           
            if(innerText.length == 0){
                reject();         
            }

            resolve();
            
        }, 10000)

    })
    
        .then(
            () => {console.log(innerText);},
            () => {console.log('Array is empty');}
    )
          
}