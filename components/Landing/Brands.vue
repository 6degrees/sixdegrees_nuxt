<template>
  <div class="clients-carso">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="swiper5">
            <Swiper id="content-carousel-container-unq-clients" class="swiper-container" v-bind="swiperOptions">
              <SwiperSlide v-for="item in data" :key="item.id">
                <div class="item">
                  <div class="img icon-img-100">
                    <a href="#0">
                      <img :src="item.img" alt="" class="brand-image"/>
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
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css'; // Make sure you have Swiper CSS
import data from '@/data/Landing/brands.json';

const swiperOptions = {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
};
</script>

<style scoped>
.brand-image {
  width: 100%;  
  height: 100%; 
  object-fit: cover; 
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px; 
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

