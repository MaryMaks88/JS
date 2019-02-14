<template>
    <div class="pos" @click="addToCart(title, price)">
        <div class="color"  :style="{backgroundColor: src}"></div>
        <div>title:{{title}}</div>
        <div>price:{{price}}</div>
    </div>
</template>

<script>
export default {
    props:['src', 'title', 'price'],
    data(){
        return{
           
        }
    },
    methods:{
        addToCart(title, price){
            this.$emit('my-click', title, price)
        },
    }

}
</script>

<style>
.pos{
    display: inline-block;
    margin-left: 30px;
}
.color{
    width: 50px;
    height: 50px;
}
</style>
