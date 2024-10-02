<template>
  <!-- Start Technology Stack Section -->
  <div class="flex justify-center items-center h-full pt-20" id="techStack">
    <div class="relative max-w-[70rem] mx-auto">
      <div class="pb-5 text-center">
        <!-- Title Section with responsive text size -->
        <h2 class="mt-10 font-bold uppercase text-2xl sm:text-3xl md:text-4xl">
          {{ $t('components.landing.technologies.section.title') }}
        </h2> 
        <br />
        <!-- Subtitle with responsive text size and centered text -->
        <h2>
          <span class="font-extralight text-2xl sm:text-3xl md:text-5xl uppercase text-center">
            {{ $t('components.landing.technologies.section.subtitle') }}
          </span>
        </h2>
      </div>
      <!-- Increase the height of the logo section -->
      <div class="w-full flex flex-col items-center relative z-10 overflow-hidden relative w-full h-[500px] z-10 marquee-container"> 
        <div class="marquee-content flex flex-col absolute w-[400%]" ref="marqueeContent">
          <div class="marquee-row" v-for="(shuffledRow, rowIndex) in logos" :key="rowIndex">
            <!-- Use precomputed shuffled array -->
            <figure class="technology m-3 lg:m-4" v-for="(logo, index) in shuffledRow" :key="index + '-row' + rowIndex">
              <img :src="logo.src" :alt="logo.alt" class="logo"/>
              <figcaption>
                <span class="text-white">{{ logo.alt }}</span>
              </figcaption>
            </figure>
            <!-- Duplicate the logos for seamless looping -->
            <figure class="technology m-3 lg:m-4" v-for="(logo, index) in shuffledRow" :key="'dup-' + index + '-row' + rowIndex">
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
  <!-- End Technology Stack Section -->
</template>

<script setup>
import logos from '@/data/Landing/logs.json'; // Import the JSON data for use in the Swiper component
import {gsap} from 'gsap'; // Import GSAP for animations

const {locale} = useI18n()
const marqueeContent = ref(null);

const animateMarquee = () => {
  const rows = document.querySelectorAll('.marquee-row'); // Select all marquee rows
  rows.forEach(row => {
    const distance = row.scrollWidth / 2; // Calculate the distance for the animation

    gsap.fromTo(row,
        {x: locale.value === 'ar' ? -distance : 0}, // Start at the initial position
        {
          x: locale.value === 'ar' ? 0 : -distance, // Move the row based on the RTL mode
          duration: 30, // Duration of the animation (seconds)
          ease: "linear", // Use a linear easing function for consistent speed
          repeat: -1, // Repeat indefinitely
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % distance) // Loop the position smoothly
          }
        }
    );
  });
};

onMounted(() => {
  animateMarquee(); // Start the marquee animation
});
</script>
