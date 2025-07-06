<script setup>
import Head from "../components/Head.vue";
import ToDoList from "../components/ToDoList.vue";
import { ref } from "vue";

const toDoList = ref();
</script>

<template>
  <div>
    <div>TODO List</div>
    <div>
      <Head v-model:toDoList="toDoList" />
      <ToDoList v-model:toDoList="toDoList" />
    </div>
  </div>
</template>

<style scoped></style>
