<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="flex justify-center text-lg">
        <RouterLink :to="{name:'EventList'}" class="p-4 ">Events</RouterLink>
        <RouterLink :to="{name:'About'}" class="p-4">About</RouterLink>
      </nav>
  </header>
<div class="container mx-auto">
  <RouterView />
</div>
</template>
<script>
export default {
  data(){
   return{
   } 
  }
}
</script>

<style scoped>
.active{
  color:green
}
</style>
