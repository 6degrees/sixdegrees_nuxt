<template>
  <!-- Start Header Section -->
  <header class="about-header py-[120px] pb-0">
    <div class="container mt-100">
      <div class="row">
        <div class="col-lg-9 offset-lg-1">
          <div>
            <h6 class="uppercase tracking-widest font-light mb-15 text-lg">{{ $t('components.about.header.section.subtitle') }}</h6>
            <h1 class="uppercase text-8xl">{{ $t('components.about.header.section.title') }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[65vh] min-h-[350px] mt-80" data-overlay-dark="4">
      <img class="w-full h-full object-cover object-center" src="/assets/imgs/b3.png" alt="{{ $t('components.about.header.section.image.altText') }}" />
    </div>
  </header>
  <!-- End Header Section -->
</template>
