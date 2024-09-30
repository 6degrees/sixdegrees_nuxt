<template>
  <!-- Start Land Header -->
  <header class="flex items-center pt-28 pb-24 md:pt-36 md:pb-25 sm:pt-24 sm:pb-20 xs:pt-16 xs:pb-10">
    <div class="container">
      <div class="flex justify-between items-center">
        <!-- Left Section: Title and Subtitle -->
        <div class="lg:w-2/3 mb-2 lg:mb-0">
          <div class="text-left rtl:text-right">
            <!-- Main Title -->
            <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl uppercase">{{ $t('components.landing.header.title') }}</h1>
            
            <!-- Subtitle, responsive with Tailwind -->
            <h1 class="font-thin text-xl sm:text-2xl md:text-4xl lg:text-5xl capitalize text-slate-400 mt-4 sm:mt-6 md:mt-8">
              {{ $t('components.landing.header.subtitle') }}
            </h1>
          </div>
        </div>

        <!-- Right Section: Spline 3D Canvas -->
        <div class="lg:w-1/3">
          <div class="relative w-full h-[500px] flex-grow">
            <div class="relative w-full h-full flex justify-center items-center lg:justify-start lg:items-start">
              <!-- Placeholder for the Spline 3D Canvas -->
              <canvas id="canvas" class="w-full h-full border-none z--1 lg:z-0"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End Land Header -->
</template>

<script setup lang="ts">
import {Application} from '@splinetool/runtime'

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const app = new Application(canvas)
  app.load('https://prod.spline.design/rah9TcbBELz5h1ps/scene.splinecode');
  canvas.style.willChange = 'transform';

  canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
  }, { passive: false })

  canvas.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, { passive: false })

  let lastTouchEnd = 0
  canvas.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)

  window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && (event.key === '+' || event.key === '-')) {
      event.preventDefault()
    }
  })
})
</script>
