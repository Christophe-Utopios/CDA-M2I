import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="row">
      {products.map((product) => (
       
          <div key={product.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card w-100 mb-3">
              <div className="card-body">
                <h5 className="card-title text-dark">{product.name}</h5>
                <p className="card-text text-dark">Prix : {product.price} $</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">voir produit</Link>
              </div>
            </div>
          </div>
        
      ))}
      </div>
    </div>
  );
}

export default ProductList;
