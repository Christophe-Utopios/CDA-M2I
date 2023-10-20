import { useSelector, useDispatch } from "react-redux";
import {useRef} from "react"
import { editRecipe, setFormMode } from "./recipesSlice";
import { BASE_DB_URL } from "../../firebaseConfig";

const EditRecipeForm = () => {
    const selectedRecipe = useSelector(state => state.recipes.selectedRecipe)
    const ingredients = useSelector(state => state.recipes.ingredients)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const titleRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const instructionsRef = useRef()
    const ingredientsRef = useRef()

    const submitFormHandler = async (event) => {
        event.preventDefault()
        const selectedIngredients = []

        for (const option of ingredientsRef.current.options){
            if (option.selected) {
                selectedIngredients.push({id: option.value, name: option.textContent})
            }
        }

        const newRecipe = {
            title: titleRef.current.value,
            cookTime: +cookTimeRef.current.value,
            prepTime: +prepTimeRef.current.value,
            instructions: instructionsRef.current.value,
            ingredients: selectedIngredients
        }

        if (token) {
            try{
                const response = await fetch(`${BASE_DB_URL}/recipes/${selectedRecipe.id}.json?auth=${token}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newRecipe)
                })

                if(!response.ok) {
                    throw new Error("Something went wrong during the PATCH recipe request")
                }

                const data = await response.json()

                dispatch(editRecipe({...data, id: selectedRecipe.id}))
                dispatch(setFormMode(""))
            }catch (error) {
                console.error(error.message);
            }
        }
    }
    return ( 
        <>
            <h1>Edit Recipe</h1>
                <hr />
                <form onSubmit={submitFormHandler}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input type="text" className="form-control" required ref={titleRef} defaultValue={selectedRecipe.title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cookTime" className="form-label">Cooking Time:</label>
                        <input type="number" className="form-control" required min={1} ref={cookTimeRef} defaultValue={selectedRecipe.cookTime}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prepTime" className="form-label">Preparation Time:</label>
                        <input type="number" className="form-control" required min={1} ref={prepTimeRef} defaultValue={selectedRecipe.prepTime}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="instructions" className="form-label">Instructions:</label>
                        <textarea className="form-control" cols={30} rows={10} required ref={instructionsRef} defaultValue={selectedRecipe.instructions}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ingredients" className="form-label">Ingredients:</label>
                        <select 
                            name="ingredients" 
                            id="ingredients" 
                            className="form-select" 
                            required 
                            multiple 
                            ref={ingredientsRef}
                            defaultValue={selectedRecipe.ingredients?.map(i => i.id)}
                        >
                            {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
                        </select>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-warning">Edit</button>
                    </div>
                </form>
        </>
     );
}
 
export default EditRecipeForm;