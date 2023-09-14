import { Vehicule } from "./Vehicule.js";

export class Moto extends Vehicule {
    display(){
        return `<p>Moto : ${super.display()}</p>`
    }
}