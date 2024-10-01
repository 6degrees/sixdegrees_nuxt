<template>
  <!-- Start Contact Header Section -->
  <header class="contact-header py-20 md:py-32">
    <div class="container mx-auto px-4 md:mt-24">
      <!-- Flexbox for responsiveness -->
      <div class="flex flex-wrap justify-center py-20">
        <!-- Title Section -->
        <div class="w-full">
          <div class="text-center mb-10 md:mb-20" dir="ltr">
            <!-- Subtitle with image -->
            <h6 class="sub-title mb-4 flex items-center justify-center text-lg md:text-xl">
              <span class="mr-2 w-6 h-6">
                <img src="/assets/imgs/svg-assets/hi.png" alt="Hi" class="w-full h-full" />
              </span>
              {{ $t('components.contact.header.section.subtitle') }}
            </h6>
            <!-- Main Title with responsive font size -->
            <h1 class="text-3xl md:text-5xl font-bold">{{ $t('components.contact.header.section.title') }}</h1>
          </div>
        </div>
        <!-- Map Section -->
        <div class="w-full md:w-11/12">
          <div class="w-full h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7153.0250795798165!2d50.2269736!3d26.3098981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e915e82a4d51%3A0x1569314523fca2d7!2s6%20Degrees%20Technologies!5e0!3m2!1sar!2ssa!4v1721045978454!5m2!1sar!2ssa"
              class="w-full h-full border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End Contact Header Section -->
</template>
