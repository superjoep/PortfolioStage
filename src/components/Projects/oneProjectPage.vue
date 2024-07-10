<template>
    <div class="project-detail-container rounded-3xl h-full p-8 hover:shadow-xl bg-white text-black shadow-md flex flex-col items-center">
      <div class="text-2xl font-bold mb-4">{{ projects[route.params.id].title }}</div>
      <p class="text-sm text-gray-600 mb-4 text-left px-2">
        {{ projects[route.params.id].description }}
      </p>
      <img :src="projects[route.params.id].image" class="w-full max-w-screen-md h-auto rounded-2xl object-cover border-2 border-gray-200" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { projects } from '../Projects/projectsStored.vue'
  const route = useRoute()
  </script>
  
  <style scoped>
  /* Font families */
  .font-mainheader {
    font-family: 'Mainheader', sans-serif;
  }
  .font-maintext {
    font-family: 'maintext', sans-serif;
  }
  </style>
  