<template>
  <!-- Start Technology Stack Section -->
  <div class="flex justify-center items-center h-full pt-80" id="techStack">
    <div class="relative max-w-[70rem] mx-auto">
      <div>
        <h2 class="pb-30 mt-10 text-center font-bold uppercase text-2xl">
          {{ $t('components.landing.technologies.section.title') }}<br/>
          <span class="font-extralight text-5xl mt-10"> {{ $t('components.landing.technologies.section.subtitle') }}</span>
        </h2>
      </div>
      <div class="w-full flex flex-col items-center relative z-10 marquee-container">
        <div class="marquee-content" ref="marqueeContent">
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

/*
|--------------------------------------------------------------------------
| Script Setup
|--------------------------------------------------------------------------
|
| The script setup block initializes variables and functions for managing
| locale settings and navigation within the application.
|
*/
const {locale} = useI18n()
const marqueeContent = ref(null);

/*
|--------------------------------------------------------------------------
| Function: animateMarquee
|--------------------------------------------------------------------------
|
| Animates the marquee effect for each row of logos. The rows will scroll
| horizontally in a continuous loop, creating a smooth, seamless animation.
| The GSAP library is used to handle the animation, with the 'linear' ease
| and infinite repeat to achieve the marquee effect.
|
| @function document.querySelectorAll - Selects all elements with the class 'marquee-row'
| @function gsap.fromTo - Animates the rows from an initial to a final position
| @param {HTMLElement} row - The row element to be animated
| @property {number} distance - The distance to scroll, calculated as half the scrollWidth
| @property {number} duration - The duration of the animation in seconds
| @property {string} ease - The easing function for the animation
| @property {number} repeat - The number of times the animation should repeat (-1 for infinite)
| @property {object} modifiers - Modifiers applied to the animation, such as looping the position
|
*/
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

/*
|--------------------------------------------------------------------------
| Lifecycle Hook: onMounted
|--------------------------------------------------------------------------
|
| This hook is triggered when the component is mounted to the DOM. It calls
| the animateMarquee function to start the marquee animation as soon as the
| component is ready.
|
| @function onMounted - Lifecycle hook that runs after the component is mounted
|
*/
onMounted(() => {
  animateMarquee(); // Start the marquee animation
});
</script>



