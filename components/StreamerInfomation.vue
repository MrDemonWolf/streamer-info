<template>
  <div
    class="m-10 max-w-md mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden"
  >
    <img
      :src="`${profileimage}`"
      class="w-full h-56 object-cover object-center"
      alt="avatar"
    />
    <div class="flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-600">
      <h1 class="text-primary-500 dark:text-white font-semibold text-2xl">
        {{ displayname }}
      </h1>
      <fa
        v-if="id === '45335452'"
        :icon="['fas', 'cog']"
        full-width
        title="Streamer Info Developer"
        class="ml-2 text-primary-500 dark:text-secondary-400 text-3xl"
      />
      <fa
        v-if="accountype === 'staff'"
        :icon="['fas', 'wrench']"
        full-width
        title="Twitch Staff"
        class="ml-2 text-primary-500 dark:text-secondary-400 text-3xl"
      />
      <Verified
        v-if="broadcastertype === 'partner'"
        width="1.85rem"
        height="1.85rem"
        title="Verified Partner"
        class="ml-2 text-twitch-parther dark:text"
      />
      <fa
        v-if="broadcastertype === 'affiliate'"
        :icon="['fas', 'heart']"
        full-width
        title="Affiliate"
        class="ml-2 text-primary-500 dark:text-secondary-400 text-3xl"
      />
    </div>
    <div class="py-4 px-6">
      <p v-if="bio" class="py-2 text-xl text-sm text-gray-700 dark:text-white">
        {{ bio }}
      </p>
      <div
        :class="{ bio: 'mt-4 ' }"
        class="flex items-center text-gray-700 dark:text-white"
      >
        <fa :icon="['fas', 'heart']" />
        <h1 class="px-2 text-sm">
          {{ followercount }}
        </h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700 dark:text-white">
        <fa :icon="['fas', 'eye']" />

        <h1 class="px-2 text-sm">
          {{ viewcount }}
        </h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700 dark:text-white">
        <fa :icon="['fas', 'id-card']" />
        <h1 class="px-2 text-sm">
          {{ id }}
        </h1>
      </div>
      <div
        v-if="email !== 'false'"
        class="flex items-center mt-4 text-gray-700 dark:text-white"
      >
        <fa :icon="['fas', 'envelope']" />
        <h1 class="px-2 text-sm">
          {{ email }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Verified from '~/assets/vectors/verified.svg?inline'

export default {
  name: 'StreamerInfomation',
  components: { Verified },
  props: {
    profileimage: {
      type: String,
      required: true,
    },
    displayname: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    followercount: {
      type: Number,
      required: true,
    },
    viewcount: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: 'false',
      required: false,
    },
    broadcastertype: {
      type: String,
      default: 'false',
      required: false,
    },
    accountype: {
      type: String,
      default: 'false',
      required: false,
    },
  },
}
</script>
