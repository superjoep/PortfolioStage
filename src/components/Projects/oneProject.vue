
<template>
    <div v-for="item in projects" :key="item.id" class="rounded-3xl h-full p-8 self-start hover:shadow-xl bg-white basis-1/4 text-black shadow-md col-span-3 sm:col-span-3 md:col-span-3 flex flex-col"> 
        <img style="width: 100%; height: 150px; border-radius: 5%; object-fit: cover;" :src="item.image">
        <div style="font-family: Mainheader;" class="text-2xl text-center pt-5">{{item.title}}</div>
        <div style="font-family: maintext;" class="pt-5">
        {{ item.shortDesc }}
          <br/><div class="mt-5 text-blue" ><a class="hover:text-blue-600" :href="'/singleProject/' + item.id">See Project</a></div>
          </div>
    </div>

  </template>

<script>
const projects = [
                {
                    id: 0,
                    title: "De blokhut Website",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/test.jpeg",
                    url: ""
                },
                {
                    id: 1,
                    title: "Server Unit Simulator",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/projects/ExplodeView.gif"
                },
                {
                    id: 2,
                    title: "AI Clothing recognizer",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/test.jpeg"
                },
                {
                    id: 3,
                    title: "AR in books",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/test.jpeg"
                },
                {
                    id: 4,
                    title: "Leelaroosa website",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/test.jpeg"
                },
                {
                    id: 5,
                    title: "Waarnemingen.nl",
                    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet finibus turpis, placerat commodo nulla interdum non. Quisque blandit ante lorem, eget tincidunt justo consectetur vel. Aliquam a arcu est. Aliquam commodo turpis at risus sagittis, sed interdum libero laoreet. Suspendisse lectus nulla, semper nec magna vel.",
                    image: "../src/assets/images/projects/EindhovenInsights.jpeg"
                }
            ];

export {projects}
export default {
    data() {
        return {
            projects
        };
    }
}
</script>
