<template>
  <header class="header-project2 section-padding pb-0">
    <div class="container mt-80 mb-80">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="full-width mb-30">
            <h1 class="fz-60">{{ $t('components.project2.section.header.title') }}</h1>
            <p>{{ $t('components.project2.section.header.description') }}</p>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="info">
            <div class="row">
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project2.section.header.info.first.label') }} :</span>
                  <h6>{{ $t('components.project2.section.header.info.first.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project2.section.header.info.second.label') }} :</span>
                  <h6>{{ $t('components.project2.section.header.info.second.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project2.section.header.info.third.label') }} :</span>
                  <h6>{{ $t('components.project2.section.header.info.third.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <span class="opacity-8 mb-5">{{ $t('components.project2.section.header.info.fourth.label') }} :</span>
                  <h6>{{ $t('components.project2.section.header.info.fourth.desc') }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid rest">
      <div class="project2">
        <div id="content-carousel-container-unq-project2" class="swiper-container">
          <swiper v-bind="swiperOptions" class="swiper-container" id="content-carousel-container-unq-project2">
            <swiper-slide>
              <div class="img">
                <img src="/assets/imgs/works/projects/1/first.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img">
                <img src="/assets/imgs/works/projects/1/second.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img">
                <img src="/assets/imgs/works/projects/1/third.png" alt="" />
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