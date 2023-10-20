import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import SignForm from './components/auth/SignForm'
import Modal from './components/shared/Modal'
import NavBar from './components/shared/NavBar'
import { setFormMode, setRecipes } from './components/recipes/recipesSlice'
import AddRecipeForm from './components/recipes/AddRecipeForm'
import { BASE_DB_URL } from './firebaseConfig'
import { useEffect } from 'react'
import RecipeDisplay from './components/recipes/RecipeDisplay'
import EditRecipeForm from './components/recipes/EditRecipeForm'
import DeleteRecipeForm from './components/recipes/DeleteRecipeForm'

function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.recipes.formMode)
  const recipes = useSelector(state => state.recipes.recipes)
  const dispatch = useDispatch()

  const refreshRecipes = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}/recipes.json`)

      if(!response.ok){
        throw new Error("Something went wrong during the GET request")
      }

      const data = await response.json()

      const tmpRecipes = []
      for (const key in data) {
        tmpRecipes.push({id: key, ...data[key]})
      }

      dispatch(setRecipes(tmpRecipes))
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    refreshRecipes()
  }, [])

  return (
    <>
      {formMode === "add" && <Modal onClose={() => dispatch(setFormMode(""))}><AddRecipeForm/></Modal>}
      {formMode === "edit" && <Modal onClose={() => dispatch(setFormMode(""))}><EditRecipeForm/></Modal>}
      {formMode === "delete" && <Modal onClose={() => dispatch(setFormMode(""))}><DeleteRecipeForm/></Modal>}
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <div className='row my-3'>
          <div className='col-10 offset-1 bg-dark rounded text-light p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>Recipes List</h3>
              {user && <button className='btn btn-success' onClick={() => dispatch(setFormMode("add"))}>Add</button>}
            </div>
            <hr />
            {
              recipes.length === 0 ? (
                <p>Il n'y a pas de recettes</p>
              ) : recipes.map(recipe => <RecipeDisplay key={recipe.id} recipe={recipe} />)
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
