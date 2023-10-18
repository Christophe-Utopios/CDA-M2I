import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import SignForm from './components/auth/SignForm'
import Modal from './components/shared/Modal'
import NavBar from './components/shared/NavBar'
import { setFormMode } from './components/recipes/recipesSlice'
import AddRecipeForm from './components/recipes/AddRecipeForm'
import { BASE_DB_URL } from './firebaseConfig'
import { useEffect } from 'react'

function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.recipes.formMode)
  const dispatch = useDispatch()

  const refreshRecipes = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}/recipes.json`)

      if(!response.ok){
        throw new Error("Something went wrong during the GET request")
      }

      const data = await response.json()

      console.log(data);

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
          </div>
        </div>
      </main>
    </>
  )
}

export default App
