<template>
  <!-- Start Features Section -->
  <section class="py-[120px]">
    <div class="container">
      <!-- Section Heading -->
      <div class="pb-20 bord-thin-bottom mb-[80px]">
        <div class="flex items-center">
          <div>
            <!-- Main Heading -->
            <h3 class="uppercase font-extralight text-5xl">{{ $t('components.landing.features.section.title') }}</h3>
          </div>
          <div class="ml-auto rtl:ml-0 rtl:mr-auto">
            <div class="flex items-center">
              <!-- Subtitle with Link -->
              <span class="sub-title tracking-wide bord">{{ $t('components.landing.features.section.allFeatures') }}</span>
              <NuxtLink :to="pageRout.toAboutPage()" class="ml-1 rtl:ml-0 rtl:mr-1" aria-label="View all features">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#34D8B1]">
                  <!-- Arrow SVG Icon -->
                  <svg class="w-4 h-4 text-current" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="..." fill="currentColor"></path>
                  </svg>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Features Grid -->
      <div class="flex flex-wrap">
        <!-- Iterate over each feature item -->
        <article v-for="item in data" :key="item.id" class="w-full md:w-1/2 lg:w-1/4 features-items p-3 pt-4">
          <div class="relative">
            <!-- Feature Number -->
            <span class="absolute top-0 ltr:right-0 rtl:left-0">{{ item.numb }}</span>
            <!-- Feature Icon -->
            <div class="w-14">
              <img :src="item.icon" :alt="`${item.title[$i18n.locale]} Icon`" loading="lazy" />
            </div>
            <!-- Feature Title -->
            <h6 class="text-2xl my-10 pb-4">{{ item.title[$i18n.locale] }}</h6>
            <!-- Feature Description -->
            <p class="pb-2">{{ item.content[$i18n.locale] }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- End Features Section -->
</template>

<script setup>
/*
|--------------------------------------------------------------------------
| Data Import
|--------------------------------------------------------------------------
|
| Imports the services data from a JSON file located in the specified path.
| This data will be used in the Features section of the application.
|
| @variable {Object} data - The imported data from services.json
|
*/
import data from '@/data/Landing/services.json';

/*
|--------------------------------------------------------------------------
| pageRout
|--------------------------------------------------------------------------
|
| The pageRout variable represents the page route utility, which provides
| methods for navigating to different pages based on predefined routes.
|
*/
const pageRout = usePageRout();
</script>
