<script>
import Skills from '../components/Skills.vue';
import WorkExp from '../components/workExp.vue';
export default {
  name: 'App',
  components: {
    Skills,
    WorkExp
  }
}
</script>
<template>
    <div class="flex justify-center flex-row gap-4 flex-wrap"> 
    <Skills />
    <WorkExp />
  </div>
</template>

