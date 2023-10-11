import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // premiere etape installations de axios : npm install axios

  // Recuperation
  useEffect(() => {
    axios.get("http://localhost:5000/personnes")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error("Erreur : ",error)
    })
  },[])

  const addPerson = () => {
    axios.post("http://localhost:5000/personnes",{ nom : "Quinaux", prenom : "flore"})
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error("Erreur : ",error)
    })
  }

  const deletePerson = () => {
    const id = 3
    axios.delete(`http://localhost:5000/personnes/${id}`)
    .then(() => {
      console.log("personne avec id "+id+" supprimer")
    })
    .catch(error => {
      console.error("Erreur : ",error)
    })

  }

  const updatePerson = () => {
    const id = 2
    axios.put(`http://localhost:5000/personnes/${id}`,{ nom : "Delacroix", prenom : "pauline"})
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error("Erreur : ",error)
    })
  }


  return (
    <div className="App">
     <button onClick={addPerson}>Ajout</button>
      <br></br>
      <button onClick={deletePerson}>Suppression</button>
      <br></br>
      <button onClick={updatePerson}>Modification</button>
    </div>
  );
}

export default App;
