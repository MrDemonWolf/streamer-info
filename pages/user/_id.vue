<template>
  <div
    v-if="
      $auth.loggedIn &&
      (this.$route.params.id === $auth.user.data[0].id ||
        this.$route.params.id.toLowerCase() === $auth.user.data[0].login)
    "
  >
    <StreamerInfomation
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
  </div>
  <div v-else-if="$auth.loggedIn">
    <StreamerInfomation
      :id="twitchUser.data.data[0].id"
      :profileimage="twitchUser.data.data[0].profile_image_url"
      :displayname="twitchUser.data.data[0].display_name"
      :bio="twitchUser.data.data[0].description"
      :followercount="twitchFollowers.data.total"
      :viewcount="twitchUser.data.data[0].view_count"
      :email="'false'"
      :broadcastertype="twitchUser.data.data[0].broadcaster_type"
      :accountype="twitchUser.data.data[0].type"
    />
  </div>
</template>
<script>
import StreamerInfomation from '~/components/StreamerInfomation.vue'

export default {
  components: {
    StreamerInfomation,
  },
  async asyncData({ params, error, $axios, $auth, store }) {
    if ($auth.loggedIn) {
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
        return error({
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
    }
  },
}
</script>
