<template>
  <header class="land-header valign">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-8">
          <div class="caption text-left">
            <h1 class="text-6xl font-bold uppercase">Connecting Futures <span class="font-extralight  text-5xl capitalize">Innovating Saudi Arabia’s Digital Landscape</span> </h1>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="image-section">
            <div class="image-wrapper">
              <!-- Spline Canvas -->
              <canvas id="canvas3d" style="width: 100%; height: 100%;"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

onMounted(() => {
  const canvas = document.getElementById('canvas3d') as HTMLCanvasElement
  if (canvas) {
    const app = new Application(canvas)
    app.load('https://prod.spline.design/rah9TcbBELz5h1ps/scene.splinecode')

    // Prevent zooming with the mouse wheel
    canvas.addEventListener('wheel', (event) => {
      event.preventDefault()
    }, { passive: false })

    // Prevent pinch-to-zoom on touch devices
    canvas.addEventListener('touchmove', (event) => {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    }, { passive: false })

    // Prevent double-tap-to-zoom on touch devices
    let lastTouchEnd = 0
    canvas.addEventListener('touchend', (event) => {
      const now = (new Date()).getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, false)

    // Prevent key-based zoom (Ctrl + +/-)
    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && (event.key === '+' || event.key === '-')) {
        event.preventDefault()
      }
    })
  }
})
</script>

<style scoped>
.image-section {
  position: relative;
  width: 100%;
  height: 500px; /* Adjust this height as needed */
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
