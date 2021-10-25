<template>
  <div class="root-div mt-8">
    <Title title="Kampanyalar"/>
    <client-only>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="campaign in campaigns" :key="campaign.id" class="grid place-items-center">
          <img class="w-[400px] h-[200px] rounded-lg object-contain" :src="campaign.image" alt="">
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import campaigns from '../static/api/campaigns.json'
import Title from "./widgets/public/Title";
export default {
  name: "Campaigns",
  components: {Title},
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
