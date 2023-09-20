// URL de l'API que nous allons interroger
const apiUrl = "https://pokeapi.co/api/v2/pokemon/25"


// Utilisation du fetch

fetch(apiUrl)
    .then(response => {
        // Verifier si la rsponse est OK (HTTP 200)
        if(!response.ok){
            throw new Error(`La requete a echoue avec un statut ${response.status}`)
        }

        // Parser la reponse en JSON
        return response.json()
    }).then(data => {
        // Traitement des donnees de la reponse
        console.log("Donnees recu : ")
        console.log(data)
    }).catch(error => {
        // Gestion des erreurs
        console.error("une erreur : "+ error)
    })
