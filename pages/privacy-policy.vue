<template>
    <CommonLoader />
    <div id="smooth-wrapper">
      <CommonNavbar />
      <CommonMenu />
      <div id="smooth-content">
        <main class="main-bg">
          <section class="container pt-28 pb-20">
            <h1 class="text-3xl font-bold mb-6">{{ $t('components.common.footer.pages.privacy.title') }}</h1>
            <p class="mb-4">{{ $t('components.common.footer.pages.privacy.intro') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.1') }}</h2>
            <p>{{ $t('components.common.footer.pages.privacy.content.1') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.2') }}</h2>
            <ul class="list-disc list-inside space-y-2">
              <li>{{ $t('components.common.footer.pages.privacy.content.2.1') }}</li>
              <li>{{ $t('components.common.footer.pages.privacy.content.2.2') }}</li>
              <li>{{ $t('components.common.footer.pages.privacy.content.2.3') }}</li>
              <li>{{ $t('components.common.footer.pages.privacy.content.2.4') }}</li>
            </ul>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.3') }}</h2>
            <p>{{ $t('components.common.footer.pages.privacy.content.3') }}</p>
  
     
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.5') }}</h2>
            <p>{{ $t('components.common.footer.pages.privacy.content.5') }}</p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.6') }}</h2>
            <p>{{ $t('components.common.footer.pages.privacy.content.6.1') }}</p>
            <p>
              <a href="mailto:info@6degrees.com.sa" class="text-primary underline">
                info@6degrees.com.sa
              </a>
            </p>
  
            <h2 class="text-2xl font-semibold mt-8 mb-2">{{ $t('components.common.footer.pages.privacy.headings.7') }}</h2>
            <p>{{ $t('components.common.footer.pages.privacy.content.7') }}</p>
          </section>
        </main>
        <CommonFooter :subBg="true" />
      </div>
    </div>
  </template>
  

  <script setup>
const localePath = useLocalePath()
const route = useRoute()

// Redirect to correct i18n-prefixed route if user is on /privacy-policy without locale
if (route.path === '/privacy-policy') {
  navigateTo(localePath('/privacy-policy'))
}

useHead({
  title: '6 Degrees Technologies - Privacy Policy',
  meta: [
    { name: 'description', content: 'Read our privacy policy to understand how we collect and use your data.' },
    { property: 'og:title', content: '6 Degrees Technologies - Privacy Policy' },
    { property: 'og:description', content: 'Read our privacy policy to understand how we collect and use your data.' },
    { property: 'og:image', content: '/assets/imgs/meta/5.png' },
    { property: 'og:url', content: process.client ? window.location.href : '' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '6 Degrees Technologies - Privacy Policy' },
    { name: 'twitter:description', content: 'Read our privacy policy to understand how we collect and use your data.' },
    { name: 'twitter:image', content: '/assets/imgs/meta/5.png' },
    { name: 'twitter:url', content: process.client ? window.location.href : '' }
  ],
  bodyAttrs: { class: 'main-bg' },
  script: [{ src: "/assets/js/smoother-script.js", defer: true }]
});
</script>
