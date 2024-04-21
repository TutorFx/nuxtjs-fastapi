import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  devtools: { enabled: true },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  routeRules: {
    '/api/**': {
      proxy: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/**' : '/api/**',
    },
    '/docs': {
      proxy: 'http://127.0.0.1:8000/docs',
    },
    '/openapi.json': {
      proxy: 'http://127.0.0.1:8000/openapi.json',
    },
  },
})
