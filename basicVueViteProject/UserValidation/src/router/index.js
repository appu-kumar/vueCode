import { createRouter, createWebHistory } from 'vue-router'

import AgeValidation from '../components/AgeValidation.vue'
import UserValidation from '../components/UserValidation.vue'
import SuccessPage from '../components/SuccessPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'userValidation',
      component:UserValidation,
    },
    {
      path:'/ageValidation',
      name:'ageValidation',
      component:AgeValidation,
    },
    {
      path:'/success',
      name:'success',
      component:SuccessPage,
    },
  ],
})

export default router
