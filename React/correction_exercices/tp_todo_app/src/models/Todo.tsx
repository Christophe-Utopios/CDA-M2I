class Todo {
    static todoCount = 0

    private _id: number 
    private _isDone: boolean

    constructor(private _name: string, private _dueTime: Date) {
        this._id = ++Todo.todoCount
        this._isDone = false
    }

    
    public get id() : number {
        return this._id
    }

    
    public get name() : string {
        return this._name
    }

    
    public get dueTime() : Date {
        return this._dueTime
    }

    
    public get isDone() : boolean {
        return this._isDone
    }

    switchStatus() {
        this._isDone = !this._isDone
        console.log(this);
        
    }
}

export default Todo