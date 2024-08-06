<template>
  <section class="py-[120px] main-bg ">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div class="">
            <span class=" tracking-widest font-light text-sm uppercase mb-15 opacity-8">- Who We Are?</span>
            <div class="text-reval">
              <h2 class="text-5xl uppercase mb-30">
                <span class="text">an IT business enabler and partner</span>
              </h2>
            </div>
            <p>
              We are a pioneering tech company based in Saudi Arabia, dedicated to driving digital transformation and innovation across various sectors. Our journey began with a vision to bridge the gap between technology and business needs, and today, we are proud to be a trusted partner for numerous businesses in the Kingdom.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row mt-80">
            <div class="col-md-4 sm-mb30">
              <ul class="list m-0 p-0">
                <li class="text-lg mb-15"><span class="mr-10">+</span> UI/UX</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Website Develoment</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Application Development</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> SEO</li>
              </ul>
            </div>
            <div class="col-md-4 sm-mb30">
              <ul class="list rest">
                <li class="text-lg mb-15"><span class="mr-10">+</span> Hardware import</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Smart Busilding Automation</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> API Integration</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Data Migration</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list rest">
                <li class="text-lg mb-15"><span class="mr-10">+</span> Hardware import</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Smart Busilding Automation</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> API Integration</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> Data Migration</li>
              </ul>
            </div>
          </div>
          <div class="row numbers mt-80">
            <div class="col-lg-4">
              <div class="item md-mb50">
                <h3 class="stroke font-medium	  pb-30 mb-30 bord-thin-bottom">+25</h3>
                <h6 class="text-base">Years of Experince</h6>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item md-mb50">
                <h3 class="stroke font-medium	 pb-30 mb-30 bord-thin-bottom">+50</h3>
                <h6 class="text-base">Completed Projects</h6>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item">
                <h3 class="stroke font-medium	  pb-30 mb-30 bord-thin-bottom">+200</h3>
                <h6 class="text-base">Satisfied Clients</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
