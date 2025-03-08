
<script>
/*


xPage 2
input -> age?
age >18 && age<=65 -> You are eligible

*/


export default {
  name: "AgeValidation",
  data(){
    return {
        age:3,
    }
  },
  methods:{
     validateAge(){
        if(this.age>18 && this.age<=65){
          this.$router.push('/success');
        }
        else{
           alert('please enter the age according to labour law of india, eg. 18 to 65')
        }
     }
  }
};
</script>

<template>
    <h1> Welcome to the age validation </h1>
    <p> {{age}} </p>
    <div>
        <label> Age:  </label>
        <input type="number" v-model="age" />
    </div>
    <button  v-on:click="validateAge">validate</button>

</template>