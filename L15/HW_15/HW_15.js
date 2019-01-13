window.onload = function (){
    
    var block = document.querySelector('.block')
    console.dir(block);


        function space(event){

            if(event.keyCode == 0 || event.keyCode == 32){
            block.classList.add('space');
            }
            function removeClass(){
                block.classList.remove('space');  
            }
    
        var timeout = setTimeout(removeClass, 1000)
        }

    document.addEventListener('keypress', space)


    function move(event){

        var cs = window.getComputedStyle(block);
        var top = parseInt(cs.marginTop);
        var left = parseInt(cs.marginLeft);

        if(event.keyCode == 38){ // up
            block.style.marginTop = top - 10 + "px";
        } 
        else if(event.keyCode == 40){ // down
            block.style.marginTop = top + 10 + "px";
        } 
        else if(event.keyCode == 37){ // left
            block.style.marginLeft = left - 10 + "px";
        } 
        else if(event.keyCode == 39){ // right
            block.style.marginLeft = left + 10 + "px";
        } 
        
    }
    
    document.addEventListener('keydown', move)

    function sitDown(event){

        if(event.keyCode == 17){ // sit down
            block.classList.add('sitDown');
        }
        function removeClass(){
            block.classList.remove('sitDown');  
        }
        document.addEventListener('keyup', removeClass)
    } 
    

    document.addEventListener('keydown', sitDown)
    

}