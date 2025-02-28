// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nisa Sakar, kişiye özel beslenme programları ile sağlıklı yaşam yolculuğuna adım atmanızı sağlar. Diyetisyenlik hizmeti ile sağlıklı kilo kontrolü ve dengeli beslenme.'
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nisasakar.com'
        },  
      ]
    },
  },
  
  // Vercel için optimize edilmiş nitro ayarları
  nitro: {
    preset: 'vercel',
    // Sunucu tarafındaki isteklerin cache süresini arttırın
    routeRules: {
      '/**': { swr: 600 } // 10 dakikalık cache
    },
    // Sunucu tarafı fonksiyonlarının minify edilmesini sağlayın
    minify: true
  },
  
  // Runtime config ekleyin
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://nisasakar.com'
    }
  },
  
  // SSR etkinleştirin (varsayılan olarak etkin ama açıkça belirtin)
  ssr: true,
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true,
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  
  // Build optimizasyonları
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router']
          }
        }
      }
    },
    // Cold start süresini azaltmak için
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  }
})

