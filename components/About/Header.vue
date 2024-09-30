<template>
  <!-- Start Header Section -->
  <header class="py-[120px] pb-0">
    <div class="container mt-[100px]">
      <div class="flex flex-wrap">
        <div class="lg:w-3/4 lg:ml-1/12 px-4">
          <div>
            <h6 class="uppercase tracking-widest font-light mb-15 text-lg text-slate-400">{{ $t('components.about.header.section.subtitle') }}</h6>
            <h1 class="uppercase text-8xl">{{ $t('components.about.header.section.title') }}</h1>
          </div>
        </div>
      </div>
    </div>


    <div class="relative w-full min-h-[350px] mt-80 pt-[56.25%] lg:pt-0 lg:h-[800px] xl:h-[900px]">
      <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/assets/vid/C6020.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </header>
  <!-- End Header Section -->
</template>
