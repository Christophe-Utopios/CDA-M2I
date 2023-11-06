import express from "express";
import ProductDao from "../dao/ProductDao.js";
import Product from "../models/Product.js";

const products = express.Router();
const productDao = new ProductDao();

// GET all products
products.get("/", (req, res) => {
  return res.json(productDao.getAll());
});

// GET one product by id
products.get("/:id", (req, res) => {
  const product = productDao.getOneById(req.params.id);
  return product === undefined ? res.sendStatus(404) : res.json(product);
});

// CREATE one product
products.post("/", (req, res) => {
  const { title, price, stock } = req.body;
  const product = new Product(null, title, price, stock);
  return res.json(productDao.save(product));
});

export default products;
