<script setup>
import { ref, watch } from "vue";
import { useFilterArrayStore } from "../store/useFileterArrayStore";
import { useFilterStore } from "../store/useFilterStore";
const inpNameTodo = ref("");
const filteredArray = useFilterArrayStore();
const filter = useFilterStore();
filter.filter = "All";

function addToDo() {
  const trimmed = inpNameTodo.value.trim();
  if (!trimmed) return;
  const newTask = {
    id: Date.now(),
    name: inpNameTodo.value,
    done: false,
  };
  filteredArray.addToArrayToDo(newTask);
  inpNameTodo.value = "";
}
</script>
<template>
  <div
    class="mw-5xl flex flex-col lg:flex-row gap-3 items-center justify-center mb-10 mt-5"
  >
    <input
      class="w-full mx-5 lg:w-150 lg:mx-0 border-2 rounded-md border-purple-500 p-1 focus:border-purple-850 focus:border-3 focus:outline-0 shadow-lg"
      type="text"
      v-model="inpNameTodo"
      placeholder="Добавить задачу..."
      @keyup.enter="addToDo"
    />
    <div class="w-full mx-5 flex flex-row gap-3 lg:w-auto">
      <select
        class="w-32 bg-purple-500 p-2 rounded-sm text-white shadow-lg cursor-pointer focus:outline-transparent"
        name=""
        id=""
        v-model="filter.filter"
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
  </div>
</template>
