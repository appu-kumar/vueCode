<script>
import DisplayData from './components/DisplayData.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

export default {
  components: { DisplayData, Home, Login },
  data() {
    return {
      compName: ''
    }
  },
  methods: {
    changeComp(comp) {
      this.compName = comp;
    }
  }
}

</script>


<template>
  <div class="header" style="display:flex; justify-content: space-around; align-items: center; padding:20px;">
    <div class="left-header">Your Logo</div>
    <div class="right-header" style="display:flex; justify-content:space-between; gap:20px">
      <a @click.prevent="changeComp('Home')" class="btn">Home</a>
      <a @click.prevent="changeComp('DisplayData')" class="btn">Founders</a>
      <a @click.prevent="changeComp('Login')" class="btn">Login</a>

    </div>
  </div>
  <hr/>
    <component :is="compName"></component>  <!-- if-else also work here but for lots of the component it would be difficult to write if else okay-->
</template>



<style>
    .btn{
      cursor: pointer;
    }
    .btn:hover{
      color:green;
    }
</style>