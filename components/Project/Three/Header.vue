<template>
  <header class="header-project3 bg-img flex items-end" data-background="/assets/imgs/works/projects/2/first.png"  data-overlay-dark="9">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="text-8xl	">
            <h1>{{ $t('components.project3.section.header.title') }}</h1>
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