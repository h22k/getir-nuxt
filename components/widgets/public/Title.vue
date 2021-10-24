<template>
  <h4 class="title">{{ title }}</h4>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.title {
  @apply mb-4 text-black font-semibold text-sm leading-5
}
</style>
