import { useState } from 'react'
import MonPremierComponent from './components/MonPremierComponent'
import { MonPremierContext } from './contexts/MonPremierContext'
import InputComponent from './components/InputComponent'
import DemoUseMemo from './components/DemoUseMemo'

function App() {
  const maState = useState("Titi")  

  return (
    <MonPremierContext.Provider value={maState}>
      <h1>App</h1>
      <hr />
      <InputComponent />
      <hr />
      <MonPremierComponent />
      <hr />
      <DemoUseMemo />
    </MonPremierContext.Provider>
  )
}

export default App
