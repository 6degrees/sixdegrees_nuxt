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
        <div class="main-box main-bg ontop">
          <!-- Header Section -->
<!--          <LandingHeader/>-->

          <!-- Brands Section -->
          <LandingBrands/>

          <!-- About Section -->
          <LandingAbout/>

          <!-- Features Section -->
<!--          <LandingFeatures/>-->

          <!-- Marquee Section -->
<!--          <LandingMarquee/>-->

          <!-- Works Section -->
<!--          <LandingWorks/>-->

<!--          &lt;!&ndash; Tech Stack Section &ndash;&gt;-->
<!--          <LandingTechStack/>-->

          <!-- Blog Section -->
<!--          <LandingBlog/>-->
        </div>

        <!-- Contact Section -->
<!--        <LandingContact/>-->
      </main>

      <!-- Common Footer -->
<!--      <CommonFooter/>-->
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
  titleTemplate: `%s - Landing`, // Set the title template for the page
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
