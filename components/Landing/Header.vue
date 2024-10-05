<template>
  <header class="flex items-center pt-32 pb-32">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="lg:w-2/3 mb-2 lg:mb-0">
          <div class="text-left rtl:text-right">
            <h1 class="text-4xl sm:text-5xl md:text-6xl uppercase">{{ $t('components.landing.header.title') }}</h1>
            <h1 class="font-thin text-xl sm:text-2xl md:text-xl lg:text-3xl uppercase text-slate-400 mt-4 sm:mt-6 md:mt-8">
              {{ $t('components.landing.header.subtitle') }}
            </h1>
          </div>
        </div>
        <div class="lg:w-1/3 hidden md:block">
          <div class="relative w-full h-[500px] flex-grow">
            <canvas id="canvas" class="w-full h-full border-none z--1 lg:z-0"></canvas>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Application } from '@splinetool/runtime'
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  // Defer loading of the 3D canvas
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/rah9TcbBELz5h1ps/scene.splinecode');
        observer.unobserve(entry.target); // Stop observing once loaded
      }
    });
  });

  observer.observe(canvas); // Start observing the canvas
});
</script>
