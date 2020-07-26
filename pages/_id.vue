<template>
  <div
    v-if="$auth.user"
    class="m-10 max-w-md mx-auto g-white shadow-lg rounded-lg overflow-hidden"
  >
    <img
      :src="`${twitchUser.data.data[0].profile_image_url}`"
      class="w-full h-56 object-cover object-center"
      alt="avatar"
    />
    <div class="flex items-center px-6 py-3 bg-gray-900">
      <h1 class="mx-3 text-white font-semibold text-2xl">
        {{ twitchUser.data.data[0].display_name }}
      </h1>
    </div>
    <div class="py-4 px-6">
      <p class="py-2 text-lg text-gray-700">
        {{ twitchUser.data.data[0].description }}
      </p>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'heart']" />
        <h1 class="px-2 text-sm">{{ twitchFollowers.data.total }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'eye']" />

        <h1 class="px-2 text-sm">{{ twitchUser.data.data[0].view_count }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'id-card']" />
        <h1 class="px-2 text-sm">{{ twitchUser.data.data[0].id }}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'envelope']" />
        <h1 class="px-2 text-sm">{{ twitchUser.data.data[0].email }}</h1>
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
  async asyncData({ params, error, $axios, $auth, store }) {
    const token = $auth.$storage._state['_token.twitch']
    let twitchUser = null
    if (params.id.match(/^[0-9]+$/)) {
      twitchUser = await $axios.get(
        `https://api.twitch.tv/helix/users/?id=${params.id}`,
        {
          headers: { Authorization: `${token}` },
        }
      )
    } else {
      twitchUser = await $axios.get(
        `https://api.twitch.tv/helix/users/?login=${params.id}`,
        {
          headers: { Authorization: `${token}` },
        }
      )
    }
    if (!twitchUser) {
      error({
        statusCode: 404,
        message: 'There is no Twitch User with the ID you sent.',
      })
    }
    const twitchFollowers = await $axios.get(
      `https://api.twitch.tv/helix/users/follows?to_id=${twitchUser.data.data[0].id}`,
      {
        headers: { Authorization: `${token}` },
      }
    )
    return { twitchUser, twitchFollowers }
  },
}
</script>
