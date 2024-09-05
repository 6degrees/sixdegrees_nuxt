<template>
  <!-- Start Contact Section -->
  <section class="contact py-[120px]">
    <div class="contact-container">
      <div class="container relative">
        <div class="flex flex-wrap justify-center">
          <div class="lg:w-2/3">
            <div class="sec-head mb-50">
              <span class="sub-title mb-6 opacity-8 text-slate-400">{{ $t('components.landing.contacts.section.title') }}</span>
              <h3 class="uppercase font-bold text-5xl mt-10" v-html="$t('components.landing.contacts.section.heading')"></h3>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 ">
                <!-- Pipedrive Form Container -->
                <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP">
                </div>
              </div>

              <div class="w-full md:w-1/2 px-4">
                <div class="pl-0 md:pl-4">
                  <h4 class="mt-5 font-bold border-b pb-2">
                    {{ $t('components.landing.contacts.section.phone.heading') }}
                  </h4>
                  <h6 class="mt-4">
                  
                    {{ $t('components.landing.contacts.section.phone.title') }}
                  </h6>
                  <a class="text-slate-400" dir="ltr" href="tel:+966-558412255">{{ $t('components.landing.contacts.section.phone.numbers.primary') }}</a>


                  <h6 class="mt-4">
                
                    {{ $t('components.landing.contacts.section.email.title') }}
                  </h6>
                  <a class="text-slate-400" dir="ltr" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>

                  <h6 class="mt-4">
                  
                    {{ $t('components.landing.contacts.section.address.title') }}
                  </h6>
                  <p>
                    <a class="text-slate-400" title="{{ $t('components.landing.contacts.section.address.map') }}" href="https://goo.gl/maps/NDfdU2A5B7cHWphM6" v-html="$t('components.landing.contacts.section.address.details')"></a>
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
