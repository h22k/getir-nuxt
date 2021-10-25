<template>
  <figure>
    <img :src="imageSrc" class="image" alt="">
  </figure>
</template>

<script>
export default {
  name: "AppImage",
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.image {
  @apply hover:scale-95 transition-all cursor-pointer
}
</style>
