<template>
  <div v-if="$auth.loggedIn">
    <StreamerInfomation
      :id="$auth.user.data[0].id"
      :profileimage="$auth.user.data[0].profile_image_url"
      :displayname="$auth.user.data[0].display_name"
      :bio="$auth.user.data[0].description"
      :followercount="twitchFollowers.data.total"
      :viewcount="$auth.user.data[0].view_count"
      :email="$auth.user.data[0].email"
    />
  </div>
  <div v-else>
    <template>
      <div
        class="py-64"
        style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);"
      >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white">
            Have you ever wanted basic details on a Twitch Streamer? Are you a
            Developer who needs a Twitch User ID?
          </h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            Login today to get started.
          </h3>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import StreamerInfomation from '~/components/StreamerInfomation.vue'

export default {
  components: {
    StreamerInfomation,
  },

  async asyncData({ $axios, $auth, store }) {
    if ($auth.loggedIn) {
      const token = $auth.$storage._state['_token.twitch']
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
