<template>
  <!-- Start Footer Section -->
  <footer>
    <div class="footer-container">
      <div class="container pb-80 pt-80 relative z-[7]">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="column">
              <h6 class="sub-title mb-30">{{ $t('components.common.footer.section.socialMedia.title') }}</h6>
              <ul class="rest">
                <li class="hover-this cursor-pointer mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://github.com/6degrees" class="hover-anim">{{ $t('components.common.footer.section.socialMedia.links.github') }}</a>
                </li>
                <li class="hover-this cursor-pointer mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://github.com/6degrees" class="hover-anim">{{ $t('components.common.footer.section.socialMedia.links.behance') }}</a>
                </li>
                <li class="hover-this cursor-pointer mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://twitter.com/6degrees_sa" class="hover-anim">{{ $t('components.common.footer.section.socialMedia.links.twitter') }}</a>
                </li>
                <li class="hover-this cursor-pointer mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://www.linkedin.com/company/6degz" class="hover-anim">{{ $t('components.common.footer.section.socialMedia.links.linkedin') }}</a>
                </li>
                <li class="hover-this cursor-pointer mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://instagram.com/6degrees_sa" class="hover-anim">{{ $t('components.common.footer.section.socialMedia.links.instagram') }}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Uncomment and use if needed
          <div class="col-lg-3">
              <div class="column">
                  <h6 class="sub-title mb-30">{{ $t('components.common.footer.section.office.title') }}</h6>
                  <p>{{ $t('components.common.footer.section.office.address') }}</p>
                  <h5 class="mt-15 underline">
                      <a href="#0">{{ $t('components.common.footer.section.office.phone') }}</a>
                  </h5>
              </div>
          </div>
          -->
        </div>
      </div>
      <div class="container bord pt-30 pb-30 bord-thin-top">
        <div class="row">
          <div class="col-lg-6">
            <div class="links">
              <ul class="rest">
                <li class="mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://up.monitoring.6d.com.sa/status/main" class="animsition-link">{{ $t('components.common.footer.section.links.serviceStatus') }}</a>
                </li>
                <li class="mr-9 rtl:mr-0 rtl:ml-9">
                  <NuxtLink :to="pageRout.toAboutPage()" class="animsition-link">{{ $t('components.common.footer.section.links.about') }}</NuxtLink>
                </li>
                <li class="mr-9 rtl:mr-0 rtl:ml-9">
                  <NuxtLink :to="pageRout.toContactPage()" class="animsition-link">{{ $t('components.common.footer.section.links.contact') }}</NuxtLink>
                </li>
                <li class="mr-9 rtl:mr-0 rtl:ml-9">
                  <a href="https://wiki.6degrees.com.sa/" class="animsition-link">{{ $t('components.common.footer.section.links.docs') }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright d-flex">
              <div class="ltr:ml-auto rtl:mr-auto">
                <p class="fz-13">
                  {{ $t('components.common.footer.section.copyright.text') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer Section -->
</template>

<script setup>
/*
|--------------------------------------------------------------------------
| pageRout
|--------------------------------------------------------------------------
|
| The pageRout variable represents the page route utility, which provides
| methods for navigating to different pages based on predefined routes.
|
*/
const pageRout = usePageRout()

/*
|--------------------------------------------------------------------------
| handleResize Function
|--------------------------------------------------------------------------
|
| Sets up GSAP animation and ScrollTrigger based on viewport size.
| The animation will move the footer container from 50% to 0% vertical position when scrolled.
| This function is called initially and on window resize.
|
*/
const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.set(".footer-container", { yPercent: -50 }); // Set initial vertical position of the footer container
    const uncover = gsap.timeline({ paused: true }); // Create a new GSAP timeline, initially paused
    uncover.to(".footer-container", { yPercent: 0, ease: "none" }); // Define animation to move footer container to final position

    ScrollTrigger.create({
      trigger: "main", // Element that triggers the animation
      start: "bottom bottom", // Animation start point (bottom of main element reaches bottom of viewport)
      end: "+=50%", // Animation end point (50% of viewport height from start point)
      animation: uncover, // Animation to be triggered
      scrub: true, // Smoothly animate according to scroll position
    });
  }
};

/*
|--------------------------------------------------------------------------
| onMounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| Called when the component is mounted. Initializes the resize handling and
| adds an event listener for window resize to adjust animations accordingly.
|
*/
onMounted(() => {
  handleResize(); // Initialize animation and check viewport size on mount
  window.addEventListener("resize", handleResize); // Add resize event listener
});

/*
|--------------------------------------------------------------------------
| onBeforeUnmount Lifecycle Hook
|--------------------------------------------------------------------------
|
| Called before the component is unmounted. Removes the resize event listener
| to prevent memory leaks and unwanted behavior.
|
*/
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
});
</script>
