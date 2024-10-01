<template>
  <section class="py-[120px] main-bg px-4">
    <div class="container">
      <!-- Who We Are Section -->
      <div class="flex flex-wrap">
        <div class="lg:w-5/6">
          <div>
            <!-- Subtitle and Description -->
            <span class="tracking-widest font-light text-sm uppercase mb-15 opacity-8 text-slate-400">
              - {{ $t('components.about.intro.section.whoWeAre.subtitle') }}
            </span>
            <div>
              <h2 class="text-4xl uppercase mb-30 mt-10">
                <span>{{ $t('components.about.intro.section.whoWeAre.text') }}</span>
              </h2>
            </div>
            <p class="text-lg">
              {{ $t('components.about.intro.section.whoWeAre.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Services Table Section with Line Between Services and Outer Border -->
      <div class="w-full mt-20 pt-6">
        <div class="overflow-x-auto">
          <table class="table-auto w-full border border-[rgba(255,255,255,0.2)] border-collapse min-w-full">
            <tbody>
              <tr>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.customSoftwareDevelopment') }}
                </td>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.mobileAppDevelopment') }}
                </td>
                <td class="p-4 border-b border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.websiteDevelopment') }}
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.uiUxDesign') }}
                </td>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.iotSmartBuildingAutomation') }}
                </td>
                <td class="p-4 border-b border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.cloudSolutions') }}
                </td>
              </tr>
              <tr>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.itOperationsSupport') }}
                </td>
                <td class="p-4 border-b border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.businessIntelligenceDataAnalytics') }}
                </td>
                <td class="p-4 border-b border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.thirdPartyIntegration') }}
                </td>
              </tr>
              <tr>
                <td class="p-4 border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.seoDigitalMarketing') }}
                </td>
                <td class="p-4 border-r border-[rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-[#1c4cf7] hover:to-[#0b237d] transition-all duration-300 ease-in-out sm:w-1/3 w-full block sm:table-cell">
                  {{ $t('components.about.intro.section.services.itConsultingStrategy') }}
                </td>
                <td class="p-4 sm:w-1/3 w-full block sm:table-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Numbers Section (Same as Original) -->
      <div class="flex flex-wrap text-8xl leading-none mt-80">
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
  </section>
</template>

<script setup>

</script>
