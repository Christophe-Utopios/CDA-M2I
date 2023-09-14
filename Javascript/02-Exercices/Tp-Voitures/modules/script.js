import { Voiture } from "./js/Voiture.js";

const result = document.querySelector(".result")

let bmw = new Voiture("BMW", "Serie 1", 80)
let mercedes = new Voiture("Mercedes", "GLB", 100)

result.innerHTML += bmw.Accelerer()
result.innerHTML += bmw.Accelerer()
result.innerHTML += bmw.Accelerer()
result.innerHTML += mercedes.Accelerer()
result.innerHTML += mercedes.Accelerer()
result.innerHTML += mercedes.Tourner()
result.innerHTML += mercedes.Tourner()