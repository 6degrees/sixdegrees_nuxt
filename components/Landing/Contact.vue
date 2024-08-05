<template>
  <section class="contact py-[120px]">
    <div class="contact-container">
      <div class="container relative">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="sec-head mb-80">
              <span class="sub-title mb-15 opacity-8">- Contact Us</span>
              <h3 class="uppercase font-bold text-5xl">Get In <span class="f-ultra-light">Touch</span>.</h3>
            </div>
            <div class="row row-cols-1 ">
                <div class="col col-md-6 px-4">
                    <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6FxcygmIqiOLw3yJbcPSFhs2Hntf0KMmgg3NwvCvYI7aGT2E4bMKALVs28jEYHPTqP"></div>
                </div>

                <div class="col col-md-6 px-4">
                    <div class="ps-0 ps-md-4">
                        <h4 class="mt-5 mt-md-5 font-bold border-bottom pb-2">Other ways to contact us</h4>
                        <h6 class="mt-4"><i class="bi bi-phone"></i> Phone Number(s)</h6>
                        <a dir="ltr" href="tel:+966-558412255">+966 55 841 2255</a>
                        <div>
                            <a dir="ltr" href="tel:+966-537862922">+966 53 786 2922</a>
                            <small class="text-muted">(For SMS only)</small>
                        </div>

                        <h6 class="mt-4"><i class="bi bi-envelope"></i> Email Address</h6>
                        <a dir="ltr" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>

                        <h6 class="mt-4"><i class="bi bi-globe"></i> Address</h6>
                        <p><a title="google maps location" href="https://goo.gl/maps/NDfdU2A5B7cHWphM6">6919 Prince Turki Road</a>, Corniche,<br>Khobar, Eastern Region 34413,<br>Saudi Arabia</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue';


const state = reactive({
  gsapAnimation: null,
});

// Handle the resize and animation setup on mount
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
});

// Function to handle resize and animation setup
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
