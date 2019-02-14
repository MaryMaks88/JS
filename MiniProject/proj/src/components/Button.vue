<template>
    <div>
        <button class="button" @click="action()">Filter</button>
    </div>
</template>

<script>
export default {
    props:{
        action: {
            default: ()=>{},
            type: Function
            }
        
    },
    

}
</script>

<style>
.button{
    padding: 5px;
    border:2px solid blueviolet;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
}
</style>
