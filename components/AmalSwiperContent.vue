<template>
  <section class="section-t-space continue-reading-section">
    <div class="">
      <div class="d-flex bd-highlight">
        <div class="flex-fill bd-highlight title px-15">
          <h4>{{ title }}</h4>
        </div>
        <div class="d-flex bd-highlight me-3 title pb-2">
          <a href="{{ slug }}"><i class="ri-align-left"></i> Lihat semua</a>
        </div>
      </div>

      <Swiper
        class="swiper amal-slider-new px-10"
        :slides-per-view="1.8"
        :navigation="false"
        :spaceBetween="10"
        :modules="modules"
      >
        <SwiperSlide v-for="(item, index) in campaignData" :key="index">
          <a href="#" class="reading-list">
            <div class="reading-box">
              <div class="reading-detail">
                <div class="reading-image">
                  <img :src="item.image_preview" class="img-fluid" alt="" loading="lazy" />
                </div>
                <div class="reading-name ms-2 me-2">
                  <h5>{{ item.title }}</h5>
                </div>
              </div>
              <div class="reading-view">
                <div class="progress me-2 ms-2">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: calculateProgress(item.total_collected, item.target_amount) + '%' }"
                  ></div>
                </div>
                <div class="d-flex justify-content-between me-2 ms-2 mt-2">
                  <p class="theme-color">{{ formatNumber(parseFloat(item.target_amount)) }}</p>
                  <p v-if="item.end_date !== null" class="theme-color">Tersisa {{ getDiffDay(item.end_date) }} Hari</p>
                </div>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script>
import moment from "moment";
export default {
  props: {
    campaignData: Object,
    slug: String,
    title: String,
  },
  methods: {
    calculateProgress(totalCollected, targetAmount) {
      let sum = Math.round((totalCollected / targetAmount) * 100);
      return sum;
    },
    formatNumber(number) {
      return number.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
    },
    getDiffDay(date) {
      let startDate = moment();
      let endDate = moment(date);
      let daysLeft = endDate.diff(startDate, "days");
      return daysLeft;
    },
  },
};
</script>
