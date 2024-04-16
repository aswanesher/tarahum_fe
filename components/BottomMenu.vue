<template>
  <div class="mobile-style-1 border">
    <ul>
      <li :class="{ active: isRouteActive('/') }">
        <RouterLink to="/" class="mobile-box">
          <div class="mobile-icon">
            <i class="ri-file-text-line"></i>
          </div>
          <div class="mobile-name">
            <h5>Ilmu</h5>
          </div>
        </RouterLink>
      </li>

      <li :class="{ active: isRouteActive('/amal') }">
        <RouterLink to="/amal" class="mobile-box">
          <div class="mobile-icon">
            <i class="ri-hand-heart-line"></i>
          </div>
          <div class="mobile-name">
            <h5>Amal</h5>
          </div>
        </RouterLink>
      </li>

      <li class="">
        <RouterLink to="/" class="mobile-box">
          <div class="mobile-icon">
            <i class="ri-chat-3-line"></i>
          </div>
          <div class="mobile-name">
            <h5>Inbox</h5>
          </div>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/" class="mobile-box">
          <div class="mobile-icon">
            <i class="ri-user-3-line"></i>
          </div>
          <div class="mobile-name">
            <h5>Account</h5>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

export default {
  methods: {
    isRouteActive(route) {
      const currentRoute = useRoute();
      return currentRoute.path === route;
    },
  },
};
</script>
