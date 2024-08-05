<template>
  <header class="header-project4 bg-img d-flex align-items-end" data-background="/assets/imgs/works/projects/1/1.jpg"
    data-overlay-dark="3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="caption text-center">
            <h1>Promotion Efficency</h1>
          </div>
        </div>
      </div>
      <div class="info mt-80 pt-50 bord-thin-top">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">First :</span>
              <h6>Desc</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">Second :</span>
              <h6>Desc</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">Third :</span>
              <h6>Desc</h6>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="item">
              <span class="opacity-8 mb-5">Fourth :</span>
              <h6>Desc</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>