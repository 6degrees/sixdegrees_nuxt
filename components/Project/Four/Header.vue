<template>
  <header class="header-project4 bg-img d-flex align-items-end" data-background="/assets/imgs/works/projects/3/first.png" data-overlay-dark="3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="caption text-center">
            <h1 class="text-7xl">{{ $t('components.project4.section.header.title') }}</h1>
          </div>
        </div>
      </div>
      <div class="info mt-80 pt-50 bord-thin-top">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">{{ $t('components.project4.section.header.info.first.title') }}</span>
              <h6 class="opacity-65">{{ $t('components.project4.section.header.info.first.desc') }}</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">{{ $t('components.project4.section.header.info.second.title') }}</span>
              <h6 class="opacity-65">{{ $t('components.project4.section.header.info.second.desc') }}</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">{{ $t('components.project4.section.header.info.third.title') }}</span>
              <h6 class="opacity-65">{{ $t('components.project4.section.header.info.third.desc') }}</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item">
              <span class="opacity-8 mb-5">{{ $t('components.project4.section.header.info.fourth.title') }}</span>
              <h6 class="opacity-65">{{ $t('components.project4.section.header.info.fourth.desc') }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from 'assets/js/loadBackgroudImages';

/*
|--------------------------------------------------------------------------
| onMounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| When the component is mounted, the `loadBackgroudImages` function is called
| to load background images as soon as the component is ready. This ensures
| that the background images are correctly applied and displayed.
|
*/
onMounted(() => {
  loadBackgroudImages();
});
</script>