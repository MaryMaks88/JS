let list = [ 
    { value: 10 }, 
    { value: 12 }, 
    { value: 3 }
];

let newList_p1 = list.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
});

console.log(newList_p1);

let newList_p2 = list.filter(function(item){

    if(item.value !== 1 && item.value % 2 == 1){
        
        return item.value
        
    }
   
});

console.log(newList_p2);

let goods = [
    { title: 'Title1', size: 4, img: 'url' }, 
    { title: 'Title2', size: 35, img: 'url' }, 
    { title: 'Title3', size: 22, img: 'url' }
];


goods.forEach(function(item){
    document.write(`
    title: ${item.title} <br/> 
    size: ${item.size} <br/> 
    img: ${item.img} <br/> 
    <hr/>`)
});


// function ViewController(goods){

// this.goods = goods;

// };

// var controller = new ViewController(goods);
