document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create li element
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create remove button
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.className = "remove-btn";

            // Remove task on click
            button.addEventListener('click', function () {
                taskList.removeChild(taskItem);
            });

            // Append button to li, then li to taskList
            taskItem.appendChild(button);
            taskList.appendChild(taskItem);

            // Clear input
            taskInput.value = '';
        } else {
            alert('Please enter a task');
        }
    }

    // Add task when button clicked
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});