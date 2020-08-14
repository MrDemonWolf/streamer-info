export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Streamer Information',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Basic NuxtJS App which allows users to get more information about them and others as well. All using the Twitch API.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#303059' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          regular: ['faSun', 'faMoon'],
          solid: [
            'faCaretDown',
            'faUnlock',
            'faHeart',
            'faEye',
            'faEnvelope',
            'faIdCard',
          ],
          brands: ['faTwitch'],
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Auth optains
   */
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    strategies: {
      twitch: {
        _scheme: 'oauth2',
        authorization_endpoint: `https://id.twitch.tv/oauth2/authorize`,
        userinfo_endpoint: 'https://api.twitch.tv/helix/users',
        scope: ['user:read:email'],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        redirect_uri: process.env.TWITCH_REDIRECT_URI,
        client_id: process.env.TWITCH_CLIENT_ID,
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE',
      },
    },
    tokenRequired: true,
    tokenType: 'Bearer',
  },
  env: {
    TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    TWITCH_REDIRECT_URI: process.env.TWITCH_REDIRECT_URI,
  },
  /*
   ** Build configuration
   */
  build: {},
}
