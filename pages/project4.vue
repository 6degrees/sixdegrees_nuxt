<template>
  <!-- Common loading spinner component -->
  <CommonLoader />

  <!-- Wrapper for smooth scrolling content -->
  <div id="smooth-wrapper">

    <!-- Common navigation bar component -->
    <CommonNavbar />

    <!-- Common menu component -->
    <CommonMenu />

    <!-- Main content area with background class -->
    <div id="smooth-content">
      <main class="main-bg">

        <!-- Main box containing the project's specific sections -->
        <div class="main-box main-bg relative z-[7]">

          <!-- Header component for Project Four -->
          <ProjectFourHeader />
          <!-- Top content component specific to Project Four -->
          <ProjectFourTopContent />

          <!-- Image column component specific to Project Four -->
          <ProjectFourImageColumn />

          <!-- Bottom content component specific to Project Four -->
          <ProjectFourBottomContent />

          <!-- Bottom image component specific to Project Four -->
          <ProjectFourBottomImage />
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
  title: 'Eastern Gets Creative', // Page specific title
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'Explore the Eastern Gets Creative project, an initiative under Ithra that celebrates and nurtures creative talent in the Eastern Province.' },
    
    // Open Graph Tags (for Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'Eastern Gets Creative' },
    { property: 'og:description', content: 'Discover how the Eastern Gets Creative project nurtures and celebrates creative talent under Ithra’s initiative in the Eastern Province.' },
    { property: 'og:image', content: '/assets/imgs/meta/4.png' }, 
    { property: 'og:url', content: process.client ? window.location.href : '' }, 
    { property: 'og:type', content: 'website' },
    
    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Eastern Gets Creative' },
    { name: 'twitter:description', content: 'Discover how the Eastern Gets Creative project nurtures and celebrates creative talent under Ithra’s initiative in the Eastern Province.' },
    { name: 'twitter:image', content: '/assets/imgs/meta/4.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' } ,
  ],
 bodyAttrs: {
    class: 'main-bg' // Add 'main-bg' class to the body element
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true } // Load the smoother script for smooth animations
  ]
});
</script>