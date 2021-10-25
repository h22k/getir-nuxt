<template>
  <div class="bg-white w-full flex hover:-translate-y-3 transition-all flex-col rounded-lg items-center gap-y-2 pt-15 pb-10 px-4">
    <img :src="item.photo" alt="">
    <h5 class="text-getir font-semibold text-xl tracking-tight mt-4">{{ item.title }}</h5>
    <p class="text-center text-gray-600">
      {{ item.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
