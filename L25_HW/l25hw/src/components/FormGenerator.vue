<template>
    <div class="generator" >
        <input type="text"  @keypress="onPush" v-model="innerInfo" />
        
    </div>
</template>

<script>
export default {
    props:['model'],
    
    data() {
        return {
            innerInfo: this.model
        }
    },

    methods: {
       
        onPush(ev){
            if(event.keyCode == 13){
                this.$emit('my-event', ev.target.value);
            }
        }
    }

}
</script>

<style>
.generator{
    border: 2px solid black;
    padding: 15px;
    width: 200px;
}

</style>
