<script setup>
import Head from "../components/Head.vue";
import ToDoList from "../components/ToDoList.vue";
import { ref } from "vue";

const checkedMap = ref();
</script>

<template>
  <div class="mx-w-7xl flex flex-col item-center justify-center">
    <h1 class="text-4xl">TODO List</h1>
    <div>
      <Head />
      <ToDoList />
    </div>
  </div>
</template>

<style scoped></style>
