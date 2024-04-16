<template>
  <section class="section-t-space continue-reading-section mt-0">
    <div class="">
      <div class="title px-15">
        <h4>Kumpulan Do'a</h4>
      </div>
      <Swiper
        class="amal-slider-new px-15 mb-4"
        :slides-per-view="1.8"
        :navigation="false"
        :spaceBetween="10"
        :modules="modules"
      >
        <SwiperSlide v-for="(item, index) in testimonialData" :key="index">
          <div class="card">
            <div class="card-body testimonial-body">
              <h5 class="card-text">
                {{ item.message }}
              </h5>
              <div class="d-flex justify-content-end">
                <blockquote class="blockquote mb-0 mt-4 pull-right">
                  <p>{{ item.member.title }} {{ item.member.firstName }}</p>
                </blockquote>
              </div>
            </div>
            <a href="#" class="sendReaction" data-id="1">
              <div class="card-footer testimonial-footer d-flex justify-content-between mb-0">
                <p><i class="ri-heart-fill text-danger"></i> Aamiin</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    testimonialData: Object,
  },
  filters: {
    capitalize(value) {
      console.log(value);
      return value.toUpperCase();
    },
  },
};
</script>
