//------------------
window.onload = function (){
    var elemInp = document.querySelectorAll('.inp');
    console.log(elemInp);
    

    for(var i = 0; i < elemInp.length; i++){
        elemInp[i].style.backgroundColor = "#abbecd";
        console.log(elemInp[i]);

    }
    
    var elemArea = document.querySelectorAll('.textA');
    console.log(elemArea);
    elemArea.value = 'so hello';
    console.log(elemArea.value);

    
}