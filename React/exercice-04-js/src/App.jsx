import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloMister from './components/HelloMister'
import HelloMisterStateful from './components/HelloMisterStateful'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloMister />
      <HelloMisterStateful />
    </>
  )
}

export default App
