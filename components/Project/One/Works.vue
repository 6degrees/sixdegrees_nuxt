<template>
  <!-- Works section specific to Project 1 -->
  <div class="works thecontainer relative z-[7]">
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
const {locale} = useI18n()

function handleResize() {
  const allTriggers = ScrollTrigger.getAll();
  if (window.innerWidth < 991 && allTriggers.length || window.innerWidth > 991 && !allTriggers.length) {
    window.location.reload();
  }

  allTriggers.forEach((trigger) => {
    trigger.update();
  });
}

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

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

</style>
