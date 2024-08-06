<template>
  <div class="hamenu valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="menu-links">
            <ul class="main-menu m-0 p-0">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/" class="link animsition-link" @click="closeMenu"><span class="nm">01.</span>Home</a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/about" class="link animsition-link" @click="closeMenu"><span class="nm">02.</span>About</a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/contact" class="link animsition-link" @click="closeMenu"><span class="nm">05.</span>Contact</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 valign">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="uppercase font-semibold mb-20">Head Quarter</h6>
              <p class="font-normal text-lg">6919 Prince Turki Road, Al Khobar Corniche, Office #301, Al Khobar 34413</p>
            </div>
            <div class="item mb-50">
              <h6 class="uppercase font-semibold mb-20">How to Connect</h6>
              <a class="font-normal text-lg" href="tel:+966-558412255">+966 55 841 2255</a>
              <br>
              <a  class="font-normal text-lg" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>
             
            </div>
            <div class="bottom">
              <h6 class="uppercase font-semibold mb-20">Join Us</h6>
              <ul class="m-0 p-0 social-text d-flex text-sm	">
                <li class="mr-20">
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">github</span>
                 
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">Behance</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="/#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://twitter.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://www.linkedin.com/company/6degz" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

### Script:
```vue
<script setup>
const closeMenu = () => {
  document.querySelector('.hamenu').classList.remove("open");
};

const handleMouseEnter = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
  event.currentTarget.style.opacity = "1";
};

const handleMouseLeave = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
};

const handleOpenDMenu = (event) => {
  document.querySelector(".main-menu").classList.add("gosub");
  event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
};

const handleCloseDMenu = () => {
  document.querySelector(".main-menu").classList.remove("gosub");
  document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
};
</script>
