<template>
    <div class="list" >
        <ol>
            <li v-for="(item, index) in innerInfo" :key="index" >
                {{ item }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
        props:['model'],
        data(){
            return {
               innerInfo: this.model,
            }
        }
    }


</script>

<style>
.list{
    border: 2px solid black;
    padding: 15px;
    width: 200px;
    margin-top: 15px;
}

</style>
