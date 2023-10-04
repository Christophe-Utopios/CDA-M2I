import { useState } from "react"

const FirstHookComponent = (props) => {
    // const [monPrenom, setMonPrenom] = useState(props.monPrenom)
    const [monPrenom, setMonPrenom] = useState({
        firstname: "Antoine",
        lastname: "DIEUDONNE"
    })
    const [valueInput, setValueInput] = useState("")
    const [numberArray, setNumberArray] = useState([])

    const changeFirstname = () => {
        setMonPrenom(prevState => ({...prevState, firstname: "Titi"}))
    }

    const changeValueInput= (event) => {
        setValueInput(prevState => prevState + " " + event.target.value)
    }

    const changeArrayValues = (event) => {
        setNumberArray(prevState => [...prevState, event.target.value])
    }
    
    return (
        <>
        <h1>FirstHookComponent works!</h1>
        <hr />
        <input type="text" onInput={changeValueInput} />
        <p>La valeur de la state Input : <b>{valueInput}</b></p>
        <p>Mon prénom est <b>{monPrenom.firstname}</b></p>
        <p>Mon nom de famille est <b>{monPrenom.lastname}</b></p>
        <hr />
        <button onClick={changeFirstname}>Change firstname</button>
    </>
    )
}

export default FirstHookComponent