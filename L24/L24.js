var blocks = new Vue({
    el:"#blocks",
    data:{
        blocks:{
            'b-1': true,
            'b-2': true,
            'b-3': true,
            'b-4': true,
            'b-5': true,
            'b-6': true,
            'b-7': true,
            count: 7
        },
        inner_color: 'color',       
    },

    methods:{
        
        randColor(){
           return 'background-color:' + 'rgb(' + 
           Math.floor(Math.random()*256)+', '
           +Math.floor(Math.random()*256)+', '
           +Math.floor(Math.random()*256)+')';
        }
        
    }

})


console.dir(document.querySelector(".range"));