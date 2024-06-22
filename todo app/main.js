// script.js

document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
    const filters = document.querySelectorAll(".filters button");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            document.querySelector(".filters .active").classList.remove("active");
            filter.classList.add("active");
            filterTasks(filter.id);
        });
    });
  
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask();
    });
  
    function addTask() {
        const title = document.getElementById("taskTitle").value;
        const description = document.getElementById("taskDescription").value;
        const dueDate = document.getElementById("taskDueDate").value;
  
        const task = {
            id: Date.now(),
            title,
            description,
            dueDate,
            completed: false
        };
  
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskForm.reset();
    }
  
    function renderTasks(filteredTasks = tasks) {
        taskList.innerHTML = "";
        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.className = `task ${task.completed ? "completed" : ""}`;
            li.innerHTML = `
                <span>${task.title} - ${task.description} ${task.dueDate ? ` (Due: ${task.dueDate})` : ""}</span>
                <div>
                    <button class="complete" onclick="toggleComplete(${task.id})">${task.completed ? "Undo" : "Complete"}</button>
                    <button class="edit" onclick="editTask(${task.id})">Edit</button>
                    <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }
  
    window.toggleComplete = function(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };
  
    window.editTask = function(id) {
        const task = tasks.find(task => task.id === id);
        document.getElementById("taskTitle").value = task.title;
        document.getElementById("taskDescription").value = task.description;
        document.getElementById("taskDueDate").value = task.dueDate;
        deleteTask(id);
    };
  
    window.deleteTask = function(id) {
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    };
  
    function filterTasks(filter) {
        if (filter === "allTasks") {
            renderTasks();
        } else if (filter === "pendingTasks") {
            renderTasks(tasks.filter(task => !task.completed));
        } else if (filter === "completedTasks") {
            renderTasks(tasks.filter(task => task.completed));
        }
    }
  
    renderTasks();
  });
  