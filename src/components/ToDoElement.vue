<script setup>
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { ref } from "vue";
const nameTodo = defineModel("nameTodo");
const todoNum = defineModel("todoNum");

const checked = defineModel("checked");
const isEdit = ref(false);

function deleteTask() {
  const filteredArray = useFilterArrayStore();
  filteredArray.delFromArrayAll(nameTodo.value);
  filteredArray.delFromArrayDone(nameTodo.value);
  filteredArray.delFromArrayNotDone(nameTodo.value);
}
function editTask() {
  isEdit.value = !isEdit.value;
}
</script>
<template>
  <div class="border-b-2 border-gray-100 w-300 flex items-center gap-4 p-4">
    <input
      type="checkbox"
      v-model="checked"
      class="size-7 accent-purple-500"
      name="todo"
      :id="'todo-' + todoNum"
    />
    <label
      v-if="!isEdit"
      :for="'todo-' + todoNum"
      class="text-3xl w-full text-start"
      >{{ nameTodo }}</label
    >
    <input
      v-else
      type="text"
      v-model="nameTodo"
      class="text-3xl w-full text-start"
    />
    <button
      @click="deleteTask"
      class="size-15 bg-red-500 rounded-xl text-white text-xl duration-200 hover:w-30 cursor-pointer"
    >
      Уд
    </button>
    <button
      @click="editTask"
      class="size-15 bg-blue-500 rounded-xl text-white text-xl duration-200 hover:w-30 cursor-pointer"
    >
      Ред
    </button>
  </div>
</template>
