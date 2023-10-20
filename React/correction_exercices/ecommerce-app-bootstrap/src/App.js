import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import Menu from './Menu';
import Cart from './Cart';
import ProtectedRoute from './ProtectedRoute';
import Signin from './Signin';
import router from './app-routing'

function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}

export default App;
