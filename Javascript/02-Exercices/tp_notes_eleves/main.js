let addStudentVisibility = false;
let addLessonFieldVisibility = false;
let addGradeVisibility = false;

const addStudentToogleButton = document.querySelector('#add-student-visibility');
const addLessonFieldToogleButton = document.querySelector('#add-lessonfield-visibility');
const addGradeToogleButton = document.querySelector('#add-grade-visibility');

const addStudentForm = document.querySelector('#add-student-form');
const addLessonFieldForm = document.querySelector('#add-lessonfield-form');
const addGradeForm = document.querySelector('#add-grade-form');

const studentChoiceForm = document.querySelector('#grade-student');
const lessonFieldChoiceForm = document.querySelector('#grade-field');
const studentChoiceSelect = document.querySelector('#student-choice');
const lessonFieldChoiceSelect = document.querySelector('#lessonfield-choice');

const averageGradeOutput = document.querySelector('#average-grade');

const tableDatas = document.querySelector('#table-data');

let students = [
    {
        lastName: "MARTIN",
        firstName: "John",
        grades: {
            'français': [12, 14, 9],
            'mathématiques': [8, 7, 12, 15]
        }
    },
    {
        lastName: "DUPONT",
        firstName: "Sophie",
        grades: {
            'français': [18, 17, 15],
            'mathématiques': [4, 5, 12, 15]
        }
    }
]

let lessonFields = ['français', 'mathématiques'];

addStudentToogleButton.addEventListener("click", () => {
    addStudentVisibility = !addStudentVisibility;
    if (addStudentVisibility) {
        addStudentForm.classList.remove('d-none');
        addStudentToogleButton.textContent = "OFF";
    } else {
        addStudentForm.classList.add('d-none');
        addStudentToogleButton.textContent = "ON";
    }
})

addLessonFieldToogleButton.addEventListener("click", () => {
    addLessonFieldVisibility = !addLessonFieldVisibility;
    if (addLessonFieldVisibility) {
        addLessonFieldForm.classList.remove('d-none');
        addLessonFieldToogleButton.textContent = "OFF";
    } else {
        addLessonFieldForm.classList.add('d-none');
        addLessonFieldToogleButton.textContent = "ON";
    }
})

addGradeToogleButton.addEventListener("click", () => {
    addGradeVisibility = !addGradeVisibility;
    if (addGradeVisibility) {
        addGradeForm.classList.remove('d-none');
        addStudentToogleButton.textContent = "OFF";
    } else {
        addGradeForm.classList.add('d-none');
        addStudentToogleButton.textContent = "ON";
    }
})