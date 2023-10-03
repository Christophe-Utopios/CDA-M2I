import { useEffect, useState } from "react"

const Chrono = () => {
    const [chronoValue, setChronoValue] = useState(0)

    useEffect(() => {
        
        let timer = setInterval(() => {
            console.log("Chrono updated");
            setChronoValue(chronoValue + 1)
        }, 1000)

        return () => {
            if(timer) {
                clearInterval(timer)
                timer = undefined
            }
        }
    })

    return (
        <>
            <h1>{chronoValue}</h1>
        </>
    )
}

export default Chrono