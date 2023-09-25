
export class Person {
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