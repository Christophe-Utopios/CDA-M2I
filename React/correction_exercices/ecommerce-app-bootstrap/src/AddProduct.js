import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, description, price: parseFloat(price) };
    await axios.post('http://localhost:3001/products', product);
    navigate("/");
  };



  const logout = () => {
    localStorage.setItem('token', "invalide")
    navigate("/")
  }

  return (
    <>

      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="row g-3">



        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nom du produit</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Product Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Prix du produit</span>
          <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <span className="input-group-text">$</span>
        </div>


        <div className="input-group">
          <span className="input-group-text">Description du produit</span>
          <textarea className="form-control" aria-label="With textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary">Ajouter</button>
        </div>
      </form >
      <h4>Quitter :</h4>
        <div className="col-12" >
          <button onClick={logout}  className="btn btn-success ">quitter</button>
        </div>

    </>
  );
}

export default AddProduct;
