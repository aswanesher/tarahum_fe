<template>
  <section class="section-t-space popular-course-section">
    <div class="custom-container mb-4">
      <div class="d-flex bd-highlight">
        <div class="flex-fill bd-highlight title px-15">
          <h4>{{ title }}</h4>
        </div>
        <div class="d-flex bd-highlight me-3 title pb-2">
          <a href="{{ slug }}"><i class="ri-align-left"></i> Lihat semua</a>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-12" v-for="(item, index) in campaignData" :key="index">
          <div class="popular-box mx-3">
            <div class="d-flex">
              <div class="p-2 w-25 flex-fill bd-highlight align-self-center">
                <a href="">
                  <img :src="item.image_preview" class="img-fluid rounded" alt="" loading="lazy" />
                </a>
              </div>
              <div class="popular-detail ms-2 m-2 p-2 flex-fill bd-highlight">
                <a href="">
                  <h5>{{ item.title }}</h5>
                </a>
                <div class="progress mt-2" style="height: 3px">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: calculateProgress(item.total_collected, item.target_amount) + '%' }"
                  ></div>
                </div>
                <ul class="rating-box mt-2">
                  <li>
                    <ul class="rating">
                      <li class="title-color text-dark">{{ formatNumber(parseFloat(item.target_amount)) }}</li>
                    </ul>
                  </li>
                  <li v-if="item.end_date !== null" class="theme-color">
                    <small>Tersisa {{ getDiffDay(item.end_date) }} Hari</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      // Format number using toLocaleString()
      return number.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
    },
    getDiffDay(date) {
      // Get current date
      let startDate = moment();
      // Parse end date from item
      let endDate = moment(date);
      // Calculate difference in days
      let daysLeft = endDate.diff(startDate, "days");
      return daysLeft;
    },
  },
};
</script>
