<template>
    <div class="contact">This is Contact List
        <input type="text" v-model="text"/>
    </div>
</template>

<script>
export default {
    props: ['value'],
}
</script>

<style>
    .contact {
        border: 2px solid blue;
        
        height: 200px;
        display: inline-block;
    }
</style>
