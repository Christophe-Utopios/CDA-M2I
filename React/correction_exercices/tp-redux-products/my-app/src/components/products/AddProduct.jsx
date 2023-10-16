import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./productSlice";

const AddProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const [nameError, setNameError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const nameRef = useRef()
    const priceRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault()

        if(!nameRef.current.value) {
            setNameError(true)
            console.log(nameError);
            return
        }
        if(!priceRef.current.value) {
            setPriceError(true)
            return
        }
        // const newProduct = {
        //     id: Date.now(),
        //     name: nameRef.current.value,
        //     price: priceRef.current.value
        // }

        dispatch(addProduct({name: nameRef.current.value, price: priceRef.current.value}))
        setNameError(false)
        setPriceError(false)
    }

    console.table(products);
    return ( 
        <>
            <form onSubmit={formSubmitHandler}>
                <h3>Ajouter un produit</h3>
                <div className="row m-1">
                    <label htmlFor="productName" className="form-label">Nom du produit</label>
                    <input type="text" id="productName" className={`form-control ${nameError ? "is-invalid" : ""}`} ref={nameRef}/>
                    {nameError && <div className="invalid-feedback">Ce champ est obligatoire</div>}
                </div>
                <div className="row m-1">
                    <label htmlFor="productPrice" className="form-label">Prix du produit</label>
                    <input type="number" id="productPrice" className={`form-control ${priceError ? "is-invalid" : ""}`} ref={priceRef}/>
                    {priceError && <div className="invalid-feedback">Ce champ est obligatoire</div>}
                </div>
                <div className="row m-1">
                    <button type="submit" className="btn btn-success">Valider</button>
                </div>
            </form>
        </>
     );
}
 
export default AddProduct;