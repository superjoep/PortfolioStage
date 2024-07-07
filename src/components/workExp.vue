<template>
    <div class="rounded-3xl hover:shadow-xl p-8 bg-white text-black shadow-md col-span-2 sm:col-span-1  basis-1/3  md:h-full flex flex-col"> 
        <div style="font-family: Mainheader;" class="text-2xl text-center">Experience </div>
        <div style="font-family: MainText;" class="pt-5">

<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li v-for="item in Experience" class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time style="font-family: maintext;" class="mb-1 text-sm font-normal leading-none text-black ">{{item.Year}}</time>
        <h3 style="font-family: Mainheader;" class="text-lg font-semibold text-black ">{{item.jobName}}</h3>
        <p style="font-family: maintext;" class="text-base font-normal text-black ">{{ item.description }}</p>
    </li>
</ol>
    </div>
    </div>
  </template>
  <script>
  export default {
    name: 'workExp',
    data() {
        return {
            Experience
        };
    }
  }
  const Experience = [
    {
        id:0,
        Year:"2017-2020",
        jobName:"Summa Applicatie & Media ontwikkeling",
        description:"All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
        id:1,
        Year:"2018-2019",
        jobName:"Internship Drukke baasjes",
        description:"All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
        id:2,
        Year:"2019-2020",
        jobName:"Internship Electude",
        description:"All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
        id:3,
        Year:"2020-2025",
        jobName:"Fontys ICT & AI",
        description:"All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
    {
        id:4,
        Year:"2023-2024",
        jobName:"Internship PIT",
        description:"All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    },
  ]

  </script>
  