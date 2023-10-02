class Person {
    constructor (private _firstname: string, private _lastname: string) { }

    
    public get firstname() : string {
        return this._firstname
    }

    
    public get lastname() : string {
        return this._lastname
    }
    
    
}

export default Person