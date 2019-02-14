<template>
    <div class="popup" style="visibility: visible" >
    {{ orderedListText }}
        <ol>
            <li v-for="(item, index) in cartList" :key="index" >
                {{ item }}
            </li>
        </ol>
        
    </div>
</template>

<script>
export default {
    props:['newList'],
    data(){
        
        return{
            orderedListText:"Orders list",
            cartList: this.newList
            
        }
    }

}
</script>

<style>
.popup{
    
    border: 2px solid black;
}

</style>
