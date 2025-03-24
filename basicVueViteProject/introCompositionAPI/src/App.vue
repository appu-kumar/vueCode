<script>
// setup is intialized very early of all the options like created, mounted, updated, unmounted  etc.  it is the pure javascript 
// It also groups all the methods and data in setup ok
import { ref } from "vue";
import DisplayUser from "./components/DisplayUser.vue";
export default {
  components:{
      DisplayUser
  },
  setup() {
    // ref always returns an object 
    const name = ref('Appu Kumar')     // if you write let name = 'Appu Kumar'  setup know this but vue.js does not know that is why ref is used so that vue.js can understand 
    function changeUserName(e) {
      console.log('hi')
      name.value = e.target.value;
    }

    // return is compulsory
    return {
      name,
      changeUserName,
    }
  }

}


</script>

<template>

  <p>Hello world</p>
  <input type="text" v-on:change="changeUserName" v-model="name">
  <p>{{ name}}</p>
  <DisplayUser  />

</template>