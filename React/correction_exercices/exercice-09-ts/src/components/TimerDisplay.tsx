import Timer from '../models/Timer'
import classes from './TimerDisplay.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import ringSound from '../assets/ring.mp3'

interface TimerProps {
    timer: Timer,
    onDeleteTimer: (timer: Timer) => void
}

const TimerDisplay = (props: TimerProps) => {
    const { time, name } = props.timer
    const [currentTime, setCurrentTime] = useState(time)

    const divRef = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        divRef.current.style.right = `${Math.floor(currentTime / time * 100)}%`
        divRef.current.style.filter = `hue-rotate(${360 - Math.floor(currentTime / time * 160)}deg)`
        
        console.log( );
        
        
        let interval: number | undefined 

        if (currentTime > 0) {
            interval = setInterval(() => {       
                setCurrentTime(currentTime - 1)
            }, 1000)
        }
        
        return () => {
            if (interval) {
                clearInterval(interval)
                interval = undefined
            }
        }
    }, [currentTime, time])

    useEffect(() => {
        if (currentTime === 0) {
            const sound = new Audio(ringSound)
            sound.play()
        }
    }, [currentTime])

    const formattedTime = () => {
        const hours = Math.floor(currentTime / 3600)
        const minutes = Math.floor((currentTime - hours * 3600) / 60)
        const seconds = Math.floor(currentTime % 60)

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className={classes.timer}>
            <div>
                {currentTime !== 0 ? (
                    <>
                    <span>{name}</span>
                    <span>{formattedTime()}</span>
                </>
                ) : (
                    <button onClick={() => props.onDeleteTimer(props.timer)}>DONE</button>
                )}
            </div>
            <div ref={divRef}></div>
        </div>
    )
}

export default TimerDisplay