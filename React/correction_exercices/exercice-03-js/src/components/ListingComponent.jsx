import { useState } from "react"

const ListingComponent = () => {
    const [listing, setListing] = useState([])

    const addElementToListing = () => {
        setListing([...listing, "Titi"])
    }

    return (
        <>
            <button onClick={addElementToListing}>Add an Element</button>
            <hr />
            <ul>
                {listing.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </>
    )
}

export default ListingComponent