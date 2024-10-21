<template>
  <!-- Header section for Project 4 -->
  <header 
    class="header-project4 bg-cover bg-center relative flex items-end h-[400px] lg:h-[700px]" 
    :style="{ backgroundImage: `url('/assets/imgs/works/projects/3/first.jpg')` }"
  >
    <!-- Semi-transparent overlay -->
    <div class="absolute inset-0  "></div>

    <div class="container mx-auto relative z-10 py-20">
      <!-- Title Section -->
      <div class="w-full text-center">
        <h1 class="text-3xl sm:text-5xl lg:text-7xl text-white">{{ $t('components.project4.section.header.title') }}</h1>
      </div>

      <!-- Info Section -->
      <div class="info mt-6 pt-6 border-t border-gray-200">
        <div class="flex flex-wrap justify-between">
          <!-- First Info Block -->
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div class="item text-center">
              <span class="block text-gray-200 opacity-80 mb-2">{{ $t('components.project4.section.header.info.first.title') }}</span>
              <h6>{{ $t('components.project4.section.header.info.first.desc') }}</h6>
            </div>
          </div>
          <!-- Second Info Block -->
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div class="item text-center">
              <span class="block text-gray-200 opacity-80 mb-2">{{ $t('components.project4.section.header.info.second.title') }}</span>
              <h6>{{ $t('components.project4.section.header.info.second.desc') }}</h6>
            </div>
          </div>
          <!-- Third Info Block -->
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div class="item text-center">
              <span class="block text-gray-200 opacity-80 mb-2">{{ $t('components.project4.section.header.info.third.title') }}</span>
              <h6>{{ $t('components.project4.section.header.info.third.desc') }}</h6>
            </div>
          </div>
          <!-- Fourth Info Block -->
          <div class="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <div class="item text-center">
              <span class="block text-gray-200 opacity-80 mb-2">{{ $t('components.project4.section.header.info.fourth.title') }}</span>
              <h6>{{ $t('components.project4.section.header.info.fourth.desc') }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from 'assets/js/loadBackgroudImages';

// Run the function to load background images when the component is mounted
onMounted(() => {
  loadBackgroudImages();
});
</script>
