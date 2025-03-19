const pending_btn = document.getElementById("pending-btn");
const completed_btn = document.getElementById("completed-btn");
const trash_btn = document.getElementById("trash-btn");

const tasks = document.getElementById("tasks");

const show_task_btn = document.getElementById("show-task-btn");
const cancel_task_btn = document.getElementById("cancel-task-btn");
const task_form = document.getElementById("task-form");
let task_input = document.getElementById("task-input");

show_task_btn.addEventListener("click", function() {
    if (task_form.classList.contains("active")) {
        show_task_btn.classList.add("active");
        task_form.classList.remove("active");
    }
    else {
        show_task_btn.classList.remove("active");
        task_form.classList.add("active");
    }
});

cancel_task_btn.addEventListener("click", function() {
    show_task_btn.classList.add("active");
    task_form.classList.remove("active");
    task_form.querySelector("h3").textContent = "Add new task";
    task_input.value = "";
});