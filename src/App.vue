<template>
  <TheHeader  />
  <main class="w-screen p-6 bg-black h-screen">
    <UserInput />
  </main>
</template>


<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import UserInput from './components/form/UserInput.vue'
import { authStore } from './stores/auth'

//import auth store
const auth = authStore()

</script>