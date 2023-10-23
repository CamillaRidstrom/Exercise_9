const todoInput = document.getElementById('todoInput');
const addButton= document.getElementById('addButton');
const todoList= document.getElementById('todoList');

addButton.addEventListener('click', function () {
    
    const inputText = todoInput.value;
    let firstLetter = inputText.charAt(0).toUpperCase();
    let restOfString = inputText.slice(1);
    const tdI = firstLetter + restOfString;
    const taskText = tdI;
    if(taskText.trim() !== ''){
        const listItem = document.createElement('li');
        listItem.innerHTML = taskText;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Ta bort helt från listan';
        removeButton.className = 'remove-button';
        
        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
        todoInput.value = '';
        setupTaskActions(listItem, removeButton);
    }
    todoInput.focus();
});

todoInput.addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        addButton.click();
    }
});

function setupTaskActions(taskItem, removeButton) { 
    taskItem.addEventListener('click', function (event) {
        if(event.target === taskItem) {
            taskItem.classList.toggle('completed');
        } else if (event.target.classList.contains('completed')) {
            todoList.removeChild(taskItem);
        }
    });
        removeButton.addEventListener('click', function () {
        todoList.removeChild(taskItem);
    });
}

const taskItem = document.querySelectorAll('#todoList li');
const removeButtons = document.querySelectorAll('.remove-button');

taskItem.forEach(function (taskItem, index) {
    setupTaskActions(taskItem, removeButtons[index]);
});