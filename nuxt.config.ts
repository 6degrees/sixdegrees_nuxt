export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  compatibilityDate: '2025-04-22',
  typescript: {
    shim: false,
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
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "keywords", content: "" },
        {
          name: "description",
          content:
            "Where your technological future, comes today. The limits to technology uses is beyond imagination, digitize your life with us",
        },
        { name: "author", content: "Six Degrees Technologies" },
      ],
      link: [
        { rel: "shortcut icon", href: "/assets/imgs/favicon.ico" },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        { rel: "stylesheet", href: "/assets/fonts/mona-sans/style.css" },
        { rel: "stylesheet", href: "/assets/fonts/SST/style.css" },
        { rel: "stylesheet", href: "/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
      ],
      script: [
        { src: '/assets/js/plugins.js' },
        { src: '/assets/js/isotope.pkgd.min.js' },
        { src: '/assets/js/wow.min.js' },
        { src: '/assets/js/gsap.min.js' },
        { src: '/assets/js/ScrollTrigger.min.js' },
        { src: '/assets/js/ScrollSmoother.min.js' },
        { src: '/assets/js/scripts.js', defer: true },
        // Google Ads Tag
        {
          src: "https://www.googletagmanager.com/gtag/js?id=AW-16793981677",
          async: true,
        },
        {
          id: "gtag-config",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16793981677');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
        // Google Analytics Tag
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-0WTRN79WNX",
          async: true,
        },
        {
          id: "analytics-config",
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WTRN79WNX');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
        // Meta Pixel Code
        {
          id: "meta-pixel",
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '30178781758373644');
            fbq('track', 'PageView');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      noscript: [
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=30178781758373644&ev=PageView&noscript=1" />`
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "gtag-config": ["innerHTML"],
        "analytics-config": ["innerHTML"],
        "meta-pixel": ["innerHTML"],
      },
    },
  },
  css: ["swiper/css/bundle", "@/assets/css/main.css"],
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
  modules: ["@nuxtjs/i18n", "nuxt-swiper"],
  hooks: {
    "vite:extendConfig": (config) => {
      if (typeof config.server!.hmr === "object") {
        config.server!.hmr.protocol = process.env.HMR_PROTOCOL || "ws";
      }
    },
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
        hrf: "/en",
      },
      {
        code: "ar",
        name: "العربية",
        iso: "ar",
        dir: "rtl",
        file: "ar",
        hrf: "/ar",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
});
