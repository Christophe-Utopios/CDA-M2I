import { FormEvent, useContext, useRef, MutableRefObject } from 'react'
import { DogContext } from '../contexts/DogContext'
import Dog from '../models/Dog'

const breeds = ['Labrador', 'Chihuahua', 'Doberman', 'Border Collie', 'Bâtard']

const DogForm = () => {
    const context = useContext(DogContext)!
    const { setDogs } = context

    const dogPictureDisplayRef = useRef() as MutableRefObject<HTMLImageElement>
    const dogNameInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const dogBreedSelectRef = useRef() as MutableRefObject<HTMLSelectElement>
    const dogBirthdateInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const dogImageURLInputRef = useRef() as MutableRefObject<HTMLInputElement>



    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault()

        const name = dogNameInputRef.current.value
        const breed = dogBreedSelectRef.current.value
        const birthDate = dogBirthdateInputRef.current.value
        const imageURL = dogImageURLInputRef.current.value

        const newDog = new Dog(name, breed, birthDate, imageURL)

        setDogs((prevDogs: Dog[]) => [...prevDogs, newDog])

    }

    const handleImageChanged = (event: FormEvent) => {
        dogPictureDisplayRef.current.src = (event.target as HTMLInputElement).value
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <img src="" alt="Dog Picture" ref={dogPictureDisplayRef} />
            </div>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" ref={dogNameInputRef} required />
            </div>
            <div>
                <label htmlFor="birthDate">Birth date: </label>
                <input type="date" ref={dogBirthdateInputRef} required />
            </div>
            <div>
                <label htmlFor="imageURL">Picture: </label>
                <input type="text" ref={dogImageURLInputRef} onInput={handleImageChanged} required />
            </div>
            <div>
                <label htmlFor="breed">Breed: </label>
                <select id="breed" ref={dogBreedSelectRef}>
                    <option value="">Select a breed</option>
                    {breeds.map((breed) => (
                        <option value={breed}>{breed}</option>
                    ))}
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default DogForm