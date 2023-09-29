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

addStudentForm.addEventListener("submit", (data) => {
    data.preventDefault();

    const newStudent =
    {
        lastName: document.querySelector('#student-lastname').value,
        firstName: document.querySelector('#student-firstname').value
    };

    if (!students.find(x => x.firstName == newStudent.firstName && x.lastName == newStudent.lastName))
        students.push(newStudent);

    refreshSelectElements();
});

addLessonFieldForm.addEventListener("submit", (data) => {
    data.preventDefault();

    const newLessonField = document.querySelector('#lesson-field').value.toLowerCase();
    if (!lessonFields.includes(newLessonField))
        lessonFields.push(newLessonField);

    refreshSelectElements();
});

addGradeForm.addEventListener("submit", (data) => {
    data.preventDefault();

    const grade = +document.querySelector('#grade').value;
    const lessonFieldName = lessonFields[document.querySelector('#grade-field').value-1];
    const student = students[(+document.querySelector('#grade-student').value) - 1];

    if (!student.grades) student.grades = {};
    if (!student.grades[lessonFieldName]) student.grades[lessonFieldName] = [];

    student.grades[lessonFieldName].push(grade);

    console.log(students);
});

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

studentChoiceSelect.addEventListener("change", () => {
    refreshTableElement();
    refreshAverageGrade();
});

lessonFieldChoiceSelect.addEventListener("change", () => {
    refreshTableElement();
    refreshAverageGrade();
});

const capitalize = (value) => {
    value = value.toLowerCase()
    return value.replace(value[0], value[0].toUpperCase());
}

const getStudentFullName = (student) => {
    let firstName = capitalize(student.firstName)
    let lastName = student.lastName.toUpperCase();
    return `${firstName} ${lastName}`;
}

const refreshSelectElements = () => {

    studentChoiceForm.innerHTML = `<option value='0'>Sélectionnez un élève </option>`;
    for (const student of students) {
        let option = document.createElement("option")
        option.value = +students.indexOf(student) + 1
        option.textContent = getStudentFullName(student)
        studentChoiceForm.appendChild(option)
    }

    lessonFieldChoiceForm.innerHTML = `<option value='0'>Sélectionnez une matière</option>`;
    for (const field of lessonFields) {
        let option = document.createElement("option")
        option.value = +lessonFields.indexOf(field) + 1
        option.textContent = capitalize(field)
        lessonFieldChoiceForm.appendChild(option)
    }

    studentChoiceSelect.innerHTML = `<option value='0'>Toutes la classe</option>`;
    for (const student of students) {
        let option = document.createElement("option")
        option.value = +students.indexOf(student) + 1
        option.textContent = getStudentFullName(student)
        studentChoiceSelect.appendChild(option)
    }

    lessonFieldChoiceSelect.innerHTML = `<option value='0'>Toutes les matières</option>`;
    for (const field of lessonFields) {
        let option = document.createElement("option")
        option.value = +lessonFields.indexOf(field) + 1
        option.textContent = capitalize(field)
        lessonFieldChoiceSelect.appendChild(option)
    }
}

const refreshTableElement = () => {
    tableDatas.innerHTML = "";

    if (+studentChoiceSelect.value == 0 && +lessonFieldChoiceSelect.value == 0) {
        for (const student of students) {
            for (const lessonfield in student.grades) {
                for (const grade of student.grades[lessonfield]) {
                    let ligne = document.createElement("tr")
                    ligne.innerHTML =
                        `
                         <td>${student.lastName}</td>
                         <td>${student.firstName}</td>
                         <td>${lessonfield.replace(lessonfield[0], lessonfield[0].toUpperCase())}</td>
                         <td>${grade}</td>
                     `
                    tableDatas.appendChild(ligne);
                }
            }
        }
    } else if (lessonFieldChoiceSelect.value == 0) {
        const student = students[+studentChoiceSelect.value - 1];

        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                let ligne = document.createElement("tr")
                ligne.innerHTML =
                    `
                    <td>${student.lastName}</td>
                    <td>${student.firstName}</td>
                    <td>${lessonfield.replace(lessonfield[0], lessonfield[0].toUpperCase())}</td>
                    <td>${grade}</td>
                    `
                tableDatas.append(ligne);
            }
        }
    } else if (studentChoiceSelect.value == 0) {
        const lessonfield = lessonFields[+lessonFieldChoiceSelect.value-1];

        for (const student of students) {

            for (const grade of student.grades[lessonfield]) {
                let ligne = document.createElement("tr")
                ligne.innerHTML =
                    `
                    <td>${student.lastName}</td>
                    <td>${student.firstName}</td>
                    <td>${lessonfield.replace(lessonfield[0], lessonfield[0].toUpperCase())}</td>
                    <td>${grade}</td>
                    `
                tableDatas.append(ligne);
            }
        }
    } else {
        const student = students[+studentChoiceSelect.value - 1];
        const lessonfield = lessonFields[+lessonFieldChoiceSelect.value-1];
        for (const grade of student.grades[lessonfield]) {
            let ligne = document.createElement("tr")
                ligne.innerHTML =
                    `
                    <td>${student.lastName}</td>
                    <td>${student.firstName}</td>
                    <td>${lessonfield.replace(lessonfield[0], lessonfield[0].toUpperCase())}</td>
                    <td>${grade}</td>
                    `
            tableDatas.append(ligne);
        }
    }

}

const calculateAverage = (grades) => {
    let sum = 0;
    for (const grade of grades) sum += grade;
    return (sum / grades.length).toFixed(1);
}

const refreshAverageGrade = () => {
    let currentGrades = [];

    if (studentChoiceSelect.value == 0 && lessonFieldChoiceSelect.value == 0) {
        for (const student of students) {
            for (const lessonfield in student.grades) {
                for (const grade of student.grades[lessonfield]) {
                    currentGrades.push(grade);
                    averageGradeOutput.innerHTML = `Moyenne générale de la classe : <b>${calculateAverage(currentGrades)}</b>`;
                }
            }
        }
    } else if (lessonFieldChoiceSelect.value == 0) {
        const student = students[studentChoiceSelect.value - 1];

        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                currentGrades.push(grade);
                averageGradeOutput.innerHTML = `Moyenne générale de <b>${getStudentFullName(student)}</b> : <b>${calculateAverage(currentGrades)}</b>`;
            }
        }
    } else if (studentChoiceSelect.value == 0) {
        const lessonfield = lessonFields[lessonFieldChoiceSelect.value-1]

        for (const student of students) {
            for (const grade of student.grades[lessonfield]) {
                currentGrades.push(grade);
                averageGradeOutput.innerHTML = `Moyenne en <b>${capitalize(lessonfield)}</b> de la classe : <b>${calculateAverage(currentGrades)}</b>`;

            }
        }
    } else {
        const student = students[studentChoiceSelect.value - 1];
        const lessonfield = lessonFields[lessonFieldChoiceSelect.value-1];

        for (const grade of student.grades[lessonfield]) {
            currentGrades.push(grade);
            averageGradeOutput.innerHTML = `Moyenne en <b>${capitalize(lessonfield)}</b> de <b>${getStudentFullName(student)}</b> : <b>${calculateAverage(currentGrades)}</b>`;
        }
    }

    console.log(currentGrades);
}

refreshSelectElements();

let test = "1"
console.log(typeof test)
let test2 = +test
console.log(typeof test2)