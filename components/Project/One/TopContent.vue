<template>
  <!-- Top content section specific to Project 1 -->
  <section class="py-[120px] border-b border-[rgba(255,255,255,0.2)]">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="lg:w-5/12">
          <h2 class="mb-50 text-4xl" v-html="$t('components.project1.section.top_content.title')"></h2>
        </div>
        <div class="lg:w-7/12">
          <div>
            <h5 class="mb-[30px] font-normal leading-[40px] text-2xl">
              {{ $t('components.project1.section.top_content.subtitle') }}
            </h5>
            <p class="text-slate-400 text-lg md:text-xl">
              {{ $t('components.project1.section.top_content.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
