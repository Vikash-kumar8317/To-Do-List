const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");


let tasks = [];


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    const task = {

        text: taskText,

        completed: false

    };


    tasks.push(task);

    taskInput.value = "";

    displayTasks();

}


function displayTasks() {

    taskList.innerHTML = "";


    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        li.className = "task";


        const span = document.createElement("span");

        span.className = "task-text";

        span.textContent = task.text;


        if (task.completed) {

            span.classList.add("completed");

        }


        span.addEventListener("click", function() {

            task.completed = !task.completed;

            displayTasks();

        });


        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-button";


        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            displayTasks();

        });


        li.appendChild(span);

        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });


    updateTaskCount();

}


function updateTaskCount() {

    totalTasks.textContent = tasks.length;


    const completed = tasks.filter(function(task) {

        return task.completed;

    }).length;


    completedTasks.textContent = completed;

}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});