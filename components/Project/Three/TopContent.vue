<template>
  <section class="py-[120px]">
    <div class="container mx-auto">
      <!-- Top Info Section -->
      <div class="info mb-20 pb-20 border-b border-[rgba(255,255,255,0.2)]">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="item mb-8">
              <span class="opacity-80 block mb-2">{{ $t('components.project3.section.top_content.item1.label') }}</span>
              <h6 class="text-slate-400">{{ $t('components.project3.section.top_content.item1.description') }}</h6>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="item mb-8">
              <span class="opacity-80 block mb-2">{{ $t('components.project3.section.top_content.item2.label') }}</span>
              <h6 class="text-slate-400">{{ $t('components.project3.section.top_content.item2.description') }}</h6>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="item mb-8">
              <span class="opacity-80 block mb-2">{{ $t('components.project3.section.top_content.item3.label') }}</span>
              <h6 class="text-slate-400">{{ $t('components.project3.section.top_content.item3.description') }}</h6>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="item">
              <span class="opacity-80 block mb-2">{{ $t('components.project3.section.top_content.item4.label') }}</span>
              <h6 class="text-slate-400">{{ $t('components.project3.section.top_content.item4.description') }}</h6>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Challenge Section -->
      <div class="flex justify-center">
        <div class="w-full lg:w-11/12">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-5/12 p-4">
              <h4 class="mb-12 text-4xl">{{ $t('components.project3.section.top_content.challengeTitle') }}</h4>
            </div>
            <div class="w-full lg:w-7/12 p-4">
              <div class="text">
                <h5 class="mb-8 font-normal leading-10 text-2xl">{{ $t('components.project3.section.top_content.challengeSubtitle') }}</h5>
                <p class="text-slate-400 text-lg md:text-xl">{{ $t('components.project3.section.top_content.challengeDescription') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
