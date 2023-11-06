import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";

export default class CustomerDao {
  constructor() {}

  getAll() {
    return DataStore.data.customers;
  }

  getOneById(id) {
    return DataStore.data.customers.find((c) => (c.id == id));
  }

  save(customer) {
    customer.id = uuidv4();
    DataStore.data.customers.push(customer);
    DataStore.write();
    return customer;
  }
}
