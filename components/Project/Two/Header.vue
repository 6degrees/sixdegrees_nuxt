<template>
  <header class="py-[120px] pb-0">
    <div class="container mt-20 mb-20">
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 flex items-center">
          <div class="w-full mb-[30px]">
            <h1 class="text-4xl mb-5">{{ $t('components.project2.section.header.title') }}</h1>
            <p>{{ $t('components.project2.section.header.description') }}</p>
          </div>
        </div>
        <div class="lg:w-5/12 lg:ml-1/12">
          <div class="ml-20">
            <div class="flex flex-wrap">
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5">{{ $t('components.project2.section.header.info.first.label') }} :</span>
                  <h6 class="text-slate-400">{{ $t('components.project2.section.header.info.first.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5">{{ $t('components.project2.section.header.info.second.label') }} :</span>
                  <h6 class="text-slate-400">{{ $t('components.project2.section.header.info.second.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5">{{ $t('components.project2.section.header.info.third.label') }} :</span>
                  <h6 class="text-slate-400">{{ $t('components.project2.section.header.info.third.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class="">
                  <span class="opacity-80 mb-5">{{ $t('components.project2.section.header.info.fourth.label') }} :</span>
                  <h6 class="text-slate-400">{{ $t('components.project2.section.header.info.fourth.desc') }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full m-0 p-0">
      <div class="w-[130%] ml-[-15%]">
        <div id="content-carousel-container-unq-project2" class="swiper-container">
          <swiper v-bind="swiperOptions" class="swiper-container" id="content-carousel-container-unq-project2">
            <swiper-slide>
              <div class="h-[75vh] min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/first.png" alt="AMH" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="h-[75vh] min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/second.png" alt="AMH" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="h-[75vh] min-h-[500px]">
                <img src="/assets/imgs/works/projects/1/third.png" alt="AMH" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Import necessary Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

// Swiper configuration options
const swiperOptions = {
  modules: [Navigation, Autoplay], // Enable Navigation and Autoplay modules
  slidesPerView: 2, // Number of slides visible at a time
  loop: true, // Enable infinite looping of slides
  centeredSlides: true, // Center slides in the view
  spaceBetween: 30, // Space between slides
};
</script>