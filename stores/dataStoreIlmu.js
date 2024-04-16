import { defineStore } from "pinia";
import axios from "axios";

export const dataStoreIlmu = defineStore("dataStoreIlmu", {
  state: () => ({
    data: [],
    isLoading: false,
    error: null,
    items: {
      widgets: [],
    },
  }),
  persist: true,
  actions: {
    async fetchData(apiUrl) {
      const now = new Date();
      if (this.lastFetch && now - this.lastFetch < 3600000) {
        return;
      }
      this.isLoading = true;
      try {
        const response = await axios.get(apiUrl);
        console.log(response);
        this.items = response.data.result;
        this.lastFetch = now;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
