<script>
export default {
  //props: ['actors','getFavActor'],   // one of the way but let's write according to company standard
  props:{
     actors:{
       type:Array,
       required:true,
     },
     getFavActor:{
       type:Function,
       required:true,
     }
  },
  emits:['change-userName'],
  data: () => ({
  
  }),
  
  // no use I am just writing to revise my concept
  methods: {
   
  },
  computed:{

  },
  watch:{

  }

}
</script>


<template>

         <ul>
              <li v-for="(actor,idx) in actors" :key="idx">
                 <p>{{actor}} </p>
                <button v-on:click="getFavActor(actor)">Add Fav Actor</button>
              </li>
         </ul>
       <button v-on:click="$emit('change-userName'); console.log('emitting')">change username</button>    <!-- This event is bubbled to parent and then corrosponding this event one method will be callled means sahi hai yaha trigger karo aur iss component ke kisi parent me method call kar iss event ke corrosponding  -->


</template>
