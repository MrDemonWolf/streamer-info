<template>
  <nav
    class="container mx-auto flex-wrap py-4 px-6 lg:px-12 flex justify-between"
  >
    <div
      class="flex items-center flex-no-shrink text-primary-500 dark:text-white"
    >
      <Logo width="40px" height="40px" />
      <span class="font-semibold text-xl ml-2">Streamer Information</span>
    </div>
    <div class="md:hidden flex items-center">
      <button
        class="px-3 py-2 border rounded text-primary-500 border-primary-500 hover:text-primary-400 hover:border-primary-400 dark:text-white dark:border-white dark-hover:text-gray-100 dark-hover:border-gray-100"
        @click.prevent="navigationActive"
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
    <div
      class="w-full md:flex md:items-center md:w-auto mt-5 md:mt-0"
      :class="mobileNavActive ? 'block ' : 'hidden'"
    >
      <ul v-if="!$auth.loggedIn" class="list-reset md:flex justify-end">
        <li>
          <a
            class="inline-block hover:bg-white hover:text-black bg-purple-700 text-white font-bold py-2 px-4 shadow-lg uppercase tracking-wider md:py-1 md:px-2 font-roboto"
            @click.prevent="loginWithTwitch"
          >
            Login With Twitch <fa :icon="['fab', 'twitch']" />
          </a>
        </li>
      </ul>
      <div
        v-if="!$auth.loggedIn"
        class="relative inline-block text-left md:block"
      >
        <button
          class="py-2 md:py-1 md:px-2 focus:outline-none"
          aria-label="Color Mode"
          @click="
            $colorMode.value === 'dark'
              ? ($colorMode.preference = 'light')
              : ($colorMode.preference = 'dark')
          "
        >
          <fa
            v-if="$colorMode.value === 'light'"
            :icon="['far', 'sun']"
            class="text-black"
          />
          <fa v-else :icon="['fas', 'moon']" class="text-white" />
        </button>
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
      </div>
      <AccountDropdown />
    </div>
  </nav>
</template>
<script>
import AccountDropdown from '~/components/AccountDropdown.vue'
import Logo from '~/assets/vectors/logo.svg?inline'

export default {
  components: {
    Logo,
    AccountDropdown,
  },
  serach() {
    return this.$store.state.serach.value
  },
  data() {
    return {
      mobileNavActive: false,
    }
  },
  methods: {
    async loginWithTwitch() {
      this.$nuxt.$loading.start()
      await this.$auth.loginWith('twitch')
      this.$nuxt.$loading.finish()
    },
    search(e) {
      this.$router.push(`/user/${e.target.value}`)
      this.$store.commit('serach/set', e.target.value)
      e.target.value = ''
    },
    navigationActive() {
      this.mobileNavActive = !this.mobileNavActive
    },
  },
}
</script>
