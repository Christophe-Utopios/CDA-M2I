import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./productSlice";

const ProductItem = (props) => {
    const dispatch = useDispatch()
    const product = props.product
    const nameRef = useRef()
    const priceRef = useRef()
    const [update, setUpdate] = useState(false)

    const updateProductHandler = (event) => {
        event.preventDefault()

        const newName = nameRef.current.value ? nameRef.current.value : product.name
        const newPrice = priceRef.current.value ? priceRef.current.value : product.price

        const updatedProduct = {
            id: product.id,
            name: newName,
            price: newPrice
        }

        dispatch(updateProduct(updatedProduct))
        setUpdate(!update)
    }

    return (  
    <>
        {
            update ? 
            <tr>
                <td>
                    <input  type="text" 
                            placeholder={product.name} 
                            className="form-control" 
                            ref={nameRef} 
                            defaultValue={product.name}
                    />
                </td>
                <td>
                    <input 
                        type="number" 
                        placeholder={product.price} 
                        className="form-control" 
                        ref={priceRef} 
                        defaultValue={product.price}
                    />
                </td>
                <td>
                    <button onClick={updateProductHandler} className="btn btn-success me-1">Valider</button>
                    <button onClick={() => setUpdate(!update)} className="btn btn-danger">Annuler</button>
                </td>
            </tr>
            :
            <tr>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                    <button onClick={() => setUpdate(!update)} className="btn btn-warning me-1">Modifier</button>
                    <button onClick={() => dispatch(deleteProduct(product.id))} className="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        }
    </>
);
}
 
export default ProductItem;