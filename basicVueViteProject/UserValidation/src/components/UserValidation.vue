<script>
/*

Page 1 -> 2 input box 1 button 
    username and password
    admin and admin

Page 2
input -> age?
age >18 && age<=65 -> You are eligible

Page 3

*/
export default {
  name: 'UserValidation',
   data(){
      return {
        username:'',
        password:'',
      }
   },
   methods:{
      validate(){
         if(this.username.toLowerCase() === 'admin' && this.password.toLowerCase() === 'admin'){
           // Go to the Age validation page
          this.$router.push('/ageValidation');
         }
         else{
             alert('Invalid input(s) either password or username')
         }
      }
   }
}

</script>

<template>
  <div style="text-align:center; margin-top:20%">
  <h1> Welcome to the username and password validation </h1>
  <p>{{username}}{{password}} </p>
  <div>
    <label> UserName: </label>
    <input type="text" v-model="username" />
  </div>
   <div>
    <label> Password: </label>
    <input type="text" v-model="password"/>
  </div>
  <button  v-on:click="validate" > validateUser </button>
  </div>
</template>
