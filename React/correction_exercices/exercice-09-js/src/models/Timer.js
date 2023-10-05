let timerCount = 0

class Timer {
    constructor(_time, _name) {
        this._id = ++timerCount
        this._time = _time
        this._name = _name
    }

    
    get time() {
        return this._time
    }

    
    get id() {
        return this._id
    }

    
    get name() {
        return this._name
    }
    
    
    
}

export default Timer