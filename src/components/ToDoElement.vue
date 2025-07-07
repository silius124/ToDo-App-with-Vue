<script setup>
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { ref, watch } from "vue";
const todoName = defineModel("todoName");
const todoId = defineModel("todoId");
const checked = defineModel("checked");
const isEdit = ref(false);
const filteredArray = useFilterArrayStore();

function deleteTask() {
  const item = {
    id: todoId.value,
    name: todoName.value,
  };
  filteredArray.delFromAll(item);
}
function editTask() {
  isEdit.value = !isEdit.value;
}

watch(checked, () => {
  if (checked.value == true) {
    filteredArray.delFromArrayNotDone({ id: todoId.value });
    filteredArray.addToArrayDone({
      id: todoId.value,
      name: todoName.value,
    });
  } else {
    filteredArray.delFromArrayDone({ id: todoId.value });
    filteredArray.addToArrayNotDone({
      id: todoId.value,
      name: todoName.value,
    });
  }
});
</script>
<template>
  <div class="border-b-2 border-gray-100 w-300 flex items-center gap-4 p-4">
    <input
      type="checkbox"
      @click="updateStatusTodo"
      v-model="checked"
      class="size-7 accent-purple-500"
      name="todo"
      :id="'todo-' + todoId"
    />
    <label
      v-if="!isEdit"
      :for="'todo-' + todoId"
      class="text-3xl w-full text-start"
      >{{ todoName }}</label
    >
    <input
      v-else
      type="text"
      v-model="todoName"
      class="text-3xl w-full text-start focus:outline-none border-2 border-purple-500 focus:border-purple-850 focus:border-3 p-2"
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
