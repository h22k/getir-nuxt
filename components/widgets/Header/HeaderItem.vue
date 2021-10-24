<template>
  <div class="header-item">
    <client-only>
      <v-icon :name="iconName" scale=".9"/>
    </client-only>
    <nuxt-link to="/">
      {{title}}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    iconName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header-item {
  @apply flex items-center text-white/80 hover:text-white/100 transition-colors gap-x-2
}
</style>
