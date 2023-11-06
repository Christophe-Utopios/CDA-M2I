import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";

export default class ProductDao {
  constructor() {}

  getAll() {
    return DataStore.data.products;
  }

  getOneById(id) {
    return DataStore.data.products.find((p) => (p.id == id));
  }

  save(product) {
    product.id = uuidv4();
    DataStore.data.products.push(product);
    DataStore.write();
    return product;
  }
}
