// @ts-nocheck
// @ts-nocheck
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let taskId = 0;

const addTask = (event) => {
  if (event.keyCode === 13) {
    /* This is checking if the input is empty. If it is not empty, it will create a new task object with
the task and completed properties. It will then append the task to the task list. */
    if (input.value.trim() !== "") {
      const newTask = {
        task: input.value,
        completed: false,
      };
      taskList.appendChild(createTaskElement(newTask));
      input.value = "";
    }
  }
};

const createTaskElement = (task) => {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task-item");
  // Setting an ID to each task
  taskElement.dataset.id = taskId++;

  const taskItemContent = `
<div class="checkbox-wrapper">
  <label class="container">
    <input type="checkbox" id="checkbox-${taskId}" class="checkbox visually-hidden">
    <span class="checkmark"></span>
  </label>
</div>
<div class="task-wrapper">
  <p class="task-text">${task.task}</p>
</div>
<div class="edit-delete-wrapper">
  <i class="fa-solid fa-pen-to-square edit-icon"></i>
  <i class="fa-solid fa-trash-can delete-icon"></i>
</div>
`;

  taskElement.innerHTML = taskItemContent;

  console.log(taskElement.dataset.id);
  return taskElement;
};

input.addEventListener("keyup", addTask);
