import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-01-01',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@lucide/vue',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'clsx',
        'tailwind-merge',
        'vue-sonner',
        'class-variance-authority',
        '@vueuse/core',
        'reka-ui',
      ],
    },
  },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-openapi-hyperfetch',
    '@pinia/nuxt',
    'nuxt-oidc-auth',
    'nuxt-authorization',
    // '@nuxtjs/web-vitals', // Incompatible Nuxt 4 — en attente de màj
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
    '@sentry/nuxt',
  ],
  imports: {
    ignore: ['openapi/composables/connectors/index'],
  },

  // ── Pinia ─────────────────────────────────────────────────────────
  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  // ── Color Mode ────────────────────────────────────────────────────
  colorMode: { classSuffix: '' },

  // ── shadcn-vue ────────────────────────────────────────────────────
  shadcn: { prefix: 'Ui', componentDir: '@/components/ui' },

  // ── PWA ───────────────────────────────────────────────────────────
  pwa: {
    registerType: 'autoUpdate',
    workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'] },
    manifest: {
      name: 'Nuxt Shadcn App',
      short_name: 'NuxtApp',
      description: 'Application full-stack Nuxt 4 + shadcn-vue + OpenAPI',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    devOptions: { enabled: false },
  },

  // ── OpenAPI ───────────────────────────────────────────────────────
  openapi: {
    input: './openapi-spec/jsonplaceholder.yaml',
    output: './openapi',
    generators: ['useFetch', 'useAsyncData', 'connectors'],
    enableAutoImport: true,
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },

  // ── OIDC Auth (Keycloak, GitHub, Logto) ───────────────────────────
  oidc: {
    defaultProvider: 'keycloak',
    providers: {
      keycloak: {
        clientId: process.env.KEYCLOAK_CLIENT_ID || '',
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
        baseUrl: process.env.KEYCLOAK_BASE_URL || 'http://localhost:8080/realms/mon-realm',
        redirectUri: process.env.KEYCLOAK_REDIRECT_URI || 'http://localhost:3000/auth/callback',
        logoutRedirectUri: process.env.KEYCLOAK_LOGOUT_REDIRECT_URI || 'http://localhost:3000',
        additionalScopes: ['profile', 'email'],
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        redirectUri: process.env.GITHUB_REDIRECT_URI || 'http://localhost:3000/auth/callback',
        logoutRedirectUri: process.env.GITHUB_LOGOUT_REDIRECT_URI || 'http://localhost:3000',
      },
      logto: {
        clientId: process.env.LOGTO_CLIENT_ID || '',
        clientSecret: process.env.LOGTO_CLIENT_SECRET || '',
        baseUrl: process.env.LOGTO_BASE_URL || 'http://localhost:3001',
        redirectUri: process.env.LOGTO_REDIRECT_URI || 'http://localhost:3000/auth/callback',
        logoutRedirectUri: process.env.LOGTO_LOGOUT_REDIRECT_URI || 'http://localhost:3000',
        additionalScopes: ['profile', 'email', 'roles'],
      },
    },
    middleware: { globalMiddlewareEnabled: false },
  },

  // ── Authorization ─────────────────────────────────────────────────
  authorization: {
    redirect: { onClient: '/auth/login', onServer: '/auth/login' },
  },

  // ── Cookie Control (RGPD) ─────────────────────────────────────────
  cookieControl: {
    closeModalOnClickOutside: true,
    mode: 'consent',
    isCookieIdVisible: false,
    isDashInDescription: false,
    isIframeBlocked: false,
    barPosition: 'bottom-full',
    cookies: {
      necessary: [
        {
          name: { fr: 'Cookies nécessaires', en: 'Necessary Cookies' },
          description: {
            fr: 'Cookies essentiels au fonctionnement du site (session, sécurité).',
            en: 'Essential cookies for the site to function.',
          },
          targetCookieIds: ['nuxt-session', 'oidc-session'],
        },
      ],
      analytics: [
        {
          name: { fr: 'Cookies analytiques', en: 'Analytics Cookies' },
          description: {
            fr: 'Cookies de mesure d\'audience et performance.',
            en: 'Audience measurement and performance cookies.',
          },
          targetCookieIds: ['_ga', '_ga_*', '_gid'],
        },
      ],
    },
    localeTexts: {
      fr: {
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Accepter les nécessaires',
        barDescription: 'Nous utilisons des cookies pour améliorer votre expérience.',
        barTitle: '🍪 Cookies & confidentialité',
        manageCookies: 'Personnaliser',
        save: 'Enregistrer',
        declineAll: 'Tout refuser',
      },
      en: {
        acceptAll: 'Accept all',
        acceptNecessary: 'Accept necessary',
        barDescription: 'We use cookies to improve your experience.',
        barTitle: '🍪 Cookies & Privacy',
        manageCookies: 'Customize',
        save: 'Save',
        declineAll: 'Decline all',
      },
    },
  },

  // ── Sentry ───────────────────────────────────────────────────────
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'production',
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
    disabled: process.env.NODE_ENV === 'development',
  },

  // ── i18n ──────────────────────────────────────────────────────────
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    lazy: true,
    restructureDir: '',
    langDir: 'locales',
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    seo: true,
  },

  // ── Runtime Config ────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    },
  },
})
