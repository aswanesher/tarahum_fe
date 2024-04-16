<template>
  <div class="custom-container">
    <!-- Slider main container -->
    <!-- <div v-if="dataStore.isLoading" class="d-flex justify-content-center">
      <img src="../assets/images/spinner.gif" />
    </div> -->
    <div v-if="dataStore.error">Error: {{ store.error.message }}</div>
    <Swiper
      v-if="!dataStore.isLoading && !dataStore.error"
      class="swiperBanner"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :navigation="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(item, index) in dataStore.items.slider" :key="index">
        <div class="poster-box">
          <a :href="item.external_url">
            <img :src="item.url" class="img-fluid" alt="" loading="lazy" />
          </a></div
      ></SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
export default {
  props: {
    dataStore: Object,
  },
};
</script>
<style>
.custom-container {
  padding: 0px !important;
}
</style>
