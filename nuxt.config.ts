import react from '@vitejs/plugin-react';

export default defineNuxtConfig({
  ssr: true,
  devtools: {enabled: false},
  typescript: {
    shim: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {},
  app: {
    head: {
      title: "6 Degrees Technologies",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {charset: "utf-8"},
        {"http-equiv": 'X-UA-Compatible', content: "IE=edge"},
        {name: 'keywords', content: ''},
        {
          name: 'description',
          content: 'Where your technological future, comes today. The limits to technology uses is beyond imagination, digitize your life with us'
        },
        {name: 'author', content: 'Six Degrees Technologies'}
      ],
      link: [
        {rel: 'shortcut icon', href: '/assets/imgs/favicon.ico'},
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap'
        },
        // CSS
        {rel: 'stylesheet', href: '/assets/fonts/mona-sans/style.css'},
        {rel: 'stylesheet', href: '/assets/css/plugins.css'},
        {rel: 'stylesheet', href: '/assets/css/style.css'},
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css'
        },
      ],
      script: [
        {src: '/assets/js/bootstrap.bundle.min.js'},
        {src: '/assets/js/plugins.js'},
        {src: '/assets/js/isotope.pkgd.min.js'},
        {src: '/assets/js/wow.min.js'},
        {src: '/assets/js/gsap.min.js'},
        {src: '/assets/js/ScrollTrigger.min.js'},
        {src: '/assets/js/ScrollSmoother.min.js'},
        {src: '/assets/js/scripts.js', defer: true},
        {src: 'https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js', type: 'module'} // Add Spline viewer script
      ]
    }
  },
  css: [
    'swiper/css/bundle',
    '@/assets/css/main.css'
  ],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  vite: {
    plugins: [
      react()
    ]
  },
  i18n: {
    lazy: true,
    strategy: "prefix",
    langDir: "locales/",
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en",
        dir: "ltr",
        file: "en",
        hrf: "/en"
      },
      {
        code: "ar",
        name: "العربية",
        iso: "ar",
        dir: "rtl",
        file: "ar",
        hrf: "/ar"
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});