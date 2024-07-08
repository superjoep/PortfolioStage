<script>
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import workExp from '../components/workExp.vue';
import myproj from '../components/myproj.vue';
import contact from '../components/Contact.vue';
export default {
  name: 'App',
  components: {
    About,
    Skills,
    workExp,
    myproj,
    contact
  }
}

</script>
<template>
  
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 "> 
    <About />
    <Skills />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1">
      <myproj />
      <contact />
    </div>
    <workExp />
  </div>
</template>