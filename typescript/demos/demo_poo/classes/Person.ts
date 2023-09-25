/*
  Lorsque l'on veut faire des classes en Typescript, il nous faut modifier un peu la syntaxe

  Première chose : Il va nous falloir ajouter des niveaux d'accessibilité à nos attributs : 
    - public : L'attribut / la méthode sera accessible à tous, que cela soit dans la classe, dans les classes enfants, dans les autres classes
    - protected: L'attribut / la méthode sera accessible à notre classe et à ses enfants
    - private : L'attribut / la méthode ne sera accessible que dans la classe
    - readonly: L'attribut sera constant une fois assigné. Il faudra lui affecter une valeur dans le constructeur. Par la suite, il sera publique pour la lecture mais ne pourra pas être modifié

  A côté de cela, le Typescript permet la création d'attributs / de méthodes 'static'. Ces attributs / méthodes seront 
  disponibles via la syntaxe <Nom de la classe>.<Nom de l'attribut ou de la méthode> 
  et non de <Nom d'un objet>.<Nom de l'attribut ou de la méthode>

  Les attributs statiques sont particulièrement utiles pour faire un compteur d'éléments créé de cette classe. 
*/

class Person {
    private static _count: number = 0
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _age: number;
    readonly numeroIdNat: number;

    constructor(firstname: string, lastname: string, age: number, numeroIdNat: number){
      this._id = ++Person._count
      this._firstname = firstname
      this._lastname = lastname
      this._age = age
      this.numeroIdNat = numeroIdNat

    }

    // En Typescript, il est possible de créer des getter / setter pour modifier les attributs privés / protégés
  
    // Ces getters / setters sont par défaut 'public' mais il est possible de leur affecter un niveau d'accessibilité propre
    get firstname() {
        return this._firstname
      }
    
      set firstname(value: string) {
        if (value !== "Blabla") {
          this._firstname = value
        }
      }
    
      get fullname() {
        return this._firstname + " " + this._lastname

      }
    
      static get count() {
        return Person._count
      }
}

class Student extends Person {
    private _backpack: boolean;

    constructor(firstname: string, lastname: string, age: number, numeroIdNat: number,backpack: boolean){
        super(firstname, lastname, age, numeroIdNat)
        this._backpack = backpack
    }

    toString(): string {
        return this.fullname + ` backpack ? ${this._backpack}` 
    }

}

export {Person, Student}