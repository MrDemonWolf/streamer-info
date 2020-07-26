<template>
  <div
    v-if="$auth.loggedIn"
    class="m-10 max-w-md mx-auto g-white shadow-lg rounded-lg overflow-hidden"
  >
    <img
      :src="`${$auth.user.data[0].profile_image_url}`"
      class="w-full h-56 object-cover object-center"
      alt="avatar"
    />
    <div class="flex items-center px-6 py-3 bg-gray-900">
      <!-- <svg v-fclass="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
        <path
          d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"
        />
      </svg> -->
      <h1 class="mx-3 text-white font-semibold text-2xl">
        {{ $auth.user.data[0].display_name }}
      </h1>
    </div>
    <div class="py-4 px-6">
      <p class="py-2 text-lg text-gray-700">
        {{ $auth.user.data[0].description }}
      </p>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'heart']" />
        <h1 class="px-2 text-sm">{{ twitchFollowers.data.total }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'eye']" />

        <h1 class="px-2 text-sm">{{ $auth.user.data[0].view_count }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'id-card']" />
        <h1 class="px-2 text-sm">{{ $auth.user.data[0].id }}</h1>
      </div>
    </div>
  </div>
  <div
    v-else
    class="m-10 max-w-md mx-auto g-white shadow-lg rounded-lg overflow-hidden"
  >
    <h1>Hello World</h1>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, $auth, store }) {
    if ($auth.loggedIn) {
      const token = $auth.$storage._state['_token.twitch'] // eslint-disable-next-line no-console
      const twitchFollowers = await $axios.get(
        `https://api.twitch.tv/helix/users/follows?to_id=${$auth.user.data[0].id}`,
        {
          headers: { Authorization: `${token}` },
        }
      )
      return { twitchFollowers }
    }
  },
}
</script>
