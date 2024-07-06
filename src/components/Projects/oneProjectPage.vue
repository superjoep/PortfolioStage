
<template>
    <div  class="rounded-3xl h-full p-8 self-start hover:shadow-xl bg-white text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 flex flex-col"> 
    {{ projects[route.params.id].title }}
    </div>

</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import {projects} from '../Projects/oneProject.vue'
const route = useRoute()
    console.log( route.params.id );    
    console.log( projects[route.params.id] );
</script>
