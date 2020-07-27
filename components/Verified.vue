<template>
  <svg
    title="Verified Partner"
    :width="size"
    :height="size"
    version="1.1"
    viewBox="0 0 20 20"
    x="0px"
    y="0px"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z"
    ></path>
  </svg>
</template>
<style scoped>
svg {
  fill: #772ce8;
}
</style>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '1rem',
      required: false,
    },
  },
}
</script>
