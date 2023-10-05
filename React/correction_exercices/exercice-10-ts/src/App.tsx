import { useState } from 'react'
import Dog from './models/Dog'
import { DogContext } from './contexts/DogContext'
import DogForm from './components/DogForm'
import CardDisplay from './components/CardDisplay'

function App() {
  const [dogs, setDogs] = useState<Dog[]>([])

  return (
    <DogContext.Provider value={{dogs, setDogs}}>
      <DogForm />
      {dogs.map(dog => (
        <CardDisplay key={dog.id} dogId={dog.id} />
      ))}
    </DogContext.Provider>
  )
}

export default App
