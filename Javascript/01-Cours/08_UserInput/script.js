const result = document.querySelector("#result")

let prenom, nom

let valider = () => {
    nom = document.querySelector("#nom").value
    prenom = document.querySelector("#prenom").value

    result.innerHTML= `<h3>${nom} ${prenom}</h3>`
}