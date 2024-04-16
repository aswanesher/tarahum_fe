<template>
  <section class="section-t-space continue-reading-section">
    <div class="">
      <div class="d-flex bd-highlight">
        <div class="flex-fill bd-highlight title px-15">
          <h4>{{ titleWidget }}</h4>
        </div>
        <div class="d-flex bd-highlight me-3 title pb-2">
          <RouterLink :to="`ilmu/category/${slugWidget}`"><i class="ri-align-left"></i> Lihat semua</RouterLink>
        </div>
      </div>

      <Swiper
        class="category-slider-new px-10 swiper-initialized swiper-horizontal"
        :slides-per-view="1.8"
        :navigation="false"
        :spaceBetween="10"
        :modules="modules"
      >
        <SwiperSlide v-for="(item, index) in eventDataWidget.event" :key="index">
          <RouterLink :to="`ilmu/${item.slug}`" class="reading-list">
            <div class="reading-box">
              <div class="reading-detail">
                <div class="reading-image">
                  <img :src="item.image_preview_url" class="img-fluid" alt="" loading="lazy" />
                </div>
                <div class="reading-name">
                  <h5>{{ item.title }}</h5>
                </div>
              </div>
              <div class="reading-view">
                <p class="theme-color"><i class="ri-play-list-2-line"></i> Video Series</p>
              </div>
            </div>
          </RouterLink>
        </SwiperSlide>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </Swiper>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    eventDataWidget: Object,
    titleWidget: null,
    slugWidget: null,
  },
};
</script>
<style>
.custom-container {
  padding: 0px !important;
}
.reading-list .reading-box {
  padding: 15px 3px 12px 12px !important;
}
</style>
