<template>
  <div v-if="$auth.loggedIn" class="relative inline-block text-left md:block">
    <button
      v-click-outside="accountDropdownHide"
      type="button"
      class="py-2 md:py-1 md:px-2 text-xl focus:outline-none justify-center w-full font-bold text-primary-500 dark:text-secondary-300 transition ease-in-out duration-150 font-roboto"
      @keydown.esc="accountDropdownHide"
      @click.prevent="accountDropdown"
    >
      {{ $auth.user.data[0].display_name }}
      <fa
        v-if="$auth.user.data[0].id === '45335452'"
        :icon="['fas', 'cog']"
        full-width
        title="Streamer Info Developer"
        class="inline-block ml-2 text-primary-500 dark:text-secondary-300 text-2xl"
      />
      <fa
        v-if="$auth.user.data[0].type === 'staff'"
        :icon="['fas', 'wrench']"
        full-width
        title="Twitch Staff"
        class="inline-block ml-2 text-primary-500 dark:text-secondary-300 text-2xl"
      />
      <Verified
        v-if="$auth.user.data[0].broadcaster_type === 'partner'"
        width="1.69rem"
        height="1.69rem"
        title="Verified Partner"
        class="inline-block ml-2 text-twitch-parther dark:text"
      />
      <fa
        v-if="$auth.user.data[0].broadcaster_type === 'affiliate'"
        :icon="['fas', 'heart']"
        full-width
        title="Affiliate"
        class="inline-block ml-2 text-primary-500 dark:text-secondary-300 text-2xl"
      />
    </button>
    <div
      class="origin-top-left md:origin-top-right absolute left-0 md:right-0 w-30 md:w-50"
      :class="accountNavActive ? 'block' : 'hidden'"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded border-gray-500 border-2 border border-opacity-25"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-white dark-hover:text-white dark-hover:bg-gray-700"
          aria-label="Color Mode"
          role="menuitem"
          @click="
            $colorMode.value === 'dark'
              ? ($colorMode.preference = 'light')
              : ($colorMode.preference = 'dark')
          "
        >
          <span>{{
            $colorMode.value === 'dark' ? 'Dark Mode' : 'Light Mode'
          }}</span>
          <fa
            v-if="$colorMode.value === 'light'"
            :icon="['far', 'sun']"
            class="w-6 h-6 align-middle"
          />
          <fa v-else :icon="['far', 'moon']" class="w-6 h-6 align-middle" />
        </div>
        <a
          href="#"
          class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-white dark-hover:text-white dark-hover:bg-gray-700"
          role="menuitem"
          @click.prevent="logout"
        >
          <fa :icon="['fas', 'unlock']" class="w-6 h-6 align-middle" />
          Logout</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Verified from '~/assets/vectors/verified.svg?inline'

export default {
  components: {
    Verified,
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      accountNavActive: false,
    }
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
  methods: {
    accountDropdown() {
      this.accountNavActive = !this.accountNavActive
    },
    accountDropdownHide() {
      this.accountNavActive = false
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
