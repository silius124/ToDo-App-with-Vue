<script setup>
import ToDoElement from "./ToDoElement.vue";
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { ref, watch } from "vue";
const filteredArray = useFilterArrayStore();
const checkedMap = ref({});
const todoElement = ref();
const filter = defineModel("filter");
const arrayAll = ref([]);
const arrayDone = ref([]);
const arrayNotDone = ref([]);
arrayAll.value = filteredArray.getArrayAll();
arrayDone.value = filteredArray.getArrayDone();
arrayNotDone.value = filteredArray.getArrayNotDone();

watch(
  checkedMap,
  () => {
    for (const [key, value] of Object.entries(checkedMap.value)) {
      const task = arrayAll.value.find((t) => t.id == key);
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
  <ul id="listToDo" v-if="filter === 'All'">
    <li
      v-for="todoElement of arrayAll"
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
  <ul id="listToDo" v-else-if="filter === 'Done'">
    <li
      v-for="todoElement of arrayDone"
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
  <ul id="listToDo" v-else-if="filter === 'Not done'">
    <li
      v-for="todoElement of arrayNotDone"
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
