// Selecting the elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const newTask = document.createElement('li');
    newTask.classList.add('task-item');

    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;

    // Create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('task-btns');

    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        newTask.classList.toggle('completed');
    });

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit your task:', taskSpan.textContent);
        if (newText) {
            taskSpan.textContent = newText;
        }
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(newTask);
    });

    // Append buttons to button container
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // Append task text and buttons to task item
    newTask.appendChild(taskSpan);
    newTask.appendChild(btnContainer);

    // Append task item to list
    todoList.appendChild(newTask);

    // Clear the input field
    newTaskInput.value = '';
}
