import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import PersonTable from './components/PersonTable';
import Person from './models/Person';

function App() {

  const myPersons: Person[] = [
    new Person("Albert", "DUPONT"),
    new Person("Maria", "DUPONT"),
    new Person("Chloé", "DUPONT"),
    new Person("Sylvia", "MARTEZ")
  ]

  const myPersonsEmpty: Person[] = []

  return (
    <div className="App">
      <PersonTable persons={myPersons} />
    </div>
  );
}

export default App;
