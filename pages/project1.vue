<template>
  <!-- Common loading spinner component -->
  <CommonLoader />

  <!-- Wrapper for smooth scrolling content -->
  <div id="smooth-wrapper">

    <!-- Common navigation bar component -->
    <CommonNavbar />

    <!-- Common menu component -->
    <CommonMenu />

    <!-- Content wrapper for smooth scrolling -->
    <div id="smooth-content">

      <!-- Main content area with background class -->
      <main class="main-bg">

        <!-- Main box containing the project's specific sections -->
        <div class="main-box main-bg relative z-[7]">

          <!-- Project header component -->
          <ProjectOneHeader />

          <!-- Top content component specific to the project -->
          <ProjectOneTopContent />

          <!-- Works or portfolio section component for the project -->
          <ProjectOneWorks />

          <!-- Bottom content component specific to the project -->
          <ProjectOneBottomContent />
        </div>
      </main>

      <!-- Common footer component -->
      <CommonFooter />
    </div>
  </div>
</template>

<script setup>
/*
|--------------------------------------------------------------------------
| Page Head Configuration
|--------------------------------------------------------------------------
|
| Configures the page head with a title template, body attributes, and
| includes necessary CSS and JavaScript files for the page.
|
*/
useHead({
  title: 'SATORP - World Safety Day',
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'Explore our SATORP project where we developed a web application to manage event booths for World Safety Day.' },

    // Open Graph Tags
    { property: 'og:title', content: 'SATORP - World Safety Day' },
    { property: 'og:description', content: 'Learn about the SATORP project where we created a web app for managing event booths and tracking progress.' },
    { property: 'og:image', content: '/assets/imgs/meta/1.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' }, 
    { property: 'og:type', content: 'website' },

    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'SATORP - World Safety Day' },
    { name: 'twitter:description', content: 'Learn about the SATORP project where we created a web app for managing event booths and tracking progress.' },
    { name: 'twitter:image', content: '/assets/imgs/meta/1.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' } ,
  ],

  bodyAttrs: {
    class: 'main-bg' // Add 'main-bg' class to the body element
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true } // Load the smoother script for animations
  ]
});
</script>