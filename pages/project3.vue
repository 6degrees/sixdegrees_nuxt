<template>
  <CommonLoader />
  <div id="smooth-wrapper">
    <CommonNavbar />
    <CommonMenu />
    <div id="smooth-content">
      <main class="main-bg">
        <div class="main-box main-bg ontop">
          <ProjectThreeHeader />
          <ProjectThreeTopContent />
          <ProjectThreeImageColumn />
          <ProjectThreeBottomContent />
          <ProjectThreeBottomImage />
        </div>
      
      </main>
      <CommonFooter />
    </div>
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Project Three`,
  bodyAttrs: {
    class: 'main-bg'
  },
  script: [
    { src: "/assets/js/smoother-script.js", defer: true }
  ]
});
</script>
