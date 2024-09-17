<template>
  <!-- Start Contact Info Section -->
  <section class="py-[120px] main-bg pt-0">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <span class="sub-title mb-15 opacity-8 text-slate-400">- {{ $t('components.contact.info.section.subtitle') }}</span>
        <h3 class="uppercase text-5xl">{{ $t('components.contact.info.section.title') }}</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="item text-center sm-mb50 md-mb50">
            <span class="sub-title opacity-8 mb-5">{{ $t('components.contact.info.section.email.label') }} :</span>
            <h6 class="text-slate-400"> <a href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a></h6>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item text-center sm-mb50">
            <span class="sub-title opacity-8 mb-5">{{ $t('components.contact.info.section.headQuarter.label') }} :</span>
            <h6 class="text-slate-400" dir="ltr">{{ $t('components.contact.info.section.headQuarter.address') }}</h6>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item text-center">
            <span class="sub-title opacity-8 mb-5">{{ $t('components.contact.info.section.phone.label') }} :</span>
            <h6 class="text-slate-400"><a dir="ltr" href="tel:{{ $t('components.contact.info.section.phone.number') }}">{{ $t('components.contact.info.section.phone.number') }}</a></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Info Section -->
</template>
