<template>
  <header class="header-project2 section-padding pb-0">
    <div class="container mt-80 mb-80">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="full-width mb-30">
            <h1 class="fz-60">AlMoajil Hospitality</h1>
            <p>We provide digital experience services to startups and small businesses. We help our clients succeed by
              creating brand identities.</p>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="info">
            <div class="row">
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">First :</span>
                  <h6>Desc</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Second :</span>
                  <h6>Desc</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Third :</span>
                  <h6>Desc</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <span class="opacity-8 mb-5">Fourth :</span>
                  <h6>Desc</h6>
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
                <img src="/assets/imgs/works/projects/2/1.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img">
                <img src="/assets/imgs/works/projects/2/2.jpg" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img">
                <img src="/assets/imgs/works/projects/2/3.jpg" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
};
</script>
