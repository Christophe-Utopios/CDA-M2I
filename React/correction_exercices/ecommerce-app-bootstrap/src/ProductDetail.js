import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [cart, setCart] = useContext(CartContext);
    const navigate = useNavigate();

    const addToCart = () => {
        setCart(currentCart => [...currentCart, product]);
        navigate("/cart");
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then((response) => {
            setProduct(response.data);
        });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <div className="card">
                <div className="card-header text-dark">
                <h1>{product.name}</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-dark"></h5>
                    <p className="card-text text-dark">{product.description}</p>
                    <button onClick={addToCart} className="btn btn-primary">Ajouter au panier</button>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
