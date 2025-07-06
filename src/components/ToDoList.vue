<script setup>
import ToDoElement from "./ToDoElement.vue";
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { ref, watch } from "vue";
const filteredArray = useFilterArrayStore();
const checkedMap = ref({});
const todoElement = ref();
const toDoList = defineModel("toDoList");

watch(
  checkedMap,
  () => {
    for (const [key, value] of Object.entries(checkedMap.value)) {
      const task = toDoList.value.find((t) => t.id == key);
      if (!task) continue;
      if (value == true) {
        if (!filteredArray.hasInArrayDone(task)) {
          filteredArray.addToArrayDone(task);
        }
        if (filteredArray.hasInArrayNotDone(task)) {
          filteredArray.delFromArrayNotDone(task);
        }
      }
      if (value == false) {
        if (!filteredArray.hasInArrayNotDone(task)) {
          filteredArray.addToArrayNotDone(task);
        }
        if (filteredArray.hasInArrayDone) {
          filteredArray.delFromArrayDone(task);
        }
      }
    }
  },
  { deep: true }
);
</script>
<template>
  <ul id="listToDo">
    <li
      v-for="todoElement of toDoList"
      :key="todoElement.id"
      :value="todoElement.name"
      class
    >
      <ToDoElement
        :nameTodo="todoElement.name"
        :todoNum="todoElement.id"
        v-model:checked="checkedMap[todoElement.id]"
      />
    </li>
  </ul>
</template>
