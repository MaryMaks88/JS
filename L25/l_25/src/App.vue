<template>
  <div id="app">
    
    <Header></Header>
    
      <ListContainer></ListContainer>
      <ContactContainer></ContactContainer>
  
    

  </div>
</template>

<script>


import Header from './components/header.vue'
import ListContainer from './components/ListContainer.vue'
import ContactContainer from './components/ContactContainer.vue'

export default {
  name: 'app',
  components: {
    
    Header,
    ListContainer,
    ContactContainer
   
  }
}
</script>

<style>

</style>
