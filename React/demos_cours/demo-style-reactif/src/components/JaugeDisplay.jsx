import classes from './JaugeDisplay.module.css'
import { useEffect, useRef, useState } from "react"

const JaugeDisplay = (props) => {
    const { baseTime } = props

    const jaugeRef = useRef()

    const [currentTime, setCurrentTime] = useState(baseTime * 10)

    useEffect(() => {
        jaugeRef.current.style.right = `${getPercent()}%`
        jaugeRef.current.style.filter = `hue-rotate(${getPercent() * 3.6}deg)`

        let interval 

        if (currentTime !== 0) {
            interval = setInterval(() => {
                setCurrentTime(currentTime - 1)
            }, 100)
        }

        return () => {
            if (interval) {
                clearInterval(interval)
                interval = undefined
            }
        }
    })

    const getPercent = () => {
        return Math.floor((currentTime / baseTime) *10)
    }



    return (
        <div className={classes.jaugeDisplay}>
            <span>{getPercent()}%</span>
            <div ref={jaugeRef}></div>
        </div>
    )


}

export default JaugeDisplay