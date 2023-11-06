import express from "express";
import OrderDao from "../dao/OrderDao.js";
import Order from "../models/Order.js";

const orders = express.Router();

const orderDao = new OrderDao();

// GET all orders
orders.get("/", (req, res) => {
  return res.json(orderDao.getAll());
});

// GET one order by id
orders.get("/:id", (req, res) => {
  const order = orderDao.getOneById(req.params.id);
  return order === undefined ? res.sendStatus(404) : res.json(order);
});

// CREATE one order
orders.post("/", (req, res) => {
  const { customer, products } = req.body;
  const order = new Order(null, customer, products);

  try {
    orderDao.save(order);
  } catch (err) {
    return res.status(409).json({code: 409, message: err.message});
  }

  return res.json(order);
});

export default orders;
