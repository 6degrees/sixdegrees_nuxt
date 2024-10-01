<template>
  <!-- Start Menu Section -->
  <div class="hamenu flex items-center justify-center min-h-screen">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 flex items-center justify-center">
          <div class="menu-links">
            <ul class="main-menu">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div>
                  <a :href="pageRout.toHomePage()" class="link animsition-link" @click="closeMenu">
                    <span class="nm">01.</span>{{ $t('components.common.menu.section.menu.home') }}
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div>
                  <a :href="pageRout.toAboutPage()" class="link animsition-link" @click="closeMenu">
                    <span class="nm">02.</span>{{ $t('components.common.menu.section.menu.about') }}
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div>
                  <a :href="pageRout.toContactPage()" class="link animsition-link" @click="closeMenu">
                    <span class="nm">03.</span>{{ $t('components.common.menu.section.menu.contact') }}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-4/12 flex items-center justify-center">
          <div class="cont-info">
            <div class="item mb-12">
              <h6 class="uppercase font-semibold mb-4 text-slate-400">{{ $t('components.common.menu.section.contactInfo.headQuarter.title') }}</h6>
              <p class="font-normal text-lg">{{ $t('components.common.menu.section.contactInfo.headQuarter.address') }}</p>
            </div>
            <div class="item mb-12">
              <h6 class="uppercase font-semibold mb-4 text-slate-400">{{ $t('components.common.menu.section.contactInfo.howToConnect.title') }}</h6>
              <a class="font-normal text-lg" href="tel:+966-558412255" dir="ltr">{{ $t('components.common.menu.section.contactInfo.howToConnect.phone') }}</a><br>
              <a class="font-normal text-lg" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>
            </div>
            <div class="bottom">
              <h6 class="uppercase font-semibold mb-4 text-slate-400">{{ $t('components.common.menu.section.contactInfo.joinUs.title') }}</h6>
              <ul class="flex space-x-4 rest social-text text-sm">
                <li>
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.github') }}</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.behance') }}</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.facebook') }}</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.twitter') }}</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/6degz" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.linkedin') }}</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">{{ $t('components.common.menu.section.contactInfo.joinUs.socialMedia.instagram') }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Menu Section -->
</template>

<script setup>
const { locale, locales } = useI18n();
const pageRout = usePageRout();
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
</script>
