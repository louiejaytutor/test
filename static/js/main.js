const task_list = document.getElementById("task-list");
const add_btn = document.getElementById("add-btn");

for (var i=0; i < 5; i++) {
    task_list.innerHTML = task_list.innerHTML + `<div onclick="taskInfo(${i})" class="task">
        <div class="task-title">Dane P. Santiago</div>
        <div class="task-timestamp">19 Mar 2025 10:34 am</div>
    </div>`;
}

function taskInfo(id) {
    alert(id);
}

add_btn.addEventListener("click", function() {
    alert("test add button");
});