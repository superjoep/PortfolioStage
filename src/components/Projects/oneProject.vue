<template>
    <div class="bg-white rounded-lg p-5 position-absolute shadow-lg">
      <div class="text-center">Filter <br/></div>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.Web">Web</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.AI">AI</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.AR">AR</input>
        <input type="checkbox" class="m-2" @change="filter()" v-model="filters.VR">VR</input>
    </div>
    <div class="projects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div v-for="item in filter" :key="item.id" >
      <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
        
        <img :src="item.image" class="project-image w-full h-40 object-cover border-b-2 border-gray-200" />
        <div class="project-title text-xl font-mainheader text-gray-800 text-center py-2">{{ item.title }}</div>
        <div class="project-description text-sm font-maintext text-gray-600 text-center px-2 py-1">
          {{ item.shortDesc }}
          <div class="project-link mt-2">
            <a class="link-text text-blue-500 font-semibold hover:underline" :href="'/singleProject/' + item.id">See Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>

  const projects = [
    {
      id: 0,
      cat: "Web",
      title: "De blokhut Website",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/test.jpeg",
      url: ""
    },
    {
      id: 1,
      cat: "AR",
      title: "Server Unit Simulator",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/projects/ExplodeView.gif"
    },
    {
      id: 2,
      cat: "AI",
      title: "AI Clothing recognizer",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/test.jpeg"
    },
    {
      id: 3,
      cat: "AR",
      title: "AR in books",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/test.jpeg"
    },
    {
      id: 4,
      cat: "Web",
      title: "Leelaroosa website",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/test.jpeg"
    },
    {
      id: 5,
      cat: "Web",
      title: "Waarnemingen.nl",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
      image: "../src/assets/images/projects/EindhovenInsights.jpeg"
    }
  ];
  
  export { projects };
  export default {
    data() {
      return {
        projects,
        filters:{
          Web: true,
          AI: true,
          AR: true,
          VR: true,
        }
      };
    },
    computed:{
       filter() {
        return this.projects.filter(project => this.filters[project.cat]);
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
  