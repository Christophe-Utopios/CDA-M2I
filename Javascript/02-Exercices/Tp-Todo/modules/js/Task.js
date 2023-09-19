export class Task {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    render() {
        // Créez un élément li pour afficher la tâche
        const taskItem = document.createElement('li');
        taskItem.textContent = this.text;
        return taskItem;
    }
}
