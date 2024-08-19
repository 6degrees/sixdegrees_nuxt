<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
  <Body>
<!--    <CommonCursor/>-->
<!--    <CommonProgressScroll/>-->
    <slot/>
  </Body>
  </Html>
</template>

<script setup lang="ts">
/*
|--------------------------------------------------------------------------
| Locale Head Configuration
|--------------------------------------------------------------------------
|
| Configures the HTML attributes for the locale head of the document.
|
*/
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});

/*
|--------------------------------------------------------------------------
| Computed Property: htmlAttrs
|--------------------------------------------------------------------------
|
| Retrieves the HTML attributes from the locale head.
|
*/
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>