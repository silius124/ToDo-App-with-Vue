<script setup>
const nameTodo = defineModel("nameTodo");
const todoNum = defineModel("todoNum");
</script>
<template>
  <div class="border-b-2 border-gray-100 w-200 flex items-center gap-4 p-4">
    <input
      type="checkbox"
      class="size-7 accent-purple-500"
      name="todo"
      :id="'todo-' + todoNum"
    />
    <label :for="'todo-' + todoNum" class="text-3xl w-full text-start">{{
      nameTodo
    }}</label>
  </div>
</template>
