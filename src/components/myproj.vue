<template>
    <div  class="rounded-3xl h-full p-8 self-start  hover:shadow-xl bg-white text-black shadow-md col-span-1 sm:col-span-1 md:col-span-1   flex flex-col"> 
        <div style="font-family: Mainheader;" class="text-2xl text-center">My projects </div>
        <div style="font-family: maintext;" class="pt-5">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.
          <br/><div v-if="route.path != '/projects'" class="mt-5 text-blue " ><a class="hover:text-blue-600" href="/projects">View all projects</a></div>
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
  