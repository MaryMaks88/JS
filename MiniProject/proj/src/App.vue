<template>
  <div id="app" >
  
    <Logo></Logo>
    
    <hr/>
    <Prod 
    v-for="(item, index) in list" 
    :key="index"
    :src="item.src"
    :title="item.title"
    :price="item.price"
    @my-click="handler"
    >
    </Prod>

    
 <!-- :action="sortUp" -->
    <FButton>
    </FButton>

    <hr/>
    <Footer>
     
    </Footer>
    <Cart :prod="select.transferVal" v-model="cartList" @orderedL="createList"></Cart>
    <Popup :newList="cartList"></Popup>

    <!-- v-for="(item, index) in cartList" 
    :key="index"
    :title="item.title"
    :price="item.price"
    @orderedList="handler"
     -->
    
    
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Prod from './components/Prod.vue'
import FButton from './components/Button.vue'
import Cart from './components/Cart.vue'
import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'
import File from './data.json'

export default {
  name: 'app',
  components: {
    Logo,
    Prod,
    FButton,
    Cart,
    Footer,
    Popup
  },
  
  data() {
    return{
      list: File.list,
      value:"",
      cartList: [],
      select:{
        transferVal: null
      }
      
    }
  },

  methods:{

    handler(title, price){
      this.select.transferVal = {
        title,
        price
      }
    },
    
    createList(value){
      this.cartList.push(value),
      console.log(this.cartList)

    },
    
    // sortUp(){
    //   this.list.sort(function(a,b){
    //     return (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0) // up
    //   })
    // },
    // sortDown(){
    //   this.list.sort(function(a,b){
    //     return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0) // down
        
    //   })
    // },
    
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  
}
</style>
