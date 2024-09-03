<template>
  <!-- Start About Us Section -->
  <section class="about">
    <div class="container py-12">
      <div class="row">
        <!-- Left Column with Subtitle -->
        <div class="col-lg-4">
          <div>
            <span class="sub-title mb-4 opacity-90">{{ $t('components.landing.about.section.subtitle') }}</span>
          </div>
        </div>
        <!-- Right Column with Introduction Text -->
        <div class="col-lg-8">
          <div class="intro">
            <div class="text-reval">
              <span class="text text-4xl font-semibold mb-2">{{ $t('components.landing.about.section.intro.line1') }}</span>
              <span class="text text-4xl font-semibold mb-2">{{ $t('components.landing.about.section.intro.line2') }}</span>
              <span class="text text-4xl font-semibold mb-2">{{ $t('components.landing.about.section.intro.line3') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="row justify-content-end">
          <div class="col-lg-8">
            <!-- Service Item: Design -->
            <div class="item py-4 mb-6 bord-thin-top bord-thin-bottom wow fadeInUp" data-wow-delay=".2s">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="mb-8 opacity-8">
                    {{ $t('components.landing.about.section.services.design.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.design.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.design.subtitle') }}</h5>
                </div>
                <div class="arrow-container">
                  <NuxtLink :to="pageRout.toAboutPage()" class="animsition-link">{{ $t('components.landing.about.section.services.design.link') }}</NuxtLink>
                  <span class="text-3xl pe-7s-angle-right"></span>
                </div>
              </div>
            </div>
            <!-- Service Item: Development -->
            <div class="item py-4 mb-6 bord-thin-bottom wow fadeInUp" data-wow-delay=".4s">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="mb-8 opacity-8">
                    {{ $t('components.landing.about.section.services.development.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.development.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.development.subtitle') }}</h5>
                </div>
                <div class="arrow-container">
                  <NuxtLink :to="pageRout.toAboutPage()" class="animsition-link">{{ $t('components.landing.about.section.services.development.link') }}</NuxtLink>
                  <span class="text-3xl pe-7s-angle-right"></span>
                </div>
              </div>
            </div>
            <!-- Service Item: IoT -->
            <div class="item py-4 mb-6 bord-thin-bottom wow fadeInUp" data-wow-delay=".6s">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="mb-8 opacity-8">
                    {{ $t('components.landing.about.section.services.iot.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.iot.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.iot.subtitle') }}</h5>
                </div>
                <div class="arrow-container">
                  <NuxtLink :to="pageRout.toAboutPage()" class="animsition-link">{{ $t('components.landing.about.section.services.iot.link') }}</NuxtLink>
                  <span class="text-3xl pe-7s-angle-right"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->
</template>

<script setup>
/*
|--------------------------------------------------------------------------
| pageRout
|--------------------------------------------------------------------------
|
| The pageRout variable represents the page route utility, which provides
| methods for navigating to different pages based on predefined routes.
|
*/
const pageRout = usePageRout()
</script>

<style scoped>
.arrow-container {
  display: flex;
  align-items: center;
}

.pe-7s-angle-right {
  margin-left: 10px; /* Add some space between the link and the arrow */
}

.animsition-link {
  text-decoration: none;
}
</style>
