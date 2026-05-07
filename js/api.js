class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = "all";
        this.init();
    }

    init() {
        this.renderTasks();
        this.attachEventListeners();
    }

    loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    }

    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    addTask(text) {
        if (!text?.trim()) return;
        const task = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
    }

    toggleTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((t) => t.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case "active":
                return this.tasks.filter((t) => !t.completed);
            case "completed":
                return this.tasks.filter((t) => t.completed);
            default:
                return this.tasks;
        }
    }

    renderTasks() {
        const taskList = document.getElementById("taskList");
        const filteredTasks = this.getFilteredTasks();
        
        if (filteredTasks.length === 0) {
            taskList.innerHTML = `<p style="text-align: center; color: #999; padding: 2rem;">Нет задач</p>`;
        } else {
            taskList.innerHTML = filteredTasks.map(task => `
                <div class="task-item ${task.completed ? "completed" : ""}">
                    <div class="task-content">
                        <input type="checkbox" 
                               class="task-checkbox" 
                               ${task.completed ? "checked" : ""} 
                               data-id="${task.id}">
                        <span class="task-text">${task.text}</span>
                    </div>
                    <button class="task-delete" data-id="${task.id}">Удалить</button>
                </div>
            `).join("");
        }
        
        this.updateStats();
    }

    updateStats() {
        document.getElementById("totalTasks").textContent = this.tasks.length;
        document.getElementById("completedTasks").textContent = this.tasks.filter((t) => t.completed).length;
    }

    attachEventListeners() {
        const addButton = document.getElementById("addTask");
        const taskInput = document.getElementById("taskInput");
        
        addButton.addEventListener("click", () => {
            this.addTask(taskInput.value);
            taskInput.value = "";
            taskInput.focus();
        });
        
        taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.addTask(taskInput.value);
                taskInput.value = "";
            }
        });
        
        document.addEventListener("click", (e) => {
            const checkbox = e.target.closest(".task-checkbox");
            if (checkbox) {
                const id = parseInt(checkbox.dataset.id);
                this.toggleTask(id);
                return;
            }
            
            const deleteBtn = e.target.closest(".task-delete");
            if (deleteBtn) {
                const id = parseInt(deleteBtn.dataset.id);
                this.deleteTask(id);
                return;
            }
        });
        
        const filterButtons = document.querySelectorAll(".filter-btn");
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.currentFilter = btn.dataset.filter;
                this.renderTasks();
            });
        });
    }
}

const app = new TaskManager();