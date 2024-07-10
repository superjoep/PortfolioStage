<template>
    <div class="rounded-2xl p-6 bg-green-500 text-white shadow-lg  hover:shadow-xl flex flex-col space-y-4">
      <div class="text-2xl font-mainheader text-center mb-4">Skills</div>
  
      <div class="font-maintext text-sm space-y-4">
        <div v-for="(category, index) in skillCategories" :key="index" class="border-t border-green-400 pt-4">
          <button
            class="w-full flex justify-between items-center text-left bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
            @click="toggleDropdown(index)"
          >
            <span class="text-base font-semibold">{{ category.name }}</span>
            <svg
              :class="{ 'rotate-180': activeDropdown === index }"
              class="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
  
          <transition name="fade">
            <ul v-if="activeDropdown === index" class="mt-2 space-y-2">
              <li v-for="skill in category.skills" :key="skill.name" class="flex flex-col space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-xs font-medium">{{ skill.level }}</span>
                </div>
                <div class="relative flex items-center w-full bg-gray-200 rounded-full h-1">
                  <div
                    :class="getSkillColorClass(skill.level)"
                    class="h-full rounded-full"
                    :style="{ width: getSkillWidth(skill.level) }"
                  ></div>
                </div>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const skillCategories = [
    {
      name: 'Programming',
      skills: [
        { name: 'HTML', level: 'Very Good' },
        { name: 'CSS', level: 'Good' },
        { name: 'Tailwind', level: 'Good' },
        { name: 'Bootstrap', level: 'Good' },
        { name: 'Javascript', level: 'Good' },
        { name: 'Vue', level: 'Good' },
        { name: 'SQL', level: 'Basic' },
        { name: 'PHP', level: 'Beginner' },
        { name: 'C#', level: 'Beginner' },
        { name: 'React', level: 'Beginner' },
        { name: 'Python', level: 'Beginner' },
      ],
    },
    {
      name: 'Design',
      skills: [
        { name: 'Wordpress', level: 'Good' },
        { name: 'Word', level: 'Good' },
        { name: 'Photoshop', level: 'Fair' },
        { name: 'Illustrator', level: 'Fair' },
        { name: 'Indesign', level: 'Basic' },
        { name: 'Excel', level: 'Basic' },
        { name: 'Unity', level: 'Beginner' },
      ],
    },
    {
      name: 'Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 'Good' },
        { name: 'Data Collection', level: 'Good' },
      ],
    },
  ];
  
  const activeDropdown = ref(null);
  
  function toggleDropdown(index) {
    activeDropdown.value = activeDropdown.value === index ? null : index;
  }
  
  function getSkillWidth(level) {
    const levels = {
      'Very Good': '100%',
      'Good': '75%',
      'Fair': '50%',
      'Basic': '25%',
      'Beginner': '10%',
    };
    return levels[level] || '0%';
  }
  
  function getSkillColorClass(level) {
    const colors = {
      'Very Good': 'bg-green-800',
      'Good': 'bg-green-600',
      'Fair': 'bg-green-500',
      'Basic': 'bg-green-400',
      'Beginner': 'bg-green-300',
    };
    return colors[level] || 'bg-gray-200';
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
  
  /* Dropdown menu */
  .transition-enter-active, .transition-leave-active {
    transition: opacity 0.3s;
  }
  
  .transition-enter, .transition-leave-to /* .fade-enter-to, .fade-leave */ {
    opacity: 0;
  }
  
  .w-24 {
    width: 6rem;
  }
  
  /* Skill bar styles */
  .relative {
    border: 1px solid #ddd;
    background-color: #f0f0f0;
  }
  
  .relative .h-full {
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
  </style>
  