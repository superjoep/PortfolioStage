
<template>
    <div v-for="item in projects" :key="item.id" class="rounded-3xl h-full p-8 self-start hover:shadow-xl bg-white text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 flex flex-col"> 
        <img style="width: 100%; height: 150px; border-radius: 5%; object-fit: cover;" :src="item.image">
        <div style="font-family: Mainheader;" class="text-2xl text-center pt-5">{{item.title}}</div>
        <div style="font-family: maintext;" class="pt-5">
        {{ item.description }}
          <br/><div class="mt-5 text-blue" ><a :href="'/projects/' + item.id">See Project</a></div>
          </div>

    </div>

  </template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 0,
                    title: "De blokhut Website",
                    description: "loremipsum",
                    image: "../src/assets/images/test.jpeg"
                },
                {
                    id: 1,
                    title: "Server Unit Simulator",
                    description: "loremipsum",
                    image: "./images/test.png"
                },
                {
                    id: 2,
                    title: "AI Clothing recognizer",
                    description: "loremipsum",
                    image: "./images/test.png"
                },
                {
                    id: 3,
                    title: "AR in books",
                    description: "loremipsum",
                    image: "./images/test.png"
                },
                {
                    id: 3,
                    title: "Leelaroosa website",
                    description: "loremipsum",
                    image: "./images/test.png"
                },
                {
                    id: 4,
                    title: "Leelaroosa website",
                    description: "loremipsum",
                    image: "./images/test.png"
                }
            ]
        };
    }
}
</script>
