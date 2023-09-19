const taskList = document.getElementById('taskList');
const completedTasksList = document.getElementById('completedTasks');
const resetButton = document.getElementById('reset');

// Ajoutez un gestionnaire d'événements pour le bouton "Ajouter"
document.getElementById('addTask').addEventListener('click', () => {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();
        
    if (taskText !== '') {
        addTaskToList(taskText);
        newTaskInput.value = ''; // Effacez le champ de texte
    }
});

// Ajoutez un gestionnaire d'événements pour la liste de tâches
taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'delete') {
        const listItem = event.target.closest('li');
        if (listItem) {
            taskList.removeChild(listItem);
        }
    }
});

// Ajoutez un gestionnaire d'événements pour le bouton "Réinitialiser"
resetButton.addEventListener('click', () => {
    // Effacez toutes les tâches des deux listes
    taskList.innerHTML = '';
    completedTasksList.innerHTML = '';
});

function addTaskToList(text) {
    // Créez un nouvel élément li pour la tâche
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    taskItem.textContent = text;

    // Créez le bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Supprimer';
    deleteButton.setAttribute('data-action', 'delete');

    // Ajoutez la tâche et le bouton de suppression à la liste
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
