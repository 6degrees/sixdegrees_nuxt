<template>
  <!-- Start Contact Header Section -->
  <header class="contact-header py-[120px]">
    <div class="container mt-100">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="cont text-center mb-80" dir="ltr">
            <h6 class="sub-title mb-15 flex items-center justify-center">
              <span class="mr-2 w-5 h-5 inline-block">
                <img src="/assets/imgs/svg-assets/hi.png" alt="" class="w-full h-full" />
              </span>
              {{ $t('components.contact.header.section.subtitle') }}
            </h6>
            <h1>{{ $t('components.contact.header.section.title') }}</h1>
          </div>
        </div>
        <div class="col-lg-11">
          <div class="google-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7153.0250795798165!2d50.2269736!3d26.3098981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e915e82a4d51%3A0x1569314523fca2d7!2s6%20Degrees%20Technologies!5e0!3m2!1sar!2ssa!4v1721045978454!5m2!1sar!2ssa"
                width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End Contact Header Section -->
</template>
