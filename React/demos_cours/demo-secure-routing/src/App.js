import './App.css';
import { Link } from 'react-router-dom';

function App() {


  const setStorage = () => {
      console.log("j'appuie sur le bouton")
      localStorage.setItem("role","Admin")
  }

  

  return (
    <div className="App">
      <Link to={"/compte"}>Go to Compte</Link>
      <br></br>
      <Link to={"/compte2"}>Go to Compte 2</Link>
      <br></br>
      <button onClick={setStorage}>identification</button>
      
    </div>
  );
}

export default App;
