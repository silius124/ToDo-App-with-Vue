<script setup>
import { ref, watch } from "vue";
import { useFilterArrayStore } from "../api/useFileterArrayStore";

const inpNameTodo = ref("");
const toDoList = defineModel("toDoList");
const activeOption = defineModel("filter");
activeOption.value = "All";
const todoElements = ref([]);
const filteredArray = useFilterArrayStore();

function addToDo() {
  const trimmed = inpNameTodo.value.trim();
  if (!trimmed) return;
  const newTask = {
    id: Date.now(),
    name: inpNameTodo.value,
  };
  filteredArray.addToArrayAll(newTask);
  filteredArray.addToArrayNotDone(newTask);
  inpNameTodo.value = "";
}

watch(activeOption, (newVal) => {
  if (newVal === "Done") {
    toDoList.value = filteredArray.getArrayDone();
  } else if (newVal === "Not done") {
    toDoList.value = filteredArray.getArrayNotDone();
  } else {
    toDoList.value = filteredArray.getArrayAll();
  }
});
</script>
<template>
  <div class="flex gap-3 items-center justify-center mb-10 mt-5">
    <input
      class="w-150 border-2 rounded-md border-purple-500 p-1 focus:border-purple-850 focus:border-3 focus:outline-0 shadow-lg"
      type="text"
      v-model="inpNameTodo"
    />
    <select
      class="w-32 bg-purple-500 p-2 rounded-sm text-white shadow-lg cursor-pointer focus:outline-transparent"
      name=""
      id=""
      v-model="activeOption"
    >
      <option class="hover:bg-purple-700">All</option>
      <option class="hover:bg-purple-700">Done</option>
      <option class="hover:bg-purple-700">Not done</option>
    </select>
    <button
      class="bg-purple-500 rounded-xl p-2 w-3xs text-white cursor-pointer shadow-lg transtition-bg duration-200 hover:bg-purple-700 transition-scale duration-100 scale-100 active:scale-98"
      @click="addToDo"
    >
      Добавить
    </button>
  </div>
</template>
