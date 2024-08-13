<template>
  <section class="works thecontainer w-[300vw] min-h-[95vh] flex flex-nowrap pl-[100px] relative z-0 sub-bg">
    <div v-for="item in data" :key="item.id" class="panel">
      <div class="item">
        <div class="h-[400px] min-h-[50vh]">
          <img :src="item.img" class="w-full h-full object-cover object-center" alt=""/>
        </div>
        <div class="px-2.5 py-6 border-b border-[rgba(12,0,0,0.2)] d-flex align-items-center">
          <div>
            <span class="text-gray-600 upercase text-base">{{ item.category[locale] }}</span>
            <h5 class="text-gray-900 text-2xl">{{ item.title[locale] }}</h5>
          </div>
          <div class="ml-auto rtl:ml-0 rtl:mr-auto">
            <h6 class="text-gray-400 text-sm">{{ item.year }}</h6>
          </div>
        </div>
        <a :href="item.link" class="link-overlay animsition-link"></a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the data from the JSON file
import data from '@/data/Landing/works.json';
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

/*
|--------------------------------------------------------------------------
| Handle Resize
|--------------------------------------------------------------------------
|
| Function to handle window resize events. Checks if the width of the
| window crosses the 991px threshold and reloads the page if necessary.
| Also updates all ScrollTrigger instances to reflect changes in layout.
|
| @function handleResize - Handles window resizing
| @function window.location.reload - Reloads the page if conditions are met
| @function ScrollTrigger.getAll - Retrieves all ScrollTrigger instances
| @function trigger.update - Updates the ScrollTrigger instance
|
*/
const handleResize = () => {
  const allTriggers = ScrollTrigger.getAll();
  if ((window.innerWidth < 991 && allTriggers.length) || (window.innerWidth > 991 && !allTriggers.length)) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
};

/*
|--------------------------------------------------------------------------
| On Component Mount
|--------------------------------------------------------------------------
|
| Registers the ScrollTrigger plugin and sets up the GSAP animation for
| the panels on mount. If the window width is greater than 991px, it
| animates sections horizontally based on scroll position.
|
| @function onMounted - Lifecycle hook that runs when the component is mounted
| @function gsap.registerPlugin - Registers the ScrollTrigger plugin with GSAP
| @function gsap.to - Creates an animation for the panels with horizontal scrolling
| @property {Array} sections - Array of elements to animate
| @property {Object} scrollTrigger - Configuration object for ScrollTrigger
|   @property {string} trigger - Selector for the trigger element
|   @property {boolean} pin - Pins the trigger element during the scroll
|   @property {number} scrub - Smoothens the animation to match the scroll
|   @property {function} end - End position of the scrollTrigger animation
|
*/
onMounted(() => {
  if (window.innerWidth > 991) {
    let sections = gsap.utils.toArray(".panel");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sections, {
      xPercent: locale.value === 'ar' ? 100 * (sections.length - 1) : -100 * (sections.length - 1),
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
| On Component Unmount
|--------------------------------------------------------------------------
|
| Removes the resize event listener when the component is unmounted to
| prevent memory leaks and unnecessary event handling.
|
| @function onUnmounted - Lifecycle hook that runs when the component is unmounted
| @function window.removeEventListener - Removes the resize event listener
|
*/
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
