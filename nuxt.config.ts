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

        // Google Tag Manager
        {
          id: "gtm-script",
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZK7BH6Z');
          `,
          type: "text/javascript",
          charset: "utf-8"
        },

        // Google Ads
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

        // Google Analytics
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

        // Meta Pixel
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

        // TikTok Pixel
        {
          id: "tiktok-pixel",
          innerHTML: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq, ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              var s=d.createElement("script");s.type="text/javascript";s.async=!0;
              s.src=r+"?sdkid="+e+"&lib="+t;
              var f=d.getElementsByTagName("script")[0];
              f.parentNode.insertBefore(s,f)};
              ttq.load("D0M44IRC77U1R4KNNJAG");
              ttq.page();
            }(window, document, 'ttq');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },

        // Snap Pixel
        {
          id: "snap-pixel",
          innerHTML: `
            (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
            {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
            a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
            r.src=n;var u=t.getElementsByTagName(s)[0];
            u.parentNode.insertBefore(r,u);})(window,document,
            'https://sc-static.net/scevent.min.js');

            snaptr('init', '3f912d57-001d-498b-874e-a59853c20d7c');
            snaptr('track', 'PAGE_VIEW');
          `,
          type: "text/javascript",
          charset: "utf-8"
        }
      ],
      noscript: [
        {
          children: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZK7BH6Z" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
        },
        {
          children: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=30178781758373644&ev=PageView&noscript=1" />`
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "gtm-script": ["innerHTML"],
        "gtag-config": ["innerHTML"],
        "analytics-config": ["innerHTML"],
        "meta-pixel": ["innerHTML"],
        "tiktok-pixel": ["innerHTML"],
        "snap-pixel": ["innerHTML"]
      }
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
