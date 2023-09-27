export class Pile {
    constructor() {
        this.elements = [];
    }
    empiler(element) {
        this.elements.push(element);
    }
    depiler() {
        this.elements.pop();
    }
    afficherElements() {
        console.table(this.elements);
    }
}
