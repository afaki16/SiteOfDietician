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
    }
  },

 
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: ["~/assets/main.css"],
  components: true,
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
 
  
})
