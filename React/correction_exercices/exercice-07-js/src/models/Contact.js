let contactCount = 0 

class Contact {

    constructor(_firstname, _lastname, _birthDate) {
        this._id = ++contactCount
        this._firstname = _firstname
        this._lastname = _lastname
        this._birthDate = _birthDate
    }

    
    get firstname() {
        return this._firstname
    }

    
    get lastname() {
        return this._lastname
    }

    get birthdate() {
        return this._birthDate
    }

    
    get id() {
        return this._id
    }
}

export default Contact