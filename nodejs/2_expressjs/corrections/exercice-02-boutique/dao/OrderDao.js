import CustomerDao from "./CustomerDao.js";
import ProductDao from "./ProductDao.js";
import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";

export default class OrderDao {
  constructor() {}

  getAll() {
    return DataStore.data.orders;
  }

  getOneById(id) {
    return DataStore.data.orders.find((o) => (o.id == id));
  }

  save(order) {
    const customerDao = new CustomerDao();
    const productDao = new ProductDao();

    // Vérifier que le client existe
    if (customerDao.getOneById(order.customer.id) == undefined) {
      throw new Error(`Unable to find customer with id: ${order.customer.id}`);
    }

    // Vérifier que les produits existent
    order.products.forEach((p) => {
      if (productDao.getOneById(p.id) === undefined) {
        throw new Error(`Unable to find the product with id: ${p.id}`);
      }
    });

    // Mettre à jour le stock
    order.products.forEach((p) => {
      let product = productDao.getOneById(p.id);
      product.stock--;
      p.stock--;
    });

    // Créer l'id de la commande
    order.id = uuidv4();

    DataStore.data.orders.push(order);
    DataStore.write();
    return order;
  }
}
