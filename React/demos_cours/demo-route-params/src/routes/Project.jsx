import { useParams, useSearchParams } from "react-router-dom"


const Project = () => {

    const objParams = useParams()
    const { monparams } = objParams

    const [searchParams] = useSearchParams()

    const mode = searchParams.get('mode')
    const toto = searchParams.get('toto')


    return(
        <>
        <h1>Ma Page Projet</h1>
        <p>Valeur params obligatoire</p>
        <h2>{monparams}</h2>
        <p>Valeur params optionelle</p>
        <h2>mode = {mode}</h2>
        <h2>toto = {toto}</h2>
        </>
    )
}

export default Project