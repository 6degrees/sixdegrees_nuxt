<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <ContactHeader />
        <ContactInfo />

      </main>
      <CommonFooter :subBg="true" />
    </div>
  </div>
</template>

<script setup>
//= Page Head
useHead({
  title: '6 Degrees Technologies - Contact Us',
  meta: [
    // Basic Meta Tags
    { name: 'description', content: 'Get in touch with us through our Contact Us page.' },

    // Open Graph Tags
    { property: 'og:title', content: '6 Degrees Technologies - Contact Us' },
    { property: 'og:description', content: 'Reach out to us via our Contact Us page.' },
    { property: 'og:image', content: '/assets/imgs/meta/5.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' }, 
    { property: 'og:type', content: 'website' },

    // Twitter Card Tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '6 Degrees Technologies - Contact Us' },
    { name: 'twitter:description', content: 'Reach out to us via our Contact Us page.' },
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
