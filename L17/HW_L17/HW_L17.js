window.onload = function(){
    var blocks = document.querySelectorAll('.block');
    var clear = document.querySelector('.clear');
    var set = document.querySelector('.set');

    for(var i = 0; i < blocks.length; i++){
        var block = blocks[i];
        var span = block.querySelector('span');
        var button = block.querySelector('.click');
        
        button.dataset.id = 'block-'+i;

        var counter = localStorage['block-'+i] || 0;
        span.innerHTML = counter;

        button.addEventListener('click', onClick)

        
        
    }


    function clearAll(){
        for(var i = 0; i < blocks.length; i++){
        button.dataset.id = 'block-'+i;
        var counter = localStorage.setItem(['block-'+i], 0);
        span.innerHTML = counter;
        }
    }

    function setCount(){
        var setID = prompt('Blocks ID');
        var setCount = prompt('Set count');
        

        for (var i = 0; i < blocks.length; i++){
            if (setID == i){
                span.innerHTML = setCount;
                localStorage.setItem(['block-'+i], setCount);
            }
        }

        console.log(setID);
        console.log(setCount);
    }

    clear.addEventListener('click', clearAll)
    set.addEventListener('click', setCount)
}

function onClick(){
    var counter = localStorage[this.dataset.id] || 0;
    this.previousElementSibling.innerHTML = ++counter;
    localStorage[this.dataset.id]  = counter;

    var blocks = document.querySelectorAll('.block');
    for(var i = 0; i < blocks.length; i++){
    var block = blocks[i];
    if( counter < 50 ){
        block.style.backgroundColor = 'rgb(' + getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
    } else {
        block.style.backgroundColor = 'rgb(256, 256, 256)';
    }
}
    
}

function getR(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}