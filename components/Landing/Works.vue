<template>
  <section class="works thecontainer w-[300vw] min-h-[95vh] flex flex-nowrap pl-[100px] relative z-0  sub-bg">
    <div v-for="item in data" :key="item.id" class="panel">
      <div class="item">
        <div class="h-[400px] min-h-[50vh]">
          <img :src="item.img" class="w-full h-full object-cover object-center" alt="" />
        </div>
        <div class="px-2.5 py-6 border-b border-[rgba(12,0,0,0.2)] d-flex align-items-center">
          <div>
            <span class="text-gray-600 upercase text-base">{{ item.category }}</span>
            <h5 class="text-gray-900 text-2xl">{{ item.title }}</h5>
          </div>
          <div class="ml-auto ">
            <h6 class="text-gray-400 text-sm">{{ item.year }}</h6>
          </div>
        </div>
        <a :href="item.link" class="link-overlay animsition-link"></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
// Import the data from the JSON file
import data from '@/data/Landing/works.json';

const handleResize = () => {
  const allTriggers = ScrollTrigger.getAll();
  if ((window.innerWidth < 991 && allTriggers.length) || (window.innerWidth > 991 && !allTriggers.length)) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
};

// Register the ScrollTrigger plugin and animate on component mount
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

// Remove the resize event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
