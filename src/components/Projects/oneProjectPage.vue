<template>
    <div style="font-family: maintext;" class="project-detail-container rounded-3xl h-full p-8 hover:shadow-xl bg-white text-black shadow-md flex flex-col ">
      <div style="font-family: mainHeader;" class="text-2xl text-center font-bold mb-4">{{ projects[route.params.id].title }}</div>
      <p style="font-family: maintext;" class="text-sm  mb-4 text-left ">
        {{ projects[route.params.id].description }}
      </p>
      <div v-if="projects[route.params.id].StakeHolderDesc !== ''" class="text-xl text-left font-bold mb-4">About {{ projects[route.params.id].Stakeholder }}</div>
      <p v-if="projects[route.params.id].StakeHolderDesc !== ''" class="text-sm  mb-4 text-left ">
        {{ projects[route.params.id].StakeHolderDesc }}
      </p>
      <div  v-if="projects[route.params.id].theProblemDesc !== ''" class="text-xl text-left font-bold mt-5 mb-4">The problem</div>
      <p v-if="projects[route.params.id].theProblemDesc !== ''" class="text-sm  mb-4 text-left ">
        {{ projects[route.params.id].theProblemDesc }}
      </p>
      <video v-if="projects[route.params.id].video !== ''" width="400" style="height: 50vh;" controls>
      <source  :src="projects[route.params.id].video" type="video/mp4">
      Your browser does not support HTML video.
      </video>

      <img v-if="projects[route.params.id].image !== ''" :src="projects[route.params.id].image" class="mt-5 w-full max-w-screen-md h-auto rounded-2xl object-cover border-2 border-gray-200" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { projects } from '../Projects/projectsStored.vue'
  const route = useRoute()
  </script>
  

  