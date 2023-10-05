import { useContext } from "react"
import { MonPremierContext } from "../contexts/MonPremierContext"

const InputComponent = () => {
    const [value, setValue] = useContext(MonPremierContext)

    return (
        <input type="text" value={value} onInput={(e) => setValue(e.target.value)} />
    )
}

export default InputComponent