class Contact {
    static contactCount = 0 
    private _id: number

    constructor(private _firstname: string, private _lastname: string, private _birthDate: string) {
        this._id = ++Contact.contactCount
    }

    
    public get firstname() : string {
        return this._firstname
    }

    
    public get lastname() : string {
        return this._lastname
    }

    public get birthdate(): string {
        return this._birthDate
    }

    
    public get id() : number {
        return this._id
    }
}

export default Contact