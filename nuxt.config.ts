// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      title: 'Nisa Sakar | Uzman Diyetisyen - Sağlıklı Beslenme ve Diyet Danışmanlığı',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Kişiye özel diyet programları, online diyet danışmanlığı, sağlıklı beslenme önerileri ve profesyonel diyetisyen hizmetleri.'
      },
      {
        name: 'keywords',
        content: 'diyetisyen, online diyet, beslenme danışmanlığı, kilo verme, sağlıklı beslenme, diyet programı, araklı oruç'
      },
      { name: 'author', content: 'Diyetisyen Nisa Sakar' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Turkish' },
      { name: 'revisit-after', content: '7 days' }
    ],
    link: [
      { rel: 'icon', href: '/assets/images/ss.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
      },
      {
        rel: 'canonical',
        href: 'https://nisasakar.com'
      }
    ]
  }
  },
  
  
   
    nitro: {
      preset: 'node-server' // Node.js sunucu olarak çıkış alacak
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
  
  
})

