export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  
  css: ['~/assets/css/main.css'],
  
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    }
  },
  
  app: {
    head: {
      title: 'Brahmarambika Mallikarjuna Construction',
      meta: [
        { name: 'description', content: 'Quality construction services for residential and commercial projects. Building dreams, building trust since 2005.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
