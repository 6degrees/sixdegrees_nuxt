<template>
  <!-- Start Header Section -->
  <header class="py-[60px] lg:py-[120px] pb-0">
    <div class="container mt-10 lg:mt-20 mb-10 lg:mb-20">
      <div class="flex flex-wrap">
        <!-- Text Section -->
        <div class="w-full lg:w-1/2 flex items-center">
          <div class="w-full mb-[20px] lg:mb-[30px]">
            <h1 class="text-3xl lg:text-4xl mb-4 lg:mb-5">{{ $t('components.project2.section.header.title') }}</h1>
            <p class="text-base lg:text-lg">{{ $t('components.project2.section.header.description') }}</p>
          </div>
        </div>

        <!-- Info Section -->
        <div class="w-full lg:w-5/12 lg:ml-1/12 mt-10 lg:mt-0">
          <div class="lg:ml-10">
            <div class="flex flex-wrap">
              <div class="w-1/2 mb-4 lg:mb-[30px]">
                <span class="opacity-80 text-sm lg:text-base block">{{ $t('components.project2.section.header.info.first.label') }}:</span>
                <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project2.section.header.info.first.desc') }}</h6>
              </div>
              <div class="w-1/2 mb-4 lg:mb-[30px]">
                <span class="opacity-80 text-sm lg:text-base block">{{ $t('components.project2.section.header.info.second.label') }}:</span>
                <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project2.section.header.info.second.desc') }}</h6>
              </div>
              <div class="w-1/2 mb-4 lg:mb-[30px]">
                <span class="opacity-80 text-sm lg:text-base block">{{ $t('components.project2.section.header.info.third.label') }}:</span>
                <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project2.section.header.info.third.desc') }}</h6>
              </div>
              <div class="w-1/2 mb-4 lg:mb-[30px]">
                <span class="opacity-80 text-sm lg:text-base block">{{ $t('components.project2.section.header.info.fourth.label') }}:</span>
                <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project2.section.header.info.fourth.desc') }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Swiper Section -->
    <div class="w-full m-0 p-3">
      <div class="w-full lg:w-[130%] ml-0 lg:ml-[-15%]">
        <div id="content-carousel-container-unq-project2" class="swiper-container">
          <Swiper :modules="swiperOptions.modules" :slides-per-view="swiperOptions.slidesPerView" :loop="swiperOptions.loop" :centeredSlides="swiperOptions.centeredSlides" :spaceBetween="swiperOptions.spaceBetween" :breakpoints="swiperOptions.breakpoints" autoplay="true">
            <SwiperSlide>
              <div class="relative w-full h-[50vh] lg:h-[75vh] min-h-[300px] lg:min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/first.png" alt="AMH" class="absolute inset-0 w-full h-full object-cover"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full h-[50vh] lg:h-[75vh] min-h-[300px] lg:min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/second.png" alt="AMH" class="absolute inset-0 w-full h-full object-cover"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="relative w-full h-[50vh] lg:h-[75vh] min-h-[300px] lg:min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/third.png" alt="AMH" class="absolute inset-0 w-full h-full object-cover"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Import necessary Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

// Swiper configuration options with responsive breakpoints
const swiperOptions = {
  modules: [Navigation, Autoplay],
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1, // 1 slide for small screens
    },
    768: {
      slidesPerView: 1.5, // 1.5 slides for medium screens
    },
    1024: {
      slidesPerView: 2, // 2 slides for larger screens
    },
  },
};
</script>
