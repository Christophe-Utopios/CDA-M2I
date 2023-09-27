import { Pile } from "./classe/Pile.js";

const hangarNumber = new Pile<number>();

hangarNumber.empiler(42)
hangarNumber.empiler(51)
hangarNumber.empiler(58)

hangarNumber.depiler()

hangarNumber.afficherElements()

const hangarBoolean = new Pile<boolean>();

hangarBoolean.empiler(true)
hangarBoolean.depiler()

hangarBoolean.afficherElements()

