<template>
  <section class="py-[120px] main-bg px-4 ">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="lg:w-5/6">
          <div>
            <span class="tracking-widest font-light text-sm uppercase mb-15 opacity-8 text-slate-400">
              - {{ $t('components.about.intro.section.whoWeAre.subtitle') }}
            </span>
            <div>
              <h2 class="text-4xl uppercase mb-30 mt-10">
                <span>{{ $t('components.about.intro.section.whoWeAre.text') }}</span>
              </h2>
            </div>
            <p class="text-lg pt-5 ">
              {{ $t('components.about.intro.section.whoWeAre.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="lg:w-5/6 lg:ml-1/12">
          <div class="flex flex-wrap mt-20">
            <div class="md:w-1/3 sm:mb-[30px]">
              <ul class=" m-0 p-0">
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.customSoftwareDevelopment') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.mobileAppDevelopment') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.websiteDevelopment') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.uiUxDesign') }}</li>
              </ul>
            </div>
            <div class="md:w-1/3 sm:mb-[30px]">
              <ul class=" m-0 p-0">
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.iotSmartBuildingAutomation') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.cloudSolutions') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.itOperationsSupport') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.businessIntelligenceDataAnalytics') }}</li>
              </ul>
            </div>
            <div class="md:w-1/3">
              <ul class=" m-0 p-0">
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.thirdPartyIntegration') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.seoDigitalMarketing') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.itConsultingStrategy') }}</li>
                <li class="text-lg mb-[15px]"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.erp') }}</li>

              </ul>
            </div>
          </div>
          <div class="flex flex-wrap text-8xl leading-none mt-20">
            <div class="lg:w-1/3">
              <div class="md-mb50">
                <h3 class="stroke font-medium pb-[30px] mb-[30px] border-b border-[rgba(255,255,255,0.2)]">{{ $t('components.about.intro.section.numbers.years') }}</h3>
                <h6 class="text-base text-slate-400">{{ $t('components.about.intro.section.numbers.yearsOfExperience') }}</h6>
              </div>
            </div>
            <div class="lg:w-1/3">
              <div class="md-mb50">
                <h3 class="stroke font-medium pb-[30px] mb-[30px] border-b border-[rgba(255,255,255,0.2)]">{{ $t('components.about.intro.section.numbers.completed') }}</h3>
                <h6 class="text-base text-slate-400">{{ $t('components.about.intro.section.numbers.completedProjects') }}</h6>
              </div>
            </div>
            <div class="lg:w-1/3">
              <div>
                <h3 class="stroke font-medium pb-[30px] mb-[30px] border-b border-[rgba(255,255,255,0.2)]">{{ $t('components.about.intro.section.numbers.clients') }}</h3>
                <h6 class="text-base text-slate-400">{{ $t('components.about.intro.section.numbers.satisfiedClients') }}</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
