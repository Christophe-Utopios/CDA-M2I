import { useContext } from "react"
import { MonPremierContext } from "../contexts/MonPremierContext"

const MonPremierComponent = () => {
    const [trucMuche] = useContext(MonPremierContext)

    return (
        <p>
            La valeur dans le contexte est: <b>{trucMuche}</b>
        </p>
    )
}

export default MonPremierComponent