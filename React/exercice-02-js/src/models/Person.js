class Person {
    constructor (_firstname, _lastname) {
        this._firstname = _firstname
        this._lastname = _lastname
    }

    
    get firstname() {
        return this._firstname
    }

    
    get lastname() {
        return this._lastname
    }
    
    
}

export default Person