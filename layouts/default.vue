<template>
  <div>
    <body class="flex flex-col min-h-screen">
      <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <logo width="40" height="40" />
          <span class="font-semibold text-xl tracking-tight"
            >Stremaer Information</span
          >
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div>
          <button
            v-if="$auth.loggedIn"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-purple-700 transition ease-in-out duration-600 hover:border-white hover:text-white hover:bg-transparent mt-4 lg:mt-0"
            @click.prevent="logout"
          >
            <fa :icon="['fas', 'lock']" /> Logout
          </button>
          <button
            v-else
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-purple-700 transition ease-in-out duration-600 hover:border-white hover:text-white hover:bg-transparent mt-4 lg:mt-0"
            @click.prevent="loginWithTwitch"
          >
            <fa :icon="['fab', 'twitch']" /> Login With Twitch
          </button>
        </div>
      </nav>
      <loading
        :active.sync="loader.isLoading"
        :can-cancel="false"
        :color="loader.color"
        :background-color="loader.bgColor"
        :height="loader.height"
        :width="loader.width"
        :is-full-page="loader.fullPage"
      />
      <nuxt class="flex-grow" />
      <footer class="text-gray-700 body-font">
        <div
          class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
        >
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            © 2020 MrDemonWolf —
            <a
              href="https://www.github.com/nathanhenniges"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >@nathanhenniges</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
            >this site is not affiliated with twitch™ or any of it's panthers.
          </span>
        </div>
      </footer>
    </body>
  </div>
</template>

<style>
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1; /* Or flex-grow: 1;*/
}
</style>
<script>
import Loading from 'vue-loading-overlay'
import Logo from '~/components/Logo.vue'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: {
    Logo,
    Loading,
  },
  data() {
    return {
      loader: {
        isLoading: false,
        fullPage: true,
        color: '#007bff',
        bgColor: '#ffffff',
        height: 100,
        width: 100,
      },
    }
  },
  methods: {
    async loginWithTwitch() {
      this.loader.isLoading = true
      await this.$auth.loginWith('twitch')
      this.loader.isLoading = false
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
