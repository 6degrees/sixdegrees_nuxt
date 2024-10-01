<template>
  <!-- Start Contact Info Section -->
  <section class="py-[120px] main-bg pt-0">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <span class=" opacity-8 text-slate-400 text-lg md:text-xl">- {{ $t('components.contact.info.section.subtitle') }}</span> <!-- Increased font size -->
        <h3 class="uppercase text-5xl pt-5">{{ $t('components.contact.info.section.title') }}</h3>
      </div>

      <div class="flex flex-wrap justify-center">
        <!-- First Column: Email -->
        <div class="lg:w-1/3 md:w-1/2 px-4 mb-10">
          <div class="item text-center sm:mb-12 md:mb-12">
            <span class=" opacity-8 mb-5 text-lg md:text-xl">{{ $t('components.contact.info.section.email.label') }} :</span> <!-- Increased font size -->
            <h6 class="text-slate-400">
              <a href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>
            </h6>
          </div>
        </div>

        <!-- Second Column: Head Quarter -->
        <div class="lg:w-1/3 md:w-1/2 px-4 mb-10">
          <div class="item text-center sm:mb-12">
            <span class=" opacity-8 mb-5 text-lg md:text-xl">{{ $t('components.contact.info.section.headQuarter.label') }} :</span> <!-- Increased font size -->
            <h6 class="text-slate-400" dir="ltr">{{ $t('components.contact.info.section.headQuarter.address') }}</h6>
          </div>
        </div>

        <!-- Third Column: Phone -->
        <div class="lg:w-1/3 md:w-1/2 px-4">
          <div class="item text-center">
            <span class=" opacity-8 mb-5 text-lg md:text-xl">{{ $t('components.contact.info.section.phone.label') }} :</span> <!-- Increased font size -->
            <h6 class="text-slate-400">
              <a dir="ltr" href="tel:{{ $t('components.contact.info.section.phone.number') }}">
                {{ $t('components.contact.info.section.phone.number') }}
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Info Section -->
</template>
