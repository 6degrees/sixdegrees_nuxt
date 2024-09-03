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

      <!-- Main content area with background class and top margin -->
      <main class="main-bg mt-100">

        <!-- Main box containing the project's specific sections -->
        <div class="main-box main-bg relative z-[7]">

          <!-- Header component for Project Two -->
          <ProjectTwoHeader />

          <!-- Top content component specific to Project Two -->
          <ProjectTwoTopContent />

          <!-- Bottom content component specific to Project Two -->
          <ProjectTwoBottomContent />
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
  titleTemplate: `%s - Project Two`, // Template for the page title
  bodyAttrs: {
    class: 'main-bg' // Add 'main-bg' class to the body element
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true } // Load the smoother script for animations
  ]
});
</script>
