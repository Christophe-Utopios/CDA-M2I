import Contact from "./classes/Contact.js";
const contacts = [
    new Contact("Albert", "DUPONT", new Date("1985-10-25"), "a.dupont@example.com", "+33 123 456 789", ""),
    new Contact("Hélène", "DUPONT", new Date("1988-06-27"), "h.dupont@example.com", "+33 147 654 852", ""),
    new Contact("John", "SMITH", new Date("1992-04-14"), "j.smith@example.com", "+32 158 943 225", ""),
    new Contact("Clara", "GOMEZ", new Date("1967-09-13"), "c.gomez@example.com", "+33 146 997 254", ""),
    new Contact("Elizabeth", "MARTIN", new Date("1964-02-22"), "e.martin@example.com", "+33 119 788 254", "")
];
console.table(contacts);
const contactsContainer = document.getElementById("contactsContainer");
