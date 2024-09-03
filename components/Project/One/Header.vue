<template>
  <!-- Header section specific to Project 1 -->
  <header class="header-project1">

    <!-- Container for aligning content -->
    <div class="container mt-100">
      <div class="row">

        <!-- Left column for the project title and description -->
        <div class="col-lg-6 valign">
          <div class="full-width mb-30">
            <!-- Project title -->
            <h1>{{ $t('components.project1.section.header.title') }}</h1>
            <!-- Project brief description -->
            <p>
              {{ $t('components.project1.section.header.description') }}
            </p>
          </div>
        </div>

        <!-- Right column for additional project information -->
        <div class="col-lg-5 offset-lg-1">
          <div class="info">
            <div class="row">

              <!-- Information blocks -->
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project1.section.header.info.first.label') }}</span>
                  <h6>{{ $t('components.project1.section.header.info.first.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project1.section.header.info.second.label') }}</span>
                  <h6>{{ $t('components.project1.section.header.info.second.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">{{ $t('components.project1.section.header.info.third.label') }}</span>
                  <h6>{{ $t('components.project1.section.header.info.third.desc') }}</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <span class="opacity-8 mb-5">{{ $t('components.project1.section.header.info.fourth.label') }}</span>
                  <h6>{{ $t('components.project1.section.header.info.fourth.desc') }}</h6>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Background image with custom margin -->
    <div class="bg-img mt-100" data-background="/assets/imgs/works/projects/0/first.png"></div>
  </header>
</template>

<script setup>
// Import the function to load background images
import loadBackgroudImages from 'assets/js/loadBackgroudImages';

// Run the function to load background images when the component is mounted
onMounted(() => {
  loadBackgroudImages();
});
</script>