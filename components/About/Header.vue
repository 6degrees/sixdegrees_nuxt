<template>
  <!-- Start Header Section -->
  <header class="py-20 pb-0">
    <div class="container mx-auto mt-16 lg:mt-24 px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 lg:ml-1/12">
          <div>
            <h6 class="uppercase tracking-widest font-light mb-4 text-base lg:text-lg text-slate-400">
              {{ $t('components.about.header.section.subtitle') }}
            </h6>
            <h1 class="uppercase text-4xl sm:text-6xl lg:text-8xl leading-tight lg:leading-none pb-5">
              {{ $t('components.about.header.section.title') }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="relative w-full h-0 mt-10 lg:mt-20 pt-[56.25%] lg:pt-0 lg:h-[800px] xl:h-[900px]">
      <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/assets/vid/C6020.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </header>
  <!-- End Header Section -->
</template>
