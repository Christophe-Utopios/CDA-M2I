// import { Mammifere } from "./js/Mammifere.js";
import  {Chien}  from "./js/Chien.js";
import { Personne } from "./js/Personne.js";

// let mammifere01 = new Mammifere("Rex", "Chien")

let medor = new Chien("Medor", "Berger Allemand")

medor.Aboyer()
medor.Manger()
medor.Manger()

let personne1 = new Personne("Toto", "Tata")

console.log(personne1.type);