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
        <div v-if="indexwidget === 'event'">
          <!-- Call swiper content ilmu component -->
          <div v-for="(itm, idx) in itemwidget.data" :key="idx">
            <IlmuSwiperContent :eventDataWidget="itm" :titleWidget="itm.title" :slugWidget="itm.slug" />
          </div>
        </div>
        <div v-else-if="indexwidget === 'banner'">
          <!-- Call banner content component -->
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
import { dataStoreIlmu } from "@/stores/dataStoreIlmu";
const store = dataStoreIlmu();
store.fetchData(runtimeConfig.public.apiBase + "/member/homepage-ilmu");
</script>
