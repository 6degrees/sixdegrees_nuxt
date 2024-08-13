<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <div class="main-box main-bg ontop">
          <ProjectFourHeader />
          <ProjectFourTopContent />
          <ProjectFourImageColumn />
          <ProjectFourBottomContent />
          <ProjectFourBottomImage />
        </div>
     
      </main>
      <CommonFooter />
    </div>
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Project Four`,
  bodyAttrs: {
    class: 'main-bg'
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>
