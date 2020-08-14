<template>
  <div>
    <body class="flex flex-col min-h-screen">
      <nav
        class="flex items-center lg:justify-between justify-center flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700"
      >
        <div
          class="justify-between flex w-auto border-b-0 pl-6 pr-2 border-solid border-gray-300 mb-2 lg:mb-0"
        >
          <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <Logo width="40" height="40" />
            <span class="font-semibold text-xl tracking-tight display-inline"
              >Streamer Information</span
            >
          </div>
        </div>
        <div class="flex">
          <div v-if="$auth.loggedIn" class="relative text-gray-600">
            <input
              class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              @keyup.enter="search"
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966;"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
          <a
            v-if="$auth.loggedIn"
            class="hover:bg-white hover:text-black bg-purple-700 text-white font-bold py-2 px-4 shadow-lg uppercase tracking-wider ml-2"
            @click.prevent="logout"
          >
            <fa :icon="['fas', 'lock']" /> Logout
          </a>

          <a
            v-else
            class="hover:bg-white hover:text-black bg-purple-700 text-white font-bold py-2 px-4 shadow-lg uppercase tracking-wider"
            @click.prevent="loginWithTwitch"
          >
            Login With Twitch <fa :icon="['fab', 'twitch']" />
          </a>
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
            © 2020
            <a
              href="https://www.mrdemonwolf.me"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >MrDemonWolf</a
            >
          </p>
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
            >this site is not affiliated with twitch™ or any of it's partners.
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
import Logo from '~/assets/vectors/logo.svg?inline'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Logo,
    Loading,
  },
  serach() {
    return this.$store.state.serach.value
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
    search(e) {
      this.$router.push(`/${e.target.value}`)
      this.$store.commit('serach/set', e.target.value)
      e.target.value = ''
    },
  },
}
</script>
