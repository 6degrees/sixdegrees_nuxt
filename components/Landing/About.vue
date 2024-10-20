<template>
  <!-- Start About Us Section -->
  <section>
    <div class="container py-12">
      <div class="flex flex-wrap">
        <!-- Left Column with Subtitle -->
        <div class="lg:w-1/3">
          <div>
            <!-- Increased font size of the subtitle -->
            <span class="uppercase text-xl lg:text-2xl">{{ $t('components.landing.about.section.subtitle') }}</span>
          </div>
        </div>
        <!-- Right Column with Introduction Text -->
        <div class="lg:w-2/3">
          <div>
            <div>
              <span class="text-5xl font-semibold mb-2">{{ $t('components.landing.about.section.intro.line1') }} </span> 
              <span class="text-5xl font-semibold mb-2"> {{ $t('components.landing.about.section.intro.line2') }} </span> <br/>
              <span class="text-5xl font-semibold mb-2"> {{ $t('components.landing.about.section.intro.line3') }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="flex flex-wrap justify-end">
          <div class="lg:w-2/3">
            <!-- Service Item: Design -->
            <div class="py-4 mb-6 border-t border-t-[rgba(255,255,255,0.2)] border-b border-b-[rgba(255,255,255,0.2)] wow fadeInUp" data-wow-delay=".2s">
              <div class="flex items-center justify-between">
                <div>
                  <span class="mb-8 opacity-8 text-slate-500">
                    {{ $t('components.landing.about.section.services.design.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.design.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.design.subtitle') }}</h5>
                </div>
                <div class="flex items-center text-slate-500">
                  <NuxtLink :to="pageRout.toAboutPage()" class="animsition-link">{{ $t('components.landing.about.section.services.design.link') }}</NuxtLink>
                  <span :class="[$i18n.locale === 'en' ? 'pe-7s-angle-right' : 'pe-7s-angle-left']" class="text-3xl"></span>
                </div>
              </div>
            </div>
            <!-- Service Item: Development -->
            <div class="py-4 mb-6 border-b border-b-[rgba(255,255,255,0.2)] wow fadeInUp" data-wow-delay=".4s">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="mb-8 opacity-8 text-slate-500">
                    {{ $t('components.landing.about.section.services.development.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.development.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.development.subtitle') }}</h5>
                </div>
                <div class="flex items-center text-slate-500">
                  <NuxtLink :to="pageRout.toAboutPage()">{{ $t('components.landing.about.section.services.development.link') }}</NuxtLink>
                  <span :class="[$i18n.locale === 'en' ? 'pe-7s-angle-right' : 'pe-7s-angle-left']" class="text-3xl"></span>
                </div>
              </div>
            </div>
            <!-- Service Item: IoT -->
            <div class="py-4 mb-6 border-b border-b-[rgba(255,255,255,0.2)] wow fadeInUp" data-wow-delay=".6s">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <span class="mb-8 opacity-8 text-slate-500">
                    {{ $t('components.landing.about.section.services.iot.number') }} /
                    <span class="uppercase ml-5">{{ $t('components.landing.about.section.services.iot.title') }}</span>
                  </span>
                  <h5 class="text-2xl">{{ $t('components.landing.about.section.services.iot.subtitle') }}</h5>
                </div>
                <div class="flex items-center text-slate-500">
                  <NuxtLink :to="pageRout.toAboutPage()">{{ $t('components.landing.about.section.services.iot.link') }}</NuxtLink>
                  <span :class="[$i18n.locale === 'en' ? 'pe-7s-angle-right' : 'pe-7s-angle-left']" class="text-3xl"></span>
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
const pageRout = usePageRout();
</script>
