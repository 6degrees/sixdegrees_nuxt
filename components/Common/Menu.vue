<template>
  <!-- Start Menu Section -->
  <div class="hamenu valign">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="menu-links">
            <ul class="main-menu m-0 p-0">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a :href="pageRout.toHomePage()" class="link animsition-link" @click="closeMenu"><span
                      class="nm">01.</span>{{ $t('components.common.menu.section.menu.home') }}
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a :href="pageRout.toAboutPage()" class="link animsition-link" @click="closeMenu"><span
                      class="nm">02.</span>{{ $t('components.common.menu.section.menu.about') }}
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a :href="pageRout.toContactPage()" class="link animsition-link" @click="closeMenu"><span
                      class="nm">03.</span>{{ $t('components.common.menu.section.menu.contact') }}
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a :href="availableLocales[0].hrf" class="link animsition-link" @click="closeMenu"><span
                      class="nm">04.</span>{{ availableLocales[0].name }}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 valign">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="uppercase font-semibold mb-20">
                {{ $t('components.common.menu.section.contactInfo.headQuarter.title') }}</h6>
              <p class="font-normal text-lg">{{
                  $t('components.common.menu.section.contactInfo.headQuarter.address')
                }}</p>
            </div>
            <div class="item mb-50">
              <h6 class="uppercase font-semibold mb-20">
                {{ $t('components.common.menu.section.contactInfo.howToConnect.title') }}</h6>
              <a class="font-normal text-lg" href="tel:+966-558412255"
                 dir="ltr">{{ $t('components.common.menu.section.contactInfo.howToConnect.phone') }}</a>
              <br>
              <a class="font-normal text-lg" href="mailto:contact@6degrees.com.sa">contact@6degrees.com.sa</a>
            </div>
            <div class="bottom">
              <h6 class="uppercase font-semibold mb-20">{{
                  $t('components.common.menu.section.contactInfo.joinUs.title')
                }}</h6>
              <ul class="m-0 p-0 social-text d-flex text-sm">
                <li class="mr-20">
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.github')
                      }}</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://github.com/6degrees" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.behance')
                      }}</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="javascript:void(0)" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.facebook')
                      }}</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://twitter.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.twitter')
                      }}</span>
                  </a>
                </li>
                <li class="mr-20">
                  <a href="https://www.linkedin.com/company/6degz" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.linkedin')
                      }}</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/6degrees_sa" class="hover-this">
                    <span class="hover-anim">{{
                        $t('components.common.menu.section.contactInfo.joinUs.socialMedia.instagram')
                      }}</span>
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
/*
|--------------------------------------------------------------------------
| Script Setup
|--------------------------------------------------------------------------
|
| The script setup block initializes variables and functions for managing
| locale settings and navigation within the application.
|
*/
const {locale, locales} = useI18n()
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
| pageRout
|--------------------------------------------------------------------------
|
| The pageRout variable represents the page route utility, which provides
| methods for navigating to different pages based on predefined routes.
|
*/
const availableLocales = computed(() => locales.value.filter(i => i.code !== locale.value))

/*
|--------------------------------------------------------------------------
| closeMenu Function
|--------------------------------------------------------------------------
|
| Closes the dropdown menu by removing the "open" class from the menu element.
|
*/
const closeMenu = () => {
  document.querySelector('.hamenu').classList.remove("open");
};

/*
|--------------------------------------------------------------------------
| handleMouseEnter Function
|--------------------------------------------------------------------------
|
| Handles the mouse enter event on menu items. Adjusts the opacity of sibling
| elements to highlight the hovered item by setting its opacity to 1 and
| others to 0.5.
|
| @param {Event} event - The mouse event object.
|
*/
const handleMouseEnter = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
  event.currentTarget.style.opacity = "1";
};

/*
|--------------------------------------------------------------------------
| handleMouseLeave Function
|--------------------------------------------------------------------------
|
| Handles the mouse leave event on menu items. Resets the opacity of all sibling
| elements to 1.
|
| @param {Event} event - The mouse event object.
|
*/
const handleMouseLeave = (event) => {
  Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
};

/*
|--------------------------------------------------------------------------
| handleOpenDMenu Function
|--------------------------------------------------------------------------
|
| Opens the dropdown menu by adding the "gosub" class to the main menu and
| the "sub-open" class to the sub-menu.
|
| @param {Event} event - The click event object.
|
*/
const handleOpenDMenu = (event) => {
  document.querySelector(".main-menu").classList.add("gosub");
  event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
};

/*
|--------------------------------------------------------------------------
| handleCloseDMenu Function
|--------------------------------------------------------------------------
|
| Closes the dropdown menu by removing the "gosub" class from the main menu
| and the "sub-open" class from the sub-menu.
|
*/
const handleCloseDMenu = () => {
  document.querySelector(".main-menu").classList.remove("gosub");
  document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
};
</script>
