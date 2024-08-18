<template>
  <header class="header-project3 bg-img d-flex align-items-end" data-background="/assets/imgs/works/projects/3/1.jpg"  data-overlay-dark="9">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="caption">
            <h1>{{ $t('components.project3.header.title') }}</h1>
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