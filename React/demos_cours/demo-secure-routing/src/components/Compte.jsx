import { useNavigate } from "react-router-dom"


const Compte = () => {
    const navigate = useNavigate()

    const clearStorage = () => {
        console.log("j'appuie sur le bouton")
        localStorage.clear()
       // localStorage.removeItem('role')
       navigate("/")
    }


    return (
        <>
        <h1>Page Secure</h1>
        <br></br>
      <button onClick={clearStorage}>quitter</button>
        </>
    )
}

export default Compte