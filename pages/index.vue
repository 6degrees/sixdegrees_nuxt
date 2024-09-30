<template>
  <!-- Loader Component -->
  <CommonLoader/>

  <!-- Wrapper for smooth scrolling content -->
  <div id="smooth-wrapper">
    <!-- Common Navigation Bar -->
    <CommonNavbar/>

    <!-- Common Menu Component -->
    <CommonMenu/>

    <!-- Content area with smooth scrolling -->
    <div id="smooth-content">
      <main class="main-bg">
        <!-- Main container with background and overlay -->
        <div class="main-box main-bg relative z-[7]">
          <!-- Header Section -->
          <LandingHeader/>

          <!-- Brands Section -->
          <LandingBrands/>

          <!-- About Section -->
          <LandingAbout/>

          <!-- Features Section -->
          <LandingFeatures/>

          <!-- Marquee Section -->
          <LandingMarquee/>

          <!-- Works Section -->
          <LandingWorks/>

          <!-- Tech Stack Section -->
          <LandingTechStack/>

          <!-- Blog Section -->
          <LandingBlog/>
        </div>

        <!-- Contact Section -->
        <LandingContact/>
      </main>

      <!-- Common Footer -->
      <CommonFooter/>
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
  title: '6 Degrees Technologies - الدرجات الست لتقنية المعلومات',
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    
    // Open Graph Tags
    { property: 'og:title', content: '6 Degrees Technologies' },
    { property: 'og:description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    { property: 'og:image', content: '/assets/imgs/meta/5.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' },
    { property: 'og:type', content: 'website' },

    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '6 Degrees Technologies' },
    { name: 'twitter:description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    { name: 'twitter:image', content: '/assets/imgs/meta/5.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' } ,
  ],
  bodyAttrs: {
    class: 'landing' // Add class to the body element for styling
  },
  link: [
    {
      rel: "stylesheet", // Link to the base CSS file
      href: '/assets/css/base.css'
    }
  ],
  script: [
    {src: "/assets/js/TweenMax.min.js"}, // Include TweenMax JavaScript library
    {src: "/assets/js/charming.min.js"}, // Include Charming JavaScript library
    {src: "/assets/js/smoother-script.js", defer: true} // Include custom smoother script with defer attribute
  ]
});
</script>
