<template>
  <!-- Bottom content section specific to Project 1 -->
  <section class="py-[120px] border-t border-[rgba(255,255,255,0.2)]">
    <div class="container">
      <div class="flex flex-wrap justify-center">
        <div class="lg:w-7/12">
          <div class="">
            <h2 class="mb-[50px] text-4xl">
              {{ $t('components.project1.section.bottom_content.title') }}
            </h2>
            <h5 class="mb-[30px] font-normal text-2xl">
              {{ $t('components.project1.section.bottom_content.subtitle') }}
            </h5>
            <p class="text-lg md:text-xl text-slate-400">
              {{ $t('components.project1.section.bottom_content.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>