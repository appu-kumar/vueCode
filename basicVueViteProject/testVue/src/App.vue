<script>
// This is option
import ActorList from './components/ActorList.vue'
import UserData from './components/UserData.vue'

export default {
  components: { ActorList,UserData }, // registering the importing components
  data() {
    return {
      actors: ['ak', 'sk', 'shk', 'amitabh', 'kk-menon', 'bajpayee', 'rajneekant'],
      userData:{name:"Appu Kumar",favFood:"chaumin",age:23,gender:"male"},
      favActors: [],
    }
  },
  methods: {
    getFavActor(actor) {
      this.favActors.push(actor)
    },
    changeUserName(){
      this.userData.name="Rohit sharma";
      this.userData.favFood="Daal Chawal";
    },
  },
}
</script>

<template>
  <UserData  v-bind:userData="userData"/>
  <ActorList v-bind:actors="actors" v-bind:getFavActor="getFavActor"  v-on:change-userName="changeUserName"/>
  <p v-if="favActors.length === 0">There are no fav actors</p>
  <div v-else>
    Fav actors
    <ul>
      <li v-for="(favActor, idx) in favActors" :key="idx">{{ favActor }}</li>
    </ul>
  </div>
</template>
