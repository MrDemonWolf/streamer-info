<template>
  <loading
    :active.sync="loader.isLoading"
    :can-cancel="false"
    :color="loader.color"
    :background-color="loader.bgColor"
    :height="loader.height"
    :width="loader.width"
    :is-full-page="loader.fullPage"
  />
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loader: {
        isLoading: true,
        fullPage: true,
        color: '#007bff',
        bgColor: '#ffffff',
        height: 64,
        width: 64,
      },
    }
  },
}
</script>
