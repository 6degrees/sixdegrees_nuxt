<template>
  <!-- Top content section specific to Project 1 -->
  <section class="section-padding bord-thin-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h2 class="mb-50" v-html="$t('components.project1.section.top_content.title')"></h2>
        </div>
        <div class="col-lg-7">
          <div class="text">
            <h5 class="mb-30 fw-400 line-height-40">
              {{ $t('components.project1.section.top_content.subtitle') }}
            </h5>
            <p class="fz-18">
              {{ $t('components.project1.section.top_content.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
