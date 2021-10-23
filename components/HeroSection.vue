<template>
    <div class="relative">
      <client-only>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="grid place-items-center">
            <img class="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="grid place-items-center">
            <img class="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="">
          </swiper-slide>
        </swiper>
      </client-only>
      <div class="absolute inset-0 w-full h-[500px] bg-gradient-to-r from-getir/90 to-transparent z-10"></div>
      <div class="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="">
          <h3 class="text-white text-4xl font-bold leading-10 mt-8 break-words">
            Dakikalar içinde <br> kapınızda
          </h3>
        </div>
        <div class="w-[400px] rounded-lg bg-gray-50 p-6 flex flex-col items-center">
          <h4 class="text-getir font-bold">Giriş yap veya kayıt ol</h4>
        </div>
      </div>
    </div>
</template>

<script>
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)

import 'swiper/swiper-bundle.css'

export default {
  name: 'HeroSection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: {
          delay: 3000
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
