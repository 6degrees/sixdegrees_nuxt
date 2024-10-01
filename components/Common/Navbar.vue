<template>
  <!-- Start Navbar Section -->
  <div class="topnav blur" :class="{ 'bord-thin-bottom': borderBottom }">
    <div class="container">
      <!-- Logo Section -->
      <div :class="`logo w-34 h-auto lg:w-32 icon-img-${borderBottom ? '100' : '90'}`">
        <NuxtLink :to="pageRout.toHomePage()">
          <!-- Increased logo size with Tailwind width and height classes -->
          <img src="/assets/imgs/logo-light.png" alt="6 Degrees Technologies" loading="lazy" class="w-34 h-auto lg:w-32" />
        </NuxtLink>
      </div>

      <!-- Language Switcher with border as a button -->
      <div class="ml-auto rtl:mr-auto rtl:ml-0 flex items-center space-x-2 rtl:space-x-reverse">
        <a :href="availableLocales[0].hrf" class="animsition-link language-switcher-button" @click="toggleMenu">
          <span class="text-md lg:text-md">{{ availableLocales[0].name }}</span>
        </a>
      </div>

      <!-- Menu Icon -->
      <div class="menu-icon cursor-pointer ml-4 rtl:mr-4 rtl:ml-0" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="icon text-2xl lg:text-3xl"> <!-- Increased icon size -->
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  </div>
  <!-- End Navbar Section -->
</template>

<script setup>
const { locale, locales } = useI18n(); // Include locales and current locale
const pageRout = usePageRout();

const availableLocales = computed(() => locales.value.filter(i => i.code !== locale.value));

const { borderBottom } = defineProps(['borderBottom']);

const handleScroll = () => {
  const menu = document.querySelector('.topnav');
  if (window.scrollY > 100) {
    menu.classList.add('nav-scroll');
  } else {
    menu.classList.remove('nav-scroll');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
  const navDark = document.querySelector('.topnav');
  document.querySelector('.hamenu').classList.toggle('open');
  document.querySelector('.topnav .menu-icon').classList.toggle('open');
  navDark.classList.toggle('navlit');

  if (document.querySelector('.topnav .menu-icon').classList.contains('open')) {
    document.querySelector('.hamenu').style.top = '0';
  } else {
    document.querySelector('.hamenu').style.top = '-100%';
  }
};
</script>

<style scoped>

</style>
