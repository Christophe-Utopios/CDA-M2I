import { useDispatch, useSelector } from "react-redux";
import { setFormMode, setSelectedRecipe } from "./recipesSlice";

const RecipeDisplay = (props) => {
    const recipe = props.recipe
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const editRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
        dispatch(setFormMode("edit"))
    }

    const deleteRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
        dispatch(setFormMode("delete"))
    }

    return (       
        <div className="mt-2 border border-info p-3 rounded">
            <div className="d-flex align-items-center">
                <h5>{recipe.title}</h5>
                <span className="ms-auto badge border border-warning d-flex align-items-center">{recipe.prepTime}</span>
                <span className="ms-2 badge border border-danger d-flex align-items-center">{recipe.cookTime}</span>
            </div>
            <hr />
            <div className="row g-3">
                <div className="col-4">
                    <h6>Ingrédients</h6>
                    <hr />
                    <ul>
                        {recipe.ingredients?.map(ingr => <li key={ingr.id}>{ingr.name}</li>)}
                    </ul>
                </div>
                <div className="col-8">
                    <div>
                        <h6>Instructions</h6>
                        <hr />
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
            <hr />
            {
                user &&
                    <div className="text-end">
                        <button className="btn btn-warning" onClick={() => editRecipeHandler()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteRecipeHandler()}>Delete</button>
                    </div>
            }
        </div>
     );
}
 
export default RecipeDisplay;