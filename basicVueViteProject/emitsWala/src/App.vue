<script>
   import ListOfColors from './components/ListOfColors.vue'
   export default {
     components:{ListOfColors},
     data(){
       return {
         favColorList:[],
       }
     },
     methods:{
      addFavColor(payload){
      this.favColorList.push(payload);
      }
     }
     
   }
</script>

<template>
  
  <p> Hello emit  </p>
  <ListOfColors v-on:fav-color="addFavColor" />   <!-- Custom event -->
  <ul>
   <li v-for="(favColor,idx) in favColorList" v-bind:key="idx">{{favColor}} </li>
  </ul>
</template>


