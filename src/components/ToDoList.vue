<script setup>
import ToDoElement from "./ToDoElement.vue";

const toDoList = defineModel("toDoList");
</script>
<template>
  <ul id="listToDo">
    <li v-for="(todoElement, index) of toDoList" :key="index" class>
      <ToDoElement :nameTodo="todoElement" :todoNum="index" />
    </li>
  </ul>
</template>
