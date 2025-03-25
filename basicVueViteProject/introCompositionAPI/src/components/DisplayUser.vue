<script setup>
import {ref,reactive,computed,defineProps,defineEmits} from 'vue'
// export default {
//     setup() {
//           // all are in one place, that is why it is composition API
//         const userList = ref([]);    // data in option API

//         const state = reactive({fname:'Appu',lname:'Kumar',age:0,});

//         const fullname = computed(()=>state.fname+" "+state.lname);

//         async function fetchUsers(){     // methods:  in option API
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json();
//             userList.value = data;
//         }
//         userList.value = fetchUsers()    // calling like  from created: 
                           
//      return {
//         userList,
//         fetchUsers,
//         fullname,
//         state,
//      }

//     },
   
// }

// This is the exact composition API, no need of setup method, no need of the return things and no need to register the component etc. 
         
        const props = defineProps({
            name:{
                type:String,
                default:'raju'
            }
        })

       const emits = defineEmits(['change-name']);
       console.log('emits',typeof emits);

        const userList = ref([]);    // data in option API
        
        const state = reactive({fname:'Appu',lname:'Kumar',age:0,});

        const fullname = computed(()=>state.fname+" "+state.lname+" "+props.name);

        async function fetchUsers(){     // methods:  in option API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            userList.value = data;
        }
        userList.value = fetchUsers()    // calling like  from created: 

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