
<script  setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/Header.vue'
</script>
<template>
  <navbar />
  <RouterView />
</template>


<script>
import About from './components/About.vue';
import Skills from './components/Skills.vue';
export default {
  name: 'App',
  components: {
    About,
    navbar,
    Skills
  }
}
</script>