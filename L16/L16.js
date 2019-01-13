window.onload = function(){

// create menu
    list = [
        { title: 'title 1' },
        { title: 'title 2' },
        { title: 'title 3' },
        { title: 'title 4' },
        { title: 'title 5' },
        { title: 'title 6' },
        { title: 'title 7' }
    ]

    var ul = document.createElement('ul');
    

    var li;

    if(list.type == 'row'){
        ul.classList.add('itemPosition');
    } else{
        ul.classList.remove('itemPosition');
    }

    for(var i = 0; i < list.length; i++){
        li = document.createElement('li');
        li.innerHTML = list[i].title;

        li.classList.add('items');
        ul.appendChild(li);
    }

    ul.classList.add('list');
    

    document.body.appendChild(ul);



    // create action


    var list = document.querySelector('.list')

    function action(event){
        event.preventDefault();
        
        list.classList.add('animation');
    }

    function remove(){
        list.classList.remove('animation');
    }
    
    document.addEventListener('contextmenu', action);
    document.addEventListener('click', remove);

    console.dir(list);

}