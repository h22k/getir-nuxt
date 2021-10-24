import Vue from 'vue'
// Swiper 6.x
import { Swiper as SwiperClass, Pagination, Autoplay } from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
SwiperClass.use([Pagination, Autoplay])

// -------------------------------------------------

import 'swiper/swiper-bundle.css'

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
