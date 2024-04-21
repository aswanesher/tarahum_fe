<template>
  <HeaderContent />
  <SidebarMenu />
  <div v-if="isLoading" class="d-flex justify-content-center">
    <img src="../../assets/images/spinner.gif" />
  </div>
  <div v-if="ilmu">
    <section class="section-t-sm-space feature-section px-15" v-if="!ilmu.isLive">
      <div class="custom-container">
        <div class="row g-3 mb-4">
          <div class="col-6">
            <div class="feature-box">
              <a :href="ilmu.slug" class="feature-head">
                <img :src="ilmu.image_preview" class="img-fluid border shadow-sm" alt="" />
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="custom-container video-name-section">
              <div class="name-title">
                <h4>{{ ilmu.title }}</h4>
                <div class="d-inline-flex mt-2">
                  <div class="me-2 flex-fill">
                    <img :src="ilmu.image_preview" alt="Rounded circle Image" class="rounded-circle author-logo" />
                  </div>
                  <div class="flex-fill">
                    <h5 class="text-dark">
                      {{ ilmu.authors.organization_name }} <i class="ri-shield-check-line text-success fw-bolder"></i>
                    </h5>
                    <p>Identitas terverifikasi</p>
                  </div>
                </div>
                <h6 class="text-dark"><i class="ri-user-line"></i> {{ ilmu.authors.alias }}</h6>
                <ul class="course-number text-dark fs-6 mt-1 mb-2">
                  <li class="text-dark">
                    <i class="ri-play-list-2-line"></i>
                    {{ ilmuDetails.length }}
                    Episode
                  </li>
                </ul>
                <span class="badge rounded-pill bg-success" v-if="ilmu.price === 0 || ilmu.price === null">Free</span>
                <span class="badge rounded-pill bg-success" v-else-if="ilmu.price !== 0 || ilmu.price !== null">
                  <h3>{{ formatNumber(ilmu.price) }}</h3>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="divider"></div>
    <section class="about-course-section section-t-space px-15">
      <div class="custom-container">
        <div class="title mb-1">
          <h4>Deskripsi</h4>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="about-detail text-black">
              <div v-html="ilmu.description"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PlaylistContent :playlist="ilmuDetails" />
  </div>
  <div v-else-if="error">Failed to load the ilmu: {{ error.message }}</div>
  <FooterContent />
  <BottomMenu />
  <br />
  <br />
  <br />
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const runtimeConfig = useRuntimeConfig();

const route = useRoute();
const ilmu = ref(null);
const ilmuDetails = ref([]);
const error = ref(null);
const isLoading = ref(false);

const fetchData = async () => {
  isLoading.value = true;
  error.value = null;
  const slug = route.params.slug;
  try {
    const response = await axios.get(runtimeConfig.public.apiBase + `/member/ilmu/${slug}`);
    ilmu.value = response.data.result.event;
    ilmuDetails.value = response.data.result.event.event_details;
  } catch (err) {
    error.value = err;
    console.error("Error fetching article:", err);
  } finally {
    isLoading.value = false;
  }
};

const formatNumber = (number) => {
  return number.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
};

onMounted(fetchData);
</script>
