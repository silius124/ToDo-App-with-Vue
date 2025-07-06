import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterArrayStore = defineStore("filterArray", () => {
  const arrayDone = ref([]);
  const arrayNotDone = ref([]);
  const arrayAll = ref([]);

  function addToArrayDone(item) {
    arrayDone.value.push(item);
  }
  function addToArrayNotDone(item) {
    arrayNotDone.value.push(item);
  }
  function addToArrayAll(item) {
    arrayAll.value.push(item);
  }
  function getArrayDone() {
    return arrayDone.value;
  }
  function getArrayNotDone() {
    return arrayNotDone.value;
  }
  function getArrayAll() {
    return arrayAll.value;
  }
  function hasInArrayDone(item) {
    return arrayDone.value.includes(item);
  }
  function hasInArrayNotDone(item) {
    return arrayNotDone.value.includes(item);
  }
  function hasInArrayAll(item) {
    return arrayAll.value.includes(item);
  }
  function delFromArrayDone(item) {
    arrayDone.value.splice(arrayDone.value.indexOf(item), 1);
  }
  function delFromArrayNotDone(item) {
    arrayNotDone.value.splice(arrayNotDone.value.indexOf(item), 1);
  }
  function delFromArrayAll(item) {
    arrayAll.value.splice(arrayAll.value.indexOf(item), 1);
  }
  return {
    arrayAll,
    arrayDone,
    arrayNotDone,
    addToArrayDone,
    addToArrayNotDone,
    addToArrayAll,
    getArrayDone,
    getArrayNotDone,
    getArrayAll,
    hasInArrayDone,
    hasInArrayNotDone,
    hasInArrayAll,
    delFromArrayDone,
    delFromArrayNotDone,
    delFromArrayAll,
  };
});
