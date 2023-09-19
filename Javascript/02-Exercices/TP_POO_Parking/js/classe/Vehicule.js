export default class Vehicule {

    constructor(id,startDate = new Date()){
        this._id = id; 
        this._startDate = startDate;
        this._endDate ='';
    }

    get id() { return this._id}
    get startDate() { return this._startDate}
    get endDate() { return this._endDate}

    set Id(value) { this._id = value}
    set StartDate(value) { this._startDate = value}
    set EndDate(value) { this._endDate = value}

}

