import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = useSelector(state => state.products.products)

    return (  
        <>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody  className="table-group-divider">
                    {
                        products.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
 
export default ProductList;