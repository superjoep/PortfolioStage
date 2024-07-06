<script>
import projects from '../components/myproj.vue';
import indivProject from '../components/Projects/oneProjectPage.vue';
export default {
  name: 'App',
  components: {
    projects,
    indivProject
  }
}
</script>
<template>
    <div class="flex justify-center flex-row gap-4 flex-wrap"> 
    <projects />
    <indivProject />
  </div>
</template>

