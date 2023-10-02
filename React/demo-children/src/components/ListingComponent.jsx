import { useState } from 'react'

const ListingComponent = (props) => {
    // const listingPerson = [] 
    const [listingP, setListingP] = useState([])
    const [inputValue, setInputValue] = useState("")

    const addPersonToList = () => {
        // listingPerson.push("Titi")
        setListingP([...listingP, "Titi"])
    }
    
    const editInput = (event) => {
        setInputValue(event.target.value)
        console.log(inputValue);
    }

    return (
        <>
            <input type="text" value={inputValue} onInput={editInput} />
            <hr />
            <ul>
                {listingP.map((person, index) => <li key={index}>{person}</li>)}
            </ul>
            <hr />
            <button onClick={addPersonToList}>Add a Person</button>
        </>
    )
}

export default ListingComponent