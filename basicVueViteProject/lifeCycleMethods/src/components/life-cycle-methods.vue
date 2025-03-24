<script>
export default {
  async created() {
    // life cycle method
    // do not call an API that takes lots of time
    // call API for static data like dropdown menu etc .
  },
  data() {
    // initialize data here this is not lifecycle method ok
    console.log('data')
    return {
      todos: {},
    }
  },
  methods: {
    async fetchTodos() {
      // these methods are called when user manually call this okay lifecycle methods automatically called okay so this not lifecycle mehtod
      const res = await fetch('https://pokeapi.co/api/v2/type/3')
      const data = await res.json()
      this.todos = data
    },
  },
  async mounted() {
    // life cycle method
    await this.fetchTodos() // call here do not call longer api in created okay
    console.log('came',this.todos);
  },
}
</script>

<template>
  <p>component</p>
</template>
