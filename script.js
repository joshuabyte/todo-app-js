// @ts-nocheck
const input = document.getElementById("taskInput");
const taskList = [];

const addTask = (event) => {
  if (event.keyCode === 13) {
    if (input) {
      const newTask = {
        task: input.value,
        completed: false,
      };
      taskList.push(newTask);
      input.value = "";
      console.log(taskList);
    }
  }
};

input.addEventListener("keyup", addTask);
