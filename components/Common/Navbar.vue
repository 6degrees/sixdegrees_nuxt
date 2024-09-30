<template>
  <!-- Start Navbar Section -->
  <div class="topnav blur" :class="{ 'bord-thin-bottom': borderBottom }">
    <div class="container">
      <!-- Logo Section -->
      <div :class="`logo icon-img-${borderBottom ? '100' : '90'}`">
      <NuxtLink :to="pageRout.toHomePage()">
        <img src="/assets/imgs/logo-light.png" alt="6 Degrees Technologies" loading="lazy" />
      </NuxtLink>
      </div>
      
      <!-- Menu Icon -->
      <div class="menu-icon cursor-pointer ml-auto rtl:mr-auto rtl:ml-0" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="text pt-1 pr-4 rtl:pr-0 rtl:pl-4">
          <span class="word">{{ $t('components.common.navbar.menu.title') }}</span>
        </span>
        <span class="icon">
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  </div>
  <!-- End Navbar Section -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

/*
|--------------------------------------------------------------------------
| pageRout
|--------------------------------------------------------------------------
|
| The pageRout variable represents the page route utility, which provides
| methods for navigating to different pages based on predefined routes.
|
*/
const pageRout = usePageRout();

/*
|--------------------------------------------------------------------------
| Props Definition
|--------------------------------------------------------------------------
|
| borderBottom Prop: This prop controls whether a bottom border is added to
| the top navigation bar. It is of type Boolean.
|
| @type {boolean}
|
*/
const { borderBottom } = defineProps(['borderBottom']);

/*
|--------------------------------------------------------------------------
| Scroll Event Handler with Debouncing
|--------------------------------------------------------------------------
|
| Debounced handleScroll function toggles 'nav-scroll' class based on the
| scroll position, reducing the number of times the function runs.
|
*/
let scrollTimeout;

const handleScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const menu = document.querySelector('.topnav');
    menu.classList.toggle('nav-scroll', window.scrollY > 100);
  }, 100);
};

/*
|--------------------------------------------------------------------------
| Mounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| This hook adds the scroll event listener when the component is mounted.
|
*/
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

/*
|--------------------------------------------------------------------------
| Unmounted Lifecycle Hook
|--------------------------------------------------------------------------
|
| This hook removes the scroll event listener when the component is unmounted,
| preventing memory leaks and ensuring proper cleanup.
|
*/
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

/*
|--------------------------------------------------------------------------
| Menu Toggle Function
|--------------------------------------------------------------------------
|
| toggleMenu: This function toggles the visibility of the menu using Vue's
| reactivity system instead of direct DOM manipulation.
|
*/
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


