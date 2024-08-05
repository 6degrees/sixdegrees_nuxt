<template>
  <section class="feat py-[120px]">
    <div class="container">
      <div class="sec-head pb-20 bord-thin-bottom mb-[80px]">
        <div class="d-flex align-items-center">
          <div>
            <h3 class="uppercase font-extralight text-5xl">Why <span class="font-bold uppercase">6 Degrees</span> </h3>
          </div>
          <div class="ml-auto">
            <div class="d-flex align-items-center">
              <span class="sub-title ls1 bord">All Features</span>
              <nuxt-link to="/about" class="arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in data" :key="item.id" class="col-lg-3 col-md-6 items">
          <div class="item">
            <span class="numb">{{ item.numb }}</span>
            <div class="w-14">
              <img :src="item.icon" alt="" />
            </div>
            <h6 class="text-2xl">{{ item.title }}</h6>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/CreativePortfolio/services.json';
</script>

<style>
.items{
  background: radial-gradient(61.42% 73.53% at 94.28% 5.25%, #000 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(87.14% 83.69% at 118.24% 109.77%, rgba(0, 3, 8, 0.5) 0%, rgba(2, 12, 47, 0.50) 100%), radial-gradient(74.87% 191.72% at -31.72% 120.78%, rgba(0, 5, 10, 0.5) 22.83%, rgba(1, 6, 12, 0.5) 100%), radial-gradient(130.11% 116.7% at -47.61% 133.94%, rgba(0, 13, 81, 0.50) 0%, rgba(0, 13, 80, 0.50) 58.33%, rgba(87, 36, 254, 0.00) 100%), #262D67;
}
.items:hover{
  background: linear-gradient(32.84deg, #1c4cf7 2.14%, #0b237d 95.1%);


}
</style>

<!-- 
<template>
  <div class="px-4 ">
    <div class="">
      <h2
        class="font-gothic text-[30px] md:text-[40px] 2xl:text-[65px] text-[#FFFFFF] flex flex-col  mb-4 relative"
      >
        <span class="relative px-4 py-4">
          Why Choose 6 Degrees
        </span>
      </h2>
      <div class="mt-8 md:mt-4 relative z-[1000] flex flex-wrap justify-center my-5">
        <div class="_bg-cards m-2 ">
          <p class="  ">
            Card Title 1
          </p>
          <p class="font-konnect text-[16px] leading-[30px] text-[#fff] pt-6 opacity-[60%]">
            Card Subtitle 1
          </p>
          <p class="text-[#fff] mt-4">Card content 1 goes here.</p>
        </div>

        <div class="_bg-cards m-2">
          <div class="flex">
      
          </div>
          <p class="text-[22px] text-[#fff] leading-[30px] my-6 font-gothic">
            Card Title 2
          </p>
          <p class="font-konnect text-[16px] leading-[30px] text-[#fff] pt-6 opacity-[60%]">
            Card Subtitle 2
          </p>
          <p class="text-[#fff] mt-4">Card content 2 goes here.</p>
        </div>

        <div class="_bg-cards m-2">
          <div class="flex">
          </div>
          <p class="text-[22px] text-[#fff] leading-[30px] my-6 font-gothic">
            Card Title 3
          </p>
          <p class="font-konnect text-[16px] leading-[30px] text-[#fff] pt-6 opacity-[60%]">
            Card Subtitle 3
          </p>
          <p class="text-[#fff] mt-4">Card content 3 goes here.</p>
        </div>

        <div class="_bg-cards m-2">
          <div class="flex">
          </div>
          <p class="">
            Card Title 4
          </p>
          <p class="">
            Card Subtitle 4
          </p>
          <p class="text-[#fff] mt-4">Card content 4 goes here.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
._bg-cards {
  cursor: pointer;
  border-radius: 10px;
  transition: all ease-in 0.7s;
  backdrop-filter: blur(16px) saturate(100%);
  -webkit-backdrop-filter: blur(16px) saturate(100%);
  background-color: rgba(41, 50, 67, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin: 10px;
  padding: 20px;
  height: 300px;
  width: 300px;
}

._bg-cards:hover {
  background: linear-gradient(32.84deg, #1c4cf7 2.14%, #0b237d 95.1%);
}
</style> -->
