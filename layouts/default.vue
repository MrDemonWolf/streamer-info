<template>
  <div>
    <body class="flex flex-col min-h-screen">
      <header id="header" class="bg-white dark:bg-gray-800">
        <Navigation />
      </header>
      <nuxt class="flex-grow" />
      <Footer />
    </body>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
