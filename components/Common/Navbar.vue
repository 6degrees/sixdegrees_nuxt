<template>
  <!-- Start Navbar Section -->
  <div  class="topnav blur " :class="{ 'bord-thin-bottom': borderBottom }">
    <div class="container ">
      <!-- Logo Section -->
      <div :class="`logo icon-img-${borderBottom ? '100' : '90'}`">
        <a :href="pageRout.toHomePage()">
          <img src="/assets/imgs/logo-light.png" alt="6 Degrees Technologies" />
        </a>
      </div>
      <!-- Menu Icon -->
      <div class="menu-icon cursor-pointer ml-auto rtl:mr-auto rtl:ml-0" @click="toggleMenu">
        <span class="text pt-1 pr-4 rtl:pr-0 rtl:pl-4"><span class="word">{{ $t('components.common.navbar.menu.title') }}</span></span>
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
| Scroll Event Handler
|--------------------------------------------------------------------------
|
| handleScroll: This function adds or removes the 'nav-scroll' class to/from
| the top navigation bar based on the window's scroll position. This is used
| to apply different styles when the user scrolls down the page.
|
*/
const handleScroll = () => {
  const menu = document.querySelector('.topnav');
  if (window.scrollY > 100) {
    menu.classList.add('nav-scroll');
  } else {
    menu.classList.remove('nav-scroll');
  }
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
| toggleMenu: This function toggles the visibility and animation of the
| hamburger menu. It handles the 'open' state of the menu and adjusts the
| position of the menu container based on its state.
|
*/
const toggleMenu = () => {
  const navDark = document.querySelector('.topnav');
  document.querySelector('.hamenu').classList.toggle('open');
  document.querySelector('.topnav .menu-icon').classList.toggle('open');
  navDark.classList.toggle('navlit');

  // Adjust the top position of the menu based on its open state
  if (document.querySelector('.topnav .menu-icon').classList.contains('open')) {
    document.querySelector('.hamenu').style.top = '0';
  } else {
    console.log(1)
    document.querySelector('.hamenu').style.top = '-100%';
  }
};
</script>