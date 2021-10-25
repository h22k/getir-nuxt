<template>
  <div class="root-div mt-8 mb-[300px]">
    <div class="grid grid-cols-3 gap-x-4">
      <CardItem v-for="card in 3" :item="item" :key="card"/>
    </div>
  </div>
</template>

<script>
import CardItem from "./widgets/Card/CardItem";
export default {
  name: "Cards",
  components: {CardItem},
  data() {
    return {
      item: {
        photo: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
        title: 'Her siparişinize bir kampanya',
        desc: 'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
      }
    }
  }
}
</script>

<style scoped>

</style>
