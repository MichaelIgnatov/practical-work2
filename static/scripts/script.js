document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('filterButton').addEventListener('click', toggleFilter);

let tasks = [];
let showCompleted = true;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        if (showCompleted || !task.completed) {
            const li = document.createElement('li');
            li.className = 'task';
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}" onclick="toggleCompletion(${index})">${task.text}</span>
                <button onclick="removeTask(${index})" class="remove">Удалить</button>
            `;
            taskList.appendChild(li);
        }
    });
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleFilter() {
    showCompleted = !showCompleted;
    renderTasks();
}