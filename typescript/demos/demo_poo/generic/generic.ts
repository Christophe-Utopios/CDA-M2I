// Generic

function getLength<T>(array: T[]): number{
    return array.length;
}

const nombres = [1,2,3,4]

getLength(nombres)

const lettres = ["1","2","3",4]

getLength(lettres)


class NomDeClasse<T> {
    public monAttribut: T;

    constructor(monAttribut: T){
        this.monAttribut = monAttribut
    }
}

let monObjet: NomDeClasse<string>;
monObjet = new NomDeClasse("42")

let monObjet2: NomDeClasse<number>;
monObjet2 = new NomDeClasse(42)