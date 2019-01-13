window.onload = function(){


    data = { 
        name: 'menu', 
        type: 'column', 
        items: [
            {
                title: 'title 1',
                handler: 'ActionAdd'
            },
            {
                title: 'title 2',
                handler: 'ActionSaveAs',
                items: [
                    { title: 'inner 1' }, { title: 'inner 2' }
                ]
            },
            {
                title: 'title 3',
                handler: 'ActionExit'
            }
        ]
    }

    var ul = document.createElement('ul');
    

    var li;

    if(data.type == 'row'){
        ul.classList.add('itemPosition');
    } else{
        ul.classList.remove('itemPosition');
    }

    for(var i = 0; i < data.items.length; i++){
        li = document.createElement('li');
        li.innerHTML = data.items[i].title;

        if(data.items[i].items){
            var ul2 = document.createElement('ul');
            var li2;
            for(var j = 0; j < data.items[i].items.length; j++){
                li2 = document.createElement('li');
                li2.innerHTML = data.items[i].items[j].title;
                li2.classList.add('items');
                ul2.classList.add('list');
                ul2.classList.add('hiddenList');
                ul2.appendChild(li2);
            }
            
            li.appendChild(ul2)
        }

        li.classList.add('items');
        ul.appendChild(li);
    }

    ul.classList.add('list');
    

    document.body.appendChild(ul);

}