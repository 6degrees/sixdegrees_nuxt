<template>
  <!-- Header section specific to Project 1 -->
  <header class="header-project1 pt-[100px] lg:pt-[180px] ">
    <!-- Container for aligning content -->
    <div class="container mt-10 lg:mt-20">
      <div class="flex flex-wrap">

        <!-- Left column for the project title and description -->
        <div class="w-full lg:w-1/2 items-center mb-10 lg:mb-0">
          <div class="w-full">
            <!-- Project title -->
            <h1 class="text-3xl lg:text-4xl mb-8 lg:mb-5">{{ $t('components.project1.section.header.title') }}</h1>
            <!-- Project brief description -->
            <p class="text-base lg:text-lg">
              {{ $t('components.project1.section.header.description') }}
            </p>
          </div>
        </div>

        <!-- Right column for additional project information -->
        <div class="w-full lg:w-5/12 lg:ml-1/12">
          <div class="ml-0 lg:ml-20">
            <div class="flex flex-wrap">

              <!-- Information blocks -->
              <div class="w-1/2 mb-5 lg:mb-[30px]">
                <div>
                  <span class="opacity-80 text-sm lg:text-base block mb-2">{{ $t('components.project1.section.header.info.first.label') }}</span>
                  <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project1.section.header.info.first.desc') }}</h6>
                </div>
              </div>
              <div class="w-1/2 mb-5 lg:mb-[30px]">
                <div>
                  <span class="opacity-80 text-sm lg:text-base block mb-2">{{ $t('components.project1.section.header.info.second.label') }}</span>
                  <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project1.section.header.info.second.desc') }}</h6>
                </div>
              </div>
              <div class="w-1/2 mb-5 lg:mb-[30px]">
                <div>
                  <span class="opacity-80 text-sm lg:text-base block mb-2">{{ $t('components.project1.section.header.info.third.label') }}</span>
                  <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project1.section.header.info.third.desc') }}</h6>
                </div>
              </div>
              <div class="w-1/2 mb-5 lg:mb-[30px]">
                <div>
                  <span class="opacity-80 text-sm lg:text-base block mb-2">{{ $t('components.project1.section.header.info.fourth.label') }}</span>
                  <h6 class="text-slate-400 text-sm lg:text-base">{{ $t('components.project1.section.header.info.fourth.desc') }}</h6>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Background image with custom margin -->
    <div class="bg-img h-[300px] lg:h-[540px] py-20 lg:mt-[100px] bg-cover bg-center" style="background-image: url('/assets/imgs/works/projects/0/first.png')"></div>
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
