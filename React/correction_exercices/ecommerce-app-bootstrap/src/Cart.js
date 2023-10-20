import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const [cart] = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((sum, product) => sum + product.price, 0);
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul className="list-group list-group-flush">
                {cart.map((product, index) => (
                    <li key={index} className="list-group-item">
                        {product.name} : ${product.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
}

export default Cart;
