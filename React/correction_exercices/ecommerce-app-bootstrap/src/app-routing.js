import { createBrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Signin from './Signin';


const router = createBrowserRouter([
    {
        path : "/",
        element : <Menu></Menu>,
        children : [
            {
                path : "/",
                element : <ProductList></ProductList>
            },
            {
                path : "/product/:id",
                element : <ProductDetail></ProductDetail>
            }
            ,
            {
                path : "/add-product",
                element : <ProtectedRoute><AddProduct /></ProtectedRoute>
            }
            ,
            {
                path : "/cart",
                element : <Cart></Cart>
            }
            ,
            {
                path : "/signin",
                element : <Signin />
            }
        ]

    }
])

export default router
