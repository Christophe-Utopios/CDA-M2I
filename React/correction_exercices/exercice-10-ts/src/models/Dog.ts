class Dog {
    static dogCount = 0

    private _id: number

    constructor(private _name: string, private _breed: string, private _birthDate: string, private _imageURL: string) {
        this._id = ++Dog.dogCount
    }
    
    public get id() : number {
        return this._id
    }   
    
    public get name() : string {
        return this._name
    }

    
    public get breed() : string {
        return this._breed
    }

    public get birthDate(): string {
        return this._birthDate
    }

    public get imageURL(): string {
        return this._imageURL
    }
}

export default Dog