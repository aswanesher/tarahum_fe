<template>
  <div class="section course-section section-t-space section-b-space px-15">
    <div class="custom-container">
      <div class="row">
        <div class="col-12">
          <div class="tab-content custom-tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="course-tab-pane"
              role="tabpanel"
              tabindex="0"
              aria-labelledby="#course-tab"
            >
              <div class="video-box-list">
                <ul class="video-list" v-for="(item, index) in playlist" :key="index">
                  <li class="mt-3">
                    <a :href="item.slug">
                      <div class="d-flex video-box complete justify-content-between">
                        <div class="video-number">
                          <i class="ri-play-fill play-icon"></i>
                        </div>
                        <div class="video-content w-100">
                          <h5>{{ item.title }}</h5>
                        </div>
                        <div class="video-box">ikon</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    playlist: Object,
  },
};
</script>
