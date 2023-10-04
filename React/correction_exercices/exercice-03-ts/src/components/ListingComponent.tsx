import { useState } from "react"

const ListingComponent = () => {
    const [listing, setListing] = useState<string[]>([])

    const addAnElement = () => {
        setListing([...listing, "Titi"])
    }

    return (
        <>
            <button onClick={addAnElement}>Add an Element</button>
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