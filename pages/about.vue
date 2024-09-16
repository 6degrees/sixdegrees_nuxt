<template>
  <!-- Loader component that appears during loading -->
  <CommonLoader />

  <!-- Main wrapper for smooth scrolling and content -->
  <div id="smooth-wrapper">

    <!-- Navbar component for site navigation -->
    <CommonNavbar />

    <!-- Menu component for additional navigation or site options -->
    <CommonMenu />

    <!-- Content wrapper for smooth scrolling content -->
    <div id="smooth-content">

      <!-- Main section with background styling -->
      <main class="main-bg">

        <!-- Header component for the About page -->
        <AboutHeader />

        <!-- Introduction section for the About page -->
        <AboutIntro />

        <!-- Testimonials section (currently commented out) -->
        <!-- <AboutTestimonials /> -->

      </main>

      <!-- Footer component for site footer content -->
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
| Configures the HTML head for the About page. Sets the page title template,
| body class, and includes external JavaScript files.
|
| @type {Object}
| @property {string} titleTemplate - Template for the page title.
| @property {Object} bodyAttrs - Attributes to apply to the body element.
| @property {Array} script - External JavaScript files to be included.
|
*/
useHead({
  title: '6 Degrees Technologies - About Us',
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    
    // Open Graph Tags
    { property: 'og:title', content: '6 Degrees Technologies - About Us' },
    { property: 'og:description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    { property: 'og:image', content: '/assets/imgs/meta/5.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' },
    { property: 'og:type', content: 'website' },

    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '6 Degrees Technologies - About Us' },
    { name: 'twitter:description', content: 'An IT business enabler and partner, we aim to be the link between you and your technological goal' },
    { name: 'twitter:image', content: '/assets/imgs/meta/5.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' } ,
  ],
  bodyAttrs: {
    class: 'main-bg'
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>