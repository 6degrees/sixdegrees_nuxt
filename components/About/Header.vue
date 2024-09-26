<template>
  <!-- Start Header Section -->
  <header class="py-[120px] pb-0">
    <div class="container mt-[100px]">
      <div class="flex flex-wrap">
        <div class="lg:w-3/4 lg:ml-1/12 px-4">
          <div>
            <h6 class="uppercase tracking-widest font-light mb-15 text-lg text-slate-400	">{{ $t('components.about.header.section.subtitle') }}</h6>
            <h1 class="uppercase text-8xl">{{ $t('components.about.header.section.title') }}</h1>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full h-[80vh] min-h-[350px] mt-80" >
      <video autoplay loop muted class="w-full h-full object-cover object-center">
                <source src="/assets/vid/C6020.mp4" type="video/mp4" />
              </video>
    </div>
  </header>
  <!-- End Header Section -->
</template>
