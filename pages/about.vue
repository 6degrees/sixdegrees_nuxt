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
  titleTemplate: `%s - About`,
  bodyAttrs: {
    class: 'main-bg'
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>