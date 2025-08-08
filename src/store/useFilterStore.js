import { ref } from "vue";
import { defineStore } from "pinia";

export const useFilterStore = defineStore("filter", () => {
  const filter = ref("");
  function setFilter(filterValue) {
    filter.value = filterValue;
  }
  return { filter, setFilter };
});
