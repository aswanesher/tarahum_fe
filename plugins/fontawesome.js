// plugins/fontawesome.js

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faUser, faHeart);
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
