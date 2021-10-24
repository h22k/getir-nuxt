<template>
  <div class="category-item group">
    <img :src="category.image" alt="" class="w-12 h-12 border-2 border-gray-50 rounded-lg mb-5">
    <span class="font-semibold text-sm group-hover:text-getir transition-colors leading-4 text-gray-700">{{category.title}}</span>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['category']
}
</script>

<style scoped>
.category-item {
  @apply flex justify-center cursor-pointer items-center flex-col max-w-full pt-3 pb-4 mb-4 transition-colors hover:bg-getir/10
}
</style>
