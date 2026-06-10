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
  modules: ['shadcn-nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt', 'nuxt-openapi-hyperfetch'],
  /**
   * Nuxt auto-imports configuration.
   * Exclude connector barrel index files to avoid duplicate import warnings
   * when nuxt-openapi-hyperfetch generates connectors.
   */
  imports: {
    ignore: ['openapi/composables/connectors/index'],
  },
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    },
    manifest: {
      name: 'Nuxt Shadcn App',
      short_name: 'NuxtApp',
      description: 'Application full-stack Nuxt 4 + shadcn-vue + OpenAPI',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    devOptions: {
      enabled: false,
    },
  },
  openapi: {
    input: './openapi-spec/jsonplaceholder.yaml',
    output: './openapi',
    generators: ['useFetch', 'useAsyncData', 'connectors'],
    enableAutoImport: true,
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    },
  },
})
