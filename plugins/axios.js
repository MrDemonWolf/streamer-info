export default function ({ $axios, redirect }) {
  $axios.setHeader('Client-ID', process.env.TWITCH_CLIENT_ID)
}
