

<script>
  // This is option
  export default {
                    data(){
                        return {
                            actors:['ak','sk','shk','amitabh','kk-menon','bajpayee','rajneekant'],
                            favActors:[],
                        }
                    },
                    methods:{
                        getFavActor(actor){
                            this.favActors.push(actor);
                        }
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

         <p v-if="favActors.length === 0">There are no fav actors</p>
         <div v-else>
            Fav actors
         <ul>
               <li v-for="(favActor,idx) in favActors" :key="idx">{{favActor}}</li>
         </ul>
         </div>
</template>




