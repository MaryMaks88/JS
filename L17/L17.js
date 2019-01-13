window.onload = function(){

    var blocks = document.querySelectorAll('.block');

    console.log(blocks)

    for(var j = 0; j < blocks.length; j++){
        var block = blocks[j];
        var button = block.querySelector('.button');
        var res = block.querySelector('.res');
        
        var counter = localStorage.counter || 0;
        res.innerHTML = counter;

        button.addEventListener('click', function(){
            res.innerHTML = ++counter;
            localStorage.counter = counter;
        });
    }
    

}