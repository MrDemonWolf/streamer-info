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
      <NavigationSearch v-if="$auth.loggedIn" class="flex" />
      <AccountDropdown />
    </div>
  </nav>
</template>
<script>
import NavigationSearch from '~/components/NavigationSearch.vue'
import AccountDropdown from '~/components/AccountDropdown.vue'
import Logo from '~/assets/vectors/logo.svg?inline'

export default {
  components: {
    Logo,
    NavigationSearch,
    AccountDropdown,
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
      e.target.value = ''
    },
    navigationActive() {
      this.mobileNavActive = !this.mobileNavActive
    },
  },
}
</script>
