import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/scss/themes/dark/app-dark.scss",
    "@/assets/scss/app.scss",
    "@/assets/scss/iconly.scss",
  ],
  alias: {
    '@': resolve(__dirname, './'),
    'assets': resolve(__dirname, './assets'),
  },

  plugins: [
    { src: '~/plugins/bootstrap.client', mode: 'client' },
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classPrefix: 'theme-',
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'Nunito': true,
    },
  },
})
