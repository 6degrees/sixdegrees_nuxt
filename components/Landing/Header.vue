<template>
  <!-- Start Land Header -->
  <header class="flex items-center pt-28 pb-24 md:pt-36 md:pb-25 sm:pt-24 sm:pb-20 xs:pt-16 xs:pb-10">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <!-- Left Section: Title and Subtitle -->
        <div class="col-lg-8 mb-2 lg:mb-0">
          <div class="caption text-left rtl:text-right">
            <!-- Main Title and Subtitle, localized using $t for translation -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold uppercase">{{ $t('components.landing.header.title') }}<span
                class="font-extralight text-3xl sm:text-4xl md:text-5xl capitalize">{{
                $t('components.landing.header.subtitle')
              }}</span></h1>
          </div>
        </div>
        <!-- Right Section: Spline 3D Canvas -->
        <div class="col-lg-4">
          <div class="relative w-full h-[500px] flex-grow">
            <div class="relative w-full h-full flex justify-center items-center lg:justify-start lg:items-start">
              <!-- Placeholder for the Spline 3D Canvas -->
              <canvas id="canvas" class="w-full h-full border-none z--1"></canvas>
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

/*
|--------------------------------------------------------------------------
| onMounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| This lifecycle hook initializes the Spline 3D application when the component
| is mounted. It selects the canvas element by ID and loads a Spline scene onto it.
| Additionally, it sets up event listeners to prevent zoom interactions, ensuring
| a consistent user experience across different devices.
|
*/
onMounted(() => {
  // Retrieve the canvas element by its ID
  const canvas = document.getElementById('canvas') as HTMLCanvasElement

  // Initialize the Spline application with the canvas element
  const app = new Application(canvas)

  // Load the Spline 3D scene from the provided URL
  app.load('https://prod.spline.design/rah9TcbBELz5h1ps/scene.splinecode').then(() => {
    app.setSize(1, 1)
  })

  /*
  |--------------------------------------------------------------------------
  | Prevent Mouse Wheel Zooming
  |--------------------------------------------------------------------------
  |
  | The following event listener is added to the canvas to prevent zooming
  | with the mouse wheel, which could interfere with the user's interaction
  | with the 3D scene.
  |
  */
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
  }, {passive: false})

  /*
  |--------------------------------------------------------------------------
  | Prevent Pinch-to-Zoom on Touch Devices
  |--------------------------------------------------------------------------
  |
  | This event listener prevents pinch-to-zoom gestures on touch devices
  | by blocking the default behavior when more than one touch point is detected.
  |
  */
  canvas.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  }, {passive: false})

  /*
  |--------------------------------------------------------------------------
  | Prevent Double-Tap-to-Zoom on Touch Devices
  |--------------------------------------------------------------------------
  |
  | Double-tap zooming is a common gesture on touch devices that can disrupt
  | the interaction with the 3D scene. This listener prevents it by checking
  | the time interval between touchend events.
  |
  */
  let lastTouchEnd = 0
  canvas.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)

  /*
  |--------------------------------------------------------------------------
  | Prevent Key-Based Zooming (Ctrl + +/-)
  |--------------------------------------------------------------------------
  |
  | This listener prevents users from zooming the page using the Ctrl key
  | combined with the '+' or '-' keys, which can alter the display of the
  | 3D scene on the canvas.
  |
  */
  window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && (event.key === '+' || event.key === '-')) {
      event.preventDefault()
    }
  })
})
</script>