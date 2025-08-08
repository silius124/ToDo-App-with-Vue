import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useFilterArrayStore = defineStore("filterArray", () => {
  const arrayToDo = reactive([]);

  function addToArrayToDo(item) {
    arrayToDo.push(item);
  }
  function delFromArrayToDo(item) {
    console.log("Переход в удаление");
    arrayToDo.splice(
      arrayToDo.findIndex((it) => it.id === item.id),
      1
    );
  }
  return {
    arrayToDo,
    addToArrayToDo,
    delFromArrayToDo,
  };
});
