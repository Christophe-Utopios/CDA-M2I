import { Task } from "./Task.js";

export class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(text) {
        const id = this.tasks.length + 1;
        const task = new Task(id, text);
        this.tasks.push(task);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''; // Effacez la liste actuelle

        this.tasks.forEach(task => {
            const taskItem = task.render();
            taskList.appendChild(taskItem);
        });
    }
}
