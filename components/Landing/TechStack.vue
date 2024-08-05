<template>
  <div class="flex justify-center items-center h-full  pt-80" id="techStack">
    <div class="relative max-w-[70rem] mx-auto">
      <div>
        <h2 class="pb-30 mt-10 text-center font-bold uppercase text-2xl">
          Our Technology Stack<br />
          <span class="font-extralight text-5xl mt-10"> The Best in the Industry</span>
        </h2>
      </div>
      <div class="w-full flex flex-col items-center relative z-10 marquee-container">
        <div class="marquee-content">
          <div class="marquee-row" v-for="(row, rowIndex) in 3" :key="rowIndex">
            <figure class="technology" v-for="(logo, index) in getRandomizedLogos()" :key="index + '-row' + rowIndex">
              <img :src="logo.src" :alt="logo.alt" class="logo"/>
              <figcaption>
                <span class="text-white">{{ logo.alt }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      logos: [
        { src: "/assets/imgs/stack/angular.svg", alt: "Angular" },
        { src: "/assets/imgs/stack/astro.svg", alt: "Astro" },
        { src: "/assets/imgs/stack/ios.svg", alt: "iOS" },
        { src: "/assets/imgs/stack/js.svg", alt: "JavaScript" },
        { src: "/assets/imgs/stack/laravel.svg", alt: "Laravel" },
        { src: "/assets/imgs/stack/markdown.svg", alt: "Markdown" },
        { src: "/assets/imgs/stack/mysql.svg", alt: "MySQL" },
        { src: "/assets/imgs/stack/nextjs.svg", alt: "Next.js" },
        { src: "/assets/imgs/stack/nodejs.svg", alt: "Node.js" },
        { src: "/assets/imgs/stack/nuxt.svg", alt: "Nuxt" },
        { src: "/assets/imgs/stack/php.svg", alt: "PHP" },
        { src: "/assets/imgs/stack/react.svg", alt: "React" },
        { src: "/assets/imgs/stack/sass.svg", alt: "Sass" },
        { src: "/assets/imgs/stack/tailwindcss.svg", alt: "Tailwind" },
        { src: "/assets/imgs/stack/ts.svg", alt: "TypeScript" },
        { src: "/assets/imgs/stack/vuejs.svg", alt: "Vue.js" },
      ],
    };
  },
  methods: {
    getRandomizedLogos() {
      const shuffledLogos = this.shuffleArray([...this.logos]);
      return shuffledLogos;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    animateMarquee() {
      const marqueeContent = document.querySelector('.marquee-content');
      gsap.to(marqueeContent, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "linear",
      });
    },
  },
  mounted() {
    this.animateMarquee();
  },
};
</script>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}

.technology:hover .logo {
  transform: scale(1.1);
}

.technology {
  height: 50px;
  width: 50px;
  position: relative;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.technology figcaption {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.1s ease-out;
}

.technology:hover figcaption {
  opacity: 1;
}

.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 400px; 
  z-index: 10;
  background: url('/assets/imgs/backgroundShade.png'), url('/assets/imgs/backgroundShade2.png');
  background-size: cover, cover;
  background-position: left, right;
}

.marquee-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 400%; 
}

.marquee-row {
  display: flex;
  flex-wrap: nowrap;
}
</style>
