import { useContext } from 'react'
import { DogContext } from '../contexts/DogContext'
import LogButton from './LogButton'

interface CardDisplayProps {
    dogId: number
}

const CardDisplay = (props: CardDisplayProps) => {
    const context = useContext(DogContext)!
    const { dogId } = props
    const foundDog = context.dogs.find(d => d.id === dogId)!
    
    return (
        <div>
            <div>
                <img src={foundDog.imageURL} alt="Dog Picture" />
            </div>
            <div>
                <span>{foundDog.name}</span>
            </div>
            <div>
                <LogButton dogId={dogId} />
            </div>
        </div>
    )
}

export default CardDisplay