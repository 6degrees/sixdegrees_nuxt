<template>
  <!-- Start Clients Section -->
  <div class="clients-carso">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="swiper5">
            <!-- Swiper container for the client logos carousel -->
            <Swiper id="content-carousel-container-unq-clients" class="swiper-container" v-bind="swiperOptions">
              <SwiperSlide v-for="item in data" :key="item.id">
                <!-- Brand Item -->
                <div class="brand-item">
                  <div class="icon-img-100">
                    <a href="#">
                      <!-- Client Logo Image -->
                      <img :src="item.img"  alt="Client Logo"/>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Clients Section -->
</template>

<script setup>
import data from '@/data/Landing/brands.json'; // Import the JSON data for use in the Swiper component

/*
|--------------------------------------------------------------------------
| Swiper Options
|--------------------------------------------------------------------------
|
| Configuration for the Swiper slider component. These options control the
| behavior and appearance of the slider.
|
| @type {Object}
|
*/
const swiperOptions = {
  slidesPerView: 4, // Number of slides visible at a time
  loop: true, // Enable infinite loop mode
  spaceBetween: 40, // Space between slides in pixels
  autoplay: {
    delay: 2500, // Delay between slide transitions in milliseconds
    disableOnInteraction: false, // Keep autoplay active after user interactions
  },
};
</script>

