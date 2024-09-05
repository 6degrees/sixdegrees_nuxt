<template>
  <!-- Header section specific to Project 1 -->
  <header class="header-project1 pt-[180px] pb-0">
    <!-- Container for aligning content -->
    <div class="container mt-100">
      <div class="flex flex-wrap">

        <!-- Left column for the project title and description -->
        <div class="lg:w-1/2 items-center">
          <div class="w-full mb-[30px]">
            <!-- Project title -->
            <h1 class="text-4xl mb-5">{{ $t('components.project1.section.header.title') }}</h1>
            <!-- Project brief description -->
            <p>
              {{ $t('components.project1.section.header.description') }}
            </p>
          </div>
        </div>

        <!-- Right column for additional project information -->
        <div class="lg:w-5/12 lg:ml-1/12">
          <div class=" ml-20">
            <div class="flex flex-wrap">

              <!-- Information blocks -->
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5 ">{{ $t('components.project1.section.header.info.first.label') }}</span>
                  <h6 class="text-slate-400">{{ $t('components.project1.section.header.info.first.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5">{{ $t('components.project1.section.header.info.second.label') }}</span>
                  <h6 class="text-slate-400">{{ $t('components.project1.section.header.info.second.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class=" mb-[30px]">
                  <span class="opacity-80 mb-5">{{ $t('components.project1.section.header.info.third.label') }}</span>
                  <h6 class="text-slate-400">{{ $t('components.project1.section.header.info.third.desc') }}</h6>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class="">
                  <span class="opacity-80 mb-5">{{ $t('components.project1.section.header.info.fourth.label') }}</span>
                  <h6 class="text-slate-400">{{ $t('components.project1.section.header.info.fourth.desc') }}</h6>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Background image with custom margin -->
    <div class="bg-img h-[540px] mt-[100px]" data-background="/assets/imgs/works/projects/0/first.png"></div>
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