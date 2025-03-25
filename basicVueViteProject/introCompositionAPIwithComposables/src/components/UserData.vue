<script setup>
import { useFetchUser } from '../composables/fetchUser.js'

const { data, loading, error } = useFetchUser('https://jsonplaceholder.typicode.com/users');
</script>


<template>
    <h1>User List</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">error:{{ error }}</p>
    <ul v-else>
        <li v-for="user in data" :key="user.id">{{ user.name }}</li>
    </ul>

</template>