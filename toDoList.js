const todoInput = document.getElementById('todoInput');
const addButton= document.getElementById('addButton');
const todoList= document.getElementById('todoList');

addButton.addEventListener('click', function () {
    const taskText = todoInput.value;
    if(taskText.trim() !== ''){
        const listItem = document.createElement('li');
        listItem.innerHTML = taskText; // + " ";

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

/*
taskItem.addEventListener('mouseenter', function () {
    taskItem.addEventListener('mouseleave', function () {
        if(taskItem.classList.contains('completed')) {
            todoList.removeChild(taskItem);
    }
    taskItem.removeEventListener('mouseleave', arguments.callee);
    });
});
*/

    /*
    taskItem.addEventListener('mouseleave', function (event){
        event.preventDefault();
        
        if (taskItem.classList.contains('completed')) {
        taskItem.classList.remove('completed')
        } else {
        taskItem.classList.add('completed')
        }
    });
*/

const taskItem = document.querySelectorAll('#todoList li');
const removeButtons = document.querySelectorAll('.remove-button');

taskItem.forEach(function (taskItem, index) {
    setupTaskActions(taskItem, removeButtons[index]);
});
    

/*
todoList.addEventListener('click', function (event){
    if(event.target.tagName === 'LI'){
        const listItem = event.target;
        listItem.classList.toogle('completed');
    } else if (event.target.classList.contains('completed')){
        todoList.removeChild(event.target);
    }
});
*/

/*
function addTask(){
    var taskInput = document.getElementById("taskInput"); // ' ' ?
    var taskText = taskInput.ariaValueMax.trim();
    if (taskText !==""){
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        task
    }
}
*/