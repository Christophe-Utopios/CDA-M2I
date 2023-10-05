import classes from './App.module.css'

import { useState } from "react"
import TimerDisplay from "./components/TimerDisplay"
import TimerForm from './components/TimerForm'

function App() {
  const [timers, setTimers] = useState([])

  const addTimerHandler = (newTimer) => {
    if (timers.length < 5) {
      setTimers(prevTimers => [...prevTimers, newTimer])
    }
  }

  const deleteTimerHandler = (timer) => {
    setTimers(prevTimers => prevTimers.filter(t => t.id !== timer.id))
  }

  return (
    <div className={classes.app}>
      <TimerForm onAddTimer={addTimerHandler} />
      <div>
        {timers.map(t => <TimerDisplay key={t.id} timer={t} onDeleteTimer={deleteTimerHandler}/>)}
      </div>
    </div>
  )
}

export default App
