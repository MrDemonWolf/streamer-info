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
    Hello World
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
