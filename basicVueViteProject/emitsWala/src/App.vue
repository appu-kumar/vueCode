<script>
   import ListOfColors from './components/ListOfColors.vue'
   import ButtonBase from './components/button-base.vue'
   export default {
     components:{ListOfColors,ButtonBase},
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
  <!-- <Buttonbase text='small button' icon='icons'>LeftArrow text</Buttonbase>   <Inside's content of  this component as it is passed to the child's slot tag     -->
  <ButtonBase> reset </ButtonBase>
  <ButtonBase> cancel  </ButtonBase>
  <ButtonBase> Reset   </ButtonBase>
  <ButtonBase> clear  </ButtonBase>
 
</template>


