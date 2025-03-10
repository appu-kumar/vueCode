<script>
// This is option
import ActorList from './components/ActorList.vue'

export default {
  components: { ActorList }, // registering the importing components
  data() {
    return {
      actors: ['ak', 'sk', 'shk', 'amitabh', 'kk-menon', 'bajpayee', 'rajneekant'],
      favActors: [],
    }
  },
  methods: {
    getFavActor(actor) {
      this.favActors.push(actor)
    },
  },
}
</script>

<template>
  <ActorList v-bind:actors="actors" v-bind:getFavActor="getFavActor" />
  <p v-if="favActors.length === 0">There are no fav actors</p>
  <div v-else>
    Fav actors
    <ul>
      <li v-for="(favActor, idx) in favActors" :key="idx">{{ favActor }}</li>
    </ul>
  </div>
</template>
