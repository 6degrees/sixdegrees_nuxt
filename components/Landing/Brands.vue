<template>
  <!-- Start Clients Section -->
  <div class="py-9 border-t border-t-[rgba(255,255,255,0.2)] border-b border-b-[rgba(255,255,255,0.2)] overflow-hidden">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full lg:w-11/12">
          <div class="w-full flex items-center justify-center relative z-10 overflow-hidden">
            <div class="flex whitespace-nowrap" ref="marqueeContent">
              <div class="flex marquee-row items-center">
                <figure class="flex-none px-4 mx-6 transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100" v-for="(logo, index) in loopedLogos" :key="index">
                  <a href="#">
                    <img :src="logo.img" :alt="logo.alt" class="max-h-[50px] max-w-[150px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"/>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Clients Section -->
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import logos from '@/data/Landing/brands.json'; // Import the JSON data for client logos

// Reference to the marquee content container
const marqueeContent = ref(null);

// Function to create a seamless loop of logos
const createLoopedLogos = (logos) => {
  return [...logos, ...logos]; // Duplicate the logos array to create a seamless loop
};

// Create looped logos array
const loopedLogos = createLoopedLogos(logos);

// Function to animate the marquee
const animateMarquee = () => {
  const row = marqueeContent.value.querySelector('.marquee-row'); // Select the marquee row
  const rowWidth = row.scrollWidth / 2; // Calculate half the width of the row

  gsap.to(row, {
    x: `-=${rowWidth}`, // Move the row to the left by half of its width
    duration: 20, // Adjust the duration to control speed (increase for slower, decrease for faster)
    ease: "none", // Use 'none' for a consistent speed without acceleration
    repeat: -1, // Repeat indefinitely
    modifiers: {
      x: gsap.utils.wrap(-rowWidth, 0) // Wrap the position to create a seamless loop
    }
  });
};

// Lifecycle Hook: onMounted to start the animation when the component is ready
onMounted(() => {
  animateMarquee(); // Start the marquee animation
});
</script>
