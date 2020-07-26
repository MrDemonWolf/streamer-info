<template>
  <div
    class="m-10 max-w-md mx-auto g-white shadow-lg rounded-lg overflow-hidden"
  >
    <img
      :src="`${profileimage}`"
      class="w-full h-56 object-cover object-center"
      alt="avatar"
    />
    <div class="flex items-center px-6 py-3 bg-gray-900">
      <h1 class="mx-3 text-white font-semibold text-2xl">
        {{ displayname }}
      </h1>
    </div>
    <div class="py-4 px-6">
      <p class="py-2 text-lg text-gray-700">
        {{ bio }}
      </p>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'heart']" />
        <h1 class="px-2 text-sm">
          {{ followercount }}
        </h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'eye']" />

        <h1 class="px-2 text-sm">
          {{ viewcount }}
        </h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <fa :icon="['fas', 'id-card']" />
        <h1 class="px-2 text-sm">
          {{ id }}
        </h1>
      </div>
      <div
        v-if="email !== 'false'"
        class="flex items-center mt-4 text-gray-700"
      >
        <fa :icon="['fas', 'envelope']" />
        <h1 class="px-2 text-sm">
          {{ email }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StreamerInfomation',
  props: {
    profileimage: {
      type: String,
      required: true,
    },
    displayname: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    followercount: {
      type: String,
      required: true,
    },
    viewcount: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: 'false',
      required: false,
    },
  },
}
</script>
