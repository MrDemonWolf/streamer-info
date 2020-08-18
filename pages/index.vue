<template>
  <div>
    <StreamerInfomation
      v-if="$auth.loggedIn"
      :id="$auth.user.data[0].id"
      :profileimage="$auth.user.data[0].profile_image_url"
      :displayname="$auth.user.data[0].display_name"
      :bio="$auth.user.data[0].description"
      :followercount="twitchFollowers.data.total"
      :viewcount="$auth.user.data[0].view_count"
      :email="$auth.user.data[0].email"
      :broadcastertype="$auth.user.data[0].broadcaster_type"
      :accountype="$auth.user.data[0].type"
    />
    <NotSignedInJumbotron v-else />
  </div>
</template>
<script>
import StreamerInfomation from '~/components/StreamerInfomation.vue'
import NotSignedInJumbotron from '~/components/NotSignedInJumbotron.vue'
export default {
  components: {
    StreamerInfomation,
    NotSignedInJumbotron,
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
