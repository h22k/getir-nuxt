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

</style>
