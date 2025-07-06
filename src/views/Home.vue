<script setup>
import Head from "../components/Head.vue";
import ToDoList from "../components/ToDoList.vue";
import { ref, watch } from "vue";

const toDoList = ref();
</script>

<template>
  <div class="mx-w-7xl flex flex-col item-center justify-center">
    <h1 class="text-4xl">TODO List</h1>
    <div>
      <Head v-model:toDoList="toDoList" />
      <ToDoList v-model:toDoList="toDoList" />
    </div>
  </div>
</template>

<style scoped></style>
