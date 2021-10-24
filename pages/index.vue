<template>
  <div>
    <HeaderSection/>
    <HeroSection/>
    <Categories/>
    <Campaigns/>
    <Favorites/>
  </div>
</template>

<script>
import Campaigns from "../components/Campaigns";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import MobileApp from "../components/MobileApp";
import Favorites from "../components/Favorites";

export default {
  components: {
    Campaigns,
    Cards,
    Categories,
    HeaderSection,
    HeroSection,
    FooterSection,
    MobileApp,
    Favorites
  }
}
</script>
