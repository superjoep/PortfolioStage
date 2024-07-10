<template>
    <div  class="rounded-3xl h-full p-8 self-start   hover:shadow-xl bg-white text-black shadow-md col-span-1 sm:col-span-1 md:col-span-1 "> 
        <div style="font-family: Mainheader;" class="text-2xl text-center">My projects </div>
        <div style="font-family: maintext;" class="pt-5">
          Here you can explore a collection of projects I’ve worked on over the years, including both personal and academic endeavors. My portfolio covers a range of fields, including AI, VR, AR, and web applications.<br/><br/>

In AI, I’ve explored machine learning, neural networks, and natural language processing. My VR and AR projects demonstrate my ability to create immersive, interactive experiences. Additionally, my web applications highlight my skills in developing user-friendly platforms to address real-world problems.<br/><br/>

Each project has contributed to my growth as a developer and problem solver. Feel free to browse through and see the evolution of my work and the innovative solutions I’ve implemented.          <br/><div v-if="route.path != '/projects'" class="mt-5 text-blue " ><a class="hover:text-blue-600" href="/projects">View all projects</a></div>
          </div>
    </div>

  </template>
<script setup>
import {useRoute} from 'vue-router'
const route=useRoute();

</script>
<script>
  export default {
    name: 'myproj'
  }
</script>
  