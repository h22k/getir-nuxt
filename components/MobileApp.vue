<template>
  <div class="mt-8 root-div rounded-lg bg-url min-h-[312px]">
    <div class="flex justify-between pl-3 min-h-[312px] items-center z-20">
      <div class="flex-1 max-w-1/2 flex flex-col gap-y-3 pl-10">
        <div class="text-white">
          <h4 class="text-3xl font-bold">Getir'i indirin!</h4>
        </div>
        <div class="text-white max-w-[60%] whitespace-pre-wrap">
          <span class="text-base font-bold ">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
        </div>
        <div class="grid grid-cols-3 gap-x-2 mt-2">
          <AppImage image-src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
          <AppImage image-src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
          <AppImage image-src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
        </div>
      </div>
      <div class="flex-1 mt-auto">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" class="w-full h-full object-contain" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import AppImage from "./widgets/MobileApp/AppImage";
export default {
  name: "MobileApp",
  components: {
    AppImage
  }
}
</script>

<style scoped>
.bg-url {
  background-image: url("https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png");
  @apply bg-getir
}
.app-img {
  @apply object-contain cursor-pointer
}
</style>
