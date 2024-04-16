<template>
  <section class="section-t-space poster-section mt-0 mb-4">
    <div class="custom-container">
      <!-- Slider main container -->
      <div class="swiperBanner px-5">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="poster-box">
              <a :href="bannerData.external_url">
                <NuxtImg :src="bannerData.url" class="img-fluid" alt="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiperBanner-pagination text-center mb-4"></div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    bannerData: Object,
  },
};
</script>
