import Vehicule from "./classe/Vehicule.js";




const btnPayer = document.querySelector('#paymentBtn');
const btnEnter = document.querySelector('#enterBtn');
const licencePlate = document.querySelector('#licencePlate');
const successBox = document.querySelector('#successBox');
const alertBox = document.querySelector('#alertBox');
const messageBox = document.querySelector('#messageBox');
const vehicules = new Array();


btnEnter.onclick = () => {
    console.log("appui bouton ticket")
    // récupération du véhicule
    const vehicule = vehicules.find(vehicule => vehicule.id == licencePlate.value)
    console.log(vehicule)
    // Vérification vehicule present
    if(!vehicule){
        if(licencePlate.value != ''){
            vehicules.push(new Vehicule(licencePlate.value))
            console.table(vehicules)
            displayBox(successBox,"Veuillez prendre votre ticket pour le véhicule "+ licencePlate.value,3000)
        }else {
            displayBox(alertBox,"Veuillez saisir une immatriculation",3000)
        }
    }
    licencePlate.value = ''
}



function displayBox(domElement,message,delay){
    domElement.style.display = "block"
    domElement.textContent = message;
    setTimeout(() => {
        domElement.style.display = "none";
    },delay)

}

btnPayer.onclick = () => {
    console.log("appui bouton payer")
    let duree, prix = 0;
    const vehicule = vehicules.find(vehicule => vehicule.id == licencePlate.value)
    if(vehicule != undefined){
            vehicule._endDate = new Date()
            //vehicule.EndDate(new Date());
            // Calculer la duree
            duree = (vehicule.endDate - vehicule.startDate) / 60000
            // calculer le prix
            switch(true) {
                case duree <= 15:
                    prix = 0.8;
                    break;
                case duree <= 30:
                    prix = 1.3;
                    break;
                case duree <= 45:
                    prix = 1.7;
                    break;
                default:
                    prix = 6;
                    break;
            }
            console.log(prix)
            displayBox(messageBox,`le prix à payer pour le vehicule ${licencePlate.value} et de ${prix}€`,3000)
    }else{
        displayBox(alertBox,"le vehicule n'est pas present dans le parking",3000)
    }
    licencePlate.value = ''
    console.table(vehicules)
}


function init(){
    // Ajouter des vehicules
    vehicules.push(new Vehicule("AA-123-BB",new Date("2023-09-19T12:13:00")))
    vehicules.push(new Vehicule("BB-123-BB",new Date("2023-09-19T12:10:00")))
    vehicules.push(new Vehicule("CC-123-BB",new Date("2023-09-19T12:00:00")))

    console.table(vehicules)
    // cacher les alertbox
    alertBox.style.display = "none";
    messageBox.style.display = "none";
    successBox.style.display = "none";
 
}

window.onload = init();