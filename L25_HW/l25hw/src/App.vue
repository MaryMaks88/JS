<template>
  <div id="app">

    <FormGenerator :model="innerInfo" @my-event="changeL"></FormGenerator>
    <List :model="innerInfo"></List>
    {{innerInfo}}

  </div>
</template>

<script>

import FormGenerator from './components/FormGenerator.vue'
import List from './components/List.vue'


export default {
  name: 'app',
  
  data() {
    return {
      innerInfo: [],
      
    } 
  },
  components: {
    FormGenerator,
    List
  },
  methods:{
    changeL(value){
      this.innerInfo.push(value);
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
