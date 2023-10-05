class Timer {
    static timerCount = 0

    private _id: number

    constructor(private _time: number, private _name: string) {
        this._id = ++Timer.timerCount
    }

    
    public get time() : number {
        return this._time
    }

    
    public get id() : number {
        return this._id
    }

    
    public get name() : string {
        return this._name
    }
    
    
    
}

export default Timer