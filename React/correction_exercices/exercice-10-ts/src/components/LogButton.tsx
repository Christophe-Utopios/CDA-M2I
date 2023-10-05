import { useContext } from 'react'
import { DogContext } from '../contexts/DogContext'

const LogButton = (props: {dogId: number}) => {
    const context = useContext(DogContext)!
    const { dogId } = props
    const foundDog = context.dogs.find(d => d.id === dogId)!

    const logDog = () => {
        console.log(foundDog);
        
    }

    return (
        <button onClick={logDog}>Details</button>
    )
}

export default LogButton