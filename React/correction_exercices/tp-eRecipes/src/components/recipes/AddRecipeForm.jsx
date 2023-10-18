import { useSelector, useDispatch } from "react-redux";
import {useRef} from "react"
import { BASE_DB_URL } from "../../firebaseConfig";
import { addRecipe, setFormMode } from "./recipesSlice";

const AddRecipeForm = () => {
    const ingredients = useSelector(state => state.recipes.ingredients)
    const recipes = useSelector(state => state.recipes.recipes)
    const dispatch = useDispatch()

    const titleRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const instructionsRef = useRef()
    const ingredientsRef = useRef()

    const submitFormHandler = async (event) => {
        event.preventDefault()
        const selectedIngredients = []
        const token = localStorage.getItem("token")

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
                const response = await fetch(`${BASE_DB_URL}/recipes.json?auth=${token}`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newRecipe)
                })

                if(!response.ok) {
                    throw new Error("Something went wrong during the POST recipe request")
                }

                const data = await response.json()

                dispatch(addRecipe({id: data.name, ...newRecipe}))
                dispatch(setFormMode(""))
            }catch (error) {
                console.error(error.message);
            }
        }
    }
    
    return ( 
        <>
            <h1>Add Recipe</h1>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cookTime" className="form-label">Cooking Time:</label>
                    <input type="number" className="form-control" required min={1} ref={cookTimeRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prepTime" className="form-label">Preparation Time:</label>
                    <input type="number" className="form-control" required min={1} ref={prepTimeRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions:</label>
                    <textarea className="form-control" cols={30} rows={10} required ref={instructionsRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients:</label>
                    <select name="ingredients" id="ingredients" className="form-select" required multiple ref={ingredientsRef}>
                        {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
                    </select>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
     );
}
 
export default AddRecipeForm;