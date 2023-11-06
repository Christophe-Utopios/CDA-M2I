import express from "express";
import CustomerDao from "../dao/CustomerDao.js";
import Customer from "../models/Customer.js";

const customers = express.Router();
const customerDao = new CustomerDao();

// GET all customers
customers.get("/", (req, res) => {
  return res.json(customerDao.getAll());
});

// GET one customer by id
customers.get("/:id", (req, res) => {
  const customer = customerDao.getOneById(req.params.id);
  return customer === undefined ? res.sendStatus(404) : res.json(customer);
});

// CREATE one customer
customers.post("/", (req, res) => {
  const { firstName, lastName, phone } = req.body;
  const customer = new Customer(null, firstName, lastName, phone);
  return res.json(customerDao.save(customer));
});

export default customers;
