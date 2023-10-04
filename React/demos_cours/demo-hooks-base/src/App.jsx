import { useState } from 'react'
import Chrono from './components/Chrono'
import LoginForm from './components/LoginForm'

function App() {
  const [chronoVisible, setChronoVisible] = useState(false)

  return (
    <>
    <button onClick={() => setChronoVisible(!chronoVisible)}>Toggle Chrono</button>
    { chronoVisible && <Chrono />}
    </>
  )
}

export default App
