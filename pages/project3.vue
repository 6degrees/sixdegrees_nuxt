<template>
  <!-- Common loading spinner component -->
  <CommonLoader />

  <!-- Wrapper for smooth scrolling content -->
  <div id="smooth-wrapper">

    <!-- Common navigation bar component -->
    <CommonNavbar />

    <!-- Common menu component -->
    <div id="smooth-content">

      <!-- Main content area with background class -->
      <main class="main-bg">

        <!-- Main box containing the project's specific sections -->
        <div class="main-box main-bg relative z-[7]">

          <!-- Header component for Project Three -->
          <ProjectThreeHeader />

          <!-- Top content component specific to Project Three -->
          <ProjectThreeTopContent />

          <!-- Image column component specific to Project Three -->
          <ProjectThreeImageColumn />

          <!-- Bottom content component specific to Project Three -->
          <ProjectThreeBottomContent />

          <!-- Bottom image component specific to Project Three -->
          <ProjectThreeBottomImage />
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
  title: 'Penpal App', 
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'Learn how we developed the Penpal app to offer discounts and promotions to college students, showcasing nearby offers based on location.' },
    
    // Open Graph Tags (for Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'Penpal App' },
    { property: 'og:description', content: 'Discover the Penpal app, offering discounts and promotions for college students, with location-based offers.' },
    { property: 'og:image', content: '/assets/imgs/meta/3.png' }, // Replace with the actual image URL
    { property: 'og:url', content: process.client ? window.location.href : '' }, 
    { property: 'og:type', content: 'website' },
    
    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Penpal App' },
    { name: 'twitter:description', content: 'Discover the Penpal app, offering discounts and promotions for college students, with location-based offers.' },
    { name: 'twitter:image', content: '/assets/imgs/meta/3.png' }, // Replace with the actual image URL
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