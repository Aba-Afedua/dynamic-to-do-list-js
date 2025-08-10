document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.className = "remove-btn";
            button.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });
            taskItem.appendChild(button);
        } else {
            alert('Please enter a task');
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
            addTask();
        }
    });
  addTask(); // Call addTask to ensure the button is created

});