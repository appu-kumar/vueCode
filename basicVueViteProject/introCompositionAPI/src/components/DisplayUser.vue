<script>
import {ref,reactive,computed} from 'vue'
export default {
    setup() {
        const userList = ref([]);    // data in option API

        const state = reactive({fname:'Appu',lname:'Kumar',age:0,});

        const fullname = computed(()=>state.fname+" "+state.lname);

        async function fetchUsers(){     // methods:  in option API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            userList.value = data;
        }
                             // all are in one method, that is why it is composition API
     return {
        userList,
        fetchUsers,
        fullname,
        state,
     }

    },
    created(){
        this.fetchUsers()         // calling from created:  
    }
}


</script>


<template>

    <p>Founders's Name</p>
    <p>age: {{ state.age }}</p>
    <p>fName: {{ state.fname }}</p>
    <p>lName: {{ state.lname }}</p>
    <p>fullName:{{ fullname }}</p>
    <!-- <pre>{{ userList }}</pre> -->
    <ul>
        <li v-for="user in userList" v-bind:key="user.id" class="founder">{{ user.name.toUpperCase()}}</li>
    </ul>

</template>


<style> 
     .founder{
        border:2px solid black;
        list-style:none;
        padding:2px;
        margin:2px;
     }
</style>