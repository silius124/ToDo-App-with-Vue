<script setup>
import { ref } from "vue";

const inpNameTodo = ref("");
const toDoList = defineModel("toDoList");
const todoElements = ref([]);

function addToDo() {
  const trimmed = inpNameTodo.value.trim();
  if (!trimmed) return;

  todoElements.value.push(inpNameTodo.value);
  inpNameTodo.value = "";
  toDoList.value = todoElements.value;
}
</script>
<template>
  <div class="flex gap-3 items-center justify-center mb-10 mt-5">
    <input
      class="basis-1/3 border-2 rounded-md border-purple-500 p-1 focus:border-purple-850 focus:border-3 focus:outline-0 shadow-lg"
      type="text"
      v-model="inpNameTodo"
    />
    <select
      class="w-32 bg-purple-500 p-2 rounded-sm text-white shadow-lg"
      name=""
      id=""
    >
      <option class="text-white" value="">All</option>
    </select>
    <button
      class="bg-purple-500 rounded-xl p-2 w-3xs text-white shadow-lg transtition-bg duration-200 hover:bg-purple-700 transition-scale duration-100 scale-100 active:scale-98"
      @click="addToDo"
    >
      Добавить
    </button>
  </div>
</template>
