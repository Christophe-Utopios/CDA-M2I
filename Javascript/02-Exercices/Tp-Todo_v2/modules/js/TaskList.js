import { Task } from "./Task.js";

export class TaskList {
    constructor() {
        this.tasks = [];
        this.cpt = 0;
    }

    addTask(text) {
       // const id = this.tasks.length + 1;
      // const id = this.cpt++;
        const task = new Task(this.cpt++, text);
        this.tasks.push(task);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
        // let tab = []
        //     for(i = 0;i < this.tasks.length;i++){
        //             if(this.tasks[i].id !== id){
        //                     tab.push(this.tasks[i])
        //             }
        //     })

        // this.tasks = tab
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
