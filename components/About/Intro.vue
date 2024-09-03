<template>
  <section class="py-[120px] main-bg ">
    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <div>
            <span class="tracking-widest font-light text-sm uppercase mb-15 opacity-8">
              - {{ $t('components.about.intro.section.whoWeAre.subtitle') }}
            </span>
            <div class="text-reval">
              <h2 class="text-5xl uppercase mb-30">
                <span class="text">{{ $t('components.about.intro.section.whoWeAre.text') }}</span>
              </h2>
            </div>
            <p>
              {{ $t('components.about.intro.section.whoWeAre.description') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row mt-80">
            <div class="col-md-4 sm-mb30">
              <ul class="list rest">
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.customSoftwareDevelopment') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.mobileAppDevelopment') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.websiteDevelopment') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.uiUxDesign') }}</li>
              </ul>
            </div>
            <div class="col-md-4 sm-mb30">
              <ul class="list rest">
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.iotSmartBuildingAutomation') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.cloudSolutions') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.itOperationsSupport') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.businessIntelligenceDataAnalytics') }}</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list rest">
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.thirdPartyIntegration') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.seoDigitalMarketing') }}</li>
                <li class="text-lg mb-15"><span class="mr-10">+</span> {{ $t('components.about.intro.section.services.itConsultingStrategy') }}</li>
              </ul>
            </div>
          </div>
          <div class="row numbers mt-80">
  <div class="col-lg-4">
    <div class="item md-mb50">
      <h3 class="stroke font-medium pb-30 mb-30 bord-thin-bottom">+12</h3>
      <h6 class="text-base">{{ $t('components.about.intro.section.numbers.yearsOfExperience') }}</h6>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="item md-mb50">
      <h3 class="stroke font-medium pb-30 mb-30 bord-thin-bottom">+300</h3>
      <h6 class="text-base">{{ $t('components.about.intro.section.numbers.completedProjects') }}</h6>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="item">
      <h3 class="stroke font-medium pb-30 mb-30 bord-thin-bottom">+200</h3>
      <h6 class="text-base">{{ $t('components.about.intro.section.numbers.satisfiedClients') }}</h6>
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
