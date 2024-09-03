<template>
  <!-- Start Clients Section -->
  <div class="clients-carso">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="w-full flex items-center relative z-10 marquee-container">
            <div class="marquee-content" ref="marqueeContent">
              <div class="marquee-row">
                <!-- Display logos in a continuous loop -->
                <figure class="brand-item" v-for="(logo, index) in loopedLogos" :key="index">
                  <a href="#">
                    <img :src="logo.img" :alt="logo.alt" class="logo"/>
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
  const row = document.querySelector('.marquee-row'); // Select the marquee row
  const rowWidth = row.scrollWidth / 2; // Calculate half the width of the row

  gsap.to(row, {
    x: `-=${rowWidth}`, // Move the row to the left by half of its width
    duration: 10, // Adjust the duration to control speed
    ease: "linear", // Use a linear easing function for consistent speed
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

<style scoped>
.clients-carso {
  overflow: hidden; /* Hide overflow to prevent showing duplicated content */
}

.marquee-container {
  width: 100%;
  overflow: hidden; /* Hide overflow to create a continuous scroll effect */
}

.marquee-content {
  display: flex;
  white-space: nowrap; /* Prevent wrapping of logos */
}

.marquee-row {
  display: flex;
}

.brand-item {
  flex: 0 0 auto; /* Prevent shrinking or growing */
  margin-right: 40px; /* Space between logos */
  opacity: 0.5; /* Set reduced opacity by default */
  transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity */
}

.brand-item:hover {
  opacity: 1; /* Full opacity on hover */
}
.logo {
  max-height: 50px; /* Adjust this to your desired height */
  max-width: 150px; /* Adjust this to your desired width */
  width: auto; /* Maintain aspect ratio */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Ensure logos fit within the specified dimensions */
  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
}

.brand-item:hover .logo {
  transform: scale(1.1); /* Slightly enlarge the logo on hover */
}


</style>
