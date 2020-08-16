<template>
  <footer class="text-gray-700 body-font dark:text-white">
    <div
      class="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col"
    >
      <p class="text-gray-500 text-center md:text-right">
        © {{ copyrightYear }}
        <a
          href="https://www.mrdemonwolf.me"
          class="text-gray-600 ml-1 dark:text-secondary-200"
          rel="noopener noreferrer"
          target="_blank"
          >MrDemonWolf</a
        >
      </p>
      <span
        class="text-sm inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >this site is not affiliated with twitch™ or any of it's partners.
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear(),
    }
  },
}
</script>
