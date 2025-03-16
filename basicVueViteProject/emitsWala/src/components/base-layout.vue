<script>
export default {
   
}
</script>

<template>
  <aside class="aside">
    <slot name="aside" />
  </aside>
  <main class="main">
      <slot name="main" />
  </main>
  <footer class="footer">
     <slot name="footer" />
  </footer>
  <p>hi</p>
</template>

<style>
.aside {
  border:4px solid red;
}
.main{
   border:4px solid blue;
}

.footer{
   border:4px solid yellow;
}
</style>
