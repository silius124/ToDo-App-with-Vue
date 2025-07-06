<script setup>
const nameTodo = defineModel("nameTodo");
</script>
<template>
  <div>
    <input type="checkbox" name="todo" id="todo" />
    <label for="todo">{{ nameTodo }}</label>
  </div>
</template>
