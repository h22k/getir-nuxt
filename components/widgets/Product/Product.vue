<template>
  <div class="flex flex-col gap-y-2 w-full p-3 !pb-0 items-center">
    <div class="relative w-[120px] h-[120px]">
      <img :src="product.image" class="w-full object-contain" alt="">
      <span class="absolute cursor-pointer inline-flex bg-white justify-center items-center text-getir/70 border-2 p-2 rounded-lg shadow-sm w-8 h-8 top-0 right-0">
          <client-only>
            <v-icon name="plus" scale=".7"/>
          </client-only>
        </span>
    </div>
    <div class="flex justify-center items-center">
      <span class="text-getir font-semibold">{{ product.price | currency }}</span>
    </div>
    <span class="text-black text-center text-sm leading-4 font-semibold">{{ product.title }}</span>
    <span class="text-black/40 text-center">{{ product.alt }}</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
