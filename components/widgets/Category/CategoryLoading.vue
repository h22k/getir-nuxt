<template>
  <div class="grid place-items-center mb-14">
    <client-only>
      <v-icon :name="iconName" spin scale="4" class="text-getir/70"/>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "CategoryLoading",
  props: {
    iconName: {
      type: String,
      default: 'ice-cream'
    }
  }
}
</script>

<style scoped>

</style>
