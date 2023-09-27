export class Pile<T> {

    private elements: T[];

    constructor(){
        this.elements = []
    }

    public empiler(element: T): void{
        this.elements.push(element)
    }

    public depiler(): void{
        this.elements.pop()
    }

    public afficherElements(): void {
        console.table(this.elements)
    }

}