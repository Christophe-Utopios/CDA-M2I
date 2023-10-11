import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // premiere etape installations de axios : npm install axios

  useEffect(() => {
    axios.get("http://localhost:5000/personnes")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error("Erreur : ",error)
    })
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
