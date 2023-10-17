// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  routeRules: {
    '/api/**': {
      proxy: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/api/**" : "/api/**",
    },
    '/docs': {
      proxy: "http://127.0.0.1:8000/docs",
    },
    '/openapi.json': {
      proxy: "http://127.0.0.1:8000/openapi.json",
    }
  } 
})
