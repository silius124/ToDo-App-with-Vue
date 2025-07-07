<script setup>
import ToDoElement from "./ToDoElement.vue";
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { useFilterStore } from "../api/useFilterStore";
import { ref, watch } from "vue";
const filteredArray = useFilterArrayStore();
const filter = useFilterStore();
const checked = ref();
const arrayAll = ref([]);
const arrayDone = ref([]);
const arrayNotDone = ref([]);
arrayAll.value = filteredArray.getArrayAll();
arrayDone.value = filteredArray.getArrayDone();
arrayNotDone.value = filteredArray.getArrayNotDone();
</script>
<template>
  <ul id="listToDo" v-if="filter.filter === 'All'">
    <li
      v-for="todoElement of arrayAll"
      :key="todoElement.id"
      :value="todoElement.name"
      class
    >
      <ToDoElement
        :todoName="todoElement.name"
        :todoId="todoElement.id"
        :checked="checked"
      />
    </li>
  </ul>
  <ul id="listToDo" v-else-if="filter.filter === 'Done'">
    <li
      v-for="todoElement of arrayDone"
      :key="todoElement.id"
      :value="todoElement.name"
    >
      <ToDoElement
        :todoName="todoElement.name"
        :todoId="todoElement.id"
        :checked="checked"
      />
    </li>
  </ul>
  <ul id="listToDo" v-else-if="filter.filter === 'Not done'">
    <li
      v-for="todoElement of arrayNotDone"
      :key="todoElement.id"
      :value="todoElement.name"
    >
      <ToDoElement
        :todoName="todoElement.name"
        :todoId="todoElement.id"
        :checked="checked"
      />
    </li>
  </ul>
</template>
