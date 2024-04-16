<template>
  <main class="position-relative">
    <HeaderContent />
    <SwiperBanner :dataStore="store" />
    <SidebarMenu />
    <div v-if="store.isLoading" class="d-flex justify-content-center">
      <img src="../assets/images/spinner.gif" />
    </div>
    <div v-if="store.error">Error: {{ store.error.message }}</div>
    <div v-for="(item, index) in store.items.widgets" :key="index">
      <div v-for="(itemwidget, indexwidget) in item" :key="indexwidget">
        <div v-if="indexwidget === 'campaign'">
          <!-- add swiper campaign component -->
          <div v-for="(itm, idx) in itemwidget.data" :key="idx">
            <AmalSwiperContent :slug="itm.slug" :title="itm.title" :campaignData="itm.campaigns" />
          </div>
        </div>
        <div v-else-if="indexwidget === 'campaign_list'">
          <!-- add campaign list component -->
          <div v-for="(itm, idx) in itemwidget.data" :key="idx">
            <AmalListContent :slug="itm.slug" :title="itm.title" :campaignData="itm.campaigns" />
          </div>
        </div>
        <div v-else-if="indexwidget === 'testimonial_list'">
          <!-- add testimonial list component -->
          <SwiperTestimonial :testimonialData="itemwidget.data" />
        </div>
        <div v-else-if="indexwidget === 'banner'">
          <!-- add banner component -->
          <div v-for="(itm, idx) in itemwidget.data" :key="idx">
            <BannerWidget :bannerData="itm" />
          </div>
        </div>
      </div>
    </div>
    <FooterContent />
    <BottomMenu />
    <br />
    <br />
    <br />
  </main>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
import { dataStoreAmal } from "@/stores/dataStoreAmal";
const store = dataStoreAmal();
store.fetchData(runtimeConfig.public.apiBase + "/member/homepage-amal");
</script>
