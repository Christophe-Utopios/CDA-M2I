import { useDispatch, useSelector } from "react-redux";
import { BASE_DB_URL } from "../../firebaseConfig";
import { deleteRecipe, setFormMode } from "./recipesSlice";

const DeleteRecipeForm = () => {
    const ingredients = useSelector(state => state.recipes.ingredients)
    const selectedRecipe = useSelector(state => state.recipes.selectedRecipe)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const submitFormHandler = async (event) => {
        event.preventDefault()

        if (token) {
            try {
                const response = await fetch(`${BASE_DB_URL}/recipes/${selectedRecipe.id}.json?auth=${token}`, {
                    method: "DELETE"
                })

                if(!response.ok) {
                    throw new Error("Something went wrong during the DELETE recipe request")
                }

                const data = response.json()

                dispatch(deleteRecipe(selectedRecipe))
                dispatch(setFormMode(""))
            } catch (error) {
                console.error(error.message);
            }
        }
    }

    return ( 
        <>
            <h1>Delete Recipe</h1>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" disabled  defaultValue={selectedRecipe.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cookTime" className="form-label">Cooking Time:</label>
                    <input type="number" className="form-control" disabled min={1} defaultValue={selectedRecipe.cookTime}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prepTime" className="form-label">Preparation Time:</label>
                    <input type="number" className="form-control" disabled min={1} defaultValue={selectedRecipe.prepTime}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions:</label>
                    <textarea className="form-control" cols={30} rows={10} disabled defaultValue={selectedRecipe.instructions}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients:</label>
                    <select 
                        name="ingredients" 
                        id="ingredients" 
                        className="form-select" 
                        disabled
                        multiple 
                        defaultValue={selectedRecipe.ingredients?.map(i => i.id)}
                    >
                        {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
                    </select>
                </div>
                <div className="text-end">
                    <button className="btn btn-danger">Confirm</button>
                </div>
            </form>
        </>
     );
}
 
export default DeleteRecipeForm;