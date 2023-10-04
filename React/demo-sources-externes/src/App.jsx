import dringSound from './assets/sounds/dring.mp3'

function App() {

  const playMySound = () => {
    const newSound = new Audio(dringSound)

    newSound.play()
  }

  return (
    <>
      <button onClick={playMySound}>Play Sound</button>
    </>
  )
}

export default App
