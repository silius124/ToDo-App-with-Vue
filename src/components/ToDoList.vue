<script setup>
import ToDoElement from "./ToDoElement.vue";
import { useFilterArrayStore } from "../store/useFileterArrayStore";
import { useFilterStore } from "../store/useFilterStore";
import { computed } from "vue";

const filteredArray = useFilterArrayStore();
const filter = useFilterStore();
const arrayTODO = filteredArray.arrayToDo;

const choseFilteredArray = computed(() => {
  if (filter.filter === "Done") {
    return arrayTODO.filter((t) => t.done);
  } else if (filter.filter === "Not done") {
    return arrayTODO.filter((t) => !t.done);
  }
  return arrayTODO;
});
</script>

<template>
  <div
    class="max-h-90 overflow-y-scroll overscroll-auto lg:overflow-y-auto lg:max-h-170"
  >
    <ul>
      <li
        v-for="todoElement of choseFilteredArray"
        :key="todoElement.id"
        :value="todoElement.name"
      >
        <ToDoElement :todo="todoElement" />
      </li>
    </ul>
  </div>
</template>
