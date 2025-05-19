<template>
    <CommonLoader />
    <div id="smooth-wrapper">
      <CommonNavbar />
      <CommonMenu />
      <div id="smooth-content">
        <main class="main-bg">
          <section class="container pt-28 pb-20">
            <h1 class="text-3xl font-bold mb-6">{{ $t('components.common.footer.pages.terms.title') }}</h1>
            <p class="mb-4">{{ $t('components.common.footer.pages.terms.intro') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.1') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.1') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.2') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.2') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.3') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.3') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.4') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.4') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.5') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.5') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.6') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.6') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.terms.headings.7') }}</h2>
            <p>{{ $t('components.common.footer.pages.terms.content.7') }}</p>
          </section>
        </main>
        <CommonFooter :subBg="true" />
      </div>
    </div>
  </template>
  


  <script setup>
const localePath = useLocalePath()
const route = useRoute()

if (route.path === '/terms-and-conditions') {
  navigateTo(localePath('/terms-and-conditions'))
}

useHead({
  title: '6 Degrees Technologies - Terms & Conditions',
  meta: [
    { name: 'description', content: 'Review our terms and conditions for using our services.' },
    { property: 'og:title', content: '6 Degrees Technologies - Terms & Conditions' },
    { property: 'og:description', content: 'Review our terms and conditions for using our services.' },
    { property: 'og:image', content: '/assets/imgs/meta/5.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '6 Degrees Technologies - Terms & Conditions' },
    { name: 'twitter:description', content: 'Review our terms and conditions for using our services.' },
    { name: 'twitter:image', content: '/assets/imgs/meta/5.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' }
  ],
  bodyAttrs: { class: 'main-bg' },
  script: [{ src: "/assets/js/smoother-script.js", defer: true }]
});
</script>
