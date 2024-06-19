<script>
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
export default {
  name: 'App',
  components: {
    About,
    Skills
  }
}
</script>
<template>
    <div class="flex justify-center  flex-row gap-4 flex-wrap"> 
    <About />
  </div>
</template>

