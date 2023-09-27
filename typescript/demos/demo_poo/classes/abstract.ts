abstract class Base {
  // private int: number;

    constructor(private int: number){
      //  this.int = int
    }

    abstract toStringbasic(): string

    get getInt(){
        return this.int
    }

    set setInt(value: number){
        this.int = value
    }

    parler(){
        console.log("toto")
    }
}

//let maBase = new Base(42);

class Basic extends Base {

    private firstname: string;

    constructor(firstname: string, int: number){
        super(int)
        this.firstname = firstname
    }

    toStringbasic(): string {
       
        return "Hello World "+ this.getInt.toString()
    }
}

let b:Basic = new Basic("toto",42)

console.log(b.toStringbasic())