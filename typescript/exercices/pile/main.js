import { Pile } from "./classe/Pile.js";
const hangarNumber = new Pile();
hangarNumber.empiler(42);
hangarNumber.empiler(51);
hangarNumber.empiler(58);
hangarNumber.depiler();
hangarNumber.afficherElements();
const hangarBoolean = new Pile();
hangarBoolean.empiler(true);
hangarBoolean.depiler();
hangarBoolean.afficherElements();