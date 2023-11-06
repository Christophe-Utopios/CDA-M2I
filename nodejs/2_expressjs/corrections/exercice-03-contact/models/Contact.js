export default class Contact {
  constructor(id, firstName, lastName, phone, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  toString() {
    return `${this.id};${this.firstName};${this.lastName};${this.phone};${this.email};`
  }
}
