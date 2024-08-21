<template>
  <!-- Works section specific to Project 1 -->
  <div class="works thecontainer ontop">
    <div v-for="item in data" :key="item.id" class="panel">
      <div class="item">
        <div class="img">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '@/data/Project/One/works.json';

/*
|--------------------------------------------------------------------------
| Resize Handling and Animation Setup
|--------------------------------------------------------------------------
|
| Handles resizing by reloading the page if necessary and updating
| ScrollTrigger instances. Initializes GSAP animations for the sections
| if the window width is greater than 991 pixels.
|
*/
function handleResize() {
  const allTriggers = ScrollTrigger.getAll();
  if (window.innerWidth < 991 && allTriggers.length || window.innerWidth > 991 && !allTriggers.length) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
}

/*
|--------------------------------------------------------------------------
| onMounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| Registers the GSAP ScrollTrigger plugin and sets up the horizontal
| scrolling animation for the panels if the window width is greater
| than 991 pixels. Adds an event listener for window resize to adjust
| animations as needed.
|
*/
onMounted(() => {
  if (window.innerWidth > 991) {
    let sections = gsap.utils.toArray(".panel");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".thecontainer",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
      }
    });
  }

  window.addEventListener('resize', handleResize);
});

/*
|--------------------------------------------------------------------------
| onUnmounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| Removes the resize event listener when the component is unmounted to
| prevent memory leaks and unnecessary processing.
|
*/
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
