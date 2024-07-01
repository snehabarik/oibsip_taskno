document.addEventListener('DOMContentLoaded', (event) => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-btn';
        doneButton.onclick = function() {
            listItem.classList.toggle('done');
            saveTasks();
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks();
        };

        listItem.appendChild(taskSpan);
        listItem.appendChild(doneButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        const taskText = taskList.children[i].firstChild.textContent;
        const isDone = taskList.children[i].classList.contains('done');
        tasks.push({ text: taskText, done: isDone });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        const taskList = document.getElementById('task-list');
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            if (task.done) listItem.classList.add('done');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = task.text;

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.className = 'done-btn';
            doneButton.onclick = function() {
                listItem.classList.toggle('done');
                saveTasks();
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.onclick = function() {
                taskList.removeChild(listItem);
                saveTasks();
            };

            listItem.appendChild(taskSpan);
            listItem.appendChild(doneButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
}