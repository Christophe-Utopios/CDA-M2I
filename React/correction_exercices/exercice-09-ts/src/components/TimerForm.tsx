import { FormEvent, useRef, MutableRefObject } from 'react'
import Timer from '../models/Timer'
import classes from './TimerForm.module.css'
import playIcon from '../assets/play_icon.svg'

interface TimerFormProps {
    onAddTimer: (newTimer: Timer) => void
}

const TimerForm = (props: TimerFormProps) => {
    const { onAddTimer } = props

    const houTimeInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const minTimeInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const secTimeInputRef = useRef() as MutableRefObject<HTMLInputElement>
    const timerNameInputRef = useRef() as MutableRefObject<HTMLInputElement>

    const submitFormHandler = (event: FormEvent) => {
        event.preventDefault()

        const hours = +houTimeInputRef.current.value
        const minutes = +minTimeInputRef.current.value
        const seconds = +secTimeInputRef.current.value
        const name = timerNameInputRef.current.value

        if (!!name && (hours >= 0 && hours <= 24) && (minutes >= 0 && minutes <= 60) && (seconds >= 0 && seconds <= 60)) {
            const time = hours * 3600 + minutes * 60 + seconds
    
            onAddTimer(new Timer(time, name))
        }

    }

    return (
        <form onSubmit={submitFormHandler} className={classes.timerForm}>
            <div>
                <h3>Name:</h3>
                <input type="text" defaultValue={'Timer'} ref={timerNameInputRef} />
            </div>
            <div>
                <h3>Time:</h3>
                <div>
                    <input type="number" defaultValue={0} min={0} max={24} ref={houTimeInputRef} />
                    <span>:</span>
                    <input type="number" defaultValue={0} min={0} max={60} ref={minTimeInputRef} />
                    <span>:</span>
                    <input type="number" defaultValue={0} min={0} max={60} ref={secTimeInputRef} />
                </div>
            </div>
            <div>
                <button><img src={playIcon} alt="Play Icon" /></button>
            </div>
        </form>
    )
}

export default TimerForm