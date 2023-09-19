import { TaskList } from "./js/TaskList.js";


let taskListe = new TaskList();
console.table(taskListe.tasks)

const taskList = document.getElementById('taskList');
const completedTasksList = document.getElementById('completedTasks');
const resetButton = document.getElementById('reset');

// Ajoutez un gestionnaire d'événements pour le bouton "Ajouter"
document.getElementById('addTask').addEventListener('click', () => {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();
    console.log(taskText)
        
    if (taskText !== '') {
       // addTaskToList(taskText);
       taskListe.addTask(taskText)
       taskListe.renderTasks()
        newTaskInput.value = ''; // Effacez le champ de texte
    }
    console.table(taskListe.tasks)
});



// Ajoutez un gestionnaire d'événements pour le bouton "Réinitialiser"
resetButton.addEventListener('click', () => {
    // Effacez toutes les tâches des deux listes
   // taskList.innerHTML = '';
   // completedTasksList.innerHTML = '';
   taskListe.tasks = []
   console.table(taskListe.tasks)
   taskListe.renderTasks()

});

// function addTaskToList(text) {
//     // Créez un nouvel élément li pour la tâche
//     const taskItem = document.createElement('li');
//     taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//     taskItem.textContent = text;

//     // Créez le bouton de suppression
//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'btn btn-danger btn-sm';
//     deleteButton.textContent = 'Supprimer';
//     deleteButton.setAttribute('data-action', 'delete');

//     // Ajoutez la tâche et le bouton de suppression à la liste
//     taskItem.appendChild(deleteButton);
//     taskList.appendChild(taskItem);
// }


// Ajoutez un gestionnaire d'événements pour la liste de tâches
// TODO
taskList.addEventListener('click', (event) => {
    
    if (event.target.dataset.action === 'delete') {
        console.log("appui sur delete")
        console.log(event.target.dataset.info)
        taskListe.removeTask(event.target.dataset.info)
        console.table(taskListe.tasks)
        taskListe.renderTasks()
       // const listItem = event.target.closest('li');
       // if (listItem) {
       //     taskList.removeChild(listItem);
       // }
    }
});
