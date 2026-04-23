function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // prevent triggering li click
    li.remove();
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
