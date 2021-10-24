<template>
<div class="mt-8 max-w-screen-lg min-w-[1200px] mx-auto">
  <Title title="Favoriler"/>
  <div class="grid bg-white grid-cols-8 divide-gray-50 divide-y-2 divide-x-2">
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
</div>
</template>

<script>
import Title from "./widgets/public/Title";

import products from '../static/api/products.json'
import Product from "./widgets/Product/Product";
export default {
  name: "Favorites",
  components: {Product, Title},
  data() {
    return {
      products: []
    }
  },
  created() {
    this.products = products
  }
}
</script>

<style scoped>

</style>
