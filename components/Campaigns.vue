<template>
  <div class="mt-8 max-w-screen-lg min-w-[1200px] mx-auto">
    <h4 class="mb-4 text-black font-semibold text-sm leading-5">Kampanyalar</h4>
    <client-only>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="campaign in campaigns" :key="campaign.id" class="grid place-items-center">
          <img class="w-[400px] h-[200px] rounded-lg object-cover" :src="campaign.image" alt="">
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="grid gap-x-16 gap-y-2 sm:grid-cols-1 md:grid-cols-3">
<!--      <div v-for="campaign in campaigns" class="w-[400px] h-[200px]">-->
<!--        <img :src="campaign.image" class="w-full rounded-lg" alt="">-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import campaigns from '../static/api/campaigns.json'
export default {
  name: "Campaigns",
  data() {
    return {
      campaigns: [],
      swiperOptions: {
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1280: {
            spaceBetween: 16,
            slidesPerView: 2
          },
          1281: {
            spaceBetween: 16,
            slidesPerView: 3,
          }
        }
      }
    }
  },
  created() {
    this.campaigns = campaigns
  }
}
</script>

<style scoped>

</style>
