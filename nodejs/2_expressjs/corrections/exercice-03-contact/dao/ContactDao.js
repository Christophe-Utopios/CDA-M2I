import fs from 'fs';
import Contact from '../models/Contact.js';
import { v4 as uuidv4 } from 'uuid';

export default class ContactDao {
  constructor(file) {
    this.contacts = [];
    this.file = file;
  }

  readFile() {
    const raw = fs.readFileSync(this.file, "utf-8");
    raw.split(/\r?\n/).forEach((line) => {
        this.contacts.push(this.textToObject(line));
    });
  }

  textToObject(text) {
    const values = text.split(';');
    return new Contact(values[0], values[1], values[2], values[3], values[4]);
  }

  arrayToCSV(array) {
    return array.map(obj => {
        return obj.toString();
      }).join('\n');
    }

  writeFile() {
    const data = this.arrayToCSV(this.contacts);
    fs.writeFileSync(this.file, data);
  }

  getAll() {
    return this.contacts;
  }

  getOneById(id) {
    return this.contacts.find(c => c.id == id);
  }

  save(contact) {
    contact.id = uuidv4();
    this.contacts.push(contact);
    this.writeFile();
  }

  update(contactUpdate) {
    const contact = this.getOneById(contactUpdate.id);
    if (contact == undefined) {
      return false;
    }
    contact.firstName = contactUpdate.firstName;
    contact.lastName = contactUpdate.lastName;
    contact.phone = contactUpdate.phone;
    contact.email = contactUpdate.email;

    this.writeFile();
    return true;
  }

  delete(id) {
    this.contacts = this.contacts.filter((c) => c.id !== id);
    this.writeFile();
  }

}
