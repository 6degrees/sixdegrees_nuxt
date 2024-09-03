<template>
  <!-- Start Contact Section -->
  <section class="contact py-[120px]">
    <div class="contact-container">
      <div class="container relative">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="sec-head mb-80">
              <span class="sub-title mb-15 opacity-8">{{ $t('components.landing.contacts.section.title') }}</span>
              <h3 class="uppercase font-bold text-5xl" v-html="$t('components.landing.contacts.section.heading')"></h3>
            </div>
            <div class="row row-cols-1 ">
              <div class="col col-md-6 px-4">
                <!-- Pipedrive Form Container -->
                <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP">
                  <h4>{{ $t('components.landing.contacts.section.contactForm.title') }}</h4>
                </div>
              </div>

              <div class="col col-md-6 px-4">
                <div class="ps-0 ps-md-4">
                  <h4 class="mt-5 mt-md-5 font-bold border-bottom pb-2">
                    {{ $t('components.landing.contacts.section.phone.title') }}
                  </h4>
                  <h6 class="mt-4">
                    <i class="bi bi-phone"></i>
                    {{ $t('components.landing.contacts.section.phone.title') }}
                  </h6>
                  <a dir="ltr" href="tel:+966-558412255">{{ $t('components.landing.contacts.section.phone.numbers.primary') }}</a>
                  <div>
                    <a dir="ltr" href="tel:+966-537862922">{{ $t('components.landing.contacts.section.phone.numbers.secondary') }}</a>
                    <small class="text-muted">{{ $t('components.landing.contacts.section.phone.numbers.note') }}</small>
                  </div>

                  <h6 class="mt-4">
                    <i class="bi bi-envelope"></i>
                    {{ $t('components.landing.contacts.section.email.title') }}
                  </h6>
                  <a dir="ltr" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>

                  <h6 class="mt-4">
                    <i class="bi bi-globe"></i>
                    {{ $t('components.landing.contacts.section.address.title') }}
                  </h6>
                  <p>
                    <a title="{{ $t('components.landing.contacts.section.address.map') }}" href="https://goo.gl/maps/NDfdU2A5B7cHWphM6" v-html="$t('components.landing.contacts.section.address.details')"></a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<script setup>
// Reactive state to hold GSAP animation instance
const state = reactive({
  gsapAnimation: null,
});

/*
|--------------------------------------------------------------------------
| Lifecycle Hook: onMounted
|--------------------------------------------------------------------------
|
| Called when the component is mounted to the DOM. Initializes the resize
| handler and sets up the animation. Adds an event listener for window resize
| to handle responsive adjustments and cleans up the listener on unmount.
|
*/
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  loadPipedriveForm(); // Load Pipedrive form script on component mount

  return () => window.removeEventListener('resize', handleResize);
});

/*
|--------------------------------------------------------------------------
| Function: loadPipedriveForm
|--------------------------------------------------------------------------
|
| Dynamically load the Pipedrive form script to ensure it is available when
| the component is rendered. This prevents issues with the form not displaying
| correctly due to script not being loaded.
|
*/
function loadPipedriveForm() {
  const script = document.createElement('script');
  script.src = 'https://webforms.pipedrive.com/f/loader';
  script.async = true;
  document.body.appendChild(script);
}

/*
|--------------------------------------------------------------------------
| Function: handleResize
|--------------------------------------------------------------------------
|
| Sets up or updates the GSAP animation based on the viewport width. If the
| width is greater than 991 pixels, it initializes a GSAP timeline animation
| and sets up a ScrollTrigger to animate the `.contact-container` element.
|
| - Adjusts the vertical position of `.contact-container` based on scroll position
| - Creates a timeline animation that animates the `yPercent` property of `.contact-container`
| - Sets up ScrollTrigger to control the animation based on scrolling
|
*/
function handleResize() {
  if (window.innerWidth > 991) {
    gsap.set('.contact-container', { yPercent: -50 });
    state.gsapAnimation = gsap.timeline({ paused: true });
    state.gsapAnimation.to('.contact-container', { yPercent: 0, ease: 'none' });

    ScrollTrigger.create({
      trigger: '.main-box',
      start: 'bottom bottom',
      end: '+=50%',
      animation: state.gsapAnimation,
      scrub: true,
    });
  }
}
</script>
