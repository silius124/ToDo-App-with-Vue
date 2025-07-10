<script setup>
import { useFilterArrayStore } from "../api/useFileterArrayStore";
import { ref } from "vue";
const todo = defineModel("todo");
const isEdit = ref(false);
const filteredArray = useFilterArrayStore();

function deleteTask() {
  console.log("Сюда переходит");
  filteredArray.delFromArrayToDo(todo.value);
}
function editTask() {
  isEdit.value = !isEdit.value;
}
</script>
<template>
  <div
    class="w-full border-b-2 border-gray-100 lg:w-300 flex items-center gap-4 p-4"
  >
    <input
      type="checkbox"
      v-model="todo.done"
      class="w-20 h-20 lg:size-7 accent-purple-500"
      name="todo"
      :id="'todo-' + todo.id"
    />
    <label
      v-if="!isEdit"
      :for="'todo-' + todo.id"
      class="text-3xl w-full text-start"
      >{{ todo.name }}</label
    >
    <input
      v-else
      type="text"
      v-model="todo.name"
      @keyup.enter="editTask"
      class="text-3xl w-full text-start focus:outline-none border-2 border-purple-500 focus:border-purple-850 focus:border-3 p-2"
    />
    <button
      @click="deleteTask"
      class="w-50 h-15 lg:size-15 bg-red-500 rounded-xl text-white flex align-center justify-center text-xl duration-200 lg:hover:w-30 cursor-pointer"
    >
      <svg
        class="w-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </button>
    <button
      @click="editTask"
      class="w-50 h-15 lg:size-15 bg-blue-500 rounded-xl flex align-center justify-center text-white text-xl duration-200 lg:hover:w-30 cursor-pointer"
    >
      <svg
        class="w-8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title></title>
          <g id="Complete">
            <g id="edit">
              <g>
                <path
                  d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <polygon
                  fill="none"
                  points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>
