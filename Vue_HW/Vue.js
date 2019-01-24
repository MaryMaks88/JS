var taskManager = new Vue({
    el: '#app',
    data: {
        margin_l: 'margin-left: 25px;',
        display: 'display: inline-block;',
        lists: {
            list1: [
                { key: 'Potato' },
                { key: 'Tomato' },
                { key: 'Carrot' },
                { key: 'Cabbage' },
                { key: 'Pepper' }
            ],
    
            list2: [
                { key: 'cat' },
                { key: 'dog' },
                { key: 'hamster' },
                { key: 'parrot' },
                { key: 'horse' }
            ]
        }
        
    },
    methods: {
        Click1(){
            var lastEl = this.lists.list1.pop();
            this.lists.list2.unshift(lastEl);
        },
        Click2(){
            var lastEl = this.lists.list2.pop();
            this.lists.list1.unshift(lastEl);
        }
    }
})