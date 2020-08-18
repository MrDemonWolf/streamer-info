<template>
  <button
    class="py-2 md:py-1 md:px-2 focus:outline-none"
    aria-label="Color Mode"
    @click="
      $colorMode.value === 'dark'
        ? ($colorMode.preference = 'light')
        : ($colorMode.preference = 'dark')
    "
  >
    <fa
      v-if="$colorMode.value === 'light'"
      :icon="['far', 'sun']"
      class="text-black"
    />
    <fa v-else :icon="['far', 'moon']" class="text-white" />
  </button>
</template>
