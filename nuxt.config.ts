export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/scss/main.scss',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Alex Rivera — DevSecOps & Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Alex Rivera, a DevSecOps and Software Engineer specializing in cloud security, CI/CD pipelines, and full-stack development.',
        },
        { name: 'theme-color', content: '#0a0d12' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap',
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },

  nitro: {
    preset: 'static',
  },

  typescript: {
    strict: true,
  },
})
