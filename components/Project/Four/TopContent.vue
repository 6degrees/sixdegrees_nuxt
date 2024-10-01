<template>
  <section class="py-[120px]">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <div class="w-full lg:w-8/12">
          <div>
            <!-- Title -->
            <h4 class="mb-8 text-4xl">{{ $t('components.project4.section.top_content.title') }}</h4>

            <!-- Subtitle -->
            <div class="text">
              <h5 class="mb-12 font-normal leading-10 text-2xl">
                {{ $t('components.project4.section.top_content.subtitle') }}
              </h5>

              <!-- Description -->
              <div class="flex justify-end">
                <div class="w-full lg:w-9/12">
                  <p class="text-slate-400 text-lg md:text-xl">
                    {{ $t('components.project4.section.top_content.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
