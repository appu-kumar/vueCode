<script setup>
import { useCounter } from '../composables/counter.js'

const { state, increment, decrement } = useCounter();

</script>

<template>
  <p>counter:: {{ state.count }}</p>
  <button v-on:click="increment">increment</button>
  <button v-on:click="decrement">decrement</button>
</template>
