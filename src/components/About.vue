<template>
  <div class="rounded-3xl flex p-8 bg-white hover:shadow-xl text-black shadow-md">
    <div style="font-family: maintext;">
      <img class="float-start size-40 mr-4" src="../assets/images/Memoji.jpeg" />
      <div style="font-family: Mainheader; display:inline;" class="text-2xl hi-there-container">
        <span v-for="(char, index) in greeting" :key="index" :class="{ 'hi-there-char': char !== ' ', 'space': char === ' ' }">
          {{ char }}
        </span>
      </div>
      I’m Joep, a 23-year-old ICT student from Eindhoven. For the past seven years, I’ve been on an exciting journey through the world of technology, exploring everything from front-end and back-end development to AI, VR, and AR.

      My tech adventure started at Summa College with a focus on Application Media Development, and now I’m pursuing my bachelor’s in IT at Fontys University. Along the way, I’ve had several internships that have not only expanded my knowledge but also provided me with hands-on experience in these fascinating fields.

      I’m excited about the future and eager to continue learning and growing in the world of ICT!
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      greeting: 'Hi there!'
    };
  }
};
</script>

<style>
.hi-there-container {
  display: inline-block;
}

.hi-there-char {
  display: inline-block;
  animation: upDown 0.5s ease-in-out infinite alternate;
}

.space {
  margin-right: 1; /* Adjust the margin to increase space */
}

.hi-there-char:nth-child(1) { animation-delay: 0s; }
.hi-there-char:nth-child(2) { animation-delay: 0.1s; }
.hi-there-char:nth-child(3) { animation-delay: 0.2s; }
.hi-there-char:nth-child(4) { animation-delay: 0.3s; }
.hi-there-char:nth-child(5) { animation-delay: 0.4s; }
.hi-there-char:nth-child(6) { animation-delay: 0.5s; }
.hi-there-char:nth-child(7) { animation-delay: 0.6s; }
.hi-there-char:nth-child(8) { animation-delay: 0.7s; }

@keyframes upDown {
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
}
</style>
