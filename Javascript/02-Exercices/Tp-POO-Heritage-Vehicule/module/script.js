import { Moto } from "./js/Moto.js";
import { Voiture } from "./js/Voiture.js";

const result = document.querySelector('.result')

let voiture1 = new Voiture("Renault", "Kangoo", 140000, 2003, false)
let moto1 = new Moto("BMW", "R1150R Rockster", 68000, 2005)

result.innerHTML += voiture1.display()
result.innerHTML += moto1.display()