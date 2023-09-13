const touches = [...document.querySelectorAll('.bouton')]
console.log(touches);
const listeKeyCode = touches.map(touche => touche.dataset.key)
const ecranHaut = document.querySelector('.ecranHaut')
const ecranBas = document.querySelector('.ecranBas')

// Ecouteur évenement keydown
document.addEventListener('keydown', (e)=> {
    if(listeKeyCode.includes(e.code)) {
        let valeur = e.code
        calculer(valeur)
    }
})

// Ecouteur évenement click
touches.forEach((bouton) => {
    bouton.addEventListener("click", (e) => {
        let valeur = e.target.dataset.key
        calculer(valeur)
    })
})

// Fonction permettant d'effectuer les actions des touches
const calculer = (valeur) => {
    switch (valeur) {
        case 'Backspace': // touche 'c'
            ecranHaut.textContent = ""
            ecranBas.textContent = ""
            break
        case 'Enter':
            const calcul = eval(ecranHaut.textContent)
            ecranBas.textContent = `= ${calcul}`
            ecranHaut.textContent = ""
            break
        default:
            const indexKeyCode = listeKeyCode.indexOf(valeur)
            const touche = touches[indexKeyCode]
            ecranHaut.textContent += touche.innerHTML
    }
}