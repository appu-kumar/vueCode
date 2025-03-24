

<script>
   export default {
     created(){
          this.fetchUsers();
          console.log("oye created")
     },
     data(){
      return {
        userList:[],
      } 
     },
     methods:{
        async fetchUsers(){
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          this.userList = data;
          
        }
     }
    }
   
</script>


<!--  Automatically template:'All content of the template'    is bound with default object by vue.js compiler     -->
<template>
    <p> Display data </p>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
  
</template>
