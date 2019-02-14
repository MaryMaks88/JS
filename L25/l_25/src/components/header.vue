<template>
    
    <div class="header">
        <button class="buttons" v-for="(item, index) in list" :key="index">
            
            {{ item }}
            
        </button>
    </div>
    
</template>

<script>
export default {
    data(){
    return {

      list: [
        'Red', 'Blue'
      ]

    }
  },
}
</script>

<style>
    .header {
        border: 2px solid red;
        height: 100px;
    }

    .buttons{
        border: 2px solid black;
        padding: 10px;
        cursor: pointer;

    }
</style>
