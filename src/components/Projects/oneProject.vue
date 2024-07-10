<template>

  <div class="flex justify-center pt-5 gap-4 flex-wrap"> 
    <div class="bg-white static  rounded-lg p-5 shadow-lg">
      <div class="text-center">Filter <br/></div>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.Web">Web</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.AI">AI</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.AR">AR</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.VR">VR</input>
    </br>
    </div>
  </div>

<br>
<div class="flex justify-center gap-4 flex-wrap"> 
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div v-for="item in filter" :key="item.id" >
      <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
        
        <img :src="item.image" class="project-image w-full h-40 object-cover border-b-2 border-gray-200" />
        <div class="project-title text-xl font-mainheader text-gray-800 text-center py-2">{{ item.title }}</div>
        <div class="project-description text-sm font-maintext text-gray-600 text-center px-2 py-1">
         <div  class="h-20  text-ellipsis	overflow-hidden">{{ item.description  }}</div> 
          <div class="project-link mt-2">
            <a class="link-text text-blue-500 font-semibold hover:underline" :href="'/singleProject/' + item.id">See Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </template>

  <script>

  import { projects } from '../Projects/projectsStored.vue'
  
  export default {
    data() {
      return {
        projects,
        filters:{
          Web: true,
          AI: true,
          AR: true,
          VR: true,
        },
        isvisible: true,
      };
    },
    computed:{
       filter() {
        const thisfilter = this.projects.filter(project => this.filters[project.cat]);
       
       return thisfilter
      }
    },


  }
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
  