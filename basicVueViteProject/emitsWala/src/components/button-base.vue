<!-- eslint-disable vue/require-prop-type-constructor -->
<script>
export default {
  props: {
    text: { type: String, required: true },
    icon: { type: String, required: true },
  },
}
</script>

<template>
  <!-- <button>{{ icon }} - {{ text }}</button> <br />   -->
  <button> 
      <slot> submit </slot>
  </button>
</template>
