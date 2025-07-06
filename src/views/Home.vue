<script setup>
import Head from "../components/Head.vue";
import ToDoList from "../components/ToDoList.vue";
import { ref } from "vue";

const toDoList = ref();
</script>

<template>
  <div class="mx-w-7xl flex flex-column item-center justify-center">
    <div class="text-center">TODO List</div>
    <div>
      <Head v-model:toDoList="toDoList" />
      <ToDoList v-model:toDoList="toDoList" />
    </div>
  </div>
</template>

<style scoped></style>
