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
  
  <div class="flex flex-wrap: wrap; justify-center flex-row gap-4 flex-wrap"> 
    
    <About />
    <Skills />
    <workExp />
    <myproj />
    <contact />
    
  </div>
</template>
