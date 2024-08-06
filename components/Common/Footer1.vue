<template>
  <footer>
    <div class="footer-container">
      <div class="container pb-80 pt-80 ontop">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="column">
              <h6 class="sub-title mb-30">Social Media</h6>
              <ul class="m-0 p-0">
                <li class="hover-this cursor-pointer">
                  <a href="https://github.com/6degrees" class="hover-anim">GitHub</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="https://github.com/6degrees" class="hover-anim">Behance</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="https://twitter.com/6degrees_sa" class="hover-anim">Twitter</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="https://www.linkedin.com/company/6degz" class="hover-anim">LinkedIn</a>
                </li>
                <li class="hover-this cursor-pointer">
                  <a href="https://instagram.com/6degrees_sa" class="hover-anim">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-lg-3">
            <div class="column">
              <h6 class="sub-title mb-30">Our Office :</h6>
              <p>6919 Prince Turki Road, Al Khobar Corniche, Office #301, Al Khobar 34413</p>
              <h5 class="mt-15 underline">
                <a href="#0">0558412255</a>
              </h5>
            </div>
          </div> -->
        </div>
      </div>
      <div class="container bord pt-30 pb-30 bord-thin-top">
        <div class="row">
          <div class="col-lg-6">
            <div class="links">
              <ul class="m-0 p-0">
                <li>
                  <a href="https://up.monitoring.6d.com.sa/status/main" class="animsition-link">Service Status</a>
                </li>
                <li>
                  <a href="/about" class="animsition-link">Terms</a>
                </li>
                <li>
                  <a href="/contact" class="animsition-link">Privacy</a>
                </li>
                <li>
                  <a href="https://wiki.6degrees.com.sa/" class="animsition-link">Docs</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright d-flex">
              <div class="ml-auto">
                <p class="fz-13">
                  © 2024 6 Degrees Technologies Est. All right reserved
              
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const handleResize = () => {
  if (window.innerWidth > 991) {
    gsap.set(".footer-container", { yPercent: -50 });
    const uncover = gsap.timeline({ paused: true });
    uncover.to(".footer-container", { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: "main",
      start: "bottom bottom",
      end: "+=50%",
      animation: uncover,
      scrub: true,
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
