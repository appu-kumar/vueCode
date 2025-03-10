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

</template>
