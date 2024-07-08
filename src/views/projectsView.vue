<script>
import projects from '../components/myproj.vue';
import indivProject from '../components/Projects/oneProject.vue';
export default {
  name: 'App',
  components: {
    projects,
    indivProject
  }
}
</script>
<template>

    <projects />
    <indivProject />

</template>

