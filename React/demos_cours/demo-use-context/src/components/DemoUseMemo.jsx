import { useMemo, useState } from "react"

const items = Array(10_000_000).fill(0).map((_, i) => {
    return {
        id: i,
        isFavorite: i === 9_999_999
    }
})

const DemoUseMemo = () => {
    const [counter, setCounter] = useState(7_000_000)


    const favItem = useMemo(() => items.find(e => e.isFavorite), [])

    return (
        <>
            <span>{favItem.id}</span>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </>
    )

}

export default DemoUseMemo