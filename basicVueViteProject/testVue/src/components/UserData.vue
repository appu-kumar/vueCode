<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <h1>User Details</h1>
    <p>userName:: {{ userData.name }}</p>
    <p>user's Fav food::  {{ userData.favFood }}</p>
  </div>
</template>
