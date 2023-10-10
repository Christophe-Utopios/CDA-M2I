import './App.css';
import { Link, useNavigate } from 'react-router-dom'

function App() {

    const navigate = useNavigate();


  const clickHandler= () => {
    console.log("j'ai clique sur le bouton")
    navigate("/projects/123")
  }

  return (
    <div className='App'>
      <main>
        <Link to={"/projects/321"}>Aller au projet</Link>
        <br />
        <Link to={"/projects/321?mode=1&toto=2"}>Aller au projet</Link>
        <br />
        <button onClick={clickHandler}>Clique pour aller au projet</button>
      </main>
    </div>
   
  );
}

export default App;
