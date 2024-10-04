const taskList = document.getElementById("taskList");
const taskTitle = document.getElementById("taskTitle");
const taskPriority = document.getElementById("taskPriority");
const addTaskButton = document.getElementById("addTask");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task.title, task.priority));
}

document.addEventListener("DOMContentLoaded", loadTasks);
function updateLocalStorage() {
  const items = taskList.getElementsByTagName("li");
  const tasks = [];
  for (let item of items) {
    const title = item.querySelector("div p").innerText;
    const priority = item.querySelector("div span").innerText;
    tasks.push({ title, priority });
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskButton.addEventListener("click", () => {
  const title = taskTitle.value;
  const priority = taskPriority.value;
  if (title) {
    addTask(title, priority);
    taskTitle.value = "";
  } else {
    alert("First enter title please.");
  }
});

function addTask(title, priority) {
  const listItem = document.createElement("li");

  const titleSpan = document.createElement("div");
  titleSpan.innerHTML = `<p>${title}</p> <span>${priority}</span>`;
  listItem.appendChild(titleSpan);

  const editInput = document.createElement("input");
  editInput.value = title;
  editInput.style.display = "none";
  editInput.type = "text";

  const editPriority = document.createElement("select");
  editPriority.innerHTML = `
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>`;
  editPriority.value = priority;
  editPriority.style.display = "none";

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = '<img src="icons/pencil.png" alt="">';
  editButton.onclick = () => {
    if (editInput.style.display === "none") {
      editInput.style.display = "inline";
      editPriority.style.display = "inline";
      titleSpan.style.display = "none";
    } else {
      const newTitle = editInput.value;
      const newPriority = editPriority.value;
      titleSpan.innerHTML = `<p>${newTitle}</p> <span>${newPriority}</span>`;
      editPriority.style.display = "none";
      editInput.style.display = "none";
      updateLocalStorage();
    }
  };

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("bin");
  deleteButton.innerHTML = '<img src="icons/delete.png" alt="">';
  deleteButton.onclick = () => {
    taskList.removeChild(listItem);
    updateLocalStorage();
  };

  listItem.appendChild(editInput);
  listItem.appendChild(editPriority);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  taskList.appendChild(listItem);

  updateLocalStorage();
}
