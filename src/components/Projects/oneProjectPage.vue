
<template>
    <div  class="rounded-3xl h-full p-8 self-start hover:shadow-xl bg-white text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 flex flex-col"> 
    <div class="text-2xl">{{ projects[route.params.id].title }}</div>
    {{ projects[route.params.id].description }}
    <img style="width: 95vw; height: 50vh; border-radius: 20px; object-fit: cover;" :src="projects[route.params.id].image">
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../Projects/oneProject.vue'
const route = useRoute()
</script>
