<template>
    <div>
        <button class="cart" 
            @mouseover="onMouse" 
            @click="orderClick" 
            @mouseout="offMouse"
            
            >
            {{ cartText }} 

            {{ `(${cartList.length})` }}
                
        </button>
        
    </div>
</template>

<script>
export default {
    props:['prod'],
    data(){
        
        return {
            cartList:[],
            cartText:"Cart"
        }
    },

    methods:{
        onMouse(ev){
            this.cartText = "Order now"
            console.log(ev)
        },
        orderClick(ev){
            this.$emit('orderedL', this.cartList)
            console.log(this.cartList)
        },
        offMouse(ev){
            this.cartText = "Cart"
        }
        
    },

    watch:{
        prod(p1,p2){
            if(!p1.price) return;
            this.cartList.push(p1);
            // console.log(this.cartList)
        }
        
    }


}
</script>

<style>
.cart{
    padding: 5px;
    border:2px solid blueviolet;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
}

</style>
