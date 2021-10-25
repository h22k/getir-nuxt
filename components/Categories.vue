<template>
  <div class="bg-white py-6">
    <div class="root-div">
      <Title title="Kategoriler"/>
      <div v-if="categories.length" class="grid xl:grid-cols-10 lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
        <Category :key="category.id" v-for="category in categories" :category="category"/>
      </div>
      <CategoryLoading v-else/>
    </div>
  </div>
</template>

<script>
import categories from '../static/api/categories.json'
import Category from "./widgets/Category/Category";
import CategoryLoading from "./widgets/Category/CategoryLoading";
import Title from "./widgets/public/Title";

export default {
  name: "Categories",
  components: {Title, CategoryLoading, Category},
  data() {
    return {
      categories: []
    }
  },
  created() {
    setTimeout(() => this.categories = categories, 2000)
  }
}
</script>

<style scoped>

</style>
