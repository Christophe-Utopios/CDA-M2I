import Vehicule from "./classe/Vehicule.js";




const btnPayer = document.querySelector('#paymentBtn');
const btnEnter = document.querySelector('#enterBtn');
const licencePlate = document.querySelector('#licencePlate');
const successBox = document.querySelector('#successBox');
const alertBox = document.querySelector('#alertBox');
const messageBox = document.querySelector('#messageBox');
const vehicules = new Array();


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