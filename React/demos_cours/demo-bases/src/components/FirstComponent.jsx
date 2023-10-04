import DemoTableRow from "./DemoTableRow"

/* 
    Un composant React n'est ni plus ni moins qu'une fonction Javascriot exportée par défaut dans un fichier. L'utilisation de cette fonction à l'extérieur passera par un appel sous la forme d'une balise HTML
*/

// Syntaxe fonction (function)
function FirstComponent() {
    return (
        <div>
            <h1>FirstComponent</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
            <table>
        <thead>
          <tr>
            <th>ColA</th>
            <th>ColB</th>
            <th>ColC</th>
          </tr>
        </thead>
        <tbody>
        <tr>  
          <DemoTableRow/>    
          </tr>
          <tr>
          <DemoTableRow/>    
          </tr>
          <tr>
          <DemoTableRow/>    
          </tr>
        </tbody>
      </table>
        </div>
    )
}

// Syntaxe constante (const)
const FirstComponentA = () => {

}


export default FirstComponent